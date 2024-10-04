import React from 'react';

const Post = ({ post }) => {
  return (
    <div className="post">
      <h3>{post.author}</h3>
      <p>{post.content}</p>
      <button>Like</button> {post.likes.length} likes
      <div>
        {post.comments.map(comment => (
          <p key={comment._id}>{comment.text}</p>
        ))}
      </div>
    </div>
  );
};

export default Post;
