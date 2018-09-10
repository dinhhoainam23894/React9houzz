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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Breadcrumbs.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("react"));

var _routes = __webpack_require__("./routes.js");

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/components/Breadcrumbs.js";

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
      var breadcrumb = this.props.breadcrumb;
      return _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, breadcrumb && _react.default.createElement("ol", {
        className: "breadcrumb bg-white mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, breadcrumb.home && _react.default.createElement("li", {
        className: "breadcrumb-item",
        itemScope: true,
        itemType: "http://data-vocabulary.org/Breadcrumb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react.default.createElement(_routes.Link, {
        prefetch: true,
        route: breadcrumb.home.uri,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react.default.createElement("a", {
        itemProp: "url",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react.default.createElement("span", {
        itemProp: "title",
        className: "font-13",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, breadcrumb.home.name)))), breadcrumb.sub_items && _react.default.createElement("li", {
        className: "breadcrumb-item",
        itemScope: true,
        itemType: "http://data-vocabulary.org/Breadcrumb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react.default.createElement(_routes.Link, {
        prefetch: true,
        route: breadcrumb.sub_items.uri,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react.default.createElement("a", {
        itemProp: "url",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react.default.createElement("span", {
        itemProp: "title",
        className: "font-13",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, breadcrumb.sub_items.name))))));
    }
  }]);

  return _default;
}(_react.default.Component);

exports.default = _default;

/***/ }),

/***/ "./components/ListProviderComponent.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("@babel/runtime/regenerator"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _layout = _interopRequireDefault(__webpack_require__("./components/layout.js"));

var _sideBar = _interopRequireDefault(__webpack_require__("./components/sideBar.js"));

var _Breadcrumbs = _interopRequireDefault(__webpack_require__("./components/Breadcrumbs.js"));

var _pagination = _interopRequireDefault(__webpack_require__("./components/pagination.js"));

var _routes = __webpack_require__("./routes.js");

var _jquery = _interopRequireDefault(__webpack_require__("jquery"));

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/components/ListProviderComponent.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
    Object.defineProperty(_assertThisInitialized(_this), "getData", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee(pageNumber) {
          var APIURL, res, data;
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  APIURL = "https://api.9houz.com/" + "api/" + 'danh-sach-chuyen-gia/?page=';
                  _context.next = 3;
                  return fetch(APIURL + pageNumber);

                case 3:
                  res = _context.sent;
                  _context.next = 6;
                  return res.json();

                case 6:
                  data = _context.sent;

                  _this.setState({
                    'providers': data.datas.data
                  });

                case 8:
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
    var datas = _this.props.data.datas;
    _this.state = {
      nextPage: datas.next_page_url,
      nextPageLink: datas.next_page_url ? _this.props.url_path + "?page=" + (datas.current_page + 1) : undefined,
      backPageLink: datas.prev_page_url ? _this.props.url_path + "?page=" + (datas.current_page - 1) : undefined,
      activePage: datas.current_page,
      providers: _this.props.providers
    };
    return _this;
  }

  _createClass(_default, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps) {
        var datas = nextProps.data.datas;
        this.setState({
          nextPage: datas.next_page_url,
          nextPageLink: datas.next_page_url ? this.props.url_path + "?page=" + (datas.current_page + 1) : undefined,
          backPageLink: datas.prev_page_url ? this.props.url_path + "?page=" + (datas.current_page - 1) : undefined,
          activePage: datas.current_page,
          providers: nextProps.providers
        });
      }
    }
  }, {
    key: "handlePageChange",
    value: function handlePageChange(pageNumber) {
      this.setState({
        activePage: pageNumber
      });
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
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          h1 = _props.h1,
          filterDefault = _props.filterDefault,
          page = _props.page,
          breadcrumb = _props.breadcrumb,
          listBadge = _props.listBadge,
          css = _props.css;
      var _state = this.state,
          providers = _state.providers,
          nextPage = _state.nextPage,
          nextPageLink = _state.nextPageLink,
          backPageLink = _state.backPageLink;
      return _react.default.createElement(_layout.default, _extends({}, this.props, {
        navmenu: false,
        container: false,
        css: css,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }), _react.default.createElement("div", {
        className: "container-fluid provider-list px-4 bg-gray",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react.default.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react.default.createElement("div", {
        className: "col-0 col-md-3 col-lg-3 px-3 pt-3",
        id: "sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react.default.createElement(_sideBar.default, {
        filter: filterDefault,
        page: page,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      })), _react.default.createElement("div", {
        className: "col-12 col-md-9 col-lg-9 px-0",
        id: "cat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react.default.createElement("div", {
        className: "px-3 py-2 provider-main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react.default.createElement("div", {
        className: "bg-white py-2 mb-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, breadcrumb && _react.default.createElement(_Breadcrumbs.default, {
        breadcrumb: breadcrumb,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }), _react.default.createElement("h1", {
        className: "text-dark title ml-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, h1 && h1), _react.default.createElement("div", {
        className: "list-tag service ml-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, listBadge && listBadge.map(function (value, index) {
        return _react.default.createElement(_routes.Link, {
          route: value.uri,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          }
        }, _react.default.createElement("a", {
          href: value.uri,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          }
        }, _react.default.createElement("span", {
          className: "badge badge-pill badge-light border border-primary mr-2 my-1 service-tag",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          }
        }, value.name_tag, " ", _react.default.createElement("i", {
          className: "close",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          }
        }))));
      }))), _react.default.createElement("ul", {
        className: "list-unstyled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, providers && providers.map(function (value, index) {
        return _react.default.createElement("li", {
          className: " bg-white media border px-3 py-2 position-relative my-2 mb-4 container",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          }
        }, _react.default.createElement("div", {
          className: "row w-100 provider-content mx-0",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          }
        }, _react.default.createElement("div", {
          className: "col-md-6 col-lg-6 col-12 col-sm-12",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          }
        }, _react.default.createElement("div", {
          className: "media-body position-relative",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          }
        }, _react.default.createElement("div", {
          className: "media-header mt-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          }
        }, _react.default.createElement("div", {
          className: "rounded-circle logo",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          }
        }, _react.default.createElement("img", {
          src: value.auth_avatar,
          className: "img-fluid h-100 rounded-circle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          }
        })), _react.default.createElement("div", {
          className: "media-title ml-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          }
        }, _react.default.createElement(_routes.Link, {
          route: "pro.detail",
          params: {
            id: value.id,
            slug: value.slug
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          }
        }, _react.default.createElement("a", {
          className: "mt-0 mb-1 h6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          }
        }, _react.default.createElement("h2", {
          className: "font-20 text-black-100 font-weight-bold",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          }
        }, value.name))))), _react.default.createElement("div", {
          className: "media-content mt-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          }
        }, _react.default.createElement("div", {
          className: "d-flex pro-info my-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          }
        }, value.total_project > 0 && _react.default.createElement("div", {
          className: "info project-info mr-4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          }
        }, _react.default.createElement("i", {
          className: "fa fa-briefcase my-auto",
          "aria-hidden": "true",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          }
        }), " ", value.total_project, " d\u1EF1 \xE1n"), value.address && _react.default.createElement("div", {
          className: "info location-info",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          }
        }, _react.default.createElement("i", {
          className: "fa fa-map-marker my-auto",
          "aria-hidden": "true",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          }
        }), " ", value.address)), _react.default.createElement("div", {
          className: "text ellipsis",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          }
        }, _react.default.createElement("span", {
          className: "text-concat more font-13 font-weight-light",
          dangerouslySetInnerHTML: {
            __html: value.descriptions
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          }
        }))))), _react.default.createElement("div", {
          className: "col-md-6 col-lg-6 col-12 col-sm-12 images-service position-relative p-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          }
        }, value.projects_intro.length > 0 ? _react.default.createElement("ul", {
          className: "list-unstyled d-flex project-list",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          }
        }, value.projects_intro.map(function (value, index) {
          return _react.default.createElement("li", {
            key: index,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 132
            }
          }, _react.default.createElement(_routes.Link, {
            route: "project.detail",
            params: {
              id: value.id,
              slug: value.slug
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 133
            }
          }, _react.default.createElement("a", {
            className: "mt-0 mb-1 h6 font-14 text-black-100 font-weight-bold",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 134
            }
          }, _react.default.createElement("img", {
            src: value.public_avatar,
            className: "img-fluid",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 135
            }
          }))));
        })) : _react.default.createElement("ul", {
          className: "list-unstyled d-flex project-list",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          }
        }, _react.default.createElement("li", {
          className: "d-flex justify-content-center align-items-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          }
        }, _react.default.createElement("p", {
          className: "text-white font-weight-bold font-20",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          }
        }, "0 C\xD3 D\u1EF0 \xC1N"))))));
      }))), _react.default.createElement("div", {
        className: "pagi_desktop my-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, _react.default.createElement(_pagination.default, {
        activePage: this.state.activePage,
        itemsCountPerPage: this.props.data.datas.per_page,
        totalItemsCount: this.props.data.datas.total,
        pageRangeDisplayed: 3,
        onChange: function onChange(e) {
          return _this2.handlePageChange(e);
        },
        getPageUrl: function getPageUrl(i) {
          return _this2.getPageUrl(i);
        },
        nextPageLink: nextPageLink,
        backPageLink: backPageLink,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }))))));
    }
  }]);

  return _default;
}(_react.default.Component);

