const Product = require("../models/Product");

// ✅ Get All Products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Error fetching products" });
  }
};

// ✅ Create a New Product
const createProduct = async (req, res) => {
  try {
    const { name, price, description, url, rating } = req.body;
    const newProduct = new Product({ name, price, description, url, rating });
    await newProduct.save();
    res.status(201).json({ message: "Product created", product: newProduct });
  } catch (error) {
    res.status(400).json({ error: "Failed to create product" });
  }
};

// ✅ Update Product
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: "Failed to update product" });
  }
};

// ✅ Delete Product
const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Product deleted" });
  } catch (error) {
    res.status(400).json({ error: "Failed to delete product" });
  }
};

module.exports = { getProducts, createProduct, updateProduct, deleteProduct };
