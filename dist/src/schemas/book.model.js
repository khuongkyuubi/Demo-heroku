"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookModel = void 0;
const mongoose_1 = require("mongoose");
const { publisherSchema } = require("./publisher.model");
const { categorySchema } = require("./category.model");
const keyword_model_1 = require("./keyword.model");
const bookSchema = new mongoose_1.Schema({
    title: String,
    author: String,
    category: { type: mongoose_1.Schema.Types.ObjectId, ref: "Category" },
    publisher: { type: mongoose_1.Schema.Types.ObjectId, ref: "Publisher" },
    keywords: [keyword_model_1.keywordsSchema],
});
const bookModel = (0, mongoose_1.model)('Book', bookSchema);
exports.bookModel = bookModel;
//# sourceMappingURL=book.model.js.map