//*********Book Class: Represents a book
class Book {
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
//**********UI Class: handle UI tasks
class UI{
    static displayBooks(){ 
       
        const books = Store.getBooks();

        books.forEach((book) => UI.addbookToList(book));
    }
    static addbookToList(book){
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class= "delete">X</a></td>`;

        list.appendChild(row);
    }

    static deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();  // td -> tr(parent)
        }
    }

    static showAlert(message,className){
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div,form);          //insert before div and after container

        setTimeout(() => document.querySelector('.alert').remove(),3000);
    }

    static clearFields(){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}
//*********Store Class: handles storage
class Store{
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
    static addbook(book){
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books',JSON.stringify(books));
    }
    static removebook(isbn){
        const books = Store.getBooks();
        books.forEach((book,index) => {
            if(book.isbn === isbn){
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books',JSON.stringify(books)
        );
    }
}

//********Event: displays books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//********Event: add a books
document.querySelector('#book-form').addEventListener('submit',(e) => {
    e.preventDefault();

    //get more values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    //Validation
    if(title === '' || author === '' || isbn ===''){
      UI.showAlert('Please fill in all fields','danger');
    } else {
         
    //instatiate book
    const book = new Book(title,author,isbn);
    
    //add book to UI
    UI.addbookToList(book);

    //add book to store
    Store.addbook(book);

    //show success message
    UI.showAlert('book added','success');

    UI.clearFields();
    }
});

//**********Event: remove a book
document.querySelector('#book-list').addEventListener('click',(e) => {   //we took booklist to delete entier row instead of X
    //remove book from UI
    UI.deleteBook(e.target);

    //remove book from store
    Store.removebook(e.target.parentElement.previousElementSibling.textContent);
    
    //show success message
    UI.showAlert('book removed','success');
});


