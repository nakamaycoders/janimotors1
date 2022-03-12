import React from "react";
import Layout from "../layouts/Layout/Layout";
import './ProductList.css'
import Product from './Product/Product';
// import ClothingAndAccessories from "./ClothingAndAccessories/index";
import getParams from '../../../utils/getParams'
const ProductList = (props) => {
  
  const renderProducts = ()=>{
    console.log(props)
    const params = getParams(props.location.search);
   let content = null
    switch(params.type){
      case 'store':
       content =  <Product {...props} />
       break;
    }
    return content
  }


  return (
    <Layout>
        {renderProducts()}
    </Layout>
  );
};

export default ProductList;
