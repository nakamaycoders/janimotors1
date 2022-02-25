const express = require('express');
const { addCategory, getCategories, updateCategories, deleteCategories } = require('../Controllers/category');
const router = express.Router()

router.route('/category/create').post(addCategory)

router.route('/getCategories').get(getCategories)

//Update Category
router.post("/category/update",updateCategories);
//Delete Category
router.post("/category/delete",deleteCategories);

module.exports = router