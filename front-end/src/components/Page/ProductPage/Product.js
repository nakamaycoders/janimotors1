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
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

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
    <div className="container-fluid">
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Item>Filters</Item>
        </Grid>
        {
          product.products.map((p)=>{
            console.log(ImageUrl(p.productPictures[0].img))
            return(
        <Grid key={p} item xs={9}>
          <Item>
            <Link to={`/${p.slug}/${p._id}/p`}>
            <img src={ImageUrl(p.productPictures[0].img)} alt=""></img>
            </Link>
            <Typography variant="h3" component="h1">{p.slug}</Typography>
            <Typography variant="h5" component="h5">Price</Typography>
            <Typography>{p.price}</Typography>
            <Typography variant="h5" component="h5">Milage</Typography>
            <Typography>{p.milage}</Typography>
            <Button variant="contained">Detail</Button>
          </Item>
        </Grid>

)
})
}
      </Grid>
    </div>
    </>
  );
}

export default Product;
