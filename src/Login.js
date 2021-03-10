import React, { Component } from 'react';
import './Login.css';
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
//t


const Login =(props) => {
  
  
  return (<Router>
    <div className="Login">
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
           <li class="apropos">
                 <Link id="apropos" exact activeClassName="active" to="/">A propos</Link>
                 </li>
                 <li class="apropos">
                 <Link id="apropos" exact activeClassName="active" to="/register">S'inscrire</Link>
                 </li>
                 <li class="apropos">
                 <Link id="apropos" exact activeClassName="active" to="/login">Se connecter</Link>
                </li>
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
     <div id="homelogin">
      <center> &nbsp;  &nbsp; </center>
      <br></br>
      </div>
      <div id="sign-in">
             <center><h1><label></label></h1></center> 
      
</div>
        <div className="auth-wrapper">
             
          <div className="auth-inner">
             <div className="costumer">
                  <label id="cos">Nouveau Client ?</label><br/>
                  <p><div id="acc">Créez un compte avec nous et tu pourras : <strong>:</strong></div> </p>
                  <div id="paragraphe">
                  
                 <p>-Vérifier plus vite</p>
                  <p id="x">-Enregistrer plusieurs adresses de livraison</p>
                <p id="y">-Accédez à l'historique de vos commandes</p>
                 <p>-Suivre les nouvelles commandes</p>
                  <p id="z">-Enregistrer des articles dans votre liste de souhaits</p>
                  </div><br/>
              <div id="create">
             <center><button id="buttoncreate"  onClick={()=>{
                     props.history.push({pathname: '/register'});
                     }}><strong>Créer un compte</strong></button></center>
              </div>
              


            </div>
        </div>
      </div>
      </div>
      <br/>
      <div className="emailpsswd" id="emailpsswd">
         <div className="welcome" id="welcome">
             <label id="welcome"> <ul></ul></label><br/>
         </div>
         <div id="auth">
           <div  className="auth-inner" id="authinner">
           <center> <label id="seconnecter"><strong>Se connecter</strong></label> <br/></center>
           <label id="email"><strong>Adresse email</strong></label>
            <input type="text" placeholder="Adresse email" id="emailtext"/>
            <label id="motdepasse"><strong>Mot de passe</strong></label>
            <input type="password" placeholder="Mot de passe" id="email-psswd"/><br/><br/>
            <input type="checkbox" id="checkbox" name="Rester connecté"/>&nbsp;&nbsp;&nbsp;<label id="rester"><strong>Rester connecté</strong></label>
            <br/>
            <br/>
            <div id="signin">

                <center></center><button id="buttonsignin"><strong>Se connecter</strong></button>
             </div>
            <br/>
            <label id="forget" color="black"><Link to="#" ><strong>Mot de passe oublié ?</strong></Link></label>
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
export default Login;