let books=[];
function addBook(){
    const name =document.getElementById("bookName").value;
    const author=document.getElementById("authorName").value;
    const description=document.getElementById("bookDescription").value;
    const nbOfPages=parseInt(document.getElementById("pagesNumber").value);

    if(name && author && description && !isNaN (nbOfPages)){
        const book={
            bookName : name,
            bookAuthor : author,
            bookDescription : description,
            nbrOfPages : nbOfPages,
        }
        books.push(book);
        showBooks();
        clearInput();
    }
    else{
        alert('Please enter a correct input');
    }
}


function showBooks(){
   const listOfBooks=books.map((book, index)=>`<h1>Book Number : ${index+1}</h1>
   <p><strong>Book Name:</strong>${book.bookName}</p>
   <p><strong> Author Name:</strong>${book.bookAuthor}</p>
   <p><strong> Book Description:</strong>${book.bookDescription}</p>
   <p><strong> No .of Pages:</strong>${book.nbrOfPages}</p>
   <button onclick="deleteBook(${index})">Delete</button>`
   ).join('');
   document.getElementById('books').innerHTML = listOfBooks;



}

function deleteBook(index){
    books.splice(index ,1 );
    showBooks();
}

function clearInput(){
    document.getElementById('bookName').value='';
    document.getElementById('authorName').value='';
    document.getElementById('bookDescription').value='';
    document.getElementById('pagesNumber').value='';

}

