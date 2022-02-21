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
exports.deleteProduct = exports.getProducts = exports.createProduct = void 0;
// model
const product_1 = __importDefault(require("../models/product"));
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newProduct = new product_1.default(req.body);
    const savedProduct = yield newProduct.save();
    res.send(savedProduct);
});
exports.createProduct = createProduct;
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield product_1.default.find({});
    res.send(products);
});
exports.getProducts = getProducts;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedProduct = yield product_1.default.findByIdAndDelete(req.params.id);
    res.send(deletedProduct);
});
exports.deleteProduct = deleteProduct;
