! function() {
    "use strict";

    function t() {
        if (!(this instanceof t)) return new t;
        this.size = 0, this.uid = 0, this.selectors = [], this.indexes = Object.create(this.indexes), this.activeIndexes = []
    }
    var e = window.document.documentElement,
        i = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.oMatchesSelector || e.msMatchesSelector;
    t.prototype.matchesSelector = function(t, e) {
        return i.call(t, e)
    }, t.prototype.querySelectorAll = function(t, e) {
        return e.querySelectorAll(t)
    }, t.prototype.indexes = [];
    var r = /^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
    t.prototype.indexes.push({
        name: "ID",
        selector: function(t) {
            var e;
            if (e = t.match(r)) return e[0].slice(1)
        },
        element: function(t) {
            if (t.id) return [t.id]
        }
    });
    var s = /^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
    t.prototype.indexes.push({
        name: "CLASS",
        selector: function(t) {
            var e;
            if (e = t.match(s)) return e[0].slice(1)
        },
        element: function(t) {
            var e = t.className;
            if (e) {
                if ("string" == typeof e) return e.split(/\s/);
                if ("object" == typeof e && "baseVal" in e) return e.baseVal.split(/\s/)
            }
        }
    });
    var n, o = /^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
    t.prototype.indexes.push({
        name: "TAG",
        selector: function(t) {
            var e;
            if (e = t.match(o)) return e[0].toUpperCase()
        },
        element: function(t) {
            return [t.nodeName.toUpperCase()]
        }
    }), t.prototype.indexes.default = {
        name: "UNIVERSAL",
        selector: function() {
            return !0
        },
        element: function() {
            return [!0]
        }
    }, n = "function" == typeof window.Map ? window.Map : function() {
        function t() {
            this.map = {}
        }
        return t.prototype.get = function(t) {
            return this.map[t + " "]
        }, t.prototype.set = function(t, e) {
            this.map[t + " "] = e
        }, t
    }();
    var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;

    function l(t, e) {
        var i, r, s, n, o, l, u = (t = t.slice(0).concat(t.default)).length,
            c = e,
            d = [];
        do {
            if (a.exec(""), (s = a.exec(c)) && (c = s[3], s[2] || !c))
                for (i = 0; i < u; i++)
                    if (o = (l = t[i]).selector(s[1])) {
                        for (r = d.length, n = !1; r--;)
                            if (d[r].index === l && d[r].key === o) {
                                n = !0;
                                break
                            }
                        n || d.push({
                            index: l,
                            key: o
                        });
                        break
                    }
        } while (s);
        return d
    }

    function u(t, e) {
        var i, r, s;
        for (i = 0, r = t.length; i < r; i++)
            if (s = t[i], e.isPrototypeOf(s)) return s
    }

    function c(t, e) {
        return t.id - e.id
    }
    t.prototype.logDefaultIndexUsed = function() {}, t.prototype.add = function(t, e) {
        var i, r, s, o, a, c, d, h, b = this.activeIndexes,
            f = this.selectors;
        if ("string" == typeof t) {
            for (i = {
                    id: this.uid++,
                    selector: t,
                    data: e
                }, d = l(this.indexes, t), r = 0; r < d.length; r++) o = (h = d[r]).key, (a = u(b, s = h.index)) || ((a = Object.create(s)).map = new n, b.push(a)), s === this.indexes.default && this.logDefaultIndexUsed(i), (c = a.map.get(o)) || (c = [], a.map.set(o, c)), c.push(i);
            this.size++, f.push(t)
        }
    }, t.prototype.remove = function(t, e) {
        if ("string" == typeof t) {
            var i, r, s, n, o, a, u, c, d = this.activeIndexes,
                h = {},
                b = 1 === arguments.length;
            for (i = l(this.indexes, t), s = 0; s < i.length; s++)
                for (r = i[s], n = d.length; n--;)
                    if (a = d[n], r.index.isPrototypeOf(a)) {
                        if (u = a.map.get(r.key))
                            for (o = u.length; o--;)(c = u[o]).selector !== t || !b && c.data !== e || (u.splice(o, 1), h[c.id] = !0);
                        break
                    }
            this.size -= Object.keys(h).length
        }
    }, t.prototype.queryAll = function(t) {
        if (!this.selectors.length) return [];
        var e, i, r, s, n, o, a, l, u = {},
            d = [],
            h = this.querySelectorAll(this.selectors.join(", "), t);
        for (e = 0, r = h.length; e < r; e++)
            for (n = h[e], i = 0, s = (o = this.matches(n)).length; i < s; i++) u[(l = o[i]).id] ? a = u[l.id] : (a = {
                id: l.id,
                selector: l.selector,
                data: l.data,
                elements: []
            }, u[l.id] = a, d.push(a)), a.elements.push(n);
        return d.sort(c)
    }, t.prototype.matches = function(t) {
        if (!t) return [];
        var e, i, r, s, n, o, a, l, u, d, h, b = this.activeIndexes,
            f = {},
            p = [];
        for (e = 0, s = b.length; e < s; e++)
            if (l = (a = b[e]).element(t))
                for (i = 0, n = l.length; i < n; i++)
                    if (u = a.map.get(l[i]))
                        for (r = 0, o = u.length; r < o; r++) !f[h = (d = u[r]).id] && this.matchesSelector(t, d.selector) && (f[h] = !0, p.push(d));
        return p.sort(c)
    };
    var d = null,
        h = null,
        b = [];

    function f(t, e) {
        var i = [];

        function r() {
            var t = i;
            i = [], e(t)
        }
        return function() {
            for (var e = arguments.length, s = Array(e), n = 0; n < e; n++) s[n] = arguments[n];
            i.push(s), 1 === i.length && p(t, r)
        }
    }

    function p(t, e) {
        h || (h = new MutationObserver(g)), d || (d = t.createElement("div"), h.observe(d, {
            attributes: !0
        })), b.push(e), d.setAttribute("data-twiddle", "" + Date.now())
    }

    function g() {
        var t = b;
        b = [];
        for (var e = 0; e < t.length; e++) try {
            t[e]()
        } catch (i) {
            setTimeout((function() {
                throw i
            }), 0)
        }
    }
    var m = new WeakMap,
        v = new WeakMap,
        y = new WeakMap,
        w = new WeakMap;

    function S(t, e) {
        for (var i = 0; i < e.length; i++) {
            var r = e[i],
                s = r[0],
                n = r[1],
                o = r[2];
            s === q ? (A(o, n), T(o, n)) : s === E ? L(o, n) : s === I && x(t.observers, n)
        }
    }

    function A(t, e) {
        if (e instanceof t.elementConstructor) {
            var i = m.get(e);
            if (i || (i = [], m.set(e, i)), -1 === i.indexOf(t.id)) {
                var r = void 0;
                if (t.initialize && (r = t.initialize.call(void 0, e)), r) {
                    var s = v.get(e);
                    s || (s = {}, v.set(e, s)), s["" + t.id] = r
                }
                i.push(t.id)
            }
        }
    }

    function T(t, e) {
        if (e instanceof t.elementConstructor) {
            var i = w.get(e);
            if (i || (i = [], w.set(e, i)), -1 === i.indexOf(t.id)) {
                t.elements.push(e);
                var r = v.get(e),
                    s = r ? r["" + t.id] : null;
                if (s && s.add && s.add.call(void 0, e), t.subscribe) {
                    var n = t.subscribe.call(void 0, e);
                    if (n) {
                        var o = y.get(e);
                        o || (o = {}, y.set(e, o)), o["" + t.id] = n
                    }
                }
                t.add && t.add.call(void 0, e), i.push(t.id)
            }
        }
    }

    function L(t, e) {
        if (e instanceof t.elementConstructor) {
            var i = w.get(e);
            if (i) {
                var r = t.elements.indexOf(e);
                if (-1 !== r && t.elements.splice(r, 1), -1 !== (r = i.indexOf(t.id))) {
                    var s = v.get(e),
                        n = s ? s["" + t.id] : null;
                    if (n && n.remove && n.remove.call(void 0, e), t.subscribe) {
                        var o = y.get(e),
                            a = o ? o["" + t.id] : null;
                        a && a.unsubscribe && a.unsubscribe()
                    }
                    t.remove && t.remove.call(void 0, e), i.splice(r, 1)
                }
                0 === i.length && w.delete(e)
            }
        }
    }

    function x(t, e) {
        var i = w.get(e);
        if (i) {
            for (var r = i.slice(0), s = 0; s < r.length; s++) {
                var n = t[r[s]];
                if (n) {
                    var o = n.elements.indexOf(e); - 1 !== o && n.elements.splice(o, 1);
                    var a = v.get(e),
                        l = a ? a["" + n.id] : null;
                    l && l.remove && l.remove.call(void 0, e);
                    var u = y.get(e),
                        c = u ? u["" + n.id] : null;
                    c && c.unsubscribe && c.unsubscribe(), n.remove && n.remove.call(void 0, e)
                }
            }
            w.delete(e)
        }
    }
    var j = null;

    function k(t) {
        return "matches" in t || "webkitMatchesSelector" in t || "mozMatchesSelector" in t || "oMatchesSelector" in t || "msMatchesSelector" in t
    }
    var q = 1,
        E = 2,
        I = 3;

    function M(t, e, i) {
        for (var r = 0; r < i.length; r++) {
            var s = i[r];
            "childList" === s.type ? (C(t, e, s.addedNodes), B(t, e, s.removedNodes)) : "attributes" === s.type && F(t, e, s.target)
        }(function(t) {
            if (null === j) {
                var e = t.createElement("div"),
                    i = t.createElement("div"),
                    r = t.createElement("div");
                e.appendChild(i), i.appendChild(r), e.innerHTML = "", j = r.parentNode !== i
            }
            return j
        })(t.ownerDocument) && function(t, e) {
            for (var i = 0; i < t.observers.length; i++) {
                var r = t.observers[i];
                if (r)
                    for (var s = r.elements, n = 0; n < s.length; n++) {
                        var o = s[n];
                        o.parentNode || e.push([I, o])
                    }
            }
        }(t, e)
    }

    function C(t, e, i) {
        for (var r = 0; r < i.length; r++) {
            var s = i[r];
            if (k(s))
                for (var n = t.selectorSet.matches(s), o = 0; o < n.length; o++) {
                    var a = n[o].data;
                    e.push([q, s, a])
                }
            if ("querySelectorAll" in s)
                for (var l = t.selectorSet.queryAll(s), u = 0; u < l.length; u++)
                    for (var c = l[u], d = c.data, h = c.elements, b = 0; b < h.length; b++) e.push([q, h[b], d])
        }
    }

    function B(t, e, i) {
        for (var r = 0; r < i.length; r++) {
            var s = i[r];
            if ("querySelectorAll" in s) {
                e.push([I, s]);
                for (var n = s.querySelectorAll("*"), o = 0; o < n.length; o++) e.push([I, n[o]])
            }
        }
    }

    function F(t, e, i) {
        if (k(i))
            for (var r = t.selectorSet.matches(i), s = 0; s < r.length; s++) {
                var n = r[s].data;
                e.push([q, i, n])
            }
        if ("querySelectorAll" in i) {
            var o = w.get(i);
            if (o)
                for (var a = 0; a < o.length; a++) {
                    var l = t.observers[o[a]];
                    l && (t.selectorSet.matchesSelector(i, l.selector) || e.push([E, i, l]))
                }
        }
    }
    var O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        P = 0;

    function N(e) {
        this.rootNode = 9 === e.nodeType ? e.documentElement : e, this.ownerDocument = 9 === e.nodeType ? e : e.ownerDocument, this.observers = [], this.selectorSet = new t, this.mutationObserver = new MutationObserver($.bind(this, this)), this._scheduleAddRootNodes = f(this.ownerDocument, z.bind(this, this)), this._handleThrottledChangedTargets = f(this.ownerDocument, _.bind(this, this)), this.rootNode.addEventListener("change", X.bind(this, this), !1),
            function(t, e) {
                var i = t.readyState;
                "interactive" === i || "complete" === i ? p(t, e) : t.addEventListener("DOMContentLoaded", p(t, e))
            }(this.ownerDocument, D.bind(this, this))
    }

    function D(t) {
        t.mutationObserver.observe(t.rootNode, {
            childList: !0,
            attributes: !0,
            subtree: !0
        }), t._scheduleAddRootNodes()
    }

    function z(t) {
        var e = [];
        C(t, e, [t.rootNode]), S(t, e)
    }

    function $(t, e) {
        var i = [];
        M(t, i, e), S(t, i)
    }

    function X(t, e) {
        t._handleThrottledChangedTargets(e.target)
    }

    function _(t, e) {
        var i = [];
        ! function(t, e, i) {
            for (var r = 0; r < i.length; r++)
                for (var s = i[r], n = s.form ? s.form.elements : t.rootNode.querySelectorAll("input"), o = 0; o < n.length; o++) F(t, e, n[o])
        }(t, i, e), S(t, i)
    }
    N.prototype.disconnect = function() {
        this.mutationObserver.disconnect()
    }, N.prototype.observe = function(t, e) {
        var i = void 0;
        "function" == typeof e ? i = {
            selector: t,
            initialize: e
        } : "object" === (void 0 === e ? "undefined" : O(e)) ? (i = e).selector = t : i = t;
        var r = this,
            s = {
                id: P++,
                selector: i.selector,
                initialize: i.initialize,
                add: i.add,
                remove: i.remove,
                subscribe: i.subscribe,
                elements: [],
                elementConstructor: i.hasOwnProperty("constructor") ? i.constructor : this.ownerDocument.defaultView.Element,
                abort: function() {
                    r._abortObserving(s)
                }
            };
        return this.selectorSet.add(s.selector, s), this.observers[s.id] = s, this._scheduleAddRootNodes(), s
    }, N.prototype._abortObserving = function(t) {
        for (var e = t.elements, i = 0; i < e.length; i++) L(t, e[i]);
        this.selectorSet.remove(t.selector, t), delete this.observers[t.id]
    }, N.prototype.triggerObservers = function(t) {
        var e = [];
        ! function(t, e, i) {
            if ("querySelectorAll" in i) {
                F(t, e, i);
                for (var r = i.querySelectorAll("*"), s = 0; s < r.length; s++) F(t, e, r[s])
            }
        }(this, e, t), S(this, e)
    };
    var H = void 0;

    function W() {
        return H || (H = new N(window.document)), H
    }

    function G() {
        var t;
        return (t = W()).observe.apply(t, arguments)
    }
    G(".js-override-utm-params", (t => {
        let e = t.getAttribute("href");
        const i = document.location.search,
            r = ["utm_campaign", "utm_medium", "utm_source"];
        if (e && i)
            for (const s of r) {
                const r = new RegExp(s + "=([^=&]*)"),
                    n = r.exec(i);
                r.lastIndex = 0, n && (e = e.replace(r, `${s}=${n[1]}`), t.setAttribute("href", e))
            }
    }));
    const R = "build-in-animate",
        U = "build-in-reduced";
    G(".js-build-in-trigger[data-build-in-stagger], .js-build-in-group[data-build-in-stagger]", (t => {
        const e = parseInt(t.getAttribute("data-build-in-stagger")),
            i = t.querySelectorAll(".js-build-in-item");
        for (let r = 0; r < i.length; r++) i[r].style.transitionDelay = r * e + "ms"
    }));
    const V = new IntersectionObserver(J, {
        rootMargin: "-0% 0% -30% 0%",
        threshold: 0
    });

    function J(t) {
        for (const e of t)
            if (e.target.classList.toggle(R, e.isIntersecting), e.target.classList.contains("js-build-in-trigger"))
                for (const t of e.target.querySelectorAll(".js-build-in-item")) t.classList.toggle(R, e.isIntersecting)
    }

    function K(t) {
        const e = window.matchMedia("(prefers-reduced-motion: reduce)"),
            i = t.getAttribute("data-build-non-decorative") || "false";
        return e.matches && "false" === i
    }

    function Q(t) {
        t.classList.add(U), t.classList.add(R);
        for (const e of t.querySelectorAll(".js-build-in-item, .js-type-in-item")) e.classList.add(U), e.classList.add(R)
    }

    function Y(t) {
        const e = Number(t.getAttribute("data-build-margin-bottom") || 30),
            i = Number(t.getAttribute("data-build-margin-top") || 0),
            r = Number(t.getAttribute("data-build-threshold") || 0);
        return {
            marginBottom: e,
            marginTop: i,
            threshold: r,
            isDefault: 30 === e && 0 === i && 0 === r
        }
    }
    G(".js-build-in-item[data-build-delay]", (t => {
        const e = Number(t.getAttribute("data-build-delay") || 0);
        t instanceof HTMLElement && (t.style.transitionDelay = e + "ms")
    })), G(".js-build-in, .js-build-in-trigger", (t => {
        if (K(t)) return void Q(t);
        const e = Y(t);
        if (e.isDefault) return V.observe(t);
        new IntersectionObserver(J, {
            rootMargin: `-${e.marginTop}% 0% -${e.marginBottom}% 0%`,
            threshold: e.threshold
        }).observe(t)
    })), G(".js-viewport-aware-video", {
        constructor: HTMLMediaElement,
        add(t) {
            if (K(t)) return void t.pause();
            const e = t.getAttribute("data-threshold") || "0.2";
            new IntersectionObserver((e => {
                for (const i of e) i.isIntersecting ? t.play() : t.pause()
            }), {
                threshold: Number(e)
            }).observe(t)
        }
    });
    G(".js-type-in, .js-type-in-item", (t => {
        K(t) || et(t)
    }));
    const Z = new IntersectionObserver(tt, {
        rootMargin: "-0% 0% -30% 0%",
        threshold: 0
    });

    function tt(t) {
        for (const e of t)
            if (e.isIntersecting ? it(e.target) : et(e.target), e.target.classList.contains("js-type-in-trigger"))
                for (const t of e.target.querySelectorAll(".js-type-in-item")) e.isIntersecting ? it(t) : et(t)
    }

    function et(t) {
        const e = t.querySelectorAll(".js-type-row, .js-type-letters");
        for (const i of e) i.style.visibility = "hidden";
        t.classList.remove(R)
    }

    function it(t) {
        if (t.classList.contains(R)) return;
        t.classList.add(R);
        const e = t.querySelectorAll(".js-type-row, .js-type-letters"),
            i = Number(t.getAttribute("data-type-delay") || 20),
            r = Number(t.getAttribute("data-type-row-delay") || 200);
        setTimeout((() => rt(t, e, 0, "", r)), i)
    }

    function rt(t, e, i, r, s) {
        if (i >= e.length) return;
        const n = e[i];
        if (t.classList.contains(R)) {
            if (n.classList.contains("js-type-row")) return n.style.visibility = "visible", i++, void setTimeout((() => rt(t, e, i, "", s)), s);
            "hidden" === n.style.visibility && null != n.textContent && (r = n.textContent, n.textContent = "", n.style.visibility = "visible", n.classList.add("animation-is-typing")), null != n.textContent && r.length > n.textContent.length ? n.textContent = r.substr(0, n.textContent.length + 1) : ++i < e.length && n.classList.remove("animation-is-typing"), setTimeout((() => rt(t, e, i, r, s)), 20)
        } else "" !== r && (n.textContent = r)
    }
    G(".js-type-in, .js-type-in-trigger", (t => {
        if (K(t)) return void Q(t);
        const e = Y(t);
        if (e.isDefault) return Z.observe(t);
        new IntersectionObserver(tt, {
            rootMargin: `-${e.marginTop}% 0% -${e.marginBottom}% 0%`,
            threshold: e.threshold
        }).observe(t)
    }));
    const st = new IntersectionObserver((function(t) {
        for (const e of t)
            if (e.isIntersecting)
                for (const t of document.querySelectorAll(".js-scrollnav-item")) t.classList.toggle("selected", t.getAttribute("href") === "#" + e.target.id)
    }), {
        root: null,
        rootMargin: "0px",
        threshold: .1
    });
    G(".js-section", (t => st.observe(t)));
    class GitHubAudio extends HTMLElement {
        constructor() {
            super();
            const t = this.getAttribute("src");
            if (!t) return this;
            this.defaultSkipStep = 10, this.playToggleButton = this.querySelector(".js-github-audio-play-toggle"), this.playToggleButtonLabel = this.querySelector("#play-toggle-label"), this.currentTimeLabel = this.querySelector(".js-github-audio-current-time"), this.totalTimeLabel = this.querySelector(".js-github-audio-total-time"), this.scrubber = this.querySelector(".js-github-audio-scrubber"), this.scrubberProgress = this.querySelector(".js-github-audio-scrubber-progress"), this.skipBackwardButton = this.querySelector(".js-github-audio-skip-backward"), this.skipForwardButton = this.querySelector(".js-github-audio-skip-forward"), this.requestedAnimationFrame = 0, this.ready = !1, this.audio = this.createAudioElement(t, this.onLoadedMetaData, null, this.onEnded)
        }
        createAudioElement(t, e, i, r) {
            const s = new Audio;
            return s.preload = "metadata", e && s.addEventListener("loadedmetadata", (() => {
                e.bind(this)()
            })), r && s.addEventListener("ended", (() => {
                r.bind(this)()
            })), i && s.addEventListener("canplay", (() => {
                i.bind(this)()
            })), s.src = t, s
        }
        static zeroFormat(t) {
            return t < 10 ? "0" + t : "" + t
        }
        static formatTime(t) {
            const e = Math.floor(t / 60),
                i = Math.floor(t % 60);
            return `${this.zeroFormat(e)}:${this.zeroFormat(i)}`
        }
        setTotalTimeLabel(t) {
            this.totalTimeLabel && (this.totalTimeLabel.textContent = GitHubAudio.formatTime(t))
        }
        setCurrentTimeLabel(t) {
            this.currentTimeLabel && (this.currentTimeLabel.textContent = GitHubAudio.formatTime(t))
        }
        getTotalTimeLabel() {
            return this.totalTimeLabel ? this.totalTimeLabel.textContent : ""
        }
        getCurrentTimeLabel() {
            return this.currentTimeLabel ? this.currentTimeLabel.textContent : ""
        }
        updateScrubberAria() {
            this.scrubber && this.scrubber.setAttribute("aria-valuenow", this.scrubber.value)
        }
        calculatePercentagePostion(t, e) {
            return 100 * t / e
        }
        setScrubberPosition(t) {
            if (!this.scrubber || !this.scrubberProgress) return;
            this.scrubber.value = "" + Math.floor(t);
            const e = parseInt(this.scrubber.max);
            this.scrubberProgress.style.width = this.calculatePercentagePostion(t, e) + "%", this.updateScrubberAria()
        }
        updateStateWhilePlaying() {
            this.setCurrentTimeLabel(this.audio.currentTime), this.setScrubberPosition(this.audio.currentTime), this.requestedAnimationFrame = requestAnimationFrame(this.updateStateWhilePlaying.bind(this))
        }
        initScrubber() {
            this.scrubber && (this.scrubber.min = "0", this.scrubber.max = "" + Math.floor(this.audio.duration), this.scrubber.setAttribute("aria-valuemin", this.scrubber.min), this.scrubber.setAttribute("aria-valuemax", this.scrubber.max), this.scrubber.addEventListener("change", (() => {
                this.scrubber && (this.audio.currentTime = parseInt(this.scrubber.value, 10), this.audio.paused || requestAnimationFrame(this.updateStateWhilePlaying.bind(this)))
            })), this.scrubber.addEventListener("input", (() => {
                if (!this.scrubber || !this.scrubberProgress) return;
                const t = parseInt(this.scrubber.value, 10),
                    e = parseInt(this.scrubber.max, 10);
                this.setCurrentTimeLabel(t), this.scrubberProgress.style.width = this.calculatePercentagePostion(t, e) + "%", this.updateScrubberAria(), this.audio.paused || cancelAnimationFrame(this.requestedAnimationFrame)
            })), this.scrubber.addEventListener("keyup", (t => {
                "Space" === t.code && this.togglePlay()
            })))
        }
        play() {
            this.audio.play(), this.playToggleButtonLabel && (this.playToggleButtonLabel.textContent = this.playToggleButtonLabel.getAttribute("data-label-pause")), this.playToggleButton && this.playToggleButton.setAttribute("data-play-state", "playing"), requestAnimationFrame(this.updateStateWhilePlaying.bind(this))
        }
        pause() {
            this.audio.pause(), this.playToggleButtonLabel && (this.playToggleButtonLabel.textContent = this.playToggleButtonLabel.getAttribute("data-label-play")), this.playToggleButton && this.playToggleButton.setAttribute("data-play-state", "paused"), cancelAnimationFrame(this.requestedAnimationFrame)
        }
        stop() {
            this.pause(), this.audio.currentTime = 0, this.setScrubberPosition(0)
        }
        togglePlay() {
            this.audio.paused ? this.play() : this.pause()
        }
        skipForward(t) {
            t = t || this.defaultSkipStep, this.audio.currentTime = this.audio.currentTime + t, this.audio.paused && (this.setCurrentTimeLabel(this.audio.currentTime), this.setScrubberPosition(this.audio.currentTime))
        }
        skipBackward(t) {
            t = t || this.defaultSkipStep, this.audio.currentTime = this.audio.currentTime - t, this.audio.paused && (this.setCurrentTimeLabel(this.audio.currentTime), this.setScrubberPosition(this.audio.currentTime))
        }
        onLoadedMetaData() {
            this.setTotalTimeLabel(this.audio.duration), this.initScrubber(), this.onCanPlay()
        }
        onEnded() {
            this.pause()
        }
        onCanPlay() {
            this.ready || (this.playToggleButton && (this.playToggleButton.addEventListener("click", this.togglePlay.bind(this)), this.playToggleButton.removeAttribute("disabled")), this.skipForwardButton && (this.skipForwardButton.addEventListener("click", (() => {
                this.skipForward()
            })), this.skipForwardButton.removeAttribute("disabled")), this.skipBackwardButton && (this.skipBackwardButton.addEventListener("click", (() => {
                this.skipBackward()
            })), this.skipBackwardButton.removeAttribute("disabled")), this.scrubber && this.scrubber.removeAttribute("disabled"), this.ready = !0)
        }
    }
    window && "customElements" in window && window.customElements.define("github-audio", GitHubAudio);
    class SlideShow extends HTMLElement {
        constructor() {
            super();
            const t = this.getAttribute("data-slide-show-autoplay"),
                e = this.getAttribute("data-threshold") || "0.2";
            if (this.intervalTime = 6e3, this.bullets = this.querySelectorAll(".js-slide-show-bullet[aria-controls]"), this.gotos = this.querySelectorAll(".js-slide-show-goto[aria-controls]"), this.slideIds = [], this.interval = null, this.current = 0, this.currentSlideId = null, this.swipeArea = this.querySelector(".js-slide-show-swipe-area"), this.touchStartX = 0, this.touchEndX = 0, this.swipeLengthMod = 20, t && !K(this)) {
                const i = parseInt(t, 10);
                isNaN(i) || (this.intervalTime = i);
                new IntersectionObserver((t => {
                    for (const e of t) {
                        const t = e.target;
                        e.isIntersecting ? t.play() : t.pause()
                    }
                }), {
                    threshold: Number(e)
                }).observe(this)
            }
            for (let i = 0; i < this.bullets.length; i++) {
                const t = this.bullets[i],
                    e = t.getAttribute("aria-controls"),
                    r = t.getAttribute("aria-selected");
                e && this.slideIds.push(e), r && (this.current = i, this.currentSlideId = e), t.addEventListener("click", this.bulletOnClick.bind(this))
            }
            for (let i = 0; i < this.gotos.length; i++) {
                const t = this.gotos[i],
                    e = t.getAttribute("aria-controls");
                this.currentSlideId === e && t.setAttribute("aria-selected", "true"), t.addEventListener("click", this.bulletOnClick.bind(this))
            }
            this.swipeArea && (this.swipeArea.addEventListener("touchstart", this.onTouchStart.bind(this), {
                passive: !0
            }), this.swipeArea.addEventListener("touchend", this.onTouchEnd.bind(this)))
        }
        onTouchStart(t) {
            this.touchStartX = t.changedTouches[0].screenX
        }
        onTouchEnd(t) {
            this.touchEndX = t.changedTouches[0].screenX, this.touchEndX < this.touchStartX - this.swipeLengthMod && (this.pause(), this.nextSlide()), this.touchEndX > this.touchStartX + this.swipeLengthMod && (this.pause(), this.prevSlide())
        }
        pause() {
            this.interval && window.clearInterval(this.interval)
        }
        play() {
            this.pause(), this.interval = window.setInterval(this.nextSlide.bind(this), this.intervalTime)
        }
        nextSlide() {
            this.current++, this.current > this.slideIds.length - 1 && (this.current = 0), this.goToSlide(this.slideIds[this.current])
        }
        prevSlide() {
            this.current--, this.current < 0 && (this.current = this.slideIds.length - 1), this.goToSlide(this.slideIds[this.current])
        }
        bulletOnClick(t) {
            t.preventDefault();
            const e = t.target,
                i = null == e ? void 0 : e.getAttribute("aria-controls");
            i && this.goToSlide(i), this.pause()
        }
        goToSlide(t) {
            const e = this.querySelector(`.js-slide-show-slide[id="${t}"]`),
                i = this.querySelector(`.js-slide-show-bullet[aria-controls="${t}"]`),
                r = this.querySelectorAll(`.js-slide-show-goto[aria-controls="${t}"]`),
                s = this.querySelector('.js-slide-show-slide:not([aria-hidden="true"])'),
                n = this.querySelector('.js-slide-show-bullet[aria-selected="true"]'),
                o = this.querySelectorAll('.js-slide-show-goto[aria-selected="true"]');
            null == s || s.setAttribute("aria-hidden", "true"), null == n || n.setAttribute("aria-selected", "false");
            for (let a = 0; a < o.length; a++) {
                o[a].setAttribute("aria-selected", "false")
            }
            null == e || e.removeAttribute("aria-hidden"), null == i || i.setAttribute("aria-selected", "true");
            for (let a = 0; a < r.length; a++) {
                r[a].setAttribute("aria-selected", "true")
            }
        }
    }
    window && "customElements" in window && window.customElements.define("slide-show", SlideShow)
}();
//# sourceMappingURL=marketing-5c302e8c.js.map