// async/await help as to write asynchroonous code in a cleaner more readable way - almost like it's synchronous
// async -> Makes a function always return a promise.
// await -> pauses inside an 'async' function until the promise is resolved 
// code outside a async function continues immediately
// code inside a async function pause at await .
function getData(name, id, age) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name,
                id,
                age, // write it as data : data
            })
        }, 2000);
    })
}
// fetchAPI("https://jsonplaceholder.typicode.com/todos");
// **********IIFE************
(async (API =  "https://jsonplaceholder.typicode.com/todos" )=>{
    try {
        // let api = "https://jsonplaceholder.typicode.com/todos";
        let response = await fetch(API);
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
})();
async function fetchData() {
    let data1 = await getData("meet", 18, 21);
    console.log(data1);
    let data2 = await getData("harsh", 50, 20);
    console.log(data2);
    let data3 = await getData("mayank", 21, 21);
    console.log(data3);

}
fetchData()
async function fetchAPI(API) {
    try {
        let response = await fetch(API);
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);

    }
} 
