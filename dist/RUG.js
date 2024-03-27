"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _PropTypes = require("./PropTypes");
var _Handle = _interopRequireDefault(require("./Handle"));
var _Context = _interopRequireDefault(require("./Context"));
var _Request = _interopRequireDefault(require("./Request"));
var _view = _interopRequireDefault(require("./view"));
var _Utils = require("./Utils");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var RUG = /*#__PURE__*/function (_React$Component) {
  function RUG(_ref) {
    var _this;
    var initialState = _ref.initialState,
      ssrSupport = _ref.ssrSupport;
    (0, _classCallCheck2["default"])(this, RUG);
    _this = _callSuper(this, RUG);
    _this.fileInput = /*#__PURE__*/_react["default"].createRef();
    _this.setSort = _this.setSort.bind(_this);
    _this.uploadFiles = _this.uploadFiles.bind(_this);
    _this.openDialogue = _this.openDialogue.bind(_this);
    _this.onProgress = _this.onProgress.bind(_this);
    _this.onSuccess = _this.onSuccess.bind(_this);
    _this.onWarning = _this.onWarning.bind(_this);
    _this.onError = _this.onError.bind(_this);
    _this.requests = [];
    _this.increment = 0;
    _this.state = {
      images: initialState.reverse().map(function (item) {
        return _this.create(_objectSpread({
          done: true
        }, item));
      }).reverse(),
      renderComponent: !ssrSupport
    };
    return _this;
  }
  (0, _inherits2["default"])(RUG, _React$Component);
  return (0, _createClass2["default"])(RUG, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
        ssrSupport = _this$props.ssrSupport,
        onChange = _this$props.onChange;

      // start application send initialState images
      onChange(this.state.images);

      // ssrSupport
      if (ssrSupport) {
        this.setState({
          renderComponent: true
        });
      }
    }
  }, {
    key: "create",
    value: function create(item) {
      var _this2 = this;
      var uid = "rug-".concat(Date.now(), "-").concat(this.increment++);
      item = _objectSpread({
        uid: uid,
        done: false,
        error: false,
        uploading: false,
        progress: 0,
        refresh: function refresh() {},
        abort: function abort() {},
        remove: function remove() {
          return _this2.remove(uid);
        },
        click: function click() {
          return _this2.onClick(uid);
        },
        select: function select() {
          return _this2.onSelected(uid);
        },
        upload: function upload(data) {
          return _this2.tryUpload(uid, data);
        }
      }, item);
      return item;
    }
  }, {
    key: "refresh",
    value: function refresh(uid) {
      var _this3 = this;
      this.setImage(uid, {
        error: false,
        done: false,
        progress: 0
      }, function (image) {
        _this3.upload(image);
      });
    }
  }, {
    key: "tryUpload",
    value: function () {
      var _tryUpload = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(uid, file) {
        var _this4 = this;
        var changes, source;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              changes = {};
              _context.prev = 1;
              if (!(file instanceof Blob)) {
                _context.next = 7;
                break;
              }
              _context.next = 5;
              return this.getImageURLToBlob(file);
            case 5:
              source = _context.sent;
              changes = {
                file: file,
                source: source
              };
            case 7:
              this.setImage(uid, _objectSpread(_objectSpread({}, changes), {}, {
                error: false,
                done: false,
                progress: 0
              }), function (image) {
                return _this4.upload(image);
              });
              _context.next = 12;
              break;
            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](1);
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[1, 10]]);
      }));
      function tryUpload(_x, _x2) {
        return _tryUpload.apply(this, arguments);
      }
      return tryUpload;
    }()
  }, {
    key: "remove",
    value: function () {
      var _remove = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(uid) {
        var _this5 = this;
        var images, deletedImage, key, image;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              images = this.state.images;
              _context2.t0 = _regenerator["default"].keys(images);
            case 2:
              if ((_context2.t1 = _context2.t0()).done) {
                _context2.next = 14;
                break;
              }
              key = _context2.t1.value;
              image = images[key];
              if (!(image.uid === uid)) {
                _context2.next = 12;
                break;
              }
              _context2.next = 8;
              return this.props.onConfirmDelete(image, images);
            case 8:
              if (!_context2.sent) {
                _context2.next = 12;
                break;
              }
              if (typeof image.abort === "function") {
                image.abort();
              }
              deletedImage = image;
              images.splice(key, 1);
            case 12:
              _context2.next = 2;
              break;
            case 14:
              this.setState({
                images: images
              }, function () {
                _this5.props.onChange(_this5.state.images);
                if (deletedImage) {
                  _this5.props.onDeleted(deletedImage, _this5.state.images);
                }
              });
            case 15:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function remove(_x3) {
        return _remove.apply(this, arguments);
      }
      return remove;
    }()
  }, {
    key: "onProgress",
    value: function onProgress(uid, percentage) {
      this.setImage(uid, {
        progress: isNaN(percentage) ? 0 : percentage
      });
    }
  }, {
    key: "onSuccess",
    value: function onSuccess(uid, response) {
      var _this6 = this;
      var append = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var _this$props2 = this.props,
        source = _this$props2.source,
        alias = _this$props2.alias;
      var fields = {};

      // extra object elements from the server service
      if (typeof alias === "function") {
        fields = alias(response);
      }
      if (!fields.source) {
        source = typeof source === "function" ? source(response) : response.source;
      }
      this.setImage(uid, _objectSpread(_objectSpread({
        source: source,
        done: true,
        error: false,
        uploading: false,
        progress: 100
      }, append), fields), function () {
        return _this6.props.onSuccess(_this6.state.images.find(function (item) {
          return item.uid === uid;
        }));
      });
    }
  }, {
    key: "onError",
    value: function onError(uid, _ref2) {
      var _this7 = this;
      var status = _ref2.status,
        response = _ref2.response;
      this.setImage(uid, {
        status: status,
        error: true,
        uploading: false,
        refresh: function refresh(data) {
          return _this7.refresh(uid, data);
        }
      }, function (image) {
        _this7.props.onError({
          status: status,
          response: response,
          image: image
        });
      });
    }
  }, {
    key: "onClick",
    value: function onClick(uid) {
      this.props.onClick(this.state.images.find(function (image) {
        return image.uid === uid;
      }));
    }
  }, {
    key: "onWarning",
    value: function onWarning(key, rules) {
      this.props.onWarning(key, rules);
    }
  }, {
    key: "setImage",
    value: function setImage(uid, append, finish) {
      var _this8 = this;
      var image,
        images = this.state.images;
      images = images.map(function (item) {
        if (item.uid === uid) {
          return image = _objectSpread(_objectSpread({}, item), append);
        }
        return item;
      });
      this.setState({
        images: images
      }, function () {
        if (finish) finish(image);
        _this8.props.onChange(images);
      });
    }
  }, {
    key: "onSelected",
    value: function onSelected(uid) {
      var _this9 = this;
      this.setState({
        images: this.state.images.map(function (item) {
          return Object.assign({}, item, {
            selected: item.uid === uid
          });
        })
      }, function () {
        return _this9.props.onChange(_this9.state.images);
      });
    }
  }, {
    key: "openDialogue",
    value: function openDialogue() {
      this.fileInput.current.value = "";
      this.fileInput.current.click();
    }
  }, {
    key: "uploadFiles",
    value: function () {
      var _uploadFiles = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(files) {
        var _this10 = this;
        var images, _iterator, _step, file, source, image;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              images = [];
              _iterator = _createForOfIteratorHelper(files);
              _context3.prev = 2;
              _iterator.s();
            case 4:
              if ((_step = _iterator.n()).done) {
                _context3.next = 18;
                break;
              }
              file = _step.value;
              _context3.prev = 6;
              _context3.next = 9;
              return this.getImageURLToBlob(file, images);
            case 9:
              source = _context3.sent;
              image = this.create({
                file: file,
                source: source,
                name: file.name,
                size: (0, _Utils.bytesToSize)(file.size)
              });
              images.push(image);
              _context3.next = 16;
              break;
            case 14:
              _context3.prev = 14;
              _context3.t0 = _context3["catch"](6);
            case 16:
              _context3.next = 4;
              break;
            case 18:
              _context3.next = 23;
              break;
            case 20:
              _context3.prev = 20;
              _context3.t1 = _context3["catch"](2);
              _iterator.e(_context3.t1);
            case 23:
              _context3.prev = 23;
              _iterator.f();
              return _context3.finish(23);
            case 26:
              this.setState({
                images: this.props.inOrder ? [].concat((0, _toConsumableArray2["default"])(this.state.images), images) : [].concat(images, (0, _toConsumableArray2["default"])(this.state.images))
              }, function () {
                if (_this10.props.autoUpload) {
                  // wait for setState process to finish
                  var i = -1;
                  var nextImage = function nextImage() {
                    i++;
                    if (images[i]) {
                      _this10.upload(images[i], nextImage);
                    }
                  };
                  nextImage();
                }
                _this10.props.onChange(_this10.state.images);
              });
            case 27:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[2, 20, 23, 26], [6, 14]]);
      }));
      function uploadFiles(_x4) {
        return _uploadFiles.apply(this, arguments);
      }
      return uploadFiles;
    }()
  }, {
    key: "getImageURLToBlob",
    value: function () {
      var _getImageURLToBlob = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(file) {
        var _this11 = this;
        var images,
          _this$props3,
          rules,
          accept,
          acceptType,
          warning,
          ImageURL,
          size,
          limit,
          width,
          height,
          image,
          _args4 = arguments;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              images = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : [];
              _this$props3 = this.props, rules = _this$props3.rules, accept = _this$props3.accept, acceptType = _this$props3.acceptType;
              images = images.concat(this.state.images);

              /*
               * stop and send message
               *
               */
              warning = function warning(key) {
                _this11.onWarning(key, _objectSpread(_objectSpread({}, rules), {}, {
                  accept: accept,
                  file: file
                }));
                throw new Error();
              };
              if (!(0, _Utils.isAccepted)(file.type, accept.map(function (type) {
                return "".concat(acceptType, "/").concat(type);
              }))) {
                warning("accept");
              }
              ImageURL = URL.createObjectURL(file); // if not available rules
              if (!(rules !== null)) {
                _context4.next = 16;
                break;
              }
              size = rules.size, limit = rules.limit, width = rules.width, height = rules.height;
              /**
               * limit
               *
               */
              if (limit && images.length >= limit) {
                warning("limit");
              }

              /**
               * size
               *
               */
              if (size * 1024 < file.size) {
                warning("size");
              }
              if (!(acceptType === "image")) {
                _context4.next = 16;
                break;
              }
              _context4.next = 13;
              return (0, _Utils.getImageDimensions)(ImageURL);
            case 13:
              image = _context4.sent;
              if (width) {
                if (image.width < width.min) {
                  warning("minWidth");
                } else if (image.width > width.max) {
                  warning("maxWidth");
                }
              }
              if (height) {
                if (image.height < height.min) {
                  warning("minHeight");
                } else if (image.height > height.max) {
                  warning("maxHeight");
                }
              }
            case 16:
              return _context4.abrupt("return", ImageURL);
            case 17:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function getImageURLToBlob(_x5) {
        return _getImageURLToBlob.apply(this, arguments);
      }
      return getImageURLToBlob;
    }()
  }, {
    key: "upload",
    value: function upload(_ref3, finish) {
      var uid = _ref3.uid,
        file = _ref3.file,
        data = _ref3.data;
      var _this$props4 = this.props,
        send = _this$props4.send,
        action = _this$props4.action,
        headers = _this$props4.headers,
        customRequest = _this$props4.customRequest,
        withCredentials = _this$props4.withCredentials;
      var request = customRequest || _Request["default"];
      var _request = request({
          uid: uid,
          file: file,
          data: data,
          send: send,
          action: action,
          headers: headers,
          withCredentials: withCredentials,
          onError: this.onError,
          onSuccess: this.onSuccess,
          onProgress: this.onProgress
        }),
        abort = _request.abort;
      this.setImage(uid, {
        abort: abort,
        uploading: true
      }, finish);
    }
  }, {
    key: "setSort",
    value: function setSort(images, diff) {
      var _this12 = this;
      this.setState({
        images: images
      }, function () {
        _this12.props.onChange(images);
        _this12.props.onSortEnd(images, diff);
      });
    }
  }, {
    key: "showChildren",
    value: function showChildren(options) {
      var _this$props5 = this.props,
        type = _this$props5.type,
        sorting = _this$props5.sorting,
        children = _this$props5.children,
        images = this.state.images;
      switch ((0, _typeof2["default"])(children)) {
        case "object":
          return children;
        case "function":
          return children(images, options);
        default:
          return (0, _view["default"])({
            type: type,
            sorting: sorting
          }, images);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this13 = this;
      // states
      var _this$state = this.state,
        images = _this$state.images,
        renderComponent = _this$state.renderComponent;

      // props
      var _this$props6 = this.props,
        className = _this$props6.className,
        style = _this$props6.style,
        accept = _this$props6.accept,
        acceptType = _this$props6.acceptType,
        header = _this$props6.header,
        footer = _this$props6.footer;
      var contextValue = {
          images: images,
          accept: accept,
          autoUpload: this.props.autoUpload,
          setSort: this.setSort,
          uploadFiles: this.uploadFiles,
          openDialogue: this.openDialogue
        },
        options = contextValue;

      // hide server side rendering
      if (!renderComponent) {
        return null;
      }
      return /*#__PURE__*/_react["default"].createElement(_Context["default"].Provider, {
        value: contextValue
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "rug ".concat(className),
        style: style
      }, header && (typeof header === "function" ? header(options) : (0, _Handle["default"])(options, header)), this.showChildren(options), footer && (typeof footer === "function" ? footer(options) : (0, _Handle["default"])(options, footer)), /*#__PURE__*/_react["default"].createElement("input", {
        multiple: true,
        type: "file",
        ref: this.fileInput,
        className: "rug-file-input",
        accept: accept.map(function (type) {
          return "".concat(acceptType, "/").concat(type);
        }),
        onChange: function onChange(event) {
          return _this13.uploadFiles(event.target.files);
        }
      })));
    }
  }]);
}(_react["default"].Component);
RUG.propTypes = _PropTypes.propTypes;
RUG.defaultProps = _PropTypes.defaultProps;
var _default = exports["default"] = RUG;