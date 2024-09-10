const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

// In this we can take number as a value and can return string That will be valid
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
