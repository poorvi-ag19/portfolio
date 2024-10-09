import React from 'react';
import './header.css'

const Header = () => {
  return (
    <header>
      <h1 className='box'>My Portfolio</h1>
      <nav className='firstbar'>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
