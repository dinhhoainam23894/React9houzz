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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/PlaceHolder.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("react"));

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/components/PlaceHolder.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Placeholder =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Placeholder, _React$Component);

  function Placeholder(props) {
    _classCallCheck(this, Placeholder);

    return _possibleConstructorReturn(this, (Placeholder.__proto__ || Object.getPrototypeOf(Placeholder)).call(this, props));
  }

  _createClass(Placeholder, [{
    key: "render",
    value: function render() {
      var height = 0;
      var width = 0;
      var _this$props = this.props,
          dataSrc = _this$props.dataSrc,
          alt = _this$props.alt;
      this.props.height ? height = this.props.height : height = 300;
      this.props.width ? width = this.props.width : width = 300;
      return _react.default.createElement("div", {
        className: "placeholder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, dataSrc && _react.default.createElement("img", {
        "data-original": dataSrc,
        src: "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAKAAD/4QMsaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MCA3OS4xNjA0NTEsIDIwMTcvMDUvMDYtMDE6MDg6MjEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDRDU0RDZGOUI1ODQxMUU4QTAzRUQ5NUQ4NTlGQ0I3RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDRDU0RDZGQUI1ODQxMUU4QTAzRUQ5NUQ4NTlGQ0I3RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkNENTRENkY3QjU4NDExRThBMDNFRDk1RDg1OUZDQjdEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNENTRENkY4QjU4NDExRThBMDNFRDk1RDg1OUZDQjdEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAFBAQGRIZJxcXJzImHyYyLiYmJiYuPjU1NTU1PkRBQUFBQUFERERERERERERERERERERERERERERERERERERERAEVGRkgHCAmGBgmNiYgJjZENisrNkREREI1QkRERERERERERERERERERERERERERERERERERERERERERERERERE/8AAEQgAZABkAwEiAAIRAQMRAf/EAEsAAQEAAAAAAAAAAAAAAAAAAAAGAQEAAAAAAAAAAAAAAAAAAAAAEAEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//2Q==",
        alt: alt,
        width: 300,
        height: 300 / (width / height),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }));
    }
  }]);

  return Placeholder;
}(_react.default.Component);

exports.default = Placeholder;

/***/ }),

/***/ "./components/footer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("react"));

