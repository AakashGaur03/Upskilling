// A callback function is a function passed into another function as an argument , which is then invoked inside the outer function to complete an action

// function hello() {
//   setTimeout(() => {
//     console.log("Hello");
//   }, 3000);
// }
// function goodbye() {
//     console.log("Buee");
// }

// hello();
// goodbye();

function hello(callback) {
  setTimeout(() => {
    console.log("Hello");
    callback();
  }, 3000);
}
function goodbye() {
  console.log("Buee");
}

hello(goodbye);

const calculate = (a, b, operation) => {
  return operation(a, b);
};
const sum = (num1, num2) => {
  return num1 + num2;
};
console.log(calculate(10, 7, sum));

// CAllbacks are basically used in
// find()
// findIndex()
// forEach()
// map()
// filter()
// every()
// some()

// Ex
a = [1, 2, 5, -5, 3, 4, 4, -6, 22, 5];

let firstNeg = (num) => {
  return num < 0;
};

let firstNegVAl = a.find(firstNeg);
console.log(firstNegVAl);
let firstGreaterThan5 = a.find((num) => num > 5);
console.log(firstGreaterThan5);
