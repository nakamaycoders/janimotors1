import { productConstants } from "../actions/constants";

const initialState = {
  products: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case productConstants.GET_ALL_PRODUCTS_SUCCESS:
      state = {
        ...state,
        products: action.payload.products,
      };
      break;
    case productConstants.DELETE_PRODUCT_SUCCESS:
      state = {
        ...state,
        products: state.products.filter(p => p._id !== action.payload._id),
      };
      break;
  }

  return state;
};
