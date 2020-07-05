import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';

function App(props) {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route path="/admin" component={Admin} />
      </div>
    </Router>
  );
}

export default App;
