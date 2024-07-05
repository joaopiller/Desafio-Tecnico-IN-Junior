/* Implemente uma função recursiva que,dados dois números inteiros x e
n, calcula o valor de xn. */

function multiplicacao(valor1,valor2) {
    return valor1 * valor2;
}

x = parseInt(prompt('Insira o valor de x: '));
n = parseInt(prompt('Insira o valor de n: '));
console.log(multiplicacao(x,n));