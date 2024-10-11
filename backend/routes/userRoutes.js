const express = require('express');
const router = express.Router();
const {
    getUserProfile,
    updateUserProfile,
    followUser,
    unfollowUser,
    getUserFeed,
} = require('../controllers/userController');
const { verifyToken } = require('../middleware/authMiddleware');

// Get a user profile
router.get('/:userId', verifyToken, getUserProfile);

// Update user profile
router.put('/update', verifyToken, updateUserProfile);

// Follow a user
router.post('/:userId/follow', verifyToken, followUser);

// Unfollow a user
router.post('/:userId/unfollow', verifyToken, unfollowUser);

// Get posts by a specific user
router.get('/:userId/feed', verifyToken, getUserFeed);

module.exports = router;
