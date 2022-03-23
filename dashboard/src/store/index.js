import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  newProductReducer,
  productDetailsReducer,
  productsReducer, //Delete/Update
  productReducer,  //getProducts
} from "../reducers/productReducer";

import {categoryReducer} from '../reducers/categoryReducer';
import {authReducer} from '../reducers/authReducer';


const reducer = combineReducers({
    auth:authReducer,
  category: categoryReducer,
//   products: productsReducer,
  productDetails: productDetailsReducer, 
  newProduct: newProductReducer,
  product: productReducer,
  products:productsReducer,
  
});

let initialState = {
  
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
