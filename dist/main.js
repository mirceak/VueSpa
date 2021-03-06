/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/single-spa/lib/esm/single-spa.min.js":
/*!***********************************************************!*\
  !*** ./node_modules/single-spa/lib/esm/single-spa.min.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BOOTSTRAPPING": () => (/* binding */ v),
/* harmony export */   "LOADING_SOURCE_CODE": () => (/* binding */ h),
/* harmony export */   "LOAD_ERROR": () => (/* binding */ O),
/* harmony export */   "MOUNTED": () => (/* binding */ g),
/* harmony export */   "MOUNTING": () => (/* binding */ w),
/* harmony export */   "NOT_BOOTSTRAPPED": () => (/* binding */ m),
/* harmony export */   "NOT_LOADED": () => (/* binding */ p),
/* harmony export */   "NOT_MOUNTED": () => (/* binding */ d),
/* harmony export */   "SKIP_BECAUSE_BROKEN": () => (/* binding */ P),
/* harmony export */   "UNMOUNTING": () => (/* binding */ y),
/* harmony export */   "UPDATING": () => (/* binding */ E),
/* harmony export */   "addErrorHandler": () => (/* binding */ c),
/* harmony export */   "checkActivityFunctions": () => (/* binding */ Tt),
/* harmony export */   "ensureJQuerySupport": () => (/* binding */ lt),
/* harmony export */   "getAppNames": () => (/* binding */ Ot),
/* harmony export */   "getAppStatus": () => (/* binding */ Pt),
/* harmony export */   "getMountedApps": () => (/* binding */ yt),
/* harmony export */   "mountRootParcel": () => (/* binding */ W),
/* harmony export */   "navigateToUrl": () => (/* binding */ et),
/* harmony export */   "pathToActiveWhen": () => (/* binding */ Dt),
/* harmony export */   "registerApplication": () => (/* binding */ bt),
/* harmony export */   "removeErrorHandler": () => (/* binding */ s),
/* harmony export */   "setBootstrapMaxTime": () => (/* binding */ J),
/* harmony export */   "setMountMaxTime": () => (/* binding */ H),
/* harmony export */   "setUnloadMaxTime": () => (/* binding */ V),
/* harmony export */   "setUnmountMaxTime": () => (/* binding */ Q),
/* harmony export */   "start": () => (/* binding */ Bt),
/* harmony export */   "triggerAppChange": () => (/* binding */ Lt),
/* harmony export */   "unloadApplication": () => (/* binding */ Nt),
/* harmony export */   "unregisterApplication": () => (/* binding */ At)
/* harmony export */ });
/* harmony import */ var single_spa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! single-spa */ "./node_modules/single-spa/lib/esm/single-spa.min.js");
/* single-spa@5.9.2 - ESM - prod */

var n = Object.freeze({
  __proto__: null,

  get start() {
    return Bt;
  },

  get ensureJQuerySupport() {
    return lt;
  },

  get setBootstrapMaxTime() {
    return J;
  },

  get setMountMaxTime() {
    return H;
  },

  get setUnmountMaxTime() {
    return Q;
  },

  get setUnloadMaxTime() {
    return V;
  },

  get registerApplication() {
    return bt;
  },

  get unregisterApplication() {
    return At;
  },

  get getMountedApps() {
    return yt;
  },

  get getAppStatus() {
    return Pt;
  },

  get unloadApplication() {
    return Nt;
  },

  get checkActivityFunctions() {
    return Tt;
  },

  get getAppNames() {
    return Ot;
  },

  get pathToActiveWhen() {
    return Dt;
  },

  get navigateToUrl() {
    return et;
  },

  get triggerAppChange() {
    return Lt;
  },

  get addErrorHandler() {
    return c;
  },

  get removeErrorHandler() {
    return s;
  },

  get mountRootParcel() {
    return W;
  },

  get NOT_LOADED() {
    return p;
  },

  get LOADING_SOURCE_CODE() {
    return h;
  },

  get NOT_BOOTSTRAPPED() {
    return m;
  },

  get BOOTSTRAPPING() {
    return v;
  },

  get NOT_MOUNTED() {
    return d;
  },

  get MOUNTING() {
    return w;
  },

  get UPDATING() {
    return E;
  },

  get LOAD_ERROR() {
    return O;
  },

  get MOUNTED() {
    return g;
  },

  get UNMOUNTING() {
    return y;
  },

  get SKIP_BECAUSE_BROKEN() {
    return P;
  }

});

function e(t) {
  return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
    return typeof t;
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  })(t);
}

