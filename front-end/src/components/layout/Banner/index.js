import React from "react";
import { slidersImages } from "../Navbar/data";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import './style.css'
export const Banner = (props) => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true} autoFocus={true}>
      {slidersImages.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.img} className={item.cName} alt="" />
          </div>
        );
      })}
    </Carousel>
  );
};