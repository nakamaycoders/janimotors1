const router = express.Router()
const express = require('express');
const { getEmail } = require('../Controllers/mailController');


router.get('/category/getemail',getEmail)
