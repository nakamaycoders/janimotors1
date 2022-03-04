import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {BrowserRouter as Router } from "react-router-dom";
// import Cards2 from "./components/layout/Cards2";
// import { Header } from './components/layout/Header';
// import Footer from "./components/layout/Footer";
import HomeScreen from './components/HomeScreen';
// import Cardss from './components/layout/Cardss';
// import { Home } from './components/Page/Home';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  
  return (
  
    <Router>
    
    <div className="App">
    
    <HomeScreen/>
 
    
    </div>
    </Router>
    );
}

export default App;
