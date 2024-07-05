/* Crie um algoritmo que transforma as notas do sistema numérico para
sistema de notas em caracteres Tipo A, B e C
- 90 para cima: A
- entre 80 e 90: B
- entre 70 e 79: C
- entre 60 e 69: D
- menor que 60: F */

function converterNota(nota) {
    if (nota >= 90) {
        return 'A';
    } else if (nota >= 80) {
        return 'B';
    } else if (nota >=70) {
        return 'C';
    } else if (nota >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

var nota = Number(prompt('Insira a nota do aluno no sistema numérico: '));
var notaEmCaractere = converterNota(nota);
console.log('A nota do aluno corresponte a ' + notaEmCaractere + ' no sistema de caracteres.');