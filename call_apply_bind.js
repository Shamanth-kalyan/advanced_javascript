const wizard = {
    name: 'Merlin',
    health: 100,
    heal: function(num1, num2) {
      this.health += num1 + num2;
    }
  }
  
  const archer = {
    name: 'Robin Hood',
    health: 50
  }
  
  wizard.heal.call(archer, 50, 60)
  wizard.heal.apply(archer, [20, 30])
  archer
  // function borrowing
  
  const healArcher = wizard.heal.bind(archer, 50, 60);
  console.log(archer)
  healArcher()
  console.log(archer)

function sayHello(message) {
  console.log(message + ' ' + this.name);
}

sayHello.call({name: 'Shamanth'}, 'Hello')

// currying

function multiply(a, b) {
  return a * b;
}

const mulByTwo = multiply.bind(null, 2);
console.log(mulByTwo(10));

