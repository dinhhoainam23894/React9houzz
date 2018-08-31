webpackHotUpdate(6,{

/***/ "./components/ListProjectComponent.js":
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

var _pagination = _interopRequireDefault(__webpack_require__("./components/pagination.js"));

var _routes = __webpack_require__("./routes.js");

var _jquery = _interopRequireDefault(__webpack_require__("./node_modules/jquery/dist/jquery.js"));

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/components/ListProjectComponent.js";

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
                  APIURL = "https://api.9houz.com/" + "api/" + 'danh-sach-du-an/?page=';
                  _context.next = 3;
                  return fetch(APIURL + pageNumber);

                case 3:
                  res = _context.sent;
                  _context.next = 6;
                  return res.json();

                case 6:
                  data = _context.sent;

                  _this.setState({
                    'projects': data.datas.data
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
      projects: _this.props.projects
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
          projects: nextProps.projects
        });
      }
    } // componentDidMount(){
    //   $('.sidebar-service ul').each(function(e){
    //     if ($(this).find('li').length == $(this).find($('li:visible')).length) {
    //       $(this).find('.loadmore').hide();
    //     }
    //   });
    //   $('.sidebar-service').on('click','.loadmore',function () {
    //     var list = $(this).parent().find($('li'));
    //     $(this).parent().find($('li:hidden')).show();
    //     if (list.length == $(this).parent().find($('li:visible')).length) {
    //       $(this).removeClass('loadmore');
    //       $(this).addClass('hidemore');
    //       $(this).html('Thu gọn');
    //     }
    //   });
    //   $('.sidebar-service').on('click','.hidemore',function () {
    //     var list = $(this).parent().find($('li'));
    //     $(this).parent().find($('li:visible')).slice(5, list.length).hide();
    //     $(this).removeClass('hidemore');
    //     $(this).addClass('loadmore');
    //     $(this).html('Xem thêm');
    //   });
    //   $(".close").click(function(event) {
    //     $(this).parent().toggle();
    //   });
    // }

  }, {
    key: "handlePageChange",
    value: function handlePageChange(pageNumber) {
      console.log("active page is ".concat(pageNumber));
      this.setState({
        activePage: pageNumber
      }); // this.getData(pageNumber)
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
          breadcrumb = _props.breadcrumb;
      console.log(this.props);
      var _state = this.state,
          projects = _state.projects,
          nextPage = _state.nextPage,
          nextPageLink = _state.nextPageLink,
          backPageLink = _state.backPageLink;
      return _react.default.createElement(_layout.default, _extends({}, this.props, {
        navmenu: false,
        container: false,
        nextPageLink: nextPageLink,
        backPageLink: backPageLink,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }), _react.default.createElement("div", {
        className: "container-fluid service project-list px-4 bg-gray",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react.default.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react.default.createElement("div", {
        className: "col-0 col-md-3 col-lg-3 px-3",
        id: "sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react.default.createElement(_sideBar.default, {
        filter: filterDefault,
        page: page,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      })), _react.default.createElement("div", {
        className: "col-12 col-md-9 col-lg-9 px-0",
        id: "cat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react.default.createElement("ol", {
        className: "breadcrumb bg-white pl-0 mb-0 pt-0 mt-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, breadcrumb.home && _react.default.createElement("li", {
        className: "breadcrumb-item",
        itemScope: true,
        itemType: "http://data-vocabulary.org/Breadcrumb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, _react.default.createElement(_routes.Link, {
        prefetch: true,
        route: breadcrumb.home.uri,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, _react.default.createElement("a", {
        itemProp: "url",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, _react.default.createElement("span", {
        itemProp: "title",
        className: "font-13",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, breadcrumb.home.name)))), breadcrumb.subitems), _react.default.createElement("div", {
        className: "bg-white px-3 py-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, _react.default.createElement("h1", {
        className: "font-25 font-weight-normal text-black-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, h1), _react.default.createElement("ul", {
        className: "list-unstyled my-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, projects && projects.map(function (value, index) {
        return _react.default.createElement("li", {
          className: "media border border-right-0 border-left-0 border-bottom-0 border-gray p-3 position-relative my-3 container",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          }
        }, _react.default.createElement("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          }
        }, _react.default.createElement("div", {
          className: "col-md-5 col-lg-5 col-12 col-sm-12 images-service position-relative px-0",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          }
        }, _react.default.createElement(_routes.Link, {
          route: "project.detail",
          params: {
            id: value.id,
            slug: value.slug
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          }
        }, _react.default.createElement("a", {
          className: "link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          }
        }, _react.default.createElement("img", {
          src: value.public_avatar,
          alt: "",
          className: "mr-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          }
        }))), _react.default.createElement("div", {
          className: "position-absolute image-actions py-4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          }
        }, _react.default.createElement("span", {
          className: "actions-detail font-16 d-flex justify-content-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          }
        }, _react.default.createElement("i", {
          className: "fa fa-picture-o mr-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          }
        }), " ", value.total_images + " ảnh"))), _react.default.createElement("div", {
          className: "media-body col-md-7 col-lg-7 col-12 col-sm-12 position-relative",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          }
        }, _react.default.createElement(_routes.Link, {
          route: "project.detail",
          params: {
            id: value.id,
            slug: value.slug
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          }
        }, _react.default.createElement("a", {
          className: "link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          }
        }, _react.default.createElement("h2", {
          className: "font-18",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          }
        }, value && value.name))), _react.default.createElement("div", {
          className: "media-header my-3 p-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          }
        }, _react.default.createElement("div", {
          className: "rounded-circle logo",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          }
        }, _react.default.createElement("img", {
          src: value.providers && value.providers.path_avatar,
          className: "img-fluid h-100 rounded-circle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          }
        })), _react.default.createElement("div", {
          className: "media-title pl-3 d-flex align-items-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          }
        }, _react.default.createElement(_routes.Link, {
          route: "pro.detail",
          params: {
            id: value.providers.id,
            slug: value.providers.slug
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          }
        }, _react.default.createElement("a", {
          className: "mt-0 mb-1 h6 font-14 text-black-100 font-weight-bold",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140
          }
        }, value.providers && value.providers.name)))), _react.default.createElement("div", {
          className: "media-content mt-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          }
        }, _react.default.createElement("span", {
          className: "more font-14 font-weight-light",
          dangerouslySetInnerHTML: {
            __html: value.descriptions && value.descriptions
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          }
        })))));
      }))), _react.default.createElement("div", {
        className: "pagi_desktop my-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }, _react.default.createElement(_pagination.default, {
        activePage: this.state.activePage,
        itemsCountPerPage: this.props.data.datas.per_page,
        totalItemsCount: this.props.data.datas.total,
        pageRangeDisplayed: 8,
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
          lineNumber: 163
        }
      }))))));
    }
  }]);

  return _default;
}(_react.default.Component);

exports.default = _default;

/***/ })

})
//# sourceMappingURL=6.c15db4d59cbe2045cc2f.hot-update.js.map