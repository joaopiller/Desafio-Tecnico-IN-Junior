/* Teste 5 números inteiros aleatórios. Os testes:
- Caso o valor seja divisível por 3, imprima no console “fizz”.
- Caso o valor seja divisível por 5 imprima “buzz”.
- Caso o valor seja divisível por 3 e 5, ao mesmo tempo, imprima
“fizzbuzz”.
- Caso contrário imprima nada. */

function fizzbuzz(valor) {
    if (valor % 3 == 0 && valor % 5 == 0) {
        return 'fizzbuzz';
    } else if (valor % 5 == 0) {
        return 'buzz';
    } else if (valor % 3 == 0) {
        return 'fizz';
    }
}

var n1 = 3;
var n2 = 5;
var n3 = 15;
var n4 = 2;
var n5 = 30;

console.log(fizzbuzz(n1));
console.log(fizzbuzz(n2));
console.log(fizzbuzz(n3));
console.log(fizzbuzz(n4));
console.log(fizzbuzz(n5));

