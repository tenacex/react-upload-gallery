"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = exports.defaultProps = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var func = function func() {};
var defaultProps = exports.defaultProps = {
  action: "",
  className: "",
  inOrder: false,
  ssrSupport: false,
  autoUpload: true,
  send: {},
  headers: {},
  style: {},
  accept: ["jpg", "jpeg", "png", "gif"],
  acceptType: "image",
  initialState: [],
  type: "card",
  sorting: true,
  header: true,
  footer: false,
  rules: null,
  customRequest: null,
  withCredentials: false,
  source: null,
  alias: null,
  onSuccess: func,
  onWarning: func,
  onDeleted: func,
  onChange: func,
  onSortEnd: func,
  onError: func,
  onClick: func,
  onConfirmDelete: function onConfirmDelete() {
    return true;
  }
};
var propTypes = exports.propTypes = {
  action: _propTypes["default"].string,
  className: _propTypes["default"].string,
  inOrder: _propTypes["default"].bool,
  ssrSupport: _propTypes["default"].bool,
  autoUpload: _propTypes["default"].bool,
  send: _propTypes["default"].object,
  headers: _propTypes["default"].object,
  style: _propTypes["default"].object,
  initialState: _propTypes["default"].arrayOf(_propTypes["default"].object),
  type: _propTypes["default"].oneOf(["card", "list"]),
  sorting: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].object]),
  header: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].object, _propTypes["default"].func]),
  footer: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].object, _propTypes["default"].func]),
  rules: _propTypes["default"].shape({
    size: _propTypes["default"].number,
    limit: _propTypes["default"].number,
    width: _propTypes["default"].shape({
      min: _propTypes["default"].number,
      max: _propTypes["default"].number
    }),
    height: _propTypes["default"].shape({
      min: _propTypes["default"].number,
      max: _propTypes["default"].number
    })
  }),
  customRequest: _propTypes["default"].func,
  withCredentials: _propTypes["default"].bool,
  source: _propTypes["default"].func,
  alias: _propTypes["default"].func,
  onSuccess: _propTypes["default"].func,
  onWarning: _propTypes["default"].func,
  onDeleted: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  onSortEnd: _propTypes["default"].func,
  onError: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  onConfirmDelete: _propTypes["default"].func,
  acceptType: _propTypes["default"].string,
  accept: _propTypes["default"].array
};