System.register([], (function(t) {
    "use strict";
    return {
        execute: function() {
            function e() {
                if (!(this instanceof e)) return new e;
                this.size = 0, this.uid = 0, this.selectors = [], this.indexes = Object.create(this.indexes), this.activeIndexes = []
            }
            t({
                $: function(t, e) {
                        qo.has(t) || qo.set(t, []);
                        qo.get(t).push(e), "interactive" === document.readyState || "complete" === document.readyState ? Bo ? Fo(document.body) : Wo() : document.addEventListener("DOMContentLoaded", Wo, {
                            once: !0
                        })
                    }
                    /**
                     * @license
                     * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
                     * This code may only be used under the BSD style license found at
                     * http://polymer.github.io/LICENSE.txt
                     * The complete set of authors may be found at
                     * http://polymer.github.io/AUTHORS.txt
                     * The complete set of contributors may be found at
                     * http://polymer.github.io/CONTRIBUTORS.txt
                     * Code distributed by Google as part of the polymer project is also
                     * subject to an additional IP rights grant found at
                     * http://polymer.github.io/PATENTS.txt
                     */
                    ,
                B: Ui,
                E: Ki,
                G: function(t) {
                    pe.push(t)
                },
                H: function(t) {
                    Qi = t.target, setTimeout((function() {
                        t.defaultPrevented && (Qi = null)
                    }), 0)
                },
                J: function(t, e) {
                    var n;
                    const r = `${null!==(n=null==e?void 0:e.keyPrefix)&&void 0!==n?n:"session-resume:"}${t}`;
                    let i;
                    try {
                        i = sessionStorage.getItem(r)
                    } catch (a) {}
                    if (!i) return;
                    const o = [],
                        s = [];
                    for (const [l, u] of JSON.parse(i)) {
                        const t = new CustomEvent("session:resume", {
                            bubbles: !0,
                            cancelable: !0,
                            detail: {
                                targetId: l,
                                targetValue: u
                            }
                        });
                        if (document.dispatchEvent(t)) {
                            const t = document.getElementById(l);
                            t && (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement) ? t.value === t.defaultValue && (t.value = u, o.push(t)) : s.push([l, u])
                        }
                    }
                    if (0 === s.length) try {
                        sessionStorage.removeItem(r)
                    } catch (c) {} else sessionStorage.setItem(r, JSON.stringify(s));
                    setTimeout((function() {
                        for (const t of o) t.dispatchEvent(new CustomEvent("change", {
                            bubbles: !0,
                            cancelable: !0
                        }))
                    }), 0)
                },
                K: function(t, e) {
                    var n, r;
                    const i = null !== (n = null == e ? void 0 : e.selector) && void 0 !== n ? n : ".js-session-resumable",
                        o = `${null!==(r=null==e?void 0:e.keyPrefix)&&void 0!==r?r:"session-resume:"}${t}`,
                        s = [];
                    for (const l of document.querySelectorAll(i))(l instanceof HTMLInputElement || l instanceof HTMLTextAreaElement) && s.push(l);
                    let a = s.filter((t => function(t) {
                        return !!t.id && t.value !== t.defaultValue && t.form !== Qi
                    }(t))).map((t => [t.id, t.value]));
                    if (a.length) try {
                        const t = sessionStorage.getItem(o);
                        if (null !== t) {
                            const e = JSON.parse(t).filter((function(t) {
                                return !a.some((e => e[0] === t[0]))
                            }));
                            a = a.concat(e)
                        }
                        sessionStorage.setItem(o, JSON.stringify(a))
                    } catch (c) {}
                },
                O: function(t, e) {
                    t.renderInto(e)
                },
                P: function(t, ...e) {
                    return new TemplateResult$1(t, e, mo)
                },
                S: e,
                Z: function(t) {
                    return t && t.default || t
                },
                _:
                    /*! *****************************************************************************
                          Copyright (c) Microsoft Corporation. All rights reserved.
                          Licensed under the Apache License, Version 2.0 (the "License"); you may not use
                          this file except in compliance with the License. You may obtain a copy of the
                          License at http://www.apache.org/licenses/LICENSE-2.0

                          THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
                          KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
                          WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
                          MERCHANTABLITY OR NON-INFRINGEMENT.

                          See the Apache Version 2.0 License for specific language governing permissions
                          and limitations under the License.
                          ***************************************************************************** */
                    function(t, e, n, r) {
                        var i, o = arguments.length,
                            s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
                        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, r);
                        else
                            for (var a = t.length - 1; a >= 0; a--)(i = t[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(e, n, s) : i(e, n)) || s);
                        return o > 3 && s && Object.defineProperty(e, n, s), s
                        /**
                         * @license
                         * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
                         * This code may only be used under the BSD style license found at
                         * http://polymer.github.io/LICENSE.txt
                         * The complete set of authors may be found at
                         * http://polymer.github.io/AUTHORS.txt
                         * The complete set of contributors may be found at
                         * http://polymer.github.io/CONTRIBUTORS.txt
                         * Code distributed by Google as part of the polymer project is also
                         * subject to an additional IP rights grant found at
                         * http://polymer.github.io/PATENTS.txt
                         */
                    },
                a: function(t, n, r) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        o = !!i.capture,
                        s = o ? vt : gt,
                        a = s[t];
                    a || (a = new e, s[t] = a, document.addEventListener(t, Mt, o));
                    a.add(n, r)
                },
                a0: function(t) {
                    return t.split("\n").reduce((function(t, e) {
                        var n = function(t) {
                            var e = Mi.exec(t);
                            if (!e) return null;
                            var n = e[2] && 0 === e[2].indexOf("native"),
                                r = e[2] && 0 === e[2].indexOf("eval"),
                                i = Si.exec(e[2]);
                            r && null != i && (e[2] = i[1], e[3] = i[2], e[4] = i[3]);
                            return {
                                file: n ? null : e[2],
                                methodName: e[1] || Li,
                                arguments: n ? [e[2]] : [],
                                lineNumber: e[3] ? +e[3] : null,
                                column: e[4] ? +e[4] : null
                            }
                        }(e) || function(t) {
                            var e = Ci.exec(t);
                            if (!e) return null;
                            return {
                                file: e[2],
                                methodName: e[1] || Li,
                                arguments: [],
                                lineNumber: +e[3],
                                column: e[4] ? +e[4] : null
                            }
                        }(e) || function(t) {
                            var e = Ni.exec(t);
                            if (!e) return null;
                            var n = e[3] && e[3].indexOf(" > eval") > -1,
                                r = Ii.exec(e[3]);
                            n && null != r && (e[3] = r[1], e[4] = r[2], e[5] = null);
                            return {
                                file: e[3],
                                methodName: e[1] || Li,
                                arguments: e[2] ? e[2].split(",") : [],
                                lineNumber: e[4] ? +e[4] : null,
                                column: e[5] ? +e[5] : null
                            }
                        }(e) || function(t) {
                            var e = Hi.exec(t);
                            if (!e) return null;
                            return {
                                file: e[2],
                                methodName: e[1] || Li,
                                arguments: [],
                                lineNumber: +e[3],
                                column: e[4] ? +e[4] : null
                            }
                        }(e) || function(t) {
                            var e = Di.exec(t);
                            if (!e) return null;
                            return {
                                file: e[3],
                                methodName: e[1] || Li,
                                arguments: [],
                                lineNumber: +e[4],
                                column: e[5] ? +e[5] : null
                            }
                        }(e);
                        return n && t.push(n), t
                    }), [])
                },
                a1: function(t, e) {
                    return t(e = {
                        exports: {}
                    }, e.exports), e.exports
                },
                a3: function() {
                    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                },
                a4: function(t) {
                    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
                },
                a5: Yt,
                a6: jt,
                c: function(t) {
                        const e = t.prototype.connectedCallback;
                        t.prototype.connectedCallback = function() {
                                this.toggleAttribute("data-catalyst", !0),
                                    function(t) {
                                        for (const e of t.querySelectorAll("template[data-shadowroot]")) e.parentElement === t && t.attachShadow({
                                            mode: "closed" === e.getAttribute("data-shadowroot") ? "closed" : "open"
                                        }).append(e.content.cloneNode(!0))
                                    }(this),
                                    function(t, e) {
                                        e || (e = Vt.get(Object.getPrototypeOf(t)) || []);
                                        for (const n of e) {
                                            const e = t[n],
                                                r = Ut(n);
                                            let i = {
                                                get() {
                                                    return this.getAttribute(r) || ""
                                                },
                                                set(t) {
                                                    this.setAttribute(r, t || "")
                                                }
                                            };
                                            "number" == typeof e ? i = {
                                                get() {
                                                    return Number(this.getAttribute(r) || 0)
                                                },
                                                set(t) {
                                                    this.setAttribute(r, t)
                                                }
                                            } : "boolean" == typeof e && (i = {
                                                get() {
                                                    return this.hasAttribute(r)
                                                },
                                                set(t) {
                                                    this.toggleAttribute(r, t)
                                                }
                                            }), Object.defineProperty(t, n, i), n in t && !t.hasAttribute(r) && i.set.call(t, e)
                                        }
                                    }(this), e && e.call(this),
                                    function(t) {
                                        Ot.add(t), t.shadowRoot && (Ft(t.shadowRoot), qt(t.shadowRoot));
                                        Ft(t), qt(t.ownerDocument)
                                    }(this)
                            },
                            function(t) {
                                let e = t.observedAttributes || [];
                                Object.defineProperty(t, "observedAttributes", {
                                    get() {
                                        const n = Vt.get(t.prototype);
                                        return n ? n.map(Ut).concat(e) : e
                                    },
                                    set(t) {
                                        e = t
                                    }
                                })
                            }(t),
                            function(t) {
                                const e = t.name.replace(/([A-Z]($|[a-z]))/g, "-$1").replace(/(^-|-Element$)/g, "").toLowerCase();
                                window.customElements.get(e) || (window[t.name] = t, window.customElements.define(e, t))
                            }(t)
                    }
                    /**
                     * @license
                     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
                     * This code may only be used under the BSD style license found at
                     * http://polymer.github.io/LICENSE.txt
                     * The complete set of authors may be found at
                     * http://polymer.github.io/AUTHORS.txt
                     * The complete set of contributors may be found at
                     * http://polymer.github.io/CONTRIBUTORS.txt
                     * Code distributed by Google as part of the polymer project is also
                     * subject to an additional IP rights grant found at
                     * http://polymer.github.io/PATENTS.txt
                     */
                    ,
                e: function(t = 0, e = {}) {
                    return (n, r, i) => {
                        if (!i || "function" != typeof i.value) throw new Error("debounce can only decorate functions");
                        const o = i.value;
                        i.value = Xt(o, t, e), Object.defineProperty(n, r, i)
                    }
                },
                f: function(t, e, n) {
                    return t.dispatchEvent(new CustomEvent(e, {
                        bubbles: !0,
                        cancelable: !0,
                        detail: n
                    }))
                },
                g: function(t, e) {
                    return Object.defineProperty(t, e, {
                        configurable: !0,
                        get() {
                            return function(t, e) {
                                const n = t.tagName.toLowerCase(),
                                    r = [];
                                if (t.shadowRoot)
                                    for (const i of t.shadowRoot.querySelectorAll(`[data-targets~="${n}.${e}"]`)) i.closest(n) || r.push(i);
                                for (const i of t.querySelectorAll(`[data-targets~="${n}.${e}"]`)) i.closest(n) === t && r.push(i);
                                return r
                            }(this, e)
                        }
                    })
                },
                h: Ct,
                j: function(t, e) {
                    Vt.has(t) || Vt.set(t, []);
                    Vt.get(t).push(e)
                },
                k: Xt,
                o: function() {
                    var t;
                    return (t = U()).observe.apply(t, arguments)
                },
                r: function(t, e) {
                    me || (me = new Map, document.addEventListener("submit", ge));
                    const n = me.get(t) || [];
                    me.set(t, [...n, e])
                },
                s: function(t) {
                    let e = !1,
                        n = null;

                    function r(t, e, n, r = !1) {
                        e instanceof HTMLInputElement && (e.indeterminate = r, e.checked !== n && (e.checked = n, setTimeout((() => {
                            const n = new CustomEvent("change", {
                                bubbles: !0,
                                cancelable: !1,
                                detail: {
                                    relatedTarget: t
                                }
                            });
                            e.dispatchEvent(n)
                        }))))
                    }

                    function i(i) {
                        const o = i.target;
                        o instanceof Element && (o.hasAttribute("data-check-all") ? function(e) {
                            if (e instanceof CustomEvent && e.detail) {
                                const {
                                    relatedTarget: t
                                } = e.detail;
                                if (t && t.hasAttribute("data-check-all-item")) return
                            }
                            const i = e.target;
                            if (!(i instanceof HTMLInputElement)) return;
                            n = null;
                            for (const n of t.querySelectorAll("[data-check-all-item]")) r(i, n, i.checked);
                            i.indeterminate = !1, s()
                        }(i) : o.hasAttribute("data-check-all-item") && function(i) {
                            if (i instanceof CustomEvent && i.detail) {
                                const {
                                    relatedTarget: t
                                } = i.detail;
                                if (t && (t.hasAttribute("data-check-all") || t.hasAttribute("data-check-all-item"))) return
                            }
                            const o = i.target;
                            if (!(o instanceof HTMLInputElement)) return;
                            const a = Array.from(t.querySelectorAll("[data-check-all-item]"));
                            if (e && n) {
                                const [t, e] = [a.indexOf(n), a.indexOf(o)].sort();
                                for (const n of a.slice(t, +e + 1 || 9e9)) r(o, n, o.checked)
                            }
                            e = !1, n = o;
                            const c = t.querySelector("[data-check-all]");
                            if (c) {
                                const t = a.length,
                                    e = a.filter((t => t instanceof HTMLInputElement && t.checked)).length;
                                r(o, c, e === t, t > e && e > 0)
                            }
                            s()
                        }(i))
                    }

                    function o(t) {
                        if (!(t.target instanceof Element)) return;
                        (t.target instanceof HTMLLabelElement && t.target.control || t.target).hasAttribute("data-check-all-item") && (e = t.shiftKey)
                    }

                    function s() {
                        const e = t.querySelector("[data-check-all-count]");
                        if (e) {
                            const n = t.querySelectorAll("[data-check-all-item]:checked").length;
                            e.textContent = n.toString()
                        }
                    }
                    return t.addEventListener("mousedown", o), t.addEventListener("change", i), {
                        unsubscribe: () => {
                            t.removeEventListener("mousedown", o), t.removeEventListener("change", i)
                        }
                    }
                },
                t: function(t, e) {
                    return Object.defineProperty(t, e, {
                        configurable: !0,
                        get() {
                            return jt(this, e)
                        }
                    })
                },
                v: function(t) {
                    fe.push(t)
                },
                w: function(t, e) {
                    0 === Object.keys(Nt.children).length && document.addEventListener("keydown", Rt);
                    const n = function(t) {
                        return t.split(",").map((t => t.split(" ")))
                    }(e || t.getAttribute("data-hotkey") || "").map((e => Nt.insert(e).add(t)));
                    It.set(t, n)
                },
                x: function(t) {
                    const e = It.get(t);
                    if (e && e.length)
                        for (const n of e) n && n.delete(t);
                    0 === Object.keys(Nt.children).length && document.removeEventListener("keydown", Rt)
                },
                y: function(t, e) {
                    return $i(t, e), {
                        unsubscribe: () => {
                            ! function(t) {
                                const e = Fi.get(t);
                                if (null == e) return;
                                Fi.delete(t), Bi -= 1, 0 === Bi && document.removeEventListener("keydown", zi);
                                e.copyMarkdown && t.removeEventListener("copy", ji)
                            }(t)
                        }
                    }
                },
                z: Vi
            });
            var n = window.document.documentElement,
                r = n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.oMatchesSelector || n.msMatchesSelector;
            e.prototype.matchesSelector = function(t, e) {
                return r.call(t, e)
            }, e.prototype.querySelectorAll = function(t, e) {
                return e.querySelectorAll(t)
            }, e.prototype.indexes = [];
            var i = /^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
            e.prototype.indexes.push({
                name: "ID",
                selector: function(t) {
                    var e;
                    if (e = t.match(i)) return e[0].slice(1)
                },
                element: function(t) {
                    if (t.id) return [t.id]
                }
            });
            var o = /^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
            e.prototype.indexes.push({
                name: "CLASS",
                selector: function(t) {
                    var e;
                    if (e = t.match(o)) return e[0].slice(1)
                },
                element: function(t) {
                    var e = t.className;
                    if (e) {
                        if ("string" == typeof e) return e.split(/\s/);
                        if ("object" == typeof e && "baseVal" in e) return e.baseVal.split(/\s/)
                    }
                }
            });
            var s, a = /^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
            e.prototype.indexes.push({
                name: "TAG",
                selector: function(t) {
                    var e;
                    if (e = t.match(a)) return e[0].toUpperCase()
                },
                element: function(t) {
                    return [t.nodeName.toUpperCase()]
                }
            }), e.prototype.indexes.default = {
                name: "UNIVERSAL",
                selector: function() {
                    return !0
                },
                element: function() {
                    return [!0]
                }
            }, s = "function" == typeof window.Map ? window.Map : function() {
                function t() {
                    this.map = {}
                }
                return t.prototype.get = function(t) {
                    return this.map[t + " "]
                }, t.prototype.set = function(t, e) {
                    this.map[t + " "] = e
                }, t
            }();
            var c = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;

            function l(t, e) {
                var n, r, i, o, s, a, l = (t = t.slice(0).concat(t.default)).length,
                    u = e,
                    d = [];
                do {
                    if (c.exec(""), (i = c.exec(u)) && (u = i[3], i[2] || !u))
                        for (n = 0; n < l; n++)
                            if (s = (a = t[n]).selector(i[1])) {
                                for (r = d.length, o = !1; r--;)
                                    if (d[r].index === a && d[r].key === s) {
                                        o = !0;
                                        break
                                    }
                                o || d.push({
                                    index: a,
                                    key: s
                                });
                                break
                            }
                } while (i);
                return d
            }

            function u(t, e) {
                var n, r, i;
                for (n = 0, r = t.length; n < r; n++)
                    if (i = t[n], e.isPrototypeOf(i)) return i
            }

            function d(t, e) {
                return t.id - e.id
            }
            e.prototype.logDefaultIndexUsed = function() {}, e.prototype.add = function(t, e) {
                var n, r, i, o, a, c, d, h, m = this.activeIndexes,
                    f = this.selectors;
                if ("string" == typeof t) {
                    for (n = {
                            id: this.uid++,
                            selector: t,
                            data: e
                        }, d = l(this.indexes, t), r = 0; r < d.length; r++) o = (h = d[r]).key, (a = u(m, i = h.index)) || ((a = Object.create(i)).map = new s, m.push(a)), i === this.indexes.default && this.logDefaultIndexUsed(n), (c = a.map.get(o)) || (c = [], a.map.set(o, c)), c.push(n);
                    this.size++, f.push(t)
                }
            }, e.prototype.remove = function(t, e) {
                if ("string" == typeof t) {
                    var n, r, i, o, s, a, c, u, d = this.activeIndexes,
                        h = {},
                        m = 1 === arguments.length;
                    for (n = l(this.indexes, t), i = 0; i < n.length; i++)
                        for (r = n[i], o = d.length; o--;)
                            if (a = d[o], r.index.isPrototypeOf(a)) {
                                if (c = a.map.get(r.key))
                                    for (s = c.length; s--;)(u = c[s]).selector !== t || !m && u.data !== e || (c.splice(s, 1), h[u.id] = !0);
                                break
                            }
                    this.size -= Object.keys(h).length
                }
            }, e.prototype.queryAll = function(t) {
                if (!this.selectors.length) return [];
                var e, n, r, i, o, s, a, c, l = {},
                    u = [],
                    h = this.querySelectorAll(this.selectors.join(", "), t);
                for (e = 0, r = h.length; e < r; e++)
                    for (o = h[e], n = 0, i = (s = this.matches(o)).length; n < i; n++) l[(c = s[n]).id] ? a = l[c.id] : (a = {
                        id: c.id,
                        selector: c.selector,
                        data: c.data,
                        elements: []
                    }, l[c.id] = a, u.push(a)), a.elements.push(o);
                return u.sort(d)
            }, e.prototype.matches = function(t) {
                if (!t) return [];
                var e, n, r, i, o, s, a, c, l, u, h, m = this.activeIndexes,
                    f = {},
                    p = [];
                for (e = 0, i = m.length; e < i; e++)
                    if (c = (a = m[e]).element(t))
                        for (n = 0, o = c.length; n < o; n++)
                            if (l = a.map.get(c[n]))
                                for (r = 0, s = l.length; r < s; r++) !f[h = (u = l[r]).id] && this.matchesSelector(t, u.selector) && (f[h] = !0, p.push(u));
                return p.sort(d)
            };
            var h = null,
                m = null,
                f = [];

            function p(t, e) {
                var n = [];

                function r() {
                    var t = n;
                    n = [], e(t)
                }
                return function() {
                    for (var e = arguments.length, i = Array(e), o = 0; o < e; o++) i[o] = arguments[o];
                    n.push(i), 1 === n.length && g(t, r)
                }
            }

            function g(t, e) {
                m || (m = new MutationObserver(v)), h || (h = t.createElement("div"), m.observe(h, {
                    attributes: !0
                })), f.push(e), h.setAttribute("data-twiddle", "" + Date.now())
            }

            function v() {
                var t = f;
                f = [];
                for (var e = 0; e < t.length; e++) try {
                    t[e]()
                } catch (n) {
                    setTimeout((function() {
                        throw n
                    }), 0)
                }
            }
            var b = new WeakMap,
                E = new WeakMap,
                w = new WeakMap,
                y = new WeakMap;

            function x(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n],
                        i = r[0],
                        o = r[1],
                        s = r[2];
                    i === C ? (k(s, o), A(s, o)) : i === N ? T(s, o) : i === I && L(t.observers, o)
                }
            }

            function k(t, e) {
                if (e instanceof t.elementConstructor) {
                    var n = b.get(e);
                    if (n || (n = [], b.set(e, n)), -1 === n.indexOf(t.id)) {
                        var r = void 0;
                        if (t.initialize && (r = t.initialize.call(void 0, e)), r) {
                            var i = E.get(e);
                            i || (i = {}, E.set(e, i)), i["" + t.id] = r
                        }
                        n.push(t.id)
                    }
                }
            }

            function A(t, e) {
                if (e instanceof t.elementConstructor) {
                    var n = y.get(e);
                    if (n || (n = [], y.set(e, n)), -1 === n.indexOf(t.id)) {
                        t.elements.push(e);
                        var r = E.get(e),
                            i = r ? r["" + t.id] : null;
                        if (i && i.add && i.add.call(void 0, e), t.subscribe) {
                            var o = t.subscribe.call(void 0, e);
                            if (o) {
                                var s = w.get(e);
                                s || (s = {}, w.set(e, s)), s["" + t.id] = o
                            }
                        }
                        t.add && t.add.call(void 0, e), n.push(t.id)
                    }
                }
            }

            function T(t, e) {
                if (e instanceof t.elementConstructor) {
                    var n = y.get(e);
                    if (n) {
                        var r = t.elements.indexOf(e);
                        if (-1 !== r && t.elements.splice(r, 1), -1 !== (r = n.indexOf(t.id))) {
                            var i = E.get(e),
                                o = i ? i["" + t.id] : null;
                            if (o && o.remove && o.remove.call(void 0, e), t.subscribe) {
                                var s = w.get(e),
                                    a = s ? s["" + t.id] : null;
                                a && a.unsubscribe && a.unsubscribe()
                            }
                            t.remove && t.remove.call(void 0, e), n.splice(r, 1)
                        }
                        0 === n.length && y.delete(e)
                    }
                }
            }

            function L(t, e) {
                var n = y.get(e);
                if (n) {
                    for (var r = n.slice(0), i = 0; i < r.length; i++) {
                        var o = t[r[i]];
                        if (o) {
                            var s = o.elements.indexOf(e); - 1 !== s && o.elements.splice(s, 1);
                            var a = E.get(e),
                                c = a ? a["" + o.id] : null;
                            c && c.remove && c.remove.call(void 0, e);
                            var l = w.get(e),
                                u = l ? l["" + o.id] : null;
                            u && u.unsubscribe && u.unsubscribe(), o.remove && o.remove.call(void 0, e)
                        }
                    }
                    y.delete(e)
                }
            }
            var M = null;

            function S(t) {
                return "matches" in t || "webkitMatchesSelector" in t || "mozMatchesSelector" in t || "oMatchesSelector" in t || "msMatchesSelector" in t
            }
            var C = 1,
                N = 2,
                I = 3;

            function D(t, e, n) {
                for (var r = 0; r < n.length; r++) {
                    var i = n[r];
                    "childList" === i.type ? (H(t, e, i.addedNodes), P(t, e, i.removedNodes)) : "attributes" === i.type && R(t, e, i.target)
                }(function(t) {
                    if (null === M) {
                        var e = t.createElement("div"),
                            n = t.createElement("div"),
                            r = t.createElement("div");
                        e.appendChild(n), n.appendChild(r), e.innerHTML = "", M = r.parentNode !== n
                    }
                    return M
                })(t.ownerDocument) && function(t, e) {
                    for (var n = 0; n < t.observers.length; n++) {
                        var r = t.observers[n];
                        if (r)
                            for (var i = r.elements, o = 0; o < i.length; o++) {
                                var s = i[o];
                                s.parentNode || e.push([I, s])
                            }
                    }
                }(t, e)
            }

            function H(t, e, n) {
                for (var r = 0; r < n.length; r++) {
                    var i = n[r];
                    if (S(i))
                        for (var o = t.selectorSet.matches(i), s = 0; s < o.length; s++) {
                            var a = o[s].data;
                            e.push([C, i, a])
                        }
                    if ("querySelectorAll" in i)
                        for (var c = t.selectorSet.queryAll(i), l = 0; l < c.length; l++)
                            for (var u = c[l], d = u.data, h = u.elements, m = 0; m < h.length; m++) e.push([C, h[m], d])
                }
            }

            function P(t, e, n) {
                for (var r = 0; r < n.length; r++) {
                    var i = n[r];
                    if ("querySelectorAll" in i) {
                        e.push([I, i]);
                        for (var o = i.querySelectorAll("*"), s = 0; s < o.length; s++) e.push([I, o[s]])
                    }
                }
            }

            function R(t, e, n) {
                if (S(n))
                    for (var r = t.selectorSet.matches(n), i = 0; i < r.length; i++) {
                        var o = r[i].data;
                        e.push([C, n, o])
                    }
                if ("querySelectorAll" in n) {
                    var s = y.get(n);
                    if (s)
                        for (var a = 0; a < s.length; a++) {
                            var c = t.observers[s[a]];
                            c && (t.selectorSet.matchesSelector(n, c.selector) || e.push([N, n, c]))
                        }
                }
            }
            var O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                _ = 0;

            function q(t) {
                this.rootNode = 9 === t.nodeType ? t.documentElement : t, this.ownerDocument = 9 === t.nodeType ? t : t.ownerDocument, this.observers = [], this.selectorSet = new e, this.mutationObserver = new MutationObserver(W.bind(this, this)), this._scheduleAddRootNodes = p(this.ownerDocument, B.bind(this, this)), this._handleThrottledChangedTargets = p(this.ownerDocument, j.bind(this, this)), this.rootNode.addEventListener("change", $.bind(this, this), !1),
                    function(t, e) {
                        var n = t.readyState;
                        "interactive" === n || "complete" === n ? g(t, e) : t.addEventListener("DOMContentLoaded", g(t, e))
                    }(this.ownerDocument, F.bind(this, this))
            }

            function F(t) {
                t.mutationObserver.observe(t.rootNode, {
                    childList: !0,
                    attributes: !0,
                    subtree: !0
                }), t._scheduleAddRootNodes()
            }

            function B(t) {
                var e = [];
                H(t, e, [t.rootNode]), x(t, e)
            }

            function W(t, e) {
                var n = [];
                D(t, n, e), x(t, n)
            }

            function $(t, e) {
                t._handleThrottledChangedTargets(e.target)
            }

            function j(t, e) {
                var n = [];
                ! function(t, e, n) {
                    for (var r = 0; r < n.length; r++)
                        for (var i = n[r], o = i.form ? i.form.elements : t.rootNode.querySelectorAll("input"), s = 0; s < o.length; s++) R(t, e, o[s])
                }(t, n, e), x(t, n)
            }
            q.prototype.disconnect = function() {
                this.mutationObserver.disconnect()
            }, q.prototype.observe = function(t, e) {
                var n = void 0;
                "function" == typeof e ? n = {
                    selector: t,
                    initialize: e
                } : "object" === (void 0 === e ? "undefined" : O(e)) ? (n = e).selector = t : n = t;
                var r = this,
                    i = {
                        id: _++,
                        selector: n.selector,
                        initialize: n.initialize,
                        add: n.add,
                        remove: n.remove,
                        subscribe: n.subscribe,
                        elements: [],
                        elementConstructor: n.hasOwnProperty("constructor") ? n.constructor : this.ownerDocument.defaultView.Element,
                        abort: function() {
                            r._abortObserving(i)
                        }
                    };
                return this.selectorSet.add(i.selector, i), this.observers[i.id] = i, this._scheduleAddRootNodes(), i
            }, q.prototype._abortObserving = function(t) {
                for (var e = t.elements, n = 0; n < e.length; n++) T(t, e[n]);
                this.selectorSet.remove(t.selector, t), delete this.observers[t.id]
            }, q.prototype.triggerObservers = function(t) {
                var e = [];
                ! function(t, e, n) {
                    if ("querySelectorAll" in n) {
                        R(t, e, n);
                        for (var r = n.querySelectorAll("*"), i = 0; i < r.length; i++) R(t, e, r[i])
                    }
                }(this, e, t), x(this, e)
            };
            var V = void 0;

            function U() {
                return V || (V = new q(window.document)), V
            }
            const z = new WeakMap,
                K = t => (...e) => {
                    const n = t(...e);
                    return z.set(n, !0), n
                },
                Y = t => "function" == typeof t && z.has(t),
                X = void 0 !== window.customElements && void 0 !== window.customElements.polyfillWrapFlushCallback,
                G = (t, e, n = null) => {
                    for (; e !== n;) {
                        const n = e.nextSibling;
                        t.removeChild(e), e = n
                    }
                },
                Q = {},
                J = {},
                Z = `{{lit-${String(Math.random()).slice(2)}}}`,
                tt = `\x3c!--${Z}--\x3e`,
                et = new RegExp(`${Z}|${tt}`),
                nt = "$lit$";
            class Template {
                constructor(t, e) {
                    this.parts = [], this.element = e;
                    const n = [],
                        r = [],
                        i = document.createTreeWalker(e.content, 133, null, !1);
                    let o = 0,
                        s = -1,
                        a = 0;
                    const {
                        strings: c,
                        values: {
                            length: l
                        }
                    } = t;
                    for (; a < l;) {
                        const t = i.nextNode();
                        if (null !== t) {
                            if (s++, 1 === t.nodeType) {
                                if (t.hasAttributes()) {
                                    const e = t.attributes,
                                        {
                                            length: n
                                        } = e;
                                    let r = 0;
                                    for (let t = 0; t < n; t++) rt(e[t].name, nt) && r++;
                                    for (; r-- > 0;) {
                                        const e = c[a],
                                            n = st.exec(e)[2],
                                            r = n.toLowerCase() + nt,
                                            i = t.getAttribute(r);
                                        t.removeAttribute(r);
                                        const o = i.split(et);
                                        this.parts.push({
                                            type: "attribute",
                                            index: s,
                                            name: n,
                                            strings: o
                                        }), a += o.length - 1
                                    }
                                }
                                "TEMPLATE" === t.tagName && (r.push(t), i.currentNode = t.content)
                            } else if (3 === t.nodeType) {
                                const e = t.data;
                                if (e.indexOf(Z) >= 0) {
                                    const r = t.parentNode,
                                        i = e.split(et),
                                        o = i.length - 1;
                                    for (let e = 0; e < o; e++) {
                                        let n, o = i[e];
                                        if ("" === o) n = ot();
                                        else {
                                            const t = st.exec(o);
                                            null !== t && rt(t[2], nt) && (o = o.slice(0, t.index) + t[1] + t[2].slice(0, -nt.length) + t[3]), n = document.createTextNode(o)
                                        }
                                        r.insertBefore(n, t), this.parts.push({
                                            type: "node",
                                            index: ++s
                                        })
                                    }
                                    "" === i[o] ? (r.insertBefore(ot(), t), n.push(t)) : t.data = i[o], a += o
                                }
                            } else if (8 === t.nodeType)
                                if (t.data === Z) {
                                    const e = t.parentNode;
                                    null !== t.previousSibling && s !== o || (s++, e.insertBefore(ot(), t)), o = s, this.parts.push({
                                        type: "node",
                                        index: s
                                    }), null === t.nextSibling ? t.data = "" : (n.push(t), s--), a++
                                } else {
                                    let e = -1;
                                    for (; - 1 !== (e = t.data.indexOf(Z, e + 1));) this.parts.push({
                                        type: "node",
                                        index: -1
                                    }), a++
                                }
                        } else i.currentNode = r.pop()
                    }
                    for (const u of n) u.parentNode.removeChild(u)
                }
            }
            const rt = (t, e) => {
                    const n = t.length - e.length;
                    return n >= 0 && t.slice(n) === e
                },
                it = t => -1 !== t.index,
                ot = () => document.createComment(""),
                st = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            class TemplateInstance {
                constructor(t, e, n) {
                    this.__parts = [], this.template = t, this.processor = e, this.options = n
                }
                update(t) {
                    let e = 0;
                    for (const n of this.__parts) void 0 !== n && n.setValue(t[e]), e++;
                    for (const n of this.__parts) void 0 !== n && n.commit()
                }
                _clone() {
                    const t = X ? this.template.element.content.cloneNode(!0) : document.importNode(this.template.element.content, !0),
                        e = [],
                        n = this.template.parts,
                        r = document.createTreeWalker(t, 133, null, !1);
                    let i, o = 0,
                        s = 0,
                        a = r.nextNode();
                    for (; o < n.length;)
                        if (i = n[o], it(i)) {
                            for (; s < i.index;) s++, "TEMPLATE" === a.nodeName && (e.push(a), r.currentNode = a.content), null === (a = r.nextNode()) && (r.currentNode = e.pop(), a = r.nextNode());
                            if ("node" === i.type) {
                                const t = this.processor.handleTextExpression(this.options);
                                t.insertAfterNode(a.previousSibling), this.__parts.push(t)
                            } else this.__parts.push(...this.processor.handleAttributeExpressions(a, i.name, i.strings, this.options));
                            o++
                        } else this.__parts.push(void 0), o++;
                    return X && (document.adoptNode(t), customElements.upgrade(t)), t
                }
            }
            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            const at = ` ${Z} `;
            class TemplateResult {
                constructor(t, e, n, r) {
                    this.strings = t, this.values = e, this.type = n, this.processor = r
                }
                getHTML() {
                    const t = this.strings.length - 1;
                    let e = "",
                        n = !1;
                    for (let r = 0; r < t; r++) {
                        const t = this.strings[r],
                            i = t.lastIndexOf("\x3c!--");
                        n = (i > -1 || n) && -1 === t.indexOf("--\x3e", i + 1);
                        const o = st.exec(t);
                        e += null === o ? t + (n ? at : tt) : t.substr(0, o.index) + o[1] + o[2] + nt + o[3] + Z
                    }
                    return e += this.strings[t], e
                }
                getTemplateElement() {
                    const t = document.createElement("template");
                    return t.innerHTML = this.getHTML(), t
                }
            }
            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            const ct = t => null === t || !("object" == typeof t || "function" == typeof t),
                lt = t => Array.isArray(t) || !(!t || !t[Symbol.iterator]);
            class AttributeCommitter {
                constructor(t, e, n) {
                    this.dirty = !0, this.element = t, this.name = e, this.strings = n, this.parts = [];
                    for (let r = 0; r < n.length - 1; r++) this.parts[r] = this._createPart()
                }
                _createPart() {
                    return new AttributePart(this)
                }
                _getValue() {
                    const t = this.strings,
                        e = t.length - 1;
                    let n = "";
                    for (let r = 0; r < e; r++) {
                        n += t[r];
                        const e = this.parts[r];
                        if (void 0 !== e) {
                            const t = e.value;
                            if (ct(t) || !lt(t)) n += "string" == typeof t ? t : String(t);
                            else
                                for (const e of t) n += "string" == typeof e ? e : String(e)
                        }
                    }
                    return n += t[e], n
                }
                commit() {
                    this.dirty && (this.dirty = !1, this.element.setAttribute(this.name, this._getValue()))
                }
            }
            class AttributePart {
                constructor(t) {
                    this.value = void 0, this.committer = t
                }
                setValue(t) {
                    t === Q || ct(t) && t === this.value || (this.value = t, Y(t) || (this.committer.dirty = !0))
                }
                commit() {
                    for (; Y(this.value);) {
                        const t = this.value;
                        this.value = Q, t(this)
                    }
                    this.value !== Q && this.committer.commit()
                }
            }
            class NodePart {
                constructor(t) {
                    this.value = void 0, this.__pendingValue = void 0, this.options = t
                }
                appendInto(t) {
                    this.startNode = t.appendChild(ot()), this.endNode = t.appendChild(ot())
                }
                insertAfterNode(t) {
                    this.startNode = t, this.endNode = t.nextSibling
                }
                appendIntoPart(t) {
                    t.__insert(this.startNode = ot()), t.__insert(this.endNode = ot())
                }
                insertAfterPart(t) {
                    t.__insert(this.startNode = ot()), this.endNode = t.endNode, t.endNode = this.startNode
                }
                setValue(t) {
                    this.__pendingValue = t
                }
                commit() {
                    for (; Y(this.__pendingValue);) {
                        const t = this.__pendingValue;
                        this.__pendingValue = Q, t(this)
                    }
                    const t = this.__pendingValue;
                    t !== Q && (ct(t) ? t !== this.value && this.__commitText(t) : t instanceof TemplateResult ? this.__commitTemplateResult(t) : t instanceof Node ? this.__commitNode(t) : lt(t) ? this.__commitIterable(t) : t === J ? (this.value = J, this.clear()) : this.__commitText(t))
                }
                __insert(t) {
                    this.endNode.parentNode.insertBefore(t, this.endNode)
                }
                __commitNode(t) {
                    this.value !== t && (this.clear(), this.__insert(t), this.value = t)
                }
                __commitText(t) {
                    const e = this.startNode.nextSibling,
                        n = "string" == typeof(t = null == t ? "" : t) ? t : String(t);
                    e === this.endNode.previousSibling && 3 === e.nodeType ? e.data = n : this.__commitNode(document.createTextNode(n)), this.value = t
                }
                __commitTemplateResult(t) {
                    const e = this.options.templateFactory(t);
                    if (this.value instanceof TemplateInstance && this.value.template === e) this.value.update(t.values);
                    else {
                        const n = new TemplateInstance(e, t.processor, this.options),
                            r = n._clone();
                        n.update(t.values), this.__commitNode(r), this.value = n
                    }
                }
                __commitIterable(t) {
                    Array.isArray(this.value) || (this.value = [], this.clear());
                    const e = this.value;
                    let n, r = 0;
                    for (const i of t) n = e[r], void 0 === n && (n = new NodePart(this.options), e.push(n), 0 === r ? n.appendIntoPart(this) : n.insertAfterPart(e[r - 1])), n.setValue(i), n.commit(), r++;
                    r < e.length && (e.length = r, this.clear(n && n.endNode))
                }
                clear(t = this.startNode) {
                    G(this.startNode.parentNode, t.nextSibling, this.endNode)
                }
            }
            class BooleanAttributePart {
                constructor(t, e, n) {
                    if (this.value = void 0, this.__pendingValue = void 0, 2 !== n.length || "" !== n[0] || "" !== n[1]) throw new Error("Boolean attributes can only contain a single expression");
                    this.element = t, this.name = e, this.strings = n
                }
                setValue(t) {
                    this.__pendingValue = t
                }
                commit() {
                    for (; Y(this.__pendingValue);) {
                        const t = this.__pendingValue;
                        this.__pendingValue = Q, t(this)
                    }
                    if (this.__pendingValue === Q) return;
                    const t = !!this.__pendingValue;
                    this.value !== t && (t ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name), this.value = t), this.__pendingValue = Q
                }
            }
            class PropertyCommitter extends AttributeCommitter {
                constructor(t, e, n) {
                    super(t, e, n), this.single = 2 === n.length && "" === n[0] && "" === n[1]
                }
                _createPart() {
                    return new PropertyPart(this)
                }
                _getValue() {
                    return this.single ? this.parts[0].value : super._getValue()
                }
                commit() {
                    this.dirty && (this.dirty = !1, this.element[this.name] = this._getValue())
                }
            }
            class PropertyPart extends AttributePart {}
            let ut = !1;
            try {
                const t = {
                    get capture() {
                        return ut = !0, !1
                    }
                };
                window.addEventListener("test", t, t), window.removeEventListener("test", t, t)
            } catch (Xo) {}
            class EventPart {
                constructor(t, e, n) {
                    this.value = void 0, this.__pendingValue = void 0, this.element = t, this.eventName = e, this.eventContext = n, this.__boundHandleEvent = t => this.handleEvent(t)
                }
                setValue(t) {
                    this.__pendingValue = t
                }
                commit() {
                    for (; Y(this.__pendingValue);) {
                        const t = this.__pendingValue;
                        this.__pendingValue = Q, t(this)
                    }
                    if (this.__pendingValue === Q) return;
                    const t = this.__pendingValue,
                        e = this.value,
                        n = null == t || null != e && (t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive),
                        r = null != t && (null == e || n);
                    n && this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options), r && (this.__options = dt(t), this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options)), this.value = t, this.__pendingValue = Q
                }
                handleEvent(t) {
                    "function" == typeof this.value ? this.value.call(this.eventContext || this.element, t) : this.value.handleEvent(t)
                }
            }
            const dt = t => t && (ut ? {
                capture: t.capture,
                passive: t.passive,
                once: t.once
            } : t.capture)
            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            ;
            const ht = new class DefaultTemplateProcessor {
                handleAttributeExpressions(t, e, n, r) {
                    const i = e[0];
                    if ("." === i) {
                        return new PropertyCommitter(t, e.slice(1), n).parts
                    }
                    if ("@" === i) return [new EventPart(t, e.slice(1), r.eventContext)];
                    if ("?" === i) return [new BooleanAttributePart(t, e.slice(1), n)];
                    return new AttributeCommitter(t, e, n).parts
                }
                handleTextExpression(t) {
                    return new NodePart(t)
                }
            };
            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            function mt(t) {
                let e = ft.get(t.type);
                void 0 === e && (e = {
                    stringsArray: new WeakMap,
                    keyString: new Map
                }, ft.set(t.type, e));
                let n = e.stringsArray.get(t.strings);
                if (void 0 !== n) return n;
                const r = t.strings.join(Z);
                return n = e.keyString.get(r), void 0 === n && (n = new Template(t, t.getTemplateElement()), e.keyString.set(r, n)), e.stringsArray.set(t.strings, n), n
            }
            const ft = new Map,
                pt = new WeakMap;
            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            t("b", ((t, e, n) => {
                let r = pt.get(e);
                void 0 === r && (G(e, e.firstChild), pt.set(e, r = new NodePart(Object.assign({
                    templateFactory: mt
                }, n))), r.appendInto(e)), r.setValue(t), r.commit()
            }));
            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            (window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.1.2");
            t("d", ((t, ...e) => new TemplateResult(t, e, "html", ht)));
            var gt = {},
                vt = {},
                bt = new WeakMap,
                Et = new WeakMap,
                wt = new WeakMap,
                yt = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");

            function xt(t, e, n) {
                var r = t[e];
                return t[e] = function() {
                    return n.apply(t, arguments), r.apply(t, arguments)
                }, t
            }

            function kt() {
                bt.set(this, !0)
            }

            function At() {
                bt.set(this, !0), Et.set(this, !0)
            }

            function Tt() {
                return wt.get(this) || null
            }

            function Lt(t, e) {
                yt && Object.defineProperty(t, "currentTarget", {
                    configurable: !0,
                    enumerable: !0,
                    get: e || yt.get
                })
            }

            function Mt(t) {
                if (function(t) {
                        try {
                            return t.eventPhase, !0
                        } catch (e) {
                            return !1
                        }
                    }(t)) {
                    var e = (1 === t.eventPhase ? vt : gt)[t.type];
                    if (e) {
                        var n = function(t, e, n) {
                            var r = [],
                                i = e;
                            do {
                                if (1 !== i.nodeType) break;
                                var o = t.matches(i);
                                if (o.length) {
                                    var s = {
                                        node: i,
                                        observers: o
                                    };
                                    n ? r.unshift(s) : r.push(s)
                                }
                            } while (i = i.parentElement);
                            return r
                        }(e, t.target, 1 === t.eventPhase);
                        if (n.length) {
                            xt(t, "stopPropagation", kt), xt(t, "stopImmediatePropagation", At), Lt(t, Tt);
                            for (var r = 0, i = n.length; r < i && !bt.get(t); r++) {
                                var o = n[r];
                                wt.set(t, o.node);
                                for (var s = 0, a = o.observers.length; s < a && !Et.get(t); s++) o.observers[s].data.call(o.node, t)
                            }
                            wt.delete(t), Lt(t)
                        }
                    }
                }
            }
            class Leaf {
                constructor(t) {
                    this.children = [], this.parent = t
                }
                delete(t) {
                    const e = this.children.indexOf(t);
                    return -1 !== e && (this.children = this.children.slice(0, e).concat(this.children.slice(e + 1)), 0 === this.children.length && this.parent.delete(this), !0)
                }
                add(t) {
                    return this.children.push(t), this
                }
            }
            class RadixTrie {
                constructor(t) {
                    this.parent = null, this.children = {}, this.parent = t || null
                }
                get(t) {
                    return this.children[t]
                }
                insert(t) {
                    let e = this;
                    for (let n = 0; n < t.length; n += 1) {
                        const r = t[n];
                        let i = e.get(r);
                        if (n === t.length - 1) return i instanceof RadixTrie && (e.delete(i), i = null), i || (i = new Leaf(e), e.children[r] = i), i;
                        i instanceof Leaf && (i = null), i || (i = new RadixTrie(e), e.children[r] = i), e = i
                    }
                    return e
                }
                delete(t) {
                    for (const e in this.children) {
                        if (this.children[e] === t) {
                            const t = delete this.children[e];
                            return 0 === Object.keys(this.children).length && this.parent && this.parent.delete(this), t
                        }
                    }
                    return !1
                }
            }

            function St(t) {
                if (!(t instanceof HTMLElement)) return !1;
                const e = t.nodeName.toLowerCase(),
                    n = (t.getAttribute("type") || "").toLowerCase();
                return "select" === e || "textarea" === e || "input" === e && "submit" !== n && "reset" !== n && "checkbox" !== n && "radio" !== n || t.isContentEditable
            }

            function Ct(t) {
                return `${t.ctrlKey?"Control+":""}${t.altKey?"Alt+":""}${t.metaKey?"Meta+":""}${t.shiftKey&&t.key.toUpperCase()!==t.key?"Shift+":""}${t.key}`
            }
            const Nt = new RadixTrie,
                It = new WeakMap;
            let Dt = Nt,
                Ht = null;

            function Pt() {
                Ht = null, Dt = Nt
            }

            function Rt(t) {
                if (t.defaultPrevented) return;
                if (t.target instanceof Node && St(t.target)) return;
                null != Ht && window.clearTimeout(Ht), Ht = window.setTimeout(Pt, 1500);
                const e = Dt.get(Ct(t));
                if (e) return Dt = e, e instanceof Leaf ? (function(t) {
                    St(t) ? t.focus() : t.click()
                }(e.children[e.children.length - 1]), t.preventDefault(), void Pt()) : void 0;
                Pt()
            }
            const Ot = new WeakSet;
            const _t = new WeakMap;

            function qt(t = document) {
                if (_t.has(t)) return _t.get(t);
                let e = !1;
                const n = new MutationObserver((t => {
                    for (const e of t)
                        if ("attributes" === e.type && e.target instanceof Element) $t(e.target);
                        else if ("childList" === e.type && e.addedNodes.length)
                        for (const t of e.addedNodes) t instanceof Element && Ft(t)
                }));
                n.observe(t, {
                    childList: !0,
                    subtree: !0,
                    attributeFilter: ["data-action"]
                });
                const r = {
                    get closed() {
                        return e
                    },
                    unsubscribe() {
                        e = !0, _t.delete(t), n.disconnect()
                    }
                };
                return _t.set(t, r), r
            }

            function Ft(t) {
                for (const e of t.querySelectorAll("[data-action]")) $t(e);
                t instanceof Element && t.hasAttribute("data-action") && $t(t)
            }

            function Bt(t) {
                const e = t.currentTarget;
                for (const n of Wt(e))
                    if (t.type === n.type) {
                        const r = e.closest(n.tag);
                        Ot.has(r) && "function" == typeof r[n.method] && r[n.method](t);
                        const i = e.getRootNode();
                        if (i instanceof ShadowRoot && Ot.has(i.host) && i.host.matches(n.tag)) {
                            const e = i.host;
                            "function" == typeof e[n.method] && e[n.method](t)
                        }
                    }
            }

            function* Wt(t) {
                for (const e of (t.getAttribute("data-action") || "").trim().split(/\s+/)) {
                    const t = e.lastIndexOf(":"),
                        n = e.lastIndexOf("#");
                    yield {
                        type: e.slice(0, t),
                        tag: e.slice(t + 1, n),
                        method: e.slice(n + 1)
                    }
                }
            }

            function $t(t) {
                for (const e of Wt(t)) t.addEventListener(e.type, Bt)
            }

            function jt(t, e) {
                const n = t.tagName.toLowerCase();
                if (t.shadowRoot)
                    for (const r of t.shadowRoot.querySelectorAll(`[data-target~="${n}.${e}"]`))
                        if (!r.closest(n)) return r;
                for (const r of t.querySelectorAll(`[data-target~="${n}.${e}"]`))
                    if (r.closest(n) === t) return r
            }
            const Vt = new WeakMap;

            function Ut(t) {
                return ("data-" + t.replace(/([A-Z]($|[a-z]))/g, "-$1")).replace(/--/g, "-").toLowerCase()
            }
            const zt = new WeakMap,
                Kt = 2147483647;
            t("u", K(((...t) => e => {
                let n = zt.get(e);
                void 0 === n && (n = {
                    lastRenderedIndex: Kt,
                    values: []
                }, zt.set(e, n));
                const r = n.values;
                let i = r.length;
                n.values = t;
                for (let o = 0; o < t.length && !(o > n.lastRenderedIndex); o++) {
                    const s = t[o];
                    if (ct(s) || "function" != typeof s.then) {
                        e.setValue(s), n.lastRenderedIndex = o;
                        break
                    }
                    o < i && s === r[o] || (n.lastRenderedIndex = Kt, i = 0, Promise.resolve(s).then((t => {
                        const r = n.values.indexOf(s);
                        r > -1 && r < n.lastRenderedIndex && (n.lastRenderedIndex = r, e.setValue(t), e.commit())
                    })))
                }
            })));

            function Yt(t, e = 0, {
                start: n = !0,
                middle: r = !0,
                once: i = !1
            } = {}) {
                let o, s = 0,
                    a = !1;

                function c(...l) {
                    if (a) return;
                    const u = Date.now() - s;
                    s = Date.now(), n ? (n = !1, t.apply(this, l), i && c.cancel()) : (r && u < e || !r) && (clearTimeout(o), o = setTimeout((() => {
                        s = Date.now(), t.apply(this, l), i && c.cancel()
                    }), r ? e - u : e))
                }
                return c.cancel = () => {
                    clearTimeout(o), a = !0
                }, c
            }

            function Xt(t, e = 0, {
                start: n = !1,
                middle: r = !1,
                once: i = !1
            } = {}) {
                return Yt(t, e, {
                    start: n,
                    middle: r,
                    once: i
                })
            }

            function* Gt(t) {
                let e = "",
                    n = 0,
                    r = !1;
                for (let i = 0; i < t.length; i += 1) "{" !== t[i] || "{" !== t[i + 1] || "\\" === t[i - 1] || r ? "}" === t[i] && "}" === t[i + 1] && "\\" !== t[i - 1] && r && (r = !1, yield {
                    type: "part",
                    start: n,
                    end: i + 2,
                    value: e.slice(2).trim()
                }, e = "", i += 2, n = i) : (r = !0, e && (yield {
                    type: "string",
                    start: n,
                    end: i,
                    value: e
                }), e = "{{", n = i, i += 2), e += t[i] || "";
                e && (yield {
                    type: "string",
                    start: n,
                    end: t.length,
                    value: e
                })
            }
            var Qt, Jt, Zt = function(t, e, n) {
                    if (!e.has(t)) throw new TypeError("attempted to set private field on non-instance");
                    return e.set(t, n), n
                },
                te = function(t, e) {
                    if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                    return e.get(t)
                };
            class AttributeTemplatePart {
                constructor(t, e) {
                    this.expression = e, Qt.set(this, void 0), Jt.set(this, ""), Zt(this, Qt, t), te(this, Qt).updateParent("")
                }
                get attributeName() {
                    return te(this, Qt).attr.name
                }
                get attributeNamespace() {
                    return te(this, Qt).attr.namespaceURI
                }
                get value() {
                    return te(this, Jt)
                }
                set value(t) {
                    Zt(this, Jt, t || ""), te(this, Qt).updateParent(t)
                }
                get element() {
                    return te(this, Qt).element
                }
                get booleanValue() {
                    return te(this, Qt).booleanValue
                }
                set booleanValue(t) {
                    te(this, Qt).booleanValue = t
                }
            }
            Qt = new WeakMap, Jt = new WeakMap;
            class AttributeValueSetter {
                constructor(t, e) {
                    this.element = t, this.attr = e, this.partList = []
                }
                get booleanValue() {
                    return this.element.hasAttributeNS(this.attr.namespaceURI, this.attr.name)
                }
                set booleanValue(t) {
                    if (1 !== this.partList.length) throw new DOMException("Operation not supported", "NotSupportedError");
                    this.partList[0].value = t ? "" : null
                }
                append(t) {
                    this.partList.push(t)
                }
                updateParent(t) {
                    if (1 === this.partList.length && null === t) this.element.removeAttributeNS(this.attr.namespaceURI, this.attr.name);
                    else {
                        const t = this.partList.map((t => "string" == typeof t ? t : t.value)).join("");
                        this.element.setAttributeNS(this.attr.namespaceURI, this.attr.name, t)
                    }
                }
            }
            var ee, ne = function(t, e, n) {
                    if (!e.has(t)) throw new TypeError("attempted to set private field on non-instance");
                    return e.set(t, n), n
                },
                re = function(t, e) {
                    if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                    return e.get(t)
                };
            class NodeTemplatePart {
                constructor(t, e) {
                    this.expression = e, ee.set(this, void 0), ne(this, ee, [t]), t.textContent = ""
                }
                get value() {
                    return re(this, ee).map((t => t.textContent)).join("")
                }
                set value(t) {
                    this.replace(t)
                }
                get previousSibling() {
                    return re(this, ee)[0].previousSibling
                }
                get nextSibling() {
                    return re(this, ee)[re(this, ee).length - 1].nextSibling
                }
                replace(...t) {
                    const e = t.map((t => "string" == typeof t ? new Text(t) : t));
                    e.length || e.push(new Text("")), re(this, ee)[0].before(...e);
                    for (const n of re(this, ee)) n.remove();
                    ne(this, ee, e)
                }
            }

            function ie(t) {
                return {
                    createCallback(t, e, n) {
                        this.processCallback(t, e, n)
                    },
                    processCallback(e, n, r) {
                        var i;
                        if ("object" == typeof r && r)
                            for (const o of n)
                                if (o.expression in r) {
                                    const e = null !== (i = r[o.expression]) && void 0 !== i ? i : "";
                                    t(o, e)
                                }
                    }
                }
            }

            function oe(t, e) {
                t.value = String(e)
            }

            function se(t, e) {
                return "boolean" == typeof e && t instanceof AttributeTemplatePart && "boolean" == typeof t.element[t.attributeName] && (t.booleanValue = e, !0)
            }
            ee = new WeakMap;
            const ae = ie(oe);
            t("p", ie(((t, e) => {
                se(t, e) || oe(t, e)
            })));
            var ce, le, ue = function(t, e, n) {
                    if (!e.has(t)) throw new TypeError("attempted to set private field on non-instance");
                    return e.set(t, n), n
                },
                de = function(t, e) {
                    if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance");
                    return e.get(t)
                };
            class TemplateInstance$1 extends DocumentFragment {
                constructor(t, e, n = ae) {
                    var r, i;
                    super(), ce.set(this, void 0), le.set(this, void 0), Object.getPrototypeOf(this !== TemplateInstance$1.prototype) && Object.setPrototypeOf(this, TemplateInstance$1.prototype), this.appendChild(t.content.cloneNode(!0)), ue(this, le, Array.from(function*(t) {
                        const e = t.ownerDocument.createTreeWalker(t, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, null, !1);
                        let n;
                        for (; n = e.nextNode();)
                            if (n instanceof Element && n.hasAttributes())
                                for (let t = 0; t < n.attributes.length; t += 1) {
                                    const e = n.attributes.item(t);
                                    if (e && e.value.includes("{{")) {
                                        const t = new AttributeValueSetter(n, e);
                                        for (const n of Gt(e.value))
                                            if ("string" === n.type) t.append(n.value);
                                            else {
                                                const e = new AttributeTemplatePart(t, n.value);
                                                t.append(e), yield e
                                            }
                                    }
                                } else if (n instanceof Text && n.textContent && n.textContent.includes("{{"))
                                    for (const t of Gt(n.textContent)) {
                                        t.end < n.textContent.length && n.splitText(t.end), "part" === t.type && (yield new NodeTemplatePart(n, t.value));
                                        break
                                    }
                    }(this))), ue(this, ce, n), null === (i = (r = de(this, ce)).createCallback) || void 0 === i || i.call(r, this, de(this, le), e)
                }
                update(t) {
                    de(this, ce).processCallback(this, de(this, le), t)
                }
            }
            t("i", TemplateInstance$1), ce = new WeakMap, le = new WeakMap;
            class ErrorWithResponse extends Error {
                constructor(t, e) {
                    super(t), this.response = e
                }
            }

            function he() {
                let t, e;
                return [new Promise((function(n, r) {
                    t = n, e = r
                })), t, e]
            }
            let me;
            const fe = [],
                pe = [];

            function ge(t) {
                if (!(t.target instanceof HTMLFormElement)) return;
                const e = t.target,
                    n = function(t) {
                        const e = [];
                        for (const n of me.keys())
                            if (t.matches(n)) {
                                const t = me.get(n) || [];
                                e.push(...t)
                            }
                        return e
                    }(e);
                if (0 === n.length) return;
                const r = function(t) {
                        const e = {
                            method: t.method || "GET",
                            url: t.action,
                            headers: new Headers({
                                "X-Requested-With": "XMLHttpRequest"
                            }),
                            body: null
                        };
                        if ("GET" === e.method.toUpperCase()) {
                            const n = function(t) {
                                const e = new URLSearchParams,
                                    n = new FormData(t).entries();
                                for (const [r, i] of [...n]) e.append(r, i.toString());
                                return e.toString()
                            }(t);
                            n && (e.url += (~e.url.indexOf("?") ? "&" : "?") + n)
                        } else e.body = new FormData(t);
                        return e
                    }(e),
                    [i, o, s] = he();
                t.preventDefault(), async function(t, e, n, r) {
                    let i = !1;
                    for (const o of t) {
                        const [t, s] = he(), a = () => (i = !0, s(), r), c = {
                            text: a,
                            json: () => (n.headers.set("Accept", "application/json"), a()),
                            html: () => (n.headers.set("Accept", "text/html"), a())
                        };
                        await Promise.race([t, o(e, c, n)])
                    }
                    return i
                }(n, e, r, i).then((async t => {
                    if (t) {
                        for (const t of pe) await t(e);
                        (async function(t) {
                            const e = await window.fetch(t.url, {
                                    method: t.method,
                                    body: null !== t.body ? t.body : void 0,
                                    headers: t.headers,
                                    credentials: "same-origin"
                                }),
                                n = {
                                    url: e.url,
                                    status: e.status,
                                    statusText: e.statusText,
                                    headers: e.headers,
                                    text: "",
                                    get json() {
                                        const t = this,
                                            e = JSON.parse(t.text);
                                        return delete t.json, t.json = e, t.json
                                    },
                                    get html() {
                                        const t = this;
                                        return delete t.html, t.html = function(t, e) {
                                            const n = t.createElement("template");
                                            return n.innerHTML = e, t.importNode(n.content, !0)
                                        }(document, t.text), t.html
                                    }
                                },
                                r = await e.text();
                            if (n.text = r, e.ok) return n;
                            throw new ErrorWithResponse("request failed", n)
                        })(r).then(o, s).catch((() => {})).then((() => {
                            for (const t of fe) t(e)
                        }))
                    } else e.submit()
                }), (t => {
                    e.submit(), setTimeout((() => {
                        throw t
                    }))
                }))
            }
            const ve = "data-close-dialog",
                be = `[${ve}]`;

            function Ee(t) {
                let e = Array.from(t.querySelectorAll("[autofocus]")).filter(ye)[0];
                e || (e = t, t.setAttribute("tabindex", "-1")), e.focus()
            }

            function we(t) {
                const e = t.currentTarget;
                e instanceof Element && ("Escape" === t.key || "Esc" === t.key ? (Te(e, !1), t.stopPropagation()) : "Tab" === t.key && function(t) {
                    if (!(t.currentTarget instanceof Element)) return;
                    const e = t.currentTarget.querySelector("details-dialog");
                    if (!e) return;
                    t.preventDefault();
                    const n = Array.from(e.querySelectorAll("*")).filter(ye);
                    if (0 === n.length) return;
                    const r = t.shiftKey ? -1 : 1,
                        i = e.getRootNode(),
                        o = e.contains(i.activeElement) ? i.activeElement : null;
                    let s = -1 === r ? -1 : 0;
                    if (o instanceof HTMLElement) {
                        const t = n.indexOf(o); - 1 !== t && (s = t + r)
                    }
                    s < 0 ? s = n.length - 1 : s %= n.length;
                    n[s].focus()
                }(t))
            }

            function ye(t) {
                return t.tabIndex >= 0 && !t.disabled && function(t) {
                    return !t.hidden && (!t.type || "hidden" !== t.type) && (t.offsetWidth > 0 || t.offsetHeight > 0)
                }(t)
            }

            function xe(t) {
                const e = t.querySelector("details-dialog");
                return !(e instanceof DetailsDialogElement) || e.dispatchEvent(new CustomEvent("details-dialog-close", {
                    bubbles: !0,
                    cancelable: !0
                }))
            }

            function ke(t) {
                if (!(t.currentTarget instanceof Element)) return;
                const e = t.currentTarget.closest("details");
                e && e.hasAttribute("open") && (xe(e) || (t.preventDefault(), t.stopPropagation()))
            }

            function Ae(t) {
                const e = t.currentTarget;
                if (!(e instanceof Element)) return;
                const n = e.querySelector("details-dialog");
                if (n instanceof DetailsDialogElement)
                    if (e.hasAttribute("open")) {
                        const t = "getRootNode" in n ? n.getRootNode() : document;
                        t.activeElement instanceof HTMLElement && Ce.set(n, {
                            details: e,
                            activeElement: t.activeElement
                        }), Ee(n), e.addEventListener("keydown", we)
                    } else {
                        for (const e of n.querySelectorAll("form")) e.reset();
                        const t = function(t, e) {
                            const n = Ce.get(e);
                            return n && n.activeElement instanceof HTMLElement ? n.activeElement : t.querySelector("summary")
                        }(e, n);
                        t && t.focus(), e.removeEventListener("keydown", we)
                    }
            }

            function Te(t, e) {
                e !== t.hasAttribute("open") && (e ? t.setAttribute("open", "") : xe(t) && t.removeAttribute("open"))
            }

            function Le(t) {
                const e = t.currentTarget;
                if (!(e instanceof Element)) return;
                const n = e.querySelector("details-dialog");
                if (!(n instanceof DetailsDialogElement)) return;
                const r = n.querySelector("include-fragment:not([src])");
                if (!r) return;
                const i = n.src;
                null !== i && (r.addEventListener("loadend", (() => {
                    e.hasAttribute("open") && Ee(n)
                })), r.setAttribute("src", i), Se(e))
            }

            function Me(t, e, n) {
                Se(t), e && t.addEventListener("toggle", Le, {
                    once: !0
                }), e && n && t.addEventListener("mouseover", Le, {
                    once: !0
                })
            }

            function Se(t) {
                t.removeEventListener("toggle", Le), t.removeEventListener("mouseover", Le)
            }
            const Ce = new WeakMap;
            class DetailsDialogElement extends HTMLElement {
                static get CLOSE_ATTR() {
                    return ve
                }
                static get CLOSE_SELECTOR() {
                    return be
                }
                constructor() {
                    super(), Ce.set(this, {
                        details: null,
                        activeElement: null
                    }), this.addEventListener("click", (function({
                        target: t
                    }) {
                        if (!(t instanceof Element)) return;
                        const e = t.closest("details");
                        e && t.closest(be) && Te(e, !1)
                    }))
                }
                get src() {
                    return this.getAttribute("src")
                }
                set src(t) {
                    this.setAttribute("src", t || "")
                }
                get preload() {
                    return this.hasAttribute("preload")
                }
                set preload(t) {
                    t ? this.setAttribute("preload", "") : this.removeAttribute("preload")
                }
                connectedCallback() {
                    this.setAttribute("role", "dialog"), this.setAttribute("aria-modal", "true");
                    const t = Ce.get(this);
                    if (!t) return;
                    const e = this.parentElement;
                    if (!e) return;
                    const n = e.querySelector("summary");
                    n && (n.hasAttribute("role") || n.setAttribute("role", "button"), n.addEventListener("click", ke, {
                        capture: !0
                    })), e.addEventListener("toggle", Ae), t.details = e, Me(e, this.src, this.preload)
                }
                disconnectedCallback() {
                    const t = Ce.get(this);
                    if (!t) return;
                    const {
                        details: e
                    } = t;
                    if (!e) return;
                    e.removeEventListener("toggle", Ae), Se(e);
                    const n = e.querySelector("summary");
                    n && n.removeEventListener("click", ke, {
                        capture: !0
                    }), t.details = null
                }
                toggle(t) {
                    const e = Ce.get(this);
                    if (!e) return;
                    const {
                        details: n
                    } = e;
                    n && Te(n, t)
                }
                static get observedAttributes() {
                    return ["src", "preload"]
                }
                attributeChangedCallback() {
                    const t = Ce.get(this);
                    if (!t) return;
                    const {
                        details: e
                    } = t;
                    e && Me(e, this.src, this.preload)
                }
            }

            function Ne(t, e = 0, {
                start: n = !1,
                middle: r = !1,
                once: i = !1
            } = {}) {
                return function(t, e = 0, {
                    start: n = !0,
                    middle: r = !0,
                    once: i = !1
                } = {}) {
                    var o, s = 0,
                        a = !1,
                        c = function c(...l) {
                            if (!a) {
                                var u = Date.now() - s;
                                s = Date.now(), n ? (n = !1, t(...l), i && c.cancel()) : (r && u < e || !r) && (clearTimeout(o), o = setTimeout((function() {
                                    s = Date.now(), t(...l), i && c.cancel()
                                }), r ? e - u : e))
                            }
                        };
                    return c.cancel = function() {
                        clearTimeout(o), a = !0
                    }, c
                }(t, e, {
                    start: n,
                    middle: r,
                    once: i
                })
            }
            t("D", DetailsDialogElement), window.customElements.get("details-dialog") || (window.DetailsDialogElement = DetailsDialogElement, window.customElements.define("details-dialog", DetailsDialogElement));
            const Ie = new WeakMap;
            class AutoCheckElement extends HTMLElement {
                connectedCallback() {
                    const t = this.input;
                    if (!t) return;
                    const e = Ne(He.bind(null, this), 300),
                        n = {
                            check: e,
                            controller: null
                        };
                    Ie.set(this, n), t.addEventListener("input", De), t.addEventListener("input", e), t.autocomplete = "off", t.spellcheck = !1
                }
                disconnectedCallback() {
                    const t = this.input;
                    if (!t) return;
                    const e = Ie.get(this);
                    e && (Ie.delete(this), t.removeEventListener("input", De), t.removeEventListener("input", e.check), t.setCustomValidity(""))
                }
                attributeChangedCallback(t) {
                    if ("required" === t) {
                        const t = this.input;
                        if (!t) return;
                        t.required = this.required
                    }
                }
                static get observedAttributes() {
                    return ["required"]
                }
                get input() {
                    return this.querySelector("input")
                }
                get src() {
                    const t = this.getAttribute("src");
                    if (!t) return "";
                    const e = this.ownerDocument.createElement("a");
                    return e.href = t, e.href
                }
                set src(t) {
                    this.setAttribute("src", t)
                }
                get csrf() {
                    const t = this.querySelector("[data-csrf]");
                    return this.getAttribute("csrf") || t instanceof HTMLInputElement && t.value || ""
                }
                set csrf(t) {
                    this.setAttribute("csrf", t)
                }
                get required() {
                    return this.hasAttribute("required")
                }
                set required(t) {
                    t ? this.setAttribute("required", "") : this.removeAttribute("required")
                }
            }

            function De(t) {
                const e = t.currentTarget;
                if (!(e instanceof HTMLInputElement)) return;
                const n = e.closest("auto-check");
                if (!(n instanceof AutoCheckElement)) return;
                const r = n.src,
                    i = n.csrf,
                    o = Ie.get(n);
                if (!r || !i || !o) return;
                let s = "Verifying…";
                e.dispatchEvent(new CustomEvent("auto-check-start", {
                    bubbles: !0,
                    detail: {
                        setValidity: t => s = t
                    }
                })), n.required && e.setCustomValidity(s)
            }
            async function He(t) {
                const e = t.input;
                if (!e) return;
                const n = t.src,
                    r = t.csrf,
                    i = Ie.get(t);
                if (!n || !r || !i) return void(t.required && e.setCustomValidity(""));
                if (!e.value.trim()) return void(t.required && e.setCustomValidity(""));
                const o = new FormData;
                o.append("authenticity_token", r), o.append("value", e.value), e.dispatchEvent(new CustomEvent("auto-check-send", {
                    bubbles: !0,
                    detail: {
                        body: o
                    }
                })), i.controller ? i.controller.abort() : t.dispatchEvent(new CustomEvent("loadstart")), i.controller = "AbortController" in window ? new AbortController : {
                    signal: null,
                    abort() {}
                };
                try {
                    const r = await async function(t, e, n) {
                        try {
                            const r = await fetch(e, n);
                            return t.dispatchEvent(new CustomEvent("load")), t.dispatchEvent(new CustomEvent("loadend")), r
                        } catch (r) {
                            throw "AbortError" !== r.name && (t.dispatchEvent(new CustomEvent("error")), t.dispatchEvent(new CustomEvent("loadend"))), r
                        }
                    }(t, n, {
                        credentials: "same-origin",
                        signal: i.controller.signal,
                        method: "POST",
                        body: o
                    });
                    r.ok ? function(t, e, n) {
                        n && e.setCustomValidity("");
                        e.dispatchEvent(new CustomEvent("auto-check-success", {
                            bubbles: !0,
                            detail: {
                                response: t.clone()
                            }
                        }))
                    }(r, e, t.required) : function(t, e, n) {
                        let r = "Validation failed";
                        const i = t => r = t;
                        e.dispatchEvent(new CustomEvent("auto-check-error", {
                            bubbles: !0,
                            detail: {
                                response: t.clone(),
                                setValidity: i
                            }
                        })), n && e.setCustomValidity(r)
                    }(r, e, t.required), i.controller = null, e.dispatchEvent(new CustomEvent("auto-check-complete", {
                        bubbles: !0
                    }))
                } catch (s) {
                    "AbortError" !== s.name && (i.controller = null, e.dispatchEvent(new CustomEvent("auto-check-complete", {
                        bubbles: !0
                    })))
                }
            }
            window.customElements.get("auto-check") || (window.AutoCheckElement = AutoCheckElement, window.customElements.define("auto-check", AutoCheckElement));
            class DetailsMenuElement extends HTMLElement {
                constructor() {
                    super()
                }
                get preload() {
                    return this.hasAttribute("preload")
                }
                set preload(t) {
                    t ? this.setAttribute("preload", "") : this.removeAttribute("preload")
                }
                get src() {
                    return this.getAttribute("src") || ""
                }
                set src(t) {
                    this.setAttribute("src", t)
                }
                connectedCallback() {
                    this.hasAttribute("role") || this.setAttribute("role", "menu");
                    const t = this.parentElement;
                    if (!t) return;
                    const e = t.querySelector("summary");
                    e && (e.setAttribute("aria-haspopup", "menu"), e.hasAttribute("role") || e.setAttribute("role", "button"));
                    const n = [Oe(t, "compositionstart", (t => ze(this, t))), Oe(t, "compositionend", (t => ze(this, t))), Oe(t, "click", (e => $e(t, this, e))), Oe(t, "change", (e => $e(t, this, e))), Oe(t, "keydown", (e => function(t, e, n) {
                        if (!(n instanceof KeyboardEvent)) return;
                        if (t.querySelector("details[open]")) return;
                        const r = Pe.get(e);
                        if (!r || r.isComposing) return;
                        const i = n.target instanceof Element && "SUMMARY" === n.target.tagName;
                        switch (n.key) {
                            case "Escape":
                                t.hasAttribute("open") && (Ue(t), n.preventDefault(), n.stopPropagation());
                                break;
                            case "ArrowDown":
                                {
                                    i && !t.hasAttribute("open") && t.setAttribute("open", "");
                                    const e = Be(t, !0);e && e.focus(),
                                    n.preventDefault()
                                }
                                break;
                            case "ArrowUp":
                                {
                                    i && !t.hasAttribute("open") && t.setAttribute("open", "");
                                    const e = Be(t, !1);e && e.focus(),
                                    n.preventDefault()
                                }
                                break;
                            case "n":
                                if (We && n.ctrlKey) {
                                    const e = Be(t, !0);
                                    e && e.focus(), n.preventDefault()
                                }
                                break;
                            case "p":
                                if (We && n.ctrlKey) {
                                    const e = Be(t, !1);
                                    e && e.focus(), n.preventDefault()
                                }
                                break;
                            case " ":
                            case "Enter":
                                {
                                    const e = document.activeElement;e instanceof HTMLElement && Ve(e) && e.closest("details") === t && (n.preventDefault(), n.stopPropagation(), e.click())
                                }
                        }
                    }(t, this, e))), Oe(t, "toggle", (() => _e(t, this)), {
                        once: !0
                    }), Oe(t, "toggle", (() => function(t) {
                        if (!t.hasAttribute("open")) return;
                        for (const e of document.querySelectorAll("details[open] > details-menu")) {
                            const n = e.closest("details");
                            n && n !== t && !n.contains(t) && n.removeAttribute("open")
                        }
                    }(t))), this.preload ? Oe(t, "mouseover", (() => _e(t, this)), {
                        once: !0
                    }) : Re, ...qe(t)];
                    Pe.set(this, {
                        subscriptions: n,
                        loaded: !1,
                        isComposing: !1
                    })
                }
                disconnectedCallback() {
                    const t = Pe.get(this);
                    if (t) {
                        Pe.delete(this);
                        for (const e of t.subscriptions) e.unsubscribe()
                    }
                }
            }
            const Pe = new WeakMap,
                Re = {
                    unsubscribe() {}
                };

            function Oe(t, e, n, r = !1) {
                return t.addEventListener(e, n, r), {
                    unsubscribe: () => {
                        t.removeEventListener(e, n, r)
                    }
                }
            }

            function _e(t, e) {
                const n = e.getAttribute("src");
                if (!n) return;
                const r = Pe.get(e);
                if (!r) return;
                if (r.loaded) return;
                r.loaded = !0;
                const i = e.querySelector("include-fragment");
                i && !i.hasAttribute("src") && (i.addEventListener("loadend", (() => Fe(t))), i.setAttribute("src", n))
            }

            function qe(t) {
                let e = !1;
                return [Oe(t, "mousedown", (() => e = !0)), Oe(t, "keydown", (() => e = !1)), Oe(t, "toggle", (() => {
                    t.hasAttribute("open") && (Fe(t) || e || function(t) {
                        const e = document.activeElement;
                        if (e && Ve(e) && t.contains(e)) return;
                        const n = Be(t, !0);
                        n && n.focus()
                    }(t))
                }))]
            }

            function Fe(t) {
                if (!t.hasAttribute("open")) return !1;
                const e = t.querySelector("[autofocus]");
                return !!e && (e.focus(), !0)
            }

            function Be(t, e) {
                const n = Array.from(t.querySelectorAll('[role^="menuitem"]:not([hidden]):not([disabled]):not([aria-disabled="true"])')),
                    r = document.activeElement,
                    i = r instanceof HTMLElement ? n.indexOf(r) : -1,
                    o = e ? n[i + 1] : n[i - 1],
                    s = e ? n[0] : n[n.length - 1];
                return o || s
            }
            const We = navigator.userAgent.match(/Macintosh/);

            function $e(t, e, n) {
                const r = n.target;
                if (r instanceof Element && r.closest("details") === t)
                    if ("click" === n.type) {
                        const e = r.closest('[role="menuitem"], [role="menuitemradio"]'),
                            n = e && "LABEL" === e.tagName && e.querySelector("input");
                        e && !n && je(e, t)
                    } else if ("change" === n.type) {
                    const e = r.closest('[role="menuitemradio"], [role="menuitemcheckbox"]');
                    e && je(e, t)
                }
            }

            function je(t, e) {
                if (t.hasAttribute("disabled") || "true" === t.getAttribute("aria-disabled")) return;
                const n = t.closest("details-menu");
                if (!n) return;
                n.dispatchEvent(new CustomEvent("details-menu-select", {
                    cancelable: !0,
                    detail: {
                        relatedTarget: t
                    }
                })) && (! function(t, e) {
                    const n = e.querySelector("[data-menu-button]");
                    if (!n) return;
                    const r = function(t) {
                        if (!t) return null;
                        const e = t.hasAttribute("data-menu-button-text") ? t : t.querySelector("[data-menu-button-text]");
                        return e ? e.getAttribute("data-menu-button-text") || e.textContent : null
                    }(t);
                    if (r) n.textContent = r;
                    else {
                        const e = function(t) {
                            if (!t) return null;
                            const e = t.hasAttribute("data-menu-button-contents") ? t : t.querySelector("[data-menu-button-contents]");
                            return e ? e.innerHTML : null
                        }(t);
                        e && (n.innerHTML = e)
                    }
                }(t, e), function(t, e) {
                    for (const n of e.querySelectorAll('[role="menuitemradio"], [role="menuitemcheckbox"]')) {
                        const e = n.querySelector('input[type="radio"], input[type="checkbox"]');
                        let r = (n === t).toString();
                        e instanceof HTMLInputElement && (r = e.indeterminate ? "mixed" : e.checked.toString()), n.setAttribute("aria-checked", r)
                    }
                }(t, e), "menuitemcheckbox" !== t.getAttribute("role") && Ue(e), n.dispatchEvent(new CustomEvent("details-menu-selected", {
                    detail: {
                        relatedTarget: t
                    }
                })))
            }

            function Ve(t) {
                const e = t.getAttribute("role");
                return "menuitem" === e || "menuitemcheckbox" === e || "menuitemradio" === e
            }

            function Ue(t) {
                if (!t.hasAttribute("open")) return;
                t.removeAttribute("open");
                const e = t.querySelector("summary");
                e && e.focus()
            }

            function ze(t, e) {
                const n = Pe.get(t);
                n && (n.isComposing = "compositionstart" === e.type)
            }
            window.customElements.get("details-menu") || (window.DetailsMenuElement = DetailsMenuElement, window.customElements.define("details-menu", DetailsMenuElement));
            class Attachment {
                constructor(t, e) {
                    this.file = t, this.directory = e, this.state = "pending", this.id = null, this.href = null, this.name = null, this.percent = 0
                }
                static traverse(t, e) {
                    return function(t, e) {
                        if (e && function(t) {
                                return t.items && Array.from(t.items).some((t => {
                                    const e = t.webkitGetAsEntry && t.webkitGetAsEntry();
                                    return e && e.isDirectory
                                }))
                            }(t)) return Ge("", function(t) {
                            return Array.from(t.items).map((t => t.webkitGetAsEntry())).filter((t => null != t))
                        }(t));
                        return Promise.resolve(Ke(Array.from(t.files || [])).map((t => new Attachment(t))))
                    }(t, e)
                }
                static from(t) {
                    const e = [];
                    for (const n of t)
                        if (n instanceof File) e.push(new Attachment(n));
                        else {
                            if (!(n instanceof Attachment)) throw new Error("Unexpected type");
                            e.push(n)
                        }
                    return e
                }
                get fullPath() {
                    return this.directory ? `${this.directory}/${this.file.name}` : this.file.name
                }
                isImage() {
                    return ["image/gif", "image/png", "image/jpg", "image/jpeg"].indexOf(this.file.type) > -1
                }
                saving(t) {
                    if ("pending" !== this.state && "saving" !== this.state) throw new Error(`Unexpected transition from ${this.state} to saving`);
                    this.state = "saving", this.percent = t
                }
                saved(t) {
                    var e, n, r;
                    if ("pending" !== this.state && "saving" !== this.state) throw new Error(`Unexpected transition from ${this.state} to saved`);
                    this.state = "saved", this.id = null !== (e = null == t ? void 0 : t.id) && void 0 !== e ? e : null, this.href = null !== (n = null == t ? void 0 : t.href) && void 0 !== n ? n : null, this.name = null !== (r = null == t ? void 0 : t.name) && void 0 !== r ? r : null
                }
                isPending() {
                    return "pending" === this.state
                }
                isSaving() {
                    return "saving" === this.state
                }
                isSaved() {
                    return "saved" === this.state
                }
            }

            function Ke(t) {
                return Array.from(t).filter((t => ! function(t) {
                    return t.name.startsWith(".")
                }(t)))
            }

            function Ye(t) {
                return new Promise((function(e, n) {
                    t.file(e, n)
                }))
            }

            function Xe(t) {
                return new Promise((function(e, n) {
                    const r = [],
                        i = t.createReader(),
                        o = () => {
                            i.readEntries((t => {
                                t.length > 0 ? (r.push(...t), o()) : e(r)
                            }), n)
                        };
                    o()
                }))
            }
            async function Ge(t, e) {
                const n = [];
                for (const r of Ke(e))
                    if (r.isDirectory) n.push(...await Ge(r.fullPath, await Xe(r)));
                    else {
                        const e = await Ye(r);
                        n.push(new Attachment(e, t))
                    }
                return n
            }
            t("a7", Attachment);
            class FileAttachmentElement extends HTMLElement {
                connectedCallback() {
                    this.addEventListener("dragenter", Ze), this.addEventListener("dragover", Ze), this.addEventListener("dragleave", tn), this.addEventListener("drop", en), this.addEventListener("paste", rn), this.addEventListener("change", on)
                }
                disconnectedCallback() {
                    this.removeEventListener("dragenter", Ze), this.removeEventListener("dragover", Ze), this.removeEventListener("dragleave", tn), this.removeEventListener("drop", en), this.removeEventListener("paste", rn), this.removeEventListener("change", on)
                }
                get directory() {
                    return this.hasAttribute("directory")
                }
                set directory(t) {
                    t ? this.setAttribute("directory", "") : this.removeAttribute("directory")
                }
                async attach(t) {
                    const e = t instanceof DataTransfer ? await Attachment.traverse(t, this.directory) : Attachment.from(t);
                    this.dispatchEvent(new CustomEvent("file-attachment-accept", {
                        bubbles: !0,
                        cancelable: !0,
                        detail: {
                            attachments: e
                        }
                    })) && e.length && this.dispatchEvent(new CustomEvent("file-attachment-accepted", {
                        bubbles: !0,
                        detail: {
                            attachments: e
                        }
                    }))
                }
            }

            function Qe(t) {
                return Array.from(t.types).indexOf("Files") >= 0
            }
            let Je = null;

            function Ze(t) {
                const e = t.currentTarget;
                Je && clearTimeout(Je), Je = window.setTimeout((() => e.removeAttribute("hover")), 200);
                const n = t.dataTransfer;
                n && Qe(n) && (n.dropEffect = "copy", e.setAttribute("hover", ""), t.stopPropagation(), t.preventDefault())
            }

            function tn(t) {
                t.dataTransfer && (t.dataTransfer.dropEffect = "none");
                t.currentTarget.removeAttribute("hover"), t.stopPropagation(), t.preventDefault()
            }

            function en(t) {
                const e = t.currentTarget;
                if (!(e instanceof FileAttachmentElement)) return;
                e.removeAttribute("hover");
                const n = t.dataTransfer;
                n && Qe(n) && (e.attach(n), t.stopPropagation(), t.preventDefault())
            }
            const nn = /^image\/(gif|png|jpeg)$/;

            function rn(t) {
                if (!t.clipboardData) return;
                if (!t.clipboardData.items) return;
                const e = t.currentTarget;
                if (!(e instanceof FileAttachmentElement)) return;
                const n = function(t) {
                    for (const e of t)
                        if (nn.test(e.type)) return e.getAsFile();
                    return null
                }(t.clipboardData.items);
                if (!n) return;
                const r = [n];
                e.attach(r), t.preventDefault()
            }

            function on(t) {
                const e = t.currentTarget;
                if (!(e instanceof FileAttachmentElement)) return;
                const n = t.target;
                if (!(n instanceof HTMLInputElement)) return;
                const r = e.getAttribute("input");
                if (r && n.id !== r) return;
                const i = n.files;
                i && 0 !== i.length && (e.attach(i), n.value = "")
            }
            window.customElements.get("file-attachment") || (window.FileAttachmentElement = FileAttachmentElement, window.customElements.define("file-attachment", FileAttachmentElement));
            class FilterInputElement extends HTMLElement {
                constructor() {
                    super(), this.currentQuery = null, this.filter = null, this.debounceInputChange = function(t) {
                        let e;
                        return function() {
                            clearTimeout(e), e = setTimeout((() => {
                                clearTimeout(e), t()
                            }), 300)
                        }
                    }((() => sn(this, !0))), this.boundFilterResults = () => {
                        sn(this, !1)
                    }
                }
                static get observedAttributes() {
                    return ["aria-owns"]
                }
                attributeChangedCallback(t, e) {
                    e && "aria-owns" === t && sn(this, !1)
                }
                connectedCallback() {
                    const t = this.input;
                    t && (t.setAttribute("autocomplete", "off"), t.setAttribute("spellcheck", "false"), t.addEventListener("focus", this.boundFilterResults), t.addEventListener("change", this.boundFilterResults), t.addEventListener("input", this.debounceInputChange))
                }
                disconnectedCallback() {
                    const t = this.input;
                    t && (t.removeEventListener("focus", this.boundFilterResults), t.removeEventListener("change", this.boundFilterResults), t.removeEventListener("input", this.debounceInputChange))
                }
                get input() {
                    const t = this.querySelector("input");
                    return t instanceof HTMLInputElement ? t : null
                }
                reset() {
                    const t = this.input;
                    t && (t.value = "", t.dispatchEvent(new Event("change", {
                        bubbles: !0
                    })))
                }
            }
            async function sn(t, e = !1) {
                const n = t.input;
                if (!n) return;
                const r = n.value.trim(),
                    i = t.getAttribute("aria-owns");
                if (!i) return;
                const o = document.getElementById(i);
                if (!o) return;
                const s = o.hasAttribute("data-filter-list") ? o : o.querySelector("[data-filter-list]");
                if (!s) return;
                if (t.dispatchEvent(new CustomEvent("filter-input-start", {
                        bubbles: !0
                    })), e && t.currentQuery === r) return;
                t.currentQuery = r;
                const a = t.filter || an,
                    c = s.childElementCount;
                let l = 0,
                    u = !1;
                for (const m of Array.from(s.children)) {
                    if (!(m instanceof HTMLElement)) continue;
                    const t = a(m, cn(m), r);
                    !0 === t.hideNew && (u = t.hideNew), m.hidden = !t.match, t.match && l++
                }
                const d = o.querySelector("[data-filter-new-item]"),
                    h = !!d && r.length > 0 && !u;
                d instanceof HTMLElement && (d.hidden = !h, h && function(t, e) {
                        const n = t.querySelector("[data-filter-new-item-text]");
                        n && (n.textContent = e);
                        const r = t.querySelector("[data-filter-new-item-value]");
                        (r instanceof HTMLInputElement || r instanceof HTMLButtonElement) && (r.value = e)
                    }(d, r)),
                    function(t, e) {
                        const n = t.querySelector("[data-filter-empty-state]");
                        n instanceof HTMLElement && (n.hidden = e)
                    }(o, l > 0 || h), t.dispatchEvent(new CustomEvent("filter-input-updated", {
                        bubbles: !0,
                        detail: {
                            count: l,
                            total: c
                        }
                    }))
            }

            function an(t, e, n) {
                return {
                    match: -1 !== e.toLowerCase().indexOf(n.toLowerCase()),
                    hideNew: e === n
                }
            }

            function cn(t) {
                return ((t.querySelector("[data-filter-item-text]") || t).textContent || "").trim()
            }
            t("F", FilterInputElement), window.customElements.get("filter-input") || (window.FilterInputElement = FilterInputElement, window.customElements.define("filter-input", FilterInputElement));
            const ln = new Set(["👋", "🤚", "🖐️", "✋", "🖖", "👌", "🤏", "✌️", "🤞", "🤟", "🤘", "🤙", "👈", "👉", "👆", "🖕", "👇", "☝️", "👍", "👎", "✊", "👊", "🤛", "🤜", "👏", "🙌", "👐", "🤲", "🙏", "✍️", "💅", "🤳", "💪", "🦵", "🦶", "👂", "🦻", "👃", "👶", "🧒", "👦", "👧", "🧑", "👱", "👨", "🧔", "👱‍♂️", "👨‍🦰", "👨‍🦱", "👨‍🦳", "👨‍🦲", "👩", "👱‍♀️", "👩‍🦰", "👩‍🦱", "👩‍🦳", "👩‍🦲", "🧓", "👴", "👵", "🙍", "🙍‍♂️", "🙍‍♀️", "🙎", "🙎‍♂️", "🙎‍♀️", "🙅", "🙅‍♂️", "🙅‍♀️", "🙆", "🙆‍♂️", "🙆‍♀️", "💁", "💁‍♂️", "💁‍♀️", "🙋", "🙋‍♂️", "🙋‍♀️", "🧏", "🧏‍♂️", "🧏‍♀️", "🙇", "🙇‍♂️", "🙇‍♀️", "🤦", "🤦‍♂️", "🤦‍♀️", "🤷", "🤷‍♂️", "🤷‍♀️", "👨‍⚕️", "👩‍⚕️", "👨‍🎓", "👩‍🎓", "👨‍🏫", "👩‍🏫", "👨‍⚖️", "👩‍⚖️", "👨‍🌾", "👩‍🌾", "👨‍🍳", "👩‍🍳", "👨‍🔧", "👩‍🔧", "👨‍🏭", "👩‍🏭", "👨‍💼", "👩‍💼", "👨‍🔬", "👩‍🔬", "👨‍💻", "👩‍💻", "👨‍🎤", "👩‍🎤", "👨‍🎨", "👩‍🎨", "👨‍✈️", "👩‍✈️", "👨‍🚀", "👩‍🚀", "👨‍🚒", "👩‍🚒", "👮", "👮‍♂️", "👮‍♀️", "🕵️", "🕵️‍♂️", "🕵️‍♀️", "💂", "💂‍♂️", "💂‍♀️", "👷", "👷‍♂️", "👷‍♀️", "🤴", "👸", "👳", "👳‍♂️", "👳‍♀️", "👲", "🧕", "🤵", "👰", "🤰", "🤱", "👼", "🎅", "🤶", "🦸", "🦸‍♂️", "🦸‍♀️", "🦹", "🦹‍♂️", "🦹‍♀️", "🧙", "🧙‍♂️", "🧙‍♀️", "🧚", "🧚‍♂️", "🧚‍♀️", "🧛", "🧛‍♂️", "🧛‍♀️", "🧜", "🧜‍♂️", "🧜‍♀️", "🧝", "🧝‍♂️", "🧝‍♀️", "💆", "💆‍♂️", "💆‍♀️", "💇", "💇‍♂️", "💇‍♀️", "🚶", "🚶‍♂️", "🚶‍♀️", "🧍", "🧍‍♂️", "🧍‍♀️", "🧎", "🧎‍♂️", "🧎‍♀️", "👨‍🦯", "👩‍🦯", "👨‍🦼", "👩‍🦼", "👨‍🦽", "👩‍🦽", "🏃", "🏃‍♂️", "🏃‍♀️", "💃", "🕺", "🕴️", "🧖", "🧖‍♂️", "🧖‍♀️", "🧗", "🧗‍♂️", "🧗‍♀️", "🏇", "🏂", "🏌️", "🏌️‍♂️", "🏌️‍♀️", "🏄", "🏄‍♂️", "🏄‍♀️", "🚣", "🚣‍♂️", "🚣‍♀️", "🏊", "🏊‍♂️", "🏊‍♀️", "⛹️", "⛹️‍♂️", "⛹️‍♀️", "🏋️", "🏋️‍♂️", "🏋️‍♀️", "🚴", "🚴‍♂️", "🚴‍♀️", "🚵", "🚵‍♂️", "🚵‍♀️", "🤸", "🤸‍♂️", "🤸‍♀️", "🤽", "🤽‍♂️", "🤽‍♀️", "🤾", "🤾‍♂️", "🤾‍♀️", "🤹", "🤹‍♂️", "🤹‍♀️", "🧘", "🧘‍♂️", "🧘‍♀️", "🛀", "🛌", "🧑‍🤝‍🧑", "👭", "👫", "👬"]);

            function un(t) {
                return ln.has(t)
            }
            const dn = "‍";

            function hn(t) {
                return [...t].filter((t => !fn(t.codePointAt(0)))).join("")
            }

            function mn(t, e) {
                const n = [...t].map((t => t.codePointAt(0)));
                return n[1] && (fn(n[1]) || 65039 === n[1]) ? n[1] = e : n.splice(1, 0, e), String.fromCodePoint(...n)
            }

            function fn(t) {
                return t >= 127995 && t <= 127999
            }

            function pn(t) {
                switch (t) {
                    case 1:
                        return 127995;
                    case 2:
                        return 127996;
                    case 3:
                        return 127997;
                    case 4:
                        return 127998;
                    case 5:
                        return 127999;
                    default:
                        return null
                }
            }
            class GEmojiElement extends HTMLElement {
                get image() {
                    return this.firstElementChild instanceof HTMLImageElement ? this.firstElementChild : null
                }
                get tone() {
                    return (this.getAttribute("tone") || "").split(" ").map((t => {
                        const e = parseInt(t, 10);
                        return e >= 0 && e <= 5 ? e : 0
                    })).join(" ")
                }
                set tone(t) {
                    this.setAttribute("tone", t)
                }
                connectedCallback() {
                    if (null === this.image && ! function() {
                            const t = /\bWindows NT 6.1\b/.test(navigator.userAgent),
                                e = /\bWindows NT 6.2\b/.test(navigator.userAgent),
                                n = /\bWindows NT 6.3\b/.test(navigator.userAgent),
                                r = /\bFreeBSD\b/.test(navigator.userAgent),
                                i = /\bLinux\b/.test(navigator.userAgent) && !/\bAndroid\b/.test(navigator.userAgent);
                            return !(t || e || n || i || r)
                        }()) {
                        const t = this.getAttribute("fallback-src");
                        if (t) {
                            this.textContent = "";
                            const e = function(t) {
                                const e = document.createElement("img");
                                return e.className = "emoji", e.alt = t.getAttribute("alias") || "", e.height = 20, e.width = 20, e
                            }(this);
                            e.src = t, this.appendChild(e)
                        }
                    }
                    this.hasAttribute("tone") && gn(this)
                }
                static get observedAttributes() {
                    return ["tone"]
                }
                attributeChangedCallback(t) {
                    switch (t) {
                        case "tone":
                            gn(this)
                    }
                }
            }

            function gn(t) {
                if (t.image) return;
                const e = t.tone.split(" ").map((t => parseInt(t, 10)));
                if (0 === e.length) t.textContent = hn(t.textContent || "");
                else if (1 === e.length) {
                    const n = e[0];
                    t.textContent = 0 === n ? hn(t.textContent || "") : function(t, e) {
                        const n = hn(t);
                        if (!un(n)) return t;
                        const r = pn(e);
                        return r ? n.split(dn).map((t => un(t) ? mn(t, r) : t)).join(dn) : t
                    }(t.textContent || "", n)
                } else t.textContent = function(t, e) {
                    const n = hn(t);
                    if (!un(n)) return t;
                    const r = e.map((t => pn(t)));
                    return n.split(dn).map((t => {
                        if (!un(t)) return t;
                        const e = r.shift();
                        return e ? mn(t, e) : t
                    })).join(dn)
                }(t.textContent || "", e)
            }
            window.customElements.get("g-emoji") || (window.GEmojiElement = GEmojiElement, window.customElements.define("g-emoji", GEmojiElement));
            const vn = new WeakMap;

            function bn(t, e) {
                setTimeout((function() {
                    e.dispatchEvent(new Event(t))
                }), 0)
            }
            async function En(t) {
                return wn(t).then((function(e) {
                    const n = document.createElement("template");
                    n.innerHTML = e;
                    const r = document.importNode(n.content, !0);
                    !t.dispatchEvent(new CustomEvent("include-fragment-replace", {
                        cancelable: !0,
                        detail: {
                            fragment: r
                        }
                    })) || (t.replaceWith(r), t.dispatchEvent(new CustomEvent("include-fragment-replaced")))
                }), (function() {
                    t.classList.add("is-error")
                }))
            }

            function wn(t) {
                const e = t.src;
                let n = vn.get(t);
                return n && n.src === e ? n.data : (n = e ? t.load() : Promise.reject(new Error("missing src")), vn.set(t, {
                    src: e,
                    data: n
                }), n)
            }
            class IncludeFragmentElement extends HTMLElement {
                constructor() {
                    super(), this._attached = !1
                }
                static get observedAttributes() {
                    return ["src"]
                }
                get src() {
                    const t = this.getAttribute("src");
                    if (t) {
                        const e = this.ownerDocument.createElement("a");
                        return e.href = t, e.href
                    }
                    return ""
                }
                set src(t) {
                    this.setAttribute("src", t)
                }
                get accept() {
                    return this.getAttribute("accept") || ""
                }
                set accept(t) {
                    this.setAttribute("accept", t)
                }
                get data() {
                    return wn(this)
                }
                attributeChangedCallback(t) {
                    "src" === t && this._attached && En(this)
                }
                connectedCallback() {
                    this._attached = !0, this.src && En(this)
                }
                disconnectedCallback() {
                    this._attached = !1
                }
                request() {
                    const t = this.src;
                    if (!t) throw new Error("missing src");
                    return new Request(t, {
                        method: "GET",
                        credentials: "same-origin",
                        headers: {
                            Accept: this.accept || "text/html"
                        }
                    })
                }
                load() {
                    return Promise.resolve().then((() => (bn("loadstart", this), this.fetch(this.request())))).then((t => {
                        if (200 !== t.status) throw new Error("Failed to load resource: the server responded with a status of " + t.status);
                        const e = t.headers.get("Content-Type");
                        if (!(n = this.accept, n && n.split(",").find((t => t.match(/^\s*\*\/\*/))) || e && e.includes(this.accept ? this.accept : "text/html"))) throw new Error(`Failed to load resource: expected ${this.accept||"text/html"} but was ${e}`);
                        var n;
                        return t
                    })).then((t => t.text())).then((t => (bn("load", this), bn("loadend", this), t)), (t => {
                        throw bn("error", this), bn("loadend", this), t
                    }))
                }
                fetch(t) {
                    return fetch(t)
                }
            }
            t("I", IncludeFragmentElement), window.customElements.get("include-fragment") || (window.IncludeFragmentElement = IncludeFragmentElement, window.customElements.define("include-fragment", IncludeFragmentElement));
            const yn = new WeakMap,
                xn = new WeakMap,
                kn = new WeakMap;

            function An(t) {
                const e = t.currentTarget;
                if (!(e instanceof ImageCropElement)) return;
                const {
                    box: n,
                    image: r
                } = kn.get(e) || {};
                if (!n || !r) return;
                let i = 0,
                    o = 0;
                if (t instanceof KeyboardEvent) "ArrowUp" === t.key ? o = -1 : "ArrowDown" === t.key ? o = 1 : "ArrowLeft" === t.key ? i = -1 : "ArrowRight" === t.key && (i = 1);
                else if (xn.has(e) && t instanceof MouseEvent) {
                    const n = xn.get(e);
                    i = t.pageX - n.dragStartX, o = t.pageY - n.dragStartY
                } else if (xn.has(e) && t instanceof TouchEvent) {
                    const {
                        pageX: n,
                        pageY: r
                    } = t.changedTouches[0], {
                        dragStartX: s,
                        dragStartY: a
                    } = xn.get(e);
                    i = n - s, o = r - a
                }
                if (0 !== i || 0 !== o) {
                    const t = Math.min(Math.max(0, n.offsetLeft + i), r.width - n.offsetWidth),
                        s = Math.min(Math.max(0, n.offsetTop + o), r.height - n.offsetHeight);
                    n.style.left = t + "px", n.style.top = s + "px", In(e, {
                        x: t,
                        y: s,
                        width: n.offsetWidth,
                        height: n.offsetHeight
                    })
                }
                if (t instanceof MouseEvent) xn.set(e, {
                    dragStartX: t.pageX,
                    dragStartY: t.pageY
                });
                else if (t instanceof TouchEvent) {
                    const {
                        pageX: n,
                        pageY: r
                    } = t.changedTouches[0];
                    xn.set(e, {
                        dragStartX: n,
                        dragStartY: r
                    })
                }
            }

            function Tn(t) {
                const e = t.target;
                if (!(e instanceof HTMLElement)) return;
                const n = Ln(e);
                if (!(n instanceof ImageCropElement)) return;
                const {
                    box: r
                } = kn.get(n) || {};
                if (!r) return;
                const i = n.getBoundingClientRect();
                let o, s, a;
                if (t instanceof KeyboardEvent) {
                    if ("Escape" === t.key) return Cn(n);
                    if ("-" === t.key && (a = -10), "=" === t.key && (a = 10), !a) return;
                    o = r.offsetWidth + a, s = r.offsetHeight + a, yn.set(n, {
                        startX: r.offsetLeft,
                        startY: r.offsetTop
                    })
                } else if (t instanceof MouseEvent) {
                    const e = yn.get(n);
                    if (!e) return;
                    o = t.pageX - e.startX - i.left - window.pageXOffset, s = t.pageY - e.startY - i.top - window.pageYOffset
                } else if (t instanceof TouchEvent) {
                    const e = yn.get(n);
                    if (!e) return;
                    o = t.changedTouches[0].pageX - e.startX - i.left - window.pageXOffset, s = t.changedTouches[0].pageY - e.startY - i.top - window.pageYOffset
                }
                o && s && Sn(n, o, s, !(t instanceof KeyboardEvent))
            }

            function Ln(t) {
                const e = t.getRootNode();
                return e instanceof ShadowRoot ? e.host : t
            }

            function Mn(t) {
                const e = t.currentTarget;
                if (!(e instanceof HTMLElement)) return;
                const n = Ln(e);
                if (!(n instanceof ImageCropElement)) return;
                const {
                    box: r
                } = kn.get(n) || {};
                if (!r) return;
                const i = t.target;
                if (i instanceof HTMLElement)
                    if (i.hasAttribute("data-direction")) {
                        const e = i.getAttribute("data-direction") || "";
                        n.addEventListener("mousemove", Tn), n.addEventListener("touchmove", Tn, {
                            passive: !0
                        }), ["nw", "se"].indexOf(e) >= 0 && n.classList.add("nwse"), ["ne", "sw"].indexOf(e) >= 0 && n.classList.add("nesw"), yn.set(n, {
                            startX: r.offsetLeft + (["se", "ne"].indexOf(e) >= 0 ? 0 : r.offsetWidth),
                            startY: r.offsetTop + (["se", "sw"].indexOf(e) >= 0 ? 0 : r.offsetHeight)
                        }), Tn(t)
                    } else n.addEventListener("mousemove", An), n.addEventListener("touchmove", An, {
                        passive: !0
                    })
            }

            function Sn(t, e, n, r = !0) {
                let i = Math.max(Math.abs(e), Math.abs(n), 10);
                const o = yn.get(t);
                if (!o) return;
                const {
                    box: s,
                    image: a
                } = kn.get(t) || {};
                if (!s || !a) return;
                i = Math.min(i, n > 0 ? a.height - o.startY : o.startY, e > 0 ? a.width - o.startX : o.startX);
                const c = r ? Math.round(Math.max(0, e > 0 ? o.startX : o.startX - i)) : s.offsetLeft,
                    l = r ? Math.round(Math.max(0, n > 0 ? o.startY : o.startY - i)) : s.offsetTop;
                s.style.left = c + "px", s.style.top = l + "px", s.style.width = i + "px", s.style.height = i + "px", In(t, {
                    x: c,
                    y: l,
                    width: i,
                    height: i
                })
            }

            function Cn(t) {
                const {
                    image: e
                } = kn.get(t) || {};
                if (!e) return;
                const n = Math.round(e.clientWidth > e.clientHeight ? e.clientHeight : e.clientWidth);
                yn.set(t, {
                    startX: (e.clientWidth - n) / 2,
                    startY: (e.clientHeight - n) / 2
                }), Sn(t, n, n)
            }

            function Nn(t) {
                const e = t.currentTarget;
                e instanceof ImageCropElement && (xn.delete(e), e.classList.remove("nwse", "nesw"), e.removeEventListener("mousemove", Tn), e.removeEventListener("mousemove", An), e.removeEventListener("touchmove", Tn), e.removeEventListener("touchmove", An))
            }

            function In(t, e) {
                const {
                    image: n
                } = kn.get(t) || {};
                if (!n) return;
                const r = n.naturalWidth / n.width;
                for (const i in e) {
                    const n = Math.round(e[i] * r);
                    e[i] = n;
                    const o = t.querySelector(`[data-image-crop-input='${i}']`);
                    o instanceof HTMLInputElement && (o.value = n.toString())
                }
                t.dispatchEvent(new CustomEvent("image-crop-change", {
                    bubbles: !0,
                    detail: e
                }))
            }
            class ImageCropElement extends HTMLElement {
                connectedCallback() {
                    if (kn.has(this)) return;
                    const t = this.attachShadow({
                        mode: "open"
                    });
                    t.innerHTML = '\n<style>\n  :host { touch-action: none; display: block; }\n  :host(.nesw) { cursor: nesw-resize; }\n  :host(.nwse) { cursor: nwse-resize; }\n  :host(.nesw) .crop-box, :host(.nwse) .crop-box { cursor: inherit; }\n  :host([loaded]) .crop-image { display: block; }\n  :host([loaded]) ::slotted([data-loading-slot]), .crop-image { display: none; }\n\n  .crop-wrapper {\n    position: relative;\n    font-size: 0;\n  }\n  .crop-container {\n    user-select: none;\n    -ms-user-select: none;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    position: absolute;\n    overflow: hidden;\n    z-index: 1;\n    top: 0;\n    width: 100%;\n    height: 100%;\n  }\n\n  :host([rounded]) .crop-box {\n    border-radius: 50%;\n    box-shadow: 0 0 0 4000px rgba(0, 0, 0, 0.3);\n  }\n  .crop-box {\n    position: absolute;\n    border: 1px dashed #fff;\n    box-sizing: border-box;\n    cursor: move;\n  }\n\n  :host([rounded]) .crop-outline {\n    outline: none;\n  }\n  .crop-outline {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    outline: 4000px solid rgba(0, 0, 0, .3);\n  }\n\n  .handle { position: absolute; }\n  :host([rounded]) .handle::before { border-radius: 50%; }\n  .handle:before {\n    position: absolute;\n    display: block;\n    padding: 4px;\n    transform: translate(-50%, -50%);\n    content: \' \';\n    background: #fff;\n    border: 1px solid #767676;\n  }\n  .ne { top: 0; right: 0; cursor: nesw-resize; }\n  .nw { top: 0; left: 0; cursor: nwse-resize; }\n  .se { bottom: 0; right: 0; cursor: nwse-resize; }\n  .sw { bottom: 0; left: 0; cursor: nesw-resize; }\n</style>\n<slot></slot>\n<div class="crop-wrapper">\n  <img width="100%" class="crop-image" alt="">\n  <div class="crop-container">\n    <div data-crop-box class="crop-box">\n      <div class="crop-outline"></div>\n      <div data-direction="nw" class="handle nw"></div>\n      <div data-direction="ne" class="handle ne"></div>\n      <div data-direction="sw" class="handle sw"></div>\n      <div data-direction="se" class="handle se"></div>\n    </div>\n  </div>\n</div>\n';
                    const e = t.querySelector("[data-crop-box]");
                    if (!(e instanceof HTMLElement)) return;
                    const n = t.querySelector("img");
                    n instanceof HTMLImageElement && (kn.set(this, {
                        box: e,
                        image: n
                    }), n.addEventListener("load", (() => {
                        this.loaded = !0, Cn(this)
                    })), this.addEventListener("mouseleave", Nn), this.addEventListener("touchend", Nn), this.addEventListener("mouseup", Nn), e.addEventListener("mousedown", Mn), e.addEventListener("touchstart", Mn, {
                        passive: !0
                    }), this.addEventListener("keydown", An), this.addEventListener("keydown", Tn), this.src && (n.src = this.src))
                }
                static get observedAttributes() {
                    return ["src"]
                }
                get src() {
                    return this.getAttribute("src")
                }
                set src(t) {
                    t ? this.setAttribute("src", t) : this.removeAttribute("src")
                }
                get loaded() {
                    return this.hasAttribute("loaded")
                }
                set loaded(t) {
                    t ? this.setAttribute("loaded", "") : this.removeAttribute("loaded")
                }
                attributeChangedCallback(t, e, n) {
                    const {
                        image: r
                    } = kn.get(this) || {};
                    "src" === t && (this.loaded = !1, r && (r.src = n))
                }
            }
            window.customElements.get("image-crop") || (window.ImageCropElement = ImageCropElement, window.customElements.define("image-crop", ImageCropElement));
            const Dn = ["[data-md-button]", "md-header", "md-bold", "md-italic", "md-quote", "md-code", "md-link", "md-image", "md-unordered-list", "md-ordered-list", "md-task-list", "md-mention", "md-ref", "md-strikethrough"];

            function Hn(t) {
                const e = [];
                for (const n of t.querySelectorAll(Dn.join(", "))) n.hidden || n.offsetWidth <= 0 && n.offsetHeight <= 0 || n.closest("markdown-toolbar") === t && e.push(n);
                return e
            }
            const Pn = new WeakMap;
            class MarkdownButtonElement extends HTMLElement {
                constructor() {
                    super();
                    const t = () => {
                        const t = Pn.get(this);
                        t && zn(this, t)
                    };
                    var e;
                    this.addEventListener("keydown", (e = t, function(t) {
                        " " !== t.key && "Enter" !== t.key || (t.preventDefault(), e(t))
                    })), this.addEventListener("click", t)
                }
                connectedCallback() {
                    this.hasAttribute("role") || this.setAttribute("role", "button")
                }
                click() {
                    const t = Pn.get(this);
                    t && zn(this, t)
                }
            }
            class MarkdownHeaderButtonElement extends MarkdownButtonElement {
                constructor() {
                    super();
                    const t = parseInt(this.getAttribute("level") || "3", 10);
                    if (t < 1 || t > 6) return;
                    const e = "#".repeat(t) + " ";
                    Pn.set(this, {
                        prefix: e
                    })
                }
            }
            window.customElements.get("md-header") || (window.MarkdownHeaderButtonElement = MarkdownHeaderButtonElement, window.customElements.define("md-header", MarkdownHeaderButtonElement));
            class MarkdownBoldButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), Pn.set(this, {
                        prefix: "**",
                        suffix: "**",
                        trimFirst: !0
                    })
                }
                connectedCallback() {
                    super.connectedCallback(), this.setAttribute("hotkey", "b")
                }
            }
            window.customElements.get("md-bold") || (window.MarkdownBoldButtonElement = MarkdownBoldButtonElement, window.customElements.define("md-bold", MarkdownBoldButtonElement));
            class MarkdownItalicButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), Pn.set(this, {
                        prefix: "_",
                        suffix: "_",
                        trimFirst: !0
                    })
                }
                connectedCallback() {
                    super.connectedCallback(), this.setAttribute("hotkey", "i")
                }
            }
            window.customElements.get("md-italic") || (window.MarkdownItalicButtonElement = MarkdownItalicButtonElement, window.customElements.define("md-italic", MarkdownItalicButtonElement));
            class MarkdownQuoteButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), Pn.set(this, {
                        prefix: "> ",
                        multiline: !0,
                        surroundWithNewlines: !0
                    })
                }
            }
            window.customElements.get("md-quote") || (window.MarkdownQuoteButtonElement = MarkdownQuoteButtonElement, window.customElements.define("md-quote", MarkdownQuoteButtonElement));
            class MarkdownCodeButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), Pn.set(this, {
                        prefix: "`",
                        suffix: "`",
                        blockPrefix: "```",
                        blockSuffix: "```"
                    })
                }
                connectedCallback() {
                    super.connectedCallback(), this.setAttribute("hotkey", "e")
                }
            }
            window.customElements.get("md-code") || (window.MarkdownCodeButtonElement = MarkdownCodeButtonElement, window.customElements.define("md-code", MarkdownCodeButtonElement));
            class MarkdownLinkButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), Pn.set(this, {
                        prefix: "[",
                        suffix: "](url)",
                        replaceNext: "url",
                        scanFor: "https?://"
                    })
                }
                connectedCallback() {
                    super.connectedCallback(), this.setAttribute("hotkey", "k")
                }
            }
            window.customElements.get("md-link") || (window.MarkdownLinkButtonElement = MarkdownLinkButtonElement, window.customElements.define("md-link", MarkdownLinkButtonElement));
            class MarkdownImageButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), Pn.set(this, {
                        prefix: "![",
                        suffix: "](url)",
                        replaceNext: "url",
                        scanFor: "https?://"
                    })
                }
            }
            window.customElements.get("md-image") || (window.MarkdownImageButtonElement = MarkdownImageButtonElement, window.customElements.define("md-image", MarkdownImageButtonElement));
            class MarkdownUnorderedListButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), Pn.set(this, {
                        prefix: "- ",
                        multiline: !0,
                        surroundWithNewlines: !0
                    })
                }
            }
            window.customElements.get("md-unordered-list") || (window.MarkdownUnorderedListButtonElement = MarkdownUnorderedListButtonElement, window.customElements.define("md-unordered-list", MarkdownUnorderedListButtonElement));
            class MarkdownOrderedListButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), Pn.set(this, {
                        prefix: "1. ",
                        multiline: !0,
                        orderedList: !0
                    })
                }
            }
            window.customElements.get("md-ordered-list") || (window.MarkdownOrderedListButtonElement = MarkdownOrderedListButtonElement, window.customElements.define("md-ordered-list", MarkdownOrderedListButtonElement));
            class MarkdownTaskListButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), Pn.set(this, {
                        prefix: "- [ ] ",
                        multiline: !0,
                        surroundWithNewlines: !0
                    })
                }
                connectedCallback() {
                    super.connectedCallback(), this.setAttribute("hotkey", "L")
                }
            }
            window.customElements.get("md-task-list") || (window.MarkdownTaskListButtonElement = MarkdownTaskListButtonElement, window.customElements.define("md-task-list", MarkdownTaskListButtonElement));
            class MarkdownMentionButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), Pn.set(this, {
                        prefix: "@",
                        prefixSpace: !0
                    })
                }
            }
            window.customElements.get("md-mention") || (window.MarkdownMentionButtonElement = MarkdownMentionButtonElement, window.customElements.define("md-mention", MarkdownMentionButtonElement));
            class MarkdownRefButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), Pn.set(this, {
                        prefix: "#",
                        prefixSpace: !0
                    })
                }
            }
            window.customElements.get("md-ref") || (window.MarkdownRefButtonElement = MarkdownRefButtonElement, window.customElements.define("md-ref", MarkdownRefButtonElement));
            class MarkdownStrikethroughButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), Pn.set(this, {
                        prefix: "~~",
                        suffix: "~~",
                        trimFirst: !0
                    })
                }
            }
            window.customElements.get("md-strikethrough") || (window.MarkdownStrikethroughButtonElement = MarkdownStrikethroughButtonElement, window.customElements.define("md-strikethrough", MarkdownStrikethroughButtonElement));
            const Rn = navigator.userAgent.match(/Macintosh/) ? "Meta" : "Control";
            class MarkdownToolbarElement extends HTMLElement {
                constructor() {
                    super()
                }
                connectedCallback() {
                    this.hasAttribute("role") || this.setAttribute("role", "toolbar"), this.addEventListener("keydown", _n);
                    const t = Fn.bind(null, this);
                    this.field && (this.field.addEventListener("keydown", t), qn.set(this, t)), this.setAttribute("tabindex", "0"), this.addEventListener("focus", On, {
                        once: !0
                    })
                }
                disconnectedCallback() {
                    const t = qn.get(this);
                    t && this.field && (this.field.removeEventListener("keydown", t), qn.delete(this)), this.removeEventListener("keydown", _n)
                }
                get field() {
                    const t = this.getAttribute("for");
                    if (!t) return null;
                    const e = "getRootNode" in this ? this.getRootNode() : document;
                    let n;
                    return (e instanceof Document || e instanceof ShadowRoot) && (n = e.getElementById(t)), n instanceof HTMLTextAreaElement ? n : null
                }
            }

            function On({
                target: t
            }) {
                if (!(t instanceof Element)) return;
                t.removeAttribute("tabindex");
                let e = "0";
                for (const n of Hn(t)) n.setAttribute("tabindex", e), "0" === e && (n.focus(), e = "-1")
            }

            function _n(t) {
                const e = t.key;
                if ("ArrowRight" !== e && "ArrowLeft" !== e && "Home" !== e && "End" !== e) return;
                const n = t.currentTarget;
                if (!(n instanceof HTMLElement)) return;
                const r = Hn(n),
                    i = r.indexOf(t.target),
                    o = r.length;
                if (-1 === i) return;
                let s = 0;
                "ArrowLeft" === e && (s = i - 1), "ArrowRight" === e && (s = i + 1), "End" === e && (s = o - 1), s < 0 && (s = o - 1), s > o - 1 && (s = 0);
                for (let a = 0; a < o; a += 1) r[a].setAttribute("tabindex", a === s ? "0" : "-1");
                t.preventDefault(), r[s].focus()
            }
            const qn = new WeakMap;

            function Fn(t, e) {
                if (e.metaKey && "Meta" === Rn || e.ctrlKey && "Control" === Rn) {
                    const n = function(t, e) {
                        for (const n of t.querySelectorAll("[hotkey]"))
                            if (n.getAttribute("hotkey") === e) return n;
                        return null
                    }(t, e.shiftKey ? e.key.toUpperCase() : e.key);
                    n && (n.click(), e.preventDefault())
                }
            }

            function Bn(t) {
                return t.trim().split("\n").length > 1
            }

            function Wn(t, e) {
                return Array(e + 1).join(t)
            }

            function $n(t, e, n) {
                let r = e;
                const i = n ? /\n/ : /\s/;
                for (; t[r] && !t[r].match(i);) r++;
                return r
            }
            window.customElements.get("markdown-toolbar") || (window.MarkdownToolbarElement = MarkdownToolbarElement, window.customElements.define("markdown-toolbar", MarkdownToolbarElement));
            let jn = null;

            function Vn(t, e) {
                const n = t.value.slice(t.selectionStart, t.selectionEnd);
                let r;
                r = e.orderedList ? function(t) {
                        const e = /^\d+\.\s+/,
                            n = t.selectionStart === t.selectionEnd;
                        let r, i, o, s, a = t.value.slice(t.selectionStart, t.selectionEnd),
                            c = a,
                            l = a.split("\n");
                        if (n) {
                            const e = t.value.slice(0, t.selectionStart).split(/\n/);
                            o = t.selectionStart - e[e.length - 1].length, s = $n(t.value, t.selectionStart, !0), c = t.value.slice(o, s)
                        }
                        const u = c.split("\n");
                        if (u.every((t => e.test(t)))) {
                            if (l = u.map((t => t.replace(e, ""))), a = l.join("\n"), n && o && s) {
                                const e = u[0].length - l[0].length;
                                i = r = t.selectionStart - e, t.selectionStart = o, t.selectionEnd = s
                            }
                        } else {
                            l = function(t) {
                                let e, n, r;
                                const i = [];
                                for (r = e = 0, n = t.length; e < n; r = ++e) {
                                    const e = t[r];
                                    i.push(`${r+1}. ${e}`)
                                }
                                return i
                            }(l), a = l.join("\n");
                            const {
                                newlinesToAppend: e,
                                newlinesToPrepend: o
                            } = Un(t);
                            i = t.selectionStart + e.length, r = i + a.length, n && (i = r), a = e + a + o
                        }
                        return {
                            text: a,
                            selectionStart: i,
                            selectionEnd: r
                        }
                    }(t) : e.multiline && Bn(n) ? function(t, e) {
                        const {
                            prefix: n,
                            suffix: r,
                            surroundWithNewlines: i
                        } = e;
                        let o = t.value.slice(t.selectionStart, t.selectionEnd),
                            s = t.selectionStart,
                            a = t.selectionEnd;
                        const c = o.split("\n");
                        if (c.every((t => t.startsWith(n) && t.endsWith(r)))) o = c.map((t => t.slice(n.length, t.length - r.length))).join("\n"), a = s + o.length;
                        else if (o = c.map((t => n + t + r)).join("\n"), i) {
                            const {
                                newlinesToAppend: e,
                                newlinesToPrepend: n
                            } = Un(t);
                            s += e.length, a = s + o.length, o = e + o + n
                        }
                        return {
                            text: o,
                            selectionStart: s,
                            selectionEnd: a
                        }
                    }(t, e) : function(t, e) {
                        let n, r;
                        const {
                            prefix: i,
                            suffix: o,
                            blockPrefix: s,
                            blockSuffix: a,
                            replaceNext: c,
                            prefixSpace: l,
                            scanFor: u,
                            surroundWithNewlines: d
                        } = e, h = t.selectionStart, m = t.selectionEnd;
                        let f = t.value.slice(t.selectionStart, t.selectionEnd),
                            p = Bn(f) && s.length > 0 ? s + "\n" : i,
                            g = Bn(f) && a.length > 0 ? "\n" + a : o;
                        if (l) {
                            const e = t.value[t.selectionStart - 1];
                            0 === t.selectionStart || null == e || e.match(/\s/) || (p = " " + p)
                        }
                        f = function(t, e, n, r = !1) {
                            if (t.selectionStart === t.selectionEnd) t.selectionStart = function(t, e) {
                                let n = e;
                                for (; t[n] && null != t[n - 1] && !t[n - 1].match(/\s/);) n--;
                                return n
                            }(t.value, t.selectionStart), t.selectionEnd = $n(t.value, t.selectionEnd, r);
                            else {
                                const r = t.selectionStart - e.length,
                                    i = t.selectionEnd + n.length,
                                    o = t.value.slice(r, t.selectionStart) === e,
                                    s = t.value.slice(t.selectionEnd, i) === n;
                                o && s && (t.selectionStart = r, t.selectionEnd = i)
                            }
                            return t.value.slice(t.selectionStart, t.selectionEnd)
                        }(t, p, g, e.multiline);
                        let v = t.selectionStart,
                            b = t.selectionEnd;
                        const E = c.length > 0 && g.indexOf(c) > -1 && f.length > 0;
                        if (d) {
                            const e = Un(t);
                            n = e.newlinesToAppend, r = e.newlinesToPrepend, p = n + i, g += r
                        }
                        if (f.startsWith(p) && f.endsWith(g)) {
                            const t = f.slice(p.length, f.length - g.length);
                            if (h === m) {
                                let e = h - p.length;
                                e = Math.max(e, v), e = Math.min(e, v + t.length), v = b = e
                            } else b = v + t.length;
                            return {
                                text: t,
                                selectionStart: v,
                                selectionEnd: b
                            }
                        }
                        if (E) {
                            if (u.length > 0 && f.match(u)) {
                                g = g.replace(c, f);
                                const t = p + g;
                                return v = b = v + p.length, {
                                    text: t,
                                    selectionStart: v,
                                    selectionEnd: b
                                }
                            } {
                                const t = p + f + g;
                                return v = v + p.length + f.length + g.indexOf(c), b = v + c.length, {
                                    text: t,
                                    selectionStart: v,
                                    selectionEnd: b
                                }
                            }
                        } {
                            let t = p + f + g;
                            v = h + p.length, b = m + p.length;
                            const n = f.match(/^\s*|\s*$/g);
                            if (e.trimFirst && n) {
                                const e = n[0] || "",
                                    r = n[1] || "";
                                t = e + p + f.trim() + g + r, v += e.length, b -= r.length
                            }
                            return {
                                text: t,
                                selectionStart: v,
                                selectionEnd: b
                            }
                        }
                    }(t, e),
                    function(t, {
                        text: e,
                        selectionStart: n,
                        selectionEnd: r
                    }) {
                        const i = t.selectionStart,
                            o = t.value.slice(0, i),
                            s = t.value.slice(t.selectionEnd);
                        if (null === jn || !0 === jn) {
                            t.contentEditable = "true";
                            try {
                                jn = document.execCommand("insertText", !1, e)
                            } catch (a) {
                                jn = !1
                            }
                            t.contentEditable = "false"
                        }
                        if (jn && !t.value.slice(0, t.selectionStart).endsWith(e) && (jn = !1), !jn) {
                            try {
                                document.execCommand("ms-beginUndoUnit")
                            } catch (po) {}
                            t.value = o + e + s;
                            try {
                                document.execCommand("ms-endUndoUnit")
                            } catch (po) {}
                            t.dispatchEvent(new CustomEvent("input", {
                                bubbles: !0,
                                cancelable: !0
                            }))
                        }
                        null != n && null != r ? t.setSelectionRange(n, r) : t.setSelectionRange(i, t.selectionEnd)
                    }(t, r)
            }

            function Un(t) {
                const e = t.value.slice(0, t.selectionStart),
                    n = t.value.slice(t.selectionEnd),
                    r = e.match(/\n*$/),
                    i = n.match(/^\n*/),
                    o = r ? r[0].length : 0,
                    s = i ? i[0].length : 0;
                let a, c;
                return e.match(/\S/) && o < 2 && (a = Wn("\n", 2 - o)), n.match(/\S/) && s < 2 && (c = Wn("\n", 2 - s)), null == a && (a = ""), null == c && (c = ""), {
                    newlinesToAppend: a,
                    newlinesToPrepend: c
                }
            }

            function zn(t, e) {
                const n = t.closest("markdown-toolbar");
                if (!(n instanceof MarkdownToolbarElement)) return;
                const r = Object.assign(Object.assign({}, {
                        prefix: "",
                        suffix: "",
                        blockPrefix: "",
                        blockSuffix: "",
                        multiline: !1,
                        replaceNext: "",
                        prefixSpace: !1,
                        scanFor: "",
                        surroundWithNewlines: !1,
                        orderedList: !1,
                        trimFirst: !1
                    }), e),
                    i = n.field;
                i && (i.focus(), Vn(i, r))
            }
            const Kn = new WeakMap;
            class RemoteInputElement extends HTMLElement {
                constructor() {
                    super();
                    const t = Yn.bind(null, this, !0),
                        e = {
                            currentQuery: null,
                            oninput: Xn(t),
                            fetch: t,
                            controller: null
                        };
                    Kn.set(this, e)
                }
                static get observedAttributes() {
                    return ["src"]
                }
                attributeChangedCallback(t, e) {
                    e && "src" === t && Yn(this, !1)
                }
                connectedCallback() {
                    const t = this.input;
                    if (!t) return;
                    t.setAttribute("autocomplete", "off"), t.setAttribute("spellcheck", "false");
                    const e = Kn.get(this);
                    e && (t.addEventListener("focus", e.fetch), t.addEventListener("change", e.fetch), t.addEventListener("input", e.oninput))
                }
                disconnectedCallback() {
                    const t = this.input;
                    if (!t) return;
                    const e = Kn.get(this);
                    e && (t.removeEventListener("focus", e.fetch), t.removeEventListener("change", e.fetch), t.removeEventListener("input", e.oninput))
                }
                get input() {
                    const t = this.querySelector("input, textarea");
                    return t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement ? t : null
                }
                get src() {
                    return this.getAttribute("src") || ""
                }
                set src(t) {
                    this.setAttribute("src", t)
                }
            }
            async function Yn(t, e) {
                const n = t.input;
                if (!n) return;
                const r = Kn.get(t);
                if (!r) return;
                const i = n.value;
                if (e && r.currentQuery === i) return;
                r.currentQuery = i;
                const o = t.src;
                if (!o) return;
                const s = document.getElementById(t.getAttribute("aria-owns") || "");
                if (!s) return;
                const a = new URL(o, window.location.href),
                    c = new URLSearchParams(a.search);
                let l;
                c.append(t.getAttribute("param") || "q", i), a.search = c.toString(), r.controller ? r.controller.abort() : (t.dispatchEvent(new CustomEvent("loadstart")), t.setAttribute("loading", "")), r.controller = "AbortController" in window ? new AbortController : {
                    signal: null,
                    abort() {}
                };
                let u = "";
                try {
                    l = await async function(t, e, n) {
                        try {
                            const r = await fetch(e, n);
                            return t.dispatchEvent(new CustomEvent("load")), t.dispatchEvent(new CustomEvent("loadend")), r
                        } catch (r) {
                            throw "AbortError" !== r.name && (t.dispatchEvent(new CustomEvent("error")), t.dispatchEvent(new CustomEvent("loadend"))), r
                        }
                    }(t, a.toString(), {
                        signal: r.controller.signal,
                        credentials: "same-origin",
                        headers: {
                            accept: "text/fragment+html"
                        }
                    }), u = await l.text(), t.removeAttribute("loading"), r.controller = null
                } catch (d) {
                    return void("AbortError" !== d.name && (t.removeAttribute("loading"), r.controller = null))
                }
                l && l.ok ? (s.innerHTML = u, t.dispatchEvent(new CustomEvent("remote-input-success", {
                    bubbles: !0
                }))) : t.dispatchEvent(new CustomEvent("remote-input-error", {
                    bubbles: !0
                }))
            }

            function Xn(t) {
                let e;
                return function() {
                    clearTimeout(e), e = setTimeout((() => {
                        clearTimeout(e), t()
                    }), 300)
                }
            }
            t("q", RemoteInputElement), window.customElements.get("remote-input") || (window.RemoteInputElement = RemoteInputElement, window.customElements.define("remote-input", RemoteInputElement));
            const Gn = new WeakMap;
            let Qn = null;

            function Jn(t, e) {
                return t.closest("task-lists") === e.closest("task-lists")
            }

            function Zn(t) {
                if (t.currentTarget !== t.target) return;
                const e = t.currentTarget;
                if (!(e instanceof Element)) return;
                const n = e.closest(".contains-task-list");
                if (!n) return;
                if (e.classList.add("is-ghost"), t.dataTransfer && t.dataTransfer.setData("text/plain", (e.textContent || "").trim()), !e.parentElement) return;
                const r = Array.from(e.parentElement.children),
                    i = r.indexOf(e),
                    o = Gn.get(e);
                o && o.sortStarted(n), Qn = {
                    didDrop: !1,
                    dragging: e,
                    dropzone: e,
                    sourceList: n,
                    sourceSibling: r[i + 1] || null,
                    sourceIndex: i
                }
            }

            function tr(t) {
                if (!Qn) return;
                const e = t.currentTarget;
                e instanceof Element && (Jn(Qn.dragging, e) ? (t.preventDefault(), t.dataTransfer && (t.dataTransfer.dropEffect = "move"), Qn.dropzone !== e && (Qn.dragging.classList.add("is-dragging"), Qn.dropzone = e, ! function(t, e) {
                    if (t.parentNode === e.parentNode) {
                        let n = t;
                        for (; n;) {
                            if (n === e) return !0;
                            n = n.previousElementSibling
                        }
                    }
                    return !1
                }(Qn.dragging, e) ? e.after(Qn.dragging) : e.before(Qn.dragging))) : t.stopPropagation())
            }

            function er(t) {
                if (!Qn) return;
                t.preventDefault(), t.stopPropagation();
                const e = t.currentTarget;
                if (!(e instanceof Element)) return;
                if (Qn.didDrop = !0, !Qn.dragging.parentElement) return;
                let n = Array.from(Qn.dragging.parentElement.children).indexOf(Qn.dragging);
                const r = e.closest(".contains-task-list");
                if (!r) return;
                if (Qn.sourceIndex === n && Qn.sourceList === r) return;
                Qn.sourceList === r && Qn.sourceIndex < n && n++;
                const i = {
                        list: Qn.sourceList,
                        index: Qn.sourceIndex
                    },
                    o = {
                        list: r,
                        index: n
                    },
                    s = Gn.get(Qn.dragging);
                s && s.sortFinished({
                    src: i,
                    dst: o
                })
            }

            function nr() {
                Qn && (Qn.dragging.classList.remove("is-dragging"), Qn.dragging.classList.remove("is-ghost"), Qn.didDrop || Qn.sourceList.insertBefore(Qn.dragging, Qn.sourceSibling), Qn = null)
            }

            function rr(t) {
                if (!Qn) return;
                const e = t.currentTarget;
                e instanceof Element && (Jn(Qn.dragging, e) ? (t.preventDefault(), t.dataTransfer && (t.dataTransfer.dropEffect = "move")) : t.stopPropagation())
            }
            const ir = new WeakMap;
            class TaskListsElement extends HTMLElement {
                constructor() {
                    super(), this.addEventListener("change", (t => {
                        const e = t.target;
                        e instanceof HTMLInputElement && e.classList.contains("task-list-item-checkbox") && this.dispatchEvent(new CustomEvent("task-lists-check", {
                            bubbles: !0,
                            detail: {
                                position: ur(e),
                                checked: e.checked
                            }
                        }))
                    })), ir.set(this, new MutationObserver(fr.bind(null, this)))
                }
                connectedCallback() {
                    const t = ir.get(this);
                    t && t.observe(this, {
                        childList: !0,
                        subtree: !0
                    }), fr(this)
                }
                disconnectedCallback() {
                    const t = ir.get(this);
                    t && t.disconnect()
                }
                get disabled() {
                    return this.hasAttribute("disabled")
                }
                set disabled(t) {
                    t ? this.setAttribute("disabled", "") : this.removeAttribute("disabled")
                }
                get sortable() {
                    return this.hasAttribute("sortable")
                }
                set sortable(t) {
                    t ? this.setAttribute("sortable", "") : this.removeAttribute("sortable")
                }
                static get observedAttributes() {
                    return ["disabled"]
                }
                attributeChangedCallback(t, e, n) {
                    if (e !== n) switch (t) {
                        case "disabled":
                            pr(this)
                    }
                }
            }
            const or = document.createElement("template");
            or.innerHTML = '\n  <span class="handle">\n    <svg class="drag-handle" aria-hidden="true" width="16" height="16">\n      <path d="M10 13a1 1 0 100-2 1 1 0 000 2zm-4 0a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zM6 5a1 1 0 100-2 1 1 0 000 2z"/>\n    </svg>\n  </span>';
            const sr = new WeakMap;

            function ar(t) {
                if (sr.get(t)) return;
                sr.set(t, !0);
                const e = t.closest("task-lists");
                if (!(e instanceof TaskListsElement)) return;
                if (e.querySelectorAll(".task-list-item").length <= 1) return;
                const n = or.content.cloneNode(!0),
                    r = n.querySelector(".handle");
                if (t.prepend(n), !r) throw new Error("handle not found");
                r.addEventListener("mouseenter", wr), r.addEventListener("mouseleave", yr),
                    function(t, e, n) {
                        Gn.set(t, {
                            sortStarted: e,
                            sortFinished: n
                        }), t.addEventListener("dragstart", Zn), t.addEventListener("dragenter", tr), t.addEventListener("dragend", nr), t.addEventListener("drop", er), t.addEventListener("dragover", rr)
                    }(t, br, Er), t.addEventListener("mouseenter", cr), t.addEventListener("mouseleave", lr)
            }

            function cr(t) {
                const e = t.currentTarget;
                if (!(e instanceof Element)) return;
                const n = e.closest("task-lists");
                n instanceof TaskListsElement && n.sortable && !n.disabled && e.classList.add("hovered")
            }

            function lr(t) {
                const e = t.currentTarget;
                e instanceof Element && e.classList.remove("hovered")
            }

            function ur(t) {
                const e = dr(t);
                if (!e) throw new Error(".contains-task-list not found");
                const n = t.closest(".task-list-item"),
                    r = n ? Array.from(e.children).indexOf(n) : -1;
                return [gr(e), r]
            }

            function dr(t) {
                const e = t.parentElement;
                return e ? e.closest(".contains-task-list") : null
            }

            function hr(t) {
                return dr(t) === mr(t)
            }

            function mr(t) {
                const e = dr(t);
                return e ? mr(e) || e : null
            }

            function fr(t) {
                const e = t.querySelectorAll(".contains-task-list > .task-list-item");
                for (const n of e) hr(n) && ar(n);
                pr(t)
            }

            function pr(t) {
                for (const e of t.querySelectorAll(".task-list-item")) e.classList.toggle("enabled", !t.disabled);
                for (const e of t.querySelectorAll(".task-list-item-checkbox")) e instanceof HTMLInputElement && (e.disabled = t.disabled)
            }

            function gr(t) {
                const e = t.closest("task-lists");
                if (!e) throw new Error("parent not found");
                return Array.from(e.querySelectorAll("ol, ul")).indexOf(t)
            }
            const vr = new WeakMap;

            function br(t) {
                const e = t.closest("task-lists");
                if (!e) throw new Error("parent not found");
                vr.set(e, Array.from(e.querySelectorAll("ol, ul")))
            }

            function Er({
                src: t,
                dst: e
            }) {
                const n = t.list.closest("task-lists");
                if (!n) return;
                const r = vr.get(n);
                r && (vr.delete(n), n.dispatchEvent(new CustomEvent("task-lists-move", {
                    bubbles: !0,
                    detail: {
                        src: [r.indexOf(t.list), t.index],
                        dst: [r.indexOf(e.list), e.index]
                    }
                })))
            }

            function wr(t) {
                const e = t.currentTarget;
                if (!(e instanceof Element)) return;
                const n = e.closest(".task-list-item");
                if (!n) return;
                const r = n.closest("task-lists");
                r instanceof TaskListsElement && r.sortable && !r.disabled && n.setAttribute("draggable", "true")
            }

            function yr(t) {
                if (Qn) return;
                const e = t.currentTarget;
                if (!(e instanceof Element)) return;
                const n = e.closest(".task-list-item");
                n && n.setAttribute("draggable", "false")
            }
            window.customElements.get("task-lists") || (window.TaskListsElement = TaskListsElement, window.customElements.define("task-lists", TaskListsElement)), t("T", TaskListsElement);
            const xr = !!navigator.userAgent.match(/Macintosh/);
            class Combobox {
                constructor(t, e) {
                    this.input = t, this.list = e, this.isComposing = !1, e.id || (e.id = "combobox-" + Math.random().toString().slice(2, 6)), this.keyboardEventHandler = t => function(t, e) {
                        if (t.shiftKey || t.metaKey || t.altKey) return;
                        if (!xr && t.ctrlKey) return;
                        if (e.isComposing) return;
                        switch (t.key) {
                            case "Enter":
                            case "Tab":
                                (function(t, e) {
                                    const n = e.querySelector('[aria-selected="true"]');
                                    return !!n && ("true" === n.getAttribute("aria-disabled") || n.click(), !0)
                                })(e.input, e.list) && t.preventDefault();
                                break;
                            case "Escape":
                                e.clearSelection();
                                break;
                            case "ArrowDown":
                                e.navigate(1), t.preventDefault();
                                break;
                            case "ArrowUp":
                                e.navigate(-1), t.preventDefault();
                                break;
                            case "n":
                                xr && t.ctrlKey && (e.navigate(1), t.preventDefault());
                                break;
                            case "p":
                                xr && t.ctrlKey && (e.navigate(-1), t.preventDefault());
                                break;
                            default:
                                if (t.ctrlKey) break;
                                e.clearSelection()
                        }
                    }(t, this), this.compositionEventHandler = t => function(t, e) {
                        e.isComposing = "compositionstart" === t.type;
                        if (!document.getElementById(e.input.getAttribute("aria-controls") || "")) return;
                        e.clearSelection()
                    }(t, this), this.inputHandler = this.clearSelection.bind(this), t.setAttribute("role", "combobox"), t.setAttribute("aria-controls", e.id), t.setAttribute("aria-expanded", "false"), t.setAttribute("aria-autocomplete", "list"), t.setAttribute("aria-haspopup", "listbox")
                }
                destroy() {
                    this.clearSelection(), this.stop(), this.input.removeAttribute("role"), this.input.removeAttribute("aria-controls"), this.input.removeAttribute("aria-expanded"), this.input.removeAttribute("aria-autocomplete"), this.input.removeAttribute("aria-haspopup")
                }
                start() {
                    this.input.setAttribute("aria-expanded", "true"), this.input.addEventListener("compositionstart", this.compositionEventHandler), this.input.addEventListener("compositionend", this.compositionEventHandler), this.input.addEventListener("input", this.inputHandler), this.input.addEventListener("keydown", this.keyboardEventHandler), this.list.addEventListener("click", kr)
                }
                stop() {
                    this.clearSelection(), this.input.setAttribute("aria-expanded", "false"), this.input.removeEventListener("compositionstart", this.compositionEventHandler), this.input.removeEventListener("compositionend", this.compositionEventHandler), this.input.removeEventListener("input", this.inputHandler), this.input.removeEventListener("keydown", this.keyboardEventHandler), this.list.removeEventListener("click", kr)
                }
                navigate(t = 1) {
                    const e = Array.from(this.list.querySelectorAll('[aria-selected="true"]')).filter(Ar)[0],
                        n = Array.from(this.list.querySelectorAll('[role="option"]')).filter(Ar),
                        r = n.indexOf(e);
                    if (r === n.length - 1 && 1 === t || 0 === r && -1 === t) return this.clearSelection(), void this.input.focus();
                    let i = 1 === t ? 0 : n.length - 1;
                    if (e && r >= 0) {
                        const e = r + t;
                        e >= 0 && e < n.length && (i = e)
                    }
                    const o = n[i];
                    if (o)
                        for (const s of n) o === s ? (this.input.setAttribute("aria-activedescendant", o.id), o.setAttribute("aria-selected", "true"), Tr(this.list, o)) : s.setAttribute("aria-selected", "false")
                }
                clearSelection() {
                    this.input.removeAttribute("aria-activedescendant");
                    for (const t of this.list.querySelectorAll('[aria-selected="true"]')) t.setAttribute("aria-selected", "false")
                }
            }

            function kr(t) {
                if (!(t.target instanceof Element)) return;
                const e = t.target.closest('[role="option"]');
                e && "true" !== e.getAttribute("aria-disabled") && function(t) {
                    t.dispatchEvent(new CustomEvent("combobox-commit", {
                        bubbles: !0
                    }))
                }(e)
            }

            function Ar(t) {
                return !t.hidden && !(t instanceof HTMLInputElement && "hidden" === t.type) && (t.offsetWidth > 0 || t.offsetHeight > 0)
            }

            function Tr(t, e) {
                (function(t, e) {
                    const n = t.scrollTop,
                        r = n + t.clientHeight,
                        i = e.offsetTop,
                        o = i + e.clientHeight;
                    return i >= n && o <= r
                })(t, e) || (t.scrollTop = e.offsetTop)
            }
            t("C", Combobox);
            const Lr = /\s|\(|\[/;

            function Mr(t, e, n, {
                multiWord: r,
                lookBackIndex: i,
                lastMatchPosition: o
            } = {
                multiWord: !1,
                lookBackIndex: 0,
                lastMatchPosition: null
            }) {
                let s = t.lastIndexOf(e, n - 1);
                if (-1 === s) return;
                if (s < i) return;
                if (r) {
                    if (null != o) {
                        if (o === s) return;
                        s = o - 1
                    }
                    if (" " === t[s + 1] && n >= s + 2) return;
                    if (t.lastIndexOf("\n", n - 1) > s) return;
                    if (t.lastIndexOf(".", n - 1) > s) return
                } else {
                    if (t.lastIndexOf(" ", n - 1) > s) return
                }
                const a = t[s - 1];
                if (a && !Lr.test(a)) return;
                return {
                    text: t.substring(s + e.length, n),
                    position: s + e.length
                }
            }
            const Sr = ["position:absolute;", "overflow:auto;", "word-wrap:break-word;", "top:0px;", "left:-9999px;"],
                Cr = ["box-sizing", "font-family", "font-size", "font-style", "font-variant", "font-weight", "height", "letter-spacing", "line-height", "max-height", "min-height", "padding-bottom", "padding-left", "padding-right", "padding-top", "border-bottom", "border-left", "border-right", "border-top", "text-decoration", "text-indent", "text-transform", "width", "word-spacing"],
                Nr = new WeakMap;

            function Ir(t, e = t.selectionEnd) {
                const {
                    mirror: n,
                    marker: r
                } = function(t, e) {
                    const n = t.nodeName.toLowerCase();
                    if ("textarea" !== n && "input" !== n) throw new Error("expected textField to a textarea or input");
                    let r = Nr.get(t);
                    if (r && r.parentElement === t.parentElement) r.innerHTML = "";
                    else {
                        r = document.createElement("div"), Nr.set(t, r);
                        const e = window.getComputedStyle(t),
                            i = Sr.slice(0);
                        "textarea" === n ? i.push("white-space:pre-wrap;") : i.push("white-space:nowrap;");
                        for (let t = 0, n = Cr.length; t < n; t++) {
                            const n = Cr[t];
                            i.push(`${n}:${e.getPropertyValue(n)};`)
                        }
                        r.style.cssText = i.join(" ")
                    }
                    const i = document.createElement("span");
                    let o, s;
                    if (i.style.cssText = "position: absolute;", i.innerHTML = "&nbsp;", "number" == typeof e) {
                        let n = t.value.substring(0, e);
                        n && (o = document.createTextNode(n)), n = t.value.substring(e), n && (s = document.createTextNode(n))
                    } else {
                        const e = t.value;
                        e && (o = document.createTextNode(e))
                    }
                    if (o && r.appendChild(o), r.appendChild(i), s && r.appendChild(s), !r.parentElement) {
                        if (!t.parentElement) throw new Error("textField must have a parentElement to mirror");
                        t.parentElement.insertBefore(r, t)
                    }
                    return r.scrollTop = t.scrollTop, r.scrollLeft = t.scrollLeft, {
                        mirror: r,
                        marker: i
                    }
                }(t, e), i = n.getBoundingClientRect(), o = r.getBoundingClientRect();
                return setTimeout((() => {
                    n.remove()
                }), 5e3), {
                    top: o.top - i.top,
                    left: o.left - i.left
                }
            }
            const Dr = new WeakMap;
            class TextExpander {
                constructor(t, e) {
                    this.expander = t, this.input = e, this.combobox = null, this.menu = null, this.match = null, this.justPasted = !1, this.lookBackIndex = 0, this.oninput = this.onInput.bind(this), this.onpaste = this.onPaste.bind(this), this.onkeydown = this.onKeydown.bind(this), this.oncommit = this.onCommit.bind(this), this.onmousedown = this.onMousedown.bind(this), this.onblur = this.onBlur.bind(this), this.interactingWithList = !1, e.addEventListener("paste", this.onpaste), e.addEventListener("input", this.oninput), e.addEventListener("keydown", this.onkeydown), e.addEventListener("blur", this.onblur)
                }
                destroy() {
                    this.input.removeEventListener("paste", this.onpaste), this.input.removeEventListener("input", this.oninput), this.input.removeEventListener("keydown", this.onkeydown), this.input.removeEventListener("blur", this.onblur)
                }
                dismissMenu() {
                    this.deactivate() && (this.lookBackIndex = this.input.selectionEnd || this.lookBackIndex)
                }
                activate(t, e) {
                    if (this.input !== document.activeElement) return;
                    this.deactivate(), this.menu = e, e.id || (e.id = "text-expander-" + Math.floor(1e5 * Math.random()).toString()), this.expander.append(e), this.combobox = new Combobox(this.input, e);
                    const {
                        top: n,
                        left: r
                    } = Ir(this.input, t.position);
                    e.style.top = n + "px", e.style.left = r + "px", this.combobox.start(), e.addEventListener("combobox-commit", this.oncommit), e.addEventListener("mousedown", this.onmousedown), this.combobox.navigate(1)
                }
                deactivate() {
                    const t = this.menu;
                    return !(!t || !this.combobox) && (this.menu = null, t.removeEventListener("combobox-commit", this.oncommit), t.removeEventListener("mousedown", this.onmousedown), this.combobox.destroy(), this.combobox = null, t.remove(), !0)
                }
                onCommit({
                    target: t
                }) {
                    const e = t;
                    if (!(e instanceof HTMLElement)) return;
                    if (!this.combobox) return;
                    const n = this.match;
                    if (!n) return;
                    const r = this.input.value.substring(0, n.position - n.key.length),
                        i = this.input.value.substring(n.position + n.text.length),
                        o = {
                            item: e,
                            key: n.key,
                            value: null
                        };
                    if (!this.expander.dispatchEvent(new CustomEvent("text-expander-value", {
                            cancelable: !0,
                            detail: o
                        }))) return;
                    if (!o.value) return;
                    const s = o.value + " ";
                    this.input.value = r + s + i;
                    const a = r.length + s.length;
                    this.deactivate(), this.input.focus(), this.input.selectionStart = a, this.input.selectionEnd = a, this.lookBackIndex = a, this.match = null
                }
                onBlur() {
                    this.interactingWithList ? this.interactingWithList = !1 : this.deactivate()
                }
                onPaste() {
                    this.justPasted = !0
                }
                async onInput() {
                    if (this.justPasted) return void(this.justPasted = !1);
                    const t = this.findMatch();
                    if (t) {
                        this.match = t;
                        const e = await this.notifyProviders(t);
                        if (!this.match) return;
                        e ? this.activate(t, e) : this.deactivate()
                    } else this.match = null, this.deactivate()
                }
                findMatch() {
                    const t = this.input.selectionEnd || 0,
                        e = this.input.value;
                    t <= this.lookBackIndex && (this.lookBackIndex = t - 1);
                    for (const {
                            key: n,
                            multiWord: r
                        } of this.expander.keys) {
                        const i = Mr(e, n, t, {
                            multiWord: r,
                            lookBackIndex: this.lookBackIndex,
                            lastMatchPosition: this.match ? this.match.position : null
                        });
                        if (i) return {
                            text: i.text,
                            key: n,
                            position: i.position
                        }
                    }
                }
                async notifyProviders(t) {
                    const e = [];
                    if (!this.expander.dispatchEvent(new CustomEvent("text-expander-change", {
                            cancelable: !0,
                            detail: {
                                provide: t => e.push(t),
                                text: t.text,
                                key: t.key
                            }
                        }))) return;
                    return (await Promise.all(e)).filter((t => t.matched)).map((t => t.fragment))[0]
                }
                onMousedown() {
                    this.interactingWithList = !0
                }
                onKeydown(t) {
                    "Escape" === t.key && (this.match = null, this.deactivate() && (this.lookBackIndex = this.input.selectionEnd || this.lookBackIndex, t.stopImmediatePropagation(), t.preventDefault()))
                }
            }
            class TextExpanderElement extends HTMLElement {
                get keys() {
                    const t = this.getAttribute("keys"),
                        e = t ? t.split(" ") : [],
                        n = this.getAttribute("multiword"),
                        r = n ? n.split(" ") : [],
                        i = 0 === r.length && this.hasAttribute("multiword");
                    return e.map((t => ({
                        key: t,
                        multiWord: i || r.includes(t)
                    })))
                }
                connectedCallback() {
                    const t = this.querySelector('input[type="text"], textarea');
                    if (!(t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement)) return;
                    const e = new TextExpander(this, t);
                    Dr.set(this, e)
                }
                disconnectedCallback() {
                    const t = Dr.get(this);
                    t && (t.destroy(), Dr.delete(this))
                }
                dismiss() {
                    const t = Dr.get(this);
                    t && t.dismissMenu()
                }
            }
            window.customElements.get("text-expander") || (window.TextExpanderElement = TextExpanderElement, window.customElements.define("text-expander", TextExpanderElement));
            const Hr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                Pr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            function Rr(t) {
                return ("0" + t).slice(-2)
            }

            function Or(t, e) {
                const n = t.getDay(),
                    r = t.getDate(),
                    i = t.getMonth(),
                    o = t.getFullYear(),
                    s = t.getHours(),
                    a = t.getMinutes(),
                    c = t.getSeconds();
                return e.replace(/%([%aAbBcdeHIlmMpPSwyYZz])/g, (function(e) {
                    let l;
                    switch (e[1]) {
                        case "%":
                            return "%";
                        case "a":
                            return Hr[n].slice(0, 3);
                        case "A":
                            return Hr[n];
                        case "b":
                            return Pr[i].slice(0, 3);
                        case "B":
                            return Pr[i];
                        case "c":
                            return t.toString();
                        case "d":
                            return Rr(r);
                        case "e":
                            return String(r);
                        case "H":
                            return Rr(s);
                        case "I":
                            return Rr(Or(t, "%l"));
                        case "l":
                            return String(0 === s || 12 === s ? 12 : (s + 12) % 12);
                        case "m":
                            return Rr(i + 1);
                        case "M":
                            return Rr(a);
                        case "p":
                            return s > 11 ? "PM" : "AM";
                        case "P":
                            return s > 11 ? "pm" : "am";
                        case "S":
                            return Rr(c);
                        case "w":
                            return String(n);
                        case "y":
                            return Rr(o % 100);
                        case "Y":
                            return String(o);
                        case "Z":
                            return l = t.toString().match(/\((\w+)\)$/), l ? l[1] : "";
                        case "z":
                            return l = t.toString().match(/\w([+-]\d\d\d\d) /), l ? l[1] : ""
                    }
                    return ""
                }))
            }

            function _r(t) {
                let e;
                return function() {
                    if (e) return e;
                    if ("Intl" in window) try {
                        return e = new Intl.DateTimeFormat(void 0, t), e
                    } catch (po) {
                        if (!(po instanceof RangeError)) throw po
                    }
                }
            }
            let qr = null;
            const Fr = _r({
                day: "numeric",
                month: "short"
            });

            function Br() {
                if (null !== qr) return qr;
                const t = Fr();
                if (t) {
                    const e = t.format(new Date(0));
                    return qr = !!e.match(/^\d/), qr
                }
                return !1
            }
            let Wr = null;
            const $r = _r({
                day: "numeric",
                month: "short",
                year: "numeric"
            });

            function jr(t) {
                const e = t.closest("[lang]");
                return e instanceof HTMLElement && e.lang ? e.lang : "default"
            }
            const Vr = new WeakMap;
            class ExtendedTimeElement extends HTMLElement {
                static get observedAttributes() {
                    return ["datetime", "day", "format", "lang", "hour", "minute", "month", "second", "title", "weekday", "year", "time-zone-name"]
                }
                connectedCallback() {
                    const t = this.getFormattedTitle();
                    t && !this.hasAttribute("title") && this.setAttribute("title", t);
                    const e = this.getFormattedDate();
                    e && (this.textContent = e)
                }
                attributeChangedCallback(t, e, n) {
                    const r = this.getFormattedTitle();
                    if ("datetime" === t) {
                        const t = Date.parse(n);
                        isNaN(t) ? Vr.delete(this) : Vr.set(this, new Date(t))
                    }
                    const i = this.getFormattedTitle(),
                        o = this.getAttribute("title");
                    "title" === t || !i || o && o !== r || this.setAttribute("title", i);
                    const s = this.getFormattedDate();
                    s && (this.textContent = s)
                }
                get date() {
                    return Vr.get(this)
                }
                getFormattedTitle() {
                    const t = this.date;
                    if (!t) return;
                    const e = Ur();
                    if (e) return e.format(t);
                    try {
                        return t.toLocaleString()
                    } catch (po) {
                        if (po instanceof RangeError) return t.toString();
                        throw po
                    }
                }
                getFormattedDate() {}
            }
            const Ur = _r({
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                    hour: "numeric",
                    minute: "2-digit",
                    timeZoneName: "short"
                }),
                zr = new WeakMap;
            class LocalTimeElement extends ExtendedTimeElement {
                attributeChangedCallback(t, e, n) {
                    "hour" !== t && "minute" !== t && "second" !== t && "time-zone-name" !== t || zr.delete(this), super.attributeChangedCallback(t, e, n)
                }
                getFormattedDate() {
                    const t = this.date;
                    if (!t) return;
                    return `${function(t,e){const n={weekday:{short:"%a",long:"%A"},day:{numeric:"%e","2-digit":"%d"},month:{short:"%b",long:"%B"},year:{numeric:"%Y","2-digit":"%y"}};let r=Br()?"weekday day month year":"weekday month day, year";for(const i in n){const e=n[i][t.getAttribute(i)||""];r=r.replace(i,e||"")}return r=r.replace(/(\s,)|(,\s$)/,""),Or(e,r).replace(/\s+/," ").trim()}(this,t)||""} ${function(t,e){const n={},r=t.getAttribute("hour");"numeric"!==r&&"2-digit"!==r||(n.hour=r);const i=t.getAttribute("minute");"numeric"!==i&&"2-digit"!==i||(n.minute=i);const o=t.getAttribute("second");"numeric"!==o&&"2-digit"!==o||(n.second=o);const s=t.getAttribute("time-zone-name");"short"!==s&&"long"!==s||(n.timeZoneName=s);if(0===Object.keys(n).length)return;let a=zr.get(t);a||(a=_r(n),zr.set(t,a));const c=a();if(c)return c.format(e);return Or(e,n.second?"%H:%M:%S":"%H:%M")}(this,t)||""}`.trim()
                }
            }
            window.customElements.get("local-time") || (window.LocalTimeElement = LocalTimeElement, window.customElements.define("local-time", LocalTimeElement));
            class RelativeTime {
                constructor(t, e) {
                    this.date = t, this.locale = e
                }
                toString() {
                    const t = this.timeElapsed();
                    if (t) return t; {
                        const t = this.timeAhead();
                        return t || "on " + this.formatDate()
                    }
                }
                timeElapsed() {
                    const t = (new Date).getTime() - this.date.getTime(),
                        e = Math.round(t / 1e3),
                        n = Math.round(e / 60),
                        r = Math.round(n / 60),
                        i = Math.round(r / 24);
                    return t >= 0 && i < 30 ? this.timeAgoFromMs(t) : null
                }
                timeAhead() {
                    const t = this.date.getTime() - (new Date).getTime(),
                        e = Math.round(t / 1e3),
                        n = Math.round(e / 60),
                        r = Math.round(n / 60),
                        i = Math.round(r / 24);
                    return t >= 0 && i < 30 ? this.timeUntil() : null
                }
                timeAgo() {
                    const t = (new Date).getTime() - this.date.getTime();
                    return this.timeAgoFromMs(t)
                }
                timeAgoFromMs(t) {
                    const e = Math.round(t / 1e3),
                        n = Math.round(e / 60),
                        r = Math.round(n / 60),
                        i = Math.round(r / 24),
                        o = Math.round(i / 30),
                        s = Math.round(o / 12);
                    return t < 0 || e < 10 ? Kr(this.locale, 0, "second") : e < 45 ? Kr(this.locale, -e, "second") : e < 90 || n < 45 ? Kr(this.locale, -n, "minute") : n < 90 || r < 24 ? Kr(this.locale, -r, "hour") : r < 36 || i < 30 ? Kr(this.locale, -i, "day") : o < 18 ? Kr(this.locale, -o, "month") : Kr(this.locale, -s, "year")
                }
                microTimeAgo() {
                    const t = (new Date).getTime() - this.date.getTime(),
                        e = Math.round(t / 1e3),
                        n = Math.round(e / 60),
                        r = Math.round(n / 60),
                        i = Math.round(r / 24),
                        o = Math.round(i / 30),
                        s = Math.round(o / 12);
                    return n < 1 ? "1m" : n < 60 ? n + "m" : r < 24 ? r + "h" : i < 365 ? i + "d" : s + "y"
                }
                timeUntil() {
                    const t = this.date.getTime() - (new Date).getTime();
                    return this.timeUntilFromMs(t)
                }
                timeUntilFromMs(t) {
                    const e = Math.round(t / 1e3),
                        n = Math.round(e / 60),
                        r = Math.round(n / 60),
                        i = Math.round(r / 24),
                        o = Math.round(i / 30),
                        s = Math.round(o / 12);
                    return o >= 18 || o >= 12 ? Kr(this.locale, s, "year") : i >= 45 || i >= 30 ? Kr(this.locale, o, "month") : r >= 36 || r >= 24 ? Kr(this.locale, i, "day") : n >= 90 || n >= 45 ? Kr(this.locale, r, "hour") : e >= 90 || e >= 45 ? Kr(this.locale, n, "minute") : Kr(this.locale, e >= 10 ? e : 0, "second")
                }
                microTimeUntil() {
                    const t = this.date.getTime() - (new Date).getTime(),
                        e = Math.round(t / 1e3),
                        n = Math.round(e / 60),
                        r = Math.round(n / 60),
                        i = Math.round(r / 24),
                        o = Math.round(i / 30),
                        s = Math.round(o / 12);
                    return i >= 365 ? s + "y" : r >= 24 ? i + "d" : n >= 60 ? r + "h" : n > 1 ? n + "m" : "1m"
                }
                formatDate() {
                    let t = Br() ? "%e %b" : "%b %e";
                    var e;
                    return e = this.date, (new Date).getUTCFullYear() !== e.getUTCFullYear() && (t += function() {
                        if (null !== Wr) return Wr;
                        const t = $r();
                        if (t) {
                            const e = t.format(new Date(0));
                            return Wr = !!e.match(/\d,/), Wr
                        }
                        return !0
                    }() ? ", %Y" : " %Y"), Or(this.date, t)
                }
                formatTime() {
                    const t = Yr();
                    return t ? t.format(this.date) : Or(this.date, "%l:%M%P")
                }
            }

            function Kr(t, e, n) {
                const r = function(t, e) {
                    if ("Intl" in window && "RelativeTimeFormat" in window.Intl) try {
                        return new Intl.RelativeTimeFormat(t, e)
                    } catch (po) {
                        if (!(po instanceof RangeError)) throw po
                    }
                }(t, {
                    numeric: "auto"
                });
                return r ? r.format(e, n) : function(t, e) {
                    if (0 === t) switch (e) {
                        case "year":
                        case "quarter":
                        case "month":
                        case "week":
                            return "this " + e;
                        case "day":
                            return "today";
                        case "hour":
                        case "minute":
                            return `in 0 ${e}s`;
                        case "second":
                            return "now"
                    } else if (1 === t) switch (e) {
                        case "year":
                        case "quarter":
                        case "month":
                        case "week":
                            return "next " + e;
                        case "day":
                            return "tomorrow";
                        case "hour":
                        case "minute":
                        case "second":
                            return "in 1 " + e
                    } else if (-1 === t) switch (e) {
                        case "year":
                        case "quarter":
                        case "month":
                        case "week":
                            return "last " + e;
                        case "day":
                            return "yesterday";
                        case "hour":
                        case "minute":
                        case "second":
                            return `1 ${e} ago`
                    } else if (t > 1) switch (e) {
                        case "year":
                        case "quarter":
                        case "month":
                        case "week":
                        case "day":
                        case "hour":
                        case "minute":
                        case "second":
                            return `in ${t} ${e}s`
                    } else if (t < -1) switch (e) {
                        case "year":
                        case "quarter":
                        case "month":
                        case "week":
                        case "day":
                        case "hour":
                        case "minute":
                        case "second":
                            return `${-t} ${e}s ago`
                    }
                    throw new RangeError(`Invalid unit argument for format() '${e}'`)
                }(e, n)
            }
            const Yr = _r({
                hour: "numeric",
                minute: "2-digit"
            });
            class RelativeTimeElement extends ExtendedTimeElement {
                getFormattedDate() {
                    const t = this.date;
                    if (t) return new RelativeTime(t, jr(this)).toString()
                }
                connectedCallback() {
                    Xr.push(this), Gr || (Qr(), Gr = window.setInterval(Qr, 6e4)), super.connectedCallback()
                }
                disconnectedCallback() {
                    const t = Xr.indexOf(this); - 1 !== t && Xr.splice(t, 1), Xr.length || Gr && (clearInterval(Gr), Gr = null)
                }
            }
            t("R", RelativeTimeElement);
            const Xr = [];
            let Gr;

            function Qr() {
                let t, e, n;
                for (e = 0, n = Xr.length; e < n; e++) t = Xr[e], t.textContent = t.getFormattedDate() || ""
            }
            window.customElements.get("relative-time") || (window.RelativeTimeElement = RelativeTimeElement, window.customElements.define("relative-time", RelativeTimeElement));
            class TimeAgoElement extends RelativeTimeElement {
                getFormattedDate() {
                    const t = this.getAttribute("format"),
                        e = this.date;
                    if (e) return "micro" === t ? new RelativeTime(e, jr(this)).microTimeAgo() : new RelativeTime(e, jr(this)).timeAgo()
                }
            }
            window.customElements.get("time-ago") || (window.TimeAgoElement = TimeAgoElement, window.customElements.define("time-ago", TimeAgoElement));
            class TimeUntilElement extends RelativeTimeElement {
                getFormattedDate() {
                    const t = this.getAttribute("format"),
                        e = this.date;
                    if (e) return "micro" === t ? new RelativeTime(e, jr(this)).microTimeUntil() : new RelativeTime(e, jr(this)).timeUntil()
                }
            }
            window.customElements.get("time-until") || (window.TimeUntilElement = TimeUntilElement, window.customElements.define("time-until", TimeUntilElement));
            class AutocompleteEvent extends CustomEvent {
                constructor(t, e) {
                    super(t, e), this.relatedTarget = e.relatedTarget
                }
            }
            const Jr = new WeakMap;

            function Zr(t, e) {
                const n = new XMLHttpRequest;
                return n.open("GET", e, !0), n.setRequestHeader("Accept", "text/fragment+html"),
                    function(t, e) {
                        const n = Jr.get(t);
                        n && n.abort();
                        Jr.set(t, e);
                        const r = () => Jr.delete(t),
                            i = function(t) {
                                return new Promise(((e, n) => {
                                    t.onload = function() {
                                        t.status >= 200 && t.status < 300 ? e(t.responseText) : n(new Error(t.responseText))
                                    }, t.onerror = n, t.send()
                                }))
                            }(e);
                        return i.then(r, r), i
                    }(t, n)
            }
            class Autocomplete {
                constructor(t, e, n) {
                    this.container = t, this.input = e, this.results = n, this.combobox = new Combobox(e, n), this.results.hidden = !0, this.input.setAttribute("autocomplete", "off"), this.input.setAttribute("spellcheck", "false"), this.interactingWithList = !1, this.onInputChange = function(t, e = 0) {
                        let n;
                        return function(...r) {
                            clearTimeout(n), n = window.setTimeout((() => {
                                clearTimeout(n), t(...r)
                            }), e)
                        }
                    }(this.onInputChange.bind(this), 300), this.onResultsMouseDown = this.onResultsMouseDown.bind(this), this.onInputBlur = this.onInputBlur.bind(this), this.onInputFocus = this.onInputFocus.bind(this), this.onKeydown = this.onKeydown.bind(this), this.onCommit = this.onCommit.bind(this), this.input.addEventListener("keydown", this.onKeydown), this.input.addEventListener("focus", this.onInputFocus), this.input.addEventListener("blur", this.onInputBlur), this.input.addEventListener("input", this.onInputChange), this.results.addEventListener("mousedown", this.onResultsMouseDown), this.results.addEventListener("combobox-commit", this.onCommit)
                }
                destroy() {
                    this.input.removeEventListener("keydown", this.onKeydown), this.input.removeEventListener("focus", this.onInputFocus), this.input.removeEventListener("blur", this.onInputBlur), this.input.removeEventListener("input", this.onInputChange), this.results.removeEventListener("mousedown", this.onResultsMouseDown), this.results.removeEventListener("combobox-commit", this.onCommit)
                }
                onKeydown(t) {
                    if ("Escape" === t.key && this.container.open) this.container.open = !1, t.stopPropagation(), t.preventDefault();
                    else if (t.altKey && "ArrowUp" === t.key && this.container.open) this.container.open = !1, t.stopPropagation(), t.preventDefault();
                    else if (t.altKey && "ArrowDown" === t.key && !this.container.open) {
                        if (!this.input.value.trim()) return;
                        this.container.open = !0, t.stopPropagation(), t.preventDefault()
                    }
                }
                onInputFocus() {
                    this.fetchResults()
                }
                onInputBlur() {
                    this.interactingWithList ? this.interactingWithList = !1 : this.container.open = !1
                }
                onCommit({
                    target: t
                }) {
                    const e = t;
                    if (!(e instanceof HTMLElement)) return;
                    if (this.container.open = !1, e instanceof HTMLAnchorElement) return;
                    const n = e.getAttribute("data-autocomplete-value") || e.textContent;
                    this.container.value = n
                }
                onResultsMouseDown() {
                    this.interactingWithList = !0
                }
                onInputChange() {
                    this.container.removeAttribute("value"), this.fetchResults()
                }
                identifyOptions() {
                    let t = 0;
                    for (const e of this.results.querySelectorAll('[role="option"]:not([id])')) e.id = `${this.results.id}-option-${t++}`
                }
                fetchResults() {
                    const t = this.input.value.trim();
                    if (!t) return void(this.container.open = !1);
                    const e = this.container.src;
                    if (!e) return;
                    const n = new URL(e, window.location.href),
                        r = new URLSearchParams(n.search.slice(1));
                    r.append("q", t), n.search = r.toString(), this.container.dispatchEvent(new CustomEvent("loadstart")), Zr(this.input, n.toString()).then((t => {
                        this.results.innerHTML = t, this.identifyOptions();
                        const e = !!this.results.querySelector('[role="option"]');
                        this.container.open = e, this.container.dispatchEvent(new CustomEvent("load")), this.container.dispatchEvent(new CustomEvent("loadend"))
                    })).catch((() => {
                        this.container.dispatchEvent(new CustomEvent("error")), this.container.dispatchEvent(new CustomEvent("loadend"))
                    }))
                }
                open() {
                    this.results.hidden && (this.combobox.start(), this.results.hidden = !1)
                }
                close() {
                    this.results.hidden || (this.combobox.stop(), this.results.hidden = !0)
                }
            }
            const ti = new WeakMap;
            class AutocompleteElement extends HTMLElement {
                constructor() {
                    super()
                }
                connectedCallback() {
                    const t = this.getAttribute("for");
                    if (!t) return;
                    const e = this.querySelector("input"),
                        n = document.getElementById(t);
                    e instanceof HTMLInputElement && n && (ti.set(this, new Autocomplete(this, e, n)), n.setAttribute("role", "listbox"))
                }
                disconnectedCallback() {
                    const t = ti.get(this);
                    t && (t.destroy(), ti.delete(this))
                }
                get src() {
                    return this.getAttribute("src") || ""
                }
                set src(t) {
                    this.setAttribute("src", t)
                }
                get value() {
                    return this.getAttribute("value") || ""
                }
                set value(t) {
                    this.setAttribute("value", t)
                }
                get open() {
                    return this.hasAttribute("open")
                }
                set open(t) {
                    t ? this.setAttribute("open", "") : this.removeAttribute("open")
                }
                static get observedAttributes() {
                    return ["open", "value"]
                }
                attributeChangedCallback(t, e, n) {
                    if (e === n) return;
                    const r = ti.get(this);
                    if (r) switch (t) {
                        case "open":
                            null === n ? r.close() : r.open();
                            break;
                        case "value":
                            null !== n && (r.input.value = n), this.dispatchEvent(new AutocompleteEvent("auto-complete-change", {
                                bubbles: !0,
                                relatedTarget: r.input
                            }))
                    }
                }
            }

            function ei(t) {
                if ("clipboard" in navigator) return navigator.clipboard.writeText(t.textContent);
                const e = getSelection();
                if (null == e) return Promise.reject(new Error);
                e.removeAllRanges();
                const n = document.createRange();
                return n.selectNodeContents(t), e.addRange(n), document.execCommand("copy"), e.removeAllRanges(), Promise.resolve()
            }

            function ni(t) {
                if ("clipboard" in navigator) return navigator.clipboard.writeText(t);
                const e = document.body;
                if (!e) return Promise.reject(new Error);
                const n = function(t) {
                    const e = document.createElement("pre");
                    return e.style.width = "1px", e.style.height = "1px", e.style.position = "fixed", e.style.top = "5px", e.textContent = t, e
                }(t);
                return e.appendChild(n), ei(n), e.removeChild(n), Promise.resolve()
            }

            function ri(t) {
                const e = t.getAttribute("for"),
                    n = t.getAttribute("value");

                function r() {
                    t.dispatchEvent(new CustomEvent("clipboard-copy", {
                        bubbles: !0
                    }))
                }
                if (n) ni(n).then(r);
                else if (e) {
                    const n = "getRootNode" in Element.prototype ? t.getRootNode() : t.ownerDocument;
                    if (!(n instanceof Document || "ShadowRoot" in window && n instanceof ShadowRoot)) return;
                    const o = n.getElementById(e);
                    o && (i = o, i instanceof HTMLInputElement || i instanceof HTMLTextAreaElement ? ni(i.value) : i instanceof HTMLAnchorElement && i.hasAttribute("href") ? ni(i.href) : ei(i)).then(r)
                }
                var i
            }

            function ii(t) {
                const e = t.currentTarget;
                e instanceof HTMLElement && ri(e)
            }

            function oi(t) {
                if (" " === t.key || "Enter" === t.key) {
                    const e = t.currentTarget;
                    e instanceof HTMLElement && (t.preventDefault(), ri(e))
                }
            }

            function si(t) {
                t.currentTarget.addEventListener("keydown", oi)
            }

            function ai(t) {
                t.currentTarget.removeEventListener("keydown", oi)
            }
            window.customElements.get("auto-complete") || (window.AutocompleteElement = AutocompleteElement, window.customElements.define("auto-complete", AutocompleteElement)), t("A", AutocompleteElement);
            class ClipboardCopyElement extends HTMLElement {
                constructor() {
                    super(), this.addEventListener("click", ii), this.addEventListener("focus", si), this.addEventListener("blur", ai)
                }
                connectedCallback() {
                    this.hasAttribute("tabindex") || this.setAttribute("tabindex", "0"), this.hasAttribute("role") || this.setAttribute("role", "button")
                }
                get value() {
                    return this.getAttribute("value") || ""
                }
                set value(t) {
                    this.setAttribute("value", t)
                }
            }

            function ci(t) {
                return Array.from(t.querySelectorAll('[role="tablist"] [role="tab"]')).filter((e => e instanceof HTMLElement && e.closest(t.tagName) === t))
            }
            window.customElements.get("clipboard-copy") || (window.ClipboardCopyElement = ClipboardCopyElement, window.customElements.define("clipboard-copy", ClipboardCopyElement)), t("l", ClipboardCopyElement);
            class TabContainerElement extends HTMLElement {
                constructor() {
                    super(), this.addEventListener("keydown", (t => {
                        const e = t.target;
                        if (!(e instanceof HTMLElement)) return;
                        if (e.closest(this.tagName) !== this) return;
                        if ("tab" !== e.getAttribute("role") && !e.closest('[role="tablist"]')) return;
                        const n = ci(this),
                            r = n.indexOf(n.find((t => t.matches('[aria-selected="true"]'))));
                        if ("ArrowRight" === t.code) {
                            let t = r + 1;
                            t >= n.length && (t = 0), li(this, t)
                        } else if ("ArrowLeft" === t.code) {
                            let t = r - 1;
                            t < 0 && (t = n.length - 1), li(this, t)
                        } else "Home" === t.code ? (li(this, 0), t.preventDefault()) : "End" === t.code && (li(this, n.length - 1), t.preventDefault())
                    })), this.addEventListener("click", (t => {
                        const e = ci(this);
                        if (!(t.target instanceof Element)) return;
                        if (t.target.closest(this.tagName) !== this) return;
                        const n = t.target.closest('[role="tab"]');
                        if (!(n instanceof HTMLElement && n.closest('[role="tablist"]'))) return;
                        li(this, e.indexOf(n))
                    }))
                }
                connectedCallback() {
                    for (const t of ci(this)) t.hasAttribute("aria-selected") || t.setAttribute("aria-selected", "false"), t.hasAttribute("tabindex") || ("true" === t.getAttribute("aria-selected") ? t.setAttribute("tabindex", "0") : t.setAttribute("tabindex", "-1"))
                }
            }

            function li(t, e) {
                const n = ci(t),
                    r = Array.from(t.querySelectorAll('[role="tabpanel"]')).filter((e => e.closest(t.tagName) === t)),
                    i = n[e],
                    o = r[e];
                if (!!t.dispatchEvent(new CustomEvent("tab-container-change", {
                        bubbles: !0,
                        cancelable: !0,
                        detail: {
                            relatedTarget: o
                        }
                    }))) {
                    for (const t of n) t.setAttribute("aria-selected", "false"), t.setAttribute("tabindex", "-1");
                    for (const t of r) t.hidden = !0, t.hasAttribute("tabindex") || t.hasAttribute("data-tab-container-no-tabstop") || t.setAttribute("tabindex", "0");
                    i.setAttribute("aria-selected", "true"), i.setAttribute("tabindex", "0"), i.focus(), o.hidden = !1, t.dispatchEvent(new CustomEvent("tab-container-changed", {
                        bubbles: !0,
                        detail: {
                            relatedTarget: o
                        }
                    }))
                }
            }

            function ui(t, e) {
                const n = t.value.substring(0, t.selectionStart || 0),
                    r = t.value.substring(t.selectionEnd || 0),
                    i = 0 === n.length || n.match(/\n$/) ? "" : "\n",
                    o = n + i + e;
                t.value = o + r, t.selectionStart = o.length, t.selectionEnd = t.selectionStart, t.dispatchEvent(new CustomEvent("change", {
                    bubbles: !0,
                    cancelable: !1
                })), t.focus()
            }

            function di(t) {
                const e = t.dataTransfer;
                if (!e) return;
                if (function(t) {
                        return Array.from(t.types).indexOf("Files") >= 0
                    }(e)) return;
                if (!pi(e)) return;
                const n = gi(e);
                if (!n.some(bi)) return;
                t.stopPropagation(), t.preventDefault();
                const r = t.currentTarget;
                r instanceof HTMLTextAreaElement && ui(r, n.map(fi).join(""))
            }

            function hi(t) {
                const e = t.dataTransfer;
                e && (e.dropEffect = "link")
            }

            function mi(t) {
                const e = t.clipboardData;
                if (!e || !pi(e)) return;
                const n = gi(e);
                if (!n.some(bi)) return;
                t.stopPropagation(), t.preventDefault();
                const r = t.currentTarget;
                r instanceof HTMLTextAreaElement && ui(r, n.map(fi).join(""))
            }

            function fi(t) {
                return bi(t) ? `\n![](${t})\n` : t
            }

            function pi(t) {
                return Array.from(t.types).indexOf("text/uri-list") >= 0
            }

            function gi(t) {
                return (t.getData("text/uri-list") || "").split("\r\n")
            }
            t("n", TabContainerElement), window.customElements.get("tab-container") || (window.TabContainerElement = TabContainerElement, window.customElements.define("tab-container", TabContainerElement)), window.IncludeFragmentElement.prototype.fetch = t => (t.headers.append("X-Requested-With", "XMLHttpRequest"), window.fetch(t));
            const vi = /\.(gif|png|jpe?g)$/i;

            function bi(t) {
                return vi.test(t)
            }

            function Ei(t) {
                const e = t.dataTransfer;
                if (!e) return;
                if (function(t) {
                        return Array.from(t.types).indexOf("Files") >= 0
                    }(e)) return;
                const n = Ai(e);
                if (!n) return;
                t.stopPropagation(), t.preventDefault();
                const r = t.currentTarget;
                r instanceof HTMLTextAreaElement && ui(r, n)
            }

            function wi(t) {
                const e = t.dataTransfer;
                e && (e.dropEffect = "copy")
            }

            function yi(t) {
                if (!t.clipboardData) return;
                const e = Ai(t.clipboardData);
                if (!e) return;
                t.stopPropagation(), t.preventDefault();
                const n = t.currentTarget;
                n instanceof HTMLTextAreaElement && ui(n, e)
            }

            function xi(t) {
                return (t.textContent || "").trim().replace(/\|/g, "\\|").replace(/\n/g, " ") || " "
            }

            function ki(t) {
                const e = Array.from(t.querySelectorAll("tr")),
                    n = e.shift();
                if (!n) return "";
                const r = (i = n, Array.from(i.querySelectorAll("td, th")).map(xi));
                var i;
                const o = r.map((() => "--"));
                return `\n${`${r.join(" | ")}\n${o.join(" | ")}\n`}${e.map((t=>Array.from(t.querySelectorAll("td")).map(xi).join(" | "))).join("\n")}\n\n`
            }

            function Ai(t) {
                if (-1 === Array.from(t.types).indexOf("text/html")) return;
                const e = t.getData("text/html");
                if (!/<table/i.test(e)) return;
                const n = document.createElement("div");
                n.innerHTML = e;
                let r = n.querySelector("table");
                if (r = !r || r.closest("[data-paste-markdown-skip]") ? null : r, !r) return;
                const i = ki(r);
                return e.replace(/<meta.*?>/, "").replace(/<table[.\S\s]*<\/table>/, "\n" + i)
            }

            function Ti(t) {
                const e = t.clipboardData;
                if (!e || ! function(t) {
                        return Array.from(t.types).indexOf("text/x-gfm") >= 0
                    }(e)) return;
                const n = t.currentTarget;
                if (!(n instanceof HTMLTextAreaElement)) return;
                const r = e.getData("text/x-gfm");
                r && (t.stopPropagation(), t.preventDefault(), ui(n, r))
            }
            t("m", (function(t) {
                return function(t) {
                        t.addEventListener("dragover", wi), t.addEventListener("drop", Ei), t.addEventListener("paste", yi)
                    }(t),
                    function(t) {
                        t.addEventListener("dragover", hi), t.addEventListener("drop", di), t.addEventListener("paste", mi)
                    }(t),
                    function(t) {
                        t.addEventListener("paste", Ti)
                    }(t), {
                        unsubscribe: () => {
                            ! function(t) {
                                t.removeEventListener("dragover", wi), t.removeEventListener("drop", Ei), t.removeEventListener("paste", yi)
                            }(t),
                            function(t) {
                                t.removeEventListener("dragover", hi), t.removeEventListener("drop", di), t.removeEventListener("paste", mi)
                            }(t),
                            function(t) {
                                t.removeEventListener("paste", Ti)
                            }(t)
                        }
                    }
            }));
            var Li = "<unknown>";
            var Mi = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
                Si = /\((\S*)(?::(\d+))(?::(\d+))\)/;
            var Ci = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
            var Ni = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
                Ii = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
            var Di = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
            var Hi = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;

            function Pi(t) {
                if (null === t.parentNode || !(t.parentNode instanceof HTMLElement)) throw new Error;
                const e = t.parentNode.children;
                for (let n = 0; n < e.length; ++n)
                    if (e[n] === t) return n;
                return 0
            }
            let Ri = 0;

            function Oi(t) {
                return t.replace(/&/g, "&amp;").replace(/'/g, "&apos;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }
            const _i = {
                INPUT: t => t instanceof HTMLInputElement && t.checked ? "[x] " : "[ ] ",
                CODE(t) {
                    const e = t.textContent || "";
                    return t.parentNode && "PRE" === t.parentNode.nodeName ? (t.textContent = `\`\`\`\n${e.replace(/\n+$/,"")}\n\`\`\`\n\n`, t) : e.indexOf("`") >= 0 ? `\`\` ${e} \`\`` : `\`${e}\``
                },
                STRONG: t => `**${t.textContent||""}**`,
                EM: t => `_${t.textContent||""}_`,
                DEL: t => `~${t.textContent||""}~`,
                BLOCKQUOTE(t) {
                    const e = (t.textContent || "").trim().replace(/^/gm, "> "),
                        n = document.createElement("pre");
                    return n.textContent = e + "\n\n", n
                },
                A(t) {
                    const e = t.textContent || "",
                        n = t.getAttribute("href");
                    return /^https?:/.test(e) && e === n ? e : n ? `[${e}](${n})` : e
                },
                IMG(t) {
                    const e = t.getAttribute("alt") || "",
                        n = t.getAttribute("src");
                    if (!n) throw new Error;
                    const r = t.hasAttribute("width") ? ` width="${Oi(t.getAttribute("width")||"")}"` : "",
                        i = t.hasAttribute("height") ? ` height="${Oi(t.getAttribute("height")||"")}"` : "";
                    return r || i ? `<img alt="${Oi(e)}"${r}${i} src="${Oi(n)}">` : `![${e}](${n})`
                },
                LI(t) {
                    const e = t.parentNode;
                    if (!e) throw new Error;
                    let n = "";
                    if (! function(t) {
                            const e = t.childNodes[0],
                                n = t.childNodes[1];
                            return !!(e && t.childNodes.length < 3) && !("OL" !== e.nodeName && "UL" !== e.nodeName || n && (n.nodeType !== Node.TEXT_NODE || (n.textContent || "").trim()))
                        }(t))
                        if ("OL" === e.nodeName)
                            if (Ri > 0 && !e.previousSibling) {
                                n = Pi(t) + Ri + 1 + "\\. "
                            } else n = Pi(t) + 1 + ". ";
                    else n = "* ";
                    const r = n.replace(/\S/g, " "),
                        i = (t.textContent || "").trim().replace(/^/gm, r),
                        o = document.createElement("pre");
                    return o.textContent = i.replace(r, n), o
                },
                OL(t) {
                    const e = document.createElement("li");
                    return e.appendChild(document.createElement("br")), t.append(e), t
                },
                H1(t) {
                    const e = parseInt(t.nodeName.slice(1));
                    return t.prepend(Array(e + 1).join("#") + " "), t
                },
                UL: t => t
            };
            _i.UL = _i.OL;
            for (let t = 2; t <= 6; ++t) _i["H" + t] = _i.H1;

            function qi(t) {
                const e = document.createNodeIterator(t, NodeFilter.SHOW_ELEMENT, (function(t) {
                        return t.nodeName in _i && ! function(t) {
                            if (t instanceof HTMLAnchorElement && 1 === t.childNodes.length) {
                                const e = t.childNodes[0];
                                if (e instanceof HTMLImageElement) return e.src === t.href
                            }
                            return !1
                        }(t) && (function(t) {
                            return "IMG" === t.nodeName || null != t.firstChild
                        }(t) || function(t) {
                            return "INPUT" === t.nodeName && t instanceof HTMLInputElement && "checkbox" === t.type
                        }(t)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                    })),
                    n = [];
                let r = e.nextNode();
                for (; r;) r instanceof HTMLElement && n.push(r), r = e.nextNode();
                n.reverse();
                for (const i of n) i.replaceWith(_i[i.nodeName](i))
            }
            const Fi = new WeakMap;
            let Bi = 0;
            const Wi = /\bEdge\//.test(navigator.userAgent);

            function $i(t, e) {
                const n = 0 === Bi;
                Bi += Fi.has(t) ? 0 : 1;
                const r = Object.assign({
                    quoteMarkdown: !1,
                    copyMarkdown: !1,
                    scopeSelector: ""
                }, e);
                Fi.set(t, r), n && document.addEventListener("keydown", zi), r.copyMarkdown && t.addEventListener("copy", ji)
            }

            function ji(t) {
                const e = t.target;
                if (!(e instanceof HTMLElement)) return;
                if (Gi(e)) return;
                const n = t.clipboardData;
                if (!n) return;
                const r = window.getSelection();
                if (!r) return;
                let i;
                try {
                    i = r.getRangeAt(0)
                } catch (a) {
                    return
                }
                const o = r.toString(),
                    s = Yi(o, i, !0);
                s && (n.setData("text/plain", o), n.setData("text/x-gfm", s.selectionText), t.preventDefault(), r.removeAllRanges(), r.addRange(i))
            }

            function Vi(t) {
                let e = t;
                for (; e = e.parentElement;)
                    if (Fi.has(e)) return e
            }

            function Ui(t) {
                for (const e of t.querySelectorAll("textarea"))
                    if (e instanceof HTMLTextAreaElement && Xi(e)) return e
            }

            function zi(t) {
                if (function(t) {
                        return t.defaultPrevented || "r" !== t.key || t.metaKey || t.altKey || t.shiftKey || t.ctrlKey || t.target instanceof HTMLElement && Gi(t.target)
                    }(t)) return;
                const e = window.getSelection();
                if (!e) return;
                let n;
                try {
                    n = e.getRangeAt(0)
                } catch (r) {
                    return
                }
                Ki(e.toString(), n) && t.preventDefault()
            }

            function Ki(t, e) {
                const n = Yi(t, e, !1);
                if (!n) return !1;
                const {
                    container: r,
                    selectionText: i
                } = n;
                if (!r.dispatchEvent(new CustomEvent("quote-selection", {
                        bubbles: !0,
                        cancelable: !0,
                        detail: {
                            range: e,
                            selectionText: i
                        }
                    }))) return !0;
                const o = Ui(r);
                return !!o && (function(t, e) {
                    let n = `> ${t.replace(/\n/g,"\n> ")}\n\n`;
                    e.value && (n = `${e.value}\n\n${n}`);
                    e.value = n, e.dispatchEvent(new CustomEvent("change", {
                        bubbles: !0,
                        cancelable: !1
                    })), e.focus(), e.selectionStart = e.value.length, e.scrollTop = e.scrollHeight
                }(i, o), !0)
            }

            function Yi(t, e, n) {
                let r = t.trim();
                if (!r) return;
                let i = e.startContainer;
                if (!i) return;
                if (i.nodeType !== Node.ELEMENT_NODE && (i = i.parentNode), !(i instanceof Element)) return;
                const o = Vi(i);
                if (!o) return;
                const s = Fi.get(o);
                if (s) {
                    if (s.quoteMarkdown && !Wi) try {
                        const t = function(t, e) {
                            const n = t.startContainer;
                            if (!(n && n.parentNode && n.parentNode instanceof HTMLElement)) throw new Error("the range must start within an HTMLElement");
                            const r = n.parentNode;
                            let i = t.cloneContents();
                            if (e) {
                                const t = i.querySelector(e);
                                t && (i = document.createDocumentFragment(), i.appendChild(t))
                            }
                            Ri = 0;
                            const o = r.closest("li");
                            if (r.closest("pre")) {
                                const t = document.createElement("pre");
                                t.appendChild(i), i = document.createDocumentFragment(), i.appendChild(t)
                            } else if (o && o.parentNode && ("OL" === o.parentNode.nodeName && (Ri = Pi(o)), !i.querySelector("li"))) {
                                const t = document.createElement("li");
                                if (!o.parentNode) throw new Error;
                                const e = document.createElement(o.parentNode.nodeName);
                                t.appendChild(i), e.appendChild(t), i = document.createDocumentFragment(), i.appendChild(e)
                            }
                            return i
                        }(e, s.scopeSelector);
                        o.dispatchEvent(new CustomEvent("quote-selection-markdown", {
                            bubbles: !0,
                            cancelable: !1,
                            detail: {
                                fragment: t,
                                range: e,
                                unwrap: n
                            }
                        })), qi(t), r = function(t) {
                            const e = document.body;
                            if (!e) return "";
                            const n = document.createElement("div");
                            n.appendChild(t), n.style.cssText = "position:absolute;left:-9999px;", e.appendChild(n);
                            let r = "";
                            try {
                                const t = window.getSelection();
                                if (t) {
                                    const e = document.createRange();
                                    e.selectNodeContents(n), t.removeAllRanges(), t.addRange(e), r = t.toString(), t.removeAllRanges(), e.detach()
                                }
                            } finally {
                                e.removeChild(n)
                            }
                            return r
                        }(t).replace(/^\n+/, "").replace(/\s+$/, "")
                    } catch (a) {
                        setTimeout((() => {
                            throw a
                        }))
                    }
                    return {
                        selectionText: r,
                        container: o
                    }
                }
            }

            function Xi(t) {
                return !(t.offsetWidth <= 0 && t.offsetHeight <= 0)
            }

            function Gi(t) {
                const e = t.nodeName.toLowerCase(),
                    n = (t.getAttribute("type") || "").toLowerCase();
                return "select" === e || "textarea" === e || "input" === e && "submit" !== n && "reset" !== n || t.isContentEditable
            }
            let Qi = null;
            t("L", (function(t) {
                var e = null,
                    n = !1,
                    r = void 0,
                    i = void 0,
                    o = void 0;

                function s(e) {
                    if (r !== e.clientX || i !== e.clientY) {
                        var a = t.style.height;
                        o && o !== a && (n = !0, t.style.maxHeight = "", t.removeEventListener("mousemove", s)), o = a
                    }
                    r = e.clientX, i = e.clientY
                }
                var a = t.ownerDocument,
                    c = a.documentElement;

                function l() {
                    if (!(n || t.value === e || t.offsetWidth <= 0 && t.offsetHeight <= 0)) {
                        var r = function() {
                                for (var e = 0, n = t; n !== a.body && null !== n;) e += n.offsetTop || 0, n = n.offsetParent;
                                var r = e - a.defaultView.pageYOffset;
                                return {
                                    top: r,
                                    bottom: c.clientHeight - (r + t.offsetHeight)
                                }
                            }(),
                            i = r.top,
                            s = r.bottom;
                        if (!(i < 0 || s < 0)) {
                            var l = Number(getComputedStyle(t).height.replace(/px/, "")) + s;
                            t.style.maxHeight = l - 100 + "px";
                            var u = t.parentElement;
                            if (u instanceof HTMLElement) {
                                var d = u.style.height;
                                u.style.height = getComputedStyle(u).height, t.style.height = "auto", t.style.height = t.scrollHeight + "px", u.style.height = d, o = t.style.height
                            }
                            e = t.value
                        }
                    }
                }

                function u() {
                    n = !1, t.style.height = "", t.style.maxHeight = ""
                }
                t.addEventListener("mousemove", s), t.addEventListener("input", l), t.addEventListener("change", l);
                var d = t.form;
                return d && d.addEventListener("reset", u), t.value && l(), {
                    unsubscribe: function() {
                        t.removeEventListener("mousemove", s), t.removeEventListener("input", l), t.removeEventListener("change", l), d && d.removeEventListener("reset", u)
                    }
                }
            }));
            class MultiMap {
                constructor(t) {
                    if (this.map = new Map, t)
                        for (const [e, n] of t) this.set(e, n)
                }
                get(t) {
                    const e = this.map.get(t);
                    return e || new Set
                }
                set(t, e) {
                    let n = this.map.get(t);
                    return n || (n = new Set, this.map.set(t, n)), n.add(e), this
                }
                has(t) {
                    return this.map.has(t)
                }
                delete(t, e) {
                    const n = this.map.get(t);
                    if (!n) return !1;
                    if (!e) return this.map.delete(t);
                    const r = n.delete(e);
                    return n.size || this.map.delete(t), r
                }
                drain(t) {
                    const e = [];
                    for (const n of this.keys()) this.delete(n, t) && !this.has(n) && e.push(n);
                    return e
                }
                keys() {
                    return this.map.keys()
                }
                values() {
                    return this.map.values()
                }
                entries() {
                    return this.map.entries()
                }[Symbol.iterator]() {
                    return this.entries()
                }
                clear() {
                    this.map.clear()
                }
                get size() {
                    return this.map.size
                }
            }
            async function Ji(t, e) {
                let n;
                const r = new Promise(((e, r) => {
                    n = self.setTimeout((() => r(new Error("timeout"))), t)
                }));
                if (!e) return r;
                try {
                    await Promise.race([r, to(e)])
                } catch (po) {
                    throw self.clearTimeout(n), po
                }
            }
            async function Zi(t, e) {
                let n;
                const r = new Promise((e => {
                    n = self.setTimeout(e, t)
                }));
                if (!e) return r;
                try {
                    await Promise.race([r, to(e)])
                } catch (po) {
                    throw self.clearTimeout(n), po
                }
            }

            function to(t) {
                return new Promise(((e, n) => {
                    const r = new Error("aborted");
                    r.name = "AbortError", t.aborted ? n(r) : t.addEventListener("abort", (() => n(r)))
                }))
            }
            async function eo(t, e, n) {
                const r = new WebSocket(t),
                    i = function(t) {
                        return new Promise(((e, n) => {
                            t.readyState === WebSocket.OPEN ? e(t) : (t.onerror = () => {
                                t.onerror = null, t.onopen = null, n(new Error("connect failed"))
                            }, t.onopen = () => {
                                t.onerror = null, t.onopen = null, e(t)
                            })
                        }))
                    }(r);
                try {
                    return await Promise.race([i, Ji(e, n)]), r
                } catch (po) {
                    throw async function(t) {
                        try {
                            (await t).close()
                        } catch (e) {}
                    }(i), po
                }
            }

            function no(t, e) {
                return async function(t, e, n = 1 / 0, r) {
                    const i = r ? to(r) : null;
                    for (let s = 0; s < e; s++) try {
                        const e = i ? Promise.race([t(), i]) : t();
                        return await e
                    } catch (po) {
                        if ("AbortError" === po.name) throw po;
                        if (s === e - 1) throw po;
                        const i = 1e3 * Math.pow(2, s),
                            a = (o = .1 * i, Math.floor(Math.random() * Math.floor(o)));
                        await Zi(Math.min(n, i + a), r)
                    }
                    var o;
                    throw new Error("retry failed")
                }((() => eo(t, e.timeout, e.signal)), e.attempts, e.maxDelay, e.signal)
            }
            t("M", MultiMap);
            t("N", class StableSocket {
                constructor(t, e, n) {
                    this.socket = null, this.opening = null, this.url = t, this.delegate = e, this.policy = n
                }
                async open() {
                    if (this.opening || this.socket) return;
                    this.opening = new AbortController;
                    const t = Object.assign(Object.assign({}, this.policy), {
                        signal: this.opening.signal
                    });
                    try {
                        this.socket = await no(this.url, t)
                    } catch (e) {
                        return void this.delegate.socketDidFinish(this)
                    } finally {
                        this.opening = null
                    }
                    this.socket.onclose = t => {
                        this.socket = null, this.delegate.socketDidClose(this, t.code, t.reason);
                        var e, n, r;
                        (this.delegate.socketShouldRetry ? !this.delegate.socketShouldRetry(this, t.code) : (e = t.code) === ro || e === io) ? this.delegate.socketDidFinish(this): setTimeout((() => this.open()), (n = 100, r = 150, Math.random() * (r - n) + n))
                    }, this.socket.onmessage = t => {
                        this.delegate.socketDidReceiveMessage(this, t.data)
                    }, this.delegate.socketDidOpen(this)
                }
                close(t, e) {
                    this.opening ? (this.opening.abort(), this.opening = null) : this.socket && (this.socket.onclose = null, this.socket.close(t, e), this.socket = null, this.delegate.socketDidClose(this, t, e), this.delegate.socketDidFinish(this))
                }
                send(t) {
                    this.socket && this.socket.send(t)
                }
                isOpen() {
                    return !!this.socket
                }
            });
            const ro = 1008,
                io = 1011,
                oo = new WeakSet;

            function so(t, e) {
                return n = e, !!oo.has(n) && (e(t), !0);
                var n
            }
            const ao = new WeakMap;
            class EventHandler {
                constructor(t, e) {
                    this.element = t, this.type = e, this.element.addEventListener(this.type, this), ao.get(this.element).set(this.type, this)
                }
                set(t) {
                    "function" == typeof t ? this.handleEvent = t.bind(this.element) : "object" == typeof t && "function" == typeof t.handleEvent ? this.handleEvent = t.handleEvent.bind(t) : (this.element.removeEventListener(this.type, this), ao.get(this.element).delete(this.type))
                }
                static
                for (t) {
                    ao.has(t.element) || ao.set(t.element, new Map);
                    const e = t.attributeName.slice(2),
                        n = ao.get(t.element);
                    return n.has(e) ? n.get(e) : new EventHandler(t.element, e)
                }
            }

            function co(t, e) {
                if (! function(t) {
                        return "object" == typeof t && Symbol.iterator in t
                    }(e)) return !1;
                if (t instanceof NodeTemplatePart) {
                    const n = [];
                    for (const t of e)
                        if (t instanceof TemplateResult$1) {
                            const e = document.createDocumentFragment();
                            t.renderInto(e), n.push(...e.childNodes)
                        } else t instanceof DocumentFragment ? n.push(...t.childNodes) : n.push(String(t));
                    return n.length && t.replace(...n), !0
                }
                return t.value = Array.from(e).join(" "), !0
            }
            const lo = new WeakMap,
                uo = new WeakMap,
                ho = new WeakMap;
            class TemplateResult$1 {
                constructor(t, e, n) {
                    this.strings = t, this.values = e, this.processor = n
                }
                get template() {
                    if (lo.has(this.strings)) return lo.get(this.strings); {
                        const t = document.createElement("template"),
                            e = this.strings.length - 1;
                        return t.innerHTML = this.strings.reduce(((t, n, r) => t + n + (r < e ? `{{ ${r} }}` : "")), ""), lo.set(this.strings, t), t
                    }
                }
                renderInto(t) {
                    const e = this.template;
                    if (uo.get(t) !== e) {
                        uo.set(t, e);
                        const n = new TemplateInstance$1(e, this.values, this.processor);
                        return ho.set(t, n), void(t instanceof NodeTemplatePart ? t.replace(...n.children) : t.appendChild(n))
                    }
                    ho.get(t).update(this.values)
                }
            }
            const mo = ie((function(t, e) {
                so(t, e) || se(t, e) || function(t, e) {
                    return !!(t instanceof AttributeTemplatePart && t.attributeName.startsWith("on")) && (EventHandler.for(t).set(e), t.element.removeAttributeNS(t.attributeNamespace, t.attributeName), !0)
                }(t, e) || function(t, e) {
                    return e instanceof TemplateResult$1 && t instanceof NodeTemplatePart && (e.renderInto(t), !0)
                }(t, e) || function(t, e) {
                    return e instanceof DocumentFragment && t instanceof NodeTemplatePart && (e.childNodes.length && t.replace(...e.childNodes), !0)
                }(t, e) || co(t, e) || oe(t, e)
            }));
            t("Q", (fo = t => e => {
                if (!(e instanceof NodeTemplatePart)) return;
                const n = document.createElement("template");
                n.innerHTML = t;
                const r = document.importNode(n.content, !0);
                e.replace(...r.childNodes)
            }, (...t) => {
                const e = fo(...t);
                return oo.add(e), e
            }));
            var fo, po, go, vo, bo, Eo = function(t, e) {
                    return {
                        name: t,
                        value: void 0 === e ? -1 : e,
                        delta: 0,
                        entries: [],
                        id: "v2-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12)
                    }
                },
                wo = function(t, e) {
                    try {
                        if (PerformanceObserver.supportedEntryTypes.includes(t)) {
                            if ("first-input" === t && !("PerformanceEventTiming" in self)) return;
                            var n = new PerformanceObserver((function(t) {
                                return t.getEntries().map(e)
                            }));
                            return n.observe({
                                type: t,
                                buffered: !0
                            }), n
                        }
                    } catch (t) {}
                },
                yo = function(t, e) {
                    var n = function n(r) {
                        "pagehide" !== r.type && "hidden" !== document.visibilityState || (t(r), e && (removeEventListener("visibilitychange", n, !0), removeEventListener("pagehide", n, !0)))
                    };
                    addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0)
                },
                xo = function(t) {
                    addEventListener("pageshow", (function(e) {
                        e.persisted && t(e)
                    }), !0)
                },
                ko = "function" == typeof WeakSet ? new WeakSet : new Set,
                Ao = function(t, e, n) {
                    var r;
                    return function() {
                        e.value >= 0 && (n || ko.has(e) || "hidden" === document.visibilityState) && (e.delta = e.value - (r || 0), (e.delta || void 0 === r) && (r = e.value, t(e)))
                    }
                },
                To = -1,
                Lo = function() {
                    return "hidden" === document.visibilityState ? 0 : 1 / 0
                },
                Mo = function() {
                    yo((function(t) {
                        var e = t.timeStamp;
                        To = e
                    }), !0)
                },
                So = function() {
                    return To < 0 && (To = Lo(), Mo(), xo((function() {
                        setTimeout((function() {
                            To = Lo(), Mo()
                        }), 0)
                    }))), {
                        get firstHiddenTime() {
                            return To
                        }
                    }
                },
                Co = t("V", (function(t, e) {
                    var n, r = So(),
                        i = Eo("FCP"),
                        o = function(t) {
                            "first-contentful-paint" === t.name && (a && a.disconnect(), t.startTime < r.firstHiddenTime && (i.value = t.startTime, i.entries.push(t), ko.add(i), n()))
                        },
                        s = performance.getEntriesByName && performance.getEntriesByName("first-contentful-paint")[0],
                        a = s ? null : wo("paint", o);
                    (s || a) && (n = Ao(t, i, e), s && o(s), xo((function(r) {
                        i = Eo("FCP"), n = Ao(t, i, e), requestAnimationFrame((function() {
                            requestAnimationFrame((function() {
                                i.value = performance.now() - r.timeStamp, ko.add(i), n()
                            }))
                        }))
                    })))
                })),
                No = !1,
                Io = -1,
                Do = (t("U", (function(t, e) {
                    No || (Co((function(t) {
                        Io = t.value
                    })), No = !0);
                    var n, r = function(e) {
                            Io > -1 && t(e)
                        },
                        i = Eo("CLS", 0),
                        o = 0,
                        s = [],
                        a = function(t) {
                            if (!t.hadRecentInput) {
                                var e = s[0],
                                    r = s[s.length - 1];
                                o && t.startTime - r.startTime < 1e3 && t.startTime - e.startTime < 5e3 ? (o += t.value, s.push(t)) : (o = t.value, s = [t]), o > i.value && (i.value = o, i.entries = s, n())
                            }
                        },
                        c = wo("layout-shift", a);
                    c && (n = Ao(r, i, e), yo((function() {
                        c.takeRecords().map(a), n()
                    })), xo((function() {
                        o = 0, Io = -1, i = Eo("CLS", 0), n = Ao(r, i, e)
                    })))
                })), {
                    passive: !0,
                    capture: !0
                }),
                Ho = new Date,
                Po = function(t, e) {
                    po || (po = e, go = t, vo = new Date, _o(removeEventListener), Ro())
                },
                Ro = function() {
                    if (go >= 0 && go < vo - Ho) {
                        var t = {
                            entryType: "first-input",
                            name: po.type,
                            target: po.target,
                            cancelable: po.cancelable,
                            startTime: po.timeStamp,
                            processingStart: po.timeStamp + go
                        };
                        bo.forEach((function(e) {
                            e(t)
                        })), bo = []
                    }
                },
                Oo = function(t) {
                    if (t.cancelable) {
                        var e = (t.timeStamp > 1e12 ? new Date : performance.now()) - t.timeStamp;
                        "pointerdown" == t.type ? function(t, e) {
                            var n = function() {
                                    Po(t, e), i()
                                },
                                r = function() {
                                    i()
                                },
                                i = function() {
                                    removeEventListener("pointerup", n, Do), removeEventListener("pointercancel", r, Do)
                                };
                            addEventListener("pointerup", n, Do), addEventListener("pointercancel", r, Do)
                        }(e, t) : Po(e, t)
                    }
                },
                _o = function(t) {
                    ["mousedown", "keydown", "touchstart", "pointerdown"].forEach((function(e) {
                        return t(e, Oo, Do)
                    }))
                };
            t("W", (function(t, e) {
                var n, r = So(),
                    i = Eo("FID"),
                    o = function(t) {
                        t.startTime < r.firstHiddenTime && (i.value = t.processingStart - t.startTime, i.entries.push(t), ko.add(i), n())
                    },
                    s = wo("first-input", o);
                n = Ao(t, i, e), s && yo((function() {
                    s.takeRecords().map(o), s.disconnect()
                }), !0), s && xo((function() {
                    var r;
                    i = Eo("FID"), n = Ao(t, i, e), bo = [], go = -1, po = null, _o(addEventListener), r = o, bo.push(r), Ro()
                }))
            })), t("X", (function(t, e) {
                var n, r = So(),
                    i = Eo("LCP"),
                    o = function(t) {
                        var e = t.startTime;
                        e < r.firstHiddenTime && (i.value = e, i.entries.push(t)), n()
                    },
                    s = wo("largest-contentful-paint", o);
                if (s) {
                    n = Ao(t, i, e);
                    var a = function() {
                        ko.has(i) || (s.takeRecords().map(o), s.disconnect(), ko.add(i), n())
                    };
                    ["keydown", "click"].forEach((function(t) {
                        addEventListener(t, a, {
                            once: !0,
                            capture: !0
                        })
                    })), yo(a, !0), xo((function(r) {
                        i = Eo("LCP"), n = Ao(t, i, e), requestAnimationFrame((function() {
                            requestAnimationFrame((function() {
                                i.value = performance.now() - r.timeStamp, ko.add(i), n()
                            }))
                        }))
                    }))
                }
            })), t("Y", (function(t) {
                var e, n = Eo("TTFB");
                e = function() {
                    try {
                        var e = performance.getEntriesByType("navigation")[0] || function() {
                            var t = performance.timing,
                                e = {
                                    entryType: "navigation",
                                    startTime: 0
                                };
                            for (var n in t) "navigationStart" !== n && "toJSON" !== n && (e[n] = Math.max(t[n] - t.navigationStart, 0));
                            return e
                        }();
                        if (n.value = n.delta = e.responseStart, n.value < 0) return;
                        n.entries = [e], t(n)
                    } catch (t) {}
                }, "complete" === document.readyState ? setTimeout(e, 0) : addEventListener("pageshow", e)
            })), t("a2", "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {});
            const qo = new Map;

            function Fo(t) {
                for (const e of qo.keys())
                    if (customElements.get(e) || t.querySelector(e) || t.matches(e)) {
                        for (const t of qo.get(e) || []) t();
                        qo.delete(e)
                    }
            }
            let Bo = !1;

            function Wo() {
                Bo = !0, Fo(document.body);
                new MutationObserver((t => {
                    if (qo.size)
                        for (const e of t)
                            for (const t of e.addedNodes) t instanceof Element && Fo(t)
                })).observe(document, {
                    subtree: !0,
                    childList: !0
                })
            }
            t("a8", K((t => e => {
                if (void 0 === t && e instanceof AttributePart) {
                    if (t !== e.value) {
                        const t = e.committer.name;
                        e.committer.element.removeAttribute(t)
                    }
                } else e.setValue(t)
            })));
            /**
             * @license
             * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
             * This code may only be used under the BSD style license found at
             * http://polymer.github.io/LICENSE.txt
             * The complete set of authors may be found at
             * http://polymer.github.io/AUTHORS.txt
             * The complete set of contributors may be found at
             * http://polymer.github.io/CONTRIBUTORS.txt
             * Code distributed by Google as part of the polymer project is also
             * subject to an additional IP rights grant found at
             * http://polymer.github.io/PATENTS.txt
             */
            const $o = (t, e) => {
                    const n = t.startNode.parentNode,
                        r = void 0 === e ? t.endNode : e.startNode,
                        i = n.insertBefore(ot(), r);
                    n.insertBefore(ot(), r);
                    const o = new NodePart(t.options);
                    return o.insertAfterNode(i), o
                },
                jo = (t, e) => (t.setValue(e), t.commit(), t),
                Vo = (t, e, n) => {
                    const r = t.startNode.parentNode,
                        i = n ? n.startNode : t.endNode,
                        o = e.endNode.nextSibling;
                    o !== i && ((t, e, n = null, r = null) => {
                        for (; e !== n;) {
                            const n = e.nextSibling;
                            t.insertBefore(e, r), e = n
                        }
                    })(r, e.startNode, o, i)
                },
                Uo = t => {
                    G(t.startNode.parentNode, t.startNode, t.endNode.nextSibling)
                },
                zo = (t, e, n) => {
                    const r = new Map;
                    for (let i = e; i <= n; i++) r.set(t[i], i);
                    return r
                },
                Ko = new WeakMap,
                Yo = new WeakMap;
            t("a9", K(((t, e, n) => {
                let r;
                return void 0 === n ? n = e : void 0 !== e && (r = e), e => {
                    if (!(e instanceof NodePart)) throw new Error("repeat can only be used in text bindings");
                    const i = Ko.get(e) || [],
                        o = Yo.get(e) || [],
                        s = [],
                        a = [],
                        c = [];
                    let l, u, d = 0;
                    for (const g of t) c[d] = r ? r(g, d) : d, a[d] = n(g, d), d++;
                    let h = 0,
                        m = i.length - 1,
                        f = 0,
                        p = a.length - 1;
                    for (; h <= m && f <= p;)
                        if (null === i[h]) h++;
                        else if (null === i[m]) m--;
                    else if (o[h] === c[f]) s[f] = jo(i[h], a[f]), h++, f++;
                    else if (o[m] === c[p]) s[p] = jo(i[m], a[p]), m--, p--;
                    else if (o[h] === c[p]) s[p] = jo(i[h], a[p]), Vo(e, i[h], s[p + 1]), h++, p--;
                    else if (o[m] === c[f]) s[f] = jo(i[m], a[f]), Vo(e, i[m], i[h]), m--, f++;
                    else if (void 0 === l && (l = zo(c, f, p), u = zo(o, h, m)), l.has(o[h]))
                        if (l.has(o[m])) {
                            const t = u.get(c[f]),
                                n = void 0 !== t ? i[t] : null;
                            if (null === n) {
                                const t = $o(e, i[h]);
                                jo(t, a[f]), s[f] = t
                            } else s[f] = jo(n, a[f]), Vo(e, n, i[h]), i[t] = null;
                            f++
                        } else Uo(i[m]), m--;
                    else Uo(i[h]), h++;
                    for (; f <= p;) {
                        const t = $o(e, s[p + 1]);
                        jo(t, a[f]), s[f++] = t
                    }
                    for (; h <= m;) {
                        const t = i[h++];
                        null !== t && Uo(t)
                    }
                    Ko.set(e, s), Yo.set(e, c)
                }
            })))
        }
    }
}));
//# sourceMappingURL=chunk-vendor-d214c717.js.map