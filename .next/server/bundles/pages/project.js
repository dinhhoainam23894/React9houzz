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
/******/ 	return __webpack_require__(__webpack_require__.s = 76);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var routes = __webpack_require__(14); // Name   Page      Pattern


module.exports = routes() // ----   ----      -----
.add('index', '/', 'index') // about  about     /about
.add('news', '/news').add('image', '/anh/:id-:slug', 'image/index').add('y-tuong', '/y-tuong', 'idea') // y-tuong   idea   /y-tuong
.add('idea.detail', '/y-tuong/:params', 'idea-filter').add('pro.detail', '/pro/:id-:slug', 'pro/index').add('pro.project', '/pro/:id-:slug/d%E1%BB%B1-%C3%A1n', 'pro/project').add('pro.review', '/pro/:id-:slug/nh%E1%BA%ADn-x%C3%A9t', 'pro/review').add('project.detail', '/du-an/:id-:slug', 'project/detail').add('static', '/about/:slug', 'static-page').add('list-project', '/danh-sach-du-an', 'project/list-project').add('list-project.detail', '/danh-sach-du-an/:slug', 'project/list-project-filter').add('list-provider', '/danh-sach-chuyen-gia', 'pro/list-provider').add('list-provider.detail', '/danh-sach-chuyen-gia/:slug', 'pro/list-provider-filter');

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.activePath = activePath;
exports.ucfirst = ucfirst;
exports.mapObject = exports.rating = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _pathToRegexp = _interopRequireDefault(__webpack_require__(18));

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
        key: $i
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
        key: $i
      }, _react.default.createElement("span", {
        className: "position-absolute provider-star",
        style: divStyle
      })));
    } else {
      star.push(_react.default.createElement("span", {
        className: "fa fa-star disable",
        key: $i
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
/* 5 */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainBody = exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(3));

var _react = _interopRequireDefault(__webpack_require__(0));

var _meta = _interopRequireDefault(__webpack_require__(12));

var _router = _interopRequireDefault(__webpack_require__(2));

var _head = _interopRequireDefault(__webpack_require__(6));

var _routes = __webpack_require__(1);

var _reactstrap = __webpack_require__(11);

var _universalCookie = _interopRequireDefault(__webpack_require__(15));

var _package = _interopRequireDefault(__webpack_require__(16));

var _nav = _interopRequireDefault(__webpack_require__(17));

var _footer = _interopRequireDefault(__webpack_require__(19));

var _style = _interopRequireDefault(__webpack_require__(10));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
          dataBase = _props.dataBase,
          backPageLink = _props.backPageLink,
          nextPageLink = _props.nextPageLink,
          slick = _props.slick;
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_head.default, null, _react.default.createElement("meta", {
        charSet: "UTF-8"
      }), _react.default.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), _react.default.createElement("meta", {
        name: "fragment",
        content: "!"
      }), _react.default.createElement("title", null, this.props.title || '9houz'), des && _react.default.createElement("meta", {
        name: "description",
        itemProp: "description",
        content: des
      }), canonical && _react.default.createElement("link", {
        rel: "canonical",
        href: "https://9houz.com" + canonical
      }), title && _react.default.createElement("meta", {
        property: "og:title",
        content: title
      }), des && _react.default.createElement("meta", {
        property: "og:description",
        content: des
      }), og_url && _react.default.createElement("meta", {
        property: "og:url",
        content: "https://9houz.com" + og_url
      }), url_images && _react.default.createElement("meta", {
        property: "og:image",
        content: url_images
      }), robots && _react.default.createElement("meta", {
        name: "robots",
        content: robots
      }), nextPageLink && _react.default.createElement("link", {
        rel: "next",
        href: "https://9houz.com" + nextPageLink
      }), backPageLink && _react.default.createElement("link", {
        rel: "prev",
        href: "https://9houz.com" + backPageLink
      }), _react.default.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: css
        }
      }), slick && _react.default.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        charset: "UTF-8",
        href: "/vendor/slick.min.css"
      }), slick && _react.default.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "/vendor/slick-theme.min.css"
      })), _react.default.createElement("header", null, _react.default.createElement("div", null, _react.default.createElement("nav", {
        className: "navbar navbar-light navbar-expand-md bg-faded container navbar-9houzz"
      }, _react.default.createElement("button", {
        className: "navbar-toggler px-0",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarCollapse",
        "aria-controls": "navbarCollapse",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
      }, _react.default.createElement("span", {
        className: "fa fa-2x fa-bars text-primary font-22"
      })), _react.default.createElement("div", {
        className: "header-left"
      }, _react.default.createElement(_routes.Link, {
        route: "index"
      }, _react.default.createElement("a", {
        className: "navbar-brand"
      }, _react.default.createElement("img", {
        src: "/images/logo9houz.png",
        alt: "Logo",
        title: "9houzz.com",
        width: "114"
      })))), _react.default.createElement("a", {
        href: "#",
        "data-toggle": "offcanvas",
        className: "d-md-none"
      }, _react.default.createElement("i", {
        className: "fa fa-user-circle-o font-22  py-3"
      })), _react.default.createElement("div", {
        className: "collapse navbar-collapse header-right my-2 nav-menu",
        id: "collapse-header-login"
      }, _react.default.createElement("div", {
        className: "header-search d-none d-sm-none d-md-block mr-auto"
      }, _react.default.createElement("div", {
        className: "input-radius py-0"
      }, _react.default.createElement("form", {
        className: "mt-1"
      }, _react.default.createElement("input", {
        type: "",
        className: "badge-pill form-control border-0 font-14 px-3",
        name: "",
        placeholder: "\xDD t\u01B0\u1EDFng b\u1EA1n mu\u1ED1n t\xECm ki\u1EBFm..."
      }), _react.default.createElement("button", {
        className: "fa fa-search icon-search bg-white border-0",
        "data-toggle": "offcanvas"
      }))))))), _react.default.createElement(_nav.default, {
        headerProjects: headerProjects,
        headerCategories: headerCategories,
        dataBase: dataBase
      })), _react.default.createElement(_meta.default, null), _react.default.createElement("div", {
        className: "StoreNavigation-overlay",
        role: "button",
        tabIndex: "0",
        "aria-label": "Close"
      }), _react.default.createElement(MainBody, {
        navmenu: this.props.navmenu,
        fluid: this.props.fluid,
        container: this.props.container
      }, this.props.children), _react.default.createElement(_footer.default, null), _react.default.createElement("script", {
        src: "/mystatic/jquery-3.2.1.min.js"
      }), _react.default.createElement("script", {
        src: "/mystatic/popper.min.js"
      }), _react.default.createElement("script", {
        src: "/mystatic/bootstrap.min.js"
      }), _react.default.createElement("script", {
        src: "/mystatic/polyfill.min.js"
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
        return _react.default.createElement(_react.default.Fragment, null, this.props.children);
      } else if (this.props.navmenu === false) {
        return _react.default.createElement(_reactstrap.Container, {
          fluid: this.props.fluid,
          style: {
            marginTop: '1em'
          }
        }, this.props.children);
      } else {
        return _react.default.createElement(_reactstrap.Container, {
          fluid: this.props.fluid,
          style: {
            marginTop: '1em'
          }
        }, this.props.children);
      }
    }
  }]);

  return MainBody;
}(_react.default.Component);

exports.MainBody = MainBody;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 10 */
/***/ (function(module, exports) {



/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(__webpack_require__(7));

var _react = _interopRequireDefault(__webpack_require__(0));

var _head = _interopRequireDefault(__webpack_require__(6));

var _nprogress = _interopRequireDefault(__webpack_require__(13));

var _router = _interopRequireDefault(__webpack_require__(2));

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
    className: "jsx-2927448288" + " " + "meta"
  }, _react.default.createElement(_style.default, {
    styleId: "2927448288",
    css: ["#nprogress{pointer-events:none;}", "#nprogress .bar{background:#b953a4;position:fixed;z-index:1031;top:0;left:0;width:100%;height:4px;}", "#nprogress .peg{display:block;position:absolute;right:0px;width:500px;height:100%;opacity:1.0;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px);}"]
  }));
};

exports.default = _default;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("universal-cookie");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = {"name":"create-next-example-app","scripts":{"dev":"node server.js","build":"next build","start":"NODE_ENV=production node server.js","prod":"next build ; NODE_ENV=production node server.js"},"dependencies":{"@zeit/next-css":"^0.2.0","@zeit/next-sass":"^0.2.0","@zeit/next-typescript":"^1.1.0","axios":"^0.18.0","babel-plugin-inline-import":"^3.0.0","babel-plugin-module-resolver":"^3.1.1","bootstrap":"^4.1.1","classnames":"^2.2.6","css-loader":"^0.28.11","dotenv":"^6.0.0","es6-promise":"^4.2.4","express":"^4.16.3","font-awesome":"^4.7.0","ionicons":"^4.2.4","isomorphic-fetch":"^2.2.1","jquery":"^3.3.1","lru-cache":"^4.1.3","merge-files-webpack-plugin":"^1.1.2","next":"^6.1.1","next-compose":"0.0.2","next-routes":"^1.4.2","nprogress":"^0.2.0","popper.js":"^1.14.3","postcss-loader":"^2.1.6","prop-types":"^15.6.2","purify-css":"^1.2.5","purifycss-webpack":"^0.7.0","raw-loader":"^0.5.1","react":"^16.4.1","react-breadcrumbs-dynamic":"^1.1.1","react-document-meta":"^3.0.0-beta.2","react-dom":"^16.4.1","react-helmet":"^5.2.0","react-infinite":"^0.13.0","react-infinite-scroller":"^1.2.0","react-js-pagination":"^3.0.2","react-masonry-component":"^6.2.1","react-modal":"^3.5.1","react-responsive-carousel":"^3.1.41","react-router-dom":"^4.3.1","react-slick":"^0.23.1","react-through":"^1.1.1","reactstrap":"^6.3.0","serve-favicon":"^2.5.0","slick-carousel":"^1.8.1","style-loader":"^0.21.0","styled-jsx":"^2.2.7","styled-jsx-css-loader":"^0.3.0","styled-jsx-plugin-sass":"^0.2.4","tunnel-agent":"^0.6.0","universal-cookie":"^2.2.0","webpack":"^3.10.0"},"devDependencies":{"@babel/core":"^7.0.0-beta.53","babel-preset-env":"^1.7.0","create-next":"^0.1.4","node-sass":"^4.9.2","sass-loader":"^7.0.3","targets-webpack-plugin":"^1.0.3"}}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _routes = __webpack_require__(1);

