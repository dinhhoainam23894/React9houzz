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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/IdeaComponent.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(__webpack_require__("styled-jsx/style"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _axios = _interopRequireDefault(__webpack_require__("axios"));

__webpack_require__("isomorphic-fetch");

var _layout = _interopRequireDefault(__webpack_require__("./components/layout.js"));

var _sideBar = _interopRequireDefault(__webpack_require__("./components/sideBar.js"));

var _reactMasonryComponent = _interopRequireDefault(__webpack_require__("react-masonry-component"));

var _reactInfiniteScroller = _interopRequireDefault(__webpack_require__("react-infinite-scroller"));

var _imageModal = _interopRequireDefault(__webpack_require__("./components/image-modal.js"));

var _routes = __webpack_require__("./routes.js");

var _jquery = _interopRequireDefault(__webpack_require__("jquery"));

var _fscreen_idea = _interopRequireDefault(__webpack_require__("./styles/fscreen_idea.css"));

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/components/IdeaComponent.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var APIURL = "https://api.9houz.com/" + "api/";
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
    key: "loadItems",
    value: function loadItems(page) {
      var self = this;
      var url = '';

      if (this.props.nextUrl) {
        url = this.props.nextUrl;
      }

      if (this.props.nextUrl != null) {
        _axios.default.get(url).then(function (resp) {
          if (resp) {
            var tracks = self.props.images;
            var data = resp.data;
            data.images.data.map(function (track) {
              tracks.push(track);
            });

            if (data.images.next_page_url && data.images.next_page_url != null) {
              self.props.changeState(tracks, data.images.next_page_url);
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
          _routes.Router.push("".concat(currentPath, "?params=").concat(params, "&f=").concat(this.props.subParams, "&photoId=").concat(id, "&slug=").concat(slug), "/anh/".concat(id, "-").concat(slug));
        } else {
          _routes.Router.push("".concat(currentPath, "?params=").concat(params, "&photoId=").concat(id, "&slug=").concat(slug), "/anh/".concat(id, "-").concat(slug));
        }
      } else {
        _routes.Router.push("".concat(currentPath, "?photoId=").concat(id, "&slug=").concat(slug), "/anh/".concat(id, "-").concat(slug));
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var showChar = 150; // How many characters are shown by default

      var ellipsestext = "";
      var moretext = "Xem thêm >";
      var lesstext = "Rút gọn <";
      var self = this;
      (0, _jquery.default)('.moreDes').each(function (e) {
        var content = (0, _jquery.default)(this).html();

        if (content.length > showChar) {
          var c = content.substr(0, showChar);
          var h = content.substr(showChar, content.length - showChar);
          var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
          (0, _jquery.default)(this).html(html);
        }
      });
      (0, _jquery.default)(".morelink").click(function (e) {
        e.preventDefault();

        if ((0, _jquery.default)(this).hasClass("less")) {
          (0, _jquery.default)(this).removeClass("less");
          (0, _jquery.default)(this).html(moretext);
        } else {
          (0, _jquery.default)(this).addClass("less");
          (0, _jquery.default)(this).html(lesstext);
        }

        (0, _jquery.default)(this).parent().prev().toggle();
        (0, _jquery.default)(this).prev().toggle();
        self.masonry.performLayout();
        return false;
      });
      (0, _jquery.default)('.sidebar-service ul').each(function (e) {
        if ((0, _jquery.default)(this).find('li').length == (0, _jquery.default)(this).find((0, _jquery.default)('li:visible')).length) {
          (0, _jquery.default)(this).find('.loadmore').hide();
        }
      });
      (0, _jquery.default)('.sidebar-service').on('click', '.loadmore', function () {
        var list = (0, _jquery.default)(this).parent().find((0, _jquery.default)('li'));
        (0, _jquery.default)(this).parent().find((0, _jquery.default)('li:hidden')).show();

        if (list.length == (0, _jquery.default)(this).parent().find((0, _jquery.default)('li:visible')).length) {
          (0, _jquery.default)(this).removeClass('loadmore');
          (0, _jquery.default)(this).addClass('hidemore');
          (0, _jquery.default)(this).html('Thu gọn');
        }
      });
      (0, _jquery.default)('.sidebar-service').on('click', '.hidemore', function () {
        var list = (0, _jquery.default)(this).parent().find((0, _jquery.default)('li'));
        (0, _jquery.default)(this).parent().find((0, _jquery.default)('li:visible')).slice(5, list.length).hide();
        (0, _jquery.default)(this).removeClass('hidemore');
        (0, _jquery.default)(this).addClass('loadmore');
        (0, _jquery.default)(this).html('Xem thêm');
      });
      (0, _jquery.default)(".close").click(function (event) {
        (0, _jquery.default)(this).parent().toggle();
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      // var list = $('.idea-content').find('.moreDes').length;
      (0, _jquery.default)('.idea-content').find((0, _jquery.default)('.moreDes:visible')).hide();
      (0, _jquery.default)('.idea-content').find((0, _jquery.default)('.moreDes')).slice(0, 20).show();
    }
  }, {
    key: "dismissModal",
    value: function dismissModal() {
      if (this.props.ideaParams) {
        var params = this.props.ideaParams;

        if (this.props.subParams) {
          _routes.Router.pushRoute("/y-tuong/".concat(params, "?f=").concat(this.props.subParams));
        } else {
          _routes.Router.pushRoute('idea.detail', {
            params: params
          });
        }
      } else {
        _routes.Router.push('/idea', '/y-tuong');
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
      var _props = this.props,
          images = _props.images,
          h1 = _props.h1,
          filter_default = _props.filter_default,
          colors = _props.colors,
          listBadge = _props.listBadge,
          detail = _props.detail,
          page = _props.page;
      var _props2 = this.props,
          photoId = _props2.photoId,
          slug = _props2.slug;
      return _react.default.createElement(_layout.default, _extends({}, this.props, {
        navmenu: false,
        container: false,
        css: _fscreen_idea.default,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }), photoId ? _react.default.createElement(_imageModal.default, {
        id: photoId,
        slug: slug,
        detail: detail,
        images: images,
        currentPath: currentPath,
        ideaParams: this.props.ideaParams,
        subParams: this.props.subParams,
        nextPageUrl: this.state.nextUrl,
        onDismiss: function onDismiss() {
          return _this2.dismissModal();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }) : '', _react.default.createElement(_style.default, {
        styleId: "352178927",
        css: "#lightbox .nav-link:first-child{border-left:1px solid #e2e2e2 !important;}#lightbox .nav-link{display:block;padding:0.4rem 0.7rem !important;border-left:none !important;border-color:#e2e2e2;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSWRlYUNvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1S1ksQUFFNEMsQUFHM0IsY0FDbUIsMkJBSlMsTUFLZCw0QkFDUCxxQkFBQyIsImZpbGUiOiJjb21wb25lbnRzL0lkZWFDb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9teS1uZXh0LWFwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi9sYXlvdXQnXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL3NpZGVCYXInXG5pbXBvcnQgTWFzb25yeSBmcm9tICdyZWFjdC1tYXNvbnJ5LWNvbXBvbmVudCdcbmltcG9ydCBJbmZpbml0ZVNjcm9sbCBmcm9tICdyZWFjdC1pbmZpbml0ZS1zY3JvbGxlcidcbmltcG9ydCBJbWFnZU1vZGFsIGZyb20gJy4vaW1hZ2UtbW9kYWwnXG5pbXBvcnQge0xpbmt9IGZyb20gJy4uL3JvdXRlcydcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5jb25zdCBBUElVUkwgPSBwcm9jZXNzLmVudi5ET01BSU4gKyBwcm9jZXNzLmVudi5BUElVUklcbnZhciBjdXJyZW50UGF0aCA9ICcvJ1xudmFyIGFzUGF0aCA9ICcvJ1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJy4uL3JvdXRlcydcbmltcG9ydCBjc3MgZnJvbSAnc3R5bGVzL2ZzY3JlZW5faWRlYS5jc3MnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJZGVhQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIHN0YXRlID0ge1xuICAgICAgICBpbWFnZXM6IFtdLFxuICAgICAgICBuZXh0VXJsIDogbnVsbCxcbiAgICAgICAgaGFzTW9yZUl0ZW1zOiB0cnVlLFxuICAgICAgICBoMSA6IG51bGwsXG4gICAgICAgIGZpbHRlcl9kZWZhdWx0IDogW10sXG4gICAgICAgIGxpc3RCYWRnZSA6IFtdXG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIGN1cnJlbnRQYXRoID0gdGhpcy5wcm9wcy5wYXRoXG4gICAgICAgIGFzUGF0aCA9IHRoaXMucHJvcHMuYXNQYXRoXG4gICAgfVxuICAgIGxvYWRJdGVtcyhwYWdlKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIHVybCA9ICcnO1xuICAgICAgICBpZih0aGlzLnByb3BzLm5leHRVcmwpIHtcbiAgICAgICAgICAgIHVybCA9IHRoaXMucHJvcHMubmV4dFVybDtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnByb3BzLm5leHRVcmwgIT0gbnVsbCl7XG4gICAgICAgICAgICBheGlvcy5nZXQodXJsKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcCkge1xuICAgICAgICAgICAgICAgIGlmKHJlc3ApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRyYWNrcyA9IHNlbGYucHJvcHMuaW1hZ2VzO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHJlc3AuZGF0YVxuICAgICAgICAgICAgICAgICAgICBkYXRhLmltYWdlcy5kYXRhLm1hcCgodHJhY2spID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYWNrcy5wdXNoKHRyYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmKGRhdGEuaW1hZ2VzLm5leHRfcGFnZV91cmwgJiYgZGF0YS5pbWFnZXMubmV4dF9wYWdlX3VybCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByb3BzLmNoYW5nZVN0YXRlKHRyYWNrcyxkYXRhLmltYWdlcy5uZXh0X3BhZ2VfdXJsKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzTW9yZUl0ZW1zOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgIFxuICAgIH1cbiAgICBzaG93UGhvdG8gKGUsIGlkICwgc2x1Zykge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgaWYodGhpcy5wcm9wcy5pZGVhUGFyYW1zKXtcbiAgICAgICAgICAgIHZhciBwYXJhbXMgPSB0aGlzLnByb3BzLmlkZWFQYXJhbXNcbiAgICAgICAgICAgIGlmKHRoaXMucHJvcHMuc3ViUGFyYW1zKXtcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChgJHtjdXJyZW50UGF0aH0/cGFyYW1zPSR7cGFyYW1zfSZmPSR7dGhpcy5wcm9wcy5zdWJQYXJhbXN9JnBob3RvSWQ9JHtpZH0mc2x1Zz0ke3NsdWd9YCxgL2FuaC8ke2lkfS0ke3NsdWd9YClcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKGAke2N1cnJlbnRQYXRofT9wYXJhbXM9JHtwYXJhbXN9JnBob3RvSWQ9JHtpZH0mc2x1Zz0ke3NsdWd9YCxgL2FuaC8ke2lkfS0ke3NsdWd9YCkgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgUm91dGVyLnB1c2goYCR7Y3VycmVudFBhdGh9P3Bob3RvSWQ9JHtpZH0mc2x1Zz0ke3NsdWd9YCxgL2FuaC8ke2lkfS0ke3NsdWd9YClcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICB2YXIgc2hvd0NoYXIgPSAxNTA7ICAvLyBIb3cgbWFueSBjaGFyYWN0ZXJzIGFyZSBzaG93biBieSBkZWZhdWx0XG4gICAgICAgIHZhciBlbGxpcHNlc3RleHQgPSBcIlwiO1xuICAgICAgICB2YXIgbW9yZXRleHQgPSBcIlhlbSB0aMOqbSA+XCI7XG4gICAgICAgIHZhciBsZXNzdGV4dCA9IFwiUsO6dCBn4buNbiA8XCI7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICAkKCcubW9yZURlcycpLmVhY2goZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSAkKHRoaXMpLmh0bWwoKTtcbiAgICAgICAgICAgIGlmKGNvbnRlbnQubGVuZ3RoID4gc2hvd0NoYXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgYyA9IGNvbnRlbnQuc3Vic3RyKDAsIHNob3dDaGFyKTtcbiAgICAgICAgICAgICAgICB2YXIgaCA9IGNvbnRlbnQuc3Vic3RyKHNob3dDaGFyLCBjb250ZW50Lmxlbmd0aCAtIHNob3dDaGFyKTtcbiAgICAgICAgICAgICAgICB2YXIgaHRtbCA9IGMgKyAnPHNwYW4gY2xhc3M9XCJtb3JlZWxsaXBzZXNcIj4nICsgZWxsaXBzZXN0ZXh0KyAnJm5ic3A7PC9zcGFuPjxzcGFuIGNsYXNzPVwibW9yZWNvbnRlbnRcIj48c3Bhbj4nICsgaCArICc8L3NwYW4+Jm5ic3A7Jm5ic3A7PGEgaHJlZj1cIlwiIGNsYXNzPVwibW9yZWxpbmtcIj4nICsgbW9yZXRleHQgKyAnPC9hPjwvc3Bhbj4nO1xuICAgICAgICAgICAgICAgICQodGhpcykuaHRtbChodG1sKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICAkKFwiLm1vcmVsaW5rXCIpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKFwibGVzc1wiKSkge1xuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJsZXNzXCIpO1xuICAgICAgICAgICAgICAgICQodGhpcykuaHRtbChtb3JldGV4dCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJsZXNzXCIpO1xuICAgICAgICAgICAgICAgICQodGhpcykuaHRtbChsZXNzdGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnByZXYoKS50b2dnbGUoKTtcbiAgICAgICAgICAgICQodGhpcykucHJldigpLnRvZ2dsZSgpO1xuICAgICAgICAgICAgc2VsZi5tYXNvbnJ5LnBlcmZvcm1MYXlvdXQoKSAgICA7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICAkKCcuc2lkZWJhci1zZXJ2aWNlIHVsJykuZWFjaChmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmZpbmQoJ2xpJykubGVuZ3RoID09ICQodGhpcykuZmluZCgkKCdsaTp2aXNpYmxlJykpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcubG9hZG1vcmUnKS5oaWRlKCk7XG4gICAgICAgICAgICB9XG5cdFx0ICAgIH0pO1xuICAgICAgICAkKCcuc2lkZWJhci1zZXJ2aWNlJykub24oJ2NsaWNrJywnLmxvYWRtb3JlJyxmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbGlzdCA9ICQodGhpcykucGFyZW50KCkuZmluZCgkKCdsaScpKTtcblx0XHRcdCAgICAgICQodGhpcykucGFyZW50KCkuZmluZCgkKCdsaTpoaWRkZW4nKSkuc2hvdygpO1xuICAgICAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09ICQodGhpcykucGFyZW50KCkuZmluZCgkKCdsaTp2aXNpYmxlJykpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2xvYWRtb3JlJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaGlkZW1vcmUnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmh0bWwoJ1RodSBn4buNbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgJCgnLnNpZGViYXItc2VydmljZScpLm9uKCdjbGljaycsJy5oaWRlbW9yZScsZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGxpc3QgPSAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJCgnbGknKSk7XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJCgnbGk6dmlzaWJsZScpKS5zbGljZSg1LCBsaXN0Lmxlbmd0aCkuaGlkZSgpO1xuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaGlkZW1vcmUnKTtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2xvYWRtb3JlJyk7XG4gICAgICAgICAgICAkKHRoaXMpLmh0bWwoJ1hlbSB0aMOqbScpO1xuICAgICAgICB9KTtcbiAgICAgICAgJChcIi5jbG9zZVwiKS5jbGljayhmdW5jdGlvbihldmVudCkge1xuXHQgICAgXHQkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZSgpO1xuICAgICAgICB9KTsgICAgICAgIFxuICAgIH1cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKXtcbiAgICAgICAgLy8gdmFyIGxpc3QgPSAkKCcuaWRlYS1jb250ZW50JykuZmluZCgnLm1vcmVEZXMnKS5sZW5ndGg7XG4gICAgICAgICQoJy5pZGVhLWNvbnRlbnQnKS5maW5kKCQoJy5tb3JlRGVzOnZpc2libGUnKSkuaGlkZSgpO1xuICAgICAgICAkKCcuaWRlYS1jb250ZW50JykuZmluZCgkKCcubW9yZURlcycpKS5zbGljZSgwLCAyMCkuc2hvdygpO1xuXG4gICAgfVxuICAgIGRpc21pc3NNb2RhbCAoKSB7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuaWRlYVBhcmFtcyl7XG4gICAgICAgICAgICB2YXIgcGFyYW1zID0gdGhpcy5wcm9wcy5pZGVhUGFyYW1zXG4gICAgICAgICAgICBpZih0aGlzLnByb3BzLnN1YlBhcmFtcyl7XG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2hSb3V0ZShgL3ktdHVvbmcvJHtwYXJhbXN9P2Y9JHt0aGlzLnByb3BzLnN1YlBhcmFtc31gKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2hSb3V0ZSgnaWRlYS5kZXRhaWwnLCB7cGFyYW1zOiBwYXJhbXN9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvaWRlYScsJy95LXR1b25nJylcbiAgICAgICAgfVxuICAgIH1cbiAgIHJlbmRlcigpe1xuICAgICAgICBjb25zdCBtYXNvbnJ5T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGd1dHRlcjogJy5ncmlkX19ndXR0ZXItc2l6ZXInLFxuICAgICAgICAgICAgaXNPcmlnaW5MZWZ0OiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgY29uc3QgeyBpbWFnZXMgLCBoMSAsZmlsdGVyX2RlZmF1bHQgLCBjb2xvcnMgLCBsaXN0QmFkZ2UgLCBkZXRhaWwgLCBwYWdlfSA9IHRoaXMucHJvcHNcbiAgICAgICBjb25zdCB7IHBob3RvSWQgLCBzbHVnIH0gPSB0aGlzLnByb3BzO1xuICAgICAgIHJldHVybihcbiAgICAgICAgPExheW91dCB7Li4udGhpcy5wcm9wc30gbmF2bWVudT17ZmFsc2V9IGNvbnRhaW5lcj17ZmFsc2V9IGNzcz17Y3NzfT5cbiAgICAgICAge1xuICAgICAgICAgICAgcGhvdG9JZCA/XG4gICAgICAgICAgICA8SW1hZ2VNb2RhbFxuICAgICAgICAgICAgICAgIGlkPXtwaG90b0lkfVxuICAgICAgICAgICAgICAgIHNsdWc9e3NsdWd9XG4gICAgICAgICAgICAgICAgZGV0YWlsPXtkZXRhaWx9XG4gICAgICAgICAgICAgICAgaW1hZ2VzPXtpbWFnZXN9XG4gICAgICAgICAgICAgICAgY3VycmVudFBhdGg9e2N1cnJlbnRQYXRofVxuICAgICAgICAgICAgICAgIGlkZWFQYXJhbXM9e3RoaXMucHJvcHMuaWRlYVBhcmFtc31cbiAgICAgICAgICAgICAgICBzdWJQYXJhbXM9e3RoaXMucHJvcHMuc3ViUGFyYW1zfVxuICAgICAgICAgICAgICAgIG5leHRQYWdlVXJsPXt0aGlzLnN0YXRlLm5leHRVcmx9XG4gICAgICAgICAgICAgICAgb25EaXNtaXNzPXsoKSA9PiB0aGlzLmRpc21pc3NNb2RhbCgpfVxuICAgICAgICAgICAgLz4gOiAnJ1xuICAgICAgICB9XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntcbiAgICAgICAgICAgIGBcbiAgICAgICAgICAgICNsaWdodGJveCAubmF2LWxpbms6Zmlyc3QtY2hpbGR7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTJlMmUyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjbGlnaHRib3ggLm5hdi1saW5rIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjRyZW0gMC43cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICNlMmUyZTI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBgXG4gICAgICAgIH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgc2VydmljZSBweC00IGJnLWdyYXlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMCBjb2wtbWQtMyBjb2wtbGctMyBweC0zXCIgaWQ9XCJzaWRlYmFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxTaWRlYmFyIGZpbHRlcj17ZmlsdGVyX2RlZmF1bHR9IGNvbG9yPXtjb2xvcnN9IHBhZ2U9e3BhZ2V9PjwvU2lkZWJhcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtOSBjb2wtbGctOSBweC0wXCIgaWQ9XCJjYXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBweC0zIHB5LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtZGFyayB0aXRsZSBtbC0xXCI+eyBoMSAmJiBoMSB9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC10YWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ICBsaXN0QmFkZ2UgJiYgbGlzdEJhZGdlLm1hcCgodmFsdWUsaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIHJvdXRlPXt2YWx1ZS51cml9IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3ZhbHVlLnVyaX0gPjxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXBpbGwgYmFkZ2UtbGlnaHQgYm9yZGVyIGJvcmRlci1wcmltYXJ5IG1yLTIgbXktMSBzZXJ2aWNlLXRhZ1wiPnt2YWx1ZS5uYW1lX3RhZ30gPGkgY2xhc3NOYW1lPVwiY2xvc2VcIj48L2k+PC9zcGFuPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPEluZmluaXRlU2Nyb2xsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlU3RhcnQ9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkTW9yZT17dGhpcy5sb2FkSXRlbXMuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc01vcmU9e3RoaXMuc3RhdGUuaGFzTW9yZUl0ZW1zfVxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGVyPXs8ZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiIGtleT0nY3gnPkxvYWRpbmcgLi4uPC9kaXY+fT4gXG4gICAgICAgICAgICAgICAgICAgIDxNYXNvbnJ5XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Jy5ncmlkIGFyZS1pbWFnZXMtdW5sb2FkZWQgbXQtMyd9IFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlSW1hZ2VzTG9hZGVkPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17bWFzb25yeU9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgIHJlZj17YyA9PiB0aGlzLm1hc29ucnkgPSBjfVxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVPbkVhY2hJbWFnZUxvYWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRfX2NvbC1zaXplclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkX19ndXR0ZXItc2l6ZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZXMgJiYgaW1hZ2VzLm1hcCgodmFsdWUsaW5kZXgpID0+KCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkX19pdGVtIHJvdW5kZWRcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvc2l0aW9uLWFic29sdXRlIHJvdW5kZWQgZC1ub25lIHVwbG9hZFwiPiA8aSBjbGFzc05hbWU9XCJmYSBmYS11cGxvYWRcIj48L2k+IEzGsHUg4bqjbmg8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgcm91dGU9XCJpbWFnZVwiIHBhcmFtcz17eyBpZDogdmFsdWUuaWQgLCBzbHVnIDogdmFsdWUuc2x1ZyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KGUpID0+ICB0aGlzLnNob3dQaG90byhlLCB2YWx1ZS5pZCAsIHZhbHVlLnNsdWcpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJyb3VuZGVkIGNhcmQtaW1nLXRvcFwiIHNyYz17dmFsdWUubWVkaXVtX3BhdGh9IGFsdD17dmFsdWUubmFtZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgaWRlYS1jb250ZW50IHB4LTEgcHQtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXQtMiBmb250LTE1IHRleHQtYmxhY2stMTAwXCIgZGF0YS10aXRsZT17dmFsdWUubmFtZX0+e3ZhbHVlLm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMiBpbWFnZXMtdGl0bGUgZm9udC0xNCB0ZXh0LWJsYWNrLTEwMCBtb3JlRGVzXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHZhbHVlLmRlc2NyaXB0aW9uc319PjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NYXNvbnJ5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbmZpbml0ZVNjcm9sbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgIClcbiAgIH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/IdeaComponent.js */"
      }), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        className: "jsx-352178927" + " " + "container-fluid service px-4 bg-gray"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        className: "jsx-352178927" + " " + "row"
      }, _react.default.createElement("div", {
        id: "sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        className: "jsx-352178927" + " " + "col-0 col-md-3 col-lg-3 px-3"
      }, _react.default.createElement(_sideBar.default, {
        filter: filter_default,
        color: colors,
        page: page,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      })), _react.default.createElement("div", {
        id: "cat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        className: "jsx-352178927" + " " + "col-12 col-md-9 col-lg-9 px-0"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        className: "jsx-352178927" + " " + "bg-white px-3 py-4"
      }, _react.default.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        className: "jsx-352178927" + " " + "text-dark title ml-1"
      }, h1 && h1), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        className: "jsx-352178927" + " " + "list-tag"
      }, listBadge && listBadge.map(function (value, index) {
        return _react.default.createElement(_routes.Link, {
          prefetch: true,
          route: value.uri,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191
          }
        }, _react.default.createElement("a", {
          href: value.uri,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192
          },
          className: "jsx-352178927"
        }, _react.default.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192
          },
          className: "jsx-352178927" + " " + "badge badge-pill badge-light border border-primary mr-2 my-1 service-tag"
        }, value.name_tag, " ", _react.default.createElement("i", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 192
          },
          className: "jsx-352178927" + " " + "close"
        }))));
      })), _react.default.createElement(_reactInfiniteScroller.default, {
        pageStart: 0,
        loadMore: this.loadItems.bind(this),
        hasMore: this.state.hasMoreItems,
        loader: _react.default.createElement("div", {
          key: "cx",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 201
          },
          className: "jsx-352178927" + " " + "loader"
        }, "Loading ..."),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        }
      }, _react.default.createElement(_reactMasonryComponent.default, {
        className: '.grid are-images-unloaded mt-3',
        disableImagesLoaded: false,
        options: masonryOptions,
        ref: function ref(c) {
          return _this2.masonry = c;
        },
        updateOnEachImageLoad: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        }
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        className: "jsx-352178927" + " " + "grid__col-sizer"
      }), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        className: "jsx-352178927" + " " + "grid__gutter-sizer"
      }), images && images.map(function (value, index) {
        return _react.default.createElement("div", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214
          },
          className: "jsx-352178927" + " " + "grid__item rounded"
        }, _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215
          },
          className: "jsx-352178927" + " " + "card"
        }, _react.default.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 216
          },
          className: "jsx-352178927" + " " + "position-absolute rounded d-none upload"
        }, " ", _react.default.createElement("i", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 216
          },
          className: "jsx-352178927" + " " + "fa fa-upload"
        }), " L\u01B0u \u1EA3nh"), _react.default.createElement(_routes.Link, {
          route: "image",
          params: {
            id: value.id,
            slug: value.slug
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 217
          }
        }, _react.default.createElement("a", {
          onClick: function onClick(e) {
            return _this2.showPhoto(e, value.id, value.slug);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 218
          },
          className: "jsx-352178927"
        }, _react.default.createElement("img", {
          src: value.medium_path,
          alt: value.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 219
          },
          className: "jsx-352178927" + " " + "rounded card-img-top"
        }))), _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 222
          },
          className: "jsx-352178927" + " " + "card-body idea-content px-1 pt-1"
        }, _react.default.createElement("h2", {
          "data-title": value.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 223
          },
          className: "jsx-352178927" + " " + "mt-2 font-15 text-black-100"
        }, value.name), _react.default.createElement("p", {
          dangerouslySetInnerHTML: {
            __html: value.descriptions
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 224
          },
          className: "jsx-352178927" + " " + "mt-2 images-title font-14 text-black-100 moreDes"
        }))));
      }))))))));
    }
  }]);

  return IdeaComponent;
}(_react.default.Component);

