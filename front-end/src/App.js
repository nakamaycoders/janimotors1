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
import AllProducts from "./components/Page/ProductPage/AllProducts";
import Event from './components/Page/Event/Event'
import Loader from "./components/layout/Loader/Loader";
import LinearStepper from "./components/Page/Financing/CreditTwo/LinearStepper";
function App() {
  return (
    <>
    
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/calculator" component={Calculator} />
        <Route exact path="/view-all-inventories" component={AllProducts} />
        <Route path="/view-all-inventories/:keyword"  component={AllProducts} />
        <Route exact path="/tradeincar" component={TradeInCar} />
        {/* <Route path="/view-all-inventories/:keyword" component={SearchProducts} /> */}
        <Route exact path="/creditapproval" component={LinearStepper} />
        {/* <Route path="/ourdealership" component={OurDealership} /> */}
        <Route exact path="/contactus" component={Contactus} />
        <Route exact path="/event" component={Event} />
        <Route path="/product/:productId" component={ProductDetail} />
        <Route path="/:slug" component={ProductList} />

      </Switch>
      <AboutUs />
      <Footer />
    </>
  );
}

export default App;
