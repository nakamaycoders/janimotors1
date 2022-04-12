import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./style.css";
import {ImLocation} from 'react-icons/im';

const date = new Date();

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
      ©{date.getFullYear()} Jani Motors | Privacy Policy | Terms {'&'} Conditions |
        Contact Us 
      
      </div>
    </div>
  );
}

export default Footer;
