class Character {
    constructor(name, weapon) {
      this.name = name;
      this.weapon = weapon;
    }
    attack() {
      return 'atack with ' + this.weapon
    }
  }
  
  class Elf extends Character { 
    constructor(name, weapon, type) {
      super(name, weapon) 
      this.type = type;
    }
    attack(cry) {
        console.log("hello", cry)
        return 'atack with ' + cry
      }
  }
  
  class Ogre extends Character {
    constructor(name, weapon, color) {
      super(name, weapon);
      this.color = color;
    }
    makeFort() { // this is like extending our prototype.
      return 'strongest fort in the world made'
    }
  }
  
  const houseElf = new Elf('Dolby', 'cloth', 'house')
  console.log( houseElf.attack())
  console.log( houseElf.attack("00000000oooo"))
  //houseElf.makeFort() // error
  const shrek = new Ogre('Shrek', 'club', 'green')
  shrek.makeFort()
  