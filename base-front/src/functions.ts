const sum = (a: number, b: number): string | number => { //string | number - pode retornar string ou number [INTERSECTIONS]
    return a + b;
} 

const value = sum(2, 2);

const log = (value: string | number): void => { //void não retorna nada, mas todas as funções podem retornar algo
    console.log(value);
}