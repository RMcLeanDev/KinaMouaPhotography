import React from 'react';
import '../scss/App.scss';
import Error404 from './Error404';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import '../App.scss';
import About from './About';
import Header from './Header';
import Contact from './Contact';
import AOS from 'aos';

function App(props) {
  
  AOS.init();
  AOS.refresh();

  console.log(props)
  
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path ='/' component={Home}/>
        <Route exact path ='/About' component={About}/>
        <Route exact path ='/Contact' component={Contact}/>
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}

const mapStateToProps = state => ({
  authUser: state.authState
})

export default connect(mapStateToProps)(App);
