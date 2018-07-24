webpackHotUpdate(7,{

/***/ "./components/image-detail.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _axios = _interopRequireDefault(__webpack_require__("./node_modules/axios/index.js"));

var _helpers = __webpack_require__("./libraries/helpers.js");

var _jquery = _interopRequireDefault(__webpack_require__("./node_modules/jquery/dist/jquery.js"));

var _routes = __webpack_require__("./routes.js");

__webpack_require__("./node_modules/isomorphic-fetch/fetch-npm-browserify.js");

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/components/image-detail.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var APIURL = "http://9houzz.stag:89/" + "api/" + 'image/';

var Image =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Image, _React$Component);

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
        _regenerator.default.mark(function _callee() {
          var image_thumb, image_id;
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (_this.props.data) {
                    _context.next = 3;
                    break;
                  }

                  _context.next = 3;
                  return _this.getValue(_this.props.id);

                case 3:
                  _this.setState({
                    currentImage: (0, _jquery.default)('img.currentImage')
                  });

                  image_thumb = (0, _jquery.default)('.thumb');

                  _this.setState({
                    image_thumb: image_thumb
                  });

                  image_id = _this.state.image.id;

                  if (_this.state.detail == false) {
                    image_thumb.each(function () {
                      if ((0, _jquery.default)(this).data('id') == image_id) {
                        (0, _jquery.default)(this).addClass('project-thumb--current');
                      }
                    });
                  }

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
    Object.defineProperty(_assertThisInitialized(_this), "nextImage", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value2 = _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee2(e, id, slug) {
          return _regenerator.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  e.preventDefault();

                  if (_this.state.detail == false) {
                    _this.nextProject(id, slug);
                  } else {
                    _this.nextIdea(_this.state.currentValue.id);
                  }

                case 2:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        return function value(_x, _x2, _x3) {
          return _value2.apply(this, arguments);
        };
      }()
    });
    Object.defineProperty(_assertThisInitialized(_this), "nextIdea", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value3 = _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee3(id) {
          var startIndex, currentIndex, nextImage;
          return _regenerator.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  startIndex = 0;
                  currentIndex = 0;

                  _jquery.default.each(_this.state.listIdea, function ($key, $value) {
                    if ($value.id == id) {
                      startIndex = $key;
                    }
                  });

                  currentIndex = startIndex + 1;
                  nextImage = _this.state.listIdea[currentIndex];

                  _this.pushStateUrl(nextImage.id, nextImage.slug);

                  _context3.next = 8;
                  return _this.getValue(nextImage.id);

                case 8:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        return function value(_x4) {
          return _value3.apply(this, arguments);
        };
      }()
    });
    Object.defineProperty(_assertThisInitialized(_this), "nextProject", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value4 = _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee4(id, slug) {
          var image_size, currentIndex, lastIndex, lastImage, nextId, nextSlug;
          return _regenerator.default.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  image_size = _this.state.image_thumb.length - 1;
                  currentIndex = _this.state.currentImage;
                  lastIndex = 0;

                  _this.state.image_thumb.each(function () {
                    if ((0, _jquery.default)(this).hasClass('project-thumb--current')) {
                      currentIndex = (0, _jquery.default)(this).index();

                      if (currentIndex < image_size) {
                        lastIndex = currentIndex + 1;
                      } else {
                        lastIndex = 0;
                      }

                      (0, _jquery.default)(this).removeClass('project-thumb--current');
                    }
                  });

                  _this.state.image_thumb.eq(lastIndex).addClass('project-thumb--current');

                  lastImage = _this.state.image_thumb.eq(lastIndex);
                  nextId = lastImage.data('id');
                  nextSlug = lastImage.data('slug');

                  _this.setState({
                    currentImage: (0, _jquery.default)('img.currentImage')
                  });

                  _this.setState({
                    currentValue: _this.state.images[lastIndex]
                  });

                case 10:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        return function value(_x5, _x6) {
          return _value4.apply(this, arguments);
        };
      }()
    });
    Object.defineProperty(_assertThisInitialized(_this), "backImage", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value5 = _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee5(e) {
          return _regenerator.default.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  e.preventDefault();

                  if (_this.state.detail == false) {
                    _this.backProject();
                  } else {
                    _this.backIdea(_this.state.currentValue.id);
                  }

                case 2:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }));

        return function value(_x7) {
          return _value5.apply(this, arguments);
        };
      }()
    });
    Object.defineProperty(_assertThisInitialized(_this), "backProject", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value6 = _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee6() {
          var image_size, currentIndex, lastIndex, lastImage, nextId, nextSlug;
          return _regenerator.default.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  image_size = _this.state.image_thumb.length - 1;
                  currentIndex = _this.state.currentImage;
                  lastIndex = 0;

                  _this.state.image_thumb.each(function () {
                    if ((0, _jquery.default)(this).hasClass('project-thumb--current')) {
                      currentIndex = (0, _jquery.default)(this).index();

                      if (currentIndex > 0) {
                        lastIndex = currentIndex - 1;
                      } else {
                        lastIndex = image_size;
                      }

                      (0, _jquery.default)(this).removeClass('project-thumb--current');
                    }
                  });

                  _this.state.image_thumb.eq(lastIndex).addClass('project-thumb--current');

                  lastImage = _this.state.image_thumb.eq(lastIndex);
                  nextId = lastImage.data('id');
                  nextSlug = lastImage.data('slug');

                  _this.setState({
                    currentImage: (0, _jquery.default)('img.currentImage')
                  });

                  _this.setState({
                    currentValue: _this.state.images[lastIndex]
                  });

                case 10:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }));

        return function value() {
          return _value6.apply(this, arguments);
        };
      }()
    });
    Object.defineProperty(_assertThisInitialized(_this), "backIdea", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value7 = _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee7(id) {
          var startIndex, currentIndex, nextImage;
          return _regenerator.default.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  startIndex = 0;
                  currentIndex = 0;

                  _jquery.default.each(_this.state.listIdea, function ($key, $value) {
                    if ($value.id == id) {
                      startIndex = $key;
                    }
                  });

                  currentIndex = startIndex - 1;
                  nextImage = _this.state.listIdea[currentIndex];

                  _this.pushStateUrl(nextImage.id, nextImage.slug);

                  _context7.next = 8;
                  return _this.getValue(nextImage.id);

                case 8:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7, this);
        }));

        return function value(_x8) {
          return _value7.apply(this, arguments);
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
      currentValue: null,
      detail: false,
      listIdea: []
    };
    return _this;
  }

  _createClass(Image, [{
    key: "getValue",
    value: function () {
      var _getValue = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee8(id) {
        var _this2 = this;

        var data;
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return _axios.default.get(APIURL + id).then(function (res) {
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
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      return function getValue(_x9) {
        return _getValue.apply(this, arguments);
      };
    }()
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        detail: this.props.detail,
        listIdea: this.props.images,
        nextPageUrl: this.props.nextPageUrl
      });

      if (this.props.data) {
        this.setState({
          image: this.props.data.image,
          project: this.props.data.project,
          images: this.props.data.images,
          provider: this.props.data.provider,
          tag: this.props.data.tag,
          currentValue: this.props.data.image
        });
      }
    }
  }, {
    key: "pushStateUrl",
    value: function pushStateUrl(id, slug) {
      if (this.props.ideaParams) {
        var params = this.props.ideaParams;

        if (this.props.subParams) {
          _routes.Router.pushRoute("/y-tuong/".concat(params, "?f=").concat(this.props.subParams, "&photoId=").concat(id, "&slug=").concat(slug), "/anh/".concat(id, "-").concat(slug));
        } else {
          _routes.Router.push("".concat(this.props.currentPath, "?params=").concat(params, "&photoId=").concat(id, "&slug=").concat(slug), "/anh/".concat(id, "-").concat(slug));
        }
      } else {
        _routes.Router.push("".concat(this.props.currentPath, "?photoId=").concat(id, "&slug=").concat(slug), "/anh/".concat(id, "-").concat(slug));
      }
    }
  }, {
    key: "getFullImage",
    value: function getFullImage(url, func) {// switch (func) {
      //     case 'next' :
      //         axios.get(url, {
      //             params: {
      //                 flag: true
      //             }
      //         }).then(response => {
      //             var data = response.data;
      //             console.log(response);
      //             this.listIdea = data.slug;
      //             this.nextPageUrl = data.page;
      //             this.currentIndex = 0;
      //             let nextImage = this.listIdea[this.currentIndex];
      //             this.$router.push({name: 'image.detail', params: {id: nextImage[0] , name : nextImage[1]}});
      //             this.handler(nextImage[0],nextImage[1]);
      //         });
      //         break;
      //     case 'back' :
      //         axios.get(url, {
      //             params: {
      //                 flag: true
      //             }
      //         }).then(response => {
      //             var data = response.data;
      //             this.listIdea = data.slug;
      //             this.backPageUrl = data.back;
      //             this.currentIndex = this.listIdea.length - 1
      //             let backImage = this.listIdea[this.currentIndex];
      //             this.$router.push({name: 'image.detail', params: {id: backImage[0] , name : backImage[1]}});
      //             this.handler(backImage[0],backImage[1]);
      //         });
      //         break;
      // }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          id = _props.id,
          slug = _props.slug;
      return _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        }
      }, _react.default.createElement("div", {
        className: "lgBg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        }
      }), _react.default.createElement("div", {
        id: "image-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        }
      }, _react.default.createElement("div", {
        id: "lbMainControls",
        className: "trackMe d-block d-md-none",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        }
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        }
      }, _react.default.createElement("a", {
        className: "lbCloseButton lbClose",
        "aria-label": "Close",
        href: "",
        "data-dismiss": "modal",
        compid: "lbCloseButton",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        }
      }))), _react.default.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        }
      }, this.state.currentValue && _react.default.createElement("img", {
        className: "image-detail",
        src: this.state.currentValue.path_for_size,
        fallback: "image.path_for_size",
        alt: "image.name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        }
      })), _react.default.createElement("div", {
        className: "lb-navDiv",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        }
      }, _react.default.createElement("a", {
        className: "link next lbNavigation nav-arrow",
        onClick: function onClick(e) {
          return _this3.nextImage(e, id, slug);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        }
      }, _react.default.createElement("div", {
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        }
      }, _react.default.createElement("span", {
        className: "fa fa-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        }
      }))), _react.default.createElement("a", {
        className: "link back lbNavigation nav-arrow",
        onClick: function onClick(e) {
          return _this3.backImage(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        }
      }, _react.default.createElement("div", {
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        }
      }, _react.default.createElement("span", {
        className: "fa fa-angle-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        }
      })))), _react.default.createElement("div", {
        id: "lbActions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        }
      }, _react.default.createElement("div", {
        id: "lbActionCenter",
        className: "offset-0 offset-md-3 col-12 col-md-6 text-center text-nowrap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        }
      }, _react.default.createElement("button", {
        className: "btn btn-primary med save text-white",
        title: "Save To Ideabook",
        compid: "addToIdeabook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        }
      }, _react.default.createElement("i", {
        className: "fa fa-plus pr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        }
      }), "L\u01B0u \u1EA3nh"), _react.default.createElement("button", {
        className: "btn bg-black-100 med email text-white",
        title: "send email",
        compid: "addToIdeabook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        }
      }, _react.default.createElement("i", {
        className: "fa fa-envelope-o pr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        }
      }), "G\u1EEDi Email")))), _react.default.createElement(ImageInfo, {
        provider: this.state.provider,
        images: this.state.images,
        image: this.state.image,
        tag: this.state.tag,
        changeValue: function changeValue(data) {
          return _this3.setState({
            currentValue: data,
            detail: false
          });
        },
        currentValue: this.state.currentValue,
        detail: this.props.detail,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        }
      }));
    }
  }]);

  return Image;
}(_react.default.Component);

