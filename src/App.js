import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AboutUs from './about-us/about';
import Home from './home/home';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<AboutUs/>} />
       
      </Routes>
      
     
    </Router>
  );
}

export default App;
