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

/***/ "./components/IdeaComponent.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("react"));

var _axios = _interopRequireDefault(__webpack_require__("axios"));

__webpack_require__("isomorphic-fetch");

var _layout = _interopRequireDefault(__webpack_require__("./components/layout.js"));

var _reactMasonryComponent = _interopRequireDefault(__webpack_require__("react-masonry-component"));

var _reactInfiniteScroller = _interopRequireDefault(__webpack_require__("react-infinite-scroller"));

var _imageModal = _interopRequireDefault(__webpack_require__("./components/image-modal.js"));

var _helpers = __webpack_require__("./libraries/helpers.js");

var _routes = __webpack_require__("./routes.js");

var _jquery = _interopRequireDefault(__webpack_require__("jquery"));

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/components/IdeaComponent.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var APIURL = "http://9houzz.stag:89/" + "api/";
var currentPath = '/';
var asPath = '/'; // import Router from 'next/router'

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
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        h1: this.props.h1,
        filter_default: this.props.filter_default,
        color: this.props.colors,
        images: this.props.images,
        nextUrl: this.props.nextUrl,
        listBadge: this.props.listBadge ? this.props.listBadge : []
      });
    }
  }, {
    key: "loadItems",
    value: function loadItems(page) {
      var self = this;
      var url = '';

      if (this.state.nextUrl) {
        url = this.state.nextUrl;
      }

      if (this.state.nextUrl != null) {
        _axios.default.get(url).then(function (resp) {
          if (resp) {
            var tracks = self.state.images;
            var data = resp.data;
            data.images.data.map(function (track) {
              tracks.push(track);
            });

            if (data.images.next_page_url && data.images.next_page_url != null) {
              self.setState({
                images: tracks,
                nextUrl: data.images.next_page_url
              });
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
    key: "showPhoto",
    value: function showPhoto(e, id, slug) {
      e.preventDefault();

      if (this.props.ideaParams) {
        var params = this.props.ideaParams;

        if (this.props.subParams) {
          _routes.Router.pushRoute("/y-tuong/".concat(params, "?f=").concat(this.props.subParams, "&photoId=").concat(id, "&slug=").concat(slug), "/anh/".concat(id, "-").concat(slug));
        } else {
          _routes.Router.push("".concat(currentPath, "?params=").concat(params, "&photoId=").concat(id, "&slug=").concat(slug), "/anh/".concat(id, "-").concat(slug));
        }
      } else {
        _routes.Router.push("".concat(currentPath, "?photoId=").concat(id, "&slug=").concat(slug), "/anh/".concat(id, "-").concat(slug));
      }
    }
  }, {
    key: "dismissModal",
    value: function dismissModal(id) {
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
        _routes.Router.push(currentPath, asPath);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var masonryOptions = {
        gutter: '.grid__gutter-sizer',
        isOriginLeft: true
      };
      var _state = this.state,
          images = _state.images,
          h1 = _state.h1,
          filter_default = _state.filter_default,
          color = _state.color,
          listBadge = _state.listBadge;
      var _props = this.props,
          photoId = _props.photoId,
          slug = _props.slug;
      return _react.default.createElement(_layout.default, _extends({}, this.props, {
        navmenu: false,
        container: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }), photoId ? _react.default.createElement(_imageModal.default, {
        id: photoId,
        slug: slug,
        onDismiss: function onDismiss() {
          return _this2.dismissModal(photoId);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }) : '', _react.default.createElement("div", {
        className: "container-fluid service px-4 bg-gray",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, _react.default.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, _react.default.createElement("div", {
        className: "col-0 col-md-3 col-lg-3 px-3",
        id: "sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, _react.default.createElement(Sidebar, {
        filter: filter_default,
        color: color,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      })), _react.default.createElement("div", {
        className: "col-12 col-md-9 col-lg-9 px-0",
        id: "cat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, _react.default.createElement("div", {
        className: "bg-white px-3 py-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, _react.default.createElement("h1", {
        className: "text-dark title ml-1 pt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, h1 && h1), _react.default.createElement("div", {
        className: "list-tag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, listBadge ? listBadge.map(function (value, index) {
        return _react.default.createElement("a", {
          href: value.uri,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          }
        }, _react.default.createElement("span", {
          className: "badge badge-pill badge-light border border-primary mr-2 my-1 service-tag",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          }
        }, value.name_tag, " ", _react.default.createElement("i", {
          className: "close",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          }
        })));
      }) : ''), _react.default.createElement(_reactInfiniteScroller.default, {
        pageStart: 0,
        loadMore: this.loadItems.bind(this),
        hasMore: this.state.hasMoreItems,
        loader: _react.default.createElement("div", {
          className: "loader",
          key: "cx",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          }
        }, "Loading ..."),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, _react.default.createElement(_reactMasonryComponent.default, {
        className: '.grid are-images-unloaded mt-3',
        disableImagesLoaded: false,
        options: masonryOptions,
        updateOnEachImageLoad: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, _react.default.createElement("div", {
        className: "grid__col-sizer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }), _react.default.createElement("div", {
        className: "grid__gutter-sizer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }), images && images.map(function (value, index) {
        return _react.default.createElement("div", {
          className: "grid__item rounded p-1",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          }
        }, _react.default.createElement("div", {
          className: "grid__images",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          }
        }, _react.default.createElement("div", {
          className: "position-relative",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149
          }
        }, _react.default.createElement("span", {
          className: "position-absolute rounded d-none upload",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150
          }
        }, " ", _react.default.createElement("i", {
          className: "fa fa-upload",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150
          }
        }), " L\u01B0u \u1EA3nh"), _react.default.createElement("a", {
          onClick: function onClick(e) {
            return _this2.showPhoto(e, value.id, value.slug);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          }
        }, _react.default.createElement("img", {
          className: "rounded",
          src: value.medium_path,
          alt: "{{ $element->name }}",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          }
        })))), _react.default.createElement("div", {
          className: "position-relative idea-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          }
        }, _react.default.createElement("h2", {
          className: "mt-2 font-13 text-black-100",
          "data-title": "{{ $element->name }}",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          }
        }, value.name), _react.default.createElement("p", {
          className: "mt-2 images-title font-12 text-black-100 moreDes",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          }
        }, value.descriptions)));
      }))))))));
    }
  }]);

  return IdeaComponent;
}(_react.default.Component);

