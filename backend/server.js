const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');
const { errorHandler } = require('./middleware/errorHandler');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // Body parser to parse JSON request bodies
app.use(helmet()); // Security headers
app.use(cors()); // Enable CORS for cross-origin requests
app.use(morgan('common')); // Logging HTTP requests
app.use(express.urlencoded({ extended: true }));

// Rate limiting to prevent abuse (e.g., DoS attacks)
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 100, // Limit each IP to 100 requests per window
});
app.use(limiter);

// Database connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected...');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1); // Stop the application if the DB connection fails
  }
};

connectDB();

// Routes
app.use('/api/auth', authRoutes); // Authentication routes (login, register)
app.use('/api/posts', postRoutes); // Post routes (CRUD operations)
app.use('/api/users', userRoutes); // User profile routes (CRUD operations)

// Error Handling middleware
app.use(errorHandler); // Custom error handler to catch errors globally

// Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
