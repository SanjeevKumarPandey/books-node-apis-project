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

module.exports = {
  getBook : getBook,
}