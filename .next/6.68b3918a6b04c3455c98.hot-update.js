webpackHotUpdate(6,{

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

var _reactMasonryComponent = _interopRequireDefault(__webpack_require__("./node_modules/react-masonry-component/lib/index.js"));

var _reactInfiniteScroller = _interopRequireDefault(__webpack_require__("./node_modules/react-infinite-scroller/index.js"));

var _imageModal = _interopRequireDefault(__webpack_require__("./components/image-modal.js"));

var _helpers = __webpack_require__("./libraries/helpers.js");

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
  } // componentWillMount(){
  //     this.setState({
  //         h1 : this.props.h1,
  //         filter_default : this.props.filter_default,
  //         color : this.props.colors,
  //         images: this.props.images,
  //         nextUrl: this.props.nextUrl,
  //         listBadge : this.props.listBadge ? this.props.listBadge : []
  //     })
  // }


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
              self.props.changeState(tracks, data.images.next_page_url); // self.setState({
              //     images: tracks,
              //     nextUrl: data.images.next_page_url,
              // });
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
          _routes.Router.pushRoute("/y-tuong/".concat(params, "?f=").concat(this.props.subParams, "&photoId=").concat(id, "&slug=").concat(slug), "/anh/".concat(id, "-").concat(slug));
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
          detail = _props.detail;
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
        css: "#lightbox .nav-link:first-child{border-left:1px solid #e2e2e2 !important;}#lightbox .nav-link{display:block;padding:0.4rem 0.7rem !important;border-left:none !important;border-color:#e2e2e2;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSWRlYUNvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1TFksQUFFNEMsQUFHM0IsY0FDbUIsMkJBSlMsTUFLZCw0QkFDUCxxQkFBQyIsImZpbGUiOiJjb21wb25lbnRzL0lkZWFDb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9teS1uZXh0LWFwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi9sYXlvdXQnO1xuaW1wb3J0IE1hc29ucnkgZnJvbSAncmVhY3QtbWFzb25yeS1jb21wb25lbnQnO1xuaW1wb3J0IEluZmluaXRlU2Nyb2xsIGZyb20gJ3JlYWN0LWluZmluaXRlLXNjcm9sbGVyJ1xuaW1wb3J0IEltYWdlTW9kYWwgZnJvbSAnLi9pbWFnZS1tb2RhbCc7XG5pbXBvcnQge21hcE9iamVjdCAsIHVjZmlyc3R9IGZyb20gJy4uL2xpYnJhcmllcy9oZWxwZXJzJ1xuaW1wb3J0IHtMaW5rfSBmcm9tICcuLi9yb3V0ZXMnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuY29uc3QgQVBJVVJMID0gcHJvY2Vzcy5lbnYuRE9NQUlOICsgcHJvY2Vzcy5lbnYuQVBJVVJJXG52YXIgY3VycmVudFBhdGggPSAnLydcbnZhciBhc1BhdGggPSAnLydcbmltcG9ydCB7Um91dGVyfSBmcm9tICcuLi9yb3V0ZXMnXG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlcy9mc2NyZWVuX2lkZWEuY3NzJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWRlYUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgaW1hZ2VzOiBbXSxcbiAgICAgICAgbmV4dFVybCA6IG51bGwsXG4gICAgICAgIGhhc01vcmVJdGVtczogdHJ1ZSxcbiAgICAgICAgaDEgOiBudWxsLFxuICAgICAgICBmaWx0ZXJfZGVmYXVsdCA6IFtdLFxuICAgICAgICBsaXN0QmFkZ2UgOiBbXVxuICAgIH1cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICBjdXJyZW50UGF0aCA9IHRoaXMucHJvcHMucGF0aFxuICAgICAgICBhc1BhdGggPSB0aGlzLnByb3BzLmFzUGF0aFxuICAgIH1cbiAgICAvLyBjb21wb25lbnRXaWxsTW91bnQoKXtcbiAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgLy8gICAgICAgICBoMSA6IHRoaXMucHJvcHMuaDEsXG4gICAgLy8gICAgICAgICBmaWx0ZXJfZGVmYXVsdCA6IHRoaXMucHJvcHMuZmlsdGVyX2RlZmF1bHQsXG4gICAgLy8gICAgICAgICBjb2xvciA6IHRoaXMucHJvcHMuY29sb3JzLFxuICAgIC8vICAgICAgICAgaW1hZ2VzOiB0aGlzLnByb3BzLmltYWdlcyxcbiAgICAvLyAgICAgICAgIG5leHRVcmw6IHRoaXMucHJvcHMubmV4dFVybCxcbiAgICAvLyAgICAgICAgIGxpc3RCYWRnZSA6IHRoaXMucHJvcHMubGlzdEJhZGdlID8gdGhpcy5wcm9wcy5saXN0QmFkZ2UgOiBbXVxuICAgIC8vICAgICB9KVxuICAgIC8vIH1cbiAgICBcbiAgICBsb2FkSXRlbXMocGFnZSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciB1cmwgPSAnJztcbiAgICAgICAgaWYodGhpcy5wcm9wcy5uZXh0VXJsKSB7XG4gICAgICAgICAgICB1cmwgPSB0aGlzLnByb3BzLm5leHRVcmw7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5wcm9wcy5uZXh0VXJsICE9IG51bGwpe1xuICAgICAgICAgICAgYXhpb3MuZ2V0KHVybClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3ApIHtcbiAgICAgICAgICAgICAgICBpZihyZXNwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0cmFja3MgPSBzZWxmLnByb3BzLmltYWdlcztcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSByZXNwLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5pbWFnZXMuZGF0YS5tYXAoKHRyYWNrKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFja3MucHVzaCh0cmFjayk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZihkYXRhLmltYWdlcy5uZXh0X3BhZ2VfdXJsICYmIGRhdGEuaW1hZ2VzLm5leHRfcGFnZV91cmwgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm9wcy5jaGFuZ2VTdGF0ZSh0cmFja3MsZGF0YS5pbWFnZXMubmV4dF9wYWdlX3VybClcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlbGYuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGltYWdlczogdHJhY2tzLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIG5leHRVcmw6IGRhdGEuaW1hZ2VzLm5leHRfcGFnZV91cmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc01vcmVJdGVtczogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICBcbiAgICB9XG4gICAgc2hvd1Bob3RvIChlLCBpZCAsIHNsdWcpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGlmKHRoaXMucHJvcHMuaWRlYVBhcmFtcyl7XG4gICAgICAgICAgICB2YXIgcGFyYW1zID0gdGhpcy5wcm9wcy5pZGVhUGFyYW1zXG4gICAgICAgICAgICBpZih0aGlzLnByb3BzLnN1YlBhcmFtcyl7XG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2hSb3V0ZShgL3ktdHVvbmcvJHtwYXJhbXN9P2Y9JHt0aGlzLnByb3BzLnN1YlBhcmFtc30mcGhvdG9JZD0ke2lkfSZzbHVnPSR7c2x1Z31gLGAvYW5oLyR7aWR9LSR7c2x1Z31gKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goYCR7Y3VycmVudFBhdGh9P3BhcmFtcz0ke3BhcmFtc30mcGhvdG9JZD0ke2lkfSZzbHVnPSR7c2x1Z31gLGAvYW5oLyR7aWR9LSR7c2x1Z31gKSBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBSb3V0ZXIucHVzaChgJHtjdXJyZW50UGF0aH0/cGhvdG9JZD0ke2lkfSZzbHVnPSR7c2x1Z31gLGAvYW5oLyR7aWR9LSR7c2x1Z31gKVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIHZhciBzaG93Q2hhciA9IDE1MDsgIC8vIEhvdyBtYW55IGNoYXJhY3RlcnMgYXJlIHNob3duIGJ5IGRlZmF1bHRcbiAgICAgICAgdmFyIGVsbGlwc2VzdGV4dCA9IFwiXCI7XG4gICAgICAgIHZhciBtb3JldGV4dCA9IFwiWGVtIHRow6ptID5cIjtcbiAgICAgICAgdmFyIGxlc3N0ZXh0ID0gXCJSw7p0IGfhu41uIDxcIjtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgICQoJy5tb3JlRGVzJykuZWFjaChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9ICQodGhpcykuaHRtbCgpO1xuICAgICAgICAgICAgaWYoY29udGVudC5sZW5ndGggPiBzaG93Q2hhcikge1xuICAgICAgICAgICAgICAgIHZhciBjID0gY29udGVudC5zdWJzdHIoMCwgc2hvd0NoYXIpO1xuICAgICAgICAgICAgICAgIHZhciBoID0gY29udGVudC5zdWJzdHIoc2hvd0NoYXIsIGNvbnRlbnQubGVuZ3RoIC0gc2hvd0NoYXIpO1xuICAgICAgICAgICAgICAgIHZhciBodG1sID0gYyArICc8c3BhbiBjbGFzcz1cIm1vcmVlbGxpcHNlc1wiPicgKyBlbGxpcHNlc3RleHQrICcmbmJzcDs8L3NwYW4+PHNwYW4gY2xhc3M9XCJtb3JlY29udGVudFwiPjxzcGFuPicgKyBoICsgJzwvc3Bhbj4mbmJzcDsmbmJzcDs8YSBocmVmPVwiXCIgY2xhc3M9XCJtb3JlbGlua1wiPicgKyBtb3JldGV4dCArICc8L2E+PC9zcGFuPic7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5odG1sKGh0bWwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoXCIubW9yZWxpbmtcIikuY2xpY2soZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoXCJsZXNzXCIpKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImxlc3NcIik7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5odG1sKG1vcmV0ZXh0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImxlc3NcIik7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5odG1sKGxlc3N0ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucHJldigpLnRvZ2dsZSgpO1xuICAgICAgICAgICAgJCh0aGlzKS5wcmV2KCkudG9nZ2xlKCk7XG4gICAgICAgICAgICBzZWxmLm1hc29ucnkucGVyZm9ybUxheW91dCgpICAgIDtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgICQoJy5zaWRlYmFyLXNlcnZpY2UgdWwnKS5lYWNoKGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgaWYgKCQodGhpcykuZmluZCgnbGknKS5sZW5ndGggPT0gJCh0aGlzKS5maW5kKCQoJ2xpOnZpc2libGUnKSkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5sb2FkbW9yZScpLmhpZGUoKTtcbiAgICAgICAgICAgIH1cblx0XHR9KTtcbiAgICAgICAgJCgnLnNpZGViYXItc2VydmljZScpLm9uKCdjbGljaycsJy5sb2FkbW9yZScsZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGxpc3QgPSAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJCgnbGknKSk7XG5cdFx0XHQkKHRoaXMpLnBhcmVudCgpLmZpbmQoJCgnbGk6aGlkZGVuJykpLnNob3coKTtcbiAgICAgICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PSAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJCgnbGk6dmlzaWJsZScpKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdsb2FkbW9yZScpO1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2hpZGVtb3JlJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5odG1sKCdUaHUgZ+G7jW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgICQoJy5zaWRlYmFyLXNlcnZpY2UnKS5vbignY2xpY2snLCcuaGlkZW1vcmUnLGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBsaXN0ID0gJCh0aGlzKS5wYXJlbnQoKS5maW5kKCQoJ2xpJykpO1xuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5maW5kKCQoJ2xpOnZpc2libGUnKSkuc2xpY2UoNSwgbGlzdC5sZW5ndGgpLmhpZGUoKTtcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2hpZGVtb3JlJyk7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdsb2FkbW9yZScpO1xuICAgICAgICAgICAgJCh0aGlzKS5odG1sKCdYZW0gdGjDqm0nKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQoXCIuY2xvc2VcIikuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcblx0ICAgIFx0JCh0aGlzKS5wYXJlbnQoKS50b2dnbGUoKTtcbiAgICAgICAgfSk7ICAgICAgICBcbiAgICB9XG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCl7XG4gICAgICAgIC8vIHZhciBsaXN0ID0gJCgnLmlkZWEtY29udGVudCcpLmZpbmQoJy5tb3JlRGVzJykubGVuZ3RoO1xuICAgICAgICAkKCcuaWRlYS1jb250ZW50JykuZmluZCgkKCcubW9yZURlczp2aXNpYmxlJykpLmhpZGUoKTtcbiAgICAgICAgJCgnLmlkZWEtY29udGVudCcpLmZpbmQoJCgnLm1vcmVEZXMnKSkuc2xpY2UoMCwgMjApLnNob3coKTtcblxuICAgIH1cbiAgICBkaXNtaXNzTW9kYWwgKCkge1xuICAgICAgICBpZih0aGlzLnByb3BzLmlkZWFQYXJhbXMpe1xuICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHRoaXMucHJvcHMuaWRlYVBhcmFtc1xuICAgICAgICAgICAgaWYodGhpcy5wcm9wcy5zdWJQYXJhbXMpe1xuICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoUm91dGUoYC95LXR1b25nLyR7cGFyYW1zfT9mPSR7dGhpcy5wcm9wcy5zdWJQYXJhbXN9YClcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoUm91dGUoJ2lkZWEuZGV0YWlsJywge3BhcmFtczogcGFyYW1zfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2lkZWEnLCcveS10dW9uZycpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICByZW5kZXIoKXtcbiAgICAgICAgY29uc3QgbWFzb25yeU9wdGlvbnMgPSB7XG4gICAgICAgICAgICBndXR0ZXI6ICcuZ3JpZF9fZ3V0dGVyLXNpemVyJyxcbiAgICAgICAgICAgIGlzT3JpZ2luTGVmdDogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgIGNvbnN0IHsgaW1hZ2VzICwgaDEgLGZpbHRlcl9kZWZhdWx0ICwgY29sb3JzICwgbGlzdEJhZGdlICwgZGV0YWlsfSA9IHRoaXMucHJvcHNcbiAgICAgICBjb25zdCB7IHBob3RvSWQgLCBzbHVnIH0gPSB0aGlzLnByb3BzO1xuICAgICAgIHJldHVybihcbiAgICAgICAgPExheW91dCB7Li4udGhpcy5wcm9wc30gbmF2bWVudT17ZmFsc2V9IGNvbnRhaW5lcj17ZmFsc2V9IGNzcz17Y3NzfT5cbiAgICAgICAge1xuICAgICAgICAgICAgcGhvdG9JZCA/XG4gICAgICAgICAgICA8SW1hZ2VNb2RhbFxuICAgICAgICAgICAgICAgIGlkPXtwaG90b0lkfVxuICAgICAgICAgICAgICAgIHNsdWc9e3NsdWd9XG4gICAgICAgICAgICAgICAgZGV0YWlsPXtkZXRhaWx9XG4gICAgICAgICAgICAgICAgaW1hZ2VzPXtpbWFnZXN9XG4gICAgICAgICAgICAgICAgY3VycmVudFBhdGg9e2N1cnJlbnRQYXRofVxuICAgICAgICAgICAgICAgIGlkZWFQYXJhbXM9e3RoaXMucHJvcHMuaWRlYVBhcmFtc31cbiAgICAgICAgICAgICAgICBzdWJQYXJhbXM9e3RoaXMucHJvcHMuc3ViUGFyYW1zfVxuICAgICAgICAgICAgICAgIG5leHRQYWdlVXJsPXt0aGlzLnN0YXRlLm5leHRVcmx9XG4gICAgICAgICAgICAgICAgb25EaXNtaXNzPXsoKSA9PiB0aGlzLmRpc21pc3NNb2RhbCgpfVxuICAgICAgICAgICAgLz4gOiAnJ1xuICAgICAgICB9XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntcbiAgICAgICAgICAgIGBcbiAgICAgICAgICAgICNsaWdodGJveCAubmF2LWxpbms6Zmlyc3QtY2hpbGR7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTJlMmUyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjbGlnaHRib3ggLm5hdi1saW5rIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjRyZW0gMC43cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICNlMmUyZTI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBgXG4gICAgICAgIH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgc2VydmljZSBweC00IGJnLWdyYXlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMCBjb2wtbWQtMyBjb2wtbGctMyBweC0zXCIgaWQ9XCJzaWRlYmFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxTaWRlYmFyIGZpbHRlcj17ZmlsdGVyX2RlZmF1bHR9IGNvbG9yPXtjb2xvcnN9PjwvU2lkZWJhcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtOSBjb2wtbGctOSBweC0wXCIgaWQ9XCJjYXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBweC0zIHB5LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtZGFyayB0aXRsZSBtbC0xXCI+eyBoMSAmJiBoMSB9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC10YWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RCYWRnZSAmJiBsaXN0QmFkZ2UubWFwKCh2YWx1ZSxpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggcm91dGU9e3ZhbHVlLnVyaX0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dmFsdWUudXJpfSA+PHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS1saWdodCBib3JkZXIgYm9yZGVyLXByaW1hcnkgbXItMiBteS0xIHNlcnZpY2UtdGFnXCI+e3ZhbHVlLm5hbWVfdGFnfSA8aSBjbGFzc05hbWU9XCJjbG9zZVwiPjwvaT48L3NwYW4+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8SW5maW5pdGVTY3JvbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTdGFydD17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRNb3JlPXt0aGlzLmxvYWRJdGVtcy5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFzTW9yZT17dGhpcy5zdGF0ZS5oYXNNb3JlSXRlbXN9XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkZXI9ezxkaXYgY2xhc3NOYW1lPVwibG9hZGVyXCIga2V5PSdjeCc+TG9hZGluZyAuLi48L2Rpdj59PiBcbiAgICAgICAgICAgICAgICAgICAgPE1hc29ucnlcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnLmdyaWQgYXJlLWltYWdlcy11bmxvYWRlZCBtdC0zJ30gXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVJbWFnZXNMb2FkZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXttYXNvbnJ5T3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgcmVmPXtjID0+IHRoaXMubWFzb25yeSA9IGN9XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZU9uRWFjaEltYWdlTG9hZD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZF9fY29sLXNpemVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRfX2d1dHRlci1zaXplclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlcyAmJiBpbWFnZXMubWFwKCh2YWx1ZSxpbmRleCkgPT4oIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRfX2l0ZW0gcm91bmRlZFwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9zaXRpb24tYWJzb2x1dGUgcm91bmRlZCBkLW5vbmUgdXBsb2FkXCI+IDxpIGNsYXNzTmFtZT1cImZhIGZhLXVwbG9hZFwiPjwvaT4gTMawdSDhuqNuaDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayByb3V0ZT1cImltYWdlXCIgcGFyYW1zPXt7IGlkOiB2YWx1ZS5pZCAsIHNsdWcgOiB2YWx1ZS5zbHVnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoZSkgPT4gIHRoaXMuc2hvd1Bob3RvKGUsIHZhbHVlLmlkICwgdmFsdWUuc2x1Zyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInJvdW5kZWQgY2FyZC1pbWctdG9wXCIgc3JjPXt2YWx1ZS5tZWRpdW1fcGF0aH0gYWx0PXt2YWx1ZS5uYW1lfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBpZGVhLWNvbnRlbnQgcHgtMSBwdC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtdC0yIGZvbnQtMTUgdGV4dC1ibGFjay0xMDBcIiBkYXRhLXRpdGxlPXt2YWx1ZS5uYW1lfT57dmFsdWUubmFtZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0yIGltYWdlcy10aXRsZSBmb250LTE0IHRleHQtYmxhY2stMTAwIG1vcmVEZXNcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogdmFsdWUuZGVzY3JpcHRpb25zfX0+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L01hc29ucnk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0luZmluaXRlU2Nyb2xsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgKVxuICAgfVxufVxuY2xhc3MgU2lkZWJhciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGNvbnN0IHsgZmlsdGVyICwgY29sb3IgfSA9IHRoaXMucHJvcHNcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXNlcnZpY2Ugcm93IGJnLXdoaXRlXCI+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtbWQtYmxvY2sgcHgtMiB3LTEwMCBzaWRlYmFyLXNlcnZpY2UtY29udGVudFwiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyICYmIGZpbHRlci5tYXAoKHZhbHVlLGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5kYXRhLmxlbmd0aCAhPSAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoaWxkLXNpZGViYXItc2VydmljZSBwYi0xIGNvbC0xMiBvZmZzZXQtbWQtMCBjb2wtbWQtMTIgcHgtMFwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiB3aWRnZXQgcC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtMTUgbWItM1wiPnt2YWx1ZS50ZXh0TmFtZX08c3BhbiBjbGFzc05hbWU9XCJmYSBmYS1jaGV2cm9uLXJpZ2h0IGQtYmxvY2sgZC1tZC1ub25lXCIgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD17XCIjZGVtb1wiK2luZGV4fT48L3NwYW4+PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZCBtYi0wIGNvbGxhcHNlIGQtbWQtYmxvY2tcIiBpZD17XCJkZW1vXCIraW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5kYXRhICYmIG1hcE9iamVjdCh2YWx1ZS5kYXRhLCBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBjbGFzc05hbWU9XCJweS0xIHJhZGlvXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIHJvdXRlPXt2YWx1ZS51cml9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmb250LTEzIGZvbnQtd2VpZ2h0LWxpZ2h0IHRleHQtZ3JheVwiPjxsYWJlbCBjbGFzc05hbWU9XCJwci0zXCI+e3ZhbHVlLm5hbWVfdGFnfTxzcGFuPnt2YWx1ZS50b3RhbF9kb2N9PC9zcGFuPjwvbGFiZWw+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibW9yZSBsb2FkbW9yZSBkLW5vbmUgZC1tZC1ibG9ja1wiPlhlbSB0aMOqbSA8aSBjbGFzc05hbWU9XCJsYSBsYS1hcnJvdy1jaXJjbGUtcmlnaHRcIj48L2k+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoaWxkLXNpZGViYXItc2VydmljZSBwYi0xIGNvbC0xMiBvZmZzZXQtbWQtMCBjb2wtbWQtMTIgcHgtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIHdpZGdldCBwLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC0xNVwiPk3DgFUgU+G6rkM8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImV4cGFuZC1saXN0XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZS1jb2xvciBtdC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvciAmJiBtYXBPYmplY3QoY29sb3IgLCBmdW5jdGlvbihpbmRleCx2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gIDxhIGhyZWY9e3ZhbHVlLnVyaX0gY2xhc3NOYW1lPVwidGV4dC1kYXJrIGJvcmRlciBib3JkZXItZ3JheVwiIGtleT17aW5kZXh9PjxzcGFuIGNsYXNzTmFtZT17XCJmbG9hdC1sZWZ0IFwiICsgdmFsdWUuY2xhc3N9IGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPXt2YWx1ZS5uYW1lX3RhZ30+PC9zcGFuPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufSJdfQ== */\n/*@ sourceURL=components/IdeaComponent.js */"
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
      }, _react.default.createElement(Sidebar, {
        filter: filter_default,
        color: colors,
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
          prefetch: true,
          route: value.uri,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 208
          }
        }, _react.default.createElement("a", {
          href: value.uri,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 209
          },
          className: "jsx-352178927"
        }, _react.default.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 209
          },
          className: "jsx-352178927" + " " + "badge badge-pill badge-light border border-primary mr-2 my-1 service-tag"
        }, value.name_tag, " ", _react.default.createElement("i", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 209
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
            lineNumber: 218
          },
          className: "jsx-352178927" + " " + "loader"
        }, "Loading ..."),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
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
          lineNumber: 219
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
        }, _react.default.createElement("img", {
          src: value.medium_path,
          alt: value.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 236
          },
          className: "jsx-352178927" + " " + "rounded card-img-top"
        }))), _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 239
          },
          className: "jsx-352178927" + " " + "card-body idea-content px-1 pt-1"
        }, _react.default.createElement("h2", {
          "data-title": value.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240
          },
          className: "jsx-352178927" + " " + "mt-2 font-15 text-black-100"
        }, value.name), _react.default.createElement("p", {
          dangerouslySetInnerHTML: {
            __html: value.descriptions
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 241
          },
          className: "jsx-352178927" + " " + "mt-2 images-title font-14 text-black-100 moreDes"
        }))));
      }))))))));
    }
  }]);

  return IdeaComponent;
}(_react.default.Component);

