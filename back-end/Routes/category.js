const express = require('express');
const { addCategory, getCategories } = require('../Controllers/category');
const router = express.Router()

router.route('/category/create').post(addCategory)

router.route('/getCategories').get(getCategories)

module.exports = router