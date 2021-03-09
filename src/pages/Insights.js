import React from 'react';
import NB from "./NavBar"; 
import Modal from "../components/Modal";
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { RiArrowLeftSFill } from 'react-icons/ri'
import { RiArrowRightSFill } from 'react-icons/ri'

/*
  add, display, complete, filter, and delete todos
*/

const Insights = ({show, setShow, closeModalHandler, inputValue, setInputValue }) => {
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

          <div className="cardoutline">
            {/*progress bar */}
              <div className="cardheader">
                  <p>Number of Completed Tasks</p>
              </div>
                <div className="multigraph">
                    <span className="tooltip">0/0</span>
                    <span className="graph"></span>
                </div>
            {/* insights slider */}
              <div className="insightslide">
                <RiArrowLeftSFill/><p> this month </p><RiArrowRightSFill/>
              </div>
            {/*users*/}
            <div className="insightcontent">
                <div className="insightalign">
                    <FaUserCircle/><p>0/0</p>
                </div>
                <div className="insightalign">
                    <FaUserCircle/><p>0/0</p>
                </div>
            </div>
            <div className="insightcontent2">
                <div className="insightalign">
                    <FaUserCircle/><p>0/0</p>
                </div>
                <div className="insightalign">
                    <FaUserCircle/><p>0/0</p>
                </div>
            </div>
          </div>   
          
          {/*effort distribution*/}
          <div className="cardoutline2">
              <div className="cardheader">
                  <p>Effort Distribution</p>
              </div>
              <div class="pie-chart"></div>
              {/*users*/}
            <div className="insightcontent3">
                <div className="insightalign">
                    <FaUserCircle/><p>0/0</p>
                </div>
                <div className="insightalign">
                    <FaUserCircle/><p>0/0</p>
                </div>
            </div>
            <div className="insightcontent4">
                <div className="insightalign">
                    <FaUserCircle/><p>0/0</p>
                </div>
                <div className="insightalign">
                    <FaUserCircle/><p>0/0</p>
                </div>
            </div>
          </div>
          <button onClick={() => setShow(true)} className="btn-openModal">+ Task</button>
          {/* pop up modal for add task */}
          {show && <Modal closeModalHandler={closeModalHandler} inputValue={inputValue} setInputValue={setInputValue} />}
      </div>
    </div>
    );
}
 
export default Insights;