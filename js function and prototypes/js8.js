// Create a library constructor that initialize a books array . implement
// 1. addbook(book) adds a book to the array
// 2.findbook (title) searches for a book by title returns `book found` or `book not found` 

function Library () {
    this.book = [] ;
} ;

Library.prototype.addbook = function (book) {
    this.book.push(book) ;
} ;

Library.prototype.findbook = function (title) {
    if(this.book.includes(title)) {
        return `Book found` ;
    } else {
        return `Book not found` ;
    }
} ;

