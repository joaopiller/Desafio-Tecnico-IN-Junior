/* Faça um algoritmo em que você recebe 3 notas de um aluno e caso a
média aritmética dessas notas for maior ou igual que 6 imprima
“Aprovado”, caso contrário “Reprovado”. */

function situacao(mediaAluno) {
    if (mediaAluno >= 6) {
        return 'Aprovado';
    }
    return "Reprovado";
}
var nota1 = Number(prompt('Insira a primeira nota: '));
var nota2 = Number(prompt('Insira a segunda nota: '));
var nota3 = Number(prompt('Insira a terceira nota: '));

var media = (nota1 + nota2 + nota3) / 3;

console.log(situacao(media));
