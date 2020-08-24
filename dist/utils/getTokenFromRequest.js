"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const getTokenFromRequest = (req) => {
    const auth = req.get('authorization');
    if (auth && auth.trim().startsWith('Bearer'))
        return auth.substring(7);
    else
        return null;
};
router.use((req, _res, next) => {
    const token = getTokenFromRequest(req);
    const decodedToken = jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET);
    if (!token || !decodedToken.id) {
        return next({ status: 401, message: 'Token invalid or missing' });
    }
    else {
        req.body.decodedToken = decodedToken; //eslint-disable-line
        next();
    }
});
exports.default = router;
//# sourceMappingURL=getTokenFromRequest.js.map