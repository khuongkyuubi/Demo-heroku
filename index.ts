import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import bookRoutes from './src/router/book.router';

const PORT = parseInt(process.env.PORT) || 4500;
const app = express();
app.set("view engine", "ejs");
app.set('views', './src/views');

const DB_URI = process.env.DB_URI || ""/*`mongodb://localhost:27017/dbTest`*/;
mongoose.connect(DB_URI)
.then(() => console.log('DB Connected!'))
.catch(error => console.log('DB connection error:', error.message));
app.use(bodyParser.json());
app.get("/", ((req, res, next) => {
  return res.json({message: "Hello World!"})
}))

app.use('/book', bookRoutes);
app.listen(PORT, () => {
  console.log("App running on port:", PORT)
})
