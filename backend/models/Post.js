const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  content: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  comments: [{ user: String, text: String }],
});

module.exports = mongoose.model('Post', PostSchema);