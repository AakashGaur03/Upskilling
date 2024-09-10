const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

// In this we can take number as a value and can return string and that will be valid
function identityTwo(val: any): any {
  return val;
}

// In this we can take any type as input but in return that same type will be present
// If input is number then return will be also number

function identityThree<Type>(val: Type): Type {
  return val;
}

identityThree(3);
identityThree("dave");
identityThree(true);

function identityFour<T>(val: T): T {
  return val;
}

interface Bootle {
  brand: string;
  type: number;
}

identityFour<Bootle>({ brand: "A", type: 2 });

function getSearchProducts<T>(products: T[]): T {
  // Do some DB
  const myIndex = 3;
  return products[myIndex];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
  // Do some DB
  const myIndex = 5;
  return products[myIndex];
};

// function anotherFunction<T, U extends number>(
//   valueOne: T,
//   valueTwo: U
// ): object {
//   return { valueOne, valueTwo };
// }
// anotherFunction(3, 3.2);
// anotherFunction("222", 3);
// // anotherFunction(3, "3.2");   Gives Error

interface Database {
  connection: string;
  username: string;
  password: string;
}

function anotherFunction<T, U extends Database>(
  valueOne: T,
  valueTwo: U
): object {
  return { valueOne, valueTwo };
}
anotherFunction(3, {
  connection: "connection",
  username: "name",
  password: "pass",
});

// Class Types in Generics

interface Quiz {
  name: string;
  type: string;
}
interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}
