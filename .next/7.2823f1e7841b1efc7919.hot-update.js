webpackHotUpdate(7,{

/***/ "./pages/project/list-project-filter.js":
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

__webpack_require__("./node_modules/isomorphic-fetch/fetch-npm-browserify.js");

var _jquery = _interopRequireDefault(__webpack_require__("./node_modules/jquery/dist/jquery.js"));

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/pages/project/list-project-filter.js";

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
                res = null;

                if (!query.f) {
                  _context.next = 8;
                  break;
                }

                _context.next = 5;
                return fetch(APIURL + 'danh-sach-du-an/' + encodeURIComponent(query.slug) + "?f=".concat(query.f));

              case 5:
                res = _context.sent;
                _context.next = 11;
                break;

              case 8:
                _context.next = 10;
                return fetch(APIURL + 'danh-sach-du-an/' + encodeURIComponent(query.slug));

              case 10:
                res = _context.sent;

              case 11:
                _context.next = 13;
                return res.json();

              case 13:
                data = _context.sent;
                return _context.abrupt("return", {
                  data: data,
                  projects: data.datas ? data.datas.data : null,
                  title: data.seo ? data.seo.title : null,
                  des: data.seo ? data.seo.des : null,
                  canonical: data.seo ? data.seo.canonical : null,
                  robots: data.seo ? data.seo.robots : null,
                  og_url: data.seo ? data.seo.url : null,
                  url_images: data.seo ? data.seo.url_images : null,
                  headerProjects: data.headerProjects,
                  headerCategories: data.headerCategories,
                  dataBase: data.dataBase,
                  h1: data.h1,
                  filterDefault: data.filter_default,
                  page: data.page
                });

              case 15:
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
    key: "componentDidMount",
    value: function componentDidMount() {
      var showChar = 200; // How many characters are shown by default

      var ellipsestext = "";
      var moretext = "Xem thêm >";
      var lesstext = "Rút gọn <";
      (0, _jquery.default)('.more').each(function () {
        var content = (0, _jquery.default)(this).html();

        if (content.length > showChar) {
          var c = content.substr(0, showChar);
          var h = content.substr(showChar, content.length - showChar);
          var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
          (0, _jquery.default)(this).html(html);
        }
      });
      (0, _jquery.default)(".morelink").click(function () {
        if ((0, _jquery.default)(this).hasClass("less")) {
          (0, _jquery.default)(this).removeClass("less");
          (0, _jquery.default)(this).html(moretext);
        } else {
          (0, _jquery.default)(this).addClass("less");
          (0, _jquery.default)(this).html(lesstext);
        }

        (0, _jquery.default)(this).parent().prev().toggle();
        (0, _jquery.default)(this).prev().toggle();
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
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          projects = _props.projects,
          h1 = _props.h1,
          filterDefault = _props.filterDefault,
          page = _props.page;
      return _react.default.createElement(_layout.default, _extends({}, this.props, {
        navmenu: false,
        container: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }), _react.default.createElement("div", {
        className: "container-fluid service px-4 bg-gray",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, _react.default.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react.default.createElement("div", {
        className: "col-0 col-md-3 col-lg-3 px-3",
        id: "sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react.default.createElement(_sideBar.default, {
        filter: filterDefault,
        page: page,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      })), _react.default.createElement("div", {
        className: "col-12 col-md-9 col-lg-9 px-0",
        id: "cat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, _react.default.createElement("div", {
        className: "bg-white px-3 py-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, _react.default.createElement("h1", {
        className: "font-25 font-weight-normal text-black-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, h1), _react.default.createElement("div", {
        className: "service-tag pt-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, _react.default.createElement("span", {
        className: "text-center font-12 font-weight-normal badge badge-pill badge-light border border-primary mr-2 my-1 service-tag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, "m\u1EA7u t\u1ED1i ", _react.default.createElement("i", {
        className: "close font-weight-normal font-15",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      })), _react.default.createElement("span", {
        className: "text-center font-12 font-weight-normal badge badge-pill badge-light border border-primary mr-2 my-1 service-tag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, "Ph\xF2ng kh\xE1ch ", _react.default.createElement("i", {
        className: "close font-weight-normal font-15",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      })), _react.default.createElement("span", {
        className: "text-center font-12 font-weight-normal badge badge-pill badge-light border border-primary mr-2 my-1 service-tag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, "Ph\xF2ng h\u1ECDp ", _react.default.createElement("i", {
        className: "close font-weight-normal font-15",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }))), _react.default.createElement("ul", {
        className: "list-unstyled my-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, projects && projects.map(function (value, index) {
        return _react.default.createElement("li", {
          className: "media border border-right-0 border-left-0 border-bottom-0 border-gray p-3 position-relative my-3 container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          }
        }, _react.default.createElement("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          }
        }, _react.default.createElement("div", {
          className: "col-md-6 col-lg-6 col-12 col-sm-12 images-service position-relative px-0",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          }
        }, _react.default.createElement("a", {
          href: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          }
        }, _react.default.createElement("img", {
          src: value.public_avatar,
          alt: "",
          className: "mr-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          }
        })), _react.default.createElement("div", {
          className: "position-absolute image-actions py-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          }
        }, _react.default.createElement("span", {
          className: "actions-detail font-16",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          }
        }, _react.default.createElement("i", {
          className: "fa fa-picture-o mr-1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          }
        }), value.total + " ảnh"), _react.default.createElement("span", {
          className: "actions-detail font-16",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          }
        }, _react.default.createElement("i", {
          className: "fa fa-cog mr-1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          }
        }), " c\u1ED5 \u0111i\u1EC3n"))), _react.default.createElement("div", {
          className: "media-body col-md-6 col-lg-6 col-12 col-sm-12 position-relative",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          }
        }, _react.default.createElement("h2", {
          className: "font-18",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          }
        }, value && value.name), _react.default.createElement("div", {
          className: "media-header my-3 p-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          }
        }, _react.default.createElement("div", {
          className: "rounded-circle logo",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          }
        }, _react.default.createElement("img", {
          src: value.providers && value.providers.path_avatar,
          className: "img-fluid h-100 rounded-circle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          }
        })), _react.default.createElement("div", {
          className: "media-title ml-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          }
        }, _react.default.createElement("a", {
          className: "mt-0 mb-1 h6 font-14 text-black-100 font-weight-bold",
          href: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          }
        }, value.providers && value.providers.name), _react.default.createElement("div", {
          className: "star-rating",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          }
        }, _react.default.createElement("span", {
          className: "fa fa-star",
          "data-rating": "1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          }
        }), _react.default.createElement("span", {
          className: "fa fa-star",
          "data-rating": "2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          }
        }), _react.default.createElement("span", {
          className: "fa fa-star",
          "data-rating": "3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          }
        }), _react.default.createElement("span", {
          className: "fa fa-star",
          "data-rating": "4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          }
        }), _react.default.createElement("span", {
          className: "fa fa-star disable",
          "data-rating": "5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          }
        }), _react.default.createElement("span", {
          className: "font-italic",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          }
        }, "(14 \u0111\xE1nh gi\xE1)")))), _react.default.createElement("div", {
          className: "media-content mt-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          }
        }, _react.default.createElement("span", {
          className: "more font-14 font-weight-light",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          }
        }, value.descriptions && value.descriptions, _react.default.createElement("a", {
          href: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          }
        }, _react.default.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          }
        }, " Xem th\xEAm >>")))))));
      })))))));
    }
  }]);

  return _default;
}(_react.default.Component);

exports.default = _default;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/project/list-project-filter")
  

/***/ })

})
//# sourceMappingURL=7.2823f1e7841b1efc7919.hot-update.js.map