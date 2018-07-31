webpackHotUpdate(6,{

/***/ "./pages/idea-filter.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _IdeaComponent = _interopRequireDefault(__webpack_require__("./components/IdeaComponent.js"));

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/pages/idea-filter.js";

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

var APIURL = "http://api.9houz.com/" + "api/";

var IdeaFilter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IdeaFilter, _React$Component);

  _createClass(IdeaFilter, null, [{
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
                res = null;

                if (!query.f) {
                  _context.next = 8;
                  break;
                }

                _context.next = 5;
                return fetch(APIURL + 'y-tuong/' + encodeURIComponent(query.params) + "?f=".concat(query.f));

              case 5:
                res = _context.sent;
                _context.next = 11;
                break;

              case 8:
                _context.next = 10;
                return fetch(APIURL + 'y-tuong/' + encodeURIComponent(query.params));

              case 10:
                res = _context.sent;

              case 11:
                _context.next = 13;
                return res.json();

              case 13:
                data = _context.sent;
                return _context.abrupt("return", {
                  h1: data.h1,
                  filter_default: data.filter_default,
                  colors: data.colors,
                  images: data.images.data,
                  nextUrl: data.images.next_page_url,
                  params: query.params,
                  subParams: query.f,
                  listBadge: data.listBadge,
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

              case 15:
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

  function IdeaFilter(props) {
    var _this;

    _classCallCheck(this, IdeaFilter);

    _this = _possibleConstructorReturn(this, (IdeaFilter.__proto__ || Object.getPrototypeOf(IdeaFilter)).call(this, props));
    _this.state = {
      nextUrl: _this.props.nextUrl,
      images: _this.props.images
    };
    return _this;
  }

  _createClass(IdeaFilter, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      console.log(nextProps);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          params = _props.params,
          url = _props.url,
          subParams = _props.subParams;
      return _react.default.createElement(_IdeaComponent.default, _extends({}, this.props, {
        photoId: this.props.url.query && this.props.url.query.photoId,
        ideaParams: params,
        subParams: subParams,
        asPath: url.asPath,
        nextUrl: this.state.nextUrl,
        images: this.state.images,
        detail: true,
        changeState: function changeState(images, nextPage) {
          _this2.setState({
            images: images,
            nextUrl: nextPage
          });
        },
        path: url.pathname,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }));
    }
  }]);

  return IdeaFilter;
}(_react.default.Component);

exports.default = IdeaFilter;
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/idea-filter")
  

/***/ })

})
//# sourceMappingURL=6.6e7d9328b9c706c42f71.hot-update.js.map