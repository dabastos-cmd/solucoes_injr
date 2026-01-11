// Exercício 9 [cite: 139]
function authors() {
  const listaAutores = [];
  booksByCategory.forEach(cat => {
    cat.books.forEach(book => {
      if (!listaAutores.includes(book.author)) {
        listaAutores.push(book.author);
      }
    });
  });
  return listaAutores;
}

console.log("Lista de Autores Únicos:", authors());