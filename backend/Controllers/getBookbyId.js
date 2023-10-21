
const booksData = require('../booksData');

const getBookbyId = (req,res)=>{
    try {
        const bookId = req.params.id;
       
        const book = booksData.find((b) => b.id === parseInt(bookId, 10));
        if (!book) {
            res.status(404).json({ message: 'Book not found' });
        } else {
            res.json(book);
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports = getBookbyId;