import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import BooksPage from "./Components/BookPage/BooksPage" 
import BookDetail from "./Components/BookDetails/BookDetails"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<BooksPage/>} />
        <Route path="/book/:id" element={<BookDetail/>} />
      </Routes>
    </Router>
  );
};

export default App;
