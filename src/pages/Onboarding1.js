import React from 'react';
import NB from "./NavBar"; 
import "../Onboarding.css";
import {Link } from "react-router-dom";

const Onboarding1 = ({ handleLogOut}) => {
//const Onboarding1 = () => {
  return (
    <div className="App">
      <NB />
      <div className="white">
        <div className="onboarding">
                <p id="onboardingtxt">Welcome!</p>
                <h1 id="onboardingtxt">Let's get started</h1>

                <div className="codeopt">
                  <label htmlFor="code">Have a group already? 
                  <br></br>
                  Join via code</label>
                </div>

                <div id="onboardtxt2">code</div>
                <input type="text" id="code" name="code"></input>
                <button className="o-screen-button-style-1">Join Group</button>
                <Link to="/onboarding2"><button className="o-screen-button-style-2">Create a group</button></Link>
          </div>
        <a onClick={() => handleLogOut()}>
          <div className="pinkbtn">Logout</div>
          </a>
    </div>
    </div>
  );
}

export default Onboarding1;