exports.default = _default;

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

var _router = _interopRequireDefault(__webpack_require__("next/router"));

var _head = _interopRequireDefault(__webpack_require__("next/head"));

var _routes = __webpack_require__("./routes.js");

var _reactstrap = __webpack_require__("reactstrap");

var _universalCookie = _interopRequireDefault(__webpack_require__("universal-cookie"));

var _package = _interopRequireDefault(__webpack_require__("./package.json"));

var _nav = _interopRequireDefault(__webpack_require__("./components/nav.js"));

var _footer = _interopRequireDefault(__webpack_require__("./components/footer.js"));

var _style = _interopRequireDefault(__webpack_require__("./styles/style.scss"));

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
      return _react.default.createElement(_react.default.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react.default.createElement(_head.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react.default.createElement("meta", {
        charSet: "UTF-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }), _react.default.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }), _react.default.createElement("meta", {
        name: "fragment",
        content: "!",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }), _react.default.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, this.props.title || '9houz'), des && _react.default.createElement("meta", {
        name: "description",
        itemProp: "description",
        content: des,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }), canonical && _react.default.createElement("link", {
        rel: "canonical",
        href: "https://9houz.com" + canonical,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }), title && _react.default.createElement("meta", {
        property: "og:title",
        content: title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }), des && _react.default.createElement("meta", {
        property: "og:description",
        content: des,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }), og_url && _react.default.createElement("meta", {
        property: "og:url",
        content: "https://9houz.com" + og_url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }), url_images && _react.default.createElement("meta", {
        property: "og:image",
        content: url_images,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }), robots && _react.default.createElement("meta", {
        name: "robots",
        content: robots,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }), nextPageLink && _react.default.createElement("link", {
        rel: "next",
        href: "https://9houz.com" + nextPageLink,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }), backPageLink && _react.default.createElement("link", {
        rel: "prev",
        href: "https://9houz.com" + backPageLink,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }), _react.default.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: css
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }), slick && _react.default.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        charset: "UTF-8",
        href: "/vendor/slick.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }), slick && _react.default.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "/vendor/slick-theme.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      })), _react.default.createElement("header", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react.default.createElement("nav", {
        className: "navbar navbar-light navbar-expand-md bg-faded container navbar-9houzz",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
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
          lineNumber: 99
        }
      }, _react.default.createElement("span", {
        className: "fa fa-2x fa-bars text-primary font-22",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      })), _react.default.createElement("div", {
        className: "header-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, _react.default.createElement(_routes.Link, {
        route: "index",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, _react.default.createElement("a", {
        className: "navbar-brand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, _react.default.createElement("img", {
        src: "/images/logo9houz.png",
        alt: "Logo",
        title: "9houzz.com",
        width: "114",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      })))), _react.default.createElement("a", {
        href: "#",
        "data-toggle": "offcanvas",
        className: "d-md-none",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, _react.default.createElement("i", {
        className: "fa fa-user-circle-o font-22  py-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      })), _react.default.createElement("div", {
        className: "collapse navbar-collapse header-right my-2 nav-menu",
        id: "collapse-header-login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, _react.default.createElement("div", {
        className: "header-search d-none d-sm-none d-md-block mr-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, _react.default.createElement("div", {
        className: "input-radius py-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, _react.default.createElement("form", {
        className: "mt-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, _react.default.createElement("input", {
        type: "",
        className: "badge-pill form-control border-0 font-14 px-3",
        name: "",
        placeholder: "\xDD t\u01B0\u1EDFng b\u1EA1n mu\u1ED1n t\xECm ki\u1EBFm...",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }), _react.default.createElement("button", {
        className: "fa fa-search icon-search bg-white border-0",
        "data-toggle": "offcanvas",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }))))))), _react.default.createElement(_nav.default, {
        headerProjects: headerProjects,
        headerCategories: headerCategories,
        dataBase: dataBase,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      })), _react.default.createElement(_meta.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }), _react.default.createElement("div", {
        className: "StoreNavigation-overlay",
        role: "button",
        tabIndex: "0",
        "aria-label": "Close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }), _react.default.createElement(MainBody, {
        navmenu: this.props.navmenu,
        fluid: this.props.fluid,
        container: this.props.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, this.props.children), _react.default.createElement(_footer.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }), _react.default.createElement("script", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }), _react.default.createElement("script", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/esm/popper.min.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }), _react.default.createElement("script", {
        src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }), _react.default.createElement("script", {
        async: true,
        src: "https://cdnjs.cloudflare.com/ajax/libs/js-polyfills/0.1.42/polyfill.min.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
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
            lineNumber: 146
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
            lineNumber: 153
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
            lineNumber: 159
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
      }, dataBase && dataBase.map(function (value, index) {
        return _react.default.createElement("li", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        }, _react.default.createElement(_routes.Link, {
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
        }, _react.default.createElement(_routes.Link, {
          route: value.uri,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          }
        }, _react.default.createElement("a", {
          className: "text-dark font-14",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          }
        }, value.name_tag)));
      }))))))), _react.default.createElement("li", {
        className: "nav-item py-1 px-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react.default.createElement("div", {
        className: "d-flex w-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react.default.createElement("i", {
        className: "fa fa-graduation-cap my-auto",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }), _react.default.createElement("a", {
        className: "nav-link mr-auto",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
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
          lineNumber: 92
        }
      }, _react.default.createElement("span", {
        className: "fa fa-chevron-right ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }))), _react.default.createElement("div", {
        className: "collapse navbar-collapse nav-prof",
        id: "nav-product-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, _react.default.createElement("div", {
        className: "nav-child container",
        role: "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react.default.createElement("div", {
        className: "row py-1 px-2 nav-service d-flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react.default.createElement("div", {
        className: "col-md-12 text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, _react.default.createElement("ul", {
        className: "list-unstyled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, headerCategories && (0, _helpers.mapObject)(headerCategories, function (index, value) {
        return _react.default.createElement("li", {
          className: "mt-1",
          key: value.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          }
        }, _react.default.createElement(_routes.Link, {
          route: value.uri,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          }
        }, _react.default.createElement("a", {
          className: "text-dark font-14",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          }
        }, value.name_tag)));
      }))))))), _react.default.createElement("li", {
        className: "nav-item py-1 px-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, _react.default.createElement("div", {
        className: "d-flex w-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, _react.default.createElement("i", {
        className: "fa fa-pencil-square-o my-auto",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }), _react.default.createElement("a", {
        className: "nav-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, "BLOG"))), _react.default.createElement("li", {
        className: "nav-item py-1 px-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, _react.default.createElement("div", {
        className: "d-flex w-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, _react.default.createElement("i", {
        className: "fa fa-rss my-auto",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }), _react.default.createElement("a", {
        className: "nav-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, "TIN T\u1EE8C"))), _react.default.createElement("li", {
        className: "nav-item py-1 px-1 d-block d-md-none",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, _react.default.createElement("div", {
        className: "d-flex w-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, _react.default.createElement("i", {
        className: "fa fa-info-circle my-auto",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }), _react.default.createElement("a", {
        className: "nav-link mr-auto",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
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
          lineNumber: 132
        }
      }, _react.default.createElement("span", {
        className: "fa fa-chevron-right ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }))), _react.default.createElement("div", {
        className: "collapse navbar-collapse nav-prof",
        id: "nav-product-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, _react.default.createElement("div", {
        className: "nav-child container",
        role: "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, _react.default.createElement("div", {
        className: "row py-1 px-2 nav-service d-flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, _react.default.createElement("div", {
        className: "col-md-12 text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, _react.default.createElement("ul", {
        className: "list-unstyled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, _react.default.createElement(_routes.Link, {
        route: "/about/gioi-thieu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, _react.default.createElement("a", {
        target: "_blank",
        title: "Gi\u1EDBi thi\u1EC7u",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, "Gi\u1EDBi thi\u1EC7u"))), _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, _react.default.createElement("a", {
        target: "_blank",
        title: "Li\xEAn h\u1EC7",
        rel: "nofollow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, "Li\xEAn h\u1EC7")), _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, _react.default.createElement(_routes.Link, {
        route: "/about/chinh-sach-bao-mat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, _react.default.createElement("a", {
        href: "#",
        target: "_blank",
        title: "Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, "Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt"))), _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, _react.default.createElement(_routes.Link, {
        route: "/about/dieu-khoan-su-dung",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, _react.default.createElement("a", {
        href: "#",
        target: "_blank",
        title: "\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, "\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng")))))))))))));
    }
  }]);

  return nav;
}(_react.default.Component);

