import React, { Component } from 'react';

import { BrowserRouter as Router, Switch,  Link, NavLink,Redirect } from "react-router-dom";
import shop from './images/logoshop.jpg';
import {GoogleLogin} from 'react-google-login';
import { Button } from 'reactstrap';
import {Form ,FormGroup , Label ,Input} from 'reactstrap';
import defaultExport from 'module';
import FacebookLogin from 'react-facebook-login';
import us from './images/us.png';  
import sh from './images/bout.PNG';
import SocialFollow from "./Components/SocialFollow";
import { Route , withRouter } from 'react-router-dom';
import './Register.js'
import Register from './Register';
import Home from './Home';
import Login from './Login';
<<<<<<< HEAD
//imad
=======



>>>>>>> fdd2d74b251d82037feb8d3bcf87615363e8b73e
const App =(props) => {
  
  
  return (<withRouter>
    

      <div className="container">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>


      </Switch>


      </div>
  
    </withRouter>
  );
}
export default App;