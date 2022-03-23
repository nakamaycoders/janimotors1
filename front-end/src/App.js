import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Page/Home/Home";
import {Route, Switch } from "react-router-dom";
import Calculator from "./components/Page/Financing/Calculator/Calculator";
import ProductList from "./components/Page/ProductPage/ProductList";
import ProductDetail from "./components/Page/ProductPage/ProductDetail";
import AboutUs from "./components/layout/Aboutus/AboutUs";
import Footer from "./components/layout/Footer/index";
import TradeInCar from './components/Page/Financing/TradeIn/TradeINCar'
import Creditapproval from './components/Page/Financing/Creditapproval'
import Contactus from "./components/Page/Contactus/Contactus";
import Event from './components/Page/Event/Event'
import Loader from "./components/layout/Loader/Loader";

function App() {
  return (
    <>
    
        {/* <Route path="/loader" component={Loader} /> */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/calculator" component={Calculator} />
        <Route path="/tradeincar" component={TradeInCar} />
        <Route path="/creditapproval" component={Creditapproval} />
        {/* <Route path="/ourdealership" component={OurDealership} /> */}
        <Route path="/contactus" component={Contactus} />
        <Route path="/event" component={Event} />
        <Route path="/product/:productId" component={ProductDetail} />
        <Route path="/:slug" component={ProductList} />

      </Switch>
      <AboutUs />
      <Footer />
    </>
  );
}

export default App;
