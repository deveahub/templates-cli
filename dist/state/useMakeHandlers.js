"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ink_1 = require("ink");
const createPackage_1 = __importDefault(require("../creator/createPackage"));
const useMakeHandler = (_, setState) => {
    const { exit } = (0, ink_1.useApp)();
    const goToNameStep = (packageType) => {
        setState((currState) => ({
            currentStep: 'package-name',
            data: Object.assign(Object.assign({}, currState.data), { packageType }),
        }));
    };
    const goToFinishStep = (packageName) => {
        setState((currState) => {
            const newState = {
                currentStep: 'package-name',
                data: Object.assign(Object.assign({}, currState.data), { packageName }),
            };
            (0, createPackage_1.default)(newState.data);
            return newState;
        });
        exit();
    };
    return {
        goToFinishStep,
        goToNameStep,
    };
};
exports.default = useMakeHandler;
