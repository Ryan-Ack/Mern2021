class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() { console.log(`My name is ` + this.name) }

    showStats() {
        // const stats { health, speed, strength } = Ninja  //Spread operator??
        // console.log(stats)
        console.log("health: " + this.health);
        console.log("speed: " + this.speed);
        console.log("strength: " + this.strength);

    }
    drinkSake() {
        console.log("Drinking Sake!")
        this.health += 10;
    }


}
// --------------------------------------------Super Ninja below

class Sensei extends Ninja {
    constructor(name, health, speed, strength) {
        super(name, health, speed, strength)
        this.wisdom = 10
        console.log("Sensei created!")
    }
    speakWisdom() { console.log("What one programmer can do in one month, two programmers can do in two months.") }
    showStats() {
        console.log("health: " + this.health);
        console.log("speed: " + this.speed);
        console.log("strength: " + this.strength);
        console.log("wisdom: " + this.wisdom);
        // store stats in a variable and just console.log the variable to show "health, speed, strength, wisdom (plus values)"
    }
}






const ninja1 = new Ninja("Hyabusa");
// console.log(ninja1)
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();


// --------------------------------------------Super Ninja below


const superSensei = new Sensei("Master Splinter")

superSensei.sayName();
superSensei.speakWisdom();
superSensei.showStats();