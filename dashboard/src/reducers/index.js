import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import userReducer from './user.reduer';
import categoryReducer from './category.reducer';
import productReducer from './product.reducer';


const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    category: categoryReducer,
    product: productReducer,


});

export default rootReducer