exports.default = IdeaComponent;

/***/ }),

/***/ "./components/footer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("react"));

var _routes = __webpack_require__("./routes.js");

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/components/footer.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var footer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(footer, _React$Component);

  function footer() {
    _classCallCheck(this, footer);

    return _possibleConstructorReturn(this, (footer.__proto__ || Object.getPrototypeOf(footer)).apply(this, arguments));
  }

  _createClass(footer, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("footer", {
        className: "footer text-dark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      }, _react.default.createElement("div", {
        className: "container py-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, _react.default.createElement("div", {
        className: "row footer-content mt-2 mx-0 flex-wrap-reverse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, _react.default.createElement("div", {
        className: "col-lg-3 column pr-1 footer-logo pl-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, _react.default.createElement("div", {
        className: "widget",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, _react.default.createElement("div", {
        className: "about_widget",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react.default.createElement("div", {
        className: "logo d-none d-md-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react.default.createElement("a", {
        href: "/",
        title: "Tr\u1EDF v\u1EC1 trang ch\u1EE7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react.default.createElement("img", {
        src: "/static/images/logo9houz.png",
        alt: "9HOUZ.COM - Ngu\u1ED3n c\u1EA3m h\u1EE9ng thi\u1EBFt k\u1EBF n\u1ED9i th\u1EA5t, trang ho\xE0ng nh\xE0 c\u1EEDa | 9houz.com",
        title: "9houzz.com",
        width: "140",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }))), _react.default.createElement("p", {
        className: "font-13",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, "Copyright \xA9 2018 9houz Inc.")))), _react.default.createElement("div", {
        className: "col-lg-9 row d-md-flex d-none",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react.default.createElement("div", {
        className: "col-lg-4 column footer-menu pr-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react.default.createElement("div", {
        className: "widget",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react.default.createElement("p", {
        className: "footer-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, " V\u1EC0 CH\xDANG T\xD4I "), _react.default.createElement("div", {
        className: "link_widgets",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react.default.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react.default.createElement("div", {
        className: "col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react.default.createElement(_routes.Link, {
        prefetch: true,
        route: "/about/gioi-thieu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react.default.createElement("a", {
        href: "#",
        target: "_blank",
        title: "Gi\u1EDBi thi\u1EC7u",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, "Gi\u1EDBi thi\u1EC7u")), _react.default.createElement("a", {
        href: "#",
        title: "Li\xEAn h\u1EC7",
        rel: "nofollow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, "Li\xEAn h\u1EC7"), _react.default.createElement(_routes.Link, {
        prefetch: true,
        route: "/about/chinh-sach-bao-mat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, _react.default.createElement("a", {
        href: "#",
        target: "_blank",
        title: "Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, "Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt")), _react.default.createElement(_routes.Link, {
        prefetch: true,
        route: "/about/dieu-khoan-su-dung",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react.default.createElement("a", {
        href: "#",
        target: "_blank",
        title: "\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, "\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng"))))))), _react.default.createElement("div", {
        className: "col-lg-4 column footer-menu pr-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react.default.createElement("div", {
        className: "widget",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react.default.createElement("p", {
        className: "footer-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, "KH\xC1M PH\xC1"), _react.default.createElement("div", {
        className: "link_widgets",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react.default.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react.default.createElement("div", {
        className: "col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react.default.createElement("a", {
        href: "#",
        title: "C\xE2u h\u1ECFi th\u01B0\u1EDDng g\u1EB7p",
        rel: "nofollow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, " C\xE2u h\u1ECFi th\u01B0\u1EDDng g\u1EB7p "), _react.default.createElement("a", {
        href: "#",
        target: "_blank",
        title: "H\u01B0\u1EDBng d\u1EABn thanh to\xE1n",
        rel: "nofollow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, " Blog "), _react.default.createElement("a", {
        href: "#",
        target: "_blank",
        title: "H\u01B0\u1EDBng d\u1EABn thanh to\xE1n",
        rel: "nofollow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, " Tin t\u1EE9c "), _react.default.createElement("a", {
        href: "#",
        target: "_blank",
        title: "H\u01B0\u1EDBng d\u1EABn thanh to\xE1n",
        rel: "nofollow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, " H\u1ECFi \u0111\xE1p "), _react.default.createElement("a", {
        href: "#",
        target: "_blank",
        title: "H\u01B0\u1EDBng d\u1EABn thanh to\xE1n",
        rel: "nofollow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, " Rao v\u1EB7t ")))))), _react.default.createElement("div", {
        className: "col-lg-4 column footer-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react.default.createElement("div", {
        className: "widget",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react.default.createElement("p", {
        className: "footer-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, "LI\xCAN H\u1EC6"), _react.default.createElement("div", {
        className: "d-block social-links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react.default.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react.default.createElement("div", {
        className: "col-lg-12 d-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react.default.createElement("a", {
        target: "_blank",
        rel: "nofollow",
        href: "#",
        className: "facebook d-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react.default.createElement("span", {
        className: "fa fa-facebook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }), "Facebook"), _react.default.createElement("a", {
        target: "_blank",
        rel: "nofollow",
        href: "#",
        className: "google d-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react.default.createElement("span", {
        className: "fa fa-google-plus",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }), "Google+"), _react.default.createElement("a", {
        target: "_blank",
        rel: "nofollow",
        href: "#",
        className: "website d-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react.default.createElement("span", {
        className: "fa fa-youtube ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }), "Youtube"), _react.default.createElement("a", {
        target: "_blank",
        rel: "nofollow",
        href: "#",
        className: "website d-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react.default.createElement("span", {
        className: "fa fa-envelope-o ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }), "Support@9houz.com"))))))))));
    }
  }]);

  return footer;
}(_react.default.Component);

exports.default = footer;

/***/ }),

/***/ "./components/image-detail.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("@babel/runtime/regenerator"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _axios = _interopRequireDefault(__webpack_require__("axios"));

var _helpers = __webpack_require__("./libraries/helpers.js");

var _jquery = _interopRequireDefault(__webpack_require__("jquery"));

var _router = _interopRequireDefault(__webpack_require__("next/router"));

var _routes = __webpack_require__("./routes.js");

__webpack_require__("isomorphic-fetch");

var _assert = __webpack_require__("assert");

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

var APIURL = "https://api.9houz.com/" + "api/" + 'image/';

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
                    detail: _this.props.detail,
                    listIdea: _this.props.images,
                    nextPageUrl: _this.props.nextPageUrl
                  });

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

                case 9:
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
                    _this.nextProject(_this.state.currentValue.id, _this.state.currentValue.slug);
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

                  if (!(startIndex == _this.state.listIdea.length - 1)) {
                    _context3.next = 7;
                    break;
                  }

                  _this.getFullImage(_this.state.nextPageUrl, 'next');

                  _context3.next = 13;
                  break;

                case 7:
                  currentIndex = startIndex + 1;
                  nextImage = _this.state.listIdea[currentIndex];
                  _context3.next = 11;
                  return _this.pushStateUrl(nextImage.id, nextImage.slug);

                case 11:
                  _context3.next = 13;
                  return _this.getValue(nextImage.id);

                case 13:
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

                  if (!(_this.props.popup == false)) {
                    _context4.next = 14;
                    break;
                  }

                  _this.pushStateProject(id, slug, nextId, nextSlug); // Router.push(`/project?photoId=${id}&id=${this.state.project.id}`,`/anh/${nextId}-${nextSlug}`)


                  _context4.next = 16;
                  break;

                case 14:
                  _context4.next = 16;
                  return _this.pushStateUrl(nextId, nextSlug);

                case 16:
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
                    _this.backProject(_this.state.currentValue.id, _this.state.currentValue.slug);
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
        _regenerator.default.mark(function _callee6(id, slug) {
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

                  if (!(_this.props.popup == false)) {
                    _context6.next = 14;
                    break;
                  }

                  _this.pushStateProject(id, slug, nextId, nextSlug); // Router.pushRoute(`/anh/${id}-${slug}`,`/anh/${nextId}-${nextSlug}`)


                  _context6.next = 16;
                  break;

                case 14:
                  _context6.next = 16;
                  return _this.pushStateUrl(nextId, nextSlug);

                case 16:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }));

        return function value(_x8, _x9) {
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
          var startIndex, currentIndex, backImage;
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

                  if (!(startIndex == 0 && _this.state.backPageUrl != null)) {
                    _context7.next = 7;
                    break;
                  }

                  _this.getFullImage(_this.state.backPageUrl, 'back');

                  _context7.next = 13;
                  break;

                case 7:
                  currentIndex = startIndex - 1;
                  backImage = _this.state.listIdea[currentIndex];
                  _context7.next = 11;
                  return _this.pushStateUrl(backImage.id, backImage.slug);

                case 11:
                  _context7.next = 13;
                  return _this.getValue(backImage.id);

                case 13:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7, this);
        }));

        return function value(_x10) {
          return _value7.apply(this, arguments);
        };
      }()
    });
    Object.defineProperty(_assertThisInitialized(_this), "getFullImage", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value8 = _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee8(url, func) {
          return _regenerator.default.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.t0 = func;
                  _context8.next = _context8.t0 === 'next' ? 3 : _context8.t0 === 'back' ? 6 : 8;
                  break;

                case 3:
                  _context8.next = 5;
                  return _axios.default.get(url).then(function (response) {
                    var data = response.data;

                    _this.setState({
                      listIdea: data.images.data,
                      nextPageUrl: data.images.next_page_url,
                      backPageUrl: data.images.prev_page_url
                    });

                    var currentIndex = 0;
                    var nextImage = _this.state.listIdea[currentIndex];

                    _this.pushStateUrl(nextImage.id, nextImage.slug);

                    _this.getValue(nextImage.id);
                  });

                case 5:
                  return _context8.abrupt("break", 8);

                case 6:
                  _axios.default.get(url).then(function (response) {
                    var data = response.data;

                    _this.setState({
                      listIdea: data.images.data,
                      nextPageUrl: data.images.next_page_url,
                      backPageUrl: data.images.prev_page_url
                    });

                    var currentIndex = _this.state.listIdea.length - 1;
                    var backImage = _this.state.listIdea[currentIndex];

                    _this.pushStateUrl(backImage.id, backImage.slug);

                    _this.getValue(backImage.id);
                  });

                  return _context8.abrupt("break", 8);

                case 8:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8, this);
        }));

        return function value(_x11, _x12) {
          return _value8.apply(this, arguments);
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
      listIdea: [],
      nextPageUrl: null,
      backPageUrl: null
    };
    return _this;
  }

  _createClass(Image, [{
    key: "getValue",
    value: function () {
      var _getValue = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee9(id) {
        var _this2 = this;

        var data;
        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return _axios.default.get(APIURL + id).then(function (res) {
                  data = res.data;

                  _this2.setState({
                    image: data.image,
                    project: data.project,
                    images: data.list_images,
                    provider: data.provider,
                    tag: data.listTag,
                    currentValue: data.image
                  });
                });

              case 2:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      return function getValue(_x13) {
        return _getValue.apply(this, arguments);
      };
    }()
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
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
          _router.default.push("".concat(this.props.currentPath, "?params=").concat(params, "&f=").concat(this.props.subParams, "&photoId=").concat(id, "&slug=").concat(slug), "/anh/".concat(id, "-").concat(slug));
        } else {
          _router.default.push("".concat(this.props.currentPath, "?params=").concat(params, "&photoId=").concat(id, "&slug=").concat(slug), "/anh/".concat(id, "-").concat(slug));
        }
      } else {
        _router.default.push("".concat(this.props.currentPath, "?photoId=").concat(id, "&slug=").concat(slug), "/anh/".concat(id, "-").concat(slug));
      }
    }
  }, {
    key: "pushStateProject",
    value: function pushStateProject(id, slug, nextId, nextSlug) {
      if (this.props.isImage == true && this.props.isImage) {
        _router.default.push("/image?id=".concat(id, "&slug=").concat(slug), "/anh/".concat(nextId, "-").concat(nextSlug));
      } else {
        if (this.props.ideaParams) {
          var params = this.props.ideaParams;

          if (this.props.subParams) {
            _router.default.push("".concat(this.props.currentPath, "?params=").concat(params, "&f=").concat(this.props.subParams, "&photoId=").concat(id, "&slug=").concat(slug), "/anh/".concat(nextId, "-").concat(nextSlug));
          } else {
            _router.default.push("".concat(this.props.currentPath, "?params=").concat(params, "&photoId=").concat(id, "&slug=").concat(slug), "/anh/".concat(nextId, "-").concat(nextSlug));
          }
        } else {
          _router.default.push("".concat(this.props.currentPath, "?photoId=").concat(id, "&id=").concat(this.state.project.id, "&slug=").concat(slug), "/anh/".concat(nextId, "-").concat(nextSlug));
        }
      }
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
          lineNumber: 257
        }
      }, _react.default.createElement("div", {
        id: "image-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        }
      }, _react.default.createElement("div", {
        className: "image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        }
      }, this.state.currentValue && _react.default.createElement("img", {
        className: "image-detail",
        src: this.state.currentValue.path_for_size,
        alt: this.state.currentValue.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        }
      })), _react.default.createElement("div", {
        className: "lb-navDiv",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        }
      }, _react.default.createElement("a", {
        className: "link next lbNavigation nav-arrow",
        onClick: function onClick(e) {
          return _this3.nextImage(e, id, slug);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        }
      }, _react.default.createElement("div", {
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        }
      }, _react.default.createElement("span", {
        className: "fa fa-angle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        }
      }))), _react.default.createElement("a", {
        className: "link back lbNavigation nav-arrow",
        onClick: function onClick(e) {
          return _this3.backImage(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        }
      }, _react.default.createElement("div", {
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        }
      }, _react.default.createElement("span", {
        className: "fa fa-angle-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        }
      })))), _react.default.createElement("div", {
        id: "lbActions",
        className: "d-none d-md-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        }
      }, _react.default.createElement("div", {
        id: "lbActionCenter",
        className: "offset-0 offset-md-3 col-12 col-md-6 text-center text-nowrap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        }
      }, _react.default.createElement("button", {
        className: "btn btn-primary med save text-white mr-3",
        title: "Save To Ideabook",
        compid: "addToIdeabook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        }
      }, _react.default.createElement("i", {
        className: "fa fa-plus pr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        }
      }), "L\u01B0u \u1EA3nh"), _react.default.createElement("button", {
        className: "btn bg-black-100 med email text-white",
        title: "send email",
        compid: "addToIdeabook",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        }
      }, _react.default.createElement("i", {
        className: "fa fa-envelope-o pr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        }
      }), "G\u1EEDi Email")))), _react.default.createElement(ImageInfo, {
        provider: this.state.provider,
        images: this.state.images,
        image: this.state.image,
        tag: this.state.tag,
        project: this.state.project,
        changeValue: function changeValue(data) {
          return _this3.setState({
            currentValue: data,
            detail: false
          });
        },
        currentValue: this.state.currentValue,
        detail: this.props.detail,
        pushStateProject: function pushStateProject(id, slug, nextId, nextSlug) {
          _this3.pushStateProject(id, slug, nextId, nextSlug);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
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
      this.props.pushStateProject(this.props.image.id, this.props.image.slug, value.id, value.slug);
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
          lineNumber: 337
        }
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        }
      }, _react.default.createElement("div", {
        className: "lbInfoTab position-relative d-none d-md-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        }
      }, _react.default.createElement("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        }
      }, _react.default.createElement("div", {
        className: "nav nav-tabs",
        id: "nav-tab",
        role: "tablist",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
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
          lineNumber: 342
        }
      }, _react.default.createElement("i", {
        className: "fa fa-home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
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
          lineNumber: 343
        }
      }, _react.default.createElement("i", {
        className: "fa fa-tag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
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
          lineNumber: 344
        }
      }, _react.default.createElement("i", {
        className: "fa fa-comment",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        }
      })))))), _react.default.createElement("div", {
        className: "content-mask",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        }
      }, _react.default.createElement("div", {
        className: "content-scroll",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        }
      }, _react.default.createElement("div", {
        className: "content-detail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        }
      }, _react.default.createElement("div", {
        className: "media",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        }
      }, provider.auth_avatar && _react.default.createElement("img", {
        src: provider.auth_avatar,
        className: "align-self-start mr-2 rounded-circle detail-user mt-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        }
      }), _react.default.createElement("div", {
        className: "media-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        }
      }, _react.default.createElement("div", {
        className: "media-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355
        }
      }, _react.default.createElement(_routes.Link, {
        prefetch: true,
        route: "/pro/".concat(provider.id, "-").concat(provider.slug),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        }
      }, _react.default.createElement("a", {
        className: "font-weight-bold font-14 text-black-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        }
      }, provider.name ? provider.name : 'Chưa có tên')), _react.default.createElement("div", {
        className: "star-rating font-14",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359
        }
      }, _react.default.createElement("span", {
        className: "text-black-100 font-14",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        }
      }, provider.avg_rate && (0, _helpers.rating)(provider.avg_rate), provider.total_rate ? "(" + provider.total_rate + " người đánh giá" + ")" : "(0 người đánh giá)")))))), _react.default.createElement("div", {
        className: "content-detail border-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        }
      }, _react.default.createElement("ol", {
        className: "breadcrumb bg-white pl-0 mb-0 pt-0 mt-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        }
      }, _react.default.createElement("li", {
        className: "breadcrumb-item",
        itemScope: true,
        itemType: "http://data-vocabulary.org/Breadcrumb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369
        }
      }, _react.default.createElement(_routes.Link, {
        prefetch: true,
        route: 'y-tuong',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        }
      }, _react.default.createElement("a", {
        itemProp: "url",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        }
      }, _react.default.createElement("span", {
        itemProp: "title",
        className: "font-13",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        }
      }, "T\u1EA5t c\u1EA3")))), tag.breadcrumbs && _react.default.createElement("li", {
        className: "breadcrumb-item",
        itemScope: true,
        itemType: "http://data-vocabulary.org/Breadcrumb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        }
      }, _react.default.createElement(_routes.Link, {
        prefetch: true,
        route: tag.breadcrumbs.uri,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        }
      }, _react.default.createElement("a", {
        itemProp: "url",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        }
      }, _react.default.createElement("span", {
        itemProp: "title",
        className: "font-13",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        }
      }, tag.breadcrumbs.name_tag))))), _react.default.createElement("h1", {
        className: "font-16 text-black-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376
        }
      }, currentValue && currentValue.name), _react.default.createElement("div", {
        className: "media-content",
        id: "readMore",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        }
      }, _react.default.createElement("div", {
        className: "readMoreWrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        }
      }, currentValue && _react.default.createElement("p", {
        id: "readMoreText",
        className: "font-14 normalText",
        dangerouslySetInnerHTML: {
          __html: currentValue.descriptions
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380
        }
      }), _react.default.createElement("div", {
        className: "readMoreGradient",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384
        }
      })), _react.default.createElement("button", {
        id: "readMoreBtn",
        className: "pl-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        }
      }), _react.default.createElement("span", {
        id: "readLessBtnText",
        style: {
          'display': 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387
        }
      }, "R\xFAt g\u1ECDn "), _react.default.createElement("span", {
        id: "readMoreBtnText",
        style: {
          'display': 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388
        }
      }, "Xem th\xEAm >"))), _react.default.createElement("div", {
        className: "content-detail border-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391
        }
      }, _react.default.createElement("h2", {
        className: "font-14",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        }
      }, "\u1EA2nh trong \"", _react.default.createElement(_routes.Link, {
        prefetch: true,
        route: "/du-an/".concat(project.id, "-").concat(project.slug),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        }
      }, _react.default.createElement("a", {
        className: "text-black-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        }
      }, project.name)), "\""), _react.default.createElement("ul", {
        className: "list-unstyled clearfix thumb-grid grid-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397
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
            lineNumber: 400
          }
        }, _react.default.createElement("a", {
          className: "link",
          href: "/anh/".concat(value.id, "-").concat(value.slug),
          onClick: function onClick(e) {
            return _this4.changeImage(e, value);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 401
          }
        }, _react.default.createElement("div", {
          className: "img-responsive-wrapper img-responsive-square progressive",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 402
          }
        }, value.small_path && _react.default.createElement("img", {
          src: value.small_path,
          className: "img-respontive",
          id: "image-" + value.id,
          width: "71",
          height: "71",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 403
          }
        }))));
      })), _react.default.createElement("div", {
        className: "pt-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 410
        }
      }, tag.breadcrumbs && _react.default.createElement(_routes.Link, {
        prefetch: true,
        route: tag.breadcrumbs.uri,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413
        }
      }, _react.default.createElement("a", {
        href: tag.breadcrumbs.uri,
        className: "mr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413
        }
      }, _react.default.createElement("span", {
        className: "text-center font-12 font-weight-normal badge badge-pill badge-white border border-primary py-2 px-3 mb-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 414
        }
      }, tag.breadcrumbs.name_tag))), tag.other && tag.other.map(function (value, index) {
        return value.is_seo == 1 ? _react.default.createElement(_routes.Link, {
          prefetch: true,
          route: value.uri,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 420
          }
        }, _react.default.createElement("a", {
          href: value.uri,
          className: "mr-2",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 420
          }
        }, _react.default.createElement("span", {
          className: "text-center font-12 font-weight-normal badge badge-pill badge-white border border-primary py-2 px-3 mb-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 421
          }
        }, value.name_tag))) : '';
      }))), _react.default.createElement("div", {
        className: "content-detail border-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430
        }
      }, _react.default.createElement("div", {
        className: "header row m-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431
        }
      }, _react.default.createElement("h2", {
        className: "font-14 text-black-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 432
        }
      }, "H\u1ECFi \u0111\xE1p v\u1EC1 h\xECnh \u1EA3nh"), _react.default.createElement("span", {
        className: "col-xs-12 col-md-12 px-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 433
        }
      }, _react.default.createElement("button", {
        id: "askQuestionButton",
        className: "btn border-primary btn-block text-primary font-13",
        compid: "lbAsk",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 433
        }
      }, "\u0110\u1EB7t c\xE2u h\u1ECFi c\u1EE7a b\u1EA1n")))))));
    }
  }]);

  return ImageInfo;
}(_react.default.PureComponent);

