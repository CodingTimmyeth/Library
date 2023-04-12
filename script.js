const btn = document.querySelector('button')
const gridLayout = document.querySelector('.grid')
const bookTitle = document.getElementById('title')
const bookAuthor = document.getElementById('author')
const bookPages = document.getElementById('pages')


class Book {
    constructor (title, author, pages) {
        this.title = title;
        this.author = author
        this.pages = pages
    }

    showBook() {
        const titleElm =  document.createElement('h1')
        const authorElm =  document.createElement('h2')
        const pagesElm =  document.createElement('h3')

        titleElm.textContent = `Title: ${this.title}`
        authorElm.textContent = `Author: ${this.author}`
        pagesElm.textContent = `Pages: ${this.pages}`

        const container = document.createElement('div')
        container.appendChild(titleElm)
        container.appendChild(authorElm)
        container.appendChild(pagesElm)

        return container

    }
}

btn.addEventListener('click', () => {

    if(bookTitle.value === '' || bookAuthor.value === '' || bookPages.value === ''){
        alert("Can't be empty!")
    } else {
        const newBook = new Book (bookTitle.value, bookAuthor.value, bookPages.value)

        const div = newBook.showBook()
        gridLayout.append(div)
    }
})
