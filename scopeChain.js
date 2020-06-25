// Scope:
function sayMyName1() {
    var a = 'a';
    return function findName() {
      var b = 'b';
      return function printName() {
        var c = 'c';
        return 'Test Andrei Neagoie'
      }
    }
  }
  
  console.log(sayMyName1()()())

  
  function findName() {
    var b = 'b';
    return printName();
  }
  
  function printName() {
    var c = 'c'
    return 'Andrei Neagoie'
  }
  
  function sayMyName() {
    var a = 'a';
    return findName()
  }
  
  console.log(sayMyName())
  