import React from "react";
import NB from "./NavBar"; 

const Login = (props) => {

    const {
        email, 
        setEmail, 
        password, 
        setPassword, 
        handleLogin, 
        handleSignup, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError 
    } = props;

    return (
    <section className="login">
      <NB />
          <div className="loginContainer">

          <h1 id="onboardingtxt">Create A Profile</h1>
          <div id="profilepic"></div>

            <div className="inputs">
              <label htmlFor="name">Your Email</label>
              <input
                className="logininput"
                type="text"
                required
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="spin"></span>
            </div>

            <div className="inputs">
              <p className="errorMsg">{emailError}</p>
              <label htmlFor="pass">Set Password</label>
                <input
                  className="logininput"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="spin"></span>
            </div>

            <p className="errorMsg">{passwordError}</p>
            <div className="btnContainer">
              {hasAccount ? (
                <>
                  <button className="pinkbtn" onClick={handleLogin}>Sign In</button>

                  <p>
                    Don't have a account?
                    <span onClick={() => setHasAccount(!hasAccount)}> Sign Up</span>
                  </p>
                </>
              ) : (
                <>
                  <button className="pinkbtn" onClick={handleSignup}>Continue</button>
              
                  <p id="loginopt">
                    Have an account?
                    <span onClick={() => setHasAccount(!hasAccount)}> Sign in</span>
                  </p>
                </>
              )}
      </div>
      </div>
    </section>
  );
};

export default Login;
