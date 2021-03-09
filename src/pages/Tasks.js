import React from 'react';
import NB from "./NavBar"; 
import TodoItem from "./TodoItem";
import Modal from "../components/Modal";
import { Link } from 'react-router-dom';
import { GrFormClose } from 'react-icons/gr';

/*
  add, display, complete, filter, and delete todos
*/

const Tasks = ({show, setShow, closeModalHandler, inputValue, setInputValue, handleSubmit, todos, removeTodo }) => {
    return (
      <div className="App">
        <NB />
      <div className="white">

          <div className="taskwelcome">
            <h2 className="taskwelcometxt"> Good morning, 
            <br></br>
            Jennifer </h2>
          </div>
          <ul className="tasknav">
            <Link to ="/recent" className="task-link">
              <h3> Recent </h3>
            </Link>
            <Link to ="/tasks" className="task-link">
              <h3> Tasks </h3>
            </Link>
            <Link to ="/insights" className="task-link">
              <h3> Insights </h3>
            </Link>
          </ul>

          <div className="claimsection">
            <div className="requestitem">
              <div className="request-content">
                <p>Clean Stove</p>
                <p id="request-date">03/20/2021</p>
              </div>
              <div className="request-content2">
                <button className="claimbtn">Claim</button>
                <span id="closebtn">< GrFormClose/></span>
              </div>
            </div>
          </div>
          <div className="taskstoggle">
            <div className="foryoucontainer">
              <div className="foryou">
                <p>For You</p>
              </div>
              <div className="everyone">
                <p id="taskstog-1">Everyone</p>
              </div>
            </div>
          </div>
          <button onClick={() => setShow(true)} className="btn-openModal">+ Task</button>
          {/* pop up modal for add task */}
          {show && <Modal closeModalHandler={closeModalHandler} inputValue={inputValue} setInputValue={setInputValue} handleSubmit={handleSubmit}/>}
          {/*<p className="errorMsg">{errorMsg}</p>*/}
          <TodoItem removeTodo={removeTodo} todos={todos} />
      </div>
    </div>
    );
}
 
export default Tasks;