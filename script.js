let myLibrary = [];

function Book(title, author, pages, read, data) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.data = data;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  createBook(book);
}

function createBook(book) {
  let content = document.querySelector(".content");

  let bookDiv = document.createElement("div");
  bookDiv.className = "book";

  let closeButton = document.createElement("button");
  let buttonSpan = document.createElement("span");
  closeButton.className = "close-button";
  buttonSpan.className = "material-symbols-outlined";
  buttonSpan.innerHTML = "close";
  closeButton.appendChild(buttonSpan);
  bookDiv.appendChild(closeButton);

  closeButton.addEventListener("click", () => {
    myLibrary[book.data] = "";
    showLibrary();
  });

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

  let read = document.createElement("button");
  read.className = "book-read";
  read.textContent = book.read ? "already read" : "not yet read";
  bookDiv.appendChild(read);

  read.addEventListener("click", () => {
    book.read = !book.read;
    showLibrary();
  });

  content.appendChild(bookDiv);
}

function addBook(event) {
  event.preventDefault();

  let title = document.getElementById("title");
  let author = document.getElementById("author");
  let pages = document.getElementById("pages");
  let read = document.getElementById("read");
  let data = myLibrary.length;

  let newBook = new Book(
    title.value,
    author.value,
    pages.value,
    read.checked,
    data
  );
  addBookToLibrary(newBook);

  title.value = "";
  author.value = "";
  pages.value = "";
  read.checked = false;
}

function showLibrary() {
  document.querySelector(".content").innerHTML = "";
  myLibrary
    .filter((element) => element != "")
    .forEach((element) => {
      createBook(element);
    });
}
