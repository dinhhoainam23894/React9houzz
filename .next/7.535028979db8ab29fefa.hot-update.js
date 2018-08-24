webpackHotUpdate(7,{

/***/ "./components/IdeaComponent.js":
false,

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

/***/ }),

/***/ "./components/image-detail.js":
false,

/***/ "./components/image-modal.js":
false,

/***/ "./node_modules/assert/assert.js":
false,

/***/ "./node_modules/axios/index.js":
false,

/***/ "./node_modules/axios/lib/adapters/xhr.js":
false,

/***/ "./node_modules/axios/lib/axios.js":
false,

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
false,

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
false,

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
false,

/***/ "./node_modules/axios/lib/core/Axios.js":
false,

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
false,

/***/ "./node_modules/axios/lib/core/createError.js":
false,

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
false,

/***/ "./node_modules/axios/lib/core/enhanceError.js":
false,

/***/ "./node_modules/axios/lib/core/settle.js":
false,

/***/ "./node_modules/axios/lib/core/transformData.js":
false,

/***/ "./node_modules/axios/lib/defaults.js":
false,

/***/ "./node_modules/axios/lib/helpers/bind.js":
false,

/***/ "./node_modules/axios/lib/helpers/btoa.js":
false,

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
false,

/***/ "./node_modules/axios/lib/helpers/cookies.js":
false,

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
false,

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
false,

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
false,

/***/ "./node_modules/axios/lib/helpers/spread.js":
false,

/***/ "./node_modules/axios/lib/utils.js":
false,

/***/ "./node_modules/batch-processor/src/batch-processor.js":
false,

/***/ "./node_modules/batch-processor/src/utils.js":
false,

/***/ "./node_modules/create-react-class/factory.js":
false,

/***/ "./node_modules/create-react-class/index.js":
false,

/***/ "./node_modules/desandro-matches-selector/matches-selector.js":
false,

/***/ "./node_modules/element-resize-detector/src/browser-detector.js":
false,

/***/ "./node_modules/element-resize-detector/src/collection-utils.js":
false,

/***/ "./node_modules/element-resize-detector/src/detection-strategy/object.js":
false,

/***/ "./node_modules/element-resize-detector/src/detection-strategy/scroll.js":
false,

/***/ "./node_modules/element-resize-detector/src/element-resize-detector.js":
false,

/***/ "./node_modules/element-resize-detector/src/element-utils.js":
false,

/***/ "./node_modules/element-resize-detector/src/id-generator.js":
false,

/***/ "./node_modules/element-resize-detector/src/id-handler.js":
false,

/***/ "./node_modules/element-resize-detector/src/listener-handler.js":
false,

/***/ "./node_modules/element-resize-detector/src/reporter.js":
false,

/***/ "./node_modules/element-resize-detector/src/state-handler.js":
false,

/***/ "./node_modules/ev-emitter/ev-emitter.js":
false,

/***/ "./node_modules/fizzy-ui-utils/utils.js":
false,

/***/ "./node_modules/get-size/get-size.js":
false,

/***/ "./node_modules/imagesloaded/imagesloaded.js":
false,

/***/ "./node_modules/inherits/inherits_browser.js":
false,

/***/ "./node_modules/is-buffer/index.js":
false,

/***/ "./node_modules/lodash/_DataView.js":
false,

/***/ "./node_modules/lodash/_Hash.js":
false,

/***/ "./node_modules/lodash/_ListCache.js":
false,

/***/ "./node_modules/lodash/_Map.js":
false,

/***/ "./node_modules/lodash/_MapCache.js":
false,

/***/ "./node_modules/lodash/_Promise.js":
false,

/***/ "./node_modules/lodash/_Set.js":
false,

/***/ "./node_modules/lodash/_Stack.js":
false,

/***/ "./node_modules/lodash/_Symbol.js":
false,

/***/ "./node_modules/lodash/_Uint8Array.js":
false,

/***/ "./node_modules/lodash/_WeakMap.js":
false,

/***/ "./node_modules/lodash/_apply.js":
false,

/***/ "./node_modules/lodash/_arrayEach.js":
false,

/***/ "./node_modules/lodash/_arrayFilter.js":
false,

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
false,

