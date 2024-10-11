const User = require('../models/User');

// Follow User
exports.followUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const currentUser = await User.findById(req.user.id);

        if (user.followers.includes(req.user.id)) {
            return res.status(400).json({ message: 'You are already following this user' });
        }

        user.followers.push(req.user.id);
        currentUser.following.push(user._id);

        await user.save();
        await currentUser.save();

        res.status(200).json({ message: 'User followed' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to follow user' });
    }
};

// Unfollow User
exports.unfollowUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const currentUser = await User.findById(req.user.id);

        if (!user.followers.includes(req.user.id)) {
            return res.status(400).json({ message: 'You are not following this user' });
        }

        user.followers = user.followers.filter((follower) => follower.toString() !== req.user.id);
        currentUser.following = currentUser.following.filter((followed) => followed.toString() !== req.params.id);

        await user.save();
        await currentUser.save();

        res.status(200).json({ message: 'User unfollowed' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to unfollow user' });
    }
};
