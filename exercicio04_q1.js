/* Imprima o nome e a quantidade de features de todos os deuses usando
uma única linha de código. */

for (var i = 0; i < gods.length; i++) {
    var nome = gods[i].name;
    var quantidadeFeatures = gods[i].features.length;
    console.log(nome + ' ' + quantidadeFeatures);
}
