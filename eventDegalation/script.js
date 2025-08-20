/*
  EVENT-DELEGATION -> {if we have to add event on large number of elements 
                        instead of add event on multiple element add a event 
                        on parent element and  get each element with event.target
                        or perform operation by classList.contains() ||
                        classList.includes() || className === 'clssname' and many more . } 
*/
let listContainer = document.querySelector(".listContainer");
listContainer.addEventListener("click",(event)=>{
    if(event.target.classList.contains('listItem')){
        event.target.style.textDecoration = 'line-through';
    }
    
},false);


