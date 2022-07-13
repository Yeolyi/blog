const o = {};
// o.[[Prototype]]; SyntaxError: Unexpected token '['
console.log(o.__proto__); // [Object: null prototype] {}
