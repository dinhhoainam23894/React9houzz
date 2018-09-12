webpackHotUpdate(2,{

/***/ "./pages/_document.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _document = _interopRequireWildcard(__webpack_require__("./node_modules/next/document.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/pages/_document.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyDocument =
/*#__PURE__*/
function (_Document) {
  _inherits(MyDocument, _Document);

  function MyDocument() {
    _classCallCheck(this, MyDocument);

    return _possibleConstructorReturn(this, (MyDocument.__proto__ || Object.getPrototypeOf(MyDocument)).apply(this, arguments));
  }

  _createClass(MyDocument, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("html", {
        lang: "vi",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, _react.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, _react.default.createElement("link", {
        rel: "shortcut icon",
        href: "/favicon.ico",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      })), _react.default.createElement("body", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), _react.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      })), _react.default.createElement("script", {
        src: "https://cdn.polyfill.io/v2/polyfill.min.js",
        defer: true,
        async: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), _react.default.createElement("script", {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=UA-120211455-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }), _react.default.createElement("script", {
        dangerouslySetInnerHTML: {
          __html: "\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', 'UA-120211455-1');\n        "
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }));
    }
  }]);

  return MyDocument;
}(_document.default);

exports.default = MyDocument;
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/_document")
  

/***/ })

})
//# sourceMappingURL=2.6de2521b5a6a2294deb8.hot-update.js.map