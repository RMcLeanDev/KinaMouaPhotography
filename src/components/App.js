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
import Prices from './Prices';
import Testimonials from './Testimonials';
import Footer from './Footer.js';
import FAQ from './FAQ';

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
        <Route exact path ='/Prices' component={Prices}/>
        <Route exact path ='/Testimonials' component={Testimonials}/>
        <Route exact path ='/FAQ' component={FAQ}/>
        <Route component={Error404}/>
      </Switch>
      <Footer/>
    </div>
  );
}

const mapStateToProps = state => ({
  authUser: state.authState
})

export default connect(mapStateToProps)(App);
