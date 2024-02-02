import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="container">
        <Link className="navbar-brand" to="/">Discover Aswan</Link>
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${showMenu ? 'show' : ''}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/landscapes">Landscapes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
