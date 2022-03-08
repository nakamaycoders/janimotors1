const productModel = require("../models/product");
const shortid = require("shortid");
const slugify = require("slugify");
const category = require("../models/category");
const product = require("../models/product");

exports.addProducts = (req, res) => {
  const {
    name,
    price,
    engine,
    trim,
    vin,
    condition,
    interiorColor,
    exteriorColor,
    milage,
    stock,
    model,
    year,
    description,
    category
  } = req.body;

  let productPictures = [];

  if (req.files.length > 0) {
    productPictures = req.files.map((file) => {
      return { img: file.filename };
    });
  }

  const product = new productModel({
    name: name,
    slug: slugify(name),
    price,
    engine,
    model,
    condition,
    trim,
    vin,
    interiorColor,
    exteriorColor,
    milage,
    stock,
    year,
    description,
    productPictures,
    category,
    // createdBy: req.user._id,
  });
  product.save((err, product) => {
    if (err) {
      return res.status(400).json({
        err,
      });
    }
    if (product) {
      return res.status(201).json({
        product,
        file: req.files,
      });
    }
  });
};

exports.getProductsBySlug = (req, res) => {
  const { slug } = req.params;
  product
    .findOne({ slug: slug })
    .select(
      "_id name condition price year stock interiorColor exteriorColor"
    )
    .exec((err, product) => {
      if (err) {
        return res.status(400).json({
          err,
        });
      } else {
        res.status(200).json({ product });
      }
    });
};

exports.getProducts = async (req, res) => {
  const products = await productModel
    .find({})
    // .select("_id name condition price year model trim condition stock vin interiorColor exteriorColor")
    // .populate({ path: "category", select: "_id name" })
    .exec();

  res.status(200).json({ products });
};

exports.getProductDetailsById = (req, res) => {
  const { productId } = req.params;
  if (productId) {
    productModel.findOne({ _id: productId }).exec((error, product) => {
      if (error) return res.status(400).json({ error });
      if (product) {
        res.status(200).json({ product });
      }
    });
  } else {
    return res.status(400).json({ error: "Params required" });
  }
};





// delete api

exports.deleteProducts =  async (req,res)=>{
  try{
  const { productId } = req.params;
  let productToDel = await productModel.findOne({ _id: productId });
  // console.log(productToDel);
  if(!productToDel){
    return res.status(404).send("Not found");
    
  }
  productToDel = await productModel.findOneAndDelete({ _id: productId });
  res.json({"Success": "Deleted", productToDel: productToDel});
  }
  catch(error){
    console.error(error.message)
    res.status(500).send("Internal Server error")
  }

};


// update api

exports.updateUser = async (req,res)=>{
  const user= await productModel.findByIdAndUpdate(req.params.id,req.body,{
      new:true,
      runValidator:true
  })
  

  try {
      res.status (200).json({
          success:true,
          user
      })
  }
  catch (err){
      res.status(202).json({
          success:false,
          message: "try again" + err.message

      })
  }

  
}