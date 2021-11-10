"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
//Mongoose Schema
const schema = new mongoose_1.Schema({
    title: String,
    description: String,
    imagePath: String
});
exports.default = mongoose_1.model('Photo', schema);
//# sourceMappingURL=Photo.js.map