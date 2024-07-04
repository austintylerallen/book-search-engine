// client/src/pages/LoginForm.jsx

import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { LOGIN_USER } from '../utils/mutations';
import auth from '../utils/auth';

const LoginForm = ({ setLoggedIn }) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);
  const history = useHistory();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log('Form State:', formState);

    try {
      const { data } = await login({
        variables: { ...formState },
      });
      console.log('Login Data:', data);

      if (data && data.login && data.login.token) {
        auth.setToken(data.login.token);
        console.log('Login Success:', data.login);
        setLoggedIn(true);
        history.push('/dashboard');
      } else {
        console.error('Login Error: No token returned');
      }
    } catch (e) {
      console.error('Login Error:', e);
      console.error('Login Error Network:', e.networkError);
      console.error('Login Error GraphQL:', e.graphQLErrors);
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
        {error && <div className="alert alert-danger mt-2">Login failed</div>}
      </form>
    </div>
  );
};

export default LoginForm;
