// Imprima todos os deuses que possuem o papel de "Mid"

var deusesMid = [];
for (var i = 0; i < gods.length; i++) {
    if (gods[i].roles.includes("Mid")) {
        deusesMid.push(gods[i]);
    }
}

console.log(deusesMid); 