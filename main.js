"use strict";

let sumPoints = 0;

let sumNum = +prompt("How much is 2 + 2?");
let sunEast = prompt("The sun rises in the East (yes/no) ?");
let resDivision = prompt("How much is 5 / 0 ?");
let skyColor = prompt("What is the color of the sky?");
let eternalQuestion = +prompt("What is the correct answer to the ultimate question of life, the universe, and everything?");

if (sumNum === 4) {
    sumPoints += 10;
} else {
    sumPoints += 0;
}

if (sunEast === "yes") {
    sumPoints += 10;
} else {
    sumPoints += 0;
}

if (resDivision === "Infinity") {
    sumPoints += 10;
} else {
    sumPoints += 0;
}

if (skyColor === "blue") {
    sumPoints += 10;
} else {
    sumPoints += 0;
}

if (eternalQuestion === 42) {
    sumPoints += 10;
} else {
    sumPoints += 0;
}

alert(`You get ${sumPoints} points`);
