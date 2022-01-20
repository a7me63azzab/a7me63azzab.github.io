(this.webpackJsonpyat = this.webpackJsonpyat || []).push([
    [1], { 1103: function(e, t, n) { "use strict"; var r = n(26),
                i = n(56),
                a = n(60);
            n(51);

            function o(e, t) { return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "") } var l = n(2),
                c = n.n(l),
                u = n(929),
                s = function(e, t) { return e && t && t.split(" ").forEach((function(t) { return r = t, void((n = e).classList ? n.classList.remove(r) : "string" === typeof n.className ? n.className = o(n.className, r) : n.setAttribute("class", o(n.className && n.className.baseVal || "", r))); var n, r })) },
                d = function(e) {
                    function t() { for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]; return (t = e.call.apply(e, [this].concat(r)) || this).appliedClasses = { appear: {}, enter: {}, exit: {} }, t.onEnter = function(e, n) { var r = t.resolveArguments(e, n),
                                i = r[0],
                                a = r[1];
                            t.removeClasses(i, "exit"), t.addClass(i, a ? "appear" : "enter", "base"), t.props.onEnter && t.props.onEnter(e, n) }, t.onEntering = function(e, n) { var r = t.resolveArguments(e, n),
                                i = r[0],
                                a = r[1] ? "appear" : "enter";
                            t.addClass(i, a, "active"), t.props.onEntering && t.props.onEntering(e, n) }, t.onEntered = function(e, n) { var r = t.resolveArguments(e, n),
                                i = r[0],
                                a = r[1] ? "appear" : "enter";
                            t.removeClasses(i, a), t.addClass(i, a, "done"), t.props.onEntered && t.props.onEntered(e, n) }, t.onExit = function(e) { var n = t.resolveArguments(e)[0];
                            t.removeClasses(n, "appear"), t.removeClasses(n, "enter"), t.addClass(n, "exit", "base"), t.props.onExit && t.props.onExit(e) }, t.onExiting = function(e) { var n = t.resolveArguments(e)[0];
                            t.addClass(n, "exit", "active"), t.props.onExiting && t.props.onExiting(e) }, t.onExited = function(e) { var n = t.resolveArguments(e)[0];
                            t.removeClasses(n, "exit"), t.addClass(n, "exit", "done"), t.props.onExited && t.props.onExited(e) }, t.resolveArguments = function(e, n) { return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, n] }, t.getClassNames = function(e) { var n = t.props.classNames,
                                r = "string" === typeof n,
                                i = r ? "" + (r && n ? n + "-" : "") + e : n[e]; return { baseClassName: i, activeClassName: r ? i + "-active" : n[e + "Active"], doneClassName: r ? i + "-done" : n[e + "Done"] } }, t }
                    Object(a.a)(t, e); var n = t.prototype; return n.addClass = function(e, t, n) { var r = this.getClassNames(t)[n + "ClassName"],
                            i = this.getClassNames("enter").doneClassName; "appear" === t && "done" === n && i && (r += " " + i), "active" === n && e && e.scrollTop, r && (this.appliedClasses[t][n] = r, function(e, t) { e && t && t.split(" ").forEach((function(t) { return r = t, void((n = e).classList ? n.classList.add(r) : function(e, t) { return e.classList ? !!t && e.classList.contains(t) : -1 !== (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") }(n, r) || ("string" === typeof n.className ? n.className = n.className + " " + r : n.setAttribute("class", (n.className && n.className.baseVal || "") + " " + r))); var n, r })) }(e, r)) }, n.removeClasses = function(e, t) { var n = this.appliedClasses[t],
                            r = n.base,
                            i = n.active,
                            a = n.done;
                        this.appliedClasses[t] = {}, r && s(e, r), i && s(e, i), a && s(e, a) }, n.render = function() { var e = this.props,
                            t = (e.classNames, Object(i.a)(e, ["classNames"])); return c.a.createElement(u.d, Object(r.a)({}, t, { onEnter: this.onEnter, onEntered: this.onEntered, onEntering: this.onEntering, onExit: this.onExit, onExiting: this.onExiting, onExited: this.onExited })) }, t }(c.a.Component);
            d.defaultProps = { classNames: "" }, d.propTypes = {};
            t.a = d }, 1118: function(e, t, n) { "use strict"; var r = n(56),
                i = n(26),
                a = n(94),
                o = n(60),
                l = (n(51), n(2)),
                c = n.n(l),
                u = n(882);

            function s(e, t) { var n = Object.create(null); return e && l.Children.map(e, (function(e) { return e })).forEach((function(e) { n[e.key] = function(e) { return t && Object(l.isValidElement)(e) ? t(e) : e }(e) })), n }

            function d(e, t, n) { return null != n[t] ? n[t] : e.props[t] }

            function p(e, t, n) { var r = s(e.children),
                    i = function(e, t) {
                        function n(n) { return n in t ? t[n] : e[n] }
                        e = e || {}, t = t || {}; var r, i = Object.create(null),
                            a = []; for (var o in e) o in t ? a.length && (i[o] = a, a = []) : a.push(o); var l = {}; for (var c in t) { if (i[c])
                                for (r = 0; r < i[c].length; r++) { var u = i[c][r];
                                    l[i[c][r]] = n(u) }
                            l[c] = n(c) } for (r = 0; r < a.length; r++) l[a[r]] = n(a[r]); return l }(t, r); return Object.keys(i).forEach((function(a) { var o = i[a]; if (Object(l.isValidElement)(o)) { var c = a in t,
                            u = a in r,
                            s = t[a],
                            p = Object(l.isValidElement)(s) && !s.props.in;!u || c && !p ? u || !c || p ? u && c && Object(l.isValidElement)(s) && (i[a] = Object(l.cloneElement)(o, { onExited: n.bind(null, o), in: s.props.in, exit: d(o, "exit", e), enter: d(o, "enter", e) })) : i[a] = Object(l.cloneElement)(o, { in: !1 }) : i[a] = Object(l.cloneElement)(o, { onExited: n.bind(null, o), in: !0, exit: d(o, "exit", e), enter: d(o, "enter", e) }) } })), i } var f = Object.values || function(e) { return Object.keys(e).map((function(t) { return e[t] })) },
                g = function(e) {
                    function t(t, n) { var r, i = (r = e.call(this, t, n) || this).handleExited.bind(Object(a.a)(r)); return r.state = { contextValue: { isMounting: !0 }, handleExited: i, firstRender: !0 }, r }
                    Object(o.a)(t, e); var n = t.prototype; return n.componentDidMount = function() { this.mounted = !0, this.setState({ contextValue: { isMounting: !1 } }) }, n.componentWillUnmount = function() { this.mounted = !1 }, t.getDerivedStateFromProps = function(e, t) { var n, r, i = t.children,
                            a = t.handleExited; return { children: t.firstRender ? (n = e, r = a, s(n.children, (function(e) { return Object(l.cloneElement)(e, { onExited: r.bind(null, e), in: !0, appear: d(e, "appear", n), enter: d(e, "enter", n), exit: d(e, "exit", n) }) }))) : p(e, i, a), firstRender: !1 } }, n.handleExited = function(e, t) { var n = s(this.props.children);
                        e.key in n || (e.props.onExited && e.props.onExited(t), this.mounted && this.setState((function(t) { var n = Object(i.a)({}, t.children); return delete n[e.key], { children: n } }))) }, n.render = function() { var e = this.props,
                            t = e.component,
                            n = e.childFactory,
                            i = Object(r.a)(e, ["component", "childFactory"]),
                            a = this.state.contextValue,
                            o = f(this.state.children).map(n); return delete i.appear, delete i.enter, delete i.exit, null === t ? c.a.createElement(u.a.Provider, { value: a }, o) : c.a.createElement(u.a.Provider, { value: a }, c.a.createElement(t, i, o)) }, t }(c.a.Component);
            g.propTypes = {}, g.defaultProps = { component: "div", childFactory: function(e) { return e } };
            t.a = g }, 852: function(e, t, n) { "use strict";
            n.d(t, "a", (function() { return Gr })), n.d(t, "b", (function() { return hi })), n.d(t, "c", (function() { return Ei })); var r = n(2),
                i = n.n(r),
                a = n(60),
                o = n(26),
                l = n(146),
                c = n(18);

            function u(e, t) { var n = Object(r.useState)((function() { return { inputs: t, result: e() } }))[0],
                    i = Object(r.useRef)(!0),
                    a = Object(r.useRef)(n),
                    o = i.current || Boolean(t && a.current.inputs && function(e, t) { if (e.length !== t.length) return !1; for (var n = 0; n < e.length; n++)
                            if (e[n] !== t[n]) return !1;
                        return !0 }(t, a.current.inputs)) ? a.current : { inputs: t, result: e() }; return Object(r.useEffect)((function() { i.current = !1, a.current = o }), [o]), o.result } var s = u,
                d = function(e, t) { return u((function() { return e }), t) },
                p = n(63),
                f = function(e) { var t = e.top,
                        n = e.right,
                        r = e.bottom,
                        i = e.left; return { top: t, right: n, bottom: r, left: i, width: n - i, height: r - t, x: i, y: t, center: { x: (n + i) / 2, y: (r + t) / 2 } } },
                g = function(e, t) { return { top: e.top - t.top, left: e.left - t.left, bottom: e.bottom + t.bottom, right: e.right + t.right } },
                v = function(e, t) { return { top: e.top + t.top, left: e.left + t.left, bottom: e.bottom - t.bottom, right: e.right - t.right } },
                b = { top: 0, right: 0, bottom: 0, left: 0 },
                m = function(e) { var t = e.borderBox,
                        n = e.margin,
                        r = void 0 === n ? b : n,
                        i = e.border,
                        a = void 0 === i ? b : i,
                        o = e.padding,
                        l = void 0 === o ? b : o,
                        c = f(g(t, r)),
                        u = f(v(t, a)),
                        s = f(v(u, l)); return { marginBox: c, borderBox: f(t), paddingBox: u, contentBox: s, margin: r, border: a, padding: l } },
                h = function(e) { var t = e.slice(0, -2); if ("px" !== e.slice(-2)) return 0; var n = Number(t); return isNaN(n) && Object(p.a)(!1), n },
                y = function(e, t) { var n, r, i = e.borderBox,
                        a = e.border,
                        o = e.margin,
                        l = e.padding,
                        c = (r = t, { top: (n = i).top + r.y, left: n.left + r.x, bottom: n.bottom + r.y, right: n.right + r.x }); return m({ borderBox: c, border: a, margin: o, padding: l }) },
                x = function(e, t) { return void 0 === t && (t = { x: window.pageXOffset, y: window.pageYOffset }), y(e, t) },
                I = function(e, t) { var n = { top: h(t.marginTop), right: h(t.marginRight), bottom: h(t.marginBottom), left: h(t.marginLeft) },
                        r = { top: h(t.paddingTop), right: h(t.paddingRight), bottom: h(t.paddingBottom), left: h(t.paddingLeft) },
                        i = { top: h(t.borderTopWidth), right: h(t.borderRightWidth), bottom: h(t.borderBottomWidth), left: h(t.borderLeftWidth) }; return m({ borderBox: e, margin: n, padding: r, border: i }) },
                D = function(e) { var t = e.getBoundingClientRect(),
                        n = window.getComputedStyle(e); return I(t, n) },
                E = Number.isNaN || function(e) { return "number" === typeof e && e !== e };

            function C(e, t) { if (e.length !== t.length) return !1; for (var n = 0; n < e.length; n++)
                    if (r = e[n], i = t[n], !(r === i || E(r) && E(i))) return !1;
                var r, i; return !0 } var O = function(e, t) { var n;
                    void 0 === t && (t = C); var r, i = [],
                        a = !1; return function() { for (var o = [], l = 0; l < arguments.length; l++) o[l] = arguments[l]; return a && n === this && t(o, i) || (r = e.apply(this, o), a = !0, n = this, i = o), r } },
                w = function(e) { var t = [],
                        n = null,
                        r = function() { for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++) i[a] = arguments[a];
                            t = i, n || (n = requestAnimationFrame((function() { n = null, e.apply(void 0, t) }))) }; return r.cancel = function() { n && (cancelAnimationFrame(n), n = null) }, r },
                A = n(167),
                N = n.n(A);

            function S(e, t) {}
            S.bind(null, "warn"), S.bind(null, "error");

            function R() {}

            function B(e, t, n) { var r = t.map((function(t) { var r, i, a = (r = n, i = t.options, Object(o.a)({}, r, {}, i)); return e.addEventListener(t.eventName, t.fn, a),
                        function() { e.removeEventListener(t.eventName, t.fn, a) } })); return function() { r.forEach((function(e) { e() })) } } var P = "Invariant failed";

            function T(e) { this.message = e }

            function L(e, t) { if (!e) throw new T(P) }
            T.prototype.toString = function() { return this.message }; var G = function(e) {
                    function t() { for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]; return (t = e.call.apply(e, [this].concat(r)) || this).callbacks = null, t.unbind = R, t.onWindowError = function(e) { var n = t.getCallbacks();
                            n.isDragging() && n.tryAbort(), e.error instanceof T && e.preventDefault() }, t.getCallbacks = function() { if (!t.callbacks) throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>"); return t.callbacks }, t.setCallbacks = function(e) { t.callbacks = e }, t }
                    Object(a.a)(t, e); var n = t.prototype; return n.componentDidMount = function() { this.unbind = B(window, [{ eventName: "error", fn: this.onWindowError }]) }, n.componentDidCatch = function(e) { if (!(e instanceof T)) throw e;
                        this.setState({}) }, n.componentWillUnmount = function() { this.unbind() }, n.render = function() { return this.props.children(this.setCallbacks) }, t }(i.a.Component),
                M = function(e) { return e + 1 },
                j = function(e, t) { var n = e.droppableId === t.droppableId,
                        r = M(e.index),
                        i = M(t.index); return n ? "\n      You have moved the item from position " + r + "\n      to position " + i + "\n    " : "\n    You have moved the item from position " + r + "\n    in list " + e.droppableId + "\n    to list " + t.droppableId + "\n    in position " + i + "\n  " },
                _ = function(e, t, n) { return t.droppableId === n.droppableId ? "\n      The item " + e + "\n      has been combined with " + n.draggableId : "\n      The item " + e + "\n      in list " + t.droppableId + "\n      has been combined with " + n.draggableId + "\n      in list " + n.droppableId + "\n    " },
                F = function(e) { return "\n  The item has returned to its starting position\n  of " + M(e.index) + "\n" },
                k = "\n  Press space bar to start a drag.\n  When dragging you can use the arrow keys to move the item around and escape to cancel.\n  Some screen readers may require you to be in focus mode or to use your pass through key\n",
                W = function(e) { return "\n  You have lifted an item in position " + M(e.source.index) + "\n" },
                U = function(e) { var t = e.destination; if (t) return j(e.source, t); var n = e.combine; return n ? _(e.draggableId, e.source, n) : "You are over an area that cannot be dropped on" },
                H = function(e) { if ("CANCEL" === e.reason) return "\n      Movement cancelled.\n      " + F(e.source) + "\n    "; var t = e.destination,
                        n = e.combine; return t ? "\n      You have dropped the item.\n      " + j(e.source, t) + "\n    " : n ? "\n      You have dropped the item.\n      " + _(e.draggableId, e.source, n) + "\n    " : "\n    The item has been dropped while not over a drop area.\n    " + F(e.source) + "\n  " },
                V = { x: 0, y: 0 },
                q = function(e, t) { return { x: e.x + t.x, y: e.y + t.y } },
                z = function(e, t) { return { x: e.x - t.x, y: e.y - t.y } },
                Y = function(e, t) { return e.x === t.x && e.y === t.y },
                J = function(e) { return { x: 0 !== e.x ? -e.x : 0, y: 0 !== e.y ? -e.y : 0 } },
                X = function(e, t, n) { var r; return void 0 === n && (n = 0), (r = {})[e] = t, r["x" === e ? "y" : "x"] = n, r },
                K = function(e, t) { return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) },
                $ = function(e, t) { return Math.min.apply(Math, t.map((function(t) { return K(e, t) }))) },
                Q = function(e) { return function(t) { return { x: e(t.x), y: e(t.y) } } },
                Z = function(e, t) { return { top: e.top + t.y, left: e.left + t.x, bottom: e.bottom + t.y, right: e.right + t.x } },
                ee = function(e) { return [{ x: e.left, y: e.top }, { x: e.right, y: e.top }, { x: e.left, y: e.bottom }, { x: e.right, y: e.bottom }] },
                te = function(e, t) { return t && t.shouldClipSubject ? function(e, t) { var n = f({ top: Math.max(t.top, e.top), right: Math.min(t.right, e.right), bottom: Math.min(t.bottom, e.bottom), left: Math.max(t.left, e.left) }); return n.width <= 0 || n.height <= 0 ? null : n }(t.pageMarginBox, e) : f(e) },
                ne = function(e) { var t = e.page,
                        n = e.withPlaceholder,
                        r = e.axis,
                        i = e.frame,
                        a = function(e, t) { return t ? Z(e, t.scroll.diff.displacement) : e }(t.marginBox, i),
                        l = function(e, t, n) { var r; return n && n.increasedBy ? Object(o.a)({}, e, ((r = {})[t.end] = e[t.end] + n.increasedBy[t.line], r)) : e }(a, r, n); return { page: t, withPlaceholder: n, active: te(l, i) } },
                re = function(e, t) { e.frame || L(!1); var n = e.frame,
                        r = z(t, n.scroll.initial),
                        i = J(r),
                        a = Object(o.a)({}, n, { scroll: { initial: n.scroll.initial, current: t, diff: { value: r, displacement: i }, max: n.scroll.max } }),
                        l = ne({ page: e.subject.page, withPlaceholder: e.subject.withPlaceholder, axis: e.axis, frame: a }); return Object(o.a)({}, e, { frame: a, subject: l }) };

            function ie(e) { return Object.values ? Object.values(e) : Object.keys(e).map((function(t) { return e[t] })) }

            function ae(e, t) { if (e.findIndex) return e.findIndex(t); for (var n = 0; n < e.length; n++)
                    if (t(e[n])) return n;
                return -1 }

            function oe(e, t) { if (e.find) return e.find(t); var n = ae(e, t); return -1 !== n ? e[n] : void 0 }

            function le(e) { return Array.prototype.slice.call(e) } var ce = O((function(e) { return e.reduce((function(e, t) { return e[t.descriptor.id] = t, e }), {}) })),
                ue = O((function(e) { return e.reduce((function(e, t) { return e[t.descriptor.id] = t, e }), {}) })),
                se = O((function(e) { return ie(e) })),
                de = O((function(e) { return ie(e) })),
                pe = O((function(e, t) { return de(t).filter((function(t) { return e === t.descriptor.droppableId })).sort((function(e, t) { return e.descriptor.index - t.descriptor.index })) }));

            function fe(e) { return e.at && "REORDER" === e.at.type ? e.at.destination : null }

            function ge(e) { return e.at && "COMBINE" === e.at.type ? e.at.combine : null } var ve = O((function(e, t) { return t.filter((function(t) { return t.descriptor.id !== e.descriptor.id })) })),
                be = function(e, t) { return e.descriptor.droppableId === t.descriptor.id },
                me = { point: V, value: 0 },
                he = { invisible: {}, visible: {}, all: [] },
                ye = { displaced: he, displacedBy: me, at: null },
                xe = function(e, t) { return function(n) { return e <= n && n <= t } },
                Ie = function(e) { var t = xe(e.top, e.bottom),
                        n = xe(e.left, e.right); return function(r) { if (t(r.top) && t(r.bottom) && n(r.left) && n(r.right)) return !0; var i = t(r.top) || t(r.bottom),
                            a = n(r.left) || n(r.right); if (i && a) return !0; var o = r.top < e.top && r.bottom > e.bottom,
                            l = r.left < e.left && r.right > e.right; return !(!o || !l) || (o && a || l && i) } },
                De = function(e) { var t = xe(e.top, e.bottom),
                        n = xe(e.left, e.right); return function(e) { return t(e.top) && t(e.bottom) && n(e.left) && n(e.right) } },
                Ee = { direction: "vertical", line: "y", crossAxisLine: "x", start: "top", end: "bottom", size: "height", crossAxisStart: "left", crossAxisEnd: "right", crossAxisSize: "width" },
                Ce = { direction: "horizontal", line: "x", crossAxisLine: "y", start: "left", end: "right", size: "width", crossAxisStart: "top", crossAxisEnd: "bottom", crossAxisSize: "height" },
                Oe = function(e) { var t = e.target,
                        n = e.destination,
                        r = e.viewport,
                        i = e.withDroppableDisplacement,
                        a = e.isVisibleThroughFrameFn,
                        o = i ? function(e, t) { var n = t.frame ? t.frame.scroll.diff.displacement : V; return Z(e, n) }(t, n) : t; return function(e, t, n) { return !!t.subject.active && n(t.subject.active)(e) }(o, n, a) && function(e, t, n) { return n(t)(e) }(o, r, a) },
                we = function(e) { return Oe(Object(o.a)({}, e, { isVisibleThroughFrameFn: Ie })) },
                Ae = function(e) { return Oe(Object(o.a)({}, e, { isVisibleThroughFrameFn: De })) };

            function Ne(e) { var t = e.afterDragging,
                    n = e.destination,
                    r = e.displacedBy,
                    i = e.viewport,
                    a = e.forceShouldAnimate,
                    o = e.last; return t.reduce((function(e, t) { var l = function(e, t) { var n = e.page.marginBox,
                                r = { top: t.point.y, right: 0, bottom: 0, left: t.point.x }; return f(g(n, r)) }(t, r),
                        c = t.descriptor.id; if (e.all.push(c), !we({ target: l, destination: n, viewport: i, withDroppableDisplacement: !0 })) return e.invisible[t.descriptor.id] = !0, e; var u = function(e, t, n) { if ("boolean" === typeof n) return n; if (!t) return !0; var r = t.invisible,
                                i = t.visible; if (r[e]) return !1; var a = i[e]; return !a || a.shouldAnimate }(c, o, a),
                        s = { draggableId: c, shouldAnimate: u }; return e.visible[c] = s, e }), { all: [], visible: {}, invisible: {} }) }

            function Se(e) { var t = e.insideDestination,
                    n = e.inHomeList,
                    r = e.displacedBy,
                    i = e.destination,
                    a = function(e, t) { if (!e.length) return 0; var n = e[e.length - 1].descriptor.index; return t.inHomeList ? n : n + 1 }(t, { inHomeList: n }); return { displaced: he, displacedBy: r, at: { type: "REORDER", destination: { droppableId: i.descriptor.id, index: a } } } }

            function Re(e) { var t = e.draggable,
                    n = e.insideDestination,
                    r = e.destination,
                    i = e.viewport,
                    a = e.displacedBy,
                    o = e.last,
                    l = e.index,
                    c = e.forceShouldAnimate,
                    u = be(t, r); if (null == l) return Se({ insideDestination: n, inHomeList: u, displacedBy: a, destination: r }); var s = oe(n, (function(e) { return e.descriptor.index === l })); if (!s) return Se({ insideDestination: n, inHomeList: u, displacedBy: a, destination: r }); var d = ve(t, n),
                    p = n.indexOf(s); return { displaced: Ne({ afterDragging: d.slice(p), destination: r, displacedBy: a, last: o, viewport: i.frame, forceShouldAnimate: c }), displacedBy: a, at: { type: "REORDER", destination: { droppableId: r.descriptor.id, index: l } } } }

            function Be(e, t) { return Boolean(t.effected[e]) } var Pe = function(e) { var t = e.isMovingForward,
                        n = e.isInHomeList,
                        r = e.draggable,
                        i = e.draggables,
                        a = e.destination,
                        o = e.insideDestination,
                        l = e.previousImpact,
                        c = e.viewport,
                        u = e.afterCritical,
                        s = l.at; if (s || L(!1), "REORDER" === s.type) { var d = function(e) { var t = e.isMovingForward,
                                n = e.isInHomeList,
                                r = e.insideDestination,
                                i = e.location; if (!r.length) return null; var a = i.index,
                                o = t ? a + 1 : a - 1,
                                l = r[0].descriptor.index,
                                c = r[r.length - 1].descriptor.index; return o < l || o > (n ? c : c + 1) ? null : o }({ isMovingForward: t, isInHomeList: n, location: s.destination, insideDestination: o }); return null == d ? null : Re({ draggable: r, insideDestination: o, destination: a, viewport: c, last: l.displaced, displacedBy: l.displacedBy, index: d }) } var p = function(e) { var t = e.isMovingForward,
                            n = e.destination,
                            r = e.draggables,
                            i = e.combine,
                            a = e.afterCritical; if (!n.isCombineEnabled) return null; var o = i.draggableId,
                            l = r[o].descriptor.index; return Be(o, a) ? t ? l : l - 1 : t ? l + 1 : l }({ isMovingForward: t, destination: a, displaced: l.displaced, draggables: i, combine: s.combine, afterCritical: u }); return null == p ? null : Re({ draggable: r, insideDestination: o, destination: a, viewport: c, last: l.displaced, displacedBy: l.displacedBy, index: p }) },
                Te = function(e) { var t = e.afterCritical,
                        n = e.impact,
                        r = e.draggables,
                        i = ge(n);
                    i || L(!1); var a = i.draggableId,
                        o = r[a].page.borderBox.center,
                        l = function(e) { var t = e.displaced,
                                n = e.afterCritical,
                                r = e.combineWith,
                                i = e.displacedBy,
                                a = Boolean(t.visible[r] || t.invisible[r]); return Be(r, n) ? a ? V : J(i.point) : a ? i.point : V }({ displaced: n.displaced, afterCritical: t, combineWith: a, displacedBy: n.displacedBy }); return q(o, l) },
                Le = function(e, t) { return t.margin[e.start] + t.borderBox[e.size] / 2 },
                Ge = function(e, t, n) { return t[e.crossAxisStart] + n.margin[e.crossAxisStart] + n.borderBox[e.crossAxisSize] / 2 },
                Me = function(e) { var t = e.axis,
                        n = e.moveRelativeTo,
                        r = e.isMoving; return X(t.line, n.marginBox[t.end] + Le(t, r), Ge(t, n.marginBox, r)) },
                je = function(e) { var t = e.axis,
                        n = e.moveRelativeTo,
                        r = e.isMoving; return X(t.line, n.marginBox[t.start] - function(e, t) { return t.margin[e.end] + t.borderBox[e.size] / 2 }(t, r), Ge(t, n.marginBox, r)) },
                _e = function(e) { var t = e.impact,
                        n = e.draggable,
                        r = e.draggables,
                        i = e.droppable,
                        a = e.afterCritical,
                        o = pe(i.descriptor.id, r),
                        l = n.page,
                        c = i.axis; if (!o.length) return function(e) { var t = e.axis,
                            n = e.moveInto,
                            r = e.isMoving; return X(t.line, n.contentBox[t.start] + Le(t, r), Ge(t, n.contentBox, r)) }({ axis: c, moveInto: i.page, isMoving: l }); var u = t.displaced,
                        s = t.displacedBy,
                        d = u.all[0]; if (d) { var p = r[d]; if (Be(d, a)) return je({ axis: c, moveRelativeTo: p.page, isMoving: l }); var f = y(p.page, s.point); return je({ axis: c, moveRelativeTo: f, isMoving: l }) } var g = o[o.length - 1]; if (g.descriptor.id === n.descriptor.id) return l.borderBox.center; if (Be(g.descriptor.id, a)) { var v = y(g.page, J(a.displacedBy.point)); return Me({ axis: c, moveRelativeTo: v, isMoving: l }) } return Me({ axis: c, moveRelativeTo: g.page, isMoving: l }) },
                Fe = function(e, t) { var n = e.frame; return n ? q(t, n.scroll.diff.displacement) : t },
                ke = function(e) { var t = function(e) { var t = e.impact,
                                n = e.draggable,
                                r = e.droppable,
                                i = e.draggables,
                                a = e.afterCritical,
                                o = n.page.borderBox.center,
                                l = t.at; return r && l ? "REORDER" === l.type ? _e({ impact: t, draggable: n, draggables: i, droppable: r, afterCritical: a }) : Te({ impact: t, draggables: i, afterCritical: a }) : o }(e),
                        n = e.droppable; return n ? Fe(n, t) : t },
                We = function(e, t) { var n = z(t, e.scroll.initial),
                        r = J(n); return { frame: f({ top: t.y, bottom: t.y + e.frame.height, left: t.x, right: t.x + e.frame.width }), scroll: { initial: e.scroll.initial, max: e.scroll.max, current: t, diff: { value: n, displacement: r } } } };

            function Ue(e, t) { return e.map((function(e) { return t[e] })) } var He = function(e) { var t = e.pageBorderBoxCenter,
                        n = e.draggable,
                        r = function(e, t) { return q(e.scroll.diff.displacement, t) }(e.viewport, t),
                        i = z(r, n.page.borderBox.center); return q(n.client.borderBox.center, i) },
                Ve = function(e) { var t = e.draggable,
                        n = e.destination,
                        r = e.newPageBorderBoxCenter,
                        i = e.viewport,
                        a = e.withDroppableDisplacement,
                        l = e.onlyOnMainAxis,
                        c = void 0 !== l && l,
                        u = z(r, t.page.borderBox.center),
                        s = { target: Z(t.page.borderBox, u), destination: n, withDroppableDisplacement: a, viewport: i }; return c ? function(e) { return Oe(Object(o.a)({}, e, { isVisibleThroughFrameFn: (t = e.destination.axis, function(e) { var n = xe(e.top, e.bottom),
                                    r = xe(e.left, e.right); return function(e) { return t === Ee ? n(e.top) && n(e.bottom) : r(e.left) && r(e.right) } }) })); var t }(s) : Ae(s) },
                qe = function(e) { var t = e.isMovingForward,
                        n = e.draggable,
                        r = e.destination,
                        i = e.draggables,
                        a = e.previousImpact,
                        l = e.viewport,
                        c = e.previousPageBorderBoxCenter,
                        u = e.previousClientSelection,
                        s = e.afterCritical; if (!r.isEnabled) return null; var d = pe(r.descriptor.id, i),
                        p = be(n, r),
                        f = function(e) { var t = e.isMovingForward,
                                n = e.draggable,
                                r = e.destination,
                                i = e.insideDestination,
                                a = e.previousImpact; if (!r.isCombineEnabled) return null; if (!fe(a)) return null;

                            function l(e) { var t = { type: "COMBINE", combine: { draggableId: e, droppableId: r.descriptor.id } }; return Object(o.a)({}, a, { at: t }) } var c = a.displaced.all,
                                u = c.length ? c[0] : null; if (t) return u ? l(u) : null; var s = ve(n, i); if (!u) return s.length ? l(s[s.length - 1].descriptor.id) : null; var d = ae(s, (function(e) { return e.descriptor.id === u })); - 1 === d && L(!1); var p = d - 1; return p < 0 ? null : l(s[p].descriptor.id) }({ isMovingForward: t, draggable: n, destination: r, insideDestination: d, previousImpact: a }) || Pe({ isMovingForward: t, isInHomeList: p, draggable: n, draggables: i, destination: r, insideDestination: d, previousImpact: a, viewport: l, afterCritical: s }); if (!f) return null; var g = ke({ impact: f, draggable: n, droppable: r, draggables: i, afterCritical: s }); if (Ve({ draggable: n, destination: r, newPageBorderBoxCenter: g, viewport: l.frame, withDroppableDisplacement: !1, onlyOnMainAxis: !0 })) return { clientSelection: He({ pageBorderBoxCenter: g, draggable: n, viewport: l }), impact: f, scrollJumpRequest: null }; var v = z(g, c),
                        b = function(e) { var t = e.impact,
                                n = e.viewport,
                                r = e.destination,
                                i = e.draggables,
                                a = e.maxScrollChange,
                                l = We(n, q(n.scroll.current, a)),
                                c = r.frame ? re(r, q(r.frame.scroll.current, a)) : r,
                                u = t.displaced,
                                s = Ne({ afterDragging: Ue(u.all, i), destination: r, displacedBy: t.displacedBy, viewport: l.frame, last: u, forceShouldAnimate: !1 }),
                                d = Ne({ afterDragging: Ue(u.all, i), destination: c, displacedBy: t.displacedBy, viewport: n.frame, last: u, forceShouldAnimate: !1 }),
                                p = {},
                                f = {},
                                g = [u, s, d]; return u.all.forEach((function(e) { var t = function(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n].visible[e]; if (r) return r } return null }(e, g);
                                t ? f[e] = t : p[e] = !0 })), Object(o.a)({}, t, { displaced: { all: u.all, invisible: p, visible: f } }) }({ impact: f, viewport: l, destination: r, draggables: i, maxScrollChange: v }); return { clientSelection: u, impact: b, scrollJumpRequest: v } },
                ze = function(e) { var t = e.subject.active; return t || L(!1), t },
                Ye = function(e, t) { var n = e.page.borderBox.center; return Be(e.descriptor.id, t) ? z(n, t.displacedBy.point) : n },
                Je = function(e, t) { var n = e.page.borderBox; return Be(e.descriptor.id, t) ? Z(n, J(t.displacedBy.point)) : n },
                Xe = O((function(e, t) { var n = t[e.line]; return { value: n, point: X(e.line, n) } })),
                Ke = function(e, t) { return Object(o.a)({}, e, { scroll: Object(o.a)({}, e.scroll, { max: t }) }) },
                $e = function(e, t, n) { var r = e.frame;
                    be(t, e) && L(!1), e.subject.withPlaceholder && L(!1); var i = Xe(e.axis, t.displaceBy).point,
                        a = function(e, t, n) { var r = e.axis; if ("virtual" === e.descriptor.mode) return X(r.line, t[r.line]); var i = e.subject.page.contentBox[r.size],
                                a = pe(e.descriptor.id, n).reduce((function(e, t) { return e + t.client.marginBox[r.size] }), 0) + t[r.line] - i; return a <= 0 ? null : X(r.line, a) }(e, i, n),
                        l = { placeholderSize: i, increasedBy: a, oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null }; if (!r) { var c = ne({ page: e.subject.page, withPlaceholder: l, axis: e.axis, frame: e.frame }); return Object(o.a)({}, e, { subject: c }) } var u = a ? q(r.scroll.max, a) : r.scroll.max,
                        s = Ke(r, u),
                        d = ne({ page: e.subject.page, withPlaceholder: l, axis: e.axis, frame: s }); return Object(o.a)({}, e, { subject: d, frame: s }) },
                Qe = function(e) { var t = e.isMovingForward,
                        n = e.previousPageBorderBoxCenter,
                        r = e.draggable,
                        i = e.isOver,
                        a = e.draggables,
                        o = e.droppables,
                        l = e.viewport,
                        c = e.afterCritical,
                        u = function(e) { var t = e.isMovingForward,
                                n = e.pageBorderBoxCenter,
                                r = e.source,
                                i = e.droppables,
                                a = e.viewport,
                                o = r.subject.active; if (!o) return null; var l = r.axis,
                                c = xe(o[l.start], o[l.end]),
                                u = se(i).filter((function(e) { return e !== r })).filter((function(e) { return e.isEnabled })).filter((function(e) { return Boolean(e.subject.active) })).filter((function(e) { return Ie(a.frame)(ze(e)) })).filter((function(e) { var n = ze(e); return t ? o[l.crossAxisEnd] < n[l.crossAxisEnd] : n[l.crossAxisStart] < o[l.crossAxisStart] })).filter((function(e) { var t = ze(e),
                                        n = xe(t[l.start], t[l.end]); return c(t[l.start]) || c(t[l.end]) || n(o[l.start]) || n(o[l.end]) })).sort((function(e, n) { var r = ze(e)[l.crossAxisStart],
                                        i = ze(n)[l.crossAxisStart]; return t ? r - i : i - r })).filter((function(e, t, n) { return ze(e)[l.crossAxisStart] === ze(n[0])[l.crossAxisStart] })); if (!u.length) return null; if (1 === u.length) return u[0]; var s = u.filter((function(e) { return xe(ze(e)[l.start], ze(e)[l.end])(n[l.line]) })); return 1 === s.length ? s[0] : s.length > 1 ? s.sort((function(e, t) { return ze(e)[l.start] - ze(t)[l.start] }))[0] : u.sort((function(e, t) { var r = $(n, ee(ze(e))),
                                    i = $(n, ee(ze(t))); return r !== i ? r - i : ze(e)[l.start] - ze(t)[l.start] }))[0] }({ isMovingForward: t, pageBorderBoxCenter: n, source: i, droppables: o, viewport: l }); if (!u) return null; var s = pe(u.descriptor.id, a),
                        d = function(e) { var t = e.pageBorderBoxCenter,
                                n = e.viewport,
                                r = e.destination,
                                i = e.insideDestination,
                                a = e.afterCritical; return i.filter((function(e) { return Ae({ target: Je(e, a), destination: r, viewport: n.frame, withDroppableDisplacement: !0 }) })).sort((function(e, n) { var i = K(t, Fe(r, Ye(e, a))),
                                    o = K(t, Fe(r, Ye(n, a))); return i < o ? -1 : o < i ? 1 : e.descriptor.index - n.descriptor.index }))[0] || null }({ pageBorderBoxCenter: n, viewport: l, destination: u, insideDestination: s, afterCritical: c }),
                        p = function(e) { var t = e.previousPageBorderBoxCenter,
                                n = e.moveRelativeTo,
                                r = e.insideDestination,
                                i = e.draggable,
                                a = e.draggables,
                                o = e.destination,
                                l = e.viewport,
                                c = e.afterCritical; if (!n) { if (r.length) return null; var u = { displaced: he, displacedBy: me, at: { type: "REORDER", destination: { droppableId: o.descriptor.id, index: 0 } } },
                                    s = ke({ impact: u, draggable: i, droppable: o, draggables: a, afterCritical: c }),
                                    d = be(i, o) ? o : $e(o, i, a); return Ve({ draggable: i, destination: d, newPageBorderBoxCenter: s, viewport: l.frame, withDroppableDisplacement: !1, onlyOnMainAxis: !0 }) ? u : null } var p = Boolean(t[o.axis.line] <= n.page.borderBox.center[o.axis.line]),
                                f = function() { var e = n.descriptor.index; return n.descriptor.id === i.descriptor.id || p ? e : e + 1 }(),
                                g = Xe(o.axis, i.displaceBy); return Re({ draggable: i, insideDestination: r, destination: o, viewport: l, displacedBy: g, last: he, index: f }) }({ previousPageBorderBoxCenter: n, destination: u, draggable: r, draggables: a, moveRelativeTo: d, insideDestination: s, viewport: l, afterCritical: c }); if (!p) return null; var f = ke({ impact: p, draggable: r, droppable: u, draggables: a, afterCritical: c }); return { clientSelection: He({ pageBorderBoxCenter: f, draggable: r, viewport: l }), impact: p, scrollJumpRequest: null } },
                Ze = function(e) { var t = e.at; return t ? "REORDER" === t.type ? t.destination.droppableId : t.combine.droppableId : null },
                et = function(e) { var t = e.state,
                        n = e.type,
                        r = function(e, t) { var n = Ze(e); return n ? t[n] : null }(t.impact, t.dimensions.droppables),
                        i = Boolean(r),
                        a = t.dimensions.droppables[t.critical.droppable.id],
                        o = r || a,
                        l = o.axis.direction,
                        c = "vertical" === l && ("MOVE_UP" === n || "MOVE_DOWN" === n) || "horizontal" === l && ("MOVE_LEFT" === n || "MOVE_RIGHT" === n); if (c && !i) return null; var u = "MOVE_DOWN" === n || "MOVE_RIGHT" === n,
                        s = t.dimensions.draggables[t.critical.draggable.id],
                        d = t.current.page.borderBoxCenter,
                        p = t.dimensions,
                        f = p.draggables,
                        g = p.droppables; return c ? qe({ isMovingForward: u, previousPageBorderBoxCenter: d, draggable: s, destination: o, draggables: f, viewport: t.viewport, previousClientSelection: t.current.client.selection, previousImpact: t.impact, afterCritical: t.afterCritical }) : Qe({ isMovingForward: u, previousPageBorderBoxCenter: d, draggable: s, isOver: o, draggables: f, droppables: g, viewport: t.viewport, afterCritical: t.afterCritical }) };

            function tt(e) { return "DRAGGING" === e.phase || "COLLECTING" === e.phase }

            function nt(e) { var t = xe(e.top, e.bottom),
                    n = xe(e.left, e.right); return function(e) { return t(e.y) && n(e.x) } }

            function rt(e) { var t = e.pageBorderBox,
                    n = e.draggable,
                    r = e.droppables,
                    i = se(r).filter((function(e) { if (!e.isEnabled) return !1; var n, r, i = e.subject.active; if (!i) return !1; if (r = i, !((n = t).left < r.right && n.right > r.left && n.top < r.bottom && n.bottom > r.top)) return !1; if (nt(i)(t.center)) return !0; var a = e.axis,
                            o = i.center[a.crossAxisLine],
                            l = t[a.crossAxisStart],
                            c = t[a.crossAxisEnd],
                            u = xe(i[a.crossAxisStart], i[a.crossAxisEnd]),
                            s = u(l),
                            d = u(c); return !s && !d || (s ? l < o : c > o) })); return i.length ? 1 === i.length ? i[0].descriptor.id : function(e) { var t = e.pageBorderBox,
                        n = e.draggable,
                        r = e.candidates,
                        i = n.page.borderBox.center,
                        a = r.map((function(e) { var n = e.axis,
                                r = X(e.axis.line, t.center[n.line], e.page.borderBox.center[n.crossAxisLine]); return { id: e.descriptor.id, distance: K(i, r) } })).sort((function(e, t) { return t.distance - e.distance })); return a[0] ? a[0].id : null }({ pageBorderBox: t, draggable: n, candidates: i }) : null } var it = function(e, t) { return f(Z(e, t)) };

            function at(e) { var t = e.displaced,
                    n = e.id; return Boolean(t.visible[n] || t.invisible[n]) } var ot = function(e) { var t = e.pageOffset,
                        n = e.draggable,
                        r = e.draggables,
                        i = e.droppables,
                        a = e.previousImpact,
                        o = e.viewport,
                        l = e.afterCritical,
                        c = it(n.page.borderBox, t),
                        u = rt({ pageBorderBox: c, draggable: n, droppables: i }); if (!u) return ye; var s = i[u],
                        d = pe(s.descriptor.id, r),
                        p = function(e, t) { var n = e.frame; return n ? it(t, n.scroll.diff.value) : t }(s, c); return function(e) { var t = e.draggable,
                            n = e.pageBorderBoxWithDroppableScroll,
                            r = e.previousImpact,
                            i = e.destination,
                            a = e.insideDestination,
                            o = e.afterCritical; if (!i.isCombineEnabled) return null; var l = i.axis,
                            c = Xe(i.axis, t.displaceBy),
                            u = c.value,
                            s = n[l.start],
                            d = n[l.end],
                            p = oe(ve(t, a), (function(e) { var t = e.descriptor.id,
                                    n = e.page.borderBox,
                                    i = n[l.size] / 4,
                                    a = Be(t, o),
                                    c = at({ displaced: r.displaced, id: t }); return a ? c ? d > n[l.start] + i && d < n[l.end] - i : s > n[l.start] - u + i && s < n[l.end] - u - i : c ? d > n[l.start] + u + i && d < n[l.end] + u - i : s > n[l.start] + i && s < n[l.end] - i })); return p ? { displacedBy: c, displaced: r.displaced, at: { type: "COMBINE", combine: { draggableId: p.descriptor.id, droppableId: i.descriptor.id } } } : null }({ pageBorderBoxWithDroppableScroll: p, draggable: n, previousImpact: a, destination: s, insideDestination: d, afterCritical: l }) || function(e) { var t = e.pageBorderBoxWithDroppableScroll,
                            n = e.draggable,
                            r = e.destination,
                            i = e.insideDestination,
                            a = e.last,
                            o = e.viewport,
                            l = e.afterCritical,
                            c = r.axis,
                            u = Xe(r.axis, n.displaceBy),
                            s = u.value,
                            d = t[c.start],
                            p = t[c.end],
                            f = function(e) { var t = e.draggable,
                                    n = e.closest,
                                    r = e.inHomeList; return n ? r && n.descriptor.index > t.descriptor.index ? n.descriptor.index - 1 : n.descriptor.index : null }({ draggable: n, closest: oe(ve(n, i), (function(e) { var t = e.descriptor.id,
                                        n = e.page.borderBox.center[c.line],
                                        r = Be(t, l),
                                        i = at({ displaced: a, id: t }); return r ? i ? p <= n : d < n - s : i ? p <= n + s : d < n })), inHomeList: be(n, r) }); return Re({ draggable: n, insideDestination: i, destination: r, viewport: o, last: a, displacedBy: u, index: f }) }({ pageBorderBoxWithDroppableScroll: p, draggable: n, destination: s, insideDestination: d, last: a.displaced, viewport: o, afterCritical: l }) },
                lt = function(e, t) { var n; return Object(o.a)({}, e, ((n = {})[t.descriptor.id] = t, n)) },
                ct = function(e) { var t = e.previousImpact,
                        n = e.impact,
                        r = e.droppables,
                        i = Ze(t),
                        a = Ze(n); if (!i) return r; if (i === a) return r; var l = r[i]; if (!l.subject.withPlaceholder) return r; var c = function(e) { var t = e.subject.withPlaceholder;
                        t || L(!1); var n = e.frame; if (!n) { var r = ne({ page: e.subject.page, axis: e.axis, frame: null, withPlaceholder: null }); return Object(o.a)({}, e, { subject: r }) } var i = t.oldFrameMaxScroll;
                        i || L(!1); var a = Ke(n, i),
                            l = ne({ page: e.subject.page, axis: e.axis, frame: a, withPlaceholder: null }); return Object(o.a)({}, e, { subject: l, frame: a }) }(l); return lt(r, c) },
                ut = function(e) { var t = e.state,
                        n = e.clientSelection,
                        r = e.dimensions,
                        i = e.viewport,
                        a = e.impact,
                        l = e.scrollJumpRequest,
                        c = i || t.viewport,
                        u = r || t.dimensions,
                        s = n || t.current.client.selection,
                        d = z(s, t.initial.client.selection),
                        p = { offset: d, selection: s, borderBoxCenter: q(t.initial.client.borderBoxCenter, d) },
                        f = { selection: q(p.selection, c.scroll.current), borderBoxCenter: q(p.borderBoxCenter, c.scroll.current), offset: q(p.offset, c.scroll.diff.value) },
                        g = { client: p, page: f }; if ("COLLECTING" === t.phase) return Object(o.a)({ phase: "COLLECTING" }, t, { dimensions: u, viewport: c, current: g }); var v = u.draggables[t.critical.draggable.id],
                        b = a || ot({ pageOffset: f.offset, draggable: v, draggables: u.draggables, droppables: u.droppables, previousImpact: t.impact, viewport: c, afterCritical: t.afterCritical }),
                        m = function(e) { var t = e.draggable,
                                n = e.draggables,
                                r = e.droppables,
                                i = e.previousImpact,
                                a = e.impact,
                                o = ct({ previousImpact: i, impact: a, droppables: r }),
                                l = Ze(a); if (!l) return o; var c = r[l]; if (be(t, c)) return o; if (c.subject.withPlaceholder) return o; var u = $e(c, t, n); return lt(o, u) }({ draggable: v, impact: b, previousImpact: t.impact, draggables: u.draggables, droppables: u.droppables }); return Object(o.a)({}, t, { current: g, dimensions: { draggables: u.draggables, droppables: m }, impact: b, viewport: c, scrollJumpRequest: l || null, forceShouldAnimate: !l && null }) }; var st = function(e) { var t = e.impact,
                        n = e.viewport,
                        r = e.draggables,
                        i = e.destination,
                        a = e.forceShouldAnimate,
                        l = t.displaced,
                        c = function(e, t) { return e.map((function(e) { return t[e] })) }(l.all, r),
                        u = Ne({ afterDragging: c, destination: i, displacedBy: t.displacedBy, viewport: n.frame, forceShouldAnimate: a, last: l }); return Object(o.a)({}, t, { displaced: u }) },
                dt = function(e) { var t = e.impact,
                        n = e.draggable,
                        r = e.droppable,
                        i = e.draggables,
                        a = e.viewport,
                        o = e.afterCritical,
                        l = ke({ impact: t, draggable: n, draggables: i, droppable: r, afterCritical: o }); return He({ pageBorderBoxCenter: l, draggable: n, viewport: a }) },
                pt = function(e) { var t = e.state,
                        n = e.dimensions,
                        r = e.viewport; "SNAP" !== t.movementMode && L(!1); var i = t.impact,
                        a = r || t.viewport,
                        o = n || t.dimensions,
                        l = o.draggables,
                        c = o.droppables,
                        u = l[t.critical.draggable.id],
                        s = Ze(i);
                    s || L(!1); var d = c[s],
                        p = st({ impact: i, viewport: a, destination: d, draggables: l }),
                        f = dt({ impact: p, draggable: u, droppable: d, draggables: l, viewport: a, afterCritical: t.afterCritical }); return ut({ impact: p, clientSelection: f, state: t, dimensions: o, viewport: a }) },
                ft = function(e) { var t = e.draggable,
                        n = e.home,
                        r = e.draggables,
                        i = e.viewport,
                        a = Xe(n.axis, t.displaceBy),
                        o = pe(n.descriptor.id, r),
                        l = o.indexOf(t); - 1 === l && L(!1); var c, u = o.slice(l + 1),
                        s = u.reduce((function(e, t) { return e[t.descriptor.id] = !0, e }), {}),
                        d = { inVirtualList: "virtual" === n.descriptor.mode, displacedBy: a, effected: s }; return { impact: { displaced: Ne({ afterDragging: u, destination: n, displacedBy: a, last: null, viewport: i.frame, forceShouldAnimate: !1 }), displacedBy: a, at: { type: "REORDER", destination: (c = t.descriptor, { index: c.index, droppableId: c.droppableId }) } }, afterCritical: d } },
                gt = function(e) { 0 },
                vt = function(e) { 0 },
                bt = function(e) { var t = e.additions,
                        n = e.updatedDroppables,
                        r = e.viewport,
                        i = r.scroll.diff.value; return t.map((function(e) { var t = e.descriptor.droppableId,
                            a = function(e) { var t = e.frame; return t || L(!1), t }(n[t]).scroll.diff.value,
                            l = function(e) { var t = e.draggable,
                                    n = e.offset,
                                    r = e.initialWindowScroll,
                                    i = y(t.client, n),
                                    a = x(i, r); return Object(o.a)({}, t, { placeholder: Object(o.a)({}, t.placeholder, { client: i }), client: i, page: a }) }({ draggable: e, offset: q(i, a), initialWindowScroll: r.scroll.initial }); return l })) },
                mt = function(e) { return "SNAP" === e.movementMode },
                ht = function(e, t, n) { var r = function(e, t) { return { draggables: e.draggables, droppables: lt(e.droppables, t) } }(e.dimensions, t); return !mt(e) || n ? ut({ state: e, dimensions: r }) : pt({ state: e, dimensions: r }) };

            function yt(e) { return e.isDragging && "SNAP" === e.movementMode ? Object(o.a)({ phase: "DRAGGING" }, e, { scrollJumpRequest: null }) : e } var xt = { phase: "IDLE", completed: null, shouldFlush: !1 },
                It = function(e, t) { if (void 0 === e && (e = xt), "FLUSH" === t.type) return Object(o.a)({}, xt, { shouldFlush: !0 }); if ("INITIAL_PUBLISH" === t.type) { "IDLE" !== e.phase && L(!1); var n = t.payload,
                            r = n.critical,
                            i = n.clientSelection,
                            a = n.viewport,
                            l = n.dimensions,
                            c = n.movementMode,
                            u = l.draggables[r.draggable.id],
                            s = l.droppables[r.droppable.id],
                            d = { selection: i, borderBoxCenter: u.client.borderBox.center, offset: V },
                            p = { client: d, page: { selection: q(d.selection, a.scroll.initial), borderBoxCenter: q(d.selection, a.scroll.initial), offset: q(d.selection, a.scroll.diff.value) } },
                            f = se(l.droppables).every((function(e) { return !e.isFixedOnPage })),
                            g = ft({ draggable: u, home: s, draggables: l.draggables, viewport: a }),
                            v = g.impact; return { phase: "DRAGGING", isDragging: !0, critical: r, movementMode: c, dimensions: l, initial: p, current: p, isWindowScrollAllowed: f, impact: v, afterCritical: g.afterCritical, onLiftImpact: v, viewport: a, scrollJumpRequest: null, forceShouldAnimate: null } } if ("COLLECTION_STARTING" === t.type) return "COLLECTING" === e.phase || "DROP_PENDING" === e.phase ? e : ("DRAGGING" !== e.phase && L(!1), Object(o.a)({ phase: "COLLECTING" }, e, { phase: "COLLECTING" })); if ("PUBLISH_WHILE_DRAGGING" === t.type) return "COLLECTING" !== e.phase && "DROP_PENDING" !== e.phase && L(!1),
                        function(e) { var t = e.state,
                                n = e.published;
                            gt(); var r = n.modified.map((function(e) { var n = t.dimensions.droppables[e.droppableId]; return re(n, e.scroll) })),
                                i = Object(o.a)({}, t.dimensions.droppables, {}, ce(r)),
                                a = ue(bt({ additions: n.additions, updatedDroppables: i, viewport: t.viewport })),
                                l = Object(o.a)({}, t.dimensions.draggables, {}, a);
                            n.removals.forEach((function(e) { delete l[e] })); var c = { droppables: i, draggables: l },
                                u = Ze(t.impact),
                                s = u ? c.droppables[u] : null,
                                d = c.draggables[t.critical.draggable.id],
                                p = c.droppables[t.critical.droppable.id],
                                f = ft({ draggable: d, home: p, draggables: l, viewport: t.viewport }),
                                g = f.impact,
                                v = f.afterCritical,
                                b = s && s.isCombineEnabled ? t.impact : g,
                                m = ot({ pageOffset: t.current.page.offset, draggable: c.draggables[t.critical.draggable.id], draggables: c.draggables, droppables: c.droppables, previousImpact: b, viewport: t.viewport, afterCritical: v });
                            vt(); var h = Object(o.a)({ phase: "DRAGGING" }, t, { phase: "DRAGGING", impact: m, onLiftImpact: g, dimensions: c, afterCritical: v, forceShouldAnimate: !1 }); return "COLLECTING" === t.phase ? h : Object(o.a)({ phase: "DROP_PENDING" }, h, { phase: "DROP_PENDING", reason: t.reason, isWaiting: !1 }) }({ state: e, published: t.payload }); if ("MOVE" === t.type) { if ("DROP_PENDING" === e.phase) return e;
                        tt(e) || L(!1); var b = t.payload.client; return Y(b, e.current.client.selection) ? e : ut({ state: e, clientSelection: b, impact: mt(e) ? e.impact : null }) } if ("UPDATE_DROPPABLE_SCROLL" === t.type) { if ("DROP_PENDING" === e.phase) return yt(e); if ("COLLECTING" === e.phase) return yt(e);
                        tt(e) || L(!1); var m = t.payload,
                            h = m.id,
                            y = m.newScroll,
                            x = e.dimensions.droppables[h]; if (!x) return e; var I = re(x, y); return ht(e, I, !1) } if ("UPDATE_DROPPABLE_IS_ENABLED" === t.type) { if ("DROP_PENDING" === e.phase) return e;
                        tt(e) || L(!1); var D = t.payload,
                            E = D.id,
                            C = D.isEnabled,
                            O = e.dimensions.droppables[E];
                        O || L(!1), O.isEnabled === C && L(!1); var w = Object(o.a)({}, O, { isEnabled: C }); return ht(e, w, !0) } if ("UPDATE_DROPPABLE_IS_COMBINE_ENABLED" === t.type) { if ("DROP_PENDING" === e.phase) return e;
                        tt(e) || L(!1); var A = t.payload,
                            N = A.id,
                            S = A.isCombineEnabled,
                            R = e.dimensions.droppables[N];
                        R || L(!1), R.isCombineEnabled === S && L(!1); var B = Object(o.a)({}, R, { isCombineEnabled: S }); return ht(e, B, !0) } if ("MOVE_BY_WINDOW_SCROLL" === t.type) { if ("DROP_PENDING" === e.phase || "DROP_ANIMATING" === e.phase) return e;
                        tt(e) || L(!1), e.isWindowScrollAllowed || L(!1); var P = t.payload.newScroll; if (Y(e.viewport.scroll.current, P)) return yt(e); var T = We(e.viewport, P); return mt(e) ? pt({ state: e, viewport: T }) : ut({ state: e, viewport: T }) } if ("UPDATE_VIEWPORT_MAX_SCROLL" === t.type) { if (!tt(e)) return e; var G = t.payload.maxScroll; if (Y(G, e.viewport.scroll.max)) return e; var M = Object(o.a)({}, e.viewport, { scroll: Object(o.a)({}, e.viewport.scroll, { max: G }) }); return Object(o.a)({ phase: "DRAGGING" }, e, { viewport: M }) } if ("MOVE_UP" === t.type || "MOVE_DOWN" === t.type || "MOVE_LEFT" === t.type || "MOVE_RIGHT" === t.type) { if ("COLLECTING" === e.phase || "DROP_PENDING" === e.phase) return e; "DRAGGING" !== e.phase && L(!1); var j = et({ state: e, type: t.type }); return j ? ut({ state: e, impact: j.impact, clientSelection: j.clientSelection, scrollJumpRequest: j.scrollJumpRequest }) : e } if ("DROP_PENDING" === t.type) { var _ = t.payload.reason; return "COLLECTING" !== e.phase && L(!1), Object(o.a)({ phase: "DROP_PENDING" }, e, { phase: "DROP_PENDING", isWaiting: !0, reason: _ }) } if ("DROP_ANIMATE" === t.type) { var F = t.payload,
                            k = F.completed,
                            W = F.dropDuration,
                            U = F.newHomeClientOffset; return "DRAGGING" !== e.phase && "DROP_PENDING" !== e.phase && L(!1), { phase: "DROP_ANIMATING", completed: k, dropDuration: W, newHomeClientOffset: U, dimensions: e.dimensions } } return "DROP_COMPLETE" === t.type ? { phase: "IDLE", completed: t.payload.completed, shouldFlush: !1 } : e },
                Dt = function(e) { return { type: "PUBLISH_WHILE_DRAGGING", payload: e } },
                Et = function() { return { type: "COLLECTION_STARTING", payload: null } },
                Ct = function(e) { return { type: "UPDATE_DROPPABLE_SCROLL", payload: e } },
                Ot = function(e) { return { type: "UPDATE_DROPPABLE_IS_ENABLED", payload: e } },
                wt = function(e) { return { type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED", payload: e } },
                At = function(e) { return { type: "MOVE", payload: e } },
                Nt = function() { return { type: "MOVE_UP", payload: null } },
                St = function() { return { type: "MOVE_DOWN", payload: null } },
                Rt = function() { return { type: "MOVE_RIGHT", payload: null } },
                Bt = function() { return { type: "MOVE_LEFT", payload: null } },
                Pt = function(e) { return { type: "DROP_COMPLETE", payload: e } },
                Tt = function(e) { return { type: "DROP", payload: e } },
                Lt = function() { return { type: "DROP_ANIMATION_FINISHED", payload: null } }; var Gt = "cubic-bezier(.2,1,.1,1)",
                Mt = { drop: 0, combining: .7 },
                jt = { drop: .75 },
                _t = .2 + "s " + "cubic-bezier(0.2, 0, 0, 1)",
                Ft = { fluid: "opacity " + _t, snap: "transform " + _t + ", opacity " + _t, drop: function(e) { var t = e + "s " + Gt; return "transform " + t + ", opacity " + t }, outOfTheWay: "transform " + _t, placeholder: "height " + _t + ", width " + _t + ", margin " + _t },
                kt = function(e) { return Y(e, V) ? null : "translate(" + e.x + "px, " + e.y + "px)" },
                Wt = kt,
                Ut = function(e, t) { var n = kt(e); return n ? t ? n + " scale(" + jt.drop + ")" : n : null },
                Ht = .33,
                Vt = .55,
                qt = Vt - Ht,
                zt = function(e) { var t = e.getState,
                        n = e.dispatch; return function(e) { return function(r) { if ("DROP" === r.type) { var i = t(),
                                    a = r.payload.reason; if ("COLLECTING" !== i.phase) { if ("IDLE" !== i.phase) { "DROP_PENDING" === i.phase && i.isWaiting && L(!1), "DRAGGING" !== i.phase && "DROP_PENDING" !== i.phase && L(!1); var l = i.critical,
                                            c = i.dimensions,
                                            u = c.draggables[i.critical.draggable.id],
                                            s = function(e) { var t = e.draggables,
                                                    n = e.reason,
                                                    r = e.lastImpact,
                                                    i = e.home,
                                                    a = e.viewport,
                                                    l = e.onLiftImpact; return r.at && "DROP" === n ? "REORDER" === r.at.type ? { impact: r, didDropInsideDroppable: !0 } : { impact: Object(o.a)({}, r, { displaced: he }), didDropInsideDroppable: !0 } : { impact: st({ draggables: t, impact: l, destination: i, viewport: a, forceShouldAnimate: !0 }), didDropInsideDroppable: !1 } }({ reason: a, lastImpact: i.impact, afterCritical: i.afterCritical, onLiftImpact: i.onLiftImpact, home: i.dimensions.droppables[i.critical.droppable.id], viewport: i.viewport, draggables: i.dimensions.draggables }),
                                            d = s.impact,
                                            p = s.didDropInsideDroppable,
                                            f = p ? fe(d) : null,
                                            g = p ? ge(d) : null,
                                            v = { index: l.draggable.index, droppableId: l.droppable.id },
                                            b = { draggableId: u.descriptor.id, type: u.descriptor.type, source: v, reason: a, mode: i.movementMode, destination: f, combine: g },
                                            m = function(e) { var t = e.impact,
                                                    n = e.draggable,
                                                    r = e.dimensions,
                                                    i = e.viewport,
                                                    a = e.afterCritical,
                                                    o = r.draggables,
                                                    l = r.droppables,
                                                    c = Ze(t),
                                                    u = c ? l[c] : null,
                                                    s = l[n.descriptor.droppableId],
                                                    d = dt({ impact: t, draggable: n, draggables: o, afterCritical: a, droppable: u || s, viewport: i }); return z(d, n.client.borderBox.center) }({ impact: d, draggable: u, dimensions: c, viewport: i.viewport, afterCritical: i.afterCritical }),
                                            h = { critical: i.critical, afterCritical: i.afterCritical, result: b, impact: d }; if (!Y(i.current.client.offset, m) || Boolean(b.combine)) { var y = function(e) { var t = e.current,
                                                    n = e.destination,
                                                    r = e.reason,
                                                    i = K(t, n); if (i <= 0) return Ht; if (i >= 1500) return Vt; var a = Ht + qt * (i / 1500); return Number(("CANCEL" === r ? .6 * a : a).toFixed(2)) }({ current: i.current.client.offset, destination: m, reason: a });
                                            n(function(e) { return { type: "DROP_ANIMATE", payload: e } }({ newHomeClientOffset: m, dropDuration: y, completed: h })) } else n(Pt({ completed: h })) } } else n(function(e) { return { type: "DROP_PENDING", payload: e } }({ reason: a })) } else e(r) } } },
                Yt = function() { return { x: window.pageXOffset, y: window.pageYOffset } };

            function Jt(e) { var t = e.onWindowScroll; var n, r = w((function() { t(Yt()) })),
                    i = (n = r, { eventName: "scroll", options: { passive: !0, capture: !1 }, fn: function(e) { e.target !== window && e.target !== window.document || n() } }),
                    a = R;

                function o() { return a !== R } return { start: function() { o() && L(!1), a = B(window, [i]) }, stop: function() { o() || L(!1), r.cancel(), a(), a = R }, isActive: o } } var Xt = function(e) { var t = Jt({ onWindowScroll: function(t) { e.dispatch({ type: "MOVE_BY_WINDOW_SCROLL", payload: { newScroll: t } }) } }); return function(e) { return function(n) { t.isActive() || "INITIAL_PUBLISH" !== n.type || t.start(), t.isActive() && function(e) { return "DROP_COMPLETE" === e.type || "DROP_ANIMATE" === e.type || "FLUSH" === e.type }(n) && t.stop(), e(n) } } },
                Kt = function() { var e = []; return { add: function(t) { var n = setTimeout((function() { return function(t) { var n = ae(e, (function(e) { return e.timerId === t })); - 1 === n && L(!1), e.splice(n, 1)[0].callback() }(n) })),
                                r = { timerId: n, callback: t };
                            e.push(r) }, flush: function() { if (e.length) { var t = [].concat(e);
                                e.length = 0, t.forEach((function(e) { clearTimeout(e.timerId), e.callback() })) } } } },
                $t = function(e, t) { gt(), t(), vt() },
                Qt = function(e, t) { return { draggableId: e.draggable.id, type: e.droppable.type, source: { droppableId: e.droppable.id, index: e.draggable.index }, mode: t } },
                Zt = function(e, t, n, r) { if (e) { var i = function(e) { var t = !1,
                                n = !1,
                                r = setTimeout((function() { n = !0 })),
                                i = function(i) { t || n || (t = !0, e(i), clearTimeout(r)) }; return i.wasCalled = function() { return t }, i }(n);
                        e(t, { announce: i }), i.wasCalled() || n(r(t)) } else n(r(t)) },
                en = function(e, t) { var n = function(e, t) { var n = Kt(),
                            r = null,
                            i = function(n) { r || L(!1), r = null, $t(0, (function() { return Zt(e().onDragEnd, n, t, H) })) }; return { beforeCapture: function(t, n) { r && L(!1), $t(0, (function() { var r = e().onBeforeCapture;
                                    r && r({ draggableId: t, mode: n }) })) }, beforeStart: function(t, n) { r && L(!1), $t(0, (function() { var r = e().onBeforeDragStart;
                                    r && r(Qt(t, n)) })) }, start: function(i, a) { r && L(!1); var o = Qt(i, a);
                                r = { mode: a, lastCritical: i, lastLocation: o.source, lastCombine: null }, n.add((function() { $t(0, (function() { return Zt(e().onDragStart, o, t, W) })) })) }, update: function(i, a) { var l = fe(a),
                                    c = ge(a);
                                r || L(!1); var u = ! function(e, t) { if (e === t) return !0; var n = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index,
                                        r = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type; return n && r }(i, r.lastCritical);
                                u && (r.lastCritical = i); var s, d, p = (d = l, !(null == (s = r.lastLocation) && null == d || null != s && null != d && s.droppableId === d.droppableId && s.index === d.index));
                                p && (r.lastLocation = l); var f = ! function(e, t) { return null == e && null == t || null != e && null != t && e.draggableId === t.draggableId && e.droppableId === t.droppableId }(r.lastCombine, c); if (f && (r.lastCombine = c), u || p || f) { var g = Object(o.a)({}, Qt(i, r.mode), { combine: c, destination: l });
                                    n.add((function() { $t(0, (function() { return Zt(e().onDragUpdate, g, t, U) })) })) } }, flush: function() { r || L(!1), n.flush() }, drop: i, abort: function() { if (r) { var e = Object(o.a)({}, Qt(r.lastCritical, r.mode), { combine: null, destination: null, reason: "CANCEL" });
                                    i(e) } } } }(e, t); return function(e) { return function(t) { return function(r) { if ("BEFORE_INITIAL_CAPTURE" !== r.type) { if ("INITIAL_PUBLISH" === r.type) { var i = r.payload.critical; return n.beforeStart(i, r.payload.movementMode), t(r), void n.start(i, r.payload.movementMode) } if ("DROP_COMPLETE" === r.type) { var a = r.payload.completed.result; return n.flush(), t(r), void n.drop(a) } if (t(r), "FLUSH" !== r.type) { var o = e.getState(); "DRAGGING" === o.phase && n.update(o.critical, o.impact) } else n.abort() } else n.beforeCapture(r.payload.draggableId, r.payload.movementMode) } } } },
                tn = function(e) { return function(t) { return function(n) { if ("DROP_ANIMATION_FINISHED" === n.type) { var r = e.getState(); "DROP_ANIMATING" !== r.phase && L(!1), e.dispatch(Pt({ completed: r.completed })) } else t(n) } } },
                nn = function(e) { var t = null,
                        n = null; return function(r) { return function(i) { if ("FLUSH" !== i.type && "DROP_COMPLETE" !== i.type && "DROP_ANIMATION_FINISHED" !== i.type || (n && (cancelAnimationFrame(n), n = null), t && (t(), t = null)), r(i), "DROP_ANIMATE" === i.type) { var a = { eventName: "scroll", options: { capture: !0, passive: !1, once: !0 }, fn: function() { "DROP_ANIMATING" === e.getState().phase && e.dispatch({ type: "DROP_ANIMATION_FINISHED", payload: null }) } };
                                n = requestAnimationFrame((function() { n = null, t = B(window, [a]) })) } } } },
                rn = function(e) { return function(t) { return function(n) { if (t(n), "PUBLISH_WHILE_DRAGGING" === n.type) { var r = e.getState(); "DROP_PENDING" === r.phase && (r.isWaiting || e.dispatch(Tt({ reason: r.reason }))) } } } },
                an = l.d,
                on = function(e) { var t, n = e.dimensionMarshal,
                        r = e.focusMarshal,
                        i = e.styleMarshal,
                        a = e.getResponders,
                        o = e.announce,
                        c = e.autoScroller; return Object(l.e)(It, an(Object(l.a)((t = i, function() { return function(e) { return function(n) { "INITIAL_PUBLISH" === n.type && t.dragging(), "DROP_ANIMATE" === n.type && t.dropping(n.payload.completed.result.reason), "FLUSH" !== n.type && "DROP_COMPLETE" !== n.type || t.resting(), e(n) } } }), function(e) { return function() { return function(t) { return function(n) { "DROP_COMPLETE" !== n.type && "FLUSH" !== n.type && "DROP_ANIMATE" !== n.type || e.stopPublishing(), t(n) } } } }(n), function(e) { return function(t) { var n = t.getState,
                                r = t.dispatch; return function(t) { return function(i) { if ("LIFT" === i.type) { var a = i.payload,
                                            o = a.id,
                                            l = a.clientSelection,
                                            c = a.movementMode,
                                            u = n(); "DROP_ANIMATING" === u.phase && r(Pt({ completed: u.completed })), "IDLE" !== n().phase && L(!1), r({ type: "FLUSH", payload: null }), r({ type: "BEFORE_INITIAL_CAPTURE", payload: { draggableId: o, movementMode: c } }); var s = { draggableId: o, scrollOptions: { shouldPublishImmediately: "SNAP" === c } },
                                            d = e.startPublishing(s),
                                            p = d.critical,
                                            f = d.dimensions,
                                            g = d.viewport;
                                        r({ type: "INITIAL_PUBLISH", payload: { critical: p, dimensions: f, clientSelection: l, movementMode: c, viewport: g } }) } else t(i) } } } }(n), zt, tn, nn, rn, function(e) { return function(t) { return function(n) { return function(r) { if (function(e) { return "DROP_COMPLETE" === e.type || "DROP_ANIMATE" === e.type || "FLUSH" === e.type }(r)) return e.stop(), void n(r); if ("INITIAL_PUBLISH" === r.type) { n(r); var i = t.getState(); return "DRAGGING" !== i.phase && L(!1), void e.start(i) }
                                    n(r), e.scroll(t.getState()) } } } }(c), Xt, function(e) { var t = !1; return function() { return function(n) { return function(r) { if ("INITIAL_PUBLISH" === r.type) return t = !0, e.tryRecordFocus(r.payload.critical.draggable.id), n(r), void e.tryRestoreFocusRecorded(); if (n(r), t) { if ("FLUSH" === r.type) return t = !1, void e.tryRestoreFocusRecorded(); if ("DROP_COMPLETE" === r.type) { t = !1; var i = r.payload.completed.result;
                                            i.combine && e.tryShiftRecord(i.draggableId, i.combine.draggableId), e.tryRestoreFocusRecorded() } } } } } }(r), en(a, o)))) }; var ln = function(e) { var t = e.scrollHeight,
                        n = e.scrollWidth,
                        r = e.height,
                        i = e.width,
                        a = z({ x: n, y: t }, { x: i, y: r }); return { x: Math.max(0, a.x), y: Math.max(0, a.y) } },
                cn = function() { var e = document.documentElement; return e || L(!1), e },
                un = function() { var e = cn(); return ln({ scrollHeight: e.scrollHeight, scrollWidth: e.scrollWidth, width: e.clientWidth, height: e.clientHeight }) },
                sn = function(e) { var t = e.critical,
                        n = e.scrollOptions,
                        r = e.registry;
                    gt(); var i = function() { var e = Yt(),
                                t = un(),
                                n = e.y,
                                r = e.x,
                                i = cn(),
                                a = i.clientWidth,
                                o = i.clientHeight; return { frame: f({ top: n, left: r, right: r + a, bottom: n + o }), scroll: { initial: e, current: e, max: t, diff: { value: V, displacement: V } } } }(),
                        a = i.scroll.current,
                        o = t.droppable,
                        l = r.droppable.getAllByType(o.type).map((function(e) { return e.callbacks.getDimensionAndWatchScroll(a, n) })),
                        c = r.draggable.getAllByType(t.draggable.type).map((function(e) { return e.getDimension(a) })),
                        u = { draggables: ue(c), droppables: ce(l) }; return vt(), { dimensions: u, critical: t, viewport: i } };

            function dn(e, t, n) { return n.descriptor.id !== t.id && (n.descriptor.type === t.type && "virtual" === e.droppable.getById(n.descriptor.droppableId).descriptor.mode) } var pn = function(e, t) { var n = null,
                        r = function(e) { var t = e.registry,
                                n = e.callbacks,
                                r = { additions: {}, removals: {}, modified: {} },
                                i = null,
                                a = function() { i || (n.collectionStarting(), i = requestAnimationFrame((function() { i = null, gt(); var e = r,
                                            a = e.additions,
                                            o = e.removals,
                                            l = e.modified,
                                            c = Object.keys(a).map((function(e) { return t.draggable.getById(e).getDimension(V) })).sort((function(e, t) { return e.descriptor.index - t.descriptor.index })),
                                            u = Object.keys(l).map((function(e) { return { droppableId: e, scroll: t.droppable.getById(e).callbacks.getScrollWhileDragging() } })),
                                            s = { additions: c, removals: Object.keys(o), modified: u };
                                        r = { additions: {}, removals: {}, modified: {} }, vt(), n.publish(s) }))) }; return { add: function(e) { var t = e.descriptor.id;
                                    r.additions[t] = e, r.modified[e.descriptor.droppableId] = !0, r.removals[t] && delete r.removals[t], a() }, remove: function(e) { var t = e.descriptor;
                                    r.removals[t.id] = !0, r.modified[t.droppableId] = !0, r.additions[t.id] && delete r.additions[t.id], a() }, stop: function() { i && (cancelAnimationFrame(i), i = null, r = { additions: {}, removals: {}, modified: {} }) } } }({ callbacks: { publish: t.publishWhileDragging, collectionStarting: t.collectionStarting }, registry: e }),
                        i = function(t) { n || L(!1); var i = n.critical.draggable; "ADDITION" === t.type && dn(e, i, t.value) && r.add(t.value), "REMOVAL" === t.type && dn(e, i, t.value) && r.remove(t.value) }; return { updateDroppableIsEnabled: function(r, i) { e.droppable.exists(r) || L(!1), n && t.updateDroppableIsEnabled({ id: r, isEnabled: i }) }, updateDroppableIsCombineEnabled: function(r, i) { n && (e.droppable.exists(r) || L(!1), t.updateDroppableIsCombineEnabled({ id: r, isCombineEnabled: i })) }, scrollDroppable: function(t, r) { n && e.droppable.getById(t).callbacks.scroll(r) }, updateDroppableScroll: function(r, i) { n && (e.droppable.exists(r) || L(!1), t.updateDroppableScroll({ id: r, newScroll: i })) }, startPublishing: function(t) { n && L(!1); var r = e.draggable.getById(t.draggableId),
                                a = e.droppable.getById(r.descriptor.droppableId),
                                o = { draggable: r.descriptor, droppable: a.descriptor },
                                l = e.subscribe(i); return n = { critical: o, unsubscribe: l }, sn({ critical: o, registry: e, scrollOptions: t.scrollOptions }) }, stopPublishing: function() { if (n) { r.stop(); var t = n.critical.droppable;
                                e.droppable.getAllByType(t.type).forEach((function(e) { return e.callbacks.dragStopped() })), n.unsubscribe(), n = null } } } },
                fn = function(e, t) { return "IDLE" === e.phase || "DROP_ANIMATING" === e.phase && (e.completed.result.draggableId !== t && "DROP" === e.completed.result.reason) },
                gn = function(e) { window.scrollBy(e.x, e.y) },
                vn = O((function(e) { return se(e).filter((function(e) { return !!e.isEnabled && !!e.frame })) })),
                bn = function(e) { var t = e.center,
                        n = e.destination,
                        r = e.droppables; if (n) { var i = r[n]; return i.frame ? i : null } var a = function(e, t) { return oe(vn(t), (function(t) { return t.frame || L(!1), nt(t.frame.pageMarginBox)(e) })) }(t, r); return a },
                mn = .25,
                hn = .05,
                yn = 28,
                xn = function(e) { return Math.pow(e, 2) },
                In = { stopDampeningAt: 1200, accelerateAt: 360 },
                Dn = function(e) { var t = e.startOfRange,
                        n = e.endOfRange,
                        r = e.current,
                        i = n - t; return 0 === i ? 0 : (r - t) / i },
                En = In.accelerateAt,
                Cn = In.stopDampeningAt,
                On = function(e) { var t = e.distanceToEdge,
                        n = e.thresholds,
                        r = e.dragStartTime,
                        i = e.shouldUseTimeDampening,
                        a = function(e, t) { if (e > t.startScrollingFrom) return 0; if (e <= t.maxScrollValueAt) return yn; if (e === t.startScrollingFrom) return 1; var n = Dn({ startOfRange: t.maxScrollValueAt, endOfRange: t.startScrollingFrom, current: e }),
                                r = yn * xn(1 - n); return Math.ceil(r) }(t, n); return 0 === a ? 0 : i ? Math.max(function(e, t) { var n = t,
                            r = Cn,
                            i = Date.now() - n; if (i >= Cn) return e; if (i < En) return 1; var a = Dn({ startOfRange: En, endOfRange: r, current: i }),
                            o = e * xn(a); return Math.ceil(o) }(a, r), 1) : a },
                wn = function(e) { var t = e.container,
                        n = e.distanceToEdges,
                        r = e.dragStartTime,
                        i = e.axis,
                        a = e.shouldUseTimeDampening,
                        o = function(e, t) { return { startScrollingFrom: e[t.size] * mn, maxScrollValueAt: e[t.size] * hn } }(t, i); return n[i.end] < n[i.start] ? On({ distanceToEdge: n[i.end], thresholds: o, dragStartTime: r, shouldUseTimeDampening: a }) : -1 * On({ distanceToEdge: n[i.start], thresholds: o, dragStartTime: r, shouldUseTimeDampening: a }) },
                An = Q((function(e) { return 0 === e ? 0 : e })),
                Nn = function(e) { var t = e.dragStartTime,
                        n = e.container,
                        r = e.subject,
                        i = e.center,
                        a = e.shouldUseTimeDampening,
                        o = { top: i.y - n.top, right: n.right - i.x, bottom: n.bottom - i.y, left: i.x - n.left },
                        l = wn({ container: n, distanceToEdges: o, dragStartTime: t, axis: Ee, shouldUseTimeDampening: a }),
                        c = wn({ container: n, distanceToEdges: o, dragStartTime: t, axis: Ce, shouldUseTimeDampening: a }),
                        u = An({ x: c, y: l }); if (Y(u, V)) return null; var s = function(e) { var t = e.container,
                            n = e.subject,
                            r = e.proposedScroll,
                            i = n.height > t.height,
                            a = n.width > t.width; return a || i ? a && i ? null : { x: a ? 0 : r.x, y: i ? 0 : r.y } : r }({ container: n, subject: r, proposedScroll: u }); return s ? Y(s, V) ? null : s : null },
                Sn = Q((function(e) { return 0 === e ? 0 : e > 0 ? 1 : -1 })),
                Rn = function() { var e = function(e, t) { return e < 0 ? e : e > t ? e - t : 0 }; return function(t) { var n = t.current,
                            r = t.max,
                            i = t.change,
                            a = q(n, i),
                            o = { x: e(a.x, r.x), y: e(a.y, r.y) }; return Y(o, V) ? null : o } }(),
                Bn = function(e) { var t = e.max,
                        n = e.current,
                        r = e.change,
                        i = { x: Math.max(n.x, t.x), y: Math.max(n.y, t.y) },
                        a = Sn(r),
                        o = Rn({ max: i, current: n, change: a }); return !o || (0 !== a.x && 0 === o.x || 0 !== a.y && 0 === o.y) },
                Pn = function(e, t) { return Bn({ current: e.scroll.current, max: e.scroll.max, change: t }) },
                Tn = function(e, t) { var n = e.frame; return !!n && Bn({ current: n.scroll.current, max: n.scroll.max, change: t }) },
                Ln = function(e) { var t = e.state,
                        n = e.dragStartTime,
                        r = e.shouldUseTimeDampening,
                        i = e.scrollWindow,
                        a = e.scrollDroppable,
                        o = t.current.page.borderBoxCenter,
                        l = t.dimensions.draggables[t.critical.draggable.id].page.marginBox; if (t.isWindowScrollAllowed) { var c = function(e) { var t = e.viewport,
                                n = e.subject,
                                r = e.center,
                                i = e.dragStartTime,
                                a = e.shouldUseTimeDampening,
                                o = Nn({ dragStartTime: i, container: t.frame, subject: n, center: r, shouldUseTimeDampening: a }); return o && Pn(t, o) ? o : null }({ dragStartTime: n, viewport: t.viewport, subject: l, center: o, shouldUseTimeDampening: r }); if (c) return void i(c) } var u = bn({ center: o, destination: Ze(t.impact), droppables: t.dimensions.droppables }); if (u) { var s = function(e) { var t = e.droppable,
                                n = e.subject,
                                r = e.center,
                                i = e.dragStartTime,
                                a = e.shouldUseTimeDampening,
                                o = t.frame; if (!o) return null; var l = Nn({ dragStartTime: i, container: o.pageMarginBox, subject: n, center: r, shouldUseTimeDampening: a }); return l && Tn(t, l) ? l : null }({ dragStartTime: n, droppable: u, subject: l, center: o, shouldUseTimeDampening: r });
                        s && a(u.descriptor.id, s) } },
                Gn = function(e) { var t = e.move,
                        n = e.scrollDroppable,
                        r = e.scrollWindow,
                        i = function(e, t) { if (!Tn(e, t)) return t; var r = function(e, t) { var n = e.frame; return n && Tn(e, t) ? Rn({ current: n.scroll.current, max: n.scroll.max, change: t }) : null }(e, t); if (!r) return n(e.descriptor.id, t), null; var i = z(t, r); return n(e.descriptor.id, i), z(t, i) },
                        a = function(e, t, n) { if (!e) return n; if (!Pn(t, n)) return n; var i = function(e, t) { if (!Pn(e, t)) return null; var n = e.scroll.max,
                                    r = e.scroll.current; return Rn({ current: r, max: n, change: t }) }(t, n); if (!i) return r(n), null; var a = z(n, i); return r(a), z(n, a) }; return function(e) { var n = e.scrollJumpRequest; if (n) { var r = Ze(e.impact);
                            r || L(!1); var o = i(e.dimensions.droppables[r], n); if (o) { var l = e.viewport,
                                    c = a(e.isWindowScrollAllowed, l, o);
                                c && function(e, n) { var r = q(e.current.client.selection, n);
                                    t({ client: r }) }(e, c) } } } },
                Mn = function(e) { var t = e.scrollDroppable,
                        n = e.scrollWindow,
                        r = e.move,
                        i = function(e) { var t = e.scrollWindow,
                                n = e.scrollDroppable,
                                r = w(t),
                                i = w(n),
                                a = null,
                                o = function(e) { a || L(!1); var t = a,
                                        n = t.shouldUseTimeDampening,
                                        o = t.dragStartTime;
                                    Ln({ state: e, scrollWindow: r, scrollDroppable: i, dragStartTime: o, shouldUseTimeDampening: n }) }; return { start: function(e) { gt(), a && L(!1); var t = Date.now(),
                                        n = !1,
                                        r = function() { n = !0 };
                                    Ln({ state: e, dragStartTime: 0, shouldUseTimeDampening: !1, scrollWindow: r, scrollDroppable: r }), a = { dragStartTime: t, shouldUseTimeDampening: n }, vt(), n && o(e) }, stop: function() { a && (r.cancel(), i.cancel(), a = null) }, scroll: o } }({ scrollWindow: n, scrollDroppable: t }),
                        a = Gn({ move: r, scrollWindow: n, scrollDroppable: t }); return { scroll: function(e) { "DRAGGING" === e.phase && ("FLUID" !== e.movementMode ? e.scrollJumpRequest && a(e) : i.scroll(e)) }, start: i.start, stop: i.stop } },
                jn = function() { var e = "data-rbd-drag-handle"; return { base: e, draggableId: e + "-draggable-id", contextId: e + "-context-id" } }(),
                _n = function() { var e = "data-rbd-draggable"; return { base: e, contextId: e + "-context-id", id: e + "-id" } }(),
                Fn = function() { var e = "data-rbd-droppable"; return { base: e, contextId: e + "-context-id", id: e + "-id" } }(),
                kn = { contextId: "data-rbd-scroll-container-context-id" },
                Wn = function(e, t) { return e.map((function(e) { var n = e.styles[t]; return n ? e.selector + " { " + n + " }" : "" })).join(" ") },
                Un = "undefined" !== typeof window && "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement ? r.useLayoutEffect : r.useEffect,
                Hn = function() { var e = document.querySelector("head"); return e || L(!1), e },
                Vn = function(e) { var t = document.createElement("style"); return e && t.setAttribute("nonce", e), t.type = "text/css", t };

            function qn(e, t) { var n = s((function() { return function(e) { var t, n = (t = e, function(e) { return "[" + e + '="' + t + '"]' }),
                                r = function() { var e = "\n      cursor: -webkit-grab;\n      cursor: grab;\n    "; return { selector: n(jn.contextId), styles: { always: "\n          -webkit-touch-callout: none;\n          -webkit-tap-highlight-color: rgba(0,0,0,0);\n          touch-action: manipulation;\n        ", resting: e, dragging: "pointer-events: none;", dropAnimating: e } } }(),
                                i = [function() { var e = "\n      transition: " + Ft.outOfTheWay + ";\n    "; return { selector: n(_n.contextId), styles: { dragging: e, dropAnimating: e, userCancel: e } } }(), r, { selector: n(Fn.contextId), styles: { always: "overflow-anchor: none;" } }, { selector: "body", styles: { dragging: "\n        cursor: grabbing;\n        cursor: -webkit-grabbing;\n        user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        overflow-anchor: none;\n      " } }]; return { always: Wn(i, "always"), resting: Wn(i, "resting"), dragging: Wn(i, "dragging"), dropAnimating: Wn(i, "dropAnimating"), userCancel: Wn(i, "userCancel") } }(e) }), [e]),
                    i = Object(r.useRef)(null),
                    a = Object(r.useRef)(null),
                    o = d(O((function(e) { var t = a.current;
                        t || L(!1), t.textContent = e })), []),
                    l = d((function(e) { var t = i.current;
                        t || L(!1), t.textContent = e }), []);
                Un((function() {
                    (i.current || a.current) && L(!1); var r = Vn(t),
                        c = Vn(t); return i.current = r, a.current = c, r.setAttribute("data-rbd-always", e), c.setAttribute("data-rbd-dynamic", e), Hn().appendChild(r), Hn().appendChild(c), l(n.always), o(n.resting),
                        function() { var e = function(e) { var t = e.current;
                                t || L(!1), Hn().removeChild(t), e.current = null };
                            e(i), e(a) } }), [t, l, o, n.always, n.resting, e]); var c = d((function() { return o(n.dragging) }), [o, n.dragging]),
                    u = d((function(e) { o("DROP" !== e ? n.userCancel : n.dropAnimating) }), [o, n.dropAnimating, n.userCancel]),
                    p = d((function() { a.current && o(n.resting) }), [o, n.resting]); return s((function() { return { dragging: c, dropping: u, resting: p } }), [c, u, p]) } var zn = function(e) { return e && e.ownerDocument ? e.ownerDocument.defaultView : window };

            function Yn(e) { return e instanceof zn(e).HTMLElement }

            function Jn(e, t) { var n = "[" + jn.contextId + '="' + e + '"]',
                    r = le(document.querySelectorAll(n)); if (!r.length) return null; var i = oe(r, (function(e) { return e.getAttribute(jn.draggableId) === t })); return i && Yn(i) ? i : null }

            function Xn() { var e = { draggables: {}, droppables: {} },
                    t = [];

                function n(e) { t.length && t.forEach((function(t) { return t(e) })) }

                function r(t) { return e.draggables[t] || null }

                function i(t) { return e.droppables[t] || null } return { draggable: { register: function(t) { e.draggables[t.descriptor.id] = t, n({ type: "ADDITION", value: t }) }, update: function(t, n) { var r = e.draggables[n.descriptor.id];
                            r && r.uniqueId === t.uniqueId && (delete e.draggables[n.descriptor.id], e.draggables[t.descriptor.id] = t) }, unregister: function(t) { var i = t.descriptor.id,
                                a = r(i);
                            a && t.uniqueId === a.uniqueId && (delete e.draggables[i], n({ type: "REMOVAL", value: t })) }, getById: function(e) { var t = r(e); return t || L(!1), t }, findById: r, exists: function(e) { return Boolean(r(e)) }, getAllByType: function(t) { return ie(e.draggables).filter((function(e) { return e.descriptor.type === t })) } }, droppable: { register: function(t) { e.droppables[t.descriptor.id] = t }, unregister: function(t) { var n = i(t.descriptor.id);
                            n && t.uniqueId === n.uniqueId && delete e.droppables[t.descriptor.id] }, getById: function(e) { var t = i(e); return t || L(!1), t }, findById: i, exists: function(e) { return Boolean(i(e)) }, getAllByType: function(t) { return ie(e.droppables).filter((function(e) { return e.descriptor.type === t })) } }, subscribe: function(e) { return t.push(e),
                            function() { var n = t.indexOf(e); - 1 !== n && t.splice(n, 1) } }, clean: function() { e.draggables = {}, e.droppables = {}, t.length = 0 } } } var Kn = i.a.createContext(null),
                $n = function() { var e = document.body; return e || L(!1), e },
                Qn = { position: "absolute", width: "1px", height: "1px", margin: "-1px", border: "0", padding: "0", overflow: "hidden", clip: "rect(0 0 0 0)", "clip-path": "inset(100%)" }; var Zn = 0,
                er = { separator: "::" };

            function tr(e, t) { return void 0 === t && (t = er), s((function() { return "" + e + t.separator + Zn++ }), [t.separator, e]) } var nr = i.a.createContext(null);

            function rr(e) { 0 }

            function ir(e, t) { rr() }

            function ar() { ir() }

            function or(e) { var t = Object(r.useRef)(e); return Object(r.useEffect)((function() { t.current = e })), t } var lr, cr = ((lr = {})[13] = !0, lr[9] = !0, lr),
                ur = function(e) { cr[e.keyCode] && e.preventDefault() },
                sr = function() { var e = "visibilitychange"; return "undefined" === typeof document ? e : oe([e, "ms" + e, "webkit" + e, "moz" + e, "o" + e], (function(e) { return "on" + e in document })) || e }(); var dr, pr = { type: "IDLE" };

            function fr(e) { var t = e.cancel,
                    n = e.completed,
                    r = e.getPhase,
                    i = e.setPhase; return [{ eventName: "mousemove", fn: function(e) { var t = e.button,
                            n = e.clientX,
                            a = e.clientY; if (0 === t) { var o = { x: n, y: a },
                                l = r(); if ("DRAGGING" === l.type) return e.preventDefault(), void l.actions.move(o); "PENDING" !== l.type && L(!1); var c = l.point; if (u = c, s = o, Math.abs(s.x - u.x) >= 5 || Math.abs(s.y - u.y) >= 5) { var u, s;
                                e.preventDefault(); var d = l.actions.fluidLift(o);
                                i({ type: "DRAGGING", actions: d }) } } } }, { eventName: "mouseup", fn: function(e) { var i = r(); "DRAGGING" === i.type ? (e.preventDefault(), i.actions.drop({ shouldBlockNextClick: !0 }), n()) : t() } }, { eventName: "mousedown", fn: function(e) { "DRAGGING" === r().type && e.preventDefault(), t() } }, { eventName: "keydown", fn: function(e) { if ("PENDING" !== r().type) return 27 === e.keyCode ? (e.preventDefault(), void t()) : void ur(e);
                        t() } }, { eventName: "resize", fn: t }, { eventName: "scroll", options: { passive: !0, capture: !1 }, fn: function() { "PENDING" === r().type && t() } }, { eventName: "webkitmouseforcedown", fn: function(e) { var n = r(); "IDLE" === n.type && L(!1), n.actions.shouldRespectForcePress() ? t() : e.preventDefault() } }, { eventName: sr, fn: t }] }

            function gr() {} var vr = ((dr = {})[34] = !0, dr[33] = !0, dr[36] = !0, dr[35] = !0, dr);

            function br(e, t) {
                function n() { t(), e.cancel() } return [{ eventName: "keydown", fn: function(r) { return 27 === r.keyCode ? (r.preventDefault(), void n()) : 32 === r.keyCode ? (r.preventDefault(), t(), void e.drop()) : 40 === r.keyCode ? (r.preventDefault(), void e.moveDown()) : 38 === r.keyCode ? (r.preventDefault(), void e.moveUp()) : 39 === r.keyCode ? (r.preventDefault(), void e.moveRight()) : 37 === r.keyCode ? (r.preventDefault(), void e.moveLeft()) : void(vr[r.keyCode] ? r.preventDefault() : ur(r)) } }, { eventName: "mousedown", fn: n }, { eventName: "mouseup", fn: n }, { eventName: "click", fn: n }, { eventName: "touchstart", fn: n }, { eventName: "resize", fn: n }, { eventName: "wheel", fn: n, options: { passive: !0 } }, { eventName: sr, fn: n }] } var mr = { type: "IDLE" }; var hr = { input: !0, button: !0, textarea: !0, select: !0, option: !0, optgroup: !0, video: !0, audio: !0 };

            function yr(e, t) { if (null == t) return !1; if (Boolean(hr[t.tagName.toLowerCase()])) return !0; var n = t.getAttribute("contenteditable"); return "true" === n || "" === n || t !== e && yr(e, t.parentElement) }

            function xr(e, t) { var n = t.target; return !!Yn(n) && yr(e, n) } var Ir = function(e) { return f(e.getBoundingClientRect()).center }; var Dr = function() { var e = "matches"; return "undefined" === typeof document ? e : oe([e, "msMatchesSelector", "webkitMatchesSelector"], (function(e) { return e in Element.prototype })) || e }();

            function Er(e, t) { return null == e ? null : e[Dr](t) ? e : Er(e.parentElement, t) }

            function Cr(e, t) { return e.closest ? e.closest(t) : Er(e, t) }

            function Or(e, t) { var n, r = t.target; if (!((n = r) instanceof zn(n).Element)) return null; var i = function(e) { return "[" + jn.contextId + '="' + e + '"]' }(e),
                    a = Cr(r, i); return a && Yn(a) ? a : null }

            function wr(e) { e.preventDefault() }

            function Ar(e) { var t = e.expected,
                    n = e.phase,
                    r = e.isLockActive;
                e.shouldWarn; return !!r() && t === n }

            function Nr(e) { var t = e.lockAPI,
                    n = e.store,
                    r = e.registry,
                    i = e.draggableId; if (t.isClaimed()) return !1; var a = r.draggable.findById(i); return !!a && (!!a.options.isEnabled && !!fn(n.getState(), i)) }

            function Sr(e) { var t = e.lockAPI,
                    n = e.contextId,
                    r = e.store,
                    i = e.registry,
                    a = e.draggableId,
                    l = e.forceSensorStop,
                    c = e.sourceEvent; if (!Nr({ lockAPI: t, store: r, registry: i, draggableId: a })) return null; var u = i.draggable.getById(a),
                    s = function(e, t) { var n = "[" + _n.contextId + '="' + e + '"]',
                            r = oe(le(document.querySelectorAll(n)), (function(e) { return e.getAttribute(_n.id) === t })); return r && Yn(r) ? r : null }(n, u.descriptor.id); if (!s) return null; if (c && !u.options.canDragInteractiveElements && xr(s, c)) return null; var d = t.claim(l || R),
                    p = "PRE_DRAG";

                function f() { return u.options.shouldRespectForcePress }

                function g() { return t.isActive(d) } var v = function(e, t) { Ar({ expected: e, phase: p, isLockActive: g, shouldWarn: !0 }) && r.dispatch(t()) }.bind(null, "DRAGGING");

                function b(e) {
                    function n() { t.release(), p = "COMPLETED" }

                    function i(t, i) { if (void 0 === i && (i = { shouldBlockNextClick: !1 }), e.cleanup(), i.shouldBlockNextClick) { var a = B(window, [{ eventName: "click", fn: wr, options: { once: !0, passive: !1, capture: !0 } }]);
                            setTimeout(a) }
                        n(), r.dispatch(Tt({ reason: t })) } return "PRE_DRAG" !== p && (n(), "PRE_DRAG" !== p && L(!1)), r.dispatch(function(e) { return { type: "LIFT", payload: e } }(e.liftActionArgs)), p = "DRAGGING", Object(o.a)({ isActive: function() { return Ar({ expected: "DRAGGING", phase: p, isLockActive: g, shouldWarn: !1 }) }, shouldRespectForcePress: f, drop: function(e) { return i("DROP", e) }, cancel: function(e) { return i("CANCEL", e) } }, e.actions) } return { isActive: function() { return Ar({ expected: "PRE_DRAG", phase: p, isLockActive: g, shouldWarn: !1 }) }, shouldRespectForcePress: f, fluidLift: function(e) { var t = w((function(e) { v((function() { return At({ client: e }) })) })),
                            n = b({ liftActionArgs: { id: a, clientSelection: e, movementMode: "FLUID" }, cleanup: function() { return t.cancel() }, actions: { move: t } }); return Object(o.a)({}, n, { move: t }) }, snapLift: function() { var e = { moveUp: function() { return v(Nt) }, moveRight: function() { return v(Rt) }, moveDown: function() { return v(St) }, moveLeft: function() { return v(Bt) } }; return b({ liftActionArgs: { id: a, clientSelection: Ir(s), movementMode: "SNAP" }, cleanup: R, actions: e }) }, abort: function() { Ar({ expected: "PRE_DRAG", phase: p, isLockActive: g, shouldWarn: !0 }) && t.release() } } } var Rr = [function(e) { var t = Object(r.useRef)(pr),
                    n = Object(r.useRef)(R),
                    i = s((function() { return { eventName: "mousedown", fn: function(t) { if (!t.defaultPrevented && 0 === t.button && !(t.ctrlKey || t.metaKey || t.shiftKey || t.altKey)) { var r = e.findClosestDraggableId(t); if (r) { var i = e.tryGetLock(r, l, { sourceEvent: t }); if (i) { t.preventDefault(); var a = { x: t.clientX, y: t.clientY };
                                            n.current(), p(i, a) } } } } } }), [e]),
                    a = s((function() { return { eventName: "webkitmouseforcewillbegin", fn: function(t) { if (!t.defaultPrevented) { var n = e.findClosestDraggableId(t); if (n) { var r = e.findOptionsForDraggable(n);
                                        r && (r.shouldRespectForcePress || e.canGetLock(n) && t.preventDefault()) } } } } }), [e]),
                    o = d((function() { n.current = B(window, [a, i], { passive: !1, capture: !0 }) }), [a, i]),
                    l = d((function() { "IDLE" !== t.current.type && (t.current = pr, n.current(), o()) }), [o]),
                    c = d((function() { var e = t.current;
                        l(), "DRAGGING" === e.type && e.actions.cancel({ shouldBlockNextClick: !0 }), "PENDING" === e.type && e.actions.abort() }), [l]),
                    u = d((function() { var e = fr({ cancel: c, completed: l, getPhase: function() { return t.current }, setPhase: function(e) { t.current = e } });
                        n.current = B(window, e, { capture: !0, passive: !1 }) }), [c, l]),
                    p = d((function(e, n) { "IDLE" !== t.current.type && L(!1), t.current = { type: "PENDING", point: n, actions: e }, u() }), [u]);
                Un((function() { return o(),
                        function() { n.current() } }), [o]) }, function(e) { var t = Object(r.useRef)(gr),
                    n = s((function() { return { eventName: "keydown", fn: function(n) { if (!n.defaultPrevented && 32 === n.keyCode) { var r = e.findClosestDraggableId(n); if (r) { var a = e.tryGetLock(r, c, { sourceEvent: n }); if (a) { n.preventDefault(); var o = !0,
                                                l = a.snapLift();
                                            t.current(), t.current = B(window, br(l, c), { capture: !0, passive: !1 }) } } }

                                function c() { o || L(!1), o = !1, t.current(), i() } } } }), [e]),
                    i = d((function() { t.current = B(window, [n], { passive: !1, capture: !0 }) }), [n]);
                Un((function() { return i(),
                        function() { t.current() } }), [i]) }, function(e) { var t = Object(r.useRef)(mr),
                    n = Object(r.useRef)(R),
                    i = d((function() { return t.current }), []),
                    a = d((function(e) { t.current = e }), []),
                    o = s((function() { return { eventName: "touchstart", fn: function(t) { if (!t.defaultPrevented) { var r = e.findClosestDraggableId(t); if (r) { var i = e.tryGetLock(r, c, { sourceEvent: t }); if (i) { var a = t.touches[0],
                                                o = { x: a.clientX, y: a.clientY };
                                            n.current(), g(i, o) } } } } } }), [e]),
                    l = d((function() { n.current = B(window, [o], { capture: !0, passive: !1 }) }), [o]),
                    c = d((function() { var e = t.current; "IDLE" !== e.type && ("PENDING" === e.type && clearTimeout(e.longPressTimerId), a(mr), n.current(), l()) }), [l, a]),
                    u = d((function() { var e = t.current;
                        c(), "DRAGGING" === e.type && e.actions.cancel({ shouldBlockNextClick: !0 }), "PENDING" === e.type && e.actions.abort() }), [c]),
                    p = d((function() { var e = { capture: !0, passive: !1 },
                            t = { cancel: u, completed: c, getPhase: i },
                            r = B(window, function(e) { var t = e.cancel,
                                    n = e.completed,
                                    r = e.getPhase; return [{ eventName: "touchmove", options: { capture: !1 }, fn: function(e) { var n = r(); if ("DRAGGING" === n.type) { n.hasMoved = !0; var i = e.touches[0],
                                                a = { x: i.clientX, y: i.clientY };
                                            e.preventDefault(), n.actions.move(a) } else t() } }, { eventName: "touchend", fn: function(e) { var i = r(); "DRAGGING" === i.type ? (e.preventDefault(), i.actions.drop({ shouldBlockNextClick: !0 }), n()) : t() } }, { eventName: "touchcancel", fn: function(e) { "DRAGGING" === r().type ? (e.preventDefault(), t()) : t() } }, { eventName: "touchforcechange", fn: function(e) { var n = r(); "IDLE" === n.type && L(!1); var i = e.touches[0]; if (i && i.force >= .15) { var a = n.actions.shouldRespectForcePress(); if ("PENDING" !== n.type) return a ? n.hasMoved ? void e.preventDefault() : void t() : void e.preventDefault();
                                            a && t() } } }, { eventName: sr, fn: t }] }(t), e),
                            a = B(window, function(e) { var t = e.cancel,
                                    n = e.getPhase; return [{ eventName: "orientationchange", fn: t }, { eventName: "resize", fn: t }, { eventName: "contextmenu", fn: function(e) { e.preventDefault() } }, { eventName: "keydown", fn: function(e) { "DRAGGING" === n().type ? (27 === e.keyCode && e.preventDefault(), t()) : t() } }, { eventName: sr, fn: t }] }(t), e);
                        n.current = function() { r(), a() } }), [u, i, c]),
                    f = d((function() { var e = i(); "PENDING" !== e.type && L(!1); var t = e.actions.fluidLift(e.point);
                        a({ type: "DRAGGING", actions: t, hasMoved: !1 }) }), [i, a]),
                    g = d((function(e, t) { "IDLE" !== i().type && L(!1); var n = setTimeout(f, 120);
                        a({ type: "PENDING", point: t, actions: e, longPressTimerId: n }), p() }), [p, i, a, f]);
                Un((function() { return l(),
                        function() { n.current(); var e = i(); "PENDING" === e.type && (clearTimeout(e.longPressTimerId), a(mr)) } }), [i, l, a]), Un((function() { return B(window, [{ eventName: "touchmove", fn: function() {}, options: { capture: !1, passive: !1 } }]) }), []) }];

            function Br(e) { var t = e.contextId,
                    n = e.store,
                    i = e.registry,
                    a = e.customSensors,
                    o = e.enableDefaultSensors,
                    l = [].concat(o ? Rr : [], a || []),
                    c = Object(r.useState)((function() { return function() { var e = null;

                            function t() { e || L(!1), e = null } return { isClaimed: function() { return Boolean(e) }, isActive: function(t) { return t === e }, claim: function(t) { e && L(!1); var n = { abandon: t }; return e = n, n }, release: t, tryAbandon: function() { e && (e.abandon(), t()) } } }() }))[0],
                    u = d((function(e, t) { e.isDragging && !t.isDragging && c.tryAbandon() }), [c]);
                Un((function() { var e = n.getState(); return n.subscribe((function() { var t = n.getState();
                        u(e, t), e = t })) }), [c, n, u]), Un((function() { return c.tryAbandon }), [c.tryAbandon]); var p = d((function(e) { return Nr({ lockAPI: c, registry: i, store: n, draggableId: e }) }), [c, i, n]),
                    f = d((function(e, r, a) { return Sr({ lockAPI: c, registry: i, contextId: t, store: n, draggableId: e, forceSensorStop: r, sourceEvent: a && a.sourceEvent ? a.sourceEvent : null }) }), [t, c, i, n]),
                    g = d((function(e) { return function(e, t) { var n = Or(e, t); return n ? n.getAttribute(jn.draggableId) : null }(t, e) }), [t]),
                    v = d((function(e) { var t = i.draggable.findById(e); return t ? t.options : null }), [i.draggable]),
                    b = d((function() { c.isClaimed() && (c.tryAbandon(), "IDLE" !== n.getState().phase && n.dispatch({ type: "FLUSH", payload: null })) }), [c, n]),
                    m = d(c.isClaimed, [c]),
                    h = s((function() { return { canGetLock: p, tryGetLock: f, findClosestDraggableId: g, findOptionsForDraggable: v, tryReleaseLock: b, isLockClaimed: m } }), [p, f, g, v, b, m]);
                rr(); for (var y = 0; y < l.length; y++) l[y](h) }

            function Pr(e) { return e.current || L(!1), e.current }

            function Tr(e) { var t = e.contextId,
                    n = e.setCallbacks,
                    a = e.sensors,
                    u = e.nonce,
                    p = e.dragHandleUsageInstructions,
                    f = Object(r.useRef)(null);
                ar(); var g = or(e),
                    v = d((function() { return function(e) { return { onBeforeCapture: e.onBeforeCapture, onBeforeDragStart: e.onBeforeDragStart, onDragStart: e.onDragStart, onDragEnd: e.onDragEnd, onDragUpdate: e.onDragUpdate } }(g.current) }), [g]),
                    b = function(e) { var t = s((function() { return function(e) { return "rbd-announcement-" + e }(e) }), [e]),
                            n = Object(r.useRef)(null); return Object(r.useEffect)((function() { var e = document.createElement("div"); return n.current = e, e.id = t, e.setAttribute("aria-live", "assertive"), e.setAttribute("aria-atomic", "true"), Object(o.a)(e.style, Qn), $n().appendChild(e),
                                function() { setTimeout((function() { var t = $n();
                                        t.contains(e) && t.removeChild(e), e === n.current && (n.current = null) })) } }), [t]), d((function(e) { var t = n.current;
                            t && (t.textContent = e) }), []) }(t),
                    m = function(e) { var t = e.contextId,
                            n = e.text,
                            i = tr("hidden-text", { separator: "-" }),
                            a = s((function() { return "rbd-hidden-text-" + (e = { contextId: t, uniqueId: i }).contextId + "-" + e.uniqueId; var e }), [i, t]); return Object(r.useEffect)((function() { var e = document.createElement("div"); return e.id = a, e.textContent = n, e.style.display = "none", $n().appendChild(e),
                                function() { var t = $n();
                                    t.contains(e) && t.removeChild(e) } }), [a, n]), a }({ contextId: t, text: p }),
                    h = qn(t, u),
                    y = d((function(e) { Pr(f).dispatch(e) }), []),
                    x = s((function() { return Object(l.b)({ publishWhileDragging: Dt, updateDroppableScroll: Ct, updateDroppableIsEnabled: Ot, updateDroppableIsCombineEnabled: wt, collectionStarting: Et }, y) }), [y]),
                    I = function() { var e = s(Xn, []); return Object(r.useEffect)((function() { return function() { requestAnimationFrame(e.clean) } }), [e]), e }(),
                    D = s((function() { return pn(I, x) }), [I, x]),
                    E = s((function() { return Mn(Object(o.a)({ scrollWindow: gn, scrollDroppable: D.scrollDroppable }, Object(l.b)({ move: At }, y))) }), [D.scrollDroppable, y]),
                    C = function(e) { var t = Object(r.useRef)({}),
                            n = Object(r.useRef)(null),
                            i = Object(r.useRef)(null),
                            a = Object(r.useRef)(!1),
                            o = d((function(e, n) { var r = { id: e, focus: n }; return t.current[e] = r,
                                    function() { var n = t.current;
                                        n[e] !== r && delete n[e] } }), []),
                            l = d((function(t) { var n = Jn(e, t);
                                n && n !== document.activeElement && n.focus() }), [e]),
                            c = d((function(e, t) { n.current === e && (n.current = t) }), []),
                            u = d((function() { i.current || a.current && (i.current = requestAnimationFrame((function() { i.current = null; var e = n.current;
                                    e && l(e) }))) }), [l]),
                            p = d((function(e) { n.current = null; var t = document.activeElement;
                                t && t.getAttribute(jn.draggableId) === e && (n.current = e) }), []); return Un((function() { return a.current = !0,
                                function() { a.current = !1; var e = i.current;
                                    e && cancelAnimationFrame(e) } }), []), s((function() { return { register: o, tryRecordFocus: p, tryRestoreFocusRecorded: u, tryShiftRecord: c } }), [o, p, u, c]) }(t),
                    O = s((function() { return on({ announce: b, autoScroller: E, dimensionMarshal: D, focusMarshal: C, getResponders: v, styleMarshal: h }) }), [b, E, D, C, v, h]);
                f.current = O; var w = d((function() { var e = Pr(f); "IDLE" !== e.getState().phase && e.dispatch({ type: "FLUSH", payload: null }) }), []),
                    A = d((function() { var e = Pr(f).getState(); return e.isDragging || "DROP_ANIMATING" === e.phase }), []);
                n(s((function() { return { isDragging: A, tryAbort: w } }), [A, w])); var N = d((function(e) { return fn(Pr(f).getState(), e) }), []),
                    S = d((function() { return tt(Pr(f).getState()) }), []),
                    R = s((function() { return { marshal: D, focus: C, contextId: t, canLift: N, isMovementAllowed: S, dragHandleUsageInstructionsId: m, registry: I } }), [t, D, m, C, N, S, I]); return Br({ contextId: t, store: O, registry: I, customSensors: a, enableDefaultSensors: !1 !== e.enableDefaultSensors }), Object(r.useEffect)((function() { return w }), [w]), i.a.createElement(nr.Provider, { value: R }, i.a.createElement(c.a, { context: Kn, store: O }, e.children)) } var Lr = 0;

            function Gr(e) { var t = s((function() { return "" + Lr++ }), []),
                    n = e.dragHandleUsageInstructions || k; return i.a.createElement(G, null, (function(r) { return i.a.createElement(Tr, { nonce: e.nonce, contextId: t, setCallbacks: r, dragHandleUsageInstructions: n, enableDefaultSensors: e.enableDefaultSensors, sensors: e.sensors, onBeforeCapture: e.onBeforeCapture, onBeforeDragStart: e.onBeforeDragStart, onDragStart: e.onDragStart, onDragUpdate: e.onDragUpdate, onDragEnd: e.onDragEnd }, e.children) })) } var Mr = function(e) { return function(t) { return e === t } },
                jr = Mr("scroll"),
                _r = Mr("auto"),
                Fr = (Mr("visible"), function(e, t) { return t(e.overflowX) || t(e.overflowY) }),
                kr = function(e) { var t = window.getComputedStyle(e),
                        n = { overflowX: t.overflowX, overflowY: t.overflowY }; return Fr(n, jr) || Fr(n, _r) },
                Wr = function e(t) { return null == t || t === document.body || t === document.documentElement ? null : kr(t) ? t : e(t.parentElement) },
                Ur = function(e) { return { x: e.scrollLeft, y: e.scrollTop } },
                Hr = function e(t) { return !!t && ("fixed" === window.getComputedStyle(t).position || e(t.parentElement)) },
                Vr = function(e) { return { closestScrollable: Wr(e), isFixedOnPage: Hr(e) } },
                qr = function(e) { var t = e.ref,
                        n = e.descriptor,
                        r = e.env,
                        i = e.windowScroll,
                        a = e.direction,
                        o = e.isDropDisabled,
                        l = e.isCombineEnabled,
                        c = e.shouldClipSubject,
                        u = r.closestScrollable,
                        s = function(e, t) { var n = D(e); if (!t) return n; if (e !== t) return n; var r = n.paddingBox.top - t.scrollTop,
                                i = n.paddingBox.left - t.scrollLeft,
                                a = r + t.scrollHeight,
                                o = i + t.scrollWidth,
                                l = g({ top: r, right: o, bottom: a, left: i }, n.border); return m({ borderBox: l, margin: n.margin, border: n.border, padding: n.padding }) }(t, u),
                        d = x(s, i),
                        p = function() { if (!u) return null; var e = D(u),
                                t = { scrollHeight: u.scrollHeight, scrollWidth: u.scrollWidth }; return { client: e, page: x(e, i), scroll: Ur(u), scrollSize: t, shouldClipSubject: c } }(),
                        f = function(e) { var t = e.descriptor,
                                n = e.isEnabled,
                                r = e.isCombineEnabled,
                                i = e.isFixedOnPage,
                                a = e.direction,
                                o = e.client,
                                l = e.page,
                                c = e.closest,
                                u = function() { if (!c) return null; var e = c.scrollSize,
                                        t = c.client,
                                        n = ln({ scrollHeight: e.scrollHeight, scrollWidth: e.scrollWidth, height: t.paddingBox.height, width: t.paddingBox.width }); return { pageMarginBox: c.page.marginBox, frameClient: t, scrollSize: e, shouldClipSubject: c.shouldClipSubject, scroll: { initial: c.scroll, current: c.scroll, max: n, diff: { value: V, displacement: V } } } }(),
                                s = "vertical" === a ? Ee : Ce; return { descriptor: t, isCombineEnabled: r, isFixedOnPage: i, axis: s, isEnabled: n, client: o, page: l, frame: u, subject: ne({ page: l, withPlaceholder: null, axis: s, frame: u }) } }({ descriptor: n, isEnabled: !o, isCombineEnabled: l, isFixedOnPage: r.isFixedOnPage, direction: a, client: s, page: d, closest: p }); return f },
                zr = { passive: !1 },
                Yr = { passive: !0 },
                Jr = function(e) { return e.shouldPublishImmediately ? zr : Yr };

            function Xr(e) { var t = Object(r.useContext)(e); return t || L(!1), t } var Kr = function(e) { return e && e.env.closestScrollable || null };

            function $r() {} var Qr = { width: 0, height: 0, margin: { top: 0, right: 0, bottom: 0, left: 0 } },
                Zr = function(e) { var t = e.isAnimatingOpenOnMount,
                        n = e.placeholder,
                        r = e.animate,
                        i = function(e) { var t = e.isAnimatingOpenOnMount,
                                n = e.placeholder,
                                r = e.animate; return t || "close" === r ? Qr : { height: n.client.borderBox.height, width: n.client.borderBox.width, margin: n.client.margin } }({ isAnimatingOpenOnMount: t, placeholder: n, animate: r }); return { display: n.display, boxSizing: "border-box", width: i.width, height: i.height, marginTop: i.margin.top, marginRight: i.margin.right, marginBottom: i.margin.bottom, marginLeft: i.margin.left, flexShrink: "0", flexGrow: "0", pointerEvents: "none", transition: "none" !== r ? Ft.placeholder : null } }; var ei = i.a.memo((function(e) { var t = Object(r.useRef)(null),
                        n = d((function() { t.current && (clearTimeout(t.current), t.current = null) }), []),
                        a = e.animate,
                        o = e.onTransitionEnd,
                        l = e.onClose,
                        c = e.contextId,
                        u = Object(r.useState)("open" === e.animate),
                        s = u[0],
                        p = u[1];
                    Object(r.useEffect)((function() { return s ? "open" !== a ? (n(), p(!1), $r) : t.current ? $r : (t.current = setTimeout((function() { t.current = null, p(!1) })), n) : $r }), [a, s, n]); var f = d((function(e) { "height" === e.propertyName && (o(), "close" === a && l()) }), [a, l, o]),
                        g = Zr({ isAnimatingOpenOnMount: s, animate: e.animate, placeholder: e.placeholder }); return i.a.createElement(e.placeholder.tagName, { style: g, "data-rbd-placeholder-context-id": c, onTransitionEnd: f, ref: e.innerRef }) })),
                ti = i.a.createContext(null); var ni = function(e) {
                    function t() { for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i]; return (t = e.call.apply(e, [this].concat(r)) || this).state = { isVisible: Boolean(t.props.on), data: t.props.on, animate: t.props.shouldAnimate && t.props.on ? "open" : "none" }, t.onClose = function() { "close" === t.state.animate && t.setState({ isVisible: !1 }) }, t } return Object(a.a)(t, e), t.getDerivedStateFromProps = function(e, t) { return e.shouldAnimate ? e.on ? { isVisible: !0, data: e.on, animate: "open" } : t.isVisible ? { isVisible: !0, data: t.data, animate: "close" } : { isVisible: !1, animate: "close", data: null } : { isVisible: Boolean(e.on), data: e.on, animate: "none" } }, t.prototype.render = function() { if (!this.state.isVisible) return null; var e = { onClose: this.onClose, data: this.state.data, animate: this.state.animate }; return this.props.children(e) }, t }(i.a.PureComponent),
                ri = 5e3,
                ii = 4500,
                ai = function(e, t) { return t ? Ft.drop(t.duration) : e ? Ft.snap : Ft.fluid },
                oi = function(e, t) { return e ? t ? Mt.drop : Mt.combining : null };

            function li(e) { return "DRAGGING" === e.type ? function(e) { var t = e.dimension.client,
                        n = e.offset,
                        r = e.combineWith,
                        i = e.dropping,
                        a = Boolean(r),
                        o = function(e) { return null != e.forceShouldAnimate ? e.forceShouldAnimate : "SNAP" === e.mode }(e),
                        l = Boolean(i),
                        c = l ? Ut(n, a) : Wt(n); return { position: "fixed", top: t.marginBox.top, left: t.marginBox.left, boxSizing: "border-box", width: t.borderBox.width, height: t.borderBox.height, transition: ai(o, i), transform: c, opacity: oi(a, l), zIndex: l ? ii : ri, pointerEvents: "none" } }(e) : { transform: Wt((t = e).offset), transition: t.shouldAnimateDisplacement ? null : "none" }; var t }

            function ci(e) { var t = tr("draggable"),
                    n = e.descriptor,
                    i = e.registry,
                    a = e.getDraggableRef,
                    o = e.canDragInteractiveElements,
                    l = e.shouldRespectForcePress,
                    c = e.isEnabled,
                    u = s((function() { return { canDragInteractiveElements: o, shouldRespectForcePress: l, isEnabled: c } }), [o, c, l]),
                    p = d((function(e) { var t = a(); return t || L(!1),
                            function(e, t, n) { void 0 === n && (n = V); var r = window.getComputedStyle(t),
                                    i = t.getBoundingClientRect(),
                                    a = I(i, r),
                                    o = x(a, n); return { descriptor: e, placeholder: { client: a, tagName: t.tagName.toLowerCase(), display: r.display }, displaceBy: { x: a.marginBox.width, y: a.marginBox.height }, client: a, page: o } }(n, t, e) }), [n, a]),
                    f = s((function() { return { uniqueId: t, descriptor: n, options: u, getDimension: p } }), [n, p, u, t]),
                    g = Object(r.useRef)(f),
                    v = Object(r.useRef)(!0);
                Un((function() { return i.draggable.register(g.current),
                        function() { return i.draggable.unregister(g.current) } }), [i.draggable]), Un((function() { if (v.current) v.current = !1;
                    else { var e = g.current;
                        g.current = f, i.draggable.update(f, e) } }), [f, i.draggable]) }

            function ui(e, t, n) { ir() }

            function si(e) { e.preventDefault() } var di = function(e, t) { return e === t },
                pi = function(e) { var t = e.combine,
                        n = e.destination; return n ? n.droppableId : t ? t.droppableId : null };

            function fi(e) { return { isDragging: !1, isDropAnimating: !1, isClone: !1, dropAnimation: null, mode: null, draggingOver: null, combineTargetFor: e, combineWith: null } } var gi = { mapped: { type: "SECONDARY", offset: V, combineTargetFor: null, shouldAnimateDisplacement: !0, snapshot: fi(null) } }; var vi = { dropAnimationFinished: Lt },
                bi = Object(c.b)((function() { var e = function() { var e = O((function(e, t) { return { x: e, y: t } })),
                                t = O((function(e, t, n, r, i) { return { isDragging: !0, isClone: t, isDropAnimating: Boolean(i), dropAnimation: i, mode: e, draggingOver: n, combineWith: r, combineTargetFor: null } })),
                                n = O((function(e, n, r, i, a, o, l) { return { mapped: { type: "DRAGGING", dropping: null, draggingOver: a, combineWith: o, mode: n, offset: e, dimension: r, forceShouldAnimate: l, snapshot: t(n, i, a, o, null) } } })); return function(r, i) { if (r.isDragging) { if (r.critical.draggable.id !== i.draggableId) return null; var a = r.current.client.offset,
                                        o = r.dimensions.draggables[i.draggableId],
                                        l = Ze(r.impact),
                                        c = (s = r.impact).at && "COMBINE" === s.at.type ? s.at.combine.draggableId : null,
                                        u = r.forceShouldAnimate; return n(e(a.x, a.y), r.movementMode, o, i.isClone, l, c, u) } var s; if ("DROP_ANIMATING" === r.phase) { var d = r.completed; if (d.result.draggableId !== i.draggableId) return null; var p = i.isClone,
                                        f = r.dimensions.draggables[i.draggableId],
                                        g = d.result,
                                        v = g.mode,
                                        b = pi(g),
                                        m = function(e) { return e.combine ? e.combine.draggableId : null }(g),
                                        h = { duration: r.dropDuration, curve: Gt, moveTo: r.newHomeClientOffset, opacity: m ? Mt.drop : null, scale: m ? jt.drop : null }; return { mapped: { type: "DRAGGING", offset: r.newHomeClientOffset, dimension: f, dropping: h, draggingOver: b, combineWith: m, mode: v, forceShouldAnimate: null, snapshot: t(v, p, b, m, h) } } } return null } }(),
                        t = function() { var e = O((function(e, t) { return { x: e, y: t } })),
                                t = O(fi),
                                n = O((function(e, n, r) { return void 0 === n && (n = null), { mapped: { type: "SECONDARY", offset: e, combineTargetFor: n, shouldAnimateDisplacement: r, snapshot: t(n) } } })),
                                r = function(e) { return e ? n(V, e, !0) : null },
                                i = function(t, i, a, o) { var l = a.displaced.visible[t],
                                        c = Boolean(o.inVirtualList && o.effected[t]),
                                        u = ge(a),
                                        s = u && u.draggableId === t ? i : null; if (!l) { if (!c) return r(s); if (a.displaced.invisible[t]) return null; var d = J(o.displacedBy.point),
                                            p = e(d.x, d.y); return n(p, s, !0) } if (c) return r(s); var f = a.displacedBy.point,
                                        g = e(f.x, f.y); return n(g, s, l.shouldAnimate) }; return function(e, t) { if (e.isDragging) return e.critical.draggable.id === t.draggableId ? null : i(t.draggableId, e.critical.draggable.id, e.impact, e.afterCritical); if ("DROP_ANIMATING" === e.phase) { var n = e.completed; return n.result.draggableId === t.draggableId ? null : i(t.draggableId, n.result.draggableId, n.impact, n.afterCritical) } return null } }(); return function(n, r) { return e(n, r) || t(n, r) || gi } }), vi, null, { context: Kn, pure: !0, areStatePropsEqual: di })((function(e) { var t = Object(r.useRef)(null),
                        n = d((function(e) { t.current = e }), []),
                        i = d((function() { return t.current }), []),
                        a = Xr(nr),
                        o = a.contextId,
                        l = a.dragHandleUsageInstructionsId,
                        c = a.registry,
                        u = Xr(ti),
                        p = u.type,
                        f = u.droppableId,
                        g = s((function() { return { id: e.draggableId, index: e.index, type: p, droppableId: f } }), [e.draggableId, e.index, p, f]),
                        v = e.children,
                        b = e.draggableId,
                        m = e.isEnabled,
                        h = e.shouldRespectForcePress,
                        y = e.canDragInteractiveElements,
                        x = e.isClone,
                        I = e.mapped,
                        D = e.dropAnimationFinished;
                    ui(), rr(), x || ci(s((function() { return { descriptor: g, registry: c, getDraggableRef: i, canDragInteractiveElements: y, shouldRespectForcePress: h, isEnabled: m } }), [g, c, i, y, h, m])); var E = s((function() { return m ? { tabIndex: 0, role: "button", "aria-describedby": l, "data-rbd-drag-handle-draggable-id": b, "data-rbd-drag-handle-context-id": o, draggable: !1, onDragStart: si } : null }), [o, l, b, m]),
                        C = d((function(e) { "DRAGGING" === I.type && I.dropping && "transform" === e.propertyName && D() }), [D, I]),
                        O = s((function() { var e = li(I),
                                t = "DRAGGING" === I.type && I.dropping ? C : null; return { innerRef: n, draggableProps: { "data-rbd-draggable-context-id": o, "data-rbd-draggable-id": b, style: e, onTransitionEnd: t }, dragHandleProps: E } }), [o, E, b, I, C, n]),
                        w = s((function() { return { draggableId: g.id, type: g.type, source: { index: g.index, droppableId: g.droppableId } } }), [g.droppableId, g.id, g.index, g.type]); return v(O, I.snapshot, w) }));

            function mi(e) { return Xr(ti).isUsingCloneFor !== e.draggableId || e.isClone ? i.a.createElement(bi, e) : null }

            function hi(e) { var t = "boolean" !== typeof e.isDragDisabled || !e.isDragDisabled,
                    n = Boolean(e.disableInteractiveElementBlocking),
                    r = Boolean(e.shouldRespectForcePress); return i.a.createElement(mi, Object(o.a)({}, e, { isClone: !1, isEnabled: t, canDragInteractiveElements: n, shouldRespectForcePress: r })) } var yi = function(e, t) { return e === t.droppable.type },
                xi = function(e, t) { return t.draggables[e.draggable.id] },
                Ii = { updateViewportMaxScroll: function(e) { return { type: "UPDATE_VIEWPORT_MAX_SCROLL", payload: e } } }; var Di = { mode: "standard", type: "DEFAULT", direction: "vertical", isDropDisabled: !1, isCombineEnabled: !1, ignoreContainerClipping: !1, renderClone: null, getContainerForClone: function() { return document.body || L(!1), document.body } },
                Ei = Object(c.b)((function() { var e = { placeholder: null, shouldAnimatePlaceholder: !0, snapshot: { isDraggingOver: !1, draggingOverWith: null, draggingFromThisWith: null, isUsingPlaceholder: !1 }, useClone: null },
                        t = Object(o.a)({}, e, { shouldAnimatePlaceholder: !1 }),
                        n = O((function(e) { return { draggableId: e.id, type: e.type, source: { index: e.index, droppableId: e.droppableId } } })),
                        r = O((function(r, i, a, o, l, c) { var u = l.descriptor.id; if (l.descriptor.droppableId === r) { var s = c ? { render: c, dragging: n(l.descriptor) } : null,
                                    d = { isDraggingOver: a, draggingOverWith: a ? u : null, draggingFromThisWith: u, isUsingPlaceholder: !0 }; return { placeholder: l.placeholder, shouldAnimatePlaceholder: !1, snapshot: d, useClone: s } } if (!i) return t; if (!o) return e; var p = { isDraggingOver: a, draggingOverWith: u, draggingFromThisWith: null, isUsingPlaceholder: !0 }; return { placeholder: l.placeholder, shouldAnimatePlaceholder: !0, snapshot: p, useClone: null } })); return function(n, i) { var a = i.droppableId,
                            o = i.type,
                            l = !i.isDropDisabled,
                            c = i.renderClone; if (n.isDragging) { var u = n.critical; if (!yi(o, u)) return t; var s = xi(u, n.dimensions),
                                d = Ze(n.impact) === a; return r(a, l, d, d, s, c) } if ("DROP_ANIMATING" === n.phase) { var p = n.completed; if (!yi(o, p.critical)) return t; var f = xi(p.critical, n.dimensions); return r(a, l, pi(p.result) === a, Ze(p.impact) === a, f, c) } if ("IDLE" === n.phase && n.completed && !n.shouldFlush) { var g = n.completed; if (!yi(o, g.critical)) return t; var v = Ze(g.impact) === a,
                                b = Boolean(g.impact.at && "COMBINE" === g.impact.at.type),
                                m = g.critical.droppable.id === a; return v ? b ? e : t : m ? e : t } return t } }), Ii, null, { context: Kn, pure: !0, areStatePropsEqual: di })((function(e) { var t = Object(r.useContext)(nr);
                    t || L(!1); var n = t.contextId,
                        a = t.isMovementAllowed,
                        o = Object(r.useRef)(null),
                        l = Object(r.useRef)(null),
                        c = e.children,
                        u = e.droppableId,
                        p = e.type,
                        f = e.mode,
                        g = e.direction,
                        v = e.ignoreContainerClipping,
                        b = e.isDropDisabled,
                        m = e.isCombineEnabled,
                        h = e.snapshot,
                        y = e.useClone,
                        x = e.updateViewportMaxScroll,
                        I = e.getContainerForClone,
                        D = d((function() { return o.current }), []),
                        E = d((function(e) { o.current = e }), []),
                        C = (d((function() { return l.current }), []), d((function(e) { l.current = e }), []));
                    ir(); var A = d((function() { a() && x({ maxScroll: un() }) }), [a, x]);! function(e) { var t = Object(r.useRef)(null),
                            n = Xr(nr),
                            i = tr("droppable"),
                            a = n.registry,
                            o = n.marshal,
                            l = or(e),
                            c = s((function() { return { id: e.droppableId, type: e.type, mode: e.mode } }), [e.droppableId, e.mode, e.type]),
                            u = Object(r.useRef)(c),
                            p = s((function() { return O((function(e, n) { t.current || L(!1); var r = { x: e, y: n };
                                    o.updateDroppableScroll(c.id, r) })) }), [c.id, o]),
                            f = d((function() { var e = t.current; return e && e.env.closestScrollable ? Ur(e.env.closestScrollable) : V }), []),
                            g = d((function() { var e = f();
                                p(e.x, e.y) }), [f, p]),
                            v = s((function() { return w(g) }), [g]),
                            b = d((function() { var e = t.current,
                                    n = Kr(e);
                                e && n || L(!1), e.scrollOptions.shouldPublishImmediately ? g() : v() }), [v, g]),
                            m = d((function(e, r) { t.current && L(!1); var i = l.current,
                                    a = i.getDroppableRef();
                                a || L(!1); var o = Vr(a),
                                    u = { ref: a, descriptor: c, env: o, scrollOptions: r };
                                t.current = u; var s = qr({ ref: a, descriptor: c, env: o, windowScroll: e, direction: i.direction, isDropDisabled: i.isDropDisabled, isCombineEnabled: i.isCombineEnabled, shouldClipSubject: !i.ignoreContainerClipping }),
                                    d = o.closestScrollable; return d && (d.setAttribute(kn.contextId, n.contextId), d.addEventListener("scroll", b, Jr(u.scrollOptions))), s }), [n.contextId, c, b, l]),
                            h = d((function() { var e = t.current,
                                    n = Kr(e); return e && n || L(!1), Ur(n) }), []),
                            y = d((function() { var e = t.current;
                                e || L(!1); var n = Kr(e);
                                t.current = null, n && (v.cancel(), n.removeAttribute(kn.contextId), n.removeEventListener("scroll", b, Jr(e.scrollOptions))) }), [b, v]),
                            x = d((function(e) { var n = t.current;
                                n || L(!1); var r = Kr(n);
                                r || L(!1), r.scrollTop += e.y, r.scrollLeft += e.x }), []),
                            I = s((function() { return { getDimensionAndWatchScroll: m, getScrollWhileDragging: h, dragStopped: y, scroll: x } }), [y, m, h, x]),
                            D = s((function() { return { uniqueId: i, descriptor: c, callbacks: I } }), [I, c, i]);
                        Un((function() { return u.current = D.descriptor, a.droppable.register(D),
                                function() { t.current && y(), a.droppable.unregister(D) } }), [I, c, y, D, o, a.droppable]), Un((function() { t.current && o.updateDroppableIsEnabled(u.current.id, !e.isDropDisabled) }), [e.isDropDisabled, o]), Un((function() { t.current && o.updateDroppableIsCombineEnabled(u.current.id, e.isCombineEnabled) }), [e.isCombineEnabled, o]) }({ droppableId: u, type: p, mode: f, direction: g, isDropDisabled: b, isCombineEnabled: m, ignoreContainerClipping: v, getDroppableRef: D }); var S = i.a.createElement(ni, { on: e.placeholder, shouldAnimate: e.shouldAnimatePlaceholder }, (function(e) { var t = e.onClose,
                                r = e.data,
                                a = e.animate; return i.a.createElement(ei, { placeholder: r, onClose: t, innerRef: C, animate: a, contextId: n, onTransitionEnd: A }) })),
                        R = s((function() { return { innerRef: E, placeholder: S, droppableProps: { "data-rbd-droppable-id": u, "data-rbd-droppable-context-id": n } } }), [n, u, S, E]),
                        B = y ? y.dragging.draggableId : null,
                        P = s((function() { return { droppableId: u, type: p, isUsingCloneFor: B } }), [u, B, p]); return i.a.createElement(ti.Provider, { value: P }, c(R, h), function() { if (!y) return null; var e = y.dragging,
                            t = y.render,
                            n = i.a.createElement(mi, { draggableId: e.draggableId, index: e.source.index, isClone: !0, isEnabled: !0, shouldRespectForcePress: !1, canDragInteractiveElements: !0 }, (function(n, r) { return t(n, r, e) })); return N.a.createPortal(n, I()) }()) }));
            Ei.defaultProps = Di }, 882: function(e, t, n) { "use strict"; var r = n(2),
                i = n.n(r);
            t.a = i.a.createContext(null) }, 929: function(e, t, n) { "use strict";
            n.d(t, "b", (function() { return f })), n.d(t, "a", (function() { return g })), n.d(t, "c", (function() { return v })); var r = n(56),
                i = n(60),
                a = (n(51), n(2)),
                o = n.n(a),
                l = n(167),
                c = n.n(l),
                u = !1,
                s = n(882),
                d = "unmounted",
                p = "exited",
                f = "entering",
                g = "entered",
                v = "exiting",
                b = function(e) {
                    function t(t, n) { var r;
                        r = e.call(this, t, n) || this; var i, a = n && !n.isMounting ? t.enter : t.appear; return r.appearStatus = null, t.in ? a ? (i = p, r.appearStatus = f) : i = g : i = t.unmountOnExit || t.mountOnEnter ? d : p, r.state = { status: i }, r.nextCallback = null, r }
                    Object(i.a)(t, e), t.getDerivedStateFromProps = function(e, t) { return e.in && t.status === d ? { status: p } : null }; var n = t.prototype; return n.componentDidMount = function() { this.updateStatus(!0, this.appearStatus) }, n.componentDidUpdate = function(e) { var t = null; if (e !== this.props) { var n = this.state.status;
                            this.props.in ? n !== f && n !== g && (t = f) : n !== f && n !== g || (t = v) }
                        this.updateStatus(!1, t) }, n.componentWillUnmount = function() { this.cancelNextCallback() }, n.getTimeouts = function() { var e, t, n, r = this.props.timeout; return e = t = n = r, null != r && "number" !== typeof r && (e = r.exit, t = r.enter, n = void 0 !== r.appear ? r.appear : t), { exit: e, enter: t, appear: n } }, n.updateStatus = function(e, t) { void 0 === e && (e = !1), null !== t ? (this.cancelNextCallback(), t === f ? this.performEnter(e) : this.performExit()) : this.props.unmountOnExit && this.state.status === p && this.setState({ status: d }) }, n.performEnter = function(e) { var t = this,
                            n = this.props.enter,
                            r = this.context ? this.context.isMounting : e,
                            i = this.props.nodeRef ? [r] : [c.a.findDOMNode(this), r],
                            a = i[0],
                            o = i[1],
                            l = this.getTimeouts(),
                            s = r ? l.appear : l.enter;!e && !n || u ? this.safeSetState({ status: g }, (function() { t.props.onEntered(a) })) : (this.props.onEnter(a, o), this.safeSetState({ status: f }, (function() { t.props.onEntering(a, o), t.onTransitionEnd(s, (function() { t.safeSetState({ status: g }, (function() { t.props.onEntered(a, o) })) })) }))) }, n.performExit = function() { var e = this,
                            t = this.props.exit,
                            n = this.getTimeouts(),
                            r = this.props.nodeRef ? void 0 : c.a.findDOMNode(this);
                        t && !u ? (this.props.onExit(r), this.safeSetState({ status: v }, (function() { e.props.onExiting(r), e.onTransitionEnd(n.exit, (function() { e.safeSetState({ status: p }, (function() { e.props.onExited(r) })) })) }))) : this.safeSetState({ status: p }, (function() { e.props.onExited(r) })) }, n.cancelNextCallback = function() { null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null) }, n.safeSetState = function(e, t) { t = this.setNextCallback(t), this.setState(e, t) }, n.setNextCallback = function(e) { var t = this,
                            n = !0; return this.nextCallback = function(r) { n && (n = !1, t.nextCallback = null, e(r)) }, this.nextCallback.cancel = function() { n = !1 }, this.nextCallback }, n.onTransitionEnd = function(e, t) { this.setNextCallback(t); var n = this.props.nodeRef ? this.props.nodeRef.current : c.a.findDOMNode(this),
                            r = null == e && !this.props.addEndListener; if (n && !r) { if (this.props.addEndListener) { var i = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback],
                                    a = i[0],
                                    o = i[1];
                                this.props.addEndListener(a, o) }
                            null != e && setTimeout(this.nextCallback, e) } else setTimeout(this.nextCallback, 0) }, n.render = function() { var e = this.state.status; if (e === d) return null; var t = this.props,
                            n = t.children,
                            i = (t.in, t.mountOnEnter, t.unmountOnExit, t.appear, t.enter, t.exit, t.timeout, t.addEndListener, t.onEnter, t.onEntering, t.onEntered, t.onExit, t.onExiting, t.onExited, t.nodeRef, Object(r.a)(t, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"])); return o.a.createElement(s.a.Provider, { value: null }, "function" === typeof n ? n(e, i) : o.a.cloneElement(o.a.Children.only(n), i)) }, t }(o.a.Component);

            function m() {}
            b.contextType = s.a, b.propTypes = {}, b.defaultProps = { in: !1, mountOnEnter: !1, unmountOnExit: !1, appear: !1, enter: !0, exit: !0, onEnter: m, onEntering: m, onEntered: m, onExit: m, onExiting: m, onExited: m }, b.UNMOUNTED = d, b.EXITED = p, b.ENTERING = f, b.ENTERED = g, b.EXITING = v;
            t.d = b } }
]);