/* Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
- receitas: [ ]
- despesas: [ ]
Agora, crie uma função que irá calcular o total de receitas e despesas e
irá mostrar uma mensagem se a família está com
saldo positivo ou negativo, seguido do valor do saldo. */

function calcularReceitaTotal(Saldo) {
    var receitaTotal = 0;
    for (var i = 0; i < Saldo.receitas.length; i++) {
        receitaTotal += Saldo.receitas[i];
    }
    return receitaTotal;
}

function calcularDespesaTotal(Saldo) {
    var despesaTotal = 0;
    for (var j = 0; j < Saldo.despesas.length; j++) {
        despesaTotal += Saldo.despesas[j];
    }
    return despesaTotal;
}

function statusSaldo(receitaTotal, despesaTotal) {
    if (receitaTotal - despesaTotal < 0) {
        return 'negativo';
    }
    return 'positivo';
}

var Saldo = {
    receitas: [1000, 200, 50, 700, 2000],
    despesas: [2000, 800, 300]
};

var receitaTotal = calcularReceitaTotal(Saldo);
var despesaTotal = calcularDespesaTotal(Saldo);
var statusSaldo = statusSaldo(receitaTotal, despesaTotal);

console.log('Receita total: ' + receitaTotal);
console.log('Despesa total: ' + despesaTotal); 
console.log('O saldo da família está ' + statusSaldo + '.');