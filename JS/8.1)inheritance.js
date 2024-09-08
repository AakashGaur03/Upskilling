class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, pass) {
    super(username);
    this.email = email;
    this.pass = pass;
  }

  addCourse() {
    console.log(`New Course was added by ${this.username}`);
  }
}

const person = new Teacher("Dave", "dave.gmail.com", "2324");

const person2 = new Teacher("sam", "dave.gmail.com", "2324");

const person3 = new User("David");

person.addCourse();
person.logMe();
person2.addCourse();
person2.logMe();
// person3.addCourse();   // It don't have access of addCourse
person3.logMe();

console.log(person instanceof Teacher);
console.log(person instanceof User);
console.log(Teacher instanceof User);
console.log(User instanceof Teacher);
