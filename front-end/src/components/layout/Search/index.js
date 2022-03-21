import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import "./style.css";

/**
 * @author
 * @function Search
 **/

export const Search = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      // <Redirect to={`/products/${keyword}`} />
      history.push(`/products/${keyword}`);
    } else {
      // <Redirect to={`/products`} />
      history.push(`/products`);
    }
  };
  return (
    <>
      <div className="search">
        <Container>
          <Row>
            <Col md={3} sm={12}>
              <select class="form-select" aria-label="Default select example">
                <option selected disabled>
                  Make
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </Col>
            <Col md={3} sm={12}>
              <select class="form-select" aria-label="Default select example">
                <option selected disabled>
                  Model
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </Col>
            <Col md={3} sm={12}>
              <select class="form-select" aria-label="Default select example">
                <option selected disabled>
                  Year
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </Col>
            <Col md={3} sm={12}>
              <select class="form-select" aria-label="Default select example">
                <option selected disabled>
                  Body
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </Col>
          </Row>

          <div className="search-btn">
            <form className="searchBox" onSubmit={handleSearch}>
              <input
                type="text"
                className="input-1"
                placeholder="search"
                onChange={(e) => setKeyword(e.target.value)}
                style={{ margin: "2px 10px" }}
              />
              <input type="submit" value="Search" />
            </form>
          </div>
        </Container>
      </div>
    </>
  );
};
