import React from 'react';
import '../scss/App.scss';
import Error404 from './Error404';
import Home from './Home';
import {Routes, Route} from 'react-router-dom';
import '../App.scss';
import RecentWork from './RecentWork';
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
      <Routes>
        <Route exact path ='/' element={<Home/>}/>
        <Route exact path ='/RecentWork' element={<RecentWork />}/>
        <Route exact path ='/Contact' element={<Contact />}/>
        <Route exact path ='/Prices' element={<Prices />}/>
        <Route exact path ='/Testimonials' element={<Testimonials />}/>
        <Route exact path ='/FAQ' element={<FAQ />}/>
        <Route element={Error404}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
