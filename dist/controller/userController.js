"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userMode_1 = __importDefault(require("../model/userMode"));
const userCreate = async (request, response) => {
    let dataForm = request.body;
    // console.log("body  ",dataForm)
    let createData = await userMode_1.default.create(dataForm);
    // console.log("createData  ",createData)
    return response.status(200).send({ msg: "Success", Data: createData });
};
exports.default = userCreate;