exports.default = nav;

/***/ }),

/***/ "./components/page.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("prop-types"));

var _classnames = _interopRequireDefault(__webpack_require__("classnames"));

var _routes = __webpack_require__("./routes.js");

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/components/page.js";

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
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react.default.createElement(_routes.Link, {
        prefetch: true,
        route: href,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react.default.createElement("a", {
        className: linkCss,
        href: href,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, pageText)));
    }
  }]);

  return Page;
}(_react.Component);

exports.default = Page;
Object.defineProperty(Page, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    pageText: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
    pageNumber: _propTypes.default.number.isRequired,
    onClick: _propTypes.default.func.isRequired,
    isActive: _propTypes.default.bool.isRequired,
    isDisabled: _propTypes.default.bool,
    activeClass: _propTypes.default.string,
    activeLinkClass: _propTypes.default.string,
    itemClass: _propTypes.default.string,
    linkClass: _propTypes.default.string,
    disabledClass: _propTypes.default.string,
    href: _propTypes.default.string
  }
});
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

/***/ "./components/pagination.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("react"));

var _propTypes = _interopRequireDefault(__webpack_require__("prop-types"));

var _paginator = _interopRequireDefault(__webpack_require__("paginator"));

var _page = _interopRequireDefault(__webpack_require__("./components/page.js"));

