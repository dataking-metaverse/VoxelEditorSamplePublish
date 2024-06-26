!(function (e) {
    var t = {};
    function r(n) {
        if (t[n]) return t[n].exports;
        var a = (t[n] = { i: n, l: !1, exports: {} });
        return e[n].call(a.exports, a, a.exports, r), (a.l = !0), a.exports;
    }
    (r.m = e),
        (r.c = t),
        (r.d = function (e, t, n) {
            r.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: n });
        }),
        (r.r = function (e) {
            "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module",
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (r.t = function (e, t) {
            if ((1 & t && (e = r(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (
                (r.r(n),
                Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e,
                }),
                2 & t && "string" != typeof e)
            )
                for (var a in e)
                    r.d(
                        n,
                        a,
                        function (t) {
                            return e[t];
                        }.bind(null, a)
                    );
            return n;
        }),
        (r.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return r.d(t, "a", t), t;
        }),
        (r.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (r.p = "/"),
        r((r.s = 1));
})({
    1: function (e, t, r) {
        e.exports = r("Y9Uk");
    },
    "3UD+": function (e, t) {
        e.exports = function (e) {
            if (!e.webpackPolyfill) {
                var t = Object.create(e);
                t.children || (t.children = []),
                    Object.defineProperty(t, "loaded", {
                        enumerable: !0,
                        get: function () {
                            return t.l;
                        },
                    }),
                    Object.defineProperty(t, "id", {
                        enumerable: !0,
                        get: function () {
                            return t.i;
                        },
                    }),
                    Object.defineProperty(t, "exports", { enumerable: !0 }),
                    (t.webpackPolyfill = 1);
            }
            return t;
        };
    },
    ANjH: function (e, t, r) {
        "use strict";
        r.d(t, "a", function () {
            return f;
        }),
            r.d(t, "b", function () {
                return c;
            }),
            r.d(t, "c", function () {
                return u;
            });
        var n = r("bCCX"),
            a = function () {
                return Math.random()
                    .toString(36)
                    .substring(7)
                    .split("")
                    .join(".");
            },
            i = {
                INIT: "@@redux/INIT" + a(),
                REPLACE: "@@redux/REPLACE" + a(),
                PROBE_UNKNOWN_ACTION: function () {
                    return "@@redux/PROBE_UNKNOWN_ACTION" + a();
                },
            };
        function o(e) {
            if ("object" != typeof e || null === e) return !1;
            for (var t = e; null !== Object.getPrototypeOf(t); )
                t = Object.getPrototypeOf(t);
            return Object.getPrototypeOf(e) === t;
        }
        function u(e, t, r) {
            var a;
            if (
                ("function" == typeof t && "function" == typeof r) ||
                ("function" == typeof r && "function" == typeof arguments[3])
            )
                throw new Error(
                    "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function."
                );
            if (
                ("function" == typeof t &&
                    void 0 === r &&
                    ((r = t), (t = void 0)),
                void 0 !== r)
            ) {
                if ("function" != typeof r)
                    throw new Error("Expected the enhancer to be a function.");
                return r(u)(e, t);
            }
            if ("function" != typeof e)
                throw new Error("Expected the reducer to be a function.");
            var s = e,
                c = t,
                p = [],
                f = p,
                y = !1;
            function l() {
                f === p && (f = p.slice());
            }
            function h() {
                if (y)
                    throw new Error(
                        "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store."
                    );
                return c;
            }
            function v(e) {
                if ("function" != typeof e)
                    throw new Error("Expected the listener to be a function.");
                if (y)
                    throw new Error(
                        "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details."
                    );
                var t = !0;
                return (
                    l(),
                    f.push(e),
                    function () {
                        if (t) {
                            if (y)
                                throw new Error(
                                    "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details."
                                );
                            (t = !1), l();
                            var r = f.indexOf(e);
                            f.splice(r, 1);
                        }
                    }
                );
            }
            function d(e) {
                if (!o(e))
                    throw new Error(
                        "Actions must be plain objects. Use custom middleware for async actions."
                    );
                if (void 0 === e.type)
                    throw new Error(
                        'Actions may not have an undefined "type" property. Have you misspelled a constant?'
                    );
                if (y) throw new Error("Reducers may not dispatch actions.");
                try {
                    (y = !0), (c = s(c, e));
                } finally {
                    y = !1;
                }
                for (var t = (p = f), r = 0; r < t.length; r++) {
                    (0, t[r])();
                }
                return e;
            }
            return (
                d({ type: i.INIT }),
                ((a = {
                    dispatch: d,
                    subscribe: v,
                    getState: h,
                    replaceReducer: function (e) {
                        if ("function" != typeof e)
                            throw new Error(
                                "Expected the nextReducer to be a function."
                            );
                        (s = e), d({ type: i.REPLACE });
                    },
                })[n.a] = function () {
                    var e,
                        t = v;
                    return (
                        ((e = {
                            subscribe: function (e) {
                                if ("object" != typeof e || null === e)
                                    throw new TypeError(
                                        "Expected the observer to be an object."
                                    );
                                function r() {
                                    e.next && e.next(h());
                                }
                                return r(), { unsubscribe: t(r) };
                            },
                        })[n.a] = function () {
                            return this;
                        }),
                        e
                    );
                }),
                a
            );
        }
        function s(e, t) {
            var r = t && t.type;
            return (
                "Given " +
                ((r && 'action "' + String(r) + '"') || "an action") +
                ', reducer "' +
                e +
                '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
            );
        }
        function c(e) {
            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                var a = t[n];
                0, "function" == typeof e[a] && (r[a] = e[a]);
            }
            var o,
                u = Object.keys(r);
            try {
                !(function (e) {
                    Object.keys(e).forEach(function (t) {
                        var r = e[t];
                        if (void 0 === r(void 0, { type: i.INIT }))
                            throw new Error(
                                'Reducer "' +
                                    t +
                                    "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined."
                            );
                        if (
                            void 0 ===
                            r(void 0, { type: i.PROBE_UNKNOWN_ACTION() })
                        )
                            throw new Error(
                                'Reducer "' +
                                    t +
                                    "\" returned undefined when probed with a random type. Don't try to handle " +
                                    i.INIT +
                                    ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.'
                            );
                    });
                })(r);
            } catch (e) {
                o = e;
            }
            return function (e, t) {
                if ((void 0 === e && (e = {}), o)) throw o;
                for (var n = !1, a = {}, i = 0; i < u.length; i++) {
                    var c = u[i],
                        p = r[c],
                        f = e[c],
                        y = p(f, t);
                    if (void 0 === y) {
                        var l = s(c, t);
                        throw new Error(l);
                    }
                    (a[c] = y), (n = n || y !== f);
                }
                return n ? a : e;
            };
        }
        function p(e, t) {
            return function () {
                return t(e.apply(this, arguments));
            };
        }
        function f(e, t) {
            if ("function" == typeof e) return p(e, t);
            if ("object" != typeof e || null === e)
                throw new Error(
                    "bindActionCreators expected an object or a function, instead received " +
                        (null === e ? "null" : typeof e) +
                        '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
                );
            var r = {};
            for (var n in e) {
                var a = e[n];
                "function" == typeof a && (r[n] = p(a, t));
            }
            return r;
        }
    },
    SLVX: function (e, t, r) {
        "use strict";
        function n(e) {
            var t,
                r = e.Symbol;
            return (
                "function" == typeof r
                    ? r.observable
                        ? (t = r.observable)
                        : ((t = r("observable")), (r.observable = t))
                    : (t = "@@observable"),
                t
            );
        }
        r.d(t, "a", function () {
            return n;
        });
    },
    Y9Uk: function (e, t, r) {
        "use strict";
        r.r(t);
        var n = {};
        r.r(n),
            r.d(n, "setPageLoaded", function () {
                return T;
            });
        var a = r("ANjH"),
            i = r("t2Bx"),
            o = r.n(i),
            u = o.a.type("ActionType", o.a.string()),
            s = o.a.type("State", function (e) {
                var t = e.typeParameter("T");
                return o.a.nullable(t);
            }),
            c = o.a.type(
                "Action",
                o.a.object(
                    o.a.property("type", u),
                    o.a.property("value", o.a.any())
                )
            ),
            p =
                (o.a.type("Reducer", function (e) {
                    var t = e.typeParameter("T");
                    return o.a.function(
                        o.a.param("state", o.a.ref(s, t)),
                        o.a.param("action", c),
                        o.a.return(o.a.ref(s, t))
                    );
                }),
                o.a.type(
                    "AccountInfo",
                    o.a.exactObject(
                        o.a.property("username", o.a.string()),
                        o.a.property("email", o.a.string()),
                        o.a.property("authToken", o.a.string())
                    )
                )),
            f = o.a.type("VoxelObjectDatumId", o.a.string()),
            y = Object(a.b)({
                pageLoaded: o.a.annotate(function (e, t) {
                    var r = o.a.ref(s, o.a.boolean()),
                        n = o.a.ref(c);
                    return (
                        o.a.param("state", r).assert(e),
                        o.a.param("action", n).assert(t),
                        "SET_PAGE_LOADED" === t.type || e || !1
                    );
                }, o.a.function(
                    o.a.param("state", o.a.ref(s, o.a.boolean())),
                    o.a.param("action", o.a.ref(c))
                )),
                accountInfo: o.a.annotate(function (e, t) {
                    var r = o.a.ref(s, o.a.ref(p)),
                        n = o.a.ref(c);
                    return (
                        o.a.param("state", r).assert(e),
                        o.a.param("action", n).assert(t),
                        "SET_ACCOUNT_INFO" === t.type
                            ? t.value
                            : "UNSET_ACCOUNT_INFO" === t.type
                            ? null
                            : e || null
                    );
                }, o.a.function(
                    o.a.param("state", o.a.ref(s, o.a.ref(p))),
                    o.a.param("action", o.a.ref(c))
                )),
                voxelObjectDatumId: o.a.annotate(function (e, t) {
                    var r = o.a.ref(s, o.a.ref(f)),
                        n = o.a.ref(c);
                    return (
                        o.a.param("state", r).assert(e),
                        o.a.param("action", n).assert(t),
                        "SET_VOXEL_OBJECT_DATUM_ID" === t.type
                            ? t.value
                            : "UNSET_VOXEL_OBJECT_DATUM_ID" === t.type
                            ? null
                            : e || null
                    );
                }, o.a.function(
                    o.a.param("state", o.a.ref(s, o.a.ref(f))),
                    o.a.param("action", o.a.ref(c))
                )),
            }),
            l = Object(a.c)(
                y,
                {},
                window.__REDUX_DEVTOOLS_EXTENSION__ &&
                    window.__REDUX_DEVTOOLS_EXTENSION__()
            );
        function h(e) {
            var t = o.a.ref("Event");
            if (
                (o.a.param("event", t).assert(e),
                e.origin.includes("://360hexaworld."))
            ) {
                var r = e.data,
                    n = r.type,
                    a = r.value;
                l.dispatch({ type: n, value: a });
            }
        }
        o.a.annotate(h, o.a.function(o.a.param("event", o.a.ref("Event")))),
            window.addEventListener("message", h);
        var v = document.getElementById("loadingPercentage"),
            d = document.getElementById("loader"),
            k = {},
            m = UnityLoader.instantiate("gameContainer", "Build/Build.json", {
                onProgress: function (e, t) {
                    e.Module &&
                        ((v.innerHTML = parseInt(100 * t) + "%"),
                        1 !== t ||
                            e.removeTimeout ||
                            ((e.removeTimeout = window.setTimeout(function () {
                                //! Splash Image 제거시, 아래 코드 주석 해제
                                // d.style.display = "none";
                            }, 1)),
                            (k = _(k)),
                            l.subscribe(_)));
                },
            });
        function g(e) {
            var t,
                r,
                n =
                    ((t = e),
                    (r = Array.isArray(t) ? t : t.split(".")),
                    function (e) {
                        var t = e,
                            n = !0,
                            a = !1,
                            i = void 0;
                        try {
                            for (
                                var o, u = r[Symbol.iterator]();
                                !(n = (o = u.next()).done);
                                n = !0
                            ) {
                                var s = o.value;
                                if (null == t) return;
                                if (void 0 === t[s]) return;
                                t = t[s];
                            }
                        } catch (e) {
                            (a = !0), (i = e);
                        } finally {
                            try {
                                n || null == u.return || u.return();
                            } finally {
                                if (a) throw i;
                            }
                        }
                        return t;
                    });
            return function (e, t) {
                return n(e) === n(t);
            };
        }
        var b = g("accountInfo.username"),
            x = g("accountInfo.authToken"),
            w = g("voxelObjectDatumId");
        function _(e) {
            var t = l.getState(),
                r = l.getState(),
                n = r.accountInfo,
                a = r.pageLoaded;
            r.voxelObjectDatumId;
            return (
                a &&
                    (function (e) {
                        return Boolean(
                            e && e.username && e.email && e.authToken
                        );
                    })(n) &&
                    (b(e, t) ||
                        (console.log("SetUsername", n.username),
                        m.SendMessage(
                            "ServerManager",
                            "SetUsername",
                            n.username
                        )),
                    x(e, t) ||
                        (console.log("SetAuthToken", n.authToken),
                        m.SendMessage(
                            "ServerManager",
                            "SetAuthToken",
                            n.authToken
                        ))),
                a && w(e, t),
                t
            );
        }
        var T = function () {
                return { type: "SET_PAGE_LOADED" };
            },
            E = Object(a.a)(n, l.dispatch);
        window.addEventListener("load", function () {
            E.setPageLoaded();
        });
    },
    bCCX: function (e, t, r) {
        "use strict";
        (function (e, n) {
            var a,
                i = r("SLVX");
            a =
                "undefined" != typeof self
                    ? self
                    : "undefined" != typeof window
                    ? window
                    : void 0 !== e
                    ? e
                    : n;
            var o = Object(i.a)(a);
            t.a = o;
        }).call(this, r("yLpj"), r("3UD+")(e));
    },
    ls82: function (e, t, r) {
        var n = (function (e) {
            "use strict";
            var t,
                r = Object.prototype,
                n = r.hasOwnProperty,
                a = "function" == typeof Symbol ? Symbol : {},
                i = a.iterator || "@@iterator",
                o = a.asyncIterator || "@@asyncIterator",
                u = a.toStringTag || "@@toStringTag";
            function s(e, t, r, n) {
                var a = t && t.prototype instanceof v ? t : v,
                    i = Object.create(a.prototype),
                    o = new N(n || []);
                return (
                    (i._invoke = (function (e, t, r) {
                        var n = p;
                        return function (a, i) {
                            if (n === y)
                                throw new Error("Generator is already running");
                            if (n === l) {
                                if ("throw" === a) throw i;
                                return P();
                            }
                            for (r.method = a, r.arg = i; ; ) {
                                var o = r.delegate;
                                if (o) {
                                    var u = T(o, r);
                                    if (u) {
                                        if (u === h) continue;
                                        return u;
                                    }
                                }
                                if ("next" === r.method)
                                    r.sent = r._sent = r.arg;
                                else if ("throw" === r.method) {
                                    if (n === p) throw ((n = l), r.arg);
                                    r.dispatchException(r.arg);
                                } else
                                    "return" === r.method &&
                                        r.abrupt("return", r.arg);
                                n = y;
                                var s = c(e, t, r);
                                if ("normal" === s.type) {
                                    if (((n = r.done ? l : f), s.arg === h))
                                        continue;
                                    return { value: s.arg, done: r.done };
                                }
                                "throw" === s.type &&
                                    ((n = l),
                                    (r.method = "throw"),
                                    (r.arg = s.arg));
                            }
                        };
                    })(e, r, o)),
                    i
                );
            }
            function c(e, t, r) {
                try {
                    return { type: "normal", arg: e.call(t, r) };
                } catch (e) {
                    return { type: "throw", arg: e };
                }
            }
            e.wrap = s;
            var p = "suspendedStart",
                f = "suspendedYield",
                y = "executing",
                l = "completed",
                h = {};
            function v() {}
            function d() {}
            function k() {}
            var m = {};
            m[i] = function () {
                return this;
            };
            var g = Object.getPrototypeOf,
                b = g && g(g(S([])));
            b && b !== r && n.call(b, i) && (m = b);
            var x = (k.prototype = v.prototype = Object.create(m));
            function w(e) {
                ["next", "throw", "return"].forEach(function (t) {
                    e[t] = function (e) {
                        return this._invoke(t, e);
                    };
                });
            }
            function _(e) {
                var t;
                this._invoke = function (r, a) {
                    function i() {
                        return new Promise(function (t, i) {
                            !(function t(r, a, i, o) {
                                var u = c(e[r], e, a);
                                if ("throw" !== u.type) {
                                    var s = u.arg,
                                        p = s.value;
                                    return p &&
                                        "object" == typeof p &&
                                        n.call(p, "__await")
                                        ? Promise.resolve(p.__await).then(
                                              function (e) {
                                                  t("next", e, i, o);
                                              },
                                              function (e) {
                                                  t("throw", e, i, o);
                                              }
                                          )
                                        : Promise.resolve(p).then(
                                              function (e) {
                                                  (s.value = e), i(s);
                                              },
                                              function (e) {
                                                  return t("throw", e, i, o);
                                              }
                                          );
                                }
                                o(u.arg);
                            })(r, a, t, i);
                        });
                    }
                    return (t = t ? t.then(i, i) : i());
                };
            }
            function T(e, r) {
                var n = e.iterator[r.method];
                if (n === t) {
                    if (((r.delegate = null), "throw" === r.method)) {
                        if (
                            e.iterator.return &&
                            ((r.method = "return"),
                            (r.arg = t),
                            T(e, r),
                            "throw" === r.method)
                        )
                            return h;
                        (r.method = "throw"),
                            (r.arg = new TypeError(
                                "The iterator does not provide a 'throw' method"
                            ));
                    }
                    return h;
                }
                var a = c(n, e.iterator, r.arg);
                if ("throw" === a.type)
                    return (
                        (r.method = "throw"),
                        (r.arg = a.arg),
                        (r.delegate = null),
                        h
                    );
                var i = a.arg;
                return i
                    ? i.done
                        ? ((r[e.resultName] = i.value),
                          (r.next = e.nextLoc),
                          "return" !== r.method &&
                              ((r.method = "next"), (r.arg = t)),
                          (r.delegate = null),
                          h)
                        : i
                    : ((r.method = "throw"),
                      (r.arg = new TypeError(
                          "iterator result is not an object"
                      )),
                      (r.delegate = null),
                      h);
            }
            function E(e) {
                var t = { tryLoc: e[0] };
                1 in e && (t.catchLoc = e[1]),
                    2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
                    this.tryEntries.push(t);
            }
            function O(e) {
                var t = e.completion || {};
                (t.type = "normal"), delete t.arg, (e.completion = t);
            }
            function N(e) {
                (this.tryEntries = [{ tryLoc: "root" }]),
                    e.forEach(E, this),
                    this.reset(!0);
            }
            function S(e) {
                if (e) {
                    var r = e[i];
                    if (r) return r.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var a = -1,
                            o = function r() {
                                for (; ++a < e.length; )
                                    if (n.call(e, a))
                                        return (
                                            (r.value = e[a]), (r.done = !1), r
                                        );
                                return (r.value = t), (r.done = !0), r;
                            };
                        return (o.next = o);
                    }
                }
                return { next: P };
            }
            function P() {
                return { value: t, done: !0 };
            }
            return (
                (d.prototype = x.constructor = k),
                (k.constructor = d),
                (k[u] = d.displayName = "GeneratorFunction"),
                (e.isGeneratorFunction = function (e) {
                    var t = "function" == typeof e && e.constructor;
                    return (
                        !!t &&
                        (t === d ||
                            "GeneratorFunction" === (t.displayName || t.name))
                    );
                }),
                (e.mark = function (e) {
                    return (
                        Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, k)
                            : ((e.__proto__ = k),
                              u in e || (e[u] = "GeneratorFunction")),
                        (e.prototype = Object.create(x)),
                        e
                    );
                }),
                (e.awrap = function (e) {
                    return { __await: e };
                }),
                w(_.prototype),
                (_.prototype[o] = function () {
                    return this;
                }),
                (e.AsyncIterator = _),
                (e.async = function (t, r, n, a) {
                    var i = new _(s(t, r, n, a));
                    return e.isGeneratorFunction(r)
                        ? i
                        : i.next().then(function (e) {
                              return e.done ? e.value : i.next();
                          });
                }),
                w(x),
                (x[u] = "Generator"),
                (x[i] = function () {
                    return this;
                }),
                (x.toString = function () {
                    return "[object Generator]";
                }),
                (e.keys = function (e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return (
                        t.reverse(),
                        function r() {
                            for (; t.length; ) {
                                var n = t.pop();
                                if (n in e)
                                    return (r.value = n), (r.done = !1), r;
                            }
                            return (r.done = !0), r;
                        }
                    );
                }),
                (e.values = S),
                (N.prototype = {
                    constructor: N,
                    reset: function (e) {
                        if (
                            ((this.prev = 0),
                            (this.next = 0),
                            (this.sent = this._sent = t),
                            (this.done = !1),
                            (this.delegate = null),
                            (this.method = "next"),
                            (this.arg = t),
                            this.tryEntries.forEach(O),
                            !e)
                        )
                            for (var r in this)
                                "t" === r.charAt(0) &&
                                    n.call(this, r) &&
                                    !isNaN(+r.slice(1)) &&
                                    (this[r] = t);
                    },
                    stop: function () {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval;
                    },
                    dispatchException: function (e) {
                        if (this.done) throw e;
                        var r = this;
                        function a(n, a) {
                            return (
                                (u.type = "throw"),
                                (u.arg = e),
                                (r.next = n),
                                a && ((r.method = "next"), (r.arg = t)),
                                !!a
                            );
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var o = this.tryEntries[i],
                                u = o.completion;
                            if ("root" === o.tryLoc) return a("end");
                            if (o.tryLoc <= this.prev) {
                                var s = n.call(o, "catchLoc"),
                                    c = n.call(o, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < o.catchLoc)
                                        return a(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc)
                                        return a(o.finallyLoc);
                                } else if (s) {
                                    if (this.prev < o.catchLoc)
                                        return a(o.catchLoc, !0);
                                } else {
                                    if (!c)
                                        throw new Error(
                                            "try statement without catch or finally"
                                        );
                                    if (this.prev < o.finallyLoc)
                                        return a(o.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function (e, t) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var a = this.tryEntries[r];
                            if (
                                a.tryLoc <= this.prev &&
                                n.call(a, "finallyLoc") &&
                                this.prev < a.finallyLoc
                            ) {
                                var i = a;
                                break;
                            }
                        }
                        i &&
                            ("break" === e || "continue" === e) &&
                            i.tryLoc <= t &&
                            t <= i.finallyLoc &&
                            (i = null);
                        var o = i ? i.completion : {};
                        return (
                            (o.type = e),
                            (o.arg = t),
                            i
                                ? ((this.method = "next"),
                                  (this.next = i.finallyLoc),
                                  h)
                                : this.complete(o)
                        );
                    },
                    complete: function (e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return (
                            "break" === e.type || "continue" === e.type
                                ? (this.next = e.arg)
                                : "return" === e.type
                                ? ((this.rval = this.arg = e.arg),
                                  (this.method = "return"),
                                  (this.next = "end"))
                                : "normal" === e.type && t && (this.next = t),
                            h
                        );
                    },
                    finish: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e)
                                return (
                                    this.complete(r.completion, r.afterLoc),
                                    O(r),
                                    h
                                );
                        }
                    },
                    catch: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var a = n.arg;
                                    O(r);
                                }
                                return a;
                            }
                        }
                        throw new Error("illegal catch attempt");
                    },
                    delegateYield: function (e, r, n) {
                        return (
                            (this.delegate = {
                                iterator: S(e),
                                resultName: r,
                                nextLoc: n,
                            }),
                            "next" === this.method && (this.arg = t),
                            h
                        );
                    },
                }),
                e
            );
        })(e.exports);
        try {
            regeneratorRuntime = n;
        } catch (e) {
            Function("r", "regeneratorRuntime = r")(n);
        }
    },
    t2Bx: function (e, t, r) {
        (function (t) {
            var n;
            (n = function () {
                "use strict";
                var e = {},
                    n = r("ls82"),
                    a =
                        "function" == typeof Symbol &&
                        "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e &&
                                      "function" == typeof Symbol &&
                                      e.constructor === Symbol &&
                                      e !== Symbol.prototype
                                      ? "symbol"
                                      : typeof e;
                              },
                    i = function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    },
                    o = (function () {
                        function e(e, t) {
                            for (var r = 0; r < t.length; r++) {
                                var n = t[r];
                                (n.enumerable = n.enumerable || !1),
                                    (n.configurable = !0),
                                    "value" in n && (n.writable = !0),
                                    Object.defineProperty(e, n.key, n);
                            }
                        }
                        return function (t, r, n) {
                            return r && e(t.prototype, r), n && e(t, n), t;
                        };
                    })(),
                    u =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = arguments[t];
                                for (var n in r)
                                    Object.prototype.hasOwnProperty.call(
                                        r,
                                        n
                                    ) && (e[n] = r[n]);
                            }
                            return e;
                        },
                    s = function (e, t) {
                        if ("function" != typeof t && null !== t)
                            throw new TypeError(
                                "Super expression must either be null or a function, not " +
                                    typeof t
                            );
                        (e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0,
                            },
                        })),
                            t &&
                                (Object.setPrototypeOf
                                    ? Object.setPrototypeOf(e, t)
                                    : (e.__proto__ = t));
                    },
                    c = function (e, t) {
                        var r = {};
                        for (var n in e)
                            t.indexOf(n) >= 0 ||
                                (Object.prototype.hasOwnProperty.call(e, n) &&
                                    (r[n] = e[n]));
                        return r;
                    },
                    p = function (e, t) {
                        if (!e)
                            throw new ReferenceError(
                                "this hasn't been initialised - super() hasn't been called"
                            );
                        return !t ||
                            ("object" != typeof t && "function" != typeof t)
                            ? e
                            : t;
                    },
                    f = function (e, t) {
                        if (Array.isArray(e)) return e;
                        if (Symbol.iterator in Object(e))
                            return (function (e, t) {
                                var r = [],
                                    n = !0,
                                    a = !1,
                                    i = void 0;
                                try {
                                    for (
                                        var o, u = e[Symbol.iterator]();
                                        !(n = (o = u.next()).done) &&
                                        (r.push(o.value), !t || r.length !== t);
                                        n = !0
                                    );
                                } catch (e) {
                                    (a = !0), (i = e);
                                } finally {
                                    try {
                                        !n && u.return && u.return();
                                    } finally {
                                        if (a) throw i;
                                    }
                                }
                                return r;
                            })(e, t);
                        throw new TypeError(
                            "Invalid attempt to destructure non-iterable instance"
                        );
                    },
                    y = function (e) {
                        if (Array.isArray(e)) {
                            for (
                                var t = 0, r = Array(e.length);
                                t < e.length;
                                t++
                            )
                                r[t] = e[t];
                            return r;
                        }
                        return Array.from(e);
                    };
                function l(e) {
                    if (e.hasErrors()) {
                        var t = e.input,
                            r = e.context,
                            n = [],
                            a = !0,
                            i = !1,
                            o = void 0;
                        try {
                            for (
                                var u, s = e.errors[Symbol.iterator]();
                                !(a = (u = s.next()).done);
                                a = !0
                            ) {
                                var c = u.value,
                                    p = f(c, 3),
                                    y = p[0],
                                    l = p[1],
                                    h = p[2],
                                    v = h ? h.toString() : null,
                                    d = r.typeOf(S(t, y)).toString(),
                                    k = N(e.path.concat(y)),
                                    m = "/" + y.join("/");
                                n.push({
                                    pointer: m,
                                    field: k,
                                    message: l,
                                    expected: v,
                                    actual: d,
                                });
                            }
                        } catch (e) {
                            (i = !0), (o = e);
                        } finally {
                            try {
                                !a && s.return && s.return();
                            } finally {
                                if (i) throw o;
                            }
                        }
                        return n;
                    }
                }
                var h = new WeakMap(),
                    v = new WeakSet();
                function d(e, t) {
                    try {
                        var r = h.get(e);
                        return !!r && w(r, t);
                    } catch (e) {
                        return !0;
                    }
                }
                function k(e, t) {
                    var r = h.get(e);
                    r || ((r = new WeakSet()), h.set(e, r)), _(r, t);
                }
                function m(e, t) {
                    var r = h.get(e);
                    r && T(r, t);
                }
                function g(e) {
                    return v.has(e);
                }
                function b(e) {
                    v.add(e);
                }
                function x(e) {
                    v.delete(e);
                }
                function w(e, t) {
                    try {
                        return e.has(t);
                    } catch (e) {
                        return !0;
                    }
                }
                function _(e, t) {
                    try {
                        e.add(t);
                    } catch (e) {}
                }
                function T(e, t) {
                    try {
                        e.delete(t);
                    } catch (e) {}
                }
                var E = /^[$A-Z_][0-9A-Z_$[\].]*$/i,
                    O = (function () {
                        function e(t, r) {
                            i(this, e),
                                (this.path = []),
                                (this.prefix = ""),
                                (this.errors = []),
                                (this.cyclic = new WeakMap()),
                                (this.context = t),
                                (this.input = r);
                        }
                        return (
                            o(e, [
                                {
                                    key: "inCycle",
                                    value: function (e, t) {
                                        var r = this.cyclic.get(e);
                                        return !!r && w(r, t);
                                    },
                                },
                                {
                                    key: "startCycle",
                                    value: function (e, t) {
                                        var r = this.cyclic.get(e);
                                        r ||
                                            ((r = new WeakSet()),
                                            this.cyclic.set(e, r)),
                                            _(r, t);
                                    },
                                },
                                {
                                    key: "endCycle",
                                    value: function (e, t) {
                                        var r = this.cyclic.get(e);
                                        r && T(r, t);
                                    },
                                },
                                {
                                    key: "hasErrors",
                                    value: function (e) {
                                        if (e) {
                                            var t = !0,
                                                r = !1,
                                                n = void 0;
                                            try {
                                                for (
                                                    var a,
                                                        i =
                                                            this.errors[
                                                                Symbol.iterator
                                                            ]();
                                                    !(t = (a = i.next()).done);
                                                    t = !0
                                                ) {
                                                    var o = a.value;
                                                    if (P(e, f(o, 1)[0]))
                                                        return !0;
                                                }
                                            } catch (e) {
                                                (r = !0), (n = e);
                                            } finally {
                                                try {
                                                    !t &&
                                                        i.return &&
                                                        i.return();
                                                } finally {
                                                    if (r) throw n;
                                                }
                                            }
                                            return !1;
                                        }
                                        return this.errors.length > 0;
                                    },
                                },
                                {
                                    key: "addError",
                                    value: function (e, t, r) {
                                        return (
                                            this.errors.push([e, r, t]), this
                                        );
                                    },
                                },
                                {
                                    key: "clearError",
                                    value: function (e) {
                                        var t = !1;
                                        if (e) {
                                            var r = [],
                                                n = !0,
                                                a = !1,
                                                i = void 0;
                                            try {
                                                for (
                                                    var o,
                                                        u =
                                                            this.errors[
                                                                Symbol.iterator
                                                            ]();
                                                    !(n = (o = u.next()).done);
                                                    n = !0
                                                ) {
                                                    var s = o.value;
                                                    P(e, s[0])
                                                        ? (t = !0)
                                                        : r.push(s);
                                                }
                                            } catch (e) {
                                                (a = !0), (i = e);
                                            } finally {
                                                try {
                                                    !n &&
                                                        u.return &&
                                                        u.return();
                                                } finally {
                                                    if (a) throw i;
                                                }
                                            }
                                            this.errors = r;
                                        } else
                                            (t = this.errors.length > 0),
                                                (this.errors = []);
                                        return t;
                                    },
                                },
                                {
                                    key: "resolvePath",
                                    value: function (e) {
                                        return S(this.input, e);
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return l(this);
                                    },
                                },
                            ]),
                            e
                        );
                    })();
                function N(e) {
                    if (!e.length) return "Value";
                    for (
                        var t = e.length, r = new Array(t), n = 0;
                        n < t;
                        n++
                    ) {
                        var a = e[n];
                        "[[Return Type]]" === a
                            ? (r[n] = "Return Type")
                            : "string" == typeof a && E.test(a)
                            ? (r[n] = n > 0 ? "." + String(a) : String(a))
                            : (r[n] = "[" + String(a) + "]");
                    }
                    return r.join("");
                }
                function S(e, t) {
                    for (var r = e, n = t.length, a = 0; a < n; a++) {
                        if (null == r) return;
                        var i = t[a];
                        "[[Return Type]]" !== i &&
                            (r = r instanceof Map ? r.get(i) : r[i]);
                    }
                    return r;
                }
                function P(e, t) {
                    var r = e.length;
                    if (r > t.length) return !1;
                    for (var n = 0; n < r; n++) if (t[n] !== e[n]) return !1;
                    return !0;
                }
                var A = (function (e) {
                        function t(e, r) {
                            i(this, t);
                            var n = p(
                                this,
                                (t.__proto__ || Object.getPrototypeOf(t)).call(
                                    this,
                                    e
                                )
                            );
                            return (
                                (n.name = "RuntimeTypeError"),
                                Object.assign(n, r),
                                n
                            );
                        }
                        return s(t, e), t;
                    })(TypeError),
                    j =
                        "\n-------------------------------------------------\n\n";
                function R(e) {
                    if (e.hasErrors()) {
                        var t = e.prefix,
                            r = e.input,
                            n = e.context,
                            a = e.errors,
                            i = [],
                            o = !0,
                            u = !1,
                            s = void 0;
                        try {
                            for (
                                var c, p = a[Symbol.iterator]();
                                !(o = (c = p.next()).done);
                                o = !0
                            ) {
                                var y = c.value,
                                    l = f(y, 3),
                                    h = l[0],
                                    v = l[1],
                                    d = l[2],
                                    k = d ? d.toString() : "*",
                                    m = S(r, h),
                                    g = n.typeOf(m).toString(),
                                    b = N(e.path.concat(h)),
                                    x = C(m);
                                "string" == typeof x
                                    ? i.push(
                                          b +
                                              " " +
                                              v +
                                              "\n\nExpected: " +
                                              k +
                                              "\n\nActual Value: " +
                                              x +
                                              "\n\nActual Type: " +
                                              g +
                                              "\n"
                                      )
                                    : i.push(
                                          b +
                                              " " +
                                              v +
                                              "\n\nExpected: " +
                                              k +
                                              "\n\nActual: " +
                                              g +
                                              "\n"
                                      );
                            }
                        } catch (e) {
                            (u = !0), (s = e);
                        } finally {
                            try {
                                !o && p.return && p.return();
                            } finally {
                                if (u) throw s;
                            }
                        }
                        return new A(
                            t ? t.trim() + " " + i.join(j) : i.join(j),
                            { errors: a }
                        );
                    }
                }
                function C(e) {
                    if (null === e) return "null";
                    switch (void 0 === e ? "undefined" : a(e)) {
                        case "string":
                            return '"' + e + '"';
                        case "symbol":
                        case "number":
                        case "boolean":
                        case "undefined":
                            return String(e);
                        case "function":
                            return;
                        default:
                            if (
                                Array.isArray(e) ||
                                null == e.constructor ||
                                e.constructor === Object
                            )
                                try {
                                    return JSON.stringify(e, null, 2);
                                } catch (e) {
                                    return;
                                }
                            return;
                    }
                }
                function I(e, t) {
                    return R(e.context.validate(e, t));
                }
                function L(e, t) {
                    var r = void 0;
                    if (e === t) return 0;
                    if (
                        ((t instanceof Z ||
                            t instanceof Q ||
                            t instanceof V ||
                            t instanceof lt) &&
                            (t = t.unwrap()),
                        e instanceof Z)
                    )
                        r = e.compareWith(t);
                    else if (
                        e instanceof ee ||
                        e instanceof Q ||
                        t instanceof ee
                    )
                        r = e.compareWith(t);
                    else {
                        if (e instanceof M || e instanceof B || e instanceof Ge)
                            return 1;
                        r = e.compareWith(t);
                    }
                    return t instanceof M ? 1 : r;
                }
                var W = (function () {
                        function e(t) {
                            i(this, e),
                                (this.typeName = "Type"),
                                (this.context = t);
                        }
                        return (
                            o(e, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a) {
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        var t = new O(this.context, e),
                                            r = !0,
                                            n = !1,
                                            a = void 0;
                                        try {
                                            for (
                                                var i,
                                                    o = this.errors(t, [], e)[
                                                        Symbol.iterator
                                                    ]();
                                                !(r = (i = o.next()).done);
                                                r = !0
                                            )
                                                return i.value, !1;
                                        } catch (e) {
                                            (n = !0), (a = e);
                                        } finally {
                                            try {
                                                !r && o.return && o.return();
                                            } finally {
                                                if (n) throw a;
                                            }
                                        }
                                        return !0;
                                    },
                                },
                                {
                                    key: "acceptsType",
                                    value: function (e) {
                                        return -1 !== L(this, e);
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        return -1;
                                    },
                                },
                                {
                                    key: "assert",
                                    value: function (e) {
                                        var t = I(this, e);
                                        if (t)
                                            throw (
                                                ("function" ==
                                                    typeof Error.captureStackTrace &&
                                                    Error.captureStackTrace(
                                                        t,
                                                        this.assert
                                                    ),
                                                t)
                                            );
                                        return e;
                                    },
                                },
                                {
                                    key: "unwrap",
                                    value: function () {
                                        return this;
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        return "$Type";
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return { typeName: this.typeName };
                                    },
                                },
                            ]),
                            e
                        );
                    })(),
                    M = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "AnyType"),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a) {
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        return !0;
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        return 1;
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        return "any";
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return { typeName: this.typeName };
                                    },
                                },
                            ]),
                            t
                        );
                    })(W),
                    X = {
                        ERR_CONSTRAINT_VIOLATION: "violated a constraint",
                        ERR_EXPECT_ARRAY: "must be an Array",
                        ERR_EXPECT_TRUE: "must be true",
                        ERR_EXPECT_FALSE: "must be false",
                        ERR_EXPECT_BOOLEAN: "must be true or false",
                        ERR_EXPECT_EMPTY: "must be empty",
                        ERR_EXPECT_EXACT_VALUE: "must be exactly $0",
                        ERR_EXPECT_CALLABLE: "must be callable",
                        ERR_EXPECT_CLASS: "must be a Class of $0",
                        ERR_EXPECT_FUNCTION: "must be a function",
                        ERR_EXPECT_GENERATOR: "must be a generator function",
                        ERR_EXPECT_ITERABLE: "must be iterable",
                        ERR_EXPECT_ARGUMENT: 'argument "$0" must be: $1',
                        ERR_EXPECT_RETURN: "expected return type of: $0",
                        ERR_EXPECT_N_ARGUMENTS: "requires $0 argument(s)",
                        ERR_EXPECT_INSTANCEOF: "must be an instance of $0",
                        ERR_EXPECT_KEY_TYPE: "keys must be: $0",
                        ERR_EXPECT_NULL: "must be null",
                        ERR_EXPECT_NUMBER: "must be a number",
                        ERR_EXPECT_OBJECT: "must be an object",
                        ERR_EXPECT_PROMISE: "must be a promise of $0",
                        ERR_EXPECT_STRING: "must be a string",
                        ERR_EXPECT_SYMBOL: "must be a symbol",
                        ERR_EXPECT_THIS: "must be exactly this",
                        ERR_EXPECT_VOID: "must be undefined",
                        ERR_INVALID_DATE: "must be a valid date",
                        ERR_MISSING_PROPERTY: "does not exist on object",
                        ERR_NO_INDEXER:
                            "is not one of the permitted indexer types",
                        ERR_NO_UNION: "must be one of: $0",
                        ERR_UNKNOWN_KEY: 'should not contain the key: "$0"',
                    };
                function J(e) {
                    for (
                        var t = arguments.length,
                            r = Array(t > 1 ? t - 1 : 0),
                            n = 1;
                        n < t;
                        n++
                    )
                        r[n - 1] = arguments[n];
                    var a = X[e];
                    return r.length > 0
                        ? a.replace(/\$(\d+)/g, function (e, t) {
                              return String(r[t]);
                          })
                        : a;
                }
                var D = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "TupleType"),
                                (n.types = []),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a) {
                                        var i, o, u;
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (
                                                                ((i =
                                                                    this.types),
                                                                (o = i.length),
                                                                this.context.checkPredicate(
                                                                    "Array",
                                                                    a
                                                                ))
                                                            ) {
                                                                e.next = 7;
                                                                break;
                                                            }
                                                            return (
                                                                (e.next = 6),
                                                                [
                                                                    r,
                                                                    J(
                                                                        "ERR_EXPECT_ARRAY"
                                                                    ),
                                                                    this,
                                                                ]
                                                            );
                                                        case 6:
                                                            return e.abrupt(
                                                                "return"
                                                            );
                                                        case 7:
                                                            u = 0;
                                                        case 8:
                                                            if (!(u < o)) {
                                                                e.next = 13;
                                                                break;
                                                            }
                                                            return e.delegateYield(
                                                                i[u].errors(
                                                                    t,
                                                                    r.concat(u),
                                                                    a[u]
                                                                ),
                                                                "t0",
                                                                10
                                                            );
                                                        case 10:
                                                            u++, (e.next = 8);
                                                            break;
                                                        case 13:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        var t = this.types,
                                            r = t.length;
                                        if (
                                            !this.context.checkPredicate(
                                                "Array",
                                                e
                                            ) ||
                                            e.length < r
                                        )
                                            return !1;
                                        for (var n = 0; n < r; n++)
                                            if (!t[n].accepts(e[n])) return !1;
                                        return !0;
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        if (!(e instanceof t)) return -1;
                                        var r = this.types,
                                            n = e.types;
                                        if (n.length < r.length) return -1;
                                        for (
                                            var a = !1, i = 0;
                                            i < r.length;
                                            i++
                                        ) {
                                            var o = L(r[i], n[i]);
                                            if (1 === o) a = !0;
                                            else if (-1 === o) return -1;
                                        }
                                        return r.length < n.length
                                            ? 0
                                            : a
                                            ? 1
                                            : 0;
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        return (
                                            "[" + this.types.join(", ") + "]"
                                        );
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return {
                                            typeName: this.typeName,
                                            types: this.types,
                                        };
                                    },
                                },
                            ]),
                            t
                        );
                    })(W),
                    Y = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "ArrayType"),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a) {
                                        var i, o, u;
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (
                                                                this.context.checkPredicate(
                                                                    "Array",
                                                                    a
                                                                )
                                                            ) {
                                                                e.next = 5;
                                                                break;
                                                            }
                                                            return (
                                                                (e.next = 4),
                                                                [
                                                                    r,
                                                                    J(
                                                                        "ERR_EXPECT_ARRAY"
                                                                    ),
                                                                    this,
                                                                ]
                                                            );
                                                        case 4:
                                                            return e.abrupt(
                                                                "return"
                                                            );
                                                        case 5:
                                                            if (
                                                                !t.inCycle(
                                                                    this,
                                                                    a
                                                                )
                                                            ) {
                                                                e.next = 7;
                                                                break;
                                                            }
                                                            return e.abrupt(
                                                                "return"
                                                            );
                                                        case 7:
                                                            t.startCycle(
                                                                this,
                                                                a
                                                            ),
                                                                (i =
                                                                    this
                                                                        .elementType),
                                                                (o = a.length),
                                                                (u = 0);
                                                        case 11:
                                                            if (!(u < o)) {
                                                                e.next = 16;
                                                                break;
                                                            }
                                                            return e.delegateYield(
                                                                i.errors(
                                                                    t,
                                                                    r.concat(u),
                                                                    a[u]
                                                                ),
                                                                "t0",
                                                                13
                                                            );
                                                        case 13:
                                                            u++, (e.next = 11);
                                                            break;
                                                        case 16:
                                                            t.endCycle(this, a);
                                                        case 17:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        if (
                                            !this.context.checkPredicate(
                                                "Array",
                                                e
                                            )
                                        )
                                            return !1;
                                        if (d(this, e)) return !0;
                                        k(this, e);
                                        for (
                                            var t = this.elementType,
                                                r = e.length,
                                                n = 0;
                                            n < r;
                                            n++
                                        )
                                            if (!t.accepts(e[n]))
                                                return m(this, e), !1;
                                        return m(this, e), !0;
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        var r = this.elementType;
                                        if (e instanceof D) {
                                            for (
                                                var n = e.types, a = 0;
                                                a < n.length;
                                                a++
                                            )
                                                if (-1 === L(r, n[a]))
                                                    return -1;
                                            return 1;
                                        }
                                        return e instanceof t
                                            ? L(r, e.elementType)
                                            : -1;
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        var e = this.elementType;
                                        if (g(this))
                                            return "string" == typeof e.name
                                                ? "Array<$Cycle<" +
                                                      e.name +
                                                      ">>"
                                                : "Array<$Cycle<Object>>";
                                        b(this);
                                        var t = "Array<" + e.toString() + ">";
                                        return x(this), t;
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return {
                                            typeName: this.typeName,
                                            elementType: this.elementType,
                                        };
                                    },
                                },
                            ]),
                            t
                        );
                    })(W),
                    $ = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "BooleanLiteralType"),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a) {
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (
                                                                a === this.value
                                                            ) {
                                                                e.next = 3;
                                                                break;
                                                            }
                                                            return (
                                                                (e.next = 3),
                                                                [
                                                                    r,
                                                                    J(
                                                                        this
                                                                            .value
                                                                            ? "ERR_EXPECT_TRUE"
                                                                            : "ERR_EXPECT_FALSE"
                                                                    ),
                                                                    this,
                                                                ]
                                                            );
                                                        case 3:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        return e === this.value;
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        return e instanceof t &&
                                            e.value === this.value
                                            ? 0
                                            : -1;
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        return this.value ? "true" : "false";
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return {
                                            type: this.typeName,
                                            value: this.value,
                                        };
                                    },
                                },
                            ]),
                            t
                        );
                    })(W),
                    U = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "BooleanType"),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a) {
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (
                                                                "boolean" ==
                                                                typeof a
                                                            ) {
                                                                e.next = 3;
                                                                break;
                                                            }
                                                            return (
                                                                (e.next = 3),
                                                                [
                                                                    r,
                                                                    J(
                                                                        "ERR_EXPECT_BOOLEAN"
                                                                    ),
                                                                    this,
                                                                ]
                                                            );
                                                        case 3:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        return "boolean" == typeof e;
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        return e instanceof $
                                            ? 1
                                            : e instanceof t
                                            ? 0
                                            : -1;
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        return "boolean";
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return { typeName: this.typeName };
                                    },
                                },
                            ]),
                            t
                        );
                    })(W),
                    F = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "EmptyType"),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a) {
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (
                                                                (e.next = 2),
                                                                [
                                                                    r,
                                                                    J(
                                                                        "ERR_EXPECT_EMPTY"
                                                                    ),
                                                                    this,
                                                                ]
                                                            );
                                                        case 2:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        return !1;
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        return e instanceof t ? 0 : -1;
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        return "empty";
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return { typeName: this.typeName };
                                    },
                                },
                            ]),
                            t
                        );
                    })(W),
                    B = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "ExistentialType"),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a) {
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        return !0;
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        return 1;
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        return "*";
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return { typeName: this.typeName };
                                    },
                                },
                            ]),
                            t
                        );
                    })(W),
                    V = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "TypeParameterApplication"),
                                (n.typeInstances = []),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a) {
                                        var i, o;
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (
                                                                (i =
                                                                    this
                                                                        .parent),
                                                                (o =
                                                                    this
                                                                        .typeInstances),
                                                                e.delegateYield(
                                                                    i.errors.apply(
                                                                        i,
                                                                        [
                                                                            t,
                                                                            r,
                                                                            a,
                                                                        ].concat(
                                                                            y(o)
                                                                        )
                                                                    ),
                                                                    "t0",
                                                                    2
                                                                )
                                                            );
                                                        case 2:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        var t = this.parent,
                                            r = this.typeInstances;
                                        return t.accepts.apply(
                                            t,
                                            [e].concat(y(r))
                                        );
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        var t;
                                        return (t =
                                            this.parent).compareWith.apply(
                                            t,
                                            [e].concat(y(this.typeInstances))
                                        );
                                    },
                                },
                                {
                                    key: "hasProperty",
                                    value: function (e) {
                                        var t,
                                            r = this.parent;
                                        return (
                                            !(
                                                !r ||
                                                "function" !=
                                                    typeof r.hasProperty
                                            ) &&
                                            (t = r).hasProperty.apply(
                                                t,
                                                [e].concat(
                                                    y(this.typeInstances)
                                                )
                                            )
                                        );
                                    },
                                },
                                {
                                    key: "getProperty",
                                    value: function (e) {
                                        var t,
                                            r = this.parent;
                                        if (
                                            r &&
                                            "function" == typeof r.getProperty
                                        )
                                            return (t = r).getProperty.apply(
                                                t,
                                                [e].concat(
                                                    y(this.typeInstances)
                                                )
                                            );
                                    },
                                },
                                {
                                    key: "unwrap",
                                    value: function () {
                                        var e;
                                        return (e = this.parent).unwrap.apply(
                                            e,
                                            y(this.typeInstances)
                                        );
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        var e = this.parent,
                                            t = this.typeInstances,
                                            r = e.name;
                                        if (t.length) {
                                            for (
                                                var n = [], a = 0;
                                                a < t.length;
                                                a++
                                            ) {
                                                var i = t[a];
                                                n.push(i.toString());
                                            }
                                            return r + "<" + n.join(", ") + ">";
                                        }
                                        return r;
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return {
                                            typeName: this.typeName,
                                            typeInstances: this.typeInstances,
                                        };
                                    },
                                },
                            ]),
                            t
                        );
                    })(W),
                    G = n.mark(K);
                function z(e) {
                    for (
                        var t,
                            r = arguments.length,
                            n = Array(r > 1 ? r - 1 : 0),
                            a = 1;
                        a < r;
                        a++
                    )
                        n[a - 1] = arguments[a];
                    (t = e.constraints).push.apply(t, y(n));
                }
                function K(e, t, r) {
                    for (
                        var a = arguments.length,
                            i = Array(a > 3 ? a - 3 : 0),
                            o = 3;
                        o < a;
                        o++
                    )
                        i[o - 3] = arguments[o];
                    var u, s, c, p, f;
                    return n.wrap(
                        function (t) {
                            for (;;)
                                switch ((t.prev = t.next)) {
                                    case 0:
                                        (u = e.constraints),
                                            (s = u.length),
                                            (c = 0);
                                    case 3:
                                        if (!(c < s)) {
                                            t.next = 12;
                                            break;
                                        }
                                        if (
                                            ((p = u[c]),
                                            "string" !=
                                                typeof (f = p.apply(
                                                    void 0,
                                                    y(i)
                                                )))
                                        ) {
                                            t.next = 9;
                                            break;
                                        }
                                        return (t.next = 9), [r, f, this];
                                    case 9:
                                        c++, (t.next = 3);
                                        break;
                                    case 12:
                                    case "end":
                                        return t.stop();
                                }
                        },
                        G,
                        this
                    );
                }
                function H(e) {
                    for (
                        var t = e.constraints,
                            r = t.length,
                            n = arguments.length,
                            a = Array(n > 1 ? n - 1 : 0),
                            i = 1;
                        i < n;
                        i++
                    )
                        a[i - 1] = arguments[i];
                    for (var o = 0; o < r; o++)
                        if ("string" == typeof t[o].apply(void 0, y(a)))
                            return !1;
                    return !0;
                }
                var Z = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "TypeAlias"),
                                (n.constraints = []),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "addConstraint",
                                    value: function () {
                                        for (
                                            var e = arguments.length,
                                                t = Array(e),
                                                r = 0;
                                            r < e;
                                            r++
                                        )
                                            t[r] = arguments[r];
                                        return (
                                            z.apply(
                                                void 0,
                                                [this].concat(y(t))
                                            ),
                                            this
                                        );
                                    },
                                },
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a) {
                                        var i, o, u, s, c, p, f, y;
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            (i = this.type),
                                                                (o = !1),
                                                                (u = !0),
                                                                (s = !1),
                                                                (c = void 0),
                                                                (e.prev = 5),
                                                                (p = i
                                                                    .errors(
                                                                        t,
                                                                        r,
                                                                        a
                                                                    )
                                                                    [
                                                                        Symbol
                                                                            .iterator
                                                                    ]());
                                                        case 7:
                                                            if (
                                                                (u = (f =
                                                                    p.next())
                                                                    .done)
                                                            ) {
                                                                e.next = 15;
                                                                break;
                                                            }
                                                            return (
                                                                (y = f.value),
                                                                (o = !0),
                                                                (e.next = 12),
                                                                y
                                                            );
                                                        case 12:
                                                            (u = !0),
                                                                (e.next = 7);
                                                            break;
                                                        case 15:
                                                            e.next = 21;
                                                            break;
                                                        case 17:
                                                            (e.prev = 17),
                                                                (e.t0 =
                                                                    e.catch(5)),
                                                                (s = !0),
                                                                (c = e.t0);
                                                        case 21:
                                                            (e.prev = 21),
                                                                (e.prev = 22),
                                                                !u &&
                                                                    p.return &&
                                                                    p.return();
                                                        case 24:
                                                            if (
                                                                ((e.prev = 24),
                                                                !s)
                                                            ) {
                                                                e.next = 27;
                                                                break;
                                                            }
                                                            throw c;
                                                        case 27:
                                                            return e.finish(24);
                                                        case 28:
                                                            return e.finish(21);
                                                        case 29:
                                                            if (o) {
                                                                e.next = 31;
                                                                break;
                                                            }
                                                            return e.delegateYield(
                                                                K(
                                                                    this,
                                                                    t,
                                                                    r,
                                                                    a
                                                                ),
                                                                "t1",
                                                                31
                                                            );
                                                        case 31:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this,
                                            [
                                                [5, 17, 21, 29],
                                                [22, , 24, 28],
                                            ]
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        return (
                                            !!this.type.accepts(e) &&
                                            !!H(this, e)
                                        );
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        return e === this
                                            ? 0
                                            : this.hasConstraints
                                            ? -1
                                            : L(this.type, e);
                                    },
                                },
                                {
                                    key: "apply",
                                    value: function () {
                                        var e = new V(this.context);
                                        e.parent = this;
                                        for (
                                            var t = arguments.length,
                                                r = Array(t),
                                                n = 0;
                                            n < t;
                                            n++
                                        )
                                            r[n] = arguments[n];
                                        return (e.typeInstances = r), e;
                                    },
                                },
                                {
                                    key: "unwrap",
                                    value: function () {
                                        return this.type.unwrap();
                                    },
                                },
                                {
                                    key: "hasProperty",
                                    value: function (e) {
                                        var t = this.unwrap();
                                        return (
                                            !(
                                                !t ||
                                                "function" !=
                                                    typeof t.hasProperty
                                            ) && t.hasProperty(e)
                                        );
                                    },
                                },
                                {
                                    key: "getProperty",
                                    value: function (e) {
                                        var t = this.unwrap();
                                        if (
                                            t &&
                                            "function" == typeof t.getProperty
                                        )
                                            return t.getProperty(e);
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function (e) {
                                        var t = this.name,
                                            r = this.type;
                                        return e
                                            ? "type " +
                                                  t +
                                                  " = " +
                                                  r.toString() +
                                                  ";"
                                            : t;
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return {
                                            typeName: this.typeName,
                                            name: this.name,
                                            type: this.type,
                                        };
                                    },
                                },
                                {
                                    key: "properties",
                                    get: function () {
                                        return this.type.properties;
                                    },
                                },
                                {
                                    key: "hasConstraints",
                                    get: function () {
                                        return this.constraints.length > 0;
                                    },
                                },
                            ]),
                            t
                        );
                    })(W),
                    q = Symbol("FlowInto"),
                    Q = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "TypeParameter"),
                                (n[q] = null),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a) {
                                        var i, o, u, s, c, p, f, y, l, h;
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (
                                                                ((i =
                                                                    this
                                                                        .bound ||
                                                                    this
                                                                        .default),
                                                                (o =
                                                                    this
                                                                        .recorded),
                                                                (u =
                                                                    this
                                                                        .context),
                                                                !(
                                                                    i instanceof
                                                                        ee ||
                                                                    i instanceof
                                                                        Z
                                                                ))
                                                            ) {
                                                                e.next = 7;
                                                                break;
                                                            }
                                                            return e.delegateYield(
                                                                i.errors(
                                                                    t,
                                                                    r,
                                                                    a
                                                                ),
                                                                "t0",
                                                                4
                                                            );
                                                        case 4:
                                                            return e.abrupt(
                                                                "return"
                                                            );
                                                        case 7:
                                                            if (!o) {
                                                                e.next = 12;
                                                                break;
                                                            }
                                                            return e.delegateYield(
                                                                o.errors(
                                                                    t,
                                                                    r,
                                                                    a
                                                                ),
                                                                "t1",
                                                                9
                                                            );
                                                        case 9:
                                                            return e.abrupt(
                                                                "return"
                                                            );
                                                        case 12:
                                                            if (!i) {
                                                                e.next = 47;
                                                                break;
                                                            }
                                                            if (
                                                                "AnyType" !==
                                                                    i.typeName &&
                                                                "ExistentialType" !==
                                                                    i.typeName
                                                            ) {
                                                                e.next = 17;
                                                                break;
                                                            }
                                                            return e.abrupt(
                                                                "return"
                                                            );
                                                        case 17:
                                                            (s = !1),
                                                                (c = !0),
                                                                (p = !1),
                                                                (f = void 0),
                                                                (e.prev = 21),
                                                                (y = i
                                                                    .errors(
                                                                        t,
                                                                        r,
                                                                        a
                                                                    )
                                                                    [
                                                                        Symbol
                                                                            .iterator
                                                                    ]());
                                                        case 23:
                                                            if (
                                                                (c = (l =
                                                                    y.next())
                                                                    .done)
                                                            ) {
                                                                e.next = 31;
                                                                break;
                                                            }
                                                            return (
                                                                (h = l.value),
                                                                (s = !0),
                                                                (e.next = 28),
                                                                h
                                                            );
                                                        case 28:
                                                            (c = !0),
                                                                (e.next = 23);
                                                            break;
                                                        case 31:
                                                            e.next = 37;
                                                            break;
                                                        case 33:
                                                            (e.prev = 33),
                                                                (e.t2 =
                                                                    e.catch(
                                                                        21
                                                                    )),
                                                                (p = !0),
                                                                (f = e.t2);
                                                        case 37:
                                                            (e.prev = 37),
                                                                (e.prev = 38),
                                                                !c &&
                                                                    y.return &&
                                                                    y.return();
                                                        case 40:
                                                            if (
                                                                ((e.prev = 40),
                                                                !p)
                                                            ) {
                                                                e.next = 43;
                                                                break;
                                                            }
                                                            throw f;
                                                        case 43:
                                                            return e.finish(40);
                                                        case 44:
                                                            return e.finish(37);
                                                        case 45:
                                                            if (!s) {
                                                                e.next = 47;
                                                                break;
                                                            }
                                                            return e.abrupt(
                                                                "return"
                                                            );
                                                        case 47:
                                                            this.recorded =
                                                                u.typeOf(a);
                                                        case 48:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this,
                                            [
                                                [21, 33, 37, 45],
                                                [38, , 40, 44],
                                            ]
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        var t = this.bound || this.default,
                                            r = this.recorded,
                                            n = this.context;
                                        if (t instanceof ee || t instanceof Z)
                                            return t.accepts(e);
                                        if (r) return r.accepts(e);
                                        if (t) {
                                            if (
                                                "AnyType" === t.typeName ||
                                                "ExistentialType" === t.typeName
                                            )
                                                return !0;
                                            if (!t.accepts(e)) return !1;
                                        }
                                        return (
                                            (this.recorded = n.typeOf(e)), !0
                                        );
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        var r = this.bound || this.default,
                                            n = this.recorded;
                                        return e instanceof t
                                            ? 1
                                            : n
                                            ? L(n, e)
                                            : r
                                            ? L(r, e)
                                            : 1;
                                    },
                                },
                                {
                                    key: "unwrap",
                                    value: function () {
                                        var e = this.bound || this.default,
                                            t = this.recorded;
                                        return t
                                            ? t.unwrap()
                                            : e
                                            ? e.unwrap()
                                            : this;
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function (e) {
                                        var t = this.id,
                                            r = this.bound,
                                            n = this.default;
                                        if (e) {
                                            if (n)
                                                return t + " = " + n.toString();
                                            if (r)
                                                return t + ": " + r.toString();
                                        }
                                        return t;
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return {
                                            typeName: this.typeName,
                                            id: this.id,
                                            bound: this.bound,
                                            recorded: this.recorded,
                                        };
                                    },
                                },
                            ]),
                            t
                        );
                    })(W),
                    ee = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "FlowIntoType"),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(r, a, i) {
                                        var o,
                                            u,
                                            s,
                                            c,
                                            p,
                                            f,
                                            y,
                                            l,
                                            h,
                                            v,
                                            d,
                                            k,
                                            m,
                                            g,
                                            b,
                                            x,
                                            w,
                                            _;
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (
                                                                ((o =
                                                                    this
                                                                        .typeParameter),
                                                                (u =
                                                                    this
                                                                        .context),
                                                                (s =
                                                                    o.recorded),
                                                                !(
                                                                    (c =
                                                                        o.bound) instanceof
                                                                    t
                                                                ))
                                                            ) {
                                                                e.next = 5;
                                                                break;
                                                            }
                                                            return e.delegateYield(
                                                                c.errors(
                                                                    r,
                                                                    a,
                                                                    i
                                                                ),
                                                                "t0",
                                                                4
                                                            );
                                                        case 4:
                                                            return e.abrupt(
                                                                "return"
                                                            );
                                                        case 5:
                                                            if (!s) {
                                                                e.next = 47;
                                                                break;
                                                            }
                                                            if (!c) {
                                                                e.next = 39;
                                                                break;
                                                            }
                                                            (p = !1),
                                                                (f = !0),
                                                                (y = !1),
                                                                (l = void 0),
                                                                (e.prev = 11),
                                                                (h = c
                                                                    .errors(
                                                                        r,
                                                                        a,
                                                                        i
                                                                    )
                                                                    [
                                                                        Symbol
                                                                            .iterator
                                                                    ]());
                                                        case 13:
                                                            if (
                                                                (f = (v =
                                                                    h.next())
                                                                    .done)
                                                            ) {
                                                                e.next = 21;
                                                                break;
                                                            }
                                                            return (
                                                                (d = v.value),
                                                                (e.next = 17),
                                                                d
                                                            );
                                                        case 17:
                                                            p = !0;
                                                        case 18:
                                                            (f = !0),
                                                                (e.next = 13);
                                                            break;
                                                        case 21:
                                                            e.next = 27;
                                                            break;
                                                        case 23:
                                                            (e.prev = 23),
                                                                (e.t1 =
                                                                    e.catch(
                                                                        11
                                                                    )),
                                                                (y = !0),
                                                                (l = e.t1);
                                                        case 27:
                                                            (e.prev = 27),
                                                                (e.prev = 28),
                                                                !f &&
                                                                    h.return &&
                                                                    h.return();
                                                        case 30:
                                                            if (
                                                                ((e.prev = 30),
                                                                !y)
                                                            ) {
                                                                e.next = 33;
                                                                break;
                                                            }
                                                            throw l;
                                                        case 33:
                                                            return e.finish(30);
                                                        case 34:
                                                            return e.finish(27);
                                                        case 35:
                                                            if (!p) {
                                                                e.next = 37;
                                                                break;
                                                            }
                                                            return e.abrupt(
                                                                "return"
                                                            );
                                                        case 37:
                                                            e.next = 45;
                                                            break;
                                                        case 39:
                                                            if (!s.accepts(i)) {
                                                                e.next = 43;
                                                                break;
                                                            }
                                                            return e.abrupt(
                                                                "return"
                                                            );
                                                        case 43:
                                                            return (
                                                                (o.recorded =
                                                                    u.union(
                                                                        s,
                                                                        u.typeOf(
                                                                            i
                                                                        )
                                                                    )),
                                                                e.abrupt(
                                                                    "return"
                                                                )
                                                            );
                                                        case 45:
                                                            e.next = 82;
                                                            break;
                                                        case 47:
                                                            if (!c) {
                                                                e.next = 82;
                                                                break;
                                                            }
                                                            if (
                                                                "AnyType" !==
                                                                    c.typeName &&
                                                                "ExistentialType" !==
                                                                    c.typeName
                                                            ) {
                                                                e.next = 52;
                                                                break;
                                                            }
                                                            return e.abrupt(
                                                                "return"
                                                            );
                                                        case 52:
                                                            (k = !1),
                                                                (m = !0),
                                                                (g = !1),
                                                                (b = void 0),
                                                                (e.prev = 56),
                                                                (x = c
                                                                    .errors(
                                                                        r,
                                                                        a,
                                                                        i
                                                                    )
                                                                    [
                                                                        Symbol
                                                                            .iterator
                                                                    ]());
                                                        case 58:
                                                            if (
                                                                (m = (w =
                                                                    x.next())
                                                                    .done)
                                                            ) {
                                                                e.next = 66;
                                                                break;
                                                            }
                                                            return (
                                                                (_ = w.value),
                                                                (e.next = 62),
                                                                _
                                                            );
                                                        case 62:
                                                            k = !0;
                                                        case 63:
                                                            (m = !0),
                                                                (e.next = 58);
                                                            break;
                                                        case 66:
                                                            e.next = 72;
                                                            break;
                                                        case 68:
                                                            (e.prev = 68),
                                                                (e.t2 =
                                                                    e.catch(
                                                                        56
                                                                    )),
                                                                (g = !0),
                                                                (b = e.t2);
                                                        case 72:
                                                            (e.prev = 72),
                                                                (e.prev = 73),
                                                                !m &&
                                                                    x.return &&
                                                                    x.return();
                                                        case 75:
                                                            if (
                                                                ((e.prev = 75),
                                                                !g)
                                                            ) {
                                                                e.next = 78;
                                                                break;
                                                            }
                                                            throw b;
                                                        case 78:
                                                            return e.finish(75);
                                                        case 79:
                                                            return e.finish(72);
                                                        case 80:
                                                            if (!k) {
                                                                e.next = 82;
                                                                break;
                                                            }
                                                            return e.abrupt(
                                                                "return"
                                                            );
                                                        case 82:
                                                            o.recorded =
                                                                u.typeOf(i);
                                                        case 83:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this,
                                            [
                                                [11, 23, 27, 35],
                                                [28, , 30, 34],
                                                [56, 68, 72, 80],
                                                [73, , 75, 79],
                                            ]
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        var r = this.typeParameter,
                                            n = this.context,
                                            a = r.recorded,
                                            i = r.bound;
                                        if (i instanceof t) return i.accepts(e);
                                        if (a)
                                            return !(
                                                (i && !i.accepts(e)) ||
                                                (!a.accepts(e) &&
                                                    ((r.recorded = n.union(
                                                        a,
                                                        n.typeOf(e)
                                                    )),
                                                    0))
                                            );
                                        if (i) {
                                            if (
                                                "AnyType" === i.typeName ||
                                                "ExistentialType" === i.typeName
                                            )
                                                return !0;
                                            if (!i.accepts(e)) return !1;
                                        }
                                        return (r.recorded = n.typeOf(e)), !0;
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        var r = this.typeParameter,
                                            n = this.context,
                                            a = r.recorded,
                                            i = r.bound;
                                        if (i instanceof t)
                                            return i.compareWith(e);
                                        if (a)
                                            return i && -1 === L(i, e)
                                                ? -1
                                                : 0 === L(a, e)
                                                ? 0
                                                : ((r.recorded = n.union(a, e)),
                                                  1);
                                        if (i) {
                                            if (
                                                "AnyType" === i.typeName ||
                                                "ExistentialType" === i.typeName
                                            )
                                                return 1;
                                            if (-1 === L(i, e)) return -1;
                                        }
                                        return (r.recorded = e), 0;
                                    },
                                },
                                {
                                    key: "unwrap",
                                    value: function () {
                                        return this.typeParameter.unwrap();
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function (e) {
                                        return this.typeParameter.toString(e);
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return this.typeParameter.toJSON();
                                    },
                                },
                            ]),
                            t
                        );
                    })(W),
                    te = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "FunctionTypeRestParam"),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a) {
                                        var i;
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (
                                                                (i = this.type),
                                                                e.delegateYield(
                                                                    i.errors(
                                                                        t,
                                                                        r,
                                                                        a
                                                                    ),
                                                                    "t0",
                                                                    2
                                                                )
                                                            );
                                                        case 2:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        return this.type.accepts(e);
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        return e instanceof re || e instanceof t
                                            ? L(this.type, e.type)
                                            : -1 === L(this.type, e)
                                            ? -1
                                            : 1;
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        var e = this.type;
                                        return (
                                            "..." +
                                            this.name +
                                            ": " +
                                            e.toString()
                                        );
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return {
                                            typeName: this.typeName,
                                            name: this.name,
                                            type: this.type,
                                        };
                                    },
                                },
                            ]),
                            t
                        );
                    })(W),
                    re = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "FunctionTypeParam"),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a) {
                                        var i, o;
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (
                                                                ((i =
                                                                    this
                                                                        .optional),
                                                                (o = this.type),
                                                                !i ||
                                                                    void 0 !==
                                                                        a)
                                                            ) {
                                                                e.next = 5;
                                                                break;
                                                            }
                                                            return e.abrupt(
                                                                "return"
                                                            );
                                                        case 5:
                                                            return e.delegateYield(
                                                                o.errors(
                                                                    t,
                                                                    r,
                                                                    a
                                                                ),
                                                                "t0",
                                                                6
                                                            );
                                                        case 6:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        var t = this.optional,
                                            r = this.type;
                                        return (
                                            !(!t || void 0 !== e) ||
                                            r.accepts(e)
                                        );
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        return L(
                                            this.type,
                                            e instanceof t || e instanceof te
                                                ? e.type
                                                : e
                                        );
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        var e = this.optional,
                                            t = this.type;
                                        return (
                                            this.name +
                                            (e ? "?" : "") +
                                            ": " +
                                            t.toString()
                                        );
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return {
                                            typeName: this.typeName,
                                            name: this.name,
                                            optional: this.optional,
                                            type: this.type,
                                        };
                                    },
                                },
                            ]),
                            t
                        );
                    })(W),
                    ne = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "FunctionTypeReturn"),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a) {
                                        var i;
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (
                                                                (i = this.type),
                                                                e.delegateYield(
                                                                    i.errors(
                                                                        t,
                                                                        r.concat(
                                                                            "[[Return Type]]"
                                                                        ),
                                                                        a
                                                                    ),
                                                                    "t0",
                                                                    2
                                                                )
                                                            );
                                                        case 2:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        return this.type.accepts(e);
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        return e instanceof t
                                            ? L(this.type, e.type)
                                            : -1 === L(this.type, e)
                                            ? -1
                                            : 1;
                                    },
                                },
                                {
                                    key: "unwrap",
                                    value: function () {
                                        return this.type;
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        return this.type.toString();
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return {
                                            typeName: this.typeName,
                                            type: this.type,
                                        };
                                    },
                                },
                            ]),
                            t
                        );
                    })(W),
                    ae = Symbol("Parent"),
                    ie = Symbol("NameRegistry"),
                    oe = Symbol("ModuleRegistry"),
                    ue = Symbol("CurrentModule"),
                    se = Symbol("TypeConstructorRegistry"),
                    ce = Symbol("Inferrer"),
                    pe = Symbol("Type"),
                    fe = Symbol("TypeParameters"),
                    ye = Symbol("TypePredicateRegistry"),
                    le = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "FunctionType"),
                                (n.params = []),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a) {
                                        var i, o, u, s, c, p, f, y;
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (
                                                                "function" ==
                                                                typeof a
                                                            ) {
                                                                e.next = 4;
                                                                break;
                                                            }
                                                            return (
                                                                (e.next = 3),
                                                                [
                                                                    r,
                                                                    J(
                                                                        "ERR_EXPECT_FUNCTION"
                                                                    ),
                                                                    this,
                                                                ]
                                                            );
                                                        case 3:
                                                            return e.abrupt(
                                                                "return"
                                                            );
                                                        case 4:
                                                            if (
                                                                ((i = a[pe]),
                                                                (o =
                                                                    this
                                                                        .returnType),
                                                                (u =
                                                                    this
                                                                        .params),
                                                                !i)
                                                            ) {
                                                                e.next = 29;
                                                                break;
                                                            }
                                                            if (i.params) {
                                                                e.next = 9;
                                                                break;
                                                            }
                                                            return e.abrupt(
                                                                "return"
                                                            );
                                                        case 9:
                                                            s = 0;
                                                        case 10:
                                                            if (
                                                                !(s < u.length)
                                                            ) {
                                                                e.next = 24;
                                                                break;
                                                            }
                                                            if (
                                                                ((c = u[s]),
                                                                (p =
                                                                    i.params[
                                                                        s
                                                                    ]) ||
                                                                    c.optional)
                                                            ) {
                                                                e.next = 18;
                                                                break;
                                                            }
                                                            return (
                                                                (e.next = 16),
                                                                [
                                                                    r,
                                                                    J(
                                                                        "ERR_EXPECT_ARGUMENT",
                                                                        c.name,
                                                                        c.type.toString()
                                                                    ),
                                                                    this,
                                                                ]
                                                            );
                                                        case 16:
                                                            e.next = 21;
                                                            break;
                                                        case 18:
                                                            if (
                                                                c.acceptsType(p)
                                                            ) {
                                                                e.next = 21;
                                                                break;
                                                            }
                                                            return (
                                                                (e.next = 21),
                                                                [
                                                                    r,
                                                                    J(
                                                                        "ERR_EXPECT_ARGUMENT",
                                                                        c.name,
                                                                        c.type.toString()
                                                                    ),
                                                                    this,
                                                                ]
                                                            );
                                                        case 21:
                                                            s++, (e.next = 10);
                                                            break;
                                                        case 24:
                                                            if (
                                                                o.acceptsType(
                                                                    i.returnType
                                                                )
                                                            ) {
                                                                e.next = 27;
                                                                break;
                                                            }
                                                            return (
                                                                (e.next = 27),
                                                                [
                                                                    r,
                                                                    J(
                                                                        "ERR_EXPECT_RETURN",
                                                                        o.toString()
                                                                    ),
                                                                    this,
                                                                ]
                                                            );
                                                        case 27:
                                                            e.next = 32;
                                                            break;
                                                        case 29:
                                                            for (
                                                                f =
                                                                    this
                                                                        .context,
                                                                    y = 0;
                                                                y < u.length;
                                                                y++
                                                            )
                                                                u[
                                                                    y
                                                                ].acceptsType(
                                                                    f.any()
                                                                );
                                                            o.acceptsType(
                                                                f.any()
                                                            );
                                                        case 32:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        if ("function" != typeof e) return !1;
                                        var t = this.returnType,
                                            r = this.params,
                                            n = e[pe];
                                        if (n) {
                                            if (!n.params) return !0;
                                            for (var a = 0; a < r.length; a++) {
                                                var i = r[a],
                                                    o = n.params[a];
                                                if (!o && !i.optional)
                                                    return !1;
                                                if (!i.acceptsType(o))
                                                    return !1;
                                            }
                                            return !!t.acceptsType(
                                                n.returnType
                                            );
                                        }
                                        for (
                                            var u = this.context, s = 0;
                                            s < r.length;
                                            s++
                                        )
                                            r[s].acceptsType(u.any());
                                        return t.acceptsType(u.any()), !0;
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        if (!(e instanceof t)) return -1;
                                        var r = !1,
                                            n = L(
                                                this.returnType,
                                                e.returnType
                                            );
                                        if (-1 === n) return -1;
                                        1 === n && (r = !0);
                                        for (
                                            var a = this.params,
                                                i = e.params,
                                                o = 0;
                                            o < a.length;
                                            o++
                                        ) {
                                            var u = a[o],
                                                s =
                                                    o >= i.length
                                                        ? e.rest
                                                        : i[o];
                                            if (null == s) return -1;
                                            var c = L(u, s);
                                            if (-1 === c) return -1;
                                            1 === c && (r = !0);
                                        }
                                        return r ? 1 : 0;
                                    },
                                },
                                {
                                    key: "acceptsParams",
                                    value: function () {
                                        for (
                                            var e = this.params,
                                                t = this.rest,
                                                r = e.length,
                                                n = arguments.length,
                                                a = Array(n),
                                                i = 0;
                                            i < n;
                                            i++
                                        )
                                            a[i] = arguments[i];
                                        for (
                                            var o = a.length, u = 0;
                                            u < r;
                                            u++
                                        ) {
                                            var s = e[u];
                                            if (u < o) {
                                                if (!s.accepts(a[u])) return !1;
                                            } else if (!s.accepts(void 0))
                                                return !1;
                                        }
                                        if (o > r && t)
                                            for (var c = r; c < o; c++)
                                                if (!t.accepts(a[c])) return !1;
                                        return !0;
                                    },
                                },
                                {
                                    key: "acceptsReturn",
                                    value: function (e) {
                                        return this.returnType.accepts(e);
                                    },
                                },
                                {
                                    key: "assertParams",
                                    value: function () {
                                        for (
                                            var e = this.params,
                                                t = this.rest,
                                                r = e.length,
                                                n = arguments.length,
                                                a = Array(n),
                                                i = 0;
                                            i < n;
                                            i++
                                        )
                                            a[i] = arguments[i];
                                        for (
                                            var o = a.length, u = 0;
                                            u < r;
                                            u++
                                        ) {
                                            var s = e[u];
                                            u < o
                                                ? s.assert(a[u])
                                                : s.assert(void 0);
                                        }
                                        if (o > r && t)
                                            for (var c = r; c < o; c++)
                                                t.assert(a[c]);
                                        return a;
                                    },
                                },
                                {
                                    key: "assertReturn",
                                    value: function (e) {
                                        return this.returnType.assert(e), e;
                                    },
                                },
                                {
                                    key: "invoke",
                                    value: function () {
                                        for (
                                            var e = this.params,
                                                t = this.rest,
                                                r = this.context,
                                                n = e.length,
                                                a = arguments.length,
                                                i = Array(a),
                                                o = 0;
                                            o < a;
                                            o++
                                        )
                                            i[o] = arguments[o];
                                        for (
                                            var u = i.length, s = 0;
                                            s < n;
                                            s++
                                        ) {
                                            var c = e[s];
                                            if (s < u) {
                                                if (!c.acceptsType(i[s]))
                                                    return r.empty();
                                            } else if (!c.accepts(void 0))
                                                return r.empty();
                                        }
                                        if (u > n && t)
                                            for (var p = n; p < u; p++)
                                                if (!t.acceptsType(i[p]))
                                                    return r.empty();
                                        return this.returnType.type;
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        for (
                                            var e = this.params,
                                                t = this.rest,
                                                r = this.returnType,
                                                n = [],
                                                a = 0;
                                            a < e.length;
                                            a++
                                        )
                                            n.push(e[a].toString());
                                        return (
                                            t && n.push(t.toString()),
                                            "(" +
                                                n.join(", ") +
                                                ") => " +
                                                r.toString()
                                        );
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return {
                                            typeName: this.typeName,
                                            params: this.params,
                                            rest: this.rest,
                                            returnType: this.returnType,
                                        };
                                    },
                                },
                            ]),
                            t
                        );
                    })(W),
                    he = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "GeneratorType"),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a) {
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (
                                                                a &&
                                                                "function" ==
                                                                    typeof a.next &&
                                                                "function" ==
                                                                    typeof a.return &&
                                                                "function" ==
                                                                    typeof a.throw
                                                            ) {
                                                                e.next = 4;
                                                                break;
                                                            }
                                                            return (
                                                                (e.next = 4),
                                                                [
                                                                    r,
                                                                    J(
                                                                        "ERR_EXPECT_GENERATOR"
                                                                    ),
                                                                    this,
                                                                ]
                                                            );
                                                        case 4:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        return (
                                            e &&
                                            "function" == typeof e.next &&
                                            "function" == typeof e.return &&
                                            "function" == typeof e.throw
                                        );
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        if (!(e instanceof t))
                                            return -1 === L(this.yieldType, e)
                                                ? -1
                                                : 1;
                                        var r = !1,
                                            n = L(this.yieldType, e.yieldType);
                                        return -1 === n
                                            ? -1
                                            : (1 === n && (r = !0),
                                              -1 ===
                                              (n = L(
                                                  this.returnType,
                                                  e.returnType
                                              ))
                                                  ? -1
                                                  : (1 === n && (r = !0),
                                                    -1 ===
                                                    (n = L(
                                                        this.nextType,
                                                        e.nextType
                                                    ))
                                                        ? -1
                                                        : (1 === n && (r = !0),
                                                          r ? 1 : 0)));
                                    },
                                },
                                {
                                    key: "acceptsYield",
                                    value: function (e) {
                                        return this.yieldType.accepts(e);
                                    },
                                },
                                {
                                    key: "acceptsReturn",
                                    value: function (e) {
                                        return this.returnType.accepts(e);
                                    },
                                },
                                {
                                    key: "acceptsNext",
                                    value: function (e) {
                                        return this.nextType.accepts(e);
                                    },
                                },
                                {
                                    key: "assertYield",
                                    value: function (e) {
                                        return this.yieldType.assert(e);
                                    },
                                },
                                {
                                    key: "assertReturn",
                                    value: function (e) {
                                        return this.returnType.assert(e);
                                    },
                                },
                                {
                                    key: "assertNext",
                                    value: function (e) {
                                        return this.nextType.assert(e);
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        var e = this.yieldType,
                                            t = this.returnType,
                                            r = this.nextType;
                                        return (
                                            "Generator<" +
                                            e.toString() +
                                            ", " +
                                            t.toString() +
                                            ", " +
                                            r.toString()
                                        );
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return {
                                            typeName: this.typeName,
                                            yieldType: this.yieldType,
                                            returnType: this.returnType,
                                            nextType: this.nextType,
                                        };
                                    },
                                },
                            ]),
                            t
                        );
                    })(W),
                    ve = new WeakSet(),
                    de = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "TypeConstructor"),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a) {
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        var t = this.context,
                                            r = this.name;
                                        return (
                                            ve.has(this) ||
                                                (t.emitWarningMessage(
                                                    "TypeConstructor " +
                                                        r +
                                                        " does not implement accepts()."
                                                ),
                                                ve.add(this)),
                                            !1
                                        );
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        var t = this.context,
                                            r = this.name;
                                        return (
                                            ve.has(this) ||
                                                (t.emitWarningMessage(
                                                    "TypeConstructor " +
                                                        r +
                                                        " does not implement compareWith()."
                                                ),
                                                ve.add(this)),
                                            -1
                                        );
                                    },
                                },
                                {
                                    key: "inferTypeParameters",
                                    value: function (e) {
                                        return [];
                                    },
                                },
                                {
                                    key: "apply",
                                    value: function () {
                                        var e = new V(this.context);
                                        e.parent = this;
                                        for (
                                            var t = arguments.length,
                                                r = Array(t),
                                                n = 0;
                                            n < t;
                                            n++
                                        )
                                            r[n] = arguments[n];
                                        return (e.typeInstances = r), e;
                                    },
                                },
                                {
                                    key: "unwrap",
                                    value: function () {
                                        return this;
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        return this.name;
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return {
                                            typeName: this.typeName,
                                            name: this.name,
                                        };
                                    },
                                },
                            ]),
                            t
                        );
                    })(W),
                    ke = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "GenericType"),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a) {
                                        var i, o;
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (
                                                                ((i =
                                                                    this.name),
                                                                (o = this.impl),
                                                                a instanceof o)
                                                            ) {
                                                                e.next = 4;
                                                                break;
                                                            }
                                                            return (
                                                                (e.next = 4),
                                                                [
                                                                    r,
                                                                    J(
                                                                        "ERR_EXPECT_INSTANCEOF",
                                                                        i
                                                                    ),
                                                                    this,
                                                                ]
                                                            );
                                                        case 4:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        return e instanceof this.impl;
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        var r = this.context,
                                            n = this.impl,
                                            a = r.getAnnotation(n);
                                        if (a) {
                                            for (
                                                var i = arguments.length,
                                                    o = Array(
                                                        i > 1 ? i - 1 : 0
                                                    ),
                                                    u = 1;
                                                u < i;
                                                u++
                                            )
                                                o[u - 1] = arguments[u];
                                            var s = a.unwrap.apply(a, y(o));
                                            return L(e, s);
                                        }
                                        return e instanceof t &&
                                            (e.impl === n ||
                                                (n && n.isPrototypeOf(e.impl)))
                                            ? 0
                                            : -1;
                                    },
                                },
                                {
                                    key: "unwrap",
                                    value: function () {
                                        var e = this.context,
                                            t = this.impl;
                                        if ("function" != typeof t) return this;
                                        var r = e.getAnnotation(t);
                                        return null != r
                                            ? r.unwrap.apply(r, arguments)
                                            : this;
                                    },
                                },
                                {
                                    key: "inferTypeParameters",
                                    value: function (e) {
                                        return [];
                                    },
                                },
                            ]),
                            t
                        );
                    })(de);
                function me(e, t) {
                    if (!e) {
                        var r = new Error(t);
                        throw (
                            ((r.name = "InvariantViolation"),
                            "function" == typeof Error.captureStackTrace &&
                                Error.captureStackTrace(r, me),
                            r)
                        );
                    }
                }
                var ge = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "NullLiteralType"),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a) {
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (null === a) {
                                                                e.next = 3;
                                                                break;
                                                            }
                                                            return (
                                                                (e.next = 3),
                                                                [
                                                                    r,
                                                                    J(
                                                                        "ERR_EXPECT_NULL"
                                                                    ),
                                                                    this,
                                                                ]
                                                            );
                                                        case 3:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        return null === e;
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        return e instanceof t ? 0 : -1;
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        return "null";
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return { typeName: this.typeName };
                                    },
                                },
                            ]),
                            t
                        );
                    })(W),
                    be = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "VoidType"),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a) {
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (void 0 === a) {
                                                                e.next = 3;
                                                                break;
                                                            }
                                                            return (
                                                                (e.next = 3),
                                                                [
                                                                    r,
                                                                    J(
                                                                        "ERR_EXPECT_VOID"
                                                                    ),
                                                                    this,
                                                                ]
                                                            );
                                                        case 3:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        return void 0 === e;
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        return e instanceof t ? 0 : -1;
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        return "void";
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return { typeName: this.typeName };
                                    },
                                },
                            ]),
                            t
                        );
                    })(W),
                    xe = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "NullableType"),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a) {
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (null == a) {
                                                                e.next = 2;
                                                                break;
                                                            }
                                                            return e.delegateYield(
                                                                this.type.errors(
                                                                    t,
                                                                    r,
                                                                    a
                                                                ),
                                                                "t0",
                                                                2
                                                            );
                                                        case 2:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        return (
                                            null == e || this.type.accepts(e)
                                        );
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        return e instanceof ge ||
                                            e instanceof be
                                            ? 1
                                            : e instanceof t
                                            ? L(this.type, e.type)
                                            : -1 === L(this.type, e)
                                            ? -1
                                            : 1;
                                    },
                                },
                                {
                                    key: "unwrap",
                                    value: function () {
                                        return this;
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        return "? " + this.type.toString();
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return {
                                            typeName: this.typeName,
                                            type: this.type,
                                        };
                                    },
                                },
                            ]),
                            t
                        );
                    })(W),
                    we = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "ObjectTypeProperty"),
                                (n.static = !1),
                                (n.constraints = []),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "addConstraint",
                                    value: function () {
                                        for (
                                            var e = arguments.length,
                                                t = Array(e),
                                                r = 0;
                                            r < e;
                                            r++
                                        )
                                            t[r] = arguments[r];
                                        return (
                                            z.apply(
                                                void 0,
                                                [this].concat(y(t))
                                            ),
                                            this
                                        );
                                    },
                                },
                                {
                                    key: "isNullable",
                                    value: function () {
                                        return this.value instanceof xe;
                                    },
                                },
                                {
                                    key: "existsOn",
                                    value: function (e) {
                                        return (
                                            this.key in
                                                (this.static
                                                    ? e.constructor
                                                    : e) ==
                                            1
                                        );
                                    },
                                },
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, i) {
                                        var o,
                                            u,
                                            s,
                                            c,
                                            p,
                                            f,
                                            y,
                                            l,
                                            h,
                                            v,
                                            d,
                                            k,
                                            m;
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (
                                                                ((o =
                                                                    this
                                                                        .optional),
                                                                (u = this.key),
                                                                (s =
                                                                    this.value),
                                                                (c =
                                                                    this
                                                                        .static),
                                                                (p = void 0),
                                                                (f = void 0),
                                                                !c)
                                                            ) {
                                                                e.next = 18;
                                                                break;
                                                            }
                                                            if (
                                                                null !== i &&
                                                                ("object" ===
                                                                    (void 0 ===
                                                                    i
                                                                        ? "undefined"
                                                                        : a(
                                                                              i
                                                                          )) ||
                                                                    "function" ==
                                                                        typeof i)
                                                            ) {
                                                                e.next = 8;
                                                                break;
                                                            }
                                                            return (
                                                                (e.next = 7),
                                                                [
                                                                    r,
                                                                    J(
                                                                        "ERR_EXPECT_OBJECT"
                                                                    ),
                                                                    this,
                                                                ]
                                                            );
                                                        case 7:
                                                            return e.abrupt(
                                                                "return"
                                                            );
                                                        case 8:
                                                            if (
                                                                ((f =
                                                                    r.concat(
                                                                        "constructor"
                                                                    )),
                                                                "function" ==
                                                                    typeof i.constructor)
                                                            ) {
                                                                e.next = 14;
                                                                break;
                                                            }
                                                            if (o) {
                                                                e.next = 13;
                                                                break;
                                                            }
                                                            return (
                                                                (e.next = 13),
                                                                [
                                                                    f,
                                                                    J(
                                                                        "ERR_EXPECT_FUNCTION"
                                                                    ),
                                                                    this,
                                                                ]
                                                            );
                                                        case 13:
                                                            return e.abrupt(
                                                                "return"
                                                            );
                                                        case 14:
                                                            f.push(u),
                                                                (p =
                                                                    i
                                                                        .constructor[
                                                                        u
                                                                    ]),
                                                                (e.next = 20);
                                                            break;
                                                        case 18:
                                                            (p = i[u]),
                                                                (f =
                                                                    r.concat(
                                                                        u
                                                                    ));
                                                        case 20:
                                                            if (
                                                                !o ||
                                                                void 0 !== p
                                                            ) {
                                                                e.next = 22;
                                                                break;
                                                            }
                                                            return e.abrupt(
                                                                "return"
                                                            );
                                                        case 22:
                                                            if (
                                                                !this.isNullable() ||
                                                                this.existsOn(i)
                                                            ) {
                                                                e.next = 26;
                                                                break;
                                                            }
                                                            return (
                                                                (e.next = 25),
                                                                [
                                                                    f,
                                                                    J(
                                                                        "ERR_MISSING_PROPERTY"
                                                                    ),
                                                                    this,
                                                                ]
                                                            );
                                                        case 25:
                                                            return e.abrupt(
                                                                "return"
                                                            );
                                                        case 26:
                                                            (y = !1),
                                                                (l = !0),
                                                                (h = !1),
                                                                (v = void 0),
                                                                (e.prev = 30),
                                                                (d = s
                                                                    .errors(
                                                                        t,
                                                                        f,
                                                                        p
                                                                    )
                                                                    [
                                                                        Symbol
                                                                            .iterator
                                                                    ]());
                                                        case 32:
                                                            if (
                                                                (l = (k =
                                                                    d.next())
                                                                    .done)
                                                            ) {
                                                                e.next = 40;
                                                                break;
                                                            }
                                                            return (
                                                                (m = k.value),
                                                                (y = !0),
                                                                (e.next = 37),
                                                                m
                                                            );
                                                        case 37:
                                                            (l = !0),
                                                                (e.next = 32);
                                                            break;
                                                        case 40:
                                                            e.next = 46;
                                                            break;
                                                        case 42:
                                                            (e.prev = 42),
                                                                (e.t0 =
                                                                    e.catch(
                                                                        30
                                                                    )),
                                                                (h = !0),
                                                                (v = e.t0);
                                                        case 46:
                                                            (e.prev = 46),
                                                                (e.prev = 47),
                                                                !l &&
                                                                    d.return &&
                                                                    d.return();
                                                        case 49:
                                                            if (
                                                                ((e.prev = 49),
                                                                !h)
                                                            ) {
                                                                e.next = 52;
                                                                break;
                                                            }
                                                            throw v;
                                                        case 52:
                                                            return e.finish(49);
                                                        case 53:
                                                            return e.finish(46);
                                                        case 54:
                                                            if (y) {
                                                                e.next = 56;
                                                                break;
                                                            }
                                                            return e.delegateYield(
                                                                K(
                                                                    this,
                                                                    t,
                                                                    f,
                                                                    p
                                                                ),
                                                                "t1",
                                                                56
                                                            );
                                                        case 56:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this,
                                            [
                                                [30, 42, 46, 54],
                                                [47, , 49, 53],
                                            ]
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        var t = this.optional,
                                            r = this.key,
                                            n = this.value,
                                            i = void 0;
                                        if (this.static) {
                                            if (
                                                null === e ||
                                                ("object" !==
                                                    (void 0 === e
                                                        ? "undefined"
                                                        : a(e)) &&
                                                    "function" != typeof e)
                                            )
                                                return !1;
                                            if (
                                                "function" !=
                                                typeof e.constructor
                                            )
                                                return !!t;
                                            i = e.constructor[r];
                                        } else i = e[r];
                                        return (
                                            !(!t || void 0 !== i) ||
                                            (!(
                                                this.isNullable() &&
                                                !this.existsOn(e)
                                            ) &&
                                                !!n.accepts(i) &&
                                                H(this, i))
                                        );
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        return e instanceof t
                                            ? e.key !== this.key
                                                ? -1
                                                : L(this.value, e.value)
                                            : -1;
                                    },
                                },
                                {
                                    key: "unwrap",
                                    value: function () {
                                        return this.value.unwrap();
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        var e = this.key;
                                        return (
                                            "symbol" ===
                                                (void 0 === e
                                                    ? "undefined"
                                                    : a(e)) &&
                                                (e = "[" + e.toString() + "]"),
                                            this.static
                                                ? "static " +
                                                  e +
                                                  (this.optional ? "?" : "") +
                                                  ": " +
                                                  this.value.toString() +
                                                  ";"
                                                : e +
                                                  (this.optional ? "?" : "") +
                                                  ": " +
                                                  this.value.toString() +
                                                  ";"
                                        );
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return {
                                            typeName: this.typeName,
                                            key: this.key,
                                            value: this.value,
                                            optional: this.optional,
                                        };
                                    },
                                },
                            ]),
                            t
                        );
                    })(W),
                    _e = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "ObjectTypeIndexer"),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a, i) {
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (
                                                                ("NumberType" !==
                                                                    this.key
                                                                        .typeName &&
                                                                    "NumericLiteralType" !==
                                                                        this.key
                                                                            .typeName) ||
                                                                    (a = +a),
                                                                e.delegateYield(
                                                                    this.key.errors(
                                                                        t,
                                                                        r.concat(
                                                                            "[[Key]]"
                                                                        ),
                                                                        a
                                                                    ),
                                                                    "t0",
                                                                    2
                                                                )
                                                            );
                                                        case 2:
                                                            return e.delegateYield(
                                                                this.value.errors(
                                                                    t,
                                                                    r.concat(a),
                                                                    i
                                                                ),
                                                                "t1",
                                                                3
                                                            );
                                                        case 3:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        return this.value.accepts(e);
                                    },
                                },
                                {
                                    key: "acceptsKey",
                                    value: function (e) {
                                        return (
                                            ("NumberType" !==
                                                this.key.typeName &&
                                                "NumericLiteralType" !==
                                                    this.key.typeName) ||
                                                (e = +e),
                                            this.key.accepts(e)
                                        );
                                    },
                                },
                                {
                                    key: "acceptsValue",
                                    value: function (e) {
                                        return this.value.accepts(e);
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        if (e instanceof we)
                                            return this.key.accepts(e.key)
                                                ? L(this.value, e.value)
                                                : -1;
                                        if (!(e instanceof t)) return -1;
                                        var r = L(this.key, e.key);
                                        if (-1 === r) return -1;
                                        var n = L(this.value, e.value);
                                        return -1 === n
                                            ? -1
                                            : 0 === r && 0 === n
                                            ? 0
                                            : 1;
                                    },
                                },
                                {
                                    key: "unwrap",
                                    value: function () {
                                        return this.value.unwrap();
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        return (
                                            "[" +
                                            this.id +
                                            ": " +
                                            this.key.toString() +
                                            "]: " +
                                            this.value.toString() +
                                            ";"
                                        );
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return {
                                            typeName: this.typeName,
                                            id: this.id,
                                            key: this.key,
                                            value: this.value,
                                        };
                                    },
                                },
                            ]),
                            t
                        );
                    })(W),
                    Te = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "ObjectTypeCallProperty"),
                                (n.static = !1),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, i) {
                                        var o, u, s, c;
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (
                                                                ((o =
                                                                    this.value),
                                                                (u =
                                                                    this
                                                                        .static),
                                                                (s = void 0),
                                                                (c = void 0),
                                                                !u)
                                                            ) {
                                                                e.next = 16;
                                                                break;
                                                            }
                                                            if (
                                                                null !== i &&
                                                                ("object" ===
                                                                    (void 0 ===
                                                                    i
                                                                        ? "undefined"
                                                                        : a(
                                                                              i
                                                                          )) ||
                                                                    "function" ==
                                                                        typeof i)
                                                            ) {
                                                                e.next = 8;
                                                                break;
                                                            }
                                                            return (
                                                                (e.next = 7),
                                                                [
                                                                    r,
                                                                    J(
                                                                        "ERR_EXPECT_OBJECT"
                                                                    ),
                                                                    this,
                                                                ]
                                                            );
                                                        case 7:
                                                            return e.abrupt(
                                                                "return"
                                                            );
                                                        case 8:
                                                            if (
                                                                ((c =
                                                                    r.concat(
                                                                        "constructor"
                                                                    )),
                                                                "function" ==
                                                                    typeof i.constructor)
                                                            ) {
                                                                e.next = 13;
                                                                break;
                                                            }
                                                            return (
                                                                (e.next = 12),
                                                                [
                                                                    c,
                                                                    J(
                                                                        "ERR_EXPECT_FUNCTION"
                                                                    ),
                                                                    this,
                                                                ]
                                                            );
                                                        case 12:
                                                            return e.abrupt(
                                                                "return"
                                                            );
                                                        case 13:
                                                            (s = i.constructor),
                                                                (e.next = 18);
                                                            break;
                                                        case 16:
                                                            (s = i), (c = r);
                                                        case 18:
                                                            return e.delegateYield(
                                                                o.errors(
                                                                    t,
                                                                    c,
                                                                    s
                                                                ),
                                                                "t0",
                                                                19
                                                            );
                                                        case 19:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        var t = this.value,
                                            r = void 0;
                                        if (this.static) {
                                            if (
                                                null === e ||
                                                ("object" !==
                                                    (void 0 === e
                                                        ? "undefined"
                                                        : a(e)) &&
                                                    "function" != typeof e)
                                            )
                                                return !1;
                                            if (
                                                "function" !=
                                                typeof e.constructor
                                            )
                                                return !1;
                                            r = e.constructor;
                                        } else r = e;
                                        return t.accepts(r);
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        return e instanceof t
                                            ? L(this.value, e.value)
                                            : -1;
                                    },
                                },
                                {
                                    key: "unwrap",
                                    value: function () {
                                        return this.value.unwrap();
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        return this.static
                                            ? "static " +
                                                  this.value.toString() +
                                                  ";"
                                            : this.value.toString();
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return {
                                            typeName: this.typeName,
                                            value: this.value,
                                        };
                                    },
                                },
                            ]),
                            t
                        );
                    })(W),
                    Ee = (function (e) {
                        function t() {
                            return (
                                i(this, t),
                                p(
                                    this,
                                    (
                                        t.__proto__ || Object.getPrototypeOf(t)
                                    ).apply(this, arguments)
                                )
                            );
                        }
                        return s(t, e), t;
                    })(W),
                    Oe = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "VarDeclaration"),
                                (n.constraints = []),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "addConstraint",
                                    value: function () {
                                        for (
                                            var e = arguments.length,
                                                t = Array(e),
                                                r = 0;
                                            r < e;
                                            r++
                                        )
                                            t[r] = arguments[r];
                                        return (
                                            z.apply(
                                                void 0,
                                                [this].concat(y(t))
                                            ),
                                            this
                                        );
                                    },
                                },
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a) {
                                        var i, o, u, s, c, p, f, y;
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            (i = this.type),
                                                                (o = !1),
                                                                (u = !0),
                                                                (s = !1),
                                                                (c = void 0),
                                                                (e.prev = 5),
                                                                (p = i
                                                                    .errors(
                                                                        t,
                                                                        r,
                                                                        a
                                                                    )
                                                                    [
                                                                        Symbol
                                                                            .iterator
                                                                    ]());
                                                        case 7:
                                                            if (
                                                                (u = (f =
                                                                    p.next())
                                                                    .done)
                                                            ) {
                                                                e.next = 15;
                                                                break;
                                                            }
                                                            return (
                                                                (y = f.value),
                                                                (o = !0),
                                                                (e.next = 12),
                                                                y
                                                            );
                                                        case 12:
                                                            (u = !0),
                                                                (e.next = 7);
                                                            break;
                                                        case 15:
                                                            e.next = 21;
                                                            break;
                                                        case 17:
                                                            (e.prev = 17),
                                                                (e.t0 =
                                                                    e.catch(5)),
                                                                (s = !0),
                                                                (c = e.t0);
                                                        case 21:
                                                            (e.prev = 21),
                                                                (e.prev = 22),
                                                                !u &&
                                                                    p.return &&
                                                                    p.return();
                                                        case 24:
                                                            if (
                                                                ((e.prev = 24),
                                                                !s)
                                                            ) {
                                                                e.next = 27;
                                                                break;
                                                            }
                                                            throw c;
                                                        case 27:
                                                            return e.finish(24);
                                                        case 28:
                                                            return e.finish(21);
                                                        case 29:
                                                            if (o) {
                                                                e.next = 31;
                                                                break;
                                                            }
                                                            return e.delegateYield(
                                                                K(
                                                                    this,
                                                                    t,
                                                                    r,
                                                                    a
                                                                ),
                                                                "t1",
                                                                31
                                                            );
                                                        case 31:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this,
                                            [
                                                [5, 17, 21, 29],
                                                [22, , 24, 28],
                                            ]
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        return (
                                            !!this.type.accepts(e) &&
                                            !!H(this, e)
                                        );
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        return L(this.type, e);
                                    },
                                },
                                {
                                    key: "unwrap",
                                    value: function () {
                                        return this.type.unwrap();
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        return (
                                            "declare var " +
                                            this.name +
                                            ": " +
                                            this.type.toString() +
                                            ";"
                                        );
                                    },
                                },
                            ]),
                            t
                        );
                    })(Ee),
                    Ne = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "TypeDeclaration"),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "addConstraint",
                                    value: function () {
                                        var e;
                                        return (
                                            (e =
                                                this
                                                    .typeAlias).addConstraint.apply(
                                                e,
                                                arguments
                                            ),
                                            this
                                        );
                                    },
                                },
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a) {
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return e.delegateYield(
                                                                this.typeAlias.errors(
                                                                    t,
                                                                    r,
                                                                    a
                                                                ),
                                                                "t0",
                                                                1
                                                            );
                                                        case 1:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "apply",
                                    value: function () {
                                        var e;
                                        return (e = this.typeAlias).apply.apply(
                                            e,
                                            arguments
                                        );
                                    },
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        return this.typeAlias.accepts(e);
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        return L(this.typeAlias, e);
                                    },
                                },
                                {
                                    key: "hasProperty",
                                    value: function (e) {
                                        for (
                                            var t,
                                                r = arguments.length,
                                                n = Array(r > 1 ? r - 1 : 0),
                                                a = 1;
                                            a < r;
                                            a++
                                        )
                                            n[a - 1] = arguments[a];
                                        return (t =
                                            this.typeAlias).hasProperty.apply(
                                            t,
                                            [e].concat(y(n))
                                        );
                                    },
                                },
                                {
                                    key: "getProperty",
                                    value: function (e) {
                                        for (
                                            var t,
                                                r = arguments.length,
                                                n = Array(r > 1 ? r - 1 : 0),
                                                a = 1;
                                            a < r;
                                            a++
                                        )
                                            n[a - 1] = arguments[a];
                                        return (t =
                                            this.typeAlias).getProperty.apply(
                                            t,
                                            [e].concat(y(n))
                                        );
                                    },
                                },
                                {
                                    key: "unwrap",
                                    value: function () {
                                        var e;
                                        return (e =
                                            this.typeAlias).unwrap.apply(
                                            e,
                                            arguments
                                        );
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        return (
                                            "declare " +
                                            this.typeAlias.toString(!0) +
                                            ";"
                                        );
                                    },
                                },
                                {
                                    key: "type",
                                    get: function () {
                                        return this.typeAlias.type;
                                    },
                                },
                            ]),
                            t
                        );
                    })(Ee),
                    Se = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "ModuleDeclaration"),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "get",
                                    value: function (e) {
                                        var t = this.moduleExports;
                                        if (t) {
                                            var r = t.unwrap();
                                            if (
                                                "function" ==
                                                typeof r.getProperty
                                            ) {
                                                var n = r.getProperty(e);
                                                if (n) return n.unwrap();
                                            }
                                        } else {
                                            var a = this.declarations[e];
                                            if (a) return a.unwrap();
                                        }
                                    },
                                },
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a) {
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "import",
                                    value: function (e) {
                                        return (
                                            /^\.\//.test(e) &&
                                                (e =
                                                    "" +
                                                    this.name +
                                                    e.slice(1)),
                                            this.innerContext.import(e)
                                        );
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        var e = this.name,
                                            t = this.declarations,
                                            r = this.modules,
                                            n = this.moduleExports,
                                            a = [];
                                        for (var i in t) {
                                            var o = t[i];
                                            a.push(o.toString(!0));
                                        }
                                        if (r)
                                            for (var u in r) {
                                                var s = r[u];
                                                a.push(s.toString());
                                            }
                                        return (
                                            n && a.push(n.toString()),
                                            'declare module "' +
                                                e +
                                                '" {\n' +
                                                (function (e) {
                                                    for (
                                                        var t = e.split("\n"),
                                                            r = t.length,
                                                            n = 0;
                                                        n < r;
                                                        n++
                                                    )
                                                        t[n] = "  " + t[n];
                                                    return t.join("\n");
                                                })(a.join("\n\n")) +
                                                "}"
                                        );
                                    },
                                },
                                {
                                    key: "moduleType",
                                    get: function () {
                                        return this.moduleExports
                                            ? "commonjs"
                                            : "es6";
                                    },
                                },
                                {
                                    key: "isCommonJS",
                                    get: function () {
                                        return !!this.moduleExports;
                                    },
                                },
                                {
                                    key: "isES6",
                                    get: function () {
                                        return !this.moduleExports;
                                    },
                                },
                                {
                                    key: "declarations",
                                    get: function () {
                                        return this.innerContext[ie];
                                    },
                                },
                                {
                                    key: "modules",
                                    get: function () {
                                        return this.innerContext[oe];
                                    },
                                },
                            ]),
                            t
                        );
                    })(Ee),
                    Pe = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "ModuleExports"),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a) {
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return e.delegateYield(
                                                                this.type.errors(
                                                                    t,
                                                                    r,
                                                                    a
                                                                ),
                                                                "t0",
                                                                1
                                                            );
                                                        case 1:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "unwrap",
                                    value: function () {
                                        return this.type.unwrap();
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        return (
                                            "declare module.exports: " +
                                            this.type.toString() +
                                            ";"
                                        );
                                    },
                                },
                            ]),
                            t
                        );
                    })(Ee),
                    Ae = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "ClassDeclaration"),
                                (n.shapeID = Symbol()),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, i) {
                                        var o,
                                            u,
                                            s,
                                            c,
                                            p,
                                            y,
                                            l,
                                            h,
                                            v,
                                            d,
                                            k,
                                            m,
                                            g;
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (
                                                                ((o =
                                                                    this.body),
                                                                (u =
                                                                    this
                                                                        .superClass &&
                                                                    this.superClass.unwrap()),
                                                                null !== i &&
                                                                    ("object" ===
                                                                        (void 0 ===
                                                                        i
                                                                            ? "undefined"
                                                                            : a(
                                                                                  i
                                                                              )) ||
                                                                        "function" ==
                                                                            typeof i))
                                                            ) {
                                                                e.next = 6;
                                                                break;
                                                            }
                                                            return (
                                                                (e.next = 5),
                                                                [
                                                                    r,
                                                                    J(
                                                                        "ERR_EXPECT_INSTANCEOF",
                                                                        this
                                                                            .name
                                                                    ),
                                                                    this,
                                                                ]
                                                            );
                                                        case 5:
                                                            return e.abrupt(
                                                                "return"
                                                            );
                                                        case 6:
                                                            if (!u) {
                                                                e.next = 42;
                                                                break;
                                                            }
                                                            (s = !0),
                                                                (c = !1),
                                                                (p = void 0),
                                                                (e.prev = 10),
                                                                (y = u
                                                                    .errors(
                                                                        t,
                                                                        r,
                                                                        i
                                                                    )
                                                                    [
                                                                        Symbol
                                                                            .iterator
                                                                    ]());
                                                        case 12:
                                                            if (
                                                                (s = (l =
                                                                    y.next())
                                                                    .done)
                                                            ) {
                                                                e.next = 28;
                                                                break;
                                                            }
                                                            if (
                                                                ((h = l.value),
                                                                (v = f(h, 3)),
                                                                (d = v[0]),
                                                                (k = v[1]),
                                                                (m = v[2]),
                                                                (g =
                                                                    d[
                                                                        r.length
                                                                    ]),
                                                                !o.getProperty(
                                                                    g
                                                                ))
                                                            ) {
                                                                e.next = 23;
                                                                break;
                                                            }
                                                            return e.abrupt(
                                                                "continue",
                                                                25
                                                            );
                                                        case 23:
                                                            return (
                                                                (e.next = 25),
                                                                [d, k, m]
                                                            );
                                                        case 25:
                                                            (s = !0),
                                                                (e.next = 12);
                                                            break;
                                                        case 28:
                                                            e.next = 34;
                                                            break;
                                                        case 30:
                                                            (e.prev = 30),
                                                                (e.t0 =
                                                                    e.catch(
                                                                        10
                                                                    )),
                                                                (c = !0),
                                                                (p = e.t0);
                                                        case 34:
                                                            (e.prev = 34),
                                                                (e.prev = 35),
                                                                !s &&
                                                                    y.return &&
                                                                    y.return();
                                                        case 37:
                                                            if (
                                                                ((e.prev = 37),
                                                                !c)
                                                            ) {
                                                                e.next = 40;
                                                                break;
                                                            }
                                                            throw p;
                                                        case 40:
                                                            return e.finish(37);
                                                        case 41:
                                                            return e.finish(34);
                                                        case 42:
                                                            return e.delegateYield(
                                                                o.errors(
                                                                    t,
                                                                    r,
                                                                    i
                                                                ),
                                                                "t1",
                                                                43
                                                            );
                                                        case 43:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this,
                                            [
                                                [10, 30, 34, 42],
                                                [35, , 37, 41],
                                            ]
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        var t = this.body,
                                            r =
                                                this.superClass &&
                                                this.superClass.unwrap();
                                        return !(
                                            null === e ||
                                            ("object" !==
                                                (void 0 === e
                                                    ? "undefined"
                                                    : a(e)) &&
                                                "function" != typeof e) ||
                                            (r && !r.accepts(e)) ||
                                            !t.accepts(e)
                                        );
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        return e instanceof t
                                            ? e === this
                                                ? 0
                                                : this.isSuperClassOf(e)
                                                ? 1
                                                : -1
                                            : L(this.body, e);
                                    },
                                },
                                {
                                    key: "getProperty",
                                    value: function (e) {
                                        var t = this.body,
                                            r = this.superClass,
                                            n = t.getProperty(e);
                                        return (
                                            n ||
                                            (r &&
                                            "function" == typeof r.getProperty
                                                ? r.getProperty(e)
                                                : void 0)
                                        );
                                    },
                                },
                                {
                                    key: "hasProperty",
                                    value: function (e) {
                                        var t = this.body,
                                            r = this.superClass;
                                        return (
                                            !!t.hasProperty(e) ||
                                            (!(
                                                !r ||
                                                "function" !=
                                                    typeof r.hasProperty
                                            ) &&
                                                r.hasProperty(e))
                                        );
                                    },
                                },
                                {
                                    key: "isSuperClassOf",
                                    value: function (e) {
                                        for (
                                            var r = this.body,
                                                n = this.shapeID,
                                                a = e;
                                            null != a;

                                        ) {
                                            if (
                                                a === this ||
                                                a === r ||
                                                a.shapeID === n
                                            )
                                                return !0;
                                            a =
                                                a instanceof t
                                                    ? a.superClass
                                                    : a.unwrap();
                                        }
                                        return !1;
                                    },
                                },
                                {
                                    key: "apply",
                                    value: function () {
                                        var e = new V(this.context);
                                        e.parent = this;
                                        for (
                                            var t = arguments.length,
                                                r = Array(t),
                                                n = 0;
                                            n < t;
                                            n++
                                        )
                                            r[n] = arguments[n];
                                        return (e.typeInstances = r), e;
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function (e) {
                                        var t = this.name,
                                            r = this.superClass,
                                            n = this.body;
                                        if (e) {
                                            var a =
                                                r &&
                                                (("string" == typeof r.name &&
                                                    r.name) ||
                                                    r.toString());
                                            return (
                                                "declare class " +
                                                t +
                                                (a ? " extends " + a : "") +
                                                " " +
                                                n.toString()
                                            );
                                        }
                                        return t;
                                    },
                                },
                                {
                                    key: "properties",
                                    get: function () {
                                        var e = this.body,
                                            t = this.superClass;
                                        if (null == t) return e.properties;
                                        var r = e.properties,
                                            n = t.unwrap().properties;
                                        if (null == n) return r;
                                        for (
                                            var a = {}, i = {}, o = [], u = 0;
                                            u < n.length;
                                            u++
                                        ) {
                                            var s = n[u];
                                            o.push(s),
                                                s.static
                                                    ? (i[s.key] = u)
                                                    : (a[s.key] = u);
                                        }
                                        for (var c = 0; c < r.length; c++) {
                                            var p = r[c];
                                            a[p.key] ? (o[c] = p) : o.push(p);
                                        }
                                        return o;
                                    },
                                },
                            ]),
                            t
                        );
                    })(Ee),
                    je = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "PartialType"),
                                (n.typeParameters = []),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "typeParameter",
                                    value: function (e, t, r) {
                                        var n = new Q(this.context);
                                        return (
                                            (n.id = e),
                                            (n.bound = t),
                                            (n.default = r),
                                            this.typeParameters.push(n),
                                            n
                                        );
                                    },
                                },
                                {
                                    key: "apply",
                                    value: function () {
                                        var e = new V(this.context);
                                        e.parent = this;
                                        for (
                                            var t = arguments.length,
                                                r = Array(t),
                                                n = 0;
                                            n < t;
                                            n++
                                        )
                                            r[n] = arguments[n];
                                        return (e.typeInstances = r), e;
                                    },
                                },
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a) {
                                        var i, o, u, s, c, p, f, y, l;
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            (i =
                                                                this
                                                                    .constraints),
                                                                (o = this.type),
                                                                (u = !1),
                                                                (s = !0),
                                                                (c = !1),
                                                                (p = void 0),
                                                                (e.prev = 5),
                                                                (f = o
                                                                    .errors(
                                                                        t,
                                                                        r,
                                                                        a
                                                                    )
                                                                    [
                                                                        Symbol
                                                                            .iterator
                                                                    ]());
                                                        case 7:
                                                            if (
                                                                (s = (y =
                                                                    f.next())
                                                                    .done)
                                                            ) {
                                                                e.next = 15;
                                                                break;
                                                            }
                                                            return (
                                                                (l = y.value),
                                                                (u = !0),
                                                                (e.next = 12),
                                                                l
                                                            );
                                                        case 12:
                                                            (s = !0),
                                                                (e.next = 7);
                                                            break;
                                                        case 15:
                                                            e.next = 21;
                                                            break;
                                                        case 17:
                                                            (e.prev = 17),
                                                                (e.t0 =
                                                                    e.catch(5)),
                                                                (c = !0),
                                                                (p = e.t0);
                                                        case 21:
                                                            (e.prev = 21),
                                                                (e.prev = 22),
                                                                !s &&
                                                                    f.return &&
                                                                    f.return();
                                                        case 24:
                                                            if (
                                                                ((e.prev = 24),
                                                                !c)
                                                            ) {
                                                                e.next = 27;
                                                                break;
                                                            }
                                                            throw p;
                                                        case 27:
                                                            return e.finish(24);
                                                        case 28:
                                                            return e.finish(21);
                                                        case 29:
                                                            if (u || !i) {
                                                                e.next = 31;
                                                                break;
                                                            }
                                                            return e.delegateYield(
                                                                K(
                                                                    this,
                                                                    t,
                                                                    r,
                                                                    a
                                                                ),
                                                                "t1",
                                                                31
                                                            );
                                                        case 31:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this,
                                            [
                                                [5, 17, 21, 29],
                                                [22, , 24, 28],
                                            ]
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        var t = this.constraints;
                                        return !(
                                            !this.type.accepts(e) ||
                                            (t && !H(this, e))
                                        );
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        return e === this ? 0 : L(this.type, e);
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function (e) {
                                        return this.type.toString(e);
                                    },
                                },
                                {
                                    key: "unwrap",
                                    value: function () {
                                        return this.type.unwrap();
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return {
                                            typeName: this.typeName,
                                            typeParameters: this.typeParameters,
                                            type: this.type,
                                        };
                                    },
                                },
                            ]),
                            t
                        );
                    })(W),
                    Re = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "ParameterizedClassDeclaration"),
                                (n.shapeID = Symbol()),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a) {
                                        for (
                                            var i = arguments.length,
                                                o = Array(i > 3 ? i - 3 : 0),
                                                u = 3;
                                            u < i;
                                            u++
                                        )
                                            o[u - 3] = arguments[u];
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return e.delegateYield(
                                                                Ce.apply(
                                                                    void 0,
                                                                    [
                                                                        this,
                                                                    ].concat(
                                                                        y(o)
                                                                    )
                                                                ).errors(
                                                                    t,
                                                                    r,
                                                                    a
                                                                ),
                                                                "t0",
                                                                1
                                                            );
                                                        case 1:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        for (
                                            var t = arguments.length,
                                                r = Array(t > 1 ? t - 1 : 0),
                                                n = 1;
                                            n < t;
                                            n++
                                        )
                                            r[n - 1] = arguments[n];
                                        return Ce.apply(
                                            void 0,
                                            [this].concat(y(r))
                                        ).accepts(e);
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        return Ce(this).compareWith(e);
                                    },
                                },
                                {
                                    key: "unwrap",
                                    value: function () {
                                        for (
                                            var e = arguments.length,
                                                t = Array(e),
                                                r = 0;
                                            r < e;
                                            r++
                                        )
                                            t[r] = arguments[r];
                                        return Ce.apply(
                                            void 0,
                                            [this].concat(y(t))
                                        ).type;
                                    },
                                },
                                {
                                    key: "isSuperClassOf",
                                    value: function (e) {
                                        return Ce(this).type.isSuperClassOf(e);
                                    },
                                },
                                {
                                    key: "apply",
                                    value: function () {
                                        var e = new V(this.context);
                                        e.parent = this;
                                        for (
                                            var t = arguments.length,
                                                r = Array(t),
                                                n = 0;
                                            n < t;
                                            n++
                                        )
                                            r[n] = arguments[n];
                                        return (e.typeInstances = r), e;
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function (e) {
                                        if (!e) return this.name;
                                        var t = Ce(this),
                                            r = t.type,
                                            n = t.typeParameters;
                                        if (0 === n.length)
                                            return t.toString(!0);
                                        for (
                                            var a = [], i = 0;
                                            i < n.length;
                                            i++
                                        ) {
                                            var o = n[i];
                                            a.push(o.toString(!0));
                                        }
                                        var u = r.superClass,
                                            s = r.body,
                                            c =
                                                u &&
                                                (("string" == typeof u.name &&
                                                    u.name) ||
                                                    u.toString());
                                        return (
                                            "declare class " +
                                            this.name +
                                            "<" +
                                            a.join(", ") +
                                            ">" +
                                            (c ? " extends " + c : "") +
                                            " " +
                                            s.toString()
                                        );
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return Ce(this).toJSON();
                                    },
                                },
                                {
                                    key: "superClass",
                                    get: function () {
                                        return Ce(this).type.superClass;
                                    },
                                },
                                {
                                    key: "body",
                                    get: function () {
                                        return Ce(this).type.body;
                                    },
                                },
                                {
                                    key: "properties",
                                    get: function () {
                                        return Ce(this).type.properties;
                                    },
                                },
                                {
                                    key: "typeParameters",
                                    get: function () {
                                        return Ce(this).typeParameters;
                                    },
                                },
                            ]),
                            t
                        );
                    })(Ee);
                function Ce(e) {
                    var t = e.context,
                        r = e.bodyCreator,
                        n = new je(t),
                        a = r(n);
                    Array.isArray(a)
                        ? (n.type = t.class.apply(t, [e.name].concat(y(a))))
                        : (n.type = t.class(e.name, a)),
                        (n.type.shapeID = e.shapeID);
                    for (
                        var i = n.typeParameters,
                            o = arguments.length,
                            u = Array(o > 1 ? o - 1 : 0),
                            s = 1;
                        s < o;
                        s++
                    )
                        u[s - 1] = arguments[s];
                    for (
                        var c = Math.min(u.length, i.length), p = 0;
                        p < c;
                        p++
                    ) {
                        var f = i[p],
                            l = u[p];
                        f.bound && f.bound !== l
                            ? (f.bound = t.intersect(f.bound, l))
                            : (f.bound = l);
                    }
                    return n;
                }
                var Ie = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "ExtendsDeclaration"),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a) {
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return e.delegateYield(
                                                                this.type.errors(
                                                                    t,
                                                                    r,
                                                                    a
                                                                ),
                                                                "t0",
                                                                1
                                                            );
                                                        case 1:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "unwrap",
                                    value: function () {
                                        return this.type.unwrap();
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function (e) {
                                        var t = this.type;
                                        return e
                                            ? "extends " + t.toString()
                                            : t.toString();
                                    },
                                },
                            ]),
                            t
                        );
                    })(Ee),
                    Le = n.mark(De),
                    We = n.mark(Ye),
                    Me = n.mark($e),
                    Xe = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "ObjectType"),
                                (n.properties = []),
                                (n.indexers = []),
                                (n.callProperties = []),
                                (n.exact = !1),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "getProperty",
                                    value: function (e) {
                                        for (
                                            var t = this.properties,
                                                r = t.length,
                                                n = 0;
                                            n < r;
                                            n++
                                        ) {
                                            var a = t[n];
                                            if (a.key === e) return a;
                                        }
                                        return this.getIndexer(e);
                                    },
                                },
                                {
                                    key: "setProperty",
                                    value: function (e, t) {
                                        var r =
                                                arguments.length > 2 &&
                                                void 0 !== arguments[2] &&
                                                arguments[2],
                                            n = this.context,
                                            a = this.properties,
                                            i = a.length,
                                            o = new we(n);
                                        (o.key = e),
                                            (o.value = t),
                                            (o.optional = r);
                                        for (var u = 0; u < i; u++) {
                                            var s = a[u];
                                            if (s.key === e)
                                                return void (a[u] = o);
                                        }
                                        a.push(o);
                                    },
                                },
                                {
                                    key: "hasProperty",
                                    value: function (e) {
                                        for (
                                            var t = this.properties,
                                                r = t.length,
                                                n = 0;
                                            n < r;
                                            n++
                                        )
                                            if (t[n].key === e) return !0;
                                        return this.hasIndexer(e);
                                    },
                                },
                                {
                                    key: "getIndexer",
                                    value: function (e) {
                                        for (
                                            var t = this.indexers,
                                                r = t.length,
                                                n = 0;
                                            n < r;
                                            n++
                                        ) {
                                            var a = t[n];
                                            if (a.acceptsKey(e)) return a;
                                        }
                                    },
                                },
                                {
                                    key: "hasIndexer",
                                    value: function (e) {
                                        for (
                                            var t = this.indexers,
                                                r = t.length,
                                                n = 0;
                                            n < r;
                                            n++
                                        )
                                            if (t[n].acceptsKey(e)) return !0;
                                        return !1;
                                    },
                                },
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, i) {
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (null !== i) {
                                                                e.next = 4;
                                                                break;
                                                            }
                                                            return (
                                                                (e.next = 3),
                                                                [
                                                                    r,
                                                                    J(
                                                                        "ERR_EXPECT_OBJECT"
                                                                    ),
                                                                    this,
                                                                ]
                                                            );
                                                        case 3:
                                                            return e.abrupt(
                                                                "return"
                                                            );
                                                        case 4:
                                                            if (
                                                                !(
                                                                    this
                                                                        .callProperties
                                                                        .length >
                                                                    0
                                                                )
                                                            ) {
                                                                e.next = 11;
                                                                break;
                                                            }
                                                            if (Je(this, i)) {
                                                                e.next = 9;
                                                                break;
                                                            }
                                                            return (
                                                                (e.next = 9),
                                                                [
                                                                    r,
                                                                    J(
                                                                        "ERR_EXPECT_CALLABLE"
                                                                    ),
                                                                    this,
                                                                ]
                                                            );
                                                        case 9:
                                                            e.next = 15;
                                                            break;
                                                        case 11:
                                                            if (
                                                                "object" ===
                                                                (void 0 === i
                                                                    ? "undefined"
                                                                    : a(i))
                                                            ) {
                                                                e.next = 15;
                                                                break;
                                                            }
                                                            return (
                                                                (e.next = 14),
                                                                [
                                                                    r,
                                                                    J(
                                                                        "ERR_EXPECT_OBJECT"
                                                                    ),
                                                                    this,
                                                                ]
                                                            );
                                                        case 14:
                                                            return e.abrupt(
                                                                "return"
                                                            );
                                                        case 15:
                                                            if (
                                                                !t.inCycle(
                                                                    this,
                                                                    i
                                                                )
                                                            ) {
                                                                e.next = 17;
                                                                break;
                                                            }
                                                            return e.abrupt(
                                                                "return"
                                                            );
                                                        case 17:
                                                            if (
                                                                (t.startCycle(
                                                                    this,
                                                                    i
                                                                ),
                                                                !(
                                                                    this
                                                                        .indexers
                                                                        .length >
                                                                    0
                                                                ))
                                                            ) {
                                                                e.next = 26;
                                                                break;
                                                            }
                                                            if (
                                                                !(
                                                                    i instanceof
                                                                        Object &&
                                                                    Array.isArray(
                                                                        i
                                                                    )
                                                                )
                                                            ) {
                                                                e.next = 23;
                                                                break;
                                                            }
                                                            return (
                                                                (e.next = 22),
                                                                [
                                                                    r,
                                                                    J(
                                                                        "ERR_EXPECT_OBJECT"
                                                                    ),
                                                                    this,
                                                                ]
                                                            );
                                                        case 22:
                                                            return e.abrupt(
                                                                "return"
                                                            );
                                                        case 23:
                                                            return e.delegateYield(
                                                                De(
                                                                    this,
                                                                    t,
                                                                    r,
                                                                    i
                                                                ),
                                                                "t0",
                                                                24
                                                            );
                                                        case 24:
                                                            e.next = 27;
                                                            break;
                                                        case 26:
                                                            return e.delegateYield(
                                                                Ye(
                                                                    this,
                                                                    t,
                                                                    r,
                                                                    i
                                                                ),
                                                                "t1",
                                                                27
                                                            );
                                                        case 27:
                                                            if (!this.exact) {
                                                                e.next = 29;
                                                                break;
                                                            }
                                                            return e.delegateYield(
                                                                $e(
                                                                    this,
                                                                    0,
                                                                    r,
                                                                    i
                                                                ),
                                                                "t2",
                                                                29
                                                            );
                                                        case 29:
                                                            t.endCycle(this, i);
                                                        case 30:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        if (null === e) return !1;
                                        if (this.callProperties.length > 0) {
                                            if (!Je(this, e)) return !1;
                                        } else if (
                                            "object" !==
                                            (void 0 === e ? "undefined" : a(e))
                                        )
                                            return !1;
                                        if (d(this, e)) return !0;
                                        k(this, e);
                                        var t = void 0;
                                        return (
                                            (t =
                                                this.indexers.length > 0
                                                    ? (function (e, t) {
                                                          for (
                                                              var r =
                                                                      e.properties,
                                                                  n =
                                                                      e.indexers,
                                                                  a = [],
                                                                  i = 0;
                                                              i < r.length;
                                                              i++
                                                          ) {
                                                              var o = r[i];
                                                              if (!o.accepts(t))
                                                                  return !1;
                                                              a.push(o.key);
                                                          }
                                                          e: for (var u in t)
                                                              if (
                                                                  -1 ===
                                                                  a.indexOf(u)
                                                              ) {
                                                                  for (
                                                                      var s =
                                                                              t[
                                                                                  u
                                                                              ],
                                                                          c = 0;
                                                                      c <
                                                                      n.length;
                                                                      c++
                                                                  ) {
                                                                      var p =
                                                                          n[c];
                                                                      if (
                                                                          p.acceptsKey(
                                                                              u
                                                                          ) &&
                                                                          p.acceptsValue(
                                                                              s
                                                                          )
                                                                      )
                                                                          continue e;
                                                                  }
                                                                  return !1;
                                                              }
                                                          return !0;
                                                      })(this, e)
                                                    : (function (e, t) {
                                                          for (
                                                              var r =
                                                                      e.properties,
                                                                  n = 0;
                                                              n < r.length;
                                                              n++
                                                          )
                                                              if (
                                                                  !r[n].accepts(
                                                                      t
                                                                  )
                                                              )
                                                                  return !1;
                                                          return !0;
                                                      })(this, e)) &&
                                                this.exact &&
                                                (t = (function (e, t) {
                                                    var r = e.properties,
                                                        n = function (e) {
                                                            if (
                                                                !r.some(
                                                                    function (
                                                                        t
                                                                    ) {
                                                                        return (
                                                                            t.key ===
                                                                            e
                                                                        );
                                                                    }
                                                                )
                                                            )
                                                                return {
                                                                    v: !1,
                                                                };
                                                        };
                                                    for (var i in t) {
                                                        var o = n(i);
                                                        if (
                                                            "object" ===
                                                            (void 0 === o
                                                                ? "undefined"
                                                                : a(o))
                                                        )
                                                            return o.v;
                                                    }
                                                    return !0;
                                                })(this, e)),
                                            m(this, e),
                                            t
                                        );
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        if (
                                            !(
                                                e instanceof t ||
                                                e instanceof Ae ||
                                                e instanceof Re
                                            )
                                        )
                                            return -1;
                                        var r = !1;
                                        if (this.callProperties.length > 0) {
                                            var n = (function (e, t) {
                                                var r = e.callProperties,
                                                    n = t.callProperties,
                                                    a = 0;
                                                e: for (
                                                    var i = 0;
                                                    i < r.length;
                                                    i++
                                                ) {
                                                    for (
                                                        var o = r[i], u = 0;
                                                        u < n.length;
                                                        u++
                                                    ) {
                                                        var s = n[u],
                                                            c = L(o, s);
                                                        if (0 === c) {
                                                            a++;
                                                            continue e;
                                                        }
                                                        if (1 === c) continue e;
                                                    }
                                                    return -1;
                                                }
                                                return a === r.length ? 0 : 1;
                                            })(this, e);
                                            if (-1 === n) return -1;
                                            1 === n && (r = !0);
                                        }
                                        var a = void 0;
                                        return -1 ===
                                            (a =
                                                this.indexers.length > 0
                                                    ? (function (e, t) {
                                                          var r = e.indexers,
                                                              n = e.properties,
                                                              a = t.indexers,
                                                              i = t.properties,
                                                              o = !1;
                                                          e: for (
                                                              var u = 0;
                                                              u < n.length;
                                                              u++
                                                          )
                                                              for (
                                                                  var s = n[u],
                                                                      c = 0;
                                                                  c < i.length;
                                                                  c++
                                                              ) {
                                                                  var p = i[c];
                                                                  if (
                                                                      p.key ===
                                                                      s.key
                                                                  ) {
                                                                      var f = L(
                                                                          s,
                                                                          p
                                                                      );
                                                                      if (
                                                                          -1 ===
                                                                          f
                                                                      )
                                                                          return -1;
                                                                      1 === f &&
                                                                          (o =
                                                                              !0);
                                                                      continue e;
                                                                  }
                                                              }
                                                          e: for (
                                                              var y = 0;
                                                              y < r.length;
                                                              y++
                                                          ) {
                                                              for (
                                                                  var l = r[y],
                                                                      h = 0;
                                                                  h < a.length;
                                                                  h++
                                                              ) {
                                                                  var v = a[h],
                                                                      d = L(
                                                                          l,
                                                                          v
                                                                      );
                                                                  if (1 === d) {
                                                                      o = !0;
                                                                      continue e;
                                                                  }
                                                                  if (0 === d)
                                                                      continue e;
                                                              }
                                                              return -1;
                                                          }
                                                          return o ? 1 : 0;
                                                      })(this, e)
                                                    : (function (e, t) {
                                                          var r = e.properties,
                                                              n = t.properties,
                                                              a = !1;
                                                          e: for (
                                                              var i = 0;
                                                              i < r.length;
                                                              i++
                                                          ) {
                                                              for (
                                                                  var o = r[i],
                                                                      u = 0;
                                                                  u < n.length;
                                                                  u++
                                                              ) {
                                                                  var s = n[u];
                                                                  if (
                                                                      s.key ===
                                                                      o.key
                                                                  ) {
                                                                      var c = L(
                                                                          o.value,
                                                                          s.value
                                                                      );
                                                                      if (
                                                                          -1 ===
                                                                          c
                                                                      )
                                                                          return -1;
                                                                      1 === c &&
                                                                          (a =
                                                                              !0);
                                                                      continue e;
                                                                  }
                                                              }
                                                              return -1;
                                                          }
                                                          return a ? 1 : 0;
                                                      })(this, e))
                                            ? -1
                                            : r
                                            ? 1
                                            : a;
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        var e = this.callProperties,
                                            t = this.properties,
                                            r = this.indexers;
                                        if (g(this)) return "$Cycle<Object>";
                                        b(this);
                                        for (
                                            var n = [], a = 0;
                                            a < e.length;
                                            a++
                                        )
                                            n.push(e[a].toString());
                                        for (var i = 0; i < t.length; i++)
                                            n.push(t[i].toString());
                                        for (var o = 0; o < r.length; o++)
                                            n.push(r[o].toString());
                                        return (
                                            x(this),
                                            this.exact
                                                ? "{|\n" +
                                                  Ue(n.join("\n")) +
                                                  "\n|}"
                                                : "{\n" +
                                                  Ue(n.join("\n")) +
                                                  "\n}"
                                        );
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return {
                                            typeName: this.typeName,
                                            callProperties: this.callProperties,
                                            properties: this.properties,
                                            indexers: this.indexers,
                                            exact: this.exact,
                                        };
                                    },
                                },
                            ]),
                            t
                        );
                    })(W);
                function Je(e, t) {
                    for (var r = e.callProperties, n = 0; n < r.length; n++)
                        if (r[n].accepts(t)) return !0;
                    return !1;
                }
                function De(e, t, r, a) {
                    var i, o, u, s, c, p, f, y, l;
                    return n.wrap(
                        function (h) {
                            for (;;)
                                switch ((h.prev = h.next)) {
                                    case 0:
                                        (i = e.properties),
                                            (o = e.indexers),
                                            (u = []),
                                            (s = 0);
                                    case 3:
                                        if (!(s < i.length)) {
                                            h.next = 10;
                                            break;
                                        }
                                        return (
                                            (c = i[s]),
                                            h.delegateYield(
                                                c.errors(t, r, a),
                                                "t0",
                                                6
                                            )
                                        );
                                    case 6:
                                        u.push(c.key);
                                    case 7:
                                        s++, (h.next = 3);
                                        break;
                                    case 10:
                                        h.t1 = n.keys(a);
                                    case 11:
                                        if ((h.t2 = h.t1()).done) {
                                            h.next = 28;
                                            break;
                                        }
                                        if (
                                            ((p = h.t2.value),
                                            -1 === u.indexOf(p))
                                        ) {
                                            h.next = 15;
                                            break;
                                        }
                                        return h.abrupt("continue", 11);
                                    case 15:
                                        (f = a[p]), (y = 0);
                                    case 17:
                                        if (!(y < o.length)) {
                                            h.next = 24;
                                            break;
                                        }
                                        if (
                                            !(l = o[y]).acceptsKey(p) ||
                                            !l.acceptsValue(f)
                                        ) {
                                            h.next = 21;
                                            break;
                                        }
                                        return h.abrupt("continue", 11);
                                    case 21:
                                        y++, (h.next = 17);
                                        break;
                                    case 24:
                                        return (
                                            (h.next = 26),
                                            [
                                                r.concat(p),
                                                J("ERR_NO_INDEXER"),
                                                e,
                                            ]
                                        );
                                    case 26:
                                        h.next = 11;
                                        break;
                                    case 28:
                                    case "end":
                                        return h.stop();
                                }
                        },
                        Le,
                        this
                    );
                }
                function Ye(e, t, r, a) {
                    var i, o, u;
                    return n.wrap(
                        function (n) {
                            for (;;)
                                switch ((n.prev = n.next)) {
                                    case 0:
                                        (i = e.properties), (o = 0);
                                    case 2:
                                        if (!(o < i.length)) {
                                            n.next = 8;
                                            break;
                                        }
                                        return (
                                            (u = i[o]),
                                            n.delegateYield(
                                                u.errors(t, r, a),
                                                "t0",
                                                5
                                            )
                                        );
                                    case 5:
                                        o++, (n.next = 2);
                                        break;
                                    case 8:
                                    case "end":
                                        return n.stop();
                                }
                        },
                        We,
                        this
                    );
                }
                function $e(e, t, r, a) {
                    var i,
                        o,
                        u,
                        s = this;
                    return n.wrap(
                        function (t) {
                            for (;;)
                                switch ((t.prev = t.next)) {
                                    case 0:
                                        (i = e.properties),
                                            (o = n.mark(function t(a) {
                                                return n.wrap(
                                                    function (t) {
                                                        for (;;)
                                                            switch (
                                                                (t.prev =
                                                                    t.next)
                                                            ) {
                                                                case 0:
                                                                    if (
                                                                        i.some(
                                                                            function (
                                                                                e
                                                                            ) {
                                                                                return (
                                                                                    e.key ===
                                                                                    a
                                                                                );
                                                                            }
                                                                        )
                                                                    ) {
                                                                        t.next = 3;
                                                                        break;
                                                                    }
                                                                    return (
                                                                        (t.next = 3),
                                                                        [
                                                                            r,
                                                                            J(
                                                                                "ERR_UNKNOWN_KEY",
                                                                                a
                                                                            ),
                                                                            e,
                                                                        ]
                                                                    );
                                                                case 3:
                                                                case "end":
                                                                    return t.stop();
                                                            }
                                                    },
                                                    t,
                                                    s
                                                );
                                            })),
                                            (t.t0 = n.keys(a));
                                    case 3:
                                        if ((t.t1 = t.t0()).done) {
                                            t.next = 8;
                                            break;
                                        }
                                        return (
                                            (u = t.t1.value),
                                            t.delegateYield(o(u), "t2", 6)
                                        );
                                    case 6:
                                        t.next = 3;
                                        break;
                                    case 8:
                                    case "end":
                                        return t.stop();
                                }
                        },
                        Me,
                        this
                    );
                }
                function Ue(e) {
                    for (var t = e.split("\n"), r = t.length, n = 0; n < r; n++)
                        t[n] = "  " + t[n];
                    return t.join("\n");
                }
                var Fe = (function (e) {
                    function t() {
                        var e, r, n;
                        i(this, t);
                        for (
                            var a = arguments.length, o = Array(a), u = 0;
                            u < a;
                            u++
                        )
                            o[u] = arguments[u];
                        return (
                            (r = n =
                                p(
                                    this,
                                    (e =
                                        t.__proto__ ||
                                        Object.getPrototypeOf(t)).call.apply(
                                        e,
                                        [this].concat(o)
                                    )
                                )),
                            (n.typeName = "IntersectionType"),
                            (n.types = []),
                            p(n, r)
                        );
                    }
                    return (
                        s(t, e),
                        o(t, [
                            {
                                key: "errors",
                                value: n.mark(function e(t, r, a) {
                                    var i, o, u;
                                    return n.wrap(
                                        function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        (i = this.types),
                                                            (o = i.length),
                                                            (u = 0);
                                                    case 3:
                                                        if (!(u < o)) {
                                                            e.next = 8;
                                                            break;
                                                        }
                                                        return e.delegateYield(
                                                            i[u].errors(
                                                                t,
                                                                r,
                                                                a
                                                            ),
                                                            "t0",
                                                            5
                                                        );
                                                    case 5:
                                                        u++, (e.next = 3);
                                                        break;
                                                    case 8:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        },
                                        e,
                                        this
                                    );
                                }),
                            },
                            {
                                key: "getProperty",
                                value: function (e) {
                                    for (
                                        var t = this.types, r = t.length - 1;
                                        r >= 0;
                                        r--
                                    ) {
                                        var n = t[r];
                                        if (
                                            "function" == typeof n.getProperty
                                        ) {
                                            var a = n.getProperty(e);
                                            if (a) return a;
                                        }
                                    }
                                },
                            },
                            {
                                key: "hasProperty",
                                value: function (e) {
                                    for (
                                        var t = this.types, r = t.length, n = 0;
                                        n < r;
                                        n++
                                    ) {
                                        var a = t[n];
                                        if (
                                            "function" ==
                                                typeof a.hasProperty &&
                                            a.hasProperty(e)
                                        )
                                            return !0;
                                    }
                                    return !1;
                                },
                            },
                            {
                                key: "accepts",
                                value: function (e) {
                                    for (
                                        var t = this.types, r = t.length, n = 0;
                                        n < r;
                                        n++
                                    )
                                        if (!t[n].accepts(e)) return !1;
                                    return !0;
                                },
                            },
                            {
                                key: "compareWith",
                                value: function (e) {
                                    var r = this.types,
                                        n = 0;
                                    if (e instanceof t) {
                                        var a = e.types;
                                        e: for (var i = 0; i < r.length; i++) {
                                            for (
                                                var o = r[i], u = 0;
                                                u < a.length;
                                                u++
                                            ) {
                                                var s = L(o, a[i]);
                                                if (0 === s) {
                                                    n++;
                                                    continue e;
                                                }
                                                if (1 === s) continue e;
                                            }
                                            return -1;
                                        }
                                        return n === r.length ? 0 : 1;
                                    }
                                    for (var c = 0; c < r.length; c++) {
                                        var p = L(r[c], e);
                                        if (-1 === p) return -1;
                                        0 === p && n++;
                                    }
                                    return n === r.length ? 0 : 1;
                                },
                            },
                            {
                                key: "unwrap",
                                value: function () {
                                    for (
                                        var e,
                                            t = [],
                                            r = [],
                                            n = [],
                                            a = this.types,
                                            i = this.context,
                                            o = 0;
                                        o < a.length;
                                        o++
                                    ) {
                                        var u = a[o].unwrap();
                                        me(
                                            u instanceof Xe,
                                            "Can only intersect object types"
                                        ),
                                            t.push.apply(
                                                t,
                                                y(u.callProperties)
                                            ),
                                            n.push.apply(n, y(u.indexers)),
                                            Ve(r, u.properties);
                                    }
                                    return (e = i).object.apply(
                                        e,
                                        t.concat(r, n)
                                    );
                                },
                            },
                            {
                                key: "toString",
                                value: function () {
                                    return this.types.join(" & ");
                                },
                            },
                            {
                                key: "toJSON",
                                value: function () {
                                    return {
                                        typeName: this.typeName,
                                        types: this.types,
                                    };
                                },
                            },
                        ]),
                        t
                    );
                })(W);
                function Be(e, t) {
                    for (var r = 0; r < t.length; r++)
                        if (t[r].name === e) return r;
                    return -1;
                }
                function Ve(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r],
                            a = Be(n.key, e);
                        -1 === a ? e.push(n) : (e[a] = n);
                    }
                    return e;
                }
                var Ge = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "MixedType"),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a) {
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        return !0;
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        return "mixed";
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return { typeName: this.typeName };
                                    },
                                },
                            ]),
                            t
                        );
                    })(W),
                    ze = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "NumericLiteralType"),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a) {
                                        var i;
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (
                                                                ((i =
                                                                    this.value),
                                                                a === i)
                                                            ) {
                                                                e.next = 4;
                                                                break;
                                                            }
                                                            return (
                                                                (e.next = 4),
                                                                [
                                                                    r,
                                                                    J(
                                                                        "ERR_EXPECT_EXACT_VALUE",
                                                                        i
                                                                    ),
                                                                    this,
                                                                ]
                                                            );
                                                        case 4:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        return e === this.value;
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        return e instanceof t &&
                                            e.value === this.value
                                            ? 0
                                            : -1;
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        return "" + this.value;
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return {
                                            typeName: this.typeName,
                                            value: this.value,
                                        };
                                    },
                                },
                            ]),
                            t
                        );
                    })(W),
                    Ke = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "NumberType"),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a) {
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (
                                                                "number" ==
                                                                typeof a
                                                            ) {
                                                                e.next = 3;
                                                                break;
                                                            }
                                                            return (
                                                                (e.next = 3),
                                                                [
                                                                    r,
                                                                    J(
                                                                        "ERR_EXPECT_NUMBER"
                                                                    ),
                                                                    this,
                                                                ]
                                                            );
                                                        case 3:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        return "number" == typeof e;
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        return e instanceof t
                                            ? 0
                                            : e instanceof ze
                                            ? 1
                                            : -1;
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        return "number";
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return { typeName: this.typeName };
                                    },
                                },
                            ]),
                            t
                        );
                    })(W),
                    He = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "ParameterizedTypeAlias"),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a) {
                                        for (
                                            var i = arguments.length,
                                                o = Array(i > 3 ? i - 3 : 0),
                                                u = 3;
                                            u < i;
                                            u++
                                        )
                                            o[u - 3] = arguments[u];
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return e.delegateYield(
                                                                Ze.apply(
                                                                    void 0,
                                                                    [
                                                                        this,
                                                                    ].concat(
                                                                        y(o)
                                                                    )
                                                                ).errors(
                                                                    t,
                                                                    r,
                                                                    a
                                                                ),
                                                                "t0",
                                                                1
                                                            );
                                                        case 1:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        for (
                                            var t = arguments.length,
                                                r = Array(t > 1 ? t - 1 : 0),
                                                n = 1;
                                            n < t;
                                            n++
                                        )
                                            r[n - 1] = arguments[n];
                                        var a = Ze.apply(
                                            void 0,
                                            [this].concat(y(r))
                                        );
                                        return !!a.accepts(e) && !!H(this, e);
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        return e === this
                                            ? 0
                                            : this.hasConstraints
                                            ? -1
                                            : L(Ze(this), e);
                                    },
                                },
                                {
                                    key: "hasProperty",
                                    value: function (e) {
                                        for (
                                            var t = arguments.length,
                                                r = Array(t > 1 ? t - 1 : 0),
                                                n = 1;
                                            n < t;
                                            n++
                                        )
                                            r[n - 1] = arguments[n];
                                        var a = this.unwrap.apply(this, y(r));
                                        return (
                                            !(
                                                !a ||
                                                "function" !=
                                                    typeof a.hasProperty
                                            ) &&
                                            a.hasProperty.apply(
                                                a,
                                                [e].concat(y(r))
                                            )
                                        );
                                    },
                                },
                                {
                                    key: "getProperty",
                                    value: function (e) {
                                        for (
                                            var t = arguments.length,
                                                r = Array(t > 1 ? t - 1 : 0),
                                                n = 1;
                                            n < t;
                                            n++
                                        )
                                            r[n - 1] = arguments[n];
                                        var a = this.unwrap.apply(this, y(r));
                                        if (
                                            a &&
                                            "function" == typeof a.getProperty
                                        )
                                            return a.getProperty.apply(
                                                a,
                                                [e].concat(y(r))
                                            );
                                    },
                                },
                                {
                                    key: "unwrap",
                                    value: function () {
                                        for (
                                            var e = arguments.length,
                                                t = Array(e),
                                                r = 0;
                                            r < e;
                                            r++
                                        )
                                            t[r] = arguments[r];
                                        return Ze.apply(
                                            void 0,
                                            [this].concat(y(t))
                                        ).unwrap();
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function (e) {
                                        for (
                                            var t = Ze(this),
                                                r = t.typeParameters,
                                                n = [],
                                                a = 0;
                                            a < r.length;
                                            a++
                                        ) {
                                            var i = r[a];
                                            n.push(i.toString(!0));
                                        }
                                        var o = this.name,
                                            u =
                                                r.length > 0
                                                    ? o +
                                                      "<" +
                                                      n.join(", ") +
                                                      ">"
                                                    : o;
                                        return e
                                            ? "type " +
                                                  u +
                                                  " = " +
                                                  t.toString() +
                                                  ";"
                                            : u;
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return Ze(this).toJSON();
                                    },
                                },
                                {
                                    key: "properties",
                                    get: function () {
                                        return Ze(this).type.properties;
                                    },
                                },
                            ]),
                            t
                        );
                    })(Z);
                function Ze(e) {
                    var t = e.typeCreator,
                        r = e.context,
                        n = e.name,
                        a = new je(r);
                    (a.name = n),
                        (a.type = t(a)),
                        (a.constraints = e.constraints);
                    for (
                        var i = a.typeParameters,
                            o = arguments.length,
                            u = Array(o > 1 ? o - 1 : 0),
                            s = 1;
                        s < o;
                        s++
                    )
                        u[s - 1] = arguments[s];
                    for (
                        var c = Math.min(u.length, i.length), p = 0;
                        p < c;
                        p++
                    ) {
                        var f = i[p],
                            y = u[p];
                        f.bound && f.bound !== y
                            ? (f.bound = r.intersect(f.bound, y))
                            : (f.bound = y);
                    }
                    return a;
                }
                var qe = (function (e) {
                    function t() {
                        var e, r, n;
                        i(this, t);
                        for (
                            var a = arguments.length, o = Array(a), u = 0;
                            u < a;
                            u++
                        )
                            o[u] = arguments[u];
                        return (
                            (r = n =
                                p(
                                    this,
                                    (e =
                                        t.__proto__ ||
                                        Object.getPrototypeOf(t)).call.apply(
                                        e,
                                        [this].concat(o)
                                    )
                                )),
                            (n.typeName = "ParameterizedFunctionType"),
                            p(n, r)
                        );
                    }
                    return (
                        s(t, e),
                        o(t, [
                            {
                                key: "errors",
                                value: n.mark(function e(t, r, a) {
                                    for (
                                        var i = arguments.length,
                                            o = Array(i > 3 ? i - 3 : 0),
                                            u = 3;
                                        u < i;
                                        u++
                                    )
                                        o[u - 3] = arguments[u];
                                    return n.wrap(
                                        function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return e.delegateYield(
                                                            Qe.apply(
                                                                void 0,
                                                                [this].concat(
                                                                    y(o)
                                                                )
                                                            ).errors(t, r, a),
                                                            "t0",
                                                            1
                                                        );
                                                    case 1:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        },
                                        e,
                                        this
                                    );
                                }),
                            },
                            {
                                key: "accepts",
                                value: function (e) {
                                    for (
                                        var t = arguments.length,
                                            r = Array(t > 1 ? t - 1 : 0),
                                            n = 1;
                                        n < t;
                                        n++
                                    )
                                        r[n - 1] = arguments[n];
                                    return Qe.apply(
                                        void 0,
                                        [this].concat(y(r))
                                    ).accepts(e);
                                },
                            },
                            {
                                key: "compareWith",
                                value: function (e) {
                                    return L(Qe(this), e);
                                },
                            },
                            {
                                key: "acceptsParams",
                                value: function () {
                                    var e;
                                    return (e =
                                        Qe(this).type).acceptsParams.apply(
                                        e,
                                        arguments
                                    );
                                },
                            },
                            {
                                key: "acceptsReturn",
                                value: function (e) {
                                    return Qe(this).type.acceptsReturn(e);
                                },
                            },
                            {
                                key: "assertParams",
                                value: function () {
                                    var e;
                                    return (e =
                                        Qe(this).type).assertParams.apply(
                                        e,
                                        arguments
                                    );
                                },
                            },
                            {
                                key: "assertReturn",
                                value: function (e) {
                                    return Qe(this).type.assertReturn(e);
                                },
                            },
                            {
                                key: "unwrap",
                                value: function () {
                                    for (
                                        var e = arguments.length,
                                            t = Array(e),
                                            r = 0;
                                        r < e;
                                        r++
                                    )
                                        t[r] = arguments[r];
                                    return Qe.apply(
                                        void 0,
                                        [this].concat(y(t))
                                    ).unwrap();
                                },
                            },
                            {
                                key: "toString",
                                value: function () {
                                    var e = Qe(this),
                                        t = e.type,
                                        r = e.typeParameters;
                                    if (0 === r.length) return t.toString();
                                    for (var n = [], a = 0; a < r.length; a++) {
                                        var i = r[a];
                                        n.push(i.toString(!0));
                                    }
                                    return (
                                        "<" + n.join(", ") + "> " + t.toString()
                                    );
                                },
                            },
                            {
                                key: "toJSON",
                                value: function () {
                                    return Qe(this).toJSON();
                                },
                            },
                            {
                                key: "typeParameters",
                                get: function () {
                                    return Qe(this).typeParameters;
                                },
                            },
                            {
                                key: "params",
                                get: function () {
                                    return Qe(this).type.params;
                                },
                            },
                            {
                                key: "rest",
                                get: function () {
                                    return Qe(this).type.rest;
                                },
                            },
                            {
                                key: "returnType",
                                get: function () {
                                    return Qe(this).type.returnType;
                                },
                            },
                        ]),
                        t
                    );
                })(W);
                function Qe(e) {
                    var t = e.context,
                        r = e.bodyCreator,
                        n = new je(t),
                        a = r(n);
                    n.type = t.function.apply(t, y(a));
                    for (
                        var i = n.typeParameters,
                            o = arguments.length,
                            u = Array(o > 1 ? o - 1 : 0),
                            s = 1;
                        s < o;
                        s++
                    )
                        u[s - 1] = arguments[s];
                    for (
                        var c = Math.min(u.length, i.length), p = 0;
                        p < c;
                        p++
                    ) {
                        var f = i[p],
                            l = u[p];
                        f.bound && f.bound !== l
                            ? (f.bound = t.intersect(f.bound, l))
                            : (f.bound = l);
                    }
                    return n;
                }
                var et = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "RefinementType"),
                                (n.constraints = []),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "addConstraint",
                                    value: function () {
                                        for (
                                            var e = arguments.length,
                                                t = Array(e),
                                                r = 0;
                                            r < e;
                                            r++
                                        )
                                            t[r] = arguments[r];
                                        return (
                                            z.apply(
                                                void 0,
                                                [this].concat(y(t))
                                            ),
                                            this
                                        );
                                    },
                                },
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a) {
                                        var i, o, u, s, c, p, f, y;
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            (i = this.type),
                                                                (o = !1),
                                                                (u = !0),
                                                                (s = !1),
                                                                (c = void 0),
                                                                (e.prev = 5),
                                                                (p = i
                                                                    .errors(
                                                                        t,
                                                                        r,
                                                                        a
                                                                    )
                                                                    [
                                                                        Symbol
                                                                            .iterator
                                                                    ]());
                                                        case 7:
                                                            if (
                                                                (u = (f =
                                                                    p.next())
                                                                    .done)
                                                            ) {
                                                                e.next = 15;
                                                                break;
                                                            }
                                                            return (
                                                                (y = f.value),
                                                                (o = !0),
                                                                (e.next = 12),
                                                                y
                                                            );
                                                        case 12:
                                                            (u = !0),
                                                                (e.next = 7);
                                                            break;
                                                        case 15:
                                                            e.next = 21;
                                                            break;
                                                        case 17:
                                                            (e.prev = 17),
                                                                (e.t0 =
                                                                    e.catch(5)),
                                                                (s = !0),
                                                                (c = e.t0);
                                                        case 21:
                                                            (e.prev = 21),
                                                                (e.prev = 22),
                                                                !u &&
                                                                    p.return &&
                                                                    p.return();
                                                        case 24:
                                                            if (
                                                                ((e.prev = 24),
                                                                !s)
                                                            ) {
                                                                e.next = 27;
                                                                break;
                                                            }
                                                            throw c;
                                                        case 27:
                                                            return e.finish(24);
                                                        case 28:
                                                            return e.finish(21);
                                                        case 29:
                                                            if (o) {
                                                                e.next = 31;
                                                                break;
                                                            }
                                                            return e.delegateYield(
                                                                K(
                                                                    this,
                                                                    t,
                                                                    r,
                                                                    a
                                                                ),
                                                                "t1",
                                                                31
                                                            );
                                                        case 31:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this,
                                            [
                                                [5, 17, 21, 29],
                                                [22, , 24, 28],
                                            ]
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        return (
                                            !!this.type.accepts(e) &&
                                            !!H(this, e)
                                        );
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        return e === this ? 0 : -1;
                                    },
                                },
                                {
                                    key: "apply",
                                    value: function () {
                                        var e = new V(this.context);
                                        e.parent = this;
                                        for (
                                            var t = arguments.length,
                                                r = Array(t),
                                                n = 0;
                                            n < t;
                                            n++
                                        )
                                            r[n] = arguments[n];
                                        return (e.typeInstances = r), e;
                                    },
                                },
                                {
                                    key: "unwrap",
                                    value: function () {
                                        return this.type.unwrap();
                                    },
                                },
                                {
                                    key: "hasProperty",
                                    value: function (e) {
                                        var t = this.unwrap();
                                        return (
                                            !(
                                                !t ||
                                                "function" !=
                                                    typeof t.hasProperty
                                            ) && t.hasProperty(e)
                                        );
                                    },
                                },
                                {
                                    key: "getProperty",
                                    value: function (e) {
                                        var t = this.unwrap();
                                        if (
                                            t &&
                                            "function" == typeof t.getProperty
                                        )
                                            return t.getProperty(e);
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        return (
                                            "$Refinment<" +
                                            this.type.toString() +
                                            ">"
                                        );
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return {
                                            typeName: this.typeName,
                                            type: this.type,
                                        };
                                    },
                                },
                            ]),
                            t
                        );
                    })(W),
                    tt = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "StringLiteralType"),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a) {
                                        var i;
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (
                                                                ((i =
                                                                    this.value),
                                                                a === i)
                                                            ) {
                                                                e.next = 4;
                                                                break;
                                                            }
                                                            return (
                                                                (e.next = 4),
                                                                [
                                                                    r,
                                                                    J(
                                                                        "ERR_EXPECT_EXACT_VALUE",
                                                                        this.toString()
                                                                    ),
                                                                    this,
                                                                ]
                                                            );
                                                        case 4:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        return e === this.value;
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        return e instanceof t &&
                                            e.value === this.value
                                            ? 0
                                            : -1;
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        return JSON.stringify(this.value);
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return {
                                            typeName: this.typeName,
                                            value: this.value,
                                        };
                                    },
                                },
                            ]),
                            t
                        );
                    })(W),
                    rt = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "StringType"),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a) {
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (
                                                                "string" ==
                                                                typeof a
                                                            ) {
                                                                e.next = 3;
                                                                break;
                                                            }
                                                            return (
                                                                (e.next = 3),
                                                                [
                                                                    r,
                                                                    J(
                                                                        "ERR_EXPECT_STRING"
                                                                    ),
                                                                    this,
                                                                ]
                                                            );
                                                        case 3:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        return "string" == typeof e;
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        return e instanceof tt
                                            ? 1
                                            : e instanceof t
                                            ? 0
                                            : -1;
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        return "string";
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return { typeName: this.typeName };
                                    },
                                },
                            ]),
                            t
                        );
                    })(W),
                    nt = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "SymbolLiteralType"),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a) {
                                        var i;
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (
                                                                ((i =
                                                                    this.value),
                                                                a === i)
                                                            ) {
                                                                e.next = 4;
                                                                break;
                                                            }
                                                            return (
                                                                (e.next = 4),
                                                                [
                                                                    r,
                                                                    J(
                                                                        "ERR_EXPECT_EXACT_VALUE",
                                                                        this.toString()
                                                                    ),
                                                                    this,
                                                                ]
                                                            );
                                                        case 4:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        return e === this.value;
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        return e instanceof t &&
                                            e.value === this.value
                                            ? 0
                                            : -1;
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        return "typeof " + String(this.value);
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return {
                                            typeName: this.typeName,
                                            value: this.value,
                                        };
                                    },
                                },
                            ]),
                            t
                        );
                    })(W),
                    at = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "SymbolType"),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, i) {
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (
                                                                "symbol" ===
                                                                (void 0 === i
                                                                    ? "undefined"
                                                                    : a(i))
                                                            ) {
                                                                e.next = 3;
                                                                break;
                                                            }
                                                            return (
                                                                (e.next = 3),
                                                                [
                                                                    r,
                                                                    J(
                                                                        "ERR_EXPECT_SYMBOL"
                                                                    ),
                                                                    this,
                                                                ]
                                                            );
                                                        case 3:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        return (
                                            "symbol" ===
                                            (void 0 === e ? "undefined" : a(e))
                                        );
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        return e instanceof nt
                                            ? 1
                                            : e instanceof t
                                            ? 0
                                            : -1;
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        return "Symbol";
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return { typeName: this.typeName };
                                    },
                                },
                            ]),
                            t
                        );
                    })(W),
                    it = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "ThisType"),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a) {
                                        var i;
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (
                                                                ((i =
                                                                    this
                                                                        .recorded),
                                                                a !== i)
                                                            ) {
                                                                e.next = 5;
                                                                break;
                                                            }
                                                            return e.abrupt(
                                                                "return"
                                                            );
                                                        case 5:
                                                            if (
                                                                !(
                                                                    "function" ==
                                                                        typeof i &&
                                                                    a instanceof
                                                                        i
                                                                )
                                                            ) {
                                                                e.next = 9;
                                                                break;
                                                            }
                                                            return e.abrupt(
                                                                "return"
                                                            );
                                                        case 9:
                                                            if (null == i) {
                                                                e.next = 12;
                                                                break;
                                                            }
                                                            return (
                                                                (e.next = 12),
                                                                [
                                                                    r,
                                                                    J(
                                                                        "ERR_EXPECT_THIS"
                                                                    ),
                                                                    this,
                                                                ]
                                                            );
                                                        case 12:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        var t = this.recorded;
                                        return (
                                            e === t ||
                                            ("function" == typeof t &&
                                                e instanceof t) ||
                                            null == t
                                        );
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        return e instanceof t
                                            ? e.recorded && this.recorded
                                                ? e.recorded === this.recorded
                                                    ? 0
                                                    : -1
                                                : this.recorded
                                                ? 0
                                                : 1
                                            : -1;
                                    },
                                },
                                {
                                    key: "unwrap",
                                    value: function () {
                                        return this;
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function (e) {
                                        return "this";
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return { typeName: this.typeName };
                                    },
                                },
                            ]),
                            t
                        );
                    })(W),
                    ot = new WeakSet(),
                    ut = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "TypeBox"),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a) {
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return e.delegateYield(
                                                                this.type.errors(
                                                                    t,
                                                                    r,
                                                                    a
                                                                ),
                                                                "t0",
                                                                1
                                                            );
                                                        case 1:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        return this.type.accepts(e);
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        return L(this.type, e);
                                    },
                                },
                                {
                                    key: "apply",
                                    value: function () {
                                        var e = new V(this.context);
                                        e.parent = this.type;
                                        for (
                                            var t = arguments.length,
                                                r = Array(t),
                                                n = 0;
                                            n < t;
                                            n++
                                        )
                                            r[n] = arguments[n];
                                        return (e.typeInstances = r), e;
                                    },
                                },
                                {
                                    key: "unwrap",
                                    value: function () {
                                        return this.type.unwrap();
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        return this.type.toString();
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return this.type.toJSON();
                                    },
                                },
                                {
                                    key: "name",
                                    get: function () {
                                        return this.type.name;
                                    },
                                },
                                {
                                    key: "type",
                                    get: function () {
                                        var e = (0, this.reveal)();
                                        return e
                                            ? e instanceof W
                                                ? e
                                                : this.context.ref(e)
                                            : (ot.has(this) ||
                                                  (this.context.emitWarningMessage(
                                                      "Failed to reveal boxed type."
                                                  ),
                                                  ot.add(this)),
                                              this.context.mixed());
                                    },
                                },
                            ]),
                            t
                        );
                    })(W),
                    st = {},
                    ct = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "TypeReference"),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a) {
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return e.delegateYield(
                                                                this.type.errors(
                                                                    t,
                                                                    r,
                                                                    a
                                                                ),
                                                                "t0",
                                                                1
                                                            );
                                                        case 1:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        return this.type.accepts(e);
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        return L(this.type, e);
                                    },
                                },
                                {
                                    key: "apply",
                                    value: function () {
                                        var e = new V(this.context);
                                        e.parent = this;
                                        for (
                                            var t = arguments.length,
                                                r = Array(t),
                                                n = 0;
                                            n < t;
                                            n++
                                        )
                                            r[n] = arguments[n];
                                        return (e.typeInstances = r), e;
                                    },
                                },
                                {
                                    key: "unwrap",
                                    value: function () {
                                        return this.type.unwrap();
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        return this.name;
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return {
                                            typeName: this.typeName,
                                            name: this.name,
                                        };
                                    },
                                },
                                {
                                    key: "type",
                                    get: function () {
                                        var e = this.context,
                                            t = this.name,
                                            r = e.get(t);
                                        return (
                                            r ||
                                            (st[t] ||
                                                (e.emitWarningMessage(
                                                    "Cannot resolve type: " + t
                                                ),
                                                (st[t] = !0)),
                                            e.any())
                                        );
                                    },
                                },
                            ]),
                            t
                        );
                    })(W),
                    pt = new WeakSet(),
                    ft = Symbol("RevealedName"),
                    yt = Symbol("RevealedValue"),
                    lt = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "TypeTDZ"),
                                (n[ft] = void 0),
                                (n[yt] = void 0),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a) {
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return e.delegateYield(
                                                                ht(this).errors(
                                                                    t,
                                                                    r,
                                                                    a
                                                                ),
                                                                "t0",
                                                                1
                                                            );
                                                        case 1:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        return ht(this).accepts(e);
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        return L(ht(this), e);
                                    },
                                },
                                {
                                    key: "apply",
                                    value: function () {
                                        var e = new V(this.context);
                                        e.parent = ht(this);
                                        for (
                                            var t = arguments.length,
                                                r = Array(t),
                                                n = 0;
                                            n < t;
                                            n++
                                        )
                                            r[n] = arguments[n];
                                        return (e.typeInstances = r), e;
                                    },
                                },
                                {
                                    key: "unwrap",
                                    value: function () {
                                        return ht(this).unwrap();
                                    },
                                },
                                {
                                    key: "hasProperty",
                                    value: function (e) {
                                        var t = this.unwrap();
                                        return (
                                            !(
                                                !t ||
                                                "function" !=
                                                    typeof t.hasProperty
                                            ) && t.hasProperty(e)
                                        );
                                    },
                                },
                                {
                                    key: "getProperty",
                                    value: function (e) {
                                        var t = this.unwrap();
                                        if (
                                            t &&
                                            "function" == typeof t.getProperty
                                        )
                                            return t.getProperty(e);
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        return ht(this).toString();
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return ht(this).toJSON();
                                    },
                                },
                                {
                                    key: "name",
                                    get: function () {
                                        var e = this[ft];
                                        return e || (e = ht(this).name), e;
                                    },
                                    set: function (e) {
                                        this[ft] = e;
                                    },
                                },
                            ]),
                            t
                        );
                    })(W);
                function ht(e) {
                    var t = e[yt];
                    if (t) return t;
                    var r = (0, e.reveal)();
                    if (!r) {
                        if (!pt.has(e)) {
                            var n = e[ft];
                            n
                                ? e.context.emitWarningMessage(
                                      'Failed to reveal type called "' +
                                          n +
                                          '" in Temporal Dead Zone.'
                                  )
                                : e.context.emitWarningMessage(
                                      "Failed to reveal unknown type in Temporal Dead Zone."
                                  ),
                                pt.add(e);
                        }
                        return e.context.mixed();
                    }
                    return r instanceof W ? r : e.context.ref(r);
                }
                var vt = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "UnionType"),
                                (n.types = []),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a) {
                                        var i, o, u;
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            (i = this.types),
                                                                (o = i.length),
                                                                (u = 0);
                                                        case 3:
                                                            if (!(u < o)) {
                                                                e.next = 10;
                                                                break;
                                                            }
                                                            if (
                                                                !i[u].accepts(a)
                                                            ) {
                                                                e.next = 7;
                                                                break;
                                                            }
                                                            return e.abrupt(
                                                                "return"
                                                            );
                                                        case 7:
                                                            u++, (e.next = 3);
                                                            break;
                                                        case 10:
                                                            return (
                                                                (e.next = 12),
                                                                [
                                                                    r,
                                                                    J(
                                                                        "ERR_NO_UNION",
                                                                        this.toString()
                                                                    ),
                                                                    this,
                                                                ]
                                                            );
                                                        case 12:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        for (
                                            var t = this.types,
                                                r = t.length,
                                                n = 0;
                                            n < r;
                                            n++
                                        )
                                            if (t[n].accepts(e)) return !0;
                                        return !1;
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        var r = this.types;
                                        if (e instanceof t) {
                                            var n = e.types,
                                                a = 0;
                                            e: for (
                                                var i = 0;
                                                i < r.length;
                                                i++
                                            ) {
                                                for (
                                                    var o = r[i], u = 0;
                                                    u < n.length;
                                                    u++
                                                ) {
                                                    var s = L(o, n[i]);
                                                    if (0 === s) {
                                                        a++;
                                                        continue e;
                                                    }
                                                    if (1 === s) continue e;
                                                }
                                                return -1;
                                            }
                                            return a === r.length ? 0 : 1;
                                        }
                                        for (var c = 0; c < r.length; c++)
                                            if (L(r[c], e) >= 0) return 1;
                                        return -1;
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        for (
                                            var e = this.types,
                                                t = new Array(e.length),
                                                r = 0;
                                            r < e.length;
                                            r++
                                        ) {
                                            var n = e[r];
                                            "FunctionType" === n.typeName ||
                                            "ParameterizedFunctionType" ===
                                                n.typeName
                                                ? (t[r] =
                                                      "(" + n.toString() + ")")
                                                : (t[r] = n.toString());
                                        }
                                        return t.join(" | ");
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return {
                                            typeName: this.typeName,
                                            types: this.types,
                                        };
                                    },
                                },
                            ]),
                            t
                        );
                    })(W),
                    dt = (function () {
                        function e(t) {
                            i(this, e), (this.context = t);
                        }
                        return (
                            o(e, [
                                {
                                    key: "infer",
                                    value: function (e) {
                                        var t = this.inferPrimitive(e);
                                        if (t) return t;
                                        var r = new Map();
                                        return this.inferComplex(e, r);
                                    },
                                },
                                {
                                    key: "inferInternal",
                                    value: function (e, t) {
                                        var r = this.inferPrimitive(e);
                                        return r || this.inferComplex(e, t);
                                    },
                                },
                                {
                                    key: "inferPrimitive",
                                    value: function (e) {
                                        var t = this.context;
                                        return null === e
                                            ? t.null()
                                            : void 0 === e
                                            ? t.void()
                                            : "number" == typeof e
                                            ? t.number()
                                            : "boolean" == typeof e
                                            ? t.boolean()
                                            : "string" == typeof e
                                            ? t.string()
                                            : "symbol" ===
                                              (void 0 === e
                                                  ? "undefined"
                                                  : a(e))
                                            ? t.symbol(e)
                                            : void 0;
                                    },
                                },
                                {
                                    key: "inferComplex",
                                    value: function (e, t) {
                                        var r = this.context;
                                        return "function" == typeof e
                                            ? this.inferFunction(e, t)
                                            : null !== e &&
                                              "object" ===
                                                  (void 0 === e
                                                      ? "undefined"
                                                      : a(e))
                                            ? this.inferObject(e, t)
                                            : r.any();
                                    },
                                },
                                {
                                    key: "inferFunction",
                                    value: function (e, t) {
                                        for (
                                            var r = this.context,
                                                n = e.length,
                                                a = new Array(n + 1),
                                                i = 0;
                                            i < n;
                                            i++
                                        )
                                            a[i] = r.param(
                                                String.fromCharCode(97 + i),
                                                r.existential()
                                            );
                                        return (
                                            (a[n] = r.return(r.existential())),
                                            r.fn.apply(r, a)
                                        );
                                    },
                                },
                                {
                                    key: "inferObject",
                                    value: function (e, t) {
                                        var r = t.get(e);
                                        if (r) return r;
                                        var n = this.context,
                                            a = void 0,
                                            i = n.box(function () {
                                                return a;
                                            });
                                        if (
                                            (t.set(e, i),
                                            n.checkPredicate("Array", e))
                                        )
                                            a = this.inferArray(e, t);
                                        else if (e instanceof Object)
                                            if (e.constructor !== Object) {
                                                var o = n.getTypeConstructor(
                                                    e.constructor
                                                );
                                                if (o) {
                                                    var u =
                                                        o.inferTypeParameters(
                                                            e
                                                        );
                                                    a = o.apply.apply(o, y(u));
                                                } else a = n.ref(e.constructor);
                                            } else {
                                                var s = [];
                                                for (var c in e) {
                                                    var p = e[c];
                                                    s.push(
                                                        n.property(
                                                            c,
                                                            this.inferInternal(
                                                                p,
                                                                t
                                                            )
                                                        )
                                                    );
                                                }
                                                a = n.object.apply(n, s);
                                            }
                                        else a = this.inferDict(e, t);
                                        return t.set(e, a), a;
                                    },
                                },
                                {
                                    key: "inferDict",
                                    value: function (e, t) {
                                        var r = [],
                                            n = [];
                                        e: for (var a in e) {
                                            for (
                                                var i = e[a],
                                                    o = isNaN(+a) ? n : r,
                                                    u = 0;
                                                u < o.length;
                                                u++
                                            )
                                                if (o[u].accepts(i)) continue e;
                                            o.push(this.inferInternal(i, t));
                                        }
                                        var s = this.context,
                                            c = [];
                                        return (
                                            1 === r.length
                                                ? c.push(
                                                      s.indexer(
                                                          "index",
                                                          s.number(),
                                                          r[0]
                                                      )
                                                  )
                                                : r.length > 1 &&
                                                  c.push(
                                                      s.indexer(
                                                          "index",
                                                          s.number(),
                                                          s.union.apply(s, r)
                                                      )
                                                  ),
                                            1 === n.length
                                                ? c.push(
                                                      s.indexer(
                                                          "key",
                                                          s.string(),
                                                          n[0]
                                                      )
                                                  )
                                                : n.length > 1 &&
                                                  c.push(
                                                      s.indexer(
                                                          "key",
                                                          s.string(),
                                                          s.union.apply(s, n)
                                                      )
                                                  ),
                                            s.object.apply(s, c)
                                        );
                                    },
                                },
                                {
                                    key: "inferArray",
                                    value: function (e, t) {
                                        var r = this.context,
                                            n = [],
                                            a = [],
                                            i = e.length;
                                        e: for (var o = 0; o < i; o++) {
                                            for (
                                                var u = e[o],
                                                    s = this.inferInternal(
                                                        u,
                                                        t
                                                    ),
                                                    c = 0;
                                                c < n.length;
                                                c++
                                            )
                                                if (
                                                    n[c].accepts(u) &&
                                                    s.accepts(a[c])
                                                )
                                                    continue e;
                                            n.push(s), a.push(u);
                                        }
                                        return 0 === n.length
                                            ? r.array(r.any())
                                            : 1 === n.length
                                            ? r.array(n[0])
                                            : r.array(r.union.apply(r, n));
                                    },
                                },
                            ]),
                            e
                        );
                    })(),
                    kt =
                        "\n-------------------------------------------------\n\n";
                function mt(e) {
                    if (e.hasErrors()) {
                        var t = e.input,
                            r = e.context,
                            n = [],
                            a = !0,
                            i = !1,
                            o = void 0;
                        try {
                            for (
                                var u, s = e.errors[Symbol.iterator]();
                                !(a = (u = s.next()).done);
                                a = !0
                            ) {
                                var c = u.value,
                                    p = f(c, 3),
                                    y = p[0],
                                    l = p[1],
                                    h = p[2],
                                    v = h ? h.toString() : "*",
                                    d = r.typeOf(S(t, y)).toString(),
                                    k = N(e.path.concat(y));
                                n.push(
                                    k +
                                        " " +
                                        l +
                                        "\n\nExpected: " +
                                        v +
                                        "\n\nActual: " +
                                        d +
                                        "\n"
                                );
                            }
                        } catch (e) {
                            (i = !0), (o = e);
                        } finally {
                            try {
                                !a && s.return && s.return();
                            } finally {
                                if (i) throw o;
                            }
                        }
                        return "Warning: " + n.join(kt);
                    }
                }
                function gt(e, t) {
                    for (var r = t.length, n = [], a = 0; a < r; a++) {
                        var i = t[a];
                        if (i instanceof M || i instanceof Ge || i instanceof B)
                            return i;
                        i instanceof vt ? bt(n, i.types) : n.push(i);
                    }
                    var o = new vt(e);
                    return (o.types = n), o;
                }
                function bt(e, t) {
                    e: for (var r = 0; r < t.length; r++) {
                        for (var n = t[r], a = 0; a < e.length; a++)
                            if (-1 !== L(e[a], n)) continue e;
                        e.push(n);
                    }
                }
                function xt(e, t, r, n, a) {
                    return "function" == typeof n.get &&
                        "function" == typeof n.set
                        ? (function (e, t, r, n, a) {
                              var i = [wt(t), r],
                                  o = n.set;
                              n.set = function (t) {
                                  var r = _t(this, e),
                                      n = r.context;
                                  a
                                      ? n.assert(r, t, "Property", i)
                                      : n.warn(r, t, "Property", i),
                                      o.call(this, t);
                              };
                          })(e, t, r, n, a)
                        : (function (e, t, r, n, a) {
                              var i = "_flowRuntime$" + r,
                                  o = wt(t),
                                  s = n.initializer,
                                  p =
                                      (n.writable,
                                      c(n, ["initializer", "writable"])),
                                  f = [o, r];
                              return u({}, p, {
                                  type: "accessor",
                                  get: function () {
                                      if (i in this) return this[i];
                                      if (s) {
                                          var t = _t(this, e),
                                              r = s.call(this);
                                          return (
                                              t.context.check(
                                                  t,
                                                  r,
                                                  "Default value for property",
                                                  f
                                              ),
                                              Object.defineProperty(this, i, {
                                                  writable: !0,
                                                  value: r,
                                              }),
                                              r
                                          );
                                      }
                                      Object.defineProperty(this, i, {
                                          writable: !0,
                                          value: void 0,
                                      });
                                  },
                                  set: function (t) {
                                      var r = _t(this, e),
                                          n = r.context;
                                      a
                                          ? n.assert(r, t, "Property", f)
                                          : n.warn(r, t, "Property", f),
                                          i in this
                                              ? (this[i] = t)
                                              : Object.defineProperty(this, i, {
                                                    writable: !0,
                                                    value: t,
                                                });
                                  },
                              });
                          })(e, t, r, n, a);
                }
                function wt(e) {
                    return "function" == typeof e
                        ? e.name || "[Class anonymous]"
                        : "function" == typeof e.constructor
                        ? wt(e.constructor)
                        : "[Class anonymous]";
                }
                function _t(e, t) {
                    return "function" == typeof t ? t.call(e) : t;
                }
                function Tt(e, t) {
                    if (t instanceof W) return (e[pe] = t), e;
                    var r = e;
                    return function (e) {
                        return (e[pe] = r), e;
                    };
                }
                var Et = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "$DiffType"),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, i) {
                                        var o, u, s, c, p;
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (
                                                                ((o =
                                                                    this.aType),
                                                                (u =
                                                                    this.bType),
                                                                null !== i &&
                                                                    ("object" ===
                                                                        (void 0 ===
                                                                        i
                                                                            ? "undefined"
                                                                            : a(
                                                                                  i
                                                                              )) ||
                                                                        "function" ==
                                                                            typeof i))
                                                            ) {
                                                                e.next = 5;
                                                                break;
                                                            }
                                                            return (
                                                                (e.next = 4),
                                                                [
                                                                    r,
                                                                    J(
                                                                        "ERR_EXPECT_OBJECT"
                                                                    ),
                                                                    this,
                                                                ]
                                                            );
                                                        case 4:
                                                            return e.abrupt(
                                                                "return"
                                                            );
                                                        case 5:
                                                            (o = o.unwrap()),
                                                                (u =
                                                                    u.unwrap()),
                                                                me(
                                                                    o instanceof
                                                                        Xe &&
                                                                        u instanceof
                                                                            Xe,
                                                                    "Can only $Diff object types."
                                                                ),
                                                                (s =
                                                                    o.properties),
                                                                (c = 0);
                                                        case 10:
                                                            if (
                                                                !(c < s.length)
                                                            ) {
                                                                e.next = 18;
                                                                break;
                                                            }
                                                            if (
                                                                ((p = s[c]),
                                                                !u.hasProperty(
                                                                    p.key
                                                                ))
                                                            ) {
                                                                e.next = 14;
                                                                break;
                                                            }
                                                            return e.abrupt(
                                                                "continue",
                                                                15
                                                            );
                                                        case 14:
                                                            return e.delegateYield(
                                                                p.errors(
                                                                    t,
                                                                    r.concat(
                                                                        p.key
                                                                    ),
                                                                    i
                                                                ),
                                                                "t0",
                                                                15
                                                            );
                                                        case 15:
                                                            c++, (e.next = 10);
                                                            break;
                                                        case 18:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        var t = this.aType,
                                            r = this.bType;
                                        if (
                                            null === e ||
                                            ("object" !==
                                                (void 0 === e
                                                    ? "undefined"
                                                    : a(e)) &&
                                                "function" != typeof e)
                                        )
                                            return !1;
                                        (t = t.unwrap()),
                                            (r = r.unwrap()),
                                            me(
                                                t instanceof Xe &&
                                                    r instanceof Xe,
                                                "Can only $Diff object types."
                                            );
                                        for (
                                            var n = t.properties, i = 0;
                                            i < n.length;
                                            i++
                                        ) {
                                            var o = n[i];
                                            if (
                                                !r.hasProperty(o.key) &&
                                                !o.accepts(e)
                                            )
                                                return !1;
                                        }
                                        return !0;
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        return L(this.unwrap(), e);
                                    },
                                },
                                {
                                    key: "unwrap",
                                    value: function () {
                                        var e,
                                            t = this.aType,
                                            r = this.bType;
                                        (t = t.unwrap()),
                                            (r = r.unwrap()),
                                            me(
                                                t instanceof Xe &&
                                                    r instanceof Xe,
                                                "Can only $Diff object types."
                                            );
                                        for (
                                            var n = t.properties, a = [], i = 0;
                                            i < n.length;
                                            i++
                                        ) {
                                            var o = n[i];
                                            r.hasProperty(o.key) || a.push(o);
                                        }
                                        return (e = this.context).object.apply(
                                            e,
                                            a
                                        );
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        return (
                                            "$Diff<" +
                                            this.aType.toString() +
                                            ", " +
                                            this.bType.toString() +
                                            ">"
                                        );
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return {
                                            typeName: this.typeName,
                                            aType: this.aType,
                                            bType: this.bType,
                                        };
                                    },
                                },
                            ]),
                            t
                        );
                    })(W),
                    Ot = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "$FlowFixMeType"),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r) {
                                        return (
                                            arguments.length > 2 &&
                                                void 0 !== arguments[2] &&
                                                arguments[2],
                                            n.wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch (
                                                            (e.prev = e.next)
                                                        ) {
                                                            case 0:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            )
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        return !0;
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        return 1;
                                    },
                                },
                                {
                                    key: "unwrap",
                                    value: function () {
                                        return this;
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        return "$FlowFixMe";
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return { typeName: this.typeName };
                                    },
                                },
                            ]),
                            t
                        );
                    })(W),
                    Nt = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "$KeysType"),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a) {
                                        var i, o, u, s, c, p, f;
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            me(
                                                                (i =
                                                                    this.type.unwrap()) instanceof
                                                                    Xe,
                                                                "Can only $Keys<T> object types."
                                                            ),
                                                                (o =
                                                                    i.properties),
                                                                (u = o.length),
                                                                (s = 0);
                                                        case 5:
                                                            if (!(s < u)) {
                                                                e.next = 12;
                                                                break;
                                                            }
                                                            if (
                                                                ((c = o[s]),
                                                                a !== c.key)
                                                            ) {
                                                                e.next = 9;
                                                                break;
                                                            }
                                                            return e.abrupt(
                                                                "return"
                                                            );
                                                        case 9:
                                                            s++, (e.next = 5);
                                                            break;
                                                        case 12:
                                                            for (
                                                                p = new Array(
                                                                    u
                                                                ),
                                                                    f = 0;
                                                                f < u;
                                                                f++
                                                            )
                                                                p[f] = o[f].key;
                                                            return (
                                                                (e.next = 16),
                                                                [
                                                                    r,
                                                                    J(
                                                                        "ERR_NO_UNION",
                                                                        p.join(
                                                                            " | "
                                                                        )
                                                                    ),
                                                                    this,
                                                                ]
                                                            );
                                                        case 16:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        var t = this.type.unwrap();
                                        me(
                                            t instanceof Xe,
                                            "Can only $Keys<T> object types."
                                        );
                                        for (
                                            var r = t.properties,
                                                n = r.length,
                                                a = 0;
                                            a < n;
                                            a++
                                        )
                                            if (e === r[a].key) return !0;
                                        return !1;
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        return L(this.unwrap(), e);
                                    },
                                },
                                {
                                    key: "unwrap",
                                    value: function () {
                                        var e,
                                            t = this.context,
                                            r = this.type.unwrap();
                                        me(
                                            r instanceof Xe,
                                            "Can only $Keys<T> object types."
                                        );
                                        for (
                                            var n = r.properties,
                                                a = n.length,
                                                i = new Array(a),
                                                o = 0;
                                            o < a;
                                            o++
                                        ) {
                                            var u = n[o];
                                            i[o] = t.literal(u.key);
                                        }
                                        return (e = this.context).union.apply(
                                            e,
                                            i
                                        );
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        return (
                                            "$Keys<" +
                                            this.type.toString() +
                                            ">"
                                        );
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return {
                                            typeName: this.typeName,
                                            type: this.type,
                                        };
                                    },
                                },
                            ]),
                            t
                        );
                    })(W),
                    St = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "$ObjMapiType"),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, i) {
                                        var o,
                                            u,
                                            s,
                                            c,
                                            p,
                                            f,
                                            y,
                                            l,
                                            h,
                                            v,
                                            d,
                                            k,
                                            m;
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (
                                                                ((o =
                                                                    this
                                                                        .object),
                                                                (u =
                                                                    this
                                                                        .mapper),
                                                                (s =
                                                                    this
                                                                        .context),
                                                                me(
                                                                    (c =
                                                                        o.unwrap()) instanceof
                                                                        Xe,
                                                                    "Target must be an object type."
                                                                ),
                                                                null !== i &&
                                                                    ("object" ===
                                                                        (void 0 ===
                                                                        i
                                                                            ? "undefined"
                                                                            : a(
                                                                                  i
                                                                              )) ||
                                                                        "function" ==
                                                                            typeof i))
                                                            ) {
                                                                e.next = 7;
                                                                break;
                                                            }
                                                            return (
                                                                (e.next = 6),
                                                                [
                                                                    r,
                                                                    J(
                                                                        "ERR_EXPECT_OBJECT"
                                                                    ),
                                                                    this,
                                                                ]
                                                            );
                                                        case 6:
                                                            return e.abrupt(
                                                                "return"
                                                            );
                                                        case 7:
                                                            (p = !0),
                                                                (f = !1),
                                                                (y = void 0),
                                                                (e.prev = 10),
                                                                (l =
                                                                    c.properties[
                                                                        Symbol
                                                                            .iterator
                                                                    ]());
                                                        case 12:
                                                            if (
                                                                (p = (h =
                                                                    l.next())
                                                                    .done)
                                                            ) {
                                                                e.next = 22;
                                                                break;
                                                            }
                                                            return (
                                                                (v = h.value),
                                                                me(
                                                                    (d =
                                                                        u.unwrap()) instanceof
                                                                        le,
                                                                    "Mapper must be a function type."
                                                                ),
                                                                (k = d.invoke(
                                                                    s.literal(
                                                                        v.key
                                                                    ),
                                                                    v.value
                                                                )),
                                                                (m = i[v.key]),
                                                                e.delegateYield(
                                                                    k.errors(
                                                                        t,
                                                                        r.concat(
                                                                            v.key
                                                                        ),
                                                                        m
                                                                    ),
                                                                    "t0",
                                                                    19
                                                                )
                                                            );
                                                        case 19:
                                                            (p = !0),
                                                                (e.next = 12);
                                                            break;
                                                        case 22:
                                                            e.next = 28;
                                                            break;
                                                        case 24:
                                                            (e.prev = 24),
                                                                (e.t1 =
                                                                    e.catch(
                                                                        10
                                                                    )),
                                                                (f = !0),
                                                                (y = e.t1);
                                                        case 28:
                                                            (e.prev = 28),
                                                                (e.prev = 29),
                                                                !p &&
                                                                    l.return &&
                                                                    l.return();
                                                        case 31:
                                                            if (
                                                                ((e.prev = 31),
                                                                !f)
                                                            ) {
                                                                e.next = 34;
                                                                break;
                                                            }
                                                            throw y;
                                                        case 34:
                                                            return e.finish(31);
                                                        case 35:
                                                            return e.finish(28);
                                                        case 36:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this,
                                            [
                                                [10, 24, 28, 36],
                                                [29, , 31, 35],
                                            ]
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        var t = this.object,
                                            r = this.mapper,
                                            n = this.context,
                                            i = t.unwrap();
                                        if (
                                            (me(
                                                i instanceof Xe,
                                                "Target must be an object type."
                                            ),
                                            null === e ||
                                                ("object" !==
                                                    (void 0 === e
                                                        ? "undefined"
                                                        : a(e)) &&
                                                    "function" != typeof e))
                                        )
                                            return !1;
                                        var o = !0,
                                            u = !1,
                                            s = void 0;
                                        try {
                                            for (
                                                var c,
                                                    p =
                                                        i.properties[
                                                            Symbol.iterator
                                                        ]();
                                                !(o = (c = p.next()).done);
                                                o = !0
                                            ) {
                                                var f = c.value,
                                                    y = r.unwrap();
                                                me(
                                                    y instanceof le,
                                                    "Mapper must be a function type."
                                                );
                                                var l = y.invoke(
                                                        n.literal(f.key),
                                                        f.value
                                                    ),
                                                    h = e[f.key];
                                                if (!l.accepts(h)) return !1;
                                            }
                                        } catch (e) {
                                            (u = !0), (s = e);
                                        } finally {
                                            try {
                                                !o && p.return && p.return();
                                            } finally {
                                                if (u) throw s;
                                            }
                                        }
                                        return !0;
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        return L(this.unwrap(), e);
                                    },
                                },
                                {
                                    key: "unwrap",
                                    value: function () {
                                        var e = this.object,
                                            t = this.mapper,
                                            r = this.context,
                                            n = e.unwrap();
                                        me(
                                            n instanceof Xe,
                                            "Target must be an object type."
                                        );
                                        var a = [],
                                            i = !0,
                                            o = !1,
                                            u = void 0;
                                        try {
                                            for (
                                                var s,
                                                    c =
                                                        n.properties[
                                                            Symbol.iterator
                                                        ]();
                                                !(i = (s = c.next()).done);
                                                i = !0
                                            ) {
                                                var p = s.value,
                                                    f = t.unwrap();
                                                me(
                                                    f instanceof le,
                                                    "Mapper must be a function type."
                                                ),
                                                    a.push(
                                                        r.property(
                                                            p.key,
                                                            f.invoke(
                                                                r.literal(
                                                                    p.key
                                                                ),
                                                                p.value
                                                            )
                                                        )
                                                    );
                                            }
                                        } catch (e) {
                                            (o = !0), (u = e);
                                        } finally {
                                            try {
                                                !i && c.return && c.return();
                                            } finally {
                                                if (o) throw u;
                                            }
                                        }
                                        return r.object.apply(r, a);
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        return (
                                            "$ObjMapi<" +
                                            this.object.toString() +
                                            ", " +
                                            this.mapper.toString() +
                                            ">"
                                        );
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return {
                                            typeName: this.typeName,
                                            object: this.object,
                                            mapper: this.mapper,
                                        };
                                    },
                                },
                            ]),
                            t
                        );
                    })(W),
                    Pt = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "$ObjMapType"),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, i) {
                                        var o,
                                            u,
                                            s,
                                            c,
                                            p,
                                            f,
                                            y,
                                            l,
                                            h,
                                            v,
                                            d,
                                            k,
                                            m;
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (
                                                                ((o =
                                                                    this
                                                                        .object),
                                                                (u =
                                                                    this
                                                                        .mapper),
                                                                (s =
                                                                    this
                                                                        .context),
                                                                me(
                                                                    (c =
                                                                        o.unwrap()) instanceof
                                                                        Xe,
                                                                    "Target must be an object type."
                                                                ),
                                                                null !== i &&
                                                                    ("object" ===
                                                                        (void 0 ===
                                                                        i
                                                                            ? "undefined"
                                                                            : a(
                                                                                  i
                                                                              )) ||
                                                                        "function" ==
                                                                            typeof i))
                                                            ) {
                                                                e.next = 7;
                                                                break;
                                                            }
                                                            return (
                                                                (e.next = 6),
                                                                [
                                                                    r,
                                                                    J(
                                                                        "ERR_EXPECT_OBJECT"
                                                                    ),
                                                                    this,
                                                                ]
                                                            );
                                                        case 6:
                                                            return e.abrupt(
                                                                "return"
                                                            );
                                                        case 7:
                                                            (p = !0),
                                                                (f = !1),
                                                                (y = void 0),
                                                                (e.prev = 10),
                                                                (l =
                                                                    c.properties[
                                                                        Symbol
                                                                            .iterator
                                                                    ]());
                                                        case 12:
                                                            if (
                                                                (p = (h =
                                                                    l.next())
                                                                    .done)
                                                            ) {
                                                                e.next = 22;
                                                                break;
                                                            }
                                                            return (
                                                                (v = h.value),
                                                                me(
                                                                    (d =
                                                                        u.unwrap()) instanceof
                                                                        le,
                                                                    "Mapper must be a function type."
                                                                ),
                                                                (k = d.invoke(
                                                                    s.literal(
                                                                        v.key
                                                                    )
                                                                )),
                                                                (m = i[v.key]),
                                                                e.delegateYield(
                                                                    k.errors(
                                                                        t,
                                                                        r.concat(
                                                                            v.key
                                                                        ),
                                                                        m
                                                                    ),
                                                                    "t0",
                                                                    19
                                                                )
                                                            );
                                                        case 19:
                                                            (p = !0),
                                                                (e.next = 12);
                                                            break;
                                                        case 22:
                                                            e.next = 28;
                                                            break;
                                                        case 24:
                                                            (e.prev = 24),
                                                                (e.t1 =
                                                                    e.catch(
                                                                        10
                                                                    )),
                                                                (f = !0),
                                                                (y = e.t1);
                                                        case 28:
                                                            (e.prev = 28),
                                                                (e.prev = 29),
                                                                !p &&
                                                                    l.return &&
                                                                    l.return();
                                                        case 31:
                                                            if (
                                                                ((e.prev = 31),
                                                                !f)
                                                            ) {
                                                                e.next = 34;
                                                                break;
                                                            }
                                                            throw y;
                                                        case 34:
                                                            return e.finish(31);
                                                        case 35:
                                                            return e.finish(28);
                                                        case 36:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this,
                                            [
                                                [10, 24, 28, 36],
                                                [29, , 31, 35],
                                            ]
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        var t = this.object,
                                            r = this.mapper,
                                            n = this.context,
                                            i = t.unwrap();
                                        if (
                                            (me(
                                                i instanceof Xe,
                                                "Target must be an object type."
                                            ),
                                            null === e ||
                                                ("object" !==
                                                    (void 0 === e
                                                        ? "undefined"
                                                        : a(e)) &&
                                                    "function" != typeof e))
                                        )
                                            return !1;
                                        var o = !0,
                                            u = !1,
                                            s = void 0;
                                        try {
                                            for (
                                                var c,
                                                    p =
                                                        i.properties[
                                                            Symbol.iterator
                                                        ]();
                                                !(o = (c = p.next()).done);
                                                o = !0
                                            ) {
                                                var f = c.value,
                                                    y = r.unwrap();
                                                me(
                                                    y instanceof le,
                                                    "Mapper must be a function type."
                                                );
                                                var l = y.invoke(
                                                        n.literal(f.key)
                                                    ),
                                                    h = e[f.key];
                                                if (!l.accepts(h)) return !1;
                                            }
                                        } catch (e) {
                                            (u = !0), (s = e);
                                        } finally {
                                            try {
                                                !o && p.return && p.return();
                                            } finally {
                                                if (u) throw s;
                                            }
                                        }
                                        return !0;
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        return L(this.unwrap(), e);
                                    },
                                },
                                {
                                    key: "unwrap",
                                    value: function () {
                                        var e = this.object,
                                            t = this.mapper,
                                            r = this.context,
                                            n = e.unwrap();
                                        me(
                                            n instanceof Xe,
                                            "Target must be an object type."
                                        );
                                        var a = [],
                                            i = !0,
                                            o = !1,
                                            u = void 0;
                                        try {
                                            for (
                                                var s,
                                                    c =
                                                        n.properties[
                                                            Symbol.iterator
                                                        ]();
                                                !(i = (s = c.next()).done);
                                                i = !0
                                            ) {
                                                var p = s.value,
                                                    f = t.unwrap();
                                                me(
                                                    f instanceof le,
                                                    "Mapper must be a function type."
                                                ),
                                                    a.push(
                                                        r.property(
                                                            p.key,
                                                            f.invoke(
                                                                r.literal(p.key)
                                                            )
                                                        )
                                                    );
                                            }
                                        } catch (e) {
                                            (o = !0), (u = e);
                                        } finally {
                                            try {
                                                !i && c.return && c.return();
                                            } finally {
                                                if (o) throw u;
                                            }
                                        }
                                        return r.object.apply(r, a);
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        return (
                                            "$ObjMap<" +
                                            this.object.toString() +
                                            ", " +
                                            this.mapper.toString() +
                                            ">"
                                        );
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return {
                                            typeName: this.typeName,
                                            object: this.object,
                                            mapper: this.mapper,
                                        };
                                    },
                                },
                            ]),
                            t
                        );
                    })(W),
                    At = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "$PropertyType"),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a) {
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return e.delegateYield(
                                                                this.unwrap().errors(
                                                                    t,
                                                                    r,
                                                                    a
                                                                ),
                                                                "t0",
                                                                1
                                                            );
                                                        case 1:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        return this.unwrap().accepts(e);
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        return L(this.unwrap(), e);
                                    },
                                },
                                {
                                    key: "unwrap",
                                    value: function () {
                                        var e = this.object,
                                            t = this.property,
                                            r = e.unwrap();
                                        return (
                                            me(
                                                "function" ==
                                                    typeof r.getProperty,
                                                "Can only use $PropertyType on Objects."
                                            ),
                                            r.getProperty(t).unwrap()
                                        );
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        return (
                                            "$PropertyType<" +
                                            this.object.toString() +
                                            ", " +
                                            String(this.property) +
                                            ">"
                                        );
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return {
                                            typeName: this.typeName,
                                            object: this.object,
                                            property: this.property,
                                        };
                                    },
                                },
                            ]),
                            t
                        );
                    })(W),
                    jt = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "$ShapeType"),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, i) {
                                        var o, u, s;
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (
                                                                ((o =
                                                                    this.type),
                                                                null !== i &&
                                                                    ("object" ===
                                                                        (void 0 ===
                                                                        i
                                                                            ? "undefined"
                                                                            : a(
                                                                                  i
                                                                              )) ||
                                                                        "function" ==
                                                                            typeof i))
                                                            ) {
                                                                e.next = 5;
                                                                break;
                                                            }
                                                            return (
                                                                (e.next = 4),
                                                                [
                                                                    r,
                                                                    J(
                                                                        "ERR_EXPECT_OBJECT"
                                                                    ),
                                                                    this,
                                                                ]
                                                            );
                                                        case 4:
                                                            return e.abrupt(
                                                                "return"
                                                            );
                                                        case 5:
                                                            me(
                                                                "function" ==
                                                                    typeof (o =
                                                                        o.unwrap())
                                                                        .getProperty,
                                                                "Can only $Shape<T> object types."
                                                            ),
                                                                (e.t0 =
                                                                    n.keys(i));
                                                        case 8:
                                                            if (
                                                                (e.t1 = e.t0())
                                                                    .done
                                                            ) {
                                                                e.next = 16;
                                                                break;
                                                            }
                                                            if (
                                                                ((u =
                                                                    e.t1.value),
                                                                (s =
                                                                    o.getProperty(
                                                                        u
                                                                    )))
                                                            ) {
                                                                e.next = 13;
                                                                break;
                                                            }
                                                            return e.abrupt(
                                                                "continue",
                                                                8
                                                            );
                                                        case 13:
                                                            return e.delegateYield(
                                                                s.errors(
                                                                    t,
                                                                    r,
                                                                    i
                                                                ),
                                                                "t2",
                                                                14
                                                            );
                                                        case 14:
                                                            e.next = 8;
                                                            break;
                                                        case 16:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        var t = this.type;
                                        if (
                                            null === e ||
                                            ("object" !==
                                                (void 0 === e
                                                    ? "undefined"
                                                    : a(e)) &&
                                                "function" != typeof e)
                                        )
                                            return !1;
                                        for (var r in (me(
                                            "function" ==
                                                typeof (t = t.unwrap())
                                                    .getProperty,
                                            "Can only $Shape<T> object types."
                                        ),
                                        e)) {
                                            var n = t.getProperty(r);
                                            if (!n || !n.accepts(e)) return !1;
                                        }
                                        return !0;
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        return L(this.unwrap(), e);
                                    },
                                },
                                {
                                    key: "unwrap",
                                    value: function () {
                                        var e,
                                            t = this.type;
                                        t = t.unwrap();
                                        var r = this.context;
                                        me(
                                            t instanceof Xe,
                                            "Can only $Shape<T> object types."
                                        );
                                        for (
                                            var n = t.properties,
                                                a = new Array(n.length),
                                                i = 0;
                                            i < n.length;
                                            i++
                                        ) {
                                            var o = n[i];
                                            a[i] = r.property(
                                                o.key,
                                                o.value,
                                                !0
                                            );
                                        }
                                        return (e = this.context).object.apply(
                                            e,
                                            a
                                        );
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        return (
                                            "$Shape<" +
                                            this.type.toString() +
                                            ">"
                                        );
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return {
                                            typeName: this.typeName,
                                            type: this.type,
                                        };
                                    },
                                },
                            ]),
                            t
                        );
                    })(W),
                    Rt = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "$SubType"),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a) {
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return e.delegateYield(
                                                                this.type.errors(
                                                                    a,
                                                                    r
                                                                ),
                                                                "t0",
                                                                1
                                                            );
                                                        case 1:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        return this.type.accepts(e);
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        return L(this.unwrap(), e);
                                    },
                                },
                                {
                                    key: "unwrap",
                                    value: function () {
                                        return this.type;
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        return (
                                            "$Subtype<" +
                                            this.type.toString() +
                                            ">"
                                        );
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return {
                                            typeName: this.typeName,
                                            type: this.type,
                                        };
                                    },
                                },
                            ]),
                            t
                        );
                    })(W),
                    Ct = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "$SuperType"),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a) {
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return e.delegateYield(
                                                                this.type.errors(
                                                                    t,
                                                                    r,
                                                                    a
                                                                ),
                                                                "t0",
                                                                1
                                                            );
                                                        case 1:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        return this.type.accepts(e);
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        return L(this.unwrap(), e);
                                    },
                                },
                                {
                                    key: "unwrap",
                                    value: function () {
                                        return this.type;
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        return (
                                            "$Supertype<" +
                                            this.type.toString() +
                                            ">"
                                        );
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return {
                                            typeName: this.typeName,
                                            type: this.type,
                                        };
                                    },
                                },
                            ]),
                            t
                        );
                    })(W),
                    It = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "$TupleMapType"),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a) {
                                        var i, o, u, s, c, p, f, y, l;
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (
                                                                ((i =
                                                                    this.tuple),
                                                                (o =
                                                                    this
                                                                        .mapper),
                                                                (u =
                                                                    this
                                                                        .context),
                                                                me(
                                                                    (s =
                                                                        i.unwrap()) instanceof
                                                                        D,
                                                                    "Target must be a tuple type."
                                                                ),
                                                                u.checkPredicate(
                                                                    "Array",
                                                                    a
                                                                ))
                                                            ) {
                                                                e.next = 7;
                                                                break;
                                                            }
                                                            return (
                                                                (e.next = 6),
                                                                [
                                                                    r,
                                                                    J(
                                                                        "ERR_EXPECT_ARRAY"
                                                                    ),
                                                                    this,
                                                                ]
                                                            );
                                                        case 6:
                                                            return e.abrupt(
                                                                "return"
                                                            );
                                                        case 7:
                                                            c = 0;
                                                        case 8:
                                                            if (
                                                                !(
                                                                    c <
                                                                    s.types
                                                                        .length
                                                                )
                                                            ) {
                                                                e.next = 18;
                                                                break;
                                                            }
                                                            return (
                                                                (p =
                                                                    s.types[c]),
                                                                me(
                                                                    (f =
                                                                        o.unwrap()) instanceof
                                                                        le,
                                                                    "Mapper must be a function type."
                                                                ),
                                                                (y =
                                                                    f.invoke(
                                                                        p
                                                                    )),
                                                                (l = a[c]),
                                                                e.delegateYield(
                                                                    y.errors(
                                                                        t,
                                                                        r.concat(
                                                                            c
                                                                        ),
                                                                        l
                                                                    ),
                                                                    "t0",
                                                                    15
                                                                )
                                                            );
                                                        case 15:
                                                            c++, (e.next = 8);
                                                            break;
                                                        case 18:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        var t = this.tuple,
                                            r = this.mapper,
                                            n = this.context,
                                            a = t.unwrap();
                                        if (
                                            (me(
                                                a instanceof D,
                                                "Target must be a tuple type."
                                            ),
                                            !n.checkPredicate("Array", e))
                                        )
                                            return !1;
                                        for (
                                            var i = 0;
                                            i < a.types.length;
                                            i++
                                        ) {
                                            var o = a.types[i],
                                                u = r.unwrap();
                                            if (
                                                (me(
                                                    u instanceof le,
                                                    "Mapper must be a function type."
                                                ),
                                                !u.invoke(o).accepts(e[i]))
                                            )
                                                return !1;
                                        }
                                        return !0;
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        return L(this.unwrap(), e);
                                    },
                                },
                                {
                                    key: "unwrap",
                                    value: function () {
                                        var e = this.tuple,
                                            t = this.mapper,
                                            r = this.context,
                                            n = e.unwrap();
                                        me(
                                            n instanceof D,
                                            "Target must be an tuple type."
                                        );
                                        for (
                                            var a = [], i = 0;
                                            i < n.types.length;
                                            i++
                                        ) {
                                            var o = n.types[i],
                                                u = t.unwrap();
                                            me(
                                                u instanceof le,
                                                "Mapper must be a function type."
                                            ),
                                                a.push(
                                                    u
                                                        .invoke(o)
                                                        .unwrap()
                                                        .unwrap()
                                                );
                                        }
                                        return r.tuple.apply(r, a);
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        return (
                                            "$TupleMap<" +
                                            this.tuple.toString() +
                                            ", " +
                                            this.mapper.toString() +
                                            ">"
                                        );
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return {
                                            typeName: this.typeName,
                                            tuple: this.tuple,
                                            mapper: this.mapper,
                                        };
                                    },
                                },
                            ]),
                            t
                        );
                    })(W),
                    Lt = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "$ValuesType"),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a) {
                                        var i, o, u, s, c, p;
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            me(
                                                                (i =
                                                                    this.type.unwrap()) instanceof
                                                                    Xe,
                                                                "Can only $Values<T> object types."
                                                            ),
                                                                (o =
                                                                    i.properties),
                                                                (u = o.length),
                                                                (s = 0);
                                                        case 5:
                                                            if (!(s < u)) {
                                                                e.next = 12;
                                                                break;
                                                            }
                                                            if (
                                                                !o[
                                                                    s
                                                                ].value.accepts(
                                                                    a
                                                                )
                                                            ) {
                                                                e.next = 9;
                                                                break;
                                                            }
                                                            return e.abrupt(
                                                                "return"
                                                            );
                                                        case 9:
                                                            s++, (e.next = 5);
                                                            break;
                                                        case 12:
                                                            for (
                                                                c = new Array(
                                                                    u
                                                                ),
                                                                    p = 0;
                                                                p < u;
                                                                p++
                                                            )
                                                                c[p] =
                                                                    o[
                                                                        p
                                                                    ].value.toString();
                                                            return (
                                                                (e.next = 16),
                                                                [
                                                                    r,
                                                                    J(
                                                                        "ERR_NO_UNION",
                                                                        c.join(
                                                                            " | "
                                                                        )
                                                                    ),
                                                                    this,
                                                                ]
                                                            );
                                                        case 16:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        var t = this.type.unwrap();
                                        me(
                                            t instanceof Xe,
                                            "Can only $Values<T> object types."
                                        );
                                        for (
                                            var r = t.properties,
                                                n = r.length,
                                                a = 0;
                                            a < n;
                                            a++
                                        )
                                            if (r[a].value.accepts(e))
                                                return !0;
                                        return !1;
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        return L(this.unwrap(), e);
                                    },
                                },
                                {
                                    key: "unwrap",
                                    value: function () {
                                        var e = this.context,
                                            t = this.type.unwrap();
                                        me(
                                            t instanceof Xe,
                                            "Can only $Values<T> object types."
                                        );
                                        for (
                                            var r = t.properties,
                                                n = r.length,
                                                a = new Array(n),
                                                i = 0;
                                            i < n;
                                            i++
                                        ) {
                                            var o = r[i];
                                            a[i] = o.value;
                                        }
                                        return e.union.apply(e, a);
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        return (
                                            "$Values<" +
                                            this.type.toString() +
                                            ">"
                                        );
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return {
                                            typeName: this.typeName,
                                            type: this.type,
                                        };
                                    },
                                },
                            ]),
                            t
                        );
                    })(W);
                function Wt(e, t, r) {
                    var n = t.impl;
                    if ("function" != typeof n) return !0;
                    if (n === r || n.isPrototypeOf(r)) return !0;
                    var a = e.getAnnotation(n);
                    return null != a && Mt(e, a, r);
                }
                function Mt(e, t, r) {
                    var n = e.getAnnotation(r);
                    return null == n || -1 !== L(t, n);
                }
                var Xt,
                    Jt,
                    Dt = (function (e) {
                        function t() {
                            var e, r, n;
                            i(this, t);
                            for (
                                var a = arguments.length, o = Array(a), u = 0;
                                u < a;
                                u++
                            )
                                o[u] = arguments[u];
                            return (
                                (r = n =
                                    p(
                                        this,
                                        (e =
                                            t.__proto__ ||
                                            Object.getPrototypeOf(
                                                t
                                            )).call.apply(e, [this].concat(o))
                                    )),
                                (n.typeName = "ClassType"),
                                p(n, r)
                            );
                        }
                        return (
                            s(t, e),
                            o(t, [
                                {
                                    key: "errors",
                                    value: n.mark(function e(t, r, a) {
                                        var i, o, u;
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (
                                                                ((i =
                                                                    this
                                                                        .instanceType),
                                                                (o =
                                                                    this
                                                                        .context),
                                                                "function" ==
                                                                    typeof a)
                                                            ) {
                                                                e.next = 5;
                                                                break;
                                                            }
                                                            return (
                                                                (e.next = 4),
                                                                [
                                                                    r,
                                                                    J(
                                                                        "ERR_EXPECT_CLASS",
                                                                        i.toString()
                                                                    ),
                                                                    this,
                                                                ]
                                                            );
                                                        case 4:
                                                            return e.abrupt(
                                                                "return"
                                                            );
                                                        case 5:
                                                            if (
                                                                (u =
                                                                    "ClassDeclaration" ===
                                                                    i.typeName
                                                                        ? i
                                                                        : i.unwrap()) instanceof
                                                                ke
                                                                    ? Wt(
                                                                          o,
                                                                          u,
                                                                          a
                                                                      )
                                                                    : Mt(
                                                                          o,
                                                                          u,
                                                                          a
                                                                      )
                                                            ) {
                                                                e.next = 10;
                                                                break;
                                                            }
                                                            return (
                                                                (e.next = 10),
                                                                [
                                                                    r,
                                                                    J(
                                                                        "ERR_EXPECT_CLASS",
                                                                        i.toString()
                                                                    ),
                                                                    this,
                                                                ]
                                                            );
                                                        case 10:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "accepts",
                                    value: function (e) {
                                        var t = this.instanceType,
                                            r = this.context;
                                        if ("function" != typeof e) return !1;
                                        var n =
                                            "ClassDeclaration" === t.typeName
                                                ? t
                                                : t.unwrap();
                                        return n instanceof ke
                                            ? Wt(r, n, e)
                                            : Mt(r, n, e);
                                    },
                                },
                                {
                                    key: "compareWith",
                                    value: function (e) {
                                        var r = this.instanceType;
                                        return e instanceof t
                                            ? L(r, e.instanceType)
                                            : -1;
                                    },
                                },
                                {
                                    key: "toString",
                                    value: function () {
                                        return (
                                            "Class<" +
                                            this.instanceType.toString() +
                                            ">"
                                        );
                                    },
                                },
                                {
                                    key: "toJSON",
                                    value: function () {
                                        return {
                                            typeName: this.typeName,
                                            instanceType: this.instanceType,
                                        };
                                    },
                                },
                            ]),
                            t
                        );
                    })(W),
                    Yt = new WeakSet(),
                    $t = (function () {
                        function r() {
                            i(this, r),
                                (this.mode = "assert"),
                                (this[ie] = {}),
                                (this[ye] = {}),
                                (this[se] = new Map()),
                                (this[ce] = new dt(this)),
                                (this[oe] = {});
                        }
                        return (
                            o(r, [
                                {
                                    key: "makeJSONError",
                                    value: function (e) {
                                        return l(e);
                                    },
                                },
                                {
                                    key: "makeTypeError",
                                    value: function (e) {
                                        return R(e);
                                    },
                                },
                                {
                                    key: "createContext",
                                    value: function () {
                                        var e = new r();
                                        return (e[ae] = this), e;
                                    },
                                },
                                {
                                    key: "typeOf",
                                    value: function (e) {
                                        var t = this.getAnnotation(e);
                                        if (t)
                                            return "function" == typeof e &&
                                                (t instanceof Ae ||
                                                    t instanceof Re)
                                                ? this.Class(t)
                                                : t;
                                        var r = this[ce];
                                        return r.infer(e);
                                    },
                                },
                                {
                                    key: "compareTypes",
                                    value: function (e, t) {
                                        return L(e, t);
                                    },
                                },
                                {
                                    key: "get",
                                    value: function (e) {
                                        for (
                                            var r = this[ie][e],
                                                n = arguments.length,
                                                a = Array(n > 1 ? n - 1 : 0),
                                                i = 1;
                                            i < n;
                                            i++
                                        )
                                            a[i - 1] = arguments[i];
                                        if (null != r) {
                                            for (
                                                var o =
                                                        "function" == typeof r
                                                            ? new r(this)
                                                            : r,
                                                    u = 0;
                                                u < a.length;
                                                u++
                                            ) {
                                                var s = a[u];
                                                if (
                                                    "function" !=
                                                    typeof o.getProperty
                                                )
                                                    return;
                                                if (!(o = o.getProperty(s)))
                                                    return;
                                                o = o.unwrap();
                                            }
                                            return o;
                                        }
                                        var c = this[ae];
                                        if (c) {
                                            var p = c.get.apply(
                                                c,
                                                [e].concat(y(a))
                                            );
                                            if (p) return p;
                                        }
                                        if ("function" == typeof t[e]) {
                                            var f = new ke(this);
                                            return (
                                                (f.name = e),
                                                (f.impl = t[e]),
                                                (this[ie][e] = f),
                                                f
                                            );
                                        }
                                    },
                                },
                                {
                                    key: "getPredicate",
                                    value: function (e) {
                                        var t = this[ye][e];
                                        if (t) return t;
                                        var r = this[ae];
                                        return r ? r.getPredicate(e) : void 0;
                                    },
                                },
                                {
                                    key: "setPredicate",
                                    value: function (e, t) {
                                        this[ye][e] = t;
                                    },
                                },
                                {
                                    key: "checkPredicate",
                                    value: function (e, t) {
                                        var r = this.getPredicate(e);
                                        return !!r && r(t);
                                    },
                                },
                                {
                                    key: "decorate",
                                    value: function (e, t) {
                                        var r = this;
                                        return (
                                            null == t &&
                                                (t = "assert" === this.mode),
                                            function (n, a, i) {
                                                return i && "string" == typeof a
                                                    ? xt(e, n, a, i, Boolean(t))
                                                    : (me(
                                                          "function" !=
                                                              typeof e,
                                                          "Cannot decorate an object or function as a method."
                                                      ),
                                                      r.annotate(n, e));
                                            }
                                        );
                                    },
                                },
                                {
                                    key: "annotate",
                                    value: function (e, t) {
                                        return void 0 === t ? Tt(e) : Tt(e, t);
                                    },
                                },
                                {
                                    key: "getAnnotation",
                                    value: function (e) {
                                        if (
                                            (null !== e &&
                                                "object" ===
                                                    (void 0 === e
                                                        ? "undefined"
                                                        : a(e))) ||
                                            "function" == typeof e
                                        )
                                            return e[pe];
                                    },
                                },
                                {
                                    key: "hasAnnotation",
                                    value: function (e) {
                                        return null != e && !!e[pe];
                                    },
                                },
                                {
                                    key: "setAnnotation",
                                    value: function (e, t) {
                                        return (e[pe] = t), e;
                                    },
                                },
                                {
                                    key: "type",
                                    value: function (e, t) {
                                        if ("function" == typeof t) {
                                            var r = new He(this);
                                            return (
                                                (r.name = e),
                                                (r.typeCreator = t),
                                                r
                                            );
                                        }
                                        var n = new Z(this);
                                        return (n.name = e), (n.type = t), n;
                                    },
                                },
                                {
                                    key: "declare",
                                    value: function (e, t) {
                                        if (
                                            (e instanceof Ee
                                                ? (e = (t = e).name)
                                                : e instanceof Z &&
                                                  (e = (t = e).name),
                                            "function" == typeof t &&
                                                (t = this.type(e, t)),
                                            t instanceof Se)
                                        )
                                            return (this[oe][e] = t), t;
                                        me(
                                            "string" == typeof e,
                                            "Name must be a string"
                                        ),
                                            me(
                                                t instanceof W,
                                                "Type must be supplied to declaration"
                                            );
                                        var r = this[ie];
                                        if (t instanceof Ee)
                                            return (r[e] = t), t;
                                        if (t instanceof Z || t instanceof He) {
                                            var n = new Ne(this);
                                            return (
                                                (n.name = e),
                                                (n.typeAlias = t),
                                                (r[e] = n),
                                                n
                                            );
                                        }
                                        var a = this.var(e, t);
                                        return (r[e] = a), a;
                                    },
                                },
                                {
                                    key: "declarations",
                                    value: n.mark(function e() {
                                        var t, r;
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            (t = this[ie]),
                                                                (e.t0 =
                                                                    n.keys(t));
                                                        case 2:
                                                            if (
                                                                (e.t1 = e.t0())
                                                                    .done
                                                            ) {
                                                                e.next = 8;
                                                                break;
                                                            }
                                                            return (
                                                                (r =
                                                                    e.t1.value),
                                                                (e.next = 6),
                                                                [r, t[r]]
                                                            );
                                                        case 6:
                                                            e.next = 2;
                                                            break;
                                                        case 8:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "modules",
                                    value: n.mark(function e() {
                                        var t, r;
                                        return n.wrap(
                                            function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            (t = this[oe]),
                                                                (e.t0 =
                                                                    n.keys(t));
                                                        case 2:
                                                            if (
                                                                (e.t1 = e.t0())
                                                                    .done
                                                            ) {
                                                                e.next = 8;
                                                                break;
                                                            }
                                                            return (
                                                                (r =
                                                                    e.t1.value),
                                                                (e.next = 6),
                                                                t[r]
                                                            );
                                                        case 6:
                                                            e.next = 2;
                                                            break;
                                                        case 8:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    }),
                                },
                                {
                                    key: "import",
                                    value: function (e) {
                                        var t = this[oe];
                                        if (t[e]) return t[e];
                                        var r = e.split("/"),
                                            n = t[f(r, 1)[0]];
                                        if (n) return n.import(e);
                                        var a = this[ae];
                                        return a ? a.import(e) : void 0;
                                    },
                                },
                                {
                                    key: "declareTypeConstructor",
                                    value: function (e) {
                                        var t = e.name,
                                            r = e.impl,
                                            n = e.typeName,
                                            a = e.errors,
                                            i = e.accepts,
                                            o = e.inferTypeParameters,
                                            u = e.compareWith,
                                            s = this[ie];
                                        s[t] &&
                                            this.emitWarningMessage(
                                                "Redeclaring type: " +
                                                    t +
                                                    ", this may be unintended."
                                            );
                                        var c = new de(this);
                                        if (
                                            ((c.name = t),
                                            (c.typeName = n),
                                            (c.impl = r),
                                            (c.errors = a),
                                            (c.accepts = i),
                                            (c.inferTypeParameters = o),
                                            "function" == typeof u &&
                                                (c.compareWith = u),
                                            (s[t] = c),
                                            "function" == typeof r)
                                        ) {
                                            var p = this[se];
                                            p.has(r) &&
                                                this.emitWarningMessage(
                                                    "A type handler already exists for the given implementation of " +
                                                        t +
                                                        "."
                                                ),
                                                p.set(r, c);
                                        }
                                        return c;
                                    },
                                },
                                {
                                    key: "getTypeConstructor",
                                    value: function (e) {
                                        var t = this[se];
                                        return t.get(e);
                                    },
                                },
                                {
                                    key: "literal",
                                    value: function (e) {
                                        return void 0 === e
                                            ? this.void()
                                            : null === e
                                            ? this.null()
                                            : "boolean" == typeof e
                                            ? this.boolean(e)
                                            : "number" == typeof e
                                            ? this.number(e)
                                            : "string" == typeof e
                                            ? this.string(e)
                                            : "symbol" ===
                                              (void 0 === e
                                                  ? "undefined"
                                                  : a(e))
                                            ? this.symbol(e)
                                            : this.typeOf(e);
                                    },
                                },
                                {
                                    key: "null",
                                    value: function () {
                                        return e.null;
                                    },
                                },
                                {
                                    key: "nullable",
                                    value: function (e) {
                                        var t = new xe(this);
                                        return (t.type = e), t;
                                    },
                                },
                                {
                                    key: "existential",
                                    value: function () {
                                        return e.existential;
                                    },
                                },
                                {
                                    key: "empty",
                                    value: function () {
                                        return e.empty;
                                    },
                                },
                                {
                                    key: "any",
                                    value: function () {
                                        return e.any;
                                    },
                                },
                                {
                                    key: "mixed",
                                    value: function () {
                                        return e.mixed;
                                    },
                                },
                                {
                                    key: "void",
                                    value: function () {
                                        return e.void;
                                    },
                                },
                                {
                                    key: "this",
                                    value: function (e) {
                                        var t = new it(this);
                                        return (
                                            void 0 !== e && (t.recorded = e), t
                                        );
                                    },
                                },
                                {
                                    key: "number",
                                    value: function (t) {
                                        if (void 0 !== t) {
                                            var r = new ze(this);
                                            return (r.value = t), r;
                                        }
                                        return e.number;
                                    },
                                },
                                {
                                    key: "boolean",
                                    value: function (t) {
                                        if (void 0 !== t) {
                                            var r = new $(this);
                                            return (r.value = t), r;
                                        }
                                        return e.boolean;
                                    },
                                },
                                {
                                    key: "string",
                                    value: function (t) {
                                        if (void 0 !== t) {
                                            var r = new tt(this);
                                            return (r.value = t), r;
                                        }
                                        return e.string;
                                    },
                                },
                                {
                                    key: "symbol",
                                    value: function (t) {
                                        if (void 0 !== t) {
                                            var r = new nt(this);
                                            return (r.value = t), r;
                                        }
                                        return e.symbol;
                                    },
                                },
                                {
                                    key: "typeParameter",
                                    value: function (e, t, r) {
                                        var n = new Q(this);
                                        return (
                                            (n.id = e),
                                            (n.bound = t),
                                            (n.default = r),
                                            n
                                        );
                                    },
                                },
                                {
                                    key: "flowInto",
                                    value: function (e) {
                                        return (function (e) {
                                            var t = e[q];
                                            if (t) return t;
                                            var r = new ee(e.context);
                                            return (
                                                (r.typeParameter = e),
                                                (e[q] = r),
                                                r
                                            );
                                        })(e);
                                    },
                                },
                                {
                                    key: "bindTypeParameters",
                                    value: function (e) {
                                        var t = Object.getPrototypeOf(e),
                                            r = t && Object.getPrototypeOf(t),
                                            n = r && r.constructor;
                                        if (!n)
                                            return (
                                                this.emitWarningMessage(
                                                    "Could not bind type parameters for non-existent parent class."
                                                ),
                                                e
                                            );
                                        var a = n[fe];
                                        if (a) {
                                            for (
                                                var i = e[a],
                                                    o = Object.keys(i),
                                                    u = arguments.length,
                                                    s = Array(
                                                        u > 1 ? u - 1 : 0
                                                    ),
                                                    c = 1;
                                                c < u;
                                                c++
                                            )
                                                s[c - 1] = arguments[c];
                                            for (
                                                var p = Math.min(
                                                        o.length,
                                                        s.length
                                                    ),
                                                    f = 0;
                                                f < p;
                                                f++
                                            ) {
                                                var y = i[o[f]];
                                                y.bound = s[f];
                                            }
                                        }
                                        return e;
                                    },
                                },
                                {
                                    key: "module",
                                    value: function (e, t) {
                                        var r = new Se(this);
                                        r.name = e;
                                        var n = this.createContext();
                                        return (
                                            (n[ae] = this),
                                            (n[ue] = r),
                                            (r.innerContext = n),
                                            t(n),
                                            r
                                        );
                                    },
                                },
                                {
                                    key: "moduleExports",
                                    value: function (e) {
                                        var t = this[ue];
                                        if (!t)
                                            throw new Error(
                                                "Cannot declare module.exports outside of a module."
                                            );
                                        var r = new Pe(this);
                                        return (
                                            (r.type = e),
                                            (t.moduleExports = r),
                                            r
                                        );
                                    },
                                },
                                {
                                    key: "var",
                                    value: function (e, t) {
                                        var r = new Oe(this);
                                        return (r.name = e), (r.type = t), r;
                                    },
                                },
                                {
                                    key: "class",
                                    value: function (e, t) {
                                        if ("function" == typeof t) {
                                            var r = new Re(this);
                                            return (
                                                (r.name = e),
                                                (r.bodyCreator = t),
                                                r
                                            );
                                        }
                                        var n = new Ae(this);
                                        n.name = e;
                                        for (
                                            var i = arguments.length,
                                                o = Array(i > 2 ? i - 2 : 0),
                                                u = 2;
                                            u < i;
                                            u++
                                        )
                                            o[u - 2] = arguments[u];
                                        null != t && o.unshift(t);
                                        for (
                                            var s,
                                                c = o.length,
                                                p = [],
                                                f = void 0,
                                                y = 0;
                                            y < c;
                                            y++
                                        ) {
                                            var l = o[y];
                                            if (
                                                l instanceof we ||
                                                l instanceof _e
                                            )
                                                p.push(l);
                                            else if (l instanceof Xe)
                                                me(
                                                    !f,
                                                    "Class body must only be declared once."
                                                ),
                                                    (f = l);
                                            else if (l instanceof Ie)
                                                me(
                                                    !n.superClass,
                                                    "Classes can only have one super class."
                                                ),
                                                    (n.superClass = l);
                                            else {
                                                if (
                                                    null == l ||
                                                    "object" !==
                                                        (void 0 === l
                                                            ? "undefined"
                                                            : a(l)) ||
                                                    l instanceof W
                                                )
                                                    throw new Error(
                                                        "ClassDeclaration cannot contain the given type directly."
                                                    );
                                                for (var h in l)
                                                    p.push(
                                                        this.property(h, l[h])
                                                    );
                                            }
                                        }
                                        return (
                                            f || (f = new Xe(this)),
                                            p.length &&
                                                (s = f.properties).push.apply(
                                                    s,
                                                    p
                                                ),
                                            (n.body = f),
                                            n
                                        );
                                    },
                                },
                                {
                                    key: "extends",
                                    value: function (e) {
                                        for (
                                            var t = new Ie(this),
                                                r = arguments.length,
                                                n = Array(r > 1 ? r - 1 : 0),
                                                a = 1;
                                            a < r;
                                            a++
                                        )
                                            n[a - 1] = arguments[a];
                                        return (
                                            (t.type = this.ref.apply(
                                                this,
                                                [e].concat(y(n))
                                            )),
                                            t
                                        );
                                    },
                                },
                                {
                                    key: "fn",
                                    value: function (e) {
                                        for (
                                            var t = arguments.length,
                                                r = Array(t > 1 ? t - 1 : 0),
                                                n = 1;
                                            n < t;
                                            n++
                                        )
                                            r[n - 1] = arguments[n];
                                        return this.function.apply(
                                            this,
                                            [e].concat(r)
                                        );
                                    },
                                },
                                {
                                    key: "function",
                                    value: function (e) {
                                        if ("function" == typeof e) {
                                            var t = new qe(this);
                                            return (t.bodyCreator = e), t;
                                        }
                                        var r = new le(this);
                                        if (null != e) {
                                            for (
                                                var n = arguments.length,
                                                    a = Array(
                                                        n > 1 ? n - 1 : 0
                                                    ),
                                                    i = 1;
                                                i < n;
                                                i++
                                            )
                                                a[i - 1] = arguments[i];
                                            a.unshift(e);
                                            for (
                                                var o = a.length, u = 0;
                                                u < o;
                                                u++
                                            ) {
                                                var s = a[u];
                                                if (s instanceof re)
                                                    r.params.push(s);
                                                else if (s instanceof te)
                                                    r.rest = s;
                                                else {
                                                    if (!(s instanceof ne))
                                                        throw new Error(
                                                            "FunctionType cannot contain the given type directly."
                                                        );
                                                    r.returnType = s;
                                                }
                                            }
                                        }
                                        return (
                                            r.returnType ||
                                                (r.returnType = this.any()),
                                            r
                                        );
                                    },
                                },
                                {
                                    key: "param",
                                    value: function (e, t) {
                                        var r =
                                                arguments.length > 2 &&
                                                void 0 !== arguments[2] &&
                                                arguments[2],
                                            n = new re(this);
                                        return (
                                            (n.name = e),
                                            (n.type = t),
                                            (n.optional = r),
                                            n
                                        );
                                    },
                                },
                                {
                                    key: "rest",
                                    value: function (e, t) {
                                        var r = new te(this);
                                        return (r.name = e), (r.type = t), r;
                                    },
                                },
                                {
                                    key: "return",
                                    value: function (e) {
                                        var t = new ne(this);
                                        return (t.type = e), t;
                                    },
                                },
                                {
                                    key: "generator",
                                    value: function (e, t, r) {
                                        var n = new he(this);
                                        return (
                                            (n.yieldType = e),
                                            (n.returnType = t || this.any()),
                                            (n.nextType = r || this.any()),
                                            n
                                        );
                                    },
                                },
                                {
                                    key: "object",
                                    value: function (e) {
                                        var t = new Xe(this);
                                        if (
                                            null == e ||
                                            "object" !==
                                                (void 0 === e
                                                    ? "undefined"
                                                    : a(e)) ||
                                            e instanceof W
                                        ) {
                                            for (
                                                var r = void 0,
                                                    n = arguments.length,
                                                    i = Array(
                                                        n > 1 ? n - 1 : 0
                                                    ),
                                                    o = 1;
                                                o < n;
                                                o++
                                            )
                                                i[o - 1] = arguments[o];
                                            for (
                                                var u = (r = e
                                                        ? [e].concat(y(i))
                                                        : i),
                                                    s = u.length,
                                                    c = 0;
                                                c < s;
                                                c++
                                            ) {
                                                var p = r[c];
                                                if (p instanceof we)
                                                    t.properties.push(p);
                                                else if (p instanceof _e)
                                                    t.indexers.push(p);
                                                else {
                                                    if (!(p instanceof Te))
                                                        throw new Error(
                                                            "ObjectType cannot contain the given type directly."
                                                        );
                                                    t.callProperties.push(p);
                                                }
                                            }
                                        } else
                                            for (var f in e)
                                                t.properties.push(
                                                    this.property(f, e[f])
                                                );
                                        return t;
                                    },
                                },
                                {
                                    key: "exactObject",
                                    value: function (e) {
                                        for (
                                            var t = arguments.length,
                                                r = Array(t > 1 ? t - 1 : 0),
                                                n = 1;
                                            n < t;
                                            n++
                                        )
                                            r[n - 1] = arguments[n];
                                        var a = this.object.apply(
                                            this,
                                            [e].concat(y(r))
                                        );
                                        return (a.exact = !0), a;
                                    },
                                },
                                {
                                    key: "callProperty",
                                    value: function (e) {
                                        var t = new Te(this);
                                        return (t.value = e), t;
                                    },
                                },
                                {
                                    key: "property",
                                    value: function (e, t) {
                                        var r =
                                                arguments.length > 2 &&
                                                void 0 !== arguments[2] &&
                                                arguments[2],
                                            n = new we(this);
                                        return (
                                            (n.key = e),
                                            (n.value =
                                                t instanceof W
                                                    ? t
                                                    : this.object(t)),
                                            (n.optional = r),
                                            n
                                        );
                                    },
                                },
                                {
                                    key: "indexer",
                                    value: function (e, t, r) {
                                        var n = new _e(this);
                                        return (
                                            (n.id = e),
                                            (n.key = t),
                                            (n.value = r),
                                            n
                                        );
                                    },
                                },
                                {
                                    key: "method",
                                    value: function (e, t) {
                                        var r = new we(this);
                                        r.key = e;
                                        for (
                                            var n = arguments.length,
                                                a = Array(n > 2 ? n - 2 : 0),
                                                i = 2;
                                            i < n;
                                            i++
                                        )
                                            a[i - 2] = arguments[i];
                                        return (
                                            (r.value = this.function.apply(
                                                this,
                                                [t].concat(a)
                                            )),
                                            r
                                        );
                                    },
                                },
                                {
                                    key: "staticCallProperty",
                                    value: function (e) {
                                        var t = this.callProperty(e);
                                        return (t.static = !0), t;
                                    },
                                },
                                {
                                    key: "staticProperty",
                                    value: function (e, t) {
                                        var r =
                                                arguments.length > 2 &&
                                                void 0 !== arguments[2] &&
                                                arguments[2],
                                            n = this.property(e, t, r);
                                        return (n.static = !0), n;
                                    },
                                },
                                {
                                    key: "staticMethod",
                                    value: function (e, t) {
                                        for (
                                            var r = arguments.length,
                                                n = Array(r > 2 ? r - 2 : 0),
                                                a = 2;
                                            a < r;
                                            a++
                                        )
                                            n[a - 2] = arguments[a];
                                        var i = this.method.apply(
                                            this,
                                            [e, t].concat(n)
                                        );
                                        return (i.static = !0), i;
                                    },
                                },
                                {
                                    key: "spread",
                                    value: function () {
                                        for (
                                            var e = new Xe(this),
                                                t = arguments.length,
                                                r = Array(t),
                                                n = 0;
                                            n < t;
                                            n++
                                        )
                                            r[n] = arguments[n];
                                        for (var a = 0; a < r.length; a++) {
                                            var i,
                                                o,
                                                u = r[a].unwrap();
                                            if (
                                                (Array.isArray(
                                                    u.callProperties
                                                ) &&
                                                    (i =
                                                        e.callProperties).push.apply(
                                                        i,
                                                        y(u.callProperties)
                                                    ),
                                                Array.isArray(u.indexers) &&
                                                    (o = e.indexers).push.apply(
                                                        o,
                                                        y(u.indexers)
                                                    ),
                                                Array.isArray(u.properties))
                                            )
                                                for (
                                                    var s = 0;
                                                    s < u.properties.length;
                                                    s++
                                                ) {
                                                    var c = u.properties[s];
                                                    me(c instanceof we),
                                                        e.setProperty(
                                                            c.key,
                                                            c.value,
                                                            c.optional
                                                        );
                                                }
                                        }
                                        return e;
                                    },
                                },
                                {
                                    key: "tuple",
                                    value: function () {
                                        for (
                                            var e = new D(this),
                                                t = arguments.length,
                                                r = Array(t),
                                                n = 0;
                                            n < t;
                                            n++
                                        )
                                            r[n] = arguments[n];
                                        return (e.types = r), e;
                                    },
                                },
                                {
                                    key: "array",
                                    value: function (e) {
                                        var t = new Y(this);
                                        return (
                                            (t.elementType = e || this.any()), t
                                        );
                                    },
                                },
                                {
                                    key: "union",
                                    value: function () {
                                        for (
                                            var e = arguments.length,
                                                t = Array(e),
                                                r = 0;
                                            r < e;
                                            r++
                                        )
                                            t[r] = arguments[r];
                                        return gt(this, t);
                                    },
                                },
                                {
                                    key: "intersect",
                                    value: function () {
                                        for (
                                            var e = new Fe(this),
                                                t = arguments.length,
                                                r = Array(t),
                                                n = 0;
                                            n < t;
                                            n++
                                        )
                                            r[n] = arguments[n];
                                        return (e.types = r), e;
                                    },
                                },
                                {
                                    key: "intersection",
                                    value: function () {
                                        return this.intersect.apply(
                                            this,
                                            arguments
                                        );
                                    },
                                },
                                {
                                    key: "box",
                                    value: function (e) {
                                        var t = new ut(this);
                                        return (t.reveal = e), t;
                                    },
                                },
                                {
                                    key: "tdz",
                                    value: function (e, t) {
                                        var r = new lt(this);
                                        return (r.reveal = e), (r.name = t), r;
                                    },
                                },
                                {
                                    key: "ref",
                                    value: function (e) {
                                        var t,
                                            r = void 0;
                                        if ("string" == typeof e)
                                            (r = this.get(e)) ||
                                                ((r = new ct(this)).name = e);
                                        else if ("function" == typeof e) {
                                            var n = this[se];
                                            (r = n.get(e)) ||
                                                (((r = new ke(this)).impl = e),
                                                (r.name = e.name));
                                        } else {
                                            if (!(e instanceof W))
                                                return (
                                                    null == e ||
                                                    "object" !==
                                                        (void 0 === e
                                                            ? "undefined"
                                                            : a(e))
                                                        ? this.emitWarningMessage(
                                                              "Could not reference the given type, try t.typeOf(value) instead. (got " +
                                                                  String(e) +
                                                                  ")"
                                                          )
                                                        : Yt.has(e) ||
                                                          (this.emitWarningMessage(
                                                              "Could not reference the given type, try t.typeOf(value) instead."
                                                          ),
                                                          Yt.add(e)),
                                                    this.any()
                                                );
                                            r = e;
                                        }
                                        for (
                                            var i = arguments.length,
                                                o = Array(i > 1 ? i - 1 : 0),
                                                u = 1;
                                            u < i;
                                            u++
                                        )
                                            o[u - 1] = arguments[u];
                                        return o.length
                                            ? (me(
                                                  "function" == typeof r.apply,
                                                  "Cannot apply non-applicable type: " +
                                                      r.typeName +
                                                      "."
                                              ),
                                              (t = r).apply.apply(t, y(o)))
                                            : r;
                                    },
                                },
                                {
                                    key: "validate",
                                    value: function (e, t) {
                                        var r,
                                            n =
                                                arguments.length > 2 &&
                                                void 0 !== arguments[2]
                                                    ? arguments[2]
                                                    : "",
                                            a = arguments[3],
                                            i = new O(this, t);
                                        return (
                                            a
                                                ? (r = i.path).push.apply(
                                                      r,
                                                      y(a)
                                                  )
                                                : "string" == typeof e.name &&
                                                  i.path.push(e.name),
                                            (i.prefix = n),
                                            (i.errors = Array.from(
                                                e.errors(i, [], t)
                                            )),
                                            i
                                        );
                                    },
                                },
                                {
                                    key: "check",
                                    value: function (e, t) {
                                        var r =
                                                arguments.length > 2 &&
                                                void 0 !== arguments[2]
                                                    ? arguments[2]
                                                    : "",
                                            n = arguments[3];
                                        return "assert" === this.mode
                                            ? this.assert(e, t, r, n)
                                            : this.warn(e, t, r, n);
                                    },
                                },
                                {
                                    key: "assert",
                                    value: function (e, t) {
                                        var r =
                                                arguments.length > 2 &&
                                                void 0 !== arguments[2]
                                                    ? arguments[2]
                                                    : "",
                                            n = arguments[3],
                                            a = this.validate(e, t, r, n),
                                            i = this.makeTypeError(a);
                                        if (i) throw i;
                                        return t;
                                    },
                                },
                                {
                                    key: "warn",
                                    value: function (e, t) {
                                        var r =
                                                arguments.length > 2 &&
                                                void 0 !== arguments[2]
                                                    ? arguments[2]
                                                    : "",
                                            n = arguments[3],
                                            a = this.validate(e, t, r, n),
                                            i = mt(a);
                                        return (
                                            "string" == typeof i &&
                                                this.emitWarningMessage(i),
                                            t
                                        );
                                    },
                                },
                                {
                                    key: "emitWarningMessage",
                                    value: function (e) {
                                        console.warn("flow-runtime:", e);
                                    },
                                },
                                {
                                    key: "propTypes",
                                    value: function (e) {
                                        return (function (e) {
                                            var t = {};
                                            if (!e.properties) return t;
                                            var r = function (e) {
                                                    t[e.key] = function (
                                                        t,
                                                        r,
                                                        n
                                                    ) {
                                                        return I(e, t);
                                                    };
                                                },
                                                n = !0,
                                                a = !1,
                                                i = void 0;
                                            try {
                                                for (
                                                    var o,
                                                        u =
                                                            e.properties[
                                                                Symbol.iterator
                                                            ]();
                                                    !(n = (o = u.next()).done);
                                                    n = !0
                                                )
                                                    r(o.value);
                                            } catch (e) {
                                                (a = !0), (i = e);
                                            } finally {
                                                try {
                                                    !n &&
                                                        u.return &&
                                                        u.return();
                                                } finally {
                                                    if (a) throw i;
                                                }
                                            }
                                            return t;
                                        })(e.unwrap());
                                    },
                                },
                                {
                                    key: "match",
                                    value: function () {
                                        for (
                                            var e = arguments.length,
                                                t = Array(e),
                                                r = 0;
                                            r < e;
                                            r++
                                        )
                                            t[r] = arguments[r];
                                        var n = t.pop();
                                        if (!Array.isArray(n))
                                            throw new Error(
                                                "Invalid pattern, last argument must be an array."
                                            );
                                        var a = this.pattern.apply(this, y(n));
                                        return a.apply(void 0, t);
                                    },
                                },
                                {
                                    key: "pattern",
                                    value: function () {
                                        for (
                                            var e = arguments.length,
                                                t = Array(e),
                                                r = 0;
                                            r < e;
                                            r++
                                        )
                                            t[r] = arguments[r];
                                        for (
                                            var n = t.length,
                                                a = new Array(n),
                                                i = 0;
                                            i < n;
                                            i++
                                        ) {
                                            var o = t[i],
                                                u = this.getAnnotation(o);
                                            if (u)
                                                me(
                                                    u instanceof le ||
                                                        u instanceof qe,
                                                    "Pattern clauses must be annotated functions."
                                                ),
                                                    (a[i] = u);
                                            else {
                                                if (i !== n - 1)
                                                    throw new Error(
                                                        "Invalid Pattern - found unannotated function in position " +
                                                            i +
                                                            ", default clauses must be last."
                                                    );
                                                a[i] = !0;
                                            }
                                        }
                                        return function () {
                                            for (var e = 0; e < a.length; e++) {
                                                var r = a[e],
                                                    n = t[e];
                                                if (!0 === r)
                                                    return n.apply(
                                                        void 0,
                                                        arguments
                                                    );
                                                if (
                                                    r.acceptsParams.apply(
                                                        r,
                                                        arguments
                                                    )
                                                )
                                                    return n.apply(
                                                        void 0,
                                                        arguments
                                                    );
                                            }
                                            var i = new TypeError(
                                                "Value did not match any of the candidates."
                                            );
                                            throw (
                                                ((i.name = "RuntimeTypeError"),
                                                i)
                                            );
                                        };
                                    },
                                },
                                {
                                    key: "wrapIterator",
                                    value: function (e) {
                                        var t = this;
                                        return n.mark(function r(a) {
                                            var i, o, u, s, c, p;
                                            return n.wrap(
                                                function (r) {
                                                    for (;;)
                                                        switch (
                                                            (r.prev = r.next)
                                                        ) {
                                                            case 0:
                                                                (i = !0),
                                                                    (o = !1),
                                                                    (u =
                                                                        void 0),
                                                                    (r.prev = 3),
                                                                    (s =
                                                                        a[
                                                                            Symbol
                                                                                .iterator
                                                                        ]());
                                                            case 5:
                                                                if (
                                                                    (i = (c =
                                                                        s.next())
                                                                        .done)
                                                                ) {
                                                                    r.next = 12;
                                                                    break;
                                                                }
                                                                return (
                                                                    (p =
                                                                        c.value),
                                                                    (r.next = 9),
                                                                    t.check(
                                                                        e,
                                                                        p
                                                                    )
                                                                );
                                                            case 9:
                                                                (i = !0),
                                                                    (r.next = 5);
                                                                break;
                                                            case 12:
                                                                r.next = 18;
                                                                break;
                                                            case 14:
                                                                (r.prev = 14),
                                                                    (r.t0 =
                                                                        r.catch(
                                                                            3
                                                                        )),
                                                                    (o = !0),
                                                                    (u = r.t0);
                                                            case 18:
                                                                (r.prev = 18),
                                                                    (r.prev = 19),
                                                                    !i &&
                                                                        s.return &&
                                                                        s.return();
                                                            case 21:
                                                                if (
                                                                    ((r.prev = 21),
                                                                    !o)
                                                                ) {
                                                                    r.next = 24;
                                                                    break;
                                                                }
                                                                throw u;
                                                            case 24:
                                                                return r.finish(
                                                                    21
                                                                );
                                                            case 25:
                                                                return r.finish(
                                                                    18
                                                                );
                                                            case 26:
                                                            case "end":
                                                                return r.stop();
                                                        }
                                                },
                                                r,
                                                this,
                                                [
                                                    [3, 14, 18, 26],
                                                    [19, , 21, 25],
                                                ]
                                            );
                                        });
                                    },
                                },
                                {
                                    key: "refinement",
                                    value: function (e) {
                                        var t = new et(this);
                                        t.type = e;
                                        for (
                                            var r = arguments.length,
                                                n = Array(r > 1 ? r - 1 : 0),
                                                a = 1;
                                            a < r;
                                            a++
                                        )
                                            n[a - 1] = arguments[a];
                                        return (
                                            t.addConstraint.apply(t, y(n)), t
                                        );
                                    },
                                },
                                {
                                    key: "$exact",
                                    value: function (e) {
                                        var t,
                                            r,
                                            n,
                                            a = new Xe(this);
                                        return (
                                            (e = e.unwrap()),
                                            Array.isArray(e.callProperties) &&
                                                (t =
                                                    a.callProperties).push.apply(
                                                    t,
                                                    y(e.callProperties)
                                                ),
                                            Array.isArray(e.indexers) &&
                                                (r = a.indexers).push.apply(
                                                    r,
                                                    y(e.indexers)
                                                ),
                                            Array.isArray(e.properties) &&
                                                (n = a.properties).push.apply(
                                                    n,
                                                    y(e.properties)
                                                ),
                                            (a.exact = !0),
                                            a
                                        );
                                    },
                                },
                                {
                                    key: "$diff",
                                    value: function (e, t) {
                                        var r = new Et(this);
                                        return (r.aType = e), (r.bType = t), r;
                                    },
                                },
                                {
                                    key: "$flowFixMe",
                                    value: function () {
                                        return new Ot(this);
                                    },
                                },
                                {
                                    key: "$keys",
                                    value: function (e) {
                                        var t = new Nt(this);
                                        return (t.type = e), t;
                                    },
                                },
                                {
                                    key: "$objMap",
                                    value: function (e, t) {
                                        var r = new Pt(this);
                                        return (
                                            (r.object = e), (r.mapper = t), r
                                        );
                                    },
                                },
                                {
                                    key: "$objMapi",
                                    value: function (e, t) {
                                        var r = new St(this);
                                        return (
                                            (r.object = e), (r.mapper = t), r
                                        );
                                    },
                                },
                                {
                                    key: "$propertyType",
                                    value: function (e, t) {
                                        var r = new At(this);
                                        if (((r.object = e), t instanceof W)) {
                                            var n = t.unwrap();
                                            r.property = n.value;
                                        } else r.property = t;
                                        return r;
                                    },
                                },
                                {
                                    key: "$shape",
                                    value: function (e) {
                                        var t = new jt(this);
                                        return (t.type = e), t;
                                    },
                                },
                                {
                                    key: "$subtype",
                                    value: function (e) {
                                        var t = new Rt(this);
                                        return (t.type = e), t;
                                    },
                                },
                                {
                                    key: "$supertype",
                                    value: function (e) {
                                        var t = new Ct(this);
                                        return (t.type = e), t;
                                    },
                                },
                                {
                                    key: "$tupleMap",
                                    value: function (e, t) {
                                        var r = new It(this);
                                        return (r.tuple = e), (r.mapper = t), r;
                                    },
                                },
                                {
                                    key: "$values",
                                    value: function (e) {
                                        var t = new Lt(this);
                                        return (t.type = e), t;
                                    },
                                },
                                {
                                    key: "Class",
                                    value: function (e) {
                                        var t = new Dt(this);
                                        return (t.instanceType = e), t;
                                    },
                                },
                                {
                                    key: "TypeParametersSymbol",
                                    get: function () {
                                        return fe;
                                    },
                                },
                            ]),
                            r
                        );
                    })(),
                    Ut = void 0;
                void 0 !== t &&
                void 0 !==
                    t.__FLOW_RUNTIME_GLOBAL_CONTEXT_DO_NOT_USE_THIS_VARIABLE__
                    ? (Ut =
                          t.__FLOW_RUNTIME_GLOBAL_CONTEXT_DO_NOT_USE_THIS_VARIABLE__)
                    : ((Ut = new $t()),
                      (Jt = Ut),
                      (e.null = Object.freeze(new ge(Jt))),
                      (e.empty = Object.freeze(new F(Jt))),
                      (e.number = Object.freeze(new Ke(Jt))),
                      (e.boolean = Object.freeze(new U(Jt))),
                      (e.string = Object.freeze(new rt(Jt))),
                      (e.symbol = Object.freeze(new at(Jt))),
                      (e.any = Object.freeze(new M(Jt))),
                      (e.mixed = Object.freeze(new Ge(Jt))),
                      (e.void = Object.freeze(new be(Jt))),
                      (e.existential = Object.freeze(new B(Jt))),
                      (function (e) {
                          e.declareTypeConstructor({
                              name: "Date",
                              impl: Date,
                              typeName: "DateType",
                              errors: n.mark(function e(t, r, a) {
                                  return n.wrap(
                                      function (e) {
                                          for (;;)
                                              switch ((e.prev = e.next)) {
                                                  case 0:
                                                      if (a instanceof Date) {
                                                          e.next = 5;
                                                          break;
                                                      }
                                                      return (
                                                          (e.next = 3),
                                                          [
                                                              r,
                                                              J(
                                                                  "ERR_EXPECT_INSTANCEOF",
                                                                  "Date"
                                                              ),
                                                              this,
                                                          ]
                                                      );
                                                  case 3:
                                                      e.next = 8;
                                                      break;
                                                  case 5:
                                                      if (!isNaN(a.getTime())) {
                                                          e.next = 8;
                                                          break;
                                                      }
                                                      return (
                                                          (e.next = 8),
                                                          [
                                                              r,
                                                              J(
                                                                  "ERR_INVALID_DATE"
                                                              ),
                                                              this,
                                                          ]
                                                      );
                                                  case 8:
                                                  case "end":
                                                      return e.stop();
                                              }
                                      },
                                      e,
                                      this
                                  );
                              }),
                              accepts: function (e) {
                                  return (
                                      e instanceof Date && !isNaN(e.getTime())
                                  );
                              },
                              compareWith: function (e) {
                                  return "DateType" === e.typeName ? 0 : -1;
                              },
                              inferTypeParameters: function (e) {
                                  return [];
                              },
                          }),
                              e.declareTypeConstructor({
                                  name: "Promise",
                                  impl: Promise,
                                  typeName: "PromiseType",
                                  errors: n.mark(function e(t, r, a, i) {
                                      return n.wrap(
                                          function (e) {
                                              for (;;)
                                                  switch ((e.prev = e.next)) {
                                                      case 0:
                                                          if (
                                                              (me(
                                                                  i,
                                                                  "Must specify type parameter for Promise."
                                                              ),
                                                              this.context.checkPredicate(
                                                                  "Promise",
                                                                  a
                                                              ))
                                                          ) {
                                                              e.next = 5;
                                                              break;
                                                          }
                                                          return (
                                                              (e.next = 5),
                                                              [
                                                                  r,
                                                                  J(
                                                                      "ERR_EXPECT_PROMISE",
                                                                      i
                                                                  ),
                                                                  this,
                                                              ]
                                                          );
                                                      case 5:
                                                      case "end":
                                                          return e.stop();
                                                  }
                                          },
                                          e,
                                          this
                                      );
                                  }),
                                  accepts: function (e) {
                                      return this.context.checkPredicate(
                                          "Promise",
                                          e
                                      );
                                  },
                                  compareWith: function (e) {
                                      return "PromiseType" === e.typeName
                                          ? 0
                                          : -1;
                                  },
                                  inferTypeParameters: function (e) {
                                      return [];
                                  },
                              }),
                              e.declareTypeConstructor({
                                  name: "Map",
                                  impl: Map,
                                  typeName: "MapType",
                                  errors: n.mark(function e(t, r, a, i, o) {
                                      var u, s, c, p, y, l, h, v, d;
                                      return n.wrap(
                                          function (e) {
                                              for (;;)
                                                  switch ((e.prev = e.next)) {
                                                      case 0:
                                                          if (
                                                              (me(
                                                                  i,
                                                                  "Must specify two type parameters for Map."
                                                              ),
                                                              me(
                                                                  o,
                                                                  "Must specify two type parameters for Map."
                                                              ),
                                                              this.context.checkPredicate(
                                                                  "Map",
                                                                  a
                                                              ))
                                                          ) {
                                                              e.next = 7;
                                                              break;
                                                          }
                                                          return (
                                                              (e.next = 6),
                                                              [
                                                                  r,
                                                                  J(
                                                                      "ERR_EXPECT_INSTANCEOF",
                                                                      "Map"
                                                                  ),
                                                                  this,
                                                              ]
                                                          );
                                                      case 6:
                                                          return e.abrupt(
                                                              "return"
                                                          );
                                                      case 7:
                                                          (u = !0),
                                                              (s = !1),
                                                              (c = void 0),
                                                              (e.prev = 10),
                                                              (p =
                                                                  a[
                                                                      Symbol
                                                                          .iterator
                                                                  ]());
                                                      case 12:
                                                          if (
                                                              (u = (y =
                                                                  p.next())
                                                                  .done)
                                                          ) {
                                                              e.next = 24;
                                                              break;
                                                          }
                                                          if (
                                                              ((l = y.value),
                                                              (h = f(l, 2)),
                                                              (v = h[0]),
                                                              (d = h[1]),
                                                              i.accepts(v))
                                                          ) {
                                                              e.next = 20;
                                                              break;
                                                          }
                                                          return (
                                                              (e.next = 20),
                                                              [
                                                                  r,
                                                                  J(
                                                                      "ERR_EXPECT_KEY_TYPE",
                                                                      i
                                                                  ),
                                                                  this,
                                                              ]
                                                          );
                                                      case 20:
                                                          return e.delegateYield(
                                                              o.errors(
                                                                  t,
                                                                  r.concat(v),
                                                                  d
                                                              ),
                                                              "t0",
                                                              21
                                                          );
                                                      case 21:
                                                          (u = !0),
                                                              (e.next = 12);
                                                          break;
                                                      case 24:
                                                          e.next = 30;
                                                          break;
                                                      case 26:
                                                          (e.prev = 26),
                                                              (e.t1 =
                                                                  e.catch(10)),
                                                              (s = !0),
                                                              (c = e.t1);
                                                      case 30:
                                                          (e.prev = 30),
                                                              (e.prev = 31),
                                                              !u &&
                                                                  p.return &&
                                                                  p.return();
                                                      case 33:
                                                          if (
                                                              ((e.prev = 33),
                                                              !s)
                                                          ) {
                                                              e.next = 36;
                                                              break;
                                                          }
                                                          throw c;
                                                      case 36:
                                                          return e.finish(33);
                                                      case 37:
                                                          return e.finish(30);
                                                      case 38:
                                                      case "end":
                                                          return e.stop();
                                                  }
                                          },
                                          e,
                                          this,
                                          [
                                              [10, 26, 30, 38],
                                              [31, , 33, 37],
                                          ]
                                      );
                                  }),
                                  accepts: function (e, t, r) {
                                      if (
                                          !this.context.checkPredicate("Map", e)
                                      )
                                          return !1;
                                      var n = !0,
                                          a = !1,
                                          i = void 0;
                                      try {
                                          for (
                                              var o, u = e[Symbol.iterator]();
                                              !(n = (o = u.next()).done);
                                              n = !0
                                          ) {
                                              var s = o.value,
                                                  c = f(s, 2),
                                                  p = c[0],
                                                  y = c[1];
                                              if (
                                                  !t.accepts(p) ||
                                                  !r.accepts(y)
                                              )
                                                  return !1;
                                          }
                                      } catch (e) {
                                          (a = !0), (i = e);
                                      } finally {
                                          try {
                                              !n && u.return && u.return();
                                          } finally {
                                              if (a) throw i;
                                          }
                                      }
                                      return !0;
                                  },
                                  compareWith: function (e) {
                                      return "MapType" === e.typeName ? 0 : -1;
                                  },
                                  inferTypeParameters: function (t) {
                                      var r = [],
                                          n = [],
                                          a = !0,
                                          i = !1,
                                          o = void 0;
                                      try {
                                          e: for (
                                              var u, s = t[Symbol.iterator]();
                                              !(a = (u = s.next()).done);
                                              a = !0
                                          ) {
                                              var c = u.value,
                                                  p = f(c, 2),
                                                  y = p[0],
                                                  l = p[1];
                                              t: {
                                                  for (
                                                      var h = 0;
                                                      h < r.length;
                                                      h++
                                                  )
                                                      if (r[h].accepts(y))
                                                          break t;
                                                  r.push(e.typeOf(y));
                                              }
                                              for (var v = 0; v < n.length; v++)
                                                  if (n[v].accepts(l))
                                                      continue e;
                                              n.push(e.typeOf(l));
                                          }
                                      } catch (e) {
                                          (i = !0), (o = e);
                                      } finally {
                                          try {
                                              !a && s.return && s.return();
                                          } finally {
                                              if (i) throw o;
                                          }
                                      }
                                      var d = [];
                                      return (
                                          0 === r.length
                                              ? d.push(e.existential())
                                              : 1 === r.length
                                              ? d.push(r[0])
                                              : d.push(e.union.apply(e, r)),
                                          0 === n.length
                                              ? d.push(e.existential())
                                              : 1 === n.length
                                              ? d.push(n[0])
                                              : d.push(e.union.apply(e, n)),
                                          d
                                      );
                                  },
                              }),
                              e.declareTypeConstructor({
                                  name: "Set",
                                  impl: Set,
                                  typeName: "SetType",
                                  errors: n.mark(function e(t, r, a, i) {
                                      var o, u, s, c, p, f;
                                      return n.wrap(
                                          function (e) {
                                              for (;;)
                                                  switch ((e.prev = e.next)) {
                                                      case 0:
                                                          if (
                                                              (me(
                                                                  i,
                                                                  "Must specify type parameter for Set."
                                                              ),
                                                              this.context.checkPredicate(
                                                                  "Set",
                                                                  a
                                                              ))
                                                          ) {
                                                              e.next = 6;
                                                              break;
                                                          }
                                                          return (
                                                              (e.next = 5),
                                                              [
                                                                  r,
                                                                  J(
                                                                      "ERR_EXPECT_INSTANCEOF",
                                                                      "Set"
                                                                  ),
                                                                  this,
                                                              ]
                                                          );
                                                      case 5:
                                                          return e.abrupt(
                                                              "return"
                                                          );
                                                      case 6:
                                                          (o = !0),
                                                              (u = !1),
                                                              (s = void 0),
                                                              (e.prev = 9),
                                                              (c =
                                                                  a[
                                                                      Symbol
                                                                          .iterator
                                                                  ]());
                                                      case 11:
                                                          if (
                                                              (o = (p =
                                                                  c.next())
                                                                  .done)
                                                          ) {
                                                              e.next = 17;
                                                              break;
                                                          }
                                                          return (
                                                              (f = p.value),
                                                              e.delegateYield(
                                                                  i.errors(
                                                                      t,
                                                                      r,
                                                                      f
                                                                  ),
                                                                  "t0",
                                                                  14
                                                              )
                                                          );
                                                      case 14:
                                                          (o = !0),
                                                              (e.next = 11);
                                                          break;
                                                      case 17:
                                                          e.next = 23;
                                                          break;
                                                      case 19:
                                                          (e.prev = 19),
                                                              (e.t1 =
                                                                  e.catch(9)),
                                                              (u = !0),
                                                              (s = e.t1);
                                                      case 23:
                                                          (e.prev = 23),
                                                              (e.prev = 24),
                                                              !o &&
                                                                  c.return &&
                                                                  c.return();
                                                      case 26:
                                                          if (
                                                              ((e.prev = 26),
                                                              !u)
                                                          ) {
                                                              e.next = 29;
                                                              break;
                                                          }
                                                          throw s;
                                                      case 29:
                                                          return e.finish(26);
                                                      case 30:
                                                          return e.finish(23);
                                                      case 31:
                                                      case "end":
                                                          return e.stop();
                                                  }
                                          },
                                          e,
                                          this,
                                          [
                                              [9, 19, 23, 31],
                                              [24, , 26, 30],
                                          ]
                                      );
                                  }),
                                  accepts: function (e, t) {
                                      if (
                                          !this.context.checkPredicate("Set", e)
                                      )
                                          return !1;
                                      var r = !0,
                                          n = !1,
                                          a = void 0;
                                      try {
                                          for (
                                              var i, o = e[Symbol.iterator]();
                                              !(r = (i = o.next()).done);
                                              r = !0
                                          ) {
                                              var u = i.value;
                                              if (!t.accepts(u)) return !1;
                                          }
                                      } catch (e) {
                                          (n = !0), (a = e);
                                      } finally {
                                          try {
                                              !r && o.return && o.return();
                                          } finally {
                                              if (n) throw a;
                                          }
                                      }
                                      return !0;
                                  },
                                  compareWith: function (e) {
                                      return "SetType" === e.typeName ? 0 : -1;
                                  },
                                  inferTypeParameters: function (t) {
                                      var r = [],
                                          n = !0,
                                          a = !1,
                                          i = void 0;
                                      try {
                                          e: for (
                                              var o, u = t[Symbol.iterator]();
                                              !(n = (o = u.next()).done);
                                              n = !0
                                          ) {
                                              for (
                                                  var s = o.value, c = 0;
                                                  c < r.length;
                                                  c++
                                              )
                                                  if (r[c].accepts(s))
                                                      continue e;
                                              r.push(e.typeOf(s));
                                          }
                                      } catch (e) {
                                          (a = !0), (i = e);
                                      } finally {
                                          try {
                                              !n && u.return && u.return();
                                          } finally {
                                              if (a) throw i;
                                          }
                                      }
                                      return 0 === r.length
                                          ? [e.existential()]
                                          : 1 === r.length
                                          ? [r[0]]
                                          : [e.union.apply(e, r)];
                                  },
                              });
                      })(Ut),
                      (Xt = Ut).setPredicate("Array", function (e) {
                          return Array.isArray(e);
                      }),
                      Xt.setPredicate("Map", function (e) {
                          return e instanceof Map;
                      }),
                      Xt.setPredicate("Set", function (e) {
                          return e instanceof Set;
                      }),
                      Xt.setPredicate("Promise", function (e) {
                          return (
                              e instanceof Promise ||
                              (null !== e &&
                                  ("object" ===
                                      (void 0 === e ? "undefined" : a(e)) ||
                                      "function" == typeof e) &&
                                  "function" == typeof e.then)
                          );
                      }),
                      void 0 !== t &&
                          (t.__FLOW_RUNTIME_GLOBAL_CONTEXT_DO_NOT_USE_THIS_VARIABLE__ =
                              Ut));
                var Ft = Ut;
                function Bt(e) {
                    return { value: e };
                }
                return (
                    void 0 !== t &&
                        t.__FLOW_RUNTIME_GLOBAL_CONTEXT_DO_NOT_USE_THIS_VARIABLE__ !==
                            Ft &&
                        Object.defineProperties(Ft, {
                            TypeContext: Bt($t),
                            Type: Bt(W),
                            TypeBox: Bt(ut),
                            TypeParameter: Bt(Q),
                            TypeReference: Bt(ct),
                            TypeTDZ: Bt(lt),
                            ParameterizedTypeAlias: Bt(He),
                            TypeAlias: Bt(Z),
                            TypeConstructor: Bt(de),
                            GenericType: Bt(ke),
                            NullLiteralType: Bt(ge),
                            NumberType: Bt(Ke),
                            NumericLiteralType: Bt(ze),
                            BooleanType: Bt(U),
                            BooleanLiteralType: Bt($),
                            SymbolType: Bt(at),
                            SymbolLiteralType: Bt(nt),
                            StringType: Bt(rt),
                            StringLiteralType: Bt(tt),
                            ArrayType: Bt(Y),
                            ObjectType: Bt(Xe),
                            ObjectTypeCallProperty: Bt(Te),
                            ObjectTypeIndexer: Bt(_e),
                            ObjectTypeProperty: Bt(we),
                            FunctionType: Bt(le),
                            FunctionTypeParam: Bt(re),
                            FunctionTypeRestParam: Bt(te),
                            FunctionTypeReturn: Bt(ne),
                            ParameterizedFunctionType: Bt(qe),
                            PartialType: Bt(je),
                            RefinementType: Bt(et),
                            TypeParameterApplication: Bt(V),
                            GeneratorType: Bt(he),
                            ExistentialType: Bt(B),
                            FlowIntoType: Bt(ee),
                            AnyType: Bt(M),
                            MixedType: Bt(Ge),
                            EmptyType: Bt(F),
                            NullableType: Bt(xe),
                            ThisType: Bt(it),
                            TupleType: Bt(D),
                            UnionType: Bt(vt),
                            IntersectionType: Bt(Fe),
                            VoidType: Bt(be),
                            Declaration: Bt(Ee),
                            VarDeclaration: Bt(Oe),
                            TypeDeclaration: Bt(Ne),
                            ModuleDeclaration: Bt(Se),
                            ModuleExportsDeclaration: Bt(Pe),
                            ClassDeclaration: Bt(Ae),
                            ParameterizedClassDeclaration: Bt(Re),
                            ExtendsDeclaration: Bt(Ie),
                        }),
                    Ft
                );
            }),
                (e.exports = n());
        }).call(this, r("yLpj"));
    },
    yLpj: function (e, t) {
        var r;
        r = (function () {
            return this;
        })();
        try {
            r = r || new Function("return this")();
        } catch (e) {
            "object" == typeof window && (r = window);
        }
        e.exports = r;
    },
});
