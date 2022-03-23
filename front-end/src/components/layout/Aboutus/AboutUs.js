import React from "react";
import "../Aboutus/Aboutus.css";
import { Link } from "react-router-dom";
import banner from "../../../assets/banner.png";

function AboutUs() {
  return (
   
    <div className="container-fluid pt-4   ">
      <div className="row">
        <div className="col-md-4 ">
          <img className="img-fluid" src={banner} alt="" />
        </div>
        <div className="col-md-8 pt-4 " style={{ color: "white" }}>
          <p>
           
            We proudly serve the Chicagoland area and surrounding suburbs. We
            offer a large selection of pre-owned vehicles at affordable prices
            for everyone. We are committed to providing our customers with the
            best service, to get you a step closer to your vehicle that
            satisfies your needs. Our dealership is always ready to assist you
            in the car buying process!
          </p>

          <button type="button" className="btn btn-pri">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
