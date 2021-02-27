import React from 'react';
import NB from "./NavBar"; 
import TodoItem from "./TodoItem";
import Modal from "../components/Modal";
import { Link } from 'react-router-dom';

/*
  add, display, complete, filter, and delete todos
*/

const Tasks = ({show, setShow, closeModalHandler, inputValue, setInputValue, handleSubmit, todos, errorMsg, removeTodo }) => {
    return (
      <div className="App">
        <NB />
      <div className="white">

          <div className="taskwelcome">
            <h2 class="taskwelcometxt"> Hello! </h2>
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

          <div className="toggle-taskopt">
            <p id="mytask">My Task </p>
            <div class="toggle-wrapper2">
              <input id="toggle-3" type="checkbox"/>
              <label for="toggle-3">Select</label>
            </div>
            <p id="all">All </p>
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