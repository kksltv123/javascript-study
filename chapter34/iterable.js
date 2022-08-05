// 34.1.1 이터러블

// 이터버블인지 확인하는 함수
// 예제 34-01
const isIterable = v => v !== null && typeof v[Symbol.iterator] === 'function';

// 배열, 문자열, Map, Set 등은 이터러블이다.
isIterable([]);       // → true
isIterable('');       // → true
isIterable(new Map());// → true
isIterable(new Set());// → true
isIterable({});       // → false

// 예제 34-02
const array = [1, 2, 3];

// 배열 Array.prototype
