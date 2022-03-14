let myLibrary = [
    {
        title: "A Game of Thrones",
        author: "George R.R. Martin",
        pages: 694,
        read: true 
    },
    {
        title: "Frankenstein",
        author: "Mary Shelley",
        pages: 280,
        read: false
    }
]

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
    myLibrary.push(new Book(bookTitle,bookAuthor,bookPages,bookRead));
    console.log(myLibrary);
    createTable(myLibrary);
    return myLibrary
}
function createTable(lib){
    var html = '<table class="table table-striped table-bordered"';

    html += `
    <thead class="thead-dark">
        <tr>
            <th scope="col">Book</th>
            <th scope="col">Author</th>
            <th scope="col">Pages</th>
            <th scope="col">Finished Reading?</th>
        </tr>
    </thead>
    `;
    
  
    for (var i = 0; i < lib.length; i++) {
        html+="<tr>";
        html+="<td>"+lib[i].title+"</td>";
        html+="<td>"+lib[i].author+"</td>";
        html+="<td>"+lib[i].pages+"</td>";
        html+="<td>"+lib[i].read+"</td>";

        html+="</tr>";

    }
    html+="</table>";
    document.getElementById("container").innerHTML = html;
}
createTable(myLibrary);