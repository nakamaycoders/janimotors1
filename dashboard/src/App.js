import React, { useEffect } from 'react';
import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import "./scss/volt.scss";
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn, getInitialData } from './actions';
import PrivateRoute from './components/Private/PrivateRoute'
import Sidebar from './components/Sidebar'
// import Home  from "./pages/Home";
import Category from './pages/Category/Category';
import AllProducts from './pages/Products/AllProducts';
import CreateProduct from './pages/Products/CreateProduct.js';
import SignIn from './pages/SignIn/SignIn';
import DashboardOverview from './pages/dashboard/DashboardOverview';
// import {EditProductModel} from './pages/Products/EditProductModel'
import UpdateProduct from "./pages/Products/UpdateProduct";
// import Navbar from './components/Navbar';


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
  }, [dispatch,auth.authenticate]);

  return (
    // <Home/>
    <div className='App'>
    
      {auth.authenticate && <>
      <Sidebar /> 
      </>
    }
      <Switch>
        <main className="content">
        <PrivateRoute path="/" exact component={DashboardOverview} />
        <PrivateRoute path="/category/create" component={Category} />
        <PrivateRoute path="/product/all" component={AllProducts} />
        <PrivateRoute path="/product/create" component={CreateProduct} />
        {/* <PrivateRoute path="/product/edit/:productId" component={EditProductModel} /> */}
        <PrivateRoute path="/product/update/:productid" component={UpdateProduct} />

        
        <Route path="/signin" component={SignIn} />
        {/* <Route path="**" component={PageNotFound}/> */}
        </main>
      </Switch>
    </div>
    
  );
}

export default App;
