import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './SignIn'; // Import SignIn component
import SignUp from './SignUp'; // Import SignUp component
import './App.css'; // Import the CSS file

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/login" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          {/*add more routes for other pages */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;