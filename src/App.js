import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import BooksPage from "./Components/BookPage/BooksPage" 
import BookDetail from "./Components/BookDetails/BookDetails"
import Video from "./Components/Video"
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<BooksPage/>} />
        <Route path="/book/:_id" element={<BookDetail/>} />
        <Route path="/video" element={<Video/>} />
      </Routes>
    </Router>
  );
};

export default App;
