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
/******/ 	return __webpack_require__(__webpack_require__.s = 50);
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
/* 12 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
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
/* 24 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _helpers = __webpack_require__(5);

var _routes = __webpack_require__(1);

var _classnames = _interopRequireDefault(__webpack_require__(10));

var _jquery = _interopRequireDefault(__webpack_require__(3));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sidebar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Sidebar, _React$Component);

  function Sidebar(props) {
    _classCallCheck(this, Sidebar);

    return _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call(this, props));
  }

  _createClass(Sidebar, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          filter = _props.filter,
          color = _props.color,
          page = _props.page;
      return _react.default.createElement("div", {
        className: "sidebar-service row bg-white"
      }, _react.default.createElement("div", {
        className: "d-md-block px-2 w-100 sidebar-service-content"
      }, this.props.test && _react.default.createElement("div", {
        "class": "child-sidebar-service pb-1 col-12 offset-md-0 col-md-12 px-0"
      }, _react.default.createElement("div", {
        "class": "mt-2 widget p-3"
      }, _react.default.createElement("h3", {
        "class": "font-15 mb-3"
      }, "Locale ", _react.default.createElement("span", {
        "class": "fa fa-chevron-right d-block d-md-none",
        "data-toggle": "collapse",
        "data-target": "#demoTest"
      })), _react.default.createElement("ul", {
        "class": "list-unstyled mb-0 collapse d-md-block",
        id: "demoTest"
      }, _react.default.createElement("li", {
        "class": "py-1 radio"
      }, _react.default.createElement("a", {
        href: "",
        "class": "font-13 font-weight-light text-gray"
      }, _react.default.createElement("label", {
        "class": "px-3"
      }, "H\xE0 N\u1ED9i", _react.default.createElement("span", null, "10")))), _react.default.createElement("li", {
        "class": "py-1 radio"
      }, _react.default.createElement("a", {
        href: "",
        "class": "font-13 font-weight-light text-gray"
      }, _react.default.createElement("label", {
        "class": "px-3"
      }, "TPHCM", _react.default.createElement("span", null, "20")))), _react.default.createElement("li", {
        "class": "py-1 radio"
      }, _react.default.createElement("a", {
        href: "",
        "class": "font-13 font-weight-light text-gray"
      }, _react.default.createElement("label", {
        "class": "px-3"
      }, "\u0110\xE0 N\u1EAFng", _react.default.createElement("span", null, "11")))), _react.default.createElement("li", {
        "class": "py-1 radio"
      }, _react.default.createElement("a", {
        href: "",
        "class": "font-13 font-weight-light text-gray"
      }, _react.default.createElement("label", {
        "class": "px-3"
      }, "Ninh B\xECnh", _react.default.createElement("span", null, "12")))), _react.default.createElement("li", {
        "class": "py-1 radio"
      }, _react.default.createElement("a", {
        href: "",
        "class": "font-13 font-weight-light text-gray"
      }, _react.default.createElement("label", {
        "class": "px-3"
      }, "H\xE0 T\u0129nh", _react.default.createElement("span", null, "21")))), _react.default.createElement("li", {
        "class": "py-1 radio"
      }, _react.default.createElement("a", {
        href: "",
        "class": "font-13 font-weight-light text-gray"
      }, _react.default.createElement("label", {
        "class": "px-3"
      }, "H\xE0 Nam", _react.default.createElement("span", null, "21")))), _react.default.createElement("li", {
        "class": "py-1 radio"
      }, _react.default.createElement("a", {
        href: "",
        "class": "font-13 font-weight-light text-gray"
      }, _react.default.createElement("label", {
        "class": "px-3"
      }, "B\u1EAFc Ninh", _react.default.createElement("span", null, "23")))), _react.default.createElement("li", {
        "class": "py-1 radio"
      }, _react.default.createElement("a", {
        href: "",
        "class": "font-13 font-weight-light text-gray"
      }, " ", _react.default.createElement("label", {
        "class": "px-3"
      }, "Qu\xE3ng Ng\xE3i", _react.default.createElement("span", null, "44")))), _react.default.createElement("li", {
        "class": "py-1 radio"
      }, _react.default.createElement("a", {
        href: "",
        "class": "font-13 font-weight-light text-gray"
      }, " ", _react.default.createElement("label", {
        "class": "px-3"
      }, "Nam \u0110\u1ECBnh", _react.default.createElement("span", null, "12")))), _react.default.createElement("li", {
        "class": "py-1 radio"
      }, _react.default.createElement("a", {
        href: "",
        "class": "font-13 font-weight-light text-gray"
      }, _react.default.createElement("label", {
        "class": "px-3"
      }, "Th\xE1i B\xECnh", _react.default.createElement("span", null, "12")))), _react.default.createElement("span", {
        "class": "more loadmore d-none d-md-block"
      }, "Xem th\xEAm ", _react.default.createElement("i", {
        "class": "la la-arrow-circle-right"
      }))))), filter && filter.map(function (value, index) {
        return value.data.length != 0 && _react.default.createElement("div", {
          className: "child-sidebar-service pb-1 col-12 offset-md-0 col-md-12 px-0",
          key: index
        }, _react.default.createElement("div", {
          className: "mt-2 widget p-3"
        }, _react.default.createElement("h3", {
          className: "font-15 mb-3"
        }, value.textName, _react.default.createElement("span", {
          className: "fa fa-chevron-right d-block d-md-none",
          "data-toggle": "collapse",
          "data-target": "#demo" + index
        })), _react.default.createElement("ul", {
          className: "list-unstyled mb-0 collapse d-md-block",
          id: "demo" + index
        }, value.data && (0, _helpers.mapObject)(value.data, function (index, value) {
          return _react.default.createElement("li", {
            className: "py-1 radio",
            key: index
          }, _react.default.createElement(_routes.Link, {
            route: value.uri
          }, _react.default.createElement("a", {
            className: "font-13 font-weight-light text-gray",
            rel: value.is_seo == 0 ? "nofollow" : "dofollow"
          }, _react.default.createElement("label", {
            className: (0, _classnames.default)('pr-3', {
              active: page.currentsId.includes(value.original)
            })
          }, value.name_tag, _react.default.createElement("span", null, value.total_doc)))));
        }), _react.default.createElement("span", {
          className: "more loadmore d-none d-md-block"
        }, "Xem th\xEAm ", _react.default.createElement("i", {
          className: "la la-arrow-circle-right"
        })))));
      }), _react.default.createElement("div", {
        className: "child-sidebar-service pb-1 col-12 offset-md-0 col-md-12 px-0"
      }, color && _react.default.createElement("div", {
        className: "mt-2 widget p-3"
      }, _react.default.createElement("h3", {
        className: "font-15"
      }, "M\xC0U S\u1EAEC"), _react.default.createElement("span", {
        className: "expand-list"
      }), _react.default.createElement("div", {
        className: "service-color mt-3"
      }, (0, _helpers.mapObject)(color, function (index, value) {
        return _react.default.createElement("a", {
          href: value.uri,
          className: "text-dark border border-gray",
          key: index
        }, _react.default.createElement("span", {
          className: "float-left " + value.class,
          "data-toggle": "tooltip",
          title: value.name_tag
        }));
      }))))));
    }
  }]);

  return Sidebar;
}(_react.default.Component);

exports.default = Sidebar;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(24));

var _paginator = _interopRequireDefault(__webpack_require__(27));

var _page = _interopRequireDefault(__webpack_require__(28));

var _classnames = _interopRequireDefault(__webpack_require__(10));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pagination =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Pagination, _React$Component);

  function Pagination() {
    _classCallCheck(this, Pagination);

    return _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).apply(this, arguments));
  }

  _createClass(Pagination, [{
    key: "isFirstPageVisible",
    value: function isFirstPageVisible(has_previous_page) {
      var _props = this.props,
          hideDisabled = _props.hideDisabled,
          hideNavigation = _props.hideNavigation,
          hideFirstLastPages = _props.hideFirstLastPages;
      if (hideFirstLastPages || hideDisabled && !has_previous_page) return false;
      return true;
    }
  }, {
    key: "isPrevPageVisible",
    value: function isPrevPageVisible(has_previous_page) {
      var _props2 = this.props,
          hideDisabled = _props2.hideDisabled,
          hideNavigation = _props2.hideNavigation;
      if (hideNavigation || hideDisabled && !has_previous_page) return false;
      return true;
    }
  }, {
    key: "isNextPageVisible",
    value: function isNextPageVisible(has_next_page) {
      var _props3 = this.props,
          hideDisabled = _props3.hideDisabled,
          hideNavigation = _props3.hideNavigation;
      if (hideNavigation || hideDisabled && !has_next_page) return false;
      return true;
    }
  }, {
    key: "isLastPageVisible",
    value: function isLastPageVisible(has_next_page) {
      var _props4 = this.props,
          hideDisabled = _props4.hideDisabled,
          hideNavigation = _props4.hideNavigation,
          hideFirstLastPages = _props4.hideFirstLastPages;
      if (hideFirstLastPages || hideDisabled && !has_next_page) return false;
      return true;
    }
  }, {
    key: "buildPages",
    value: function buildPages() {
      var pages = [];
      var _props5 = this.props,
          itemsCountPerPage = _props5.itemsCountPerPage,
          pageRangeDisplayed = _props5.pageRangeDisplayed,
          activePage = _props5.activePage,
          prevPageText = _props5.prevPageText,
          nextPageText = _props5.nextPageText,
          firstPageText = _props5.firstPageText,
          lastPageText = _props5.lastPageText,
          totalItemsCount = _props5.totalItemsCount,
          onChange = _props5.onChange,
          activeClass = _props5.activeClass,
          itemClass = _props5.itemClass,
          itemClassFirst = _props5.itemClassFirst,
          itemClassPrev = _props5.itemClassPrev,
          itemClassNext = _props5.itemClassNext,
          itemClassLast = _props5.itemClassLast,
          activeLinkClass = _props5.activeLinkClass,
          disabledClass = _props5.disabledClass,
          hideDisabled = _props5.hideDisabled,
          hideNavigation = _props5.hideNavigation,
          linkClass = _props5.linkClass,
          linkClassFirst = _props5.linkClassFirst,
          linkClassPrev = _props5.linkClassPrev,
          linkClassNext = _props5.linkClassNext,
          linkClassLast = _props5.linkClassLast,
          hideFirstLastPages = _props5.hideFirstLastPages,
          getPageUrl = _props5.getPageUrl,
          nextPageLink = _props5.nextPageLink,
          backPageLink = _props5.backPageLink;
      var paginationInfo = new _paginator.default(itemsCountPerPage, pageRangeDisplayed).build(totalItemsCount, activePage);

      for (var i = paginationInfo.first_page; i <= paginationInfo.last_page; i++) {
        pages.push(_react.default.createElement(_page.default, {
          isActive: i === activePage,
          key: i,
          href: getPageUrl(i),
          pageNumber: i,
          pageText: i + "",
          onClick: onChange,
          itemClass: itemClass,
          linkClass: linkClass,
          activeClass: activeClass,
          activeLinkClass: activeLinkClass
        }));
      }

      this.isPrevPageVisible(paginationInfo.has_previous_page) && pages.unshift(_react.default.createElement(_page.default, {
        key: "prev" + paginationInfo.previous_page,
        pageNumber: paginationInfo.previous_page,
        onClick: onChange,
        pageText: prevPageText,
        isDisabled: !paginationInfo.has_previous_page,
        itemClass: (0, _classnames.default)(itemClass, itemClassPrev),
        linkClass: (0, _classnames.default)(linkClass, linkClassPrev),
        disabledClass: disabledClass,
        href: backPageLink
      })); // this.isFirstPageVisible(paginationInfo.has_previous_page) &&
      // pages.unshift(
      //   <Page
      //     key={"first"}
      //     pageNumber={1}
      //     onClick={onChange}
      //     pageText={firstPageText}
      //     isDisabled={!paginationInfo.has_previous_page}
      //     itemClass={cx(itemClass, itemClassFirst)}
      //     linkClass={cx(linkClass, linkClassFirst)}
      //     disabledClass={disabledClass}
      //   />
      // );

      this.isNextPageVisible(paginationInfo.has_next_page) && pages.push(_react.default.createElement(_page.default, {
        key: "next" + paginationInfo.next_page,
        pageNumber: paginationInfo.next_page,
        onClick: onChange,
        pageText: nextPageText,
        isDisabled: !paginationInfo.has_next_page,
        itemClass: (0, _classnames.default)(itemClass, itemClassNext),
        linkClass: (0, _classnames.default)(linkClass, linkClassNext),
        disabledClass: disabledClass,
        href: nextPageLink
      })); // this.isLastPageVisible(paginationInfo.has_next_page) &&
      // pages.push(
      //   <Page
      //     key={"last"}
      //     pageNumber={paginationInfo.total_pages}
      //     onClick={onChange}
      //     pageText={lastPageText}
      //     isDisabled={
      //       paginationInfo.current_page === paginationInfo.total_pages
      //     }
      //     itemClass={cx(itemClass, itemClassLast)}
      //     linkClass={cx(linkClass, linkClassLast)}
      //     disabledClass={disabledClass}
      //   />
      // );

      return pages;
    }
  }, {
    key: "render",
    value: function render() {
      var pages = this.buildPages();
      return _react.default.createElement("ul", {
        className: this.props.innerClass
      }, pages);
    }
  }]);

  return Pagination;
}(_react.default.Component);

exports.default = Pagination;
Object.defineProperty(Pagination, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    itemsCountPerPage: 10,
    pageRangeDisplayed: 5,
    activePage: 1,
    prevPageText: "Trang trước",
    firstPageText: "Trang đầu",
    nextPageText: "Trang sau",
    lastPageText: "Trang cuối",
    innerClass: "pagination",
    itemClass: undefined,
    linkClass: undefined,
    activeLinkClass: undefined,
    hideFirstLastPages: false,
    nextPageLink: "#",
    backPageLink: "#",
    getPageUrl: function getPageUrl(i) {
      return "#";
    }
  }
});

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("paginator");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(24));

var _classnames = _interopRequireDefault(__webpack_require__(10));

var _routes = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page =
/*#__PURE__*/
function (_Component) {
  _inherits(Page, _Component);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
  }

  _createClass(Page, [{
    key: "handleClick",
    value: function handleClick(e) {
      var _props = this.props,
          isDisabled = _props.isDisabled,
          pageNumber = _props.pageNumber; // e.preventDefault();

      if (isDisabled) {
        return;
      }

      this.props.onClick(pageNumber);
    }
  }, {
    key: "render",
    value: function render() {
      var _cx,
          _cx2,
          _this = this;

      var _props2 = this.props,
          pageText = _props2.pageText,
          pageNumber = _props2.pageNumber,
          activeClass = _props2.activeClass,
          itemClass = _props2.itemClass,
          linkClass = _props2.linkClass,
          activeLinkClass = _props2.activeLinkClass,
          disabledClass = _props2.disabledClass,
          isActive = _props2.isActive,
          isDisabled = _props2.isDisabled,
          href = _props2.href;
      var css = (0, _classnames.default)(itemClass, (_cx = {}, _defineProperty(_cx, activeClass, isActive), _defineProperty(_cx, disabledClass, isDisabled), _defineProperty(_cx, 'page-item', 'page-item'), _cx));
      var linkCss = (0, _classnames.default)(linkClass, (_cx2 = {}, _defineProperty(_cx2, activeLinkClass, isActive), _defineProperty(_cx2, 'page-link', 'page-link'), _cx2));
      return _react.default.createElement("li", {
        className: css,
        onClick: function onClick(e) {
          return _this.handleClick(e);
        }
      }, _react.default.createElement(_routes.Link, {
        prefetch: true,
        route: href
      }, _react.default.createElement("a", {
        className: linkCss,
        href: href
      }, pageText)));
    }
  }]);

  return Page;
}(_react.Component);