var _classnames = _interopRequireDefault(__webpack_require__("classnames"));

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/components/pagination.js";

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
          activeLinkClass: activeLinkClass,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          }
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
        href: backPageLink,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
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
        href: nextPageLink,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
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
        className: this.props.innerClass,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }, pages);
    }
  }]);

  return Pagination;
}(_react.default.Component);

exports.default = Pagination;
Object.defineProperty(Pagination, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    totalItemsCount: _propTypes.default.number.isRequired,
    onChange: _propTypes.default.func.isRequired,
    activePage: _propTypes.default.number,
    itemsCountPerPage: _propTypes.default.number,
    pageRangeDisplayed: _propTypes.default.number,
    prevPageText: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
    nextPageText: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
    lastPageText: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
    firstPageText: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
    disabledClass: _propTypes.default.string,
    hideDisabled: _propTypes.default.bool,
    hideNavigation: _propTypes.default.bool,
    innerClass: _propTypes.default.string,
    itemClass: _propTypes.default.string,
    itemClassFirst: _propTypes.default.string,
    itemClassPrev: _propTypes.default.string,
    itemClassNext: _propTypes.default.string,
    itemClassLast: _propTypes.default.string,
    linkClass: _propTypes.default.string,
    activeClass: _propTypes.default.string,
    activeLinkClass: _propTypes.default.string,
    linkClassFirst: _propTypes.default.string,
    linkClassPrev: _propTypes.default.string,
    linkClassNext: _propTypes.default.string,
    linkClassLast: _propTypes.default.string,
    hideFirstLastPages: _propTypes.default.bool,
    getPageUrl: _propTypes.default.func
  }
});
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

/***/ "./components/sideBar.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("react"));

var _helpers = __webpack_require__("./libraries/helpers.js");

var _routes = __webpack_require__("./routes.js");

var _classnames = _interopRequireDefault(__webpack_require__("classnames"));

