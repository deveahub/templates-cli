"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ink_1 = require("ink");
const ink_select_input_1 = __importDefault(require("ink-select-input"));
const react_1 = __importDefault(require("react"));
const useGlobalState_1 = __importDefault(require("../state/useGlobalState"));
const ITEMS = [
    {
        label: 'React',
        value: 'react',
    },
    {
        label: 'Node',
        value: 'node',
    },
    {
        label: 'NextJS',
        value: 'nextjs',
    },
];
const PackageTypeSelect = () => {
    const { handlers: { goToNameStep }, } = (0, useGlobalState_1.default)();
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ink_1.Text, null, "Select package type:"),
        react_1.default.createElement(ink_select_input_1.default, { onSelect: (option) => goToNameStep(option.value), limit: 5, items: ITEMS })));
};
exports.default = PackageTypeSelect;
