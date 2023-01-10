interface IUser {
  name: string;
  age: number;
  email?: string;
}

// The same with type definition:
// type TUser = {
//   name: string;
//   age: number;
//   email?: string;
// };

interface IUserWithEmail extends IUser {
  email: string;
}

