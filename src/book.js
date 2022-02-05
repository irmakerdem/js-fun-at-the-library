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

//THIS ALSO WORKS:
// function saveReview(actualReview, reviews) {
//   for (var i = 0; i < reviews.length; i++) {
//     if (actualReview === reviews[i]) {
//       return
//     }
//   }
//     reviews.push(actualReview);
// }

//THIS ALSO WORKS:
// function saveReview(actualReview, reviews) {
//   for (var i = 0; i <= reviews.length; i++) {
//     if (actualReview !== reviews[i]) {
//       return reviews.push(actualReview);
// }   else {
//     return reviews;
//   }
//   }
// }

function saveReview(actualReview, reviews) {
// if the array reviews doesn't have the actualReview string in it
// it results to false (meaning it's unique)
  if (reviews.includes(actualReview) === false) {
    //false === false
//then add the unique review to the array
  reviews.push(actualReview)
  }
};



/*
add reviews
check if review is repeated (is already there)
check if review is unique

if review is unique --> add to array
if review is NOT unique --> don't add to array
*/

//THIS ALSO WORKS:
// function calculatePageCount(bookTitle) {
//   var bookPageCount = bookTitle.length * 20;
//   return bookPageCount;
// }


function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;
}


//THIS ALSO WORKS:
// function writeBook(bookTitle, bookCharacter, bookGenre) {
//   var book = {
//   title: bookTitle,
//   mainCharacter: bookCharacter,
//   pageCount: calculatePageCount(bookTitle),
//   genre: bookGenre,
// }
//   return book;
// };

//THIS ALSO WORKS:
// function writeBook(bookTitle, bookCharacter, bookGenre) {
//   return book = {
//   title: bookTitle,
//   mainCharacter: bookCharacter,
//   pageCount: calculatePageCount(bookTitle),
//   genre: bookGenre
// };
// };


function writeBook(bookTitle, bookCharacter, bookGenre) {
  return {
  title: bookTitle,
  mainCharacter: bookCharacter,
  pageCount: calculatePageCount(bookTitle),
  genre: bookGenre
};
};

function editBook(book) {
  book.pageCount = book.pageCount * 0.75;
};

//THIS ALSO WORKS:
// function editBook(book) {
//   return book.pageCount = book.pageCount * 0.75;
// };

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
