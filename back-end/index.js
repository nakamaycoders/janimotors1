const express = require('express');
const app = express();
const env = require("dotenv");
env.config();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require("dotenv").config()
require('../back-end/database/connection')
const path = require("path");
const cors = require('cors')
app.use(cors());
// const cloudinary = require('cloudinary')

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
  });


// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
//   });
//Category Routes
const categoryRoutes = require('./Routes/category')
app.use('/api',categoryRoutes)

//Product Routes
const productRoutes = require('./Routes/product')
app.use('/api',productRoutes)

//Admin Routes
const adminRoutes = require('./Routes/admin')
app.use('/api',adminRoutes);

const initialData = require('./Routes/initialData')
app.use('/api',initialData)

//Picture Route
app.use("/public", express.static(path.join(__dirname, "uploads")));

const contactRoutes = require('./Routes/contact')
app.use('/api',contactRoutes)

const tradeInRoutes = require('./Routes/tradeIn')
app.use('/api',tradeInRoutes)

const creditRoutes = require('./Routes/credit')
app.use('/api',creditRoutes)

const JointRoutes = require('./Routes/JointForm')
app.use('/api',JointRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`Server is working on port ${process.env.PORT}`)
}); 

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  
    server.close(() => {
      process.exit(1);
    });
  });
  