var _helpers = __webpack_require__(4);

var _jquery = _interopRequireDefault(__webpack_require__(5));

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
        className: "nav-9houzz container-fluid"
      }, _react.default.createElement("nav", {
        className: "navbar navbar-light navbar-expand-md bg-faded container header-menu"
      }, _react.default.createElement("div", {
        className: "collapse navbar-collapse",
        id: "navbarCollapse"
      }, _react.default.createElement("ul", {
        className: "navbar-nav text-md-center d-flex w-100 position-relative list-unstyled  justify-md-content-start justify-content-start"
      }, _react.default.createElement("li", {
        className: "offset-0 offset-md-1 nav-item py-1 px-1"
      }, _react.default.createElement("div", {
        className: "d-flex w-100"
      }, _react.default.createElement("i", {
        className: "fa fa-lightbulb-o my-auto",
        "aria-hidden": "true",
        style: {
          "paddingBottom": "1px"
        }
      }), _react.default.createElement(_routes.Link, {
        prefetch: true,
        route: "/y-tuong"
      }, _react.default.createElement("a", {
        className: "nav-link mr-auto"
      }, "\xDD T\u01AF\u1EDENG")), _react.default.createElement("a", {
        className: "navbar-toggler menu-toggle",
        "data-toggle": "collapse",
        "data-target": "#nav-product-2",
        "aria-controls": "collapse-login",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
      }, _react.default.createElement("span", {
        className: "fa fa-chevron-right"
      }))), _react.default.createElement("div", {
        className: "collapse navbar-collapse",
        id: "nav-product-2"
      }, _react.default.createElement("ul", {
        className: "nav-child container list-unstyled",
        role: "menu"
      }, dataBase && dataBase.header_idea.map(function (value, index) {
        return _react.default.createElement("li", {
          key: index
        }, _react.default.createElement(_routes.Link, {
          prefetch: true,
          route: value.uri
        }, _react.default.createElement("a", {
          ids: value.original,
          href: value.uri,
          className: "font-15 font-weight-bold text-uppercase nav-idea ".concat(value.class)
        }, value.name_tag)));
      })))), _react.default.createElement("li", {
        className: "nav-item py-1 px-1"
      }, _react.default.createElement("div", {
        className: "d-flex w-100"
      }, _react.default.createElement("i", {
        className: "fa fa-briefcase my-auto",
        "aria-hidden": "true"
      }), _react.default.createElement("a", {
        className: "nav-link mr-auto",
        href: "#"
      }, "D\u1EF0 \xC1N"), _react.default.createElement("a", {
        className: "navbar-toggler menu-toggle",
        "data-toggle": "collapse",
        "data-target": "#nav-product",
        "aria-controls": "collapse-login",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
      }, _react.default.createElement("span", {
        className: "fa fa-chevron-right "
      }))), _react.default.createElement("div", {
        className: "collapse navbar-collapse nav-prof",
        id: "nav-product"
      }, _react.default.createElement("div", {
        className: "nav-child container",
        role: "menu"
      }, _react.default.createElement("div", {
        className: "row py-1 px-2 nav-service d-flex"
      }, _react.default.createElement("div", {
        className: "col-md-12 text-left"
      }, _react.default.createElement("ul", {
        className: "list-unstyled"
      }, headerProjects && (0, _helpers.mapObject)(headerProjects, function (index, value) {
        return _react.default.createElement("li", {
          className: "mt-1",
          key: value.id
        }, _react.default.createElement("a", {
          href: "#",
          className: "text-dark font-14"
        }, value.name.vi));
      }))))))), _react.default.createElement("li", {
        className: "nav-item py-1 px-1"
      }, _react.default.createElement("div", {
        className: "d-flex w-100"
      }, _react.default.createElement("i", {
        className: "fa fa-graduation-cap my-auto",
        "aria-hidden": "true"
      }), _react.default.createElement("a", {
        className: "nav-link mr-auto",
        href: "#"
      }, "PRO"), _react.default.createElement("a", {
        className: "navbar-toggler menu-toggle",
        "data-toggle": "collapse",
        "data-target": "#nav-product-3",
        "aria-controls": "collapse-login",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
      }, _react.default.createElement("span", {
        className: "fa fa-chevron-right "
      }))), _react.default.createElement("div", {
        className: "collapse navbar-collapse nav-prof",
        id: "nav-product-3"
      }, _react.default.createElement("div", {
        className: "nav-child container",
        role: "menu"
      }, _react.default.createElement("div", {
        className: "row py-1 px-2 nav-service d-flex"
      }, _react.default.createElement("div", {
        className: "col-md-12 text-left"
      }, _react.default.createElement("ul", {
        className: "list-unstyled"
      }, headerCategories && (0, _helpers.mapObject)(headerCategories, function (index, value) {
        return _react.default.createElement("li", {
          className: "mt-1",
          key: value.id
        }, _react.default.createElement("a", {
          href: "#",
          className: "text-dark font-14"
        }, value.name));
      }))))))), _react.default.createElement("li", {
        className: "nav-item py-1 px-1"
      }, _react.default.createElement("div", {
        className: "d-flex w-100"
      }, _react.default.createElement("i", {
        className: "fa fa-pencil-square-o my-auto",
        "aria-hidden": "true"
      }), _react.default.createElement("a", {
        className: "nav-link",
        href: "#"
      }, "BLOG"))), _react.default.createElement("li", {
        className: "nav-item py-1 px-1"
      }, _react.default.createElement("div", {
        className: "d-flex w-100"
      }, _react.default.createElement("i", {
        className: "fa fa-rss my-auto",
        "aria-hidden": "true"
      }), _react.default.createElement("a", {
        className: "nav-link",
        href: "#"
      }, "TIN T\u1EE8C"))), _react.default.createElement("li", {
        className: "nav-item py-1 px-1 d-block d-md-none"
      }, _react.default.createElement("div", {
        className: "d-flex w-100"
      }, _react.default.createElement("i", {
        className: "fa fa-info-circle my-auto",
        "aria-hidden": "true"
      }), _react.default.createElement("a", {
        className: "nav-link mr-auto",
        href: "#"
      }, "V\u1EC0 CH\xDANG T\xD4I"), _react.default.createElement("a", {
        className: "navbar-toggler menu-toggle",
        "data-toggle": "collapse",
        "data-target": "#nav-product-4",
        "aria-controls": "collapse-login",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
      }, _react.default.createElement("span", {
        className: "fa fa-chevron-right "
      }))), _react.default.createElement("div", {
        className: "collapse navbar-collapse nav-prof",
        id: "nav-product-4"
      }, _react.default.createElement("div", {
        className: "nav-child container",
        role: "menu"
      }, _react.default.createElement("div", {
        className: "row py-1 px-2 nav-service d-flex"
      }, _react.default.createElement("div", {
        className: "col-md-12 text-left"
      }, _react.default.createElement("ul", {
        className: "list-unstyled"
      }, _react.default.createElement("li", null, _react.default.createElement(_routes.Link, {
        prefetch: true,
        route: "/about/gioi-thieu"
      }, _react.default.createElement("a", {
        target: "_blank",
        title: "Gi\u1EDBi thi\u1EC7u"
      }, "Gi\u1EDBi thi\u1EC7u"))), _react.default.createElement("li", null, _react.default.createElement("a", {
        target: "_blank",
        title: "Li\xEAn h\u1EC7",
        rel: "nofollow"
      }, "Li\xEAn h\u1EC7")), _react.default.createElement("li", null, _react.default.createElement(_routes.Link, {
        prefetch: true,
        route: "/about/chinh-sach-bao-mat"
      }, _react.default.createElement("a", {
        href: "#",
        target: "_blank",
        title: "Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt"
      }, "Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt"))), _react.default.createElement("li", null, _react.default.createElement(_routes.Link, {
        prefetch: true,
        route: "/about/dieu-khoan-su-dung"
      }, _react.default.createElement("a", {
        href: "#",
        target: "_blank",
        title: "\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng"
      }, "\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng")))))))))))));
    }
  }]);

  return nav;
}(_react.default.Component);

