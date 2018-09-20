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
/******/ 	return __webpack_require__(__webpack_require__.s = 73);
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


var routes = __webpack_require__(17); // Name   Page      Pattern


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

module.exports = require("jquery");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.activePath = activePath;
exports.ucfirst = ucfirst;
exports.checkbot = checkbot;
exports.mapObject = exports.rating = void 0;

var _pathToRegexp = _interopRequireDefault(__webpack_require__(21));

var _react = _interopRequireDefault(__webpack_require__(0));

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
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-lazyload");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainBody = exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(4));

var _react = _interopRequireDefault(__webpack_require__(0));

var _meta = _interopRequireDefault(__webpack_require__(15));

var _router = _interopRequireDefault(__webpack_require__(2));

var _head = _interopRequireDefault(__webpack_require__(7));

var _routes = __webpack_require__(1);

var _reactstrap = __webpack_require__(14);

var _universalCookie = _interopRequireDefault(__webpack_require__(18));

var _package = _interopRequireDefault(__webpack_require__(19));

var _nav = _interopRequireDefault(__webpack_require__(20));

var _footer = _interopRequireDefault(__webpack_require__(22));

var _style = _interopRequireDefault(__webpack_require__(13));

var _jquery = _interopRequireDefault(__webpack_require__(3));

