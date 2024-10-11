import React, { useState } from 'react';
import postService from '../services/postService';

const CreatePost = () => {
  const [text, setText] = useState('');

  const onSubmit = async e => {
    e.preventDefault();
    try {
      await postService.createPost(text);
      setText(''); // Clear the input field
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Create a new post</h1>
      <form onSubmit={onSubmit}>
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="What's on your mind?"
        ></textarea>
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
