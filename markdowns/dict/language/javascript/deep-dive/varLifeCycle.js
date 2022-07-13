function foo() {
    console.log(x);
    var x = 'local';
    return x;
}

foo();
// console.log(x); ReferenceError: x is not defined
