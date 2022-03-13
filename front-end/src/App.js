import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Page/Home/Home";
import {Route, Switch } from "react-router-dom";
import Calculator from "./components/Page/Financing/Calculator/Calculator";
import ProductList from "./components/Page/ProductPage/ProductList";
import ProductDetail from "./components/Page/ProductPage/ProductDetail";
import AboutUs from "./components/layout/Aboutus/AboutUs";
import Footer from "./components/layout/Footer/index";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:productSlug/:productId/p" component={ProductDetail} />
        <Route path="/calculator" component={Calculator} />
        <Route path="/:slug" component={ProductList} />
      </Switch>
      <AboutUs />
      <Footer />
    </>
  );
}

export default App;
