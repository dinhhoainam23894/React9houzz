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
      console.log(this.props);
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
      }, _react.default.createElement("div", {
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
      }))))), _react.default.createElement("div", {
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
        }, value.name), _react.default.createElement("div", {
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
        }), " ", value.total + ' ảnh'), value.address && _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          },
          className: "jsx-3233782465" + " " + "info location-info"
        }, _react.default.createElement("i", {
          "aria-hidden": "true",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          className: "jsx-3233782465" + " " + "fa fa-map-marker my-auto"
        }), " ", value.address)))));
      }))))), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        className: "jsx-3233782465" + " " + "project-more"
      }, _react.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        className: "jsx-3233782465" + " " + "font-25"
      }, "M\u1ECDi ng\u01B0\u1EDDi th\u01B0\u1EDDng xem th\xEAm"), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        className: "jsx-3233782465" + " " + "row"
      }, relateData && (0, _helpers.mapObject)(relateData, function (index, value) {
        return _react.default.createElement("div", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161
          },
          className: "jsx-3233782465" + " " + "col-3 col-md-3"
        }, _react.default.createElement(_routes.Link, {
          route: "project-detail",
          params: {
            id: index,
            slug: "".concat(value.slug)
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162
          }
        }, _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163
          },
          className: "jsx-3233782465" + " " + "card border-none"
        }, _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 164
          },
          className: "jsx-3233782465" + " " + "card-image"
        }, _react.default.createElement("img", {
          src: value.avatar,
          alt: "Card image cap",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165
          },
          className: "jsx-3233782465" + " " + "card-img-top"
        })), _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 167
          },
          className: "jsx-3233782465" + " " + "card-body bg-gray px-0 py-2"
        }, _react.default.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 168
          },
          className: "jsx-3233782465" + " " + "card-title"
        }, value.name)))));
      }))))), _react.default.createElement(_style.default, {
        styleId: "3233782465",
        css: ".provider{background-color:#ddd !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2plY3QvZGV0YWlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtMMkIsQUFFb0MsaUNBQUMiLCJmaWxlIjoicGFnZXMvcHJvamVjdC9kZXRhaWwuanMiLCJzb3VyY2VSb290IjoiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9teS1uZXh0LWFwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm92aWRlckRldGFpbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Byby1kZXRhaWwnXG5pbXBvcnQge21hcE9iamVjdCwgdWNmaXJzdH0gZnJvbSBcIi4uLy4uL2xpYnJhcmllcy9oZWxwZXJzXCI7XG5pbXBvcnQge0xpbmssIFJvdXRlcn0gZnJvbSAnLi4vLi4vcm91dGVzJ1xuaW1wb3J0IEltYWdlTW9kYWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9pbWFnZS1tb2RhbCc7XG5pbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnXG5pbXBvcnQgY3NzIGZyb20gXCIuL2luZGV4LmNzc1wiO1xuXG5jb25zdCBBUElVUkwgPSBwcm9jZXNzLmVudi5ET01BSU4gKyBwcm9jZXNzLmVudi5BUElVUklcbmNvbnN0IEFQSVBST0pFQ1QgPSBBUElVUkwgKyAncHJvamVjdC8nXG5jb25zdCBBUElQUk8gPSBBUElVUkwgKyAncHJvdmlkZXIvJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoe3F1ZXJ5fSkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKEFQSVBST0pFQ1QgKyBxdWVyeS5pZClcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIGNvbnN0IHJlc1BybyA9IGF3YWl0IGZldGNoKEFQSVBSTyArIGRhdGEucHJvamVjdC51c2VyX2lkKVxuICAgIGNvbnN0IGRhdGFQcm8gPSBhd2FpdCByZXNQcm8uanNvbigpXG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBxdWVyeS5pZFxuICAgICAgLCBkYXRhOiBkYXRhUHJvXG4gICAgICAsIHByb3ZpZGVyOiBkYXRhUHJvLnByb3ZpZGVyXG4gICAgICAsIHByb2plY3Q6IGRhdGEucHJvamVjdFxuICAgICAgLCBpbWFnZXM6IGRhdGEucHJvamVjdC5pbWFnZXNcbiAgICAgICwgc2x1ZzogcXVlcnkuc2x1Z1xuICAgICAgLCB0aXRsZTogZGF0YS5zZW8udGl0bGVcbiAgICAgICwgZGVzOiBkYXRhLnNlby5kZXNcbiAgICAgICwgY2Fub25pY2FsOiBkYXRhLnNlby5jYW5vbmljYWxcbiAgICAgICwgcm9ib3RzOiBkYXRhLnNlby5yb2JvdHNcbiAgICAgICwgb2dfdXJsOiBkYXRhLnNlby51cmxcbiAgICAgICwgdXJsX2ltYWdlczogZGF0YS5zZW8udXJsX2ltYWdlXG4gICAgICAsIGhlYWRlclByb2plY3RzOiBkYXRhUHJvLmhlYWRlclByb2plY3RzXG4gICAgICAsIGhlYWRlckNhdGVnb3JpZXM6IGRhdGFQcm8uaGVhZGVyQ2F0ZWdvcmllc1xuICAgICAgLCBkYXRhQmFzZTogZGF0YVByby5kYXRhQmFzZVxuICAgICAgLCByZWxhdGVEYXRhIDogZGF0YS5yZWxhdGVEYXRhXG4gICAgICAsIGxpc3RQcm9qZWN0cyA6IGRhdGEubGlzdFByb2plY3RzXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcHJvdmlkZXIsIGRhdGEsIHByb2plY3QsIGltYWdlcyAscmVsYXRlRGF0YSAsIGxpc3RQcm9qZWN0c30gPSB0aGlzLnByb3BzXG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcylcbiAgICByZXR1cm4gKFxuICAgICAgPFByb3ZpZGVyRGV0YWlsIHByb3ZpZGVyX2lkPXtwcm92aWRlci5pZH0gcHJvdmlkZXJfc2x1Zz17cHJvdmlkZXIuc2x1Z30gZGF0YT17ZGF0YX0gey4uLnRoaXMucHJvcHN9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtZGV0YWlsLW1haW5cIiBpZD1cImNhdFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICB7Lyo8bmF2IGFyaWEtbGFiZWw9XCJicmVhZGNydW1iXCI+Ki99XG4gICAgICAgICAgICAgIHsvKjxvbCBjbGFzc05hbWU9XCJicmVhZGNydW1iIHAtMCBwbC0wXCI+Ki99XG4gICAgICAgICAgICAgICAgey8qPGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItaXRlbVwiPjxhIGhyZWY9XCIjXCI+SG9tZTwvYT48L2xpPiovfVxuICAgICAgICAgICAgICAgIHsvKjxsaSBjbGFzc05hbWU9XCJicmVhZGNydW1iLWl0ZW0gYWN0aXZlXCIgYXJpYS1jdXJyZW50PVwicGFnZVwiPkxpYnJhcnk8L2xpPiovfVxuICAgICAgICAgICAgICB7Lyo8L29sPiovfVxuICAgICAgICAgICAgey8qPC9uYXY+Ki99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC04IGNvbC1tZC04XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dCBiZy13aGl0ZSBwLTMgYm9yZGVyIGJvcmRlci1ncmF5XCI+XG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC0yNSBmb250LXdlaWdodC1ub3JtYWxcIj57cHJvamVjdC5uYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ub3JtYWwgbXktMyBwcm9qZWN0LWRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBwcm9qZWN0LmRlc2NyaXB0aW9uc319Lz5cbiAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LmFkZHJlc3MgJiZcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtMTQgZm9udC13ZWlnaHQtbm9ybWFsXCI+PHN0cm9uZz7EkOG7i2EgY2jhu4k8L3N0cm9uZz57XCI6IFwiICsgcHJvamVjdC5hZGRyZXNzfTwvcD59XG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3QubW9yZV9pbmZvcyAmJiBtYXBPYmplY3QocHJvamVjdC5tb3JlX2luZm9zLCBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9ICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxwIGNsYXNzTmFtZT1cImZvbnQtMTQgZm9udC13ZWlnaHQtbm9ybWFsXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3VjZmlyc3QoaW5kZXgpfTwvc3Ryb25nPntcIjogXCIgKyB2YWx1ZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0IGJnLXdoaXRlIHB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZXMgJiYgaW1hZ2VzLm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJteS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LXRpdGxlIHRleHQtY2VudGVyIG14LWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LTIyIHRleHQtYmxhY2stMTAwIHBvc2l0aW9uLXJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiB7dmFsdWUubmFtZSAmJiB2YWx1ZS5uYW1lfSA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1pbWFnZSBteS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLnN0YXR1cyA9PSAxID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayByb3V0ZT0naW1hZ2UnIHBhcmFtcz17e2lkOiB2YWx1ZS5pZCwgc2x1ZzogYCR7dmFsdWUuc2x1Z31gfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J3Bob3RvTGluaycgb25DbGljaz17KGUpID0+IHRoaXMuc2hvd1Bob3RvKGUsIHZhbHVlLmlkLCB2YWx1ZS5zbHVnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt2YWx1ZS5sYXJnZV9wYXRofSBhbHQ9e3ZhbHVlLm5hbWV9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBjbGFzc05hbWU9J3Bob3RvTGluaycgcmVsPVwibm9mb2xsb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt2YWx1ZS5sYXJnZV9wYXRofSBhbHQ9e3ZhbHVlLm5hbWV9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiB2YWx1ZS5kZXNjcmlwdGlvbnN9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1rZXl3b3JkIGJnLXdoaXRlIHAtMyBteS00XCI+Ki99XG4gICAgICAgICAgICAgICAgICB7Lyo8cCBjbGFzc05hbWU9XCJrZXl3b3JkLXRpdGxlIGZvbnQtMjVcIj5U4burIGtow7NhPC9wPiovfVxuICAgICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJwdC0wIGtleXdvcmQtdGFnc1wiPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPHNwYW4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZm9udC0xMiBmb250LXdlaWdodC1ub3JtYWwgYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS13aGl0ZSBib3JkZXIgYm9yZGVyLXByaW1hcnkgcHktMiBweC0zIG1iLTJcIj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qVGhp4bq/dCBr4bq/IG7hu5lpIHRo4bqldCBjaHVuZyBjxrAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjwvc3Bhbj4qL31cbiAgICAgICAgICAgICAgICAgICAgey8qPHNwYW4qL31cbiAgICAgICAgICAgICAgICAgICAgICB7LypjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmb250LTEyIGZvbnQtd2VpZ2h0LW5vcm1hbCBiYWRnZSBiYWRnZS1waWxsIGJhZGdlLXdoaXRlIGJvcmRlciBib3JkZXItcHJpbWFyeSBweS0yIHB4LTMgbWItMlwiPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7LypUaGnhur90IGvhur8gbuG7mWkgdGjhuqV0IGNodW5nIGPGsCovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPC9zcGFuPiovfVxuICAgICAgICAgICAgICAgICAgICB7Lyo8c3BhbiovfVxuICAgICAgICAgICAgICAgICAgICAgIHsvKmNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZvbnQtMTIgZm9udC13ZWlnaHQtbm9ybWFsIGJhZGdlIGJhZGdlLXBpbGwgYmFkZ2Utd2hpdGUgYm9yZGVyIGJvcmRlci1wcmltYXJ5IHB5LTIgcHgtMyBtYi0yXCI+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKlRoaeG6v3Qga+G6vyBu4buZaSB0aOG6pXQgY2h1bmcgY8awKi99XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8L3NwYW4+PHNwYW4qL31cbiAgICAgICAgICAgICAgICAgICAgey8qY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZm9udC0xMiBmb250LXdlaWdodC1ub3JtYWwgYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS13aGl0ZSBib3JkZXIgYm9yZGVyLXByaW1hcnkgcHktMiBweC0zIG1iLTJcIj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qVGhp4bq/dCBr4bq/IG7hu5lpIHRo4bqldCBjaHVuZyBjxrAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjwvc3Bhbj48c3BhbiovfVxuICAgICAgICAgICAgICAgICAgICB7LypjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmb250LTEyIGZvbnQtd2VpZ2h0LW5vcm1hbCBiYWRnZSBiYWRnZS1waWxsIGJhZGdlLXdoaXRlIGJvcmRlciBib3JkZXItcHJpbWFyeSBweS0yIHB4LTMgbWItMlwiPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7LypUaGnhur90IGvhur8gbuG7mWkgdGjhuqV0IGNodW5nIGPGsCovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPC9zcGFuPiovfVxuICAgICAgICAgICAgICAgICAgey8qPC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgey8qPC9kaXY+Ki99XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00IGNvbC1tZC00IHByb2plY3Qtc2lkZWJhclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC0zXCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWItdGl0bGUgcG9zaXRpb24tcmVsYXRpdmVcIj5E4buxIMOhbiBjw7luZyBjaHV5w6puIGdpYTwvcD5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkIG10LTNcIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGxpc3RQcm9qZWN0cyAmJiBsaXN0UHJvamVjdHMubWFwKCh2YWx1ZSxpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm15LTNcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtaW1hZ2UgbXItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3ZhbHVlLmF2YXRhcn0gYWx0PVwiR2VuZXJpYyBwbGFjZWhvbGRlciBpbWFnZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTAgbWItMiBmb250LTE0XCI+e3ZhbHVlLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWlubGluZSBwcm8taW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8gcHJvamVjdC1pbmZvIG1yLTMgZmxvYXQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBpY3R1cmUtbyBteS1hdXRvXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiB7dmFsdWUudG90YWwgKyAnIOG6o25oJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZS5hZGRyZXNzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvIGxvY2F0aW9uLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLW1hcC1tYXJrZXIgbXktYXV0b1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4ge3ZhbHVlLmFkZHJlc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1tb3JlXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC0yNVwiPk3hu41pIG5nxrDhu51pIHRoxrDhu51uZyB4ZW0gdGjDqm08L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmVsYXRlRGF0YSAmJiBtYXBPYmplY3QocmVsYXRlRGF0YSwoaW5kZXgsdmFsdWUpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0zIGNvbC1tZC0zXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayByb3V0ZT0ncHJvamVjdC1kZXRhaWwnIHBhcmFtcz17e2lkOiBpbmRleCAsIHNsdWc6IGAke3ZhbHVlLnNsdWd9YH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgYm9yZGVyLW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCIgc3JjPXt2YWx1ZS5hdmF0YXJ9IGFsdD1cIkNhcmQgaW1hZ2UgY2FwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBiZy1ncmF5IHB4LTAgcHktMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPnt2YWx1ZS5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC5wcm92aWRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L1Byb3ZpZGVyRGV0YWlsPlxuICAgIClcbiAgfVxufSJdfQ== */\n/*@ sourceURL=pages/project/detail.js */"
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
//# sourceMappingURL=6.cda50ea04f723d7b7905.hot-update.js.map