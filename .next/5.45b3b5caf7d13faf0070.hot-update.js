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

var APIURL = "http://api.9houz.com/" + "api/";
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
  // componentWillReceiveProps(nextProps){
  //     console.log(nextProps)
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
          lineNumber: 135
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
          lineNumber: 138
        }
      }) : '', _react.default.createElement(_style.default, {
        styleId: "352178927",
        css: "#lightbox .nav-link:first-child{border-left:1px solid #e2e2e2 !important;}#lightbox .nav-link{display:block;padding:0.4rem 0.7rem !important;border-left:none !important;border-color:#e2e2e2;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSWRlYUNvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzSlksQUFFNEMsQUFHM0IsY0FDbUIsMkJBSlMsTUFLZCw0QkFDUCxxQkFBQyIsImZpbGUiOiJjb21wb25lbnRzL0lkZWFDb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9teS1uZXh0LWFwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi9sYXlvdXQnO1xuaW1wb3J0IE1hc29ucnkgZnJvbSAncmVhY3QtbWFzb25yeS1jb21wb25lbnQnO1xuaW1wb3J0IEluZmluaXRlU2Nyb2xsIGZyb20gJ3JlYWN0LWluZmluaXRlLXNjcm9sbGVyJ1xuaW1wb3J0IEltYWdlTW9kYWwgZnJvbSAnLi9pbWFnZS1tb2RhbCc7XG5pbXBvcnQge21hcE9iamVjdCAsIHVjZmlyc3R9IGZyb20gJy4uL2xpYnJhcmllcy9oZWxwZXJzJ1xuaW1wb3J0IHtMaW5rfSBmcm9tICcuLi9yb3V0ZXMnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuY29uc3QgQVBJVVJMID0gcHJvY2Vzcy5lbnYuRE9NQUlOICsgcHJvY2Vzcy5lbnYuQVBJVVJJXG52YXIgY3VycmVudFBhdGggPSAnLydcbnZhciBhc1BhdGggPSAnLydcbmltcG9ydCB7Um91dGVyfSBmcm9tICcuLi9yb3V0ZXMnXG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlcy9mc2NyZWVuX2lkZWEuY3NzJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWRlYUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgaW1hZ2VzOiBbXSxcbiAgICAgICAgbmV4dFVybCA6IG51bGwsXG4gICAgICAgIGhhc01vcmVJdGVtczogdHJ1ZSxcbiAgICAgICAgaDEgOiBudWxsLFxuICAgICAgICBmaWx0ZXJfZGVmYXVsdCA6IFtdLFxuICAgICAgICBsaXN0QmFkZ2UgOiBbXVxuICAgIH1cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICBjdXJyZW50UGF0aCA9IHRoaXMucHJvcHMucGF0aFxuICAgICAgICBhc1BhdGggPSB0aGlzLnByb3BzLmFzUGF0aFxuICAgIH1cbiAgICAvLyBjb21wb25lbnRXaWxsTW91bnQoKXtcbiAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgLy8gICAgICAgICBoMSA6IHRoaXMucHJvcHMuaDEsXG4gICAgLy8gICAgICAgICBmaWx0ZXJfZGVmYXVsdCA6IHRoaXMucHJvcHMuZmlsdGVyX2RlZmF1bHQsXG4gICAgLy8gICAgICAgICBjb2xvciA6IHRoaXMucHJvcHMuY29sb3JzLFxuICAgIC8vICAgICAgICAgaW1hZ2VzOiB0aGlzLnByb3BzLmltYWdlcyxcbiAgICAvLyAgICAgICAgIG5leHRVcmw6IHRoaXMucHJvcHMubmV4dFVybCxcbiAgICAvLyAgICAgICAgIGxpc3RCYWRnZSA6IHRoaXMucHJvcHMubGlzdEJhZGdlID8gdGhpcy5wcm9wcy5saXN0QmFkZ2UgOiBbXVxuICAgIC8vICAgICB9KVxuICAgIC8vIH1cbiAgICAvLyBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcyl7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKG5leHRQcm9wcylcbiAgICAvLyB9XG4gICAgbG9hZEl0ZW1zKHBhZ2UpIHtcbiAgICAgICAgXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIHVybCA9ICcnO1xuICAgICAgICBpZih0aGlzLnByb3BzLm5leHRVcmwpIHtcbiAgICAgICAgICAgIHVybCA9IHRoaXMucHJvcHMubmV4dFVybDtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnByb3BzLm5leHRVcmwgIT0gbnVsbCl7XG4gICAgICAgICAgICBheGlvcy5nZXQodXJsKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcCkge1xuICAgICAgICAgICAgICAgIGlmKHJlc3ApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRyYWNrcyA9IHNlbGYucHJvcHMuaW1hZ2VzO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHJlc3AuZGF0YVxuICAgICAgICAgICAgICAgICAgICBkYXRhLmltYWdlcy5kYXRhLm1hcCgodHJhY2spID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYWNrcy5wdXNoKHRyYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmKGRhdGEuaW1hZ2VzLm5leHRfcGFnZV91cmwgJiYgZGF0YS5pbWFnZXMubmV4dF9wYWdlX3VybCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnByb3BzLmNoYW5nZVN0YXRlKHRyYWNrcyxkYXRhLmltYWdlcy5uZXh0X3BhZ2VfdXJsKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2VsZi5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgaW1hZ2VzOiB0cmFja3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgbmV4dFVybDogZGF0YS5pbWFnZXMubmV4dF9wYWdlX3VybCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzTW9yZUl0ZW1zOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgIFxuICAgIH1cbiAgICBzaG93UGhvdG8gKGUsIGlkICwgc2x1Zykge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgaWYodGhpcy5wcm9wcy5pZGVhUGFyYW1zKXtcbiAgICAgICAgICAgIHZhciBwYXJhbXMgPSB0aGlzLnByb3BzLmlkZWFQYXJhbXNcbiAgICAgICAgICAgIGlmKHRoaXMucHJvcHMuc3ViUGFyYW1zKXtcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaFJvdXRlKGAveS10dW9uZy8ke3BhcmFtc30/Zj0ke3RoaXMucHJvcHMuc3ViUGFyYW1zfSZwaG90b0lkPSR7aWR9JnNsdWc9JHtzbHVnfWAsYC9hbmgvJHtpZH0tJHtzbHVnfWApXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChgJHtjdXJyZW50UGF0aH0/cGFyYW1zPSR7cGFyYW1zfSZwaG90b0lkPSR7aWR9JnNsdWc9JHtzbHVnfWAsYC9hbmgvJHtpZH0tJHtzbHVnfWApIFxuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKGAke2N1cnJlbnRQYXRofT9waG90b0lkPSR7aWR9JnNsdWc9JHtzbHVnfWAsYC9hbmgvJHtpZH0tJHtzbHVnfWApXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcbiAgICAgICAgJCgnLnNpZGViYXItc2VydmljZSB1bCcpLmVhY2goZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5maW5kKCdsaScpLmxlbmd0aCA9PSAkKHRoaXMpLmZpbmQoJCgnbGk6dmlzaWJsZScpKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnLmxvYWRtb3JlJykuaGlkZSgpO1xuICAgICAgICAgICAgfVxuXHRcdH0pO1xuICAgICAgICAkKCcuc2lkZWJhci1zZXJ2aWNlJykub24oJ2NsaWNrJywnLmxvYWRtb3JlJyxmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbGlzdCA9ICQodGhpcykucGFyZW50KCkuZmluZCgkKCdsaScpKTtcblx0XHRcdCQodGhpcykucGFyZW50KCkuZmluZCgkKCdsaTpoaWRkZW4nKSkuc2hvdygpO1xuICAgICAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09ICQodGhpcykucGFyZW50KCkuZmluZCgkKCdsaTp2aXNpYmxlJykpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2xvYWRtb3JlJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaGlkZW1vcmUnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmh0bWwoJ1RodSBn4buNbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgJCgnLnNpZGViYXItc2VydmljZScpLm9uKCdjbGljaycsJy5oaWRlbW9yZScsZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGxpc3QgPSAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJCgnbGknKSk7XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJCgnbGk6dmlzaWJsZScpKS5zbGljZSg1LCBsaXN0Lmxlbmd0aCkuaGlkZSgpO1xuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaGlkZW1vcmUnKTtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2xvYWRtb3JlJyk7XG4gICAgICAgICAgICAkKHRoaXMpLmh0bWwoJ1hlbSB0aMOqbScpO1xuICAgICAgICB9KTtcbiAgICAgICAgJChcIi5jbG9zZVwiKS5jbGljayhmdW5jdGlvbihldmVudCkge1xuXHQgICAgXHQkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZSgpO1xuXHQgICAgfSk7XG4gICAgfVxuICAgXG4gICAgZGlzbWlzc01vZGFsICgpIHtcbiAgICAgICAgaWYodGhpcy5wcm9wcy5pZGVhUGFyYW1zKXtcbiAgICAgICAgICAgIHZhciBwYXJhbXMgPSB0aGlzLnByb3BzLmlkZWFQYXJhbXNcbiAgICAgICAgICAgIGlmKHRoaXMucHJvcHMuc3ViUGFyYW1zKXtcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaFJvdXRlKGAveS10dW9uZy8ke3BhcmFtc30/Zj0ke3RoaXMucHJvcHMuc3ViUGFyYW1zfWApXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaFJvdXRlKCdpZGVhLmRldGFpbCcsIHtwYXJhbXM6IHBhcmFtc30pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgUm91dGVyLnB1c2goJy9pZGVhJywnL3ktdHVvbmcnKVxuICAgICAgICB9XG4gICAgfVxuICAgcmVuZGVyKCl7XG4gICAgICAgIGNvbnN0IG1hc29ucnlPcHRpb25zID0ge1xuICAgICAgICAgICAgZ3V0dGVyOiAnLmdyaWRfX2d1dHRlci1zaXplcicsXG4gICAgICAgICAgICBpc09yaWdpbkxlZnQ6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICBjb25zdCB7IGltYWdlcyAsIGgxICxmaWx0ZXJfZGVmYXVsdCAsIGNvbG9ycyAsIGxpc3RCYWRnZSAsIGRldGFpbH0gPSB0aGlzLnByb3BzXG4gICAgICAgY29uc3QgeyBwaG90b0lkICwgc2x1ZyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICByZXR1cm4oXG4gICAgICAgIDxMYXlvdXQgey4uLnRoaXMucHJvcHN9IG5hdm1lbnU9e2ZhbHNlfSBjb250YWluZXI9e2ZhbHNlfSBjc3M9e2Nzc30+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHBob3RvSWQgP1xuICAgICAgICAgICAgPEltYWdlTW9kYWxcbiAgICAgICAgICAgICAgICBpZD17cGhvdG9JZH1cbiAgICAgICAgICAgICAgICBzbHVnPXtzbHVnfVxuICAgICAgICAgICAgICAgIGRldGFpbD17ZGV0YWlsfVxuICAgICAgICAgICAgICAgIGltYWdlcz17aW1hZ2VzfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRQYXRoPXtjdXJyZW50UGF0aH1cbiAgICAgICAgICAgICAgICBpZGVhUGFyYW1zPXt0aGlzLnByb3BzLmlkZWFQYXJhbXN9XG4gICAgICAgICAgICAgICAgc3ViUGFyYW1zPXt0aGlzLnByb3BzLnN1YlBhcmFtc31cbiAgICAgICAgICAgICAgICBuZXh0UGFnZVVybD17dGhpcy5zdGF0ZS5uZXh0VXJsfVxuICAgICAgICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gdGhpcy5kaXNtaXNzTW9kYWwoKX1cbiAgICAgICAgICAgIC8+IDogJydcbiAgICAgICAgfVxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57XG4gICAgICAgICAgICBgXG4gICAgICAgICAgICAjbGlnaHRib3ggLm5hdi1saW5rOmZpcnN0LWNoaWxke1xuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2UyZTJlMiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI2xpZ2h0Ym94IC5uYXYtbGluayB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC40cmVtIDAuN3JlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZTJlMmUyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYFxuICAgICAgICB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHNlcnZpY2UgcHgtNCBiZy1ncmF5XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTAgY29sLW1kLTMgY29sLWxnLTMgcHgtM1wiIGlkPVwic2lkZWJhclwiPlxuICAgICAgICAgICAgICAgICAgICA8U2lkZWJhciBmaWx0ZXI9e2ZpbHRlcl9kZWZhdWx0fSBjb2xvcj17Y29sb3JzfT48L1NpZGViYXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTkgY29sLWxnLTkgcHgtMFwiIGlkPVwiY2F0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcHgtMyBweS00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWRhcmsgdGl0bGUgbWwtMSBwdC0zXCI+eyBoMSAmJiBoMSB9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC10YWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RCYWRnZSAmJiBsaXN0QmFkZ2UubWFwKCh2YWx1ZSxpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggcm91dGU9e3ZhbHVlLnVyaX0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dmFsdWUudXJpfSA+PHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS1saWdodCBib3JkZXIgYm9yZGVyLXByaW1hcnkgbXItMiBteS0xIHNlcnZpY2UtdGFnXCI+e3ZhbHVlLm5hbWVfdGFnfSA8aSBjbGFzc05hbWU9XCJjbG9zZVwiPjwvaT48L3NwYW4+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8SW5maW5pdGVTY3JvbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTdGFydD17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRNb3JlPXt0aGlzLmxvYWRJdGVtcy5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFzTW9yZT17dGhpcy5zdGF0ZS5oYXNNb3JlSXRlbXN9XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkZXI9ezxkaXYgY2xhc3NOYW1lPVwibG9hZGVyXCIga2V5PSdjeCc+TG9hZGluZyAuLi48L2Rpdj59PiBcbiAgICAgICAgICAgICAgICAgICAgPE1hc29ucnlcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnLmdyaWQgYXJlLWltYWdlcy11bmxvYWRlZCBtdC0zJ30gXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVJbWFnZXNMb2FkZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXttYXNvbnJ5T3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlT25FYWNoSW1hZ2VMb2FkPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkX19jb2wtc2l6ZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZF9fZ3V0dGVyLXNpemVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VzICYmIGltYWdlcy5tYXAoKHZhbHVlLGluZGV4KSA9PiggXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZF9faXRlbSByb3VuZGVkIHAtMVwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9zaXRpb24tYWJzb2x1dGUgcm91bmRlZCBkLW5vbmUgdXBsb2FkXCI+IDxpIGNsYXNzTmFtZT1cImZhIGZhLXVwbG9hZFwiPjwvaT4gTMawdSDhuqNuaDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayByb3V0ZT1cImltYWdlXCIgcGFyYW1zPXt7IGlkOiB2YWx1ZS5pZCAsIHNsdWcgOiB2YWx1ZS5zbHVnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoZSkgPT4gIHRoaXMuc2hvd1Bob3RvKGUsIHZhbHVlLmlkICwgdmFsdWUuc2x1Zyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInJvdW5kZWQgY2FyZC1pbWctdG9wXCIgc3JjPXt2YWx1ZS5tZWRpdW1fcGF0aH0gYWx0PXt2YWx1ZS5uYW1lfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBpZGVhLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm10LTIgZm9udC0xMyB0ZXh0LWJsYWNrLTEwMFwiIGRhdGEtdGl0bGU9e3ZhbHVlLm5hbWV9Pnt2YWx1ZS5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTIgaW1hZ2VzLXRpdGxlIGZvbnQtMTIgdGV4dC1ibGFjay0xMDAgbW9yZURlc1wiPnt2YWx1ZS5kZXNjcmlwdGlvbnN9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L01hc29ucnk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0luZmluaXRlU2Nyb2xsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgKVxuICAgfVxufVxuY2xhc3MgU2lkZWJhciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICB9XG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGNvbnN0IHsgZmlsdGVyICwgY29sb3IgfSA9IHRoaXMucHJvcHNcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLXNlcnZpY2Ugcm93IGJnLXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLW1kLWJsb2NrIHB4LTIgdy0xMDAgc2lkZWJhci1zZXJ2aWNlLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlciAmJiBmaWx0ZXIubWFwKCh2YWx1ZSxpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuZGF0YS5sZW5ndGggIT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGlsZC1zaWRlYmFyLXNlcnZpY2UgcGItMSBjb2wtMTIgb2Zmc2V0LW1kLTAgY29sLW1kLTEyIHB4LTBcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgd2lkZ2V0IHAtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LTE1IG1iLTNcIj57dmFsdWUudGV4dE5hbWV9PHNwYW4gY2xhc3NOYW1lPVwiZmEgZmEtY2hldnJvbi1yaWdodCBkLWJsb2NrIGQtbWQtbm9uZVwiICBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjZGVtb1Rlc3RcIj48L3NwYW4+PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZCBtYi0wIGNvbGxhcHNlIGQtbWQtYmxvY2tcIiBpZD1cImRlbW9UZXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLmRhdGEgJiYgbWFwT2JqZWN0KHZhbHVlLmRhdGEsIGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGNsYXNzTmFtZT1cInB5LTEgcmFkaW9cIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgcHJlZmV0Y2ggcm91dGU9e3ZhbHVlLnVyaX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZvbnQtMTMgZm9udC13ZWlnaHQtbGlnaHQgdGV4dC1ncmF5XCI+PGxhYmVsIGNsYXNzTmFtZT1cInB4LTNcIj57dmFsdWUubmFtZV90YWd9PHNwYW4+e3ZhbHVlLnRvdGFsX2RvY308L3NwYW4+PC9sYWJlbD48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtb3JlIGxvYWRtb3JlIGQtbm9uZSBkLW1kLWJsb2NrXCI+WGVtIHRow6ptIDxpIGNsYXNzTmFtZT1cImxhIGxhLWFycm93LWNpcmNsZS1yaWdodFwiPjwvaT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hpbGQtc2lkZWJhci1zZXJ2aWNlIHBiLTEgY29sLTEyIG9mZnNldC1tZC0wIGNvbC1tZC0xMiBweC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgd2lkZ2V0IHAtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LTE1XCI+TcOAVSBT4bquQzwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXhwYW5kLWxpc3RcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlLWNvbG9yIG10LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yICYmIG1hcE9iamVjdChjb2xvciAsIGZ1bmN0aW9uKGluZGV4LHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAgPGEgaHJlZj17dmFsdWUudXJpfSBjbGFzc05hbWU9XCJ0ZXh0LWRhcmsgYm9yZGVyIGJvcmRlci1ncmF5XCIga2V5PXtpbmRleH0+PHNwYW4gY2xhc3NOYW1lPXtcImZsb2F0LWxlZnQgXCIgKyB2YWx1ZS5jbGFzc30gZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9e3ZhbHVlLm5hbWVfdGFnfT48L3NwYW4+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59Il19 */\n/*@ sourceURL=components/IdeaComponent.js */"
      }), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        className: "jsx-352178927" + " " + "container-fluid service px-4 bg-gray"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        className: "jsx-352178927" + " " + "row"
      }, _react.default.createElement("div", {
        id: "sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        className: "jsx-352178927" + " " + "col-0 col-md-3 col-lg-3 px-3"
      }, _react.default.createElement(Sidebar, {
        filter: filter_default,
        color: colors,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      })), _react.default.createElement("div", {
        id: "cat",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        className: "jsx-352178927" + " " + "col-12 col-md-9 col-lg-9 px-0"
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        className: "jsx-352178927" + " " + "bg-white px-3 py-4"
      }, _react.default.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        className: "jsx-352178927" + " " + "text-dark title ml-1 pt-3"
      }, h1 && h1), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        className: "jsx-352178927" + " " + "list-tag"
      }, listBadge && listBadge.map(function (value, index) {
        return _react.default.createElement(_routes.Link, {
          prefetch: true,
          route: value.uri,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 175
          }
        }, _react.default.createElement("a", {
          href: value.uri,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176
          },
          className: "jsx-352178927"
        }, _react.default.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176
          },
          className: "jsx-352178927" + " " + "badge badge-pill badge-light border border-primary mr-2 my-1 service-tag"
        }, value.name_tag, " ", _react.default.createElement("i", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176
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
            lineNumber: 185
          },
          className: "jsx-352178927" + " " + "loader"
        }, "Loading ..."),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }, _react.default.createElement(_reactMasonryComponent.default, {
        className: '.grid are-images-unloaded mt-3',
        disableImagesLoaded: false,
        options: masonryOptions,
        updateOnEachImageLoad: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }, _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        className: "jsx-352178927" + " " + "grid__col-sizer"
      }), _react.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        className: "jsx-352178927" + " " + "grid__gutter-sizer"
      }), images && images.map(function (value, index) {
        return _react.default.createElement("div", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 196
          },
          className: "jsx-352178927" + " " + "grid__item rounded p-1"
        }, _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197
          },
          className: "jsx-352178927" + " " + "card"
        }, _react.default.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 198
          },
          className: "jsx-352178927" + " " + "position-absolute rounded d-none upload"
        }, " ", _react.default.createElement("i", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 198
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
            lineNumber: 199
          }
        }, _react.default.createElement("a", {
          onClick: function onClick(e) {
            return _this2.showPhoto(e, value.id, value.slug);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 200
          },
          className: "jsx-352178927"
        }, _react.default.createElement("img", {
          src: value.medium_path,
          alt: value.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 201
          },
          className: "jsx-352178927" + " " + "rounded card-img-top"
        }))), _react.default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 204
          },
          className: "jsx-352178927" + " " + "card-body idea-content"
        }, _react.default.createElement("h2", {
          "data-title": value.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 205
          },
          className: "jsx-352178927" + " " + "mt-2 font-13 text-black-100"
        }, value.name), _react.default.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 206
          },
          className: "jsx-352178927" + " " + "mt-2 images-title font-12 text-black-100 moreDes"
        }, value.descriptions))));
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
          lineNumber: 230
        }
      }, _react.default.createElement("div", {
        className: "d-md-block px-2 w-100 sidebar-service-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        }
      }, filter && filter.map(function (value, index) {
        return value.data.length != 0 && _react.default.createElement("div", {
          className: "child-sidebar-service pb-1 col-12 offset-md-0 col-md-12 px-0",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 235
          }
        }, _react.default.createElement("div", {
          className: "mt-2 widget p-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 236
          }
        }, _react.default.createElement("h3", {
          className: "font-15 mb-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 237
          }
        }, value.textName, _react.default.createElement("span", {
          className: "fa fa-chevron-right d-block d-md-none",
          "data-toggle": "collapse",
          "data-target": "#demoTest",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 237
          }
        })), _react.default.createElement("ul", {
          className: "list-unstyled mb-0 collapse d-md-block",
          id: "demoTest",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 238
          }
        }, value.data && (0, _helpers.mapObject)(value.data, function (index, value) {
          return _react.default.createElement("li", {
            className: "py-1 radio",
            key: index,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 241
            }
          }, _react.default.createElement(_routes.Link, {
            prefetch: true,
            route: value.uri,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 242
            }
          }, _react.default.createElement("a", {
            className: "font-13 font-weight-light text-gray",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 243
            }
          }, _react.default.createElement("label", {
            className: "px-3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 243
            }
          }, value.name_tag, _react.default.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 243
            }
          }, value.total_doc)))));
        }), _react.default.createElement("span", {
          className: "more loadmore d-none d-md-block",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 248
          }
        }, "Xem th\xEAm ", _react.default.createElement("i", {
          className: "la la-arrow-circle-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 248
          }
        })))));
      }), _react.default.createElement("div", {
        className: "child-sidebar-service pb-1 col-12 offset-md-0 col-md-12 px-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        }
      }, _react.default.createElement("div", {
        className: "mt-2 widget p-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        }
      }, _react.default.createElement("h3", {
        className: "font-15",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        }
      }, "M\xC0U S\u1EAEC"), _react.default.createElement("span", {
        className: "expand-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        }
      }), _react.default.createElement("div", {
        className: "service-color mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        }
      }, color && (0, _helpers.mapObject)(color, function (index, value) {
        return _react.default.createElement("a", {
          href: value.uri,
          className: "text-dark border border-gray",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 262
          }
        }, _react.default.createElement("span", {
          className: "float-left " + value.class,
          "data-toggle": "tooltip",
          title: value.name_tag,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 262
          }
        }));
      }))))));
    }
  }]);

  return Sidebar;
}(_react.default.PureComponent);

/***/ })

})
//# sourceMappingURL=5.45b3b5caf7d13faf0070.hot-update.js.map