/***/ }),

/***/ "./components/image-modal.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(__webpack_require__("styled-jsx/style"));

var _regenerator = _interopRequireDefault(__webpack_require__("@babel/runtime/regenerator"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _imageDetail = _interopRequireDefault(__webpack_require__("./components/image-detail.js"));

var _layout = _interopRequireDefault(__webpack_require__("./components/layout.js"));

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/components/image-modal.js";

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
    key: "dismiss",
    value: function dismiss(e) {
      e.preventDefault();

      if (this._lbClose === e.target) {
        e.preventDefault();

        if (this.props.onDismiss) {
          this.props.onDismiss();
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _props = this.props,
          id = _props.id,
          slug = _props.slug;
      return _react.default.createElement("div", {
        id: "lightbox",
        className: "modal Ifade show",
        tabIndex: "-1",
        role: "dialog",
        "aria-labelledby": "myLargeModalLabel",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react.default.createElement("div", {
        id: "lbMainControls",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        className: "jsx-3842739500" + " " + "trackMe"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        className: "jsx-3842739500"
      }, _react.default.createElement("a", {
        ref: function ref(el) {
          return _this._lbClose = el;
        },
        href: "",
        onClick: function onClick(e) {
          return _this.dismiss(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        className: "jsx-3842739500" + " " + "lbCloseButton lbClose"
      })), _react.default.createElement(_style.default, {
        styleId: "3842739500",
        css: "#lightbox{overflow-x:scroll !important;}html{height:100%;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaW1hZ2UtbW9kYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkJ5QixBQUVnQyxBQUdqQixZQUNJLGdCQUFDLENBSmEiLCJmaWxlIjoiY29tcG9uZW50cy9pbWFnZS1tb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL215LW5leHQtYXBwIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEltYWdlRGV0YWlsIGZyb20gJy4vaW1hZ2UtZGV0YWlsJ1xuaW1wb3J0IExheW91dCBmcm9tICcuL2xheW91dCdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBxdWVyeSB9KSB7XG4gICAgICAgIHJldHVybiB7IGlkOiBxdWVyeS5pZCAsc2x1ZyA6IHF1ZXJ5LnNsdWd9XG4gICAgfVxuICAgIGRpc21pc3MgKGUpIHtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgaWYgKHRoaXMuX2xiQ2xvc2UgPT09IGUudGFyZ2V0KSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgICAgICAgIGlmICh0aGlzLnByb3BzLm9uRGlzbWlzcykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkRpc21pc3MoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIHJlbmRlcigpe1xuICAgICAgICBjb25zdCB7IGlkICwgc2x1ZyB9ID0gdGhpcy5wcm9wc1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGlkPVwibGlnaHRib3hcIiBjbGFzc05hbWU9XCJtb2RhbCBJZmFkZSBzaG93XCIgdGFiSW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsbGVkYnk9XCJteUxhcmdlTW9kYWxMYWJlbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJsYk1haW5Db250cm9sc1wiIGNsYXNzTmFtZT1cInRyYWNrTWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIHJlZj17ZWwgPT4gKHRoaXMuX2xiQ2xvc2UgPSBlbCl9IGNsYXNzTmFtZT1cImxiQ2xvc2VCdXR0b24gbGJDbG9zZVwiIGhyZWY9XCJcIiAgb25DbGljaz17KGUpID0+IHRoaXMuZGlzbWlzcyhlKX0+PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAgICAgI2xpZ2h0Ym94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXg6IHNjcm9sbCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8SW1hZ2VEZXRhaWwgey4uLnRoaXMucHJvcHN9IGlkPXt0aGlzLnByb3BzLmlkfSBzbHVnPXtzbHVnfT48L0ltYWdlRGV0YWlsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbn0iXX0= */\n/*@ sourceURL=components/image-modal.js */"
      })), _react.default.createElement(_imageDetail.default, _extends({}, this.props, {
        id: this.props.id,
        slug: slug,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_ref) {
        var query;
        return _regenerator.default.wrap(function _callee$(_context) {
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

  return _default;
}(_react.default.Component);

exports.default = _default;

/***/ }),

/***/ "./components/layout.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainBody = exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("@babel/runtime/regenerator"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _meta = _interopRequireDefault(__webpack_require__("./components/meta.js"));

var _router = _interopRequireDefault(__webpack_require__("next/router"));

var _head = _interopRequireDefault(__webpack_require__("next/head"));

var _routes = __webpack_require__("./routes.js");

var _reactstrap = __webpack_require__("reactstrap");

var _universalCookie = _interopRequireDefault(__webpack_require__("universal-cookie"));

var _package = _interopRequireDefault(__webpack_require__("./package.json"));

var _nav = _interopRequireDefault(__webpack_require__("./components/nav.js"));

var _footer = _interopRequireDefault(__webpack_require__("./components/footer.js"));

var _style = _interopRequireDefault(__webpack_require__("./styles/style.scss"));

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/components/layout.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  _createClass(_default, null, [{
    key: "propTypes",
    value: function propTypes() {
      return {
        session: _react.default.PropTypes.object.isRequired,
        providers: _react.default.PropTypes.object.isRequired,
        children: _react.default.PropTypes.object.isRequired,
        fluid: _react.default.PropTypes.boolean,
        navmenu: _react.default.PropTypes.boolean,
        signinBtn: _react.default.PropTypes.boolean
      };
    }
  }]);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));
    _this.state = {
      navOpen: false,
      modal: false,
      providers: null,
      domain: null
    };
    _this.toggleModal = _this.toggleModal.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        domain: window.location.origin
      });
    }
  }, {
    key: "toggleModal",
    value: function () {
      var _toggleModal = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(e) {
        var cookies;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (e) e.preventDefault(); // Save current URL so user is redirected back here after signing in

                if (this.state.modal !== true) {
                  cookies = new _universalCookie.default();
                  cookies.set('redirect_url', window.location.pathname, {
                    path: '/'
                  });
                }

                _context.t0 = this;
                _context.t1 = this.state.providers;

                if (_context.t1) {
                  _context.next = 8;
                  break;
                }

                _context.next = 7;
                return NextAuth.providers();

              case 7:
                _context.t1 = _context.sent;

              case 8:
                _context.t2 = _context.t1;
                _context.t3 = !this.state.modal;
                _context.t4 = {
                  providers: _context.t2,
                  modal: _context.t3
                };

                _context.t0.setState.call(_context.t0, _context.t4);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function toggleModal(_x) {
        return _toggleModal.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          title = _props.title,
          des = _props.des,
          canonical = _props.canonical,
          og_url = _props.og_url,
          url_images = _props.url_images,
          robots = _props.robots,
          css = _props.css,
          headerProjects = _props.headerProjects,
          headerCategories = _props.headerCategories,
          dataBase = _props.dataBase,
          backPageLink = _props.backPageLink,
          nextPageLink = _props.nextPageLink;
      return _react.default.createElement(_react.default.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react.default.createElement(_head.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react.default.createElement("meta", {
        charSet: "UTF-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), _react.default.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }), _react.default.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, this.props.title || '9houz'), des && _react.default.createElement("meta", {
        name: "description",
        itemProp: "description",
        content: des,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }), canonical && _react.default.createElement("link", {
        rel: "canonical",
        href: "https://9houz.com" + canonical,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }), title && _react.default.createElement("meta", {
        property: "og:title",
        content: title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }), des && _react.default.createElement("meta", {
        property: "og:description",
        content: des,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }), og_url && _react.default.createElement("meta", {
        property: "og:url",
        content: "https://9houz.com" + og_url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }), url_images && _react.default.createElement("meta", {
        property: "og:image",
        content: url_images,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }), robots && _react.default.createElement("meta", {
        name: "robots",
        content: robots,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }), nextPageLink && _react.default.createElement("link", {
        rel: "next",
        href: "https://9houz.com" + nextPageLink,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }), backPageLink && _react.default.createElement("link", {
        rel: "prev",
        href: "https://9houz.com" + backPageLink,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }), _react.default.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: css
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      })), _react.default.createElement("header", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react.default.createElement("nav", {
        className: "navbar navbar-light navbar-expand-md bg-faded container navbar-9houzz",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react.default.createElement("button", {
        className: "navbar-toggler px-0",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarCollapse",
        "aria-controls": "navbarCollapse",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react.default.createElement("span", {
        className: "fa fa-2x fa-bars text-primary font-22",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      })), _react.default.createElement("div", {
        className: "header-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react.default.createElement(_routes.Link, {
        route: "index",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, _react.default.createElement("a", {
        className: "navbar-brand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, _react.default.createElement("img", {
        src: "/images/logo9houz.png",
        alt: "Logo",
        title: "9houzz.com",
        width: "114",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      })))), _react.default.createElement("a", {
        href: "#",
        "data-toggle": "offcanvas",
        className: "d-md-none",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, _react.default.createElement("i", {
        className: "fa fa-user-circle-o font-22  py-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      })), _react.default.createElement("div", {
        className: "collapse navbar-collapse header-right my-2 nav-menu",
        id: "collapse-header-login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, _react.default.createElement("div", {
        className: "header-search d-none d-sm-none d-md-block mr-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, _react.default.createElement("div", {
        className: "input-radius py-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, _react.default.createElement("form", {
        className: "mt-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, _react.default.createElement("input", {
        type: "",
        className: "badge-pill form-control border-0 font-14 px-3",
        name: "",
        placeholder: "\xDD t\u01B0\u1EDFng b\u1EA1n mu\u1ED1n t\xECm ki\u1EBFm...",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }), _react.default.createElement("button", {
        className: "fa fa-search icon-search bg-white border-0",
        "data-toggle": "offcanvas",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }))))))), _react.default.createElement(_nav.default, {
        headerProjects: headerProjects,
        headerCategories: headerCategories,
        dataBase: dataBase,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      })), _react.default.createElement(_meta.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }), _react.default.createElement("div", {
        className: "StoreNavigation-overlay",
        role: "button",
        tabIndex: "0",
        "aria-label": "Close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }), _react.default.createElement(MainBody, {
        navmenu: this.props.navmenu,
        fluid: this.props.fluid,
        container: this.props.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, this.props.children), _react.default.createElement(_footer.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }), _react.default.createElement("script", {
        src: "/mystatic/jquery-3.2.1.min.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }), _react.default.createElement("script", {
        src: "/mystatic/popper.min.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }), _react.default.createElement("script", {
        src: "/mystatic/bootstrap.min.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }));
    }
  }]);

  return _default;
}(_react.default.Component);

exports.default = _default;

var MainBody =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(MainBody, _React$Component2);

  function MainBody() {
    _classCallCheck(this, MainBody);

    return _possibleConstructorReturn(this, (MainBody.__proto__ || Object.getPrototypeOf(MainBody)).apply(this, arguments));
  }

  _createClass(MainBody, [{
    key: "render",
    value: function render() {
      if (this.props.container === false) {
        return _react.default.createElement(_react.default.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          }
        }, this.props.children);
      } else if (this.props.navmenu === false) {
        return _react.default.createElement(_reactstrap.Container, {
          fluid: this.props.fluid,
          style: {
            marginTop: '1em'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          }
        }, this.props.children);
      } else {
        return _react.default.createElement(_reactstrap.Container, {
          fluid: this.props.fluid,
          style: {
            marginTop: '1em'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          }
        }, this.props.children);
      }
    }
  }]);

  return MainBody;
}(_react.default.Component); // export class UserMenu extends React.Component {
//   constructor(props) {
//     super(props)
//     this.handleSignoutSubmit = this.handleSignoutSubmit.bind(this)
//   }
//    async handleSignoutSubmit(event) {
//      event.preventDefault()
//      // Save current URL so user is redirected back here after signing out
//      const cookies = new Cookies()
//      cookies.set('redirect_url', window.location.pathname, { path: '/' })
//      await NextAuth.signout()
//      Router.push('/')
//    }
//   render() {
//     if (this.props.session && this.props.session.user) {
//       // If signed in display user dropdown menu
//       const session = this.props.session
//       return (
//         <Nav className="ml-auto" navbar>
//           {/*<!-- Uses .nojs-dropdown CSS to for a dropdown that works without client side JavaScript ->*/}
//           <div tabIndex="2" className="dropdown nojs-dropdown">
//             <div className="nav-item">
//               <span className="dropdown-toggle nav-link d-none d-md-block">
//                 <span className="icon ion-md-contact" style={{fontSize: '2em', position: 'absolute', top: -5, left: -25}}></span>
//               </span>
//               <span className="dropdown-toggle nav-link d-block d-md-none">
//                 <span className="icon ion-md-contact mr-2"></span>
//                 {session.user.name || session.user.email}
//               </span>
//             </div>
//             <div className="dropdown-menu">
//               <Link prefetch href="/account">
//                 <a href="/account" className="dropdown-item"><span className="icon ion-md-person mr-1"></span> Your Account</a>
//               </Link>
//               <AdminMenuItem {...this.props}/>
//               <div className="dropdown-divider d-none d-md-block"/>
//               <div className="dropdown-item p-0">
//                 <Form id="signout" method="post" action="/auth/signout" onSubmit={this.handleSignoutSubmit}>
//                   <input name="_csrf" type="hidden" value={this.props.session.csrfToken}/>
//                   <Button type="submit" block className="pl-4 rounded-0 text-left dropdown-item"><span className="icon ion-md-log-out mr-1"></span> Sign out</Button>
//                 </Form>
//               </div>
//             </div>
//           </div>
//         </Nav>
//       )
//      } if (this.props.signinBtn === false) {
//        // If not signed in, don't display sign in button if disabled
//       return null
//     } else {
//       // If not signed in, display sign in button
//       return (
//         <Nav className="ml-auto" navbar>
//           <NavItem>
//             {/**
//               * @TODO Add support for passing current URL path as redirect URL
//               * so that users without JavaScript are also redirected to the page
//               * they were on before they signed in.
//               **/}
//             <a href="/auth?redirect=/" className="btn btn-outline-primary" onClick={this.props.toggleModal}><span className="icon ion-md-log-in mr-1"></span> Sign up / Sign in</a>
//           </NavItem>
//         </Nav>
//       )
//     }
//   }
// }
// export class AdminMenuItem extends React.Component {
//   render() {
//     if (this.props.session.user && this.props.session.user.admin === true) {
//       return (
//         <React.Fragment>
//           <Link prefetch href="/admin">
//             <a href="/admin" className="dropdown-item"><span className="icon ion-md-settings mr-1"></span> Admin</a>
//           </Link>
//         </React.Fragment>
//       )
//     } else {
//       return(<div/>)
//     }
//   }
// }
// export class SigninModal extends React.Component {
//   render() {
//     if (this.props.providers === null) return null
//     return (
//       <Modal isOpen={this.props.modal} toggle={this.props.toggleModal} style={{maxWidth: 700}}>
//         <ModalHeader>Sign up / Sign in</ModalHeader>
//         <ModalBody style={{padding: '1em 2em'}}>
//           <Signin session={this.props.session} providers={this.props.providers}/>
//         </ModalBody>
//       </Modal>
//     )
//   }
// }


