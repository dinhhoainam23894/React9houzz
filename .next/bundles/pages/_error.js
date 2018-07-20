module.exports=__NEXT_REGISTER_PAGE("/_error",function(){return{page:webpackJsonp([11],{408:function(e,t,r){e.exports=r(409)},409:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(r(0)),l=c(r(88)),o=c(r(18)),a=r(321),u=r(44);function c(e){return e&&e.__esModule?e:{default:e}}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var r,u,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.Component),r=t,c=[{key:"propTypes",value:function(){return{errorCode:n.default.PropTypes.number.isRequired,url:n.default.PropTypes.string.isRequired}}},{key:"getInitialProps",value:function(e){var t=e.res,r=e.xhr;return{errorCode:t?t.statusCode:r?r.status:null}}}],(u=[{key:"render",value:function(){var e;switch(this.props.errorCode){case 200:case 404:e=n.default.createElement("div",null,n.default.createElement(l.default,null),n.default.createElement(a.Container,{className:"pt-5 text-center"},n.default.createElement("h1",{className:"display-4"},"Page Not Found"),n.default.createElement("p",null,"The page ",n.default.createElement("strong",null,this.props.router.pathname)," does not exist."),n.default.createElement("p",null,n.default.createElement(o.default,{href:"/"},n.default.createElement("a",null,"Home")))));break;case 500:e=n.default.createElement("div",null,n.default.createElement(l.default,null),n.default.createElement(a.Container,{className:"pt-5 text-center"},n.default.createElement("h1",{className:"display-4"},"Internal Server Error"),n.default.createElement("p",null,"An internal server error occurred.")));break;default:e=n.default.createElement("div",null,n.default.createElement(l.default,null),n.default.createElement(a.Container,{className:"pt-5 text-center"},n.default.createElement("h1",{className:"display-4"},"HTTP ",this.props.errorCode," Error"),n.default.createElement("p",null,"An ",n.default.createElement("strong",null,"HTTP ",this.props.errorCode)," error occurred while trying to access ",n.default.createElement("strong",null,this.props.router.pathname))))}return e}}])&&s(r.prototype,u),c&&s(r,c),t}(),d=(0,u.withRouter)(p);t.default=d}},[408]).default}});