import axios from '../helpers/axios'
import { productConstants } from './constants';


export const getProducts = () => {
    return async (dispatch) => {
      try {
        dispatch({ type: productConstants.GET_ALL_PRODUCTS_REQUEST });
        const res = await axios.post(`/products/getProducts`);
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
        const res = await axios.post(`/product/create`, form);
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


  export const deleteProducts  = (productId) =>{
    return async (dispatch) =>{
      try {
        dispatch({ type: productConstants.DELETE_PRODUCT_REQUEST });
        const res = await axios.post(`/product/delete/${productId}`);
        console.log(res)
        if (res.status === 200) {
          const { productId } = res.data;
          dispatch({
            type: productConstants.DELETE_PRODUCT_SUCCESS,
            payload: { id: productId },
          });
        } else {
          dispatch({ type: productConstants.DELETE_PRODUCT_FAILED});
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
