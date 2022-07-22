const person = {};
Object.defineProperty(person, 'age', {
    value: 10,
    writable: true,
    enumerable: true,
    configurable: true
});
Object.defineProperty(person, 'name', {
    value:'yeolyi',
    writable: false,
    enumerable: false,
    configurable: true
});
person.name = 'ABC';
console.log(person.name); // yeolyi
console.log(Object.keys(person)); // [ 'age' ]
delete person.name
console.log(person.name); // undefined

Object.defineProperty(person, 'school', {
    value: 'snu',
    writable: true,
    enumerable: true,
    configurable: false
});
delete person.school; 
console.log(person.school); // snu
person.school = 'uns';
console.log(person.school); // uns
/*
Object.defineProperty(person, 'school', {
    value: 'snu',
    writable: true,
    enumerable: true,
    configurable: true
}); Cannot redefine property: school
*/
