import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    windows: {},
    lastId: 0,
    startEl: 0
  },
  actions:{
    addWindow({commit}){
      commit('addWindow')
    },
    deleteWindow({commit,state}, id){
      commit('deleteWindow', id)
    },
    pickWindow({commit}, id){
      commit('pickWindow', id)
    },
    hideWindow({commit}, id){
      commit('hideWindow', id)
    },
    showWindow({commit}, id){
      commit('showWindow', id)
      commit('pickWindow', id)
    }
  }
  ,
  mutations: {
    addWindow(state, id, obj){ 
      let maxZ = 0
      Object.values(state.windows).forEach(el => {
          el.z > maxZ ? maxZ = el.z : null
          el.active = false
      })
      state.lastId++
      let newWindow = obj || {
        id: state.lastId,
        z: maxZ + 1,
        hidden: false,
        pos: {left: 50, top: 50},
        active: true
      }
      Vue.set(state.windows, state.lastId, newWindow)   
    },
    deleteWindow(state, id){
      let elZ = state.windows[id].z
      Vue.delete(state.windows, id)
      Object.values(state.windows).forEach(el => { 
        if(el.z >= elZ){
          el.z--         
        }
      })      
    },
    updateWindow(state, obj){
      state.windows[obj.id].pos.left = obj.left
      state.windows[obj.id].pos.top = obj.top
    },
    pickWindow(state, id){ 
      let elZ = state.windows[id].z
      Object.values(state.windows).forEach(el => { 
        if(el.id != id){
          if(el.z >= elZ){
            el.z--         
            state.windows[id].z++
          }
          el.active = false
        }else{
          el.active = true
        }
      })      
    },
    hideWindow(state, id){
      state.windows[id].active = false
      state.windows[id].hidden = true
    },
    showWindow(state, id){
      state.windows[id].hidden = false            
    },
    setStartEl(state, val){
      state.startEl = val
    }
  }
})

//Repeats queries to API 
store.commit('addWindow', 0, {
  id:0,
  z:1,
  hide: false,
  pos: {left: 50, top: 50},
  active: true
})