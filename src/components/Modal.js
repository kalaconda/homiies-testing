import React from "react";
import { BiArrowBack } from 'react-icons/bi';
import plus_button from '../images/plus_button.png';
import "../Modal.css";

const Modal = ({ show, closeModalHandler, inputValue, setInputValue, handleSubmit }) => {
    return (
        <div className="modal-wrapper"
        >
            <div className="modal-header">
                <span onClick={closeModalHandler} className="close-modal-btn"><BiArrowBack/></span>
            </div>
            <div className="modal-content">
                <div className="modal-body">
                {/* get input value and add todo */}
                <form onSubmit={handleSubmit}>
                    <input 
                    className="settaskinput"
                    value= {inputValue} 
                    onChange= {e => setInputValue(e.target.value)} 
                    type="text" 
                    placeholder="Enter task..." 
                    />
            
                    <div className="task-options">
                        <ul>
                            <li>
                                    <p id="column1">Take out trash</p>
                                    <img src={plus_button} id="plusbutton" alt="" />
                            </li>
                            <li>
                                    <p id="column1" >Clean the floors</p>
                                    <img src={plus_button} id="plusbutton" alt="" />
                            </li>
                            <li>
                                    <p id="column1">Wash dishes</p>
                                    <img src={plus_button} id="plusbutton" alt="" />
                            </li>
                            <li>
                                    <p id="column1">Empty Dishwasher</p>
                                    <img src={plus_button} id="plusbutton" alt="" />
                            </li>
                        </ul>
                    </div>

                    <hr></hr>

                    {/* Effort Level */}

                    <div className="effortcontainer">
                        <h3 className="modalheading">Effort Level</h3>
                        <div className="effort">
                            <div className="effort-toggle">
                                <div className="toggle-wrapper">
                                </div>
                            </div>

                            <select className="effort-dropdown">
                                <option value="Daily">Simple</option>
                                <option value="Weekly">Medium</option>
                                <option value="Bi-Weekly">Difficult</option>
                            </select>

                        </div>
                    </div>

                    <hr></hr>

                    {/* Completed By */}

                    <div className="datecontainer">
                        <h3 className="modalheading">Completed By</h3>
                        <form action="date" class="deadline-form">
                            <input type="date" name="deadline" />
                        </form>
                    </div>
                    
                    <hr></hr>
                    
                    <div class="repeatcontainer">
                            <h3 className="modalheading2">Repeat</h3>
                                <div class="toggle-wrapper">
                                    <input id="toggle-1" type="checkbox"/>
                                    <label for="toggle-1">Select</label>
                                </div>
                    </div>

                    <div class="repeatcontainer">
                            <h3 className="modalheading2">Rotation</h3>
                                <div class="toggle-wrapper">
                                    <input id="toggle-2" type="checkbox"/>
                                    <label for="toggle-2">Select</label>
                                </div>
                    </div>

                    {/* Set Task */}
                    <button type="submit" className="btn-cancel">Set Task</button>
                    
                    </form>
                    

                </div>
            </div>
        </div>
    )
}

export default Modal;