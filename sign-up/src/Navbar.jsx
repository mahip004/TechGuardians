import React from 'react';
import './Navbar.css'; // Import custom CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">NewsPortal</a>
      </div>
      <ul className="navbar-links">
        <li><a href="/politics">Politics</a></li>
        <li><a href="/sports">Sports</a></li>
        <li><a href="/entertainment">Entertainment</a></li>
        <li><a href="/tech">Tech</a></li>
      </ul>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="navbar-login">
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
