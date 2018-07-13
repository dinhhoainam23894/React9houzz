webpackHotUpdate(4,{

/***/ "./components/IdeaComponent.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdeaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__ = __webpack_require__("./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layout__ = __webpack_require__("./components/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_masonry_component__ = __webpack_require__("./node_modules/react-masonry-component/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_masonry_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_masonry_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_infinite_scroller__ = __webpack_require__("./node_modules/react-infinite-scroller/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_infinite_scroller___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_infinite_scroller__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__image_modal__ = __webpack_require__("./components/image-modal.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__libraries_helpers__ = __webpack_require__("./libraries/helpers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_jquery__);
var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/components/IdeaComponent.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }











var APIURL = "https://9houz.com/" + "api/";
var currentPath = '/';
var asPath = '/'; // import Router from 'next/router'



var IdeaComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IdeaComponent, _React$Component);

  function IdeaComponent(props) {
    var _this;

    _classCallCheck(this, IdeaComponent);

    _this = _possibleConstructorReturn(this, (IdeaComponent.__proto__ || Object.getPrototypeOf(IdeaComponent)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        images: [],
        nextUrl: null,
        hasMoreItems: true,
        h1: null,
        filter_default: [],
        listBadge: []
      }
    });
    currentPath = _this.props.path;
    asPath = _this.props.asPath;
    return _this;
  }

  _createClass(IdeaComponent, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        h1: this.props.h1,
        filter_default: this.props.filter_default,
        color: this.props.colors,
        images: this.props.images,
        nextUrl: this.props.nextUrl,
        listBadge: this.props.listBadge ? this.props.listBadge : []
      });
    }
  }, {
    key: "loadItems",
    value: function loadItems(page) {
      var self = this;
      var url = '';

      if (this.state.nextUrl) {
        url = this.state.nextUrl;
      }

      if (this.state.nextUrl != null) {
        __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get(url).then(function (resp) {
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

      if (this.props.ideaParams) {
        var params = this.props.ideaParams;

        if (this.props.subParams) {
          __WEBPACK_IMPORTED_MODULE_8__routes__["Router"].pushRoute("/y-tuong/".concat(params, "?f=").concat(this.props.subParams, "&photoId=").concat(id, "&slug=").concat(slug), "/anh/".concat(id, "-").concat(slug));
        } else {
          __WEBPACK_IMPORTED_MODULE_8__routes__["Router"].push("".concat(currentPath, "?params=").concat(params, "&photoId=").concat(id, "&slug=").concat(slug), "/anh/".concat(id, "-").concat(slug));
        }
      } else {
        __WEBPACK_IMPORTED_MODULE_8__routes__["Router"].push("".concat(currentPath, "?photoId=").concat(id, "&slug=").concat(slug), "/anh/".concat(id, "-").concat(slug));
      }
    }
  }, {
    key: "dismissModal",
    value: function dismissModal(id) {
      if (this.props.ideaParams) {
        var params = this.props.ideaParams;

        if (this.props.subParams) {
          __WEBPACK_IMPORTED_MODULE_8__routes__["Router"].pushRoute("/y-tuong/".concat(params, "?f=").concat(this.props.subParams));
        } else {
          __WEBPACK_IMPORTED_MODULE_8__routes__["Router"].pushRoute('idea.detail', {
            params: params
          });
        }
      } else {
        __WEBPACK_IMPORTED_MODULE_8__routes__["Router"].push(currentPath, asPath);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__layout__["a" /* default */], _extends({}, this.props, {
        navmenu: false,
        container: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }), photoId ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__image_modal__["a" /* default */], {
        id: photoId,
        slug: slug,
        onDismiss: function onDismiss() {
          return _this2.dismissModal(photoId);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }) : '', __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "container-fluid service px-4 bg-gray",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-0 col-md-3 col-lg-3 px-3",
        id: "sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Sidebar, {
        filter: filter_default,
        color: color,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-12 col-md-9 col-lg-9 px-0",
        id: "cat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "bg-white px-3 py-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: "text-dark title ml-1 pt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, h1 && h1), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "list-tag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, listBadge ? listBadge.map(function (value, index) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
          href: value.uri,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          className: "badge badge-pill badge-light border border-primary mr-2 my-1 service-tag",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          }
        }, value.name_tag, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
          className: "close",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          }
        })));
      }) : ''), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_infinite_scroller___default.a, {
        pageStart: 0,
        loadMore: this.loadItems.bind(this),
        hasMore: this.state.hasMoreItems,
        loader: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "loader",
          key: "cx",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          }
        }, "Loading ..."),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_masonry_component___default.a, {
        className: '.grid are-images-unloaded mt-3',
        disableImagesLoaded: false,
        options: masonryOptions,
        updateOnEachImageLoad: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "grid__col-sizer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "grid__gutter-sizer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }), images && images.map(function (value, index) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "grid__item rounded p-1",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "grid__images",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "position-relative",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          className: "position-absolute rounded d-none upload",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150
          }
        }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
          className: "fa fa-upload",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150
          }
        }), " L\u01B0u \u1EA3nh"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
          onClick: function onClick(e) {
            return _this2.showPhoto(e, value.id, value.slug);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
          className: "rounded",
          src: value.medium_path,
          alt: "{{ $element->name }}",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          }
        })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "position-relative idea-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
          className: "mt-2 font-13 text-black-100",
          "data-title": "{{ $element->name }}",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          }
        }, value.name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          className: "mt-2 images-title font-12 text-black-100 moreDes",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          }
        }, value.descriptions)));
      }))))))));
    }
  }]);

  return IdeaComponent;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "sidebar-service row bg-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "d-md-block px-2 w-100 sidebar-service-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      }, filter && filter.map(function (value, index) {
        return value.data.length != 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "child-sidebar-service pb-1 col-12 offset-md-0 col-md-12 px-0",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 187
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "mt-2 widget p-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
          className: "font-15 mb-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          }
        }, value.textName, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          className: "fa fa-chevron-right d-block d-md-none",
          "data-toggle": "collapse",
          "data-target": "#demoTest",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          }
        })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
          className: "list-unstyled mb-0 collapse d-md-block",
          id: "demoTest",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 190
          }
        }, value.data && Object(__WEBPACK_IMPORTED_MODULE_7__libraries_helpers__["a" /* mapObject */])(value.data, function (index, value) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
            className: "py-1 radio",
            key: index,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 193
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
            href: value.uri,
            className: "font-13 font-weight-light text-gray",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 194
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
            className: "px-3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 194
            }
          }, value.name_tag, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 194
            }
          }, value.total_doc))));
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          className: "more loadmore d-none d-md-block",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 198
          }
        }, "Xem th\xEAm ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
          className: "la la-arrow-circle-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 198
          }
        })))));
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "child-sidebar-service pb-1 col-12 offset-md-0 col-md-12 px-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "mt-2 widget p-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        className: "font-15",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      }, "M\xC0U S\u1EAEC"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "expand-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "service-color mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        }
      }, color && Object(__WEBPACK_IMPORTED_MODULE_7__libraries_helpers__["a" /* mapObject */])(color, function (index, value) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
          href: value.uri,
          className: "text-dark border border-gray",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
          className: "float-left {{ array_get(config('filter.idea.data_type.color.class_name'), $item->original) }}",
          "data-toggle": "tooltip",
          title: value.name_tag,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212
          }
        }));
      }))))));
    }
  }]);

  return Sidebar;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

/***/ }),

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__("./node_modules/next-routes/dist/index.js"); // Name   Page      Pattern


module.exports = routes() // ----   ----      -----
.add('index') // about  about     /about
.add('test', '/test') // blog   blog      /blog/:slug
.add('news', '/news').add('y-tuong', '/y-tuong', 'idea') // y-tuong   idea   /y-tuong
.add('idea.detail', '/y-tuong/:params', 'idea-filter').add('pro.detail', '/pro/:id-:slug', 'pro/index').add('pro.project', '/pro/:id-:slug/d%E1%BB%B1-%C3%A1n', 'pro/project').add('pro.review', '/pro/:id-:slug/nh%E1%BA%ADn-x%C3%A9t', 'pro/review').add('project.detail', '/du-an/:id-:slug', 'project/index').add('anh.detail', '/anh/:id-:slug', 'pro/index');

/***/ })

})
//# sourceMappingURL=4.bd738796f64835198737.hot-update.js.map