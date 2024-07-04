import React, { useState, useEffect } from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import SearchBooks from './components/SearchBooks';
import SavedBooks from './components/SavedBooks';
import LoginForm from './pages/LoginForm';
import SignupForm from './pages/SignupForm';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import auth from './utils/auth';
import './index.css'; // Import the CSS file
import '../src/components/custom.css'; // Import the custom CSS file

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [loggedIn, setLoggedIn] = useState(auth.loggedIn());

  useEffect(() => {
    setLoggedIn(auth.loggedIn());
  }, []);

  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          <Switch>
            <Route exact path="/">
              <div className="container-fluid">
                <h1 className="text-center mb-4">Welcome to the Book Search Engine</h1>
                <p className="text-center mb-4">Find and save your favorite books with ease!</p>
                <div className="row justify-content-center">
                  <div className="col-md-5">
                    <div className="card mb-4">
                      <div className="card-body">
                        <h2 className="text-center">Login</h2>
                        <LoginForm setLoggedIn={setLoggedIn} />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="card mb-4">
                      <div className="card-body">
                        <h2 className="text-center">Signup</h2>
                        <SignupForm setLoggedIn={setLoggedIn} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Route>
            <Route exact path="/search" component={loggedIn ? SearchBooks : () => <Redirect to="/" />} />
            <Route exact path="/saved" component={loggedIn ? SavedBooks : () => <Redirect to="/" />} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
