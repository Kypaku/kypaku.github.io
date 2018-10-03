<template>
  <div class="panel"> 
    
    <div class="element_left pointer left" @click="shiftLeft">
      <b><</b>
    </div>
  
    <div class="element_wrapper left" id="wrapper">
      <div class="element_inner left">
        <div class="element_window pointer"
          v-for="window in windows"
          @click="window.active ? hideWindow(window.id) : showWindow(window.id)"
        >    
          <div class="element_title left">
            Window #{{window.id}}
          </div>            
          <div class="element_close pointer left" @click.stop="deleteWindow(window.id)">
            &times;
          </div>    
        </div>
      </div>
    </div>
    
    <div class="element_right pointer right" @click="shiftRight">
      <b>></b>
    </div>    

  </div>
</template> 

<script>
  import { mapActions } from 'vuex'
  import { getStartEl, getEndEl, rightSide, getCoords} from '../helpers/helpers.js'
  
  export default {
    name:'main-view',
    data(){
      return {
        windows: this.$store.state.windows
      }
    },  
    methods:{
      ...mapActions([
        'deleteWindow',
        'showWindow',
        'pickWindow',
        'hideWindow'
      ]),
      shiftRight: function(){
        let children = document.getElementsByClassName('element_inner')[0].children
        let endEl = children[getEndEl()]
        if( !children.length ) return false;
        let diff = rightSide(endEl) - rightSide(wrapper)        
        wrapper.scrollTo(wrapper.scrollLeft + diff, 0)
      },
      shiftLeft: function(){
        let children = document.getElementsByClassName('element_inner')[0].children
        let startEl = children[getStartEl()]
        if( !children.length ) return false;
        let diff = getCoords(wrapper).left - getCoords(startEl).left
        !Math.trunc(diff) ? (diff = startEl.offsetWidth) : null
        wrapper.scrollTo(wrapper.scrollLeft - diff, 0)
      }   
    }

  }      
</script>  

<style scoped>  
  .element_left,.element_right{
    padding: 5px 10px;  
    font-size: 24px;
    color:lightgray;
  }
  .element_left.active,.element_right.active{
    color: white;
  }
  .element_left{
    border-right: 1px solid white;
  }
  .element_right{
    border-left: 1px solid white;
  }
  .element_wrapper{
    width: calc(100% - 106px);
    overflow:hidden;
    height: 38px;
  }
  .element_window{
    display: inline-block;
    line-height: 40px;
    margin-top: 1px;
    transition: margin 0.07s;
    padding: 0 10px;
  }
  .element_window:not(:first-child){
    border-left: 1px solid white;
  }
  .element_inner{
    white-space: nowrap;
  }
  .element_close{
    padding: 0 5px;
    font-size: 20px;
    color: #ed4d4d;
  }
</style> 