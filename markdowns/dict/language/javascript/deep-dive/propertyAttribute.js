const person = {
    name: 'YeolYi'
};

console.log(Object.getOwnPropertyDescriptor(person, 'name'));
/*
PropertyDescriptor 객체
{
  value: 'YeolYi',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

person.age = 24;
console.log(Object.getOwnPropertyDescriptors(person));
/*
{
  name: {
    value: 'YeolYi',
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: { value: 24, writable: true, enumerable: true, configurable: true }
}
*/