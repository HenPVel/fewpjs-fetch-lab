  function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  const books = fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => {
    console.log(json)
    renderBooks(json)
    fetch(characterFind(json).flat()[1032])
    .then(resp2 => resp2.json())
    .then(json2 => {
      console.log(json2.name)
    })
  });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
  const pH2 = document.createElement('p')
  pH2.innerHTML = findFifthBook(books)
  main.appendChild(pH2)
}

function findFifthBook(books) {
  return `The fifth book is ${books[4].name}.`
}

function characterFind(books) {
  const fullCharacterArray =books.map( (book) => {
    return book.characters
  } )
  return fullCharacterArray
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