exports.default = nav;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("path-to-regexp");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _routes = __webpack_require__(1);

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
        className: "footer text-dark"
      }, _react.default.createElement("div", {
        className: "container py-3"
      }, _react.default.createElement("div", {
        className: "row footer-content mt-2 mx-0 flex-wrap-reverse"
      }, _react.default.createElement("div", {
        className: "col-lg-3 column pr-1 footer-logo pl-5"
      }, _react.default.createElement("div", {
        className: "widget"
      }, _react.default.createElement("div", {
        className: "about_widget"
      }, _react.default.createElement("div", {
        className: "logo d-none d-md-block"
      }, _react.default.createElement("a", {
        href: "/",
        title: "Tr\u1EDF v\u1EC1 trang ch\u1EE7"
      }, _react.default.createElement("img", {
        src: "/images/logo9houz.png",
        alt: "9HOUZ.COM - Ngu\u1ED3n c\u1EA3m h\u1EE9ng thi\u1EBFt k\u1EBF n\u1ED9i th\u1EA5t, trang ho\xE0ng nh\xE0 c\u1EEDa | 9houz.com",
        title: "9houzz.com",
        width: "140"
      }))), _react.default.createElement("p", {
        className: "font-13"
      }, "Copyright \xA9 2018 9houz Inc.")))), _react.default.createElement("div", {
        className: "col-lg-9 row d-md-flex d-none"
      }, _react.default.createElement("div", {
        className: "col-lg-4 column footer-menu pr-1"
      }, _react.default.createElement("div", {
        className: "widget"
      }, _react.default.createElement("p", {
        className: "footer-title"
      }, " V\u1EC0 CH\xDANG T\xD4I "), _react.default.createElement("div", {
        className: "link_widgets"
      }, _react.default.createElement("div", {
        className: "row"
      }, _react.default.createElement("div", {
        className: "col-lg-12"
      }, _react.default.createElement(_routes.Link, {
        prefetch: true,
        route: "/about/gioi-thieu"
      }, _react.default.createElement("a", {
        href: "#",
        target: "_blank",
        title: "Gi\u1EDBi thi\u1EC7u"
      }, "Gi\u1EDBi thi\u1EC7u")), _react.default.createElement("a", {
        href: "#",
        title: "Li\xEAn h\u1EC7",
        rel: "nofollow"
      }, "Li\xEAn h\u1EC7"), _react.default.createElement(_routes.Link, {
        prefetch: true,
        route: "/about/chinh-sach-bao-mat"
      }, _react.default.createElement("a", {
        href: "#",
        target: "_blank",
        title: "Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt"
      }, "Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt")), _react.default.createElement(_routes.Link, {
        prefetch: true,
        route: "/about/dieu-khoan-su-dung"
      }, _react.default.createElement("a", {
        href: "#",
        target: "_blank",
        title: "\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng"
      }, "\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng"))))))), _react.default.createElement("div", {
        className: "col-lg-4 column footer-menu pr-1"
      }, _react.default.createElement("div", {
        className: "widget"
      }, _react.default.createElement("p", {
        className: "footer-title"
      }, "KH\xC1M PH\xC1"), _react.default.createElement("div", {
        className: "link_widgets"
      }, _react.default.createElement("div", {
        className: "row"
      }, _react.default.createElement("div", {
        className: "col-lg-12"
      }, _react.default.createElement("a", {
        href: "#",
        title: "C\xE2u h\u1ECFi th\u01B0\u1EDDng g\u1EB7p",
        rel: "nofollow"
      }, " C\xE2u h\u1ECFi th\u01B0\u1EDDng g\u1EB7p "), _react.default.createElement("a", {
        href: "#",
        target: "_blank",
        title: "H\u01B0\u1EDBng d\u1EABn thanh to\xE1n",
        rel: "nofollow"
      }, " Blog "), _react.default.createElement("a", {
        href: "#",
        target: "_blank",
        title: "H\u01B0\u1EDBng d\u1EABn thanh to\xE1n",
        rel: "nofollow"
      }, " Tin t\u1EE9c "), _react.default.createElement("a", {
        href: "#",
        target: "_blank",
        title: "H\u01B0\u1EDBng d\u1EABn thanh to\xE1n",
        rel: "nofollow"
      }, " H\u1ECFi \u0111\xE1p "), _react.default.createElement("a", {
        href: "#",
        target: "_blank",
        title: "H\u01B0\u1EDBng d\u1EABn thanh to\xE1n",
        rel: "nofollow"
      }, " Rao v\u1EB7t ")))))), _react.default.createElement("div", {
        className: "col-lg-4 column footer-menu"
      }, _react.default.createElement("div", {
        className: "widget"
      }, _react.default.createElement("p", {
        className: "footer-title"
      }, "LI\xCAN H\u1EC6"), _react.default.createElement("div", {
        className: "d-block social-links"
      }, _react.default.createElement("div", {
        className: "row"
      }, _react.default.createElement("div", {
        className: "col-lg-12 d-block"
      }, _react.default.createElement("a", {
        target: "_blank",
        rel: "nofollow",
        href: "#",
        className: "facebook d-block"
      }, _react.default.createElement("span", {
        className: "fa fa-facebook"
      }), "Facebook"), _react.default.createElement("a", {
        target: "_blank",
        rel: "nofollow",
        href: "#",
        className: "google d-block"
      }, _react.default.createElement("span", {
        className: "fa fa-google-plus"
      }), "Google+"), _react.default.createElement("a", {
        target: "_blank",
        rel: "nofollow",
        href: "#",
        className: "website d-block"
      }, _react.default.createElement("span", {
        className: "fa fa-youtube "
      }), "Youtube"), _react.default.createElement("a", {
        target: "_blank",
        rel: "nofollow",
        href: "#",
        className: "website d-block"
      }, _react.default.createElement("span", {
        className: "fa fa-envelope-o "
      }), "Support@9houz.com"))))))))));
    }
  }]);

  return footer;
}(_react.default.Component);

exports.default = footer;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(3));

var _react = _interopRequireDefault(__webpack_require__(0));

var _axios = _interopRequireDefault(__webpack_require__(21));

var _helpers = __webpack_require__(4);

var _jquery = _interopRequireDefault(__webpack_require__(5));

var _router = _interopRequireDefault(__webpack_require__(2));

var _routes = __webpack_require__(1);

__webpack_require__(9);

