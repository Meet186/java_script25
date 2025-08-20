// Q1 -> create a functon that return a last element of an array.
function lastEl(arr){
    return arr[arr.length-1];
}
// Q2 -> find the combination of two array.
function common(arr1,arr2){
    return arr1.filter((el)=>{
        return arr2.includes(el);
    })
}
// Q3 -> Generate a random number between 0,18.
function random(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min) + min);
}
// Q4 -> create a function thats take an array containing both number and string and return a new array only containing a string value .
function onlyStringVal(arr){
     let newArray = arr.filter((el)=>{
        if(typeof el === 'string'){
            return el;
        } else{ 

        }
    })
    return newArray;
}
// Q5 -> find the max in array;
function maxInArray(arr){
     let max = 0;
     for(el of arr){
        if(max < el){
            max = el;
        }
     }
     return max;
}
function maxInArray2(arr){
     return Math.max(...arr);
}
// Q6 -> write a function that return a length of object (numbers of key);
function lengthOfObj(obj){
    let ans = Object.keys(obj).length;
    return ans;
}
// Q7 -> In an array of object filter out those objects which haave a gender value male.
let objs = [
    {name : "meet",gender : "male",age : 21},
    {name : "naman",gender : "female",age : 20},
    {name : "kushagra",gender : "male",age : 20},
    {name : "payal",gender : "female",age : 21},
    {name : "nancy",gender : "female",age : 18},
    {name : "nanish",gender : "male",age : 21},
];
function filterObj(arr){
   return arr.filter((el)=>{
       return el.gender === 'male';
    })
}
// Q8 -> Given a array of String return a new Array where all Strings all in UPPERCASE.
function upperCase(arr){
    return arr.map((el)=>{
        return el.toUpperCase();
    })
}
// Q9 -> check if object is empty or not.
function isEmpty(obj){
    let keys = Object.keys(obj).length;    
   return (keys === 0) ?  true : false;
}
// Q10 -> create an array of number and double it value using map.
function doubleValue(arr){
    return arr.map((el)=>{
        return el*2;
    })
}
// Q11 -> convert an array of strings into  a single cooma-seprated string.
function convertString(arr){
    return arr.join(",");
}
// Q12 ->write a function to flate an array only one level .
function flatArray(arr){
    return arr.flat();
}
// Q13 -> write a function to check if all elements in an array are number.
function isStringInArray(arr){
    for(let el of arr){
        if(el != 'number'){
            return false;
            break;
        }
    }
    return true;
}
// Q14 -> check number is prime or not.
function isPrime(num){
    if (num == 0 || num == 1) return false;
    for(let i=2; i < Math.sqrt(num); i++){
        if(num % i === 0) return false;
    }
    return true;
}
// Q15 -> create a function that remove all duplicate from it.

function removeDuplicate(arr){
    return arr.filter((el,index)=>{
        return arr.indexOf(el) === index;
    })
    
}





  
  