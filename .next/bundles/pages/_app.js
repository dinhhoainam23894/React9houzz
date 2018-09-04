(function () {
'use strict';

var _isObject = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var _anObject = function (it) {
  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

var _fails = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});

var document$1 = _global.document;
// typeof document.createElement is 'object' in old IE
var is = _isObject(document$1) && _isObject(document$1.createElement);
var _domCreate = function (it) {
  return is ? document$1.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function () {
  return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])

// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function (it, S) {
  if (!_isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var dP = Object.defineProperty;

var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  _anObject(O);
  P = _toPrimitive(P, true);
  _anObject(Attributes);
  if (_ie8DomDefine) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var _objectDp = {
	f: f
};

var _propertyDesc = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var _hide = _descriptors ? function (object, key, value) {
  return _objectDp.f(object, key, _propertyDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var hasOwnProperty = {}.hasOwnProperty;
var _has = function (it, key) {
  return hasOwnProperty.call(it, key);
};

var id = 0;
var px = Math.random();
var _uid = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var _core = createCommonjsModule(function (module) {
var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});
var _core_1 = _core.version;

var _redefine = createCommonjsModule(function (module) {
var SRC = _uid('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

_core.inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) _has(val, 'name') || _hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === _global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    _hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    _hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});
});

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

var _library = false;

var _shared = createCommonjsModule(function (module) {
var SHARED = '__core-js_shared__';
var store = _global[SHARED] || (_global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: _core.version,
  mode: _library ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});
});

var _wks = createCommonjsModule(function (module) {
var store = _shared('wks');

var Symbol = _global.Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
};

$exports.store = store;
});

