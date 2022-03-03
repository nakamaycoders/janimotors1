import axios from '../helpers/axios'
import { productConstants } from './constants';


const getProducts = () => {
    return async (dispatch) => {
      try {
        dispatch({ type: productConstants.GET_ALL_PRODUCTS_REQUEST });
        const res = await axios.post(`product/getProducts`);
        if (res.status === 200) {
          const { products } = res.data;
          dispatch({
            type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
            payload: { products },
          });
        } else {
          dispatch({ type: productConstants.GET_ALL_PRODUCTS_FAILED });
        }
      } catch (error) {
        console.log(error);
      }
    };
  };



  export const createProduct = (form) => {
    return async (dispatch) => {
      try {
        dispatch({ type: productConstants.CREATE_NEW_PRODUCTS_REQUEST });
        const res = await axios.post(`product/create`, form);
        if (res.status === 201) {
          dispatch({ type: productConstants.CREATE_NEW_PRODUCTS_SUCCESS });
          dispatch(getProducts());
        } else {
          dispatch({ type: productConstants.CREATE_NEW_PRODUCTS_FAILED });
        }
      } catch (error) {
        console.log(error);
      }
    };
  };
