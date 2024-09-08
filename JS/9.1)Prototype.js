let myName = "Davis     ";

console.log(myName.length);

// Dont want to do like this
console.log(myName.trim().length);

// We need to make a new method that is 'trueLength' that will tell True Length of String is by removing extra spaces

let myHeroes = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spider man power is ${this.spiderman}`);
  },
};

Object.prototype.david = function () {
  console.log("David is present in all objects");
};

heroPower.david();
myHeroes.david();

Array.prototype.sayDavid = function () {
  console.log(`David from Arrays`);
};

// Here myHeroes will have access but heroPower not because
// Object is parent of array
// Function --------------⬇️
// Array  ---------------> Object ---------> null
// String ----------------⬆️
myHeroes.sayDavid();
// heroPower.sayDavid();

// // Inheritance

// const User = {
//   name: "Dave",
// };
// const Teacher = {
//   makeVideo: true,
// };

// const TeachingAssistant = {
//   isAvail: false,
// };
// const TASupport = {
//   makeAssignment: "JS Assignment",
//   fullTime: true,
//   __proto__: TeachingAssistant,
// };

// Teacher.__proto__ = User;

// // modern syntax for same Task as above
// Object.setPrototypeOf(Teacher, User);

String.prototype.trueLength = function () {
  // Logs the primitive string (inside a template literal)
  console.log(`Original string: '${this}'`);
  // Logs the String object wrapper

  console.log(this);
  console.log(`True Length is ${this.trim().length}`);
};

let value = "Hi     ";
"value".trueLength();
value.trueLength();
myName.trueLength();
