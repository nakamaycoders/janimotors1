import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cardsdata from "./cardsdata";
import "./Cardcaro.css";
/**
 * @author
 * @function Cardss
 **/

export const Cardss = (props) => {
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
      <h1 className="ci">Current Inventory</h1>
      <Carousel
        autoPlaySpeed={3500}
        autoPlay={true}
        infinite={true}
        responsive={responsive}
      >
        {cardsdata.map((cardsdata) => {
          return (
            <div className="card container">
              <img
                src={cardsdata.image}
                alt="heello"
                className="cardok img-fluid"
              />
              <div className="  okok">
                <h4>{cardsdata.name}</h4>
                <p>{cardsdata.description}</p>
                <tr>
                  <td>
                    <h5>Milage : 3000km </h5>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>Stock : 3000km </h5>
                  </td>
                </tr>
                <h5 className="show">Engine: </h5>
                <p className="showw"> {cardsdata.description}</p>
              </div>

              <div className="hc">
                <h5>
                  Price : <br />
                  $4500
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
