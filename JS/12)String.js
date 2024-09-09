const string1 = "Hlo";
const string2 = "Dave";

console.log(`${string1} ${string2}`);

const stringVal = new String("Hiii Dave");

console.log(stringVal);
console.log(stringVal[0]);
console.log(stringVal.toUpperCase());

console.log(stringVal.charAt(3));
console.log(stringVal.indexOf("d"));
console.log(stringVal.indexOf("D"));

const newString = stringVal.substring(0, 6);
// In slice can also give negative values
const newString2 = stringVal.slice(-8, -1);
console.log(newString);
console.log(newString2);

const longString = "       DAve       ";
console.log(longString);
console.log(longString.trim());

let splitStr = stringVal.split(" ");
console.log(splitStr);

let replaceStr = stringVal.replace(" ", "-");
console.log(replaceStr);

console.log(stringVal.includes("ii"));
console.log(stringVal.includes("gii"));
