import React from 'react'
// import { Nav, Navbar } from 'react-bootstrap';
import Cards2 from './layout/Cards2'
import {Cardss} from './layout/Cardss';
import Footer from './layout/Footer/index'
import {Nav} from "./layout/Nav/index"
import {Navbar} from './layout/Navbar/index'
import {Banner} from './layout/Banner'
import {Search} from './layout/Search/index'
import AboutUs from './layout/AboutUs'


function HomeScreen() {
  return (
    
    <div>
      
      <Nav/>
     <Navbar/>

      <Banner/>
      <Search/>
      <Cardss/>
      <Cards2 />
      <AboutUs/>
      <Footer/> 

    </div>
  );
}

export default HomeScreen;
