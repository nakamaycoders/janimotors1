import React from "react";
import Layout from "../../layout/layout/layout";
// import './ProductList.css'
import Product from './Product';
// import ClothingAndAccessories from "./ClothingAndAccessories/index";
// import getParams from '../../../utils/getParams'
const ProductList = (props) => {
  
  // const renderProducts = ()=>{
  //   console.log(props)
  //   const params = getParams(props.location.search);
  //  let content = null
  //   switch(params.type){
  //     case 'store':
  //      content =  <Product {...props} />
  //      break;
  //   }
  //   return content
  // }


  return (
    <Layout>
        <Product {...props}/>
        {console.log(props)}
    </Layout>
  );
};

export default ProductList;
