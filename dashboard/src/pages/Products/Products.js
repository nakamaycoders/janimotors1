import React, { useState } from "react";
import Layout from "../../components/layouts/Layout";
// import { Modal } from "react-bootstrap";
// import Fade from "@mui/material/Fade";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import ReusableModel from "../../components/layouts/ReusableModel";
// import { Form } from "react-bootstrap";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { createProduct } from "../../actions";
// import { makeStyles } from "@material-ui/styles";
import './Product.css'

// ---------------------------TABLE-------------------
// import PropTypes from "prop-types";
// import { useTheme } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
// import TableFooter from "@mui/material/TableFooter";
// import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import IconButton from "@mui/material/IconButton";
// import FirstPageIcon from "@mui/icons-material/FirstPage";
// import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
// import LastPageIcon from "@mui/icons-material/LastPage";
import TableHead from "@mui/material/TableHead";
import { publicUrl } from "../../UrlConfig";
// ---------------------------TABLE-------------------
// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

const  Products= (props)=> {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [productPictures, setProductPictures] = useState([]);
  const [show, setShow] = useState(false);
  const category = useSelector(state => state.category);
  const product = useSelector(state => state.product);
  const [productDetailsModal, setProductDetailsModal] = useState(false);
  const [productDetails, setProductDetails] = useState(null);
  const dispatch = useDispatch();

  const handleClose = () => {
    setShow(false);
  }

  const submitProductForm = () => {
    const form = new FormData();
    form.append("name", name);
    form.append("stock", stock);
    form.append("price", price);
    form.append("description", description);
    form.append("category", categoryId);

    for (let pic of productPictures) {
      form.append("productPicture", pic);
    }
    dispatch(createProduct(form)).then(() => setShow(false));
  };

  const handleShow = () => setShow(true);

  const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({ value: category._id, name: category.name });
      if (category.children.length > 0) {
        createCategoryList(category.children, options);
      }
    }
    return options;
  };
  // const categoryList = createCategoryList(category.categories);

  const handleProductImages = (e) => {
    setProductPictures([...productPictures, e.target.files[0]]);
  };

  // ------TABLE-------------
     const displayProductsInTable = () =>{
       return(
        <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 650 }}
          style={{ fontSize: 12 }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Stock</TableCell>
              <TableCell align="right">Category</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {product.products.length > 0 ? 
              product.products.map((product) => (
                  <TableRow
                    onClick={() => showProductDetailsModal(product)}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                    key={product._id}
                  >
                    <TableCell component="th" scope="row">
                      2
                    </TableCell>
                    <TableCell align="right">{product.name}</TableCell>
                    <TableCell align="right">{product.price}</TableCell>
                    <TableCell align="right">{product.stock}</TableCell>
                    {/* <TableCell align="right">{product.category.name}</TableCell> */}
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </TableContainer>
       );
     };
  // ------TABLE-------------

  // --------------------------MODEL---------------------
  const CreateProductResuableModal = () => {
    return (
      <ReusableModel
        onSubmit={submitProductForm}
        show={show}
        handleClose={handleClose}
        centered
        modelName={"Add New Product"}
      >
        <TextField
          style={{ margin: "9px 3px", width: "-webkit-fill-available" }}
          autoComplete="off"
          required
          id="outlined-required"
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          style={{ margin: "9px 3px", width: "-webkit-fill-available" }}
          autoComplete="off"
          required
          id="outlined-required"
          label="Price"
          variant="outlined"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <TextField
          style={{ margin: "9px 3px", width: "-webkit-fill-available" }}
          type="number"
          autoComplete="off"
          required
          id="outlined-required"
          label="Stock"
          variant="outlined"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
        <TextField
          style={{ margin: "9px 3px", width: "-webkit-fill-available" }}
          autoComplete="off"
          required
          id="outlined-required"
          label="Description"
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
          <Select
            required
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={categoryId}
            label="Select Category"
            onChange={(e) => setCategoryId(e.target.value)}
          >
            {createCategoryList(category.categories).map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {productPictures.length > 0
          ? productPictures.map((pic, item) => (
              <div key={item}>{pic.name}</div>
            ))
          : null}
        <input
          style={{ marginTop: "8px", width: "-webkit-fill-available" }}
          required
          type="file"
          name="productPictures"
          onChange={handleProductImages}
        />
      </ReusableModel>
    );
  };
  // --------------------------MODEL---------------------

  const closeProductDetailModal = () => {
    setProductDetailsModal(false);
  };

  const showProductDetailsModal = (product) => {
    setProductDetails(product);
    setProductDetailsModal(true);
  };

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const renderProductDetailsModal = () => {
    if (!productDetails) {
      return null;
    }

    console.log('Error aya');
    return (
      <ReusableModel
        show={productDetailsModal}
        size="lg"
        handleClose={closeProductDetailModal}
        modelName={"Product Details"}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid item xs={6}>
              <Item>
                <label style={{ fontWeight: "bolder", paddingTop: 9 }}>
                  Name
                </label>
                <p>{productDetails.name}</p>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <label style={{ fontWeight: "bolder", paddingTop: 9 }}>
                  Price
                </label>
                <p>{productDetails.price}</p>
              </Item>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={6}>
              <Item>
                <label style={{ fontWeight: "bolder", paddingTop: 9 }}>
                  Stock
                </label>
                <p>{productDetails.stock}</p>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <label style={{ fontWeight: "bolder", paddingTop: 9 }}>
                  Category
                </label>
                <p>{productDetails.category.name}</p>
              </Item>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12}>
              <Item>
                <label style={{ fontWeight: "bolder", paddingTop: 9 }}>
                  Description
                </label>
                <p>{productDetails.description}</p>
              </Item>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12}>
              <Item>
                <label style={{ fontWeight: "bolder", paddingTop: 9 }}>
                  Product Picture
                </label>
                <Box style={{display:'flex'}}>
                  {productDetails.productPictures.map((picture) => (
                    <div className="product-image">
                      <img src={publicUrl(picture.img)} alt="" />
                    </div>
                  ))}
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </ReusableModel>
    );
  };
  return (
    <div>
        <Grid container>
          <Grid item xs={12}>
            <Box style={{ display: "flex" }}>
              <Typography variant="h4" component="h1">
                product
              </Typography>
              <Button
                style={{
                  marginLeft: "auto",
                  backgroundColor: "#323232",
                  color: "white",
                  fontSize: "small",
                }}
                onClick={handleShow}
              >
                Add Product
              </Button>
            </Box>
          </Grid>
          {/* ------------------------------------TABLE--------------------- */}

              {displayProductsInTable()}
            
         {/* {displayProductsInTable()} */}
          {/* ------------------------------------TABLE--------------------- */}
          {CreateProductResuableModal()}
          {renderProductDetailsModal()}
        </Grid>
    </div>
  );
}

export default Products;
