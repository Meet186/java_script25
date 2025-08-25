// A promise is a special object in javascript that respresent a task that will finish in the future.
// A promise has a 3 stage 
// 1 - > pending - still waiting 
// 2 - > resolved (fulfilled) - task completed
// 3 - > reject - something went wrong
// reslove and reject are callback provide by promise 

// let p1 = new Promise((resolve,reject)=>{
//     // resolve("data fetch successful")
//     // reject("data reject")

// })
// p1.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);  
// })


// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({
//             name : "meet",
//             age : 21,
//         })
//     }, 3000);
// })

// p1.then((data)=>{
//     return JSON.stringify(data);
// }).then((res)=>{
//     console.log(res);  
// }).catch((err)=>{
//     console.log(err);
// })

function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name : "meet",
                work : "SDE"
            })
        }, 2000);
    })
}
function fetchData2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                addresss : "indore 452001",
            })
        }, 3000);
    })
}
// promise chaining
// fetchData()
// .then((res)=>{
//     console.log(res);
//     return fetchData2();
// })
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

let response = fetch("https://jsonplaceholder.typicode.com/albums");
response.then((res)=>{    
    console.log(res);
    return fetch("https://jsonplaceholder.typicode.com/posts");
})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})