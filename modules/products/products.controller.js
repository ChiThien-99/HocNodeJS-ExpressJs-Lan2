require("../../models/category.model");
const ResponseType = require("../../dto/response.type");
const productEntity = require("../../models/products.model");

exports.getAllProducts = async (req, res) => {
  let products = await productEntity.find().populate("category");
  res.render("products/index.ejs", { products });
};
exports.getDetailProductById = async (req, res) => {
  let { id } = req.params;
  let product = await productEntity.findById(id).populate("category");
  res.render("products/detail.ejs", { product });
};
exports.getCreateProduct = (req, res) => {
  res.render("products/create.ejs");
};
exports.getProductByApi = async (req, res) => {
  try {
    let { id } = req.params;
    let product = await productEntity.findById(id).populate("category");
    console.log(product);
    res.json(new ResponseType(product).success());
  } catch (error) {
    console.log(error);
    res.json(new ResponseType(null).error());
  }
};
exports.postCreateProduct = (req, res) => {
  try {
    let { name, price, image, category } = req.body;
    let createProduct = new productEntity({ name, price, image, category });
    createProduct.save();
    res.json(new ResponseType(createProduct).success());
  } catch (error) {
    console.log(error);
    res.json(new ResponseType(null).error());
  }
};
