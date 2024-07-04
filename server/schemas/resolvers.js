// server/schemas/resolvers.js

const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('savedBooks');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      console.log('Login Mutation:', { email, password });
      const user = await User.findOne({ email });
      console.log(`User found for email ${email}: ${user}`);

      if (!user) {
        console.error('Login Error: Incorrect credentials');
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        console.error('Login Error: Incorrect credentials');
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      console.log('Login Success:', { token, user });
      return { token, user };
    },

    addUser: async (parent, args) => {
      console.log('Add User Mutation:', args);
      try {
        const user = await User.create(args);
        const token = signToken(user);
        console.log('Add User Success:', { token, user });
        return { token, user };
      } catch (error) {
        console.error('Add User Error:', error);
        throw new Error('Error adding user');
      }
    },

    saveBook: async (parent, { bookData }, context) => {
      console.log('Save Book Mutation:', bookData);
      if (context.user) {
        try {
          const updatedUser = await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $addToSet: { savedBooks: bookData } },
            { new: true }
          ).populate('savedBooks');
          console.log('Save Book Success:', updatedUser);
          return updatedUser;
        } catch (error) {
          console.error('Save Book Error:', error);
          throw new Error('Error saving book');
        }
      }

      throw new AuthenticationError('Not logged in');
    },

    removeBook: async (parent, { bookId }, context) => {
      console.log('Remove Book Mutation:', bookId);
      if (context.user) {
        try {
          const updatedUser = await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $pull: { savedBooks: { bookId } } },
            { new: true }
          ).populate('savedBooks');
          console.log('Remove Book Success:', updatedUser);
          return updatedUser;
        } catch (error) {
          console.error('Remove Book Error:', error);
          throw new Error('Error removing book');
        }
      }

      throw new AuthenticationError('Not logged in');
    },
  },
};

module.exports = resolvers;
