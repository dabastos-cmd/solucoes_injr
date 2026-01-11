const readline = require('readline-sync');
const num = parseInt(readline.question('Digite um numero inteiro: '));

if (num % 3 === 0 && num % 5 === 0) { // [cite: 43]
  console.log("fizzbuzz");
} else if (num % 3 === 0) { // [cite: 41]
  console.log("fizz");
} else if (num % 5 === 0) { // [cite: 42]
  console.log("buzz");
} // [cite: 44] - Caso contrário, nada é impresso.