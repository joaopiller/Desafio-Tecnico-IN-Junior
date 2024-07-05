/* Escreva um algoritmo para ler uma temperatura em graus Fahrenheit,
calcular e escrever o valor correspondente em graus Celsius (baseado na
fórmula abaixo):
C/5 = (F − 32)/9  */

function celsius(fahrenheit) {
    return (((fahrenheit - 32) * 5) / 9).toFixed(1);
}

var fahrenheit = Number(prompt('Insira o valor em Fahrenheit que deseja converter para Celsius: '));
console.log(fahrenheit + '°F = ' + celsius(fahrenheit) + '°C.');