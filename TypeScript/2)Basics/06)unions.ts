// Union

let score: number | string = 33;

score = 44;

score = "55";

type User = {
  name: string;
  id: number;
};
type Admin = {
  username: string;
  id: number;
};

let aakash: User | Admin = {
  name: "Aakash",
  id: 123,
};

aakash = { username: "AG", id: 123 };

// function getDbId(id: number | string) {
//   console.log(`DB id is ${id}`);
// }

getDbId(3);
getDbId("3");

function getDbId(id: number | string) {
  // id.toUpperCase() // this gives error as it considers it as number too

  // so to deal with it
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

// Array

const data: number[] = [1, 2, 3, 4];
const data2: string[] = ["1", "2", "3", "4"];

// It says that the array can be either all number or all string not mismatched
const data3: string[] | number[] = [1, 2, 3, 4];

// It can be mismatched
const data4: (string | number | boolean)[] = [1, "2", 3, "4", true];

let pi: 3.14 = 3.14;

// cant be updated
// pi = 3.145

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
seatAllotment = "middle";
seatAllotment = "window";

// Any other value will give error
// seatAllotment = "";

export {};
