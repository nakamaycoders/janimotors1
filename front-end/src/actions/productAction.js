import axios from "../helpers/axios";

import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  GET_PRODUCT_BY_SLUG,
  GET_PRODUCT_DETAILS_REQUEST,
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_PRODUCT_DETAILS_FAIL,
  ADMIN_PRODUCT_REQUEST,
  ADMIN_PRODUCT_SUCCESS,
  ADMIN_PRODUCT_FAIL,
  NEW_PRODUCT_REQUEST,
  NEW_PRODUCT_SUCCESS,
  NEW_PRODUCT_FAIL,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAIL,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,

  CLEAR_ERRORS,
} from "../constants/productConstants";

// Get All Products
export const getProduct = () =>
  (keyword = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_PRODUCT_REQUEST });

      let link = `/api/products?keyword=${keyword}`;


      const { data } = await axios.get('/products');

      dispatch({
        type: ALL_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };

//get Product by Slug
  export const getProductsBySlug = (slug) => {
    return async (dispatch) => {
        const {data} = await axios.get(`/products/${slug}`);
        console.log(data)
        dispatch({
            type: GET_PRODUCT_BY_SLUG,
            payload: data.product
        });
        // if (res.status === 200) {
        // } else {
            // dispatch({
            //     type: 
            // })
        // }
    }
}

// Get ProductDetails
export const getProductDetails = (payload) => async (dispatch) => {
    try {
      dispatch({ type: GET_PRODUCT_DETAILS_REQUEST });
      const { productId } = payload.params;
      const { data } = await axios.get(`/product/${productId}`);
      dispatch({
        type: GET_PRODUCT_DETAILS_SUCCESS,
        payload: data.product,
      });
    } catch (error) {
      dispatch({
        type: GET_PRODUCT_DETAILS_FAIL,
        payload: error.response.data.message,
      });
    }
  };


// Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
  
