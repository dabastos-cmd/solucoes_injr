function encontrarElementoUnico(arr) {
  let unico = 0;
  // Usando XOR (OU Exclusivo): a ^ a = 0; 0 ^ b = b. 
  // Pares se anulam, sobra o único.
  for (let num of arr) {
    unico ^= num;
  }
  return unico;
}

const numeros = [1, 2, 3, 2, 1]; // Exemplo
console.log(`O elemento único é: ${encontrarElementoUnico(numeros)}`); // [cite: 158]