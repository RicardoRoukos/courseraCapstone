import { Link } from 'react-router-dom';

import React from 'react';
import "./App.css";
function Header() {
  return (
    <>
      <nav>
        <div>
        <Link to="/"><img src="logo2.png" alt="SVG" /></Link>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
      
          <li>
            <Link to="/reservations">Reservations</Link>
          </li>
    
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
