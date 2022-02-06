function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book)
  }
};

function unshelfBook(bookTitleString, shelfArray) {
  for (var i = 0; i < shelfArray.length; i++) {
    if (shelfArray[i].title === bookTitleString) {
      shelfArray.splice(i, 1);
    }
  }
}

// console.log(shelf[0].title);
// console.log(shelf[1].title);
// console.log(shelf[2].title);



//access title
//access all titles (for loop)
//compare each key title with bookTitle
//if (2 strings match){remove book object from shelf array}



function listTitles(shelfArray) {
  var titles = [];
  for (var i = 0; i < shelfArray.length; i++) {
     titles.push(shelfArray[i].title);
  }
  return titles.join(', ');
}






function searchShelf(shelfArray, titleString) {
for (var i = 0; i < shelfArray.length; i++) {
  if (shelfArray[i].title === titleString) {
      return true;
  }
  }
  return false
}
var shelfArray = [];

//not checking to see if title equals true but if title is title (hence true)


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};


//from shelf.js using module.exports,
//moves shelf.js to computer galaxy
//shelf-test imports from source shelf.js
