import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomeScreen from './components/HomeScreen';

import { BrowserRouter ,Route, Switch} from 'react-router-dom';

import Footer from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import {Nav} from './components/layout/Nav'
import Calculator from './Financing/Calculator';

import AboutUs from './components/layout/AboutUs';
import TradeINCar from './Financing/TradeINCar'
import Contactus from './aboutUs/Contactus';




function App() {
  
  return (
  
    <BrowserRouter>
    <div >
  

     <Nav/>
     <Navbar/>

     <Switch>
       <Route path={"/"}  exact component = {HomeScreen} />
       <Route path={"/calculator"}  component={Calculator} />
       <Route path={"/tradeincar"}  component={TradeINCar} />
       <Route path={"/contactus"}  component={Contactus} />
      

       
    

       
    
     </Switch>

    <AboutUs/>
     <Footer/>
     
    </div>
    </BrowserRouter>
    );
}

export default App;
