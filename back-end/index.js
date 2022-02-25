const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors());
var bodyParser = require('body-parser');
const env = require("dotenv");
env.config();
const path = require('path')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require("dotenv").config()
require('../back-end/database/connection')


//Category Routes
const categoryRoutes = require('./Routes/category')
app.use('/api',categoryRoutes)

//Product Routes
const productRoutes = require('./Routes/product')
app.use('/api',productRoutes)

//Admin Routes
const adminRoutes = require('./Routes/admin')
app.use('/api',adminRoutes);

//Picture Route
app.use("/public", express.static(path.join(__dirname, "uploads")));

app.listen(process.env.PORT,()=>{
    console.log(`Server is working on port ${process.env.PORT}`)
}); 