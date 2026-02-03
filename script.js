const libraryContainer = document.getElementById("library-container")

const state = {
    view: "library", // library || edit form
    library: [], // storage for book objects
}

function render(state) {
    if (state.view === "library") {
        // function renderLibrary()
    }
    if (state.view === "edit") {
        // function renderEditForm()
    }
    if (state.view === "create") {
        // function renderCreateForm()
    }
}

function Book(title, author, pages, hasRead, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    this.id = id;
}

function addBookToLibrary(title, author, pages, hasRead) {
    const uniqueId = crypto.randomUUID();
    const newBook = new Book(title, author, pages, hasRead, uniqueId);

    state.library.push(newBook)
}

function renderBooks() {
    let booksArr = state.library;

    for (let {title, author, pages, hasRead, id} of booksArr) {
        let bookContainerEl = document.createElement("div");
        let titleEl = document.createElement("h2");
        let authorEl = document.createElement("h3");
        let pageCountEl = document.createElement("div");
        let hasReadEl = document.createElement("div");
        let editBtn = document.createElement("button");
        let deleteBtn = document.createElement("button");

        titleEl.textContent = title;
        authorEl.textContent = author;
        pageCountEl.textContent = pages;
        hasReadEl.textContent = hasRead ? "Have read" : "Not Read";
        editBtn.textContent = "EDIT";
        deleteBtn.textContent = "DELETE";

        bookContainerEl.appendChild(titleEl);
        bookContainerEl.appendChild(authorEl);
        bookContainerEl.appendChild(pageCountEl);
        bookContainerEl.appendChild(hasReadEl);
        bookContainerEl.appendChild(editBtn);
        bookContainerEl.appendChild(deleteBtn);

        libraryContainer.appendChild(bookContainerEl)
    }
}

addBookToLibrary("Title1", "Taylor", 200, false)
addBookToLibrary("Title2", "Taylor", 200, false)
addBookToLibrary("Title3", "Taylor", 200, false)
addBookToLibrary("Title4", "Taylor", 200, false)

renderBooks()