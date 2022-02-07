import { gql } from '@apollo/client';

export const QUERY_DOG = gql`
  query getDog{
    dog {
      breed
      characteristics
      behaviors
    }
  }
`;

export const QUERY_ADOPT = gql`
  query getAdopt{
    adopt {
      breed
      name
      age
      description
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        createdAt
      }
    }
  }
`;
