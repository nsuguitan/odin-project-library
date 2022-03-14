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
function deleteBookFromLibrary(buttonId){
    myIndex = parseInt(buttonId.substring(7));
    console.log("Index:",myIndex)
    myLibrary.splice(myIndex,1);
    createTable(myLibrary);
}
function updateReadStatus(buttonId){
    myIndex = parseInt(buttonId.substring(7));
    console.log("Index:",myIndex)
    console.log(myLibrary)
    console.log("What I want to change",myLibrary[myIndex]["read"]);
    myLibrary[myIndex]["read"] = !myLibrary[myIndex]["read"]
    createTable(myLibrary);
}
function createTable(lib){
    console.log("Creating Table")
    console.log(myLibrary)
    console.log("---------------")
    var html = '<table class="table table-striped table-bordered"';

    html += `
    <thead class="thead-dark">
        <tr>
            <th scope="col">Book</th>
            <th scope="col">Author</th>
            <th scope="col">Pages</th>
            <th scope="col">Finished Reading?</th>
            <th scope="col">Actions</th>
        </tr>
    </thead>
    `;
    
  
    for (var i = 0; i < lib.length; i++) {
        html+="<tr>";
        html+="<td>"+lib[i].title+"</td>";
        html+="<td>"+lib[i].author+"</td>";
        html+="<td>"+lib[i].pages+"</td>";
        html+="<td>"+lib[i].read+"</td>";
        html+=`<td>
        <button type="button" class="btn btn-danger" id="delete_`+i+`"onclick="return deleteBookFromLibrary(id);">DELETE</button>
        <button type="button" class="btn btn-danger" id="update_`+i+`"onclick="return updateReadStatus(id);">UPDATE</button>
        </td>`;
        
        html+="</tr>";

    }
    html+="</table>";
    document.getElementById("container").innerHTML = html;
}
createTable(myLibrary);