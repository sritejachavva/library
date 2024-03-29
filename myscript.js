/*
Create a card on button click, with class_id as "book#"

*/


let add_book_button = document.body.querySelector("button.add_book");
let bookname = document.body.querySelector("#bookname");
let pages = document.body.querySelector("#pages");
let readit = document.body.querySelector("#readit");
let book_card = document.createElement("div");
book_card.setAttribute('class', 'book_card');
let book_title = document.createElement("h1");
let book_greed = document.querySelector(".book-grid")
book_title.setAttribute('class', 'read_block');
let book_pages = document.createElement("p");
book_pages.setAttribute('class', 'book_pages');
var read_block = document.createElement('div');
read_block.setAttribute('class', 'read_block');
read_block.innerHTML = `
        <input type="checkbox" class = "read_checkbox">
        <p>Read</p>`;

let book_read_it = document.createElement("div");



let list_of_books = [];


function Book(title, pages, read_it) {
  this.title = title;
  this.pages = pages;
  this.read_it = read_it;

    return this;
}



function addCardToGrid(bookname, pages, read){

    let book_card_clone = book_card.cloneNode(true);
    book_card_clone.setAttribute('id', `card_${bookname}`);

    let book_title_clone = book_title.cloneNode(true);
    book_title_clone.setAttribute('id', `title_${bookname}`);
    book_title_clone.innerHTML += (bookname);

    let book_pages_clone = book_pages.cloneNode(true);
    book_pages_clone.setAttribute('id', `pages_${bookname}`);
    book_pages_clone.innerHTML += (pages);

    let book_read_clone = read_block.cloneNode(true);
    book_read_clone.setAttribute('id', `read_${bookname}`);

    let book_read_checkbox_clone = book_read_clone.firstElementChild;
    book_read_checkbox_clone.setAttribute('id', `read_checkbox_${bookname}`);


    book_card_clone.appendChild(book_title_clone);
    book_card_clone.appendChild(book_pages_clone);
    book_card_clone.appendChild(book_read_clone);

    book_greed.appendChild(book_card_clone);


    let book_read_checkbox_clone_post = document.getElementById(`read_checkbox_${bookname}`);
    console.log(book_read_checkbox_clone_post);
    book_read_checkbox_clone_post.addEventListener('click', read_check);


}


function addBookToLibrary() {    
    list_of_books.push(new Book(bookname.value, pages.value, readit.checked));
    addCardToGrid(bookname.value, pages.value, readit.checked)
    return false;
}


function read_check( book_card_clone){

    if (this.checked == true){
        console.log("checked");
        this.parentNode.parentNode.classList.add("read")
    }
    else {
        console.log("unchecked");
        this.parentNode.parentNode.classList.remove("read")
    }


}

//add_book_button.addEventListener('click', addBookToLibrary);