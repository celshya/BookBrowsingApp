
import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import ReactPaginate from 'react-paginate';
import './BookPage.css'; 
import BookList from "../BookList/BookList";
import Search from "../Search/Search"

const backendUrl = 'http://localhost:3001';

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios.get(`${backendUrl}/api/books`) 
      .then((response) => {
        setBooks(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error('Error fetching books: ', error);
      });
  }, []);

  // Pagination handling
  const booksPerPage = 8; 
  const offset = currentPage * booksPerPage;
  const paginatedBooks = books.slice(offset, offset + booksPerPage);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);

   
  }; 
  const updateSearchResults = (results) => {
    setSearchResults(results);
  };

  return (
    <div className="books-page-container">
    <h1>Book Browsing App</h1>
    <Search updateSearchResults={updateSearchResults} />
    <BookList books={searchResults.length > 0 ? searchResults : paginatedBooks} className="" />
      <ReactPaginate
      previousLabel={'previous'}
      nextLabel={'next'}
      breakLabel={'...'}
      pageCount={Math.ceil(books.length / booksPerPage)}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={handlePageClick}
      containerClassName={'pagination'}
      subContainerClassName={'pages pagination'}
      activeClassName={'active'}
    />
    </div>
  );
};

export default BooksPage;
