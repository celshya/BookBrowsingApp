const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    _id: Number,
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
