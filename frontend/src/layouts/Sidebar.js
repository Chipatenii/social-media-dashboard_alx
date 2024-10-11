import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/">Feed</Link></li>
        <li><Link to="/profile">My Profile</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
