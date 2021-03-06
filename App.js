import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import shop from './images/shopp.PNG';
import {GoogleLogin} from 'react-google-login';
import { Button } from 'reactstrap';
import {Form ,FormGroup , Label ,Input} from 'reactstrap';
import defaultExport from 'module';
import FacebookLogin from 'react-facebook-login';
import us from './images/us.PNG';  
import sh from './images/bout.PNG';
import SocialFollow from "./Components/SocialFollow";


function App() {
  return (<Router>
    <div className="App">
      <div className="logo">
       <nav class="navbar navbar-expand-sm navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">ABOUT <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">REVIEWS</a>
            </li>
          <li class="nav-item">
            <a class="nav-link" href="#">SHOP</a>
          </li>
          <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="dropdown09" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="flag-icon flag-icon-us"> </span> EN</a>
                            <div class="dropdown-menu" aria-labelledby="dropdown09">
                                <a class="dropdown-item" href="#fr"><span class="flag-icon flag-icon-fr"> </span>  FR</a>

                            </div>
                        </li> 
         <li class="nav-item search">
            <a class="nav-link recherche" id="recherche" href="#">&#128269;</a>
          
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
      <center>HOME &nbsp;  / &nbsp;  LOGIN</center>
      <br></br>
      </div>
      <div id="sign-in">
             <center><h1><label>SIGN IN</label></h1></center>
      
</div>
        <div className="auth-wrapper">
             
          <div className="auth-inner">
             <div className="costumer">
                  <label id="cos"><strong>NEW COSTUMER ?</strong></label><br/>
                  <p><div id="acc">Create an account with us and you will be able to <strong>:</strong></div> </p><br></br>
                  <div id="paragraphe">
                  <p>Check out faster</p>
                  <p>Save multiple shipping adresses</p>
                  <p>Access your order history</p>
                  <p>Track new orders</p>
                  <p>Tave items to your Wish List</p>
                  </div><br/>
              <div id="create">

                <center><button id="buttoncreate"><strong>CREATE ACCOUNT</strong></button></center>
              </div>


            </div>
        </div>
      </div>
      </div>
      <br/>
      <div className="emailpsswd" id="emailpsswd">
         <div className="welcome" id="welcome">
             <label id="welcome"> <ul>HI;WELCOME HOME</ul></label><br/>
         </div>
           <label id="email"><strong>EMAIL ADRESS</strong></label>
           <br/>
            <input type="text" placeholder="ENTER YOUR EMAIL" id="emailtext"/>
            <br/>
            <br/>
            <label id="email"><strong>PASSWORD</strong></label>
           <br/>
            <input type="text" placeholder="ENTER YOUR PASSWORD" id="email-psswd"/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div id="signin">

                <button id="buttonsignin"><strong>SIGN IN</strong></button>
             </div>
            <br/>
            <label id="forget" color="black"><Link to="#" ><strong>Forget password ?</strong></Link></label>
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
  
    </Router>
  );
}

export default App;