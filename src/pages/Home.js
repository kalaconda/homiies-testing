import React from 'react';
import NB from "./NavBar"; 

const Home = ({ handleLogOut}) => {
  return (
    <div className="App">
      <NB />
      <div className="white">
        {/* BUTTON NOT WORKING MAKE A DIV INSTEAD A BUTTON ELEMENT -Vujke */}
        <a onClick={() => handleLogOut()}>hello</a>
      <button className="pinkbtn" onClick={() => handleLogOut()}>
          Logout
        </button>
    </div>
    </div>
  );
}

export default Home;