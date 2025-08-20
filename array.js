// let arr = [4,5,1,2,3,0];
// // let con = new Array(20).fill(2);
// // console.log(arr);
// // console.log(con);
// // console.log(typeof arr);
// arr.push(5);
// // console.log(arr);
// arr.pop();
// // console.log(arr);
// let slice = arr.slice(2,4);
// // console.log(arr);
// // console.log(slice);
// // let splice = arr.splice(2,4);
// // console.log(arr);
// // console.log(splice);
// let arr2 = ["name","word"];
// // let newarray = arr.concat(arr2);
// // console.log(newarray);
// let test = arr.copyWithin(2,0,3);
// let arr1 = [4,7,8,9,1,0,3,2,2];
// //4,5,4,5,1,0
// // console.log(test);
// let newarr = arr1.copyWithin(2,0,3);
// //4,7,4,7,0,3,2,2
// // console.log(arr1);
// // console.log(newarr);
// let mul = [7,8,9,1,[1,2,3],[45,[45],[78]]];
// let ne = mul.flat(Infinity);
// // console.log(ne);
// let neq = arr.sort((a,b)=> a-b);
// console.log(neq);
// ---------------------HIGHER ORDER FUNCTION -------------------------
let arr = [1,2,3,4,5];
let newArray = arr.map((elem,index,arr)=>{
    // console.log(elem,index,arr);
    return elem * 2;
})
// console.log(newArray);
 arr.forEach((el,index)=>{
     arr[index] = el * 2;

})
// console.log(arr);
let filterArray = arr.filter((el,index,arr)=>{
    return el % 2 !== 0;
});
// console.log(filterArray);
let sum = arr.reduce((acc,curr)=> {
   return acc + curr;
},arr[0]);
// console.log(sum);
// ----------------------QUESTIONS--------------------------------------------
// 1 for an array with mark of students find the average marks of the entire class.
// marks out of 80.
let marks = [40,50,70,77,45,54,39,75,77,45];
let sumOfMark = marks.reduce((acc,cuu)=> acc + cuu);
let average = sumOfMark/marks.length;
// console.log(average);
// 2 create the array with given length and fill with 0;
function createArrayWith0(size){
    return new Array(size).fill(0);
}
// let ans = createArrayWith0(20);
// 3 create a array whith given length and store 1 TO n netural number in it.
function createArrayWithNaturalNum(size){
    let arr = [];
    for(let i=0; i<size; i++){
        arr[i] = i+1;
    }
    return arr;
}
let ans = createArrayWithNaturalNum(20);
//4 how to check if given things is array or not ? How to convert other datatypes to array ? what if we try to convert an object into an array ? 

function check(arr){
    if(Array.isArray(arr)){
        console.log("given input is array");
        return
    } else if (arr === String){
        return Array.from(arr);
    } else {
        // object can't convert into Array.
        console.log("given input is unable to convert into array");
        return
    }
}
// 5 check pallindrom
// let variable = "level";
// let rev = Array.from(variable).reverse().join("");
// if(variable === rev){
//     console.log(true);
    
// } else{
//     console.log(false);
    
// }


// 6 captical each first letter of str
let str = "i am meet solanki";
let newstr = Array.from(str);
// 7 serch in an array of obj
let product = [
    {id : 1,name : "iphone 14" , price : 80000},
    {id : 2,name : "one plus 12R" , price : 30000},
    {id : 3,name : "realme 13" , price : 20000},
    {id : 4,name : "IQ14" , price : 60000},
    {id : 5,name : "redmi 9 prime" , price : 10000},
    {id : 6,name : "samsung s24" , price : 100000},
];
function serchProduct(arr,serchedItem){
   let filterArray =  arr.filter((obj)=>{
        return obj.name.toLowerCase().includes(serchedItem.toLowerCase());
    });
   let serch = filterArray.map((el)=>{
         return el.name;
    });
    return serch; 
}

// write a function groped by post(comments) that return an object grouping comments by postId;
const comments = [
    {postid : 1, test : "Great post!"},
    {postid : 2, test : "Thanks!"},
    {postid : 1, test : "very helpful!"},
]
function groupedData(comment){
  let reslut = {};
  comment.forEach((obj)=>{
    if(reslut.hasOwnProperty(obj.postid)){
        reslut[obj.postid].push(obj.test);
    } else {
        reslut[obj.postid] = [obj.test];
    }
  })   
  return reslut;
}

let filterans = groupedData(comments);
console.log(fil);










































