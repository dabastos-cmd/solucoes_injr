const readline = require('readline-sync');
let time = []; // [cite: 168]

function adicionarJogador() {
  let nome = readline.question('Nome: ');
  let idade = parseInt(readline.question('Idade: '));
  let posicao = readline.question('Posicao: ');
  let pontuacao = parseFloat(readline.question('Pontuacao: '));
  
  time.push({ nome, idade, posicao, pontuacao }); // [cite: 172]
}

function buscarPorPosicao() {
  let pos = readline.question('Qual posicao buscar? ');
  let filtrados = time.filter(p => p.posicao.toLowerCase() === pos.toLowerCase());
  
  if (filtrados.length > 0) {
    console.table(filtrados); // [cite: 175]
  } else {
    console.log("Nenhum jogador encontrado nessa posição.");
  }
}

function listarTime() {
  time.forEach(p => console.log(`${p.nome} - ${p.posicao} - Pontos: ${p.pontuacao}`)); // [cite: 177]
}

function calcularPontuacaoMedia() {
  if (time.length === 0) return 0;
  let soma = time.reduce((acc, p) => acc + p.pontuacao, 0);
  return (soma / time.length).toFixed(2); // [cite: 179]
}

// Menu Interativo [cite: 180]
while (true) {
  console.log("\n1-Adicionar 2-Buscar 3-Listar 4-Média 5-Sair");
  let op = readline.question('Opcao: ');
  if (op === '1') adicionarJogador();
  else if (op === '2') buscarPorPosicao();
  else if (op === '3') listarTime();
  else if (op === '4') console.log("Média:", calcularPontuacaoMedia());
  else if (op === '5') break; // [cite: 185]
}