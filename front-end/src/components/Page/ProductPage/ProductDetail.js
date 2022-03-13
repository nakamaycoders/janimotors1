import React,{useEffect} from 'react'
import Layout from '../../layout/layout/layout'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetailsById } from '../../../actions';
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

export default function ProductDetail(props) {
    const product = useSelector((state) => state.product);
    console.log(product)
    const dispatch = useDispatch();
  
    useEffect(() => {
      const { productId } = props.match.params;
    //   console.log(props);
      const payload = {
        params: {
          productId
        }
      }
      dispatch(getProductDetailsById(payload));
    }, []);
  
  return (
    <>
        <Layout>
        <div className="productDescriptionContainer">
        <div className="flexRow">
          <div className="verticalImageStack">
            {/* {
                product.productDetails.productPictures.map((thumb, index) => 
              <div className="thumbnail">
                <img src={ImageUrl(thumb.img)} alt={thumb.img} />
              </div>
              )
            } */}
           { console.log(ImageUrl(product.productDetails.productPictures))}
            {/* <div className="thumbnail active">
              {
                product.productDetails.productPictures.map((thumb, index) => 
                <img src={ImageUrl(thumb.img)} alt={thumb.img} />)
              }
            </div> */}
          </div>
          <div className="productDescContainer">
            <div className="productDescImgContainer">
              <img src={ImageUrl(product.productDetails.productPictures[0].img)} alt={`${product.productDetails.productPictures[0].img}`} />
            </div>

            {/* action buttons */}
            
          </div>
        </div>
        <div>

          {/* home > category > subCategory > productName */}
          <div className="breed">
            <ul>
              <li><a href="#">Home</a><IoIosArrowForward /></li>
              <li><a href="#">Suv</a><IoIosArrowForward /></li>
              <li><a href="#">{product.productDetails.name}</a></li>
            </ul>
          </div>
          {/* product description */}
          <div className="productDetails">
              <p className="productTitle">{product.productDetails.name}</p>
            <div>
              <span className="ratingCount">4.3 <IoIosStar /></span>
              <span className="ratingNumbersReviews">72,234 Ratings & 8,140 Reviews</span>
            </div>
            <div className="extraOffer">Extra <BiDollar />4500 off </div>
            <div className="flexRow priceContainer">
              <span className="price"><BiDollar />{product.productDetails.price}</span>
              <span className="discount" style={{ margin: '0 10px' }}>22% off</span>
              {/* <span>i</span> */}
              </div>
            <div>
              <p style={{ 
                color: '#212121', 
                fontSize: '14px',
                fontWeight: '600' 
                }}>Available Offers</p>
              <p style={{ display: 'flex' }}>
                <span style={{
                  width: '100px',
                  fontSize: '12px',
                  color: '#878787',
                  fontWeight: '600',
                  marginRight: '20px'
              }}>Description</span>
              <span style={{
                fontSize: '12px',
                color: '#212121',
              }}>{product.productDetails.description}</span>
              </p>
            </div>
          </div>
          

        </div>
      </div>
        </Layout>
    </>
  )
}
