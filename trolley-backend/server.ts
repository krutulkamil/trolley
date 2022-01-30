// express
import express from 'express';
// body-parser
import bodyParser from 'body-parser';
// cors
import cors from 'cors';
// dotenv
import dotenv from 'dotenv';
// mongodb connect
import connectMongoDB from "./config/db";
// routes
import productsRoutes from "./routes/product";
import orderRoutes from "./routes/order";

const app = express();

dotenv.config();
connectMongoDB();

app.use(cors());
app.use(bodyParser.json());

app.use("/api", productsRoutes);
app.use("/api", orderRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});