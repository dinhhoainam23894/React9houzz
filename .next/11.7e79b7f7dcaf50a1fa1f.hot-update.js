webpackHotUpdate(11,{

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

var _reactLazyload = _interopRequireDefault(__webpack_require__("./node_modules/react-lazyload/lib/index.js"));

var _PlaceHolder = _interopRequireDefault(__webpack_require__("./components/PlaceHolder.js"));

var _pagination = _interopRequireDefault(__webpack_require__("./components/pagination.js"));

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
    key: "getPageUrl",
    value: function getPageUrl(i) {
      var url = "";

      if (this.props.url_path) {
        url = this.props.url_path;
      }

      return url + "?page=" + i;
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
      forceCheck();
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

      var datas = this.props.data.images;
      var nextPageLink = datas.next_page_url ? this.props.url_path + "?page=" + (datas.current_page + 1) : undefined;
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
          lineNumber: 168
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
          lineNumber: 171
        }
      }) : '', _react.default.createElement(_style.default, {
        styleId: "352178927",
        css: "#lightbox .nav-link:first-child{border-left:1px solid #e2e2e2 !important;}#lightbox .nav-link{display:block;padding:0.4rem 0.7rem !important;border-left:none !important;border-color:#e2e2e2;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSWRlYUNvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1TFUsQUFFNEMsQUFHM0IsY0FDbUIsMkJBSlMsTUFLZCw0QkFDUCxxQkFBQyIsImZpbGUiOiJjb21wb25lbnRzL0lkZWFDb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9teS1uZXh0LWFwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi9sYXlvdXQnXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL3NpZGVCYXInXG5pbXBvcnQgTWFzb25yeSBmcm9tICdyZWFjdC1tYXNvbnJ5LWNvbXBvbmVudCdcbmltcG9ydCBJbmZpbml0ZVNjcm9sbCBmcm9tICdyZWFjdC1pbmZpbml0ZS1zY3JvbGxlcidcbmltcG9ydCBJbWFnZU1vZGFsIGZyb20gJy4vaW1hZ2UtbW9kYWwnXG5pbXBvcnQge0xpbmt9IGZyb20gJy4uL3JvdXRlcydcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmNvbnN0IEFQSVVSTCA9IHByb2Nlc3MuZW52LkRPTUFJTiArIHByb2Nlc3MuZW52LkFQSVVSSVxudmFyIGN1cnJlbnRQYXRoID0gJy8nXG52YXIgYXNQYXRoID0gJy8nXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnLi4vcm91dGVzJ1xuaW1wb3J0IGNzcyBmcm9tICdzdHlsZXMvZnNjcmVlbl9pZGVhLmNzcydcbmltcG9ydCBMYXp5TG9hZCBmcm9tIFwicmVhY3QtbGF6eWxvYWRcIjtcbmltcG9ydCBQbGFjZWhvbGRlciBmcm9tIFwiLi9QbGFjZUhvbGRlclwiO1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSBcIi4vcGFnaW5hdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJZGVhQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgaW1hZ2VzOiBbXSxcbiAgICBuZXh0VXJsOiBudWxsLFxuICAgIGhhc01vcmVJdGVtczogdHJ1ZSxcbiAgICBoMTogbnVsbCxcbiAgICBmaWx0ZXJfZGVmYXVsdDogW10sXG4gICAgbGlzdEJhZGdlOiBbXVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBjdXJyZW50UGF0aCA9IHRoaXMucHJvcHMucGF0aFxuICAgIGFzUGF0aCA9IHRoaXMucHJvcHMuYXNQYXRoXG5cbiAgfVxuXG4gIGxvYWRJdGVtcyhwYWdlKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciB1cmwgPSAnJztcbiAgICBpZiAodGhpcy5wcm9wcy5uZXh0VXJsKSB7XG4gICAgICB1cmwgPSB0aGlzLnByb3BzLm5leHRVcmw7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm5leHRVcmwgIT0gbnVsbCkge1xuICAgICAgYXhpb3MuZ2V0KHVybClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgICBpZiAocmVzcCkge1xuICAgICAgICAgICAgdmFyIHRyYWNrcyA9IHNlbGYucHJvcHMuaW1hZ2VzO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSByZXNwLmRhdGFcbiAgICAgICAgICAgIGRhdGEuaW1hZ2VzLmRhdGEubWFwKCh0cmFjaykgPT4ge1xuICAgICAgICAgICAgICB0cmFja3MucHVzaCh0cmFjayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChkYXRhLmltYWdlcy5uZXh0X3BhZ2VfdXJsICYmIGRhdGEuaW1hZ2VzLm5leHRfcGFnZV91cmwgIT0gbnVsbCkge1xuICAgICAgICAgICAgICBzZWxmLnByb3BzLmNoYW5nZVN0YXRlKHRyYWNrcywgZGF0YS5pbWFnZXMubmV4dF9wYWdlX3VybClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGhhc01vcmVJdGVtczogZmFsc2VcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgfVxuICBnZXRQYWdlVXJsKGkpIHtcbiAgICBsZXQgdXJsID0gXCJcIjtcbiAgICBpZiAodGhpcy5wcm9wcy51cmxfcGF0aCkge1xuICAgICAgdXJsID0gdGhpcy5wcm9wcy51cmxfcGF0aFxuICAgIH1cbiAgICByZXR1cm4gdXJsICsgXCI/cGFnZT1cIiArIGk7XG4gIH1cbiAgc2hvd1Bob3RvKGUsIGlkLCBzbHVnKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaWYgKHRoaXMucHJvcHMuaWRlYVBhcmFtcykge1xuICAgICAgdmFyIHBhcmFtcyA9IHRoaXMucHJvcHMuaWRlYVBhcmFtc1xuICAgICAgaWYgKHRoaXMucHJvcHMuc3ViUGFyYW1zKSB7XG4gICAgICAgIFJvdXRlci5wdXNoKGAke2N1cnJlbnRQYXRofT9wYXJhbXM9JHtwYXJhbXN9JmY9JHt0aGlzLnByb3BzLnN1YlBhcmFtc30mcGhvdG9JZD0ke2lkfSZzbHVnPSR7c2x1Z31gLCBgL2FuaC8ke2lkfS0ke3NsdWd9YClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFJvdXRlci5wdXNoKGAke2N1cnJlbnRQYXRofT9wYXJhbXM9JHtwYXJhbXN9JnBob3RvSWQ9JHtpZH0mc2x1Zz0ke3NsdWd9YCwgYC9hbmgvJHtpZH0tJHtzbHVnfWApXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIFJvdXRlci5wdXNoKGAke2N1cnJlbnRQYXRofT9waG90b0lkPSR7aWR9JnNsdWc9JHtzbHVnfWAsIGAvYW5oLyR7aWR9LSR7c2x1Z31gKVxuICAgIH1cbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBmb3JjZUNoZWNrKCk7XG4gICAgdmFyIHNob3dDaGFyID0gMTUwOyAgLy8gSG93IG1hbnkgY2hhcmFjdGVycyBhcmUgc2hvd24gYnkgZGVmYXVsdFxuICAgIHZhciBlbGxpcHNlc3RleHQgPSBcIlwiO1xuICAgIHZhciBtb3JldGV4dCA9IFwiWGVtIHRow6ptID5cIjtcbiAgICB2YXIgbGVzc3RleHQgPSBcIlLDunQgZ+G7jW4gPFwiO1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICQoJy5tb3JlRGVzJykuZWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSAkKHRoaXMpLmh0bWwoKTtcbiAgICAgIGlmIChjb250ZW50Lmxlbmd0aCA+IHNob3dDaGFyKSB7XG4gICAgICAgIHZhciBjID0gY29udGVudC5zdWJzdHIoMCwgc2hvd0NoYXIpO1xuICAgICAgICB2YXIgaCA9IGNvbnRlbnQuc3Vic3RyKHNob3dDaGFyLCBjb250ZW50Lmxlbmd0aCAtIHNob3dDaGFyKTtcbiAgICAgICAgdmFyIGh0bWwgPSBjICsgJzxzcGFuIGNsYXNzPVwibW9yZWVsbGlwc2VzXCI+JyArIGVsbGlwc2VzdGV4dCArICcmbmJzcDs8L3NwYW4+PHNwYW4gY2xhc3M9XCJtb3JlY29udGVudFwiPjxzcGFuPicgKyBoICsgJzwvc3Bhbj4mbmJzcDsmbmJzcDs8YSBocmVmPVwiXCIgY2xhc3M9XCJtb3JlbGlua1wiPicgKyBtb3JldGV4dCArICc8L2E+PC9zcGFuPic7XG4gICAgICAgICQodGhpcykuaHRtbChodG1sKTtcbiAgICAgIH1cblxuICAgIH0pO1xuICAgICQoXCIubW9yZWxpbmtcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJsZXNzXCIpKSB7XG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJsZXNzXCIpO1xuICAgICAgICAkKHRoaXMpLmh0bWwobW9yZXRleHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImxlc3NcIik7XG4gICAgICAgICQodGhpcykuaHRtbChsZXNzdGV4dCk7XG4gICAgICB9XG4gICAgICAkKHRoaXMpLnBhcmVudCgpLnByZXYoKS50b2dnbGUoKTtcbiAgICAgICQodGhpcykucHJldigpLnRvZ2dsZSgpO1xuICAgICAgc2VsZi5tYXNvbnJ5LnBlcmZvcm1MYXlvdXQoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICAkKCcuc2lkZWJhci1zZXJ2aWNlIHVsJykuZWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKCQodGhpcykuZmluZCgnbGknKS5sZW5ndGggPT0gJCh0aGlzKS5maW5kKCQoJ2xpOnZpc2libGUnKSkubGVuZ3RoKSB7XG4gICAgICAgICQodGhpcykuZmluZCgnLmxvYWRtb3JlJykuaGlkZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgICQoJy5zaWRlYmFyLXNlcnZpY2UnKS5vbignY2xpY2snLCAnLmxvYWRtb3JlJywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGxpc3QgPSAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJCgnbGknKSk7XG4gICAgICAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJCgnbGk6aGlkZGVuJykpLnNob3coKTtcbiAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PSAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJCgnbGk6dmlzaWJsZScpKS5sZW5ndGgpIHtcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnbG9hZG1vcmUnKTtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaGlkZW1vcmUnKTtcbiAgICAgICAgJCh0aGlzKS5odG1sKCdUaHUgZ+G7jW4nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAkKCcuc2lkZWJhci1zZXJ2aWNlJykub24oJ2NsaWNrJywgJy5oaWRlbW9yZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBsaXN0ID0gJCh0aGlzKS5wYXJlbnQoKS5maW5kKCQoJ2xpJykpO1xuICAgICAgJCh0aGlzKS5wYXJlbnQoKS5maW5kKCQoJ2xpOnZpc2libGUnKSkuc2xpY2UoNSwgbGlzdC5sZW5ndGgpLmhpZGUoKTtcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2hpZGVtb3JlJyk7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdsb2FkbW9yZScpO1xuICAgICAgJCh0aGlzKS5odG1sKCdYZW0gdGjDqm0nKTtcbiAgICB9KTtcbiAgICAkKFwiLmNsb3NlXCIpLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgJCh0aGlzKS5wYXJlbnQoKS50b2dnbGUoKTtcbiAgICB9KTtcbiAgfVxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgLy8gdmFyIGxpc3QgPSAkKCcuaWRlYS1jb250ZW50JykuZmluZCgnLm1vcmVEZXMnKS5sZW5ndGg7XG4gICAgJCgnLmlkZWEtY29udGVudCcpLmZpbmQoJCgnLm1vcmVEZXM6dmlzaWJsZScpKS5oaWRlKCk7XG4gICAgJCgnLmlkZWEtY29udGVudCcpLmZpbmQoJCgnLm1vcmVEZXMnKSkuc2xpY2UoMCwgMjApLnNob3coKTtcbiAgfVxuICBkaXNtaXNzTW9kYWwoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuaWRlYVBhcmFtcykge1xuICAgICAgdmFyIHBhcmFtcyA9IHRoaXMucHJvcHMuaWRlYVBhcmFtc1xuICAgICAgaWYgKHRoaXMucHJvcHMuc3ViUGFyYW1zKSB7XG4gICAgICAgIFJvdXRlci5wdXNoUm91dGUoYC95LXR1b25nLyR7cGFyYW1zfT9mPSR7dGhpcy5wcm9wcy5zdWJQYXJhbXN9YClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFJvdXRlci5wdXNoUm91dGUoJ2lkZWEuZGV0YWlsJywge3BhcmFtczogcGFyYW1zfSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgUm91dGVyLnB1c2goJy9pZGVhJywgJy95LXR1b25nJylcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGRhdGFzID0gdGhpcy5wcm9wcy5kYXRhLmltYWdlcztcbiAgICB2YXIgbmV4dFBhZ2VMaW5rID0gIGRhdGFzLm5leHRfcGFnZV91cmwgPyB0aGlzLnByb3BzLnVybF9wYXRoICsgXCI/cGFnZT1cIiArIChkYXRhcy5jdXJyZW50X3BhZ2UgKyAxKSA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBtYXNvbnJ5T3B0aW9ucyA9IHtcbiAgICAgIGd1dHRlcjogJy5ncmlkX19ndXR0ZXItc2l6ZXInLFxuICAgICAgaXNPcmlnaW5MZWZ0OiB0cnVlXG4gICAgfTtcbiAgICBjb25zdCB7aW1hZ2VzLCBoMSwgZmlsdGVyX2RlZmF1bHQsIGNvbG9ycywgbGlzdEJhZGdlLCBkZXRhaWwsIHBhZ2V9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHtwaG90b0lkLCBzbHVnfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQgey4uLnRoaXMucHJvcHN9IG5hdm1lbnU9e2ZhbHNlfSBjb250YWluZXI9e2ZhbHNlfSBjc3M9e2Nzc30+XG4gICAgICAgIHtcbiAgICAgICAgICBwaG90b0lkID9cbiAgICAgICAgICAgIDxJbWFnZU1vZGFsXG4gICAgICAgICAgICAgIGlkPXtwaG90b0lkfVxuICAgICAgICAgICAgICBzbHVnPXtzbHVnfVxuICAgICAgICAgICAgICBkZXRhaWw9e2RldGFpbH1cbiAgICAgICAgICAgICAgaW1hZ2VzPXtpbWFnZXN9XG4gICAgICAgICAgICAgIGN1cnJlbnRQYXRoPXtjdXJyZW50UGF0aH1cbiAgICAgICAgICAgICAgaWRlYVBhcmFtcz17dGhpcy5wcm9wcy5pZGVhUGFyYW1zfVxuICAgICAgICAgICAgICBzdWJQYXJhbXM9e3RoaXMucHJvcHMuc3ViUGFyYW1zfVxuICAgICAgICAgICAgICBuZXh0UGFnZVVybD17dGhpcy5zdGF0ZS5uZXh0VXJsfVxuICAgICAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHRoaXMuZGlzbWlzc01vZGFsKCl9XG4gICAgICAgICAgICAvPiA6ICcnXG4gICAgICAgIH1cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e1xuICAgICAgICAgIGBcbiAgICAgICAgICAgICNsaWdodGJveCAubmF2LWxpbms6Zmlyc3QtY2hpbGR7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTJlMmUyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjbGlnaHRib3ggLm5hdi1saW5rIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjRyZW0gMC43cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICNlMmUyZTI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBgXG4gICAgICAgIH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgc2VydmljZSBweC00IGJnLWdyYXlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMCBjb2wtbWQtMyBjb2wtbGctMyBweC0zXCIgaWQ9XCJzaWRlYmFyXCI+XG4gICAgICAgICAgICAgIDxTaWRlYmFyIGZpbHRlcj17ZmlsdGVyX2RlZmF1bHR9IGNvbG9yPXtjb2xvcnN9IHBhZ2U9e3BhZ2V9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC05IGNvbC1sZy05IHB4LTBcIiBpZD1cImNhdFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHB4LTMgcHktNFwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWRhcmsgdGl0bGUgbWwtMVwiPntoMSAmJiBoMX08L2gxPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC10YWdcIj5cbiAgICAgICAgICAgICAgICAgIHtsaXN0QmFkZ2UgJiYgbGlzdEJhZGdlLm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPXt2YWx1ZS51cml9IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3ZhbHVlLnVyaX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1waWxsIGJhZGdlLWxpZ2h0IGJvcmRlciBib3JkZXItcHJpbWFyeSBtci0yIG15LTEgc2VydmljZS10YWdcIj57dmFsdWUubmFtZV90YWd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJjbG9zZVwiIC8+PC9zcGFuPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8SW5maW5pdGVTY3JvbGxcbiAgICAgICAgICAgICAgICAgIHBhZ2VTdGFydD17MH1cbiAgICAgICAgICAgICAgICAgIGxvYWRNb3JlPXt0aGlzLmxvYWRJdGVtcy5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgaGFzTW9yZT17dGhpcy5zdGF0ZS5oYXNNb3JlSXRlbXN9XG4gICAgICAgICAgICAgICAgICBsb2FkZXI9ezxkaXYgY2xhc3NOYW1lPVwibG9hZGVyXCIga2V5PSdjeCc+TG9hZGluZyAuLi48L2Rpdj59PlxuICAgICAgICAgICAgICAgICAgPE1hc29ucnlcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnLmdyaWQgYXJlLWltYWdlcy11bmxvYWRlZCBtdC0zJ31cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUltYWdlc0xvYWRlZD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e21hc29ucnlPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICByZWY9e2MgPT4gdGhpcy5tYXNvbnJ5ID0gY31cbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlT25FYWNoSW1hZ2VMb2FkPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkX19jb2wtc2l6ZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRfX2d1dHRlci1zaXplclwiIC8+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBpbWFnZXMgJiYgaW1hZ2VzLm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRfX2l0ZW0gcm91bmRlZFwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb3NpdGlvbi1hYnNvbHV0ZSByb3VuZGVkIGQtbm9uZSB1cGxvYWRcIj4gPGkgY2xhc3NOYW1lPVwiZmEgZmEtdXBsb2FkXCI+PC9pPiBMxrB1IOG6o25oPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPVwiaW1hZ2VcIiBwYXJhbXM9e3tpZDogdmFsdWUuaWQsIHNsdWc6IHZhbHVlLnNsdWd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnNob3dQaG90byhlLCB2YWx1ZS5pZCwgdmFsdWUuc2x1Zyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWQgb25jZSB0aHJvdHRsZSBwbGFjZWhvbGRlcj17PFBsYWNlaG9sZGVyIGRhdGFTcmM9e3ZhbHVlLm1lZGl1bV9wYXRofSBhbHQ9e3ZhbHVlLm5hbWV9Lz59PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicm91bmRlZCBjYXJkLWltZy10b3BcIiBzcmM9e3ZhbHVlLm1lZGl1bV9wYXRofSBhbHQ9e3ZhbHVlLm5hbWV9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MYXp5TG9hZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgaWRlYS1jb250ZW50IHB4LTEgcHQtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm10LTIgZm9udC0xNSB0ZXh0LWJsYWNrLTEwMFwiIGRhdGEtdGl0bGU9e3ZhbHVlLm5hbWV9Pnt2YWx1ZS5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0yIGltYWdlcy10aXRsZSBmb250LTE0IHRleHQtYmxhY2stMTAwIG1vcmVEZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHZhbHVlLmRlc2NyaXB0aW9uc319IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPC9NYXNvbnJ5PlxuICAgICAgICAgICAgICAgIDwvSW5maW5pdGVTY3JvbGw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2lfZGVza3RvcCBteS00XCI+XG4gICAgICAgICAgICAgICAgPFBhZ2luYXRpb25cbiAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2U9e3RoaXMucHJvcHMuZGF0YS5pbWFnZXMuY3VycmVudF9wYWdlfVxuICAgICAgICAgICAgICAgICAgaXRlbXNDb3VudFBlclBhZ2U9e3RoaXMucHJvcHMuZGF0YS5pbWFnZXMucGVyX3BhZ2V9XG4gICAgICAgICAgICAgICAgICB0b3RhbEl0ZW1zQ291bnQ9e3RoaXMucHJvcHMuZGF0YS5pbWFnZXMudG90YWx9XG4gICAgICAgICAgICAgICAgICBwYWdlUmFuZ2VEaXNwbGF5ZWQ9ezV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuaGFuZGxlUGFnZUNoYW5nZShlKX1cbiAgICAgICAgICAgICAgICAgIGdldFBhZ2VVcmw9eyhpKSA9PiB0aGlzLmdldFBhZ2VVcmwoaSl9XG4gICAgICAgICAgICAgICAgICBuZXh0UGFnZUxpbms9e25leHRQYWdlTGlua31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=components/IdeaComponent.js */"
      }), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        className: "jsx-352178927" + " " + "container-fluid service px-4 bg-gray"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        className: "jsx-352178927" + " " + "row"
      }, _react.default.createElement("div", {
        id: "sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        className: "jsx-352178927" + " " + "col-0 col-md-3 col-lg-3 px-3"
      }, _react.default.createElement(_sideBar.default, {
        filter: filter_default,
        color: colors,
        page: page,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      })), _react.default.createElement("div", {
        id: "cat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        className: "jsx-352178927" + " " + "col-12 col-md-9 col-lg-9 px-0"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        className: "jsx-352178927" + " " + "bg-white px-3 py-4"
      }, _react.default.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        className: "jsx-352178927" + " " + "text-dark title ml-1"
      }, h1 && h1), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        className: "jsx-352178927" + " " + "list-tag"
      }, listBadge && listBadge.map(function (value, index) {
        return _react.default.createElement(_routes.Link, {
          route: value.uri,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 207
          }
        }, _react.default.createElement("a", {
          href: value.uri,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 208
          },
          className: "jsx-352178927"
        }, _react.default.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 209
          },
          className: "jsx-352178927" + " " + "badge badge-pill badge-light border border-primary mr-2 my-1 service-tag"
        }, value.name_tag, _react.default.createElement("i", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 210
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
            lineNumber: 219
          },
          className: "jsx-352178927" + " " + "loader"
        }, "Loading ..."),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
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
          lineNumber: 220
        }
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        className: "jsx-352178927" + " " + "grid__col-sizer"
      }), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        className: "jsx-352178927" + " " + "grid__gutter-sizer"
      }), images && images.map(function (value, index) {
        return _react.default.createElement("div", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 231
          },
          className: "jsx-352178927" + " " + "grid__item rounded"
        }, _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 232
          },
          className: "jsx-352178927" + " " + "card"
        }, _react.default.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 233
          },
          className: "jsx-352178927" + " " + "position-absolute rounded d-none upload"
        }, " ", _react.default.createElement("i", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 233
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
            lineNumber: 234
          }
        }, _react.default.createElement("a", {
          onClick: function onClick(e) {
            return _this2.showPhoto(e, value.id, value.slug);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 235
          },
          className: "jsx-352178927"
        }, _react.default.createElement(_reactLazyload.default, {
          once: true,
          throttle: true,
          placeholder: _react.default.createElement(_PlaceHolder.default, {
            dataSrc: value.medium_path,
            alt: value.name,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 236
            }
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 236
          }
        }, _react.default.createElement("img", {
          src: value.medium_path,
          alt: value.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 237
          },
          className: "jsx-352178927" + " " + "rounded card-img-top"
        })))), _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 241
          },
          className: "jsx-352178927" + " " + "card-body idea-content px-1 pt-1"
        }, _react.default.createElement("h2", {
          "data-title": value.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 242
          },
          className: "jsx-352178927" + " " + "mt-2 font-15 text-black-100"
        }, value.name), _react.default.createElement("p", {
          dangerouslySetInnerHTML: {
            __html: value.descriptions
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 243
          },
          className: "jsx-352178927" + " " + "mt-2 images-title font-14 text-black-100 moreDes"
        }))));
      })))), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        className: "jsx-352178927" + " " + "pagi_desktop my-4"
      }, _react.default.createElement(_pagination.default, {
        activePage: this.props.data.images.current_page,
        itemsCountPerPage: this.props.data.images.per_page,
        totalItemsCount: this.props.data.images.total,
        pageRangeDisplayed: 5,
        onChange: function onChange(e) {
          return _this2.handlePageChange(e);
        },
        getPageUrl: function getPageUrl(i) {
          return _this2.getPageUrl(i);
        },
        nextPageLink: nextPageLink,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        }
      }))))));
    }
  }]);

  return IdeaComponent;
}(_react.default.Component);

exports.default = IdeaComponent;

/***/ })

})
//# sourceMappingURL=11.7e79b7f7dcaf50a1fa1f.hot-update.js.map