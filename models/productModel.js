const products = require("../data/products.json");
const { v4: uuidv4 } = require("uuid");
const { writeDataToFile } = require("../utils");

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
}

function findById(id) {
  return new Promise((resolve, reject) => {
    const product = products.find((p) => p.id === id);
    resolve(product);
  });
}

function create(product) {
  return new Promise((resolve, reject) => {
    const newProduct = { id: uuidv4(), ...product };
    products.push(newProduct);
    writeDataToFile("./data/products.json", products);
    resolve(newProduct);
  });
}

function update(product, data) {
  return new Promise((resolve, reject) => {
    const index = products.findIndex((p) => p.id === product.id);
    const newData = { ...product, ...data };
    products[index] = newData;
    writeDataToFile("./data/products.json", products);
    resolve(newData);
  });
}

function _delete(product) {
  return new Promise((resolve, reject) => {
    const index = products.findIndex((p) => p.id === product.id);
    products.splice(index, 1);
    writeDataToFile("./data/products.json", products);
    resolve(product);
  });
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  delete: _delete,
};
