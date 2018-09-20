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

var _reactLazyload = _interopRequireWildcard(__webpack_require__("./node_modules/react-lazyload/lib/index.js"));

var _PlaceHolder = _interopRequireDefault(__webpack_require__("./components/PlaceHolder.js"));

var _pagination = _interopRequireDefault(__webpack_require__("./components/pagination.js"));

var _jsxFileName = "/Applications/MAMP/htdocs/my-next-app/components/IdeaComponent.js";

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
      // console.log('b');
      (0, _reactLazyload.forceCheck)();
      setTimeout(_reactLazyload.forceCheck, 100);
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
      (0, _reactLazyload.forceCheck)();
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
          lineNumber: 170
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
          lineNumber: 173
        }
      }) : '', _react.default.createElement(_style.default, {
        styleId: "352178927",
        css: "#lightbox .nav-link:first-child{border-left:1px solid #e2e2e2 !important;}#lightbox .nav-link{display:block;padding:0.4rem 0.7rem !important;border-left:none !important;border-color:#e2e2e2;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSWRlYUNvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5TFUsQUFFNEMsQUFHM0IsY0FDbUIsMkJBSlMsTUFLZCw0QkFDUCxxQkFBQyIsImZpbGUiOiJjb21wb25lbnRzL0lkZWFDb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9teS1uZXh0LWFwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi9sYXlvdXQnXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL3NpZGVCYXInXG5pbXBvcnQgTWFzb25yeSBmcm9tICdyZWFjdC1tYXNvbnJ5LWNvbXBvbmVudCdcbmltcG9ydCBJbmZpbml0ZVNjcm9sbCBmcm9tICdyZWFjdC1pbmZpbml0ZS1zY3JvbGxlcidcbmltcG9ydCBJbWFnZU1vZGFsIGZyb20gJy4vaW1hZ2UtbW9kYWwnXG5pbXBvcnQge0xpbmt9IGZyb20gJy4uL3JvdXRlcydcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmNvbnN0IEFQSVVSTCA9IHByb2Nlc3MuZW52LkRPTUFJTiArIHByb2Nlc3MuZW52LkFQSVVSSVxudmFyIGN1cnJlbnRQYXRoID0gJy8nXG52YXIgYXNQYXRoID0gJy8nXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnLi4vcm91dGVzJ1xuaW1wb3J0IGNzcyBmcm9tICdzdHlsZXMvZnNjcmVlbl9pZGVhLmNzcydcbmltcG9ydCBMYXp5TG9hZCAseyBmb3JjZUNoZWNrIH0gZnJvbSBcInJlYWN0LWxhenlsb2FkXCI7XG5pbXBvcnQgUGxhY2Vob2xkZXIgZnJvbSBcIi4vUGxhY2VIb2xkZXJcIjtcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCIuL3BhZ2luYXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWRlYUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGltYWdlczogW10sXG4gICAgbmV4dFVybDogbnVsbCxcbiAgICBoYXNNb3JlSXRlbXM6IHRydWUsXG4gICAgaDE6IG51bGwsXG4gICAgZmlsdGVyX2RlZmF1bHQ6IFtdLFxuICAgIGxpc3RCYWRnZTogW11cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgY3VycmVudFBhdGggPSB0aGlzLnByb3BzLnBhdGhcbiAgICBhc1BhdGggPSB0aGlzLnByb3BzLmFzUGF0aFxuXG4gIH1cblxuICBsb2FkSXRlbXMocGFnZSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgdXJsID0gJyc7XG4gICAgaWYgKHRoaXMucHJvcHMubmV4dFVybCkge1xuICAgICAgdXJsID0gdGhpcy5wcm9wcy5uZXh0VXJsO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5uZXh0VXJsICE9IG51bGwpIHtcbiAgICAgIGF4aW9zLmdldCh1cmwpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgaWYgKHJlc3ApIHtcbiAgICAgICAgICAgIHZhciB0cmFja3MgPSBzZWxmLnByb3BzLmltYWdlcztcbiAgICAgICAgICAgIHZhciBkYXRhID0gcmVzcC5kYXRhXG4gICAgICAgICAgICBkYXRhLmltYWdlcy5kYXRhLm1hcCgodHJhY2spID0+IHtcbiAgICAgICAgICAgICAgdHJhY2tzLnB1c2godHJhY2spO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoZGF0YS5pbWFnZXMubmV4dF9wYWdlX3VybCAmJiBkYXRhLmltYWdlcy5uZXh0X3BhZ2VfdXJsICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgc2VsZi5wcm9wcy5jaGFuZ2VTdGF0ZSh0cmFja3MsIGRhdGEuaW1hZ2VzLm5leHRfcGFnZV91cmwpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBoYXNNb3JlSXRlbXM6IGZhbHNlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gIH1cbiAgZ2V0UGFnZVVybChpKSB7XG4gICAgbGV0IHVybCA9IFwiXCI7XG4gICAgaWYgKHRoaXMucHJvcHMudXJsX3BhdGgpIHtcbiAgICAgIHVybCA9IHRoaXMucHJvcHMudXJsX3BhdGhcbiAgICB9XG4gICAgcmV0dXJuIHVybCArIFwiP3BhZ2U9XCIgKyBpO1xuICB9XG4gIHNob3dQaG90byhlLCBpZCwgc2x1Zykge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGlmICh0aGlzLnByb3BzLmlkZWFQYXJhbXMpIHtcbiAgICAgIHZhciBwYXJhbXMgPSB0aGlzLnByb3BzLmlkZWFQYXJhbXNcbiAgICAgIGlmICh0aGlzLnByb3BzLnN1YlBhcmFtcykge1xuICAgICAgICBSb3V0ZXIucHVzaChgJHtjdXJyZW50UGF0aH0/cGFyYW1zPSR7cGFyYW1zfSZmPSR7dGhpcy5wcm9wcy5zdWJQYXJhbXN9JnBob3RvSWQ9JHtpZH0mc2x1Zz0ke3NsdWd9YCwgYC9hbmgvJHtpZH0tJHtzbHVnfWApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBSb3V0ZXIucHVzaChgJHtjdXJyZW50UGF0aH0/cGFyYW1zPSR7cGFyYW1zfSZwaG90b0lkPSR7aWR9JnNsdWc9JHtzbHVnfWAsIGAvYW5oLyR7aWR9LSR7c2x1Z31gKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBSb3V0ZXIucHVzaChgJHtjdXJyZW50UGF0aH0/cGhvdG9JZD0ke2lkfSZzbHVnPSR7c2x1Z31gLCBgL2FuaC8ke2lkfS0ke3NsdWd9YClcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2InKTtcbiAgICBmb3JjZUNoZWNrKCk7XG4gICAgc2V0VGltZW91dChmb3JjZUNoZWNrLCAxMDApO1xuICAgIHZhciBzaG93Q2hhciA9IDE1MDsgIC8vIEhvdyBtYW55IGNoYXJhY3RlcnMgYXJlIHNob3duIGJ5IGRlZmF1bHRcbiAgICB2YXIgZWxsaXBzZXN0ZXh0ID0gXCJcIjtcbiAgICB2YXIgbW9yZXRleHQgPSBcIlhlbSB0aMOqbSA+XCI7XG4gICAgdmFyIGxlc3N0ZXh0ID0gXCJSw7p0IGfhu41uIDxcIjtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAkKCcubW9yZURlcycpLmVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBjb250ZW50ID0gJCh0aGlzKS5odG1sKCk7XG4gICAgICBpZiAoY29udGVudC5sZW5ndGggPiBzaG93Q2hhcikge1xuICAgICAgICB2YXIgYyA9IGNvbnRlbnQuc3Vic3RyKDAsIHNob3dDaGFyKTtcbiAgICAgICAgdmFyIGggPSBjb250ZW50LnN1YnN0cihzaG93Q2hhciwgY29udGVudC5sZW5ndGggLSBzaG93Q2hhcik7XG4gICAgICAgIHZhciBodG1sID0gYyArICc8c3BhbiBjbGFzcz1cIm1vcmVlbGxpcHNlc1wiPicgKyBlbGxpcHNlc3RleHQgKyAnJm5ic3A7PC9zcGFuPjxzcGFuIGNsYXNzPVwibW9yZWNvbnRlbnRcIj48c3Bhbj4nICsgaCArICc8L3NwYW4+Jm5ic3A7Jm5ic3A7PGEgaHJlZj1cIlwiIGNsYXNzPVwibW9yZWxpbmtcIj4nICsgbW9yZXRleHQgKyAnPC9hPjwvc3Bhbj4nO1xuICAgICAgICAkKHRoaXMpLmh0bWwoaHRtbCk7XG4gICAgICB9XG5cbiAgICB9KTtcbiAgICAkKFwiLm1vcmVsaW5rXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwibGVzc1wiKSkge1xuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwibGVzc1wiKTtcbiAgICAgICAgJCh0aGlzKS5odG1sKG1vcmV0ZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJsZXNzXCIpO1xuICAgICAgICAkKHRoaXMpLmh0bWwobGVzc3RleHQpO1xuICAgICAgfVxuICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wcmV2KCkudG9nZ2xlKCk7XG4gICAgICAkKHRoaXMpLnByZXYoKS50b2dnbGUoKTtcbiAgICAgIHNlbGYubWFzb25yeS5wZXJmb3JtTGF5b3V0KCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgJCgnLnNpZGViYXItc2VydmljZSB1bCcpLmVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmICgkKHRoaXMpLmZpbmQoJ2xpJykubGVuZ3RoID09ICQodGhpcykuZmluZCgkKCdsaTp2aXNpYmxlJykpLmxlbmd0aCkge1xuICAgICAgICAkKHRoaXMpLmZpbmQoJy5sb2FkbW9yZScpLmhpZGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAkKCcuc2lkZWJhci1zZXJ2aWNlJykub24oJ2NsaWNrJywgJy5sb2FkbW9yZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBsaXN0ID0gJCh0aGlzKS5wYXJlbnQoKS5maW5kKCQoJ2xpJykpO1xuICAgICAgJCh0aGlzKS5wYXJlbnQoKS5maW5kKCQoJ2xpOmhpZGRlbicpKS5zaG93KCk7XG4gICAgICBpZiAobGlzdC5sZW5ndGggPT0gJCh0aGlzKS5wYXJlbnQoKS5maW5kKCQoJ2xpOnZpc2libGUnKSkubGVuZ3RoKSB7XG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2xvYWRtb3JlJyk7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2hpZGVtb3JlJyk7XG4gICAgICAgICQodGhpcykuaHRtbCgnVGh1IGfhu41uJyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgJCgnLnNpZGViYXItc2VydmljZScpLm9uKCdjbGljaycsICcuaGlkZW1vcmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbGlzdCA9ICQodGhpcykucGFyZW50KCkuZmluZCgkKCdsaScpKTtcbiAgICAgICQodGhpcykucGFyZW50KCkuZmluZCgkKCdsaTp2aXNpYmxlJykpLnNsaWNlKDUsIGxpc3QubGVuZ3RoKS5oaWRlKCk7XG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdoaWRlbW9yZScpO1xuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnbG9hZG1vcmUnKTtcbiAgICAgICQodGhpcykuaHRtbCgnWGVtIHRow6ptJyk7XG4gICAgfSk7XG4gICAgJChcIi5jbG9zZVwiKS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICQodGhpcykucGFyZW50KCkudG9nZ2xlKCk7XG4gICAgfSk7XG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIGZvcmNlQ2hlY2soKTtcbiAgICAkKCcuaWRlYS1jb250ZW50JykuZmluZCgkKCcubW9yZURlczp2aXNpYmxlJykpLmhpZGUoKTtcbiAgICAkKCcuaWRlYS1jb250ZW50JykuZmluZCgkKCcubW9yZURlcycpKS5zbGljZSgwLCAyMCkuc2hvdygpO1xuICB9XG4gIGRpc21pc3NNb2RhbCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5pZGVhUGFyYW1zKSB7XG4gICAgICB2YXIgcGFyYW1zID0gdGhpcy5wcm9wcy5pZGVhUGFyYW1zXG4gICAgICBpZiAodGhpcy5wcm9wcy5zdWJQYXJhbXMpIHtcbiAgICAgICAgUm91dGVyLnB1c2hSb3V0ZShgL3ktdHVvbmcvJHtwYXJhbXN9P2Y9JHt0aGlzLnByb3BzLnN1YlBhcmFtc31gKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgUm91dGVyLnB1c2hSb3V0ZSgnaWRlYS5kZXRhaWwnLCB7cGFyYW1zOiBwYXJhbXN9KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBSb3V0ZXIucHVzaCgnL2lkZWEnLCAnL3ktdHVvbmcnKVxuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZGF0YXMgPSB0aGlzLnByb3BzLmRhdGEuaW1hZ2VzO1xuICAgIHZhciBuZXh0UGFnZUxpbmsgPSAgZGF0YXMubmV4dF9wYWdlX3VybCA/IHRoaXMucHJvcHMudXJsX3BhdGggKyBcIj9wYWdlPVwiICsgKGRhdGFzLmN1cnJlbnRfcGFnZSArIDEpIDogdW5kZWZpbmVkO1xuICAgIGNvbnN0IG1hc29ucnlPcHRpb25zID0ge1xuICAgICAgZ3V0dGVyOiAnLmdyaWRfX2d1dHRlci1zaXplcicsXG4gICAgICBpc09yaWdpbkxlZnQ6IHRydWVcbiAgICB9O1xuICAgIGNvbnN0IHtpbWFnZXMsIGgxLCBmaWx0ZXJfZGVmYXVsdCwgY29sb3JzLCBsaXN0QmFkZ2UsIGRldGFpbCwgcGFnZX0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qge3Bob3RvSWQsIHNsdWd9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dCB7Li4udGhpcy5wcm9wc30gbmF2bWVudT17ZmFsc2V9IGNvbnRhaW5lcj17ZmFsc2V9IGNzcz17Y3NzfT5cbiAgICAgICAge1xuICAgICAgICAgIHBob3RvSWQgP1xuICAgICAgICAgICAgPEltYWdlTW9kYWxcbiAgICAgICAgICAgICAgaWQ9e3Bob3RvSWR9XG4gICAgICAgICAgICAgIHNsdWc9e3NsdWd9XG4gICAgICAgICAgICAgIGRldGFpbD17ZGV0YWlsfVxuICAgICAgICAgICAgICBpbWFnZXM9e2ltYWdlc31cbiAgICAgICAgICAgICAgY3VycmVudFBhdGg9e2N1cnJlbnRQYXRofVxuICAgICAgICAgICAgICBpZGVhUGFyYW1zPXt0aGlzLnByb3BzLmlkZWFQYXJhbXN9XG4gICAgICAgICAgICAgIHN1YlBhcmFtcz17dGhpcy5wcm9wcy5zdWJQYXJhbXN9XG4gICAgICAgICAgICAgIG5leHRQYWdlVXJsPXt0aGlzLnN0YXRlLm5leHRVcmx9XG4gICAgICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gdGhpcy5kaXNtaXNzTW9kYWwoKX1cbiAgICAgICAgICAgIC8+IDogJydcbiAgICAgICAgfVxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57XG4gICAgICAgICAgYFxuICAgICAgICAgICAgI2xpZ2h0Ym94IC5uYXYtbGluazpmaXJzdC1jaGlsZHtcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlMmUyZTIgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNsaWdodGJveCAubmF2LWxpbmsge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNHJlbSAwLjdyZW0gIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2UyZTJlMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGBcbiAgICAgICAgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBzZXJ2aWNlIHB4LTQgYmctZ3JheVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0wIGNvbC1tZC0zIGNvbC1sZy0zIHB4LTNcIiBpZD1cInNpZGViYXJcIj5cbiAgICAgICAgICAgICAgPFNpZGViYXIgZmlsdGVyPXtmaWx0ZXJfZGVmYXVsdH0gY29sb3I9e2NvbG9yc30gcGFnZT17cGFnZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTkgY29sLWxnLTkgcHgtMFwiIGlkPVwiY2F0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcHgtMyBweS00XCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtZGFyayB0aXRsZSBtbC0xXCI+e2gxICYmIGgxfTwvaDE+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LXRhZ1wiPlxuICAgICAgICAgICAgICAgICAge2xpc3RCYWRnZSAmJiBsaXN0QmFkZ2UubWFwKCh2YWx1ZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e3ZhbHVlLnVyaX0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dmFsdWUudXJpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXBpbGwgYmFkZ2UtbGlnaHQgYm9yZGVyIGJvcmRlci1wcmltYXJ5IG1yLTIgbXktMSBzZXJ2aWNlLXRhZ1wiPnt2YWx1ZS5uYW1lX3RhZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImNsb3NlXCIgLz48L3NwYW4+PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxJbmZpbml0ZVNjcm9sbFxuICAgICAgICAgICAgICAgICAgcGFnZVN0YXJ0PXswfVxuICAgICAgICAgICAgICAgICAgbG9hZE1vcmU9e3RoaXMubG9hZEl0ZW1zLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICBoYXNNb3JlPXt0aGlzLnN0YXRlLmhhc01vcmVJdGVtc31cbiAgICAgICAgICAgICAgICAgIGxvYWRlcj17PGRpdiBjbGFzc05hbWU9XCJsb2FkZXJcIiBrZXk9J2N4Jz5Mb2FkaW5nIC4uLjwvZGl2Pn0+XG4gICAgICAgICAgICAgICAgICA8TWFzb25yeVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eycuZ3JpZCBhcmUtaW1hZ2VzLXVubG9hZGVkIG10LTMnfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlSW1hZ2VzTG9hZGVkPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17bWFzb25yeU9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgIHJlZj17YyA9PiB0aGlzLm1hc29ucnkgPSBjfVxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVPbkVhY2hJbWFnZUxvYWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRfX2NvbC1zaXplclwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZF9fZ3V0dGVyLXNpemVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGltYWdlcyAmJiBpbWFnZXMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZF9faXRlbSByb3VuZGVkXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvc2l0aW9uLWFic29sdXRlIHJvdW5kZWQgZC1ub25lIHVwbG9hZFwiPiA8aSBjbGFzc05hbWU9XCJmYSBmYS11cGxvYWRcIj48L2k+IEzGsHUg4bqjbmg8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgcm91dGU9XCJpbWFnZVwiIHBhcmFtcz17e2lkOiB2YWx1ZS5pZCwgc2x1ZzogdmFsdWUuc2x1Z319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KGUpID0+IHRoaXMuc2hvd1Bob3RvKGUsIHZhbHVlLmlkLCB2YWx1ZS5zbHVnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZCBvbmNlIHRocm90dGxlIG92ZXJmbG93IHBsYWNlaG9sZGVyPXs8UGxhY2Vob2xkZXIgZGF0YVNyYz17dmFsdWUubWVkaXVtX3BhdGh9IGFsdD17dmFsdWUubmFtZX0vPn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJyb3VuZGVkIGNhcmQtaW1nLXRvcFwiIHNyYz17dmFsdWUubWVkaXVtX3BhdGh9IGFsdD17dmFsdWUubmFtZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xhenlMb2FkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBpZGVhLWNvbnRlbnQgcHgtMSBwdC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXQtMiBmb250LTE1IHRleHQtYmxhY2stMTAwXCIgZGF0YS10aXRsZT17dmFsdWUubmFtZX0+e3ZhbHVlLm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTIgaW1hZ2VzLXRpdGxlIGZvbnQtMTQgdGV4dC1ibGFjay0xMDAgbW9yZURlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogdmFsdWUuZGVzY3JpcHRpb25zfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L01hc29ucnk+XG4gICAgICAgICAgICAgICAgPC9JbmZpbml0ZVNjcm9sbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaV9kZXNrdG9wIG15LTRcIj5cbiAgICAgICAgICAgICAgICA8UGFnaW5hdGlvblxuICAgICAgICAgICAgICAgICAgYWN0aXZlUGFnZT17dGhpcy5wcm9wcy5kYXRhLmltYWdlcy5jdXJyZW50X3BhZ2V9XG4gICAgICAgICAgICAgICAgICBpdGVtc0NvdW50UGVyUGFnZT17dGhpcy5wcm9wcy5kYXRhLmltYWdlcy5wZXJfcGFnZX1cbiAgICAgICAgICAgICAgICAgIHRvdGFsSXRlbXNDb3VudD17dGhpcy5wcm9wcy5kYXRhLmltYWdlcy50b3RhbH1cbiAgICAgICAgICAgICAgICAgIHBhZ2VSYW5nZURpc3BsYXllZD17NX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVQYWdlQ2hhbmdlKGUpfVxuICAgICAgICAgICAgICAgICAgZ2V0UGFnZVVybD17KGkpID0+IHRoaXMuZ2V0UGFnZVVybChpKX1cbiAgICAgICAgICAgICAgICAgIG5leHRQYWdlTGluaz17bmV4dFBhZ2VMaW5rfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=components/IdeaComponent.js */"
      }), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        className: "jsx-352178927" + " " + "container-fluid service px-4 bg-gray"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        className: "jsx-352178927" + " " + "row"
      }, _react.default.createElement("div", {
        id: "sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        className: "jsx-352178927" + " " + "col-0 col-md-3 col-lg-3 px-3"
      }, _react.default.createElement(_sideBar.default, {
        filter: filter_default,
        color: colors,
        page: page,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        }
      })), _react.default.createElement("div", {
        id: "cat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        className: "jsx-352178927" + " " + "col-12 col-md-9 col-lg-9 px-0"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        className: "jsx-352178927" + " " + "bg-white px-3 py-4"
      }, _react.default.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        className: "jsx-352178927" + " " + "text-dark title ml-1"
      }, h1 && h1), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        className: "jsx-352178927" + " " + "list-tag"
      }, listBadge && listBadge.map(function (value, index) {
        return _react.default.createElement(_routes.Link, {
          route: value.uri,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 209
          }
        }, _react.default.createElement("a", {
          href: value.uri,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 210
          },
          className: "jsx-352178927"
        }, _react.default.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 211
          },
          className: "jsx-352178927" + " " + "badge badge-pill badge-light border border-primary mr-2 my-1 service-tag"
        }, value.name_tag, _react.default.createElement("i", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212
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
            lineNumber: 221
          },
          className: "jsx-352178927" + " " + "loader"
        }, "Loading ..."),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
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
          lineNumber: 222
        }
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        className: "jsx-352178927" + " " + "grid__col-sizer"
      }), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        className: "jsx-352178927" + " " + "grid__gutter-sizer"
      }), images && images.map(function (value, index) {
        return _react.default.createElement("div", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 233
          },
          className: "jsx-352178927" + " " + "grid__item rounded"
        }, _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 234
          },
          className: "jsx-352178927" + " " + "card"
        }, _react.default.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 235
          },
          className: "jsx-352178927" + " " + "position-absolute rounded d-none upload"
        }, " ", _react.default.createElement("i", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 235
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
            lineNumber: 236
          }
        }, _react.default.createElement("a", {
          onClick: function onClick(e) {
            return _this2.showPhoto(e, value.id, value.slug);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 237
          },
          className: "jsx-352178927"
        }, _react.default.createElement(_reactLazyload.default, {
          once: true,
          throttle: true,
          overflow: true,
          placeholder: _react.default.createElement(_PlaceHolder.default, {
            dataSrc: value.medium_path,
            alt: value.name,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 238
            }
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 238
          }
        }, _react.default.createElement("img", {
          src: value.medium_path,
          alt: value.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 239
          },
          className: "jsx-352178927" + " " + "rounded card-img-top"
        })))), _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 243
          },
          className: "jsx-352178927" + " " + "card-body idea-content px-1 pt-1"
        }, _react.default.createElement("h2", {
          "data-title": value.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 244
          },
          className: "jsx-352178927" + " " + "mt-2 font-15 text-black-100"
        }, value.name), _react.default.createElement("p", {
          dangerouslySetInnerHTML: {
            __html: value.descriptions
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 245
          },
          className: "jsx-352178927" + " " + "mt-2 images-title font-14 text-black-100 moreDes"
        }))));
      })))), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
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
          lineNumber: 256
        }
      }))))));
    }
  }]);

  return IdeaComponent;
}(_react.default.Component);

exports.default = IdeaComponent;

/***/ })

})
//# sourceMappingURL=11.662a13241833736f63fb.hot-update.js.map