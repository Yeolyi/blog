// Function 생성자 함수를 사용한 방식은 일반적이지 않고 바람직하지도 않다. 
// 클로저를 생성하지 않는 등 함수 선언문/표현식으로 생성한 함수와 다르다. 
var add1 = (function() {
    var a = 10;
    return function (x, y) {
        return x + y + a;
    };
}());

var add2 = (function() {
    var a = 10;
    return new Function('x', 'y', 'return x + y + a');
}());

console.log(add1(1, 2)); // 3
console.log(add2(1, 2)); // ReferenceError: a is not defined
