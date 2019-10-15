import React from 'react';
import './NavStyles.sass'

const NavMenu = () => {
  return (
    <div className="nav">
    	<ul className="nav-list">
        <li><a href="#welcome">Welcome</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#lgbtq">LGBTQ</a></li>
        <li><a href="#consultation">Consultation</a></li>
        <li><a href="#social">Social</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  )
};

export default NavMenu;
