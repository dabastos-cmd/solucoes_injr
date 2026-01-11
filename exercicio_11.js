const readline = require('readline-sync');
const qtd = parseInt(readline.question('Quantos numeros deseja inserir? ')); // [cite: 152]
let vetor = [];

for (let i = 0; i < qtd; i++) {
  vetor.push(parseInt(readline.question(`Numero ${i + 1}: `)));
}

let contadorCrescente = 0;
for (let i = 1; i < vetor.length; i++) {
  if (vetor[i] > vetor[i - 1]) { // [cite: 153]
    contadorCrescente++;
  }
}

console.log(`Quantidade em ordem crescente: ${contadorCrescente}`); // [cite: 154]