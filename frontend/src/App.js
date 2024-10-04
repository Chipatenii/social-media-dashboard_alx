import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Feed from './components/Feed';
import Profile from './components/Profile';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Feed} />
        <Route path="/profile/:userId" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;