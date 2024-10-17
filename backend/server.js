const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const config = require('./config/config');

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);

mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

const PORT = config.port;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
