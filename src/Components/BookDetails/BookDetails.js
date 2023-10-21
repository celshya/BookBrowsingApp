import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./BookDetails.css"
import {Button} from "@mui/material"
const backendUrl = 'http://localhost:3001';

const BookDetails = () => {
    const { id } = useParams(); // Get the book ID from the route params
  const [book, setBook] = useState(null);

  useEffect(() => {
  
    axios.get(`${backendUrl}/api/books/${id}`)
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => {
        console.error('Error fetching book details: ', error);
      });
  }, [id]);
  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="book-details-container">
     <div className="book-details-cover"> 
     <img src={book.imageUrl} alt={book.title} />
     <Button variant='contained' color="success">Want to read</Button>
     </div>

        <div className="book-details-header">   
        <h2>{book.title}</h2>
        <p>Author: {book.author}</p>
        <p>Genre: {book.genre}</p>
        <p>Price: ${book.price}</p>
        <p>Published on : {book.publishedDate}</p>
        <p>Description: {book.description}</p>
        </div>
      
    
 

    </div>
  );
};

export default BookDetails;
