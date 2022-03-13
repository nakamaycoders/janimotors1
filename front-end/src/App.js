import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeScreen from './components/HomeScreen';
import { BrowserRouter ,Route, Switch} from 'react-router-dom';
import Calculator from './Financing/Calculator';
import Creditapproval from './Financing/Creditapproval';


function App() {
  return (
    <BrowserRouter>
     <Switch>
       <Route path={"/"}  exact component = {HomeScreen} />
       <Route path={"/calculator"}  component={Calculator} />
       <Route path={"/creditapproval"}  component={Creditapproval} />
     </Switch>
    </BrowserRouter>
  );
}

export default App;
