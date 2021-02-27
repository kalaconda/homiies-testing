import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
 
const welcome = () => {
    return (
        <div className="App">
        <header className="purple">
        <h2> Homiies. </h2>
          <img src={logo} className="App-logo" alt="logo" />
            <Link to="/login">
            <div className="App-link">
            <p>Live together.</p> 
            <p>Be responsible together.</p>
            </div>
            </Link>
        </header>
      </div>
    );
}
 
export default welcome;