exports.MainBody = MainBody;

/***/ }),

/***/ "./components/meta.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(__webpack_require__("styled-jsx/style"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _head = _interopRequireDefault(__webpack_require__("next/head"));

var _nprogress = _interopRequireDefault(__webpack_require__("nprogress"));

var _router = _interopRequireDefault(__webpack_require__("next/router"));

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/components/meta.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_router.default.onRouteChangeStart = function () {
  return _nprogress.default.start();
};

_router.default.onRouteChangeComplete = function () {
  return _nprogress.default.done();
};

_router.default.onRouteChangeError = function () {
  return _nprogress.default.done();
};

var _default = function _default() {
  return _react.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: "jsx-2927448288" + " " + "meta"
  }, _react.default.createElement(_style.default, {
    styleId: "2927448288",
    css: "#nprogress{pointer-events:none;}#nprogress .bar{background:#b953a4;position:fixed;z-index:1031;top:0;left:0;width:100%;height:4px;}#nprogress .peg{display:block;position:absolute;right:0px;width:500px;height:100%;opacity:1.0;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWV0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVdUIsQUFHdUIsQUFHRCxBQVNMLGNBQ0ksS0FUSCxDQUpNLFlBY1gsRUFURyxRQVVELEtBVE4sTUFDQyxDQVNLLE1BUkQsTUFTQyxLQVJELE9BU2lDLElBVGhDLHlJQVNpQyIsImZpbGUiOiJjb21wb25lbnRzL21ldGEuanMiLCJzb3VyY2VSb290IjoiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9teS1uZXh0LWFwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuUm91dGVyLm9uUm91dGVDaGFuZ2VTdGFydCA9ICgpID0+IE5Qcm9ncmVzcy5zdGFydCgpXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZUNvbXBsZXRlID0gKCkgPT4gTlByb2dyZXNzLmRvbmUoKVxuUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9ICgpID0+IE5Qcm9ncmVzcy5kb25lKClcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGFcIj5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgLyogbG9hZGluZyBwcm9ncmVzcyBiYXIgc3R5bGVzICovXG4gICAgICAjbnByb2dyZXNzIHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICNucHJvZ3Jlc3MgLmJhciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNiOTUzYTQ7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgei1pbmRleDogMTAzMTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgICB9XG5cbiAgICAgICNucHJvZ3Jlc3MgLnBlZyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIHdpZHRoOiA1MDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvcGFjaXR5OiAxLjA7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDNkZWcpIHRyYW5zbGF0ZSgwcHgsIC00cHgpO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pXG4iXX0= */\n/*@ sourceURL=components/meta.js */"
  }));
};

