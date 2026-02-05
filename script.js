const libraryContainer = document.getElementById("library-container")

const state = {
    view: "library", // library || edit form
    library: [], // storage for book objects
}

function render() {
    if (state.view === "library") {
        renderBooks()
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
    libraryContainer.innerHTML = ""; // clears out the container

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

function renderCreateForm() {
    libraryContainer.innerHTML = "";
    let formElement = document.createElement("form");
    formElement.classList.add("create-form-element")

    let titleElement = getLabelWithInput("Title: ", "text", "title-input");
    let authorElement = getLabelWithInput("Author: ", "text", "author-input");
    let pageCountElement = getLabelWithInput("Page Count: ", "number", "number-input");

    let hasReadLabel = document.createElement("label");
    hasReadLabel.textContent = "Has read: "
    let hasReadSelect = document.createElement("select");
    hasReadSelect.classList.add("select-element");
    let yesOption = document.createElement("option");
    yesOption.setAttribute("value", "yes");
    yesOption.textContent = "Yes";
    let noOption = document.createElement("option");
    noOption.setAttribute("value", "no");
    noOption.textContent = "No";
    hasReadLabel.appendChild(hasReadSelect);

    let addButton = document.createElement("button");
    addButton.textContent = "SAVE NOTE"
    addButton.setAttribute("type", "button");
    addButton.setAttribute("value", "save-btn");
    
    hasReadSelect.appendChild(yesOption);
    hasReadSelect.appendChild(noOption);

    formElement.appendChild(titleElement);
    formElement.appendChild(authorElement);
    formElement.appendChild(pageCountElement);
    formElement.appendChild(hasReadLabel);
    formElement.appendChild(addButton);

    libraryContainer.appendChild(formElement)
}

function getLabelWithInput(text, type = "text", classEl) {
    let label = document.createElement("label");
    let input = document.createElement("input");
    input.classList.add(classEl)
    label.textContent = text;
    input.type = type;
    input.setAttribute("min", 1);
    label.appendChild(input);
    return label;
}

document.addEventListener("click", (e) => {
    if (e.target.value === "save-btn") {
        let title = document.querySelector(".title-input").value;
        let author = document.querySelector(".author-input").value;
        let pages = document.querySelector(".number-input").value;
        let hasRead = document.querySelector(".select-element").value === "yes" ? true : false;
        addBookToLibrary(title, author, pages, hasRead);
        state.view = "library";
        render()
    }
})

addBookToLibrary("Title1", "Taylor", 200, false)
addBookToLibrary("Title2", "Taylor", 200, false)
addBookToLibrary("Title3", "Taylor", 200, false)
addBookToLibrary("Title4", "Taylor", 200, false)

renderCreateForm()