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
/******/ 	return __webpack_require__(__webpack_require__.s = 68);
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

module.exports = require("next/head");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("jquery");

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

var _head = _interopRequireDefault(__webpack_require__(5));

var _routes = __webpack_require__(1);

var _reactstrap = __webpack_require__(10);

var _universalCookie = _interopRequireDefault(__webpack_require__(15));

var _package = _interopRequireDefault(__webpack_require__(16));

var _nav = _interopRequireDefault(__webpack_require__(17));

var _footer = _interopRequireDefault(__webpack_require__(19));

var _style = _interopRequireDefault(__webpack_require__(20));

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
        src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
      }), _react.default.createElement("script", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
      }), _react.default.createElement("script", {
        src: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
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

module.exports = require("reactstrap");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("classnames");

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

var _head = _interopRequireDefault(__webpack_require__(5));

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

var _jquery = _interopRequireDefault(__webpack_require__(6));

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
      }, dataBase && dataBase.map(function (value, index) {
        return _react.default.createElement("li", {
          key: index
        }, _react.default.createElement(_routes.Link, {
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
        }, _react.default.createElement(_routes.Link, {
          route: value.uri
        }, _react.default.createElement("a", {
          href: "#",
          className: "text-dark font-14"
        }, value.name_tag)));
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
        }, _react.default.createElement(_routes.Link, {
          route: value.uri
        }, _react.default.createElement("a", {
          href: "#",
          className: "text-dark font-14"
        }, value.name_tag)));
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
        route: "/about/gioi-thieu"
      }, _react.default.createElement("a", {
        target: "_blank",
        title: "Gi\u1EDBi thi\u1EC7u"
      }, "Gi\u1EDBi thi\u1EC7u"))), _react.default.createElement("li", null, _react.default.createElement("a", {
        target: "_blank",
        title: "Li\xEAn h\u1EC7",
        rel: "nofollow"
      }, "Li\xEAn h\u1EC7")), _react.default.createElement("li", null, _react.default.createElement(_routes.Link, {
        route: "/about/chinh-sach-bao-mat"
      }, _react.default.createElement("a", {
        href: "#",
        target: "_blank",
        title: "Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt"
      }, "Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt"))), _react.default.createElement("li", null, _react.default.createElement(_routes.Link, {
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
        route: "/about/chinh-sach-bao-mat"
      }, _react.default.createElement("a", {
        href: "#",
        target: "_blank",
        title: "Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt"
      }, "Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt")), _react.default.createElement(_routes.Link, {
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



/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
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

var _classnames = _interopRequireDefault(__webpack_require__(11));

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
/* 28 */,
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
/* 39 */
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
        className: "rounded-2"
      }, _react.default.createElement(_routes.Link, {
        route: "project.detail",
        params: {
          id: project.id,
          slug: "".concat(project.slug)
        }
      }, _react.default.createElement("a", {
        className: "nav-link border-0 font-14 font-weight-bold"
      }, _react.default.createElement("div", {
        className: "rounded-2 border provider-project"
      }, _react.default.createElement("div", {
        className: "row project position-relative mx-auto"
      }, _react.default.createElement("div", {
        className: "col-md-7 col-7 position-relative p-0"
      }, _react.default.createElement("div", {
        className: "position-absolute h-100 w-100 bg-secondary first-image"
      }, _react.default.createElement("img", {
        src: this.props.project.avatar[0],
        alt: "",
        className: "first-image w-100 h-100"
      }))), _react.default.createElement("div", {
        className: "col-md-5 col-5 position-relative p-0"
      }, _react.default.createElement("div", {
        className: "position-absolute h-48 ml-1 mb-1 bg-secondary second-image right-avatar"
      }, _react.default.createElement("img", {
        src: this.props.project.avatar[1],
        alt: "",
        className: "w-100 h-100"
      })), _react.default.createElement("div", {
        className: "position-absolute h-50 ml-1 third-image bg-secondary right-avatar"
      }, _react.default.createElement("div", {
        className: "h-100 project-more text-center position-absolute w-100"
      }, _react.default.createElement("p", {
        className: "font-weight-light text-white font-30"
      }, project.count_image ? "+ " + project.count_image : '')), _react.default.createElement("img", {
        src: this.props.project.avatar[2],
        className: "w-100 h-100"
      })))), _react.default.createElement("div", {
        className: "mt-3 mb-2 px-2 project-des"
      }, _react.default.createElement("h2", {
        className: "font-weight-bold text-black font-15"
      }, project.name), this.props.project.address && _react.default.createElement("div", {
        className: "font-13 text-secondary"
      }, _react.default.createElement("span", {
        className: "fa fa-map-marker mr-1 text-primary"
      }), this.props.project.address))))));
    }
  }]);

  return _default;
}(_react.default.Component);

