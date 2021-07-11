System.register(["./chunk-vendor.js"], (function(t) {
    "use strict";
    var e, n, o, i, r, s, c, a, l, u, d;
    return {
        setters: [function(t) {
            e = t.o, n = t.f, o = t.h, i = t.a, r = t.S, s = t.D, c = t.r, a = t.T, l = t._, u = t.t, d = t.c
        }],
        execute: function() {
            t({
                A: function(t, e, n = {
                    wait: null
                }) {
                    ue.set(t, {
                        keypressed: !1,
                        inputed: !1,
                        timer: void 0,
                        listener: e,
                        wait: null != n.wait ? n.wait : 100
                    }), t.addEventListener("keydown", fe), t.addEventListener("keyup", me), t.addEventListener("input", pe)
                },
                B: function() {
                    return Le
                },
                C: ut,
                D: Ye,
                E: function(t) {
                    const e = Ve(t),
                        n = function(t) {
                            const e = t.match(/(file-.+?-)L\d+?/i);
                            return e ? e[1] : ""
                        }(t);
                    return {
                        blobRange: e,
                        anchorPrefix: n
                    }
                },
                F: Ve,
                G: function({
                    anchorPrefix: t,
                    blobRange: e
                }) {
                    return e ? `#${t}${function(t){const{start:e,end:n}=Ue(t);return null!=e.column&&null!=n.column?`
                    L$ {
                        e.line
                    }
                    C$ {
                        e.column
                    } - L$ {
                        n.line
                    }
                    C$ {
                        n.column
                    }
                    `:e.line===n.line?"L"+e.line:`
                    L$ {
                        e.line
                    } - L$ {
                        n.line
                    }
                    `}(e)}`: "#"
                },
                H: function(t, e) {
                    const [n, o] = Xe(t.start, !0, e), [i, r] = Xe(t.end, !1, e);
                    if (!n || !i) return;
                    let s = o,
                        c = r; - 1 === s && (s = 0); - 1 === c && (c = i.childNodes.length);
                    if (!n.ownerDocument) throw new Error("DOMRange needs to be inside document");
                    const a = n.ownerDocument.createRange();
                    return a.setStart(n, s), a.setEnd(i, c), a
                },
                I: function(t, e) {
                    e.appendChild(t.extractContents()), t.insertNode(e)
                },
                K: on,
                L: function(t, e = !1) {
                    let n = document.domain;
                    if (null == n) throw new Error("Unable to get document domain");
                    n.endsWith(".github.com") && (n = "github.com");
                    const o = (new Date).getTime(),
                        i = new Date(o - 1).toUTCString(),
                        r = "https:" === location.protocol ? "; secure" : "",
                        s = "; expires=" + i;
                    !1 === e && (n = "." + n);
                    try {
                        document.cookie = `${t}=''; path=/; domain=${n}${s}${r}`
                    } catch (c) {}
                },
                M: function() {
                    let t = "";
                    const e = on("_octo"),
                        n = [];
                    for (const o of e) {
                        const e = o.value.split(".");
                        if ("GH1" === e.shift() && e.length > 1) {
                            const o = (e.shift() || "").split("-");
                            1 === o.length && (o[1] = "1");
                            const i = [Number(o[0]), Number(o[1])];
                            t = e.join("."), n.push([i, t])
                        }
                    }
                    t = "", n.length > 0 && (t = String(n.sort().reverse()[0][1]));
                    return t
                },
                N: function() {
                    const t = (new Date).getTime(),
                        e = `${Math.round(Math.random()*(Math.pow(2,31)-1))}.${Math.round(t/1e3)}`,
                        n = "GH1.1." + e,
                        o = new Date(t + 31536e6).toUTCString();
                    return rn("_octo", n, o), e
                },
                O: async function(t, e, n = !1) {
                    const o = St.get(t);
                    null == o || o.abort();
                    const i = t.closest(".js-updatable-content[data-url], .js-updatable-content [data-url]");
                    !n && i && i === t && (Tt[i.getAttribute("data-url")] = e);
                    return Ct(t, e)
                },
                P: function(t, e, n) {
                    let o = t.value.substring(0, t.selectionEnd || 0),
                        i = t.value.substring(t.selectionEnd || 0);
                    return o = o.replace(e, n), i = i.replace(e, n), t.value = o + i, t.selectionStart = o.length, t.selectionEnd = o.length, t.dispatchEvent(new CustomEvent("change", {
                        bubbles: !0,
                        cancelable: !1
                    })), n
                },
                Q: function(t) {
                    return an.get(t)
                },
                R: function(t, e, n = {}) {
                    const o = t.selectionEnd || 0,
                        i = t.value.substring(0, o),
                        r = t.value.substring(o),
                        s = "" === t.value || i.match(/\n$/) ? "" : "\n",
                        c = n.appendNewline ? "\n" : "",
                        a = s + e + c;
                    t.value = i + a + r;
                    const l = o + a.length;
                    return t.selectionStart = l, t.selectionEnd = l, t.dispatchEvent(new CustomEvent("change", {
                        bubbles: !0,
                        cancelable: !1
                    })), t.focus(), a
                },
                S: lt,
                T: m,
                U: function(t, e, n) {
                    return [...vn(t, (t => {
                        const n = e(t);
                        return null != n ? [t, n] : null
                    }))].sort(((t, e) => n(t[1], e[1]))).map((([t]) => t))
                },
                V: function(t, e) {
                    return t.score > e.score ? -1 : t.score < e.score ? 1 : t.text < e.text ? -1 : t.text > e.text ? 1 : 0
                },
                W: async function() {
                    await async function() {
                        const t = document.querySelector("link[rel=sso-session]"),
                            e = document.querySelector("meta[name=sso-expires-around]");
                        if (!(t instanceof HTMLLinkElement)) return !0;
                        if (! function(t) {
                                if (!(t instanceof HTMLMetaElement)) return !0;
                                const e = parseInt(t.content);
                                return (new Date).getTime() / 1e3 > e
                            }(e)) return !0;
                        const n = t.href,
                            o = await fetch(n, {
                                headers: {
                                    Accept: "application/json",
                                    "X-Requested-With": "XMLHttpRequest"
                                }
                            });
                        return await o.json()
                    }() || (wn || (wn = async function() {
                        const t = document.querySelector("link[rel=sso-modal]"),
                            e = await dt({
                                content: it(document, t.href),
                                dialogClass: "sso-modal"
                            });
                        let n = null;
                        const o = window.external;
                        if (o.ssoComplete = function(t) {
                                t.error ? (n = !1, bn(n)) : (n = !0, bn(n), function(t) {
                                    const e = document.querySelector("meta[name=sso-expires-around]");
                                    e && e.setAttribute("content", t)
                                }(t.expiresAround), window.focus()), o.ssoComplete = null
                            }, await
                            function(t) {
                                return new Promise((e => {
                                    t.addEventListener("dialog:remove", e, {
                                        once: !0
                                    })
                                }))
                            }(e), !n) throw new Error("sso prompt canceled")
                    }().then(En).catch(En)), await wn)
                },
                X: function(t, e) {
                    t.removeEventListener("keydown", fe), t.removeEventListener("keyup", me), t.removeEventListener("input", pe);
                    const n = ue.get(t);
                    n && (null != n.timer && n.listener === e && clearTimeout(n.timer), ue.delete(t))
                },
                Y: function(t, e) {
                    let n = yn(t, e);
                    if (n && -1 === e.indexOf("/")) {
                        const o = t.substring(t.lastIndexOf("/") + 1);
                        n += yn(o, e)
                    }
                    return n
                },
                Z: Xn,
                _: function(t) {
                    const e = be(t);
                    e && Wn(e)
                },
                a: C,
                a$: function(t, e) {
                    R(t), H(t, e)
                },
                a0: Kt,
                a1: sn,
                a2: Un,
                a3: zn,
                a4: function(t) {
                    const e = t.match(Yn);
                    if (e) return void Zn(to(e[1], e[2]));
                    let n, o;
                    for (let i = 0, r = Qn.length; i < r; i++) {
                        const [e, o] = Qn[i];
                        if (n = t.match(o), n) {
                            let t = null,
                                o = null;
                            switch (e) {
                                case "organization":
                                    t = n[1], o = n[2];
                                    break;
                                case "repository":
                                    t = `${n[1]}/${n[2]}`, o = n[3]
                            }
                            return void(t && o && Zn(no(t, o)))
                        }
                    }
                    for (let i = 0, r = Gn.length; i < r; i++)
                        if (o = t.match(Gn[i]), o) return void Zn(eo(o[1], o[2]))
                },
                a5: vt,
                a7: function() {
                    const t = Qt[oe() - 1];
                    if (t) return t.url
                },
                a8: function() {
                    const t = Qt[oe() + 1];
                    if (t) return t.url
                },
                a9: ke,
                aA: function() {
                    return `${window.location.protocol}//${window.location.host}${function(){const t=co("meta[name=analytics-location]");return t?t.content:window.location.pathname}()+function(){const t=co("meta[name=analytics-location-query-strip]");let e="";t||(e=window.location.search);const n=co("meta[name=analytics-location-params]");n&&(e+=(e?"&":"?")+n.content);for(const o of document.querySelectorAll("meta[name=analytics-param-rename]")){const t=o.content.split(":",2);e=e.replace(new RegExp(` ( ^ | [ ? & ]) $ {
                        t[0]
                    }($ |= )
                    `,"g"),`
                    $1$ {
                        t[1]
                    }
                    $2 `)}return e}()}`
                },
                aB: g,
                aC: function(t) {
                    const e = ue.get(t);
                    e && e.listener.call(null, t)
                },
                aD: zo,
                aE: Uo,
                aF: Bt,
                aG: Pt,
                aH: cn,
                aI: _t,
                aJ: function(t, e) {
                    for (const n in e) {
                        const o = e[n],
                            i = t.elements.namedItem(n);
                        (i instanceof HTMLInputElement || i instanceof HTMLTextAreaElement) && (i.value = o)
                    }
                },
                aK: ee,
                aL: Fo,
                aM: Ko,
                aN: ei,
                aO: function() {
                    window.history.replaceState(null, "", "#"), li()
                },
                aP: function() {
                    return Yo
                },
                aQ: gn,
                aR: Jo,
                aS: tt,
                aT: Z,
                aU: async function(t) {
                    return an.get(t) || ln(await
                        function(t, e) {
                            return new Promise((n => {
                                t.addEventListener(e, n, {
                                    once: !0
                                })
                            }))
                        }(t, "codeEditor:ready"))
                },
                aV: function(t, e) {
                    return async function n(o) {
                        const i = await self.fetch(ot(t, e));
                        if (nt(i, new ResponseError$1(i)), 200 === i.status) return i;
                        if (202 === i.status) return await new Promise((t => setTimeout(t, o))), n(1.5 * o);
                        throw new ResponseError$1(i)
                    }(1e3)
                },
                aW: R,
                aX: se,
                aY: function(t) {
                    const e = t.getBoundingClientRect();
                    return {
                        top: e.top + window.pageYOffset,
                        left: e.left + window.pageXOffset
                    }
                },
                aZ: bt,
                a_: kt,
                aa: U,
                ab: ft,
                ac: mt,
                ag: function(t, e) {
                    const n = t.closest("[data-notification-id]");
                    e.hasAttribute("data-status") && function(t, e) {
                        t.classList.toggle("notification-archived", "archived" === e), t.classList.toggle("notification-unread", "unread" === e), t.classList.toggle("notification-read", "read" === e)
                    }(n, e.getAttribute("data-status"));
                    e.hasAttribute("data-subscription-status") && function(t, e) {
                        t.classList.toggle("notification-unsubscribed", "unsubscribed" === e)
                    }(n, e.getAttribute("data-subscription-status"));
                    e.hasAttribute("data-starred-status") && function(t, e) {
                        t.classList.toggle("notification-starred", "starred" === e)
                    }(n, e.getAttribute("data-starred-status"))
                },
                ah: be,
                ai: async function(t, e, n = 1 / 0, o) {
                    const i = o ? le(o) : null;
                    for (let s = 0; s < e; s++) try {
                        const e = i ? Promise.race([t(), i]) : t();
                        return await e
                    } catch (fo) {
                        if ("AbortError" === fo.name) throw fo;
                        if (s === e - 1) throw fo;
                        const i = 1e3 * Math.pow(2, s),
                            c = (r = .1 * i, Math.floor(Math.random() * Math.floor(r)));
                        await ae(Math.min(n, i + c), o)
                    }
                    var r;
                    throw new Error("retry failed")
                },
                aj: function*(t, e) {
                    for (let n = 0; n < t.length; n += e) yield t.slice(n, n + e)
                },
                ak: function(t) {
                    const e = [];
                    return function(n) {
                        e.push(n), 1 === e.length && queueMicrotask((() => {
                            const n = [...e];
                            e.length = 0, t(n)
                        }))
                    }
                },
                al: async function() {
                    const t = await fetch("/sessions/in_sudo", {
                        headers: {
                            accept: "application/json",
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    });
                    if (t.ok) {
                        return "true" === await t.text() || Co()
                    }
                    return Co()
                },
                am: jt,
                an: function(t) {
                    const e = t.getAttribute("data-details-container") || ".js-details-container",
                        n = t.closest(e).classList;
                    return n.contains("Details--on") || n.contains("open")
                },
                ao: hn,
                ap: function() {
                    if ("Intl" in window) try {
                        return (new window.Intl.DateTimeFormat).resolvedOptions().timeZone
                    } catch (t) {}
                },
                aq: rn,
                ar: Ao,
                as: async function(t) {
                    return function(t) {
                        const e = t;
                        return e.clientExtensionResults = t.getClientExtensionResults(), po(mo, xo, e)
                    }(await navigator.credentials.get(function(t) {
                        return po(fo, Lo, t)
                    }(t)))
                },
                au: Ee,
                av: we,
                aw: Wn,
                ax: nn,
                ay: function(t) {
                    const e = t.querySelectorAll(".js-characters-remaining-container");
                    for (const n of e) {
                        nn(n.querySelector(".js-characters-remaining-field"))
                    }
                },
                az: tn,
                b: Y,
                b0: Mo,
                b1: qo,
                b2: function t(e, n) {
                    const o = e.nextElementSibling;
                    if (o instanceof HTMLElement) return o.classList.contains(n) ? o : t(o, n);
                    return null
                },
                b3: function(t) {
                    const e = t.getAttribute("data-hydro-click-payload") || "",
                        n = t.getAttribute("data-hydro-click-hmac") || "",
                        o = t.getAttribute("data-hydro-client-context") || "";
                    zn(e, n, o)
                },
                b4: function() {
                    return new Promise(window.requestAnimationFrame)
                },
                b5: ko,
                b6: async function() {
                    var t;
                    if (await (null === (t = window.PublicKeyCredential) || void 0 === t ? void 0 : t.isUserVerifyingPlatformAuthenticatorAvailable())) return "supported";
                    return "unsupported"
                },
                b7: async function(t) {
                    return function(t) {
                        const e = t;
                        return e.clientExtensionResults = t.getClientExtensionResults(), po(mo, Eo, e)
                    }(await navigator.credentials.create(function(t) {
                        return po(fo, wo, t)
                    }(t)))
                },
                b8: ae,
                ba: so,
                bb: to,
                bc: eo,
                bd: no,
                be: function(t, e, n) {
                    if (e) {
                        const o = t.innerHTML.trim().match(n || function(t) {
                            const e = t.toLowerCase().split("");
                            let n = "";
                            for (let o = 0; o < e.length; o++) {
                                const t = e[o].replace(/[\\^$*+?.()|[\]{}]/g, "\\$&");
                                n += 0 === o ? `(.*)(${t})` : `([^${t}]*?)(${t})`
                            }
                            return new RegExp(n + "(.*?)$", "i")
                        }(e));
                        if (!o) return;
                        let i = !1;
                        const r = [];
                        for (let t = 1; t < o.length; ++t) {
                            const e = o[t];
                            e && (t % 2 == 0 ? i || (r.push("<mark>"), i = !0) : i && (r.push("</mark>"), i = !1), r.push(e))
                        }
                        t.innerHTML = r.join("")
                    } else {
                        const e = t.innerHTML.trim(),
                            n = e.replace(/<\/?mark>/g, "");
                        e !== n && (t.innerHTML = n)
                    }
                },
                bf: Jn,
                bg: function(t) {
                    const e = en(t),
                        n = tn(t.value);
                    return e - n < 0
                },
                c: f,
                d: q,
                e: it,
                f: H,
                g: dt,
                h: wt,
                i: pt,
                j: function(t) {
                    const e = N();
                    e && M.push(e);
                    C(t)
                },
                k: ht,
                l: function(t, e) {
                    if ("boolean" == typeof e) {
                        if (!(t instanceof HTMLInputElement)) throw new TypeError("only checkboxes can be set to boolean value");
                        t.checked = e
                    } else {
                        if ("checkbox" === t.type) throw new TypeError("checkbox can't be set to string value");
                        t.value = e
                    }
                    gt(t, "change", !1)
                },
                m: X,
                n: Gt,
                o: at,
                p: function(t) {
                    q(t), R(t);
                    const e = M.pop();
                    e && C(e)
                },
                q: function(t) {
                    Gt(function(t) {
                        return (t.getAttribute("aria-label") || t.innerText || "").trim()
                    }(t))
                },
                r: yt,
                s: z,
                t: function(t) {
                    return new URLSearchParams(new FormData(t)).toString()
                },
                u: async function(t) {
                    if (St.get(t)) return;
                    const e = t.hasAttribute("data-retain-focus"),
                        n = t.getAttribute("data-url"),
                        o = new AbortController;
                    St.set(t, o);
                    try {
                        const i = await fetch(n, {
                            signal: o.signal,
                            headers: {
                                Accept: "text/html",
                                "X-Requested-With": "XMLHttpRequest"
                            }
                        });
                        if (!i.ok) return;
                        const r = await i.text();
                        return bt(t, e) ? void console.warn("Failed to update content with interactions", t) : (Tt[n] = r, Ct(t, r, e))
                    } catch (i) {} finally {
                        St.delete(t)
                    }
                },
                v: It,
                w: et,
                x: ce,
                y: function() {
                    return Promise.resolve()
                },
                z: v
            });
            class Subscription {
                constructor(t) {
                    this.closed = !1, this.unsubscribe = () => {
                        t(), this.closed = !0
                    }
                }
            }

            function f(t, e, n, o = {
                capture: !1
            }) {
                return t.addEventListener(e, n, o), new Subscription((() => {
                    t.removeEventListener(e, n, o)
                }))
            }

            function m(...t) {
                return new Subscription((() => {
                    for (const e of t) e.unsubscribe()
                }))
            }

            function p(t) {
                let e = t;
                const n = e.ownerDocument;
                if (!n) return;
                if (!e.offsetParent) return;
                const o = n.defaultView.HTMLElement;
                if (e !== n.body) {
                    for (; e !== n.body;) {
                        if (!(e.parentElement instanceof o)) return;
                        e = e.parentElement;
                        const {
                            position: t,
                            overflowY: n,
                            overflowX: i
                        } = getComputedStyle(e);
                        if ("fixed" === t || "auto" === n || "auto" === i || "scroll" === n || "scroll" === i) break
                    }
                    return e instanceof Document ? null : e
                }
            }

            function h(t, e) {
                let n = e;
                const o = t.ownerDocument;
                if (!o) return;
                const i = o.documentElement;
                if (!i) return;
                if (t === i) return;
                const r = g(t, n);
                if (!r) return;
                n = r._container;
                const s = n === o.documentElement && o.defaultView ? {
                        top: o.defaultView.pageYOffset,
                        left: o.defaultView.pageXOffset
                    } : {
                        top: n.scrollTop,
                        left: n.scrollLeft
                    },
                    c = r.top - s.top,
                    a = r.left - s.left,
                    l = n.clientHeight,
                    u = n.clientWidth;
                return {
                    top: c,
                    left: a,
                    bottom: l - (c + t.offsetHeight),
                    right: u - (a + t.offsetWidth),
                    height: l,
                    width: u
                }
            }

            function g(t, e) {
                let n = t;
                const o = n.ownerDocument;
                if (!o) return;
                const i = o.documentElement;
                if (!i) return;
                const r = o.defaultView.HTMLElement;
                let s = 0,
                    c = 0;
                const a = n.offsetHeight,
                    l = n.offsetWidth;
                for (; n !== o.body && n !== e;) {
                    if (s += n.offsetTop || 0, c += n.offsetLeft || 0, !(n.offsetParent instanceof r)) return;
                    n = n.offsetParent
                }
                let u, d, f;
                if (e && e !== o && e !== o.defaultView && e !== o.documentElement && e !== o.body) {
                    if (!(e instanceof r)) return;
                    f = e, u = e.scrollHeight, d = e.scrollWidth
                } else f = i, u = function(t, e) {
                    return Math.max(t.scrollHeight, e.scrollHeight, t.offsetHeight, e.offsetHeight, e.clientHeight)
                }(o.body, i), d = function(t, e) {
                    return Math.max(t.scrollWidth, e.scrollWidth, t.offsetWidth, e.offsetWidth, e.clientWidth)
                }(o.body, i);
                return {
                    top: s,
                    left: c,
                    bottom: u - (s + a),
                    right: d - (c + l),
                    _container: f
                }
            }

            function y(t, e) {
                let n = t;
                const o = t.ownerDocument;
                n !== o && n !== o.defaultView && n !== o.documentElement && n !== o.body || (n = o);
                if (n instanceof o.defaultView.Document) {
                    const t = null != e.top ? e.top : o.defaultView.pageYOffset,
                        n = null != e.left ? e.left : o.defaultView.pageXOffset;
                    return void o.defaultView.scrollTo(n, t)
                }
                if (!(n instanceof o.defaultView.HTMLElement)) throw new Error("invariant");
                n.scrollTop = e.top, null != e.left && (n.scrollLeft = e.left)
            }

            function v(t) {
                return ! function(t) {
                    return t.offsetWidth <= 0 && t.offsetHeight <= 0
                }(t)
            }
            const b = navigator.userAgent.match(/Macintosh/),
                w = b ? "metaKey" : "ctrlKey",
                E = b ? "Meta" : "Control";
            let L = !1,
                x = {
                    x: 0,
                    y: 0
                };

            function A(t) {
                t instanceof MouseEvent && (x.x === t.clientX && x.y === t.clientY || (L = !1), x = {
                    x: t.clientX,
                    y: t.clientY
                })
            }

            function k(t) {
                if (L) return;
                const e = t.currentTarget,
                    {
                        target: n
                    } = t;
                if (!(n instanceof Element && e instanceof HTMLElement && e.closest(".js-active-navigation-container"))) return;
                const o = n.closest(".js-navigation-item");
                o && $(o, e)
            }
            e(".js-navigation-container:not(.js-navigation-container-no-mouse)", {
                subscribe: t => m(f(t, "mouseover", A), f(t, "mouseover", k))
            });
            let j = 0;

            function S(t) {
                if (t.target !== document.body && t.target instanceof HTMLElement && !t.target.classList.contains("js-navigation-enable")) return;
                L = !0;
                const e = N();
                let i = !1;
                if (e) {
                    const r = e.querySelector(".js-navigation-item.navigation-focus") || e;
                    i = n(r, "navigation:keydown", {
                        hotkey: o(t),
                        originalEvent: t,
                        originalTarget: t.target
                    })
                }
                i || t.preventDefault()
            }

            function T(t) {
                const e = t.modifierKey || t.altKey || t.ctrlKey || t.metaKey;
                n(t.currentTarget, "navigation:open", {
                    modifierKey: e,
                    shiftKey: t.shiftKey
                }) || t.preventDefault()
            }

            function C(t) {
                const e = N();
                t !== e && (e && q(e), t.classList.add("js-active-navigation-container"))
            }

            function q(t) {
                t.classList.remove("js-active-navigation-container")
            }
            e(".js-active-navigation-container", {
                add() {
                    j++, 1 === j && document.addEventListener("keydown", S)
                },
                remove() {
                    j--, 0 === j && document.removeEventListener("keydown", S)
                }
            }), i("navigation:keydown", ".js-active-navigation-container", (function(t) {
                const e = t.currentTarget,
                    n = t.detail.originalTarget.matches("input, textarea"),
                    i = t.target;
                if (i.classList.contains("js-navigation-item"))
                    if (n) {
                        if (b) switch (o(t.detail.originalEvent)) {
                            case "Control+n":
                                O(i, e);
                                break;
                            case "Control+p":
                                I(i, e)
                        }
                        switch (o(t.detail.originalEvent)) {
                            case "ArrowUp":
                                I(i, e);
                                break;
                            case "ArrowDown":
                                O(i, e);
                                break;
                            case "Enter":
                            case E + "+Enter":
                                D(i, t.detail.originalEvent[w])
                        }
                    } else {
                        if (b) switch (o(t.detail.originalEvent)) {
                            case "Control+n":
                                O(i, e);
                                break;
                            case "Control+p":
                                I(i, e);
                                break;
                            case "Alt+v":
                                ! function(t, e) {
                                    const n = _(e);
                                    let o = n.indexOf(t);
                                    const i = p(t);
                                    if (null == i) return;
                                    let r, s;
                                    for (;
                                        (r = n[o - 1]) && (s = h(r, i)) && s.top >= 0;) o--;
                                    if (r) {
                                        if ($(r, e)) return;
                                        B(i, r)
                                    }
                                }(i, e);
                                break;
                            case "Control+v":
                                ! function(t, e) {
                                    const n = _(e);
                                    let o = n.indexOf(t);
                                    const i = p(t);
                                    if (null == i) return;
                                    let r, s;
                                    for (;
                                        (r = n[o + 1]) && (s = h(r, i)) && s.bottom >= 0;) o++;
                                    if (r) {
                                        if ($(r, e)) return;
                                        B(i, r)
                                    }
                                }(i, e)
                        }
                        switch (o(t.detail.originalEvent)) {
                            case "j":
                            case "J":
                                O(i, e);
                                break;
                            case "k":
                            case "K":
                                I(i, e);
                                break;
                            case "o":
                            case "Enter":
                            case E + "+Enter":
                                D(i, t.detail[w])
                        }
                    }
                else {
                    const i = _(e)[0];
                    if (i)
                        if (n) {
                            if (b) switch (o(t.detail.originalEvent)) {
                                case "Control+n":
                                    $(i, e)
                            }
                            switch (o(t.detail.originalEvent)) {
                                case "ArrowDown":
                                    $(i, e)
                            }
                        } else {
                            if (b) switch (o(t.detail.originalEvent)) {
                                case "Control+n":
                                case "Control+v":
                                    $(i, e)
                            }
                            switch (o(t.detail.originalEvent)) {
                                case "j":
                                    $(i, e)
                            }
                        }
                }
                if (n) {
                    if (b) switch (o(t.detail.originalEvent)) {
                        case "Control+n":
                        case "Control+p":
                            t.preventDefault()
                    }
                    switch (o(t.detail.originalEvent)) {
                        case "ArrowUp":
                        case "ArrowDown":
                            t.preventDefault();
                            break;
                        case "Enter":
                            t.preventDefault()
                    }
                } else {
                    if (b) switch (o(t.detail.originalEvent)) {
                        case "Control+n":
                        case "Control+p":
                        case "Control+v":
                        case "Alt+v":
                            t.preventDefault()
                    }
                    switch (o(t.detail.originalEvent)) {
                        case "j":
                        case "k":
                            t.preventDefault();
                            break;
                        case "o":
                        case "Enter":
                        case w + "+Enter":
                            t.preventDefault()
                    }
                }
            })), i("click", ".js-active-navigation-container .js-navigation-item", (function(t) {
                T(t)
            })), i("navigation:keyopen", ".js-active-navigation-container .js-navigation-item", (function(t) {
                const e = t.currentTarget.classList.contains("js-navigation-open") ? t.currentTarget : t.currentTarget.querySelector(".js-navigation-open");
                if (e instanceof HTMLAnchorElement) {
                    if (t.detail.modifierKey) window.open(e.href, "_blank"), window.focus();
                    else {
                        e.dispatchEvent(new MouseEvent("click", {
                            bubbles: !0,
                            cancelable: !0
                        })) && e.click()
                    }
                    t.preventDefault()
                } else T(t)
            }));
            const M = [];

            function H(t, e) {
                const n = e || t,
                    o = _(t)[0],
                    i = n.closest(".js-navigation-item") || o;
                if (C(t), i instanceof HTMLElement) {
                    if ($(i, t)) return;
                    V(p(i), i)
                }
            }

            function R(t) {
                const e = t.querySelectorAll(".js-navigation-item.navigation-focus");
                for (const n of e) n.classList.remove("navigation-focus")
            }

            function I(t, e) {
                const n = _(e),
                    o = n.indexOf(t),
                    i = n[o - 1];
                if (i) {
                    if ($(i, e)) return;
                    const t = p(i);
                    "page" === P(e) ? B(t, i) : V(t, i)
                }
            }

            function O(t, e) {
                const n = _(e),
                    o = n.indexOf(t),
                    i = n[o + 1];
                if (i) {
                    if ($(i, e)) return;
                    const t = p(i);
                    "page" === P(e) ? B(t, i) : V(t, i)
                }
            }

            function D(t, e = !1) {
                n(t, "navigation:keyopen", {
                    modifierKey: e
                })
            }

            function $(t, e) {
                return !n(t, "navigation:focus") || (R(e), t.classList.add("navigation-focus"), !1)
            }

            function N() {
                return document.querySelector(".js-active-navigation-container")
            }

            function _(t) {
                const e = [];
                for (const n of t.querySelectorAll(".js-navigation-item")) n instanceof HTMLElement && v(n) && e.push(n);
                return e
            }

            function P(t) {
                return t.getAttribute("data-navigation-scroll") || "item"
            }

            function B(t, e, n = "smooth") {
                const o = h(e, t);
                o && (o.bottom <= 0 ? e.scrollIntoView({
                    behavior: n,
                    block: "start"
                }) : o.top <= 0 && e.scrollIntoView({
                    behavior: n,
                    block: "end"
                }))
            }

            function V(t, e) {
                const n = g(e, t),
                    o = h(e, t);
                if (null != n && null != o)
                    if (o.bottom <= 0 && document.body) {
                        y(t, {
                            top: (null != t.offsetParent ? t.scrollHeight : document.body.scrollHeight) - (n.bottom + o.height)
                        })
                    } else o.top <= 0 && y(t, {
                        top: n.top
                    })
            }

            function W(...t) {
                return JSON.stringify(t, ((t, e) => "object" == typeof e ? e : String(e)))
            }

            function X(t, e = {}) {
                const {
                    hash: n = W,
                    cache: o = new Map
                } = e;
                return function(...e) {
                    const i = n.apply(this, e);
                    if (o.has(i)) return o.get(i);
                    let r = t.apply(this, e);
                    return r instanceof Promise && (r = r.catch((t => {
                        throw o.delete(i), t
                    }))), o.set(i, r), r
                }
            }
            class NoOpStorage {
                getItem() {
                    return null
                }
                setItem() {}
                removeItem() {}
                clear() {}
                key() {
                    return null
                }
                get length() {
                    return 0
                }
            }

            function z(t, e = {
                throwQuotaErrorsOnSet: !1
            }, n = window) {
                let o;
                try {
                    o = n[t]
                } catch (r) {
                    o = new NoOpStorage
                }
                const {
                    throwQuotaErrorsOnSet: i
                } = e;
                return {
                    getItem: function(t) {
                        try {
                            return o.getItem(t)
                        } catch (e) {
                            return null
                        }
                    },
                    setItem: function(t, e) {
                        try {
                            o.setItem(t, e)
                        } catch (n) {
                            if (i && n.message.toLowerCase().includes("quota")) throw n
                        }
                    },
                    removeItem: function(t) {
                        try {
                            o.removeItem(t)
                        } catch (e) {}
                    }
                }
            }

            function U(t) {
                var e, n;
                const o = null === (n = null === (e = t.head) || void 0 === e ? void 0 : e.querySelector('meta[name="expected-hostname"]')) || void 0 === n ? void 0 : n.content;
                if (!o) return !1;
                return o.replace(/\.$/, "").split(".").slice(-2).join(".") !== t.location.hostname.replace(/\.$/, "").split(".").slice(-2).join(".")
            }
            const F = t("a6", "interactive" === document.readyState || "complete" === document.readyState ? Promise.resolve() : new Promise((t => {
                    document.addEventListener("DOMContentLoaded", (() => {
                        t()
                    }))
                }))),
                K = t("J", "complete" === document.readyState ? Promise.resolve() : new Promise((t => {
                    window.addEventListener("load", t)
                })));
            let J = [];

            function Y(t, e = !1) {
                var n, o;
                void 0 === t.timestamp && (t.timestamp = (new Date).getTime()), t.loggedIn = !!(null === (o = null === (n = document.head) || void 0 === n ? void 0 : n.querySelector('meta[name="user-login"]')) || void 0 === o ? void 0 : o.content), J.push(t), e ? Q() : async function() {
                    await K, null == G && (G = window.requestIdleCallback(Q))
                }()
            }
            let G = null;

            function Q() {
                var t, e;
                if (G = null, U(document)) return;
                const n = null === (e = null === (t = document.head) || void 0 === t ? void 0 : t.querySelector('meta[name="browser-stats-url"]')) || void 0 === e ? void 0 : e.content;
                if (!n) return;
                const o = JSON.stringify({
                    stats: J
                });
                try {
                    navigator.sendBeacon && navigator.sendBeacon(n, o)
                } catch (i) {}
                J = []
            }

            function Z(t) {
                const e = [...t.querySelectorAll("meta[name=html-safe-nonce]")].map((t => t.content));
                if (e.length < 1) throw new Error("could not find html-safe-nonce on document");
                return e
            }
            class ResponseError extends Error {
                constructor(t, e) {
                    super(`${t} for HTTP ${e.status}`), this.response = e
                }
            }

            function tt(t, e, n = !1) {
                const o = e.headers.get("content-type") || "";
                if (!n && !o.startsWith("text/html")) throw new ResponseError("expected response with text/html, but was " + o, e);
                if (n && !o.startsWith("text/html") && !o.startsWith("application/json")) throw new ResponseError("expected response with text/html or application/json, but was " + o, e);
                const i = e.headers.get("x-html-safe");
                if (!i) throw new ResponseError("missing X-HTML-Safe nonce", e);
                if (!t.includes(i)) throw new ResponseError("response X-HTML-Safe nonce did not match", e)
            }

            function et(t, e) {
                const n = t.createElement("template");
                return n.innerHTML = e, t.importNode(n.content, !0)
            }
            class ResponseError$1 extends Error {
                constructor(t) {
                    super(), this.response = t, this.framesToPop = 1
                }
            }

            function nt(t, e) {
                if (t.status >= 200 && t.status < 300) return t; {
                    const n = t.statusText ? " " + t.statusText : "";
                    throw e.message = `HTTP ${t.status}${n}`, e
                }
            }

            function ot(t, e) {
                const n = e ? Object.assign({}, e) : {},
                    o = new Request(t, n);
                return o.headers.append("X-Requested-With", "XMLHttpRequest"), o
            }
            async function it(t, e, n) {
                const o = await self.fetch(ot(e, n));
                return nt(o, new ResponseError$1(o)), tt(Z(t), o), et(t, await o.text())
            }
            let rt = !1;
            const st = new r;

            function ct(t) {
                const e = t.target;
                if (e instanceof HTMLElement && e.nodeType !== Node.DOCUMENT_NODE)
                    for (const n of st.matches(e)) n.data.call(null, e)
            }

            function at(t, e) {
                rt || (rt = !0, document.addEventListener("focus", ct, !0)), st.add(t, e), document.activeElement instanceof HTMLElement && document.activeElement.matches(t) && e(document.activeElement)
            }

            function lt(t, e, n) {
                function o(e) {
                    const i = e.currentTarget;
                    i && (i.removeEventListener(t, n), i.removeEventListener("blur", o))
                }
                at(e, (function(e) {
                    e.addEventListener(t, n), e.addEventListener("blur", o)
                }))
            }

            function ut(t, e) {
                function n(t) {
                    const {
                        currentTarget: o
                    } = t;
                    o && (o.removeEventListener("input", e), o.removeEventListener("blur", n))
                }
                at(t, (function(t) {
                    t.addEventListener("input", e), t.addEventListener("blur", n)
                }))
            }
            async function dt(t) {
                const e = document.querySelector("#site-details-dialog").content.cloneNode(!0),
                    o = e.querySelector("details"),
                    i = o.querySelector("details-dialog"),
                    r = o.querySelector(".js-details-dialog-spinner");
                t.detailsClass && o.classList.add(...t.detailsClass.split(" ")), t.dialogClass && i.classList.add(...t.dialogClass.split(" ")), document.body.append(e);
                const s = await t.content;
                return r.remove(), i.prepend(s), o.addEventListener("toggle", (() => {
                    o.hasAttribute("open") || (n(i, "dialog:remove"), o.remove())
                })), i
            }

            function ft(t) {
                const e = t.closest("form");
                if (!(e instanceof HTMLFormElement)) return;
                let n = mt(e);
                if (t.name) {
                    const o = t.matches("input[type=submit]") ? "Submit" : "",
                        i = t.value || o;
                    n || (n = document.createElement("input"), n.type = "hidden", n.classList.add("is-submit-button-value"), e.prepend(n)), n.name = t.name, n.value = i
                } else n && n.remove()
            }

            function mt(t) {
                const e = t.querySelector("input.is-submit-button-value");
                return e instanceof HTMLInputElement ? e : null
            }

            function pt() {
                const t = document.getElementById("ajax-error-message");
                t && (t.hidden = !1)
            }

            function ht() {
                const t = document.getElementById("ajax-error-message");
                t && (t.hidden = !0)
            }

            function gt(t, e, n) {
                return t.dispatchEvent(new CustomEvent(e, {
                    bubbles: !0,
                    cancelable: n
                }))
            }

            function yt(t, e) {
                e && (! function(t, e) {
                    if (!(t instanceof HTMLFormElement)) throw new TypeError("The specified element is not of type HTMLFormElement.");
                    if (!(e instanceof HTMLElement)) throw new TypeError("The specified element is not of type HTMLElement.");
                    if ("submit" !== e.type) throw new TypeError("The specified element is not a submit button.");
                    if (!t || t !== e.form) throw new Error("The specified element is not owned by the form element.")
                }(t, e), ft(e)), gt(t, "submit", !0) && t.submit()
            }

            function vt(t) {
                if (!(t instanceof HTMLElement)) return !1;
                const e = t.nodeName.toLowerCase(),
                    n = (t.getAttribute("type") || "").toLowerCase();
                return "select" === e || "textarea" === e || "input" === e && "submit" !== n && "reset" !== n || t.isContentEditable
            }

            function bt(t, e = !1) {
                return wt(t) || function(t, e) {
                    const n = function(t) {
                        if (Lt instanceof Element) return Lt;
                        if (t && t.ownerDocument && t.ownerDocument.activeElement) return t.ownerDocument.activeElement;
                        return null
                    }(t);
                    if (null === n) return !1;
                    if (e && n === t) return !1;
                    if (n === t && vt(n)) return !0;
                    if (t.contains(n) && ! function(t) {
                            var e;
                            if (t instanceof s) return !0;
                            const n = t instanceof HTMLAnchorElement || t instanceof HTMLButtonElement,
                                o = null === (e = t.parentElement) || void 0 === e ? void 0 : e.classList.contains("task-list-item");
                            if (n && o) return !0;
                            if (!(xt instanceof Element)) return !1;
                            const i = t.closest(At);
                            if (!i) return !1;
                            const r = xt.closest(At);
                            return i === r
                        }(n)) return !0;
                    return xt instanceof Element && t.contains(xt) && !!xt.closest("details[open] > summary")
                }(t, e) || function(t) {
                    return t.matches(":active")
                }(t) || function(t) {
                    return !(!t.closest(".is-dirty") && !t.querySelector(".is-dirty"))
                }(t)
            }

            function wt(t) {
                for (const e of t.querySelectorAll("input, textarea"))
                    if ((e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement) && Et(e)) return !0;
                return !1
            }

            function Et(t) {
                if (t instanceof HTMLInputElement && ("checkbox" === t.type || "radio" === t.type)) {
                    if (t.checked !== t.defaultChecked) return !0
                } else if (t.value !== t.defaultValue) return !0;
                return !1
            }
            let Lt, xt;
            i("deprecatedAjaxError", "[data-remote]", (function(t) {
                const e = t.detail,
                    {
                        error: n,
                        text: o
                    } = e;
                t.currentTarget === t.target && "abort" !== n && "canceled" !== n && (/<html/.test(o) ? (pt(), t.stopImmediatePropagation()) : setTimeout((function() {
                    t.defaultPrevented || pt()
                }), 0))
            })), i("deprecatedAjaxSend", "[data-remote]", (function() {
                ht()
            })), i("click", ".js-ajax-error-dismiss", (function() {
                ht()
            })), i("click", ".js-remote-submit-button", (async function(t) {
                const e = t.currentTarget.form;
                let n;
                t.preventDefault();
                try {
                    n = await fetch(e.action, {
                        method: e.method,
                        body: new FormData(e),
                        headers: {
                            Accept: "application/json",
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    })
                } catch (o) {}
                n && !n.ok && pt()
            })), document.addEventListener("mouseup", (function(t) {
                xt = t.target
            }));
            const At = "a[href], button";

            function kt(t, e) {
                return jt(function(t) {
                    if (t.activeElement !== t.body) return t.activeElement;
                    var e = t.querySelectorAll(":hover"),
                        n = e.length;
                    if (n) return e[n - 1]
                }(t), e)
            }

            function jt(t, e) {
                var n = t;
                if (!n) return Promise.resolve(e());
                var o = n.ownerDocument.documentElement;
                var i = function(t) {
                    for (var e = []; t;) {
                        var n = t.getBoundingClientRect(),
                            o = n.top,
                            i = n.left;
                        e.push({
                            element: t,
                            top: o,
                            left: i
                        }), t = t.parentElement
                    }
                    return e
                }(n);
                return Promise.resolve(e()).then((function(t) {
                    var e = function(t) {
                        for (var e = 0; e < t.length; e++) {
                            var n = t[e];
                            if (o.contains(n.element)) return n
                        }
                    }(i);
                    if (e) {
                        n = e.element;
                        var r = e.top,
                            s = e.left,
                            c = n.getBoundingClientRect(),
                            a = c.top,
                            l = c.left;
                        ! function(t, e, n) {
                            var o = t.ownerDocument,
                                i = o.defaultView;

                            function r(t) {
                                return t.offsetParent ? {
                                    top: t.scrollTop,
                                    left: t.scrollLeft
                                } : {
                                    top: i.pageYOffset,
                                    left: i.pageXOffset
                                }
                            }

                            function s(t, e, n) {
                                if (0 === e && 0 === n) return [0, 0];
                                var s = r(t),
                                    c = s.top + n,
                                    a = s.left + e;
                                t === o || t === i || t === o.documentElement || t === o.body ? o.defaultView.scrollTo(a, c) : (t.scrollTop = c, t.scrollLeft = a);
                                var l = r(t);
                                return [l.left - s.left, l.top - s.top]
                            }

                            function c(t) {
                                var e = t;
                                if (e.offsetParent && e !== o.body) {
                                    for (; e !== o.body;) {
                                        if (!e.parentElement) return;
                                        e = e.parentElement;
                                        var n = i.getComputedStyle(e),
                                            r = n.position,
                                            s = n.overflowY,
                                            c = n.overflowX;
                                        if ("fixed" === r || "auto" === s || "auto" === c || "scroll" === s || "scroll" === c) break
                                    }
                                    return e
                                }
                            }
                            var a = c(t),
                                l = 0,
                                u = 0;
                            for (; a;) {
                                var d = s(a, e - l, n - u);
                                if (l += d[0], u += d[1], l === e && u === n) break;
                                a = c(a)
                            }
                        }(n, l - s, a - r)
                    }
                    return t
                }))
            }
            const St = new WeakMap,
                Tt = t("at", {});

            function Ct(t, e, n = !1) {
                return kt(document, (() => {
                    const o = et(document, e.trim()),
                        i = n && t.ownerDocument && t === t.ownerDocument.activeElement ? o.querySelector("*") : null,
                        r = Array.from(t.querySelectorAll("details[open][id]")).map((t => t.id));
                    "DETAILS" === t.tagName && t.id && t.hasAttribute("open") && r.push(t.id);
                    for (const e of t.querySelectorAll(".js-updatable-content-preserve-scroll-position")) {
                        const t = e.getAttribute("data-updatable-content-scroll-position-id");
                        qt.set(t, e.scrollTop)
                    }
                    for (const t of r) {
                        const e = o.querySelector("#" + t);
                        e && e.setAttribute("open", "")
                    }
                    t.replaceWith(o), i instanceof HTMLElement && i.focus()
                }))
            }
            const qt = new Map;
            e(".js-updatable-content-preserve-scroll-position", {
                constructor: HTMLElement,
                add(t) {
                    const e = t.getAttribute("data-updatable-content-scroll-position-id");
                    if (!e) return;
                    const n = qt.get(e);
                    null != n && (t.scrollTop = n)
                }
            });
            const Mt = ["input[pattern]", "input[required]", "textarea[required]", "input[data-required-change]", "textarea[data-required-change]", "input[data-required-value]", "textarea[data-required-value]"].join(",");

            function Ht(t) {
                const e = t.getAttribute("data-required-value"),
                    n = t.getAttribute("data-required-value-prefix");
                if (t.value === e) t.setCustomValidity("");
                else {
                    let o = e;
                    n && (o = n + o), t.setCustomValidity(o)
                }
            }
            ut("[data-required-value]", (function(t) {
                Ht(t.currentTarget)
            })), i("change", "[data-required-value]", (function(t) {
                const e = t.currentTarget;
                Ht(e), It(e.form)
            })), ut("[data-required-trimmed]", (function(t) {
                const e = t.currentTarget;
                "" === e.value.trim() ? e.setCustomValidity(e.getAttribute("data-required-trimmed")) : e.setCustomValidity("")
            })), i("change", "[data-required-trimmed]", (function(t) {
                const e = t.currentTarget;
                "" === e.value.trim() ? e.setCustomValidity(e.getAttribute("data-required-trimmed")) : e.setCustomValidity(""), It(e.form)
            })), at(Mt, (t => {
                let e = t.checkValidity();

                function n() {
                    const n = t.checkValidity();
                    n !== e && t.form && It(t.form), e = n
                }
                t.addEventListener("input", n), t.addEventListener("blur", (function e() {
                    t.removeEventListener("input", n), t.removeEventListener("blur", e)
                }))
            }));
            const Rt = new WeakMap;

            function It(t) {
                const e = t.checkValidity();
                for (const n of t.querySelectorAll("button[data-disable-invalid]")) n.disabled = !e
            }
            e("button[data-disable-invalid]", {
                constructor: HTMLButtonElement,
                initialize(t) {
                    const e = t.form;
                    e && (! function(t) {
                        Rt.get(t) || (t.addEventListener("change", (() => It(t))), Rt.set(t, !0))
                    }(e), t.disabled = !e.checkValidity())
                }
            }), e("input[data-required-change], textarea[data-required-change]", (function(t) {
                const e = t,
                    n = "radio" === e.type && e.form ? e.form.elements.namedItem(e.name).value : null;

                function o(t) {
                    const o = e.form;
                    if (t && "radio" === e.type && o && n)
                        for (const i of o.elements.namedItem(e.name)) i instanceof HTMLInputElement && i.setCustomValidity(e.value === n ? "unchanged" : "");
                    else e.setCustomValidity(e.value === (n || e.defaultValue) ? "unchanged" : "")
                }
                e.addEventListener("input", o), e.addEventListener("change", o), o(), e.form && It(e.form)
            })), document.addEventListener("reset", (function(t) {
                if (t.target instanceof HTMLFormElement) {
                    const e = t.target;
                    setTimeout((() => It(e)))
                }
            }));
            var Ot = -1 / 0;

            function Dt(t) {
                return t.toLowerCase() === t
            }

            function $t(t) {
                return t.toUpperCase() === t
            }

            function Nt(t, e, n, o) {
                for (var i = t.length, r = e.length, s = t.toLowerCase(), c = e.toLowerCase(), a = function(t) {
                        for (var e = t.length, n = new Array(e), o = "/", i = 0; i < e; i++) {
                            var r = t[i];
                            "/" === o ? n[i] = .9 : "-" === o || "_" === o || " " === o ? n[i] = .8 : "." === o ? n[i] = .6 : Dt(o) && $t(r) ? n[i] = .7 : n[i] = 0, o = r
                        }
                        return n
                    }(e), l = 0; l < i; l++) {
                    n[l] = new Array(r), o[l] = new Array(r);
                    for (var u = Ot, d = l === i - 1 ? -.005 : -.01, f = 0; f < r; f++)
                        if (s[l] === c[f]) {
                            var m = Ot;
                            l ? f && (m = Math.max(o[l - 1][f - 1] + a[f], n[l - 1][f - 1] + 1)) : m = -.005 * f + a[f], n[l][f] = m, o[l][f] = u = Math.max(m, u + d)
                        } else n[l][f] = Ot, o[l][f] = u += d
                }
            }

            function _t(t, e) {
                var n = t.length,
                    o = e.length;
                if (!n || !o) return Ot;
                if (n === o) return Infinity;
                if (o > 1024) return Ot;
                var i = new Array(n),
                    r = new Array(n);
                return Nt(t, e, i, r), r[n - 1][o - 1]
            }

            function Pt(t, e) {
                var n = t.length,
                    o = e.length,
                    i = new Array(n);
                if (!n || !o) return i;
                if (n === o) {
                    for (var r = 0; r < n; r++) i[r] = r;
                    return i
                }
                if (o > 1024) return i;
                var s = new Array(n),
                    c = new Array(n);
                Nt(t, e, s, c);
                for (var a = !1, l = (r = n - 1, o - 1); r >= 0; r--)
                    for (; l >= 0; l--)
                        if (s[r][l] !== Ot && (a || s[r][l] === c[r][l])) {
                            a = r && l && c[r][l] === s[r - 1][l - 1] + 1, i[r] = l--;
                            break
                        }
                return i
            }

            function Bt(t, e) {
                t = t.toLowerCase(), e = e.toLowerCase();
                for (var n = t.length, o = 0, i = 0; o < n; o += 1)
                    if (0 === (i = e.indexOf(t[o], i) + 1)) return !1;
                return !0
            }
            const Vt = (t, e, n) => {
                    if (!Bt(t, e)) return -1 / 0;
                    const o = _t(t, e);
                    return o < n ? -1 / 0 : o
                },
                Wt = (t, e, n) => {
                    t.innerHTML = "";
                    let o = 0;
                    for (const i of Pt(e, n)) {
                        "" !== n.slice(o, i) && t.appendChild(document.createTextNode(n.slice(o, i))), o = i + 1;
                        const e = document.createElement("mark");
                        e.textContent = n[i], t.appendChild(e)
                    }
                    t.appendChild(document.createTextNode(n.slice(o)))
                },
                Xt = new WeakMap,
                zt = new WeakMap,
                Ut = new WeakMap,
                Ft = t => {
                    if (!Ut.has(t) && t instanceof HTMLElement) {
                        const e = (t.getAttribute("data-value") || t.textContent || "").trim();
                        return Ut.set(t, e), e
                    }
                    return Ut.get(t) || ""
                };
            class FuzzyListElement extends HTMLElement {
                connectedCallback() {
                    const t = this.querySelector("ul");
                    if (!t) return;
                    const e = new Set(t.querySelectorAll("li")),
                        n = this.querySelector("input");
                    n instanceof HTMLInputElement && n.addEventListener("input", (() => {
                        this.value = n.value
                    }));
                    const o = new MutationObserver((t => {
                        let n = !1;
                        for (const o of t)
                            if ("childList" === o.type && o.addedNodes.length)
                                for (const t of o.addedNodes)
                                    if (t instanceof HTMLLIElement && !e.has(t)) {
                                        const o = Ft(t);
                                        n = n || Bt(this.value, o), e.add(t)
                                    }
                        n && this.sort()
                    }));
                    o.observe(t, {
                        childList: !0
                    });
                    const i = {
                        handler: o,
                        items: e,
                        lazyItems: new Map,
                        timer: null
                    };
                    zt.set(this, i)
                }
                disconnectedCallback() {
                    const t = zt.get(this);
                    t && (t.handler.disconnect(), zt.delete(this))
                }
                addLazyItems(t, e) {
                    const n = zt.get(this);
                    if (!n) return;
                    const {
                        lazyItems: o
                    } = n, {
                        value: i
                    } = this;
                    let r = !1;
                    for (const s of t) o.set(s, e), r = r || Boolean(i) && Bt(i, s);
                    r && this.sort()
                }
                sort() {
                    const t = Xt.get(this);
                    t && (t.aborted = !0);
                    const e = {
                        aborted: !1
                    };
                    Xt.set(this, e);
                    const {
                        minScore: n,
                        markSelector: o,
                        maxMatches: i,
                        value: r
                    } = this, s = zt.get(this);
                    if (!s) return;
                    if (!this.dispatchEvent(new CustomEvent("fuzzy-list-will-sort", {
                            cancelable: !0,
                            detail: r
                        }))) return;
                    const {
                        items: c,
                        lazyItems: a
                    } = s, l = this.hasAttribute("mark-selector"), u = this.querySelector("ul");
                    if (!u) return;
                    const d = [];
                    if (r) {
                        for (const t of c) {
                            const e = Ft(t),
                                o = Vt(r, e, n);
                            o !== -1 / 0 && d.push({
                                item: t,
                                score: o
                            })
                        }
                        for (const [t, e] of a) {
                            const o = Vt(r, t, n);
                            o !== -1 / 0 && d.push({
                                text: t,
                                render: e,
                                score: o
                            })
                        }
                        d.sort(((t, e) => e.score - t.score)).splice(i)
                    } else {
                        let t = d.length;
                        for (const e of c) {
                            if (t >= i) break;
                            d.push({
                                item: e,
                                score: 1
                            }), t += 1
                        }
                        for (const [e, n] of a) {
                            if (t >= i) break;
                            d.push({
                                text: e,
                                render: n,
                                score: 1
                            }), t += 1
                        }
                    }
                    requestAnimationFrame((() => {
                        if (e.aborted) return;
                        const t = u.querySelector('input[type="radio"]:checked');
                        u.innerHTML = "";
                        let n = 0;
                        const i = () => {
                            if (e.aborted) return;
                            const s = Math.min(d.length, n + 100),
                                f = document.createDocumentFragment();
                            for (let t = n; t < s; t += 1) {
                                const e = d[t];
                                let n = null;
                                if ("render" in e && "text" in e) {
                                    const {
                                        render: t,
                                        text: o
                                    } = e;
                                    n = t(o), c.add(n), Ut.set(n, o), a.delete(o)
                                } else "item" in e && (n = e.item);
                                n instanceof HTMLElement && (l && Wt(o && n.querySelector(o) || n, l ? r : "", Ft(n)), f.appendChild(n))
                            }
                            n = s;
                            let m = !1;
                            if (t instanceof HTMLInputElement)
                                for (const e of f.querySelectorAll('input[type="radio"]:checked')) e instanceof HTMLInputElement && e.value !== t.value && (e.checked = !1, m = !0);
                            if (u.appendChild(f), t && m && t.dispatchEvent(new Event("change", {
                                    bubbles: !0
                                })), s < d.length) requestAnimationFrame(i);
                            else {
                                u.hidden = 0 === d.length;
                                const t = this.querySelector("[data-fuzzy-list-show-on-empty]");
                                t && (t.hidden = d.length > 0), this.dispatchEvent(new CustomEvent("fuzzy-list-sorted", {
                                    detail: d.length
                                }))
                            }
                        };
                        i()
                    }))
                }
                get value() {
                    return this.getAttribute("value") || ""
                }
                set value(t) {
                    this.setAttribute("value", t)
                }
                get markSelector() {
                    return this.getAttribute("mark-selector") || ""
                }
                set markSelector(t) {
                    t ? this.setAttribute("mark-selector", t) : this.removeAttribute("mark-selector")
                }
                get minScore() {
                    return Number(this.getAttribute("min-score") || 0)
                }
                set minScore(t) {
                    Number.isNaN(t) || this.setAttribute("min-score", String(t))
                }
                get maxMatches() {
                    return Number(this.getAttribute("max-matches") || 1 / 0)
                }
                set maxMatches(t) {
                    Number.isNaN(t) || this.setAttribute("max-matches", String(t))
                }
                static get observedAttributes() {
                    return ["value", "mark-selector", "min-score", "max-matches"]
                }
                attributeChangedCallback(t, e, n) {
                    if (e === n) return;
                    const o = zt.get(this);
                    o && (o.timer && window.clearTimeout(o.timer), o.timer = window.setTimeout((() => this.sort()), 100))
                }
            }

            function Kt() {
                return /Windows/.test(navigator.userAgent) ? "windows" : /Macintosh/.test(navigator.userAgent) ? "mac" : null
            }

            function Jt(t) {
                const e = (t.getAttribute("data-platforms") || "").split(","),
                    n = Kt();
                return Boolean(n && e.includes(n))
            }
            t("$", FuzzyListElement), window.customElements.get("fuzzy-list") || (window.FuzzyListElement = FuzzyListElement, window.customElements.define("fuzzy-list", FuzzyListElement)), e(".js-remove-unless-platform", (function(t) {
                Jt(t) || t.remove()
            })), e(".js-show-for-platform", {
                constructor: HTMLElement,
                add(t) {
                    Jt(t) && (t.hidden = !1)
                }
            }), e(".js-hide-for-platform", {
                constructor: HTMLElement,
                add(t) {
                    Jt(t) && (t.hidden = !0)
                }
            });
            let Yt = null;

            function Gt(t) {
                Yt && (Yt.textContent = "", Yt.textContent = t)
            }!async function() {
                await F, Yt = document.createElement("div"), Yt.setAttribute("aria-live", "polite"), Yt.classList.add("sr-only"), document.body.append(Yt)
            }();
            const Qt = [];
            let Zt, te = 0;

            function ee() {
                return Zt
            }

            function ne() {
                try {
                    return Math.min(Math.max(0, history.length) || 0, 9007199254740991)
                } catch (fo) {
                    return 0
                }
            }

            function oe() {
                return ne() - 1 + te
            }

            function ie(t) {
                Zt = t;
                const e = location.href;
                Qt[oe()] = {
                    url: e,
                    state: Zt
                }, Qt.length = ne(), window.dispatchEvent(new CustomEvent("statechange", {
                    bubbles: !1,
                    cancelable: !1
                }))
            }

            function re() {
                return (new Date).getTime()
            }

            function se(t, e, n) {
                te = 0;
                const o = Object.assign({}, {
                    _id: re()
                }, t);
                history.pushState(o, e, n), ie(o)
            }

            function ce(t, e, n) {
                const o = Object.assign({}, {
                    _id: ee()._id
                }, t);
                history.replaceState(o, e, n), ie(o)
            }
            async function ae(t, e) {
                let n;
                const o = new Promise((e => {
                    n = self.setTimeout(e, t)
                }));
                if (!e) return o;
                try {
                    await Promise.race([o, le(e)])
                } catch (fo) {
                    throw self.clearTimeout(n), fo
                }
            }

            function le(t) {
                return new Promise(((e, n) => {
                    const o = new Error("aborted");
                    o.name = "AbortError", t.aborted ? n(o) : t.addEventListener("abort", (() => n(o)))
                }))
            }
            Zt = function() {
                const t = {
                    _id: (new Date).getTime()
                };
                return ie(t), t
            }(), window.addEventListener("popstate", (function(t) {
                const e = t.state;
                if (!e || !e._id) return;
                e._id < (ee()._id || NaN) ? te-- : te++, ie(e)
            }), !0), window.addEventListener("hashchange", (function() {
                if (ne() > Qt.length) {
                    const t = {
                        _id: re()
                    };
                    history.replaceState(t, "", location.href), ie(t)
                }
            }), !0);
            const ue = new WeakMap;

            function de(t) {
                const e = ue.get(t);
                e && (null != e.timer && clearTimeout(e.timer), e.timer = window.setTimeout((() => {
                    null != e.timer && (e.timer = null), e.inputed = !1, e.listener.call(null, t)
                }), e.wait))
            }

            function fe(t) {
                const e = t.currentTarget,
                    n = ue.get(e);
                n && (n.keypressed = !0, null != n.timer && clearTimeout(n.timer))
            }

            function me(t) {
                const e = t.currentTarget,
                    n = ue.get(e);
                n && (n.keypressed = !1, n.inputed && de(e))
            }

            function pe(t) {
                const e = t.currentTarget,
                    n = ue.get(e);
                n && (n.inputed = !0, n.keypressed || de(e))
            }
            const he = {},
                ge = {};

            function ye() {
                const t = ge[document.location.pathname];
                if (t)
                    for (const e of t) {
                        const t = document.querySelector("#" + e.id);
                        t && t.replaceWith(e)
                    }
            }

            function ve() {
                const t = he[document.location.pathname];
                if (!t) return;
                const e = document.head;
                for (const n of document.querySelectorAll("head [data-pjax-transient]")) n.remove();
                for (const n of t) n.matches("title, script, link[rel=stylesheet]") ? n.matches("link[rel=stylesheet]") && e.append(n) : (n.setAttribute("data-pjax-transient", ""), e.append(n))
            }

            function be(t, e = location.hash) {
                return we(t, Ee(e))
            }

            function we(t, e) {
                return "" === e ? null : t.getElementById(e) || t.getElementsByName(e)[0]
            }

            function Ee(t) {
                try {
                    return decodeURIComponent(t.slice(1))
                } catch (e) {
                    return ""
                }
            }(async () => {
                await F, he[document.location.pathname] = Array.from(document.querySelectorAll("head [data-pjax-transient]")), ge[document.location.pathname] = Array.from(document.querySelectorAll("[data-pjax-replace]"))
            })(), document.addEventListener("pjax:beforeReplace", (function(t) {
                const e = t.detail.contents || [];
                for (let n = 0; n < e.length; n++) {
                    const t = e[n];
                    t instanceof Element && ("pjax-head" === t.id ? (he[document.location.pathname] = Array.from(t.children), e[n] = null) : t.hasAttribute("data-pjax-replace") && (ge[document.location.pathname] || (ge[document.location.pathname] = []), ge[document.location.pathname].push(t), e[n] = null))
                }
            }));
            let Le, xe = null;

            function Ae(t, e, n) {
                return t.dispatchEvent(new CustomEvent(e, {
                    bubbles: !0,
                    cancelable: !0,
                    detail: n
                }))
            }
            async function ke(t) {
                const e = Object.assign({
                    push: !0,
                    replace: !1,
                    type: "GET",
                    dataType: "html",
                    scrollTo: 0
                }, t);
                e.requestUrl = e.url;
                const n = Re(e.url),
                    o = n.hash,
                    i = e.container,
                    r = Ie(i);
                "GET" === e.type && (n.search += `${n.search?"&":""}_pjax=${encodeURIComponent(r)}`, e.url = n.toString()), Le || (Le = {
                    id: qe(),
                    url: window.location.href,
                    title: document.title,
                    container: r,
                    fragment: e.fragment
                }, ce(Le, Le.title, Le.url)), null == xe || xe.abort();
                const {
                    signal: s
                } = xe = new AbortController;
                var c, a;
                !0 === e.push && !0 !== e.replace && (c = Le.id, a = Me(i), Ne[c] = a, Pe.push(c), Be(_e, 0), Be(Pe, 20), se(null, "", e.requestUrl)), Ae(i, "pjax:start", {
                    url: e.url
                }), Ae(i, "pjax:send");
                let l = void 0;
                try {
                    l = await fetch(e.url, {
                        signal: s,
                        method: e.type,
                        body: e.data,
                        headers: {
                            Accept: "text/html",
                            "X-PJAX": "true",
                            "X-PJAX-Container": r,
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    })
                } catch (fo) {
                    l = void 0
                }
                if (!l || !l.ok) {
                    const t = Ae(i, "pjax:error");
                    if ("GET" === e.type && t) {
                        const t = l && l.headers.get("X-PJAX-URL"),
                            n = t ? He(Re(t)) : e.requestUrl;
                        Y({
                            pjaxFailureReason: "response_error",
                            requestUrl: e.requestUrl
                        }), je(n)
                    }
                    return Ae(i, "pjax:complete"), void Ae(i, "pjax:end")
                }
                const u = Le,
                    d = function() {
                        for (const t of document.getElementsByTagName("meta")) {
                            const e = t.getAttribute("http-equiv");
                            if (e && "X-PJAX-VERSION" === e.toUpperCase()) return t.content
                        }
                        return null
                    }(),
                    f = l.headers.get("X-PJAX-Version"),
                    m = function(t, e, n) {
                        const o = {
                                url: $e(e, n.requestUrl),
                                title: ""
                            },
                            i = /<html/i.test(t);
                        if ("text/html" !== (e.headers.get("Content-Type") || "").split(";", 1)[0].trim()) return o;
                        let r, s;
                        if (i) {
                            const e = t.match(/<head[^>]*>([\s\S.]*)<\/head>/i),
                                n = t.match(/<body[^>]*>([\s\S.]*)<\/body>/i);
                            r = e ? Array.from(et(document, e[0]).childNodes) : [], s = n ? Array.from(et(document, n[0]).childNodes) : []
                        } else r = s = Array.from(et(document, t).childNodes);
                        if (0 === s.length) return o;
                        const c = Oe(r, "title", HTMLTitleElement);
                        let a;
                        if (o.title = c.length > 0 && c[c.length - 1].textContent || "", n.fragment) {
                            if ("body" === n.fragment) a = s;
                            else {
                                const t = Oe(s, n.fragment, Element);
                                a = t.length > 0 ? [t[0]] : []
                            }
                            if (a.length && ("body" === n.fragment ? o.contents = a : o.contents = a.flatMap((t => Array.from(t.childNodes))), !o.title)) {
                                const t = a[0];
                                t instanceof Element && (o.title = t.getAttribute("title") || t.getAttribute("data-title") || "")
                            }
                        } else i || (o.contents = s);
                        if (o.contents) {
                            o.contents = o.contents.filter((function(t) {
                                return !(t instanceof Element) || !t.matches("title")
                            }));
                            for (const n of o.contents)
                                if (n instanceof Element)
                                    for (const t of n.querySelectorAll("title")) t.remove();
                            const t = Oe(o.contents, "script[src]", HTMLScriptElement);
                            for (const n of t) n.remove();
                            o.scripts = t, o.contents = o.contents.filter((e => -1 === t.indexOf(e)));
                            const e = Oe(o.contents, "link[rel=stylesheet]", HTMLLinkElement);
                            for (const n of e) n.remove();
                            o.stylesheets = e, o.contents = o.contents.filter((t => !e.includes(t)))
                        }
                        o.title && (o.title = o.title.trim());
                        return o
                    }(await l.text(), l, e),
                    {
                        contents: p
                    } = m,
                    h = Re(m.url);
                if (o && (h.hash = o, m.url = h.href), d && f && d !== f) return Ae(i, "pjax:hardLoad", {
                    reason: "version_mismatch"
                }), Y({
                    pjaxFailureReason: "version_mismatch",
                    requestUrl: e.requestUrl
                }), void je(m.url);
                if (!p) return Ae(i, "pjax:hardLoad", {
                    reason: "missing_response_body"
                }), Y({
                    pjaxFailureReason: "missing_response_body",
                    requestUrl: e.requestUrl
                }), void je(m.url);
                Le = {
                    id: null != e.id ? e.id : qe(),
                    url: m.url,
                    title: m.title,
                    container: r,
                    fragment: e.fragment
                }, !0 !== e.push && !0 !== e.replace || ce(Le, m.title, m.url);
                const g = document.activeElement,
                    y = null != e.container && e.container.contains(g);
                if (g instanceof HTMLElement && y) try {
                    g.blur()
                } catch (fo) {}
                m.title && (document.title = m.title), Ae(i, "pjax:beforeReplace", {
                    contents: p,
                    state: Le,
                    previousState: u
                }), De(i, p), ye(), ve();
                const v = i.querySelector("input[autofocus], textarea[autofocus]");
                v && document.activeElement !== v && v.focus(), m.scripts && function(t) {
                    const e = document.querySelectorAll("script[src]");
                    for (const n of t) {
                        const {
                            src: t
                        } = n;
                        if (Array.from(e).some((e => e.src === t))) continue;
                        const o = document.createElement("script"),
                            i = n.getAttribute("type");
                        i && (o.type = i), o.src = t, document.head && document.head.appendChild(o)
                    }
                }(m.scripts), m.stylesheets && function(t) {
                    const e = document.querySelectorAll("link[rel=stylesheet]");
                    for (const n of t) Array.from(e).some((t => t.href === n.href)) || document.head && document.head.appendChild(n)
                }(m.stylesheets);
                let b = e.scrollTo;
                if (o) {
                    const t = be(document, o);
                    if (t) {
                        b = t.getBoundingClientRect().top + window.pageYOffset
                    }
                }
                "number" == typeof b && window.scrollTo(window.pageXOffset, b), Ae(i, "pjax:success"), Ae(i, "pjax:complete"), Ae(i, "pjax:end")
            }

            function je(t) {
                Le && ce(null, "", Le.url), window.location.replace(t)
            }
            let Se = !0;
            const Te = window.location.href,
                Ce = window.history.state;

            function qe() {
                return (new Date).getTime()
            }

            function Me(t) {
                const e = t.cloneNode(!0);
                return [Ie(t), Array.from(e.childNodes), Date.now()]
            }

            function He(t) {
                return t.search = t.search.replace(/([?&])(_pjax|_)=[^&]*/g, ""), t.href.replace(/\?($|#)/, "$1")
            }

            function Re(t) {
                const e = document.createElement("a");
                return e.href = t, e
            }

            function Ie(t) {
                if (t.id) return "#" + t.id;
                throw new Error("pjax container has no id")
            }

            function Oe(t, e, n) {
                let o = [];
                for (const i of t) i instanceof Element && (i instanceof n && i.matches(e) && o.push(i), o = o.concat(Array.from(i.querySelectorAll(e))));
                return o
            }

            function De(t, e) {
                t.innerHTML = "";
                for (const n of e) null != n && t.appendChild(n)
            }

            function $e(t, e) {
                const n = t.headers.get("X-PJAX-URL");
                return n ? He(Re(n)) : e
            }
            Ce && Ce.container && (Le = Ce), "state" in window.history && (Se = !1);
            const Ne = {},
                _e = [],
                Pe = [];

            function Be(t, e) {
                for (; t.length > e;) {
                    const e = t.shift();
                    if (null == e) return;
                    delete Ne[e]
                }
            }

            function Ve(t) {
                const e = t.match(/#?(?:L)(\d+)((?:C)(\d+))?/g);
                if (e) {
                    if (1 === e.length) {
                        const t = We(e[0]);
                        if (!t) return;
                        return Object.freeze({
                            start: t,
                            end: t
                        })
                    }
                    if (2 === e.length) {
                        const t = We(e[0]),
                            n = We(e[1]);
                        if (!t || !n) return;
                        return Ue(Object.freeze({
                            start: t,
                            end: n
                        }))
                    }
                } else;
            }

            function We(t) {
                const e = t.match(/L(\d+)/),
                    n = t.match(/C(\d+)/);
                return e ? Object.freeze({
                    line: parseInt(e[1]),
                    column: n ? parseInt(n[1]) : null
                }) : null
            }

            function Xe(t, e, n) {
                const o = [null, 0],
                    i = n(t.line);
                if (!i) return o;
                if (null == t.column) return [i, -1];
                let r = t.column - 1;
                const s = ze(i);
                for (let c = 0; c < s.length; c++) {
                    const t = s[c],
                        n = r - (t.textContent || "").length;
                    if (0 === n) {
                        const n = s[c + 1];
                        return e && n ? [n, 0] : [t, r]
                    }
                    if (n < 0) return [t, r];
                    r = n
                }
                return o
            }

            function ze(t) {
                if (t.nodeType === Node.TEXT_NODE) return [t];
                if (!t.childNodes || !t.childNodes.length) return [];
                let e = [];
                for (const n of t.childNodes) e = e.concat(ze(n));
                return e
            }

            function Ue(t) {
                const e = [t.start, t.end];
                return e.sort(Fe), e[0] === t.start && e[1] === t.end ? t : Object.freeze({
                    start: e[0],
                    end: e[1]
                })
            }

            function Fe(t, e) {
                return t.line === e.line && t.column === e.column ? 0 : t.line === e.line && "number" == typeof t.column && "number" == typeof e.column ? t.column - e.column : t.line - e.line
            }
            window.addEventListener("popstate", (function(t) {
                Se || null == xe || xe.abort();
                const e = Le,
                    n = t.state;
                let o = null;
                if (n && n.container) {
                    if (Se && Te === n.url) return;
                    if (e) {
                        if (e.id === n.id) return;
                        o = e.id < n.id ? "forward" : "back"
                    }
                    const [t, i, r] = Ne[n.id] || [], s = document.querySelector(t || n.container);
                    if (s instanceof HTMLElement) {
                        e && function(t, e, n) {
                            let o, i;
                            Ne[e] = n, "forward" === t ? (o = Pe, i = _e) : (o = _e, i = Pe);
                            o.push(e);
                            const r = i.pop();
                            r && delete Ne[r];
                            Be(o, 20)
                        }(o, e.id, Me(s)), Ae(s, "pjax:popstate", {
                            state: n,
                            direction: o,
                            cachedAt: r
                        });
                        const t = {
                            id: n.id,
                            url: n.url,
                            container: s,
                            push: !1,
                            fragment: n.fragment || "",
                            scrollTo: !1
                        };
                        i ? (Ae(s, "pjax:start"), Le = n, n.title && (document.title = n.title), Ae(s, "pjax:beforeReplace", {
                            contents: i,
                            state: n,
                            previousState: e
                        }), De(s, i), ye(), ve(), Ae(s, "pjax:end")) : ke(t), s.offsetHeight
                    } else Y({
                        pjaxFailureReason: "no_container",
                        requestUrl: null == e ? void 0 : e.url
                    }), je(location.href)
                }
                Se = !1
            }));
            const Ke = [];
            let Je = 0;

            function Ye(t) {
                !async function() {
                    Ke.push(t), await F,
                        function() {
                            const t = Je;
                            Je = Ke.length, Ge(Ke.slice(t), null, window.location.href)
                        }()
                }()
            }

            function Ge(t, e, n) {
                const o = window.location.hash.slice(1),
                    i = {
                        oldURL: e,
                        newURL: n,
                        target: o ? document.getElementById(o) : null
                    };
                for (const r of t) r.call(null, i)
            }
            Ye.clear = () => {
                Ke.length = Je = 0
            };
            let Qe = window.location.href;
            window.addEventListener("popstate", (function() {
                Qe = window.location.href
            })), window.addEventListener("hashchange", (function(t) {
                const e = window.location.href;
                try {
                    Ge(Ke, t.oldURL || Qe, e)
                } finally {
                    Qe = e
                }
            }));
            let Ze = null;

            function tn(t) {
                const e = t.split("‍");
                let n = 0;
                for (const o of e) {
                    n += Array.from(o.split(/[\ufe00-\ufe0f]/).join("")).length
                }
                return n / e.length
            }

            function en(t) {
                return t.hasAttribute("data-maxlength") ? parseInt(t.getAttribute("data-maxlength") || "") : t.maxLength
            }

            function nn(t) {
                const e = en(t);
                ! function(t, e, n) {
                    const o = n.closest(".js-characters-remaining-container");
                    if (!o) return;
                    const i = o.querySelector(".js-characters-remaining"),
                        r = String(i.getAttribute("data-suffix")),
                        s = e - tn(t);
                    s <= 20 ? (i.textContent = `${s} ${r}`, i.classList.toggle("color-text-danger", s <= 5), i.hidden = !1) : i.hidden = !0
                }(t.value, e, t)
            }

            function on(t) {
                const e = [];
                for (const n of function() {
                        try {
                            return document.cookie.split(";")
                        } catch (t) {
                            return []
                        }
                    }()) {
                    const [o, i] = n.trim().split("=");
                    t === o && void 0 !== i && e.push({
                        key: o,
                        value: i
                    })
                }
                return e
            }

            function rn(t, e, n = null, o = !1, i = "lax") {
                let r = document.domain;
                if (null == r) throw new Error("Unable to get document domain");
                r.endsWith(".github.com") && (r = "github.com");
                const s = "https:" === location.protocol ? "; secure" : "",
                    c = n ? "; expires=" + n : "";
                !1 === o && (r = "." + r);
                try {
                    document.cookie = `${t}=${e}; path=/; domain=${r}${c}${s}; samesite=${i}`
                } catch (a) {}
            }

            function sn(t) {
                if (!window._octo) return;
                const e = Math.floor((new Date).getTime() / 1e3);
                t.timestamp = e;
                const n = 'meta[name="octolytics-event-url"]';
                if (document.head && document.head.querySelector(n)) {
                    const e = document.head.querySelector(n).content,
                        i = JSON.stringify(t);
                    try {
                        navigator.sendBeacon && navigator.sendBeacon(e, i)
                    } catch (o) {}
                }
            }

            function cn(t) {
                const e = (null == t ? void 0 : t.getAttribute("data-octo-click")) || "",
                    n = {};
                n.event_type = e;
                const o = {},
                    i = {},
                    r = {};
                let s = [];
                (null == t ? void 0 : t.hasAttribute("data-octo-dimensions")) && (s = (t.getAttribute("data-octo-dimensions") || "").split(","));
                const c = document.head ? document.head.querySelectorAll('meta[name^="octolytics-"]') : [];
                for (const l of c)
                    if (l instanceof HTMLMetaElement)
                        if (l.name.startsWith("octolytics-dimension-")) {
                            o[l.name.replace(/^octolytics-dimension-/, "")] = l.content
                        } else if (l.name.startsWith("octolytics-measure-")) {
                    i[l.name.replace(/^octolytics-measure-/, "")] = l.content
                } else if (l.name.startsWith("octolytics-context-")) {
                    r[l.name.replace(/^octolytics-context-/, "")] = l.content
                } else if (l.name.startsWith("octolytics-actor-")) {
                    o[l.name.replace(/^octolytics-/, "").replace(/-/g, "_")] = l.content
                } else if (l.name.startsWith("octolytics-")) {
                    n[l.name.replace(/^octolytics-/, "").replace(/-/g, "_")] = l.content
                }
                const a = document.querySelector("meta[name=visitor-payload]");
                if (a instanceof HTMLMetaElement) {
                    const t = JSON.parse(atob(a.content));
                    Object.assign(o, t)
                }
                if (null == t ? void 0 : t.hasAttribute("data-ga-click")) {
                    const e = (t.getAttribute("data-ga-click") || "").split(",").map((t => t.trim()));
                    o.category = e[0], o.action = e[1]
                }
                for (const l of s) {
                    const t = l.split(":"),
                        e = t.shift();
                    e && (o[e] = t.join(":"))
                }
                return n.dimensions = o, n.measures = i, n.context = r, n
            }
            document.addEventListener("pjax:start", (function() {
                Ze = window.location.href
            })), document.addEventListener("pjax:end", (function() {
                Ge(Ke, Ze, window.location.href)
            })), at(".js-characters-remaining-field", (function(t) {
                function e() {
                    (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement) && nn(t)
                }
                e(), t.addEventListener("input", e), t.addEventListener("blur", (() => {
                    t.removeEventListener("input", e)
                }), {
                    once: !0
                })
            })), i("click", "[data-octo-click]", (function(t) {
                if (!window._octo) return;
                sn(cn(t.currentTarget instanceof HTMLElement ? t.currentTarget : void 0))
            }));
            const an = new WeakMap;

            function ln(t) {
                if (!(t instanceof CustomEvent)) throw new Error("assert: event is not a CustomEvent");
                const e = t.detail.editor;
                if (!t.target) throw new Error("assert: event.target is null");
                return an.set(t.target, e), e
            }
            i("codeEditor:ready", ".js-code-editor", ln);
            const un = "ontransitionend" in window;

            function dn(t) {
                return "height" === getComputedStyle(t).transitionProperty
            }

            function fn(t, e) {
                t.style.transition = "none", e(), t.offsetHeight, t.style.transition = ""
            }

            function mn(t, e) {
                const n = t.getAttribute("data-details-container-group");
                return n ? (jt(t, (() => {
                    for (const o of function(t) {
                            return [...document.querySelectorAll(".js-details-container")].filter((e => e.getAttribute("data-details-container-group") === t))
                        }(n)) o !== t && pn(o, e)
                })), n) : null
            }

            function pn(t, e) {
                t.classList.toggle("open", e), t.classList.toggle("Details--on", e);
                for (const n of function(t) {
                        return [...t.querySelectorAll(".js-details-target")].filter((e => e.closest(".js-details-container") === t))
                    }(t)) n.setAttribute("aria-expanded", e.toString())
            }

            function hn(t, e) {
                var n, o;
                const i = t.getAttribute("data-details-container") || ".js-details-container",
                    r = t.closest(i),
                    s = null !== (n = null == e ? void 0 : e.force) && void 0 !== n ? n : !r.classList.contains("open"),
                    c = null !== (o = null == e ? void 0 : e.withGroup) && void 0 !== o && o;
                ! function(t, e) {
                    if (!un) return void e();
                    const n = Array.from(t.querySelectorAll(".js-transitionable"));
                    t.classList.contains("js-transitionable") && n.push(t);
                    for (const o of n) {
                        const t = dn(o);
                        o instanceof HTMLElement && (o.addEventListener("transitionend", (() => {
                            o.style.display = "", o.style.visibility = "", t && fn(o, (function() {
                                o.style.height = ""
                            }))
                        }), {
                            once: !0
                        }), o.style.boxSizing = "content-box", o.style.display = "block", o.style.visibility = "visible", t && fn(o, (function() {
                            o.style.height = getComputedStyle(o).height
                        })), o.offsetHeight)
                    }
                    e();
                    for (const o of n)
                        if (o instanceof HTMLElement && dn(o)) {
                            const t = getComputedStyle(o).height;
                            o.style.boxSizing = "", o.style.height = "0px" === t ? o.scrollHeight + "px" : "0px"
                        }
                }(r, (() => {
                    pn(r, s);
                    const e = c ? mn(r, s) : null;
                    Promise.resolve().then((() => {
                        ! function(t) {
                            const e = t.querySelectorAll("input[autofocus], textarea[autofocus]"),
                                n = e[e.length - 1];
                            n && document.activeElement !== n && n.focus()
                        }(r),
                        function(t) {
                            t.classList.contains("tooltipped") && (t.classList.remove("tooltipped"), t.addEventListener("mouseleave", (() => {
                                t.classList.add("tooltipped"), t.blur()
                            }), {
                                once: !0
                            }))
                        }(t), r.dispatchEvent(new CustomEvent("details:toggled", {
                            bubbles: !0,
                            cancelable: !1,
                            detail: {
                                open: s
                            }
                        })), e && r.dispatchEvent(new CustomEvent("details:toggled-group", {
                            bubbles: !0,
                            cancelable: !1,
                            detail: {
                                open: s,
                                group: e
                            }
                        }))
                    }))
                }))
            }

            function gn(t) {
                let e = !1,
                    n = t.parentElement;
                for (; n;) n.classList.contains("Details-content--shown") && (e = !0), n.classList.contains("js-details-container") && (n.classList.toggle("open", !e), n.classList.toggle("Details--on", !e), e = !1), n = n.parentElement
            }

            function yn(t, e) {
                let n = t;
                if (n === e) return 1;
                const o = n.length;
                let i = 0,
                    r = 0;
                for (let l = 0; l < e.length; l++) {
                    const t = e[l],
                        s = n.indexOf(t.toLowerCase()),
                        c = n.indexOf(t.toUpperCase()),
                        a = Math.min(s, c),
                        u = a > -1 ? a : Math.max(s, c);
                    if (-1 === u) return 0;
                    i += .1, n[u] === t && (i += .1), 0 === u && (i += .8, 0 === l && (r = 1)), " " === n.charAt(u - 1) && (i += .8), n = n.substring(u + 1, o)
                }
                const s = e.length,
                    c = i / s;
                let a = (c * (s / o) + c) / 2;
                return r && a + .1 < 1 && (a += .1), a
            }

            function* vn(t, e) {
                for (const n of t) {
                    const t = e(n);
                    null != t && (yield t)
                }
            }

            function bn(t) {
                const e = document.querySelector(".sso-modal");
                e && (e.classList.remove("success", "error"), t ? e.classList.add("success") : e.classList.add("error"))
            }
            i("click", ".js-details-target", (function(t) {
                const e = t.altKey;
                hn(t.currentTarget, {
                    withGroup: e
                }), t.preventDefault()
            })), Ye((function({
                target: t
            }) {
                t && gn(t)
            })), e(".js-sso-modal-complete", (function(t) {
                if (window.opener && window.opener.external.ssoComplete) {
                    const e = t.getAttribute("data-error"),
                        n = t.getAttribute("data-expires-around");
                    window.opener.external.ssoComplete({
                        error: e,
                        expiresAround: n
                    }), window.close()
                } else {
                    const e = t.getAttribute("data-fallback-url");
                    e && (window.location.href = e)
                }
            }));
            let wn = null;

            function En() {
                wn = null
            }
            i("click", ".js-skip-to-content", (function(t) {
                const e = document.getElementById("start-of-content");
                if (e) {
                    const t = e.nextElementSibling;
                    t instanceof HTMLElement && (t.setAttribute("tabindex", "-1"), t.setAttribute("data-skipped-to-content", "1"), t.focus())
                }
                t.preventDefault()
            }));
            const Ln = "ontouchstart" in document;
            for (const t of document.querySelectorAll(".HeaderMenu-details")) t.addEventListener("toggle", An), Ln || (t.addEventListener("mouseover", kn), t.addEventListener("mouseleave", kn));
            let xn = !1;

            function An(t) {
                if (!xn) {
                    xn = !0;
                    for (const e of document.querySelectorAll(".HeaderMenu-details")) e !== t.currentTarget && e.removeAttribute("open");
                    setTimeout((() => xn = !1))
                }
            }

            function kn(t) {
                const {
                    currentTarget: e
                } = t;
                e instanceof HTMLElement && window.innerWidth > 1012 && ("mouseover" === t.type && t instanceof MouseEvent ? t.target instanceof Node && t.relatedTarget instanceof Node && e.contains(t.target) && !e.contains(t.relatedTarget) && e.setAttribute("open", "") : e.removeAttribute("open"))
            }
            let jn = !1,
                Sn = 0;
            const Tn = [];

            function Cn() {
                Tn.length ? jn || (window.addEventListener("resize", Mn), document.addEventListener("scroll", Mn), jn = !0) : (window.removeEventListener("resize", Mn), document.removeEventListener("scroll", Mn), jn = !1)
            }

            function qn() {
                Hn(!0)
            }

            function Mn() {
                Hn()
            }

            function Hn(t = !1) {
                for (const e of Tn)
                    if (e.element.offsetHeight > 0) {
                        const {
                            element: n,
                            placeholder: o,
                            top: i
                        } = e, r = n.getBoundingClientRect();
                        if (o) {
                            const s = o.getBoundingClientRect();
                            n.classList.contains("is-stuck") ? s.top > Bn(n, i) ? In(e) : On(e) : r.top <= Bn(n, i) ? Rn(e) : t && On(e)
                        } else r.top <= Bn(n, i) ? Rn(e) : In(e)
                    }
            }

            function Rn({
                element: t,
                placeholder: e,
                top: n
            }) {
                if (e) {
                    const o = t.getBoundingClientRect();
                    Vn(t, Bn(t, n)), t.style.left = o.left + "px", t.style.width = o.width + "px", t.style.marginTop = "0", t.style.position = "fixed", e.style.display = "block"
                }
                t.classList.add("is-stuck")
            }

            function In({
                element: t,
                placeholder: e
            }) {
                e && (t.style.position = "static", t.style.marginTop = e.style.marginTop, e.style.display = "none"), t.classList.remove("is-stuck")
            }

            function On({
                element: t,
                placeholder: e,
                offsetParent: n,
                top: o
            }) {
                if (e && ! function() {
                        let t = !1;
                        const e = document.getElementById("start-of-content");
                        if (e) {
                            const n = e.nextElementSibling;
                            if (n instanceof HTMLElement) return t = "1" === n.getAttribute("data-skipped-to-content"), t && n.removeAttribute("data-skipped-to-content"), t
                        }
                    }()) {
                    const i = t.getBoundingClientRect(),
                        r = e.getBoundingClientRect();
                    if (Vn(t, Bn(t, o)), t.style.left = r.left + "px", t.style.width = r.width + "px", n) {
                        const e = n.getBoundingClientRect();
                        e.bottom < i.height + parseInt(String(o)) && (t.style.top = e.bottom - i.height + "px")
                    }
                }
            }

            function Dn(t) {
                if (function(t) {
                        const {
                            position: e
                        } = window.getComputedStyle(t);
                        return /sticky/.test(e)
                    }(t)) return null;
                const e = t.previousElementSibling;
                if (e && e.classList.contains("is-placeholder")) return e;
                const n = document.createElement("div");
                return n.style.visibility = "hidden", n.style.display = "none", n.style.height = window.getComputedStyle(t).height, n.className = t.className, n.classList.remove("js-sticky"), n.classList.add("is-placeholder"), t.parentNode.insertBefore(n, t)
            }
            async function $n(t) {
                await K,
                function(t) {
                    const e = Dn(t),
                        n = window.getComputedStyle(t).position;
                    t.style.position = "static";
                    const o = t.offsetParent;
                    t.style.position = "fixed";
                    const i = Pn(t),
                        r = {
                            element: t,
                            placeholder: e,
                            offsetParent: o,
                            top: "auto" === i ? 0 : parseInt(i || "0")
                        };
                    t.style.position = n, Tn.push(r)
                }(t), Hn(), Cn()
            }

            function Nn() {
                for (const t of document.querySelectorAll(".js-position-sticky, .js-notification-shelf-offset-top")) _n(t)
            }

            function _n(t) {
                if (t.classList.contains("js-notification-top-shelf")) return;
                Vn(t, (parseInt(Pn(t)) || 0) + Sn)
            }

            function Pn(t) {
                const e = t.getAttribute("data-original-top");
                if (null != e) return e;
                const n = window.getComputedStyle(t).top;
                return t.setAttribute("data-original-top", n), n
            }

            function Bn(t, e) {
                return t.classList.contains("js-notification-top-shelf") ? e : e + Sn
            }

            function Vn(t, e) {
                t.style.setProperty("top", e + "px", "important")
            }

            function Wn(t) {
                const e = t.ownerDocument;
                setTimeout((() => {
                    e && e.defaultView && (t.scrollIntoView(), e.defaultView.scrollBy(0, -Xn(e)))
                }), 0)
            }

            function Xn(t) {
                qn();
                const e = t.querySelectorAll(".js-sticky-offset-scroll"),
                    n = t.querySelectorAll(".js-position-sticky"),
                    o = Math.max(0, ...Array.from(e).map((t => {
                        const {
                            top: e,
                            height: n
                        } = t.getBoundingClientRect();
                        return 0 === e ? n : 0
                    }))) + Math.max(0, ...Array.from(n).map((t => {
                        const {
                            top: e,
                            height: n
                        } = t.getBoundingClientRect(), o = parseInt(getComputedStyle(t).top);
                        if (!t.parentElement) return 0;
                        const i = t.parentElement.getBoundingClientRect().top;
                        return e === o && i < 0 ? n : 0
                    }))),
                    i = t.querySelectorAll(".js-position-sticky-stacked");
                return o + Array.from(i).reduce(((t, e) => {
                    const {
                        height: n,
                        top: o
                    } = e.getBoundingClientRect(), i = o < 0, r = e.classList.contains("is-stuck");
                    return t + (!i && r ? n : 0)
                }), 0)
            }

            function zn(t, e, n) {
                const o = {
                        hydroEventPayload: t,
                        hydroEventHmac: e,
                        visitorPayload: "",
                        visitorHmac: "",
                        hydroClientContext: n
                    },
                    i = document.querySelector("meta[name=visitor-payload]");
                i instanceof HTMLMetaElement && (o.visitorPayload = i.content);
                const r = document.querySelector("meta[name=visitor-hmac]") || "";
                r instanceof HTMLMetaElement && (o.visitorHmac = r.content), Y(o, !0)
            }

            function Un(t) {
                zn(t.getAttribute("data-hydro-view") || "", t.getAttribute("data-hydro-view-hmac") || "", t.getAttribute("data-hydro-client-context") || "")
            }
            e(".js-sticky", {
                constructor: HTMLElement,
                add(t) {
                    $n(t)
                },
                remove(t) {
                    ! function(t) {
                        const e = Tn.map((t => t.element)).indexOf(t);
                        Tn.splice(e, 1)
                    }(t), Cn()
                }
            }), e(".js-notification-top-shelf", {
                constructor: HTMLElement,
                add(t) {
                    !async function(t) {
                        if (null === t.offsetParent) return;
                        await K;
                        const e = Math.floor(t.getBoundingClientRect().height);
                        e > 0 && (Sn = e, Nn(), qn())
                    }(t)
                },
                remove() {
                    for (const t of document.querySelectorAll(".js-notification-top-shelf")) t.remove();
                    Sn > 0 && (Sn = 0, Nn(), qn())
                }
            }), e(".js-notification-shelf-offset-top, .js-position-sticky", {
                constructor: HTMLElement,
                add: _n
            });
            const Fn = .6,
                Kn = .4;

            function Jn(t) {
                const e = function(t) {
                        const e = [...Object.values(t)].reduce(((t, e) => t + e.visitCount), 0);
                        return new Map(Object.keys(t).map((n => [n, t[n].visitCount / e])))
                    }(t),
                    n = function(t) {
                        const e = (o = [...Object.keys(t)], i = e => t[e].lastVisitedAt, o.sort(((t, e) => i(t) - i(e)))),
                            n = e.length;
                        var o, i;
                        return new Map(e.map(((t, e) => [t, (e + 1) / n])))
                    }(t);
                return function(t) {
                    return o = e.get(t) || 0, i = n.get(t) || 0, o * Fn + i * Kn;
                    var o, i
                }
            }
            const Yn = /^\/orgs\/([a-z0-9-]+)\/teams\/([\w-]+)/,
                Gn = [/^\/([^/]+)\/([^/]+)\/?$/, /^\/([^/]+)\/([^/]+)\/blob/, /^\/([^/]+)\/([^/]+)\/tree/, /^\/([^/]+)\/([^/]+)\/issues/, /^\/([^/]+)\/([^/]+)\/pulls?/, /^\/([^/]+)\/([^/]+)\/pulse/],
                Qn = [
                    ["organization", /^\/orgs\/([a-z0-9-]+)\/projects\/([0-9-]+)/],
                    ["repository", /^\/([^/]+)\/([^/]+)\/projects\/([0-9-]+)/]
                ];

            function Zn(t) {
                const e = so(),
                    n = Math.floor(Date.now() / 1e3),
                    o = e[t] || {
                        lastVisitedAt: n,
                        visitCount: 0
                    };
                o.visitCount += 1, o.lastVisitedAt = n, e[t] = o, ro(function(t) {
                    const e = Object.keys(t);
                    if (e.length <= 100) return t;
                    const n = Jn(t),
                        o = e.sort(((t, e) => n(e) - n(t))).slice(0, 50);
                    return Object.fromEntries(o.map((e => [e, t[e]])))
                }(e))
            }

            function to(t, e) {
                return `team:${t}/${e}`
            }

            function eo(t, e) {
                return `repository:${t}/${e}`
            }

            function no(t, e) {
                return `project:${t}/${e}`
            }
            const oo = /^(team|repository|project):[^/]+\/[^/]+(\/([^/]+))?$/,
                io = "jump_to:page_views";

            function ro(t) {
                ! function(t, e) {
                    try {
                        window.localStorage.setItem(t, e)
                    } catch (n) {}
                }(io, JSON.stringify(t))
            }

            function so() {
                const t = function(t) {
                    try {
                        return window.localStorage.getItem(t)
                    } catch (e) {
                        return null
                    }
                }(io);
                if (!t) return {};
                let e;
                try {
                    e = JSON.parse(t)
                } catch (o) {
                    return ro({}), {}
                }
                const n = {};
                for (const i in e) i.match(oo) && (n[i] = e[i]);
                return n
            }

            function co(t) {
                const e = document.querySelectorAll(t);
                if (e.length > 0) return e[e.length - 1]
            }
            const {
                getItem: ao,
                setItem: lo,
                removeItem: uo
            } = z("sessionStorage");

            function fo(t) {
                const e = "==".slice(0, (4 - t.length % 4) % 4),
                    n = t.replace(/-/g, "+").replace(/_/g, "/") + e,
                    o = atob(n),
                    i = new ArrayBuffer(o.length),
                    r = new Uint8Array(i);
                for (let s = 0; s < o.length; s++) r[s] = o.charCodeAt(s);
                return i
            }

            function mo(t) {
                const e = new Uint8Array(t);
                let n = "";
                for (const o of e) n += String.fromCharCode(o);
                return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
            }

            function po(t, e, n) {
                if ("copy" === e) return n;
                if ("convert" === e) return t(n);
                if (e instanceof Array) return n.map((n => po(t, e[0], n)));
                if (e instanceof Object) {
                    const o = {};
                    for (const [i, r] of Object.entries(e))
                        if (i in n) null != n[i] ? o[i] = po(t, r.schema, n[i]) : o[i] = null;
                        else if (r.required) throw new Error("Missing key: " + i);
                    return o
                }
            }

            function ho(t) {
                return {
                    required: !0,
                    schema: t
                }
            }

            function go(t) {
                return {
                    required: !1,
                    schema: t
                }
            }
            t({
                ae: ao,
                af: lo,
                ad: uo
            });
            const yo = {
                    type: ho("copy"),
                    id: ho("convert"),
                    transports: go("copy")
                },
                vo = {
                    appid: go("copy"),
                    appidExclude: go("copy"),
                    credProps: go("copy")
                },
                bo = {
                    appid: go("copy"),
                    appidExclude: go("copy"),
                    credProps: go("copy")
                },
                wo = {
                    publicKey: ho({
                        rp: ho("copy"),
                        user: ho({
                            id: ho("convert"),
                            name: ho("copy"),
                            displayName: ho("copy")
                        }),
                        challenge: ho("convert"),
                        pubKeyCredParams: ho("copy"),
                        timeout: go("copy"),
                        excludeCredentials: go([yo]),
                        authenticatorSelection: go("copy"),
                        attestation: go("copy"),
                        extensions: go(vo)
                    }),
                    signal: go("copy")
                },
                Eo = {
                    type: ho("copy"),
                    id: ho("copy"),
                    rawId: ho("convert"),
                    response: ho({
                        clientDataJSON: ho("convert"),
                        attestationObject: ho("convert")
                    }),
                    clientExtensionResults: ho(bo)
                },
                Lo = {
                    mediation: go("copy"),
                    publicKey: ho({
                        challenge: ho("convert"),
                        timeout: go("copy"),
                        rpId: go("copy"),
                        allowCredentials: go([yo]),
                        userVerification: go("copy"),
                        extensions: go(vo)
                    }),
                    signal: go("copy")
                },
                xo = {
                    type: ho("copy"),
                    id: ho("copy"),
                    rawId: ho("convert"),
                    response: ho({
                        clientDataJSON: ho("convert"),
                        authenticatorData: ho("convert"),
                        signature: ho("convert"),
                        userHandle: ho("convert")
                    }),
                    clientExtensionResults: ho(bo)
                };

            function Ao() {
                return !!(navigator.credentials && navigator.credentials.create && navigator.credentials.get && window.PublicKeyCredential)
            }

            function ko() {
                return Ao() ? "supported" : "unsupported"
            }
            let jo = !1;
            async function So() {
                const t = document.querySelector("link[rel=sudo-modal]"),
                    e = document.querySelector(".js-sudo-prompt");
                if (e instanceof HTMLTemplateElement) return e;
                if (t) {
                    const e = await it(document, function(t) {
                        const e = new URL(t, window.location.origin),
                            n = new URLSearchParams(e.search.slice(1));
                        return n.set("webauthn-support", ko()), e.search = n.toString(), e.toString()
                    }(t.href));
                    return document.body.appendChild(e), document.querySelector(".js-sudo-prompt")
                }
                throw new Error("couldn't load sudo prompt")
            }
            let To = !1;
            async function Co() {
                if (jo) return !1;
                jo = !0, To = !1;
                const t = (await So()).content.cloneNode(!0),
                    e = await dt({
                        content: t
                    });
                return await new Promise((t => {
                    e.addEventListener("dialog:remove", (function() {
                        jo = !1, t()
                    }), {
                        once: !0
                    })
                })), To
            }

            function qo(t) {
                if (t.querySelector(".js-task-list-field")) {
                    const e = t.querySelectorAll("task-lists");
                    for (const t of e)
                        if (t instanceof a) {
                            t.disabled = !1;
                            const e = t.querySelectorAll("button");
                            for (const t of e) t.disabled = !1
                        }
                }
            }

            function Mo(t) {
                for (const e of t.querySelectorAll("task-lists"))
                    if (e instanceof a) {
                        e.disabled = !0;
                        const t = e.querySelectorAll("button");
                        for (const e of t) e.disabled = !0
                    }
            }

            function Ho(t, e, n) {
                const o = t.querySelector(".js-comment-update");
                Mo(t), Wo(t);
                const i = o.elements.namedItem("task_list_track");
                i instanceof Element && i.remove();
                const r = o.elements.namedItem("task_list_operation");
                r instanceof Element && r.remove();
                const s = document.createElement("input");
                s.setAttribute("type", "hidden"), s.setAttribute("name", "task_list_track"), s.setAttribute("value", e), o.appendChild(s);
                const c = document.createElement("input");
                if (c.setAttribute("type", "hidden"), c.setAttribute("name", "task_list_operation"), c.setAttribute("value", JSON.stringify(n)), o.appendChild(c), !o.elements.namedItem("task_list_key")) {
                    const t = o.querySelector(".js-task-list-field").getAttribute("name").split("[")[0],
                        e = document.createElement("input");
                    e.setAttribute("type", "hidden"), e.setAttribute("name", "task_list_key"), e.setAttribute("value", t), o.appendChild(e)
                }
                t.classList.remove("is-comment-stale"), yt(o)
            }
            c(".js-sudo-form", (async function(t, e) {
                try {
                    await e.text()
                } catch (n) {
                    if (!n.response) throw n;
                    let e;
                    switch (n.response.status) {
                        case 401:
                            e = "Incorrect password.";
                            break;
                        case 429:
                            e = "Too many password attempts. Please wait and try again later.";
                            break;
                        default:
                            e = "Failed to receive a response. Please try again later."
                    }
                    return t.querySelector(".js-sudo-error").textContent = e, t.querySelector(".js-sudo-error").hidden = !1, void(t.querySelector(".js-sudo-password").value = "")
                }
                To = !0, t.closest("details").removeAttribute("open")
            })), e(".js-task-list-container .js-task-list-field", (function(t) {
                const e = t.closest(".js-task-list-container");
                qo(e), Wo(e)
            })), i("task-lists-move", "task-lists", (function(t) {
                const {
                    src: e,
                    dst: n
                } = t.detail;
                Ho(t.currentTarget.closest(".js-task-list-container"), "reordered", {
                    operation: "move",
                    src: e,
                    dst: n
                })
            })), i("task-lists-check", "task-lists", (function(t) {
                const {
                    position: e,
                    checked: n
                } = t.detail;
                Ho(t.currentTarget.closest(".js-task-list-container"), "checked:" + (n ? 1 : 0), {
                    operation: "check",
                    position: e,
                    checked: n
                })
            })), c(".js-task-list-container .js-comment-update", (async function(t, e) {
                const n = t.closest(".js-task-list-container"),
                    o = t.elements.namedItem("task_list_track");
                o instanceof Element && o.remove();
                const i = t.elements.namedItem("task_list_operation");
                let r;
                i instanceof Element && i.remove();
                try {
                    r = await e.json()
                } catch (s) {
                    let t;
                    try {
                        t = JSON.parse(s.response.text)
                    } catch (fo) {}
                    if (t && t.stale) {
                        const t = n.querySelector(".js-task-list-field");
                        t.classList.add("session-resumable-canceled"), t.classList.remove("js-session-resumable")
                    } else window.location.reload()
                }
                r && (i && r.json.source && (n.querySelector(".js-task-list-field").value = r.json.source), qo(n), requestAnimationFrame((() => Wo(n))))
            }));
            let Ro = !1,
                Io = !1;

            function Oo(t) {
                const e = "insertLineBreak" === t.inputType;
                Ro = !!e
            }

            function Do(t) {
                const e = t;
                if (!Ro) {
                    if (!("insertLineBreak" === e.inputType)) return
                }! function(t) {
                    const e = function(t, e) {
                        const n = e[0];
                        if (!n || !t) return;
                        const o = t.substring(0, n).split("\n"),
                            i = o[o.length - 2],
                            r = null == i ? void 0 : i.match(Vo);
                        if (!r) return;
                        const s = r[0],
                            c = r[1],
                            a = r[2],
                            l = parseInt(r[3], 10),
                            u = Boolean(r[4]);
                        let d = `${isNaN(l)?a:l+1+"."} ${u?"[ ] ":""}`,
                            f = t.indexOf("\n", n);
                        f < 0 && (f = t.length);
                        const m = t.substring(n, f);
                        m.startsWith(d) && (d = "");
                        if (i.replace(s, "").trim().length > 0 || m.trim().length > 0) {
                            const e = `${c}${d}`;
                            return {
                                text: t.substring(0, n) + e + t.substring(n),
                                selection: [n + e.length, n + e.length]
                            }
                        } {
                            const e = n - ("\n" + s).length;
                            return {
                                text: t.substring(0, e) + t.substring(n),
                                selection: [e, e]
                            }
                        }
                    }(t.value, [t.selectionStart, t.selectionEnd]);
                    if (void 0 === e) return;
                    t.value = e.text, t.selectionStart = e.selection[0], t.selectionEnd = e.selection[1]
                }(e.target), Ro = !1
            }

            function $o(t) {
                if (Io) return;
                const e = t;
                if ("Enter" === e.key && e.shiftKey && !e.metaKey) {
                    const t = e.target,
                        o = function(t, e) {
                            const n = e[0];
                            if (!n || !t) return;
                            const o = t.substring(0, n).split("\n"),
                                i = o[o.length - 1],
                                r = null == i ? void 0 : i.match(Bo);
                            if (!r) return;
                            const s = "\n" + (r[1] || "");
                            return {
                                text: t.substring(0, n) + s + t.substring(n),
                                selection: [n + s.length, n + s.length]
                            }
                        }(t.value, [t.selectionStart, t.selectionEnd]);
                    if (void 0 === o) return;
                    t.value = o.text, t.selectionStart = o.selection[0], t.selectionEnd = o.selection[1], e.preventDefault(), n(t, "change")
                }
            }

            function No() {
                Io = !0
            }

            function _o() {
                Io = !1
            }

            function Po(t) {
                if (Io) return;
                const e = t;
                if ("Escape" === e.key) return void
                function(t) {
                    const e = t.target;
                    "backward" === e.selectionDirection ? e.selectionEnd = e.selectionStart : e.selectionStart = e.selectionEnd
                }(t);
                if ("Tab" !== e.key) return;
                const n = e.target,
                    o = function(t, e, n) {
                        const o = e[0] || 0,
                            i = e[1] || o;
                        if (null === e[0] || o === i) return;
                        const r = t.substring(0, o).lastIndexOf("\n") + 1,
                            s = t.indexOf("\n", i - 1),
                            c = s > 0 ? s : t.length - 1,
                            a = t.substring(r, c).split("\n");
                        let l = !1,
                            u = 0,
                            d = 0;
                        const f = [];
                        for (const g of a) {
                            const t = g.match(/^\s*/);
                            if (t) {
                                let e = t[0];
                                const o = g.substring(e.length);
                                if (n) {
                                    const t = e.length;
                                    e = e.slice(0, -2), u = l ? u : e.length - t, l = !0, d += e.length - t
                                } else e += "  ", u = 2, d += 2;
                                f.push(e + o)
                            }
                        }
                        const m = f.join("\n"),
                            p = t.substring(0, r) + m + t.substring(c),
                            h = [Math.max(r, o + u), i + d];
                        return {
                            text: p,
                            selection: h
                        }
                    }(n.value, [n.selectionStart, n.selectionEnd], e.shiftKey);
                void 0 !== o && (e.preventDefault(), n.value = o.text, n.selectionStart = o.selection[0], n.selectionEnd = o.selection[1])
            }
            e(".js-task-list-field", {
                subscribe: t => m(f(t, "keydown", Po), f(t, "keydown", $o), f(t, "beforeinput", Oo), f(t, "input", Do), f(t, "compositionstart", No), f(t, "compositionend", _o))
            });
            const Bo = /^(\s*)?/;
            const Vo = /^(\s*)([*-]|(\d+)\.)\s(\[[\sx]\]\s)?/;

            function Wo(t) {
                if (0 === document.querySelectorAll("tracked-issues-progress").length) return;
                if (t.closest(".js-timeline-item")) return;
                const e = t.querySelectorAll(".js-comment-body [type=checkbox]"),
                    n = e.length,
                    o = Array.from(e).filter((t => t.checked)).length,
                    i = document.querySelectorAll("tracked-issues-progress[data-type=checklist]");
                for (const r of i) r.setAttribute("data-completed", String(o)), r.setAttribute("data-total", String(n))
            }
            let Xo = class ActionsPolicyFormElement extends HTMLElement {
                connectedCallback() {
                    this.submitButton.disabled = !0, this.toggleSpecificOptions()
                }
                enableForm() {
                    this.submitButton.disabled = !1
                }
                toggleSpecificOptions() {
                    this.selectRadio.checked ? this.specificOptions.hidden = !1 : this.specificOptions.hidden = !0
                }
            };
            async function zo(t, e = !0) {
                const n = t.querySelector('[name="codespace[location]"]');
                if (!n || n.value) return;
                const o = t.querySelector("button[type=submit]");
                o instanceof HTMLInputElement && (o.disabled = !0);
                const i = t.getAttribute("data-codespace-locations-url");
                if (!i) return;
                const r = await Uo(i);
                return e && r && (n.value = r.current), r
            }
            async function Uo(t) {
                const e = await fetch(t, {
                    headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        Accept: "application/json"
                    }
                });
                if (!e.ok) {
                    const t = new Error,
                        n = e.statusText ? " " + e.statusText : "";
                    throw t.message = `HTTP ${e.status}${n}`, t
                }
                return e.json()
            }

            function Fo(t) {
                var e;
                const o = t.querySelector(".js-inline-comment-form-container");
                o.classList.add("open"), null === (e = o.querySelector(".js-write-tab")) || void 0 === e || e.click(), o.querySelector(".js-comment-field").focus(), n(o, "inlinecomment:focus")
            }

            function Ko(t) {
                t.reset();
                const e = t.closest(".js-inline-comment-form-container");
                e.classList.remove("open"), n(e, "inlinecomment:collapse")
            }
            l([u], Xo.prototype, "specificOptions", void 0), l([u], Xo.prototype, "submitButton", void 0), l([u], Xo.prototype, "selectRadio", void 0), Xo = l([d], Xo), i("submit", ".js-prefetch-codespace-location", (async function(t) {
                const e = t.currentTarget;
                t.preventDefault(), await zo(e), e.submit()
            })), i("click", ".js-toggle-inline-comment-form", (function(t) {
                Fo(t.currentTarget.closest(".js-line-comments"))
            })), i("quote-selection", ".js-line-comments", (function(t) {
                Fo(t.currentTarget)
            })), lt("keydown", ".js-inline-comment-form-container form .js-comment-field", (function(t) {
                const e = t.target;
                if (!e.classList.contains("js-navigation-enable") && "Escape" === t.key && 0 === e.value.length) {
                    Ko(e.closest("form")), t.preventDefault()
                }
            })), i("click", ".js-hide-inline-comment-form", (function(t) {
                const e = t.currentTarget.closest("form"),
                    n = t.currentTarget.closest(".js-inline-comment-form-container").querySelector(".js-multi-line-preview");
                n && (n.hidden = !0), !wt(e) || confirm(t.target.getAttribute("data-confirm-cancel-text")) ? Ko(e) : t.preventDefault()
            }));
            class DiffPosition {
                constructor(t, e, n) {
                    this.diffId = t, this.side = e, this.lineNumber = n, this.element = we(document, this.anchor())
                }
                sideForCommenting() {
                    return this.element && this.element.classList.contains("blob-num-context") ? "right" : {
                        R: "right",
                        L: "left"
                    }[this.side]
                }
                isContext() {
                    return !!this.element && this.element.classList.contains("blob-num-context")
                }
                anchor() {
                    return `${this.diffId}${this.anchorSuffix()}`
                }
                anchorSuffix() {
                    return `${this.side}${this.lineNumber}`
                }
                is(t) {
                    return this.diffId === t.diffId && this.side === t.side && this.lineNumber === t.lineNumber
                }
            }
            class DiffRange {
                constructor(t, e, n, o, i) {
                    this.elements = new Set, this.isParsed = !1, this.isSplit = !1, this._rows = new Set, this._isAcrossHunks = !1, this._isContextOnly = !0, this._includesExpandedLine = !1, this.diffId = t, this.diffTable = document.querySelector(`.js-diff-table[data-diff-anchor="${t}"]`), this.diffTable && (this.isSplit = this.diffTable.classList.contains("js-file-diff-split")), this.start = new DiffPosition(t, e, n), this.end = new DiffPosition(t, o, i), this.lineCount = 0, this.parse()
                }
                anchor() {
                    const t = [];
                    return t.push(this.start.anchor()), this.start.is(this.end) || t.push(this.end.anchorSuffix()), t.join("-")
                }
                parse() {
                    if (!this.diffTable) return;
                    let t = this.unify(this.diffTable.querySelectorAll(".js-linkable-line-number"));
                    t = this.filterInRange(t), this.lineCount = t.length, this.elements = this.expandRelatedElements(t), this.isParsed = !0
                }
                unify(t) {
                    if (!this.isSplit) return Array.from(t);
                    const e = [];
                    let n = [],
                        o = [];
                    for (const i of t) i.classList.contains("blob-num-addition") ? n.push(i) : i.classList.contains("blob-num-deletion") ? o.push(i) : (e.push(...o, ...n, i), n = [], o = []);
                    return e.push(...o, ...n), e
                }
                filterInRange(t) {
                    if (!this.start.element || !this.end.element) return [];
                    let e = t.indexOf(this.start.element),
                        n = t.indexOf(this.end.element);
                    if (e > n) {
                        [e, n] = [n, e];
                        const [t, o] = [this.end, this.start];
                        this.start = t, this.end = o
                    }
                    return t.slice(e, n + 1)
                }
                isContextOnly() {
                    return this.isParsed || this.parse(), this._isContextOnly
                }
                isAcrossHunks() {
                    return this.isParsed || this.parse(), this._isAcrossHunks
                }
                includesExpandedLine() {
                    return this.isParsed || this.parse(), this._includesExpandedLine
                }
                rows() {
                    return this.isParsed || this.parse(), this._rows
                }
                expandRelatedElements(t) {
                    const e = this.isSplit,
                        n = t[0],
                        o = t[t.length - 1];
                    if (n && o) {
                        const t = n.closest("[data-hunk]"),
                            e = o.closest("[data-hunk]");
                        if (t && e) {
                            t.getAttribute("data-hunk") !== e.getAttribute("data-hunk") && (this._isAcrossHunks = !0)
                        }
                    }
                    return t.reduce(((t, n) => {
                        !this._includesExpandedLine && n.closest(".blob-expanded") && (this._includesExpandedLine = !0);
                        const o = n.parentElement;
                        o instanceof HTMLElement && this._rows.add(o);
                        const i = n.classList.contains("blob-num-deletion") || n.classList.contains("blob-num-addition");
                        if (i && (this._isContextOnly = !1), !o) return t;
                        if (e && i) {
                            return Array.from(o.children).indexOf(n) < 2 ? t.add(o.children[0]).add(o.children[1]) : t.add(o.children[2]).add(o.children[3])
                        }
                        for (const e of Array.from(o.children)) t.add(e);
                        return t
                    }), new Set)
                }
            }

            function Jo(t) {
                const e = t.match(/^#?(diff-[a-f0-9]+)(L|R)(\d+)(?:-(L|R)(\d+))?$/i);
                if (null != e && 6 === e.length) return e;
                const n = t.match(/^#?(discussion-diff-[0-9]+)(L|R)(\d+)(?:-(L|R)(\d+))?$/i);
                return null != n && 6 === n.length ? n : null
            }
            let Yo = null,
                Go = null,
                Qo = !1,
                Zo = null;

            function ti(t) {
                return !!t.closest(".js-multi-line-comments-enabled")
            }

            function ei(t, e) {
                if (!ti(t)) return !1;
                const {
                    start: {
                        lineNumber: n
                    },
                    end: {
                        lineNumber: o
                    }
                } = e;
                return (n !== o || !e.isContextOnly()) && (!e.isAcrossHunks() && !e.includesExpandedLine())
            }

            function ni(t) {
                return t.closest(".js-diff-table").classList.contains("is-selecting")
            }

            function oi(t, e) {
                let n = t.id;
                if (e) {
                    const e = Jo(n);
                    if (!e) return;
                    const o = e[1],
                        i = e[2],
                        r = e[3];
                    if (Yo && Yo.diffId === o) {
                        if (i === Yo.start.side && r < Yo.start.lineNumber) return;
                        const e = new DiffRange(o, Yo.start.side, Yo.start.lineNumber, i, +r);
                        n = e.anchor();
                        const s = t.closest(".js-file-content[data-hydro-view]");
                        if (s instanceof HTMLElement && function(t, e) {
                                const n = {
                                    starting_diff_position: e.start.side + e.start.lineNumber,
                                    ending_diff_position: e.end.side + e.end.lineNumber,
                                    line_count: e.lineCount
                                };
                                t.setAttribute("data-hydro-client-context", JSON.stringify(n)), Un(t)
                            }(s, e), Qo && ni(t)) {
                            t.closest(".js-diff-table").classList.toggle("is-commenting", ei(t, e))
                        }
                        Go = function() {
                            if (ei(t, e)) {
                                const n = `.js-add-line-comment[data-side="${e.end.sideForCommenting()}"]`,
                                    o = t.closest("tr").querySelector(n);
                                o && e && o.click()
                            }
                        }
                    }
                }
                window.history.replaceState(null, null, "#" + n), li()
            }

            function ii(t) {
                if (!(t instanceof HTMLElement)) return null;
                if (t.classList.contains("js-linkable-line-number")) return t;
                const e = t.previousElementSibling;
                return e ? ii(e) : null
            }

            function ri(t) {
                Yo && (t.target.closest(".js-diff-table") || (window.history.replaceState(null, null, "#"), li()))
            }

            function si(t) {
                const e = t.target;
                if (!(e instanceof Element)) return;
                Zo && function() {
                    if (!Zo) return;
                    oi(Zo, !1);
                    const t = Zo.closest(".js-diff-table");
                    Zo = null, t.classList.add("is-selecting"), t.classList.add("is-commenting"), document.addEventListener("mouseup", (function(e) {
                        t.classList.remove("is-selecting"), t.classList.remove("is-selecting", "is-commenting"), Go && Go(), Go = null, ai(t), e.preventDefault()
                    }), {
                        once: !0
                    })
                }();
                const n = e.closest(".blob-code, .js-linkable-line-number");
                var o;
                return n ? n.classList.contains("blob-code") ? function(t) {
                    const e = ii(t);
                    e && ni(e) && oi(e, !0)
                }(n) : void(n.classList.contains("js-linkable-line-number") && ni(o = n) && oi(o, !0)) : void 0
            }

            function ci(t) {
                t.addEventListener("mouseenter", si, {
                    capture: !0
                })
            }

            function ai(t) {
                Qo = !1, t.removeEventListener("mouseenter", si, {
                    capture: !0
                }), setTimeout((() => {
                    document.addEventListener("click", ri, {
                        once: !0
                    })
                }), 0)
            }

            function li() {
                if (Yo) {
                    for (const t of Yo.elements) t.classList.remove("selected-line", "selected-line-top", "selected-line-bottom", "selected-line-left", "selected-line-right");
                    Yo = null
                }
                const t = Jo(window.location.hash);
                if (!t) return;
                const e = t[1],
                    n = t[2],
                    o = t[3],
                    i = t[4] || n,
                    r = t[5] || o;
                Yo = new DiffRange(e, n, +o, i, +r);
                const s = Array.from(Yo.elements)[0];
                s && (s.closest(".js-diff-table").classList.contains("file-diff-split") ? function() {
                    if (!Yo) return;
                    for (const r of Yo.elements) r.classList.add("selected-line");
                    const t = [],
                        e = [],
                        n = [],
                        o = [];
                    for (const r of Yo.rows()) {
                        const [i, s, c, a] = r.children;
                        t.push(i), e.push(s), n.push(c), o.push(a)
                    }

                    function i(t) {
                        for (const [e, n] of t.entries()) {
                            if (n.classList.contains("empty-cell")) continue;
                            const o = t[e - 1];
                            o && o.classList.contains("selected-line") || n.classList.add("selected-line-top");
                            const i = t[e + 1];
                            i && i.classList.contains("selected-line") || n.classList.add("selected-line-bottom")
                        }
                    }
                    i(t), i(e), i(n), i(o);
                    for (const [r, s] of e.entries()) o[r].classList.contains("selected-line") || s.classList.add("selected-line-right");
                    for (const [r, s] of n.entries()) e[r].classList.contains("selected-line") || s.classList.add("selected-line-left")
                }() : function() {
                    if (!Yo) return;
                    for (const o of Yo.elements) o.classList.add("selected-line");
                    const t = Array.from(Yo.rows()),
                        e = t[0];
                    for (const o of e.children) o.classList.add("selected-line-top");
                    const n = t[t.length - 1];
                    for (const o of n.children) o.classList.add("selected-line-bottom")
                }())
            }
            i("mousedown", ".js-add-line-comment", (function(t) {
                const e = t.target.parentElement;
                if (!e) return;
                if (!ti(t.target)) return;
                const n = ii(e);
                if (!n) return;
                const o = t.target.closest(".js-diff-table");
                ci(o), Zo = n, Qo = !0, t.target.addEventListener("mouseup", (function() {
                    ai(o), Zo = null, Qo = !1
                }), {
                    once: !0
                }), Yo && Yo.lineCount > 1 && t.preventDefault()
            })), i("mousedown", ".js-linkable-line-number", (function(t) {
                if (!(t instanceof MouseEvent)) return;
                if (0 !== t.button) return;
                const e = t.target;
                if (!(e instanceof Element)) return;
                const n = e.closest(".js-diff-table");
                n.classList.add("is-selecting"), ci(n), document.addEventListener("mouseup", (function() {
                    e.closest(".js-diff-table").classList.remove("is-selecting"), ai(n)
                }), {
                    once: !0
                }), oi(e, t instanceof MouseEvent && t.shiftKey), t.preventDefault()
            })), Ye(li), e(".blob-expanded", li), e(".js-diff-progressive-loader", (function(t) {
                t.addEventListener("load", li)
            })), e(".js-diff-entry-loader", (function(t) {
                t.addEventListener("load", li)
            })), i("click", ".js-rich-diff.collapsed .js-expandable", (function(t) {
                if (!(t.target instanceof Element)) return;
                t.preventDefault();
                t.target.closest(".js-rich-diff").classList.remove("collapsed")
            })), i("click", ".js-show-rich-diff", (function(t) {
                const e = t.currentTarget.closest(".js-warn-no-visible-changes");
                if (!e) return;
                e.classList.add("d-none");
                const n = e.parentElement.querySelector(".js-no-rich-changes");
                n && n.classList.remove("d-none")
            }));
            const ui = X((function() {
                var t, e;
                return ((null === (e = null === (t = document.head) || void 0 === t ? void 0 : t.querySelector('meta[name="enabled-features"]')) || void 0 === e ? void 0 : e.content) || "").split(",")
            }));
            t("b9", X((function(t) {
                return -1 !== ui().indexOf(t)
            })))
        }
    }
}));
//# sourceMappingURL=chunk-frameworks-0248cb5b.js.map