var _routes = __webpack_require__("./routes.js");

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/components/footer.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var footer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(footer, _React$Component);

  function footer() {
    _classCallCheck(this, footer);

    return _possibleConstructorReturn(this, (footer.__proto__ || Object.getPrototypeOf(footer)).apply(this, arguments));
  }

  _createClass(footer, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("footer", {
        className: "footer text-dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      }, _react.default.createElement("div", {
        className: "container py-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, _react.default.createElement("div", {
        className: "row footer-content mt-2 mx-0 flex-wrap-reverse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, _react.default.createElement("div", {
        className: "col-lg-3 column pr-1 footer-logo pl-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, _react.default.createElement("div", {
        className: "widget",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, _react.default.createElement("div", {
        className: "about_widget",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react.default.createElement("div", {
        className: "logo d-none d-md-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react.default.createElement("a", {
        href: "/",
        title: "Tr\u1EDF v\u1EC1 trang ch\u1EE7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react.default.createElement("img", {
        src: "/images/logo9houz.png",
        alt: "9HOUZ.COM - Ngu\u1ED3n c\u1EA3m h\u1EE9ng thi\u1EBFt k\u1EBF n\u1ED9i th\u1EA5t, trang ho\xE0ng nh\xE0 c\u1EEDa | 9houz.com",
        title: "9houzz.com",
        width: "140",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }))), _react.default.createElement("p", {
        className: "font-13",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, "Copyright \xA9 2018 9houz Inc.")))), _react.default.createElement("div", {
        className: "col-lg-9 row d-md-flex d-none",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react.default.createElement("div", {
        className: "col-lg-4 column footer-menu pr-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react.default.createElement("div", {
        className: "widget",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react.default.createElement("p", {
        className: "footer-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, " V\u1EC0 CH\xDANG T\xD4I "), _react.default.createElement("div", {
        className: "link_widgets",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react.default.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react.default.createElement("div", {
        className: "col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react.default.createElement(_routes.Link, {
        route: "/about/gioi-thieu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react.default.createElement("a", {
        href: "#",
        target: "_blank",
        title: "Gi\u1EDBi thi\u1EC7u",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, "Gi\u1EDBi thi\u1EC7u")), _react.default.createElement("a", {
        href: "#",
        title: "Li\xEAn h\u1EC7",
        rel: "nofollow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, "Li\xEAn h\u1EC7"), _react.default.createElement(_routes.Link, {
        route: "/about/chinh-sach-bao-mat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react.default.createElement("a", {
        href: "#",
        target: "_blank",
        title: "Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, "Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt")), _react.default.createElement(_routes.Link, {
        route: "/about/dieu-khoan-su-dung",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react.default.createElement("a", {
        href: "#",
        target: "_blank",
        title: "\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, "\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng"))))))), _react.default.createElement("div", {
        className: "col-lg-4 column footer-menu pr-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react.default.createElement("div", {
        className: "widget",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react.default.createElement("p", {
        className: "footer-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, "KH\xC1M PH\xC1"), _react.default.createElement("div", {
        className: "link_widgets",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react.default.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react.default.createElement("div", {
        className: "col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react.default.createElement("a", {
        href: "#",
        title: "C\xE2u h\u1ECFi th\u01B0\u1EDDng g\u1EB7p",
        rel: "nofollow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, " C\xE2u h\u1ECFi th\u01B0\u1EDDng g\u1EB7p "), _react.default.createElement("a", {
        href: "#",
        target: "_blank",
        title: "H\u01B0\u1EDBng d\u1EABn thanh to\xE1n",
        rel: "nofollow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, " Blog "), _react.default.createElement("a", {
        href: "#",
        target: "_blank",
        title: "H\u01B0\u1EDBng d\u1EABn thanh to\xE1n",
        rel: "nofollow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, " Tin t\u1EE9c "), _react.default.createElement("a", {
        href: "#",
        target: "_blank",
        title: "H\u01B0\u1EDBng d\u1EABn thanh to\xE1n",
        rel: "nofollow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, " H\u1ECFi \u0111\xE1p "), _react.default.createElement("a", {
        href: "#",
        target: "_blank",
        title: "H\u01B0\u1EDBng d\u1EABn thanh to\xE1n",
        rel: "nofollow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, " Rao v\u1EB7t ")))))), _react.default.createElement("div", {
        className: "col-lg-4 column footer-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react.default.createElement("div", {
        className: "widget",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react.default.createElement("p", {
        className: "footer-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, "LI\xCAN H\u1EC6"), _react.default.createElement("div", {
        className: "d-block social-links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react.default.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react.default.createElement("div", {
        className: "col-lg-12 d-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react.default.createElement("a", {
        target: "_blank",
        rel: "nofollow",
        href: "#",
        className: "facebook d-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react.default.createElement("span", {
        className: "fa fa-facebook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }), "Facebook"), _react.default.createElement("a", {
        target: "_blank",
        rel: "nofollow",
        href: "#",
        className: "google d-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react.default.createElement("span", {
        className: "fa fa-google-plus",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }), "Google+"), _react.default.createElement("a", {
        target: "_blank",
        rel: "nofollow",
        href: "#",
        className: "website d-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react.default.createElement("span", {
        className: "fa fa-youtube ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }), "Youtube"), _react.default.createElement("a", {
        target: "_blank",
        rel: "nofollow",
        href: "#",
        className: "website d-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react.default.createElement("span", {
        className: "fa fa-envelope-o ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }), "Support@9houz.com"))))))))));
    }
  }]);

  return footer;
}(_react.default.Component);

exports.default = footer;

/***/ }),

/***/ "./components/layout.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainBody = exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("@babel/runtime/regenerator"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _meta = _interopRequireDefault(__webpack_require__("./components/meta.js"));

var _head = _interopRequireDefault(__webpack_require__("next/head"));

var _routes = __webpack_require__("./routes.js");

var _reactstrap = __webpack_require__("reactstrap");

var _universalCookie = _interopRequireDefault(__webpack_require__("universal-cookie"));

var _nav = _interopRequireDefault(__webpack_require__("./components/nav.js"));

var _footer = _interopRequireDefault(__webpack_require__("./components/footer.js"));

var _jquery = _interopRequireDefault(__webpack_require__("jquery"));

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/components/layout.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  _createClass(_default, null, [{
    key: "propTypes",
    value: function propTypes() {
      return {
        session: _react.default.PropTypes.object.isRequired,
        providers: _react.default.PropTypes.object.isRequired,
        children: _react.default.PropTypes.object.isRequired,
        fluid: _react.default.PropTypes.boolean,
        navmenu: _react.default.PropTypes.boolean,
        signinBtn: _react.default.PropTypes.boolean
      };
    }
  }]);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));
    _this.state = {
      navOpen: false,
      modal: false,
      providers: null,
      domain: null
    };
    _this.toggleModal = _this.toggleModal.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        domain: window.location.origin
      });
      (0, _jquery.default)('.header-menu .nav-item').click(function (e) {
        (0, _jquery.default)(this).find('.nav-child').css("cssText", "display: none !important;");
        (0, _jquery.default)('.StoreNavigation-overlay').removeClass('is-open');
      });
      (0, _jquery.default)('.header-menu .nav-item').hover(function () {
        (0, _jquery.default)('.StoreNavigation-overlay').addClass('is-open');
        (0, _jquery.default)(this).find('.nav-child').css("cssText", "display: block !important;");
      }, function () {
        (0, _jquery.default)('.StoreNavigation-overlay').removeClass('is-open');
        (0, _jquery.default)(this).find('.nav-child').css("cssText", "display: none !important;");
      });
    }
  }, {
    key: "toggleModal",
    value: function () {
      var _toggleModal = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(e) {
        var cookies;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (e) e.preventDefault(); // Save current URL so user is redirected back here after signing in

                if (this.state.modal !== true) {
                  cookies = new _universalCookie.default();
                  cookies.set('redirect_url', window.location.pathname, {
                    path: '/'
                  });
                }

                _context.t0 = this;
                _context.t1 = this.state.providers;

                if (_context.t1) {
                  _context.next = 8;
                  break;
                }

                _context.next = 7;
                return NextAuth.providers();

              case 7:
                _context.t1 = _context.sent;

              case 8:
                _context.t2 = _context.t1;
                _context.t3 = !this.state.modal;
                _context.t4 = {
                  providers: _context.t2,
                  modal: _context.t3
                };

                _context.t0.setState.call(_context.t0, _context.t4);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function toggleModal(_x) {
        return _toggleModal.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          des = _this$props.des,
          canonical = _this$props.canonical,
          og_url = _this$props.og_url,
          url_images = _this$props.url_images,
          robots = _this$props.robots,
          css = _this$props.css,
          headerProjects = _this$props.headerProjects,
          headerCategories = _this$props.headerCategories,
          dataBase = _this$props.dataBase,
          backPageLink = _this$props.backPageLink,
          nextPageLink = _this$props.nextPageLink,
          slick = _this$props.slick;
      return _react.default.createElement(_react.default.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react.default.createElement(_head.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react.default.createElement("meta", {
        charSet: "UTF-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }), _react.default.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }), _react.default.createElement("meta", {
        name: "fragment",
        content: "!",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }), _react.default.createElement("meta", {
        "http-equiv": "content-language",
        content: "vi",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }), _react.default.createElement("link", {
        rel: "alternate",
        href: "https://9houz.com",
        hrefLang: "vn-vi",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }), _react.default.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, this.props.title || '9houz'), des && _react.default.createElement("meta", {
        name: "description",
        itemProp: "description",
        content: des,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }), canonical && _react.default.createElement("link", {
        rel: "canonical",
        href: "https://9houz.com" + canonical,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }), title && _react.default.createElement("meta", {
        property: "og:title",
        content: title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }), des && _react.default.createElement("meta", {
        property: "og:description",
        content: des,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }), og_url && _react.default.createElement("meta", {
        property: "og:url",
        content: "https://9houz.com" + og_url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }), url_images && _react.default.createElement("meta", {
        property: "og:image",
        content: url_images,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }), robots && _react.default.createElement("meta", {
        name: "robots",
        content: robots,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }), nextPageLink && _react.default.createElement("link", {
        rel: "next",
        href: "https://9houz.com" + nextPageLink,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }), backPageLink && _react.default.createElement("link", {
        rel: "prev",
        href: "https://9houz.com" + backPageLink,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }), _react.default.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: css
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }), slick && _react.default.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        charSet: "UTF-8",
        href: "/vendor/slick.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }), slick && _react.default.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "/vendor/slick-theme.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      })), _react.default.createElement("header", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, _react.default.createElement("nav", {
        className: "navbar navbar-light navbar-expand-md bg-faded container navbar-9houzz",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, _react.default.createElement("button", {
        className: "navbar-toggler px-0",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarCollapse",
        "aria-controls": "navbarCollapse",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, _react.default.createElement("span", {
        className: "fa fa-2x fa-bars text-primary font-22",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      })), _react.default.createElement("div", {
        className: "header-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, _react.default.createElement(_routes.Link, {
        route: "index",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, _react.default.createElement("a", {
        className: "navbar-brand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, _react.default.createElement("img", {
        src: "/images/logo9houz.png",
        alt: "Logo",
        title: "9houzz.com",
        width: "114",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      })))), _react.default.createElement("a", {
        href: "#",
        "data-toggle": "offcanvas",
        className: "d-md-none",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, _react.default.createElement("i", {
        className: "fa fa-user-circle-o font-22  py-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      })), _react.default.createElement("div", {
        className: "collapse navbar-collapse header-right my-2 nav-menu",
        id: "collapse-header-login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, _react.default.createElement("div", {
        className: "header-search d-none d-sm-none d-md-block mr-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, _react.default.createElement("div", {
        className: "input-radius py-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, _react.default.createElement("form", {
        className: "mt-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, _react.default.createElement("input", {
        type: "",
        className: "badge-pill form-control border-0 font-14 px-3",
        name: "",
        placeholder: "\xDD t\u01B0\u1EDFng b\u1EA1n mu\u1ED1n t\xECm ki\u1EBFm...",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }), _react.default.createElement("button", {
        className: "fa fa-search icon-search bg-white border-0",
        "data-toggle": "offcanvas",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }))))))), _react.default.createElement(_nav.default, {
        headerProjects: headerProjects,
        headerCategories: headerCategories,
        dataBase: dataBase,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      })), _react.default.createElement(_meta.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }), _react.default.createElement("div", {
        className: "StoreNavigation-overlay",
        role: "button",
        tabIndex: "0",
        "aria-label": "Close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }), _react.default.createElement(MainBody, {
        navmenu: this.props.navmenu,
        fluid: this.props.fluid,
        container: this.props.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, this.props.children), _react.default.createElement(_footer.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }), _react.default.createElement("script", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }), _react.default.createElement("script", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }), _react.default.createElement("script", {
        src: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }));
    }
  }]);

  return _default;
}(_react.default.Component);

