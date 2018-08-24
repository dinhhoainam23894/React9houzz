webpackHotUpdate(7,{

/***/ "./components/ListProjectComponent.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _layout = _interopRequireDefault(__webpack_require__("./components/layout.js"));

var _sideBar = _interopRequireDefault(__webpack_require__("./components/sideBar.js"));

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/components/ListProjectComponent.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          projects = _props.projects,
          h1 = _props.h1,
          filterDefault = _props.filterDefault,
          page = _props.page;
      return _react.default.createElement(_layout.default, _extends({}, this.props, {
        navmenu: false,
        container: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }), _react.default.createElement("div", {
        className: "container-fluid service px-4 bg-gray",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react.default.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react.default.createElement("div", {
        className: "col-0 col-md-3 col-lg-3 px-3",
        id: "sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react.default.createElement(_sideBar.default, {
        filter: filterDefault,
        page: page,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      })), _react.default.createElement("div", {
        className: "col-12 col-md-9 col-lg-9 px-0",
        id: "cat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react.default.createElement("div", {
        className: "bg-white px-3 py-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react.default.createElement("h1", {
        className: "font-25 font-weight-normal text-black-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, h1), _react.default.createElement("div", {
        className: "service-tag pt-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react.default.createElement("span", {
        className: "text-center font-12 font-weight-normal badge badge-pill badge-light border border-primary mr-2 my-1 service-tag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, "m\u1EA7u t\u1ED1i ", _react.default.createElement("i", {
        className: "close font-weight-normal font-15",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      })), _react.default.createElement("span", {
        className: "text-center font-12 font-weight-normal badge badge-pill badge-light border border-primary mr-2 my-1 service-tag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, "Ph\xF2ng kh\xE1ch ", _react.default.createElement("i", {
        className: "close font-weight-normal font-15",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      })), _react.default.createElement("span", {
        className: "text-center font-12 font-weight-normal badge badge-pill badge-light border border-primary mr-2 my-1 service-tag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, "Ph\xF2ng h\u1ECDp ", _react.default.createElement("i", {
        className: "close font-weight-normal font-15",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }))), _react.default.createElement("ul", {
        className: "list-unstyled my-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, projects && projects.map(function (value, index) {
        return _react.default.createElement("li", {
          className: "media border border-right-0 border-left-0 border-bottom-0 border-gray p-3 position-relative my-3 container",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        }, _react.default.createElement("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        }, _react.default.createElement("div", {
          className: "col-md-6 col-lg-6 col-12 col-sm-12 images-service position-relative px-0",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        }, _react.default.createElement("a", {
          href: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        }, _react.default.createElement("img", {
          src: value.public_avatar,
          alt: "",
          className: "mr-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        })), _react.default.createElement("div", {
          className: "position-absolute image-actions py-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        }, _react.default.createElement("span", {
          className: "actions-detail font-16",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }, _react.default.createElement("i", {
          className: "fa fa-picture-o mr-1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        }), value.total + " ảnh"), _react.default.createElement("span", {
          className: "actions-detail font-16",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        }, _react.default.createElement("i", {
          className: "fa fa-cog mr-1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }), " c\u1ED5 \u0111i\u1EC3n"))), _react.default.createElement("div", {
          className: "media-body col-md-6 col-lg-6 col-12 col-sm-12 position-relative",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        }, _react.default.createElement("h2", {
          className: "font-18",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }, value && value.name), _react.default.createElement("div", {
          className: "media-header my-3 p-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          }
        }, _react.default.createElement("div", {
          className: "rounded-circle logo",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        }, _react.default.createElement("img", {
          src: value.providers && value.providers.path_avatar,
          className: "img-fluid h-100 rounded-circle",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        })), _react.default.createElement("div", {
          className: "media-title ml-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        }, _react.default.createElement("a", {
          className: "mt-0 mb-1 h6 font-14 text-black-100 font-weight-bold",
          href: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }, value.providers && value.providers.name), _react.default.createElement("div", {
          className: "star-rating",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        }, _react.default.createElement("span", {
          className: "fa fa-star",
          "data-rating": "1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }), _react.default.createElement("span", {
          className: "fa fa-star",
          "data-rating": "2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        }), _react.default.createElement("span", {
          className: "fa fa-star",
          "data-rating": "3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        }), _react.default.createElement("span", {
          className: "fa fa-star",
          "data-rating": "4",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }), _react.default.createElement("span", {
          className: "fa fa-star disable",
          "data-rating": "5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }), _react.default.createElement("span", {
          className: "font-italic",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        }, "(14 \u0111\xE1nh gi\xE1)")))), _react.default.createElement("div", {
          className: "media-content mt-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        }, _react.default.createElement("span", {
          className: "more font-14 font-weight-light",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        }, value.descriptions && value.descriptions, _react.default.createElement("a", {
          href: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          }
        }, _react.default.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          }
        }, " Xem th\xEAm >>")))))));
      })))))));
    }
  }]);

  return _default;
}(_react.default.Component);

exports.default = _default;

/***/ })

})
//# sourceMappingURL=7.ad090464bcd0bb6dfdae.hot-update.js.map