import React from 'react';
import NB from "./NavBar"; 

const Home = ({ handleLogOut}) => {
  return (
    <div className="App">
      <NB />
      <div className="white">
      <button className="pinkbtn" onClick={handleLogOut}>
          Logout
        </button>
    </div>
    </div>
  );
}

export default Home;