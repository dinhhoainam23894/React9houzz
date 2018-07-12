webpackHotUpdate(5,{

/***/ "./components/IdeaComponent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdeaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch__ = __webpack_require__("./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout__ = __webpack_require__("./components/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_masonry_component__ = __webpack_require__("./node_modules/react-masonry-component/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_masonry_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_masonry_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_infinite_scroller__ = __webpack_require__("./node_modules/react-infinite-scroller/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_infinite_scroller___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_infinite_scroller__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__image_modal__ = __webpack_require__("./components/image-modal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__libraries_helpers__ = __webpack_require__("./libraries/helpers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_next_router__);

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/components/IdeaComponent.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var APIURL = "https://9houz.com/" + "api/";
var currentPath = '/';
var asPath = '/';


var IdeaComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IdeaComponent, _React$Component);

  function IdeaComponent(props) {
    var _this;

    _classCallCheck(this, IdeaComponent);

    _this = _possibleConstructorReturn(this, (IdeaComponent.__proto__ || Object.getPrototypeOf(IdeaComponent)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "componentDidMount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
          var showChar, ellipsestext, moretext, lesstext;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _this.getValue(_assertThisInitialized(_this));

                case 2:
                  showChar = 150; // How many characters are shown by default

                  ellipsestext = "";
                  moretext = "Xem thêm >";
                  lesstext = "Rút gọn <";
                  __WEBPACK_IMPORTED_MODULE_9_jquery___default()('.moreDes').each(function (e) {
                    var content = __WEBPACK_IMPORTED_MODULE_9_jquery___default()(this).html();

                    if (content.length > showChar) {
                      var c = content.substr(0, showChar);
                      var h = content.substr(showChar, content.length - showChar);
                      var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
                      __WEBPACK_IMPORTED_MODULE_9_jquery___default()(this).html(html);
                    }
                  });
                  __WEBPACK_IMPORTED_MODULE_9_jquery___default()(".morelink").click(function (e) {
                    e.preventDefault();

                    if (__WEBPACK_IMPORTED_MODULE_9_jquery___default()(this).hasClass("less")) {
                      __WEBPACK_IMPORTED_MODULE_9_jquery___default()(this).removeClass("less");
                      __WEBPACK_IMPORTED_MODULE_9_jquery___default()(this).html(moretext);
                    } else {
                      __WEBPACK_IMPORTED_MODULE_9_jquery___default()(this).addClass("less");
                      __WEBPACK_IMPORTED_MODULE_9_jquery___default()(this).html(lesstext);
                    }

                    __WEBPACK_IMPORTED_MODULE_9_jquery___default()(this).parent().prev().toggle();
                    __WEBPACK_IMPORTED_MODULE_9_jquery___default()(this).prev().toggle(); // $('.grid').masonry.on('layoutComplete', this.handleLayoutComplete);

                    return false;
                  });

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function value() {
          return _value.apply(this, arguments);
        };
      }()
    });
    _this.state = {
      images: [],
      nextUrl: null,
      hasMoreItems: true,
      h1: null,
      filter_default: [],
      listBadge: []
    };
    currentPath = _this.props.path;
    asPath = _this.props.asPath;
    return _this;
  }

  _createClass(IdeaComponent, [{
    key: "getValue",
    value: function () {
      var _getValue = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2() {
        var _this2 = this;

        var url;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                url = APIURL + 'y-tuong';

                if (this.props.ideaParams) {
                  url = APIURL + 'y-tuong/' + this.props.ideaParams;
                }

                _context2.next = 4;
                return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get(url).then(function (resp) {
                  var data = resp.data;

                  _this2.setState({
                    h1: data.h1,
                    filter_default: data.filter_default,
                    color: data.colors,
                    images: data.images.data,
                    nextUrl: data.images.next_page_url,
                    listBadge: data.listBadge
                  });
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function getValue() {
        return _getValue.apply(this, arguments);
      };
    }()
  }, {
    key: "loadItems",
    value: function loadItems(page) {
      var self = this;
      var url = '';

      if (this.state.nextUrl) {
        url = this.state.nextUrl;
      }

      if (this.state.nextUrl != null) {
        __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get(url).then(function (resp) {
          if (resp) {
            var tracks = self.state.images;
            var data = resp.data;
            data.images.data.map(function (track) {
              tracks.push(track);
            });

            if (data.images.next_page_url && data.images.next_page_url != null) {
              self.setState({
                images: tracks,
                nextUrl: data.images.next_page_url
              });
            } else {
              self.setState({
                hasMoreItems: false
              });
            }
          }
        });
      }
    }
  }, {
    key: "showPhoto",
    value: function showPhoto(e, id, slug) {
      e.preventDefault();
      __WEBPACK_IMPORTED_MODULE_10_next_router___default.a.push("".concat(currentPath, "?photoId=").concat(id, "&slug=").concat(slug), "/anh/".concat(id, "-").concat(slug));
    }
  }, {
    key: "dismissModal",
    value: function dismissModal(id) {
      __WEBPACK_IMPORTED_MODULE_10_next_router___default.a.push(currentPath, asPath);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var masonryOptions = {
        gutter: '.grid__gutter-sizer',
        isOriginLeft: true
      };
      var _state = this.state,
          images = _state.images,
          h1 = _state.h1,
          filter_default = _state.filter_default,
          color = _state.color,
          listBadge = _state.listBadge;
      var _props = this.props,
          photoId = _props.photoId,
          slug = _props.slug;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__layout__["a" /* default */], _extends({}, this.props, {
        navmenu: false,
        container: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }), photoId ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__image_modal__["a" /* default */], {
        id: photoId,
        slug: slug,
        onDismiss: function onDismiss() {
          return _this3.dismissModal(photoId);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }) : '', __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "container-fluid service px-4 bg-gray",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-0 col-md-3 col-lg-3 px-3",
        id: "sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Sidebar, {
        filter: filter_default,
        color: color,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "col-12 col-md-9 col-lg-9 px-0",
        id: "cat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "bg-white px-3 py-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        className: "text-dark title ml-1 pt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, h1 && h1), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "list-tag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, listBadge ? listBadge.map(function (value, index) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
          href: value.uri,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
          className: "badge badge-pill badge-light border border-primary mr-2 my-1 service-tag",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          }
        }, value.name_tag, " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
          className: "close",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          }
        })));
      }) : ''), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_infinite_scroller___default.a, {
        pageStart: 0,
        loadMore: this.loadItems.bind(this),
        hasMore: this.state.hasMoreItems,
        loader: __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "loader",
          key: "cx",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          }
        }, "Loading ..."),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_masonry_component___default.a, {
        className: '.grid are-images-unloaded mt-3',
        disableImagesLoaded: false,
        options: masonryOptions,
        updateOnEachImageLoad: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "grid__col-sizer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "grid__gutter-sizer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }), images && images.map(function (value, index) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "grid__item rounded p-1",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 167
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "grid__images",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 168
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "position-relative",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 169
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
          className: "position-absolute rounded d-none upload",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 170
          }
        }, " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
          className: "fa fa-upload",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 170
          }
        }), " L\u01B0u \u1EA3nh"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
          onClick: function onClick(e) {
            return _this3.showPhoto(e, value.id, value.slug);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 171
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
          className: "rounded",
          src: value.medium_path,
          alt: "{{ $element->name }}",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 172
          }
        })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "position-relative idea-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
          className: "mt-2 font-13 text-black-100",
          "data-title": "{{ $element->name }}",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 178
          }
        }, value.name), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
          className: "mt-2 images-title font-12 text-black-100 moreDes",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179
          }
        }, value.descriptions)));
      }))))))));
    }
  }]);

  return IdeaComponent;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



