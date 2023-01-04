"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000; // Change to be in dotenv
app.get("/", (req, res) => {
    res.send("THIS WORKS EVEN BETTER FOR TYPESCRIPT");
});
app.listen(port, () => {
    console.log(`[Server]: I am running at http://localhost:${port}`);
});
