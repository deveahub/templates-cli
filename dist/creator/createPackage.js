"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
function copyDir(src, dest) {
    return __awaiter(this, void 0, void 0, function* () {
        const entries = yield promises_1.default.readdir(src, { withFileTypes: true });
        yield promises_1.default.mkdir(dest);
        // eslint-disable-next-line no-restricted-syntax
        for (const entry of entries) {
            const srcPath = path_1.default.join(src, entry.name);
            const destPath = path_1.default.join(dest, entry.name);
            if (entry.isDirectory()) {
                // eslint-disable-next-line no-await-in-loop
                yield copyDir(srcPath, destPath);
            }
            else {
                // eslint-disable-next-line no-await-in-loop
                yield promises_1.default.copyFile(srcPath, destPath);
            }
        }
    });
}
const TEMPLATES_DIR = path_1.default.resolve(__dirname, '..', '..', 'templates');
const PACKAGES_DIR = path_1.default.resolve(process.env.PWD, 'packages');
const APPS_DIR = path_1.default.resolve(process.env.PWD, 'apps');
const DIR_TO_TYPE = {
    nextjs: APPS_DIR,
    node: PACKAGES_DIR,
    react: PACKAGES_DIR,
};
const normalizePackageNameToDirectory = (packageName) => {
    const output = packageName.replace(/\//g, '__');
    return output;
};
const changeNameOnPackageJSON = ({ packageName, packageType }, normalizedPackageName) => __awaiter(void 0, void 0, void 0, function* () {
    const packageDir = path_1.default.resolve(DIR_TO_TYPE[packageType], normalizedPackageName, 'package.json');
    const packageJSON = (0, fs_1.readFileSync)(packageDir);
    const newPackage = Object.assign(Object.assign({}, JSON.parse(packageJSON)), { name: packageName });
    yield promises_1.default.rm(packageDir);
    yield promises_1.default.writeFile(packageDir, JSON.stringify(newPackage));
});
const createPackage = (state) => __awaiter(void 0, void 0, void 0, function* () {
    const normalizedPackageName = normalizePackageNameToDirectory(state.packageName);
    yield copyDir(`${TEMPLATES_DIR}/${state.packageType}`, `${DIR_TO_TYPE[state.packageType]}/${normalizedPackageName}`);
    yield changeNameOnPackageJSON(state, normalizedPackageName);
});
exports.default = createPackage;