var _jquery = _interopRequireDefault(__webpack_require__("jquery"));

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/components/sideBar.js";

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
        className: "sidebar-service row bg-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react.default.createElement("div", {
        className: "d-md-block px-2 w-100 sidebar-service-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, this.props.test && _react.default.createElement("div", {
        "class": "child-sidebar-service pb-1 col-12 offset-md-0 col-md-12 px-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react.default.createElement("div", {
        "class": "mt-2 widget p-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react.default.createElement("h3", {
        "class": "font-15 mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, "Locale ", _react.default.createElement("span", {
        "class": "fa fa-chevron-right d-block d-md-none",
        "data-toggle": "collapse",
        "data-target": "#demoTest",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      })), _react.default.createElement("ul", {
        "class": "list-unstyled mb-0 collapse d-md-block",
        id: "demoTest",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react.default.createElement("li", {
        "class": "py-1 radio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react.default.createElement("a", {
        href: "",
        "class": "font-13 font-weight-light text-gray",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react.default.createElement("label", {
        "class": "px-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, "H\xE0 N\u1ED9i", _react.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, "10")))), _react.default.createElement("li", {
        "class": "py-1 radio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react.default.createElement("a", {
        href: "",
        "class": "font-13 font-weight-light text-gray",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react.default.createElement("label", {
        "class": "px-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, "TPHCM", _react.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, "20")))), _react.default.createElement("li", {
        "class": "py-1 radio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react.default.createElement("a", {
        href: "",
        "class": "font-13 font-weight-light text-gray",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react.default.createElement("label", {
        "class": "px-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, "\u0110\xE0 N\u1EAFng", _react.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, "11")))), _react.default.createElement("li", {
        "class": "py-1 radio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react.default.createElement("a", {
        href: "",
        "class": "font-13 font-weight-light text-gray",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react.default.createElement("label", {
        "class": "px-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, "Ninh B\xECnh", _react.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, "12")))), _react.default.createElement("li", {
        "class": "py-1 radio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react.default.createElement("a", {
        href: "",
        "class": "font-13 font-weight-light text-gray",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react.default.createElement("label", {
        "class": "px-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, "H\xE0 T\u0129nh", _react.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, "21")))), _react.default.createElement("li", {
        "class": "py-1 radio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react.default.createElement("a", {
        href: "",
        "class": "font-13 font-weight-light text-gray",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react.default.createElement("label", {
        "class": "px-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, "H\xE0 Nam", _react.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, "21")))), _react.default.createElement("li", {
        "class": "py-1 radio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react.default.createElement("a", {
        href: "",
        "class": "font-13 font-weight-light text-gray",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react.default.createElement("label", {
        "class": "px-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, "B\u1EAFc Ninh", _react.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, "23")))), _react.default.createElement("li", {
        "class": "py-1 radio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react.default.createElement("a", {
        href: "",
        "class": "font-13 font-weight-light text-gray",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, " ", _react.default.createElement("label", {
        "class": "px-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, "Qu\xE3ng Ng\xE3i", _react.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, "44")))), _react.default.createElement("li", {
        "class": "py-1 radio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react.default.createElement("a", {
        href: "",
        "class": "font-13 font-weight-light text-gray",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, " ", _react.default.createElement("label", {
        "class": "px-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, "Nam \u0110\u1ECBnh", _react.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, "12")))), _react.default.createElement("li", {
        "class": "py-1 radio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react.default.createElement("a", {
        href: "",
        "class": "font-13 font-weight-light text-gray",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react.default.createElement("label", {
        "class": "px-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, "Th\xE1i B\xECnh", _react.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, "12")))), _react.default.createElement("span", {
        "class": "more loadmore d-none d-md-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, "Xem th\xEAm ", _react.default.createElement("i", {
        "class": "la la-arrow-circle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }))))), filter && filter.map(function (value, index) {
        return value.data.length != 0 && _react.default.createElement("div", {
          className: "child-sidebar-service pb-1 col-12 offset-md-0 col-md-12 px-0",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }, _react.default.createElement("div", {
          className: "mt-2 widget p-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        }, _react.default.createElement("h3", {
          className: "font-15 mb-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        }, value.textName, _react.default.createElement("span", {
          className: "fa fa-chevron-right d-block d-md-none",
          "data-toggle": "collapse",
          "data-target": "#demo" + index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        })), _react.default.createElement("ul", {
          className: "list-unstyled mb-0 collapse d-md-block",
          id: "demo" + index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          }
        }, value.data && (0, _helpers.mapObject)(value.data, function (index, value) {
          return _react.default.createElement("li", {
            className: "py-1 radio",
            key: index,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            }
          }, _react.default.createElement(_routes.Link, {
            prefetch: true,
            route: value.uri,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            }
          }, _react.default.createElement("a", {
            className: "font-13 font-weight-light text-gray",
            rel: value.is_seo == 0 ? "nofollow" : "dofollow",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 69
            }
          }, _react.default.createElement("label", {
            className: (0, _classnames.default)('pr-3', {
              active: page.currentsId.includes(value.original)
            }),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            }
          }, value.name_tag, _react.default.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 71
            }
          }, value.total_doc)))));
        }), _react.default.createElement("span", {
          className: "more loadmore d-none d-md-block",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          }
        }, "Xem th\xEAm ", _react.default.createElement("i", {
          className: "la la-arrow-circle-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          }
        })))));
      }), _react.default.createElement("div", {
        className: "child-sidebar-service pb-1 col-12 offset-md-0 col-md-12 px-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, color && _react.default.createElement("div", {
        className: "mt-2 widget p-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react.default.createElement("h3", {
        className: "font-15",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, "M\xC0U S\u1EAEC"), _react.default.createElement("span", {
        className: "expand-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }), _react.default.createElement("div", {
        className: "service-color mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, (0, _helpers.mapObject)(color, function (index, value) {
        return _react.default.createElement("a", {
          href: value.uri,
          className: "text-dark border border-gray",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          }
        }, _react.default.createElement("span", {
          className: "float-left " + value.class,
          "data-toggle": "tooltip",
          title: value.name_tag,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          }
        }));
      }))))));
    }
  }]);

  return Sidebar;
}(_react.default.Component);

exports.default = Sidebar;

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

module.exports = {"name":"create-next-example-app","scripts":{"dev":"node server.js","build":"next build","start":"NODE_ENV=production node server.js","prod":"next build ; NODE_ENV=production node server.js"},"dependencies":{"@zeit/next-css":"^0.2.0","@zeit/next-sass":"^0.2.0","@zeit/next-typescript":"^1.1.0","axios":"^0.18.0","babel-plugin-inline-import":"^3.0.0","babel-plugin-module-resolver":"^3.1.1","bootstrap":"^4.1.1","classnames":"^2.2.6","css-loader":"^0.28.11","dotenv":"^6.0.0","es6-promise":"^4.2.4","express":"^4.16.3","font-awesome":"^4.7.0","ionicons":"^4.2.4","isomorphic-fetch":"^2.2.1","jquery":"^3.3.1","lru-cache":"^4.1.3","merge-files-webpack-plugin":"^1.1.2","next":"^6.1.1","next-compose":"0.0.2","next-routes":"^1.4.2","nprogress":"^0.2.0","popper.js":"^1.14.3","postcss-loader":"^2.1.6","prop-types":"^15.6.2","purify-css":"^1.2.5","purifycss-webpack":"^0.7.0","raw-loader":"^0.5.1","react":"^16.4.1","react-breadcrumbs-dynamic":"^1.1.1","react-document-meta":"^3.0.0-beta.2","react-dom":"^16.4.1","react-helmet":"^5.2.0","react-infinite":"^0.13.0","react-infinite-scroller":"^1.2.0","react-js-pagination":"^3.0.2","react-masonry-component":"^6.2.1","react-modal":"^3.5.1","react-responsive-carousel":"^3.1.41","react-router-dom":"^4.3.1","react-slick":"^0.23.1","react-through":"^1.1.1","reactstrap":"^6.3.0","serve-favicon":"^2.5.0","slick-carousel":"^1.8.1","style-loader":"^0.21.0","styled-jsx":"^2.2.7","styled-jsx-css-loader":"^0.3.0","styled-jsx-plugin-sass":"^0.2.4","tunnel-agent":"^0.6.0","universal-cookie":"^2.2.0","webpack":"^3.10.0"},"devDependencies":{"@babel/core":"^7.0.0-beta.53","babel-preset-env":"^1.7.0","create-next":"^0.1.4","node-sass":"^4.9.2","sass-loader":"^7.0.3","targets-webpack-plugin":"^1.0.3"}}

