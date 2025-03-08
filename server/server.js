require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth-routes/index');

const app = express();

const PORT = process.env.PORT || 5000;
const { MONGODB_URL } = process.env;

app.use(
    cors({
        origin: process.env.CLIENT_URL,
        methods: ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    })
);
app.use(express.json());

// Database connection
mongoose
    .connect(MONGODB_URL)
    .then(() => console.log('MongoDB is connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Routes configuration
app.use('/auth', authRoutes);

// error handler
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).json({
        success: false,
        message: 'Something is wrong',
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
