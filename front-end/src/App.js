import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Page/Home/Home';
import { BrowserRouter ,Route, Switch} from 'react-router-dom';
import Calculator from './components/Page/Financing/Calculator/Calculator';
import Creditapproval from './components/Page/Financing/Creditapproval';


function App() {
  return (
    <BrowserRouter>
     <Switch>
       <Route path={"/"}  exact component = {Home} />
       <Route path={"/calculator"}  component={Calculator} />
       <Route path={"/creditapproval"}  component={Creditapproval} />
     </Switch>
    </BrowserRouter>
  );
}

export default App;
