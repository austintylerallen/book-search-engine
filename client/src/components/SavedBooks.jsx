import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { REMOVE_BOOK } from '../utils/mutations';
import auth from '../utils/auth';
import './custom.css'; // Import custom CSS

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
    <div className="container">
      <h2 className="text-center mb-4">Saved Books</h2>
      <div className="row">
        {userData.savedBooks?.map((book) => (
          <div key={book.bookId} className="col-md-4">
            <div className="card mb-4">
              {book.image && <img src={book.image} className="card-img-top" alt={`The cover for ${book.title}`} />}
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">{book.description}</p>
                <button className="btn btn-custom mt-2" onClick={() => handleDeleteBook(book.bookId)}>
                  Remove This Book
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedBooks;