var _reactLazyload = __webpack_require__(6);

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
/* 10 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
      var _props = this.props,
          dataSrc = _props.dataSrc,
          alt = _props.alt;
      return _react.default.createElement("div", {
        className: "placeholder"
      }, _react.default.createElement("div", {
        className: "spinner"
      }, _react.default.createElement("div", {
        className: "rect1"
      }), _react.default.createElement("div", {
        className: "rect2"
      }), _react.default.createElement("div", {
        className: "rect3"
      }), _react.default.createElement("div", {
        className: "rect4"
      }), _react.default.createElement("div", {
        className: "rect5"
      })), dataSrc && _react.default.createElement("img", {
        className: "d-none",
        "data-original": dataSrc,
        alt: alt
      }));
    }
  }]);

  return Placeholder;
}(_react.default.Component);

exports.default = Placeholder;

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports) {



/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(__webpack_require__(8));

var _react = _interopRequireDefault(__webpack_require__(0));

var _head = _interopRequireDefault(__webpack_require__(7));

var _nprogress = _interopRequireDefault(__webpack_require__(16));

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
    className: "jsx-3211480974" + " " + "meta"
  }, _react.default.createElement(_style.default, {
    styleId: "3211480974",
    css: ["#nprogress{pointer-events:none;}", "#nprogress .bar{background:#b953a4;position:fixed;z-index:1111111111111;top:0;left:0;width:100%;height:4px;}", "#nprogress .peg{display:block;position:absolute;right:0px;width:500px;height:100%;opacity:1.0;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px);}"]
  }));
};

exports.default = _default;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("universal-cookie");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = {"name":"create-next-example-app","scripts":{"dev":"node server.js","build":"next build","start":"NODE_ENV=production node server.js","prod":"next build ; NODE_ENV=production node server.js"},"dependencies":{"@zeit/next-css":"^0.2.0","@zeit/next-sass":"^0.2.0","@zeit/next-typescript":"^1.1.0","axios":"^0.18.0","babel-plugin-inline-import":"^3.0.0","babel-plugin-module-resolver":"^3.1.1","bootstrap":"^4.1.1","classnames":"^2.2.6","css-loader":"^0.28.11","dotenv":"^6.0.0","es6-promise":"^4.2.4","express":"^4.16.3","font-awesome":"^4.7.0","ionicons":"^4.2.4","isomorphic-fetch":"^2.2.1","jquery":"^3.3.1","lru-cache":"^4.1.3","merge-files-webpack-plugin":"^1.1.2","next":"^6.1.1","next-compose":"0.0.2","next-routes":"^1.4.2","nprogress":"^0.2.0","popper.js":"^1.14.3","postcss-loader":"^2.1.6","prop-types":"^15.6.2","purify-css":"^1.2.5","purifycss-webpack":"^0.7.0","raw-loader":"^0.5.1","react":"^16.4.1","react-breadcrumbs-dynamic":"^1.1.1","react-document-meta":"^3.0.0-beta.2","react-dom":"^16.4.1","react-helmet":"^5.2.0","react-infinite":"^0.13.0","react-infinite-scroller":"^1.2.0","react-js-pagination":"^3.0.2","react-lazyload":"^2.3.0","react-masonry-component":"^6.2.1","react-modal":"^3.5.1","react-redux":"^5.0.7","react-responsive-carousel":"^3.1.41","react-router-dom":"^4.3.1","react-slick":"^0.23.1","react-through":"^1.1.1","reactstrap":"^6.3.0","redux":"^4.0.0","redux-devtools-extension":"^2.13.5","redux-thunk":"^2.3.0","serve-favicon":"^2.5.0","slick-carousel":"^1.8.1","style-loader":"^0.21.0","styled-jsx":"^2.2.7","styled-jsx-css-loader":"^0.3.0","styled-jsx-plugin-sass":"^0.2.4","tunnel-agent":"^0.6.0","universal-cookie":"^2.2.0","vanilla-lazyload":"^10.17.0","webpack":"^3.10.0"},"devDependencies":{"@babel/core":"^7.0.0-beta.53","babel-preset-env":"^1.7.0","create-next":"^0.1.4","node-sass":"^4.9.2","sass-loader":"^7.0.3","targets-webpack-plugin":"^1.0.3"}}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _routes = __webpack_require__(1);

var _helpers = __webpack_require__(5);

var _jquery = _interopRequireDefault(__webpack_require__(3));

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
      }), _react.default.createElement(_routes.Link, {
        route: "list-project"
      }, _react.default.createElement("a", {
        className: "nav-link mr-auto"
      }, "D\u1EF0 \xC1N")), _react.default.createElement("a", {
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
          key: index
        }, _react.default.createElement(_routes.Link, {
          route: value.uri
        }, _react.default.createElement("a", {
          className: "text-dark font-14"
        }, value.name_tag)));
      }))))))), _react.default.createElement("li", {
        className: "nav-item py-1 px-1"
      }, _react.default.createElement("div", {
        className: "d-flex w-100"
      }, _react.default.createElement("i", {
        className: "fa fa-graduation-cap my-auto",
        "aria-hidden": "true"
      }), _react.default.createElement(_routes.Link, {
        route: "list-provider"
      }, _react.default.createElement("a", {
        className: "nav-link mr-auto"
      }, "CHUY\xCAN GIA")), _react.default.createElement("a", {
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
          key: index
        }, _react.default.createElement(_routes.Link, {
          route: value.uri
        }, _react.default.createElement("a", {
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
/* 21 */
/***/ (function(module, exports) {

module.exports = require("path-to-regexp");

/***/ }),
/* 22 */
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
/* 23 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _routes = __webpack_require__(1);

var _layout = _interopRequireDefault(__webpack_require__(9));

var _helpers = __webpack_require__(5);

var _classnames = _interopRequireDefault(__webpack_require__(10));

var _router = __webpack_require__(2);

var _reactLazyload = _interopRequireDefault(__webpack_require__(6));

var _PlaceHolder = _interopRequireDefault(__webpack_require__(11));

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
      }, _react.default.createElement(_reactLazyload.default, {
        once: true,
        offset: [-200, 0],
        placeholder: _react.default.createElement(_PlaceHolder.default, {
          dataSrc: this.props.data.cover && this.props.data.cover,
          alt: this.props.data && this.props.data.name
        }),
        debounce: 0
      }, _react.default.createElement("img", {
        src: this.props.data.cover && this.props.data.cover,
        className: "w-100"
      })), _react.default.createElement("div", {
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
      }, _react.default.createElement(_reactLazyload.default, {
        once: true,
        offset: [-200, 0],
        placeholder: _react.default.createElement(_PlaceHolder.default, {
          dataSrc: this.props.data.avatar && this.props.data.avatar,
          alt: this.props.data && this.props.data.name
        }),
        debounce: 0
      }, _react.default.createElement("img", {
        itemProp: "image",
        src: this.props.data.avatar,
        className: "img-thumbnail rounded-circle h-100",
        alt: ""
      }))), _react.default.createElement("div", {
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
      }, _react.default.createElement("a", {
        href: "#",
        className: "nav-link border-0 font-14 font-weight-bold"
      }, "Nh\u1EADn x\xE9t")), _react.default.createElement("li", {
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
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(4));

var _react = _interopRequireDefault(__webpack_require__(0));

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
        className: "bg-white py-2 px-3 border border-gray"
      }, _react.default.createElement("div", {
        className: "provider-statistic row border-dot"
      }, _react.default.createElement("div", {
        className: "col-md-3 col-3 p-0 text-center"
      }, _react.default.createElement("p", {
        className: "text-primary font-weight-normal sidebar-count mb-0"
      }, this.props.provider.total_like ? this.props.provider.total_like : 0), _react.default.createElement("p", {
        className: "font-12 sidebar-label"
      }, "C\u1EA3m \u01A1n")), _react.default.createElement("div", {
        className: "col-md-3 col-3 p-0 text-center"
      }, _react.default.createElement("p", {
        className: "text-primary font-weight-normal sidebar-count mb-0"
      }, this.props.provider.total_rate ? this.props.provider.total_rate : 0), _react.default.createElement("p", {
        className: "font-12 sidebar-label"
      }, "Nh\u1EADn x\xE9t")), _react.default.createElement("div", {
        className: "col-md-3 col-3 p-0 text-center"
      }, _react.default.createElement("p", {
        className: "text-primary font-weight-normal sidebar-count mb-0"
      }, this.props.provider.total_page_view ? this.props.provider.total_page_view : 0), _react.default.createElement("p", {
        className: "font-12 sidebar-label"
      }, "L\u01B0\u1EE3t xem")), _react.default.createElement("div", {
        className: "col-md-3 col-3 p-0 text-center"
      }, _react.default.createElement("p", {
        className: "text-primary font-weight-normal sidebar-count mb-0"
      }, this.props.provider.total_follow ? this.props.provider.total_follow : 0), _react.default.createElement("p", {
        className: "font-12 sidebar-label"
      }, "Theo d\xF5i"))), _react.default.createElement("div", {
        className: "provider-contact"
      }, _react.default.createElement("ul", {
        className: "list-unstyled pb-3 my-2"
      }, this.props.provider.phone && _react.default.createElement("li", {
        className: "info-special"
      }, _react.default.createElement("i", {
        className: "fa fa-phone text-secondary"
      }), _react.default.createElement("span", {
        itemProp: "telephone"
      }, this.props.provider.phone)), this.props.provider.address && _react.default.createElement("li", {
        itemScope: true,
        itemType: "http://schema.org/PostalAddress",
        itemProp: "address"
      }, _react.default.createElement("i", {
        className: "fa fa-map-marker text-secondary"
      }), _react.default.createElement("span", {
        itemProp: "streetAddress"
      }, this.props.provider.address)), this.props.provider.email && _react.default.createElement("li", null, _react.default.createElement("i", {
        className: "fa fa-envelope-o text-secondary"
      }), _react.default.createElement("span", null, this.props.provider.email)), this.props.provider.work_time && _react.default.createElement("li", null, _react.default.createElement("i", {
        className: "fa fa-clock-o text-secondary"
      }), _react.default.createElement("span", null, this.props.provider.work_time)), this.props.provider.website && _react.default.createElement("li", null, _react.default.createElement("i", {
        className: " fa fa-globe text-secondary"
      }), _react.default.createElement("span", null, _react.default.createElement("a", {
        target: "_blank",
        rel: "nofollow",
        href: this.props.provider.website,
        className: "text-white"
      }, this.props.provider.website))), _react.default.createElement("li", null, _react.default.createElement("i", {
        className: "fa fa-pencil text-secondary"
      }), _react.default.createElement("a", {
        href: "javascript:void(0)",
        className: "text-primary"
      }, "Qu\u1EA3n l\xFD trang n\xE0y")), _react.default.createElement("li", {
        className: "text-center social"
      }, _react.default.createElement("a", {
        target: "_blank",
        rel: "nofollow",
        href: this.props.provider.website,
        className: "text-white fa fa-globe website"
      }), this.state.social_links.map(function (value, index) {
        return _react.default.createElement("a", {
          target: "_blank",
          rel: "nofollow",
          href: value.url,
          className: "text-white " + value.icon + " website",
          key: index
        });
      })))));
    }
  }]);

  return _default;
}(_react.default.Component);

exports.default = _default;

/***/ }),
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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(74);


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(4));