exports.default = _default;

/***/ }),

/***/ "./components/nav.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("react"));

var _routes = __webpack_require__("./routes.js");

var _helpers = __webpack_require__("./libraries/helpers.js");

var _jquery = _interopRequireDefault(__webpack_require__("jquery"));

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/components/nav.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var nav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(nav, _React$Component);

  function nav(props) {
    var _this;

    _classCallCheck(this, nav);

    _this = _possibleConstructorReturn(this, (nav.__proto__ || Object.getPrototypeOf(nav)).call(this, props));
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _createClass(nav, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _jquery.default)(document).ready(function () {
        (0, _jquery.default)('.nav-9houzz .nav-item').hover(function () {
          (0, _jquery.default)('.StoreNavigation-overlay').addClass('is-open');
        }, function () {
          (0, _jquery.default)('.StoreNavigation-overlay').removeClass('is-open');
        });
        (0, _jquery.default)('[data-toggle="collapse"]').on('click', function () {
          (0, _jquery.default)(this).toggleClass("rotate-chevron");
        });
      });
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          headerProjects = _props.headerProjects,
          headerCategories = _props.headerCategories,
          dataBase = _props.dataBase;
      return _react.default.createElement("div", {
        className: "nav-9houzz container-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react.default.createElement("nav", {
        className: "navbar navbar-light navbar-expand-md bg-faded container header-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react.default.createElement("div", {
        className: "collapse navbar-collapse",
        id: "navbarCollapse",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react.default.createElement("ul", {
        className: "navbar-nav text-md-center d-flex w-100 position-relative list-unstyled  justify-md-content-start justify-content-start",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react.default.createElement("li", {
        className: "offset-0 offset-md-1 nav-item py-1 px-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react.default.createElement("div", {
        className: "d-flex w-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react.default.createElement("i", {
        className: "fa fa-lightbulb-o my-auto",
        "aria-hidden": "true",
        style: {
          "paddingBottom": "1px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), _react.default.createElement(_routes.Link, {
        prefetch: true,
        route: "/y-tuong",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react.default.createElement("a", {
        className: "nav-link mr-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, "\xDD T\u01AF\u1EDENG")), _react.default.createElement("a", {
        className: "navbar-toggler menu-toggle",
        "data-toggle": "collapse",
        "data-target": "#nav-product-2",
        "aria-controls": "collapse-login",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react.default.createElement("span", {
        className: "fa fa-chevron-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }))), _react.default.createElement("div", {
        className: "collapse navbar-collapse",
        id: "nav-product-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react.default.createElement("ul", {
        className: "nav-child container list-unstyled",
        role: "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, dataBase && dataBase.header_idea.map(function (value, index) {
        return _react.default.createElement("li", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        }, _react.default.createElement(_routes.Link, {
          prefetch: true,
          route: value.uri,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        }, _react.default.createElement("a", {
          ids: value.original,
          href: value.uri,
          className: "font-15 font-weight-bold text-uppercase nav-idea ".concat(value.class),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        }, value.name_tag)));
      })))), _react.default.createElement("li", {
        className: "nav-item py-1 px-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react.default.createElement("div", {
        className: "d-flex w-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react.default.createElement("i", {
        className: "fa fa-briefcase my-auto",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }), _react.default.createElement("a", {
        className: "nav-link mr-auto",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, "D\u1EF0 \xC1N"), _react.default.createElement("a", {
        className: "navbar-toggler menu-toggle",
        "data-toggle": "collapse",
        "data-target": "#nav-product",
        "aria-controls": "collapse-login",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react.default.createElement("span", {
        className: "fa fa-chevron-right ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }))), _react.default.createElement("div", {
        className: "collapse navbar-collapse nav-prof",
        id: "nav-product",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react.default.createElement("div", {
        className: "nav-child container",
        role: "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react.default.createElement("div", {
        className: "row py-1 px-2 nav-service d-flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react.default.createElement("div", {
        className: "col-md-12 text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react.default.createElement("ul", {
        className: "list-unstyled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, headerProjects && (0, _helpers.mapObject)(headerProjects, function (index, value) {
        return _react.default.createElement("li", {
          className: "mt-1",
          key: value.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        }, _react.default.createElement("a", {
          href: "#",
          className: "text-dark font-14",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        }, value.name.vi));
      }))))))), _react.default.createElement("li", {
        className: "nav-item py-1 px-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react.default.createElement("div", {
        className: "d-flex w-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react.default.createElement("i", {
        className: "fa fa-graduation-cap my-auto",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }), _react.default.createElement("a", {
        className: "nav-link mr-auto",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, "PRO"), _react.default.createElement("a", {
        className: "navbar-toggler menu-toggle",
        "data-toggle": "collapse",
        "data-target": "#nav-product-3",
        "aria-controls": "collapse-login",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react.default.createElement("span", {
        className: "fa fa-chevron-right ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }))), _react.default.createElement("div", {
        className: "collapse navbar-collapse nav-prof",
        id: "nav-product-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, _react.default.createElement("div", {
        className: "nav-child container",
        role: "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react.default.createElement("div", {
        className: "row py-1 px-2 nav-service d-flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react.default.createElement("div", {
        className: "col-md-12 text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, _react.default.createElement("ul", {
        className: "list-unstyled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, headerCategories && (0, _helpers.mapObject)(headerCategories, function (index, value) {
        return _react.default.createElement("li", {
          className: "mt-1",
          key: value.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          }
        }, _react.default.createElement("a", {
          href: "#",
          className: "text-dark font-14",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          }
        }, value.name));
      }))))))), _react.default.createElement("li", {
        className: "nav-item py-1 px-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, _react.default.createElement("div", {
        className: "d-flex w-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, _react.default.createElement("i", {
        className: "fa fa-pencil-square-o my-auto",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }), _react.default.createElement("a", {
        className: "nav-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, "BLOG"))), _react.default.createElement("li", {
        className: "nav-item py-1 px-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, _react.default.createElement("div", {
        className: "d-flex w-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, _react.default.createElement("i", {
        className: "fa fa-rss my-auto",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }), _react.default.createElement("a", {
        className: "nav-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, "TIN T\u1EE8C"))), _react.default.createElement("li", {
        className: "nav-item py-1 px-1 d-block d-md-none",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, _react.default.createElement("div", {
        className: "d-flex w-100",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, _react.default.createElement("i", {
        className: "fa fa-info-circle my-auto",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }), _react.default.createElement("a", {
        className: "nav-link mr-auto",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, "V\u1EC0 CH\xDANG T\xD4I"), _react.default.createElement("a", {
        className: "navbar-toggler menu-toggle",
        "data-toggle": "collapse",
        "data-target": "#nav-product-4",
        "aria-controls": "collapse-login",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, _react.default.createElement("span", {
        className: "fa fa-chevron-right ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }))), _react.default.createElement("div", {
        className: "collapse navbar-collapse nav-prof",
        id: "nav-product-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, _react.default.createElement("div", {
        className: "nav-child container",
        role: "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, _react.default.createElement("div", {
        className: "row py-1 px-2 nav-service d-flex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, _react.default.createElement("div", {
        className: "col-md-12 text-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, _react.default.createElement("ul", {
        className: "list-unstyled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, _react.default.createElement(_routes.Link, {
        prefetch: true,
        route: "/about/gioi-thieu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, _react.default.createElement("a", {
        target: "_blank",
        title: "Gi\u1EDBi thi\u1EC7u",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, "Gi\u1EDBi thi\u1EC7u"))), _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, _react.default.createElement("a", {
        target: "_blank",
        title: "Li\xEAn h\u1EC7",
        rel: "nofollow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, "Li\xEAn h\u1EC7")), _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, _react.default.createElement(_routes.Link, {
        prefetch: true,
        route: "/about/chinh-sach-bao-mat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, _react.default.createElement("a", {
        href: "#",
        target: "_blank",
        title: "Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, "Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt"))), _react.default.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, _react.default.createElement(_routes.Link, {
        prefetch: true,
        route: "/about/dieu-khoan-su-dung",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, _react.default.createElement("a", {
        href: "#",
        target: "_blank",
        title: "\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, "\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng")))))))))))));
    }
  }]);

  return nav;
}(_react.default.Component);

exports.default = nav;

/***/ }),

/***/ "./components/sideBar.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("react"));

var _helpers = __webpack_require__("./libraries/helpers.js");

var _routes = __webpack_require__("./routes.js");

var _classnames = _interopRequireDefault(__webpack_require__("classnames"));

var _jquery = _interopRequireDefault(__webpack_require__("jquery"));

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/components/sideBar.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sidebar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Sidebar, _React$Component);

  function Sidebar(props) {
    _classCallCheck(this, Sidebar);

    return _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call(this, props));
  }

  _createClass(Sidebar, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          filter = _props.filter,
          color = _props.color,
          page = _props.page;
      return _react.default.createElement("div", {
        className: "sidebar-service row bg-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react.default.createElement("div", {
        className: "d-md-block px-2 w-100 sidebar-service-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, this.props.test && _react.default.createElement("div", {
        "class": "child-sidebar-service pb-1 col-12 offset-md-0 col-md-12 px-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react.default.createElement("div", {
        "class": "mt-2 widget p-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react.default.createElement("h3", {
        "class": "font-15 mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, "Locale ", _react.default.createElement("span", {
        "class": "fa fa-chevron-right d-block d-md-none",
        "data-toggle": "collapse",
        "data-target": "#demoTest",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      })), _react.default.createElement("ul", {
        "class": "list-unstyled mb-0 collapse d-md-block",
        id: "demoTest",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react.default.createElement("li", {
        "class": "py-1 radio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react.default.createElement("a", {
        href: "",
        "class": "font-13 font-weight-light text-gray",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react.default.createElement("label", {
        "class": "px-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, "H\xE0 N\u1ED9i", _react.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, "10")))), _react.default.createElement("li", {
        "class": "py-1 radio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react.default.createElement("a", {
        href: "",
        "class": "font-13 font-weight-light text-gray",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react.default.createElement("label", {
        "class": "px-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, "TPHCM", _react.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, "20")))), _react.default.createElement("li", {
        "class": "py-1 radio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react.default.createElement("a", {
        href: "",
        "class": "font-13 font-weight-light text-gray",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, _react.default.createElement("label", {
        "class": "px-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, "\u0110\xE0 N\u1EAFng", _react.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, "11")))), _react.default.createElement("li", {
        "class": "py-1 radio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react.default.createElement("a", {
        href: "",
        "class": "font-13 font-weight-light text-gray",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react.default.createElement("label", {
        "class": "px-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, "Ninh B\xECnh", _react.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, "12")))), _react.default.createElement("li", {
        "class": "py-1 radio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react.default.createElement("a", {
        href: "",
        "class": "font-13 font-weight-light text-gray",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react.default.createElement("label", {
        "class": "px-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, "H\xE0 T\u0129nh", _react.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, "21")))), _react.default.createElement("li", {
        "class": "py-1 radio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react.default.createElement("a", {
        href: "",
        "class": "font-13 font-weight-light text-gray",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react.default.createElement("label", {
        "class": "px-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, "H\xE0 Nam", _react.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, "21")))), _react.default.createElement("li", {
        "class": "py-1 radio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react.default.createElement("a", {
        href: "",
        "class": "font-13 font-weight-light text-gray",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react.default.createElement("label", {
        "class": "px-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, "B\u1EAFc Ninh", _react.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, "23")))), _react.default.createElement("li", {
        "class": "py-1 radio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react.default.createElement("a", {
        href: "",
        "class": "font-13 font-weight-light text-gray",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, " ", _react.default.createElement("label", {
        "class": "px-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, "Qu\xE3ng Ng\xE3i", _react.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, "44")))), _react.default.createElement("li", {
        "class": "py-1 radio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react.default.createElement("a", {
        href: "",
        "class": "font-13 font-weight-light text-gray",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, " ", _react.default.createElement("label", {
        "class": "px-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, "Nam \u0110\u1ECBnh", _react.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, "12")))), _react.default.createElement("li", {
        "class": "py-1 radio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react.default.createElement("a", {
        href: "",
        "class": "font-13 font-weight-light text-gray",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react.default.createElement("label", {
        "class": "px-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, "Th\xE1i B\xECnh", _react.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, "12")))), _react.default.createElement("span", {
        "class": "more loadmore d-none d-md-block",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, "Xem th\xEAm ", _react.default.createElement("i", {
        "class": "la la-arrow-circle-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }))))), filter && filter.map(function (value, index) {
        return value.data.length != 0 && _react.default.createElement("div", {
          className: "child-sidebar-service pb-1 col-12 offset-md-0 col-md-12 px-0",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }, _react.default.createElement("div", {
          className: "mt-2 widget p-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        }, _react.default.createElement("h3", {
          className: "font-15 mb-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        }, value.textName, _react.default.createElement("span", {
          className: "fa fa-chevron-right d-block d-md-none",
          "data-toggle": "collapse",
          "data-target": "#demo" + index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        })), _react.default.createElement("ul", {
          className: "list-unstyled mb-0 collapse d-md-block",
          id: "demo" + index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          }
        }, value.data && (0, _helpers.mapObject)(value.data, function (index, value) {
          return _react.default.createElement("li", {
            className: "py-1 radio",
            key: index,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            }
          }, _react.default.createElement(_routes.Link, {
            prefetch: true,
            route: value.uri,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            }
          }, _react.default.createElement("a", {
            className: "font-13 font-weight-light text-gray",
            rel: value.is_seo == 0 ? "nofollow" : "dofollow",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 69
            }
          }, _react.default.createElement("label", {
            className: (0, _classnames.default)('pr-3', {
              active: page.currentsId.includes(value.original)
            }),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            }
          }, value.name_tag, _react.default.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 71
            }
          }, value.total_doc)))));
        }), _react.default.createElement("span", {
          className: "more loadmore d-none d-md-block",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          }
        }, "Xem th\xEAm ", _react.default.createElement("i", {
          className: "la la-arrow-circle-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          }
        })))));
      }), _react.default.createElement("div", {
        className: "child-sidebar-service pb-1 col-12 offset-md-0 col-md-12 px-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, color && _react.default.createElement("div", {
        className: "mt-2 widget p-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react.default.createElement("h3", {
        className: "font-15",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, "M\xC0U S\u1EAEC"), _react.default.createElement("span", {
        className: "expand-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }), _react.default.createElement("div", {
        className: "service-color mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, (0, _helpers.mapObject)(color, function (index, value) {
        return _react.default.createElement("a", {
          href: value.uri,
          className: "text-dark border border-gray",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          }
        }, _react.default.createElement("span", {
          className: "float-left " + value.class,
          "data-toggle": "tooltip",
          title: value.name_tag,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          }
        }));
      }))))));
    }
  }]);

  return Sidebar;
}(_react.default.Component);

exports.default = Sidebar;

/***/ }),

/***/ "./libraries/helpers.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.activePath = activePath;
exports.ucfirst = ucfirst;
exports.mapObject = exports.rating = void 0;

var _react = _interopRequireDefault(__webpack_require__("react"));

var _pathToRegexp = _interopRequireDefault(__webpack_require__("path-to-regexp"));

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/libraries/helpers.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function activePath(currentPath, path, options) {
  var regexPath = (0, _pathToRegexp.default)(path, options);
  var result = regexPath.exec(currentPath);
  return result;
}

var rating = function rating(avg_rate) {
  var star = [];

  for (var $i = 1; $i <= 5; $i++) {
    if ($i <= Math.floor(avg_rate)) {
      star.push(_react.default.createElement("span", {
        className: "fa fa-star",
        key: $i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }));
    } else if ($i == Math.ceil(avg_rate)) {
      var divStyle = {
        width: (avg_rate - Math.floor(avg_rate)) * 100 + "% !important",
        height: "15.9px",
        top: '-2.2px',
        left: '-0.8px'
      };
      star.push(_react.default.createElement("span", {
        className: "fa fa-star disable position-relative",
        key: $i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react.default.createElement("span", {
        className: "position-absolute provider-star",
        style: divStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      })));
    } else {
      star.push(_react.default.createElement("span", {
        className: "fa fa-star disable",
        key: $i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }));
    }
  }

  return star;
};

exports.rating = rating;

var mapObject = function mapObject(object, callback) {
  return Object.keys(object).map(function (key) {
    return callback(key, object[key]);
  });
};

exports.mapObject = mapObject;

function ucfirst(str) {
  str += '';
  var f = str.charAt(0).toUpperCase();
  return f + str.substr(1);
}

/***/ }),

