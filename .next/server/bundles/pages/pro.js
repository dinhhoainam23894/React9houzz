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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
        className: "row footer-content my-2 mx-0 flex-wrap-reverse",
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
        src: "/static/images/logo9houz.png",
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
        prefetch: true,
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
        prefetch: true,
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
        prefetch: true,
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

var _router = _interopRequireDefault(__webpack_require__("next/router"));

var _head = _interopRequireDefault(__webpack_require__("next/head"));

var _routes = __webpack_require__("./routes.js");

var _reactstrap = __webpack_require__("reactstrap");

var _universalCookie = _interopRequireDefault(__webpack_require__("universal-cookie"));

var _package = _interopRequireDefault(__webpack_require__("./package.json"));

var _style = _interopRequireDefault(__webpack_require__("./styles/style.scss"));

var _nav = _interopRequireDefault(__webpack_require__("./components/nav.js"));

var _footer = _interopRequireDefault(__webpack_require__("./components/footer.js"));

__webpack_require__("jquery/dist/jquery.min.js");

__webpack_require__("bootstrap/dist/js/bootstrap.min.js");

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/components/layout.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

// import FontAwesome from '../css/font-awesome.css'
// <style dangerouslySetInnerHTML={{__html: Styles}}/>
//           <style dangerouslySetInnerHTML={{__html: FontAwesome}}/>
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
      var _props = this.props,
          title = _props.title,
          des = _props.des,
          canonical = _props.canonical,
          og_url = _props.og_url,
          url_images = _props.url_images,
          robots = _props.robots,
          css = _props.css,
          headerProjects = _props.headerProjects,
          headerCategories = _props.headerCategories,
          dataBase = _props.dataBase;
      return _react.default.createElement(_react.default.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react.default.createElement(_head.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react.default.createElement("meta", {
        charSet: "UTF-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }), _react.default.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }), _react.default.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, this.props.title || '9houz'), des && _react.default.createElement("meta", {
        name: "description",
        itemprop: "description",
        content: des,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }), canonical && _react.default.createElement("link", {
        rel: "canonical",
        href: "https://9houz.com" + canonical,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }), title && _react.default.createElement("meta", {
        property: "og:title",
        content: title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }), des && _react.default.createElement("meta", {
        property: "og:description",
        content: des,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }), og_url && _react.default.createElement("meta", {
        property: "og:url",
        content: "https://9houz.com" + og_url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }), url_images && _react.default.createElement("meta", {
        property: "og:image",
        content: url_images,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }), robots && _react.default.createElement("meta", {
        name: "robots",
        content: robots,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }), _react.default.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: css
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      })), _react.default.createElement("header", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, _react.default.createElement("nav", {
        className: "navbar navbar-light navbar-expand-md bg-faded container navbar-9houzz",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
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
          lineNumber: 93
        }
      }, _react.default.createElement("span", {
        className: "fa fa-2x fa-bars text-primary font-22",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      })), _react.default.createElement("div", {
        className: "header-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react.default.createElement(_routes.Link, {
        route: "index",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react.default.createElement("a", {
        className: "navbar-brand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, _react.default.createElement("img", {
        src: "/static/images/logo9houz.png",
        alt: "Logo",
        title: "9houzz.com",
        width: "114",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      })))), _react.default.createElement("a", {
        href: "#",
        "data-toggle": "offcanvas",
        className: "d-md-none",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, _react.default.createElement("i", {
        className: "fa fa-user-circle-o font-22  py-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      })), _react.default.createElement("div", {
        className: "collapse navbar-collapse header-right my-2 nav-menu",
        id: "collapse-header-login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, _react.default.createElement("div", {
        className: "header-search d-none d-sm-none d-md-block mr-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, _react.default.createElement("div", {
        className: "input-radius py-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, _react.default.createElement("form", {
        className: "mt-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, _react.default.createElement("input", {
        type: "",
        className: "badge-pill form-control border-0 font-14 px-3",
        name: "",
        placeholder: "\xDD t\u01B0\u1EDFng b\u1EA1n mu\u1ED1n t\xECm ki\u1EBFm...",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }), _react.default.createElement("button", {
        className: "fa fa-search icon-search bg-white border-0",
        "data-toggle": "offcanvas",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }))))))), _react.default.createElement(_nav.default, {
        headerProjects: headerProjects,
        headerCategories: headerCategories,
        dataBase: dataBase,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      })), _react.default.createElement(_meta.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }), _react.default.createElement("div", {
        className: "StoreNavigation-overlay",
        role: "button",
        tabIndex: "0",
        "aria-label": "Close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }), _react.default.createElement(MainBody, {
        navmenu: this.props.navmenu,
        fluid: this.props.fluid,
        container: this.props.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, this.props.children), _react.default.createElement(_footer.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
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
            lineNumber: 135
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
            lineNumber: 142
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
            lineNumber: 148
          }
        }, this.props.children);
      }
    }
  }]);

  return MainBody;
}(_react.default.Component); // export class UserMenu extends React.Component {
//   constructor(props) {
//     super(props)
//     this.handleSignoutSubmit = this.handleSignoutSubmit.bind(this)
//   }
//    async handleSignoutSubmit(event) {
//      event.preventDefault()
//      // Save current URL so user is redirected back here after signing out
//      const cookies = new Cookies()
//      cookies.set('redirect_url', window.location.pathname, { path: '/' })
//      await NextAuth.signout()
//      Router.push('/')
//    }
//   render() {
//     if (this.props.session && this.props.session.user) {
//       // If signed in display user dropdown menu
//       const session = this.props.session
//       return (
//         <Nav className="ml-auto" navbar>
//           {/*<!-- Uses .nojs-dropdown CSS to for a dropdown that works without client side JavaScript ->*/}
//           <div tabIndex="2" className="dropdown nojs-dropdown">
//             <div className="nav-item">
//               <span className="dropdown-toggle nav-link d-none d-md-block">
//                 <span className="icon ion-md-contact" style={{fontSize: '2em', position: 'absolute', top: -5, left: -25}}></span>
//               </span>
//               <span className="dropdown-toggle nav-link d-block d-md-none">
//                 <span className="icon ion-md-contact mr-2"></span>
//                 {session.user.name || session.user.email}
//               </span>
//             </div>
//             <div className="dropdown-menu">
//               <Link prefetch href="/account">
//                 <a href="/account" className="dropdown-item"><span className="icon ion-md-person mr-1"></span> Your Account</a>
//               </Link>
//               <AdminMenuItem {...this.props}/>
//               <div className="dropdown-divider d-none d-md-block"/>
//               <div className="dropdown-item p-0">
//                 <Form id="signout" method="post" action="/auth/signout" onSubmit={this.handleSignoutSubmit}>
//                   <input name="_csrf" type="hidden" value={this.props.session.csrfToken}/>
//                   <Button type="submit" block className="pl-4 rounded-0 text-left dropdown-item"><span className="icon ion-md-log-out mr-1"></span> Sign out</Button>
//                 </Form>
//               </div>
//             </div>
//           </div>
//         </Nav>
//       )
//      } if (this.props.signinBtn === false) {
//        // If not signed in, don't display sign in button if disabled
//       return null
//     } else {
//       // If not signed in, display sign in button
//       return (
//         <Nav className="ml-auto" navbar>
//           <NavItem>
//             {/**
//               * @TODO Add support for passing current URL path as redirect URL
//               * so that users without JavaScript are also redirected to the page
//               * they were on before they signed in.
//               **/}
//             <a href="/auth?redirect=/" className="btn btn-outline-primary" onClick={this.props.toggleModal}><span className="icon ion-md-log-in mr-1"></span> Sign up / Sign in</a>
//           </NavItem>
//         </Nav>
//       )
//     }
//   }
// }
// export class AdminMenuItem extends React.Component {
//   render() {
//     if (this.props.session.user && this.props.session.user.admin === true) {
//       return (
//         <React.Fragment>
//           <Link prefetch href="/admin">
//             <a href="/admin" className="dropdown-item"><span className="icon ion-md-settings mr-1"></span> Admin</a>
//           </Link>
//         </React.Fragment>
//       )
//     } else {
//       return(<div/>)
//     }
//   }
// }
// export class SigninModal extends React.Component {
//   render() {
//     if (this.props.providers === null) return null
//     return (
//       <Modal isOpen={this.props.modal} toggle={this.props.toggleModal} style={{maxWidth: 700}}>
//         <ModalHeader>Sign up / Sign in</ModalHeader>
//         <ModalBody style={{padding: '1em 2em'}}>
//           <Signin session={this.props.session} providers={this.props.providers}/>
//         </ModalBody>
//       </Modal>
//     )
//   }
// }


