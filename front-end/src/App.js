import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Page/Home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Calculator from "./components/Page/Financing/Calculator/Calculator";
import ProductList from "./components/Page/ProductPage/ProductList";
import ProductDetail from './components/Page/ProductPage/ProductDetail'
import TradeInCar from './components/Page/Financing/TradeIn/TradeINCar'
import Creditapproval from './components/Page/Financing/Creditapproval'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:productSlug/:productId/p" component={ProductDetail} /> 
        <Route path="/calculator" component={Calculator} />
        <Route path="/:slug" component={ProductList} />
        <Route path="/tradeincar" component={TradeInCar} />
        <Route path="/creditapproval" component={Creditapproval} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
