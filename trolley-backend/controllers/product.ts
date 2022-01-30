// express
import {Request, Response} from "express";
// model
import Product from "../models/product";

export const createProduct = async (req: Request, res: Response) => {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.send(savedProduct);
};

export const getProducts = async (req: Request, res: Response) => {
    const products = await Product.find({});
    res.send(products);
};

export const deleteProduct = async (req: Request, res: Response) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.send(deletedProduct);
};