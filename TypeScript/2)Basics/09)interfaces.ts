// Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.


// type User = {
//   email: string;
//   userId: number;
// };

interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrial: () => string; // A function that returns string
  //   Both does the same
  startTrial(): string; // A function that returns string
  getCoupon(couponname: string, value: number): number;
}

// const dave: User = {
//   dbId: 2,
//   email: "dave.gmail.com",
//   userId: 222,
//   startTrial: () => {
//     return "trial started";
//   },
//   getCoupon: (name: "dave10", off: 10) => {
//     return 10;
//   },
// };

// dave.email = "d@gmail.com";
// dave.dbId=3        // Not possible

// we can extend the interface but cant extend type in ts
// Also known as reopening of interface

interface User {
  githubToken: string;
}

// Now after this we can access all properties of User in Admin
interface Admin extends User {
  role: "Admin" | "ta" | "learner";
}

const dave: User = {
  dbId: 2,
  email: "dave.gmail.com",
  userId: 222,
  githubToken: "github",
  startTrial: () => {
    return "trial started";
  },
  getCoupon: (name: "dave10", off: 10) => {
    return 10;
  },
};
const david: Admin = {
  dbId: 2,
  role: "learner",
  email: "dave.gmail.com",
  userId: 222,
  githubToken: "github",
  startTrial: () => {
    return "trial started";
  },
  getCoupon: (name: "dave10", off: 10) => {
    return 10;
  },
};

export {};
