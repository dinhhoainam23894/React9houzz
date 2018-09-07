(function () {
'use strict';

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

var _isObject = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var _anObject = function (it) {
  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

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

var f = {}.propertyIsEnumerable;

var _objectPie = {
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

var hasOwnProperty = {}.hasOwnProperty;
var _has = function (it, key) {
  return hasOwnProperty.call(it, key);
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

var gOPD = Object.getOwnPropertyDescriptor;

var f$1 = _descriptors ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = _toIobject(O);
  P = _toPrimitive(P, true);
  if (_ie8DomDefine) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
};

var _objectGopd = {
	f: f$1
};

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */


var check = function (O, proto) {
  _anObject(O);
  if (!_isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
var _setProto = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

var setPrototypeOf = _setProto.set;
var _inheritIfRequired = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && _isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};

var dP = Object.defineProperty;

var f$2 = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
	f: f$2
};

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

var _core = createCommonjsModule(function (module) {
var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});
var _core_1 = _core.version;

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

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return _objectKeysInternal(O, hiddenKeys);
};

var _objectGopn = {
	f: f$3
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

// 7.2.8 IsRegExp(argument)


var MATCH = _wks('match');
var _isRegexp = function (it) {
  var isRegExp;
  return _isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : _cof(it) == 'RegExp');
};

// 21.2.5.3 get RegExp.prototype.flags

var _flags = function () {
  var that = _anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

var _hide = _descriptors ? function (object, key, value) {
  return _objectDp.f(object, key, _propertyDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
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

var SPECIES = _wks('species');

var _setSpecies = function (KEY) {
  var C = _global[KEY];
  if (_descriptors && C && !C[SPECIES]) _objectDp.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};

var dP$1 = _objectDp.f;
var gOPN = _objectGopn.f;


var $RegExp = _global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (_descriptors && (!CORRECT_NEW || _fails(function () {
  re2[_wks('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = _isRegexp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : _inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? _flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP$1($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  _redefine(_global, 'RegExp', $RegExp);
}

_setSpecies('RegExp');

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

// 7.1.13 ToObject(argument)

var _toObject = function (it) {
  return Object(_defined(it));
};

var _arrayFill = function fill(value /* , start = 0, end = @length */) {
  var O = _toObject(this);
  var length = _toLength(O.length);
  var aLen = arguments.length;
  var index = _toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : _toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = _wks('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) _hide(ArrayProto, UNSCOPABLES, {});
var _addToUnscopables = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)


_export(_export.P, 'Array', { fill: _arrayFill });

_addToUnscopables('fill');

var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(_defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
var _stringHtml = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  _export(_export.P + _export.F * _fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};

// B.2.3.6 String.prototype.fixed()
_stringHtml('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});

var _meta = createCommonjsModule(function (module) {
var META = _uid('meta');


var setDesc = _objectDp.f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !_fails(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!_isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!_has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!_has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};
});
var _meta_1 = _meta.KEY;
var _meta_2 = _meta.NEED;
var _meta_3 = _meta.fastKey;
var _meta_4 = _meta.getWeak;
var _meta_5 = _meta.onFreeze;

// most Object methods by ES6 should accept primitives



var _objectSap = function (KEY, exec) {
  var fn = (_core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  _export(_export.S + _export.F * _fails(function () { fn(1); }), 'Object', exp);
};

// 19.1.2.5 Object.freeze(O)

var meta = _meta.onFreeze;

_objectSap('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && _isObject(it) ? $freeze(meta(it)) : it;
  };
});

// 19.1.3.19 Object.setPrototypeOf(O, proto)

_export(_export.S, 'Object', { setPrototypeOf: _setProto.set });

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

// @@search logic
_fixReWks('search', 1, function (defined, SEARCH, $search) {
  // 21.1.3.15 String.prototype.search(regexp)
  return [function search(regexp) {
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, $search];
});

// @@match logic
_fixReWks('match', 1, function (defined, MATCH, $match) {
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp) {
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});

// 7.2.2 IsArray(argument)

var _isArray = Array.isArray || function isArray(arg) {
  return _cof(arg) == 'Array';
};

var SPECIES$1 = _wks('species');

var _arraySpeciesConstructor = function (original) {
  var C;
  if (_isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || _isArray(C.prototype))) C = undefined;
    if (_isObject(C)) {
      C = C[SPECIES$1];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)


var _arraySpeciesCreate = function (original, length) {
  return new (_arraySpeciesConstructor(original))(length);
};

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex





var _arrayMethods = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || _arraySpeciesCreate;
  return function ($this, callbackfn, that) {
    var O = _toObject($this);
    var self = _iobject(O);
    var f = _ctx(callbackfn, that, 3);
    var length = _toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)

var $find = _arrayMethods(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
_export(_export.P + _export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
_addToUnscopables(KEY);

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)

var $find$1 = _arrayMethods(5);
var KEY$1 = 'find';
var forced$1 = true;
// Shouldn't skip holes
if (KEY$1 in []) Array(1)[KEY$1](function () { forced$1 = false; });
_export(_export.P + _export.F * forced$1, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
_addToUnscopables(KEY$1);

// @@split logic
_fixReWks('split', 2, function (defined, SPLIT, $split) {
  var isRegExp = _isRegexp;
  var _split = $split;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX = 'lastIndex';
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while (match = separatorCopy.exec(string)) {
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          // eslint-disable-next-line no-loop-func
          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
            for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
          });
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    $split = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit) {
    var O = defined(this);
    var fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});

var _strictMethod = function (method, arg) {
  return !!method && _fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};

var $sort = [].sort;
var test = [1, 2, 3];

_export(_export.P + _export.F * (_fails(function () {
  // IE8-
  test.sort(undefined);
}) || !_fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !_strictMethod($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(_toObject(this))
      : $sort.call(_toObject(this), _aFunction(comparefn));
  }
});

// 19.1.2.15 Object.preventExtensions(O)

var meta$1 = _meta.onFreeze;

_objectSap('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && _isObject(it) ? $preventExtensions(meta$1(it)) : it;
  };
});

// 19.1.2.14 / 15.2.3.14 Object.keys(O)



var _objectKeys = Object.keys || function keys(O) {
  return _objectKeysInternal(O, _enumBugKeys);
};

var f$4 = Object.getOwnPropertySymbols;

var _objectGops = {
	f: f$4
};

// 19.1.2.1 Object.assign(target, source, ...)





var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
var _objectAssign = !$assign || _fails(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = _toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = _objectGops.f;
  var isEnum = _objectPie.f;
  while (aLen > index) {
    var S = _iobject(arguments[index++]);
    var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;

// 19.1.3.1 Object.assign(target, source)


_export(_export.S + _export.F, 'Object', { assign: _objectAssign });

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

var _iterStep = function (done, value) {
  return { value: value, done: !!done };
};

var _iterators = {};

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

for (var collections = _objectKeys(DOMIterables), i$1 = 0; i$1 < collections.length; i$1++) {
  var NAME = collections[i$1];
  var explicit = DOMIterables[NAME];
  var Collection = _global[NAME];
  var proto$1 = Collection && Collection.prototype;
  var key;
  if (proto$1) {
    if (!proto$1[ITERATOR$1]) _hide(proto$1, ITERATOR$1, ArrayValues);
    if (!proto$1[TO_STRING_TAG]) _hide(proto$1, TO_STRING_TAG, NAME);
    _iterators[NAME] = ArrayValues;
    if (explicit) for (key in es6_array_iterator) if (!proto$1[key]) _redefine(proto$1, key, es6_array_iterator[key], true);
  }
}

// 19.1.2.14 Object.keys(O)



_objectSap('keys', function () {
  return function keys(it) {
    return _objectKeys(_toObject(it));
  };
});

var dP$2 = _objectDp.f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME$1 = 'name';

// 19.2.4.2 name
NAME$1 in FProto || _descriptors && dP$2(FProto, NAME$1, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});

// 21.2.5.3 get RegExp.prototype.flags()
if (_descriptors && /./g.flags != 'g') _objectDp.f(RegExp.prototype, 'flags', {
  configurable: true,
  get: _flags
});

var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  _redefine(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (_fails(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = _anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !_descriptors && R instanceof RegExp ? _flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}

var f$5 = _wks;

var _wksExt = {
	f: f$5
};

var defineProperty = _objectDp.f;
var _wksDefine = function (name) {
  var $Symbol = _core.Symbol || (_core.Symbol = _library ? {} : _global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: _wksExt.f(name) });
};

_wksDefine('asyncIterator');

// all enumerable object keys, includes symbols



var _enumKeys = function (it) {
  var result = _objectKeys(it);
  var getSymbols = _objectGops.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = _objectPie.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window

var gOPN$1 = _objectGopn.f;
var toString$1 = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN$1(it);
  } catch (e) {
    return windowNames.slice();
  }
};

var f$6 = function getOwnPropertyNames(it) {
  return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN$1(_toIobject(it));
};

var _objectGopnExt = {
	f: f$6
};

// ECMAScript 6 symbols shim





var META = _meta.KEY;



















var gOPD$1 = _objectGopd.f;
var dP$3 = _objectDp.f;
var gOPN$2 = _objectGopnExt.f;
var $Symbol = _global.Symbol;
var $JSON = _global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE$2 = 'prototype';
var HIDDEN = _wks('_hidden');
var TO_PRIMITIVE = _wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = _shared('symbol-registry');
var AllSymbols = _shared('symbols');
var OPSymbols = _shared('op-symbols');
var ObjectProto$1 = Object[PROTOTYPE$2];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = _global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = _descriptors && _fails(function () {
  return _objectCreate(dP$3({}, 'a', {
    get: function () { return dP$3(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD$1(ObjectProto$1, key);
  if (protoDesc) delete ObjectProto$1[key];
  dP$3(it, key, D);
  if (protoDesc && it !== ObjectProto$1) dP$3(ObjectProto$1, key, protoDesc);
} : dP$3;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE$2]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto$1) $defineProperty(OPSymbols, key, D);
  _anObject(it);
  key = _toPrimitive(key, true);
  _anObject(D);
  if (_has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!_has(it, HIDDEN)) dP$3(it, HIDDEN, _propertyDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (_has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _objectCreate(D, { enumerable: _propertyDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP$3(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  _anObject(it);
  var keys = _enumKeys(P = _toIobject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = _toPrimitive(key, true));
  if (this === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return false;
  return E || !_has(this, key) || !_has(AllSymbols, key) || _has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = _toIobject(it);
  key = _toPrimitive(key, true);
  if (it === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return;
  var D = gOPD$1(it, key);
  if (D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN$2(_toIobject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!_has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto$1;
  var names = gOPN$2(IS_OP ? OPSymbols : _toIobject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (_has(AllSymbols, key = names[i++]) && (IS_OP ? _has(ObjectProto$1, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto$1) $set.call(OPSymbols, value);
      if (_has(this, HIDDEN) && _has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, _propertyDesc(1, value));
    };
    if (_descriptors && setter) setSymbolDesc(ObjectProto$1, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  _redefine($Symbol[PROTOTYPE$2], 'toString', function toString() {
    return this._k;
  });

  _objectGopd.f = $getOwnPropertyDescriptor;
  _objectDp.f = $defineProperty;
  _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
  _objectPie.f = $propertyIsEnumerable;
  _objectGops.f = $getOwnPropertySymbols;

  if (_descriptors && !_library) {
    _redefine(ObjectProto$1, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  _wksExt.f = function (name) {
    return wrap(_wks(name));
  };
}

_export(_export.G + _export.W + _export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)_wks(es6Symbols[j++]);

for (var wellKnownSymbols = _objectKeys(_wks.store), k = 0; wellKnownSymbols.length > k;) _wksDefine(wellKnownSymbols[k++]);

_export(_export.S + _export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return _has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

_export(_export.S + _export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && _export(_export.S + _export.F * (!USE_NATIVE || _fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!_isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!_isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE$2][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
_setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
_setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
_setToStringTag(_global.JSON, 'JSON', true);

module.exports=__NEXT_REGISTER_PAGE('/_error',function(){var comp=webpackJsonp([1],{/***/"./node_modules/@babel/runtime/core-js/json/stringify.js":/***/function node_modulesBabelRuntimeCoreJsJsonStringifyJs(module,exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/core-js/library/fn/json/stringify.js");/***/},/***/"./node_modules/babel-runtime/core-js/get-iterator.js":/***/function node_modulesBabelRuntimeCoreJsGetIteratorJs(module,exports,__webpack_require__){module.exports={"default":__webpack_require__("./node_modules/core-js/library/fn/get-iterator.js"),__esModule:true};/***/},/***/"./node_modules/babel-runtime/core-js/is-iterable.js":/***/function node_modulesBabelRuntimeCoreJsIsIterableJs(module,exports,__webpack_require__){module.exports={"default":__webpack_require__("./node_modules/core-js/library/fn/is-iterable.js"),__esModule:true};/***/},/***/"./node_modules/babel-runtime/core-js/map.js":/***/function node_modulesBabelRuntimeCoreJsMapJs(module,exports,__webpack_require__){module.exports={"default":__webpack_require__("./node_modules/core-js/library/fn/map.js"),__esModule:true};/***/},/***/"./node_modules/babel-runtime/core-js/object/create.js":/***/function node_modulesBabelRuntimeCoreJsObjectCreateJs(module,exports,__webpack_require__){module.exports={"default":__webpack_require__("./node_modules/core-js/library/fn/object/create.js"),__esModule:true};/***/},/***/"./node_modules/babel-runtime/core-js/object/define-property.js":/***/function node_modulesBabelRuntimeCoreJsObjectDefinePropertyJs(module,exports,__webpack_require__){module.exports={"default":__webpack_require__("./node_modules/core-js/library/fn/object/define-property.js"),__esModule:true};/***/},/***/"./node_modules/babel-runtime/core-js/object/get-prototype-of.js":/***/function node_modulesBabelRuntimeCoreJsObjectGetPrototypeOfJs(module,exports,__webpack_require__){module.exports={"default":__webpack_require__("./node_modules/core-js/library/fn/object/get-prototype-of.js"),__esModule:true};/***/},/***/"./node_modules/babel-runtime/core-js/object/keys.js":/***/function node_modulesBabelRuntimeCoreJsObjectKeysJs(module,exports,__webpack_require__){module.exports={"default":__webpack_require__("./node_modules/core-js/library/fn/object/keys.js"),__esModule:true};/***/},/***/"./node_modules/babel-runtime/core-js/object/set-prototype-of.js":/***/function node_modulesBabelRuntimeCoreJsObjectSetPrototypeOfJs(module,exports,__webpack_require__){module.exports={"default":__webpack_require__("./node_modules/core-js/library/fn/object/set-prototype-of.js"),__esModule:true};/***/},/***/"./node_modules/babel-runtime/core-js/symbol.js":/***/function node_modulesBabelRuntimeCoreJsSymbolJs(module,exports,__webpack_require__){module.exports={"default":__webpack_require__("./node_modules/core-js/library/fn/symbol/index.js"),__esModule:true};/***/},/***/"./node_modules/babel-runtime/core-js/symbol/iterator.js":/***/function node_modulesBabelRuntimeCoreJsSymbolIteratorJs(module,exports,__webpack_require__){module.exports={"default":__webpack_require__("./node_modules/core-js/library/fn/symbol/iterator.js"),__esModule:true};/***/},/***/"./node_modules/babel-runtime/helpers/classCallCheck.js":/***/function node_modulesBabelRuntimeHelpersClassCallCheckJs(module,exports,__webpack_require__){exports.__esModule=true;exports.default=function(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}};/***/},/***/"./node_modules/babel-runtime/helpers/createClass.js":/***/function node_modulesBabelRuntimeHelpersCreateClassJs(module,exports,__webpack_require__){exports.__esModule=true;var _defineProperty=__webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");var _defineProperty2=_interopRequireDefault(_defineProperty);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;(0, _defineProperty2.default)(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();/***/},/***/"./node_modules/babel-runtime/helpers/inherits.js":/***/function node_modulesBabelRuntimeHelpersInheritsJs(module,exports,__webpack_require__){exports.__esModule=true;var _setPrototypeOf=__webpack_require__("./node_modules/babel-runtime/core-js/object/set-prototype-of.js");var _setPrototypeOf2=_interopRequireDefault(_setPrototypeOf);var _create=__webpack_require__("./node_modules/babel-runtime/core-js/object/create.js");var _create2=_interopRequireDefault(_create);var _typeof2=__webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");var _typeof3=_interopRequireDefault(_typeof2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=function(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==="undefined"?"undefined":(0, _typeof3.default)(superClass)));}subClass.prototype=(0, _create2.default)(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)_setPrototypeOf2.default?(0, _setPrototypeOf2.default)(subClass,superClass):subClass.__proto__=superClass;};/***/},/***/"./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":/***/function node_modulesBabelRuntimeHelpersPossibleConstructorReturnJs(module,exports,__webpack_require__){exports.__esModule=true;var _typeof2=__webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");var _typeof3=_interopRequireDefault(_typeof2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=function(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&((typeof call==="undefined"?"undefined":(0, _typeof3.default)(call))==="object"||typeof call==="function")?call:self;};/***/},/***/"./node_modules/babel-runtime/helpers/slicedToArray.js":/***/function node_modulesBabelRuntimeHelpersSlicedToArrayJs(module,exports,__webpack_require__){exports.__esModule=true;var _isIterable2=__webpack_require__("./node_modules/babel-runtime/core-js/is-iterable.js");var _isIterable3=_interopRequireDefault(_isIterable2);var _getIterator2=__webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js");var _getIterator3=_interopRequireDefault(_getIterator2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=(0, _getIterator3.default)(arr),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if((0, _isIterable3.default)(Object(arr))){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();/***/},/***/"./node_modules/babel-runtime/helpers/typeof.js":/***/function node_modulesBabelRuntimeHelpersTypeofJs(module,exports,__webpack_require__){exports.__esModule=true;var _iterator=__webpack_require__("./node_modules/babel-runtime/core-js/symbol/iterator.js");var _iterator2=_interopRequireDefault(_iterator);var _symbol=__webpack_require__("./node_modules/babel-runtime/core-js/symbol.js");var _symbol2=_interopRequireDefault(_symbol);var _typeof=typeof _symbol2.default==="function"&&typeof _iterator2.default==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof _symbol2.default==="function"&&obj.constructor===_symbol2.default&&obj!==_symbol2.default.prototype?"symbol":typeof obj;};function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=typeof _symbol2.default==="function"&&_typeof(_iterator2.default)==="symbol"?function(obj){return typeof obj==="undefined"?"undefined":_typeof(obj);}:function(obj){return obj&&typeof _symbol2.default==="function"&&obj.constructor===_symbol2.default&&obj!==_symbol2.default.prototype?"symbol":typeof obj==="undefined"?"undefined":_typeof(obj);};/***/},/***/"./node_modules/classnames/index.js":/***/function node_modulesClassnamesIndexJs(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ /* global define */(function(){var hasOwn={}.hasOwnProperty;function classNames(){var classes=[];for(var i=0;i<arguments.length;i++){var arg=arguments[i];if(!arg)continue;var argType=typeof arg;if(argType==='string'||argType==='number'){classes.push(arg);}else if(Array.isArray(arg)&&arg.length){var inner=classNames.apply(null,arg);if(inner){classes.push(inner);}}else if(argType==='object'){for(var key in arg){if(hasOwn.call(arg,key)&&arg[key]){classes.push(key);}}}}return classes.join(' ');}if(typeof module!=='undefined'&&module.exports){classNames.default=classNames;module.exports=classNames;}else {// register as 'classnames', consistent with npm package name
!(__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames;}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));}})();/***/},/***/"./node_modules/core-js/library/fn/json/stringify.js":/***/function node_modulesCoreJsLibraryFnJsonStringifyJs(module,exports,__webpack_require__){var core=__webpack_require__("./node_modules/core-js/library/modules/_core.js");var $JSON=core.JSON||(core.JSON={stringify:JSON.stringify});module.exports=function stringify(it){// eslint-disable-line no-unused-vars
return $JSON.stringify.apply($JSON,arguments);};/***/},/***/"./node_modules/core-js/library/fn/map.js":/***/function node_modulesCoreJsLibraryFnMapJs(module,exports,__webpack_require__){__webpack_require__("./node_modules/core-js/library/modules/es6.object.to-string.js");__webpack_require__("./node_modules/core-js/library/modules/es6.string.iterator.js");__webpack_require__("./node_modules/core-js/library/modules/web.dom.iterable.js");__webpack_require__("./node_modules/core-js/library/modules/es6.map.js");__webpack_require__("./node_modules/core-js/library/modules/es7.map.to-json.js");__webpack_require__("./node_modules/core-js/library/modules/es7.map.of.js");__webpack_require__("./node_modules/core-js/library/modules/es7.map.from.js");module.exports=__webpack_require__("./node_modules/core-js/library/modules/_core.js").Map;/***/},/***/"./node_modules/core-js/library/modules/es6.map.js":/***/function node_modulesCoreJsLibraryModulesEs6MapJs(module,exports,__webpack_require__){var strong=__webpack_require__("./node_modules/core-js/library/modules/_collection-strong.js");var validate=__webpack_require__("./node_modules/core-js/library/modules/_validate-collection.js");var MAP='Map';// 23.1 Map Objects
module.exports=__webpack_require__("./node_modules/core-js/library/modules/_collection.js")(MAP,function(get){return function Map(){return get(this,arguments.length>0?arguments[0]:undefined);};},{// 23.1.3.6 Map.prototype.get(key)
get:function get(key){var entry=strong.getEntry(validate(this,MAP),key);return entry&&entry.v;},// 23.1.3.9 Map.prototype.set(key, value)
set:function set(key,value){return strong.def(validate(this,MAP),key===0?0:key,value);}},strong,true);/***/},/***/"./node_modules/core-js/library/modules/es7.map.from.js":/***/function node_modulesCoreJsLibraryModulesEs7MapFromJs(module,exports,__webpack_require__){// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__("./node_modules/core-js/library/modules/_set-collection-from.js")('Map');/***/},/***/"./node_modules/core-js/library/modules/es7.map.of.js":/***/function node_modulesCoreJsLibraryModulesEs7MapOfJs(module,exports,__webpack_require__){// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__("./node_modules/core-js/library/modules/_set-collection-of.js")('Map');/***/},/***/"./node_modules/core-js/library/modules/es7.map.to-json.js":/***/function node_modulesCoreJsLibraryModulesEs7MapToJsonJs(module,exports,__webpack_require__){// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export=__webpack_require__("./node_modules/core-js/library/modules/_export.js");$export($export.P+$export.R,'Map',{toJSON:__webpack_require__("./node_modules/core-js/library/modules/_collection-to-json.js")('Map')});/***/},/***/"./node_modules/define-properties/index.js":/***/function node_modulesDefinePropertiesIndexJs(module,exports,__webpack_require__){var keys=__webpack_require__("./node_modules/object-keys/index.js");var foreach=__webpack_require__("./node_modules/foreach/index.js");var hasSymbols=typeof Symbol==='function'&&typeof Symbol()==='symbol';var toStr=Object.prototype.toString;var isFunction=function isFunction(fn){return typeof fn==='function'&&toStr.call(fn)==='[object Function]';};var arePropertyDescriptorsSupported=function arePropertyDescriptorsSupported(){var obj={};try{Object.defineProperty(obj,'x',{enumerable:false,value:obj});/* eslint-disable no-unused-vars, no-restricted-syntax */for(var _ in obj){return false;}/* eslint-enable no-unused-vars, no-restricted-syntax */return obj.x===obj;}catch(e){/* this is IE 8. */return false;}};var supportsDescriptors=Object.defineProperty&&arePropertyDescriptorsSupported();var defineProperty=function defineProperty(object,name,value,predicate){if(name in object&&(!isFunction(predicate)||!predicate())){return;}if(supportsDescriptors){Object.defineProperty(object,name,{configurable:true,enumerable:false,value:value,writable:true});}else{object[name]=value;}};var defineProperties=function defineProperties(object,map){var predicates=arguments.length>2?arguments[2]:{};var props=keys(map);if(hasSymbols){props=props.concat(Object.getOwnPropertySymbols(map));}foreach(props,function(name){defineProperty(object,name,map[name],predicates[name]);});};defineProperties.supportsDescriptors=!!supportsDescriptors;module.exports=defineProperties;/***/},/***/"./node_modules/foreach/index.js":/***/function node_modulesForeachIndexJs(module,exports){var hasOwn=Object.prototype.hasOwnProperty;var toString=Object.prototype.toString;module.exports=function forEach(obj,fn,ctx){if(toString.call(fn)!=='[object Function]'){throw new TypeError('iterator must be a function');}var l=obj.length;if(l===+l){for(var i=0;i<l;i++){fn.call(ctx,obj[i],i,obj);}}else{for(var k in obj){if(hasOwn.call(obj,k)){fn.call(ctx,obj[k],k,obj);}}}};/***/},/***/"./node_modules/function-bind/implementation.js":/***/function node_modulesFunctionBindImplementationJs(module,exports,__webpack_require__){/* eslint no-invalid-this: 1 */var ERROR_MESSAGE='Function.prototype.bind called on incompatible ';var slice=Array.prototype.slice;var toStr=Object.prototype.toString;var funcType='[object Function]';module.exports=function bind(that){var target=this;if(typeof target!=='function'||toStr.call(target)!==funcType){throw new TypeError(ERROR_MESSAGE+target);}var args=slice.call(arguments,1);var bound;var binder=function binder(){if(this instanceof bound){var result=target.apply(this,args.concat(slice.call(arguments)));if(Object(result)===result){return result;}return this;}else{return target.apply(that,args.concat(slice.call(arguments)));}};var boundLength=Math.max(0,target.length-args.length);var boundArgs=[];for(var i=0;i<boundLength;i++){boundArgs.push('$'+i);}bound=Function('binder','return function ('+boundArgs.join(',')+'){ return binder.apply(this,arguments); }')(binder);if(target.prototype){var Empty=function Empty(){};Empty.prototype=target.prototype;bound.prototype=new Empty();Empty.prototype=null;}return bound;};/***/},/***/"./node_modules/function-bind/index.js":/***/function node_modulesFunctionBindIndexJs(module,exports,__webpack_require__){var implementation=__webpack_require__("./node_modules/function-bind/implementation.js");module.exports=Function.prototype.bind||implementation;/***/},/***/"./node_modules/has-symbols/shams.js":/***/function node_modulesHasSymbolsShamsJs(module,exports,__webpack_require__){/* eslint complexity: [2, 17], max-statements: [2, 33] */module.exports=function hasSymbols(){if(typeof Symbol!=='function'||typeof Object.getOwnPropertySymbols!=='function'){return false;}if(typeof Symbol.iterator==='symbol'){return true;}var obj={};var sym=Symbol('test');var symObj=Object(sym);if(typeof sym==='string'){return false;}if(Object.prototype.toString.call(sym)!=='[object Symbol]'){return false;}if(Object.prototype.toString.call(symObj)!=='[object Symbol]'){return false;}// temp disabled per https://github.com/ljharb/object.assign/issues/17
// if (sym instanceof Symbol) { return false; }
// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
// if (!(symObj instanceof Symbol)) { return false; }
// if (typeof Symbol.prototype.toString !== 'function') { return false; }
// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }
var symVal=42;obj[sym]=symVal;for(sym in obj){return false;}// eslint-disable-line no-restricted-syntax
if(typeof Object.keys==='function'&&Object.keys(obj).length!==0){return false;}if(typeof Object.getOwnPropertyNames==='function'&&Object.getOwnPropertyNames(obj).length!==0){return false;}var syms=Object.getOwnPropertySymbols(obj);if(syms.length!==1||syms[0]!==sym){return false;}if(!Object.prototype.propertyIsEnumerable.call(obj,sym)){return false;}if(typeof Object.getOwnPropertyDescriptor==='function'){var descriptor=Object.getOwnPropertyDescriptor(obj,sym);if(descriptor.value!==symVal||descriptor.enumerable!==true){return false;}}return true;};/***/},/***/"./node_modules/has/src/index.js":/***/function node_modulesHasSrcIndexJs(module,exports,__webpack_require__){var bind=__webpack_require__("./node_modules/function-bind/index.js");module.exports=bind.call(Function.call,Object.prototype.hasOwnProperty);/***/},/***/"./node_modules/lodash.isfunction/index.js":/***/function node_modulesLodashIsfunctionIndexJs(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(global){/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** `Object#toString` result references. */var asyncTag='[object AsyncFunction]',funcTag='[object Function]',genTag='[object GeneratorFunction]',nullTag='[object Null]',proxyTag='[object Proxy]',undefinedTag='[object Undefined]';/** Detect free variable `global` from Node.js. */var freeGlobal=typeof global=='object'&&global&&global.Object===Object&&global;/** Detect free variable `self`. */var freeSelf=typeof self=='object'&&self&&self.Object===Object&&self;/** Used as a reference to the global object. */var root=freeGlobal||freeSelf||Function('return this')();/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */var nativeObjectToString=objectProto.toString;/** Built-in value references. */var Symbol=root.Symbol,symToStringTag=Symbol?Symbol.toStringTag:undefined;/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function baseGetTag(value){if(value==null){return value===undefined?undefinedTag:nullTag;}return symToStringTag&&symToStringTag in Object(value)?getRawTag(value):objectToString(value);}/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */function getRawTag(value){var isOwn=hasOwnProperty.call(value,symToStringTag),tag=value[symToStringTag];try{value[symToStringTag]=undefined;var unmasked=true;}catch(e){}var result=nativeObjectToString.call(value);if(unmasked){if(isOwn){value[symToStringTag]=tag;}else{delete value[symToStringTag];}}return result;}/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */function objectToString(value){return nativeObjectToString.call(value);}/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */function isFunction(value){if(!isObject(value)){return false;}// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 9 which returns 'object' for typed arrays and other constructors.
var tag=baseGetTag(value);return tag==funcTag||tag==genTag||tag==asyncTag||tag==proxyTag;}/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */function isObject(value){var type=typeof value;return value!=null&&(type=='object'||type=='function');}module.exports=isFunction;/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__("./node_modules/next/node_modules/webpack/buildin/global.js"));/***/},/***/"./node_modules/lodash.isobject/index.js":/***/function node_modulesLodashIsobjectIndexJs(module,exports){/**
 * lodash 3.0.2 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */ /**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */function isObject(value){// Avoid a V8 JIT bug in Chrome 19-20.
// See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
var type=typeof value;return!!value&&(type=='object'||type=='function');}module.exports=isObject;/***/},/***/"./node_modules/lodash.tonumber/index.js":/***/function node_modulesLodashTonumberIndexJs(module,exports){/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** Used as references for various `Number` constants. */var NAN=0/0;/** `Object#toString` result references. */var symbolTag='[object Symbol]';/** Used to match leading and trailing whitespace. */var reTrim=/^\s+|\s+$/g;/** Used to detect bad signed hexadecimal string values. */var reIsBadHex=/^[-+]0x[0-9a-f]+$/i;/** Used to detect binary string values. */var reIsBinary=/^0b[01]+$/i;/** Used to detect octal string values. */var reIsOctal=/^0o[0-7]+$/i;/** Built-in method references without a dependency on `root`. */var freeParseInt=parseInt;/** Used for built-in method references. */var objectProto=Object.prototype;/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */var objectToString=objectProto.toString;/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */function isObject(value){var type=typeof value;return!!value&&(type=='object'||type=='function');}/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */function isObjectLike(value){return!!value&&typeof value=='object';}/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */function isSymbol(value){return typeof value=='symbol'||isObjectLike(value)&&objectToString.call(value)==symbolTag;}/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */function toNumber(value){if(typeof value=='number'){return value;}if(isSymbol(value)){return NAN;}if(isObject(value)){var other=typeof value.valueOf=='function'?value.valueOf():value;value=isObject(other)?other+'':other;}if(typeof value!='string'){return value===0?value:+value;}value=value.replace(reTrim,'');var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NAN:+value;}module.exports=toNumber;/***/},/***/"./node_modules/next/dist/lib/link.js":/***/function node_modulesNextDistLibLinkJs(module,exports,__webpack_require__){var _interopRequireWildcard=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _typeof2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/typeof.js"));var _stringify=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/json/stringify.js"));var _getPrototypeOf=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/object/get-prototype-of.js"));var _classCallCheck2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js"));var _createClass2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"));var _possibleConstructorReturn2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));var _inherits2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js"));var _assertThisInitialized2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));var _url=__webpack_require__("./node_modules/url/url.js");var _react=_interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));var _propTypes=_interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));var _propTypesExact=_interopRequireDefault(__webpack_require__("./node_modules/prop-types-exact/build/index.js"));var _router=_interopRequireWildcard(__webpack_require__("./node_modules/next/dist/lib/router/index.js"));var _utils=__webpack_require__("./node_modules/next/dist/lib/utils.js");/* global __NEXT_DATA__ */var Link=/*#__PURE__*/function(_Component){(0, _inherits2.default)(Link,_Component);function Link(props){var _ref;var _this;(0, _classCallCheck2.default)(this,Link);for(var _len=arguments.length,rest=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){rest[_key-1]=arguments[_key];}_this=(0, _possibleConstructorReturn2.default)(this,(_ref=Link.__proto__||(0, _getPrototypeOf.default)(Link)).call.apply(_ref,[this,props].concat(rest)));_this.linkClicked=_this.linkClicked.bind((0, _assertThisInitialized2.default)(_this));_this.formatUrls(props);return _this;}(0, _createClass2.default)(Link,[{key:"componentWillReceiveProps",value:function componentWillReceiveProps(nextProps){this.formatUrls(nextProps);}},{key:"linkClicked",value:function linkClicked(e){var _this2=this;if(e.currentTarget.nodeName==='A'&&(e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&e.nativeEvent.which===2)){// ignore click for new tab / new window behavior
return;}var shallow=this.props.shallow;var href=this.href,as=this.as;if(!isLocal(href)){// ignore click if it's outside our scope
return;}var pathname=window.location.pathname;href=(0, _url.resolve)(pathname,href);as=as?(0, _url.resolve)(pathname,as):href;e.preventDefault();//  avoid scroll for urls with anchor refs
var scroll=this.props.scroll;if(scroll==null){scroll=as.indexOf('#')<0;}// replace state instead of push if prop is present
var replace=this.props.replace;var changeMethod=replace?'replace':'push';// straight up redirect
_router.default[changeMethod](href,as,{shallow:shallow}).then(function(success){if(!success)return;if(scroll){window.scrollTo(0,0);document.body.focus();}}).catch(function(err){if(_this2.props.onError)_this2.props.onError(err);});}},{key:"prefetch",value:function prefetch(){if(!this.props.prefetch)return;if(typeof window==='undefined')return;// Prefetch the JSON page if asked (only in the client)
var pathname=window.location.pathname;var href=(0, _url.resolve)(pathname,this.href);_router.default.prefetch(href);}},{key:"componentDidMount",value:function componentDidMount(){this.prefetch();}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){if((0, _stringify.default)(this.props.href)!==(0, _stringify.default)(prevProps.href)){this.prefetch();}}// We accept both 'href' and 'as' as objects which we can pass to `url.format`.
// We'll handle it here.
},{key:"formatUrls",value:function formatUrls(props){this.href=props.href&&(0, _typeof2.default)(props.href)==='object'?(0, _url.format)(props.href):props.href;this.as=props.as&&(0, _typeof2.default)(props.as)==='object'?(0, _url.format)(props.as):props.as;}},{key:"render",value:function render(){var _this3=this;var children=this.props.children;var href=this.href,as=this.as;// Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag
if(typeof children==='string'){children=_react.default.createElement("a",null,children);}// This will return the first child, if multiple are provided it will throw an error
var child=_react.Children.only(children);var props={onClick:function onClick(e){if(child.props&&typeof child.props.onClick==='function'){child.props.onClick(e);}if(!e.defaultPrevented){_this3.linkClicked(e);}}// If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
// defined, we specify the current 'href', so that repetition is not needed by the user
};if(this.props.passHref||child.type==='a'&&!('href'in child.props)){props.href=as||href;}// Add the ending slash to the paths. So, we can serve the
// "<page>/index.html" directly.
if(props.href&&typeof __NEXT_DATA__!=='undefined'&&__NEXT_DATA__.nextExport){props.href=(0, _router._rewriteUrlForNextExport)(props.href);}return _react.default.cloneElement(child,props);}}]);return Link;}(_react.Component);exports.default=Link;Object.defineProperty(Link,"propTypes",{configurable:true,enumerable:true,writable:true,value:(0, _propTypesExact.default)({href:_propTypes.default.oneOfType([_propTypes.default.string,_propTypes.default.object]).isRequired,as:_propTypes.default.oneOfType([_propTypes.default.string,_propTypes.default.object]),prefetch:_propTypes.default.bool,replace:_propTypes.default.bool,shallow:_propTypes.default.bool,passHref:_propTypes.default.bool,scroll:_propTypes.default.bool,children:_propTypes.default.oneOfType([_propTypes.default.element,function(props,propName){var value=props[propName];if(typeof value==='string'){warnLink("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");}return null;}]).isRequired})});function isLocal(href){var url=(0, _url.parse)(href,false,true);var origin=(0, _url.parse)((0, _utils.getLocationOrigin)(),false,true);return!url.host||url.protocol===origin.protocol&&url.host===origin.host;}var warnLink=(0, _utils.execOnce)(_utils.warn);/***/},/***/"./node_modules/next/head.js":/***/function node_modulesNextHeadJs(module,exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/next/dist/lib/head.js");/***/},/***/"./node_modules/next/link.js":/***/function node_modulesNextLinkJs(module,exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/next/dist/lib/link.js");/***/},/***/"./node_modules/next/node_modules/styled-jsx/dist/lib/stylesheet.js":/***/function node_modulesNextNode_modulesStyledJsxDistLibStylesheetJs(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(process){Object.defineProperty(exports,"__esModule",{value:true});var _classCallCheck2=__webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");var _createClass3=_interopRequireDefault(_createClass2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/var isProd=process.env&&"development"==='production';var isString=function isString(o){return Object.prototype.toString.call(o)==='[object String]';};var StyleSheet=function(){function StyleSheet(){var _ref=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref$name=_ref.name,name=_ref$name===undefined?'stylesheet':_ref$name,_ref$optimizeForSpeed=_ref.optimizeForSpeed,optimizeForSpeed=_ref$optimizeForSpeed===undefined?isProd:_ref$optimizeForSpeed,_ref$isBrowser=_ref.isBrowser,isBrowser=_ref$isBrowser===undefined?typeof window!=='undefined':_ref$isBrowser;(0, _classCallCheck3.default)(this,StyleSheet);invariant(isString(name),'`name` must be a string');this._name=name;this._deletedRulePlaceholder='#'+name+'-deleted-rule____{}';invariant(typeof optimizeForSpeed==='boolean','`optimizeForSpeed` must be a boolean');this._optimizeForSpeed=optimizeForSpeed;this._isBrowser=isBrowser;this._serverSheet=undefined;this._tags=[];this._injected=false;this._rulesCount=0;}(0, _createClass3.default)(StyleSheet,[{key:'setOptimizeForSpeed',value:function setOptimizeForSpeed(bool){invariant(typeof bool==='boolean','`setOptimizeForSpeed` accepts a boolean');invariant(this._rulesCount===0,'optimizeForSpeed cannot be when rules have already been inserted');this.flush();this._optimizeForSpeed=bool;this.inject();}},{key:'isOptimizeForSpeed',value:function isOptimizeForSpeed(){return this._optimizeForSpeed;}},{key:'inject',value:function inject(){var _this=this;invariant(!this._injected,'sheet already injected');this._injected=true;if(this._isBrowser&&this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name);this._optimizeForSpeed='insertRule'in this.getSheet();if(!this._optimizeForSpeed){if(!isProd){console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');// eslint-disable-line no-console
}this.flush();this._injected=true;}return;}this._serverSheet={cssRules:[],insertRule:function insertRule(rule,index){if(typeof index==='number'){_this._serverSheet.cssRules[index]={cssText:rule};}else{_this._serverSheet.cssRules.push({cssText:rule});}return index;},deleteRule:function deleteRule(index){_this._serverSheet.cssRules[index]=null;}};}},{key:'getSheetForTag',value:function getSheetForTag(tag){if(tag.sheet){return tag.sheet;}// this weirdness brought to you by firefox
for(var i=0;i<document.styleSheets.length;i++){if(document.styleSheets[i].ownerNode===tag){return document.styleSheets[i];}}}},{key:'getSheet',value:function getSheet(){return this.getSheetForTag(this._tags[this._tags.length-1]);}},{key:'insertRule',value:function insertRule(rule,index){invariant(isString(rule),'`insertRule` accepts only strings');if(!this._isBrowser){if(typeof index!=='number'){index=this._serverSheet.cssRules.length;}this._serverSheet.insertRule(rule,index);return this._rulesCount++;}if(this._optimizeForSpeed){var sheet=this.getSheet();if(typeof index!=='number'){index=sheet.cssRules.length;}// this weirdness for perf, and chrome's weird bug
// https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
try{sheet.insertRule(rule,index);}catch(err){if(!isProd){console.warn('StyleSheet: illegal rule: \n\n'+rule+'\n\nSee https://stackoverflow.com/q/20007992 for more info');// eslint-disable-line no-console
}return-1;}}else{var insertionPoint=this._tags[index];this._tags.push(this.makeStyleTag(this._name,rule,insertionPoint));}return this._rulesCount++;}},{key:'replaceRule',value:function replaceRule(index,rule){if(this._optimizeForSpeed||!this._isBrowser){var sheet=this._isBrowser?this.getSheet():this._serverSheet;if(!rule.trim()){rule=this._deletedRulePlaceholder;}if(!sheet.cssRules[index]){// @TBD Should we throw an error?
return index;}sheet.deleteRule(index);try{sheet.insertRule(rule,index);}catch(err){if(!isProd){console.warn('StyleSheet: illegal rule: \n\n'+rule+'\n\nSee https://stackoverflow.com/q/20007992 for more info');// eslint-disable-line no-console
}// In order to preserve the indices we insert a deleteRulePlaceholder
sheet.insertRule(this._deletedRulePlaceholder,index);}}else{var tag=this._tags[index];invariant(tag,'old rule at index `'+index+'` not found');tag.textContent=rule;}return index;}},{key:'deleteRule',value:function deleteRule(index){if(!this._isBrowser){this._serverSheet.deleteRule(index);return;}if(this._optimizeForSpeed){this.replaceRule(index,'');}else{var tag=this._tags[index];invariant(tag,'rule at index `'+index+'` not found');tag.parentNode.removeChild(tag);this._tags[index]=null;}}},{key:'flush',value:function flush(){this._injected=false;this._rulesCount=0;if(this._isBrowser){this._tags.forEach(function(tag){return tag&&tag.parentNode.removeChild(tag);});this._tags=[];}else{// simpler on server
this._serverSheet.cssRules=[];}}},{key:'cssRules',value:function cssRules(){var _this2=this;if(!this._isBrowser){return this._serverSheet.cssRules;}return this._tags.reduce(function(rules,tag){if(tag){rules=rules.concat(_this2.getSheetForTag(tag).cssRules.map(function(rule){return rule.cssText===_this2._deletedRulePlaceholder?null:rule;}));}else{rules.push(null);}return rules;},[]);}},{key:'makeStyleTag',value:function makeStyleTag(name,cssString,relativeToTag){if(cssString){invariant(isString(cssString),'makeStyleTag acceps only strings as second parameter');}var tag=document.createElement('style');tag.type='text/css';tag.setAttribute('data-'+name,'');if(cssString){tag.appendChild(document.createTextNode(cssString));}var head=document.head||document.getElementsByTagName('head')[0];if(relativeToTag){head.insertBefore(tag,relativeToTag);}else{head.appendChild(tag);}return tag;}},{key:'length',get:function get(){return this._rulesCount;}}]);return StyleSheet;}();exports.default=StyleSheet;function invariant(condition,message){if(!condition){throw new Error('StyleSheet: '+message+'.');}}/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__("./node_modules/process/browser.js"));/***/},/***/"./node_modules/next/node_modules/styled-jsx/dist/style.js":/***/function node_modulesNextNode_modulesStyledJsxDistStyleJs(module,exports,__webpack_require__){Object.defineProperty(exports,"__esModule",{value:true});var _map=__webpack_require__("./node_modules/babel-runtime/core-js/map.js");var _map2=_interopRequireDefault(_map);var _slicedToArray2=__webpack_require__("./node_modules/babel-runtime/helpers/slicedToArray.js");var _slicedToArray3=_interopRequireDefault(_slicedToArray2);var _getPrototypeOf=__webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=__webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");var _inherits3=_interopRequireDefault(_inherits2);exports.flush=flush;var _react=__webpack_require__("./node_modules/react/index.js");var _stylesheetRegistry=__webpack_require__("./node_modules/next/node_modules/styled-jsx/dist/stylesheet-registry.js");var _stylesheetRegistry2=_interopRequireDefault(_stylesheetRegistry);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var styleSheetRegistry=new _stylesheetRegistry2.default();var JSXStyle=function(_Component){(0, _inherits3.default)(JSXStyle,_Component);function JSXStyle(){(0, _classCallCheck3.default)(this,JSXStyle);return(0, _possibleConstructorReturn3.default)(this,(JSXStyle.__proto__||(0, _getPrototypeOf2.default)(JSXStyle)).apply(this,arguments));}(0, _createClass3.default)(JSXStyle,[{key:'componentWillMount',value:function componentWillMount(){styleSheetRegistry.add(this.props);}},{key:'shouldComponentUpdate',value:function shouldComponentUpdate(nextProps){return this.props.css!==nextProps.css;}// To avoid FOUC, we process new changes
// on `componentWillUpdate` rather than `componentDidUpdate`.
},{key:'componentWillUpdate',value:function componentWillUpdate(nextProps){styleSheetRegistry.update(this.props,nextProps);}},{key:'componentWillUnmount',value:function componentWillUnmount(){styleSheetRegistry.remove(this.props);}},{key:'render',value:function render(){return null;}}],[{key:'dynamic',value:function dynamic(info){return info.map(function(tagInfo){var _tagInfo=(0, _slicedToArray3.default)(tagInfo,2),baseId=_tagInfo[0],props=_tagInfo[1];return styleSheetRegistry.computeId(baseId,props);}).join(' ');}}]);return JSXStyle;}(_react.Component);exports.default=JSXStyle;function flush(){var cssRules=styleSheetRegistry.cssRules();styleSheetRegistry.flush();return new _map2.default(cssRules);}/***/},/***/"./node_modules/next/node_modules/styled-jsx/dist/stylesheet-registry.js":/***/function node_modulesNextNode_modulesStyledJsxDistStylesheetRegistryJs(module,exports,__webpack_require__){Object.defineProperty(exports,"__esModule",{value:true});var _keys=__webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js");var _keys2=_interopRequireDefault(_keys);var _classCallCheck2=__webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");var _createClass3=_interopRequireDefault(_createClass2);var _stringHash=__webpack_require__("./node_modules/string-hash/index.js");var _stringHash2=_interopRequireDefault(_stringHash);var _stylesheet=__webpack_require__("./node_modules/next/node_modules/styled-jsx/dist/lib/stylesheet.js");var _stylesheet2=_interopRequireDefault(_stylesheet);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var sanitize=function sanitize(rule){return rule.replace(/\/style/ig,'\\/style');};var StyleSheetRegistry=function(){function StyleSheetRegistry(){var _ref=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},_ref$styleSheet=_ref.styleSheet,styleSheet=_ref$styleSheet===undefined?null:_ref$styleSheet,_ref$optimizeForSpeed=_ref.optimizeForSpeed,optimizeForSpeed=_ref$optimizeForSpeed===undefined?false:_ref$optimizeForSpeed,_ref$isBrowser=_ref.isBrowser,isBrowser=_ref$isBrowser===undefined?typeof window!=='undefined':_ref$isBrowser;(0, _classCallCheck3.default)(this,StyleSheetRegistry);this._sheet=styleSheet||new _stylesheet2.default({name:'styled-jsx',optimizeForSpeed:optimizeForSpeed});this._sheet.inject();if(styleSheet&&typeof optimizeForSpeed==='boolean'){this._sheet.setOptimizeForSpeed(optimizeForSpeed);this._optimizeForSpeed=this._sheet.isOptimizeForSpeed();}this._isBrowser=isBrowser;this._fromServer=undefined;this._indices={};this._instancesCounts={};this.computeId=this.createComputeId();this.computeSelector=this.createComputeSelector();}(0, _createClass3.default)(StyleSheetRegistry,[{key:'add',value:function add(props){var _this=this;if(undefined===this._optimizeForSpeed){this._optimizeForSpeed=Array.isArray(props.css);this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);this._optimizeForSpeed=this._sheet.isOptimizeForSpeed();}if(this._isBrowser&&!this._fromServer){this._fromServer=this.selectFromServer();this._instancesCounts=(0, _keys2.default)(this._fromServer).reduce(function(acc,tagName){acc[tagName]=0;return acc;},{});}var _getIdAndRules=this.getIdAndRules(props),styleId=_getIdAndRules.styleId,rules=_getIdAndRules.rules;// Deduping: just increase the instances count.
if(styleId in this._instancesCounts){this._instancesCounts[styleId]+=1;return;}var indices=rules.map(function(rule){return _this._sheet.insertRule(rule);})// Filter out invalid rules
.filter(function(index){return index!==-1;});if(indices.length>0){this._indices[styleId]=indices;this._instancesCounts[styleId]=1;}}},{key:'remove',value:function remove(props){var _this2=this;var _getIdAndRules2=this.getIdAndRules(props),styleId=_getIdAndRules2.styleId;invariant(styleId in this._instancesCounts,'styleId: `'+styleId+'` not found');this._instancesCounts[styleId]-=1;if(this._instancesCounts[styleId]<1){var tagFromServer=this._fromServer&&this._fromServer[styleId];if(tagFromServer){tagFromServer.parentNode.removeChild(tagFromServer);delete this._fromServer[styleId];}else{this._indices[styleId].forEach(function(index){return _this2._sheet.deleteRule(index);});delete this._indices[styleId];}delete this._instancesCounts[styleId];}}},{key:'update',value:function update(props,nextProps){this.add(nextProps);this.remove(props);}},{key:'flush',value:function flush(){this._sheet.flush();this._sheet.inject();this._fromServer=undefined;this._indices={};this._instancesCounts={};this.computeId=this.createComputeId();this.computeSelector=this.createComputeSelector();}},{key:'cssRules',value:function cssRules(){var _this3=this;var fromServer=this._fromServer?(0, _keys2.default)(this._fromServer).map(function(styleId){return[styleId,_this3._fromServer[styleId]];}):[];var cssRules=this._sheet.cssRules();return fromServer.concat((0, _keys2.default)(this._indices).map(function(styleId){return[styleId,_this3._indices[styleId].map(function(index){return cssRules[index].cssText;}).join('\n')];}));}/**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */},{key:'createComputeId',value:function createComputeId(){var cache={};return function(baseId,props){if(!props){return'jsx-'+baseId;}var propsToString=String(props);var key=baseId+propsToString;// return `jsx-${hashString(`${baseId}-${propsToString}`)}`
if(!cache[key]){cache[key]='jsx-'+(0, _stringHash2.default)(baseId+'-'+propsToString);}return cache[key];};}/**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */},{key:'createComputeSelector',value:function createComputeSelector(){var selectoPlaceholderRegexp=arguments.length>0&&arguments[0]!==undefined?arguments[0]:/__jsx-style-dynamic-selector/g;var cache={};return function(id,css){// Sanitize SSR-ed CSS.
// Client side code doesn't need to be sanitized since we use
// document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
if(!this._isBrowser){css=sanitize(css);}var idcss=id+css;if(!cache[idcss]){cache[idcss]=css.replace(selectoPlaceholderRegexp,id);}return cache[idcss];};}},{key:'getIdAndRules',value:function getIdAndRules(props){var _this4=this;if(props.dynamic){var styleId=this.computeId(props.styleId,props.dynamic);return{styleId:styleId,rules:Array.isArray(props.css)?props.css.map(function(rule){return _this4.computeSelector(styleId,rule);}):[this.computeSelector(styleId,props.css)]};}return{styleId:this.computeId(props.styleId),rules:Array.isArray(props.css)?props.css:[props.css]};}/**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */},{key:'selectFromServer',value:function selectFromServer(){var elements=Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));return elements.reduce(function(acc,element){var id=element.id.slice(2);acc[id]=element;return acc;},{});}}]);return StyleSheetRegistry;}();exports.default=StyleSheetRegistry;function invariant(condition,message){if(!condition){throw new Error('StyleSheetRegistry: '+message+'.');}}/***/},/***/"./node_modules/next/node_modules/styled-jsx/style.js":/***/function node_modulesNextNode_modulesStyledJsxStyleJs(module,exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/next/node_modules/styled-jsx/dist/style.js");/***/},/***/"./node_modules/next/router.js":/***/function node_modulesNextRouterJs(module,exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/next/dist/lib/router/index.js");/***/},/***/"./node_modules/object-keys/index.js":/***/function node_modulesObjectKeysIndexJs(module,exports,__webpack_require__){var has=Object.prototype.hasOwnProperty;var toStr=Object.prototype.toString;var slice=Array.prototype.slice;var isArgs=__webpack_require__("./node_modules/object-keys/isArguments.js");var isEnumerable=Object.prototype.propertyIsEnumerable;var hasDontEnumBug=!isEnumerable.call({toString:null},'toString');var hasProtoEnumBug=isEnumerable.call(function(){},'prototype');var dontEnums=['toString','toLocaleString','valueOf','hasOwnProperty','isPrototypeOf','propertyIsEnumerable','constructor'];var equalsConstructorPrototype=function equalsConstructorPrototype(o){var ctor=o.constructor;return ctor&&ctor.prototype===o;};var excludedKeys={$applicationCache:true,$console:true,$external:true,$frame:true,$frameElement:true,$frames:true,$innerHeight:true,$innerWidth:true,$outerHeight:true,$outerWidth:true,$pageXOffset:true,$pageYOffset:true,$parent:true,$scrollLeft:true,$scrollTop:true,$scrollX:true,$scrollY:true,$self:true,$webkitIndexedDB:true,$webkitStorageInfo:true,$window:true};var hasAutomationEqualityBug=function(){/* global window */if(typeof window==='undefined'){return false;}for(var k in window){try{if(!excludedKeys['$'+k]&&has.call(window,k)&&window[k]!==null&&typeof window[k]==='object'){try{equalsConstructorPrototype(window[k]);}catch(e){return true;}}}catch(e){return true;}}return false;}();var equalsConstructorPrototypeIfNotBuggy=function equalsConstructorPrototypeIfNotBuggy(o){/* global window */if(typeof window==='undefined'||!hasAutomationEqualityBug){return equalsConstructorPrototype(o);}try{return equalsConstructorPrototype(o);}catch(e){return false;}};var keysShim=function keys(object){var isObject=object!==null&&typeof object==='object';var isFunction=toStr.call(object)==='[object Function]';var isArguments=isArgs(object);var isString=isObject&&toStr.call(object)==='[object String]';var theKeys=[];if(!isObject&&!isFunction&&!isArguments){throw new TypeError('Object.keys called on a non-object');}var skipProto=hasProtoEnumBug&&isFunction;if(isString&&object.length>0&&!has.call(object,0)){for(var i=0;i<object.length;++i){theKeys.push(String(i));}}if(isArguments&&object.length>0){for(var j=0;j<object.length;++j){theKeys.push(String(j));}}else{for(var name in object){if(!(skipProto&&name==='prototype')&&has.call(object,name)){theKeys.push(String(name));}}}if(hasDontEnumBug){var skipConstructor=equalsConstructorPrototypeIfNotBuggy(object);for(var k=0;k<dontEnums.length;++k){if(!(skipConstructor&&dontEnums[k]==='constructor')&&has.call(object,dontEnums[k])){theKeys.push(dontEnums[k]);}}}return theKeys;};keysShim.shim=function shimObjectKeys(){if(Object.keys){var keysWorksWithArguments=function(){// Safari 5.0 bug
return(Object.keys(arguments)||'').length===2;}(1,2);if(!keysWorksWithArguments){var originalKeys=Object.keys;Object.keys=function keys(object){// eslint-disable-line func-name-matching
if(isArgs(object)){return originalKeys(slice.call(object));}else{return originalKeys(object);}};}}else{Object.keys=keysShim;}return Object.keys||keysShim;};module.exports=keysShim;/***/},/***/"./node_modules/object-keys/isArguments.js":/***/function node_modulesObjectKeysIsArgumentsJs(module,exports,__webpack_require__){var toStr=Object.prototype.toString;module.exports=function isArguments(value){var str=toStr.call(value);var isArgs=str==='[object Arguments]';if(!isArgs){isArgs=str!=='[object Array]'&&value!==null&&typeof value==='object'&&typeof value.length==='number'&&value.length>=0&&toStr.call(value.callee)==='[object Function]';}return isArgs;};/***/},/***/"./node_modules/object.assign/implementation.js":/***/function node_modulesObjectAssignImplementationJs(module,exports,__webpack_require__){var keys=__webpack_require__("./node_modules/object-keys/index.js");var bind=__webpack_require__("./node_modules/function-bind/index.js");var canBeObject=function canBeObject(obj){return typeof obj!=='undefined'&&obj!==null;};var hasSymbols=__webpack_require__("./node_modules/has-symbols/shams.js")();var toObject=Object;var push=bind.call(Function.call,Array.prototype.push);var propIsEnumerable=bind.call(Function.call,Object.prototype.propertyIsEnumerable);var originalGetSymbols=hasSymbols?Object.getOwnPropertySymbols:null;module.exports=function assign(target,source1){if(!canBeObject(target)){throw new TypeError('target must be an object');}var objTarget=toObject(target);var s,source,i,props,syms,value,key;for(s=1;s<arguments.length;++s){source=toObject(arguments[s]);props=keys(source);var getSymbols=hasSymbols&&(Object.getOwnPropertySymbols||originalGetSymbols);if(getSymbols){syms=getSymbols(source);for(i=0;i<syms.length;++i){key=syms[i];if(propIsEnumerable(source,key)){push(props,key);}}}for(i=0;i<props.length;++i){key=props[i];value=source[key];if(propIsEnumerable(source,key)){objTarget[key]=value;}}}return objTarget;};/***/},/***/"./node_modules/object.assign/index.js":/***/function node_modulesObjectAssignIndexJs(module,exports,__webpack_require__){var defineProperties=__webpack_require__("./node_modules/define-properties/index.js");var implementation=__webpack_require__("./node_modules/object.assign/implementation.js");var getPolyfill=__webpack_require__("./node_modules/object.assign/polyfill.js");var shim=__webpack_require__("./node_modules/object.assign/shim.js");var polyfill=getPolyfill();defineProperties(polyfill,{getPolyfill:getPolyfill,implementation:implementation,shim:shim});module.exports=polyfill;/***/},/***/"./node_modules/object.assign/polyfill.js":/***/function node_modulesObjectAssignPolyfillJs(module,exports,__webpack_require__){var implementation=__webpack_require__("./node_modules/object.assign/implementation.js");var lacksProperEnumerationOrder=function lacksProperEnumerationOrder(){if(!Object.assign){return false;}// v8, specifically in node 4.x, has a bug with incorrect property enumeration order
// note: this does not detect the bug unless there's 20 characters
var str='abcdefghijklmnopqrst';var letters=str.split('');var map={};for(var i=0;i<letters.length;++i){map[letters[i]]=letters[i];}var obj=Object.assign({},map);var actual='';for(var k in obj){actual+=k;}return str!==actual;};var assignHasPendingExceptions=function assignHasPendingExceptions(){if(!Object.assign||!Object.preventExtensions){return false;}// Firefox 37 still has "pending exception" logic in its Object.assign implementation,
// which is 72% slower than our shim, and Firefox 40's native implementation.
var thrower=Object.preventExtensions({1:2});try{Object.assign(thrower,'xy');}catch(e){return thrower[1]==='y';}return false;};module.exports=function getPolyfill(){if(!Object.assign){return implementation;}if(lacksProperEnumerationOrder()){return implementation;}if(assignHasPendingExceptions()){return implementation;}return Object.assign;};/***/},/***/"./node_modules/object.assign/shim.js":/***/function node_modulesObjectAssignShimJs(module,exports,__webpack_require__){var define=__webpack_require__("./node_modules/define-properties/index.js");var getPolyfill=__webpack_require__("./node_modules/object.assign/polyfill.js");module.exports=function shimAssign(){var polyfill=getPolyfill();define(Object,{assign:polyfill},{assign:function assign(){return Object.assign!==polyfill;}});return polyfill;};/***/},/***/"./node_modules/popper.js/dist/esm/popper.js":/***/function node_modulesPopperJsDistEsmPopperJs(module,__webpack_exports__,__webpack_require__){/* WEBPACK VAR INJECTION */(function(global){/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.14.3
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */var isBrowser=typeof window!=='undefined'&&typeof document!=='undefined';var longerTimeoutBrowsers=['Edge','Trident','Firefox'];var timeoutDuration=0;for(var i=0;i<longerTimeoutBrowsers.length;i+=1){if(isBrowser&&navigator.userAgent.indexOf(longerTimeoutBrowsers[i])>=0){timeoutDuration=1;break;}}function microtaskDebounce(fn){var called=false;return function(){if(called){return;}called=true;window.Promise.resolve().then(function(){called=false;fn();});};}function taskDebounce(fn){var scheduled=false;return function(){if(!scheduled){scheduled=true;setTimeout(function(){scheduled=false;fn();},timeoutDuration);}};}var supportsMicroTasks=isBrowser&&window.Promise;/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/var debounce=supportsMicroTasks?microtaskDebounce:taskDebounce;/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */function isFunction(functionToCheck){var getType={};return functionToCheck&&getType.toString.call(functionToCheck)==='[object Function]';}/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */function getStyleComputedProperty(element,property){if(element.nodeType!==1){return[];}// NOTE: 1 DOM access here
var css=getComputedStyle(element,null);return property?css[property]:css;}/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */function getParentNode(element){if(element.nodeName==='HTML'){return element;}return element.parentNode||element.host;}/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */function getScrollParent(element){// Return body, `getScroll` will take care to get the correct `scrollTop` from it
if(!element){return document.body;}switch(element.nodeName){case'HTML':case'BODY':return element.ownerDocument.body;case'#document':return element.body;}// Firefox want us to check `-x` and `-y` variations as well
var _getStyleComputedProp=getStyleComputedProperty(element),overflow=_getStyleComputedProp.overflow,overflowX=_getStyleComputedProp.overflowX,overflowY=_getStyleComputedProp.overflowY;if(/(auto|scroll|overlay)/.test(overflow+overflowY+overflowX)){return element;}return getScrollParent(getParentNode(element));}var isIE11=isBrowser&&!!(window.MSInputMethodContext&&document.documentMode);var isIE10=isBrowser&&/MSIE 10/.test(navigator.userAgent);/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */function isIE(version){if(version===11){return isIE11;}if(version===10){return isIE10;}return isIE11||isIE10;}/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */function getOffsetParent(element){if(!element){return document.documentElement;}var noOffsetParent=isIE(10)?document.body:null;// NOTE: 1 DOM access here
var offsetParent=element.offsetParent;// Skip hidden elements which don't have an offsetParent
while(offsetParent===noOffsetParent&&element.nextElementSibling){offsetParent=(element=element.nextElementSibling).offsetParent;}var nodeName=offsetParent&&offsetParent.nodeName;if(!nodeName||nodeName==='BODY'||nodeName==='HTML'){return element?element.ownerDocument.documentElement:document.documentElement;}// .offsetParent will return the closest TD or TABLE in case
// no offsetParent is present, I hate this job...
if(['TD','TABLE'].indexOf(offsetParent.nodeName)!==-1&&getStyleComputedProperty(offsetParent,'position')==='static'){return getOffsetParent(offsetParent);}return offsetParent;}function isOffsetContainer(element){var nodeName=element.nodeName;if(nodeName==='BODY'){return false;}return nodeName==='HTML'||getOffsetParent(element.firstElementChild)===element;}/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */function getRoot(node){if(node.parentNode!==null){return getRoot(node.parentNode);}return node;}/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */function findCommonOffsetParent(element1,element2){// This check is needed to avoid errors in case one of the elements isn't defined for any reason
if(!element1||!element1.nodeType||!element2||!element2.nodeType){return document.documentElement;}// Here we make sure to give as "start" the element that comes first in the DOM
var order=element1.compareDocumentPosition(element2)&Node.DOCUMENT_POSITION_FOLLOWING;var start=order?element1:element2;var end=order?element2:element1;// Get common ancestor container
var range=document.createRange();range.setStart(start,0);range.setEnd(end,0);var commonAncestorContainer=range.commonAncestorContainer;// Both nodes are inside #document
if(element1!==commonAncestorContainer&&element2!==commonAncestorContainer||start.contains(end)){if(isOffsetContainer(commonAncestorContainer)){return commonAncestorContainer;}return getOffsetParent(commonAncestorContainer);}// one of the nodes is inside shadowDOM, find which one
var element1root=getRoot(element1);if(element1root.host){return findCommonOffsetParent(element1root.host,element2);}else{return findCommonOffsetParent(element1,getRoot(element2).host);}}/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */function getScroll(element){var side=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'top';var upperSide=side==='top'?'scrollTop':'scrollLeft';var nodeName=element.nodeName;if(nodeName==='BODY'||nodeName==='HTML'){var html=element.ownerDocument.documentElement;var scrollingElement=element.ownerDocument.scrollingElement||html;return scrollingElement[upperSide];}return element[upperSide];}/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */function includeScroll(rect,element){var subtract=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var scrollTop=getScroll(element,'top');var scrollLeft=getScroll(element,'left');var modifier=subtract?-1:1;rect.top+=scrollTop*modifier;rect.bottom+=scrollTop*modifier;rect.left+=scrollLeft*modifier;rect.right+=scrollLeft*modifier;return rect;}/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */function getBordersSize(styles,axis){var sideA=axis==='x'?'Left':'Top';var sideB=sideA==='Left'?'Right':'Bottom';return parseFloat(styles['border'+sideA+'Width'],10)+parseFloat(styles['border'+sideB+'Width'],10);}function getSize(axis,body,html,computedStyle){return Math.max(body['offset'+axis],body['scroll'+axis],html['client'+axis],html['offset'+axis],html['scroll'+axis],isIE(10)?html['offset'+axis]+computedStyle['margin'+(axis==='Height'?'Top':'Left')]+computedStyle['margin'+(axis==='Height'?'Bottom':'Right')]:0);}function getWindowSizes(){var body=document.body;var html=document.documentElement;var computedStyle=isIE(10)&&getComputedStyle(html);return{height:getSize('Height',body,html,computedStyle),width:getSize('Width',body,html,computedStyle)};}var classCallCheck=function classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}};var createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var defineProperty=function defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;};var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */function getClientRect(offsets){return _extends({},offsets,{right:offsets.left+offsets.width,bottom:offsets.top+offsets.height});}/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */function getBoundingClientRect(element){var rect={};// IE10 10 FIX: Please, don't ask, the element isn't
// considered in DOM in some circumstances...
// This isn't reproducible in IE10 compatibility mode of IE11
try{if(isIE(10)){rect=element.getBoundingClientRect();var scrollTop=getScroll(element,'top');var scrollLeft=getScroll(element,'left');rect.top+=scrollTop;rect.left+=scrollLeft;rect.bottom+=scrollTop;rect.right+=scrollLeft;}else{rect=element.getBoundingClientRect();}}catch(e){}var result={left:rect.left,top:rect.top,width:rect.right-rect.left,height:rect.bottom-rect.top};// subtract scrollbar size from sizes
var sizes=element.nodeName==='HTML'?getWindowSizes():{};var width=sizes.width||element.clientWidth||result.right-result.left;var height=sizes.height||element.clientHeight||result.bottom-result.top;var horizScrollbar=element.offsetWidth-width;var vertScrollbar=element.offsetHeight-height;// if an hypothetical scrollbar is detected, we must be sure it's not a `border`
// we make this check conditional for performance reasons
if(horizScrollbar||vertScrollbar){var styles=getStyleComputedProperty(element);horizScrollbar-=getBordersSize(styles,'x');vertScrollbar-=getBordersSize(styles,'y');result.width-=horizScrollbar;result.height-=vertScrollbar;}return getClientRect(result);}function getOffsetRectRelativeToArbitraryNode(children,parent){var fixedPosition=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var isIE10=isIE(10);var isHTML=parent.nodeName==='HTML';var childrenRect=getBoundingClientRect(children);var parentRect=getBoundingClientRect(parent);var scrollParent=getScrollParent(children);var styles=getStyleComputedProperty(parent);var borderTopWidth=parseFloat(styles.borderTopWidth,10);var borderLeftWidth=parseFloat(styles.borderLeftWidth,10);// In cases where the parent is fixed, we must ignore negative scroll in offset calc
if(fixedPosition&&parent.nodeName==='HTML'){parentRect.top=Math.max(parentRect.top,0);parentRect.left=Math.max(parentRect.left,0);}var offsets=getClientRect({top:childrenRect.top-parentRect.top-borderTopWidth,left:childrenRect.left-parentRect.left-borderLeftWidth,width:childrenRect.width,height:childrenRect.height});offsets.marginTop=0;offsets.marginLeft=0;// Subtract margins of documentElement in case it's being used as parent
// we do this only on HTML because it's the only element that behaves
// differently when margins are applied to it. The margins are included in
// the box of the documentElement, in the other cases not.
if(!isIE10&&isHTML){var marginTop=parseFloat(styles.marginTop,10);var marginLeft=parseFloat(styles.marginLeft,10);offsets.top-=borderTopWidth-marginTop;offsets.bottom-=borderTopWidth-marginTop;offsets.left-=borderLeftWidth-marginLeft;offsets.right-=borderLeftWidth-marginLeft;// Attach marginTop and marginLeft because in some circumstances we may need them
offsets.marginTop=marginTop;offsets.marginLeft=marginLeft;}if(isIE10&&!fixedPosition?parent.contains(scrollParent):parent===scrollParent&&scrollParent.nodeName!=='BODY'){offsets=includeScroll(offsets,parent);}return offsets;}function getViewportOffsetRectRelativeToArtbitraryNode(element){var excludeScroll=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var html=element.ownerDocument.documentElement;var relativeOffset=getOffsetRectRelativeToArbitraryNode(element,html);var width=Math.max(html.clientWidth,window.innerWidth||0);var height=Math.max(html.clientHeight,window.innerHeight||0);var scrollTop=!excludeScroll?getScroll(html):0;var scrollLeft=!excludeScroll?getScroll(html,'left'):0;var offset={top:scrollTop-relativeOffset.top+relativeOffset.marginTop,left:scrollLeft-relativeOffset.left+relativeOffset.marginLeft,width:width,height:height};return getClientRect(offset);}/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */function isFixed(element){var nodeName=element.nodeName;if(nodeName==='BODY'||nodeName==='HTML'){return false;}if(getStyleComputedProperty(element,'position')==='fixed'){return true;}return isFixed(getParentNode(element));}/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */function getFixedPositionOffsetParent(element){// This check is needed to avoid errors in case one of the elements isn't defined for any reason
if(!element||!element.parentElement||isIE()){return document.documentElement;}var el=element.parentElement;while(el&&getStyleComputedProperty(el,'transform')==='none'){el=el.parentElement;}return el||document.documentElement;}/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */function getBoundaries(popper,reference,padding,boundariesElement){var fixedPosition=arguments.length>4&&arguments[4]!==undefined?arguments[4]:false;// NOTE: 1 DOM access here
var boundaries={top:0,left:0};var offsetParent=fixedPosition?getFixedPositionOffsetParent(popper):findCommonOffsetParent(popper,reference);// Handle viewport case
if(boundariesElement==='viewport'){boundaries=getViewportOffsetRectRelativeToArtbitraryNode(offsetParent,fixedPosition);}else{// Handle other cases based on DOM element used as boundaries
var boundariesNode=void 0;if(boundariesElement==='scrollParent'){boundariesNode=getScrollParent(getParentNode(reference));if(boundariesNode.nodeName==='BODY'){boundariesNode=popper.ownerDocument.documentElement;}}else if(boundariesElement==='window'){boundariesNode=popper.ownerDocument.documentElement;}else{boundariesNode=boundariesElement;}var offsets=getOffsetRectRelativeToArbitraryNode(boundariesNode,offsetParent,fixedPosition);// In case of HTML, we need a different computation
if(boundariesNode.nodeName==='HTML'&&!isFixed(offsetParent)){var _getWindowSizes=getWindowSizes(),height=_getWindowSizes.height,width=_getWindowSizes.width;boundaries.top+=offsets.top-offsets.marginTop;boundaries.bottom=height+offsets.top;boundaries.left+=offsets.left-offsets.marginLeft;boundaries.right=width+offsets.left;}else{// for all the other DOM elements, this one is good
boundaries=offsets;}}// Add paddings
boundaries.left+=padding;boundaries.top+=padding;boundaries.right-=padding;boundaries.bottom-=padding;return boundaries;}function getArea(_ref){var width=_ref.width,height=_ref.height;return width*height;}/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function computeAutoPlacement(placement,refRect,popper,reference,boundariesElement){var padding=arguments.length>5&&arguments[5]!==undefined?arguments[5]:0;if(placement.indexOf('auto')===-1){return placement;}var boundaries=getBoundaries(popper,reference,padding,boundariesElement);var rects={top:{width:boundaries.width,height:refRect.top-boundaries.top},right:{width:boundaries.right-refRect.right,height:boundaries.height},bottom:{width:boundaries.width,height:boundaries.bottom-refRect.bottom},left:{width:refRect.left-boundaries.left,height:boundaries.height}};var sortedAreas=Object.keys(rects).map(function(key){return _extends({key:key},rects[key],{area:getArea(rects[key])});}).sort(function(a,b){return b.area-a.area;});var filteredAreas=sortedAreas.filter(function(_ref2){var width=_ref2.width,height=_ref2.height;return width>=popper.clientWidth&&height>=popper.clientHeight;});var computedPlacement=filteredAreas.length>0?filteredAreas[0].key:sortedAreas[0].key;var variation=placement.split('-')[1];return computedPlacement+(variation?'-'+variation:'');}/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */function getReferenceOffsets(state,popper,reference){var fixedPosition=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;var commonOffsetParent=fixedPosition?getFixedPositionOffsetParent(popper):findCommonOffsetParent(popper,reference);return getOffsetRectRelativeToArbitraryNode(reference,commonOffsetParent,fixedPosition);}/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */function getOuterSizes(element){var styles=getComputedStyle(element);var x=parseFloat(styles.marginTop)+parseFloat(styles.marginBottom);var y=parseFloat(styles.marginLeft)+parseFloat(styles.marginRight);var result={width:element.offsetWidth+y,height:element.offsetHeight+x};return result;}/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */function getOppositePlacement(placement){var hash={left:'right',right:'left',bottom:'top',top:'bottom'};return placement.replace(/left|right|bottom|top/g,function(matched){return hash[matched];});}/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */function getPopperOffsets(popper,referenceOffsets,placement){placement=placement.split('-')[0];// Get popper node sizes
var popperRect=getOuterSizes(popper);// Add position, width and height to our offsets object
var popperOffsets={width:popperRect.width,height:popperRect.height};// depending by the popper placement we have to compute its offsets slightly differently
var isHoriz=['right','left'].indexOf(placement)!==-1;var mainSide=isHoriz?'top':'left';var secondarySide=isHoriz?'left':'top';var measurement=isHoriz?'height':'width';var secondaryMeasurement=!isHoriz?'height':'width';popperOffsets[mainSide]=referenceOffsets[mainSide]+referenceOffsets[measurement]/2-popperRect[measurement]/2;if(placement===secondarySide){popperOffsets[secondarySide]=referenceOffsets[secondarySide]-popperRect[secondaryMeasurement];}else{popperOffsets[secondarySide]=referenceOffsets[getOppositePlacement(secondarySide)];}return popperOffsets;}/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */function find(arr,check){// use native find if supported
if(Array.prototype.find){return arr.find(check);}// use `filter` to obtain the same behavior of `find`
return arr.filter(check)[0];}/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */function findIndex(arr,prop,value){// use native findIndex if supported
if(Array.prototype.findIndex){return arr.findIndex(function(cur){return cur[prop]===value;});}// use `find` + `indexOf` if `findIndex` isn't supported
var match=find(arr,function(obj){return obj[prop]===value;});return arr.indexOf(match);}/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */function runModifiers(modifiers,data,ends){var modifiersToRun=ends===undefined?modifiers:modifiers.slice(0,findIndex(modifiers,'name',ends));modifiersToRun.forEach(function(modifier){if(modifier['function']){// eslint-disable-line dot-notation
console.warn('`modifier.function` is deprecated, use `modifier.fn`!');}var fn=modifier['function']||modifier.fn;// eslint-disable-line dot-notation
if(modifier.enabled&&isFunction(fn)){// Add properties to offsets to make them a complete clientRect object
// we do this before each modifier to make sure the previous one doesn't
// mess with these values
data.offsets.popper=getClientRect(data.offsets.popper);data.offsets.reference=getClientRect(data.offsets.reference);data=fn(data,modifier);}});return data;}/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */function update(){// if popper is destroyed, don't perform any further update
if(this.state.isDestroyed){return;}var data={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:false,offsets:{}};// compute reference element offsets
data.offsets.reference=getReferenceOffsets(this.state,this.popper,this.reference,this.options.positionFixed);// compute auto placement, store placement inside the data object,
// modifiers will be able to edit `placement` if needed
// and refer to originalPlacement to know the original value
data.placement=computeAutoPlacement(this.options.placement,data.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding);// store the computed placement inside `originalPlacement`
data.originalPlacement=data.placement;data.positionFixed=this.options.positionFixed;// compute the popper offsets
data.offsets.popper=getPopperOffsets(this.popper,data.offsets.reference,data.placement);data.offsets.popper.position=this.options.positionFixed?'fixed':'absolute';// run the modifiers
data=runModifiers(this.modifiers,data);// the first `update` will call `onCreate` callback
// the other ones will call `onUpdate` callback
if(!this.state.isCreated){this.state.isCreated=true;this.options.onCreate(data);}else{this.options.onUpdate(data);}}/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */function isModifierEnabled(modifiers,modifierName){return modifiers.some(function(_ref){var name=_ref.name,enabled=_ref.enabled;return enabled&&name===modifierName;});}/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */function getSupportedPropertyName(property){var prefixes=[false,'ms','Webkit','Moz','O'];var upperProp=property.charAt(0).toUpperCase()+property.slice(1);for(var i=0;i<prefixes.length;i++){var prefix=prefixes[i];var toCheck=prefix?''+prefix+upperProp:property;if(typeof document.body.style[toCheck]!=='undefined'){return toCheck;}}return null;}/**
 * Destroy the popper
 * @method
 * @memberof Popper
 */function destroy(){this.state.isDestroyed=true;// touch DOM only if `applyStyle` modifier is enabled
if(isModifierEnabled(this.modifiers,'applyStyle')){this.popper.removeAttribute('x-placement');this.popper.style.position='';this.popper.style.top='';this.popper.style.left='';this.popper.style.right='';this.popper.style.bottom='';this.popper.style.willChange='';this.popper.style[getSupportedPropertyName('transform')]='';}this.disableEventListeners();// remove the popper if user explicity asked for the deletion on destroy
// do not use `remove` because IE11 doesn't support it
if(this.options.removeOnDestroy){this.popper.parentNode.removeChild(this.popper);}return this;}/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */function getWindow(element){var ownerDocument=element.ownerDocument;return ownerDocument?ownerDocument.defaultView:window;}function attachToScrollParents(scrollParent,event,callback,scrollParents){var isBody=scrollParent.nodeName==='BODY';var target=isBody?scrollParent.ownerDocument.defaultView:scrollParent;target.addEventListener(event,callback,{passive:true});if(!isBody){attachToScrollParents(getScrollParent(target.parentNode),event,callback,scrollParents);}scrollParents.push(target);}/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */function setupEventListeners(reference,options,state,updateBound){// Resize event listener on window
state.updateBound=updateBound;getWindow(reference).addEventListener('resize',state.updateBound,{passive:true});// Scroll event listener on scroll parents
var scrollElement=getScrollParent(reference);attachToScrollParents(scrollElement,'scroll',state.updateBound,state.scrollParents);state.scrollElement=scrollElement;state.eventsEnabled=true;return state;}/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */function enableEventListeners(){if(!this.state.eventsEnabled){this.state=setupEventListeners(this.reference,this.options,this.state,this.scheduleUpdate);}}/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */function removeEventListeners(reference,state){// Remove resize event listener on window
getWindow(reference).removeEventListener('resize',state.updateBound);// Remove scroll event listener on scroll parents
state.scrollParents.forEach(function(target){target.removeEventListener('scroll',state.updateBound);});// Reset state
state.updateBound=null;state.scrollParents=[];state.scrollElement=null;state.eventsEnabled=false;return state;}/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger onUpdate callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */function disableEventListeners(){if(this.state.eventsEnabled){cancelAnimationFrame(this.scheduleUpdate);this.state=removeEventListeners(this.reference,this.state);}}/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */function isNumeric(n){return n!==''&&!isNaN(parseFloat(n))&&isFinite(n);}/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */function setStyles(element,styles){Object.keys(styles).forEach(function(prop){var unit='';// add unit if the value is numeric and is one of the following
if(['width','height','top','right','bottom','left'].indexOf(prop)!==-1&&isNumeric(styles[prop])){unit='px';}element.style[prop]=styles[prop]+unit;});}/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */function setAttributes(element,attributes){Object.keys(attributes).forEach(function(prop){var value=attributes[prop];if(value!==false){element.setAttribute(prop,attributes[prop]);}else{element.removeAttribute(prop);}});}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */function applyStyle(data){// any property present in `data.styles` will be applied to the popper,
// in this way we can make the 3rd party modifiers add custom styles to it
// Be aware, modifiers could override the properties defined in the previous
// lines of this modifier!
setStyles(data.instance.popper,data.styles);// any property present in `data.attributes` will be applied to the popper,
// they will be set as HTML attributes of the element
setAttributes(data.instance.popper,data.attributes);// if arrowElement is defined and arrowStyles has some properties
if(data.arrowElement&&Object.keys(data.arrowStyles).length){setStyles(data.arrowElement,data.arrowStyles);}return data;}/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */function applyStyleOnLoad(reference,popper,options,modifierOptions,state){// compute reference element offsets
var referenceOffsets=getReferenceOffsets(state,popper,reference,options.positionFixed);// compute auto placement, store placement inside the data object,
// modifiers will be able to edit `placement` if needed
// and refer to originalPlacement to know the original value
var placement=computeAutoPlacement(options.placement,referenceOffsets,popper,reference,options.modifiers.flip.boundariesElement,options.modifiers.flip.padding);popper.setAttribute('x-placement',placement);// Apply `position` to popper before anything else because
// without the position applied we can't guarantee correct computations
setStyles(popper,{position:options.positionFixed?'fixed':'absolute'});return options;}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function computeStyle(data,options){var x=options.x,y=options.y;var popper=data.offsets.popper;// Remove this legacy support in Popper.js v2
var legacyGpuAccelerationOption=find(data.instance.modifiers,function(modifier){return modifier.name==='applyStyle';}).gpuAcceleration;if(legacyGpuAccelerationOption!==undefined){console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');}var gpuAcceleration=legacyGpuAccelerationOption!==undefined?legacyGpuAccelerationOption:options.gpuAcceleration;var offsetParent=getOffsetParent(data.instance.popper);var offsetParentRect=getBoundingClientRect(offsetParent);// Styles
var styles={position:popper.position};// Avoid blurry text by using full pixel integers.
// For pixel-perfect positioning, top/bottom prefers rounded
// values, while left/right prefers floored values.
var offsets={left:Math.floor(popper.left),top:Math.round(popper.top),bottom:Math.round(popper.bottom),right:Math.floor(popper.right)};var sideA=x==='bottom'?'top':'bottom';var sideB=y==='right'?'left':'right';// if gpuAcceleration is set to `true` and transform is supported,
//  we use `translate3d` to apply the position to the popper we
// automatically use the supported prefixed version if needed
var prefixedProperty=getSupportedPropertyName('transform');// now, let's make a step back and look at this code closely (wtf?)
// If the content of the popper grows once it's been positioned, it
// may happen that the popper gets misplaced because of the new content
// overflowing its reference element
// To avoid this problem, we provide two options (x and y), which allow
// the consumer to define the offset origin.
// If we position a popper on top of a reference element, we can set
// `x` to `top` to make the popper grow towards its top instead of
// its bottom.
var left=void 0,top=void 0;if(sideA==='bottom'){top=-offsetParentRect.height+offsets.bottom;}else{top=offsets.top;}if(sideB==='right'){left=-offsetParentRect.width+offsets.right;}else{left=offsets.left;}if(gpuAcceleration&&prefixedProperty){styles[prefixedProperty]='translate3d('+left+'px, '+top+'px, 0)';styles[sideA]=0;styles[sideB]=0;styles.willChange='transform';}else{// othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
var invertTop=sideA==='bottom'?-1:1;var invertLeft=sideB==='right'?-1:1;styles[sideA]=top*invertTop;styles[sideB]=left*invertLeft;styles.willChange=sideA+', '+sideB;}// Attributes
var attributes={'x-placement':data.placement};// Update `data` attributes, styles and arrowStyles
data.attributes=_extends({},attributes,data.attributes);data.styles=_extends({},styles,data.styles);data.arrowStyles=_extends({},data.offsets.arrow,data.arrowStyles);return data;}/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */function isModifierRequired(modifiers,requestingName,requestedName){var requesting=find(modifiers,function(_ref){var name=_ref.name;return name===requestingName;});var isRequired=!!requesting&&modifiers.some(function(modifier){return modifier.name===requestedName&&modifier.enabled&&modifier.order<requesting.order;});if(!isRequired){var _requesting='`'+requestingName+'`';var requested='`'+requestedName+'`';console.warn(requested+' modifier is required by '+_requesting+' modifier in order to work, be sure to include it before '+_requesting+'!');}return isRequired;}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function arrow(data,options){var _data$offsets$arrow;// arrow depends on keepTogether in order to work
if(!isModifierRequired(data.instance.modifiers,'arrow','keepTogether')){return data;}var arrowElement=options.element;// if arrowElement is a string, suppose it's a CSS selector
if(typeof arrowElement==='string'){arrowElement=data.instance.popper.querySelector(arrowElement);// if arrowElement is not found, don't run the modifier
if(!arrowElement){return data;}}else{// if the arrowElement isn't a query selector we must check that the
// provided DOM node is child of its popper node
if(!data.instance.popper.contains(arrowElement)){console.warn('WARNING: `arrow.element` must be child of its popper element!');return data;}}var placement=data.placement.split('-')[0];var _data$offsets=data.offsets,popper=_data$offsets.popper,reference=_data$offsets.reference;var isVertical=['left','right'].indexOf(placement)!==-1;var len=isVertical?'height':'width';var sideCapitalized=isVertical?'Top':'Left';var side=sideCapitalized.toLowerCase();var altSide=isVertical?'left':'top';var opSide=isVertical?'bottom':'right';var arrowElementSize=getOuterSizes(arrowElement)[len];//
// extends keepTogether behavior making sure the popper and its
// reference have enough pixels in conjuction
//
// top/left side
if(reference[opSide]-arrowElementSize<popper[side]){data.offsets.popper[side]-=popper[side]-(reference[opSide]-arrowElementSize);}// bottom/right side
if(reference[side]+arrowElementSize>popper[opSide]){data.offsets.popper[side]+=reference[side]+arrowElementSize-popper[opSide];}data.offsets.popper=getClientRect(data.offsets.popper);// compute center of the popper
var center=reference[side]+reference[len]/2-arrowElementSize/2;// Compute the sideValue using the updated popper offsets
// take popper margin in account because we don't have this info available
var css=getStyleComputedProperty(data.instance.popper);var popperMarginSide=parseFloat(css['margin'+sideCapitalized],10);var popperBorderSide=parseFloat(css['border'+sideCapitalized+'Width'],10);var sideValue=center-data.offsets.popper[side]-popperMarginSide-popperBorderSide;// prevent arrowElement from being placed not contiguously to its popper
sideValue=Math.max(Math.min(popper[len]-arrowElementSize,sideValue),0);data.arrowElement=arrowElement;data.offsets.arrow=(_data$offsets$arrow={},defineProperty(_data$offsets$arrow,side,Math.round(sideValue)),defineProperty(_data$offsets$arrow,altSide,''),_data$offsets$arrow);return data;}/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */function getOppositeVariation(variation){if(variation==='end'){return'start';}else if(variation==='start'){return'end';}return variation;}/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-right` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */var placements=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'];// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements=placements.slice(3);/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */function clockwise(placement){var counter=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var index=validPlacements.indexOf(placement);var arr=validPlacements.slice(index+1).concat(validPlacements.slice(0,index));return counter?arr.reverse():arr;}var BEHAVIORS={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'};/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function flip(data,options){// if `inner` modifier is enabled, we can't use the `flip` modifier
if(isModifierEnabled(data.instance.modifiers,'inner')){return data;}if(data.flipped&&data.placement===data.originalPlacement){// seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
return data;}var boundaries=getBoundaries(data.instance.popper,data.instance.reference,options.padding,options.boundariesElement,data.positionFixed);var placement=data.placement.split('-')[0];var placementOpposite=getOppositePlacement(placement);var variation=data.placement.split('-')[1]||'';var flipOrder=[];switch(options.behavior){case BEHAVIORS.FLIP:flipOrder=[placement,placementOpposite];break;case BEHAVIORS.CLOCKWISE:flipOrder=clockwise(placement);break;case BEHAVIORS.COUNTERCLOCKWISE:flipOrder=clockwise(placement,true);break;default:flipOrder=options.behavior;}flipOrder.forEach(function(step,index){if(placement!==step||flipOrder.length===index+1){return data;}placement=data.placement.split('-')[0];placementOpposite=getOppositePlacement(placement);var popperOffsets=data.offsets.popper;var refOffsets=data.offsets.reference;// using floor because the reference offsets may contain decimals we are not going to consider here
var floor=Math.floor;var overlapsRef=placement==='left'&&floor(popperOffsets.right)>floor(refOffsets.left)||placement==='right'&&floor(popperOffsets.left)<floor(refOffsets.right)||placement==='top'&&floor(popperOffsets.bottom)>floor(refOffsets.top)||placement==='bottom'&&floor(popperOffsets.top)<floor(refOffsets.bottom);var overflowsLeft=floor(popperOffsets.left)<floor(boundaries.left);var overflowsRight=floor(popperOffsets.right)>floor(boundaries.right);var overflowsTop=floor(popperOffsets.top)<floor(boundaries.top);var overflowsBottom=floor(popperOffsets.bottom)>floor(boundaries.bottom);var overflowsBoundaries=placement==='left'&&overflowsLeft||placement==='right'&&overflowsRight||placement==='top'&&overflowsTop||placement==='bottom'&&overflowsBottom;// flip the variation if required
var isVertical=['top','bottom'].indexOf(placement)!==-1;var flippedVariation=!!options.flipVariations&&(isVertical&&variation==='start'&&overflowsLeft||isVertical&&variation==='end'&&overflowsRight||!isVertical&&variation==='start'&&overflowsTop||!isVertical&&variation==='end'&&overflowsBottom);if(overlapsRef||overflowsBoundaries||flippedVariation){// this boolean to detect any flip loop
data.flipped=true;if(overlapsRef||overflowsBoundaries){placement=flipOrder[index+1];}if(flippedVariation){variation=getOppositeVariation(variation);}data.placement=placement+(variation?'-'+variation:'');// this object contains `position`, we want to preserve it along with
// any additional property we may add in the future
data.offsets.popper=_extends({},data.offsets.popper,getPopperOffsets(data.instance.popper,data.offsets.reference,data.placement));data=runModifiers(data.instance.modifiers,data,'flip');}});return data;}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function keepTogether(data){var _data$offsets=data.offsets,popper=_data$offsets.popper,reference=_data$offsets.reference;var placement=data.placement.split('-')[0];var floor=Math.floor;var isVertical=['top','bottom'].indexOf(placement)!==-1;var side=isVertical?'right':'bottom';var opSide=isVertical?'left':'top';var measurement=isVertical?'width':'height';if(popper[side]<floor(reference[opSide])){data.offsets.popper[opSide]=floor(reference[opSide])-popper[measurement];}if(popper[opSide]>floor(reference[side])){data.offsets.popper[opSide]=floor(reference[side]);}return data;}/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */function toValue(str,measurement,popperOffsets,referenceOffsets){// separate value from unit
var split=str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);var value=+split[1];var unit=split[2];// If it's not a number it's an operator, I guess
if(!value){return str;}if(unit.indexOf('%')===0){var element=void 0;switch(unit){case'%p':element=popperOffsets;break;case'%':case'%r':default:element=referenceOffsets;}var rect=getClientRect(element);return rect[measurement]/100*value;}else if(unit==='vh'||unit==='vw'){// if is a vh or vw, we calculate the size based on the viewport
var size=void 0;if(unit==='vh'){size=Math.max(document.documentElement.clientHeight,window.innerHeight||0);}else{size=Math.max(document.documentElement.clientWidth,window.innerWidth||0);}return size/100*value;}else{// if is an explicit pixel unit, we get rid of the unit and keep the value
// if is an implicit unit, it's px, and we return just the value
return value;}}/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */function parseOffset(offset,popperOffsets,referenceOffsets,basePlacement){var offsets=[0,0];// Use height if placement is left or right and index is 0 otherwise use width
// in this way the first offset will use an axis and the second one
// will use the other one
var useHeight=['right','left'].indexOf(basePlacement)!==-1;// Split the offset string to obtain a list of values and operands
// The regex addresses values with the plus or minus sign in front (+10, -20, etc)
var fragments=offset.split(/(\+|\-)/).map(function(frag){return frag.trim();});// Detect if the offset string contains a pair of values or a single one
// they could be separated by comma or space
var divider=fragments.indexOf(find(fragments,function(frag){return frag.search(/,|\s/)!==-1;}));if(fragments[divider]&&fragments[divider].indexOf(',')===-1){console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');}// If divider is found, we divide the list of values and operands to divide
// them by ofset X and Y.
var splitRegex=/\s*,\s*|\s+/;var ops=divider!==-1?[fragments.slice(0,divider).concat([fragments[divider].split(splitRegex)[0]]),[fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider+1))]:[fragments];// Convert the values with units to absolute pixels to allow our computations
ops=ops.map(function(op,index){// Most of the units rely on the orientation of the popper
var measurement=(index===1?!useHeight:useHeight)?'height':'width';var mergeWithPrevious=false;return op// This aggregates any `+` or `-` sign that aren't considered operators
// e.g.: 10 + +5 => [10, +, +5]
.reduce(function(a,b){if(a[a.length-1]===''&&['+','-'].indexOf(b)!==-1){a[a.length-1]=b;mergeWithPrevious=true;return a;}else if(mergeWithPrevious){a[a.length-1]+=b;mergeWithPrevious=false;return a;}else{return a.concat(b);}},[])// Here we convert the string values into number values (in px)
.map(function(str){return toValue(str,measurement,popperOffsets,referenceOffsets);});});// Loop trough the offsets arrays and execute the operations
ops.forEach(function(op,index){op.forEach(function(frag,index2){if(isNumeric(frag)){offsets[index]+=frag*(op[index2-1]==='-'?-1:1);}});});return offsets;}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */function offset(data,_ref){var offset=_ref.offset;var placement=data.placement,_data$offsets=data.offsets,popper=_data$offsets.popper,reference=_data$offsets.reference;var basePlacement=placement.split('-')[0];var offsets=void 0;if(isNumeric(+offset)){offsets=[+offset,0];}else{offsets=parseOffset(offset,popper,reference,basePlacement);}if(basePlacement==='left'){popper.top+=offsets[0];popper.left-=offsets[1];}else if(basePlacement==='right'){popper.top+=offsets[0];popper.left+=offsets[1];}else if(basePlacement==='top'){popper.left+=offsets[0];popper.top-=offsets[1];}else if(basePlacement==='bottom'){popper.left+=offsets[0];popper.top+=offsets[1];}data.popper=popper;return data;}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function preventOverflow(data,options){var boundariesElement=options.boundariesElement||getOffsetParent(data.instance.popper);// If offsetParent is the reference element, we really want to
// go one step up and use the next offsetParent as reference to
// avoid to make this modifier completely useless and look like broken
if(data.instance.reference===boundariesElement){boundariesElement=getOffsetParent(boundariesElement);}// NOTE: DOM access here
// resets the popper's position so that the document size can be calculated excluding
// the size of the popper element itself
var transformProp=getSupportedPropertyName('transform');var popperStyles=data.instance.popper.style;// assignment to help minification
var top=popperStyles.top,left=popperStyles.left,transform=popperStyles[transformProp];popperStyles.top='';popperStyles.left='';popperStyles[transformProp]='';var boundaries=getBoundaries(data.instance.popper,data.instance.reference,options.padding,boundariesElement,data.positionFixed);// NOTE: DOM access here
// restores the original style properties after the offsets have been computed
popperStyles.top=top;popperStyles.left=left;popperStyles[transformProp]=transform;options.boundaries=boundaries;var order=options.priority;var popper=data.offsets.popper;var check={primary:function primary(placement){var value=popper[placement];if(popper[placement]<boundaries[placement]&&!options.escapeWithReference){value=Math.max(popper[placement],boundaries[placement]);}return defineProperty({},placement,value);},secondary:function secondary(placement){var mainSide=placement==='right'?'left':'top';var value=popper[mainSide];if(popper[placement]>boundaries[placement]&&!options.escapeWithReference){value=Math.min(popper[mainSide],boundaries[placement]-(placement==='right'?popper.width:popper.height));}return defineProperty({},mainSide,value);}};order.forEach(function(placement){var side=['left','top'].indexOf(placement)!==-1?'primary':'secondary';popper=_extends({},popper,check[side](placement));});data.offsets.popper=popper;return data;}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function shift(data){var placement=data.placement;var basePlacement=placement.split('-')[0];var shiftvariation=placement.split('-')[1];// if shift shiftvariation is specified, run the modifier
if(shiftvariation){var _data$offsets=data.offsets,reference=_data$offsets.reference,popper=_data$offsets.popper;var isVertical=['bottom','top'].indexOf(basePlacement)!==-1;var side=isVertical?'left':'top';var measurement=isVertical?'width':'height';var shiftOffsets={start:defineProperty({},side,reference[side]),end:defineProperty({},side,reference[side]+reference[measurement]-popper[measurement])};data.offsets.popper=_extends({},popper,shiftOffsets[shiftvariation]);}return data;}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function hide(data){if(!isModifierRequired(data.instance.modifiers,'hide','preventOverflow')){return data;}var refRect=data.offsets.reference;var bound=find(data.instance.modifiers,function(modifier){return modifier.name==='preventOverflow';}).boundaries;if(refRect.bottom<bound.top||refRect.left>bound.right||refRect.top>bound.bottom||refRect.right<bound.left){// Avoid unnecessary DOM access if visibility hasn't changed
if(data.hide===true){return data;}data.hide=true;data.attributes['x-out-of-boundaries']='';}else{// Avoid unnecessary DOM access if visibility hasn't changed
if(data.hide===false){return data;}data.hide=false;data.attributes['x-out-of-boundaries']=false;}return data;}/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */function inner(data){var placement=data.placement;var basePlacement=placement.split('-')[0];var _data$offsets=data.offsets,popper=_data$offsets.popper,reference=_data$offsets.reference;var isHoriz=['left','right'].indexOf(basePlacement)!==-1;var subtractLength=['top','left'].indexOf(basePlacement)===-1;popper[isHoriz?'left':'top']=reference[basePlacement]-(subtractLength?popper[isHoriz?'width':'height']:0);data.placement=getOppositePlacement(placement);data.offsets.popper=getClientRect(popper);return data;}/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */ /**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */var modifiers={/**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */shift:{/** @prop {number} order=100 - Index used to define the order of execution */order:100,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:true,/** @prop {ModifierFn} */fn:shift},/**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unitless, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the height.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
   *
   * @memberof modifiers
   * @inner
   */offset:{/** @prop {number} order=200 - Index used to define the order of execution */order:200,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:true,/** @prop {ModifierFn} */fn:offset,/** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */offset:0},/**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * An scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */preventOverflow:{/** @prop {number} order=300 - Index used to define the order of execution */order:300,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:true,/** @prop {ModifierFn} */fn:preventOverflow,/**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */priority:['left','right','top','bottom'],/**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper this makes sure the popper has always a little padding
     * between the edges of its container
     */padding:5,/**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier, can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */boundariesElement:'scrollParent'},/**
   * Modifier used to make sure the reference and its popper stay near eachothers
   * without leaving any gap between the two. Expecially useful when the arrow is
   * enabled and you want to assure it to point to its reference element.
   * It cares only about the first axis, you can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */keepTogether:{/** @prop {number} order=400 - Index used to define the order of execution */order:400,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:true,/** @prop {ModifierFn} */fn:keepTogether},/**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjuction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */arrow:{/** @prop {number} order=500 - Index used to define the order of execution */order:500,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:true,/** @prop {ModifierFn} */fn:arrow,/** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */element:'[x-arrow]'},/**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */flip:{/** @prop {number} order=600 - Index used to define the order of execution */order:600,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:true,/** @prop {ModifierFn} */fn:flip,/**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations).
     */behavior:'flip',/**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */padding:5,/**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position,
     * the popper will never be placed outside of the defined boundaries
     * (except if keepTogether is enabled)
     */boundariesElement:'viewport'},/**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */inner:{/** @prop {number} order=700 - Index used to define the order of execution */order:700,/** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */enabled:false,/** @prop {ModifierFn} */fn:inner},/**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */hide:{/** @prop {number} order=800 - Index used to define the order of execution */order:800,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:true,/** @prop {ModifierFn} */fn:hide},/**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */computeStyle:{/** @prop {number} order=850 - Index used to define the order of execution */order:850,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:true,/** @prop {ModifierFn} */fn:computeStyle,/**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */gpuAcceleration:true,/**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */x:'bottom',/**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */y:'right'},/**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define you own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */applyStyle:{/** @prop {number} order=900 - Index used to define the order of execution */order:900,/** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */enabled:true,/** @prop {ModifierFn} */fn:applyStyle,/** @prop {Function} */onLoad:applyStyleOnLoad,/**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */gpuAcceleration:undefined}};/**
 * The `dataObject` is an object containing all the informations used by Popper.js
 * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */ /**
 * Default options provided to Popper.js constructor.<br />
 * These can be overriden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass as 3rd argument an object with the same
 * structure of this object, example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */var Defaults={/**
   * Popper's placement
   * @prop {Popper.placements} placement='bottom'
   */placement:'bottom',/**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */positionFixed:false,/**
   * Whether events (resize, scroll) are initially enabled
   * @prop {Boolean} eventsEnabled=true
   */eventsEnabled:true,/**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */removeOnDestroy:false,/**
   * Callback called when the popper is created.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */onCreate:function onCreate(){},/**
   * Callback called when the popper is updated, this callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */onUpdate:function onUpdate(){},/**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js
   * @prop {modifiers}
   */modifiers:modifiers};/**
 * @callback onCreate
 * @param {dataObject} data
 */ /**
 * @callback onUpdate
 * @param {dataObject} data
 */ // Utils
// Methods
var Popper=function(){/**
   * Create a new Popper.js instance
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper.
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */function Popper(reference,popper){var _this=this;var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};classCallCheck(this,Popper);this.scheduleUpdate=function(){return requestAnimationFrame(_this.update);};// make update() debounced, so that it only runs at most once-per-tick
this.update=debounce(this.update.bind(this));// with {} we create a new object with the options inside it
this.options=_extends({},Popper.Defaults,options);// init state
this.state={isDestroyed:false,isCreated:false,scrollParents:[]};// get reference and popper elements (allow jQuery wrappers)
this.reference=reference&&reference.jquery?reference[0]:reference;this.popper=popper&&popper.jquery?popper[0]:popper;// Deep merge modifiers options
this.options.modifiers={};Object.keys(_extends({},Popper.Defaults.modifiers,options.modifiers)).forEach(function(name){_this.options.modifiers[name]=_extends({},Popper.Defaults.modifiers[name]||{},options.modifiers?options.modifiers[name]:{});});// Refactoring modifiers' list (Object => Array)
this.modifiers=Object.keys(this.options.modifiers).map(function(name){return _extends({name:name},_this.options.modifiers[name]);})// sort the modifiers by order
.sort(function(a,b){return a.order-b.order;});// modifiers have the ability to execute arbitrary code when Popper.js get inited
// such code is executed in the same order of its modifier
// they could add new properties to their options configuration
// BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
this.modifiers.forEach(function(modifierOptions){if(modifierOptions.enabled&&isFunction(modifierOptions.onLoad)){modifierOptions.onLoad(_this.reference,_this.popper,_this.options,modifierOptions,_this.state);}});// fire the first update to position the popper in the right place
this.update();var eventsEnabled=this.options.eventsEnabled;if(eventsEnabled){// setup event listeners, they will take care of update the position in specific situations
this.enableEventListeners();}this.state.eventsEnabled=eventsEnabled;}// We can't use class properties because they don't get listed in the
// class prototype and break stuff like Sinon stubs
createClass(Popper,[{key:'update',value:function update$$1(){return update.call(this);}},{key:'destroy',value:function destroy$$1(){return destroy.call(this);}},{key:'enableEventListeners',value:function enableEventListeners$$1(){return enableEventListeners.call(this);}},{key:'disableEventListeners',value:function disableEventListeners$$1(){return disableEventListeners.call(this);}/**
     * Schedule an update, it will run on the next UI update available
     * @method scheduleUpdate
     * @memberof Popper
     */ /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */}]);return Popper;}();/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */Popper.Utils=(typeof window!=='undefined'?window:global).PopperUtils;Popper.placements=placements;Popper.Defaults=Defaults;/* harmony default export */__webpack_exports__["a"]=Popper;/* WEBPACK VAR INJECTION */}).call(__webpack_exports__,__webpack_require__("./node_modules/next/node_modules/webpack/buildin/global.js"));/***/},/***/"./node_modules/prop-types-exact/build/helpers/isPlainObject.js":/***/function node_modulesPropTypesExactBuildHelpersIsPlainObjectJs(module,exports){Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};exports['default']=isPlainObject;function isPlainObject(x){return x&&(typeof x==='undefined'?'undefined':_typeof(x))==='object'&&!Array.isArray(x);}module.exports=exports['default'];/***/},/***/"./node_modules/prop-types-exact/build/index.js":/***/function node_modulesPropTypesExactBuildIndexJs(module,exports,__webpack_require__){Object.defineProperty(exports,"__esModule",{value:true});exports['default']=forbidExtraProps;var _object=__webpack_require__("./node_modules/object.assign/index.js");var _object2=_interopRequireDefault(_object);var _has=__webpack_require__("./node_modules/has/src/index.js");var _has2=_interopRequireDefault(_has);var _isPlainObject=__webpack_require__("./node_modules/prop-types-exact/build/helpers/isPlainObject.js");var _isPlainObject2=_interopRequireDefault(_isPlainObject);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var zeroWidthSpace="\u200B";var specialProperty='prop-types-exact: '+zeroWidthSpace;var semaphore={};function brand(fn){return(0, _object2['default'])(fn,_defineProperty({},specialProperty,semaphore));}function isBranded(value){return value&&value[specialProperty]===semaphore;}function forbidExtraProps(propTypes){if(!(0, _isPlainObject2['default'])(propTypes)){throw new TypeError('given propTypes must be an object');}if((0, _has2['default'])(propTypes,specialProperty)&&!isBranded(propTypes[specialProperty])){throw new TypeError('Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`');}return(0, _object2['default'])({},propTypes,_defineProperty({},specialProperty,brand(function(){function forbidUnknownProps(props,_,componentName){var unknownProps=Object.keys(props).filter(function(prop){return!(0, _has2['default'])(propTypes,prop);});if(unknownProps.length>0){return new TypeError(String(componentName)+': unknown props found: '+String(unknownProps.join(', ')));}return null;}return forbidUnknownProps;}())));}module.exports=exports['default'];/***/},/***/"./node_modules/react-popper/lib/Arrow.js":/***/function node_modulesReactPopperLibArrowJs(module,__webpack_exports__,__webpack_require__){/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_react__=__webpack_require__("./node_modules/react/index.js");/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_react___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1_prop_types__=__webpack_require__("./node_modules/next/node_modules/prop-types/index.js");/* harmony import */var __WEBPACK_IMPORTED_MODULE_1_prop_types___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}var Arrow=function Arrow(props,context){var _props$component=props.component,component=_props$component===undefined?'span':_props$component,innerRef=props.innerRef,children=props.children,restProps=_objectWithoutProperties(props,['component','innerRef','children']);var popper=context.popper;var arrowRef=function arrowRef(node){popper.setArrowNode(node);if(typeof innerRef==='function'){innerRef(node);}};var arrowStyle=popper.getArrowStyle();if(typeof children==='function'){var arrowProps={ref:arrowRef,style:arrowStyle};return children({arrowProps:arrowProps,restProps:restProps});}var componentProps=_extends({},restProps,{style:_extends({},arrowStyle,restProps.style)});if(typeof component==='string'){componentProps.ref=arrowRef;}else{componentProps.innerRef=arrowRef;}return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(component,componentProps,children);};Arrow.contextTypes={popper:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired};Arrow.propTypes={component:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func]),innerRef:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,children:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func])};/* harmony default export */__webpack_exports__["a"]=Arrow;/***/},/***/"./node_modules/react-popper/lib/Manager.js":/***/function node_modulesReactPopperLibManagerJs(module,__webpack_exports__,__webpack_require__){/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_react__=__webpack_require__("./node_modules/react/index.js");/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_react___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1_prop_types__=__webpack_require__("./node_modules/next/node_modules/prop-types/index.js");/* harmony import */var __WEBPACK_IMPORTED_MODULE_1_prop_types___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Manager=function(_Component){_inherits(Manager,_Component);function Manager(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Manager);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Manager.__proto__||Object.getPrototypeOf(Manager)).call.apply(_ref,[this].concat(args))),_this),_this._setTargetNode=function(node){_this._targetNode=node;},_this._getTargetNode=function(){return _this._targetNode;},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Manager,[{key:'getChildContext',value:function getChildContext(){return{popperManager:{setTargetNode:this._setTargetNode,getTargetNode:this._getTargetNode}};}},{key:'render',value:function render(){var _props=this.props,tag=_props.tag,children=_props.children,restProps=_objectWithoutProperties(_props,['tag','children']);if(tag!==false){return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(tag,restProps,children);}else{return children;}}}]);return Manager;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);Manager.childContextTypes={popperManager:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired};Manager.propTypes={tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool]),children:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func])};Manager.defaultProps={tag:'div'};/* harmony default export */__webpack_exports__["a"]=Manager;/***/},/***/"./node_modules/react-popper/lib/Popper.js":/***/function node_modulesReactPopperLibPopperJs(module,__webpack_exports__,__webpack_require__){/* unused harmony export placements */ /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_react__=__webpack_require__("./node_modules/react/index.js");/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_react___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1_prop_types__=__webpack_require__("./node_modules/next/node_modules/prop-types/index.js");/* harmony import */var __WEBPACK_IMPORTED_MODULE_1_prop_types___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2_popper_js__=__webpack_require__("./node_modules/popper.js/dist/esm/popper.js");var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var placements=__WEBPACK_IMPORTED_MODULE_2_popper_js__["a"/* default */].placements;var Popper=function(_Component){_inherits(Popper,_Component);function Popper(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Popper);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Popper.__proto__||Object.getPrototypeOf(Popper)).call.apply(_ref,[this].concat(args))),_this),_this.state={},_this._setArrowNode=function(node){_this._arrowNode=node;},_this._getTargetNode=function(){if(_this.props.target){return _this.props.target;}else if(!_this.context.popperManager||!_this.context.popperManager.getTargetNode()){throw new Error('Target missing. Popper must be given a target from the Popper Manager, or as a prop.');}return _this.context.popperManager.getTargetNode();},_this._getOffsets=function(data){return Object.keys(data.offsets).map(function(key){return data.offsets[key];});},_this._isDataDirty=function(data){if(_this.state.data){return JSON.stringify(_this._getOffsets(_this.state.data))!==JSON.stringify(_this._getOffsets(data));}else{return true;}},_this._updateStateModifier={enabled:true,order:900,fn:function fn(data){if(_this._isDataDirty(data)){_this.setState({data:data});}return data;}},_this._getPopperStyle=function(){var data=_this.state.data;if(!_this._popper||!data){return{position:'absolute',pointerEvents:'none',opacity:0};}return _extends({position:data.offsets.popper.position},data.styles);},_this._getPopperPlacement=function(){return _this.state.data?_this.state.data.placement:undefined;},_this._getPopperHide=function(){return!!_this.state.data&&_this.state.data.hide?'':undefined;},_this._getArrowStyle=function(){if(!_this.state.data||!_this.state.data.offsets.arrow){return{};}else{var _this$state$data$offs=_this.state.data.offsets.arrow,top=_this$state$data$offs.top,left=_this$state$data$offs.left;return{top:top,left:left};}},_this._handlePopperRef=function(node){_this._popperNode=node;if(node){_this._createPopper();}else{_this._destroyPopper();}if(_this.props.innerRef){_this.props.innerRef(node);}},_this._scheduleUpdate=function(){_this._popper&&_this._popper.scheduleUpdate();},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Popper,[{key:'getChildContext',value:function getChildContext(){return{popper:{setArrowNode:this._setArrowNode,getArrowStyle:this._getArrowStyle}};}},{key:'componentDidUpdate',value:function componentDidUpdate(lastProps){if(lastProps.placement!==this.props.placement||lastProps.eventsEnabled!==this.props.eventsEnabled||lastProps.target!==this.props.target){this._destroyPopper();this._createPopper();}if(lastProps.children!==this.props.children){this._scheduleUpdate();}}},{key:'componentWillUnmount',value:function componentWillUnmount(){this._destroyPopper();}},{key:'_createPopper',value:function _createPopper(){var _this2=this;var _props=this.props,placement=_props.placement,eventsEnabled=_props.eventsEnabled,positionFixed=_props.positionFixed;var modifiers=_extends({},this.props.modifiers,{applyStyle:{enabled:false},updateState:this._updateStateModifier});if(this._arrowNode){modifiers.arrow=_extends({},this.props.modifiers.arrow||{},{element:this._arrowNode});}this._popper=new __WEBPACK_IMPORTED_MODULE_2_popper_js__["a"/* default */](this._getTargetNode(),this._popperNode,{placement:placement,positionFixed:positionFixed,eventsEnabled:eventsEnabled,modifiers:modifiers});// TODO: look into setTimeout scheduleUpdate call, without it, the popper will not position properly on creation
setTimeout(function(){return _this2._scheduleUpdate();});}},{key:'_destroyPopper',value:function _destroyPopper(){if(this._popper){this._popper.destroy();}}},{key:'render',value:function render(){var _props2=this.props,component=_props2.component,innerRef=_props2.innerRef,placement=_props2.placement,eventsEnabled=_props2.eventsEnabled,positionFixed=_props2.positionFixed,modifiers=_props2.modifiers,children=_props2.children,restProps=_objectWithoutProperties(_props2,['component','innerRef','placement','eventsEnabled','positionFixed','modifiers','children']);var popperStyle=this._getPopperStyle();var popperPlacement=this._getPopperPlacement();var popperHide=this._getPopperHide();if(typeof children==='function'){var popperProps={ref:this._handlePopperRef,style:popperStyle,'data-placement':popperPlacement,'data-x-out-of-boundaries':popperHide};return children({popperProps:popperProps,restProps:restProps,scheduleUpdate:this._scheduleUpdate});}var componentProps=_extends({},restProps,{style:_extends({},restProps.style,popperStyle),'data-placement':popperPlacement,'data-x-out-of-boundaries':popperHide});if(typeof component==='string'){componentProps.ref=this._handlePopperRef;}else{componentProps.innerRef=this._handlePopperRef;}return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(component,componentProps,children);}}]);return Popper;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);Popper.contextTypes={popperManager:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object};Popper.childContextTypes={popper:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired};Popper.propTypes={component:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func]),innerRef:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,placement:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(placements),eventsEnabled:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,positionFixed:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,modifiers:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,children:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func]),target:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([// the following check is needed for SSR
__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.instanceOf(typeof Element!=='undefined'?Element:Object),__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({getBoundingClientRect:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,clientWidth:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,clientHeight:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired})])};Popper.defaultProps={component:'div',placement:'bottom',eventsEnabled:true,positionFixed:false,modifiers:{}};/* harmony default export */__webpack_exports__["a"]=Popper;/***/},/***/"./node_modules/react-popper/lib/Target.js":/***/function node_modulesReactPopperLibTargetJs(module,__webpack_exports__,__webpack_require__){/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_react__=__webpack_require__("./node_modules/react/index.js");/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_react___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1_prop_types__=__webpack_require__("./node_modules/next/node_modules/prop-types/index.js");/* harmony import */var __WEBPACK_IMPORTED_MODULE_1_prop_types___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}var Target=function Target(props,context){var _props$component=props.component,component=_props$component===undefined?'div':_props$component,innerRef=props.innerRef,children=props.children,restProps=_objectWithoutProperties(props,['component','innerRef','children']);var popperManager=context.popperManager;var targetRef=function targetRef(node){popperManager.setTargetNode(node);if(typeof innerRef==='function'){innerRef(node);}};if(typeof children==='function'){var targetProps={ref:targetRef};return children({targetProps:targetProps,restProps:restProps});}var componentProps=_extends({},restProps);if(typeof component==='string'){componentProps.ref=targetRef;}else{componentProps.innerRef=targetRef;}return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(component,componentProps,children);};Target.contextTypes={popperManager:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired};Target.propTypes={component:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func]),innerRef:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,children:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func])};/* harmony default export */__webpack_exports__["a"]=Target;/***/},/***/"./node_modules/react-popper/lib/react-popper.js":/***/function node_modulesReactPopperLibReactPopperJs(module,__webpack_exports__,__webpack_require__){/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__Manager__=__webpack_require__("./node_modules/react-popper/lib/Manager.js");/* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__,"b",function(){return __WEBPACK_IMPORTED_MODULE_0__Manager__["a"];});/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__Target__=__webpack_require__("./node_modules/react-popper/lib/Target.js");/* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__,"d",function(){return __WEBPACK_IMPORTED_MODULE_1__Target__["a"];});/* harmony import */var __WEBPACK_IMPORTED_MODULE_2__Popper__=__webpack_require__("./node_modules/react-popper/lib/Popper.js");/* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__,"c",function(){return __WEBPACK_IMPORTED_MODULE_2__Popper__["a"];});/* unused harmony reexport placements */ /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__Arrow__=__webpack_require__("./node_modules/react-popper/lib/Arrow.js");/* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__,"a",function(){return __WEBPACK_IMPORTED_MODULE_3__Arrow__["a"];});/***/},/***/"./node_modules/reactstrap/dist/reactstrap.es.js":/***/function node_modulesReactstrapDistReactstrapEsJs(module,__webpack_exports__,__webpack_require__){Object.defineProperty(__webpack_exports__,"__esModule",{value:true});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"Alert",function(){return Alert;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"Container",function(){return Container;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"Row",function(){return Row;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"Col",function(){return Col;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"Navbar",function(){return Navbar;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NavbarBrand",function(){return NavbarBrand;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NavbarToggler",function(){return NavbarToggler;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"Nav",function(){return Nav;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NavItem",function(){return NavItem;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NavDropdown",function(){return NavDropdown;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"NavLink",function(){return NavLink;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"Breadcrumb",function(){return Breadcrumb;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"BreadcrumbItem",function(){return BreadcrumbItem;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"Button",function(){return Button;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ButtonDropdown",function(){return ButtonDropdown;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ButtonGroup",function(){return ButtonGroup;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ButtonToolbar",function(){return ButtonToolbar;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"Dropdown",function(){return Dropdown;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"DropdownItem",function(){return DropdownItem;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"DropdownMenu",function(){return DropdownMenu;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"DropdownToggle",function(){return DropdownToggle;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"Fade",function(){return Fade;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"Badge",function(){return Badge;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"Card",function(){return Card;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"CardLink",function(){return CardLink;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"CardGroup",function(){return CardGroup;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"CardDeck",function(){return CardDeck;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"CardColumns",function(){return CardColumns;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"CardBody",function(){return CardBody;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"CardBlock",function(){return CardBlock;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"CardFooter",function(){return CardFooter;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"CardHeader",function(){return CardHeader;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"CardImg",function(){return CardImg;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"CardImgOverlay",function(){return CardImgOverlay;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"Carousel",function(){return Carousel;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"UncontrolledCarousel",function(){return UncontrolledCarousel;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"CarouselControl",function(){return CarouselControl;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"CarouselItem",function(){return CarouselItem;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"CarouselIndicators",function(){return CarouselIndicators;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"CarouselCaption",function(){return CarouselCaption;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"CardSubtitle",function(){return CardSubtitle;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"CardText",function(){return CardText;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"CardTitle",function(){return CardTitle;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"Popover",function(){return Popover;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"PopoverContent",function(){return PopoverContent;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"PopoverBody",function(){return PopoverBody;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"PopoverTitle",function(){return PopoverTitle;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"PopoverHeader",function(){return PopoverHeader;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"Progress",function(){return Progress;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"Modal",function(){return Modal;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ModalHeader",function(){return ModalHeader;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ModalBody",function(){return ModalBody;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ModalFooter",function(){return ModalFooter;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"PopperContent",function(){return PopperContent;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"PopperTargetHelper",function(){return PopperTargetHelper;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"Tooltip",function(){return Tooltip;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"Table",function(){return Table;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ListGroup",function(){return ListGroup;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"Form",function(){return Form;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"FormFeedback",function(){return FormFeedback;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"FormGroup",function(){return FormGroup;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"FormText",function(){return FormText;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"Input",function(){return Input;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"InputGroup",function(){return InputGroup;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"InputGroupAddon",function(){return InputGroupAddon;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"InputGroupButton",function(){return InputGroupButton;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"InputGroupButtonDropdown",function(){return InputGroupButtonDropdown;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"InputGroupText",function(){return InputGroupText;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"Label",function(){return Label;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"CustomInput",function(){return CustomInput;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"Media",function(){return Media;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"Pagination",function(){return Pagination;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"PaginationItem",function(){return PaginationItem;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"PaginationLink",function(){return PaginationLink;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"TabContent",function(){return TabContent;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"TabPane",function(){return TabPane;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"Jumbotron",function(){return Jumbotron;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"Collapse",function(){return Collapse;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ListGroupItem",function(){return ListGroupItem;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ListGroupItemText",function(){return ListGroupItemText;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"ListGroupItemHeading",function(){return ListGroupItemHeading;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"UncontrolledAlert",function(){return UncontrolledAlert;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"UncontrolledButtonDropdown",function(){return UncontrolledButtonDropdown;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"UncontrolledCollapse",function(){return UncontrolledCollapse;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"UncontrolledDropdown",function(){return UncontrolledDropdown;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"UncontrolledNavDropdown",function(){return UncontrolledNavDropdown;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"UncontrolledTooltip",function(){return UncontrolledTooltip;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"Util",function(){return utils;});/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_react__=__webpack_require__("./node_modules/react/index.js");/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_react___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1_prop_types__=__webpack_require__("./node_modules/next/node_modules/prop-types/index.js");/* harmony import */var __WEBPACK_IMPORTED_MODULE_1_prop_types___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2_classnames__=__webpack_require__("./node_modules/classnames/index.js");/* harmony import */var __WEBPACK_IMPORTED_MODULE_2_classnames___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_3_lodash_isfunction__=__webpack_require__("./node_modules/lodash.isfunction/index.js");/* harmony import */var __WEBPACK_IMPORTED_MODULE_3_lodash_isfunction___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_isfunction__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_4_lodash_isobject__=__webpack_require__("./node_modules/lodash.isobject/index.js");/* harmony import */var __WEBPACK_IMPORTED_MODULE_4_lodash_isobject___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_isobject__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_5_react_dom__=__webpack_require__("./node_modules/react-dom/index.js");/* harmony import */var __WEBPACK_IMPORTED_MODULE_5_react_dom___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_dom__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_6_react_popper__=__webpack_require__("./node_modules/react-popper/lib/react-popper.js");/* harmony import */var __WEBPACK_IMPORTED_MODULE_7_lodash_tonumber__=__webpack_require__("./node_modules/lodash.tonumber/index.js");/* harmony import */var __WEBPACK_IMPORTED_MODULE_7_lodash_tonumber___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_tonumber__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_8_react_lifecycles_compat__=__webpack_require__("./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");// https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/js/src/modal.js#L436-L443
function getScrollbarWidth(){var scrollDiv=document.createElement('div');// .modal-scrollbar-measure styles // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/scss/_modal.scss#L106-L113
scrollDiv.style.position='absolute';scrollDiv.style.top='-9999px';scrollDiv.style.width='50px';scrollDiv.style.height='50px';scrollDiv.style.overflow='scroll';document.body.appendChild(scrollDiv);var scrollbarWidth=scrollDiv.offsetWidth-scrollDiv.clientWidth;document.body.removeChild(scrollDiv);return scrollbarWidth;}function setScrollbarWidth(padding){document.body.style.paddingRight=padding>0?padding+'px':null;}function isBodyOverflowing(){return document.body.clientWidth<window.innerWidth;}function getOriginalBodyPadding(){var style=window.getComputedStyle(document.body,null);return parseInt(style&&style.getPropertyValue('padding-right')||0,10);}function conditionallyUpdateScrollbar(){var scrollbarWidth=getScrollbarWidth();// https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.6/js/src/modal.js#L433
var fixedContent=document.querySelectorAll('.fixed-top, .fixed-bottom, .is-fixed, .sticky-top')[0];var bodyPadding=fixedContent?parseInt(fixedContent.style.paddingRight||0,10):0;if(isBodyOverflowing()){setScrollbarWidth(bodyPadding+scrollbarWidth);}}var globalCssModule=void 0;function setGlobalCssModule(cssModule){globalCssModule=cssModule;}function mapToCssModules(){var className=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'';var cssModule=arguments.length>1&&arguments[1]!==undefined?arguments[1]:globalCssModule;if(!cssModule)return className;return className.split(' ').map(function(c){return cssModule[c]||c;}).join(' ');}/**
 * Returns a new object with the key/value pairs from `obj` that are not in the array `omitKeys`.
 */function omit(obj,omitKeys){var result={};Object.keys(obj).forEach(function(key){if(omitKeys.indexOf(key)===-1){result[key]=obj[key];}});return result;}/**
 * Returns a filtered copy of an object with only the specified keys.
 */function pick(obj,keys){var pickKeys=Array.isArray(keys)?keys:[keys];var length=pickKeys.length;var key=void 0;var result={};while(length>0){length-=1;key=pickKeys[length];result[key]=obj[key];}return result;}var warned={};function warnOnce(message){if(!warned[message]){/* istanbul ignore else */if(typeof console!=='undefined'){console.error(message);// eslint-disable-line no-console
}warned[message]=true;}}function deprecated(propType,explanation){return function validate(props,propName,componentName){if(props[propName]!==null&&typeof props[propName]!=='undefined'){warnOnce('"'+propName+'" property of "'+componentName+'" has been deprecated.\n'+explanation);}for(var _len=arguments.length,rest=Array(_len>3?_len-3:0),_key=3;_key<_len;_key++){rest[_key-3]=arguments[_key];}return propType.apply(undefined,[props,propName,componentName].concat(rest));};}function DOMElement(props,propName,componentName){if(!(props[propName]instanceof Element)){return new Error('Invalid prop `'+propName+'` supplied to `'+componentName+'`. Expected prop to be an instance of Element. Validation failed.');}}/* eslint key-spacing: ["error", { afterColon: true, align: "value" }] */ // These are all setup to match what is in the bootstrap _variables.scss
// https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss
var TransitionTimeouts={Fade:150,// $transition-fade
Collapse:350,// $transition-collapse
Modal:300,// $modal-transition
Carousel:600// $carousel-transition
};// Duplicated Transition.propType keys to ensure that Reactstrap builds
// for distribution properly exclude these keys for nested child HTML attributes
// since `react-transition-group` removes propTypes in production builds.
var TransitionPropTypeKeys=['in','mountOnEnter','unmountOnExit','appear','enter','exit','timeout','onEnter','onEntering','onEntered','onExit','onExiting','onExited'];var TransitionStatuses={ENTERING:'entering',ENTERED:'entered',EXITING:'exiting',EXITED:'exited'};var keyCodes={esc:27,space:32,tab:9,up:38,down:40};var PopperPlacements=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'];var canUseDOM=!!(typeof window!=='undefined'&&window.document&&window.document.createElement);function findDOMElements(target){if(__WEBPACK_IMPORTED_MODULE_3_lodash_isfunction___default()(target)){return target();}if(typeof target==='string'&&canUseDOM){var selection=document.querySelectorAll(target);if(!selection.length){selection=document.querySelectorAll('#'+target);}if(!selection.length){throw new Error('The target \''+target+'\' could not be identified in the dom, tip: check spelling');}return selection;}return target;}function isArrayOrNodeList(els){return Array.isArray(els)||canUseDOM&&typeof els.length==='number';}function getTarget(target){var els=findDOMElements(target);if(isArrayOrNodeList(els)){return els[0];}return els;}var defaultToggleEvents=['touchstart','click'];function addMultipleEventListeners(_els,handler,_events){var els=_els;if(!isArrayOrNodeList(els)){els=[els];}var events=_events;if(typeof events==='string'){events=events.split(/\s+/);}if(!isArrayOrNodeList(els)||typeof handler!=='function'||!Array.isArray(events)){throw new Error('\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ');}events.forEach(function(event){els.forEach(function(el){el.addEventListener(event,handler);});});return function removeEvents(){events.forEach(function(event){els.forEach(function(el){el.removeEventListener(event,handler);});});};}var utils=Object.freeze({getScrollbarWidth:getScrollbarWidth,setScrollbarWidth:setScrollbarWidth,isBodyOverflowing:isBodyOverflowing,getOriginalBodyPadding:getOriginalBodyPadding,conditionallyUpdateScrollbar:conditionallyUpdateScrollbar,setGlobalCssModule:setGlobalCssModule,mapToCssModules:mapToCssModules,omit:omit,pick:pick,warnOnce:warnOnce,deprecated:deprecated,DOMElement:DOMElement,TransitionTimeouts:TransitionTimeouts,TransitionPropTypeKeys:TransitionPropTypeKeys,TransitionStatuses:TransitionStatuses,keyCodes:keyCodes,PopperPlacements:PopperPlacements,canUseDOM:canUseDOM,findDOMElements:findDOMElements,isArrayOrNodeList:isArrayOrNodeList,getTarget:getTarget,defaultToggleEvents:defaultToggleEvents,addMultipleEventListeners:addMultipleEventListeners});var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};var classCallCheck=function classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}};var createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var defineProperty=function defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;};var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var inherits=function inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;};var objectWithoutProperties=function objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;};var possibleConstructorReturn=function possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;};var propTypes={tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),fluid:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object};var defaultProps={tag:'div'};var Container=function Container(props){var className=props.className,cssModule=props.cssModule,fluid=props.fluid,Tag=props.tag,attributes=objectWithoutProperties(props,['className','cssModule','fluid','tag']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,fluid?'container-fluid':'container'),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{className:classes}));};Container.propTypes=propTypes;Container.defaultProps=defaultProps;var propTypes$1={tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),noGutters:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object};var defaultProps$1={tag:'div'};var Row=function Row(props){var className=props.className,cssModule=props.cssModule,noGutters=props.noGutters,Tag=props.tag,attributes=objectWithoutProperties(props,['className','cssModule','noGutters','tag']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,noGutters?'no-gutters':null,'row'),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{className:classes}));};Row.propTypes=propTypes$1;Row.defaultProps=defaultProps$1;var colWidths=['xs','sm','md','lg','xl'];var stringOrNumberProp=__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]);var columnProps=__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({size:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),push:deprecated(stringOrNumberProp,'Please use the prop "order"'),pull:deprecated(stringOrNumberProp,'Please use the prop "order"'),order:stringOrNumberProp,offset:stringOrNumberProp})]);var propTypes$2={tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),xs:columnProps,sm:columnProps,md:columnProps,lg:columnProps,xl:columnProps,className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,widths:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array};var defaultProps$2={tag:'div',widths:colWidths};var getColumnSizeClass=function getColumnSizeClass(isXs,colWidth,colSize){if(colSize===true||colSize===''){return isXs?'col':'col-'+colWidth;}else if(colSize==='auto'){return isXs?'col-auto':'col-'+colWidth+'-auto';}return isXs?'col-'+colSize:'col-'+colWidth+'-'+colSize;};var Col=function Col(props){var className=props.className,cssModule=props.cssModule,widths=props.widths,Tag=props.tag,attributes=objectWithoutProperties(props,['className','cssModule','widths','tag']);var colClasses=[];widths.forEach(function(colWidth,i){var columnProp=props[colWidth];delete attributes[colWidth];if(!columnProp&&columnProp!==''){return;}var isXs=!i;if(__WEBPACK_IMPORTED_MODULE_4_lodash_isobject___default()(columnProp)){var _classNames;var colSizeInterfix=isXs?'-':'-'+colWidth+'-';var colClass=getColumnSizeClass(isXs,colWidth,columnProp.size);colClasses.push(mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()((_classNames={},defineProperty(_classNames,colClass,columnProp.size||columnProp.size===''),defineProperty(_classNames,'order'+colSizeInterfix+columnProp.order,columnProp.order||columnProp.order===0),defineProperty(_classNames,'offset'+colSizeInterfix+columnProp.offset,columnProp.offset||columnProp.offset===0),_classNames)),cssModule));}else{var _colClass=getColumnSizeClass(isXs,colWidth,columnProp);colClasses.push(_colClass);}});if(!colClasses.length){colClasses.push('col');}var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,colClasses),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{className:classes}));};Col.propTypes=propTypes$2;Col.defaultProps=defaultProps$2;var propTypes$3={light:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,dark:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,inverse:deprecated(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,'Please use the prop "dark"'),full:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,fixed:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,sticky:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,color:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,role:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,toggleable:deprecated(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),'Please use the prop "expand"'),expand:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string])};var defaultProps$3={tag:'nav',expand:false};var getExpandClass=function getExpandClass(expand){if(expand===false){return false;}else if(expand===true||expand==='xs'){return'navbar-expand';}return'navbar-expand-'+expand;};// To better maintain backwards compatibility while toggleable is deprecated.
// We must map breakpoints to the next breakpoint so that toggleable and expand do the same things at the same breakpoint.
var toggleableToExpand={xs:'sm',sm:'md',md:'lg',lg:'xl'};var getToggleableClass=function getToggleableClass(toggleable){if(toggleable===undefined||toggleable==='xl'){return false;}else if(toggleable===false){return'navbar-expand';}return'navbar-expand-'+(toggleable===true?'sm':toggleableToExpand[toggleable]||toggleable);};var Navbar=function Navbar(props){var _classNames;var toggleable=props.toggleable,expand=props.expand,className=props.className,cssModule=props.cssModule,light=props.light,dark=props.dark,inverse=props.inverse,fixed=props.fixed,sticky=props.sticky,color=props.color,Tag=props.tag,attributes=objectWithoutProperties(props,['toggleable','expand','className','cssModule','light','dark','inverse','fixed','sticky','color','tag']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,'navbar',getExpandClass(expand)||getToggleableClass(toggleable),(_classNames={'navbar-light':light,'navbar-dark':inverse||dark},defineProperty(_classNames,'bg-'+color,color),defineProperty(_classNames,'fixed-'+fixed,fixed),defineProperty(_classNames,'sticky-'+sticky,sticky),_classNames)),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{className:classes}));};Navbar.propTypes=propTypes$3;Navbar.defaultProps=defaultProps$3;var propTypes$4={tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object};var defaultProps$4={tag:'a'};var NavbarBrand=function NavbarBrand(props){var className=props.className,cssModule=props.cssModule,Tag=props.tag,attributes=objectWithoutProperties(props,['className','cssModule','tag']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,'navbar-brand'),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{className:classes}));};NavbarBrand.propTypes=propTypes$4;NavbarBrand.defaultProps=defaultProps$4;var propTypes$5={tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),type:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,children:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node};var defaultProps$5={tag:'button',type:'button'};var NavbarToggler=function NavbarToggler(props){var className=props.className,cssModule=props.cssModule,children=props.children,Tag=props.tag,attributes=objectWithoutProperties(props,['className','cssModule','children','tag']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,'navbar-toggler'),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{className:classes}),children||__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:mapToCssModules('navbar-toggler-icon',cssModule)}));};NavbarToggler.propTypes=propTypes$5;NavbarToggler.defaultProps=defaultProps$5;var propTypes$6={tabs:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,pills:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,vertical:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),horizontal:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,justified:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,fill:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,navbar:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,card:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object};var defaultProps$6={tag:'ul',vertical:false};var getVerticalClass=function getVerticalClass(vertical){if(vertical===false){return false;}else if(vertical===true||vertical==='xs'){return'flex-column';}return'flex-'+vertical+'-column';};var Nav=function Nav(props){var className=props.className,cssModule=props.cssModule,tabs=props.tabs,pills=props.pills,vertical=props.vertical,horizontal=props.horizontal,justified=props.justified,fill=props.fill,navbar=props.navbar,card=props.card,Tag=props.tag,attributes=objectWithoutProperties(props,['className','cssModule','tabs','pills','vertical','horizontal','justified','fill','navbar','card','tag']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,navbar?'navbar-nav':'nav',horizontal?'justify-content-'+horizontal:false,getVerticalClass(vertical),{'nav-tabs':tabs,'card-header-tabs':card&&tabs,'nav-pills':pills,'card-header-pills':card&&pills,'nav-justified':justified,'nav-fill':fill}),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{className:classes}));};Nav.propTypes=propTypes$6;Nav.defaultProps=defaultProps$6;var propTypes$7={tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),active:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object};var defaultProps$7={tag:'li'};var NavItem=function NavItem(props){var className=props.className,cssModule=props.cssModule,active=props.active,Tag=props.tag,attributes=objectWithoutProperties(props,['className','cssModule','active','tag']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,'nav-item',active?'active':false),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{className:classes}));};NavItem.propTypes=propTypes$7;NavItem.defaultProps=defaultProps$7;/* eslint react/no-find-dom-node: 0 */ // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
var propTypes$8={disabled:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,dropup:deprecated(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,'Please use the prop "direction" with the value "up".'),direction:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['up','down','left','right']),group:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,isOpen:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,nav:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,active:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,addonType:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['prepend','append'])]),size:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,toggle:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,children:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,inNavbar:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,setActiveFromChild:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool};var defaultProps$8={isOpen:false,direction:'down',nav:false,active:false,addonType:false,inNavbar:false,setActiveFromChild:false};var childContextTypes={toggle:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,isOpen:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,direction:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['up','down','left','right']).isRequired,inNavbar:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired};var Dropdown=function(_React$Component){inherits(Dropdown,_React$Component);function Dropdown(props){classCallCheck(this,Dropdown);var _this=possibleConstructorReturn(this,(Dropdown.__proto__||Object.getPrototypeOf(Dropdown)).call(this,props));_this.addEvents=_this.addEvents.bind(_this);_this.handleDocumentClick=_this.handleDocumentClick.bind(_this);_this.handleKeyDown=_this.handleKeyDown.bind(_this);_this.removeEvents=_this.removeEvents.bind(_this);_this.toggle=_this.toggle.bind(_this);return _this;}createClass(Dropdown,[{key:'getChildContext',value:function getChildContext(){return{toggle:this.props.toggle,isOpen:this.props.isOpen,direction:this.props.direction==='down'&&this.props.dropup?'up':this.props.direction,inNavbar:this.props.inNavbar};}},{key:'componentDidMount',value:function componentDidMount(){this.handleProps();}},{key:'componentDidUpdate',value:function componentDidUpdate(prevProps){if(this.props.isOpen!==prevProps.isOpen){this.handleProps();}}},{key:'componentWillUnmount',value:function componentWillUnmount(){this.removeEvents();}},{key:'getContainer',value:function getContainer(){return __WEBPACK_IMPORTED_MODULE_5_react_dom___default.a.findDOMNode(this);}},{key:'addEvents',value:function addEvents(){var _this2=this;['click','touchstart','keyup'].forEach(function(event){return document.addEventListener(event,_this2.handleDocumentClick,true);});}},{key:'removeEvents',value:function removeEvents(){var _this3=this;['click','touchstart','keyup'].forEach(function(event){return document.removeEventListener(event,_this3.handleDocumentClick,true);});}},{key:'handleDocumentClick',value:function handleDocumentClick(e){if(e&&(e.which===3||e.type==='keyup'&&e.which!==keyCodes.tab))return;var container=this.getContainer();if(container.contains(e.target)&&container!==e.target&&(e.type!=='keyup'||e.which===keyCodes.tab)){return;}this.toggle(e);}},{key:'handleKeyDown',value:function handleKeyDown(e){if([keyCodes.esc,keyCodes.up,keyCodes.down,keyCodes.space].indexOf(e.which)===-1||/button/i.test(e.target.tagName)&&e.which===keyCodes.space||/input|textarea/i.test(e.target.tagName)){return;}e.preventDefault();if(this.props.disabled)return;var container=this.getContainer();if(e.which===keyCodes.space&&this.props.isOpen&&container!==e.target){e.target.click();}if(e.which===keyCodes.esc||!this.props.isOpen){this.toggle(e);container.querySelector('[aria-expanded]').focus();return;}var menuClass=mapToCssModules('dropdown-menu',this.props.cssModule);var itemClass=mapToCssModules('dropdown-item',this.props.cssModule);var disabledClass=mapToCssModules('disabled',this.props.cssModule);var items=container.querySelectorAll('.'+menuClass+' .'+itemClass+':not(.'+disabledClass+')');if(!items.length)return;var index=-1;for(var i=0;i<items.length;i+=1){if(items[i]===e.target){index=i;break;}}if(e.which===keyCodes.up&&index>0){index-=1;}if(e.which===keyCodes.down&&index<items.length-1){index+=1;}if(index<0){index=0;}items[index].focus();}},{key:'handleProps',value:function handleProps(){if(this.props.isOpen){this.addEvents();}else{this.removeEvents();}}},{key:'toggle',value:function toggle(e){if(this.props.disabled){return e&&e.preventDefault();}return this.props.toggle(e);}},{key:'render',value:function render(){var _classNames;var _omit=omit(this.props,['toggle','disabled','inNavbar','direction']),className=_omit.className,cssModule=_omit.cssModule,dropup=_omit.dropup,isOpen=_omit.isOpen,group=_omit.group,size=_omit.size,nav=_omit.nav,setActiveFromChild=_omit.setActiveFromChild,active=_omit.active,addonType=_omit.addonType,attrs=objectWithoutProperties(_omit,['className','cssModule','dropup','isOpen','group','size','nav','setActiveFromChild','active','addonType']);var direction=this.props.direction==='down'&&dropup?'up':this.props.direction;attrs.tag=attrs.tag||(nav?'li':'div');var subItemIsActive=false;if(setActiveFromChild){__WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(this.props.children[1].props.children,function(dropdownItem){if(dropdownItem.props.active)subItemIsActive=true;});}var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,direction!=='down'&&'drop'+direction,nav&&active?'active':false,setActiveFromChild&&subItemIsActive?'active':false,(_classNames={},defineProperty(_classNames,'input-group-'+addonType,addonType),defineProperty(_classNames,'btn-group',group),defineProperty(_classNames,'btn-group-'+size,!!size),defineProperty(_classNames,'dropdown',!group&&!addonType),defineProperty(_classNames,'show',isOpen),defineProperty(_classNames,'nav-item',nav),_classNames)),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_popper__["b"/* Manager */],_extends({},attrs,{className:classes,onKeyDown:this.handleKeyDown}));}}]);return Dropdown;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);Dropdown.propTypes=propTypes$8;Dropdown.defaultProps=defaultProps$8;Dropdown.childContextTypes=childContextTypes;function NavDropdown(props){warnOnce('The "NavDropdown" component has been deprecated.\nPlease use component "Dropdown" with nav prop.');return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Dropdown,_extends({nav:true},props));}var propTypes$9={tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),innerRef:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),disabled:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,active:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,onClick:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,href:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any};var defaultProps$9={tag:'a'};var NavLink=function(_React$Component){inherits(NavLink,_React$Component);function NavLink(props){classCallCheck(this,NavLink);var _this=possibleConstructorReturn(this,(NavLink.__proto__||Object.getPrototypeOf(NavLink)).call(this,props));_this.onClick=_this.onClick.bind(_this);return _this;}createClass(NavLink,[{key:'onClick',value:function onClick(e){if(this.props.disabled){e.preventDefault();return;}if(this.props.href==='#'){e.preventDefault();}if(this.props.onClick){this.props.onClick(e);}}},{key:'render',value:function render(){var _props=this.props,className=_props.className,cssModule=_props.cssModule,active=_props.active,Tag=_props.tag,innerRef=_props.innerRef,attributes=objectWithoutProperties(_props,['className','cssModule','active','tag','innerRef']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,'nav-link',{disabled:attributes.disabled,active:active}),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{ref:innerRef,onClick:this.onClick,className:classes}));}}]);return NavLink;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);NavLink.propTypes=propTypes$9;NavLink.defaultProps=defaultProps$9;var propTypes$10={tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),listTag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,listClassName:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,children:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,'aria-label':__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string};var defaultProps$10={tag:'nav',listTag:'ol','aria-label':'breadcrumb'};var Breadcrumb=function Breadcrumb(props){var className=props.className,listClassName=props.listClassName,cssModule=props.cssModule,children=props.children,Tag=props.tag,ListTag=props.listTag,label=props['aria-label'],attributes=objectWithoutProperties(props,['className','listClassName','cssModule','children','tag','listTag','aria-label']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className),cssModule);var listClasses=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()('breadcrumb',listClassName),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{className:classes,'aria-label':label}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListTag,{className:listClasses},children));};Breadcrumb.propTypes=propTypes$10;Breadcrumb.defaultProps=defaultProps$10;var propTypes$11={tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),active:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object};var defaultProps$11={tag:'li'};var BreadcrumbItem=function BreadcrumbItem(props){var className=props.className,cssModule=props.cssModule,active=props.active,Tag=props.tag,attributes=objectWithoutProperties(props,['className','cssModule','active','tag']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,active?'active':false,'breadcrumb-item'),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{className:classes,'aria-current':active?'page':undefined}));};BreadcrumbItem.propTypes=propTypes$11;BreadcrumbItem.defaultProps=defaultProps$11;var propTypes$12={active:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,block:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,color:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,disabled:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,outline:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),innerRef:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),onClick:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,size:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,children:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object};var defaultProps$12={color:'secondary',tag:'button'};var Button=function(_React$Component){inherits(Button,_React$Component);function Button(props){classCallCheck(this,Button);var _this=possibleConstructorReturn(this,(Button.__proto__||Object.getPrototypeOf(Button)).call(this,props));_this.onClick=_this.onClick.bind(_this);return _this;}createClass(Button,[{key:'onClick',value:function onClick(e){if(this.props.disabled){e.preventDefault();return;}if(this.props.onClick){this.props.onClick(e);}}},{key:'render',value:function render(){var _props=this.props,active=_props.active,block=_props.block,className=_props.className,cssModule=_props.cssModule,color=_props.color,outline=_props.outline,size=_props.size,Tag=_props.tag,innerRef=_props.innerRef,attributes=objectWithoutProperties(_props,['active','block','className','cssModule','color','outline','size','tag','innerRef']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,'btn','btn'+(outline?'-outline':'')+'-'+color,size?'btn-'+size:false,block?'btn-block':false,{active:active,disabled:this.props.disabled}),cssModule);if(attributes.href&&Tag==='button'){Tag='a';}return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({type:Tag==='button'&&attributes.onClick?'button':undefined},attributes,{className:classes,ref:innerRef,onClick:this.onClick}));}}]);return Button;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);Button.propTypes=propTypes$12;Button.defaultProps=defaultProps$12;var propTypes$13={children:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node};var ButtonDropdown=function ButtonDropdown(props){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Dropdown,_extends({group:true},props));};ButtonDropdown.propTypes=propTypes$13;var propTypes$14={tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),'aria-label':__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,role:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,size:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,vertical:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool};var defaultProps$13={tag:'div',role:'group'};var ButtonGroup=function ButtonGroup(props){var className=props.className,cssModule=props.cssModule,size=props.size,vertical=props.vertical,Tag=props.tag,attributes=objectWithoutProperties(props,['className','cssModule','size','vertical','tag']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,size?'btn-group-'+size:false,vertical?'btn-group-vertical':'btn-group'),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{className:classes}));};ButtonGroup.propTypes=propTypes$14;ButtonGroup.defaultProps=defaultProps$13;var propTypes$15={tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),'aria-label':__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,role:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string};var defaultProps$14={tag:'div',role:'toolbar'};var ButtonToolbar=function ButtonToolbar(props){var className=props.className,cssModule=props.cssModule,Tag=props.tag,attributes=objectWithoutProperties(props,['className','cssModule','tag']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,'btn-toolbar'),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{className:classes}));};ButtonToolbar.propTypes=propTypes$15;ButtonToolbar.defaultProps=defaultProps$14;var propTypes$16={children:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,active:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,disabled:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,divider:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),header:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,onClick:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,toggle:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool};var contextTypes={toggle:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func};var defaultProps$15={tag:'button',toggle:true};var DropdownItem=function(_React$Component){inherits(DropdownItem,_React$Component);function DropdownItem(props){classCallCheck(this,DropdownItem);var _this=possibleConstructorReturn(this,(DropdownItem.__proto__||Object.getPrototypeOf(DropdownItem)).call(this,props));_this.onClick=_this.onClick.bind(_this);_this.getTabIndex=_this.getTabIndex.bind(_this);return _this;}createClass(DropdownItem,[{key:'onClick',value:function onClick(e){if(this.props.disabled||this.props.header||this.props.divider){e.preventDefault();return;}if(this.props.onClick){this.props.onClick(e);}if(this.props.toggle){this.context.toggle(e);}}},{key:'getTabIndex',value:function getTabIndex(){if(this.props.disabled||this.props.header||this.props.divider){return'-1';}return'0';}},{key:'render',value:function render(){var tabIndex=this.getTabIndex();var _omit=omit(this.props,['toggle']),className=_omit.className,cssModule=_omit.cssModule,divider=_omit.divider,Tag=_omit.tag,header=_omit.header,active=_omit.active,props=objectWithoutProperties(_omit,['className','cssModule','divider','tag','header','active']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,{disabled:props.disabled,'dropdown-item':!divider&&!header,active:active,'dropdown-header':header,'dropdown-divider':divider}),cssModule);if(Tag==='button'){if(header){Tag='h6';}else if(divider){Tag='div';}else if(props.href){Tag='a';}}return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({type:Tag==='button'&&(props.onClick||this.props.toggle)?'button':undefined},props,{tabIndex:tabIndex,className:classes,onClick:this.onClick}));}}]);return DropdownItem;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);DropdownItem.propTypes=propTypes$16;DropdownItem.defaultProps=defaultProps$15;DropdownItem.contextTypes=contextTypes;var propTypes$17={tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,children:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node.isRequired,right:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,flip:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,modifiers:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,persist:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool};var defaultProps$16={tag:'div',flip:true};var contextTypes$1={isOpen:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,direction:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['up','down','left','right']).isRequired,inNavbar:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired};var noFlipModifier={flip:{enabled:false}};var directionPositionMap={up:'top',left:'left',right:'right',down:'bottom'};var DropdownMenu=function DropdownMenu(props,context){var className=props.className,cssModule=props.cssModule,right=props.right,tag=props.tag,flip=props.flip,modifiers=props.modifiers,persist=props.persist,attrs=objectWithoutProperties(props,['className','cssModule','right','tag','flip','modifiers','persist']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,'dropdown-menu',{'dropdown-menu-right':right,show:context.isOpen}),cssModule);var Tag=tag;if(persist||context.isOpen&&!context.inNavbar){Tag=__WEBPACK_IMPORTED_MODULE_6_react_popper__["c"/* Popper */];var position1=directionPositionMap[context.direction]||'bottom';var position2=right?'end':'start';attrs.placement=position1+'-'+position2;attrs.component=tag;attrs.modifiers=!flip?_extends({},modifiers,noFlipModifier):modifiers;}return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({tabIndex:'-1',role:'menu'},attrs,{'aria-hidden':!context.isOpen,className:classes,'x-placement':attrs.placement}));};DropdownMenu.propTypes=propTypes$17;DropdownMenu.defaultProps=defaultProps$16;DropdownMenu.contextTypes=contextTypes$1;var propTypes$18={caret:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,color:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,children:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,disabled:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,onClick:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,'aria-haspopup':__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,split:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),nav:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool};var defaultProps$17={'aria-haspopup':true,color:'secondary'};var contextTypes$2={isOpen:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,toggle:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,inNavbar:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired};var DropdownToggle=function(_React$Component){inherits(DropdownToggle,_React$Component);function DropdownToggle(props){classCallCheck(this,DropdownToggle);var _this=possibleConstructorReturn(this,(DropdownToggle.__proto__||Object.getPrototypeOf(DropdownToggle)).call(this,props));_this.onClick=_this.onClick.bind(_this);return _this;}createClass(DropdownToggle,[{key:'onClick',value:function onClick(e){if(this.props.disabled){e.preventDefault();return;}if(this.props.nav&&!this.props.tag){e.preventDefault();}if(this.props.onClick){this.props.onClick(e);}this.context.toggle(e);}},{key:'render',value:function render(){var _props=this.props,className=_props.className,color=_props.color,cssModule=_props.cssModule,caret=_props.caret,split=_props.split,nav=_props.nav,tag=_props.tag,props=objectWithoutProperties(_props,['className','color','cssModule','caret','split','nav','tag']);var ariaLabel=props['aria-label']||'Toggle Dropdown';var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,{'dropdown-toggle':caret||split,'dropdown-toggle-split':split,'nav-link':nav}),cssModule);var children=props.children||__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'sr-only'},ariaLabel);var Tag=void 0;if(nav&&!tag){Tag='a';props.href='#';}else if(!tag){Tag=Button;props.color=color;props.cssModule=cssModule;}else{Tag=tag;}if(this.context.inNavbar){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},props,{className:classes,onClick:this.onClick,'aria-expanded':this.context.isOpen,children:children}));}return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_popper__["d"/* Target */],_extends({},props,{className:classes,component:Tag,onClick:this.onClick,'aria-expanded':this.context.isOpen,children:children}));}}]);return DropdownToggle;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);DropdownToggle.propTypes=propTypes$18;DropdownToggle.defaultProps=defaultProps$17;DropdownToggle.contextTypes=contextTypes$2;function unwrapExports(x){return x&&x.__esModule&&Object.prototype.hasOwnProperty.call(x,'default')?x['default']:x;}function createCommonjsModule(fn,module){return module={exports:{}},fn(module,module.exports),module.exports;}var PropTypes$1=createCommonjsModule(function(module,exports){exports.__esModule=true;exports.classNamesShape=exports.timeoutsShape=undefined;exports.transitionTimeout=transitionTimeout;var _propTypes2=_interopRequireDefault(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function transitionTimeout(transitionType){var timeoutPropName='transition'+transitionType+'Timeout';var enabledPropName='transition'+transitionType;return function(props){// If the transition is enabled
if(props[enabledPropName]){// If no timeout duration is provided
if(props[timeoutPropName]==null){return new Error(timeoutPropName+' wasn\'t supplied to CSSTransitionGroup: '+'this can cause unreliable animations and won\'t be supported in '+'a future version of React. See '+'https://fb.me/react-animation-transition-group-timeout for more '+'information.');// If the duration isn't a number
}else if(typeof props[timeoutPropName]!=='number'){return new Error(timeoutPropName+' must be a number (in milliseconds)');}}return null;};}var timeoutsShape=exports.timeoutsShape=_propTypes2.default.oneOfType([_propTypes2.default.number,_propTypes2.default.shape({enter:_propTypes2.default.number,exit:_propTypes2.default.number}).isRequired]);var classNamesShape=exports.classNamesShape=_propTypes2.default.oneOfType([_propTypes2.default.string,_propTypes2.default.shape({enter:_propTypes2.default.string,exit:_propTypes2.default.string,active:_propTypes2.default.string}),_propTypes2.default.shape({enter:_propTypes2.default.string,enterDone:_propTypes2.default.string,enterActive:_propTypes2.default.string,exit:_propTypes2.default.string,exitDone:_propTypes2.default.string,exitActive:_propTypes2.default.string})]);});unwrapExports(PropTypes$1);var Transition_1=createCommonjsModule(function(module,exports){exports.__esModule=true;exports.EXITING=exports.ENTERED=exports.ENTERING=exports.EXITED=exports.UNMOUNTED=undefined;var PropTypes$$1=_interopRequireWildcard(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a);var _react2=_interopRequireDefault(__WEBPACK_IMPORTED_MODULE_0_react___default.a);var _reactDom2=_interopRequireDefault(__WEBPACK_IMPORTED_MODULE_5_react_dom___default.a);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&((typeof call==='undefined'?'undefined':_typeof(call))==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==='undefined'?'undefined':_typeof(superClass)));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var UNMOUNTED=exports.UNMOUNTED='unmounted';var EXITED=exports.EXITED='exited';var ENTERING=exports.ENTERING='entering';var ENTERED=exports.ENTERED='entered';var EXITING=exports.EXITING='exiting';/**
   * The Transition component lets you describe a transition from one component
   * state to another _over time_ with a simple declarative API. Most commonly
   * it's used to animate the mounting and unmounting of a component, but can also
   * be used to describe in-place transition states as well.
   *
   * By default the `Transition` component does not alter the behavior of the
   * component it renders, it only tracks "enter" and "exit" states for the components.
   * It's up to you to give meaning and effect to those states. For example we can
   * add styles to a component when it enters or exits:
   *
   * ```jsx
   * import Transition from 'react-transition-group/Transition';
   *
   * const duration = 300;
   *
   * const defaultStyle = {
   *   transition: `opacity ${duration}ms ease-in-out`,
   *   opacity: 0,
   * }
   *
   * const transitionStyles = {
   *   entering: { opacity: 0 },
   *   entered:  { opacity: 1 },
   * };
   *
   * const Fade = ({ in: inProp }) => (
   *   <Transition in={inProp} timeout={duration}>
   *     {(state) => (
   *       <div style={{
   *         ...defaultStyle,
   *         ...transitionStyles[state]
   *       }}>
   *         I'm a fade Transition!
   *       </div>
   *     )}
   *   </Transition>
   * );
   * ```
   *
   * As noted the `Transition` component doesn't _do_ anything by itself to its child component.
   * What it does do is track transition states over time so you can update the
   * component (such as by adding styles or classes) when it changes states.
   *
   * There are 4 main states a Transition can be in:
   *  - `'entering'`
   *  - `'entered'`
   *  - `'exiting'`
   *  - `'exited'`
   *
   * Transition state is toggled via the `in` prop. When `true` the component begins the
   * "Enter" stage. During this stage, the component will shift from its current transition state,
   * to `'entering'` for the duration of the transition and then to the `'entered'` stage once
   * it's complete. Let's take the following example:
   *
   * ```jsx
   * state = { in: false };
   *
   * toggleEnterState = () => {
   *   this.setState({ in: true });
   * }
   *
   * render() {
   *   return (
   *     <div>
   *       <Transition in={this.state.in} timeout={500} />
   *       <button onClick={this.toggleEnterState}>Click to Enter</button>
   *     </div>
   *   );
   * }
   * ```
   *
   * When the button is clicked the component will shift to the `'entering'` state and
   * stay there for 500ms (the value of `timeout`) before it finally switches to `'entered'`.
   *
   * When `in` is `false` the same thing happens except the state moves from `'exiting'` to `'exited'`.
   *
   * ## Timing
   *
   * Timing is often the trickiest part of animation, mistakes can result in slight delays
   * that are hard to pin down. A common example is when you want to add an exit transition,
   * you should set the desired final styles when the state is `'exiting'`. That's when the
   * transition to those styles will start and, if you matched the `timeout` prop with the
   * CSS Transition duration, it will end exactly when the state changes to `'exited'`.
   *
   * > **Note**: For simpler transitions the `Transition` component might be enough, but
   * > take into account that it's platform-agnostic, while the `CSSTransition` component
   * > [forces reflows](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
   * > in order to make more complex transitions more predictable. For example, even though
   * > classes `example-enter` and `example-enter-active` are applied immediately one after
   * > another, you can still transition from one to the other because of the forced reflow
   * > (read [this issue](https://github.com/reactjs/react-transition-group/issues/159#issuecomment-322761171)
   * > for more info). Take this into account when choosing between `Transition` and
   * > `CSSTransition`.
   *
   * ## Example
   *
   * <iframe src="https://codesandbox.io/embed/741op4mmj0?fontsize=14" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
   *
   */var Transition=function(_React$Component){_inherits(Transition,_React$Component);function Transition(props,context){_classCallCheck(this,Transition);var _this=_possibleConstructorReturn(this,_React$Component.call(this,props,context));var parentGroup=context.transitionGroup;// In the context of a TransitionGroup all enters are really appears
var appear=parentGroup&&!parentGroup.isMounting?props.enter:props.appear;var initialStatus=void 0;_this.nextStatus=null;if(props.in){if(appear){initialStatus=EXITED;_this.nextStatus=ENTERING;}else{initialStatus=ENTERED;}}else{if(props.unmountOnExit||props.mountOnEnter){initialStatus=UNMOUNTED;}else{initialStatus=EXITED;}}_this.state={status:initialStatus};_this.nextCallback=null;return _this;}Transition.prototype.getChildContext=function getChildContext(){return{transitionGroup:null};// allows for nested Transitions
};Transition.prototype.componentDidMount=function componentDidMount(){this.updateStatus(true);};Transition.prototype.componentWillReceiveProps=function componentWillReceiveProps(nextProps){var _ref=this.pendingState||this.state,status=_ref.status;if(nextProps.in){if(status===UNMOUNTED){this.setState({status:EXITED});}if(status!==ENTERING&&status!==ENTERED){this.nextStatus=ENTERING;}}else{if(status===ENTERING||status===ENTERED){this.nextStatus=EXITING;}}};Transition.prototype.componentDidUpdate=function componentDidUpdate(){this.updateStatus();};Transition.prototype.componentWillUnmount=function componentWillUnmount(){this.cancelNextCallback();};Transition.prototype.getTimeouts=function getTimeouts(){var timeout=this.props.timeout;var exit=void 0,enter=void 0,appear=void 0;exit=enter=appear=timeout;if(timeout!=null&&typeof timeout!=='number'){exit=timeout.exit;enter=timeout.enter;appear=timeout.appear;}return{exit:exit,enter:enter,appear:appear};};Transition.prototype.updateStatus=function updateStatus(){var mounting=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;var nextStatus=this.nextStatus;if(nextStatus!==null){this.nextStatus=null;// nextStatus will always be ENTERING or EXITING.
this.cancelNextCallback();var node=_reactDom2.default.findDOMNode(this);if(nextStatus===ENTERING){this.performEnter(node,mounting);}else{this.performExit(node);}}else if(this.props.unmountOnExit&&this.state.status===EXITED){this.setState({status:UNMOUNTED});}};Transition.prototype.performEnter=function performEnter(node,mounting){var _this2=this;var enter=this.props.enter;var appearing=this.context.transitionGroup?this.context.transitionGroup.isMounting:mounting;var timeouts=this.getTimeouts();// no enter animation skip right to ENTERED
// if we are mounting and running this it means appear _must_ be set
if(!mounting&&!enter){this.safeSetState({status:ENTERED},function(){_this2.props.onEntered(node);});return;}this.props.onEnter(node,appearing);this.safeSetState({status:ENTERING},function(){_this2.props.onEntering(node,appearing);// FIXME: appear timeout?
_this2.onTransitionEnd(node,timeouts.enter,function(){_this2.safeSetState({status:ENTERED},function(){_this2.props.onEntered(node,appearing);});});});};Transition.prototype.performExit=function performExit(node){var _this3=this;var exit=this.props.exit;var timeouts=this.getTimeouts();// no exit animation skip right to EXITED
if(!exit){this.safeSetState({status:EXITED},function(){_this3.props.onExited(node);});return;}this.props.onExit(node);this.safeSetState({status:EXITING},function(){_this3.props.onExiting(node);_this3.onTransitionEnd(node,timeouts.exit,function(){_this3.safeSetState({status:EXITED},function(){_this3.props.onExited(node);});});});};Transition.prototype.cancelNextCallback=function cancelNextCallback(){if(this.nextCallback!==null){this.nextCallback.cancel();this.nextCallback=null;}};Transition.prototype.safeSetState=function safeSetState(nextState,callback){var _this4=this;// We need to track pending updates for instances where a cWRP fires quickly
// after cDM and before the state flushes, which would double trigger a
// transition
this.pendingState=nextState;// This shouldn't be necessary, but there are weird race conditions with
// setState callbacks and unmounting in testing, so always make sure that
// we can cancel any pending setState callbacks after we unmount.
callback=this.setNextCallback(callback);this.setState(nextState,function(){_this4.pendingState=null;callback();});};Transition.prototype.setNextCallback=function setNextCallback(callback){var _this5=this;var active=true;this.nextCallback=function(event){if(active){active=false;_this5.nextCallback=null;callback(event);}};this.nextCallback.cancel=function(){active=false;};return this.nextCallback;};Transition.prototype.onTransitionEnd=function onTransitionEnd(node,timeout,handler){this.setNextCallback(handler);if(node){if(this.props.addEndListener){this.props.addEndListener(node,this.nextCallback);}if(timeout!=null){setTimeout(this.nextCallback,timeout);}}else{setTimeout(this.nextCallback,0);}};Transition.prototype.render=function render(){var status=this.state.status;if(status===UNMOUNTED){return null;}var _props=this.props,children=_props.children,childProps=_objectWithoutProperties(_props,['children']);// filter props for Transtition
delete childProps.in;delete childProps.mountOnEnter;delete childProps.unmountOnExit;delete childProps.appear;delete childProps.enter;delete childProps.exit;delete childProps.timeout;delete childProps.addEndListener;delete childProps.onEnter;delete childProps.onEntering;delete childProps.onEntered;delete childProps.onExit;delete childProps.onExiting;delete childProps.onExited;if(typeof children==='function'){return children(status,childProps);}var child=_react2.default.Children.only(children);return _react2.default.cloneElement(child,childProps);};return Transition;}(_react2.default.Component);Transition.contextTypes={transitionGroup:PropTypes$$1.object};Transition.childContextTypes={transitionGroup:function transitionGroup(){}};Transition.propTypes={/**
     * A `function` child can be used instead of a React element.
     * This function is called with the current transition status
     * ('entering', 'entered', 'exiting', 'exited', 'unmounted'), which can be used
     * to apply context specific props to a component.
     *
     * ```jsx
     * <Transition timeout={150}>
     *   {(status) => (
     *     <MyComponent className={`fade fade-${status}`} />
     *   )}
     * </Transition>
     * ```
     */children:PropTypes$$1.oneOfType([PropTypes$$1.func.isRequired,PropTypes$$1.element.isRequired]).isRequired,/**
     * Show the component; triggers the enter or exit states
     */in:PropTypes$$1.bool,/**
     * By default the child component is mounted immediately along with
     * the parent `Transition` component. If you want to "lazy mount" the component on the
     * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
     * mounted, even on "exited", unless you also specify `unmountOnExit`.
     */mountOnEnter:PropTypes$$1.bool,/**
     * By default the child component stays mounted after it reaches the `'exited'` state.
     * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
     */unmountOnExit:PropTypes$$1.bool,/**
     * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
     * If you want to transition on the first mount set `appear` to `true`, and the
     * component will transition in as soon as the `<Transition>` mounts.
     *
     * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
     */appear:PropTypes$$1.bool,/**
     * Enable or disable enter transitions.
     */enter:PropTypes$$1.bool,/**
     * Enable or disable exit transitions.
     */exit:PropTypes$$1.bool,/**
     * The duration of the transition, in milliseconds.
     * Required unless `addEndListener` is provided
     *
     * You may specify a single timeout for all transitions like: `timeout={500}`,
     * or individually like:
     *
     * ```jsx
     * timeout={{
     *  enter: 300,
     *  exit: 500,
     * }}
     * ```
     *
     * @type {number | { enter?: number, exit?: number }}
     */timeout:function timeout(props){for(var _len=arguments.length,args=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}var pt=PropTypes$1.timeoutsShape;if(!props.addEndListener)pt=pt.isRequired;return pt.apply(undefined,[props].concat(args));},/**
     * Add a custom transition end trigger. Called with the transitioning
     * DOM node and a `done` callback. Allows for more fine grained transition end
     * logic. **Note:** Timeouts are still used as a fallback if provided.
     *
     * ```jsx
     * addEndListener={(node, done) => {
     *   // use the css transitionend event to mark the finish of a transition
     *   node.addEventListener('transitionend', done, false);
     * }}
     * ```
     */addEndListener:PropTypes$$1.func,/**
     * Callback fired before the "entering" status is applied. An extra parameter
     * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
     *
     * @type Function(node: HtmlElement, isAppearing: bool) -> void
     */onEnter:PropTypes$$1.func,/**
     * Callback fired after the "entering" status is applied. An extra parameter
     * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
     *
     * @type Function(node: HtmlElement, isAppearing: bool)
     */onEntering:PropTypes$$1.func,/**
     * Callback fired after the "entered" status is applied. An extra parameter
     * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
     *
     * @type Function(node: HtmlElement, isAppearing: bool) -> void
     */onEntered:PropTypes$$1.func,/**
     * Callback fired before the "exiting" status is applied.
     *
     * @type Function(node: HtmlElement) -> void
     */onExit:PropTypes$$1.func,/**
     * Callback fired after the "exiting" status is applied.
     *
     * @type Function(node: HtmlElement) -> void
     */onExiting:PropTypes$$1.func,/**
     * Callback fired after the "exited" status is applied.
     *
     * @type Function(node: HtmlElement) -> void
     */onExited:PropTypes$$1.func};// Name the function so it is clearer in the documentation
function noop(){}Transition.defaultProps={in:false,mountOnEnter:false,unmountOnExit:false,appear:false,enter:true,exit:true,onEnter:noop,onEntering:noop,onEntered:noop,onExit:noop,onExiting:noop,onExited:noop};Transition.UNMOUNTED=0;Transition.EXITED=1;Transition.ENTERING=2;Transition.ENTERED=3;Transition.EXITING=4;exports.default=Transition;});var Transition=unwrapExports(Transition_1);var propTypes$19=_extends({},Transition.propTypes,{children:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node),__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node]),tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func]),baseClass:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,baseClassActive:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,innerRef:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func])});var defaultProps$18=_extends({},Transition.defaultProps,{tag:'div',baseClass:'fade',baseClassActive:'show',timeout:TransitionTimeouts.Fade,appear:true,enter:true,exit:true,in:true});function Fade(props){var Tag=props.tag,baseClass=props.baseClass,baseClassActive=props.baseClassActive,className=props.className,cssModule=props.cssModule,children=props.children,innerRef=props.innerRef,otherProps=objectWithoutProperties(props,['tag','baseClass','baseClassActive','className','cssModule','children','innerRef']);// In NODE_ENV=production the Transition.propTypes are wrapped which results in an
// empty object "{}". This is the result of the `react-transition-group` babel
// configuration settings. Therefore, to ensure that production builds work without
// error, we can either explicitly define keys or use the Transition.defaultProps.
// Using the Transition.defaultProps excludes any required props. Thus, the best
// solution is to explicitly define required props in our utilities and reference these.
// This also gives us more flexibility in the future to remove the prop-types
// dependency in distribution builds (Similar to how `react-transition-group` does).
// Note: Without omitting the `react-transition-group` props, the resulting child
// Tag component would inherit the Transition properties as attributes for the HTML
// element which results in errors/warnings for non-valid attributes.
var transitionProps=pick(otherProps,TransitionPropTypeKeys);var childProps=omit(otherProps,TransitionPropTypeKeys);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Transition,transitionProps,function(status){var isActive=status==='entered';var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,baseClass,isActive&&baseClassActive),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({className:classes},childProps,{ref:innerRef}),children);});}Fade.propTypes=propTypes$19;Fade.defaultProps=defaultProps$18;var propTypes$20={color:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,pill:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),children:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object};var defaultProps$19={color:'secondary',pill:false,tag:'span'};var Badge=function Badge(props){var className=props.className,cssModule=props.cssModule,color=props.color,pill=props.pill,Tag=props.tag,attributes=objectWithoutProperties(props,['className','cssModule','color','pill','tag']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,'badge','badge-'+color,pill?'badge-pill':false),cssModule);if(attributes.href&&Tag==='span'){Tag='a';}return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{className:classes}));};Badge.propTypes=propTypes$20;Badge.defaultProps=defaultProps$19;var propTypes$21={tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),inverse:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,color:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,block:deprecated(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,'Please use the props "body"'),body:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,outline:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,innerRef:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func])};var defaultProps$20={tag:'div'};var Card=function Card(props){var className=props.className,cssModule=props.cssModule,color=props.color,block=props.block,body=props.body,inverse=props.inverse,outline=props.outline,Tag=props.tag,innerRef=props.innerRef,attributes=objectWithoutProperties(props,['className','cssModule','color','block','body','inverse','outline','tag','innerRef']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,'card',inverse?'text-white':false,block||body?'card-body':false,color?(outline?'border':'bg')+'-'+color:false),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{className:classes,ref:innerRef}));};Card.propTypes=propTypes$21;Card.defaultProps=defaultProps$20;var propTypes$22={tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object};var defaultProps$21={tag:'div'};var CardGroup=function CardGroup(props){var className=props.className,cssModule=props.cssModule,Tag=props.tag,attributes=objectWithoutProperties(props,['className','cssModule','tag']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,'card-group'),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{className:classes}));};CardGroup.propTypes=propTypes$22;CardGroup.defaultProps=defaultProps$21;var propTypes$23={tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object};var defaultProps$22={tag:'div'};var CardDeck=function CardDeck(props){var className=props.className,cssModule=props.cssModule,Tag=props.tag,attributes=objectWithoutProperties(props,['className','cssModule','tag']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,'card-deck'),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{className:classes}));};CardDeck.propTypes=propTypes$23;CardDeck.defaultProps=defaultProps$22;var propTypes$24={tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object};var defaultProps$23={tag:'div'};var CardColumns=function CardColumns(props){var className=props.className,cssModule=props.cssModule,Tag=props.tag,attributes=objectWithoutProperties(props,['className','cssModule','tag']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,'card-columns'),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{className:classes}));};CardColumns.propTypes=propTypes$24;CardColumns.defaultProps=defaultProps$23;var propTypes$25={tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object};var defaultProps$24={tag:'div'};var CardBody=function CardBody(props){var className=props.className,cssModule=props.cssModule,Tag=props.tag,attributes=objectWithoutProperties(props,['className','cssModule','tag']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,'card-body'),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{className:classes}));};CardBody.propTypes=propTypes$25;CardBody.defaultProps=defaultProps$24;function CardBlock(props){warnOnce('The "CardBlock" component has been deprecated.\nPlease use component "CardBody".');return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CardBody,props);}var propTypes$26={tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),innerRef:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object};var defaultProps$25={tag:'a'};var CardLink=function CardLink(props){var className=props.className,cssModule=props.cssModule,Tag=props.tag,innerRef=props.innerRef,attributes=objectWithoutProperties(props,['className','cssModule','tag','innerRef']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,'card-link'),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{ref:innerRef,className:classes}));};CardLink.propTypes=propTypes$26;CardLink.defaultProps=defaultProps$25;var propTypes$27={tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object};var defaultProps$26={tag:'div'};var CardFooter=function CardFooter(props){var className=props.className,cssModule=props.cssModule,Tag=props.tag,attributes=objectWithoutProperties(props,['className','cssModule','tag']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,'card-footer'),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{className:classes}));};CardFooter.propTypes=propTypes$27;CardFooter.defaultProps=defaultProps$26;var propTypes$28={tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object};var defaultProps$27={tag:'div'};var CardHeader=function CardHeader(props){var className=props.className,cssModule=props.cssModule,Tag=props.tag,attributes=objectWithoutProperties(props,['className','cssModule','tag']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,'card-header'),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{className:classes}));};CardHeader.propTypes=propTypes$28;CardHeader.defaultProps=defaultProps$27;var propTypes$29={tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),top:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,bottom:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object};var defaultProps$28={tag:'img'};var CardImg=function CardImg(props){var className=props.className,cssModule=props.cssModule,top=props.top,bottom=props.bottom,Tag=props.tag,attributes=objectWithoutProperties(props,['className','cssModule','top','bottom','tag']);var cardImgClassName='card-img';if(top){cardImgClassName='card-img-top';}if(bottom){cardImgClassName='card-img-bottom';}var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,cardImgClassName),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{className:classes}));};CardImg.propTypes=propTypes$29;CardImg.defaultProps=defaultProps$28;var propTypes$30={tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object};var defaultProps$29={tag:'div'};var CardImgOverlay=function CardImgOverlay(props){var className=props.className,cssModule=props.cssModule,Tag=props.tag,attributes=objectWithoutProperties(props,['className','cssModule','tag']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,'card-img-overlay'),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{className:classes}));};CardImgOverlay.propTypes=propTypes$30;CardImgOverlay.defaultProps=defaultProps$29;var CarouselItem=function(_React$Component){inherits(CarouselItem,_React$Component);function CarouselItem(props){classCallCheck(this,CarouselItem);var _this=possibleConstructorReturn(this,(CarouselItem.__proto__||Object.getPrototypeOf(CarouselItem)).call(this,props));_this.state={startAnimation:false};_this.onEnter=_this.onEnter.bind(_this);_this.onEntering=_this.onEntering.bind(_this);_this.onExit=_this.onExit.bind(_this);_this.onExiting=_this.onExiting.bind(_this);_this.onExited=_this.onExited.bind(_this);return _this;}createClass(CarouselItem,[{key:'onEnter',value:function onEnter(node,isAppearing){this.setState({startAnimation:false});this.props.onEnter(node,isAppearing);}},{key:'onEntering',value:function onEntering(node,isAppearing){// getting this variable triggers a reflow
var offsetHeight=node.offsetHeight;this.setState({startAnimation:true});this.props.onEntering(node,isAppearing);return offsetHeight;}},{key:'onExit',value:function onExit(node){this.setState({startAnimation:false});this.props.onExit(node);}},{key:'onExiting',value:function onExiting(node){this.setState({startAnimation:true});node.dispatchEvent(new CustomEvent('slide.bs.carousel'));this.props.onExiting(node);}},{key:'onExited',value:function onExited(node){node.dispatchEvent(new CustomEvent('slid.bs.carousel'));this.props.onExited(node);}},{key:'render',value:function render(){var _this2=this;var _props=this.props,isIn=_props.in,children=_props.children,cssModule=_props.cssModule,slide=_props.slide,Tag=_props.tag,className=_props.className,transitionProps=objectWithoutProperties(_props,['in','children','cssModule','slide','tag','className']);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Transition,_extends({},transitionProps,{enter:slide,exit:slide,'in':isIn,onEnter:this.onEnter,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),function(status){var direction=_this2.context.direction;var isActive=status===TransitionStatuses.ENTERED||status===TransitionStatuses.EXITING;var directionClassName=(status===TransitionStatuses.ENTERING||status===TransitionStatuses.EXITING)&&_this2.state.startAnimation&&(direction==='right'?'carousel-item-left':'carousel-item-right');var orderClassName=status===TransitionStatuses.ENTERING&&(direction==='right'?'carousel-item-next':'carousel-item-prev');var itemClasses=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,'carousel-item',isActive&&'active',directionClassName,orderClassName),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,{className:itemClasses},children);});}}]);return CarouselItem;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);CarouselItem.propTypes=_extends({},Transition.propTypes,{tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),in:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,children:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,slide:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string});CarouselItem.defaultProps=_extends({},Transition.defaultProps,{tag:'div',timeout:TransitionTimeouts.Carousel,slide:true});CarouselItem.contextTypes={direction:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string};var Carousel=function(_React$Component){inherits(Carousel,_React$Component);function Carousel(props){classCallCheck(this,Carousel);var _this=possibleConstructorReturn(this,(Carousel.__proto__||Object.getPrototypeOf(Carousel)).call(this,props));_this.handleKeyPress=_this.handleKeyPress.bind(_this);_this.renderItems=_this.renderItems.bind(_this);_this.hoverStart=_this.hoverStart.bind(_this);_this.hoverEnd=_this.hoverEnd.bind(_this);_this.state={direction:'right',indicatorClicked:false};return _this;}createClass(Carousel,[{key:'getChildContext',value:function getChildContext(){return{direction:this.state.direction};}},{key:'componentDidMount',value:function componentDidMount(){// Set up the cycle
if(this.props.ride==='carousel'){this.setInterval();}// TODO: move this to the specific carousel like bootstrap. Currently it will trigger ALL carousels on the page.
document.addEventListener('keyup',this.handleKeyPress);}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(nextProps){this.setInterval(nextProps);// Calculate the direction to turn
if(this.props.activeIndex+1===nextProps.activeIndex){this.setState({direction:'right'});}else if(this.props.activeIndex-1===nextProps.activeIndex){this.setState({direction:'left'});}else if(this.props.activeIndex>nextProps.activeIndex){this.setState({direction:this.state.indicatorClicked?'left':'right'});}else if(this.props.activeIndex!==nextProps.activeIndex){this.setState({direction:this.state.indicatorClicked?'right':'left'});}this.setState({indicatorClicked:false});}},{key:'componentWillUnmount',value:function componentWillUnmount(){this.clearInterval();document.removeEventListener('keyup',this.handleKeyPress);}},{key:'setInterval',value:function(_setInterval){function setInterval(){return _setInterval.apply(this,arguments);}setInterval.toString=function(){return _setInterval.toString();};return setInterval;}(function(){var props=arguments.length>0&&arguments[0]!==undefined?arguments[0]:this.props;// make sure not to have multiple intervals going...
this.clearInterval();if(props.interval){this.cycleInterval=setInterval(function(){props.next();},parseInt(props.interval,10));}})},{key:'clearInterval',value:function(_clearInterval){function clearInterval(){return _clearInterval.apply(this,arguments);}clearInterval.toString=function(){return _clearInterval.toString();};return clearInterval;}(function(){clearInterval(this.cycleInterval);})},{key:'hoverStart',value:function hoverStart(){if(this.props.pause==='hover'){this.clearInterval();}if(this.props.mouseEnter){var _props;(_props=this.props).mouseEnter.apply(_props,arguments);}}},{key:'hoverEnd',value:function hoverEnd(){if(this.props.pause==='hover'){this.setInterval();}if(this.props.mouseLeave){var _props2;(_props2=this.props).mouseLeave.apply(_props2,arguments);}}},{key:'handleKeyPress',value:function handleKeyPress(evt){if(this.props.keyboard){if(evt.keyCode===37){this.props.previous();}else if(evt.keyCode===39){this.props.next();}}}},{key:'renderItems',value:function renderItems(carouselItems,className){var _this2=this;var slide=this.props.slide;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{role:'listbox',className:className},carouselItems.map(function(item,index){var isIn=index===_this2.props.activeIndex;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(item,{in:isIn,slide:slide});}));}},{key:'render',value:function render(){var _this3=this;var _props3=this.props,cssModule=_props3.cssModule,slide=_props3.slide,className=_props3.className;var outerClasses=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,'carousel',slide&&'slide'),cssModule);var innerClasses=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()('carousel-inner'),cssModule);// filter out booleans, null, or undefined
var children=this.props.children.filter(function(child){return child!==null&&child!==undefined&&typeof child!=='boolean';});var slidesOnly=children.every(function(child){return child.type===CarouselItem;});// Rendering only slides
if(slidesOnly){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:outerClasses,onMouseEnter:this.hoverStart,onMouseLeave:this.hoverEnd},this.renderItems(children,innerClasses));}// Rendering slides and controls
if(children[0]instanceof Array){var _carouselItems=children[0];var _controlLeft=children[1];var _controlRight=children[2];return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:outerClasses,onMouseEnter:this.hoverStart,onMouseLeave:this.hoverEnd},this.renderItems(_carouselItems,innerClasses),_controlLeft,_controlRight);}// Rendering indicators, slides and controls
var indicators=children[0];var wrappedOnClick=function wrappedOnClick(e){if(typeof indicators.props.onClickHandler==='function'){_this3.setState({indicatorClicked:true},function(){return indicators.props.onClickHandler(e);});}};var wrappedIndicators=__WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(indicators,{onClickHandler:wrappedOnClick});var carouselItems=children[1];var controlLeft=children[2];var controlRight=children[3];return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:outerClasses,onMouseEnter:this.hoverStart,onMouseLeave:this.hoverEnd},wrappedIndicators,this.renderItems(carouselItems,innerClasses),controlLeft,controlRight);}}]);return Carousel;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);Carousel.propTypes={// the current active slide of the carousel
activeIndex:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,// a function which should advance the carousel to the next slide (via activeIndex)
next:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,// a function which should advance the carousel to the previous slide (via activeIndex)
previous:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,// controls if the left and right arrow keys should control the carousel
keyboard:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,/* If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on
   * mouseleave. If set to false, hovering over the carousel won't pause it. (default: "hover")
   */pause:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['hover',false]),// Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.
