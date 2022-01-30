// express
import express from "express";
// order controllers
import {createOrder, getOrders, deleteOrders} from "../controllers/order";

const router = express.Router();

router.get("/orders", getOrders);
router.post("/orders", createOrder);
router.delete("/orders/:id", deleteOrders);

export default router;