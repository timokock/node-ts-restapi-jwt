"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Photo_1 = __importDefault(require("../models/Photo"));
function getPhotos(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const allPhotos = yield Photo_1.default.find();
        return res.json(allPhotos);
    });
}
exports.getPhotos = getPhotos;
;
function getPhoto(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const photo = yield Photo_1.default.findById(req.params.id);
        return res.json(photo);
    });
}
exports.getPhoto = getPhoto;
;
function createPhoto(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { title, description } = req.body;
        const imgPath = 'http://localhost:4000/' + req.file.path.replace(/\\/g, "/");
        const newPhoto = {
            title: title,
            description: description,
            imagePath: imgPath
        };
        const photo = new Photo_1.default(newPhoto);
        yield photo.save();
        return res.json({
            message: 'Photo successfully saved',
            photo
        });
    });
}
exports.createPhoto = createPhoto;
;
function deletePhoto(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const photo = yield Photo_1.default.findOneAndRemove(req.params.id);
        return res.json({
            message: 'Photo deleted',
            photo
        });
    });
}
exports.deletePhoto = deletePhoto;
;
//# sourceMappingURL=photo.controller.js.map