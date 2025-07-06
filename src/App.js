// src/App.js or App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Promises from './pages/Promises';
import Vote from './pages/Vote';
import RaiseIssue from './pages/RaiseIssue';
import IssueStatus from './pages/IssueStatus';
import Login from './pages/Login';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <div className="max-w-5xl mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/promises" element={<Promises />} />
            <Route path="/vote" element={<Vote />} />
            <Route path="/raise-issue" element={<RaiseIssue />} />
            <Route path="/issue-status" element={<IssueStatus />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
