// console.log("Hello Ji Ok ")
// console.log("Hello Ji Ok ")
class User {
  email: string;
  name: string;
  city: string = "";
  readonly country: string = "India";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const dave = new User("dave@gmail.com", "dave");
dave.city = "Delhi";
// dave.country = "USA";
