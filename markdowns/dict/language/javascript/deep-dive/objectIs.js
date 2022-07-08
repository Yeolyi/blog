console.log(NaN == NaN); // false
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(1 + undefined)); // true
// ES6
console.log(Object.is(0, -0)); // false
console.log(Object.is(NaN, NaN)) // true
