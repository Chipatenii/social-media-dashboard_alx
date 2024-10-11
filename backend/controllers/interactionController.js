const Post = require('../models/Post');

// Like a Post
exports.likePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post not found' });

        if (post.likes.includes(req.user.id)) {
            return res.status(400).json({ message: 'You already liked this post' });
        }

        post.likes.push(req.user.id);
        await post.save();
        res.status(200).json({ message: 'Post liked' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to like post' });
    }
};

// Comment on a Post
exports.commentOnPost = async (req, res) => {
    const { text } = req.body;
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post not found' });

        const comment = {
            user: req.user.id,
            text,
            createdAt: new Date(),
        };

        post.comments.push(comment);
        await post.save();

        res.status(201).json({ message: 'Comment added', comment });
    } catch (error) {
        res.status(500).json({ message: 'Failed to add comment' });
    }
};
