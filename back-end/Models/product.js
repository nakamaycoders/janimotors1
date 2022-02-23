const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    model: {
      type: String,
      required: true,
    },
    engine: {
      type: String,
      required: true,
    },
    condition: {
      type: String,
    },
    trim: {
      type: String,
      required: true,
    },
    vin: {
      type: String,
      required: true,
      unique: true,
    },
    interiorColor: {
      type: String,
    },
    exteriorColor: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    milage: {
      type: Number,
      default: 0,
    },
    year: {
      type: Number,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    productPictures: [{ img: { type: String } }],

    // category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    // createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    updatedAt: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