/***/ "./node_modules/lodash/_arrayMap.js":
false,

/***/ "./node_modules/lodash/_arrayPush.js":
false,

/***/ "./node_modules/lodash/_assignValue.js":
false,

/***/ "./node_modules/lodash/_assocIndexOf.js":
false,

/***/ "./node_modules/lodash/_baseAssign.js":
false,

/***/ "./node_modules/lodash/_baseAssignIn.js":
false,

/***/ "./node_modules/lodash/_baseAssignValue.js":
false,

/***/ "./node_modules/lodash/_baseClone.js":
false,

/***/ "./node_modules/lodash/_baseCreate.js":
false,

/***/ "./node_modules/lodash/_baseFlatten.js":
false,

/***/ "./node_modules/lodash/_baseGet.js":
false,

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
false,

/***/ "./node_modules/lodash/_baseGetTag.js":
false,

/***/ "./node_modules/lodash/_baseIsArguments.js":
false,

/***/ "./node_modules/lodash/_baseIsMap.js":
false,

/***/ "./node_modules/lodash/_baseIsNative.js":
false,

/***/ "./node_modules/lodash/_baseIsSet.js":
false,

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
false,

/***/ "./node_modules/lodash/_baseKeys.js":
false,

/***/ "./node_modules/lodash/_baseKeysIn.js":
false,

/***/ "./node_modules/lodash/_baseRest.js":
false,

/***/ "./node_modules/lodash/_baseSetToString.js":
false,

/***/ "./node_modules/lodash/_baseSlice.js":
false,

/***/ "./node_modules/lodash/_baseTimes.js":
false,

/***/ "./node_modules/lodash/_baseToString.js":
false,

/***/ "./node_modules/lodash/_baseUnary.js":
false,

/***/ "./node_modules/lodash/_baseUnset.js":
false,

/***/ "./node_modules/lodash/_castPath.js":
false,

/***/ "./node_modules/lodash/_cloneArrayBuffer.js":
false,

/***/ "./node_modules/lodash/_cloneBuffer.js":
false,

/***/ "./node_modules/lodash/_cloneDataView.js":
false,

/***/ "./node_modules/lodash/_cloneRegExp.js":
false,

/***/ "./node_modules/lodash/_cloneSymbol.js":
false,

/***/ "./node_modules/lodash/_cloneTypedArray.js":
false,

/***/ "./node_modules/lodash/_copyArray.js":
false,

/***/ "./node_modules/lodash/_copyObject.js":
false,

/***/ "./node_modules/lodash/_copySymbols.js":
false,

/***/ "./node_modules/lodash/_copySymbolsIn.js":
false,

/***/ "./node_modules/lodash/_coreJsData.js":
false,

/***/ "./node_modules/lodash/_createAssigner.js":
false,

/***/ "./node_modules/lodash/_customOmitClone.js":
false,

/***/ "./node_modules/lodash/_defineProperty.js":
false,

/***/ "./node_modules/lodash/_flatRest.js":
false,

/***/ "./node_modules/lodash/_freeGlobal.js":
false,

/***/ "./node_modules/lodash/_getAllKeys.js":
false,

/***/ "./node_modules/lodash/_getAllKeysIn.js":
false,

/***/ "./node_modules/lodash/_getMapData.js":
false,

/***/ "./node_modules/lodash/_getNative.js":
false,

/***/ "./node_modules/lodash/_getPrototype.js":
false,

/***/ "./node_modules/lodash/_getRawTag.js":
false,

/***/ "./node_modules/lodash/_getSymbols.js":
false,

/***/ "./node_modules/lodash/_getSymbolsIn.js":
false,

/***/ "./node_modules/lodash/_getTag.js":
false,

/***/ "./node_modules/lodash/_getValue.js":
false,

/***/ "./node_modules/lodash/_hashClear.js":
false,

/***/ "./node_modules/lodash/_hashDelete.js":
false,

/***/ "./node_modules/lodash/_hashGet.js":
false,

/***/ "./node_modules/lodash/_hashHas.js":
false,

/***/ "./node_modules/lodash/_hashSet.js":
false,

/***/ "./node_modules/lodash/_initCloneArray.js":
false,

/***/ "./node_modules/lodash/_initCloneByTag.js":
false,

