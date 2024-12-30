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
