// 브라우저(window)와 node가 결과가 다른 듯
var x = 1;
y = 2;
function foo() { console.log('hello'); }
console.log(global.x); // undefined?
console.log(global.y); // 2
console.log(global.foo); // undefined?
