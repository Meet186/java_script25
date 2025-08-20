//  Q1 -> Difference between Number and ParseInt

// console.log(parseInt("123.123"));
// console.log(Number("123123"));

// console.log(parseInt("123.123px"));
// console.log(Number("123123px"));

// console.log(parseInt("123",16)); // also convert into decimal system.
// console.log(Number("123123",10));

// Q2 -> why does 0.1 + 0.2 !== 0.3 in javascript ? 
// Ans ->  not convert proper in binary value floating precision .

// Q3 -> Explain floating-point precision issues in javascript.
//  Ans -> Same ans as question 3 .

// Q4 -> How would handle high-precsion decimal math in js .
let sum = (0.1 + 0.2).toFixed(2); // convert into string

// Q5 -> what is difference between slice and splice .
let arr = [1, 2, 3, 4, 5, 7, 8];
let string = "meet_18";
// console.log(string.slice(0,2));//work on string only take {-ve} parameter also not work on array.last index exclude
// console.log(arr.splice(1,3,4,5));
/*
 . work with array only.
 . change orignal array.
 . we can add and remove values also with splice.
 . work with negative also c
*/
// Q6 -> create a function that reverse each word of a given sentence.

function reverseSentance(str) {
    let words = str.split(' ');
    let ans = words.map((word) => {
        let reverse = word.split('').reverse().join('');
        return reverse;
    }).join(' ');
    return ans;
}
// Q7 -> In an array of number and string , only  add those number which are not string.

function addOnlyNumber(arr) {
    let ans = 0;
    for (el of arr) {
        if (typeof el == 'number') {
            ans += el;
        }
    }
    return ans;
}
// Q8 -> how would you check if a number is an Interger.
let num = 123;
// console.log(Number.isInteger(num));
// console.log(num % 1 === 0);

// Q9 -> write a function that reverse a number.

function reverseNum(num) {
    return Number(num.toString().split('').reverse().join(''));
}
// Q10 -> write a function that return a passed string with letters in alphabetical oredr.

function sortletters(string) {
    return (string.split('').sort().join(''));
}

// Q11 -> convert the each letter first word in UpperCase.

function upperCaseFirstLetter(string) {
    let words = string.split(' ');
    let wordArray = words.map((el) => {
        return (el.charAt(0).toUpperCase() + el.substring(1));
    })
    return wordArray.join(' ');
}
// Q12 -> write a function to get a number of accurances od each letter in a given string.
function accurance(str) {
    let words = str.split('');
    let obj = {};
    words.forEach(element => {
        if (obj.hasOwnProperty(element)) {
            obj[element]++;
        } else {
            obj[element] = 1;
        }
    });
}
// Q13 -> find most frequent element in an string.
function mostFrequent(arr) {
    let obj = {};
    arr.forEach((el) => {
        if (obj.hasOwnProperty(el)) {
            obj[el]++;
        } else {
            obj[el] = 1;
        }
    });
    let ans = Object.keys(obj).reduce((acc, num) => {
        return obj[acc] > obj[num] ? acc : num;
    }, 0);
    return ans;
}
// write a java-script program to shuffle an array .
function shuffleArray(arr) {
    for(let index in arr){
        let randomIndex = Math.floor(Math.random() * arr.length);
        [arr[randomIndex],arr[index]] = [arr[index] , arr[randomIndex]];
    }
    return arr;
}











