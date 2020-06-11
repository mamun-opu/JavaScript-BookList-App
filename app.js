//Book Class: Represents a Book
class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//UI Class: Handle UI Tasks
class UI{
    static displayBooks(){
        const StoredBooks = [
            {
                title: 'Book One',
                author: 'John Doe',
                isbn: '23124'
            },
            {
                title: 'Book Two',
                author: 'John Doe',
                isbn: '12341'
            }
        ];
        const books = StoredBooks;
        
        books.forEach((book) => UI.AddToBookList(book));
    }
    static AddToBookList(book){
        if(book.title === '' || book.author === ''|| book.isbn === ''){
            alert('please fill up all the fields');
        }else{
            const list = document.querySelector('#book-list');
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href = "#" class = "btn btn-danger btn-sm delete">X</a></td>;
            `;
            list.appendChild(row);
        }
        
    }
    static clearField(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
    static deleteElement(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }
}


//Store Class: Handles Storage

//Event: Display Books
document.addEventListener('DomContentLoaded',UI.displayBooks());

//Event: Add a Book
document.getElementById('book-form').addEventListener('submit',(e)=>{
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    const book = new Book(title, author, isbn);
    console.log(book);
    UI.AddToBookList(book);
    //clear field
    UI.clearField();
});



//Event: Remove a Book
document.getElementById('book-list').addEventListener('click',(e)=>{
    UI.deleteElement(e.target);
});


