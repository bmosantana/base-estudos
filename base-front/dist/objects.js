"use strict";
const user = {
    firstName: 'João',
    lastName: 'Silva',
    age: 10,
    email: 'joao.silva@gmail.com',
    password: '123456',
    order: [{ productId: 1, price: 10 }]
};
const login = (msg) => { };
login(user.password); //forçando a tipagem, com o ! dizendo que a propriedade não é undefined
const author = {
    age: 10,
    books: ['A', 'B'],
    email: 'teste@teste',
    firstName: 'Teste',
    lastName: 'aaaaa',
    order: [{ productId: 1, price: 10 }],
};
const user2 = {
    firstName: 'João',
    email: 'teste@teste'
};
const grade = 10;
