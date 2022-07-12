"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.publisherModel = exports.publisherSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const publisherSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true }
});
exports.publisherSchema = publisherSchema;
const publisherModel = mongoose_1.default.model("Publisher", publisherSchema);
exports.publisherModel = publisherModel;
//# sourceMappingURL=publisher.model.js.map