"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Exemplo de uso de generics
const returnValue = (value) => value; // T é o nome do meu generics
const message = returnValue('olá mundo'); //Tipo de retorno string
const count = returnValue(10); // tipo de retorno number
function getFirstArray(arrayA) {
    return arrayA[0];
}
const firstValue = getFirstArray([1, 2, 3, 4, 5]); //1
const firstValue2 = getFirstArray(['a', 'b', 'c']); //a
//Promisses com generics
const retunrProm = () => __awaiter(void 0, void 0, void 0, function* () {
    return "retorno";
});
// Classes
class GenericNumber {
    constructor(zeroVal, sum) {
        this.zeroVal = zeroVal;
        this.sum = sum;
    }
}
const myGenericNumber = new GenericNumber(0, (x, y) => x + y);