/***/ "./node_modules/lodash/_initCloneObject.js":
false,

/***/ "./node_modules/lodash/_isFlattenable.js":
false,

/***/ "./node_modules/lodash/_isIndex.js":
false,

/***/ "./node_modules/lodash/_isIterateeCall.js":
false,

/***/ "./node_modules/lodash/_isKey.js":
false,

/***/ "./node_modules/lodash/_isKeyable.js":
false,

/***/ "./node_modules/lodash/_isMasked.js":
false,

/***/ "./node_modules/lodash/_isPrototype.js":
false,

/***/ "./node_modules/lodash/_listCacheClear.js":
false,

/***/ "./node_modules/lodash/_listCacheDelete.js":
false,

/***/ "./node_modules/lodash/_listCacheGet.js":
false,

/***/ "./node_modules/lodash/_listCacheHas.js":
false,

/***/ "./node_modules/lodash/_listCacheSet.js":
false,

/***/ "./node_modules/lodash/_mapCacheClear.js":
false,

/***/ "./node_modules/lodash/_mapCacheDelete.js":
false,

/***/ "./node_modules/lodash/_mapCacheGet.js":
false,

/***/ "./node_modules/lodash/_mapCacheHas.js":
false,

/***/ "./node_modules/lodash/_mapCacheSet.js":
false,

/***/ "./node_modules/lodash/_memoizeCapped.js":
false,

/***/ "./node_modules/lodash/_nativeCreate.js":
false,

/***/ "./node_modules/lodash/_nativeKeys.js":
false,

/***/ "./node_modules/lodash/_nativeKeysIn.js":
false,

/***/ "./node_modules/lodash/_nodeUtil.js":
false,

/***/ "./node_modules/lodash/_objectToString.js":
false,

/***/ "./node_modules/lodash/_overArg.js":
false,

/***/ "./node_modules/lodash/_overRest.js":
false,

/***/ "./node_modules/lodash/_parent.js":
false,

/***/ "./node_modules/lodash/_root.js":
false,

/***/ "./node_modules/lodash/_setToString.js":
false,

/***/ "./node_modules/lodash/_shortOut.js":
false,

/***/ "./node_modules/lodash/_stackClear.js":
false,

/***/ "./node_modules/lodash/_stackDelete.js":
false,

/***/ "./node_modules/lodash/_stackGet.js":
false,

/***/ "./node_modules/lodash/_stackHas.js":
false,

/***/ "./node_modules/lodash/_stackSet.js":
false,

/***/ "./node_modules/lodash/_stringToPath.js":
false,

/***/ "./node_modules/lodash/_toKey.js":
false,

/***/ "./node_modules/lodash/_toSource.js":
false,

/***/ "./node_modules/lodash/assign.js":
false,

/***/ "./node_modules/lodash/constant.js":
false,

/***/ "./node_modules/lodash/debounce.js":
false,

/***/ "./node_modules/lodash/eq.js":
false,

/***/ "./node_modules/lodash/flatten.js":
false,

/***/ "./node_modules/lodash/identity.js":
false,

/***/ "./node_modules/lodash/isArguments.js":
false,

/***/ "./node_modules/lodash/isArray.js":
false,

/***/ "./node_modules/lodash/isArrayLike.js":
false,

/***/ "./node_modules/lodash/isBuffer.js":
false,

/***/ "./node_modules/lodash/isFunction.js":
false,

/***/ "./node_modules/lodash/isLength.js":
false,

/***/ "./node_modules/lodash/isMap.js":
false,

/***/ "./node_modules/lodash/isObject.js":
false,

/***/ "./node_modules/lodash/isObjectLike.js":
false,

/***/ "./node_modules/lodash/isPlainObject.js":
false,

/***/ "./node_modules/lodash/isSet.js":
false,

/***/ "./node_modules/lodash/isSymbol.js":
false,

/***/ "./node_modules/lodash/isTypedArray.js":
false,

/***/ "./node_modules/lodash/keys.js":
false,

/***/ "./node_modules/lodash/keysIn.js":
false,

/***/ "./node_modules/lodash/last.js":
false,

/***/ "./node_modules/lodash/memoize.js":
false,

