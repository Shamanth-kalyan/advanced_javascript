function reverseString(str) {
    return !str || str.length < 2 || typeof str !== 'string' ? str : str.split('').reverse().join('') ;
}

console.log(reverseString("Hellooo Shamanth"));

function mergeArray(arr1, arr2) {
    return arr1.concat(arr2).sort();
}

console.log(mergeArray([2,3,1,4,5], [7,8,0,6,9]));