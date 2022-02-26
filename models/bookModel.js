var bookData = [
  {
    "name":"Kujo",
    "author":"Stephen King",
    "Year": "1995"
  },
  {
    "name":"Of Time and the River",
    "author":"Thomas Wolfe",
    "Year": "1732"
  },
]

var getBook = function(req, callback){
  let found = false;
  console.log("Looking for book "+ req.query.bookName);
  for(i in bookData){
    console.log("Found "+ bookData[i].name+". Running match...")
    if (bookData[i].name.toLowerCase().includes(req.query.bookName.toLowerCase())) found=true;
  }
  // once the loop has run
  if (!found) {
    return callback({
      status:0,
      message:"No book with this name",
      response:'book not found'
    });
  }
  return callback({
    status:1,
    message: bookData[i],
    response:'book found!'
  });
}

/**
 * TO-DO
 * 
 * 1) Add a Book - addBook
 * 2) Delete a Book - removeBook
 * 3) Update a Book's Info - updateBook
 * 4) Handle 'multiple books with similar title or from same author' cases for getBook - getBook
 */


module.exports = {
  getBook : getBook,
}