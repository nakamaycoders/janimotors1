import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Layout from "../../layout/layout/layout";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import getParams from "../../../utils/getParams";
import { clearErrors, getProductsBySlug } from "../../../actions/productAction";
import Card from "../../layout/Card/Card";
import { MaterialButton } from "../../layout/MaterialUI/MaterialUI";
import { ImageUrl } from "../../../UrlConfig";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Row, Col } from "react-bootstrap";
import Loader from "../../layout/Loader/Loader";
import {useAlert} from 'react-alert'

import "./Product.css";
import { Search } from "../../layout/Search";
import MetaData from "../../layout/MetaData";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Product(props) {
  const dispatch = useDispatch();
  let { products, error, loading } = useSelector(
    (state) => state.product
  );
  // console.log(products);



  useEffect(() => {
    if(error){
    dispatch(clearErrors());
    }
    const { match } = props;
    dispatch(getProductsBySlug(match.params.slug));
    // console.log(match.params.slug);
  }, [dispatch,error,props]);

  // console.log(product.products[0].condition)

  // product.products.map((p)=>{
  //   return(
  //   <div key={p}>
  //     <h1>{p.name}</h1>
  //   </div>
  //   )
  // })

  return (
    <>
        <MetaData title={`${products.slug} ---JANI MOTORS`}/>
        <div className="container-fluid">
          <div className="row">
                <div className="col-md-4 col-lg-3 pt-3">
              <div className="search-div">
                <select class="form-select" aria-label="Default select example">
                  <option selected disabled>
                    Make
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="search-div">
                <select class="form-select" aria-label="Default select example">
                  <option selected disabled>
                    Model
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="search-div">
                <select class="form-select" aria-label="Default select example">
                  <option selected disabled>
                    Year
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="search-div">
                <select class="form-select" aria-label="Default select example">
                  <option selected disabled>
                    Body
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <div
                className="search-btn"
                style={{ display: "flex", justifyContent: "left" }}
              >
                <input
                  type="search"
                  className="input-1"
                  placeholder="search"
                  style={{ margin: "2px 30px" }}
                />
                <Button
                  class="btn btn-lg btn-primary btn-1"
                  style={{
                    margin: "2px 30px",
                    borderRadius: "40px",
                    width: "100px",
                  }}
                >
                  Search
                </Button>
              </div>
            </div>
            <div className="col-md-9">
            {loading ? (
                <Loader />
              )
              : error ? (
                "error"
              )
              :
              (
                <>
              {products &&
                products.map((p) => {
                  // console.log(ImageUrl(p.productPictures[0].img));
                  return (
                    <div className="row">
                      <div className="col-md-6 col-sm-12 pt-3">
                        <Link to={`/product/${p._id}`}>
                          <img
                            className="img-fluid"
                            src={ImageUrl(p.productPictures[0].img)}
                            alt=""
                          ></img>
                        </Link>
                      </div>
                      <div
                        className="col-md-3 col-sm-12 pt-3 detailsss"
                        style={{ color: "white" }}
                      >
                        <span className=" " style={{ border:"2px red solid" , width:"200px"}} >{p.name}</span>
                        <div>
                          <span className="fw-bolder">Price: </span>
                          <span>{p.price}</span>
                        </div>

                        <div className="d-flex pt-2">
                          <div>
                            <span className="fw-bolder">milage: </span>
                            <span>{p.milage}</span>
                          </div>

                          <div className="">
                            <span className="fw-bolder ms-5">stock: </span>
                            <span>{p.stock}</span>
                          </div>
                        </div>
                        <div className=" pt-2">
                          <span className="fw-bolder ">Engine: </span>
                          <p>{p.engine}</p>
                        </div>

                        <Button variant="contained">
                          <Link
                            to={`/product/${p._id}`}
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            Details
                          </Link>
                        </Button>
                      </div>
                    </div>
                  );
                })}
                </>
              )
            } 
            </div>
          </div>
        </div>
    </>
  );
}

export default Product;
