import React from 'react';
import kinaPhoto from '../assets/kina.JPG';
import '../scss/Home.scss';
import downArrow from '../assets/downArrow.png';
import RecentWork from './RecentWork';

function Home(props){

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
        <h1><em>Recent Work</em></h1>
        <RecentWork/>
      </div>
    </div>
  )
}

export default Home;
