import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import instagram from '../assets/instagram.png';

function Header(){

  let headerDisplay;
  const[showHide, setShowHide] = useState(false)

  function toggleNav(){
    if(showHide){
      setShowHide(false)
    } else {
      setShowHide(true)
    }
  }

  if(showHide === false){
    headerDisplay = {header: "hide", menu: "mobileHide"};
    document.getElementsByTagName("body")[0].style = "position: none";
  } else if(showHide){
    headerDisplay = {header: "open", menu: "mobileShow"};
    document.getElementsByTagName("body")[0].style = "position: fixed";
  }

  return(
    <div className="header">
      <div className="linkHome">
        <Link to='/'>Kina Moua</Link>
      </div>
      <div className="desktopHeader">
        <Link to='/'>Home</Link>
        <Link to='/RecentWork'>Recent Work</Link>
        <Link to='/Contact'>Book Me</Link>
        <Link to='/Prices'>Prices</Link>
        <Link to='/Testimonials'>Testimonials</Link>
        <a target="_blank" href="https://www.instagram.com/kinamouamclean/"><img src={instagram}/></a>
      </div>
      <div className="mobileHeader">
        <div className="linkHomeMobile">
          <Link to='/' onClick={() => setShowHide(false)}>Kina Moua</Link>
        </div>
        <div onClick={toggleNav} id="nav-icon2" className={headerDisplay.header}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={headerDisplay.menu}>
            <div className="insideMobileHeader">
              <Link exact to='/' onClick={() => setShowHide(false)}><h3>Home</h3></Link>
              <Link exact to='/RecentWork' onClick={() => setShowHide(false)}><h3>Recent Work</h3></Link>
              <Link to='/Contact' onClick={() => setShowHide(false)}><h3>Book Me</h3></Link>
              <Link to='/Prices' onClick={() => setShowHide(false)}><h3>Prices</h3></Link>
              <Link to='/Testimonials' onClick={() => setShowHide(false)}><h3>Testimonials</h3></Link>
              <a target="_blank" href="https://www.instagram.com/kinamouamclean/"><img src={instagram}/></a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header
