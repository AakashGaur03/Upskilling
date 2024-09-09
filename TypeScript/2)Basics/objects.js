"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Dave",
    email: "dave@gmail.com",
    isActive: true,
};
// When function returns a function
// function functionName() :{}{
//     return {}
// }
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "den", isPaid: false });
// Gives issue in email
// createUser({ name: "den", isPaid: false,email:"d@gmail.com" });
// But if we do
var newUser = { name: "den", isPaid: false, email: "d@gmail.com" };
createUser(newUser);
// Now doesnt gives issue even if we passed email
// This is one of the weird behavior of JS
function createCourse() {
    return { name: "TS", price: 999 };
}
