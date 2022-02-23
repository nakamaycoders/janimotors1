const express = require("express");
const {
  addProducts,
  getProductsBySlug,
  getProducts,
  getProductDetailsById,
  deleteProducts
} = require("../Controllers/product");
const multer = require("multer");
const path = require("path");
const shortid = require("shortid");
const router = express.Router();

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, path.join(path.dirname(__dirname), 'uploads'));
//     },
//     filename: function (req, file, cb) {
//       cb(null, shortid.generate() + "-" + file.originalname);
//     },
//   });
// const upload = multer({storage})

router.route("/product/create").post(addProducts);
router.get("/products/:slug", getProductsBySlug);
router.route("/getProducts").get(getProducts);
router.get("/product/:productId", getProductDetailsById);

//delete id
router.route('/product/:productId').delete(deleteProducts);

module.exports = router;