var _react = _interopRequireDefault(__webpack_require__(0));

var _proDetail = _interopRequireDefault(__webpack_require__(31));

var _providerSidebar = _interopRequireDefault(__webpack_require__(40));

var _helpers = __webpack_require__(5);

var _axios = _interopRequireDefault(__webpack_require__(23));

var _review = _interopRequireDefault(__webpack_require__(75));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
        var query, req, res, data;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query, req = _ref.req;
                _context.next = 3;
                return fetch(APIURL + query.id + "?reviews");

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
                  reviews: data.reviews,
                  review_details: data.review_details,
                  h1: data.h1,
                  title: data.seo.title,
                  des: data.seo.des,
                  canonical: data.seo.canonical,
                  robots: data.seo.robots,
                  og_url: data.seo.url,
                  url_images: data.seo.url_image,
                  headerProjects: data.headerProjects,
                  headerCategories: data.headerCategories,
                  dataBase: data.dataBase,
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

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));
    _this.state = {
      data: {},
      provider: {},
      projects: {},
      reviews: {},
      review_details: []
    };
    return _this;
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          provider = _props.provider,
          id = _props.id,
          slug = _props.slug,
          reviews = _props.reviews,
          review_details = _props.review_details,
          data = _props.data;
      return (// <ProviderDetail id={this.props.id} ref={(e)=>this.ProviderDetail = e}>
        _react.default.createElement(_proDetail.default, _extends({
          provider_id: id,
          provider_slug: slug,
          data: data
        }, this.props, {
          css: _review.default
        }), _react.default.createElement("div", {
          className: "container comment mt-3"
        }, _react.default.createElement("div", {
          className: "row"
        }, _react.default.createElement("div", {
          className: "col-0 col-md-3 col-lg-3 provider-sidebar p-0 mt-2",
          id: "sidebar"
        }, _react.default.createElement(_providerSidebar.default, {
          provider: provider
        })), _react.default.createElement("div", {
          className: "col-12 col-md-9 col-lg-9"
        }, _react.default.createElement(RatingComponent, {
          reviews: reviews,
          review_details: review_details
        })))))
      );
    }
  }]);

  return _default;
}(_react.default.Component);

