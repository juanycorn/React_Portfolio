import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink to="/" className="navbar-brand" style={{ fontSize: '30px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Juan Cornejo</NavLink>
      <nav className="navbar-nav ml-auto">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" activeclassname="active">About Me</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/portfolio" className="nav-link" activeclassname="active">Portfolio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link" activeclassname="active">Contact</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/resume" className="nav-link" activeclassname="active">Resume</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

