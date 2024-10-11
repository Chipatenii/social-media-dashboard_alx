const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController'); // Make sure the path is correct

router.post('/register', register); // Use 'register' instead of 'registerUser'
router.post('/login', login); // Use 'login' instead of 'loginUser'

module.exports = router;