exports.default = _default;

var RatingComponent =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(RatingComponent, _React$PureComponent);

  function RatingComponent(props) {
    _classCallCheck(this, RatingComponent);

    return _possibleConstructorReturn(this, (RatingComponent.__proto__ || Object.getPrototypeOf(RatingComponent)).call(this, props));
  }

  _createClass(RatingComponent, [{
    key: "render",
    value: function render() {
      var review_details = [];
      var config = {
        'danh-gia-chung': 'Đánh giá chung',
        'chat-luong-hoan-thien': 'Chất lượng hoàn thiện',
        'thai-do-phuc-vu': 'Thái độ phục vụ'
      };
      this.props.review_details ? review_details = this.props.review_details : '';
      return _react.default.createElement("div", {
        className: "bg-white py-3 px-4 review-content"
      }, _react.default.createElement("h1", {
        className: "font-weight-light text-dark font-25"
      }, "Nh\u1EADn x\xE9t"), _react.default.createElement("ul", {
        className: "list-unstyled pb-3"
      }, _react.default.createElement("li", {
        className: "border-dot py-3 border-top-0 border-left-0 border-right-0"
      }, _react.default.createElement("div", {
        className: "row d-flex"
      }, _react.default.createElement("div", {
        className: "position-relative col-md-2 col-5"
      }, _react.default.createElement("img", {
        src: "/static/images/big-star.png"
      }), _react.default.createElement("h2", {
        className: "position-absolute rating-number text-white font-30 font-weight-bold"
      }, this.props.reviews[0] && this.props.reviews[0].rate.toFixed(1))), _react.default.createElement("div", {
        className: "col-md-5 col-6 ml-4 py-3 evaluate"
      }, review_details && Object.keys(review_details).map(function (index) {
        return _react.default.createElement("div", {
          className: "row",
          key: index
        }, _react.default.createElement("div", {
          className: "col-md-6 text-blue-100 font-14 font-weight-normal p-0"
        }, config[index]), _react.default.createElement("div", {
          className: "star-rating font-13 col-md-6 p-0"
        }, (0, _helpers.rating)(review_details[index]['avg']), _react.default.createElement("span", {
          className: "text-secondary font-12 font-weight-light ml-2"
        }, " ", review_details[index]['avg'].toFixed(1), " ", _react.default.createElement("span", {
          className: "text-black"
        }, "(", review_details[index]['count'], ")"))));
      }))))));
    }
  }]);

  return RatingComponent;
}(_react.default.PureComponent);

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = "*,*::before,*::after{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-ms-overflow-style:scrollbar}@-ms-viewport{width:device-width}footer,header,nav{display:block}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";font-size:1rem;font-weight:400;line-height:1.5;color:#333333;text-align:left;background-color:#fff}h1,h2,h3{margin-top:0;margin-bottom:0.5rem}p{margin-top:0;margin-bottom:1rem}ul{margin-top:0;margin-bottom:1rem}ul ul{margin-bottom:0}a{color:#b953a4;text-decoration:none;background-color:transparent;-webkit-text-decoration-skip:objects}a:not([href]):not([tabindex]){color:inherit;text-decoration:none}img{vertical-align:middle;border-style:none}button{border-radius:0}input,button{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button{text-transform:none}button,html [type=\"button\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner{padding:0;border-style:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}h1,h2,h3{margin-bottom:0.5rem;font-family:inherit;font-weight:500;line-height:1.2;color:inherit}h1{font-size:2.5rem}h2{font-size:2rem}h3{font-size:1.75rem}.list-unstyled{padding-left:0;list-style:none}.img-thumbnail{padding:0.25rem;background-color:#fff;border:1px solid #dee2e6;border-radius:0.25rem;max-width:100%;height:auto}.container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:576px){.container{max-width:540px}}@media (min-width:768px){.container{max-width:720px}}@media (min-width:992px){.container{max-width:960px}}@media (min-width:1200px){.container{max-width:1140px}}.container-fluid{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.row{display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.col-3,.col-5,.col-6,.col-12,.col-md-2,.col-md-3,.col-md-5,.col-md-9,.col-md-12,.col-lg-3,.col-lg-4,.col-lg-9,.col-lg-12{position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px}.col-3{flex:0 0 25%;max-width:25%}.col-5{flex:0 0 41.66667%;max-width:41.66667%}.col-6{flex:0 0 50%;max-width:50%}.col-12{flex:0 0 100%;max-width:100%}@media (min-width:768px){.col-md-2{flex:0 0 16.66667%;max-width:16.66667%}.col-md-3{flex:0 0 25%;max-width:25%}.col-md-5{flex:0 0 41.66667%;max-width:41.66667%}.col-md-9{flex:0 0 75%;max-width:75%}.col-md-12{flex:0 0 100%;max-width:100%}.offset-md-1{margin-left:8.33333%}}@media (min-width:992px){.col-lg-3{flex:0 0 25%;max-width:25%}.col-lg-4{flex:0 0 33.33333%;max-width:33.33333%}.col-lg-9{flex:0 0 75%;max-width:75%}.col-lg-12{flex:0 0 100%;max-width:100%}}.form-control{display:block;width:100%;padding:0.375rem 0.75rem;font-size:1rem;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:0.25rem}.form-control::-ms-expand{background-color:transparent;border:0}.collapse:not(.show){display:none}.nav{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:0.5rem 1rem}.nav-tabs{border-bottom:1px solid #dee2e6}.nav-tabs .nav-item{margin-bottom:-1px}.nav-tabs .nav-link{border:1px solid transparent;border-top-left-radius:0.25rem;border-top-right-radius:0.25rem}.navbar{position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding:0.5rem 1rem}.navbar-brand{display:inline-block;padding-top:0.3125rem;padding-bottom:0.3125rem;margin-right:1rem;font-size:1.25rem;line-height:inherit;white-space:nowrap}.navbar-nav{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-collapse{flex-basis:100%;flex-grow:1;align-items:center}.navbar-toggler{padding:0.25rem 0.75rem;font-size:1.25rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:0.25rem}@media (min-width:768px){.navbar-expand-md{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .nav-link{padding-right:0.5rem;padding-left:0.5rem}.navbar-expand-md .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}}.navbar-light .navbar-brand{color:rgba(17,17,17,0.9)}.navbar-light .navbar-nav .nav-link{color:rgba(17,17,17,0.5)}.navbar-light .navbar-toggler{color:rgba(17,17,17,0.5);border-color:rgba(17,17,17,0.1)}.badge-pill{padding-right:0.6em;padding-left:0.6em;border-radius:10rem}.bg-white{background-color:#fff!important}.border{border:1px solid #dee2e6!important}.border-0{border:0!important}.border-top-0{border-top:0!important}.border-right-0{border-right:0!important}.border-left-0{border-left:0!important}.rounded-circle{border-radius:50%!important}.d-none{display:none!important}.d-block{display:block!important}.d-flex{display:flex!important}@media (min-width:576px){.d-sm-none{display:none!important}}@media (min-width:768px){.d-md-none{display:none!important}.d-md-block{display:block!important}.d-md-flex{display:flex!important}}.flex-wrap-reverse{flex-wrap:wrap-reverse!important}.justify-content-start{justify-content:flex-start!important}.justify-content-end{justify-content:flex-end!important}.position-relative{position:relative!important}.position-absolute{position:absolute!important}.w-100{width:100%!important}.h-100{height:100%!important}.mx-0{margin-right:0!important}.mx-0{margin-left:0!important}.mt-1{margin-top:0.25rem!important}.mx-1{margin-right:0.25rem!important}.mb-1{margin-bottom:0.25rem!important}.mx-1{margin-left:0.25rem!important}.mt-2,.my-2{margin-top:0.5rem!important}.my-2{margin-bottom:0.5rem!important}.mt-3{margin-top:1rem!important}.ml-4{margin-left:1.5rem!important}.p-0{padding:0!important}.py-0{padding-top:0!important}.px-0{padding-right:0!important}.py-0{padding-bottom:0!important}.px-0{padding-left:0!important}.py-1{padding-top:0.25rem!important}.pr-1,.px-1{padding-right:0.25rem!important}.py-1{padding-bottom:0.25rem!important}.px-1{padding-left:0.25rem!important}.py-2{padding-top:0.5rem!important}.px-2{padding-right:0.5rem!important}.py-2{padding-bottom:0.5rem!important}.px-2{padding-left:0.5rem!important}.py-3{padding-top:1rem!important}.px-3{padding-right:1rem!important}.pb-3,.py-3{padding-bottom:1rem!important}.px-3{padding-left:1rem!important}.px-4{padding-right:1.5rem!important}.px-4{padding-left:1.5rem!important}.pl-5{padding-left:3rem!important}.my-auto{margin-top:auto!important}.mr-auto{margin-right:auto!important}.my-auto{margin-bottom:auto!important}.text-left{text-align:left!important}.text-center{text-align:center!important}@media (min-width:768px){.text-md-center{text-align:center!important}}.font-weight-light{font-weight:300!important}.font-weight-normal{font-weight:400!important}.font-weight-bold{font-weight:700!important}.text-white{color:#fff!important}.text-primary{color:#b953a4!important}.text-secondary{color:#6c757d!important}.text-dark{color:#343a40!important}.fa-search:before{content:\"\\F002\"}.fa-envelope-o:before{content:\"\\F003\"}.fa-star:before{content:\"\\F005\"}.fa-clock-o:before{content:\"\\F017\"}.fa-pencil:before{content:\"\\F040\"}.fa-map-marker:before{content:\"\\F041\"}.fa-pencil-square-o:before{content:\"\\F044\"}.fa-chevron-right:before{content:\"\\F054\"}.fa-info-circle:before{content:\"\\F05A\"}.fa-phone:before{content:\"\\F095\"}.fa-facebook:before{content:\"\\F09A\"}.fa-rss:before{content:\"\\F09E\"}.fa-globe:before{content:\"\\F0AC\"}.fa-briefcase:before{content:\"\\F0B1\"}.fa-bars:before{content:\"\\F0C9\"}.fa-google-plus:before{content:\"\\F0D5\"}.fa-lightbulb-o:before{content:\"\\F0EB\"}.fa-graduation-cap:before{content:\"\\F19D\"}.fa-user-circle-o:before{content:\"\\F2BE\"}body{font-family:helvetica-ttf,sans-serif!important}h1{font-family:helvetica-ttf,sans-serif!important}input{outline:none;border:none}input::-webkit-input-placeholder{color:#adadad}input:-moz-placeholder{color:#adadad}input::-moz-placeholder{color:#adadad}input:-ms-input-placeholder{color:#adadad}button{outline:none!important;border:none;background:transparent}.font-12{font-size:12px!important}.font-13{font-size:13px!important}.font-14{font-size:14px!important}.font-22{font-size:22px!important}.font-25{font-size:25px!important}.font-30{font-size:30px!important}.text-gray-200{color:#999999!important}.bg-gray{background-color:#dddddd!important}.text-yellow{color:#ffcc00!important}.navbar-9houzz{color:#666666!important;height:60px}.header-search .input-radius{border:1px solid!important;border-radius:4em / 5em}.header-search{position:relative;width:550px;margin-left:15px;display:block}.header-search .input-radius{width:100%;height:40px;border:1px solid #dddddd!important}.header-search .icon-search{position:absolute;right:10px;top:22%;color:#b953a4;z-index:10;font-weight:lighter}.header-left{padding:0!important}@media (min-width:1300px){.container{max-width:1265px}}@media (min-width:768px) and (max-width:992px){.container{max-width:868px}}@media (min-width:768px) and (max-width:991.98px){.header-search{margin-left:50px!important}}@media (min-width:576px) and (max-width:767.98px){.navbar-9houzz{max-width:100%}header{height:60px!important}}@media (max-width:575.98px){header{height:60px!important}}header{position:relative;height:105px;background:white;z-index:1000000}.nav-9houzz{background-color:#b953a4!important;color:white;position:relative;margin-left:0!important;margin-right:0!important}.nav-9houzz .header-menu{padding:0!important}.nav-9houzz .header-menu .nav-item:first-child{margin-left:7%!important}.nav-9houzz .header-menu .nav-item{display:block;padding-left:40px!important;padding-right:40px!important}.nav-9houzz .header-menu .nav-item .nav-link{padding:0.5rem 0.5rem!important;font-size:14px!important;color:white!important}.nav-9houzz .header-menu .nav-item .nav-prof{position:relative!important}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child{top:4px!important;left:-40px!important;width:270px!important;z-index:11111111111}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child a{color:#666!important}.nav-9houzz .header-menu .nav-item .nav-child{position:absolute;display:none!important;top:100%;left:0;background:white;list-style:none;border:1px solid #dddddd;border-top:none;padding:10px 14px 20px;z-index:11111111111}@media (max-width:767.98px){.nav-9houzz{padding-left:0!important;padding-right:0!important}.nav-9houzz .navbar>.navbar-collapse{padding-bottom:20px!important}.nav-9houzz .header-menu,.nav-9houzz .header-menu .nav-item{padding-left:10px!important;padding-right:10px!important}.nav-9houzz .header-menu .nav-child,.nav-9houzz .header-menu .nav-item .nav-child{position:relative!important;top:0!important;display:block!important;overflow:hidden!important}.nav-9houzz .header-menu .navbar-toggler,.nav-9houzz .header-menu .nav-item .navbar-toggler{padding:0.25rem 0.25rem!important}.nav-9houzz .header-menu .navbar-toggler span,.nav-9houzz .header-menu .nav-item .navbar-toggler span{font-size:13px!important}.navbar-toggler{border:none!important}.navbar-toggler span{font-size:18px!important;margin-top:3px!important}.nav-9houzz .header-menu .nav-item .nav-child{background:none!important;border:none!important}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child{padding-top:0!important;top:0px!important;left:0px!important;width:100%;-webkit-box-shadow:none;box-shadow:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:11111111111}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child a{color:#fff!important;font-size:16px!important}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child .nav-service{padding-left:0!important;line-height:30px!important}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child .text-left{padding-left:0!important}.nav-9houzz .header-menu .nav-item:first-child{margin-left:0%!important}}.footer{background-color:#f0f0f0}.footer .logo{margin-bottom:20px;float:left;width:100%}.footer .about_widget p{font-size:12px;color:#313131;line-height:24px}.footer .footer-title{font-size:16px;margin:0;margin-bottom:0;margin-bottom:30px;font-weight:400!important}.footer .link_widgets{float:left;width:100%}.footer .link_widgets a{position:relative;font-size:14px;color:#313131;margin-bottom:12px;padding-left:24px;float:left;width:100%}.footer .link_widgets a:before{position:absolute;left:0;top:8px;width:15px;height:1px;content:\"\";background:#313131}.footer-content{font-size:13px;padding:0px!important}.footer-menu{line-height:10px}.footer-menu a{color:#333333!important;text-decoration:none!important}.social-links a{position:relative;font-size:14px;color:#313131!important;margin-bottom:14px;float:left;width:100%}.social-links span{margin-right:10px;width:15px}@media (max-width:767.98px){.footer .container{padding-top:0.25rem!important;padding-bottom:0!important}.footer-logo{padding-left:15px!important}.footer-menu{margin-bottom:20px}.widget h3{display:inline-block;font-size:16px!important;font-weight:600!important;line-height:1.25;margin-bottom:10px!important}.link_widgets a{padding-left:0!important;margin-bottom:10px!important;font-size:13px!important}.link_widgets a:before{display:none!important}}.banner{height:361px}.gradient-animate{height:100px;background:-webkit-linear-gradient(rgba(0,0,0,0),black);background:-o-linear-gradient(rgba(0,0,0,0),black);background:linear-gradient(rgba(0,0,0,0),black);bottom:0;z-index:0}.disable{color:#ddd!important}.fa-star{color:#fc0}.rating-number{top:52px;left:57px}.evaluate{line-height:30px}.provider-contact{overflow:hidden!important}.provider-contact li{margin-bottom:8px;padding:0 22px;position:relative}.provider-contact li i{left:0;position:absolute;top:3px}.provider-nav{height:50px;line-height:34px}.provider-details .banner{max-height:290px;height:290px;position:relative;overflow:hidden}.provider-avatar{width:165px;height:165px;top:-127px;border:1px solid #d3d3d3;left:20px;background:white}.provider-info{bottom:4rem;left:13rem;z-index:1}.provider-details .nav-link{color:#666!important;padding:0.5rem 1.5rem!important}.provider-contact span,.provider-contact a{color:#333333!important;font-weight:normal}span{font-size:13px!important}.info-special{border-bottom:1px dotted #dddddd;padding-bottom:5px!important}.info-special i{font-size:20px;top:6px!important}.info-special span{font-size:20px!important}.provider-sidebar .provider-statistic h3{margin-bottom:5px!important}.provider-sidebar .sidebar-label{color:#888!important;margin-bottom:5px!important}.provider-contact .social{float:left;width:100%}.provider-contact .social a{float:left;margin-right:8px;padding:5px 5px;background:#d2d6dc;border-radius:50%;font-size:14px;color:white!important;width:25px;height:25px}@media (max-width:575.98px){.provider-avatar{width:80px!important;height:80px!important;top:-105px!important}.provider-details .banner{height:185px!important}.banner img{height:100%!important}.provider-info{bottom:4rem;left:7rem;z-index:1}.provider-info h1{font-size:18px!important;font-weight:700!important}.provider-contact span,.provider-contact a{font-size:15px!important}#myTab.nav{overflow-x:scroll;overflow-y:hidden;white-space:nowrap;display:block!important}#myTab.nav li{display:inline-block;color:white;text-align:center}.provider-nav{height:45px!important;line-height:34px}.provider-main{padding-left:0!important;padding-right:0!important;margin-right:0!important;margin-left:0!important}#sidebar{max-width:100%!important;margin-top:-0.5rem!important;border-top:none!important}.review-content{border:none!important;padding:0!important}.review-content img{max-width:95%!important}.review-content .evaluate{padding:0!important;margin-left:10px!important}.rating-number{top:27%!important;left:35%!important;font-size:25px!important}}img{vertical-align:middle}#sidebar{max-width:23%!important}.widget h3{font-weight:600!important;font-size:14px!important}.fa-star{color:#ffcc00}.disable{color:#dddddd!important}img{vertical-align:middle}.sidebar-count{font-size: 30px !important;}";

/***/ })
/******/ ]);