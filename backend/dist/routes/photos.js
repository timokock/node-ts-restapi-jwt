"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const photo_controller_1 = require("../controllers/photo.controller");
const multer_1 = __importDefault(require("../libs/multer"));
const verifyToken_1 = require("../libs/verifyToken");
const router = express_1.Router();
router.get('/photos', verifyToken_1.TokenValidation, photo_controller_1.getPhotos);
router.get('/photos/:id', verifyToken_1.TokenValidation, photo_controller_1.getPhoto);
router.post('/photos', multer_1.default.single('image'), verifyToken_1.TokenValidation, photo_controller_1.createPhoto);
router.delete('/photos/:id', verifyToken_1.TokenValidation, photo_controller_1.deletePhoto);
exports.default = router;
//# sourceMappingURL=photos.js.map