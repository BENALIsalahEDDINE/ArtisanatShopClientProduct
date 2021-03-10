import React, { Component } from 'react';
import './Register.css';
import { BrowserRouter as Router, Switch, Route, Link, NavLink,Redirect } from "react-router-dom";
import shop from './images/logoshop.jpg';
import {GoogleLogin} from 'react-google-login';
import { Button } from 'reactstrap';
import {Form ,FormGroup , Label ,Input} from 'reactstrap';
import defaultExport from 'module';
import FacebookLogin from 'react-facebook-login';
import us from './images/us.png';  
import sh from './images/bout.PNG';
import SocialFollow from "./Components/SocialFollow";
import { withRouter } from 'react-router-dom';
import './Register.js'
import './Login.js'

import { faHome } from '@fortawesome/free-solid-svg-icons';



function Register() {
  return (<Router>
    <div className="Register">
      <div className="logo">
       <nav id="navbar"class="navbar navbar-expand-sm navbar-black bg-white">
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <img src={shop} id="imageshop"/>
              <li class="nav-item search">
            <label class="nav-link recherche" id="recherche" href="#">&#128269;</label>
           </li> 
           <li class="searchnav">
           <input type="text" placeholder="Rechercher un produit ou une catégorie" id="navrecherche"/>&nbsp;
           <input type="button" id="buttonsearch" value="Rechercher"/>
           </li>
           
                 <li id="apropos" exact activeClassName="active" to="/">A propos</li>
                 
              
           
                 
          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="dropdown09" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="flag-icon flag-icon-us"> </span> EN</a>
                            <div class="dropdown-menu" aria-labelledby="dropdown09">
                                <a class="dropdown-item" href="#fr"><span class="flag-icon flag-icon-fr"> </span>  FR</a>

                            </div>
                        </li> 
           
          <li class="nav-item login">
                 <a class="fa-user" id="fa-user" href="#" aria-hidden="true" fa><img id="user"src={us}/></a>
          </li>
          <li class="nav-item login">
                 <a class="fa-user" id="fa-shop" href="#" aria-hidden="true" fa><img id="shop"src={sh}/></a>
          </li>
          </ul>
          <div class="social-part">
            <i class="fa fa-facebook" aria-hidden="true"></i>
            <i class="fa fa-twitter" aria-hidden="true"></i>
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </div>
        </div>
      </nav>
     
      <br/>
      
         <div id="auth">
           <div  className="auth-inner" id="authinner" >
           <center> <label id="seconnecter"><strong>Nouveau Client ?</strong></label> <br/></center>
           <label id="prenom"><strong>Prénom</strong></label>
            <input type="text" placeholder="Prénom" id="prenomtext"/> 
            <label id="nom"><strong>Nom</strong></label>
            <input type="text" placeholder="Nom" id="nomtext"/>
             <label id="email1"><strong>Adresse email</strong></label>
            <input type="text" placeholder="Adresse email" id="emailtext"/>
            <label id="motdepasse1"><strong>Mot de passe</strong></label>
            <input type="password1" placeholder="Mot de passe" id="email-psswd"/><br/><br/>
            <label id="adressedeff"><strong>Adresse par défaut</strong></label>
            <input type="text" placeholder="Adresse par défaut" id="adressedeftext1"/>
            <br/>
            <br/>
            <div id="signin">

                <center></center><button id="buttonsignin"><strong>Créer un compte</strong></button>
             </div>
            <br/>
            </div>
            </div>
            
      </div><br/><br/><br/><br/><br/>
      <footer>
        <div class="socio">
             <p><strong>HEAR IT FIRST</strong></p>
             <br></br>
             <input type="text" placeholder="ENTER YOUR EMAIL" id="emailfooter" />
             <p id="f">&#62;</p>
             <br/>
             <p><strong>THE FUN STUFF</strong></p>
             <div className="container" id="Rsociaux">
             <SocialFollow />
             </div>
             <div class="Help">
               <strong>HELP</strong>
               <br/><br/><br/>
               <div class="Helpinstructions">
                   <p><a href="#" Link="black">Help center</a></p>
                   <a href="#"><p id="contactus">Contact us</p></a>
                   <a href="#"> <p id="producthelp">Product Help</p></a>
                   <a href="#"> <p id="warranty">Warranty</p></a>
                   <a href="#"> <p id="orderstatus">Order Status</p></a>
               </div>

             </div>
             <div class="Hello">
               <strong>SAY HELLO</strong>
               <br/><br/><br/>
               <div class="Helloinstructions">
                  <p>Phone : 0677702165</p>
                  <br/>
                  <br/>
                  <p id="emailhelp">Email : Artisanat12@gmail.com</p>
               </div>

             </div>
        </div>
      </footer>
      </div>

      <div className="container">
      
      </div>
      
    </Router>
  );
}
export default Register;
