function r(t, n, e) {
  return n in t ? Object.defineProperty(t, n, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[n] = e, t;
}

var o = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof __webpack_require__.g ? __webpack_require__.g : "undefined" != typeof self ? self : {}).CustomEvent,
    i = function () {
  try {
    var t = new o("cat", {
      detail: {
        foo: "bar"
      }
    });
    return "cat" === t.type && "bar" === t.detail.foo;
  } catch (t) {}

  return !1;
}() ? o : "undefined" != typeof document && "function" == typeof document.createEvent ? function (t, n) {
  var e = document.createEvent("CustomEvent");
  return n ? e.initCustomEvent(t, n.bubbles, n.cancelable, n.detail) : e.initCustomEvent(t, !1, !1, void 0), e;
} : function (t, n) {
  var e = document.createEventObject();
  return e.type = t, n ? (e.bubbles = Boolean(n.bubbles), e.cancelable = Boolean(n.cancelable), e.detail = n.detail) : (e.bubbles = !1, e.cancelable = !1, e.detail = void 0), e;
},
    u = [];

function a(t, n, e) {
  var r = l(t, n, e);
  u.length ? u.forEach(function (t) {
    return t(r);
  }) : setTimeout(function () {
    throw r;
  });
}

function c(t) {
  if ("function" != typeof t) throw Error(f(28, !1));
  u.push(t);
}

function s(t) {
  if ("function" != typeof t) throw Error(f(29, !1));
  var n = !1;
  return u = u.filter(function (e) {
    var r = e === t;
    return n = n || r, !r;
  }), n;
}

function f(t, n) {
  for (var e = arguments.length, r = new Array(e > 2 ? e - 2 : 0), o = 2; o < e; o++) r[o - 2] = arguments[o];

  return "single-spa minified message #".concat(t, ": ").concat(n ? n + " " : "", "See https://single-spa.js.org/error/?code=").concat(t).concat(r.length ? "&arg=".concat(r.join("&arg=")) : "");
}

function l(t, n, e) {
  var r,
      o = "".concat(S(n), " '").concat(A(n), "' died in status ").concat(n.status, ": ");

  if (t instanceof Error) {
    try {
      t.message = o + t.message;
    } catch (t) {}

    r = t;
  } else {
    console.warn(f(30, !1, n.status, A(n)));

    try {
      r = Error(o + JSON.stringify(t));
    } catch (n) {
      r = t;
    }
  }

  return r.appOrParcelName = A(n), n.status = e, r;
}

var p = "NOT_LOADED",
    h = "LOADING_SOURCE_CODE",
    m = "NOT_BOOTSTRAPPED",
    v = "BOOTSTRAPPING",
    d = "NOT_MOUNTED",
    w = "MOUNTING",
    g = "MOUNTED",
    E = "UPDATING",
    y = "UNMOUNTING",
    O = "LOAD_ERROR",
    P = "SKIP_BECAUSE_BROKEN";

function b(t) {
  return t.status === g;
}

function T(t) {
  try {
    return t.activeWhen(window.location);
  } catch (n) {
    return a(n, t, P), !1;
  }
}

function A(t) {
  return t.name;
}

function N(t) {
  return Boolean(t.unmountThisParcel);
}

function S(t) {
  return N(t) ? "parcel" : "application";
}

function _() {
  for (var t = arguments.length - 1; t > 0; t--) for (var n in arguments[t]) "__proto__" !== n && (arguments[t - 1][n] = arguments[t][n]);

  return arguments[0];
}

function D(t, n) {
  for (var e = 0; e < t.length; e++) if (n(t[e])) return t[e];

  return null;
}

function U(t) {
  return t && ("function" == typeof t || (n = t, Array.isArray(n) && !D(n, function (t) {
    return "function" != typeof t;
  })));
  var n;
}

function j(t, n) {
  var e = t[n] || [];
  0 === (e = Array.isArray(e) ? e : [e]).length && (e = [function () {
    return Promise.resolve();
  }]);
  var r = S(t),
      o = A(t);
  return function (t) {
    return e.reduce(function (e, i, u) {
      return e.then(function () {
        var e = i(t);
        return M(e) ? e : Promise.reject(f(15, !1, r, o, n, u));
      });
    }, Promise.resolve());
  };
}

function M(t) {
  return t && "function" == typeof t.then && "function" == typeof t.catch;
}

function L(t, n) {
  return Promise.resolve().then(function () {
    return t.status !== m ? t : (t.status = v, t.bootstrap ? q(t, "bootstrap").then(e).catch(function (e) {
      if (n) throw l(e, t, P);
      return a(e, t, P), t;
    }) : Promise.resolve().then(e));
  });

  function e() {
    return t.status = d, t;
  }
}

function R(t, n) {
  return Promise.resolve().then(function () {
    if (t.status !== g) return t;
    t.status = y;
    var e = Object.keys(t.parcels).map(function (n) {
      return t.parcels[n].unmountThisParcel();
    });
    return Promise.all(e).then(r, function (e) {
      return r().then(function () {
        var r = Error(e.message);
        if (n) throw l(r, t, P);
        a(r, t, P);
      });
    }).then(function () {
      return t;
    });

    function r() {
      return q(t, "unmount").then(function () {
        t.status = d;
      }).catch(function (e) {
        if (n) throw l(e, t, P);
        a(e, t, P);
      });
    }
  });
}

