// Array

// Array creates Shallow copy
// means refer to same reference

let arr = [true, 0, "Dave", { a: "1", b: "3" }, 3, 4];

console.log(arr[0]);
console.log(arr);

const myArr2 = new Array(1, 2, 3, 4);

console.log(myArr2);

console.log(arr.length);

// Methods

arr.push(10);
console.log(arr);
arr.pop();
console.log(arr);

arr.shift();
console.log(arr);
arr.unshift(11);
console.log(arr);

console.log(arr.includes(11));
console.log(arr.indexOf(3));
console.log(arr.indexOf(111));

const newArr = arr.join();
console.log(newArr);

const arrTest = [1, 2, 3, 4, 5, 6];
console.log("Before Slice", arrTest);
const arrTest1 = arrTest.slice(1, 4);
console.log(" Slice Result", arrTest1);
console.log("After Slice Original", arrTest);
const arrTest2 = arrTest.splice(1, 4);
console.log("After Splice Original", arrTest);
console.log(" Splice Result", arrTest2);