// This is how bootstrap defines it... I would prefer a bool named autoplay or something...
ride:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['carousel']),// the interval at which the carousel automatically cycles (default: 5000)
// eslint-disable-next-line react/no-unused-prop-types
interval:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool]),children:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array,// called when the mouse enters the Carousel
mouseEnter:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,// called when the mouse exits the Carousel
mouseLeave:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,// controls whether the slide animation on the Carousel works or not
slide:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string};Carousel.defaultProps={interval:5000,pause:'hover',keyboard:true,slide:true};Carousel.childContextTypes={direction:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string};var CarouselControl=function CarouselControl(props){var direction=props.direction,onClickHandler=props.onClickHandler,cssModule=props.cssModule,directionText=props.directionText,className=props.className;var anchorClasses=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,'carousel-control-'+direction),cssModule);var iconClasses=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()('carousel-control-'+direction+'-icon'),cssModule);var screenReaderClasses=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()('sr-only'),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a',{className:anchorClasses,role:'button',tabIndex:'0',onClick:function onClick(e){e.preventDefault();onClickHandler();}},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:iconClasses,'aria-hidden':'true'}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:screenReaderClasses},directionText||direction));};CarouselControl.propTypes={direction:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['prev','next']).isRequired,onClickHandler:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,directionText:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string};var CarouselIndicators=function CarouselIndicators(props){var items=props.items,activeIndex=props.activeIndex,cssModule=props.cssModule,onClickHandler=props.onClickHandler,className=props.className;var listClasses=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,'carousel-indicators'),cssModule);var indicators=items.map(function(item,idx){var indicatorClasses=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()({active:activeIndex===idx}),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{key:''+(item.key||item.src)+item.caption+item.altText,onClick:function onClick(e){e.preventDefault();onClickHandler(idx);},className:indicatorClasses});});return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('ol',{className:listClasses},indicators);};CarouselIndicators.propTypes={items:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired,activeIndex:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,onClickHandler:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string};var CarouselCaption=function CarouselCaption(props){var captionHeader=props.captionHeader,captionText=props.captionText,cssModule=props.cssModule,className=props.className;var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,'carousel-caption','d-none','d-md-block'),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:classes},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('h3',null,captionHeader),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p',null,captionText));};CarouselCaption.propTypes={captionHeader:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,captionText:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string};var propTypes$31={items:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired,indicators:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,controls:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,autoPlay:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,activeIndex:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,next:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,previous:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,goToIndex:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func};var UncontrolledCarousel=function(_Component){inherits(UncontrolledCarousel,_Component);function UncontrolledCarousel(props){classCallCheck(this,UncontrolledCarousel);var _this=possibleConstructorReturn(this,(UncontrolledCarousel.__proto__||Object.getPrototypeOf(UncontrolledCarousel)).call(this,props));_this.animating=false;_this.state={activeIndex:0};_this.next=_this.next.bind(_this);_this.previous=_this.previous.bind(_this);_this.goToIndex=_this.goToIndex.bind(_this);_this.onExiting=_this.onExiting.bind(_this);_this.onExited=_this.onExited.bind(_this);return _this;}createClass(UncontrolledCarousel,[{key:'onExiting',value:function onExiting(){this.animating=true;}},{key:'onExited',value:function onExited(){this.animating=false;}},{key:'next',value:function next(){if(this.animating)return;var nextIndex=this.state.activeIndex===this.props.items.length-1?0:this.state.activeIndex+1;this.setState({activeIndex:nextIndex});}},{key:'previous',value:function previous(){if(this.animating)return;var nextIndex=this.state.activeIndex===0?this.props.items.length-1:this.state.activeIndex-1;this.setState({activeIndex:nextIndex});}},{key:'goToIndex',value:function goToIndex(newIndex){if(this.animating)return;this.setState({activeIndex:newIndex});}},{key:'render',value:function render(){var _this2=this;var _props=this.props,autoPlay=_props.autoPlay,indicators=_props.indicators,controls=_props.controls,items=_props.items,goToIndex=_props.goToIndex,props=objectWithoutProperties(_props,['autoPlay','indicators','controls','items','goToIndex']);var activeIndex=this.state.activeIndex;var slides=items.map(function(item){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CarouselItem,{onExiting:_this2.onExiting,onExited:_this2.onExited,key:item.src},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img',{className:'d-block w-100',src:item.src,alt:item.altText}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CarouselCaption,{captionText:item.caption,captionHeader:item.header||item.caption}));});return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Carousel,_extends({activeIndex:activeIndex,next:this.next,previous:this.previous,ride:autoPlay?'carousel':undefined},props),indicators&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CarouselIndicators,{items:items,activeIndex:props.activeIndex||activeIndex,onClickHandler:goToIndex||this.goToIndex}),slides,controls&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CarouselControl,{direction:'prev',directionText:'Previous',onClickHandler:props.previous||this.previous}),controls&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(CarouselControl,{direction:'next',directionText:'Next',onClickHandler:props.next||this.next}));}}]);return UncontrolledCarousel;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);UncontrolledCarousel.propTypes=propTypes$31;UncontrolledCarousel.defaultProps={controls:true,indicators:true,autoPlay:true};var propTypes$32={tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object};var defaultProps$30={tag:'h6'};var CardSubtitle=function CardSubtitle(props){var className=props.className,cssModule=props.cssModule,Tag=props.tag,attributes=objectWithoutProperties(props,['className','cssModule','tag']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,'card-subtitle'),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{className:classes}));};CardSubtitle.propTypes=propTypes$32;CardSubtitle.defaultProps=defaultProps$30;var propTypes$33={tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object};var defaultProps$31={tag:'p'};var CardText=function CardText(props){var className=props.className,cssModule=props.cssModule,Tag=props.tag,attributes=objectWithoutProperties(props,['className','cssModule','tag']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,'card-text'),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{className:classes}));};CardText.propTypes=propTypes$33;CardText.defaultProps=defaultProps$31;var propTypes$34={tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object};var defaultProps$32={tag:'h5'};var CardTitle=function CardTitle(props){var className=props.className,cssModule=props.cssModule,Tag=props.tag,attributes=objectWithoutProperties(props,['className','cssModule','tag']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,'card-title'),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{className:classes}));};CardTitle.propTypes=propTypes$34;CardTitle.defaultProps=defaultProps$32;var propTypes$35={className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,id:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number]).isRequired,type:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,label:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,inline:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,valid:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,invalid:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,bsSize:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,children:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func]),innerRef:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func])};function CustomInput(props){var className=props.className,label=props.label,inline=props.inline,valid=props.valid,invalid=props.invalid,cssModule=props.cssModule,children=props.children,bsSize=props.bsSize,innerRef=props.innerRef,attributes=objectWithoutProperties(props,['className','label','inline','valid','invalid','cssModule','children','bsSize','innerRef']);var type=attributes.type;var customClass=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,'custom-'+type,bsSize?'custom-'+type+'-'+bsSize:false),cssModule);var validationClassNames=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(invalid&&'is-invalid',valid&&'is-valid'),cssModule);if(type==='select'){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('select',_extends({},attributes,{ref:innerRef,className:__WEBPACK_IMPORTED_MODULE_2_classnames___default()(validationClassNames,customClass)}),children);}if(type==='file'){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:customClass},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input',_extends({},attributes,{ref:innerRef,className:__WEBPACK_IMPORTED_MODULE_2_classnames___default()(validationClassNames,mapToCssModules('custom-file-input',cssModule))})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('label',{className:mapToCssModules('custom-file-label',cssModule),htmlFor:attributes.id},label||'Choose file'));}if(type!=='checkbox'&&type!=='radio'){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input',_extends({},attributes,{ref:innerRef,className:__WEBPACK_IMPORTED_MODULE_2_classnames___default()(validationClassNames,customClass)}));}var wrapperClasses=__WEBPACK_IMPORTED_MODULE_2_classnames___default()(customClass,mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()('custom-control',{'custom-control-inline':inline}),cssModule));return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:wrapperClasses},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input',_extends({},attributes,{ref:innerRef,className:__WEBPACK_IMPORTED_MODULE_2_classnames___default()(validationClassNames,mapToCssModules('custom-control-input',cssModule))})),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('label',{className:mapToCssModules('custom-control-label',cssModule),htmlFor:attributes.id},label),children);}CustomInput.propTypes=propTypes$35;var propTypes$36={children:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node.isRequired,className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,placement:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,placementPrefix:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,arrowClassName:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,hideArrow:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,isOpen:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,offset:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number]),fallbackPlacement:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array]),flip:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,container:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,DOMElement]),target:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,DOMElement]).isRequired,modifiers:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object};var defaultProps$33={placement:'auto',hideArrow:false,isOpen:false,offset:0,fallbackPlacement:'flip',flip:true,container:'body',modifiers:{}};var childContextTypes$1={popperManager:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired};var PopperContent=function(_React$Component){inherits(PopperContent,_React$Component);function PopperContent(props){classCallCheck(this,PopperContent);var _this=possibleConstructorReturn(this,(PopperContent.__proto__||Object.getPrototypeOf(PopperContent)).call(this,props));_this.handlePlacementChange=_this.handlePlacementChange.bind(_this);_this.setTargetNode=_this.setTargetNode.bind(_this);_this.getTargetNode=_this.getTargetNode.bind(_this);_this.state={};return _this;}createClass(PopperContent,[{key:'getChildContext',value:function getChildContext(){return{popperManager:{setTargetNode:this.setTargetNode,getTargetNode:this.getTargetNode}};}},{key:'componentDidMount',value:function componentDidMount(){this.handleProps();}},{key:'componentDidUpdate',value:function componentDidUpdate(prevProps){if(this.props.isOpen!==prevProps.isOpen){this.handleProps();}else if(this._element){// rerender
this.renderIntoSubtree();}}},{key:'componentWillUnmount',value:function componentWillUnmount(){this.hide();}},{key:'setTargetNode',value:function setTargetNode(node){this.targetNode=node;}},{key:'getTargetNode',value:function getTargetNode(){return this.targetNode;}},{key:'getContainerNode',value:function getContainerNode(){return getTarget(this.props.container);}},{key:'handlePlacementChange',value:function handlePlacementChange(data){if(this.state.placement!==data.placement){this.setState({placement:data.placement});}return data;}},{key:'handleProps',value:function handleProps(){if(this.props.container!=='inline'){if(this.props.isOpen){this.show();}else{this.hide();}}}},{key:'hide',value:function hide(){if(this._element){this.getContainerNode().removeChild(this._element);__WEBPACK_IMPORTED_MODULE_5_react_dom___default.a.unmountComponentAtNode(this._element);this._element=null;}}},{key:'show',value:function show(){this._element=document.createElement('div');this.getContainerNode().appendChild(this._element);this.renderIntoSubtree();if(this._element.childNodes&&this._element.childNodes[0]&&this._element.childNodes[0].focus){this._element.childNodes[0].focus();}}},{key:'renderIntoSubtree',value:function renderIntoSubtree(){__WEBPACK_IMPORTED_MODULE_5_react_dom___default.a.unstable_renderSubtreeIntoContainer(this,this.renderChildren(),this._element);}},{key:'renderChildren',value:function renderChildren(){var _props=this.props,cssModule=_props.cssModule,children=_props.children,isOpen=_props.isOpen,flip=_props.flip,target=_props.target,offset=_props.offset,fallbackPlacement=_props.fallbackPlacement,placementPrefix=_props.placementPrefix,_arrowClassName=_props.arrowClassName,hideArrow=_props.hideArrow,className=_props.className,tag=_props.tag,container=_props.container,modifiers=_props.modifiers,attrs=objectWithoutProperties(_props,['cssModule','children','isOpen','flip','target','offset','fallbackPlacement','placementPrefix','arrowClassName','hideArrow','className','tag','container','modifiers']);var arrowClassName=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()('arrow',_arrowClassName),cssModule);var placement=(this.state.placement||attrs.placement).split('-')[0];var popperClassName=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,placementPrefix?placementPrefix+'-'+placement:placement),this.props.cssModule);var extendedModifiers=_extends({offset:{offset:offset},flip:{enabled:flip,behavior:fallbackPlacement},update:{enabled:true,order:950,fn:this.handlePlacementChange}},modifiers);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_popper__["c"/* Popper */],_extends({modifiers:extendedModifiers},attrs,{component:tag,className:popperClassName,'x-placement':this.state.placement||attrs.placement}),children,!hideArrow&&__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_popper__["a"/* Arrow */],{className:arrowClassName}));}},{key:'render',value:function render(){this.setTargetNode(getTarget(this.props.target));if(this.props.container==='inline'){return this.props.isOpen?this.renderChildren():null;}return null;}}]);return PopperContent;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);PopperContent.propTypes=propTypes$36;PopperContent.defaultProps=defaultProps$33;PopperContent.childContextTypes=childContextTypes$1;var PopperTargetHelper=function PopperTargetHelper(props,context){context.popperManager.setTargetNode(getTarget(props.target));return null;};PopperTargetHelper.contextTypes={popperManager:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired};PopperTargetHelper.propTypes={target:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,DOMElement]).isRequired};var propTypes$37={placement:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(PopperPlacements),target:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,DOMElement]).isRequired,container:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,DOMElement]),isOpen:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,disabled:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,hideArrow:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,innerClassName:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,placementPrefix:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,toggle:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,delay:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({show:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,hide:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number}),__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number]),modifiers:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,offset:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number])};var DEFAULT_DELAYS={show:0,hide:0};var defaultProps$34={isOpen:false,hideArrow:false,placement:'right',placementPrefix:'bs-popover',delay:DEFAULT_DELAYS,toggle:function toggle(){}};var Popover=function(_React$Component){inherits(Popover,_React$Component);function Popover(props){classCallCheck(this,Popover);var _this=possibleConstructorReturn(this,(Popover.__proto__||Object.getPrototypeOf(Popover)).call(this,props));_this.addTargetEvents=_this.addTargetEvents.bind(_this);_this.handleDocumentClick=_this.handleDocumentClick.bind(_this);_this.removeTargetEvents=_this.removeTargetEvents.bind(_this);_this.getRef=_this.getRef.bind(_this);_this.toggle=_this.toggle.bind(_this);_this.show=_this.show.bind(_this);_this.hide=_this.hide.bind(_this);return _this;}createClass(Popover,[{key:'componentDidMount',value:function componentDidMount(){this._target=getTarget(this.props.target);this.handleProps();}},{key:'componentDidUpdate',value:function componentDidUpdate(){this.handleProps();}},{key:'componentWillUnmount',value:function componentWillUnmount(){this.clearShowTimeout();this.clearHideTimeout();this.removeTargetEvents();}},{key:'getRef',value:function getRef(ref){this._popover=ref;}},{key:'getDelay',value:function getDelay(key){var delay=this.props.delay;if((typeof delay==='undefined'?'undefined':_typeof(delay))==='object'){return isNaN(delay[key])?DEFAULT_DELAYS[key]:delay[key];}return delay;}},{key:'handleProps',value:function handleProps(){if(this.props.isOpen){this.show();}else{this.hide();}}},{key:'show',value:function show(){this.clearHideTimeout();this.addTargetEvents();if(!this.props.isOpen){this.clearShowTimeout();this._showTimeout=setTimeout(this.toggle,this.getDelay('show'));}}},{key:'hide',value:function hide(){this.clearShowTimeout();this.removeTargetEvents();if(this.props.isOpen){this.clearHideTimeout();this._hideTimeout=setTimeout(this.toggle,this.getDelay('hide'));}}},{key:'clearShowTimeout',value:function clearShowTimeout(){clearTimeout(this._showTimeout);this._showTimeout=undefined;}},{key:'clearHideTimeout',value:function clearHideTimeout(){clearTimeout(this._hideTimeout);this._hideTimeout=undefined;}},{key:'handleDocumentClick',value:function handleDocumentClick(e){if(e.target!==this._target&&!this._target.contains(e.target)&&e.target!==this._popover&&!(this._popover&&this._popover.contains(e.target))){if(this._hideTimeout){this.clearHideTimeout();}if(this.props.isOpen){this.toggle(e);}}}},{key:'addTargetEvents',value:function addTargetEvents(){var _this2=this;['click','touchstart'].forEach(function(event){return document.addEventListener(event,_this2.handleDocumentClick,true);});}},{key:'removeTargetEvents',value:function removeTargetEvents(){var _this3=this;['click','touchstart'].forEach(function(event){return document.removeEventListener(event,_this3.handleDocumentClick,true);});}},{key:'toggle',value:function toggle(e){if(this.props.disabled){return e&&e.preventDefault();}return this.props.toggle(e);}},{key:'render',value:function render(){if(!this.props.isOpen){return null;}var attributes=omit(this.props,Object.keys(propTypes$37));var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()('popover-inner',this.props.innerClassName),this.props.cssModule);var popperClasses=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()('popover','show',this.props.className),this.props.cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(PopperContent,{className:popperClasses,target:this.props.target,isOpen:this.props.isOpen,hideArrow:this.props.hideArrow,placement:this.props.placement,placementPrefix:this.props.placementPrefix,container:this.props.container,modifiers:this.props.modifiers,offset:this.props.offset},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',_extends({},attributes,{className:classes,ref:this.getRef})));}}]);return Popover;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);Popover.propTypes=propTypes$37;Popover.defaultProps=defaultProps$34;var propTypes$38={tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object};var defaultProps$35={tag:'h3'};var PopoverHeader=function PopoverHeader(props){var className=props.className,cssModule=props.cssModule,Tag=props.tag,attributes=objectWithoutProperties(props,['className','cssModule','tag']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,'popover-header'),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{className:classes}));};PopoverHeader.propTypes=propTypes$38;PopoverHeader.defaultProps=defaultProps$35;function PopoverTitle(props){warnOnce('The "PopoverTitle" component has been deprecated.\nPlease use component "PopoverHeader".');return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(PopoverHeader,props);}var propTypes$39={tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object};var defaultProps$36={tag:'div'};var PopoverBody=function PopoverBody(props){var className=props.className,cssModule=props.cssModule,Tag=props.tag,attributes=objectWithoutProperties(props,['className','cssModule','tag']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,'popover-body'),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{className:classes}));};PopoverBody.propTypes=propTypes$39;PopoverBody.defaultProps=defaultProps$36;function PopoverContent(props){warnOnce('The "PopoverContent" component has been deprecated.\nPlease use component "PopoverBody".');return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(PopoverBody,props);}var propTypes$40={children:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,bar:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,multi:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,value:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number]),max:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number]),animated:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,striped:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,color:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,barClassName:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object};var defaultProps$37={tag:'div',value:0,max:100};var Progress=function Progress(props){var children=props.children,className=props.className,barClassName=props.barClassName,cssModule=props.cssModule,value=props.value,max=props.max,animated=props.animated,striped=props.striped,color=props.color,bar=props.bar,multi=props.multi,Tag=props.tag,attributes=objectWithoutProperties(props,['children','className','barClassName','cssModule','value','max','animated','striped','color','bar','multi','tag']);var percent=__WEBPACK_IMPORTED_MODULE_7_lodash_tonumber___default()(value)/__WEBPACK_IMPORTED_MODULE_7_lodash_tonumber___default()(max)*100;var progressClasses=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,'progress'),cssModule);var progressBarClasses=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()('progress-bar',bar?className||barClassName:barClassName,animated?'progress-bar-animated':null,color?'bg-'+color:null,striped||animated?'progress-bar-striped':null),cssModule);var ProgressBar=multi?children:__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:progressBarClasses,style:{width:percent+'%'},role:'progressbar','aria-valuenow':value,'aria-valuemin':'0','aria-valuemax':max,children:children});if(bar){return ProgressBar;}return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{className:progressClasses,children:ProgressBar}));};Progress.propTypes=propTypes$40;Progress.defaultProps=defaultProps$37;var propTypes$42={children:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node.isRequired,node:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any};var Portal=function(_React$Component){inherits(Portal,_React$Component);function Portal(){classCallCheck(this,Portal);return possibleConstructorReturn(this,(Portal.__proto__||Object.getPrototypeOf(Portal)).apply(this,arguments));}createClass(Portal,[{key:'componentWillUnmount',value:function componentWillUnmount(){if(this.defaultNode){document.body.removeChild(this.defaultNode);}this.defaultNode=null;}},{key:'render',value:function render(){if(!canUseDOM){return null;}if(!this.props.node&&!this.defaultNode){this.defaultNode=document.createElement('div');document.body.appendChild(this.defaultNode);}return __WEBPACK_IMPORTED_MODULE_5_react_dom___default.a.createPortal(this.props.children,this.props.node||this.defaultNode);}}]);return Portal;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);Portal.propTypes=propTypes$42;function noop(){}var FadePropTypes=__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape(Fade.propTypes);var propTypes$41={isOpen:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,autoFocus:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,centered:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,size:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,toggle:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,keyboard:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,role:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,labelledBy:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,backdrop:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['static'])]),onEnter:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,onExit:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,onOpened:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,onClosed:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,children:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,wrapClassName:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,modalClassName:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,backdropClassName:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,contentClassName:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,external:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,fade:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,zIndex:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),backdropTransition:FadePropTypes,modalTransition:FadePropTypes,innerRef:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func])};var propsToOmit=Object.keys(propTypes$41);var defaultProps$38={isOpen:false,autoFocus:true,centered:false,role:'dialog',backdrop:true,keyboard:true,zIndex:1050,fade:true,onOpened:noop,onClosed:noop,modalTransition:{timeout:TransitionTimeouts.Modal},backdropTransition:{mountOnEnter:true,timeout:TransitionTimeouts.Fade// uses standard fade transition
}};var Modal=function(_React$Component){inherits(Modal,_React$Component);function Modal(props){classCallCheck(this,Modal);var _this=possibleConstructorReturn(this,(Modal.__proto__||Object.getPrototypeOf(Modal)).call(this,props));_this._element=null;_this._originalBodyPadding=null;_this.handleBackdropMouseDown=_this.handleBackdropMouseDown.bind(_this);_this.handleBackdropMouseUp=_this.handleBackdropMouseUp.bind(_this);_this.handleEscape=_this.handleEscape.bind(_this);_this.onOpened=_this.onOpened.bind(_this);_this.onClosed=_this.onClosed.bind(_this);_this.state={isOpen:props.isOpen};if(props.isOpen){_this.init();}return _this;}createClass(Modal,[{key:'componentDidMount',value:function componentDidMount(){if(this.props.onEnter){this.props.onEnter();}if(this.state.isOpen&&this.props.autoFocus){this.setFocus();}this._isMounted=true;}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(nextProps){if(nextProps.isOpen&&!this.props.isOpen){this.setState({isOpen:nextProps.isOpen});}}},{key:'componentWillUpdate',value:function componentWillUpdate(nextProps,nextState){if(nextState.isOpen&&!this.state.isOpen){this.init();}}},{key:'componentDidUpdate',value:function componentDidUpdate(prevProps,prevState){if(this.props.autoFocus&&this.state.isOpen&&!prevState.isOpen){this.setFocus();}if(this._element&&prevProps.zIndex!==this.props.zIndex){this._element.style.zIndex=this.props.zIndex;}}},{key:'componentWillUnmount',value:function componentWillUnmount(){if(this.props.onExit){this.props.onExit();}if(this.state.isOpen){this.destroy();}this._isMounted=false;}},{key:'onOpened',value:function onOpened(node,isAppearing){this.props.onOpened();(this.props.modalTransition.onEntered||noop)(node,isAppearing);}},{key:'onClosed',value:function onClosed(node){// so all methods get called before it is unmounted
this.props.onClosed();(this.props.modalTransition.onExited||noop)(node);this.destroy();if(this._isMounted){this.setState({isOpen:false});}}},{key:'setFocus',value:function setFocus(){if(this._dialog&&this._dialog.parentNode&&typeof this._dialog.parentNode.focus==='function'){this._dialog.parentNode.focus();}}},{key:'handleBackdropMouseDown',value:function handleBackdropMouseDown(e){this._mouseDownElement=e.target;}},{key:'handleBackdropMouseUp',value:function handleBackdropMouseUp(e){if(e.target===this._mouseDownElement){e.stopPropagation();if(!this.props.isOpen||this.props.backdrop!==true)return;var container=this._dialog;if(e.target&&!container.contains(e.target)&&this.props.toggle){this.props.toggle(e);}}}},{key:'handleEscape',value:function handleEscape(e){if(this.props.isOpen&&this.props.keyboard&&e.keyCode===27&&this.props.toggle){this.props.toggle(e);}}},{key:'init',value:function init(){this._element=document.createElement('div');this._element.setAttribute('tabindex','-1');this._element.style.position='relative';this._element.style.zIndex=this.props.zIndex;this._originalBodyPadding=getOriginalBodyPadding();conditionallyUpdateScrollbar();document.body.appendChild(this._element);if(!this.bodyClassAdded){document.body.className=__WEBPACK_IMPORTED_MODULE_2_classnames___default()(document.body.className,mapToCssModules('modal-open',this.props.cssModule));this.bodyClassAdded=true;}}},{key:'destroy',value:function destroy(){if(this._element){document.body.removeChild(this._element);this._element=null;}if(this.bodyClassAdded){var modalOpenClassName=mapToCssModules('modal-open',this.props.cssModule);// Use regex to prevent matching `modal-open` as part of a different class, e.g. `my-modal-opened`
var modalOpenClassNameRegex=new RegExp('(^| )'+modalOpenClassName+'( |$)');document.body.className=document.body.className.replace(modalOpenClassNameRegex,' ').trim();this.bodyClassAdded=false;}setScrollbarWidth(this._originalBodyPadding);}},{key:'renderModalDialog',value:function renderModalDialog(){var _classNames,_this2=this;var attributes=omit(this.props,propsToOmit);var dialogBaseClass='modal-dialog';return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',_extends({},attributes,{className:mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(dialogBaseClass,this.props.className,(_classNames={},defineProperty(_classNames,'modal-'+this.props.size,this.props.size),defineProperty(_classNames,dialogBaseClass+'-centered',this.props.centered),_classNames)),this.props.cssModule),role:'document',ref:function ref(c){_this2._dialog=c;}}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()('modal-content',this.props.contentClassName),this.props.cssModule)},this.props.children));}},{key:'render',value:function render(){if(this.state.isOpen){var _props=this.props,wrapClassName=_props.wrapClassName,modalClassName=_props.modalClassName,backdropClassName=_props.backdropClassName,cssModule=_props.cssModule,isOpen=_props.isOpen,backdrop=_props.backdrop,role=_props.role,labelledBy=_props.labelledBy,external=_props.external,innerRef=_props.innerRef;var modalAttributes={onMouseDown:this.handleBackdropMouseDown,onMouseUp:this.handleBackdropMouseUp,onKeyUp:this.handleEscape,style:{display:'block'},'aria-labelledby':labelledBy,role:role,tabIndex:'-1'};var hasTransition=this.props.fade;var modalTransition=_extends({},Fade.defaultProps,this.props.modalTransition,{baseClass:hasTransition?this.props.modalTransition.baseClass:'',timeout:hasTransition?this.props.modalTransition.timeout:0});var backdropTransition=_extends({},Fade.defaultProps,this.props.backdropTransition,{baseClass:hasTransition?this.props.backdropTransition.baseClass:'',timeout:hasTransition?this.props.backdropTransition.timeout:0});return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Portal,{node:this._element},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',{className:mapToCssModules(wrapClassName)},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Fade,_extends({},modalAttributes,modalTransition,{'in':isOpen,onEntered:this.onOpened,onExited:this.onClosed,cssModule:cssModule,className:mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()('modal',modalClassName),cssModule),innerRef:innerRef}),external,this.renderModalDialog()),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Fade,_extends({},backdropTransition,{'in':isOpen&&!!backdrop,cssModule:cssModule,className:mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()('modal-backdrop',backdropClassName),cssModule)}))));}return null;}}]);return Modal;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);Modal.propTypes=propTypes$41;Modal.defaultProps=defaultProps$38;var propTypes$43={tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),wrapTag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),toggle:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,children:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,closeAriaLabel:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string};var defaultProps$39={tag:'h5',wrapTag:'div',closeAriaLabel:'Close'};var ModalHeader=function ModalHeader(props){var closeButton=void 0;var className=props.className,cssModule=props.cssModule,children=props.children,toggle=props.toggle,Tag=props.tag,WrapTag=props.wrapTag,closeAriaLabel=props.closeAriaLabel,attributes=objectWithoutProperties(props,['className','cssModule','children','toggle','tag','wrapTag','closeAriaLabel']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,'modal-header'),cssModule);if(toggle){closeButton=__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('button',{type:'button',onClick:toggle,className:mapToCssModules('close',cssModule),'aria-label':closeAriaLabel},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{'aria-hidden':'true'},String.fromCharCode(215)));}return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(WrapTag,_extends({},attributes,{className:classes}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,{className:mapToCssModules('modal-title',cssModule)},children),closeButton);};ModalHeader.propTypes=propTypes$43;ModalHeader.defaultProps=defaultProps$39;var propTypes$44={tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object};var defaultProps$40={tag:'div'};var ModalBody=function ModalBody(props){var className=props.className,cssModule=props.cssModule,Tag=props.tag,attributes=objectWithoutProperties(props,['className','cssModule','tag']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,'modal-body'),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{className:classes}));};ModalBody.propTypes=propTypes$44;ModalBody.defaultProps=defaultProps$40;var propTypes$45={tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object};var defaultProps$41={tag:'div'};var ModalFooter=function ModalFooter(props){var className=props.className,cssModule=props.cssModule,Tag=props.tag,attributes=objectWithoutProperties(props,['className','cssModule','tag']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,'modal-footer'),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{className:classes}));};ModalFooter.propTypes=propTypes$45;ModalFooter.defaultProps=defaultProps$41;var propTypes$46={placement:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(PopperPlacements),target:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,DOMElement]).isRequired,container:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,DOMElement]),isOpen:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,disabled:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,hideArrow:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,innerClassName:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,arrowClassName:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,toggle:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,autohide:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,placementPrefix:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,delay:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({show:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,hide:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number}),__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number]),modifiers:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,offset:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number]),innerRef:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object])};var DEFAULT_DELAYS$1={show:0,hide:250};var defaultProps$42={isOpen:false,hideArrow:false,placement:'top',placementPrefix:'bs-tooltip',delay:DEFAULT_DELAYS$1,autohide:true,toggle:function toggle(){}};var Tooltip=function(_React$Component){inherits(Tooltip,_React$Component);function Tooltip(props){classCallCheck(this,Tooltip);var _this=possibleConstructorReturn(this,(Tooltip.__proto__||Object.getPrototypeOf(Tooltip)).call(this,props));_this.addTargetEvents=_this.addTargetEvents.bind(_this);_this.handleDocumentClick=_this.handleDocumentClick.bind(_this);_this.removeTargetEvents=_this.removeTargetEvents.bind(_this);_this.toggle=_this.toggle.bind(_this);_this.onMouseOverTooltip=_this.onMouseOverTooltip.bind(_this);_this.onMouseLeaveTooltip=_this.onMouseLeaveTooltip.bind(_this);_this.onMouseOverTooltipContent=_this.onMouseOverTooltipContent.bind(_this);_this.onMouseLeaveTooltipContent=_this.onMouseLeaveTooltipContent.bind(_this);_this.show=_this.show.bind(_this);_this.hide=_this.hide.bind(_this);_this.onEscKeyDown=_this.onEscKeyDown.bind(_this);return _this;}createClass(Tooltip,[{key:'componentDidMount',value:function componentDidMount(){this._target=getTarget(this.props.target);this.addTargetEvents();}},{key:'componentWillUnmount',value:function componentWillUnmount(){this.removeTargetEvents();}},{key:'onMouseOverTooltip',value:function onMouseOverTooltip(e){if(this._hideTimeout){this.clearHideTimeout();}this._showTimeout=setTimeout(this.show.bind(this,e),this.getDelay('show'));}},{key:'onMouseLeaveTooltip',value:function onMouseLeaveTooltip(e){if(this._showTimeout){this.clearShowTimeout();}this._hideTimeout=setTimeout(this.hide.bind(this,e),this.getDelay('hide'));}},{key:'onMouseOverTooltipContent',value:function onMouseOverTooltipContent(){if(this.props.autohide){return;}if(this._hideTimeout){this.clearHideTimeout();}}},{key:'onMouseLeaveTooltipContent',value:function onMouseLeaveTooltipContent(e){if(this.props.autohide){return;}if(this._showTimeout){this.clearShowTimeout();}e.persist();this._hideTimeout=setTimeout(this.hide.bind(this,e),this.getDelay('hide'));}},{key:'onEscKeyDown',value:function onEscKeyDown(e){if(e.key==='Escape'){this.hide(e);}}},{key:'getDelay',value:function getDelay(key){var delay=this.props.delay;if((typeof delay==='undefined'?'undefined':_typeof(delay))==='object'){return isNaN(delay[key])?DEFAULT_DELAYS$1[key]:delay[key];}return delay;}},{key:'show',value:function show(e){if(!this.props.isOpen){this.clearShowTimeout();this.toggle(e);}}},{key:'hide',value:function hide(e){if(this.props.isOpen){this.clearHideTimeout();this.toggle(e);}}},{key:'clearShowTimeout',value:function clearShowTimeout(){clearTimeout(this._showTimeout);this._showTimeout=undefined;}},{key:'clearHideTimeout',value:function clearHideTimeout(){clearTimeout(this._hideTimeout);this._hideTimeout=undefined;}},{key:'handleDocumentClick',value:function handleDocumentClick(e){if(e.target===this._target||this._target.contains(e.target)){if(this._hideTimeout){this.clearHideTimeout();}if(!this.props.isOpen){this.toggle(e);}}else if(this.props.isOpen&&e.target.getAttribute('role')!=='tooltip'){if(this._showTimeout){this.clearShowTimeout();}this._hideTimeout=setTimeout(this.hide.bind(this,e),this.getDelay('hide'));}}},{key:'addTargetEvents',value:function addTargetEvents(){var _this2=this;this._target.addEventListener('mouseover',this.onMouseOverTooltip,true);this._target.addEventListener('mouseout',this.onMouseLeaveTooltip,true);this._target.addEventListener('keydown',this.onEscKeyDown,true);this._target.addEventListener('focusin',this.show,true);this._target.addEventListener('focusout',this.hide,true);['click','touchstart'].forEach(function(event){return document.addEventListener(event,_this2.handleDocumentClick,true);});}},{key:'removeTargetEvents',value:function removeTargetEvents(){var _this3=this;this._target.removeEventListener('mouseover',this.onMouseOverTooltip,true);this._target.removeEventListener('mouseout',this.onMouseLeaveTooltip,true);this._target.addEventListener('keydown',this.onEscKeyDown,true);this._target.addEventListener('focusin',this.show,true);this._target.addEventListener('focusout',this.hide,true);['click','touchstart'].forEach(function(event){return document.removeEventListener(event,_this3.handleDocumentClick,true);});}},{key:'toggle',value:function toggle(e){if(this.props.disabled){return e&&e.preventDefault();}return this.props.toggle(e);}},{key:'render',value:function render(){if(!this.props.isOpen){return null;}var attributes=omit(this.props,Object.keys(propTypes$46));var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()('tooltip-inner',this.props.innerClassName),this.props.cssModule);var popperClasses=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()('tooltip','show',this.props.className),this.props.cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(PopperContent,{className:popperClasses,target:this.props.target,isOpen:this.props.isOpen,hideArrow:this.props.hideArrow,placement:this.props.placement,placementPrefix:this.props.placementPrefix,arrowClassName:this.props.arrowClassName,container:this.props.container,modifiers:this.props.modifiers,offset:this.props.offset,cssModule:this.props.cssModule},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',_extends({},attributes,{ref:this.props.innerRef,className:classes,role:'tooltip','aria-hidden':this.props.isOpen,onMouseOver:this.onMouseOverTooltipContent,onMouseLeave:this.onMouseLeaveTooltipContent,onKeyDown:this.onEscKeyDown})));}}]);return Tooltip;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);Tooltip.propTypes=propTypes$46;Tooltip.defaultProps=defaultProps$42;var propTypes$47={className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,size:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,bordered:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,borderless:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,striped:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,inverse:deprecated(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,'Please use the prop "dark"'),dark:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,hover:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,responsive:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),responsiveTag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string])};var defaultProps$43={tag:'table',responsiveTag:'div'};var Table=function Table(props){var className=props.className,cssModule=props.cssModule,size=props.size,bordered=props.bordered,borderless=props.borderless,striped=props.striped,inverse=props.inverse,dark=props.dark,hover=props.hover,responsive=props.responsive,Tag=props.tag,ResponsiveTag=props.responsiveTag,attributes=objectWithoutProperties(props,['className','cssModule','size','bordered','borderless','striped','inverse','dark','hover','responsive','tag','responsiveTag']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,'table',size?'table-'+size:false,bordered?'table-bordered':false,borderless?'table-borderless':false,striped?'table-striped':false,dark||inverse?'table-dark':false,hover?'table-hover':false),cssModule);var table=__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{className:classes}));if(responsive){var responsiveClassName=responsive===true?'table-responsive':'table-responsive-'+responsive;return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ResponsiveTag,{className:responsiveClassName},table);}return table;};Table.propTypes=propTypes$47;Table.defaultProps=defaultProps$43;var propTypes$48={tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),flush:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object};var defaultProps$44={tag:'ul'};var ListGroup=function ListGroup(props){var className=props.className,cssModule=props.cssModule,Tag=props.tag,flush=props.flush,attributes=objectWithoutProperties(props,['className','cssModule','tag','flush']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,'list-group',flush?'list-group-flush':false),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{className:classes}));};ListGroup.propTypes=propTypes$48;ListGroup.defaultProps=defaultProps$44;var propTypes$49={children:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,inline:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),innerRef:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object};var defaultProps$45={tag:'form'};var Form=function(_Component){inherits(Form,_Component);function Form(props){classCallCheck(this,Form);var _this=possibleConstructorReturn(this,(Form.__proto__||Object.getPrototypeOf(Form)).call(this,props));_this.getRef=_this.getRef.bind(_this);_this.submit=_this.submit.bind(_this);return _this;}createClass(Form,[{key:'getRef',value:function getRef(ref){if(this.props.innerRef){this.props.innerRef(ref);}this.ref=ref;}},{key:'submit',value:function submit(){if(this.ref){this.ref.submit();}}},{key:'render',value:function render(){var _props=this.props,className=_props.className,cssModule=_props.cssModule,inline=_props.inline,Tag=_props.tag,innerRef=_props.innerRef,attributes=objectWithoutProperties(_props,['className','cssModule','inline','tag','innerRef']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,inline?'form-inline':false),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{ref:innerRef,className:classes}));}}]);return Form;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);Form.propTypes=propTypes$49;Form.defaultProps=defaultProps$45;var propTypes$50={children:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,valid:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,tooltip:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool};var defaultProps$46={tag:'div',valid:undefined};var FormFeedback=function FormFeedback(props){var className=props.className,cssModule=props.cssModule,valid=props.valid,tooltip=props.tooltip,Tag=props.tag,attributes=objectWithoutProperties(props,['className','cssModule','valid','tooltip','tag']);var validMode=tooltip?'tooltip':'feedback';var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,valid?'valid-'+validMode:'invalid-'+validMode),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{className:classes}));};FormFeedback.propTypes=propTypes$50;FormFeedback.defaultProps=defaultProps$46;var propTypes$51={children:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,row:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,check:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,inline:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,disabled:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object};var defaultProps$47={tag:'div'};var FormGroup=function FormGroup(props){var className=props.className,cssModule=props.cssModule,row=props.row,disabled=props.disabled,check=props.check,inline=props.inline,Tag=props.tag,attributes=objectWithoutProperties(props,['className','cssModule','row','disabled','check','inline','tag']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,'position-relative',row?'row':false,check?'form-check':'form-group',check&&inline?'form-check-inline':false,check&&disabled?'disabled':false),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{className:classes}));};FormGroup.propTypes=propTypes$51;FormGroup.defaultProps=defaultProps$47;var propTypes$52={children:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,inline:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),color:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object};var defaultProps$48={tag:'small',color:'muted'};var FormText=function FormText(props){var className=props.className,cssModule=props.cssModule,inline=props.inline,color=props.color,Tag=props.tag,attributes=objectWithoutProperties(props,['className','cssModule','inline','color','tag']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,!inline?'form-text':false,color?'text-'+color:false),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{className:classes}));};FormText.propTypes=propTypes$52;FormText.defaultProps=defaultProps$48;/* eslint react/prefer-stateless-function: 0 */var propTypes$53={children:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,type:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,size:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,bsSize:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,state:deprecated(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,'Please use the props "valid" and "invalid" to indicate the state.'),valid:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,invalid:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),innerRef:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),static:deprecated(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,'Please use the prop "plaintext"'),plaintext:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,addon:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object};var defaultProps$49={type:'text'};var Input=function(_React$Component){inherits(Input,_React$Component);function Input(props){classCallCheck(this,Input);var _this=possibleConstructorReturn(this,(Input.__proto__||Object.getPrototypeOf(Input)).call(this,props));_this.getRef=_this.getRef.bind(_this);_this.focus=_this.focus.bind(_this);return _this;}createClass(Input,[{key:'getRef',value:function getRef(ref){if(this.props.innerRef){this.props.innerRef(ref);}this.ref=ref;}},{key:'focus',value:function focus(){if(this.ref){this.ref.focus();}}},{key:'render',value:function render(){var _props=this.props,className=_props.className,cssModule=_props.cssModule,type=_props.type,bsSize=_props.bsSize,state=_props.state,valid=_props.valid,invalid=_props.invalid,tag=_props.tag,addon=_props.addon,staticInput=_props.static,plaintext=_props.plaintext,innerRef=_props.innerRef,attributes=objectWithoutProperties(_props,['className','cssModule','type','bsSize','state','valid','invalid','tag','addon','static','plaintext','innerRef']);var checkInput=['radio','checkbox'].indexOf(type)>-1;var isNotaNumber=new RegExp('\\D','g');var fileInput=type==='file';var textareaInput=type==='textarea';var selectInput=type==='select';var Tag=tag||(selectInput||textareaInput?type:'input');var formControlClass='form-control';if(plaintext||staticInput){formControlClass=formControlClass+'-plaintext';Tag=tag||'p';}else if(fileInput){formControlClass=formControlClass+'-file';}else if(checkInput){if(addon){formControlClass=null;}else{formControlClass='form-check-input';}}if(state&&typeof valid==='undefined'&&typeof invalid==='undefined'){if(state==='danger'){invalid=true;}else if(state==='success'){valid=true;}}if(attributes.size&&isNotaNumber.test(attributes.size)){warnOnce('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.');bsSize=attributes.size;delete attributes.size;}var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,invalid&&'is-invalid',valid&&'is-valid',bsSize?'form-control-'+bsSize:false,formControlClass),cssModule);if(Tag==='input'||tag&&typeof tag==='function'){attributes.type=type;}if(attributes.children&&!(plaintext||staticInput||type==='select'||typeof Tag!=='string'||Tag==='select')){warnOnce('Input with a type of "'+type+'" cannot have children. Please use "value"/"defaultValue" instead.');delete attributes.children;}return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{ref:innerRef,className:classes}));}}]);return Input;}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);Input.propTypes=propTypes$53;Input.defaultProps=defaultProps$49;var propTypes$54={tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),size:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object};var defaultProps$50={tag:'div'};var InputGroup=function InputGroup(props){var className=props.className,cssModule=props.cssModule,Tag=props.tag,size=props.size,attributes=objectWithoutProperties(props,['className','cssModule','tag','size']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,'input-group',size?'input-group-'+size:null),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{className:classes}));};InputGroup.propTypes=propTypes$54;InputGroup.defaultProps=defaultProps$50;var propTypes$56={tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object};var defaultProps$52={tag:'span'};var InputGroupText=function InputGroupText(props){var className=props.className,cssModule=props.cssModule,Tag=props.tag,attributes=objectWithoutProperties(props,['className','cssModule','tag']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,'input-group-text'),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{className:classes}));};InputGroupText.propTypes=propTypes$56;InputGroupText.defaultProps=defaultProps$52;var propTypes$55={tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),addonType:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['prepend','append']).isRequired,children:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object};var defaultProps$51={tag:'div'};var InputGroupAddon=function InputGroupAddon(props){var className=props.className,cssModule=props.cssModule,Tag=props.tag,addonType=props.addonType,children=props.children,attributes=objectWithoutProperties(props,['className','cssModule','tag','addonType','children']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,'input-group-'+addonType),cssModule);// Convenience to assist with transition
if(typeof children==='string'){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{className:classes}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(InputGroupText,{children:children}));}return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{className:classes,children:children}));};InputGroupAddon.propTypes=propTypes$55;InputGroupAddon.defaultProps=defaultProps$51;var propTypes$57={tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),addonType:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['prepend','append']).isRequired,children:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,groupClassName:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,groupAttributes:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object};var InputGroupButton=function InputGroupButton(props){warnOnce('The "InputGroupButton" component has been deprecated.\nPlease use component "InputGroupAddon".');var children=props.children,groupClassName=props.groupClassName,groupAttributes=props.groupAttributes,propsWithoutGroup=objectWithoutProperties(props,['children','groupClassName','groupAttributes']);if(typeof children==='string'){var cssModule=propsWithoutGroup.cssModule,tag=propsWithoutGroup.tag,addonType=propsWithoutGroup.addonType,attributes=objectWithoutProperties(propsWithoutGroup,['cssModule','tag','addonType']);var allGroupAttributes=_extends({},groupAttributes,{cssModule:cssModule,tag:tag,addonType:addonType});return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(InputGroupAddon,_extends({},allGroupAttributes,{className:groupClassName}),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Button,_extends({},attributes,{children:children})));}return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(InputGroupAddon,_extends({},props,{children:children}));};InputGroupButton.propTypes=propTypes$57;var propTypes$58={addonType:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['prepend','append']).isRequired,children:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node};var InputGroupButtonDropdown=function InputGroupButtonDropdown(props){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Dropdown,props);};InputGroupButtonDropdown.propTypes=propTypes$58;var colWidths$1=['xs','sm','md','lg','xl'];var stringOrNumberProp$1=__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]);var columnProps$1=__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({size:stringOrNumberProp$1,push:deprecated(stringOrNumberProp$1,'Please use the prop "order"'),pull:deprecated(stringOrNumberProp$1,'Please use the prop "order"'),order:stringOrNumberProp$1,offset:stringOrNumberProp$1})]);var propTypes$59={children:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,hidden:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,check:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,size:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,for:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,xs:columnProps$1,sm:columnProps$1,md:columnProps$1,lg:columnProps$1,xl:columnProps$1,widths:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array};var defaultProps$53={tag:'label',widths:colWidths$1};var getColumnSizeClass$1=function getColumnSizeClass(isXs,colWidth,colSize){if(colSize===true||colSize===''){return isXs?'col':'col-'+colWidth;}else if(colSize==='auto'){return isXs?'col-auto':'col-'+colWidth+'-auto';}return isXs?'col-'+colSize:'col-'+colWidth+'-'+colSize;};var Label=function Label(props){var className=props.className,cssModule=props.cssModule,hidden=props.hidden,widths=props.widths,Tag=props.tag,check=props.check,size=props.size,htmlFor=props.for,attributes=objectWithoutProperties(props,['className','cssModule','hidden','widths','tag','check','size','for']);var colClasses=[];widths.forEach(function(colWidth,i){var columnProp=props[colWidth];delete attributes[colWidth];if(!columnProp&&columnProp!==''){return;}var isXs=!i;var colClass=void 0;if(__WEBPACK_IMPORTED_MODULE_4_lodash_isobject___default()(columnProp)){var _classNames;var colSizeInterfix=isXs?'-':'-'+colWidth+'-';colClass=getColumnSizeClass$1(isXs,colWidth,columnProp.size);colClasses.push(mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()((_classNames={},defineProperty(_classNames,colClass,columnProp.size||columnProp.size===''),defineProperty(_classNames,'order'+colSizeInterfix+columnProp.order,columnProp.order||columnProp.order===0),defineProperty(_classNames,'offset'+colSizeInterfix+columnProp.offset,columnProp.offset||columnProp.offset===0),_classNames))),cssModule);}else{colClass=getColumnSizeClass$1(isXs,colWidth,columnProp);colClasses.push(colClass);}});var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,hidden?'sr-only':false,check?'form-check-label':false,size?'col-form-label-'+size:false,colClasses,colClasses.length?'col-form-label':false),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({htmlFor:htmlFor},attributes,{className:classes}));};Label.propTypes=propTypes$59;Label.defaultProps=defaultProps$53;var propTypes$60={body:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,bottom:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,children:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,heading:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,left:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,list:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,middle:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,object:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,right:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),top:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool};var Media=function Media(props){var body=props.body,bottom=props.bottom,className=props.className,cssModule=props.cssModule,heading=props.heading,left=props.left,list=props.list,middle=props.middle,object=props.object,right=props.right,tag=props.tag,top=props.top,attributes=objectWithoutProperties(props,['body','bottom','className','cssModule','heading','left','list','middle','object','right','tag','top']);var defaultTag=void 0;if(heading){defaultTag='h4';}else if(attributes.href){defaultTag='a';}else if(attributes.src||object){defaultTag='img';}else if(list){defaultTag='ul';}else{defaultTag='div';}var Tag=tag||defaultTag;var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,{'media-body':body,'media-heading':heading,'media-left':left,'media-right':right,'media-top':top,'media-bottom':bottom,'media-middle':middle,'media-object':object,'media-list':list,media:!body&&!heading&&!left&&!right&&!top&&!bottom&&!middle&&!object&&!list}),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{className:classes}));};Media.propTypes=propTypes$60;var propTypes$61={children:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,listClassName:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,size:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),listTag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),'aria-label':__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string};var defaultProps$54={tag:'nav',listTag:'ul','aria-label':'pagination'};var Pagination=function Pagination(props){var className=props.className,listClassName=props.listClassName,cssModule=props.cssModule,size=props.size,Tag=props.tag,ListTag=props.listTag,label=props['aria-label'],attributes=objectWithoutProperties(props,['className','listClassName','cssModule','size','tag','listTag','aria-label']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className),cssModule);var listClasses=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(listClassName,'pagination',defineProperty({},'pagination-'+size,!!size)),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,{className:classes,'aria-label':label},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ListTag,_extends({},attributes,{className:listClasses})));};Pagination.propTypes=propTypes$61;Pagination.defaultProps=defaultProps$54;var propTypes$62={active:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,children:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,disabled:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string])};var defaultProps$55={tag:'li'};var PaginationItem=function PaginationItem(props){var active=props.active,className=props.className,cssModule=props.cssModule,disabled=props.disabled,Tag=props.tag,attributes=objectWithoutProperties(props,['active','className','cssModule','disabled','tag']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,'page-item',{active:active,disabled:disabled}),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{className:classes}));};PaginationItem.propTypes=propTypes$62;PaginationItem.defaultProps=defaultProps$55;var propTypes$63={'aria-label':__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,children:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,next:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,previous:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string])};var defaultProps$56={tag:'a'};var PaginationLink=function PaginationLink(props){var className=props.className,cssModule=props.cssModule,next=props.next,previous=props.previous,Tag=props.tag,attributes=objectWithoutProperties(props,['className','cssModule','next','previous','tag']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,'page-link'),cssModule);var defaultAriaLabel=void 0;if(previous){defaultAriaLabel='Previous';}else if(next){defaultAriaLabel='Next';}var ariaLabel=props['aria-label']||defaultAriaLabel;var defaultCaret=void 0;if(previous){defaultCaret='\xAB';}else if(next){defaultCaret='\xBB';}var children=props.children;if(children&&Array.isArray(children)&&children.length===0){children=null;}if(!attributes.href&&Tag==='a'){Tag='button';}if(previous||next){children=[__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{'aria-hidden':'true',key:'caret'},children||defaultCaret),__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{className:'sr-only',key:'sr'},ariaLabel)];}return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{className:classes,'aria-label':ariaLabel}),children);};PaginationLink.propTypes=propTypes$63;PaginationLink.defaultProps=defaultProps$56;var propTypes$64={tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),activeTab:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any,className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object};var defaultProps$57={tag:'div'};var childContextTypes$2={activeTabId:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any};var TabContent=function(_Component){inherits(TabContent,_Component);createClass(TabContent,null,[{key:'getDerivedStateFromProps',value:function getDerivedStateFromProps(nextProps,prevState){if(prevState.activeTab!==nextProps.activeTab){return{activeTab:nextProps.activeTab};}return null;}}]);function TabContent(props){classCallCheck(this,TabContent);var _this=possibleConstructorReturn(this,(TabContent.__proto__||Object.getPrototypeOf(TabContent)).call(this,props));_this.state={activeTab:_this.props.activeTab};return _this;}createClass(TabContent,[{key:'getChildContext',value:function getChildContext(){return{activeTabId:this.state.activeTab};}},{key:'render',value:function render(){var _props=this.props,className=_props.className,cssModule=_props.cssModule,Tag=_props.tag;var attributes=omit(this.props,Object.keys(propTypes$64));var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()('tab-content',className),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{className:classes}));}}]);return TabContent;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);Object(__WEBPACK_IMPORTED_MODULE_8_react_lifecycles_compat__["polyfill"])(TabContent);TabContent.propTypes=propTypes$64;TabContent.defaultProps=defaultProps$57;TabContent.childContextTypes=childContextTypes$2;var propTypes$65={tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,tabId:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any};var defaultProps$58={tag:'div'};var contextTypes$3={activeTabId:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any};function TabPane(props,context){var className=props.className,cssModule=props.cssModule,tabId=props.tabId,Tag=props.tag,attributes=objectWithoutProperties(props,['className','cssModule','tabId','tag']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()('tab-pane',className,{active:tabId===context.activeTabId}),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{className:classes}));}TabPane.propTypes=propTypes$65;TabPane.defaultProps=defaultProps$58;TabPane.contextTypes=contextTypes$3;var propTypes$66={tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),fluid:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object};var defaultProps$59={tag:'div'};var Jumbotron=function Jumbotron(props){var className=props.className,cssModule=props.cssModule,Tag=props.tag,fluid=props.fluid,attributes=objectWithoutProperties(props,['className','cssModule','tag','fluid']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,'jumbotron',fluid?'jumbotron-fluid':false),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{className:classes}));};Jumbotron.propTypes=propTypes$66;Jumbotron.defaultProps=defaultProps$59;var propTypes$67={children:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,closeClassName:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,closeAriaLabel:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,color:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,fade:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,isOpen:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,toggle:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),transition:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape(Fade.propTypes),innerRef:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func])};var defaultProps$60={color:'success',isOpen:true,tag:'div',closeAriaLabel:'Close',fade:true,transition:_extends({},Fade.defaultProps,{unmountOnExit:true})};function Alert(props){var className=props.className,closeClassName=props.closeClassName,closeAriaLabel=props.closeAriaLabel,cssModule=props.cssModule,Tag=props.tag,color=props.color,isOpen=props.isOpen,toggle=props.toggle,children=props.children,transition=props.transition,fade=props.fade,innerRef=props.innerRef,attributes=objectWithoutProperties(props,['className','closeClassName','closeAriaLabel','cssModule','tag','color','isOpen','toggle','children','transition','fade','innerRef']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,'alert','alert-'+color,{'alert-dismissible':toggle}),cssModule);var closeClasses=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()('close',closeClassName),cssModule);var alertTransition=_extends({},Fade.defaultProps,transition,{baseClass:fade?transition.baseClass:'',timeout:fade?transition.timeout:0});return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Fade,_extends({},attributes,alertTransition,{tag:Tag,className:classes,'in':isOpen,role:'alert',innerRef:innerRef}),toggle?__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('button',{type:'button',className:closeClasses,'aria-label':closeAriaLabel,onClick:toggle},__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span',{'aria-hidden':'true'},'\xD7')):null,children);}Alert.propTypes=propTypes$67;Alert.defaultProps=defaultProps$60;var _transitionStatusToCl;var propTypes$68=_extends({},Transition.propTypes,{isOpen:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,children:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node),__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node]),tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,navbar:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,innerRef:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object});var defaultProps$61=_extends({},Transition.defaultProps,{isOpen:false,appear:false,enter:true,exit:true,tag:'div',timeout:TransitionTimeouts.Collapse});var transitionStatusToClassHash=(_transitionStatusToCl={},defineProperty(_transitionStatusToCl,TransitionStatuses.ENTERING,'collapsing'),defineProperty(_transitionStatusToCl,TransitionStatuses.ENTERED,'collapse show'),defineProperty(_transitionStatusToCl,TransitionStatuses.EXITING,'collapsing'),defineProperty(_transitionStatusToCl,TransitionStatuses.EXITED,'collapse'),_transitionStatusToCl);function getTransitionClass(status){return transitionStatusToClassHash[status]||'collapse';}function getHeight(node){return node.scrollHeight;}var Collapse=function(_Component){inherits(Collapse,_Component);function Collapse(props){classCallCheck(this,Collapse);var _this=possibleConstructorReturn(this,(Collapse.__proto__||Object.getPrototypeOf(Collapse)).call(this,props));_this.state={height:null};['onEntering','onEntered','onExit','onExiting','onExited'].forEach(function(name){_this[name]=_this[name].bind(_this);});return _this;}createClass(Collapse,[{key:'onEntering',value:function onEntering(node,isAppearing){this.setState({height:getHeight(node)});this.props.onEntering(node,isAppearing);}},{key:'onEntered',value:function onEntered(node,isAppearing){this.setState({height:null});this.props.onEntered(node,isAppearing);}},{key:'onExit',value:function onExit(node){this.setState({height:getHeight(node)});this.props.onExit(node);}},{key:'onExiting',value:function onExiting(node){// getting this variable triggers a reflow
var _unused=node.offsetHeight;// eslint-disable-line no-unused-vars
this.setState({height:0});this.props.onExiting(node);}},{key:'onExited',value:function onExited(node){this.setState({height:null});this.props.onExited(node);}},{key:'render',value:function render(){var _this2=this;var _props=this.props,Tag=_props.tag,isOpen=_props.isOpen,className=_props.className,navbar=_props.navbar,cssModule=_props.cssModule,children=_props.children,innerRef=_props.innerRef,otherProps=objectWithoutProperties(_props,['tag','isOpen','className','navbar','cssModule','children','innerRef']);var height=this.state.height;// In NODE_ENV=production the Transition.propTypes are wrapped which results in an
// empty object "{}". This is the result of the `react-transition-group` babel
// configuration settings. Therefore, to ensure that production builds work without
// error, we can either explicitly define keys or use the Transition.defaultProps.
// Using the Transition.defaultProps excludes any required props. Thus, the best
// solution is to explicitly define required props in our utilities and reference these.
// This also gives us more flexibility in the future to remove the prop-types
// dependency in distribution builds (Similar to how `react-transition-group` does).
// Note: Without omitting the `react-transition-group` props, the resulting child
// Tag component would inherit the Transition properties as attributes for the HTML
// element which results in errors/warnings for non-valid attributes.
var transitionProps=pick(otherProps,TransitionPropTypeKeys);var childProps=omit(otherProps,TransitionPropTypeKeys);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Transition,_extends({},transitionProps,{'in':isOpen,onEntering:this.onEntering,onEntered:this.onEntered,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),function(status){var collapseClass=getTransitionClass(status);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,collapseClass,navbar&&'navbar-collapse'),cssModule);var style=height===null?null:{height:height};return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},childProps,{style:_extends({},childProps.style,style),className:classes,ref:_this2.props.innerRef}),children);});}}]);return Collapse;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);Collapse.propTypes=propTypes$68;Collapse.defaultProps=defaultProps$61;var propTypes$69={tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),active:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,disabled:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,color:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,action:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object};var defaultProps$62={tag:'li'};var handleDisabledOnClick=function handleDisabledOnClick(e){e.preventDefault();};var ListGroupItem=function ListGroupItem(props){var className=props.className,cssModule=props.cssModule,Tag=props.tag,active=props.active,disabled=props.disabled,action=props.action,color=props.color,attributes=objectWithoutProperties(props,['className','cssModule','tag','active','disabled','action','color']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,active?'active':false,disabled?'disabled':false,action?'list-group-item-action':false,color?'list-group-item-'+color:false,'list-group-item'),cssModule);// Prevent click event when disabled.
if(disabled){attributes.onClick=handleDisabledOnClick;}return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{className:classes}));};ListGroupItem.propTypes=propTypes$69;ListGroupItem.defaultProps=defaultProps$62;var propTypes$70={tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object};var defaultProps$63={tag:'h5'};var ListGroupItemHeading=function ListGroupItemHeading(props){var className=props.className,cssModule=props.cssModule,Tag=props.tag,attributes=objectWithoutProperties(props,['className','cssModule','tag']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,'list-group-item-heading'),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{className:classes}));};ListGroupItemHeading.propTypes=propTypes$70;ListGroupItemHeading.defaultProps=defaultProps$63;var propTypes$71={tag:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),className:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any,cssModule:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object};var defaultProps$64={tag:'p'};var ListGroupItemText=function ListGroupItemText(props){var className=props.className,cssModule=props.cssModule,Tag=props.tag,attributes=objectWithoutProperties(props,['className','cssModule','tag']);var classes=mapToCssModules(__WEBPACK_IMPORTED_MODULE_2_classnames___default()(className,'list-group-item-text'),cssModule);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tag,_extends({},attributes,{className:classes}));};ListGroupItemText.propTypes=propTypes$71;ListGroupItemText.defaultProps=defaultProps$64;var UncontrolledAlert=function(_Component){inherits(UncontrolledAlert,_Component);function UncontrolledAlert(props){classCallCheck(this,UncontrolledAlert);var _this=possibleConstructorReturn(this,(UncontrolledAlert.__proto__||Object.getPrototypeOf(UncontrolledAlert)).call(this,props));_this.state={isOpen:true};_this.toggle=_this.toggle.bind(_this);return _this;}createClass(UncontrolledAlert,[{key:'toggle',value:function toggle(){this.setState({isOpen:!this.state.isOpen});}},{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Alert,_extends({isOpen:this.state.isOpen,toggle:this.toggle},this.props));}}]);return UncontrolledAlert;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);var UncontrolledButtonDropdown=function(_Component){inherits(UncontrolledButtonDropdown,_Component);function UncontrolledButtonDropdown(props){classCallCheck(this,UncontrolledButtonDropdown);var _this=possibleConstructorReturn(this,(UncontrolledButtonDropdown.__proto__||Object.getPrototypeOf(UncontrolledButtonDropdown)).call(this,props));_this.state={isOpen:false};_this.toggle=_this.toggle.bind(_this);return _this;}createClass(UncontrolledButtonDropdown,[{key:'toggle',value:function toggle(){this.setState({isOpen:!this.state.isOpen});}},{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ButtonDropdown,_extends({isOpen:this.state.isOpen,toggle:this.toggle},this.props));}}]);return UncontrolledButtonDropdown;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);var propTypes$72={toggler:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,toggleEvents:__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string)};var defaultProps$65={toggleEvents:defaultToggleEvents};var UncontrolledCollapse=function(_Component){inherits(UncontrolledCollapse,_Component);function UncontrolledCollapse(props){classCallCheck(this,UncontrolledCollapse);var _this=possibleConstructorReturn(this,(UncontrolledCollapse.__proto__||Object.getPrototypeOf(UncontrolledCollapse)).call(this,props));_this.togglers=null;_this.removeEventListeners=null;_this.toggle=_this.toggle.bind(_this);_this.state={isOpen:false};return _this;}createClass(UncontrolledCollapse,[{key:'componentDidMount',value:function componentDidMount(){this.togglers=findDOMElements(this.props.toggler);if(this.togglers.length){this.removeEventListeners=addMultipleEventListeners(this.togglers,this.toggle,this.props.toggleEvents);}}},{key:'componentWillUnmount',value:function componentWillUnmount(){if(this.togglers.length&&this.removeEventListeners){this.removeEventListeners();}}},{key:'toggle',value:function toggle(e){this.setState(function(_ref){var isOpen=_ref.isOpen;return{isOpen:!isOpen};});e.preventDefault();}},{key:'render',value:function render(){var _props=this.props,toggleEvents=_props.toggleEvents,rest=objectWithoutProperties(_props,['toggleEvents']);return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Collapse,_extends({isOpen:this.state.isOpen},rest));}}]);return UncontrolledCollapse;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);UncontrolledCollapse.propTypes=propTypes$72;UncontrolledCollapse.defaultProps=defaultProps$65;var UncontrolledDropdown=function(_Component){inherits(UncontrolledDropdown,_Component);function UncontrolledDropdown(props){classCallCheck(this,UncontrolledDropdown);var _this=possibleConstructorReturn(this,(UncontrolledDropdown.__proto__||Object.getPrototypeOf(UncontrolledDropdown)).call(this,props));_this.state={isOpen:false};_this.toggle=_this.toggle.bind(_this);return _this;}createClass(UncontrolledDropdown,[{key:'toggle',value:function toggle(){this.setState({isOpen:!this.state.isOpen});}},{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Dropdown,_extends({isOpen:this.state.isOpen,toggle:this.toggle},this.props));}}]);return UncontrolledDropdown;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);var UncontrolledNavDropdown=function UncontrolledNavDropdown(props){warnOnce('The "UncontrolledNavDropdown" component has been deprecated.\nPlease use component "UncontrolledDropdown" with nav prop.');return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(UncontrolledDropdown,_extends({nav:true},props));};var UncontrolledTooltip=function(_Component){inherits(UncontrolledTooltip,_Component);function UncontrolledTooltip(props){classCallCheck(this,UncontrolledTooltip);var _this=possibleConstructorReturn(this,(UncontrolledTooltip.__proto__||Object.getPrototypeOf(UncontrolledTooltip)).call(this,props));_this.state={isOpen:false};_this.toggle=_this.toggle.bind(_this);return _this;}createClass(UncontrolledTooltip,[{key:'toggle',value:function toggle(){this.setState({isOpen:!this.state.isOpen});}},{key:'render',value:function render(){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Tooltip,_extends({isOpen:this.state.isOpen,toggle:this.toggle},this.props));}}]);return UncontrolledTooltip;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);/***/},/***/"./node_modules/string-hash/index.js":/***/function node_modulesStringHashIndexJs(module,exports,__webpack_require__){function hash(str){var hash=5381,i=str.length;while(i){hash=hash*33^str.charCodeAt(--i);}/* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */return hash>>>0;}module.exports=hash;/***/},/***/"./pages/_error.js":/***/function pages_errorJs(module,exports,__webpack_require__){Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _style=_interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/styled-jsx/style.js"));var _react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var _head=_interopRequireDefault(__webpack_require__("./node_modules/next/head.js"));var _link=_interopRequireDefault(__webpack_require__("./node_modules/next/link.js"));var _reactstrap=__webpack_require__("./node_modules/reactstrap/dist/reactstrap.es.js");var _router=__webpack_require__("./node_modules/next/router.js");var _jsxFileName="/Applications/MAMP/htdocs/my-next-app/pages/_error.js";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var ErrorPage=/*#__PURE__*/function(_React$Component){_inherits(ErrorPage,_React$Component);function ErrorPage(){_classCallCheck(this,ErrorPage);return _possibleConstructorReturn(this,(ErrorPage.__proto__||Object.getPrototypeOf(ErrorPage)).apply(this,arguments));}_createClass(ErrorPage,[{key:"render",value:function render(){var response;switch(this.props.errorCode){case 200:// Also display a 404 if someone requests /_error explicitly
case 404:response=_react.default.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:32},className:"jsx-978077609"+" "+"container"},_react.default.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:33},className:"jsx-978077609"+" "+"row mt-5"},_react.default.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:34},className:"jsx-978077609"+" "+"col-12 text-center title mt-3 mb-3"},_react.default.createElement("img",{src:"/static/images/404.png",__source:{fileName:_jsxFileName,lineNumber:35},className:"jsx-978077609"})),_react.default.createElement("div",{style:{color:"#d5d8f3"},__source:{fileName:_jsxFileName,lineNumber:37},className:"jsx-978077609"+" "+"col-12 text-center font-25 mt-3"},"Ch\xFAng t\xF4i xin l\u1ED7i. Trang b\u1EA1n t\xECm ki\u1EBFm kh\xF4ng t\u1ED3n t\u1EA1i"),_react.default.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:40},className:"jsx-978077609"+" "+"col-6 offset-md-3 mt-3 text-center explain font-14"},"Th\u1EADt kh\xF4ng may l\xE0 trang b\u1EA1n \u0111ang t\xECm ki\u1EBFm kh\xF4ng th\u1EC3 t\xECm th\u1EA5y. N\xF3 c\xF3 th\u1EC3 t\u1EA1m th\u1EDDi kh\xF4ng c\xF3, di chuy\u1EC3n ho\u1EB7c kh\xF4ng c\xF2n t\u1ED3n t\u1EA1i. Ki\u1EC3m tra Url m\xE0 b\u1EA1n \u0111\xE3 nh\u1EADp cho b\u1EA5t k\u1EF3 l\u1ED7i n\xE0o v\xE0 th\u1EED l\u1EA1i."),_react.default.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:43},className:"jsx-978077609"+" "+"col-12 text-center mt-3"},_react.default.createElement("a",{href:"/",__source:{fileName:_jsxFileName,lineNumber:44},className:"jsx-978077609"+" "+"btn btn-primary font-weight-bold"},"V\u1EC1 trang ch\u1EE7"))),_react.default.createElement(_style.default,{styleId:"978077609",css:"body{margin:0;padding:0;background:url(\"/static/images/background404.jpg\");display:table;width:100% !important;height:100%;min-height:100%;color:#ffffff !important;background-repeat:no-repeat;background-position:center center;font-family:helvetica-ttf;}.container{padding-top:11rem !important;padding-bottom:9rem !important;max-width:100% !important;text-align:center;display:table-cell;background-color:rgba(185,83,164,0.6) !important;background-size:cover;height:100%;}.container{max-width:400px;}.title{font-size:100px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19lcnJvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRDZCLEFBRVksQUFhb0IsQUFVYixBQUdBLFNBekJOLE9Bc0JPLEFBR0EsR0F4QmtDLFVBWXBCLCtCQUNMLFVBWlosY0FDUSxFQVlKLGtCQUNDLEVBWlAsWUFDSSxLQVlvQyxXQVgzQix5QkFDRyxhQVdOLGVBVlksT0FXdEIsWUFBQyxlQVZhLDBCQUFDIiwiZmlsZSI6InBhZ2VzL19lcnJvci5qcyIsInNvdXJjZVJvb3QiOiIvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL215LW5leHQtYXBwIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGluZyBhIHBhZ2UgbmFtZWQgX2Vycm9yLmpzIGxldHMgeW91IG92ZXJyaWRlIEhUVFAgZXJyb3IgbWVzc2FnZXNcbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAncmVhY3RzdHJhcCdcbi8vIGltcG9ydCBTdHlsZXMgZnJvbSAnLi9jc3MvaW5kZXguc2NzcydcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuY2xhc3MgRXJyb3JQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvckNvZGU6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIHVybDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyh7IHJlcywgeGhyIH0pIHtcbiAgICBjb25zdCBlcnJvckNvZGUgPSByZXMgPyByZXMuc3RhdHVzQ29kZSA6ICh4aHIgPyB4aHIuc3RhdHVzIDogbnVsbClcbiAgICByZXR1cm4geyBlcnJvckNvZGUgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciByZXNwb25zZVxuICAgIHN3aXRjaCAodGhpcy5wcm9wcy5lcnJvckNvZGUpIHtcbiAgICAgIGNhc2UgMjAwOiAvLyBBbHNvIGRpc3BsYXkgYSA0MDQgaWYgc29tZW9uZSByZXF1ZXN0cyAvX2Vycm9yIGV4cGxpY2l0bHlcbiAgICAgIGNhc2UgNDA0OlxuICAgICAgICByZXNwb25zZSA9IChcbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHRleHQtY2VudGVyIHRpdGxlIG10LTMgbWItM1wiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1hZ2VzLzQwNC5wbmdcIiAvPlxuICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgdGV4dC1jZW50ZXIgZm9udC0yNSBtdC0zXCIgc3R5bGU9e3tjb2xvcjogXCIjZDVkOGYzXCJ9fT5cbiAgICAgICAgICAgICAgQ2jDum5nIHTDtGkgeGluIGzhu5dpLiBUcmFuZyBi4bqhbiB0w6xtIGtp4bq/bSBraMO0bmcgdOG7k24gdOG6oWlcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBvZmZzZXQtbWQtMyBtdC0zIHRleHQtY2VudGVyIGV4cGxhaW4gZm9udC0xNFwiPlxuICAgICAgICAgICAgICBUaOG6rXQga2jDtG5nIG1heSBsw6AgdHJhbmcgYuG6oW4gxJFhbmcgdMOsbSBraeG6v20ga2jDtG5nIHRo4buDIHTDrG0gdGjhuqV5LiBOw7MgY8OzIHRo4buDIHThuqFtIHRo4budaSBraMO0bmcgY8OzLCBkaSBjaHV54buDbiBob+G6t2Mga2jDtG5nIGPDsm4gdOG7k24gdOG6oWkuIEtp4buDbSB0cmEgVXJsIG3DoCBi4bqhbiDEkcOjIG5o4bqtcCBjaG8gYuG6pXQga+G7syBs4buXaSBuw6BvIHbDoCB0aOG7rSBs4bqhaS5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgdGV4dC1jZW50ZXIgbXQtM1wiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBmb250LXdlaWdodC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgVuG7gSB0cmFuZyBjaOG7p1xuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiL3N0YXRpYy9pbWFnZXMvYmFja2dyb3VuZDQwNC5qcGdcIik7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIG1pbi1oZWlnaHQgOiAxMDAlO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogICBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2EtdHRmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMXJlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOXJlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6MTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg1LCA4MywgMTY0LCAwLjYpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgIGhlaWdodCA6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgLmNvbnRhaW5lcntcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAudGl0bGV7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwcHg7XG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIDUwMDpcbiAgICAgICAgcmVzcG9uc2UgPSAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJwdC01IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTRcIj5JbnRlcm5hbCBTZXJ2ZXIgRXJyb3I8L2gxPlxuICAgICAgICAgICAgICA8cD5BbiBpbnRlcm5hbCBzZXJ2ZXIgZXJyb3Igb2NjdXJyZWQuPC9wPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJlc3BvbnNlID0gKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwicHQtNSB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS00XCI+SFRUUCB7dGhpcy5wcm9wcy5lcnJvckNvZGV9IEVycm9yPC9oMT5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgQW4gPHN0cm9uZz5IVFRQIHt0aGlzLnByb3BzLmVycm9yQ29kZX08L3N0cm9uZz4gZXJyb3Igb2NjdXJyZWQgd2hpbGVcbiAgICAgICAgICAgICAgICB0cnlpbmcgdG8gYWNjZXNzIDxzdHJvbmc+e3RoaXMucHJvcHMucm91dGVyLnBhdGhuYW1lfTwvc3Ryb25nPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiByZXNwb25zZVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihFcnJvclBhZ2UpIl19 */\n/*@ sourceURL=pages/_error.js */"}));break;case 500:response=_react.default.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:87}},_react.default.createElement(_head.default,{__source:{fileName:_jsxFileName,lineNumber:88}}),_react.default.createElement(_reactstrap.Container,{className:"pt-5 text-center",__source:{fileName:_jsxFileName,lineNumber:90}},_react.default.createElement("h1",{className:"display-4",__source:{fileName:_jsxFileName,lineNumber:91}},"Internal Server Error"),_react.default.createElement("p",{__source:{fileName:_jsxFileName,lineNumber:92}},"An internal server error occurred.")));break;default:response=_react.default.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:99}},_react.default.createElement(_head.default,{__source:{fileName:_jsxFileName,lineNumber:100}}),_react.default.createElement(_reactstrap.Container,{className:"pt-5 text-center",__source:{fileName:_jsxFileName,lineNumber:102}},_react.default.createElement("h1",{className:"display-4",__source:{fileName:_jsxFileName,lineNumber:103}},"HTTP ",this.props.errorCode," Error"),_react.default.createElement("p",{__source:{fileName:_jsxFileName,lineNumber:104}},"An ",_react.default.createElement("strong",{__source:{fileName:_jsxFileName,lineNumber:105}},"HTTP ",this.props.errorCode)," error occurred while trying to access ",_react.default.createElement("strong",{__source:{fileName:_jsxFileName,lineNumber:106}},this.props.router.pathname))));}return response;}}],[{key:"propTypes",value:function propTypes(){return{errorCode:_react.default.PropTypes.number.isRequired,url:_react.default.PropTypes.string.isRequired};}},{key:"getInitialProps",value:function getInitialProps(_ref){var res=_ref.res,xhr=_ref.xhr;var errorCode=res?res.statusCode:xhr?xhr.status:null;return{errorCode:errorCode};}}]);return ErrorPage;}(_react.default.Component);var _default=(0, _router.withRouter)(ErrorPage);exports.default=_default;(function(Component,route){if(!Component)return;module.hot.accept();Component.__route=route;if(module.hot.status()==='idle')return;var components=next.router.components;for(var r in components){if(!components.hasOwnProperty(r))continue;if(components[r].Component.__route===route){next.router.update(r,Component);}}})(typeof __webpack_exports__!=='undefined'?__webpack_exports__.default:module.exports.default||module.exports,"/_error");/***/},/***/2:/***/function _(module,exports,__webpack_require__){module.exports=__webpack_require__("./pages/_error.js");/***/}},[2]);return{page:comp.default};});

}());

//# sourceMappingURL=_error.js.map