/* ASI가 실패하는 경우들 */

function foo() {
    return
    { }
}
console.log(foo()); // undefined

var bar = function () { }
(function () { })(); // TypeError: (intermediate value)(...) is not a function
