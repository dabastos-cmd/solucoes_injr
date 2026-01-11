// Exercício 8 [cite: 137]
function countBooksInCategory() {
  const contagem = {};
  booksByCategory.forEach(cat => {
    contagem[cat.category] = cat.books.length;
  });
  return contagem;
}

console.log("Contagem por Categoria:", countBooksInCategory());