exports.default = _default;

/***/ }),
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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(69);


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(3));

var _react = _interopRequireDefault(__webpack_require__(0));

var _proDetail = _interopRequireDefault(__webpack_require__(26));

var _listProject = _interopRequireDefault(__webpack_require__(39));

var _axios = _interopRequireDefault(__webpack_require__(21));

__webpack_require__(9);

var _project = _interopRequireDefault(__webpack_require__(70));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  _createClass(_default, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_ref) {
        var query, res, data;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                _context.next = 3;
                return fetch(APIURL + query.id + "?projects&limit=21");

              case 3:
                res = _context.sent;
                _context.next = 6;
                return res.json();

              case 6:
                data = _context.sent;
                return _context.abrupt("return", {
                  id: query.id,
                  data: data,
                  provider: data.provider,
                  projects: data.projects,
                  slug: query.slug,
                  h1: data.h1,
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

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "onLoadMore", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee2(e, page) {
          var res, data, tracks;
          return _regenerator.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  e.preventDefault();
                  _context2.next = 3;
                  return fetch(page + "&projects&limit=21");

                case 3:
                  res = _context2.sent;
                  _context2.next = 6;
                  return res.json();

                case 6:
                  data = _context2.sent;
                  tracks = _this.state.projects;
                  data.projects.data.map(function (track) {
                    tracks.push(track);
                  });

                  _this.setState({
                    projects: tracks,
                    page: data.projects.next_page_url
                  });

                case 10:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        return function value(_x2, _x3) {
          return _value.apply(this, arguments);
        };
      }()
    });
    _this.state = {
      data: {},
      provider: {},
      projects: _this.props.projects.data,
      page: _this.props.projects.next_page_url // this.handlePageChange = this.handlePageChange.bind(this);

    };
    return _this;
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          provider = _props.provider,
          projects = _props.projects,
          id = _props.id,
          slug = _props.slug,
          data = _props.data;
      var list_project = [];
      var moreProject = [];

      if (this.state.projects.length > 0) {
        this.state.projects.map(function (e, index) {
          list_project.push(_react.default.createElement("div", {
            className: "col-12 col-md-4 col-lg-4 py-3 px-0",
            key: index
          }, _react.default.createElement(_listProject.default, {
            project: e
          })));
        });
      }

      return _react.default.createElement(_proDetail.default, _extends({
        provider_id: id,
        provider_slug: slug,
        data: data
      }, this.props, {
        css: _project.default
      }), _react.default.createElement("div", {
        className: "container mt-3"
      }, _react.default.createElement("h1", {
        className: "text-dark font-30 text-center"
      }, data.project_count + " dự án"), _react.default.createElement("div", {
        className: "row"
      }, list_project), this.state.page && _react.default.createElement("div", {
        className: "loadmore justify-content-center d-flex"
      }, _react.default.createElement("button", {
        className: "btn btn-primary",
        onClick: function onClick(e) {
          return _this2.onLoadMore(e, _this2.state.page);
        }
      }, "Xem th\xEAm"))));
    }
  }]);

  return _default;
}(_react.default.Component);

