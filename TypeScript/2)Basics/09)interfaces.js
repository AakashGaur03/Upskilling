"use strict";
// Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.
Object.defineProperty(exports, "__esModule", { value: true });
var dave = {
    dbId: 2,
    email: "dave.gmail.com",
    userId: 222,
    githubToken: "github",
    startTrial: function () {
        return "trial started";
    },
    getCoupon: function (name, off) {
        return 10;
    },
};
var david = {
    dbId: 2,
    role: "learner",
    email: "dave.gmail.com",
    userId: 222,
    githubToken: "github",
    startTrial: function () {
        return "trial started";
    },
    getCoupon: function (name, off) {
        return 10;
    },
};
