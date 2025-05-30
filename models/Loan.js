const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: true,
  },
  issueDate: {
    type: Date,
    default: Date.now,
  },
  returnDate: {
    type: Date,
  },
  returned: {
    type: Boolean,
    default: false,
  }
}, { timestamps: true });

module.exports = mongoose.model('Loan', loanSchema);
