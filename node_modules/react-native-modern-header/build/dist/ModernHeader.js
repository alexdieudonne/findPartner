"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const prop_types_1 = tslib_1.__importDefault(require("prop-types"));
const react_native_1 = require("react-native");
const react_native_dynamic_vector_icons_1 = tslib_1.__importDefault(require("react-native-dynamic-vector-icons"));
const ModernHeader_style_1 = tslib_1.__importStar(require("./ModernHeader.style"));
const hitslopObj = {
    top: 8,
    left: 8,
    right: 8,
    bottom: 8,
};
const ModernHeader = (props) => {
    const { title, width, height, titleStyle, leftDisable, leftIconName, leftIconType, leftIconSize, rightDisable, leftIconColor, rightIconName, rightIconType, rightIconSize, rightIconColor, leftIconOnPress, backgroundColor, rightIconOnPress, leftIconComponent, rightIconComponent, } = props;
    const renderLeftIconComp = () => !leftDisable && (<react_native_1.TouchableOpacity style={ModernHeader_style_1.default.leftCompStyle} hitSlop={hitslopObj} onPress={leftIconOnPress}>
        {leftIconComponent || (<react_native_dynamic_vector_icons_1.default name={leftIconName} type={leftIconType} size={leftIconSize} color={leftIconColor}/>)}
      </react_native_1.TouchableOpacity>);
    const renderRightIconComp = () => !rightDisable && (<react_native_1.TouchableOpacity style={ModernHeader_style_1.default.rightCompStyle} onPress={rightIconOnPress}>
        {rightIconComponent || (<react_native_dynamic_vector_icons_1.default name={rightIconName} type={rightIconType} size={rightIconSize} color={rightIconColor}/>)}
      </react_native_1.TouchableOpacity>);
    const renderTitle = () => <react_native_1.Text style={titleStyle}>{title}</react_native_1.Text>;
    return (<react_native_1.View style={ModernHeader_style_1._container(height, width, backgroundColor)}>
      {renderLeftIconComp()}
      {renderTitle()}
      {renderRightIconComp()}
    </react_native_1.View>);
};
ModernHeader.propTypes = {
    left: prop_types_1.default.number,
    right: prop_types_1.default.number,
    title: prop_types_1.default.string,
    leftIconName: prop_types_1.default.string,
    leftIconType: prop_types_1.default.string,
    leftIconColor: prop_types_1.default.string,
    rightIconName: prop_types_1.default.string,
    rightIconType: prop_types_1.default.string,
    rightIconColor: prop_types_1.default.string,
    backgroundColor: prop_types_1.default.string,
    width: prop_types_1.default.oneOfType([prop_types_1.default.number, prop_types_1.default.string]),
    height: prop_types_1.default.oneOfType([prop_types_1.default.number, prop_types_1.default.string]),
    leftIconSize: prop_types_1.default.oneOfType([prop_types_1.default.number, prop_types_1.default.string]),
    rightIconSize: prop_types_1.default.oneOfType([prop_types_1.default.number, prop_types_1.default.string]),
};
ModernHeader.defaultProps = {
    left: 16,
    right: 16,
    height: 70,
    width: "100%",
    leftIconSize: 25,
    rightIconSize: 25,
    title: "Header Title",
    rightIconName: "heart",
    rightIconType: "Entypo",
    backgroundColor: "#fff",
    leftIconType: "Ionicons",
    leftIconColor: "#bbbabe",
    rightIconColor: "#23c4c1",
    titleStyle: ModernHeader_style_1.default.titleStyle,
    leftIconName: "ios-arrow-back",
};
exports.default = ModernHeader;
