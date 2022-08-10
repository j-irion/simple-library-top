let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  let result = `${this.title} by ${this.author}, ${this.pages} pages, `;
  if (this.read === false) return result + "not read yet";
  return result + "already read";
};

function addBookToLibrary(book) {
  myLibrary.push(book);
  createBook(book);
}

const book1 = new Book("Lord of The Rings", "J.R.R Tolkien", 295, false);

addBookToLibrary(book1);

function createBook(book) {
  let content = document.querySelector(".content");
  let bookDiv = document.createElement("div");
  bookDiv.className = "book";
  content.appendChild(bookDiv);
}
