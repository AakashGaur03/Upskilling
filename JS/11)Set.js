const mySet = new Set();

console.log(mySet);

mySet.add("1");
mySet.add(2);
mySet.add("2");
mySet.add("2");
mySet.add("2");
mySet.add({ 1: "@", 2: "#" });
mySet.add(true);
mySet.add("value");

console.log(mySet);

const mySet2 = new Set([1, 2, "val", "false"]);
console.log(mySet2);

console.log(mySet.size);
console.log(mySet.has(true));
console.log(mySet.has("trues"));
console.log(mySet);
console.log(mySet.delete("2"));

console.log(mySet);

// Iterating a set

for (const item of mySet) {
  console.log("Value :", item);
}

// OR

mySet.forEach((item) => {
  console.log("Foreach Item :", item);
});

// convert array into set then set in array js to remove duplicates

const array = [1, 2, 3, 3, 4, 4, 5, 5, 6];

const removeDupSet = new Set(array);

console.log(removeDupSet);

const uniqueArr = [...removeDupSet];

console.log(uniqueArr);
