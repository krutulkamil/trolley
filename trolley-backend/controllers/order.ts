// express
import {Request, Response} from "express";
// model
import Order from "../models/order";

export const createOrder = async (req: Request, res: Response) => {
    if (!req.body.name || !req.body.email || !req.body.address || !req.body.cartItems || !req.body.total) {
        return res.send({
            message: "Data is required."
        });
    }

    const order = await new Order(req.body).save();
    res.send(order);
};

export const getOrders = async (req: Request, res: Response) => {
    const orders = await Order.find({});
    res.send(orders);
};

export const deleteOrders = async (req: Request, res: Response) => {
    const order = await Order.findByIdAndDelete(req.params.id);
    res.send(order);
};