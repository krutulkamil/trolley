const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const shortId = require('shortid');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

mongoose.connect(process.env.DATABASE_CLOUD)
    .then(() => console.log('mongoDB connected...'))
    .catch(err => {
        console.log(err)
    });

const Product = mongoose.model('products', new mongoose.Schema({
    _id: {type: String, default: shortId.generate},
    image: String,
    title: String,
    description: String,
    availableSizes: [String],
    price: Number,
}));

app.get('/api/products', async (req, res) => {
    const products = await Product.find({});
    res.send(products);
});

app.post('/api/products', async (req, res) => {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.send(savedProduct);
});

app.delete('/api/products/:id', async (req, res) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.send(deletedProduct);
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});