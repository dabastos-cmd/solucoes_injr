function verificarIdades(anosNascimento, anoAtual) {
  const resultados = anosNascimento.map(ano => {
    const idade = anoAtual - ano; // [cite: 28]
    return idade >= 18 ? "maior" : "menor"; // [cite: 29, 30]
  });

  resultados.forEach((status, index) => {
    console.log(`Pessoa ${index + 1}: ${status === 'maior' ? 'Maior de idade' : 'Menor de idade'}`); // [cite: 31, 32]
  });

  return resultados;
}

// Exemplo de uso:
const anos = [2000, 2010, 1995, 2015];
const anoAtual = 2026;
verificarIdades(anos, anoAtual);