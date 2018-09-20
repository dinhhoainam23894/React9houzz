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
          lineNumber: 167
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
          lineNumber: 170
        }
      }) : '', _react.default.createElement(_style.default, {
        styleId: "352178927",
        css: "#lightbox .nav-link:first-child{border-left:1px solid #e2e2e2 !important;}#lightbox .nav-link{display:block;padding:0.4rem 0.7rem !important;border-left:none !important;border-color:#e2e2e2;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSWRlYUNvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzTFUsQUFFNEMsQUFHM0IsY0FDbUIsMkJBSlMsTUFLZCw0QkFDUCxxQkFBQyIsImZpbGUiOiJjb21wb25lbnRzL0lkZWFDb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9teS1uZXh0LWFwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi9sYXlvdXQnXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL3NpZGVCYXInXG5pbXBvcnQgTWFzb25yeSBmcm9tICdyZWFjdC1tYXNvbnJ5LWNvbXBvbmVudCdcbmltcG9ydCBJbmZpbml0ZVNjcm9sbCBmcm9tICdyZWFjdC1pbmZpbml0ZS1zY3JvbGxlcidcbmltcG9ydCBJbWFnZU1vZGFsIGZyb20gJy4vaW1hZ2UtbW9kYWwnXG5pbXBvcnQge0xpbmt9IGZyb20gJy4uL3JvdXRlcydcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmNvbnN0IEFQSVVSTCA9IHByb2Nlc3MuZW52LkRPTUFJTiArIHByb2Nlc3MuZW52LkFQSVVSSVxudmFyIGN1cnJlbnRQYXRoID0gJy8nXG52YXIgYXNQYXRoID0gJy8nXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnLi4vcm91dGVzJ1xuaW1wb3J0IGNzcyBmcm9tICdzdHlsZXMvZnNjcmVlbl9pZGVhLmNzcydcbmltcG9ydCBMYXp5TG9hZCBmcm9tIFwicmVhY3QtbGF6eWxvYWRcIjtcbmltcG9ydCBQbGFjZWhvbGRlciBmcm9tIFwiLi9QbGFjZUhvbGRlclwiO1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSBcIi4vcGFnaW5hdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJZGVhQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgaW1hZ2VzOiBbXSxcbiAgICBuZXh0VXJsOiBudWxsLFxuICAgIGhhc01vcmVJdGVtczogdHJ1ZSxcbiAgICBoMTogbnVsbCxcbiAgICBmaWx0ZXJfZGVmYXVsdDogW10sXG4gICAgbGlzdEJhZGdlOiBbXVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBjdXJyZW50UGF0aCA9IHRoaXMucHJvcHMucGF0aFxuICAgIGFzUGF0aCA9IHRoaXMucHJvcHMuYXNQYXRoXG5cbiAgfVxuXG4gIGxvYWRJdGVtcyhwYWdlKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciB1cmwgPSAnJztcbiAgICBpZiAodGhpcy5wcm9wcy5uZXh0VXJsKSB7XG4gICAgICB1cmwgPSB0aGlzLnByb3BzLm5leHRVcmw7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm5leHRVcmwgIT0gbnVsbCkge1xuICAgICAgYXhpb3MuZ2V0KHVybClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgICBpZiAocmVzcCkge1xuICAgICAgICAgICAgdmFyIHRyYWNrcyA9IHNlbGYucHJvcHMuaW1hZ2VzO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSByZXNwLmRhdGFcbiAgICAgICAgICAgIGRhdGEuaW1hZ2VzLmRhdGEubWFwKCh0cmFjaykgPT4ge1xuICAgICAgICAgICAgICB0cmFja3MucHVzaCh0cmFjayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChkYXRhLmltYWdlcy5uZXh0X3BhZ2VfdXJsICYmIGRhdGEuaW1hZ2VzLm5leHRfcGFnZV91cmwgIT0gbnVsbCkge1xuICAgICAgICAgICAgICBzZWxmLnByb3BzLmNoYW5nZVN0YXRlKHRyYWNrcywgZGF0YS5pbWFnZXMubmV4dF9wYWdlX3VybClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGhhc01vcmVJdGVtczogZmFsc2VcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgfVxuICBnZXRQYWdlVXJsKGkpIHtcbiAgICBsZXQgdXJsID0gXCJcIjtcbiAgICBpZiAodGhpcy5wcm9wcy51cmxfcGF0aCkge1xuICAgICAgdXJsID0gdGhpcy5wcm9wcy51cmxfcGF0aFxuICAgIH1cbiAgICByZXR1cm4gdXJsICsgXCI/cGFnZT1cIiArIGk7XG4gIH1cbiAgc2hvd1Bob3RvKGUsIGlkLCBzbHVnKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaWYgKHRoaXMucHJvcHMuaWRlYVBhcmFtcykge1xuICAgICAgdmFyIHBhcmFtcyA9IHRoaXMucHJvcHMuaWRlYVBhcmFtc1xuICAgICAgaWYgKHRoaXMucHJvcHMuc3ViUGFyYW1zKSB7XG4gICAgICAgIFJvdXRlci5wdXNoKGAke2N1cnJlbnRQYXRofT9wYXJhbXM9JHtwYXJhbXN9JmY9JHt0aGlzLnByb3BzLnN1YlBhcmFtc30mcGhvdG9JZD0ke2lkfSZzbHVnPSR7c2x1Z31gLCBgL2FuaC8ke2lkfS0ke3NsdWd9YClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFJvdXRlci5wdXNoKGAke2N1cnJlbnRQYXRofT9wYXJhbXM9JHtwYXJhbXN9JnBob3RvSWQ9JHtpZH0mc2x1Zz0ke3NsdWd9YCwgYC9hbmgvJHtpZH0tJHtzbHVnfWApXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIFJvdXRlci5wdXNoKGAke2N1cnJlbnRQYXRofT9waG90b0lkPSR7aWR9JnNsdWc9JHtzbHVnfWAsIGAvYW5oLyR7aWR9LSR7c2x1Z31gKVxuICAgIH1cbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgc2hvd0NoYXIgPSAxNTA7ICAvLyBIb3cgbWFueSBjaGFyYWN0ZXJzIGFyZSBzaG93biBieSBkZWZhdWx0XG4gICAgdmFyIGVsbGlwc2VzdGV4dCA9IFwiXCI7XG4gICAgdmFyIG1vcmV0ZXh0ID0gXCJYZW0gdGjDqm0gPlwiO1xuICAgIHZhciBsZXNzdGV4dCA9IFwiUsO6dCBn4buNbiA8XCI7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgJCgnLm1vcmVEZXMnKS5lYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgY29udGVudCA9ICQodGhpcykuaHRtbCgpO1xuICAgICAgaWYgKGNvbnRlbnQubGVuZ3RoID4gc2hvd0NoYXIpIHtcbiAgICAgICAgdmFyIGMgPSBjb250ZW50LnN1YnN0cigwLCBzaG93Q2hhcik7XG4gICAgICAgIHZhciBoID0gY29udGVudC5zdWJzdHIoc2hvd0NoYXIsIGNvbnRlbnQubGVuZ3RoIC0gc2hvd0NoYXIpO1xuICAgICAgICB2YXIgaHRtbCA9IGMgKyAnPHNwYW4gY2xhc3M9XCJtb3JlZWxsaXBzZXNcIj4nICsgZWxsaXBzZXN0ZXh0ICsgJyZuYnNwOzwvc3Bhbj48c3BhbiBjbGFzcz1cIm1vcmVjb250ZW50XCI+PHNwYW4+JyArIGggKyAnPC9zcGFuPiZuYnNwOyZuYnNwOzxhIGhyZWY9XCJcIiBjbGFzcz1cIm1vcmVsaW5rXCI+JyArIG1vcmV0ZXh0ICsgJzwvYT48L3NwYW4+JztcbiAgICAgICAgJCh0aGlzKS5odG1sKGh0bWwpO1xuICAgICAgfVxuXG4gICAgfSk7XG4gICAgJChcIi5tb3JlbGlua1wiKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImxlc3NcIikpIHtcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImxlc3NcIik7XG4gICAgICAgICQodGhpcykuaHRtbChtb3JldGV4dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwibGVzc1wiKTtcbiAgICAgICAgJCh0aGlzKS5odG1sKGxlc3N0ZXh0KTtcbiAgICAgIH1cbiAgICAgICQodGhpcykucGFyZW50KCkucHJldigpLnRvZ2dsZSgpO1xuICAgICAgJCh0aGlzKS5wcmV2KCkudG9nZ2xlKCk7XG4gICAgICBzZWxmLm1hc29ucnkucGVyZm9ybUxheW91dCgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgICQoJy5zaWRlYmFyLXNlcnZpY2UgdWwnKS5lYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoJCh0aGlzKS5maW5kKCdsaScpLmxlbmd0aCA9PSAkKHRoaXMpLmZpbmQoJCgnbGk6dmlzaWJsZScpKS5sZW5ndGgpIHtcbiAgICAgICAgJCh0aGlzKS5maW5kKCcubG9hZG1vcmUnKS5oaWRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgJCgnLnNpZGViYXItc2VydmljZScpLm9uKCdjbGljaycsICcubG9hZG1vcmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbGlzdCA9ICQodGhpcykucGFyZW50KCkuZmluZCgkKCdsaScpKTtcbiAgICAgICQodGhpcykucGFyZW50KCkuZmluZCgkKCdsaTpoaWRkZW4nKSkuc2hvdygpO1xuICAgICAgaWYgKGxpc3QubGVuZ3RoID09ICQodGhpcykucGFyZW50KCkuZmluZCgkKCdsaTp2aXNpYmxlJykpLmxlbmd0aCkge1xuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdsb2FkbW9yZScpO1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdoaWRlbW9yZScpO1xuICAgICAgICAkKHRoaXMpLmh0bWwoJ1RodSBn4buNbicpO1xuICAgICAgfVxuICAgIH0pO1xuICAgICQoJy5zaWRlYmFyLXNlcnZpY2UnKS5vbignY2xpY2snLCAnLmhpZGVtb3JlJywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGxpc3QgPSAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJCgnbGknKSk7XG4gICAgICAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJCgnbGk6dmlzaWJsZScpKS5zbGljZSg1LCBsaXN0Lmxlbmd0aCkuaGlkZSgpO1xuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaGlkZW1vcmUnKTtcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2xvYWRtb3JlJyk7XG4gICAgICAkKHRoaXMpLmh0bWwoJ1hlbSB0aMOqbScpO1xuICAgIH0pO1xuICAgICQoXCIuY2xvc2VcIikuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZSgpO1xuICAgIH0pO1xuICB9XG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAvLyB2YXIgbGlzdCA9ICQoJy5pZGVhLWNvbnRlbnQnKS5maW5kKCcubW9yZURlcycpLmxlbmd0aDtcbiAgICAkKCcuaWRlYS1jb250ZW50JykuZmluZCgkKCcubW9yZURlczp2aXNpYmxlJykpLmhpZGUoKTtcbiAgICAkKCcuaWRlYS1jb250ZW50JykuZmluZCgkKCcubW9yZURlcycpKS5zbGljZSgwLCAyMCkuc2hvdygpO1xuICB9XG4gIGRpc21pc3NNb2RhbCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5pZGVhUGFyYW1zKSB7XG4gICAgICB2YXIgcGFyYW1zID0gdGhpcy5wcm9wcy5pZGVhUGFyYW1zXG4gICAgICBpZiAodGhpcy5wcm9wcy5zdWJQYXJhbXMpIHtcbiAgICAgICAgUm91dGVyLnB1c2hSb3V0ZShgL3ktdHVvbmcvJHtwYXJhbXN9P2Y9JHt0aGlzLnByb3BzLnN1YlBhcmFtc31gKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgUm91dGVyLnB1c2hSb3V0ZSgnaWRlYS5kZXRhaWwnLCB7cGFyYW1zOiBwYXJhbXN9KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBSb3V0ZXIucHVzaCgnL2lkZWEnLCAnL3ktdHVvbmcnKVxuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZGF0YXMgPSB0aGlzLnByb3BzLmRhdGEuaW1hZ2VzO1xuICAgIHZhciBuZXh0UGFnZUxpbmsgPSAgZGF0YXMubmV4dF9wYWdlX3VybCA/IHRoaXMucHJvcHMudXJsX3BhdGggKyBcIj9wYWdlPVwiICsgKGRhdGFzLmN1cnJlbnRfcGFnZSArIDEpIDogdW5kZWZpbmVkO1xuICAgIGNvbnN0IG1hc29ucnlPcHRpb25zID0ge1xuICAgICAgZ3V0dGVyOiAnLmdyaWRfX2d1dHRlci1zaXplcicsXG4gICAgICBpc09yaWdpbkxlZnQ6IHRydWVcbiAgICB9O1xuICAgIGNvbnN0IHtpbWFnZXMsIGgxLCBmaWx0ZXJfZGVmYXVsdCwgY29sb3JzLCBsaXN0QmFkZ2UsIGRldGFpbCwgcGFnZX0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qge3Bob3RvSWQsIHNsdWd9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dCB7Li4udGhpcy5wcm9wc30gbmF2bWVudT17ZmFsc2V9IGNvbnRhaW5lcj17ZmFsc2V9IGNzcz17Y3NzfT5cbiAgICAgICAge1xuICAgICAgICAgIHBob3RvSWQgP1xuICAgICAgICAgICAgPEltYWdlTW9kYWxcbiAgICAgICAgICAgICAgaWQ9e3Bob3RvSWR9XG4gICAgICAgICAgICAgIHNsdWc9e3NsdWd9XG4gICAgICAgICAgICAgIGRldGFpbD17ZGV0YWlsfVxuICAgICAgICAgICAgICBpbWFnZXM9e2ltYWdlc31cbiAgICAgICAgICAgICAgY3VycmVudFBhdGg9e2N1cnJlbnRQYXRofVxuICAgICAgICAgICAgICBpZGVhUGFyYW1zPXt0aGlzLnByb3BzLmlkZWFQYXJhbXN9XG4gICAgICAgICAgICAgIHN1YlBhcmFtcz17dGhpcy5wcm9wcy5zdWJQYXJhbXN9XG4gICAgICAgICAgICAgIG5leHRQYWdlVXJsPXt0aGlzLnN0YXRlLm5leHRVcmx9XG4gICAgICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gdGhpcy5kaXNtaXNzTW9kYWwoKX1cbiAgICAgICAgICAgIC8+IDogJydcbiAgICAgICAgfVxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57XG4gICAgICAgICAgYFxuICAgICAgICAgICAgI2xpZ2h0Ym94IC5uYXYtbGluazpmaXJzdC1jaGlsZHtcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlMmUyZTIgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNsaWdodGJveCAubmF2LWxpbmsge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNHJlbSAwLjdyZW0gIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2UyZTJlMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGBcbiAgICAgICAgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBzZXJ2aWNlIHB4LTQgYmctZ3JheVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0wIGNvbC1tZC0zIGNvbC1sZy0zIHB4LTNcIiBpZD1cInNpZGViYXJcIj5cbiAgICAgICAgICAgICAgPFNpZGViYXIgZmlsdGVyPXtmaWx0ZXJfZGVmYXVsdH0gY29sb3I9e2NvbG9yc30gcGFnZT17cGFnZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTkgY29sLWxnLTkgcHgtMFwiIGlkPVwiY2F0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcHgtMyBweS00XCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtZGFyayB0aXRsZSBtbC0xXCI+e2gxICYmIGgxfTwvaDE+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LXRhZ1wiPlxuICAgICAgICAgICAgICAgICAge2xpc3RCYWRnZSAmJiBsaXN0QmFkZ2UubWFwKCh2YWx1ZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e3ZhbHVlLnVyaX0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dmFsdWUudXJpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXBpbGwgYmFkZ2UtbGlnaHQgYm9yZGVyIGJvcmRlci1wcmltYXJ5IG1yLTIgbXktMSBzZXJ2aWNlLXRhZ1wiPnt2YWx1ZS5uYW1lX3RhZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImNsb3NlXCIgLz48L3NwYW4+PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxJbmZpbml0ZVNjcm9sbFxuICAgICAgICAgICAgICAgICAgcGFnZVN0YXJ0PXswfVxuICAgICAgICAgICAgICAgICAgbG9hZE1vcmU9e3RoaXMubG9hZEl0ZW1zLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICBoYXNNb3JlPXt0aGlzLnN0YXRlLmhhc01vcmVJdGVtc31cbiAgICAgICAgICAgICAgICAgIGxvYWRlcj17PGRpdiBjbGFzc05hbWU9XCJsb2FkZXJcIiBrZXk9J2N4Jz5Mb2FkaW5nIC4uLjwvZGl2Pn0+XG4gICAgICAgICAgICAgICAgICA8TWFzb25yeVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eycuZ3JpZCBhcmUtaW1hZ2VzLXVubG9hZGVkIG10LTMnfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlSW1hZ2VzTG9hZGVkPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17bWFzb25yeU9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgIHJlZj17YyA9PiB0aGlzLm1hc29ucnkgPSBjfVxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVPbkVhY2hJbWFnZUxvYWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRfX2NvbC1zaXplclwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZF9fZ3V0dGVyLXNpemVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGltYWdlcyAmJiBpbWFnZXMubWFwKCh2YWx1ZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZF9faXRlbSByb3VuZGVkXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvc2l0aW9uLWFic29sdXRlIHJvdW5kZWQgZC1ub25lIHVwbG9hZFwiPiA8aSBjbGFzc05hbWU9XCJmYSBmYS11cGxvYWRcIj48L2k+IEzGsHUg4bqjbmg8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgcm91dGU9XCJpbWFnZVwiIHBhcmFtcz17e2lkOiB2YWx1ZS5pZCwgc2x1ZzogdmFsdWUuc2x1Z319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KGUpID0+IHRoaXMuc2hvd1Bob3RvKGUsIHZhbHVlLmlkLCB2YWx1ZS5zbHVnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZCBvbmNlIHRocm90dGxlIHBsYWNlaG9sZGVyPXs8UGxhY2Vob2xkZXIgZGF0YVNyYz17dmFsdWUubWVkaXVtX3BhdGh9IGFsdD17dmFsdWUubmFtZX0vPn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJyb3VuZGVkIGNhcmQtaW1nLXRvcFwiIHNyYz17dmFsdWUubWVkaXVtX3BhdGh9IGFsdD17dmFsdWUubmFtZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xhenlMb2FkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBpZGVhLWNvbnRlbnQgcHgtMSBwdC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXQtMiBmb250LTE1IHRleHQtYmxhY2stMTAwXCIgZGF0YS10aXRsZT17dmFsdWUubmFtZX0+e3ZhbHVlLm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTIgaW1hZ2VzLXRpdGxlIGZvbnQtMTQgdGV4dC1ibGFjay0xMDAgbW9yZURlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogdmFsdWUuZGVzY3JpcHRpb25zfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L01hc29ucnk+XG4gICAgICAgICAgICAgICAgPC9JbmZpbml0ZVNjcm9sbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaV9kZXNrdG9wIG15LTRcIj5cbiAgICAgICAgICAgICAgICA8UGFnaW5hdGlvblxuICAgICAgICAgICAgICAgICAgYWN0aXZlUGFnZT17dGhpcy5wcm9wcy5kYXRhLmltYWdlcy5jdXJyZW50X3BhZ2V9XG4gICAgICAgICAgICAgICAgICBpdGVtc0NvdW50UGVyUGFnZT17dGhpcy5wcm9wcy5kYXRhLmltYWdlcy5wZXJfcGFnZX1cbiAgICAgICAgICAgICAgICAgIHRvdGFsSXRlbXNDb3VudD17dGhpcy5wcm9wcy5kYXRhLmltYWdlcy50b3RhbH1cbiAgICAgICAgICAgICAgICAgIHBhZ2VSYW5nZURpc3BsYXllZD17NX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5oYW5kbGVQYWdlQ2hhbmdlKGUpfVxuICAgICAgICAgICAgICAgICAgZ2V0UGFnZVVybD17KGkpID0+IHRoaXMuZ2V0UGFnZVVybChpKX1cbiAgICAgICAgICAgICAgICAgIG5leHRQYWdlTGluaz17bmV4dFBhZ2VMaW5rfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=components/IdeaComponent.js */"
      }), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        className: "jsx-352178927" + " " + "container-fluid service px-4 bg-gray"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        className: "jsx-352178927" + " " + "row"
      }, _react.default.createElement("div", {
        id: "sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        className: "jsx-352178927" + " " + "col-0 col-md-3 col-lg-3 px-3"
      }, _react.default.createElement(_sideBar.default, {
        filter: filter_default,
        color: colors,
        page: page,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      })), _react.default.createElement("div", {
        id: "cat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        className: "jsx-352178927" + " " + "col-12 col-md-9 col-lg-9 px-0"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        className: "jsx-352178927" + " " + "bg-white px-3 py-4"
      }, _react.default.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        className: "jsx-352178927" + " " + "text-dark title ml-1"
      }, h1 && h1), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        className: "jsx-352178927" + " " + "list-tag"
      }, listBadge && listBadge.map(function (value, index) {
        return _react.default.createElement(_routes.Link, {
          route: value.uri,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 206
          }
        }, _react.default.createElement("a", {
          href: value.uri,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 207
          },
          className: "jsx-352178927"
        }, _react.default.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 208
          },
          className: "jsx-352178927" + " " + "badge badge-pill badge-light border border-primary mr-2 my-1 service-tag"
        }, value.name_tag, _react.default.createElement("i", {
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
          lineNumber: 226
        },
        className: "jsx-352178927" + " " + "grid__col-sizer"
      }), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        className: "jsx-352178927" + " " + "grid__gutter-sizer"
      }), images && images.map(function (value, index) {
        return _react.default.createElement("div", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 230
          },
          className: "jsx-352178927" + " " + "grid__item rounded"
        }, _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 231
          },
          className: "jsx-352178927" + " " + "card"
        }, _react.default.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 232
          },
          className: "jsx-352178927" + " " + "position-absolute rounded d-none upload"
        }, " ", _react.default.createElement("i", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 232
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
            lineNumber: 233
          }
        }, _react.default.createElement("a", {
          onClick: function onClick(e) {
            return _this2.showPhoto(e, value.id, value.slug);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 234
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
              lineNumber: 235
            }
          }),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 235
          }
        }, _react.default.createElement("img", {
          src: value.medium_path,
          alt: value.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 236
          },
          className: "jsx-352178927" + " " + "rounded card-img-top"
        })))), _react.default.createElement("div", {
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
      })))), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
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
          lineNumber: 253
        }
      }))))));
    }
  }]);

  return IdeaComponent;
}(_react.default.Component);

exports.default = IdeaComponent;

/***/ })

})
//# sourceMappingURL=11.e9611e2681766c1c2693.hot-update.js.map