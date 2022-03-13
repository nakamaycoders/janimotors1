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
import { getProductsBySlug } from "../../../actions";
import Card from "../../layout/Card/Card";
import { MaterialButton } from "../../layout/MaterialUI/MaterialUI";
import { ImageUrl } from "../../../UrlConfig";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./Product.css";
import {Search} from '../../layout/Search'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Product(props) {
  let product = useSelector((state) => state.product);
  console.log(product);
  const dispatch = useDispatch();

  useEffect(() => {
    const { match } = props;
    dispatch(getProductsBySlug(match.params.slug));
    console.log(match.params.slug);
  }, []);

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
  
      <div className="">
        <div className="row">
          <div className="col-md-3 col-sm-12">
            <Search />
          </div>

          <div className="img-fluid  col-md-5 col-sm-12">
            <img
              className="img-fluid"
              src="https://www.chicagomotorcars.com/imagetag/8861/main/f/Used-2020-Aston-Martin-DB11-AMR-V12-Coupe-Stealth-PPF-B-O-Surround-Sound-Carbon-Fiber-LOADED.jpg"
              alt="car"
            />
          </div>

          <div className="col-md-4 col-sm-12">
            <h3>2020 Aston Martin</h3>
            <div>
              <span className="fw-bolder">Price:</span>
              <span>$54000</span>
            </div>

            <div className="d-flex pt-2">
              <div>
                <span className="fw-bolder">milage:</span>
                <span>$54000</span>
              </div>

              <div className="">
                <span className="fw-bolder ms-5">stock:</span>
                <span>$54000</span>
              </div>
            </div>
            <div className=" pt-2">
              <span className="fw-bolder ">Engine:</span>
              <p>5.2L Twin Turbo V12 630hp 516ft. lbs.</p>
            </div>

            <div className="">
              <span className="fw-bolder ">Transmission:</span>
              <p>8-Speed Shiftable Automatic</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
