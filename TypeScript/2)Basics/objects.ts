const User = {
  name: "Dave",
  email: "dave@gmail.com",
  isActive: true,
};

// When function returns a function
// function functionName() :{}{
//     return {}
// }

function createUser({ name: string, isPaid: boolean }) {}

createUser({ name: "den", isPaid: false });

// Gives issue in email
// createUser({ name: "den", isPaid: false,email:"d@gmail.com" });

// But if we do
let newUser = { name: "den", isPaid: false, email: "d@gmail.com" };

createUser(newUser);
// Now doesnt gives issue even if we passed email
// This is one of the weird behavior of JS

function createCourse(): { name: string; price: number } {
  return { name: "TS", price: 999 };
}

export {};
