function test1(a, b, c) {
    console.log("Arguments: ", arguments)
}

function test2(...args) {
    console.log("Destructuring: ",args)
}

test1(1,2,3)
test2(1,2,3,4,5,6)