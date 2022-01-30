// mongoose
import mongoose, {Document} from "mongoose";
// shortId
import shortId from "shortid";

const Schema = mongoose.Schema;

const Product = new Schema({
    _id: {type: String, default: shortId.generate},
    image: String,
    title: String,
    description: String,
    availableSizes: [String],
    price: Number,
});

interface IProduct extends Document {
    _id: string;
    image: string;
    title: string;
    description: string;
    availableSizes: string[];
    price: number;
}

export default mongoose.model<IProduct>("products", Product);