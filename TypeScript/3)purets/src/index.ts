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
  //   private _courseCount = 1;
  //   protected means can be accessed within same class and any class which inherits this class not outside of class
  protected _courseCount = 1;
  private readonly country: string = "India";
  constructor(
    public email: string,
    public name: string,
    private city: string = ""
  ) {}

  private deleteToken() {
    console.log("Token Deleted");
  }
  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }
  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course Count should be more than 1");
    }
    this._courseCount = courseNum;
  }
  //   TS setter dont have any return type thats how TS is designed
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

// dave.deleteToken()

class SubUser extends User {
  isFamily: boolean = true;
  changeCourseCount() {
    // Property '_courseCount' is private and only accessible within class 'User'
    this._courseCount = 4;
  }
}
