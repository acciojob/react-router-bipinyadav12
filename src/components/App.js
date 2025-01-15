// Import necessary modules
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Define Home component
function Home() {
  return (
  <div>
      <h1>Welcome to my website!</h1>
      
    </div>
  );
}

// Define About component
function About() {
  return (
    <div>
      <h1>About</h1>
      <p>This is simple React Router program.</p>
    </div>
  );
}

// Define App component
function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

// Render the application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
