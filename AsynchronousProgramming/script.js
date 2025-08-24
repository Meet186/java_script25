// console.log("task1");
// console.log("task2");
// setTimeout(()=>{ // ASYNCHRONOUS CODE 
//     console.log("task3");
    
// },1000);
// console.log("task4");
// console.log("task5");

let result = await fetch("https://jsonplaceholder.typicode.com/users");
await result.json();
console.log(result);


