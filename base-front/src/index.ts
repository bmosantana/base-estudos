// Tipos básicos
let age: number = 10; //infere o tipe de acordo com o tipo da primeira atribuição
const firstName: string = 'João';
const isAdult: boolean = true;
let idk: any = 'idk';

idk = 10;
idk = false;

const ids: number[] = [1, 2, 3, 4, 5];
const names: string[] = ['João', 'Maria', 'Ana'];

//Tupla - a ordem dos tipos é importante
const person: [string, number] = ['João', 10];

//Lista de Tuplas
const people: [string, number][] = [
    ['João1', 10],
    ['João2', 10],
    ['João3', 10]
];

//Intersections
const product: string | number = '123';

//Enum
enum Direction {
    Up = 1,
    Down = 2,
    Left = 3,
    Right = 4
}

const direction: Direction = Direction.Up;

//Objetos
const person2: { name: string, age: number } = { name: 'João', age: 10 };

//Type Assertions - tratar a variavel do tipo x como se fosse do tipo y
const a: any = '123';
let b = a as string;
//let b = <string>a;


console.log(direction);