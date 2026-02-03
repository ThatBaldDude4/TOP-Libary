const libraryContainer = document.getElementById("library-container")

const myLibrary = [];

function Book(title, author, pages, hasRead, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    this.id = id;
}

function addBookToLibrary(title, author, pages) {
    const uniqueId = crypto.randomUUID();
    const newBook = new Book(title, author, pages, hasRead, uniqueId);

    myLibrary.push(newBook)
}

function displayBooks() {
    const bookContainerEl = document.createElement("div");
    const titleEl = document.createElement("h2");
    const authorEl = document.createElement("h3");
    const pageCountEl = document.createElement("div");
    const hasReadEl = document.createElement("div");
    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");


    myLibrary.forEach(({title, author, pages, hasRead, id}) => {
        titleEl.textContent = title;
        authorEl.textContent = author;
        pageCountEl.textContent = pages;
        hasReadEl.textContent = hasRead ? "Have read" : "Not Read";
    })
}