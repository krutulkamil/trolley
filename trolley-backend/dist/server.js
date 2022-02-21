"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// express
const express_1 = __importDefault(require("express"));
// body-parser
const body_parser_1 = __importDefault(require("body-parser"));
// cors
const cors_1 = __importDefault(require("cors"));
// dotenv
const dotenv_1 = __importDefault(require("dotenv"));
// mongodb connect
const db_1 = __importDefault(require("./config/db"));
// routes
const product_1 = __importDefault(require("./routes/product"));
const order_1 = __importDefault(require("./routes/order"));
const app = express_1.default();
dotenv_1.default.config();
db_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.json());
app.use("/api", product_1.default);
app.use("/api", order_1.default);
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
