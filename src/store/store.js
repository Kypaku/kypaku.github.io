import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    windows: {},
    last_id: 0,
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
      let max_z = 0
      Object.values(state.windows).forEach(el => el.z > max_z ? max_z = el.z : null)
      state.last_id++
      let newWindow = obj || {
        id: state.last_id,
        z: max_z + 1,
        hidden: false,
        pos: {left: 50, top: 50}
      }
      Vue.set(state.windows, state.last_id, newWindow)   
    },
    deleteWindow(state, id){
      Vue.delete(state.windows, id)
    },
    updateWindow(state, obj){
      state.windows[obj.id].pos.left = obj.left
      state.windows[obj.id].pos.top = obj.top
    },
    pickWindow(state, id){ 
      Object.values(state.windows).forEach(el => {          
        if(el.z > state.windows[id].z){
          let oldZ = state.windows[id].z         
          state.windows[id].z = el.z
          el.z = oldZ
        }
      })      
    },
    hideWindow(state, id){
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
  pos: {left: 50, top: 50}
})