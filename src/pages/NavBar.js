import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import logo60x60 from '../images/icon60x60.png';
import "../Navbar.css";
 
function NavBar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <div className="navbar-fix">
          <div className="navbar-items">
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div>
          <div className="navbar-items">
            <img src={logo60x60} className="App-logo2" alt="logo" />
          </div>
        </div>
      </div>

      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
      <ul className="nav-menu-items" onClick={showSidebar}>
        <li className="navbar-toggle">
          <Link to="#" className="menu-bars">
            <AiIcons.AiOutlineClose />
          </Link>
        </li>
        {SidebarData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          )
        })}
      </ul>
      </nav>
    </>
  );
}

export default NavBar;