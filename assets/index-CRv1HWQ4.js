(function () {
    const S = document.createElement("link").relList;
    if (S && S.supports && S.supports("modulepreload")) return;
    for (const z of document.querySelectorAll('link[rel="modulepreload"]')) s(z);
    new MutationObserver(z => {
        for (const N of z) if (N.type === "childList") for (const U of N.addedNodes) U.tagName === "LINK" && U.rel === "modulepreload" && s(U)
    }).observe(document, {childList: !0, subtree: !0});

    function v(z) {
        const N = {};
        return z.integrity && (N.integrity = z.integrity), z.referrerPolicy && (N.referrerPolicy = z.referrerPolicy), z.crossOrigin === "use-credentials" ? N.credentials = "include" : z.crossOrigin === "anonymous" ? N.credentials = "omit" : N.credentials = "same-origin", N
    }

    function s(z) {
        if (z.ep) return;
        z.ep = !0;
        const N = v(z);
        fetch(z.href, N)
    }
})();
var of = {exports: {}}, Dn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yd;

function bh() {
    if (yd) return Dn;
    yd = 1;
    var f = Symbol.for("react.transitional.element"), S = Symbol.for("react.fragment");

    function v(s, z, N) {
        var U = null;
        if (N !== void 0 && (U = "" + N), z.key !== void 0 && (U = "" + z.key), "key" in z) {
            N = {};
            for (var X in z) X !== "key" && (N[X] = z[X])
        } else N = z;
        return z = N.ref, {$$typeof: f, type: s, key: U, ref: z !== void 0 ? z : null, props: N}
    }

    return Dn.Fragment = S, Dn.jsx = v, Dn.jsxs = v, Dn
}

var vd;

function ph() {
    return vd || (vd = 1, of.exports = bh()), of.exports
}

var y = ph(), rf = {exports: {}}, $ = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bd;

function xh() {
    if (bd) return $;
    bd = 1;
    var f = Symbol.for("react.transitional.element"), S = Symbol.for("react.portal"), v = Symbol.for("react.fragment"),
        s = Symbol.for("react.strict_mode"), z = Symbol.for("react.profiler"), N = Symbol.for("react.consumer"),
        U = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"),
        x = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), W = Symbol.iterator;

    function V(r) {
        return r === null || typeof r != "object" ? null : (r = W && r[W] || r["@@iterator"], typeof r == "function" ? r : null)
    }

    var bl = {
        isMounted: function () {
            return !1
        }, enqueueForceUpdate: function () {
        }, enqueueReplaceState: function () {
        }, enqueueSetState: function () {
        }
    }, Y = Object.assign, ll = {};

    function dl(r, M, C) {
        this.props = r, this.context = M, this.refs = ll, this.updater = C || bl
    }

    dl.prototype.isReactComponent = {}, dl.prototype.setState = function (r, M) {
        if (typeof r != "object" && typeof r != "function" && r != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, r, M, "setState")
    }, dl.prototype.forceUpdate = function (r) {
        this.updater.enqueueForceUpdate(this, r, "forceUpdate")
    };

    function Zl() {
    }

    Zl.prototype = dl.prototype;

    function Fl(r, M, C) {
        this.props = r, this.context = M, this.refs = ll, this.updater = C || bl
    }

    var El = Fl.prototype = new Zl;
    El.constructor = Fl, Y(El, dl.prototype), El.isPureReactComponent = !0;
    var Bl = Array.isArray, F = {H: null, A: null, T: null, S: null, V: null}, Ml = Object.prototype.hasOwnProperty;

    function Hl(r, M, C, D, w, el) {
        return C = el.ref, {$$typeof: f, type: r, key: M, ref: C !== void 0 ? C : null, props: el}
    }

    function Z(r, M) {
        return Hl(r.type, M, void 0, void 0, void 0, r.props)
    }

    function Dl(r) {
        return typeof r == "object" && r !== null && r.$$typeof === f
    }

    function Ct(r) {
        var M = {"=": "=0", ":": "=2"};
        return "$" + r.replace(/[=:]/g, function (C) {
            return M[C]
        })
    }

    var mt = /\/+/g;

    function Nl(r, M) {
        return typeof r == "object" && r !== null && r.key != null ? Ct("" + r.key) : M.toString(36)
    }

    function Nt() {
    }

    function Et(r) {
        switch (r.status) {
            case"fulfilled":
                return r.value;
            case"rejected":
                throw r.reason;
            default:
                switch (typeof r.status == "string" ? r.then(Nt, Nt) : (r.status = "pending", r.then(function (M) {
                    r.status === "pending" && (r.status = "fulfilled", r.value = M)
                }, function (M) {
                    r.status === "pending" && (r.status = "rejected", r.reason = M)
                })), r.status) {
                    case"fulfilled":
                        return r.value;
                    case"rejected":
                        throw r.reason
                }
        }
        throw r
    }

    function Al(r, M, C, D, w) {
        var el = typeof r;
        (el === "undefined" || el === "boolean") && (r = null);
        var J = !1;
        if (r === null) J = !0; else switch (el) {
            case"bigint":
            case"string":
            case"number":
                J = !0;
                break;
            case"object":
                switch (r.$$typeof) {
                    case f:
                    case S:
                        J = !0;
                        break;
                    case R:
                        return J = r._init, Al(J(r._payload), M, C, D, w)
                }
        }
        if (J) return w = w(r), J = D === "" ? "." + Nl(r, 0) : D, Bl(w) ? (C = "", J != null && (C = J.replace(mt, "$&/") + "/"), Al(w, M, C, "", function (at) {
            return at
        })) : w != null && (Dl(w) && (w = Z(w, C + (w.key == null || r && r.key === w.key ? "" : ("" + w.key).replace(mt, "$&/") + "/") + J)), M.push(w)), 1;
        J = 0;
        var il = D === "" ? "." : D + ":";
        if (Bl(r)) for (var yl = 0; yl < r.length; yl++) D = r[yl], el = il + Nl(D, yl), J += Al(D, M, C, el, w); else if (yl = V(r), typeof yl == "function") for (r = yl.call(r), yl = 0; !(D = r.next()).done;) D = D.value, el = il + Nl(D, yl++), J += Al(D, M, C, el, w); else if (el === "object") {
            if (typeof r.then == "function") return Al(Et(r), M, C, D, w);
            throw M = String(r), Error("Objects are not valid as a React child (found: " + (M === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : M) + "). If you meant to render a collection of children, use an array instead.")
        }
        return J
    }

    function A(r, M, C) {
        if (r == null) return r;
        var D = [], w = 0;
        return Al(r, D, "", "", function (el) {
            return M.call(C, el, w++)
        }), D
    }

    function H(r) {
        if (r._status === -1) {
            var M = r._result;
            M = M(), M.then(function (C) {
                (r._status === 0 || r._status === -1) && (r._status = 1, r._result = C)
            }, function (C) {
                (r._status === 0 || r._status === -1) && (r._status = 2, r._result = C)
            }), r._status === -1 && (r._status = 0, r._result = M)
        }
        if (r._status === 1) return r._result.default;
        throw r._result
    }

    var j = typeof reportError == "function" ? reportError : function (r) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var M = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof r == "object" && r !== null && typeof r.message == "string" ? String(r.message) : String(r),
                error: r
            });
            if (!window.dispatchEvent(M)) return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", r);
            return
        }
        console.error(r)
    };

    function sl() {
    }

    return $.Children = {
        map: A, forEach: function (r, M, C) {
            A(r, function () {
                M.apply(this, arguments)
            }, C)
        }, count: function (r) {
            var M = 0;
            return A(r, function () {
                M++
            }), M
        }, toArray: function (r) {
            return A(r, function (M) {
                return M
            }) || []
        }, only: function (r) {
            if (!Dl(r)) throw Error("React.Children.only expected to receive a single React element child.");
            return r
        }
    }, $.Component = dl, $.Fragment = v, $.Profiler = z, $.PureComponent = Fl, $.StrictMode = s, $.Suspense = O, $.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = F, $.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (r) {
            return F.H.useMemoCache(r)
        }
    }, $.cache = function (r) {
        return function () {
            return r.apply(null, arguments)
        }
    }, $.cloneElement = function (r, M, C) {
        if (r == null) throw Error("The argument must be a React element, but you passed " + r + ".");
        var D = Y({}, r.props), w = r.key, el = void 0;
        if (M != null) for (J in M.ref !== void 0 && (el = void 0), M.key !== void 0 && (w = "" + M.key), M) !Ml.call(M, J) || J === "key" || J === "__self" || J === "__source" || J === "ref" && M.ref === void 0 || (D[J] = M[J]);
        var J = arguments.length - 2;
        if (J === 1) D.children = C; else if (1 < J) {
            for (var il = Array(J), yl = 0; yl < J; yl++) il[yl] = arguments[yl + 2];
            D.children = il
        }
        return Hl(r.type, w, void 0, void 0, el, D)
    }, $.createContext = function (r) {
        return r = {
            $$typeof: U,
            _currentValue: r,
            _currentValue2: r,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }, r.Provider = r, r.Consumer = {$$typeof: N, _context: r}, r
    }, $.createElement = function (r, M, C) {
        var D, w = {}, el = null;
        if (M != null) for (D in M.key !== void 0 && (el = "" + M.key), M) Ml.call(M, D) && D !== "key" && D !== "__self" && D !== "__source" && (w[D] = M[D]);
        var J = arguments.length - 2;
        if (J === 1) w.children = C; else if (1 < J) {
            for (var il = Array(J), yl = 0; yl < J; yl++) il[yl] = arguments[yl + 2];
            w.children = il
        }
        if (r && r.defaultProps) for (D in J = r.defaultProps, J) w[D] === void 0 && (w[D] = J[D]);
        return Hl(r, el, void 0, void 0, null, w)
    }, $.createRef = function () {
        return {current: null}
    }, $.forwardRef = function (r) {
        return {$$typeof: X, render: r}
    }, $.isValidElement = Dl, $.lazy = function (r) {
        return {$$typeof: R, _payload: {_status: -1, _result: r}, _init: H}
    }, $.memo = function (r, M) {
        return {$$typeof: x, type: r, compare: M === void 0 ? null : M}
    }, $.startTransition = function (r) {
        var M = F.T, C = {};
        F.T = C;
        try {
            var D = r(), w = F.S;
            w !== null && w(C, D), typeof D == "object" && D !== null && typeof D.then == "function" && D.then(sl, j)
        } catch (el) {
            j(el)
        } finally {
            F.T = M
        }
    }, $.unstable_useCacheRefresh = function () {
        return F.H.useCacheRefresh()
    }, $.use = function (r) {
        return F.H.use(r)
    }, $.useActionState = function (r, M, C) {
        return F.H.useActionState(r, M, C)
    }, $.useCallback = function (r, M) {
        return F.H.useCallback(r, M)
    }, $.useContext = function (r) {
        return F.H.useContext(r)
    }, $.useDebugValue = function () {
    }, $.useDeferredValue = function (r, M) {
        return F.H.useDeferredValue(r, M)
    }, $.useEffect = function (r, M, C) {
        var D = F.H;
        if (typeof C == "function") throw Error("useEffect CRUD overload is not enabled in this build of React.");
        return D.useEffect(r, M)
    }, $.useId = function () {
        return F.H.useId()
    }, $.useImperativeHandle = function (r, M, C) {
        return F.H.useImperativeHandle(r, M, C)
    }, $.useInsertionEffect = function (r, M) {
        return F.H.useInsertionEffect(r, M)
    }, $.useLayoutEffect = function (r, M) {
        return F.H.useLayoutEffect(r, M)
    }, $.useMemo = function (r, M) {
        return F.H.useMemo(r, M)
    }, $.useOptimistic = function (r, M) {
        return F.H.useOptimistic(r, M)
    }, $.useReducer = function (r, M, C) {
        return F.H.useReducer(r, M, C)
    }, $.useRef = function (r) {
        return F.H.useRef(r)
    }, $.useState = function (r) {
        return F.H.useState(r)
    }, $.useSyncExternalStore = function (r, M, C) {
        return F.H.useSyncExternalStore(r, M, C)
    }, $.useTransition = function () {
        return F.H.useTransition()
    }, $.version = "19.1.0", $
}

var pd;

function Sf() {
    return pd || (pd = 1, rf.exports = xh()), rf.exports
}

var xl = Sf(), df = {exports: {}}, Rn = {}, mf = {exports: {}}, hf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xd;

function Sh() {
    return xd || (xd = 1, function (f) {
        function S(A, H) {
            var j = A.length;
            A.push(H);
            l:for (; 0 < j;) {
                var sl = j - 1 >>> 1, r = A[sl];
                if (0 < z(r, H)) A[sl] = H, A[j] = r, j = sl; else break l
            }
        }

        function v(A) {
            return A.length === 0 ? null : A[0]
        }

        function s(A) {
            if (A.length === 0) return null;
            var H = A[0], j = A.pop();
            if (j !== H) {
                A[0] = j;
                l:for (var sl = 0, r = A.length, M = r >>> 1; sl < M;) {
                    var C = 2 * (sl + 1) - 1, D = A[C], w = C + 1, el = A[w];
                    if (0 > z(D, j)) w < r && 0 > z(el, D) ? (A[sl] = el, A[w] = j, sl = w) : (A[sl] = D, A[C] = j, sl = C); else if (w < r && 0 > z(el, j)) A[sl] = el, A[w] = j, sl = w; else break l
                }
            }
            return H
        }

        function z(A, H) {
            var j = A.sortIndex - H.sortIndex;
            return j !== 0 ? j : A.id - H.id
        }

        if (f.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
            var N = performance;
            f.unstable_now = function () {
                return N.now()
            }
        } else {
            var U = Date, X = U.now();
            f.unstable_now = function () {
                return U.now() - X
            }
        }
        var O = [], x = [], R = 1, W = null, V = 3, bl = !1, Y = !1, ll = !1, dl = !1,
            Zl = typeof setTimeout == "function" ? setTimeout : null,
            Fl = typeof clearTimeout == "function" ? clearTimeout : null,
            El = typeof setImmediate < "u" ? setImmediate : null;

        function Bl(A) {
            for (var H = v(x); H !== null;) {
                if (H.callback === null) s(x); else if (H.startTime <= A) s(x), H.sortIndex = H.expirationTime, S(O, H); else break;
                H = v(x)
            }
        }

        function F(A) {
            if (ll = !1, Bl(A), !Y) if (v(O) !== null) Y = !0, Ml || (Ml = !0, Nl()); else {
                var H = v(x);
                H !== null && Al(F, H.startTime - A)
            }
        }

        var Ml = !1, Hl = -1, Z = 5, Dl = -1;

        function Ct() {
            return dl ? !0 : !(f.unstable_now() - Dl < Z)
        }

        function mt() {
            if (dl = !1, Ml) {
                var A = f.unstable_now();
                Dl = A;
                var H = !0;
                try {
                    l:{
                        Y = !1, ll && (ll = !1, Fl(Hl), Hl = -1), bl = !0;
                        var j = V;
                        try {
                            t:{
                                for (Bl(A), W = v(O); W !== null && !(W.expirationTime > A && Ct());) {
                                    var sl = W.callback;
                                    if (typeof sl == "function") {
                                        W.callback = null, V = W.priorityLevel;
                                        var r = sl(W.expirationTime <= A);
                                        if (A = f.unstable_now(), typeof r == "function") {
                                            W.callback = r, Bl(A), H = !0;
                                            break t
                                        }
                                        W === v(O) && s(O), Bl(A)
                                    } else s(O);
                                    W = v(O)
                                }
                                if (W !== null) H = !0; else {
                                    var M = v(x);
                                    M !== null && Al(F, M.startTime - A), H = !1
                                }
                            }
                            break l
                        } finally {
                            W = null, V = j, bl = !1
                        }
                        H = void 0
                    }
                } finally {
                    H ? Nl() : Ml = !1
                }
            }
        }

        var Nl;
        if (typeof El == "function") Nl = function () {
            El(mt)
        }; else if (typeof MessageChannel < "u") {
            var Nt = new MessageChannel, Et = Nt.port2;
            Nt.port1.onmessage = mt, Nl = function () {
                Et.postMessage(null)
            }
        } else Nl = function () {
            Zl(mt, 0)
        };

        function Al(A, H) {
            Hl = Zl(function () {
                A(f.unstable_now())
            }, H)
        }

        f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function (A) {
            A.callback = null
        }, f.unstable_forceFrameRate = function (A) {
            0 > A || 125 < A ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Z = 0 < A ? Math.floor(1e3 / A) : 5
        }, f.unstable_getCurrentPriorityLevel = function () {
            return V
        }, f.unstable_next = function (A) {
            switch (V) {
                case 1:
                case 2:
                case 3:
                    var H = 3;
                    break;
                default:
                    H = V
            }
            var j = V;
            V = H;
            try {
                return A()
            } finally {
                V = j
            }
        }, f.unstable_requestPaint = function () {
            dl = !0
        }, f.unstable_runWithPriority = function (A, H) {
            switch (A) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    A = 3
            }
            var j = V;
            V = A;
            try {
                return H()
            } finally {
                V = j
            }
        }, f.unstable_scheduleCallback = function (A, H, j) {
            var sl = f.unstable_now();
            switch (typeof j == "object" && j !== null ? (j = j.delay, j = typeof j == "number" && 0 < j ? sl + j : sl) : j = sl, A) {
                case 1:
                    var r = -1;
                    break;
                case 2:
                    r = 250;
                    break;
                case 5:
                    r = 1073741823;
                    break;
                case 4:
                    r = 1e4;
                    break;
                default:
                    r = 5e3
            }
            return r = j + r, A = {
                id: R++,
                callback: H,
                priorityLevel: A,
                startTime: j,
                expirationTime: r,
                sortIndex: -1
            }, j > sl ? (A.sortIndex = j, S(x, A), v(O) === null && A === v(x) && (ll ? (Fl(Hl), Hl = -1) : ll = !0, Al(F, j - sl))) : (A.sortIndex = r, S(O, A), Y || bl || (Y = !0, Ml || (Ml = !0, Nl()))), A
        }, f.unstable_shouldYield = Ct, f.unstable_wrapCallback = function (A) {
            var H = V;
            return function () {
                var j = V;
                V = H;
                try {
                    return A.apply(this, arguments)
                } finally {
                    V = j
                }
            }
        }
    }(hf)), hf
}

var Sd;

function Ah() {
    return Sd || (Sd = 1, mf.exports = Sh()), mf.exports
}

var gf = {exports: {}}, Wl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ad;

function zh() {
    if (Ad) return Wl;
    Ad = 1;
    var f = Sf();

    function S(O) {
        var x = "https://react.dev/errors/" + O;
        if (1 < arguments.length) {
            x += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var R = 2; R < arguments.length; R++) x += "&args[]=" + encodeURIComponent(arguments[R])
        }
        return "Minified React error #" + O + "; visit " + x + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function v() {
    }

    var s = {
        d: {
            f: v, r: function () {
                throw Error(S(522))
            }, D: v, C: v, L: v, m: v, X: v, S: v, M: v
        }, p: 0, findDOMNode: null
    }, z = Symbol.for("react.portal");

    function N(O, x, R) {
        var W = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {$$typeof: z, key: W == null ? null : "" + W, children: O, containerInfo: x, implementation: R}
    }

    var U = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

    function X(O, x) {
        if (O === "font") return "";
        if (typeof x == "string") return x === "use-credentials" ? x : ""
    }

    return Wl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, Wl.createPortal = function (O, x) {
        var R = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!x || x.nodeType !== 1 && x.nodeType !== 9 && x.nodeType !== 11) throw Error(S(299));
        return N(O, x, null, R)
    }, Wl.flushSync = function (O) {
        var x = U.T, R = s.p;
        try {
            if (U.T = null, s.p = 2, O) return O()
        } finally {
            U.T = x, s.p = R, s.d.f()
        }
    }, Wl.preconnect = function (O, x) {
        typeof O == "string" && (x ? (x = x.crossOrigin, x = typeof x == "string" ? x === "use-credentials" ? x : "" : void 0) : x = null, s.d.C(O, x))
    }, Wl.prefetchDNS = function (O) {
        typeof O == "string" && s.d.D(O)
    }, Wl.preinit = function (O, x) {
        if (typeof O == "string" && x && typeof x.as == "string") {
            var R = x.as, W = X(R, x.crossOrigin), V = typeof x.integrity == "string" ? x.integrity : void 0,
                bl = typeof x.fetchPriority == "string" ? x.fetchPriority : void 0;
            R === "style" ? s.d.S(O, typeof x.precedence == "string" ? x.precedence : void 0, {
                crossOrigin: W,
                integrity: V,
                fetchPriority: bl
            }) : R === "script" && s.d.X(O, {
                crossOrigin: W,
                integrity: V,
                fetchPriority: bl,
                nonce: typeof x.nonce == "string" ? x.nonce : void 0
            })
        }
    }, Wl.preinitModule = function (O, x) {
        if (typeof O == "string") if (typeof x == "object" && x !== null) {
            if (x.as == null || x.as === "script") {
                var R = X(x.as, x.crossOrigin);
                s.d.M(O, {
                    crossOrigin: R,
                    integrity: typeof x.integrity == "string" ? x.integrity : void 0,
                    nonce: typeof x.nonce == "string" ? x.nonce : void 0
                })
            }
        } else x == null && s.d.M(O)
    }, Wl.preload = function (O, x) {
        if (typeof O == "string" && typeof x == "object" && x !== null && typeof x.as == "string") {
            var R = x.as, W = X(R, x.crossOrigin);
            s.d.L(O, R, {
                crossOrigin: W,
                integrity: typeof x.integrity == "string" ? x.integrity : void 0,
                nonce: typeof x.nonce == "string" ? x.nonce : void 0,
                type: typeof x.type == "string" ? x.type : void 0,
                fetchPriority: typeof x.fetchPriority == "string" ? x.fetchPriority : void 0,
                referrerPolicy: typeof x.referrerPolicy == "string" ? x.referrerPolicy : void 0,
                imageSrcSet: typeof x.imageSrcSet == "string" ? x.imageSrcSet : void 0,
                imageSizes: typeof x.imageSizes == "string" ? x.imageSizes : void 0,
                media: typeof x.media == "string" ? x.media : void 0
            })
        }
    }, Wl.preloadModule = function (O, x) {
        if (typeof O == "string") if (x) {
            var R = X(x.as, x.crossOrigin);
            s.d.m(O, {
                as: typeof x.as == "string" && x.as !== "script" ? x.as : void 0,
                crossOrigin: R,
                integrity: typeof x.integrity == "string" ? x.integrity : void 0
            })
        } else s.d.m(O)
    }, Wl.requestFormReset = function (O) {
        s.d.r(O)
    }, Wl.unstable_batchedUpdates = function (O, x) {
        return O(x)
    }, Wl.useFormState = function (O, x, R) {
        return U.H.useFormState(O, x, R)
    }, Wl.useFormStatus = function () {
        return U.H.useHostTransitionStatus()
    }, Wl.version = "19.1.0", Wl
}

var zd;

function Eh() {
    if (zd) return gf.exports;
    zd = 1;

    function f() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f)
        } catch (S) {
            console.error(S)
        }
    }

    return f(), gf.exports = zh(), gf.exports
}

/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ed;

function Th() {
    if (Ed) return Rn;
    Ed = 1;
    var f = Ah(), S = Sf(), v = Eh();

    function s(l) {
        var t = "https://react.dev/errors/" + l;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var e = 2; e < arguments.length; e++) t += "&args[]=" + encodeURIComponent(arguments[e])
        }
        return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }

    function z(l) {
        return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11)
    }

    function N(l) {
        var t = l, e = l;
        if (l.alternate) for (; t.return;) t = t.return; else {
            l = t;
            do t = l, (t.flags & 4098) !== 0 && (e = t.return), l = t.return; while (l)
        }
        return t.tag === 3 ? e : null
    }

    function U(l) {
        if (l.tag === 13) {
            var t = l.memoizedState;
            if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated
        }
        return null
    }

    function X(l) {
        if (N(l) !== l) throw Error(s(188))
    }

    function O(l) {
        var t = l.alternate;
        if (!t) {
            if (t = N(l), t === null) throw Error(s(188));
            return t !== l ? null : l
        }
        for (var e = l, a = t; ;) {
            var n = e.return;
            if (n === null) break;
            var u = n.alternate;
            if (u === null) {
                if (a = n.return, a !== null) {
                    e = a;
                    continue
                }
                break
            }
            if (n.child === u.child) {
                for (u = n.child; u;) {
                    if (u === e) return X(n), l;
                    if (u === a) return X(n), t;
                    u = u.sibling
                }
                throw Error(s(188))
            }
            if (e.return !== a.return) e = n, a = u; else {
                for (var i = !1, c = n.child; c;) {
                    if (c === e) {
                        i = !0, e = n, a = u;
                        break
                    }
                    if (c === a) {
                        i = !0, a = n, e = u;
                        break
                    }
                    c = c.sibling
                }
                if (!i) {
                    for (c = u.child; c;) {
                        if (c === e) {
                            i = !0, e = u, a = n;
                            break
                        }
                        if (c === a) {
                            i = !0, a = u, e = n;
                            break
                        }
                        c = c.sibling
                    }
                    if (!i) throw Error(s(189))
                }
            }
            if (e.alternate !== a) throw Error(s(190))
        }
        if (e.tag !== 3) throw Error(s(188));
        return e.stateNode.current === e ? l : t
    }

    function x(l) {
        var t = l.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return l;
        for (l = l.child; l !== null;) {
            if (t = x(l), t !== null) return t;
            l = l.sibling
        }
        return null
    }

    var R = Object.assign, W = Symbol.for("react.element"), V = Symbol.for("react.transitional.element"),
        bl = Symbol.for("react.portal"), Y = Symbol.for("react.fragment"), ll = Symbol.for("react.strict_mode"),
        dl = Symbol.for("react.profiler"), Zl = Symbol.for("react.provider"), Fl = Symbol.for("react.consumer"),
        El = Symbol.for("react.context"), Bl = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"),
        Ml = Symbol.for("react.suspense_list"), Hl = Symbol.for("react.memo"), Z = Symbol.for("react.lazy"),
        Dl = Symbol.for("react.activity"), Ct = Symbol.for("react.memo_cache_sentinel"), mt = Symbol.iterator;

    function Nl(l) {
        return l === null || typeof l != "object" ? null : (l = mt && l[mt] || l["@@iterator"], typeof l == "function" ? l : null)
    }

    var Nt = Symbol.for("react.client.reference");

    function Et(l) {
        if (l == null) return null;
        if (typeof l == "function") return l.$$typeof === Nt ? null : l.displayName || l.name || null;
        if (typeof l == "string") return l;
        switch (l) {
            case Y:
                return "Fragment";
            case dl:
                return "Profiler";
            case ll:
                return "StrictMode";
            case F:
                return "Suspense";
            case Ml:
                return "SuspenseList";
            case Dl:
                return "Activity"
        }
        if (typeof l == "object") switch (l.$$typeof) {
            case bl:
                return "Portal";
            case El:
                return (l.displayName || "Context") + ".Provider";
            case Fl:
                return (l._context.displayName || "Context") + ".Consumer";
            case Bl:
                var t = l.render;
                return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
            case Hl:
                return t = l.displayName || null, t !== null ? t : Et(l.type) || "Memo";
            case Z:
                t = l._payload, l = l._init;
                try {
                    return Et(l(t))
                } catch {
                }
        }
        return null
    }

    var Al = Array.isArray, A = S.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        H = v.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        j = {pending: !1, data: null, method: null, action: null}, sl = [], r = -1;

    function M(l) {
        return {current: l}
    }

    function C(l) {
        0 > r || (l.current = sl[r], sl[r] = null, r--)
    }

    function D(l, t) {
        r++, sl[r] = l.current, l.current = t
    }

    var w = M(null), el = M(null), J = M(null), il = M(null);

    function yl(l, t) {
        switch (D(J, t), D(el, l), D(w, null), t.nodeType) {
            case 9:
            case 11:
                l = (l = t.documentElement) && (l = l.namespaceURI) ? Vr(l) : 0;
                break;
            default:
                if (l = t.tagName, t = t.namespaceURI) t = Vr(t), l = Lr(t, l); else switch (l) {
                    case"svg":
                        l = 1;
                        break;
                    case"math":
                        l = 2;
                        break;
                    default:
                        l = 0
                }
        }
        C(w), D(w, l)
    }

    function at() {
        C(w), C(el), C(J)
    }

    function It(l) {
        l.memoizedState !== null && D(il, l);
        var t = w.current, e = Lr(t, l.type);
        t !== e && (D(el, l), D(w, e))
    }

    function Pt(l) {
        el.current === l && (C(w), C(el)), il.current === l && (C(il), _n._currentValue = j)
    }

    var le = Object.prototype.hasOwnProperty, $u = f.unstable_scheduleCallback, Fu = f.unstable_cancelCallback,
        $d = f.unstable_shouldYield, Fd = f.unstable_requestPaint, Ot = f.unstable_now,
        Id = f.unstable_getCurrentPriorityLevel, zf = f.unstable_ImmediatePriority,
        Ef = f.unstable_UserBlockingPriority, Hn = f.unstable_NormalPriority, Pd = f.unstable_LowPriority,
        Tf = f.unstable_IdlePriority, lm = f.log, tm = f.unstable_setDisableYieldValue, Ua = null, nt = null;

    function te(l) {
        if (typeof lm == "function" && tm(l), nt && typeof nt.setStrictMode == "function") try {
            nt.setStrictMode(Ua, l)
        } catch {
        }
    }

    var ut = Math.clz32 ? Math.clz32 : nm, em = Math.log, am = Math.LN2;

    function nm(l) {
        return l >>>= 0, l === 0 ? 32 : 31 - (em(l) / am | 0) | 0
    }

    var Cn = 256, wn = 4194304;

    function _e(l) {
        var t = l & 42;
        if (t !== 0) return t;
        switch (l & -l) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
                return 64;
            case 128:
                return 128;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return l & 4194048;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return l & 62914560;
            case 67108864:
                return 67108864;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 0;
            default:
                return l
        }
    }

    function qn(l, t, e) {
        var a = l.pendingLanes;
        if (a === 0) return 0;
        var n = 0, u = l.suspendedLanes, i = l.pingedLanes;
        l = l.warmLanes;
        var c = a & 134217727;
        return c !== 0 ? (a = c & ~u, a !== 0 ? n = _e(a) : (i &= c, i !== 0 ? n = _e(i) : e || (e = c & ~l, e !== 0 && (n = _e(e))))) : (c = a & ~u, c !== 0 ? n = _e(c) : i !== 0 ? n = _e(i) : e || (e = a & ~l, e !== 0 && (n = _e(e)))), n === 0 ? 0 : t !== 0 && t !== n && (t & u) === 0 && (u = n & -n, e = t & -t, u >= e || u === 32 && (e & 4194048) !== 0) ? t : n
    }

    function Ha(l, t) {
        return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0
    }

    function um(l, t) {
        switch (l) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
                return t + 250;
            case 16:
            case 32:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return -1;
            case 67108864:
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
        }
    }

    function _f() {
        var l = Cn;
        return Cn <<= 1, (Cn & 4194048) === 0 && (Cn = 256), l
    }

    function Mf() {
        var l = wn;
        return wn <<= 1, (wn & 62914560) === 0 && (wn = 4194304), l
    }

    function Iu(l) {
        for (var t = [], e = 0; 31 > e; e++) t.push(l);
        return t
    }

    function Ca(l, t) {
        l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0)
    }

    function im(l, t, e, a, n, u) {
        var i = l.pendingLanes;
        l.pendingLanes = e, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= e, l.entangledLanes &= e, l.errorRecoveryDisabledLanes &= e, l.shellSuspendCounter = 0;
        var c = l.entanglements, o = l.expirationTimes, g = l.hiddenUpdates;
        for (e = i & ~e; 0 < e;) {
            var E = 31 - ut(e), _ = 1 << E;
            c[E] = 0, o[E] = -1;
            var b = g[E];
            if (b !== null) for (g[E] = null, E = 0; E < b.length; E++) {
                var p = b[E];
                p !== null && (p.lane &= -536870913)
            }
            e &= ~_
        }
        a !== 0 && Nf(l, a, 0), u !== 0 && n === 0 && l.tag !== 0 && (l.suspendedLanes |= u & ~(i & ~t))
    }

    function Nf(l, t, e) {
        l.pendingLanes |= t, l.suspendedLanes &= ~t;
        var a = 31 - ut(t);
        l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | e & 4194090
    }

    function Of(l, t) {
        var e = l.entangledLanes |= t;
        for (l = l.entanglements; e;) {
            var a = 31 - ut(e), n = 1 << a;
            n & t | l[a] & t && (l[a] |= t), e &= ~n
        }
    }

    function Pu(l) {
        switch (l) {
            case 2:
                l = 1;
                break;
            case 8:
                l = 4;
                break;
            case 32:
                l = 16;
                break;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                l = 128;
                break;
            case 268435456:
                l = 134217728;
                break;
            default:
                l = 0
        }
        return l
    }

    function li(l) {
        return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }

    function jf() {
        var l = H.p;
        return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : od(l.type))
    }

    function cm(l, t) {
        var e = H.p;
        try {
            return H.p = l, t()
        } finally {
            H.p = e
        }
    }

    var ee = Math.random().toString(36).slice(2), Kl = "__reactFiber$" + ee, Il = "__reactProps$" + ee,
        Le = "__reactContainer$" + ee, ti = "__reactEvents$" + ee, fm = "__reactListeners$" + ee,
        sm = "__reactHandles$" + ee, Df = "__reactResources$" + ee, wa = "__reactMarker$" + ee;

    function ei(l) {
        delete l[Kl], delete l[Il], delete l[ti], delete l[fm], delete l[sm]
    }

    function ke(l) {
        var t = l[Kl];
        if (t) return t;
        for (var e = l.parentNode; e;) {
            if (t = e[Le] || e[Kl]) {
                if (e = t.alternate, t.child !== null || e !== null && e.child !== null) for (l = Wr(l); l !== null;) {
                    if (e = l[Kl]) return e;
                    l = Wr(l)
                }
                return t
            }
            l = e, e = l.parentNode
        }
        return null
    }

    function Ke(l) {
        if (l = l[Kl] || l[Le]) {
            var t = l.tag;
            if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3) return l
        }
        return null
    }

    function qa(l) {
        var t = l.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
        throw Error(s(33))
    }

    function Je(l) {
        var t = l[Df];
        return t || (t = l[Df] = {hoistableStyles: new Map, hoistableScripts: new Map}), t
    }

    function Gl(l) {
        l[wa] = !0
    }

    var Rf = new Set, Uf = {};

    function Me(l, t) {
        We(l, t), We(l + "Capture", t)
    }

    function We(l, t) {
        for (Uf[l] = t, l = 0; l < t.length; l++) Rf.add(t[l])
    }

    var om = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),
        Hf = {}, Cf = {};

    function rm(l) {
        return le.call(Cf, l) ? !0 : le.call(Hf, l) ? !1 : om.test(l) ? Cf[l] = !0 : (Hf[l] = !0, !1)
    }

    function Bn(l, t, e) {
        if (rm(t)) if (e === null) l.removeAttribute(t); else {
            switch (typeof e) {
                case"undefined":
                case"function":
                case"symbol":
                    l.removeAttribute(t);
                    return;
                case"boolean":
                    var a = t.toLowerCase().slice(0, 5);
                    if (a !== "data-" && a !== "aria-") {
                        l.removeAttribute(t);
                        return
                    }
            }
            l.setAttribute(t, "" + e)
        }
    }

    function Gn(l, t, e) {
        if (e === null) l.removeAttribute(t); else {
            switch (typeof e) {
                case"undefined":
                case"function":
                case"symbol":
                case"boolean":
                    l.removeAttribute(t);
                    return
            }
            l.setAttribute(t, "" + e)
        }
    }

    function wt(l, t, e, a) {
        if (a === null) l.removeAttribute(e); else {
            switch (typeof a) {
                case"undefined":
                case"function":
                case"symbol":
                case"boolean":
                    l.removeAttribute(e);
                    return
            }
            l.setAttributeNS(t, e, "" + a)
        }
    }

    var ai, wf;

    function $e(l) {
        if (ai === void 0) try {
            throw Error()
        } catch (e) {
            var t = e.stack.trim().match(/\n( *(at )?)/);
            ai = t && t[1] || "", wf = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : ""
        }
        return `
` + ai + l + wf
    }

    var ni = !1;

    function ui(l, t) {
        if (!l || ni) return "";
        ni = !0;
        var e = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var a = {
                DetermineComponentFrameRoot: function () {
                    try {
                        if (t) {
                            var _ = function () {
                                throw Error()
                            };
                            if (Object.defineProperty(_.prototype, "props", {
                                set: function () {
                                    throw Error()
                                }
                            }), typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(_, [])
                                } catch (p) {
                                    var b = p
                                }
                                Reflect.construct(l, [], _)
                            } else {
                                try {
                                    _.call()
                                } catch (p) {
                                    b = p
                                }
                                l.call(_.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (p) {
                                b = p
                            }
                            (_ = l()) && typeof _.catch == "function" && _.catch(function () {
                            })
                        }
                    } catch (p) {
                        if (p && b && typeof p.stack == "string") return [p.stack, b.stack]
                    }
                    return [null, null]
                }
            };
            a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var n = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
            n && n.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {value: "DetermineComponentFrameRoot"});
            var u = a.DetermineComponentFrameRoot(), i = u[0], c = u[1];
            if (i && c) {
                var o = i.split(`
`), g = c.split(`
`);
                for (n = a = 0; a < o.length && !o[a].includes("DetermineComponentFrameRoot");) a++;
                for (; n < g.length && !g[n].includes("DetermineComponentFrameRoot");) n++;
                if (a === o.length || n === g.length) for (a = o.length - 1, n = g.length - 1; 1 <= a && 0 <= n && o[a] !== g[n];) n--;
                for (; 1 <= a && 0 <= n; a--, n--) if (o[a] !== g[n]) {
                    if (a !== 1 || n !== 1) do if (a--, n--, 0 > n || o[a] !== g[n]) {
                        var E = `
` + o[a].replace(" at new ", " at ");
                        return l.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", l.displayName)), E
                    } while (1 <= a && 0 <= n);
                    break
                }
            }
        } finally {
            ni = !1, Error.prepareStackTrace = e
        }
        return (e = l ? l.displayName || l.name : "") ? $e(e) : ""
    }

    function dm(l) {
        switch (l.tag) {
            case 26:
            case 27:
            case 5:
                return $e(l.type);
            case 16:
                return $e("Lazy");
            case 13:
                return $e("Suspense");
            case 19:
                return $e("SuspenseList");
            case 0:
            case 15:
                return ui(l.type, !1);
            case 11:
                return ui(l.type.render, !1);
            case 1:
                return ui(l.type, !0);
            case 31:
                return $e("Activity");
            default:
                return ""
        }
    }

    function qf(l) {
        try {
            var t = "";
            do t += dm(l), l = l.return; while (l);
            return t
        } catch (e) {
            return `
Error generating stack: ` + e.message + `
` + e.stack
        }
    }

    function ht(l) {
        switch (typeof l) {
            case"bigint":
            case"boolean":
            case"number":
            case"string":
            case"undefined":
                return l;
            case"object":
                return l;
            default:
                return ""
        }
    }

    function Bf(l) {
        var t = l.type;
        return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }

    function mm(l) {
        var t = Bf(l) ? "checked" : "value", e = Object.getOwnPropertyDescriptor(l.constructor.prototype, t),
            a = "" + l[t];
        if (!l.hasOwnProperty(t) && typeof e < "u" && typeof e.get == "function" && typeof e.set == "function") {
            var n = e.get, u = e.set;
            return Object.defineProperty(l, t, {
                configurable: !0, get: function () {
                    return n.call(this)
                }, set: function (i) {
                    a = "" + i, u.call(this, i)
                }
            }), Object.defineProperty(l, t, {enumerable: e.enumerable}), {
                getValue: function () {
                    return a
                }, setValue: function (i) {
                    a = "" + i
                }, stopTracking: function () {
                    l._valueTracker = null, delete l[t]
                }
            }
        }
    }

    function Yn(l) {
        l._valueTracker || (l._valueTracker = mm(l))
    }

    function Gf(l) {
        if (!l) return !1;
        var t = l._valueTracker;
        if (!t) return !0;
        var e = t.getValue(), a = "";
        return l && (a = Bf(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== e ? (t.setValue(l), !0) : !1
    }

    function Xn(l) {
        if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
        try {
            return l.activeElement || l.body
        } catch {
            return l.body
        }
    }

    var hm = /[\n"\\]/g;

    function gt(l) {
        return l.replace(hm, function (t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }

    function ii(l, t, e, a, n, u, i, c) {
        l.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.type = i : l.removeAttribute("type"), t != null ? i === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + ht(t)) : l.value !== "" + ht(t) && (l.value = "" + ht(t)) : i !== "submit" && i !== "reset" || l.removeAttribute("value"), t != null ? ci(l, i, ht(t)) : e != null ? ci(l, i, ht(e)) : a != null && l.removeAttribute("value"), n == null && u != null && (l.defaultChecked = !!u), n != null && (l.checked = n && typeof n != "function" && typeof n != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + ht(c) : l.removeAttribute("name")
    }

    function Yf(l, t, e, a, n, u, i, c) {
        if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (l.type = u), t != null || e != null) {
            if (!(u !== "submit" && u !== "reset" || t != null)) return;
            e = e != null ? "" + ht(e) : "", t = t != null ? "" + ht(t) : e, c || t === l.value || (l.value = t), l.defaultValue = t
        }
        a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = c ? l.checked : !!a, l.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (l.name = i)
    }

    function ci(l, t, e) {
        t === "number" && Xn(l.ownerDocument) === l || l.defaultValue === "" + e || (l.defaultValue = "" + e)
    }

    function Fe(l, t, e, a) {
        if (l = l.options, t) {
            t = {};
            for (var n = 0; n < e.length; n++) t["$" + e[n]] = !0;
            for (e = 0; e < l.length; e++) n = t.hasOwnProperty("$" + l[e].value), l[e].selected !== n && (l[e].selected = n), n && a && (l[e].defaultSelected = !0)
        } else {
            for (e = "" + ht(e), t = null, n = 0; n < l.length; n++) {
                if (l[n].value === e) {
                    l[n].selected = !0, a && (l[n].defaultSelected = !0);
                    return
                }
                t !== null || l[n].disabled || (t = l[n])
            }
            t !== null && (t.selected = !0)
        }
    }

    function Xf(l, t, e) {
        if (t != null && (t = "" + ht(t), t !== l.value && (l.value = t), e == null)) {
            l.defaultValue !== t && (l.defaultValue = t);
            return
        }
        l.defaultValue = e != null ? "" + ht(e) : ""
    }

    function Qf(l, t, e, a) {
        if (t == null) {
            if (a != null) {
                if (e != null) throw Error(s(92));
                if (Al(a)) {
                    if (1 < a.length) throw Error(s(93));
                    a = a[0]
                }
                e = a
            }
            e == null && (e = ""), t = e
        }
        e = ht(t), l.defaultValue = e, a = l.textContent, a === e && a !== "" && a !== null && (l.value = a)
    }

    function Ie(l, t) {
        if (t) {
            var e = l.firstChild;
            if (e && e === l.lastChild && e.nodeType === 3) {
                e.nodeValue = t;
                return
            }
        }
        l.textContent = t
    }

    var gm = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));

    function Zf(l, t, e) {
        var a = t.indexOf("--") === 0;
        e == null || typeof e == "boolean" || e === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, e) : typeof e != "number" || e === 0 || gm.has(t) ? t === "float" ? l.cssFloat = e : l[t] = ("" + e).trim() : l[t] = e + "px"
    }

    function Vf(l, t, e) {
        if (t != null && typeof t != "object") throw Error(s(62));
        if (l = l.style, e != null) {
            for (var a in e) !e.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
            for (var n in t) a = t[n], t.hasOwnProperty(n) && e[n] !== a && Zf(l, n, a)
        } else for (var u in t) t.hasOwnProperty(u) && Zf(l, u, t[u])
    }

    function fi(l) {
        if (l.indexOf("-") === -1) return !1;
        switch (l) {
            case"annotation-xml":
            case"color-profile":
            case"font-face":
            case"font-face-src":
            case"font-face-uri":
            case"font-face-format":
            case"font-face-name":
            case"missing-glyph":
                return !1;
            default:
                return !0
        }
    }

    var ym = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]),
        vm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;

    function Qn(l) {
        return vm.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l
    }

    var si = null;

    function oi(l) {
        return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l
    }

    var Pe = null, la = null;

    function Lf(l) {
        var t = Ke(l);
        if (t && (l = t.stateNode)) {
            var e = l[Il] || null;
            l:switch (l = t.stateNode, t.type) {
                case"input":
                    if (ii(l, e.value, e.defaultValue, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name), t = e.name, e.type === "radio" && t != null) {
                        for (e = l; e.parentNode;) e = e.parentNode;
                        for (e = e.querySelectorAll('input[name="' + gt("" + t) + '"][type="radio"]'), t = 0; t < e.length; t++) {
                            var a = e[t];
                            if (a !== l && a.form === l.form) {
                                var n = a[Il] || null;
                                if (!n) throw Error(s(90));
                                ii(a, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name)
                            }
                        }
                        for (t = 0; t < e.length; t++) a = e[t], a.form === l.form && Gf(a)
                    }
                    break l;
                case"textarea":
                    Xf(l, e.value, e.defaultValue);
                    break l;
                case"select":
                    t = e.value, t != null && Fe(l, !!e.multiple, t, !1)
            }
        }
    }

    var ri = !1;

    function kf(l, t, e) {
        if (ri) return l(t, e);
        ri = !0;
        try {
            var a = l(t);
            return a
        } finally {
            if (ri = !1, (Pe !== null || la !== null) && (Mu(), Pe && (t = Pe, l = la, la = Pe = null, Lf(t), l))) for (t = 0; t < l.length; t++) Lf(l[t])
        }
    }

    function Ba(l, t) {
        var e = l.stateNode;
        if (e === null) return null;
        var a = e[Il] || null;
        if (a === null) return null;
        e = a[t];
        l:switch (t) {
            case"onClick":
            case"onClickCapture":
            case"onDoubleClick":
            case"onDoubleClickCapture":
            case"onMouseDown":
            case"onMouseDownCapture":
            case"onMouseMove":
            case"onMouseMoveCapture":
            case"onMouseUp":
            case"onMouseUpCapture":
            case"onMouseEnter":
                (a = !a.disabled) || (l = l.type, a = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !a;
                break l;
            default:
                l = !1
        }
        if (l) return null;
        if (e && typeof e != "function") throw Error(s(231, t, typeof e));
        return e
    }

    var qt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
        di = !1;
    if (qt) try {
        var Ga = {};
        Object.defineProperty(Ga, "passive", {
            get: function () {
                di = !0
            }
        }), window.addEventListener("test", Ga, Ga), window.removeEventListener("test", Ga, Ga)
    } catch {
        di = !1
    }
    var ae = null, mi = null, Zn = null;

    function Kf() {
        if (Zn) return Zn;
        var l, t = mi, e = t.length, a, n = "value" in ae ? ae.value : ae.textContent, u = n.length;
        for (l = 0; l < e && t[l] === n[l]; l++) ;
        var i = e - l;
        for (a = 1; a <= i && t[e - a] === n[u - a]; a++) ;
        return Zn = n.slice(l, 1 < a ? 1 - a : void 0)
    }

    function Vn(l) {
        var t = l.keyCode;
        return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0
    }

    function Ln() {
        return !0
    }

    function Jf() {
        return !1
    }

    function Pl(l) {
        function t(e, a, n, u, i) {
            this._reactName = e, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = i, this.currentTarget = null;
            for (var c in l) l.hasOwnProperty(c) && (e = l[c], this[c] = e ? e(u) : u[c]);
            return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Ln : Jf, this.isPropagationStopped = Jf, this
        }

        return R(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = Ln)
            }, stopPropagation: function () {
                var e = this.nativeEvent;
                e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = Ln)
            }, persist: function () {
            }, isPersistent: Ln
        }), t
    }

    var Ne = {
            eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (l) {
                return l.timeStamp || Date.now()
            }, defaultPrevented: 0, isTrusted: 0
        }, kn = Pl(Ne), Ya = R({}, Ne, {view: 0, detail: 0}), bm = Pl(Ya), hi, gi, Xa, Kn = R({}, Ya, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: vi,
            button: 0,
            buttons: 0,
            relatedTarget: function (l) {
                return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget
            },
            movementX: function (l) {
                return "movementX" in l ? l.movementX : (l !== Xa && (Xa && l.type === "mousemove" ? (hi = l.screenX - Xa.screenX, gi = l.screenY - Xa.screenY) : gi = hi = 0, Xa = l), hi)
            },
            movementY: function (l) {
                return "movementY" in l ? l.movementY : gi
            }
        }), Wf = Pl(Kn), pm = R({}, Kn, {dataTransfer: 0}), xm = Pl(pm), Sm = R({}, Ya, {relatedTarget: 0}), yi = Pl(Sm),
        Am = R({}, Ne, {animationName: 0, elapsedTime: 0, pseudoElement: 0}), zm = Pl(Am), Em = R({}, Ne, {
            clipboardData: function (l) {
                return "clipboardData" in l ? l.clipboardData : window.clipboardData
            }
        }), Tm = Pl(Em), _m = R({}, Ne, {data: 0}), $f = Pl(_m), Mm = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        }, Nm = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        }, Om = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};

    function jm(l) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(l) : (l = Om[l]) ? !!t[l] : !1
    }

    function vi() {
        return jm
    }

    var Dm = R({}, Ya, {
            key: function (l) {
                if (l.key) {
                    var t = Mm[l.key] || l.key;
                    if (t !== "Unidentified") return t
                }
                return l.type === "keypress" ? (l = Vn(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Nm[l.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: vi,
            charCode: function (l) {
                return l.type === "keypress" ? Vn(l) : 0
            },
            keyCode: function (l) {
                return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0
            },
            which: function (l) {
                return l.type === "keypress" ? Vn(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0
            }
        }), Rm = Pl(Dm), Um = R({}, Kn, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }), Ff = Pl(Um), Hm = R({}, Ya, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: vi
        }), Cm = Pl(Hm), wm = R({}, Ne, {propertyName: 0, elapsedTime: 0, pseudoElement: 0}), qm = Pl(wm), Bm = R({}, Kn, {
            deltaX: function (l) {
                return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0
            }, deltaY: function (l) {
                return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0
            }, deltaZ: 0, deltaMode: 0
        }), Gm = Pl(Bm), Ym = R({}, Ne, {newState: 0, oldState: 0}), Xm = Pl(Ym), Qm = [9, 13, 27, 32],
        bi = qt && "CompositionEvent" in window, Qa = null;
    qt && "documentMode" in document && (Qa = document.documentMode);
    var Zm = qt && "TextEvent" in window && !Qa, If = qt && (!bi || Qa && 8 < Qa && 11 >= Qa), Pf = " ", ls = !1;

    function ts(l, t) {
        switch (l) {
            case"keyup":
                return Qm.indexOf(t.keyCode) !== -1;
            case"keydown":
                return t.keyCode !== 229;
            case"keypress":
            case"mousedown":
            case"focusout":
                return !0;
            default:
                return !1
        }
    }

    function es(l) {
        return l = l.detail, typeof l == "object" && "data" in l ? l.data : null
    }

    var ta = !1;

    function Vm(l, t) {
        switch (l) {
            case"compositionend":
                return es(t);
            case"keypress":
                return t.which !== 32 ? null : (ls = !0, Pf);
            case"textInput":
                return l = t.data, l === Pf && ls ? null : l;
            default:
                return null
        }
    }

    function Lm(l, t) {
        if (ta) return l === "compositionend" || !bi && ts(l, t) ? (l = Kf(), Zn = mi = ae = null, ta = !1, l) : null;
        switch (l) {
            case"paste":
                return null;
            case"keypress":
                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                    if (t.char && 1 < t.char.length) return t.char;
                    if (t.which) return String.fromCharCode(t.which)
                }
                return null;
            case"compositionend":
                return If && t.locale !== "ko" ? null : t.data;
            default:
                return null
        }
    }

    var km = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function as(l) {
        var t = l && l.nodeName && l.nodeName.toLowerCase();
        return t === "input" ? !!km[l.type] : t === "textarea"
    }

    function ns(l, t, e, a) {
        Pe ? la ? la.push(a) : la = [a] : Pe = a, t = Uu(t, "onChange"), 0 < t.length && (e = new kn("onChange", "change", null, e, a), l.push({
            event: e,
            listeners: t
        }))
    }

    var Za = null, Va = null;

    function Km(l) {
        Gr(l, 0)
    }

    function Jn(l) {
        var t = qa(l);
        if (Gf(t)) return l
    }

    function us(l, t) {
        if (l === "change") return t
    }

    var is = !1;
    if (qt) {
        var pi;
        if (qt) {
            var xi = "oninput" in document;
            if (!xi) {
                var cs = document.createElement("div");
                cs.setAttribute("oninput", "return;"), xi = typeof cs.oninput == "function"
            }
            pi = xi
        } else pi = !1;
        is = pi && (!document.documentMode || 9 < document.documentMode)
    }

    function fs() {
        Za && (Za.detachEvent("onpropertychange", ss), Va = Za = null)
    }

    function ss(l) {
        if (l.propertyName === "value" && Jn(Va)) {
            var t = [];
            ns(t, Va, l, oi(l)), kf(Km, t)
        }
    }

    function Jm(l, t, e) {
        l === "focusin" ? (fs(), Za = t, Va = e, Za.attachEvent("onpropertychange", ss)) : l === "focusout" && fs()
    }

    function Wm(l) {
        if (l === "selectionchange" || l === "keyup" || l === "keydown") return Jn(Va)
    }

    function $m(l, t) {
        if (l === "click") return Jn(t)
    }

    function Fm(l, t) {
        if (l === "input" || l === "change") return Jn(t)
    }

    function Im(l, t) {
        return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t
    }

    var it = typeof Object.is == "function" ? Object.is : Im;

    function La(l, t) {
        if (it(l, t)) return !0;
        if (typeof l != "object" || l === null || typeof t != "object" || t === null) return !1;
        var e = Object.keys(l), a = Object.keys(t);
        if (e.length !== a.length) return !1;
        for (a = 0; a < e.length; a++) {
            var n = e[a];
            if (!le.call(t, n) || !it(l[n], t[n])) return !1
        }
        return !0
    }

    function os(l) {
        for (; l && l.firstChild;) l = l.firstChild;
        return l
    }

    function rs(l, t) {
        var e = os(l);
        l = 0;
        for (var a; e;) {
            if (e.nodeType === 3) {
                if (a = l + e.textContent.length, l <= t && a >= t) return {node: e, offset: t - l};
                l = a
            }
            l:{
                for (; e;) {
                    if (e.nextSibling) {
                        e = e.nextSibling;
                        break l
                    }
                    e = e.parentNode
                }
                e = void 0
            }
            e = os(e)
        }
    }

    function ds(l, t) {
        return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ds(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1
    }

    function ms(l) {
        l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
        for (var t = Xn(l.document); t instanceof l.HTMLIFrameElement;) {
            try {
                var e = typeof t.contentWindow.location.href == "string"
            } catch {
                e = !1
            }
            if (e) l = t.contentWindow; else break;
            t = Xn(l.document)
        }
        return t
    }

    function Si(l) {
        var t = l && l.nodeName && l.nodeName.toLowerCase();
        return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true")
    }

    var Pm = qt && "documentMode" in document && 11 >= document.documentMode, ea = null, Ai = null, ka = null, zi = !1;

    function hs(l, t, e) {
        var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
        zi || ea == null || ea !== Xn(a) || (a = ea, "selectionStart" in a && Si(a) ? a = {
            start: a.selectionStart,
            end: a.selectionEnd
        } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset
        }), ka && La(ka, a) || (ka = a, a = Uu(Ai, "onSelect"), 0 < a.length && (t = new kn("onSelect", "select", null, t, e), l.push({
            event: t,
            listeners: a
        }), t.target = ea)))
    }

    function Oe(l, t) {
        var e = {};
        return e[l.toLowerCase()] = t.toLowerCase(), e["Webkit" + l] = "webkit" + t, e["Moz" + l] = "moz" + t, e
    }

    var aa = {
        animationend: Oe("Animation", "AnimationEnd"),
        animationiteration: Oe("Animation", "AnimationIteration"),
        animationstart: Oe("Animation", "AnimationStart"),
        transitionrun: Oe("Transition", "TransitionRun"),
        transitionstart: Oe("Transition", "TransitionStart"),
        transitioncancel: Oe("Transition", "TransitionCancel"),
        transitionend: Oe("Transition", "TransitionEnd")
    }, Ei = {}, gs = {};
    qt && (gs = document.createElement("div").style, "AnimationEvent" in window || (delete aa.animationend.animation, delete aa.animationiteration.animation, delete aa.animationstart.animation), "TransitionEvent" in window || delete aa.transitionend.transition);

    function je(l) {
        if (Ei[l]) return Ei[l];
        if (!aa[l]) return l;
        var t = aa[l], e;
        for (e in t) if (t.hasOwnProperty(e) && e in gs) return Ei[l] = t[e];
        return l
    }

    var ys = je("animationend"), vs = je("animationiteration"), bs = je("animationstart"), l0 = je("transitionrun"),
        t0 = je("transitionstart"), e0 = je("transitioncancel"), ps = je("transitionend"), xs = new Map,
        Ti = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Ti.push("scrollEnd");

    function Tt(l, t) {
        xs.set(l, t), Me(t, [l])
    }

    var Ss = new WeakMap;

    function yt(l, t) {
        if (typeof l == "object" && l !== null) {
            var e = Ss.get(l);
            return e !== void 0 ? e : (t = {value: l, source: t, stack: qf(t)}, Ss.set(l, t), t)
        }
        return {value: l, source: t, stack: qf(t)}
    }

    var vt = [], na = 0, _i = 0;

    function Wn() {
        for (var l = na, t = _i = na = 0; t < l;) {
            var e = vt[t];
            vt[t++] = null;
            var a = vt[t];
            vt[t++] = null;
            var n = vt[t];
            vt[t++] = null;
            var u = vt[t];
            if (vt[t++] = null, a !== null && n !== null) {
                var i = a.pending;
                i === null ? n.next = n : (n.next = i.next, i.next = n), a.pending = n
            }
            u !== 0 && As(e, n, u)
        }
    }

    function $n(l, t, e, a) {
        vt[na++] = l, vt[na++] = t, vt[na++] = e, vt[na++] = a, _i |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a)
    }

    function Mi(l, t, e, a) {
        return $n(l, t, e, a), Fn(l)
    }

    function ua(l, t) {
        return $n(l, null, null, t), Fn(l)
    }

    function As(l, t, e) {
        l.lanes |= e;
        var a = l.alternate;
        a !== null && (a.lanes |= e);
        for (var n = !1, u = l.return; u !== null;) u.childLanes |= e, a = u.alternate, a !== null && (a.childLanes |= e), u.tag === 22 && (l = u.stateNode, l === null || l._visibility & 1 || (n = !0)), l = u, u = u.return;
        return l.tag === 3 ? (u = l.stateNode, n && t !== null && (n = 31 - ut(e), l = u.hiddenUpdates, a = l[n], a === null ? l[n] = [t] : a.push(t), t.lane = e | 536870912), u) : null
    }

    function Fn(l) {
        if (50 < bn) throw bn = 0, Uc = null, Error(s(185));
        for (var t = l.return; t !== null;) l = t, t = l.return;
        return l.tag === 3 ? l.stateNode : null
    }

    var ia = {};

    function a0(l, t, e, a) {
        this.tag = l, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
    }

    function ct(l, t, e, a) {
        return new a0(l, t, e, a)
    }

    function Ni(l) {
        return l = l.prototype, !(!l || !l.isReactComponent)
    }

    function Bt(l, t) {
        var e = l.alternate;
        return e === null ? (e = ct(l.tag, t, l.key, l.mode), e.elementType = l.elementType, e.type = l.type, e.stateNode = l.stateNode, e.alternate = l, l.alternate = e) : (e.pendingProps = t, e.type = l.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = l.flags & 65011712, e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, t = l.dependencies, e.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }, e.sibling = l.sibling, e.index = l.index, e.ref = l.ref, e.refCleanup = l.refCleanup, e
    }

    function zs(l, t) {
        l.flags &= 65011714;
        var e = l.alternate;
        return e === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, l.type = e.type, t = e.dependencies, l.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }), l
    }

    function In(l, t, e, a, n, u) {
        var i = 0;
        if (a = l, typeof l == "function") Ni(l) && (i = 1); else if (typeof l == "string") i = uh(l, e, w.current) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5; else l:switch (l) {
            case Dl:
                return l = ct(31, e, t, n), l.elementType = Dl, l.lanes = u, l;
            case Y:
                return De(e.children, n, u, t);
            case ll:
                i = 8, n |= 24;
                break;
            case dl:
                return l = ct(12, e, t, n | 2), l.elementType = dl, l.lanes = u, l;
            case F:
                return l = ct(13, e, t, n), l.elementType = F, l.lanes = u, l;
            case Ml:
                return l = ct(19, e, t, n), l.elementType = Ml, l.lanes = u, l;
            default:
                if (typeof l == "object" && l !== null) switch (l.$$typeof) {
                    case Zl:
                    case El:
                        i = 10;
                        break l;
                    case Fl:
                        i = 9;
                        break l;
                    case Bl:
                        i = 11;
                        break l;
                    case Hl:
                        i = 14;
                        break l;
                    case Z:
                        i = 16, a = null;
                        break l
                }
                i = 29, e = Error(s(130, l === null ? "null" : typeof l, "")), a = null
        }
        return t = ct(i, e, t, n), t.elementType = l, t.type = a, t.lanes = u, t
    }

    function De(l, t, e, a) {
        return l = ct(7, l, a, t), l.lanes = e, l
    }

    function Oi(l, t, e) {
        return l = ct(6, l, null, t), l.lanes = e, l
    }

    function ji(l, t, e) {
        return t = ct(4, l.children !== null ? l.children : [], l.key, t), t.lanes = e, t.stateNode = {
            containerInfo: l.containerInfo,
            pendingChildren: null,
            implementation: l.implementation
        }, t
    }

    var ca = [], fa = 0, Pn = null, lu = 0, bt = [], pt = 0, Re = null, Gt = 1, Yt = "";

    function Ue(l, t) {
        ca[fa++] = lu, ca[fa++] = Pn, Pn = l, lu = t
    }

    function Es(l, t, e) {
        bt[pt++] = Gt, bt[pt++] = Yt, bt[pt++] = Re, Re = l;
        var a = Gt;
        l = Yt;
        var n = 32 - ut(a) - 1;
        a &= ~(1 << n), e += 1;
        var u = 32 - ut(t) + n;
        if (30 < u) {
            var i = n - n % 5;
            u = (a & (1 << i) - 1).toString(32), a >>= i, n -= i, Gt = 1 << 32 - ut(t) + n | e << n | a, Yt = u + l
        } else Gt = 1 << u | e << n | a, Yt = l
    }

    function Di(l) {
        l.return !== null && (Ue(l, 1), Es(l, 1, 0))
    }

    function Ri(l) {
        for (; l === Pn;) Pn = ca[--fa], ca[fa] = null, lu = ca[--fa], ca[fa] = null;
        for (; l === Re;) Re = bt[--pt], bt[pt] = null, Yt = bt[--pt], bt[pt] = null, Gt = bt[--pt], bt[pt] = null
    }

    var $l = null, Tl = null, fl = !1, He = null, jt = !1, Ui = Error(s(519));

    function Ce(l) {
        var t = Error(s(418, ""));
        throw Wa(yt(t, l)), Ui
    }

    function Ts(l) {
        var t = l.stateNode, e = l.type, a = l.memoizedProps;
        switch (t[Kl] = l, t[Il] = a, e) {
            case"dialog":
                nl("cancel", t), nl("close", t);
                break;
            case"iframe":
            case"object":
            case"embed":
                nl("load", t);
                break;
            case"video":
            case"audio":
                for (e = 0; e < xn.length; e++) nl(xn[e], t);
                break;
            case"source":
                nl("error", t);
                break;
            case"img":
            case"image":
            case"link":
                nl("error", t), nl("load", t);
                break;
            case"details":
                nl("toggle", t);
                break;
            case"input":
                nl("invalid", t), Yf(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0), Yn(t);
                break;
            case"select":
                nl("invalid", t);
                break;
            case"textarea":
                nl("invalid", t), Qf(t, a.value, a.defaultValue, a.children), Yn(t)
        }
        e = a.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || t.textContent === "" + e || a.suppressHydrationWarning === !0 || Zr(t.textContent, e) ? (a.popover != null && (nl("beforetoggle", t), nl("toggle", t)), a.onScroll != null && nl("scroll", t), a.onScrollEnd != null && nl("scrollend", t), a.onClick != null && (t.onclick = Hu), t = !0) : t = !1, t || Ce(l)
    }

    function _s(l) {
        for ($l = l.return; $l;) switch ($l.tag) {
            case 5:
            case 13:
                jt = !1;
                return;
            case 27:
            case 3:
                jt = !0;
                return;
            default:
                $l = $l.return
        }
    }

    function Ka(l) {
        if (l !== $l) return !1;
        if (!fl) return _s(l), fl = !0, !1;
        var t = l.tag, e;
        if ((e = t !== 3 && t !== 27) && ((e = t === 5) && (e = l.type, e = !(e !== "form" && e !== "button") || Wc(l.type, l.memoizedProps)), e = !e), e && Tl && Ce(l), _s(l), t === 13) {
            if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(s(317));
            l:{
                for (l = l.nextSibling, t = 0; l;) {
                    if (l.nodeType === 8) if (e = l.data, e === "/$") {
                        if (t === 0) {
                            Tl = Mt(l.nextSibling);
                            break l
                        }
                        t--
                    } else e !== "$" && e !== "$!" && e !== "$?" || t++;
                    l = l.nextSibling
                }
                Tl = null
            }
        } else t === 27 ? (t = Tl, pe(l.type) ? (l = Pc, Pc = null, Tl = l) : Tl = t) : Tl = $l ? Mt(l.stateNode.nextSibling) : null;
        return !0
    }

    function Ja() {
        Tl = $l = null, fl = !1
    }

    function Ms() {
        var l = He;
        return l !== null && (et === null ? et = l : et.push.apply(et, l), He = null), l
    }

    function Wa(l) {
        He === null ? He = [l] : He.push(l)
    }

    var Hi = M(null), we = null, Xt = null;

    function ne(l, t, e) {
        D(Hi, t._currentValue), t._currentValue = e
    }

    function Qt(l) {
        l._currentValue = Hi.current, C(Hi)
    }

    function Ci(l, t, e) {
        for (; l !== null;) {
            var a = l.alternate;
            if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === e) break;
            l = l.return
        }
    }

    function wi(l, t, e, a) {
        var n = l.child;
        for (n !== null && (n.return = l); n !== null;) {
            var u = n.dependencies;
            if (u !== null) {
                var i = n.child;
                u = u.firstContext;
                l:for (; u !== null;) {
                    var c = u;
                    u = n;
                    for (var o = 0; o < t.length; o++) if (c.context === t[o]) {
                        u.lanes |= e, c = u.alternate, c !== null && (c.lanes |= e), Ci(u.return, e, l), a || (i = null);
                        break l
                    }
                    u = c.next
                }
            } else if (n.tag === 18) {
                if (i = n.return, i === null) throw Error(s(341));
                i.lanes |= e, u = i.alternate, u !== null && (u.lanes |= e), Ci(i, e, l), i = null
            } else i = n.child;
            if (i !== null) i.return = n; else for (i = n; i !== null;) {
                if (i === l) {
                    i = null;
                    break
                }
                if (n = i.sibling, n !== null) {
                    n.return = i.return, i = n;
                    break
                }
                i = i.return
            }
            n = i
        }
    }

    function $a(l, t, e, a) {
        l = null;
        for (var n = t, u = !1; n !== null;) {
            if (!u) {
                if ((n.flags & 524288) !== 0) u = !0; else if ((n.flags & 262144) !== 0) break
            }
            if (n.tag === 10) {
                var i = n.alternate;
                if (i === null) throw Error(s(387));
                if (i = i.memoizedProps, i !== null) {
                    var c = n.type;
                    it(n.pendingProps.value, i.value) || (l !== null ? l.push(c) : l = [c])
                }
            } else if (n === il.current) {
                if (i = n.alternate, i === null) throw Error(s(387));
                i.memoizedState.memoizedState !== n.memoizedState.memoizedState && (l !== null ? l.push(_n) : l = [_n])
            }
            n = n.return
        }
        l !== null && wi(t, l, e, a), t.flags |= 262144
    }

    function tu(l) {
        for (l = l.firstContext; l !== null;) {
            if (!it(l.context._currentValue, l.memoizedValue)) return !0;
            l = l.next
        }
        return !1
    }

    function qe(l) {
        we = l, Xt = null, l = l.dependencies, l !== null && (l.firstContext = null)
    }

    function Jl(l) {
        return Ns(we, l)
    }

    function eu(l, t) {
        return we === null && qe(l), Ns(l, t)
    }

    function Ns(l, t) {
        var e = t._currentValue;
        if (t = {context: t, memoizedValue: e, next: null}, Xt === null) {
            if (l === null) throw Error(s(308));
            Xt = t, l.dependencies = {lanes: 0, firstContext: t}, l.flags |= 524288
        } else Xt = Xt.next = t;
        return e
    }

    var n0 = typeof AbortController < "u" ? AbortController : function () {
            var l = [], t = this.signal = {
                aborted: !1, addEventListener: function (e, a) {
                    l.push(a)
                }
            };
            this.abort = function () {
                t.aborted = !0, l.forEach(function (e) {
                    return e()
                })
            }
        }, u0 = f.unstable_scheduleCallback, i0 = f.unstable_NormalPriority,
        Cl = {$$typeof: El, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0};

    function qi() {
        return {controller: new n0, data: new Map, refCount: 0}
    }

    function Fa(l) {
        l.refCount--, l.refCount === 0 && u0(i0, function () {
            l.controller.abort()
        })
    }

    var Ia = null, Bi = 0, sa = 0, oa = null;

    function c0(l, t) {
        if (Ia === null) {
            var e = Ia = [];
            Bi = 0, sa = Yc(), oa = {
                status: "pending", value: void 0, then: function (a) {
                    e.push(a)
                }
            }
        }
        return Bi++, t.then(Os, Os), t
    }

    function Os() {
        if (--Bi === 0 && Ia !== null) {
            oa !== null && (oa.status = "fulfilled");
            var l = Ia;
            Ia = null, sa = 0, oa = null;
            for (var t = 0; t < l.length; t++) (0, l[t])()
        }
    }

    function f0(l, t) {
        var e = [], a = {
            status: "pending", value: null, reason: null, then: function (n) {
                e.push(n)
            }
        };
        return l.then(function () {
            a.status = "fulfilled", a.value = t;
            for (var n = 0; n < e.length; n++) (0, e[n])(t)
        }, function (n) {
            for (a.status = "rejected", a.reason = n, n = 0; n < e.length; n++) (0, e[n])(void 0)
        }), a
    }

    var js = A.S;
    A.S = function (l, t) {
        typeof t == "object" && t !== null && typeof t.then == "function" && c0(l, t), js !== null && js(l, t)
    };
    var Be = M(null);

    function Gi() {
        var l = Be.current;
        return l !== null ? l : pl.pooledCache
    }

    function au(l, t) {
        t === null ? D(Be, Be.current) : D(Be, t.pool)
    }

    function Ds() {
        var l = Gi();
        return l === null ? null : {parent: Cl._currentValue, pool: l}
    }

    var Pa = Error(s(460)), Rs = Error(s(474)), nu = Error(s(542)), Yi = {
        then: function () {
        }
    };

    function Us(l) {
        return l = l.status, l === "fulfilled" || l === "rejected"
    }

    function uu() {
    }

    function Hs(l, t, e) {
        switch (e = l[e], e === void 0 ? l.push(t) : e !== t && (t.then(uu, uu), t = e), t.status) {
            case"fulfilled":
                return t.value;
            case"rejected":
                throw l = t.reason, ws(l), l;
            default:
                if (typeof t.status == "string") t.then(uu, uu); else {
                    if (l = pl, l !== null && 100 < l.shellSuspendCounter) throw Error(s(482));
                    l = t, l.status = "pending", l.then(function (a) {
                        if (t.status === "pending") {
                            var n = t;
                            n.status = "fulfilled", n.value = a
                        }
                    }, function (a) {
                        if (t.status === "pending") {
                            var n = t;
                            n.status = "rejected", n.reason = a
                        }
                    })
                }
                switch (t.status) {
                    case"fulfilled":
                        return t.value;
                    case"rejected":
                        throw l = t.reason, ws(l), l
                }
                throw ln = t, Pa
        }
    }

    var ln = null;

    function Cs() {
        if (ln === null) throw Error(s(459));
        var l = ln;
        return ln = null, l
    }

    function ws(l) {
        if (l === Pa || l === nu) throw Error(s(483))
    }

    var ue = !1;

    function Xi(l) {
        l.updateQueue = {
            baseState: l.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {pending: null, lanes: 0, hiddenCallbacks: null},
            callbacks: null
        }
    }

    function Qi(l, t) {
        l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
            baseState: l.baseState,
            firstBaseUpdate: l.firstBaseUpdate,
            lastBaseUpdate: l.lastBaseUpdate,
            shared: l.shared,
            callbacks: null
        })
    }

    function ie(l) {
        return {lane: l, tag: 0, payload: null, callback: null, next: null}
    }

    function ce(l, t, e) {
        var a = l.updateQueue;
        if (a === null) return null;
        if (a = a.shared, (ol & 2) !== 0) {
            var n = a.pending;
            return n === null ? t.next = t : (t.next = n.next, n.next = t), a.pending = t, t = Fn(l), As(l, null, e), t
        }
        return $n(l, a, t, e), Fn(l)
    }

    function tn(l, t, e) {
        if (t = t.updateQueue, t !== null && (t = t.shared, (e & 4194048) !== 0)) {
            var a = t.lanes;
            a &= l.pendingLanes, e |= a, t.lanes = e, Of(l, e)
        }
    }

    function Zi(l, t) {
        var e = l.updateQueue, a = l.alternate;
        if (a !== null && (a = a.updateQueue, e === a)) {
            var n = null, u = null;
            if (e = e.firstBaseUpdate, e !== null) {
                do {
                    var i = {lane: e.lane, tag: e.tag, payload: e.payload, callback: null, next: null};
                    u === null ? n = u = i : u = u.next = i, e = e.next
                } while (e !== null);
                u === null ? n = u = t : u = u.next = t
            } else n = u = t;
            e = {
                baseState: a.baseState,
                firstBaseUpdate: n,
                lastBaseUpdate: u,
                shared: a.shared,
                callbacks: a.callbacks
            }, l.updateQueue = e;
            return
        }
        l = e.lastBaseUpdate, l === null ? e.firstBaseUpdate = t : l.next = t, e.lastBaseUpdate = t
    }

    var Vi = !1;

    function en() {
        if (Vi) {
            var l = oa;
            if (l !== null) throw l
        }
    }

    function an(l, t, e, a) {
        Vi = !1;
        var n = l.updateQueue;
        ue = !1;
        var u = n.firstBaseUpdate, i = n.lastBaseUpdate, c = n.shared.pending;
        if (c !== null) {
            n.shared.pending = null;
            var o = c, g = o.next;
            o.next = null, i === null ? u = g : i.next = g, i = o;
            var E = l.alternate;
            E !== null && (E = E.updateQueue, c = E.lastBaseUpdate, c !== i && (c === null ? E.firstBaseUpdate = g : c.next = g, E.lastBaseUpdate = o))
        }
        if (u !== null) {
            var _ = n.baseState;
            i = 0, E = g = o = null, c = u;
            do {
                var b = c.lane & -536870913, p = b !== c.lane;
                if (p ? (ul & b) === b : (a & b) === b) {
                    b !== 0 && b === sa && (Vi = !0), E !== null && (E = E.next = {
                        lane: 0,
                        tag: c.tag,
                        payload: c.payload,
                        callback: null,
                        next: null
                    });
                    l:{
                        var K = l, L = c;
                        b = t;
                        var gl = e;
                        switch (L.tag) {
                            case 1:
                                if (K = L.payload, typeof K == "function") {
                                    _ = K.call(gl, _, b);
                                    break l
                                }
                                _ = K;
                                break l;
                            case 3:
                                K.flags = K.flags & -65537 | 128;
                            case 0:
                                if (K = L.payload, b = typeof K == "function" ? K.call(gl, _, b) : K, b == null) break l;
                                _ = R({}, _, b);
                                break l;
                            case 2:
                                ue = !0
                        }
                    }
                    b = c.callback, b !== null && (l.flags |= 64, p && (l.flags |= 8192), p = n.callbacks, p === null ? n.callbacks = [b] : p.push(b))
                } else p = {
                    lane: b,
                    tag: c.tag,
                    payload: c.payload,
                    callback: c.callback,
                    next: null
                }, E === null ? (g = E = p, o = _) : E = E.next = p, i |= b;
                if (c = c.next, c === null) {
                    if (c = n.shared.pending, c === null) break;
                    p = c, c = p.next, p.next = null, n.lastBaseUpdate = p, n.shared.pending = null
                }
            } while (!0);
            E === null && (o = _), n.baseState = o, n.firstBaseUpdate = g, n.lastBaseUpdate = E, u === null && (n.shared.lanes = 0), ge |= i, l.lanes = i, l.memoizedState = _
        }
    }

    function qs(l, t) {
        if (typeof l != "function") throw Error(s(191, l));
        l.call(t)
    }

    function Bs(l, t) {
        var e = l.callbacks;
        if (e !== null) for (l.callbacks = null, l = 0; l < e.length; l++) qs(e[l], t)
    }

    var ra = M(null), iu = M(0);

    function Gs(l, t) {
        l = Wt, D(iu, l), D(ra, t), Wt = l | t.baseLanes
    }

    function Li() {
        D(iu, Wt), D(ra, ra.current)
    }

    function ki() {
        Wt = iu.current, C(ra), C(iu)
    }

    var fe = 0, I = null, ml = null, Rl = null, cu = !1, da = !1, Ge = !1, fu = 0, nn = 0, ma = null, s0 = 0;

    function Ol() {
        throw Error(s(321))
    }

    function Ki(l, t) {
        if (t === null) return !1;
        for (var e = 0; e < t.length && e < l.length; e++) if (!it(l[e], t[e])) return !1;
        return !0
    }

    function Ji(l, t, e, a, n, u) {
        return fe = u, I = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, A.H = l === null || l.memoizedState === null ? zo : Eo, Ge = !1, u = e(a, n), Ge = !1, da && (u = Xs(t, e, a, n)), Ys(l), u
    }

    function Ys(l) {
        A.H = hu;
        var t = ml !== null && ml.next !== null;
        if (fe = 0, Rl = ml = I = null, cu = !1, nn = 0, ma = null, t) throw Error(s(300));
        l === null || Yl || (l = l.dependencies, l !== null && tu(l) && (Yl = !0))
    }

    function Xs(l, t, e, a) {
        I = l;
        var n = 0;
        do {
            if (da && (ma = null), nn = 0, da = !1, 25 <= n) throw Error(s(301));
            if (n += 1, Rl = ml = null, l.updateQueue != null) {
                var u = l.updateQueue;
                u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0)
            }
            A.H = y0, u = t(e, a)
        } while (da);
        return u
    }

    function o0() {
        var l = A.H, t = l.useState()[0];
        return t = typeof t.then == "function" ? un(t) : t, l = l.useState()[0], (ml !== null ? ml.memoizedState : null) !== l && (I.flags |= 1024), t
    }

    function Wi() {
        var l = fu !== 0;
        return fu = 0, l
    }

    function $i(l, t, e) {
        t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~e
    }

    function Fi(l) {
        if (cu) {
            for (l = l.memoizedState; l !== null;) {
                var t = l.queue;
                t !== null && (t.pending = null), l = l.next
            }
            cu = !1
        }
        fe = 0, Rl = ml = I = null, da = !1, nn = fu = 0, ma = null
    }

    function lt() {
        var l = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
        return Rl === null ? I.memoizedState = Rl = l : Rl = Rl.next = l, Rl
    }

    function Ul() {
        if (ml === null) {
            var l = I.alternate;
            l = l !== null ? l.memoizedState : null
        } else l = ml.next;
        var t = Rl === null ? I.memoizedState : Rl.next;
        if (t !== null) Rl = t, ml = l; else {
            if (l === null) throw I.alternate === null ? Error(s(467)) : Error(s(310));
            ml = l, l = {
                memoizedState: ml.memoizedState,
                baseState: ml.baseState,
                baseQueue: ml.baseQueue,
                queue: ml.queue,
                next: null
            }, Rl === null ? I.memoizedState = Rl = l : Rl = Rl.next = l
        }
        return Rl
    }

    function Ii() {
        return {lastEffect: null, events: null, stores: null, memoCache: null}
    }

    function un(l) {
        var t = nn;
        return nn += 1, ma === null && (ma = []), l = Hs(ma, l, t), t = I, (Rl === null ? t.memoizedState : Rl.next) === null && (t = t.alternate, A.H = t === null || t.memoizedState === null ? zo : Eo), l
    }

    function su(l) {
        if (l !== null && typeof l == "object") {
            if (typeof l.then == "function") return un(l);
            if (l.$$typeof === El) return Jl(l)
        }
        throw Error(s(438, String(l)))
    }

    function Pi(l) {
        var t = null, e = I.updateQueue;
        if (e !== null && (t = e.memoCache), t == null) {
            var a = I.alternate;
            a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
                data: a.data.map(function (n) {
                    return n.slice()
                }), index: 0
            })))
        }
        if (t == null && (t = {
            data: [],
            index: 0
        }), e === null && (e = Ii(), I.updateQueue = e), e.memoCache = t, e = t.data[t.index], e === void 0) for (e = t.data[t.index] = Array(l), a = 0; a < l; a++) e[a] = Ct;
        return t.index++, e
    }

    function Zt(l, t) {
        return typeof t == "function" ? t(l) : t
    }

    function ou(l) {
        var t = Ul();
        return lc(t, ml, l)
    }

    function lc(l, t, e) {
        var a = l.queue;
        if (a === null) throw Error(s(311));
        a.lastRenderedReducer = e;
        var n = l.baseQueue, u = a.pending;
        if (u !== null) {
            if (n !== null) {
                var i = n.next;
                n.next = u.next, u.next = i
            }
            t.baseQueue = n = u, a.pending = null
        }
        if (u = l.baseState, n === null) l.memoizedState = u; else {
            t = n.next;
            var c = i = null, o = null, g = t, E = !1;
            do {
                var _ = g.lane & -536870913;
                if (_ !== g.lane ? (ul & _) === _ : (fe & _) === _) {
                    var b = g.revertLane;
                    if (b === 0) o !== null && (o = o.next = {
                        lane: 0,
                        revertLane: 0,
                        action: g.action,
                        hasEagerState: g.hasEagerState,
                        eagerState: g.eagerState,
                        next: null
                    }), _ === sa && (E = !0); else if ((fe & b) === b) {
                        g = g.next, b === sa && (E = !0);
                        continue
                    } else _ = {
                        lane: 0,
                        revertLane: g.revertLane,
                        action: g.action,
                        hasEagerState: g.hasEagerState,
                        eagerState: g.eagerState,
                        next: null
                    }, o === null ? (c = o = _, i = u) : o = o.next = _, I.lanes |= b, ge |= b;
                    _ = g.action, Ge && e(u, _), u = g.hasEagerState ? g.eagerState : e(u, _)
                } else b = {
                    lane: _,
                    revertLane: g.revertLane,
                    action: g.action,
                    hasEagerState: g.hasEagerState,
                    eagerState: g.eagerState,
                    next: null
                }, o === null ? (c = o = b, i = u) : o = o.next = b, I.lanes |= _, ge |= _;
                g = g.next
            } while (g !== null && g !== t);
            if (o === null ? i = u : o.next = c, !it(u, l.memoizedState) && (Yl = !0, E && (e = oa, e !== null))) throw e;
            l.memoizedState = u, l.baseState = i, l.baseQueue = o, a.lastRenderedState = u
        }
        return n === null && (a.lanes = 0), [l.memoizedState, a.dispatch]
    }

    function tc(l) {
        var t = Ul(), e = t.queue;
        if (e === null) throw Error(s(311));
        e.lastRenderedReducer = l;
        var a = e.dispatch, n = e.pending, u = t.memoizedState;
        if (n !== null) {
            e.pending = null;
            var i = n = n.next;
            do u = l(u, i.action), i = i.next; while (i !== n);
            it(u, t.memoizedState) || (Yl = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), e.lastRenderedState = u
        }
        return [u, a]
    }

    function Qs(l, t, e) {
        var a = I, n = Ul(), u = fl;
        if (u) {
            if (e === void 0) throw Error(s(407));
            e = e()
        } else e = t();
        var i = !it((ml || n).memoizedState, e);
        i && (n.memoizedState = e, Yl = !0), n = n.queue;
        var c = Ls.bind(null, a, n, l);
        if (cn(2048, 8, c, [l]), n.getSnapshot !== t || i || Rl !== null && Rl.memoizedState.tag & 1) {
            if (a.flags |= 2048, ha(9, ru(), Vs.bind(null, a, n, e, t), null), pl === null) throw Error(s(349));
            u || (fe & 124) !== 0 || Zs(a, t, e)
        }
        return e
    }

    function Zs(l, t, e) {
        l.flags |= 16384, l = {
            getSnapshot: t,
            value: e
        }, t = I.updateQueue, t === null ? (t = Ii(), I.updateQueue = t, t.stores = [l]) : (e = t.stores, e === null ? t.stores = [l] : e.push(l))
    }

    function Vs(l, t, e, a) {
        t.value = e, t.getSnapshot = a, ks(t) && Ks(l)
    }

    function Ls(l, t, e) {
        return e(function () {
            ks(t) && Ks(l)
        })
    }

    function ks(l) {
        var t = l.getSnapshot;
        l = l.value;
        try {
            var e = t();
            return !it(l, e)
        } catch {
            return !0
        }
    }

    function Ks(l) {
        var t = ua(l, 2);
        t !== null && dt(t, l, 2)
    }

    function ec(l) {
        var t = lt();
        if (typeof l == "function") {
            var e = l;
            if (l = e(), Ge) {
                te(!0);
                try {
                    e()
                } finally {
                    te(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = l, t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Zt,
            lastRenderedState: l
        }, t
    }

    function Js(l, t, e, a) {
        return l.baseState = e, lc(l, ml, typeof a == "function" ? a : Zt)
    }

    function r0(l, t, e, a, n) {
        if (mu(l)) throw Error(s(485));
        if (l = t.action, l !== null) {
            var u = {
                payload: n,
                action: l,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function (i) {
                    u.listeners.push(i)
                }
            };
            A.T !== null ? e(!0) : u.isTransition = !1, a(u), e = t.pending, e === null ? (u.next = t.pending = u, Ws(t, u)) : (u.next = e.next, t.pending = e.next = u)
        }
    }

    function Ws(l, t) {
        var e = t.action, a = t.payload, n = l.state;
        if (t.isTransition) {
            var u = A.T, i = {};
            A.T = i;
            try {
                var c = e(n, a), o = A.S;
                o !== null && o(i, c), $s(l, t, c)
            } catch (g) {
                ac(l, t, g)
            } finally {
                A.T = u
            }
        } else try {
            u = e(n, a), $s(l, t, u)
        } catch (g) {
            ac(l, t, g)
        }
    }

    function $s(l, t, e) {
        e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(function (a) {
            Fs(l, t, a)
        }, function (a) {
            return ac(l, t, a)
        }) : Fs(l, t, e)
    }

    function Fs(l, t, e) {
        t.status = "fulfilled", t.value = e, Is(t), l.state = e, t = l.pending, t !== null && (e = t.next, e === t ? l.pending = null : (e = e.next, t.next = e, Ws(l, e)))
    }

    function ac(l, t, e) {
        var a = l.pending;
        if (l.pending = null, a !== null) {
            a = a.next;
            do t.status = "rejected", t.reason = e, Is(t), t = t.next; while (t !== a)
        }
        l.action = null
    }

    function Is(l) {
        l = l.listeners;
        for (var t = 0; t < l.length; t++) (0, l[t])()
    }

    function Ps(l, t) {
        return t
    }

    function lo(l, t) {
        if (fl) {
            var e = pl.formState;
            if (e !== null) {
                l:{
                    var a = I;
                    if (fl) {
                        if (Tl) {
                            t:{
                                for (var n = Tl, u = jt; n.nodeType !== 8;) {
                                    if (!u) {
                                        n = null;
                                        break t
                                    }
                                    if (n = Mt(n.nextSibling), n === null) {
                                        n = null;
                                        break t
                                    }
                                }
                                u = n.data, n = u === "F!" || u === "F" ? n : null
                            }
                            if (n) {
                                Tl = Mt(n.nextSibling), a = n.data === "F!";
                                break l
                            }
                        }
                        Ce(a)
                    }
                    a = !1
                }
                a && (t = e[0])
            }
        }
        return e = lt(), e.memoizedState = e.baseState = t, a = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Ps,
            lastRenderedState: t
        }, e.queue = a, e = xo.bind(null, I, a), a.dispatch = e, a = ec(!1), u = fc.bind(null, I, !1, a.queue), a = lt(), n = {
            state: t,
            dispatch: null,
            action: l,
            pending: null
        }, a.queue = n, e = r0.bind(null, I, n, u, e), n.dispatch = e, a.memoizedState = l, [t, e, !1]
    }

    function to(l) {
        var t = Ul();
        return eo(t, ml, l)
    }

    function eo(l, t, e) {
        if (t = lc(l, t, Ps)[0], l = ou(Zt)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
            var a = un(t)
        } catch (i) {
            throw i === Pa ? nu : i
        } else a = t;
        t = Ul();
        var n = t.queue, u = n.dispatch;
        return e !== t.memoizedState && (I.flags |= 2048, ha(9, ru(), d0.bind(null, n, e), null)), [a, u, l]
    }

    function d0(l, t) {
        l.action = t
    }

    function ao(l) {
        var t = Ul(), e = ml;
        if (e !== null) return eo(t, e, l);
        Ul(), t = t.memoizedState, e = Ul();
        var a = e.queue.dispatch;
        return e.memoizedState = l, [t, a, !1]
    }

    function ha(l, t, e, a) {
        return l = {
            tag: l,
            create: e,
            deps: a,
            inst: t,
            next: null
        }, t = I.updateQueue, t === null && (t = Ii(), I.updateQueue = t), e = t.lastEffect, e === null ? t.lastEffect = l.next = l : (a = e.next, e.next = l, l.next = a, t.lastEffect = l), l
    }

    function ru() {
        return {destroy: void 0, resource: void 0}
    }

    function no() {
        return Ul().memoizedState
    }

    function du(l, t, e, a) {
        var n = lt();
        a = a === void 0 ? null : a, I.flags |= l, n.memoizedState = ha(1 | t, ru(), e, a)
    }

    function cn(l, t, e, a) {
        var n = Ul();
        a = a === void 0 ? null : a;
        var u = n.memoizedState.inst;
        ml !== null && a !== null && Ki(a, ml.memoizedState.deps) ? n.memoizedState = ha(t, u, e, a) : (I.flags |= l, n.memoizedState = ha(1 | t, u, e, a))
    }

    function uo(l, t) {
        du(8390656, 8, l, t)
    }

    function io(l, t) {
        cn(2048, 8, l, t)
    }

    function co(l, t) {
        return cn(4, 2, l, t)
    }

    function fo(l, t) {
        return cn(4, 4, l, t)
    }

    function so(l, t) {
        if (typeof t == "function") {
            l = l();
            var e = t(l);
            return function () {
                typeof e == "function" ? e() : t(null)
            }
        }
        if (t != null) return l = l(), t.current = l, function () {
            t.current = null
        }
    }

    function oo(l, t, e) {
        e = e != null ? e.concat([l]) : null, cn(4, 4, so.bind(null, t, l), e)
    }

    function nc() {
    }

    function ro(l, t) {
        var e = Ul();
        t = t === void 0 ? null : t;
        var a = e.memoizedState;
        return t !== null && Ki(t, a[1]) ? a[0] : (e.memoizedState = [l, t], l)
    }

    function mo(l, t) {
        var e = Ul();
        t = t === void 0 ? null : t;
        var a = e.memoizedState;
        if (t !== null && Ki(t, a[1])) return a[0];
        if (a = l(), Ge) {
            te(!0);
            try {
                l()
            } finally {
                te(!1)
            }
        }
        return e.memoizedState = [a, t], a
    }

    function uc(l, t, e) {
        return e === void 0 || (fe & 1073741824) !== 0 ? l.memoizedState = t : (l.memoizedState = e, l = yr(), I.lanes |= l, ge |= l, e)
    }

    function ho(l, t, e, a) {
        return it(e, t) ? e : ra.current !== null ? (l = uc(l, e, a), it(l, t) || (Yl = !0), l) : (fe & 42) === 0 ? (Yl = !0, l.memoizedState = e) : (l = yr(), I.lanes |= l, ge |= l, t)
    }

    function go(l, t, e, a, n) {
        var u = H.p;
        H.p = u !== 0 && 8 > u ? u : 8;
        var i = A.T, c = {};
        A.T = c, fc(l, !1, t, e);
        try {
            var o = n(), g = A.S;
            if (g !== null && g(c, o), o !== null && typeof o == "object" && typeof o.then == "function") {
                var E = f0(o, a);
                fn(l, t, E, rt(l))
            } else fn(l, t, a, rt(l))
        } catch (_) {
            fn(l, t, {
                then: function () {
                }, status: "rejected", reason: _
            }, rt())
        } finally {
            H.p = u, A.T = i
        }
    }

    function m0() {
    }

    function ic(l, t, e, a) {
        if (l.tag !== 5) throw Error(s(476));
        var n = yo(l).queue;
        go(l, n, t, j, e === null ? m0 : function () {
            return vo(l), e(a)
        })
    }

    function yo(l) {
        var t = l.memoizedState;
        if (t !== null) return t;
        t = {
            memoizedState: j,
            baseState: j,
            baseQueue: null,
            queue: {pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Zt, lastRenderedState: j},
            next: null
        };
        var e = {};
        return t.next = {
            memoizedState: e,
            baseState: e,
            baseQueue: null,
            queue: {pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Zt, lastRenderedState: e},
            next: null
        }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t
    }

    function vo(l) {
        var t = yo(l).next.queue;
        fn(l, t, {}, rt())
    }

    function cc() {
        return Jl(_n)
    }

    function bo() {
        return Ul().memoizedState
    }

    function po() {
        return Ul().memoizedState
    }

    function h0(l) {
        for (var t = l.return; t !== null;) {
            switch (t.tag) {
                case 24:
                case 3:
                    var e = rt();
                    l = ie(e);
                    var a = ce(t, l, e);
                    a !== null && (dt(a, t, e), tn(a, t, e)), t = {cache: qi()}, l.payload = t;
                    return
            }
            t = t.return
        }
    }

    function g0(l, t, e) {
        var a = rt();
        e = {
            lane: a,
            revertLane: 0,
            action: e,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, mu(l) ? So(t, e) : (e = Mi(l, t, e, a), e !== null && (dt(e, l, a), Ao(e, t, a)))
    }

    function xo(l, t, e) {
        var a = rt();
        fn(l, t, e, a)
    }

    function fn(l, t, e, a) {
        var n = {lane: a, revertLane: 0, action: e, hasEagerState: !1, eagerState: null, next: null};
        if (mu(l)) So(t, n); else {
            var u = l.alternate;
            if (l.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
                var i = t.lastRenderedState, c = u(i, e);
                if (n.hasEagerState = !0, n.eagerState = c, it(c, i)) return $n(l, t, n, 0), pl === null && Wn(), !1
            } catch {
            } finally {
            }
            if (e = Mi(l, t, n, a), e !== null) return dt(e, l, a), Ao(e, t, a), !0
        }
        return !1
    }

    function fc(l, t, e, a) {
        if (a = {lane: 2, revertLane: Yc(), action: a, hasEagerState: !1, eagerState: null, next: null}, mu(l)) {
            if (t) throw Error(s(479))
        } else t = Mi(l, e, a, 2), t !== null && dt(t, l, 2)
    }

    function mu(l) {
        var t = l.alternate;
        return l === I || t !== null && t === I
    }

    function So(l, t) {
        da = cu = !0;
        var e = l.pending;
        e === null ? t.next = t : (t.next = e.next, e.next = t), l.pending = t
    }

    function Ao(l, t, e) {
        if ((e & 4194048) !== 0) {
            var a = t.lanes;
            a &= l.pendingLanes, e |= a, t.lanes = e, Of(l, e)
        }
    }

    var hu = {
        readContext: Jl,
        use: su,
        useCallback: Ol,
        useContext: Ol,
        useEffect: Ol,
        useImperativeHandle: Ol,
        useLayoutEffect: Ol,
        useInsertionEffect: Ol,
        useMemo: Ol,
        useReducer: Ol,
        useRef: Ol,
        useState: Ol,
        useDebugValue: Ol,
        useDeferredValue: Ol,
        useTransition: Ol,
        useSyncExternalStore: Ol,
        useId: Ol,
        useHostTransitionStatus: Ol,
        useFormState: Ol,
        useActionState: Ol,
        useOptimistic: Ol,
        useMemoCache: Ol,
        useCacheRefresh: Ol
    }, zo = {
        readContext: Jl, use: su, useCallback: function (l, t) {
            return lt().memoizedState = [l, t === void 0 ? null : t], l
        }, useContext: Jl, useEffect: uo, useImperativeHandle: function (l, t, e) {
            e = e != null ? e.concat([l]) : null, du(4194308, 4, so.bind(null, t, l), e)
        }, useLayoutEffect: function (l, t) {
            return du(4194308, 4, l, t)
        }, useInsertionEffect: function (l, t) {
            du(4, 2, l, t)
        }, useMemo: function (l, t) {
            var e = lt();
            t = t === void 0 ? null : t;
            var a = l();
            if (Ge) {
                te(!0);
                try {
                    l()
                } finally {
                    te(!1)
                }
            }
            return e.memoizedState = [a, t], a
        }, useReducer: function (l, t, e) {
            var a = lt();
            if (e !== void 0) {
                var n = e(t);
                if (Ge) {
                    te(!0);
                    try {
                        e(t)
                    } finally {
                        te(!1)
                    }
                }
            } else n = t;
            return a.memoizedState = a.baseState = n, l = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: l,
                lastRenderedState: n
            }, a.queue = l, l = l.dispatch = g0.bind(null, I, l), [a.memoizedState, l]
        }, useRef: function (l) {
            var t = lt();
            return l = {current: l}, t.memoizedState = l
        }, useState: function (l) {
            l = ec(l);
            var t = l.queue, e = xo.bind(null, I, t);
            return t.dispatch = e, [l.memoizedState, e]
        }, useDebugValue: nc, useDeferredValue: function (l, t) {
            var e = lt();
            return uc(e, l, t)
        }, useTransition: function () {
            var l = ec(!1);
            return l = go.bind(null, I, l.queue, !0, !1), lt().memoizedState = l, [!1, l]
        }, useSyncExternalStore: function (l, t, e) {
            var a = I, n = lt();
            if (fl) {
                if (e === void 0) throw Error(s(407));
                e = e()
            } else {
                if (e = t(), pl === null) throw Error(s(349));
                (ul & 124) !== 0 || Zs(a, t, e)
            }
            n.memoizedState = e;
            var u = {value: e, getSnapshot: t};
            return n.queue = u, uo(Ls.bind(null, a, u, l), [l]), a.flags |= 2048, ha(9, ru(), Vs.bind(null, a, u, e, t), null), e
        }, useId: function () {
            var l = lt(), t = pl.identifierPrefix;
            if (fl) {
                var e = Yt, a = Gt;
                e = (a & ~(1 << 32 - ut(a) - 1)).toString(32) + e, t = "«" + t + "R" + e, e = fu++, 0 < e && (t += "H" + e.toString(32)), t += "»"
            } else e = s0++, t = "«" + t + "r" + e.toString(32) + "»";
            return l.memoizedState = t
        }, useHostTransitionStatus: cc, useFormState: lo, useActionState: lo, useOptimistic: function (l) {
            var t = lt();
            t.memoizedState = t.baseState = l;
            var e = {pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null};
            return t.queue = e, t = fc.bind(null, I, !0, e), e.dispatch = t, [l, t]
        }, useMemoCache: Pi, useCacheRefresh: function () {
            return lt().memoizedState = h0.bind(null, I)
        }
    }, Eo = {
        readContext: Jl,
        use: su,
        useCallback: ro,
        useContext: Jl,
        useEffect: io,
        useImperativeHandle: oo,
        useInsertionEffect: co,
        useLayoutEffect: fo,
        useMemo: mo,
        useReducer: ou,
        useRef: no,
        useState: function () {
            return ou(Zt)
        },
        useDebugValue: nc,
        useDeferredValue: function (l, t) {
            var e = Ul();
            return ho(e, ml.memoizedState, l, t)
        },
        useTransition: function () {
            var l = ou(Zt)[0], t = Ul().memoizedState;
            return [typeof l == "boolean" ? l : un(l), t]
        },
        useSyncExternalStore: Qs,
        useId: bo,
        useHostTransitionStatus: cc,
        useFormState: to,
        useActionState: to,
        useOptimistic: function (l, t) {
            var e = Ul();
            return Js(e, ml, l, t)
        },
        useMemoCache: Pi,
        useCacheRefresh: po
    }, y0 = {
        readContext: Jl,
        use: su,
        useCallback: ro,
        useContext: Jl,
        useEffect: io,
        useImperativeHandle: oo,
        useInsertionEffect: co,
        useLayoutEffect: fo,
        useMemo: mo,
        useReducer: tc,
        useRef: no,
        useState: function () {
            return tc(Zt)
        },
        useDebugValue: nc,
        useDeferredValue: function (l, t) {
            var e = Ul();
            return ml === null ? uc(e, l, t) : ho(e, ml.memoizedState, l, t)
        },
        useTransition: function () {
            var l = tc(Zt)[0], t = Ul().memoizedState;
            return [typeof l == "boolean" ? l : un(l), t]
        },
        useSyncExternalStore: Qs,
        useId: bo,
        useHostTransitionStatus: cc,
        useFormState: ao,
        useActionState: ao,
        useOptimistic: function (l, t) {
            var e = Ul();
            return ml !== null ? Js(e, ml, l, t) : (e.baseState = l, [l, e.queue.dispatch])
        },
        useMemoCache: Pi,
        useCacheRefresh: po
    }, ga = null, sn = 0;

    function gu(l) {
        var t = sn;
        return sn += 1, ga === null && (ga = []), Hs(ga, l, t)
    }

    function on(l, t) {
        t = t.props.ref, l.ref = t !== void 0 ? t : null
    }

    function yu(l, t) {
        throw t.$$typeof === W ? Error(s(525)) : (l = Object.prototype.toString.call(t), Error(s(31, l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l)))
    }

    function To(l) {
        var t = l._init;
        return t(l._payload)
    }

    function _o(l) {
        function t(m, d) {
            if (l) {
                var h = m.deletions;
                h === null ? (m.deletions = [d], m.flags |= 16) : h.push(d)
            }
        }

        function e(m, d) {
            if (!l) return null;
            for (; d !== null;) t(m, d), d = d.sibling;
            return null
        }

        function a(m) {
            for (var d = new Map; m !== null;) m.key !== null ? d.set(m.key, m) : d.set(m.index, m), m = m.sibling;
            return d
        }

        function n(m, d) {
            return m = Bt(m, d), m.index = 0, m.sibling = null, m
        }

        function u(m, d, h) {
            return m.index = h, l ? (h = m.alternate, h !== null ? (h = h.index, h < d ? (m.flags |= 67108866, d) : h) : (m.flags |= 67108866, d)) : (m.flags |= 1048576, d)
        }

        function i(m) {
            return l && m.alternate === null && (m.flags |= 67108866), m
        }

        function c(m, d, h, T) {
            return d === null || d.tag !== 6 ? (d = Oi(h, m.mode, T), d.return = m, d) : (d = n(d, h), d.return = m, d)
        }

        function o(m, d, h, T) {
            var q = h.type;
            return q === Y ? E(m, d, h.props.children, T, h.key) : d !== null && (d.elementType === q || typeof q == "object" && q !== null && q.$$typeof === Z && To(q) === d.type) ? (d = n(d, h.props), on(d, h), d.return = m, d) : (d = In(h.type, h.key, h.props, null, m.mode, T), on(d, h), d.return = m, d)
        }

        function g(m, d, h, T) {
            return d === null || d.tag !== 4 || d.stateNode.containerInfo !== h.containerInfo || d.stateNode.implementation !== h.implementation ? (d = ji(h, m.mode, T), d.return = m, d) : (d = n(d, h.children || []), d.return = m, d)
        }

        function E(m, d, h, T, q) {
            return d === null || d.tag !== 7 ? (d = De(h, m.mode, T, q), d.return = m, d) : (d = n(d, h), d.return = m, d)
        }

        function _(m, d, h) {
            if (typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint") return d = Oi("" + d, m.mode, h), d.return = m, d;
            if (typeof d == "object" && d !== null) {
                switch (d.$$typeof) {
                    case V:
                        return h = In(d.type, d.key, d.props, null, m.mode, h), on(h, d), h.return = m, h;
                    case bl:
                        return d = ji(d, m.mode, h), d.return = m, d;
                    case Z:
                        var T = d._init;
                        return d = T(d._payload), _(m, d, h)
                }
                if (Al(d) || Nl(d)) return d = De(d, m.mode, h, null), d.return = m, d;
                if (typeof d.then == "function") return _(m, gu(d), h);
                if (d.$$typeof === El) return _(m, eu(m, d), h);
                yu(m, d)
            }
            return null
        }

        function b(m, d, h, T) {
            var q = d !== null ? d.key : null;
            if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint") return q !== null ? null : c(m, d, "" + h, T);
            if (typeof h == "object" && h !== null) {
                switch (h.$$typeof) {
                    case V:
                        return h.key === q ? o(m, d, h, T) : null;
                    case bl:
                        return h.key === q ? g(m, d, h, T) : null;
                    case Z:
                        return q = h._init, h = q(h._payload), b(m, d, h, T)
                }
                if (Al(h) || Nl(h)) return q !== null ? null : E(m, d, h, T, null);
                if (typeof h.then == "function") return b(m, d, gu(h), T);
                if (h.$$typeof === El) return b(m, d, eu(m, h), T);
                yu(m, h)
            }
            return null
        }

        function p(m, d, h, T, q) {
            if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint") return m = m.get(h) || null, c(d, m, "" + T, q);
            if (typeof T == "object" && T !== null) {
                switch (T.$$typeof) {
                    case V:
                        return m = m.get(T.key === null ? h : T.key) || null, o(d, m, T, q);
                    case bl:
                        return m = m.get(T.key === null ? h : T.key) || null, g(d, m, T, q);
                    case Z:
                        var tl = T._init;
                        return T = tl(T._payload), p(m, d, h, T, q)
                }
                if (Al(T) || Nl(T)) return m = m.get(h) || null, E(d, m, T, q, null);
                if (typeof T.then == "function") return p(m, d, h, gu(T), q);
                if (T.$$typeof === El) return p(m, d, h, eu(d, T), q);
                yu(d, T)
            }
            return null
        }

        function K(m, d, h, T) {
            for (var q = null, tl = null, Q = d, k = d = 0, Ql = null; Q !== null && k < h.length; k++) {
                Q.index > k ? (Ql = Q, Q = null) : Ql = Q.sibling;
                var cl = b(m, Q, h[k], T);
                if (cl === null) {
                    Q === null && (Q = Ql);
                    break
                }
                l && Q && cl.alternate === null && t(m, Q), d = u(cl, d, k), tl === null ? q = cl : tl.sibling = cl, tl = cl, Q = Ql
            }
            if (k === h.length) return e(m, Q), fl && Ue(m, k), q;
            if (Q === null) {
                for (; k < h.length; k++) Q = _(m, h[k], T), Q !== null && (d = u(Q, d, k), tl === null ? q = Q : tl.sibling = Q, tl = Q);
                return fl && Ue(m, k), q
            }
            for (Q = a(Q); k < h.length; k++) Ql = p(Q, m, k, h[k], T), Ql !== null && (l && Ql.alternate !== null && Q.delete(Ql.key === null ? k : Ql.key), d = u(Ql, d, k), tl === null ? q = Ql : tl.sibling = Ql, tl = Ql);
            return l && Q.forEach(function (Ee) {
                return t(m, Ee)
            }), fl && Ue(m, k), q
        }

        function L(m, d, h, T) {
            if (h == null) throw Error(s(151));
            for (var q = null, tl = null, Q = d, k = d = 0, Ql = null, cl = h.next(); Q !== null && !cl.done; k++, cl = h.next()) {
                Q.index > k ? (Ql = Q, Q = null) : Ql = Q.sibling;
                var Ee = b(m, Q, cl.value, T);
                if (Ee === null) {
                    Q === null && (Q = Ql);
                    break
                }
                l && Q && Ee.alternate === null && t(m, Q), d = u(Ee, d, k), tl === null ? q = Ee : tl.sibling = Ee, tl = Ee, Q = Ql
            }
            if (cl.done) return e(m, Q), fl && Ue(m, k), q;
            if (Q === null) {
                for (; !cl.done; k++, cl = h.next()) cl = _(m, cl.value, T), cl !== null && (d = u(cl, d, k), tl === null ? q = cl : tl.sibling = cl, tl = cl);
                return fl && Ue(m, k), q
            }
            for (Q = a(Q); !cl.done; k++, cl = h.next()) cl = p(Q, m, k, cl.value, T), cl !== null && (l && cl.alternate !== null && Q.delete(cl.key === null ? k : cl.key), d = u(cl, d, k), tl === null ? q = cl : tl.sibling = cl, tl = cl);
            return l && Q.forEach(function (vh) {
                return t(m, vh)
            }), fl && Ue(m, k), q
        }

        function gl(m, d, h, T) {
            if (typeof h == "object" && h !== null && h.type === Y && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
                switch (h.$$typeof) {
                    case V:
                        l:{
                            for (var q = h.key; d !== null;) {
                                if (d.key === q) {
                                    if (q = h.type, q === Y) {
                                        if (d.tag === 7) {
                                            e(m, d.sibling), T = n(d, h.props.children), T.return = m, m = T;
                                            break l
                                        }
                                    } else if (d.elementType === q || typeof q == "object" && q !== null && q.$$typeof === Z && To(q) === d.type) {
                                        e(m, d.sibling), T = n(d, h.props), on(T, h), T.return = m, m = T;
                                        break l
                                    }
                                    e(m, d);
                                    break
                                } else t(m, d);
                                d = d.sibling
                            }
                            h.type === Y ? (T = De(h.props.children, m.mode, T, h.key), T.return = m, m = T) : (T = In(h.type, h.key, h.props, null, m.mode, T), on(T, h), T.return = m, m = T)
                        }
                        return i(m);
                    case bl:
                        l:{
                            for (q = h.key; d !== null;) {
                                if (d.key === q) if (d.tag === 4 && d.stateNode.containerInfo === h.containerInfo && d.stateNode.implementation === h.implementation) {
                                    e(m, d.sibling), T = n(d, h.children || []), T.return = m, m = T;
                                    break l
                                } else {
                                    e(m, d);
                                    break
                                } else t(m, d);
                                d = d.sibling
                            }
                            T = ji(h, m.mode, T), T.return = m, m = T
                        }
                        return i(m);
                    case Z:
                        return q = h._init, h = q(h._payload), gl(m, d, h, T)
                }
                if (Al(h)) return K(m, d, h, T);
                if (Nl(h)) {
                    if (q = Nl(h), typeof q != "function") throw Error(s(150));
                    return h = q.call(h), L(m, d, h, T)
                }
                if (typeof h.then == "function") return gl(m, d, gu(h), T);
                if (h.$$typeof === El) return gl(m, d, eu(m, h), T);
                yu(m, h)
            }
            return typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint" ? (h = "" + h, d !== null && d.tag === 6 ? (e(m, d.sibling), T = n(d, h), T.return = m, m = T) : (e(m, d), T = Oi(h, m.mode, T), T.return = m, m = T), i(m)) : e(m, d)
        }

        return function (m, d, h, T) {
            try {
                sn = 0;
                var q = gl(m, d, h, T);
                return ga = null, q
            } catch (Q) {
                if (Q === Pa || Q === nu) throw Q;
                var tl = ct(29, Q, null, m.mode);
                return tl.lanes = T, tl.return = m, tl
            } finally {
            }
        }
    }

    var ya = _o(!0), Mo = _o(!1), xt = M(null), Dt = null;

    function se(l) {
        var t = l.alternate;
        D(wl, wl.current & 1), D(xt, l), Dt === null && (t === null || ra.current !== null || t.memoizedState !== null) && (Dt = l)
    }

    function No(l) {
        if (l.tag === 22) {
            if (D(wl, wl.current), D(xt, l), Dt === null) {
                var t = l.alternate;
                t !== null && t.memoizedState !== null && (Dt = l)
            }
        } else oe()
    }

    function oe() {
        D(wl, wl.current), D(xt, xt.current)
    }

    function Vt(l) {
        C(xt), Dt === l && (Dt = null), C(wl)
    }

    var wl = M(0);

    function vu(l) {
        for (var t = l; t !== null;) {
            if (t.tag === 13) {
                var e = t.memoizedState;
                if (e !== null && (e = e.dehydrated, e === null || e.data === "$?" || Ic(e))) return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if ((t.flags & 128) !== 0) return t
            } else if (t.child !== null) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === l) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === l) return null;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        return null
    }

    function sc(l, t, e, a) {
        t = l.memoizedState, e = e(a, t), e = e == null ? t : R({}, t, e), l.memoizedState = e, l.lanes === 0 && (l.updateQueue.baseState = e)
    }

    var oc = {
        enqueueSetState: function (l, t, e) {
            l = l._reactInternals;
            var a = rt(), n = ie(a);
            n.payload = t, e != null && (n.callback = e), t = ce(l, n, a), t !== null && (dt(t, l, a), tn(t, l, a))
        }, enqueueReplaceState: function (l, t, e) {
            l = l._reactInternals;
            var a = rt(), n = ie(a);
            n.tag = 1, n.payload = t, e != null && (n.callback = e), t = ce(l, n, a), t !== null && (dt(t, l, a), tn(t, l, a))
        }, enqueueForceUpdate: function (l, t) {
            l = l._reactInternals;
            var e = rt(), a = ie(e);
            a.tag = 2, t != null && (a.callback = t), t = ce(l, a, e), t !== null && (dt(t, l, e), tn(t, l, e))
        }
    };

    function Oo(l, t, e, a, n, u, i) {
        return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, u, i) : t.prototype && t.prototype.isPureReactComponent ? !La(e, a) || !La(n, u) : !0
    }

    function jo(l, t, e, a) {
        l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(e, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(e, a), t.state !== l && oc.enqueueReplaceState(t, t.state, null)
    }

    function Ye(l, t) {
        var e = t;
        if ("ref" in t) {
            e = {};
            for (var a in t) a !== "ref" && (e[a] = t[a])
        }
        if (l = l.defaultProps) {
            e === t && (e = R({}, e));
            for (var n in l) e[n] === void 0 && (e[n] = l[n])
        }
        return e
    }

    var bu = typeof reportError == "function" ? reportError : function (l) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
                error: l
            });
            if (!window.dispatchEvent(t)) return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", l);
            return
        }
        console.error(l)
    };

    function Do(l) {
        bu(l)
    }

    function Ro(l) {
        console.error(l)
    }

    function Uo(l) {
        bu(l)
    }

    function pu(l, t) {
        try {
            var e = l.onUncaughtError;
            e(t.value, {componentStack: t.stack})
        } catch (a) {
            setTimeout(function () {
                throw a
            })
        }
    }

    function Ho(l, t, e) {
        try {
            var a = l.onCaughtError;
            a(e.value, {componentStack: e.stack, errorBoundary: t.tag === 1 ? t.stateNode : null})
        } catch (n) {
            setTimeout(function () {
                throw n
            })
        }
    }

    function rc(l, t, e) {
        return e = ie(e), e.tag = 3, e.payload = {element: null}, e.callback = function () {
            pu(l, t)
        }, e
    }

    function Co(l) {
        return l = ie(l), l.tag = 3, l
    }

    function wo(l, t, e, a) {
        var n = e.type.getDerivedStateFromError;
        if (typeof n == "function") {
            var u = a.value;
            l.payload = function () {
                return n(u)
            }, l.callback = function () {
                Ho(t, e, a)
            }
        }
        var i = e.stateNode;
        i !== null && typeof i.componentDidCatch == "function" && (l.callback = function () {
            Ho(t, e, a), typeof n != "function" && (ye === null ? ye = new Set([this]) : ye.add(this));
            var c = a.stack;
            this.componentDidCatch(a.value, {componentStack: c !== null ? c : ""})
        })
    }

    function v0(l, t, e, a, n) {
        if (e.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
            if (t = e.alternate, t !== null && $a(t, e, n, !0), e = xt.current, e !== null) {
                switch (e.tag) {
                    case 13:
                        return Dt === null ? Cc() : e.alternate === null && _l === 0 && (_l = 3), e.flags &= -257, e.flags |= 65536, e.lanes = n, a === Yi ? e.flags |= 16384 : (t = e.updateQueue, t === null ? e.updateQueue = new Set([a]) : t.add(a), qc(l, a, n)), !1;
                    case 22:
                        return e.flags |= 65536, a === Yi ? e.flags |= 16384 : (t = e.updateQueue, t === null ? (t = {
                            transitions: null,
                            markerInstances: null,
                            retryQueue: new Set([a])
                        }, e.updateQueue = t) : (e = t.retryQueue, e === null ? t.retryQueue = new Set([a]) : e.add(a)), qc(l, a, n)), !1
                }
                throw Error(s(435, e.tag))
            }
            return qc(l, a, n), Cc(), !1
        }
        if (fl) return t = xt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = n, a !== Ui && (l = Error(s(422), {cause: a}), Wa(yt(l, e)))) : (a !== Ui && (t = Error(s(423), {cause: a}), Wa(yt(t, e))), l = l.current.alternate, l.flags |= 65536, n &= -n, l.lanes |= n, a = yt(a, e), n = rc(l.stateNode, a, n), Zi(l, n), _l !== 4 && (_l = 2)), !1;
        var u = Error(s(520), {cause: a});
        if (u = yt(u, e), vn === null ? vn = [u] : vn.push(u), _l !== 4 && (_l = 2), t === null) return !0;
        a = yt(a, e), e = t;
        do {
            switch (e.tag) {
                case 3:
                    return e.flags |= 65536, l = n & -n, e.lanes |= l, l = rc(e.stateNode, a, l), Zi(e, l), !1;
                case 1:
                    if (t = e.type, u = e.stateNode, (e.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (ye === null || !ye.has(u)))) return e.flags |= 65536, n &= -n, e.lanes |= n, n = Co(n), wo(n, l, e, a), Zi(e, n), !1
            }
            e = e.return
        } while (e !== null);
        return !1
    }

    var qo = Error(s(461)), Yl = !1;

    function Vl(l, t, e, a) {
        t.child = l === null ? Mo(t, null, e, a) : ya(t, l.child, e, a)
    }

    function Bo(l, t, e, a, n) {
        e = e.render;
        var u = t.ref;
        if ("ref" in a) {
            var i = {};
            for (var c in a) c !== "ref" && (i[c] = a[c])
        } else i = a;
        return qe(t), a = Ji(l, t, e, i, u, n), c = Wi(), l !== null && !Yl ? ($i(l, t, n), Lt(l, t, n)) : (fl && c && Di(t), t.flags |= 1, Vl(l, t, a, n), t.child)
    }

    function Go(l, t, e, a, n) {
        if (l === null) {
            var u = e.type;
            return typeof u == "function" && !Ni(u) && u.defaultProps === void 0 && e.compare === null ? (t.tag = 15, t.type = u, Yo(l, t, u, a, n)) : (l = In(e.type, null, a, t, t.mode, n), l.ref = t.ref, l.return = t, t.child = l)
        }
        if (u = l.child, !pc(l, n)) {
            var i = u.memoizedProps;
            if (e = e.compare, e = e !== null ? e : La, e(i, a) && l.ref === t.ref) return Lt(l, t, n)
        }
        return t.flags |= 1, l = Bt(u, a), l.ref = t.ref, l.return = t, t.child = l
    }

    function Yo(l, t, e, a, n) {
        if (l !== null) {
            var u = l.memoizedProps;
            if (La(u, a) && l.ref === t.ref) if (Yl = !1, t.pendingProps = a = u, pc(l, n)) (l.flags & 131072) !== 0 && (Yl = !0); else return t.lanes = l.lanes, Lt(l, t, n)
        }
        return dc(l, t, e, a, n)
    }

    function Xo(l, t, e) {
        var a = t.pendingProps, n = a.children, u = l !== null ? l.memoizedState : null;
        if (a.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
                if (a = u !== null ? u.baseLanes | e : e, l !== null) {
                    for (n = t.child = l.child, u = 0; n !== null;) u = u | n.lanes | n.childLanes, n = n.sibling;
                    t.childLanes = u & ~a
                } else t.childLanes = 0, t.child = null;
                return Qo(l, t, a, e)
            }
            if ((e & 536870912) !== 0) t.memoizedState = {
                baseLanes: 0,
                cachePool: null
            }, l !== null && au(t, u !== null ? u.cachePool : null), u !== null ? Gs(t, u) : Li(), No(t); else return t.lanes = t.childLanes = 536870912, Qo(l, t, u !== null ? u.baseLanes | e : e, e)
        } else u !== null ? (au(t, u.cachePool), Gs(t, u), oe(), t.memoizedState = null) : (l !== null && au(t, null), Li(), oe());
        return Vl(l, t, n, e), t.child
    }

    function Qo(l, t, e, a) {
        var n = Gi();
        return n = n === null ? null : {parent: Cl._currentValue, pool: n}, t.memoizedState = {
            baseLanes: e,
            cachePool: n
        }, l !== null && au(t, null), Li(), No(t), l !== null && $a(l, t, a, !0), null
    }

    function xu(l, t) {
        var e = t.ref;
        if (e === null) l !== null && l.ref !== null && (t.flags |= 4194816); else {
            if (typeof e != "function" && typeof e != "object") throw Error(s(284));
            (l === null || l.ref !== e) && (t.flags |= 4194816)
        }
    }

    function dc(l, t, e, a, n) {
        return qe(t), e = Ji(l, t, e, a, void 0, n), a = Wi(), l !== null && !Yl ? ($i(l, t, n), Lt(l, t, n)) : (fl && a && Di(t), t.flags |= 1, Vl(l, t, e, n), t.child)
    }

    function Zo(l, t, e, a, n, u) {
        return qe(t), t.updateQueue = null, e = Xs(t, a, e, n), Ys(l), a = Wi(), l !== null && !Yl ? ($i(l, t, u), Lt(l, t, u)) : (fl && a && Di(t), t.flags |= 1, Vl(l, t, e, u), t.child)
    }

    function Vo(l, t, e, a, n) {
        if (qe(t), t.stateNode === null) {
            var u = ia, i = e.contextType;
            typeof i == "object" && i !== null && (u = Jl(i)), u = new e(a, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = oc, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = a, u.state = t.memoizedState, u.refs = {}, Xi(t), i = e.contextType, u.context = typeof i == "object" && i !== null ? Jl(i) : ia, u.state = t.memoizedState, i = e.getDerivedStateFromProps, typeof i == "function" && (sc(t, e, i, a), u.state = t.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (i = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), i !== u.state && oc.enqueueReplaceState(u, u.state, null), an(t, a, u, n), en(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !0
        } else if (l === null) {
            u = t.stateNode;
            var c = t.memoizedProps, o = Ye(e, c);
            u.props = o;
            var g = u.context, E = e.contextType;
            i = ia, typeof E == "object" && E !== null && (i = Jl(E));
            var _ = e.getDerivedStateFromProps;
            E = typeof _ == "function" || typeof u.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, E || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c || g !== i) && jo(t, u, a, i), ue = !1;
            var b = t.memoizedState;
            u.state = b, an(t, a, u, n), en(), g = t.memoizedState, c || b !== g || ue ? (typeof _ == "function" && (sc(t, e, _, a), g = t.memoizedState), (o = ue || Oo(t, e, o, a, b, g, i)) ? (E || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = g), u.props = a, u.state = g, u.context = i, a = o) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !1)
        } else {
            u = t.stateNode, Qi(l, t), i = t.memoizedProps, E = Ye(e, i), u.props = E, _ = t.pendingProps, b = u.context, g = e.contextType, o = ia, typeof g == "object" && g !== null && (o = Jl(g)), c = e.getDerivedStateFromProps, (g = typeof c == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== _ || b !== o) && jo(t, u, a, o), ue = !1, b = t.memoizedState, u.state = b, an(t, a, u, n), en();
            var p = t.memoizedState;
            i !== _ || b !== p || ue || l !== null && l.dependencies !== null && tu(l.dependencies) ? (typeof c == "function" && (sc(t, e, c, a), p = t.memoizedState), (E = ue || Oo(t, e, E, a, b, p, o) || l !== null && l.dependencies !== null && tu(l.dependencies)) ? (g || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, p, o), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(a, p, o)), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === l.memoizedProps && b === l.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && b === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = p), u.props = a, u.state = p, u.context = o, a = E) : (typeof u.componentDidUpdate != "function" || i === l.memoizedProps && b === l.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && b === l.memoizedState || (t.flags |= 1024), a = !1)
        }
        return u = a, xu(l, t), a = (t.flags & 128) !== 0, u || a ? (u = t.stateNode, e = a && typeof e.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, l !== null && a ? (t.child = ya(t, l.child, null, n), t.child = ya(t, null, e, n)) : Vl(l, t, e, n), t.memoizedState = u.state, l = t.child) : l = Lt(l, t, n), l
    }

    function Lo(l, t, e, a) {
        return Ja(), t.flags |= 256, Vl(l, t, e, a), t.child
    }

    var mc = {dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null};

    function hc(l) {
        return {baseLanes: l, cachePool: Ds()}
    }

    function gc(l, t, e) {
        return l = l !== null ? l.childLanes & ~e : 0, t && (l |= St), l
    }

    function ko(l, t, e) {
        var a = t.pendingProps, n = !1, u = (t.flags & 128) !== 0, i;
        if ((i = u) || (i = l !== null && l.memoizedState === null ? !1 : (wl.current & 2) !== 0), i && (n = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
            if (fl) {
                if (n ? se(t) : oe(), fl) {
                    var c = Tl, o;
                    if (o = c) {
                        l:{
                            for (o = c, c = jt; o.nodeType !== 8;) {
                                if (!c) {
                                    c = null;
                                    break l
                                }
                                if (o = Mt(o.nextSibling), o === null) {
                                    c = null;
                                    break l
                                }
                            }
                            c = o
                        }
                        c !== null ? (t.memoizedState = {
                            dehydrated: c,
                            treeContext: Re !== null ? {id: Gt, overflow: Yt} : null,
                            retryLane: 536870912,
                            hydrationErrors: null
                        }, o = ct(18, null, null, 0), o.stateNode = c, o.return = t, t.child = o, $l = t, Tl = null, o = !0) : o = !1
                    }
                    o || Ce(t)
                }
                if (c = t.memoizedState, c !== null && (c = c.dehydrated, c !== null)) return Ic(c) ? t.lanes = 32 : t.lanes = 536870912, null;
                Vt(t)
            }
            return c = a.children, a = a.fallback, n ? (oe(), n = t.mode, c = Su({
                mode: "hidden",
                children: c
            }, n), a = De(a, n, e, null), c.return = t, a.return = t, c.sibling = a, t.child = c, n = t.child, n.memoizedState = hc(e), n.childLanes = gc(l, i, e), t.memoizedState = mc, a) : (se(t), yc(t, c))
        }
        if (o = l.memoizedState, o !== null && (c = o.dehydrated, c !== null)) {
            if (u) t.flags & 256 ? (se(t), t.flags &= -257, t = vc(l, t, e)) : t.memoizedState !== null ? (oe(), t.child = l.child, t.flags |= 128, t = null) : (oe(), n = a.fallback, c = t.mode, a = Su({
                mode: "visible",
                children: a.children
            }, c), n = De(n, c, e, null), n.flags |= 2, a.return = t, n.return = t, a.sibling = n, t.child = a, ya(t, l.child, null, e), a = t.child, a.memoizedState = hc(e), a.childLanes = gc(l, i, e), t.memoizedState = mc, t = n); else if (se(t), Ic(c)) {
                if (i = c.nextSibling && c.nextSibling.dataset, i) var g = i.dgst;
                i = g, a = Error(s(419)), a.stack = "", a.digest = i, Wa({
                    value: a,
                    source: null,
                    stack: null
                }), t = vc(l, t, e)
            } else if (Yl || $a(l, t, e, !1), i = (e & l.childLanes) !== 0, Yl || i) {
                if (i = pl, i !== null && (a = e & -e, a = (a & 42) !== 0 ? 1 : Pu(a), a = (a & (i.suspendedLanes | e)) !== 0 ? 0 : a, a !== 0 && a !== o.retryLane)) throw o.retryLane = a, ua(l, a), dt(i, l, a), qo;
                c.data === "$?" || Cc(), t = vc(l, t, e)
            } else c.data === "$?" ? (t.flags |= 192, t.child = l.child, t = null) : (l = o.treeContext, Tl = Mt(c.nextSibling), $l = t, fl = !0, He = null, jt = !1, l !== null && (bt[pt++] = Gt, bt[pt++] = Yt, bt[pt++] = Re, Gt = l.id, Yt = l.overflow, Re = t), t = yc(t, a.children), t.flags |= 4096);
            return t
        }
        return n ? (oe(), n = a.fallback, c = t.mode, o = l.child, g = o.sibling, a = Bt(o, {
            mode: "hidden",
            children: a.children
        }), a.subtreeFlags = o.subtreeFlags & 65011712, g !== null ? n = Bt(g, n) : (n = De(n, c, e, null), n.flags |= 2), n.return = t, a.return = t, a.sibling = n, t.child = a, a = n, n = t.child, c = l.child.memoizedState, c === null ? c = hc(e) : (o = c.cachePool, o !== null ? (g = Cl._currentValue, o = o.parent !== g ? {
            parent: g,
            pool: g
        } : o) : o = Ds(), c = {
            baseLanes: c.baseLanes | e,
            cachePool: o
        }), n.memoizedState = c, n.childLanes = gc(l, i, e), t.memoizedState = mc, a) : (se(t), e = l.child, l = e.sibling, e = Bt(e, {
            mode: "visible",
            children: a.children
        }), e.return = t, e.sibling = null, l !== null && (i = t.deletions, i === null ? (t.deletions = [l], t.flags |= 16) : i.push(l)), t.child = e, t.memoizedState = null, e)
    }

    function yc(l, t) {
        return t = Su({mode: "visible", children: t}, l.mode), t.return = l, l.child = t
    }

    function Su(l, t) {
        return l = ct(22, l, null, t), l.lanes = 0, l.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }, l
    }

    function vc(l, t, e) {
        return ya(t, l.child, null, e), l = yc(t, t.pendingProps.children), l.flags |= 2, t.memoizedState = null, l
    }

    function Ko(l, t, e) {
        l.lanes |= t;
        var a = l.alternate;
        a !== null && (a.lanes |= t), Ci(l.return, t, e)
    }

    function bc(l, t, e, a, n) {
        var u = l.memoizedState;
        u === null ? l.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: a,
            tail: e,
            tailMode: n
        } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = a, u.tail = e, u.tailMode = n)
    }

    function Jo(l, t, e) {
        var a = t.pendingProps, n = a.revealOrder, u = a.tail;
        if (Vl(l, t, a.children, e), a = wl.current, (a & 2) !== 0) a = a & 1 | 2, t.flags |= 128; else {
            if (l !== null && (l.flags & 128) !== 0) l:for (l = t.child; l !== null;) {
                if (l.tag === 13) l.memoizedState !== null && Ko(l, e, t); else if (l.tag === 19) Ko(l, e, t); else if (l.child !== null) {
                    l.child.return = l, l = l.child;
                    continue
                }
                if (l === t) break l;
                for (; l.sibling === null;) {
                    if (l.return === null || l.return === t) break l;
                    l = l.return
                }
                l.sibling.return = l.return, l = l.sibling
            }
            a &= 1
        }
        switch (D(wl, a), n) {
            case"forwards":
                for (e = t.child, n = null; e !== null;) l = e.alternate, l !== null && vu(l) === null && (n = e), e = e.sibling;
                e = n, e === null ? (n = t.child, t.child = null) : (n = e.sibling, e.sibling = null), bc(t, !1, n, e, u);
                break;
            case"backwards":
                for (e = null, n = t.child, t.child = null; n !== null;) {
                    if (l = n.alternate, l !== null && vu(l) === null) {
                        t.child = n;
                        break
                    }
                    l = n.sibling, n.sibling = e, e = n, n = l
                }
                bc(t, !0, e, null, u);
                break;
            case"together":
                bc(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
        }
        return t.child
    }

    function Lt(l, t, e) {
        if (l !== null && (t.dependencies = l.dependencies), ge |= t.lanes, (e & t.childLanes) === 0) if (l !== null) {
            if ($a(l, t, e, !1), (e & t.childLanes) === 0) return null
        } else return null;
        if (l !== null && t.child !== l.child) throw Error(s(153));
        if (t.child !== null) {
            for (l = t.child, e = Bt(l, l.pendingProps), t.child = e, e.return = t; l.sibling !== null;) l = l.sibling, e = e.sibling = Bt(l, l.pendingProps), e.return = t;
            e.sibling = null
        }
        return t.child
    }

    function pc(l, t) {
        return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && tu(l)))
    }

    function b0(l, t, e) {
        switch (t.tag) {
            case 3:
                yl(t, t.stateNode.containerInfo), ne(t, Cl, l.memoizedState.cache), Ja();
                break;
            case 27:
            case 5:
                It(t);
                break;
            case 4:
                yl(t, t.stateNode.containerInfo);
                break;
            case 10:
                ne(t, t.type, t.memoizedProps.value);
                break;
            case 13:
                var a = t.memoizedState;
                if (a !== null) return a.dehydrated !== null ? (se(t), t.flags |= 128, null) : (e & t.child.childLanes) !== 0 ? ko(l, t, e) : (se(t), l = Lt(l, t, e), l !== null ? l.sibling : null);
                se(t);
                break;
            case 19:
                var n = (l.flags & 128) !== 0;
                if (a = (e & t.childLanes) !== 0, a || ($a(l, t, e, !1), a = (e & t.childLanes) !== 0), n) {
                    if (a) return Jo(l, t, e);
                    t.flags |= 128
                }
                if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), D(wl, wl.current), a) break;
                return null;
            case 22:
            case 23:
                return t.lanes = 0, Xo(l, t, e);
            case 24:
                ne(t, Cl, l.memoizedState.cache)
        }
        return Lt(l, t, e)
    }

    function Wo(l, t, e) {
        if (l !== null) if (l.memoizedProps !== t.pendingProps) Yl = !0; else {
            if (!pc(l, e) && (t.flags & 128) === 0) return Yl = !1, b0(l, t, e);
            Yl = (l.flags & 131072) !== 0
        } else Yl = !1, fl && (t.flags & 1048576) !== 0 && Es(t, lu, t.index);
        switch (t.lanes = 0, t.tag) {
            case 16:
                l:{
                    l = t.pendingProps;
                    var a = t.elementType, n = a._init;
                    if (a = n(a._payload), t.type = a, typeof a == "function") Ni(a) ? (l = Ye(a, l), t.tag = 1, t = Vo(null, t, a, l, e)) : (t.tag = 0, t = dc(null, t, a, l, e)); else {
                        if (a != null) {
                            if (n = a.$$typeof, n === Bl) {
                                t.tag = 11, t = Bo(null, t, a, l, e);
                                break l
                            } else if (n === Hl) {
                                t.tag = 14, t = Go(null, t, a, l, e);
                                break l
                            }
                        }
                        throw t = Et(a) || a, Error(s(306, t, ""))
                    }
                }
                return t;
            case 0:
                return dc(l, t, t.type, t.pendingProps, e);
            case 1:
                return a = t.type, n = Ye(a, t.pendingProps), Vo(l, t, a, n, e);
            case 3:
                l:{
                    if (yl(t, t.stateNode.containerInfo), l === null) throw Error(s(387));
                    a = t.pendingProps;
                    var u = t.memoizedState;
                    n = u.element, Qi(l, t), an(t, a, null, e);
                    var i = t.memoizedState;
                    if (a = i.cache, ne(t, Cl, a), a !== u.cache && wi(t, [Cl], e, !0), en(), a = i.element, u.isDehydrated) if (u = {
                        element: a,
                        isDehydrated: !1,
                        cache: i.cache
                    }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
                        t = Lo(l, t, a, e);
                        break l
                    } else if (a !== n) {
                        n = yt(Error(s(424)), t), Wa(n), t = Lo(l, t, a, e);
                        break l
                    } else {
                        switch (l = t.stateNode.containerInfo, l.nodeType) {
                            case 9:
                                l = l.body;
                                break;
                            default:
                                l = l.nodeName === "HTML" ? l.ownerDocument.body : l
                        }
                        for (Tl = Mt(l.firstChild), $l = t, fl = !0, He = null, jt = !0, e = Mo(t, null, a, e), t.child = e; e;) e.flags = e.flags & -3 | 4096, e = e.sibling
                    } else {
                        if (Ja(), a === n) {
                            t = Lt(l, t, e);
                            break l
                        }
                        Vl(l, t, a, e)
                    }
                    t = t.child
                }
                return t;
            case 26:
                return xu(l, t), l === null ? (e = Pr(t.type, null, t.pendingProps, null)) ? t.memoizedState = e : fl || (e = t.type, l = t.pendingProps, a = Cu(J.current).createElement(e), a[Kl] = t, a[Il] = l, kl(a, e, l), Gl(a), t.stateNode = a) : t.memoizedState = Pr(t.type, l.memoizedProps, t.pendingProps, l.memoizedState), null;
            case 27:
                return It(t), l === null && fl && (a = t.stateNode = $r(t.type, t.pendingProps, J.current), $l = t, jt = !0, n = Tl, pe(t.type) ? (Pc = n, Tl = Mt(a.firstChild)) : Tl = n), Vl(l, t, t.pendingProps.children, e), xu(l, t), l === null && (t.flags |= 4194304), t.child;
            case 5:
                return l === null && fl && ((n = a = Tl) && (a = k0(a, t.type, t.pendingProps, jt), a !== null ? (t.stateNode = a, $l = t, Tl = Mt(a.firstChild), jt = !1, n = !0) : n = !1), n || Ce(t)), It(t), n = t.type, u = t.pendingProps, i = l !== null ? l.memoizedProps : null, a = u.children, Wc(n, u) ? a = null : i !== null && Wc(n, i) && (t.flags |= 32), t.memoizedState !== null && (n = Ji(l, t, o0, null, null, e), _n._currentValue = n), xu(l, t), Vl(l, t, a, e), t.child;
            case 6:
                return l === null && fl && ((l = e = Tl) && (e = K0(e, t.pendingProps, jt), e !== null ? (t.stateNode = e, $l = t, Tl = null, l = !0) : l = !1), l || Ce(t)), null;
            case 13:
                return ko(l, t, e);
            case 4:
                return yl(t, t.stateNode.containerInfo), a = t.pendingProps, l === null ? t.child = ya(t, null, a, e) : Vl(l, t, a, e), t.child;
            case 11:
                return Bo(l, t, t.type, t.pendingProps, e);
            case 7:
                return Vl(l, t, t.pendingProps, e), t.child;
            case 8:
                return Vl(l, t, t.pendingProps.children, e), t.child;
            case 12:
                return Vl(l, t, t.pendingProps.children, e), t.child;
            case 10:
                return a = t.pendingProps, ne(t, t.type, a.value), Vl(l, t, a.children, e), t.child;
            case 9:
                return n = t.type._context, a = t.pendingProps.children, qe(t), n = Jl(n), a = a(n), t.flags |= 1, Vl(l, t, a, e), t.child;
            case 14:
                return Go(l, t, t.type, t.pendingProps, e);
            case 15:
                return Yo(l, t, t.type, t.pendingProps, e);
            case 19:
                return Jo(l, t, e);
            case 31:
                return a = t.pendingProps, e = t.mode, a = {
                    mode: a.mode,
                    children: a.children
                }, l === null ? (e = Su(a, e), e.ref = t.ref, t.child = e, e.return = t, t = e) : (e = Bt(l.child, a), e.ref = t.ref, t.child = e, e.return = t, t = e), t;
            case 22:
                return Xo(l, t, e);
            case 24:
                return qe(t), a = Jl(Cl), l === null ? (n = Gi(), n === null && (n = pl, u = qi(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= e), n = u), t.memoizedState = {
                    parent: a,
                    cache: n
                }, Xi(t), ne(t, Cl, n)) : ((l.lanes & e) !== 0 && (Qi(l, t), an(t, null, null, e), en()), n = l.memoizedState, u = t.memoizedState, n.parent !== a ? (n = {
                    parent: a,
                    cache: a
                }, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), ne(t, Cl, a)) : (a = u.cache, ne(t, Cl, a), a !== n.cache && wi(t, [Cl], e, !0))), Vl(l, t, t.pendingProps.children, e), t.child;
            case 29:
                throw t.pendingProps
        }
        throw Error(s(156, t.tag))
    }

    function kt(l) {
        l.flags |= 4
    }

    function $o(l, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) l.flags &= -16777217; else if (l.flags |= 16777216, !nd(t)) {
            if (t = xt.current, t !== null && ((ul & 4194048) === ul ? Dt !== null : (ul & 62914560) !== ul && (ul & 536870912) === 0 || t !== Dt)) throw ln = Yi, Rs;
            l.flags |= 8192
        }
    }

    function Au(l, t) {
        t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? Mf() : 536870912, l.lanes |= t, xa |= t)
    }

    function rn(l, t) {
        if (!fl) switch (l.tailMode) {
            case"hidden":
                t = l.tail;
                for (var e = null; t !== null;) t.alternate !== null && (e = t), t = t.sibling;
                e === null ? l.tail = null : e.sibling = null;
                break;
            case"collapsed":
                e = l.tail;
                for (var a = null; e !== null;) e.alternate !== null && (a = e), e = e.sibling;
                a === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : a.sibling = null
        }
    }

    function zl(l) {
        var t = l.alternate !== null && l.alternate.child === l.child, e = 0, a = 0;
        if (t) for (var n = l.child; n !== null;) e |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = l, n = n.sibling; else for (n = l.child; n !== null;) e |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = l, n = n.sibling;
        return l.subtreeFlags |= a, l.childLanes = e, t
    }

    function p0(l, t, e) {
        var a = t.pendingProps;
        switch (Ri(t), t.tag) {
            case 31:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return zl(t), null;
            case 1:
                return zl(t), null;
            case 3:
                return e = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Qt(Cl), at(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (l === null || l.child === null) && (Ka(t) ? kt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ms())), zl(t), null;
            case 26:
                return e = t.memoizedState, l === null ? (kt(t), e !== null ? (zl(t), $o(t, e)) : (zl(t), t.flags &= -16777217)) : e ? e !== l.memoizedState ? (kt(t), zl(t), $o(t, e)) : (zl(t), t.flags &= -16777217) : (l.memoizedProps !== a && kt(t), zl(t), t.flags &= -16777217), null;
            case 27:
                Pt(t), e = J.current;
                var n = t.type;
                if (l !== null && t.stateNode != null) l.memoizedProps !== a && kt(t); else {
                    if (!a) {
                        if (t.stateNode === null) throw Error(s(166));
                        return zl(t), null
                    }
                    l = w.current, Ka(t) ? Ts(t) : (l = $r(n, a, e), t.stateNode = l, kt(t))
                }
                return zl(t), null;
            case 5:
                if (Pt(t), e = t.type, l !== null && t.stateNode != null) l.memoizedProps !== a && kt(t); else {
                    if (!a) {
                        if (t.stateNode === null) throw Error(s(166));
                        return zl(t), null
                    }
                    if (l = w.current, Ka(t)) Ts(t); else {
                        switch (n = Cu(J.current), l) {
                            case 1:
                                l = n.createElementNS("http://www.w3.org/2000/svg", e);
                                break;
                            case 2:
                                l = n.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                                break;
                            default:
                                switch (e) {
                                    case"svg":
                                        l = n.createElementNS("http://www.w3.org/2000/svg", e);
                                        break;
                                    case"math":
                                        l = n.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                                        break;
                                    case"script":
                                        l = n.createElement("div"), l.innerHTML = "<script><\/script>", l = l.removeChild(l.firstChild);
                                        break;
                                    case"select":
                                        l = typeof a.is == "string" ? n.createElement("select", {is: a.is}) : n.createElement("select"), a.multiple ? l.multiple = !0 : a.size && (l.size = a.size);
                                        break;
                                    default:
                                        l = typeof a.is == "string" ? n.createElement(e, {is: a.is}) : n.createElement(e)
                                }
                        }
                        l[Kl] = t, l[Il] = a;
                        l:for (n = t.child; n !== null;) {
                            if (n.tag === 5 || n.tag === 6) l.appendChild(n.stateNode); else if (n.tag !== 4 && n.tag !== 27 && n.child !== null) {
                                n.child.return = n, n = n.child;
                                continue
                            }
                            if (n === t) break l;
                            for (; n.sibling === null;) {
                                if (n.return === null || n.return === t) break l;
                                n = n.return
                            }
                            n.sibling.return = n.return, n = n.sibling
                        }
                        t.stateNode = l;
                        l:switch (kl(l, e, a), e) {
                            case"button":
                            case"input":
                            case"select":
                            case"textarea":
                                l = !!a.autoFocus;
                                break l;
                            case"img":
                                l = !0;
                                break l;
                            default:
                                l = !1
                        }
                        l && kt(t)
                    }
                }
                return zl(t), t.flags &= -16777217, null;
            case 6:
                if (l && t.stateNode != null) l.memoizedProps !== a && kt(t); else {
                    if (typeof a != "string" && t.stateNode === null) throw Error(s(166));
                    if (l = J.current, Ka(t)) {
                        if (l = t.stateNode, e = t.memoizedProps, a = null, n = $l, n !== null) switch (n.tag) {
                            case 27:
                            case 5:
                                a = n.memoizedProps
                        }
                        l[Kl] = t, l = !!(l.nodeValue === e || a !== null && a.suppressHydrationWarning === !0 || Zr(l.nodeValue, e)), l || Ce(t)
                    } else l = Cu(l).createTextNode(a), l[Kl] = t, t.stateNode = l
                }
                return zl(t), null;
            case 13:
                if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
                    if (n = Ka(t), a !== null && a.dehydrated !== null) {
                        if (l === null) {
                            if (!n) throw Error(s(318));
                            if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(s(317));
                            n[Kl] = t
                        } else Ja(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                        zl(t), n = !1
                    } else n = Ms(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = n), n = !0;
                    if (!n) return t.flags & 256 ? (Vt(t), t) : (Vt(t), null)
                }
                if (Vt(t), (t.flags & 128) !== 0) return t.lanes = e, t;
                if (e = a !== null, l = l !== null && l.memoizedState !== null, e) {
                    a = t.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool);
                    var u = null;
                    a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048)
                }
                return e !== l && e && (t.child.flags |= 8192), Au(t, t.updateQueue), zl(t), null;
            case 4:
                return at(), l === null && Vc(t.stateNode.containerInfo), zl(t), null;
            case 10:
                return Qt(t.type), zl(t), null;
            case 19:
                if (C(wl), n = t.memoizedState, n === null) return zl(t), null;
                if (a = (t.flags & 128) !== 0, u = n.rendering, u === null) if (a) rn(n, !1); else {
                    if (_l !== 0 || l !== null && (l.flags & 128) !== 0) for (l = t.child; l !== null;) {
                        if (u = vu(l), u !== null) {
                            for (t.flags |= 128, rn(n, !1), l = u.updateQueue, t.updateQueue = l, Au(t, l), t.subtreeFlags = 0, l = e, e = t.child; e !== null;) zs(e, l), e = e.sibling;
                            return D(wl, wl.current & 1 | 2), t.child
                        }
                        l = l.sibling
                    }
                    n.tail !== null && Ot() > Tu && (t.flags |= 128, a = !0, rn(n, !1), t.lanes = 4194304)
                } else {
                    if (!a) if (l = vu(u), l !== null) {
                        if (t.flags |= 128, a = !0, l = l.updateQueue, t.updateQueue = l, Au(t, l), rn(n, !0), n.tail === null && n.tailMode === "hidden" && !u.alternate && !fl) return zl(t), null
                    } else 2 * Ot() - n.renderingStartTime > Tu && e !== 536870912 && (t.flags |= 128, a = !0, rn(n, !1), t.lanes = 4194304);
                    n.isBackwards ? (u.sibling = t.child, t.child = u) : (l = n.last, l !== null ? l.sibling = u : t.child = u, n.last = u)
                }
                return n.tail !== null ? (t = n.tail, n.rendering = t, n.tail = t.sibling, n.renderingStartTime = Ot(), t.sibling = null, l = wl.current, D(wl, a ? l & 1 | 2 : l & 1), t) : (zl(t), null);
            case 22:
            case 23:
                return Vt(t), ki(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (e & 536870912) !== 0 && (t.flags & 128) === 0 && (zl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : zl(t), e = t.updateQueue, e !== null && Au(t, e.retryQueue), e = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== e && (t.flags |= 2048), l !== null && C(Be), null;
            case 24:
                return e = null, l !== null && (e = l.memoizedState.cache), t.memoizedState.cache !== e && (t.flags |= 2048), Qt(Cl), zl(t), null;
            case 25:
                return null;
            case 30:
                return null
        }
        throw Error(s(156, t.tag))
    }

    function x0(l, t) {
        switch (Ri(t), t.tag) {
            case 1:
                return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
            case 3:
                return Qt(Cl), at(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
            case 26:
            case 27:
            case 5:
                return Pt(t), null;
            case 13:
                if (Vt(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
                    if (t.alternate === null) throw Error(s(340));
                    Ja()
                }
                return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
            case 19:
                return C(wl), null;
            case 4:
                return at(), null;
            case 10:
                return Qt(t.type), null;
            case 22:
            case 23:
                return Vt(t), ki(), l !== null && C(Be), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
            case 24:
                return Qt(Cl), null;
            case 25:
                return null;
            default:
                return null
        }
    }

    function Fo(l, t) {
        switch (Ri(t), t.tag) {
            case 3:
                Qt(Cl), at();
                break;
            case 26:
            case 27:
            case 5:
                Pt(t);
                break;
            case 4:
                at();
                break;
            case 13:
                Vt(t);
                break;
            case 19:
                C(wl);
                break;
            case 10:
                Qt(t.type);
                break;
            case 22:
            case 23:
                Vt(t), ki(), l !== null && C(Be);
                break;
            case 24:
                Qt(Cl)
        }
    }

    function dn(l, t) {
        try {
            var e = t.updateQueue, a = e !== null ? e.lastEffect : null;
            if (a !== null) {
                var n = a.next;
                e = n;
                do {
                    if ((e.tag & l) === l) {
                        a = void 0;
                        var u = e.create, i = e.inst;
                        a = u(), i.destroy = a
                    }
                    e = e.next
                } while (e !== n)
            }
        } catch (c) {
            vl(t, t.return, c)
        }
    }

    function re(l, t, e) {
        try {
            var a = t.updateQueue, n = a !== null ? a.lastEffect : null;
            if (n !== null) {
                var u = n.next;
                a = u;
                do {
                    if ((a.tag & l) === l) {
                        var i = a.inst, c = i.destroy;
                        if (c !== void 0) {
                            i.destroy = void 0, n = t;
                            var o = e, g = c;
                            try {
                                g()
                            } catch (E) {
                                vl(n, o, E)
                            }
                        }
                    }
                    a = a.next
                } while (a !== u)
            }
        } catch (E) {
            vl(t, t.return, E)
        }
    }

    function Io(l) {
        var t = l.updateQueue;
        if (t !== null) {
            var e = l.stateNode;
            try {
                Bs(t, e)
            } catch (a) {
                vl(l, l.return, a)
            }
        }
    }

    function Po(l, t, e) {
        e.props = Ye(l.type, l.memoizedProps), e.state = l.memoizedState;
        try {
            e.componentWillUnmount()
        } catch (a) {
            vl(l, t, a)
        }
    }

    function mn(l, t) {
        try {
            var e = l.ref;
            if (e !== null) {
                switch (l.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var a = l.stateNode;
                        break;
                    case 30:
                        a = l.stateNode;
                        break;
                    default:
                        a = l.stateNode
                }
                typeof e == "function" ? l.refCleanup = e(a) : e.current = a
            }
        } catch (n) {
            vl(l, t, n)
        }
    }

    function Rt(l, t) {
        var e = l.ref, a = l.refCleanup;
        if (e !== null) if (typeof a == "function") try {
            a()
        } catch (n) {
            vl(l, t, n)
        } finally {
            l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null)
        } else if (typeof e == "function") try {
            e(null)
        } catch (n) {
            vl(l, t, n)
        } else e.current = null
    }

    function lr(l) {
        var t = l.type, e = l.memoizedProps, a = l.stateNode;
        try {
            l:switch (t) {
                case"button":
                case"input":
                case"select":
                case"textarea":
                    e.autoFocus && a.focus();
                    break l;
                case"img":
                    e.src ? a.src = e.src : e.srcSet && (a.srcset = e.srcSet)
            }
        } catch (n) {
            vl(l, l.return, n)
        }
    }

    function xc(l, t, e) {
        try {
            var a = l.stateNode;
            X0(a, l.type, e, t), a[Il] = t
        } catch (n) {
            vl(l, l.return, n)
        }
    }

    function tr(l) {
        return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && pe(l.type) || l.tag === 4
    }

    function Sc(l) {
        l:for (; ;) {
            for (; l.sibling === null;) {
                if (l.return === null || tr(l.return)) return null;
                l = l.return
            }
            for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18;) {
                if (l.tag === 27 && pe(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
                l.child.return = l, l = l.child
            }
            if (!(l.flags & 2)) return l.stateNode
        }
    }

    function Ac(l, t, e) {
        var a = l.tag;
        if (a === 5 || a === 6) l = l.stateNode, t ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(l, t) : (t = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, t.appendChild(l), e = e._reactRootContainer, e != null || t.onclick !== null || (t.onclick = Hu)); else if (a !== 4 && (a === 27 && pe(l.type) && (e = l.stateNode, t = null), l = l.child, l !== null)) for (Ac(l, t, e), l = l.sibling; l !== null;) Ac(l, t, e), l = l.sibling
    }

    function zu(l, t, e) {
        var a = l.tag;
        if (a === 5 || a === 6) l = l.stateNode, t ? e.insertBefore(l, t) : e.appendChild(l); else if (a !== 4 && (a === 27 && pe(l.type) && (e = l.stateNode), l = l.child, l !== null)) for (zu(l, t, e), l = l.sibling; l !== null;) zu(l, t, e), l = l.sibling
    }

    function er(l) {
        var t = l.stateNode, e = l.memoizedProps;
        try {
            for (var a = l.type, n = t.attributes; n.length;) t.removeAttributeNode(n[0]);
            kl(t, a, e), t[Kl] = l, t[Il] = e
        } catch (u) {
            vl(l, l.return, u)
        }
    }

    var Kt = !1, jl = !1, zc = !1, ar = typeof WeakSet == "function" ? WeakSet : Set, Xl = null;

    function S0(l, t) {
        if (l = l.containerInfo, Kc = Xu, l = ms(l), Si(l)) {
            if ("selectionStart" in l) var e = {start: l.selectionStart, end: l.selectionEnd}; else l:{
                e = (e = l.ownerDocument) && e.defaultView || window;
                var a = e.getSelection && e.getSelection();
                if (a && a.rangeCount !== 0) {
                    e = a.anchorNode;
                    var n = a.anchorOffset, u = a.focusNode;
                    a = a.focusOffset;
                    try {
                        e.nodeType, u.nodeType
                    } catch {
                        e = null;
                        break l
                    }
                    var i = 0, c = -1, o = -1, g = 0, E = 0, _ = l, b = null;
                    t:for (; ;) {
                        for (var p; _ !== e || n !== 0 && _.nodeType !== 3 || (c = i + n), _ !== u || a !== 0 && _.nodeType !== 3 || (o = i + a), _.nodeType === 3 && (i += _.nodeValue.length), (p = _.firstChild) !== null;) b = _, _ = p;
                        for (; ;) {
                            if (_ === l) break t;
                            if (b === e && ++g === n && (c = i), b === u && ++E === a && (o = i), (p = _.nextSibling) !== null) break;
                            _ = b, b = _.parentNode
                        }
                        _ = p
                    }
                    e = c === -1 || o === -1 ? null : {start: c, end: o}
                } else e = null
            }
            e = e || {start: 0, end: 0}
        } else e = null;
        for (Jc = {
            focusedElem: l,
            selectionRange: e
        }, Xu = !1, Xl = t; Xl !== null;) if (t = Xl, l = t.child, (t.subtreeFlags & 1024) !== 0 && l !== null) l.return = t, Xl = l; else for (; Xl !== null;) {
            switch (t = Xl, u = t.alternate, l = t.flags, t.tag) {
                case 0:
                    break;
                case 11:
                case 15:
                    break;
                case 1:
                    if ((l & 1024) !== 0 && u !== null) {
                        l = void 0, e = t, n = u.memoizedProps, u = u.memoizedState, a = e.stateNode;
                        try {
                            var K = Ye(e.type, n, e.elementType === e.type);
                            l = a.getSnapshotBeforeUpdate(K, u), a.__reactInternalSnapshotBeforeUpdate = l
                        } catch (L) {
                            vl(e, e.return, L)
                        }
                    }
                    break;
                case 3:
                    if ((l & 1024) !== 0) {
                        if (l = t.stateNode.containerInfo, e = l.nodeType, e === 9) Fc(l); else if (e === 1) switch (l.nodeName) {
                            case"HEAD":
                            case"HTML":
                            case"BODY":
                                Fc(l);
                                break;
                            default:
                                l.textContent = ""
                        }
                    }
                    break;
                case 5:
                case 26:
                case 27:
                case 6:
                case 4:
                case 17:
                    break;
                default:
                    if ((l & 1024) !== 0) throw Error(s(163))
            }
            if (l = t.sibling, l !== null) {
                l.return = t.return, Xl = l;
                break
            }
            Xl = t.return
        }
    }

    function nr(l, t, e) {
        var a = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 15:
                de(l, e), a & 4 && dn(5, e);
                break;
            case 1:
                if (de(l, e), a & 4) if (l = e.stateNode, t === null) try {
                    l.componentDidMount()
                } catch (i) {
                    vl(e, e.return, i)
                } else {
                    var n = Ye(e.type, t.memoizedProps);
                    t = t.memoizedState;
                    try {
                        l.componentDidUpdate(n, t, l.__reactInternalSnapshotBeforeUpdate)
                    } catch (i) {
                        vl(e, e.return, i)
                    }
                }
                a & 64 && Io(e), a & 512 && mn(e, e.return);
                break;
            case 3:
                if (de(l, e), a & 64 && (l = e.updateQueue, l !== null)) {
                    if (t = null, e.child !== null) switch (e.child.tag) {
                        case 27:
                        case 5:
                            t = e.child.stateNode;
                            break;
                        case 1:
                            t = e.child.stateNode
                    }
                    try {
                        Bs(l, t)
                    } catch (i) {
                        vl(e, e.return, i)
                    }
                }
                break;
            case 27:
                t === null && a & 4 && er(e);
            case 26:
            case 5:
                de(l, e), t === null && a & 4 && lr(e), a & 512 && mn(e, e.return);
                break;
            case 12:
                de(l, e);
                break;
            case 13:
                de(l, e), a & 4 && cr(l, e), a & 64 && (l = e.memoizedState, l !== null && (l = l.dehydrated, l !== null && (e = j0.bind(null, e), J0(l, e))));
                break;
            case 22:
                if (a = e.memoizedState !== null || Kt, !a) {
                    t = t !== null && t.memoizedState !== null || jl, n = Kt;
                    var u = jl;
                    Kt = a, (jl = t) && !u ? me(l, e, (e.subtreeFlags & 8772) !== 0) : de(l, e), Kt = n, jl = u
                }
                break;
            case 30:
                break;
            default:
                de(l, e)
        }
    }

    function ur(l) {
        var t = l.alternate;
        t !== null && (l.alternate = null, ur(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && ei(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null
    }

    var Sl = null, tt = !1;

    function Jt(l, t, e) {
        for (e = e.child; e !== null;) ir(l, t, e), e = e.sibling
    }

    function ir(l, t, e) {
        if (nt && typeof nt.onCommitFiberUnmount == "function") try {
            nt.onCommitFiberUnmount(Ua, e)
        } catch {
        }
        switch (e.tag) {
            case 26:
                jl || Rt(e, t), Jt(l, t, e), e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode, e.parentNode.removeChild(e));
                break;
            case 27:
                jl || Rt(e, t);
                var a = Sl, n = tt;
                pe(e.type) && (Sl = e.stateNode, tt = !1), Jt(l, t, e), An(e.stateNode), Sl = a, tt = n;
                break;
            case 5:
                jl || Rt(e, t);
            case 6:
                if (a = Sl, n = tt, Sl = null, Jt(l, t, e), Sl = a, tt = n, Sl !== null) if (tt) try {
                    (Sl.nodeType === 9 ? Sl.body : Sl.nodeName === "HTML" ? Sl.ownerDocument.body : Sl).removeChild(e.stateNode)
                } catch (u) {
                    vl(e, t, u)
                } else try {
                    Sl.removeChild(e.stateNode)
                } catch (u) {
                    vl(e, t, u)
                }
                break;
            case 18:
                Sl !== null && (tt ? (l = Sl, Jr(l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.stateNode), jn(l)) : Jr(Sl, e.stateNode));
                break;
            case 4:
                a = Sl, n = tt, Sl = e.stateNode.containerInfo, tt = !0, Jt(l, t, e), Sl = a, tt = n;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                jl || re(2, e, t), jl || re(4, e, t), Jt(l, t, e);
                break;
            case 1:
                jl || (Rt(e, t), a = e.stateNode, typeof a.componentWillUnmount == "function" && Po(e, t, a)), Jt(l, t, e);
                break;
            case 21:
                Jt(l, t, e);
                break;
            case 22:
                jl = (a = jl) || e.memoizedState !== null, Jt(l, t, e), jl = a;
                break;
            default:
                Jt(l, t, e)
        }
    }

    function cr(l, t) {
        if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null)))) try {
            jn(l)
        } catch (e) {
            vl(t, t.return, e)
        }
    }

    function A0(l) {
        switch (l.tag) {
            case 13:
            case 19:
                var t = l.stateNode;
                return t === null && (t = l.stateNode = new ar), t;
            case 22:
                return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new ar), t;
            default:
                throw Error(s(435, l.tag))
        }
    }

    function Ec(l, t) {
        var e = A0(l);
        t.forEach(function (a) {
            var n = D0.bind(null, l, a);
            e.has(a) || (e.add(a), a.then(n, n))
        })
    }

    function ft(l, t) {
        var e = t.deletions;
        if (e !== null) for (var a = 0; a < e.length; a++) {
            var n = e[a], u = l, i = t, c = i;
            l:for (; c !== null;) {
                switch (c.tag) {
                    case 27:
                        if (pe(c.type)) {
                            Sl = c.stateNode, tt = !1;
                            break l
                        }
                        break;
                    case 5:
                        Sl = c.stateNode, tt = !1;
                        break l;
                    case 3:
                    case 4:
                        Sl = c.stateNode.containerInfo, tt = !0;
                        break l
                }
                c = c.return
            }
            if (Sl === null) throw Error(s(160));
            ir(u, i, n), Sl = null, tt = !1, u = n.alternate, u !== null && (u.return = null), n.return = null
        }
        if (t.subtreeFlags & 13878) for (t = t.child; t !== null;) fr(t, l), t = t.sibling
    }

    var _t = null;

    function fr(l, t) {
        var e = l.alternate, a = l.flags;
        switch (l.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                ft(t, l), st(l), a & 4 && (re(3, l, l.return), dn(3, l), re(5, l, l.return));
                break;
            case 1:
                ft(t, l), st(l), a & 512 && (jl || e === null || Rt(e, e.return)), a & 64 && Kt && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (e = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
                break;
            case 26:
                var n = _t;
                if (ft(t, l), st(l), a & 512 && (jl || e === null || Rt(e, e.return)), a & 4) {
                    var u = e !== null ? e.memoizedState : null;
                    if (a = l.memoizedState, e === null) if (a === null) if (l.stateNode === null) {
                        l:{
                            a = l.type, e = l.memoizedProps, n = n.ownerDocument || n;
                            t:switch (a) {
                                case"title":
                                    u = n.getElementsByTagName("title")[0], (!u || u[wa] || u[Kl] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a), n.head.insertBefore(u, n.querySelector("head > title"))), kl(u, a, e), u[Kl] = l, Gl(u), a = u;
                                    break l;
                                case"link":
                                    var i = ed("link", "href", n).get(a + (e.href || ""));
                                    if (i) {
                                        for (var c = 0; c < i.length; c++) if (u = i[c], u.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && u.getAttribute("rel") === (e.rel == null ? null : e.rel) && u.getAttribute("title") === (e.title == null ? null : e.title) && u.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                                            i.splice(c, 1);
                                            break t
                                        }
                                    }
                                    u = n.createElement(a), kl(u, a, e), n.head.appendChild(u);
                                    break;
                                case"meta":
                                    if (i = ed("meta", "content", n).get(a + (e.content || ""))) {
                                        for (c = 0; c < i.length; c++) if (u = i[c], u.getAttribute("content") === (e.content == null ? null : "" + e.content) && u.getAttribute("name") === (e.name == null ? null : e.name) && u.getAttribute("property") === (e.property == null ? null : e.property) && u.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && u.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                                            i.splice(c, 1);
                                            break t
                                        }
                                    }
                                    u = n.createElement(a), kl(u, a, e), n.head.appendChild(u);
                                    break;
                                default:
                                    throw Error(s(468, a))
                            }
                            u[Kl] = l, Gl(u), a = u
                        }
                        l.stateNode = a
                    } else ad(n, l.type, l.stateNode); else l.stateNode = td(n, a, l.memoizedProps); else u !== a ? (u === null ? e.stateNode !== null && (e = e.stateNode, e.parentNode.removeChild(e)) : u.count--, a === null ? ad(n, l.type, l.stateNode) : td(n, a, l.memoizedProps)) : a === null && l.stateNode !== null && xc(l, l.memoizedProps, e.memoizedProps)
                }
                break;
            case 27:
                ft(t, l), st(l), a & 512 && (jl || e === null || Rt(e, e.return)), e !== null && a & 4 && xc(l, l.memoizedProps, e.memoizedProps);
                break;
            case 5:
                if (ft(t, l), st(l), a & 512 && (jl || e === null || Rt(e, e.return)), l.flags & 32) {
                    n = l.stateNode;
                    try {
                        Ie(n, "")
                    } catch (p) {
                        vl(l, l.return, p)
                    }
                }
                a & 4 && l.stateNode != null && (n = l.memoizedProps, xc(l, n, e !== null ? e.memoizedProps : n)), a & 1024 && (zc = !0);
                break;
            case 6:
                if (ft(t, l), st(l), a & 4) {
                    if (l.stateNode === null) throw Error(s(162));
                    a = l.memoizedProps, e = l.stateNode;
                    try {
                        e.nodeValue = a
                    } catch (p) {
                        vl(l, l.return, p)
                    }
                }
                break;
            case 3:
                if (Bu = null, n = _t, _t = wu(t.containerInfo), ft(t, l), _t = n, st(l), a & 4 && e !== null && e.memoizedState.isDehydrated) try {
                    jn(t.containerInfo)
                } catch (p) {
                    vl(l, l.return, p)
                }
                zc && (zc = !1, sr(l));
                break;
            case 4:
                a = _t, _t = wu(l.stateNode.containerInfo), ft(t, l), st(l), _t = a;
                break;
            case 12:
                ft(t, l), st(l);
                break;
            case 13:
                ft(t, l), st(l), l.child.flags & 8192 && l.memoizedState !== null != (e !== null && e.memoizedState !== null) && (jc = Ot()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, Ec(l, a)));
                break;
            case 22:
                n = l.memoizedState !== null;
                var o = e !== null && e.memoizedState !== null, g = Kt, E = jl;
                if (Kt = g || n, jl = E || o, ft(t, l), jl = E, Kt = g, st(l), a & 8192) l:for (t = l.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, n && (e === null || o || Kt || jl || Xe(l)), e = null, t = l; ;) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (e === null) {
                            o = e = t;
                            try {
                                if (u = o.stateNode, n) i = u.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none"; else {
                                    c = o.stateNode;
                                    var _ = o.memoizedProps.style,
                                        b = _ != null && _.hasOwnProperty("display") ? _.display : null;
                                    c.style.display = b == null || typeof b == "boolean" ? "" : ("" + b).trim()
                                }
                            } catch (p) {
                                vl(o, o.return, p)
                            }
                        }
                    } else if (t.tag === 6) {
                        if (e === null) {
                            o = t;
                            try {
                                o.stateNode.nodeValue = n ? "" : o.memoizedProps
                            } catch (p) {
                                vl(o, o.return, p)
                            }
                        }
                    } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
                        t.child.return = t, t = t.child;
                        continue
                    }
                    if (t === l) break l;
                    for (; t.sibling === null;) {
                        if (t.return === null || t.return === l) break l;
                        e === t && (e = null), t = t.return
                    }
                    e === t && (e = null), t.sibling.return = t.return, t = t.sibling
                }
                a & 4 && (a = l.updateQueue, a !== null && (e = a.retryQueue, e !== null && (a.retryQueue = null, Ec(l, e))));
                break;
            case 19:
                ft(t, l), st(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, Ec(l, a)));
                break;
            case 30:
                break;
            case 21:
                break;
            default:
                ft(t, l), st(l)
        }
    }

    function st(l) {
        var t = l.flags;
        if (t & 2) {
            try {
                for (var e, a = l.return; a !== null;) {
                    if (tr(a)) {
                        e = a;
                        break
                    }
                    a = a.return
                }
                if (e == null) throw Error(s(160));
                switch (e.tag) {
                    case 27:
                        var n = e.stateNode, u = Sc(l);
                        zu(l, u, n);
                        break;
                    case 5:
                        var i = e.stateNode;
                        e.flags & 32 && (Ie(i, ""), e.flags &= -33);
                        var c = Sc(l);
                        zu(l, c, i);
                        break;
                    case 3:
                    case 4:
                        var o = e.stateNode.containerInfo, g = Sc(l);
                        Ac(l, g, o);
                        break;
                    default:
                        throw Error(s(161))
                }
            } catch (E) {
                vl(l, l.return, E)
            }
            l.flags &= -3
        }
        t & 4096 && (l.flags &= -4097)
    }

    function sr(l) {
        if (l.subtreeFlags & 1024) for (l = l.child; l !== null;) {
            var t = l;
            sr(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling
        }
    }

    function de(l, t) {
        if (t.subtreeFlags & 8772) for (t = t.child; t !== null;) nr(l, t.alternate, t), t = t.sibling
    }

    function Xe(l) {
        for (l = l.child; l !== null;) {
            var t = l;
            switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    re(4, t, t.return), Xe(t);
                    break;
                case 1:
                    Rt(t, t.return);
                    var e = t.stateNode;
                    typeof e.componentWillUnmount == "function" && Po(t, t.return, e), Xe(t);
                    break;
                case 27:
                    An(t.stateNode);
                case 26:
                case 5:
                    Rt(t, t.return), Xe(t);
                    break;
                case 22:
                    t.memoizedState === null && Xe(t);
                    break;
                case 30:
                    Xe(t);
                    break;
                default:
                    Xe(t)
            }
            l = l.sibling
        }
    }

    function me(l, t, e) {
        for (e = e && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;) {
            var a = t.alternate, n = l, u = t, i = u.flags;
            switch (u.tag) {
                case 0:
                case 11:
                case 15:
                    me(n, u, e), dn(4, u);
                    break;
                case 1:
                    if (me(n, u, e), a = u, n = a.stateNode, typeof n.componentDidMount == "function") try {
                        n.componentDidMount()
                    } catch (g) {
                        vl(a, a.return, g)
                    }
                    if (a = u, n = a.updateQueue, n !== null) {
                        var c = a.stateNode;
                        try {
                            var o = n.shared.hiddenCallbacks;
                            if (o !== null) for (n.shared.hiddenCallbacks = null, n = 0; n < o.length; n++) qs(o[n], c)
                        } catch (g) {
                            vl(a, a.return, g)
                        }
                    }
                    e && i & 64 && Io(u), mn(u, u.return);
                    break;
                case 27:
                    er(u);
                case 26:
                case 5:
                    me(n, u, e), e && a === null && i & 4 && lr(u), mn(u, u.return);
                    break;
                case 12:
                    me(n, u, e);
                    break;
                case 13:
                    me(n, u, e), e && i & 4 && cr(n, u);
                    break;
                case 22:
                    u.memoizedState === null && me(n, u, e), mn(u, u.return);
                    break;
                case 30:
                    break;
                default:
                    me(n, u, e)
            }
            t = t.sibling
        }
    }

    function Tc(l, t) {
        var e = null;
        l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== e && (l != null && l.refCount++, e != null && Fa(e))
    }

    function _c(l, t) {
        l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Fa(l))
    }

    function Ut(l, t, e, a) {
        if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) or(l, t, e, a), t = t.sibling
    }

    function or(l, t, e, a) {
        var n = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                Ut(l, t, e, a), n & 2048 && dn(9, t);
                break;
            case 1:
                Ut(l, t, e, a);
                break;
            case 3:
                Ut(l, t, e, a), n & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Fa(l)));
                break;
            case 12:
                if (n & 2048) {
                    Ut(l, t, e, a), l = t.stateNode;
                    try {
                        var u = t.memoizedProps, i = u.id, c = u.onPostCommit;
                        typeof c == "function" && c(i, t.alternate === null ? "mount" : "update", l.passiveEffectDuration, -0)
                    } catch (o) {
                        vl(t, t.return, o)
                    }
                } else Ut(l, t, e, a);
                break;
            case 13:
                Ut(l, t, e, a);
                break;
            case 23:
                break;
            case 22:
                u = t.stateNode, i = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? Ut(l, t, e, a) : hn(l, t) : u._visibility & 2 ? Ut(l, t, e, a) : (u._visibility |= 2, va(l, t, e, a, (t.subtreeFlags & 10256) !== 0)), n & 2048 && Tc(i, t);
                break;
            case 24:
                Ut(l, t, e, a), n & 2048 && _c(t.alternate, t);
                break;
            default:
                Ut(l, t, e, a)
        }
    }

    function va(l, t, e, a, n) {
        for (n = n && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null;) {
            var u = l, i = t, c = e, o = a, g = i.flags;
            switch (i.tag) {
                case 0:
                case 11:
                case 15:
                    va(u, i, c, o, n), dn(8, i);
                    break;
                case 23:
                    break;
                case 22:
                    var E = i.stateNode;
                    i.memoizedState !== null ? E._visibility & 2 ? va(u, i, c, o, n) : hn(u, i) : (E._visibility |= 2, va(u, i, c, o, n)), n && g & 2048 && Tc(i.alternate, i);
                    break;
                case 24:
                    va(u, i, c, o, n), n && g & 2048 && _c(i.alternate, i);
                    break;
                default:
                    va(u, i, c, o, n)
            }
            t = t.sibling
        }
    }

    function hn(l, t) {
        if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) {
            var e = l, a = t, n = a.flags;
            switch (a.tag) {
                case 22:
                    hn(e, a), n & 2048 && Tc(a.alternate, a);
                    break;
                case 24:
                    hn(e, a), n & 2048 && _c(a.alternate, a);
                    break;
                default:
                    hn(e, a)
            }
            t = t.sibling
        }
    }

    var gn = 8192;

    function ba(l) {
        if (l.subtreeFlags & gn) for (l = l.child; l !== null;) rr(l), l = l.sibling
    }

    function rr(l) {
        switch (l.tag) {
            case 26:
                ba(l), l.flags & gn && l.memoizedState !== null && ch(_t, l.memoizedState, l.memoizedProps);
                break;
            case 5:
                ba(l);
                break;
            case 3:
            case 4:
                var t = _t;
                _t = wu(l.stateNode.containerInfo), ba(l), _t = t;
                break;
            case 22:
                l.memoizedState === null && (t = l.alternate, t !== null && t.memoizedState !== null ? (t = gn, gn = 16777216, ba(l), gn = t) : ba(l));
                break;
            default:
                ba(l)
        }
    }

    function dr(l) {
        var t = l.alternate;
        if (t !== null && (l = t.child, l !== null)) {
            t.child = null;
            do t = l.sibling, l.sibling = null, l = t; while (l !== null)
        }
    }

    function yn(l) {
        var t = l.deletions;
        if ((l.flags & 16) !== 0) {
            if (t !== null) for (var e = 0; e < t.length; e++) {
                var a = t[e];
                Xl = a, hr(a, l)
            }
            dr(l)
        }
        if (l.subtreeFlags & 10256) for (l = l.child; l !== null;) mr(l), l = l.sibling
    }

    function mr(l) {
        switch (l.tag) {
            case 0:
            case 11:
            case 15:
                yn(l), l.flags & 2048 && re(9, l, l.return);
                break;
            case 3:
                yn(l);
                break;
            case 12:
                yn(l);
                break;
            case 22:
                var t = l.stateNode;
                l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, Eu(l)) : yn(l);
                break;
            default:
                yn(l)
        }
    }

    function Eu(l) {
        var t = l.deletions;
        if ((l.flags & 16) !== 0) {
            if (t !== null) for (var e = 0; e < t.length; e++) {
                var a = t[e];
                Xl = a, hr(a, l)
            }
            dr(l)
        }
        for (l = l.child; l !== null;) {
            switch (t = l, t.tag) {
                case 0:
                case 11:
                case 15:
                    re(8, t, t.return), Eu(t);
                    break;
                case 22:
                    e = t.stateNode, e._visibility & 2 && (e._visibility &= -3, Eu(t));
                    break;
                default:
                    Eu(t)
            }
            l = l.sibling
        }
    }

    function hr(l, t) {
        for (; Xl !== null;) {
            var e = Xl;
            switch (e.tag) {
                case 0:
                case 11:
                case 15:
                    re(8, e, t);
                    break;
                case 23:
                case 22:
                    if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
                        var a = e.memoizedState.cachePool.pool;
                        a != null && a.refCount++
                    }
                    break;
                case 24:
                    Fa(e.memoizedState.cache)
            }
            if (a = e.child, a !== null) a.return = e, Xl = a; else l:for (e = l; Xl !== null;) {
                a = Xl;
                var n = a.sibling, u = a.return;
                if (ur(a), a === e) {
                    Xl = null;
                    break l
                }
                if (n !== null) {
                    n.return = u, Xl = n;
                    break l
                }
                Xl = u
            }
        }
    }

    var z0 = {
            getCacheForType: function (l) {
                var t = Jl(Cl), e = t.data.get(l);
                return e === void 0 && (e = l(), t.data.set(l, e)), e
            }
        }, E0 = typeof WeakMap == "function" ? WeakMap : Map, ol = 0, pl = null, al = null, ul = 0, rl = 0, ot = null,
        he = !1, pa = !1, Mc = !1, Wt = 0, _l = 0, ge = 0, Qe = 0, Nc = 0, St = 0, xa = 0, vn = null, et = null,
        Oc = !1, jc = 0, Tu = 1 / 0, _u = null, ye = null, Ll = 0, ve = null, Sa = null, Aa = 0, Dc = 0, Rc = null,
        gr = null, bn = 0, Uc = null;

    function rt() {
        if ((ol & 2) !== 0 && ul !== 0) return ul & -ul;
        if (A.T !== null) {
            var l = sa;
            return l !== 0 ? l : Yc()
        }
        return jf()
    }

    function yr() {
        St === 0 && (St = (ul & 536870912) === 0 || fl ? _f() : 536870912);
        var l = xt.current;
        return l !== null && (l.flags |= 32), St
    }

    function dt(l, t, e) {
        (l === pl && (rl === 2 || rl === 9) || l.cancelPendingCommit !== null) && (za(l, 0), be(l, ul, St, !1)), Ca(l, e), ((ol & 2) === 0 || l !== pl) && (l === pl && ((ol & 2) === 0 && (Qe |= e), _l === 4 && be(l, ul, St, !1)), Ht(l))
    }

    function vr(l, t, e) {
        if ((ol & 6) !== 0) throw Error(s(327));
        var a = !e && (t & 124) === 0 && (t & l.expiredLanes) === 0 || Ha(l, t), n = a ? M0(l, t) : wc(l, t, !0), u = a;
        do {
            if (n === 0) {
                pa && !a && be(l, t, 0, !1);
                break
            } else {
                if (e = l.current.alternate, u && !T0(e)) {
                    n = wc(l, t, !1), u = !1;
                    continue
                }
                if (n === 2) {
                    if (u = t, l.errorRecoveryDisabledLanes & u) var i = 0; else i = l.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
                    if (i !== 0) {
                        t = i;
                        l:{
                            var c = l;
                            n = vn;
                            var o = c.current.memoizedState.isDehydrated;
                            if (o && (za(c, i).flags |= 256), i = wc(c, i, !1), i !== 2) {
                                if (Mc && !o) {
                                    c.errorRecoveryDisabledLanes |= u, Qe |= u, n = 4;
                                    break l
                                }
                                u = et, et = n, u !== null && (et === null ? et = u : et.push.apply(et, u))
                            }
                            n = i
                        }
                        if (u = !1, n !== 2) continue
                    }
                }
                if (n === 1) {
                    za(l, 0), be(l, t, 0, !0);
                    break
                }
                l:{
                    switch (a = l, u = n, u) {
                        case 0:
                        case 1:
                            throw Error(s(345));
                        case 4:
                            if ((t & 4194048) !== t) break;
                        case 6:
                            be(a, t, St, !he);
                            break l;
                        case 2:
                            et = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(s(329))
                    }
                    if ((t & 62914560) === t && (n = jc + 300 - Ot(), 10 < n)) {
                        if (be(a, t, St, !he), qn(a, 0, !0) !== 0) break l;
                        a.timeoutHandle = kr(br.bind(null, a, e, et, _u, Oc, t, St, Qe, xa, he, u, 2, -0, 0), n);
                        break l
                    }
                    br(a, e, et, _u, Oc, t, St, Qe, xa, he, u, 0, -0, 0)
                }
            }
            break
        } while (!0);
        Ht(l)
    }

    function br(l, t, e, a, n, u, i, c, o, g, E, _, b, p) {
        if (l.timeoutHandle = -1, _ = t.subtreeFlags, (_ & 8192 || (_ & 16785408) === 16785408) && (Tn = {
            stylesheets: null,
            count: 0,
            unsuspend: ih
        }, rr(t), _ = fh(), _ !== null)) {
            l.cancelPendingCommit = _(Tr.bind(null, l, t, u, e, a, n, i, c, o, E, 1, b, p)), be(l, u, i, !g);
            return
        }
        Tr(l, t, u, e, a, n, i, c, o)
    }

    function T0(l) {
        for (var t = l; ;) {
            var e = t.tag;
            if ((e === 0 || e === 11 || e === 15) && t.flags & 16384 && (e = t.updateQueue, e !== null && (e = e.stores, e !== null))) for (var a = 0; a < e.length; a++) {
                var n = e[a], u = n.getSnapshot;
                n = n.value;
                try {
                    if (!it(u(), n)) return !1
                } catch {
                    return !1
                }
            }
            if (e = t.child, t.subtreeFlags & 16384 && e !== null) e.return = t, t = e; else {
                if (t === l) break;
                for (; t.sibling === null;) {
                    if (t.return === null || t.return === l) return !0;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
        }
        return !0
    }

    function be(l, t, e, a) {
        t &= ~Nc, t &= ~Qe, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
        for (var n = t; 0 < n;) {
            var u = 31 - ut(n), i = 1 << u;
            a[u] = -1, n &= ~i
        }
        e !== 0 && Nf(l, e, t)
    }

    function Mu() {
        return (ol & 6) === 0 ? (pn(0), !1) : !0
    }

    function Hc() {
        if (al !== null) {
            if (rl === 0) var l = al.return; else l = al, Xt = we = null, Fi(l), ga = null, sn = 0, l = al;
            for (; l !== null;) Fo(l.alternate, l), l = l.return;
            al = null
        }
    }

    function za(l, t) {
        var e = l.timeoutHandle;
        e !== -1 && (l.timeoutHandle = -1, Z0(e)), e = l.cancelPendingCommit, e !== null && (l.cancelPendingCommit = null, e()), Hc(), pl = l, al = e = Bt(l.current, null), ul = t, rl = 0, ot = null, he = !1, pa = Ha(l, t), Mc = !1, xa = St = Nc = Qe = ge = _l = 0, et = vn = null, Oc = !1, (t & 8) !== 0 && (t |= t & 32);
        var a = l.entangledLanes;
        if (a !== 0) for (l = l.entanglements, a &= t; 0 < a;) {
            var n = 31 - ut(a), u = 1 << n;
            t |= l[n], a &= ~u
        }
        return Wt = t, Wn(), e
    }

    function pr(l, t) {
        I = null, A.H = hu, t === Pa || t === nu ? (t = Cs(), rl = 3) : t === Rs ? (t = Cs(), rl = 4) : rl = t === qo ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, ot = t, al === null && (_l = 1, pu(l, yt(t, l.current)))
    }

    function xr() {
        var l = A.H;
        return A.H = hu, l === null ? hu : l
    }

    function Sr() {
        var l = A.A;
        return A.A = z0, l
    }

    function Cc() {
        _l = 4, he || (ul & 4194048) !== ul && xt.current !== null || (pa = !0), (ge & 134217727) === 0 && (Qe & 134217727) === 0 || pl === null || be(pl, ul, St, !1)
    }

    function wc(l, t, e) {
        var a = ol;
        ol |= 2;
        var n = xr(), u = Sr();
        (pl !== l || ul !== t) && (_u = null, za(l, t)), t = !1;
        var i = _l;
        l:do try {
            if (rl !== 0 && al !== null) {
                var c = al, o = ot;
                switch (rl) {
                    case 8:
                        Hc(), i = 6;
                        break l;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        xt.current === null && (t = !0);
                        var g = rl;
                        if (rl = 0, ot = null, Ea(l, c, o, g), e && pa) {
                            i = 0;
                            break l
                        }
                        break;
                    default:
                        g = rl, rl = 0, ot = null, Ea(l, c, o, g)
                }
            }
            _0(), i = _l;
            break
        } catch (E) {
            pr(l, E)
        } while (!0);
        return t && l.shellSuspendCounter++, Xt = we = null, ol = a, A.H = n, A.A = u, al === null && (pl = null, ul = 0, Wn()), i
    }

    function _0() {
        for (; al !== null;) Ar(al)
    }

    function M0(l, t) {
        var e = ol;
        ol |= 2;
        var a = xr(), n = Sr();
        pl !== l || ul !== t ? (_u = null, Tu = Ot() + 500, za(l, t)) : pa = Ha(l, t);
        l:do try {
            if (rl !== 0 && al !== null) {
                t = al;
                var u = ot;
                t:switch (rl) {
                    case 1:
                        rl = 0, ot = null, Ea(l, t, u, 1);
                        break;
                    case 2:
                    case 9:
                        if (Us(u)) {
                            rl = 0, ot = null, zr(t);
                            break
                        }
                        t = function () {
                            rl !== 2 && rl !== 9 || pl !== l || (rl = 7), Ht(l)
                        }, u.then(t, t);
                        break l;
                    case 3:
                        rl = 7;
                        break l;
                    case 4:
                        rl = 5;
                        break l;
                    case 7:
                        Us(u) ? (rl = 0, ot = null, zr(t)) : (rl = 0, ot = null, Ea(l, t, u, 7));
                        break;
                    case 5:
                        var i = null;
                        switch (al.tag) {
                            case 26:
                                i = al.memoizedState;
                            case 5:
                            case 27:
                                var c = al;
                                if (!i || nd(i)) {
                                    rl = 0, ot = null;
                                    var o = c.sibling;
                                    if (o !== null) al = o; else {
                                        var g = c.return;
                                        g !== null ? (al = g, Nu(g)) : al = null
                                    }
                                    break t
                                }
                        }
                        rl = 0, ot = null, Ea(l, t, u, 5);
                        break;
                    case 6:
                        rl = 0, ot = null, Ea(l, t, u, 6);
                        break;
                    case 8:
                        Hc(), _l = 6;
                        break l;
                    default:
                        throw Error(s(462))
                }
            }
            N0();
            break
        } catch (E) {
            pr(l, E)
        } while (!0);
        return Xt = we = null, A.H = a, A.A = n, ol = e, al !== null ? 0 : (pl = null, ul = 0, Wn(), _l)
    }

    function N0() {
        for (; al !== null && !$d();) Ar(al)
    }

    function Ar(l) {
        var t = Wo(l.alternate, l, Wt);
        l.memoizedProps = l.pendingProps, t === null ? Nu(l) : al = t
    }

    function zr(l) {
        var t = l, e = t.alternate;
        switch (t.tag) {
            case 15:
            case 0:
                t = Zo(e, t, t.pendingProps, t.type, void 0, ul);
                break;
            case 11:
                t = Zo(e, t, t.pendingProps, t.type.render, t.ref, ul);
                break;
            case 5:
                Fi(t);
            default:
                Fo(e, t), t = al = zs(t, Wt), t = Wo(e, t, Wt)
        }
        l.memoizedProps = l.pendingProps, t === null ? Nu(l) : al = t
    }

    function Ea(l, t, e, a) {
        Xt = we = null, Fi(t), ga = null, sn = 0;
        var n = t.return;
        try {
            if (v0(l, n, t, e, ul)) {
                _l = 1, pu(l, yt(e, l.current)), al = null;
                return
            }
        } catch (u) {
            if (n !== null) throw al = n, u;
            _l = 1, pu(l, yt(e, l.current)), al = null;
            return
        }
        t.flags & 32768 ? (fl || a === 1 ? l = !0 : pa || (ul & 536870912) !== 0 ? l = !1 : (he = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = xt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Er(t, l)) : Nu(t)
    }

    function Nu(l) {
        var t = l;
        do {
            if ((t.flags & 32768) !== 0) {
                Er(t, he);
                return
            }
            l = t.return;
            var e = p0(t.alternate, t, Wt);
            if (e !== null) {
                al = e;
                return
            }
            if (t = t.sibling, t !== null) {
                al = t;
                return
            }
            al = t = l
        } while (t !== null);
        _l === 0 && (_l = 5)
    }

    function Er(l, t) {
        do {
            var e = x0(l.alternate, l);
            if (e !== null) {
                e.flags &= 32767, al = e;
                return
            }
            if (e = l.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !t && (l = l.sibling, l !== null)) {
                al = l;
                return
            }
            al = l = e
        } while (l !== null);
        _l = 6, al = null
    }

    function Tr(l, t, e, a, n, u, i, c, o) {
        l.cancelPendingCommit = null;
        do Ou(); while (Ll !== 0);
        if ((ol & 6) !== 0) throw Error(s(327));
        if (t !== null) {
            if (t === l.current) throw Error(s(177));
            if (u = t.lanes | t.childLanes, u |= _i, im(l, e, u, i, c, o), l === pl && (al = pl = null, ul = 0), Sa = t, ve = l, Aa = e, Dc = u, Rc = n, gr = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, R0(Hn, function () {
                return jr(), null
            })) : (l.callbackNode = null, l.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
                a = A.T, A.T = null, n = H.p, H.p = 2, i = ol, ol |= 4;
                try {
                    S0(l, t, e)
                } finally {
                    ol = i, H.p = n, A.T = a
                }
            }
            Ll = 1, _r(), Mr(), Nr()
        }
    }

    function _r() {
        if (Ll === 1) {
            Ll = 0;
            var l = ve, t = Sa, e = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || e) {
                e = A.T, A.T = null;
                var a = H.p;
                H.p = 2;
                var n = ol;
                ol |= 4;
                try {
                    fr(t, l);
                    var u = Jc, i = ms(l.containerInfo), c = u.focusedElem, o = u.selectionRange;
                    if (i !== c && c && c.ownerDocument && ds(c.ownerDocument.documentElement, c)) {
                        if (o !== null && Si(c)) {
                            var g = o.start, E = o.end;
                            if (E === void 0 && (E = g), "selectionStart" in c) c.selectionStart = g, c.selectionEnd = Math.min(E, c.value.length); else {
                                var _ = c.ownerDocument || document, b = _ && _.defaultView || window;
                                if (b.getSelection) {
                                    var p = b.getSelection(), K = c.textContent.length, L = Math.min(o.start, K),
                                        gl = o.end === void 0 ? L : Math.min(o.end, K);
                                    !p.extend && L > gl && (i = gl, gl = L, L = i);
                                    var m = rs(c, L), d = rs(c, gl);
                                    if (m && d && (p.rangeCount !== 1 || p.anchorNode !== m.node || p.anchorOffset !== m.offset || p.focusNode !== d.node || p.focusOffset !== d.offset)) {
                                        var h = _.createRange();
                                        h.setStart(m.node, m.offset), p.removeAllRanges(), L > gl ? (p.addRange(h), p.extend(d.node, d.offset)) : (h.setEnd(d.node, d.offset), p.addRange(h))
                                    }
                                }
                            }
                        }
                        for (_ = [], p = c; p = p.parentNode;) p.nodeType === 1 && _.push({
                            element: p,
                            left: p.scrollLeft,
                            top: p.scrollTop
                        });
                        for (typeof c.focus == "function" && c.focus(), c = 0; c < _.length; c++) {
                            var T = _[c];
                            T.element.scrollLeft = T.left, T.element.scrollTop = T.top
                        }
                    }
                    Xu = !!Kc, Jc = Kc = null
                } finally {
                    ol = n, H.p = a, A.T = e
                }
            }
            l.current = t, Ll = 2
        }
    }

    function Mr() {
        if (Ll === 2) {
            Ll = 0;
            var l = ve, t = Sa, e = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || e) {
                e = A.T, A.T = null;
                var a = H.p;
                H.p = 2;
                var n = ol;
                ol |= 4;
                try {
                    nr(l, t.alternate, t)
                } finally {
                    ol = n, H.p = a, A.T = e
                }
            }
            Ll = 3
        }
    }

    function Nr() {
        if (Ll === 4 || Ll === 3) {
            Ll = 0, Fd();
            var l = ve, t = Sa, e = Aa, a = gr;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ll = 5 : (Ll = 0, Sa = ve = null, Or(l, l.pendingLanes));
            var n = l.pendingLanes;
            if (n === 0 && (ye = null), li(e), t = t.stateNode, nt && typeof nt.onCommitFiberRoot == "function") try {
                nt.onCommitFiberRoot(Ua, t, void 0, (t.current.flags & 128) === 128)
            } catch {
            }
            if (a !== null) {
                t = A.T, n = H.p, H.p = 2, A.T = null;
                try {
                    for (var u = l.onRecoverableError, i = 0; i < a.length; i++) {
                        var c = a[i];
                        u(c.value, {componentStack: c.stack})
                    }
                } finally {
                    A.T = t, H.p = n
                }
            }
            (Aa & 3) !== 0 && Ou(), Ht(l), n = l.pendingLanes, (e & 4194090) !== 0 && (n & 42) !== 0 ? l === Uc ? bn++ : (bn = 0, Uc = l) : bn = 0, pn(0)
        }
    }

    function Or(l, t) {
        (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Fa(t)))
    }

    function Ou(l) {
        return _r(), Mr(), Nr(), jr()
    }

    function jr() {
        if (Ll !== 5) return !1;
        var l = ve, t = Dc;
        Dc = 0;
        var e = li(Aa), a = A.T, n = H.p;
        try {
            H.p = 32 > e ? 32 : e, A.T = null, e = Rc, Rc = null;
            var u = ve, i = Aa;
            if (Ll = 0, Sa = ve = null, Aa = 0, (ol & 6) !== 0) throw Error(s(331));
            var c = ol;
            if (ol |= 4, mr(u.current), or(u, u.current, i, e), ol = c, pn(0, !1), nt && typeof nt.onPostCommitFiberRoot == "function") try {
                nt.onPostCommitFiberRoot(Ua, u)
            } catch {
            }
            return !0
        } finally {
            H.p = n, A.T = a, Or(l, t)
        }
    }

    function Dr(l, t, e) {
        t = yt(e, t), t = rc(l.stateNode, t, 2), l = ce(l, t, 2), l !== null && (Ca(l, 2), Ht(l))
    }

    function vl(l, t, e) {
        if (l.tag === 3) Dr(l, l, e); else for (; t !== null;) {
            if (t.tag === 3) {
                Dr(t, l, e);
                break
            } else if (t.tag === 1) {
                var a = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (ye === null || !ye.has(a))) {
                    l = yt(e, l), e = Co(2), a = ce(t, e, 2), a !== null && (wo(e, a, t, l), Ca(a, 2), Ht(a));
                    break
                }
            }
            t = t.return
        }
    }

    function qc(l, t, e) {
        var a = l.pingCache;
        if (a === null) {
            a = l.pingCache = new E0;
            var n = new Set;
            a.set(t, n)
        } else n = a.get(t), n === void 0 && (n = new Set, a.set(t, n));
        n.has(e) || (Mc = !0, n.add(e), l = O0.bind(null, l, t, e), t.then(l, l))
    }

    function O0(l, t, e) {
        var a = l.pingCache;
        a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & e, l.warmLanes &= ~e, pl === l && (ul & e) === e && (_l === 4 || _l === 3 && (ul & 62914560) === ul && 300 > Ot() - jc ? (ol & 2) === 0 && za(l, 0) : Nc |= e, xa === ul && (xa = 0)), Ht(l)
    }

    function Rr(l, t) {
        t === 0 && (t = Mf()), l = ua(l, t), l !== null && (Ca(l, t), Ht(l))
    }

    function j0(l) {
        var t = l.memoizedState, e = 0;
        t !== null && (e = t.retryLane), Rr(l, e)
    }

    function D0(l, t) {
        var e = 0;
        switch (l.tag) {
            case 13:
                var a = l.stateNode, n = l.memoizedState;
                n !== null && (e = n.retryLane);
                break;
            case 19:
                a = l.stateNode;
                break;
            case 22:
                a = l.stateNode._retryCache;
                break;
            default:
                throw Error(s(314))
        }
        a !== null && a.delete(t), Rr(l, e)
    }

    function R0(l, t) {
        return $u(l, t)
    }

    var ju = null, Ta = null, Bc = !1, Du = !1, Gc = !1, Ze = 0;

    function Ht(l) {
        l !== Ta && l.next === null && (Ta === null ? ju = Ta = l : Ta = Ta.next = l), Du = !0, Bc || (Bc = !0, H0())
    }

    function pn(l, t) {
        if (!Gc && Du) {
            Gc = !0;
            do for (var e = !1, a = ju; a !== null;) {
                if (l !== 0) {
                    var n = a.pendingLanes;
                    if (n === 0) var u = 0; else {
                        var i = a.suspendedLanes, c = a.pingedLanes;
                        u = (1 << 31 - ut(42 | l) + 1) - 1, u &= n & ~(i & ~c), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0
                    }
                    u !== 0 && (e = !0, wr(a, u))
                } else u = ul, u = qn(a, a === pl ? u : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (u & 3) === 0 || Ha(a, u) || (e = !0, wr(a, u));
                a = a.next
            } while (e);
            Gc = !1
        }
    }

    function U0() {
        Ur()
    }

    function Ur() {
        Du = Bc = !1;
        var l = 0;
        Ze !== 0 && (Q0() && (l = Ze), Ze = 0);
        for (var t = Ot(), e = null, a = ju; a !== null;) {
            var n = a.next, u = Hr(a, t);
            u === 0 ? (a.next = null, e === null ? ju = n : e.next = n, n === null && (Ta = e)) : (e = a, (l !== 0 || (u & 3) !== 0) && (Du = !0)), a = n
        }
        pn(l)
    }

    function Hr(l, t) {
        for (var e = l.suspendedLanes, a = l.pingedLanes, n = l.expirationTimes, u = l.pendingLanes & -62914561; 0 < u;) {
            var i = 31 - ut(u), c = 1 << i, o = n[i];
            o === -1 ? ((c & e) === 0 || (c & a) !== 0) && (n[i] = um(c, t)) : o <= t && (l.expiredLanes |= c), u &= ~c
        }
        if (t = pl, e = ul, e = qn(l, l === t ? e : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), a = l.callbackNode, e === 0 || l === t && (rl === 2 || rl === 9) || l.cancelPendingCommit !== null) return a !== null && a !== null && Fu(a), l.callbackNode = null, l.callbackPriority = 0;
        if ((e & 3) === 0 || Ha(l, e)) {
            if (t = e & -e, t === l.callbackPriority) return t;
            switch (a !== null && Fu(a), li(e)) {
                case 2:
                case 8:
                    e = Ef;
                    break;
                case 32:
                    e = Hn;
                    break;
                case 268435456:
                    e = Tf;
                    break;
                default:
                    e = Hn
            }
            return a = Cr.bind(null, l), e = $u(e, a), l.callbackPriority = t, l.callbackNode = e, t
        }
        return a !== null && a !== null && Fu(a), l.callbackPriority = 2, l.callbackNode = null, 2
    }

    function Cr(l, t) {
        if (Ll !== 0 && Ll !== 5) return l.callbackNode = null, l.callbackPriority = 0, null;
        var e = l.callbackNode;
        if (Ou() && l.callbackNode !== e) return null;
        var a = ul;
        return a = qn(l, l === pl ? a : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), a === 0 ? null : (vr(l, a, t), Hr(l, Ot()), l.callbackNode != null && l.callbackNode === e ? Cr.bind(null, l) : null)
    }

    function wr(l, t) {
        if (Ou()) return null;
        vr(l, t, !0)
    }

    function H0() {
        V0(function () {
            (ol & 6) !== 0 ? $u(zf, U0) : Ur()
        })
    }

    function Yc() {
        return Ze === 0 && (Ze = _f()), Ze
    }

    function qr(l) {
        return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Qn("" + l)
    }

    function Br(l, t) {
        var e = t.ownerDocument.createElement("input");
        return e.name = t.name, e.value = t.value, l.id && e.setAttribute("form", l.id), t.parentNode.insertBefore(e, t), l = new FormData(l), e.parentNode.removeChild(e), l
    }

    function C0(l, t, e, a, n) {
        if (t === "submit" && e && e.stateNode === n) {
            var u = qr((n[Il] || null).action), i = a.submitter;
            i && (t = (t = i[Il] || null) ? qr(t.formAction) : i.getAttribute("formAction"), t !== null && (u = t, i = null));
            var c = new kn("action", "action", null, a, n);
            l.push({
                event: c, listeners: [{
                    instance: null, listener: function () {
                        if (a.defaultPrevented) {
                            if (Ze !== 0) {
                                var o = i ? Br(n, i) : new FormData(n);
                                ic(e, {pending: !0, data: o, method: n.method, action: u}, null, o)
                            }
                        } else typeof u == "function" && (c.preventDefault(), o = i ? Br(n, i) : new FormData(n), ic(e, {
                            pending: !0,
                            data: o,
                            method: n.method,
                            action: u
                        }, u, o))
                    }, currentTarget: n
                }]
            })
        }
    }

    for (var Xc = 0; Xc < Ti.length; Xc++) {
        var Qc = Ti[Xc], w0 = Qc.toLowerCase(), q0 = Qc[0].toUpperCase() + Qc.slice(1);
        Tt(w0, "on" + q0)
    }
    Tt(ys, "onAnimationEnd"), Tt(vs, "onAnimationIteration"), Tt(bs, "onAnimationStart"), Tt("dblclick", "onDoubleClick"), Tt("focusin", "onFocus"), Tt("focusout", "onBlur"), Tt(l0, "onTransitionRun"), Tt(t0, "onTransitionStart"), Tt(e0, "onTransitionCancel"), Tt(ps, "onTransitionEnd"), We("onMouseEnter", ["mouseout", "mouseover"]), We("onMouseLeave", ["mouseout", "mouseover"]), We("onPointerEnter", ["pointerout", "pointerover"]), We("onPointerLeave", ["pointerout", "pointerover"]), Me("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Me("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Me("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Me("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Me("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Me("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var xn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        B0 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xn));

    function Gr(l, t) {
        t = (t & 4) !== 0;
        for (var e = 0; e < l.length; e++) {
            var a = l[e], n = a.event;
            a = a.listeners;
            l:{
                var u = void 0;
                if (t) for (var i = a.length - 1; 0 <= i; i--) {
                    var c = a[i], o = c.instance, g = c.currentTarget;
                    if (c = c.listener, o !== u && n.isPropagationStopped()) break l;
                    u = c, n.currentTarget = g;
                    try {
                        u(n)
                    } catch (E) {
                        bu(E)
                    }
                    n.currentTarget = null, u = o
                } else for (i = 0; i < a.length; i++) {
                    if (c = a[i], o = c.instance, g = c.currentTarget, c = c.listener, o !== u && n.isPropagationStopped()) break l;
                    u = c, n.currentTarget = g;
                    try {
                        u(n)
                    } catch (E) {
                        bu(E)
                    }
                    n.currentTarget = null, u = o
                }
            }
        }
    }

    function nl(l, t) {
        var e = t[ti];
        e === void 0 && (e = t[ti] = new Set);
        var a = l + "__bubble";
        e.has(a) || (Yr(t, l, 2, !1), e.add(a))
    }

    function Zc(l, t, e) {
        var a = 0;
        t && (a |= 4), Yr(e, l, a, t)
    }

    var Ru = "_reactListening" + Math.random().toString(36).slice(2);

    function Vc(l) {
        if (!l[Ru]) {
            l[Ru] = !0, Rf.forEach(function (e) {
                e !== "selectionchange" && (B0.has(e) || Zc(e, !1, l), Zc(e, !0, l))
            });
            var t = l.nodeType === 9 ? l : l.ownerDocument;
            t === null || t[Ru] || (t[Ru] = !0, Zc("selectionchange", !1, t))
        }
    }

    function Yr(l, t, e, a) {
        switch (od(t)) {
            case 2:
                var n = rh;
                break;
            case 8:
                n = dh;
                break;
            default:
                n = nf
        }
        e = n.bind(null, t, e, l), n = void 0, !di || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0), a ? n !== void 0 ? l.addEventListener(t, e, {
            capture: !0,
            passive: n
        }) : l.addEventListener(t, e, !0) : n !== void 0 ? l.addEventListener(t, e, {passive: n}) : l.addEventListener(t, e, !1)
    }

    function Lc(l, t, e, a, n) {
        var u = a;
        if ((t & 1) === 0 && (t & 2) === 0 && a !== null) l:for (; ;) {
            if (a === null) return;
            var i = a.tag;
            if (i === 3 || i === 4) {
                var c = a.stateNode.containerInfo;
                if (c === n) break;
                if (i === 4) for (i = a.return; i !== null;) {
                    var o = i.tag;
                    if ((o === 3 || o === 4) && i.stateNode.containerInfo === n) return;
                    i = i.return
                }
                for (; c !== null;) {
                    if (i = ke(c), i === null) return;
                    if (o = i.tag, o === 5 || o === 6 || o === 26 || o === 27) {
                        a = u = i;
                        continue l
                    }
                    c = c.parentNode
                }
            }
            a = a.return
        }
        kf(function () {
            var g = u, E = oi(e), _ = [];
            l:{
                var b = xs.get(l);
                if (b !== void 0) {
                    var p = kn, K = l;
                    switch (l) {
                        case"keypress":
                            if (Vn(e) === 0) break l;
                        case"keydown":
                        case"keyup":
                            p = Rm;
                            break;
                        case"focusin":
                            K = "focus", p = yi;
                            break;
                        case"focusout":
                            K = "blur", p = yi;
                            break;
                        case"beforeblur":
                        case"afterblur":
                            p = yi;
                            break;
                        case"click":
                            if (e.button === 2) break l;
                        case"auxclick":
                        case"dblclick":
                        case"mousedown":
                        case"mousemove":
                        case"mouseup":
                        case"mouseout":
                        case"mouseover":
                        case"contextmenu":
                            p = Wf;
                            break;
                        case"drag":
                        case"dragend":
                        case"dragenter":
                        case"dragexit":
                        case"dragleave":
                        case"dragover":
                        case"dragstart":
                        case"drop":
                            p = xm;
                            break;
                        case"touchcancel":
                        case"touchend":
                        case"touchmove":
                        case"touchstart":
                            p = Cm;
                            break;
                        case ys:
                        case vs:
                        case bs:
                            p = zm;
                            break;
                        case ps:
                            p = qm;
                            break;
                        case"scroll":
                        case"scrollend":
                            p = bm;
                            break;
                        case"wheel":
                            p = Gm;
                            break;
                        case"copy":
                        case"cut":
                        case"paste":
                            p = Tm;
                            break;
                        case"gotpointercapture":
                        case"lostpointercapture":
                        case"pointercancel":
                        case"pointerdown":
                        case"pointermove":
                        case"pointerout":
                        case"pointerover":
                        case"pointerup":
                            p = Ff;
                            break;
                        case"toggle":
                        case"beforetoggle":
                            p = Xm
                    }
                    var L = (t & 4) !== 0, gl = !L && (l === "scroll" || l === "scrollend"),
                        m = L ? b !== null ? b + "Capture" : null : b;
                    L = [];
                    for (var d = g, h; d !== null;) {
                        var T = d;
                        if (h = T.stateNode, T = T.tag, T !== 5 && T !== 26 && T !== 27 || h === null || m === null || (T = Ba(d, m), T != null && L.push(Sn(d, T, h))), gl) break;
                        d = d.return
                    }
                    0 < L.length && (b = new p(b, K, null, e, E), _.push({event: b, listeners: L}))
                }
            }
            if ((t & 7) === 0) {
                l:{
                    if (b = l === "mouseover" || l === "pointerover", p = l === "mouseout" || l === "pointerout", b && e !== si && (K = e.relatedTarget || e.fromElement) && (ke(K) || K[Le])) break l;
                    if ((p || b) && (b = E.window === E ? E : (b = E.ownerDocument) ? b.defaultView || b.parentWindow : window, p ? (K = e.relatedTarget || e.toElement, p = g, K = K ? ke(K) : null, K !== null && (gl = N(K), L = K.tag, K !== gl || L !== 5 && L !== 27 && L !== 6) && (K = null)) : (p = null, K = g), p !== K)) {
                        if (L = Wf, T = "onMouseLeave", m = "onMouseEnter", d = "mouse", (l === "pointerout" || l === "pointerover") && (L = Ff, T = "onPointerLeave", m = "onPointerEnter", d = "pointer"), gl = p == null ? b : qa(p), h = K == null ? b : qa(K), b = new L(T, d + "leave", p, e, E), b.target = gl, b.relatedTarget = h, T = null, ke(E) === g && (L = new L(m, d + "enter", K, e, E), L.target = h, L.relatedTarget = gl, T = L), gl = T, p && K) t:{
                            for (L = p, m = K, d = 0, h = L; h; h = _a(h)) d++;
                            for (h = 0, T = m; T; T = _a(T)) h++;
                            for (; 0 < d - h;) L = _a(L), d--;
                            for (; 0 < h - d;) m = _a(m), h--;
                            for (; d--;) {
                                if (L === m || m !== null && L === m.alternate) break t;
                                L = _a(L), m = _a(m)
                            }
                            L = null
                        } else L = null;
                        p !== null && Xr(_, b, p, L, !1), K !== null && gl !== null && Xr(_, gl, K, L, !0)
                    }
                }
                l:{
                    if (b = g ? qa(g) : window, p = b.nodeName && b.nodeName.toLowerCase(), p === "select" || p === "input" && b.type === "file") var q = us; else if (as(b)) if (is) q = Fm; else {
                        q = Wm;
                        var tl = Jm
                    } else p = b.nodeName, !p || p.toLowerCase() !== "input" || b.type !== "checkbox" && b.type !== "radio" ? g && fi(g.elementType) && (q = us) : q = $m;
                    if (q && (q = q(l, g))) {
                        ns(_, q, e, E);
                        break l
                    }
                    tl && tl(l, b, g), l === "focusout" && g && b.type === "number" && g.memoizedProps.value != null && ci(b, "number", b.value)
                }
                switch (tl = g ? qa(g) : window, l) {
                    case"focusin":
                        (as(tl) || tl.contentEditable === "true") && (ea = tl, Ai = g, ka = null);
                        break;
                    case"focusout":
                        ka = Ai = ea = null;
                        break;
                    case"mousedown":
                        zi = !0;
                        break;
                    case"contextmenu":
                    case"mouseup":
                    case"dragend":
                        zi = !1, hs(_, e, E);
                        break;
                    case"selectionchange":
                        if (Pm) break;
                    case"keydown":
                    case"keyup":
                        hs(_, e, E)
                }
                var Q;
                if (bi) l:{
                    switch (l) {
                        case"compositionstart":
                            var k = "onCompositionStart";
                            break l;
                        case"compositionend":
                            k = "onCompositionEnd";
                            break l;
                        case"compositionupdate":
                            k = "onCompositionUpdate";
                            break l
                    }
                    k = void 0
                } else ta ? ts(l, e) && (k = "onCompositionEnd") : l === "keydown" && e.keyCode === 229 && (k = "onCompositionStart");
                k && (If && e.locale !== "ko" && (ta || k !== "onCompositionStart" ? k === "onCompositionEnd" && ta && (Q = Kf()) : (ae = E, mi = "value" in ae ? ae.value : ae.textContent, ta = !0)), tl = Uu(g, k), 0 < tl.length && (k = new $f(k, l, null, e, E), _.push({
                    event: k,
                    listeners: tl
                }), Q ? k.data = Q : (Q = es(e), Q !== null && (k.data = Q)))), (Q = Zm ? Vm(l, e) : Lm(l, e)) && (k = Uu(g, "onBeforeInput"), 0 < k.length && (tl = new $f("onBeforeInput", "beforeinput", null, e, E), _.push({
                    event: tl,
                    listeners: k
                }), tl.data = Q)), C0(_, l, g, e, E)
            }
            Gr(_, t)
        })
    }

    function Sn(l, t, e) {
        return {instance: l, listener: t, currentTarget: e}
    }

    function Uu(l, t) {
        for (var e = t + "Capture", a = []; l !== null;) {
            var n = l, u = n.stateNode;
            if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = Ba(l, e), n != null && a.unshift(Sn(l, n, u)), n = Ba(l, t), n != null && a.push(Sn(l, n, u))), l.tag === 3) return a;
            l = l.return
        }
        return []
    }

    function _a(l) {
        if (l === null) return null;
        do l = l.return; while (l && l.tag !== 5 && l.tag !== 27);
        return l || null
    }

    function Xr(l, t, e, a, n) {
        for (var u = t._reactName, i = []; e !== null && e !== a;) {
            var c = e, o = c.alternate, g = c.stateNode;
            if (c = c.tag, o !== null && o === a) break;
            c !== 5 && c !== 26 && c !== 27 || g === null || (o = g, n ? (g = Ba(e, u), g != null && i.unshift(Sn(e, g, o))) : n || (g = Ba(e, u), g != null && i.push(Sn(e, g, o)))), e = e.return
        }
        i.length !== 0 && l.push({event: t, listeners: i})
    }

    var G0 = /\r\n?/g, Y0 = /\u0000|\uFFFD/g;

    function Qr(l) {
        return (typeof l == "string" ? l : "" + l).replace(G0, `
`).replace(Y0, "")
    }

    function Zr(l, t) {
        return t = Qr(t), Qr(l) === t
    }

    function Hu() {
    }

    function hl(l, t, e, a, n, u) {
        switch (e) {
            case"children":
                typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Ie(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Ie(l, "" + a);
                break;
            case"className":
                Gn(l, "class", a);
                break;
            case"tabIndex":
                Gn(l, "tabindex", a);
                break;
            case"dir":
            case"role":
            case"viewBox":
            case"width":
            case"height":
                Gn(l, e, a);
                break;
            case"style":
                Vf(l, a, u);
                break;
            case"data":
                if (t !== "object") {
                    Gn(l, "data", a);
                    break
                }
            case"src":
            case"href":
                if (a === "" && (t !== "a" || e !== "href")) {
                    l.removeAttribute(e);
                    break
                }
                if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
                    l.removeAttribute(e);
                    break
                }
                a = Qn("" + a), l.setAttribute(e, a);
                break;
            case"action":
            case"formAction":
                if (typeof a == "function") {
                    l.setAttribute(e, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                    break
                } else typeof u == "function" && (e === "formAction" ? (t !== "input" && hl(l, t, "name", n.name, n, null), hl(l, t, "formEncType", n.formEncType, n, null), hl(l, t, "formMethod", n.formMethod, n, null), hl(l, t, "formTarget", n.formTarget, n, null)) : (hl(l, t, "encType", n.encType, n, null), hl(l, t, "method", n.method, n, null), hl(l, t, "target", n.target, n, null)));
                if (a == null || typeof a == "symbol" || typeof a == "boolean") {
                    l.removeAttribute(e);
                    break
                }
                a = Qn("" + a), l.setAttribute(e, a);
                break;
            case"onClick":
                a != null && (l.onclick = Hu);
                break;
            case"onScroll":
                a != null && nl("scroll", l);
                break;
            case"onScrollEnd":
                a != null && nl("scrollend", l);
                break;
            case"dangerouslySetInnerHTML":
                if (a != null) {
                    if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
                    if (e = a.__html, e != null) {
                        if (n.children != null) throw Error(s(60));
                        l.innerHTML = e
                    }
                }
                break;
            case"multiple":
                l.multiple = a && typeof a != "function" && typeof a != "symbol";
                break;
            case"muted":
                l.muted = a && typeof a != "function" && typeof a != "symbol";
                break;
            case"suppressContentEditableWarning":
            case"suppressHydrationWarning":
            case"defaultValue":
            case"defaultChecked":
            case"innerHTML":
            case"ref":
                break;
            case"autoFocus":
                break;
            case"xlinkHref":
                if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
                    l.removeAttribute("xlink:href");
                    break
                }
                e = Qn("" + a), l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e);
                break;
            case"contentEditable":
            case"spellCheck":
            case"draggable":
            case"value":
            case"autoReverse":
            case"externalResourcesRequired":
            case"focusable":
            case"preserveAlpha":
                a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, "" + a) : l.removeAttribute(e);
                break;
            case"inert":
            case"allowFullScreen":
            case"async":
            case"autoPlay":
            case"controls":
            case"default":
            case"defer":
            case"disabled":
            case"disablePictureInPicture":
            case"disableRemotePlayback":
            case"formNoValidate":
            case"hidden":
            case"loop":
            case"noModule":
            case"noValidate":
            case"open":
            case"playsInline":
            case"readOnly":
            case"required":
            case"reversed":
            case"scoped":
            case"seamless":
            case"itemScope":
                a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, "") : l.removeAttribute(e);
                break;
            case"capture":
            case"download":
                a === !0 ? l.setAttribute(e, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, a) : l.removeAttribute(e);
                break;
            case"cols":
            case"rows":
            case"size":
            case"span":
                a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(e, a) : l.removeAttribute(e);
                break;
            case"rowSpan":
            case"start":
                a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(e) : l.setAttribute(e, a);
                break;
            case"popover":
                nl("beforetoggle", l), nl("toggle", l), Bn(l, "popover", a);
                break;
            case"xlinkActuate":
                wt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
                break;
            case"xlinkArcrole":
                wt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
                break;
            case"xlinkRole":
                wt(l, "http://www.w3.org/1999/xlink", "xlink:role", a);
                break;
            case"xlinkShow":
                wt(l, "http://www.w3.org/1999/xlink", "xlink:show", a);
                break;
            case"xlinkTitle":
                wt(l, "http://www.w3.org/1999/xlink", "xlink:title", a);
                break;
            case"xlinkType":
                wt(l, "http://www.w3.org/1999/xlink", "xlink:type", a);
                break;
            case"xmlBase":
                wt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
                break;
            case"xmlLang":
                wt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
                break;
            case"xmlSpace":
                wt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
                break;
            case"is":
                Bn(l, "is", a);
                break;
            case"innerText":
            case"textContent":
                break;
            default:
                (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = ym.get(e) || e, Bn(l, e, a))
        }
    }

    function kc(l, t, e, a, n, u) {
        switch (e) {
            case"style":
                Vf(l, a, u);
                break;
            case"dangerouslySetInnerHTML":
                if (a != null) {
                    if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
                    if (e = a.__html, e != null) {
                        if (n.children != null) throw Error(s(60));
                        l.innerHTML = e
                    }
                }
                break;
            case"children":
                typeof a == "string" ? Ie(l, a) : (typeof a == "number" || typeof a == "bigint") && Ie(l, "" + a);
                break;
            case"onScroll":
                a != null && nl("scroll", l);
                break;
            case"onScrollEnd":
                a != null && nl("scrollend", l);
                break;
            case"onClick":
                a != null && (l.onclick = Hu);
                break;
            case"suppressContentEditableWarning":
            case"suppressHydrationWarning":
            case"innerHTML":
            case"ref":
                break;
            case"innerText":
            case"textContent":
                break;
            default:
                if (!Uf.hasOwnProperty(e)) l:{
                    if (e[0] === "o" && e[1] === "n" && (n = e.endsWith("Capture"), t = e.slice(2, n ? e.length - 7 : void 0), u = l[Il] || null, u = u != null ? u[e] : null, typeof u == "function" && l.removeEventListener(t, u, n), typeof a == "function")) {
                        typeof u != "function" && u !== null && (e in l ? l[e] = null : l.hasAttribute(e) && l.removeAttribute(e)), l.addEventListener(t, a, n);
                        break l
                    }
                    e in l ? l[e] = a : a === !0 ? l.setAttribute(e, "") : Bn(l, e, a)
                }
        }
    }

    function kl(l, t, e) {
        switch (t) {
            case"div":
            case"span":
            case"svg":
            case"path":
            case"a":
            case"g":
            case"p":
            case"li":
                break;
            case"img":
                nl("error", l), nl("load", l);
                var a = !1, n = !1, u;
                for (u in e) if (e.hasOwnProperty(u)) {
                    var i = e[u];
                    if (i != null) switch (u) {
                        case"src":
                            a = !0;
                            break;
                        case"srcSet":
                            n = !0;
                            break;
                        case"children":
                        case"dangerouslySetInnerHTML":
                            throw Error(s(137, t));
                        default:
                            hl(l, t, u, i, e, null)
                    }
                }
                n && hl(l, t, "srcSet", e.srcSet, e, null), a && hl(l, t, "src", e.src, e, null);
                return;
            case"input":
                nl("invalid", l);
                var c = u = i = n = null, o = null, g = null;
                for (a in e) if (e.hasOwnProperty(a)) {
                    var E = e[a];
                    if (E != null) switch (a) {
                        case"name":
                            n = E;
                            break;
                        case"type":
                            i = E;
                            break;
                        case"checked":
                            o = E;
                            break;
                        case"defaultChecked":
                            g = E;
                            break;
                        case"value":
                            u = E;
                            break;
                        case"defaultValue":
                            c = E;
                            break;
                        case"children":
                        case"dangerouslySetInnerHTML":
                            if (E != null) throw Error(s(137, t));
                            break;
                        default:
                            hl(l, t, a, E, e, null)
                    }
                }
                Yf(l, u, c, o, g, i, n, !1), Yn(l);
                return;
            case"select":
                nl("invalid", l), a = i = u = null;
                for (n in e) if (e.hasOwnProperty(n) && (c = e[n], c != null)) switch (n) {
                    case"value":
                        u = c;
                        break;
                    case"defaultValue":
                        i = c;
                        break;
                    case"multiple":
                        a = c;
                    default:
                        hl(l, t, n, c, e, null)
                }
                t = u, e = i, l.multiple = !!a, t != null ? Fe(l, !!a, t, !1) : e != null && Fe(l, !!a, e, !0);
                return;
            case"textarea":
                nl("invalid", l), u = n = a = null;
                for (i in e) if (e.hasOwnProperty(i) && (c = e[i], c != null)) switch (i) {
                    case"value":
                        a = c;
                        break;
                    case"defaultValue":
                        n = c;
                        break;
                    case"children":
                        u = c;
                        break;
                    case"dangerouslySetInnerHTML":
                        if (c != null) throw Error(s(91));
                        break;
                    default:
                        hl(l, t, i, c, e, null)
                }
                Qf(l, a, n, u), Yn(l);
                return;
            case"option":
                for (o in e) if (e.hasOwnProperty(o) && (a = e[o], a != null)) switch (o) {
                    case"selected":
                        l.selected = a && typeof a != "function" && typeof a != "symbol";
                        break;
                    default:
                        hl(l, t, o, a, e, null)
                }
                return;
            case"dialog":
                nl("beforetoggle", l), nl("toggle", l), nl("cancel", l), nl("close", l);
                break;
            case"iframe":
            case"object":
                nl("load", l);
                break;
            case"video":
            case"audio":
                for (a = 0; a < xn.length; a++) nl(xn[a], l);
                break;
            case"image":
                nl("error", l), nl("load", l);
                break;
            case"details":
                nl("toggle", l);
                break;
            case"embed":
            case"source":
            case"link":
                nl("error", l), nl("load", l);
            case"area":
            case"base":
            case"br":
            case"col":
            case"hr":
            case"keygen":
            case"meta":
            case"param":
            case"track":
            case"wbr":
            case"menuitem":
                for (g in e) if (e.hasOwnProperty(g) && (a = e[g], a != null)) switch (g) {
                    case"children":
                    case"dangerouslySetInnerHTML":
                        throw Error(s(137, t));
                    default:
                        hl(l, t, g, a, e, null)
                }
                return;
            default:
                if (fi(t)) {
                    for (E in e) e.hasOwnProperty(E) && (a = e[E], a !== void 0 && kc(l, t, E, a, e, void 0));
                    return
                }
        }
        for (c in e) e.hasOwnProperty(c) && (a = e[c], a != null && hl(l, t, c, a, e, null))
    }

    function X0(l, t, e, a) {
        switch (t) {
            case"div":
            case"span":
            case"svg":
            case"path":
            case"a":
            case"g":
            case"p":
            case"li":
                break;
            case"input":
                var n = null, u = null, i = null, c = null, o = null, g = null, E = null;
                for (p in e) {
                    var _ = e[p];
                    if (e.hasOwnProperty(p) && _ != null) switch (p) {
                        case"checked":
                            break;
                        case"value":
                            break;
                        case"defaultValue":
                            o = _;
                        default:
                            a.hasOwnProperty(p) || hl(l, t, p, null, a, _)
                    }
                }
                for (var b in a) {
                    var p = a[b];
                    if (_ = e[b], a.hasOwnProperty(b) && (p != null || _ != null)) switch (b) {
                        case"type":
                            u = p;
                            break;
                        case"name":
                            n = p;
                            break;
                        case"checked":
                            g = p;
                            break;
                        case"defaultChecked":
                            E = p;
                            break;
                        case"value":
                            i = p;
                            break;
                        case"defaultValue":
                            c = p;
                            break;
                        case"children":
                        case"dangerouslySetInnerHTML":
                            if (p != null) throw Error(s(137, t));
                            break;
                        default:
                            p !== _ && hl(l, t, b, p, a, _)
                    }
                }
                ii(l, i, c, o, g, E, u, n);
                return;
            case"select":
                p = i = c = b = null;
                for (u in e) if (o = e[u], e.hasOwnProperty(u) && o != null) switch (u) {
                    case"value":
                        break;
                    case"multiple":
                        p = o;
                    default:
                        a.hasOwnProperty(u) || hl(l, t, u, null, a, o)
                }
                for (n in a) if (u = a[n], o = e[n], a.hasOwnProperty(n) && (u != null || o != null)) switch (n) {
                    case"value":
                        b = u;
                        break;
                    case"defaultValue":
                        c = u;
                        break;
                    case"multiple":
                        i = u;
                    default:
                        u !== o && hl(l, t, n, u, a, o)
                }
                t = c, e = i, a = p, b != null ? Fe(l, !!e, b, !1) : !!a != !!e && (t != null ? Fe(l, !!e, t, !0) : Fe(l, !!e, e ? [] : "", !1));
                return;
            case"textarea":
                p = b = null;
                for (c in e) if (n = e[c], e.hasOwnProperty(c) && n != null && !a.hasOwnProperty(c)) switch (c) {
                    case"value":
                        break;
                    case"children":
                        break;
                    default:
                        hl(l, t, c, null, a, n)
                }
                for (i in a) if (n = a[i], u = e[i], a.hasOwnProperty(i) && (n != null || u != null)) switch (i) {
                    case"value":
                        b = n;
                        break;
                    case"defaultValue":
                        p = n;
                        break;
                    case"children":
                        break;
                    case"dangerouslySetInnerHTML":
                        if (n != null) throw Error(s(91));
                        break;
                    default:
                        n !== u && hl(l, t, i, n, a, u)
                }
                Xf(l, b, p);
                return;
            case"option":
                for (var K in e) if (b = e[K], e.hasOwnProperty(K) && b != null && !a.hasOwnProperty(K)) switch (K) {
                    case"selected":
                        l.selected = !1;
                        break;
                    default:
                        hl(l, t, K, null, a, b)
                }
                for (o in a) if (b = a[o], p = e[o], a.hasOwnProperty(o) && b !== p && (b != null || p != null)) switch (o) {
                    case"selected":
                        l.selected = b && typeof b != "function" && typeof b != "symbol";
                        break;
                    default:
                        hl(l, t, o, b, a, p)
                }
                return;
            case"img":
            case"link":
            case"area":
            case"base":
            case"br":
            case"col":
            case"embed":
            case"hr":
            case"keygen":
            case"meta":
            case"param":
            case"source":
            case"track":
            case"wbr":
            case"menuitem":
                for (var L in e) b = e[L], e.hasOwnProperty(L) && b != null && !a.hasOwnProperty(L) && hl(l, t, L, null, a, b);
                for (g in a) if (b = a[g], p = e[g], a.hasOwnProperty(g) && b !== p && (b != null || p != null)) switch (g) {
                    case"children":
                    case"dangerouslySetInnerHTML":
                        if (b != null) throw Error(s(137, t));
                        break;
                    default:
                        hl(l, t, g, b, a, p)
                }
                return;
            default:
                if (fi(t)) {
                    for (var gl in e) b = e[gl], e.hasOwnProperty(gl) && b !== void 0 && !a.hasOwnProperty(gl) && kc(l, t, gl, void 0, a, b);
                    for (E in a) b = a[E], p = e[E], !a.hasOwnProperty(E) || b === p || b === void 0 && p === void 0 || kc(l, t, E, b, a, p);
                    return
                }
        }
        for (var m in e) b = e[m], e.hasOwnProperty(m) && b != null && !a.hasOwnProperty(m) && hl(l, t, m, null, a, b);
        for (_ in a) b = a[_], p = e[_], !a.hasOwnProperty(_) || b === p || b == null && p == null || hl(l, t, _, b, a, p)
    }

    var Kc = null, Jc = null;

    function Cu(l) {
        return l.nodeType === 9 ? l : l.ownerDocument
    }

    function Vr(l) {
        switch (l) {
            case"http://www.w3.org/2000/svg":
                return 1;
            case"http://www.w3.org/1998/Math/MathML":
                return 2;
            default:
                return 0
        }
    }

    function Lr(l, t) {
        if (l === 0) switch (t) {
            case"svg":
                return 1;
            case"math":
                return 2;
            default:
                return 0
        }
        return l === 1 && t === "foreignObject" ? 0 : l
    }

    function Wc(l, t) {
        return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }

    var $c = null;

    function Q0() {
        var l = window.event;
        return l && l.type === "popstate" ? l === $c ? !1 : ($c = l, !0) : ($c = null, !1)
    }

    var kr = typeof setTimeout == "function" ? setTimeout : void 0,
        Z0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Kr = typeof Promise == "function" ? Promise : void 0,
        V0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Kr < "u" ? function (l) {
            return Kr.resolve(null).then(l).catch(L0)
        } : kr;

    function L0(l) {
        setTimeout(function () {
            throw l
        })
    }

    function pe(l) {
        return l === "head"
    }

    function Jr(l, t) {
        var e = t, a = 0, n = 0;
        do {
            var u = e.nextSibling;
            if (l.removeChild(e), u && u.nodeType === 8) if (e = u.data, e === "/$") {
                if (0 < a && 8 > a) {
                    e = a;
                    var i = l.ownerDocument;
                    if (e & 1 && An(i.documentElement), e & 2 && An(i.body), e & 4) for (e = i.head, An(e), i = e.firstChild; i;) {
                        var c = i.nextSibling, o = i.nodeName;
                        i[wa] || o === "SCRIPT" || o === "STYLE" || o === "LINK" && i.rel.toLowerCase() === "stylesheet" || e.removeChild(i), i = c
                    }
                }
                if (n === 0) {
                    l.removeChild(u), jn(t);
                    return
                }
                n--
            } else e === "$" || e === "$?" || e === "$!" ? n++ : a = e.charCodeAt(0) - 48; else a = 0;
            e = u
        } while (e);
        jn(t)
    }

    function Fc(l) {
        var t = l.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
            var e = t;
            switch (t = t.nextSibling, e.nodeName) {
                case"HTML":
                case"HEAD":
                case"BODY":
                    Fc(e), ei(e);
                    continue;
                case"SCRIPT":
                case"STYLE":
                    continue;
                case"LINK":
                    if (e.rel.toLowerCase() === "stylesheet") continue
            }
            l.removeChild(e)
        }
    }

    function k0(l, t, e, a) {
        for (; l.nodeType === 1;) {
            var n = e;
            if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden")) break
            } else if (a) {
                if (!l[wa]) switch (t) {
                    case"meta":
                        if (!l.hasAttribute("itemprop")) break;
                        return l;
                    case"link":
                        if (u = l.getAttribute("rel"), u === "stylesheet" && l.hasAttribute("data-precedence")) break;
                        if (u !== n.rel || l.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || l.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || l.getAttribute("title") !== (n.title == null ? null : n.title)) break;
                        return l;
                    case"style":
                        if (l.hasAttribute("data-precedence")) break;
                        return l;
                    case"script":
                        if (u = l.getAttribute("src"), (u !== (n.src == null ? null : n.src) || l.getAttribute("type") !== (n.type == null ? null : n.type) || l.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && u && l.hasAttribute("async") && !l.hasAttribute("itemprop")) break;
                        return l;
                    default:
                        return l
                }
            } else if (t === "input" && l.type === "hidden") {
                var u = n.name == null ? null : "" + n.name;
                if (n.type === "hidden" && l.getAttribute("name") === u) return l
            } else return l;
            if (l = Mt(l.nextSibling), l === null) break
        }
        return null
    }

    function K0(l, t, e) {
        if (t === "") return null;
        for (; l.nodeType !== 3;) if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !e || (l = Mt(l.nextSibling), l === null)) return null;
        return l
    }

    function Ic(l) {
        return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState === "complete"
    }

    function J0(l, t) {
        var e = l.ownerDocument;
        if (l.data !== "$?" || e.readyState === "complete") t(); else {
            var a = function () {
                t(), e.removeEventListener("DOMContentLoaded", a)
            };
            e.addEventListener("DOMContentLoaded", a), l._reactRetry = a
        }
    }

    function Mt(l) {
        for (; l != null; l = l.nextSibling) {
            var t = l.nodeType;
            if (t === 1 || t === 3) break;
            if (t === 8) {
                if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F") break;
                if (t === "/$") return null
            }
        }
        return l
    }

    var Pc = null;

    function Wr(l) {
        l = l.previousSibling;
        for (var t = 0; l;) {
            if (l.nodeType === 8) {
                var e = l.data;
                if (e === "$" || e === "$!" || e === "$?") {
                    if (t === 0) return l;
                    t--
                } else e === "/$" && t++
            }
            l = l.previousSibling
        }
        return null
    }

    function $r(l, t, e) {
        switch (t = Cu(e), l) {
            case"html":
                if (l = t.documentElement, !l) throw Error(s(452));
                return l;
            case"head":
                if (l = t.head, !l) throw Error(s(453));
                return l;
            case"body":
                if (l = t.body, !l) throw Error(s(454));
                return l;
            default:
                throw Error(s(451))
        }
    }

    function An(l) {
        for (var t = l.attributes; t.length;) l.removeAttributeNode(t[0]);
        ei(l)
    }

    var At = new Map, Fr = new Set;

    function wu(l) {
        return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument
    }

    var $t = H.d;
    H.d = {f: W0, r: $0, D: F0, C: I0, L: P0, m: lh, X: eh, S: th, M: ah};

    function W0() {
        var l = $t.f(), t = Mu();
        return l || t
    }

    function $0(l) {
        var t = Ke(l);
        t !== null && t.tag === 5 && t.type === "form" ? vo(t) : $t.r(l)
    }

    var Ma = typeof document > "u" ? null : document;

    function Ir(l, t, e) {
        var a = Ma;
        if (a && typeof t == "string" && t) {
            var n = gt(t);
            n = 'link[rel="' + l + '"][href="' + n + '"]', typeof e == "string" && (n += '[crossorigin="' + e + '"]'), Fr.has(n) || (Fr.add(n), l = {
                rel: l,
                crossOrigin: e,
                href: t
            }, a.querySelector(n) === null && (t = a.createElement("link"), kl(t, "link", l), Gl(t), a.head.appendChild(t)))
        }
    }

    function F0(l) {
        $t.D(l), Ir("dns-prefetch", l, null)
    }

    function I0(l, t) {
        $t.C(l, t), Ir("preconnect", l, t)
    }

    function P0(l, t, e) {
        $t.L(l, t, e);
        var a = Ma;
        if (a && l && t) {
            var n = 'link[rel="preload"][as="' + gt(t) + '"]';
            t === "image" && e && e.imageSrcSet ? (n += '[imagesrcset="' + gt(e.imageSrcSet) + '"]', typeof e.imageSizes == "string" && (n += '[imagesizes="' + gt(e.imageSizes) + '"]')) : n += '[href="' + gt(l) + '"]';
            var u = n;
            switch (t) {
                case"style":
                    u = Na(l);
                    break;
                case"script":
                    u = Oa(l)
            }
            At.has(u) || (l = R({
                rel: "preload",
                href: t === "image" && e && e.imageSrcSet ? void 0 : l,
                as: t
            }, e), At.set(u, l), a.querySelector(n) !== null || t === "style" && a.querySelector(zn(u)) || t === "script" && a.querySelector(En(u)) || (t = a.createElement("link"), kl(t, "link", l), Gl(t), a.head.appendChild(t)))
        }
    }

    function lh(l, t) {
        $t.m(l, t);
        var e = Ma;
        if (e && l) {
            var a = t && typeof t.as == "string" ? t.as : "script",
                n = 'link[rel="modulepreload"][as="' + gt(a) + '"][href="' + gt(l) + '"]', u = n;
            switch (a) {
                case"audioworklet":
                case"paintworklet":
                case"serviceworker":
                case"sharedworker":
                case"worker":
                case"script":
                    u = Oa(l)
            }
            if (!At.has(u) && (l = R({rel: "modulepreload", href: l}, t), At.set(u, l), e.querySelector(n) === null)) {
                switch (a) {
                    case"audioworklet":
                    case"paintworklet":
                    case"serviceworker":
                    case"sharedworker":
                    case"worker":
                    case"script":
                        if (e.querySelector(En(u))) return
                }
                a = e.createElement("link"), kl(a, "link", l), Gl(a), e.head.appendChild(a)
            }
        }
    }

    function th(l, t, e) {
        $t.S(l, t, e);
        var a = Ma;
        if (a && l) {
            var n = Je(a).hoistableStyles, u = Na(l);
            t = t || "default";
            var i = n.get(u);
            if (!i) {
                var c = {loading: 0, preload: null};
                if (i = a.querySelector(zn(u))) c.loading = 5; else {
                    l = R({rel: "stylesheet", href: l, "data-precedence": t}, e), (e = At.get(u)) && lf(l, e);
                    var o = i = a.createElement("link");
                    Gl(o), kl(o, "link", l), o._p = new Promise(function (g, E) {
                        o.onload = g, o.onerror = E
                    }), o.addEventListener("load", function () {
                        c.loading |= 1
                    }), o.addEventListener("error", function () {
                        c.loading |= 2
                    }), c.loading |= 4, qu(i, t, a)
                }
                i = {type: "stylesheet", instance: i, count: 1, state: c}, n.set(u, i)
            }
        }
    }

    function eh(l, t) {
        $t.X(l, t);
        var e = Ma;
        if (e && l) {
            var a = Je(e).hoistableScripts, n = Oa(l), u = a.get(n);
            u || (u = e.querySelector(En(n)), u || (l = R({
                src: l,
                async: !0
            }, t), (t = At.get(n)) && tf(l, t), u = e.createElement("script"), Gl(u), kl(u, "link", l), e.head.appendChild(u)), u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            }, a.set(n, u))
        }
    }

    function ah(l, t) {
        $t.M(l, t);
        var e = Ma;
        if (e && l) {
            var a = Je(e).hoistableScripts, n = Oa(l), u = a.get(n);
            u || (u = e.querySelector(En(n)), u || (l = R({
                src: l,
                async: !0,
                type: "module"
            }, t), (t = At.get(n)) && tf(l, t), u = e.createElement("script"), Gl(u), kl(u, "link", l), e.head.appendChild(u)), u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            }, a.set(n, u))
        }
    }

    function Pr(l, t, e, a) {
        var n = (n = J.current) ? wu(n) : null;
        if (!n) throw Error(s(446));
        switch (l) {
            case"meta":
            case"title":
                return null;
            case"style":
                return typeof e.precedence == "string" && typeof e.href == "string" ? (t = Na(e.href), e = Je(n).hoistableStyles, a = e.get(t), a || (a = {
                    type: "style",
                    instance: null,
                    count: 0,
                    state: null
                }, e.set(t, a)), a) : {type: "void", instance: null, count: 0, state: null};
            case"link":
                if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
                    l = Na(e.href);
                    var u = Je(n).hoistableStyles, i = u.get(l);
                    if (i || (n = n.ownerDocument || n, i = {
                        type: "stylesheet",
                        instance: null,
                        count: 0,
                        state: {loading: 0, preload: null}
                    }, u.set(l, i), (u = n.querySelector(zn(l))) && !u._p && (i.instance = u, i.state.loading = 5), At.has(l) || (e = {
                        rel: "preload",
                        as: "style",
                        href: e.href,
                        crossOrigin: e.crossOrigin,
                        integrity: e.integrity,
                        media: e.media,
                        hrefLang: e.hrefLang,
                        referrerPolicy: e.referrerPolicy
                    }, At.set(l, e), u || nh(n, l, e, i.state))), t && a === null) throw Error(s(528, ""));
                    return i
                }
                if (t && a !== null) throw Error(s(529, ""));
                return null;
            case"script":
                return t = e.async, e = e.src, typeof e == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Oa(e), e = Je(n).hoistableScripts, a = e.get(t), a || (a = {
                    type: "script",
                    instance: null,
                    count: 0,
                    state: null
                }, e.set(t, a)), a) : {type: "void", instance: null, count: 0, state: null};
            default:
                throw Error(s(444, l))
        }
    }

    function Na(l) {
        return 'href="' + gt(l) + '"'
    }

    function zn(l) {
        return 'link[rel="stylesheet"][' + l + "]"
    }

    function ld(l) {
        return R({}, l, {"data-precedence": l.precedence, precedence: null})
    }

    function nh(l, t, e, a) {
        l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"), a.preload = t, t.addEventListener("load", function () {
            return a.loading |= 1
        }), t.addEventListener("error", function () {
            return a.loading |= 2
        }), kl(t, "link", e), Gl(t), l.head.appendChild(t))
    }

    function Oa(l) {
        return '[src="' + gt(l) + '"]'
    }

    function En(l) {
        return "script[async]" + l
    }

    function td(l, t, e) {
        if (t.count++, t.instance === null) switch (t.type) {
            case"style":
                var a = l.querySelector('style[data-href~="' + gt(e.href) + '"]');
                if (a) return t.instance = a, Gl(a), a;
                var n = R({}, e, {"data-href": e.href, "data-precedence": e.precedence, href: null, precedence: null});
                return a = (l.ownerDocument || l).createElement("style"), Gl(a), kl(a, "style", n), qu(a, e.precedence, l), t.instance = a;
            case"stylesheet":
                n = Na(e.href);
                var u = l.querySelector(zn(n));
                if (u) return t.state.loading |= 4, t.instance = u, Gl(u), u;
                a = ld(e), (n = At.get(n)) && lf(a, n), u = (l.ownerDocument || l).createElement("link"), Gl(u);
                var i = u;
                return i._p = new Promise(function (c, o) {
                    i.onload = c, i.onerror = o
                }), kl(u, "link", a), t.state.loading |= 4, qu(u, e.precedence, l), t.instance = u;
            case"script":
                return u = Oa(e.src), (n = l.querySelector(En(u))) ? (t.instance = n, Gl(n), n) : (a = e, (n = At.get(u)) && (a = R({}, e), tf(a, n)), l = l.ownerDocument || l, n = l.createElement("script"), Gl(n), kl(n, "link", a), l.head.appendChild(n), t.instance = n);
            case"void":
                return null;
            default:
                throw Error(s(443, t.type))
        } else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, qu(a, e.precedence, l));
        return t.instance
    }

    function qu(l, t, e) {
        for (var a = e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = a.length ? a[a.length - 1] : null, u = n, i = 0; i < a.length; i++) {
            var c = a[i];
            if (c.dataset.precedence === t) u = c; else if (u !== n) break
        }
        u ? u.parentNode.insertBefore(l, u.nextSibling) : (t = e.nodeType === 9 ? e.head : e, t.insertBefore(l, t.firstChild))
    }

    function lf(l, t) {
        l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title)
    }

    function tf(l, t) {
        l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity)
    }

    var Bu = null;

    function ed(l, t, e) {
        if (Bu === null) {
            var a = new Map, n = Bu = new Map;
            n.set(e, a)
        } else n = Bu, a = n.get(e), a || (a = new Map, n.set(e, a));
        if (a.has(l)) return a;
        for (a.set(l, null), e = e.getElementsByTagName(l), n = 0; n < e.length; n++) {
            var u = e[n];
            if (!(u[wa] || u[Kl] || l === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
                var i = u.getAttribute(t) || "";
                i = l + i;
                var c = a.get(i);
                c ? c.push(u) : a.set(i, [u])
            }
        }
        return a
    }

    function ad(l, t, e) {
        l = l.ownerDocument || l, l.head.insertBefore(e, t === "title" ? l.querySelector("head > title") : null)
    }

    function uh(l, t, e) {
        if (e === 1 || t.itemProp != null) return !1;
        switch (l) {
            case"meta":
            case"title":
                return !0;
            case"style":
                if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
                return !0;
            case"link":
                if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
                switch (t.rel) {
                    case"stylesheet":
                        return l = t.disabled, typeof t.precedence == "string" && l == null;
                    default:
                        return !0
                }
            case"script":
                if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0
        }
        return !1
    }

    function nd(l) {
        return !(l.type === "stylesheet" && (l.state.loading & 3) === 0)
    }

    var Tn = null;

    function ih() {
    }

    function ch(l, t, e) {
        if (Tn === null) throw Error(s(475));
        var a = Tn;
        if (t.type === "stylesheet" && (typeof e.media != "string" || matchMedia(e.media).matches !== !1) && (t.state.loading & 4) === 0) {
            if (t.instance === null) {
                var n = Na(e.href), u = l.querySelector(zn(n));
                if (u) {
                    l = u._p, l !== null && typeof l == "object" && typeof l.then == "function" && (a.count++, a = Gu.bind(a), l.then(a, a)), t.state.loading |= 4, t.instance = u, Gl(u);
                    return
                }
                u = l.ownerDocument || l, e = ld(e), (n = At.get(n)) && lf(e, n), u = u.createElement("link"), Gl(u);
                var i = u;
                i._p = new Promise(function (c, o) {
                    i.onload = c, i.onerror = o
                }), kl(u, "link", e), t.instance = u
            }
            a.stylesheets === null && (a.stylesheets = new Map), a.stylesheets.set(t, l), (l = t.state.preload) && (t.state.loading & 3) === 0 && (a.count++, t = Gu.bind(a), l.addEventListener("load", t), l.addEventListener("error", t))
        }
    }

    function fh() {
        if (Tn === null) throw Error(s(475));
        var l = Tn;
        return l.stylesheets && l.count === 0 && ef(l, l.stylesheets), 0 < l.count ? function (t) {
            var e = setTimeout(function () {
                if (l.stylesheets && ef(l, l.stylesheets), l.unsuspend) {
                    var a = l.unsuspend;
                    l.unsuspend = null, a()
                }
            }, 6e4);
            return l.unsuspend = t, function () {
                l.unsuspend = null, clearTimeout(e)
            }
        } : null
    }

    function Gu() {
        if (this.count--, this.count === 0) {
            if (this.stylesheets) ef(this, this.stylesheets); else if (this.unsuspend) {
                var l = this.unsuspend;
                this.unsuspend = null, l()
            }
        }
    }

    var Yu = null;

    function ef(l, t) {
        l.stylesheets = null, l.unsuspend !== null && (l.count++, Yu = new Map, t.forEach(sh, l), Yu = null, Gu.call(l))
    }

    function sh(l, t) {
        if (!(t.state.loading & 4)) {
            var e = Yu.get(l);
            if (e) var a = e.get(null); else {
                e = new Map, Yu.set(l, e);
                for (var n = l.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < n.length; u++) {
                    var i = n[u];
                    (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (e.set(i.dataset.precedence, i), a = i)
                }
                a && e.set(null, a)
            }
            n = t.instance, i = n.getAttribute("data-precedence"), u = e.get(i) || a, u === a && e.set(null, n), e.set(i, n), this.count++, a = Gu.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u ? u.parentNode.insertBefore(n, u.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(n, l.firstChild)), t.state.loading |= 4
        }
    }

    var _n = {$$typeof: El, Provider: null, Consumer: null, _currentValue: j, _currentValue2: j, _threadCount: 0};

    function oh(l, t, e, a, n, u, i, c) {
        this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Iu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Iu(0), this.hiddenUpdates = Iu(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.incompleteTransitions = new Map
    }

    function ud(l, t, e, a, n, u, i, c, o, g, E, _) {
        return l = new oh(l, t, e, i, c, o, g, _), t = 1, u === !0 && (t |= 24), u = ct(3, null, null, t), l.current = u, u.stateNode = l, t = qi(), t.refCount++, l.pooledCache = t, t.refCount++, u.memoizedState = {
            element: a,
            isDehydrated: e,
            cache: t
        }, Xi(u), l
    }

    function id(l) {
        return l ? (l = ia, l) : ia
    }

    function cd(l, t, e, a, n, u) {
        n = id(n), a.context === null ? a.context = n : a.pendingContext = n, a = ie(t), a.payload = {element: e}, u = u === void 0 ? null : u, u !== null && (a.callback = u), e = ce(l, a, t), e !== null && (dt(e, l, t), tn(e, l, t))
    }

    function fd(l, t) {
        if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
            var e = l.retryLane;
            l.retryLane = e !== 0 && e < t ? e : t
        }
    }

    function af(l, t) {
        fd(l, t), (l = l.alternate) && fd(l, t)
    }

    function sd(l) {
        if (l.tag === 13) {
            var t = ua(l, 67108864);
            t !== null && dt(t, l, 67108864), af(l, 67108864)
        }
    }

    var Xu = !0;

    function rh(l, t, e, a) {
        var n = A.T;
        A.T = null;
        var u = H.p;
        try {
            H.p = 2, nf(l, t, e, a)
        } finally {
            H.p = u, A.T = n
        }
    }

    function dh(l, t, e, a) {
        var n = A.T;
        A.T = null;
        var u = H.p;
        try {
            H.p = 8, nf(l, t, e, a)
        } finally {
            H.p = u, A.T = n
        }
    }

    function nf(l, t, e, a) {
        if (Xu) {
            var n = uf(a);
            if (n === null) Lc(l, t, a, Qu, e), rd(l, a); else if (hh(n, l, t, e, a)) a.stopPropagation(); else if (rd(l, a), t & 4 && -1 < mh.indexOf(l)) {
                for (; n !== null;) {
                    var u = Ke(n);
                    if (u !== null) switch (u.tag) {
                        case 3:
                            if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                                var i = _e(u.pendingLanes);
                                if (i !== 0) {
                                    var c = u;
                                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i;) {
                                        var o = 1 << 31 - ut(i);
                                        c.entanglements[1] |= o, i &= ~o
                                    }
                                    Ht(u), (ol & 6) === 0 && (Tu = Ot() + 500, pn(0))
                                }
                            }
                            break;
                        case 13:
                            c = ua(u, 2), c !== null && dt(c, u, 2), Mu(), af(u, 2)
                    }
                    if (u = uf(a), u === null && Lc(l, t, a, Qu, e), u === n) break;
                    n = u
                }
                n !== null && a.stopPropagation()
            } else Lc(l, t, a, null, e)
        }
    }

    function uf(l) {
        return l = oi(l), cf(l)
    }

    var Qu = null;

    function cf(l) {
        if (Qu = null, l = ke(l), l !== null) {
            var t = N(l);
            if (t === null) l = null; else {
                var e = t.tag;
                if (e === 13) {
                    if (l = U(t), l !== null) return l;
                    l = null
                } else if (e === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
                    l = null
                } else t !== l && (l = null)
            }
        }
        return Qu = l, null
    }

    function od(l) {
        switch (l) {
            case"beforetoggle":
            case"cancel":
            case"click":
            case"close":
            case"contextmenu":
            case"copy":
            case"cut":
            case"auxclick":
            case"dblclick":
            case"dragend":
            case"dragstart":
            case"drop":
            case"focusin":
            case"focusout":
            case"input":
            case"invalid":
            case"keydown":
            case"keypress":
            case"keyup":
            case"mousedown":
            case"mouseup":
            case"paste":
            case"pause":
            case"play":
            case"pointercancel":
            case"pointerdown":
            case"pointerup":
            case"ratechange":
            case"reset":
            case"resize":
            case"seeked":
            case"submit":
            case"toggle":
            case"touchcancel":
            case"touchend":
            case"touchstart":
            case"volumechange":
            case"change":
            case"selectionchange":
            case"textInput":
            case"compositionstart":
            case"compositionend":
            case"compositionupdate":
            case"beforeblur":
            case"afterblur":
            case"beforeinput":
            case"blur":
            case"fullscreenchange":
            case"focus":
            case"hashchange":
            case"popstate":
            case"select":
            case"selectstart":
                return 2;
            case"drag":
            case"dragenter":
            case"dragexit":
            case"dragleave":
            case"dragover":
            case"mousemove":
            case"mouseout":
            case"mouseover":
            case"pointermove":
            case"pointerout":
            case"pointerover":
            case"scroll":
            case"touchmove":
            case"wheel":
            case"mouseenter":
            case"mouseleave":
            case"pointerenter":
            case"pointerleave":
                return 8;
            case"message":
                switch (Id()) {
                    case zf:
                        return 2;
                    case Ef:
                        return 8;
                    case Hn:
                    case Pd:
                        return 32;
                    case Tf:
                        return 268435456;
                    default:
                        return 32
                }
            default:
                return 32
        }
    }

    var ff = !1, xe = null, Se = null, Ae = null, Mn = new Map, Nn = new Map, ze = [],
        mh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");

    function rd(l, t) {
        switch (l) {
            case"focusin":
            case"focusout":
                xe = null;
                break;
            case"dragenter":
            case"dragleave":
                Se = null;
                break;
            case"mouseover":
            case"mouseout":
                Ae = null;
                break;
            case"pointerover":
            case"pointerout":
                Mn.delete(t.pointerId);
                break;
            case"gotpointercapture":
            case"lostpointercapture":
                Nn.delete(t.pointerId)
        }
    }

    function On(l, t, e, a, n, u) {
        return l === null || l.nativeEvent !== u ? (l = {
            blockedOn: t,
            domEventName: e,
            eventSystemFlags: a,
            nativeEvent: u,
            targetContainers: [n]
        }, t !== null && (t = Ke(t), t !== null && sd(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), l)
    }

    function hh(l, t, e, a, n) {
        switch (t) {
            case"focusin":
                return xe = On(xe, l, t, e, a, n), !0;
            case"dragenter":
                return Se = On(Se, l, t, e, a, n), !0;
            case"mouseover":
                return Ae = On(Ae, l, t, e, a, n), !0;
            case"pointerover":
                var u = n.pointerId;
                return Mn.set(u, On(Mn.get(u) || null, l, t, e, a, n)), !0;
            case"gotpointercapture":
                return u = n.pointerId, Nn.set(u, On(Nn.get(u) || null, l, t, e, a, n)), !0
        }
        return !1
    }

    function dd(l) {
        var t = ke(l.target);
        if (t !== null) {
            var e = N(t);
            if (e !== null) {
                if (t = e.tag, t === 13) {
                    if (t = U(e), t !== null) {
                        l.blockedOn = t, cm(l.priority, function () {
                            if (e.tag === 13) {
                                var a = rt();
                                a = Pu(a);
                                var n = ua(e, a);
                                n !== null && dt(n, e, a), af(e, a)
                            }
                        });
                        return
                    }
                } else if (t === 3 && e.stateNode.current.memoizedState.isDehydrated) {
                    l.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
                    return
                }
            }
        }
        l.blockedOn = null
    }

    function Zu(l) {
        if (l.blockedOn !== null) return !1;
        for (var t = l.targetContainers; 0 < t.length;) {
            var e = uf(l.nativeEvent);
            if (e === null) {
                e = l.nativeEvent;
                var a = new e.constructor(e.type, e);
                si = a, e.target.dispatchEvent(a), si = null
            } else return t = Ke(e), t !== null && sd(t), l.blockedOn = e, !1;
            t.shift()
        }
        return !0
    }

    function md(l, t, e) {
        Zu(l) && e.delete(t)
    }

    function gh() {
        ff = !1, xe !== null && Zu(xe) && (xe = null), Se !== null && Zu(Se) && (Se = null), Ae !== null && Zu(Ae) && (Ae = null), Mn.forEach(md), Nn.forEach(md)
    }

    function Vu(l, t) {
        l.blockedOn === t && (l.blockedOn = null, ff || (ff = !0, f.unstable_scheduleCallback(f.unstable_NormalPriority, gh)))
    }

    var Lu = null;

    function hd(l) {
        Lu !== l && (Lu = l, f.unstable_scheduleCallback(f.unstable_NormalPriority, function () {
            Lu === l && (Lu = null);
            for (var t = 0; t < l.length; t += 3) {
                var e = l[t], a = l[t + 1], n = l[t + 2];
                if (typeof a != "function") {
                    if (cf(a || e) === null) continue;
                    break
                }
                var u = Ke(e);
                u !== null && (l.splice(t, 3), t -= 3, ic(u, {pending: !0, data: n, method: e.method, action: a}, a, n))
            }
        }))
    }

    function jn(l) {
        function t(o) {
            return Vu(o, l)
        }

        xe !== null && Vu(xe, l), Se !== null && Vu(Se, l), Ae !== null && Vu(Ae, l), Mn.forEach(t), Nn.forEach(t);
        for (var e = 0; e < ze.length; e++) {
            var a = ze[e];
            a.blockedOn === l && (a.blockedOn = null)
        }
        for (; 0 < ze.length && (e = ze[0], e.blockedOn === null);) dd(e), e.blockedOn === null && ze.shift();
        if (e = (l.ownerDocument || l).$$reactFormReplay, e != null) for (a = 0; a < e.length; a += 3) {
            var n = e[a], u = e[a + 1], i = n[Il] || null;
            if (typeof u == "function") i || hd(e); else if (i) {
                var c = null;
                if (u && u.hasAttribute("formAction")) {
                    if (n = u, i = u[Il] || null) c = i.formAction; else if (cf(n) !== null) continue
                } else c = i.action;
                typeof c == "function" ? e[a + 1] = c : (e.splice(a, 3), a -= 3), hd(e)
            }
        }
    }

    function sf(l) {
        this._internalRoot = l
    }

    ku.prototype.render = sf.prototype.render = function (l) {
        var t = this._internalRoot;
        if (t === null) throw Error(s(409));
        var e = t.current, a = rt();
        cd(e, a, l, t, null, null)
    }, ku.prototype.unmount = sf.prototype.unmount = function () {
        var l = this._internalRoot;
        if (l !== null) {
            this._internalRoot = null;
            var t = l.containerInfo;
            cd(l.current, 2, null, l, null, null), Mu(), t[Le] = null
        }
    };

    function ku(l) {
        this._internalRoot = l
    }

    ku.prototype.unstable_scheduleHydration = function (l) {
        if (l) {
            var t = jf();
            l = {blockedOn: null, target: l, priority: t};
            for (var e = 0; e < ze.length && t !== 0 && t < ze[e].priority; e++) ;
            ze.splice(e, 0, l), e === 0 && dd(l)
        }
    };
    var gd = S.version;
    if (gd !== "19.1.0") throw Error(s(527, gd, "19.1.0"));
    H.findDOMNode = function (l) {
        var t = l._reactInternals;
        if (t === void 0) throw typeof l.render == "function" ? Error(s(188)) : (l = Object.keys(l).join(","), Error(s(268, l)));
        return l = O(t), l = l !== null ? x(l) : null, l = l === null ? null : l.stateNode, l
    };
    var yh = {
        bundleType: 0,
        version: "19.1.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: A,
        reconcilerVersion: "19.1.0"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Ku = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Ku.isDisabled && Ku.supportsFiber) try {
            Ua = Ku.inject(yh), nt = Ku
        } catch {
        }
    }
    return Rn.createRoot = function (l, t) {
        if (!z(l)) throw Error(s(299));
        var e = !1, a = "", n = Do, u = Ro, i = Uo, c = null;
        return t != null && (t.unstable_strictMode === !0 && (e = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (i = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (c = t.unstable_transitionCallbacks)), t = ud(l, 1, !1, null, null, e, a, n, u, i, c, null), l[Le] = t.current, Vc(l), new sf(t)
    }, Rn.hydrateRoot = function (l, t, e) {
        if (!z(l)) throw Error(s(299));
        var a = !1, n = "", u = Do, i = Ro, c = Uo, o = null, g = null;
        return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onUncaughtError !== void 0 && (u = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError), e.unstable_transitionCallbacks !== void 0 && (o = e.unstable_transitionCallbacks), e.formState !== void 0 && (g = e.formState)), t = ud(l, 1, !0, t, e ?? null, a, n, u, i, c, o, g), t.context = id(null), e = t.current, a = rt(), a = Pu(a), n = ie(a), n.callback = null, ce(e, n, a), e = a, t.current.lanes = e, Ca(t, e), Ht(t), l[Le] = t.current, Vc(l), new ku(t)
    }, Rn.version = "19.1.0", Rn
}

var Td;

function _h() {
    if (Td) return df.exports;
    Td = 1;

    function f() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f)
        } catch (S) {
            console.error(S)
        }
    }

    return f(), df.exports = Th(), df.exports
}

var Mh = _h();

function _d(f, S) {
    if (typeof f == "function") return f(S);
    f != null && (f.current = S)
}

function Nh(...f) {
    return S => {
        let v = !1;
        const s = f.map(z => {
            const N = _d(z, S);
            return !v && typeof N == "function" && (v = !0), N
        });
        if (v) return () => {
            for (let z = 0; z < s.length; z++) {
                const N = s[z];
                typeof N == "function" ? N() : _d(f[z], null)
            }
        }
    }
}

function Oh(...f) {
    return xl.useCallback(Nh(...f), f)
}

function jh(f) {
    const S = Rh(f), v = xl.forwardRef((s, z) => {
        const {children: N, ...U} = s, X = xl.Children.toArray(N), O = X.find(Hh);
        if (O) {
            const x = O.props.children,
                R = X.map(W => W === O ? xl.Children.count(x) > 1 ? xl.Children.only(null) : xl.isValidElement(x) ? x.props.children : null : W);
            return y.jsx(S, {...U, ref: z, children: xl.isValidElement(x) ? xl.cloneElement(x, void 0, R) : null})
        }
        return y.jsx(S, {...U, ref: z, children: N})
    });
    return v.displayName = `${f}.Slot`, v
}

var Dh = jh("Slot");

function Rh(f) {
    const S = xl.forwardRef((v, s) => {
        const {children: z, ...N} = v, U = xl.isValidElement(z) ? wh(z) : void 0, X = Oh(U, s);
        if (xl.isValidElement(z)) {
            const O = Ch(N, z.props);
            return z.type !== xl.Fragment && (O.ref = X), xl.cloneElement(z, O)
        }
        return xl.Children.count(z) > 1 ? xl.Children.only(null) : null
    });
    return S.displayName = `${f}.SlotClone`, S
}

var Uh = Symbol("radix.slottable");

function Hh(f) {
    return xl.isValidElement(f) && typeof f.type == "function" && "__radixId" in f.type && f.type.__radixId === Uh
}

function Ch(f, S) {
    const v = {...S};
    for (const s in S) {
        const z = f[s], N = S[s];
        /^on[A-Z]/.test(s) ? z && N ? v[s] = (...X) => {
            const O = N(...X);
            return z(...X), O
        } : z && (v[s] = z) : s === "style" ? v[s] = {...z, ...N} : s === "className" && (v[s] = [z, N].filter(Boolean).join(" "))
    }
    return {...f, ...v}
}

function wh(f) {
    var s, z;
    let S = (s = Object.getOwnPropertyDescriptor(f.props, "ref")) == null ? void 0 : s.get,
        v = S && "isReactWarning" in S && S.isReactWarning;
    return v ? f.ref : (S = (z = Object.getOwnPropertyDescriptor(f, "ref")) == null ? void 0 : z.get, v = S && "isReactWarning" in S && S.isReactWarning, v ? f.props.ref : f.props.ref || f.ref)
}

function qd(f) {
    var S, v, s = "";
    if (typeof f == "string" || typeof f == "number") s += f; else if (typeof f == "object") if (Array.isArray(f)) {
        var z = f.length;
        for (S = 0; S < z; S++) f[S] && (v = qd(f[S])) && (s && (s += " "), s += v)
    } else for (v in f) f[v] && (s && (s += " "), s += v);
    return s
}

function Bd() {
    for (var f, S, v = 0, s = "", z = arguments.length; v < z; v++) (f = arguments[v]) && (S = qd(f)) && (s && (s += " "), s += S);
    return s
}

const Md = f => typeof f == "boolean" ? `${f}` : f === 0 ? "0" : f, Nd = Bd, qh = (f, S) => v => {
        var s;
        if ((S == null ? void 0 : S.variants) == null) return Nd(f, v == null ? void 0 : v.class, v == null ? void 0 : v.className);
        const {variants: z, defaultVariants: N} = S, U = Object.keys(z).map(x => {
            const R = v == null ? void 0 : v[x], W = N == null ? void 0 : N[x];
            if (R === null) return null;
            const V = Md(R) || Md(W);
            return z[x][V]
        }), X = v && Object.entries(v).reduce((x, R) => {
            let [W, V] = R;
            return V === void 0 || (x[W] = V), x
        }, {}), O = S == null || (s = S.compoundVariants) === null || s === void 0 ? void 0 : s.reduce((x, R) => {
            let {class: W, className: V, ...bl} = R;
            return Object.entries(bl).every(Y => {
                let [ll, dl] = Y;
                return Array.isArray(dl) ? dl.includes({...N, ...X}[ll]) : {...N, ...X}[ll] === dl
            }) ? [...x, W, V] : x
        }, []);
        return Nd(f, U, O, v == null ? void 0 : v.class, v == null ? void 0 : v.className)
    }, Af = "-", Bh = f => {
        const S = Yh(f), {conflictingClassGroups: v, conflictingClassGroupModifiers: s} = f;
        return {
            getClassGroupId: U => {
                const X = U.split(Af);
                return X[0] === "" && X.length !== 1 && X.shift(), Gd(X, S) || Gh(U)
            }, getConflictingClassGroupIds: (U, X) => {
                const O = v[U] || [];
                return X && s[U] ? [...O, ...s[U]] : O
            }
        }
    }, Gd = (f, S) => {
        var U;
        if (f.length === 0) return S.classGroupId;
        const v = f[0], s = S.nextPart.get(v), z = s ? Gd(f.slice(1), s) : void 0;
        if (z) return z;
        if (S.validators.length === 0) return;
        const N = f.join(Af);
        return (U = S.validators.find(({validator: X}) => X(N))) == null ? void 0 : U.classGroupId
    }, Od = /^\[(.+)\]$/, Gh = f => {
        if (Od.test(f)) {
            const S = Od.exec(f)[1], v = S == null ? void 0 : S.substring(0, S.indexOf(":"));
            if (v) return "arbitrary.." + v
        }
    }, Yh = f => {
        const {theme: S, classGroups: v} = f, s = {nextPart: new Map, validators: []};
        for (const z in v) bf(v[z], s, z, S);
        return s
    }, bf = (f, S, v, s) => {
        f.forEach(z => {
            if (typeof z == "string") {
                const N = z === "" ? S : jd(S, z);
                N.classGroupId = v;
                return
            }
            if (typeof z == "function") {
                if (Xh(z)) {
                    bf(z(s), S, v, s);
                    return
                }
                S.validators.push({validator: z, classGroupId: v});
                return
            }
            Object.entries(z).forEach(([N, U]) => {
                bf(U, jd(S, N), v, s)
            })
        })
    }, jd = (f, S) => {
        let v = f;
        return S.split(Af).forEach(s => {
            v.nextPart.has(s) || v.nextPart.set(s, {nextPart: new Map, validators: []}), v = v.nextPart.get(s)
        }), v
    }, Xh = f => f.isThemeGetter, Qh = f => {
        if (f < 1) return {
            get: () => {
            }, set: () => {
            }
        };
        let S = 0, v = new Map, s = new Map;
        const z = (N, U) => {
            v.set(N, U), S++, S > f && (S = 0, s = v, v = new Map)
        };
        return {
            get(N) {
                let U = v.get(N);
                if (U !== void 0) return U;
                if ((U = s.get(N)) !== void 0) return z(N, U), U
            }, set(N, U) {
                v.has(N) ? v.set(N, U) : z(N, U)
            }
        }
    }, pf = "!", xf = ":", Zh = xf.length, Vh = f => {
        const {prefix: S, experimentalParseClassName: v} = f;
        let s = z => {
            const N = [];
            let U = 0, X = 0, O = 0, x;
            for (let Y = 0; Y < z.length; Y++) {
                let ll = z[Y];
                if (U === 0 && X === 0) {
                    if (ll === xf) {
                        N.push(z.slice(O, Y)), O = Y + Zh;
                        continue
                    }
                    if (ll === "/") {
                        x = Y;
                        continue
                    }
                }
                ll === "[" ? U++ : ll === "]" ? U-- : ll === "(" ? X++ : ll === ")" && X--
            }
            const R = N.length === 0 ? z : z.substring(O), W = Lh(R), V = W !== R, bl = x && x > O ? x - O : void 0;
            return {modifiers: N, hasImportantModifier: V, baseClassName: W, maybePostfixModifierPosition: bl}
        };
        if (S) {
            const z = S + xf, N = s;
            s = U => U.startsWith(z) ? N(U.substring(z.length)) : {
                isExternal: !0,
                modifiers: [],
                hasImportantModifier: !1,
                baseClassName: U,
                maybePostfixModifierPosition: void 0
            }
        }
        if (v) {
            const z = s;
            s = N => v({className: N, parseClassName: z})
        }
        return s
    }, Lh = f => f.endsWith(pf) ? f.substring(0, f.length - 1) : f.startsWith(pf) ? f.substring(1) : f, kh = f => {
        const S = Object.fromEntries(f.orderSensitiveModifiers.map(s => [s, !0]));
        return s => {
            if (s.length <= 1) return s;
            const z = [];
            let N = [];
            return s.forEach(U => {
                U[0] === "[" || S[U] ? (z.push(...N.sort(), U), N = []) : N.push(U)
            }), z.push(...N.sort()), z
        }
    }, Kh = f => ({cache: Qh(f.cacheSize), parseClassName: Vh(f), sortModifiers: kh(f), ...Bh(f)}), Jh = /\s+/,
    Wh = (f, S) => {
        const {parseClassName: v, getClassGroupId: s, getConflictingClassGroupIds: z, sortModifiers: N} = S, U = [],
            X = f.trim().split(Jh);
        let O = "";
        for (let x = X.length - 1; x >= 0; x -= 1) {
            const R = X[x], {
                isExternal: W,
                modifiers: V,
                hasImportantModifier: bl,
                baseClassName: Y,
                maybePostfixModifierPosition: ll
            } = v(R);
            if (W) {
                O = R + (O.length > 0 ? " " + O : O);
                continue
            }
            let dl = !!ll, Zl = s(dl ? Y.substring(0, ll) : Y);
            if (!Zl) {
                if (!dl) {
                    O = R + (O.length > 0 ? " " + O : O);
                    continue
                }
                if (Zl = s(Y), !Zl) {
                    O = R + (O.length > 0 ? " " + O : O);
                    continue
                }
                dl = !1
            }
            const Fl = N(V).join(":"), El = bl ? Fl + pf : Fl, Bl = El + Zl;
            if (U.includes(Bl)) continue;
            U.push(Bl);
            const F = z(Zl, dl);
            for (let Ml = 0; Ml < F.length; ++Ml) {
                const Hl = F[Ml];
                U.push(El + Hl)
            }
            O = R + (O.length > 0 ? " " + O : O)
        }
        return O
    };

function $h() {
    let f = 0, S, v, s = "";
    for (; f < arguments.length;) (S = arguments[f++]) && (v = Yd(S)) && (s && (s += " "), s += v);
    return s
}

const Yd = f => {
    if (typeof f == "string") return f;
    let S, v = "";
    for (let s = 0; s < f.length; s++) f[s] && (S = Yd(f[s])) && (v && (v += " "), v += S);
    return v
};

function Fh(f, ...S) {
    let v, s, z, N = U;

    function U(O) {
        const x = S.reduce((R, W) => W(R), f());
        return v = Kh(x), s = v.cache.get, z = v.cache.set, N = X, X(O)
    }

    function X(O) {
        const x = s(O);
        if (x) return x;
        const R = Wh(O, v);
        return z(O, R), R
    }

    return function () {
        return N($h.apply(null, arguments))
    }
}

const ql = f => {
        const S = v => v[f] || [];
        return S.isThemeGetter = !0, S
    }, Xd = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Qd = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Ih = /^\d+\/\d+$/,
    Ph = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    l1 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    t1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    e1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    a1 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    ja = f => Ih.test(f), P = f => !!f && !Number.isNaN(Number(f)), Te = f => !!f && Number.isInteger(Number(f)),
    yf = f => f.endsWith("%") && P(f.slice(0, -1)), Ft = f => Ph.test(f), n1 = () => !0,
    u1 = f => l1.test(f) && !t1.test(f), Zd = () => !1, i1 = f => e1.test(f), c1 = f => a1.test(f),
    f1 = f => !B(f) && !G(f), s1 = f => Da(f, kd, Zd), B = f => Xd.test(f), Ve = f => Da(f, Kd, u1),
    vf = f => Da(f, h1, P), Dd = f => Da(f, Vd, Zd), o1 = f => Da(f, Ld, c1), Ju = f => Da(f, Jd, i1),
    G = f => Qd.test(f), Un = f => Ra(f, Kd), r1 = f => Ra(f, g1), Rd = f => Ra(f, Vd), d1 = f => Ra(f, kd),
    m1 = f => Ra(f, Ld), Wu = f => Ra(f, Jd, !0), Da = (f, S, v) => {
        const s = Xd.exec(f);
        return s ? s[1] ? S(s[1]) : v(s[2]) : !1
    }, Ra = (f, S, v = !1) => {
        const s = Qd.exec(f);
        return s ? s[1] ? S(s[1]) : v : !1
    }, Vd = f => f === "position" || f === "percentage", Ld = f => f === "image" || f === "url",
    kd = f => f === "length" || f === "size" || f === "bg-size", Kd = f => f === "length", h1 = f => f === "number",
    g1 = f => f === "family-name", Jd = f => f === "shadow", y1 = () => {
        const f = ql("color"), S = ql("font"), v = ql("text"), s = ql("font-weight"), z = ql("tracking"), N = ql("leading"),
            U = ql("breakpoint"), X = ql("container"), O = ql("spacing"), x = ql("radius"), R = ql("shadow"),
            W = ql("inset-shadow"), V = ql("text-shadow"), bl = ql("drop-shadow"), Y = ql("blur"), ll = ql("perspective"),
            dl = ql("aspect"), Zl = ql("ease"), Fl = ql("animate"),
            El = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            Bl = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"],
            F = () => [...Bl(), G, B], Ml = () => ["auto", "hidden", "clip", "visible", "scroll"],
            Hl = () => ["auto", "contain", "none"], Z = () => [G, B, O], Dl = () => [ja, "full", "auto", ...Z()],
            Ct = () => [Te, "none", "subgrid", G, B], mt = () => ["auto", {span: ["full", Te, G, B]}, Te, G, B],
            Nl = () => [Te, "auto", G, B], Nt = () => ["auto", "min", "max", "fr", G, B],
            Et = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"],
            Al = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], A = () => ["auto", ...Z()],
            H = () => [ja, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...Z()],
            j = () => [f, G, B], sl = () => [...Bl(), Rd, Dd, {position: [G, B]}],
            r = () => ["no-repeat", {repeat: ["", "x", "y", "space", "round"]}],
            M = () => ["auto", "cover", "contain", d1, s1, {size: [G, B]}], C = () => [yf, Un, Ve],
            D = () => ["", "none", "full", x, G, B], w = () => ["", P, Un, Ve],
            el = () => ["solid", "dashed", "dotted", "double"],
            J = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
            il = () => [P, yf, Rd, Dd], yl = () => ["", "none", Y, G, B], at = () => ["none", P, G, B],
            It = () => ["none", P, G, B], Pt = () => [P, G, B], le = () => [ja, "full", ...Z()];
        return {
            cacheSize: 500,
            theme: {
                animate: ["spin", "ping", "pulse", "bounce"],
                aspect: ["video"],
                blur: [Ft],
                breakpoint: [Ft],
                color: [n1],
                container: [Ft],
                "drop-shadow": [Ft],
                ease: ["in", "out", "in-out"],
                font: [f1],
                "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
                "inset-shadow": [Ft],
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
                perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
                radius: [Ft],
                shadow: [Ft],
                spacing: ["px", P],
                text: [Ft],
                "text-shadow": [Ft],
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
            },
            classGroups: {
                aspect: [{aspect: ["auto", "square", ja, B, G, dl]}],
                container: ["container"],
                columns: [{columns: [P, B, G, X]}],
                "break-after": [{"break-after": El()}],
                "break-before": [{"break-before": El()}],
                "break-inside": [{"break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]}],
                "box-decoration": [{"box-decoration": ["slice", "clone"]}],
                box: [{box: ["border", "content"]}],
                display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                sr: ["sr-only", "not-sr-only"],
                float: [{float: ["right", "left", "none", "start", "end"]}],
                clear: [{clear: ["left", "right", "both", "none", "start", "end"]}],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{object: ["contain", "cover", "fill", "none", "scale-down"]}],
                "object-position": [{object: F()}],
                overflow: [{overflow: Ml()}],
                "overflow-x": [{"overflow-x": Ml()}],
                "overflow-y": [{"overflow-y": Ml()}],
                overscroll: [{overscroll: Hl()}],
                "overscroll-x": [{"overscroll-x": Hl()}],
                "overscroll-y": [{"overscroll-y": Hl()}],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{inset: Dl()}],
                "inset-x": [{"inset-x": Dl()}],
                "inset-y": [{"inset-y": Dl()}],
                start: [{start: Dl()}],
                end: [{end: Dl()}],
                top: [{top: Dl()}],
                right: [{right: Dl()}],
                bottom: [{bottom: Dl()}],
                left: [{left: Dl()}],
                visibility: ["visible", "invisible", "collapse"],
                z: [{z: [Te, "auto", G, B]}],
                basis: [{basis: [ja, "full", "auto", X, ...Z()]}],
                "flex-direction": [{flex: ["row", "row-reverse", "col", "col-reverse"]}],
                "flex-wrap": [{flex: ["nowrap", "wrap", "wrap-reverse"]}],
                flex: [{flex: [P, ja, "auto", "initial", "none", B]}],
                grow: [{grow: ["", P, G, B]}],
                shrink: [{shrink: ["", P, G, B]}],
                order: [{order: [Te, "first", "last", "none", G, B]}],
                "grid-cols": [{"grid-cols": Ct()}],
                "col-start-end": [{col: mt()}],
                "col-start": [{"col-start": Nl()}],
                "col-end": [{"col-end": Nl()}],
                "grid-rows": [{"grid-rows": Ct()}],
                "row-start-end": [{row: mt()}],
                "row-start": [{"row-start": Nl()}],
                "row-end": [{"row-end": Nl()}],
                "grid-flow": [{"grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]}],
                "auto-cols": [{"auto-cols": Nt()}],
                "auto-rows": [{"auto-rows": Nt()}],
                gap: [{gap: Z()}],
                "gap-x": [{"gap-x": Z()}],
                "gap-y": [{"gap-y": Z()}],
                "justify-content": [{justify: [...Et(), "normal"]}],
                "justify-items": [{"justify-items": [...Al(), "normal"]}],
                "justify-self": [{"justify-self": ["auto", ...Al()]}],
                "align-content": [{content: ["normal", ...Et()]}],
                "align-items": [{items: [...Al(), {baseline: ["", "last"]}]}],
                "align-self": [{self: ["auto", ...Al(), {baseline: ["", "last"]}]}],
                "place-content": [{"place-content": Et()}],
                "place-items": [{"place-items": [...Al(), "baseline"]}],
                "place-self": [{"place-self": ["auto", ...Al()]}],
                p: [{p: Z()}],
                px: [{px: Z()}],
                py: [{py: Z()}],
                ps: [{ps: Z()}],
                pe: [{pe: Z()}],
                pt: [{pt: Z()}],
                pr: [{pr: Z()}],
                pb: [{pb: Z()}],
                pl: [{pl: Z()}],
                m: [{m: A()}],
                mx: [{mx: A()}],
                my: [{my: A()}],
                ms: [{ms: A()}],
                me: [{me: A()}],
                mt: [{mt: A()}],
                mr: [{mr: A()}],
                mb: [{mb: A()}],
                ml: [{ml: A()}],
                "space-x": [{"space-x": Z()}],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{"space-y": Z()}],
                "space-y-reverse": ["space-y-reverse"],
                size: [{size: H()}],
                w: [{w: [X, "screen", ...H()]}],
                "min-w": [{"min-w": [X, "screen", "none", ...H()]}],
                "max-w": [{"max-w": [X, "screen", "none", "prose", {screen: [U]}, ...H()]}],
                h: [{h: ["screen", "lh", ...H()]}],
                "min-h": [{"min-h": ["screen", "lh", "none", ...H()]}],
                "max-h": [{"max-h": ["screen", "lh", ...H()]}],
                "font-size": [{text: ["base", v, Un, Ve]}],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [{font: [s, G, vf]}],
                "font-stretch": [{"font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", yf, B]}],
                "font-family": [{font: [r1, B, S]}],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                tracking: [{tracking: [z, G, B]}],
                "line-clamp": [{"line-clamp": [P, "none", G, vf]}],
                leading: [{leading: [N, ...Z()]}],
                "list-image": [{"list-image": ["none", G, B]}],
                "list-style-position": [{list: ["inside", "outside"]}],
                "list-style-type": [{list: ["disc", "decimal", "none", G, B]}],
                "text-alignment": [{text: ["left", "center", "right", "justify", "start", "end"]}],
                "placeholder-color": [{placeholder: j()}],
                "text-color": [{text: j()}],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{decoration: [...el(), "wavy"]}],
                "text-decoration-thickness": [{decoration: [P, "from-font", "auto", G, Ve]}],
                "text-decoration-color": [{decoration: j()}],
                "underline-offset": [{"underline-offset": [P, "auto", G, B]}],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{text: ["wrap", "nowrap", "balance", "pretty"]}],
                indent: [{indent: Z()}],
                "vertical-align": [{align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", G, B]}],
                whitespace: [{whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]}],
                break: [{break: ["normal", "words", "all", "keep"]}],
                wrap: [{wrap: ["break-word", "anywhere", "normal"]}],
                hyphens: [{hyphens: ["none", "manual", "auto"]}],
                content: [{content: ["none", G, B]}],
                "bg-attachment": [{bg: ["fixed", "local", "scroll"]}],
                "bg-clip": [{"bg-clip": ["border", "padding", "content", "text"]}],
                "bg-origin": [{"bg-origin": ["border", "padding", "content"]}],
                "bg-position": [{bg: sl()}],
                "bg-repeat": [{bg: r()}],
                "bg-size": [{bg: M()}],
                "bg-image": [{
                    bg: ["none", {
                        linear: [{to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]}, Te, G, B],
                        radial: ["", G, B],
                        conic: [Te, G, B]
                    }, m1, o1]
                }],
                "bg-color": [{bg: j()}],
                "gradient-from-pos": [{from: C()}],
                "gradient-via-pos": [{via: C()}],
                "gradient-to-pos": [{to: C()}],
                "gradient-from": [{from: j()}],
                "gradient-via": [{via: j()}],
                "gradient-to": [{to: j()}],
                rounded: [{rounded: D()}],
                "rounded-s": [{"rounded-s": D()}],
                "rounded-e": [{"rounded-e": D()}],
                "rounded-t": [{"rounded-t": D()}],
                "rounded-r": [{"rounded-r": D()}],
                "rounded-b": [{"rounded-b": D()}],
                "rounded-l": [{"rounded-l": D()}],
                "rounded-ss": [{"rounded-ss": D()}],
                "rounded-se": [{"rounded-se": D()}],
                "rounded-ee": [{"rounded-ee": D()}],
                "rounded-es": [{"rounded-es": D()}],
                "rounded-tl": [{"rounded-tl": D()}],
                "rounded-tr": [{"rounded-tr": D()}],
                "rounded-br": [{"rounded-br": D()}],
                "rounded-bl": [{"rounded-bl": D()}],
                "border-w": [{border: w()}],
                "border-w-x": [{"border-x": w()}],
                "border-w-y": [{"border-y": w()}],
                "border-w-s": [{"border-s": w()}],
                "border-w-e": [{"border-e": w()}],
                "border-w-t": [{"border-t": w()}],
                "border-w-r": [{"border-r": w()}],
                "border-w-b": [{"border-b": w()}],
                "border-w-l": [{"border-l": w()}],
                "divide-x": [{"divide-x": w()}],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{"divide-y": w()}],
                "divide-y-reverse": ["divide-y-reverse"],
                "border-style": [{border: [...el(), "hidden", "none"]}],
                "divide-style": [{divide: [...el(), "hidden", "none"]}],
                "border-color": [{border: j()}],
                "border-color-x": [{"border-x": j()}],
                "border-color-y": [{"border-y": j()}],
                "border-color-s": [{"border-s": j()}],
                "border-color-e": [{"border-e": j()}],
                "border-color-t": [{"border-t": j()}],
                "border-color-r": [{"border-r": j()}],
                "border-color-b": [{"border-b": j()}],
                "border-color-l": [{"border-l": j()}],
                "divide-color": [{divide: j()}],
                "outline-style": [{outline: [...el(), "none", "hidden"]}],
                "outline-offset": [{"outline-offset": [P, G, B]}],
                "outline-w": [{outline: ["", P, Un, Ve]}],
                "outline-color": [{outline: j()}],
                shadow: [{shadow: ["", "none", R, Wu, Ju]}],
                "shadow-color": [{shadow: j()}],
                "inset-shadow": [{"inset-shadow": ["none", W, Wu, Ju]}],
                "inset-shadow-color": [{"inset-shadow": j()}],
                "ring-w": [{ring: w()}],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{ring: j()}],
                "ring-offset-w": [{"ring-offset": [P, Ve]}],
                "ring-offset-color": [{"ring-offset": j()}],
                "inset-ring-w": [{"inset-ring": w()}],
                "inset-ring-color": [{"inset-ring": j()}],
                "text-shadow": [{"text-shadow": ["none", V, Wu, Ju]}],
                "text-shadow-color": [{"text-shadow": j()}],
                opacity: [{opacity: [P, G, B]}],
                "mix-blend": [{"mix-blend": [...J(), "plus-darker", "plus-lighter"]}],
                "bg-blend": [{"bg-blend": J()}],
                "mask-clip": [{"mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]}, "mask-no-clip"],
                "mask-composite": [{mask: ["add", "subtract", "intersect", "exclude"]}],
                "mask-image-linear-pos": [{"mask-linear": [P]}],
                "mask-image-linear-from-pos": [{"mask-linear-from": il()}],
                "mask-image-linear-to-pos": [{"mask-linear-to": il()}],
                "mask-image-linear-from-color": [{"mask-linear-from": j()}],
                "mask-image-linear-to-color": [{"mask-linear-to": j()}],
                "mask-image-t-from-pos": [{"mask-t-from": il()}],
                "mask-image-t-to-pos": [{"mask-t-to": il()}],
                "mask-image-t-from-color": [{"mask-t-from": j()}],
                "mask-image-t-to-color": [{"mask-t-to": j()}],
                "mask-image-r-from-pos": [{"mask-r-from": il()}],
                "mask-image-r-to-pos": [{"mask-r-to": il()}],
                "mask-image-r-from-color": [{"mask-r-from": j()}],
                "mask-image-r-to-color": [{"mask-r-to": j()}],
                "mask-image-b-from-pos": [{"mask-b-from": il()}],
                "mask-image-b-to-pos": [{"mask-b-to": il()}],
                "mask-image-b-from-color": [{"mask-b-from": j()}],
                "mask-image-b-to-color": [{"mask-b-to": j()}],
                "mask-image-l-from-pos": [{"mask-l-from": il()}],
                "mask-image-l-to-pos": [{"mask-l-to": il()}],
                "mask-image-l-from-color": [{"mask-l-from": j()}],
                "mask-image-l-to-color": [{"mask-l-to": j()}],
                "mask-image-x-from-pos": [{"mask-x-from": il()}],
                "mask-image-x-to-pos": [{"mask-x-to": il()}],
                "mask-image-x-from-color": [{"mask-x-from": j()}],
                "mask-image-x-to-color": [{"mask-x-to": j()}],
                "mask-image-y-from-pos": [{"mask-y-from": il()}],
                "mask-image-y-to-pos": [{"mask-y-to": il()}],
                "mask-image-y-from-color": [{"mask-y-from": j()}],
                "mask-image-y-to-color": [{"mask-y-to": j()}],
                "mask-image-radial": [{"mask-radial": [G, B]}],
                "mask-image-radial-from-pos": [{"mask-radial-from": il()}],
                "mask-image-radial-to-pos": [{"mask-radial-to": il()}],
                "mask-image-radial-from-color": [{"mask-radial-from": j()}],
                "mask-image-radial-to-color": [{"mask-radial-to": j()}],
                "mask-image-radial-shape": [{"mask-radial": ["circle", "ellipse"]}],
                "mask-image-radial-size": [{"mask-radial": [{closest: ["side", "corner"], farthest: ["side", "corner"]}]}],
                "mask-image-radial-pos": [{"mask-radial-at": Bl()}],
                "mask-image-conic-pos": [{"mask-conic": [P]}],
                "mask-image-conic-from-pos": [{"mask-conic-from": il()}],
                "mask-image-conic-to-pos": [{"mask-conic-to": il()}],
                "mask-image-conic-from-color": [{"mask-conic-from": j()}],
                "mask-image-conic-to-color": [{"mask-conic-to": j()}],
                "mask-mode": [{mask: ["alpha", "luminance", "match"]}],
                "mask-origin": [{"mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]}],
                "mask-position": [{mask: sl()}],
                "mask-repeat": [{mask: r()}],
                "mask-size": [{mask: M()}],
                "mask-type": [{"mask-type": ["alpha", "luminance"]}],
                "mask-image": [{mask: ["none", G, B]}],
                filter: [{filter: ["", "none", G, B]}],
                blur: [{blur: yl()}],
                brightness: [{brightness: [P, G, B]}],
                contrast: [{contrast: [P, G, B]}],
                "drop-shadow": [{"drop-shadow": ["", "none", bl, Wu, Ju]}],
                "drop-shadow-color": [{"drop-shadow": j()}],
                grayscale: [{grayscale: ["", P, G, B]}],
                "hue-rotate": [{"hue-rotate": [P, G, B]}],
                invert: [{invert: ["", P, G, B]}],
                saturate: [{saturate: [P, G, B]}],
                sepia: [{sepia: ["", P, G, B]}],
                "backdrop-filter": [{"backdrop-filter": ["", "none", G, B]}],
                "backdrop-blur": [{"backdrop-blur": yl()}],
                "backdrop-brightness": [{"backdrop-brightness": [P, G, B]}],
                "backdrop-contrast": [{"backdrop-contrast": [P, G, B]}],
                "backdrop-grayscale": [{"backdrop-grayscale": ["", P, G, B]}],
                "backdrop-hue-rotate": [{"backdrop-hue-rotate": [P, G, B]}],
                "backdrop-invert": [{"backdrop-invert": ["", P, G, B]}],
                "backdrop-opacity": [{"backdrop-opacity": [P, G, B]}],
                "backdrop-saturate": [{"backdrop-saturate": [P, G, B]}],
                "backdrop-sepia": [{"backdrop-sepia": ["", P, G, B]}],
                "border-collapse": [{border: ["collapse", "separate"]}],
                "border-spacing": [{"border-spacing": Z()}],
                "border-spacing-x": [{"border-spacing-x": Z()}],
                "border-spacing-y": [{"border-spacing-y": Z()}],
                "table-layout": [{table: ["auto", "fixed"]}],
                caption: [{caption: ["top", "bottom"]}],
                transition: [{transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", G, B]}],
                "transition-behavior": [{transition: ["normal", "discrete"]}],
                duration: [{duration: [P, "initial", G, B]}],
                ease: [{ease: ["linear", "initial", Zl, G, B]}],
                delay: [{delay: [P, G, B]}],
                animate: [{animate: ["none", Fl, G, B]}],
                backface: [{backface: ["hidden", "visible"]}],
                perspective: [{perspective: [ll, G, B]}],
                "perspective-origin": [{"perspective-origin": F()}],
                rotate: [{rotate: at()}],
                "rotate-x": [{"rotate-x": at()}],
                "rotate-y": [{"rotate-y": at()}],
                "rotate-z": [{"rotate-z": at()}],
                scale: [{scale: It()}],
                "scale-x": [{"scale-x": It()}],
                "scale-y": [{"scale-y": It()}],
                "scale-z": [{"scale-z": It()}],
                "scale-3d": ["scale-3d"],
                skew: [{skew: Pt()}],
                "skew-x": [{"skew-x": Pt()}],
                "skew-y": [{"skew-y": Pt()}],
                transform: [{transform: [G, B, "", "none", "gpu", "cpu"]}],
                "transform-origin": [{origin: F()}],
                "transform-style": [{transform: ["3d", "flat"]}],
                translate: [{translate: le()}],
                "translate-x": [{"translate-x": le()}],
                "translate-y": [{"translate-y": le()}],
                "translate-z": [{"translate-z": le()}],
                "translate-none": ["translate-none"],
                accent: [{accent: j()}],
                appearance: [{appearance: ["none", "auto"]}],
                "caret-color": [{caret: j()}],
                "color-scheme": [{scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]}],
                cursor: [{cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", G, B]}],
                "field-sizing": [{"field-sizing": ["fixed", "content"]}],
                "pointer-events": [{"pointer-events": ["auto", "none"]}],
                resize: [{resize: ["none", "", "y", "x"]}],
                "scroll-behavior": [{scroll: ["auto", "smooth"]}],
                "scroll-m": [{"scroll-m": Z()}],
                "scroll-mx": [{"scroll-mx": Z()}],
                "scroll-my": [{"scroll-my": Z()}],
                "scroll-ms": [{"scroll-ms": Z()}],
                "scroll-me": [{"scroll-me": Z()}],
                "scroll-mt": [{"scroll-mt": Z()}],
                "scroll-mr": [{"scroll-mr": Z()}],
                "scroll-mb": [{"scroll-mb": Z()}],
                "scroll-ml": [{"scroll-ml": Z()}],
                "scroll-p": [{"scroll-p": Z()}],
                "scroll-px": [{"scroll-px": Z()}],
                "scroll-py": [{"scroll-py": Z()}],
                "scroll-ps": [{"scroll-ps": Z()}],
                "scroll-pe": [{"scroll-pe": Z()}],
                "scroll-pt": [{"scroll-pt": Z()}],
                "scroll-pr": [{"scroll-pr": Z()}],
                "scroll-pb": [{"scroll-pb": Z()}],
                "scroll-pl": [{"scroll-pl": Z()}],
                "snap-align": [{snap: ["start", "end", "center", "align-none"]}],
                "snap-stop": [{snap: ["normal", "always"]}],
                "snap-type": [{snap: ["none", "x", "y", "both"]}],
                "snap-strictness": [{snap: ["mandatory", "proximity"]}],
                touch: [{touch: ["auto", "none", "manipulation"]}],
                "touch-x": [{"touch-pan": ["x", "left", "right"]}],
                "touch-y": [{"touch-pan": ["y", "up", "down"]}],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{select: ["none", "text", "all", "auto"]}],
                "will-change": [{"will-change": ["auto", "scroll", "contents", "transform", G, B]}],
                fill: [{fill: ["none", ...j()]}],
                "stroke-w": [{stroke: [P, Un, Ve, vf]}],
                stroke: [{stroke: ["none", ...j()]}],
                "forced-color-adjust": [{"forced-color-adjust": ["auto", "none"]}]
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                translate: ["translate-x", "translate-y", "translate-none"],
                "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
                "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"]
            },
            conflictingClassGroupModifiers: {"font-size": ["leading"]},
            orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
        }
    }, v1 = Fh(y1);

function b1(...f) {
    return v1(Bd(f))
}

const p1 = qh("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    }, defaultVariants: {variant: "default", size: "default"}
});

function Ud({className: f, variant: S, size: v, asChild: s = !1, ...z}) {
    const N = s ? Dh : "button";
    return y.jsx(N, {"data-slot": "button", className: b1(p1({variant: S, size: v, className: f})), ...z})
}

/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1 = f => f.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    S1 = f => f.replace(/^([A-Z])|[\s-_]+(\w)/g, (S, v, s) => s ? s.toUpperCase() : v.toLowerCase()), Hd = f => {
        const S = S1(f);
        return S.charAt(0).toUpperCase() + S.slice(1)
    }, Wd = (...f) => f.filter((S, v, s) => !!S && S.trim() !== "" && s.indexOf(S) === v).join(" ").trim(), A1 = f => {
        for (const S in f) if (S.startsWith("aria-") || S === "role" || S === "title") return !0
    };
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var z1 = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1 = xl.forwardRef(({
                                 color: f = "currentColor",
                                 size: S = 24,
                                 strokeWidth: v = 2,
                                 absoluteStrokeWidth: s,
                                 className: z = "",
                                 children: N,
                                 iconNode: U,
                                 ...X
                             }, O) => xl.createElement("svg", {
    ref: O, ...z1,
    width: S,
    height: S,
    stroke: f,
    strokeWidth: s ? Number(v) * 24 / Number(S) : v,
    className: Wd("lucide", z), ...!N && !A1(X) && {"aria-hidden": "true"}, ...X
}, [...U.map(([x, R]) => xl.createElement(x, R)), ...Array.isArray(N) ? N : [N]]));
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt = (f, S) => {
    const v = xl.forwardRef(({className: s, ...z}, N) => xl.createElement(E1, {
        ref: N,
        iconNode: S,
        className: Wd(`lucide-${x1(Hd(f))}`, `lucide-${f}`, s), ...z
    }));
    return v.displayName = Hd(f), v
};
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1 = [["path", {
    d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",
    key: "1b4qmf"
}], ["path", {
    d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",
    key: "i71pzd"
}], ["path", {d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs"}], ["path", {
    d: "M10 6h4",
    key: "1itunk"
}], ["path", {d: "M10 10h4", key: "tcdvrf"}], ["path", {d: "M10 14h4", key: "kelpxr"}], ["path", {
    d: "M10 18h4",
    key: "1ulq68"
}]], _1 = zt("building-2", T1);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1 = [["path", {d: "m15 18-6-6 6-6", key: "1wnfg3"}]], N1 = zt("chevron-left", M1);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1 = [["path", {d: "m9 18 6-6-6-6", key: "mthhwq"}]], j1 = zt("chevron-right", O1);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1 = [["path", {
    d: "M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",
    key: "3pnvol"
}], ["circle", {cx: "12", cy: "8", r: "2", key: "1822b1"}], ["path", {
    d: "M12 10v12",
    key: "6ubwww"
}], ["path", {
    d: "M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",
    key: "9hd38g"
}], ["path", {d: "M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z", key: "ufn41s"}]], R1 = zt("flower-2", D1);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1 = [["path", {d: "m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9", key: "eefl8a"}], ["path", {
    d: "m18 15 4-4",
    key: "16gjal"
}], ["path", {
    d: "m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",
    key: "b7pghm"
}]], H1 = zt("hammer", U1);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1 = [["path", {d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q"}], ["rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "2",
    key: "izxlao"
}]], w1 = zt("mail", C1);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1 = [["path", {
    d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
    key: "1r0f0z"
}], ["circle", {cx: "12", cy: "10", r: "3", key: "ilqhr7"}]], B1 = zt("map-pin", q1);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1 = [["path", {d: "M4 12h16", key: "1lakjw"}], ["path", {
    d: "M4 18h16",
    key: "19g7jn"
}], ["path", {d: "M4 6h16", key: "1o0s65"}]], Y1 = zt("menu", G1);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1 = [["path", {
    d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
    key: "1a8usu"
}], ["path", {d: "m15 5 4 4", key: "1mk7zo"}]], Q1 = zt("pencil", X1);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1 = [["path", {
    d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
    key: "9njp5v"
}]], V1 = zt("phone", Z1);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1 = [["path", {
    d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
    key: "r04s7s"
}]], k1 = zt("star", L1);
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1 = [["path", {d: "M18 6 6 18", key: "1bl5f8"}], ["path", {d: "m6 6 12 12", key: "d8bk6v"}]],
    Cd = zt("x", K1), J1 = "/assets/video1-DdLc7eqT.mp4", W1 = "/assets/video2-Dmv9d-pu.mp4",
    wd = "/assets/new_work_1-CfLTThW7.jpg", $1 = "/assets/new_work_2-D6kPEItR.jpg",
    F1 = "/assets/new_work_3-MWMkzZzq.jpg", I1 = "/assets/new_work_4-BROXmWPw.jpg",
    P1 = "/assets/new_work_5-CqIG0jim.jpg", lg = "/assets/new_work_6-Bk2jFADa.jpg", tg = "/assets/work_1-COe02-eN.jpg",
    eg = "/assets/work_2-Bx9k3WO6.jpg", ag = "/assets/work_3-CMxeMF15.jpg", ng = "/assets/work_4-e8RhtMGH.jpg",
    ug = "/assets/work_4-e8RhtMGH.jpg", ig = "/assets/work_6-DaiEfVtb.jpg", cg = "/assets/gallery_1-DNjHFGEE.jpg",
    fg = "/assets/gallery_2-DghuQOPg.jpg", sg = "/assets/gallery_3-C4OY_HDB.jpg", og = "/assets/gallery_4-Dq7k3PHG.jpg",
    rg = "/assets/gallery_4-Dq7k3PHG.jpg", dg = "/assets/gallery_6-LXD18maj.jpg", mg = "/assets/gallery_7-BlDE8zJB.jpg",
    hg = "/assets/gallery_8-Cu533Swh.jpg", gg = "/assets/gallery_9-D101jCRA.jpg", yg = "/assets/gallery_9-D101jCRA.jpg",
    vg = "/assets/gallery_11-X92ZCkYF.jpg", bg = "/assets/gallery_12-BSDPatU9.jpg",
    pg = "/assets/gallery_13-CX40HoPn.jpg", xg = "/assets/gallery_13-CX40HoPn.jpg",
    Sg = "/assets/gallery_15-BNkBMjMP.jpg", Ag = "/assets/gallery_16-BP__pmGM.jpg",
    zg = "/assets/gallery_17--nmcWOKA.jpg", Eg = "/assets/gallery_18-5iKNsDSJ.jpg";

function Tg() {
    const [f, S] = xl.useState(!1), [v, s] = xl.useState(null), [z, N] = xl.useState({name: "", phone: ""}),
        U = xl.useRef(null), X = [{
            icon: Q1,
            title: "Проектирование мемориалов",
            description: "Индивидуальные проекты, отражающие жизнь и личность вашего близкого"
        }, {
            icon: _1,
            title: "Изготовление из гранита",
            description: "Используем только карельский гранит премиум-класса для долговечного памятника"
        }, {
            icon: H1,
            title: "Профессиональная установка",
            description: "Экспертный монтаж с точностью и заботой на всей территории Карелии"
        }, {
            icon: R1,
            title: "Благоустройство захоронений",
            description: "Комплексные решения по благоустройству места захоронения"
        }], O = [{
            image: wd,
            title: "Мемориальный комплекс премиум",
            description: "Эксклюзивный дизайн из карельского гранита"
        }, {
            image: $1,
            title: "Элегантный памятник",
            description: "Классический дизайн с индивидуальной гравировкой"
        }, {
            image: F1,
            title: "Семейный мемориальный комплекс",
            description: "Комплекс для семейного захоронения"
        }, {
            image: I1,
            title: "Памятник с благоустройством",
            description: "Полный комплекс с оградой и цветником"
        }, {image: P1, title: "Двойной мемориальный комплекс", description: "Изысканный дизайн для двоих"}, {
            image: lg,
            title: "Премиальный гранитный памятник",
            description: "Высококачественный карельский гранит"
        }], x = [{type: "video", src: J1, alt: "Видео мемориального комплекса 1"}, {
            type: "video",
            src: W1,
            alt: "Видео мемориального комплекса 2"
        }, {type: "image", src: tg, alt: "Мемориальный комплекс из предыдущих работ 1"}, {
            type: "image",
            src: eg,
            alt: "Мемориальный комплекс из предыдущих работ 2"
        }, {type: "image", src: ag, alt: "Мемориальный комплекс из предыдущих работ 3"}, {
            type: "image",
            src: ng,
            alt: "Мемориальный комплекс из предыдущих работ 4"
        }, {type: "image", src: ug, alt: "Мемориальный комплекс из предыдущих работ 5"}, {
            type: "image",
            src: ig,
            alt: "Мемориальный комплекс из предыдущих работ 6"
        }, {type: "image", src: cg, alt: "Мемориальный комплекс 1"}, {
            type: "image",
            src: fg,
            alt: "Мемориальный комплекс 2"
        }, {type: "image", src: sg, alt: "Мемориальный комплекс 3"}, {
            type: "image",
            src: og,
            alt: "Мемориальный комплекс 4"
        }, {type: "image", src: rg, alt: "Мемориальный комплекс 5"}, {
            type: "image",
            src: dg,
            alt: "Мемориальный комплекс 6"
        }, {type: "image", src: mg, alt: "Мемориальный комплекс 7"}, {
            type: "image",
            src: hg,
            alt: "Мемориальный комплекс 8"
        }, {type: "image", src: gg, alt: "Мемориальный комплекс 9"}, {
            type: "image",
            src: yg,
            alt: "Мемориальный комплекс 10"
        }, {type: "image", src: vg, alt: "Мемориальный комплекс 11"}, {
            type: "image",
            src: bg,
            alt: "Мемориальный комплекс 12"
        }, {type: "image", src: pg, alt: "Мемориальный комплекс 13"}, {
            type: "image",
            src: xg,
            alt: "Мемориальный комплекс 14"
        }, {type: "image", src: Sg, alt: "Мемориальный комплекс 15"}, {
            type: "image",
            src: Ag,
            alt: "Мемориальный комплекс 16"
        }, {type: "image", src: zg, alt: "Мемориальный комплекс 17"}, {
            type: "image",
            src: Eg,
            alt: "Мемориальный комплекс 18"
        }], R = [{
            name: "Анна Петрова",
            date: "Август 2023",
            text: "Благодарим за профессиональную работу. Памятник получился именно таким, как мы хотели. Качество на высшем уровне."
        }, {
            name: "Михаил Сидоров",
            date: "Июнь 2023",
            text: "Отличная компания! Помогли с выбором, сделали все в срок. Очень довольны результатом и сервисом."
        }], W = Y => {
            Y.preventDefault(), alert("Спасибо за заявку! Мы свяжемся с вами в ближайшее время."), N({name: "", phone: ""})
        }, V = Y => {
            const ll = document.getElementById(Y);
            ll && (ll.scrollIntoView({behavior: "smooth"}), S(!1))
        }, bl = Y => {
            U.current && U.current.scrollBy({left: Y === "left" ? -300 : 300, behavior: "smooth"})
        };
    return y.jsxs("div", {
        className: "min-h-screen bg-[#111318] text-white",
        style: {fontFamily: 'Newsreader, "Noto Sans", sans-serif'},
        children: [y.jsx("header", {
            role: "banner",
            className: "sticky top-0 z-50 bg-[#111318]/95 backdrop-blur-sm border-b border-[#3c4453]",
            children: y.jsxs("div", {
                className: "container mx-auto px-4 py-4", children: [y.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [y.jsxs("div", {
                        className: "flex items-center space-x-3",
                        children: [y.jsx("div", {
                            className: "w-12 h-12 bg-gradient-to-br from-[#144bb8] to-[#0d3a8f] rounded-lg flex items-center justify-center",
                            children: y.jsx("span", {className: "text-white font-bold text-xl", children: "ГС"})
                        }), y.jsxs("div", {
                            children: [y.jsx("h1", {
                                className: "text-xl font-bold text-white",
                                children: "Гран-Сервис"
                            }), y.jsx("p", {className: "text-xs text-gray-400", children: "Эксклюзивные памятники"})]
                        })]
                    }), y.jsxs("nav", {
                        className: "hidden md:flex items-center space-x-8",
                        children: [y.jsx("button", {
                            onClick: () => V("home"),
                            className: "text-gray-300 hover:text-white transition",
                            children: "Главная"
                        }), y.jsx("button", {
                            onClick: () => V("services"),
                            className: "text-gray-300 hover:text-white transition",
                            children: "Услуги"
                        }), y.jsx("button", {
                            onClick: () => V("works"),
                            className: "text-gray-300 hover:text-white transition",
                            children: "Примеры работ"
                        }), y.jsx("button", {
                            onClick: () => V("gallery"),
                            className: "text-gray-300 hover:text-white transition",
                            children: "Галерея"
                        }), y.jsx("button", {
                            onClick: () => V("contacts"),
                            className: "text-gray-300 hover:text-white transition",
                            children: "Контакты"
                        })]
                    }), y.jsxs("div", {
                        className: "hidden md:flex items-center space-x-4",
                        children: [y.jsx("a", {
                            href: "tel:+79114006335",
                            className: "text-white font-semibold hover:text-[#144bb8] transition",
                            children: "+7 (911) 400-63-35"
                        }), y.jsx(Ud, {
                            onClick: () => V("contacts"),
                            className: "bg-[#144bb8] hover:bg-[#0d3a8f]",
                            children: "Консультация"
                        })]
                    }), y.jsx("button", {
                        onClick: () => S(!f),
                        className: "md:hidden p-2 text-white",
                        children: f ? y.jsx(Cd, {className: "w-6 h-6"}) : y.jsx(Y1, {className: "w-6 h-6"})
                    })]
                }), f && y.jsxs("nav", {
                    className: "md:hidden mt-4 pb-4 space-y-3 border-t border-[#3c4453] pt-4",
                    children: [y.jsx("button", {
                        onClick: () => V("home"),
                        className: "block w-full text-left px-4 py-2 text-gray-300 hover:bg-[#1c1f26] rounded",
                        children: "Главная"
                    }), y.jsx("button", {
                        onClick: () => V("services"),
                        className: "block w-full text-left px-4 py-2 text-gray-300 hover:bg-[#1c1f26] rounded",
                        children: "Услуги"
                    }), y.jsx("button", {
                        onClick: () => V("works"),
                        className: "block w-full text-left px-4 py-2 text-gray-300 hover:bg-[#1c1f26] rounded",
                        children: "Примеры работ"
                    }), y.jsx("button", {
                        onClick: () => V("gallery"),
                        className: "block w-full text-left px-4 py-2 text-gray-300 hover:bg-[#1c1f26] rounded",
                        children: "Галерея"
                    }), y.jsx("button", {
                        onClick: () => V("contacts"),
                        className: "block w-full text-left px-4 py-2 text-gray-300 hover:bg-[#1c1f26] rounded",
                        children: "Контакты"
                    }), y.jsx("a", {
                        href: "tel:+79114006335",
                        className: "block px-4 py-2 text-white font-semibold",
                        children: "+7 (911) 400-63-35"
                    })]
                })]
            })
        }), y.jsxs("main", {
            role: "main",
            children: [y.jsxs("section", {
                id: "home",
                className: "relative min-h-[480px] md:min-h-[600px] flex items-center justify-center overflow-hidden",
                children: [y.jsx("div", {
                    className: "absolute inset-0 bg-cover bg-center",
                    style: {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%), url(${wd})`}
                }), y.jsxs("div", {
                    className: "relative z-10 container mx-auto px-4 text-center",
                    children: [y.jsx("h2", {
                        className: "text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4",
                        children: "Сохраняя память в камне"
                    }), y.jsx("p", {
                        className: "text-base md:text-lg mb-8 max-w-2xl mx-auto text-gray-200",
                        children: "Достойные и долговечные мемориальные комплексы. Создаем вечную память с 2010 года"
                    })]
                })]
            }), y.jsx("section", {
                id: "services",
                className: "py-20 px-4",
                children: y.jsxs("div", {
                    className: "container mx-auto",
                    children: [y.jsx("h2", {
                        className: "text-3xl md:text-4xl font-bold mb-4",
                        children: "Наши услуги"
                    }), y.jsx("p", {
                        className: "text-gray-400 mb-12 max-w-3xl",
                        children: "Мы предлагаем полный спектр услуг по созданию достойной памяти"
                    }), y.jsx("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                        children: X.map((Y, ll) => {
                            const dl = Y.icon;
                            return y.jsxs("div", {
                                className: "flex flex-col gap-3 rounded-lg border border-[#3c4453] bg-[#1c1f26] p-6 hover:border-[#144bb8] hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 cursor-pointer",
                                children: [y.jsx("div", {
                                    className: "w-12 h-12 flex items-center justify-center text-[#144bb8]",
                                    children: y.jsx(dl, {className: "w-8 h-8"})
                                }), y.jsx("h3", {
                                    className: "text-lg font-bold",
                                    children: Y.title
                                }), y.jsx("p", {className: "text-sm text-gray-400", children: Y.description})]
                            }, ll)
                        })
                    })]
                })
            }), y.jsx("section", {
                id: "works", className: "py-20 px-4 bg-[#0d0f14]", children: y.jsxs("div", {
                    className: "container mx-auto",
                    children: [y.jsx("h2", {
                        className: "text-3xl md:text-4xl font-bold mb-4",
                        children: "Примеры работ"
                    }), y.jsx("p", {
                        className: "text-gray-400 mb-12",
                        children: "Наши мемориальные комплексы из карельского гранита"
                    }), y.jsx("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: O.map((Y, ll) => y.jsxs("div", {
                            className: "group relative overflow-hidden rounded-lg cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300",
                            onClick: () => s(Y),
                            children: [y.jsx("div", {
                                className: "aspect-square overflow-hidden",
                                children: y.jsx("img", {
                                    src: Y.image,
                                    alt: Y.title,
                                    className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                })
                            }), y.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end",
                                children: y.jsxs("div", {
                                    className: "p-6 text-white",
                                    children: [y.jsx("h3", {
                                        className: "text-lg font-bold mb-1",
                                        children: Y.title
                                    }), y.jsx("p", {className: "text-sm text-gray-300", children: Y.description})]
                                })
                            })]
                        }, ll))
                    })]
                })
            }), y.jsx("section", {
                id: "gallery", className: "py-20 px-4", children: y.jsxs("div", {
                    className: "container mx-auto",
                    children: [y.jsxs("div", {
                        className: "flex items-center justify-between mb-8",
                        children: [y.jsxs("div", {
                            children: [y.jsx("h2", {
                                className: "text-3xl md:text-4xl font-bold mb-2",
                                children: "Наша галерея"
                            }), y.jsx("p", {className: "text-gray-400", children: "Примеры наших работ"})]
                        }), y.jsxs("div", {
                            className: "flex gap-2",
                            children: [y.jsx("button", {
                                onClick: () => bl("left"),
                                className: "p-2 rounded-lg bg-[#1c1f26] border border-[#3c4453] hover:border-[#144bb8] hover:bg-[#144bb8] transition",
                                children: y.jsx(N1, {className: "w-6 h-6"})
                            }), y.jsx("button", {
                                onClick: () => bl("right"),
                                className: "p-2 rounded-lg bg-[#1c1f26] border border-[#3c4453] hover:border-[#144bb8] hover:bg-[#144bb8] transition",
                                children: y.jsx(j1, {className: "w-6 h-6"})
                            })]
                        })]
                    }), y.jsx("div", {
                        ref: U,
                        className: "flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4",
                        style: {scrollbarWidth: "none", msOverflowStyle: "none"},
                        children: x.map((Y, ll) => y.jsxs("div", {
                            className: "flex-shrink-0 w-80 h-80 relative group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300",
                            onClick: () => Y.type === "image" && s(Y),
                            children: [Y.type === "video" ? y.jsx("video", {
                                src: Y.src,
                                className: "w-full h-full object-cover",
                                controls: !0,
                                preload: "metadata"
                            }) : y.jsx("img", {
                                src: Y.src,
                                alt: Y.alt,
                                className: "w-full h-full object-cover"
                            }), y.jsx("div", {
                                className: "absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none",
                                children: y.jsx("p", {
                                    className: "text-white text-center px-4 font-semibold",
                                    children: Y.alt
                                })
                            })]
                        }, ll))
                    })]
                })
            }), y.jsx("section", {
                className: "py-20 px-4 bg-[#0d0f14]",
                children: y.jsxs("div", {
                    className: "container mx-auto",
                    children: [y.jsx("h2", {
                        className: "text-3xl md:text-4xl font-bold mb-12",
                        children: "Отзывы клиентов"
                    }), y.jsx("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                        children: R.map((Y, ll) => y.jsxs("div", {
                            className: "flex flex-col gap-4 bg-[#111318] p-6 rounded-lg border border-[#3c4453] hover:border-[#144bb8] transition-colors duration-300",
                            children: [y.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [y.jsx("div", {
                                    className: "w-10 h-10 bg-[#144bb8] rounded-full flex items-center justify-center text-white font-bold",
                                    children: Y.name.charAt(0)
                                }), y.jsxs("div", {
                                    children: [y.jsx("p", {
                                        className: "font-semibold",
                                        children: Y.name
                                    }), y.jsx("p", {className: "text-sm text-gray-400", children: Y.date})]
                                })]
                            }), y.jsx("div", {
                                className: "flex gap-1",
                                children: [...Array(5)].map((dl, Zl) => y.jsx(k1, {className: "w-5 h-5 fill-[#144bb8] text-[#144bb8]"}, Zl))
                            }), y.jsx("p", {className: "text-gray-300", children: Y.text})]
                        }, ll))
                    })]
                })
            }), y.jsx("section", {
                id: "contacts", className: "py-20 px-4", children: y.jsxs("div", {
                    className: "container mx-auto max-w-4xl",
                    children: [y.jsx("h2", {
                        className: "text-3xl md:text-4xl font-bold text-center mb-4",
                        children: "Свяжитесь с нами"
                    }), y.jsx("p", {
                        className: "text-center text-gray-400 mb-12",
                        children: "Получите бесплатную консультацию и расчет стоимости вашего проекта"
                    }), y.jsxs("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [y.jsxs("div", {
                            className: "space-y-6",
                            children: [y.jsxs("div", {
                                className: "flex items-start gap-4 p-4 bg-[#1c1f26] rounded-lg border border-[#3c4453] hover:border-[#144bb8] transition-colors",
                                children: [y.jsx(V1, {className: "w-6 h-6 text-[#144bb8] mt-1"}), y.jsxs("div", {
                                    children: [y.jsx("p", {
                                        className: "font-semibold mb-1",
                                        children: "Телефон:"
                                    }), y.jsx("a", {
                                        href: "tel:+79114006335",
                                        className: "text-lg text-gray-300 hover:text-[#144bb8] transition",
                                        children: "+7 (911) 400-63-35"
                                    }), y.jsx("p", {
                                        className: "text-sm text-gray-500 mt-1",
                                        children: "Ежедневно с 10:00 до 20:00"
                                    })]
                                })]
                            }), y.jsxs("div", {
                                className: "flex items-start gap-4 p-4 bg-[#1c1f26] rounded-lg border border-[#3c4453] hover:border-[#144bb8] transition-colors",
                                children: [y.jsx(w1, {className: "w-6 h-6 text-[#144bb8] mt-1"}), y.jsxs("div", {
                                    children: [y.jsx("p", {
                                        className: "font-semibold mb-1",
                                        children: "Email:"
                                    }), y.jsx("a", {
                                        href: "mailto:info@grant-service.ru",
                                        className: "text-lg text-gray-300 hover:text-[#144bb8] transition",
                                        children: "info@grant-service.ru"
                                    })]
                                })]
                            }), y.jsxs("div", {
                                className: "flex items-start gap-4 p-4 bg-[#1c1f26] rounded-lg border border-[#3c4453] hover:border-[#144bb8] transition-colors",
                                children: [y.jsx(B1, {className: "w-6 h-6 text-[#144bb8] mt-1"}), y.jsxs("div", {
                                    children: [y.jsx("p", {
                                        className: "font-semibold mb-1",
                                        children: "Адреса:"
                                    }), y.jsx("p", {
                                        className: "text-gray-300 mb-2",
                                        children: "г. Петрозаводск, Соломенское шоссе, 1"
                                    }), y.jsx("p", {
                                        className: "text-gray-300",
                                        children: "пр. Александра Невского, 37, офис 22"
                                    })]
                                })]
                            })]
                        }), y.jsxs("div", {
                            className: "bg-[#1c1f26] p-6 rounded-lg border border-[#3c4453]",
                            children: [y.jsx("h3", {
                                className: "text-xl font-bold mb-6",
                                children: "Получить консультацию"
                            }), y.jsxs("form", {
                                onSubmit: W,
                                className: "space-y-4",
                                children: [y.jsx("input", {
                                    type: "text",
                                    required: !0,
                                    value: z.name,
                                    onChange: Y => N({...z, name: Y.target.value}),
                                    className: "w-full px-4 py-3 bg-[#3c4453] border-none rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[#144bb8] outline-none",
                                    placeholder: "Имя"
                                }), y.jsx("input", {
                                    type: "tel",
                                    required: !0,
                                    value: z.phone,
                                    onChange: Y => N({...z, phone: Y.target.value}),
                                    className: "w-full px-4 py-3 bg-[#3c4453] border-none rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[#144bb8] outline-none",
                                    placeholder: "Телефон"
                                }), y.jsx(Ud, {
                                    type: "submit",
                                    className: "w-full bg-[#144bb8] hover:bg-[#0d3a8f] py-6 text-lg",
                                    children: "Получить консультацию"
                                })]
                            })]
                        })]
                    })]
                })
            })]
        }), y.jsx("footer", {
            role: "contentinfo",
            className: "bg-[#1c1f26] py-12 px-4 border-t border-[#3c4453]",
            children: y.jsxs("div", {
                className: "container mx-auto",
                children: [y.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-8",
                    children: [y.jsxs("div", {
                        children: [y.jsx("h3", {
                            className: "text-xl font-bold mb-4",
                            children: "Гран-Сервис"
                        }), y.jsx("p", {
                            className: "text-gray-400",
                            children: "Эксклюзивные мемориальные комплексы и памятники из карельского гранита с 2010 года"
                        })]
                    }), y.jsxs("div", {
                        children: [y.jsx("h4", {
                            className: "font-semibold mb-4",
                            children: "Контакты"
                        }), y.jsxs("div", {
                            className: "space-y-2 text-gray-400",
                            children: [y.jsx("p", {children: "+7 (911) 400-63-35"}), y.jsx("p", {children: "info@grant-service.ru"})]
                        })]
                    }), y.jsxs("div", {
                        children: [y.jsx("h4", {
                            className: "font-semibold mb-4",
                            children: "Адрес"
                        }), y.jsxs("p", {
                            className: "text-gray-400",
                            children: ["г. Петрозаводск", y.jsx("br", {}), "Соломенское шоссе, 1", y.jsx("br", {}), "Ежедневно: 10:00 - 20:00"]
                        })]
                    })]
                }), y.jsx("div", {
                    className: "border-t border-[#3c4453] pt-8", children: y.jsxs("div", {
                        className: "flex flex-col md:flex-row items-center justify-between gap-4",
                        children: [y.jsx("p", {
                            className: "text-gray-400",
                            children: "© 2024 Гран-Сервис. Все права защищены."
                        }), y.jsxs("div", {
                            className: "flex gap-4", children: [y.jsx("a", {
                                href: "https://vk.com/granptz",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "w-10 h-10 bg-[#3c4453] rounded-lg flex items-center justify-center hover:bg-[#144bb8] transition-colors",
                                "aria-label": "VK",
                                children: y.jsx("svg", {
                                    className: "w-5 h-5 fill-white",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: y.jsx("path", {d: "M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.45 14.41c-.37.44-1.07.65-2.09.65h-1.09c-.63 0-.82-.23-1.37-.79-.72-.72-1.03-.82-1.21-.82-.25 0-.32.07-.32.42v1.19c0 .32-.1.51-1.04.51-1.48 0-3.12-.88-4.27-2.51-1.73-2.38-2.2-4.17-2.2-4.54 0-.18.07-.35.42-.35h1.09c.32 0 .44.14.56.47.64 1.77 1.71 3.33 2.15 3.33.17 0 .25-.08.25-.49v-1.93c-.05-.86-.5-1.04-.5-1.38 0-.14.12-.28.3-.28h1.71c.27 0 .37.14.37.44v2.6c0 .27.12.37.2.37.17 0 .3-.1.6-.4 1.01-1.13 1.73-2.88 1.73-2.88.09-.2.23-.35.55-.35h1.09c.37 0 .45.19.37.44-.14.63-1.52 2.93-1.52 2.93-.13.21-.17.3 0 .53.12.18.52.51.79.82.49.53.87.97 1.01 1.28.15.32.08.49-.24.49z"})
                                })
                            }), y.jsx("a", {
                                href: "https://www.avito.ru/user/granptz",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "w-10 h-10 bg-[#3c4453] rounded-lg flex items-center justify-center hover:bg-[#144bb8] transition-colors",
                                "aria-label": "Avito",
                                children: y.jsx("svg", {
                                    className: "w-5 h-5 fill-white",
                                    viewBox: "0 0 24 24",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: y.jsx("path", {d: "M20.47 8.06l-4.41-6.25a1.5 1.5 0 0 0-1.22-.63h-5.68a1.5 1.5 0 0 0-1.22.63L3.53 8.06a1.5 1.5 0 0 0 0 1.88l4.41 6.25a1.5 1.5 0 0 0 1.22.63h5.68a1.5 1.5 0 0 0 1.22-.63l4.41-6.25a1.5 1.5 0 0 0 0-1.88zm-8.47 5.69a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5z"})
                                })
                            })]
                        })]
                    })
                })]
            })
        }), v && y.jsx("div", {
            className: "fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4",
            onClick: () => s(null),
            children: y.jsxs("div", {
                className: "max-w-5xl w-full relative",
                children: [y.jsx("button", {
                    onClick: () => s(null),
                    className: "absolute top-4 right-4 text-white hover:text-gray-300 z-10",
                    children: y.jsx(Cd, {className: "w-8 h-8"})
                }), y.jsx("img", {
                    src: v.src || v.image,
                    alt: v.alt || v.title,
                    className: "w-full h-auto rounded-lg"
                }), y.jsxs("div", {
                    className: "text-white text-center mt-6",
                    children: [y.jsx("h3", {
                        className: "text-2xl font-bold mb-2",
                        children: v.title || v.alt
                    }), v.description && y.jsx("p", {className: "text-gray-300", children: v.description})]
                })]
            })
        }), y.jsx("style", {
            jsx: !0, children: `
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `
        })]
    })
}

Mh.createRoot(document.getElementById("root")).render(y.jsx(xl.StrictMode, {children: y.jsx(Tg, {})}));
