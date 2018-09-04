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

var dP$1 = _objectDp.f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || _descriptors && dP$1(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});

var _core = createCommonjsModule(function (module) {
var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});
var _core_1 = _core.version;

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

var f$1 = {}.propertyIsEnumerable;

var _objectPie = {
	f: f$1
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

var gOPD = Object.getOwnPropertyDescriptor;

var f$2 = _descriptors ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = _toIobject(O);
  P = _toPrimitive(P, true);
  if (_ie8DomDefine) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
};

var _objectGopd = {
	f: f$2
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

// 19.1.3.19 Object.setPrototypeOf(O, proto)

_export(_export.S, 'Object', { setPrototypeOf: _setProto.set });

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

var f$3 = Object.getOwnPropertySymbols;

var _objectGops = {
	f: f$3
};

// 7.1.13 ToObject(argument)

var _toObject = function (it) {
  return Object(_defined(it));
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

// getting tag from 19.1.3.6 Object.prototype.toString()

var TAG = _wks('toStringTag');
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
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
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

var _iterators = {};

// check on default Array iterator

var ITERATOR = _wks('iterator');
var ArrayProto = Array.prototype;

var _isArrayIter = function (it) {
  return it !== undefined && (_iterators.Array === it || ArrayProto[ITERATOR] === it);
};

var ITERATOR$1 = _wks('iterator');

var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR$1]
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

var document$2 = _global.document;
var _html = document$2 && document$2.documentElement;

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

var f$4 = function (C) {
  return new PromiseCapability(C);
};

var _newPromiseCapability = {
	f: f$4
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

var def = _objectDp.f;

var TAG$1 = _wks('toStringTag');

var _setToStringTag = function (it, tag, stat) {
  if (it && !_has(it = stat ? it : it.prototype, TAG$1)) def(it, TAG$1, { configurable: true, value: tag });
};

var SPECIES$1 = _wks('species');

var _setSpecies = function (KEY) {
  var C = _global[KEY];
  if (_descriptors && C && !C[SPECIES$1]) _objectDp.f(C, SPECIES$1, {
    configurable: true,
    get: function () { return this; }
  });
};

var ITERATOR$2 = _wks('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR$2]();
  riter['return'] = function () { SAFE_CLOSING = true; };
} catch (e) { /* empty */ }

var _iterDetect = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR$2]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR$2] = function () { return iter; };
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

// 7.2.2 IsArray(argument)

var _isArray = Array.isArray || function isArray(arg) {
  return _cof(arg) == 'Array';
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

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

var f$6 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return _objectKeysInternal(O, hiddenKeys);
};

