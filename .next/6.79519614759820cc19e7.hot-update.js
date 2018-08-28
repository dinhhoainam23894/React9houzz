webpackHotUpdate(6,{

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

var _detail = _interopRequireDefault(__webpack_require__("./pages/project/detail.css"));

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

var APIURL = "https://api.9houz.com/" + "api/";
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
      var _this = this;

      var _props = this.props,
          url = _props.url,
          provider = _props.provider,
          data = _props.data,
          project = _props.project,
          images = _props.images,
          relateData = _props.relateData,
          listProjects = _props.listProjects;
      return _react.default.createElement(_proDetail.default, _extends({
        provider_id: provider.id,
        provider_slug: provider.slug,
        data: data
      }, this.props, {
        css: _detail.default,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }), url.query.photoId && _react.default.createElement(_imageModal.default, {
        id: url.query.photoId,
        slug: url.query.slug,
        detail: false,
        popup: false,
        currentPath: url.pathname,
        onDismiss: function onDismiss() {
          return _this.dismissModal(url.query.id, url.query.slug);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }), _react.default.createElement("div", {
        id: "cat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        className: "jsx-3233782465" + " " + "project-detail-main"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        className: "jsx-3233782465" + " " + "container"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        className: "jsx-3233782465" + " " + "row"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        className: "jsx-3233782465" + " " + "col-8 col-md-8"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        className: "jsx-3233782465" + " " + "about bg-white p-3 border border-gray"
      }, _react.default.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        className: "jsx-3233782465" + " " + "font-25 font-weight-normal"
      }, project.name), _react.default.createElement("p", {
        dangerouslySetInnerHTML: {
          __html: project.descriptions
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        className: "jsx-3233782465" + " " + "font-weight-normal my-3 project-description"
      }), project.address && _react.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        className: "jsx-3233782465" + " " + "font-14 font-weight-normal"
      }, _react.default.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        className: "jsx-3233782465"
      }, "\u0110\u1ECBa ch\u1EC9"), ": " + project.address), project.more_infos && (0, _helpers.mapObject)(project.more_infos, function (index, value) {
        if (value != '') return _react.default.createElement("p", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          className: "jsx-3233782465" + " " + "font-14 font-weight-normal"
        }, _react.default.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          className: "jsx-3233782465"
        }, (0, _helpers.ucfirst)(index)), ": " + value);
      }), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        className: "jsx-3233782465" + " " + "about bg-white py-3"
      }, _react.default.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        className: "jsx-3233782465" + " " + "list-unstyled"
      }, images && images.map(function (value, index) {
        return _react.default.createElement("li", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          className: "jsx-3233782465" + " " + "my-3"
        }, _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          className: "jsx-3233782465" + " " + "project-title text-center mx-auto"
        }, _react.default.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          className: "jsx-3233782465" + " " + "font-22 text-black-100 position-relative"
        }, _react.default.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          className: "jsx-3233782465"
        }, " ", value.name && value.name, " "))), _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
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
            lineNumber: 97
          }
        }, _react.default.createElement("a", {
          onClick: function onClick(e) {
            return _this.showPhoto(e, value.id, value.slug);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          className: "jsx-3233782465" + " " + 'photoLink'
        }, _react.default.createElement("img", {
          src: value.large_path,
          alt: value.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          className: "jsx-3233782465" + " " + "img-fluid"
        }))) : _react.default.createElement("a", {
          href: "javascript:void(0)",
          rel: "nofollow",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          className: "jsx-3233782465" + " " + 'photoLink'
        }, _react.default.createElement("img", {
          src: value.large_path,
          alt: value.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          },
          className: "jsx-3233782465" + " " + "img-fluid"
        }))), _react.default.createElement("div", {
          dangerouslySetInnerHTML: {
            __html: value.descriptions
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          className: "jsx-3233782465" + " " + "project-description"
        }));
      }))))), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        className: "jsx-3233782465" + " " + "col-4 col-md-4 project-sidebar"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        className: "jsx-3233782465" + " " + "bg-white p-3"
      }, _react.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        className: "jsx-3233782465" + " " + "sub-title position-relative"
      }, "D\u1EF1 \xE1n c\xF9ng chuy\xEAn gia"), _react.default.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        className: "jsx-3233782465" + " " + "list-unstyled mt-3"
      }, listProjects && listProjects.map(function (value, index) {
        return _react.default.createElement("li", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146
          },
          className: "jsx-3233782465" + " " + "my-3 listProject"
        }, _react.default.createElement(_routes.Link, {
          route: "project.detail",
          params: {
            id: value.id,
            slug: value.slug
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          }
        }, _react.default.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          },
          className: "jsx-3233782465" + " " + "nav-link border-0 font-14 font-weight-bold"
        }, _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149
          },
          className: "jsx-3233782465" + " " + "media"
        }, _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150
          },
          className: "jsx-3233782465" + " " + "media-image mr-3"
        }, _react.default.createElement("img", {
          src: value.avatar,
          alt: "Generic placeholder image",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          },
          className: "jsx-3233782465"
        })), _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          },
          className: "jsx-3233782465" + " " + "media-body"
        }, _react.default.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154
          },
          className: "jsx-3233782465" + " " + "mt-0 mb-2 font-14 text-black"
        }, value.name), _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          },
          className: "jsx-3233782465" + " " + "d-inline pro-info"
        }, _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          },
          className: "jsx-3233782465" + " " + "info project-info mr-3 float-left"
        }, _react.default.createElement("i", {
          "aria-hidden": "true",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          },
          className: "jsx-3233782465" + " " + "fa fa-picture-o my-auto"
        }), " ", value.total + ' ảnh'), value.address && _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          },
          className: "jsx-3233782465" + " " + "info location-info"
        }, _react.default.createElement("i", {
          "aria-hidden": "true",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161
          },
          className: "jsx-3233782465" + " " + "fa fa-map-marker my-auto"
        }), " ", value.address)))))));
      }), _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        className: "jsx-3233782465" + " " + "text-right border border-bottom-0 border-left-0 border-right-0 pt-3"
      }, _react.default.createElement(_routes.Link, {
        route: "pro.project",
        params: {
          id: provider.id,
          slug: provider.slug
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }, _react.default.createElement("a", {
        href: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        className: "jsx-3233782465" + " " + "text-primary"
      }, " Xem th\xEAm "))))))), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        className: "jsx-3233782465" + " " + "project-more"
      }, _react.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        className: "jsx-3233782465" + " " + "font-25"
      }, "M\u1ECDi ng\u01B0\u1EDDi th\u01B0\u1EDDng xem th\xEAm"), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        className: "jsx-3233782465" + " " + "row"
      }, relateData && (0, _helpers.mapObject)(relateData, function (index, value) {
        return _react.default.createElement("div", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186
          },
          className: "jsx-3233782465" + " " + "col-3 col-md-3"
        }, _react.default.createElement(_routes.Link, {
          route: "project.detail",
          params: {
            id: index,
            slug: "".concat(value.slug)
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 187
          }
        }, _react.default.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188
          },
          className: "jsx-3233782465" + " " + "nav-link border-0 font-14 font-weight-bold px-0"
        }, _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          },
          className: "jsx-3233782465" + " " + "card border-none"
        }, _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 190
          },
          className: "jsx-3233782465" + " " + "card-image"
        }, _react.default.createElement("img", {
          src: value.avatar,
          alt: "Card image cap",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191
          },
          className: "jsx-3233782465" + " " + "card-img-top"
        })), _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193
          },
          className: "jsx-3233782465" + " " + "card-body bg-gray px-0 py-2"
        }, _react.default.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 194
          },
          className: "jsx-3233782465" + " " + "card-title text-black"
        }, value.name))))));
      }))))), _react.default.createElement(_style.default, {
        styleId: "3233782465",
        css: ".provider{background-color:#ddd !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2plY3QvZGV0YWlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZNMkIsQUFFb0MsaUNBQUMiLCJmaWxlIjoicGFnZXMvcHJvamVjdC9kZXRhaWwuanMiLCJzb3VyY2VSb290IjoiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9teS1uZXh0LWFwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm92aWRlckRldGFpbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Byby1kZXRhaWwnXG5pbXBvcnQge21hcE9iamVjdCwgdWNmaXJzdH0gZnJvbSBcIi4uLy4uL2xpYnJhcmllcy9oZWxwZXJzXCI7XG5pbXBvcnQge0xpbmssIFJvdXRlcn0gZnJvbSAnLi4vLi4vcm91dGVzJ1xuaW1wb3J0IEltYWdlTW9kYWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9pbWFnZS1tb2RhbCc7XG5pbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnXG5pbXBvcnQgY3NzIGZyb20gXCIuL2RldGFpbC5jc3NcIjtcblxuY29uc3QgQVBJVVJMID0gcHJvY2Vzcy5lbnYuRE9NQUlOICsgcHJvY2Vzcy5lbnYuQVBJVVJJXG5jb25zdCBBUElQUk9KRUNUID0gQVBJVVJMICsgJ3Byb2plY3QvJ1xuY29uc3QgQVBJUFJPID0gQVBJVVJMICsgJ3Byb3ZpZGVyLydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHtxdWVyeX0pIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChBUElQUk9KRUNUICsgcXVlcnkuaWQpXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICBjb25zdCByZXNQcm8gPSBhd2FpdCBmZXRjaChBUElQUk8gKyBkYXRhLnByb2plY3QudXNlcl9pZClcbiAgICBjb25zdCBkYXRhUHJvID0gYXdhaXQgcmVzUHJvLmpzb24oKVxuICAgIHJldHVybiB7XG4gICAgICBpZDogcXVlcnkuaWRcbiAgICAgICwgZGF0YTogZGF0YVByb1xuICAgICAgLCBwcm92aWRlcjogZGF0YVByby5wcm92aWRlclxuICAgICAgLCBwcm9qZWN0OiBkYXRhLnByb2plY3RcbiAgICAgICwgaW1hZ2VzOiBkYXRhLmltYWdlcy5kYXRhXG4gICAgICAsIHNsdWc6IHF1ZXJ5LnNsdWdcbiAgICAgICwgdGl0bGU6IGRhdGEuc2VvLnRpdGxlXG4gICAgICAsIGRlczogZGF0YS5zZW8uZGVzXG4gICAgICAsIGNhbm9uaWNhbDogZGF0YS5zZW8uY2Fub25pY2FsXG4gICAgICAsIHJvYm90czogZGF0YS5zZW8ucm9ib3RzXG4gICAgICAsIG9nX3VybDogZGF0YS5zZW8udXJsXG4gICAgICAsIHVybF9pbWFnZXM6IGRhdGEuc2VvLnVybF9pbWFnZVxuICAgICAgLCBoZWFkZXJQcm9qZWN0czogZGF0YVByby5oZWFkZXJQcm9qZWN0c1xuICAgICAgLCBoZWFkZXJDYXRlZ29yaWVzOiBkYXRhUHJvLmhlYWRlckNhdGVnb3JpZXNcbiAgICAgICwgZGF0YUJhc2U6IGRhdGFQcm8uZGF0YUJhc2VcbiAgICAgICwgcmVsYXRlRGF0YSA6IGRhdGEucmVsYXRlRGF0YVxuICAgICAgLCBsaXN0UHJvamVjdHMgOiBkYXRhLmxpc3RQcm9qZWN0c1xuICAgIH1cbiAgfVxuICBzaG93UGhvdG8gKGUsIGlkICwgc2x1Zykge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIFJvdXRlci5wdXNoKGAvcHJvamVjdD9pZD0ke3RoaXMucHJvcHMuaWR9JnBob3RvSWQ9JHtpZH0mc2x1Zz0ke3NsdWd9YCxgL2FuaC8ke2lkfS0ke3NsdWd9YClcbiAgfVxuICBkaXNtaXNzTW9kYWwgKGlkICwgc2x1Zykge1xuICAgIFJvdXRlci5wdXNoUm91dGUoJ3Byb2plY3QuZGV0YWlsJywge2lkOiBpZCAsIHNsdWcgOiBgJHtzbHVnfWB9KVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7dXJsICwgcHJvdmlkZXIsIGRhdGEsIHByb2plY3QsIGltYWdlcyAscmVsYXRlRGF0YSAsIGxpc3RQcm9qZWN0c30gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxQcm92aWRlckRldGFpbCBwcm92aWRlcl9pZD17cHJvdmlkZXIuaWR9IHByb3ZpZGVyX3NsdWc9e3Byb3ZpZGVyLnNsdWd9IGRhdGE9e2RhdGF9IHsuLi50aGlzLnByb3BzfSBjc3M9e2Nzc30+XG4gICAgICAgIHtcbiAgICAgICAgICB1cmwucXVlcnkucGhvdG9JZCAmJlxuICAgICAgICAgIDxJbWFnZU1vZGFsXG4gICAgICAgICAgICBpZD17dXJsLnF1ZXJ5LnBob3RvSWR9XG4gICAgICAgICAgICBzbHVnPXt1cmwucXVlcnkuc2x1Z31cbiAgICAgICAgICAgIGRldGFpbD17ZmFsc2V9XG4gICAgICAgICAgICBwb3B1cD17ZmFsc2V9XG4gICAgICAgICAgICBjdXJyZW50UGF0aD17dXJsLnBhdGhuYW1lfVxuICAgICAgICAgICAgb25EaXNtaXNzPXsoKSA9PiB0aGlzLmRpc21pc3NNb2RhbCh1cmwucXVlcnkuaWQsdXJsLnF1ZXJ5LnNsdWcpfVxuICAgICAgICAgIC8+XG4gICAgICAgIH1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWRldGFpbC1tYWluXCIgaWQ9XCJjYXRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgey8qPG5hdiBhcmlhLWxhYmVsPVwiYnJlYWRjcnVtYlwiPiovfVxuICAgICAgICAgICAgICB7Lyo8b2wgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYiBwLTAgcGwtMFwiPiovfVxuICAgICAgICAgICAgICAgIHsvKjxsaSBjbGFzc05hbWU9XCJicmVhZGNydW1iLWl0ZW1cIj48YSBocmVmPVwiI1wiPkhvbWU8L2E+PC9saT4qL31cbiAgICAgICAgICAgICAgICB7Lyo8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1pdGVtIGFjdGl2ZVwiIGFyaWEtY3VycmVudD1cInBhZ2VcIj5MaWJyYXJ5PC9saT4qL31cbiAgICAgICAgICAgICAgey8qPC9vbD4qL31cbiAgICAgICAgICAgIHsvKjwvbmF2PiovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtOCBjb2wtbWQtOFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQgYmctd2hpdGUgcC0zIGJvcmRlciBib3JkZXItZ3JheVwiPlxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtMjUgZm9udC13ZWlnaHQtbm9ybWFsXCI+e3Byb2plY3QubmFtZX08L2gxPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtbm9ybWFsIG15LTMgcHJvamVjdC1kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogcHJvamVjdC5kZXNjcmlwdGlvbnN9fS8+XG4gICAgICAgICAgICAgICAgICB7cHJvamVjdC5hZGRyZXNzICYmXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LTE0IGZvbnQtd2VpZ2h0LW5vcm1hbFwiPjxzdHJvbmc+xJDhu4thIGNo4buJPC9zdHJvbmc+e1wiOiBcIiArIHByb2plY3QuYWRkcmVzc308L3A+fVxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Lm1vcmVfaW5mb3MgJiYgbWFwT2JqZWN0KHByb2plY3QubW9yZV9pbmZvcywgZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPSAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8cCBjbGFzc05hbWU9XCJmb250LTE0IGZvbnQtd2VpZ2h0LW5vcm1hbFwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPnt1Y2ZpcnN0KGluZGV4KX08L3N0cm9uZz57XCI6IFwiICsgdmFsdWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dCBiZy13aGl0ZSBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VzICYmIGltYWdlcy5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwibXktM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC10aXRsZSB0ZXh0LWNlbnRlciBteC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC0yMiB0ZXh0LWJsYWNrLTEwMCBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ge3ZhbHVlLm5hbWUgJiYgdmFsdWUubmFtZX0gPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtaW1hZ2UgbXktM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5zdGF0dXMgPT0gMSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgcm91dGU9J2ltYWdlJyBwYXJhbXM9e3tpZDogdmFsdWUuaWQsIHNsdWc6IGAke3ZhbHVlLnNsdWd9YH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdwaG90b0xpbmsnIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnNob3dQaG90byhlLCB2YWx1ZS5pZCwgdmFsdWUuc2x1Zyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dmFsdWUubGFyZ2VfcGF0aH0gYWx0PXt2YWx1ZS5uYW1lfSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3NOYW1lPSdwaG90b0xpbmsnIHJlbD1cIm5vZm9sbG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dmFsdWUubGFyZ2VfcGF0aH0gYWx0PXt2YWx1ZS5uYW1lfSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogdmFsdWUuZGVzY3JpcHRpb25zfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cInByb2plY3Qta2V5d29yZCBiZy13aGl0ZSBwLTMgbXktNFwiPiovfVxuICAgICAgICAgICAgICAgICAgey8qPHAgY2xhc3NOYW1lPVwia2V5d29yZC10aXRsZSBmb250LTI1XCI+VOG7qyBraMOzYTwvcD4qL31cbiAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwicHQtMCBrZXl3b3JkLXRhZ3NcIj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxzcGFuKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKmNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZvbnQtMTIgZm9udC13ZWlnaHQtbm9ybWFsIGJhZGdlIGJhZGdlLXBpbGwgYmFkZ2Utd2hpdGUgYm9yZGVyIGJvcmRlci1wcmltYXJ5IHB5LTIgcHgtMyBtYi0yXCI+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKlRoaeG6v3Qga+G6vyBu4buZaSB0aOG6pXQgY2h1bmcgY8awKi99XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8L3NwYW4+Ki99XG4gICAgICAgICAgICAgICAgICAgIHsvKjxzcGFuKi99XG4gICAgICAgICAgICAgICAgICAgICAgey8qY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZm9udC0xMiBmb250LXdlaWdodC1ub3JtYWwgYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS13aGl0ZSBib3JkZXIgYm9yZGVyLXByaW1hcnkgcHktMiBweC0zIG1iLTJcIj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qVGhp4bq/dCBr4bq/IG7hu5lpIHRo4bqldCBjaHVuZyBjxrAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjwvc3Bhbj4qL31cbiAgICAgICAgICAgICAgICAgICAgey8qPHNwYW4qL31cbiAgICAgICAgICAgICAgICAgICAgICB7LypjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmb250LTEyIGZvbnQtd2VpZ2h0LW5vcm1hbCBiYWRnZSBiYWRnZS1waWxsIGJhZGdlLXdoaXRlIGJvcmRlciBib3JkZXItcHJpbWFyeSBweS0yIHB4LTMgbWItMlwiPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7LypUaGnhur90IGvhur8gbuG7mWkgdGjhuqV0IGNodW5nIGPGsCovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPC9zcGFuPjxzcGFuKi99XG4gICAgICAgICAgICAgICAgICAgIHsvKmNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZvbnQtMTIgZm9udC13ZWlnaHQtbm9ybWFsIGJhZGdlIGJhZGdlLXBpbGwgYmFkZ2Utd2hpdGUgYm9yZGVyIGJvcmRlci1wcmltYXJ5IHB5LTIgcHgtMyBtYi0yXCI+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKlRoaeG6v3Qga+G6vyBu4buZaSB0aOG6pXQgY2h1bmcgY8awKi99XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8L3NwYW4+PHNwYW4qL31cbiAgICAgICAgICAgICAgICAgICAgey8qY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZm9udC0xMiBmb250LXdlaWdodC1ub3JtYWwgYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS13aGl0ZSBib3JkZXIgYm9yZGVyLXByaW1hcnkgcHktMiBweC0zIG1iLTJcIj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qVGhp4bq/dCBr4bq/IG7hu5lpIHRo4bqldCBjaHVuZyBjxrAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjwvc3Bhbj4qL31cbiAgICAgICAgICAgICAgICAgIHsvKjwvZGl2PiovfVxuICAgICAgICAgICAgICAgIHsvKjwvZGl2PiovfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNCBjb2wtbWQtNCBwcm9qZWN0LXNpZGViYXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtM1wiPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3ViLXRpdGxlIHBvc2l0aW9uLXJlbGF0aXZlXCI+ROG7sSDDoW4gY8O5bmcgY2h1ecOqbiBnaWE8L3A+XG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZCBtdC0zXCI+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBsaXN0UHJvamVjdHMgJiYgbGlzdFByb2plY3RzLm1hcCgodmFsdWUsaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJteS0zIGxpc3RQcm9qZWN0XCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPSdwcm9qZWN0LmRldGFpbCcgcGFyYW1zPXt7aWQ6IHZhbHVlLmlkICwgc2x1ZzogdmFsdWUuc2x1ZyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayBib3JkZXItMCBmb250LTE0IGZvbnQtd2VpZ2h0LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1pbWFnZSBtci0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3ZhbHVlLmF2YXRhcn0gYWx0PVwiR2VuZXJpYyBwbGFjZWhvbGRlciBpbWFnZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTAgbWItMiBmb250LTE0IHRleHQtYmxhY2tcIj57dmFsdWUubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWlubGluZSBwcm8taW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvIHByb2plY3QtaW5mbyBtci0zIGZsb2F0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcGljdHVyZS1vIG15LWF1dG9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IHt2YWx1ZS50b3RhbCArICcg4bqjbmgnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWUuYWRkcmVzcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8gbG9jYXRpb24taW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLW1hcC1tYXJrZXIgbXktYXV0b1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4ge3ZhbHVlLmFkZHJlc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0IGJvcmRlciBib3JkZXItYm90dG9tLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBwdC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgcm91dGU9XCJwcm8ucHJvamVjdFwiIHBhcmFtcz17eyBpZDogcHJvdmlkZXIuaWQgLCBzbHVnIDogcHJvdmlkZXIuc2x1ZyB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5XCI+IFhlbSB0aMOqbSA8L2E+XG4gICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LW1vcmVcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LTI1XCI+TeG7jWkgbmfGsOG7nWkgdGjGsOG7nW5nIHhlbSB0aMOqbTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByZWxhdGVEYXRhICYmIG1hcE9iamVjdChyZWxhdGVEYXRhLChpbmRleCx2YWx1ZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTMgY29sLW1kLTNcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPSdwcm9qZWN0LmRldGFpbCcgcGFyYW1zPXt7aWQ6IGluZGV4ICwgc2x1ZzogYCR7dmFsdWUuc2x1Z31gfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIGJvcmRlci0wIGZvbnQtMTQgZm9udC13ZWlnaHQtYm9sZCBweC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBib3JkZXItbm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1pbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBzcmM9e3ZhbHVlLmF2YXRhcn0gYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJnLWdyYXkgcHgtMCBweS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIHRleHQtYmxhY2tcIj57dmFsdWUubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC5wcm92aWRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L1Byb3ZpZGVyRGV0YWlsPlxuICAgIClcbiAgfVxufSJdfQ== */\n/*@ sourceURL=pages/project/detail.js */"
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
                  images: data.images.data,
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
//# sourceMappingURL=6.79519614759820cc19e7.hot-update.js.map