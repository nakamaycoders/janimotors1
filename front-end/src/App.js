import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {BrowserRouter as Router } from "react-router-dom";
// import Cards2 from "./components/layout/Cards2";
// import { Header } from './components/layout/Header';
// import Footer from "./components/layout/Footer";
import HomeScreen from './components/HomeScreen';
// import Cardss from './components/layout/Cardss';
// import { Home } from './components/Page/Home';
import { BrowserRouter ,Route, Switch} from 'react-router-dom';
// import { Nav } from 'react-bootstrap';
import Footer from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import {Nav} from './components/layout/Nav'
import Calculator from './Financing/Calculator';


function App() {
  
  return (
  
    <BrowserRouter>
    <div >

     <Nav/>
     <Navbar/>

     <Switch>
       <Route path={"/"}  exact component = {HomeScreen} />
       <Route path={"/calculator"}  component={Calculator} />
      

       
    

       
    
     </Switch>

   
     <Footer/>
     
    </div>
    </BrowserRouter>
    );
}

export default App;
