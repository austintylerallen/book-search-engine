// server/models/User.js

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const bookSchema = require('./Book');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must use a valid email address'],
  },
  password: {
    type: String,
    required: true,
  },
  savedBooks: [bookSchema],
});

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
    console.log(`Password hashed for user: ${this.email}`);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  const isMatch = await bcrypt.compare(password, this.password);
  console.log(`Password comparison for user ${this.email}: ${isMatch}`);
  return isMatch;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
