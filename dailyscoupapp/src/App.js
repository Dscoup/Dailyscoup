
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import React, { useState } from 'react';
import Register from './components/register/register';
import Login from './components/login/login';
import Home from './components/home/home';
import Dashboard from './components/dashboard/dashboard';
import ResetPassword from './components/resetpassword/resetpassword';
import ForgotPassword from './components/forgotpassword/forgotpassword';


function App() {
   const [token, setToken] = useState();
   if(!token) {
      return <Login setToken={setToken} />
    }
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
       <Route path="/reset">
          <ResetPassword />
       </Route>
       <Route path="/forgot">
          <ForgotPassword />
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
