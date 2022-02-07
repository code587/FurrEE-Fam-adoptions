//const { AuthenticationError } = require('apollo-server-express');
const { Dog, Adopt, User } = require('../models');
//const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      dogs: async () => {
        return await Dog.find({});
        //.populate('adopt');

      }
    },
    
  Query: {
    adopt: async () => {
      return await Adopt.find({});
      //.populate('dog');

    }
  },

Query: {
  users: async () => {
    return await Users.find({});
    //.populate('users');

  }
}
  };

  module.exports = resolvers;
  
  // adopts: async (parent, {adopt}) => {
  //   return await Dog.find({}).populate('adopt');
  // 