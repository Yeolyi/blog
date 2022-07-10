// 그룹 연산자의 피연산자는 값으로 평가될 수 있는 표현식이어야 한다. 
(function bar() { console.log('bar'); })
// bar(); ReferenceError: bar is not defined
