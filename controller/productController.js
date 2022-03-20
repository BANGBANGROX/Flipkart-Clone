const { request } = require("express");
const Product = require("../model/productSchema");

const getProducts = async (request, response) => {
  try {
    const products = await Product.find({});

    response.status(200).json(products);
  } catch (err) {
    console.log(err.message);
  }
};

const getProductById = async (request, response) => {
  try {
    const product = await Product.findOne({ id: request.params.id });

    if (product) {
      return response.status(200).json(product);
    }

    response.status(401).json("Product not found");
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { getProducts, getProductById };
