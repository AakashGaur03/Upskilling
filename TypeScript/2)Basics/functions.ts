// function addTwo(num) {
//   // Right now allowed But shouldn't be
//   num.toUpperCase();
//   return num + 2;
// }

// addTwo(5);

// // Also doesnt gives error for this
// addTwo("5");
function addTwo(num: number) {
  // Now it will give swiglly lines of error
  //   num.toUpperCase();
  return num + 2;
}

addTwo(5);

// Now it will give swiglly lines of error
// addTwo("5");

function getUpper(val: string) {
  return val.toUpperCase();
}

getUpper("This is Data");

function signUpUser(
  name: string,
  email: string,
  password: string,
  isLoggedIn: boolean
) {}
signUpUser("DAve", "dave.gmail.com", "d123", true);

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

// isPaid: boolean=false
// Is used to give by default value

loginUser("d", "d.gmail.com");

// :number after ( ) makes sure that the functions returns that type only

function addThree(num: number): number {
  // Now we cant do this
  // return "Hello";
  return num + 3;
}

// function getValue(myVal:number){
//     if(myVal>5){
//         return true
//     }
//     return "200 OK"
// }

// Define type in arrow function
const getHello = (s: string): string => {
  return "";
};

const heroes = ["spiderman", "ironman", "hawkeye"];
// const heroes = [1, 2, 3];

// in hero map automatically knows it is wheather a string , number , etc
heroes.map((hero): string => {
  return `Hero is ${hero}`;
  // cant do because of :string must return a string
  //   return 1;
});

function consoleErr(errMsg: string): void {
  console.log(errMsg);
}

function handleErr(errMsg: string): never {
  throw new Error(errMsg);
}

export {};
