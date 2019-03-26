class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book) {
        const bookList = document.getElementById('book-list');
        //create an element
        const tableList = document.createElement('tr');
    
        tableList.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a class='delete' href='#'>x</a></td>
        `
        bookList.appendChild(tableList);
    }

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';

    }

    removeBookFromList(x) {

    }

    showAlert(alert, className) {

    }
}