// ********** Pure functions 
function sum(a,b){ // Pure function
    // return the same output for same input.
    return a+b;
};
let total = 0;
function incriment(){ // unpure function
    total++; // shared state

}
// console.log(sum(1,2));

// ********* Immutability
let obj = {name : "meet", age : 21};
obj.age = 15; // mutable

let updateobj = {...obj,age : 25};
console.log(updateobj); // Immutable

// *********** Avoid shared state

let amount = 0;

function addAmount(n){
    amount += n; // Shared State
}

// addAmount(45);
// addAmount("meet");
// console.log(amount);


// ******** Avoid Side effects

function sum2(...args){
    let ans = 0;
    let sum = [...args];
    console.log(sum); // Side Effects
    for(let el of sum){
        ans += el;
    }
    return el;
}
// sum2(1,2,3,4)

// ******** REUSE OR COMPOSE LOGIC
// breakdown a big logic into small logics and functions
function createUsername(str){
    return addspecialAlphabet(removeSpace(toLowerCase(str)));
}
function toLowerCase(str){
    return str.toLowerCase();
}
function removeSpace(str){
    return str.replaceAll(' ',''); 
}
function addspecialAlphabet(str){
    return '@' + str;
}
let name = "MEET SOLANKI  "

// ******** Don't Iterate
let arr = [1,2,3,4];
let even = []
// for(let i=0; i<arr.length; i++){
//     if(arr[i] % 2 === 0){
//         even.push(arr[i]);
//     }
// }

// let ans = arr.filter((el)=>{
//     return el % 2 === 0;
// })

// console.log(ans);

// ******* Loose Coupling
/*
 coupling refer to how dependent one piece of code is on another
 loose coupling means less dependent , keep functions and modules independent 
*/

function getUserData(){ // X Tight coupling
    return fetch("https://api.example.com/user").then(res => res.json());
}
function getData(api){ // Loosely coupling
    return fetch(api).then(res => res.json());
}

// ****** First-Class & Higher order functions

/*
 First-class -> functions can be stored in variables,passed,and returned.
 Higher-order -> functions that take other functions as arguments or return them.
*/
function greet(){
  return 'hello '
}
function callWithName(fun,name){
    let greet =  fun() + name;
    return greet;
}
// console.log(callWithName(greet,"meet"));

