exports.default = Page;
Object.defineProperty(Page, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    activeClass: "active",
    disabledClass: "disabled",
    itemClass: 'page-item',
    linkClass: 'page-link',
    activeLinkCLass: 'active',
    isActive: false,
    isDisabled: false,
    href: "#"
  }
});

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(4));

var _react = _interopRequireDefault(__webpack_require__(0));

var _axios = _interopRequireDefault(__webpack_require__(23));

var _helpers = __webpack_require__(5);

var _jquery = _interopRequireDefault(__webpack_require__(3));

var _router = _interopRequireDefault(__webpack_require__(2));

var _routes = __webpack_require__(1);

__webpack_require__(12);

var _assert = __webpack_require__(30);

var _reactLazyload = _interopRequireDefault(__webpack_require__(6));

var _PlaceHolder = _interopRequireDefault(__webpack_require__(11));

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
      }, this.state.currentValue && _react.default.createElement(_reactLazyload.default, {
        once: true,
        offset: [-200, 0],
        placeholder: _react.default.createElement(_PlaceHolder.default, null),
        debounce: 0
      }, _react.default.createElement("img", {
        className: "image-detail",
        src: this.state.currentValue.path_for_size,
        alt: this.state.currentValue.name
      }))), _react.default.createElement("div", {
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
      }, provider && _react.default.createElement(_reactLazyload.default, {
        once: true,
        offset: [-200, 0],
        placeholder: _react.default.createElement(_PlaceHolder.default, null),
        debounce: 0
      }, _react.default.createElement("img", {
        src: provider.auth_avatar,
        className: "align-self-start mr-2 rounded-circle detail-user mt-1"
      })), _react.default.createElement("div", {
        className: "media-body"
      }, _react.default.createElement("div", {
        className: "media-content"
      }, provider && _react.default.createElement(_routes.Link, {
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
          className: "img-responsive-wrapper img-responsive-square"
        }, value.small_path && _react.default.createElement(_reactLazyload.default, {
          once: value.once,
          offset: 200,
          placeholder: _react.default.createElement(_PlaceHolder.default, null),
          debounce: 0
        }, _react.default.createElement("img", {
          src: value.small_path,
          className: "img-respontive",
          id: "image-" + value.id,
          width: "71",
          height: "71"
        })))));
      })), _react.default.createElement("div", {
        className: "pt-0"
      }, tag.breadcrumbs && _react.default.createElement(_routes.Link, {
        route: tag.breadcrumbs.uri
      }, _react.default.createElement("a", {
        href: tag.breadcrumbs.uri,
        className: "mr-2"
      }, _react.default.createElement("span", {
        className: "text-center font-12 font-weight-normal badge badge-pill badge-white border border-primary py-2 px-3 mb-2"
      }, tag.breadcrumbs.name_tag))), tag.other && tag.other.map(function (value, index) {
        return value.is_seo == 1 ? _react.default.createElement(_routes.Link, {
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
/* 30 */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(__webpack_require__(8));

var _regenerator = _interopRequireDefault(__webpack_require__(4));

var _react = _interopRequireDefault(__webpack_require__(0));

var _imageDetail = _interopRequireDefault(__webpack_require__(29));

var _layout = _interopRequireDefault(__webpack_require__(9));

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
/* 34 */,
/* 35 */,
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(__webpack_require__(8));

var _react = _interopRequireDefault(__webpack_require__(0));

var _axios = _interopRequireDefault(__webpack_require__(23));

__webpack_require__(12);

var _layout = _interopRequireDefault(__webpack_require__(9));

var _sideBar = _interopRequireDefault(__webpack_require__(25));

var _reactMasonryComponent = _interopRequireDefault(__webpack_require__(37));

var _reactInfiniteScroller = _interopRequireDefault(__webpack_require__(38));

var _imageModal = _interopRequireDefault(__webpack_require__(33));

var _routes = __webpack_require__(1);

var _jquery = _interopRequireDefault(__webpack_require__(3));

var _fscreen_idea = _interopRequireDefault(__webpack_require__(39));

var _reactLazyload = _interopRequireWildcard(__webpack_require__(6));

var _PlaceHolder = _interopRequireDefault(__webpack_require__(11));

var _pagination = _interopRequireDefault(__webpack_require__(26));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var APIURL = "https://api.9houz.com/" + "api/";
var currentPath = '/';
var asPath = '/';

var IdeaComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IdeaComponent, _React$Component);

  function IdeaComponent(props) {
    var _this;

    _classCallCheck(this, IdeaComponent);

    _this = _possibleConstructorReturn(this, (IdeaComponent.__proto__ || Object.getPrototypeOf(IdeaComponent)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        images: [],
        nextUrl: null,
        hasMoreItems: true,
        h1: null,
        filter_default: [],
        listBadge: []
      }
    });
    currentPath = _this.props.path;
    asPath = _this.props.asPath;
    return _this;
  }

  _createClass(IdeaComponent, [{
    key: "loadItems",
    value: function loadItems(page) {
      var self = this;
      var url = '';

      if (this.props.nextUrl) {
        url = this.props.nextUrl;
      }

      if (this.props.nextUrl != null) {
        _axios.default.get(url).then(function (resp) {
          if (resp) {
            var tracks = self.props.images;
            var data = resp.data;
            data.images.data.map(function (track) {
              tracks.push(track);
            });

            if (data.images.next_page_url && data.images.next_page_url != null) {
              self.props.changeState(tracks, data.images.next_page_url);
            } else {
              self.setState({
                hasMoreItems: false
              });
            }
          }
        });
      }
    }
  }, {
    key: "getPageUrl",
    value: function getPageUrl(i) {
      var url = "";

      if (this.props.url_path) {
        url = this.props.url_path;
      }

      return url + "?page=" + i;
    }
  }, {
    key: "showPhoto",
    value: function showPhoto(e, id, slug) {
      e.preventDefault();

      if (this.props.ideaParams) {
        var params = this.props.ideaParams;

        if (this.props.subParams) {
          _routes.Router.push("".concat(currentPath, "?params=").concat(params, "&f=").concat(this.props.subParams, "&photoId=").concat(id, "&slug=").concat(slug), "/anh/".concat(id, "-").concat(slug));
        } else {
          _routes.Router.push("".concat(currentPath, "?params=").concat(params, "&photoId=").concat(id, "&slug=").concat(slug), "/anh/".concat(id, "-").concat(slug));
        }
      } else {
        _routes.Router.push("".concat(currentPath, "?photoId=").concat(id, "&slug=").concat(slug), "/anh/".concat(id, "-").concat(slug));
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var showChar = 150; // How many characters are shown by default

      var ellipsestext = "";
      var moretext = "Xem thêm >";
      var lesstext = "Rút gọn <";
      var self = this;
      (0, _jquery.default)('.moreDes').each(function (e) {
        var content = (0, _jquery.default)(this).html();

        if (content.length > showChar) {
          var c = content.substr(0, showChar);
          var h = content.substr(showChar, content.length - showChar);
          var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
          (0, _jquery.default)(this).html(html);
        }
      });
      (0, _jquery.default)(".morelink").click(function (e) {
        e.preventDefault();

        if ((0, _jquery.default)(this).hasClass("less")) {
          (0, _jquery.default)(this).removeClass("less");
          (0, _jquery.default)(this).html(moretext);
        } else {
          (0, _jquery.default)(this).addClass("less");
          (0, _jquery.default)(this).html(lesstext);
        }

        (0, _jquery.default)(this).parent().prev().toggle();
        (0, _jquery.default)(this).prev().toggle();
        self.masonry.performLayout();
        return false;
      });
      (0, _jquery.default)('.sidebar-service ul').each(function (e) {
        if ((0, _jquery.default)(this).find('li').length == (0, _jquery.default)(this).find((0, _jquery.default)('li:visible')).length) {
          (0, _jquery.default)(this).find('.loadmore').hide();
        }
      });
      (0, _jquery.default)('.sidebar-service').on('click', '.loadmore', function () {
        var list = (0, _jquery.default)(this).parent().find((0, _jquery.default)('li'));
        (0, _jquery.default)(this).parent().find((0, _jquery.default)('li:hidden')).show();

        if (list.length == (0, _jquery.default)(this).parent().find((0, _jquery.default)('li:visible')).length) {
          (0, _jquery.default)(this).removeClass('loadmore');
          (0, _jquery.default)(this).addClass('hidemore');
          (0, _jquery.default)(this).html('Thu gọn');
        }
      });
      (0, _jquery.default)('.sidebar-service').on('click', '.hidemore', function () {
        var list = (0, _jquery.default)(this).parent().find((0, _jquery.default)('li'));
        (0, _jquery.default)(this).parent().find((0, _jquery.default)('li:visible')).slice(5, list.length).hide();
        (0, _jquery.default)(this).removeClass('hidemore');
        (0, _jquery.default)(this).addClass('loadmore');
        (0, _jquery.default)(this).html('Xem thêm');
      });
      (0, _jquery.default)(".close").click(function (event) {
        (0, _jquery.default)(this).parent().toggle();
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      (0, _reactLazyload.forceCheck)();
      (0, _jquery.default)('.idea-content').find((0, _jquery.default)('.moreDes:visible')).hide();
      (0, _jquery.default)('.idea-content').find((0, _jquery.default)('.moreDes')).slice(0, 20).show();
    }
  }, {
    key: "dismissModal",
    value: function dismissModal() {
      if (this.props.ideaParams) {
        var params = this.props.ideaParams;

        if (this.props.subParams) {
          _routes.Router.pushRoute("/y-tuong/".concat(params, "?f=").concat(this.props.subParams));
        } else {
          _routes.Router.pushRoute('idea.detail', {
            params: params
          });
        }
      } else {
        _routes.Router.push('/idea', '/y-tuong');
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var datas = this.props.data.images;
      var nextPageLink = datas.next_page_url ? this.props.url_path + "?page=" + (datas.current_page + 1) : undefined;
      var masonryOptions = {
        gutter: '.grid__gutter-sizer',
        isOriginLeft: true
      };
      var _props = this.props,
          images = _props.images,
          h1 = _props.h1,
          filter_default = _props.filter_default,
          colors = _props.colors,
          listBadge = _props.listBadge,
          detail = _props.detail,
          page = _props.page;
      var _props2 = this.props,
          photoId = _props2.photoId,
          slug = _props2.slug;
      return _react.default.createElement(_layout.default, _extends({}, this.props, {
        navmenu: false,
        container: false,
        css: _fscreen_idea.default
      }), photoId ? _react.default.createElement(_imageModal.default, {
        id: photoId,
        slug: slug,
        detail: detail,
        images: images,
        currentPath: currentPath,
        ideaParams: this.props.ideaParams,
        subParams: this.props.subParams,
        nextPageUrl: this.state.nextUrl,
        onDismiss: function onDismiss() {
          return _this2.dismissModal();
        }
      }) : '', _react.default.createElement(_style.default, {
        styleId: "352178927",
        css: ["#lightbox .nav-link:first-child{border-left:1px solid #e2e2e2 !important;}", "#lightbox .nav-link{display:block;padding:0.4rem 0.7rem !important;border-left:none !important;border-color:#e2e2e2;}"]
      }), _react.default.createElement("div", {
        className: "jsx-352178927" + " " + "container-fluid service px-4 bg-gray"
      }, _react.default.createElement("div", {
        className: "jsx-352178927" + " " + "row"
      }, _react.default.createElement("div", {
        id: "sidebar",
        className: "jsx-352178927" + " " + "col-0 col-md-3 col-lg-3 px-3"
      }, _react.default.createElement(_sideBar.default, {
        filter: filter_default,
        color: colors,
        page: page
      })), _react.default.createElement("div", {
        id: "cat",
        className: "jsx-352178927" + " " + "col-12 col-md-9 col-lg-9 px-0"
      }, _react.default.createElement("div", {
        className: "jsx-352178927" + " " + "bg-white px-3 py-4"
      }, _react.default.createElement("h1", {
        className: "jsx-352178927" + " " + "text-dark title ml-1"
      }, h1 && h1), _react.default.createElement("div", {
        className: "jsx-352178927" + " " + "list-tag"
      }, listBadge && listBadge.map(function (value, index) {
        return _react.default.createElement(_routes.Link, {
          route: value.uri,
          key: index
        }, _react.default.createElement("a", {
          href: value.uri,
          className: "jsx-352178927"
        }, _react.default.createElement("span", {
          className: "jsx-352178927" + " " + "badge badge-pill badge-light border border-primary mr-2 my-1 service-tag"
        }, value.name_tag, _react.default.createElement("i", {
          className: "jsx-352178927" + " " + "close"
        }))));
      })), _react.default.createElement(_reactInfiniteScroller.default, {
        pageStart: 0,
        loadMore: this.loadItems.bind(this),
        hasMore: this.state.hasMoreItems,
        loader: _react.default.createElement("div", {
          key: "cx",
          className: "jsx-352178927" + " " + "loader"
        }, "Loading ...")
      }, _react.default.createElement(_reactMasonryComponent.default, {
        className: '.grid are-images-unloaded mt-3',
        disableImagesLoaded: false,
        options: masonryOptions,
        ref: function ref(c) {
          return _this2.masonry = c;
        },
        updateOnEachImageLoad: false
      }, _react.default.createElement("div", {
        className: "jsx-352178927" + " " + "grid__col-sizer"
      }), _react.default.createElement("div", {
        className: "jsx-352178927" + " " + "grid__gutter-sizer"
      }), images && images.map(function (value, index) {
        return _react.default.createElement("div", {
          key: index,
          className: "jsx-352178927" + " " + "grid__item rounded"
        }, _react.default.createElement("div", {
          className: "jsx-352178927" + " " + "card"
        }, _react.default.createElement("span", {
          className: "jsx-352178927" + " " + "position-absolute rounded d-none upload"
        }, " ", _react.default.createElement("i", {
          className: "jsx-352178927" + " " + "fa fa-upload"
        }), " L\u01B0u \u1EA3nh"), _react.default.createElement(_routes.Link, {
          route: "image",
          params: {
            id: value.id,
            slug: value.slug
          }
        }, _react.default.createElement("a", {
          onClick: function onClick(e) {
            return _this2.showPhoto(e, value.id, value.slug);
          },
          className: "jsx-352178927"
        }, _react.default.createElement(_reactLazyload.default, {
          once: true,
          throttle: true,
          placeholder: _react.default.createElement(_PlaceHolder.default, {
            dataSrc: value.medium_path,
            alt: value.name
          })
        }, _react.default.createElement("img", {
          src: value.medium_path,
          alt: value.name,
          className: "jsx-352178927" + " " + "rounded card-img-top"
        })))), _react.default.createElement("div", {
          className: "jsx-352178927" + " " + "card-body idea-content px-1 pt-1"
        }, _react.default.createElement("h2", {
          "data-title": value.name,
          className: "jsx-352178927" + " " + "mt-2 font-15 text-black-100"
        }, value.name), _react.default.createElement("p", {
          dangerouslySetInnerHTML: {
            __html: value.descriptions
          },
          className: "jsx-352178927" + " " + "mt-2 images-title font-14 text-black-100 moreDes"
        }))));
      })))), _react.default.createElement("div", {
        className: "jsx-352178927" + " " + "pagi_desktop my-4"
      }, _react.default.createElement(_pagination.default, {
        activePage: this.props.data.images.current_page,
        itemsCountPerPage: this.props.data.images.per_page,
        totalItemsCount: this.props.data.images.total,
        pageRangeDisplayed: 5,
        onChange: function onChange(e) {
          return _this2.handlePageChange(e);
        },
        getPageUrl: function getPageUrl(i) {
          return _this2.getPageUrl(i);
        },
        nextPageLink: nextPageLink
      }))))));
    }
  }]);

  return IdeaComponent;
}(_react.default.Component);

exports.default = IdeaComponent;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("react-masonry-component");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("react-infinite-scroller");

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = "*,:after,:before{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-ms-overflow-style:scrollbar}@-ms-viewport{width:device-width}header,nav{display:block}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:1rem;font-weight:400;line-height:1.5;color:#333;text-align:left;background-color:#fff}h1,h2,h3{margin-top:0;margin-bottom:.5rem}p{margin-top:0;margin-bottom:1rem}ul{margin-bottom:1rem}ul{margin-top:0}ul ul{margin-bottom:0}a{color:#b953a4;text-decoration:none;background-color:transparent;-webkit-text-decoration-skip:objects}a:not([href]):not([tabindex]){color:inherit;text-decoration:none}img{border-style:none}label{display:inline-block;margin-bottom:.5rem}button{border-radius:0}button,input{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button{text-transform:none}button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}h1,h2,h3{margin-bottom:.5rem;font-family:inherit;font-weight:500;line-height:1.2;color:inherit}h1{font-size:2.5rem}h2{font-size:2rem}h3{font-size:1.75rem}.list-unstyled{padding-left:0;list-style:none}.container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:576px){.container{max-width:540px}}@media (min-width:768px){.container{max-width:720px}}@media (min-width:992px){.container{max-width:960px}}@media (min-width:1200px){.container{max-width:1140px}}.container-fluid{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.row{display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.col-12,.col-lg-3,.col-lg-9,.col-md-3,.col-md-9,.col-md-12{position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px}.col-12{flex:0 0 100%;max-width:100%}@media (min-width:768px){.col-md-3{flex:0 0 25%;max-width:25%}.col-md-9{flex:0 0 75%;max-width:75%}.col-md-12{flex:0 0 100%;max-width:100%}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.33333%}}@media (min-width:992px){.col-lg-3{flex:0 0 25%;max-width:25%}.col-lg-9{flex:0 0 75%;max-width:75%}}.form-control{display:block;width:100%;padding:.375rem .75rem;font-size:1rem;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem}.form-control::-ms-expand{background-color:transparent;border:0}.collapse:not(.show){display:none}.nav-link{display:block;padding:.5rem 1rem}.navbar{position:relative;padding:.5rem 1rem}.navbar{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between}.navbar-brand{display:inline-block;padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;line-height:inherit;white-space:nowrap}.navbar-nav{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-collapse{flex-basis:100%;flex-grow:1;align-items:center}.navbar-toggler{padding:.25rem .75rem;font-size:1.25rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:.25rem}@media (min-width:768px){.navbar-expand-md{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-md .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}}.navbar-light .navbar-brand{color:hsla(0,0%,7%,.9)}.navbar-light .navbar-nav .nav-link{color:hsla(0,0%,7%,.5)}.navbar-light .navbar-toggler{color:hsla(0,0%,7%,.5);border-color:hsla(0,0%,7%,.1)}.badge{display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem}.badge-pill{padding-right:.6em;padding-left:.6em;border-radius:10rem}.badge-light{color:#212529;background-color:#f3f3f3}.close{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#111;text-shadow:0 1px 0 #fff;opacity:.5}.card{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid hsla(0,0%,7%,.125);border-radius:.25rem}.card-body{flex:1 1 auto;padding:1.25rem}.card-img-top{width:100%;border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.bg-primary{background-color:#b953a4!important}.bg-white{background-color:#fff!important}.border{border:1px solid #dee2e6!important}.border-0{border:0!important}.border-primary{border-color:#b953a4!important}.rounded{border-radius:.25rem!important}.d-none{display:none!important}.d-block{display:block!important}.d-flex{display:flex!important}@media (min-width:576px){.d-sm-none{display:none!important}}@media (min-width:768px){.d-md-none{display:none!important}.d-md-block{display:block!important}}.justify-content-start{justify-content:flex-start!important}.position-relative{position:relative!important}.position-absolute{position:absolute!important}.w-100{width:100%!important}.mb-0{margin-bottom:0!important}.mt-1,.my-1{margin-top:.25rem!important}.my-1{margin-bottom:.25rem!important}.ml-1{margin-left:.25rem!important}.mt-2,.my-2{margin-top:.5rem!important}.mr-2{margin-right:.5rem!important}.my-2{margin-bottom:.5rem!important}.mt-3{margin-top:1rem!important}.mb-3{margin-bottom:1rem!important}.py-0{padding-top:0!important}.px-0{padding-right:0!important}.py-0{padding-bottom:0!important}.px-0{padding-left:0!important}.pt-1,.py-1{padding-top:.25rem!important}.px-1{padding-right:.25rem!important}.pb-1,.py-1{padding-bottom:.25rem!important}.px-1{padding-left:.25rem!important}.p-2{padding:.5rem!important}.px-2{padding-right:.5rem!important}.px-2{padding-left:.5rem!important}.p-3{padding:1rem!important}.py-3{padding-top:1rem!important}.pr-3,.px-3{padding-right:1rem!important}.py-3{padding-bottom:1rem!important}.px-3{padding-left:1rem!important}.py-4{padding-top:1.5rem!important}.px-4{padding-right:1.5rem!important}.py-4{padding-bottom:1.5rem!important}.px-4{padding-left:1.5rem!important}.my-auto{margin-top:auto!important}.mr-auto{margin-right:auto!important}.my-auto{margin-bottom:auto!important}.text-left{text-align:left!important}@media (min-width:768px){.text-md-center{text-align:center!important}}.text-uppercase{text-transform:uppercase!important}.font-weight-light{font-weight:300!important}.font-weight-bold{font-weight:700!important}.text-primary{color:#b953a4!important}.text-dark{color:#343a40!important}.nav-9houzz .navbar-nav{display:block;padding-left:40px!important;padding-right:40px!important}.nav-9houzz .header-menu{padding:0!important}.nav-9houzz .header-menu .nav-item:first-child{margin-left:7%!important}.nav-9houzz .header-menu .nav-item{display:block;padding-left:40px!important;padding-right:40px!important}.nav-9houzz .header-menu .nav-item .nav-link{padding:.5rem!important;font-size:14px!important;color:#fff!important}.nav-9houzz .header-menu .nav-item .nav-prof{position:relative!important}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child{top:4px!important;left:-40px!important;width:270px!important;z-index:11111111111}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child a{color:#666!important}.nav-9houzz .header-menu .nav-item .nav-child{position:absolute;display:none!important;top:100%;left:0;background:#fff;list-style:none;border:1px solid #ddd;border-top:none;padding:10px 14px 20px;z-index:11111111111}.nav-9houzz .header-menu .nav-item .nav-child .nav-idea{width:18%;height:112px;margin:10px;float:left;position:relative;background-position:50%;background-repeat:no-repeat;vertical-align:middle;line-height:112px;background-size:cover!important;color:#fff!important}@media (min-width:768px){.nav-idea{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}}@media (max-width:767.98px){.nav-9houzz{padding-left:0!important;padding-right:0!important}.nav-9houzz .navbar>.navbar-collapse{padding-bottom:20px!important}.nav-9houzz .header-menu,.nav-9houzz .header-menu .nav-item{padding-left:10px!important;padding-right:10px!important}.nav-9houzz .header-menu .nav-child,.nav-9houzz .header-menu .nav-item .nav-child{position:relative!important;top:0!important;display:block!important;overflow:hidden!important}.nav-9houzz .header-menu .nav-item .navbar-toggler,.nav-9houzz .header-menu .navbar-toggler{padding:.25rem!important}.nav-9houzz .header-menu .nav-item .navbar-toggler span,.nav-9houzz .header-menu .navbar-toggler span{font-size:13px!important}.nav-idea{width:90%!important;text-align:center;padding:57px 0;margin:12px auto;float:none;line-height:0!important}.navbar-toggler{border:none!important}.navbar-toggler span{font-size:18px!important;margin-top:3px!important}.nav-9houzz .header-menu .nav-item .nav-child{background:none!important;border:none!important}.nav-9houzz .header-menu .nav-item .nav-child .nav-idea{width:18%;height:0!important;float:left;line-height:112px;text-align:left;padding:0!important;color:#fff!important;margin-bottom:25px}.nav-9houzz .header-menu .nav-item .nav-child .nav-idea{text-transform:none!important;font-size:16px!important;font-weight:400!important}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child{padding-top:0!important;top:0!important;left:0!important;width:100%;-webkit-box-shadow:none;box-shadow:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:11111111111}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child a{color:#fff!important;font-size:16px!important}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child .nav-service{padding-left:0!important;line-height:30px!important}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child .text-left{padding-left:0!important}.nav-9houzz .header-menu .nav-item:first-child{margin-left:0!important}}@media (max-width:767.98px){.widget h3{display:inline-block;font-size:16px!important;font-weight:600!important;line-height:1.25}.widget h3{margin-bottom:10px!important}}span{font-size:13px!important}@media (max-width:575.98px){#sidebar{max-width:100%!important;margin-top:-.5rem!important;border-top:none!important}}#sidebar{max-width:23%!important}.sidebar-service{width:100%;margin-left:5px}.sidebar-service .widget ul{line-height:13px!important}.widget h3{font-weight:600!important;font-size:14px!important}#cat .title{font-size:21px!important;font-weight:400!important}.child-sidebar-service{overflow:hidden;border-bottom:1px solid #e6e6e6}.child-sidebar-service ul{overflow:hidden;clear:both}.child-sidebar-service ul label{color:#333!important;font-size:13px!important;font-weight:400}.child-sidebar-service ul li:nth-child(n+5){display:none}.child-sidebar-service ul .loadmore{float:right;font-size:13px;color:#b953a4!important;margin-top:10px}.child-sidebar-service ul .radio{width:100%;position:relative}.child-sidebar-service ul .radio a{display:block;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;max-width:87%}.child-sidebar-service ul .radio a span{position:absolute;right:0}@media (max-width:767.98px){.service #sidebar{max-width:100%!important;margin-top:.5rem!important;border-top:none!important;margin-bottom:.5rem!important}.sidebar-service{background:none!important}.sidebar-service .sidebar-service-content{padding-left:0!important;padding-right:0!important}.sidebar-service a{color:#000!important;text-decoration:none}.child-sidebar-service{background:#fff!important;padding:.5rem!important;padding-bottom:0!important}.child-sidebar-service .widget{margin-top:0!important;padding:.5rem!important}.child-sidebar-service .widget h3{font-size:17px!important}.child-sidebar-service .widget h3 span{font-size:18px!important}.child-sidebar-service ul li:nth-child(n+5){display:block!important}.child-sidebar-service ul label,.child-sidebar-service ul label span{font-size:16px!important}.child-sidebar-service h3{margin-bottom:.5rem!important;font-size:17px!important}.child-sidebar-service h3 span{position:absolute;right:6px;top:13px;padding:7px}}.service{font-size:13px}.service h3{font-weight:inherit}.service .service-tag{background:#fff;font-size:13px!important;font-weight:lighter;color:#b953a4;padding:8px;padding-right:35px;padding-left:17px;position:relative}.service .service-tag i{position:absolute;right:15px;font-size:13px;top:6px;font-style:normal!important;font-weight:300;color:#b953a4!important;opacity:1!important}.service .service-tag i:before{transform:rotate(45deg)}.service .service-tag i:after{transform:rotate(-45deg)}.service .service-tag i:after,.service .service-tag i:before{position:absolute;left:0;content:\" \";top:0;height:16px;width:2px;background-color:#b953a4}.idea-content h2{font-weight:600!important;font-size:15px!important;line-height:20px!important}img{vertical-align:middle}.card{border:none!important}.grid__col-sizer,.grid__item{width:32.5%}.grid__gutter-sizer{width:1%}.grid__item{margin-bottom:20px;float:left ;padding:8px !important; }.grid__item .upload{padding:.5rem .75rem;background:#fff;top:10px;left:10px;z-index:100}.grid__item img{display:block;max-width:100%;width:100%}@media (min-width:992px) and (max-width:1199.98px){.grid__col-sizer,.grid__item{width:24%}}@media (min-width:768px) and (max-width:991.98px){.grid__col-sizer,.grid__item{width:33%}}@media (max-width:767.98px){.grid__col-sizer,.grid__item{width:99%}.service{padding-right:30px!important;padding-left:15px!important}.service .sidebar-service{width:100%;margin-left:8px}.service .idea-content h2{font-size:16px!important}.service .idea-content p{display:none!important;font-size:15px!important}}";

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
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(51);


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(4));

var _react = _interopRequireDefault(__webpack_require__(0));

var _IdeaComponent = _interopRequireDefault(__webpack_require__(36));

var _router = __webpack_require__(2);

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

var APIURL = "https://api.9houz.com/" + "api/";

var IdeaFilter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IdeaFilter, _React$Component);

  _createClass(IdeaFilter, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_ref) {
        var query, req, res, url_path, data;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query, req = _ref.req;
                res = null;
                url_path = '/y-tuong/' + query.params;

                if (!query.f) {
                  _context.next = 16;
                  break;
                }

                if (!query.page) {
                  _context.next = 10;
                  break;
                }

                _context.next = 7;
                return fetch(APIURL + 'y-tuong/' + encodeURIComponent(query.params) + "?f=".concat(query.f) + "&page=".concat(query.page));

              case 7:
                res = _context.sent;
                _context.next = 13;
                break;

              case 10:
                _context.next = 12;
                return fetch(APIURL + 'y-tuong/' + encodeURIComponent(query.params) + "?f=".concat(query.f));

              case 12:
                res = _context.sent;

              case 13:
                url_path = '/y-tuong/' + query.slug + "?f=".concat(query.f);
                _context.next = 25;
                break;

              case 16:
                if (!query.page) {
                  _context.next = 22;
                  break;
                }

                _context.next = 19;
                return fetch(APIURL + 'y-tuong/' + encodeURIComponent(query.params) + "?page=".concat(query.page));

              case 19:
                res = _context.sent;
                _context.next = 25;
                break;

              case 22:
                _context.next = 24;
                return fetch(APIURL + 'y-tuong/' + encodeURIComponent(query.params));

              case 24:
                res = _context.sent;

              case 25:
                _context.next = 27;
                return res.json();

              case 27:
                data = _context.sent;
                return _context.abrupt("return", {
                  data: data,
                  url_path: url_path,
                  h1: data.h1,
                  filter_default: data.filter_default,
                  colors: data.colors,
                  images: data.images.data,
                  page: data.page,
                  nextUrl: data.images.next_page_url,
                  params: query.params,
                  subParams: query.f,
                  listBadge: data.listBadge,
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

              case 29:
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

  function IdeaFilter(props) {
    var _this;

    _classCallCheck(this, IdeaFilter);

    _this = _possibleConstructorReturn(this, (IdeaFilter.__proto__ || Object.getPrototypeOf(IdeaFilter)).call(this, props));
    _this.state = {
      nextUrl: _this.props.nextUrl,
      images: _this.props.images
    };
    return _this;
  }

  _createClass(IdeaFilter, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps) {
        this.setState({
          nextUrl: nextProps.nextUrl,
          images: nextProps.images
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          params = _props.params,
          router = _props.router,
          subParams = _props.subParams;
      return _react.default.createElement(_IdeaComponent.default, _extends({}, this.props, {
        photoId: this.props.router.query && this.props.router.query.photoId,
        ideaParams: params,
        subParams: subParams,
        asPath: router.asPath,
        nextUrl: this.state.nextUrl,
        images: this.state.images,
        detail: true,
        changeState: function changeState(images, nextPage) {
          _this2.setState({
            images: images,
            nextUrl: nextPage
          });
        },
        path: router.pathname
      }));
    }
  }]);

  return IdeaFilter;
}(_react.default.Component);

var _default = (0, _router.withRouter)(IdeaFilter);

exports.default = _default;

/***/ })
/******/ ]);