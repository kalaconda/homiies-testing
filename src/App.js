import React, { useState, useEffect, Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Modal from "./components/Modal";
import { v4 as uuidv4 } from 'uuid';
import Login from "./pages/Login";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import TodoItem from "./pages/TodoItem";
import Insights from "./pages/Insights";
import "./App.css";
import { db, auth } from './components/fire';


function App() {

  /*** TODO LIST  ***/

  /* input value */
  const [inputValue, setInputValue] = useState("");
  /* todos */
  const [todos, setTodos] = useState([]);
  /* error message for empty input field */
  const [errorMsg, setErrorMsg] = useState("")
  /* submit / prevent empty input field */
  const handleSubmit = e => {
    e.preventDefault();
    setErrorMsg("");
    if(inputValue.trim() === ""){
      setErrorMsg("Task can not be empty");
      return;
    }
  /* get value of todos that are submitted in input field */
    setTodos([...todos, { todoText: inputValue, todoId: uuidv4() }]);
    setInputValue("");
  };
  /* removing tasks */
  const removeTodo = (id) => {
    setTodos(todos.filter((todoItem) => todoItem.todoId !== id)); 
  }

  /*** SAVING DATA ***/

  const data = {
    task: "todoText",
    completed: "completed"
  };


  /*** MODAL COMPONENT ***/

  /* show modal */
  const [show, setShow] = useState(false);
  /* close modal */
  const closeModalHandler = () => setShow(false);

  /*** LOGIN SYSTEM  ***/
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
      auth.signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
          default:
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
      auth.createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
          default:
        }
      });
  };

  function handleLogOut() {
    auth.signOut();
  }

  const authListener = () => {
    auth.onAuthStateChanged((user) => {
      clearInputs();
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  useEffect( () => { 
   db.collection("users").doc(user.uid).collection("todos").add(data).then((docRef) => {
      this.myListOfItems.push(data);
      this.$store.items.add(data)
      console.log("Document written with ID: ", docRef.id);
    })
  .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }, [])

  /*** REACT ROUTER / NAVIGATION  ***/
  return (
    <div className="App">
      <Router>
        {user ? (
          <>
            <Route exact path="/">
              <Home handleLogOut={handleLogOut} />
            </Route>
            <Route exact path="/home">
              <Home handleLogOut={handleLogOut} />
            </Route>
            <Route exact path="/tasks">
              <Tasks closeModalHandler={closeModalHandler} setShow={setShow} show={show} handleSubmit={handleSubmit} todos={todos} inputValue={inputValue} setInputValue={setInputValue} removeTodo={removeTodo}/>
            </Route>
            <Route exact path="/insights">
              <Insights closeModalHandler={closeModalHandler} setShow={setShow} show={show} inputValue={inputValue} setInputValue={setInputValue} />
            </Route>
          </>
        ) : (
          <Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}
          />
        )}
      </Router>
    </div>
  );
}

export default App;
