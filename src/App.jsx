import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

function App() {
  return (

    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>

  );
}

export default App;
