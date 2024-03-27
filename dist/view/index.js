"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Card", {
  enumerable: true,
  get: function get() {
    return _Card["default"];
  }
});
Object.defineProperty(exports, "List", {
  enumerable: true,
  get: function get() {
    return _List["default"];
  }
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _react = _interopRequireDefault(require("react"));
var _List = _interopRequireDefault(require("./List"));
var _Card = _interopRequireDefault(require("./Card"));
var _DragArea = _interopRequireDefault(require("../DragArea"));
var Item = function Item(type, image) {
  switch (type) {
    case "card":
      return /*#__PURE__*/_react["default"].createElement(_Card["default"], {
        image: image
      });
    case "list":
      return /*#__PURE__*/_react["default"].createElement(_List["default"], {
        image: image
      });
    default:
  }
};
var _default = exports["default"] = function _default(_ref, images) {
  var type = _ref.type,
    sorting = _ref.sorting;
  var className = "rug-items __".concat(type, " ").concat(sorting ? "__sorting" : "");
  var options = (0, _typeof2["default"])(sorting) === "object" ? sorting : {};
  return sorting ? /*#__PURE__*/_react["default"].createElement(_DragArea["default"], (0, _extends2["default"])({}, options, {
    className: className
  }), function (image) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "rug-item"
    }, Item(type, image));
  }) : /*#__PURE__*/_react["default"].createElement("div", {
    className: className
  }, images.map(function (image, key) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "rug-item",
      key: key
    }, Item(type, image));
  }));
};