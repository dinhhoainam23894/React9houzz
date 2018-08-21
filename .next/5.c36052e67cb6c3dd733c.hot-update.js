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
          images = _props.images;
      console.log(this.props);
      return _react.default.createElement(_proDetail.default, _extends({
        provider_id: provider.id,
        provider_slug: provider.slug,
        data: data
      }, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), _react.default.createElement("div", {
        id: "cat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        className: "jsx-3233782465" + " " + "project-detail-main"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        className: "jsx-3233782465" + " " + "container"
      }, _react.default.createElement("nav", {
        "aria-label": "breadcrumb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        className: "jsx-3233782465"
      }, _react.default.createElement("ol", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        className: "jsx-3233782465" + " " + "breadcrumb p-0 pl-0"
      }, _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        className: "jsx-3233782465" + " " + "breadcrumb-item"
      }, _react.default.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        className: "jsx-3233782465"
      }, "Home")), _react.default.createElement("li", {
        "aria-current": "page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        className: "jsx-3233782465" + " " + "breadcrumb-item active"
      }, "Library"))), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        className: "jsx-3233782465" + " " + "row"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        className: "jsx-3233782465" + " " + "col-8 col-md-8"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        className: "jsx-3233782465" + " " + "about bg-white p-3 border border-gray"
      }, _react.default.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        className: "jsx-3233782465" + " " + "font-25 font-weight-normal"
      }, project.name), _react.default.createElement("p", {
        dangerouslySetInnerHTML: {
          __html: project.descriptions
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        className: "jsx-3233782465" + " " + "font-weight-normal my-3 project-description"
      }), project.address && _react.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        className: "jsx-3233782465" + " " + "font-14 font-weight-normal"
      }, _react.default.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        className: "jsx-3233782465"
      }, "\u0110\u1ECBa ch\u1EC9"), ": " + project.address), project.more_infos && (0, _helpers.mapObject)(project.more_infos, function (index, value) {
        if (value != '') return _react.default.createElement("p", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          className: "jsx-3233782465" + " " + "font-14 font-weight-normal"
        }, _react.default.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          className: "jsx-3233782465"
        }, (0, _helpers.ucfirst)(index)), ": " + value);
      }), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        className: "jsx-3233782465" + " " + "about bg-white py-3"
      }, _react.default.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        className: "jsx-3233782465" + " " + "list-unstyled"
      }, images && images.map(function (value, index) {
        return _react.default.createElement("li", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          className: "jsx-3233782465" + " " + "my-3"
        }, _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          className: "jsx-3233782465" + " " + "project-title text-center mx-auto"
        }, _react.default.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          className: "jsx-3233782465" + " " + "font-22 text-black-100 position-relative"
        }, _react.default.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          className: "jsx-3233782465"
        }, " ", value.name && value.name, " "))), _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
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
            lineNumber: 79
          }
        }, _react.default.createElement("a", {
          onClick: function onClick(e) {
            return _this.showPhoto(e, value.id, value.slug);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          className: "jsx-3233782465" + " " + 'photoLink'
        }, _react.default.createElement("img", {
          src: value.large_path,
          alt: value.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          className: "jsx-3233782465" + " " + "img-fluid"
        }))) : _react.default.createElement("a", {
          href: "javascript:void(0)",
          rel: "nofollow",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          className: "jsx-3233782465" + " " + 'photoLink'
        }, _react.default.createElement("img", {
          src: value.large_path,
          alt: value.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          className: "jsx-3233782465" + " " + "img-fluid"
        }))), _react.default.createElement("div", {
          dangerouslySetInnerHTML: {
            __html: value.descriptions
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          className: "jsx-3233782465" + " " + "project-description"
        }));
      })))), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        className: "jsx-3233782465" + " " + "project-keyword bg-white p-3 my-4"
      }, _react.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        className: "jsx-3233782465" + " " + "keyword-title font-25"
      }, "T\u1EEB kh\xF3a"), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        className: "jsx-3233782465" + " " + "pt-0 keyword-tags"
      }, _react.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        className: "jsx-3233782465" + " " + "text-center font-12 font-weight-normal badge badge-pill badge-white border border-primary py-2 px-3 mb-2"
      }, "Thi\u1EBFt k\u1EBF n\u1ED9i th\u1EA5t chung c\u01B0"), _react.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        className: "jsx-3233782465" + " " + "text-center font-12 font-weight-normal badge badge-pill badge-white border border-primary py-2 px-3 mb-2"
      }, "Thi\u1EBFt k\u1EBF n\u1ED9i th\u1EA5t chung c\u01B0"), _react.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        className: "jsx-3233782465" + " " + "text-center font-12 font-weight-normal badge badge-pill badge-white border border-primary py-2 px-3 mb-2"
      }, "Thi\u1EBFt k\u1EBF n\u1ED9i th\u1EA5t chung c\u01B0"), _react.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        className: "jsx-3233782465" + " " + "text-center font-12 font-weight-normal badge badge-pill badge-white border border-primary py-2 px-3 mb-2"
      }, "Thi\u1EBFt k\u1EBF n\u1ED9i th\u1EA5t chung c\u01B0"), _react.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        className: "jsx-3233782465" + " " + "text-center font-12 font-weight-normal badge badge-pill badge-white border border-primary py-2 px-3 mb-2"
      }, "Thi\u1EBFt k\u1EBF n\u1ED9i th\u1EA5t chung c\u01B0")))), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        className: "jsx-3233782465" + " " + "col-4 col-md-4 project-sidebar"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        className: "jsx-3233782465" + " " + "bg-white p-3"
      }, _react.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        className: "jsx-3233782465" + " " + "sub-title position-relative"
      }, "D\u1EF1 \xE1n c\xF9ng chuy\xEAn gia"), _react.default.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        className: "jsx-3233782465" + " " + "list-unstyled mt-3"
      }, _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        className: "jsx-3233782465" + " " + "my-3"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        className: "jsx-3233782465" + " " + "media"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        className: "jsx-3233782465" + " " + "media-image mr-3"
      }, _react.default.createElement("img", {
        src: "/images/home-idea1.png",
        alt: "Generic placeholder image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        className: "jsx-3233782465"
      })), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        className: "jsx-3233782465" + " " + "media-body"
      }, _react.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        className: "jsx-3233782465" + " " + "mt-0 mb-2 font-14"
      }, "Khu c\u0103n h\u1ED9 ph\u1EE9c h\u1EE3p \u0111\u1EB9p m\u1EB7t t\u1EA1i H\xE0 N\u1ED9i"), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        className: "jsx-3233782465" + " " + "d-inline pro-info"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        className: "jsx-3233782465" + " " + "info project-info mr-3 float-left"
      }, _react.default.createElement("i", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        className: "jsx-3233782465" + " " + "fa fa-picture-o my-auto"
      }), " 20 \u1EA3nh"), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        className: "jsx-3233782465" + " " + "info location-info"
      }, _react.default.createElement("i", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        className: "jsx-3233782465" + " " + "fa fa-map-marker my-auto"
      }), " H\xE0 n\u1ED9i"))))), _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        className: "jsx-3233782465" + " " + "my-3"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        className: "jsx-3233782465" + " " + "media"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        className: "jsx-3233782465" + " " + "media-image mr-3"
      }, _react.default.createElement("img", {
        src: "/images/home-idea2.png",
        alt: "Generic placeholder image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        className: "jsx-3233782465"
      })), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        className: "jsx-3233782465" + " " + "media-body"
      }, _react.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        className: "jsx-3233782465" + " " + "mt-0 mb-2 font-14"
      }, "Khu c\u0103n h\u1ED9 ph\u1EE9c h\u1EE3p \u0111\u1EB9p m\u1EB7t t\u1EA1i H\xE0 N\u1ED9i h\u1ED9 ph\u1EE9c h\u1EE3p \u0111\u1EB9p m\u1EB7t t\u1EA1i H\xE0 N\u1ED9i"), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        className: "jsx-3233782465" + " " + "d-inline pro-info"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        className: "jsx-3233782465" + " " + "info project-info mr-3 float-left"
      }, _react.default.createElement("i", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        className: "jsx-3233782465" + " " + "fa fa-picture-o my-auto"
      }), " 20 \u1EA3nh"), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        className: "jsx-3233782465" + " " + "info location-info"
      }, _react.default.createElement("i", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        className: "jsx-3233782465" + " " + "fa fa-map-marker my-auto"
      }), " H\xE0 n\u1ED9i"))))), _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        className: "jsx-3233782465" + " " + "my-3"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        className: "jsx-3233782465" + " " + "media"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        className: "jsx-3233782465" + " " + "media-image mr-3"
      }, _react.default.createElement("img", {
        src: "/images/home-idea3.png",
        alt: "Generic placeholder image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        className: "jsx-3233782465"
      })), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        className: "jsx-3233782465" + " " + "media-body"
      }, _react.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        className: "jsx-3233782465" + " " + "mt-0 mb-2 font-14"
      }, "Khu c\u0103n h\u1ED9 ph\u1EE9c h\u1EE3p \u0111\u1EB9p m\u1EB7t t\u1EA1i H\xE0 N\u1ED9i Khu c\u0103n h\u1ED9 ph\u1EE9c h\u1EE3p \u0111\u1EB9p m\u1EB7t t\u1EA1i H\xE0 N"), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        className: "jsx-3233782465" + " " + "d-inline pro-info"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        className: "jsx-3233782465" + " " + "info project-info mr-3 float-left"
      }, _react.default.createElement("i", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        className: "jsx-3233782465" + " " + "fa fa-picture-o my-auto"
      }), " 20 \u1EA3nh"), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        className: "jsx-3233782465" + " " + "info location-info"
      }, _react.default.createElement("i", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        className: "jsx-3233782465" + " " + "fa fa-map-marker my-auto"
      }), " H\xE0 n\u1ED9i"))))), _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        className: "jsx-3233782465" + " " + "my-3"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        className: "jsx-3233782465" + " " + "media"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        className: "jsx-3233782465" + " " + "media-image mr-3"
      }, _react.default.createElement("img", {
        src: "/images/home-idea1.png",
        alt: "Generic placeholder image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        className: "jsx-3233782465"
      })), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        className: "jsx-3233782465" + " " + "media-body"
      }, _react.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        className: "jsx-3233782465" + " " + "mt-0 mb-2 font-14"
      }, "Khu c\u0103n h\u1ED9 ph\u1EE9c h\u1EE3p \u0111\u1EB9p m\u1EB7t t\u1EA1i H\xE0 N\u1ED9i"), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        className: "jsx-3233782465" + " " + "d-inline pro-info"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        className: "jsx-3233782465" + " " + "info project-info mr-3 float-left"
      }, _react.default.createElement("i", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        className: "jsx-3233782465" + " " + "fa fa-picture-o my-auto"
      }), " 20 \u1EA3nh"), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        className: "jsx-3233782465" + " " + "info location-info"
      }, _react.default.createElement("i", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        className: "jsx-3233782465" + " " + "fa fa-map-marker my-auto"
      }), " H\xE0 n\u1ED9i"))))), _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        className: "jsx-3233782465" + " " + "my-3"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        className: "jsx-3233782465" + " " + "media"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        className: "jsx-3233782465" + " " + "media-image mr-3"
      }, _react.default.createElement("img", {
        src: "/images/home-idea1.png",
        alt: "Generic placeholder image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        className: "jsx-3233782465"
      })), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        className: "jsx-3233782465" + " " + "media-body"
      }, _react.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        className: "jsx-3233782465" + " " + "mt-0 mb-2 font-14"
      }, "Khu c\u0103n h\u1ED9 ph\u1EE9c h\u1EE3p \u0111\u1EB9p m\u1EB7t t\u1EA1i H\xE0 N\u1ED9i"), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        className: "jsx-3233782465" + " " + "d-inline pro-info"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        className: "jsx-3233782465" + " " + "info project-info mr-3 float-left"
      }, _react.default.createElement("i", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        className: "jsx-3233782465" + " " + "fa fa-picture-o my-auto"
      }), " 20 \u1EA3nh"), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        className: "jsx-3233782465" + " " + "info location-info"
      }, _react.default.createElement("i", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        className: "jsx-3233782465" + " " + "fa fa-map-marker my-auto"
      }), " H\xE0 n\u1ED9i"))))), _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        className: "jsx-3233782465" + " " + "my-3"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        className: "jsx-3233782465" + " " + "media"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        className: "jsx-3233782465" + " " + "media-image mr-3"
      }, _react.default.createElement("img", {
        src: "/images/home-idea1.png",
        alt: "Generic placeholder image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        className: "jsx-3233782465"
      })), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        className: "jsx-3233782465" + " " + "media-body"
      }, _react.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        className: "jsx-3233782465" + " " + "mt-0 mb-2 font-14"
      }, "Khu c\u0103n h\u1ED9 ph\u1EE9c h\u1EE3p \u0111\u1EB9p m\u1EB7t t\u1EA1i H\xE0 N\u1ED9i"), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        className: "jsx-3233782465" + " " + "d-inline pro-info"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        className: "jsx-3233782465" + " " + "info project-info mr-3 float-left"
      }, _react.default.createElement("i", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        className: "jsx-3233782465" + " " + "fa fa-picture-o my-auto"
      }), " 20 \u1EA3nh"), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        className: "jsx-3233782465" + " " + "info location-info"
      }, _react.default.createElement("i", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        className: "jsx-3233782465" + " " + "fa fa-map-marker my-auto"
      }), " H\xE0 n\u1ED9i"))))), _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        className: "jsx-3233782465" + " " + "my-3"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        className: "jsx-3233782465" + " " + "media"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        className: "jsx-3233782465" + " " + "media-image mr-3"
      }, _react.default.createElement("img", {
        src: "/images/home-idea1.png",
        alt: "Generic placeholder image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        className: "jsx-3233782465"
      })), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        className: "jsx-3233782465" + " " + "media-body"
      }, _react.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        className: "jsx-3233782465" + " " + "mt-0 mb-2 font-14"
      }, "Khu c\u0103n h\u1ED9 ph\u1EE9c h\u1EE3p \u0111\u1EB9p m\u1EB7t t\u1EA1i H\xE0 N\u1ED9i"), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        className: "jsx-3233782465" + " " + "d-inline pro-info"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        className: "jsx-3233782465" + " " + "info project-info mr-3 float-left"
      }, _react.default.createElement("i", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        className: "jsx-3233782465" + " " + "fa fa-picture-o my-auto"
      }), " 20 \u1EA3nh"), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        className: "jsx-3233782465" + " " + "info location-info"
      }, _react.default.createElement("i", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        className: "jsx-3233782465" + " " + "fa fa-map-marker my-auto"
      }), " H\xE0 n\u1ED9i"))))))))), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        className: "jsx-3233782465" + " " + "project-more"
      }, _react.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        className: "jsx-3233782465" + " " + "font-25"
      }, "M\u1ECDi ng\u01B0\u1EDDi th\u01B0\u1EDDng xem th\xEAm"), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        className: "jsx-3233782465" + " " + "row"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        className: "jsx-3233782465" + " " + "col-3 col-md-3"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        className: "jsx-3233782465" + " " + "card border-none"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        className: "jsx-3233782465" + " " + "card-image"
      }, _react.default.createElement("img", {
        src: "/images/home-pro1.png",
        alt: "Card image cap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        className: "jsx-3233782465" + " " + "card-img-top"
      })), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        className: "jsx-3233782465" + " " + "card-body bg-gray px-0 py-2"
      }, _react.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        className: "jsx-3233782465" + " " + "card-title"
      }, "Thi\u1EBFt k\u1EBF m\u1EDBi nh\u1EA5t n\u0103m 2018 cho h\u1EA1ng m\u1EE5c n\u1ED9i th\u1EA5t")))), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        className: "jsx-3233782465" + " " + "col-3 col-md-3"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        className: "jsx-3233782465" + " " + "card border-none"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        className: "jsx-3233782465" + " " + "card-image"
      }, _react.default.createElement("img", {
        src: "/images/home-pro2.png",
        alt: "Card image cap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        className: "jsx-3233782465" + " " + "card-img-top"
      })), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        className: "jsx-3233782465" + " " + "card-body bg-gray px-0 py-2"
      }, _react.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        className: "jsx-3233782465" + " " + "card-title"
      }, "Thi\u1EBFt k\u1EBF m\u1EDBi nh\u1EA5t n\u0103m 2018 cho h\u1EA1ng m\u1EE5c n\u1ED9i th\u1EA5t")))), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        className: "jsx-3233782465" + " " + "col-3 col-md-3"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        className: "jsx-3233782465" + " " + "card border-none"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        className: "jsx-3233782465" + " " + "card-image"
      }, _react.default.createElement("img", {
        src: "/images/home-pro3.png",
        alt: "Card image cap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        },
        className: "jsx-3233782465" + " " + "card-img-top"
      })), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        className: "jsx-3233782465" + " " + "card-body bg-gray px-0 py-2"
      }, _react.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        className: "jsx-3233782465" + " " + "card-title"
      }, "Thi\u1EBFt k\u1EBF m\u1EDBi nh\u1EA5t n\u0103m 2018 cho h\u1EA1ng m\u1EE5c n\u1ED9i th\u1EA5t")))), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        className: "jsx-3233782465" + " " + "col-3 col-md-3"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        },
        className: "jsx-3233782465" + " " + "card border-none"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        },
        className: "jsx-3233782465" + " " + "card-image"
      }, _react.default.createElement("img", {
        src: "/images/home-pro1.png",
        alt: "Card image cap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        className: "jsx-3233782465" + " " + "card-img-top"
      })), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        className: "jsx-3233782465" + " " + "card-body bg-gray px-0 py-2"
      }, _react.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        className: "jsx-3233782465" + " " + "card-title"
      }, "Thi\u1EBFt k\u1EBF m\u1EDBi nh\u1EA5t n\u0103m 2018 cho h\u1EA1ng m\u1EE5c n\u1ED9i th\u1EA5t")))), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        },
        className: "jsx-3233782465" + " " + "col-3 col-md-3"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        className: "jsx-3233782465" + " " + "card border-none"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        },
        className: "jsx-3233782465" + " " + "card-image"
      }, _react.default.createElement("img", {
        src: "/images/home-pro2.png",
        alt: "Card image cap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        },
        className: "jsx-3233782465" + " " + "card-img-top"
      })), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        className: "jsx-3233782465" + " " + "card-body bg-gray px-0 py-2"
      }, _react.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        className: "jsx-3233782465" + " " + "card-title"
      }, "Thi\u1EBFt k\u1EBF m\u1EDBi nh\u1EA5t n\u0103m 2018 cho h\u1EA1ng m\u1EE5c n\u1ED9i th\u1EA5t")))), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        },
        className: "jsx-3233782465" + " " + "col-3 col-md-3"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        className: "jsx-3233782465" + " " + "card border-none"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        },
        className: "jsx-3233782465" + " " + "card-image"
      }, _react.default.createElement("img", {
        src: "/images/home-pro3.png",
        alt: "Card image cap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        className: "jsx-3233782465" + " " + "card-img-top"
      })), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        className: "jsx-3233782465" + " " + "card-body bg-gray px-0 py-2"
      }, _react.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        className: "jsx-3233782465" + " " + "card-title"
      }, "Thi\u1EBFt k\u1EBF m\u1EDBi nh\u1EA5t n\u0103m 2018 cho h\u1EA1ng m\u1EE5c n\u1ED9i th\u1EA5t")))), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        },
        className: "jsx-3233782465" + " " + "col-3 col-md-3"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        className: "jsx-3233782465" + " " + "card border-none"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        },
        className: "jsx-3233782465" + " " + "card-image"
      }, _react.default.createElement("img", {
        src: "/images/home-pro2.png",
        alt: "Card image cap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        className: "jsx-3233782465" + " " + "card-img-top"
      })), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        },
        className: "jsx-3233782465" + " " + "card-body bg-gray px-0 py-2"
      }, _react.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        },
        className: "jsx-3233782465" + " " + "card-title"
      }, "Thi\u1EBFt k\u1EBF m\u1EDBi nh\u1EA5t n\u0103m 2018 cho h\u1EA1ng m\u1EE5c n\u1ED9i th\u1EA5t")))), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        },
        className: "jsx-3233782465" + " " + "col-3 col-md-3"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        },
        className: "jsx-3233782465" + " " + "card border-none"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        },
        className: "jsx-3233782465" + " " + "card-image"
      }, _react.default.createElement("img", {
        src: "/images/home-pro3.png",
        alt: "Card image cap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        },
        className: "jsx-3233782465" + " " + "card-img-top"
      })), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        },
        className: "jsx-3233782465" + " " + "card-body bg-gray px-0 py-2"
      }, _react.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        },
        className: "jsx-3233782465" + " " + "card-title"
      }, "Thi\u1EBFt k\u1EBF m\u1EDBi nh\u1EA5t n\u0103m 2018 cho h\u1EA1ng m\u1EE5c n\u1ED9i th\u1EA5t")))))))), _react.default.createElement(_style.default, {
        styleId: "3233782465",
        css: ".provider{background-color:#ddd !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2plY3QvZGV0YWlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdWMkIsQUFFb0MsaUNBQUMiLCJmaWxlIjoicGFnZXMvcHJvamVjdC9kZXRhaWwuanMiLCJzb3VyY2VSb290IjoiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9teS1uZXh0LWFwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm92aWRlckRldGFpbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Byby1kZXRhaWwnXG5pbXBvcnQge21hcE9iamVjdCwgdWNmaXJzdH0gZnJvbSBcIi4uLy4uL2xpYnJhcmllcy9oZWxwZXJzXCI7XG5pbXBvcnQge0xpbmssIFJvdXRlcn0gZnJvbSAnLi4vLi4vcm91dGVzJ1xuaW1wb3J0IEltYWdlTW9kYWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9pbWFnZS1tb2RhbCc7XG5pbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnXG5pbXBvcnQgY3NzIGZyb20gXCIuL2luZGV4LmNzc1wiO1xuXG5jb25zdCBBUElVUkwgPSBwcm9jZXNzLmVudi5ET01BSU4gKyBwcm9jZXNzLmVudi5BUElVUklcbmNvbnN0IEFQSVBST0pFQ1QgPSBBUElVUkwgKyAncHJvamVjdC8nXG5jb25zdCBBUElQUk8gPSBBUElVUkwgKyAncHJvdmlkZXIvJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoe3F1ZXJ5fSkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKEFQSVBST0pFQ1QgKyBxdWVyeS5pZClcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIGNvbnN0IHJlc1BybyA9IGF3YWl0IGZldGNoKEFQSVBSTyArIGRhdGEucHJvamVjdC51c2VyX2lkKVxuICAgIGNvbnN0IGRhdGFQcm8gPSBhd2FpdCByZXNQcm8uanNvbigpXG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBxdWVyeS5pZFxuICAgICAgLCBkYXRhOiBkYXRhUHJvXG4gICAgICAsIHByb3ZpZGVyOiBkYXRhUHJvLnByb3ZpZGVyXG4gICAgICAsIHByb2plY3Q6IGRhdGEucHJvamVjdFxuICAgICAgLCBpbWFnZXM6IGRhdGEucHJvamVjdC5pbWFnZXNcbiAgICAgICwgc2x1ZzogcXVlcnkuc2x1Z1xuICAgICAgLCB0aXRsZTogZGF0YS5zZW8udGl0bGVcbiAgICAgICwgZGVzOiBkYXRhLnNlby5kZXNcbiAgICAgICwgY2Fub25pY2FsOiBkYXRhLnNlby5jYW5vbmljYWxcbiAgICAgICwgcm9ib3RzOiBkYXRhLnNlby5yb2JvdHNcbiAgICAgICwgb2dfdXJsOiBkYXRhLnNlby51cmxcbiAgICAgICwgdXJsX2ltYWdlczogZGF0YS5zZW8udXJsX2ltYWdlXG4gICAgICAsIGhlYWRlclByb2plY3RzOiBkYXRhUHJvLmhlYWRlclByb2plY3RzXG4gICAgICAsIGhlYWRlckNhdGVnb3JpZXM6IGRhdGFQcm8uaGVhZGVyQ2F0ZWdvcmllc1xuICAgICAgLCBkYXRhQmFzZTogZGF0YVByby5kYXRhQmFzZVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHByb3ZpZGVyLCBkYXRhLCBwcm9qZWN0LCBpbWFnZXN9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpXG4gICAgcmV0dXJuIChcbiAgICAgIDxQcm92aWRlckRldGFpbCBwcm92aWRlcl9pZD17cHJvdmlkZXIuaWR9IHByb3ZpZGVyX3NsdWc9e3Byb3ZpZGVyLnNsdWd9IGRhdGE9e2RhdGF9IHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWRldGFpbC1tYWluXCIgaWQ9XCJjYXRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPG5hdiBhcmlhLWxhYmVsPVwiYnJlYWRjcnVtYlwiPlxuICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYiBwLTAgcGwtMFwiPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJicmVhZGNydW1iLWl0ZW1cIj48YSBocmVmPVwiI1wiPkhvbWU8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1pdGVtIGFjdGl2ZVwiIGFyaWEtY3VycmVudD1cInBhZ2VcIj5MaWJyYXJ5PC9saT5cbiAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtOCBjb2wtbWQtOFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXQgYmctd2hpdGUgcC0zIGJvcmRlciBib3JkZXItZ3JheVwiPlxuICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtMjUgZm9udC13ZWlnaHQtbm9ybWFsXCI+e3Byb2plY3QubmFtZX08L2gxPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtbm9ybWFsIG15LTMgcHJvamVjdC1kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogcHJvamVjdC5kZXNjcmlwdGlvbnN9fS8+XG4gICAgICAgICAgICAgICAgICB7cHJvamVjdC5hZGRyZXNzICYmXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LTE0IGZvbnQtd2VpZ2h0LW5vcm1hbFwiPjxzdHJvbmc+xJDhu4thIGNo4buJPC9zdHJvbmc+e1wiOiBcIiArIHByb2plY3QuYWRkcmVzc308L3A+fVxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Lm1vcmVfaW5mb3MgJiYgbWFwT2JqZWN0KHByb2plY3QubW9yZV9pbmZvcywgZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPSAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8cCBjbGFzc05hbWU9XCJmb250LTE0IGZvbnQtd2VpZ2h0LW5vcm1hbFwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPnt1Y2ZpcnN0KGluZGV4KX08L3N0cm9uZz57XCI6IFwiICsgdmFsdWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dCBiZy13aGl0ZSBweS0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VzICYmIGltYWdlcy5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwibXktM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC10aXRsZSB0ZXh0LWNlbnRlciBteC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC0yMiB0ZXh0LWJsYWNrLTEwMCBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4ge3ZhbHVlLm5hbWUgJiYgdmFsdWUubmFtZX0gPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtaW1hZ2UgbXktM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5zdGF0dXMgPT0gMSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgcm91dGU9J2ltYWdlJyBwYXJhbXM9e3tpZDogdmFsdWUuaWQsIHNsdWc6IGAke3ZhbHVlLnNsdWd9YH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdwaG90b0xpbmsnIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnNob3dQaG90byhlLCB2YWx1ZS5pZCwgdmFsdWUuc2x1Zyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dmFsdWUubGFyZ2VfcGF0aH0gYWx0PXt2YWx1ZS5uYW1lfSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3NOYW1lPSdwaG90b0xpbmsnIHJlbD1cIm5vZm9sbG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dmFsdWUubGFyZ2VfcGF0aH0gYWx0PXt2YWx1ZS5uYW1lfSBjbGFzc05hbWU9XCJpbWctZmx1aWRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogdmFsdWUuZGVzY3JpcHRpb25zfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3Qta2V5d29yZCBiZy13aGl0ZSBwLTMgbXktNFwiPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwia2V5d29yZC10aXRsZSBmb250LTI1XCI+VOG7qyBraMOzYTwvcD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMCBrZXl3b3JkLXRhZ3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZvbnQtMTIgZm9udC13ZWlnaHQtbm9ybWFsIGJhZGdlIGJhZGdlLXBpbGwgYmFkZ2Utd2hpdGUgYm9yZGVyIGJvcmRlci1wcmltYXJ5IHB5LTIgcHgtMyBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFRoaeG6v3Qga+G6vyBu4buZaSB0aOG6pXQgY2h1bmcgY8awXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZm9udC0xMiBmb250LXdlaWdodC1ub3JtYWwgYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS13aGl0ZSBib3JkZXIgYm9yZGVyLXByaW1hcnkgcHktMiBweC0zIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgVGhp4bq/dCBr4bq/IG7hu5lpIHRo4bqldCBjaHVuZyBjxrBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmb250LTEyIGZvbnQtd2VpZ2h0LW5vcm1hbCBiYWRnZSBiYWRnZS1waWxsIGJhZGdlLXdoaXRlIGJvcmRlciBib3JkZXItcHJpbWFyeSBweS0yIHB4LTMgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBUaGnhur90IGvhur8gbuG7mWkgdGjhuqV0IGNodW5nIGPGsFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPjxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZvbnQtMTIgZm9udC13ZWlnaHQtbm9ybWFsIGJhZGdlIGJhZGdlLXBpbGwgYmFkZ2Utd2hpdGUgYm9yZGVyIGJvcmRlci1wcmltYXJ5IHB5LTIgcHgtMyBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFRoaeG6v3Qga+G6vyBu4buZaSB0aOG6pXQgY2h1bmcgY8awXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+PHNwYW5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZm9udC0xMiBmb250LXdlaWdodC1ub3JtYWwgYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS13aGl0ZSBib3JkZXIgYm9yZGVyLXByaW1hcnkgcHktMiBweC0zIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgVGhp4bq/dCBr4bq/IG7hu5lpIHRo4bqldCBjaHVuZyBjxrBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNCBjb2wtbWQtNCBwcm9qZWN0LXNpZGViYXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtM1wiPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3ViLXRpdGxlIHBvc2l0aW9uLXJlbGF0aXZlXCI+ROG7sSDDoW4gY8O5bmcgY2h1ecOqbiBnaWE8L3A+XG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZCBtdC0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJteS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1pbWFnZSBtci0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9ob21lLWlkZWExLnBuZ1wiIGFsdD1cIkdlbmVyaWMgcGxhY2Vob2xkZXIgaW1hZ2VcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0wIG1iLTIgZm9udC0xNFwiPktodSBjxINuIGjhu5kgcGjhu6ljIGjhu6NwIMSR4bq5cCBt4bq3dCB04bqhaSBIw6AgTuG7mWk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1pbmxpbmUgcHJvLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8gcHJvamVjdC1pbmZvIG1yLTMgZmxvYXQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcGljdHVyZS1vIG15LWF1dG9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IDIwIOG6o25oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvIGxvY2F0aW9uLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLW1hcC1tYXJrZXIgbXktYXV0b1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gSMOgIG7hu5lpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJteS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1pbWFnZSBtci0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9ob21lLWlkZWEyLnBuZ1wiIGFsdD1cIkdlbmVyaWMgcGxhY2Vob2xkZXIgaW1hZ2VcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0wIG1iLTIgZm9udC0xNFwiPktodSBjxINuIGjhu5kgcGjhu6ljIGjhu6NwIMSR4bq5cCBt4bq3dCB04bqhaSBIw6AgTuG7mWkgaOG7mSBwaOG7qWMgaOG7o3AgxJHhurlwIG3hurd0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdOG6oWkgSMOgIE7hu5lpPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtaW5saW5lIHByby1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvIHByb2plY3QtaW5mbyBtci0zIGZsb2F0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBpY3R1cmUtbyBteS1hdXRvXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiAyMCDhuqNuaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mbyBsb2NhdGlvbi1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1tYXAtbWFya2VyIG15LWF1dG9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IEjDoCBu4buZaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXktM1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtaW1hZ2UgbXItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaG9tZS1pZGVhMy5wbmdcIiBhbHQ9XCJHZW5lcmljIHBsYWNlaG9sZGVyIGltYWdlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMCBtYi0yIGZvbnQtMTRcIj5LaHUgY8SDbiBo4buZIHBo4bupYyBo4bujcCDEkeG6uXAgbeG6t3QgdOG6oWkgSMOgIE7hu5lpIEtodSBjxINuIGjhu5kgcGjhu6ljIGjhu6NwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgxJHhurlwIG3hurd0IHThuqFpIEjDoCBOPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtaW5saW5lIHByby1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvIHByb2plY3QtaW5mbyBtci0zIGZsb2F0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBpY3R1cmUtbyBteS1hdXRvXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiAyMCDhuqNuaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mbyBsb2NhdGlvbi1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1tYXAtbWFya2VyIG15LWF1dG9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IEjDoCBu4buZaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXktM1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtaW1hZ2UgbXItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaG9tZS1pZGVhMS5wbmdcIiBhbHQ9XCJHZW5lcmljIHBsYWNlaG9sZGVyIGltYWdlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMCBtYi0yIGZvbnQtMTRcIj5LaHUgY8SDbiBo4buZIHBo4bupYyBo4bujcCDEkeG6uXAgbeG6t3QgdOG6oWkgSMOgIE7hu5lpPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtaW5saW5lIHByby1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvIHByb2plY3QtaW5mbyBtci0zIGZsb2F0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBpY3R1cmUtbyBteS1hdXRvXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiAyMCDhuqNuaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mbyBsb2NhdGlvbi1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1tYXAtbWFya2VyIG15LWF1dG9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IEjDoCBu4buZaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXktM1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtaW1hZ2UgbXItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaG9tZS1pZGVhMS5wbmdcIiBhbHQ9XCJHZW5lcmljIHBsYWNlaG9sZGVyIGltYWdlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMCBtYi0yIGZvbnQtMTRcIj5LaHUgY8SDbiBo4buZIHBo4bupYyBo4bujcCDEkeG6uXAgbeG6t3QgdOG6oWkgSMOgIE7hu5lpPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtaW5saW5lIHByby1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvIHByb2plY3QtaW5mbyBtci0zIGZsb2F0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBpY3R1cmUtbyBteS1hdXRvXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiAyMCDhuqNuaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mbyBsb2NhdGlvbi1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1tYXAtbWFya2VyIG15LWF1dG9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IEjDoCBu4buZaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXktM1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtaW1hZ2UgbXItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaG9tZS1pZGVhMS5wbmdcIiBhbHQ9XCJHZW5lcmljIHBsYWNlaG9sZGVyIGltYWdlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMCBtYi0yIGZvbnQtMTRcIj5LaHUgY8SDbiBo4buZIHBo4bupYyBo4bujcCDEkeG6uXAgbeG6t3QgdOG6oWkgSMOgIE7hu5lpPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtaW5saW5lIHByby1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvIHByb2plY3QtaW5mbyBtci0zIGZsb2F0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBpY3R1cmUtbyBteS1hdXRvXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiAyMCDhuqNuaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mbyBsb2NhdGlvbi1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1tYXAtbWFya2VyIG15LWF1dG9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IEjDoCBu4buZaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXktM1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtaW1hZ2UgbXItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaG9tZS1pZGVhMS5wbmdcIiBhbHQ9XCJHZW5lcmljIHBsYWNlaG9sZGVyIGltYWdlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMCBtYi0yIGZvbnQtMTRcIj5LaHUgY8SDbiBo4buZIHBo4bupYyBo4bujcCDEkeG6uXAgbeG6t3QgdOG6oWkgSMOgIE7hu5lpPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtaW5saW5lIHByby1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvIHByb2plY3QtaW5mbyBtci0zIGZsb2F0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBpY3R1cmUtbyBteS1hdXRvXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiAyMCDhuqNuaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mbyBsb2NhdGlvbi1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1tYXAtbWFya2VyIG15LWF1dG9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IEjDoCBu4buZaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1tb3JlXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC0yNVwiPk3hu41pIG5nxrDhu51pIHRoxrDhu51uZyB4ZW0gdGjDqm08L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTMgY29sLW1kLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJvcmRlci1ub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIHNyYz1cIi9pbWFnZXMvaG9tZS1wcm8xLnBuZ1wiIGFsdD1cIkNhcmQgaW1hZ2UgY2FwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJnLWdyYXkgcHgtMCBweS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5UaGnhur90IGvhur8gbeG7m2kgbmjhuqV0IG7Eg20gMjAxOCBjaG8gaOG6oW5nIG3hu6VjIG7hu5lpIHRo4bqldDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMyBjb2wtbWQtM1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgYm9yZGVyLW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCIgc3JjPVwiL2ltYWdlcy9ob21lLXBybzIucG5nXCIgYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJnLWdyYXkgcHgtMCBweS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+VGhp4bq/dCBr4bq/IG3hu5tpIG5o4bqldCBuxINtIDIwMTggY2hvIGjhuqFuZyBt4bulYyBu4buZaSB0aOG6pXQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0zIGNvbC1tZC0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBib3JkZXItbm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1pbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBzcmM9XCIvaW1hZ2VzL2hvbWUtcHJvMy5wbmdcIiBhbHQ9XCJDYXJkIGltYWdlIGNhcFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgYmctZ3JheSBweC0wIHB5LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5UaGnhur90IGvhur8gbeG7m2kgbmjhuqV0IG7Eg20gMjAxOCBjaG8gaOG6oW5nIG3hu6VjIG7hu5lpIHRo4bqldDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTMgY29sLW1kLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJvcmRlci1ub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIHNyYz1cIi9pbWFnZXMvaG9tZS1wcm8xLnBuZ1wiIGFsdD1cIkNhcmQgaW1hZ2UgY2FwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBiZy1ncmF5IHB4LTAgcHktMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlRoaeG6v3Qga+G6vyBt4bubaSBuaOG6pXQgbsSDbSAyMDE4IGNobyBo4bqhbmcgbeG7pWMgbuG7mWkgdGjhuqV0PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMyBjb2wtbWQtM1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgYm9yZGVyLW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCIgc3JjPVwiL2ltYWdlcy9ob21lLXBybzIucG5nXCIgYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJnLWdyYXkgcHgtMCBweS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+VGhp4bq/dCBr4bq/IG3hu5tpIG5o4bqldCBuxINtIDIwMTggY2hvIGjhuqFuZyBt4bulYyBu4buZaSB0aOG6pXQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0zIGNvbC1tZC0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBib3JkZXItbm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1pbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBzcmM9XCIvaW1hZ2VzL2hvbWUtcHJvMy5wbmdcIiBhbHQ9XCJDYXJkIGltYWdlIGNhcFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgYmctZ3JheSBweC0wIHB5LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5UaGnhur90IGvhur8gbeG7m2kgbmjhuqV0IG7Eg20gMjAxOCBjaG8gaOG6oW5nIG3hu6VjIG7hu5lpIHRo4bqldDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTMgY29sLW1kLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGJvcmRlci1ub25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIHNyYz1cIi9pbWFnZXMvaG9tZS1wcm8yLnBuZ1wiIGFsdD1cIkNhcmQgaW1hZ2UgY2FwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBiZy1ncmF5IHB4LTAgcHktMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlRoaeG6v3Qga+G6vyBt4bubaSBuaOG6pXQgbsSDbSAyMDE4IGNobyBo4bqhbmcgbeG7pWMgbuG7mWkgdGjhuqV0PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMyBjb2wtbWQtM1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgYm9yZGVyLW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCIgc3JjPVwiL2ltYWdlcy9ob21lLXBybzMucG5nXCIgYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJnLWdyYXkgcHgtMCBweS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+VGhp4bq/dCBr4bq/IG3hu5tpIG5o4bqldCBuxINtIDIwMTggY2hvIGjhuqFuZyBt4bulYyBu4buZaSB0aOG6pXQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC5wcm92aWRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L1Byb3ZpZGVyRGV0YWlsPlxuICAgIClcbiAgfVxufSJdfQ== */\n/*@ sourceURL=pages/project/detail.js */"
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
//# sourceMappingURL=5.c36052e67cb6c3dd733c.hot-update.js.map