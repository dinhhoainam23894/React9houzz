webpackHotUpdate(7,{

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
        css: "#lightbox .nav-link:first-child{border-left:1px solid #e2e2e2 !important;}#lightbox .nav-link{display:block;padding:0.4rem 0.7rem !important;border-left:none !important;border-color:#e2e2e2;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSWRlYUNvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1TFksQUFFNEMsQUFHM0IsY0FDbUIsMkJBSlMsTUFLZCw0QkFDUCxxQkFBQyIsImZpbGUiOiJjb21wb25lbnRzL0lkZWFDb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9teS1uZXh0LWFwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi9sYXlvdXQnO1xuaW1wb3J0IE1hc29ucnkgZnJvbSAncmVhY3QtbWFzb25yeS1jb21wb25lbnQnO1xuaW1wb3J0IEluZmluaXRlU2Nyb2xsIGZyb20gJ3JlYWN0LWluZmluaXRlLXNjcm9sbGVyJ1xuaW1wb3J0IEltYWdlTW9kYWwgZnJvbSAnLi9pbWFnZS1tb2RhbCc7XG5pbXBvcnQge21hcE9iamVjdCAsIHVjZmlyc3R9IGZyb20gJy4uL2xpYnJhcmllcy9oZWxwZXJzJ1xuaW1wb3J0IHtMaW5rfSBmcm9tICcuLi9yb3V0ZXMnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuY29uc3QgQVBJVVJMID0gcHJvY2Vzcy5lbnYuRE9NQUlOICsgcHJvY2Vzcy5lbnYuQVBJVVJJXG52YXIgY3VycmVudFBhdGggPSAnLydcbnZhciBhc1BhdGggPSAnLydcbmltcG9ydCB7Um91dGVyfSBmcm9tICcuLi9yb3V0ZXMnXG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlcy9mc2NyZWVuX2lkZWEuY3NzJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWRlYUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgaW1hZ2VzOiBbXSxcbiAgICAgICAgbmV4dFVybCA6IG51bGwsXG4gICAgICAgIGhhc01vcmVJdGVtczogdHJ1ZSxcbiAgICAgICAgaDEgOiBudWxsLFxuICAgICAgICBmaWx0ZXJfZGVmYXVsdCA6IFtdLFxuICAgICAgICBsaXN0QmFkZ2UgOiBbXVxuICAgIH1cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICBjdXJyZW50UGF0aCA9IHRoaXMucHJvcHMucGF0aFxuICAgICAgICBhc1BhdGggPSB0aGlzLnByb3BzLmFzUGF0aFxuICAgIH1cbiAgICAvLyBjb21wb25lbnRXaWxsTW91bnQoKXtcbiAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgLy8gICAgICAgICBoMSA6IHRoaXMucHJvcHMuaDEsXG4gICAgLy8gICAgICAgICBmaWx0ZXJfZGVmYXVsdCA6IHRoaXMucHJvcHMuZmlsdGVyX2RlZmF1bHQsXG4gICAgLy8gICAgICAgICBjb2xvciA6IHRoaXMucHJvcHMuY29sb3JzLFxuICAgIC8vICAgICAgICAgaW1hZ2VzOiB0aGlzLnByb3BzLmltYWdlcyxcbiAgICAvLyAgICAgICAgIG5leHRVcmw6IHRoaXMucHJvcHMubmV4dFVybCxcbiAgICAvLyAgICAgICAgIGxpc3RCYWRnZSA6IHRoaXMucHJvcHMubGlzdEJhZGdlID8gdGhpcy5wcm9wcy5saXN0QmFkZ2UgOiBbXVxuICAgIC8vICAgICB9KVxuICAgIC8vIH1cbiAgICBcbiAgICBsb2FkSXRlbXMocGFnZSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciB1cmwgPSAnJztcbiAgICAgICAgaWYodGhpcy5wcm9wcy5uZXh0VXJsKSB7XG4gICAgICAgICAgICB1cmwgPSB0aGlzLnByb3BzLm5leHRVcmw7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5wcm9wcy5uZXh0VXJsICE9IG51bGwpe1xuICAgICAgICAgICAgYXhpb3MuZ2V0KHVybClcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3ApIHtcbiAgICAgICAgICAgICAgICBpZihyZXNwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0cmFja3MgPSBzZWxmLnByb3BzLmltYWdlcztcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSByZXNwLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5pbWFnZXMuZGF0YS5tYXAoKHRyYWNrKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFja3MucHVzaCh0cmFjayk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZihkYXRhLmltYWdlcy5uZXh0X3BhZ2VfdXJsICYmIGRhdGEuaW1hZ2VzLm5leHRfcGFnZV91cmwgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5wcm9wcy5jaGFuZ2VTdGF0ZSh0cmFja3MsZGF0YS5pbWFnZXMubmV4dF9wYWdlX3VybClcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlbGYuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGltYWdlczogdHJhY2tzLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIG5leHRVcmw6IGRhdGEuaW1hZ2VzLm5leHRfcGFnZV91cmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc01vcmVJdGVtczogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICBcbiAgICB9XG4gICAgc2hvd1Bob3RvIChlLCBpZCAsIHNsdWcpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGlmKHRoaXMucHJvcHMuaWRlYVBhcmFtcyl7XG4gICAgICAgICAgICB2YXIgcGFyYW1zID0gdGhpcy5wcm9wcy5pZGVhUGFyYW1zXG4gICAgICAgICAgICBpZih0aGlzLnByb3BzLnN1YlBhcmFtcyl7XG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goYCR7Y3VycmVudFBhdGh9P3BhcmFtcz0ke3BhcmFtc30mZj0ke3RoaXMucHJvcHMuc3ViUGFyYW1zfSZwaG90b0lkPSR7aWR9JnNsdWc9JHtzbHVnfWAsYC9hbmgvJHtpZH0tJHtzbHVnfWApXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChgJHtjdXJyZW50UGF0aH0/cGFyYW1zPSR7cGFyYW1zfSZwaG90b0lkPSR7aWR9JnNsdWc9JHtzbHVnfWAsYC9hbmgvJHtpZH0tJHtzbHVnfWApIFxuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKGAke2N1cnJlbnRQYXRofT9waG90b0lkPSR7aWR9JnNsdWc9JHtzbHVnfWAsYC9hbmgvJHtpZH0tJHtzbHVnfWApXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgdmFyIHNob3dDaGFyID0gMTUwOyAgLy8gSG93IG1hbnkgY2hhcmFjdGVycyBhcmUgc2hvd24gYnkgZGVmYXVsdFxuICAgICAgICB2YXIgZWxsaXBzZXN0ZXh0ID0gXCJcIjtcbiAgICAgICAgdmFyIG1vcmV0ZXh0ID0gXCJYZW0gdGjDqm0gPlwiO1xuICAgICAgICB2YXIgbGVzc3RleHQgPSBcIlLDunQgZ+G7jW4gPFwiO1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgJCgnLm1vcmVEZXMnKS5lYWNoKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gJCh0aGlzKS5odG1sKCk7XG4gICAgICAgICAgICBpZihjb250ZW50Lmxlbmd0aCA+IHNob3dDaGFyKSB7XG4gICAgICAgICAgICAgICAgdmFyIGMgPSBjb250ZW50LnN1YnN0cigwLCBzaG93Q2hhcik7XG4gICAgICAgICAgICAgICAgdmFyIGggPSBjb250ZW50LnN1YnN0cihzaG93Q2hhciwgY29udGVudC5sZW5ndGggLSBzaG93Q2hhcik7XG4gICAgICAgICAgICAgICAgdmFyIGh0bWwgPSBjICsgJzxzcGFuIGNsYXNzPVwibW9yZWVsbGlwc2VzXCI+JyArIGVsbGlwc2VzdGV4dCsgJyZuYnNwOzwvc3Bhbj48c3BhbiBjbGFzcz1cIm1vcmVjb250ZW50XCI+PHNwYW4+JyArIGggKyAnPC9zcGFuPiZuYnNwOyZuYnNwOzxhIGhyZWY9XCJcIiBjbGFzcz1cIm1vcmVsaW5rXCI+JyArIG1vcmV0ZXh0ICsgJzwvYT48L3NwYW4+JztcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmh0bWwoaHRtbCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChcIi5tb3JlbGlua1wiKS5jbGljayhmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcyhcImxlc3NcIikpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwibGVzc1wiKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmh0bWwobW9yZXRleHQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwibGVzc1wiKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmh0bWwobGVzc3RleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wcmV2KCkudG9nZ2xlKCk7XG4gICAgICAgICAgICAkKHRoaXMpLnByZXYoKS50b2dnbGUoKTtcbiAgICAgICAgICAgIHNlbGYubWFzb25yeS5wZXJmb3JtTGF5b3V0KCkgICAgO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgJCgnLnNpZGViYXItc2VydmljZSB1bCcpLmVhY2goZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5maW5kKCdsaScpLmxlbmd0aCA9PSAkKHRoaXMpLmZpbmQoJCgnbGk6dmlzaWJsZScpKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnLmxvYWRtb3JlJykuaGlkZSgpO1xuICAgICAgICAgICAgfVxuXHRcdH0pO1xuICAgICAgICAkKCcuc2lkZWJhci1zZXJ2aWNlJykub24oJ2NsaWNrJywnLmxvYWRtb3JlJyxmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbGlzdCA9ICQodGhpcykucGFyZW50KCkuZmluZCgkKCdsaScpKTtcblx0XHRcdCQodGhpcykucGFyZW50KCkuZmluZCgkKCdsaTpoaWRkZW4nKSkuc2hvdygpO1xuICAgICAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09ICQodGhpcykucGFyZW50KCkuZmluZCgkKCdsaTp2aXNpYmxlJykpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2xvYWRtb3JlJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaGlkZW1vcmUnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmh0bWwoJ1RodSBn4buNbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgJCgnLnNpZGViYXItc2VydmljZScpLm9uKCdjbGljaycsJy5oaWRlbW9yZScsZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGxpc3QgPSAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJCgnbGknKSk7XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJCgnbGk6dmlzaWJsZScpKS5zbGljZSg1LCBsaXN0Lmxlbmd0aCkuaGlkZSgpO1xuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaGlkZW1vcmUnKTtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2xvYWRtb3JlJyk7XG4gICAgICAgICAgICAkKHRoaXMpLmh0bWwoJ1hlbSB0aMOqbScpO1xuICAgICAgICB9KTtcbiAgICAgICAgJChcIi5jbG9zZVwiKS5jbGljayhmdW5jdGlvbihldmVudCkge1xuXHQgICAgXHQkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZSgpO1xuICAgICAgICB9KTsgICAgICAgIFxuICAgIH1cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKXtcbiAgICAgICAgLy8gdmFyIGxpc3QgPSAkKCcuaWRlYS1jb250ZW50JykuZmluZCgnLm1vcmVEZXMnKS5sZW5ndGg7XG4gICAgICAgICQoJy5pZGVhLWNvbnRlbnQnKS5maW5kKCQoJy5tb3JlRGVzOnZpc2libGUnKSkuaGlkZSgpO1xuICAgICAgICAkKCcuaWRlYS1jb250ZW50JykuZmluZCgkKCcubW9yZURlcycpKS5zbGljZSgwLCAyMCkuc2hvdygpO1xuXG4gICAgfVxuICAgIGRpc21pc3NNb2RhbCAoKSB7XG4gICAgICAgIGlmKHRoaXMucHJvcHMuaWRlYVBhcmFtcyl7XG4gICAgICAgICAgICB2YXIgcGFyYW1zID0gdGhpcy5wcm9wcy5pZGVhUGFyYW1zXG4gICAgICAgICAgICBpZih0aGlzLnByb3BzLnN1YlBhcmFtcyl7XG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2hSb3V0ZShgL3ktdHVvbmcvJHtwYXJhbXN9P2Y9JHt0aGlzLnByb3BzLnN1YlBhcmFtc31gKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2hSb3V0ZSgnaWRlYS5kZXRhaWwnLCB7cGFyYW1zOiBwYXJhbXN9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvaWRlYScsJy95LXR1b25nJylcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgIHJlbmRlcigpe1xuICAgICAgICBjb25zdCBtYXNvbnJ5T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGd1dHRlcjogJy5ncmlkX19ndXR0ZXItc2l6ZXInLFxuICAgICAgICAgICAgaXNPcmlnaW5MZWZ0OiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgY29uc3QgeyBpbWFnZXMgLCBoMSAsZmlsdGVyX2RlZmF1bHQgLCBjb2xvcnMgLCBsaXN0QmFkZ2UgLCBkZXRhaWx9ID0gdGhpcy5wcm9wc1xuICAgICAgIGNvbnN0IHsgcGhvdG9JZCAsIHNsdWcgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgcmV0dXJuKFxuICAgICAgICA8TGF5b3V0IHsuLi50aGlzLnByb3BzfSBuYXZtZW51PXtmYWxzZX0gY29udGFpbmVyPXtmYWxzZX0gY3NzPXtjc3N9PlxuICAgICAgICB7XG4gICAgICAgICAgICBwaG90b0lkID9cbiAgICAgICAgICAgIDxJbWFnZU1vZGFsXG4gICAgICAgICAgICAgICAgaWQ9e3Bob3RvSWR9XG4gICAgICAgICAgICAgICAgc2x1Zz17c2x1Z31cbiAgICAgICAgICAgICAgICBkZXRhaWw9e2RldGFpbH1cbiAgICAgICAgICAgICAgICBpbWFnZXM9e2ltYWdlc31cbiAgICAgICAgICAgICAgICBjdXJyZW50UGF0aD17Y3VycmVudFBhdGh9XG4gICAgICAgICAgICAgICAgaWRlYVBhcmFtcz17dGhpcy5wcm9wcy5pZGVhUGFyYW1zfVxuICAgICAgICAgICAgICAgIHN1YlBhcmFtcz17dGhpcy5wcm9wcy5zdWJQYXJhbXN9XG4gICAgICAgICAgICAgICAgbmV4dFBhZ2VVcmw9e3RoaXMuc3RhdGUubmV4dFVybH1cbiAgICAgICAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHRoaXMuZGlzbWlzc01vZGFsKCl9XG4gICAgICAgICAgICAvPiA6ICcnXG4gICAgICAgIH1cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e1xuICAgICAgICAgICAgYFxuICAgICAgICAgICAgI2xpZ2h0Ym94IC5uYXYtbGluazpmaXJzdC1jaGlsZHtcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlMmUyZTIgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNsaWdodGJveCAubmF2LWxpbmsge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNHJlbSAwLjdyZW0gIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2UyZTJlMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGBcbiAgICAgICAgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBzZXJ2aWNlIHB4LTQgYmctZ3JheVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0wIGNvbC1tZC0zIGNvbC1sZy0zIHB4LTNcIiBpZD1cInNpZGViYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFNpZGViYXIgZmlsdGVyPXtmaWx0ZXJfZGVmYXVsdH0gY29sb3I9e2NvbG9yc30+PC9TaWRlYmFyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC05IGNvbC1sZy05IHB4LTBcIiBpZD1cImNhdFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHB4LTMgcHktNFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1kYXJrIHRpdGxlIG1sLTFcIj57IGgxICYmIGgxIH08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LXRhZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdEJhZGdlICYmIGxpc3RCYWRnZS5tYXAoKHZhbHVlLGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBwcmVmZXRjaCByb3V0ZT17dmFsdWUudXJpfSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXt2YWx1ZS51cml9ID48c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1waWxsIGJhZGdlLWxpZ2h0IGJvcmRlciBib3JkZXItcHJpbWFyeSBtci0yIG15LTEgc2VydmljZS10YWdcIj57dmFsdWUubmFtZV90YWd9IDxpIGNsYXNzTmFtZT1cImNsb3NlXCI+PC9pPjwvc3Bhbj48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxJbmZpbml0ZVNjcm9sbFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZVN0YXJ0PXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZE1vcmU9e3RoaXMubG9hZEl0ZW1zLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNNb3JlPXt0aGlzLnN0YXRlLmhhc01vcmVJdGVtc31cbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRlcj17PGRpdiBjbGFzc05hbWU9XCJsb2FkZXJcIiBrZXk9J2N4Jz5Mb2FkaW5nIC4uLjwvZGl2Pn0+IFxuICAgICAgICAgICAgICAgICAgICA8TWFzb25yeVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eycuZ3JpZCBhcmUtaW1hZ2VzLXVubG9hZGVkIG10LTMnfSBcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUltYWdlc0xvYWRlZD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e21hc29ucnlPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICByZWY9e2MgPT4gdGhpcy5tYXNvbnJ5ID0gY31cbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlT25FYWNoSW1hZ2VMb2FkPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkX19jb2wtc2l6ZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZF9fZ3V0dGVyLXNpemVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VzICYmIGltYWdlcy5tYXAoKHZhbHVlLGluZGV4KSA9PiggXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZF9faXRlbSByb3VuZGVkXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb3NpdGlvbi1hYnNvbHV0ZSByb3VuZGVkIGQtbm9uZSB1cGxvYWRcIj4gPGkgY2xhc3NOYW1lPVwiZmEgZmEtdXBsb2FkXCI+PC9pPiBMxrB1IOG6o25oPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPVwiaW1hZ2VcIiBwYXJhbXM9e3sgaWQ6IHZhbHVlLmlkICwgc2x1ZyA6IHZhbHVlLnNsdWcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eyhlKSA9PiAgdGhpcy5zaG93UGhvdG8oZSwgdmFsdWUuaWQgLCB2YWx1ZS5zbHVnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicm91bmRlZCBjYXJkLWltZy10b3BcIiBzcmM9e3ZhbHVlLm1lZGl1bV9wYXRofSBhbHQ9e3ZhbHVlLm5hbWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGlkZWEtY29udGVudCBweC0xIHB0LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm10LTIgZm9udC0xNSB0ZXh0LWJsYWNrLTEwMFwiIGRhdGEtdGl0bGU9e3ZhbHVlLm5hbWV9Pnt2YWx1ZS5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTIgaW1hZ2VzLXRpdGxlIGZvbnQtMTQgdGV4dC1ibGFjay0xMDAgbW9yZURlc1wiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiB2YWx1ZS5kZXNjcmlwdGlvbnN9fT48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWFzb25yeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5maW5pdGVTY3JvbGw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xheW91dD5cbiAgICAgICApXG4gICB9XG59XG5jbGFzcyBTaWRlYmFyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgIH1cbiAgICByZW5kZXIoKXtcbiAgICAgICAgY29uc3QgeyBmaWx0ZXIgLCBjb2xvciB9ID0gdGhpcy5wcm9wc1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXItc2VydmljZSByb3cgYmctd2hpdGVcIj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1tZC1ibG9jayBweC0yIHctMTAwIHNpZGViYXItc2VydmljZS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXIgJiYgZmlsdGVyLm1hcCgodmFsdWUsaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLmRhdGEubGVuZ3RoICE9IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hpbGQtc2lkZWJhci1zZXJ2aWNlIHBiLTEgY29sLTEyIG9mZnNldC1tZC0wIGNvbC1tZC0xMiBweC0wXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIHdpZGdldCBwLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC0xNSBtYi0zXCI+e3ZhbHVlLnRleHROYW1lfTxzcGFuIGNsYXNzTmFtZT1cImZhIGZhLWNoZXZyb24tcmlnaHQgZC1ibG9jayBkLW1kLW5vbmVcIiAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PXtcIiNkZW1vXCIraW5kZXh9Pjwvc3Bhbj48L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkIG1iLTAgY29sbGFwc2UgZC1tZC1ibG9ja1wiIGlkPXtcImRlbW9cIitpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLmRhdGEgJiYgbWFwT2JqZWN0KHZhbHVlLmRhdGEsIGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGNsYXNzTmFtZT1cInB5LTEgcmFkaW9cIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggcm91dGU9e3ZhbHVlLnVyaX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZvbnQtMTMgZm9udC13ZWlnaHQtbGlnaHQgdGV4dC1ncmF5XCI+PGxhYmVsIGNsYXNzTmFtZT1cInByLTNcIj57dmFsdWUubmFtZV90YWd9PHNwYW4+e3ZhbHVlLnRvdGFsX2RvY308L3NwYW4+PC9sYWJlbD48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtb3JlIGxvYWRtb3JlIGQtbm9uZSBkLW1kLWJsb2NrXCI+WGVtIHRow6ptIDxpIGNsYXNzTmFtZT1cImxhIGxhLWFycm93LWNpcmNsZS1yaWdodFwiPjwvaT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hpbGQtc2lkZWJhci1zZXJ2aWNlIHBiLTEgY29sLTEyIG9mZnNldC1tZC0wIGNvbC1tZC0xMiBweC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgd2lkZ2V0IHAtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LTE1XCI+TcOAVSBT4bquQzwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXhwYW5kLWxpc3RcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlLWNvbG9yIG10LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yICYmIG1hcE9iamVjdChjb2xvciAsIGZ1bmN0aW9uKGluZGV4LHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAgPGEgaHJlZj17dmFsdWUudXJpfSBjbGFzc05hbWU9XCJ0ZXh0LWRhcmsgYm9yZGVyIGJvcmRlci1ncmF5XCIga2V5PXtpbmRleH0+PHNwYW4gY2xhc3NOYW1lPXtcImZsb2F0LWxlZnQgXCIgKyB2YWx1ZS5jbGFzc30gZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9e3ZhbHVlLm5hbWVfdGFnfT48L3NwYW4+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59Il19 */\n/*@ sourceURL=components/IdeaComponent.js */"
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
//# sourceMappingURL=7.e73d5c38b8cfe947b91e.hot-update.js.map