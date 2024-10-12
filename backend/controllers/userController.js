// userController.js

const User = require('../models/User'); // Assuming you have a User model
const Post = require('../models/Post'); // Assuming you have a Post model

// Get User Profile
exports.getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId).select('-password'); // Exclude the password
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch user profile' });
    }
};

// Update User Profile
exports.updateUserProfile = async (req, res) => {
    const { username, bio } = req.body;
    try {
        const user = await User.findById(req.user.id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        // Update user details
        user.username = username || user.username;
        user.bio = bio || user.bio;

        await user.save();
        res.status(200).json({ message: 'Profile updated successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update profile' });
    }
};

// Follow a User
exports.followUser = async (req, res) => {
    try {
        const userToFollow = await User.findById(req.params.userId);
        const currentUser = await User.findById(req.user.id);

        if (!userToFollow || !currentUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if already following
        if (currentUser.following.includes(userToFollow._id)) {
            return res.status(400).json({ message: 'Already following this user' });
        }

        currentUser.following.push(userToFollow._id);
        userToFollow.followers.push(currentUser._id);

        await currentUser.save();
        await userToFollow.save();

        res.status(200).json({ message: 'User followed successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to follow user' });
    }
};

// Unfollow a User
exports.unfollowUser = async (req, res) => {
    try {
        const userToUnfollow = await User.findById(req.params.userId);
        const currentUser = await User.findById(req.user.id);

        if (!userToUnfollow || !currentUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if not following
        if (!currentUser.following.includes(userToUnfollow._id)) {
            return res.status(400).json({ message: 'Not following this user' });
        }

        currentUser.following = currentUser.following.filter(
            (id) => id.toString() !== userToUnfollow._id.toString()
        );
        userToUnfollow.followers = userToUnfollow.followers.filter(
            (id) => id.toString() !== currentUser._id.toString()
        );

        await currentUser.save();
        await userToUnfollow.save();

        res.status(200).json({ message: 'User unfollowed successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to unfollow user' });
    }
};

// Get User's Posts (Feed)
exports.getUserFeed = async (req, res) => {
    try {
        const posts = await Post.find({ user: req.params.userId }).sort({ createdAt: -1 });
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch user feed' });
    }
};
