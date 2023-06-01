const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "",
    },
    quantity: {
      type: Number,
      default: null,
    },
  },
  {
    timeseries: true,
  }
);

const product = mongoose.model("Product", productSchema);
module.exports = product;
