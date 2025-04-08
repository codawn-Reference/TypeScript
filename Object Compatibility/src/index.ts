/**
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가 ?
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog;

// dog = animal;
/**
 * dog 객체가 서브타입 Animal 객체가 수퍼타입
 * 즉 수퍼타입인 animal객체를 서브타입인 dog객체에게 할당할 수 없다. (다운캐스팅)
 * 프로퍼티가 더 많은 객체가 서브타입
 */

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "배고프다",
  price: 30000,
  skill: "typescript",
};

book = programmingBook;
// programmingBook = book;

/**
 * 초과 프로퍼티 검사
 */

let book2: Book = {
  name: "배고프다",
  price: 30000,
  //   skill: "typescript",
};

let book3: Book = programmingBook;

function func(book: Book) {}
func({
  name: "배고프다",
  price: 30000,
  //   skill: "typescript",
});
func(programmingBook);
