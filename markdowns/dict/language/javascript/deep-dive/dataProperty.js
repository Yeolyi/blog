const person = {
    name: "YeolYi"
};

let name = Object.getOwnPropertyDescriptor(person, 'name');
console.log(name.value); // YeolYi
person.name = "YiYeol";
console.log(name.value); // YeolYi
// data property는 참조?느낌의 객체가 아닌 getOwnPropertyDescriptor를 사용했을 때 만들어지는 객체 같다. 

console.log(name.writable); // true
name.writable = false;
person.name = "ASD";
console.log(person.name); // ASD
