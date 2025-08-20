// calculate Factorial 

function Factorial(n){
    if(n == 1) return 1 ;
    return n * Factorial(n-1);
}

// Write a function that takes an array of numbers as input and returns the sum of all the positive numbers in the array.

const sumArray = (arr) => {
    let sum = 0;
    for (let num of arr) {
      sum += num;
    }
    return sum;
  };

 // Implement a function that reverses a string without using the built-in reverse() method.
 let name = "MEET";
 function reverseSTring(str){
   let ans = Array.from(str);
    ans.reverse()
   return ans.join('');
 }
// Create a program that generates a random password of a specified length. The password should contain a mix of letters (both uppercase and lowercase), numbers, and special characters.
function generatePassword(length){
    let password = "";
    let char = 'asdfghjklzxcvbnmqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP12304557796';
    for(let i=0; i < length; i++){
        let random_Index = char[Math.floor(Math.random() * char.length)];
        password += random_Index; 
}
return password;
}
// remove duplicate from array
let arr = ['A','A','A','B','C','D'];
// Method 1
let unique = [];
arr.forEach((el)=>{
    if(!unique.includes(el)){
        unique.push(el);
    }
})
// Method 2
let different = [];
 different = arr.filter((c,index)=>{
    return arr.indexOf(c) === index;
})
// duoble element of array if duplicate in it then double one of them ? 
let arr2 = [1,7,8,4,1,9,4,7]

let newarr = [];
let idx = 0;
arr2.forEach((el,index)=>{
  if(arr2.indexOf(el,index+1) === -1){
     newarr[idx++] = el * 2;
  } else {
    newarr[idx++] = el;
  }
})

// Remove Duplice from arr of object .
let obj = [
  { name: 'meet', id: 12 },
  { name: 'vedick', id: 17 },
  { name: 'harsh', id: 13 },
  { name: 'meet', id: 12 },
  { name: 'meet', id: 12 },
  { name: 'vedick', id: 17 },
  { name: 'meet', id: 12 },

];
/*

 // PROCESS OF DESTRUTURE

//  let newobj = [...new Map(obj.map((m)=> [m.id,m])).values()];

let check = obj.map((m)=> [m.id,m]);
let newobj = [...new Map(check).values()];

console.log(newobj);


// console.log(newobj);


*/

// find the word come how many time .
let str = "me hu don no one tum ho don no two"

function findWordCount(str){
 let arr =  Array.from(str.split(' '));
 let obj = {};
 for (const element of arr) {
      if(obj.hasOwnProperty(element)){
        obj[element]++;
      } else{
        obj[element] = 1;
      }
 }
return obj;
}
// find the largest length of string.
let string = 'me hu donm mjdudhd hu tum kha tum kushagra '
function largestString(string){
          var str = string.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length - 1; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}
// find the word which come most time in a string
let check = "first second first first second third fourth five first second third"
function mostCome(string){
   let word = string.split(" ");
   let obj = {};
   for(key of word){
    if(obj.hasOwnProperty(key)){
      obj[key]++;
    } else{
      obj[key] = 1;
    }
   }
   let ans = Object.keys(obj).reduce((acc,num)=>{
    return obj[acc] > obj[num] ? acc : num;
   })
   return ans;
}
mostCome(check);
// loop an array to find original value
let array1 = [1, 4, 57, 4, 58, 8]

Array.prototype.name = "meet";


// for(key in array1){
//   if(array1.hasOwnProperty(key)){
//     console.log(key);
    
//   }
// }
// how to accesss one object value in other object ? 
let obj1 = {
  name: 'meet',
  age: 19,
  realname: function () {
      console.log(this.name);
  }
}

let obj2 = {
  name: 'harsh',
  flatno: 12,
  rent: 18000
}

obj1.__proto__ = obj2;

// method 2
Object.setPrototypeOf(obj1,obj2);

// Create an object representing a person with properties like name, age, and gender. Write a function to print out their information.


let person = {
  name: 'person',
  age: 18,
  gender: 'male/female'
}

function printobjproperty(obj) {
  return Object.entries(obj)
}

// console.log(printobjproperty(person));


// Write a function to generate a random integer between a given range.

function randomINT(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  let random = Math.floor(Math.random() * (max-min) + min);
  return random;

}
// console.log(randomINT(33,100));

// Implement a function that removes duplicate elements from an array.

let array = [1,1,1,1,2,2,2,2,3,3,3,3,4,5,45,45,7,78,9,8,10,22,0];

let ans = array.filter((el,index)=>{
  return array.indexOf(el) === index;
})

// console.log(ans);

// find the longest common prifix among all string present in an array ? 

let names  = ["flower","flowing","flow"];

function longest_Common_Prifix(str){
 return str.reduce((curr,next)=>{
    let i=0;
    while(i < curr.length && i < next.length && curr[i] == next[i]){
      i++;
    }

    return curr.substring(0,i);
  },str[0])

}

// console.log(longest_Common_Prifix(names));


// write a code to find automorphic number 
function isautomorphic(num){
  let sqaure = num * num;
  let numString = num.toString();
  let sqaureString = sqaure.toString();
  return sqaureString.endsWith(numString);
}


// console.log(isautomorphic(25));

// create a clock
function currentTime() {
  const now = new Date();
  const time = now.toLocaleTimeString('en-US', {
    hour : '2-digit',
    minute : '2-digit',
    second : 'numeric',
    hour12 : true,
  });
  document.getElementById('main').innerText = time;
  setTimeout(currentTime, 1000);
}

// currentTime();

// copy a array .
let original = [1,2,3,54,[4,5,8],[8878,[7878]]];
let copy = JSON.parse(JSON.stringify(original));
copy[4].push(11);
// console.log(original);
// console.log(copy);

// write a insertation sort
let a = [1,2,45,7,90,12,1,0,3,1,4,5];
for(let i=1; i<a.length;i++){
   let j = i;
   while(j > 0 && a[j] < a[j-1]){
      let temp = a[j];
      a[j] = a[j-1];
      a[j-1] = temp;
      j--;
   }
}
// console.log(a);



