(function () {
'use strict';

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _core = createCommonjsModule(function (module) {
var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});
var _core_1 = _core.version;

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});

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

var id = 0;
var px = Math.random();
var _uid = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

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

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = _wks('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) _hide(ArrayProto, UNSCOPABLES, {});
var _addToUnscopables = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};

var _iterStep = function (done, value) {
  return { value: value, done: !!done };
};

var _iterators = {};

var toString = {}.toString;

var _cof = function (it) {
  return toString.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings

// eslint-disable-next-line no-prototype-builtins
var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return _cof(it) == 'String' ? it.split('') : Object(it);
};

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

// to indexed object, toObject with fallback for non-array-like ES3 strings


var _toIobject = function (it) {
  return _iobject(_defined(it));
};

var hasOwnProperty = {}.hasOwnProperty;
var _has = function (it, key) {
  return hasOwnProperty.call(it, key);
};

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

var _aFunction = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

// optional / simple context binding

var _ctx = function (fn, that, length) {
  _aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
    // extend global
    if (target) _redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) _hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
_global.core = _core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
var _export = $export;

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
var _toInteger = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

// 7.1.15 ToLength

var min = Math.min;
var _toLength = function (it) {
  return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var max = Math.max;
var min$1 = Math.min;
var _toAbsoluteIndex = function (index, length) {
  index = _toInteger(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes



var _arrayIncludes = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = _toIobject($this);
    var length = _toLength(O.length);
    var index = _toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var shared = _shared('keys');

var _sharedKey = function (key) {
  return shared[key] || (shared[key] = _uid(key));
};

var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO = _sharedKey('IE_PROTO');

var _objectKeysInternal = function (object, names) {
  var O = _toIobject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (_has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

// 19.1.2.14 / 15.2.3.14 Object.keys(O)



var _objectKeys = Object.keys || function keys(O) {
  return _objectKeysInternal(O, _enumBugKeys);
};

var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
  _anObject(O);
  var keys = _objectKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
  return O;
};

var document$2 = _global.document;
var _html = document$2 && document$2.documentElement;

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



var IE_PROTO$1 = _sharedKey('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE$1 = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _domCreate('iframe');
  var i = _enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  _html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
  return createDict();
};

var _objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE$1] = _anObject(O);
    result = new Empty();
    Empty[PROTOTYPE$1] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = createDict();
  return Properties === undefined ? result : _objectDps(result, Properties);
};

var def = _objectDp.f;

var TAG = _wks('toStringTag');

var _setToStringTag = function (it, tag, stat) {
  if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_hide(IteratorPrototype, _wks('iterator'), function () { return this; });

var _iterCreate = function (Constructor, NAME, next) {
  Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
  _setToStringTag(Constructor, NAME + ' Iterator');
};

// 7.1.13 ToObject(argument)

var _toObject = function (it) {
  return Object(_defined(it));
};

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


var IE_PROTO$2 = _sharedKey('IE_PROTO');
var ObjectProto = Object.prototype;

var _objectGpo = Object.getPrototypeOf || function (O) {
  O = _toObject(O);
  if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

var ITERATOR = _wks('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  _iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = _objectGpo($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      _setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!_library && typeof IteratorPrototype[ITERATOR] != 'function') _hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    _hide(proto, ITERATOR, $default);
  }
  // Plug for library
  _iterators[NAME] = $default;
  _iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) _redefine(proto, key, methods[key]);
    } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
  this._t = _toIobject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return _iterStep(1);
  }
  if (kind == 'keys') return _iterStep(0, index);
  if (kind == 'values') return _iterStep(0, O[index]);
  return _iterStep(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
_iterators.Arguments = _iterators.Array;

_addToUnscopables('keys');
_addToUnscopables('values');
_addToUnscopables('entries');

// most Object methods by ES6 should accept primitives



var _objectSap = function (KEY, exec) {
  var fn = (_core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  _export(_export.S + _export.F * _fails(function () { fn(1); }), 'Object', exp);
};

// 19.1.2.14 Object.keys(O)



_objectSap('keys', function () {
  return function keys(it) {
    return _objectKeys(_toObject(it));
  };
});

var ITERATOR$1 = _wks('iterator');
var TO_STRING_TAG = _wks('toStringTag');
var ArrayValues = _iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = _objectKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = _global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR$1]) _hide(proto, ITERATOR$1, ArrayValues);
    if (!proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME);
    _iterators[NAME] = ArrayValues;
    if (explicit) for (key in es6_array_iterator) if (!proto[key]) _redefine(proto, key, es6_array_iterator[key], true);
  }
}

var dP$1 = _objectDp.f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME$1 = 'name';

