"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bookRoutes = (0, express_1.Router)();
const book_model_1 = require("../schemas/book.model");
const multer_1 = __importDefault(require("multer"));
const publisher_model_1 = require("../schemas/publisher.model");
const category_model_1 = require("../schemas/category.model");
const keyword_model_1 = require("../schemas/keyword.model");
const upload = (0, multer_1.default)();
bookRoutes.get('/create', (req, res) => {
    res.render("createBook");
});
bookRoutes.post('/create', upload.none(), async (req, res) => {
    try {
        const publisher = new publisher_model_1.publisherModel({
            name: req.body.publisher
        });
        const category = new category_model_1.categoryModel({
            type: req.body.category
        });
        const keyword = new keyword_model_1.keywordsModel({
            keyword: req.body.keyword
        });
        console.log(keyword);
        const newBook = new book_model_1.bookModel({
            title: req.body.title,
            author: req.body.author,
            category: category._id,
            publisher: publisher._id,
            keywords: [keyword]
        });
        const p1 = publisher.save();
        const p2 = category.save();
        const p3 = newBook.save();
        const [publisherReturn, categoryReturn, book] = await Promise.all([p1, p2, p3]);
        if (book) {
            res.render("success");
        }
        else {
            res.render("error");
        }
    }
    catch (err) {
        console.log(err.message);
        res.render("error");
    }
});
bookRoutes.post('/update/:id', upload.none(), async (req, res) => {
    try {
        const book = await book_model_1.bookModel.findOne({ _id: req.body.id });
        book.title = req.body.title;
        book.description = req.body.description;
        const author = await book_model_1.bookModel.findOne({ _id: book.author });
        author.name = req.body.author;
        await author.save();
        await book.save();
        if (book) {
            res.render("success");
        }
        else {
            res.render("error");
        }
    }
    catch (err) {
        res.render("error");
    }
});
bookRoutes.get('/list', async (req, res) => {
    try {
        let query = {};
        let keywordFind = req.query.keyword || "";
        let publisherFind = req.query.publisher || "";
        let categoryFind = req.query.category || "";
        let publisherID = await publisher_model_1.publisherModel.find({ name: { $regex: publisherFind, $options: "gim" } }, { "_id": 1 });
        query = { "keywords.keyword": { $regex: keywordFind, $options: "gim" }, "publisher": { $in: publisherID } };
        const categories = await category_model_1.categoryModel.find({});
        let categoriesId = categories.map((category) => {
            return { "_id": category["_id"] };
        });
        for (const category of categoriesId) {
            if (String(category._id) === categoryFind) {
                query["category"] = categoryFind;
                break;
            }
        }
        if (!query["category"]) {
        }
        const books = await book_model_1.bookModel.find(query).populate([{ path: "publisher", select: "name" }, {
                path: "category",
                select: "type"
            }]);
        res.render("listBook", { books: books, keywordFind, publisherFind, categories });
    }
    catch (err) {
        console.log(err.message);
        res.render("error");
    }
});
exports.default = bookRoutes;
//# sourceMappingURL=book.router.js.map