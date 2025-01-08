"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.envConfig = void 0;
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const process_1 = require("process");
dotenv_1.default.config({ path: path_1.default.join((0, process_1.cwd)(), ".env") });
exports.envConfig = {
    port: 5000,
    mongo_uri: process.env.MONGO_URI,
};
