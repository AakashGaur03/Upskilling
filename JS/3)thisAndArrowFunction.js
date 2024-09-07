const user = {
  userName: "Dave",
  age: 29,

  welcome: function () {
    console.log(`${this.userName}, welcome`);
    console.log(this);
  },
};

user.welcome();
user.userName = "Sam";
user.welcome();

console.log(this);

function hi() {
  let userName = "Some";
  console.log(this, "g");
  console.log(userName, "userName");
  console.log(this.userName, "this.userName"); // will give undefined
}

// Arrow functions do not bind their own this, instead, they inherit the one from the parent scope
// THIS IS JS DEFAULT BEHAVIOUR

const hi2 = () => {
  console.log(this, "h");
};
hi();
hi2();

const myObject = {
  firstName: "David",
  myMethod: () => {
    console.log(this, "obj");
  },
};

myObject.myMethod();

const myObject2 = {
  myArrowFunction: null,
  myMethod: function () {
    this.myArrowFunction = () => {
      console.log(this, "obj2");
    };
  },
};

myObject2.myMethod(); // this === myObject

myObject2.myArrowFunction(); // this === myObject

const myArrowFunction2 = myObject2.myArrowFunction;
myArrowFunction2();

// Here, myObject2 is an object with two properties:

// 1) myArrowFunction: Initially set to null, but it will later store an arrow function.
// 2) myMethod: A method that assigns an arrow function to this.myArrowFunction.
// The key point is that inside myMethod, the this keyword refers to myObject2 because myMethod is a regular function and is called in the context of myObject2.

// When myObject2.myMethod() is called, the this inside myMethod refers to myObject2, since it is a regular function and called on the myObject2 object.
// Inside myMethod, the this.myArrowFunction is assigned an arrow function.
// Arrow functions inherit the this value from their enclosing context. Since the enclosing context here is the myMethod function, and this inside myMethod refers to myObject2, the arrow function's this will also always refer to myObject2.
