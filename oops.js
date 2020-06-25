class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return "atack with " + this.weapon;
  }
}

class Queen extends Character {
    constructor(name, weapon, type) {
        super(name, weapon);
        this.type = type;
    }

    attack() {
        return `I am the ${this.name} of hearts, now bow down to me!`;
    }
}

//Polymorphism--
//Extend the Character class to have a Queen class. The output of the below code should be:
const victoria = new Queen("Victoria", "army", "hearts"); // create a new instace with the queen having (name, weapon, type). Type inlcudes: 'hearts', 'clubs', 'spades', 'diamonds'

console.log(victoria.attack()); // will console.log the attack() method in Character class AND will return another string: 'I am the Victoria of hearts, now bow down to me! '


/*
Object create method to achive prototypical inheritance 
1. obj object is added as parent or prototypical object of the inheritedObj
2. age is property of inheritedObj.
3. name is the property of obj which inherited to inheritedObj
*/

const obj = {
    name: "Shamanth"
}

const inheritedObj = Object.create(obj, {
    age: {
        writable: false,
        value: 24
    }
})

console.log(inheritedObj);

/*
Create a private property in javascript
*/

function test(name, age) {
    let myAge = age;
    this.name = name;
    this.disp = function() {
        console.log(`My name is ${this.name}, and my age is ${age}`);
    } 

    Object.defineProperty(this, "myAge", {
        get() {
            return myAge;
        }
    })
}

const testObj = new test("Shamanth", 24)
testObj.myAge = 100;
console.log(testObj.name);
console.log(testObj.myAge);
testObj.disp();



