import React,{useEffect} from "react";
import {useDispatch,useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import Layout from "../../layout/layout/layout";
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'; 
import getParams from '../../../utils/getParams'
import {getProductsBySlug} from '../../../actions'
import Card from '../../layout/Card/Card'
import { MaterialButton } from "../../layout/MaterialUI/MaterialUI";
import {ImageUrl} from '../../../UrlConfig'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
function Product(props) {
    const product = useSelector(state => state.product);
    console.log(product)
    const dispatch = useDispatch();
  
  
    useEffect(() => {
      const { match } = props;
      dispatch(getProductsBySlug(match.params.slug));
    }, []);
  
  return (
    <>
      <Layout>
          
      </Layout>
    </>
  );
}

export default Product;
