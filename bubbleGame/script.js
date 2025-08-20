const bubbleContainer = document.querySelector(".bubbleContainer");
const timeBox = document.querySelector(".timer");
const targetBox = document.querySelector(".target");
const scoreBox = document.querySelector("#score");
let time = 10;
let score = 0;
let target;
function setTimer() {
    time = 10;
}
setInterval(() => {
    if (time <= 0) {
        const totlScore = document.createElement("div");
        totlScore.textContent = "YOU SCORED :" +  score;
        bubbleContainer.innerHTML = `<div id = "overbox">Game Over<button id="restart" onclick= restartGame() >Restart</button></div>`;
        bubbleContainer.append(totlScore);
        return;
    }
    time--;
    timeBox.children[0].innerText = time;
}, 1000)
function restartGame() {
    generateBubble();
    setTimer();
    generateTarget();
    updateScore();
}
function generateTarget() {
    target = Math.ceil(Math.random() * 10);
    targetBox.children[0].innerText = target;
}
function generateBubble() {
    bubbleContainer.innerHTML = ``;
    for (let i = 1; i <= 72; i++) {
        let div = document.createElement("div");
        div.className = "circle";
        let Number = Math.ceil(Math.random() * 10);
        div.innerText = Number;
        bubbleContainer.append(div);
    }
}
bubbleContainer.addEventListener("click", (event) => {
    if (event.target.className == 'circle') {
        let targetNumber = Number(targetBox.children[0].innerText);
        let number = Number(event.target.innerText);
        if (targetNumber === number) {
            score += 10;
            scoreBox.innerText = score;
            generateTarget();
        }
    }
})
function updateScore() {
    score = 0;
}
generateBubble(); // Initial call to start Game .