exports.default = IdeaComponent;

var Sidebar =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Sidebar, _React$PureComponent);

  function Sidebar(props) {
    _classCallCheck(this, Sidebar);

    return _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call(this, props));
  }

  _createClass(Sidebar, [{
    key: "render",
    value: function render() {
      var _props2 = this.props,
          filter = _props2.filter,
          color = _props2.color;
      return _react.default.createElement("div", {
        className: "sidebar-service row bg-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      }, _react.default.createElement("div", {
        className: "d-md-block px-2 w-100 sidebar-service-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      }, filter && filter.map(function (value, index) {
        return value.data.length != 0 && _react.default.createElement("div", {
          className: "child-sidebar-service pb-1 col-12 offset-md-0 col-md-12 px-0",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 187
          }
        }, _react.default.createElement("div", {
          className: "mt-2 widget p-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188
          }
        }, _react.default.createElement("h3", {
          className: "font-15 mb-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          }
        }, value.textName, _react.default.createElement("span", {
          className: "fa fa-chevron-right d-block d-md-none",
          "data-toggle": "collapse",
          "data-target": "#demoTest",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          }
        })), _react.default.createElement("ul", {
          className: "list-unstyled mb-0 collapse d-md-block",
          id: "demoTest",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 190
          }
        }, value.data && (0, _helpers.mapObject)(value.data, function (index, value) {
          return _react.default.createElement("li", {
            className: "py-1 radio",
            key: index,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 193
            }
          }, _react.default.createElement("a", {
            href: value.uri,
            className: "font-13 font-weight-light text-gray",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 194
            }
          }, _react.default.createElement("label", {
            className: "px-3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 194
            }
          }, value.name_tag, _react.default.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 194
            }
          }, value.total_doc))));
        }), _react.default.createElement("span", {
          className: "more loadmore d-none d-md-block",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 198
          }
        }, "Xem th\xEAm ", _react.default.createElement("i", {
          className: "la la-arrow-circle-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 198
          }
        })))));
      }), _react.default.createElement("div", {
        className: "child-sidebar-service pb-1 col-12 offset-md-0 col-md-12 px-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }, _react.default.createElement("div", {
        className: "mt-2 widget p-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }, _react.default.createElement("h3", {
        className: "font-15",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      }, "M\xC0U S\u1EAEC"), _react.default.createElement("span", {
        className: "expand-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      }), _react.default.createElement("div", {
        className: "service-color mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        }
      }, color && (0, _helpers.mapObject)(color, function (index, value) {
        return _react.default.createElement("a", {
          href: value.uri,
          className: "text-dark border border-gray",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212
          }
        }, _react.default.createElement("span", {
          className: "float-left {{ array_get(config('filter.idea.data_type.color.class_name'), $item->original) }}",
          "data-toggle": "tooltip",
          title: value.name_tag,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212
          }
        }));
      }))))));
    }
  }]);

  return Sidebar;
}(_react.default.PureComponent);

/***/ }),

