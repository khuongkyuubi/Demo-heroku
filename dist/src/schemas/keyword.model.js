"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.keywordsModel = exports.keywordsSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const keywordsSchema = new mongoose_1.default.Schema({
    keyword: String
});
exports.keywordsSchema = keywordsSchema;
const keywordsModel = mongoose_1.default.model("Keyword", keywordsSchema);
exports.keywordsModel = keywordsModel;
//# sourceMappingURL=keyword.model.js.map