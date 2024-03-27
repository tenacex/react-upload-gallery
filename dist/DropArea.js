"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _Context = _interopRequireDefault(require("./Context"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Utils = require("./Utils");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var DropArea = /*#__PURE__*/function (_React$Component) {
  function DropArea() {
    var _this;
    (0, _classCallCheck2["default"])(this, DropArea);
    _this = _callSuper(this, DropArea);
    _this.onDrop = _this.onDrop.bind(_this);
    _this.onDragOver = _this.onDragOver.bind(_this);
    _this.onDragEnter = _this.onDragEnter.bind(_this);
    _this.onDragLeave = _this.onDragLeave.bind(_this);
    _this.state = {
      isDrag: false,
      rejected: false
    };
    _this.dragCounter = 0;
    return _this;
  }
  (0, _inherits2["default"])(DropArea, _React$Component);
  return (0, _createClass2["default"])(DropArea, [{
    key: "onDrop",
    value: function onDrop(event) {
      var _this$props = this.props,
        onDrop = _this$props.onDrop,
        uploadFiles = _this$props.uploadFiles;
      this.dragCounter = 0;
      event.preventDefault();
      event.stopPropagation();
      var files = (0, _toConsumableArray2["default"])((0, _Utils.getEventFiles)(event));
      this.setState({
        isDrag: false
      });
      uploadFiles(files);
      onDrop(event);
    }
  }, {
    key: "onDragOver",
    value: function onDragOver(event) {
      event.preventDefault();
      event.stopPropagation();
      this.props.onDragOver(event);
    }
  }, {
    key: "onDragEnter",
    value: function onDragEnter(event) {
      var items = (0, _toConsumableArray2["default"])(event.dataTransfer.items);
      this.setState({
        isDrag: items.length > 0
      });
      this.dragCounter++;
      this.props.onDragEnter(event);
    }
  }, {
    key: "onDragLeave",
    value: function onDragLeave(event) {
      event.preventDefault();
      event.stopPropagation();
      this.dragCounter--;
      if (this.dragCounter === 0) {
        this.setState({
          isDrag: false
        });
      }
      this.props.onDragLeave(event);
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children,
        isDrag = this.state.isDrag;
      return /*#__PURE__*/_react["default"].createElement("div", {
        onDrop: this.onDrop,
        onDragOver: this.onDragOver,
        onDragEnter: this.onDragEnter,
        onDragLeave: this.onDragLeave
      }, children(isDrag));
    }
  }]);
}(_react["default"].Component);
var func = function func() {};
DropArea.defaultProps = {
  onDrop: func,
  onDragOver: func,
  onDragEnter: func,
  onDragLeave: func
};
DropArea.propTypes = {
  onDrop: _propTypes["default"].func,
  onDragOver: _propTypes["default"].func,
  onDragEnter: _propTypes["default"].func,
  onDragLeave: _propTypes["default"].func
};
var _default = exports["default"] = function _default(props) {
  return /*#__PURE__*/_react["default"].createElement(_Context["default"].Consumer, null, function (values) {
    return /*#__PURE__*/_react["default"].createElement(DropArea, (0, _extends2["default"])({}, props, values));
  });
};