<template>
  <div class="main-view">
  
    <window class="element_window abs"
            v-for="window of $store.state.windows"
            :id="'window_' + window.id"
            :data-id="window.id"            
            v-if="window && !window.hidden"
            :style="{zIndex:window.z, left: window.pos.left + 'px', top: window.pos.top + 'px'}"
            :class="{active: window.active}"
    >    
      <div class="element_top left">
        <div class="element_title left">
          Window {{window.id}}
        </div>      
        <div class="element_close pointer right" @mousedown.stop="deleteWindow($event,window.id)">
          &times;
        </div>  
        <div class="element_hide pointer right" @mousedown.stop="hideWindow(window.id)">
          _
        </div>        
      </div>
    </window>

  </div>
</template> 

<script>
  import { mapActions } from 'vuex'
  import window from './window.vue'  
  
  export default {
    name:'main-view',
    components:{
      window
    },
    data(){
      return {
        windows: this.$store.state.windows
      }
    },  
    methods:{
      ...mapActions([
        'pickWindow',
        'hideWindow'
      ]),
      deleteWindow: function(ev, id){
        ev.stopImmediatePropagation()
        this.$store.commit('deleteWindow', id)         
      }
    }
  }      
</script>  

<style scoped>  
  .main-view{
    width: 100%;
    height: 600px;
    position: relative;
    background: #d6daff;
  }
  .element_window{
    cursor: move;
    width: 450px;
    height: 330px;
    outline: 1px solid;  
    background: lightgray;
  }
  .element_window.active{
    background: #f5f5f5;
  }
  .element_content{
    width: 100%;
    height:100%;
  }
  .element_top{
    width: 100%;
    background: lightslategrey;
    line-height: 30px;  
  }
  .element_title{
    margin-left: 10px;
  }
  .element_close{
    padding: 0 5px;
    background: lightcoral;  
  }
  .element_hide{
    padding: 0 5px;
    background: #e4dada;  
  }
</style> 