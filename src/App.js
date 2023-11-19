// App.js
// Module:
// import ReactDOM from "react-dom/client";
// import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from 'react-router-dom';
import './App.css';
// pages
import Home from './pages/HomePage';
import Profile from './pages/ProfilePage';
// components
import NavBar from './components/sections/NavBar';
import Footer from './components/sections/Footer';

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(<App />);