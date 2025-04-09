/**
 * 인터페이스 (Interface)
 */

// interface IPerson <- 헝가리안 표기헝
// const user_name <- 스네이크 표기법
// const userName <- 카멜 표기법
// const UserName <- 파스칼 표기법

interface Person {
  readonly name: string;
  age?: number;
  //   sayHi: () => void; overload signature X 식별자 중복
  //   sayHi: (a: number, b: number) => void; // call signature
  sayHi(): void; // call signature
  sayHi(a: number, b: number): void; // call signature -> overload signature
} // | number X

// type Type1 = number | string | Person;
// type Type2 = number & string;

const person: Person = {
  name: "John",
  sayHi: function () {
    console.log("Hi");
  },
};

// person.name = "Jane";
person.sayHi();
person.sayHi(1, 2);
