webpackHotUpdate(5,{

/***/ "./pages/project/detail.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/styled-jsx/style.js"));

var _regenerator = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _proDetail = _interopRequireDefault(__webpack_require__("./components/pro-detail.js"));

var _helpers = __webpack_require__("./libraries/helpers.js");

var _routes = __webpack_require__("./routes.js");

var _imageModal = _interopRequireDefault(__webpack_require__("./components/image-modal.js"));

__webpack_require__("./node_modules/isomorphic-fetch/fetch-npm-browserify.js");

var _index = _interopRequireDefault(__webpack_require__("./pages/project/index.css"));

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/pages/project/detail.js";

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

var APIURL = "http://9houzz.stag/" + "api/";
var APIPROJECT = APIURL + 'project/';
var APIPRO = APIURL + 'provider/';

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
      var _this = this;

      var _props = this.props,
          provider = _props.provider,
          data = _props.data,
          project = _props.project,
          images = _props.images,
          relateData = _props.relateData,
          listProjects = _props.listProjects;
      console.log(listProjects);
      return _react.default.createElement(_proDetail.default, _extends({
        provider_id: provider.id,
        provider_slug: provider.slug,
        data: data
      }, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), _react.default.createElement("div", {
        id: "cat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        className: "jsx-3233782465" + " " + "project-detail-main"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        className: "jsx-3233782465" + " " + "container"
      }, _react.default.createElement("nav", {
        "aria-label": "breadcrumb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        className: "jsx-3233782465"
      }, _react.default.createElement("ol", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        className: "jsx-3233782465" + " " + "breadcrumb p-0 pl-0"
      }, _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        className: "jsx-3233782465" + " " + "breadcrumb-item"
      }, _react.default.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        className: "jsx-3233782465"
      }, "Home")), _react.default.createElement("li", {
        "aria-current": "page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        className: "jsx-3233782465" + " " + "breadcrumb-item active"
      }, "Library"))), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        className: "jsx-3233782465" + " " + "row"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        className: "jsx-3233782465" + " " + "col-8 col-md-8"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        className: "jsx-3233782465" + " " + "about bg-white p-3 border border-gray"
      }, _react.default.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        className: "jsx-3233782465" + " " + "font-25 font-weight-normal"
      }, project.name), _react.default.createElement("p", {
        dangerouslySetInnerHTML: {
          __html: project.descriptions
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        className: "jsx-3233782465" + " " + "font-weight-normal my-3 project-description"
      }), project.address && _react.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        className: "jsx-3233782465" + " " + "font-14 font-weight-normal"
      }, _react.default.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        className: "jsx-3233782465"
      }, "\u0110\u1ECBa ch\u1EC9"), ": " + project.address), project.more_infos && (0, _helpers.mapObject)(project.more_infos, function (index, value) {
        if (value != '') return _react.default.createElement("p", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          className: "jsx-3233782465" + " " + "font-14 font-weight-normal"
        }, _react.default.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          className: "jsx-3233782465"
        }, (0, _helpers.ucfirst)(index)), ": " + value);
      }), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        className: "jsx-3233782465" + " " + "about bg-white py-3"
      }, _react.default.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        className: "jsx-3233782465" + " " + "list-unstyled"
      }, images && images.map(function (value, index) {
        return _react.default.createElement("li", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          className: "jsx-3233782465" + " " + "my-3"
        }, _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          className: "jsx-3233782465" + " " + "project-title text-center mx-auto"
        }, _react.default.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          className: "jsx-3233782465" + " " + "font-22 text-black-100 position-relative"
        }, _react.default.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          className: "jsx-3233782465"
        }, " ", value.name && value.name, " "))), _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          className: "jsx-3233782465" + " " + "project-image my-3"
        }, value.status == 1 ? _react.default.createElement(_routes.Link, {
          route: "image",
          params: {
            id: value.id,
            slug: "".concat(value.slug)
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          }
        }, _react.default.createElement("a", {
          onClick: function onClick(e) {
            return _this.showPhoto(e, value.id, value.slug);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          className: "jsx-3233782465" + " " + 'photoLink'
        }, _react.default.createElement("img", {
          src: value.large_path,
          alt: value.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          className: "jsx-3233782465" + " " + "img-fluid"
        }))) : _react.default.createElement("a", {
          href: "javascript:void(0)",
          rel: "nofollow",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          className: "jsx-3233782465" + " " + 'photoLink'
        }, _react.default.createElement("img", {
          src: value.large_path,
          alt: value.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          className: "jsx-3233782465" + " " + "img-fluid"
        }))), _react.default.createElement("div", {
          dangerouslySetInnerHTML: {
            __html: value.descriptions
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          className: "jsx-3233782465" + " " + "project-description"
        }));
      })))), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        className: "jsx-3233782465" + " " + "project-keyword bg-white p-3 my-4"
      }, _react.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        className: "jsx-3233782465" + " " + "keyword-title font-25"
      }, "T\u1EEB kh\xF3a"), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        className: "jsx-3233782465" + " " + "pt-0 keyword-tags"
      }, _react.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        className: "jsx-3233782465" + " " + "text-center font-12 font-weight-normal badge badge-pill badge-white border border-primary py-2 px-3 mb-2"
      }, "Thi\u1EBFt k\u1EBF n\u1ED9i th\u1EA5t chung c\u01B0"), _react.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        className: "jsx-3233782465" + " " + "text-center font-12 font-weight-normal badge badge-pill badge-white border border-primary py-2 px-3 mb-2"
      }, "Thi\u1EBFt k\u1EBF n\u1ED9i th\u1EA5t chung c\u01B0"), _react.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        className: "jsx-3233782465" + " " + "text-center font-12 font-weight-normal badge badge-pill badge-white border border-primary py-2 px-3 mb-2"
      }, "Thi\u1EBFt k\u1EBF n\u1ED9i th\u1EA5t chung c\u01B0"), _react.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        className: "jsx-3233782465" + " " + "text-center font-12 font-weight-normal badge badge-pill badge-white border border-primary py-2 px-3 mb-2"
      }, "Thi\u1EBFt k\u1EBF n\u1ED9i th\u1EA5t chung c\u01B0"), _react.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        className: "jsx-3233782465" + " " + "text-center font-12 font-weight-normal badge badge-pill badge-white border border-primary py-2 px-3 mb-2"
      }, "Thi\u1EBFt k\u1EBF n\u1ED9i th\u1EA5t chung c\u01B0")))), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        className: "jsx-3233782465" + " " + "col-4 col-md-4 project-sidebar"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        className: "jsx-3233782465" + " " + "bg-white p-3"
      }, _react.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        className: "jsx-3233782465" + " " + "sub-title position-relative"
      }, "D\u1EF1 \xE1n c\xF9ng chuy\xEAn gia"), _react.default.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        className: "jsx-3233782465" + " " + "list-unstyled mt-3"
      }, listProjects && listProjects.map(function (value, index) {
        return _react.default.createElement("li", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          },
          className: "jsx-3233782465" + " " + "my-3"
        }, _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          },
          className: "jsx-3233782465" + " " + "media"
        }, _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          },
          className: "jsx-3233782465" + " " + "media-image mr-3"
        }, _react.default.createElement("img", {
          src: value.avatar,
          alt: "Generic placeholder image",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          },
          className: "jsx-3233782465"
        })), _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          },
          className: "jsx-3233782465" + " " + "media-body"
        }, _react.default.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          },
          className: "jsx-3233782465" + " " + "mt-0 mb-2 font-14"
        }, "Khu c\u0103n h\u1ED9 ph\u1EE9c h\u1EE3p \u0111\u1EB9p m\u1EB7t t\u1EA1i H\xE0 N\u1ED9i"), _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          },
          className: "jsx-3233782465" + " " + "d-inline pro-info"
        }, _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138
          },
          className: "jsx-3233782465" + " " + "info project-info mr-3 float-left"
        }, _react.default.createElement("i", {
          "aria-hidden": "true",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          },
          className: "jsx-3233782465" + " " + "fa fa-picture-o my-auto"
        }), " 20 \u1EA3nh"), _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          },
          className: "jsx-3233782465" + " " + "info location-info"
        }, _react.default.createElement("i", {
          "aria-hidden": "true",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          },
          className: "jsx-3233782465" + " " + "fa fa-map-marker my-auto"
        }), " H\xE0 n\u1ED9i")))));
      }))))), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        className: "jsx-3233782465" + " " + "project-more"
      }, _react.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        className: "jsx-3233782465" + " " + "font-25"
      }, "M\u1ECDi ng\u01B0\u1EDDi th\u01B0\u1EDDng xem th\xEAm"), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        className: "jsx-3233782465" + " " + "row"
      }, relateData && (0, _helpers.mapObject)(relateData, function (index, value) {
        return _react.default.createElement("div", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          },
          className: "jsx-3233782465" + " " + "col-3 col-md-3"
        }, _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          },
          className: "jsx-3233782465" + " " + "card border-none"
        }, _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161
          },
          className: "jsx-3233782465" + " " + "card-image"
        }, _react.default.createElement("img", {
          src: value.avatar,
          alt: "Card image cap",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162
          },
          className: "jsx-3233782465" + " " + "card-img-top"
        })), _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 164
          },
          className: "jsx-3233782465" + " " + "card-body bg-gray px-0 py-2"
        }, _react.default.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165
          },
          className: "jsx-3233782465" + " " + "card-title"
        }, value.name))));
      }))))), _react.default.createElement(_style.default, {
        styleId: "3233782465",
        css: ".provider{background-color:#ddd !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2plY3QvZGV0YWlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThLMkIsQUFFb0MsaUNBQUMiLCJmaWxlIjoicGFnZXMvcHJvamVjdC9kZXRhaWwuanMiLCJzb3VyY2VSb290IjoiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9teS1uZXh0LWFwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm92aWRlckRldGFpbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Byby1kZXRhaWwnXG5pbXBvcnQge21hcE9iamVjdCwgdWNmaXJzdH0gZnJvbSBcIi4uLy4uL2xpYnJhcmllcy9oZWxwZXJzXCI7XG5pbXBvcnQge0xpbmssIFJvdXRlcn0gZnJvbSAnLi4vLi4vcm91dGVzJ1xuaW1wb3J0IEltYWdlTW9kYWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9pbWFnZS1tb2RhbCc7XG5pbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnXG5pbXBvcnQgY3NzIGZyb20gXCIuL2luZGV4LmNzc1wiO1xuXG5jb25zdCBBUElVUkwgPSBwcm9jZXNzLmVudi5ET01BSU4gKyBwcm9jZXNzLmVudi5BUElVUklcbmNvbnN0IEFQSVBST0pFQ1QgPSBBUElVUkwgKyAncHJvamVjdC8nXG5jb25zdCBBUElQUk8gPSBBUElVUkwgKyAncHJvdmlkZXIvJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoe3F1ZXJ5fSkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKEFQSVBST0pFQ1QgKyBxdWVyeS5pZClcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIGNvbnN0IHJlc1BybyA9IGF3YWl0IGZldGNoKEFQSVBSTyArIGRhdGEucHJvamVjdC51c2VyX2lkKVxuICAgIGNvbnN0IGRhdGFQcm8gPSBhd2FpdCByZXNQcm8uanNvbigpXG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBxdWVyeS5pZFxuICAgICAgLCBkYXRhOiBkYXRhUHJvXG4gICAgICAsIHByb3ZpZGVyOiBkYXRhUHJvLnByb3ZpZGVyXG4gICAgICAsIHByb2plY3Q6IGRhdGEucHJvamVjdFxuICAgICAgLCBpbWFnZXM6IGRhdGEucHJvamVjdC5pbWFnZXNcbiAgICAgICwgc2x1ZzogcXVlcnkuc2x1Z1xuICAgICAgLCB0aXRsZTogZGF0YS5zZW8udGl0bGVcbiAgICAgICwgZGVzOiBkYXRhLnNlby5kZXNcbiAgICAgICwgY2Fub25pY2FsOiBkYXRhLnNlby5jYW5vbmljYWxcbiAgICAgICwgcm9ib3RzOiBkYXRhLnNlby5yb2JvdHNcbiAgICAgICwgb2dfdXJsOiBkYXRhLnNlby51cmxcbiAgICAgICwgdXJsX2ltYWdlczogZGF0YS5zZW8udXJsX2ltYWdlXG4gICAgICAsIGhlYWRlclByb2plY3RzOiBkYXRhUHJvLmhlYWRlclByb2plY3RzXG4gICAgICAsIGhlYWRlckNhdGVnb3JpZXM6IGRhdGFQcm8uaGVhZGVyQ2F0ZWdvcmllc1xuICAgICAgLCBkYXRhQmFzZTogZGF0YVByby5kYXRhQmFzZVxuICAgICAgLCByZWxhdGVEYXRhIDogZGF0YS5yZWxhdGVEYXRhXG4gICAgICAsIGxpc3RQcm9qZWN0cyA6IGRhdGEubGlzdFByb2plY3RzXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcHJvdmlkZXIsIGRhdGEsIHByb2plY3QsIGltYWdlcyAscmVsYXRlRGF0YSAsIGxpc3RQcm9qZWN0c30gPSB0aGlzLnByb3BzXG4gICAgY29uc29sZS5sb2cobGlzdFByb2plY3RzKVxuICAgIHJldHVybiAoXG4gICAgICA8UHJvdmlkZXJEZXRhaWwgcHJvdmlkZXJfaWQ9e3Byb3ZpZGVyLmlkfSBwcm92aWRlcl9zbHVnPXtwcm92aWRlci5zbHVnfSBkYXRhPXtkYXRhfSB7Li4udGhpcy5wcm9wc30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1kZXRhaWwtbWFpblwiIGlkPVwiY2F0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxuYXYgYXJpYS1sYWJlbD1cImJyZWFkY3J1bWJcIj5cbiAgICAgICAgICAgICAgPG9sIGNsYXNzTmFtZT1cImJyZWFkY3J1bWIgcC0wIHBsLTBcIj5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1pdGVtXCI+PGEgaHJlZj1cIiNcIj5Ib21lPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItaXRlbSBhY3RpdmVcIiBhcmlhLWN1cnJlbnQ9XCJwYWdlXCI+TGlicmFyeTwvbGk+XG4gICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTggY29sLW1kLThcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0IGJnLXdoaXRlIHAtMyBib3JkZXIgYm9yZGVyLWdyYXlcIj5cbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LTI1IGZvbnQtd2VpZ2h0LW5vcm1hbFwiPntwcm9qZWN0Lm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LW5vcm1hbCBteS0zIHByb2plY3QtZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHByb2plY3QuZGVzY3JpcHRpb25zfX0vPlxuICAgICAgICAgICAgICAgICAge3Byb2plY3QuYWRkcmVzcyAmJlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC0xNCBmb250LXdlaWdodC1ub3JtYWxcIj48c3Ryb25nPsSQ4buLYSBjaOG7iTwvc3Ryb25nPntcIjogXCIgKyBwcm9qZWN0LmFkZHJlc3N9PC9wPn1cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5tb3JlX2luZm9zICYmIG1hcE9iamVjdChwcm9qZWN0Lm1vcmVfaW5mb3MsIGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT0gJycpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHAgY2xhc3NOYW1lPVwiZm9udC0xNCBmb250LXdlaWdodC1ub3JtYWxcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57dWNmaXJzdChpbmRleCl9PC9zdHJvbmc+e1wiOiBcIiArIHZhbHVlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQgYmctd2hpdGUgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlcyAmJiBpbWFnZXMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cIm15LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtdGl0bGUgdGV4dC1jZW50ZXIgbXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtMjIgdGV4dC1ibGFjay0xMDAgcG9zaXRpb24tcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IHt2YWx1ZS5uYW1lICYmIHZhbHVlLm5hbWV9IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWltYWdlIG15LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuc3RhdHVzID09IDEgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPSdpbWFnZScgcGFyYW1zPXt7aWQ6IHZhbHVlLmlkLCBzbHVnOiBgJHt2YWx1ZS5zbHVnfWB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0ncGhvdG9MaW5rJyBvbkNsaWNrPXsoZSkgPT4gdGhpcy5zaG93UGhvdG8oZSwgdmFsdWUuaWQsIHZhbHVlLnNsdWcpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3ZhbHVlLmxhcmdlX3BhdGh9IGFsdD17dmFsdWUubmFtZX0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIGNsYXNzTmFtZT0ncGhvdG9MaW5rJyByZWw9XCJub2ZvbGxvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3ZhbHVlLmxhcmdlX3BhdGh9IGFsdD17dmFsdWUubmFtZX0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHZhbHVlLmRlc2NyaXB0aW9uc319Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWtleXdvcmQgYmctd2hpdGUgcC0zIG15LTRcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImtleXdvcmQtdGl0bGUgZm9udC0yNVwiPlThu6sga2jDs2E8L3A+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTAga2V5d29yZC10YWdzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmb250LTEyIGZvbnQtd2VpZ2h0LW5vcm1hbCBiYWRnZSBiYWRnZS1waWxsIGJhZGdlLXdoaXRlIGJvcmRlciBib3JkZXItcHJpbWFyeSBweS0yIHB4LTMgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBUaGnhur90IGvhur8gbuG7mWkgdGjhuqV0IGNodW5nIGPGsFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZvbnQtMTIgZm9udC13ZWlnaHQtbm9ybWFsIGJhZGdlIGJhZGdlLXBpbGwgYmFkZ2Utd2hpdGUgYm9yZGVyIGJvcmRlci1wcmltYXJ5IHB5LTIgcHgtMyBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFRoaeG6v3Qga+G6vyBu4buZaSB0aOG6pXQgY2h1bmcgY8awXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZm9udC0xMiBmb250LXdlaWdodC1ub3JtYWwgYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS13aGl0ZSBib3JkZXIgYm9yZGVyLXByaW1hcnkgcHktMiBweC0zIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgVGhp4bq/dCBr4bq/IG7hu5lpIHRo4bqldCBjaHVuZyBjxrBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj48c3BhblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmb250LTEyIGZvbnQtd2VpZ2h0LW5vcm1hbCBiYWRnZSBiYWRnZS1waWxsIGJhZGdlLXdoaXRlIGJvcmRlciBib3JkZXItcHJpbWFyeSBweS0yIHB4LTMgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBUaGnhur90IGvhur8gbuG7mWkgdGjhuqV0IGNodW5nIGPGsFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPjxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZvbnQtMTIgZm9udC13ZWlnaHQtbm9ybWFsIGJhZGdlIGJhZGdlLXBpbGwgYmFkZ2Utd2hpdGUgYm9yZGVyIGJvcmRlci1wcmltYXJ5IHB5LTIgcHgtMyBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFRoaeG6v3Qga+G6vyBu4buZaSB0aOG6pXQgY2h1bmcgY8awXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTQgY29sLW1kLTQgcHJvamVjdC1zaWRlYmFyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTNcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1Yi10aXRsZSBwb3NpdGlvbi1yZWxhdGl2ZVwiPkThu7Egw6FuIGPDuW5nIGNodXnDqm4gZ2lhPC9wPlxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWQgbXQtM1wiPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbGlzdFByb2plY3RzICYmIGxpc3RQcm9qZWN0cy5tYXAoKHZhbHVlLGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXktM1wiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1pbWFnZSBtci0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dmFsdWUuYXZhdGFyfSBhbHQ9XCJHZW5lcmljIHBsYWNlaG9sZGVyIGltYWdlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMCBtYi0yIGZvbnQtMTRcIj5LaHUgY8SDbiBo4buZIHBo4bupYyBo4bujcCDEkeG6uXAgbeG6t3QgdOG6oWkgSMOgIE7hu5lpPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWlubGluZSBwcm8taW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8gcHJvamVjdC1pbmZvIG1yLTMgZmxvYXQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBpY3R1cmUtbyBteS1hdXRvXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiAyMCDhuqNuaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvIGxvY2F0aW9uLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1tYXAtbWFya2VyIG15LWF1dG9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IEjDoCBu4buZaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1tb3JlXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC0yNVwiPk3hu41pIG5nxrDhu51pIHRoxrDhu51uZyB4ZW0gdGjDqm08L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmVsYXRlRGF0YSAmJiBtYXBPYmplY3QocmVsYXRlRGF0YSwoaW5kZXgsdmFsdWUpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0zIGNvbC1tZC0zXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgYm9yZGVyLW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBzcmM9e3ZhbHVlLmF2YXRhcn0gYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgYmctZ3JheSBweC0wIHB5LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e3ZhbHVlLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAucHJvdmlkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9Qcm92aWRlckRldGFpbD5cbiAgICApXG4gIH1cbn0iXX0= */\n/*@ sourceURL=pages/project/detail.js */"
      }));
    }
  }], [{
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
                  dataBase: dataPro.dataBase,
                  relateData: data.relateData,
                  listProjects: data.listProjects
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/project/detail")
  

/***/ })

})
//# sourceMappingURL=5.5c4d5f3d35ed31045f08.hot-update.js.map