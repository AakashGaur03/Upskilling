"use strict";
// Union
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = 44;
score = "55";
var aakash = {
    name: "Aakash",
    id: 123,
};
aakash = { username: "AG", id: 123 };
// function getDbId(id: number | string) {
//   console.log(`DB id is ${id}`);
// }
getDbId(3);
getDbId("3");
function getDbId(id) {
    // id.toUpperCase() // this gives error as it considers it as number too
    // so to deal with it
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
// Array
var data = [1, 2, 3, 4];
var data2 = ["1", "2", "3", "4"];
// It says that the array can be either all number or all string not mismatched
var data3 = [1, 2, 3, 4];
// It can be mismatched
var data4 = [1, "2", 3, "4", true];
var pi = 3.14;
// cant be updated
// pi = 3.145
var seatAllotment;
seatAllotment = "aisle";
seatAllotment = "middle";
seatAllotment = "window";