/***/ "./components/footer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("react"));

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
          lineNumber: 5
        }
      }, _react.default.createElement("div", {
        className: "container py-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      }, _react.default.createElement("div", {
        className: "row footer-content my-2 mx-0 flex-wrap-reverse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, _react.default.createElement("div", {
        className: "col-lg-3 column pr-1 footer-logo pl-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, _react.default.createElement("div", {
        className: "widget",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, _react.default.createElement("div", {
        className: "about_widget",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, _react.default.createElement("div", {
        className: "logo d-none d-md-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react.default.createElement("a", {
        href: "/",
        title: "Tr\u1EDF v\u1EC1 trang ch\u1EE7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react.default.createElement("img", {
        src: "/static/images/logo9houz.png",
        alt: "9HOUZ.COM - Ngu\u1ED3n c\u1EA3m h\u1EE9ng thi\u1EBFt k\u1EBF n\u1ED9i th\u1EA5t, trang ho\xE0ng nh\xE0 c\u1EEDa | 9houz.com",
        title: "9houzz.com",
        width: "140",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }))), _react.default.createElement("p", {
        className: "font-13",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, "Copyright \xA9 2018 9houz Inc.")))), _react.default.createElement("div", {
        className: "col-lg-9 row d-md-flex d-none",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react.default.createElement("div", {
        className: "col-lg-4 column footer-menu pr-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react.default.createElement("div", {
        className: "widget",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react.default.createElement("h3", {
        className: "footer-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, " V\u1EC0 CH\xDANG T\xD4I "), _react.default.createElement("div", {
        className: "link_widgets",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react.default.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react.default.createElement("div", {
        className: "col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react.default.createElement("a", {
        href: "{{ route('static_page',['page' => str_slug('gi\u1EDBi thi\u1EC7u')]) }}",
        target: "_blank",
        title: "Gi\u1EDBi thi\u1EC7u",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, "Gi\u1EDBi thi\u1EC7u"), _react.default.createElement("a", {
        href: "#",
        target: "_blank",
        title: "Li\xEAn h\u1EC7",
        rel: "nofollow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, "Li\xEAn h\u1EC7"), _react.default.createElement("a", {
        href: "{{ route('static_page',['page' => str_slug('Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt')]) }}",
        target: "_blank",
        title: "Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, "Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt"), _react.default.createElement("a", {
        href: "{{ route('static_page',['page' => str_slug('\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng')]) }}",
        target: "_blank",
        title: "\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, "\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng")))))), _react.default.createElement("div", {
        className: "col-lg-4 column footer-menu pr-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react.default.createElement("div", {
        className: "widget",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react.default.createElement("h3", {
        className: "footer-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, "KH\xC1M PH\xC1"), _react.default.createElement("div", {
        className: "link_widgets",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react.default.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react.default.createElement("div", {
        className: "col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react.default.createElement("a", {
        href: "#",
        title: "C\xE2u h\u1ECFi th\u01B0\u1EDDng g\u1EB7p",
        rel: "nofollow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, " C\xE2u h\u1ECFi th\u01B0\u1EDDng g\u1EB7p "), _react.default.createElement("a", {
        href: "#",
        target: "_blank",
        title: "H\u01B0\u1EDBng d\u1EABn thanh to\xE1n",
        rel: "nofollow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, " Blog "), _react.default.createElement("a", {
        href: "#",
        target: "_blank",
        title: "H\u01B0\u1EDBng d\u1EABn thanh to\xE1n",
        rel: "nofollow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, " Tin t\u1EE9c "), _react.default.createElement("a", {
        href: "#",
        target: "_blank",
        title: "H\u01B0\u1EDBng d\u1EABn thanh to\xE1n",
        rel: "nofollow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, " H\u1ECFi \u0111\xE1p "), _react.default.createElement("a", {
        href: "#",
        target: "_blank",
        title: "H\u01B0\u1EDBng d\u1EABn thanh to\xE1n",
        rel: "nofollow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, " Rao v\u1EB7t ")))))), _react.default.createElement("div", {
        className: "col-lg-4 column footer-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react.default.createElement("div", {
        className: "widget",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react.default.createElement("h3", {
        className: "footer-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, "LI\xCAN H\u1EC6"), _react.default.createElement("div", {
        className: "d-block social-links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react.default.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react.default.createElement("div", {
        className: "col-lg-12 d-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react.default.createElement("a", {
        target: "_blank",
        rel: "nofollow",
        href: "#",
        className: "facebook d-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react.default.createElement("span", {
        className: "fa fa-facebook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }), "Facebook"), _react.default.createElement("a", {
        target: "_blank",
        rel: "nofollow",
        href: "#",
        className: "google d-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react.default.createElement("span", {
        className: "fa fa-google-plus",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }), "Google+"), _react.default.createElement("a", {
        target: "_blank",
        rel: "nofollow",
        href: "#",
        className: "website d-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react.default.createElement("span", {
        className: "fa fa-youtube ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }), "Youtube"), _react.default.createElement("a", {
        target: "_blank",
        rel: "nofollow",
        href: "#",
        className: "website d-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react.default.createElement("span", {
        className: "fa fa-envelope-o ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }), "Support@9houz.com"))))))))));
    }
  }]);

  return footer;
}(_react.default.Component);

exports.default = footer;

/***/ }),

/***/ "./components/image-detail.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("@babel/runtime/regenerator"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _axios = _interopRequireDefault(__webpack_require__("axios"));

var _helpers = __webpack_require__("./libraries/helpers.js");

var _jquery = _interopRequireDefault(__webpack_require__("jquery"));

var _router = _interopRequireDefault(__webpack_require__("next/router"));

var _link = _interopRequireDefault(__webpack_require__("next/link"));

__webpack_require__("isomorphic-fetch");

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/components/image-detail.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var APIURL = "http://9houzz.stag:89/" + "api/" + 'image/';

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
                    currentImage: (0, _jquery.default)('img.currentImage')
                  });

                  image_thumb = (0, _jquery.default)('.thumb');

                  _this.setState({
                    image_thumb: image_thumb
                  });

                  image_id = _this.state.image.id;
                  image_thumb.each(function () {
                    if ((0, _jquery.default)(this).data('id') == image_id) {
                      (0, _jquery.default)(this).addClass('project-thumb--current');
                    }
                  });

                case 8:
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
          var image_size, currentIndex, lastIndex, lastImage, nextId, nextSlug;
          return _regenerator.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  e.preventDefault();
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
                  }); // Router.push(`/project?photoId=${id}&id=${id}&slug=${slug}`,`/anh/${nextId}-${nextSlug}`)


                case 11:
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
    Object.defineProperty(_assertThisInitialized(_this), "backImage", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value3 = _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee3(e) {
          var image_size, currentIndex, lastIndex, lastImage, nextId, nextSlug;
          return _regenerator.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  e.preventDefault();
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

                case 11:
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
      currentValue: null
    };
    return _this;
  }

  _createClass(Image, [{
    key: "getValue",
    value: function () {
      var _getValue = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(id) {
        var _this2 = this;

        var data;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _axios.default.get(APIURL + id).then(function (res) {
                  data = res.data;

                  _this2.setState({
                    image: data.image,
                    project: data.project,
                    images: data.list_images,
                    provider: data.provider,
                    tag: data.tagSeo,
                    currentValue: data.image
                  });
                });

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function getValue(_x5) {
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
    key: "render",
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          id = _props.id,
          slug = _props.slug;
      return _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, _react.default.createElement("div", {
        className: "lgBg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }), _react.default.createElement("div", {
        id: "image-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, _react.default.createElement("div", {
        id: "lbMainControls",
        className: "trackMe d-block d-md-none",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, _react.default.createElement("a", {
        className: "lbCloseButton lbClose",
        "aria-label": "Close",
        href: "",
        "data-dismiss": "modal",
        compid: "lbCloseButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }))), _react.default.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, this.state.currentValue && _react.default.createElement("img", {
        className: "image-detail",
        src: this.state.currentValue.path_for_size,
        fallback: "image.path_for_size",
        alt: "image.name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      })), _react.default.createElement("div", {
        className: "lb-navDiv",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, _react.default.createElement("a", {
        className: "link next lbNavigation nav-arrow",
        onClick: function onClick(e) {
          return _this3.nextImage(e, id, slug);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, _react.default.createElement("div", {
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, _react.default.createElement("span", {
        className: "fa fa-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }))), _react.default.createElement("a", {
        className: "link back lbNavigation nav-arrow",
        onClick: function onClick(e) {
          return _this3.backImage(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, _react.default.createElement("div", {
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }, _react.default.createElement("span", {
        className: "fa fa-angle-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      })))), _react.default.createElement("div", {
        id: "lbActions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, _react.default.createElement("div", {
        id: "lbActionCenter",
        className: "offset-0 offset-md-3 col-12 col-md-6 text-center text-nowrap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, _react.default.createElement("button", {
        className: "btn btn-primary med save text-white",
        title: "Save To Ideabook",
        compid: "addToIdeabook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, _react.default.createElement("i", {
        className: "fa fa-plus pr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }), "L\u01B0u \u1EA3nh"), _react.default.createElement("button", {
        className: "btn bg-black-100 med email text-white",
        title: "send email",
        compid: "addToIdeabook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, _react.default.createElement("i", {
        className: "fa fa-envelope-o pr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }), "G\u1EEDi Email")))), _react.default.createElement(ImageInfo, {
        provider: this.state.provider,
        images: this.state.images,
        image: this.state.image,
        tag: this.state.tag,
        changeValue: function changeValue(data) {
          return _this3.setState({
            currentValue: data
          });
        },
        currentValue: this.state.currentValue,
        detail: this.props.detail,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
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
        className: "lbInfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }, _react.default.createElement("div", {
        className: "lbInfoTab position-relative d-none d-md-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      }, detail ? '' : _react.default.createElement("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        }
      }, _react.default.createElement("div", {
        className: "nav nav-tabs",
        id: "nav-tab",
        role: "tablist",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        }
      }, _react.default.createElement("a", {
        className: "nav-item nav-link active",
        id: "nav-home-tab",
        "data-toggle": "tab",
        href: "#nav-home",
        role: "tab",
        "aria-controls": "nav-home",
        "aria-selected": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        }
      }, _react.default.createElement("i", {
        className: "fa fa-home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        }
      })), _react.default.createElement("a", {
        className: "nav-item nav-link",
        id: "nav-profile-tab",
        "data-toggle": "tab",
        href: "#nav-profile",
        role: "tab",
        "aria-controls": "nav-profile",
        "aria-selected": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        }
      }, _react.default.createElement("i", {
        className: "fa fa-tag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        }
      })), _react.default.createElement("a", {
        className: "nav-item nav-link",
        id: "nav-contact-tab",
        "data-toggle": "tab",
        href: "#nav-contact",
        role: "tab",
        "aria-controls": "nav-contact",
        "aria-selected": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        }
      }, _react.default.createElement("i", {
        className: "fa fa-comment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        }
      })))))), _react.default.createElement("div", {
        className: "content-mask",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        }
      }, _react.default.createElement("div", {
        className: "content-scroll",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        }
      }, _react.default.createElement("div", {
        className: "content-detail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        }
      }, _react.default.createElement("div", {
        className: "media",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        }
      }, provider.auth_avatar && _react.default.createElement("img", {
        src: provider.auth_avatar,
        className: "align-self-start mr-2 rounded-circle detail-user mt-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        }
      }), _react.default.createElement("div", {
        className: "media-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        }
      }, _react.default.createElement("div", {
        className: "media-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        }
      }, _react.default.createElement(_link.default, {
        prefetch: true,
        href: "/pro/".concat(provider.id, "-").concat(provider.slug),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      }, _react.default.createElement("a", {
        className: "font-weight-bold font-14 text-black-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      }, provider.name ? provider.name : 'Chưa có tên')), _react.default.createElement("div", {
        className: "star-rating font-14",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        }
      }, _react.default.createElement("span", {
        className: "text-black-100 font-14",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        }
      }, provider.avg_rate && (0, _helpers.rating)(provider.avg_rate), " (", provider.total_rate ? provider.total_rate : 0, " ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1)")))))), _react.default.createElement("div", {
        className: "content-detail border-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        }
      }, _react.default.createElement("h2", {
        className: "font-15 text-black-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        }
      }, currentValue && currentValue.name), _react.default.createElement("div", {
        className: "media-content",
        id: "readMore",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        }
      }, _react.default.createElement("div", {
        className: "readMoreWrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        }
      }, _react.default.createElement("p", {
        id: "readMoreText",
        className: "font-13 normalText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        }
      }, currentValue && currentValue.descriptions), _react.default.createElement("div", {
        className: "readMoreGradient",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        }
      })), _react.default.createElement("button", {
        id: "readMoreBtn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        }
      }), _react.default.createElement("span", {
        id: "readLessBtnText",
        style: {
          'display': 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        }
      }, "R\xFAt g\u1ECDn "), _react.default.createElement("span", {
        id: "readMoreBtnText",
        style: {
          'display': 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        }
      }, "Xem th\xEAm >"))), _react.default.createElement("div", {
        className: "content-detail border-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        }
      }, _react.default.createElement("h2", {
        className: "font-14",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        }
      }, _react.default.createElement("a", {
        href: "project.url_path",
        className: "text-black-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        }
      }, "C\xE1c \u1EA3nh trong c\xF9ng d\u1EF1 \xE1n")), _react.default.createElement("ul", {
        className: "list-unstyled clearfix thumb-grid grid-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        }
      }, images && images.map(function (value, index) {
        return _react.default.createElement("li", {
          className: "thumb project-thumb",
          "data-id": value.id,
          ref: "'image'+image.id",
          "data-slug": value.slug,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 256
          }
        }, _react.default.createElement("a", {
          className: "link",
          onClick: function onClick(e) {
            return _this4.changeImage(e, value);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 257
          }
        }, _react.default.createElement("div", {
          className: "img-responsive-wrapper img-responsive-square progressive",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 258
          }
        }, value.small_path && _react.default.createElement("img", {
          src: value.small_path,
          alt: "image.name",
          className: "img-respontive",
          id: "'image-'+image.id",
          width: "71",
          height: "71",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 259
          }
        }))));
      })), _react.default.createElement("div", {
        className: "pt-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        }
      }, tag.breadcrumbs && _react.default.createElement("a", {
        href: tag.breadcrumbs.uri,
        className: "mr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        }
      }, _react.default.createElement("span", {
        className: "text-center font-12 font-weight-normal badge badge-pill badge-white border border-primary py-2 px-3 mb-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        }
      }, tag.breadcrumbs.name_tag)), tag.other && tag.other.is_seo == 1 && _react.default.createElement("a", {
        href: tag.other.uri,
        className: "mr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        }
      }, _react.default.createElement("span", {
        className: "text-center font-12 font-weight-normal badge badge-pill badge-white border border-primary py-2 px-3 mb-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        }
      }, tag.other.name_tag)))), _react.default.createElement("div", {
        className: "content-detail border-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        }
      }, _react.default.createElement("div", {
        className: "header row m-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        }
      }, _react.default.createElement("h2", {
        className: "font-14 text-black-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        }
      }, "H\u1ECFi \u0111\xE1p v\u1EC1 h\xECnh \u1EA3nh"), _react.default.createElement("span", {
        className: "col-xs-12 col-md-12 px-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        }
      }, _react.default.createElement("button", {
        id: "askQuestionButton",
        className: "btn border-primary btn-block text-primary font-13",
        compid: "lbAsk",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        }
      }, "\u0110\u1EB7t c\xE2u h\u1ECFi c\u1EE7a b\u1EA1n")))))));
    }
  }]);

  return ImageInfo;
}(_react.default.PureComponent);

