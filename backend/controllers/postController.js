const Post = require('../models/Post');

// Create Post
exports.createPost = async (req, res) => {
    const { content } = req.body;
    try {
        const newPost = new Post({
            user: req.user.id,
            content,
        });
        await newPost.save();
        res.status(201).json({ post: newPost });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create post' });
    }
};

// Delete Post
exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId); 
        if (!post) return res.status(404).json({ message: 'Post not found' });

        if (post.user.toString() !== req.user.id) {
            return res.status(401).json({ message: 'Not authorized to delete this post' });
        }

        await post.remove();
        res.status(200).json({ message: 'Post deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete post' });
    }
};


// View Posts (for feed)
exports.getFeed = async (req, res) => {
    try {
        const posts = await Post.find().populate('user', 'username').sort({ createdAt: -1 });
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch posts' });
    }
};