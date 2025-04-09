/**
 * 선언 합침 (declaration merging)
 */

interface Person {
  name: string;
}

interface Person {
  //   name: number;
  age: number;
}

interface Developer extends Person {
  name: "hello";
}

const person: Person = {
  name: "user",
  age: 20,
};

/**
 * 모듈 보강 (module augmentation)
 */

interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello",
};
