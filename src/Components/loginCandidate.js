import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Data from "./Data";
import Ilustration from "../Images/login-ilustration.png";
import '../Styles/logInApplicant.css';

class Loginapplicant extends Component {
  state = {
    emailInput: "",
    email: "",
    name: "",
    arr: ""
  };

  addEmail = event => {
    this.setState({
      emailInput: event.target.value
    });
  };

  checkEmail = () => {
    console.log(this.state.arr, "=> state");
    this.state.arr.filter(element => {
      console.log(element.email, "=> element");
      //console.log(this.state.emailInput, " => state")
      if (element.email === this.state.emailInput) {
        console.log("se encontro");
        //withRouter de react-router-dom
        //location.push
      } else {
        console.log("error");
      }
    });
  };
  componentDidMount() {
    let arr = [];
    Data.data.map(element => {
      element.candidates.map(doc => {
        console.log(doc);
        arr.push(doc);
      });
    });
    this.setState({ arr });
  }

  render() {
    console.log(this.state.arr);
    const { emailInput } = this.state;
    return (
      <div className="cointenerLogIn">
        <div>
        <img className="imgLogin" src={Ilustration} alt="" />
        <p className="title" >Write your email</p>
        <input className="inputTxt"
          type="text"
          value={emailInput}
          placeholder="Please add your email"
          onChange={this.addEmail}
        ></input>
        <br/>
        <Link to="/welcome">
          <button className="buttonLoging" onClick={this.checkEmail}>Log in</button>
        </Link>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Loginapplicant;