exports.default = _default;

var MainBody =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(MainBody, _React$Component2);

  function MainBody() {
    _classCallCheck(this, MainBody);

    return _possibleConstructorReturn(this, (MainBody.__proto__ || Object.getPrototypeOf(MainBody)).apply(this, arguments));
  }

  _createClass(MainBody, [{
    key: "render",
    value: function render() {
      if (this.props.container === false) {
        return _react.default.createElement(_react.default.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          }
        }, this.props.children);
      } else if (this.props.navmenu === false) {
        return _react.default.createElement(_reactstrap.Container, {
          fluid: this.props.fluid,
          style: {
            marginTop: '1em'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162
          }
        }, this.props.children);
      } else {
        return _react.default.createElement(_reactstrap.Container, {
          fluid: this.props.fluid,
          style: {
            marginTop: '1em'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 168
          }
        }, this.props.children);
      }
    }
  }]);

  return MainBody;
}(_react.default.Component);

exports.MainBody = MainBody;

/***/ }),

/***/ "./components/meta.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(__webpack_require__("styled-jsx/style"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _head = _interopRequireDefault(__webpack_require__("next/head"));

var _nprogress = _interopRequireDefault(__webpack_require__("nprogress"));

var _router = _interopRequireDefault(__webpack_require__("next/router"));

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/components/meta.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_router.default.onRouteChangeStart = function () {
  return _nprogress.default.start();
};

_router.default.onRouteChangeComplete = function () {
  return _nprogress.default.done();
};

_router.default.onRouteChangeError = function () {
  return _nprogress.default.done();
};

var _default = function _default() {
  return _react.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: "jsx-3211480974" + " " + "meta"
  }, _react.default.createElement(_style.default, {
    styleId: "3211480974",
    css: "#nprogress{pointer-events:none;}#nprogress .bar{background:#b953a4;position:fixed;z-index:1111111111111;top:0;left:0;width:100%;height:4px;}#nprogress .peg{display:block;position:absolute;right:0px;width:500px;height:100%;opacity:1.0;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWV0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVdUIsQUFHdUIsQUFHRCxBQVNMLGNBQ0ksS0FUSCxDQUpNLFlBY1gsRUFUWSxRQVVWLFlBQ0EsRUFWTixNQUNDLElBVUssR0FURCxTQVVpQyxFQVRqQyxXQUFDLGdJQVNpQyIsImZpbGUiOiJjb21wb25lbnRzL21ldGEuanMiLCJzb3VyY2VSb290IjoiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9teS1uZXh0LWFwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuUm91dGVyLm9uUm91dGVDaGFuZ2VTdGFydCA9ICgpID0+IE5Qcm9ncmVzcy5zdGFydCgpXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZUNvbXBsZXRlID0gKCkgPT4gTlByb2dyZXNzLmRvbmUoKVxuUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9ICgpID0+IE5Qcm9ncmVzcy5kb25lKClcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGFcIj5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgLyogbG9hZGluZyBwcm9ncmVzcyBiYXIgc3R5bGVzICovXG4gICAgICAjbnByb2dyZXNzIHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICNucHJvZ3Jlc3MgLmJhciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNiOTUzYTQ7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgei1pbmRleDogMTExMTExMTExMTExMTtcbiAgICAgICAgdG9wOjA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDRweDtcbiAgICAgIH1cblxuICAgICAgI25wcm9ncmVzcyAucGVnIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgd2lkdGg6IDUwMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG9wYWNpdHk6IDEuMDtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwgLTRweCk7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcbiJdfQ== */\n/*@ sourceURL=components/meta.js */"
  }));
};

exports.default = _default;

/***/ }),

/***/ "./components/nav.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("react"));

var _routes = __webpack_require__("./routes.js");

var _helpers = __webpack_require__("./libraries/helpers.js");

