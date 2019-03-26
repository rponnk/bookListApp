//Book Contructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI Contructor - prototype methods, add to list
function UI() {};

//Create Prototype
UI.prototype.addBookToList = function(book) {
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
};

UI.prototype.clearFields = function() {
    //grab fields and set them to empty strings
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
    

}

UI.prototype.showAlert = function(alert, className) {
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
UI.prototype.deleteBookFromList = function(x) {
    if(x.className === 'delete') {
        //access 2 levels above
        x.parentElement.parentElement.remove();
    }
};


//Event Listeners

//Grab Form - Submit
let bookForm = document.getElementById('book-form').addEventListener('submit', 
function(e){

    //grab form values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    //Instantiate - represent a book
    const book = new Book(title, author, isbn);

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
});

//Event listener for deleting the book - even delegation in use
document.getElementById('book-list').addEventListener('click', function(e){

    const ui = new UI();
    ui.deleteBookFromList(e.target);

    ui.showAlert('Book has been deleted', 'success');

});