console.log("" && "Hello"); // ''
console.log(false && "Hello"); // false
console.log("" || "Hello"); // Hello
console.log("Hello" || false); // Hello

// 객체의 존재를 확인하고 프로퍼티 참조
var object = null;
var value = object && object.value;

var emptyStr = ''
console.log(emptyStr && emptyStr.length);
console.log(emptyStr?.length);
