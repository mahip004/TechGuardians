import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Preferences from './Preferences';
import WritingPage from './WritingPage';
import Home from './Home';
import Business from './Business';
import Entertainment from './Entertainment';
import Health from './Health';
import Science from './Science';
import Sports from './Sports';
import Technology from './Technology';
import Card from './components/card'; // Ensure correct path to Card component
import TextSummarizer from './text'; // Ensure correct path to TextSummarizer component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/preferences" element={<Preferences />} />
        <Route path="/ai-assistant-writing" element={<WritingPage />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/business" element={<Business />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/health" element={<Health />} />
        <Route path="/science" element={<Science />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/card" element={<Card />} />
        <Route path="/text" element={<TextSummarizer />} /> {/* Route for TextSummarizer */}
      </Routes>
    </Router>
  );
}

export default App;
