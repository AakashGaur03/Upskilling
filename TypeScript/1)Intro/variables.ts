// string
let greeting: string = "Dave";

// greeting = true // Gives swiggly lines
// greeting = 6 // Gives swiggly lines

console.log(greeting);

let myNum = 6;

// myNum.toUpperCase(); //Property toUpperCase does not exist on type number

// number
let userId: number = 232;
let userId2: number = 232.44;
console.log(userId);
console.log(userId2);

let userId3 = 3444;
userId3.toFixed(2);
// Now TS automatically detect that userId3 is a number

// boolean
let isLoggedIn: boolean = true;
console.log(isLoggedIn);

// Here automatically it is any we should prefer setting its type
// any basically means turn of the type checking

// let hero;
let hero: string;

function getHero() {
  return "thor";
}
hero = getHero();

export {};
