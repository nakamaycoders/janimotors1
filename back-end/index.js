const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const dotenv = require('dotenv')
dotenv.config()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require("dotenv").config()
var dbconnection = require('../back-end/database/connection')


//Category Routes
const categoryRoutes = require('./Routes/category')
app.use('/api',categoryRoutes)

//Product Routes
const productRoutes = require('./Routes/product')
app.use('/api',productRoutes)

//Admin Routes
const adminRoutes = require('./Routes/admin')
app.use('/api',adminRoutes);


const PORT = process.env.PORT || 5000;
app.listen( PORT,()=>{
    console.log(`Server is working on port ${PORT}`)
}); 