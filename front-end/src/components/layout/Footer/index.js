import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./style.css";
import { ImLocation } from 'react-icons/im';


function Footer() {
  return (
    <div className="footerBody">
      <div className="location">
        <ImLocation /> SELECT YOUR LOCATION
      </div>
      <hr/>
      <div className="top">
        <Container>
          <Row>
            <Col>
              Chicago Motor Cars East 27W110 North Avenue West Chicago, IL 60185
              630-221-1800
            </Col>
            
          </Row>
        </Container>
      </div>
      <hr></hr>
      <div className="bottom">
        © 2022 Chicago Motor Cars | Privacy Policy | Terms {'&'} Conditions |
        Contact Us | Sitemap
      </div>
    </div>
  );
}

export default Footer;
