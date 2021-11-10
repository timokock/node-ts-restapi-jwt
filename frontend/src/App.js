import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'popper.js';
import './styles/App.css';

import Navigation from './components/Navigation';
import PhotoList from './components/PhotoList';
import UploadPhoto from './components/UploadPhoto';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';
import requireAuth from './components/IsLoggedIn';

function App() {
  return (
      <Router>
        <Navigation />
        <div className="container p-4">
          <Route path='/' exact component={Home}/>
          <Route handler={requireAuth} path='/photos' component={PhotoList}/>
          <Route path='/edit/:id' component={UploadPhoto}/>
          <Route path='/upload' component={UploadPhoto}/>
          <Route path='/register' component={Register}/>
          <Route path='/login' component={Login}/>
          <Route path='/profile' component={Profile}/>
        </div>
      </Router>
  );
};

export default App;