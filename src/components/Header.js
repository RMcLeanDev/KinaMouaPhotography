import React from 'react';
import { Link } from 'react-router-dom';
import instagram from '../assets/instagram.png';

function Header(){

  return(
    <div className="header">
      <div>
        <Link to='/'>Kina Moua</Link>
      </div>
      <div className="rightSideHeader">
        <Link to='/About'>About</Link>
        <Link to='/Contact'>Book Me</Link>
        <a>Prices</a>
        <a>Testimonials</a>
        <a><img src={instagram}/></a>
      </div>
    </div>
  )
}

export default Header
