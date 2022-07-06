// 진수별 데이터 타입이 없기에 모두 10진수로 해석된다. 
// 모두 double precision 64bit floating point binary data
console.log(1 === 1.0); // true
console.log(3 / 2); // 1.5
// number 타입의 세가지 특별한 값
console.log(1 / 0); // Infinity
console.log(1 / -0); // -Infinity
console.log(1 * "Hello"); // NaN
