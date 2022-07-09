// property shorthand
let name = "이성열", age = 24;
console.log({ name, age }); // { name: '이성열', age: 24 }

// computed property name
// ES6에서는 객체 리터럴 내부에서도 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성할 수 있다. 
const id = "ID";
let num = 0;
const obj = {
    [`${id}-${num++}`]: num,
    [`${id}-${num++}`]: num,
    [`${id}-${num++}`]: num,
}
console.log(obj); // { 'ID-0': 1, 'ID-1': 2, 'ID-2': 3 }

// 메서드 축약 표현
const obj2 = {
    print: function () {
        console.log("Hello");
    }
};
obj2.print();
