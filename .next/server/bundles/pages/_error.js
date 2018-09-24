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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            },
            className: "jsx-978077609" + " " + "container"
          }, _react.default.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            },
            className: "jsx-978077609" + " " + "row mt-5"
          }, _react.default.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            },
            className: "jsx-978077609" + " " + "col-12 text-center title mt-3 mb-3"
          }, _react.default.createElement("img", {
            src: "/static/images/404.png",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            className: "jsx-978077609"
          })), _react.default.createElement("div", {
            style: {
              color: "#d5d8f3"
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            },
            className: "jsx-978077609" + " " + "col-12 text-center font-25 mt-3"
          }, "Ch\xFAng t\xF4i xin l\u1ED7i. Trang b\u1EA1n t\xECm ki\u1EBFm kh\xF4ng t\u1ED3n t\u1EA1i"), _react.default.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            className: "jsx-978077609" + " " + "col-6 offset-md-3 mt-3 text-center explain font-14"
          }, "Th\u1EADt kh\xF4ng may l\xE0 trang b\u1EA1n \u0111ang t\xECm ki\u1EBFm kh\xF4ng th\u1EC3 t\xECm th\u1EA5y. N\xF3 c\xF3 th\u1EC3 t\u1EA1m th\u1EDDi kh\xF4ng c\xF3, di chuy\u1EC3n ho\u1EB7c kh\xF4ng c\xF2n t\u1ED3n t\u1EA1i. Ki\u1EC3m tra Url m\xE0 b\u1EA1n \u0111\xE3 nh\u1EADp cho b\u1EA5t k\u1EF3 l\u1ED7i n\xE0o v\xE0 th\u1EED l\u1EA1i."), _react.default.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            },
            className: "jsx-978077609" + " " + "col-12 text-center mt-3"
          }, _react.default.createElement("a", {
            href: "/",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            className: "jsx-978077609" + " " + "btn btn-primary font-weight-bold"
          }, "V\u1EC1 trang ch\u1EE7"))), _react.default.createElement(_style.default, {
            styleId: "978077609",
            css: "body{margin:0;padding:0;background:url(\"/static/images/background404.jpg\");display:table;width:100% !important;height:100%;min-height:100%;color:#ffffff !important;background-repeat:no-repeat;background-position:center center;font-family:helvetica-ttf;}.container{padding-top:11rem !important;padding-bottom:9rem !important;max-width:100% !important;text-align:center;display:table-cell;background-color:rgba(185,83,164,0.6) !important;background-size:cover;height:100%;}.container{max-width:400px;}.title{font-size:100px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19lcnJvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRDZCLEFBRVksQUFhb0IsQUFVYixBQUdBLFNBekJOLE9Bc0JPLEFBR0EsR0F4QmtDLFVBWXBCLCtCQUNMLFVBWlosY0FDUSxFQVlKLGtCQUNDLEVBWlAsWUFDSSxLQVlvQyxXQVgzQix5QkFDRyxhQVdOLGVBVlksT0FXdEIsWUFBQyxlQVZhLDBCQUFDIiwiZmlsZSI6InBhZ2VzL19lcnJvci5qcyIsInNvdXJjZVJvb3QiOiIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL215LW5leHQtYXBwIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGluZyBhIHBhZ2UgbmFtZWQgX2Vycm9yLmpzIGxldHMgeW91IG92ZXJyaWRlIEhUVFAgZXJyb3IgbWVzc2FnZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAncmVhY3RzdHJhcCdcbi8vIGltcG9ydCBTdHlsZXMgZnJvbSAnLi9jc3MvaW5kZXguc2NzcydcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuY2xhc3MgRXJyb3JQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvckNvZGU6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIHVybDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyh7IHJlcywgeGhyIH0pIHtcbiAgICBjb25zdCBlcnJvckNvZGUgPSByZXMgPyByZXMuc3RhdHVzQ29kZSA6ICh4aHIgPyB4aHIuc3RhdHVzIDogbnVsbClcbiAgICByZXR1cm4geyBlcnJvckNvZGUgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciByZXNwb25zZVxuICAgIHN3aXRjaCAodGhpcy5wcm9wcy5lcnJvckNvZGUpIHtcbiAgICAgIGNhc2UgMjAwOiAvLyBBbHNvIGRpc3BsYXkgYSA0MDQgaWYgc29tZW9uZSByZXF1ZXN0cyAvX2Vycm9yIGV4cGxpY2l0bHlcbiAgICAgIGNhc2UgNDA0OlxuICAgICAgICByZXNwb25zZSA9IChcbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHRleHQtY2VudGVyIHRpdGxlIG10LTMgbWItM1wiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzLzQwNC5wbmdcIiAvPlxuICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgdGV4dC1jZW50ZXIgZm9udC0yNSBtdC0zXCIgc3R5bGU9e3tjb2xvcjogXCIjZDVkOGYzXCJ9fT5cbiAgICAgICAgICAgICAgQ2jDum5nIHTDtGkgeGluIGzhu5dpLiBUcmFuZyBi4bqhbiB0w6xtIGtp4bq/bSBraMO0bmcgdOG7k24gdOG6oWlcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBvZmZzZXQtbWQtMyBtdC0zIHRleHQtY2VudGVyIGV4cGxhaW4gZm9udC0xNFwiPlxuICAgICAgICAgICAgICBUaOG6rXQga2jDtG5nIG1heSBsw6AgdHJhbmcgYuG6oW4gxJFhbmcgdMOsbSBraeG6v20ga2jDtG5nIHRo4buDIHTDrG0gdGjhuqV5LiBOw7MgY8OzIHRo4buDIHThuqFtIHRo4budaSBraMO0bmcgY8OzLCBkaSBjaHV54buDbiBob+G6t2Mga2jDtG5nIGPDsm4gdOG7k24gdOG6oWkuIEtp4buDbSB0cmEgVXJsIG3DoCBi4bqhbiDEkcOjIG5o4bqtcCBjaG8gYuG6pXQga+G7syBs4buXaSBuw6BvIHbDoCB0aOG7rSBs4bqhaS5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgdGV4dC1jZW50ZXIgbXQtM1wiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBmb250LXdlaWdodC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgVuG7gSB0cmFuZyBjaOG7p1xuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiL3N0YXRpYy9pbWFnZXMvYmFja2dyb3VuZDQwNC5qcGdcIik7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQgOiAxMDAlO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogICBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2EtdHRmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMXJlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOXJlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6MTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg1LCA4MywgMTY0LCAwLjYpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgIGhlaWdodCA6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLmNvbnRhaW5lcntcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAudGl0bGV7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwcHg7XG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIDUwMDpcbiAgICAgICAgcmVzcG9uc2UgPSAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJwdC01IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTRcIj5JbnRlcm5hbCBTZXJ2ZXIgRXJyb3I8L2gxPlxuICAgICAgICAgICAgICA8cD5BbiBpbnRlcm5hbCBzZXJ2ZXIgZXJyb3Igb2NjdXJyZWQuPC9wPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJlc3BvbnNlID0gKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwicHQtNSB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS00XCI+SFRUUCB7dGhpcy5wcm9wcy5lcnJvckNvZGV9IEVycm9yPC9oMT5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgQW4gPHN0cm9uZz5IVFRQIHt0aGlzLnByb3BzLmVycm9yQ29kZX08L3N0cm9uZz4gZXJyb3Igb2NjdXJyZWQgd2hpbGVcbiAgICAgICAgICAgICAgICB0cnlpbmcgdG8gYWNjZXNzIDxzdHJvbmc+e3RoaXMucHJvcHMucm91dGVyLnBhdGhuYW1lfTwvc3Ryb25nPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiByZXNwb25zZVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihFcnJvclBhZ2UpIl19 */\n/*@ sourceURL=pages/_error.js */"
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