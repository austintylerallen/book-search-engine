// client/src/components/SearchBooks.jsx

import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SAVE_BOOK } from '../utils/mutations';
import auth from '../utils/auth';
import { searchGoogleBooks } from '../utils/API';
import './custom.css'; // Import custom CSS

const SearchBooks = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [saveBook, { error }] = useMutation(SAVE_BOOK);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!searchInput) {
      return false;
    }

    try {
      const response = await searchGoogleBooks(searchInput);
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const { items } = await response.json();
      const bookData = items.map((book) => ({
        bookId: book.id,
        authors: book.volumeInfo.authors || ['No author to display'],
        title: book.volumeInfo.title,
        description: book.volumeInfo.description,
        image: book.volumeInfo.imageLinks?.thumbnail || '',
        link: book.volumeInfo.infoLink,
      }));

      setSearchedBooks(bookData);
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveBook = async (bookId) => {
    const bookToSave = searchedBooks.find((book) => book.bookId === bookId);
    const token = auth.loggedIn() ? auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      await saveBook({
        variables: { bookData: bookToSave },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <form className="form-inline my-2 my-lg-0" onSubmit={handleFormSubmit}>
        <input
          className="form-control mr-sm-2"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder="Search for a book"
        />
        <button className="btn btn-custom my-2 my-sm-0" type="submit">Submit</button>
      </form>

      <div className="row">
        {searchedBooks.map((book) => (
          <div key={book.bookId} className="col-md-4">
            <BookCard book={book} handleSaveBook={handleSaveBook} />
          </div>
        ))}
      </div>
    </div>
  );
};

const BookCard = ({ book, handleSaveBook }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="card mb-4">
      {book.image && <img src={book.image} className="card-img-top" alt={`The cover for ${book.title}`} />}
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className={`card-text ${isExpanded ? 'expanded' : ''}`}>{book.description}</p>
        <button className="btn-read-more" onClick={toggleExpanded}>
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
        {auth.loggedIn() && (
          <button className="btn btn-custom mt-2" onClick={() => handleSaveBook(book.bookId)}>Save This Book</button>
        )}
      </div>
    </div>
  );
};

export default SearchBooks;
