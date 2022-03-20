const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: String,
  url: String,
  detailUrl: String,
  title: Object,
  price: Object,
  description: String,
  tagline: String,
});

const products = mongoose.model("products", productSchema);

module.exports = products;