var _assert = __webpack_require__(25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var APIURL = "https://api.9houz.com/" + "api/" + 'image/';

var Image =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Image, _React$Component);

  function Image(props) {
    var _this;

    _classCallCheck(this, Image);

    _this = _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "componentDidMount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee() {
          var image_thumb, image_id;
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (_this.props.data) {
                    _context.next = 3;
                    break;
                  }

                  _context.next = 3;
                  return _this.getValue(_this.props.id);

                case 3:
                  _this.setState({
                    detail: _this.props.detail,
                    listIdea: _this.props.images,
                    nextPageUrl: _this.props.nextPageUrl
                  });

                  _this.setState({
                    currentImage: (0, _jquery.default)('img.currentImage')
                  });

                  image_thumb = (0, _jquery.default)('.thumb');

                  _this.setState({
                    image_thumb: image_thumb
                  });

                  image_id = _this.state.image.id;

                  if (_this.state.detail == false) {
                    image_thumb.each(function () {
                      if ((0, _jquery.default)(this).data('id') == image_id) {
                        (0, _jquery.default)(this).addClass('project-thumb--current');
                      }
                    });
                  }

                case 9:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function value() {
          return _value.apply(this, arguments);
        };
      }()
    });
    Object.defineProperty(_assertThisInitialized(_this), "nextImage", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value2 = _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee2(e, id, slug) {
          return _regenerator.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  e.preventDefault();

                  if (_this.state.detail == false) {
                    _this.nextProject(_this.state.currentValue.id, _this.state.currentValue.slug);
                  } else {
                    _this.nextIdea(_this.state.currentValue.id);
                  }

                case 2:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        return function value(_x, _x2, _x3) {
          return _value2.apply(this, arguments);
        };
      }()
    });
    Object.defineProperty(_assertThisInitialized(_this), "nextIdea", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value3 = _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee3(id) {
          var startIndex, currentIndex, nextImage;
          return _regenerator.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  startIndex = 0;
                  currentIndex = 0;

                  _jquery.default.each(_this.state.listIdea, function ($key, $value) {
                    if ($value.id == id) {
                      startIndex = $key;
                    }
                  });

                  if (!(startIndex == _this.state.listIdea.length - 1)) {
                    _context3.next = 7;
                    break;
                  }

                  _this.getFullImage(_this.state.nextPageUrl, 'next');

                  _context3.next = 13;
                  break;

                case 7:
                  currentIndex = startIndex + 1;
                  nextImage = _this.state.listIdea[currentIndex];
                  _context3.next = 11;
                  return _this.pushStateUrl(nextImage.id, nextImage.slug);

                case 11:
                  _context3.next = 13;
                  return _this.getValue(nextImage.id);

                case 13:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        return function value(_x4) {
          return _value3.apply(this, arguments);
        };
      }()
    });
    Object.defineProperty(_assertThisInitialized(_this), "nextProject", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value4 = _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee4(id, slug) {
          var image_size, currentIndex, lastIndex, lastImage, nextId, nextSlug;
          return _regenerator.default.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  image_size = _this.state.image_thumb.length - 1;
                  currentIndex = _this.state.currentImage;
                  lastIndex = 0;

                  _this.state.image_thumb.each(function () {
                    if ((0, _jquery.default)(this).hasClass('project-thumb--current')) {
                      currentIndex = (0, _jquery.default)(this).index();

                      if (currentIndex < image_size) {
                        lastIndex = currentIndex + 1;
                      } else {
                        lastIndex = 0;
                      }

                      (0, _jquery.default)(this).removeClass('project-thumb--current');
                    }
                  });

                  _this.state.image_thumb.eq(lastIndex).addClass('project-thumb--current');

                  lastImage = _this.state.image_thumb.eq(lastIndex);
                  nextId = lastImage.data('id');
                  nextSlug = lastImage.data('slug');

                  _this.setState({
                    currentImage: (0, _jquery.default)('img.currentImage')
                  });

                  _this.setState({
                    currentValue: _this.state.images[lastIndex]
                  });

                  if (!(_this.props.popup == false)) {
                    _context4.next = 14;
                    break;
                  }

                  _this.pushStateProject(id, slug, nextId, nextSlug); // Router.push(`/project?photoId=${id}&id=${this.state.project.id}`,`/anh/${nextId}-${nextSlug}`)


                  _context4.next = 16;
                  break;

                case 14:
                  _context4.next = 16;
                  return _this.pushStateUrl(nextId, nextSlug);

                case 16:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        return function value(_x5, _x6) {
          return _value4.apply(this, arguments);
        };
      }()
    });
    Object.defineProperty(_assertThisInitialized(_this), "backImage", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value5 = _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee5(e) {
          return _regenerator.default.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  e.preventDefault();

                  if (_this.state.detail == false) {
                    _this.backProject(_this.state.currentValue.id, _this.state.currentValue.slug);
                  } else {
                    _this.backIdea(_this.state.currentValue.id);
                  }

                case 2:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }));

        return function value(_x7) {
          return _value5.apply(this, arguments);
        };
      }()
    });
    Object.defineProperty(_assertThisInitialized(_this), "backProject", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value6 = _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee6(id, slug) {
          var image_size, currentIndex, lastIndex, lastImage, nextId, nextSlug;
          return _regenerator.default.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  image_size = _this.state.image_thumb.length - 1;
                  currentIndex = _this.state.currentImage;
                  lastIndex = 0;

                  _this.state.image_thumb.each(function () {
                    if ((0, _jquery.default)(this).hasClass('project-thumb--current')) {
                      currentIndex = (0, _jquery.default)(this).index();

                      if (currentIndex > 0) {
                        lastIndex = currentIndex - 1;
                      } else {
                        lastIndex = image_size;
                      }

                      (0, _jquery.default)(this).removeClass('project-thumb--current');
                    }
                  });

                  _this.state.image_thumb.eq(lastIndex).addClass('project-thumb--current');

                  lastImage = _this.state.image_thumb.eq(lastIndex);
                  nextId = lastImage.data('id');
                  nextSlug = lastImage.data('slug');

                  _this.setState({
                    currentImage: (0, _jquery.default)('img.currentImage')
                  });

                  _this.setState({
                    currentValue: _this.state.images[lastIndex]
                  });

                  if (!(_this.props.popup == false)) {
                    _context6.next = 14;
                    break;
                  }

                  _this.pushStateProject(id, slug, nextId, nextSlug); // Router.pushRoute(`/anh/${id}-${slug}`,`/anh/${nextId}-${nextSlug}`)


                  _context6.next = 16;
                  break;

                case 14:
                  _context6.next = 16;
                  return _this.pushStateUrl(nextId, nextSlug);

                case 16:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }));

        return function value(_x8, _x9) {
          return _value6.apply(this, arguments);
        };
      }()
    });
    Object.defineProperty(_assertThisInitialized(_this), "backIdea", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value7 = _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee7(id) {
          var startIndex, currentIndex, backImage;
          return _regenerator.default.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  startIndex = 0;
                  currentIndex = 0;

                  _jquery.default.each(_this.state.listIdea, function ($key, $value) {
                    if ($value.id == id) {
                      startIndex = $key;
                    }
                  });

                  if (!(startIndex == 0 && _this.state.backPageUrl != null)) {
                    _context7.next = 7;
                    break;
                  }

                  _this.getFullImage(_this.state.backPageUrl, 'back');

                  _context7.next = 13;
                  break;

                case 7:
                  currentIndex = startIndex - 1;
                  backImage = _this.state.listIdea[currentIndex];
                  _context7.next = 11;
                  return _this.pushStateUrl(backImage.id, backImage.slug);

                case 11:
                  _context7.next = 13;
                  return _this.getValue(backImage.id);

                case 13:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7, this);
        }));

        return function value(_x10) {
          return _value7.apply(this, arguments);
        };
      }()
    });
    Object.defineProperty(_assertThisInitialized(_this), "getFullImage", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value8 = _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee8(url, func) {
          return _regenerator.default.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.t0 = func;
                  _context8.next = _context8.t0 === 'next' ? 3 : _context8.t0 === 'back' ? 6 : 8;
                  break;

                case 3:
                  _context8.next = 5;
                  return _axios.default.get(url).then(function (response) {
                    var data = response.data;

                    _this.setState({
                      listIdea: data.images.data,
                      nextPageUrl: data.images.next_page_url,
                      backPageUrl: data.images.prev_page_url
                    });

                    var currentIndex = 0;
                    var nextImage = _this.state.listIdea[currentIndex];

                    _this.pushStateUrl(nextImage.id, nextImage.slug);

                    _this.getValue(nextImage.id);
                  });

                case 5:
                  return _context8.abrupt("break", 8);

                case 6:
                  _axios.default.get(url).then(function (response) {
                    var data = response.data;

                    _this.setState({
                      listIdea: data.images.data,
                      nextPageUrl: data.images.next_page_url,
                      backPageUrl: data.images.prev_page_url
                    });

                    var currentIndex = _this.state.listIdea.length - 1;
                    var backImage = _this.state.listIdea[currentIndex];

                    _this.pushStateUrl(backImage.id, backImage.slug);

                    _this.getValue(backImage.id);
                  });

                  return _context8.abrupt("break", 8);

                case 8:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8, this);
        }));

        return function value(_x11, _x12) {
          return _value8.apply(this, arguments);
        };
      }()
    });
    _this.state = {
      data: {},
      provider: {},
      project: {},
      image: {},
      images: [],
      tag: [],
      currentImage: {},
      image_thumb: {},
      idActive: null,
      currentValue: null,
      detail: false,
      listIdea: [],
      nextPageUrl: null,
      backPageUrl: null
    };
    return _this;
  }

  _createClass(Image, [{
    key: "getValue",
    value: function () {
      var _getValue = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee9(id) {
        var _this2 = this;

        var data;
        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return _axios.default.get(APIURL + id).then(function (res) {
                  data = res.data;

                  _this2.setState({
                    image: data.image,
                    project: data.project,
                    images: data.list_images,
                    provider: data.provider,
                    tag: data.listTag,
                    currentValue: data.image
                  });
                });

              case 2:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      return function getValue(_x13) {
        return _getValue.apply(this, arguments);
      };
    }()
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      if (this.props.data) {
        this.setState({
          image: this.props.data.image,
          project: this.props.data.project,
          images: this.props.data.images,
          provider: this.props.data.provider,
          tag: this.props.data.tag,
          currentValue: this.props.data.image
        });
      }
    }
  }, {
    key: "pushStateUrl",
    value: function pushStateUrl(id, slug) {
      if (this.props.ideaParams) {
        var params = this.props.ideaParams;

        if (this.props.subParams) {
          _router.default.push("".concat(this.props.currentPath, "?params=").concat(params, "&f=").concat(this.props.subParams, "&photoId=").concat(id, "&slug=").concat(slug), "/anh/".concat(id, "-").concat(slug));
        } else {
          _router.default.push("".concat(this.props.currentPath, "?params=").concat(params, "&photoId=").concat(id, "&slug=").concat(slug), "/anh/".concat(id, "-").concat(slug));
        }
      } else {
        _router.default.push("".concat(this.props.currentPath, "?photoId=").concat(id, "&slug=").concat(slug), "/anh/".concat(id, "-").concat(slug));
      }
    }
  }, {
    key: "pushStateProject",
    value: function pushStateProject(id, slug, nextId, nextSlug) {
      if (this.props.isImage == true && this.props.isImage) {
        _router.default.push("/image?id=".concat(id, "&slug=").concat(slug), "/anh/".concat(nextId, "-").concat(nextSlug));
      } else {
        if (this.props.ideaParams) {
          var params = this.props.ideaParams;

          if (this.props.subParams) {
            _router.default.push("".concat(this.props.currentPath, "?params=").concat(params, "&f=").concat(this.props.subParams, "&photoId=").concat(id, "&slug=").concat(slug), "/anh/".concat(nextId, "-").concat(nextSlug));
          } else {
            _router.default.push("".concat(this.props.currentPath, "?params=").concat(params, "&photoId=").concat(id, "&slug=").concat(slug), "/anh/".concat(nextId, "-").concat(nextSlug));
          }
        } else {
          _router.default.push("".concat(this.props.currentPath, "?photoId=").concat(id, "&id=").concat(this.state.project.id, "&slug=").concat(slug), "/anh/".concat(nextId, "-").concat(nextSlug));
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          id = _props.id,
          slug = _props.slug;
      return _react.default.createElement("div", null, _react.default.createElement("div", {
        id: "image-container"
      }, _react.default.createElement("div", {
        className: "image"
      }, this.state.currentValue && _react.default.createElement("img", {
        className: "image-detail",
        src: this.state.currentValue.path_for_size,
        alt: this.state.currentValue.name
      })), _react.default.createElement("div", {
        className: "lb-navDiv"
      }, _react.default.createElement("a", {
        className: "link next lbNavigation nav-arrow",
        onClick: function onClick(e) {
          return _this3.nextImage(e, id, slug);
        }
      }, _react.default.createElement("div", {
        className: ""
      }, _react.default.createElement("span", {
        className: "fa fa-angle-right"
      }))), _react.default.createElement("a", {
        className: "link back lbNavigation nav-arrow",
        onClick: function onClick(e) {
          return _this3.backImage(e);
        }
      }, _react.default.createElement("div", {
        className: ""
      }, _react.default.createElement("span", {
        className: "fa fa-angle-left"
      })))), _react.default.createElement("div", {
        id: "lbActions",
        className: "d-none d-md-block"
      }, _react.default.createElement("div", {
        id: "lbActionCenter",
        className: "offset-0 offset-md-3 col-12 col-md-6 text-center text-nowrap"
      }, _react.default.createElement("button", {
        className: "btn btn-primary med save text-white mr-3",
        title: "Save To Ideabook",
        compid: "addToIdeabook"
      }, _react.default.createElement("i", {
        className: "fa fa-plus pr-2"
      }), "L\u01B0u \u1EA3nh"), _react.default.createElement("button", {
        className: "btn bg-black-100 med email text-white",
        title: "send email",
        compid: "addToIdeabook"
      }, _react.default.createElement("i", {
        className: "fa fa-envelope-o pr-2"
      }), "G\u1EEDi Email")))), _react.default.createElement(ImageInfo, {
        provider: this.state.provider,
        images: this.state.images,
        image: this.state.image,
        tag: this.state.tag,
        project: this.state.project,
        changeValue: function changeValue(data) {
          return _this3.setState({
            currentValue: data,
            detail: false
          });
        },
        currentValue: this.state.currentValue,
        detail: this.props.detail,
        pushStateProject: function pushStateProject(id, slug, nextId, nextSlug) {
          _this3.pushStateProject(id, slug, nextId, nextSlug);
        }
      }));
    }
  }]);

  return Image;
}(_react.default.Component);

exports.default = Image;

var ImageInfo =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(ImageInfo, _React$PureComponent);

  function ImageInfo(props) {
    _classCallCheck(this, ImageInfo);

    return _possibleConstructorReturn(this, (ImageInfo.__proto__ || Object.getPrototypeOf(ImageInfo)).call(this, props));
  }

  _createClass(ImageInfo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var $readMore = (0, _jquery.default)("#readMoreBtnText").text();
      var $readLess = (0, _jquery.default)("#readLessBtnText").text();
      (0, _jquery.default)("#readMoreBtn").text($readMore);
      (0, _jquery.default)('#readMoreBtn').click(function () {
        var $this = (0, _jquery.default)(this);
        (0, _jquery.default)("#readMoreBtn").text($readMore);

        if ($this.data('expanded') == "yes") {
          $this.data('expanded', "no");
          (0, _jquery.default)("#readMoreBtn").text($readMore);
          (0, _jquery.default)('#readMoreText').animate({
            height: '100px'
          });
        } else {
          $this.data('expanded', "yes");
          (0, _jquery.default)('#readMoreText').css({
            height: 'auto'
          });
          (0, _jquery.default)("#readMoreBtn").text($readLess);
        }
      });
    }
  }, {
    key: "changeImage",
    value: function changeImage(e, value) {
      e.preventDefault();
      var $this = (0, _jquery.default)(e.target).parents('li');
      var thumb = (0, _jquery.default)('.thumb');
      thumb.removeClass('project-thumb--current');
      $this.addClass('project-thumb--current');
      this.props.pushStateProject(this.props.image.id, this.props.image.slug, value.id, value.slug);
      this.props.changeValue(value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _props2 = this.props,
          image = _props2.image,
          images = _props2.images,
          provider = _props2.provider,
          project = _props2.project,
          tag = _props2.tag,
          currentValue = _props2.currentValue,
          detail = _props2.detail;
      return _react.default.createElement("div", {
        className: "lbInfo"
      }, _react.default.createElement("div", null, _react.default.createElement("div", {
        className: "lbInfoTab position-relative d-none d-md-block"
      }, _react.default.createElement("nav", null, _react.default.createElement("div", {
        className: "nav nav-tabs",
        id: "nav-tab",
        role: "tablist"
      }, _react.default.createElement("a", {
        className: "nav-item nav-link active",
        id: "nav-home-tab",
        "data-toggle": "tab",
        href: "#nav-home",
        role: "tab",
        "aria-controls": "nav-home",
        "aria-selected": "true"
      }, _react.default.createElement("i", {
        className: "fa fa-home"
      })), _react.default.createElement("a", {
        className: "nav-item nav-link",
        id: "nav-profile-tab",
        "data-toggle": "tab",
        href: "#nav-profile",
        role: "tab",
        "aria-controls": "nav-profile",
        "aria-selected": "false"
      }, _react.default.createElement("i", {
        className: "fa fa-tag"
      })), _react.default.createElement("a", {
        className: "nav-item nav-link",
        id: "nav-contact-tab",
        "data-toggle": "tab",
        href: "#nav-contact",
        role: "tab",
        "aria-controls": "nav-contact",
        "aria-selected": "false"
      }, _react.default.createElement("i", {
        className: "fa fa-comment"
      })))))), _react.default.createElement("div", {
        className: "content-mask"
      }, _react.default.createElement("div", {
        className: "content-scroll"
      }, _react.default.createElement("div", {
        className: "content-detail"
      }, _react.default.createElement("div", {
        className: "media"
      }, provider && _react.default.createElement("img", {
        src: provider.auth_avatar,
        className: "align-self-start mr-2 rounded-circle detail-user mt-1"
      }), _react.default.createElement("div", {
        className: "media-body"
      }, _react.default.createElement("div", {
        className: "media-content"
      }, provider && _react.default.createElement(_routes.Link, {
        prefetch: true,
        route: "/pro/".concat(provider.id, "-").concat(provider.slug)
      }, _react.default.createElement("a", {
        className: "font-weight-bold font-14 text-black-100"
      }, provider ? provider.name : 'Chưa có tên')), _react.default.createElement("div", {
        className: "star-rating font-14"
      }, _react.default.createElement("span", {
        className: "text-black-100 font-14"
      }, provider && (0, _helpers.rating)(provider.avg_rate), provider ? "(" + provider.total_rate + " người đánh giá" + ")" : "(0 người đánh giá)")))))), _react.default.createElement("div", {
        className: "content-detail border-0"
      }, _react.default.createElement("ol", {
        className: "breadcrumb bg-white pl-0 mb-0 pt-0 mt-0"
      }, _react.default.createElement("li", {
        className: "breadcrumb-item",
        itemScope: true,
        itemType: "http://data-vocabulary.org/Breadcrumb"
      }, _react.default.createElement(_routes.Link, {
        prefetch: true,
        route: 'y-tuong'
      }, _react.default.createElement("a", {
        itemProp: "url"
      }, _react.default.createElement("span", {
        itemProp: "title",
        className: "font-13"
      }, "T\u1EA5t c\u1EA3")))), tag.breadcrumbs && _react.default.createElement("li", {
        className: "breadcrumb-item",
        itemScope: true,
        itemType: "http://data-vocabulary.org/Breadcrumb"
      }, _react.default.createElement(_routes.Link, {
        prefetch: true,
        route: tag.breadcrumbs.uri
      }, _react.default.createElement("a", {
        itemProp: "url"
      }, _react.default.createElement("span", {
        itemProp: "title",
        className: "font-13"
      }, tag.breadcrumbs.name_tag))))), _react.default.createElement("h1", {
        className: "font-16 text-black-100"
      }, currentValue && currentValue.name), _react.default.createElement("div", {
        className: "media-content",
        id: "readMore"
      }, _react.default.createElement("div", {
        className: "readMoreWrapper"
      }, currentValue && _react.default.createElement("p", {
        id: "readMoreText",
        className: "font-14 normalText",
        dangerouslySetInnerHTML: {
          __html: currentValue.descriptions
        }
      }), _react.default.createElement("div", {
        className: "readMoreGradient"
      })), _react.default.createElement("button", {
        id: "readMoreBtn",
        className: "pl-0"
      }), _react.default.createElement("span", {
        id: "readLessBtnText",
        style: {
          'display': 'none'
        }
      }, "R\xFAt g\u1ECDn "), _react.default.createElement("span", {
        id: "readMoreBtnText",
        style: {
          'display': 'none'
        }
      }, "Xem th\xEAm >"))), _react.default.createElement("div", {
        className: "content-detail border-0"
      }, _react.default.createElement("h2", {
        className: "font-14"
      }, "\u1EA2nh trong \"", _react.default.createElement(_routes.Link, {
        prefetch: true,
        route: "/du-an/".concat(project.id, "-").concat(project.slug)
      }, _react.default.createElement("a", {
        className: "text-black-100"
      }, project.name)), "\""), _react.default.createElement("ul", {
        className: "list-unstyled clearfix thumb-grid grid-5"
      }, images && images.map(function (value, index) {
        return _react.default.createElement("li", {
          className: "thumb project-thumb",
          "data-id": value.id,
          ref: "'image'+image.id",
          "data-slug": value.slug,
          key: index
        }, _react.default.createElement("a", {
          className: "link",
          href: "/anh/".concat(value.id, "-").concat(value.slug),
          onClick: function onClick(e) {
            return _this4.changeImage(e, value);
          }
        }, _react.default.createElement("div", {
          className: "img-responsive-wrapper img-responsive-square progressive"
        }, value.small_path && _react.default.createElement("img", {
          src: value.small_path,
          className: "img-respontive",
          id: "image-" + value.id,
          width: "71",
          height: "71"
        }))));
      })), _react.default.createElement("div", {
        className: "pt-0"
      }, tag.breadcrumbs && _react.default.createElement(_routes.Link, {
        prefetch: true,
        route: tag.breadcrumbs.uri
      }, _react.default.createElement("a", {
        href: tag.breadcrumbs.uri,
        className: "mr-2"
      }, _react.default.createElement("span", {
        className: "text-center font-12 font-weight-normal badge badge-pill badge-white border border-primary py-2 px-3 mb-2"
      }, tag.breadcrumbs.name_tag))), tag.other && tag.other.map(function (value, index) {
        return value.is_seo == 1 ? _react.default.createElement(_routes.Link, {
          prefetch: true,
          route: value.uri,
          key: index
        }, _react.default.createElement("a", {
          href: value.uri,
          className: "mr-2",
          key: index
        }, _react.default.createElement("span", {
          className: "text-center font-12 font-weight-normal badge badge-pill badge-white border border-primary py-2 px-3 mb-2"
        }, value.name_tag))) : '';
      }))), _react.default.createElement("div", {
        className: "content-detail border-0"
      }, _react.default.createElement("div", {
        className: "header row m-0"
      }, _react.default.createElement("h2", {
        className: "font-14 text-black-100"
      }, "H\u1ECFi \u0111\xE1p v\u1EC1 h\xECnh \u1EA3nh"), _react.default.createElement("span", {
        className: "col-xs-12 col-md-12 px-0"
      }, _react.default.createElement("button", {
        id: "askQuestionButton",
        className: "btn border-primary btn-block text-primary font-13",
        compid: "lbAsk"
      }, "\u0110\u1EB7t c\xE2u h\u1ECFi c\u1EE7a b\u1EA1n")))))));
    }
  }]);

  return ImageInfo;
}(_react.default.PureComponent);

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _routes = __webpack_require__(1);

