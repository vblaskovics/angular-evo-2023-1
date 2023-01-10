// Function definition with types:
function getUserInfo(user: IUser): string {
  return `User name is ${user.name}, age is ${user.age}`;
}

// Function with optional parameters:
function getUserInfo2(user: IUser, showEmail?: boolean): string {
  return `User name is ${user.name}, age is ${user.age}, email is ${showEmail ? user.email : "hidden"}`;
}

//

