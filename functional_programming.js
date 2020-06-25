/* 
currying
*/

// type 1

function sum(a, b) {
    return a + b;
}

const sumTen = sum.bind(null, 10)
console.log(sumTen(100));

// type 2

function multiply(a) {
    return function (b) {
        return a * b;
    }
}

const multiplyTen = multiply(10);
console.log(multiplyTen(100))

/*
immutablity
*/

const array = [1,2,3,4,5]

function arrayPush(arr, item) {
    const tempArr = [...arr]
    tempArr.push(item);
    return tempArr;
}

const copyArray = arrayPush(array, 11);
console.log(array, copyArray);

/*
Memorizaion
*/

const cache = {};
function fibo(num) {
    if(num <= 1) {
        return num;
    }
    if(cache[num]) {
        return cache[num];
    } 
    cache[num] = fibo(num - 1) + fibo(num - 2);
    return cache[num];
}

console.log(fibo(40));


/*
compose
*/

const compose = (f, g) => (data) => f(g(data))
const multiplyByThree = (data) => 3 * data;
const absolute = (data) => Math.abs(data);
const wholeNumber = compose(multiplyByThree, absolute);

console.log(wholeNumber(-12))

const compose2 = (f, g) => (...data) => {
    console.log("compose", data); 
    return f(g(...data));
}

const testCompose = (...fns) => {
    console.log(fns); 
    return fns.reduce(compose2);
}

testCompose(
    (data) => {console.log("1", data); return data;}, 
    (data) => {console.log("2", data); return data;}, 
    (data) => {console.log("3", data); return data;}, 
    (data) => {console.log("4", data); return data;}
    )({name: "Shamanth"});





