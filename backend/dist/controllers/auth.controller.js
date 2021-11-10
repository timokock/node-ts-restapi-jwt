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
const User_1 = __importDefault(require("../models/User"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
/* Register a new user */
exports.register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Saving new user
    const user = new User_1.default({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    user.password = yield user.encryptPass(user.password);
    const savedUser = yield user.save();
    //Adding token
    const token = jsonwebtoken_1.default.sign({ _id: savedUser._id }, process.env.TOKEN_SECRET || 'tokentest');
    //Sending response Header/Body
    res.header('auth-token', token).json({ savedUser, token });
});
/* Login with existing user */
exports.login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const currentUser = yield User_1.default.findOne({ email: req.body.email });
    if (!currentUser) {
        return res.status(404).json('User doesn´t exist or is wrong');
    }
    else {
        const isValid = yield currentUser.validatePass(req.body.password);
        if (!isValid) {
            return res.status(404).json('Invalid password! Please try again.');
        }
        else {
            const token = jsonwebtoken_1.default.sign({ _id: currentUser._id }, process.env.TOKEN_SECRET || 'tokentest', { expiresIn: 60 * 60 * 24 });
            return res.header('auth-token', token).json({ currentUser, token });
        }
    }
});
/* Get user profile */
exports.profile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.default.findById(req.userID, { password: 0 });
    if (!user) {
        return res.status(404).json('No user found');
    }
    else {
        return res.json(user);
    }
});
//# sourceMappingURL=auth.controller.js.map