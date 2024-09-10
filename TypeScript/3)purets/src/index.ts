// console.log("Hello Ji Ok ")
// console.log("Hello Ji Ok ")
// class User {
//   public email: string;
//   name: string;
//   #city: string = "";
//   private readonly country: string = "India";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

// we can write class in TS like this also we need to write readonly seprately rest we can write inside of constructor
class User {
  private readonly country: string = "India";
  constructor(
    public email: string,
    public name: string,
    private city: string = ""
  ) {}
}

const dave = new User("dave@gmail.com", "dave");
// dave.city = "Delhi";
// dave.country = "USA";

// When we do private then we cant even access it
// By default others are public
// dave.country

// we can also use # instead of private
// But Note # is present in JS and TS both
// private is only in TS
