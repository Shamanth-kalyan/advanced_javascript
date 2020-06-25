// pass by value
var a = 10;
var b = a;

b++;

console.log(a); // 5
console.log(b); // 6

// pass by reference
var c = {name: "Hello"}
var d = c;

d.name = "Hi how are you"

console.log(c.name); // Hi how are you 
console.log(d.name); // Hi how are you

