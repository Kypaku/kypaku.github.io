"""
Аналоговое руление с клавиатуры через виртуальный геймпад (ViGEm / Xbox 360).

A / D      — руль влево / вправо
F2         — вкл/выкл плавный режим (звук: два высоких = вкл, один низкий = выкл)
Ctrl+C     — выход (в окне консоли)

Выкл:  обычное цифровое руление (сразу ±1)
Вкл:   при зажатии значение плавно ползёт от START к 1 за RAMP секунд
"""

import threading
import time
import winsound

import keyboard
import vgamepad as vg

# --- настройки -------------------------------------------------------------
KEY_LEFT, KEY_RIGHT, KEY_TOGGLE = "a", "d", "f2"

RAMP = 0.30    # сек от касания до полного поворота
START = 0.10   # значение в момент касания (0 — тап почти не рулит)
CURVE = 2.0    # форма: 1 — линейно, >1 — дольше держится в малых значениях
TICK = 0.002   # период опроса, сек
# ---------------------------------------------------------------------------

smooth = True


def beep(pattern):
    """Пищит в отдельном потоке, чтобы не тормозить цикл руления."""
    def run():
        for freq, ms in pattern:
            winsound.Beep(freq, ms)
    threading.Thread(target=run, daemon=True).start()


def toggle():
    global smooth
    smooth = not smooth
    if smooth:
        beep([(1200, 70), (1600, 70)])
    else:
        beep([(450, 160)])
    print(f"Плавный режим: {'ВКЛ' if smooth else 'ВЫКЛ'}")


def level(t0, now):
    """Величина поворота одной стороны, 0..1."""
    if t0 is None:
        return 0.0
    if not smooth:
        return 1.0
    k = min((now - t0) / RAMP, 1.0)
    # smoothstep-подобный подъём: мягкий старт и мягкий выход на 1
    eased = k ** CURVE * (3 - 2 * k) if CURVE != 1 else k
    return START + (1.0 - START) * min(eased, 1.0)


def main():
    pad = vg.VX360Gamepad()
    # trigger_on_release — чтобы автоповтор зажатой F2 не щёлкал режим многократно
    keyboard.add_hotkey(KEY_TOGGLE, toggle, trigger_on_release=True)

    print(f"Готово. {KEY_TOGGLE.upper()} — переключить режим, Ctrl+C — выход.")
    print(f"Плавный режим: {'ВКЛ' if smooth else 'ВЫКЛ'}")
    beep([(1200, 70), (1600, 70)])

    t_l = t_r = None
    try:
        while True:
            now = time.perf_counter()
            t_l = (t_l or now) if keyboard.is_pressed(KEY_LEFT) else None
            t_r = (t_r or now) if keyboard.is_pressed(KEY_RIGHT) else None

            x = level(t_r, now) - level(t_l, now)
            pad.left_joystick_float(x_value_float=x, y_value_float=0.0)
            pad.update()
            time.sleep(TICK)
    except KeyboardInterrupt:
        pad.reset()
        pad.update()
        print("Выход.")


if __name__ == "__main__":
    main()
