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
            UI.showAlert('danger','please fill up all of the text box!')
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
            UI.showAlert('success','secessfully added')
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
    static showAlert(clsName, message){
        const div = document.createElement('div');
        div.className = `alert alert-${clsName}`;
        div.appendChild(document.createTextNode(message));
        const form = document.getElementById('book-form');
        const container = document.querySelector('.container');
        container.insertBefore(div,form);
        setTimeout(()=>document.querySelector('.alert').remove(),3000);
    }
}


//Store Class: Handles Storage

//Event: Display Books
document.addEventListener('DomContentLoaded',UI.displayBooks());

//Event: Add a Book
document.getElementById('book-form').addEventListener('submit',(e)=>{
    e.preventDefault();
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
    UI.showAlert('danger','successfully removed');
});


