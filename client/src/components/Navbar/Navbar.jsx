import React from 'react';
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className = "navbar-main-div">
      <nav className = "nav-main">
        <ul className='nav-ul'>
          <li className = 'nav-li'>
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className = 'nav-li'>
            <a className="nav-link" href="/#about">About</a>
          </li>
          <li className = 'nav-li'>
            <a className="nav-link" href="/#Skills">Skills</a>
          </li>
          <li className = 'nav-li'>
            <a className="nav-link" href="/#youtube">You Tube</a>
          </li>
          <li className = 'nav-li'>
            <a className="nav-link" href="/#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
      
  
    )
};

export default Navbar;
