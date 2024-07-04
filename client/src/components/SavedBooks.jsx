// client/src/components/SavedBooks.jsx

import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { REMOVE_BOOK } from '../utils/mutations';
import auth from '../utils/auth';

const SavedBooks = () => {
  const { loading, data } = useQuery(GET_ME);
  const [removeBook, { error }] = useMutation(REMOVE_BOOK);

  const userData = data?.me || {};

  const handleDeleteBook = async (bookId) => {
    try {
      await removeBook({
        variables: { bookId },
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <div>
        <h2>Saved Books</h2>
        {userData.savedBooks?.map((book) => (
          <div key={book.bookId}>
            <h3>{book.title}</h3>
            <p>{book.description}</p>
            <button onClick={() => handleDeleteBook(book.bookId)}>Remove This Book</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default SavedBooks;
