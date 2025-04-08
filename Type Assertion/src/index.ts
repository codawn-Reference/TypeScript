/**
 * 타입 단언 (Type Assertion)
 */

type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "김사람";
person.age = 20;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never; // A가 B의 슈퍼타입임
let num2 = 10 as unknown; // B가 A의 슈퍼타입임

let num3 = 10 as unknown as string;

// const 단언

let num4 = 10 as const;

let cat = {
  name: "야옹이",
  color: "white",
} as const;

// Non null 단언

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글 1",
  author: "user1",
};

// const len: number = post.author?.length; // author가 undefined일 수 있기 때문에 자동으로 Optional Chaining이 적용됨
const len: number = post.author!.length; // Non null 단언을 사용하여 컴파일러에게 author가 null이 아니라고 알려줌