var I = !1,
    x = !1;

function B(t, n) {
  return Promise.resolve().then(function () {
    return t.status !== d ? t : (I || (window.dispatchEvent(new i("single-spa:before-first-mount")), I = !0), q(t, "mount").then(function () {
      return t.status = g, x || (window.dispatchEvent(new i("single-spa:first-mount")), x = !0), t;
    }).catch(function (e) {
      return t.status = g, R(t, !0).then(r, r);

      function r() {
        if (n) throw l(e, t, P);
        return a(e, t, P), t;
      }
    }));
  });
}

var G = 0,
    C = {
  parcels: {}
};

function W() {
  return $.apply(C, arguments);
}

function $(t, n) {
  var r = this;
  if (!t || "object" !== e(t) && "function" != typeof t) throw Error(f(2, !1));
  if (t.name && "string" != typeof t.name) throw Error(f(3, !1, e(t.name)));
  if ("object" !== e(n)) throw Error(f(4, !1, name, e(n)));
  if (!n.domElement) throw Error(f(5, !1, name));
  var o,
      i = G++,
      u = "function" == typeof t,
      a = u ? t : function () {
    return Promise.resolve(t);
  },
      c = {
    id: i,
    parcels: {},
    status: u ? h : m,
    customProps: n,
    parentName: A(r),
    unmountThisParcel: function () {
      return y.then(function () {
        if (c.status !== g) throw Error(f(6, !1, name, c.status));
        return R(c, !0);
      }).then(function (t) {
        return c.parentName && delete r.parcels[c.id], t;
      }).then(function (t) {
        return p(t), t;
      }).catch(function (t) {
        throw c.status = P, v(t), t;
      });
    }
  };
  r.parcels[i] = c;
  var s = a();
  if (!s || "function" != typeof s.then) throw Error(f(7, !1));
  var p,
      v,
      w = (s = s.then(function (t) {
    if (!t) throw Error(f(8, !1));
    var n = t.name || "parcel-".concat(i);
    if (Object.prototype.hasOwnProperty.call(t, "bootstrap") && !U(t.bootstrap)) throw Error(f(9, !1, n));
    if (!U(t.mount)) throw Error(f(10, !1, n));
    if (!U(t.unmount)) throw Error(f(11, !1, n));
    if (t.update && !U(t.update)) throw Error(f(12, !1, n));
    var e = j(t, "bootstrap"),
        r = j(t, "mount"),
        u = j(t, "unmount");
    c.status = m, c.name = n, c.bootstrap = e, c.mount = r, c.unmount = u, c.timeouts = z(t.timeouts), t.update && (c.update = j(t, "update"), o.update = function (t) {
      return c.customProps = t, k(function (t) {
        return Promise.resolve().then(function () {
          if (t.status !== g) throw Error(f(32, !1, A(t)));
          return t.status = E, q(t, "update").then(function () {
            return t.status = g, t;
          }).catch(function (n) {
            throw l(n, t, P);
          });
        });
      }(c));
    });
  })).then(function () {
    return L(c, !0);
  }),
      y = w.then(function () {
    return B(c, !0);
  }),
      O = new Promise(function (t, n) {
    p = t, v = n;
  });
  return o = {
    mount: function () {
      return k(Promise.resolve().then(function () {
        if (c.status !== d) throw Error(f(13, !1, name, c.status));
        return r.parcels[i] = c, B(c);
      }));
    },
    unmount: function () {
      return k(c.unmountThisParcel());
    },
    getStatus: function () {
      return c.status;
    },
    loadPromise: k(s),
    bootstrapPromise: k(w),
    mountPromise: k(y),
    unmountPromise: k(O)
  };
}

function k(t) {
  return t.then(function () {
    return null;
  });
}

function K(t) {
  var r = A(t),
      o = "function" == typeof t.customProps ? t.customProps(r, window.location) : t.customProps;
  ("object" !== e(o) || null === o || Array.isArray(o)) && (o = {}, console.warn(f(40, !1), r, o));

  var i = _({}, o, {
    name: r,
    mountParcel: $.bind(t),
    singleSpa: n
  });

  return N(t) && (i.unmountSelf = t.unmountThisParcel), i;
}

var F = {
  bootstrap: {
    millis: 4e3,
    dieOnTimeout: !1,
    warningMillis: 1e3
  },
  mount: {
    millis: 3e3,
    dieOnTimeout: !1,
    warningMillis: 1e3
  },
  unmount: {
    millis: 3e3,
    dieOnTimeout: !1,
    warningMillis: 1e3
  },
  unload: {
    millis: 3e3,
    dieOnTimeout: !1,
    warningMillis: 1e3
  },
  update: {
    millis: 3e3,
    dieOnTimeout: !1,
    warningMillis: 1e3
  }
};