var _jquery = _interopRequireDefault(__webpack_require__("jquery"));

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/components/nav.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var nav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(nav, _React$Component);

  function nav(props) {
    var _this;

    _classCallCheck(this, nav);

    _this = _possibleConstructorReturn(this, (nav.__proto__ || Object.getPrototypeOf(nav)).call(this, props));
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _createClass(nav, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _jquery.default)(document).ready(function () {
        (0, _jquery.default)('.nav-9houzz .nav-item').hover(function () {
          (0, _jquery.default)('.StoreNavigation-overlay').addClass('is-open');
        }, function () {
          (0, _jquery.default)('.StoreNavigation-overlay').removeClass('is-open');
        });
        (0, _jquery.default)('[data-toggle="collapse"]').on('click', function () {
          (0, _jquery.default)(this).toggleClass("rotate-chevron");
        });
      });
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          headerProjects = _this$props.headerProjects,
          headerCategories = _this$props.headerCategories,
          dataBase = _this$props.dataBase;
      return _react.default.createElement("div", {
        className: "nav-9houzz container-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react.default.createElement("nav", {
        className: "navbar navbar-light navbar-expand-md bg-faded container header-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react.default.createElement("div", {
        className: "collapse navbar-collapse",
        id: "navbarCollapse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react.default.createElement("ul", {
        className: "navbar-nav text-md-center d-flex w-100 position-relative list-unstyled  justify-md-content-start justify-content-start",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react.default.createElement("li", {
        className: "offset-0 offset-md-1 nav-item py-1 px-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react.default.createElement("div", {
        className: "d-flex w-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react.default.createElement("i", {
        className: "fa fa-lightbulb-o my-auto",
        "aria-hidden": "true",
        style: {
          "paddingBottom": "1px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }), _react.default.createElement(_routes.Link, {
        route: "/y-tuong",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react.default.createElement("a", {
        className: "nav-link mr-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, "\xDD T\u01AF\u1EDENG")), _react.default.createElement("a", {
        className: "navbar-toggler menu-toggle",
        "data-toggle": "collapse",
        "data-target": "#nav-product-2",
        "aria-controls": "collapse-login",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react.default.createElement("span", {
        className: "fa fa-chevron-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }))), _react.default.createElement("div", {
        className: "collapse navbar-collapse",
        id: "nav-product-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react.default.createElement("ul", {
        className: "nav-child container list-unstyled",
        role: "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, dataBase && dataBase.map(function (value, index) {
        return _react.default.createElement("li", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        }, _react.default.createElement(_routes.Link, {
          route: value.uri,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        }, _react.default.createElement("a", {
          ids: value.original,
          href: value.uri,
          className: "font-15 font-weight-bold text-uppercase nav-idea ".concat(value.class),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        }, value.name_tag)));
      })))), _react.default.createElement("li", {
        className: "nav-item py-1 px-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react.default.createElement("div", {
        className: "d-flex w-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react.default.createElement("i", {
        className: "fa fa-briefcase my-auto",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }), _react.default.createElement(_routes.Link, {
        route: "list-project",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react.default.createElement("a", {
        className: "nav-link mr-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, "D\u1EF0 \xC1N")), _react.default.createElement("a", {
        className: "navbar-toggler menu-toggle",
        "data-toggle": "collapse",
        "data-target": "#nav-product",
        "aria-controls": "collapse-login",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react.default.createElement("span", {
        className: "fa fa-chevron-right ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }))), _react.default.createElement("div", {
        className: "collapse navbar-collapse nav-prof",
        id: "nav-product",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react.default.createElement("div", {
        className: "nav-child container",
        role: "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react.default.createElement("div", {
        className: "row py-1 px-2 nav-service d-flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react.default.createElement("div", {
        className: "col-md-12 text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react.default.createElement("ul", {
        className: "list-unstyled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, headerProjects && (0, _helpers.mapObject)(headerProjects, function (index, value) {
        return _react.default.createElement("li", {
          className: "mt-1",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          }
        }, _react.default.createElement(_routes.Link, {
          route: value.uri,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          }
        }, _react.default.createElement("a", {
          className: "text-dark font-14",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          }
        }, value.name_tag)));
      }))))))), _react.default.createElement("li", {
        className: "nav-item py-1 px-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react.default.createElement("div", {
        className: "d-flex w-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react.default.createElement("i", {
        className: "fa fa-graduation-cap my-auto",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }), _react.default.createElement(_routes.Link, {
        route: "list-provider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react.default.createElement("a", {
        className: "nav-link mr-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, "CHUY\xCAN GIA")), _react.default.createElement("a", {
        className: "navbar-toggler menu-toggle",
        "data-toggle": "collapse",
        "data-target": "#nav-product-3",
        "aria-controls": "collapse-login",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, _react.default.createElement("span", {
        className: "fa fa-chevron-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }))), _react.default.createElement("div", {
        className: "collapse navbar-collapse nav-prof",
        id: "nav-product-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, _react.default.createElement("div", {
        className: "nav-child container",
        role: "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, _react.default.createElement("div", {
        className: "row py-1 px-2 nav-service d-flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, _react.default.createElement("div", {
        className: "col-md-12 text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, _react.default.createElement("ul", {
        className: "list-unstyled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, headerCategories && (0, _helpers.mapObject)(headerCategories, function (index, value) {
        return _react.default.createElement("li", {
          className: "mt-1",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          }
        }, _react.default.createElement(_routes.Link, {
          route: value.uri,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          }
        }, _react.default.createElement("a", {
          className: "text-dark font-14",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          }
        }, value.name_tag)));
      }))))))), _react.default.createElement("li", {
        className: "nav-item py-1 px-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, _react.default.createElement("div", {
        className: "d-flex w-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, _react.default.createElement("i", {
        className: "fa fa-pencil-square-o my-auto",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }), _react.default.createElement("a", {
        className: "nav-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, "BLOG"))), _react.default.createElement("li", {
        className: "nav-item py-1 px-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, _react.default.createElement("div", {
        className: "d-flex w-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, _react.default.createElement("i", {
        className: "fa fa-rss my-auto",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }), _react.default.createElement("a", {
        className: "nav-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, "TIN T\u1EE8C"))), _react.default.createElement("li", {
        className: "nav-item py-1 px-1 d-block d-md-none",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, _react.default.createElement("div", {
        className: "d-flex w-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, _react.default.createElement("i", {
        className: "fa fa-info-circle my-auto",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }), _react.default.createElement("a", {
        className: "nav-link mr-auto",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, "V\u1EC0 CH\xDANG T\xD4I"), _react.default.createElement("a", {
        className: "navbar-toggler menu-toggle",
        "data-toggle": "collapse",
        "data-target": "#nav-product-4",
        "aria-controls": "collapse-login",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, _react.default.createElement("span", {
        className: "fa fa-chevron-right ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }))), _react.default.createElement("div", {
        className: "collapse navbar-collapse nav-prof",
        id: "nav-product-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, _react.default.createElement("div", {
        className: "nav-child container",
        role: "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, _react.default.createElement("div", {
        className: "row py-1 px-2 nav-service d-flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, _react.default.createElement("div", {
        className: "col-md-12 text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, _react.default.createElement("ul", {
        className: "list-unstyled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, _react.default.createElement(_routes.Link, {
        route: "/about/gioi-thieu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, _react.default.createElement("a", {
        target: "_blank",
        title: "Gi\u1EDBi thi\u1EC7u",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, "Gi\u1EDBi thi\u1EC7u"))), _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }, _react.default.createElement("a", {
        target: "_blank",
        title: "Li\xEAn h\u1EC7",
        rel: "nofollow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }, "Li\xEAn h\u1EC7")), _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, _react.default.createElement(_routes.Link, {
        route: "/about/chinh-sach-bao-mat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, _react.default.createElement("a", {
        href: "#",
        target: "_blank",
        title: "Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, "Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt"))), _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, _react.default.createElement(_routes.Link, {
        route: "/about/dieu-khoan-su-dung",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, _react.default.createElement("a", {
        href: "#",
        target: "_blank",
        title: "\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, "\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng")))))))))))));
    }
  }]);

  return nav;
}(_react.default.Component);

exports.default = nav;

/***/ }),

