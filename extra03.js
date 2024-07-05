/* Escolha 5 valores inteiros e ordene-os em ordem crescente. No final,
mostre os valores em ordem crescente, uma linha em branco e em
seguida, os valores na sequência original. */

function criarListaDesordenada() {
    let listaDesordenada = [];
    for (let i = 0; i < 5; i++) {
        let valor = Number(prompt('Insira um valor: '));
        listaDesordenada.push(valor);
    }
    return listaDesordenada;
}

let listaDesordenada = criarListaDesordenada();
let listaOrdenada = listaDesordenada.slice().sort();

console.log('Sequência ordenada: ' + listaOrdenada + '\n\nSequência original: ' + listaDesordenada);