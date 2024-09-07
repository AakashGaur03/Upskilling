// As we know that let and const can't be hoisted so trying to access them before the initialization makes a temporal dead zone from where we are trying to access it till it is declared

// The Temporal Dead Zone refers to the period in the execution of a JavaScript program where a variable exists but cannot be accessed.

console.log(a)
let a = 23;

console.log(a)