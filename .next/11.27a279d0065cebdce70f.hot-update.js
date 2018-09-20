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
      (0, _reactLazyload.forceCheck)();
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
        css: "#lightbox .nav-link:first-child{border-left:1px solid #e2e2e2 !important;}#lightbox .nav-link{display:block;padding:0.4rem 0.7rem !important;border-left:none !important;border-color:#e2e2e2;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSWRlYUNvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1TFUsQUFFNEMsQUFHM0IsY0FDbUIsMkJBSlMsTUFLZCw0QkFDUCxxQkFBQyIsImZpbGUiOiJjb21wb25lbnRzL0lkZWFDb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9teS1uZXh0LWFwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi9sYXlvdXQnXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL3NpZGVCYXInXG5pbXBvcnQgTWFzb25yeSBmcm9tICdyZWFjdC1tYXNvbnJ5LWNvbXBvbmVudCdcbmltcG9ydCBJbmZpbml0ZVNjcm9sbCBmcm9tICdyZWFjdC1pbmZpbml0ZS1zY3JvbGxlcidcbmltcG9ydCBJbWFnZU1vZGFsIGZyb20gJy4vaW1hZ2UtbW9kYWwnXG5pbXBvcnQge0xpbmt9IGZyb20gJy4uL3JvdXRlcydcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmNvbnN0IEFQSVVSTCA9IHByb2Nlc3MuZW52LkRPTUFJTiArIHByb2Nlc3MuZW52LkFQSVVSSVxudmFyIGN1cnJlbnRQYXRoID0gJy8nXG52YXIgYXNQYXRoID0gJy8nXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnLi4vcm91dGVzJ1xuaW1wb3J0IGNzcyBmcm9tICdzdHlsZXMvZnNjcmVlbl9pZGVhLmNzcydcbmltcG9ydCBMYXp5TG9hZCAseyBmb3JjZUNoZWNrIH0gZnJvbSBcInJlYWN0LWxhenlsb2FkXCI7XG5pbXBvcnQgUGxhY2Vob2xkZXIgZnJvbSBcIi4vUGxhY2VIb2xkZXJcIjtcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCIuL3BhZ2luYXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWRlYUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGltYWdlczogW10sXG4gICAgbmV4dFVybDogbnVsbCxcbiAgICBoYXNNb3JlSXRlbXM6IHRydWUsXG4gICAgaDE6IG51bGwsXG4gICAgZmlsdGVyX2RlZmF1bHQ6IFtdLFxuICAgIGxpc3RCYWRnZTogW11cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgY3VycmVudFBhdGggPSB0aGlzLnByb3BzLnBhdGhcbiAgICBhc1BhdGggPSB0aGlzLnByb3BzLmFzUGF0aFxuXG4gIH1cblxuICBsb2FkSXRlbXMocGFnZSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgdXJsID0gJyc7XG4gICAgaWYgKHRoaXMucHJvcHMubmV4dFVybCkge1xuICAgICAgdXJsID0gdGhpcy5wcm9wcy5uZXh0VXJsO1xuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5uZXh0VXJsICE9IG51bGwpIHtcbiAgICAgIGF4aW9zLmdldCh1cmwpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgaWYgKHJlc3ApIHtcbiAgICAgICAgICAgIHZhciB0cmFja3MgPSBzZWxmLnByb3BzLmltYWdlcztcbiAgICAgICAgICAgIHZhciBkYXRhID0gcmVzcC5kYXRhXG4gICAgICAgICAgICBkYXRhLmltYWdlcy5kYXRhLm1hcCgodHJhY2spID0+IHtcbiAgICAgICAgICAgICAgdHJhY2tzLnB1c2godHJhY2spO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoZGF0YS5pbWFnZXMubmV4dF9wYWdlX3VybCAmJiBkYXRhLmltYWdlcy5uZXh0X3BhZ2VfdXJsICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgc2VsZi5wcm9wcy5jaGFuZ2VTdGF0ZSh0cmFja3MsIGRhdGEuaW1hZ2VzLm5leHRfcGFnZV91cmwpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZWxmLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBoYXNNb3JlSXRlbXM6IGZhbHNlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gIH1cbiAgZ2V0UGFnZVVybChpKSB7XG4gICAgbGV0IHVybCA9IFwiXCI7XG4gICAgaWYgKHRoaXMucHJvcHMudXJsX3BhdGgpIHtcbiAgICAgIHVybCA9IHRoaXMucHJvcHMudXJsX3BhdGhcbiAgICB9XG4gICAgcmV0dXJuIHVybCArIFwiP3BhZ2U9XCIgKyBpO1xuICB9XG4gIHNob3dQaG90byhlLCBpZCwgc2x1Zykge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGlmICh0aGlzLnByb3BzLmlkZWFQYXJhbXMpIHtcbiAgICAgIHZhciBwYXJhbXMgPSB0aGlzLnByb3BzLmlkZWFQYXJhbXNcbiAgICAgIGlmICh0aGlzLnByb3BzLnN1YlBhcmFtcykge1xuICAgICAgICBSb3V0ZXIucHVzaChgJHtjdXJyZW50UGF0aH0/cGFyYW1zPSR7cGFyYW1zfSZmPSR7dGhpcy5wcm9wcy5zdWJQYXJhbXN9JnBob3RvSWQ9JHtpZH0mc2x1Zz0ke3NsdWd9YCwgYC9hbmgvJHtpZH0tJHtzbHVnfWApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBSb3V0ZXIucHVzaChgJHtjdXJyZW50UGF0aH0/cGFyYW1zPSR7cGFyYW1zfSZwaG90b0lkPSR7aWR9JnNsdWc9JHtzbHVnfWAsIGAvYW5oLyR7aWR9LSR7c2x1Z31gKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBSb3V0ZXIucHVzaChgJHtjdXJyZW50UGF0aH0/cGhvdG9JZD0ke2lkfSZzbHVnPSR7c2x1Z31gLCBgL2FuaC8ke2lkfS0ke3NsdWd9YClcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgZm9yY2VDaGVjaygpO1xuICAgIHZhciBzaG93Q2hhciA9IDE1MDsgIC8vIEhvdyBtYW55IGNoYXJhY3RlcnMgYXJlIHNob3duIGJ5IGRlZmF1bHRcbiAgICB2YXIgZWxsaXBzZXN0ZXh0ID0gXCJcIjtcbiAgICB2YXIgbW9yZXRleHQgPSBcIlhlbSB0aMOqbSA+XCI7XG4gICAgdmFyIGxlc3N0ZXh0ID0gXCJSw7p0IGfhu41uIDxcIjtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAkKCcubW9yZURlcycpLmVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBjb250ZW50ID0gJCh0aGlzKS5odG1sKCk7XG4gICAgICBpZiAoY29udGVudC5sZW5ndGggPiBzaG93Q2hhcikge1xuICAgICAgICB2YXIgYyA9IGNvbnRlbnQuc3Vic3RyKDAsIHNob3dDaGFyKTtcbiAgICAgICAgdmFyIGggPSBjb250ZW50LnN1YnN0cihzaG93Q2hhciwgY29udGVudC5sZW5ndGggLSBzaG93Q2hhcik7XG4gICAgICAgIHZhciBodG1sID0gYyArICc8c3BhbiBjbGFzcz1cIm1vcmVlbGxpcHNlc1wiPicgKyBlbGxpcHNlc3RleHQgKyAnJm5ic3A7PC9zcGFuPjxzcGFuIGNsYXNzPVwibW9yZWNvbnRlbnRcIj48c3Bhbj4nICsgaCArICc8L3NwYW4+Jm5ic3A7Jm5ic3A7PGEgaHJlZj1cIlwiIGNsYXNzPVwibW9yZWxpbmtcIj4nICsgbW9yZXRleHQgKyAnPC9hPjwvc3Bhbj4nO1xuICAgICAgICAkKHRoaXMpLmh0bWwoaHRtbCk7XG4gICAgICB9XG5cbiAgICB9KTtcbiAgICAkKFwiLm1vcmVsaW5rXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwibGVzc1wiKSkge1xuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwibGVzc1wiKTtcbiAgICAgICAgJCh0aGlzKS5odG1sKG1vcmV0ZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJsZXNzXCIpO1xuICAgICAgICAkKHRoaXMpLmh0bWwobGVzc3RleHQpO1xuICAgICAgfVxuICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wcmV2KCkudG9nZ2xlKCk7XG4gICAgICAkKHRoaXMpLnByZXYoKS50b2dnbGUoKTtcbiAgICAgIHNlbGYubWFzb25yeS5wZXJmb3JtTGF5b3V0KCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgJCgnLnNpZGViYXItc2VydmljZSB1bCcpLmVhY2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmICgkKHRoaXMpLmZpbmQoJ2xpJykubGVuZ3RoID09ICQodGhpcykuZmluZCgkKCdsaTp2aXNpYmxlJykpLmxlbmd0aCkge1xuICAgICAgICAkKHRoaXMpLmZpbmQoJy5sb2FkbW9yZScpLmhpZGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAkKCcuc2lkZWJhci1zZXJ2aWNlJykub24oJ2NsaWNrJywgJy5sb2FkbW9yZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBsaXN0ID0gJCh0aGlzKS5wYXJlbnQoKS5maW5kKCQoJ2xpJykpO1xuICAgICAgJCh0aGlzKS5wYXJlbnQoKS5maW5kKCQoJ2xpOmhpZGRlbicpKS5zaG93KCk7XG4gICAgICBpZiAobGlzdC5sZW5ndGggPT0gJCh0aGlzKS5wYXJlbnQoKS5maW5kKCQoJ2xpOnZpc2libGUnKSkubGVuZ3RoKSB7XG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2xvYWRtb3JlJyk7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2hpZGVtb3JlJyk7XG4gICAgICAgICQodGhpcykuaHRtbCgnVGh1IGfhu41uJyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgJCgnLnNpZGViYXItc2VydmljZScpLm9uKCdjbGljaycsICcuaGlkZW1vcmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbGlzdCA9ICQodGhpcykucGFyZW50KCkuZmluZCgkKCdsaScpKTtcbiAgICAgICQodGhpcykucGFyZW50KCkuZmluZCgkKCdsaTp2aXNpYmxlJykpLnNsaWNlKDUsIGxpc3QubGVuZ3RoKS5oaWRlKCk7XG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdoaWRlbW9yZScpO1xuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnbG9hZG1vcmUnKTtcbiAgICAgICQodGhpcykuaHRtbCgnWGVtIHRow6ptJyk7XG4gICAgfSk7XG4gICAgJChcIi5jbG9zZVwiKS5jbGljayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICQodGhpcykucGFyZW50KCkudG9nZ2xlKCk7XG4gICAgfSk7XG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIC8vIHZhciBsaXN0ID0gJCgnLmlkZWEtY29udGVudCcpLmZpbmQoJy5tb3JlRGVzJykubGVuZ3RoO1xuICAgICQoJy5pZGVhLWNvbnRlbnQnKS5maW5kKCQoJy5tb3JlRGVzOnZpc2libGUnKSkuaGlkZSgpO1xuICAgICQoJy5pZGVhLWNvbnRlbnQnKS5maW5kKCQoJy5tb3JlRGVzJykpLnNsaWNlKDAsIDIwKS5zaG93KCk7XG4gIH1cbiAgZGlzbWlzc01vZGFsKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmlkZWFQYXJhbXMpIHtcbiAgICAgIHZhciBwYXJhbXMgPSB0aGlzLnByb3BzLmlkZWFQYXJhbXNcbiAgICAgIGlmICh0aGlzLnByb3BzLnN1YlBhcmFtcykge1xuICAgICAgICBSb3V0ZXIucHVzaFJvdXRlKGAveS10dW9uZy8ke3BhcmFtc30/Zj0ke3RoaXMucHJvcHMuc3ViUGFyYW1zfWApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBSb3V0ZXIucHVzaFJvdXRlKCdpZGVhLmRldGFpbCcsIHtwYXJhbXM6IHBhcmFtc30pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIFJvdXRlci5wdXNoKCcvaWRlYScsICcveS10dW9uZycpXG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBkYXRhcyA9IHRoaXMucHJvcHMuZGF0YS5pbWFnZXM7XG4gICAgdmFyIG5leHRQYWdlTGluayA9ICBkYXRhcy5uZXh0X3BhZ2VfdXJsID8gdGhpcy5wcm9wcy51cmxfcGF0aCArIFwiP3BhZ2U9XCIgKyAoZGF0YXMuY3VycmVudF9wYWdlICsgMSkgOiB1bmRlZmluZWQ7XG4gICAgY29uc3QgbWFzb25yeU9wdGlvbnMgPSB7XG4gICAgICBndXR0ZXI6ICcuZ3JpZF9fZ3V0dGVyLXNpemVyJyxcbiAgICAgIGlzT3JpZ2luTGVmdDogdHJ1ZVxuICAgIH07XG4gICAgY29uc3Qge2ltYWdlcywgaDEsIGZpbHRlcl9kZWZhdWx0LCBjb2xvcnMsIGxpc3RCYWRnZSwgZGV0YWlsLCBwYWdlfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7cGhvdG9JZCwgc2x1Z30gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0IHsuLi50aGlzLnByb3BzfSBuYXZtZW51PXtmYWxzZX0gY29udGFpbmVyPXtmYWxzZX0gY3NzPXtjc3N9PlxuICAgICAgICB7XG4gICAgICAgICAgcGhvdG9JZCA/XG4gICAgICAgICAgICA8SW1hZ2VNb2RhbFxuICAgICAgICAgICAgICBpZD17cGhvdG9JZH1cbiAgICAgICAgICAgICAgc2x1Zz17c2x1Z31cbiAgICAgICAgICAgICAgZGV0YWlsPXtkZXRhaWx9XG4gICAgICAgICAgICAgIGltYWdlcz17aW1hZ2VzfVxuICAgICAgICAgICAgICBjdXJyZW50UGF0aD17Y3VycmVudFBhdGh9XG4gICAgICAgICAgICAgIGlkZWFQYXJhbXM9e3RoaXMucHJvcHMuaWRlYVBhcmFtc31cbiAgICAgICAgICAgICAgc3ViUGFyYW1zPXt0aGlzLnByb3BzLnN1YlBhcmFtc31cbiAgICAgICAgICAgICAgbmV4dFBhZ2VVcmw9e3RoaXMuc3RhdGUubmV4dFVybH1cbiAgICAgICAgICAgICAgb25EaXNtaXNzPXsoKSA9PiB0aGlzLmRpc21pc3NNb2RhbCgpfVxuICAgICAgICAgICAgLz4gOiAnJ1xuICAgICAgICB9XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntcbiAgICAgICAgICBgXG4gICAgICAgICAgICAjbGlnaHRib3ggLm5hdi1saW5rOmZpcnN0LWNoaWxke1xuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2UyZTJlMiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI2xpZ2h0Ym94IC5uYXYtbGluayB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC40cmVtIDAuN3JlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZTJlMmUyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYFxuICAgICAgICB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHNlcnZpY2UgcHgtNCBiZy1ncmF5XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTAgY29sLW1kLTMgY29sLWxnLTMgcHgtM1wiIGlkPVwic2lkZWJhclwiPlxuICAgICAgICAgICAgICA8U2lkZWJhciBmaWx0ZXI9e2ZpbHRlcl9kZWZhdWx0fSBjb2xvcj17Y29sb3JzfSBwYWdlPXtwYWdlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtOSBjb2wtbGctOSBweC0wXCIgaWQ9XCJjYXRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBweC0zIHB5LTRcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1kYXJrIHRpdGxlIG1sLTFcIj57aDEgJiYgaDF9PC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtdGFnXCI+XG4gICAgICAgICAgICAgICAgICB7bGlzdEJhZGdlICYmIGxpc3RCYWRnZS5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8TGluayByb3V0ZT17dmFsdWUudXJpfSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXt2YWx1ZS51cml9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS1saWdodCBib3JkZXIgYm9yZGVyLXByaW1hcnkgbXItMiBteS0xIHNlcnZpY2UtdGFnXCI+e3ZhbHVlLm5hbWVfdGFnfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiY2xvc2VcIiAvPjwvc3Bhbj48L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPEluZmluaXRlU2Nyb2xsXG4gICAgICAgICAgICAgICAgICBwYWdlU3RhcnQ9ezB9XG4gICAgICAgICAgICAgICAgICBsb2FkTW9yZT17dGhpcy5sb2FkSXRlbXMuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgIGhhc01vcmU9e3RoaXMuc3RhdGUuaGFzTW9yZUl0ZW1zfVxuICAgICAgICAgICAgICAgICAgbG9hZGVyPXs8ZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiIGtleT0nY3gnPkxvYWRpbmcgLi4uPC9kaXY+fT5cbiAgICAgICAgICAgICAgICAgIDxNYXNvbnJ5XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Jy5ncmlkIGFyZS1pbWFnZXMtdW5sb2FkZWQgbXQtMyd9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVJbWFnZXNMb2FkZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXttYXNvbnJ5T3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgcmVmPXtjID0+IHRoaXMubWFzb25yeSA9IGN9XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZU9uRWFjaEltYWdlTG9hZD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZF9fY29sLXNpemVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkX19ndXR0ZXItc2l6ZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgaW1hZ2VzICYmIGltYWdlcy5tYXAoKHZhbHVlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkX19pdGVtIHJvdW5kZWRcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9zaXRpb24tYWJzb2x1dGUgcm91bmRlZCBkLW5vbmUgdXBsb2FkXCI+IDxpIGNsYXNzTmFtZT1cImZhIGZhLXVwbG9hZFwiPjwvaT4gTMawdSDhuqNuaDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayByb3V0ZT1cImltYWdlXCIgcGFyYW1zPXt7aWQ6IHZhbHVlLmlkLCBzbHVnOiB2YWx1ZS5zbHVnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoZSkgPT4gdGhpcy5zaG93UGhvdG8oZSwgdmFsdWUuaWQsIHZhbHVlLnNsdWcpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhenlMb2FkIG9uY2UgdGhyb3R0bGUgcGxhY2Vob2xkZXI9ezxQbGFjZWhvbGRlciBkYXRhU3JjPXt2YWx1ZS5tZWRpdW1fcGF0aH0gYWx0PXt2YWx1ZS5uYW1lfS8+fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInJvdW5kZWQgY2FyZC1pbWctdG9wXCIgc3JjPXt2YWx1ZS5tZWRpdW1fcGF0aH0gYWx0PXt2YWx1ZS5uYW1lfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF6eUxvYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGlkZWEtY29udGVudCBweC0xIHB0LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtdC0yIGZvbnQtMTUgdGV4dC1ibGFjay0xMDBcIiBkYXRhLXRpdGxlPXt2YWx1ZS5uYW1lfT57dmFsdWUubmFtZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMiBpbWFnZXMtdGl0bGUgZm9udC0xNCB0ZXh0LWJsYWNrLTEwMCBtb3JlRGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiB2YWx1ZS5kZXNjcmlwdGlvbnN9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDwvTWFzb25yeT5cbiAgICAgICAgICAgICAgICA8L0luZmluaXRlU2Nyb2xsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpX2Rlc2t0b3AgbXktNFwiPlxuICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uXG4gICAgICAgICAgICAgICAgICBhY3RpdmVQYWdlPXt0aGlzLnByb3BzLmRhdGEuaW1hZ2VzLmN1cnJlbnRfcGFnZX1cbiAgICAgICAgICAgICAgICAgIGl0ZW1zQ291bnRQZXJQYWdlPXt0aGlzLnByb3BzLmRhdGEuaW1hZ2VzLnBlcl9wYWdlfVxuICAgICAgICAgICAgICAgICAgdG90YWxJdGVtc0NvdW50PXt0aGlzLnByb3BzLmRhdGEuaW1hZ2VzLnRvdGFsfVxuICAgICAgICAgICAgICAgICAgcGFnZVJhbmdlRGlzcGxheWVkPXs1fVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB0aGlzLmhhbmRsZVBhZ2VDaGFuZ2UoZSl9XG4gICAgICAgICAgICAgICAgICBnZXRQYWdlVXJsPXsoaSkgPT4gdGhpcy5nZXRQYWdlVXJsKGkpfVxuICAgICAgICAgICAgICAgICAgbmV4dFBhZ2VMaW5rPXtuZXh0UGFnZUxpbmt9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/IdeaComponent.js */"
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
//# sourceMappingURL=11.27a279d0065cebdce70f.hot-update.js.map