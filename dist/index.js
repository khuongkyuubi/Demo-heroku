"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = parseInt(process.env.PORT) || 4500;
const app = (0, express_1.default)();
app.set("view engine", "ejs");
app.set('views', './src/views');
app.use(body_parser_1.default.json());
app.get("/", ((req, res, next) => {
    return res.json({ message: "Hello World!" });
}));
app.listen(PORT, () => {
    console.log("App running on port:", PORT);
});
//# sourceMappingURL=index.js.map