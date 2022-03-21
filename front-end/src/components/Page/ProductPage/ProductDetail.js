<<<<<<< Updated upstream
import React,{useEffect, useState} from 'react'
import Layout from '../../layout/layout/layout'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetailsById,getProductsBySlug } from '../../../actions';
import './ProductDetail.css'
import { 
    IoIosArrowForward, 
    IoIosStar, 
    IoMdCart 
  } from 'react-icons/io';
  import { BiDollar } from 'react-icons/bi';
  import { AiFillThunderbolt } from 'react-icons/ai';
//   import { MaterialButton } from '../../layouts/MaterialUI/MaterialUI';
import { ImageUrl } from '../../../UrlConfig';
import { Link } from 'react-router-dom';

export default function ProductDetail(props) {
const [img,setImg] = useState("")
  
  const product = useSelector((state) => state.product);
  // console.log(product)
  const dispatch = useDispatch();
 
  // const [img, setimg] = useState(ImageUrl(product.productDetails.productPictures[0].img))
  // console.log(ImageUrl(product.productDetails.productPictures[0].img)
   
  
  useEffect(() => {
      const { productId } = props.match.params;
=======
import React,{useEffect} from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./ProductDetail.css";
import {useSelector,useDispatch} from 'react-redux';
import {clearErrors, getProductDetails} from '../../../actions/productAction'
import {ImageUrl} from '../../../UrlConfig';
import Loader from "../../layout/Loader/Loader";
// import { BiDollar } from 'react-icons/bi';
import Layout from "../../layout/layout/layout";
import { useAlert } from "react-alert";
import MetaData from "../../layout/MetaData";





const ProductDetail = (props) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const {product,loading,error} = useSelector((state) => state.productDetails)
  console.log(product)
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    const { productId } = props.match.params;
>>>>>>> Stashed changes
    //   console.log(props);
      const payload = {
        params: {
          productId
        }
      }
<<<<<<< Updated upstream
      dispatch(getProductDetailsById(payload));
    }, []);

    
    if(Object.keys(product.productDetails).length === 0){
      return null;
    }
  
  return (
    <Layout>
    <div className='container-fluid'>
        <div className="productDescriptionContainer " style={{color:'white'}}>
        <div className="flexRow">
          <div className="productDescContainer">
            <div className="productDescImgContainer">
              <img alt='picture' />
            </div>
     

            {/* action buttons */}
            
          </div>
          <div className="verticalImageStack">
            {
                product.productDetails.productPictures.map((thumb, index) => 
              <div className="thumbnail">
                <img className='img-fluid' alt="car" />
              </div>
              )
            }
           {/* { console.log(ImageUrl(product.productDetails.productPictures[0].img))} */}
            {/* <div className="thumbnail active">
              {
                product.productDetails.productPictures.map((thumb, index) => 
                <img src={ImageUrl(thumb.img)} alt={thumb.img} />)
              }
            </div> */}
          </div>
        </div>
        <div>

          {/* home > category > subCategory > productName */}
          <div className="breed">
            <ul>
              <li><Link to="/">Home</Link><IoIosArrowForward /></li>
              <li><Link to="">Suv</Link><IoIosArrowForward /></li>
              <li><Link >{product.productDetails.name}</Link></li>
            </ul>
          </div>
          {/* product description */}
          <div className="productDetails">
              <p className="productTitle">{product.productDetails.name}</p>
{/*  <BiDollar /> */}
            <div className="flexRow priceContainer">
            <span style={{
                  width: '100px',
                  fontSize: '18px',
                  color: 'white',
                  fontWeight: '600',
                  marginRight: '20px'
              }}>Price: </span>
              <span className="price"><BiDollar />{product.productDetails.price}</span>
              {/* <span>i</span> */}
              </div>
            <div>
=======
    dispatch(getProductDetails(payload))
  
  }, [dispatch,props.match.params,error,alert])
  
  const properties = {
    autoplay: false,
    indicators: true,
  };
  if(Object.keys(product).length === 0){
    return null;
  }
>>>>>>> Stashed changes


  return (
    <>
      {
        loading ? (<Loader />) : (
          <>
          <MetaData title={`${product.name} || JANI MOTORS`}/>
      <Layout>
    <div className=" row container-fluid AAA">
      <div className="col-md-6  col-sm-12 pt-3">
        <Fade {...properties}>
          {product.productPictures && product.productPictures.map((product, index) => {
            return (
              <div key={index}>
                <img
                  src={ImageUrl(product.img)}
                  style={{
                    height: "476px",
                    width: "1000px",
                    borderRadius: "10px",
                  }}
                  alt="car"
                  className=" image img-fluid"
                />
              </div>
            );
          })}
        </Fade>

        <div className="text-center container pt-5 BB  ">
          <h3 style={{ color: "red" }} className="">
            DESCRIPTION
          </h3>
          <p className="para" id="para" style={{color:"white"}}>
            {product.description}
          </p>
        </div>
      </div>
      <div className="col-md-6 pt-4 CC  order-sm-1">
        <h1 style={{ color: "red" }}>
          {product.name}
        </h1>

        <span style={{ color: "red",fontSize:"22px" }}>$ {product.price}</span>

        <table class="table">
          <tbody style={{ color: "white" }}>
            <tr>
              <th scope="row">TYPE:</th>
              <td>{product.condition}</td>
            </tr>
            <tr>
              <th scope="row">YEAR:</th>
              <td>{product.year}</td>
            </tr>
            <tr>
              <th scope="row">MAKE:</th>
              <td>{product.make}</td>
            </tr>
            <tr>
              <th scope="row">MODEL:</th>
              <td>{product.model}</td>
            </tr>
            <tr>
              <th scope="row">TRIM:</th>
              <td>
                {product.trim}
              </td>
            </tr>
            <tr>
              <th scope="row">STOCK:</th>
              <td>{product.stock}</td>
            </tr>
            <tr>
              <th scope="row">MILAGE:</th>
              <td>{product.milage}</td>
            </tr>
            <tr>
              <th scope="row">INTERIOR COLOR:</th>
              <td>{product.interiorColor}</td>
            </tr>
            <tr>
              <th scope="row">EXTERIOR COLOR:</th>
              <td>{product.exteriorColor}</td>
            </tr>
            <tr>
              <th scope="row">VIN:</th>
              <td>{product.vin}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </Layout>
    </>
             )
            }
        </>
  );
};

export default ProductDetail;
