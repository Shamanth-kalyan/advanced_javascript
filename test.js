function test(initialValue){
    this.value = initialValue;
}

let obj = new test(500);

test.prototype.inc = function() {
    this.value++;
    console.log(this.value);
}

test.prototype.dec = function() {
    this.value--;
    console.log(this.value);
}

obj.inc();
obj.inc();
obj.dec();

function f1() {
    console.log(this);
    console.log(arguments);
}

var f2 = function() {
    console.log(this);
    console.log(arguments);
}

var f3 = () => {
    console.log(this);
}

// var f11 = f1.bind({a:1}, "hello")
f3.call({a:1}, "hello")

var prom = () => new Promise((resolve, reject) => (Math.random() > 0.5) ? reject(new Error('Random Error')) : resolve('success'));

prom().then((s) => s + ' First').then(s => s + ' Second').catch(s => s + ' Error').then(console.log);
