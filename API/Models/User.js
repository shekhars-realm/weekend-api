const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  email: String,
  password: String,
  lastName: String,
  firstname: String,
  userName: String
});

module.exports = mongoose.model('User', userSchema);
