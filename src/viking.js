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
    const randomizeSaxon = Math.floor(Math.random()*this.saxonArmy.length)
    const randomizeViking = Math.floor(Math.random()*this.vikingArmy.length)
    const damage = this.saxonArmy[randomizeSaxon].receiveDamage(this.vikingArmy[randomizeViking].strength)
    if(this.saxonArmy[randomizeSaxon].health <= 0) this.saxonArmy.splice(randomizeSaxon, 1)
    return damage
  }
  saxonAttack(){
    const randomizeSaxon = Math.floor(Math.random()*this.saxonArmy.length)
    const randomizeViking = Math.floor(Math.random()*this.vikingArmy.length)
    const damage = this.vikingArmy[randomizeViking].receiveDamage(this.saxonArmy[randomizeSaxon].strength)
    if(this.vikingArmy[randomizeViking].health <= 0) this.vikingArmy.splice(randomizeViking, 1)   
    return damage 
  }
  showStatus(){
    if(this.saxonArmy.length <= 0){
      return "Vikings have won the war of the century!"
    }else if(this.vikingArmy.length <= 0){
      return "Saxons have fought for their lives and survived another day..."
    }else{
      return "Vikings and Saxons are still in the thick of battle."
    }
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
