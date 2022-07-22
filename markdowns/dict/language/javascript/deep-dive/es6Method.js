const bar = {
    x: function() {} // 메서드 x
}
console.log(new bar.x());

const foo = {
    x() {} // 메서드 o
}
// console.log(new foo.x()); TypeError: foo.x is not a constructor
