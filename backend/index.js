
const express = require('express');
const app = express();
const cors = require('cors');

const getbooks = require("./Controllers/getBooks");
const getBookbyId = require('./Controllers/getBookbyId');
const searchBook = require('./Controllers/searchBook');

app.use(cors());

app.get('/api/books',getbooks );
app.get('/api/books/:id', getBookbyId);
app.get('/api/search', searchBook);
  

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
