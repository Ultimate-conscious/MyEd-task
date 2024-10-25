import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Contact } from './models/contact';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/myed')
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));


app.post('/api/contact', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    res.status(400).json({ error: 'An error occurred while submitting the contact form' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});