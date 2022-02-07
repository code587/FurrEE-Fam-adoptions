const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Dog {
    breed: String
    characteristics: String
    behaviors: String
  }
  type Adopt {
    breed: String
    name: String
    age: Int
    description: String
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Query {
    dogs: [Dog]
    adopts: [Adopt]
    users: [User]
  }
`;

module.exports = typeDefs;
