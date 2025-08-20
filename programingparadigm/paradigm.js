// programing paradigm -> way to write a program.

let arr = [1,2,3,4,5];

// we know how it work 
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// dont lnow how internally  it works .
// arr.map((el)=> console.log(el));


// ***** pocedural / functions

function checkNumber(num){
    if(num === 0) isZero();
    if(num >  0) isPositive();
    if(num < 0) isNegative();

}

function isZero(){
    console.log("number is zero");
    endProgram();
}
function isPositive(){
    console.log("number is positive");
    endProgram();
}
function isNegative(){
    console.log("number is negative");
    endProgram();
}
function endProgram(){
    console.log("program is end"); 
}
let num = 45;
checkNumber(num)

// structure 

function checkNumber2(num){
    if(num === 0){
        console.log("zero");
    } else if (num > 0) {
        console.log("+ve");
        
    } else {
        console.log("-ve");
        
    }
    console.log("program end");
}