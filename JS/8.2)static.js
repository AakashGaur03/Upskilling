class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is ${this.username}`);
  }

  // Static method, accessible only from the class, not from instances
  static createId() {
    return `123`;
  }
}

const davis = new User("Davis");
// console.log(davis.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const phone = new Teacher("Phone", "phone@gmail.com");
phone.logMe();
// console.log(phone.createId());

console.log(User.createId()); // Accessed from the User class
console.log(Teacher.createId()); // Accessed from the Teacher class

// The static createId() method can only be called directly on the class (User.createId() or Teacher.createId()), not on instances of the class.
// Static methods are shared by all instances of the class but are not part of the instance itself.
