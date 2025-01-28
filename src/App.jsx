// src/App.jsx

import React from 'react';
import Home from './Home';
import './App.css'; // Import global styles
import { Route, Routes } from 'react-router-dom';
import AddBooks from './AddBooks';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'element={<Home />} />  
        <Route path='/addbook' element={<AddBooks />} />
      </Routes>
    </div>
  );
}

export default App;