/***/ "./package.json":
/***/ (function(module, exports) {

module.exports = {"name":"create-next-example-app","scripts":{"dev":"node server.js","build":"next build","start":"NODE_ENV=production node server.js"},"dependencies":{"@zeit/next-css":"^0.2.0","@zeit/next-sass":"^0.2.0","@zeit/next-typescript":"^1.1.0","axios":"^0.18.0","babel-plugin-inline-import":"^3.0.0","babel-plugin-module-resolver":"^3.1.1","bootstrap":"^4.1.1","classnames":"^2.2.6","css-loader":"^0.28.11","dotenv":"^6.0.0","es6-promise":"^4.2.4","express":"^4.16.3","font-awesome":"^4.7.0","ionicons":"^4.2.4","isomorphic-fetch":"^2.2.1","jquery":"^3.3.1","lru-cache":"^4.1.3","merge-files-webpack-plugin":"^1.1.2","next":"^6.1.1","next-compose":"0.0.2","next-routes":"^1.4.2","nprogress":"^0.2.0","popper.js":"^1.14.3","postcss-loader":"^2.1.6","prop-types":"^15.6.2","purify-css":"^1.2.5","purifycss-webpack":"^0.7.0","raw-loader":"^0.5.1","react":"^16.4.1","react-breadcrumbs-dynamic":"^1.1.1","react-document-meta":"^3.0.0-beta.2","react-dom":"^16.4.1","react-helmet":"^5.2.0","react-infinite":"^0.13.0","react-infinite-scroller":"^1.2.0","react-js-pagination":"^3.0.2","react-masonry-component":"^6.2.1","react-modal":"^3.5.1","react-responsive-carousel":"^3.1.41","react-router-dom":"^4.3.1","react-slick":"^0.23.1","react-through":"^1.1.1","reactstrap":"^6.3.0","serve-favicon":"^2.5.0","slick-carousel":"^1.8.1","style-loader":"^0.21.0","styled-jsx":"^2.2.7","styled-jsx-css-loader":"^0.3.0","styled-jsx-plugin-sass":"^0.2.4","tunnel-agent":"^0.6.0","universal-cookie":"^2.2.0","webpack":"^3.10.0"},"devDependencies":{"@babel/core":"^7.0.0-beta.53","create-next":"^0.1.4","node-sass":"^4.9.2","sass-loader":"^7.0.3"}}

/***/ }),

