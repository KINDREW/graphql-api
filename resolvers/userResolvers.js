const { AuthenticationError, UserInputError } = require('apollo-server-express');
const User = require('../models/User');
const userLoader = require('../loaders/userLoader');

const resolvers = {
  Query: {
    getUser: async (_, { id }, { lng }) => {
      const user = await userLoader.load(id);
      if (!user) throw new UserInputError(i18n.t('errorUserNotFound', { lng }));
      return user;
    },
    getUsers: async () => {
      return await User.find();
    },
  },
  Mutation: {
    createUser: async (_, { name, email }) => {
      if (!name || !email) {
        throw new UserInputError('Name and email are required');
      }
      const newUser = new User({ name, email });
      return await newUser.save();
    },
  },
};

module.exports = resolvers;
