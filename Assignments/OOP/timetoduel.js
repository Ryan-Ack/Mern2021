// Unit Cards
// name	cost	power	resilience
// Red Belt Ninja	3	3	4
// Black Belt Ninja	4	5	4


// Effect Cards
// name	cost	text	stat	magnitude
// Hard Algorithm	2	increase target's resilience by 3	resilience	+3
// Unhandled Promise Rejection	1	reduce target's resilience by 2	resilience	-2
// Pair Programming	3	increase target's power by 2	power	+2


// Play out the following scenario
// turn	action
// 1	Make an instance of "Red Belt Ninja"
// 1	Make an instance of "Hard Algorithm" and play it on "Red Belt Ninja"
// 2	Make an instance "Black Belt Ninja"
// 2	Make an instance of "Unhandled Promise Rejection" and play iton "Red Belt Ninja"
// 3	Make an instance of "Pair Programming" and play it on "Red Belt Ninja"
// 3	"Red Belt Ninja" uses the attack method on "Black Belt Ninja"



class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
    playCard() {
        //use card a against card b (logic)
        console.log("Player has used " + this.name + ".")
    }
    effectOnUnit(target) {
        console.log("PLayer has used " + this.name + " on " + target.name + " " + this.text + ".")
        target.power += this.power;
        target.resilience += this.resilience;
    }
    unitOnUnit(target) {
        console.log("PLayer has used " + this.name + " to attack " + target.name + ".")
        target.resilience -= this.power;
    }

}

class Unit extends Card {
    constructor(name, cost, power, resilience) {
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }
}

class Effect extends Unit {
    constructor(name, cost, power, resilience, text) {
        super(name, cost, power, resilience);
        this.text = text;
        // this.stat = stat;
        // this.magnitude = magnitude;
    }
}

const unit1 = new Unit("Red Belt Ninja", 3, 3, 4)
const unit2 = new Unit("Black Belt Ninja", 4, 5, 4)

// console.log(unit1);
// console.log(unit2);

const effect1 = new Effect("Hard Algorithm", 2, 0, 3, "increasing target's resilience by 3")
const effect2 = new Effect("Unhandled Promise Rejection", 1, 0, -2, "reducing target's resilience by 2")
const effect3 = new Effect("Pair Programming", 3, 2, 0, "increasing target's power by 2")

// console.log(effect1);
// console.log(effect2);
// console.log(effect3);


// Turn1
unit1.playCard();
// console.log(unit1);
effect1.effectOnUnit(unit1);
console.log(unit1);

// Turn 2
unit2.playCard();
effect2.effectOnUnit(unit1);
console.log(unit1);

// Turn 3
effect3.effectOnUnit(unit1);
console.log(unit1);
unit1.unitOnUnit(unit2);
console.log(unit2);
