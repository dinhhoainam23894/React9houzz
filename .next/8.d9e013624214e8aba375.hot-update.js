webpackHotUpdate(8,{

/***/ "./pages/project/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));

var _regenerator = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"));

var _routes = __webpack_require__("./routes.js");

var _proDetail = _interopRequireDefault(__webpack_require__("./components/pro-detail.js"));

var _imageModal = _interopRequireDefault(__webpack_require__("./components/image-modal.js"));

__webpack_require__("./node_modules/isomorphic-fetch/fetch-npm-browserify.js");

var _helpers = __webpack_require__("./libraries/helpers.js");

var _index = _interopRequireDefault(__webpack_require__("./pages/project/index.css"));

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/pages/project/index.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
var APIPROJECT = APIURL + 'project/';
var APIPRO = APIURL + 'provider/'; // import Router from 'next/router';

var Project =
/*#__PURE__*/
function (_Component) {
  _inherits(Project, _Component);

  _createClass(Project, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_ref) {
        var query, res, data, resPro, dataPro;
        return _regenerator.default.wrap(function _callee$(_context) {
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
                  images: data.project.images,
                  slug: query.slug,
                  title: data.seo.title,
                  des: data.seo.des,
                  canonical: data.seo.canonical,
                  robots: data.seo.robots,
                  og_url: data.seo.url,
                  url_images: data.seo.url_image,
                  headerProjects: dataPro.headerProjects,
                  headerCategories: dataPro.headerCategories,
                  dataBase: dataPro.dataBase
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
    _this.state = {
      data: {},
      provider: {},
      project: {},
      images: []
    };
    return _this;
  }

  _createClass(Project, [{
    key: "showPhoto",
    value: function showPhoto(e, id, slug) {
      e.preventDefault();

      _routes.Router.push("/project?id=".concat(this.props.id, "&photoId=").concat(id, "&slug=").concat(slug), "/anh/".concat(id, "-").concat(slug));
    }
  }, {
    key: "dismissModal",
    value: function dismissModal(id, slug) {
      _routes.Router.pushRoute('project.detail', {
        id: id,
        slug: "".concat(slug)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          url = _props.url,
          provider = _props.provider,
          data = _props.data,
          project = _props.project,
          images = _props.images;
      return _react.default.createElement(_proDetail.default, _extends({
        provider_id: provider.id,
        provider_slug: provider.slug,
        data: data
      }, this.props, {
        css: _index.default,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }), url.query.photoId && _react.default.createElement(_imageModal.default, {
        id: url.query.photoId,
        slug: url.query.slug,
        detail: false,
        popup: false,
        onDismiss: function onDismiss() {
          return _this2.dismissModal(url.query.id, url.query.slug);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }), _react.default.createElement("div", {
        className: "mt-3 project-detail",
        id: "cat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react.default.createElement("div", {
        className: "row m-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react.default.createElement("div", {
        className: "offset-md-1 col-12 col-md-10 col-lg-10 offset-md-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react.default.createElement("div", {
        className: "px-4 bg-white idea-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react.default.createElement("div", {
        className: "about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react.default.createElement("h1", {
        className: "font-25 font-weight-normal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, project.name), _react.default.createElement("p", {
        className: "font-14 font-weight-normal my-3",
        dangerouslySetInnerHTML: {
          __html: project.descriptions
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }), _react.default.createElement("p", {
        className: "font-14 font-weight-normal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react.default.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, "\u0110\u1ECBa ch\u1EC9"), ": " + project.address), project.more_infos && (0, _helpers.mapObject)(project.more_infos, function (index, value) {
        if (value != '') return _react.default.createElement("p", {
          className: "font-14 font-weight-normal",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          }
        }, _react.default.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          }
        }, (0, _helpers.ucfirst)(index)), ": " + value);
      }), _react.default.createElement("p", {
        className: "font-14 font-weight-normal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      })), _react.default.createElement("div", {
        className: "about bg-white py-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react.default.createElement("ul", {
        className: "list-unstyled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, images && images.map(function (value, index) {
        return _react.default.createElement("li", {
          className: "media border border-bottom-0 border-right-0 border-left-0 border-gray py-3 position-relative container w-100 mb-2 px-0",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          }
        }, _react.default.createElement("div", {
          className: "row w-100 m-0",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          }
        }, _react.default.createElement("div", {
          className: "px-0",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          }
        }, _react.default.createElement("div", {
          className: "project-image position-relative",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          }
        }, value.status == 1 ? _react.default.createElement(_routes.Link, {
          route: "image",
          params: {
            id: value.id,
            slug: "".concat(value.slug)
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          }
        }, _react.default.createElement("a", {
          className: "photoLink",
          onClick: function onClick(e) {
            return _this2.showPhoto(e, value.id, value.slug);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          }
        }, _react.default.createElement("img", {
          src: value.large_path,
          alt: value.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          }
        }))) : _react.default.createElement("a", {
          href: "javascript:void(0)",
          className: "photoLink",
          rel: "nofollow",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          }
        }, _react.default.createElement("img", {
          src: value.large_path,
          alt: value.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          }
        })), _react.default.createElement("div", {
          className: "project-action",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          }
        }, _react.default.createElement("button", {
          className: "btn btn-primary med save text-white",
          title: "Save To Ideabook",
          compid: "addToIdeabook",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          }
        }, _react.default.createElement("i", {
          className: "fa fa-plus pr-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107
          }
        }), "L\u01B0u \u1EA3nh")))), _react.default.createElement("div", {
          className: "project-mobile-action d-block d-md-none w-100 my-2 text-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          }
        }, _react.default.createElement("button", {
          className: "btn btn-primary med save text-white",
          title: "Save To Ideabook",
          compid: "addToIdeabook",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          }
        }, _react.default.createElement("i", {
          className: "fa fa-plus pr-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          }
        }), "L\u01B0u \u1EA3nh")), _react.default.createElement("div", {
          className: "media-body pl-3 position-relative",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          }
        }, _react.default.createElement("div", {
          className: "media-header",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          }
        }, _react.default.createElement("div", {
          className: "media-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          }
        }, _react.default.createElement("h2", {
          className: "font-22 text-black-100",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          }
        }, value.status == 1 ? _react.default.createElement(_routes.Link, {
          prefetch: true,
          route: "image",
          params: {
            id: value.id,
            slug: "".concat(value.slug)
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          }
        }, _react.default.createElement("a", {
          className: "mt-0 mb-1 font-22 text-black-100",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          }
        }, value.name)) : _react.default.createElement("a", {
          rel: "nofollow",
          href: "javascript:void(0)",
          className: "mt-0 mb-1 font-22 text-black-100",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          }
        }, value.name)))), _react.default.createElement("div", {
          className: "media-content mt-1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          }
        }, _react.default.createElement("span", {
          className: "font-15 text-gray",
          dangerouslySetInnerHTML: {
            __html: value.descriptions
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          }
        })))));
      }))))))));
    }
  }]);

  return Project;
}(_react.Component);

exports.default = Project;
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
  

/***/ })

})
//# sourceMappingURL=8.d9e013624214e8aba375.hot-update.js.map