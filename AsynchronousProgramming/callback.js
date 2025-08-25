// A callback is allways a function.
// It always pass as a arguments
// A function that takes a callback known as higher order function

// EXAMPLE : 1 (synchronous)
function hod(name,callback){
    callback(name);
}

function printName(name){
    console.log(name);
}
// hod("meet",printName) // printName pass as a callback.

// EXAMPLE : 2 (synchronous)

function calculate(a,b,callback){
    callback(a,b);
}

function sum(a,b){
    console.log(a+b);
}

function subract(a,b){
    console.log(a-b);
}

function multiply(a,b){
    console.log(a*b);
}

// calculate(4,5,sum);
// calculate(4,5,subract);
// calculate(4,5,multiply);


// EXAMPLE : 3 (Asynchronous)

// console.log(" 1 fetching data");
// function fetchData(processData){
//     setTimeout(() => {
//         console.log(" 2 data fetch sucessfull");
//         processData()
//     }, 3000);
// }
// function processData(){
//     console.log(" 3 data is processing ....");  
// }
// fetchData(processData);
// console.log("4 other task");




-
// EXAMPLE : 4 (Asynchronous)
console.log("fetching data.....");
function getData(data,callback){
    setTimeout(() => {
        console.log(data);
        if(callback){
            callback();
        }
    }, 3000);
}
// CALLBACK HELL 
getData("1 data",()=>{
    console.log("fetch 2 data...");
    getData("2 data",()=>{
        console.log("fetching 3 data");
        getData("3 data",()=>{
            console.log("fetching 4 data");
            getData("4 data",()=>{
                 console.log("fetching 5 data");
                 getData('5 data',()=>{
                     console.log("fetching 6 data");
                     getData('6 data',()=>{
                         console.log("fetching 7 data");
                         getData("7 data",()=>{
                             console.log("fetching 8 data");
                             getData("8 data",()=>{
                                 console.log("fetching 9 data");
                                 getData('9 data',()=>{
                                     console.log("fetching 10 data");
                                     getData('9 data',()=>{
                                         console.log("fetching 10 data");
                                         getData('10 data',()=>{
                                            console.log("fetch all data");
                                         })
                                     })
                                 })
                             })
                         })
                     })
                 })
            })
        })
    })
})