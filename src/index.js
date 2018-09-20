import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store.js'

Vue.config.devtools = true

const app = new Vue({
  el: '#app',
  store,
  template: '<app/>',
  components: { App }
})
window.app = app
