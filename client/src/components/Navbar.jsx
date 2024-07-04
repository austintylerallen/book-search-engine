// client/src/components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../utils/auth';

const Navbar = ({ loggedIn, setLoggedIn }) => {
  const handleLogout = () => {
    auth.logout();
    setLoggedIn(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">Book Search</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          {loggedIn && (
            <li className="nav-item">
              <Link className="nav-link" to="/search">Search for Books</Link>
            </li>
          )}
          {loggedIn ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/saved">Saved Books</Link>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-link" onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">Signup</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