function J(t, n, e) {
  if ("number" != typeof t || t <= 0) throw Error(f(16, !1));
  F.bootstrap = {
    millis: t,
    dieOnTimeout: n,
    warningMillis: e || 1e3
  };
}

function H(t, n, e) {
  if ("number" != typeof t || t <= 0) throw Error(f(17, !1));
  F.mount = {
    millis: t,
    dieOnTimeout: n,
    warningMillis: e || 1e3
  };
}

function Q(t, n, e) {
  if ("number" != typeof t || t <= 0) throw Error(f(18, !1));
  F.unmount = {
    millis: t,
    dieOnTimeout: n,
    warningMillis: e || 1e3
  };
}

function V(t, n, e) {
  if ("number" != typeof t || t <= 0) throw Error(f(19, !1));
  F.unload = {
    millis: t,
    dieOnTimeout: n,
    warningMillis: e || 1e3
  };
}

function q(t, n) {
  var e = t.timeouts[n],
      r = e.warningMillis,
      o = S(t);
  return new Promise(function (i, u) {
    var a = !1,
        c = !1;
    t[n](K(t)).then(function (t) {
      a = !0, i(t);
    }).catch(function (t) {
      a = !0, u(t);
    }), setTimeout(function () {
      return l(1);
    }, r), setTimeout(function () {
      return l(!0);
    }, e.millis);
    var s = f(31, !1, n, o, A(t), e.millis);

    function l(t) {
      if (!a) if (!0 === t) c = !0, e.dieOnTimeout ? u(Error(s)) : console.error(s);else if (!c) {
        var n = t,
            o = n * r;
        console.warn(s), o + r < e.millis && setTimeout(function () {
          return l(n + 1);
        }, r);
      }
    }
  });
}

function z(t) {
  var n = {};

  for (var e in F) n[e] = _({}, F[e], t && t[e] || {});

  return n;
}

function X(t) {
  return Promise.resolve().then(function () {
    return t.loadPromise ? t.loadPromise : t.status !== p && t.status !== O ? t : (t.status = h, t.loadPromise = Promise.resolve().then(function () {
      var o = t.loadApp(K(t));
      if (!M(o)) throw r = !0, Error(f(33, !1, A(t)));
      return o.then(function (r) {
        var o;
        t.loadErrorTime = null, "object" !== e(n = r) && (o = 34), Object.prototype.hasOwnProperty.call(n, "bootstrap") && !U(n.bootstrap) && (o = 35), U(n.mount) || (o = 36), U(n.unmount) || (o = 37);
        var i = S(n);

        if (o) {
          var u;

          try {
            u = JSON.stringify(n);
          } catch (t) {}

          return console.error(f(o, !1, i, A(t), u), n), a(void 0, t, P), t;
        }

        return n.devtools && n.devtools.overlays && (t.devtools.overlays = _({}, t.devtools.overlays, n.devtools.overlays)), t.status = m, t.bootstrap = j(n, "bootstrap"), t.mount = j(n, "mount"), t.unmount = j(n, "unmount"), t.unload = j(n, "unload"), t.timeouts = z(n.timeouts), delete t.loadPromise, t;
      });
    }).catch(function (n) {
      var e;
      return delete t.loadPromise, r ? e = P : (e = O, t.loadErrorTime = new Date().getTime()), a(n, t, e), t;
    }));
    var n, r;
  });
}

var Y,
    Z = "undefined" != typeof window,
    tt = {
  hashchange: [],
  popstate: []
},
    nt = ["hashchange", "popstate"];

function et(t) {
  var n;
  if ("string" == typeof t) n = t;else if (this && this.href) n = this.href;else {
    if (!(t && t.currentTarget && t.currentTarget.href && t.preventDefault)) throw Error(f(14, !1));
    n = t.currentTarget.href, t.preventDefault();
  }
  var e = st(window.location.href),
      r = st(n);
  0 === n.indexOf("#") ? window.location.hash = r.hash : e.host !== r.host && r.host ? window.location.href = n : r.pathname === e.pathname && r.search === e.search ? window.location.hash = r.hash : window.history.pushState(null, null, n);
}

function rt(t) {
  var n = this;

  if (t) {
    var e = t[0].type;
    nt.indexOf(e) >= 0 && tt[e].forEach(function (e) {
      try {
        e.apply(n, t);
      } catch (t) {
        setTimeout(function () {
          throw t;
        });
      }
    });
  }
}

function ot() {
  Rt([], arguments);
}

function it(t, n) {
  return function () {
    var e = window.location.href,
        r = t.apply(this, arguments),
        o = window.location.href;
    return Y && e === o || (Gt() ? window.dispatchEvent(ut(window.history.state, n)) : Rt([])), r;
  };
}

function ut(t, n) {
  var e;

  try {
    e = new PopStateEvent("popstate", {
      state: t
    });
  } catch (n) {
    (e = document.createEvent("PopStateEvent")).initPopStateEvent("popstate", !1, !1, t);
  }

  return e.singleSpa = !0, e.singleSpaTrigger = n, e;
}