exports.default = Image;

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
      var $readMore = (0, _jquery.default)("#readMoreBtnText").text();
      var $readLess = (0, _jquery.default)("#readLessBtnText").text();
      (0, _jquery.default)("#readMoreBtn").text($readMore);
      (0, _jquery.default)('#readMoreBtn').click(function () {
        var $this = (0, _jquery.default)(this);
        (0, _jquery.default)("#readMoreBtn").text($readMore);

        if ($this.data('expanded') == "yes") {
          $this.data('expanded', "no");
          (0, _jquery.default)("#readMoreBtn").text($readMore);
          (0, _jquery.default)('#readMoreText').animate({
            height: '100px'
          });
        } else {
          $this.data('expanded', "yes");
          (0, _jquery.default)('#readMoreText').css({
            height: 'auto'
          });
          (0, _jquery.default)("#readMoreBtn").text($readLess);
        }
      });
    }
  }, {
    key: "changeImage",
    value: function changeImage(e, value) {
      e.preventDefault();
      var $this = (0, _jquery.default)(e.target).parents('li');
      var thumb = (0, _jquery.default)('.thumb');
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
          currentValue = _props2.currentValue,
          detail = _props2.detail;
      return _react.default.createElement("div", {
        className: "lbInfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        }
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        }
      }, _react.default.createElement("div", {
        className: "lbInfoTab position-relative d-none d-md-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        }
      }, _react.default.createElement("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        }
      }, _react.default.createElement("div", {
        className: "nav nav-tabs",
        id: "nav-tab",
        role: "tablist",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        }
      }, _react.default.createElement("a", {
        className: "nav-item nav-link active",
        id: "nav-home-tab",
        "data-toggle": "tab",
        href: "#nav-home",
        role: "tab",
        "aria-controls": "nav-home",
        "aria-selected": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        }
      }, _react.default.createElement("i", {
        className: "fa fa-home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        }
      })), _react.default.createElement("a", {
        className: "nav-item nav-link",
        id: "nav-profile-tab",
        "data-toggle": "tab",
        href: "#nav-profile",
        role: "tab",
        "aria-controls": "nav-profile",
        "aria-selected": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        }
      }, _react.default.createElement("i", {
        className: "fa fa-tag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        }
      })), _react.default.createElement("a", {
        className: "nav-item nav-link",
        id: "nav-contact-tab",
        "data-toggle": "tab",
        href: "#nav-contact",
        role: "tab",
        "aria-controls": "nav-contact",
        "aria-selected": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        }
      }, _react.default.createElement("i", {
        className: "fa fa-comment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        }
      })))))), _react.default.createElement("div", {
        className: "content-mask",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        }
      }, _react.default.createElement("div", {
        className: "content-scroll",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        }
      }, _react.default.createElement("div", {
        className: "content-detail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        }
      }, _react.default.createElement("div", {
        className: "media",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        }
      }, provider.auth_avatar && _react.default.createElement("img", {
        src: provider.auth_avatar,
        className: "align-self-start mr-2 rounded-circle detail-user mt-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        }
      }), _react.default.createElement("div", {
        className: "media-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        }
      }, _react.default.createElement("div", {
        className: "media-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        }
      }, _react.default.createElement(_routes.Link, {
        prefetch: true,
        route: "/pro/".concat(provider.id, "-").concat(provider.slug),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        }
      }, _react.default.createElement("a", {
        className: "font-weight-bold font-14 text-black-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        }
      }, provider.name ? provider.name : 'Chưa có tên')), _react.default.createElement("div", {
        className: "star-rating font-14",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        }
      }, _react.default.createElement("span", {
        className: "text-black-100 font-14",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        }
      }, provider.avg_rate && (0, _helpers.rating)(provider.avg_rate), " (", provider.total_rate ? provider.total_rate : 0, " ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1)")))))), _react.default.createElement("div", {
        className: "content-detail border-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        }
      }, _react.default.createElement("h2", {
        className: "font-15 text-black-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        }
      }, currentValue && currentValue.name), _react.default.createElement("div", {
        className: "media-content",
        id: "readMore",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        }
      }, _react.default.createElement("div", {
        className: "readMoreWrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        }
      }, _react.default.createElement("p", {
        id: "readMoreText",
        className: "font-13 normalText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        }
      }, currentValue && currentValue.descriptions), _react.default.createElement("div", {
        className: "readMoreGradient",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        }
      })), _react.default.createElement("button", {
        id: "readMoreBtn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        }
      }), _react.default.createElement("span", {
        id: "readLessBtnText",
        style: {
          'display': 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        }
      }, "R\xFAt g\u1ECDn "), _react.default.createElement("span", {
        id: "readMoreBtnText",
        style: {
          'display': 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        }
      }, "Xem th\xEAm >"))), _react.default.createElement("div", {
        className: "content-detail border-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        }
      }, _react.default.createElement("h2", {
        className: "font-14",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        }
      }, _react.default.createElement("a", {
        href: "project.url_path",
        className: "text-black-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        }
      }, "C\xE1c \u1EA3nh trong c\xF9ng d\u1EF1 \xE1n")), _react.default.createElement("ul", {
        className: "list-unstyled clearfix thumb-grid grid-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        }
      }, images && images.map(function (value, index) {
        return _react.default.createElement("li", {
          className: "thumb project-thumb",
          "data-id": value.id,
          ref: "'image'+image.id",
          "data-slug": value.slug,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 349
          }
        }, _react.default.createElement("a", {
          className: "link",
          onClick: function onClick(e) {
            return _this4.changeImage(e, value);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 350
          }
        }, _react.default.createElement("div", {
          className: "img-responsive-wrapper img-responsive-square progressive",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 351
          }
        }, value.small_path && _react.default.createElement("img", {
          src: value.small_path,
          alt: "image.name",
          className: "img-respontive",
          id: "'image-'+image.id",
          width: "71",
          height: "71",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 352
          }
        }))));
      })), _react.default.createElement("div", {
        className: "pt-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        }
      }, tag.breadcrumbs && _react.default.createElement("a", {
        href: tag.breadcrumbs.uri,
        className: "mr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        }
      }, _react.default.createElement("span", {
        className: "text-center font-12 font-weight-normal badge badge-pill badge-white border border-primary py-2 px-3 mb-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        }
      }, tag.breadcrumbs.name_tag)), tag.other && tag.other.is_seo == 1 && _react.default.createElement("a", {
        href: tag.other.uri,
        className: "mr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369
        }
      }, _react.default.createElement("span", {
        className: "text-center font-12 font-weight-normal badge badge-pill badge-white border border-primary py-2 px-3 mb-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        }
      }, tag.other.name_tag)))), _react.default.createElement("div", {
        className: "content-detail border-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        }
      }, _react.default.createElement("div", {
        className: "header row m-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        }
      }, _react.default.createElement("h2", {
        className: "font-14 text-black-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379
        }
      }, "H\u1ECFi \u0111\xE1p v\u1EC1 h\xECnh \u1EA3nh"), _react.default.createElement("span", {
        className: "col-xs-12 col-md-12 px-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380
        }
      }, _react.default.createElement("button", {
        id: "askQuestionButton",
        className: "btn border-primary btn-block text-primary font-13",
        compid: "lbAsk",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380
        }
      }, "\u0110\u1EB7t c\xE2u h\u1ECFi c\u1EE7a b\u1EA1n")))))));
    }
  }]);

  return ImageInfo;
}(_react.default.PureComponent);

/***/ })

})
//# sourceMappingURL=7.f0fb5757b7f98a86612e.hot-update.js.map