import React from 'react';
import {store} from '../index';
import {testFunction} from '../actions/index';
import kinaPhoto from '../assets/kina.JPG';
import '../scss/Home.scss';
import downArrow from '../assets/downArrow.png';
import RecentWork from './RecentWork';

function Home(props){

  function testRedux(){
    store.dispatch(testFunction())
  }

  return(
    <div>
      <div className="homeComponent">
        <div className="leftHome">
          <img src={kinaPhoto}/>
        </div>
        <div className="rightHome">
          <p>Hello, </p>
          <hr/>
          <h1>I'm a photographer based out of Vancouver, WA. I find joy in capturing life's most precious moments.</h1> 
        </div>
      </div>
      <div>
        <img src={downArrow} className="downArrow"/>
        <h1><em>Recent Work</em></h1>
        <RecentWork/>
      </div>
    </div>
  )
}

export default Home;