if (Z) {
  window.addEventListener("hashchange", ot), window.addEventListener("popstate", ot);
  var at = window.addEventListener,
      ct = window.removeEventListener;
  window.addEventListener = function (t, n) {
    if (!("function" == typeof n && nt.indexOf(t) >= 0) || D(tt[t], function (t) {
      return t === n;
    })) return at.apply(this, arguments);
    tt[t].push(n);
  }, window.removeEventListener = function (t, n) {
    if (!("function" == typeof n && nt.indexOf(t) >= 0)) return ct.apply(this, arguments);
    tt[t] = tt[t].filter(function (t) {
      return t !== n;
    });
  }, window.history.pushState = it(window.history.pushState, "pushState"), window.history.replaceState = it(window.history.replaceState, "replaceState"), window.singleSpaNavigate ? console.warn(f(41, !1)) : window.singleSpaNavigate = et;
}

function st(t) {
  var n = document.createElement("a");
  return n.href = t, n;
}

var ft = !1;

function lt() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.jQuery;

  if (t || window.$ && window.$.fn && window.$.fn.jquery && (t = window.$), t && !ft) {
    var n = t.fn.on,
        e = t.fn.off;
    t.fn.on = function (t, e) {
      return pt.call(this, n, window.addEventListener, t, e, arguments);
    }, t.fn.off = function (t, n) {
      return pt.call(this, e, window.removeEventListener, t, n, arguments);
    }, ft = !0;
  }
}

function pt(t, n, e, r, o) {
  return "string" != typeof e ? t.apply(this, o) : (e.split(/\s+/).forEach(function (t) {
    nt.indexOf(t) >= 0 && (n(t, r), e = e.replace(t, ""));
  }), "" === e.trim() ? this : t.apply(this, o));
}

var ht = {};

function mt(n) {
  return Promise.resolve().then(function () {
    var e = ht[A(n)];
    if (!e) return n;
    if (n.status === p) return vt(n, e), n;
    if ("UNLOADING" === n.status) return e.promise.then(function () {
      return n;
    });
    if (n.status !== d && n.status !== single_spa__WEBPACK_IMPORTED_MODULE_0__.LOAD_ERROR) return n;
    var r = n.status === single_spa__WEBPACK_IMPORTED_MODULE_0__.LOAD_ERROR ? Promise.resolve() : q(n, "unload");
    return n.status = "UNLOADING", r.then(function () {
      return vt(n, e), n;
    }).catch(function (t) {
      return function (t, n, e) {
        delete ht[A(t)], delete t.bootstrap, delete t.mount, delete t.unmount, delete t.unload, a(e, t, P), n.reject(e);
      }(n, e, t), n;
    });
  });
}

function vt(t, n) {
  delete ht[A(t)], delete t.bootstrap, delete t.mount, delete t.unmount, delete t.unload, t.status = p, n.resolve();
}

function dt(t, n, e, r) {
  ht[A(t)] = {
    app: t,
    resolve: e,
    reject: r
  }, Object.defineProperty(ht[A(t)], "promise", {
    get: n
  });
}

function wt(t) {
  return ht[t];
}

var gt = [];

function Et() {
  var t = [],
      n = [],
      e = [],
      r = [],
      o = new Date().getTime();
  return gt.forEach(function (i) {
    var u = i.status !== P && T(i);

    switch (i.status) {
      case O:
        u && o - i.loadErrorTime >= 200 && e.push(i);
        break;

      case p:
      case h:
        u && e.push(i);
        break;

      case m:
      case d:
        !u && wt(A(i)) ? t.push(i) : u && r.push(i);
        break;

      case g:
        u || n.push(i);
    }
  }), {
    appsToUnload: t,
    appsToUnmount: n,
    appsToLoad: e,
    appsToMount: r
  };
}

function yt() {
  return gt.filter(b).map(A);
}

function Ot() {
  return gt.map(A);
}

function Pt(t) {
  var n = D(gt, function (n) {
    return A(n) === t;
  });
  return n ? n.status : null;
}

