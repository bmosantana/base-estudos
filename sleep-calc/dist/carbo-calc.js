class IGeb {
    nome;
    idade;
    peso;
    altura;
    // base de calculos de gasto energético basal
    // TODOS ESSES VALORES PODERIAM ESTAR EM UMA ENUM ** PONTO DE MELHORIA
    sendentario = 1.2;
    leve = 1.375;
    moderado = 1.55;
    intenso = 1.725;
    extremo = 1.9;
}
class Geb extends IGeb {
    constructor(nome, idade, peso, altura) {
        super();
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
    }
    //calcular Gasto energético basal
    gebCalc(peso, altura) {
        return peso * altura;
    }
    // TDEE calculado de acordo com a atividade física
    tdeeCalc(geb, atividade) {
        return geb * atividade;
    }
}
const pessoa = new Geb('Ana', 15, 90, 1.66);
const gebPessoa = pessoa.gebCalc(pessoa.peso, pessoa.altura);
const tdeePessoa = pessoa.tdeeCalc(gebPessoa, pessoa.leve);
console.log(tdeePessoa);
