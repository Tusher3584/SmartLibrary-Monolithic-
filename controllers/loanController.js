const Loan = require('../models/Loan');

// Get all loans
exports.getAllLoans = async (req, res) => {
  try {
    const loans = await Loan.find();
    res.json(loans);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get loan by ID
exports.getLoanById = async (req, res) => {
  try {
    const loan = await Loan.findById(req.params.id);
    if (!loan) return res.status(404).json({ error: 'Loan not found' });
    res.json(loan);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create new loan
exports.createLoan = async (req, res) => {
  try {
    const newLoan = new Loan(req.body);
    await newLoan.save();
    res.status(201).json(newLoan);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update loan by ID
exports.updateLoan = async (req, res) => {
  try {
    const updatedLoan = await Loan.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedLoan) return res.status(404).json({ error: 'Loan not found' });
    res.json(updatedLoan);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete loan by ID
exports.deleteLoan = async (req, res) => {
  try {
    const deletedLoan = await Loan.findByIdAndDelete(req.params.id);
    if (!deletedLoan) return res.status(404).json({ error: 'Loan not found' });
    res.json({ message: 'Loan deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
