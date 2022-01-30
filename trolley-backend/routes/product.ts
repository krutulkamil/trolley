// express
import express from "express";
// product controllers
import {createProduct, getProducts, deleteProduct} from "../controllers/product";

const router = express.Router();

router.get('/products', getProducts);
router.post('/products', createProduct);
router.delete('/products/:id', deleteProduct);

export default router;