var _fixReWks = function (KEY, length, exec) {
  var SYMBOL = _wks(KEY);
  var fns = exec(_defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (_fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    _redefine(String.prototype, KEY, strfn);
    _hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};

// @@replace logic
_fixReWks('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});

module.exports=__NEXT_REGISTER_PAGE('/_app',function(){var comp=webpackJsonp([3],{/***/"./node_modules/@babel/runtime/helpers/extends.js":/***/function node_modulesBabelRuntimeHelpersExtendsJs(module,exports,__webpack_require__){var _Object$assign=__webpack_require__("./node_modules/@babel/runtime/core-js/object/assign.js");function _extends(){module.exports=_extends=_Object$assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}module.exports=_extends;/***/},/***/"./node_modules/next/app.js":/***/function node_modulesNextAppJs(module,exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/next/dist/lib/app.js");/***/},/***/"./node_modules/next/dist/lib/app.js":/***/function node_modulesNextDistLibAppJs(module,exports,__webpack_require__){var _interopRequireWildcard=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:true});exports.createUrl=createUrl;exports.Container=exports.default=void 0;var _regenerator=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"));var _asyncToGenerator2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));var _extends2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));var _objectSpread2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectSpread.js"));var _getPrototypeOf=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/object/get-prototype-of.js"));var _classCallCheck2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js"));var _createClass2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"));var _possibleConstructorReturn2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));var _inherits2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js"));var _react=_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));var _propTypes=_interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));var _shallowEquals=_interopRequireDefault(__webpack_require__("./node_modules/next/dist/lib/shallow-equals.js"));var _utils=__webpack_require__("./node_modules/next/dist/lib/utils.js");var _router=__webpack_require__("./node_modules/next/dist/lib/router/index.js");var App=/*#__PURE__*/function(_Component){(0, _inherits2.default)(App,_Component);function App(){(0, _classCallCheck2.default)(this,App);return(0, _possibleConstructorReturn2.default)(this,(App.__proto__||(0, _getPrototypeOf.default)(App)).apply(this,arguments));}(0, _createClass2.default)(App,[{key:"getChildContext",value:function getChildContext(){var headManager=this.props.headManager;return{headManager:headManager,router:(0, _router.makePublicRouterInstance)(this.props.router),_containerProps:(0, _objectSpread2.default)({},this.props)};}// Kept here for backwards compatibility.
// When someone ended App they could call `super.componentDidCatch`. This is now deprecated.
},{key:"componentDidCatch",value:function componentDidCatch(err){throw err;}},{key:"render",value:function render(){var _props=this.props,router=_props.router,Component=_props.Component,pageProps=_props.pageProps;var url=createUrl(router);return _react.default.createElement(Container,null,_react.default.createElement(Component,(0, _extends2.default)({},pageProps,{url:url})));}}],[{key:"getInitialProps",value:function(){var _getInitialProps=(0, _asyncToGenerator2.default)(/*#__PURE__*/_regenerator.default.mark(function _callee(_ref){var Component,router,ctx,pageProps;return _regenerator.default.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:Component=_ref.Component,router=_ref.router,ctx=_ref.ctx;_context.next=3;return(0, _utils.loadGetInitialProps)(Component,ctx);case 3:pageProps=_context.sent;return _context.abrupt("return",{pageProps:pageProps});case 5:case"end":return _context.stop();}}},_callee,this);}));return function getInitialProps(_x){return _getInitialProps.apply(this,arguments);};}()}]);return App;}(_react.Component);exports.default=App;Object.defineProperty(App,"displayName",{configurable:true,enumerable:true,writable:true,value:'App'});Object.defineProperty(App,"childContextTypes",{configurable:true,enumerable:true,writable:true,value:{_containerProps:_propTypes.default.any,headManager:_propTypes.default.object,router:_propTypes.default.object}});var Container=/*#__PURE__*/function(_Component2){(0, _inherits2.default)(Container,_Component2);function Container(){(0, _classCallCheck2.default)(this,Container);return(0, _possibleConstructorReturn2.default)(this,(Container.__proto__||(0, _getPrototypeOf.default)(Container)).apply(this,arguments));}(0, _createClass2.default)(Container,[{key:"componentDidMount",value:function componentDidMount(){this.scrollToHash();}},{key:"componentDidUpdate",value:function componentDidUpdate(){this.scrollToHash();}},{key:"scrollToHash",value:function scrollToHash(){var hash=this.props.hash;if(!hash)return;var el=document.getElementById(hash);if(!el)return;// If we call scrollIntoView() in here without a setTimeout
// it won't scroll properly.
setTimeout(function(){return el.scrollIntoView();},0);}},{key:"shouldComponentUpdate",value:function shouldComponentUpdate(nextProps){// need this check not to rerender component which has already thrown an error
return!(0, _shallowEquals.default)(this.props,nextProps);}},{key:"render",value:function render(){var children=this.props.children;return _react.default.createElement(_react.default.Fragment,null,children);}}]);return Container;}(_react.Component);exports.Container=Container;Object.defineProperty(Container,"contextTypes",{configurable:true,enumerable:true,writable:true,value:{_containerProps:_propTypes.default.any}});var warnUrl=(0, _utils.execOnce)(function(){{(0, _utils.warn)("Warning: the 'url' property is deprecated. https://err.sh/next.js/url-deprecated");}});function createUrl(router){// This is to make sure we don't references the router object at call time
var pathname=router.pathname,asPath=router.asPath,query=router.query;return{get query(){warnUrl();return query;},get pathname(){warnUrl();return pathname;},get asPath(){warnUrl();return asPath;},back:function back(){warnUrl();router.back();},push:function push(url,as){warnUrl();return router.push(url,as);},pushTo:function pushTo(href,as){warnUrl();var pushRoute=as?href:null;var pushUrl=as||href;return router.push(pushRoute,pushUrl);},replace:function replace(url,as){warnUrl();return router.replace(url,as);},replaceTo:function replaceTo(href,as){warnUrl();var replaceRoute=as?href:null;var replaceUrl=as||href;return router.replace(replaceRoute,replaceUrl);}};}/***/},/***/"./node_modules/next/dist/pages/_app.js":/***/function node_modulesNextDistPages_appJs(module,exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/next/app.js");/***/},/***/3:/***/function _(module,exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/next/dist/pages/_app.js");/***/}},[3]);return{page:comp.default};});

}());

//# sourceMappingURL=_app.js.map