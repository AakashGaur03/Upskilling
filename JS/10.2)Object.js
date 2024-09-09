// Singleton
// Object.create

// Object Literals

const defineSymbol = Symbol("");

const user = {
  name: "Dave",
  "full name": "Dave John",
  age: 20,
  [defineSymbol]: "symbolVal",
  location: "New York",
  email: "dave@gmail.com",
  lastLoggedIn: ["M", "W", "F"],
};

console.log(user.email);
console.log(user["email"]);
console.log(user["full name"]);
// Symbol can only be accessed as[""]
console.log(user[defineSymbol]);

console.log(typeof defineSymbol);
// This will give undefined
console.log(typeof user.defineSymbol);

user.email = "dave.chatgpt.com";

user.greet = function () {
  console.log(`Hello ${this.name}`);
};

user.greet();

console.log(user);
Object.freeze(user);
// It will not be updated
user.email = "dave.facebook.com";
console.log(user);
