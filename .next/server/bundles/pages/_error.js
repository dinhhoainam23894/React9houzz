module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_error.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(__webpack_require__("styled-jsx/style"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _head = _interopRequireDefault(__webpack_require__("next/head"));

var _link = _interopRequireDefault(__webpack_require__("next/link"));

var _reactstrap = __webpack_require__("reactstrap");

var _router = __webpack_require__("next/router");

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/pages/_error.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ErrorPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ErrorPage, _React$Component);

  function ErrorPage() {
    _classCallCheck(this, ErrorPage);

    return _possibleConstructorReturn(this, (ErrorPage.__proto__ || Object.getPrototypeOf(ErrorPage)).apply(this, arguments));
  }

  _createClass(ErrorPage, [{
    key: "render",
    value: function render() {
      var response;

      switch (this.props.errorCode) {
        case 200: // Also display a 404 if someone requests /_error explicitly

        case 404:
          response = _react.default.createElement("div", {
            "class": "container",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            },
            className: "jsx-978077609"
          }, _react.default.createElement("div", {
            "class": "row mt-5",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            },
            className: "jsx-978077609"
          }, _react.default.createElement("div", {
            "class": "col-12 text-center title mt-3 mb-3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            },
            className: "jsx-978077609"
          }, _react.default.createElement("img", {
            src: "/static/images/404.png",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            className: "jsx-978077609"
          })), _react.default.createElement("div", {
            "class": "col-12 text-center font-25 mt-3",
            style: {
              color: "#d5d8f3"
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            },
            className: "jsx-978077609"
          }, "Ch\xFAng t\xF4i xin l\u1ED7i. Trang b\u1EA1n t\xECm ki\u1EBFm kh\xF4ng t\u1ED3n t\u1EA1i"), _react.default.createElement("div", {
            "class": "col-6 offset-md-3 mt-3 text-center explain font-14",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            className: "jsx-978077609"
          }, "Th\u1EADt kh\xF4ng may l\xE0 trang b\u1EA1n \u0111ang t\xECm ki\u1EBFm kh\xF4ng th\u1EC3 t\xECm th\u1EA5y. N\xF3 c\xF3 th\u1EC3 t\u1EA1m th\u1EDDi kh\xF4ng c\xF3, di chuy\u1EC3n ho\u1EB7c kh\xF4ng c\xF2n t\u1ED3n t\u1EA1i. Ki\u1EC3m tra Url m\xE0 b\u1EA1n \u0111\xE3 nh\u1EADp cho b\u1EA5t k\u1EF3 l\u1ED7i n\xE0o v\xE0 th\u1EED l\u1EA1i."), _react.default.createElement("div", {
            "class": "col-12 text-center mt-3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            },
            className: "jsx-978077609"
          }, _react.default.createElement("a", {
            href: "/",
            "class": "btn btn-primary font-weight-bold",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            className: "jsx-978077609"
          }, "V\u1EC1 trang ch\u1EE7"))), _react.default.createElement(_style.default, {
            styleId: "978077609",
            css: "body{margin:0;padding:0;background:url(\"/static/images/background404.jpg\");display:table;width:100% !important;height:100%;min-height:100%;color:#ffffff !important;background-repeat:no-repeat;background-position:center center;font-family:helvetica-ttf;}.container{padding-top:11rem !important;padding-bottom:9rem !important;max-width:100% !important;text-align:center;display:table-cell;background-color:rgba(185,83,164,0.6) !important;background-size:cover;height:100%;}.container{max-width:400px;}.title{font-size:100px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19lcnJvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRDZCLEFBRVksQUFhb0IsQUFVYixBQUdBLFNBekJOLE9Bc0JPLEFBR0EsR0F4QmtDLFVBWXBCLCtCQUNMLFVBWlosY0FDUSxFQVlKLGtCQUNDLEVBWlAsWUFDSSxLQVlvQyxXQVgzQix5QkFDRyxhQVdOLGVBVlksT0FXdEIsWUFBQyxlQVZhLDBCQUFDIiwiZmlsZSI6InBhZ2VzL19lcnJvci5qcyIsInNvdXJjZVJvb3QiOiIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL215LW5leHQtYXBwIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGluZyBhIHBhZ2UgbmFtZWQgX2Vycm9yLmpzIGxldHMgeW91IG92ZXJyaWRlIEhUVFAgZXJyb3IgbWVzc2FnZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAncmVhY3RzdHJhcCdcbi8vIGltcG9ydCBTdHlsZXMgZnJvbSAnLi9jc3MvaW5kZXguc2NzcydcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuY2xhc3MgRXJyb3JQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvckNvZGU6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIHVybDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyh7IHJlcywgeGhyIH0pIHtcbiAgICBjb25zdCBlcnJvckNvZGUgPSByZXMgPyByZXMuc3RhdHVzQ29kZSA6ICh4aHIgPyB4aHIuc3RhdHVzIDogbnVsbClcbiAgICByZXR1cm4geyBlcnJvckNvZGUgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciByZXNwb25zZVxuICAgIHN3aXRjaCAodGhpcy5wcm9wcy5lcnJvckNvZGUpIHtcbiAgICAgIGNhc2UgMjAwOiAvLyBBbHNvIGRpc3BsYXkgYSA0MDQgaWYgc29tZW9uZSByZXF1ZXN0cyAvX2Vycm9yIGV4cGxpY2l0bHlcbiAgICAgIGNhc2UgNDA0OlxuICAgICAgICByZXNwb25zZSA9IChcbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBtdC01XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIHRleHQtY2VudGVyIHRpdGxlIG10LTMgbWItM1wiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzLzQwNC5wbmdcIiAvPlxuICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiB0ZXh0LWNlbnRlciBmb250LTI1IG10LTNcIiBzdHlsZT17e2NvbG9yOiBcIiNkNWQ4ZjNcIn19PlxuICAgICAgICAgICAgICBDaMO6bmcgdMO0aSB4aW4gbOG7l2kuIFRyYW5nIGLhuqFuIHTDrG0ga2nhur9tIGtow7RuZyB04buTbiB04bqhaVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTYgb2Zmc2V0LW1kLTMgbXQtMyB0ZXh0LWNlbnRlciBleHBsYWluIGZvbnQtMTRcIj5cbiAgICAgICAgICAgICAgVGjhuq10IGtow7RuZyBtYXkgbMOgIHRyYW5nIGLhuqFuIMSRYW5nIHTDrG0ga2nhur9tIGtow7RuZyB0aOG7gyB0w6xtIHRo4bqleS4gTsOzIGPDsyB0aOG7gyB04bqhbSB0aOG7nWkga2jDtG5nIGPDsywgZGkgY2h1eeG7g24gaG/hurdjIGtow7RuZyBjw7JuIHThu5NuIHThuqFpLiBLaeG7g20gdHJhIFVybCBtw6AgYuG6oW4gxJHDoyBuaOG6rXAgY2hvIGLhuqV0IGvhu7MgbOG7l2kgbsOgbyB2w6AgdGjhu60gbOG6oWkuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgdGV4dC1jZW50ZXIgbXQtM1wiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGZvbnQtd2VpZ2h0LWJvbGRcIj5cbiAgICAgICAgICAgICAgICBW4buBIHRyYW5nIGNo4bunXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvc3RhdGljL2ltYWdlcy9iYWNrZ3JvdW5kNDA0LmpwZ1wiKTtcbiAgICAgICAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgbWluLWhlaWdodCA6IDEwMCU7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiAgIG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IGhlbHZldGljYS10dGY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDExcmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA5cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIG1heC13aWR0aDoxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODUsIDgzLCAxNjQsIDAuNikgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgaGVpZ2h0IDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAuY29udGFpbmVye1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgIC50aXRsZXtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMDBweDtcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgNTAwOlxuICAgICAgICByZXNwb25zZSA9IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cInB0LTUgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImRpc3BsYXktNFwiPkludGVybmFsIFNlcnZlciBFcnJvcjwvaDE+XG4gICAgICAgICAgICAgIDxwPkFuIGludGVybmFsIHNlcnZlciBlcnJvciBvY2N1cnJlZC48L3A+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmVzcG9uc2UgPSAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJwdC01IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTRcIj5IVFRQIHt0aGlzLnByb3BzLmVycm9yQ29kZX0gRXJyb3I8L2gxPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBBbiA8c3Ryb25nPkhUVFAge3RoaXMucHJvcHMuZXJyb3JDb2RlfTwvc3Ryb25nPiBlcnJvciBvY2N1cnJlZCB3aGlsZVxuICAgICAgICAgICAgICAgIHRyeWluZyB0byBhY2Nlc3MgPHN0cm9uZz57dGhpcy5wcm9wcy5yb3V0ZXIucGF0aG5hbWV9PC9zdHJvbmc+XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEVycm9yUGFnZSkiXX0= */\n/*@ sourceURL=pages/_error.js */"
          }));
          break;

        case 500:
          response = _react.default.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 87
            }
          }, _react.default.createElement(_head.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            }
          }), _react.default.createElement(_reactstrap.Container, {
            className: "pt-5 text-center",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 90
            }
          }, _react.default.createElement("h1", {
            className: "display-4",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 91
            }
          }, "Internal Server Error"), _react.default.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 92
            }
          }, "An internal server error occurred.")));
          break;

        default:
          response = _react.default.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 99
            }
          }, _react.default.createElement(_head.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 100
            }
          }), _react.default.createElement(_reactstrap.Container, {
            className: "pt-5 text-center",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 102
            }
          }, _react.default.createElement("h1", {
            className: "display-4",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 103
            }
          }, "HTTP ", this.props.errorCode, " Error"), _react.default.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 104
            }
          }, "An ", _react.default.createElement("strong", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 105
            }
          }, "HTTP ", this.props.errorCode), " error occurred while trying to access ", _react.default.createElement("strong", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 106
            }
          }, this.props.router.pathname))));
      }

      return response;
    }
  }], [{
    key: "propTypes",
    value: function propTypes() {
      return {
        errorCode: _react.default.PropTypes.number.isRequired,
        url: _react.default.PropTypes.string.isRequired
      };
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var res = _ref.res,
          xhr = _ref.xhr;
      var errorCode = res ? res.statusCode : xhr ? xhr.status : null;
      return {
        errorCode: errorCode
      };
    }
  }]);

  return ErrorPage;
}(_react.default.Component);

var _default = (0, _router.withRouter)(ErrorPage);

exports.default = _default;

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/_error.js");


/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "reactstrap":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=_error.js.map