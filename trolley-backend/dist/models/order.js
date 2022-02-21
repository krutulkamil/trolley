"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
// mongoose
const mongoose_1 = __importDefault(require("mongoose"));
// shortId
const shortid_1 = __importDefault(require("shortid"));
const Schema = mongoose_1.default.Schema;
exports.Order = new Schema({
    _id: {
        type: String,
        default: shortid_1.default.generate
    },
    email: String,
    name: String,
    address: String,
    total: Number,
    cartItems: [{
            _id: String,
            title: String,
            price: Number,
            count: Number
        }]
}, { timestamps: true });
exports.default = mongoose_1.default.model("order", exports.Order);