var Sidebar =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Sidebar, _React$PureComponent);

  function Sidebar(props) {
    _classCallCheck(this, Sidebar);

    return _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call(this, props));
  }

  _createClass(Sidebar, [{
    key: "render",
    value: function render() {
      var _props2 = this.props,
          filter = _props2.filter,
          color = _props2.color;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "sidebar-service row bg-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "d-md-block px-2 w-100 sidebar-service-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        }
      }, filter && filter.map(function (value, index) {
        return value.data.length != 0 && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "child-sidebar-service pb-1 col-12 offset-md-0 col-md-12 px-0",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 207
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "mt-2 widget p-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 208
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
          className: "font-15 mb-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 209
          }
        }, value.textName, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
          className: "fa fa-chevron-right d-block d-md-none",
          "data-toggle": "collapse",
          "data-target": "#demoTest",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 209
          }
        })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
          className: "list-unstyled mb-0 collapse d-md-block",
          id: "demoTest",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 210
          }
        }, value.data && Object(__WEBPACK_IMPORTED_MODULE_8__libraries_helpers__["a" /* mapObject */])(value.data, function (index, value) {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
            className: "py-1 radio",
            key: index,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 215
            }
          }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
            href: value.uri,
            className: "font-13 font-weight-light text-gray",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 216
            }
          }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
            className: "px-3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 216
            }
          }, value.name_tag, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 216
            }
          }, value.total_doc))));
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
          className: "more loadmore d-none d-md-block",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 221
          }
        }, "Xem th\xEAm ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
          className: "la la-arrow-circle-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 221
          }
        })))));
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "child-sidebar-service pb-1 col-12 offset-md-0 col-md-12 px-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "mt-2 widget p-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        className: "font-15",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        }
      }, "M\xC0U S\u1EAEC"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        className: "expand-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "service-color mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        }
      }, color && Object(__WEBPACK_IMPORTED_MODULE_8__libraries_helpers__["a" /* mapObject */])(color, function (index, value) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
          href: value.uri,
          className: "text-dark border border-gray",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 235
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
          className: "float-left {{ array_get(config('filter.idea.data_type.color.class_name'), $item->original) }}",
          "data-toggle": "tooltip",
          title: value.name_tag,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 235
          }
        }));
      }))))));
    }
  }]);

  return Sidebar;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.PureComponent);

