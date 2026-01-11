const readline = require('readline-sync');
const frase = readline.question('Digite uma frase: '); // [cite: 58]

function verificarPalindromo(str) {
  // Remove espaços e converte para minúsculas [cite: 59]
  const formatada = str.toLowerCase().replace(/\s+/g, ''); 
  
  // Inverte a string usando split [cite: 61]
  const invertida = formatada.split('').reverse().join('');
  
  if (formatada === invertida) {
    console.log("A frase é um palíndromo.");
  } else {
    console.log("A frase não é um palíndromo.");
  }
}

verificarPalindromo(frase);