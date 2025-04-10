/**
 * 제네릭 타입 (Generic Type)
 */

// 제네릭 함수
function func<T>(value: T): T {
  return value;
}

// 제네릭 타입 제한
function func2<T>(value: T[]): T[] {
  return value;
}

let num = func<number>(10);
let bool = func<boolean>(true);

let arr = func<[number, number, number]>([1, 2, 3]);