/***/ "./pages/idea.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("@babel/runtime/regenerator"));

var _react = _interopRequireDefault(__webpack_require__("react"));

var _IdeaComponent = _interopRequireDefault(__webpack_require__("./components/IdeaComponent.js"));

__webpack_require__("isomorphic-fetch");

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/pages/idea.js";

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
                _context.next = 3;
                return fetch(APIURL + "y-tuong");

              case 3:
                res = _context.sent;
                _context.next = 6;
                return res.json();

              case 6:
                data = _context.sent;
                return _context.abrupt("return", {
                  h1: data.h1,
                  filter_default: data.filter_default,
                  colors: data.colors,
                  images: data.images.data,
                  page: data.page,
                  nextUrl: data.images.next_page_url,
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

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));
    _this.state = {
      nextUrl: _this.props.nextUrl,
      images: _this.props.images
    };
    return _this;
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var url = this.props.url;
      return _react.default.createElement(_IdeaComponent.default, _extends({}, this.props, {
        photoId: this.props.url.query && this.props.url.query.photoId,
        asPath: url.asPath,
        path: url.pathname,
        nextUrl: this.state.nextUrl,
        images: this.state.images,
        detail: true,
        changeState: function changeState(images, nextPage) {
          _this2.setState({
            images: images,
            nextUrl: nextPage
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }));
    }
  }]);

  return _default;
}(_react.default.Component);

exports.default = _default;

/***/ }),

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var routes = __webpack_require__("next-routes"); // Name   Page      Pattern


module.exports = routes() // ----   ----      -----
.add('index', '/', 'index') // about  about     /about
.add('news', '/news').add('image', '/anh/:id-:slug', 'image/index').add('y-tuong', '/y-tuong', 'idea') // y-tuong   idea   /y-tuong
.add('idea.detail', '/y-tuong/:params', 'idea-filter').add('pro.detail', '/pro/:id-:slug', 'pro/index').add('pro.project', '/pro/:id-:slug/d%E1%BB%B1-%C3%A1n', 'pro/project').add('pro.review', '/pro/:id-:slug/nh%E1%BA%ADn-x%C3%A9t', 'pro/review').add('project.detail', '/du-an/:id-:slug', 'project/detail').add('static', '/about/:slug', 'static-page').add('list-project', '/danh-sach-du-an', 'project/list-project').add('list-project.detail', '/danh-sach-du-an/:slug', 'project/list-project-filter').add('list-provider', '/danh-sach-pro', 'pro/provider-list');

/***/ }),