function bt(t, n, r, o) {
  var i = function (t, n, r, o) {
    var i,
        u = {
      name: null,
      loadApp: null,
      activeWhen: null,
      customProps: null
    };
    return "object" === e(t) ? (function (t) {
      if (Array.isArray(t) || null === t) throw Error(f(39, !1));
      var n = ["name", "app", "activeWhen", "customProps"],
          r = Object.keys(t).reduce(function (t, e) {
        return n.indexOf(e) >= 0 ? t : t.concat(e);
      }, []);
      if (0 !== r.length) throw Error(f(38, !1, n.join(", "), r.join(", ")));
      if ("string" != typeof t.name || 0 === t.name.length) throw Error(f(20, !1));
      if ("object" !== e(t.app) && "function" != typeof t.app) throw Error(f(20, !1));

      var o = function (t) {
        return "string" == typeof t || "function" == typeof t;
      };

      if (!(o(t.activeWhen) || Array.isArray(t.activeWhen) && t.activeWhen.every(o))) throw Error(f(24, !1));
      if (!_t(t.customProps)) throw Error(f(22, !1));
    }(t), u.name = t.name, u.loadApp = t.app, u.activeWhen = t.activeWhen, u.customProps = t.customProps) : (function (t, n, e, r) {
      if ("string" != typeof t || 0 === t.length) throw Error(f(20, !1));
      if (!n) throw Error(f(23, !1));
      if ("function" != typeof e) throw Error(f(24, !1));
      if (!_t(r)) throw Error(f(22, !1));
    }(t, n, r, o), u.name = t, u.loadApp = n, u.activeWhen = r, u.customProps = o), u.loadApp = "function" != typeof (i = u.loadApp) ? function () {
      return Promise.resolve(i);
    } : i, u.customProps = function (t) {
      return t || {};
    }(u.customProps), u.activeWhen = function (t) {
      var n = Array.isArray(t) ? t : [t];
      return n = n.map(function (t) {
        return "function" == typeof t ? t : Dt(t);
      }), function (t) {
        return n.some(function (n) {
          return n(t);
        });
      };
    }(u.activeWhen), u;
  }(t, n, r, o);

  if (-1 !== Ot().indexOf(i.name)) throw Error(f(21, !1, i.name));
  gt.push(_({
    loadErrorTime: null,
    status: p,
    parcels: {},
    devtools: {
      overlays: {
        options: {},
        selectors: []
      }
    }
  }, i)), Z && (lt(), Rt());
}

function Tt() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location;
  return gt.filter(function (n) {
    return n.activeWhen(t);
  }).map(A);
}

function At(t) {
  if (0 === gt.filter(function (n) {
    return A(n) === t;
  }).length) throw Error(f(25, !1, t));
  return Nt(t).then(function () {
    var n = gt.map(A).indexOf(t);
    gt.splice(n, 1);
  });
}

function Nt(t) {
  var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
    waitForUnmount: !1
  };
  if ("string" != typeof t) throw Error(f(26, !1));
  var e = D(gt, function (n) {
    return A(n) === t;
  });
  if (!e) throw Error(f(27, !1, t));
  var r,
      o = wt(A(e));

  if (n && n.waitForUnmount) {
    if (o) return o.promise;
    var i = new Promise(function (t, n) {
      dt(e, function () {
        return i;
      }, t, n);
    });
    return i;
  }

  return o ? (r = o.promise, St(e, o.resolve, o.reject)) : r = new Promise(function (t, n) {
    dt(e, function () {
      return r;
    }, t, n), St(e, t, n);
  }), r;
}

function St(t, n, e) {
  R(t).then(mt).then(function () {
    n(), setTimeout(function () {
      Rt();
    });
  }).catch(e);
}

function _t(t) {
  return !t || "function" == typeof t || "object" === e(t) && null !== t && !Array.isArray(t);
}

function Dt(t, n) {
  var e = function (t, n) {
    var e = 0,
        r = !1,
        o = "^";
    "/" !== t[0] && (t = "/" + t);

    for (var i = 0; i < t.length; i++) {
      var u = t[i];
      (!r && ":" === u || r && "/" === u) && a(i);
    }

    return a(t.length), new RegExp(o, "i");

    function a(i) {
      var u = t.slice(e, i).replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
      if (o += r ? "[^/]+/?" : u, i === t.length) if (r) n && (o += "$");else {
        var a = n ? "" : ".*";
        o = "/" === o.charAt(o.length - 1) ? "".concat(o).concat(a, "$") : "".concat(o, "(/").concat(a, ")?(#.*)?$");
      }
      r = !r, e = i;
    }
  }(t, n);

  return function (t) {
    var n = t.href.replace(t.origin, "").replace(t.search, "").split("?")[0];
    return e.test(n);
  };
}

var Ut = !1,
    jt = [],
    Mt = Z && window.location.href;

function Lt() {
  return Rt();
}