/***/ }),

/***/ "./components/image-modal.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("@babel/runtime/regenerator"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _imageDetail = _interopRequireDefault(__webpack_require__("./components/image-detail.js"));

var _layout = _interopRequireDefault(__webpack_require__("./components/layout.js"));

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/components/image-modal.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

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
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react.default.createElement("div", {
        id: "lbMainControls",
        className: "trackMe",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react.default.createElement("a", {
        ref: function ref(el) {
          return _this._lbClose = el;
        },
        className: "lbCloseButton lbClose",
        href: "",
        onClick: function onClick(e) {
          return _this.dismiss(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }))), _react.default.createElement(_imageDetail.default, {
        id: this.props.id,
        slug: slug,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }));
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

var _link = _interopRequireDefault(__webpack_require__("next/link"));

var _reactstrap = __webpack_require__("reactstrap");

var _universalCookie = _interopRequireDefault(__webpack_require__("universal-cookie"));

var _package = _interopRequireDefault(__webpack_require__("./package.json"));

var _style = _interopRequireDefault(__webpack_require__("./styles/style.scss"));

var _nav = _interopRequireDefault(__webpack_require__("./components/nav.js"));

var _footer = _interopRequireDefault(__webpack_require__("./components/footer.js"));

var _reactDocumentMeta = _interopRequireDefault(__webpack_require__("react-document-meta"));

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
      providers: null
    };
    _this.toggleModal = _this.toggleModal.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(_default, [{
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
          robots = _props.robots;
      return _react.default.createElement(_react.default.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react.default.createElement(_head.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react.default.createElement("meta", {
        charSet: "UTF-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }), _react.default.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }), _react.default.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, this.props.title || '9houz'), des && _react.default.createElement("meta", {
        name: "description",
        itemprop: "description",
        content: des,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }), canonical && _react.default.createElement("link", {
        rel: "canonical",
        href: canonical,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }), title && _react.default.createElement("meta", {
        property: "og:title",
        content: title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }), des && _react.default.createElement("meta", {
        property: "og:description",
        content: des,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), og_url && _react.default.createElement("meta", {
        property: "og:url",
        content: og_url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }), url_images && _react.default.createElement("meta", {
        property: "og:image",
        content: url_images,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }), robots && _react.default.createElement("meta", {
        name: "robots",
        content: robots,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }), _react.default.createElement("script", {
        src: "https://cdn.polyfill.io/v2/polyfill.min.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }), _react.default.createElement("script", {
        src: "https://unpkg.com/react@16/umd/react.production.min.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }), _react.default.createElement("script", {
        src: "https://unpkg.com/react-dom@16/umd/react-dom.production.min.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      })), _react.default.createElement("header", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react.default.createElement("nav", {
        className: "navbar navbar-light navbar-expand-md bg-faded container navbar-9houzz",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
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
          lineNumber: 84
        }
      }, _react.default.createElement("span", {
        className: "fa fa-2x fa-bars text-primary font-22",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      })), _react.default.createElement("div", {
        className: "header-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react.default.createElement("a", {
        className: "navbar-brand",
        href: "{{ route('home') }}",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react.default.createElement("img", {
        src: "/static/images/logo9houz.png",
        alt: "Logo",
        title: "9houzz.com",
        width: "114",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }))), _react.default.createElement("a", {
        href: "#",
        "data-toggle": "offcanvas",
        className: "d-md-none",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react.default.createElement("i", {
        className: "fa fa-user-circle-o font-22  py-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      })), _react.default.createElement("div", {
        className: "collapse navbar-collapse header-right my-2 nav-menu",
        id: "collapse-header-login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react.default.createElement("div", {
        className: "header-search d-none d-sm-none d-md-block mr-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, _react.default.createElement("div", {
        className: "input-radius py-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, _react.default.createElement("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react.default.createElement("input", {
        type: "",
        className: "badge-pill form-control border-0 font-14 px-3",
        name: "",
        placeholder: "\xDD t\u01B0\u1EDFng b\u1EA1n mu\u1ED1n t\xECm ki\u1EBFm...",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }), _react.default.createElement("button", {
        className: "fa fa-search icon-search bg-white border-0",
        "data-toggle": "offcanvas",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }))))))), _react.default.createElement(_nav.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      })), _react.default.createElement(_meta.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }), _react.default.createElement(MainBody, {
        navmenu: this.props.navmenu,
        fluid: this.props.fluid,
        container: this.props.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, this.props.children), _react.default.createElement(_footer.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
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
            lineNumber: 123
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
            lineNumber: 130
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
            lineNumber: 136
          }
        }, _react.default.createElement(_reactstrap.Row, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          }
        }, _react.default.createElement(_reactstrap.Col, {
          xs: "12",
          md: "9",
          lg: "10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          }
        }, this.props.children), _react.default.createElement(_reactstrap.Col, {
          xs: "12",
          md: "3",
          lg: "2",
          style: {
            paddingTop: '1em'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          }
        }, _react.default.createElement("h5", {
          className: "text-muted text-uppercase",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          }
        }, "Examples"), _react.default.createElement(_reactstrap.ListGroup, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          }
        }, _react.default.createElement(_reactstrap.ListGroupItem, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          }
        }, _react.default.createElement(_link.default, {
          prefetch: true,
          href: "/examples/authentication",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          }
        }, _react.default.createElement("a", {
          href: "/examples/authentication",
          className: "d-block",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          }
        }, "Auth"))), _react.default.createElement(_reactstrap.ListGroupItem, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          }
        }, _react.default.createElement(_link.default, {
          prefetch: true,
          href: "/examples/async",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          }
        }, _react.default.createElement("a", {
          href: "/examples/async",
          className: "d-block",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          }
        }, "Async"))), _react.default.createElement(_reactstrap.ListGroupItem, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150
          }
        }, _react.default.createElement(_link.default, {
          prefetch: true,
          href: "/examples/layout",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          }
        }, _react.default.createElement("a", {
          href: "/examples/layout",
          className: "d-block",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          }
        }, "Layout"))), _react.default.createElement(_reactstrap.ListGroupItem, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          }
        }, _react.default.createElement(_link.default, {
          prefetch: true,
          href: "/examples/routing",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154
          }
        }, _react.default.createElement("a", {
          href: "/examples/routing",
          className: "d-block",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154
          }
        }, "Routing"))), _react.default.createElement(_reactstrap.ListGroupItem, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          }
        }, _react.default.createElement(_link.default, {
          prefetch: true,
          href: "/examples/styling",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          }
        }, _react.default.createElement("a", {
          href: "/examples/styling",
          className: "d-block",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          }
        }, "Styling")))))));
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
    className: "jsx-111088526"
  }, _react.default.createElement(_head.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react.default.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    className: "jsx-111088526"
  }), _react.default.createElement("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    className: "jsx-111088526"
  }), _react.default.createElement("link", {
    rel: "shortcut icon",
    href: "/static/favicon.ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    className: "jsx-111088526"
  })), _react.default.createElement(_style.default, {
    styleId: "111088526",
    css: "body{font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",\"Roboto\",\"Oxygen\",\"Ubuntu\",\"Cantarell\",\"Fira Sans\",\"Droid Sans\",\"Helvetica Neue\",sans-serif;background:#eee;}*{margin:0;padding:0;box-sizing:border-box;}#nprogress{pointer-events:none;}#nprogress .bar{background:#b953a4;position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px;}#nprogress .peg{display:block;position:absolute;right:0px;width:500px;height:100%;box-shadow:0 0 10px #b953a4,0 0 5px #b953a4;opacity:1.0;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWV0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFldUIsQUFFaUssQUFJckosQUFNVyxBQUdELEFBU0wsU0FqQkosS0FrQlEsS0FqQkksQUFRUCxDQUpNLFlBY1gsRUFURyxPQVRVLENBbUJYLEtBVE4sTUFDQyxDQVNLLE1BUkQsTUFTa0MsS0FSbEMsV0FBQyw0QkFTQSxZQUNnQywwQkE1QjVCLGdCQUFDLG1HQTRCNEIiLCJmaWxlIjoiY29tcG9uZW50cy9tZXRhLmpzIiwic291cmNlUm9vdCI6Ii9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvbXktbmV4dC1hcHAiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5cblJvdXRlci5vblJvdXRlQ2hhbmdlU3RhcnQgPSAoKSA9PiBOUHJvZ3Jlc3Muc3RhcnQoKVxuUm91dGVyLm9uUm91dGVDaGFuZ2VDb21wbGV0ZSA9ICgpID0+IE5Qcm9ncmVzcy5kb25lKClcblJvdXRlci5vblJvdXRlQ2hhbmdlRXJyb3IgPSAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvc3RhdGljL2Zhdmljb24uaWNvXCIgLz5cbiAgICA8L0hlYWQ+XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIGJvZHkge1xuICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFwiUm9ib3RvXCIsIFwiT3h5Z2VuXCIsIFwiVWJ1bnR1XCIsIFwiQ2FudGFyZWxsXCIsIFwiRmlyYSBTYW5zXCIsIFwiRHJvaWQgU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgICB9XG5cbiAgICAgICoge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB9XG5cbiAgICAgIC8qIGxvYWRpbmcgcHJvZ3Jlc3MgYmFyIHN0eWxlcyAqL1xuICAgICAgI25wcm9ncmVzcyB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgfVxuXG4gICAgICAjbnByb2dyZXNzIC5iYXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjYjk1M2E0O1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHotaW5kZXg6IDEwMzE7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgfVxuXG4gICAgICAjbnByb2dyZXNzIC5wZWcge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMHB4O1xuICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggI2I5NTNhNCwgMCAwIDVweCAjYjk1M2E0O1xuICAgICAgICBvcGFjaXR5OiAxLjA7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDNkZWcpIHRyYW5zbGF0ZSgwcHgsIC00cHgpO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG4iXX0= */\n/*@ sourceURL=components/meta.js */"
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

var _link = _interopRequireDefault(__webpack_require__("next/link"));

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
    key: "toggle",
    value: function toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "nav-9houzz container-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react.default.createElement("nav", {
        className: "navbar navbar-light navbar-expand-md bg-faded container header-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react.default.createElement("div", {
        className: "collapse navbar-collapse",
        id: "navbarCollapse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react.default.createElement("ul", {
        className: "navbar-nav text-md-center d-flex w-100 position-relative list-unstyled  justify-md-content-start justify-content-start",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react.default.createElement("li", {
        className: "offset-0 offset-md-1 nav-item py-1 px-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react.default.createElement("div", {
        className: "d-flex w-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react.default.createElement("i", {
        className: "fa fa-lightbulb-o my-auto",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), _react.default.createElement(_link.default, {
        prefetch: true,
        href: "/y-tuong",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react.default.createElement("a", {
        className: "nav-link mr-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
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
          lineNumber: 27
        }
      }, _react.default.createElement("span", {
        className: "fa fa-chevron-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }))), _react.default.createElement("div", {
        className: "collapse navbar-collapse",
        id: "nav-product-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      })), _react.default.createElement("li", {
        className: "nav-item py-1 px-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react.default.createElement("div", {
        className: "d-flex w-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react.default.createElement("i", {
        className: "fa fa-briefcase my-auto",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), _react.default.createElement("a", {
        className: "nav-link mr-auto",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
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
          lineNumber: 37
        }
      }, _react.default.createElement("span", {
        className: "fa fa-chevron-right ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }))), _react.default.createElement("div", {
        className: "collapse navbar-collapse nav-prof",
        id: "nav-product",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react.default.createElement("div", {
        className: "nav-child container",
        role: "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react.default.createElement("div", {
        className: "row py-1 px-2 nav-service d-flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react.default.createElement("div", {
        className: "col-md-12 text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react.default.createElement("ul", {
        className: "list-unstyled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react.default.createElement("li", {
        className: "mt-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react.default.createElement("a", {
        href: "#",
        className: "text-dark font-14",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, "aaaa")))))))), _react.default.createElement("li", {
        className: "nav-item py-1 px-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react.default.createElement("div", {
        className: "d-flex w-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react.default.createElement("i", {
        className: "fa fa-graduation-cap my-auto",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }), _react.default.createElement("a", {
        className: "nav-link mr-auto",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
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
          lineNumber: 57
        }
      }, _react.default.createElement("span", {
        className: "fa fa-chevron-right ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }))), _react.default.createElement("div", {
        className: "collapse navbar-collapse nav-prof",
        id: "nav-product-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react.default.createElement("div", {
        className: "nav-child container",
        role: "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react.default.createElement("div", {
        className: "row py-1 px-2 nav-service d-flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react.default.createElement("div", {
        className: "col-md-12 text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react.default.createElement("ul", {
        className: "list-unstyled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react.default.createElement("li", {
        className: "mt-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react.default.createElement("a", {
        href: "#",
        className: "text-dark font-14",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, "Cate")))))))), _react.default.createElement("li", {
        className: "nav-item py-1 px-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react.default.createElement("div", {
        className: "d-flex w-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react.default.createElement("i", {
        className: "fa fa-pencil-square-o my-auto",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }), _react.default.createElement("a", {
        className: "nav-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, "BLOG"))), _react.default.createElement("li", {
        className: "nav-item py-1 px-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react.default.createElement("div", {
        className: "d-flex w-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react.default.createElement("i", {
        className: "fa fa-rss my-auto",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }), _react.default.createElement("a", {
        className: "nav-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, "TIN T\u1EE8C"))), _react.default.createElement("li", {
        className: "nav-item py-1 px-1 d-block d-md-none",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react.default.createElement("div", {
        className: "d-flex w-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react.default.createElement("i", {
        className: "fa fa-info-circle my-auto",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }), _react.default.createElement("a", {
        className: "nav-link mr-auto",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
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
          lineNumber: 89
        }
      }, _react.default.createElement("span", {
        className: "fa fa-chevron-right ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }))), _react.default.createElement("div", {
        className: "collapse navbar-collapse nav-prof",
        id: "nav-product-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react.default.createElement("div", {
        className: "nav-child container",
        role: "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react.default.createElement("div", {
        className: "row py-1 px-2 nav-service d-flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, _react.default.createElement("div", {
        className: "col-md-12 text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, _react.default.createElement("ul", {
        className: "list-unstyled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react.default.createElement("a", {
        href: "{{ route('static_page',['page' => str_slug('gi\u1EDBi thi\u1EC7u')]) }}",
        target: "_blank",
        title: "Gi\u1EDBi thi\u1EC7u",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, "Gi\u1EDBi thi\u1EC7u")), _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, _react.default.createElement("a", {
        href: "#",
        target: "_blank",
        title: "Li\xEAn h\u1EC7",
        rel: "nofollow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, "Li\xEAn h\u1EC7")), _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, _react.default.createElement("a", {
        href: "{{ route('static_page',['page' => str_slug('Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt')]) }}",
        target: "_blank",
        title: "Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, "Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt")), _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, _react.default.createElement("a", {
        href: "{{ route('static_page',['page' => str_slug('\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng')]) }}",
        target: "_blank",
        title: "\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, "\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng"))))))))))));
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
exports.ucfirst = ucfirst;
exports.mapObject = exports.rating = void 0;

var _react = _interopRequireDefault(__webpack_require__("react"));

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/libraries/helpers.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rating = function rating(avg_rate) {
  var star = [];

  for (var $i = 1; $i <= 5; $i++) {
    if ($i <= Math.floor(avg_rate)) {
      star.push(_react.default.createElement("span", {
        className: "fa fa-star",
        key: $i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
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
          lineNumber: 14
        }
      }, _react.default.createElement("span", {
        className: "position-absolute provider-star",
        style: divStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      })));
    } else {
      star.push(_react.default.createElement("span", {
        className: "fa fa-star disable",
        key: $i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
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

module.exports = {"name":"create-next-example-app","scripts":{"dev":"node server.js","build":"next build","start":"NODE_ENV=production node server.js"},"dependencies":{"@zeit/next-css":"^0.2.0","@zeit/next-sass":"^0.2.0","@zeit/next-typescript":"^1.1.0","axios":"^0.18.0","babel-plugin-inline-import":"^3.0.0","babel-plugin-module-resolver":"^3.1.1","bootstrap":"^4.1.1","css-loader":"^0.28.11","dotenv":"^6.0.0","es6-promise":"^4.2.4","express":"^4.16.3","font-awesome":"^4.7.0","ionicons":"^4.2.4","isomorphic-fetch":"^2.2.1","jquery":"^3.3.1","lru-cache":"^4.1.3","merge-files-webpack-plugin":"^1.1.2","next":"^6.1.1","next-compose":"0.0.2","next-routes":"^1.4.2","nprogress":"^0.2.0","postcss-loader":"^2.1.6","prop-types":"^15.6.2","raw-loader":"^0.5.1","react":"^16.4.1","react-document-meta":"^3.0.0-beta.2","react-dom":"^16.4.1","react-helmet":"^5.2.0","react-infinite":"^0.13.0","react-infinite-scroller":"^1.2.0","react-masonry-component":"^6.2.1","react-modal":"^3.5.1","reactstrap":"^6.3.0","style-loader":"^0.21.0","styled-jsx":"^2.2.7","styled-jsx-css-loader":"^0.3.0","styled-jsx-plugin-sass":"^0.2.4","tunnel-agent":"^0.6.0","universal-cookie":"^2.2.0","webpack":"^3.10.0"},"devDependencies":{"@babel/core":"^7.0.0-beta.53","create-next":"^0.1.4","node-sass":"^4.9.2","sass-loader":"^7.0.3"}}

/***/ }),

/***/ "./pages/idea.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("@babel/runtime/regenerator"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _IdeaComponent = _interopRequireDefault(__webpack_require__("./components/IdeaComponent.js"));

__webpack_require__("isomorphic-fetch");

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/pages/idea.js";

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

var APIURL = "http://9houzz.stag:89/" + "api/";

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
                return fetch(APIURL + "y-tuong");

              case 3:
                res = _context.sent;
                _context.next = 6;
                return res.json();

              case 6:
                data = _context.sent;
                return _context.abrupt("return", {
                  h1: data.h1,
                  filter_default: data.filter_default,
                  colors: data.colors,
                  images: data.images.data,
                  nextUrl: data.images.next_page_url,
                  title: data.seo.title,
                  des: data.seo.des,
                  canonical: data.seo.canonical,
                  robots: data.seo.robots,
                  og_url: data.seo.url,
                  url_images: data.seo.url_images
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
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var url = this.props.url;
      return _react.default.createElement(_IdeaComponent.default, _extends({}, this.props, {
        photoId: this.props.url.query && this.props.url.query.photoId,
        asPath: url.asPath,
        path: url.pathname,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
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
.add('index') // about  about     /about
.add('test', '/test') // blog   blog      /blog/:slug
.add('news', '/news').add('image', '/anh/:id-:slug', 'image/index').add('y-tuong', '/y-tuong', 'idea') // y-tuong   idea   /y-tuong
.add('idea.detail', '/y-tuong/:params', 'idea-filter').add('pro.detail', '/pro/:id-:slug', 'pro/index').add('pro.project', '/pro/:id-:slug/d%E1%BB%B1-%C3%A1n', 'pro/project').add('pro.review', '/pro/:id-:slug/nh%E1%BA%ADn-x%C3%A9t', 'pro/review').add('project.detail', '/du-an/:id-:slug', 'project/index');

/***/ }),

/***/ "./styles/style.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/idea.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

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

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-document-meta":
/***/ (function(module, exports) {

module.exports = require("react-document-meta");

/***/ }),

/***/ "react-infinite-scroller":
/***/ (function(module, exports) {

module.exports = require("react-infinite-scroller");

/***/ }),

/***/ "react-masonry-component":
/***/ (function(module, exports) {

module.exports = require("react-masonry-component");

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
//# sourceMappingURL=idea.js.map