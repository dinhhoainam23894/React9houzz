webpackHotUpdate(8,{

/***/ "./components/list-project.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _routes = __webpack_require__("./routes.js");

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/components/list-project.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
      var project = this.props.project;
      return _react.default.createElement("div", {
        className: "rounded-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, _react.default.createElement(_routes.Link, {
        prefetch: true,
        route: "project.detail",
        params: {
          id: project.id,
          slug: "".concat(project.slug)
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react.default.createElement("a", {
        className: "nav-link border-0 font-14 font-weight-bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react.default.createElement("div", {
        className: "rounded-2 border provider-project",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react.default.createElement("div", {
        className: "row project position-relative mx-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react.default.createElement("div", {
        className: "col-md-7 col-7 position-relative p-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react.default.createElement("div", {
        className: "position-absolute h-100 w-100 bg-secondary first-image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react.default.createElement("img", {
        src: this.props.project.avatar[0],
        alt: "",
        className: "first-image w-100 h-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }))), _react.default.createElement("div", {
        className: "col-md-5 col-5 position-relative p-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react.default.createElement("div", {
        className: "position-absolute h-48 ml-1 mb-1 bg-secondary second-image right-avatar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react.default.createElement("img", {
        src: this.props.project.avatar[1],
        alt: "",
        className: "w-100 h-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      })), _react.default.createElement("div", {
        className: "position-absolute h-50 ml-1 third-image bg-secondary right-avatar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react.default.createElement("div", {
        className: "h-100 project-more text-center position-absolute w-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react.default.createElement("p", {
        className: "font-weight-light text-white font-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, project.count_image ? "+ " + project.count_image : '')), _react.default.createElement("img", {
        src: this.props.project.avatar[2],
        className: "w-100 h-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      })))), _react.default.createElement("div", {
        className: "mt-3 mb-2 px-2 project-des",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react.default.createElement("h2", {
        className: "font-weight-bold text-black font-15",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, project.name), this.props.project.address && _react.default.createElement("div", {
        className: "font-13 text-secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react.default.createElement("span", {
        className: "fa fa-map-marker mr-1 text-primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), this.props.project.address))))));
    }
  }]);

  return _default;
}(_react.default.Component);

exports.default = _default;

/***/ })

})
//# sourceMappingURL=8.8234a406e0ddb4591715.hot-update.js.map