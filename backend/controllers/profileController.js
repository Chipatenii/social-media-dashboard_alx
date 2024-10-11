const User = require('../models/User');

// View User Profile
exports.viewProfile = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch user profile' });
    }
};

// Edit Profile
exports.editProfile = async (req, res) => {
    try {
        const { username, bio } = req.body;
        const user = await User.findById(req.user.id);

        user.username = username || user.username;
        user.bio = bio || user.bio;

        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update profile' });
    }
};
