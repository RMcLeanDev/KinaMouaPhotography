import React, {useEffect} from 'react';
import kinaPhoto from '../assets/kina.JPG';
import '../scss/Home.scss';
import About from './About';
import downArrow from '../assets/downArrow.png';

function Home(props){

  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
},[])

  return(
    <div>
      <div className="homeComponent">
        <div className="leftHome">
          <img src={kinaPhoto} alt=""/>
        </div>
        <div className="rightHome">
          <p>Hello, </p>
          <hr/>
          <h1>I'm a photographer based out of Vancouver, WA. I find joy in capturing life's most precious moments.</h1> 
        </div>
      </div>
      <div> 
        <img src={downArrow} className="downArrow" alt=""/>
        <h1><em>About My Art</em></h1>
        <About/>
      </div>
    </div>
  )
}

export default Home;
