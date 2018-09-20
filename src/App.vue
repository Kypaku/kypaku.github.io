<template>
  <div class="app">
    Touch
    <div class="element_header">
      <div class="element_plus pointer left" @click="addWindow"><b>+</b></div>
      <panel/>
    </div>
    <main-view/>    
  </div>
</template>

<script>
import panel from './components/panel.vue'
import mainView from './components/mainView.vue'
import { mapActions } from 'vuex'

export default {
  name: 'app',
  components:{
    panel,
    mainView
  },
  methods:{
    ...mapActions([
      'addWindow'
    ])   
  }
}
</script>

<style>
  body{
    margin: 1px;
  }
  .app{
    width: 100%;
    margin: 0 auto;  
  }
  .element_plus{
    padding: 5px 10px;
    font-size: 24px;
    border-right: 1px solid white;
  }
  .element_header{
    font-size: 16px;
    height: 39px;
    background: #3f4952;
    color: white;
  }
  .left{
    float: left;
  }
  .right{
    float: right;
  }
  .hidden{
    display: none;
  } 
  .pointer{
    cursor:pointer;
  }
  .abs{
    position: absolute;
  } 
</style>