function Rt() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      n = arguments.length > 1 ? arguments[1] : void 0;
  if (Ut) return new Promise(function (t, e) {
    jt.push({
      resolve: t,
      reject: e,
      eventArguments: n
    });
  });
  var e,
      o = Et(),
      u = o.appsToUnload,
      a = o.appsToUnmount,
      c = o.appsToLoad,
      s = o.appsToMount,
      f = !1,
      l = Mt,
      h = Mt = window.location.href;
  return Gt() ? (Ut = !0, e = u.concat(c, a, s), w()) : (e = c, v());

  function m() {
    f = !0;
  }

  function v() {
    return Promise.resolve().then(function () {
      var t = c.map(X);
      return Promise.all(t).then(y).then(function () {
        return [];
      }).catch(function (t) {
        throw y(), t;
      });
    });
  }

  function w() {
    return Promise.resolve().then(function () {
      if (window.dispatchEvent(new i(0 === e.length ? "single-spa:before-no-app-change" : "single-spa:before-app-change", O(!0))), window.dispatchEvent(new i("single-spa:before-routing-event", O(!0, {
        cancelNavigation: m
      }))), f) return window.dispatchEvent(new i("single-spa:before-mount-routing-event", O(!0))), E(), void et(l);
      var n = u.map(mt),
          r = a.map(R).map(function (t) {
        return t.then(mt);
      }).concat(n),
          o = Promise.all(r);
      o.then(function () {
        window.dispatchEvent(new i("single-spa:before-mount-routing-event", O(!0)));
      });
      var p = c.map(function (t) {
        return X(t).then(function (t) {
          return It(t, o);
        });
      }),
          h = s.filter(function (t) {
        return c.indexOf(t) < 0;
      }).map(function (t) {
        return It(t, o);
      });
      return o.catch(function (t) {
        throw y(), t;
      }).then(function () {
        return y(), Promise.all(p.concat(h)).catch(function (n) {
          throw t.forEach(function (t) {
            return t.reject(n);
          }), n;
        }).then(E);
      });
    });
  }

  function E() {
    var n = yt();
    t.forEach(function (t) {
      return t.resolve(n);
    });

    try {
      var r = 0 === e.length ? "single-spa:no-app-change" : "single-spa:app-change";
      window.dispatchEvent(new i(r, O())), window.dispatchEvent(new i("single-spa:routing-event", O()));
    } catch (t) {
      setTimeout(function () {
        throw t;
      });
    }

    if (Ut = !1, jt.length > 0) {
      var o = jt;
      jt = [], Rt(o);
    }

    return n;
  }

  function y() {
    t.forEach(function (t) {
      rt(t.eventArguments);
    }), rt(n);
  }

  function O() {
    var t,
        o = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        i = arguments.length > 1 ? arguments[1] : void 0,
        m = {},
        v = (r(t = {}, g, []), r(t, d, []), r(t, p, []), r(t, P, []), t);
    o ? (c.concat(s).forEach(function (t, n) {
      E(t, g);
    }), u.forEach(function (t) {
      E(t, p);
    }), a.forEach(function (t) {
      E(t, d);
    })) : e.forEach(function (t) {
      E(t);
    });
    var w = {
      detail: {
        newAppStatuses: m,
        appsByNewStatus: v,
        totalAppChanges: e.length,
        originalEvent: null == n ? void 0 : n[0],
        oldUrl: l,
        newUrl: h,
        navigationIsCanceled: f
      }
    };
    return i && _(w.detail, i), w;

    function E(t, n) {
      var e = A(t);
      n = n || Pt(e), m[e] = n, (v[n] = v[n] || []).push(e);
    }
  }
}

function It(t, n) {
  return T(t) ? L(t).then(function (t) {
    return n.then(function () {
      return T(t) ? B(t) : t;
    });
  }) : n.then(function () {
    return t;
  });
}

var xt = !1;

function Bt(t) {
  var n;
  xt = !0, t && t.urlRerouteOnly && (n = t.urlRerouteOnly, Y = n), Z && Rt();
}

function Gt() {
  return xt;
}

Z && setTimeout(function () {
  xt || console.warn(f(1, !1));
}, 5e3);
var Ct = {
  getRawAppData: function () {
    return [].concat(gt);
  },
  reroute: Rt,
  NOT_LOADED: p,
  toLoadPromise: X,
  toBootstrapPromise: L,
  unregisterApplication: At
};
Z && window.__SINGLE_SPA_DEVTOOLS__ && (window.__SINGLE_SPA_DEVTOOLS__.exposedMethods = Ct);


/***/ }),

/***/ "webpack/container/reference/shell":
/*!************************!*\
  !*** external "shell" ***!
  \************************/
