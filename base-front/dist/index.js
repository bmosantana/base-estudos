"use strict";
// Tipos básicos
let age = 10; //infere o tipe de acordo com o tipo da primeira atribuição
const firstName = 'João';
const isAdult = true;
let idk = 'idk';
idk = 10;
idk = false;
const ids = [1, 2, 3, 4, 5];
const names = ['João', 'Maria', 'Ana'];
//Tupla - a ordem dos tipos é importante
const person = ['João', 10];
//Lista de Tuplas
const people = [
    ['João1', 10],
    ['João2', 10],
    ['João3', 10]
];
//Intersections
const product = '123';
//Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
const direction = Direction.Up;
//Objetos
const person2 = { name: 'João', age: 10 };
//Type Assertions - tratar a variavel do tipo x como se fosse do tipo y
const a = '123';
let b = a;
//let b = <string>a;
console.log(direction);
