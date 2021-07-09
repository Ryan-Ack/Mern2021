// GIVEN
console.log(example);
var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

console.log(example);
let example = "I'm the example!";




// 1)
console.log(hello);
var hello = 'world';

// AFTER HOISTING BY THE INTERPRETER
var hello;
console.log(hello);
hello = 'world';
"world"




// 2)
var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle);
}
// AFTER HOISTING BY THE INTERPRETER
var needle;
function test() {
    var needle;
};
needle = 'haystack';
// invoke function
function test() {
    needle = 'magnet'
}
// only console.log inside of function = 'magnet'



// 3)
var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// AFTER HOISTING BY THE INTERPRETER
var brendan;
function print() {
    brendan = 'only okay';
}
console.log(brendan); // logs 'super cool'. function was never called

// 4)
var food = 'chicken';
console.log(food);
eat();
function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// AFTER HOISTING BY THE INTERPRETER
var food;
function eat() {
    var food;
    food = 'half-chicken' //renames variable to 'half-chicken'
}
// output: chicken, half - chicken.

// 5)
mean();
console.log(food);
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// AFTER HOISTING BY THE INTERPRETER
var mean;
//error not a function.

// 6)
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// AFTER HOISTING BY THE INTERPRETER
var genre;
function rewind() {
    var genre;
    genre = 'rock';
}
//undefined, rock, rock, rock.  >>>  undefined > rock > r&b > disco


// 7)
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// AFTER HOISTING BY THE INTERPRETER
function learn() {
    var dojo;
}
// san jose, seattle, burbank, san jose


// 8) Bonus
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}

// AFTER HOISTING BY THE INTERPRETER
// cannot edit dojo because it is a const that does not have keys.










































