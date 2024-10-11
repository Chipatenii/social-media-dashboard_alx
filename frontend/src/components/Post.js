import React from 'react';
import postService from '../services/postService';

const Post = ({ post }) => {
  const handleDelete = async () => {
    try {
      await postService.deletePost(post._id);
      // Reload or refresh the feed
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="post">
      <h2>{post.user.name}</h2>
      <p>{post.text}</p>
      <button onClick={handleDelete}>Delete</button>
      {/* Add likes and comments section */}
    </div>
  );
};

export default Post;
