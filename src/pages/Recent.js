import React from 'react';
import NB from "./NavBar"; 
import Modal from "../components/Modal";
import { Link } from 'react-router-dom';
import emoji from '../images/emoji.jpg';
import comment from '../images/comment.jpg';

/*
  add, display, complete, filter, and delete todos
*/

const Recent = ({show, setShow, closeModalHandler, inputValue, setInputValue }) => {
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

      <div className="recent-tile">
        <div className="content">
            <header><b class="recent-name">Mikayla</b> completed 'Take out the Trash'</header>
            <p class="time">47min ago</p>
      </div>
      <div className="reactions">
                <button><img className="recent-reaction" src={emoji} alt="add emoji reaction"/></button>
                <button><img className="recent-reaction" src={comment} alt="add comment"/></button>
        </div> 
      </div>

          <button onClick={() => setShow(true)} className="btn-openModal">+ Task</button>
          {/* pop up modal for add task */}
          {show && <Modal closeModalHandler={closeModalHandler} inputValue={inputValue} setInputValue={setInputValue} />}
      </div>
    </div>
    );
}
 
export default Recent;