function fibonacci(n) {
  if (n === 0) return 0; // [cite: 49]
  if (n === 1) return 1; // [cite: 50]
  return fibonacci(n - 1) + fibonacci(n - 2); // [cite: 52]
}

const readline = require('readline-sync');
const nTermos = parseInt(readline.question('Quantos termos da sequencia de Fibonacci deseja ver? ')); // [cite: 47]

const sequencia = [];
for (let i = 0; i < nTermos; i++) {
  sequencia.push(fibonacci(i));
}

console.log(`Sequência: ${sequencia.join(', ')}`); // [cite: 53]