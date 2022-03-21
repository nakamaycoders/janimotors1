import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
<<<<<<< Updated upstream
import ScrollToTop from "../src/components/layout/ScrollToTop"
=======
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
};
>>>>>>> Stashed changes

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
<<<<<<< Updated upstream
      <React.StrictMode>
       <ScrollToTop> 
        <App />
      </ScrollToTop>
      </React.StrictMode>
=======
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
>>>>>>> Stashed changes
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