exports.MainBody = MainBody;

/***/ }),

/***/ "./components/list-project.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("react"));

var _routes = __webpack_require__("./routes.js");

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/components/list-project.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var project = this.props.project;
      return _react.default.createElement("div", {
        className: "rounded-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, _react.default.createElement(_routes.Link, {
        prefetch: true,
        route: "project.detail",
        params: {
          id: project.id,
          slug: "".concat(project.slug)
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react.default.createElement("a", {
        className: "nav-link border-0 font-14 font-weight-bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react.default.createElement("div", {
        className: "rounded-2 border provider-project",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react.default.createElement("div", {
        className: "row project position-relative mx-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react.default.createElement("div", {
        className: "col-md-7 col-7 position-relative p-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react.default.createElement("div", {
        className: "position-absolute h-100 w-100 bg-secondary first-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react.default.createElement("img", {
        src: this.props.project.avatar[0],
        alt: "",
        className: "first-image w-100 h-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }))), _react.default.createElement("div", {
        className: "col-md-5 col-5 position-relative p-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react.default.createElement("div", {
        className: "position-absolute h-48 ml-1 mb-1 bg-secondary second-image right-avatar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react.default.createElement("img", {
        src: this.props.project.avatar[1],
        alt: "",
        className: "w-100 h-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      })), _react.default.createElement("div", {
        className: "position-absolute h-50 ml-1 third-image bg-secondary right-avatar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react.default.createElement("div", {
        className: "h-100 project-more text-center position-absolute w-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react.default.createElement("p", {
        className: "font-weight-light text-white font-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, project.count_image ? "+ " + project.count_image : '')), _react.default.createElement("img", {
        src: this.props.project.avatar[2],
        className: "w-100 h-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      })))), _react.default.createElement("div", {
        className: "mt-3 mb-2 px-2 project-des",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react.default.createElement("h2", {
        className: "font-weight-bold text-black font-15",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, project.name), this.props.project.address && _react.default.createElement("div", {
        className: "font-13 text-secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react.default.createElement("span", {
        className: "fa fa-map-marker mr-1 text-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), this.props.project.address))))));
    }
  }]);

  return _default;
}(_react.default.Component);

exports.default = _default;

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
    className: "jsx-2927448288" + " " + "meta"
  }, _react.default.createElement(_style.default, {
    styleId: "2927448288",
    css: "#nprogress{pointer-events:none;}#nprogress .bar{background:#b953a4;position:fixed;z-index:1031;top:0;left:0;width:100%;height:4px;}#nprogress .peg{display:block;position:absolute;right:0px;width:500px;height:100%;opacity:1.0;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWV0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVdUIsQUFHdUIsQUFHRCxBQVNMLGNBQ0ksS0FUSCxDQUpNLFlBY1gsRUFURyxRQVVELEtBVE4sTUFDQyxDQVNLLE1BUkQsTUFTQyxLQVJELE9BU2lDLElBVGhDLHlJQVNpQyIsImZpbGUiOiJjb21wb25lbnRzL21ldGEuanMiLCJzb3VyY2VSb290IjoiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9teS1uZXh0LWFwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuUm91dGVyLm9uUm91dGVDaGFuZ2VTdGFydCA9ICgpID0+IE5Qcm9ncmVzcy5zdGFydCgpXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZUNvbXBsZXRlID0gKCkgPT4gTlByb2dyZXNzLmRvbmUoKVxuUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9ICgpID0+IE5Qcm9ncmVzcy5kb25lKClcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGFcIj5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgLyogbG9hZGluZyBwcm9ncmVzcyBiYXIgc3R5bGVzICovXG4gICAgICAjbnByb2dyZXNzIHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICNucHJvZ3Jlc3MgLmJhciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNiOTUzYTQ7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgei1pbmRleDogMTAzMTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgICB9XG5cbiAgICAgICNucHJvZ3Jlc3MgLnBlZyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIHdpZHRoOiA1MDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvcGFjaXR5OiAxLjA7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDNkZWcpIHRyYW5zbGF0ZSgwcHgsIC00cHgpO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG4iXX0= */\n/*@ sourceURL=components/meta.js */"
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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
      var _props = this.props,
          headerProjects = _props.headerProjects,
          headerCategories = _props.headerCategories,
          dataBase = _props.dataBase;
      return _react.default.createElement("div", {
        className: "nav-9houzz container-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react.default.createElement("nav", {
        className: "navbar navbar-light navbar-expand-md bg-faded container header-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react.default.createElement("div", {
        className: "collapse navbar-collapse",
        id: "navbarCollapse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react.default.createElement("ul", {
        className: "navbar-nav text-md-center d-flex w-100 position-relative list-unstyled  justify-md-content-start justify-content-start",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react.default.createElement("li", {
        className: "offset-0 offset-md-1 nav-item py-1 px-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react.default.createElement("div", {
        className: "d-flex w-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react.default.createElement("i", {
        className: "fa fa-lightbulb-o my-auto",
        "aria-hidden": "true",
        style: {
          "paddingBottom": "1px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), _react.default.createElement(_routes.Link, {
        prefetch: true,
        route: "/y-tuong",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react.default.createElement("a", {
        className: "nav-link mr-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
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
          lineNumber: 41
        }
      }, _react.default.createElement("span", {
        className: "fa fa-chevron-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }))), _react.default.createElement("div", {
        className: "collapse navbar-collapse",
        id: "nav-product-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react.default.createElement("ul", {
        className: "nav-child container list-unstyled",
        role: "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, dataBase && dataBase.header_idea.map(function (value, index) {
        return _react.default.createElement("li", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        }, _react.default.createElement(_routes.Link, {
          prefetch: true,
          route: value.uri,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        }, _react.default.createElement("a", {
          ids: value.original,
          href: value.uri,
          className: "font-15 font-weight-bold text-uppercase nav-idea ".concat(value.class),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        }, value.name_tag)));
      })))), _react.default.createElement("li", {
        className: "nav-item py-1 px-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react.default.createElement("div", {
        className: "d-flex w-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react.default.createElement("i", {
        className: "fa fa-briefcase my-auto",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }), _react.default.createElement("a", {
        className: "nav-link mr-auto",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, "D\u1EF0 \xC1N"), _react.default.createElement("a", {
        className: "navbar-toggler menu-toggle",
        "data-toggle": "collapse",
        "data-target": "#nav-product",
        "aria-controls": "collapse-login",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react.default.createElement("span", {
        className: "fa fa-chevron-right ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }))), _react.default.createElement("div", {
        className: "collapse navbar-collapse nav-prof",
        id: "nav-product",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react.default.createElement("div", {
        className: "nav-child container",
        role: "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react.default.createElement("div", {
        className: "row py-1 px-2 nav-service d-flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react.default.createElement("div", {
        className: "col-md-12 text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react.default.createElement("ul", {
        className: "list-unstyled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, headerProjects && (0, _helpers.mapObject)(headerProjects, function (index, value) {
        return _react.default.createElement("li", {
          className: "mt-1",
          key: value.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        }, _react.default.createElement("a", {
          href: "#",
          className: "text-dark font-14",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        }, value.name.vi));
      }))))))), _react.default.createElement("li", {
        className: "nav-item py-1 px-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react.default.createElement("div", {
        className: "d-flex w-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react.default.createElement("i", {
        className: "fa fa-graduation-cap my-auto",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }), _react.default.createElement("a", {
        className: "nav-link mr-auto",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, "PRO"), _react.default.createElement("a", {
        className: "navbar-toggler menu-toggle",
        "data-toggle": "collapse",
        "data-target": "#nav-product-3",
        "aria-controls": "collapse-login",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react.default.createElement("span", {
        className: "fa fa-chevron-right ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }))), _react.default.createElement("div", {
        className: "collapse navbar-collapse nav-prof",
        id: "nav-product-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, _react.default.createElement("div", {
        className: "nav-child container",
        role: "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react.default.createElement("div", {
        className: "row py-1 px-2 nav-service d-flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react.default.createElement("div", {
        className: "col-md-12 text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, _react.default.createElement("ul", {
        className: "list-unstyled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, headerCategories && (0, _helpers.mapObject)(headerCategories, function (index, value) {
        return _react.default.createElement("li", {
          className: "mt-1",
          key: value.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          }
        }, _react.default.createElement("a", {
          href: "#",
          className: "text-dark font-14",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          }
        }, value.name));
      }))))))), _react.default.createElement("li", {
        className: "nav-item py-1 px-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, _react.default.createElement("div", {
        className: "d-flex w-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, _react.default.createElement("i", {
        className: "fa fa-pencil-square-o my-auto",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }), _react.default.createElement("a", {
        className: "nav-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, "BLOG"))), _react.default.createElement("li", {
        className: "nav-item py-1 px-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, _react.default.createElement("div", {
        className: "d-flex w-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, _react.default.createElement("i", {
        className: "fa fa-rss my-auto",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }), _react.default.createElement("a", {
        className: "nav-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, "TIN T\u1EE8C"))), _react.default.createElement("li", {
        className: "nav-item py-1 px-1 d-block d-md-none",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, _react.default.createElement("div", {
        className: "d-flex w-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, _react.default.createElement("i", {
        className: "fa fa-info-circle my-auto",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }), _react.default.createElement("a", {
        className: "nav-link mr-auto",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
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
          lineNumber: 124
        }
      }, _react.default.createElement("span", {
        className: "fa fa-chevron-right ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }))), _react.default.createElement("div", {
        className: "collapse navbar-collapse nav-prof",
        id: "nav-product-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, _react.default.createElement("div", {
        className: "nav-child container",
        role: "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, _react.default.createElement("div", {
        className: "row py-1 px-2 nav-service d-flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, _react.default.createElement("div", {
        className: "col-md-12 text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, _react.default.createElement("ul", {
        className: "list-unstyled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, _react.default.createElement(_routes.Link, {
        prefetch: true,
        route: "/about/gioi-thieu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, _react.default.createElement("a", {
        target: "_blank",
        title: "Gi\u1EDBi thi\u1EC7u",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, "Gi\u1EDBi thi\u1EC7u"))), _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, _react.default.createElement("a", {
        target: "_blank",
        title: "Li\xEAn h\u1EC7",
        rel: "nofollow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, "Li\xEAn h\u1EC7")), _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, _react.default.createElement(_routes.Link, {
        prefetch: true,
        route: "/about/chinh-sach-bao-mat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, _react.default.createElement("a", {
        href: "#",
        target: "_blank",
        title: "Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, "Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt"))), _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, _react.default.createElement(_routes.Link, {
        prefetch: true,
        route: "/about/dieu-khoan-su-dung",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, _react.default.createElement("a", {
        href: "#",
        target: "_blank",
        title: "\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, "\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng")))))))))))));
    }
  }]);

  return nav;
}(_react.default.Component);

exports.default = nav;

/***/ }),

