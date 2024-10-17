// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Social Media Dashboard</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/messages">Messages</Link>
        <Link to="/notifications">Notifications</Link>
      </div>
    </div>
  );
};

export default Navbar;
