class Person {
  // Visibility modifiers:
  // public: default, accessible from everywhere
  // private: accessible only from the class
  // protected: accessible from the class and its children

  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Static methods and properties:
  // static: accessible from the class itself, not from the instances
  static isAdult(age: number): boolean {
    return age >= 18;
  }

}

Person.isAdult(20);

const person = new Person("Peter", 30);
