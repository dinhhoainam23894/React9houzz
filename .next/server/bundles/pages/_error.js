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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_error.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("react"));

var _head = _interopRequireDefault(__webpack_require__("next/head"));

var _link = _interopRequireDefault(__webpack_require__("next/link"));

var _reactstrap = __webpack_require__("reactstrap");

var _router = __webpack_require__("next/router");

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/pages/_error.js";

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
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            }
          }, _react.default.createElement(_head.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            }
          }), _react.default.createElement(_reactstrap.Container, {
            className: "pt-5 text-center",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            }
          }, _react.default.createElement("h1", {
            className: "display-4",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            }
          }, "Page Not Found"), _react.default.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            }
          }, "The page ", _react.default.createElement("strong", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            }
          }, this.props.router.pathname), " does not exist."), _react.default.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          }, _react.default.createElement(_link.default, {
            href: "/",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          }, _react.default.createElement("a", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          }, "Home")))));
          break;

        case 500:
          response = _react.default.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            }
          }, _react.default.createElement(_head.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            }
          }), _react.default.createElement(_reactstrap.Container, {
            className: "pt-5 text-center",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            }
          }, _react.default.createElement("h1", {
            className: "display-4",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            }
          }, "Internal Server Error"), _react.default.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            }
          }, "An internal server error occurred.")));
          break;

        default:
          response = _react.default.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            }
          }, _react.default.createElement(_head.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            }
          }), _react.default.createElement(_reactstrap.Container, {
            className: "pt-5 text-center",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            }
          }, _react.default.createElement("h1", {
            className: "display-4",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            }
          }, "HTTP ", this.props.errorCode, " Error"), _react.default.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            }
          }, "An ", _react.default.createElement("strong", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            }
          }, "HTTP ", this.props.errorCode), " error occurred while trying to access ", _react.default.createElement("strong", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            }
          }, this.props.router.pathname))));
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

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/_error.js");


/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "reactstrap":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });
//# sourceMappingURL=_error.js.map