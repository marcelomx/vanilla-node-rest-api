const Product = require("../models/productModel");
const { getPostData } = require("../utils");

async function getProducts(req, res) {
  try {
    const products = await Product.findAll();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  getProducts,
};
