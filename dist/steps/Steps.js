"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const useGlobalState_1 = __importDefault(require("../state/useGlobalState"));
const PackageNameInput_1 = __importDefault(require("./PackageNameInput"));
const PackageTypeSelect_1 = __importDefault(require("./PackageTypeSelect"));
const steps = {
    'package-type': PackageTypeSelect_1.default,
    'package-name': PackageNameInput_1.default,
};
const Steps = () => {
    const { currentStep } = (0, useGlobalState_1.default)();
    const Component = steps[currentStep];
    return react_1.default.createElement(Component, null);
};
exports.default = Steps;