/***/ "./libraries/helpers.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.activePath = activePath;
exports.ucfirst = ucfirst;
exports.checkbot = checkbot;
exports.mapObject = exports.rating = void 0;

var _pathToRegexp = _interopRequireDefault(__webpack_require__("path-to-regexp"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/libraries/helpers.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function activePath(currentPath, path, options) {
  var regexPath = (0, _pathToRegexp.default)(path, options);
  var result = regexPath.exec(currentPath);
  return result;
}

var rating = function rating(avg_rate) {
  var star = [];

  for (var $i = 1; $i <= 5; $i++) {
    if ($i <= Math.floor(avg_rate)) {
      star.push(_react.default.createElement("span", {
        className: "fa fa-star",
        key: $i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }));
    } else if ($i == Math.ceil(avg_rate)) {
      var divStyle = {
        width: (avg_rate - Math.floor(avg_rate)) * 100 + "% !important",
        height: "15.9px",
        top: '-2.2px',
        left: '-0.8px'
      };
      star.push(_react.default.createElement("span", {
        className: "fa fa-star disable position-relative",
        key: $i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react.default.createElement("span", {
        className: "position-absolute provider-star",
        style: divStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      })));
    } else {
      star.push(_react.default.createElement("span", {
        className: "fa fa-star disable",
        key: $i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }));
    }
  }

  return star;
};

exports.rating = rating;

var mapObject = function mapObject(object, callback) {
  return Object.keys(object).map(function (key) {
    return callback(key, object[key]);
  });
};

exports.mapObject = mapObject;

function ucfirst(str) {
  str += '';
  var f = str.charAt(0).toUpperCase();
  return f + str.substr(1);
}

function checkbot() {
  var x = 0;
  var botPattern = "(googlebot\\/|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis)";
  var re = new RegExp(botPattern, 'i');
  var userAgent = 'Googlebot/2.1 (+http://www.googlebot.com/bot.html)';

  if (re.test(userAgent)) {
    x = 1;
  } else {
    x = 0;
  }

  return x;
}

/***/ }),

/***/ "./pages/home.css":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = "@font-face{font-family:helvetica-ttf;src:url(\"/fonts/TTF/helveticaneue.ttf\");font-style:normal;font-weight:300}:root{--blue:#3baac6;--indigo:#664cc7;--purple:#b953a4;--pink:#e83e8c;--red:#f33b3b;--orange:#f90;--yellow:#fc0;--green:#00a888;--teal:#47be84;--cyan:#4cb1c7;--white:#fff;--gray:#6c757d;--gray-dark:#343a40;--primary:#b953a4;--secondary:#6c757d;--success:#00a888;--info:#4cb1c7;--warning:#fc0;--danger:#f33b3b;--light:#f3f3f3;--dark:#343a40;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:992px;--breakpoint-xl:1200px;--font-family-sans-serif:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";--font-family-monospace:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}*,:after,:before{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-ms-overflow-style:scrollbar}@-ms-viewport{width:device-width}header,nav{display:block}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:1rem;font-weight:400;line-height:1.5;color:#333;text-align:left;background-color:#fff}h2{margin-top:0;margin-bottom:.5rem}p{margin-top:0;margin-bottom:1rem}ul{margin-bottom:1rem}ul{margin-top:0}ul ul{margin-bottom:0}a{color:#b953a4;text-decoration:none;background-color:transparent;-webkit-text-decoration-skip:objects}a:not([href]):not([tabindex]){color:inherit;text-decoration:none}img{border-style:none}button{border-radius:0}button,input{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button{text-transform:none}button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}h2{margin-bottom:.5rem;font-family:inherit;font-weight:500;line-height:1.2;color:inherit}h2{font-size:2rem}.list-unstyled{padding-left:0;list-style:none}.img-fluid{max-width:100%;height:auto}.container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:576px){.container{max-width:540px}}@media (min-width:768px){.container{max-width:720px}}@media (min-width:992px){.container{max-width:960px}}@media (min-width:1200px){.container{max-width:1140px}}.container-fluid{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.row{display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.col-md-12{position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px}@media (min-width:768px){.col-md-12{flex:0 0 100%;max-width:100%}.offset-md-1{margin-left:8.33333%}}.form-control{display:block;width:100%;padding:.375rem .75rem;font-size:1rem;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem}.form-control::-ms-expand{background-color:transparent;border:0}.btn{display:inline-block;font-weight:400;text-align:center;white-space:nowrap;vertical-align:middle;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem}.btn-primary{color:#fff;background-color:#b953a4;border-color:#b953a4}.collapse:not(.show){display:none}.nav-link{display:block;padding:.5rem 1rem}.navbar{position:relative;padding:.5rem 1rem}.navbar{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between}.navbar-brand{display:inline-block;padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;line-height:inherit;white-space:nowrap}.navbar-nav{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-collapse{flex-basis:100%;flex-grow:1;align-items:center}.navbar-toggler{padding:.25rem .75rem;font-size:1.25rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:.25rem}@media (min-width:768px){.navbar-expand-md{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-md .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}}.navbar-light .navbar-brand{color:hsla(0,0%,7%,.9)}.navbar-light .navbar-nav .nav-link{color:hsla(0,0%,7%,.5)}.navbar-light .navbar-toggler{color:hsla(0,0%,7%,.5);border-color:hsla(0,0%,7%,.1)}.badge-pill{padding-right:.6em;padding-left:.6em;border-radius:10rem}.card{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid hsla(0,0%,7%,.125);border-radius:.25rem}.bg-white{background-color:#fff!important}.border-0{border:0!important}.rounded-circle{border-radius:50%!important}.d-none{display:none!important}.d-block{display:block!important}.d-flex{display:flex!important}@media (min-width:576px){.d-sm-none{display:none!important}}@media (min-width:768px){.d-md-none{display:none!important}.d-md-block{display:block!important}}.embed-responsive{position:relative;display:block;width:100%;padding:0;overflow:hidden}.embed-responsive:before{display:block;content:\"\"}.embed-responsive .embed-responsive-item{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.embed-responsive-1by1:before{padding-top:100%}.justify-content-start{justify-content:flex-start!important}.justify-content-center{justify-content:center!important}.position-relative{position:relative!important}.w-100{width:100%!important}.mt-1{margin-top:.25rem!important}.my-2{margin-top:.5rem!important}.my-2{margin-bottom:.5rem!important}.mt-3,.my-3{margin-top:1rem!important}.my-3{margin-bottom:1rem!important}.py-0{padding-top:0!important}.px-0{padding-right:0!important}.py-0{padding-bottom:0!important}.px-0{padding-left:0!important}.py-1{padding-top:.25rem!important}.px-1{padding-right:.25rem!important}.py-1{padding-bottom:.25rem!important}.px-1{padding-left:.25rem!important}.px-2{padding-right:.5rem!important}.px-2{padding-left:.5rem!important}.p-3{padding:1rem!important}.py-3{padding-top:1rem!important}.px-3{padding-right:1rem!important}.py-3{padding-bottom:1rem!important}.px-3{padding-left:1rem!important}.px-4{padding-right:1.5rem!important}.px-4{padding-left:1.5rem!important}.my-auto{margin-top:auto!important}.mr-auto{margin-right:auto!important}.my-auto{margin-bottom:auto!important}.text-left{text-align:left!important}.text-center{text-align:center!important}@media (min-width:768px){.text-md-center{text-align:center!important}}.text-primary{color:#b953a4!important}.navbar-9houzz{color:#666!important;height:60px}.header-search .input-radius{border:1px solid!important;border-radius:4em/5em}.header-search{position:relative;width:550px;margin-left:15px;display:block}.header-search .input-radius{width:100%;height:40px;border:1px solid #ddd!important}.header-search .icon-search{position:absolute;right:10px;top:22%;color:#b953a4;z-index:10;font-weight:lighter}.header-left{padding:0!important}.StoreNavigation-overlay{position:fixed;top:0;left:-999px;width:100%;height:100%;-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";background:rgba(0,0,0,.8);overflow:hidden;z-index:1111;opacity:0;display:none}@media (min-width:1300px){.container{max-width:1265px}}@media (min-width:768px) and (max-width:992px){.container{max-width:868px}}@media (min-width:768px) and (max-width:991.98px){.header-search{margin-left:50px!important}}@media (min-width:576px) and (max-width:767.98px){.navbar-9houzz{max-width:100%}header{height:60px!important}}@media (max-width:575.98px){header{height:60px!important}}header{position:relative;height:105px;background:#fff;z-index:1000000}.nav-9houzz{background-color:#b953a4!important;color:#fff;position:relative;margin-left:0!important;margin-right:0!important}.nav-9houzz .navbar-nav{display:block;padding-left:40px!important;padding-right:40px!important}.nav-9houzz .header-menu{padding:0!important}.nav-9houzz .header-menu .nav-item:first-child{margin-left:7%!important}.nav-9houzz .header-menu .nav-item{display:block;padding-left:40px!important;padding-right:40px!important}.nav-9houzz .header-menu .nav-item .nav-link{padding:.5rem!important;font-size:14px!important;color:#fff!important}.nav-9houzz .header-menu .nav-item .nav-prof{position:relative!important}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child{top:4px!important;left:-40px!important;width:270px!important;z-index:11111111111}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child a{color:#666!important}.nav-9houzz .header-menu .nav-item .nav-child{position:absolute;display:none!important;top:100%;left:0;background:#fff;list-style:none;border:1px solid #ddd;border-top:none;padding:10px 14px 20px;z-index:11111111111}@media (max-width:767.98px){.nav-9houzz{padding-left:0!important;padding-right:0!important}.nav-9houzz .navbar>.navbar-collapse{padding-bottom:20px!important}.nav-9houzz .header-menu,.nav-9houzz .header-menu .nav-item{padding-left:10px!important;padding-right:10px!important}.nav-9houzz .header-menu .nav-child,.nav-9houzz .header-menu .nav-item .nav-child{position:relative!important;top:0!important;display:block!important;overflow:hidden!important}.nav-9houzz .header-menu .nav-item .navbar-toggler,.nav-9houzz .header-menu .navbar-toggler{padding:.25rem!important}.nav-9houzz .header-menu .nav-item .navbar-toggler span,.nav-9houzz .header-menu .navbar-toggler span{font-size:13px!important}.navbar-toggler{border:none!important}.navbar-toggler span{font-size:18px!important;margin-top:3px!important}.nav-9houzz .header-menu .nav-item .nav-child{background:none!important;border:none!important}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child{padding-top:0!important;top:0!important;left:0!important;width:100%;-webkit-box-shadow:none;box-shadow:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:11111111111}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child a{color:#fff!important;font-size:16px!important}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child .nav-service{padding-left:0!important;line-height:30px!important}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child .text-left{padding-left:0!important}.nav-9houzz .header-menu .nav-item:first-child{margin-left:0!important}}span{font-size:13px!important}img{vertical-align:middle}.card{border:none!important}.overlay{background:rgba(7,7,8,.35);position:absolute;width:100%;height:100%;left:0;top:0}.homepage{overflow:hidden}.homepage .title{font-size:26px;text-transform:uppercase;margin-bottom:15px;font-weight:500}.homepage .title:after{position:absolute;background:#b953a4;bottom:-19px!important;content:\"\";left:47%!important;height:3px!important;width:4.5rem!important;margin:3px auto!important}.homepage .slide{height:400px;position:relative}.homepage .slide img{object-fit:cover;object-position:center center;width:100%}.homepage .slide .caption{position:absolute;left:0;right:0;margin:0 auto;top:20%!important;color:#fff;z-index:999;overflow-wrap:break-word;text-align:center}.homepage .slide .caption .container{width:62%!important}.homepage .slide .caption p{font-size:25px;color:#fff!important;padding:10px;margin-bottom:0!important}.homepage .professional .image-pro{position:relative;width:100%;border:2px solid #b953a4;padding:5px}.homepage .professional .image-pro img{padding:5px;object-fit:cover;object-position:center center}.homepage .professional .card-contend p{font-size:16px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-transform:uppercase}@media (max-width:991.98px){.homepage .title:after{left:45%!important}}@media (max-width:575.98px){.homepage .title:after{left:39%!important}}";

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("@babel/runtime/regenerator"));

