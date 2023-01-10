interface IUser {
  name: string;
  age: number;
  email?: string;
}

// Function definition with types:
function getUserInfo(user: IUser): string {
  return `User name is ${user.name}, age is ${user.age}`;
}

// Function with optional parameters:
function getUserInfo2(user: IUser, showEmail?: boolean): string {
  return `User name is ${user.name}, age is ${user.age}, email is ${showEmail ? user.email : "hidden"}`;
}

// Function with default parameters:
function getUserInfo3(user: IUser, showEmail: boolean = false ): string {
  return `User name is ${user.name}, age is ${user.age}, email is ${showEmail ? user.email : "hidden"}`;
}
getUserInfo3({ name: "Peter", age: 30 }, true);

// Function with rest parameters:
function getUserInfo4(user: IUser, ...rest: string[]): string {
  return `User name is ${user.name}, age is ${user.age}, email is ${user.email}, ${rest.join(", ")}`;
}
getUserInfo4({ name: "Peter", age: 30, email: "asd" }, "a", "b", "c");
