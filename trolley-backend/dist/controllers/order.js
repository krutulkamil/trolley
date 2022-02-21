"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrders = exports.getOrders = exports.createOrder = void 0;
// model
const order_1 = __importDefault(require("../models/order"));
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.name || !req.body.email || !req.body.address || !req.body.cartItems || !req.body.total) {
        return res.send({
            message: "Data is required."
        });
    }
    const order = yield new order_1.default(req.body).save();
    res.send(order);
});
exports.createOrder = createOrder;
const getOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orders = yield order_1.default.find({});
    res.send(orders);
});
exports.getOrders = getOrders;
const deleteOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield order_1.default.findByIdAndDelete(req.params.id);
    res.send(order);
});
exports.deleteOrders = deleteOrders;
