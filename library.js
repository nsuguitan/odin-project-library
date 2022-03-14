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
    event.preventDefault();
    console.log("This is a test")
    return console.log("Hello World")
}
