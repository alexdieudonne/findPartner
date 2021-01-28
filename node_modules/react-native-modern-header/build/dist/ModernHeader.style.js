"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._container = void 0;
const react_native_1 = require("react-native");
exports._container = (height, width, backgroundColor) => ({
    width,
    height,
    top: 0,
    backgroundColor,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
});
exports.default = react_native_1.StyleSheet.create({
    leftCompStyle: {
        left: 16,
        position: "absolute",
    },
    rightCompStyle: {
        right: 16,
        position: "absolute",
    },
    titleStyle: {
        fontWeight: "800",
    },
});
