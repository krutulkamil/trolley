"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// mongoose
const mongoose_1 = __importDefault(require("mongoose"));
// shortId
const shortid_1 = __importDefault(require("shortid"));
const Schema = mongoose_1.default.Schema;
const Product = new Schema({
    _id: { type: String, default: shortid_1.default.generate },
    image: String,
    title: String,
    description: String,
    availableSizes: [String],
    price: Number,
});
exports.default = mongoose_1.default.model("products", Product);
