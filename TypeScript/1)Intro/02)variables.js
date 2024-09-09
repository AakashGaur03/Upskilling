"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// string
var greeting = "Dave";
// greeting = true // Gives swiggly lines
// greeting = 6 // Gives swiggly lines
console.log(greeting);
var myNum = 6;
// myNum.toUpperCase(); //Property toUpperCase does not exist on type number
// number
var userId = 232;
var userId2 = 232.44;
console.log(userId);
console.log(userId2);
var userId3 = 3444;
userId3.toFixed(2);
// Now TS automatically detect that userId3 is a number
// boolean
var isLoggedIn = true;
console.log(isLoggedIn);
// Here automatically it is any we should prefer setting its type
// any basically means turn of the type checking
// let hero;
var hero;
function getHero() {
    return "thor";
}
hero = getHero();
