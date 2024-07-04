Book Search Engine
==================

This project is a MERN stack application that allows users to search for books using the Google Books API and save their favorite books. The application has been refactored to use GraphQL with Apollo Server.

Features
--------

-   Search for books using the Google Books API
-   Save favorite books to your account
-   View saved books
-   Authentication with signup and login functionality

Technologies Used
-----------------

-   MongoDB
-   Express.js
-   React.js
-   Node.js
-   GraphQL
-   Apollo Server
-   Bootstrap

Deployment
----------

The application is deployed on Render.

-   Frontend URL: Frontend
-   Backend URL: Backend

Installation
------------

1.  Clone the repository:

    bash

   

    `git clone https://github.com/austintylerallen/book-search-engine.git
    cd book-search-engine`

2.  Install dependencies for the backend:

    bash

  

    `cd server
    npm install`

3.  Install dependencies for the frontend:

    bash



    `cd client
    npm install`

4.  Create a `.env` file in the `server` directory and add your environment variables:

    makefile



    `MONGODB_URI=your-mongodb-uri
    JWT_SECRET=your-jwt-secret`

5.  Run the application:

    -   Backend: `npm start` (in the `server` directory)
    -   Frontend: `npm start` (in the `client` directory)

Usage
-----

1.  Open your browser and go to `http://localhost:3000` to view the frontend.
2.  Use the search bar to find books.
3.  Sign up or log in to save your favorite books.

Application Walkthrough
-----------------------

### Home Page

Upon loading the application, you are presented with a welcome message and options to log in or sign up.

### Search for Books

After logging in, use the search bar to look for books. The search results will display several books, each featuring the book's title, author, description, image, and a link to that book on the Google Books site. Each book card includes a "Read More" button to expand the description and a "Save This Book" button to save the book to your account.

### Saved Books

View all the books saved to your account by navigating to the "Saved Books" page. Each saved book will have an option to remove it from your list.

License
-------

This project is licensed under the MIT License.