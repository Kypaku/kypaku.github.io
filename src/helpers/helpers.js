export const  getCoords = (elem) => {  
    var box = elem.getBoundingClientRect();
    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
  }
  
export const getStartEl = () => {
  if(!document.getElementsByClassName('element_inner').length)  return false
  let inner = document.getElementsByClassName('element_inner')[0]
  if(!inner.children.length) return false  
  let index = 0 
  let startOffset = getCoords(inner.parentElement).left
  for(let el of inner.children){
    if(Math.floor(rightSide(el)) > Math.floor(startOffset)){
      return +index
    }  
    index++
  }
  return 0
}  
  
export const getEndEl = () => {
  if(!document.getElementsByClassName('element_inner').length)  return false
  let inner = document.getElementsByClassName('element_inner')[0]
  if(!inner.children.length) return false  
  let index = 0 
  let endOffset = rightSide(inner.parentElement)
  for(let el of inner.children){
    if(Math.floor(rightSide(el)) > Math.floor(endOffset)){
      return +index
    }  
    index++
  }
  return inner.children.length - 1
}    
  
export const rightSide = (el) => el ? getCoords(el).left + el.offsetWidth : 0