import React, { useEffect } from 'react';
import "./App.css";
// import {BrowserRouter} from 'react-router-dom'
import "./scss/volt.scss";
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn, getInitialData,getCategory } from './actions';


import Home  from "./pages/Home";

function App() {
  
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)


  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
      
    }
    if(auth.authenticate){
      dispatch(getInitialData());
    }
  }, [auth.authenticate]);

  return (
    <Home/>
  );
}

export default App;
