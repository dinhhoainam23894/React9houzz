webpackHotUpdate(5,{

/***/ "./components/IdeaComponent.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/styled-jsx/style.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _axios = _interopRequireDefault(__webpack_require__("./node_modules/axios/index.js"));

__webpack_require__("./node_modules/isomorphic-fetch/fetch-npm-browserify.js");

var _layout = _interopRequireDefault(__webpack_require__("./components/layout.js"));

var _sideBar = _interopRequireDefault(__webpack_require__("./components/sideBar.js"));

var _reactMasonryComponent = _interopRequireDefault(__webpack_require__("./node_modules/react-masonry-component/lib/index.js"));

var _reactInfiniteScroller = _interopRequireDefault(__webpack_require__("./node_modules/react-infinite-scroller/index.js"));

var _imageModal = _interopRequireDefault(__webpack_require__("./components/image-modal.js"));

var _routes = __webpack_require__("./routes.js");

var _jquery = _interopRequireDefault(__webpack_require__("./node_modules/jquery/dist/jquery.js"));

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

/***/ })

})
//# sourceMappingURL=5.319cac1226a4b460e090.hot-update.js.map