/***/ ((module) => {

module.exports = shell;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "vue-spa:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/remotes loading */
/******/ 	(() => {
/******/ 		var chunkMapping = {
/******/ 			"webpack_container_remote_shell_AppModule": [
/******/ 				"webpack/container/remote/shell/AppModule"
/******/ 			]
/******/ 		};
/******/ 		var idToExternalAndNameMapping = {
/******/ 			"webpack/container/remote/shell/AppModule": [
/******/ 				"default",
/******/ 				"./AppModule",
/******/ 				"webpack/container/reference/shell"
/******/ 			]
/******/ 		};
/******/ 		__webpack_require__.f.remotes = (chunkId, promises) => {
/******/ 			if(__webpack_require__.o(chunkMapping, chunkId)) {
/******/ 				chunkMapping[chunkId].forEach((id) => {
/******/ 					var getScope = __webpack_require__.R;
/******/ 					if(!getScope) getScope = [];
/******/ 					var data = idToExternalAndNameMapping[id];
/******/ 					if(getScope.indexOf(data) >= 0) return;
/******/ 					getScope.push(data);
/******/ 					if(data.p) return promises.push(data.p);
/******/ 					var onError = (error) => {
/******/ 						if(!error) error = new Error("Container missing");
/******/ 						if(typeof error.message === "string")
/******/ 							error.message += '\nwhile loading "' + data[1] + '" from ' + data[2];
/******/ 						__webpack_modules__[id] = () => {
/******/ 							throw error;
/******/ 						}
/******/ 						data.p = 0;
/******/ 					};
/******/ 					var handleFunction = (fn, arg1, arg2, d, next, first) => {
/******/ 						try {
/******/ 							var promise = fn(arg1, arg2);
/******/ 							if(promise && promise.then) {
/******/ 								var p = promise.then((result) => (next(result, d)), onError);
/******/ 								if(first) promises.push(data.p = p); else return p;
/******/ 							} else {
/******/ 								return next(promise, d, first);
/******/ 							}
/******/ 						} catch(error) {
/******/ 							onError(error);
/******/ 						}
/******/ 					}
/******/ 					var onExternal = (external, _, first) => (external ? handleFunction(__webpack_require__.I, data[0], 0, external, onInitialized, first) : onError());
/******/ 					var onInitialized = (_, external, first) => (handleFunction(external.get, data[1], getScope, 0, onFactory, first));
/******/ 					var onFactory = (factory) => {
/******/ 						data.p = 1;
/******/ 						__webpack_modules__[id] = (module) => {
/******/ 							module.exports = factory();
/******/ 						}
/******/ 					};
/******/ 					handleFunction(__webpack_require__, data[2], 0, 0, onExternal, 1);
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/sharing */
/******/ 	(() => {
/******/ 		__webpack_require__.S = {};
/******/ 		var initPromises = {};
/******/ 		var initTokens = {};
/******/ 		__webpack_require__.I = (name, initScope) => {
/******/ 			if(!initScope) initScope = [];
/******/ 			// handling circular init calls
/******/ 			var initToken = initTokens[name];
/******/ 			if(!initToken) initToken = initTokens[name] = {};
/******/ 			if(initScope.indexOf(initToken) >= 0) return;
/******/ 			initScope.push(initToken);
/******/ 			// only runs once
/******/ 			if(initPromises[name]) return initPromises[name];
/******/ 			// creates a new share scope if needed
/******/ 			if(!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
/******/ 			// runs all init snippets from all modules reachable
/******/ 			var scope = __webpack_require__.S[name];
/******/ 			var warn = (msg) => (typeof console !== "undefined" && console.warn && console.warn(msg));
/******/ 			var uniqueName = "vue-spa";
/******/ 			var register = (name, version, factory, eager) => {
/******/ 				var versions = scope[name] = scope[name] || {};
/******/ 				var activeVersion = versions[version];
/******/ 				if(!activeVersion || (!activeVersion.loaded && (!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from))) versions[version] = { get: factory, from: uniqueName, eager: !!eager };
/******/ 			};
/******/ 			var initExternal = (id) => {
/******/ 				var handleError = (err) => (warn("Initialization of sharing external failed: " + err));
/******/ 				try {
/******/ 					var module = __webpack_require__(id);
/******/ 					if(!module) return;
/******/ 					var initFn = (module) => (module && module.init && module.init(__webpack_require__.S[name], initScope))
/******/ 					if(module.then) return promises.push(module.then(initFn, handleError));
/******/ 					var initResult = initFn(module);
/******/ 					if(initResult && initResult.then) return promises.push(initResult.catch(handleError));
/******/ 				} catch(err) { handleError(err); }
/******/ 			}
/******/ 			var promises = [];
/******/ 			switch(name) {
/******/ 				case "default": {
/******/ 					initExternal("webpack/container/reference/shell");
/******/ 				}
/******/ 				break;
/******/ 			}
/******/ 			if(!promises.length) return initPromises[name] = 1;
/******/ 			return initPromises[name] = Promise.all(promises).then(() => (initPromises[name] = 1));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "http://localhost:3001";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if("main" == chunkId) {
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkvue_spa"] = self["webpackChunkvue_spa"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var single_spa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! single-spa */ "./node_modules/single-spa/lib/esm/single-spa.min.js");

window.singleSpa = single_spa__WEBPACK_IMPORTED_MODULE_0__;
single_spa__WEBPACK_IMPORTED_MODULE_0__.registerApplication('shell', () => __webpack_require__.e(/*! import() */ "webpack_container_remote_shell_AppModule").then(__webpack_require__.t.bind(__webpack_require__, /*! shell/AppModule */ "webpack/container/remote/shell/AppModule", 23)), location => location.pathname.startsWith('/'));
single_spa__WEBPACK_IMPORTED_MODULE_0__.registerApplication('nav', () => System.import("parcels-components-nav"), location => location.pathname.startsWith('/'));
single_spa__WEBPACK_IMPORTED_MODULE_0__.start();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map