var _layout = _interopRequireDefault(__webpack_require__(8));

var _helpers = __webpack_require__(4);

var _classnames = _interopRequireDefault(__webpack_require__(20));

var _router = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var ProDetail =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProDetail, _React$Component);

  function ProDetail(props) {
    var _this;

    _classCallCheck(this, ProDetail);

    _this = _possibleConstructorReturn(this, (ProDetail.__proto__ || Object.getPrototypeOf(ProDetail)).call(this, props));
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

  _createClass(ProDetail, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          provider_id = _props.provider_id,
          provider_slug = _props.provider_slug,
          router = _props.router;
      var pathname = router.pathname;
      var itemStar = Math.ceil(this.props.data.provider.avg_rate) >= 1 ? "itemScope itemType='http://schema.org/AggregateRating'" : '';
      var itemStarProp = Math.ceil(this.props.data.provider.avg_rate) >= 1 ? "<meta  itemProp=\"ratingValue\" content=".concat(this.props.data.provider.avg_rate, ">") : null;
      return _react.default.createElement(_layout.default, _extends({}, this.props, {
        navmenu: false,
        container: false
      }), _react.default.createElement("div", {
        className: "container-fluid px-4 bg-gray provider-main"
      }, _react.default.createElement("div", {
        className: "bg-white",
        itemScope: true,
        itemType: "http://schema.org/localbusiness"
      }, _react.default.createElement("div", {
        className: "border border-right-0 border-left-0 border-gray provider-details"
      }, _react.default.createElement("div", {
        className: "banner position-relative p-0"
      }, _react.default.createElement("img", {
        src: this.props.data.cover && this.props.data.cover,
        className: "w-100"
      }), _react.default.createElement("div", {
        className: "position-absolute gradient-animate w-100"
      })), _react.default.createElement("div", {
        className: "container position-relative"
      }, _react.default.createElement("div", {
        className: "position-absolute provider-info"
      }, _react.default.createElement(_routes.Link, {
        route: "pro.detail",
        params: {
          id: provider_id,
          slug: "".concat(provider_slug)
        }
      }, _react.default.createElement("a", {
        className: "provider-name text-white font-weight-bold"
      }, (0, _helpers.activePath)(pathname, "/pro", {
        strict: true
      }) ? _react.default.createElement("h1", {
        className: "font-22 mb-1",
        itemProp: "name"
      }, this.props.data.provider && this.props.data.provider.name) : _react.default.createElement("p", {
        className: "font-22 mb-1",
        itemProp: "name"
      }, this.props.data.provider && this.props.data.provider.name))), _react.default.createElement("div", {
        className: "star-rating " + itemStar
      }, this.props.data.provider && (0, _helpers.rating)(this.props.data.provider.avg_rate), itemStarProp, _react.default.createElement("span", {
        className: "text-yellow font-weight-bold"
      }, " 0(0) \u0111\xE1nh gi\xE1) "), _react.default.createElement("a", {
        className: "text-gray-200"
      }, _react.default.createElement("span", null, " \u0110\xE1nh gi\xE1 chi ti\u1EBFt >")))), _react.default.createElement("div", {
        className: "row position-relative justify-content-end"
      }, _react.default.createElement("div", {
        className: "position-absolute provider-avatar rounded-circle"
      }, _react.default.createElement("img", {
        itemProp: "image",
        src: this.props.data.avatar,
        className: "img-thumbnail rounded-circle h-100",
        alt: ""
      })), _react.default.createElement("div", {
        className: "col-md-9 col-lg-9 provider-nav"
      }, _react.default.createElement("ul", {
        className: "nav nav-tabs border-0",
        id: "myTab",
        role: "tablist"
      }, _react.default.createElement("li", {
        className: (0, _classnames.default)("nav-item position-relative", {
          active: (0, _helpers.activePath)(pathname, "/pro", {
            strict: true
          })
        })
      }, _react.default.createElement(_routes.Link, {
        prefetch: true,
        route: "pro.detail",
        params: {
          id: provider_id,
          slug: "".concat(provider_slug)
        }
      }, _react.default.createElement("a", {
        className: "nav-link border-0 font-14 font-weight-bold"
      }, "T\u1ED5ng quan"))), _react.default.createElement("li", {
        className: (0, _classnames.default)("nav-item position-relative", {
          active: (0, _helpers.activePath)(pathname, ["/pro/project", '/project'], {
            strict: true
          })
        })
      }, _react.default.createElement(_routes.Link, {
        prefetch: true,
        route: "pro.project",
        params: {
          id: provider_id,
          slug: "".concat(provider_slug)
        }
      }, _react.default.createElement("a", {
        className: "nav-link border-0 font-14 font-weight-bold"
      }, "D\u1EF1 \xE1n"))), _react.default.createElement("li", {
        className: (0, _classnames.default)("nav-item position-relative", {
          active: (0, _helpers.activePath)(pathname, "/pro/review", {
            strict: true
          })
        })
      }, _react.default.createElement(_routes.Link, {
        prefetch: true,
        route: "pro.review",
        params: {
          id: provider_id,
          slug: "".concat(provider_slug)
        }
      }, _react.default.createElement("a", {
        className: "nav-link border-0 font-14 font-weight-bold"
      }, "Nh\u1EADn x\xE9t"))), _react.default.createElement("li", {
        className: "nav-item mx-1 position-relative"
      }, _react.default.createElement("a", {
        className: "nav-link border-0 font-14 font-weight-bold",
        href: "#"
      }, "S\u1ED5 tay \xFD t\u01B0\u1EDFng")), _react.default.createElement("li", {
        className: "nav-item mx-1 position-relative"
      }, _react.default.createElement("a", {
        className: "nav-link border-0 font-14 font-weight-bold",
        href: "#"
      }, "H\u1ECFi \u0111\xE1p")), _react.default.createElement("li", {
        className: "nav-item mx-1 position-relative"
      }, _react.default.createElement("a", {
        className: "nav-link border-0 font-14 font-weight-bold",
        href: "#"
      }, "Ho\u1EA1t \u0111\u1ED9ng"))))))), _react.default.createElement("div", {
        className: "w-100 py-3 provider"
      }, _react.default.createElement(_react.default.Fragment, null, this.props.children)))));
    }
  }]);

  return ProDetail;
}(_react.default.Component);

