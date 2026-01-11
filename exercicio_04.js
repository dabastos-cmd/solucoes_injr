const readline = require('readline-sync');

const valorReais = parseFloat(readline.question('Digite o valor em R$: '));

const taxaEuro = 6.10; // [cite: 36]
const taxaDolar = 5.70; // [cite: 37]

const valorEuro = valorReais / taxaEuro;
const valorDolar = valorReais / taxaDolar;

console.log(`Valor original: R$ ${valorReais.toFixed(2)}`); // [cite: 38]
console.log(`Conversão para Euro (€): ${valorEuro.toFixed(2)}`);
console.log(`Conversão para Dólar (US$): ${valorDolar.toFixed(2)}`);