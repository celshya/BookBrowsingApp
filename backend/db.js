const mongoose = require('mongoose');
const dbUri = 'mongodb+srv://celshya:Jt4K3KbxRsvkTEoD@cluster0.dmdg1um.mongodb.net/booksData';
const Book = require('./Models/book');
const jsondata = require('./booksData.json');

mongoose.connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB Atlas');
  
  Book.insertMany(jsondata)
    .then(() => {
      console.log('Data inserted successfully.');
    })
    .catch((error) => {
      console.error('Error inserting data:', error);
    });
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
