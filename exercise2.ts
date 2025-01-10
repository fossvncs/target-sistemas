// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

// propriedade matemática: um número n é um número de Fibonacci se e somente se um (ou ambos) dos seguintes valores for um quadrado perfeito: 5n^2 + 4 | 5n^2 -4

function isFibonacci(n: number): boolean {
    if (n < 0) {
        return false;
    }

    // verificar se um número é um quadrado perfeito
    const isPerfectSquare = (x: number): boolean => {
        const s = Math.floor(Math.sqrt(x));
        return s * s === x;
    };

    // testando as duas condições
    return isPerfectSquare(5 * n ** 2 + 4) || isPerfectSquare(5 * n ** 2 - 4);
}

// Exemplo de uso
const numero = 21;

if (isFibonacci(numero)) {
    console.log(`${numero} está na sequência de Fibonacci.`);
} else {
    console.log(`${numero} não está na sequência de Fibonacci.`);
}
