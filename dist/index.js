"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_1 = __importDefault(require("./route/route"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// app.use(express.urlencoded({extended:false}))
const port = 3000;
const host = "localhost";
// const dbUri:string="mongodb+srv://Assignment_Vertel:U6kgLdluuxVvIQ4R@cluster0.vchow1a.mongodb.net/Netoyed"
mongoose_1.default.connect("mongodb+srv://Assignment_Vertel:U6kgLdluuxVvIQ4R@cluster0.vchow1a.mongodb.net/Netoyed")
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err));
app.use("/api", route_1.default);
app.listen(port, host, () => {
    console.log(`server is running on given port ${port}`);
});
