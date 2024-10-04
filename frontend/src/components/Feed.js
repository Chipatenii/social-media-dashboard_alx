import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/api/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the posts!', error);
      });
  }, []);

  return (
    <div className="feed">
      <h2>Feed</h2>
      {posts.map(post => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Feed;