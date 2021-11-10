"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const photo_controller_1 = require("../controllers/photo.controller");
const router = express_1.Router();
router.get('/photos', photo_controller_1.photoApi);
exports.default = router;
//# sourceMappingURL=api.js.map