import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const backendUrl = 'http://localhost:3001';

const Search = ({ updateSearchResults }) => {
  const [options, setOptions] = useState([]);
  const [query, setQuery] = useState('');

  const handleInputChange = (event, newInputValue) => {
    setQuery(newInputValue);
  };


  useEffect(() => {
    axios
      .get(`${backendUrl}/api/books`)
      .then((response) => {
        setOptions(response.data);
        
        console.log("yes")
      })
      .catch((error) => {
        console.error('Error fetching initial suggestions: ', error);
      });
  }, []);

  useEffect(() => {
    if (query.trim() !== '') {
      axios
        .get(`${backendUrl}/api/search?q=${query}`)
        .then((response) => {
          setOptions(response.data);
          updateSearchResults(response.data);
        })
        .catch((error) => {
          console.error('Error fetching suggestions: ', error);
        });
    } else {
      setOptions([]);
      updateSearchResults([]);
    }
  }, [query, updateSearchResults]);

  return (
    <Autocomplete
      id="search-autocomplete"
      options={options}
      getOptionLabel={(option) => option.title}
      onInputChange={handleInputChange}
      sx={{
        width: '50%', 
        margin: '0 auto', 
      }}
      renderInput={(params) => <TextField {...params} label="Search for a book" variant="outlined" fullWidth />}
    />
  );
};

export default Search;
