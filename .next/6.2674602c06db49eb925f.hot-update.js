webpackHotUpdate(6,{

/***/ "./pages/image/index.js":
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

var _imageDetail = _interopRequireDefault(__webpack_require__("./components/image-detail.js"));

__webpack_require__("./node_modules/isomorphic-fetch/fetch-npm-browserify.js");

var _index = _interopRequireDefault(__webpack_require__("./pages/image/index.css"));

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/pages/image/index.js";

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

var APIURL = "https://api.9houz.com/" + "api/" + 'image/';

var Image =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Image, _React$Component);

  function Image() {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));
  }

  _createClass(Image, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_layout.default, _extends({}, this.props, {
        navmenu: false,
        container: false,
        css: _index.default,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), _react.default.createElement("div", {
        id: "lightbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        className: "jsx-1343804358"
      }, _react.default.createElement(_imageDetail.default, {
        tag: this.props.tag,
        id: this.props.id,
        slug: this.props.slug,
        data: this.props,
        detail: false,
        popup: false,
        path: url.pathname,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), _react.default.createElement(_style.default, {
        styleId: "1343804358",
        css: "#lightbox{top:105px !important;z-index:1 !important;}.lbInfoTab #nav-tab{display:none !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2ltYWdlL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1DbUMsQUFFd0IsQUFJRyxxQkFISCxHQUdJLGtCQUhIIiwiZmlsZSI6InBhZ2VzL2ltYWdlL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvbXktbmV4dC1hcHAiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IEltYWdlRGV0YWlsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaW1hZ2UtZGV0YWlsJ1xuaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJ1xuY29uc3QgQVBJVVJMID0gcHJvY2Vzcy5lbnYuRE9NQUlOICsgcHJvY2Vzcy5lbnYuQVBJVVJJICsgJ2ltYWdlLydcbmltcG9ydCBjc3MgZnJvbSAnLi9pbmRleC5jc3MnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHtxdWVyeX0pe1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChBUElVUkwrcXVlcnkuaWQpXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBxdWVyeS5pZCAsIFxuICAgICAgICAgICAgICAgICAgICBzbHVnIDogcXVlcnkuc2x1ZyAsICAgXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBkYXRhLmltYWdlICxcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdDogZGF0YS5wcm9qZWN0LFxuICAgICAgICAgICAgICAgICAgICBpbWFnZXM6IGRhdGEubGlzdF9pbWFnZXMgLFxuICAgICAgICAgICAgICAgICAgICBwcm92aWRlcjogZGF0YS5wcm92aWRlcixcbiAgICAgICAgICAgICAgICAgICAgdGFnIDogZGF0YS5saXN0VGFnLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWU6IGRhdGEuaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgLCB0aXRsZSA6IGRhdGEuc2VvLnRpdGxlXG4gICAgICAgICAgICAgICAgICAgICwgZGVzIDogZGF0YS5zZW8uZGVzXG4gICAgICAgICAgICAgICAgICAgICwgY2Fub25pY2FsIDogZGF0YS5zZW8uY2Fub25pY2FsXG4gICAgICAgICAgICAgICAgICAgICwgcm9ib3RzIDogZGF0YS5zZW8ucm9ib3RzXG4gICAgICAgICAgICAgICAgICAgICwgb2dfdXJsIDogZGF0YS5zZW8udXJsXG4gICAgICAgICAgICAgICAgICAgICwgdXJsX2ltYWdlcyA6IGRhdGEuc2VvLnVybF9pbWFnZVxuICAgICAgICAgICAgICAgICAgICAsIGhlYWRlclByb2plY3RzIDogZGF0YS5oZWFkZXJQcm9qZWN0c1xuICAgICAgICAgICAgICAgICAgICAsIGhlYWRlckNhdGVnb3JpZXMgOiBkYXRhLmhlYWRlckNhdGVnb3JpZXNcbiAgICAgICAgICAgICAgICAgICAgLCBkYXRhQmFzZSA6IGRhdGEuZGF0YUJhc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8TGF5b3V0IHsuLi50aGlzLnByb3BzfSBuYXZtZW51PXtmYWxzZX0gY29udGFpbmVyPXtmYWxzZX0gY3NzPXtjc3N9PlxuICAgICAgICAgICAgPGRpdiBpZD1cImxpZ2h0Ym94XCI+XG4gICAgICAgICAgICAgICAgPEltYWdlRGV0YWlsIHRhZz17dGhpcy5wcm9wcy50YWd9IGlkPXt0aGlzLnByb3BzLmlkfSBzbHVnPXt0aGlzLnByb3BzLnNsdWd9IGRhdGE9e3RoaXMucHJvcHN9IGRldGFpbD17ZmFsc2V9IHBvcHVwPXtmYWxzZX0gcGF0aD17dXJsLnBhdGhuYW1lfT48L0ltYWdlRGV0YWlsPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgICAgICAgICAgICAgICNsaWdodGJveCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDEwNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4IDogMSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5sYkluZm9UYWIgI25hdi10YWIge1xuICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5IDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgKVxuICAgIH1cbn0iXX0= */\n/*@ sourceURL=pages/image/index.js */"
      })));
    }
  }], [{
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
                _context.next = 3;
                return fetch(APIURL + query.id);

              case 3:
                res = _context.sent;
                _context.next = 6;
                return res.json();

              case 6:
                data = _context.sent;
                return _context.abrupt("return", {
                  id: query.id,
                  slug: query.slug,
                  image: data.image,
                  project: data.project,
                  images: data.list_images,
                  provider: data.provider,
                  tag: data.listTag,
                  currentValue: data.image,
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

              case 8:
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

  return Image;
}(_react.default.Component);

exports.default = Image;
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/image")
  

/***/ })

})
//# sourceMappingURL=6.2674602c06db49eb925f.hot-update.js.map