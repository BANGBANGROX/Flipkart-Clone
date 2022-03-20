const { products } = require("./constants/product");
const Product = require("./model/productSchema");

const DefaultData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(products);
  } catch (err) {
    console.log(`Error:${err.message}`);
  }
};

module.exports = DefaultData;