/***/ "./styles/fscreen_idea.css":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = "*,:after,:before{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-ms-overflow-style:scrollbar}@-ms-viewport{width:device-width}header,nav{display:block}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:1rem;font-weight:400;line-height:1.5;color:#333;text-align:left;background-color:#fff}h1,h2,h3{margin-top:0;margin-bottom:.5rem}p{margin-top:0;margin-bottom:1rem}ul{margin-bottom:1rem}ul{margin-top:0}ul ul{margin-bottom:0}a{color:#b953a4;text-decoration:none;background-color:transparent;-webkit-text-decoration-skip:objects}a:not([href]):not([tabindex]){color:inherit;text-decoration:none}img{border-style:none}label{display:inline-block;margin-bottom:.5rem}button{border-radius:0}button,input{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button{text-transform:none}button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}h1,h2,h3{margin-bottom:.5rem;font-family:inherit;font-weight:500;line-height:1.2;color:inherit}h1{font-size:2.5rem}h2{font-size:2rem}h3{font-size:1.75rem}.list-unstyled{padding-left:0;list-style:none}.container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:576px){.container{max-width:540px}}@media (min-width:768px){.container{max-width:720px}}@media (min-width:992px){.container{max-width:960px}}@media (min-width:1200px){.container{max-width:1140px}}.container-fluid{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.row{display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.col-12,.col-lg-3,.col-lg-9,.col-md-3,.col-md-9,.col-md-12{position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px}.col-12{flex:0 0 100%;max-width:100%}@media (min-width:768px){.col-md-3{flex:0 0 25%;max-width:25%}.col-md-9{flex:0 0 75%;max-width:75%}.col-md-12{flex:0 0 100%;max-width:100%}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.33333%}}@media (min-width:992px){.col-lg-3{flex:0 0 25%;max-width:25%}.col-lg-9{flex:0 0 75%;max-width:75%}}.form-control{display:block;width:100%;padding:.375rem .75rem;font-size:1rem;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem}.form-control::-ms-expand{background-color:transparent;border:0}.collapse:not(.show){display:none}.nav-link{display:block;padding:.5rem 1rem}.navbar{position:relative;padding:.5rem 1rem}.navbar{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between}.navbar-brand{display:inline-block;padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;line-height:inherit;white-space:nowrap}.navbar-nav{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-collapse{flex-basis:100%;flex-grow:1;align-items:center}.navbar-toggler{padding:.25rem .75rem;font-size:1.25rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:.25rem}@media (min-width:768px){.navbar-expand-md{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-md .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}}.navbar-light .navbar-brand{color:hsla(0,0%,7%,.9)}.navbar-light .navbar-nav .nav-link{color:hsla(0,0%,7%,.5)}.navbar-light .navbar-toggler{color:hsla(0,0%,7%,.5);border-color:hsla(0,0%,7%,.1)}.badge{display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem}.badge-pill{padding-right:.6em;padding-left:.6em;border-radius:10rem}.badge-light{color:#212529;background-color:#f3f3f3}.close{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#111;text-shadow:0 1px 0 #fff;opacity:.5}.card{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid hsla(0,0%,7%,.125);border-radius:.25rem}.card-body{flex:1 1 auto;padding:1.25rem}.card-img-top{width:100%;border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.bg-primary{background-color:#b953a4!important}.bg-white{background-color:#fff!important}.border{border:1px solid #dee2e6!important}.border-0{border:0!important}.border-primary{border-color:#b953a4!important}.rounded{border-radius:.25rem!important}.d-none{display:none!important}.d-block{display:block!important}.d-flex{display:flex!important}@media (min-width:576px){.d-sm-none{display:none!important}}@media (min-width:768px){.d-md-none{display:none!important}.d-md-block{display:block!important}}.justify-content-start{justify-content:flex-start!important}.position-relative{position:relative!important}.position-absolute{position:absolute!important}.w-100{width:100%!important}.mb-0{margin-bottom:0!important}.mt-1,.my-1{margin-top:.25rem!important}.my-1{margin-bottom:.25rem!important}.ml-1{margin-left:.25rem!important}.mt-2,.my-2{margin-top:.5rem!important}.mr-2{margin-right:.5rem!important}.my-2{margin-bottom:.5rem!important}.mt-3{margin-top:1rem!important}.mb-3{margin-bottom:1rem!important}.py-0{padding-top:0!important}.px-0{padding-right:0!important}.py-0{padding-bottom:0!important}.px-0{padding-left:0!important}.pt-1,.py-1{padding-top:.25rem!important}.px-1{padding-right:.25rem!important}.pb-1,.py-1{padding-bottom:.25rem!important}.px-1{padding-left:.25rem!important}.p-2{padding:.5rem!important}.px-2{padding-right:.5rem!important}.px-2{padding-left:.5rem!important}.p-3{padding:1rem!important}.py-3{padding-top:1rem!important}.pr-3,.px-3{padding-right:1rem!important}.py-3{padding-bottom:1rem!important}.px-3{padding-left:1rem!important}.py-4{padding-top:1.5rem!important}.px-4{padding-right:1.5rem!important}.py-4{padding-bottom:1.5rem!important}.px-4{padding-left:1.5rem!important}.my-auto{margin-top:auto!important}.mr-auto{margin-right:auto!important}.my-auto{margin-bottom:auto!important}.text-left{text-align:left!important}@media (min-width:768px){.text-md-center{text-align:center!important}}.text-uppercase{text-transform:uppercase!important}.font-weight-light{font-weight:300!important}.font-weight-bold{font-weight:700!important}.text-primary{color:#b953a4!important}.text-dark{color:#343a40!important}@font-face{font-family:FontAwesome;src:url(\"/static/fonts/fontawesome-webfont.eot?v=4.7.0\");src:url(\"/static/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0\") format(\"embedded-opentype\"),url(\"/static/fonts/fontawesome-webfont.woff2?v=4.7.0\") format(\"woff2\"),url(\"/static/fonts/fontawesome-webfont.woff?v=4.7.0\") format(\"woff\"),url(\"/static/fonts/fontawesome-webfont.ttf?v=4.7.0\") format(\"truetype\"),url(\"/static/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular\") format(\"svg\");font-weight:400;font-style:normal}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-2x{font-size:2em}.fa-search:before{content:\"\\F002\"}.fa-pencil-square-o:before{content:\"\\F044\"}.fa-chevron-right:before{content:\"\\F054\"}.fa-info-circle:before{content:\"\\F05A\"}.fa-upload:before{content:\"\\F093\"}.fa-rss:before{content:\"\\F09E\"}.fa-briefcase:before{content:\"\\F0B1\"}.fa-bars:before{content:\"\\F0C9\"}.fa-lightbulb-o:before{content:\"\\F0EB\"}.fa-graduation-cap:before{content:\"\\F19D\"}.fa-user-circle-o:before{content:\"\\F2BE\"}body,h1{font-family:helvetica-ttf,sans-serif!important}input{outline:none;border:none}input::-webkit-input-placeholder{color:#adadad}input:-moz-placeholder,input::-moz-placeholder{color:#adadad}input:-ms-input-placeholder{color:#adadad}button{outline:none!important;border:none;background:transparent}.font-12{font-size:12px!important}.font-13{font-size:13px!important}.font-14{font-size:14px!important}.font-15{font-size:15px!important}.font-22{font-size:22px!important}.text-gray{color:#666!important}.text-black-100{color:#333!important}.bg-indigo{background-color:#664cc7!important}.bg-yellow-green{background-color:#bdc74c!important}.bg-red-100{background-color:#c74c4c!important}.bg-teal{background-color:#47be84!important}.bg-cyan{background-color:#4cb1c7!important}.bg-gray{background-color:#ddd!important}.bg-blue-200{background-color:#4c91c7!important}.navbar-9houzz{color:#666!important;height:60px}.header-search .input-radius{border:1px solid!important;border-radius:4em/5em}.header-search{position:relative;width:550px;margin-left:15px;display:block}.header-search .input-radius{width:100%;height:40px;border:1px solid #ddd!important}.header-search .icon-search{position:absolute;right:10px;top:22%;color:#b953a4;z-index:10;font-weight:lighter}.header-left{padding:0!important}.StoreNavigation-overlay{position:fixed;top:0;left:-999px;width:100%;height:100%;-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";background:rgba(0,0,0,.8);overflow:hidden;z-index:1111;opacity:0;display:none}@media (min-width:1300px){.container{max-width:1265px}}@media (min-width:768px) and (max-width:992px){.container{max-width:868px}}@media (min-width:768px) and (max-width:991.98px){.header-search{margin-left:50px!important}}@media (min-width:576px) and (max-width:767.98px){.navbar-9houzz{max-width:100%}header{height:60px!important}}@media (max-width:575.98px){header{height:60px!important}}.living-room{background-image:url(\"/static/images/outdoor-room.png\")!important}.kitchen{background-image:url(\"/static/images/kitchen.png\")!important}.bedroom{background-image:url(\"/static/images/bedroom.png\")!important}.bathroom{background-image:url(\"/static/images/bathroom.png\")!important}.workroom{background-image:url(\"/static/images/workroom.png\")!important}.baby-room{background-image:url(\"/static/images/babyroom.png\")!important}.outdoor-room{background-image:url(\"/static/images/outdoor-room.png\")!important}header{position:relative;height:105px;background:#fff;z-index:1000000}.nav-9houzz{background-color:#b953a4!important;color:#fff;position:relative;margin-left:0!important;margin-right:0!important}.nav-9houzz .navbar-nav{display:block;padding-left:40px!important;padding-right:40px!important}.nav-9houzz .header-menu{padding:0!important}.nav-9houzz .header-menu .nav-item:first-child{margin-left:7%!important}.nav-9houzz .header-menu .nav-item{display:block;padding-left:40px!important;padding-right:40px!important}.nav-9houzz .header-menu .nav-item .nav-link{padding:.5rem!important;font-size:14px!important;color:#fff!important}.nav-9houzz .header-menu .nav-item .nav-prof{position:relative!important}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child{top:4px!important;left:-40px!important;width:270px!important;z-index:11111111111}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child a{color:#666!important}.nav-9houzz .header-menu .nav-item .nav-child{position:absolute;display:none!important;top:100%;left:0;background:#fff;list-style:none;border:1px solid #ddd;border-top:none;padding:10px 14px 20px;z-index:11111111111}.nav-9houzz .header-menu .nav-item .nav-child .nav-idea{width:18%;height:112px;margin:10px;float:left;position:relative;background-position:50%;background-repeat:no-repeat;vertical-align:middle;line-height:112px;background-size:cover!important;color:#fff!important}@media (min-width:768px){.nav-idea{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}}@media (max-width:767.98px){.nav-9houzz{padding-left:0!important;padding-right:0!important}.nav-9houzz .navbar>.navbar-collapse{padding-bottom:20px!important}.nav-9houzz .header-menu,.nav-9houzz .header-menu .nav-item{padding-left:10px!important;padding-right:10px!important}.nav-9houzz .header-menu .nav-child,.nav-9houzz .header-menu .nav-item .nav-child{position:relative!important;top:0!important;display:block!important;overflow:hidden!important}.nav-9houzz .header-menu .nav-item .navbar-toggler,.nav-9houzz .header-menu .navbar-toggler{padding:.25rem!important}.nav-9houzz .header-menu .nav-item .navbar-toggler span,.nav-9houzz .header-menu .navbar-toggler span{font-size:13px!important}.nav-idea{width:90%!important;text-align:center;padding:57px 0;margin:12px auto;float:none;line-height:0!important}.navbar-toggler{border:none!important}.navbar-toggler span{font-size:18px!important;margin-top:3px!important}.nav-9houzz .header-menu .nav-item .nav-child{background:none!important;border:none!important}.nav-9houzz .header-menu .nav-item .nav-child .nav-idea{width:18%;height:0!important;float:left;line-height:112px;text-align:left;padding:0!important;color:#fff!important;margin-bottom:25px}.nav-9houzz .header-menu .nav-item .nav-child .nav-idea{text-transform:none!important;font-size:16px!important;font-weight:400!important}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child{padding-top:0!important;top:0!important;left:0!important;width:100%;-webkit-box-shadow:none;box-shadow:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:11111111111}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child a{color:#fff!important;font-size:16px!important}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child .nav-service{padding-left:0!important;line-height:30px!important}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child .text-left{padding-left:0!important}.nav-9houzz .header-menu .nav-item:first-child{margin-left:0!important}}@media (max-width:767.98px){.widget h3{display:inline-block;font-size:16px!important;font-weight:600!important;line-height:1.25}.widget h3{margin-bottom:10px!important}}span{font-size:13px!important}@media (max-width:575.98px){#sidebar{max-width:100%!important;margin-top:-.5rem!important;border-top:none!important}}#sidebar{max-width:23%!important}.sidebar-service{width:100%;margin-left:5px}.sidebar-service .widget ul{line-height:13px!important}.widget h3{font-weight:600!important;font-size:14px!important}#cat .title{font-size:21px!important;font-weight:400!important}.child-sidebar-service{overflow:hidden;border-bottom:1px solid #e6e6e6}.child-sidebar-service ul{overflow:hidden;clear:both}.child-sidebar-service ul label{color:#333!important;font-size:13px!important;font-weight:400}.child-sidebar-service ul li:nth-child(n+5){display:none}.child-sidebar-service ul .loadmore{float:right;font-size:13px;color:#b953a4!important;margin-top:10px}.child-sidebar-service ul .radio{width:100%;position:relative}.child-sidebar-service ul .radio a{display:block;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;max-width:87%}.child-sidebar-service ul .radio a span{position:absolute;right:0}@media (max-width:767.98px){.service #sidebar{max-width:100%!important;margin-top:.5rem!important;border-top:none!important;margin-bottom:.5rem!important}.sidebar-service{background:none!important}.sidebar-service .sidebar-service-content{padding-left:0!important;padding-right:0!important}.sidebar-service a{color:#000!important;text-decoration:none}.child-sidebar-service{background:#fff!important;padding:.5rem!important;padding-bottom:0!important}.child-sidebar-service .widget{margin-top:0!important;padding:.5rem!important}.child-sidebar-service .widget h3{font-size:17px!important}.child-sidebar-service .widget h3 span{font-size:18px!important}.child-sidebar-service ul li:nth-child(n+5){display:block!important}.child-sidebar-service ul label,.child-sidebar-service ul label span{font-size:16px!important}.child-sidebar-service h3{margin-bottom:.5rem!important;font-size:17px!important}.child-sidebar-service h3 span{position:absolute;right:6px;top:13px;padding:7px}}.service{font-size:13px}.service h3{font-weight:inherit}.service .service-tag{background:#fff;font-size:13px!important;font-weight:lighter;color:#b953a4;padding:8px;padding-right:35px;padding-left:17px;position:relative}.service .service-tag i{position:absolute;right:15px;font-size:13px;top:6px;font-style:normal!important;font-weight:300;color:#b953a4!important;opacity:1!important}.service .service-tag i:before{transform:rotate(45deg)}.service .service-tag i:after{transform:rotate(-45deg)}.service .service-tag i:after,.service .service-tag i:before{position:absolute;left:0;content:\" \";top:0;height:16px;width:2px;background-color:#b953a4}.idea-content h2{font-weight:600!important;font-size:15px!important;line-height:20px!important}img{vertical-align:middle}.card{border:none!important}.grid__col-sizer,.grid__item{width:32.5%}.grid__gutter-sizer{width:1%}.grid__item{margin-bottom:20px;float:left ;padding:8px !important; }.grid__item .upload{padding:.5rem .75rem;background:#fff;top:10px;left:10px;z-index:100}.grid__item img{display:block;max-width:100%;width:100%}@media (min-width:992px) and (max-width:1199.98px){.grid__col-sizer,.grid__item{width:24%}}@media (min-width:768px) and (max-width:991.98px){.grid__col-sizer,.grid__item{width:33%}}@media (max-width:767.98px){.grid__col-sizer,.grid__item{width:99%}.service{padding-right:30px!important;padding-left:15px!important}.service .sidebar-service{width:100%;margin-left:8px}.service .idea-content h2{font-size:16px!important}.service .idea-content p{display:none!important;font-size:15px!important}}";

/***/ }),

/***/ "./styles/style.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/idea.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "assert":
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "classnames":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "isomorphic-fetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "jquery":
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),

/***/ "next-routes":
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "path-to-regexp":
/***/ (function(module, exports) {

module.exports = require("path-to-regexp");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-infinite-scroller":
/***/ (function(module, exports) {

module.exports = require("react-infinite-scroller");

/***/ }),

/***/ "react-masonry-component":
/***/ (function(module, exports) {

module.exports = require("react-masonry-component");

/***/ }),

/***/ "reactstrap":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "universal-cookie":
/***/ (function(module, exports) {

module.exports = require("universal-cookie");

/***/ })

/******/ });
//# sourceMappingURL=idea.js.map