/***/ "./components/pro-detail.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("react"));

var _routes = __webpack_require__("./routes.js");

var _layout = _interopRequireDefault(__webpack_require__("./components/layout.js"));

var _helpers = __webpack_require__("./libraries/helpers.js");

var _classnames = _interopRequireDefault(__webpack_require__("classnames"));

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/components/pro-detail.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        data: {},
        provider: {}
      }
    });
    return _this;
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          provider_id = _props.provider_id,
          provider_slug = _props.provider_slug,
          url = _props.url;
      var pathname = url.pathname;
      var itemStar = Math.ceil(this.props.data.provider.avg_rate) >= 1 ? "itemScope itemType='http://schema.org/AggregateRating'" : '';
      var itemStarProp = Math.ceil(this.props.data.provider.avg_rate) >= 1 ? "<meta  itemProp=\"ratingValue\" content=".concat(this.props.data.provider.avg_rate, ">") : null;
      return _react.default.createElement(_layout.default, _extends({}, this.props, {
        navmenu: false,
        container: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), _react.default.createElement("div", {
        className: "container-fluid px-4 bg-gray provider-main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react.default.createElement("div", {
        className: "bg-white",
        itemScope: true,
        itemType: "http://schema.org/localbusiness",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react.default.createElement("div", {
        className: "border border-right-0 border-left-0 border-gray provider-details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react.default.createElement("div", {
        className: "banner position-relative p-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react.default.createElement("img", {
        src: this.props.data.cover && this.props.data.cover,
        className: "w-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), _react.default.createElement("div", {
        className: "position-absolute gradient-animate w-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      })), _react.default.createElement("div", {
        className: "container position-relative",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react.default.createElement("div", {
        className: "position-absolute provider-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react.default.createElement(_routes.Link, {
        prefetch: true,
        route: "pro.detail",
        params: {
          id: provider_id,
          slug: "".concat(provider_slug)
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react.default.createElement("a", {
        className: "provider-name text-white font-weight-bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, (0, _helpers.activePath)(pathname, "/pro", {
        strict: true
      }) ? _react.default.createElement("h1", {
        className: "font-22 mb-1",
        itemProp: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, this.props.data.provider && this.props.data.provider.name) : _react.default.createElement("p", {
        className: "font-22 mb-1",
        itemProp: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, this.props.data.provider && this.props.data.provider.name))), _react.default.createElement("div", {
        className: "star-rating " + itemStar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, this.props.data.provider && (0, _helpers.rating)(this.props.data.provider.avg_rate), itemStarProp, _react.default.createElement("span", {
        className: "text-yellow font-weight-bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, " 0(0) \u0111\xE1nh gi\xE1) "), _react.default.createElement("a", {
        className: "text-gray-200",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, " \u0110\xE1nh gi\xE1 chi ti\u1EBFt >")))), _react.default.createElement("div", {
        className: "row position-relative justify-content-end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react.default.createElement("div", {
        className: "position-absolute provider-avatar rounded-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react.default.createElement("img", {
        itemProp: "image",
        src: this.props.data.avatar,
        className: "img-thumbnail rounded-circle h-100",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      })), _react.default.createElement("div", {
        className: "col-md-9 col-lg-9 provider-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react.default.createElement("ul", {
        className: "nav nav-tabs border-0",
        id: "myTab",
        role: "tablist",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react.default.createElement("li", {
        className: (0, _classnames.default)("nav-item position-relative", {
          active: (0, _helpers.activePath)(pathname, "/pro", {
            strict: true
          })
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react.default.createElement(_routes.Link, {
        prefetch: true,
        route: "pro.detail",
        params: {
          id: provider_id,
          slug: "".concat(provider_slug)
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react.default.createElement("a", {
        className: "nav-link border-0 font-14 font-weight-bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, "T\u1ED5ng quan"))), _react.default.createElement("li", {
        className: (0, _classnames.default)("nav-item position-relative", {
          active: (0, _helpers.activePath)(pathname, ["/pro/project", '/project'], {
            strict: true
          })
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react.default.createElement(_routes.Link, {
        prefetch: true,
        route: "pro.project",
        params: {
          id: provider_id,
          slug: "".concat(provider_slug)
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react.default.createElement("a", {
        className: "nav-link border-0 font-14 font-weight-bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, "D\u1EF1 \xE1n"))), _react.default.createElement("li", {
        className: (0, _classnames.default)("nav-item position-relative", {
          active: (0, _helpers.activePath)(pathname, "/pro/review", {
            strict: true
          })
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react.default.createElement(_routes.Link, {
        prefetch: true,
        route: "pro.review",
        params: {
          id: provider_id,
          slug: "".concat(provider_slug)
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react.default.createElement("a", {
        className: "nav-link border-0 font-14 font-weight-bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, "Nh\u1EADn x\xE9t"))), _react.default.createElement("li", {
        className: "nav-item mx-1 position-relative",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react.default.createElement("a", {
        className: "nav-link border-0 font-14 font-weight-bold",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, "S\u1ED5 tay \xFD t\u01B0\u1EDFng")), _react.default.createElement("li", {
        className: "nav-item mx-1 position-relative",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react.default.createElement("a", {
        className: "nav-link border-0 font-14 font-weight-bold",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, "H\u1ECFi \u0111\xE1p")), _react.default.createElement("li", {
        className: "nav-item mx-1 position-relative",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react.default.createElement("a", {
        className: "nav-link border-0 font-14 font-weight-bold",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, "Ho\u1EA1t \u0111\u1ED9ng"))))))), _react.default.createElement("div", {
        className: "w-100 py-3 provider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react.default.createElement(_react.default.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, this.props.children)))));
    }
  }]);

  return _default;
}(_react.default.Component);

exports.default = _default;

/***/ }),

/***/ "./components/provider-sidebar.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("@babel/runtime/regenerator"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/components/provider-sidebar.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "componentWillReceiveProps", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee(nextProps) {
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(_this.props.provider.id == undefined && nextProps.provider.id)) {
                    _context.next = 14;
                    break;
                  }

                  if (!nextProps.provider.social.facebook) {
                    _context.next = 6;
                    break;
                  }

                  _context.next = 4;
                  return _this.state.social_links.push({
                    url: nextProps.provider.social.facebook,
                    icon: 'fa fa-facebook'
                  });

                case 4:
                  _context.next = 14;
                  break;

                case 6:
                  if (!nextProps.provider.social.youtube) {
                    _context.next = 11;
                    break;
                  }

                  _context.next = 9;
                  return _this.state.social_links.push({
                    url: nextProps.provider.social.youtube,
                    icon: 'fa fa-youtube'
                  });

                case 9:
                  _context.next = 14;
                  break;

                case 11:
                  if (!nextProps.provider.social.google_plus) {
                    _context.next = 14;
                    break;
                  }

                  _context.next = 14;
                  return _this.state.social_links.push({
                    url: nextProps.provider.social.google_plus,
                    icon: 'fa fa-google-plus'
                  });

                case 14:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function value(_x) {
          return _value.apply(this, arguments);
        };
      }()
    });
    _this.state = {
      social_links: []
    };
    return _this;
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "bg-white py-2 px-3 border border-gray",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react.default.createElement("div", {
        className: "provider-statistic row border-dot",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react.default.createElement("div", {
        className: "col-md-3 col-3 p-0 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react.default.createElement("p", {
        className: "text-primary font-weight-normal sidebar-count mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, this.props.provider.total_like ? this.props.provider.total_like : 0), _react.default.createElement("p", {
        className: "font-12 sidebar-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, "C\u1EA3m \u01A1n")), _react.default.createElement("div", {
        className: "col-md-3 col-3 p-0 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react.default.createElement("p", {
        className: "text-primary font-weight-normal sidebar-count mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, this.props.provider.total_rate ? this.props.provider.total_rate : 0), _react.default.createElement("p", {
        className: "font-12 sidebar-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, "Nh\u1EADn x\xE9t")), _react.default.createElement("div", {
        className: "col-md-3 col-3 p-0 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react.default.createElement("p", {
        className: "text-primary font-weight-normal sidebar-count mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, this.props.provider.total_page_view ? this.props.provider.total_page_view : 0), _react.default.createElement("p", {
        className: "font-12 sidebar-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, "L\u01B0\u1EE3t xem")), _react.default.createElement("div", {
        className: "col-md-3 col-3 p-0 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react.default.createElement("p", {
        className: "text-primary font-weight-normal sidebar-count mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, this.props.provider.total_follow ? this.props.provider.total_follow : 0), _react.default.createElement("p", {
        className: "font-12 sidebar-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, "Theo d\xF5i"))), _react.default.createElement("div", {
        className: "provider-contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react.default.createElement("ul", {
        className: "list-unstyled pb-3 my-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react.default.createElement("li", {
        className: "info-special",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react.default.createElement("i", {
        className: "fa fa-phone text-secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }), _react.default.createElement("span", {
        itemProp: "telephone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, this.props.provider.phone)), _react.default.createElement("li", {
        itemScope: true,
        itemType: "http://schema.org/PostalAddress",
        itemProp: "address",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react.default.createElement("i", {
        className: "fa fa-map-marker text-secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }), _react.default.createElement("span", {
        itemProp: "streetAddress",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, this.props.provider.address)), _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react.default.createElement("i", {
        className: "fa fa-envelope-o text-secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }), _react.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, this.props.provider.email)), _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react.default.createElement("i", {
        className: "fa fa-clock-o text-secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }), _react.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, this.props.provider.work_time)), _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react.default.createElement("i", {
        className: " fa fa-globe text-secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }), _react.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react.default.createElement("a", {
        target: "_blank",
        rel: "nofollow",
        href: this.props.provider.website,
        className: "text-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, this.props.provider.website))), _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react.default.createElement("i", {
        className: "fa fa-pencil text-secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }), _react.default.createElement("a", {
        href: "javascript:void(0)",
        className: "text-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, "Qu\u1EA3n l\xFD trang n\xE0y")), _react.default.createElement("li", {
        className: "text-center social",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react.default.createElement("a", {
        target: "_blank",
        rel: "nofollow",
        href: this.props.provider.website,
        className: "text-white fa fa-globe website",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }), this.state.social_links.map(function (value, index) {
        return _react.default.createElement("a", {
          target: "_blank",
          rel: "nofollow",
          href: value.url,
          className: "text-white " + value.icon + " website",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        });
      })))));
    }
  }]);

  return _default;
}(_react.default.Component);

exports.default = _default;

/***/ }),

/***/ "./libraries/helpers.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.activePath = activePath;
exports.ucfirst = ucfirst;
exports.mapObject = exports.rating = void 0;

var _react = _interopRequireDefault(__webpack_require__("react"));

var _pathToRegexp = _interopRequireDefault(__webpack_require__("path-to-regexp"));

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
          lineNumber: 13
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
          lineNumber: 21
        }
      }, _react.default.createElement("span", {
        className: "position-absolute provider-star",
        style: divStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      })));
    } else {
      star.push(_react.default.createElement("span", {
        className: "fa fa-star disable",
        key: $i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
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

/***/ }),

/***/ "./package.json":
/***/ (function(module, exports) {

module.exports = {"name":"create-next-example-app","scripts":{"dev":"node server.js","build":"next build","start":"NODE_ENV=production node server.js"},"dependencies":{"@zeit/next-css":"^0.2.0","@zeit/next-sass":"^0.2.0","@zeit/next-typescript":"^1.1.0","axios":"^0.18.0","babel-plugin-inline-import":"^3.0.0","babel-plugin-module-resolver":"^3.1.1","bootstrap":"^4.1.1","classnames":"^2.2.6","css-loader":"^0.28.11","dotenv":"^6.0.0","es6-promise":"^4.2.4","express":"^4.16.3","font-awesome":"^4.7.0","ionicons":"^4.2.4","isomorphic-fetch":"^2.2.1","jquery":"^3.3.1","lru-cache":"^4.1.3","merge-files-webpack-plugin":"^1.1.2","next":"^6.1.1","next-compose":"0.0.2","next-routes":"^1.4.2","nprogress":"^0.2.0","postcss-loader":"^2.1.6","prop-types":"^15.6.2","purify-css":"^1.2.5","purifycss-webpack":"^0.7.0","raw-loader":"^0.5.1","react":"^16.4.1","react-breadcrumbs-dynamic":"^1.1.1","react-document-meta":"^3.0.0-beta.2","react-dom":"^16.4.1","react-helmet":"^5.2.0","react-infinite":"^0.13.0","react-infinite-scroller":"^1.2.0","react-js-pagination":"^3.0.2","react-masonry-component":"^6.2.1","react-modal":"^3.5.1","react-router-dom":"^4.3.1","react-through":"^1.1.1","reactstrap":"^6.3.0","serve-favicon":"^2.5.0","style-loader":"^0.21.0","styled-jsx":"^2.2.7","styled-jsx-css-loader":"^0.3.0","styled-jsx-plugin-sass":"^0.2.4","tunnel-agent":"^0.6.0","universal-cookie":"^2.2.0","webpack":"^3.10.0"},"devDependencies":{"@babel/core":"^7.0.0-beta.53","create-next":"^0.1.4","node-sass":"^4.9.2","sass-loader":"^7.0.3"}}

/***/ }),

/***/ "./pages/pro/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("react"));

var _regenerator = _interopRequireDefault(__webpack_require__("@babel/runtime/regenerator"));

var _link = _interopRequireDefault(__webpack_require__("next/link"));

var _proDetail = _interopRequireDefault(__webpack_require__("./components/pro-detail.js"));

var _providerSidebar = _interopRequireDefault(__webpack_require__("./components/provider-sidebar.js"));

var _listProject = _interopRequireDefault(__webpack_require__("./components/list-project.js"));

var _axios = _interopRequireDefault(__webpack_require__("axios"));

__webpack_require__("isomorphic-fetch");

var _jquery = _interopRequireDefault(__webpack_require__("jquery"));

var _provider = _interopRequireDefault(__webpack_require__("./pages/pro/provider.css"));

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/pages/pro/index.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var APIURL = "https://api.9houz.com/" + "api/" + 'provider/';

var Pro =
/*#__PURE__*/
function (_Component) {
  _inherits(Pro, _Component);

  _createClass(Pro, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_ref) {
        var query, res, data, resProject, dataProject;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                _context.next = 3;
                return fetch(APIURL + query.id);

              case 3:
                res = _context.sent;
                _context.next = 6;
                return res.json();

              case 6:
                data = _context.sent;
                _context.next = 9;
                return fetch(APIURL + query.id + "?projects");

              case 9:
                resProject = _context.sent;
                _context.next = 12;
                return resProject.json();

              case 12:
                dataProject = _context.sent;
                return _context.abrupt("return", {
                  id: query.id,
                  data: dataProject,
                  provider: dataProject.provider,
                  projects: dataProject.projects.data,
                  h1: data.seo.h1,
                  title: data.seo.title,
                  des: data.seo.des,
                  canonical: data.seo.canonical,
                  robots: data.seo.robots,
                  og_url: data.seo.url,
                  url_images: data.seo.url_image,
                  headerProjects: data.headerProjects,
                  headerCategories: data.headerCategories,
                  dataBase: data.dataBase
                });

              case 14:
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

  function Pro(props) {
    var _this;

    _classCallCheck(this, Pro);

    _this = _possibleConstructorReturn(this, (Pro.__proto__ || Object.getPrototypeOf(Pro)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "componentDidMount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee2() {
          var $max, $height, $readMore, $readLess;
          return _regenerator.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  $max = 220;
                  $height = (0, _jquery.default)('#readMoreText').css('height', 'auto').height();

                  if ($height < $max) {
                    (0, _jquery.default)("#readMoreBtn").hide();
                  } else {
                    $height = (0, _jquery.default)('#readMoreText').css('height', '220px');
                    $readMore = (0, _jquery.default)("#readMoreBtnText").text();
                    $readLess = (0, _jquery.default)("#readLessBtnText").text();
                    (0, _jquery.default)("#readMoreBtn").text($readMore);
                    (0, _jquery.default)("#readMoreBtn").append("<span class=\"fa fa-angle-down font-15\"></span>");
                    (0, _jquery.default)('#readMoreBtn').click(function () {
                      var $this = (0, _jquery.default)(this);
                      (0, _jquery.default)("#readMoreBtn").text($readMore);

                      if ($this.data('expanded') == "yes") {
                        $this.data('expanded', "no");
                        (0, _jquery.default)("#readMoreBtn").text($readMore);
                        (0, _jquery.default)("#readMoreBtn").append("<span class=\"fa fa-angle-down font-15\" ></span>");
                        (0, _jquery.default)('#readMoreText').animate({
                          height: '220px'
                        });
                      } else {
                        $this.data('expanded', "yes");
                        (0, _jquery.default)('#readMoreText').css({
                          height: 'auto'
                        });
                        (0, _jquery.default)("#readMoreBtn").text($readLess);
                        (0, _jquery.default)("#readMoreBtn").append("<span class=\"fa fa-angle-up font-15\"></span>");
                      }
                    });
                  }

                case 3:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        return function value() {
          return _value.apply(this, arguments);
        };
      }()
    });
    _this.state = {
      data: {},
      provider: {},
      projects: {}
    };
    return _this;
  }

  _createClass(Pro, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          data = _props.data,
          provider = _props.provider,
          projects = _props.projects;
      var movieItems = [];
      var moreProject = [];

      if (projects.length > 0) {
        var i = 0;
        projects.map(function (e) {
          if (i < 6) {
            movieItems.push(_react.default.createElement("div", {
              className: "col-md-6 col-lg-6 col-12 pl-0 pr-4 pb-3 project-image rounded-2",
              key: e.id,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 81
              }
            }, _react.default.createElement(_listProject.default, {
              project: e,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 82
              }
            })));
          }

          i++;
        });
      }

      if (data.project_count > 6) {
        moreProject.push(_react.default.createElement("div", {
          className: "col-md-4 offset-md-4 mt-3",
          key: "project_count",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          }
        }, _react.default.createElement(_link.default, {
          href: "/pro/".concat(this.props.id, "-").concat(provider.slug, "/d\u1EF1-\xE1n"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          }
        }, _react.default.createElement("a", {
          className: "btn btn-primary w-100 font-weight-normal text-white",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          }
        }, "Xem th\xEAm ", _react.default.createElement("span", {
          className: "number-project",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          }
        }, "(", data.project_count - 6, ")"), " d\u1EF1 \xE1n"))));
      }

      return _react.default.createElement(_proDetail.default, _extends({
        provider_id: this.props.id,
        provider_slug: provider.slug,
        data: data
      }, this.props, {
        css: _provider.default,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }), _react.default.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, _react.default.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, _react.default.createElement("div", {
        className: "col-0 col-md-3 col-lg-3 provider-sidebar p-0 mt-2",
        id: "sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, _react.default.createElement(_providerSidebar.default, {
        provider: provider,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      })), _react.default.createElement("div", {
        className: "col-12 col-md-9 col-lg-9 mt-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, _react.default.createElement("div", {
        className: "provider-about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, _react.default.createElement("div", {
        className: "about pb-3 px-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, _react.default.createElement("div", {
        id: "readMore",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, _react.default.createElement("div", {
        className: "readMoreWrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, _react.default.createElement("div", {
        id: "readMoreText",
        className: "font-14",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, _react.default.createElement("h3", {
        dangerouslySetInnerHTML: {
          __html: provider.about_content
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      })), _react.default.createElement("div", {
        className: "readMoreGradient",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      })), _react.default.createElement("button", {
        id: "readMoreBtn",
        className: "float-left mt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }), _react.default.createElement("span", {
        id: "readLessBtnText",
        style: {
          display: "none"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, "R\xFAt g\u1ECDn ", _react.default.createElement("span", {
        className: "fa fa-angle-up",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      })), _react.default.createElement("span", {
        id: "readMoreBtnText",
        style: {
          display: "none"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, "Xem th\xEAm ", _react.default.createElement("span", {
        className: "fa fa-angle-down",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }))))))), _react.default.createElement("div", {
        className: "provider-moreinfo mt-4 w-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, _react.default.createElement("div", {
        className: "float-right left-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, _react.default.createElement("div", {
        className: "header-6 top mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, _react.default.createElement("a", {
        className: "text-dark font-25",
        href: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, data.project_count + " Dự án", _react.default.createElement("span", {
        className: "fa fa-angle-right font-22",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }))), _react.default.createElement("div", {
        className: "row m-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, movieItems, moreProject))), _react.default.createElement("div", {
        className: "row mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      })));
    }
  }]);

  return Pro;
}(_react.Component);

exports.default = Pro;

/***/ }),

/***/ "./pages/pro/provider.css":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = "*,:after,:before{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-ms-overflow-style:scrollbar}@-ms-viewport{width:device-width}header,nav{display:block}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:1rem;font-weight:400;line-height:1.5;color:#333;text-align:left;background-color:#fff}h1,h3{margin-top:0;margin-bottom:.5rem}p{margin-top:0;margin-bottom:1rem}ul{margin-bottom:1rem}ul{margin-top:0}ul ul{margin-bottom:0}strong{font-weight:bolder}a{color:#b953a4;text-decoration:none;background-color:transparent;-webkit-text-decoration-skip:objects}a:not([href]):not([tabindex]){color:inherit;text-decoration:none}img{border-style:none}button{border-radius:0}button,input{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button{text-transform:none}button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}h1,h3{margin-bottom:.5rem;font-family:inherit;font-weight:500;line-height:1.2;color:inherit}h1{font-size:2.5rem}h3{font-size:1.75rem}.list-unstyled{padding-left:0;list-style:none}.img-thumbnail{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid #dee2e6;border-radius:.25rem}.container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:576px){.container{max-width:540px}}@media (min-width:768px){.container{max-width:720px}}@media (min-width:992px){.container{max-width:960px}}@media (min-width:1200px){.container{max-width:1140px}}.container-fluid{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.row{display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.col-3,.col-5,.col-7,.col-12,.col-lg-3,.col-lg-6,.col-lg-9,.col-md-3,.col-md-5,.col-md-6,.col-md-7,.col-md-9,.col-md-12{position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px}.col-3{flex:0 0 25%;max-width:25%}.col-5{flex:0 0 41.66667%;max-width:41.66667%}.col-7{flex:0 0 58.33333%;max-width:58.33333%}.col-12{flex:0 0 100%;max-width:100%}@media (min-width:768px){.col-md-3{flex:0 0 25%;max-width:25%}.col-md-5{flex:0 0 41.66667%;max-width:41.66667%}.col-md-6{flex:0 0 50%;max-width:50%}.col-md-7{flex:0 0 58.33333%;max-width:58.33333%}.col-md-9{flex:0 0 75%;max-width:75%}.col-md-12{flex:0 0 100%;max-width:100%}.offset-md-1{margin-left:8.33333%}}@media (min-width:992px){.col-lg-3{flex:0 0 25%;max-width:25%}.col-lg-6{flex:0 0 50%;max-width:50%}.col-lg-9{flex:0 0 75%;max-width:75%}}.form-control{display:block;width:100%;padding:.375rem .75rem;font-size:1rem;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem}.form-control::-ms-expand{background-color:transparent;border:0}.collapse:not(.show){display:none}.nav{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:.5rem 1rem}.nav-tabs{border-bottom:1px solid #dee2e6}.nav-tabs .nav-item{margin-bottom:-1px}.nav-tabs .nav-link{border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem}.navbar{position:relative;padding:.5rem 1rem}.navbar{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between}.navbar-brand{display:inline-block;padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;line-height:inherit;white-space:nowrap}.navbar-nav{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-collapse{flex-basis:100%;flex-grow:1;align-items:center}.navbar-toggler{padding:.25rem .75rem;font-size:1.25rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:.25rem}@media (min-width:768px){.navbar-expand-md{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-md .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}}.navbar-light .navbar-brand{color:hsla(0,0%,7%,.9)}.navbar-light .navbar-nav .nav-link{color:hsla(0,0%,7%,.5)}.navbar-light .navbar-toggler{color:hsla(0,0%,7%,.5);border-color:hsla(0,0%,7%,.1)}.badge-pill{padding-right:.6em;padding-left:.6em;border-radius:10rem}.bg-primary{background-color:#b953a4!important}.bg-secondary{background-color:#6c757d!important}.bg-white{background-color:#fff!important}.border{border:1px solid #dee2e6!important}.border-0{border:0!important}.border-right-0{border-right:0!important}.border-left-0{border-left:0!important}.rounded-circle{border-radius:50%!important}.d-none{display:none!important}.d-block{display:block!important}.d-flex{display:flex!important}@media (min-width:576px){.d-sm-none{display:none!important}}@media (min-width:768px){.d-md-none{display:none!important}.d-md-block{display:block!important}}.justify-content-start{justify-content:flex-start!important}.justify-content-end{justify-content:flex-end!important}.float-left{float:left!important}.float-right{float:right!important}.position-relative{position:relative!important}.position-absolute{position:absolute!important}.w-100{width:100%!important}.h-100{height:100%!important}.m-0{margin:0!important}.mb-0{margin-bottom:0!important}.mt-1{margin-top:.25rem!important}.mx-1{margin-right:.25rem!important}.mb-1{margin-bottom:.25rem!important}.ml-1,.mx-1{margin-left:.25rem!important}.mt-2,.my-2{margin-top:.5rem!important}.my-2{margin-bottom:.5rem!important}.mb-3{margin-bottom:1rem!important}.mt-4{margin-top:1.5rem!important}.p-0{padding:0!important}.py-0{padding-top:0!important}.px-0{padding-right:0!important}.py-0{padding-bottom:0!important}.pl-0,.px-0{padding-left:0!important}.py-1{padding-top:.25rem!important}.px-1{padding-right:.25rem!important}.py-1{padding-bottom:.25rem!important}.px-1{padding-left:.25rem!important}.py-2{padding-top:.5rem!important}.px-2{padding-right:.5rem!important}.py-2{padding-bottom:.5rem!important}.px-2{padding-left:.5rem!important}.py-3{padding-top:1rem!important}.px-3{padding-right:1rem!important}.pb-3,.py-3{padding-bottom:1rem!important}.px-3{padding-left:1rem!important}.pr-4,.px-4{padding-right:1.5rem!important}.px-4{padding-left:1.5rem!important}.my-auto{margin-top:auto!important}.mr-auto,.mx-auto{margin-right:auto!important}.my-auto{margin-bottom:auto!important}.mx-auto{margin-left:auto!important}.text-left{text-align:left!important}.text-center{text-align:center!important}@media (min-width:768px){.text-md-center{text-align:center!important}}.text-uppercase{text-transform:uppercase!important}.font-weight-normal{font-weight:400!important}.font-weight-bold{font-weight:700!important}.text-white{color:#fff!important}.text-primary{color:#b953a4!important}.text-secondary{color:#6c757d!important}.text-dark{color:#343a40!important}@font-face{font-family:FontAwesome;src:url(\"/static/fonts/fontawesome-webfont.eot?v=4.7.0\");src:url(\"/static/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0\") format(\"embedded-opentype\"),url(\"/static/fonts/fontawesome-webfont.woff2?v=4.7.0\") format(\"woff2\"),url(\"/static/fonts/fontawesome-webfont.woff?v=4.7.0\") format(\"woff\"),url(\"/static/fonts/fontawesome-webfont.ttf?v=4.7.0\") format(\"truetype\"),url(\"/static/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular\") format(\"svg\");font-weight:400;font-style:normal}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-2x{font-size:2em}.fa-search:before{content:\"\\F002\"}.fa-envelope-o:before{content:\"\\F003\"}.fa-star:before{content:\"\\F005\"}.fa-clock-o:before{content:\"\\F017\"}.fa-pencil:before{content:\"\\F040\"}.fa-map-marker:before{content:\"\\F041\"}.fa-pencil-square-o:before{content:\"\\F044\"}.fa-chevron-right:before{content:\"\\F054\"}.fa-info-circle:before{content:\"\\F05A\"}.fa-phone:before{content:\"\\F095\"}.fa-rss:before{content:\"\\F09E\"}.fa-globe:before{content:\"\\F0AC\"}.fa-briefcase:before{content:\"\\F0B1\"}.fa-bars:before{content:\"\\F0C9\"}.fa-lightbulb-o:before{content:\"\\F0EB\"}.fa-angle-right:before{content:\"\\F105\"}.fa-angle-up:before{content:\"\\F106\"}.fa-angle-down:before{content:\"\\F107\"}.fa-graduation-cap:before{content:\"\\F19D\"}.fa-user-circle-o:before{content:\"\\F2BE\"}body,h1{font-family:helvetica-ttf,sans-serif!important}.rounded-2{border-radius:.5rem!important}input{outline:none;border:none}input::-webkit-input-placeholder{color:#adadad}input:-moz-placeholder,input::-moz-placeholder{color:#adadad}input:-ms-input-placeholder{color:#adadad}button{outline:none!important;border:none;background:transparent}.font-12{font-size:12px!important}.font-14{font-size:14px!important}.font-15{font-size:15px!important}.font-22{font-size:22px!important}.font-25{font-size:25px!important}.text-gray-200{color:#999!important}.bg-indigo{background-color:#664cc7!important}.bg-yellow-green{background-color:#bdc74c!important}.bg-red-100{background-color:#c74c4c!important}.bg-teal{background-color:#47be84!important}.bg-cyan{background-color:#4cb1c7!important}.bg-gray{background-color:#ddd!important}.text-yellow{color:#fc0!important}.bg-blue-200{background-color:#4c91c7!important}.navbar-9houzz{color:#666!important;height:60px}.header-search .input-radius{border:1px solid!important;border-radius:4em/5em}.header-search{position:relative;width:550px;margin-left:15px;display:block}.header-search .input-radius{width:100%;height:40px;border:1px solid #ddd!important}.header-search .icon-search{position:absolute;right:10px;top:22%;color:#b953a4;z-index:10;font-weight:lighter}.header-left{padding:0!important}.StoreNavigation-overlay{position:fixed;top:0;left:-999px;width:100%;height:100%;-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";background:rgba(0,0,0,.8);overflow:hidden;z-index:1111;opacity:0;display:none}@media (min-width:1300px){.container{max-width:1265px}}@media (min-width:768px) and (max-width:992px){.container{max-width:868px}}@media (min-width:768px) and (max-width:991.98px){.header-search{margin-left:50px!important}}@media (min-width:576px) and (max-width:767.98px){.navbar-9houzz{max-width:100%}header{height:60px!important}}@media (max-width:575.98px){header{height:60px!important}}.living-room{background-image:url(\"/static/images/outdoor-room.png\")!important}.kitchen{background-image:url(\"/static/images/kitchen.png\")!important}.bedroom{background-image:url(\"/static/images/bedroom.png\")!important}.bathroom{background-image:url(\"/static/images/bathroom.png\")!important}.workroom{background-image:url(\"/static/images/workroom.png\")!important}.baby-room{background-image:url(\"/static/images/babyroom.png\")!important}.outdoor-room{background-image:url(\"/static/images/outdoor-room.png\")!important}header{position:relative;height:105px;background:#fff;z-index:1000000}.nav-9houzz{background-color:#b953a4!important;color:#fff;position:relative;margin-left:0!important;margin-right:0!important}.nav-9houzz .navbar-nav{display:block;padding-left:40px!important;padding-right:40px!important}.nav-9houzz .header-menu{padding:0!important}.nav-9houzz .header-menu .nav-item:first-child{margin-left:7%!important}.nav-9houzz .header-menu .nav-item{display:block;padding-left:40px!important;padding-right:40px!important}.nav-9houzz .header-menu .nav-item .nav-link{padding:.5rem!important;font-size:14px!important;color:#fff!important}.nav-9houzz .header-menu .nav-item .nav-prof{position:relative!important}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child{top:4px!important;left:-40px!important;width:270px!important;z-index:11111111111}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child a{color:#666!important}.nav-9houzz .header-menu .nav-item .nav-child{position:absolute;display:none!important;top:100%;left:0;background:#fff;list-style:none;border:1px solid #ddd;border-top:none;padding:10px 14px 20px;z-index:11111111111}.nav-9houzz .header-menu .nav-item .nav-child .nav-idea{width:18%;height:112px;margin:10px;float:left;position:relative;background-position:50%;background-repeat:no-repeat;vertical-align:middle;line-height:112px;background-size:cover!important;color:#fff!important}@media (min-width:768px){.nav-idea{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}}@media (max-width:767.98px){.nav-9houzz{padding-left:0!important;padding-right:0!important}.nav-9houzz .navbar>.navbar-collapse{padding-bottom:20px!important}.nav-9houzz .header-menu,.nav-9houzz .header-menu .nav-item{padding-left:10px!important;padding-right:10px!important}.nav-9houzz .header-menu .nav-child,.nav-9houzz .header-menu .nav-item .nav-child{position:relative!important;top:0!important;display:block!important;overflow:hidden!important}.nav-9houzz .header-menu .nav-item .navbar-toggler,.nav-9houzz .header-menu .navbar-toggler{padding:.25rem!important}.nav-9houzz .header-menu .nav-item .navbar-toggler span,.nav-9houzz .header-menu .navbar-toggler span{font-size:13px!important}.nav-idea{width:90%!important;text-align:center;padding:57px 0;margin:12px auto;float:none;line-height:0!important}.navbar-toggler{border:none!important}.navbar-toggler span{font-size:18px!important;margin-top:3px!important}.nav-9houzz .header-menu .nav-item .nav-child{background:none!important;border:none!important}.nav-9houzz .header-menu .nav-item .nav-child .nav-idea{width:18%;height:0!important;float:left;line-height:112px;text-align:left;padding:0!important;color:#fff!important;margin-bottom:25px}.nav-9houzz .header-menu .nav-item .nav-child .nav-idea{text-transform:none!important;font-size:16px!important;font-weight:400!important}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child{padding-top:0!important;top:0!important;left:0!important;width:100%;-webkit-box-shadow:none;box-shadow:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:11111111111}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child a{color:#fff!important;font-size:16px!important}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child .nav-service{padding-left:0!important;line-height:30px!important}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child .text-left{padding-left:0!important}.nav-9houzz .header-menu .nav-item:first-child{margin-left:0!important}}.banner{height:361px}.sidebar-count{font-size:30px!important}.gradient-animate{height:100px;background:-webkit-linear-gradient(transparent,#000);background:-o-linear-gradient(transparent,#000);background:linear-gradient(transparent,#000);bottom:0;z-index:0}.provider-contact{overflow:hidden!important}.provider-contact li{margin-bottom:8px;padding:0 22px;position:relative}.provider-contact li i{left:0;position:absolute;top:3px}.provider-nav{height:50px;line-height:34px}.provider-details .banner{max-height:290px;height:290px;position:relative;overflow:hidden}.project{width:100%;height:300px}.project img{object-fit:cover;object-position:center center}.provider-avatar{width:165px;height:165px;top:-127px;border:1px solid #d3d3d3;left:20px;background:#fff}.provider-info{bottom:4rem;left:13rem;z-index:1}.provider-details .nav-link{color:#666!important;padding:.5rem 1.5rem!important}.provider-details .nav-tabs .active{color:#b953a4!important}.provider-details .nav-tabs .active:after{content:\"\";position:absolute;bottom:-1px;left:12%;background:#b953a5;height:3px;width:75%}.provider-details .nav-tabs .active a{font-weight:700!important;color:#b953a4!important}.provider-contact a,.provider-contact span{color:#333!important;font-weight:400}.provider-about .about p,span{font-size:13px!important}.provider-project{background:#fff!important}.provider-project .first-image{border-top-left-radius:.25rem!important;-webkit-border-top-left-radius:.25rem!important;-moz-border-top-left-radius:.25rem!important;-khtml-border-top-left-radius:.25rem!important}.provider-project .second-image{height:49%!important}.provider-project .second-image,.provider-project .second-image img{border-top-right-radius:.25rem!important;-webkit-border-top-right-radius:.25rem!important;-moz-border-top-right-radius:.25rem!important;-khtml-border-top-right-radius:.25rem!important}.provider-project .right-avatar{width:98%}.provider-moreinfo{display:inline-block;clear:both;overflow:hidden}.provider-moreinfo .left-info{width:75%;display:block;border-top:1px solid #e2e2e2;padding-top:10px}.info-special{border-bottom:1px dotted #ddd;padding-bottom:5px!important}.info-special i{font-size:20px;top:6px!important}.info-special span{font-size:20px!important}.provider-sidebar .sidebar-label{color:#888!important;margin-bottom:5px!important}.provider-contact .social{float:left;width:100%}.provider-contact .social a{float:left;margin-right:8px;padding:5px;background:#d2d6dc;border-radius:50%;font-size:14px;color:#fff!important;width:25px;height:25px}@media (max-width:575.98px){.provider-avatar{width:80px!important;height:80px!important;top:-105px!important}.provider-details .banner{height:185px!important}.banner img{height:100%!important}.provider-info{bottom:4rem;left:7rem;z-index:1}.provider-info h1{font-size:18px!important;font-weight:700!important}.provider-about .about{padding-left:0!important;padding-right:0!important}.provider-about .about #readMoreText p,.provider-about .about #readMoreText span{text-align:left!important;font-size:15px!important}.provider-contact a,.provider-contact span{font-size:15px!important}#myTab.nav{overflow-x:scroll;overflow-y:hidden;white-space:nowrap;display:block!important}#myTab.nav li{display:inline-block;color:#fff;text-align:center}.provider-details .nav-tabs .active:after{content:\"\";position:absolute;bottom:-1px;left:12%;background:#fff;height:3px;width:75%}.provider-nav{height:45px!important;line-height:34px}.provider-main{padding-left:0!important;padding-right:0!important;margin-right:0!important;margin-left:0!important}#sidebar{max-width:100%!important;margin-top:-.5rem!important;border-top:none!important}.left-info{float:left!important;width:100%!important}.left-info .project-image{padding-right:10px!important}.project{height:200px!important}.provider-project .right-avatar{width:97%!important}}#readMore{text-align:center}#readMore,.readMoreWrapper{width:100%;height:auto;position:relative}.readMoreWrapper{text-align:left}#readMoreText{width:100%;height:100px;overflow:hidden;padding:0 0 20px;position:relative;color:#333!important;font-weight:400!important;background-color:#fff}#readMoreText p,#readMoreText span{line-height:23px!important}.readMoreGradient{width:100%;height:50px;background:-webkit-linear-gradient(hsla(0,0%,100%,0),#fff);background:linear-gradient(hsla(0,0%,100%,0),#fff);position:absolute;bottom:0}#readMoreBtn{background-color:#fff;color:#b953a4;padding:0 8px;text-decoration:none;display:inline-block;position:relative;bottom:10px;left:0;float:left;font-size:13px}#sidebar{max-width:23%!important}.fa-star{color:#fc0}.disable{color:#ddd!important}img{vertical-align:middle}";

/***/ }),

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var routes = __webpack_require__("next-routes"); // Name   Page      Pattern


module.exports = routes() // ----   ----      -----
.add('index', '/', 'index') // about  about     /about
.add('test', '/test') // blog   blog      /blog/:slug
.add('news', '/news').add('image', '/anh/:id-:slug', 'image/index').add('y-tuong', '/y-tuong', 'idea') // y-tuong   idea   /y-tuong
.add('idea.detail', '/y-tuong/:params', 'idea-filter').add('pro.detail', '/pro/:id-:slug', 'pro/index').add('pro.project', '/pro/:id-:slug/d%E1%BB%B1-%C3%A1n', 'pro/project').add('pro.review', '/pro/:id-:slug/nh%E1%BA%ADn-x%C3%A9t', 'pro/review').add('project.detail', '/du-an/:id-:slug', 'project/index').add('static', '/about/:slug', 'static-page');

/***/ }),

/***/ "./styles/style.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/pro/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "bootstrap/dist/js/bootstrap.min.js":
/***/ (function(module, exports) {

module.exports = require("bootstrap/dist/js/bootstrap.min.js");

/***/ }),

/***/ "classnames":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "isomorphic-fetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "jquery":
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),

/***/ "jquery/dist/jquery.min.js":
/***/ (function(module, exports) {

module.exports = require("jquery/dist/jquery.min.js");

/***/ }),

/***/ "next-routes":
/***/ (function(module, exports) {

module.exports = require("next-routes");

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
//# sourceMappingURL=pro.js.map