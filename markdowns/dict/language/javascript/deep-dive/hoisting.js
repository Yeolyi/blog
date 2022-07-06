console.log(x); // undefined
console.log(f);
// console.log(f()); TypeError: f is not a function

var x = 10;
var f = () => { return 20; }

console.log(x); // 10
console.log(f); // [Function: f]
console.log(f());// 20