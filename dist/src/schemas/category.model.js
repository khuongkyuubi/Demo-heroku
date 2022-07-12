"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryModel = exports.categorySchema = void 0;
const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    type: { type: String, required: true }
});
exports.categorySchema = categorySchema;
const categoryModel = mongoose.model('Category', categorySchema);
exports.categoryModel = categoryModel;
//# sourceMappingURL=category.model.js.map