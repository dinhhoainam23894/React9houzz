webpackHotUpdate(5,{

/***/ "./pages/project/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Project; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_pro_detail__ = __webpack_require__("./components/pro-detail.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_image_modal__ = __webpack_require__("./components/image-modal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_fetch__ = __webpack_require__("./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__libraries_helpers__ = __webpack_require__("./libraries/helpers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_next_router__);

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/pages/project/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var APIURL = "https://9houz.com/" + "api/";
var APIPROJECT = APIURL + 'project/';
var APIPRO = APIURL + 'provider/';


var Project =
/*#__PURE__*/
function (_Component) {
  _inherits(Project, _Component);

  _createClass(Project, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var query, res, data, resPro, dataPro;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
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
                  slug: query.slug
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
    Object.defineProperty(_assertThisInitialized(_this), "componentDidMount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2() {
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return _this.getValue();

                case 2:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        return function value() {
          return _value.apply(this, arguments);
        };
      }()
    });
    _this.state = {
      data: {},
      provider: {},
      project: {},
      images: []
    };
    return _this;
  }

  _createClass(Project, [{
    key: "getValue",
    value: function () {
      var _getValue = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3() {
        var _this2 = this;

        var data;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return __WEBPACK_IMPORTED_MODULE_5_axios___default.a.get(APIPROJECT + this.props.id).then(function (res) {
                  data = res.data;

                  _this2.setState({
                    project: data.project,
                    images: data.project.images
                  });
                });

              case 2:
                _context3.next = 4;
                return __WEBPACK_IMPORTED_MODULE_5_axios___default.a.get(APIPRO + this.state.project.user_id).then(function (res) {
                  data = res.data;

                  _this2.setState({
                    data: data,
                    provider: data.provider
                  });
                });

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function getValue() {
        return _getValue.apply(this, arguments);
      };
    }()
  }, {
    key: "showPhoto",
    value: function showPhoto(e, id, slug) {
      e.preventDefault();
      __WEBPACK_IMPORTED_MODULE_8_next_router___default.a.push("/project?id=".concat(this.props.id, "&photoId=").concat(id, "&slug=").concat(slug), "/anh/".concat(id, "-").concat(slug));
    }
  }, {
    key: "dismissModal",
    value: function dismissModal(id, slug) {
      __WEBPACK_IMPORTED_MODULE_8_next_router___default.a.push("/du-an/".concat(id, "-").concat(slug));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var provider = this.state.provider;
      var url = this.props.url;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_pro_detail__["a" /* default */], {
        id: 1,
        slug: provider.slug,
        data: this.state.data,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, url.query.photoId && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_image_modal__["a" /* default */], {
        id: url.query.photoId,
        slug: url.query.slug,
        onDismiss: function onDismiss() {
          return _this3.dismissModal(url.query.id, url.query.slug);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "mt-3 project-detail",
        id: "cat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row m-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "offset-md-1 col-12 col-md-10 col-lg-10 offset-md-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "px-4 bg-white idea-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        className: "font-25 font-weight-normal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, this.state.project.name), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        className: "font-14 font-weight-normal mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, this.state.project.descriptions), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        className: "font-14 font-weight-normal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, "\u0110\u1ECBa ch\u1EC9"), ": ", this.state.project.address), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        className: "font-14 font-weight-normal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, "Ngu\u1ED3n d\u1EF1 \xE1n"), ":", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: this.state.project.source_url,
        rel: "nofollow",
        target: "_blank",
        className: "text-dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, " ", this.state.project.source_url)), this.state.project.more_infos && Object(__WEBPACK_IMPORTED_MODULE_7__libraries_helpers__["a" /* mapObject */])(this.state.project.more_infos, function (index, value) {
        if (value != '') return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
          className: "font-14 font-weight-normal",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          }
        }, Object(__WEBPACK_IMPORTED_MODULE_7__libraries_helpers__["c" /* ucfirst */])(index), " "), " : ", value);
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        className: "font-14 font-weight-normal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "about bg-white py-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        className: "list-unstyled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, this.state.images && this.state.images.map(function (value, index) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
          className: "media border border-bottom-0 border-right-0 border-left-0 border-gray py-3 position-relative container w-100 mb-2 px-0",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "row w-100 m-0",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "px-0",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "project-image position-relative",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
          href: "/anh/?id=".concat(value.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
          className: "photoLink",
          onClick: function onClick(e) {
            return _this3.showPhoto(e, value.id, value.slug);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("picture", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("source", {
          srcSet: value.large_path,
          media: "(max-width: 768px)",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("source", {
          srcSet: value.large_path,
          media: "(min-width: 768px)",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          }
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
          srcSet: value.large_path,
          alt: value.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          }
        })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "project-action",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
          className: "btn btn-primary med save text-white",
          title: "Save To Ideabook",
          compid: "addToIdeabook",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
          className: "fa fa-plus pr-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          }
        }), "L\u01B0u \u1EA3nh")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "project-mobile-action d-block d-md-none w-100 my-2 text-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
          className: "btn btn-primary med save text-white",
          title: "Save To Ideabook",
          compid: "addToIdeabook",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
          className: "fa fa-plus pr-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          }
        }), "L\u01B0u \u1EA3nh")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "media-body pl-3 position-relative",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "media-header",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "media-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
          className: "font-22 text-black-100",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
          className: "mt-0 mb-1 font-22 text-black-100",
          href: "{{ route('image.detail',['id' => $image->id , 'name' => standardText($image->name)]) }}",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          }
        }, value.name)))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "media-content mt-1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
          className: "font-15 text-gray",
          dangerouslySetInnerHTML: {
            __html: value.descriptions
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          }
        })))));
      }))))))));
    }
  }]);

  return Project;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);


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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/project")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.299e31c5457a4fdd3cd9.hot-update.js.map