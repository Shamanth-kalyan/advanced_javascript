function a() {
    height = 100; // since the height is not declared it will be checked in the 
                  // global scope and if the variable is not present i will be created
                  // to avoid this we can use 'use strict'
    console.log(height)
}
a();
console.log(height) // height variable is added in the global scope

const b = function c() {
    console.log("Hello", c) // c is accesible because c is added to is own variacale environment.
}

b();
// c(); throws an error because c is not defined