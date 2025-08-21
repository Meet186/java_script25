/*
Q1 -> How would compose multiple functions to transform data step by step (eg : sanitize -> trim ->
capitalize)? scenario you're preparing user input before storing it . (Expected knowledge : 
functions composition chaining,pipe or compose logic).
*/
let add = num => num + 2;
let multiply5 = num => num * 5;
let subtract10 = num => num - 10;
let reslut = subtract10(multiply5(add(5)));
// Compose -> right to left.
// pipe -> left to right.
function compose(...fns) {
    return function (val) {
        return fns.reduceRight((acc, currfns) => {
            return currfns(acc);
        }, val)
    }
}
function pipe(...fns) {
    return function (val) {
        return fns.reduce((acc, currfns) => {
            return currfns(acc);
        }, val)
    }
}
let result = compose(subtract10, multiply5, add)(5);
let result2 = pipe(subtract10, multiply5, add)(5);
// console.log(reslut);
// console.log(result2);

function trim(str) {
    return str.trim();
}

function sanitize(str) {
    return str.replaceAll(' ', '');
}

function capitalize(str) {
    return str.toUpperCase();
}
let str = "    me  e   t sola   nki   "
let ans = capitalize(trim(sanitize(str)));

function strCompose(...fns) {
    return function (str) {
        return fns.reduceRight((acc, currfns) => {
            return currfns(acc);
        }, str);
    }
}
let ans2 = strCompose(capitalize, trim, sanitize)(str);
// console.log(ans2);
// console.log(str);
// Q2 -> How do you implement  your own version of .map() functions on arrays ? 
// create own map , filter , reduce method
let arr = [2, 1, 3, 4, 5, 7, 8];
Array.prototype.ownMap = function (logicfn) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(logicfn(this[i], i, this));
    }
    return result;
}
Array.prototype.ownFilter = function (logicfn) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (logicfn(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
}

let resultArray = arr.ownFilter((el) => {
    return el > 3;
})
Array.prototype.ownReduce = function (logicfn, initialValue) {
    let accumulator = initialValue;
    let startIndex = 0;
    if (accumulator === undefined) {
        accumulator = this[0];
        startIndex = 1;
    }
    for (let i = startIndex; i < this.length; i++) {
        accumulator = logicfn(accumulator, this[i], i, this);
    }
    return accumulator;
}
Array.prototype.ownEvery = function (logicfn) {
    for (let i = 0; i < this.length; i++) {
        if (!logicfn(this[i], i, this)) {
            return false;
        }
    }
    return true;
}
Array.prototype.ownfind = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i];
        }
    }
    return undefined;
}