var _layout = _interopRequireDefault(__webpack_require__("./components/layout.js"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _reactLazyload = _interopRequireDefault(__webpack_require__("react-lazyload"));

var _home = _interopRequireDefault(__webpack_require__("./pages/home.css"));

__webpack_require__("isomorphic-fetch");

var _reactSlick = _interopRequireDefault(__webpack_require__("react-slick"));

var _helpers = __webpack_require__("./libraries/helpers.js");

var _routes = __webpack_require__("./routes.js");

var _PlaceHolder = _interopRequireDefault(__webpack_require__("./components/PlaceHolder.js"));

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/pages/index.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var APIURL = "https://api.9houz.com/" + "api/" + 'home/';

var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var banner = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        cssEase: "linear",
        swipeToSlide: true,
        pauseOnHover: false
      };
      var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        cssEase: "linear",
        swipeToSlide: true,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        }, {
          breakpoint: 480,
          settings: {
            className: "center",
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
      };
      var _this$props = this.props,
          providers = _this$props.providers,
          listType = _this$props.listType,
          images = _this$props.images;
      return _react.default.createElement(_layout.default, _extends({}, this.props, {
        navmenu: false,
        container: false,
        css: _home.default,
        slick: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }), _react.default.createElement("div", {
        className: "homepage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react.default.createElement(_reactSlick.default, _extends({}, banner, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }), _react.default.createElement("div", {
        className: "slide d-flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react.default.createElement("div", {
        className: "overlay",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }), _react.default.createElement(_reactLazyload.default, {
        once: true,
        placeholder: _react.default.createElement(_PlaceHolder.default, {
          dataSrc: "/images/home-banner1.jpg",
          alt: "1000+ \xFD t\u01B0\u1EDFng \u0111\u1EB9p cho ng\xF4i nh\xE0 c\u1EE7a b\u1EA1n",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          }
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react.default.createElement("img", {
        src: "/images/home-banner1.jpg",
        alt: "1000+ \xFD t\u01B0\u1EDFng \u0111\u1EB9p cho ng\xF4i nh\xE0 c\u1EE7a b\u1EA1n",
        className: "img-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      })), _react.default.createElement("div", {
        className: "caption d-flex justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react.default.createElement("div", {
        className: "container py-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, "1000+ \xFD t\u01B0\u1EDFng \u0111\u1EB9p cho ng\xF4i nh\xE0 c\u1EE7a b\u1EA1n"), _react.default.createElement("p", {
        className: "font-20 d-none d-md-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, "9houz cung c\u1EA5p m\u1ED9t kho \xFD t\u01B0\u1EDFng kh\u1ED5ng l\u1ED3 v\u1EDBi h\u01A1n 1000 b\u1EE9c \u1EA3nh \u0111\u1EB9p cho ng\xF4i nh\xE0 c\u1EE7a b\u1EA1n"), _react.default.createElement(_routes.Link, {
        route: "y-tuong",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, _react.default.createElement("a", {
        className: "btn btn-primary mt-3 px-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, "T\xECm \xFD t\u01B0\u1EDFng"))))), _react.default.createElement("div", {
        className: "slide d-flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, _react.default.createElement("div", {
        className: "overlay",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }), _react.default.createElement(_reactLazyload.default, {
        once: true,
        placeholder: _react.default.createElement(_PlaceHolder.default, {
          dataSrc: "/images/home-banner2.jpg",
          alt: "Chuy\xEAn gia trong l\u0129nh v\u1EF1c n\u1ED9i th\u1EA5t tr\xEAn 63 t\u1EC9nh th\xE0nh",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          }
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, _react.default.createElement("img", {
        src: "/images/home-banner2.jpg",
        alt: "Chuy\xEAn gia trong l\u0129nh v\u1EF1c n\u1ED9i th\u1EA5t tr\xEAn 63 t\u1EC9nh th\xE0nh",
        className: "img-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      })), _react.default.createElement("div", {
        className: "caption d-flex justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, _react.default.createElement("div", {
        className: "container py-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, _react.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, "Chuy\xEAn gia trong l\u0129nh v\u1EF1c n\u1ED9i th\u1EA5t tr\xEAn 63 t\u1EC9nh th\xE0nh"), _react.default.createElement("p", {
        className: "font-20 d-none d-md-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, "9Houz s\u1EBD gi\xFAp b\u1EA1n k\u1EBFt n\u1ED1i v\u1EDBi h\u01A1n 1000 Chuy\xEAn gia trong l\u0129nh v\u1EF1c Thi\u1EBFt k\u1EBF & thi c\xF4ng n\u1ED9i th\u1EA5t tr\xEAn 63 t\u1EC9nh th\xE0nh"), _react.default.createElement(_routes.Link, {
        route: "list-provider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, _react.default.createElement("a", {
        className: "btn btn-primary mt-3 px-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, "T\xECm chuy\xEAn gia")))))), _react.default.createElement("div", {
        className: "home-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, _react.default.createElement("div", {
        className: "professional container py-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, _react.default.createElement("h2", {
        className: "text-center my-3 position-relative title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, "Chuy\xEAn gia ti\xEAu bi\u1EC3u"), _react.default.createElement(_reactSlick.default, _extends({}, settings, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }), providers && providers.map(function (value, index) {
        return _react.default.createElement("div", {
          className: "card-professional card p-3",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          }
        }, _react.default.createElement(_reactLazyload.default, {
          once: true,
          offset: [-200, 0],
          placeholder: _react.default.createElement(_PlaceHolder.default, {
            dataSrc: value.avatar_cover,
            alt: value.name,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 136
            }
          }),
          debounce: 100,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          }
        }, _react.default.createElement("div", {
          className: "embed-responsive embed-responsive-1by1 image-pro rounded-circle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          }
        }, _react.default.createElement("img", {
          src: value.avatar_cover,
          alt: value.name,
          className: "embed-responsive-item rounded-circle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          }
        }))), _react.default.createElement("div", {
          className: "card-contend mt-3 text-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          }
        }, _react.default.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          }
        }, value.name), _react.default.createElement(_routes.Link, {
          route: "pro.detail",
          params: {
            id: value.id,
            slug: value.slug
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          }
        }, _react.default.createElement("a", {
          className: "photoLink",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146
          }
        }, _react.default.createElement("button", {
          className: "btn btn-primary badge-pill badge-primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          }
        }, "Xem th\xEAm")))));
      }))), _react.default.createElement("div", {
        className: "main-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, _react.default.createElement("div", {
        className: "blog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, _react.default.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, _react.default.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }, listType && (0, _helpers.mapObject)(listType, function (index, value) {
        return _react.default.createElement("div", {
          className: "col-12 col-md-4",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 164
          }
        }, _react.default.createElement("h2", {
          className: "my-4 position-relative sub-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165
          }
        }, index), _react.default.createElement("div", {
          className: "card my-4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 166
          }
        }, _react.default.createElement("div", {
          className: "folding-edge",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 167
          }
        }), _react.default.createElement(_routes.Link, {
          route: "project.detail",
          params: {
            id: value.main_project && value.main_project.id,
            slug: value.main_project && value.main_project.slug
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 168
          }
        }, _react.default.createElement("a", {
          className: "photoLink",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 172
          }
        }, _react.default.createElement("div", {
          className: "card-img-top",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173
          }
        }, _react.default.createElement(_reactLazyload.default, {
          once: true,
          placeholder: _react.default.createElement(_PlaceHolder.default, {
            dataSrc: value.main_project && value.main_project.avatar,
            alt: value.main_project && value.main_project.name,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 174
            }
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174
          }
        }, _react.default.createElement("img", {
          className: "img-fluid",
          src: value.main_project && value.main_project.avatar,
          alt: value.main_project && value.main_project.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177
          }
        }))))), _react.default.createElement("div", {
          className: "card-body",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183
          }
        }, _react.default.createElement(_routes.Link, {
          route: "project.detail",
          params: {
            id: value.main_project && value.main_project.id,
            slug: value.main_project && value.main_project.slug
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184
          }
        }, _react.default.createElement("a", {
          className: "photoLink",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188
          }
        }, _react.default.createElement("p", {
          className: "card-title font-15",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          }
        }, value.main_project && value.main_project.name))), _react.default.createElement("div", {
          className: "text ellipsis position-relative",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192
          }
        }, _react.default.createElement("p", {
          className: "card-text font-14",
          dangerouslySetInnerHTML: {
            __html: value.main_project && value.main_project.descriptions
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193
          }
        })), _react.default.createElement("ul", {
          className: "list-unstyled",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 196
          }
        }, value.projects && value.projects.map(function (value, index) {
          return _react.default.createElement(_routes.Link, {
            route: "project.detail",
            params: {
              id: value.id,
              slug: value.slug
            },
            key: index,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 199
            }
          }, _react.default.createElement("a", {
            className: "photoLink",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 200
            }
          }, _react.default.createElement("li", {
            className: "media py-3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 201
            }
          }, _react.default.createElement("div", {
            className: "img-project mr-3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 202
            }
          }, _react.default.createElement(_reactLazyload.default, {
            once: value.once,
            placeholder: _react.default.createElement(_PlaceHolder.default, {
              dataSrc: value.avatar && value.avatar,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 203
              }
            }),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 203
            }
          }, _react.default.createElement("img", {
            src: value.avatar && value.avatar,
            alt: value.name && value.name,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 205
            }
          }))), _react.default.createElement("div", {
            className: "media-body",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 208
            }
          }, _react.default.createElement("p", {
            className: "mt-0 mb-1 text-black font-14 media-title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 209
            }
          }, value.name && value.name)))));
        })))));
      })))), _react.default.createElement("h2", {
        className: "text-center my-5 position-relative title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        }
      }, "\xDD t\u01B0\u1EDFng m\u1EDBi nh\u1EA5t"), _react.default.createElement("div", {
        className: "new-idea position-relative",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      }, _react.default.createElement("div", {
        className: "overlay",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        }
      }), _react.default.createElement("div", {
        className: "container py-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        }
      }, _react.default.createElement(_reactSlick.default, _extends({}, settings, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        }
      }), images && images.map(function (value, index) {
        return _react.default.createElement("div", {
          className: "p-2 idea-slide-items",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 233
          }
        }, _react.default.createElement(_routes.Link, {
          route: "image",
          params: {
            id: value.id,
            slug: value.slug
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 234
          }
        }, _react.default.createElement("a", {
          className: "photoLink",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 235
          }
        }, _react.default.createElement(_reactLazyload.default, {
          once: true,
          placeholder: _react.default.createElement(_PlaceHolder.default, {
            dataSrc: value.large_path,
            alt: value.name,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 236
            }
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 236
          }
        }, _react.default.createElement("img", {
          src: value.large_path,
          className: "img-fluid",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 237
          }
        })))));
      }))))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_ref) {
        var query, req, res, data;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query, req = _ref.req;
                _context.next = 3;
                return fetch(APIURL);

              case 3:
                res = _context.sent;
                _context.next = 6;
                return res.json();

              case 6:
                data = _context.sent;
                return _context.abrupt("return", {
                  title: data.seo ? data.seo.title : null,
                  des: data.seo ? data.seo.des : null,
                  canonical: data.seo ? data.seo.canonical : null,
                  robots: data.seo ? data.seo.robots : null,
                  og_url: data.seo ? data.seo.url : null,
                  url_images: data.seo ? data.seo.url_images : null,
                  headerProjects: data.headerProjects,
                  headerCategories: data.headerCategories,
                  dataBase: data.dataBase,
                  providers: data.providers,
                  listType: data.listType,
                  images: data.images,
                  headers: req && req.headers
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return _default;
}(_react.default.Component);

exports.default = _default;

/***/ }),

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var routes = __webpack_require__("next-routes"); // Name   Page      Pattern


