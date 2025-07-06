// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // optional

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>📱 Promise Pulse</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/promises">Promises</Link></li>
        <li><Link to="/vote">Vote</Link></li>
        <li><Link to="/raise-issue">Raise Issue</Link></li>
        <li><Link to="/issue-status">Issue Status</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
