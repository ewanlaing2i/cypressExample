import './App.css';

import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './login';
import Logged from './logged';
import Incorrect from './Incorrect login';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/logged.html" element={<Logged />} />
        <Route path="/wrong.html" element={<Incorrect />} />
        <Route path="/index.html" element={<Login />} />
      </Routes>
    </div>
  );
}

;
