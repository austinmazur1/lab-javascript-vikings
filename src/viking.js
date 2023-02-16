// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack () {
        return this.strength
    }

    recieveDamage (damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name;
    }    

    recieveDamage (damage) {
        this.health -= damage;
        if (Viking.health > 0) return `${this.name} has recieved ${damage} points of damage`
        else return `${this.name} has died in act of combat`
    } 

    battleCry () {
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }
    
    recieveDamage (damage) {
        this.health -= damage;
        if (Saxon.health > 0) return `A Saxon has recieved ${damage} points of damage`
        else return "A Saxon has died in combat"
    }
}

// War
class War {
    constructor(vikingArmy, saxonArmy) {
        this.vikingArmy = vikingArmy;
        this.saxonArmy = saxonArmy;
    }

    addViking (Viking) {
        this.vikingArmy.push(Viking);
    }

    addSaxon (Saxon) {
        this.saxonArmy.push(Saxon);
    }

    vikingAttack () {
        
    }
}
