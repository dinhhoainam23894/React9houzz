module.exports=__NEXT_REGISTER_PAGE("/_error",function(){return{page:webpackJsonp([16],{449:function(e,t,r){e.exports=r(450)},450:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(r(55)),a=c(r(1)),o=c(r(184)),l=(c(r(185)),r(368)),i=r(19);function c(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var r,i,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),r=t,c=[{key:"propTypes",value:function(){return{errorCode:a.default.PropTypes.number.isRequired,url:a.default.PropTypes.string.isRequired}}},{key:"getInitialProps",value:function(e){var t=e.res,r=e.xhr;return{errorCode:t?t.statusCode:r?r.status:null}}}],(i=[{key:"render",value:function(){var e;switch(this.props.errorCode){case 200:case 404:e=a.default.createElement("div",{className:"jsx-978077609 container"},a.default.createElement("div",{className:"jsx-978077609 row mt-5"},a.default.createElement("div",{className:"jsx-978077609 col-12 text-center title mt-3 mb-3"},a.default.createElement("img",{src:"/static/images/404.png",className:"jsx-978077609"})),a.default.createElement("div",{style:{color:"#d5d8f3"},className:"jsx-978077609 col-12 text-center font-25 mt-3"},"Chúng tôi xin lỗi. Trang bạn tìm kiếm không tồn tại"),a.default.createElement("div",{className:"jsx-978077609 col-6 offset-md-3 mt-3 text-center explain font-14"},"Thật không may là trang bạn đang tìm kiếm không thể tìm thấy. Nó có thể tạm thời không có, di chuyển hoặc không còn tồn tại. Kiểm tra Url mà bạn đã nhập cho bất kỳ lỗi nào và thử lại."),a.default.createElement("div",{className:"jsx-978077609 col-12 text-center mt-3"},a.default.createElement("a",{href:"/",className:"jsx-978077609 btn btn-primary font-weight-bold"},"Về trang chủ"))),a.default.createElement(n.default,{styleId:"978077609",css:['body{margin:0;padding:0;background:url("/static/images/background404.jpg");display:table;width:100% !important;height:100%;min-height:100%;color:#ffffff !important;background-repeat:no-repeat;background-position:center center;font-family:helvetica-ttf;}',".container{padding-top:11rem !important;padding-bottom:9rem !important;max-width:100% !important;text-align:center;display:table-cell;background-color:rgba(185,83,164,0.6) !important;background-size:cover;height:100%;}",".container{max-width:400px;}",".title{font-size:100px;}"]}));break;case 500:e=a.default.createElement("div",null,a.default.createElement(o.default,null),a.default.createElement(l.Container,{className:"pt-5 text-center"},a.default.createElement("h1",{className:"display-4"},"Internal Server Error"),a.default.createElement("p",null,"An internal server error occurred.")));break;default:e=a.default.createElement("div",null,a.default.createElement(o.default,null),a.default.createElement(l.Container,{className:"pt-5 text-center"},a.default.createElement("h1",{className:"display-4"},"HTTP ",this.props.errorCode," Error"),a.default.createElement("p",null,"An ",a.default.createElement("strong",null,"HTTP ",this.props.errorCode)," error occurred while trying to access ",a.default.createElement("strong",null,this.props.router.pathname))))}return e}}])&&s(r.prototype,i),c&&s(r,c),t}(),m=(0,i.withRouter)(d);t.default=m}},[449]).default}});