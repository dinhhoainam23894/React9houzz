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
        className: "jsx-3233782465" + " " + "project-detail-container"
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
        className: "jsx-3233782465" + " " + "col-12 col-md-8"
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
        className: "jsx-3233782465" + " " + "col-12 col-md-4 project-sidebar"
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
        className: "jsx-3233782465" + " " + "project-more mt-3"
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
          className: "jsx-3233782465" + " " + "col-12 col-md-3"
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
        css: ".provider{background-color:#ddd !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2plY3QvZGV0YWlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZNMkIsQUFFb0MsaUNBQUMiLCJmaWxlIjoicGFnZXMvcHJvamVjdC9kZXRhaWwuanMiLCJzb3VyY2VSb290IjoiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9teS1uZXh0LWFwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm92aWRlckRldGFpbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Byby1kZXRhaWwnXG5pbXBvcnQge21hcE9iamVjdCwgdWNmaXJzdH0gZnJvbSBcIi4uLy4uL2xpYnJhcmllcy9oZWxwZXJzXCI7XG5pbXBvcnQge0xpbmssIFJvdXRlcn0gZnJvbSAnLi4vLi4vcm91dGVzJ1xuaW1wb3J0IEltYWdlTW9kYWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9pbWFnZS1tb2RhbCc7XG5pbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnXG5pbXBvcnQgY3NzIGZyb20gXCIuL2RldGFpbC5jc3NcIjtcblxuY29uc3QgQVBJVVJMID0gcHJvY2Vzcy5lbnYuRE9NQUlOICsgcHJvY2Vzcy5lbnYuQVBJVVJJXG5jb25zdCBBUElQUk9KRUNUID0gQVBJVVJMICsgJ3Byb2plY3QvJ1xuY29uc3QgQVBJUFJPID0gQVBJVVJMICsgJ3Byb3ZpZGVyLydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHtxdWVyeX0pIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChBUElQUk9KRUNUICsgcXVlcnkuaWQpXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICBjb25zdCByZXNQcm8gPSBhd2FpdCBmZXRjaChBUElQUk8gKyBkYXRhLnByb2plY3QudXNlcl9pZClcbiAgICBjb25zdCBkYXRhUHJvID0gYXdhaXQgcmVzUHJvLmpzb24oKVxuICAgIHJldHVybiB7XG4gICAgICBpZDogcXVlcnkuaWRcbiAgICAgICwgZGF0YTogZGF0YVByb1xuICAgICAgLCBwcm92aWRlcjogZGF0YVByby5wcm92aWRlclxuICAgICAgLCBwcm9qZWN0OiBkYXRhLnByb2plY3RcbiAgICAgICwgaW1hZ2VzOiBkYXRhLmltYWdlcy5kYXRhXG4gICAgICAsIHNsdWc6IHF1ZXJ5LnNsdWdcbiAgICAgICwgdGl0bGU6IGRhdGEuc2VvLnRpdGxlXG4gICAgICAsIGRlczogZGF0YS5zZW8uZGVzXG4gICAgICAsIGNhbm9uaWNhbDogZGF0YS5zZW8uY2Fub25pY2FsXG4gICAgICAsIHJvYm90czogZGF0YS5zZW8ucm9ib3RzXG4gICAgICAsIG9nX3VybDogZGF0YS5zZW8udXJsXG4gICAgICAsIHVybF9pbWFnZXM6IGRhdGEuc2VvLnVybF9pbWFnZVxuICAgICAgLCBoZWFkZXJQcm9qZWN0czogZGF0YVByby5oZWFkZXJQcm9qZWN0c1xuICAgICAgLCBoZWFkZXJDYXRlZ29yaWVzOiBkYXRhUHJvLmhlYWRlckNhdGVnb3JpZXNcbiAgICAgICwgZGF0YUJhc2U6IGRhdGFQcm8uZGF0YUJhc2VcbiAgICAgICwgcmVsYXRlRGF0YSA6IGRhdGEucmVsYXRlRGF0YVxuICAgICAgLCBsaXN0UHJvamVjdHMgOiBkYXRhLmxpc3RQcm9qZWN0c1xuICAgIH1cbiAgfVxuICBzaG93UGhvdG8gKGUsIGlkICwgc2x1Zykge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIFJvdXRlci5wdXNoKGAvcHJvamVjdD9pZD0ke3RoaXMucHJvcHMuaWR9JnBob3RvSWQ9JHtpZH0mc2x1Zz0ke3NsdWd9YCxgL2FuaC8ke2lkfS0ke3NsdWd9YClcbiAgfVxuICBkaXNtaXNzTW9kYWwgKGlkICwgc2x1Zykge1xuICAgIFJvdXRlci5wdXNoUm91dGUoJ3Byb2plY3QuZGV0YWlsJywge2lkOiBpZCAsIHNsdWcgOiBgJHtzbHVnfWB9KVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7dXJsICwgcHJvdmlkZXIsIGRhdGEsIHByb2plY3QsIGltYWdlcyAscmVsYXRlRGF0YSAsIGxpc3RQcm9qZWN0c30gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxQcm92aWRlckRldGFpbCBwcm92aWRlcl9pZD17cHJvdmlkZXIuaWR9IHByb3ZpZGVyX3NsdWc9e3Byb3ZpZGVyLnNsdWd9IGRhdGE9e2RhdGF9IHsuLi50aGlzLnByb3BzfSBjc3M9e2Nzc30+XG4gICAgICAgIHtcbiAgICAgICAgICB1cmwucXVlcnkucGhvdG9JZCAmJlxuICAgICAgICAgIDxJbWFnZU1vZGFsXG4gICAgICAgICAgICBpZD17dXJsLnF1ZXJ5LnBob3RvSWR9XG4gICAgICAgICAgICBzbHVnPXt1cmwucXVlcnkuc2x1Z31cbiAgICAgICAgICAgIGRldGFpbD17ZmFsc2V9XG4gICAgICAgICAgICBwb3B1cD17ZmFsc2V9XG4gICAgICAgICAgICBjdXJyZW50UGF0aD17dXJsLnBhdGhuYW1lfVxuICAgICAgICAgICAgb25EaXNtaXNzPXsoKSA9PiB0aGlzLmRpc21pc3NNb2RhbCh1cmwucXVlcnkuaWQsdXJsLnF1ZXJ5LnNsdWcpfVxuICAgICAgICAgIC8+XG4gICAgICAgIH1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWRldGFpbC1tYWluXCIgaWQ9XCJjYXRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtZGV0YWlsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgey8qPG5hdiBhcmlhLWxhYmVsPVwiYnJlYWRjcnVtYlwiPiovfVxuICAgICAgICAgICAgICB7Lyo8b2wgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYiBwLTAgcGwtMFwiPiovfVxuICAgICAgICAgICAgICAgIHsvKjxsaSBjbGFzc05hbWU9XCJicmVhZGNydW1iLWl0ZW1cIj48YSBocmVmPVwiI1wiPkhvbWU8L2E+PC9saT4qL31cbiAgICAgICAgICAgICAgICB7Lyo8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1pdGVtIGFjdGl2ZVwiIGFyaWEtY3VycmVudD1cInBhZ2VcIj5MaWJyYXJ5PC9saT4qL31cbiAgICAgICAgICAgICAgey8qPC9vbD4qL31cbiAgICAgICAgICAgIHsvKjwvbmF2PiovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLThcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0IGJnLXdoaXRlIHAtMyBib3JkZXIgYm9yZGVyLWdyYXlcIj5cbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LTI1IGZvbnQtd2VpZ2h0LW5vcm1hbFwiPntwcm9qZWN0Lm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LW5vcm1hbCBteS0zIHByb2plY3QtZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHByb2plY3QuZGVzY3JpcHRpb25zfX0vPlxuICAgICAgICAgICAgICAgICAge3Byb2plY3QuYWRkcmVzcyAmJlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC0xNCBmb250LXdlaWdodC1ub3JtYWxcIj48c3Ryb25nPsSQ4buLYSBjaOG7iTwvc3Ryb25nPntcIjogXCIgKyBwcm9qZWN0LmFkZHJlc3N9PC9wPn1cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5tb3JlX2luZm9zICYmIG1hcE9iamVjdChwcm9qZWN0Lm1vcmVfaW5mb3MsIGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT0gJycpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHAgY2xhc3NOYW1lPVwiZm9udC0xNCBmb250LXdlaWdodC1ub3JtYWxcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57dWNmaXJzdChpbmRleCl9PC9zdHJvbmc+e1wiOiBcIiArIHZhbHVlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQgYmctd2hpdGUgcHktM1wiPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlcyAmJiBpbWFnZXMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cIm15LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtdGl0bGUgdGV4dC1jZW50ZXIgbXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtMjIgdGV4dC1ibGFjay0xMDAgcG9zaXRpb24tcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IHt2YWx1ZS5uYW1lICYmIHZhbHVlLm5hbWV9IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWltYWdlIG15LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuc3RhdHVzID09IDEgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPSdpbWFnZScgcGFyYW1zPXt7aWQ6IHZhbHVlLmlkLCBzbHVnOiBgJHt2YWx1ZS5zbHVnfWB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0ncGhvdG9MaW5rJyBvbkNsaWNrPXsoZSkgPT4gdGhpcy5zaG93UGhvdG8oZSwgdmFsdWUuaWQsIHZhbHVlLnNsdWcpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3ZhbHVlLmxhcmdlX3BhdGh9IGFsdD17dmFsdWUubmFtZX0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIGNsYXNzTmFtZT0ncGhvdG9MaW5rJyByZWw9XCJub2ZvbGxvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3ZhbHVlLmxhcmdlX3BhdGh9IGFsdD17dmFsdWUubmFtZX0gY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHZhbHVlLmRlc2NyaXB0aW9uc319Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWtleXdvcmQgYmctd2hpdGUgcC0zIG15LTRcIj4qL31cbiAgICAgICAgICAgICAgICAgIHsvKjxwIGNsYXNzTmFtZT1cImtleXdvcmQtdGl0bGUgZm9udC0yNVwiPlThu6sga2jDs2E8L3A+Ki99XG4gICAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cInB0LTAga2V5d29yZC10YWdzXCI+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8c3BhbiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7LypjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmb250LTEyIGZvbnQtd2VpZ2h0LW5vcm1hbCBiYWRnZSBiYWRnZS1waWxsIGJhZGdlLXdoaXRlIGJvcmRlciBib3JkZXItcHJpbWFyeSBweS0yIHB4LTMgbWItMlwiPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7LypUaGnhur90IGvhur8gbuG7mWkgdGjhuqV0IGNodW5nIGPGsCovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPC9zcGFuPiovfVxuICAgICAgICAgICAgICAgICAgICB7Lyo8c3BhbiovfVxuICAgICAgICAgICAgICAgICAgICAgIHsvKmNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZvbnQtMTIgZm9udC13ZWlnaHQtbm9ybWFsIGJhZGdlIGJhZGdlLXBpbGwgYmFkZ2Utd2hpdGUgYm9yZGVyIGJvcmRlci1wcmltYXJ5IHB5LTIgcHgtMyBtYi0yXCI+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKlRoaeG6v3Qga+G6vyBu4buZaSB0aOG6pXQgY2h1bmcgY8awKi99XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8L3NwYW4+Ki99XG4gICAgICAgICAgICAgICAgICAgIHsvKjxzcGFuKi99XG4gICAgICAgICAgICAgICAgICAgICAgey8qY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZm9udC0xMiBmb250LXdlaWdodC1ub3JtYWwgYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS13aGl0ZSBib3JkZXIgYm9yZGVyLXByaW1hcnkgcHktMiBweC0zIG1iLTJcIj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qVGhp4bq/dCBr4bq/IG7hu5lpIHRo4bqldCBjaHVuZyBjxrAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjwvc3Bhbj48c3BhbiovfVxuICAgICAgICAgICAgICAgICAgICB7LypjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmb250LTEyIGZvbnQtd2VpZ2h0LW5vcm1hbCBiYWRnZSBiYWRnZS1waWxsIGJhZGdlLXdoaXRlIGJvcmRlciBib3JkZXItcHJpbWFyeSBweS0yIHB4LTMgbWItMlwiPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7LypUaGnhur90IGvhur8gbuG7mWkgdGjhuqV0IGNodW5nIGPGsCovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPC9zcGFuPjxzcGFuKi99XG4gICAgICAgICAgICAgICAgICAgIHsvKmNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZvbnQtMTIgZm9udC13ZWlnaHQtbm9ybWFsIGJhZGdlIGJhZGdlLXBpbGwgYmFkZ2Utd2hpdGUgYm9yZGVyIGJvcmRlci1wcmltYXJ5IHB5LTIgcHgtMyBtYi0yXCI+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKlRoaeG6v3Qga+G6vyBu4buZaSB0aOG6pXQgY2h1bmcgY8awKi99XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8L3NwYW4+Ki99XG4gICAgICAgICAgICAgICAgICB7Lyo8L2Rpdj4qL31cbiAgICAgICAgICAgICAgICB7Lyo8L2Rpdj4qL31cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC00IHByb2plY3Qtc2lkZWJhclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC0zXCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWItdGl0bGUgcG9zaXRpb24tcmVsYXRpdmVcIj5E4buxIMOhbiBjw7luZyBjaHV5w6puIGdpYTwvcD5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkIG10LTNcIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGxpc3RQcm9qZWN0cyAmJiBsaXN0UHJvamVjdHMubWFwKCh2YWx1ZSxpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm15LTMgbGlzdFByb2plY3RcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgcm91dGU9J3Byb2plY3QuZGV0YWlsJyBwYXJhbXM9e3tpZDogdmFsdWUuaWQgLCBzbHVnOiB2YWx1ZS5zbHVnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIGJvcmRlci0wIGZvbnQtMTQgZm9udC13ZWlnaHQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWltYWdlIG1yLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dmFsdWUuYXZhdGFyfSBhbHQ9XCJHZW5lcmljIHBsYWNlaG9sZGVyIGltYWdlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMCBtYi0yIGZvbnQtMTQgdGV4dC1ibGFja1wiPnt2YWx1ZS5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtaW5saW5lIHByby1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8gcHJvamVjdC1pbmZvIG1yLTMgZmxvYXQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1waWN0dXJlLW8gbXktYXV0b1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4ge3ZhbHVlLnRvdGFsICsgJyDhuqNuaCd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZS5hZGRyZXNzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mbyBsb2NhdGlvbi1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtbWFwLW1hcmtlciBteS1hdXRvXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiB7dmFsdWUuYWRkcmVzc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRleHQtcmlnaHQgYm9yZGVyIGJvcmRlci1ib3R0b20tMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIHB0LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayByb3V0ZT1cInByby5wcm9qZWN0XCIgcGFyYW1zPXt7IGlkOiBwcm92aWRlci5pZCAsIHNsdWcgOiBwcm92aWRlci5zbHVnIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlcIj4gWGVtIHRow6ptIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtbW9yZSBtdC0zXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC0yNVwiPk3hu41pIG5nxrDhu51pIHRoxrDhu51uZyB4ZW0gdGjDqm08L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmVsYXRlRGF0YSAmJiBtYXBPYmplY3QocmVsYXRlRGF0YSwoaW5kZXgsdmFsdWUpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtM1wiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgcm91dGU9J3Byb2plY3QuZGV0YWlsJyBwYXJhbXM9e3tpZDogaW5kZXggLCBzbHVnOiBgJHt2YWx1ZS5zbHVnfWB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgYm9yZGVyLTAgZm9udC0xNCBmb250LXdlaWdodC1ib2xkIHB4LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJvcmRlci1ub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIHNyYz17dmFsdWUuYXZhdGFyfSBhbHQ9XCJDYXJkIGltYWdlIGNhcFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgYmctZ3JheSBweC0wIHB5LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGl0bGUgdGV4dC1ibGFja1wiPnt2YWx1ZS5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgLnByb3ZpZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvUHJvdmlkZXJEZXRhaWw+XG4gICAgKVxuICB9XG59Il19 */\n/*@ sourceURL=pages/project/detail.js */"
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
//# sourceMappingURL=6.3c5b0e4a0234e9b62f7a.hot-update.js.map