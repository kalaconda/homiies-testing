import React from 'react';
import NB from "./NavBar"; 
import "../Onboarding.css";
import { HiOutlineUpload } from 'react-icons/hi';
import { FiCopy } from 'react-icons/fi';

//const Onboarding1 = ({ handleLogOut}) => {
const Onboarding2 = () => {
  return (
    <div className="App">
      <NB />
      <div className="white">
        <div className="onboarding">
        <p id="onboardingtxt">Welcome, Jennifer!</p>
                <h1>Create a group</h1>
                
                <div className="codeopt"><label for="create-group">Group Name</label></div>
                <input type="text" id="create-group" name="create-group"/>
                <div className="codeopt"><label for="code">Group Code</label></div>

                <button className="o-screen-button-style-3">XYFJB
                <span id="copy"><FiCopy/></span>
                </button>
                <button className="o-screen-button-style-4">Save</button>

                <div className="sharecode">
                <span id="share"><HiOutlineUpload/></span>
                <button className="o-screen-button-style-2">Share Code</button>
                </div>
          </div>
        {/*<a onClick={() => handleLogOut()}>
          <div className="pinkbtn">Logout</div>
          </a>*/}
    </div>
    </div>
  );
}

export default Onboarding2;