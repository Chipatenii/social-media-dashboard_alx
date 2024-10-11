const express = require('express');
const router = express.Router();
const {
    createPost,
    deletePost,
    getFeed,
    likePost,
    addComment,
} = require('../controllers/postController');
const { verifyToken } = require('../middleware/authMiddleware');

// Create a new post
router.post('/create', verifyToken, createPost);

// Delete a post
router.delete('/:postId', verifyToken, deletePost);

// Get all posts (feed)
router.get('/feed', verifyToken, getFeed);

// Like a post
router.post('/:postId/like', verifyToken, likePost);

// Add a comment
router.post('/:postId/comment', verifyToken, addComment);

module.exports = router;
