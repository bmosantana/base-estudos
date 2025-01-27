interface IPerson {
    id: number;
    name: string;
    age: number;
    sayMyName(): string;
}

class Person {
    readonly id: number; //readonly só se altera no construtor da classe
    protected name: string; //protected só é acessivel dentro da classe ou das subclasses(classes filhas)
    private age: number; //private só é acessivel dentro da classe

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    sayMyName(): string {
        return this.name;
    }
}

class Employee extends Person {
    private salary: number;

    constructor(id: number, name: string, age: number, salary: number) {
        super(id, name, age);
        this.salary = salary;
    }
}
const personP = new Person(1, 'Ana', 15);

console.log(personP);