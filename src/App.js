import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'react-tippy/dist/tippy.css'
import Welcome from './components/Welcome';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Test from './components/Test';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path = '/' exact component = {Welcome} />
          <Route path = '/login' component = {Login} />
          <Route path = '/register' component = {Register} />
          <Route path = '/home' component = {Home} />
          <Route path = '/test' component = {Test} />
        </Switch>        
      </div>
    </Router>
  );
}

export default App;
