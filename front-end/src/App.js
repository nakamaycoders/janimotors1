import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Page/Home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Calculator from "./components/Page/Financing/Calculator/Calculator";
import Product from "./components/Page/ProductPage/Product";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/calculator" component={Calculator} />
        <Route path="/:slug" component={Product} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
