console.log(add); // [Function: add]
console.log(sub); // undefined

function add(x, y) {
    return x+y;
}

var sub = function(x, y) {
    return x-y;
}
