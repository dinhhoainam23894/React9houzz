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
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainBody = exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(0));

var _meta = _interopRequireDefault(__webpack_require__(11));

var _router = _interopRequireDefault(__webpack_require__(3));

var _head = _interopRequireDefault(__webpack_require__(4));

var _link = _interopRequireDefault(__webpack_require__(1));

var _reactstrap = __webpack_require__(7);

var _universalCookie = _interopRequireDefault(__webpack_require__(13));

var _package = _interopRequireDefault(__webpack_require__(14));

var _style = _interopRequireDefault(__webpack_require__(15));

var _nav = _interopRequireDefault(__webpack_require__(8));

var _footer = _interopRequireDefault(__webpack_require__(16));

var _reactDocumentMeta = _interopRequireDefault(__webpack_require__(17));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

// <style dangerouslySetInnerHTML={{__html: Styles}}/>
//           <style dangerouslySetInnerHTML={{__html: FontAwesome}}/>
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
      providers: null
    };
    _this.toggleModal = _this.toggleModal.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(_default, [{
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
          css = _props.css;
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_head.default, null, _react.default.createElement("meta", {
        charSet: "UTF-8"
      }), _react.default.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), _react.default.createElement("title", null, this.props.title || '9houz'), des && _react.default.createElement("meta", {
        name: "description",
        itemprop: "description",
        content: des
      }), canonical && _react.default.createElement("link", {
        rel: "canonical",
        href: canonical
      }), title && _react.default.createElement("meta", {
        property: "og:title",
        content: title
      }), des && _react.default.createElement("meta", {
        property: "og:description",
        content: des
      }), og_url && _react.default.createElement("meta", {
        property: "og:url",
        content: og_url
      }), url_images && _react.default.createElement("meta", {
        property: "og:image",
        content: url_images
      }), robots && _react.default.createElement("meta", {
        name: "robots",
        content: robots
      }), _react.default.createElement("script", {
        src: "https://cdn.polyfill.io/v2/polyfill.min.js"
      }), _react.default.createElement("script", {
        src: "https://unpkg.com/react@16/umd/react.production.min.js"
      }), _react.default.createElement("script", {
        src: "https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"
      }), _react.default.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: css
        }
      })), _react.default.createElement("header", null, _react.default.createElement("div", null, _react.default.createElement("nav", {
        className: "navbar navbar-light navbar-expand-md bg-faded container navbar-9houzz"
      }, _react.default.createElement("button", {
        className: "navbar-toggler px-0",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarCollapse",
        "aria-controls": "navbarCollapse",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
      }, _react.default.createElement("span", {
        className: "fa fa-2x fa-bars text-primary font-22"
      })), _react.default.createElement("div", {
        className: "header-left"
      }, _react.default.createElement("a", {
        className: "navbar-brand",
        href: "{{ route('home') }}"
      }, _react.default.createElement("img", {
        src: "/static/images/logo9houz.png",
        alt: "Logo",
        title: "9houzz.com",
        width: "114"
      }))), _react.default.createElement("a", {
        href: "#",
        "data-toggle": "offcanvas",
        className: "d-md-none"
      }, _react.default.createElement("i", {
        className: "fa fa-user-circle-o font-22  py-3"
      })), _react.default.createElement("div", {
        className: "collapse navbar-collapse header-right my-2 nav-menu",
        id: "collapse-header-login"
      }, _react.default.createElement("div", {
        className: "header-search d-none d-sm-none d-md-block mr-auto"
      }, _react.default.createElement("div", {
        className: "input-radius py-0"
      }, _react.default.createElement("form", null, _react.default.createElement("input", {
        type: "",
        className: "badge-pill form-control border-0 font-14 px-3",
        name: "",
        placeholder: "\xDD t\u01B0\u1EDFng b\u1EA1n mu\u1ED1n t\xECm ki\u1EBFm..."
      }), _react.default.createElement("button", {
        className: "fa fa-search icon-search bg-white border-0",
        "data-toggle": "offcanvas"
      }))))))), _react.default.createElement(_nav.default, null)), _react.default.createElement(_meta.default, null), _react.default.createElement(MainBody, {
        navmenu: this.props.navmenu,
        fluid: this.props.fluid,
        container: this.props.container
      }, this.props.children), _react.default.createElement(_footer.default, null));
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
        return _react.default.createElement(_react.default.Fragment, null, this.props.children);
      } else if (this.props.navmenu === false) {
        return _react.default.createElement(_reactstrap.Container, {
          fluid: this.props.fluid,
          style: {
            marginTop: '1em'
          }
        }, this.props.children);
      } else {
        return _react.default.createElement(_reactstrap.Container, {
          fluid: this.props.fluid,
          style: {
            marginTop: '1em'
          }
        }, _react.default.createElement(_reactstrap.Row, null, _react.default.createElement(_reactstrap.Col, {
          xs: "12",
          md: "9",
          lg: "10"
        }, this.props.children), _react.default.createElement(_reactstrap.Col, {
          xs: "12",
          md: "3",
          lg: "2",
          style: {
            paddingTop: '1em'
          }
        }, _react.default.createElement("h5", {
          className: "text-muted text-uppercase"
        }, "Examples"), _react.default.createElement(_reactstrap.ListGroup, null, _react.default.createElement(_reactstrap.ListGroupItem, null, _react.default.createElement(_link.default, {
          prefetch: true,
          href: "/examples/authentication"
        }, _react.default.createElement("a", {
          href: "/examples/authentication",
          className: "d-block"
        }, "Auth"))), _react.default.createElement(_reactstrap.ListGroupItem, null, _react.default.createElement(_link.default, {
          prefetch: true,
          href: "/examples/async"
        }, _react.default.createElement("a", {
          href: "/examples/async",
          className: "d-block"
        }, "Async"))), _react.default.createElement(_reactstrap.ListGroupItem, null, _react.default.createElement(_link.default, {
          prefetch: true,
          href: "/examples/layout"
        }, _react.default.createElement("a", {
          href: "/examples/layout",
          className: "d-block"
        }, "Layout"))), _react.default.createElement(_reactstrap.ListGroupItem, null, _react.default.createElement(_link.default, {
          prefetch: true,
          href: "/examples/routing"
        }, _react.default.createElement("a", {
          href: "/examples/routing",
          className: "d-block"
        }, "Routing"))), _react.default.createElement(_reactstrap.ListGroupItem, null, _react.default.createElement(_link.default, {
          prefetch: true,
          href: "/examples/styling"
        }, _react.default.createElement("a", {
          href: "/examples/styling",
          className: "d-block"
        }, "Styling")))))));
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
/* 7 */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _link = _interopRequireDefault(__webpack_require__(1));

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
    key: "toggle",
    value: function toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "nav-9houzz container-fluid"
      }, _react.default.createElement("nav", {
        className: "navbar navbar-light navbar-expand-md bg-faded container header-menu"
      }, _react.default.createElement("div", {
        className: "collapse navbar-collapse",
        id: "navbarCollapse"
      }, _react.default.createElement("ul", {
        className: "navbar-nav text-md-center d-flex w-100 position-relative list-unstyled  justify-md-content-start justify-content-start"
      }, _react.default.createElement("li", {
        className: "offset-0 offset-md-1 nav-item py-1 px-1"
      }, _react.default.createElement("div", {
        className: "d-flex w-100"
      }, _react.default.createElement("i", {
        className: "fa fa-lightbulb-o my-auto",
        "aria-hidden": "true"
      }), _react.default.createElement(_link.default, {
        prefetch: true,
        href: "/y-tuong"
      }, _react.default.createElement("a", {
        className: "nav-link mr-auto"
      }, "\xDD T\u01AF\u1EDENG")), _react.default.createElement("a", {
        className: "navbar-toggler menu-toggle",
        "data-toggle": "collapse",
        "data-target": "#nav-product-2",
        "aria-controls": "collapse-login",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
      }, _react.default.createElement("span", {
        className: "fa fa-chevron-right"
      }))), _react.default.createElement("div", {
        className: "collapse navbar-collapse",
        id: "nav-product-2"
      })), _react.default.createElement("li", {
        className: "nav-item py-1 px-1"
      }, _react.default.createElement("div", {
        className: "d-flex w-100"
      }, _react.default.createElement("i", {
        className: "fa fa-briefcase my-auto",
        "aria-hidden": "true"
      }), _react.default.createElement("a", {
        className: "nav-link mr-auto",
        href: "#"
      }, "D\u1EF0 \xC1N"), _react.default.createElement("a", {
        className: "navbar-toggler menu-toggle",
        "data-toggle": "collapse",
        "data-target": "#nav-product",
        "aria-controls": "collapse-login",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
      }, _react.default.createElement("span", {
        className: "fa fa-chevron-right "
      }))), _react.default.createElement("div", {
        className: "collapse navbar-collapse nav-prof",
        id: "nav-product"
      }, _react.default.createElement("div", {
        className: "nav-child container",
        role: "menu"
      }, _react.default.createElement("div", {
        className: "row py-1 px-2 nav-service d-flex"
      }, _react.default.createElement("div", {
        className: "col-md-12 text-left"
      }, _react.default.createElement("ul", {
        className: "list-unstyled"
      }, _react.default.createElement("li", {
        className: "mt-1"
      }, _react.default.createElement("a", {
        href: "#",
        className: "text-dark font-14"
      }, "aaaa")))))))), _react.default.createElement("li", {
        className: "nav-item py-1 px-1"
      }, _react.default.createElement("div", {
        className: "d-flex w-100"
      }, _react.default.createElement("i", {
        className: "fa fa-graduation-cap my-auto",
        "aria-hidden": "true"
      }), _react.default.createElement("a", {
        className: "nav-link mr-auto",
        href: "#"
      }, "PRO"), _react.default.createElement("a", {
        className: "navbar-toggler menu-toggle",
        "data-toggle": "collapse",
        "data-target": "#nav-product-3",
        "aria-controls": "collapse-login",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
      }, _react.default.createElement("span", {
        className: "fa fa-chevron-right "
      }))), _react.default.createElement("div", {
        className: "collapse navbar-collapse nav-prof",
        id: "nav-product-3"
      }, _react.default.createElement("div", {
        className: "nav-child container",
        role: "menu"
      }, _react.default.createElement("div", {
        className: "row py-1 px-2 nav-service d-flex"
      }, _react.default.createElement("div", {
        className: "col-md-12 text-left"
      }, _react.default.createElement("ul", {
        className: "list-unstyled"
      }, _react.default.createElement("li", {
        className: "mt-1"
      }, _react.default.createElement("a", {
        href: "#",
        className: "text-dark font-14"
      }, "Cate")))))))), _react.default.createElement("li", {
        className: "nav-item py-1 px-1"
      }, _react.default.createElement("div", {
        className: "d-flex w-100"
      }, _react.default.createElement("i", {
        className: "fa fa-pencil-square-o my-auto",
        "aria-hidden": "true"
      }), _react.default.createElement("a", {
        className: "nav-link",
        href: "#"
      }, "BLOG"))), _react.default.createElement("li", {
        className: "nav-item py-1 px-1"
      }, _react.default.createElement("div", {
        className: "d-flex w-100"
      }, _react.default.createElement("i", {
        className: "fa fa-rss my-auto",
        "aria-hidden": "true"
      }), _react.default.createElement("a", {
        className: "nav-link",
        href: "#"
      }, "TIN T\u1EE8C"))), _react.default.createElement("li", {
        className: "nav-item py-1 px-1 d-block d-md-none"
      }, _react.default.createElement("div", {
        className: "d-flex w-100"
      }, _react.default.createElement("i", {
        className: "fa fa-info-circle my-auto",
        "aria-hidden": "true"
      }), _react.default.createElement("a", {
        className: "nav-link mr-auto",
        href: "#"
      }, "V\u1EC0 CH\xDANG T\xD4I"), _react.default.createElement("a", {
        className: "navbar-toggler menu-toggle",
        "data-toggle": "collapse",
        "data-target": "#nav-product-4",
        "aria-controls": "collapse-login",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
      }, _react.default.createElement("span", {
        className: "fa fa-chevron-right "
      }))), _react.default.createElement("div", {
        className: "collapse navbar-collapse nav-prof",
        id: "nav-product-4"
      }, _react.default.createElement("div", {
        className: "nav-child container",
        role: "menu"
      }, _react.default.createElement("div", {
        className: "row py-1 px-2 nav-service d-flex"
      }, _react.default.createElement("div", {
        className: "col-md-12 text-left"
      }, _react.default.createElement("ul", {
        className: "list-unstyled"
      }, _react.default.createElement("li", null, _react.default.createElement("a", {
        href: "{{ route('static_page',['page' => str_slug('gi\u1EDBi thi\u1EC7u')]) }}",
        target: "_blank",
        title: "Gi\u1EDBi thi\u1EC7u"
      }, "Gi\u1EDBi thi\u1EC7u")), _react.default.createElement("li", null, _react.default.createElement("a", {
        href: "#",
        target: "_blank",
        title: "Li\xEAn h\u1EC7",
        rel: "nofollow"
      }, "Li\xEAn h\u1EC7")), _react.default.createElement("li", null, _react.default.createElement("a", {
        href: "{{ route('static_page',['page' => str_slug('Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt')]) }}",
        target: "_blank",
        title: "Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt"
      }, "Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt")), _react.default.createElement("li", null, _react.default.createElement("a", {
        href: "{{ route('static_page',['page' => str_slug('\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng')]) }}",
        target: "_blank",
        title: "\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng"
      }, "\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng"))))))))))));
    }
  }]);

  return nav;
}(_react.default.Component);

