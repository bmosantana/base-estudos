//Type - define propriedades e os tipos de cada propriedade
type Order = {
    productId: number;
    price: number;
};

type User = {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    //propriedades opcionais não são de fato o tipo declarado, elas não uma intersection, logo seu tipo original vai ser undefined
    password?: string; //com o ? indica que é opcional
    order: Order[];

    //habit tracker props
    // isConcluedad: boolean;
    // titulo: string; 
    // description?: string; //opcional
}

const user: User = {
    firstName: 'João',
    lastName: 'Silva',
    age: 10,
    email: 'joao.silva@gmail.com',
    password: '123456',
    order: [{productId: 1, price: 10}]
}

const login = (msg: string) => {}
login(user.password!); //forçando a tipagem, com o ! dizendo que a propriedade não é undefined