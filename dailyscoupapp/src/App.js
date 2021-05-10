
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import React from 'react';
import Register from './components/register/register';
import Login from './components/login/login';
import Home from './components/home/home';
import Dashboard from './components/dashboard/dashboard';

function App() {
  return (
    <Router>
    <div>
     <Switch>
       <Route path="/register">
          <Register />
       </Route>
       <Route path="/home">
          <Home />
       </Route>
       <Route path="/dashboard">
          <Dashboard />
       </Route>
       <Route path="/">
          <Login />
       </Route>
     </Switch>
    </div>
  </Router>
  );
}

export default App;
