// object type
let user1: { name: string; age: number } = {
  name: "Peter",
  age: 30,
};

// define user type
type User = { name: string; age: number };
let user2: User = {
  name: "John",
  age: 40,
};

// type usage
function printUser(user: User) {
  console.log("user name:", user.name);
  console.log("user age:", user.age);
}

printUser(user2);
printUser(user1);

// type union
let numText1: number | null = 2;

// type intersection
type UserWithEmail = User & { email: string };

let user3: UserWithEmail = {
  name: "John",
  age: 40,
  email: "john@gmail.com",
};

// optional properties
type UserWithOptionalEmail = User & { email?: string, address?: string };
let user4: UserWithOptionalEmail = {
  name: "John",
  age: 40,
  email: "sdfsdf",
};

