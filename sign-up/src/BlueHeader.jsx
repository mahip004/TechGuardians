import React from 'react';
import './BlueHeader.css'; // Import custom CSS for styling

const BlueHeader = () => {
  return (
    <div className="blue-header">
      <ul className="header-links">
        <li><a href="/home">Home</a></li>
        <li><a href="/world">World</a></li>
        <li><a href="/politics">Politics</a></li>
        <li><a href="/business">Business</a></li>
        <li><a href="/tech">Tech</a></li>
        <li><a href="/science">Science</a></li>
        <li><a href="/health">Health</a></li>
        <li><a href="/sports">Sports</a></li>
        <li><a href="/entertainment">Entertainment</a></li>
        <li><a href="/style">Style</a></li>
        <li><a href="/travel">Travel</a></li>
      </ul>
    </div>
  );
};

export default BlueHeader;
