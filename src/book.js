function createTitle(title) {
  return 'The '+ title;
}

function buildMainCharacter(nam, ag, pro) {
  return {
    name: nam,
    age: ag,
    pronouns: pro,
  }
};

function saveReview(actualReview, reviews) {
// if the array reviews doesn't have the actualReview string in it
// it results to false (meaning it's unique)
  if (reviews.includes(actualReview) === false) {
//then add the unique review to the array
  return reviews.push(actualReview)
  }
};


/*
add reviews
check if review is repeated (is already there)
check if review is unique

if review is unique --> add to array
if review is NOT unique --> don't add to array
*/

function calculatePageCount(bookTitle) {
  var bookPageCount = bookTitle.length * 20;
  return bookPageCount;
}

//there's a function calculatePageCount
//it takes in bookTitle

//if there is a letter, add 20 pages


function writeBook(bookTitle, bookCharacter, bookGenre) {
  var book = {
  title: bookTitle,
  mainCharacter: bookCharacter,
  pageCount: calculatePageCount(bookTitle),
  genre: bookGenre,
}
  return book;
};

function editBook(book) {
  book.pageCount = book.pageCount * 0.75;
};

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
