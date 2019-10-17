import React from 'react';
import NavMenu from './navMenu'
import Welcome from './welcome'
import About from './about'
import Services from './services'
import LGBTQ from './lgbtq'
import Consultation from './consultation'
import Instagram from './instagram'
import Facebook from './facebook'
import Contact from './contact'

const Body= () => {
  return (
    <div className="sections">
      <NavMenu/>    
      <Welcome/>
      <About/>
      <Services/>
      <LGBTQ/>
      <Consultation/> 
      <Instagram/>
      <Facebook/>
      <Contact/>
    </div>
  );
};

export default Body;
