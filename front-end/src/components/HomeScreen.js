import React from 'react'
// import { Nav, Navbar } from 'react-bootstrap';
import Cards2 from './layout/Cards2'
import {Cardss} from './layout/Cardss';

import {Banner} from './layout/Banner'
import {Search} from './layout/Search/index'



function HomeScreen() {
  return (
    
    <div>
      
      

      <Banner/>
      <Search/>
      <Cardss/>
      <Cards2 />
      

    </div>
  );
}

export default HomeScreen;
