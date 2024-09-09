"use strict";
// function addTwo(num) {
//   // Right now allowed But shouldn't be
//   num.toUpperCase();
//   return num + 2;
// }
Object.defineProperty(exports, "__esModule", { value: true });
// addTwo(5);
// // Also doesnt gives error for this
// addTwo("5");
function addTwo(num) {
    // Now it will give swiglly lines of error
    //   num.toUpperCase();
    return num + 2;
}
addTwo(5);
// Now it will give swiglly lines of error
// addTwo("5");
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("This is Data");
function signUpUser(name, email, password, isLoggedIn) { }
signUpUser("DAve", "dave.gmail.com", "d123", true);
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
// isPaid: boolean=false
// Is used to give by default value
loginUser("d", "d.gmail.com");
// :number after ( ) makes sure that the functions returns that type only
function addThree(num) {
    // Now we cant do this
    // return "Hello";
    return num + 3;
}
// function getValue(myVal:number){
//     if(myVal>5){
//         return true
//     }
//     return "200 OK"
// }
// Define type in arrow function
var getHello = function (s) {
    return "";
};
var heroes = ["spiderman", "ironman", "hawkeye"];
// const heroes = [1, 2, 3];
// in hero map automatically knows it is wheather a string , number , etc
heroes.map(function (hero) {
    return "Hero is ".concat(hero);
    // cant do because of :string must return a string
    //   return 1;
});
function consoleErr(errMsg) {
    console.log(errMsg);
}
// The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.
function handleErr(errMsg) {
    throw new Error(errMsg);
}
