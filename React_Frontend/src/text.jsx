import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './text.css'; // Import the CSS file
import robo from '../src/assets/robo.png'; // Adjust the path based on your folder structure

const text = () => {
  return (
    <div className="text-summarizer-page">
      <header className="text-header">
        <div className="text-header-menu">
          <Link to="/home" className="menu-item">Home</Link>
          <Link to="/ai-assistant-writing" className="menu-item">AI Assistant Writing</Link>
        </div>
        <h1>Text Summarizer</h1>
      </header>
      <main className="text-main-content">
        <section className="text-input-container">
          <textarea
            className="text-input"
            placeholder="Start writing here..."
          ></textarea>
        </section>
        <section className="text-image-container">
          <img src={robo} alt="Robot" />
        </section>
      </main>
    </div>
  );
};

export default text;
