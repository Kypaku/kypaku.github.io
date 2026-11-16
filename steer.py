#!/usr/bin/env python3
"""
sudo apt install python3-evdev
sudo usermod -aG input $USER
echo 'KERNEL=="uinput", GROUP="input", MODE="0660", OPTIONS+="static_node=uinput"' | sudo tee /etc/udev/rules.d/99-uinput.rules
sudo modprobe uinput
sudo udevadm control --reload-rules && sudo udevadm trigger
Аналоговое руление с клавиатуры для игр под Wine (Linux).
Читает клавиатуру через evdev и создаёт виртуальный геймпад через uinput.
Wine видит его как обычный джойстик.

A / D   — руль влево / вправо
F2      — вкл/выкл плавный режим (звук: два высоких = вкл, один низкий = выкл)
Ctrl+C  — выход (в терминале)

Выкл:  цифровое руление (сразу ±1)
Вкл:   при зажатии значение плавно ползёт от START к 1 за RAMP секунд
"""

import math
import selectors
import shutil
import struct
import subprocess
import tempfile
import time
import wave
from pathlib import Path

import evdev
from evdev import AbsInfo, UInput, ecodes as e

# --- настройки -------------------------------------------------------------
KEY_LEFT, KEY_RIGHT, KEY_TOGGLE = e.KEY_A, e.KEY_D, e.KEY_F2

RAMP = 0.30    # сек от касания до полного поворота
START = 0.10   # значение в момент касания
CURVE = 2.0    # форма: 2 — smoothstep, 3 — дольше в малых значениях (не ниже 2)
TICK = 0.002   # период обновления, сек
# ---------------------------------------------------------------------------

AXIS = 32767
smooth = True


# --- звук ------------------------------------------------------------------
def make_tone(path, pattern, rate=44100):
    frames = bytearray()
    for freq, ms in pattern:
        n = int(rate * ms / 1000)
        for i in range(n):
            env = min(1.0, i / 200, (n - i) / 200)  # без щелчков на краях
            s = int(12000 * env * math.sin(2 * math.pi * freq * i / rate))
            frames += struct.pack("<h", s)
        frames += b"\x00\x00" * int(rate * 0.02)  # пауза между писками
    with wave.open(str(path), "wb") as w:
        w.setnchannels(1)
        w.setsampwidth(2)
        w.setframerate(rate)
        w.writeframes(bytes(frames))


def find_player():
    for cmd in (["paplay"], ["pw-play"], ["aplay", "-q"]):
        if shutil.which(cmd[0]):
            return cmd
    return None


TMP = Path(tempfile.mkdtemp(prefix="steer_"))
SND_ON, SND_OFF = TMP / "on.wav", TMP / "off.wav"
make_tone(SND_ON, [(1200, 70), (1600, 70)])
make_tone(SND_OFF, [(450, 160)])
PLAYER = find_player()


def play(path):
    if PLAYER:
        subprocess.Popen(PLAYER + [str(path)],
                         stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    else:
        print("\a", end="", flush=True)  # хотя бы звонок терминала


# --- логика ----------------------------------------------------------------
def toggle():
    global smooth
    smooth = not smooth
    play(SND_ON if smooth else SND_OFF)
    print(f"Плавный режим: {'ВКЛ' if smooth else 'ВЫКЛ'}")


def level(t0, now):
    """Величина поворота одной стороны, 0..1."""
    if t0 is None:
        return 0.0
    if not smooth:
        return 1.0
    k = min((now - t0) / RAMP, 1.0)
    eased = k ** CURVE * (3 - 2 * k)  # мягкий старт и мягкий выход на 1
    return START + (1.0 - START) * min(eased, 1.0)


def find_keyboards():
    kbs = []
    for path in evdev.list_devices():
        d = evdev.InputDevice(path)
        keys = d.capabilities().get(e.EV_KEY, [])
        if all(k in keys for k in (KEY_LEFT, KEY_RIGHT, KEY_TOGGLE)):
            kbs.append(d)
        else:
            d.close()
    return kbs


def make_gamepad():
    stick = AbsInfo(value=0, min=-32768, max=32767, fuzz=0, flat=0, resolution=0)
    trig = AbsInfo(value=0, min=0, max=255, fuzz=0, flat=0, resolution=0)
    hat = AbsInfo(value=0, min=-1, max=1, fuzz=0, flat=0, resolution=0)
    cap = {
        e.EV_KEY: [e.BTN_A, e.BTN_B, e.BTN_X, e.BTN_Y, e.BTN_TL, e.BTN_TR,
                   e.BTN_SELECT, e.BTN_START, e.BTN_MODE,
                   e.BTN_THUMBL, e.BTN_THUMBR],
        e.EV_ABS: [(e.ABS_X, stick), (e.ABS_Y, stick),
                   (e.ABS_RX, stick), (e.ABS_RY, stick),
                   (e.ABS_Z, trig), (e.ABS_RZ, trig),
                   (e.ABS_HAT0X, hat), (e.ABS_HAT0Y, hat)],
    }
    # VID/PID как у проводного Xbox 360 — так SDL/Wine сразу знают раскладку
    return UInput(cap, name="Virtual X-Box 360 pad (steer)",
                  vendor=0x045E, product=0x028E, version=0x110,
                  bustype=e.BUS_USB)


def main():
    kbs = find_keyboards()
    if not kbs:
        raise SystemExit("Клавиатура не найдена. Нет прав на /dev/input/event*? "
                         "См. настройку группы input.")
    ui = make_gamepad()

    sel = selectors.DefaultSelector()
    for kb in kbs:
        sel.register(kb, selectors.EVENT_READ)

    print("Клавиатуры:", ", ".join(kb.name for kb in kbs))
    print("Готово. F2 — переключить режим, Ctrl+C — выход.")
    print(f"Плавный режим: {'ВКЛ' if smooth else 'ВЫКЛ'}")
    play(SND_ON)

    down = set()
    t_l = t_r = None
    last = None
    try:
        while True:
            for key, _ in sel.select(timeout=TICK):
                try:
                    events = list(key.fileobj.read())
                except OSError:  # клавиатуру отключили
                    sel.unregister(key.fileobj)
                    continue
                for ev in events:
                    if ev.type != e.EV_KEY:
                        continue
                    if ev.value == 1:        # нажатие (2 = автоповтор, игнорируем)
                        down.add(ev.code)
                    elif ev.value == 0:      # отпускание
                        down.discard(ev.code)
                        if ev.code == KEY_TOGGLE:
                            toggle()

            now = time.perf_counter()
            t_l = (t_l or now) if KEY_LEFT in down else None
            t_r = (t_r or now) if KEY_RIGHT in down else None

            v = int(round((level(t_r, now) - level(t_l, now)) * AXIS))
            if v != last:
                ui.write(e.EV_ABS, e.ABS_X, v)
                ui.syn()
                last = v
    except KeyboardInterrupt:
        print("\nВыход.")
    finally:
        ui.write(e.EV_ABS, e.ABS_X, 0)
        ui.syn()
        ui.close()


if __name__ == "__main__":
    main()
