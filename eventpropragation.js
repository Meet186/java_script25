// let grandParent = document.querySelector(".grand_parent");
// let parent = document.querySelector(".parent");
// let child = document.querySelector(".child");
// EVENT CAPUTRE & EVENT BUBBLING
// eventCapturing || trickling -> rootelement to childelement
// eventBubbling -> childelement to parentelement
// g - p - c - p - g 
// grandParent.addEventListener("click",()=>{
//     alert("grandparent clicked")
// },true)
// grandParent.addEventListener("click",()=>{
//     alert("grandparent clicked")
// })
// parent.addEventListener("click",()=>{
//     alert("parent clicked")
// })
// parent.addEventListener("click",()=>{
//     alert("parent clicked")
// },true)
// child.addEventListener("click",()=>{
//     alert("child clicked")
// },true)
// EVENT.TARGET V/S EVENT.CURRENTTARGET

// grandParent.addEventListener("click",(event)=>{
//     console.log("GRANDPARENT");
//     console.log(event.target);
//     console.log(event.currentTarget);
    
// })
// parent.addEventListener("click",(event)=>{
//     console.log("GRANDPARENT");
//     console.log(event.target);
//     console.log(event.currentTarget);
//     event.stopPropagation();
// })
// child.addEventListener("click",(event)=>{
//     console.log("GRANDPARENT");
//     console.log(event.target);
//     console.log(event.currentTarget);
// })


let container = document.querySelector(".container");

container.addEventListener("click",(event)=>{
    if(event.target.className === 'box'){
        console.log(event.target.innerHTML);
    }
})
