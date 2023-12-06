"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledModem = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{position:relative;display:block;box-sizing:border-box;transform:scale(var(--ggs,1));width:20px;height:20px;border-radius:4px;border-top:12px solid transparent;box-shadow:inset 0 0 0 2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;background:currentColor;right:4px;bottom:3px;width:2px;height:2px;border-radius:22px}&::after{right:-1px;bottom:11px;width:20px;transform:rotate(30deg)}\n"], ["\n  &{position:relative;display:block;box-sizing:border-box;transform:scale(var(--ggs,1));width:20px;height:20px;border-radius:4px;border-top:12px solid transparent;box-shadow:inset 0 0 0 2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;background:currentColor;right:4px;bottom:3px;width:2px;height:2px;border-radius:22px}&::after{right:-1px;bottom:11px;width:20px;transform:rotate(30deg)}\n"])));
exports.Modem = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledModem, tslib_1.__assign({}, props, { ref: ref, "icon-role": "modem" }))));
});
var templateObject_1;
//# sourceMappingURL=Modem.js.map