#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ink_1 = require("ink");
const react_1 = __importDefault(require("react"));
const StateProvider_1 = __importDefault(require("./state/StateProvider"));
const steps_1 = __importDefault(require("./steps"));
function Main() {
    return (react_1.default.createElement(ink_1.Box, { flexDirection: "column" },
        react_1.default.createElement(ink_1.Box, { borderStyle: "bold", justifyContent: "center" },
            react_1.default.createElement(ink_1.Text, { bold: true }, "\uD83E\uDD1F TEMPLATES CLI \uD83E\uDD1F")),
        react_1.default.createElement(StateProvider_1.default, null,
            react_1.default.createElement(steps_1.default, null))));
}
(0, ink_1.render)(react_1.default.createElement(Main, null));
