webpackHotUpdate(5,{

/***/ "./node_modules/history/es/DOMUtils.js":
false,

/***/ "./node_modules/history/es/LocationUtils.js":
false,

/***/ "./node_modules/history/es/PathUtils.js":
false,

/***/ "./node_modules/history/es/createBrowserHistory.js":
false,

/***/ "./node_modules/history/es/createHashHistory.js":
false,

/***/ "./node_modules/history/es/createMemoryHistory.js":
false,

/***/ "./node_modules/history/es/createTransitionManager.js":
false,

/***/ "./node_modules/history/es/index.js":
false,

/***/ "./node_modules/invariant/browser.js":
false,

/***/ "./node_modules/react-breadcrumbs-dynamic/dist/src/index.js":
false,

/***/ "./node_modules/react-router-dom/es/BrowserRouter.js":
false,

/***/ "./node_modules/react-router-dom/es/HashRouter.js":
false,

/***/ "./node_modules/react-router-dom/es/Link.js":
false,

/***/ "./node_modules/react-router-dom/es/MemoryRouter.js":
false,

/***/ "./node_modules/react-router-dom/es/NavLink.js":
false,

/***/ "./node_modules/react-router-dom/es/Prompt.js":
false,

/***/ "./node_modules/react-router-dom/es/Redirect.js":
false,

/***/ "./node_modules/react-router-dom/es/Route.js":
false,

/***/ "./node_modules/react-router-dom/es/Router.js":
false,

/***/ "./node_modules/react-router-dom/es/StaticRouter.js":
false,

/***/ "./node_modules/react-router-dom/es/Switch.js":
false,

/***/ "./node_modules/react-router-dom/es/generatePath.js":
false,

/***/ "./node_modules/react-router-dom/es/index.js":
false,

/***/ "./node_modules/react-router-dom/es/matchPath.js":
false,

/***/ "./node_modules/react-router-dom/es/withRouter.js":
false,

/***/ "./node_modules/react-router-dom/node_modules/warning/warning.js":
false,

/***/ "./node_modules/react-router/es/MemoryRouter.js":
false,

/***/ "./node_modules/react-router/es/Prompt.js":
false,

/***/ "./node_modules/react-router/es/Redirect.js":
false,

/***/ "./node_modules/react-router/es/Route.js":
false,

/***/ "./node_modules/react-router/es/Router.js":
false,

/***/ "./node_modules/react-router/es/StaticRouter.js":
false,

/***/ "./node_modules/react-router/es/Switch.js":
false,

/***/ "./node_modules/react-router/es/generatePath.js":
false,

/***/ "./node_modules/react-router/es/matchPath.js":
false,

/***/ "./node_modules/react-router/es/withRouter.js":
false,

/***/ "./node_modules/react-router/node_modules/isarray/index.js":
false,

/***/ "./node_modules/react-router/node_modules/path-to-regexp/index.js":
false,

/***/ "./node_modules/react-router/node_modules/warning/warning.js":
false,

/***/ "./node_modules/react-through/lib/Dummy.js":
false,

/***/ "./node_modules/react-through/lib/Item.js":
false,

/***/ "./node_modules/react-through/lib/ThroughProvider.js":
false,

/***/ "./node_modules/react-through/lib/createAdvAgent.js":
false,

/***/ "./node_modules/react-through/lib/createAgent.js":
false,

/***/ "./node_modules/react-through/lib/hasComplex.js":
false,

/***/ "./node_modules/react-through/lib/hasDiff.js":
false,

/***/ "./node_modules/react-through/lib/index.js":
false,

/***/ "./node_modules/react-through/lib/propsFromProp.js":
false,

/***/ "./node_modules/react-through/lib/throughAgent.js":
false,

/***/ "./node_modules/react-through/lib/throughAgentFactory.js":
false,

/***/ "./node_modules/react-through/lib/throughArea.js":
false,

/***/ "./node_modules/react-through/lib/throughContainer.js":
false,

/***/ "./node_modules/react-through/lib/throughDirect.js":
false,

/***/ "./node_modules/react-through/lib/throughInterface.js":
false,

/***/ "./node_modules/resolve-pathname/index.js":
false,

/***/ "./node_modules/value-equal/index.js":
false,

/***/ "./node_modules/warning/browser.js":
false,

/***/ "./pages/news.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/styled-jsx/style.js"));

