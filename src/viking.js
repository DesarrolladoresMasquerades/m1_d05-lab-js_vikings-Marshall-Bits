// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health 
    this.strength = strength 
  }
  attack(){
    return this.strength
  }
  receiveDamage(damage){
    this.health -= damage
  }
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super(health, strength)
    this.name = name
  }
  receiveDamage(damage){
    this.health -= damage
    if(this.health <= 0){
      return `${this.name} has died in act of combat`
    }
    else return `${this.name} has received ${damage} points of damage`
  }
  battleCry(){
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {

  receiveDamage(damage){
    this.health -= damage
    if(this.health <=0) return "A Saxon has died in combat"
    else return `A Saxon has received ${damage} points of damage`
  }
}

// War
class War {
  constructor(){
    this.vikingArmy = []
    this.saxonArmy = []
  }
  addViking(viking){
    this.vikingArmy.push(viking)
  }
  addSaxon(saxon){
    this.saxonArmy.push(saxon)
  }
  vikingAttack(){
    this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength)
    this.saxonArmy.splice(saxon => saxon.health <=0)
  }
  saxonAttack(){
    this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength)
    this.vikingArmy.splice(viking => viking.health <=0)
  }
  showStatus(){}
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
