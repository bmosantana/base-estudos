// Exemplo de uso de generics
const returnValue = <T>(value: T) => value; // T é o nome do meu generics

const message = returnValue<string>('olá mundo');	//Tipo de retorno string
const count = returnValue<number>(10);  // tipo de retorno number

function getFirstArray<T>(arrayA: T[]) {
    return arrayA[0];	
}

const firstValue = getFirstArray<number>([1, 2, 3, 4, 5]); //1
const firstValue2 = getFirstArray<string>(['a', 'b', 'c']); //a

//Promisses com generics
const retunrProm = async (): Promise<string> => {
    return "retorno";
}

// Classes
class GenericNumber<T> {
    zeroVal: any;
    sum: (x: T, y:T) => T;

    constructor(zeroVal: T, sum: (x: T, y: T) => T) {
        this.zeroVal = zeroVal;
        this.sum = sum;
    }
}

const myGenericNumber = new GenericNumber<number>(0, (x, y) => x + y);