exports.default = nav;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(__webpack_require__(5));

var _react = _interopRequireDefault(__webpack_require__(0));

var _head = _interopRequireDefault(__webpack_require__(4));

var _nprogress = _interopRequireDefault(__webpack_require__(12));

var _router = _interopRequireDefault(__webpack_require__(3));

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
    className: "jsx-111088526"
  }, _react.default.createElement(_head.default, null, _react.default.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: "jsx-111088526"
  }), _react.default.createElement("meta", {
    charSet: "utf-8",
    className: "jsx-111088526"
  }), _react.default.createElement("link", {
    rel: "shortcut icon",
    href: "/static/favicon.ico",
    className: "jsx-111088526"
  })), _react.default.createElement(_style.default, {
    styleId: "111088526",
    css: ["body{font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",\"Roboto\",\"Oxygen\",\"Ubuntu\",\"Cantarell\",\"Fira Sans\",\"Droid Sans\",\"Helvetica Neue\",sans-serif;background:#eee;}", "*{margin:0;padding:0;box-sizing:border-box;}", "#nprogress{pointer-events:none;}", "#nprogress .bar{background:#b953a4;position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px;}", "#nprogress .peg{display:block;position:absolute;right:0px;width:500px;height:100%;box-shadow:0 0 10px #b953a4,0 0 5px #b953a4;opacity:1.0;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px);}"]
  }));
};

