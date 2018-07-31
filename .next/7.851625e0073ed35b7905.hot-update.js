webpackHotUpdate(7,{

/***/ "./pages/static-page.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/styled-jsx/style.js"));

var _regenerator = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _layout = _interopRequireDefault(__webpack_require__("./components/layout.js"));

__webpack_require__("./node_modules/isomorphic-fetch/fetch-npm-browserify.js");

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/pages/static-page.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var APIURL = "http://api.9houz.com/" + "api/" + 'about/';

var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  _createClass(_default, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_ref) {
        var query, res, data;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                console.log(query);
                _context.next = 4;
                return fetch(APIURL + query.slug);

              case 4:
                res = _context.sent;
                _context.next = 7;
                return res.json();

              case 7:
                data = _context.sent;
                return _context.abrupt("return", {
                  data: data.data,
                  title: data.seo.title,
                  des: data.seo.des,
                  canonical: data.seo.canonical,
                  robots: data.seo.robots,
                  og_url: data.seo.url,
                  url_images: data.seo.url_image,
                  headerProjects: data.headerProjects,
                  headerCategories: data.headerCategories,
                  dataBase: data.dataBase
                });

              case 9:
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

  function _default(props) {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));
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
          lineNumber: 29
        }
      }), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        className: "jsx-3282900338" + " " + "bg-gray pt-3 pb-3"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        className: "jsx-3282900338" + " " + "col-10 col-md-8 offset-1 offset-md-2 text-left bg-white pt-4 pb-3 static-page"
      }, _react.default.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        className: "jsx-3282900338" + " " + "font-28"
      }, data.name), _react.default.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: data.content
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        className: "jsx-3282900338" + " " + "text-justify pt-3 font-14"
      })), _react.default.createElement(_style.default, {
        styleId: "3282900338",
        css: ".static-page ul{list-style:none;padding-left:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3N0YXRpYy1wYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDdUMsQUFFbUIsZ0JBQ0Usa0JBQUMiLCJmaWxlIjoicGFnZXMvc3RhdGljLXBhZ2UuanMiLCJzb3VyY2VSb290IjoiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9teS1uZXh0LWFwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnO1xuaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJ1xuY29uc3QgQVBJVVJMID0gcHJvY2Vzcy5lbnYuRE9NQUlOICsgcHJvY2Vzcy5lbnYuQVBJVVJJICsgJ2Fib3V0LydcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBxdWVyeSB9KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHF1ZXJ5KVxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChBUElVUkwrcXVlcnkuc2x1ZylcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgIHJldHVybiB7IFxuICAgICAgICAgICAgZGF0YSA6IGRhdGEuZGF0YSxcbiAgICAgICAgICAgIHRpdGxlIDogZGF0YS5zZW8udGl0bGVcbiAgICAgICAgICAgICwgZGVzIDogZGF0YS5zZW8uZGVzXG4gICAgICAgICAgICAsIGNhbm9uaWNhbCA6IGRhdGEuc2VvLmNhbm9uaWNhbFxuICAgICAgICAgICAgLCByb2JvdHMgOiBkYXRhLnNlby5yb2JvdHNcbiAgICAgICAgICAgICwgb2dfdXJsIDogZGF0YS5zZW8udXJsXG4gICAgICAgICAgICAsIHVybF9pbWFnZXMgOiBkYXRhLnNlby51cmxfaW1hZ2VcbiAgICAgICAgICAgICwgaGVhZGVyUHJvamVjdHMgOiBkYXRhLmhlYWRlclByb2plY3RzXG4gICAgICAgICAgICAsIGhlYWRlckNhdGVnb3JpZXMgOiBkYXRhLmhlYWRlckNhdGVnb3JpZXNcbiAgICAgICAgICAgICwgZGF0YUJhc2UgOiBkYXRhLmRhdGFCYXNlXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5wcm9wc1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExheW91dCB7Li4udGhpcy5wcm9wc30gbmF2bWVudT17ZmFsc2V9IGNvbnRhaW5lcj17ZmFsc2V9PiAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5IHB0LTMgcGItM1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMCBjb2wtbWQtOCBvZmZzZXQtMSBvZmZzZXQtbWQtMiB0ZXh0LWxlZnQgYmctd2hpdGUgcHQtNCBwYi0zIHN0YXRpYy1wYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC0yOFwiPntkYXRhLm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1qdXN0aWZ5IHB0LTMgZm9udC0xNFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sIDogZGF0YS5jb250ZW50IH19IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXRpYy1wYWdlIHVse1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUgOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdCA6IDE1cHggO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIClcbiAgICB9XG59Il19 */\n/*@ sourceURL=pages/static-page.js */"
      })));
    }
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/static-page")
  

/***/ })

})
//# sourceMappingURL=7.851625e0073ed35b7905.hot-update.js.map