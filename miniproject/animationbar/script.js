let smallCursor = document.querySelector(".smallCursor");
let shadowCursor = document.querySelector(".shadowCursor");
let mouseX;
let mouseY;
let distanceX
let distanceY;
let animationid = null;
let timer = null;
document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    smallCursor.style.left = e.clientX + "px";
    smallCursor.style.top = e.clientY + "px";
    if (!animationid) {
        animateShadowCursor();
    } 
})
function animateShadowCursor() {
    let currentX = parseFloat(shadowCursor.style.left || 0);
    let currentY = parseFloat(shadowCursor.style.top || 0);
    distanceX = mouseX - currentX;
    distanceY = mouseY - currentY;
    shadowCursor.style.left = currentX + distanceX * 0.30 + "px";
    shadowCursor.style.top = currentY + distanceY * 0.30 + "px";
    console.log(currentX,currentY);
    animationid = requestAnimationFrame(animateShadowCursor);

}

