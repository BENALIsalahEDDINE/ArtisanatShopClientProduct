import React, { Component } from "react";

import { Link } from "react-router-dom";

import { ProductConsumer } from "../globalData/Context";
import SimplePopOver from '../popover';




export default class Header extends Component {

  state = {
    search: "",


  };

  handleOnChange = (e) => {
    e.preventDefault();

    this.setState({ [e.target.name]: e.target.value });
  };




  render() {
    return (
      <>
      <ProductConsumer>
      {(value) => {
                        return (
                          <div>
        <div class="header--sidebar" />
        <header class="header">
          <div class="header__top">
            <div class="container-fluid">
              <div class="row">
                <div id="pop"class="col-lg-6 col-md-8 col-sm-6 col-xs-12 ">
                  <p>
                  Avenue Iberia , Tanger, Maroc Téléphone : +212 6428-55358
                  </p>
                  </div>
                    <SimplePopOver connectUser={value.connectUser} user={value.user} disconnectUser={value.disconnectUser} signUpUser={value.signUpUser}></SimplePopOver>
                  </div>
                </div>      
              </div>
            
          <nav class="navigation">
            <div class="container-fluid">
              <div class="navigation__column left">
                <div class="header__logo">
                  <a class="ps-logo" >
                    <Link to="/">
                      <img src="images/logo.png" alt="" />
                    </Link>
                  </a>
                </div>
              </div>
              <div class="navigation__column center">
                <ul class="main-menu menu">
                  <li class="menu-item ">
                    <Link to="/">Accueil</Link> 
                    <ul class="sub-menu">
                      <li class="menu-item">
                        <a href="index.html">Accueil </a>
                      </li>
                    
                    </ul> 
                  </li>
                  {/* <li class="menu-item">
                    <a href="/Register">Se connecter / S'inscrire</a>
                  </li> */}
                  
                   <li class="menu-item  ">
                    <a href="/forum">Forum</a>               
                  </li>
                  <li class="menu-item">
                    <a  style={{ cursor: "pointer", marginBottom: "20px" }}
                  onClick={() => value.filterProductsByIdCat(1)}>Textile</a>
                  </li>
                  <li class="menu-item">
                    <a style={{ cursor: "pointer", marginBottom: "20px" }}
                  onClick={() => value.filterProductsByIdCat(2)}>Cuir</a>
                  </li>
                  <li class="menu-item">
                    <a style={{ cursor: "pointer", marginBottom: "20px" }}
                  onClick={() => value.filterProductsByIdCat(3)}>Tapis</a>
                  </li>
                  <li class="menu-item">
                    <a style={{ cursor: "pointer", marginBottom: "20px" }}
                  onClick={() => value.filterProductsByIdCat(4)}>Vannerie</a>
                  </li>
                  <li class="menu-item">
                    <a style={{ cursor: "pointer", marginBottom: "20px" }}
                  onClick={() => value.filterProductsByIdCat(5)}>Broderie</a>
                  </li> 
                  
                  
                 
                  <li class="menu-item ">
                    <a href="contact-us.html">Contact</a>
                    <ul class="sub-menu">
                      <li class="menu-item">
                        <a href="contact-us.html">Contact Us</a>
                      </li>
                   
                    </ul>
                  </li> 
                </ul>
              </div>
              <div class="navigation__column right">
                <form class="ps-search--header">
                  <input
                    autocomplete="off"
                    class="form-control"
                    type="text"
                    name="search"
                    placeholder="Chercher Produit..."
                    value={this.state.search}
                    onChange={this.handleOnChange}
                  />
                  <ProductConsumer>
                    {(value) => (
                      <button
                        onClick={(e) =>
                          value.searchProduct(e, this.state.search)
                        }
                      >
                        <i class="ps-icon-search" />
                      </button>
                    )}
                  </ProductConsumer>
                </form>
                <div class="ps-cart">
                  <Link to="/cart">
                    <a class="ps-cart__toggle" href="/">
                      <ProductConsumer>
                        {(value) => (
                          <span id="sp" style={{ width: "26px", height: "26px" }}>
                            <i style={{ fontSize: "18px" }}>
                              {value.cart.length}
                            </i>
                          </span>
                        )}
                      </ProductConsumer>

                      <i class="ps-icon-shopping-cart" />
                    </a>
                  </Link>

                 
                </div>
                <div id="dv" class="menu-toggle">
                  <span />
                </div>
              </div>
            </div>
          </nav>
        </header></div>)}}
        </ProductConsumer>
      </>
    );
  }
}