exports.default = _default;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("universal-cookie");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = {"name":"create-next-example-app","scripts":{"dev":"node server.js","build":"next build","start":"NODE_ENV=production node server.js"},"dependencies":{"@zeit/next-css":"^0.2.0","@zeit/next-sass":"^0.2.0","@zeit/next-typescript":"^1.1.0","axios":"^0.18.0","babel-plugin-inline-import":"^3.0.0","babel-plugin-module-resolver":"^3.1.1","bootstrap":"^4.1.1","css-loader":"^0.28.11","dotenv":"^6.0.0","es6-promise":"^4.2.4","express":"^4.16.3","font-awesome":"^4.7.0","ionicons":"^4.2.4","isomorphic-fetch":"^2.2.1","jquery":"^3.3.1","lru-cache":"^4.1.3","merge-files-webpack-plugin":"^1.1.2","next":"^6.1.1","next-compose":"0.0.2","next-routes":"^1.4.2","nprogress":"^0.2.0","postcss-loader":"^2.1.6","prop-types":"^15.6.2","purify-css":"^1.2.5","purifycss-webpack":"^0.7.0","raw-loader":"^0.5.1","react":"^16.4.1","react-document-meta":"^3.0.0-beta.2","react-dom":"^16.4.1","react-helmet":"^5.2.0","react-infinite":"^0.13.0","react-infinite-scroller":"^1.2.0","react-masonry-component":"^6.2.1","react-modal":"^3.5.1","reactstrap":"^6.3.0","style-loader":"^0.21.0","styled-jsx":"^2.2.7","styled-jsx-css-loader":"^0.3.0","styled-jsx-plugin-sass":"^0.2.4","tunnel-agent":"^0.6.0","universal-cookie":"^2.2.0","webpack":"^3.10.0"},"devDependencies":{"@babel/core":"^7.0.0-beta.53","create-next":"^0.1.4","node-sass":"^4.9.2","sass-loader":"^7.0.3"}}

/***/ }),
/* 15 */
/***/ (function(module, exports) {



/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

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
        className: "footer text-dark"
      }, _react.default.createElement("div", {
        className: "container py-3"
      }, _react.default.createElement("div", {
        className: "row footer-content my-2 mx-0 flex-wrap-reverse"
      }, _react.default.createElement("div", {
        className: "col-lg-3 column pr-1 footer-logo pl-5"
      }, _react.default.createElement("div", {
        className: "widget"
      }, _react.default.createElement("div", {
        className: "about_widget"
      }, _react.default.createElement("div", {
        className: "logo d-none d-md-block"
      }, _react.default.createElement("a", {
        href: "/",
        title: "Tr\u1EDF v\u1EC1 trang ch\u1EE7"
      }, _react.default.createElement("img", {
        src: "/static/images/logo9houz.png",
        alt: "9HOUZ.COM - Ngu\u1ED3n c\u1EA3m h\u1EE9ng thi\u1EBFt k\u1EBF n\u1ED9i th\u1EA5t, trang ho\xE0ng nh\xE0 c\u1EEDa | 9houz.com",
        title: "9houzz.com",
        width: "140"
      }))), _react.default.createElement("p", {
        className: "font-13"
      }, "Copyright \xA9 2018 9houz Inc.")))), _react.default.createElement("div", {
        className: "col-lg-9 row d-md-flex d-none"
      }, _react.default.createElement("div", {
        className: "col-lg-4 column footer-menu pr-1"
      }, _react.default.createElement("div", {
        className: "widget"
      }, _react.default.createElement("h3", {
        className: "footer-title"
      }, " V\u1EC0 CH\xDANG T\xD4I "), _react.default.createElement("div", {
        className: "link_widgets"
      }, _react.default.createElement("div", {
        className: "row"
      }, _react.default.createElement("div", {
        className: "col-lg-12"
      }, _react.default.createElement("a", {
        href: "{{ route('static_page',['page' => str_slug('gi\u1EDBi thi\u1EC7u')]) }}",
        target: "_blank",
        title: "Gi\u1EDBi thi\u1EC7u"
      }, "Gi\u1EDBi thi\u1EC7u"), _react.default.createElement("a", {
        href: "#",
        target: "_blank",
        title: "Li\xEAn h\u1EC7",
        rel: "nofollow"
      }, "Li\xEAn h\u1EC7"), _react.default.createElement("a", {
        href: "{{ route('static_page',['page' => str_slug('Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt')]) }}",
        target: "_blank",
        title: "Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt"
      }, "Ch\xEDnh s\xE1ch b\u1EA3o m\u1EADt"), _react.default.createElement("a", {
        href: "{{ route('static_page',['page' => str_slug('\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng')]) }}",
        target: "_blank",
        title: "\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng"
      }, "\u0110i\u1EC1u kho\u1EA3n s\u1EED d\u1EE5ng")))))), _react.default.createElement("div", {
        className: "col-lg-4 column footer-menu pr-1"
      }, _react.default.createElement("div", {
        className: "widget"
      }, _react.default.createElement("h3", {
        className: "footer-title"
      }, "KH\xC1M PH\xC1"), _react.default.createElement("div", {
        className: "link_widgets"
      }, _react.default.createElement("div", {
        className: "row"
      }, _react.default.createElement("div", {
        className: "col-lg-12"
      }, _react.default.createElement("a", {
        href: "#",
        title: "C\xE2u h\u1ECFi th\u01B0\u1EDDng g\u1EB7p",
        rel: "nofollow"
      }, " C\xE2u h\u1ECFi th\u01B0\u1EDDng g\u1EB7p "), _react.default.createElement("a", {
        href: "#",
        target: "_blank",
        title: "H\u01B0\u1EDBng d\u1EABn thanh to\xE1n",
        rel: "nofollow"
      }, " Blog "), _react.default.createElement("a", {
        href: "#",
        target: "_blank",
        title: "H\u01B0\u1EDBng d\u1EABn thanh to\xE1n",
        rel: "nofollow"
      }, " Tin t\u1EE9c "), _react.default.createElement("a", {
        href: "#",
        target: "_blank",
        title: "H\u01B0\u1EDBng d\u1EABn thanh to\xE1n",
        rel: "nofollow"
      }, " H\u1ECFi \u0111\xE1p "), _react.default.createElement("a", {
        href: "#",
        target: "_blank",
        title: "H\u01B0\u1EDBng d\u1EABn thanh to\xE1n",
        rel: "nofollow"
      }, " Rao v\u1EB7t ")))))), _react.default.createElement("div", {
        className: "col-lg-4 column footer-menu"
      }, _react.default.createElement("div", {
        className: "widget"
      }, _react.default.createElement("h3", {
        className: "footer-title"
      }, "LI\xCAN H\u1EC6"), _react.default.createElement("div", {
        className: "d-block social-links"
      }, _react.default.createElement("div", {
        className: "row"
      }, _react.default.createElement("div", {
        className: "col-lg-12 d-block"
      }, _react.default.createElement("a", {
        target: "_blank",
        rel: "nofollow",
        href: "#",
        className: "facebook d-block"
      }, _react.default.createElement("span", {
        className: "fa fa-facebook"
      }), "Facebook"), _react.default.createElement("a", {
        target: "_blank",
        rel: "nofollow",
        href: "#",
        className: "google d-block"
      }, _react.default.createElement("span", {
        className: "fa fa-google-plus"
      }), "Google+"), _react.default.createElement("a", {
        target: "_blank",
        rel: "nofollow",
        href: "#",
        className: "website d-block"
      }, _react.default.createElement("span", {
        className: "fa fa-youtube "
      }), "Youtube"), _react.default.createElement("a", {
        target: "_blank",
        rel: "nofollow",
        href: "#",
        className: "website d-block"
      }, _react.default.createElement("span", {
        className: "fa fa-envelope-o "
      }), "Support@9houz.com"))))))))));
    }
  }]);

  return footer;
}(_react.default.Component);

