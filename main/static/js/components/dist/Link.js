"use strict";
exports.__esModule = true;
var react_1 = require("react"); // Ensure React is imported if you're using JSX
var CursorContext_1 = require("./CursorContext");
var Link = function (_a) {
    var url = _a.url, text = _a.text, isCTA = _a.isCTA;
    var _b = CursorContext_1.useCursor(), enablePointerCursor = _b.enablePointerCursor, disablePointerCursor = _b.disablePointerCursor, enableGo = _b.enableGo, disableGo = _b.disableGo, enableEmail = _b.enableEmail, disableEmail = _b.disableEmail;
    return !isCTA ? (react_1["default"].createElement("a", { href: url, onMouseEnter: function () { enablePointerCursor(); enableGo(); }, onMouseLeave: function () { disablePointerCursor(); disableGo(); }, target: "_blank", rel: "noreferrer", className: 'inline-block relative' },
        react_1["default"].createElement("span", { className: 'plus absolute' }, "+"),
        react_1["default"].createElement("span", { className: 'border-bottom absolute w-full' }),
        react_1["default"].createElement("span", { className: 'link-text inline-block' }, text))) : react_1["default"].createElement("a", { href: 'mailto:aryamaulana1230@gmail.com', className: 'email inline-block relative overflow-hidden', onMouseEnter: function () { enablePointerCursor(); enableEmail(); }, onMouseLeave: function () { disablePointerCursor(); disableEmail(); } },
        react_1["default"].createElement("span", { className: 'plus absolute' }, "+"),
        react_1["default"].createElement("span", { className: 'link-text inline-block' },
            "AryaMaulana",
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("span", { className: 'second-line relative' }, "aryamaulana1230@gmail.com")));
};
exports["default"] = Link;