module.exports = routes() // ----   ----      -----
.add('index', '/', 'index') // about  about     /about
.add('news', '/news').add('image', '/anh/:id-:slug', 'image/index').add('y-tuong', '/y-tuong', 'idea') // y-tuong   idea   /y-tuong
.add('idea.detail', '/y-tuong/:params', 'idea-filter').add('pro.detail', '/pro/:id-:slug', 'pro/index').add('pro.project', '/pro/:id-:slug/d%E1%BB%B1-%C3%A1n', 'pro/project').add('pro.review', '/pro/:id-:slug/nh%E1%BA%ADn-x%C3%A9t', 'pro/review').add('project.detail', '/du-an/:id-:slug', 'project/detail').add('static', '/about/:slug', 'static-page').add('list-project', '/danh-sach-du-an', 'project/list-project').add('list-project.detail', '/danh-sach-du-an/:slug', 'project/list-project-filter').add('list-provider', '/danh-sach-chuyen-gia', 'pro/list-provider').add('list-provider.detail', '/danh-sach-chuyen-gia/:slug', 'pro/list-provider-filter');

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "isomorphic-fetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "jquery":
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),

/***/ "next-routes":
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "path-to-regexp":
/***/ (function(module, exports) {

module.exports = require("path-to-regexp");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-lazyload":
/***/ (function(module, exports) {

module.exports = require("react-lazyload");

/***/ }),

/***/ "react-slick":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "reactstrap":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "universal-cookie":
/***/ (function(module, exports) {

module.exports = require("universal-cookie");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map