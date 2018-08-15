webpackHotUpdate(5,{

/***/ "./pages/news.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"));

var _layout = _interopRequireDefault(__webpack_require__("./components/layout.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _home = _interopRequireDefault(__webpack_require__("./pages/home.css"));

__webpack_require__("./node_modules/isomorphic-fetch/fetch-npm-browserify.js");

var _reactSlick = _interopRequireDefault(__webpack_require__("./node_modules/react-slick/lib/index.js"));

var _helpers = __webpack_require__("./libraries/helpers.js");

var _routes = __webpack_require__("./routes.js");

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/pages/news.js";

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

var APIURL = "https://api.9houz.com/" + "api/" + 'home/';

var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var banner = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: "linear",
        swipeToSlide: true
      };
      var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: "linear",
        swipeToSlide: true,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        }, {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
      };
      var _props = this.props,
          providers = _props.providers,
          listType = _props.listType,
          images = _props.images;
      return _react.default.createElement(_layout.default, _extends({}, this.props, {
        navmenu: false,
        container: false,
        css: _home.default,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }), _react.default.createElement("div", {
        className: "homepage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react.default.createElement(_reactSlick.default, _extends({}, banner, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }), _react.default.createElement("div", {
        className: "slide d-flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react.default.createElement("div", {
        className: "overlay",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }), _react.default.createElement("img", {
        src: "/images/home-banner1.png",
        alt: "",
        className: "img-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }), _react.default.createElement("div", {
        className: "caption d-flex justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react.default.createElement("div", {
        className: "container py-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, "1000+ \xFD t\u01B0\u1EDFng \u0111\u1EB9p cho ng\xF4i nh\xE0 c\u1EE7a b\u1EA1n"), _react.default.createElement("p", {
        className: "font-20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, "9houz cung c\u1EA5p m\u1ED9t kho \xFD t\u01B0\u1EDFng kh\u1ED5ng l\u1ED3 v\u1EDBi h\u01A1n 1000 b\u1EE9c \u1EA3nh \u0111\u1EB9p cho ng\xF4i nh\xE0 c\u1EE7a b\u1EA1n"), _react.default.createElement(_routes.Link, {
        route: "y-tuong",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, _react.default.createElement("a", {
        className: "btn btn-primary mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, "T\xECm \xFD t\u01B0\u1EDFng"))))), _react.default.createElement("div", {
        className: "slide d-flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react.default.createElement("div", {
        className: "overlay",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }), _react.default.createElement("img", {
        src: "/images/home-banner2.png",
        alt: "",
        className: "img-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }), _react.default.createElement("div", {
        className: "caption d-flex justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, _react.default.createElement("div", {
        className: "container py-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, _react.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, "Chuy\xEAn gia trong l\u0129nh v\u1EF1c n\u1ED9i th\u1EA5t tr\xEAn 63 t\u1EC9nh th\xE0nh"), _react.default.createElement("p", {
        className: "font-20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, "9Houz s\u1EBD gi\xFAp b\u1EA1n k\u1EBFt n\u1ED1i v\u1EDBi h\u01A1n 1000 Chuy\xEAn gia trong l\u0129nh v\u1EF1c Thi\u1EBFt k\u1EBF & thi c\xF4ng n\u1ED9i th\u1EA5t tr\xEAn 63 t\u1EC9nh th\xE0nh"), _react.default.createElement("a", {
        className: "btn btn-primary mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, "T\xECm chuy\xEAn gia"))))), _react.default.createElement("div", {
        className: "home-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, _react.default.createElement("div", {
        className: "professional container py-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, _react.default.createElement("h2", {
        className: "text-center my-3 position-relative title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, "Chuy\xEAn gia ti\xEAu bi\u1EC3u"), _react.default.createElement(_reactSlick.default, _extends({}, settings, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }), providers && providers.map(function (value, index) {
        return _react.default.createElement("div", {
          className: "card-professional card p-3",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          }
        }, _react.default.createElement("div", {
          className: "embed-responsive embed-responsive-1by1 image-pro rounded-circle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          }
        }, _react.default.createElement("img", {
          src: value.avatar_cover,
          alt: "",
          className: "embed-responsive-item rounded-circle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          }
        })), _react.default.createElement("div", {
          className: "card-contend mt-3 text-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          }
        }, _react.default.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          }
        }, value.name), _react.default.createElement(_routes.Link, {
          route: "pro.detail",
          params: {
            id: value.id,
            slug: value.slug
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          }
        }, _react.default.createElement("a", {
          className: "photoLink",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          }
        }, _react.default.createElement("button", {
          className: "btn btn-primary badge-pill badge-primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          }
        }, "Xem th\xEAm")))));
      }))), _react.default.createElement("div", {
        className: "main-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, _react.default.createElement("div", {
        className: "blog",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, _react.default.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, _react.default.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, listType && (0, _helpers.mapObject)(listType, function (index, value) {
        return _react.default.createElement("div", {
          className: "col-4 col-md-4",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          }
        }, _react.default.createElement("h2", {
          className: "my-4 position-relative sub-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          }
        }, index), _react.default.createElement("div", {
          className: "card my-4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          }
        }, _react.default.createElement("div", {
          className: "folding-edge",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          }
        }), _react.default.createElement(_routes.Link, {
          route: "project.detail",
          params: {
            id: value.main_project && value.main_project.id,
            slug: value.main_project && value.main_project.slug
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149
          }
        }, _react.default.createElement("a", {
          className: "photoLink",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150
          }
        }, _react.default.createElement("div", {
          className: "card-img-top",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          }
        }, _react.default.createElement("img", {
          className: "img-fluid",
          src: value.main_project && value.main_project.avatar,
          alt: "Card image cap",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          }
        })))), _react.default.createElement("div", {
          className: "card-body",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          }
        }, _react.default.createElement("p", {
          className: "card-title font-15",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          }
        }, value.main_project && value.main_project.name), _react.default.createElement("div", {
          className: "text ellipsis position-relative",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          }
        }, _react.default.createElement("p", {
          className: "card-text font-14",
          dangerouslySetInnerHTML: {
            __html: value.main_project.descriptions && value.main_project.descriptions
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          }
        })), _react.default.createElement("ul", {
          className: "list-unstyled",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161
          }
        }, value.projects && value.projects.map(function (value, index) {
          return _react.default.createElement(_routes.Link, {
            route: "project.detail",
            params: {
              id: value.id,
              slug: value.slug
            },
            key: index,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 164
            }
          }, _react.default.createElement("a", {
            className: "photoLink",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 165
            }
          }, _react.default.createElement("li", {
            className: "media py-3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 166
            }
          }, _react.default.createElement("img", {
            className: "mr-3",
            src: value.avatar && value.avatar,
            alt: "Generic placeholder image",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 167
            }
          }), _react.default.createElement("div", {
            className: "media-body",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 168
            }
          }, _react.default.createElement("p", {
            className: "mt-0 mb-1 text-black font-14 media-title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 169
            }
          }, value.name && value.name)))));
        })))));
      })))), _react.default.createElement("h2", {
        className: "text-center my-5 position-relative title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }, "\xDD t\u01B0\u1EDFng m\u1EDBi nh\u1EA5t"), _react.default.createElement("div", {
        className: "new-idea position-relative",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }, _react.default.createElement("div", {
        className: "overlay",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      }), _react.default.createElement("div", {
        className: "container py-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      }, _react.default.createElement(_reactSlick.default, _extends({}, settings, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      }), images && images.map(function (value, index) {
        return _react.default.createElement("div", {
          className: "p-2 idea-slide-items embed-responsive embed-responsive-4by3",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192
          }
        }, _react.default.createElement(_routes.Link, {
          route: "image",
          params: {
            id: value.id,
            slug: value.slug
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193
          }
        }, _react.default.createElement("a", {
          className: "photoLink embed-responsive-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 194
          }
        }, _react.default.createElement("img", {
          src: value.large_path,
          className: "img-fluid",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 195
          }
        }))));
      }))))))));
    }
  }], [{
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
                return fetch(APIURL);

              case 3:
                res = _context.sent;
                _context.next = 6;
                return res.json();

              case 6:
                data = _context.sent;
                return _context.abrupt("return", {
                  title: data.seo ? data.seo.title : null,
                  des: data.seo ? data.seo.des : null,
                  canonical: data.seo ? data.seo.canonical : null,
                  robots: data.seo ? data.seo.robots : null,
                  og_url: data.seo ? data.seo.url : null,
                  url_images: data.seo ? data.seo.url_images : null,
                  headerProjects: data.headerProjects,
                  headerCategories: data.headerCategories,
                  dataBase: data.dataBase,
                  providers: data.providers,
                  listType: data.listType,
                  images: data.images.data
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/news")
  

/***/ })

})
//# sourceMappingURL=5.da4a3536563ee54bbf5e.hot-update.js.map