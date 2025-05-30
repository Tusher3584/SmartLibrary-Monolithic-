const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  isbn: {
    type: String,
    required: true,
    unique: true,
  },
  copiesAvailable: {
    type: Number,
    required: true,
    default: 1,
  }
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);
