import React, { useEffect } from 'react';
import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import "./scss/volt.scss";
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn, getInitialData,getCategory } from './actions';
import PrivateRoute from './components/Private/PrivateRoute'
import Sidebar from './components/Sidebar'

import Home  from "./pages/Home";
import Category from './pages/Category/Category';
import Products from './pages/Products/Products';
import SignIn from './pages/SignIn/SignIn';
import DashboardOverview from './pages/dashboard/DashboardOverview';
import Navbar from './components/Navbar';

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
    // <Home/>
    <div className='App'>
    
      {auth.authenticate && <>
      <Sidebar /> 
      <Navbar/>
      </>
    }
      <Switch>
        <main className="content">
        <PrivateRoute path="/" exact component={DashboardOverview} />
        <PrivateRoute path="/category/create" component={Category} />
        <PrivateRoute path="/product/create" component={Products} />
        
        {/* <Route path="**" component={PageNotFound}/> */}
        <Route path="/signin" component={SignIn} />
        </main>
      </Switch>
    </div>
    
  );
}

export default App;
