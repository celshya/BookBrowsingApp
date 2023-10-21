
// const booksData = require('../booksData');
const bookService = require("../Services/bookService")
const getBookbyIdController = async(req,res)=>{
    try {
        console.log("yeah")
        const bookId = req.params._id;
        console.log("Received bookId:", bookId);
        const book =await bookService.getBookById(bookId);
    
        if (!book) {
          res.status(404).json({ message: 'Book not found' });
        } else {
          res.json(book);
        }
      } catch (err) {
        console.log(err);
      }
}

module.exports = getBookbyIdController;