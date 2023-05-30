import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Checkout from './components/Checkout';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<React.Fragment> <Header /><Home /> /</React.Fragment>} />
        </Routes>
        <Routes>
        <Route path="/checkout" element={<React.Fragment> <Header /><Checkout /> /</React.Fragment>} />
        </Routes>
      </Router>
  
    </div>
  );
}

export default App;
