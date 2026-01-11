const readline = require('readline-sync');

function calcularFatorial() {
  let continuar = true;

  while (continuar) {
    let input = readline.question('Digite um numero inteiro positivo: ');
    let n = parseInt(input);

    if (isNaN(n) || n < 0) { // [cite: 24, 25]
      console.log("Erro: Por favor, digite apenas números inteiros positivos.");
      continue;
    }

    let fatorial = 1;
    for (let i = 1; i <= n; i++) {
      fatorial *= i;
    }
    console.log(`O fatorial de ${n} é: ${fatorial}`);

    let resposta = readline.question('Deseja calcular outro numero? (S/N): ').toLowerCase(); // [cite: 21]
    if (resposta !== 's') { // [cite: 22, 23]
      continuar = false;
      console.log("Programa encerrado.");
    }
  }
}

calcularFatorial();