const express = require('express');
const path = require('path');
const connectDB = require('./db');
const Contact = require('./models/contact');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Connect to MongoDB
connectDB();

// Middleware to parse incoming form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Route to handle contact form submission
app.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newMessage = new Contact({ name, email, message });
    await newMessage.save();
    res.status(200).json({ success: true, message: 'Message saved!' });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ success: false, message: 'Failed to save message' });
  }
});

// Admin route to view all contact messages
app.get('/admin/messages', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ date: -1 });
    res.json(messages);
  } catch (error) {
    console.error('Error retrieving messages:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch messages' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
