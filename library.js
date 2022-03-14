let myLibrary = []

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}
Book.prototype.info = function(){
    return (title + " by " + author + ", " + pages + " pages, " + read);
} 

function addBookToLibrary(){
    event.preventDefault()
    var bookTitle = document.forms['myform'].elements['title'].value;
    var bookAuthor = document.forms['myform'].elements['author'].value;
    var bookPages = document.forms['myform'].elements['pages'].value;
    var bookRead = document.forms['myform'].elements['read'].checked;
    console.log("This is the book title" + bookTitle);
    console.log("This is the book author" + bookAuthor);
    console.log("This is the book pages" + bookPages);
    console.log("This is the book read status" + bookRead);
    console.log("This is a test");
    return console.log("Hello World")
}
