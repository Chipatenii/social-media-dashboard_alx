const mongoose = require('mongoose');
const commentSchema = require('./Comment').commentSchema;

const postSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    content: {
        type: String,
        required: true,
        trim: true,
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
    comments: [commentSchema],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Export the model
module.exports = mongoose.model('Post', postSchema);