exports.default = IdeaComponent;

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
      var _props3 = this.props,
          filter = _props3.filter,
          color = _props3.color;
      return _react.default.createElement("div", {
        className: "sidebar-service row bg-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        }
      }, _react.default.createElement("div", {
        className: "d-md-block px-2 w-100 sidebar-service-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        }
      }, filter && filter.map(function (value, index) {
        return value.data.length != 0 && _react.default.createElement("div", {
          className: "child-sidebar-service pb-1 col-12 offset-md-0 col-md-12 px-0",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 271
          }
        }, _react.default.createElement("div", {
          className: "mt-2 widget p-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 272
          }
        }, _react.default.createElement("h3", {
          className: "font-15 mb-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 273
          }
        }, value.textName, _react.default.createElement("span", {
          className: "fa fa-chevron-right d-block d-md-none",
          "data-toggle": "collapse",
          "data-target": "#demo" + index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 273
          }
        })), _react.default.createElement("ul", {
          className: "list-unstyled mb-0 collapse d-md-block",
          id: "demo" + index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 275
          }
        }, value.data && (0, _helpers.mapObject)(value.data, function (index, value) {
          return _react.default.createElement("li", {
            className: "py-1 radio",
            key: index,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 278
            }
          }, _react.default.createElement(_routes.Link, {
            prefetch: true,
            route: value.uri,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 279
            }
          }, _react.default.createElement("a", {
            className: "font-13 font-weight-light text-gray",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 280
            }
          }, _react.default.createElement("label", {
            className: "pr-3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 280
            }
          }, value.name_tag, _react.default.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 280
            }
          }, value.total_doc)))));
        }), _react.default.createElement("span", {
          className: "more loadmore d-none d-md-block",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 285
          }
        }, "Xem th\xEAm ", _react.default.createElement("i", {
          className: "la la-arrow-circle-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 285
          }
        })))));
      }), _react.default.createElement("div", {
        className: "child-sidebar-service pb-1 col-12 offset-md-0 col-md-12 px-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        }
      }, _react.default.createElement("div", {
        className: "mt-2 widget p-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        }
      }, _react.default.createElement("h3", {
        className: "font-15",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        }
      }, "M\xC0U S\u1EAEC"), _react.default.createElement("span", {
        className: "expand-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        }
      }), _react.default.createElement("div", {
        className: "service-color mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        }
      }, color && (0, _helpers.mapObject)(color, function (index, value) {
        return _react.default.createElement("a", {
          href: value.uri,
          className: "text-dark border border-gray",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 299
          }
        }, _react.default.createElement("span", {
          className: "float-left " + value.class,
          "data-toggle": "tooltip",
          title: value.name_tag,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 299
          }
        }));
      }))))));
    }
  }]);

  return Sidebar;
}(_react.default.PureComponent);

/***/ })

})
//# sourceMappingURL=6.68b3918a6b04c3455c98.hot-update.js.map