// Sidebar.js
import React from 'react';
import '../styles/index.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Shortcuts</h2>
      <ul>
        <li>Profile</li>
        <li>Friends</li>
        <li>Groups</li>
        <li>Events</li>
      </ul>
    </div>
  );
};

export default Sidebar;
