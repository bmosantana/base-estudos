class IGeb {
    nome: string;
    idade: number;
    peso: number;
    altura: number;

    // base de calculos de gasto energético basal
    // TODOS ESSES VALORES PODERIAM ESTAR EM UMA ENUM ** PONTO DE MELHORIA
    readonly sendentario: number = 1.2;
    readonly leve: number = 1.375;
    readonly moderado: number = 1.55;
    readonly intenso: number = 1.725;
    readonly extremo: number = 1.9;

}

class Geb extends IGeb {

    constructor(nome: string, idade: number, peso: number, altura: number) {
        super();
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
    }

    //calcular Gasto energético basal
    gebCalc(peso: number, altura: number): number {
        return peso * altura;
    }

    // TDEE calculado de acordo com a atividade física
    tdeeCalc(geb: number, atividade: number): number {
        return geb * atividade;
    }
}

const pessoa = new Geb('Ana', 15, 90, 1.66);
const gebPessoa = pessoa.gebCalc(pessoa.peso, pessoa.altura);
const tdeePessoa = pessoa.tdeeCalc(gebPessoa, pessoa.leve);

console.log(tdeePessoa);