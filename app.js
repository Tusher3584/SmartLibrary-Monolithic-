const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');
const loanRoutes = require('./routes/loanRoutes');


app.use(express.json());

app.use('/books', bookRoutes);
app.use('/users', userRoutes);
app.use('/loans', loanRoutes);

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Smart Library System API is running!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