/***/ }),

/***/ "./components/image-detail.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Image; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__libraries_helpers__ = __webpack_require__("./libraries/helpers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_next_link__);

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/components/image-detail.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var APIURL = "https://9houz.com/" + "api/" + 'image/';





var Image =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Image, _React$Component);

  _createClass(Image, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var query;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                return _context.abrupt("return", {
                  id: query.id,
                  slug: query.slug
                });

              case 2:
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

  function Image(props) {
    var _this;

    _classCallCheck(this, Image);

    _this = _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "componentDidMount", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2() {
          var image_thumb, image_id;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return _this.getValue(_this.props.id);

                case 2:
                  _this.setState({
                    currentImage: __WEBPACK_IMPORTED_MODULE_4_jquery___default()('img.currentImage')
                  });

                  image_thumb = __WEBPACK_IMPORTED_MODULE_4_jquery___default()('.thumb');

                  _this.setState({
                    image_thumb: image_thumb
                  });

                  image_id = _this.state.image.id;
                  image_thumb.each(function () {
                    if (__WEBPACK_IMPORTED_MODULE_4_jquery___default()(this).data('id') == image_id) {
                      __WEBPACK_IMPORTED_MODULE_4_jquery___default()(this).addClass('project-thumb--current');
                    }
                  });

                case 7:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        return function value() {
          return _value.apply(this, arguments);
        };
      }()
    });
    Object.defineProperty(_assertThisInitialized(_this), "nextImage", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value2 = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(e, id, slug) {
          var image_size, currentIndex, lastIndex, lastImage, nextId, nextSlug;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  e.preventDefault();
                  image_size = _this.state.image_thumb.length - 1;
                  currentIndex = _this.state.currentImage;
                  lastIndex = 0;

                  _this.state.image_thumb.each(function () {
                    if (__WEBPACK_IMPORTED_MODULE_4_jquery___default()(this).hasClass('project-thumb--current')) {
                      currentIndex = __WEBPACK_IMPORTED_MODULE_4_jquery___default()(this).index();

                      if (currentIndex < image_size) {
                        lastIndex = currentIndex + 1;
                      } else {
                        lastIndex = 0;
                      }

                      __WEBPACK_IMPORTED_MODULE_4_jquery___default()(this).removeClass('project-thumb--current');
                    }
                  });

                  _this.state.image_thumb.eq(lastIndex).addClass('project-thumb--current');

                  lastImage = _this.state.image_thumb.eq(lastIndex);
                  nextId = lastImage.data('id');
                  nextSlug = lastImage.data('slug');

                  _this.setState({
                    currentImage: __WEBPACK_IMPORTED_MODULE_4_jquery___default()('img.currentImage')
                  });

                  _this.setState({
                    currentValue: _this.state.images[lastIndex]
                  }); // Router.push(`/project?photoId=${id}&id=${id}&slug=${slug}`,`/anh/${nextId}-${nextSlug}`)


                case 11:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        return function value(_x2, _x3, _x4) {
          return _value2.apply(this, arguments);
        };
      }()
    });
    Object.defineProperty(_assertThisInitialized(_this), "backImage", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value3 = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4(e) {
          var image_size, currentIndex, lastIndex, lastImage, nextId, nextSlug;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  e.preventDefault();
                  image_size = _this.state.image_thumb.length - 1;
                  currentIndex = _this.state.currentImage;
                  lastIndex = 0;

                  _this.state.image_thumb.each(function () {
                    if (__WEBPACK_IMPORTED_MODULE_4_jquery___default()(this).hasClass('project-thumb--current')) {
                      currentIndex = __WEBPACK_IMPORTED_MODULE_4_jquery___default()(this).index();

                      if (currentIndex > 0) {
                        lastIndex = currentIndex - 1;
                      } else {
                        lastIndex = image_size;
                      }

                      __WEBPACK_IMPORTED_MODULE_4_jquery___default()(this).removeClass('project-thumb--current');
                    }
                  });

                  _this.state.image_thumb.eq(lastIndex).addClass('project-thumb--current');

                  lastImage = _this.state.image_thumb.eq(lastIndex);
                  nextId = lastImage.data('id');
                  nextSlug = lastImage.data('slug');

                  _this.setState({
                    currentImage: __WEBPACK_IMPORTED_MODULE_4_jquery___default()('img.currentImage')
                  });

                  _this.setState({
                    currentValue: _this.state.images[lastIndex]
                  });

                case 11:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        return function value(_x5) {
          return _value3.apply(this, arguments);
        };
      }()
    });
    _this.state = {
      data: {},
      provider: {},
      project: {},
      image: {},
      images: [],
      tag: [],
      currentImage: {},
      image_thumb: {},
      idActive: null,
      currentValue: null
    };
    return _this;
  }

  _createClass(Image, [{
    key: "getValue",
    value: function () {
      var _getValue = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee5(id) {
        var _this2 = this;

        var data;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get(APIURL + id).then(function (res) {
                  data = res.data;

                  _this2.setState({
                    image: data.image,
                    project: data.project,
                    images: data.list_images,
                    provider: data.provider,
                    tag: data.tagSeo,
                    currentValue: data.image
                  });
                });

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function getValue(_x6) {
        return _getValue.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          id = _props.id,
          slug = _props.slug;
      console.log(slug);
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "lgBg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "image-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "lbMainControls",
        className: "trackMe d-block d-md-none",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        className: "lbCloseButton lbClose",
        "aria-label": "Close",
        href: "",
        "data-dismiss": "modal",
        compid: "lbCloseButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, this.state.currentValue && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        className: "image-detail",
        src: this.state.currentValue.path_for_size,
        fallback: "image.path_for_size",
        alt: "image.name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "lb-navDiv",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        className: "link next lbNavigation nav-arrow",
        onClick: function onClick(e) {
          return _this3.nextImage(e, id, slug);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        className: "fa fa-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        className: "link back lbNavigation nav-arrow",
        onClick: function onClick(e) {
          return _this3.backImage(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        className: "fa fa-angle-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "lbActions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "lbActionCenter",
        className: "offset-0 offset-md-3 col-12 col-md-6 text-center text-nowrap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        className: "btn btn-primary med save text-white",
        title: "Save To Ideabook",
        compid: "addToIdeabook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        className: "fa fa-plus pr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }), "L\u01B0u \u1EA3nh"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        className: "btn bg-black-100 med email text-white",
        title: "send email",
        compid: "addToIdeabook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        className: "fa fa-envelope-o pr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }), "G\u1EEDi Email")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ImageInfo, {
        provider: this.state.provider,
        images: this.state.images,
        image: this.state.image,
        tag: this.state.tag,
        changeValue: function changeValue(data) {
          return _this3.setState({
            currentValue: data
          });
        },
        currentValue: this.state.currentValue,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }));
    }
  }]);

  return Image;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