exports.default = _default;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = "*,:after,:before{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-ms-overflow-style:scrollbar}@-ms-viewport{width:device-width}header,nav{display:block}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:1rem;font-weight:400;line-height:1.5;color:#333;text-align:left;background-color:#fff}h1,h2{margin-top:0;margin-bottom:.5rem}p{margin-top:0;margin-bottom:1rem}ul{margin-bottom:1rem}ul{margin-top:0}ul ul{margin-bottom:0}a{color:#b953a4;text-decoration:none;background-color:transparent;-webkit-text-decoration-skip:objects}a:not([href]):not([tabindex]){color:inherit;text-decoration:none}img{border-style:none}button{border-radius:0}button,input{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button{text-transform:none}button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}h1,h2{margin-bottom:.5rem;font-family:inherit;font-weight:500;line-height:1.2;color:inherit}h1{font-size:2.5rem}h2{font-size:2rem}.list-unstyled{padding-left:0;list-style:none}.img-thumbnail{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid #dee2e6;border-radius:.25rem}.container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:576px){.container{max-width:540px}}@media (min-width:768px){.container{max-width:720px}}@media (min-width:992px){.container{max-width:960px}}@media (min-width:1200px){.container{max-width:1140px}}.container-fluid{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.row{display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.col-5,.col-7,.col-12,.col-lg-4,.col-lg-9,.col-md-4,.col-md-5,.col-md-7,.col-md-9,.col-md-12{position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px}.col-5{flex:0 0 41.66667%;max-width:41.66667%}.col-7{flex:0 0 58.33333%;max-width:58.33333%}.col-12{flex:0 0 100%;max-width:100%}@media (min-width:768px){.col-md-4{flex:0 0 33.33333%;max-width:33.33333%}.col-md-5{flex:0 0 41.66667%;max-width:41.66667%}.col-md-7{flex:0 0 58.33333%;max-width:58.33333%}.col-md-9{flex:0 0 75%;max-width:75%}.col-md-12{flex:0 0 100%;max-width:100%}.offset-md-1{margin-left:8.33333%}}@media (min-width:992px){.col-lg-4{flex:0 0 33.33333%;max-width:33.33333%}.col-lg-9{flex:0 0 75%;max-width:75%}}.form-control{display:block;width:100%;padding:.375rem .75rem;font-size:1rem;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem}.form-control::-ms-expand{background-color:transparent;border:0}.collapse:not(.show){display:none}.nav{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:.5rem 1rem}.nav-tabs{border-bottom:1px solid #dee2e6}.nav-tabs .nav-item{margin-bottom:-1px}.nav-tabs .nav-link{border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem}.navbar{position:relative;padding:.5rem 1rem}.navbar{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between}.navbar-brand{display:inline-block;padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;line-height:inherit;white-space:nowrap}.navbar-nav{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-collapse{flex-basis:100%;flex-grow:1;align-items:center}.navbar-toggler{padding:.25rem .75rem;font-size:1.25rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:.25rem}@media (min-width:768px){.navbar-expand-md{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-md .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}}.navbar-light .navbar-brand{color:hsla(0,0%,7%,.9)}.navbar-light .navbar-nav .nav-link{color:hsla(0,0%,7%,.5)}.navbar-light .navbar-toggler{color:hsla(0,0%,7%,.5);border-color:hsla(0,0%,7%,.1)}.badge-pill{padding-right:.6em;padding-left:.6em;border-radius:10rem}.bg-primary{background-color:#b953a4!important}.bg-secondary{background-color:#6c757d!important}.bg-white{background-color:#fff!important}.border{border:1px solid #dee2e6!important}.border-0{border:0!important}.border-right-0{border-right:0!important}.border-left-0{border-left:0!important}.rounded-circle{border-radius:50%!important}.d-none{display:none!important}.d-block{display:block!important}.d-flex{display:flex!important}@media (min-width:576px){.d-sm-none{display:none!important}}@media (min-width:768px){.d-md-none{display:none!important}.d-md-block{display:block!important}}.justify-content-start{justify-content:flex-start!important}.justify-content-end{justify-content:flex-end!important}.position-relative{position:relative!important}.position-absolute{position:absolute!important}.w-100{width:100%!important}.h-50{height:50%!important}.h-100{height:100%!important}.mt-1{margin-top:.25rem!important}.mx-1{margin-right:.25rem!important}.mb-1{margin-bottom:.25rem!important}.ml-1,.mx-1{margin-left:.25rem!important}.my-2{margin-top:.5rem!important}.mb-2,.my-2{margin-bottom:.5rem!important}.mt-3{margin-top:1rem!important}.p-0{padding:0!important}.py-0{padding-top:0!important}.px-0{padding-right:0!important}.py-0{padding-bottom:0!important}.px-0{padding-left:0!important}.py-1{padding-top:.25rem!important}.px-1{padding-right:.25rem!important}.py-1{padding-bottom:.25rem!important}.px-1{padding-left:.25rem!important}.px-2{padding-right:.5rem!important}.px-2{padding-left:.5rem!important}.py-3{padding-top:1rem!important}.px-3{padding-right:1rem!important}.py-3{padding-bottom:1rem!important}.px-3{padding-left:1rem!important}.px-4{padding-right:1.5rem!important}.px-4{padding-left:1.5rem!important}.my-auto{margin-top:auto!important}.mr-auto,.mx-auto{margin-right:auto!important}.my-auto{margin-bottom:auto!important}.mx-auto{margin-left:auto!important}.text-left{text-align:left!important}.text-center{text-align:center!important}@media (min-width:768px){.text-md-center{text-align:center!important}}.text-uppercase{text-transform:uppercase!important}.font-weight-light{font-weight:300!important}.font-weight-bold{font-weight:700!important}.text-white{color:#fff!important}.text-primary{color:#b953a4!important}.text-dark{color:#343a40!important}.navbar-9houzz{max-width:100%}header{height:60px!important}}@media (max-width:575.98px){header{height:60px!important}}.living-room{background-image:url(\"/static/images/outdoor-room.png\")!important}.kitchen{background-image:url(\"/static/images/kitchen.png\")!important}.bedroom{background-image:url(\"/static/images/bedroom.png\")!important}.bathroom{background-image:url(\"/static/images/bathroom.png\")!important}.workroom{background-image:url(\"/static/images/workroom.png\")!important}.baby-room{background-image:url(\"/static/images/babyroom.png\")!important}.outdoor-room{background-image:url(\"/static/images/outdoor-room.png\")!important}header{position:relative;height:105px;background:#fff;z-index:1000000}.nav-9houzz{background-color:#b953a4!important;color:#fff;position:relative;margin-left:0!important;margin-right:0!important}.nav-9houzz .navbar-nav{display:block;padding-left:40px!important;padding-right:40px!important}.nav-9houzz .header-menu{padding:0!important}.nav-9houzz .header-menu .nav-item:first-child{margin-left:7%!important}.nav-9houzz .header-menu .nav-item{display:block;padding-left:40px!important;padding-right:40px!important}.nav-9houzz .header-menu .nav-item .nav-link{padding:.5rem!important;font-size:14px!important;color:#fff!important}.nav-9houzz .header-menu .nav-item .nav-prof{position:relative!important}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child{top:4px!important;left:-40px!important;width:270px!important;z-index:11111111111}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child a{color:#666!important}.nav-9houzz .header-menu .nav-item .nav-child{position:absolute;display:none!important;top:100%;left:0;background:#fff;list-style:none;border:1px solid #ddd;border-top:none;padding:10px 14px 20px;z-index:11111111111}.nav-9houzz .header-menu .nav-item .nav-child .nav-idea{width:18%;height:112px;margin:10px;float:left;position:relative;background-position:50%;background-repeat:no-repeat;vertical-align:middle;line-height:112px;background-size:cover!important;color:#fff!important}@media (min-width:768px){.nav-idea{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}}@media (max-width:767.98px){.nav-9houzz{padding-left:0!important;padding-right:0!important}.nav-9houzz .navbar>.navbar-collapse{padding-bottom:20px!important}.nav-9houzz .header-menu,.nav-9houzz .header-menu .nav-item{padding-left:10px!important;padding-right:10px!important}.nav-9houzz .header-menu .nav-child,.nav-9houzz .header-menu .nav-item .nav-child{position:relative!important;top:0!important;display:block!important;overflow:hidden!important}.nav-9houzz .header-menu .nav-item .navbar-toggler,.nav-9houzz .header-menu .navbar-toggler{padding:.25rem!important}.nav-9houzz .header-menu .nav-item .navbar-toggler span,.nav-9houzz .header-menu .navbar-toggler span{font-size:13px!important}.nav-idea{width:90%!important;text-align:center;padding:57px 0;margin:12px auto;float:none;line-height:0!important}.navbar-toggler{border:none!important}.navbar-toggler span{font-size:18px!important;margin-top:3px!important}.nav-9houzz .header-menu .nav-item .nav-child{background:none!important;border:none!important}.nav-9houzz .header-menu .nav-item .nav-child .nav-idea{width:18%;height:0!important;float:left;line-height:112px;text-align:left;padding:0!important;color:#fff!important;margin-bottom:25px}.nav-9houzz .header-menu .nav-item .nav-child .nav-idea{text-transform:none!important;font-size:16px!important;font-weight:400!important}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child{padding-top:0!important;top:0!important;left:0!important;width:100%;-webkit-box-shadow:none;box-shadow:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:11111111111}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child a{color:#fff!important;font-size:16px!important}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child .nav-service{padding-left:0!important;line-height:30px!important}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child .text-left{padding-left:0!important}.nav-9houzz .header-menu .nav-item:first-child{margin-left:0!important}}.banner{height:361px}.gradient-animate{height:100px;background:-webkit-linear-gradient(transparent,#000);background:-o-linear-gradient(transparent,#000);background:linear-gradient(transparent,#000);bottom:0;z-index:0}.provider-nav{height:50px;line-height:34px}.provider-details .banner{max-height:290px;height:290px;position:relative;overflow:hidden}.project{width:100%;height:300px}.project img{object-fit:cover;object-position:center center}.provider-avatar{width:165px;height:165px;top:-127px;border:1px solid #d3d3d3;left:20px;background:#fff}.provider-info{bottom:4rem;left:13rem;z-index:1}.provider-details .nav-link{color:#666!important;padding:.5rem 1.5rem!important}.provider-details .nav-tabs .active{color:#b953a4!important}.provider-details .nav-tabs .active:after{content:\"\";position:absolute;bottom:-1px;left:12%;background:#b953a5;height:3px;width:75%}.provider-details .nav-tabs .active a{font-weight:700!important;color:#b953a4!important}span{font-size:13px!important}.provider-project{background:#fff!important}.provider-project .project-more{background:rgba(0,0,0,.3);width:98%;padding-top:40%}.provider-project .first-image{border-top-left-radius:.25rem!important;-webkit-border-top-left-radius:.25rem!important;-moz-border-top-left-radius:.25rem!important;-khtml-border-top-left-radius:.25rem!important}.provider-project .second-image{height:49%!important}.provider-project .second-image,.provider-project .second-image img{border-top-right-radius:.25rem!important;-webkit-border-top-right-radius:.25rem!important;-moz-border-top-right-radius:.25rem!important;-khtml-border-top-right-radius:.25rem!important}.provider-project .third-image{bottom:0!important;height:50%!important}.provider-project .right-avatar{width:98%}@media (max-width:575.98px){.provider-avatar{width:80px!important;height:80px!important;top:-105px!important}.provider-details .banner{height:185px!important}.banner img{height:100%!important}.provider-info{bottom:4rem;left:7rem;z-index:1}.provider-info p{font-size:18px!important;font-weight:700!important}#myTab.nav{overflow-x:scroll;overflow-y:hidden;white-space:nowrap;display:block!important}#myTab.nav li{display:inline-block;color:#fff;text-align:center}.provider-details .nav-tabs .active:after{content:\"\";position:absolute;bottom:-1px;left:12%;background:#fff;height:3px;width:75%}.provider-nav{height:45px!important;line-height:34px}.provider-main{padding-left:0!important;padding-right:0!important;margin-right:0!important;margin-left:0!important}.project{height:200px!important}.provider-project .project-des{margin-top:.25rem!important;line-height:25px!important}.provider-project .right-avatar{width:97%!important}.project-more{padding-top:30%!important}}.fa-star{color:#fc0}.disable{color:#ddd!important}img{vertical-align:middle}";

/***/ })
/******/ ]);