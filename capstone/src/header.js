import React from 'react';
import "./App.css";

function Header() {
  return (
    <>
      <nav>
        <div>
        <img src="logo.png" alt="SVG" />
        </div>
        <ul>
          <li>
            <a href="index.js">Home</a>
          </li>
          <li>
            <a href="index.js">About</a>
          </li>
          <li>
            <a href="index.js">Menu</a>
          </li>
          <li>
            <a href="index.js">Reservations</a>
          </li>
          <li>
            <a href="index.js">Order Online</a>
          </li>
          <li>
            <a href="index.js">Login</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
