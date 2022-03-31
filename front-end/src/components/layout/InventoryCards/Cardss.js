import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Cardcaro.css";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getProduct } from "../../../actions/productAction";
import { ImageUrl } from "../../../UrlConfig";
/**
 * @author
 * @function Cardss
 **/

export const Cardss = (props) => {
  const dispatch = useDispatch();
  let { products, error, loading } = useSelector((state) => state.product);
  console.log("ye hai",products);

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }

    dispatch(getProduct());
  }, [dispatch]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <h1  className="ci">Current Inventory</h1>
      <Carousel
        autoPlaySpeed={3500}
        autoPlay={true}
        infinite={true}
        responsive={responsive}
        // showDots={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {products && products.map((p) => {
          return (
            <div className="card container">
              <img
                src={ImageUrl(p.productPictures[0].img)}
                alt="heello"
                className="cardok img-fluid"
              />
              <div className="  okok">
                <h4>{p.name}</h4>
                <p>{p.description}</p>
                <tr>
                  <td>
                    <h5>Milage : {p.milage}</h5>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>Stock : {p.stock}</h5>
                  </td>
                </tr>
                <h5 className="show">Engine: {p.engine} </h5>
                <p className="showw"> {p.description}</p>
              </div>

              <div className="hc">
                <h5>
                  Price : <br />
                  ${p.price}
                </h5>
                <button className="bte btn btn-primary">Details</button>
              </div>
            </div>
          );
        })}
      </Carousel>
      ;
    </>
  );
};
