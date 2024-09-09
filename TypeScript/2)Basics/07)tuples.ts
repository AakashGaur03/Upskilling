// Tuple

// A tuple is a typed array with a pre-defined length and types for each index.

// Tuples are great because they allow each element in the array to be a known type of value.

// array of string
const user: (string | number)[] = ["AG", 1];

// I want first comes string then comes number not otherwise
// Right now it can be either way

let user2: [string, number, boolean];

user2 = ["hc", 141, true];

// Now it will give error as the pattern should be followed
// user2 = [12, "141", true];

let rgb: [number, number, number] = [255, 223, 222];

type User = [number, string];

const newUser: User = [112, "google"];

// Will give error
// const newUser2: User = ["yahoo", 111];

const newUser3: User = [112, "google"];
// But what we can Update the values in it

newUser3[1] = "facebook";
console.log(newUser3);

export {};
