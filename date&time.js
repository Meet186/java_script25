let date = new Date();
console.log(box);
// UNIX TIME AND UNIX EPOCH {STJAN,ARTING POINT JAN 1,1970 ,00:00:00 UTC} 
// console.log(Date.now());
let timestamp = Date.now();
// create  a date
// console.log(timestamp/1000/60/60/24/365);
// ADD TIME IN DATE
let currentTime = Date.now();
let tenMinute = 1000*60*10;
let updateTime = currentTime + tenMinute;
let updateDate = new Date(updateTime);
// console.log(date.toLocaleString());
// console.log(updateDate.toLocaleString());
// CREATE  A CLOCK 

function showTime(){
    let now = new Date();
    let time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    document.getElementById("box").innerText = time;
}
 setInterval(showTime,1000)













    