/* Faça um código que retorne um novo array com o nome de cada deus e
entre parênteses, a sua classe. */

for (var i = 0; i < gods.length; i++) {
    var nome = gods[i].name;
    var classe = gods[i].class;
    console.log(nome + ' (' + classe + ')');
}

