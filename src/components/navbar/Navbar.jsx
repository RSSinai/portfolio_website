import React from 'react';
import './Navbar.css'

const NavBar = () => {
  return (
    <nav>
        <h3><a href="/" className='tab'>Rony.Sinai</a></h3>
      <ul>
        <li><a href="/" className='tab'>About</a></li>
        <li><a href="/" className='tab'>Services</a></li>
        <li><a href="/" className='tab'>Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;