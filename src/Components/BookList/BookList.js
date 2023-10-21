import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import {Link} from "react-router-dom"
import './BookList.css';
import defaultImage from "../../defaultImg.png"
const BookList = ({ books }) => {
  return (
    <div className="container">
      <h2>List of Books</h2>
      <ul className="book-list">
        {books.map((book) => (
          <li key={book._id} className="book-list-item">
          <Link to={`/book/${book._id}`} className="card-link">
            <Card className="card-items">
              <CardMedia
                component="img"
                alt={book.title}
                style={{ minHeight: 140, minWidth: 200, objectFit:'cover'  }}
                image={book.imageUrl || defaultImage}
                onError={(e) => {
                        e.target.src = defaultImage; 
                    }}
              
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {book.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Author: {book.author}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: ${book.price}
                </Typography>
              </CardContent>
            </Card></Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
