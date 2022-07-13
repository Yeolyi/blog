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
person.fullName = 'foo bar';
console.log(person.firstName, person.lastName);

console.log(Object.getOwnPropertyDescriptor(person, 'fullName'));