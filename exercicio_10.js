const readline = require('readline-sync');
let fila = [];

while (true) {
  console.log("\n--- FILA DE ESPERA ---");
  if (fila.length === 0) console.log("Fila vazia.");
  fila.forEach((nome, i) => console.log(`${i + 1}º ${nome}`)); // [cite: 142]

  console.log("\n1 - Novo Cliente\n2 - Atender Cliente\n3 - Sair"); // [cite: 143]
  let opcao = readline.question('Escolha uma opcao: ');

  if (opcao === '1') {
    let nome = readline.question('Nome do cliente: ');
    fila.push(nome); // [cite: 144]
  } else if (opcao === '2') {
    if (fila.length > 0) {
      let atendido = fila.shift(); // [cite: 145]
      console.log(`Atendendo: ${atendido}`);
    } else {
      console.log("Ninguém para atender.");
    }
  } else if (opcao === '3') {
    break; // [cite: 146]
  }
}