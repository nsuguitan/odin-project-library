function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        infoStr = title + " by " + author + ", " + pages + " pages, " + read;
        return infoStr;
    }
}

const theHobbit = new Book(
    "The Hobbit",
    "J.R.R. Tolkien",
    295,
    "not read yet");
console.log("The Odin Project - Book Constructor")
console.log(theHobbit.info())