function foo(x, y) {
    console.log(x, y);
    return x + y;
}

console.log(foo(1)); // 1 undefined, NaN

function add(x, y) {
    console.log(arguments);
    return x + y;
}

add(2, 5, 10); // [Arguments] { '0': 2, '1': 5, '2': 10 }