/***/ }),

/***/ "./pages/pro/list-provider.css":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = ":root{--blue: #3baac6;--indigo: #664cc7;--purple: #b953a4;--pink: #e83e8c;--red: #f33b3b;--orange: #f90;--yellow: #fc0;--green: #00a888;--teal: #47be84;--cyan: #4cb1c7;--white: #fff;--gray: #6c757d;--gray-dark: #343a40;--primary: #b953a4;--secondary: #6c757d;--success: #00a888;--info: #4cb1c7;--warning: #fc0;--danger: #f33b3b;--light: #f3f3f3;--dark: #343a40;--breakpoint-xs: 0;--breakpoint-sm: 576px;--breakpoint-md: 768px;--breakpoint-lg: 992px;--breakpoint-xl: 1200px;--font-family-sans-serif: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";--font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace}*,*::before,*::after{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-ms-overflow-style:scrollbar}@-ms-viewport{width:device-width}header,nav{display:block}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";font-size:1rem;font-weight:400;line-height:1.5;color:#333;text-align:left;background-color:#fff}h1,h3{margin-top:0;margin-bottom:.5rem}ul{margin-top:0;margin-bottom:1rem}ul ul{margin-bottom:0}a{color:#b953a4;text-decoration:none;background-color:transparent;-webkit-text-decoration-skip:objects}a:not([href]):not([tabindex]){color:inherit;text-decoration:none}img{vertical-align:middle;border-style:none}label{display:inline-block;margin-bottom:.5rem}button{border-radius:0}input,button{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button{text-transform:none}button,html [type=\"button\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner{padding:0;border-style:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}h1,h3,.h6{margin-bottom:.5rem;font-family:inherit;font-weight:500;line-height:1.2;color:inherit}h1{font-size:2.5rem}h3{font-size:1.75rem}.h6{font-size:1rem}.list-unstyled{padding-left:0;list-style:none}.img-fluid{max-width:100%;height:auto}.container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:576px){.container{max-width:540px}}@media (min-width:768px){.container{max-width:720px}}@media (min-width:992px){.container{max-width:960px}}@media (min-width:1200px){.container{max-width:1140px}}.container-fluid{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.row{display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.col-12,.col-sm-12,.col-md-3,.col-md-6,.col-md-9,.col-md-12,.col-lg-3,.col-lg-6,.col-lg-9{position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px}.col-12{flex:0 0 100%;max-width:100%}@media (min-width:576px){.col-sm-12{flex:0 0 100%;max-width:100%}}@media (min-width:768px){.col-md-3{flex:0 0 25%;max-width:25%}.col-md-6{flex:0 0 50%;max-width:50%}.col-md-9{flex:0 0 75%;max-width:75%}.col-md-12{flex:0 0 100%;max-width:100%}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.33333%}}@media (min-width:992px){.col-lg-3{flex:0 0 25%;max-width:25%}.col-lg-6{flex:0 0 50%;max-width:50%}.col-lg-9{flex:0 0 75%;max-width:75%}}.form-control{display:block;width:100%;padding:.375rem .75rem;font-size:1rem;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem}.form-control::-ms-expand{background-color:transparent;border:0}.collapse:not(.show){display:none}.nav-link{display:block;padding:.5rem 1rem}.navbar{position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding:.5rem 1rem}.navbar-brand{display:inline-block;padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;line-height:inherit;white-space:nowrap}.navbar-nav{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-collapse{flex-basis:100%;flex-grow:1;align-items:center}.navbar-toggler{padding:.25rem .75rem;font-size:1.25rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:.25rem}@media (min-width:768px){.navbar-expand-md{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-md .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}}.navbar-light .navbar-brand{color:rgba(17,17,17,0.9)}.navbar-light .navbar-nav .nav-link{color:rgba(17,17,17,0.5)}.navbar-light .navbar-toggler{color:rgba(17,17,17,0.5);border-color:rgba(17,17,17,0.1)}.badge-pill{padding-right:.6em;padding-left:.6em;border-radius:10rem}.media{display:flex;align-items:flex-start}.media-body{flex:1}.bg-primary{background-color:#b953a4!important}.bg-white{background-color:#fff!important}.border{border:1px solid #dee2e6!important}.border-0{border:0!important}.rounded-circle{border-radius:50%!important}.d-none{display:none!important}.d-block{display:block!important}.d-flex{display:flex!important}@media (min-width:576px){.d-sm-none{display:none!important}}@media (min-width:768px){.d-md-none{display:none!important}.d-md-block{display:block!important}}.justify-content-start{justify-content:flex-start!important}.position-relative{position:relative!important}.w-100{width:100%!important}.h-100{height:100%!important}.mt-0{margin-top:0!important}.mx-0{margin-right:0!important}.mb-0{margin-bottom:0!important}.mx-0{margin-left:0!important}.mt-1{margin-top:.25rem!important}.mb-1{margin-bottom:.25rem!important}.mt-2,.my-2{margin-top:.5rem!important}.my-2{margin-bottom:.5rem!important}.mt-3{margin-top:1rem!important}.mb-3{margin-bottom:1rem!important}.ml-3{margin-left:1rem!important}.mr-4{margin-right:1.5rem!important}.mb-4{margin-bottom:1.5rem!important}.py-0{padding-top:0!important}.px-0{padding-right:0!important}.py-0{padding-bottom:0!important}.px-0{padding-left:0!important}.py-1{padding-top:.25rem!important}.px-1{padding-right:.25rem!important}.pb-1,.py-1{padding-bottom:.25rem!important}.px-1{padding-left:.25rem!important}.p-2{padding:.5rem!important}.py-2{padding-top:.5rem!important}.px-2{padding-right:.5rem!important}.py-2{padding-bottom:.5rem!important}.px-2{padding-left:.5rem!important}.p-3{padding:1rem!important}.py-3{padding-top:1rem!important}.pr-3,.px-3{padding-right:1rem!important}.py-3{padding-bottom:1rem!important}.px-3{padding-left:1rem!important}.px-4{padding-right:1.5rem!important}.px-4{padding-left:1.5rem!important}.my-auto{margin-top:auto!important}.mr-auto{margin-right:auto!important}.my-auto{margin-bottom:auto!important}.text-left{text-align:left!important}@media (min-width:768px){.text-md-center{text-align:center!important}}.text-uppercase{text-transform:uppercase!important}.font-weight-light{font-weight:300!important}.font-weight-bold{font-weight:700!important}.text-primary{color:#b953a4!important}.text-dark{color:#343a40!important}.header-search{position:relative;width:550px;margin-left:15px;display:block}.header-search .input-radius{width:100%;height:40px;border:1px solid #ddd!important}.header-search .icon-search{position:absolute;right:10px;top:22%;color:#b953a4;z-index:10;font-weight:lighter}.header-left{padding:0!important}.StoreNavigation-overlay{position:fixed;top:0;left:-999px;width:100%;height:100%;-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";background:rgba(0,0,0,0.8);overflow:hidden;z-index:1111;opacity:0;display:none}@media (min-width:1300px){.container{max-width:1265px}}@media (min-width:768px) and (max-width:992px){.container{max-width:868px}}@media (min-width:768px) and (max-width:991.98px){.header-search{margin-left:50px!important}}@media (min-width:576px) and (max-width:767.98px){.navbar-9houzz{max-width:100%}header{height:60px!important}}@media (max-width:575.98px){header{height:60px!important}}.living-room{background-image:url(\"/static/images/outdoor-room.png\")!important}.kitchen{background-image:url(\"/static/images/kitchen.png\")!important}.bedroom{background-image:url(\"/static/images/bedroom.png\")!important}.bathroom{background-image:url(\"/static/images/bathroom.png\")!important}.workroom{background-image:url(\"/static/images/workroom.png\")!important}.baby-room{background-image:url(\"/static/images/babyroom.png\")!important}.outdoor-room{background-image:url(\"/static/images/outdoor-room.png\")!important}header{position:relative;height:105px;background:white;z-index:1000000}.nav-9houzz{background-color:#b953a4!important;color:white;position:relative;margin-left:0!important;margin-right:0!important}.nav-9houzz .navbar-nav{display:block;padding-left:40px!important;padding-right:40px!important}.nav-9houzz .header-menu{padding:0!important}.nav-9houzz .header-menu .nav-item:first-child{margin-left:7%!important}.nav-9houzz .header-menu .nav-item{display:block;padding-left:40px!important;padding-right:40px!important}.nav-9houzz .header-menu .nav-item .nav-link{padding:0.5rem 0.5rem!important;font-size:14px!important;color:white!important}.nav-9houzz .header-menu .nav-item .nav-prof{position:relative!important}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child{top:4px!important;left:-40px!important;width:270px!important;z-index:11111111111}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child a{color:#666!important}.nav-9houzz .header-menu .nav-item .nav-child{position:absolute;display:none!important;top:100%;left:0;background:white;list-style:none;border:1px solid #ddd;border-top:none;padding:10px 14px 20px;z-index:11111111111}.nav-9houzz .header-menu .nav-item .nav-child .nav-idea{width:18%;height:112px;margin:10px 10px;float:left;position:relative;background-position:center;background-repeat:no-repeat;vertical-align:middle;line-height:112px;background-size:cover!important;color:white!important}@media (min-width:768px){.nav-idea{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}}@media (max-width:767.98px){.nav-9houzz{padding-left:0!important;padding-right:0!important}.nav-9houzz .navbar>.navbar-collapse{padding-bottom:20px!important}.nav-9houzz .header-menu,.nav-9houzz .header-menu .nav-item{padding-left:10px!important;padding-right:10px!important}.nav-9houzz .header-menu .nav-child,.nav-9houzz .header-menu .nav-item .nav-child{position:relative!important;top:0!important;display:block!important;overflow:hidden!important}.nav-9houzz .header-menu .navbar-toggler,.nav-9houzz .header-menu .nav-item .navbar-toggler{padding:0.25rem 0.25rem!important}.nav-9houzz .header-menu .navbar-toggler span,.nav-9houzz .header-menu .nav-item .navbar-toggler span{font-size:13px!important}.nav-idea{width:90%!important;text-align:center;padding:57px 0px;margin:12px auto;float:none;line-height:0!important}.navbar-toggler{border:none!important}.navbar-toggler span{font-size:18px!important;margin-top:3px!important}.nav-9houzz .header-menu .nav-item .nav-child{background:none!important;border:none!important}.nav-9houzz .header-menu .nav-item .nav-child .nav-idea{width:18%;height:0!important;float:left;line-height:112px;text-align:left;padding:0px!important;color:white!important;text-transform:none!important;font-size:16px!important;margin-bottom:25px;font-weight:400!important}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child{padding-top:0!important;top:0px!important;left:0px!important;width:100%;-webkit-box-shadow:none;box-shadow:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:11111111111}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child a{color:#fff!important;font-size:16px!important}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child .nav-service{padding-left:0!important;line-height:30px!important}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child .text-left{padding-left:0!important}.nav-9houzz .header-menu .nav-item:first-child{margin-left:0%!important}}@media (max-width:767.98px){.widget h3{display:inline-block;font-size:16px!important;font-weight:600!important;line-height:1.25;margin-bottom:10px!important}}.project-list a{font-family:Roboto-Light!important;font-size:12px!important}span{font-size:13px!important}@media (max-width:575.98px){#sidebar{max-width:100%!important;margin-top:-0.5rem!important;border-top:none!important}}.provider-list .media{border:1px solid #e8e8e8!important}.provider-list .media .media-header{display:flex}.provider-list .media .media-header .logo{width:45px;height:45px}.provider-list .media img{width:100%;height:auto;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}.provider-list .media .media-title a{font-size:20px!important;font-weight:600}.provider-list .media .media-content .pro-info .info{font-size:14px!important;color:#6f7293}.provider-list .media .media-content .pro-info .info i{color:#b953a4!important;margin-right:5px}.provider-list .media .media-content .text{position:relative;font-weight:lighter!important;font-size:14px;color:#333;width:100%}.provider-list .media .media-content .text-concat{position:relative;display:inline-block;word-wrap:break-word;overflow:hidden;max-height:2.9em;line-height:1.5em;text-align:justify}.provider-list .media .media-content .text.ellipsis::after{content:\"...\";position:absolute;right:-13px;bottom:5px}.provider-list .child-sidebar-service{border-bottom:none}.provider-list .child-sidebar-service ul li:nth-child(n+5){display:block!important}.provider-list .child-sidebar-service .loadmore{display:none!important}.provider-list .child-sidebar-service .widget h3{font-size:16px!important}.provider-list .project-list li{float:left;background:#808080;margin-right:0.75rem;height:155px!important;width:33%;min-height:155px!important}.provider-list .project-list li img{width:100%;height:100%;object-fit:cover;object-position:center center}img{vertical-align:middle}@media (max-width:767.98px){.service{padding-right:30px!important;padding-left:15px!important}}#sidebar{max-width:23%}.sidebar-service{width:100%;margin-left:5px}.sidebar-service .widget ul{line-height:13px!important}.widget h3{font-weight:600!important;font-size:14px!important}#cat .title{font-size:21px!important;font-weight:400!important}.child-sidebar-service{overflow:hidden;border-bottom:1px solid #e6e6e6}.child-sidebar-service ul{overflow:hidden;clear:both}.child-sidebar-service ul label{color:#333!important;font-size:13px!important;font-weight:400}.child-sidebar-service ul li:nth-child(n+5){display:none}.child-sidebar-service ul .loadmore{float:right;font-size:13px;color:#b953a4!important;margin-top:10px}.child-sidebar-service ul .radio{width:100%;position:relative}.child-sidebar-service ul .radio a{display:block;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;max-width:87%}.child-sidebar-service ul .radio a span{position:absolute;right:0}@media (max-width:767.98px){.media{padding:0!important}.media .images-service{margin:0!important}.media .media-body{padding-left:2rem}.sidebar-service{background:none!important}.sidebar-service .sidebar-service-content{padding-left:0!important;padding-right:0!important}.sidebar-service a{color:black!important;text-decoration:none}.child-sidebar-service{background:#fff!important;padding:0.5rem!important;padding-bottom:0!important}.child-sidebar-service .widget{margin-top:0!important;padding:0.5rem!important}.child-sidebar-service .widget h3{font-size:17px!important}.child-sidebar-service .widget h3 span{font-size:18px!important}.child-sidebar-service ul li:nth-child(n+5){display:block!important}.child-sidebar-service ul label{font-size:16px!important}.child-sidebar-service ul label span{font-size:16px!important}.child-sidebar-service h3{margin-bottom:0.5rem!important;font-size:17px!important}.child-sidebar-service h3 span{position:absolute;right:6px;top:13px;padding:7px}}.service{font-size:13px}@media (max-width:767.98px){.media-body{margin-top:1rem}}img{vertical-align:middle}@media (max-width:767.98px){.service{padding-right:30px!important;padding-left:15px!important}}";

/***/ }),

