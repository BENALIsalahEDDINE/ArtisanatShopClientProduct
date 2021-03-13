import React, { Component } from "react";

import "./css/Register.css"

class Register extends Component {
       constructor(props){
    super(props)
    this.state = {
      currentView: "signUp"
    }
  }

  changeView = (view) => {
    this.setState({
      currentView: view
    })
  }

  currentView = () => {
    switch(this.state.currentView) {
      case "signUp":
        return (
          <form id="for">
            <h2 id="htwo">Sign Up!</h2>
            <fieldset id="fiel">
              <legend id="leg">Create Account</legend>
              <ul id="u1">
                <li id="i1">
                  <label id="lab" for="username">Username:</label>
                  <input type="text" id="username1" required/>
                </li>
                <li id="i1">
                  <label id="lab" for="email">Email:</label>
                  <input type="email" id="email1" required/>
                </li>
                <li id="i1">
                  <label id="lab" for="password">Password:</label>
                  <input type="password" id="password1" required/>
                </li>
              </ul>
            </fieldset>
            <button id="butt">Submit</button>
            <button id="butt" type="button" onClick={ () => this.changeView("logIn")}>Have an Account?</button>
          </form>
        )
        break
      case "logIn":
        return (
          <form id="for">
            <h2 id="htwo">Welcome Back To Artisanat!</h2>
            <fieldset id="fiel">
              <legend id="leg">Log In</legend>
              <ul id="u1">
                <li id="i1">
                  <label id="lab" for="username">Username:</label>
                  <input type="text" id="username1" required/>
                </li>
                <li id="i1">
                  <label id="lab" for="password">Password:</label>
                  <input type="password" id="password1" required/>
                </li>
                <li id="i1">
                  <i/>
                  <a id="ha"onClick={ () => this.changeView("PWReset")} href="#">Forgot Password?</a>
                </li>
              </ul>
            </fieldset>
            <button id="butt">Login</button>
            <button  id="butt" type="button" onClick={ () => this.changeView("signUp")}>Create an Account</button>
          </form>
        )
        break
      case "PWReset":
        return (
          <form id="for">
          <h2  id="htwo">Reset Password</h2>
          <fieldset id="fiel">
            <legend id="leg">Password Reset</legend>
            <ul id="u1">
              <li id="i1">
                <em id="ema">A reset link will be sent to your inbox!</em>
              </li>
              <li id="i1">
                <label id="lab" for="email1">Email:</label>
                <input id="inp" type="email1" id="email1" required/>
              </li>
            </ul>
          </fieldset>
          <button id="butt">Send Reset Link</button>
          <button type="button" id="butt" onClick={ () => this.changeView("logIn")}>Go Back</button>
        </form>
        )
      default:
        break
    }
  }


  render() {
    return (
      <section id="sec">
        {this.currentView()}
      </section>
    )
  }
}
export default Register;