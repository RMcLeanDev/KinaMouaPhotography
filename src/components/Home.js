import React from 'react';
import {store} from '../index';
import {testFunction} from '../actions/index';
import kinaPhoto from '../assets/kina.JPG';
import '../scss/Home.scss';

function Home(props){

  function testRedux(){
    store.dispatch(testFunction())
  }

  return(
    <div className="homeComponent">
      <div className="leftHome">
        <img src={kinaPhoto}/>
      </div>
      <div className="rightHome">
        <p>Hello, </p>
        <hr/>
        <h1>I'm a photographer based out of Los angeles, CA. I'm lucky to travel the world documenting this beautiful planet of ours.</h1> 
      </div>
    </div>
  )
}

export default Home;
