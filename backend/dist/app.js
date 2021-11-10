"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const auth_1 = __importDefault(require("./routes/auth"));
const photos_1 = __importDefault(require("./routes/photos"));
const index_1 = __importDefault(require("./routes/index"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
//Settings
app.set('port', process.env.PORT || 3000);
//Middlewares
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use(cors_1.default());
//Routes
app.use('/auth', auth_1.default);
app.use('/api', photos_1.default);
app.use('/', index_1.default);
//Public files store folder
app.use('/uploads', express_1.default.static(path_1.default.resolve('uploads')));
exports.default = app;
//# sourceMappingURL=app.js.map