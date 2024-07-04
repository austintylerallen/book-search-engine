// client/src/pages/SignupForm.jsx

import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { ADD_USER } from '../utils/mutations';
import auth from '../utils/auth';

const SignupForm = ({ setLoggedIn }) => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addUser, { error }] = useMutation(ADD_USER);
  const history = useHistory();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log('Form State:', formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      console.log('Signup Data:', data);

      if (data && data.addUser && data.addUser.token) {
        auth.setToken(data.addUser.token);
        console.log('Signup Success:', data.addUser);
        setLoggedIn(true);
        history.push('/dashboard');
      } else {
        console.error('Signup Error: No token returned');
      }
    } catch (e) {
      console.error('Signup Error:', e);
      console.error('Signup Error Network:', e.networkError);
      console.error('Signup Error GraphQL:', e.graphQLErrors);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={formState.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={formState.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-custom">
          Submit
        </button>
        {error && <div className="alert alert-danger mt-2">Signup failed</div>}
      </form>
    </div>
  );
};

export default SignupForm;
