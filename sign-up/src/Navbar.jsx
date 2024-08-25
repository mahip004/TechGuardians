import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

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
      <div className="navbar-menu">
        <button className="menu-button" onClick={toggleMenu}>Menu</button>
        {showMenu && (
          <ul className="menu-dropdown">
            <li><a href="/login">LogOut</a></li>
            <li><a href="/ai-assistant-writing">AI Assistant Writing</a></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
