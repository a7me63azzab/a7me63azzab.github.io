(this.webpackJsonpyat = this.webpackJsonpyat || []).push([
    [42], { 1112: function(t, e, n) { "use strict";
            n.r(e); var i = n(18),
                c = n(15),
                o = n(2),
                a = (n(995), n(795)),
                s = n(111),
                r = n(1),
                u = function(t) { var e = t.notification,
                        n = t.onTimeout,
                        i = Object(a.a)().t,
                        u = e,
                        j = u.open,
                        f = void 0 === j || j,
                        b = u.duration,
                        d = void 0 === b ? 3e3 : b,
                        l = u.severity,
                        O = void 0 === l ? "success" : l,
                        h = u.title,
                        m = void 0 === h ? "" : h,
                        v = u.message,
                        p = void 0 === v ? "" : v,
                        x = Object(o.useState)(f),
                        g = Object(c.a)(x, 2),
                        y = g[0],
                        k = g[1],
                        w = Object(o.useState)(""),
                        N = Object(c.a)(w, 2),
                        T = N[0],
                        D = N[1],
                        F = "".concat(y ? "show" : "", " ").concat(O),
                        J = "string" === typeof p ? p : "detail" in p ? p.detail : i("common:unknown_error"); return Object(o.useEffect)((function() { k(f), f && d && setTimeout((function() { k(!1), n(e) }), d); var t = s.e[O];
                        D(t) }), [f, d, O, e, n]), Object(r.jsx)(o.Fragment, { children: Object(r.jsxs)("div", { id: "snackbar", className: F, children: [Object(r.jsx)("span", { role: "img", "aria-label": "".concat(i("yat"), " ").concat(O), children: "error" === O ? Object(r.jsx)("img", { src: "/assets/icons/error-notification.svg", alt: "".concat(i("yat"), " ").concat(O) }) : "alert" === O ? Object(r.jsx)("img", { src: "/assets/icons/alert-notification.png", alt: "".concat(i("yat"), " ").concat(O) }) : T }), Object(r.jsxs)("div", { children: [m && Object(r.jsx)("h1", { children: m }), J] })] }) }) },
                j = n(66);
            e.default = Object(i.b)((function(t) { return { notifications: t.notifications } }), (function(t) { return { dispatchDeleteNotification: function(e) { return t(Object(j.deleteNotification)(e)) } } }))((function(t) { var e = t.notifications,
                    n = t.dispatchDeleteNotification; return Object(r.jsx)(o.Fragment, { children: e.map((function(t, e) { return Object(r.jsx)(u, { onTimeout: n, index: e, notification: t }, e) })) }) })) }, 995: function(t, e, n) {} }
]);