/***/ "./pages/pro/list-provider.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("@babel/runtime/regenerator"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _layout = _interopRequireDefault(__webpack_require__("./components/layout.js"));

var _sideBar = _interopRequireDefault(__webpack_require__("./components/sideBar.js"));

__webpack_require__("isomorphic-fetch");

var _ListProviderComponent = _interopRequireDefault(__webpack_require__("./components/ListProviderComponent.js"));

var _listProvider = _interopRequireDefault(__webpack_require__("./pages/pro/list-provider.css"));

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/pages/pro/list-provider.js";

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

var APIURL = "https://api.9houz.com/" + "api/" + 'danh-sach-chuyen-gia/';

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
        var query, res, data, url_path;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                res = null;

                if (!query.page) {
                  _context.next = 8;
                  break;
                }

                _context.next = 5;
                return fetch(APIURL + "?page=".concat(query.page));

              case 5:
                res = _context.sent;
                _context.next = 11;
                break;

              case 8:
                _context.next = 10;
                return fetch(APIURL);

              case 10:
                res = _context.sent;

              case 11:
                _context.next = 13;
                return res.json();

              case 13:
                data = _context.sent;
                url_path = '/danh-sach-chuyen-gia/';
                return _context.abrupt("return", {
                  data: data,
                  providers: data.datas.data,
                  title: data.seo ? data.seo.title : null,
                  des: data.seo ? data.seo.des : null,
                  canonical: data.seo ? data.seo.canonical : null,
                  robots: data.seo ? data.seo.robots : null,
                  og_url: data.seo ? data.seo.url : null,
                  url_images: data.seo ? data.seo.url_image : null,
                  headerProjects: data.headerProjects,
                  headerCategories: data.headerCategories,
                  dataBase: data.dataBase,
                  h1: data.h1,
                  filterDefault: data.filter_default,
                  page: data.page,
                  url_path: url_path
                });

              case 16:
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
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_ListProviderComponent.default, _extends({}, this.props, {
        detail: true,
        css: _listProvider.default,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }));
    }
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

/***/ "./styles/style.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/pro/list-provider.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

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

/***/ "paginator":
/***/ (function(module, exports) {

module.exports = require("paginator");

/***/ }),

/***/ "path-to-regexp":
/***/ (function(module, exports) {

module.exports = require("path-to-regexp");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

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
//# sourceMappingURL=list-provider.js.map