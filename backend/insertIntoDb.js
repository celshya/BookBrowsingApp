const mongoose = require('mongoose');
const jsondata = require('./booksData.json'); // Assuming you have a file with your JSON data
const Book = require('./Models/book'); // Your Mongoose model

const dbUri = 'mongodb+srv://celshya:Jt4K3KbxRsvkTEoD@cluster0.dmdg1um.mongodb.net/bookData';

mongoose.connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB Atlas');
  insertData();
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.warn('Disconnected from MongoDB Atlas');
});

// Handle Node.js process termination
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('MongoDB connection closed due to app termination');
    process.exit(0);
  });
});

async function insertData() {
  try {
    await Book.insertMany(jsondata);
    console.log('Data inserted successfully.');
  } catch (error) {
    console.error('Error inserting data:', error);
  } finally {
    mongoose.connection.close();
    console.log('MongoDB connection closed.');
  }
}
