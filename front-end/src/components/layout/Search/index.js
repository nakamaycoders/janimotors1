import React from "react";
import { Container, Row, Col,Button } from "react-bootstrap";
import "./style.css";

/**
 * @author
 * @function Search
 **/

export const Search = (props) => {
  return (
    <>
      <div className="search">
        <Container>
          <Col>
            <Row md={3} sm={12}>
              <select class="form-select" aria-label="Default select example">
                <option selected disabled>Make</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </Row>
            <Row  md={3} sm={12}>
            <select class="form-select" aria-label="Default select example">
                <option selected disabled>Model</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </Row>
            <Row  md={3} sm={12}>
            <select class="form-select" aria-label="Default select example">
                <option selected disabled>Year</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </Row>
            <Row  md={3} sm={12}>
            <select class="form-select" aria-label="Default select example">
                <option selected disabled>Body</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </Row>
          </Col>

         
          <div className="search-btn">
            <input type="search" className="input-1" placeholder="search"  style={{margin: '2px 10px'}}/>
            <Button class='btn btn-lg btn-primary btn-1'   style={{margin: '2px 10px',borderRadius: '40px',
              width: '100px'}}>Search</Button>
          </div>
        </Container>
      </div>
    </>
  );
};
