// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.

// Being able to reference a variable in its scope before the line it is declared, without throwing a ReferenceError, but the value is always undefined.


hello("Dev");
function hello(name) {
  console.log(`Hello ${name}`);
}

// Js only hoists declarations not initialization
console.log(a);
console.log(b);
// console.log(c);    // ReferenceError: Cannot access 'c' before initialization
// console.log(d);    // ReferenceError: Cannot access 'd' before initialization
// console.log(e);    // ReferenceError: Cannot access 'e' before initialization
// console.log(f);    // ReferenceError: Cannot access 'f' before initialization
// greet2()           // ReferenceError: Cannot access 'greet2' before initialization
// greet3()           // ReferenceError: Cannot access 'greet3' before initialization
var a;
var b = 5;

let c;
let d = 9;
const e = 9;
const f = 9;

// Function expression and class expression are not hoisted

const greet2 = function () {
  console.log("greeted");
};
const greet3 = () => {
  console.log("greeted again");
};
