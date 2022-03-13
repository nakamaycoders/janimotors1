const express = require("express");
const {
  addProducts,
  getProductsBySlug,
  getProducts,
  getProductDetailsById,
  deleteProducts,
  updateUser
} = require("../Controllers/product");
const multer = require("multer");
const path = require("path");
const shortid = require("shortid");
const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname), 'uploads'));
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + "-" + file.originalname);
    },
  });
const upload = multer({storage})

router.post("/product/create",upload.array("productPicture"),addProducts);
router.get("/products/:slug", getProductsBySlug);
router.post("/products/getProducts",getProducts);
router.get("/product/:productId", getProductDetailsById);
router.post("/product/delete/:productId",deleteProducts);

//updateid api
// router.route('/product/:id').put(updateUser)
// //delete id
// router.route('/product/:productId').delete(deleteProducts);

module.exports = router;
