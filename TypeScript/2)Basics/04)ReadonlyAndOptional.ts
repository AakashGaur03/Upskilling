type User = {
  readonly _id: string; // cant be updated
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number; // ? means it is optional
};

let myUser: User = {
  _id: "1234",
  name: "david",
  email: "d@gmail.com",
  isActive: true,
};

type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  carDate: string;
};

type cardDetails = cardNumber & cardDate & { cvv: number };

myUser.email = "d.gmail.com";

// Gives error Cannot assign to '_id' because it is a read-only property
// myUser._id = 'fdfdf34'

export {};
