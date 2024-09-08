class User {
  constructor(username, email, pass) {
    this.username = username;
    this.email = email;
    this.pass = pass;
  }

  encryptPass() {
    return `${this.pass}secure`;
  }
  upperUsername() {
    return this.username.toUpperCase();
  }
}

const person = new User("Dave", "dave.gmail.com", "123");
console.log(person.encryptPass());
console.log(person.upperUsername());
console.log(person);

// Behind the scene without class

function User2(username, email, pass) {
  this.username = username;
  this.email = email;
  this.pass = pass;
}

User2.prototype.encryptPass = function () {
  return `${this.pass}secure23`;
};
User2.prototype.upperUsername = function () {
  return this.username.toUpperCase();
};

const person2 = new User2("Samuel", "samuel.gmail.com", "234");

console.log(person2);
console.log(person2.encryptPass());
console.log(person2.upperUsername());
