const mongoose = require('mongoose')

const eventSchema = mongoose.Schema({

  name: String,
  description: String,
  date: Date
});

module.exports = mongoose.model('Event', eventSchema);
