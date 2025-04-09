/**
 * 인터페이스 확장 (extends)
 */

interface Animal {
  name: string;
  color: string;
}

type Animal2 = {
  name: string;
  color: string;
};

interface Dog extends Animal2 {
  // 객체 타입이면 확장 가능
  isBark: boolean;
}

interface Dog extends Animal2 {
  //   name: "hello";
  //   name: number; <- error
  isBark: boolean;
}

const dog: Dog = {
  name: "hello",
  color: "brown",
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

const cat: Cat = {
  name: "cat",
  color: "white",
  isScratch: true,
};

interface Chicken extends Animal {
  isFly: boolean;
}

const chicken: Chicken = {
  name: "chicken",
  color: "yellow",
  isFly: true,
};

interface DogCat extends Dog, Cat {} // 다중 상속 가능

const dogCat: DogCat = {
  name: "dogCat",
  color: "black",
  isBark: true,
  isScratch: true,
};
