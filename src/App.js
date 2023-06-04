import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Checkout from './components/Checkout';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<React.Fragment> <Login /> /</React.Fragment>} />
        </Routes>
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