var _default = (0, _router.withRouter)(ProDetail);

exports.default = _default;

/***/ }),
/* 27 */,
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(__webpack_require__(7));

var _regenerator = _interopRequireDefault(__webpack_require__(3));

var _react = _interopRequireDefault(__webpack_require__(0));

var _imageDetail = _interopRequireDefault(__webpack_require__(24));

var _layout = _interopRequireDefault(__webpack_require__(8));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "dismiss",
    value: function dismiss(e) {
      e.preventDefault();

      if (this._lbClose === e.target) {
        e.preventDefault();

        if (this.props.onDismiss) {
          this.props.onDismiss();
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _props = this.props,
          id = _props.id,
          slug = _props.slug;
      return _react.default.createElement("div", {
        id: "lightbox",
        className: "modal Ifade show",
        tabIndex: "-1",
        role: "dialog",
        "aria-labelledby": "myLargeModalLabel",
        "aria-hidden": "true"
      }, _react.default.createElement("div", {
        id: "lbMainControls",
        className: "jsx-3842739500" + " " + "trackMe"
      }, _react.default.createElement("div", {
        className: "jsx-3842739500"
      }, _react.default.createElement("a", {
        ref: function ref(el) {
          return _this._lbClose = el;
        },
        href: "",
        onClick: function onClick(e) {
          return _this.dismiss(e);
        },
        className: "jsx-3842739500" + " " + "lbCloseButton lbClose"
      })), _react.default.createElement(_style.default, {
        styleId: "3842739500",
        css: ["#lightbox{overflow-x:scroll !important;}", "html{height:100%;overflow:hidden;}"]
      })), _react.default.createElement(_imageDetail.default, _extends({}, this.props, {
        id: this.props.id,
        slug: slug
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_ref) {
        var query;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                return _context.abrupt("return", {
                  id: query.id,
                  slug: query.slug
                });

              case 2:
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
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(77);


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _regenerator = _interopRequireDefault(__webpack_require__(3));

var _routes = __webpack_require__(1);

var _proDetail = _interopRequireDefault(__webpack_require__(26));

var _imageModal = _interopRequireDefault(__webpack_require__(28));

__webpack_require__(9);

var _helpers = __webpack_require__(4);

var _index = _interopRequireDefault(__webpack_require__(78));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var APIURL = "https://api.9houz.com/" + "api/";
var APIPROJECT = APIURL + 'project/';
var APIPRO = APIURL + 'provider/'; // import Router from 'next/router';

var Project =
/*#__PURE__*/
function (_Component) {
  _inherits(Project, _Component);

  _createClass(Project, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_ref) {
        var query, res, data, resPro, dataPro;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                _context.next = 3;
                return fetch(APIPROJECT + query.id);

              case 3:
                res = _context.sent;
                _context.next = 6;
                return res.json();

              case 6:
                data = _context.sent;
                _context.next = 9;
                return fetch(APIPRO + data.project.user_id);

              case 9:
                resPro = _context.sent;
                _context.next = 12;
                return resPro.json();

              case 12:
                dataPro = _context.sent;
                return _context.abrupt("return", {
                  id: query.id,
                  data: dataPro,
                  provider: dataPro.provider,
                  project: data.project,
                  images: data.images.data,
                  slug: query.slug,
                  title: data.seo.title,
                  des: data.seo.des,
                  canonical: data.seo.canonical,
                  robots: data.seo.robots,
                  og_url: data.seo.url,
                  url_images: data.seo.url_image,
                  headerProjects: dataPro.headerProjects,
                  headerCategories: dataPro.headerCategories,
                  dataBase: dataPro.dataBase
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

  function Project(props) {
    var _this;

    _classCallCheck(this, Project);

    _this = _possibleConstructorReturn(this, (Project.__proto__ || Object.getPrototypeOf(Project)).call(this, props));
    _this.state = {
      data: {},
      provider: {},
      project: {},
      images: []
    };
    return _this;
  }

  _createClass(Project, [{
    key: "showPhoto",
    value: function showPhoto(e, id, slug) {
      e.preventDefault();

      _routes.Router.push("/project?id=".concat(this.props.id, "&photoId=").concat(id, "&slug=").concat(slug), "/anh/".concat(id, "-").concat(slug));
    }
  }, {
    key: "dismissModal",
    value: function dismissModal(id, slug) {
      _routes.Router.pushRoute('project.detail', {
        id: id,
        slug: "".concat(slug)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          url = _props.url,
          provider = _props.provider,
          data = _props.data,
          project = _props.project,
          images = _props.images;
      return _react.default.createElement(_proDetail.default, _extends({
        provider_id: provider.id,
        provider_slug: provider.slug,
        data: data
      }, this.props, {
        css: _index.default
      }), url.query.photoId && _react.default.createElement(_imageModal.default, {
        id: url.query.photoId,
        slug: url.query.slug,
        detail: false,
        popup: false,
        currentPath: url.pathname,
        onDismiss: function onDismiss() {
          return _this2.dismissModal(url.query.id, url.query.slug);
        }
      }), _react.default.createElement("div", {
        className: "mt-3 project-detail",
        id: "cat"
      }, _react.default.createElement("div", {
        className: "row m-0"
      }, _react.default.createElement("div", {
        className: "offset-md-1 col-12 col-md-10 col-lg-10 offset-md-1"
      }, _react.default.createElement("div", {
        className: "px-4 bg-white idea-content"
      }, _react.default.createElement("div", {
        className: "about"
      }, _react.default.createElement("h1", {
        className: "font-25 font-weight-normal"
      }, project.name), _react.default.createElement("p", {
        className: "font-14 font-weight-normal my-3",
        dangerouslySetInnerHTML: {
          __html: project.descriptions
        }
      }), _react.default.createElement("p", {
        className: "font-14 font-weight-normal"
      }, _react.default.createElement("strong", null, "\u0110\u1ECBa ch\u1EC9"), ": " + project.address), project.more_infos && (0, _helpers.mapObject)(project.more_infos, function (index, value) {
        if (value != '') return _react.default.createElement("p", {
          className: "font-14 font-weight-normal",
          key: index
        }, _react.default.createElement("strong", null, (0, _helpers.ucfirst)(index)), ": " + value);
      }), _react.default.createElement("p", {
        className: "font-14 font-weight-normal"
      })), _react.default.createElement("div", {
        className: "about bg-white py-3"
      }, _react.default.createElement("ul", {
        className: "list-unstyled"
      }, images && images.map(function (value, index) {
        return _react.default.createElement("li", {
          className: "media border border-bottom-0 border-right-0 border-left-0 border-gray py-3 position-relative container w-100 mb-2 px-0",
          key: index
        }, _react.default.createElement("div", {
          className: "row w-100 m-0"
        }, _react.default.createElement("div", {
          className: "px-0"
        }, _react.default.createElement("div", {
          className: "project-image position-relative"
        }, value.status == 1 ? _react.default.createElement(_routes.Link, {
          route: "image",
          params: {
            id: value.id,
            slug: "".concat(value.slug)
          }
        }, _react.default.createElement("a", {
          className: "photoLink",
          onClick: function onClick(e) {
            return _this2.showPhoto(e, value.id, value.slug);
          }
        }, _react.default.createElement("img", {
          src: value.large_path,
          alt: value.name
        }))) : _react.default.createElement("a", {
          href: "javascript:void(0)",
          className: "photoLink",
          rel: "nofollow"
        }, _react.default.createElement("img", {
          src: value.large_path,
          alt: value.name
        })), _react.default.createElement("div", {
          className: "project-action"
        }, _react.default.createElement("button", {
          className: "btn btn-primary med save text-white",
          title: "Save To Ideabook",
          compid: "addToIdeabook"
        }, _react.default.createElement("i", {
          className: "fa fa-plus pr-2"
        }), "L\u01B0u \u1EA3nh")))), _react.default.createElement("div", {
          className: "project-mobile-action d-block d-md-none w-100 my-2 text-center"
        }, _react.default.createElement("button", {
          className: "btn btn-primary med save text-white",
          title: "Save To Ideabook",
          compid: "addToIdeabook"
        }, _react.default.createElement("i", {
          className: "fa fa-plus pr-2"
        }), "L\u01B0u \u1EA3nh")), _react.default.createElement("div", {
          className: "media-body pl-3 position-relative"
        }, _react.default.createElement("div", {
          className: "media-header"
        }, _react.default.createElement("div", {
          className: "media-title"
        }, _react.default.createElement("h2", {
          className: "font-22 text-black-100"
        }, value.status == 1 ? _react.default.createElement(_routes.Link, {
          prefetch: true,
          route: "image",
          params: {
            id: value.id,
            slug: "".concat(value.slug)
          }
        }, _react.default.createElement("a", {
          className: "mt-0 mb-1 font-22 text-black-100"
        }, value.name)) : _react.default.createElement("a", {
          rel: "nofollow",
          href: "javascript:void(0)",
          className: "mt-0 mb-1 font-22 text-black-100"
        }, value.name)))), _react.default.createElement("div", {
          className: "media-content mt-1"
        }, _react.default.createElement("span", {
          className: "font-15 text-gray",
          dangerouslySetInnerHTML: {
            __html: value.descriptions
          }
        })))));
      }))))))));
    }
  }]);

  return Project;
}(_react.Component);

exports.default = Project;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = "*,:after,:before{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-ms-overflow-style:scrollbar}@-ms-viewport{width:device-width}header,nav{display:block}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:1rem;font-weight:400;line-height:1.5;color:#333;text-align:left;background-color:#fff}h1,h2{margin-top:0;margin-bottom:.5rem}p{margin-top:0;margin-bottom:1rem}ul{margin-bottom:1rem}ul{margin-top:0}ul ul{margin-bottom:0}strong{font-weight:bolder}a{color:#b953a4;text-decoration:none;background-color:transparent;-webkit-text-decoration-skip:objects}a:not([href]):not([tabindex]){color:inherit;text-decoration:none}img{border-style:none}button{border-radius:0}button,input{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button{text-transform:none}button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}h1,h2{margin-bottom:.5rem;font-family:inherit;font-weight:500;line-height:1.2;color:inherit}h1{font-size:2.5rem}h2{font-size:2rem}.list-unstyled{padding-left:0;list-style:none}.img-thumbnail{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid #dee2e6;border-radius:.25rem}.container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:576px){.container{max-width:540px}}@media (min-width:768px){.container{max-width:720px}}@media (min-width:992px){.container{max-width:960px}}@media (min-width:1200px){.container{max-width:1140px}}.container-fluid{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.row{display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.col-12,.col-lg-9,.col-lg-10,.col-md-9,.col-md-10,.col-md-12{position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px}.col-12{flex:0 0 100%;max-width:100%}@media (min-width:768px){.col-md-9{flex:0 0 75%;max-width:75%}.col-md-10{flex:0 0 83.33333%;max-width:83.33333%}.col-md-12{flex:0 0 100%;max-width:100%}.offset-md-1{margin-left:8.33333%}}@media (min-width:992px){.col-lg-9{flex:0 0 75%;max-width:75%}.col-lg-10{flex:0 0 83.33333%;max-width:83.33333%}}.form-control{display:block;width:100%;padding:.375rem .75rem;font-size:1rem;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem}.form-control::-ms-expand{background-color:transparent;border:0}.btn{display:inline-block;font-weight:400;text-align:center;white-space:nowrap;vertical-align:middle;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem}.btn-primary{color:#fff;background-color:#b953a4;border-color:#b953a4}.collapse:not(.show){display:none}.nav{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:.5rem 1rem}.nav-tabs{border-bottom:1px solid #dee2e6}.nav-tabs .nav-item{margin-bottom:-1px}.nav-tabs .nav-link{border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem}.navbar{position:relative;padding:.5rem 1rem}.navbar{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between}.navbar-brand{display:inline-block;padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;line-height:inherit;white-space:nowrap}.navbar-nav{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-collapse{flex-basis:100%;flex-grow:1;align-items:center}.navbar-toggler{padding:.25rem .75rem;font-size:1.25rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:.25rem}@media (min-width:768px){.navbar-expand-md{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-md .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}}.navbar-light .navbar-brand{color:hsla(0,0%,7%,.9)}.navbar-light .navbar-nav .nav-link{color:hsla(0,0%,7%,.5)}.navbar-light .navbar-toggler{color:hsla(0,0%,7%,.5);border-color:hsla(0,0%,7%,.1)}.badge-pill{padding-right:.6em;padding-left:.6em;border-radius:10rem}.media{display:flex;align-items:flex-start}.media-body{flex:1}.bg-primary{background-color:#b953a4!important}.bg-white{background-color:#fff!important}.border{border:1px solid #dee2e6!important}.border-0{border:0!important}.border-right-0{border-right:0!important}.border-bottom-0{border-bottom:0!important}.border-left-0{border-left:0!important}.rounded-circle{border-radius:50%!important}.d-none{display:none!important}.d-block{display:block!important}.d-flex{display:flex!important}@media (min-width:576px){.d-sm-none{display:none!important}}@media (min-width:768px){.d-md-none{display:none!important}.d-md-block{display:block!important}}.justify-content-start{justify-content:flex-start!important}.justify-content-end{justify-content:flex-end!important}.position-relative{position:relative!important}.position-absolute{position:absolute!important}.w-100{width:100%!important}.h-100{height:100%!important}.m-0{margin:0!important}.mt-0{margin-top:0!important}.mt-1{margin-top:.25rem!important}.mx-1{margin-right:.25rem!important}.mb-1{margin-bottom:.25rem!important}.mx-1{margin-left:.25rem!important}.my-2{margin-top:.5rem!important}.mb-2,.my-2{margin-bottom:.5rem!important}.mt-3,.my-3{margin-top:1rem!important}.my-3{margin-bottom:1rem!important}.p-0{padding:0!important}.py-0{padding-top:0!important}.px-0{padding-right:0!important}.py-0{padding-bottom:0!important}.px-0{padding-left:0!important}.py-1{padding-top:.25rem!important}.px-1{padding-right:.25rem!important}.py-1{padding-bottom:.25rem!important}.px-1{padding-left:.25rem!important}.pr-2,.px-2{padding-right:.5rem!important}.px-2{padding-left:.5rem!important}.py-3{padding-top:1rem!important}.px-3{padding-right:1rem!important}.py-3{padding-bottom:1rem!important}.pl-3,.px-3{padding-left:1rem!important}.px-4{padding-right:1.5rem!important}.px-4{padding-left:1.5rem!important}.my-auto{margin-top:auto!important}.mr-auto{margin-right:auto!important}.my-auto{margin-bottom:auto!important}.text-left{text-align:left!important}.text-center{text-align:center!important}@media (min-width:768px){.text-md-center{text-align:center!important}}.text-uppercase{text-transform:uppercase!important}.font-weight-normal{font-weight:400!important}.font-weight-bold{font-weight:700!important}.text-white{color:#fff!important}.text-primary{color:#b953a4!important}.text-dark{color:#343a40!important}@font-face{font-family:FontAwesome;src:url(\"/static/fonts/fontawesome-webfont.eot?v=4.7.0\");src:url(\"/static/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0\") format(\"embedded-opentype\"),url(\"/static/fonts/fontawesome-webfont.woff2?v=4.7.0\") format(\"woff2\"),url(\"/static/fonts/fontawesome-webfont.woff?v=4.7.0\") format(\"woff\"),url(\"/static/fonts/fontawesome-webfont.ttf?v=4.7.0\") format(\"truetype\"),url(\"/static/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular\") format(\"svg\");font-weight:400;font-style:normal}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-2x{font-size:2em}.fa-search:before{content:\"\\F002\"}.fa-star:before{content:\"\\F005\"}.fa-pencil-square-o:before{content:\"\\F044\"}.fa-chevron-right:before{content:\"\\F054\"}.fa-info-circle:before{content:\"\\F05A\"}.fa-plus:before{content:\"\\F067\"}.fa-rss:before{content:\"\\F09E\"}.fa-briefcase:before{content:\"\\F0B1\"}.fa-bars:before{content:\"\\F0C9\"}.fa-lightbulb-o:before{content:\"\\F0EB\"}.fa-graduation-cap:before{content:\"\\F19D\"}.fa-user-circle-o:before{content:\"\\F2BE\"}body,h1{font-family:helvetica-ttf,sans-serif!important}input{outline:none;border:none}input::-webkit-input-placeholder{color:#adadad}input:-moz-placeholder,input::-moz-placeholder{color:#adadad}input:-ms-input-placeholder{color:#adadad}button{outline:none!important;border:none;background:transparent}.font-14{font-size:14px!important}.font-15{font-size:15px!important}.font-22{font-size:22px!important}.font-25{font-size:25px!important}.text-gray{color:#666!important}.text-black-100{color:#333!important}.text-gray-200{color:#999!important}.bg-indigo{background-color:#664cc7!important}.bg-yellow-green{background-color:#bdc74c!important}.bg-red-100{background-color:#c74c4c!important}.bg-teal{background-color:#47be84!important}.bg-cyan{background-color:#4cb1c7!important}.bg-gray{background-color:#ddd!important}.text-yellow{color:#fc0!important}.bg-blue-200{background-color:#4c91c7!important}.navbar-9houzz{color:#666!important;height:60px}.header-search .input-radius{border:1px solid!important;border-radius:4em/5em}.header-search{position:relative;width:550px;margin-left:15px;display:block}.header-search .input-radius{width:100%;height:40px;border:1px solid #ddd!important}.header-search .icon-search{position:absolute;right:10px;top:22%;color:#b953a4;z-index:10;font-weight:lighter}.header-left{padding:0!important}.StoreNavigation-overlay{position:fixed;top:0;left:-999px;width:100%;height:100%;-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";background:rgba(0,0,0,.8);overflow:hidden;z-index:1111;opacity:0;display:none}@media (min-width:1300px){.container{max-width:1265px}}@media (min-width:768px) and (max-width:992px){.container{max-width:868px}}@media (min-width:768px) and (max-width:991.98px){.header-search{margin-left:50px!important}}@media (min-width:576px) and (max-width:767.98px){.navbar-9houzz{max-width:100%}header{height:60px!important}}@media (max-width:575.98px){header{height:60px!important}}.living-room{background-image:url(\"/static/images/outdoor-room.png\")!important}.kitchen{background-image:url(\"/static/images/kitchen.png\")!important}.bedroom{background-image:url(\"/static/images/bedroom.png\")!important}.bathroom{background-image:url(\"/static/images/bathroom.png\")!important}.workroom{background-image:url(\"/static/images/workroom.png\")!important}.baby-room{background-image:url(\"/static/images/babyroom.png\")!important}.outdoor-room{background-image:url(\"/static/images/outdoor-room.png\")!important}header{position:relative;height:105px;background:#fff;z-index:1000000}.nav-9houzz{background-color:#b953a4!important;color:#fff;position:relative;margin-left:0!important;margin-right:0!important}.nav-9houzz .navbar-nav{display:block;padding-left:40px!important;padding-right:40px!important}.nav-9houzz .header-menu{padding:0!important}.nav-9houzz .header-menu .nav-item:first-child{margin-left:7%!important}.nav-9houzz .header-menu .nav-item{display:block;padding-left:40px!important;padding-right:40px!important}.nav-9houzz .header-menu .nav-item .nav-link{padding:.5rem!important;font-size:14px!important;color:#fff!important}.nav-9houzz .header-menu .nav-item .nav-prof{position:relative!important}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child{top:4px!important;left:-40px!important;width:270px!important;z-index:11111111111}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child a{color:#666!important}.nav-9houzz .header-menu .nav-item .nav-child{position:absolute;display:none!important;top:100%;left:0;background:#fff;list-style:none;border:1px solid #ddd;border-top:none;padding:10px 14px 20px;z-index:11111111111}.nav-9houzz .header-menu .nav-item .nav-child .nav-idea{width:18%;height:112px;margin:10px;float:left;position:relative;background-position:50%;background-repeat:no-repeat;vertical-align:middle;line-height:112px;background-size:cover!important;color:#fff!important}@media (min-width:768px){.nav-idea{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}}@media (max-width:767.98px){.nav-9houzz{padding-left:0!important;padding-right:0!important}.nav-9houzz .navbar>.navbar-collapse{padding-bottom:20px!important}.nav-9houzz .header-menu,.nav-9houzz .header-menu .nav-item{padding-left:10px!important;padding-right:10px!important}.nav-9houzz .header-menu .nav-child,.nav-9houzz .header-menu .nav-item .nav-child{position:relative!important;top:0!important;display:block!important;overflow:hidden!important}.nav-9houzz .header-menu .nav-item .navbar-toggler,.nav-9houzz .header-menu .navbar-toggler{padding:.25rem!important}.nav-9houzz .header-menu .nav-item .navbar-toggler span,.nav-9houzz .header-menu .navbar-toggler span{font-size:13px!important}.nav-idea{width:90%!important;text-align:center;padding:57px 0;margin:12px auto;float:none;line-height:0!important}.navbar-toggler{border:none!important}.navbar-toggler span{font-size:18px!important;margin-top:3px!important}.nav-9houzz .header-menu .nav-item .nav-child{background:none!important;border:none!important}.nav-9houzz .header-menu .nav-item .nav-child .nav-idea{width:18%;height:0!important;float:left;line-height:112px;text-align:left;padding:0!important;color:#fff!important;margin-bottom:25px}.nav-9houzz .header-menu .nav-item .nav-child .nav-idea{text-transform:none!important;font-size:16px!important;font-weight:400!important}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child{padding-top:0!important;top:0!important;left:0!important;width:100%;-webkit-box-shadow:none;box-shadow:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:11111111111}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child a{color:#fff!important;font-size:16px!important}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child .nav-service{padding-left:0!important;line-height:30px!important}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child .text-left{padding-left:0!important}.nav-9houzz .header-menu .nav-item:first-child{margin-left:0!important}}.banner{height:361px}.gradient-animate{height:100px;background:-webkit-linear-gradient(transparent,#000);background:-o-linear-gradient(transparent,#000);background:linear-gradient(transparent,#000);bottom:0;z-index:0}.provider-nav{height:50px;line-height:34px}.provider-details .banner{max-height:290px;height:290px;position:relative;overflow:hidden}.provider-avatar{width:165px;height:165px;top:-127px;border:1px solid #d3d3d3;left:20px;background:#fff}.provider-info{bottom:4rem;left:13rem;z-index:1}.provider-details .nav-link{color:#666!important;padding:.5rem 1.5rem!important}.provider-details .nav-tabs .active{color:#b953a4!important}.provider-details .nav-tabs .active:after{content:\"\";position:absolute;bottom:-1px;left:12%;background:#b953a5;height:3px;width:75%}.provider-details .nav-tabs .active a{font-weight:700!important;color:#b953a4!important}span{font-size:13px!important}.about .media-content span{font-size:14px!important;line-height:1.3!important}.project-image .project-action button{display:none}@media (max-width:575.98px){.provider-avatar{width:80px!important;height:80px!important;top:-105px!important}.provider-details .banner{height:185px!important}.banner img{height:100%!important}.provider-info{bottom:4rem;left:7rem;z-index:1}.provider-info p{font-size:18px!important;font-weight:700!important}#myTab.nav{overflow-x:scroll;overflow-y:hidden;white-space:nowrap;display:block!important}#myTab.nav li{display:inline-block;color:#fff;text-align:center}.provider-details .nav-tabs .active:after{content:\"\";position:absolute;bottom:-1px;left:12%;background:#fff;height:3px;width:75%}.provider-nav{height:45px!important;line-height:34px}.provider-main{padding-left:0!important;padding-right:0!important;margin-right:0!important;margin-left:0!important}.project-detail{margin-top:0!important}.project-detail h1{font-size:18px!important}.project-detail p{font-size:15px!important}.project-detail .idea-content{padding-left:0!important;padding-right:0!important}.project-detail .project-image{margin-top:1rem!important;max-width:100%!important}.project-detail .project-image img{width:100%!important}.project-detail li{margin-bottom:1rem!important}.project-detail .media-body{padding-left:0!important;margin-top:.5rem!important}.project-detail .media-body h2{font-size:18px!important;margin-bottom:0!important}.project-detail .media-body h2 a{font-size:18px!important}.project-detail .about .media-content span{font-size:15px!important}.project-mobile-action .btn.med{margin:0 auto;height:35px!important;width:100%;font-size:15px!important;line-height:26px!important;padding:0 85px!important}}.idea-content .about{line-height:9px!important}.btn.med{height:40px;font-size:16px;line-height:26px;padding:6px 16px 8px}@media (max-width:767.98px){.media{padding:0!important}.media .media-body{padding-left:2rem}}.fa-star{color:#fc0}.disable{color:#ddd!important}@media (max-width:767.98px){.media-body{margin-top:1rem}}.idea-content h2{font-weight:600!important;font-size:15px!important;line-height:20px!important}img{vertical-align:middle}@media (max-width:767.98px){.btn.med{height:30px!important;font-size:13px!important;line-height:26px!important;padding:0 9px!important}}.idea-content .about{line-height: 9px !important;}.idea-content .about p{line-height: 1.1rem !important;}";

/***/ })
/******/ ]);