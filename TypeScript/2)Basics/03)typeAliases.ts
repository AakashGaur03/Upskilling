type User = {
  name: string;
  email: string;
  isActive: boolean;
};

type myString = string;

// Now we can even use myString instead of string it will coresponds to same

function createUser(user: User): User {
  return { name: "", email: "", isActive: true };
}

createUser({ name: "", email: "", isActive: true });
export {};
