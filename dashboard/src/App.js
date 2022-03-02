import "./App.css";
import {BrowserRouter} from 'react-router-dom'
import "./scss/volt.scss";
import Home  from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
    <Home/>
  </BrowserRouter>
  );
}

export default App;
