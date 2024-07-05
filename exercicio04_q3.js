//Organize a lista pelo panteão do deus.

var panteaoOrdenado = gods.sort((a, b) => a.pantheon.localeCompare(b.pantheon));
console.log(panteaoOrdenado);