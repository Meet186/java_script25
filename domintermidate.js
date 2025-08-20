// Q1 -> How can you update the DOM based on user input in real time {e.g : live privew of a form }
let nameInput = document.querySelector("#Name");
let emailInput = document.querySelector("#Email");
let showNameBox = document.querySelector('.nameValue');
let showEmainBox = document.querySelector('.emailValue');


nameInput.addEventListener('input',((event)=>{
    let val = event.target.value;
    showNameBox.textContent = val;
}))

emailInput.addEventListener('input',((event)=>{
    let val = event.target.value;
    showEmainBox.textContent = val;
}))
