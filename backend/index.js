const express = require('express');
const app = express();
const cors = require('cors');

const getbooks = require("./Controllers/getBooks");
const getBookbyIdController = require('./Controllers/getBookbyId.controller');
const searchBook = require('./Controllers/searchBook');

app.use(cors());

const port = 3001;

const startServer = async () => {
  try {
   
    await require('./db'); 

    
    app.get('/api/books', getbooks);
    app.get('/api/books/:_id',  getBookbyIdController);
    app.get('/api/search', searchBook);

   
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Error starting the server:', error);
  }
};

startServer();
