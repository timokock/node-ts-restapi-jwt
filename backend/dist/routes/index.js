"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_controller_1 = require("../controllers/index.controller");
const router = express_1.Router();
router.get('/', index_controller_1.index);
exports.default = router;
//# sourceMappingURL=index.js.map