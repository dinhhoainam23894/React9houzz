module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 46);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(47);


/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(__webpack_require__(7));

var _react = _interopRequireDefault(__webpack_require__(0));

var _head = _interopRequireDefault(__webpack_require__(5));

var _link = _interopRequireDefault(__webpack_require__(33));

var _reactstrap = __webpack_require__(10);

var _router = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ErrorPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ErrorPage, _React$Component);

  function ErrorPage() {
    _classCallCheck(this, ErrorPage);

    return _possibleConstructorReturn(this, (ErrorPage.__proto__ || Object.getPrototypeOf(ErrorPage)).apply(this, arguments));
  }

  _createClass(ErrorPage, [{
    key: "render",
    value: function render() {
      var response;

      switch (this.props.errorCode) {
        case 200: // Also display a 404 if someone requests /_error explicitly

        case 404:
          response = _react.default.createElement("div", {
            className: "jsx-978077609" + " " + "container"
          }, _react.default.createElement("div", {
            className: "jsx-978077609" + " " + "row mt-5"
          }, _react.default.createElement("div", {
            className: "jsx-978077609" + " " + "col-12 text-center title mt-3 mb-3"
          }, _react.default.createElement("img", {
            src: "/static/images/404.png",
            className: "jsx-978077609"
          })), _react.default.createElement("div", {
            style: {
              color: "#d5d8f3"
            },
            className: "jsx-978077609" + " " + "col-12 text-center font-25 mt-3"
          }, "Ch\xFAng t\xF4i xin l\u1ED7i. Trang b\u1EA1n t\xECm ki\u1EBFm kh\xF4ng t\u1ED3n t\u1EA1i"), _react.default.createElement("div", {
            className: "jsx-978077609" + " " + "col-6 offset-md-3 mt-3 text-center explain font-14"
          }, "Th\u1EADt kh\xF4ng may l\xE0 trang b\u1EA1n \u0111ang t\xECm ki\u1EBFm kh\xF4ng th\u1EC3 t\xECm th\u1EA5y. N\xF3 c\xF3 th\u1EC3 t\u1EA1m th\u1EDDi kh\xF4ng c\xF3, di chuy\u1EC3n ho\u1EB7c kh\xF4ng c\xF2n t\u1ED3n t\u1EA1i. Ki\u1EC3m tra Url m\xE0 b\u1EA1n \u0111\xE3 nh\u1EADp cho b\u1EA5t k\u1EF3 l\u1ED7i n\xE0o v\xE0 th\u1EED l\u1EA1i."), _react.default.createElement("div", {
            className: "jsx-978077609" + " " + "col-12 text-center mt-3"
          }, _react.default.createElement("a", {
            href: "/",
            className: "jsx-978077609" + " " + "btn btn-primary font-weight-bold"
          }, "V\u1EC1 trang ch\u1EE7"))), _react.default.createElement(_style.default, {
            styleId: "978077609",
            css: ["body{margin:0;padding:0;background:url(\"/static/images/background404.jpg\");display:table;width:100% !important;height:100%;min-height:100%;color:#ffffff !important;background-repeat:no-repeat;background-position:center center;font-family:helvetica-ttf;}", ".container{padding-top:11rem !important;padding-bottom:9rem !important;max-width:100% !important;text-align:center;display:table-cell;background-color:rgba(185,83,164,0.6) !important;background-size:cover;height:100%;}", ".container{max-width:400px;}", ".title{font-size:100px;}"]
          }));
          break;

        case 500:
          response = _react.default.createElement("div", null, _react.default.createElement(_head.default, null), _react.default.createElement(_reactstrap.Container, {
            className: "pt-5 text-center"
          }, _react.default.createElement("h1", {
            className: "display-4"
          }, "Internal Server Error"), _react.default.createElement("p", null, "An internal server error occurred.")));
          break;

        default:
          response = _react.default.createElement("div", null, _react.default.createElement(_head.default, null), _react.default.createElement(_reactstrap.Container, {
            className: "pt-5 text-center"
          }, _react.default.createElement("h1", {
            className: "display-4"
          }, "HTTP ", this.props.errorCode, " Error"), _react.default.createElement("p", null, "An ", _react.default.createElement("strong", null, "HTTP ", this.props.errorCode), " error occurred while trying to access ", _react.default.createElement("strong", null, this.props.router.pathname))));
      }

      return response;
    }
  }], [{
    key: "propTypes",
    value: function propTypes() {
      return {
        errorCode: _react.default.PropTypes.number.isRequired,
        url: _react.default.PropTypes.string.isRequired
      };
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var res = _ref.res,
          xhr = _ref.xhr;
      var errorCode = res ? res.statusCode : xhr ? xhr.status : null;
      return {
        errorCode: errorCode
      };
    }
  }]);

  return ErrorPage;
}(_react.default.Component);

var _default = (0, _router.withRouter)(ErrorPage);

exports.default = _default;

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });