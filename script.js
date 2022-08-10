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

  let title = document.createElement("span");
  title.className = "book-title";
  title.textContent = book.title;
  bookDiv.appendChild(title);

  let author = document.createElement("span");
  author.className = "book-author";
  author.textContent = `by ${book.author}`;
  bookDiv.appendChild(author);

  let pages = document.createElement("span");
  pages.className = "book-pages";
  pages.textContent = `${book.pages} pages`;
  bookDiv.appendChild(pages);

  let read = document.createElement("span");
  read.className = "book-read";
  read.textContent = book.read ? "already read" : "not yet read";
  bookDiv.appendChild(read);

  content.appendChild(bookDiv);
}
