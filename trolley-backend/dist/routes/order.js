"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// express
const express_1 = __importDefault(require("express"));
// order controllers
const order_1 = require("../controllers/order");
const router = express_1.default.Router();
router.get("/orders", order_1.getOrders);
router.post("/orders", order_1.createOrder);
router.delete("/orders/:id", order_1.deleteOrders);
exports.default = router;
