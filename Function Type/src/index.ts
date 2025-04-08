/**
 * 함수 타입 정의 (Function Type)
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기

function func1(a: number, b: number) {
  return a + b;
}

// 화살표 함수의 타입 정의하는 방법
const add1 = (a: number, b: number) => a + b;

// 함수의 매개변수

function introduce(name = "user", age: number, tall?: number) {
  console.log(`name: ${name}`);
  if (typeof tall === "number") {
    console.log(`tall: ${tall}`);
  }
}

introduce("user1", 20, 200);
introduce("user2", 22);

function getSum(...rest: number[]) {
  // ...rest: [number, number, number] <- tuple
  let sum = 0;
  rest.forEach((it) => (sum += it));

  return console.log(sum);
}

getSum(1, 2, 3); // 6
getSum(1, 2, 3, 4, 5); // 15

/**
 * 함수 타입 표현식 (Function Type Expression)
 */

type Operation = (a: number, b: number) => number;

const add: (a: number, b: number) => number = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

/**
 * 호출 시그니처 (Call Signature)
 */

type Operation2 = {
  (a: number, b: number): number;
  name: string;
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

/**
 * 함수 오버로딩 (Function Overloading)
 * 하나의 함수를 매개변수의 개수나 타입에 따라
 * 여러가지 버전으로 만드는 문법
 * -> 하나의 함수 func
 * -> 모든 매개변수의 타입 number
 * -> Ver1. 매개변수 1개 -> 이 매개변수에 20을 곱한 값 출력
 * -> Ver2. 매개변수 3개 -> 이 매개변수들을 더한 값 출력
 */

// C lang example below
/**
 * void func() {
 *   printf('no param);
 * }
 *
 * void func(int a) {
 *   printf(a + 20);
 * }
 *
 * void func(int a, int b) {
 *   printf(a + b);
 * }
 */

// 오버로드 시그니처
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 구현 시그니처
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

func(1);
func(1, 2, 3);
