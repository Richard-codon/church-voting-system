// src/App.jsx
//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import VotingPage from './pages/VotingPage';
import DashBoard from './admin/DashBoard';


const App = () => {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/admin" element={<DashBoard />} />
          <Route path="/voting" element={<VotingPage />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
