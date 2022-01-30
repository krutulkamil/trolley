// mongoose
import mongoose, {Document} from "mongoose";
// shortId
import shortId from "shortid";

const Schema = mongoose.Schema;

export const Order = new Schema({
        _id: {
            type: String,
            default: shortId.generate
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
    }, { timestamps: true }
);

interface IOrder extends Document {
    _id: string;
    email: string;
    name: string;
    address: string;
    total: string;
    cartItems: [{
        _id: string;
        title: string;
        price: number;
        count: number;
    }]
}

export default mongoose.model<IOrder>("order", Order);