const myLibrary = [];


let add_book_button = document.body.querySelector("button.add_book");
let bookname = document.body.querySelector("#bookname");
let pages = document.body.querySelector("#pages");
let readit = document.body.querySelector("#readit");


let list_of_books = [];


function Book(title, pages, read_it) {
  this.title = title;
  this.pages = pages;
  this.read_it = read_it;

}

function readInputValues(){



}

function addBookToLibrary() {
    
    console.log(bookname.value);
    return false;
}



//add_book_button.addEventListener('click', addBookToLibrary);
