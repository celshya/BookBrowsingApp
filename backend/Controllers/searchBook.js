
const booksData = require('../booksData');

const searchBook = (req,res)=>{
    const { q } = req.query;
    const matchingBooks = booksData.filter((book) => book.title.toLowerCase().includes(q.toLowerCase()));
    res.json(matchingBooks);
}

module.exports = searchBook;