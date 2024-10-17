// HomePage.js
import React from 'react';
import '../styles/index.css';

const HomePage = () => {
  return (
    <div>
      <div className="post">
        <div className="post-header">
          <h3>User Name</h3>
          <span>Just now</span>
        </div>
        <p>This is a post content example. Users can share updates here.</p>
        <button className="button">Like</button>
        <button className="button">Comment</button>
        <button className="button">Share</button>
      </div>
    </div>
  );
};

export default HomePage;
