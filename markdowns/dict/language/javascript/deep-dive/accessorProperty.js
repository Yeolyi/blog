const person = {
    firstName: 'Yi',
    lastName: 'Yeol',
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
}

console.log(person.fullName);
person.fullName = 'foo bar'; // setter가 없으면 무시됨
console.log(person.firstName, person.lastName);

console.log(Object.getOwnPropertyDescriptor(person, 'fullName')); 
/*
{
  get: [Function: get fullName],
  set: [Function: set fullName], // 없다면 undefined
  enumerable: true,
  configurable: true
}
*/
