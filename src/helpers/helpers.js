export const  getCoords = (elem) => {  
    var box = elem.getBoundingClientRect();
    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
  }
  
export const getStartEl = () => {
  if(!document.getElementsByClassName('element_inner').length)  return false
  let children = document.getElementsByClassName('element_inner')[0].children
  if(!children.length) return false  
  let index = 0 
  for(let el of children){
    if(el.offsetLeft >= el.parentElement.parentElement.offsetLeft){
      return +index
    }  
    index++
  }
  return 0
}  
  
export const isFilling  = () => {
    if(!document.getElementsByClassName('element_inner').length)  return false
    let children = document.getElementsByClassName('element_inner')[0].children
    if(!children.length) return false
    return Array.prototype.slice.call(children, getStartEl())
      .map(el => el.offsetWidth)
      .reduce((total, el) => total + el, 0)
      >  document.getElementsByClassName('element_wrapper')[0].offsetWidth
} 
  
export const setClosest  = () => {
  let elems = document.getElementsByClassName('element_window')
  let ind = 0
  let oldOffset = 9999
  for(let el of elems){
    ind++
    let offset = el.offsetLeft - el.parentElement.parentElement.offsetLeft
    if(offset >= 0){
      let resOffset = Math.abs(offset) < Math.abs(oldOffset) ? offset : oldOffset
      elems[0].style.marginLeft = (parseInt(elems[0].style.marginLeft) - resOffset) + 'px'
      break
    }
    oldOffset = offset
  }
}