var _objectGopn = {
	f: f$6
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window

var gOPN = _objectGopn.f;
var toString$1 = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

var f$7 = function getOwnPropertyNames(it) {
  return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(_toIobject(it));
};

var _objectGopnExt = {
	f: f$7
};

// ECMAScript 6 symbols shim





var META = _meta.KEY;



















var gOPD$1 = _objectGopd.f;
var dP$2 = _objectDp.f;
var gOPN$1 = _objectGopnExt.f;
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
var ObjectProto = Object[PROTOTYPE$2];
var USE_NATIVE$1 = typeof $Symbol == 'function';
var QObject = _global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = _descriptors && _fails(function () {
  return _objectCreate(dP$2({}, 'a', {
    get: function () { return dP$2(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD$1(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP$2(it, key, D);
  if (protoDesc && it !== ObjectProto) dP$2(ObjectProto, key, protoDesc);
} : dP$2;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE$2]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE$1 && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  _anObject(it);
  key = _toPrimitive(key, true);
  _anObject(D);
  if (_has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!_has(it, HIDDEN)) dP$2(it, HIDDEN, _propertyDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (_has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _objectCreate(D, { enumerable: _propertyDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP$2(it, key, D);
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
  if (this === ObjectProto && _has(AllSymbols, key) && !_has(OPSymbols, key)) return false;
  return E || !_has(this, key) || !_has(AllSymbols, key) || _has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = _toIobject(it);
  key = _toPrimitive(key, true);
  if (it === ObjectProto && _has(AllSymbols, key) && !_has(OPSymbols, key)) return;
  var D = gOPD$1(it, key);
  if (D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN$1(_toIobject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!_has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN$1(IS_OP ? OPSymbols : _toIobject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (_has(AllSymbols, key = names[i++]) && (IS_OP ? _has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE$1) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (_has(this, HIDDEN) && _has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, _propertyDesc(1, value));
    };
    if (_descriptors && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
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
    _redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  _wksExt.f = function (name) {
    return wrap(_wks(name));
  };
}

_export(_export.G + _export.W + _export.F * !USE_NATIVE$1, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)_wks(es6Symbols[j++]);

for (var wellKnownSymbols = _objectKeys(_wks.store), k = 0; wellKnownSymbols.length > k;) _wksDefine(wellKnownSymbols[k++]);

_export(_export.S + _export.F * !USE_NATIVE$1, 'Symbol', {
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

_export(_export.S + _export.F * !USE_NATIVE$1, 'Object', {
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
$JSON && _export(_export.S + _export.F * (!USE_NATIVE$1 || _fails(function () {
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

webpackHotUpdate(5,{/***/"./pages/project/detail.js":/***/function pagesProjectDetailJs(module,exports,__webpack_require__){Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _style=_interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/styled-jsx/style.js"));var _regenerator=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"));var _react=_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var _proDetail=_interopRequireDefault(__webpack_require__("./components/pro-detail.js"));var _helpers=__webpack_require__("./libraries/helpers.js");var _routes=__webpack_require__("./routes.js");var _imageModal=_interopRequireDefault(__webpack_require__("./components/image-modal.js"));__webpack_require__("./node_modules/isomorphic-fetch/fetch-npm-browserify.js");var _detail=_interopRequireDefault(__webpack_require__("./pages/project/detail.css"));var _jsxFileName="/Applications/MAMP/htdocs/my-next-app/pages/project/detail.js";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function step(key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _next(value){step("next",value);}function _throw(err){step("throw",err);}_next();});};}function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var APIURL="https://api.9houz.com/"+"api/";var APIPROJECT=APIURL+'project/';var APIPRO=APIURL+'provider/';var _default=/*#__PURE__*/function(_React$Component){_inherits(_default,_React$Component);function _default(){_classCallCheck(this,_default);return _possibleConstructorReturn(this,(_default.__proto__||Object.getPrototypeOf(_default)).apply(this,arguments));}_createClass(_default,[{key:"showPhoto",value:function showPhoto(e,id,slug){e.preventDefault();_routes.Router.push("/project?id=".concat(this.props.id,"&photoId=").concat(id,"&slug=").concat(slug),"/anh/".concat(id,"-").concat(slug));}},{key:"dismissModal",value:function dismissModal(id,slug){_routes.Router.pushRoute('project.detail',{id:id,slug:"".concat(slug)});}},{key:"render",value:function render(){var _this=this;var _props=this.props,url=_props.url,provider=_props.provider,data=_props.data,project=_props.project,images=_props.images,relateData=_props.relateData,listProjects=_props.listProjects;return _react.default.createElement(_proDetail.default,_extends({provider_id:provider.id,provider_slug:provider.slug,data:data},this.props,{css:_detail.default,__source:{fileName:_jsxFileName,lineNumber:49}}),url.query.photoId&&_react.default.createElement(_imageModal.default,{id:url.query.photoId,slug:url.query.slug,detail:false,popup:false,currentPath:url.pathname,onDismiss:function onDismiss(){return _this.dismissModal(url.query.id,url.query.slug);},__source:{fileName:_jsxFileName,lineNumber:52}}),_react.default.createElement("div",{id:"cat",__source:{fileName:_jsxFileName,lineNumber:61},className:"jsx-3233782465"+" "+"project-detail-main"},_react.default.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:62},className:"jsx-3233782465"+" "+"project-detail-container"},_react.default.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:69},className:"jsx-3233782465"+" "+"row"},_react.default.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:70},className:"jsx-3233782465"+" "+"col-12 col-md-8"},_react.default.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:71},className:"jsx-3233782465"+" "+"about bg-white p-3 border border-gray"},_react.default.createElement("h1",{__source:{fileName:_jsxFileName,lineNumber:72},className:"jsx-3233782465"+" "+"font-25 font-weight-normal"},project.name),_react.default.createElement("p",{dangerouslySetInnerHTML:{__html:project.descriptions},__source:{fileName:_jsxFileName,lineNumber:73},className:"jsx-3233782465"+" "+"font-weight-normal my-3 project-description"}),project.address&&_react.default.createElement("p",{__source:{fileName:_jsxFileName,lineNumber:76},className:"jsx-3233782465"+" "+"font-14 font-weight-normal"},_react.default.createElement("strong",{__source:{fileName:_jsxFileName,lineNumber:76},className:"jsx-3233782465"},"\u0110\u1ECBa ch\u1EC9"),": "+project.address),project.more_infos&&(0, _helpers.mapObject)(project.more_infos,function(index,value){if(value!='')return _react.default.createElement("p",{key:index,__source:{fileName:_jsxFileName,lineNumber:80},className:"jsx-3233782465"+" "+"font-14 font-weight-normal"},_react.default.createElement("strong",{__source:{fileName:_jsxFileName,lineNumber:81},className:"jsx-3233782465"},(0, _helpers.ucfirst)(index)),": "+value);}),_react.default.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:84},className:"jsx-3233782465"+" "+"about bg-white py-3"},_react.default.createElement("ul",{__source:{fileName:_jsxFileName,lineNumber:85},className:"jsx-3233782465"+" "+"list-unstyled"},images&&images.map(function(value,index){return _react.default.createElement("li",{key:index,__source:{fileName:_jsxFileName,lineNumber:88},className:"jsx-3233782465"+" "+"my-3"},_react.default.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:89},className:"jsx-3233782465"+" "+"project-title text-center mx-auto"},_react.default.createElement("h2",{__source:{fileName:_jsxFileName,lineNumber:90},className:"jsx-3233782465"+" "+"font-22 text-black-100 position-relative"},_react.default.createElement("span",{__source:{fileName:_jsxFileName,lineNumber:91},className:"jsx-3233782465"}," ",value.name&&value.name," "))),_react.default.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:94},className:"jsx-3233782465"+" "+"project-image my-3"},value.status==1?_react.default.createElement(_routes.Link,{route:"image",params:{id:value.id,slug:"".concat(value.slug)},__source:{fileName:_jsxFileName,lineNumber:97}},_react.default.createElement("a",{onClick:function onClick(e){return _this.showPhoto(e,value.id,value.slug);},__source:{fileName:_jsxFileName,lineNumber:98},className:"jsx-3233782465"+" "+'photoLink'},_react.default.createElement("img",{src:value.large_path,alt:value.name,__source:{fileName:_jsxFileName,lineNumber:99},className:"jsx-3233782465"+" "+"img-fluid"}))):_react.default.createElement("a",{href:"javascript:void(0)",rel:"nofollow",__source:{fileName:_jsxFileName,lineNumber:103},className:"jsx-3233782465"+" "+'photoLink'},_react.default.createElement("img",{src:value.large_path,alt:value.name,__source:{fileName:_jsxFileName,lineNumber:104},className:"jsx-3233782465"+" "+"img-fluid"}))),_react.default.createElement("div",{dangerouslySetInnerHTML:{__html:value.descriptions},__source:{fileName:_jsxFileName,lineNumber:108},className:"jsx-3233782465"+" "+"project-description"}));}))))),_react.default.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:140},className:"jsx-3233782465"+" "+"col-12 col-md-4 project-sidebar"},_react.default.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:141},className:"jsx-3233782465"+" "+"bg-white p-3"},_react.default.createElement("p",{__source:{fileName:_jsxFileName,lineNumber:142},className:"jsx-3233782465"+" "+"sub-title position-relative"},"D\u1EF1 \xE1n c\xF9ng chuy\xEAn gia"),_react.default.createElement("ul",{__source:{fileName:_jsxFileName,lineNumber:143},className:"jsx-3233782465"+" "+"list-unstyled mt-3"},listProjects&&listProjects.map(function(value,index){return _react.default.createElement("li",{key:index,__source:{fileName:_jsxFileName,lineNumber:146},className:"jsx-3233782465"+" "+"my-3 listProject"},_react.default.createElement(_routes.Link,{route:"project.detail",params:{id:value.id,slug:value.slug},__source:{fileName:_jsxFileName,lineNumber:147}},_react.default.createElement("a",{__source:{fileName:_jsxFileName,lineNumber:148},className:"jsx-3233782465"+" "+"nav-link border-0 font-14 font-weight-bold"},_react.default.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:149},className:"jsx-3233782465"+" "+"media"},_react.default.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:150},className:"jsx-3233782465"+" "+"media-image mr-3"},_react.default.createElement("img",{src:value.avatar,alt:"Generic placeholder image",__source:{fileName:_jsxFileName,lineNumber:151},className:"jsx-3233782465"})),_react.default.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:153},className:"jsx-3233782465"+" "+"media-body"},_react.default.createElement("p",{__source:{fileName:_jsxFileName,lineNumber:154},className:"jsx-3233782465"+" "+"mt-0 mb-2 font-14 text-black"},value.name),_react.default.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:155},className:"jsx-3233782465"+" "+"d-inline pro-info"},_react.default.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:156},className:"jsx-3233782465"+" "+"info project-info mr-3 float-left"},_react.default.createElement("i",{"aria-hidden":"true",__source:{fileName:_jsxFileName,lineNumber:157},className:"jsx-3233782465"+" "+"fa fa-picture-o my-auto"})," ",value.total+' ảnh'),value.address&&_react.default.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:160},className:"jsx-3233782465"+" "+"info location-info"},_react.default.createElement("i",{"aria-hidden":"true",__source:{fileName:_jsxFileName,lineNumber:161},className:"jsx-3233782465"+" "+"fa fa-map-marker my-auto"})," ",value.address)))))));}),_react.default.createElement("li",{__source:{fileName:_jsxFileName,lineNumber:172},className:"jsx-3233782465"+" "+"text-right border border-bottom-0 border-left-0 border-right-0 pt-3"},_react.default.createElement(_routes.Link,{route:"pro.project",params:{id:provider.id,slug:provider.slug},__source:{fileName:_jsxFileName,lineNumber:173}},_react.default.createElement("a",{href:"",__source:{fileName:_jsxFileName,lineNumber:174},className:"jsx-3233782465"+" "+"text-primary"}," Xem th\xEAm "))))))),_react.default.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:181},className:"jsx-3233782465"+" "+"project-more mt-3"},_react.default.createElement("p",{__source:{fileName:_jsxFileName,lineNumber:182},className:"jsx-3233782465"+" "+"font-25"},"M\u1ECDi ng\u01B0\u1EDDi th\u01B0\u1EDDng xem th\xEAm"),_react.default.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:183},className:"jsx-3233782465"+" "+"row"},relateData&&(0, _helpers.mapObject)(relateData,function(index,value){return _react.default.createElement("div",{key:index,__source:{fileName:_jsxFileName,lineNumber:186},className:"jsx-3233782465"+" "+"col-12 col-md-3"},_react.default.createElement(_routes.Link,{route:"project.detail",params:{id:index,slug:"".concat(value.slug)},__source:{fileName:_jsxFileName,lineNumber:187}},_react.default.createElement("a",{__source:{fileName:_jsxFileName,lineNumber:188},className:"jsx-3233782465"+" "+"nav-link border-0 font-14 font-weight-bold px-0"},_react.default.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:189},className:"jsx-3233782465"+" "+"card border-none"},_react.default.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:190},className:"jsx-3233782465"+" "+"card-image"},_react.default.createElement("img",{src:value.avatar,alt:"Card image cap",__source:{fileName:_jsxFileName,lineNumber:191},className:"jsx-3233782465"+" "+"card-img-top"})),_react.default.createElement("div",{__source:{fileName:_jsxFileName,lineNumber:193},className:"jsx-3233782465"+" "+"card-body bg-gray px-0 py-2"},_react.default.createElement("p",{__source:{fileName:_jsxFileName,lineNumber:194},className:"jsx-3233782465"+" "+"card-title text-black"},value.name))))));}))))),_react.default.createElement(_style.default,{styleId:"3233782465",css:".provider{background-color:#ddd !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2plY3QvZGV0YWlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZNMkIsQUFFb0MsaUNBQUMiLCJmaWxlIjoicGFnZXMvcHJvamVjdC9kZXRhaWwuanMiLCJzb3VyY2VSb290IjoiL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9teS1uZXh0LWFwcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm92aWRlckRldGFpbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Byby1kZXRhaWwnXG5pbXBvcnQge21hcE9iamVjdCwgdWNmaXJzdH0gZnJvbSBcIi4uLy4uL2xpYnJhcmllcy9oZWxwZXJzXCI7XG5pbXBvcnQge0xpbmssIFJvdXRlcn0gZnJvbSAnLi4vLi4vcm91dGVzJ1xuaW1wb3J0IEltYWdlTW9kYWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9pbWFnZS1tb2RhbCc7XG5pbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnXG5pbXBvcnQgY3NzIGZyb20gXCIuL2RldGFpbC5jc3NcIjtcblxuY29uc3QgQVBJVVJMID0gcHJvY2Vzcy5lbnYuRE9NQUlOICsgcHJvY2Vzcy5lbnYuQVBJVVJJXG5jb25zdCBBUElQUk9KRUNUID0gQVBJVVJMICsgJ3Byb2plY3QvJ1xuY29uc3QgQVBJUFJPID0gQVBJVVJMICsgJ3Byb3ZpZGVyLydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHtxdWVyeX0pIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChBUElQUk9KRUNUICsgcXVlcnkuaWQpXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICBjb25zdCByZXNQcm8gPSBhd2FpdCBmZXRjaChBUElQUk8gKyBkYXRhLnByb2plY3QudXNlcl9pZClcbiAgICBjb25zdCBkYXRhUHJvID0gYXdhaXQgcmVzUHJvLmpzb24oKVxuICAgIHJldHVybiB7XG4gICAgICBpZDogcXVlcnkuaWRcbiAgICAgICwgZGF0YTogZGF0YVByb1xuICAgICAgLCBwcm92aWRlcjogZGF0YVByby5wcm92aWRlclxuICAgICAgLCBwcm9qZWN0OiBkYXRhLnByb2plY3RcbiAgICAgICwgaW1hZ2VzOiBkYXRhLmltYWdlcy5kYXRhXG4gICAgICAsIHNsdWc6IHF1ZXJ5LnNsdWdcbiAgICAgICwgdGl0bGU6IGRhdGEuc2VvLnRpdGxlXG4gICAgICAsIGRlczogZGF0YS5zZW8uZGVzXG4gICAgICAsIGNhbm9uaWNhbDogZGF0YS5zZW8uY2Fub25pY2FsXG4gICAgICAsIHJvYm90czogZGF0YS5zZW8ucm9ib3RzXG4gICAgICAsIG9nX3VybDogZGF0YS5zZW8udXJsXG4gICAgICAsIHVybF9pbWFnZXM6IGRhdGEuc2VvLnVybF9pbWFnZVxuICAgICAgLCBoZWFkZXJQcm9qZWN0czogZGF0YVByby5oZWFkZXJQcm9qZWN0c1xuICAgICAgLCBoZWFkZXJDYXRlZ29yaWVzOiBkYXRhUHJvLmhlYWRlckNhdGVnb3JpZXNcbiAgICAgICwgZGF0YUJhc2U6IGRhdGFQcm8uZGF0YUJhc2VcbiAgICAgICwgcmVsYXRlRGF0YSA6IGRhdGEucmVsYXRlRGF0YVxuICAgICAgLCBsaXN0UHJvamVjdHMgOiBkYXRhLmxpc3RQcm9qZWN0c1xuICAgIH1cbiAgfVxuICBzaG93UGhvdG8gKGUsIGlkICwgc2x1Zykge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIFJvdXRlci5wdXNoKGAvcHJvamVjdD9pZD0ke3RoaXMucHJvcHMuaWR9JnBob3RvSWQ9JHtpZH0mc2x1Zz0ke3NsdWd9YCxgL2FuaC8ke2lkfS0ke3NsdWd9YClcbiAgfVxuICBkaXNtaXNzTW9kYWwgKGlkICwgc2x1Zykge1xuICAgIFJvdXRlci5wdXNoUm91dGUoJ3Byb2plY3QuZGV0YWlsJywge2lkOiBpZCAsIHNsdWcgOiBgJHtzbHVnfWB9KVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7dXJsICwgcHJvdmlkZXIsIGRhdGEsIHByb2plY3QsIGltYWdlcyAscmVsYXRlRGF0YSAsIGxpc3RQcm9qZWN0c30gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8UHJvdmlkZXJEZXRhaWwgcHJvdmlkZXJfaWQ9e3Byb3ZpZGVyLmlkfSBwcm92aWRlcl9zbHVnPXtwcm92aWRlci5zbHVnfSBkYXRhPXtkYXRhfSB7Li4udGhpcy5wcm9wc30gY3NzPXtjc3N9PlxuICAgICAgICB7XG4gICAgICAgICAgdXJsLnF1ZXJ5LnBob3RvSWQgJiZcbiAgICAgICAgICA8SW1hZ2VNb2RhbFxuICAgICAgICAgICAgaWQ9e3VybC5xdWVyeS5waG90b0lkfVxuICAgICAgICAgICAgc2x1Zz17dXJsLnF1ZXJ5LnNsdWd9XG4gICAgICAgICAgICBkZXRhaWw9e2ZhbHNlfVxuICAgICAgICAgICAgcG9wdXA9e2ZhbHNlfVxuICAgICAgICAgICAgY3VycmVudFBhdGg9e3VybC5wYXRobmFtZX1cbiAgICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gdGhpcy5kaXNtaXNzTW9kYWwodXJsLnF1ZXJ5LmlkLHVybC5xdWVyeS5zbHVnKX1cbiAgICAgICAgICAvPlxuICAgICAgICB9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1kZXRhaWwtbWFpblwiIGlkPVwiY2F0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWRldGFpbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIHsvKjxuYXYgYXJpYS1sYWJlbD1cImJyZWFkY3J1bWJcIj4qL31cbiAgICAgICAgICAgICAgey8qPG9sIGNsYXNzTmFtZT1cImJyZWFkY3J1bWIgcC0wIHBsLTBcIj4qL31cbiAgICAgICAgICAgICAgICB7Lyo8bGkgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYi1pdGVtXCI+PGEgaHJlZj1cIiNcIj5Ib21lPC9hPjwvbGk+Ki99XG4gICAgICAgICAgICAgICAgey8qPGxpIGNsYXNzTmFtZT1cImJyZWFkY3J1bWItaXRlbSBhY3RpdmVcIiBhcmlhLWN1cnJlbnQ9XCJwYWdlXCI+TGlicmFyeTwvbGk+Ki99XG4gICAgICAgICAgICAgIHsvKjwvb2w+Ki99XG4gICAgICAgICAgICB7Lyo8L25hdj4qL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC04XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dCBiZy13aGl0ZSBwLTMgYm9yZGVyIGJvcmRlci1ncmF5XCI+XG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC0yNSBmb250LXdlaWdodC1ub3JtYWxcIj57cHJvamVjdC5uYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ub3JtYWwgbXktMyBwcm9qZWN0LWRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBwcm9qZWN0LmRlc2NyaXB0aW9uc319Lz5cbiAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LmFkZHJlc3MgJiZcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtMTQgZm9udC13ZWlnaHQtbm9ybWFsXCI+PHN0cm9uZz7EkOG7i2EgY2jhu4k8L3N0cm9uZz57XCI6IFwiICsgcHJvamVjdC5hZGRyZXNzfTwvcD59XG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3QubW9yZV9pbmZvcyAmJiBtYXBPYmplY3QocHJvamVjdC5tb3JlX2luZm9zLCBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9ICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxwIGNsYXNzTmFtZT1cImZvbnQtMTQgZm9udC13ZWlnaHQtbm9ybWFsXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3VjZmlyc3QoaW5kZXgpfTwvc3Ryb25nPntcIjogXCIgKyB2YWx1ZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0IGJnLXdoaXRlIHB5LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZXMgJiYgaW1hZ2VzLm1hcCgodmFsdWUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJteS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LXRpdGxlIHRleHQtY2VudGVyIG14LWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LTIyIHRleHQtYmxhY2stMTAwIHBvc2l0aW9uLXJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiB7dmFsdWUubmFtZSAmJiB2YWx1ZS5uYW1lfSA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1pbWFnZSBteS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLnN0YXR1cyA9PSAxID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayByb3V0ZT0naW1hZ2UnIHBhcmFtcz17e2lkOiB2YWx1ZS5pZCwgc2x1ZzogYCR7dmFsdWUuc2x1Z31gfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J3Bob3RvTGluaycgb25DbGljaz17KGUpID0+IHRoaXMuc2hvd1Bob3RvKGUsIHZhbHVlLmlkLCB2YWx1ZS5zbHVnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt2YWx1ZS5sYXJnZV9wYXRofSBhbHQ9e3ZhbHVlLm5hbWV9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBjbGFzc05hbWU9J3Bob3RvTGluaycgcmVsPVwibm9mb2xsb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt2YWx1ZS5sYXJnZV9wYXRofSBhbHQ9e3ZhbHVlLm5hbWV9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiB2YWx1ZS5kZXNjcmlwdGlvbnN9fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1rZXl3b3JkIGJnLXdoaXRlIHAtMyBteS00XCI+Ki99XG4gICAgICAgICAgICAgICAgICB7Lyo8cCBjbGFzc05hbWU9XCJrZXl3b3JkLXRpdGxlIGZvbnQtMjVcIj5U4burIGtow7NhPC9wPiovfVxuICAgICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJwdC0wIGtleXdvcmQtdGFnc1wiPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPHNwYW4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZm9udC0xMiBmb250LXdlaWdodC1ub3JtYWwgYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS13aGl0ZSBib3JkZXIgYm9yZGVyLXByaW1hcnkgcHktMiBweC0zIG1iLTJcIj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qVGhp4bq/dCBr4bq/IG7hu5lpIHRo4bqldCBjaHVuZyBjxrAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjwvc3Bhbj4qL31cbiAgICAgICAgICAgICAgICAgICAgey8qPHNwYW4qL31cbiAgICAgICAgICAgICAgICAgICAgICB7LypjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmb250LTEyIGZvbnQtd2VpZ2h0LW5vcm1hbCBiYWRnZSBiYWRnZS1waWxsIGJhZGdlLXdoaXRlIGJvcmRlciBib3JkZXItcHJpbWFyeSBweS0yIHB4LTMgbWItMlwiPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7LypUaGnhur90IGvhur8gbuG7mWkgdGjhuqV0IGNodW5nIGPGsCovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPC9zcGFuPiovfVxuICAgICAgICAgICAgICAgICAgICB7Lyo8c3BhbiovfVxuICAgICAgICAgICAgICAgICAgICAgIHsvKmNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZvbnQtMTIgZm9udC13ZWlnaHQtbm9ybWFsIGJhZGdlIGJhZGdlLXBpbGwgYmFkZ2Utd2hpdGUgYm9yZGVyIGJvcmRlci1wcmltYXJ5IHB5LTIgcHgtMyBtYi0yXCI+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKlRoaeG6v3Qga+G6vyBu4buZaSB0aOG6pXQgY2h1bmcgY8awKi99XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8L3NwYW4+PHNwYW4qL31cbiAgICAgICAgICAgICAgICAgICAgey8qY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZm9udC0xMiBmb250LXdlaWdodC1ub3JtYWwgYmFkZ2UgYmFkZ2UtcGlsbCBiYWRnZS13aGl0ZSBib3JkZXIgYm9yZGVyLXByaW1hcnkgcHktMiBweC0zIG1iLTJcIj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qVGhp4bq/dCBr4bq/IG7hu5lpIHRo4bqldCBjaHVuZyBjxrAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjwvc3Bhbj48c3BhbiovfVxuICAgICAgICAgICAgICAgICAgICB7LypjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmb250LTEyIGZvbnQtd2VpZ2h0LW5vcm1hbCBiYWRnZSBiYWRnZS1waWxsIGJhZGdlLXdoaXRlIGJvcmRlciBib3JkZXItcHJpbWFyeSBweS0yIHB4LTMgbWItMlwiPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7LypUaGnhur90IGvhur8gbuG7mWkgdGjhuqV0IGNodW5nIGPGsCovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPC9zcGFuPiovfVxuICAgICAgICAgICAgICAgICAgey8qPC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgey8qPC9kaXY+Ki99XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNCBwcm9qZWN0LXNpZGViYXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtM1wiPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3ViLXRpdGxlIHBvc2l0aW9uLXJlbGF0aXZlXCI+ROG7sSDDoW4gY8O5bmcgY2h1ecOqbiBnaWE8L3A+XG4gICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZCBtdC0zXCI+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBsaXN0UHJvamVjdHMgJiYgbGlzdFByb2plY3RzLm1hcCgodmFsdWUsaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJteS0zIGxpc3RQcm9qZWN0XCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPSdwcm9qZWN0LmRldGFpbCcgcGFyYW1zPXt7aWQ6IHZhbHVlLmlkICwgc2x1ZzogdmFsdWUuc2x1ZyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayBib3JkZXItMCBmb250LTE0IGZvbnQtd2VpZ2h0LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1pbWFnZSBtci0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3ZhbHVlLmF2YXRhcn0gYWx0PVwiR2VuZXJpYyBwbGFjZWhvbGRlciBpbWFnZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTAgbWItMiBmb250LTE0IHRleHQtYmxhY2tcIj57dmFsdWUubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWlubGluZSBwcm8taW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvIHByb2plY3QtaW5mbyBtci0zIGZsb2F0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtcGljdHVyZS1vIG15LWF1dG9cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IHt2YWx1ZS50b3RhbCArICcg4bqjbmgnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWUuYWRkcmVzcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8gbG9jYXRpb24taW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLW1hcC1tYXJrZXIgbXktYXV0b1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4ge3ZhbHVlLmFkZHJlc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0IGJvcmRlciBib3JkZXItYm90dG9tLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBwdC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgcm91dGU9XCJwcm8ucHJvamVjdFwiIHBhcmFtcz17eyBpZDogcHJvdmlkZXIuaWQgLCBzbHVnIDogcHJvdmlkZXIuc2x1ZyB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5XCI+IFhlbSB0aMOqbSA8L2E+XG4gICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LW1vcmUgbXQtM1wiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtMjVcIj5N4buNaSBuZ8aw4budaSB0aMaw4budbmcgeGVtIHRow6ptPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJlbGF0ZURhdGEgJiYgbWFwT2JqZWN0KHJlbGF0ZURhdGEsKGluZGV4LHZhbHVlKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTNcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPSdwcm9qZWN0LmRldGFpbCcgcGFyYW1zPXt7aWQ6IGluZGV4ICwgc2x1ZzogYCR7dmFsdWUuc2x1Z31gfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rIGJvcmRlci0wIGZvbnQtMTQgZm9udC13ZWlnaHQtYm9sZCBweC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBib3JkZXItbm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1pbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBzcmM9e3ZhbHVlLmF2YXRhcn0gYWx0PVwiQ2FyZCBpbWFnZSBjYXBcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJnLWdyYXkgcHgtMCBweS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlIHRleHQtYmxhY2tcIj57dmFsdWUubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC5wcm92aWRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L1Byb3ZpZGVyRGV0YWlsPlxuICAgIClcbiAgfVxufSJdfQ== */\n/*@ sourceURL=pages/project/detail.js */"}));}}],[{key:"getInitialProps",value:function(){var _getInitialProps=_asyncToGenerator(/*#__PURE__*/_regenerator.default.mark(function _callee(_ref){var query,res,data,resPro,dataPro;return _regenerator.default.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:query=_ref.query;_context.next=3;return fetch(APIPROJECT+query.id);case 3:res=_context.sent;_context.next=6;return res.json();case 6:data=_context.sent;_context.next=9;return fetch(APIPRO+data.project.user_id);case 9:resPro=_context.sent;_context.next=12;return resPro.json();case 12:dataPro=_context.sent;return _context.abrupt("return",{id:query.id,data:dataPro,provider:dataPro.provider,project:data.project,images:data.images.data,slug:query.slug,title:data.seo.title,des:data.seo.des,canonical:data.seo.canonical,robots:data.seo.robots,og_url:data.seo.url,url_images:data.seo.url_image,headerProjects:dataPro.headerProjects,headerCategories:dataPro.headerCategories,dataBase:dataPro.dataBase,relateData:data.relateData,listProjects:data.listProjects});case 14:case"end":return _context.stop();}}},_callee,this);}));return function getInitialProps(_x){return _getInitialProps.apply(this,arguments);};}()}]);return _default;}(_react.default.Component);exports.default=_default;(function(Component,route){if(!Component)return;module.hot.accept();Component.__route=route;if(module.hot.status()==='idle')return;var components=next.router.components;for(var r in components){if(!components.hasOwnProperty(r))continue;if(components[r].Component.__route===route){next.router.update(r,Component);}}})(typeof __webpack_exports__!=='undefined'?__webpack_exports__.default:module.exports.default||module.exports,"/project/detail");/***/}});

}());

//# sourceMappingURL=5.5b457bfdd37609af4a93.hot-update.js.map