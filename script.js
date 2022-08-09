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
}
