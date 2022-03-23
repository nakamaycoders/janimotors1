import React, { useEffect, useState } from "react";
import "./CreateProduct.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createProduct } from "../../actions/productAction";
// import { useAlert } from "react-alert";
import Button from '@mui/material/Button';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MetaData from "../../components/layouts/MetaData";
// import AccountTreeIcon from "@mui/icons-material/AccountTree";
import DescriptionIcon from "@mui/icons-material/Description";
import StorageIcon from "@mui/icons-material/Storage";
import SpellcheckIcon from "@mui/icons-material/Spellcheck";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { NEW_PRODUCT_RESET } from "../../constants/productConstants";
import { ToastProvider, useToasts } from 'react-toast-notifications';

const CreateProduct = ({ history }) => {
  const dispatch = useDispatch();
//   const alert = useAlert();
  const { addToast } = useToasts();

  const { loading, error, success } = useSelector((state) => state.newProduct);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [engine, setEngine] = useState("");
  const [condition, setCondition] = useState("");
  const [trim, setTrim] = useState("");
  const [model, setModel] = useState("");
  const [vin, setVin] = useState("");
  const [milage, setMilage] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [productPictures, setProductPictures] = useState([]);
  // const [imagesPreview, setImagesPreview] = useState([]);
  const category = useSelector((state) => state.category);

  const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({ value: category._id, name: category.name });
      if (category.children.length > 0) {
        createCategoryList(category.children, options);
      }
    }
    return options;
  };

  useEffect(() => {
    if (error) {
        dispatch(clearErrors());
      }
  
      if (success) {
        // alert.success("Product Created Successfully");
        addToast("product Created Successfullt",{appearance: 'success'})
        history.push("/product/all");
        dispatch({ type: NEW_PRODUCT_RESET });
      }
    
   
  }, [dispatch, error, history, success,addToast])

  const createProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    console.log(name)
    myForm.set("stock", stock);
    console.log(stock)
    myForm.set("price", price);
    console.log(price)
    myForm.set("engine", engine);
    console.log(engine)
    myForm.set("trim", trim);
    console.log(trim)
    myForm.set("model", model);
    console.log(model)
    myForm.set("milage", milage);
    console.log(milage)
    myForm.set("condition", condition);
    console.log(condition)
    myForm.set("vin", vin);
    console.log(vin)
    myForm.set("description", description);
    console.log(description)
    myForm.set("category", categoryId);
    console.log(categoryId)

    for (let pic of productPictures) {
      myForm.append("productPicture", pic);
      console.log(pic)
    }
    dispatch(createProduct(myForm));
    console.log(createProduct(myForm))
  };
  
  // const createProductImagesChange = (e) => {
    const createProductImagesChange = (e) => {
      setProductPictures([...productPictures, e.target.files[0]]);
    };
      // const files = Array.from(e.target.files);
      // setImages([]);
      // setImagesPreview([]);

      // files.forEach((file) => {
      //   const reader = new FileReader();
  
      //   reader.onload = () => {
      //     if (reader.readyState === 2) {
      //       setImagesPreview((old) => [...old, reader.result]);
      //       setImages((old)=>[...old,reader.result]);
      //     }
      //   };
      //   reader.readAsDataURL(file);
      // });


    // setProductPictures([]);
    // setImagesPreview([]);

    // files.forEach((file) => {
    //   const reader = new FileReader();

    //   reader.onload = () => {
    //     if (reader.readyState === 2) {
    //       setImagesPreview((old) => [...old, reader.result]);
    //       setProductPictures((old) => [...old, reader.result]);
    //     }
    //   };

    //   reader.readAsDataURL(file);
    // });
  // };

  return (
      <>
      <MetaData title="Create Product" />
      <div className="dashboard">
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={createProductSubmitHandler}
          >
            <h1>Create Product</h1>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Product Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <AttachMoneyIcon />
              <input
                type="number"
                placeholder="Price"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div>
              <DescriptionIcon />

              <textarea
                placeholder="Product Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>

            <div>
              {/* <AccountTreeIcon /> */}
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
            
            {createCategoryList(category.categories).map((item,index) => (
              <MenuItem key={index} value={item.value}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
          </FormControl>
            </div>

            <div>
              <StorageIcon />
              <input
                type="number"
                placeholder="Stock"
                required
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </div>

            <div>
              <StorageIcon />
              <input
                type="number"
                placeholder="Milage"
                required
                value={milage}
                onChange={(e) => setMilage(e.target.value)}
              />
            </div>

            <div>
              <StorageIcon />
              <input
                type="text"
                placeholder="Vin"
                required
                value={vin}
                onChange={(e) => setVin(e.target.value)}
              />
            </div>

            <div>
              <StorageIcon />
              <input
                type="text"
                placeholder="Model"
                required
                value={model}
                onChange={(e) => setModel(e.target.value)}
              />
            </div>
            <div>
              <StorageIcon />
              <input
                type="text"
                placeholder="Engine"
                required
                value={engine}
                onChange={(e) => setEngine(e.target.value)}
              />
            </div>
            <div>
              <StorageIcon />
              <input
                type="text"
                placeholder="Condition"
                required
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
              />
            </div>
            <div>
              <StorageIcon />
              <input
                type="text"
                placeholder="Trim"
                required
                value={trim}
                onChange={(e) => setTrim(e.target.value)}
              />
            </div>

{/* {console.log(productPictures)} */}
          {productPictures.length > 0
          ? productPictures.map((pic, item) => <div key={item}>{pic.name}</div>)
          : null}

            <div id="createProductFormFile">
              <input
                type="file"
                name="productPictures"
                // name="products"
                // accept="image/*"
                onChange={createProductImagesChange}
                multiple
              />
            </div>
            {/* <div id="createProductFormImage">
              {imagesPreview.map((image, index) => (
                <img key={index} src={image} alt="Product Preview" />
              ))}
            </div> */}

            <Button
              id="createProductBtn"
              type="submit"
              disabled={loading ? true : false}
            >
              Create
            </Button>
          </form>
        </div>
      </div>
      </>
  )
};

export default CreateProduct;