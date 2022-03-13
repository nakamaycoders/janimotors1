import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Aboutus.css";
import { Link } from "react-router-dom";


function AboutUs() {
  return (
    <div className="backGround">
      <Row className="rowww">
        <Col className="bannerImg" sm={4}>
          <Link to='/'>
          <img className="imgpng" src="./banner.png" width="100%" alt="" />
          </Link>
        </Col>
        <Col sm={8}>
          <div className="resAbout">
            Since 2003, Chicago Motor Cars has grown from our humble beginnings
            to a respected leader in the luxury and exotic automotive
            marketplace. With over 30,000 vehicles sold and more than $2 billion
            in worldwide sale, you can count on Chicago Motor Cars to exceed
            your expectations.<br></br>
            <br></br>
            Chicago Motor Cars has three locations conveniently located in the
            Chicago suburbs. Browse among hundreds of high-quality pre-owned
            vehicles at ChicagoMotorCars.com and let our professional staff help
            you secure the vehicle of your dreams. We offer competitive
            financing terms tailored to fit your budget, and we can deliver
            directly to your door. Work with a leader when purchasing your next
            sports or exotic automobile. That's who we are at Chicago Motor
            Cars.
          </div>
          <button type="button" className="btn btn-pri">
            Read More
          </button>
        </Col>
      </Row>
    </div>
  );
}

export default AboutUs;
