"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// express
const express_1 = __importDefault(require("express"));
// product controllers
const product_1 = require("../controllers/product");
const router = express_1.default.Router();
router.get('/products', product_1.getProducts);
router.post('/products', product_1.createProduct);
router.delete('/products/:id', product_1.deleteProduct);
exports.default = router;
