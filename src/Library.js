// function createLibrary(name) {
//   var library = {
//     name: name,
//     shelves: { [genre]
//   }
//   };
//   return library
// }



// function createLibrary(name) {
//   var library = {
//     name: name,
//     shelves: { genre: {}
//   }
//   };
//   return library
// }

// library.shelves.genre = [];
// var genreArray = library.shelves.genre;
// var genreArray = [library.shelves.genre];



// function createLibrary(name) {
//   var library = {
//     name: name,
//     shelves: { genre: {[]}
//   }
//   };
//   return library
// }



// function createLibrary(name) {
//   var library = {
//     name: name,
//     shelves: {
//       fantasy: [],
//       fiction: [],
//       nonFiction: [],
//   }
//   };
//   return library
// }


function createLibrary(name) {
    return {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
  }
  };
}

//THIS ALSO WORKS:
// function createLibrary(name) {
//   var library = {};
// library.name = name
// console.log(library);
// library.shelves = {};
// console.log(library);
// library.shelves.fantasy = [];
// console.log(library);
// library.shelves.fiction = [];
// console.log(library);
// library.shelves.nonFiction = [];
// console.log(library);
// return library;





// function addBook(library, book) {
//   library.shelves.fantasy.push(book)
// }

function addBook(library, book) {
  if (book.genre === "fantasy") {
    library.shelves.fantasy.unshift(book)
  } else if (book.genre === "nonFiction") {
    library.shelves.nonFiction.unshift(book)
  } else {
    library.shelves.fiction.unshift(book)
  }
};


//THIS ALSO WORKS:
// function addBook(library, book) {
//   library.shelves[book.genre].unshift(book)
// };




//functioncheckoutBook(object, string, string)
function checkoutBook(library, title, genre) {
  for (var i = 0; i < library.shelves[genre].length; i++) {
    if (title === library.shelves[genre][i].title) {
      library.shelves[genre].splice(i, 1);
        return `You have now checked out ${title} from the ${library.name}`
  };
  }
  return `Sorry, there are currently no copies of ${title} available at the ${library.name}`
}



  // console.log(library.shelves.genre)
  // //undefined
  //
  // console.log(genre);
  // //fiction
  //
  // console.log(library.shelves[genre]);
  // //prideAndPrejudice
  //
  // console.log(library.shelves.fiction);
  // //prideAndPrejudice
  //
  // console.log(library.shelves["fiction"]);
  // //prideAndPrejudice
  //
  // console.log(library.shelves["genre"]);
  // //undefined
  // //does "genre" instead of genre parameter


//goal:checkout a book
//access an array of book objects
//shelves is an object with 3 keys which are arrays of objects

// ['string'] = dot notation
//




// library.shelves.book.genre
// library.shelves[book.genre]
// library.shelves[genre]
// library.shelves["fiction"]

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
};
