// let promise1 = new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//         resolve({name : "meet solanki",password : "78941@12"})
//    },1000)
// }).then((res)=>{
//     console.log(res);
    
// })
// let promise2 = new Promise((resolve,reject)=>{
//     let error = false;
//     if(!error){
//         setTimeout(()=>{
//         resolve({

//         })
//         },1000)
//     } else{
//         reject(new Error("promise is failed"))
//     }
// });
// async function resolvePromise(){
//     try {
//         const response = await promise2;
//          console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// resolvePromise();
async function getAllDetails() {
   try {
    const response = await fetch('https://newsdata.io/api/1/latest?apikey=pub_84742dfb5cbbdac5ad33ff055fe9455146730&q=pizza');
    const data = await response;
   } catch (error) {
     console.log(error);
   }
}
 let data = getAllDetails();
 console.log(data);
 

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
//       .catch(error => console.log(error))
//       .finally(console.log("run always"))