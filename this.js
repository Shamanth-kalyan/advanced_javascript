//this
const obj = {
    name: 'Billy',
    sing: function() {
      return 'llala ' + this.name + '!'
    },
    singAgain: function() {
      return this.sing()
    }
  }
  
  function importantPerson() {
    console.log(this.name)
  }
  
  const name = 'Sunny';
  const obj1 = { name: 'Cassy', importantPerson: importantPerson}
  const obj2 = { name: 'Jacob', importantPerson: importantPerson}
  
  obj2.importantPerson()


  // this scope

  var b = {
    name: 'jay',
    say() {console.log(this)}
  }
  
  var c = {
    name: 'jay',
    say() {return function() {console.log(this)}}
  }
  
  var d = {
    name: 'jay',
    say() {return () => console.log(this)}
  }