// 19.2.4.2 name
NAME$1 in FProto || _descriptors && dP$1(FProto, NAME$1, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});

// getting tag from 19.1.3.6 Object.prototype.toString()

var TAG$1 = _wks('toStringTag');
// ES3 wrong here
var ARG = _cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

var _classof = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
    // builtinTag case
    : ARG ? _cof(O)
    // ES3 arguments fallback
    : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

var _anInstance = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

// call something on iterator step with safe closing on error

var _iterCall = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) _anObject(ret.call(iterator));
    throw e;
  }
};

// check on default Array iterator

var ITERATOR$2 = _wks('iterator');
var ArrayProto$1 = Array.prototype;

var _isArrayIter = function (it) {
  return it !== undefined && (_iterators.Array === it || ArrayProto$1[ITERATOR$2] === it);
};

var ITERATOR$3 = _wks('iterator');

var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR$3]
    || it['@@iterator']
    || _iterators[_classof(it)];
};

var _forOf = createCommonjsModule(function (module) {
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : core_getIteratorMethod(iterable);
  var f = _ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (_isArrayIter(iterFn)) for (length = _toLength(iterable.length); length > index; index++) {
    result = entries ? f(_anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = _iterCall(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;
});

// 7.3.20 SpeciesConstructor(O, defaultConstructor)


var SPECIES = _wks('species');
var _speciesConstructor = function (O, D) {
  var C = _anObject(O).constructor;
  var S;
  return C === undefined || (S = _anObject(C)[SPECIES]) == undefined ? D : _aFunction(S);
};

// fast apply, http://jsperf.lnkit.com/fast-apply/5
var _invoke = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};

var process = _global.process;
var setTask = _global.setImmediate;
var clearTask = _global.clearImmediate;
var MessageChannel = _global.MessageChannel;
var Dispatch = _global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      _invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (_cof(process) == 'process') {
    defer = function (id) {
      process.nextTick(_ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(_ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = _ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (_global.addEventListener && typeof postMessage == 'function' && !_global.importScripts) {
    defer = function (id) {
      _global.postMessage(id + '', '*');
    };
    _global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in _domCreate('script')) {
    defer = function (id) {
      _html.appendChild(_domCreate('script'))[ONREADYSTATECHANGE] = function () {
        _html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(_ctx(run, id, 1), 0);
    };
  }
}
var _task = {
  set: setTask,
  clear: clearTask
};

var macrotask = _task.set;
var Observer = _global.MutationObserver || _global.WebKitMutationObserver;
var process$1 = _global.process;
var Promise$1 = _global.Promise;
var isNode = _cof(process$1) == 'process';

var _microtask = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process$1.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process$1.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(_global.navigator && _global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise$1 && Promise$1.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise$1.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(_global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};

// 25.4.1.5 NewPromiseCapability(C)


function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = _aFunction(resolve);
  this.reject = _aFunction(reject);
}

var f$1 = function (C) {
  return new PromiseCapability(C);
};

var _newPromiseCapability = {
	f: f$1
};

var _perform = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};

var navigator = _global.navigator;

var _userAgent = navigator && navigator.userAgent || '';

var _promiseResolve = function (C, x) {
  _anObject(C);
  if (_isObject(x) && x.constructor === C) return x;
  var promiseCapability = _newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

var _redefineAll = function (target, src, safe) {
  for (var key in src) _redefine(target, key, src[key], safe);
  return target;
};

var SPECIES$1 = _wks('species');

var _setSpecies = function (KEY) {
  var C = _global[KEY];
  if (_descriptors && C && !C[SPECIES$1]) _objectDp.f(C, SPECIES$1, {
    configurable: true,
    get: function () { return this; }
  });
};

var ITERATOR$4 = _wks('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR$4]();
  riter['return'] = function () { SAFE_CLOSING = true; };
} catch (e) { /* empty */ }

var _iterDetect = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR$4]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR$4] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};

var task = _task.set;
var microtask = _microtask();




var PROMISE = 'Promise';
var TypeError$1 = _global.TypeError;
var process$2 = _global.process;
var versions = process$2 && process$2.versions;
var v8 = versions && versions.v8 || '';
var $Promise = _global[PROMISE];
var isNode$1 = _classof(process$2) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = _newPromiseCapability.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[_wks('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode$1 || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && _userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return _isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError$1('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(_global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = _perform(function () {
        if (isNode$1) {
          process$2.emit('unhandledRejection', value, promise);
        } else if (handler = _global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = _global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode$1 || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(_global, function () {
    var handler;
    if (isNode$1) {
      process$2.emit('rejectionHandled', promise);
    } else if (handler = _global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError$1("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, _ctx($resolve, wrapper, 1), _ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    _anInstance(this, $Promise, PROMISE, '_h');
    _aFunction(executor);
    Internal.call(this);
    try {
      executor(_ctx($resolve, this, 1), _ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = _redefineAll($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(_speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode$1 ? process$2.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = _ctx($resolve, promise, 1);
    this.reject = _ctx($reject, promise, 1);
  };
  _newPromiseCapability.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

_export(_export.G + _export.W + _export.F * !USE_NATIVE, { Promise: $Promise });
_setToStringTag($Promise, PROMISE);
_setSpecies(PROMISE);
Wrapper = _core[PROMISE];

// statics
_export(_export.S + _export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
_export(_export.S + _export.F * (_library || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return _promiseResolve(_library && this === Wrapper ? $Promise : this, x);
  }
});
_export(_export.S + _export.F * !(USE_NATIVE && _iterDetect(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = _perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      _forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = _perform(function () {
      _forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});

/******/(function(modules){// webpackBootstrap
/******/ // install a JSONP callback for chunk loading
/******/var parentJsonpFunction=window["webpackJsonp"];/******/window["webpackJsonp"]=function webpackJsonpCallback(chunkIds,moreModules,executeModules){/******/ // add "moreModules" to the modules object,
/******/ // then flag all "chunkIds" as loaded and fire callback
/******/var moduleId,chunkId,i=0,resolves=[],result;/******/for(;i<chunkIds.length;i++){/******/chunkId=chunkIds[i];/******/if(installedChunks[chunkId]){/******/resolves.push(installedChunks[chunkId][0]);/******/}/******/installedChunks[chunkId]=0;/******/}/******/for(moduleId in moreModules){/******/if(Object.prototype.hasOwnProperty.call(moreModules,moduleId)){/******/modules[moduleId]=moreModules[moduleId];/******/}/******/}/******/if(parentJsonpFunction)parentJsonpFunction(chunkIds,moreModules,executeModules);/******/while(resolves.length){/******/resolves.shift()();/******/}/******/if(executeModules){/******/for(i=0;i<executeModules.length;i++){/******/result=__webpack_require__(__webpack_require__.s=executeModules[i]);/******/}/******/}/******/return result;/******/};/******/function hotDisposeChunk(chunkId){/******/delete installedChunks[chunkId];/******/}/******/var parentHotUpdateCallback=window["webpackHotUpdate"];/******/window["webpackHotUpdate"]=/******/function webpackHotUpdateCallback(chunkId,moreModules){// eslint-disable-line no-unused-vars
/******/hotAddUpdateChunk(chunkId,moreModules);/******/if(parentHotUpdateCallback)parentHotUpdateCallback(chunkId,moreModules);/******/};/******/ /******/function hotDownloadUpdateChunk(chunkId){// eslint-disable-line no-unused-vars
/******/var head=document.getElementsByTagName("head")[0];/******/var script=document.createElement("script");/******/script.type="text/javascript";/******/script.charset="utf-8";/******/script.src=__webpack_require__.p+""+chunkId+"."+hotCurrentHash+".hot-update.js";/******/head.appendChild(script);/******/}/******/ /******/function hotDownloadManifest(requestTimeout){// eslint-disable-line no-unused-vars
/******/requestTimeout=requestTimeout||10000;/******/return new Promise(function(resolve,reject){/******/if(typeof XMLHttpRequest==="undefined")/******/return reject(new Error("No browser support"));/******/try{/******/var request=new XMLHttpRequest();/******/var requestPath=__webpack_require__.p+""+hotCurrentHash+".hot-update.json";/******/request.open("GET",requestPath,true);/******/request.timeout=requestTimeout;/******/request.send(null);/******/}catch(err){/******/return reject(err);/******/}/******/request.onreadystatechange=function(){/******/if(request.readyState!==4)return;/******/if(request.status===0){/******/ // timeout
/******/reject(new Error("Manifest request to "+requestPath+" timed out."));/******/}else if(request.status===404){/******/ // no update available
/******/resolve();/******/}else if(request.status!==200&&request.status!==304){/******/ // other failure
/******/reject(new Error("Manifest request to "+requestPath+" failed."));/******/}else{/******/ // success
/******/try{/******/var update=JSON.parse(request.responseText);/******/}catch(e){/******/reject(e);/******/return;/******/}/******/resolve(update);/******/}/******/};/******/});/******/}/******/ /******/ /******/ /******/var hotApplyOnUpdate=true;/******/var hotCurrentHash="3cf2baf7f8a1c387ed68";// eslint-disable-line no-unused-vars
/******/var hotRequestTimeout=10000;/******/var hotCurrentModuleData={};/******/var hotCurrentChildModule;// eslint-disable-line no-unused-vars
/******/var hotCurrentParents=[];// eslint-disable-line no-unused-vars
/******/var hotCurrentParentsTemp=[];// eslint-disable-line no-unused-vars
/******/ /******/function hotCreateRequire(moduleId){// eslint-disable-line no-unused-vars
/******/var me=installedModules[moduleId];/******/if(!me)return __webpack_require__;/******/var fn=function fn(request){/******/if(me.hot.active){/******/if(installedModules[request]){/******/if(installedModules[request].parents.indexOf(moduleId)<0)/******/installedModules[request].parents.push(moduleId);/******/}else{/******/hotCurrentParents=[moduleId];/******/hotCurrentChildModule=request;/******/}/******/if(me.children.indexOf(request)<0)/******/me.children.push(request);/******/}else{/******/console.warn("[HMR] unexpected require("+request+") from disposed module "+moduleId);/******/hotCurrentParents=[];/******/}/******/return __webpack_require__(request);/******/};/******/var ObjectFactory=function ObjectFactory(name){/******/return{/******/configurable:true,/******/enumerable:true,/******/get:function get(){/******/return __webpack_require__[name];/******/},/******/set:function set(value){/******/__webpack_require__[name]=value;/******/}/******/};/******/};/******/for(var name in __webpack_require__){/******/if(Object.prototype.hasOwnProperty.call(__webpack_require__,name)&&name!=="e"){/******/Object.defineProperty(fn,name,ObjectFactory(name));/******/}/******/}/******/fn.e=function(chunkId){/******/if(hotStatus==="ready")/******/hotSetStatus("prepare");/******/hotChunksLoading++;/******/return __webpack_require__.e(chunkId).then(finishChunkLoading,function(err){/******/finishChunkLoading();/******/throw err;/******/});/******/ /******/function finishChunkLoading(){/******/hotChunksLoading--;/******/if(hotStatus==="prepare"){/******/if(!hotWaitingFilesMap[chunkId]){/******/hotEnsureUpdateChunk(chunkId);/******/}/******/if(hotChunksLoading===0&&hotWaitingFiles===0){/******/hotUpdateDownloaded();/******/}/******/}/******/}/******/};/******/return fn;/******/}/******/ /******/function hotCreateModule(moduleId){// eslint-disable-line no-unused-vars
/******/var hot={/******/ // private stuff
/******/_acceptedDependencies:{},/******/_declinedDependencies:{},/******/_selfAccepted:false,/******/_selfDeclined:false,/******/_disposeHandlers:[],/******/_main:hotCurrentChildModule!==moduleId,/******/ /******/ // Module API
/******/active:true,/******/accept:function accept(dep,callback){/******/if(typeof dep==="undefined")/******/hot._selfAccepted=true;/******/else if(typeof dep==="function")/******/hot._selfAccepted=dep;/******/else if(typeof dep==="object")/******/for(var i=0;i<dep.length;i++){/******/hot._acceptedDependencies[dep[i]]=callback||function(){};}/******/else/******/hot._acceptedDependencies[dep]=callback||function(){};/******/},/******/decline:function decline(dep){/******/if(typeof dep==="undefined")/******/hot._selfDeclined=true;/******/else if(typeof dep==="object")/******/for(var i=0;i<dep.length;i++){/******/hot._declinedDependencies[dep[i]]=true;}/******/else/******/hot._declinedDependencies[dep]=true;/******/},/******/dispose:function dispose(callback){/******/hot._disposeHandlers.push(callback);/******/},/******/addDisposeHandler:function addDisposeHandler(callback){/******/hot._disposeHandlers.push(callback);/******/},/******/removeDisposeHandler:function removeDisposeHandler(callback){/******/var idx=hot._disposeHandlers.indexOf(callback);/******/if(idx>=0)hot._disposeHandlers.splice(idx,1);/******/},/******/ /******/ // Management API
/******/check:hotCheck,/******/apply:hotApply,/******/status:function status(l){/******/if(!l)return hotStatus;/******/hotStatusHandlers.push(l);/******/},/******/addStatusHandler:function addStatusHandler(l){/******/hotStatusHandlers.push(l);/******/},/******/removeStatusHandler:function removeStatusHandler(l){/******/var idx=hotStatusHandlers.indexOf(l);/******/if(idx>=0)hotStatusHandlers.splice(idx,1);/******/},/******/ /******/ //inherit from previous dispose call
/******/data:hotCurrentModuleData[moduleId]/******/};/******/hotCurrentChildModule=undefined;/******/return hot;/******/}/******/ /******/var hotStatusHandlers=[];/******/var hotStatus="idle";/******/ /******/function hotSetStatus(newStatus){/******/hotStatus=newStatus;/******/for(var i=0;i<hotStatusHandlers.length;i++){/******/hotStatusHandlers[i].call(null,newStatus);}/******/}/******/ /******/ // while downloading
/******/var hotWaitingFiles=0;/******/var hotChunksLoading=0;/******/var hotWaitingFilesMap={};/******/var hotRequestedFilesMap={};/******/var hotAvailableFilesMap={};/******/var hotDeferred;/******/ /******/ // The update info
/******/var hotUpdate,hotUpdateNewHash;/******/ /******/function toModuleId(id){/******/var isNumber=+id+""===id;/******/return isNumber?+id:id;/******/}/******/ /******/function hotCheck(apply){/******/if(hotStatus!=="idle")throw new Error("check() is only allowed in idle status");/******/hotApplyOnUpdate=apply;/******/hotSetStatus("check");/******/return hotDownloadManifest(hotRequestTimeout).then(function(update){/******/if(!update){/******/hotSetStatus("idle");/******/return null;/******/}/******/hotRequestedFilesMap={};/******/hotWaitingFilesMap={};/******/hotAvailableFilesMap=update.c;/******/hotUpdateNewHash=update.h;/******/ /******/hotSetStatus("prepare");/******/var promise=new Promise(function(resolve,reject){/******/hotDeferred={/******/resolve:resolve,/******/reject:reject/******/};/******/});/******/hotUpdate={};/******/for(var chunkId in installedChunks)/******/{// eslint-disable-line no-lone-blocks
/******/ /*globals chunkId */ /******/hotEnsureUpdateChunk(chunkId);/******/}/******/if(hotStatus==="prepare"&&hotChunksLoading===0&&hotWaitingFiles===0){/******/hotUpdateDownloaded();/******/}/******/return promise;/******/});/******/}/******/ /******/function hotAddUpdateChunk(chunkId,moreModules){// eslint-disable-line no-unused-vars
/******/if(!hotAvailableFilesMap[chunkId]||!hotRequestedFilesMap[chunkId])/******/return;/******/hotRequestedFilesMap[chunkId]=false;/******/for(var moduleId in moreModules){/******/if(Object.prototype.hasOwnProperty.call(moreModules,moduleId)){/******/hotUpdate[moduleId]=moreModules[moduleId];/******/}/******/}/******/if(--hotWaitingFiles===0&&hotChunksLoading===0){/******/hotUpdateDownloaded();/******/}/******/}/******/ /******/function hotEnsureUpdateChunk(chunkId){/******/if(!hotAvailableFilesMap[chunkId]){/******/hotWaitingFilesMap[chunkId]=true;/******/}else{/******/hotRequestedFilesMap[chunkId]=true;/******/hotWaitingFiles++;/******/hotDownloadUpdateChunk(chunkId);/******/}/******/}/******/ /******/function hotUpdateDownloaded(){/******/hotSetStatus("ready");/******/var deferred=hotDeferred;/******/hotDeferred=null;/******/if(!deferred)return;/******/if(hotApplyOnUpdate){/******/ // Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ // avoid triggering uncaught exception warning in Chrome.
/******/ // See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/Promise.resolve().then(function(){/******/return hotApply(hotApplyOnUpdate);/******/}).then(/******/function(result){/******/deferred.resolve(result);/******/},/******/function(err){/******/deferred.reject(err);/******/}/******/);/******/}else{/******/var outdatedModules=[];/******/for(var id in hotUpdate){/******/if(Object.prototype.hasOwnProperty.call(hotUpdate,id)){/******/outdatedModules.push(toModuleId(id));/******/}/******/}/******/deferred.resolve(outdatedModules);/******/}/******/}/******/ /******/function hotApply(options){/******/if(hotStatus!=="ready")throw new Error("apply() is only allowed in ready status");/******/options=options||{};/******/ /******/var cb;/******/var i;/******/var j;/******/var module;/******/var moduleId;/******/ /******/function getAffectedStuff(updateModuleId){/******/var outdatedModules=[updateModuleId];/******/var outdatedDependencies={};/******/ /******/var queue=outdatedModules.slice().map(function(id){/******/return{/******/chain:[id],/******/id:id/******/};/******/});/******/while(queue.length>0){/******/var queueItem=queue.pop();/******/var moduleId=queueItem.id;/******/var chain=queueItem.chain;/******/module=installedModules[moduleId];/******/if(!module||module.hot._selfAccepted)/******/continue;/******/if(module.hot._selfDeclined){/******/return{/******/type:"self-declined",/******/chain:chain,/******/moduleId:moduleId/******/};/******/}/******/if(module.hot._main){/******/return{/******/type:"unaccepted",/******/chain:chain,/******/moduleId:moduleId/******/};/******/}/******/for(var i=0;i<module.parents.length;i++){/******/var parentId=module.parents[i];/******/var parent=installedModules[parentId];/******/if(!parent)continue;/******/if(parent.hot._declinedDependencies[moduleId]){/******/return{/******/type:"declined",/******/chain:chain.concat([parentId]),/******/moduleId:moduleId,/******/parentId:parentId/******/};/******/}/******/if(outdatedModules.indexOf(parentId)>=0)continue;/******/if(parent.hot._acceptedDependencies[moduleId]){/******/if(!outdatedDependencies[parentId])/******/outdatedDependencies[parentId]=[];/******/addAllToSet(outdatedDependencies[parentId],[moduleId]);/******/continue;/******/}/******/delete outdatedDependencies[parentId];/******/outdatedModules.push(parentId);/******/queue.push({/******/chain:chain.concat([parentId]),/******/id:parentId/******/});/******/}/******/}/******/ /******/return{/******/type:"accepted",/******/moduleId:updateModuleId,/******/outdatedModules:outdatedModules,/******/outdatedDependencies:outdatedDependencies/******/};/******/}/******/ /******/function addAllToSet(a,b){/******/for(var i=0;i<b.length;i++){/******/var item=b[i];/******/if(a.indexOf(item)<0)/******/a.push(item);/******/}/******/}/******/ /******/ // at begin all updates modules are outdated
/******/ // the "outdated" status can propagate to parents if they don't accept the children
/******/var outdatedDependencies={};/******/var outdatedModules=[];/******/var appliedUpdate={};/******/ /******/var warnUnexpectedRequire=function warnUnexpectedRequire(){/******/console.warn("[HMR] unexpected require("+result.moduleId+") to disposed module");/******/};/******/ /******/for(var id in hotUpdate){/******/if(Object.prototype.hasOwnProperty.call(hotUpdate,id)){/******/moduleId=toModuleId(id);/******/var result;/******/if(hotUpdate[id]){/******/result=getAffectedStuff(moduleId);/******/}else{/******/result={/******/type:"disposed",/******/moduleId:id/******/};/******/}/******/var abortError=false;/******/var doApply=false;/******/var doDispose=false;/******/var chainInfo="";/******/if(result.chain){/******/chainInfo="\nUpdate propagation: "+result.chain.join(" -> ");/******/}/******/switch(result.type){/******/case"self-declined":/******/if(options.onDeclined)/******/options.onDeclined(result);/******/if(!options.ignoreDeclined)/******/abortError=new Error("Aborted because of self decline: "+result.moduleId+chainInfo);/******/break;/******/case"declined":/******/if(options.onDeclined)/******/options.onDeclined(result);/******/if(!options.ignoreDeclined)/******/abortError=new Error("Aborted because of declined dependency: "+result.moduleId+" in "+result.parentId+chainInfo);/******/break;/******/case"unaccepted":/******/if(options.onUnaccepted)/******/options.onUnaccepted(result);/******/if(!options.ignoreUnaccepted)/******/abortError=new Error("Aborted because "+moduleId+" is not accepted"+chainInfo);/******/break;/******/case"accepted":/******/if(options.onAccepted)/******/options.onAccepted(result);/******/doApply=true;/******/break;/******/case"disposed":/******/if(options.onDisposed)/******/options.onDisposed(result);/******/doDispose=true;/******/break;/******/default:/******/throw new Error("Unexception type "+result.type);/******/}/******/if(abortError){/******/hotSetStatus("abort");/******/return Promise.reject(abortError);/******/}/******/if(doApply){/******/appliedUpdate[moduleId]=hotUpdate[moduleId];/******/addAllToSet(outdatedModules,result.outdatedModules);/******/for(moduleId in result.outdatedDependencies){/******/if(Object.prototype.hasOwnProperty.call(result.outdatedDependencies,moduleId)){/******/if(!outdatedDependencies[moduleId])/******/outdatedDependencies[moduleId]=[];/******/addAllToSet(outdatedDependencies[moduleId],result.outdatedDependencies[moduleId]);/******/}/******/}/******/}/******/if(doDispose){/******/addAllToSet(outdatedModules,[result.moduleId]);/******/appliedUpdate[moduleId]=warnUnexpectedRequire;/******/}/******/}/******/}/******/ /******/ // Store self accepted outdated modules to require them later by the module system
/******/var outdatedSelfAcceptedModules=[];/******/for(i=0;i<outdatedModules.length;i++){/******/moduleId=outdatedModules[i];/******/if(installedModules[moduleId]&&installedModules[moduleId].hot._selfAccepted)/******/outdatedSelfAcceptedModules.push({/******/module:moduleId,/******/errorHandler:installedModules[moduleId].hot._selfAccepted/******/});/******/}/******/ /******/ // Now in "dispose" phase
/******/hotSetStatus("dispose");/******/Object.keys(hotAvailableFilesMap).forEach(function(chunkId){/******/if(hotAvailableFilesMap[chunkId]===false){/******/hotDisposeChunk(chunkId);/******/}/******/});/******/ /******/var idx;/******/var queue=outdatedModules.slice();/******/while(queue.length>0){/******/moduleId=queue.pop();/******/module=installedModules[moduleId];/******/if(!module)continue;/******/ /******/var data={};/******/ /******/ // Call dispose handlers
/******/var disposeHandlers=module.hot._disposeHandlers;/******/for(j=0;j<disposeHandlers.length;j++){/******/cb=disposeHandlers[j];/******/cb(data);/******/}/******/hotCurrentModuleData[moduleId]=data;/******/ /******/ // disable module (this disables requires from this module)
/******/module.hot.active=false;/******/ /******/ // remove module from cache
/******/delete installedModules[moduleId];/******/ /******/ // when disposing there is no need to call dispose handler
/******/delete outdatedDependencies[moduleId];/******/ /******/ // remove "parents" references from all children
/******/for(j=0;j<module.children.length;j++){/******/var child=installedModules[module.children[j]];/******/if(!child)continue;/******/idx=child.parents.indexOf(moduleId);/******/if(idx>=0){/******/child.parents.splice(idx,1);/******/}/******/}/******/}/******/ /******/ // remove outdated dependency from module children
/******/var dependency;/******/var moduleOutdatedDependencies;/******/for(moduleId in outdatedDependencies){/******/if(Object.prototype.hasOwnProperty.call(outdatedDependencies,moduleId)){/******/module=installedModules[moduleId];/******/if(module){/******/moduleOutdatedDependencies=outdatedDependencies[moduleId];/******/for(j=0;j<moduleOutdatedDependencies.length;j++){/******/dependency=moduleOutdatedDependencies[j];/******/idx=module.children.indexOf(dependency);/******/if(idx>=0)module.children.splice(idx,1);/******/}/******/}/******/}/******/}/******/ /******/ // Not in "apply" phase
/******/hotSetStatus("apply");/******/ /******/hotCurrentHash=hotUpdateNewHash;/******/ /******/ // insert new code
/******/for(moduleId in appliedUpdate){/******/if(Object.prototype.hasOwnProperty.call(appliedUpdate,moduleId)){/******/modules[moduleId]=appliedUpdate[moduleId];/******/}/******/}/******/ /******/ // call accept handlers
/******/var error=null;/******/for(moduleId in outdatedDependencies){/******/if(Object.prototype.hasOwnProperty.call(outdatedDependencies,moduleId)){/******/module=installedModules[moduleId];/******/if(module){/******/moduleOutdatedDependencies=outdatedDependencies[moduleId];/******/var callbacks=[];/******/for(i=0;i<moduleOutdatedDependencies.length;i++){/******/dependency=moduleOutdatedDependencies[i];/******/cb=module.hot._acceptedDependencies[dependency];/******/if(cb){/******/if(callbacks.indexOf(cb)>=0)continue;/******/callbacks.push(cb);/******/}/******/}/******/for(i=0;i<callbacks.length;i++){/******/cb=callbacks[i];/******/try{/******/cb(moduleOutdatedDependencies);/******/}catch(err){/******/if(options.onErrored){/******/options.onErrored({/******/type:"accept-errored",/******/moduleId:moduleId,/******/dependencyId:moduleOutdatedDependencies[i],/******/error:err/******/});/******/}/******/if(!options.ignoreErrored){/******/if(!error)/******/error=err;/******/}/******/}/******/}/******/}/******/}/******/}/******/ /******/ // Load self accepted modules
/******/for(i=0;i<outdatedSelfAcceptedModules.length;i++){/******/var item=outdatedSelfAcceptedModules[i];/******/moduleId=item.module;/******/hotCurrentParents=[moduleId];/******/try{/******/__webpack_require__(moduleId);/******/}catch(err){/******/if(typeof item.errorHandler==="function"){/******/try{/******/item.errorHandler(err);/******/}catch(err2){/******/if(options.onErrored){/******/options.onErrored({/******/type:"self-accept-error-handler-errored",/******/moduleId:moduleId,/******/error:err2,/******/orginalError:err,// TODO remove in webpack 4
/******/originalError:err/******/});/******/}/******/if(!options.ignoreErrored){/******/if(!error)/******/error=err2;/******/}/******/if(!error)/******/error=err;/******/}/******/}else{/******/if(options.onErrored){/******/options.onErrored({/******/type:"self-accept-errored",/******/moduleId:moduleId,/******/error:err/******/});/******/}/******/if(!options.ignoreErrored){/******/if(!error)/******/error=err;/******/}/******/}/******/}/******/}/******/ /******/ // handle errors in accept handlers and self accepted module load
/******/if(error){/******/hotSetStatus("fail");/******/return Promise.reject(error);/******/}/******/ /******/hotSetStatus("idle");/******/return new Promise(function(resolve){/******/resolve(outdatedModules);/******/});/******/}/******/ /******/ // The module cache
/******/var installedModules={};/******/ /******/ // objects to store loaded and loading chunks
/******/var installedChunks={/******/4:0/******/};/******/ /******/ // The require function
/******/function __webpack_require__(moduleId){/******/ /******/ // Check if module is in cache
/******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/ // Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{},/******/hot:hotCreateModule(moduleId),/******/parents:(hotCurrentParentsTemp=hotCurrentParents,hotCurrentParents=[],hotCurrentParentsTemp),/******/children:[]/******/};/******/ /******/ // Execute the module function
/******/var threw=true;/******/try{/******/modules[moduleId].call(module.exports,module,module.exports,hotCreateRequire(moduleId));/******/threw=false;/******/}finally{/******/if(threw)delete installedModules[moduleId];/******/}/******/ /******/ // Flag the module as loaded
/******/module.l=true;/******/ /******/ // Return the exports of the module
/******/return module.exports;/******/}/******/ /******/ // This file contains only the entry chunk.
/******/ // The chunk loading function for additional chunks
/******/__webpack_require__.e=function requireEnsure(chunkId){/******/var installedChunkData=installedChunks[chunkId];/******/if(installedChunkData===0){/******/return new Promise(function(resolve){resolve();});/******/}/******/ /******/ // a Promise means "currently loading".
/******/if(installedChunkData){/******/return installedChunkData[2];/******/}/******/ /******/ // setup Promise in chunk cache
/******/var promise=new Promise(function(resolve,reject){/******/installedChunkData=installedChunks[chunkId]=[resolve,reject];/******/});/******/installedChunkData[2]=promise;/******/ /******/ // start chunk loading
/******/var head=document.getElementsByTagName('head')[0];/******/var script=document.createElement('script');/******/script.type='text/javascript';/******/script.charset='utf-8';/******/script.async=true;/******/script.timeout=120000;/******/ /******/if(__webpack_require__.nc){/******/script.setAttribute("nonce",__webpack_require__.nc);/******/}/******/script.src=__webpack_require__.p+""+({"0":"main.js","1":"bundles/pages/_error.js","2":"bundles/pages/_document.js","3":"bundles/pages/_app.js","5":"bundles/pages/idea.js"}[chunkId]||chunkId)+".js";/******/var timeout=setTimeout(onScriptComplete,120000);/******/script.onerror=script.onload=onScriptComplete;/******/function onScriptComplete(){/******/ // avoid mem leaks in IE.
/******/script.onerror=script.onload=null;/******/clearTimeout(timeout);/******/var chunk=installedChunks[chunkId];/******/if(chunk!==0){/******/if(chunk){/******/chunk[1](new Error('Loading chunk '+chunkId+' failed.'));/******/}/******/installedChunks[chunkId]=undefined;/******/}/******/}/******/head.appendChild(script);/******/ /******/return promise;/******/};/******/ /******/ // expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******/ /******/ // expose the module cache
/******/__webpack_require__.c=installedModules;/******/ /******/ // define getter function for harmony exports
/******/__webpack_require__.d=function(exports,name,getter){/******/if(!__webpack_require__.o(exports,name)){/******/Object.defineProperty(exports,name,{/******/configurable:false,/******/enumerable:true,/******/get:getter/******/});/******/}/******/};/******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__webpack_require__.d(getter,'a',getter);/******/return getter;/******/};/******/ /******/ // Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******/ /******/ // __webpack_public_path__
/******/__webpack_require__.p="";/******/ /******/ // on error function for async loading
/******/__webpack_require__.oe=function(err){console.error(err);throw err;};/******/ /******/ // __webpack_hash__
/******/__webpack_require__.h=function(){return hotCurrentHash;};/******/})(/************************************************************************/ /******/[]);

}());

//# sourceMappingURL=manifest.js.map