var _regenerator = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

__webpack_require__("./node_modules/isomorphic-fetch/fetch-npm-browserify.js");

var _routes = __webpack_require__("./routes.js");

var _layout = _interopRequireDefault(__webpack_require__("./components/layout.js"));

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/pages/news.js";

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
      var data = this.props.data;
      return _react.default.createElement(_layout.default, _extends({}, this.props, {
        navmenu: false,
        container: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react.default.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react.default.createElement(Item, {
        name: "test",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, "test"), _react.default.createElement(Item, {
        name: "index",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, "index"), _react.default.createElement(Item, {
        name: "y-tuong",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, "\xFD t\u01B0\u1EDFng"))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        var apiUrl, params, res, data;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                apiUrl = 'https://wp.catechetics.com/wp-json/wp/v2/';
                params = 'posts';
                _context.next = 4;
                return fetch(apiUrl + params);

              case 4:
                res = _context.sent;
                _context.next = 7;
                return res.json();

              case 7:
                data = _context.sent;
                return _context.abrupt("return", {
                  data: data
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return _default;
}(_react.default.Component);

exports.default = _default;

var Item = function Item(_ref) {
  var name = _ref.name,
      params = _ref.params,
      children = _ref.children;
  return _react.default.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    className: "jsx-1517752620"
  }, _react.default.createElement(_routes.Link, {
    route: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, _react.default.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    className: "jsx-1517752620"
  }, children)), _react.default.createElement(_style.default, {
    styleId: "1517752620",
    css: "li.jsx-1517752620{display:inline-block;}a.jsx-1517752620{display:inline-block;padding:10px;font-size:11px;text-transform:uppercase;-webkit-text-decoration:none;text-decoration:none;color:#000;}a.jsx-1517752620:hover{color:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL25ld3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUNnQixBQUV3QixBQUdBLEFBUVYsV0FBQyxVQVhVLEFBSVQsYUFDRSxlQUNVLHlCQUNKLGtEQUNWLFdBQUMiLCJmaWxlIjoicGFnZXMvbmV3cy5qcyIsInNvdXJjZVJvb3QiOiIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL215LW5leHQtYXBwIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJ1xuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHtMaW5rfSBmcm9tICcuLi9yb3V0ZXMnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICgpIHtcbiAgICBjb25zdCBhcGlVcmwgPSAnaHR0cHM6Ly93cC5jYXRlY2hldGljcy5jb20vd3AtanNvbi93cC92Mi8nXG4gICAgY29uc3QgcGFyYW1zID0gJ3Bvc3RzJ1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaVVybCArIHBhcmFtcylcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIHJldHVybiB7IGRhdGEgfVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dCB7Li4udGhpcy5wcm9wc30gbmF2bWVudT17ZmFsc2V9IGNvbnRhaW5lcj17ZmFsc2V9PlxuICAgICAgPGRpdj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxJdGVtIG5hbWU9XCJ0ZXN0XCI+dGVzdDwvSXRlbT5cbiAgICAgICAgICA8SXRlbSBuYW1lPVwiaW5kZXhcIj5pbmRleDwvSXRlbT5cbiAgICAgICAgICA8SXRlbSBuYW1lPVwieS10dW9uZ1wiPsO9IHTGsOG7n25nPC9JdGVtPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICApXG4gIH1cbn1cbmNvbnN0IEl0ZW0gPSAoeyBuYW1lLHBhcmFtcywgY2hpbGRyZW4gfSkgPT4gKFxuICA8bGk+XG4gICAgPExpbmsgcm91dGU9e25hbWV9PlxuICAgICAgPGE+eyBjaGlsZHJlbiB9PC9hPlxuICAgIDwvTGluaz5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIGxpIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICB9XG5cbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvbGk+XG4pIl19 */\n/*@ sourceURL=pages/news.js */"
  }));
};
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/news")
  

/***/ })

})
//# sourceMappingURL=5.3ff1b7e0ae5769760172.hot-update.js.map