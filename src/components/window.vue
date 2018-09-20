<template>
    <div @mousedown="startDrag" @mouseup="endDrag" @touchstart="startDrag" @touchend="endDrag">
      <slot></slot>
    </div>
</template>

<script>
  import { getCoords } from '../helpers/helpers.js'

  export default {
    name:'window',
    methods:{
      startDrag: function(ev){        
        this.$store.dispatch('pickWindow',ev.currentTarget.dataset.id)
        let elem = ev.currentTarget
        let parent = elem.parentElement
        
        let shiftX = (ev.pageX ? ev.pageX : ev.changedTouches[0].pageX) - getCoords(elem).left
        let shiftY = (ev.pageY ? ev.pageY : ev.changedTouches[0].pageY) - getCoords(elem).top 

        let parentLeft = getCoords(parent).left
        let parentTop = getCoords(parent).top
          
        function moveDrag(ev){          
          let x = (ev.pageX ? ev.pageX : ev.changedTouches[0].pageX) - parentLeft - shiftX
          let y = (ev.pageY ? ev.pageY : ev.changedTouches[0].pageY) - parentTop - shiftY
          if(x >= 0 && x + elem.offsetWidth <= parent.offsetWidth){
            elem.style.left = x + 'px'          
          }else if(x < 0){
            elem.style.left = '0px'
          }else if(x + elem.offsetWidth > parent.offsetWidth){
            elem.style.left = (parent.offsetWidth - elem.offsetWidth) + 'px'
          }
          if(y >= 0 && y + elem.offsetHeight <= parent.offsetHeight){
            elem.style.top = y + 'px'          
          }else if(y < 0){
            elem.style.top = '0px'
          }else if(y + elem.offsetHeight > parent.offsetHeight){
            elem.style.top = (parent.offsetHeight - elem.offsetHeight) + 'px'
          }     
        }
          
        document.onmousemove = function(ev){
          moveDrag(ev)
        }
          
        document.ontouchmove = function(ev){
          moveDrag(ev)
        }
        
        elem.ondragstart = function() {
          return false
        }
        
        elem.onmouseup = function(ev){
          elem.onmouseup = null
          document.onmousemove = null        
        }     
        
        elem.touchend = function(ev){
          elem.touchend = null
          document.touchmove = null        
        }
      },
      endDrag: function(ev){
        let elem = ev.currentTarget
        
        elem.onmouseup = null
        document.onmousemove = null 
        
        elem.touchend = null
        document.ontouchmove = null 

        this.$store.commit('updateWindow', {id: elem.dataset.id,left: parseInt(elem.style.left), top: parseInt(elem.style.top)})
      }      
    }
  }
</script>
