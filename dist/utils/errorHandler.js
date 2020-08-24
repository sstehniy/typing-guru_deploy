"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
exports.errorHandler = (error, _req, res, _next) => {
    res
        .status(error.status)
        .json({ message: error.message, data: error.data ? error.data : {} });
};
//# sourceMappingURL=errorHandler.js.map