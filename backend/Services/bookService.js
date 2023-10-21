const Book =  require("../Models/book")

const getAllBooks = async () => {
  try {
    const books = await Book.find({});
    return books;
  } catch (error) {
    throw new Error(`Error fetching books from the database: ${error.message}`);
  }
};
const getBookById =async (bookId) => {
    try {
        const book = await Book.findById(bookId);
        return book;
      } catch (error) {
        throw new Error(`Error fetching book by ID from the database: ${error.message}`);
      }
  };

module.exports = {
  getAllBooks,getBookById
};
