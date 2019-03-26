class Book {
    constructor(title, author, isbn, bookImg) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.bookImg = bookImg;
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
            <td><img class='bookSize' src="${book.bookImg}"></td>
            <td><a class='delete' href='#'>x</a></td>
        `
        bookList.appendChild(tableList);
    }

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
        document.getElementById('bookImg').value = '';
    }

    removeBookFromList(x) {
        if(x.className === 'delete') {
            //access 2 levels above
            x.parentElement.parentElement.remove();
        }
    }

    // //Local Storage Class
    // class Store {
    //     static displayBooks() {

    //     }

    //     static getBooks() {

    //     }

    //     static addBooks() {

    //     }

    //     static removeBook() {

    //     }
    // }

    showAlert(alert, className) {
    //create div
    const div = document.createElement('div');
    //add class to element
    div.className = `alert ${className}`;
    //add text to element
    div.append(document.createTextNode(alert));
    //get parent
    const container = document.querySelector('.container');
    //get form
    const form = document.getElementById('book-form'); 
    //insert the alert
    container.insertBefore(div, form);

    //timeout
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 2000);

    }
}


//Event Listeners

//Grab Form - Submit
let bookForm = document.getElementById('book-form').addEventListener('submit', 
function(e){

    //grab form values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    const bookImg = document.getElementById('bookImg').value;

    //Instantiate - represent a book
    const book = new Book(title, author, isbn, bookImg);

    //Instantiate = represent the UI
    const ui = new UI();

    //Validate
    if(title === '' || author === '' || isbn === '') {
        //Error Alert
        ui.showAlert('Error, cannot be left blank please fill out fields', 'error');
    } else {
        //Success Alert
        ui.showAlert('Successfully added book to table!!', 'success');
        //refers to the prototype
        ui.addBookToList(book);
        //clear
        ui.clearFields();
    }

    e.preventDefault();
});

//Event listener for deleting the book - even delegation in use
document.getElementById('book-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.removeBookFromList(e.target);
    ui.showAlert('Book has been deleted', 'success');

    e.preventDefault();
});