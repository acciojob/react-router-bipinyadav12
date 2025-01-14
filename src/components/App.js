import './../styles/App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router';
function Home() {
  return (
    <div>
      <h1>Welcome to my website!</h1>
      
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About</h1>
      <p>This is simple React Router program.</p>
    </div>
  );
}


function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
export default App

