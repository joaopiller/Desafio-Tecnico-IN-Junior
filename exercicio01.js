/* Implemente um algoritmo que pegue duas matrizes (array de arrays) e
realize sua multiplicação. */

function multiplicarMatrizes(matrizA, matrizB) {
    if (matrizA[0].length != matrizB.length) {
        return "O número de colunas da primeira matriz deve ser igual ao número de linhas da segunda matriz!";
    }

    var produto = [];
    for (var i = 0; i < matrizA.length; i++) {
        produto[i] = [];
        for (var j = 0; j < matrizB[0].length; j++) {
            produto[i][j] = 0;
        }
    }

    for (var i = 0; i < matrizA.length; i++) {
        for (var j = 0; j < matrizB[0].length; j++) {
            for (var k = 0; k < matrizA[0].length; k++) {
                produto[i][j] += matrizA[i][k] * matrizB[k][j];
            }
        }
    }

    return produto;
}

var matrizTesteA = [[2,-1],[2,0]];
var matrizTesteB = [[2,3],[-2,1]];

var produto = multiplicarMatrizes(matrizTesteA, matrizTesteB);
console.log(produto);