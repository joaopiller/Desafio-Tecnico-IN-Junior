/* Faça um programa que leia 6 valores. Estes valores são somente
negativos ou positivos (desconsidere os valores nulos). A seguir, mostre a
quantidade de valores positivos digitados. */

var listaNumeros = [];
var contador = 0;

function criarListaNumeros(listaNumeros) {
    for (var i = 0; i < 6; i++) {
        var valor = Number(prompt('Insira um valor positivo ou negativo: '));
        if (valor != 0) {
            listaNumeros.push(valor);
        } else {
            i--;
        }
    }
    return listaNumeros;
}

function contarValoresPositivos(listaNumeros) {
    var contador = 0;
    for (var numero of listaNumeros) {
        if (numero > 0) {
            contador++;
        }
    }
    return contador;
}

listaNumeros = criarListaNumeros(listaNumeros);
contador = contarValoresPositivos(listaNumeros);
console.log('Total de valores positivos inseridos: ' + contador);
