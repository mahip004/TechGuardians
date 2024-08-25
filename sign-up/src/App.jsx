import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Preferences from './Preferences';
import MainPage from './MainPage'; 
import WritingPage from './WritingPage';  // Import the WritingPage component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/preferences" element={<Preferences />} />
        <Route path="/main" element={<MainPage />} /> {/* Main page route */}
        <Route path="/ai-assistant-writing" element={<WritingPage />} /> {/* AI Assistant Writing page route */}
        <Route path="/" element={<SignIn />} /> {/* Default route */}
      </Routes>
    </Router>
  );
}

export default App;
