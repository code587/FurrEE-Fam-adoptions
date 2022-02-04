const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    
  }

  type Adopt {
    breed: String
    name: String
    age: Number
    description: String
  }

  type Dog {
    breed: String
    characteristics: String
    behaviors: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    adopt: [Adopt]
    dog: [Dog]
    boxer: [Boxer]
    greyhound: [Greyhound]
    poodle: [Poodle]
  }
`;

module.exports = typeDefs;