/***/ "./node_modules/lodash/now.js":
false,

/***/ "./node_modules/lodash/omit.js":
false,

/***/ "./node_modules/lodash/stubArray.js":
false,

/***/ "./node_modules/lodash/stubFalse.js":
false,

/***/ "./node_modules/lodash/toNumber.js":
false,

/***/ "./node_modules/lodash/toString.js":
false,

/***/ "./node_modules/masonry-layout/masonry.js":
false,

/***/ "./node_modules/outlayer/item.js":
false,

/***/ "./node_modules/outlayer/outlayer.js":
false,

/***/ "./node_modules/react-infinite-scroller/dist/InfiniteScroll.js":
false,

/***/ "./node_modules/react-infinite-scroller/index.js":
false,

/***/ "./node_modules/react-masonry-component/lib/index.js":
false,

/***/ "./node_modules/util/support/isBufferBrowser.js":
false,

/***/ "./node_modules/util/util.js":
false,

/***/ "./pages/project/list-project-filter.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _layout = _interopRequireDefault(__webpack_require__("./components/layout.js"));

var _sideBar = _interopRequireDefault(__webpack_require__("./components/sideBar.js"));

__webpack_require__("./node_modules/isomorphic-fetch/fetch-npm-browserify.js");

var _ListProjectComponent = _interopRequireDefault(__webpack_require__("./components/ListProjectComponent.js"));

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/pages/project/list-project-filter.js";

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

var APIURL = "https://api.9houz.com/" + "api/";

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
                res = null;

                if (!query.f) {
                  _context.next = 8;
                  break;
                }

                _context.next = 5;
                return fetch(APIURL + 'danh-sach-du-an/' + encodeURIComponent(query.slug) + "?f=".concat(query.f));

              case 5:
                res = _context.sent;
                _context.next = 11;
                break;

              case 8:
                _context.next = 10;
                return fetch(APIURL + 'danh-sach-du-an/' + encodeURIComponent(query.slug));

              case 10:
                res = _context.sent;

              case 11:
                _context.next = 13;
                return res.json();

              case 13:
                data = _context.sent;
                return _context.abrupt("return", {
                  data: data,
                  projects: data.datas ? data.datas.data : null,
                  title: data.seo ? data.seo.title : null,
                  des: data.seo ? data.seo.des : null,
                  canonical: data.seo ? data.seo.canonical : null,
                  robots: data.seo ? data.seo.robots : null,
                  og_url: data.seo ? data.seo.url : null,
                  url_images: data.seo ? data.seo.url_images : null,
                  headerProjects: data.headerProjects,
                  headerCategories: data.headerCategories,
                  dataBase: data.dataBase,
                  h1: data.h1,
                  filterDefault: data.filter_default,
                  page: data.page
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

  function _default(props) {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var showChar = 200; // How many characters are shown by default

      var ellipsestext = "";
      var moretext = "Xem thêm >";
      var lesstext = "Rút gọn <";
      $('.more').each(function () {
        var content = $(this).html();

        if (content.length > showChar) {
          var c = content.substr(0, showChar);
          var h = content.substr(showChar, content.length - showChar);
          var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
          $(this).html(html);
        }
      });
      $(".morelink").click(function () {
        if ($(this).hasClass("less")) {
          $(this).removeClass("less");
          $(this).html(moretext);
        } else {
          $(this).addClass("less");
          $(this).html(lesstext);
        }

        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _props = this.props,
          projects = _props.projects,
          h1 = _props.h1,
          filterDefault = _props.filterDefault,
          page = _props.page;
      return _react.default.createElement(LisProjectComponent, _extends({}, this.props, {
        photoId: this.props.url.query && this.props.url.query.photoId,
        ideaParams: params,
        subParams: subParams,
        asPath: url.asPath,
        nextUrl: this.state.nextUrl,
        images: this.state.images,
        detail: true,
        changeState: function changeState(images, nextPage) {
          _this.setState({
            images: images,
            nextUrl: nextPage
          });
        },
        path: url.pathname,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/project/list-project-filter")
  

/***/ }),

/***/ "./styles/fscreen_idea.css":
false

})
//# sourceMappingURL=7.535028979db8ab29fefa.hot-update.js.map