exports.default = footer;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-document-meta");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ucfirst = ucfirst;
exports.mapObject = exports.rating = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rating = function rating(avg_rate) {
  var star = [];

  for (var $i = 1; $i <= 5; $i++) {
    if ($i <= Math.floor(avg_rate)) {
      star.push(_react.default.createElement("span", {
        className: "fa fa-star",
        key: $i
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
        key: $i
      }, _react.default.createElement("span", {
        className: "position-absolute provider-star",
        style: divStyle
      })));
    } else {
      star.push(_react.default.createElement("span", {
        className: "fa fa-star disable",
        key: $i
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var routes = __webpack_require__(20); // Name   Page      Pattern


module.exports = routes() // ----   ----      -----
.add('index') // about  about     /about
.add('test', '/test') // blog   blog      /blog/:slug
.add('news', '/news').add('image', '/anh/:id-:slug', 'image/index').add('y-tuong', '/y-tuong', 'idea') // y-tuong   idea   /y-tuong
.add('idea.detail', '/y-tuong/:params', 'idea-filter').add('pro.detail', '/pro/:id-:slug', 'pro/index').add('pro.project', '/pro/:id-:slug/d%E1%BB%B1-%C3%A1n', 'pro/project').add('pro.review', '/pro/:id-:slug/nh%E1%BA%ADn-x%C3%A9t', 'pro/review').add('project.detail', '/du-an/:id-:slug', 'project/index');

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(0));

var _axios = _interopRequireDefault(__webpack_require__(10));

var _helpers = __webpack_require__(18);

var _jquery = _interopRequireDefault(__webpack_require__(21));

var _router = _interopRequireDefault(__webpack_require__(3));

var _link = _interopRequireDefault(__webpack_require__(1));

__webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var APIURL = "https://9houz.com/" + "api/" + 'image/';

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
                    currentImage: (0, _jquery.default)('img.currentImage')
                  });

                  image_thumb = (0, _jquery.default)('.thumb');

                  _this.setState({
                    image_thumb: image_thumb
                  });

                  image_id = _this.state.image.id;
                  image_thumb.each(function () {
                    if ((0, _jquery.default)(this).data('id') == image_id) {
                      (0, _jquery.default)(this).addClass('project-thumb--current');
                    }
                  });

                case 8:
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
          var image_size, currentIndex, lastIndex, lastImage, nextId, nextSlug;
          return _regenerator.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  e.preventDefault();
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
                  }); // Router.push(`/project?photoId=${id}&id=${id}&slug=${slug}`,`/anh/${nextId}-${nextSlug}`)


                case 11:
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
    Object.defineProperty(_assertThisInitialized(_this), "backImage", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value3 = _asyncToGenerator(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee3(e) {
          var image_size, currentIndex, lastIndex, lastImage, nextId, nextSlug;
          return _regenerator.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  e.preventDefault();
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

                case 11:
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
      currentValue: null
    };
    return _this;
  }

  _createClass(Image, [{
    key: "getValue",
    value: function () {
      var _getValue = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee4(id) {
        var _this2 = this;

        var data;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _axios.default.get(APIURL + id).then(function (res) {
                  data = res.data;

                  _this2.setState({
                    image: data.image,
                    project: data.project,
                    images: data.list_images,
                    provider: data.provider,
                    tag: data.tagSeo,
                    currentValue: data.image
                  });
                });

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function getValue(_x5) {
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
    key: "render",
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          id = _props.id,
          slug = _props.slug;
      return _react.default.createElement("div", null, _react.default.createElement("div", {
        className: "lgBg"
      }), _react.default.createElement("div", {
        id: "image-container"
      }, _react.default.createElement("div", {
        id: "lbMainControls",
        className: "trackMe d-block d-md-none"
      }, _react.default.createElement("div", null, _react.default.createElement("a", {
        className: "lbCloseButton lbClose",
        "aria-label": "Close",
        href: "",
        "data-dismiss": "modal",
        compid: "lbCloseButton"
      }))), _react.default.createElement("div", {
        className: "image"
      }, this.state.currentValue && _react.default.createElement("img", {
        className: "image-detail",
        src: this.state.currentValue.path_for_size,
        fallback: "image.path_for_size",
        alt: "image.name"
      })), _react.default.createElement("div", {
        className: "lb-navDiv"
      }, _react.default.createElement("a", {
        className: "link next lbNavigation nav-arrow",
        onClick: function onClick(e) {
          return _this3.nextImage(e, id, slug);
        }
      }, _react.default.createElement("div", {
        className: ""
      }, _react.default.createElement("span", {
        className: "fa fa-angle-right"
      }))), _react.default.createElement("a", {
        className: "link back lbNavigation nav-arrow",
        onClick: function onClick(e) {
          return _this3.backImage(e);
        }
      }, _react.default.createElement("div", {
        className: ""
      }, _react.default.createElement("span", {
        className: "fa fa-angle-left"
      })))), _react.default.createElement("div", {
        id: "lbActions"
      }, _react.default.createElement("div", {
        id: "lbActionCenter",
        className: "offset-0 offset-md-3 col-12 col-md-6 text-center text-nowrap"
      }, _react.default.createElement("button", {
        className: "btn btn-primary med save text-white",
        title: "Save To Ideabook",
        compid: "addToIdeabook"
      }, _react.default.createElement("i", {
        className: "fa fa-plus pr-2"
      }), "L\u01B0u \u1EA3nh"), _react.default.createElement("button", {
        className: "btn bg-black-100 med email text-white",
        title: "send email",
        compid: "addToIdeabook"
      }, _react.default.createElement("i", {
        className: "fa fa-envelope-o pr-2"
      }), "G\u1EEDi Email")))), _react.default.createElement(ImageInfo, {
        provider: this.state.provider,
        images: this.state.images,
        image: this.state.image,
        tag: this.state.tag,
        changeValue: function changeValue(data) {
          return _this3.setState({
            currentValue: data
          });
        },
        currentValue: this.state.currentValue,
        detail: this.props.detail
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
        className: "lbInfo"
      }, _react.default.createElement("div", null, _react.default.createElement("div", {
        className: "lbInfoTab position-relative d-none d-md-block"
      }, detail ? '' : _react.default.createElement("nav", null, _react.default.createElement("div", {
        className: "nav nav-tabs",
        id: "nav-tab",
        role: "tablist"
      }, _react.default.createElement("a", {
        className: "nav-item nav-link active",
        id: "nav-home-tab",
        "data-toggle": "tab",
        href: "#nav-home",
        role: "tab",
        "aria-controls": "nav-home",
        "aria-selected": "true"
      }, _react.default.createElement("i", {
        className: "fa fa-home"
      })), _react.default.createElement("a", {
        className: "nav-item nav-link",
        id: "nav-profile-tab",
        "data-toggle": "tab",
        href: "#nav-profile",
        role: "tab",
        "aria-controls": "nav-profile",
        "aria-selected": "false"
      }, _react.default.createElement("i", {
        className: "fa fa-tag"
      })), _react.default.createElement("a", {
        className: "nav-item nav-link",
        id: "nav-contact-tab",
        "data-toggle": "tab",
        href: "#nav-contact",
        role: "tab",
        "aria-controls": "nav-contact",
        "aria-selected": "false"
      }, _react.default.createElement("i", {
        className: "fa fa-comment"
      })))))), _react.default.createElement("div", {
        className: "content-mask"
      }, _react.default.createElement("div", {
        className: "content-scroll"
      }, _react.default.createElement("div", {
        className: "content-detail"
      }, _react.default.createElement("div", {
        className: "media"
      }, provider.auth_avatar && _react.default.createElement("img", {
        src: provider.auth_avatar,
        className: "align-self-start mr-2 rounded-circle detail-user mt-1"
      }), _react.default.createElement("div", {
        className: "media-body"
      }, _react.default.createElement("div", {
        className: "media-content"
      }, _react.default.createElement(_link.default, {
        prefetch: true,
        href: "/pro/".concat(provider.id, "-").concat(provider.slug)
      }, _react.default.createElement("a", {
        className: "font-weight-bold font-14 text-black-100"
      }, provider.name ? provider.name : 'Chưa có tên')), _react.default.createElement("div", {
        className: "star-rating font-14"
      }, _react.default.createElement("span", {
        className: "text-black-100 font-14"
      }, provider.avg_rate && (0, _helpers.rating)(provider.avg_rate), " (", provider.total_rate ? provider.total_rate : 0, " ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1)")))))), _react.default.createElement("div", {
        className: "content-detail border-0"
      }, _react.default.createElement("h2", {
        className: "font-15 text-black-100"
      }, currentValue && currentValue.name), _react.default.createElement("div", {
        className: "media-content",
        id: "readMore"
      }, _react.default.createElement("div", {
        className: "readMoreWrapper"
      }, _react.default.createElement("p", {
        id: "readMoreText",
        className: "font-13 normalText"
      }, currentValue && currentValue.descriptions), _react.default.createElement("div", {
        className: "readMoreGradient"
      })), _react.default.createElement("button", {
        id: "readMoreBtn"
      }), _react.default.createElement("span", {
        id: "readLessBtnText",
        style: {
          'display': 'none'
        }
      }, "R\xFAt g\u1ECDn "), _react.default.createElement("span", {
        id: "readMoreBtnText",
        style: {
          'display': 'none'
        }
      }, "Xem th\xEAm >"))), _react.default.createElement("div", {
        className: "content-detail border-0"
      }, _react.default.createElement("h2", {
        className: "font-14"
      }, _react.default.createElement("a", {
        href: "project.url_path",
        className: "text-black-100"
      }, "C\xE1c \u1EA3nh trong c\xF9ng d\u1EF1 \xE1n")), _react.default.createElement("ul", {
        className: "list-unstyled clearfix thumb-grid grid-5"
      }, images && images.map(function (value, index) {
        return _react.default.createElement("li", {
          className: "thumb project-thumb",
          "data-id": value.id,
          ref: "'image'+image.id",
          "data-slug": value.slug,
          key: index
        }, _react.default.createElement("a", {
          className: "link",
          onClick: function onClick(e) {
            return _this4.changeImage(e, value);
          }
        }, _react.default.createElement("div", {
          className: "img-responsive-wrapper img-responsive-square progressive"
        }, value.small_path && _react.default.createElement("img", {
          src: value.small_path,
          alt: "image.name",
          className: "img-respontive",
          id: "'image-'+image.id",
          width: "71",
          height: "71"
        }))));
      })), _react.default.createElement("div", {
        className: "pt-0"
      }, tag.breadcrumbs && _react.default.createElement("a", {
        href: tag.breadcrumbs.uri,
        className: "mr-2"
      }, _react.default.createElement("span", {
        className: "text-center font-12 font-weight-normal badge badge-pill badge-white border border-primary py-2 px-3 mb-2"
      }, tag.breadcrumbs.name_tag)), tag.other && tag.other.is_seo == 1 && _react.default.createElement("a", {
        href: tag.other.uri,
        className: "mr-2"
      }, _react.default.createElement("span", {
        className: "text-center font-12 font-weight-normal badge badge-pill badge-white border border-primary py-2 px-3 mb-2"
      }, tag.other.name_tag)))), _react.default.createElement("div", {
        className: "content-detail border-0"
      }, _react.default.createElement("div", {
        className: "header row m-0"
      }, _react.default.createElement("h2", {
        className: "font-14 text-black-100"
      }, "H\u1ECFi \u0111\xE1p v\u1EC1 h\xECnh \u1EA3nh"), _react.default.createElement("span", {
        className: "col-xs-12 col-md-12 px-0"
      }, _react.default.createElement("button", {
        id: "askQuestionButton",
        className: "btn border-primary btn-block text-primary font-13",
        compid: "lbAsk"
      }, "\u0110\u1EB7t c\xE2u h\u1ECFi c\u1EE7a b\u1EA1n")))))));
    }
  }]);

  return ImageInfo;
}(_react.default.PureComponent);

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(0));

var _imageDetail = _interopRequireDefault(__webpack_require__(22));

var _layout = _interopRequireDefault(__webpack_require__(6));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

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
        "aria-hidden": "true"
      }, _react.default.createElement("div", {
        id: "lbMainControls",
        className: "trackMe"
      }, _react.default.createElement("div", null, _react.default.createElement("a", {
        ref: function ref(el) {
          return _this._lbClose = el;
        },
        className: "lbCloseButton lbClose",
        href: "",
        onClick: function onClick(e) {
          return _this.dismiss(e);
        }
      }))), _react.default.createElement(_imageDetail.default, {
        id: this.props.id,
        slug: slug
      }));
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _axios = _interopRequireDefault(__webpack_require__(10));

__webpack_require__(9);

var _layout = _interopRequireDefault(__webpack_require__(6));

var _reactMasonryComponent = _interopRequireDefault(__webpack_require__(27));

var _reactInfiniteScroller = _interopRequireDefault(__webpack_require__(28));

var _imageModal = _interopRequireDefault(__webpack_require__(25));

var _helpers = __webpack_require__(18);

var _routes = __webpack_require__(19);

var _jquery = _interopRequireDefault(__webpack_require__(21));

var _fscreen_idea = _interopRequireDefault(__webpack_require__(29));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var APIURL = "https://9houz.com/" + "api/";
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
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        h1: this.props.h1,
        filter_default: this.props.filter_default,
        color: this.props.colors,
        images: this.props.images,
        nextUrl: this.props.nextUrl,
        listBadge: this.props.listBadge ? this.props.listBadge : []
      });
    }
  }, {
    key: "loadItems",
    value: function loadItems(page) {
      var self = this;
      var url = '';

      if (this.state.nextUrl) {
        url = this.state.nextUrl;
      }

      if (this.state.nextUrl != null) {
        _axios.default.get(url).then(function (resp) {
          if (resp) {
            var tracks = self.state.images;
            var data = resp.data;
            data.images.data.map(function (track) {
              tracks.push(track);
            });

            if (data.images.next_page_url && data.images.next_page_url != null) {
              self.setState({
                images: tracks,
                nextUrl: data.images.next_page_url
              });
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
    key: "dismissModal",
    value: function dismissModal(id) {
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
        _routes.Router.push(currentPath, asPath);
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
      var _state = this.state,
          images = _state.images,
          h1 = _state.h1,
          filter_default = _state.filter_default,
          color = _state.color,
          listBadge = _state.listBadge;
      var _props = this.props,
          photoId = _props.photoId,
          slug = _props.slug;
      return _react.default.createElement(_layout.default, _extends({}, this.props, {
        navmenu: false,
        container: false,
        css: _fscreen_idea.default
      }), photoId ? _react.default.createElement(_imageModal.default, {
        id: photoId,
        slug: slug,
        onDismiss: function onDismiss() {
          return _this2.dismissModal(photoId);
        }
      }) : '', _react.default.createElement("div", {
        className: "container-fluid service px-4 bg-gray"
      }, _react.default.createElement("div", {
        className: "row"
      }, _react.default.createElement("div", {
        className: "col-0 col-md-3 col-lg-3 px-3",
        id: "sidebar"
      }, _react.default.createElement(Sidebar, {
        filter: filter_default,
        color: color
      })), _react.default.createElement("div", {
        className: "col-12 col-md-9 col-lg-9 px-0",
        id: "cat"
      }, _react.default.createElement("div", {
        className: "bg-white px-3 py-4"
      }, _react.default.createElement("h1", {
        className: "text-dark title ml-1 pt-3"
      }, h1 && h1), _react.default.createElement("div", {
        className: "list-tag"
      }, listBadge ? listBadge.map(function (value, index) {
        return _react.default.createElement("a", {
          href: value.uri,
          key: index
        }, _react.default.createElement("span", {
          className: "badge badge-pill badge-light border border-primary mr-2 my-1 service-tag"
        }, value.name_tag, " ", _react.default.createElement("i", {
          className: "close"
        })));
      }) : ''), _react.default.createElement(_reactInfiniteScroller.default, {
        pageStart: 0,
        loadMore: this.loadItems.bind(this),
        hasMore: this.state.hasMoreItems,
        loader: _react.default.createElement("div", {
          className: "loader",
          key: "cx"
        }, "Loading ...")
      }, _react.default.createElement(_reactMasonryComponent.default, {
        className: '.grid are-images-unloaded mt-3',
        disableImagesLoaded: false,
        options: masonryOptions,
        updateOnEachImageLoad: false
      }, _react.default.createElement("div", {
        className: "grid__col-sizer"
      }), _react.default.createElement("div", {
        className: "grid__gutter-sizer"
      }), images && images.map(function (value, index) {
        return _react.default.createElement("div", {
          className: "grid__item rounded p-1",
          key: index
        }, _react.default.createElement("div", {
          "class": "card"
        }, _react.default.createElement("span", {
          className: "position-absolute rounded d-none upload"
        }, " ", _react.default.createElement("i", {
          className: "fa fa-upload"
        }), " L\u01B0u \u1EA3nh"), _react.default.createElement("a", {
          onClick: function onClick(e) {
            return _this2.showPhoto(e, value.id, value.slug);
          }
        }, _react.default.createElement("img", {
          className: "rounded card-img-top",
          src: value.medium_path,
          alt: "{{ $element->name }}"
        })), _react.default.createElement("div", {
          "class": "card-body"
        }, _react.default.createElement("h2", {
          className: "mt-2 font-13 text-black-100",
          "data-title": "{{ $element->name }}"
        }, value.name), _react.default.createElement("p", {
          className: "mt-2 images-title font-12 text-black-100 moreDes"
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
      var _props2 = this.props,
          filter = _props2.filter,
          color = _props2.color;
      return _react.default.createElement("div", {
        className: "sidebar-service row bg-white"
      }, _react.default.createElement("div", {
        className: "d-md-block px-2 w-100 sidebar-service-content"
      }, filter && filter.map(function (value, index) {
        return value.data.length != 0 && _react.default.createElement("div", {
          className: "child-sidebar-service pb-1 col-12 offset-md-0 col-md-12 px-0",
          key: index
        }, _react.default.createElement("div", {
          className: "mt-2 widget p-3"
        }, _react.default.createElement("h3", {
          className: "font-15 mb-3"
        }, value.textName, _react.default.createElement("span", {
          className: "fa fa-chevron-right d-block d-md-none",
          "data-toggle": "collapse",
          "data-target": "#demoTest"
        })), _react.default.createElement("ul", {
          className: "list-unstyled mb-0 collapse d-md-block",
          id: "demoTest"
        }, value.data && (0, _helpers.mapObject)(value.data, function (index, value) {
          return _react.default.createElement("li", {
            className: "py-1 radio",
            key: index
          }, _react.default.createElement("a", {
            href: value.uri,
            className: "font-13 font-weight-light text-gray"
          }, _react.default.createElement("label", {
            className: "px-3"
          }, value.name_tag, _react.default.createElement("span", null, value.total_doc))));
        }), _react.default.createElement("span", {
          className: "more loadmore d-none d-md-block"
        }, "Xem th\xEAm ", _react.default.createElement("i", {
          className: "la la-arrow-circle-right"
        })))));
      }), _react.default.createElement("div", {
        className: "child-sidebar-service pb-1 col-12 offset-md-0 col-md-12 px-0"
      }, _react.default.createElement("div", {
        className: "mt-2 widget p-3"
      }, _react.default.createElement("h3", {
        className: "font-15"
      }, "M\xC0U S\u1EAEC"), _react.default.createElement("span", {
        className: "expand-list"
      }), _react.default.createElement("div", {
        className: "service-color mt-3"
      }, color && (0, _helpers.mapObject)(color, function (index, value) {
        return _react.default.createElement("a", {
          href: value.uri,
          className: "text-dark border border-gray",
          key: index
        }, _react.default.createElement("span", {
          className: "float-left {{ array_get(config('filter.idea.data_type.color.class_name'), $item->original) }}",
          "data-toggle": "tooltip",
          title: value.name_tag
        }));
      }))))));
    }
  }]);

  return Sidebar;
}(_react.default.PureComponent);

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("react-masonry-component");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("react-infinite-scroller");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = "*,*::before,*::after{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-ms-overflow-style:scrollbar}@-ms-viewport{width:device-width}header,nav{display:block}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";font-size:1rem;font-weight:400;line-height:1.5;color:#333333;text-align:left;background-color:#fff}h1,h2,h3{margin-top:0;margin-bottom:0.5rem}p{margin-top:0;margin-bottom:1rem}ul{margin-top:0;margin-bottom:1rem}ul ul{margin-bottom:0}a{color:#b953a4;text-decoration:none;background-color:transparent;-webkit-text-decoration-skip:objects}a:not([href]):not([tabindex]){color:inherit;text-decoration:none}img{vertical-align:middle;border-style:none}label{display:inline-block;margin-bottom:0.5rem}button{border-radius:0}input,button{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button{text-transform:none}button,html [type=\"button\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner{padding:0;border-style:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}h1,h2,h3{margin-bottom:0.5rem;font-family:inherit;font-weight:500;line-height:1.2;color:inherit}h1{font-size:2.5rem}h2{font-size:2rem}h3{font-size:1.75rem}.list-unstyled{padding-left:0;list-style:none}.container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:576px){.container{max-width:540px}}@media (min-width:768px){.container{max-width:720px}}@media (min-width:992px){.container{max-width:960px}}@media (min-width:1200px){.container{max-width:1140px}}.container-fluid{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.row{display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.col-12,.col-md-3,.col-md-9,.col-md-12,.col-lg-3,.col-lg-9{position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px}.col-12{flex:0 0 100%;max-width:100%}@media (min-width:768px){.col-md-3{flex:0 0 25%;max-width:25%}.col-md-9{flex:0 0 75%;max-width:75%}.col-md-12{flex:0 0 100%;max-width:100%}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.33333%}}@media (min-width:992px){.col-lg-3{flex:0 0 25%;max-width:25%}.col-lg-9{flex:0 0 75%;max-width:75%}}.form-control{display:block;width:100%;padding:0.375rem 0.75rem;font-size:1rem;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:0.25rem}.form-control::-ms-expand{background-color:transparent;border:0}.collapse:not(.show){display:none}.nav-link{display:block;padding:0.5rem 1rem}.navbar{position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding:0.5rem 1rem}.navbar-brand{display:inline-block;padding-top:0.3125rem;padding-bottom:0.3125rem;margin-right:1rem;font-size:1.25rem;line-height:inherit;white-space:nowrap}.navbar-nav{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-collapse{flex-basis:100%;flex-grow:1;align-items:center}.navbar-toggler{padding:0.25rem 0.75rem;font-size:1.25rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:0.25rem}@media (min-width:768px){.navbar-expand-md{flex-flow:row nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .nav-link{padding-right:0.5rem;padding-left:0.5rem}.navbar-expand-md .navbar-collapse{display:flex!important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}}.navbar-light .navbar-brand{color:rgba(17,17,17,0.9)}.navbar-light .navbar-nav .nav-link{color:rgba(17,17,17,0.5)}.navbar-light .navbar-toggler{color:rgba(17,17,17,0.5);border-color:rgba(17,17,17,0.1)}.badge-pill{padding-right:0.6em;padding-left:0.6em;border-radius:10rem}.bg-white{background-color:#fff!important}.border-0{border:0!important}.rounded{border-radius:0.25rem!important}.d-none{display:none!important}.d-block{display:block!important}.d-flex{display:flex!important}@media (min-width:576px){.d-sm-none{display:none!important}}@media (min-width:768px){.d-md-none{display:none!important}.d-md-block{display:block!important}}.justify-content-start{justify-content:flex-start!important}.position-relative{position:relative!important}.position-absolute{position:absolute!important}.w-100{width:100%!important}.mb-0{margin-bottom:0!important}.mt-1{margin-top:0.25rem!important}.ml-1{margin-left:0.25rem!important}.mt-2,.my-2{margin-top:0.5rem!important}.my-2{margin-bottom:0.5rem!important}.mt-3{margin-top:1rem!important}.mb-3{margin-bottom:1rem!important}.py-0{padding-top:0!important}.px-0{padding-right:0!important}.py-0{padding-bottom:0!important}.px-0{padding-left:0!important}.p-1{padding:0.25rem!important}.py-1{padding-top:0.25rem!important}.px-1{padding-right:0.25rem!important}.pb-1,.py-1{padding-bottom:0.25rem!important}.px-1{padding-left:0.25rem!important}.px-2{padding-right:0.5rem!important}.px-2{padding-left:0.5rem!important}.p-3{padding:1rem!important}.pt-3,.py-3{padding-top:1rem!important}.px-3{padding-right:1rem!important}.py-3{padding-bottom:1rem!important}.px-3{padding-left:1rem!important}.py-4{padding-top:1.5rem!important}.px-4{padding-right:1.5rem!important}.py-4{padding-bottom:1.5rem!important}.px-4{padding-left:1.5rem!important}.my-auto{margin-top:auto!important}.mr-auto{margin-right:auto!important}.my-auto{margin-bottom:auto!important}.text-left{text-align:left!important}@media (min-width:768px){.text-md-center{text-align:center!important}}.font-weight-light{font-weight:300!important}.text-primary{color:#b953a4!important}.text-dark{color:#343a40!important}@font-face{font-family:'FontAwesome';src:url(\"/static/fonts/fontawesome-webfont.eot?v=4.7.0\");src:url(\"/static/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0\") format(\"embedded-opentype\"),url(\"/static/fonts/fontawesome-webfont.woff2?v=4.7.0\") format(\"woff2\"),url(\"/static/fonts/fontawesome-webfont.woff?v=4.7.0\") format(\"woff\"),url(\"/static/fonts/fontawesome-webfont.ttf?v=4.7.0\") format(\"truetype\"),url(\"/static/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular\") format(\"svg\");font-weight:normal;font-style:normal}.fa{display:inline-block;font:normal normal normal 14px/1 FontAwesome;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-2x{font-size:2em}.fa-search:before{content:\"\\F002\"}.fa-pencil-square-o:before{content:\"\\F044\"}.fa-chevron-right:before{content:\"\\F054\"}.fa-info-circle:before{content:\"\\F05A\"}.fa-upload:before{content:\"\\F093\"}.fa-rss:before{content:\"\\F09E\"}.fa-briefcase:before{content:\"\\F0B1\"}.fa-bars:before{content:\"\\F0C9\"}.fa-lightbulb-o:before{content:\"\\F0EB\"}.fa-graduation-cap:before{content:\"\\F19D\"}.fa-user-circle-o:before{content:\"\\F2BE\"}body{font-family:helvetica-ttf,sans-serif!important}h1{font-family:helvetica-ttf,sans-serif!important}input{outline:none;border:none}input::-webkit-input-placeholder{color:#adadad}input:-moz-placeholder{color:#adadad}input::-moz-placeholder{color:#adadad}input:-ms-input-placeholder{color:#adadad}button{outline:none!important;border:none;background:transparent}.font-12{font-size:12px!important}.font-13{font-size:13px!important}.font-14{font-size:14px!important}.font-15{font-size:15px!important}.font-22{font-size:22px!important}.text-gray{color:#666666!important}.text-black-100{color:#333333!important}.bg-gray{background-color:#dddddd!important}.navbar-9houzz{color:#666666!important;height:60px}.header-search .input-radius{border:1px solid!important;border-radius:4em / 5em}.header-search{position:relative;width:550px;margin-left:15px;display:block}.header-search .input-radius{width:100%;height:40px;border:1px solid #dddddd!important}.header-search .icon-search{position:absolute;right:10px;top:22%;color:#b953a4;z-index:10;font-weight:lighter}.header-left{padding:0!important}@media (min-width:1300px){.container{max-width:1265px}}@media (min-width:768px) and (max-width:992px){.container{max-width:868px}}@media (min-width:768px) and (max-width:991.98px){.header-search{margin-left:50px!important}}@media (min-width:576px) and (max-width:767.98px){.navbar-9houzz{max-width:100%}header{height:60px!important}}@media (max-width:575.98px){header{height:60px!important}}header{position:relative;height:105px;background:white;z-index:1000000}.nav-9houzz{background-color:#b953a4!important;color:white;position:relative;margin-left:0!important;margin-right:0!important}.nav-9houzz .header-menu{padding:0!important}.nav-9houzz .header-menu .nav-item:first-child{margin-left:7%!important}.nav-9houzz .header-menu .nav-item{display:block;padding-left:40px!important;padding-right:40px!important}.nav-9houzz .header-menu .nav-item .nav-link{padding:0.5rem 0.5rem!important;font-size:14px!important;color:white!important}.nav-9houzz .header-menu .nav-item .nav-prof{position:relative!important}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child{top:4px!important;left:-40px!important;width:270px!important;z-index:11111111111}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child a{color:#666!important}.nav-9houzz .header-menu .nav-item .nav-child{position:absolute;display:none!important;top:100%;left:0;background:white;list-style:none;border:1px solid #dddddd;border-top:none;padding:10px 14px 20px;z-index:11111111111}@media (max-width:767.98px){.nav-9houzz{padding-left:0!important;padding-right:0!important}.nav-9houzz .navbar>.navbar-collapse{padding-bottom:20px!important}.nav-9houzz .header-menu,.nav-9houzz .header-menu .nav-item{padding-left:10px!important;padding-right:10px!important}.nav-9houzz .header-menu .nav-child,.nav-9houzz .header-menu .nav-item .nav-child{position:relative!important;top:0!important;display:block!important;overflow:hidden!important}.nav-9houzz .header-menu .navbar-toggler,.nav-9houzz .header-menu .nav-item .navbar-toggler{padding:0.25rem 0.25rem!important}.nav-9houzz .header-menu .navbar-toggler span,.nav-9houzz .header-menu .nav-item .navbar-toggler span{font-size:13px!important}.navbar-toggler{border:none!important}.navbar-toggler span{font-size:18px!important;margin-top:3px!important}.nav-9houzz .header-menu .nav-item .nav-child{background:none!important;border:none!important}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child{padding-top:0!important;top:0px!important;left:0px!important;width:100%;-webkit-box-shadow:none;box-shadow:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:11111111111}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child a{color:#fff!important;font-size:16px!important}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child .nav-service{padding-left:0!important;line-height:30px!important}.nav-9houzz .header-menu .nav-item .nav-prof .nav-child .text-left{padding-left:0!important}.nav-9houzz .header-menu .nav-item:first-child{margin-left:0%!important}}@media (max-width:767.98px){.widget h3{display:inline-block;font-size:16px!important;font-weight:600!important;line-height:1.25;margin-bottom:10px!important}}span{font-size:13px!important}@media (max-width:575.98px){#sidebar{max-width:100%!important;margin-top:-0.5rem!important;border-top:none!important}}img{vertical-align:middle}.grid__item,.grid__col-sizer{width:32.5%}.grid__gutter-sizer{width:0.6%}.grid__item{margin-bottom:20px;float:left}.grid__item .upload{padding:0.5rem 0.75rem;background:white;top:10px;left:10px;z-index:100}.grid__item img{display:block;max-width:100%;width:100%}@media (min-width:992px) and (max-width:1199.98px){.grid__item,.grid__col-sizer{width:24%}}@media (min-width:768px) and (max-width:991.98px){.grid__item,.grid__col-sizer{width:33%}}@media (max-width:767.98px){.grid__item,.grid__col-sizer{width:99%}.service{padding-right:30px!important;padding-left:15px!important}.service .sidebar-service{width:100%;margin-left:8px}.service .idea-content h2{font-size:16px!important}.service .idea-content p{display:none!important;font-size:15px!important}}#sidebar{max-width:23%!important}.sidebar-service{width:91%;margin-left:25px}.widget h3{font-weight:600!important;font-size:14px!important}#cat .title{font-size:21px!important;font-weight:400!important}.child-sidebar-service{overflow:hidden;border-bottom:1px solid #e6e6e6}.child-sidebar-service ul{overflow:hidden;clear:both}.child-sidebar-service ul label{color:#333!important;font-size:13px!important;font-weight:400}.child-sidebar-service ul li:nth-child(n+5){display:none}.child-sidebar-service ul .loadmore{float:right;font-size:13px;color:#b953a4!important;margin-top:10px}.child-sidebar-service ul .radio{width:100%;position:relative}.child-sidebar-service ul .radio a{display:block;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;max-width:87%}.child-sidebar-service ul .radio a span{position:absolute;right:0}@media (max-width:767.98px){.service #sidebar{max-width:100%!important;margin-top:0.5rem!important;border-top:none!important;margin-bottom:0.5rem!important}.sidebar-service{background:none!important}.sidebar-service .sidebar-service-content{padding-left:0!important;padding-right:0!important}.sidebar-service a{color:black!important;text-decoration:none}.child-sidebar-service{background:#fff!important;padding:0.5rem!important;padding-bottom:0!important}.child-sidebar-service .widget{margin-top:0!important;padding:0.5rem!important}.child-sidebar-service .widget h3{font-size:17px!important}.child-sidebar-service .widget h3 span{font-size:18px!important}.child-sidebar-service ul li:nth-child(n+5){display:block!important}.child-sidebar-service ul label{font-size:16px!important}.child-sidebar-service ul label span{font-size:16px!important}.child-sidebar-service h3{margin-bottom:0.5rem!important;font-size:17px!important}.child-sidebar-service h3 span{position:absolute;right:6px;top:13px;padding:7px}}.service{font-size:13px}.service h3{font-weight:inherit}img{vertical-align:middle}.grid__item,.grid__col-sizer{width:32.5%}.grid__gutter-sizer{width:0.6%}.grid__item{margin-bottom:20px;float:left}.grid__item .upload{padding:0.5rem 0.75rem;background:white;top:10px;left:10px;z-index:100}.grid__item img{display:block;max-width:100%;width:100%}@media (min-width:992px) and (max-width:1199.98px){.grid__item,.grid__col-sizer{width:24%}}@media (min-width:768px) and (max-width:991.98px){.grid__item,.grid__col-sizer{width:33%}}@media (max-width:767.98px){.grid__item,.grid__col-sizer{width:99%}.service{padding-right:30px!important;padding-left:15px!important}.service .sidebar-service{width:100%;margin-left:8px}.service .idea-content h2{font-size:16px!important}.service .idea-content p{display:none!important;font-size:15px!important}}.card {position: relative;display: flex;flex-direction: column;min-width: 0;word-wrap: break-word;background-color: #fff;background-clip: border-box;border: 1px solid rgba(17, 17, 17, 0.125);border-radius: 0.25rem;}.card-img-top{width:100%;border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px);border-bottom: 1px solid rgba(17, 17, 17, 0.125)}.card-body{flex:1 1 auto;padding:1.25rem}";

/***/ }),
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(40);


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(2));

var _react = _interopRequireDefault(__webpack_require__(0));

var _IdeaComponent = _interopRequireDefault(__webpack_require__(26));

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

var APIURL = "https://9houz.com/" + "api/";

var IdeaFilter =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IdeaFilter, _React$Component);

  _createClass(IdeaFilter, null, [{
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
                res = null;

                if (!query.f) {
                  _context.next = 8;
                  break;
                }

                _context.next = 5;
                return fetch(APIURL + 'y-tuong/' + encodeURIComponent(query.params) + "?f=".concat(query.f));

              case 5:
                res = _context.sent;
                _context.next = 11;
                break;

              case 8:
                _context.next = 10;
                return fetch(APIURL + 'y-tuong/' + encodeURIComponent(query.params));

              case 10:
                res = _context.sent;

              case 11:
                _context.next = 13;
                return res.json();

              case 13:
                data = _context.sent;
                return _context.abrupt("return", {
                  h1: data.h1,
                  filter_default: data.filter_default,
                  colors: data.colors,
                  images: data.images.data,
                  nextUrl: data.images.next_page_url,
                  params: query.params,
                  subParams: query.f,
                  listBadge: data.listBadge,
                  title: data.seo.title,
                  des: data.seo.des,
                  canonical: data.seo.canonical,
                  robots: data.seo.robots,
                  og_url: data.seo.url,
                  url_images: data.seo.url_images
                });

              case 15:
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

  function IdeaFilter(props) {
    _classCallCheck(this, IdeaFilter);

    return _possibleConstructorReturn(this, (IdeaFilter.__proto__ || Object.getPrototypeOf(IdeaFilter)).call(this, props));
  }

  _createClass(IdeaFilter, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          params = _props.params,
          url = _props.url,
          subParams = _props.subParams;
      return _react.default.createElement(_IdeaComponent.default, _extends({}, this.props, {
        photoId: this.props.url.query && this.props.url.query.photoId,
        ideaParams: params,
        subParams: subParams,
        asPath: url.asPath,
        path: url.pathname
      }));
    }
  }]);

  return IdeaFilter;
}(_react.default.Component);

exports.default = IdeaFilter;

/***/ })
/******/ ]);