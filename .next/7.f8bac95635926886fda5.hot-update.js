webpackHotUpdate(7,{

/***/ "./components/ListProviderComponent.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _layout = _interopRequireDefault(__webpack_require__("./components/layout.js"));

var _sideBar = _interopRequireDefault(__webpack_require__("./components/sideBar.js"));

var _Breadcrumbs = _interopRequireDefault(__webpack_require__("./components/Breadcrumbs.js"));

var _pagination = _interopRequireDefault(__webpack_require__("./components/pagination.js"));

var _routes = __webpack_require__("./routes.js");

var _jquery = _interopRequireDefault(__webpack_require__("./node_modules/jquery/dist/jquery.js"));

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

/***/ })

})
//# sourceMappingURL=7.f8bac95635926886fda5.hot-update.js.map