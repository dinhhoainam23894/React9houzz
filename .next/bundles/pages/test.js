module.exports=__NEXT_REGISTER_PAGE("/test",function(){return{page:webpackJsonp([8],{275:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(0)),a=o(n(88));n(4);function o(e){return e&&e.__esModule?e:{default:e}}var i=function(e){return r.default.createElement(a.default,null,r.default.createElement("meta",{charset:"UTF-8"}),r.default.createElement("title",null,e.title||""),r.default.createElement("meta",{name:"description",content:e.description||""}),r.default.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),r.default.createElement("link",{rel:"icon",sizes:"192x192",href:"/static/touch-icon.png"}),r.default.createElement("link",{rel:"apple-touch-icon",href:"/static/touch-icon.png"}),r.default.createElement("link",{rel:"mask-icon",href:"/static/favicon-mask.svg",color:"#49B882"}),r.default.createElement("meta",{property:"og:url",content:e.url||""}),r.default.createElement("meta",{property:"og:title",content:e.title||""}),r.default.createElement("meta",{property:"og:description",content:e.description||""}),r.default.createElement("meta",{name:"twitter:site",content:e.url||""}),r.default.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.default.createElement("meta",{name:"twitter:image",content:e.ogImage||""}),r.default.createElement("meta",{property:"og:image",content:e.ogImage||""}),r.default.createElement("meta",{property:"og:image:width",content:"1200"}),r.default.createElement("meta",{property:"og:image:height",content:"630"}))};t.default=i},517:function(e,t,n){e.exports=n(518)},518:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(89)),a=c(n(2)),o=c(n(18)),i=(c(n(275)),c(n(157)),c(n(15))),l=c(n(0));function c(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}n(14);var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,o,c,u,d;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.default.Component),n=t,o=[{key:"render",value:function(){this.props.data;return l.default.createElement(i.default,s({},this.props,{navmenu:!1,container:!1}),l.default.createElement("div",{className:"jsx-204552899"},l.default.createElement("ul",{className:"jsx-204552899"},l.default.createElement(m,{href:"/test"},"test"),l.default.createElement(m,{href:"/index"},"index"),l.default.createElement(m,{href:"/y-tuong"},"ý tưởng")),l.default.createElement(r.default,{styleId:"204552899",css:[".hero.jsx-204552899{width:100%;color:#333;}",".title.jsx-204552899{margin:0;width:100%;padding-top:80px;line-height:1.15;font-size:48px;}",".title.jsx-204552899,.description.jsx-204552899{text-align:center;}",".row.jsx-204552899{max-width:880px;margin:80px auto 40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}",".card.jsx-204552899{padding:18px 18px 24px;width:220px;text-align:left;-webkit-text-decoration:none;text-decoration:none;color:#434343;border:1px solid #9B9B9B;}",".card.jsx-204552899:hover{border-color:#067df7;}",".card.jsx-204552899 h3.jsx-204552899{margin:0;color:#067df7;font-size:18px;}",".card.jsx-204552899 p.jsx-204552899{margin:0;padding:12px 0 0;font-size:13px;color:#333;}"]})))}}],c=[{key:"getInitialProps",value:(u=a.default.mark(function e(){var t,n,r,o;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://wp.catechetics.com/wp-json/wp/v2/",n="posts",e.next=4,fetch(t+n);case 4:return r=e.sent,e.next=7,r.json();case 7:return o=e.sent,e.abrupt("return",{data:o});case 9:case"end":return e.stop()}},e,this)}),d=function(){var e=this,t=arguments;return new Promise(function(n,r){var a=u.apply(e,t);function o(e,t){try{var o=a[e](t),c=o.value}catch(e){return void r(e)}o.done?n(c):Promise.resolve(c).then(i,l)}function i(e){o("next",e)}function l(e){o("throw",e)}i()})},function(){return d.apply(this,arguments)})}],o&&f(n.prototype,o),c&&f(n,c),t}();t.default=d;var m=function(e){var t=e.href,n=e.children;return l.default.createElement("li",{className:"jsx-1517752620"},l.default.createElement(o.default,{prefetch:!0,href:t},l.default.createElement("a",{className:"jsx-1517752620"},n)),l.default.createElement(r.default,{styleId:"1517752620",css:["li.jsx-1517752620{display:inline-block;}","a.jsx-1517752620{display:inline-block;padding:10px;font-size:11px;text-transform:uppercase;-webkit-text-decoration:none;text-decoration:none;color:#000;}","a.jsx-1517752620:hover{color:#fff;}"]}))}}},[517]).default}});