var ImageInfo =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(ImageInfo, _React$PureComponent);

  function ImageInfo(props) {
    _classCallCheck(this, ImageInfo);

    return _possibleConstructorReturn(this, (ImageInfo.__proto__ || Object.getPrototypeOf(ImageInfo)).call(this, props));
  }

  _createClass(ImageInfo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var $readMore = __WEBPACK_IMPORTED_MODULE_4_jquery___default()("#readMoreBtnText").text();
      var $readLess = __WEBPACK_IMPORTED_MODULE_4_jquery___default()("#readLessBtnText").text();
      __WEBPACK_IMPORTED_MODULE_4_jquery___default()("#readMoreBtn").text($readMore);
      __WEBPACK_IMPORTED_MODULE_4_jquery___default()('#readMoreBtn').click(function () {
        var $this = __WEBPACK_IMPORTED_MODULE_4_jquery___default()(this);
        __WEBPACK_IMPORTED_MODULE_4_jquery___default()("#readMoreBtn").text($readMore);

        if ($this.data('expanded') == "yes") {
          $this.data('expanded', "no");
          __WEBPACK_IMPORTED_MODULE_4_jquery___default()("#readMoreBtn").text($readMore);
          __WEBPACK_IMPORTED_MODULE_4_jquery___default()('#readMoreText').animate({
            height: '100px'
          });
        } else {
          $this.data('expanded', "yes");
          __WEBPACK_IMPORTED_MODULE_4_jquery___default()('#readMoreText').css({
            height: 'auto'
          });
          __WEBPACK_IMPORTED_MODULE_4_jquery___default()("#readMoreBtn").text($readLess);
        }
      });
    }
  }, {
    key: "changeImage",
    value: function changeImage(e, value) {
      e.preventDefault();
      var $this = __WEBPACK_IMPORTED_MODULE_4_jquery___default()(e.target).parents('li');
      var thumb = __WEBPACK_IMPORTED_MODULE_4_jquery___default()('.thumb');
      thumb.removeClass('project-thumb--current');
      $this.addClass('project-thumb--current');
      this.props.changeValue(value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _props2 = this.props,
          image = _props2.image,
          images = _props2.images,
          provider = _props2.provider,
          project = _props2.project,
          tag = _props2.tag,
          currentValue = _props2.currentValue;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "lbInfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "lbInfoTab position-relative d-none d-md-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "nav nav-tabs",
        id: "nav-tab",
        role: "tablist",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        className: "nav-item nav-link active",
        id: "nav-home-tab",
        "data-toggle": "tab",
        href: "#nav-home",
        role: "tab",
        "aria-controls": "nav-home",
        "aria-selected": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        className: "fa fa-home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        className: "nav-item nav-link",
        id: "nav-profile-tab",
        "data-toggle": "tab",
        href: "#nav-profile",
        role: "tab",
        "aria-controls": "nav-profile",
        "aria-selected": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        className: "fa fa-tag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        className: "nav-item nav-link",
        id: "nav-contact-tab",
        "data-toggle": "tab",
        href: "#nav-contact",
        role: "tab",
        "aria-controls": "nav-contact",
        "aria-selected": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("i", {
        className: "fa fa-comment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        }
      })))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "content-mask",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "content-scroll",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "content-detail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "media",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }, provider.auth_avatar && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: provider.auth_avatar,
        className: "align-self-start mr-2 rounded-circle detail-user mt-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "media-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "media-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_next_link___default.a, {
        prefetch: true,
        href: "/pro/".concat(provider.id, "-").concat(provider.slug),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        className: "font-weight-bold font-14 text-black-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        }
      }, provider.name ? provider.name : 'Chưa có tên')), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "star-rating font-14",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        className: "text-black-100 font-14",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        }
      }, provider.avg_rate && Object(__WEBPACK_IMPORTED_MODULE_3__libraries_helpers__["b" /* rating */])(provider.avg_rate), " (", provider.total_rate ? provider.total_rate : 0, " ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1)")))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "content-detail border-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        className: "font-15 text-black-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        }
      }, currentValue && currentValue.name), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "media-content",
        id: "readMore",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "readMoreWrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        id: "readMoreText",
        className: "font-13 normalText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        }
      }, currentValue && currentValue.descriptions), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "readMoreGradient",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        id: "readMoreBtn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        id: "readLessBtnText",
        style: {
          'display': 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        }
      }, "R\xFAt g\u1ECDn "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        id: "readMoreBtnText",
        style: {
          'display': 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        }
      }, "Xem th\xEAm >"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "content-detail border-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        className: "font-14",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "project.url_path",
        className: "text-black-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        }
      }, "C\xE1c \u1EA3nh trong c\xF9ng d\u1EF1 \xE1n")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        className: "list-unstyled clearfix thumb-grid grid-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        }
      }, images && images.map(function (value, index) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
          className: "thumb project-thumb",
          "data-id": value.id,
          ref: "'image'+image.id",
          "data-slug": value.slug,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 239
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
          className: "link",
          onClick: function onClick(e) {
            return _this4.changeImage(e, value);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          className: "img-responsive-wrapper img-responsive-square progressive",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 241
          }
        }, value.small_path && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
          src: value.small_path,
          alt: "image.name",
          className: "img-respontive",
          id: "'image-'+image.id",
          width: "71",
          height: "71",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 242
          }
        }))));
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "pt-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        }
      }, tag.breadcrumbs && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: tag.breadcrumbs.uri,
        className: "mr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        className: "text-center font-12 font-weight-normal badge badge-pill badge-white border border-primary py-2 px-3 mb-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        }
      }, tag.breadcrumbs.name_tag)), tag.other && tag.other.is_seo == 1 && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: tag.other.uri,
        className: "mr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        className: "text-center font-12 font-weight-normal badge badge-pill badge-white border border-primary py-2 px-3 mb-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        }
      }, tag.other.name_tag)))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "content-detail border-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "header row m-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
        className: "font-14 text-black-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        }
      }, "H\u1ECFi \u0111\xE1p v\u1EC1 h\xECnh \u1EA3nh"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        className: "col-xs-12 col-md-12 px-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        id: "askQuestionButton",
        className: "btn border-primary btn-block text-primary font-13",
        compid: "lbAsk",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        }
      }, "\u0110\u1EB7t c\xE2u h\u1ECFi c\u1EE7a b\u1EA1n")))))));
    }
  }]);

  return ImageInfo;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.PureComponent);

/***/ }),

/***/ "./libraries/helpers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return rating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mapObject; });
/* harmony export (immutable) */ __webpack_exports__["c"] = ucfirst;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/libraries/helpers.js";

var rating = function rating(avg_rate) {
  var star = [];

  for (var $i = 1; $i <= 5; $i++) {
    if ($i <= Math.floor(avg_rate)) {
      star.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "fa fa-star",
        key: $i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      }));
    } else if ($i == Math.ceil(avg_rate)) {
      var divStyle = {
        width: (avg_rate - Math.floor(avg_rate)) * 100 + "% !important",
        height: "15.9px",
        top: '-2.2px',
        left: '-0.8px'
      };
      star.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "fa fa-star disable position-relative",
        key: $i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "position-absolute provider-star",
        style: divStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      })));
    } else {
      star.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "fa fa-star disable",
        key: $i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }));
    }
  }

  return star;
};
var mapObject = function mapObject(object, callback) {
  return Object.keys(object).map(function (key) {
    return callback(key, object[key]);
  });
};
function ucfirst(str) {
  str += '';
  var f = str.charAt(0).toUpperCase();
  return f + str.substr(1);
}

/***/ })

})
//# sourceMappingURL=5.d08ae60ae81440c61aaf.hot-update.js.map