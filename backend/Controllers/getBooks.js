// const books = require("../booksData.json")
const bookService  = require("../Services/bookService")
const getBooks = async(req,res)=>{
   try {
      console.log("im here")
      const books = await bookService.getAllBooks();
    
      res.json(books);
     
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}

module.exports = getBooks