import React from 'react';
import './Navbar.css'

const NavBar = () => {
  return (
    <nav>
        <h3><a href="/" className='tab'>Rony.Sinai</a></h3>
      <ul>
        <li><a href="#aboutWrapper" className='tab'>About</a></li>
        <li><a href="#cardsWrapper" className='tab'>Portfolio</a></li>
        <li><a href="#contactWrapper" className='tab'>Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;