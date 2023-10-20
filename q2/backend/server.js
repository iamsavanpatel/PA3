const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
//const Product = require('./model/Product');
const app = express();

const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://0.0.0.0:27017/shopping-cart-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
  });
  
const Product = mongoose.model('Product', productSchema);

app.use(cors());
app.use(bodyParser.json());

// Create a new product
app.post('/products', async (req, res) => {
    try {
      const product = new Product(req.body);
      await product.save();
      res.status(201).json(product);
    } catch (error) {
      res.status(400).json({ error: 'Failed to create product' });
    }
  });
  
  // Retrieve all products
  app.get('/products', async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve products' });
    }
  });
  
  // Retrieve a specific product by ID
  app.get('/products/:id', async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve the product' });
    }
  });
  
  // Update a product by ID
  app.put('/products/:id', async (req, res) => {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update the product' });
    }
  });
  
  // Delete a product by ID
  app.delete('/products/:id', async (req, res) => {
    try {
      const product = await Product.findByIdAndRemove(req.params.id);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.status(204).json();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete the product' });
    }
  });



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
