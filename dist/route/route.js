"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = __importDefault(require("../controller/userController"));
const routes = express_1.default.Router();
//logic
routes.get('/findUser', (request, response) => {
    response.status(200).send({ msg: "Welcome to Netoyed, A Vertel" });
});
routes.post('/createUser', userController_1.default);
exports.default = routes;
