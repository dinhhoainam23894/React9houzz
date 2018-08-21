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
          relateData = _props.relateData;
      console.log(relateData);
      return _react.default.createElement(_proDetail.default, _extends({
        provider_id: provider.id,
        provider_slug: provider.slug,
        data: data
      }, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), _react.default.createElement("div", {
        id: "cat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        className: "jsx-3233782465" + " " + "project-detail-main"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        className: "jsx-3233782465" + " " + "container"
      }, _react.default.createElement("nav", {
        "aria-label": "breadcrumb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        className: "jsx-3233782465"
      }, _react.default.createElement("ol", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        className: "jsx-3233782465" + " " + "breadcrumb p-0 pl-0"
      }, _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        className: "jsx-3233782465" + " " + "breadcrumb-item"
      }, _react.default.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        className: "jsx-3233782465"
      }, "Home")), _react.default.createElement("li", {
        "aria-current": "page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        className: "jsx-3233782465" + " " + "breadcrumb-item active"
      }, "Library"))), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        className: "jsx-3233782465" + " " + "row"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        className: "jsx-3233782465" + " " + "col-8 col-md-8"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        className: "jsx-3233782465" + " " + "about bg-white p-3 border border-gray"
      }, _react.default.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        className: "jsx-3233782465" + " " + "font-25 font-weight-normal"
      }, project.name), _react.default.createElement("p", {
        dangerouslySetInnerHTML: {
          __html: project.descriptions
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        className: "jsx-3233782465" + " " + "font-weight-normal my-3 project-description"
      }), project.address && _react.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        className: "jsx-3233782465" + " " + "font-14 font-weight-normal"
      }, _react.default.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        className: "jsx-3233782465"
      }, "\u0110\u1ECBa ch\u1EC9"), ": " + project.address), project.more_infos && (0, _helpers.mapObject)(project.more_infos, function (index, value) {
        if (value != '') return _react.default.createElement("p", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          className: "jsx-3233782465" + " " + "font-14 font-weight-normal"
        }, _react.default.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          className: "jsx-3233782465"
        }, (0, _helpers.ucfirst)(index)), ": " + value);
      }), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        className: "jsx-3233782465" + " " + "about bg-white py-3"
      }, _react.default.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        className: "jsx-3233782465" + " " + "list-unstyled"
      }, images && images.map(function (value, index) {
        return _react.default.createElement("li", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          className: "jsx-3233782465" + " " + "my-3"
        }, _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          className: "jsx-3233782465" + " " + "project-title text-center mx-auto"
        }, _react.default.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          className: "jsx-3233782465" + " " + "font-22 text-black-100 position-relative"
        }, _react.default.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          className: "jsx-3233782465"
        }, " ", value.name && value.name, " "))), _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
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
            lineNumber: 80
          }
        }, _react.default.createElement("a", {
          onClick: function onClick(e) {
            return _this.showPhoto(e, value.id, value.slug);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          className: "jsx-3233782465" + " " + 'photoLink'
        }, _react.default.createElement("img", {
          src: value.large_path,
          alt: value.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          className: "jsx-3233782465" + " " + "img-fluid"
        }))) : _react.default.createElement("a", {
          href: "javascript:void(0)",
          rel: "nofollow",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          className: "jsx-3233782465" + " " + 'photoLink'
        }, _react.default.createElement("img", {
          src: value.large_path,
          alt: value.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          className: "jsx-3233782465" + " " + "img-fluid"
        }))), _react.default.createElement("div", {
          dangerouslySetInnerHTML: {
            __html: value.descriptions
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          className: "jsx-3233782465" + " " + "project-description"
        }));
      })))), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        className: "jsx-3233782465" + " " + "project-keyword bg-white p-3 my-4"
      }, _react.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        className: "jsx-3233782465" + " " + "keyword-title font-25"
      }, "T\u1EEB kh\xF3a"), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        className: "jsx-3233782465" + " " + "pt-0 keyword-tags"
      }, _react.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        className: "jsx-3233782465" + " " + "text-center font-12 font-weight-normal badge badge-pill badge-white border border-primary py-2 px-3 mb-2"
      }, "Thi\u1EBFt k\u1EBF n\u1ED9i th\u1EA5t chung c\u01B0"), _react.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        className: "jsx-3233782465" + " " + "text-center font-12 font-weight-normal badge badge-pill badge-white border border-primary py-2 px-3 mb-2"
      }, "Thi\u1EBFt k\u1EBF n\u1ED9i th\u1EA5t chung c\u01B0"), _react.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        className: "jsx-3233782465" + " " + "text-center font-12 font-weight-normal badge badge-pill badge-white border border-primary py-2 px-3 mb-2"
      }, "Thi\u1EBFt k\u1EBF n\u1ED9i th\u1EA5t chung c\u01B0"), _react.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        className: "jsx-3233782465" + " " + "text-center font-12 font-weight-normal badge badge-pill badge-white border border-primary py-2 px-3 mb-2"
      }, "Thi\u1EBFt k\u1EBF n\u1ED9i th\u1EA5t chung c\u01B0"), _react.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        className: "jsx-3233782465" + " " + "text-center font-12 font-weight-normal badge badge-pill badge-white border border-primary py-2 px-3 mb-2"
      }, "Thi\u1EBFt k\u1EBF n\u1ED9i th\u1EA5t chung c\u01B0")))), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        className: "jsx-3233782465" + " " + "col-4 col-md-4 project-sidebar"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        className: "jsx-3233782465" + " " + "bg-white p-3"
      }, _react.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        className: "jsx-3233782465" + " " + "sub-title position-relative"
      }, "D\u1EF1 \xE1n c\xF9ng chuy\xEAn gia"), _react.default.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        className: "jsx-3233782465" + " " + "list-unstyled mt-3"
      }, _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        className: "jsx-3233782465" + " " + "my-3"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        className: "jsx-3233782465" + " " + "media"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        className: "jsx-3233782465" + " " + "media-image mr-3"
      }, _react.default.createElement("img", {
        src: "/images/home-idea1.png",
        alt: "Generic placeholder image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        className: "jsx-3233782465"
      })), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        className: "jsx-3233782465" + " " + "media-body"
      }, _react.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        className: "jsx-3233782465" + " " + "mt-0 mb-2 font-14"
      }, "Khu c\u0103n h\u1ED9 ph\u1EE9c h\u1EE3p \u0111\u1EB9p m\u1EB7t t\u1EA1i H\xE0 N\u1ED9i"), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        className: "jsx-3233782465" + " " + "d-inline pro-info"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        className: "jsx-3233782465" + " " + "info project-info mr-3 float-left"
      }, _react.default.createElement("i", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        className: "jsx-3233782465" + " " + "fa fa-picture-o my-auto"
      }), " 20 \u1EA3nh"), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        className: "jsx-3233782465" + " " + "info location-info"
      }, _react.default.createElement("i", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        className: "jsx-3233782465" + " " + "fa fa-map-marker my-auto"
      }), " H\xE0 n\u1ED9i"))))), _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        className: "jsx-3233782465" + " " + "my-3"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        className: "jsx-3233782465" + " " + "media"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        className: "jsx-3233782465" + " " + "media-image mr-3"
      }, _react.default.createElement("img", {
        src: "/images/home-idea2.png",
        alt: "Generic placeholder image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        className: "jsx-3233782465"
      })), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        className: "jsx-3233782465" + " " + "media-body"
      }, _react.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        className: "jsx-3233782465" + " " + "mt-0 mb-2 font-14"
      }, "Khu c\u0103n h\u1ED9 ph\u1EE9c h\u1EE3p \u0111\u1EB9p m\u1EB7t t\u1EA1i H\xE0 N\u1ED9i h\u1ED9 ph\u1EE9c h\u1EE3p \u0111\u1EB9p m\u1EB7t t\u1EA1i H\xE0 N\u1ED9i"), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        className: "jsx-3233782465" + " " + "d-inline pro-info"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        className: "jsx-3233782465" + " " + "info project-info mr-3 float-left"
      }, _react.default.createElement("i", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        className: "jsx-3233782465" + " " + "fa fa-picture-o my-auto"
      }), " 20 \u1EA3nh"), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        className: "jsx-3233782465" + " " + "info location-info"
      }, _react.default.createElement("i", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        className: "jsx-3233782465" + " " + "fa fa-map-marker my-auto"
      }), " H\xE0 n\u1ED9i"))))), _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        className: "jsx-3233782465" + " " + "my-3"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        className: "jsx-3233782465" + " " + "media"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        className: "jsx-3233782465" + " " + "media-image mr-3"
      }, _react.default.createElement("img", {
        src: "/images/home-idea3.png",
        alt: "Generic placeholder image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        className: "jsx-3233782465"
      })), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        className: "jsx-3233782465" + " " + "media-body"
      }, _react.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        className: "jsx-3233782465" + " " + "mt-0 mb-2 font-14"
      }, "Khu c\u0103n h\u1ED9 ph\u1EE9c h\u1EE3p \u0111\u1EB9p m\u1EB7t t\u1EA1i H\xE0 N\u1ED9i Khu c\u0103n h\u1ED9 ph\u1EE9c h\u1EE3p \u0111\u1EB9p m\u1EB7t t\u1EA1i H\xE0 N"), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        className: "jsx-3233782465" + " " + "d-inline pro-info"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        className: "jsx-3233782465" + " " + "info project-info mr-3 float-left"
      }, _react.default.createElement("i", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        className: "jsx-3233782465" + " " + "fa fa-picture-o my-auto"
      }), " 20 \u1EA3nh"), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        className: "jsx-3233782465" + " " + "info location-info"
      }, _react.default.createElement("i", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        className: "jsx-3233782465" + " " + "fa fa-map-marker my-auto"
      }), " H\xE0 n\u1ED9i"))))), _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        className: "jsx-3233782465" + " " + "my-3"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        className: "jsx-3233782465" + " " + "media"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        className: "jsx-3233782465" + " " + "media-image mr-3"
      }, _react.default.createElement("img", {
        src: "/images/home-idea1.png",
        alt: "Generic placeholder image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        className: "jsx-3233782465"
      })), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        className: "jsx-3233782465" + " " + "media-body"
      }, _react.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        className: "jsx-3233782465" + " " + "mt-0 mb-2 font-14"
      }, "Khu c\u0103n h\u1ED9 ph\u1EE9c h\u1EE3p \u0111\u1EB9p m\u1EB7t t\u1EA1i H\xE0 N\u1ED9i"), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        className: "jsx-3233782465" + " " + "d-inline pro-info"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        className: "jsx-3233782465" + " " + "info project-info mr-3 float-left"
      }, _react.default.createElement("i", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        className: "jsx-3233782465" + " " + "fa fa-picture-o my-auto"
      }), " 20 \u1EA3nh"), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        className: "jsx-3233782465" + " " + "info location-info"
      }, _react.default.createElement("i", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        className: "jsx-3233782465" + " " + "fa fa-map-marker my-auto"
      }), " H\xE0 n\u1ED9i"))))), _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        className: "jsx-3233782465" + " " + "my-3"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        className: "jsx-3233782465" + " " + "media"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        className: "jsx-3233782465" + " " + "media-image mr-3"
      }, _react.default.createElement("img", {
        src: "/images/home-idea1.png",
        alt: "Generic placeholder image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        className: "jsx-3233782465"
      })), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        className: "jsx-3233782465" + " " + "media-body"
      }, _react.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        className: "jsx-3233782465" + " " + "mt-0 mb-2 font-14"
      }, "Khu c\u0103n h\u1ED9 ph\u1EE9c h\u1EE3p \u0111\u1EB9p m\u1EB7t t\u1EA1i H\xE0 N\u1ED9i"), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        className: "jsx-3233782465" + " " + "d-inline pro-info"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        className: "jsx-3233782465" + " " + "info project-info mr-3 float-left"
      }, _react.default.createElement("i", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        className: "jsx-3233782465" + " " + "fa fa-picture-o my-auto"
      }), " 20 \u1EA3nh"), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        className: "jsx-3233782465" + " " + "info location-info"
      }, _react.default.createElement("i", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        className: "jsx-3233782465" + " " + "fa fa-map-marker my-auto"
      }), " H\xE0 n\u1ED9i"))))), _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        className: "jsx-3233782465" + " " + "my-3"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        className: "jsx-3233782465" + " " + "media"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        className: "jsx-3233782465" + " " + "media-image mr-3"
      }, _react.default.createElement("img", {
        src: "/images/home-idea1.png",
        alt: "Generic placeholder image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        className: "jsx-3233782465"
      })), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        className: "jsx-3233782465" + " " + "media-body"
      }, _react.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        className: "jsx-3233782465" + " " + "mt-0 mb-2 font-14"
      }, "Khu c\u0103n h\u1ED9 ph\u1EE9c h\u1EE3p \u0111\u1EB9p m\u1EB7t t\u1EA1i H\xE0 N\u1ED9i"), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        className: "jsx-3233782465" + " " + "d-inline pro-info"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        className: "jsx-3233782465" + " " + "info project-info mr-3 float-left"
      }, _react.default.createElement("i", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        className: "jsx-3233782465" + " " + "fa fa-picture-o my-auto"
      }), " 20 \u1EA3nh"), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        className: "jsx-3233782465" + " " + "info location-info"
      }, _react.default.createElement("i", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        className: "jsx-3233782465" + " " + "fa fa-map-marker my-auto"
      }), " H\xE0 n\u1ED9i"))))), _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        className: "jsx-3233782465" + " " + "my-3"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        className: "jsx-3233782465" + " " + "media"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        className: "jsx-3233782465" + " " + "media-image mr-3"
      }, _react.default.createElement("img", {
        src: "/images/home-idea1.png",
        alt: "Generic placeholder image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        className: "jsx-3233782465"
      })), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        className: "jsx-3233782465" + " " + "media-body"
      }, _react.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        className: "jsx-3233782465" + " " + "mt-0 mb-2 font-14"
      }, "Khu c\u0103n h\u1ED9 ph\u1EE9c h\u1EE3p \u0111\u1EB9p m\u1EB7t t\u1EA1i H\xE0 N\u1ED9i"), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        className: "jsx-3233782465" + " " + "d-inline pro-info"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        className: "jsx-3233782465" + " " + "info project-info mr-3 float-left"
      }, _react.default.createElement("i", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        className: "jsx-3233782465" + " " + "fa fa-picture-o my-auto"
      }), " 20 \u1EA3nh"), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        className: "jsx-3233782465" + " " + "info location-info"
      }, _react.default.createElement("i", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        className: "jsx-3233782465" + " " + "fa fa-map-marker my-auto"
      }), " H\xE0 n\u1ED9i"))))))))), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        className: "jsx-3233782465" + " " + "project-more"
      }, _react.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        className: "jsx-3233782465" + " " + "font-25"
      }, "M\u1ECDi ng\u01B0\u1EDDi th\u01B0\u1EDDng xem th\xEAm"), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        className: "jsx-3233782465" + " " + "row"
      }, relateData && (0, _helpers.mapObject)(relateData, function (value, index) {
        return _react.default.createElement("div", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 264
          },
          className: "jsx-3233782465" + " " + "col-3 col-md-3"
        }, _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 265
          },
          className: "jsx-3233782465" + " " + "card border-none"
        }, _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 266
          },
          className: "jsx-3233782465" + " " + "card-image"
        }, _react.default.createElement("img", {
          src: value.avatar,
          alt: "Card image cap",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 267
          },
          className: "jsx-3233782465" + " " + "card-img-top"
        })), _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 269
          },
          className: "jsx-3233782465" + " " + "card-body bg-gray px-0 py-2"
        }, _react.default.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 270
          },
          className: "jsx-3233782465" + " " + "card-title"
        }, value.name))));
      }))))), _react.default.createElement(_style.default, {
        styleId: "3233782465",
        css: ".provider{background-color:#ddd !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2plY3QvZGV0YWlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVSMkIsQUFFb0MsaUNBQUMiLCJmaWxlIjoicGFnZXMvcHJvamVjdC9kZXRhaWwuanMiLCJzb3VyY2VSb290IjoiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9teS1uZXh0LWFwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm92aWRlckRldGFpbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Byby1kZXRhaWwnXG5pbXBvcnQge21hcE9iamVjdCwgdWNmaXJzdH0gZnJvbSBcIi4uLy4uL2xpYnJhcmllcy9oZWxwZXJzXCI7XG5pbXBvcnQge0xpbmssIFJvdXRlcn0gZnJvbSAnLi4vLi4vcm91dGVzJ1xuaW1wb3J0IEltYWdlTW9kYWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9pbWFnZS1tb2RhbCc7XG5pbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnXG5pbXBvcnQgY3NzIGZyb20gXCIuL2luZGV4LmNzc1wiO1xuXG5jb25zdCBBUElVUkwgPSBwcm9jZXNzLmVudi5ET01BSU4gKyBwcm9jZXNzLmVudi5BUElVUklcbmNvbnN0IEFQSVBST0pFQ1QgPSBBUElVUkwgKyAncHJvamVjdC8nXG5jb25zdCBBUElQUk8gPSBBUElVUkwgKyAncHJvdmlkZXIvJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoe3F1ZXJ5fSkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKEFQSVBST0pFQ1QgKyBxdWVyeS5pZClcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIGNvbnN0IHJlc1BybyA9IGF3YWl0IGZldGNoKEFQSVBSTyArIGRhdGEucHJvamVjdC51c2VyX2lkKVxuICAgIGNvbnN0IGRhdGFQcm8gPSBhd2FpdCByZXNQcm8uanNvbigpXG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBxdWVyeS5pZFxuICAgICAgLCBkYXRhOiBkYXRhUHJvXG4gICAgICAsIHByb3ZpZGVyOiBkYXRhUHJvLnByb3ZpZGVyXG4gICAgICAsIHByb2plY3Q6IGRhdGEucHJvamVjdFxuICAgICAgLCBpbWFnZXM6IGRhdGEucHJvamVjdC5pbWFnZXNcbiAgICAgICwgc2x1ZzogcXVlcnkuc2x1Z1xuICAgICAgLCB0aXRsZTogZGF0YS5zZW8udGl0bGVcbiAgICAgICwgZGVzOiBkYXRhLnNlby5kZXNcbiAgICAgICwgY2Fub25pY2FsOiBkYXRhLnNlby5jYW5vbmljYWxcbiAgICAgICwgcm9ib3RzOiBkYXRhLnNlby5yb2JvdHNcbiAgICAgICwgb2dfdXJsOiBkYXRhLnNlby51cmxcbiAgICAgICwgdXJsX2ltYWdlczogZGF0YS5zZW8udXJsX2ltYWdlXG4gICAgICAsIGhlYWRlclByb2plY3RzOiBkYXRhUHJvLmhlYWRlclByb2plY3RzXG4gICAgICAsIGhlYWRlckNhdGVnb3JpZXM6IGRhdGFQcm8uaGVhZGVyQ2F0ZWdvcmllc1xuICAgICAgLCBkYXRhQmFzZTogZGF0YVByby5kYXRhQmFzZVxuICAgICAgLCByZWxhdGVEYXRhIDogZGF0YS5yZWxhdGVEYXRhXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcHJvdmlkZXIsIGRhdGEsIHByb2plY3QsIGltYWdlcyAscmVsYXRlRGF0YX0gPSB0aGlzLnByb3BzXG4gICAgY29uc29sZS5sb2cocmVsYXRlRGF0YSlcbiAgICByZXR1cm4gKFxuICAgICAgPFByb3ZpZGVyRGV0YWlsIHByb3ZpZGVyX2lkPXtwcm92aWRlci5pZH0gcHJvdmlkZXJfc2x1Zz17cHJvdmlkZXIuc2x1Z30gZGF0YT17ZGF0YX0gey4uLnRoaXMucHJvcHN9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtZGV0YWlsLW1haW5cIiBpZD1cImNhdFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8bmF2IGFyaWEtbGFiZWw9XCJicmVhZGNydW1iXCI+XG4gICAgICAgICAgICAgIDxvbCBjbGFzc05hbWU9XCJicmVhZGNydW1iIHAtMCBwbC0wXCI+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItaXRlbVwiPjxhIGhyZWY9XCIjXCI+SG9tZTwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJicmVhZGNydW1iLWl0ZW0gYWN0aXZlXCIgYXJpYS1jdXJyZW50PVwicGFnZVwiPkxpYnJhcnk8L2xpPlxuICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC04IGNvbC1tZC04XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dCBiZy13aGl0ZSBwLTMgYm9yZGVyIGJvcmRlci1ncmF5XCI+XG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC0yNSBmb250LXdlaWdodC1ub3JtYWxcIj57cHJvamVjdC5uYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ub3JtYWwgbXktMyBwcm9qZWN0LWRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBwcm9qZWN0LmRlc2NyaXB0aW9uc319Lz5cbiAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LmFkZHJlc3MgJiZcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtMTQgZm9udC13ZWlnaHQtbm9ybWFsXCI+PHN0cm9uZz7EkOG7i2EgY2jhu4k8L3N0cm9uZz57XCI6IFwiICsgcHJvamVjdC5hZGRyZXNzfTwvcD59XG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3QubW9yZV9pbmZvcyAmJiBtYXBPYmplY3QocHJvamVjdC5tb3JlX2luZm9zLCBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9ICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxwIGNsYXNzTmFtZT1cImZvbnQtMTQgZm9udC13ZWlnaHQtbm9ybWFsXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3VjZmlyc3QoaW5kZXgpfTwvc3Ryb25nPntcIjogXCIgKyB2YWx1ZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0IGJnLXdoaXRlIHB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZXMgJiYgaW1hZ2VzLm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJteS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LXRpdGxlIHRleHQtY2VudGVyIG14LWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LTIyIHRleHQtYmxhY2stMTAwIHBvc2l0aW9uLXJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiB7dmFsdWUubmFtZSAmJiB2YWx1ZS5uYW1lfSA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1pbWFnZSBteS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLnN0YXR1cyA9PSAxID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayByb3V0ZT0naW1hZ2UnIHBhcmFtcz17e2lkOiB2YWx1ZS5pZCwgc2x1ZzogYCR7dmFsdWUuc2x1Z31gfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J3Bob3RvTGluaycgb25DbGljaz17KGUpID0+IHRoaXMuc2hvd1Bob3RvKGUsIHZhbHVlLmlkLCB2YWx1ZS5zbHVnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt2YWx1ZS5sYXJnZV9wYXRofSBhbHQ9e3ZhbHVlLm5hbWV9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBjbGFzc05hbWU9J3Bob3RvTGluaycgcmVsPVwibm9mb2xsb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt2YWx1ZS5sYXJnZV9wYXRofSBhbHQ9e3ZhbHVlLm5hbWV9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiB2YWx1ZS5kZXNjcmlwdGlvbnN9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1rZXl3b3JkIGJnLXdoaXRlIHAtMyBteS00XCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJrZXl3b3JkLXRpdGxlIGZvbnQtMjVcIj5U4burIGtow7NhPC9wPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0wIGtleXdvcmQtdGFnc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZm9udC0xMiBmb250LXdlaWdodC1ub3JtYWwgYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS13aGl0ZSBib3JkZXIgYm9yZGVyLXByaW1hcnkgcHktMiBweC0zIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgVGhp4bq/dCBr4bq/IG7hu5lpIHRo4bqldCBjaHVuZyBjxrBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmb250LTEyIGZvbnQtd2VpZ2h0LW5vcm1hbCBiYWRnZSBiYWRnZS1waWxsIGJhZGdlLXdoaXRlIGJvcmRlciBib3JkZXItcHJpbWFyeSBweS0yIHB4LTMgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBUaGnhur90IGvhur8gbuG7mWkgdGjhuqV0IGNodW5nIGPGsFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZvbnQtMTIgZm9udC13ZWlnaHQtbm9ybWFsIGJhZGdlIGJhZGdlLXBpbGwgYmFkZ2Utd2hpdGUgYm9yZGVyIGJvcmRlci1wcmltYXJ5IHB5LTIgcHgtMyBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFRoaeG6v3Qga+G6vyBu4buZaSB0aOG6pXQgY2h1bmcgY8awXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+PHNwYW5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZm9udC0xMiBmb250LXdlaWdodC1ub3JtYWwgYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS13aGl0ZSBib3JkZXIgYm9yZGVyLXByaW1hcnkgcHktMiBweC0zIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgVGhp4bq/dCBr4bq/IG7hu5lpIHRo4bqldCBjaHVuZyBjxrBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj48c3BhblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmb250LTEyIGZvbnQtd2VpZ2h0LW5vcm1hbCBiYWRnZSBiYWRnZS1waWxsIGJhZGdlLXdoaXRlIGJvcmRlciBib3JkZXItcHJpbWFyeSBweS0yIHB4LTMgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICBUaGnhur90IGvhur8gbuG7mWkgdGjhuqV0IGNodW5nIGPGsFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00IGNvbC1tZC00IHByb2plY3Qtc2lkZWJhclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC0zXCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWItdGl0bGUgcG9zaXRpb24tcmVsYXRpdmVcIj5E4buxIMOhbiBjw7luZyBjaHV5w6puIGdpYTwvcD5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkIG10LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm15LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWltYWdlIG1yLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2hvbWUtaWRlYTEucG5nXCIgYWx0PVwiR2VuZXJpYyBwbGFjZWhvbGRlciBpbWFnZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTAgbWItMiBmb250LTE0XCI+S2h1IGPEg24gaOG7mSBwaOG7qWMgaOG7o3AgxJHhurlwIG3hurd0IHThuqFpIEjDoCBO4buZaTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWlubGluZSBwcm8taW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mbyBwcm9qZWN0LWluZm8gbXItMyBmbG9hdC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1waWN0dXJlLW8gbXktYXV0b1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gMjAg4bqjbmhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8gbG9jYXRpb24taW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtbWFwLW1hcmtlciBteS1hdXRvXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiBIw6AgbuG7mWlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm15LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWltYWdlIG1yLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2hvbWUtaWRlYTIucG5nXCIgYWx0PVwiR2VuZXJpYyBwbGFjZWhvbGRlciBpbWFnZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTAgbWItMiBmb250LTE0XCI+S2h1IGPEg24gaOG7mSBwaOG7qWMgaOG7o3AgxJHhurlwIG3hurd0IHThuqFpIEjDoCBO4buZaSBo4buZIHBo4bupYyBo4bujcCDEkeG6uXAgbeG6t3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB04bqhaSBIw6AgTuG7mWk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1pbmxpbmUgcHJvLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8gcHJvamVjdC1pbmZvIG1yLTMgZmxvYXQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcGljdHVyZS1vIG15LWF1dG9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IDIwIOG6o25oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvIGxvY2F0aW9uLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLW1hcC1tYXJrZXIgbXktYXV0b1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gSMOgIG7hu5lpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJteS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1pbWFnZSBtci0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9ob21lLWlkZWEzLnBuZ1wiIGFsdD1cIkdlbmVyaWMgcGxhY2Vob2xkZXIgaW1hZ2VcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0wIG1iLTIgZm9udC0xNFwiPktodSBjxINuIGjhu5kgcGjhu6ljIGjhu6NwIMSR4bq5cCBt4bq3dCB04bqhaSBIw6AgTuG7mWkgS2h1IGPEg24gaOG7mSBwaOG7qWMgaOG7o3BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDEkeG6uXAgbeG6t3QgdOG6oWkgSMOgIE48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1pbmxpbmUgcHJvLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8gcHJvamVjdC1pbmZvIG1yLTMgZmxvYXQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcGljdHVyZS1vIG15LWF1dG9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IDIwIOG6o25oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvIGxvY2F0aW9uLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLW1hcC1tYXJrZXIgbXktYXV0b1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gSMOgIG7hu5lpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJteS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1pbWFnZSBtci0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9ob21lLWlkZWExLnBuZ1wiIGFsdD1cIkdlbmVyaWMgcGxhY2Vob2xkZXIgaW1hZ2VcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0wIG1iLTIgZm9udC0xNFwiPktodSBjxINuIGjhu5kgcGjhu6ljIGjhu6NwIMSR4bq5cCBt4bq3dCB04bqhaSBIw6AgTuG7mWk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1pbmxpbmUgcHJvLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8gcHJvamVjdC1pbmZvIG1yLTMgZmxvYXQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcGljdHVyZS1vIG15LWF1dG9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IDIwIOG6o25oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvIGxvY2F0aW9uLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLW1hcC1tYXJrZXIgbXktYXV0b1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gSMOgIG7hu5lpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJteS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1pbWFnZSBtci0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9ob21lLWlkZWExLnBuZ1wiIGFsdD1cIkdlbmVyaWMgcGxhY2Vob2xkZXIgaW1hZ2VcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0wIG1iLTIgZm9udC0xNFwiPktodSBjxINuIGjhu5kgcGjhu6ljIGjhu6NwIMSR4bq5cCBt4bq3dCB04bqhaSBIw6AgTuG7mWk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1pbmxpbmUgcHJvLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8gcHJvamVjdC1pbmZvIG1yLTMgZmxvYXQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcGljdHVyZS1vIG15LWF1dG9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IDIwIOG6o25oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvIGxvY2F0aW9uLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLW1hcC1tYXJrZXIgbXktYXV0b1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gSMOgIG7hu5lpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJteS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1pbWFnZSBtci0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9ob21lLWlkZWExLnBuZ1wiIGFsdD1cIkdlbmVyaWMgcGxhY2Vob2xkZXIgaW1hZ2VcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0wIG1iLTIgZm9udC0xNFwiPktodSBjxINuIGjhu5kgcGjhu6ljIGjhu6NwIMSR4bq5cCBt4bq3dCB04bqhaSBIw6AgTuG7mWk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1pbmxpbmUgcHJvLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8gcHJvamVjdC1pbmZvIG1yLTMgZmxvYXQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcGljdHVyZS1vIG15LWF1dG9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IDIwIOG6o25oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvIGxvY2F0aW9uLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLW1hcC1tYXJrZXIgbXktYXV0b1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gSMOgIG7hu5lpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJteS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1pbWFnZSBtci0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9ob21lLWlkZWExLnBuZ1wiIGFsdD1cIkdlbmVyaWMgcGxhY2Vob2xkZXIgaW1hZ2VcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0wIG1iLTIgZm9udC0xNFwiPktodSBjxINuIGjhu5kgcGjhu6ljIGjhu6NwIMSR4bq5cCBt4bq3dCB04bqhaSBIw6AgTuG7mWk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1pbmxpbmUgcHJvLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8gcHJvamVjdC1pbmZvIG1yLTMgZmxvYXQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcGljdHVyZS1vIG15LWF1dG9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IDIwIOG6o25oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvIGxvY2F0aW9uLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLW1hcC1tYXJrZXIgbXktYXV0b1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gSMOgIG7hu5lpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LW1vcmVcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LTI1XCI+TeG7jWkgbmfGsOG7nWkgdGjGsOG7nW5nIHhlbSB0aMOqbTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICByZWxhdGVEYXRhICYmIG1hcE9iamVjdChyZWxhdGVEYXRhLCh2YWx1ZSxpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTMgY29sLW1kLTNcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBib3JkZXItbm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIHNyYz17dmFsdWUuYXZhdGFyfSBhbHQ9XCJDYXJkIGltYWdlIGNhcFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBiZy1ncmF5IHB4LTAgcHktMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57dmFsdWUubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC5wcm92aWRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L1Byb3ZpZGVyRGV0YWlsPlxuICAgIClcbiAgfVxufSJdfQ== */\n/*@ sourceURL=pages/project/detail.js */"
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
                  relateData: data.relateData
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
//# sourceMappingURL=5.d8b4c041468f2b8423ae.hot-update.js.map