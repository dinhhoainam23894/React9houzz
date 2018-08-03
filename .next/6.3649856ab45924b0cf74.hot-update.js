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
          console.log(this.props.subParams);

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
          lineNumber: 169
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
          lineNumber: 172
        }
      }) : '', _react.default.createElement(_style.default, {
        styleId: "352178927",
        css: "#lightbox .nav-link:first-child{border-left:1px solid #e2e2e2 !important;}#lightbox .nav-link{display:block;padding:0.4rem 0.7rem !important;border-left:none !important;border-color:#e2e2e2;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSWRlYUNvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3TFksQUFFNEMsQUFHM0IsY0FDbUIsMkJBSlMsTUFLZCw0QkFDUCxxQkFBQyIsImZpbGUiOiJjb21wb25lbnRzL0lkZWFDb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9teS1uZXh0LWFwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi9sYXlvdXQnO1xuaW1wb3J0IE1hc29ucnkgZnJvbSAncmVhY3QtbWFzb25yeS1jb21wb25lbnQnO1xuaW1wb3J0IEluZmluaXRlU2Nyb2xsIGZyb20gJ3JlYWN0LWluZmluaXRlLXNjcm9sbGVyJ1xuaW1wb3J0IEltYWdlTW9kYWwgZnJvbSAnLi9pbWFnZS1tb2RhbCc7XG5pbXBvcnQge21hcE9iamVjdCAsIHVjZmlyc3R9IGZyb20gJy4uL2xpYnJhcmllcy9oZWxwZXJzJ1xuaW1wb3J0IHtMaW5rfSBmcm9tICcuLi9yb3V0ZXMnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuY29uc3QgQVBJVVJMID0gcHJvY2Vzcy5lbnYuRE9NQUlOICsgcHJvY2Vzcy5lbnYuQVBJVVJJXG52YXIgY3VycmVudFBhdGggPSAnLydcbnZhciBhc1BhdGggPSAnLydcbmltcG9ydCB7Um91dGVyfSBmcm9tICcuLi9yb3V0ZXMnXG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlcy9mc2NyZWVuX2lkZWEuY3NzJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWRlYUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgaW1hZ2VzOiBbXSxcbiAgICAgICAgbmV4dFVybCA6IG51bGwsXG4gICAgICAgIGhhc01vcmVJdGVtczogdHJ1ZSxcbiAgICAgICAgaDEgOiBudWxsLFxuICAgICAgICBmaWx0ZXJfZGVmYXVsdCA6IFtdLFxuICAgICAgICBsaXN0QmFkZ2UgOiBbXVxuICAgIH1cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICBjdXJyZW50UGF0aCA9IHRoaXMucHJvcHMucGF0aFxuICAgICAgICBhc1BhdGggPSB0aGlzLnByb3BzLmFzUGF0aFxuICAgIH1cbiAgICAvLyBjb21wb25lbnRXaWxsTW91bnQoKXtcbiAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgLy8gICAgICAgICBoMSA6IHRoaXMucHJvcHMuaDEsXG4gICAgLy8gICAgICAgICBmaWx0ZXJfZGVmYXVsdCA6IHRoaXMucHJvcHMuZmlsdGVyX2RlZmF1bHQsXG4gICAgLy8gICAgICAgICBjb2xvciA6IHRoaXMucHJvcHMuY29sb3JzLFxuICAgIC8vICAgICAgICAgaW1hZ2VzOiB0aGlzLnByb3BzLmltYWdlcyxcbiAgICAvLyAgICAgICAgIG5leHRVcmw6IHRoaXMucHJvcHMubmV4dFVybCxcbiAgICAvLyAgICAgICAgIGxpc3RCYWRnZSA6IHRoaXMucHJvcHMubGlzdEJhZGdlID8gdGhpcy5wcm9wcy5saXN0QmFkZ2UgOiBbXVxuICAgIC8vICAgICB9KVxuICAgIC8vIH1cbiAgICBcbiAgICBsb2FkSXRlbXMocGFnZSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciB1cmwgPSAnJztcbiAgICAgICAgaWYodGhpcy5wcm9wcy5uZXh0VXJsKSB7XG4gICAgICAgICAgICB1cmwgPSB0aGlzLnByb3BzLm5leHRVcmw7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5wcm9wcy5uZXh0VXJsICE9IG51bGwpe1xuICAgICAgICAgICAgYXhpb3MuZ2V0KHVybClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3ApIHtcbiAgICAgICAgICAgICAgICBpZihyZXNwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0cmFja3MgPSBzZWxmLnByb3BzLmltYWdlcztcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSByZXNwLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5pbWFnZXMuZGF0YS5tYXAoKHRyYWNrKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFja3MucHVzaCh0cmFjayk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZihkYXRhLmltYWdlcy5uZXh0X3BhZ2VfdXJsICYmIGRhdGEuaW1hZ2VzLm5leHRfcGFnZV91cmwgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm9wcy5jaGFuZ2VTdGF0ZSh0cmFja3MsZGF0YS5pbWFnZXMubmV4dF9wYWdlX3VybClcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlbGYuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGltYWdlczogdHJhY2tzLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIG5leHRVcmw6IGRhdGEuaW1hZ2VzLm5leHRfcGFnZV91cmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc01vcmVJdGVtczogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICBcbiAgICB9XG4gICAgc2hvd1Bob3RvIChlLCBpZCAsIHNsdWcpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGlmKHRoaXMucHJvcHMuaWRlYVBhcmFtcyl7XG4gICAgICAgICAgICB2YXIgcGFyYW1zID0gdGhpcy5wcm9wcy5pZGVhUGFyYW1zXG4gICAgICAgICAgICBpZih0aGlzLnByb3BzLnN1YlBhcmFtcyl7XG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2hSb3V0ZShgL3ktdHVvbmcvJHtwYXJhbXN9P2Y9JHt0aGlzLnByb3BzLnN1YlBhcmFtc30mcGhvdG9JZD0ke2lkfSZzbHVnPSR7c2x1Z31gLGAvYW5oLyR7aWR9LSR7c2x1Z31gKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goYCR7Y3VycmVudFBhdGh9P3BhcmFtcz0ke3BhcmFtc30mcGhvdG9JZD0ke2lkfSZzbHVnPSR7c2x1Z31gLGAvYW5oLyR7aWR9LSR7c2x1Z31gKSBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBSb3V0ZXIucHVzaChgJHtjdXJyZW50UGF0aH0/cGhvdG9JZD0ke2lkfSZzbHVnPSR7c2x1Z31gLGAvYW5oLyR7aWR9LSR7c2x1Z31gKVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgICAgIHZhciBzaG93Q2hhciA9IDE1MDsgIC8vIEhvdyBtYW55IGNoYXJhY3RlcnMgYXJlIHNob3duIGJ5IGRlZmF1bHRcbiAgICAgICAgdmFyIGVsbGlwc2VzdGV4dCA9IFwiXCI7XG4gICAgICAgIHZhciBtb3JldGV4dCA9IFwiWGVtIHRow6ptID5cIjtcbiAgICAgICAgdmFyIGxlc3N0ZXh0ID0gXCJSw7p0IGfhu41uIDxcIjtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgICQoJy5tb3JlRGVzJykuZWFjaChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9ICQodGhpcykuaHRtbCgpO1xuICAgICAgICAgICAgaWYoY29udGVudC5sZW5ndGggPiBzaG93Q2hhcikge1xuICAgICAgICAgICAgICAgIHZhciBjID0gY29udGVudC5zdWJzdHIoMCwgc2hvd0NoYXIpO1xuICAgICAgICAgICAgICAgIHZhciBoID0gY29udGVudC5zdWJzdHIoc2hvd0NoYXIsIGNvbnRlbnQubGVuZ3RoIC0gc2hvd0NoYXIpO1xuICAgICAgICAgICAgICAgIHZhciBodG1sID0gYyArICc8c3BhbiBjbGFzcz1cIm1vcmVlbGxpcHNlc1wiPicgKyBlbGxpcHNlc3RleHQrICcmbmJzcDs8L3NwYW4+PHNwYW4gY2xhc3M9XCJtb3JlY29udGVudFwiPjxzcGFuPicgKyBoICsgJzwvc3Bhbj4mbmJzcDsmbmJzcDs8YSBocmVmPVwiXCIgY2xhc3M9XCJtb3JlbGlua1wiPicgKyBtb3JldGV4dCArICc8L2E+PC9zcGFuPic7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5odG1sKGh0bWwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoXCIubW9yZWxpbmtcIikuY2xpY2soZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoXCJsZXNzXCIpKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImxlc3NcIik7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5odG1sKG1vcmV0ZXh0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImxlc3NcIik7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5odG1sKGxlc3N0ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucHJldigpLnRvZ2dsZSgpO1xuICAgICAgICAgICAgJCh0aGlzKS5wcmV2KCkudG9nZ2xlKCk7XG4gICAgICAgICAgICBzZWxmLm1hc29ucnkucGVyZm9ybUxheW91dCgpICAgIDtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgICQoJy5zaWRlYmFyLXNlcnZpY2UgdWwnKS5lYWNoKGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgaWYgKCQodGhpcykuZmluZCgnbGknKS5sZW5ndGggPT0gJCh0aGlzKS5maW5kKCQoJ2xpOnZpc2libGUnKSkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5sb2FkbW9yZScpLmhpZGUoKTtcbiAgICAgICAgICAgIH1cblx0XHR9KTtcbiAgICAgICAgJCgnLnNpZGViYXItc2VydmljZScpLm9uKCdjbGljaycsJy5sb2FkbW9yZScsZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGxpc3QgPSAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJCgnbGknKSk7XG5cdFx0XHQkKHRoaXMpLnBhcmVudCgpLmZpbmQoJCgnbGk6aGlkZGVuJykpLnNob3coKTtcbiAgICAgICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PSAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJCgnbGk6dmlzaWJsZScpKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdsb2FkbW9yZScpO1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2hpZGVtb3JlJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5odG1sKCdUaHUgZ+G7jW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgICQoJy5zaWRlYmFyLXNlcnZpY2UnKS5vbignY2xpY2snLCcuaGlkZW1vcmUnLGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBsaXN0ID0gJCh0aGlzKS5wYXJlbnQoKS5maW5kKCQoJ2xpJykpO1xuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5maW5kKCQoJ2xpOnZpc2libGUnKSkuc2xpY2UoNSwgbGlzdC5sZW5ndGgpLmhpZGUoKTtcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2hpZGVtb3JlJyk7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdsb2FkbW9yZScpO1xuICAgICAgICAgICAgJCh0aGlzKS5odG1sKCdYZW0gdGjDqm0nKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQoXCIuY2xvc2VcIikuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcblx0ICAgIFx0JCh0aGlzKS5wYXJlbnQoKS50b2dnbGUoKTtcbiAgICAgICAgfSk7ICAgICAgICBcbiAgICB9XG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCl7XG4gICAgICAgIC8vIHZhciBsaXN0ID0gJCgnLmlkZWEtY29udGVudCcpLmZpbmQoJy5tb3JlRGVzJykubGVuZ3RoO1xuICAgICAgICAkKCcuaWRlYS1jb250ZW50JykuZmluZCgkKCcubW9yZURlczp2aXNpYmxlJykpLmhpZGUoKTtcbiAgICAgICAgJCgnLmlkZWEtY29udGVudCcpLmZpbmQoJCgnLm1vcmVEZXMnKSkuc2xpY2UoMCwgMjApLnNob3coKTtcblxuICAgIH1cbiAgICBkaXNtaXNzTW9kYWwgKCkge1xuICAgICAgICBpZih0aGlzLnByb3BzLmlkZWFQYXJhbXMpe1xuICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHRoaXMucHJvcHMuaWRlYVBhcmFtc1xuICAgICAgICAgICAgaWYodGhpcy5wcm9wcy5zdWJQYXJhbXMpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuc3ViUGFyYW1zKTtcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaFJvdXRlKGAveS10dW9uZy8ke3BhcmFtc30/Zj0ke3RoaXMucHJvcHMuc3ViUGFyYW1zfWApXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaFJvdXRlKCdpZGVhLmRldGFpbCcsIHtwYXJhbXM6IHBhcmFtc30pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgUm91dGVyLnB1c2goJy9pZGVhJywnL3ktdHVvbmcnKVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgcmVuZGVyKCl7XG4gICAgICAgIGNvbnN0IG1hc29ucnlPcHRpb25zID0ge1xuICAgICAgICAgICAgZ3V0dGVyOiAnLmdyaWRfX2d1dHRlci1zaXplcicsXG4gICAgICAgICAgICBpc09yaWdpbkxlZnQ6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICBjb25zdCB7IGltYWdlcyAsIGgxICxmaWx0ZXJfZGVmYXVsdCAsIGNvbG9ycyAsIGxpc3RCYWRnZSAsIGRldGFpbH0gPSB0aGlzLnByb3BzXG4gICAgICAgY29uc3QgeyBwaG90b0lkICwgc2x1ZyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICByZXR1cm4oXG4gICAgICAgIDxMYXlvdXQgey4uLnRoaXMucHJvcHN9IG5hdm1lbnU9e2ZhbHNlfSBjb250YWluZXI9e2ZhbHNlfSBjc3M9e2Nzc30+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHBob3RvSWQgP1xuICAgICAgICAgICAgPEltYWdlTW9kYWxcbiAgICAgICAgICAgICAgICBpZD17cGhvdG9JZH1cbiAgICAgICAgICAgICAgICBzbHVnPXtzbHVnfVxuICAgICAgICAgICAgICAgIGRldGFpbD17ZGV0YWlsfVxuICAgICAgICAgICAgICAgIGltYWdlcz17aW1hZ2VzfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRQYXRoPXtjdXJyZW50UGF0aH1cbiAgICAgICAgICAgICAgICBpZGVhUGFyYW1zPXt0aGlzLnByb3BzLmlkZWFQYXJhbXN9XG4gICAgICAgICAgICAgICAgc3ViUGFyYW1zPXt0aGlzLnByb3BzLnN1YlBhcmFtc31cbiAgICAgICAgICAgICAgICBuZXh0UGFnZVVybD17dGhpcy5zdGF0ZS5uZXh0VXJsfVxuICAgICAgICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gdGhpcy5kaXNtaXNzTW9kYWwoKX1cbiAgICAgICAgICAgIC8+IDogJydcbiAgICAgICAgfVxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57XG4gICAgICAgICAgICBgXG4gICAgICAgICAgICAjbGlnaHRib3ggLm5hdi1saW5rOmZpcnN0LWNoaWxke1xuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2UyZTJlMiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI2xpZ2h0Ym94IC5uYXYtbGluayB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC40cmVtIDAuN3JlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZTJlMmUyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYFxuICAgICAgICB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHNlcnZpY2UgcHgtNCBiZy1ncmF5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTAgY29sLW1kLTMgY29sLWxnLTMgcHgtM1wiIGlkPVwic2lkZWJhclwiPlxuICAgICAgICAgICAgICAgICAgICA8U2lkZWJhciBmaWx0ZXI9e2ZpbHRlcl9kZWZhdWx0fSBjb2xvcj17Y29sb3JzfT48L1NpZGViYXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTkgY29sLWxnLTkgcHgtMFwiIGlkPVwiY2F0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcHgtMyBweS00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWRhcmsgdGl0bGUgbWwtMVwiPnsgaDEgJiYgaDEgfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtdGFnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0QmFkZ2UgJiYgbGlzdEJhZGdlLm1hcCgodmFsdWUsaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHByZWZldGNoIHJvdXRlPXt2YWx1ZS51cml9IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3ZhbHVlLnVyaX0gPjxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXBpbGwgYmFkZ2UtbGlnaHQgYm9yZGVyIGJvcmRlci1wcmltYXJ5IG1yLTIgbXktMSBzZXJ2aWNlLXRhZ1wiPnt2YWx1ZS5uYW1lX3RhZ30gPGkgY2xhc3NOYW1lPVwiY2xvc2VcIj48L2k+PC9zcGFuPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPEluZmluaXRlU2Nyb2xsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlU3RhcnQ9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkTW9yZT17dGhpcy5sb2FkSXRlbXMuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc01vcmU9e3RoaXMuc3RhdGUuaGFzTW9yZUl0ZW1zfVxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGVyPXs8ZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiIGtleT0nY3gnPkxvYWRpbmcgLi4uPC9kaXY+fT4gXG4gICAgICAgICAgICAgICAgICAgIDxNYXNvbnJ5XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Jy5ncmlkIGFyZS1pbWFnZXMtdW5sb2FkZWQgbXQtMyd9IFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlSW1hZ2VzTG9hZGVkPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17bWFzb25yeU9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgIHJlZj17YyA9PiB0aGlzLm1hc29ucnkgPSBjfVxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVPbkVhY2hJbWFnZUxvYWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRfX2NvbC1zaXplclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkX19ndXR0ZXItc2l6ZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZXMgJiYgaW1hZ2VzLm1hcCgodmFsdWUsaW5kZXgpID0+KCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkX19pdGVtIHJvdW5kZWRcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvc2l0aW9uLWFic29sdXRlIHJvdW5kZWQgZC1ub25lIHVwbG9hZFwiPiA8aSBjbGFzc05hbWU9XCJmYSBmYS11cGxvYWRcIj48L2k+IEzGsHUg4bqjbmg8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgcm91dGU9XCJpbWFnZVwiIHBhcmFtcz17eyBpZDogdmFsdWUuaWQgLCBzbHVnIDogdmFsdWUuc2x1ZyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KGUpID0+ICB0aGlzLnNob3dQaG90byhlLCB2YWx1ZS5pZCAsIHZhbHVlLnNsdWcpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJyb3VuZGVkIGNhcmQtaW1nLXRvcFwiIHNyYz17dmFsdWUubWVkaXVtX3BhdGh9IGFsdD17dmFsdWUubmFtZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgaWRlYS1jb250ZW50IHB4LTEgcHQtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXQtMiBmb250LTE1IHRleHQtYmxhY2stMTAwXCIgZGF0YS10aXRsZT17dmFsdWUubmFtZX0+e3ZhbHVlLm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMiBpbWFnZXMtdGl0bGUgZm9udC0xNCB0ZXh0LWJsYWNrLTEwMCBtb3JlRGVzXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHZhbHVlLmRlc2NyaXB0aW9uc319PjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NYXNvbnJ5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbmZpbml0ZVNjcm9sbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgIClcbiAgIH1cbn1cbmNsYXNzIFNpZGViYXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgfVxuICAgIHJlbmRlcigpe1xuICAgICAgICBjb25zdCB7IGZpbHRlciAsIGNvbG9yIH0gPSB0aGlzLnByb3BzXG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1zZXJ2aWNlIHJvdyBiZy13aGl0ZVwiPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLW1kLWJsb2NrIHB4LTIgdy0xMDAgc2lkZWJhci1zZXJ2aWNlLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlciAmJiBmaWx0ZXIubWFwKCh2YWx1ZSxpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuZGF0YS5sZW5ndGggIT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGlsZC1zaWRlYmFyLXNlcnZpY2UgcGItMSBjb2wtMTIgb2Zmc2V0LW1kLTAgY29sLW1kLTEyIHB4LTBcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgd2lkZ2V0IHAtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LTE1IG1iLTNcIj57dmFsdWUudGV4dE5hbWV9PHNwYW4gY2xhc3NOYW1lPVwiZmEgZmEtY2hldnJvbi1yaWdodCBkLWJsb2NrIGQtbWQtbm9uZVwiICBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9e1wiI2RlbW9cIitpbmRleH0+PC9zcGFuPjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWQgbWItMCBjb2xsYXBzZSBkLW1kLWJsb2NrXCIgaWQ9e1wiZGVtb1wiK2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuZGF0YSAmJiBtYXBPYmplY3QodmFsdWUuZGF0YSwgZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkgY2xhc3NOYW1lPVwicHktMSByYWRpb1wiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBwcmVmZXRjaCByb3V0ZT17dmFsdWUudXJpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZm9udC0xMyBmb250LXdlaWdodC1saWdodCB0ZXh0LWdyYXlcIj48bGFiZWwgY2xhc3NOYW1lPVwicHItM1wiPnt2YWx1ZS5uYW1lX3RhZ308c3Bhbj57dmFsdWUudG90YWxfZG9jfTwvc3Bhbj48L2xhYmVsPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1vcmUgbG9hZG1vcmUgZC1ub25lIGQtbWQtYmxvY2tcIj5YZW0gdGjDqm0gPGkgY2xhc3NOYW1lPVwibGEgbGEtYXJyb3ctY2lyY2xlLXJpZ2h0XCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGlsZC1zaWRlYmFyLXNlcnZpY2UgcGItMSBjb2wtMTIgb2Zmc2V0LW1kLTAgY29sLW1kLTEyIHB4LTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiB3aWRnZXQgcC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtMTVcIj5Nw4BVIFPhuq5DPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJleHBhbmQtbGlzdFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2UtY29sb3IgbXQtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3IgJiYgbWFwT2JqZWN0KGNvbG9yICwgZnVuY3Rpb24oaW5kZXgsdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICA8YSBocmVmPXt2YWx1ZS51cml9IGNsYXNzTmFtZT1cInRleHQtZGFyayBib3JkZXIgYm9yZGVyLWdyYXlcIiBrZXk9e2luZGV4fT48c3BhbiBjbGFzc05hbWU9e1wiZmxvYXQtbGVmdCBcIiArIHZhbHVlLmNsYXNzfSBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT17dmFsdWUubmFtZV90YWd9Pjwvc3Bhbj48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn0iXX0= */\n/*@ sourceURL=components/IdeaComponent.js */"
      }), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        className: "jsx-352178927" + " " + "container-fluid service px-4 bg-gray"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        className: "jsx-352178927" + " " + "row"
      }, _react.default.createElement("div", {
        id: "sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        className: "jsx-352178927" + " " + "col-0 col-md-3 col-lg-3 px-3"
      }, _react.default.createElement(Sidebar, {
        filter: filter_default,
        color: colors,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        }
      })), _react.default.createElement("div", {
        id: "cat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        className: "jsx-352178927" + " " + "col-12 col-md-9 col-lg-9 px-0"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        className: "jsx-352178927" + " " + "bg-white px-3 py-4"
      }, _react.default.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        className: "jsx-352178927" + " " + "text-dark title ml-1"
      }, h1 && h1), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        className: "jsx-352178927" + " " + "list-tag"
      }, listBadge && listBadge.map(function (value, index) {
        return _react.default.createElement(_routes.Link, {
          prefetch: true,
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
            lineNumber: 210
          },
          className: "jsx-352178927" + " " + "badge badge-pill badge-light border border-primary mr-2 my-1 service-tag"
        }, value.name_tag, " ", _react.default.createElement("i", {
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
          lineNumber: 228
        },
        className: "jsx-352178927" + " " + "grid__col-sizer"
      }), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        className: "jsx-352178927" + " " + "grid__gutter-sizer"
      }), images && images.map(function (value, index) {
        return _react.default.createElement("div", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 232
          },
          className: "jsx-352178927" + " " + "grid__item rounded"
        }, _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 233
          },
          className: "jsx-352178927" + " " + "card"
        }, _react.default.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 234
          },
          className: "jsx-352178927" + " " + "position-absolute rounded d-none upload"
        }, " ", _react.default.createElement("i", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 234
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
            lineNumber: 235
          }
        }, _react.default.createElement("a", {
          onClick: function onClick(e) {
            return _this2.showPhoto(e, value.id, value.slug);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 236
          },
          className: "jsx-352178927"
        }, _react.default.createElement("img", {
          src: value.medium_path,
          alt: value.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 237
          },
          className: "jsx-352178927" + " " + "rounded card-img-top"
        }))), _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240
          },
          className: "jsx-352178927" + " " + "card-body idea-content px-1 pt-1"
        }, _react.default.createElement("h2", {
          "data-title": value.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 241
          },
          className: "jsx-352178927" + " " + "mt-2 font-15 text-black-100"
        }, value.name), _react.default.createElement("p", {
          dangerouslySetInnerHTML: {
            __html: value.descriptions
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 242
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
          lineNumber: 266
        }
      }, _react.default.createElement("div", {
        className: "d-md-block px-2 w-100 sidebar-service-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        }
      }, filter && filter.map(function (value, index) {
        return value.data.length != 0 && _react.default.createElement("div", {
          className: "child-sidebar-service pb-1 col-12 offset-md-0 col-md-12 px-0",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 272
          }
        }, _react.default.createElement("div", {
          className: "mt-2 widget p-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 273
          }
        }, _react.default.createElement("h3", {
          className: "font-15 mb-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 274
          }
        }, value.textName, _react.default.createElement("span", {
          className: "fa fa-chevron-right d-block d-md-none",
          "data-toggle": "collapse",
          "data-target": "#demo" + index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 274
          }
        })), _react.default.createElement("ul", {
          className: "list-unstyled mb-0 collapse d-md-block",
          id: "demo" + index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 276
          }
        }, value.data && (0, _helpers.mapObject)(value.data, function (index, value) {
          return _react.default.createElement("li", {
            className: "py-1 radio",
            key: index,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 279
            }
          }, _react.default.createElement(_routes.Link, {
            prefetch: true,
            route: value.uri,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 280
            }
          }, _react.default.createElement("a", {
            className: "font-13 font-weight-light text-gray",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 281
            }
          }, _react.default.createElement("label", {
            className: "pr-3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 281
            }
          }, value.name_tag, _react.default.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 281
            }
          }, value.total_doc)))));
        }), _react.default.createElement("span", {
          className: "more loadmore d-none d-md-block",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 286
          }
        }, "Xem th\xEAm ", _react.default.createElement("i", {
          className: "la la-arrow-circle-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 286
          }
        })))));
      }), _react.default.createElement("div", {
        className: "child-sidebar-service pb-1 col-12 offset-md-0 col-md-12 px-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        }
      }, _react.default.createElement("div", {
        className: "mt-2 widget p-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        }
      }, _react.default.createElement("h3", {
        className: "font-15",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        }
      }, "M\xC0U S\u1EAEC"), _react.default.createElement("span", {
        className: "expand-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        }
      }), _react.default.createElement("div", {
        className: "service-color mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        }
      }, color && (0, _helpers.mapObject)(color, function (index, value) {
        return _react.default.createElement("a", {
          href: value.uri,
          className: "text-dark border border-gray",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 300
          }
        }, _react.default.createElement("span", {
          className: "float-left " + value.class,
          "data-toggle": "tooltip",
          title: value.name_tag,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 300
          }
        }));
      }))))));
    }
  }]);

  return Sidebar;
}(_react.default.PureComponent);

/***/ })

})
//# sourceMappingURL=6.3649856ab45924b0cf74.hot-update.js.map