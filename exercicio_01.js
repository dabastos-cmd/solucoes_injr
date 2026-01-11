const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Insira o valor de a: ', a => {
  readline.question('Insira o valor de b: ', b => {
    readline.question('Insira o valor de c: ', c => {
      a = parseFloat(a);
      b = parseFloat(b);
      c = parseFloat(c);

      const delta = Math.pow(b, 2) - 4 * a * c; // [cite: 7]
      console.log(`Delta (Δ): ${delta}`);

      if (delta > 0) { // [cite: 10]
        const x1 = (-b + Math.sqrt(delta)) / (2 * a); // [cite: 17]
        const x2 = (-b - Math.sqrt(delta)) / (2 * a); // [cite: 17]
        console.log(`Existem duas raízes reais: x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`);
      } else if (delta === 0) { // [cite: 12]
        const x = -b / (2 * a);
        console.log(`Existe uma raiz real (dupla): x = ${x.toFixed(2)}`);
      } else { // [cite: 14]
        console.log("A equação não possui raízes reais.");
      }
      readline.close();
    });
  });
});