
const bookService  = require("../Services/bookService")
const getBooks = async(req,res)=>{
   try {
      const books = await bookService.getAllBooks();
      res.json(books);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}

module.exports = getBooks