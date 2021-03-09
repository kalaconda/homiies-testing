import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import Login from "./pages/Login";
import Tasks from "./pages/Tasks";
import Insights from "./pages/Insights";
import Recent from "./pages/Recent";
import "./App.css";
import { db, auth } from './components/fire';
import Onboarding1 from "./pages/Onboarding1";
import Onboarding2 from "./pages/Onboarding2";

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

  /*** AUTOCOMPLETE FEATURE ***/
  const todoMockData = ["Take out trash", "Clean the floors", "Wash dishes", "Empty Dishwasher"];
  const [search, setSearch] = useState("");

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const openDropdown = () => {
    setIsDropdownOpen((prevOpen) => !prevOpen);
  };

  const addTodo = (todoItem) => {
    if (search.trim() === "") return;
    setTodos([
      ...todos,
      {
        title: todoItem
      }
    ]);
  };

  useEffect(() => {
    if (search !== "") {
      openDropdown();
    }
  }, [search]);

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

  const handleLogOut = () => {
    auth.signOut().then(() => {
      console.log("signout successful")
    }).catch(err => {
      console.log(err, "auth error")
    });
  }

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

  console.log(user)

  /*** REACT ROUTER / NAVIGATION  ***/
  return (
    <div className="App">
      <Router>
        {user ? (
          <>
            <Route exact path="/">
              <Onboarding1 handleLogOut={handleLogOut} />
            </Route>
            <Route exact path="/onboarding1">
              <Onboarding1 handleLogOut={handleLogOut} />
            </Route>
            <Route exact path="/onboarding2">
              <Onboarding2 />
            </Route>
            <Route exact path="/tasks">
              <Tasks closeModalHandler={closeModalHandler} setShow={setShow} show={show} handleSubmit={handleSubmit} todos={todos} inputValue={inputValue} setInputValue={setInputValue} removeTodo={removeTodo} search={search} setSearch={setSearch} openDropdown={openDropdown} isDropdownOpen={isDropdownOpen} todoMockData={todoMockData}/>
            </Route>
            <Route exact path="/insights">
              <Insights closeModalHandler={closeModalHandler} setShow={setShow} show={show} inputValue={inputValue} setInputValue={setInputValue} />
            </Route>
            <Route exact path="/recent">
              <Recent closeModalHandler={closeModalHandler} setShow={setShow} show={show} inputValue={inputValue} setInputValue={setInputValue} />
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
