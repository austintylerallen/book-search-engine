// client/src/utils/queries.js

import { gql } from '@apollo/client';

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        title
        description
        image
        link
      }
    }
  }
`;
