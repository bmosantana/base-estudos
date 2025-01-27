"use strict";
class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    sayMyName() {
        return this.name;
    }
}
class Child {
    // Uma outra forma de criar classe sem precisar repetir codigo de definição e do constructor
    constructor(id, //readonly só se altera no construtor da classe
    name, //protected só é acessivel dentro da classe ou das subclasses(classes filhas)
    age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}
class Employee extends Person {
    constructor(id, name, age, salary) {
        super(id, name, age);
        this.salary = salary;
    }
}
const personP = new Person(1, 'Ana', 15);
console.log(personP);
