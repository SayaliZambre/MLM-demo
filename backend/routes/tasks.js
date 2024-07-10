const express = require('express');
const mongoose = require('mongoose');
const tasksRouter = require('./routes/tasks');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Middleware
app.use(express.json()); // Parse JSON bodies

// Routes
app.use('/api/tasks', tasksRouter); // Mount tasks router at /api/tasks

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
