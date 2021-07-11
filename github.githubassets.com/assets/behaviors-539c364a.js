System.register(["./chunk-vendor.js", "./chunk-frameworks.js", "./chunk-edit.js", "./chunk-notification-list-focus.js", "./chunk-color-modes.js", "./chunk-failbot.js", "./chunk-responsive-underlinenav.js"], (function(e, t) {
    "use strict";
    var n, o, s, r, i, a, c, l, u, d, m, h, f, p, g, b, y, v, w, j, L, E, k, S, T, A, x, q, M, C, H, _, P, R, I, D, F, $, N, O, B, W, U, z, X, V, K, J, G, Q, Y, Z, ee, te, ne, oe, se, re, ie, ae, ce, le, ue, de, me, he, fe, pe, ge, be, ye, ve, we, je, Le, Ee, ke, Se, Te, Ae, xe, qe, Me, Ce, He, _e, Pe, Re, Ie, De, Fe, $e, Ne, Oe, Be, We, Ue, ze, Xe, Ve, Ke, Je, Ge, Qe, Ye, Ze, et, tt, nt, ot, st, rt, it, at, ct, lt, ut, dt, mt, ht, ft, pt, gt, bt, yt, vt, wt, jt, Lt, Et, kt, St, Tt, At, xt, qt;
    return {
        setters: [function(e) {
            n = e._, o = e.t, s = e.g, r = e.c, i = e.o, a = e.a, c = e.j, l = e.I, u = e.R, d = e.C, m = e.r, h = e.f, f = e.A, p = e.k, g = e.l, b = e.s, y = e.m, v = e.n, w = e.q, j = e.v, L = e.F, E = e.i, k = e.w, S = e.x, T = e.h, A = e.y, x = e.z, q = e.B, M = e.E, C = e.G, H = e.H, _ = e.J, P = e.K, R = e.L, I = e.M, D = e.N, F = e.O, $ = e.P, N = e.Q, O = e.U, B = e.V, W = e.W, U = e.X, z = e.Y, X = e.Z, V = e.$
        }, function(e) {
            K = e.p, J = e.j, G = e.e, Q = e.k, Y = e.i, Z = e.l, ee = e.v, te = e.n, ne = e.q, oe = e.t, se = e.w, re = e.x, ie = e.o, ae = e.y, ce = e.c, le = e.r, ue = e.z, de = e.A, me = e.B, he = e.C, fe = e.D, pe = e.E, ge = e.F, be = e.G, ye = e.H, ve = e.I, we = e.J, je = e.b, Le = e.K, Ee = e.L, ke = e.M, Se = e.N, Te = e.O, Ae = e.P, xe = e.Q, qe = e.R, Me = e.S, Ce = e.m, He = e.T, _e = e.g, Pe = e.U, Re = e.V, Ie = e.W, De = e.X, Fe = e.Y, $e = e.Z, Ne = e._, Oe = e.$, Be = e.a0, We = e.a1, Ue = e.a2, ze = e.a3, Xe = e.a4, Ve = e.a5, Ke = e.a6, Je = e.a7, Ge = e.a8, Qe = e.a9, Ye = e.aa, Ze = e.ab, et = e.ac, tt = e.ad, nt = e.ae, ot = e.af, st = e.ag, rt = e.ah, it = e.ai, at = e.aj, ct = e.ak, lt = e.al, ut = e.am, dt = e.an, mt = e.ao, ht = e.ap, ft = e.aq, pt = e.ar, gt = e.as, bt = e.u, yt = e.at, vt = e.au, wt = e.av, jt = e.aw, Lt = e.h, Et = e.ax, kt = e.ay, St = e.az
        }, function() {}, function(e) {
            Tt = e.g, At = e.r
        }, function(e) {
            xt = e.s
        }, function(e) {
            qt = e.r
        }, function() {}],
        execute: function() {
            const e = "complete" === document.readyState ? Promise.resolve() : new Promise((e => {
                window.addEventListener("load", e)
            }));
            class TypingEffectElement extends HTMLElement {
                async connectedCallback() {
                    await e, this.content && await async function(e, t, n, o) {
                        for (let s = 0; s < e.length; s++) {
                            if (0 === n) t.append(e[s]);
                            else
                                for (const o of e[s].split("")) await Mt(n), t.innerHTML += o;
                            0 !== o && await Mt(o), s < e.length - 1 && t.append(document.createElement("br"))
                        }
                    }(this.lines, this.content, this.characterDelay, this.lineDelay), this.cursor && (this.cursor.hidden = !0), this.dispatchEvent(new CustomEvent("typing:complete", {
                        bubbles: !0,
                        cancelable: !0
                    }))
                }
                get content() {
                    return this.querySelector('[data-target="typing-effect.content"]')
                }
                get cursor() {
                    return this.querySelector('[data-target="typing-effect.cursor"]')
                }
                get lines() {
                    const e = this.getAttribute("data-lines");
                    try {
                        return e ? JSON.parse(e) : []
                    } catch (t) {
                        return []
                    }
                }
                get prefersReducedMotion() {
                    return window.matchMedia("(prefers-reduced-motion)").matches
                }
                get characterDelay() {
                    return this.prefersReducedMotion ? 0 : Math.max(0, Math.min(Math.floor(Number(this.getAttribute("data-character-delay"))), 2147483647)) || 40
                }
                set characterDelay(e) {
                    if (e > 2147483647 || e < 0) throw new DOMException("Value is negative or greater than the allowed amount");
                    this.setAttribute("data-character-delay", String(e))
                }
                get lineDelay() {
                    return this.prefersReducedMotion ? 0 : Math.max(0, Math.min(Math.floor(Number(this.getAttribute("data-line-delay"))), 2147483647)) || 40
                }
                set lineDelay(e) {
                    if (e > 2147483647 || e < 0) throw new DOMException("Value is negative or greater than the allowed amount");
                    this.setAttribute("data-line-delay", String(e))
                }
            }
            async function Mt(e) {
                return new Promise((t => {
                    setTimeout(t, e)
                }))
            }
            window.customElements.get("typing-effect") || (window.TypingEffectElement = TypingEffectElement, window.customElements.define("typing-effect", TypingEffectElement));

            function Ct(e) {
                "" === e.style.display || "block" === e.style.display ? e.style.display = "none" : e.style.display = "block"
            }

            function Ht(e) {
                const [t, n] = e.querySelectorAll(".octicon");
                t && n && (Ct(t), Ct(n))
            }
            const _t = new WeakMap;
            document.addEventListener("clipboard-copy", (function({
                target: e
            }) {
                if (!(e instanceof HTMLElement)) return;
                if (!e.hasAttribute("data-view-component")) return;
                const t = _t.get(e);
                t ? (clearTimeout(t), _t.delete(e)) : Ht(e), _t.set(e, setTimeout(Ht, 2e3, e))
            }));
            let Pt = class GitCloneHelpElement extends HTMLElement {
                updateURL(e) {
                    const t = e.currentTarget,
                        n = t.getAttribute("data-url") || "";
                    if (this.helpField.value = n, t.matches(".js-git-protocol-clone-url"))
                        for (const o of this.helpTexts) o.textContent = n;
                    for (const o of this.cloneURLButtons) o.classList.remove("selected");
                    t.classList.add("selected")
                }
            };
            n([o], Pt.prototype, "helpField", void 0), n([s], Pt.prototype, "helpTexts", void 0), n([s], Pt.prototype, "cloneURLButtons", void 0), Pt = n([r], Pt);
            let Rt = class NotificationIndicatorElement extends HTMLElement {
                constructor() {
                    super(), this.addEventListener("socket:message", this.update.bind(this))
                }
                update(e) {
                    const t = e.detail.data;
                    this.link.setAttribute("aria-label", t.aria_label), this.link.setAttribute("data-ga-click", t.ga_click), this.modifier.setAttribute("class", t.span_class)
                }
            };
            n([o], Rt.prototype, "link", void 0), n([o], Rt.prototype, "modifier", void 0), Rt = n([r], Rt);
            let It = class NotificationFocusIndicatorElement extends HTMLElement {
                connectedCallback() {
                    this.addEventListener("socket:message", (e => {
                        const t = e.detail.data;
                        this.link.setAttribute("aria-label", t.aria_label), this.link.setAttribute("data-ga-click", t.ga_click), this.modifier.setAttribute("class", t.span_class)
                    }))
                }
                toggleSidebar() {
                    const e = new CustomEvent("notification-focus:toggle-sidebar", {
                        bubbles: !0
                    });
                    this.dispatchEvent(e)
                }
            };
            n([o], It.prototype, "link", void 0), n([o], It.prototype, "modifier", void 0), It = n([r], It);
            let Dt = class NotificationFocusFiltersElement extends HTMLElement {
                changeFilter(e) {
                    e.preventDefault(), this.detailsContainer.removeAttribute("open");
                    const t = e.currentTarget;
                    this.setFilterTitle(t.innerHTML), this.dispatchEvent(new CustomEvent("focus-mode-filter-change", {
                        detail: {
                            url: t.href
                        }
                    }))
                }
                setFilterTitle(e) {
                    this.filterTitle.innerHTML = e
                }
            };
            n([o], Dt.prototype, "detailsContainer", void 0), n([o], Dt.prototype, "filterTitle", void 0), Dt = n([r], Dt);
            let Ft = class NotificationFocusListElement extends HTMLElement {
                connectedCallback() {
                    i(".js-notification-focus-list", (() => {
                        this.setupPaginationObserver()
                    })), a("pjax:end", "#js-repo-pjax-container", (() => {
                        this.toggleCurrentFocusedNotification()
                    }))
                }
                disconnectedCallback() {
                    this.disconnectCurrentObserver()
                }
                deactivateNavigation() {
                    K(this.container)
                }
                activateNavigation() {
                    J(this.container)
                }
                replaceContent(e) {
                    this.container.innerHTML = "", this.container.appendChild(e), this.setupPaginationObserver()
                }
                onRemoveItem(e) {
                    var t, n, o;
                    const s = e.detail.notificationId,
                        r = Tt(this.container, ".js-navigation-item.navigation-focus");
                    null === (o = null === (n = null === (t = this.listElements) || void 0 === t ? void 0 : t.find((e => e.notificationId === s))) || void 0 === n ? void 0 : n.closest("li")) || void 0 === o || o.remove(), 0 === this.listElements.length ? (this.blankSlate.hidden = !1, this.list.hidden = !0) : At(r, this.container)
                }
                toggleCurrentFocusedNotification() {
                    for (const e of this.listElements) {
                        const t = window.location.href.includes(e.url());
                        e.setFocusedState(t)
                    }
                }
                setupPaginationObserver() {
                    window.IntersectionObserver && this.nextPageItem && (this.currentObserver = new IntersectionObserver((e => {
                        e[0].isIntersecting && (this.disconnectCurrentObserver(), this.loadNextPage())
                    }), {
                        root: this.container,
                        threshold: 0
                    }), this.currentObserver.observe(this.nextPageItem))
                }
                async loadNextPage() {
                    if (!this.nextPageItem) return;
                    const e = this.nextPageItem.getAttribute("data-next-page-url");
                    if (e) {
                        this.nextPageItemSpinner.hidden = !1;
                        const t = await G(document, e);
                        this.nextPageItem.remove();
                        const n = t.querySelectorAll("ul > li.focus-notification-item");
                        for (const e of n) this.list.appendChild(e);
                        const o = t.querySelector("ul > li.focus-pagination-next-item");
                        o && this.list.appendChild(o), this.setupPaginationObserver()
                    }
                }
                disconnectCurrentObserver() {
                    this.currentObserver && this.currentObserver.disconnect()
                }
            };
            n([o], Ft.prototype, "container", void 0), n([o], Ft.prototype, "includeFragment", void 0), n([o], Ft.prototype, "list", void 0), n([o], Ft.prototype, "blankSlate", void 0), n([s], Ft.prototype, "listElements", void 0), n([o], Ft.prototype, "nextPageItem", void 0), n([o], Ft.prototype, "nextPageItemSpinner", void 0), Ft = n([r], Ft);
            let $t = class NotificationFocusListItemElement extends HTMLElement {
                constructor() {
                    super(...arguments), this.notificationId = "", this.isUnread = !1
                }
                connectedCallback() {
                    var e, t;
                    null === (e = this.closest(".js-navigation-item")) || void 0 === e || e.addEventListener("navigation:keydown", this.handleCustomKeybindings.bind(this)), null === (t = this.closest(".js-navigation-item")) || void 0 === t || t.addEventListener("navigation:keyopen", this.handleKeyOpen.bind(this))
                }
                url() {
                    var e;
                    return null === (e = this.notificationLink) || void 0 === e ? void 0 : e.href
                }
                handleCustomKeybindings(e) {
                    const t = e.detail;
                    "e" === t.hotkey ? this.doneForm.dispatchEvent(new Event("submit")) : "M" === t.hotkey && this.unsubscribeForm.dispatchEvent(new Event("submit"))
                }
                handleKeyOpen() {
                    this.notificationLink.dispatchEvent(new MouseEvent("click", {
                        bubbles: !0,
                        cancelable: !0
                    }))
                }
                setFocusedState(e) {
                    var t, n, o;
                    e && this.isUnread && (this.isUnread = !1, null === (t = this.closest(".js-navigation-item")) || void 0 === t || t.classList.remove("color-bg-primary"), null === (n = this.closest(".js-navigation-item")) || void 0 === n || n.classList.add("color-bg-tertiary")), null === (o = this.closest(".js-navigation-item")) || void 0 === o || o.classList.toggle("current-focused-item", e), this.notificationTitle.classList.toggle("text-bold", e || this.isUnread)
                }
                async runRemoveAction(e) {
                    e.preventDefault();
                    const t = e.currentTarget,
                        n = new FormData(t),
                        o = t.method,
                        s = t.action,
                        {
                            ok: r
                        } = await fetch(s, {
                            body: n,
                            method: o
                        });
                    r && this.dispatchEvent(new CustomEvent("focus-mode-remove-item", {
                        bubbles: !0,
                        detail: {
                            notificationId: this.notificationId
                        }
                    }))
                }
            };
            n([c], $t.prototype, "notificationId", void 0), n([c], $t.prototype, "isUnread", void 0), n([o], $t.prototype, "doneForm", void 0), n([o], $t.prototype, "unsubscribeForm", void 0), n([o], $t.prototype, "notificationLink", void 0), n([o], $t.prototype, "notificationTitle", void 0), $t = n([r], $t);
            let Nt = class NotificationFocusSidebarElement extends HTMLElement {
                connectedCallback() {
                    this.addEventListener("notification-focus:toggle-sidebar", this.toggleSidebar.bind(this), !0);
                    "true" === window.localStorage.getItem("focus-sidebar-active") && this.toggleSidebar()
                }
                toggleSidebar() {
                    this.adjustSidebarPosition(), this.sidebar.classList.contains("active") ? (this.listElement.deactivateNavigation(), this.sidebar.classList.remove("active"), window.localStorage.removeItem("focus-sidebar-active")) : (this.listElement.activateNavigation(), this.sidebar.classList.add("active"), window.localStorage.setItem("focus-sidebar-active", "true"))
                }
                async onFocusFilterChange(e) {
                    const t = e.detail;
                    if (t.url) {
                        this.listElement.deactivateNavigation();
                        const e = await G(document, t.url);
                        this.listElement.replaceContent(e), this.listElement.activateNavigation()
                    }
                }
                adjustSidebarPosition() {
                    const e = document.querySelector("header[role=banner]");
                    if (e) {
                        const t = e.offsetTop + e.offsetHeight;
                        this.sidebar.style.top = t - 10 + "px"
                    }
                }
            };
            n([o], Nt.prototype, "sidebar", void 0), n([o], Nt.prototype, "listElement", void 0), n([o], Nt.prototype, "filtersElement", void 0), Nt = n([r], Nt);
            let Ot = class NotificationsListSubscriptionFormElement extends HTMLElement {
                async submitCustomForm(e) {
                    await this.submitForm(e), this.closeMenu()
                }
                async submitForm(e) {
                    e.preventDefault(), Q();
                    const t = e.currentTarget,
                        n = new FormData(t),
                        o = await self.fetch(t.action, {
                            method: t.method,
                            body: n,
                            headers: {
                                "X-Requested-With": "XMLHttpRequest",
                                Accept: "application/json"
                            }
                        });
                    if (!o.ok) return void Y();
                    const s = await o.json(),
                        r = n.get("do");
                    "string" == typeof r && this.updateCheckedState(r), "string" == typeof r && this.updateMenuButtonCopy(r), this.updateSocialCount(s.count), this.applyInputsCheckedPropertiesToAttributesForNextFormReset()
                }
                updateMenuButtonCopy(e) {
                    this.unwatchButtonCopy.hidden = !("subscribed" === e || "custom" === e), this.stopIgnoringButtonCopy.hidden = !("ignore" === e), this.watchButtonCopy.hidden = !("subscribed" !== e && "custom" !== e && "ignore" !== e)
                }
                applyInputsCheckedPropertiesToAttributesForNextFormReset() {
                    for (const e of [...this.threadTypeCheckboxes]) e.toggleAttribute("checked", e.checked)
                }
                updateCheckedState(e) {
                    for (const t of this.subscriptionButtons) t.setAttribute("aria-checked", t.value === e ? "true" : "false");
                    if ("custom" === e) this.customButton.setAttribute("aria-checked", "true");
                    else {
                        this.customButton.setAttribute("aria-checked", "false");
                        for (const e of [...this.threadTypeCheckboxes]) Z(e, !1)
                    }
                }
                updateSocialCount(e) {
                    this.socialCount && (this.socialCount.textContent = e)
                }
                openCustomDialog(e) {
                    e.preventDefault(), e.stopPropagation(), this.menu.toggleAttribute("hidden", !0), this.customDialog.toggleAttribute("hidden", !1), setTimeout((() => {
                        var e;
                        null === (e = this.customDialog.querySelector("input[type=checkbox][autofocus]")) || void 0 === e || e.focus()
                    }), 0)
                }
                closeCustomDialog(e) {
                    e.preventDefault(), e.stopPropagation(), this.menu.toggleAttribute("hidden", !1), this.customDialog.toggleAttribute("hidden", !0), setTimeout((() => {
                        this.customButton.focus()
                    }), 0)
                }
                detailsToggled() {
                    this.menu.toggleAttribute("hidden", !1), this.customDialog.toggleAttribute("hidden", !0)
                }
                submitCustom(e) {
                    e.preventDefault(), this.details.toggleAttribute("open", !1)
                }
                threadTypeCheckboxesUpdated() {
                    const e = !this.threadTypeCheckboxes.some((e => e.checked));
                    this.customSubmit.disabled = e
                }
                closeMenu() {
                    this.details.toggleAttribute("open", !1)
                }
            };
            n([o], Ot.prototype, "details", void 0), n([o], Ot.prototype, "menu", void 0), n([o], Ot.prototype, "customButton", void 0), n([o], Ot.prototype, "customDialog", void 0), n([s], Ot.prototype, "subscriptionButtons", void 0), n([o], Ot.prototype, "socialCount", void 0), n([o], Ot.prototype, "unwatchButtonCopy", void 0), n([o], Ot.prototype, "stopIgnoringButtonCopy", void 0), n([o], Ot.prototype, "watchButtonCopy", void 0), n([s], Ot.prototype, "threadTypeCheckboxes", void 0), n([o], Ot.prototype, "customSubmit", void 0), Ot = n([r], Ot);
            let Bt = class NotificationsTeamSubscriptionFormElement extends HTMLElement {
                closeMenu() {
                    this.details.toggleAttribute("open", !1)
                }
            };
            n([o], Bt.prototype, "details", void 0), Bt = n([r], Bt);
            class PasswordStrengthElement extends HTMLElement {
                connectedCallback() {
                    this.addEventListener("input", Wt)
                }
                disconnectedCallback() {
                    this.removeEventListener("input", Wt)
                }
            }

            function Wt(e) {
                const t = e.currentTarget;
                if (!(t instanceof PasswordStrengthElement)) return;
                const n = e.target;
                if (!(n instanceof HTMLInputElement)) return;
                const o = n.form;
                if (!(o instanceof HTMLFormElement)) return;
                const s = function(e, t) {
                    const n = {
                        valid: !1,
                        hasMinimumCharacterCount: e.length >= t.minimumCharacterCount,
                        hasMinimumPassphraseLength: 0 !== t.passphraseLength && e.length >= t.passphraseLength,
                        hasLowerCase: /[a-z]/.test(e),
                        hasNumber: /\d/.test(e)
                    };
                    return n.valid = n.hasMinimumPassphraseLength || n.hasMinimumCharacterCount && n.hasLowerCase && n.hasNumber, n
                }(n.value, {
                    minimumCharacterCount: Number(t.getAttribute("minimum-character-count")),
                    passphraseLength: Number(t.getAttribute("passphrase-length"))
                });
                if (s.valid) {
                    n.setCustomValidity("");
                    const e = t.querySelector("dl.form-group");
                    e && (e.classList.remove("errored"), e.classList.add("successed"))
                } else n.setCustomValidity(t.getAttribute("invalid-message"));
                ! function(e, t) {
                    const n = e.querySelector("[data-more-than-n-chars]"),
                        o = e.querySelector("[data-min-chars]"),
                        s = e.querySelector("[data-number-requirement]"),
                        r = e.querySelector("[data-letter-requirement]"),
                        i = e.getAttribute("error-class").split(" ").filter((e => e.length > 0)),
                        a = e.getAttribute("pass-class").split(" ").filter((e => e.length > 0));
                    for (const c of [n, o, s, r]) null == c || c.classList.remove(...i, ...a);
                    if (t.hasMinimumPassphraseLength && n) n.classList.add(...a);
                    else if (t.valid) o.classList.add(...a), s.classList.add(...a), r.classList.add(...a);
                    else {
                        const e = t.hasMinimumCharacterCount ? a : i,
                            c = t.hasNumber ? a : i,
                            l = t.hasLowerCase ? a : i;
                        null == n || n.classList.add(...i), o.classList.add(...e), s.classList.add(...c), r.classList.add(...l)
                    }
                }(t, s), ee(o)
            }
            window.customElements.get("password-strength") || (window.PasswordStrengthElement = PasswordStrengthElement, window.customElements.define("password-strength", PasswordStrengthElement));
            class PollIncludeFragmentElement extends l {
                async fetch(e, t = 1e3) {
                    const n = await super.fetch(e);
                    return 202 === n.status ? (await new Promise((e => setTimeout(e, t))), this.fetch(e, 1.5 * t)) : n
                }
            }
            window.customElements.get("poll-include-fragment") || (window.PollIncludeFragmentElement = PollIncludeFragmentElement, window.customElements.define("poll-include-fragment", PollIncludeFragmentElement));
            class PreciseTimeAgoElement extends u {
                connectedCallback() {
                    Ut.push(this), zt || (Xt(), zt = window.setInterval(Xt, 1e3))
                }
                disconnectedCallback() {
                    const e = Ut.indexOf(this); - 1 !== e && Ut.splice(e, 1), Ut.length || (window.clearInterval(zt), zt = void 0)
                }
                getFormattedDate() {
                    const e = this.date;
                    if (!e) return;
                    const t = (new Date).getTime() - e.getTime(),
                        n = Math.floor(t / 1e3),
                        o = Math.floor(n / 60),
                        s = Math.floor(o / 60),
                        r = Math.floor(s / 24),
                        i = n - 60 * o,
                        a = o - 60 * s,
                        c = s - 24 * r;
                    return o < 1 ? this.applyPrecision([n + "s"]) : s < 1 ? this.applyPrecision([o + "m", i + "s"]) : r < 1 ? this.applyPrecision([s + "h", a + "m", i + "s"]) : this.applyPrecision([r + "d", c + "h", a + "m", i + "s"])
                }
                applyPrecision(e) {
                    const t = Number(this.getAttribute("data-precision") || e.length);
                    return e.slice(0, t).join(" ")
                }
            }
            const Ut = [];
            let zt;

            function Xt() {
                for (const e of Ut) e.textContent = e.getFormattedDate() || ""
            }
            window.customElements.get("precise-time-ago") || (window.PreciseTimeAgoElement = PreciseTimeAgoElement, window.customElements.define("precise-time-ago", PreciseTimeAgoElement));
            const Vt = /\s|\(|\[/;

            function Kt(e, t, n) {
                const o = e.lastIndexOf(t, n - 1);
                if (-1 === o) return;
                if (e.lastIndexOf(" ", n - 1) > o) return;
                const s = e[o - 1];
                if (s && !Vt.test(s)) return;
                return {
                    word: e.substring(o + t.length, n),
                    position: o + t.length,
                    beginningOfLine: Jt(s)
                }
            }
            const Jt = e => void 0 === e || /\n/.test(e),
                Gt = ["position:absolute;", "overflow:auto;", "word-wrap:break-word;", "top:0px;", "left:-9999px;"],
                Qt = ["box-sizing", "font-family", "font-size", "font-style", "font-variant", "font-weight", "height", "letter-spacing", "line-height", "max-height", "min-height", "padding-bottom", "padding-left", "padding-right", "padding-top", "border-bottom", "border-left", "border-right", "border-top", "text-decoration", "text-indent", "text-transform", "width", "word-spacing"],
                Yt = new WeakMap;

            function Zt(e, t = e.selectionEnd) {
                const {
                    mirror: n,
                    marker: o
                } = function(e, t) {
                    const n = e.nodeName.toLowerCase();
                    if ("textarea" !== n && "input" !== n) throw new Error("expected textField to a textarea or input");
                    let o = Yt.get(e);
                    if (o && o.parentElement === e.parentElement) o.innerHTML = "";
                    else {
                        o = document.createElement("div"), Yt.set(e, o);
                        const t = window.getComputedStyle(e),
                            s = Gt.slice(0);
                        "textarea" === n ? s.push("white-space:pre-wrap;") : s.push("white-space:nowrap;");
                        for (let e = 0, n = Qt.length; e < n; e++) {
                            const n = Qt[e];
                            s.push(`${n}:${t.getPropertyValue(n)};`)
                        }
                        o.style.cssText = s.join(" ")
                    }
                    const s = document.createElement("span");
                    let r, i;
                    if (s.style.cssText = "position: absolute;", s.innerHTML = "&nbsp;", "number" == typeof t) {
                        let n = e.value.substring(0, t);
                        n && (r = document.createTextNode(n)), n = e.value.substring(t), n && (i = document.createTextNode(n))
                    } else {
                        const t = e.value;
                        t && (r = document.createTextNode(t))
                    }
                    if (r && o.appendChild(r), o.appendChild(s), i && o.appendChild(i), !o.parentElement) {
                        if (!e.parentElement) throw new Error("textField must have a parentElement to mirror");
                        e.parentElement.insertBefore(o, e)
                    }
                    return o.scrollTop = e.scrollTop, o.scrollLeft = e.scrollLeft, {
                        mirror: o,
                        marker: s
                    }
                }(e, t), s = n.getBoundingClientRect(), r = o.getBoundingClientRect();
                return setTimeout((() => {
                    n.remove()
                }), 5e3), {
                    top: r.top - s.top,
                    left: r.left - s.left
                }
            }
            const en = new WeakMap;
            class SlashCommandExpander {
                constructor(e, t) {
                    this.expander = e, this.input = t, this.combobox = null, this.menu = null, this.match = null, this.justPasted = !1, this.oninput = this.onInput.bind(this), this.onpaste = this.onPaste.bind(this), this.onkeydown = this.onKeydown.bind(this), this.oncommit = this.onCommit.bind(this), this.onmousedown = this.onMousedown.bind(this), this.onblur = this.onBlur.bind(this), this.interactingWithMenu = !1, t.addEventListener("paste", this.onpaste), t.addEventListener("input", this.oninput), t.addEventListener("keydown", this.onkeydown), t.addEventListener("blur", this.onblur)
                }
                destroy() {
                    this.input.removeEventListener("paste", this.onpaste), this.input.removeEventListener("input", this.oninput), this.input.removeEventListener("keydown", this.onkeydown), this.input.removeEventListener("blur", this.onblur)
                }
                activate(e, t) {
                    this.input === document.activeElement && this.setMenu(e, t)
                }
                deactivate() {
                    const e = this.menu,
                        t = this.combobox;
                    return !(!e || !t) && (this.menu = null, this.combobox = null, e.removeEventListener("combobox-commit", this.oncommit), e.removeEventListener("mousedown", this.onmousedown), t.destroy(), e.remove(), !0)
                }
                setMenu(e, t) {
                    this.deactivate(), this.menu = t, t.id || (t.id = "text-expander-" + Math.floor(1e5 * Math.random()).toString()), this.expander.append(t);
                    const n = t.querySelector(".js-slash-command-menu-items");
                    this.combobox = new d(this.input, n || t);
                    const {
                        top: o,
                        left: s
                    } = Zt(this.input, e.position), r = parseInt(window.getComputedStyle(this.input).fontSize);
                    t.style.top = o + r + "px", t.style.left = s + "px", this.combobox.start(), t.addEventListener("combobox-commit", this.oncommit), t.addEventListener("mousedown", this.onmousedown), this.combobox.navigate(1)
                }
                setValue(e) {
                    if (null == e) return;
                    const t = this.match;
                    if (!t) return;
                    const n = this.input.value.substring(0, t.position - t.key.length),
                        o = this.input.value.substring(t.position + t.text.length);
                    let {
                        cursor: s,
                        value: r
                    } = this.replaceCursorMark(e);
                    r = 0 === (null == r ? void 0 : r.length) ? r : r + " ", this.input.value = n + r + o, this.deactivate(), this.input.focus(), s = n.length + (s || r.length), this.input.selectionStart = s, this.input.selectionEnd = s
                }
                replaceCursorMark(e) {
                    const t = /%cursor%/gm,
                        n = t.exec(e);
                    return n ? {
                        cursor: n.index,
                        value: e.replace(t, "")
                    } : {
                        cursor: null,
                        value: e
                    }
                }
                onCommit({
                    target: e
                }) {
                    const t = e;
                    if (!(t instanceof HTMLElement)) return;
                    if (!this.combobox) return;
                    const n = this.match;
                    if (!n) return;
                    const o = {
                        item: t,
                        key: n.key,
                        value: null
                    };
                    !this.expander.dispatchEvent(new CustomEvent("text-expander-value", {
                        cancelable: !0,
                        detail: o
                    })) || o.value && this.setValue(o.value)
                }
                onBlur() {
                    this.interactingWithMenu ? this.interactingWithMenu = !1 : this.deactivate()
                }
                onPaste() {
                    this.justPasted = !0
                }
                async delay(e) {
                    return new Promise((t => setTimeout(t, e)))
                }
                async onInput() {
                    if (this.justPasted) return void(this.justPasted = !1);
                    const e = this.findMatch();
                    if (e) {
                        if (this.match = e, await this.delay(this.appropriateDelay(this.match)), this.match !== e) return;
                        const t = await this.notifyProviders(e);
                        if (!this.match) return;
                        t ? this.activate(e, t) : this.deactivate()
                    } else this.match = null, this.deactivate()
                }
                appropriateDelay(e) {
                    return e.beginningOfLine || "" !== e.text ? 0 : 250
                }
                findMatch() {
                    const e = this.input.selectionEnd,
                        t = this.input.value;
                    for (const n of this.expander.keys) {
                        const o = Kt(t, n, e);
                        if (o) return {
                            text: o.word,
                            key: n,
                            position: o.position,
                            beginningOfLine: o.beginningOfLine
                        }
                    }
                }
                async notifyProviders(e) {
                    const t = [];
                    if (!this.expander.dispatchEvent(new CustomEvent("text-expander-change", {
                            cancelable: !0,
                            detail: {
                                provide: e => t.push(e),
                                text: e.text,
                                key: e.key
                            }
                        }))) return;
                    return (await Promise.all(t)).filter((e => e.matched)).map((e => e.fragment))[0]
                }
                onMousedown() {
                    this.interactingWithMenu = !0
                }
                onKeydown(e) {
                    "Escape" === e.key && this.deactivate() && (e.stopImmediatePropagation(), e.preventDefault())
                }
            }
            class SlashCommandExpanderElement extends HTMLElement {
                get keys() {
                    const e = this.getAttribute("keys");
                    return e ? e.split(" ") : []
                }
                connectedCallback() {
                    const e = this.querySelector('input[type="text"], textarea');
                    if (!(e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement)) return;
                    const t = new SlashCommandExpander(this, e);
                    en.set(this, t)
                }
                disconnectedCallback() {
                    const e = en.get(this);
                    e && (e.destroy(), en.delete(this))
                }
                setValue(e) {
                    const t = en.get(this);
                    t && t.setValue(e)
                }
                setMenu(e, t = !1) {
                    const n = en.get(this);
                    n && n.match && (t && (n.interactingWithMenu = !0), n.setMenu(n.match, e))
                }
                closeMenu() {
                    const e = en.get(this);
                    e && e.setValue("")
                }
                isLoading() {
                    const e = this.getElementsByClassName("js-slash-command-expander-loading")[0];
                    if (e) {
                        const t = e.cloneNode(!0);
                        t.classList.remove("d-none"), this.setMenu(t)
                    }
                }
                showError() {
                    const e = this.getElementsByClassName("js-slash-command-expander-error")[0];
                    if (e) {
                        const t = e.cloneNode(!0);
                        t.classList.remove("d-none"), this.setMenu(t)
                    }
                }
            }
            window.customElements.get("slash-command-expander") || (window.SlashCommandExpanderElement = SlashCommandExpanderElement, window.customElements.define("slash-command-expander", SlashCommandExpanderElement)), a("deprecatedAjaxSend", "[data-remote]", (function(e) {
                e.currentTarget === e.target && (e.defaultPrevented || e.currentTarget.classList.add("loading"))
            })), a("deprecatedAjaxComplete", "[data-remote]", (function(e) {
                e.currentTarget === e.target && e.currentTarget.classList.remove("loading")
            })), m("form.js-ajax-pagination, .js-ajax-pagination form", (async function(e, t) {
                const n = e.closest(".js-ajax-pagination");
                let o;
                try {
                    o = await t.html()
                } catch (s) {
                    if (s.response && 404 === s.response.status) return void n.remove();
                    throw s
                }
                n.replaceWith(o.html), h(e, "page:loaded")
            })), document.addEventListener("pjax:start", (function() {
                te("Loading page")
            })), document.addEventListener("pjax:error", (function() {
                te("Loading failed")
            })), document.addEventListener("pjax:end", (function() {
                te("Loading complete")
            }));
            const tn = new WeakMap;

            function nn(e, t) {
                var n, o, s, r, i, a;
                t.classList.remove("is-loading", "successed", "errored", "warn"), e.classList.remove("is-autocheck-loading", "is-autocheck-successful", "is-autocheck-errored");
                const c = t.querySelector("p.note");
                if (c) {
                    const e = tn.get(c);
                    e && (c.innerHTML = e)
                }
                "DL" === t.tagName ? (null === (n = t.querySelector("dd.error")) || void 0 === n || n.remove(), null === (o = t.querySelector("dd.warning")) || void 0 === o || o.remove(), null === (s = t.querySelector("dd.success")) || void 0 === s || s.remove()) : (null === (r = t.querySelector("div.error")) || void 0 === r || r.remove(), null === (i = t.querySelector("div.warning")) || void 0 === i || i.remove(), null === (a = t.querySelector("div.success")) || void 0 === a || a.remove())
            }

            function on(e) {
                const t = e.closest("form");
                if (!t) return;
                const n = t.querySelector(".js-auto-complete-button");
                n instanceof HTMLButtonElement && (n.disabled = !e.value)
            }
            i("auto-check", (function(e) {
                if (e.classList.contains("js-prevent-default-behavior")) return;
                const t = e.querySelector("input");
                if (!t) return;
                const n = t.closest(".form-group") || e,
                    o = t.form;
                let s;

                function r() {
                    return s || (s = "input-check-" + (1e4 * Math.random()).toFixed(0)), s
                }
                const i = t.getAttribute("aria-describedby");
                t.addEventListener("focusout:delay", (() => {
                    t.setAttribute("aria-describedby", [s, i].join(" "))
                }));
                const a = n.querySelector("p.note");
                a && (a.id || (a.id = r()), tn.set(a, a.innerHTML)), e.addEventListener("loadstart", (() => {
                    nn(t, n), n.classList.add("is-loading"), t.classList.add("is-autocheck-loading"), ee(o)
                })), e.addEventListener("loadend", (() => {
                    n.classList.remove("is-loading"), t.classList.remove("is-autocheck-loading")
                })), t.addEventListener("auto-check-success", (async e => {
                    t.classList.add("is-autocheck-successful"), n.classList.add("successed"), ee(o);
                    const {
                        response: s
                    } = e.detail;
                    if (!s) return;
                    const i = await s.text();
                    if (i) {
                        if (a instanceof HTMLElement) a.innerHTML = i, ne(a);
                        else {
                            const e = 200 === s.status,
                                o = "DL" === n.tagName ? "dd" : "div",
                                a = document.createElement(o);
                            a.id = r(), a.classList.add(e ? "success" : "warning"), a.innerHTML = i, n.append(a), n.classList.add(e ? "successed" : "warn"), ne(a), e && (a.hidden = document.activeElement !== t)
                        }
                        h(t, "auto-check-message-updated")
                    }
                })), t.addEventListener("auto-check-error", (async e => {
                    t.classList.add("is-autocheck-errored"), n.classList.add("errored"), ee(o);
                    const {
                        response: s
                    } = e.detail;
                    if (!s) return;
                    const i = await s.text();
                    if (a instanceof HTMLElement) a.innerHTML = i || "Something went wrong", ne(a);
                    else {
                        const e = "DL" === n.tagName ? "dd" : "div",
                            t = document.createElement(e);
                        t.id = r(), t.classList.add("error"), t.innerHTML = i || "Something went wrong", n.append(t), ne(t)
                    }
                })), t.addEventListener("input", (() => {
                    t.removeAttribute("aria-describedby"), t.value || nn(t, n)
                })), t.addEventListener("blur", (() => {
                    const e = n.querySelector(".success");
                    e && (e.hidden = !0)
                })), t.addEventListener("focus", (() => {
                    const e = n.querySelector(".success");
                    e && (e.hidden = !1)
                })), o.addEventListener("reset", (() => {
                    nn(t, n)
                }))
            })), i("auto-complete", (function(e) {
                e.addEventListener("loadstart", (() => e.classList.add("is-auto-complete-loading"))), e.addEventListener("loadend", (() => e.classList.remove("is-auto-complete-loading")))
            })), i("auto-complete", {
                constructor: f,
                initialize: on
            }), a("auto-complete-change", "auto-complete", (function(e) {
                on(e.currentTarget)
            }));
            let sn = null;

            function rn(e) {
                const t = e.target;
                if (!(t instanceof HTMLInputElement || t instanceof HTMLSelectElement)) return;
                const n = t.form;
                le(n)
            }
            a("submit", "[data-autosearch-results-container]", (async function(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLFormElement)) return;
                e.preventDefault(), null == sn || sn.abort(), t.classList.add("is-sending");
                const n = new URL(t.action, window.location.origin),
                    o = t.method,
                    s = oe(t);
                let r = null;
                "get" === o ? n.search = s : r = new FormData(t);
                const {
                    signal: i
                } = sn = new AbortController, a = new Request(n.toString(), {
                    method: o,
                    body: r,
                    signal: i,
                    headers: {
                        Accept: "text/html",
                        "X-Requested-With": "XMLHttpRequest"
                    }
                });
                let c;
                try {
                    c = await fetch(a)
                } catch (d) {}
                if (t.classList.remove("is-sending"), !c || !c.ok || i.aborted) return;
                const l = t.getAttribute("data-autosearch-results-container"),
                    u = l ? document.getElementById(l) : null;
                u && (u.innerHTML = "", u.appendChild(se(document, await c.text()))), re(null, "", "?" + s)
            })), ie("input[data-autoselect], textarea[data-autoselect]", (async function(e) {
                await ae(), e.select()
            })), a("change", "form[data-autosubmit]", (function(e) {
                const t = e.currentTarget;
                le(t)
            })), a("change", "input[data-autosubmit], select[data-autosubmit]", rn);
            const an = p(rn, 300);
            async function cn(e) {
                const t = e.getAttribute("data-url") || "";
                if (await async function(e) {
                        const t = e;
                        if (!t) return !1;
                        try {
                            const e = await fetch(t, {
                                headers: {
                                    Accept: "application/json"
                                }
                            });
                            if (!e.ok) return !1;
                            return (await e.json()).has_gravatar
                        } catch (n) {
                            return !1
                        }
                    }(t)) {
                    const t = e.getAttribute("data-gravatar-text");
                    null != t && (e.textContent = t)
                }
            }
            i("input[data-throttled-autosubmit]", {
                subscribe: e => ce(e, "input", an)
            }), i(".js-detect-gravatar", (function(e) {
                cn(e)
            }));
            class AutoFlushingQueue {
                constructor(e = 50, t = 30) {
                    this.elements = [], this.timer = null, this.callbacks = [], this.csrf = null, this.timeout = e, this.limit = t
                }
                push(e) {
                    if (this.timer && (window.clearTimeout(this.timer), this.timer = null), e instanceof HTMLElement) {
                        const t = e.querySelector("[data-csrf]");
                        null !== t && (this.csrf = t.value)
                    }
                    this.elements.length >= this.limit && this.flush(), this.elements.push(e), this.timer = window.setTimeout((() => {
                        this.flush()
                    }), this.timeout)
                }
                onFlush(e) {
                    this.callbacks.push(e)
                }
                async flush() {
                    const e = this.elements.splice(0, this.limit);
                    0 !== e.length && await Promise.all(this.callbacks.map((t => t(e))))
                }
            }
            const ln = new Map;
            let un = class BatchDeferredContentElement extends HTMLElement {
                constructor() {
                    super(...arguments), this.url = ""
                }
                connectedCallback() {
                    this.queue.push(this)
                }
                get queue() {
                    let e = ln.get(this.url);
                    return e || (e = this.buildAutoFlushingQueue(), ln.set(this.url, e), e)
                }
                buildAutoFlushingQueue() {
                    const e = new AutoFlushingQueue;
                    return e.onFlush((async t => {
                        const n = new Map,
                            o = new FormData;
                        null !== e.csrf && o.set("authenticity_token", e.csrf);
                        for (const e in t) {
                            const s = t[e],
                                r = "item-" + e;
                            n.set(r, s);
                            for (const e of s.inputs) o.append(`items[${r}][${e.name}]`, e.value)
                        }
                        const s = await async function(e, t) {
                            const n = await fetch(e, {
                                method: "POST",
                                body: t,
                                headers: {
                                    Accept: "application/json",
                                    "X-Requested-With": "XMLHttpRequest"
                                }
                            });
                            if (n.ok) {
                                const e = await n.json(),
                                    t = new Map;
                                for (const n in e) t.set(n, e[n]);
                                return t
                            }
                            return new Map
                        }(this.url, o);
                        for (const [e, r] of s.entries()) {
                            n.get(e).replaceWith(se(document, r))
                        }
                    })), e
                }
            };
            n([c], un.prototype, "url", void 0), n([s], un.prototype, "inputs", void 0), un = n([r], un);
            let dn = null;
            async function mn(e) {
                const t = e.getAttribute("data-item-name") || "items",
                    n = e.value,
                    o = parseInt(e.getAttribute("data-item-minimum")) || 0,
                    s = parseInt(e.getAttribute("data-item-maximum")) || 300,
                    r = parseInt(e.getAttribute("data-item-count")) || 0,
                    i = Math.max(o, parseInt(n) || 0),
                    a = i > s,
                    c = document.querySelector(".js-downgrade-button");
                c instanceof HTMLButtonElement && (c.disabled = i === r);
                const l = new URL(e.getAttribute("data-url"), window.location.origin),
                    u = new URLSearchParams(l.search.slice(1));
                u.append(t, i.toString());
                document.querySelector(".js-transform-user") && u.append("transform_user", "1"), l.search = u.toString(), null == dn || dn.abort();
                const {
                    signal: d
                } = dn = new AbortController;
                let m = null;
                try {
                    const e = await fetch(l.toString(), {
                        signal: d,
                        headers: {
                            Accept: "application/json"
                        }
                    });
                    if (!e.ok) return;
                    m = await e.json()
                } catch (L) {}
                if (d.aborted) return;
                if (!m) return;
                const h = document.querySelector(".js-contact-us");
                h && h.classList.toggle("d-none", !a);
                const f = document.querySelector(".js-payment-summary");
                f && f.classList.toggle("d-none", a);
                const p = document.querySelector(".js-submit-billing");
                p instanceof HTMLElement && (p.hidden = a);
                const g = document.querySelector(".js-billing-section");
                g && g.classList.toggle("has-removed-contents", m.free || m.is_enterprise_cloud_trial);
                const b = document.querySelector(".js-upgrade-info");
                b && b.classList.toggle("d-none", i <= 0);
                const y = document.querySelector(".js-downgrade-info");
                y && y.classList.toggle("d-none", i >= 0);
                const v = document.querySelector(".js-extra-seats-line-item");
                v && v.classList.toggle("d-none", m.no_additional_seats);
                document.querySelector(".js-seat-field") && function(e) {
                    for (const t of document.querySelectorAll(".js-seat-field")) t.value = e
                }(n);
                const w = document.querySelector(".js-minimum-seats-disclaimer");
                w && (w.classList.toggle("tooltipped", 5 === m.seats), w.classList.toggle("tooltipped-nw", 5 === m.seats));
                const j = m.selectors;
                for (const E in j)
                    for (const e of document.querySelectorAll(E)) e.innerHTML = j[E];
                re(me(), "", m.url)
            }
            a("click", ".js-org-signup-duration-change", (e => {
                e.preventDefault();
                const t = e.currentTarget.getAttribute("data-plan-duration");
                ! function(e) {
                    const t = "year" === e ? "month" : "year";
                    for (const n of document.querySelectorAll(".js-plan-duration-text")) n.innerHTML = e;
                    for (const n of document.querySelectorAll(".unstyled-available-plan-duration-adjective")) n.innerHTML = e + "ly";
                    for (const n of document.querySelectorAll(".js-org-signup-duration-change")) n.setAttribute("data-plan-duration", t)
                }(t),
                function(e) {
                    for (const t of document.querySelectorAll(".js-seat-field")) {
                        const n = new URL(t.getAttribute("data-url"), window.location.origin),
                            o = new URLSearchParams(n.search.slice(1));
                        o.delete("plan_duration"), o.append("plan_duration", e), n.search = o.toString(), t.setAttribute("data-url", n.toString())
                    }
                }(t);
                for (const n of document.querySelectorAll(".js-seat-field")) mn(n);
                ! function() {
                    for (const e of document.querySelectorAll(".js-unit-price")) e.hidden = !e.hidden
                }()
            })), i(".js-addon-purchase-field", {
                constructor: HTMLInputElement,
                add(e) {
                    ue(e) && mn(e), de(e, (function() {
                        mn(e)
                    }))
                }
            }), i(".js-addon-downgrade-field", {
                constructor: HTMLSelectElement,
                add(e) {
                    ue(e) && mn(e), e.addEventListener("change", (function() {
                        mn(e)
                    }))
                }
            }), a("details-menu-selected", ".js-organization-container", (function(e) {
                const t = document.querySelector(".js-addon-purchase-field"),
                    n = e.target.querySelector("input:checked");
                if (t instanceof HTMLInputElement && n instanceof HTMLInputElement) {
                    const e = n.getAttribute("data-upgrade-url");
                    e && (t.setAttribute("data-url", e), t.value = "0", mn(t))
                }
            }), {
                capture: !0
            }), he(".js-csv-filter-field", (function(e) {
                const t = e.target.value.toLowerCase();
                for (const n of document.querySelectorAll(".js-csv-data tbody tr")) n instanceof HTMLElement && n.textContent && (n.hidden = !!t && !n.textContent.toLowerCase().includes(t))
            }));
            let hn = !1;

            function fn(e, t) {
                return document.querySelector(`#${e}LC${t}`)
            }

            function pn({
                blobRange: e,
                anchorPrefix: t
            }) {
                if (0 !== document.querySelectorAll(".js-file-line").length && (function() {
                        for (const e of document.querySelectorAll(".js-file-line.highlighted")) e.classList.remove("highlighted");
                        for (const e of document.querySelectorAll(".js-file-line .highlighted")) {
                            const t = e.closest(".js-file-line");
                            e.replaceWith(...e.childNodes), t.normalize()
                        }
                    }(), e))
                    if (null === e.start.column || null === e.end.column)
                        for (let n = e.start.line; n <= e.end.line; n += 1) {
                            const e = fn(t, n);
                            e && e.classList.add("highlighted")
                        } else if (e.start.line === e.end.line && null != e.start.column && null != e.end.column) {
                            const n = ye(e, (e => fn(t, e)));
                            if (n) {
                                const e = document.createElement("span");
                                e.classList.add("highlighted"), ve(n, e)
                            }
                        }
            }

            function gn() {
                const e = pe(window.location.hash);
                pn(e),
                    function() {
                        const e = document.querySelector(".js-file-line-actions");
                        if (!e) return;
                        const t = document.querySelectorAll(".js-file-line.highlighted"),
                            n = t[0];
                        if (n) {
                            ! function(e) {
                                const t = [];
                                for (const o of e) t.push(o.textContent);
                                const n = document.getElementById("js-copy-lines");
                                if (n instanceof g) {
                                    n.textContent = "Copy " + (1 === e.length ? "line" : "lines"), n.value = t.join("\n");
                                    const o = "Blob, copyLines, numLines:" + e.length.toString();
                                    n.setAttribute("data-ga-click", o)
                                }
                            }(t),
                            function(e) {
                                const t = document.getElementById("js-view-git-blame");
                                if (!t) return;
                                t.setAttribute("data-ga-click", "Blob, viewGitBlame, numLines:" + e.toString())
                            }(t.length);
                            const o = function(e) {
                                const t = document.querySelector(".js-permalink-shortcut");
                                if (t instanceof HTMLAnchorElement) {
                                    const n = `${t.href}${window.location.hash}`,
                                        o = document.getElementById("js-copy-permalink");
                                    if (o instanceof g) {
                                        o.value = n;
                                        const t = "Blob, copyPermalink, numLines:" + e.toString();
                                        o.setAttribute("data-ga-click", t)
                                    }
                                    return n
                                }
                            }(t.length);
                            o && function(e, t) {
                                const n = document.getElementById("js-new-issue");
                                if (n instanceof HTMLAnchorElement) {
                                    if (!n.href) return;
                                    const o = new URL(n.href, window.location.origin),
                                        s = new URLSearchParams(o.search.slice(1));
                                    s.set("permalink", e), o.search = s.toString(), n.href = o.toString(), n.setAttribute("data-ga-click", "Blob, newIssue, numLines:" + t.toString())
                                }
                            }(o, t.length), e.style.top = n.offsetTop - 2 + "px", e.classList.remove("d-none")
                        } else e.classList.add("d-none")
                    }();
                const {
                    blobRange: t,
                    anchorPrefix: n
                } = e, o = t && fn(n, t.start.line);
                if (!hn && o) {
                    o.scrollIntoView();
                    o.closest(".blob-wrapper, .js-blob-wrapper").scrollLeft = 0
                }
                hn = !1
            }
            fe((function() {
                if (document.querySelector(".js-file-line-container")) {
                    setTimeout(gn, 0);
                    const e = window.location.hash;
                    for (const t of document.querySelectorAll(".js-update-url-with-hash"))
                        if (t instanceof HTMLAnchorElement) t.hash = e;
                        else if (t instanceof HTMLFormElement) {
                        const n = new URL(t.action, window.location.origin);
                        n.hash = e, t.action = n.toString()
                    }
                }
            })), a("click", ".js-line-number", (function(e) {
                const t = pe(e.currentTarget.id),
                    {
                        blobRange: n
                    } = t,
                    o = ge(window.location.hash);
                o && e.shiftKey && (t.blobRange = {
                        start: o.start,
                        end: n.end
                    }),
                    function(e) {
                        const t = window.scrollY;
                        hn = !0, e(), window.scrollTo(0, t)
                    }((() => {
                        window.location.hash = be(t)
                    }))
            })), a("submit", ".js-jump-to-line-form", (function(e) {
                const t = e.currentTarget.querySelector(".js-jump-to-line-field").value.replace(/[^\d-]/g, "").split("-").map((e => parseInt(e, 10))).filter((e => e > 0)).sort(((e, t) => e - t));
                t.length && (window.location.hash = "L" + t.join("-L")), e.preventDefault()
            }));
            let bn, yn = null;

            function vn(e) {
                const t = document.querySelector(".js-membership-tabs");
                if (t) {
                    const n = e.querySelectorAll(".js-bulk-actions-toggle:checked");
                    t.classList.toggle("d-none", n.length > 0)
                }
            }

            function wn(e, t) {
                try {
                    return window.localStorage.setItem(e, JSON.stringify(t)), {
                        kind: "ok",
                        value: null
                    }
                } catch (n) {
                    return {
                        kind: "err",
                        value: n
                    }
                }
            }

            function jn() {
                const e = function() {
                        const e = {};
                        for (const t of document.getElementsByTagName("script")) {
                            const n = t.src.match(/\/([\w-]+)-[0-9a-f]{8,}\.js$/);
                            n && (e[n[1] + ".js"] = t.src)
                        }
                        for (const t of document.getElementsByTagName("link")) {
                            const n = t.href.match(/\/([\w-]+)-[0-9a-f]{8,}\.css$/);
                            n && (e[n[1] + ".css"] = t.href)
                        }
                        return e
                    }(),
                    t = function(e) {
                        try {
                            const t = window.localStorage.getItem(e);
                            return {
                                kind: "ok",
                                value: t ? JSON.parse(t) : null
                            }
                        } catch (t) {
                            return {
                                kind: "err",
                                value: t
                            }
                        }
                    }("bundle-urls");
                if ("err" === t.kind) return void wn("bundle-urls", e);
                const n = t.value || {},
                    o = Object.keys(e).filter((t => n[t] !== e[t]));
                if (o.length) {
                    "ok" === wn("bundle-urls", Object.assign(Object.assign({}, n), e)).kind && je({
                        downloadedBundles: o
                    })
                }
            }
            a("change", ".js-bulk-actions-toggle", (function(e) {
                const t = e.currentTarget.closest(".js-bulk-actions-container");
                h(t, "bulk-actions:update")
            })), a("bulk-actions:update", ".js-bulk-actions-container", p((async function(e) {
                const t = e.target;
                if (!(t instanceof HTMLElement)) return;
                const n = t.querySelector(".js-bulk-actions"),
                    o = !!t.querySelector(".js-bulk-actions-toggle:checked");
                null == yn || yn.abort();
                const {
                    signal: s
                } = yn = new AbortController;
                let r = "";
                try {
                    const e = await fetch(function(e) {
                        const t = new URL(e.getAttribute("data-bulk-actions-url"), window.location.origin),
                            n = new URLSearchParams(t.search.slice(1)),
                            o = e.getAttribute("data-bulk-actions-parameter"),
                            s = Array.from(e.querySelectorAll(".js-bulk-actions-toggle:checked"));
                        if (o) {
                            const e = s.map((e => e.closest(".js-bulk-actions-item").getAttribute("data-bulk-actions-id"))).sort();
                            for (const t of e) n.append(o + "[]", t)
                        } else
                            for (const r of s.sort(((e, t) => e.value > t.value ? 1 : -1))) n.append(r.name, r.value);
                        return t.search = n.toString(), t.toString()
                    }(t), {
                        signal: s,
                        headers: {
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    });
                    if (!e.ok) return;
                    r = await e.text()
                } catch (i) {}
                s.aborted || r && (o ? (vn(t), n.innerHTML = r) : (n.innerHTML = r, vn(t)), h(t, "bulk-actions:updated"))
            }), 100)), (async () => {
                await we, window.requestIdleCallback(jn)
            })();
            let Ln = !1;

            function En() {
                bn = document.activeElement, document.body && document.body.classList.toggle("intent-mouse", Ln)
            }

            function kn(e) {
                e.preventDefault(), e.stopPropagation()
            }
            document.addEventListener("mousedown", (function() {
                Ln = !0, bn === document.activeElement && En()
            }), {
                capture: !0
            }), document.addEventListener("keydown", (function() {
                Ln = !1
            }), {
                capture: !0
            }), document.addEventListener("focusin", En, {
                capture: !0
            }), i("a.btn.disabled", {
                subscribe: e => ce(e, "click", kn)
            }), i(".js-check-all-container", {
                constructor: HTMLElement,
                subscribe: b
            });
            const Sn = "logout-was-successful";
            Le(Sn).length > 0 && (function() {
                for (const t of [sessionStorage, localStorage]) try {
                    t.clear()
                } catch (e) {}
            }(), Ee(Sn));

            function Tn(e) {
                xn.delete(e), An(e)
            }

            function An(e) {
                const t = e.querySelector(".js-clipboard-clippy-icon"),
                    n = e.querySelector(".js-clipboard-check-icon");
                e.classList.toggle("ClipboardButton--success"), t && t.classList.toggle("d-none"), n && (n.classList.contains("d-sm-none") ? n.classList.toggle("d-sm-none") : n.classList.toggle("d-none"))
            }
            a("clipboard-copy", "[data-copy-feedback]", (e => {
                const t = e.currentTarget,
                    n = t.getAttribute("data-copy-feedback"),
                    o = t.getAttribute("aria-label"),
                    s = t.getAttribute("data-tooltip-direction") || "s";
                t.setAttribute("aria-label", n), t.classList.add("tooltipped", "tooltipped-" + s), t instanceof HTMLElement && (ne(t), setTimeout((() => {
                    o ? t.setAttribute("aria-label", o) : t.removeAttribute("aria-label"), t.classList.remove("tooltipped", "tooltipped-" + s)
                }), 2e3))
            }));
            const xn = new WeakMap;
            a("clipboard-copy", ".js-clipboard-copy", (function({
                currentTarget: e
            }) {
                if (!(e instanceof HTMLElement)) return;
                const t = xn.get(e);
                t ? clearTimeout(t) : An(e), xn.set(e, setTimeout(Tn, 2e3, e))
            })), i(".js-file-line-container, .js-code-block-container", {
                constructor: HTMLElement,
                subscribe(e) {
                    const t = document.querySelector(".js-tagsearch-popover");
                    if (!(t instanceof HTMLElement)) return {
                        unsubscribe() {}
                    };
                    const n = t.querySelector(".js-tagsearch-popover-content"),
                        o = new WeakMap,
                        s = new WeakMap;
                    let r;
                    async function i(n) {
                        const r = function(e, t, n) {
                            let o, s;
                            if (document.caretPositionFromPoint) {
                                const e = document.caretPositionFromPoint(t, n);
                                e && (o = e.offsetNode, s = e.offset)
                            } else if (document.caretRangeFromPoint) {
                                const e = document.caretRangeFromPoint(t, n);
                                e && (o = e.startContainer, s = e.startOffset)
                            }
                            if (!o || "number" != typeof s || o.nodeType !== Node.TEXT_NODE) return;
                            const r = o.textContent;
                            if (!r) return null;
                            const i = function(e, t, n) {
                                let o;
                                for (; o = t.exec(e);) {
                                    const e = o.index + o[0].length;
                                    if (o.index <= n && n < e) return [o[0], o.index, e]
                                }
                                return null
                            }(r, e, s);
                            if (!i) return null;
                            const a = document.createRange();
                            return a.setStart(o, i[1]), a.setEnd(o, i[2]), a
                        }(/\w+[!?]?/g, n.clientX, n.clientY);
                        if (!r) return;
                        const i = r.commonAncestorContainer.parentElement;
                        for (const e of i.classList)
                            if (["pl-token", "pl-c", "pl-s", "pl-k"].includes(e)) return;
                        if (i.closest(".js-skip-tagsearch")) return;
                        const a = r.toString();
                        if (!a || a.match(/\n|\s|[();&.=",]/)) return;
                        let l = s.get(i);
                        if (l || (l = new Set, s.set(i, l)), l.has(a)) return;
                        l.add(a);
                        let u = t.getAttribute("data-tagsearch-lang");
                        if ("HTML+ERB" === u) {
                            if (!i.closest(".pl-sre")) return;
                            u = "Ruby"
                        }
                        if (e.classList.contains("js-code-block-container") && (u = function(e) {
                                const t = e.closest(".highlight");
                                if (t)
                                    for (const n of t.classList) switch (n) {
                                        case "highlight-source-go":
                                            return "Go";
                                        case "highlight-source-js":
                                            return "JavaScript";
                                        case "highlight-source-python":
                                            return "Python";
                                        case "highlight-source-ruby":
                                            return "Ruby";
                                        case "highlight-source-ts":
                                            return "TypeScript"
                                    }
                                return null
                            }(i), !u)) return;
                        const d = function(e) {
                                let t = e.startContainer,
                                    n = e.startOffset;
                                for (;;) {
                                    let e = t.previousSibling;
                                    for (; e;) n += (e.textContent || "").length, e = e.previousSibling;
                                    const o = t.parentElement;
                                    if (!o) return [0, 0];
                                    if (o.classList.contains("js-file-line")) {
                                        const e = o.previousElementSibling;
                                        if (!e.classList.contains("js-line-number")) throw new Error("invariant");
                                        return [parseInt(e.getAttribute("data-line-number") || "1", 10) - 1, n]
                                    }
                                    t = o
                                }
                            }(r),
                            m = await async function(e, t, n, o) {
                                const s = e.getAttribute("data-tagsearch-url"),
                                    r = e.getAttribute("data-tagsearch-path"),
                                    i = e.getAttribute("data-tagsearch-ref"),
                                    a = new URL(s, window.location.origin),
                                    c = new URLSearchParams;
                                c.set("q", t), c.set("blob_path", r), c.set("ref", i), c.set("language", n), c.set("row", o[0].toString()), c.set("col", o[1].toString()), a.search = c.toString();
                                const l = await fetch(a.toString(), {
                                    headers: {
                                        "X-Requested-With": "XMLHttpRequest"
                                    }
                                });
                                if (!l.ok) return "";
                                const u = await l.text();
                                return /js-tagsearch-no-definitions/.test(u) ? "" : u
                            }(t, a, u, d);
                        if (!m) return;
                        const h = document.createElement("span");
                        h.classList.add("pl-token"), h.addEventListener("click", c), h.setAttribute("data-hydro-click", t.getAttribute("data-hydro-click")), h.setAttribute("data-hydro-click-hmac", t.getAttribute("data-hydro-click-hmac")), o.set(h, m), r.surroundContents(h)
                    }

                    function a() {
                        n.scrollTop = 0
                    }

                    function c(e) {
                        if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                        const s = e.currentTarget;
                        s === r ? u() : (function(e) {
                            r && r.classList.remove("active");
                            r = e, r.classList.add("active"), n.innerHTML = o.get(e) || "", l(e)
                        }(s), function() {
                            if (!t.hidden) return void a();
                            t.hidden = !1, a(), document.addEventListener("click", m), document.addEventListener("keyup", h), window.addEventListener("resize", d)
                        }()), e.preventDefault()
                    }

                    function l(e) {
                        const n = e.getClientRects()[0] || {
                            bottom: 0,
                            left: 0
                        };
                        t.style.position = "absolute", t.style.top = window.scrollY + n.bottom + 7 + "px", t.style.left = window.scrollX + n.left + "px"
                    }

                    function u() {
                        t.hidden || (t.hidden = !0, r && r.classList.remove("active"), r = void 0, document.removeEventListener("click", m), document.removeEventListener("keyup", h), window.removeEventListener("resize", d))
                    }

                    function d() {
                        r instanceof HTMLElement && l(r)
                    }

                    function m(e) {
                        const {
                            target: n
                        } = e;
                        n instanceof Node && (t.contains(n) || r.contains(n) || u())
                    }

                    function h(e) {
                        switch (e.key) {
                            case "Escape":
                                u()
                        }
                    }
                    return e.addEventListener("mousemove", i), {
                        unsubscribe() {
                            e.removeEventListener("mousemove", i)
                        }
                    }
                }
            });
            const qn = {}.hasOwnProperty,
                Mn = {
                    host: "",
                    type: "page_view",
                    dimensions: {},
                    measures: {},
                    context: {},
                    actor: {},
                    image: new Image,
                    performance: {},
                    expectedPerformanceTimingKeys: ["connectEnd", "connectStart", "domComplete", "domContentLoadedEventEnd", "domContentLoadedEventStart", "domInteractive", "domLoading", "domainLookupEnd", "domainLookupStart", "fetchStart", "loadEventEnd", "loadEventStart", "navigationStart", "redirectEnd", "redirectStart", "requestStart", "responseEnd", "responseStart", "secureConnectionStart", "unloadEventEnd", "unloadEventStart"],
                    recordPageView() {
                        return this.applyMetaTags(), null != this.app && (null == this.host ? (console && console.warn && console.warn("Host not set, you are doing something wrong"), !1) : (this.image.src = this._src(), this._clearPerformance(), !0))
                    },
                    setHost(e) {
                        this.host = e
                    },
                    setApp(e) {
                        this.app = e
                    },
                    setDimensions(e) {
                        this.dimensions = e
                    },
                    addDimensions(e) {
                        let t;
                        null == this.dimensions && (this.dimensions = {});
                        const n = [];
                        for (t in e) {
                            if (!qn.call(e, t)) continue;
                            const o = e[t];
                            n.push(this.dimensions[t] = o)
                        }
                        return n
                    },
                    setMeasures(e) {
                        this.measures = e
                    },
                    addMeasures(e) {
                        let t;
                        null == this.measures && (this.measures = {});
                        const n = [];
                        for (t in e) {
                            if (!qn.call(e, t)) continue;
                            const o = e[t];
                            n.push(this.measures[t] = o)
                        }
                        return n
                    },
                    setContext(e) {
                        this.context = e
                    },
                    addContext(e) {
                        let t;
                        null == this.context && (this.context = {});
                        const n = [];
                        for (t in e) {
                            if (!qn.call(e, t)) continue;
                            const o = e[t];
                            n.push(this.context[t] = o)
                        }
                        return n
                    },
                    setActor(e) {
                        this.actor = e
                    },
                    push(e) {
                        return this.applyCall(e)
                    },
                    enablePerformance() {
                        this.performance = this._performanceTiming()
                    },
                    _recordSrc(e, t, n, o) {
                        return `//${this.host}/${this.app}/${e}?${this._queryString(t,n,o)}`
                    },
                    _src() {
                        return `//${this.host}/${this.app}/${this.type}?${this._queryString()}`
                    },
                    _queryString(e, t, n) {
                        let o, s;
                        const r = this._params(),
                            i = [];
                        for (o in r) s = r[o], i.push(`dimensions[${o}]=${s}`);
                        return i.push(this._encodeObject("dimensions", Object.assign({}, this.dimensions, e))), i.push(this._encodeObject("measures", Object.assign({}, this.measures, t))), null != this.performance && i.push(this._encodeObject("measures", {
                            performance_timing: String(this.performance)
                        })), i.push(this._encodeObject("context", Object.assign({}, this.context, n))), i.push(this._actor()), i.push(this._encodeObject("dimensions", {
                            cid: this._clientId()
                        })), i.join("&")
                    },
                    _clearPerformance() {
                        this.performance = null
                    },
                    _performanceTiming() {
                        if (null == window.performance || null == window.performance.timing || null == window.performance.timing.navigationStart) return null;
                        const e = this.expectedPerformanceTimingKeys.reduce(((e, t) => {
                                const n = window.performance.timing[t];
                                return e[t] = "number" == typeof n ? n : 0, e
                            }), {}),
                            t = [],
                            n = e.navigationStart;
                        for (const o in e) {
                            const s = e[o],
                                r = 0 === s ? null : s - n;
                            t.push(r)
                        }
                        return "1-" + t.join("-")
                    },
                    _params() {
                        return {
                            page: this._encode(this._page()),
                            title: this._encode(this._title()),
                            referrer: this._encode(this._referrer()),
                            user_agent: this._encode(this._agent()),
                            screen_resolution: this._encode(this._screenResolution()),
                            pixel_ratio: this._encode(this._pixelRatio()),
                            browser_resolution: this._encode(this._browserResolution()),
                            tz_seconds: this._encode(this._tzSeconds()),
                            timestamp: (new Date).getTime()
                        }
                    },
                    _page() {
                        try {
                            const e = document.querySelector("meta[name=octolytics-location]");
                            return e instanceof HTMLMetaElement ? document.location.origin + e.content : document.location.href
                        } catch (e) {}
                    },
                    _title() {
                        try {
                            return document.title
                        } catch (e) {}
                    },
                    _referrer() {
                        let e = "";
                        try {
                            e = window.top.document.referrer
                        } catch (t) {
                            if (window.parent) try {
                                e = window.parent.document.referrer
                            } catch (t) {}
                        }
                        return "" === e && (e = document.referrer), e
                    },
                    _agent() {
                        try {
                            return navigator.userAgent
                        } catch (e) {}
                    },
                    _screenResolution() {
                        try {
                            return `${screen.width}x${screen.height}`
                        } catch (e) {
                            return "unknown"
                        }
                    },
                    _pixelRatio: () => window.devicePixelRatio,
                    _browserResolution() {
                        let e = 0,
                            t = 0;
                        try {
                            return "number" == typeof window.innerWidth ? (t = window.innerWidth, e = window.innerHeight) : null != document.documentElement && null != document.documentElement.clientWidth ? (t = document.documentElement.clientWidth, e = document.documentElement.clientHeight) : null != document.body && null != document.body.clientWidth && (t = document.body.clientWidth, e = document.body.clientHeight), `${t}x${e}`
                        } catch (n) {
                            return "unknown"
                        }
                    },
                    _tzSeconds() {
                        try {
                            return -60 * (new Date).getTimezoneOffset()
                        } catch (e) {
                            return ""
                        }
                    },
                    _encodeObject(e, t) {
                        const n = [];
                        if (Array.isArray(t))
                            for (const o of t) n.push(this._encodeObject(e + "[]", o));
                        else if ("object" == typeof t)
                            for (const o in t) n.push(this._encodeObject(`${e}[${o}]`, t[o]));
                        else n.push(`${e}=${this._encode(t)}`);
                        return n.join("&")
                    },
                    _actor() {
                        let e, t, n;
                        const o = [],
                            s = this.actor;
                        for (t in s) {
                            const r = s[t],
                                i = `dimensions[actor_${t}]`;
                            if (Array.isArray(r))
                                for (e = 0, n = r.length; e < n; e++) {
                                    const t = r[e];
                                    o.push(`${i}[]=${this._encode(t)}`)
                                } else o.push(`${i}=${this._encode(r)}`)
                        }
                        return o.join("&")
                    },
                    _clientId() {
                        let e = ke();
                        return "" === e && (e = Se()), e
                    },
                    _encode: e => null != e ? window.encodeURIComponent(e) : "",
                    applyQueuedCalls(e) {
                        const t = [];
                        for (const n of e) t.push(this.applyCall(n));
                        return t
                    },
                    applyCall(e) {
                        const t = e[0],
                            n = e.slice(1);
                        return "function" == typeof this[t] ? this[t](...n) : console && console.warn && console.warn(t + " is not a valid method")
                    },
                    applyMetaTags() {
                        const e = this.loadMetaTags();
                        return e.host && this.setHost(e.host), e.app && this.setApp(e.app), this._objectIsEmpty(e.actor) || this.setActor(e.actor), this.addDimensions(e.dimensions), this.addMeasures(e.measures), this.addContext(e.context)
                    },
                    loadMetaTags() {
                        let e, t;
                        const n = {
                                dimensions: {},
                                measures: {},
                                context: {},
                                actor: {}
                            },
                            o = document.getElementsByTagName("meta");
                        for (e = 0, t = o.length; e < t; e++) {
                            const t = o[e];
                            if (t.name && t.content) {
                                const e = t.name.match(this.octolyticsMetaTagName);
                                if (e) switch (e[1]) {
                                    case "host":
                                        n.host = t.content;
                                        break;
                                    case "app-id":
                                    case "app":
                                        n.app = t.content;
                                        break;
                                    case "dimension":
                                        this._addField(n.dimensions, e[2], t);
                                        break;
                                    case "measure":
                                        this._addField(n.measures, e[2], t);
                                        break;
                                    case "context":
                                        this._addField(n.context, e[2], t);
                                        break;
                                    case "actor":
                                        this._addField(n.actor, e[2], t)
                                }
                            }
                        }
                        const s = document.querySelector("meta[name=visitor-payload]");
                        if (s instanceof HTMLMetaElement) {
                            const e = JSON.parse(atob(s.content));
                            this.addDimensions(e)
                        }
                        return n
                    },
                    _addField(e, t, n) {
                        e[t] = n.content
                    },
                    _objectIsEmpty(e) {
                        let t;
                        for (t in e)
                            if (qn.call(e, t)) return !1;
                        return !0
                    },
                    octolyticsMetaTagName: /^octolytics-(host|app-id|app|dimension|measure|context|actor)-?(.*)/
                };
            if (window._octo) {
                if (window._octo.slice) {
                    const e = window._octo.slice(0);
                    window._octo = Mn, window._octo.applyQueuedCalls(e)
                }
            } else window._octo = Mn;
            a("submit", ".js-color-mode-keyboard-toggle", (async e => {
                e.preventDefault();
                const t = e.currentTarget,
                    n = new FormData(t),
                    o = n.get("color_mode"),
                    s = document.querySelector("appearance-form");
                s && s.dispatchEvent(new CustomEvent("color-modes-keyboard-toggle", {
                    bubbles: !0,
                    cancelable: !1,
                    detail: {
                        mode: o
                    }
                })), xt(o), fetch(t.action, {
                    method: t.method,
                    body: n,
                    headers: {
                        "X-Requested-With": "XMLHttpRequest"
                    }
                })
            })), a("click", ".errored.js-remove-error-state-on-click", (function({
                currentTarget: e
            }) {
                e.classList.remove("errored")
            })), m(".js-new-comment-form", (async function(e, t) {
                let n;
                ! function(e) {
                    const t = e.querySelector(".js-comment-form-error");
                    t instanceof HTMLElement && (t.hidden = !0)
                }(e);
                try {
                    n = await t.json()
                } catch (r) {
                    ! function(e, t) {
                        let n = "You can't comment at this time";
                        if (t.response && 422 === t.response.status) {
                            const e = t.response.json;
                            e.errors && (Array.isArray(e.errors) ? n += " — your comment " + e.errors.join(", ") : n = e.errors)
                        }
                        n += ". ";
                        const o = e.querySelector(".js-comment-form-error");
                        if (o instanceof HTMLElement) {
                            o.textContent = n, o.hidden = !1;
                            const e = o.closest("div.form-group.js-remove-error-state-on-click");
                            e && e.classList.add("errored")
                        }
                    }(e, r)
                }
                if (!n) return;
                e.reset();
                for (const i of e.querySelectorAll(".js-resettable-field")) Z(i, i.getAttribute("data-reset-value") || "");
                const o = e.querySelector(".js-write-tab");
                o instanceof HTMLElement && o.click();
                const s = n.json.updateContent;
                for (const i in s) {
                    const e = s[i],
                        t = document.querySelector(i);
                    t instanceof HTMLElement ? Te(t, e) : console.warn(`couldn't find ${i} for immediate update`)
                }
                h(e, "comment:success")
            }));

            function Cn(e, t) {
                const n = e.closest(".js-write-bucket");
                n && n.classList.toggle("focused", t)
            }

            function Hn(e) {
                const t = e.currentTarget;
                t instanceof Element && Cn(t, !1)
            }
            i(".js-comment-and-button", {
                constructor: HTMLButtonElement,
                initialize(e) {
                    const t = e.form.querySelector(".js-comment-field"),
                        n = (e => {
                            let t;
                            return n => {
                                const o = n.currentTarget.value.trim();
                                o !== t && (t = o, ((e, t) => {
                                    const n = e.querySelector(".js-form-action-text") || e;
                                    n.textContent = t ? e.getAttribute("data-comment-text") : n.getAttribute("data-default-action-text")
                                })(e, Boolean(o)))
                            }
                        })(e);
                    return {
                        add() {
                            t.addEventListener("input", n), t.addEventListener("change", n)
                        },
                        remove() {
                            t.removeEventListener("input", n), t.removeEventListener("change", n)
                        }
                    }
                }
            }), ie(".js-comment-field", (function(e) {
                Cn(e, !0), e.addEventListener("blur", Hn, {
                    once: !0
                })
            }));
            class PNGScanner {
                constructor(e) {
                    this.dataview = new DataView(e), this.pos = 0
                }
                static fromFile(e) {
                    return new Promise((function(t, n) {
                        const o = new FileReader;
                        o.onload = function() {
                            t(new PNGScanner(o.result))
                        }, o.onerror = function() {
                            n(o.error)
                        }, o.readAsArrayBuffer(e)
                    }))
                }
                advance(e) {
                    this.pos += e
                }
                readInt(e) {
                    const t = this,
                        n = function() {
                            switch (e) {
                                case 1:
                                    return t.dataview.getUint8(t.pos);
                                case 2:
                                    return t.dataview.getUint16(t.pos);
                                case 4:
                                    return t.dataview.getUint32(t.pos);
                                default:
                                    throw new Error("bytes parameter must be 1, 2 or 4")
                            }
                        }();
                    return this.advance(e), n
                }
                readChar() {
                    return this.readInt(1)
                }
                readShort() {
                    return this.readInt(2)
                }
                readLong() {
                    return this.readInt(4)
                }
                readString(e) {
                    const t = [];
                    for (let n = 0; n < e; n++) t.push(String.fromCharCode(this.readChar()));
                    return t.join("")
                }
                scan(e) {
                    if (2303741511 !== this.readLong()) throw new Error("invalid PNG");
                    for (this.advance(4);;) {
                        const t = this.readLong(),
                            n = this.readString(4),
                            o = this.pos + t + 4;
                        if (!1 === e.call(this, n, t) || "IEND" === n) break;
                        this.pos = o
                    }
                }
            }
            i(".js-paste-markdown", {
                constructor: HTMLElement,
                subscribe: y
            });
            const _n = new WeakMap;

            function Pn(e) {
                return ["video/mp4", "video/quicktime"].includes(e.file.type)
            }

            function Rn(e) {
                if (Pn(e)) return `\nUploading ${e.file.name}…\n`;
                return `${e.isImage()?"!":""}[Uploading ${e.file.name}…]()`
            }

            function In(e) {
                e.target.closest("form").querySelector(".btn-primary").disabled = !0
            }

            function Dn(e) {
                e.target.closest("form").querySelector(".btn-primary").disabled = !1
            }

            function Fn(e) {
                const t = Rn(e);
                return Pn(e) ? `\n${t}\n` : t + "\n"
            }

            function $n(e) {
                const t = e.currentTarget.querySelector(".js-comment-field"),
                    n = (o = e.detail.attachment, _n.get(o) || Fn(o));
                var o;
                if (t) t.setCustomValidity(""), Ae(t, n, "");
                else {
                    const t = xe(e.currentTarget.querySelector(".js-code-editor")).editor.getSearchCursor(n);
                    t.findNext(), t.replace("")
                }
            }

            function Nn(e, t, n, o) {
                const s = (o || n.currentTarget).querySelector(".js-comment-field"),
                    r = Rn(n.detail.attachment),
                    {
                        batch: i
                    } = n.detail;
                if (s) {
                    const o = s.value.substring(s.selectionStart, s.selectionEnd);
                    if ("uploading" === e) {
                        let e;
                        e = o.length ? Ae(s, o, r) : qe(s, r, {
                            appendNewline: !0
                        }), _n.set(n.detail.attachment, e)
                    } else Ae(s, r, t);
                    i.isFinished() ? Dn(n) : In(n)
                } else {
                    const s = xe((o || n.currentTarget).querySelector(".js-code-editor")).editor;
                    if ("uploading" === e)
                        if (s.getSelection().length) s.replaceSelection(r);
                        else {
                            const e = s.getCursor(),
                                t = Fn(n.detail.attachment);
                            s.replaceRange(t, e)
                        }
                    else {
                        const e = s.getSearchCursor(r);
                        e.findNext(), e.replace(t)
                    }
                    i.isFinished() ? Dn(n) : In(n)
                }
            }

            function On(e) {
                const t = e.closest(".js-previewable-comment-form"),
                    n = e.classList.contains("js-preview-tab");
                if (n) {
                    const e = t.querySelector(".js-write-bucket"),
                        n = t.querySelector(".js-preview-body");
                    e.clientHeight > 0 && (n.style.minHeight = e.clientHeight + "px")
                }
                t.classList.toggle("preview-selected", n), t.classList.toggle("write-selected", !n);
                const o = t.querySelector('.tabnav-tab.selected, .tabnav-tab[aria-selected="true"]');
                o.setAttribute("aria-selected", "false"), o.classList.remove("selected"), e.classList.add("selected"), e.setAttribute("aria-selected", "true");
                const s = t.querySelector(".js-write-tab");
                return n ? s.setAttribute("data-hotkey", "Control+P,Meta+Shift+p") : s.removeAttribute("data-hotkey"), t
            }

            function Bn(e) {
                var t, n, o, s, r, i, a, c, l;
                const u = e.querySelector(".js-comment-field").value,
                    d = null === (t = e.querySelector(".js-path")) || void 0 === t ? void 0 : t.value,
                    m = null === (n = e.querySelector(".js-line-number")) || void 0 === n ? void 0 : n.value,
                    h = null === (o = e.querySelector(".js-start-line-number")) || void 0 === o ? void 0 : o.value,
                    f = null === (s = e.querySelector(".js-side")) || void 0 === s ? void 0 : s.value,
                    p = null === (r = e.querySelector(".js-start-side")) || void 0 === r ? void 0 : r.value,
                    g = null === (i = e.querySelector(".js-start-commit-oid")) || void 0 === i ? void 0 : i.value,
                    b = null === (a = e.querySelector(".js-end-commit-oid")) || void 0 === a ? void 0 : a.value,
                    y = null === (c = e.querySelector(".js-base-commit-oid")) || void 0 === c ? void 0 : c.value,
                    v = null === (l = e.querySelector(".js-comment-id")) || void 0 === l ? void 0 : l.value,
                    w = new FormData;
                return w.append("text", u), w.append("authenticity_token", function(e) {
                    const t = e.querySelector(".js-data-preview-url-csrf"),
                        n = e.closest("form").elements.namedItem("authenticity_token");
                    if (t instanceof HTMLInputElement) return t.value;
                    if (n instanceof HTMLInputElement) return n.value;
                    throw new Error("Comment preview authenticity token not found")
                }(e)), d && w.append("path", d), m && w.append("line_number", m), h && w.append("start_line_number", h), f && w.append("side", f), p && w.append("start_side", p), g && w.append("start_commit_oid", g), b && w.append("end_commit_oid", b), y && w.append("base_commit_oid", y), v && w.append("comment_id", v), w
            }

            function Wn(e) {
                const t = e.getAttribute("data-preview-url"),
                    n = Bn(e);
                return h(e, "preview:setup", {
                    data: n
                }), Un(t, n)
            }
            a("upload:setup", ".js-upload-markdown-image", (function(e) {
                Nn("uploading", "", e)
            })), a("upload:complete", ".js-upload-markdown-image", (async function(e) {
                const {
                    attachment: t
                } = e.detail, n = e.currentTarget;
                let o;
                o = t.isImage() ? await async function(e) {
                    const t = await async function(e) {
                            var t;
                            const n = {
                                width: 0,
                                height: 0,
                                ppi: 0
                            };
                            try {
                                return null !== (t = await async function(e) {
                                    if ("image/png" !== e.type) return null;
                                    const t = e.slice(0, 10240, e.type),
                                        n = await PNGScanner.fromFile(t),
                                        o = {
                                            width: 0,
                                            height: 0,
                                            ppi: 1
                                        };
                                    return n.scan((function(e) {
                                        switch (e) {
                                            case "IHDR":
                                                return o.width = this.readLong(), o.height = this.readLong(), !0;
                                            case "pHYs":
                                                {
                                                    const e = this.readLong(),
                                                        t = this.readLong();
                                                    let n;
                                                    return 1 === this.readChar() && (n = .0254),
                                                    n && (o.ppi = Math.round((e + t) / 2 * n)),
                                                    !1
                                                }
                                            case "IDAT":
                                                return !1
                                        }
                                        return !0
                                    })), o
                                }(e)) && void 0 !== t ? t : n
                            } catch (o) {
                                return n
                            }
                        }(e.file),
                        n = (s = e.file.name, function(e) {
                            return e.replace(/[[\]\\"<>&]/g, ".").replace(/\.{2,}/g, ".").replace(/^\.|\.$/gi, "")
                        }(s).replace(/\.[^.]+$/, "").replace(/\./g, " ")),
                        o = e.href;
                    var s;
                    if (144 === t.ppi) {
                        return `<img width="${Math.round(t.width/2)}" alt="${n}" src="${o}">`
                    }
                    return `![${n}](${o})`
                }(t) : Pn(t) ? function(e) {
                    return `\n${e.href}\n`
                }(t) : function(e) {
                    return `[${e.file.name}](${e.href})`
                }(t), Nn("", o, e, n)
            })), a("upload:error", ".js-upload-markdown-image", (function(e) {
                $n(e);
                const {
                    batch: t
                } = e.detail;
                t.isFinished() ? Dn(e) : In(e)
            })), a("upload:invalid", ".js-upload-markdown-image", (function(e) {
                $n(e);
                const {
                    batch: t
                } = e.detail;
                t.isFinished() ? Dn(e) : In(e)
            })), a("click", ".js-write-tab", (function(e) {
                const t = e.currentTarget,
                    n = t.closest(".js-previewable-comment-form");
                if (n instanceof v) return void setTimeout((() => {
                    n.querySelector(".js-comment-field").focus()
                }));
                const o = On(t);
                setTimeout((() => {
                    o.querySelector(".js-comment-field").focus()
                }));
                const s = n.querySelector("markdown-toolbar");
                s instanceof HTMLElement && (s.hidden = !1)
            })), a("click", ".js-preview-tab", (function(e) {
                const t = e.currentTarget,
                    n = t.closest(".js-previewable-comment-form");
                if (n instanceof v) return;
                const o = On(t);
                setTimeout((() => {
                    Xn(o)
                }));
                const s = n.querySelector("markdown-toolbar");
                s instanceof HTMLElement && (s.hidden = !0), e.stopPropagation(), e.preventDefault()
            })), a("tab-container-change", ".js-previewable-comment-form", (function(e) {
                const t = e.detail.relatedTarget,
                    n = t && t.classList.contains("js-preview-panel"),
                    o = e.currentTarget,
                    s = o.querySelector(".js-write-tab");
                if (n) {
                    const e = o.querySelector(".js-write-bucket"),
                        t = o.querySelector(".js-preview-body");
                    !t.hasAttribute("data-skip-sizing") && e.clientHeight > 0 && (t.style.minHeight = e.clientHeight + "px"), s.setAttribute("data-hotkey", "Control+P,Meta+Shift+p"), Xn(o);
                    const n = o.querySelector("markdown-toolbar");
                    n instanceof HTMLElement && (n.hidden = !0)
                } else {
                    s.removeAttribute("data-hotkey");
                    const e = o.querySelector("markdown-toolbar");
                    e instanceof HTMLElement && (e.hidden = !1)
                }
                o.classList.toggle("preview-selected", n), o.classList.toggle("write-selected", !n)
            })), a("preview:render", ".js-previewable-comment-form", (function(e) {
                const t = On(e.target.querySelector(".js-preview-tab"));
                setTimeout((() => {
                    Xn(t);
                    const e = t.querySelector("markdown-toolbar");
                    e instanceof HTMLElement && (e.hidden = !0)
                }))
            }));
            const Un = Ce((async function(e, t) {
                null == zn || zn.abort();
                const {
                    signal: n
                } = zn = new AbortController, o = await fetch(e, {
                    method: "post",
                    body: t,
                    signal: n
                });
                if (!o.ok) throw new Error("something went wrong");
                return o.text()
            }), {
                hash: function(e, t) {
                    const n = [...t.entries()].toString();
                    return `${e}:${n}`
                }
            });
            let zn = null;
            async function Xn(e) {
                const t = e.querySelector(".comment-body");
                t.innerHTML = "<p>Loading preview&hellip;</p>";
                try {
                    const n = await Wn(e);
                    t.innerHTML = n || "<p>Nothing to preview</p>"
                } catch (n) {
                    "AbortError" !== n.name && (t.innerHTML = "<p>Error rendering preview</p>")
                }
            }
            i(".js-preview-tab", (function(e) {
                e.addEventListener("mouseenter", (async () => {
                    const t = e.closest(".js-previewable-comment-form");
                    try {
                        await Wn(t)
                    } catch (n) {}
                }))
            })), Me("keydown", ".js-comment-field", (function(e) {
                const t = e.target;
                if ((e.ctrlKey || e.metaKey) && e.shiftKey && "P" === e.key.toUpperCase()) {
                    const n = t.closest(".js-previewable-comment-form");
                    n.classList.contains("write-selected") && (n instanceof v ? n.querySelector(".js-preview-tab").click() : (t.blur(), n.dispatchEvent(new CustomEvent("preview:render", {
                        bubbles: !0,
                        cancelable: !1
                    }))), e.preventDefault(), e.stopImmediatePropagation())
                }
            }));
            const Vn = /^(\+1|-1|:\+1?|:-1?)$/;

            function Kn(e) {
                const t = e.target,
                    n = t.value,
                    o = t.closest(".js-reaction-suggestion");
                if (o)
                    if ((e => {
                            let t = !1;
                            for (const n of e.split("\n")) {
                                const e = n.trim();
                                if (e && !e.startsWith(">")) {
                                    if (t && !1 === Vn.test(e)) return !1;
                                    !t && Vn.test(e) && (t = !0)
                                }
                            }
                            return t
                        })(n)) {
                        o.classList.remove("hide-reaction-suggestion"), o.classList.add("reaction-suggestion");
                        const e = o.getAttribute("data-reaction-markup");
                        o.setAttribute("data-reaction-suggestion-message", e)
                    } else Jn(o)
            }

            function Jn(e) {
                e.classList.remove("reaction-suggestion"), e.classList.add("hide-reaction-suggestion"), e.removeAttribute("data-reaction-suggestion-message")
            }
            a("focusout", "#new_comment_field", (function(e) {
                const t = e.currentTarget.closest(".js-reaction-suggestion");
                t && Jn(t)
            })), a("focusin", "#new_comment_field", (function(e) {
                Kn(e)
            })), Me("keyup", "#new_comment_field", (function(e) {
                Kn(e)
            })), a("navigation:keydown", ".js-commits-list-item", (function(e) {
                e.target instanceof Element && "c" === e.detail.hotkey && e.target.querySelector(".js-navigation-open").click()
            })), document.addEventListener("click", (function(e) {
                if (!(e.target instanceof Element)) return;
                const t = e.target.closest("a[data-confirm], input[type=submit][data-confirm], input[type=checkbox][data-confirm], button[data-confirm]");
                if (!t) return;
                const n = t.getAttribute("data-confirm");
                n && (t instanceof HTMLInputElement && t.hasAttribute("data-confirm-checked") && !t.checked || confirm(n) || (e.stopImmediatePropagation(), e.preventDefault()))
            }), !0), he(".js-company-name-input", (function(e) {
                const t = e.target,
                    n = t.form,
                    o = n.querySelectorAll(".js-company-name-text");
                if (0 === o.length) return;
                const s = n.querySelector(".js-corp-tos-link"),
                    r = n.querySelector(".js-tos-link");
                r && (r.classList.add("d-none"), r.setAttribute("aria-hidden", "true"), s && (s.classList.remove("d-none"), s.setAttribute("aria-hidden", "false")));
                for (const i of o)
                    if (t.value) {
                        if (i.hasAttribute("data-wording")) {
                            const e = i.getAttribute("data-wording");
                            i.textContent = ` ${e} ${t.value}`
                        } else i.textContent = t.value
                    } else i.textContent = ""
            })), i(".js-company-owned:not(:checked)", {
                constructor: HTMLInputElement,
                add(e) {
                    const t = e.form.querySelector(".js-company-name-input"),
                        n = document.querySelector(".js-company-name-text"),
                        o = document.querySelector(".js-corp-tos-link"),
                        s = document.querySelector(".js-tos-link");
                    e.getAttribute("data-optional") && t.removeAttribute("required"), Z(t, ""), s.classList.remove("d-none"), s.setAttribute("aria-hidden", "false"), o.classList.add("d-none"), o.setAttribute("aria-hidden", "true"), n.textContent = ""
                }
            }), i(".js-company-owned:checked", {
                constructor: HTMLInputElement,
                add(e) {
                    const t = e.form.querySelector(".js-company-name-input");
                    t && (t.setAttribute("required", ""), h(t, "focus"), h(t, "input"))
                }
            }), i(".js-company-owned-autoselect", {
                constructor: HTMLInputElement,
                add(e) {
                    const t = e;

                    function n() {
                        if (t.checked && t.form) {
                            const e = t.form.querySelector(".js-company-owned");
                            Z(e, !0)
                        }
                    }
                    t.addEventListener("change", n), n()
                }
            }), i(".js-content-attachment .max--md", (function(e) {
                const t = e.querySelector(".markdown-body");
                var n;
                (t.clientHeight < 188 || "" === ((n = t).textContent || "").trim() && 1 === (n.querySelectorAll("img") || []).length) && (e.classList.remove("max--md"), e.querySelector(".Details-content--closed").hidden = !0, e.querySelector(".Details-content--open").hidden = !0)
            })), a("click", ".js-hide-content-attachment", (function(e) {
                e.preventDefault();
                const t = e.currentTarget,
                    n = t.closest(".js-content-attachment"),
                    o = t.closest("[data-unfurl-hide-url]"),
                    s = o.getAttribute("data-unfurl-hide-url"),
                    r = o.querySelector(".js-data-unfurl-hide-url-csrf"),
                    i = t.getAttribute("data-id"),
                    a = new XMLHttpRequest;
                a.onload = function() {
                    a.status >= 200 && a.status < 300 && n.remove()
                }, a.open("POST", s);
                const c = new FormData;
                c.append("id", i), c.append("authenticity_token", r.value), a.send(c)
            }));
            let Gn = null;

            function Qn({
                currentTarget: e
            }) {
                const t = e;
                if (t.hasAttribute("open")) {
                    const e = t.querySelector("[autofocus]");
                    e && e.focus()
                } else {
                    const e = t.querySelector("summary");
                    e && e.focus()
                }
            }

            function Yn({
                currentTarget: e
            }) {
                const t = e;
                t.hasAttribute("open") ? (Gn && Gn !== t && Gn.removeAttribute("open"), Gn = t) : t === Gn && (Gn = null)
            }

            function Zn({
                currentTarget: e
            }) {
                if (!(e instanceof Element)) return;
                const t = e.closest("details"),
                    n = t.getAttribute("data-deferred-details-content-url");
                t.removeAttribute("data-deferred-details-content-url");
                t.querySelector("include-fragment, poll-include-fragment").src = n
            }
            async function eo({
                currentTarget: e
            }) {
                const t = e,
                    n = t.hasAttribute("open");
                h(t, n ? "menu:activate" : "menu:deactivate"), await ae(), h(t, n ? "menu:activated" : "menu:deactivated")
            }
            document.addEventListener("keydown", (function(e) {
                !e.defaultPrevented && "Escape" === e.key && Gn && Gn.removeAttribute("open")
            })), i(".js-dropdown-details", {
                subscribe: e => He(ce(e, "toggle", Yn), ce(e, "toggle", Qn))
            }), i("[data-deferred-details-content-url]:not([data-details-no-preload-on-hover])", {
                subscribe: e => {
                    const t = e.querySelector("summary");
                    return ce(t, "mouseenter", Zn)
                }
            }), i("[data-deferred-details-content-url]", {
                subscribe: e => ce(e, "toggle", Zn)
            }), a("click", "[data-toggle-for]", (function(e) {
                const t = e.currentTarget.getAttribute("data-toggle-for") || "",
                    n = document.getElementById(t);
                n && (n.hasAttribute("open") ? n.removeAttribute("open") : n.setAttribute("open", "open"))
            })), fe((function({
                target: e
            }) {
                if (!e || e.closest("summary")) return;
                let t = e.parentElement;
                for (; t;) t = t.closest("details"), t && (t.hasAttribute("open") || t.setAttribute("open", ""), t = t.parentElement)
            })), a("details-dialog-close", "[data-disable-dialog-dismiss]", (function(e) {
                e.preventDefault()
            })), i("details.select-menu details-menu include-fragment", (function(e) {
                const t = e.closest("details");
                t && (e.addEventListener("loadstart", (function() {
                    t.classList.add("is-loading"), t.classList.remove("has-error")
                })), e.addEventListener("error", (function() {
                    t.classList.add("has-error")
                })), e.addEventListener("loadend", (function() {
                    t.classList.remove("is-loading");
                    const e = t.querySelector(".js-filterable-field");
                    e && h(e, "filterable:change")
                })))
            })), i("details details-menu .js-filterable-field", {
                constructor: HTMLInputElement,
                add(e) {
                    const t = e.closest("details");
                    t.addEventListener("toggle", (function() {
                        t.hasAttribute("open") || (e.value = "", h(e, "filterable:change"))
                    }))
                }
            }), i("details-menu[role=menu] [role=menu]", (e => {
                const t = e.closest("details-menu[role]");
                t && t !== e && t.removeAttribute("role")
            })), i("details details-menu remote-input input", {
                constructor: HTMLInputElement,
                add(e) {
                    const t = e.closest("details");
                    t.addEventListener("toggle", (function() {
                        t.hasAttribute("open") || (e.value = "")
                    }))
                }
            }), i("form details-menu", (e => {
                const t = e.closest("form");
                t.addEventListener("reset", (() => {
                    setTimeout((() => function(e) {
                        const t = e.querySelectorAll("details-menu [role=menuitemradio] input[type=radio]:checked");
                        for (const n of t) h(n, "change")
                    }(t)), 0)
                }))
            })), Me("keypress", "details-menu .js-filterable-field, details-menu filter-input input", (e => {
                if ("Enter" === e.key) {
                    const t = e.currentTarget.closest("details-menu").querySelector('[role^="menuitem"]:not([hidden])');
                    t instanceof HTMLElement && t.click(), e.preventDefault()
                }
            })), a("details-menu-selected", "details-menu", (e => {
                const t = e.currentTarget.querySelector(".js-filterable-field");
                t instanceof HTMLInputElement && t.value && t.focus()
            }), {
                capture: !0
            }), a("details-menu-selected", "[data-menu-input]", (e => {
                if (!(e.target instanceof Element)) return;
                const t = e.target.getAttribute("data-menu-input"),
                    n = document.getElementById(t);
                (n instanceof HTMLInputElement || n instanceof HTMLTextAreaElement) && (n.value = e.detail.relatedTarget.value)
            }), {
                capture: !0
            }), i("details-menu remote-input", {
                constructor: w,
                initialize(e) {
                    const t = document.getElementById(e.getAttribute("aria-owns") || "");
                    if (!t) return;
                    let n = null;
                    e.addEventListener("load", (() => {
                        n = document.activeElement && t.contains(document.activeElement) && document.activeElement.id ? document.activeElement.id : null
                    })), e.addEventListener("loadend", (() => {
                        if (n) {
                            const o = t.querySelector("#" + n) || t.querySelector('[role^="menu"]');
                            o instanceof HTMLElement ? o.focus() : e.input && e.input.focus()
                        }
                    }))
                }
            }), a("details-menu-selected", "details-menu[data-menu-max-options]", (e => {
                const t = +e.currentTarget.getAttribute("data-menu-max-options") === e.currentTarget.querySelectorAll('[role="menuitemcheckbox"][aria-checked="true"]').length;
                e.currentTarget.querySelector("[data-menu-max-options-warning]").hidden = !t;
                for (const n of e.currentTarget.querySelectorAll('[role="menuitemcheckbox"] input')) n.disabled = t && !n.checked
            }), {
                capture: !0
            }), i("details > details-menu", {
                subscribe(e) {
                    const t = e.closest("details");
                    return ce(t, "toggle", eo)
                }
            });
            const to = new WeakMap,
                no = ["input[type=submit][data-disable-with]", "button[data-disable-with]"].join(", ");

            function oo(e, t) {
                e instanceof HTMLInputElement ? e.value = t : e.innerHTML = t
            }

            function so(e) {
                for (const t of e.querySelectorAll(no)) {
                    const n = to.get(t);
                    null != n && (oo(t, n), t.hasAttribute("data-disable-invalid") && !e.checkValidity() || (t.disabled = !1), to.delete(t))
                }
            }

            function ro(e) {
                return Array.from(e.types).indexOf("Files") >= 0
            }
            a("submit", "form", (function(e) {
                for (const n of e.currentTarget.querySelectorAll(no)) {
                    to.set(n, (t = n) instanceof HTMLInputElement ? t.value || "Submit" : t.innerHTML || "");
                    const e = n.getAttribute("data-disable-with");
                    e && oo(n, e), n.disabled = !0
                }
                var t
            }), {
                capture: !0
            }), a("deprecatedAjaxComplete", "form", (function({
                currentTarget: e,
                target: t
            }) {
                e === t && so(e)
            })), j(so), i(".js-document-dropzone", {
                constructor: HTMLElement,
                add(e) {
                    document.body.addEventListener("dragstart", ho), document.body.addEventListener("dragend", fo), document.body.addEventListener("dragenter", ao), document.body.addEventListener("dragover", ao), document.body.addEventListener("dragleave", co), e.addEventListener("drop", lo)
                },
                remove(e) {
                    document.body.removeEventListener("dragstart", ho), document.body.removeEventListener("dragend", fo), document.body.removeEventListener("dragenter", ao), document.body.removeEventListener("dragover", ao), document.body.removeEventListener("dragleave", co), e.removeEventListener("drop", lo)
                }
            });
            let io = null;

            function ao(e) {
                if (mo) return;
                const t = e.currentTarget;
                io && window.clearTimeout(io), io = window.setTimeout((() => t.classList.remove("dragover")), 200);
                const n = e.dataTransfer;
                n && ro(n) && (n.dropEffect = "copy", t.classList.add("dragover"), e.stopPropagation(), e.preventDefault())
            }

            function co(e) {
                if (e.target instanceof Element && e.target.classList.contains("js-document-dropzone")) {
                    e.currentTarget.classList.remove("dragover")
                }
            }

            function lo(e) {
                const t = e.currentTarget;
                t.classList.remove("dragover"), document.body.classList.remove("dragover");
                const n = e.dataTransfer;
                n && ro(n) && (h(t, "document:drop", {
                    transfer: n
                }), e.stopPropagation(), e.preventDefault())
            }
            let uo, mo = !1;

            function ho() {
                mo = !0
            }

            function fo() {
                mo = !1
            }

            function po(e, t) {
                const n = document.querySelector('.js-site-favicon[type="image/svg+xml"]'),
                    o = document.querySelector('.js-site-favicon[type="image/png"]');
                t || (t = "light");
                const s = "light" === t ? "" : "-dark";
                if (n && o)
                    if (null == uo && (uo = n.href), e) {
                        e = `${e=e.substr(0,e.lastIndexOf("."))}${s}.svg`, n.href = e;
                        const t = n.href.substr(0, n.href.lastIndexOf("."));
                        o.href = t + ".png"
                    } else {
                        const e = n.href.indexOf("-dark.svg"),
                            t = n.href.substr(0, -1 !== e ? e : n.href.lastIndexOf("."));
                        n.href = `${t}${s}.svg`, o.href = `${t}${s}.png`
                    }
            }

            function go() {
                return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
            }
            a("submit", "form.js-encrypt-submit", (async function(e) {
                const n = e.currentTarget;
                if (e.defaultPrevented || !n.checkValidity()) return;
                const o = n.elements.namedItem("secret_value");
                if (o.disabled = !0, !o.value) return;
                e.preventDefault();
                const s = function(e) {
                    const t = atob(e).split("").map((e => e.charCodeAt(0)));
                    return Uint8Array.from(t)
                }(n.getAttribute("data-public-key"));
                n.elements.namedItem("encrypted_value").value = function(e) {
                    let t = "";
                    for (const n of e) t += String.fromCharCode(n);
                    return btoa(t)
                }(await async function(e, n) {
                    const o = (new TextEncoder).encode(n),
                        {
                            seal: s
                        } = await t.import("./chunk-tweetsodium.js");
                    return s(o, e)
                }(s, o.value)), n.submit()
            })), i("[data-favicon-override]", {
                add(e) {
                    const t = e.getAttribute("data-favicon-override");
                    setTimeout((() => po(t, go() ? "dark" : "light")))
                },
                remove() {
                    null != uo && po(uo, go() ? "dark" : "light")
                }
            }), go() && po(void 0, "dark"), window.matchMedia("(prefers-color-scheme: dark)").addListener((() => {
                po(void 0, go() ? "dark" : "light")
            })), i(".js-feature-preview-indicator-container", (e => {
                !async function(e) {
                    const t = e.getAttribute("data-feature-preview-indicator-src"),
                        n = await async function(e) {
                            try {
                                const t = await fetch(e, {
                                    headers: {
                                        Accept: "application/json"
                                    }
                                });
                                if (!t.ok) return !1;
                                return (await t.json()).show_indicator
                            } catch (t) {
                                return !1
                            }
                        }(t),
                        o = e.querySelectorAll(".js-feature-preview-indicator");
                    for (const s of o) s.hidden = !n
                }(e)
            })), a("click", "[data-feature-preview-trigger-url]", (async e => {
                const t = e.currentTarget,
                    n = t.getAttribute("data-feature-preview-trigger-url"),
                    o = await _e({
                        content: G(document, n),
                        dialogClass: "feature-preview-dialog"
                    }),
                    s = t.getAttribute("data-feature-preview-close-details"),
                    r = t.getAttribute("data-feature-preview-close-hmac");
                o.addEventListener("dialog:remove", (() => {
                    je({
                        hydroEventPayload: s,
                        hydroEventHmac: r
                    }, !0)
                }));
                const i = document.querySelectorAll(".js-feature-preview-indicator");
                for (const a of i) a.hidden = !0
            })), m(".js-feature-preview-unenroll", (async (e, t) => {
                await t.text();
                const n = e.querySelector(".js-feature-preview-slug").value;
                h(e, "feature-preview-unenroll:" + n)
            })), m(".js-feature-preview-enroll", (async (e, t) => {
                await t.text();
                const n = e.querySelector(".js-feature-preview-slug").value;
                h(e, "feature-preview-enroll:" + n)
            }));
            class AttachmentUpload {
                constructor(e, t) {
                    this.attachment = e, this.policy = t
                }
                async process(e) {
                    var t, n, o, s;
                    const r = window.performance.now(),
                        i = new Headers(this.policy.header || {}),
                        a = new XMLHttpRequest;
                    a.open("POST", this.policy.upload_url, !0);
                    for (const [l, u] of i) a.setRequestHeader(l, u);
                    a.onloadstart = () => {
                        e.attachmentUploadDidStart(this.attachment, this.policy)
                    }, a.upload.onprogress = t => {
                        if (t.lengthComputable) {
                            const n = Math.round(t.loaded / t.total * 100);
                            e.attachmentUploadDidProgress(this.attachment, n)
                        }
                    }, await
                    function(e, t) {
                        return new Promise(((n, o) => {
                            e.onload = () => n(e), e.onerror = o, e.send(t)
                        }))
                    }(a, function(e, t) {
                        const n = new FormData;
                        t.same_origin && n.append("authenticity_token", t.upload_authenticity_token);
                        for (const o in t.form) n.append(o, t.form[o]);
                        return n.append("file", e.file), n
                    }(this.attachment, this.policy)), 204 === a.status ? (bo(this.policy), e.attachmentUploadDidComplete(this.attachment, this.policy, {})) : 201 === a.status ? (bo(this.policy), e.attachmentUploadDidComplete(this.attachment, this.policy, JSON.parse(a.responseText))) : e.attachmentUploadDidError(this.attachment, {
                        status: a.status,
                        body: a.responseText
                    });
                    const c = {
                        duration: window.performance.now() - r,
                        size: null === (n = null === (t = this.attachment) || void 0 === t ? void 0 : t.file) || void 0 === n ? void 0 : n.size,
                        fileType: null === (s = null === (o = this.attachment) || void 0 === o ? void 0 : o.file) || void 0 === s ? void 0 : s.type,
                        success: 204 === a.status || 201 === a.status
                    };
                    je({
                        uploadTiming: c
                    }, !0)
                }
            }

            function bo(e) {
                const t = "string" == typeof e.asset_upload_url ? e.asset_upload_url : null,
                    n = "string" == typeof e.asset_upload_authenticity_token ? e.asset_upload_authenticity_token : null;
                if (!t || !n) return;
                const o = new FormData;
                o.append("authenticity_token", n), fetch(t, {
                    method: "PUT",
                    body: o,
                    credentials: "same-origin",
                    headers: {
                        Accept: "application/json",
                        "X-Requested-With": "XMLHttpRequest"
                    }
                })
            }
            async function yo(e, t) {
                const n = function(e, t) {
                    return {
                        attachmentUploadDidStart(n, o) {
                            n.saving(0), Eo(t, "is-uploading"), h(t, "upload:start", {
                                batch: e,
                                attachment: n,
                                policy: o
                            })
                        },
                        attachmentUploadDidProgress(n, o) {
                            n.saving(o), h(t, "upload:progress", {
                                batch: e,
                                attachment: n
                            })
                        },
                        attachmentUploadDidComplete(n, o, s) {
                            n.saved(function(e, t) {
                                const n = (null == e.id ? null : String(e.id)) || (null == t.asset.id ? null : String(t.asset.id)),
                                    o = ("string" == typeof e.href ? e.href : null) || ("string" == typeof t.asset.href ? t.asset.href : null);
                                return {
                                    id: n,
                                    href: o,
                                    name: t.asset.name
                                }
                            }(s, o)), h(t, "upload:complete", {
                                batch: e,
                                attachment: n
                            }), Eo(t, "is-default")
                        },
                        attachmentUploadDidError(n, o) {
                            h(t, "upload:error", {
                                batch: e,
                                attachment: n
                            });
                            const {
                                state: s
                            } = wo(o);
                            Eo(t, s)
                        }
                    }
                }(e, t);
                for (const s of e.attachments) {
                    const r = await vo(e, s, t);
                    if (!r) return;
                    try {
                        const e = new AttachmentUpload(s, r);
                        await e.process(n)
                    } catch (o) {
                        return h(t, "upload:error", {
                            batch: e,
                            attachment: s
                        }), void Eo(t, "is-failed")
                    }
                }
            }
            async function vo(e, t, n) {
                const o = function(e, t) {
                        const n = t.querySelector(".js-data-upload-policy-url-csrf").value,
                            o = t.getAttribute("data-upload-repository-id"),
                            s = t.getAttribute("data-subject-type"),
                            r = t.getAttribute("data-subject-param"),
                            i = e.file,
                            a = new FormData;
                        a.append("name", i.name), a.append("size", String(i.size)), a.append("content_type", i.type), a.append("authenticity_token", n), s && a.append("subject_type", s);
                        r && a.append("subject", r);
                        o && a.append("repository_id", o);
                        e.directory && a.append("directory", e.directory);
                        return a
                    }(t, n),
                    s = [];
                h(n, "upload:setup", {
                    batch: e,
                    attachment: t,
                    form: o,
                    preprocess: s
                });
                try {
                    await Promise.all(s);
                    const r = await fetch(function(e, t) {
                        return new Request(t.getAttribute("data-upload-policy-url"), {
                            method: "POST",
                            body: e,
                            credentials: "same-origin",
                            headers: {
                                Accept: "application/json",
                                "X-Requested-With": "XMLHttpRequest"
                            }
                        })
                    }(o, n));
                    if (r.ok) return await r.json();
                    h(n, "upload:invalid", {
                        batch: e,
                        attachment: t
                    });
                    const i = await r.text(),
                        a = r.status,
                        {
                            state: c,
                            messaging: l
                        } = wo({
                            status: a,
                            body: i
                        }, t.file);
                    Eo(n, c, l)
                } catch (r) {
                    h(n, "upload:invalid", {
                        batch: e,
                        attachment: t
                    }), Eo(n, "is-failed")
                }
                return null
            }

            function wo(e, t) {
                if (400 === e.status) return {
                    state: "is-bad-file"
                };
                if (422 !== e.status) return {
                    state: "is-failed"
                };
                const n = JSON.parse(e.body);
                if (!n || !n.errors) return {
                    state: "is-failed"
                };
                for (const o of n.errors) switch (o.field) {
                    case "size":
                        {
                            const e = t ? t.size : null;
                            return null != e && 0 === e ? {
                                state: "is-empty"
                            } : {
                                state: "is-too-big",
                                messaging: {
                                    message: jo(o.message),
                                    target: ".js-upload-too-big"
                                }
                            }
                        }
                    case "file_count":
                        return {
                            state: "is-too-many"
                        };
                    case "width":
                    case "height":
                        return {
                            state: "is-bad-dimensions"
                        };
                    case "name":
                        return "already_exists" === o.code ? {
                            state: "is-duplicate-filename"
                        } : {
                            state: "is-bad-file"
                        };
                    case "content_type":
                        return {
                            state: "is-bad-file"
                        };
                    case "uploader_id":
                        return {
                            state: "is-bad-permissions"
                        };
                    case "repository_id":
                        return {
                            state: "is-repository-required"
                        };
                    case "format":
                        return {
                            state: "is-bad-format"
                        }
                }
                return {
                    state: "is-failed"
                }
            }
            const jo = e => e.startsWith("size") ? e.substring(5) : e,
                Lo = ["is-default", "is-uploading", "is-bad-file", "is-duplicate-filename", "is-too-big", "is-too-many", "is-hidden-file", "is-failed", "is-bad-dimensions", "is-empty", "is-bad-permissions", "is-repository-required", "is-bad-format"];

            function Eo(e, t, n) {
                if (n) {
                    const {
                        message: t,
                        target: o
                    } = n, s = e.querySelector(o);
                    s && (s.innerHTML = t)
                }
                e.classList.remove(...Lo), e.classList.add(t)
            }
            class Batch {
                constructor(e) {
                    this.attachments = e, this.size = this.attachments.length, this.total = ko(this.attachments, (e => e.file.size))
                }
                percent() {
                    const e = ko(this.attachments, (e => e.file.size * e.percent / 100));
                    return Math.round(e / this.total * 100)
                }
                uploaded() {
                    return ko(this.attachments, (e => e.isSaved() ? 1 : 0))
                }
                isFinished() {
                    return this.attachments.every((e => e.isSaved()))
                }
            }

            function ko(e, t) {
                return e.reduce(((e, n) => e + t(n)), 0)
            }
            i("file-attachment[hover]", {
                add(e) {
                    e.classList.add("dragover")
                },
                remove(e) {
                    e.classList.remove("dragover")
                }
            }), a("file-attachment-accept", "file-attachment", (function(e) {
                const {
                    attachments: t
                } = e.detail;
                0 === t.length && (Eo(e.currentTarget, "is-hidden-file"), e.preventDefault())
            })), a("file-attachment-accepted", "file-attachment", (function(e) {
                const t = e.currentTarget.querySelector(".drag-and-drop");
                if (t && t.hidden) return;
                const {
                    attachments: n
                } = e.detail;
                yo(new Batch(n), e.currentTarget)
            }));
            let So = 0;

            function To(e) {
                return Array.from(e.types).indexOf("Files") >= 0
            }

            function Ao(e) {
                const t = e.dataTransfer;
                t && To(t) && e.preventDefault()
            }

            function xo(e) {
                const t = e.dataTransfer;
                t && To(t) && e.preventDefault()
            }

            function qo({
                currentTarget: e
            }) {
                Eo(e.querySelector("file-attachment"), "is-default")
            }

            function Mo(e, t, n, o = {}) {
                var s;
                const r = null !== (s = o.limit) && void 0 !== s ? s : 1 / 0;
                let i = 0;
                for (const a of e.children) {
                    const e = n(a, t);
                    null == e || (e && i < r ? (i++, Co(a, !0)) : Co(a, !1))
                }
                return i
            }

            function Co(e, t) {
                e.style.display = t ? "" : "none", e.hidden = !t
            }
            i("file-attachment", {
                add(e) {
                    0 == So++ && (document.addEventListener("drop", Ao), document.addEventListener("dragover", xo));
                    const t = e.closest("form");
                    t && t.addEventListener("reset", qo)
                },
                remove(e) {
                    0 == --So && (document.removeEventListener("drop", Ao), document.removeEventListener("dragover", xo));
                    const t = e.closest("form");
                    t && t.removeEventListener("reset", qo)
                }
            }), a("filter-input-updated", "filter-input", (e => {
                const t = e.currentTarget.input;
                if (!document.activeElement || document.activeElement !== t) return;
                const {
                    count: n,
                    total: o
                } = e.detail;
                te(`Found ${n} out of ${o} ${1===o?"item":"items"}`)
            })), a("toggle", "details", (e => {
                setTimeout((() => function(e) {
                    const t = e.querySelector("filter-input");
                    t && !e.hasAttribute("open") && t.reset()
                }(e.target)), 0)
            }), {
                capture: !0
            }), a("tab-container-changed", "tab-container", (e => {
                if (!(e.target instanceof HTMLElement)) return;
                const {
                    relatedTarget: t
                } = e.detail, n = e.target.querySelector("filter-input");
                n instanceof L && n.setAttribute("aria-owns", t.id)
            }), {
                capture: !0
            });
            const Ho = new WeakMap;
            let _o = new AbortController;
            const Po = new WeakMap,
                Ro = new WeakMap,
                Io = new WeakMap;
            async function Do(e, t, n) {
                n && !Po.has(e) && function(e) {
                    Po.set(e, {
                        lastSearchResult: {
                            suggestions: [],
                            users: []
                        },
                        lastSearchText: "",
                        cachedSuggestions: [],
                        userResultCache: new Map
                    })
                }(e);
                const o = await async function(e, t, n) {
                    const o = new URL(e.getAttribute("data-filterable-src"), window.location.origin);
                    if (n) {
                        const n = Po.get(e),
                            s = t.trim();
                        if (n.lastSearchText === s) return n.lastSearchResult;
                        n.lastSearchText = s;
                        const r = e.getAttribute("data-filterable-for"),
                            i = document.getElementById(r);
                        if (_o.abort(), "" === s) n.lastSearchResult = {
                            suggestions: [],
                            users: []
                        };
                        else {
                            _o = new AbortController;
                            const e = {
                                    headers: {
                                        Accept: "application/json",
                                        "X-Requested-With": "XMLHttpRequest"
                                    },
                                    signal: _o.signal
                                },
                                s = o.searchParams || new URLSearchParams;
                            s.set("q", t), s.set("typeAhead", "true"), o.search = s.toString(), null == i || i.classList.add("is-loading");
                            const r = await fetch(o.toString(), e);
                            n.lastSearchResult = await r.json()
                        }
                        return null == i || i.classList.remove("is-loading"), n.lastSearchResult
                    } {
                        const e = {
                                headers: {
                                    Accept: "application/json",
                                    "X-Requested-With": "XMLHttpRequest"
                                }
                            },
                            t = await fetch(o.toString(), e);
                        return await t.json()
                    }
                }(e, t, n);
                return e.hasAttribute("data-filterable-data-pre-rendered") && (o.suggestions = function(e, t) {
                    const n = [],
                        o = e.querySelectorAll(".js-filterable-suggested-user");
                    if (o.length > 0)
                        for (const s of e.querySelectorAll(".js-filterable-suggested-user")) s.classList.remove("js-filterable-suggested-user"), n.push({
                            name: s.querySelector(".js-description").textContent,
                            login: s.querySelector(".js-username").textContent,
                            selected: "true" === s.getAttribute("aria-checked"),
                            element: s,
                            suggestion: !0
                        });
                    if (t) {
                        const t = Po.get(e);
                        return o.length > 0 && (t.cachedSuggestions = n, t.userResultCache.clear()), t.cachedSuggestions
                    }
                    return n
                }(e, n)), o
            }
            async function Fo(e, t) {
                const n = parseInt(e.getAttribute("data-filterable-limit"), 10) || null;
                let o = 0;
                switch (e.getAttribute("data-filterable-type")) {
                    case "fuzzy":
                        {
                            const s = t.toLowerCase();o = function(e, t, n) {
                                const o = t.toLowerCase(),
                                    s = n.limit;
                                let r = Ho.get(e);
                                const i = e.querySelector('input[type="radio"]:checked'),
                                    a = Array.from(e.children);
                                r || (r = Array.from(e.children), Ho.set(e, r));
                                for (const f of a) e.removeChild(f), f instanceof HTMLElement && (f.style.display = "");
                                const c = o ? Pe(r, n.sortKey, Re) : r,
                                    l = null == s ? c : c.slice(0, s),
                                    u = l.length,
                                    d = document.createDocumentFragment();
                                for (const f of l) d.appendChild(f);
                                let m = !1;
                                if (i instanceof HTMLInputElement)
                                    for (const f of d.querySelectorAll('input[type="radio"]:checked')) f instanceof HTMLInputElement && f.value !== i.value && (f.checked = !1, m = !0);
                                e.appendChild(d), i && m && i.dispatchEvent(new Event("change", {
                                    bubbles: !0
                                }));
                                const h = e.querySelectorAll(".js-divider");
                                for (const f of h) f.classList.toggle("d-none", Boolean(o && o.trim().length > 0));
                                return u
                            }(e, t, {
                                limit: n,
                                sortKey: e => {
                                    const t = (n = e).hasAttribute("data-filter-value") ? n.getAttribute("data-filter-value").toLowerCase().trim() : n.textContent.toLowerCase().trim();
                                    var n;
                                    const o = Fe(t, s);
                                    return o > 0 ? {
                                        score: o,
                                        text: t
                                    } : null
                                }
                            });
                            break
                        }
                    case "substring":
                        o = Mo(e, t.toLowerCase(), No, {
                            limit: n
                        });
                        break;
                    case "substring-memory":
                        o = await async function(e, t, n) {
                            var o, s;
                            Io.set(e, t), await Ie();
                            const r = e.hasAttribute("data-filterable-show-suggestion-header"),
                                i = e.hasAttribute("data-filterable-type-ahead");
                            let a = Ro.get(e);
                            if (!a) try {
                                a = await Do(e, t, i), i || Ro.set(e, a)
                            } catch (j) {
                                if ("AbortError" === j.name) return -1;
                                throw j
                            }
                            if (!i && Io.get(e) !== t) return -1;
                            const c = n.limit,
                                l = e.querySelector("template"),
                                u = {};
                            for (const L of e.querySelectorAll("input[type=hidden]")) u[`${L.name}${L.value}`] = L;
                            let d = l.nextElementSibling;
                            for (; d;) {
                                const e = d;
                                d = e.nextElementSibling, e instanceof HTMLElement && (i || "true" === e.getAttribute("aria-checked") || e.classList.contains("select-menu-divider")) ? e.hidden = !0 : e.remove()
                            }
                            let m = 0;
                            const h = "" === t.trim(),
                                f = document.createDocumentFragment(),
                                p = e.querySelector(".js-divider-suggestions"),
                                g = e.querySelector(".js-divider-rest"),
                                b = Po.get(e);

                            function y(e) {
                                const n = `${e.login} ${e.name}`.toLowerCase().trim().includes(t),
                                    o = !(null != c && m >= c) && n;
                                if (o || e.selected || e.suggestion) {
                                    const t = function(e, t, n, o) {
                                        if (null != e.element) return e.element;
                                        if (null == o ? void 0 : o.userResultCache.has(e.id)) return o.userResultCache.get(e.id);
                                        const s = t.content.cloneNode(!0),
                                            r = s.querySelector("input[type=checkbox], input[type=radio]");
                                        e.type && (r.name = `reviewer_${e.type}_ids[]`), r.value = e.id;
                                        const i = `${r.name}${e.id}`;
                                        let a = e.selected;
                                        n[i] && (a = !0, n[i].remove(), delete n[i]);
                                        const c = s.querySelector("[role^=menuitem]");
                                        a && (c.setAttribute("aria-checked", "true"), r.checked = !0), e.disabled && c.setAttribute("aria-disabled", "true");
                                        const l = s.querySelector(".js-username");
                                        l && (l.textContent = e.login);
                                        const u = s.querySelector(".js-description");
                                        u && (u.textContent = e.name);
                                        const d = s.querySelector(".js-extended-description");
                                        d && (e.description ? d.textContent = e.description : d.remove());
                                        const m = s.querySelector(".js-avatar");
                                        return m.className = `${m.className} ${e.class}`, m.src = e.avatar, e.element = c, null == o || o.userResultCache.set(e.id, c), e.element
                                    }(e, l, u, b);
                                    t.hidden = !o, o && m++, f.appendChild(t)
                                }
                            }
                            let v = !1;
                            if (p && ((null === (o = a.suggestions) || void 0 === o ? void 0 : o.length) > 0 || r && a.users.length > 0)) {
                                const e = null !== (s = a.suggestions) && void 0 !== s ? s : [],
                                    t = e.filter((e => e.selected)),
                                    n = e.filter((e => !e.selected));
                                for (const s of t) y(s);
                                f.appendChild(p);
                                const o = m;
                                for (const s of n) y(s);
                                v = m > o, p.hidden = !v || i && !h, r && a.users.length > 0 && (p.hidden = !h)
                            }
                            g && f.appendChild(g);
                            const w = m;
                            for (const L of a.users) y(L);
                            return g && (g.hidden = w === m || !v), e.append(f), m
                        }(e, t, {
                            limit: n
                        });
                        break;
                    default:
                        o = Mo(e, t.toLowerCase(), $o, {
                            limit: n
                        })
                }
                return e.classList.toggle("filterable-active", t.length > 0), e.classList.toggle("filterable-empty", 0 === o), o
            }

            function $o(e, t) {
                return e.textContent.toLowerCase().trim().startsWith(t)
            }

            function No(e, t) {
                if (e.classList.contains("select-menu-no-results")) return null;
                return (e.querySelector("[data-filterable-item-text]") || e).textContent.toLowerCase().trim().includes(t)
            }
            i(".js-filterable-field", {
                constructor: HTMLInputElement,
                initialize(e) {
                    e.autocomplete || (e.autocomplete = "off");
                    const t = e.hasAttribute("type-ahead") ? 200 : null;
                    let n = e.value;
                    async function o(e) {
                        n !== e.value && (n = e.value, await ae(), h(e, "filterable:change"))
                    }
                    async function s() {
                        n = e.value, await ae(), h(e, "filterable:change")
                    }
                    return {
                        add(e) {
                            e.addEventListener("focus", s), de(e, o, {
                                wait: t
                            }), document.activeElement === e && s()
                        },
                        remove(e) {
                            e.removeEventListener("focus", s), De(e, o)
                        }
                    }
                }
            }), a("filterable:change", ".js-filterable-field", (async function(e) {
                const t = e.currentTarget,
                    n = t.value.trim().toLowerCase(),
                    o = document.querySelectorAll(`[data-filterable-for="${t.id}"]`);
                for (const s of o) {
                    const e = await Fo(s, n);
                    if (-1 === e) return;
                    document.activeElement && t === document.activeElement && te(e + " results found."), s.dispatchEvent(new CustomEvent("filterable:change", {
                        bubbles: !0,
                        cancelable: !1,
                        detail: {
                            inputField: t
                        }
                    }))
                }
            })), a("filterable:change", "details-menu .select-menu-list", (function(e) {
                const t = e.currentTarget,
                    n = t.querySelector(".js-new-item-form");
                n && function(e, t, n) {
                    const o = n.length > 0 && ! function(e, t) {
                        for (const n of e.querySelectorAll("[data-menu-button-text]")) {
                            if (n.textContent.toLowerCase().trim() === t.toLowerCase()) return !0
                        }
                        return !1
                    }(e, n);
                    if (e.classList.toggle("is-showing-new-item-form", o), !o) return;
                    t.querySelector(".js-new-item-name").textContent = n;
                    const s = t.querySelector(".js-new-item-value");
                    (s instanceof HTMLInputElement || s instanceof HTMLButtonElement) && (s.value = n)
                }(t, n, e.detail.inputField.value)
            })), i("tab-container .select-menu-list .filterable-empty, details-menu .select-menu-list .filterable-empty", {
                add(e) {
                    e.closest(".select-menu-list").classList.add("filterable-empty")
                },
                remove(e) {
                    e.closest(".select-menu-list").classList.remove("filterable-empty")
                }
            });
            const Oo = navigator.userAgent.match(/Firefox\/(\d+)/);

            function Bo(e) {
                return "ArrowDown" === e.key || "ArrowUp" === e.key
            }

            function Wo(e) {
                const t = e.closest("label");
                t.hasAttribute("data-role") || t.setAttribute("data-role", t.getAttribute("role")), t.setAttribute("role", t.getAttribute("data-role")), e.removeAttribute("role")
            }

            function Uo() {
                $e(document) && Ne(document)
            }
            Oo && Number(Oo[1]) < 76 && (i('details-menu label[tabindex][role^="menuitem"]', (e => {
                const t = e.querySelector("input");
                if (!t) return;
                const n = e.classList.contains("select-menu-item"),
                    o = t.classList.contains("d-none"),
                    s = n || o || t.hidden;
                n && t.classList.add("d-block"), o && t.classList.remove("d-none"), s && (t.classList.add("sr-only"), t.hidden = !1), e.removeAttribute("tabindex")
            })), a("focus", 'details-menu label[role="menuitemradio"] input, details-menu label[role="menuitemcheckbox"] input', (e => {
                const t = e.currentTarget.closest("label");
                t.classList.contains("select-menu-item") && t.classList.add("navigation-focus"), t.classList.contains("SelectMenu-item") && t.classList.add("hx_menuitem--focus"), t.classList.contains("dropdown-item") && t.classList.add("hx_menuitem--focus"), e.currentTarget.addEventListener("blur", (() => {
                    t.classList.contains("select-menu-item") && t.classList.remove("navigation-focus"), t.classList.contains("SelectMenu-item") && t.classList.remove("hx_menuitem--focus"), t.classList.contains("dropdown-item") && t.classList.remove("hx_menuitem--focus")
                }), {
                    once: !0
                })
            }), {
                capture: !0
            }), Me("keydown", 'details-menu label[role="menuitemradio"] input, details-menu label[role="menuitemcheckbox"] input', (async function(e) {
                if (Bo(e)) e.currentTarget instanceof Element && function(e) {
                    const t = e.closest("label");
                    t.hasAttribute("data-role") || t.setAttribute("data-role", t.getAttribute("role"));
                    e.setAttribute("role", t.getAttribute("data-role")), t.removeAttribute("role")
                }(e.currentTarget);
                else if ("Enter" === e.key) {
                    const t = e.currentTarget;
                    e.preventDefault(), await ae(), t instanceof HTMLInputElement && t.click()
                }
            })), a("blur", 'details-menu label input[role="menuitemradio"], details-menu label input[role="menuitemcheckbox"]', (e => {
                Wo(e.currentTarget)
            }), {
                capture: !0
            }), Me("keyup", 'details-menu label[role="menuitemradio"] input, details-menu label[role="menuitemcheckbox"] input', (e => {
                Bo(e) && e.currentTarget instanceof Element && Wo(e.currentTarget)
            }))), fe(Uo), a("click", 'a[href^="#"]', (function(e) {
                const {
                    currentTarget: t
                } = e;
                t instanceof HTMLAnchorElement && setTimeout(Uo, 0)
            })), a("click", ".js-flash-close", (function(e) {
                const t = e.currentTarget.closest(".flash-messages");
                e.currentTarget.closest(".flash").remove(), t && !t.querySelector(".flash") && t.remove()
            }));
            const zo = ["flash-notice", "flash-error", "flash-message", "flash-warn"];
            i("template.js-flash-template", {
                constructor: HTMLTemplateElement,
                add(e) {
                    ! function(e) {
                        for (const {
                                key: n,
                                value: o
                            } of zo.flatMap(Le)) {
                            let s;
                            Ee(n);
                            try {
                                s = atob(decodeURIComponent(o))
                            } catch (t) {
                                continue
                            }
                            e.after(new E(e, {
                                className: n,
                                message: s
                            }))
                        }
                    }(e)
                }
            });
            const Xo = new WeakMap;

            function Vo(e) {
                e instanceof CustomEvent && te(e.detail + " results found.")
            }

            function Ko(e) {
                const t = document.querySelectorAll(".js-hook-event-checkbox");
                for (const n of t) n.checked = n.matches(e)
            }
            document.addEventListener("focus", (function(e) {
                const t = e.target;
                t instanceof Element && !Xo.get(t) && (h(t, "focusin:delay"), Xo.set(t, !0))
            }), {
                capture: !0
            }), document.addEventListener("blur", (function(e) {
                setTimeout((function() {
                    const t = e.target;
                    t instanceof Element && t !== document.activeElement && (h(t, "focusout:delay"), Xo.delete(t))
                }), 200)
            }), {
                capture: !0
            }), m(".js-form-toggle-target", (async function(e, t) {
                try {
                    await t.text()
                } catch (n) {
                    return
                }
                e.closest(".js-form-toggle-container").querySelector(".js-form-toggle-target[hidden]").hidden = !1, e.hidden = !0
            })), i("fuzzy-list", {
                constructor: Oe,
                subscribe: e => ce(e, "fuzzy-list-sorted", Vo)
            }), a("click", ".email-hidden-toggle", (function(e) {
                const t = e.currentTarget.nextElementSibling;
                t instanceof HTMLElement && (t.style.display = "", t.classList.toggle("expanded"), e.preventDefault())
            })), i(".js-hook-url-field", {
                constructor: HTMLInputElement,
                add(e) {
                    function t() {
                        const t = e.form;
                        if (!t) return;
                        let n;
                        try {
                            n = new URL(e.value)
                        } catch (i) {}
                        const o = t.querySelector(".js-invalid-url-notice");
                        o instanceof HTMLElement && (o.hidden = !!("" === e.value || n && /^https?:/.test(n.protocol)));
                        const s = t.querySelector(".js-insecure-url-notice");
                        s instanceof HTMLElement && n && e.value && (s.hidden = /^https:$/.test(n.protocol));
                        const r = t.querySelector(".js-ssl-hook-fields");
                        r instanceof HTMLElement && (r.hidden = !(n && "https:" === n.protocol))
                    }
                    de(e, t), t()
                }
            }), a("change", ".js-hook-event-choice", (function(e) {
                const t = e.currentTarget,
                    n = t.checked && "custom" === t.value,
                    o = t.closest(".js-hook-events-field");
                if (o && o.classList.toggle("is-custom", n), t.checked)
                    if (n) {
                        document.querySelector(".js-hook-wildcard-event").checked = !1
                    } else "push" === t.value ? Ko('[value="push"]') : "all" === t.value && Ko(".js-hook-wildcard-event")
            })), a("click", ".js-hook-deliveries-pagination-button", (async function(e) {
                const t = e.currentTarget;
                t.disabled = !0;
                const n = t.parentElement,
                    o = t.getAttribute("data-url");
                n.before(await G(document, o)), n.remove()
            })), m(".js-redeliver-hook-form", (async function(e, t) {
                let n;
                try {
                    n = await t.html()
                } catch (o) {
                    return void e.classList.add("failed")
                }
                document.querySelector(".js-hook-deliveries-container").replaceWith(n.html)
            })), i("[data-hotkey]", {
                constructor: HTMLElement,
                add(e) {
                    k(e)
                },
                remove(e) {
                    S(e)
                }
            }), i("[data-hotkey-mac], [data-hotkey-win]", {
                constructor: HTMLInputElement,
                add(e) {
                    const t = Be();
                    e.setAttribute("data-hotkey", e.getAttribute("mac" === t ? "data-hotkey-mac" : "data-hotkey-win")), k(e)
                }
            });
            const Jo = document.querySelector(".js-hovercard-content"),
                Go = Ce(G);
            let Qo, Yo, Zo = null,
                es = 0;

            function ts(e) {
                return "Popover-message--" + e
            }

            function ns() {
                Jo instanceof HTMLElement && (Jo.style.display = "none", Jo.children[0].innerHTML = "", Zo = null, Qo = null)
            }

            function os(e) {
                const {
                    width: t,
                    height: n
                } = Jo.getBoundingClientRect(), {
                    left: o,
                    top: s,
                    height: r,
                    width: i
                } = function(e) {
                    const t = e.getClientRects();
                    let n = t[0] || e.getBoundingClientRect() || {
                        top: 0,
                        left: 0,
                        height: 0,
                        width: 0
                    };
                    if (t.length > 0)
                        for (const o of t)
                            if (o.left < es && o.right > es) {
                                n = o;
                                break
                            }
                    return n
                }(e), a = s > n;
                if (e.classList.contains("js-hovercard-left")) {
                    const e = s + r / 2;
                    return {
                        containerTop: a ? e - n + 17 + 8 : e - 17 - 8,
                        containerLeft: o - t - 12,
                        contentClassSuffix: a ? "right-bottom" : "right-top"
                    }
                } {
                    const e = window.innerWidth - o > t,
                        c = o + i / 2;
                    return {
                        containerTop: a ? s - n - 12 : s + r + 12,
                        containerLeft: e ? c - 24 : c - t + 24,
                        contentClassSuffix: a ? e ? "bottom-left" : "bottom-right" : e ? "top-left" : "top-right"
                    }
                }
            }

            function ss(e, t) {
                if (!(Jo instanceof HTMLElement)) return;
                const n = Jo.children[0];
                n.innerHTML = "";
                const o = document.createElement("div");
                for (const s of e.children) o.appendChild(s.cloneNode(!0));
                n.appendChild(o),
                    function(e, t) {
                        if (!(Jo instanceof HTMLElement)) return;
                        Jo.style.visibility = "hidden", Jo.style.display = "block", t.classList.remove(ts("bottom-left"), ts("bottom-right"), ts("right-top"), ts("right-bottom"), ts("top-left"), ts("top-right"));
                        const {
                            containerTop: n,
                            containerLeft: o,
                            contentClassSuffix: s
                        } = os(e);
                        t.classList.add(ts(s)), Jo.style.top = n + window.pageYOffset + "px", Jo.style.left = o + window.pageXOffset + "px",
                            function(e, t) {
                                const n = e.getAttribute("data-hovercard-z-index-override");
                                t.style.zIndex = n || "100"
                            }(e, Jo), Jo.style.visibility = ""
                    }(t, n),
                    function(e) {
                        setTimeout((() => {
                            if (document.body && document.body.contains(e)) {
                                const t = e.querySelector("[data-hovercard-tracking]");
                                if (t) {
                                    const e = t.getAttribute("data-hovercard-tracking");
                                    if (e) {
                                        const t = {
                                            event_type: "user-hovercard-load"
                                        };
                                        t.dimensions = JSON.parse(e), We(t)
                                    }
                                }
                                const n = e.querySelector("[data-hydro-view]");
                                n instanceof HTMLElement && Ue(n)
                            }
                        }), 500)
                    }(o), Jo.style.display = "block"
            }

            function rs(e) {
                const t = e.getAttribute("data-hovercard-url");
                if (t) {
                    const n = function(e) {
                        const t = e.closest("[data-hovercard-subject-tag]");
                        if (t) return t.getAttribute("data-hovercard-subject-tag");
                        const n = document.head && document.head.querySelector('meta[name="hovercard-subject-tag"]');
                        return n ? n.getAttribute("content") : null
                    }(e);
                    if (n) {
                        const e = new URL(t, window.location.origin),
                            o = new URLSearchParams(e.search.slice(1));
                        return o.append("subject", n), o.append("current_path", window.location.pathname + window.location.search), e.search = o.toString(), e.toString()
                    }
                    return t
                }
                return ""
            }

            function is(e) {
                !async function(e, t) {
                    const n = e.currentTarget;
                    if (e instanceof MouseEvent && (es = e.clientX), !(n instanceof Element)) return;
                    if (Qo === n) return;
                    if (n.closest(".js-hovercard-content")) return;
                    if (! function(e) {
                            const t = e.getAttribute("data-hovercard-type");
                            return "pull_request" === t || "issue" === t ? !!e.closest("[data-issue-and-pr-hovercards-enabled]") : "team" === t ? !!e.closest("[data-team-hovercards-enabled]") : "repository" === t ? !!e.closest("[data-repository-hovercards-enabled]") : "commit" === t ? !!e.closest("[data-commit-hovercards-enabled]") : "project" === t ? !!e.closest("[data-project-hovercards-enabled]") : "discussion" === t ? !!e.closest("[data-discussion-hovercards-enabled]") : "acv_badge" === t ? !!e.closest("[data-acv-badge-hovercards-enabled]") : "sponsors_listing" !== t || !!e.closest("[data-sponsors-listing-hovercards-enabled]")
                        }(n)) return;
                    ns(), Qo = n, Zo = document.activeElement;
                    const o = rs(n);
                    let s;
                    try {
                        const e = new Promise((e => window.setTimeout(e, t, 0)));
                        s = await Go(document, o), await e
                    } catch (r) {
                        const e = r.response;
                        if (e && 404 === e.status) {
                            const e = "Hovercard is unavailable";
                            n.setAttribute("aria-label", e), n.classList.add("tooltipped", "tooltipped-ne")
                        } else if (e && 410 === e.status) {
                            const t = await e.clone().json();
                            n.setAttribute("aria-label", t.message), n.classList.add("tooltipped", "tooltipped-ne")
                        }
                        return
                    }
                    n === Qo && (ss(s, n), e instanceof KeyboardEvent && Jo instanceof HTMLElement && Jo.focus())
                }(e, 250)
            }

            function as(e) {
                if (Qo) {
                    if (e instanceof MouseEvent && e.relatedTarget instanceof HTMLElement) {
                        const t = e.relatedTarget;
                        if (t.closest(".js-hovercard-content") || t.closest("[data-hovercard-url]")) return
                    } else e instanceof KeyboardEvent && Zo instanceof HTMLElement && Zo.focus();
                    ns()
                }
            }

            function cs(e) {
                const t = Qo;
                Yo = window.setTimeout((() => {
                    Qo === t && as(e)
                }), 100)
            }

            function ls(e) {
                if (e instanceof KeyboardEvent) switch (e.key) {
                    case "Escape":
                        as(e)
                }
            }

            function us() {
                Yo && clearTimeout(Yo)
            }

            function ds(e, t) {
                const n = e.currentTarget;
                if (n instanceof Element) {
                    for (const e of n.querySelectorAll("[data-show-on-error]")) e instanceof HTMLElement && (e.hidden = !t);
                    for (const e of n.querySelectorAll("[data-hide-on-error]")) e instanceof HTMLElement && (e.hidden = t)
                }
            }

            function ms(e) {
                ds(e, !1)
            }

            function hs(e) {
                ds(e, !0)
            }

            function fs() {
                t.import("./chunk-jump-to.js")
            }
            Jo && (i("[data-hovercard-url]", {
                subscribe: e => He(ce(e, "mouseover", is), ce(e, "mouseleave", cs), ce(e, "keyup", ls))
            }), i("[data-hovercard-url]", {
                remove(e) {
                    Qo === e && ns()
                }
            }), i(".js-hovercard-content", {
                subscribe: e => He(ce(e, "mouseover", us), ce(e, "mouseleave", as), ce(e, "keyup", ls))
            }), i(".js-hovercard-include-fragment", {
                constructor: HTMLTemplateElement,
                add(e) {
                    Qo && ss(e.content, Qo)
                }
            }), a("menu:activated", "details", ns), window.addEventListener("statechange", ns)), a("click", "[data-hydro-click]", (function(e) {
                const t = e.currentTarget,
                    n = t.getAttribute("data-hydro-click") || "",
                    o = t.getAttribute("data-hydro-click-hmac") || "",
                    s = t.getAttribute("data-hydro-client-context") || "";
                ze(n, o, s)
            })), a("click", "[data-optimizely-hydro-click]", (function(e) {
                const t = e.currentTarget,
                    n = t.getAttribute("data-optimizely-hydro-click") || "",
                    o = t.getAttribute("data-optimizely-hydro-click-hmac") || "";
                ze(n, o, "")
            })), m(".js-immediate-updates", (async function(e, t) {
                let n;
                try {
                    n = (await t.json()).json.updateContent
                } catch (o) {
                    o.response.json && (n = o.response.json.updateContent)
                }
                if (n)
                    for (const s in n) {
                        const e = n[s],
                            t = document.querySelector(s);
                        t instanceof HTMLElement && Te(t, e)
                    }
            })), i("include-fragment, poll-include-fragment", {
                subscribe: e => He(ce(e, "error", hs), ce(e, "loadstart", ms))
            }), a("click", "include-fragment button[data-retry-button]", (({
                currentTarget: e
            }) => {
                const t = e.closest("include-fragment"),
                    n = t.src;
                t.src = "", t.src = n
            })), i("[data-indeterminate]", {
                constructor: HTMLInputElement,
                initialize(e) {
                    e.indeterminate = !0
                }
            }), i(".js-jump-to-field", {
                constructor: HTMLInputElement,
                add(e) {
                    e.addEventListener("focusin", fs, {
                        once: !0
                    }), Xe(window.location.pathname)
                }
            });
            let ps = !1;
            async function gs() {
                if (ps) return;
                ps = !0;
                const e = {
                        contexts: document.querySelector("meta[name=github-keyboard-shortcuts]").content
                    },
                    t = "/site/keyboard_shortcuts?" + new URLSearchParams(e).toString();
                (await _e({
                    content: G(document, t),
                    dialogClass: "hx_Box--overlay--wide"
                })).addEventListener("dialog:remove", (function() {
                    ps = !1
                }), {
                    once: !0
                })
            }

            function bs(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement)) return;
                const n = parseInt(t.getAttribute("data-input-max-length") || "", 10),
                    o = parseInt(t.getAttribute("data-warning-length") || "", 10) || 5,
                    s = t.value.replace(/(\r\n|\n|\r)/g, "\r\n");
                let r = n - s.length;
                if (r <= 0) {
                    let e = s.substr(0, n);
                    e.endsWith("\r") ? (e = e.substr(0, n - 1), r = 1) : r = 0, t.value = e
                }
                const i = t.getAttribute("data-warning-text"),
                    a = t.closest(".js-length-limited-input-container").querySelector(".js-length-limited-input-warning");
                r <= o ? (a.textContent = i.replace(new RegExp("{{remaining}}", "g"), "" + r), a.classList.remove("d-none")) : (a.textContent = "", a.classList.add("d-none"))
            }
            a("click", ".js-keyboard-shortcuts", gs), document.addEventListener("keydown", (e => {
                e.target instanceof Node && Ve(e.target) || "?" === T(e) && gs()
            })), i(".js-modifier-key", {
                constructor: HTMLElement,
                add(e) {
                    if (/Macintosh/.test(navigator.userAgent)) {
                        let t = e.textContent;
                        t && (t = t.replace(/ctrl/, "⌘"), t = t.replace(/alt/, "⌥"), e.textContent = t)
                    }
                }
            }), i(".js-modifier-label-key", {
                add(e) {
                    if (/Macintosh/.test(navigator.userAgent)) {
                        let t = e.getAttribute("aria-label");
                        t = t.replace(/ctrl\+/, "cmd-"), t = t.replace(/alt\+/, "option-"), e.setAttribute("aria-label", t)
                    }
                }
            }), i(".js-length-limited-input", {
                add(e) {
                    e.addEventListener("input", bs), e.addEventListener("change", bs)
                },
                remove(e) {
                    e.removeEventListener("input", bs), e.removeEventListener("change", bs)
                }
            }), i("link[rel=prefetch-viewed]", {
                initialize() {
                    window.requestIdleCallback((() => {
                        fetch(location.href, {
                            method: "HEAD",
                            credentials: "same-origin",
                            headers: {
                                Purpose: "prefetch-viewed"
                            }
                        })
                    }))
                }
            }), a("click", ".js-member-search-filter", (function(e) {
                e.preventDefault();
                const t = e.currentTarget.getAttribute("data-filter"),
                    n = e.currentTarget.closest("[data-filter-on]").getAttribute("data-filter-on"),
                    o = document.querySelector(".js-member-filter-field"),
                    s = o.value,
                    r = new RegExp(n + ":(?:[a-z]|_|((').*(')))+"),
                    i = s.toString().trim().replace(r, "");
                o.value = `${i} ${t}`.replace(/\s\s/, " ").trim(), o.focus(), h(o, "input")
            })), a("auto-check-success", ".js-new-organization-name", (function(e) {
                const t = e.target,
                    n = t.closest("dd").querySelector(".js-field-hint-name");
                n && (n.textContent = t.value)
            })), m(".js-notice-dismiss", (async function(e, t) {
                await t.text();
                e.closest(".js-notice").remove()
            })), a("submit", ".js-notice-dismiss-remote", (async function(e) {
                const t = e.currentTarget;
                let n;
                e.preventDefault();
                try {
                    n = await fetch(t.action, {
                        method: t.method,
                        body: new FormData(t),
                        headers: {
                            Accept: "application/json",
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    })
                } catch (o) {
                    return void Y()
                }
                if (n && !n.ok) Y();
                else {
                    t.closest(".js-notice").remove()
                }
            })), async function() {
                await we, window._octo && (window._octo.push(["enablePerformance"]), window._octo.push(["recordPageView"]))
            }(), document.addEventListener("pjax:complete", (function() {
                window._octo && window._octo.push(["recordPageView"])
            })), a("click", ".js-permalink-shortcut", (function(e) {
                const t = e.currentTarget;
                try {
                    re(null, "", t.href + window.location.hash)
                } catch (n) {
                    window.location.href = t.href + window.location.hash
                }
                e.preventDefault()
            })), m(".js-permission-menu-form", (async function(e, t) {
                const n = e.querySelector(".js-permission-success"),
                    o = e.querySelector(".js-permission-error");
                let s;
                n.hidden = !0, o.hidden = !0, e.classList.add("is-loading");
                try {
                    s = await t.json()
                } catch (i) {
                    return e.classList.remove("is-loading"), void(o.hidden = !1)
                }
                e.classList.remove("is-loading"), n.hidden = !1;
                const r = e.closest(".js-org-repo");
                if (r) {
                    const e = s.json;
                    r.classList.toggle("with-higher-access", e.members_with_higher_access)
                }
            })), async function() {
                await Ke;
                const e = document.querySelector(".js-pjax-loader-bar");
                if (!e) return;
                const t = e.firstElementChild;
                if (!(t instanceof HTMLElement)) return;
                let n = 0,
                    o = null,
                    s = null;

                function r(e) {
                    t instanceof HTMLElement && (0 === e && (null == s && (s = getComputedStyle(t).transition), t.style.transition = "none"), n = e, t.style.width = n + "%", 0 === e && (t.clientWidth, t.style.transition = s || ""))
                }

                function i() {
                    0 === n && (n = 12), r(Math.min(n + 3, 95)), o = window.setTimeout(i, 500)
                }
                document.addEventListener("pjax:start", (function() {
                    r(0), e && e.classList.add("is-loading"), o = window.setTimeout(i, 0)
                })), document.addEventListener("pjax:end", (function() {
                    o && clearTimeout(o), r(100), e && e.classList.remove("is-loading")
                }))
            }();
            let ys = null;
            const vs = "last_pjax_request",
                ws = "pjax_start",
                js = "pjax_end";
            "getEntriesByName" in window.performance && (document.addEventListener("pjax:start", (function(e) {
                e instanceof CustomEvent && e.detail && e.detail.url && (window.performance.mark(ws), ys = e.detail.url)
            })), document.addEventListener("pjax:end", (async function() {
                if (await ae(), !window.performance.getEntriesByName(ws).length) return;
                window.performance.mark(js), window.performance.measure(vs, ws, js);
                const e = window.performance.getEntriesByName(vs).pop(),
                    t = e ? e.duration : null;
                t && (ys && je({
                    requestUrl: ys,
                    pjaxDuration: Math.round(t)
                }), window.performance.clearMarks(ws), window.performance.clearMarks(js), window.performance.clearMeasures(vs))
            }))), document.addEventListener("pjax:click", (function(e) {
                if (window.onbeforeunload) return e.preventDefault()
            }));
            let Ls = null;

            function Es(e, t) {
                const n = function(e) {
                        if (e.id) return "#" + e.id;
                        throw new Error("pjax container has no id")
                    }(e.closest("[data-pjax-container]")),
                    o = new URL(e.href, window.location.origin),
                    s = new URLSearchParams(o.search.slice(1));
                return s.append("_pjax", encodeURIComponent(n)), o.search = s.toString(), fetch(o.href, {
                    headers: Object.assign({
                        Accept: "text/html",
                        "X-PJAX": "true",
                        "X-PJAX-Container": n,
                        "X-Requested-With": "XMLHttpRequest"
                    }, t && t.headers)
                })
            }

            function ks(e) {
                return null == e.getAttribute("data-pjax-preserve-scroll") && 0
            }

            function Ss(e) {
                let t = e;
                for (; t;) {
                    const e = t.getAttribute("data-pjax");
                    if (e && "true" !== e) return document.querySelector(e);
                    t = t.parentElement && t.parentElement.closest("[data-pjax]")
                }
                return e.closest("[data-pjax-container]")
            }

            function Ts(e) {
                return e.href.replace(/#.*/, "")
            }
            a("pjax:click", ".js-pjax-capture-input", (function() {
                Ls = function(e) {
                    const t = e.createElement("textarea");
                    return t.style.position = "fixed", t.style.top = "0", t.style.left = "0", t.style.opacity = "0", e.body.appendChild(t), t.focus(), () => (t.blur(), t.remove(), t.value)
                }(document)
            })), a("pjax:end", "#js-repo-pjax-container", (function() {
                if (Ls) {
                    const e = Ls(),
                        t = document.querySelector(".js-pjax-restore-captured-input");
                    t instanceof HTMLInputElement && e && Z(t, e), Ls = null
                }
            })), a("pjax:click", "#js-repo-pjax-container a[href]", (function(e) {
                const t = e.currentTarget.pathname;
                var n, o;
                n = t, o = location.pathname, n.split("/", 3).join("/") !== o.split("/", 3).join("/") && e.preventDefault()
            })), a("pjax:click", ".js-comment-body", (function(e) {
                const t = e.target;
                t instanceof HTMLAnchorElement && "files" === t.pathname.split("/")[3] && e.preventDefault()
            })), a("pjax:click", ".js-pjax-history-navigate", (function(e) {
                e.currentTarget instanceof HTMLAnchorElement && (e.currentTarget.href === Je() ? (history.back(), e.detail.relatedEvent.preventDefault(), e.preventDefault()) : e.currentTarget.href === Ge() && (history.forward(), e.detail.relatedEvent.preventDefault(), e.preventDefault()))
            })), i("[data-pjax-container] link[rel=pjax-prefetch]", {
                constructor: HTMLLinkElement,
                initialize(e) {
                    Es(e, {
                        headers: {
                            Purpose: "prefetch"
                        }
                    })
                }
            }), a("click", "[data-pjax] a, a[data-pjax]", (function(e) {
                const t = e.currentTarget;
                if (t instanceof HTMLAnchorElement) {
                    if (null != t.getAttribute("data-skip-pjax")) return;
                    if (null != t.getAttribute("data-remote")) return;
                    const n = Ss(t);
                    n && function(e, t) {
                        const n = e.currentTarget;
                        if (0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
                        if (location.protocol !== n.protocol || location.hostname !== n.hostname) return;
                        if (n.href.indexOf("#") > -1 && Ts(n) === Ts(location)) return;
                        if (e.defaultPrevented) return;
                        const o = Object.assign({
                                url: n.href,
                                target: n
                            }, t),
                            s = new CustomEvent("pjax:click", {
                                bubbles: !0,
                                cancelable: !0,
                                detail: {
                                    options: o,
                                    relatedEvent: e
                                }
                            });
                        n.dispatchEvent(s) && (Qe(o), e.preventDefault(), n.dispatchEvent(new CustomEvent("pjax:clicked", {
                            bubbles: !0,
                            cancelable: !0,
                            detail: {
                                options: o
                            }
                        })))
                    }(e, {
                        container: n,
                        scrollTo: ks(t)
                    })
                }
            })), a("change", "select[data-pjax]", (function(e) {
                const t = e.currentTarget,
                    n = Ss(t);
                n && Qe({
                    url: t.value,
                    container: n
                })
            })), a("submit", "form[data-pjax]", (function(e) {
                const t = e.currentTarget,
                    n = Ss(t);
                if (!n) return;
                const o = ks(t),
                    s = {
                        type: (t.method || "GET").toUpperCase(),
                        url: t.action,
                        target: t,
                        scrollTo: o,
                        container: n
                    };
                if ("GET" === s.type) {
                    if (t.querySelector("input[type=file]")) return;
                    const e = function(e) {
                        const t = document.createElement("a");
                        return t.href = e, t
                    }(s.url);
                    e.search += (e.search ? "&" : "") + oe(t), s.url = e.toString()
                } else s.data = new FormData(t);
                Qe(s), e.preventDefault()
            })), i("body.js-print-popup", (() => {
                window.print(), setTimeout(window.close, 1e3)
            })), i("poll-include-fragment[data-redirect-url]", (function(e) {
                const t = e.getAttribute("data-redirect-url");
                e.addEventListener("load", (function() {
                    window.location.href = t
                }))
            })), i("poll-include-fragment[data-reload]", (function(e) {
                e.addEventListener("load", (function() {
                    window.location.reload()
                }))
            }));
            const As = document.querySelector("meta[name=js-proxy-site-detection-payload]"),
                xs = document.querySelector("meta[name=expected-hostname]");
            if (As instanceof HTMLMetaElement && xs instanceof HTMLMetaElement && Ye(document)) {
                const e = {
                        url: window.location.href,
                        expectedHostname: xs.content,
                        documentHostname: document.location.hostname,
                        proxyPayload: As.content
                    },
                    t = new Error,
                    n = {};
                n.$__ = btoa(JSON.stringify(e)), qt(t, n)
            }

            function qs(e) {
                return "DIV" === e.nodeName && e.classList.contains("highlight")
            }
            Me("keydown", ".js-quick-submit", (function(e) {
                ! function(e) {
                    const t = e.target;
                    if ((e.ctrlKey || e.metaKey) && "Enter" === e.key) {
                        const n = t.form,
                            o = n.querySelector("input[type=submit], button[type=submit]");
                        if (e.shiftKey) {
                            const e = n.querySelector(".js-quick-submit-alternative");
                            (e instanceof HTMLInputElement || e instanceof HTMLButtonElement) && !e.disabled && le(n, e)
                        } else(o instanceof HTMLInputElement || o instanceof HTMLButtonElement) && o.disabled || le(n);
                        e.preventDefault()
                    }
                }(e)
            })), i(".js-quote-selection-container", {
                subscribe: e => A(e, {
                    quoteMarkdown: e.hasAttribute("data-quote-markdown"),
                    scopeSelector: e.getAttribute("data-quote-markdown") || "",
                    copyMarkdown: !1
                })
            }), i(".js-comment-quote-reply-deferred", (function(e) {
                const t = x(e);
                t && (t.querySelector(".js-inline-comment-form-container") || q(t)) && e.classList.remove("d-none")
            })), document.addEventListener("quote-selection-markdown", (function(e) {
                const t = e.detail,
                    {
                        fragment: n,
                        range: o,
                        unwrap: s
                    } = t,
                    r = o.startContainer.parentElement,
                    i = r && r.closest("pre");
                if (i instanceof HTMLElement && !s) {
                    const e = i.parentElement;
                    if (e && qs(e)) {
                        const t = document.createElement("div");
                        t.className = e.className, t.appendChild(n), n.appendChild(t)
                    }
                }! function(e) {
                    const t = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT, {
                            acceptNode: e => e.nodeName in Ms && function(e) {
                                return "IMG" === e.nodeName || null != e.firstChild
                            }(e) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                        }),
                        n = [];
                    let o = t.nextNode();
                    for (; o;) o instanceof HTMLElement && n.push(o), o = t.nextNode();
                    n.reverse();
                    for (const s of n) s.replaceWith(Ms[s.nodeName](s))
                }(n)
            }));
            const Ms = {
                PRE(e) {
                    const t = e.parentElement;
                    if (t && qs(t)) {
                        const n = t.className.match(/highlight-source-(\S+)/),
                            o = n ? n[1] : "",
                            s = (e.textContent || "").replace(/\n+$/, "");
                        e.textContent = `\`\`\`${o}\n${s}\n\`\`\``, e.append("\n\n")
                    }
                    return e
                },
                A(e) {
                    const t = e.textContent || "";
                    return e.classList.contains("user-mention") || e.classList.contains("team-mention") || e.classList.contains("issue-link") && /^#\d+$/.test(t) ? t : e
                },
                IMG(e) {
                    const t = e.getAttribute("alt");
                    return t && e.classList.contains("emoji") ? t : e
                },
                DIV(e) {
                    if (e.classList.contains("js-suggested-changes-blob")) e.remove();
                    else if (e.classList.contains("blob-wrapper-embedded")) {
                        const t = e.parentElement,
                            n = t.querySelector("a[href]"),
                            o = document.createElement("p");
                        o.textContent = n.href, t.replaceWith(o)
                    }
                    return e
                }
            };
            let Cs, Hs;

            function _s(e) {
                const t = e.target,
                    n = t.getAttribute("data-reaction-label"),
                    o = t.closest(".js-add-reaction-popover").querySelector(".js-reaction-description");
                o.hasAttribute("data-default-text") || o.setAttribute("data-default-text", o.textContent || ""), o.textContent = n
            }

            function Ps(e) {
                const t = e.target.closest(".js-add-reaction-popover").querySelector(".js-reaction-description"),
                    n = t.getAttribute("data-default-text");
                n && (t.textContent = n)
            }
            a("click", ".js-comment-quote-reply", (function({
                currentTarget: e
            }) {
                const t = e.closest(".js-comment"),
                    n = t.querySelector(".js-comment-body"),
                    o = t.querySelector(".js-comment-body").cloneNode(!0),
                    s = n.querySelectorAll("button.js-convert-to-issue-button, span.js-clear");
                for (const r of s) r.remove();
                if (Hs && "Range" === Hs.type && n.contains(Hs.anchorNode)) M(Hs.text, Hs.range);
                else {
                    const e = window.getSelection();
                    e.removeAllRanges(), e.selectAllChildren(n), M(e.toString(), e.getRangeAt(0))
                }
                t.querySelector(".js-comment-body").replaceWith(o)
            })), document.addEventListener("selectionchange", p((function() {
                const e = window.getSelection();
                let t;
                try {
                    t = e.getRangeAt(0)
                } catch (n) {
                    return void(Cs = null)
                }
                Cs = {
                    type: e.type,
                    anchorNode: e.anchorNode,
                    text: e.toString(),
                    range: t
                }
            }), 100)), document.addEventListener("toggle", (function(e) {
                const t = e.target;
                if (!(t instanceof Element && t.hasAttribute("open"))) return;
                Hs = Cs;
                const n = t.querySelector(".js-comment-quote-reply.d-none");
                if (!n) return;
                const o = x(t);
                o && (o.querySelector(".js-inline-comment-form-container") || q(o)) && n.classList.remove("d-none")
            }), {
                capture: !0
            }), m(".js-pick-reaction", (async function(e, t) {
                const n = await t.json(),
                    o = e.closest(".js-comment"),
                    s = o.querySelector(".js-reactions-container"),
                    r = o.querySelector(".js-comment-header-reaction-button"),
                    i = se(document, n.json.reactions_container.trim()),
                    a = se(document, n.json.comment_header_reaction_button.trim());
                s.replaceWith(i), r.replaceWith(a)
            })), a("toggle", ".js-reaction-popover-container", (function(e) {
                const t = e.currentTarget.hasAttribute("open");
                for (const n of e.target.querySelectorAll(".js-reaction-option-item")) t ? (n.addEventListener("mouseenter", _s), n.addEventListener("mouseleave", Ps)) : (n.removeEventListener("mouseenter", _s), n.removeEventListener("mouseleave", Ps))
            }), {
                capture: !0
            }), a("click", ["form button:not([type])", "form button[type=submit]", "form input[type=submit]"].join(", "), (function(e) {
                const t = e.currentTarget;
                t.form && !e.defaultPrevented && Ze(t)
            })), m("form[data-remote]", (function(e, t, n) {
                "json" === e.getAttribute("data-type") && n.headers.set("Accept", "application/json"), h(e, "deprecatedAjaxSend", {
                    request: n
                }), t.text().catch((e => {
                    if (e.response) return e.response;
                    throw e
                })).then((t => {
                    t.status < 300 ? h(e, "deprecatedAjaxSuccess") : h(e, "deprecatedAjaxError", {
                        error: t.statusText,
                        status: t.status,
                        text: t.text
                    })
                }), (t => {
                    h(e, "deprecatedAjaxError", {
                        error: t.message,
                        status: 0,
                        text: null
                    })
                })).then((() => {
                    h(e, "deprecatedAjaxComplete")
                }))
            })), a("deprecatedAjaxComplete", "form", (function({
                currentTarget: e
            }) {
                const t = et(e);
                t && t.remove()
            })), j((e => {
                const t = et(e);
                t && t.remove()
            })), C(Ie);
            let Rs = class RemotePaginationElement extends HTMLElement {
                constructor() {
                    super(...arguments), this.loaderWasFocused = !1
                }
                connectedCallback() {
                    this.setPaginationUrl(this.list)
                }
                get hasNextPage() {
                    return !this.form.hidden
                }
                loadNextPage() {
                    this.hasNextPage && le(this.form)
                }
                get disabled() {
                    return this.submitButton.hasAttribute("aria-disabled")
                }
                set disabled(e) {
                    e ? this.submitButton.setAttribute("aria-disabled", "true") : this.submitButton.removeAttribute("aria-disabled"), this.submitButton.classList.toggle("disabled", e)
                }
                loadstart(e) {
                    e.target.addEventListener("focus", (() => {
                        this.loaderWasFocused = !0
                    }), {
                        once: !0
                    }), e.target.addEventListener("include-fragment-replaced", (() => {
                        var e;
                        this.setPaginationUrl(this.list), this.loaderWasFocused && (null === (e = this.focusMarkers.pop()) || void 0 === e || e.focus()), this.loaderWasFocused = !1
                    }), {
                        once: !0
                    })
                }
                async submit(e) {
                    var t;
                    if (e.preventDefault(), this.disabled) return;
                    let n;
                    this.disabled = !0;
                    try {
                        const e = await fetch(this.form.action);
                        if (!e.ok) return;
                        n = await e.text()
                    } catch (s) {
                        return
                    }
                    const o = se(document, n);
                    this.setPaginationUrl(o), this.list.append(o), null === (t = this.focusMarkers.pop()) || void 0 === t || t.focus(), this.disabled = !1, this.dispatchEvent(new CustomEvent("remote-pagination-load"))
                }
                setPaginationUrl(e) {
                    const t = e.querySelector("[data-pagination-src]");
                    if (!t) return;
                    const n = t.getAttribute("data-pagination-src");
                    n ? (this.form.action = n, this.form.hidden = !1) : this.form.hidden = !0
                }
            };
            n([o], Rs.prototype, "form", void 0), n([o], Rs.prototype, "list", void 0), n([s], Rs.prototype, "focusMarkers", void 0), n([o], Rs.prototype, "submitButton", void 0), Rs = n([r], Rs), i(".has-removed-contents", (function() {
                let e;
                return {
                    add(t) {
                        e = Array.from(t.childNodes);
                        for (const o of e) t.removeChild(o);
                        const n = t.closest("form");
                        n && h(n, "change")
                    },
                    remove(t) {
                        for (const o of e) t.appendChild(o);
                        const n = t.closest("form");
                        n && h(n, "change")
                    }
                }
            }));
            const Is = ["is-render-pending", "is-render-ready", "is-render-loading", "is-render-loaded"],
                Ds = new WeakMap;

            function Fs(e) {
                const t = Ds.get(e);
                null != t && (t.load = t.hello = null, t.helloTimer && (clearTimeout(t.helloTimer), t.helloTimer = null), t.loadTimer && (clearTimeout(t.loadTimer), t.loadTimer = null))
            }

            function $s(e) {
                e.classList.remove(...Is), e.classList.add("is-render-failed"), Fs(e)
            }

            function Ns(e, t = !1) {
                var n;
                !ue(e) || e.classList.contains("is-render-ready") || e.classList.contains("is-render-failed") || e.classList.contains("is-render-failed-fatally") || t && !(null === (n = Ds.get(e)) || void 0 === n ? void 0 : n.hello) || $s(e)
            }

            function Os(e, t) {
                e && e.postMessage && e.postMessage(JSON.stringify(t), "*")
            }
            if (i(".js-render-target", (function(e) {
                    var t;
                    (null === (t = Ds.get(e)) || void 0 === t ? void 0 : t.load) || (Fs(e), Ds.get(e) || (Ds.set(e, {
                        load: Date.now(),
                        hello: null,
                        helloTimer: window.setTimeout(Ns, 1e4, e, !0),
                        loadTimer: window.setTimeout(Ns, 45e3, e)
                    }), e.classList.add("is-render-automatic", "is-render-requested")))
                })), window.addEventListener("message", (function(e) {
                    var t;
                    let n = e.data;
                    if (!n) return;
                    if ("string" == typeof n) try {
                        n = JSON.parse(n)
                    } catch (c) {
                        return
                    }
                    if ("string" != typeof n.type && "render" !== n.type) return;
                    const o = n.type;
                    if ("string" != typeof n.identity) return;
                    const s = n.identity;
                    if ("string" != typeof n.body) return;
                    const r = n.body;
                    let i;
                    for (const l of document.querySelectorAll(".js-render-target"))
                        if (!s || l.getAttribute("data-identity") === s) {
                            i = l;
                            break
                        }
                    if (!i) return;
                    if (e.origin !== i.getAttribute("data-host")) return;
                    const a = null != n.payload ? n.payload : void 0;
                    switch (r) {
                        case "hello":
                            {
                                (Ds.get(i) || {
                                    untimed: !0
                                }).hello = Date.now();
                                const e = {
                                        type: "render:cmd",
                                        body: {
                                            cmd: "ack",
                                            ack: !0
                                        }
                                    },
                                    n = {
                                        type: "render:cmd",
                                        body: {
                                            cmd: "branding",
                                            branding: !1
                                        }
                                    },
                                    o = null === (t = i.querySelector("iframe")) || void 0 === t ? void 0 : t.contentWindow;
                                if (!o) return;
                                if (Os(o, e), Os(o, n), i.classList.contains("is-local")) {
                                    const e = i.closest(".js-code-editor"),
                                        t = e instanceof HTMLElement ? xe(e) : null;
                                    if (t) {
                                        let e = null;
                                        const n = (n, s) => {
                                            if (s && "setValue" === s.origin) return;
                                            const r = t.code();
                                            r !== e && (e = r, Os(o, {
                                                type: "render:data",
                                                body: r
                                            }))
                                        };
                                        t.editor.on("change", n), n()
                                    }
                                }
                            }
                            break;
                        case "error":
                            $s(i);
                            break;
                        case "error:fatal":
                            $s(i), i.classList.add("is-render-failed-fatal");
                            break;
                        case "error:invalid":
                            $s(i), i.classList.add("is-render-failed-invalid");
                            break;
                        case "loading":
                            i.classList.remove(...Is), i.classList.add("is-render-loading");
                            break;
                        case "loaded":
                            i.classList.remove(...Is), i.classList.add("is-render-loaded");
                            break;
                        case "ready":
                            i.classList.remove(...Is), i.classList.add("is-render-ready"), a && "number" == typeof a.height && (i.style.height = a.height + "px"), h(i, "render:hook:afterready", {
                                container: i,
                                payload: a
                            });
                            break;
                        case "resize":
                            a && "number" == typeof a.height && (i.style.height = a.height + "px");
                            break;
                        case "data":
                            h(i, "edit:visual", a);
                            break;
                        default:
                            h(i, "render:hook:message", {
                                type: o,
                                body: r,
                                payload: a
                            })
                    }
                })), m("form[data-replace-remote-form]", (async function(e, t) {
                    e.classList.remove("is-error"), e.classList.add("is-loading");
                    try {
                        let n = e;
                        const o = await t.html(),
                            s = e.closest("[data-replace-remote-form-target]");
                        if (s) {
                            const e = s.getAttribute("data-replace-remote-form-target");
                            n = e ? document.getElementById(e) : s
                        }
                        n.replaceWith(o.html)
                    } catch (n) {
                        e.classList.remove("is-loading"), e.classList.add("is-error")
                    }
                })), PerformanceObserver && (PerformanceObserver.supportedEntryTypes || []).includes("longtask")) {
                new PerformanceObserver((function(e) {
                    const t = e.getEntries().map((({
                        name: e,
                        duration: t
                    }) => ({
                        name: e,
                        duration: t,
                        url: window.location.href
                    })));
                    je({
                        longTasks: t
                    })
                })).observe({
                    entryTypes: ["longtask"]
                })
            }
            const Bs = new WeakMap;

            function Ws(e) {
                const t = e || window.location,
                    n = document.head && document.head.querySelector("meta[name=session-resume-id]");
                return n instanceof HTMLMetaElement && n.content || t.pathname
            }
            a("click", ".js-markdown-link-button", (async function({
                currentTarget: e
            }) {
                const t = document.querySelector(".js-markdown-link-dialog").content.cloneNode(!0);
                if (!(t instanceof DocumentFragment)) return;
                const n = await _e({
                    content: t
                });
                var o;
                e instanceof HTMLElement && Bs.set(n, (o = e, o.closest("markdown-toolbar").field).selectionEnd)
            })), a("click", ".js-markdown-link-insert", (({
                currentTarget: e
            }) => {
                const t = e.closest("details-dialog"),
                    n = document.querySelector("#" + e.getAttribute("data-for-textarea")),
                    o = Bs.get(t) || 0,
                    s = t.querySelector("#js-dialog-link-href").value,
                    r = `[${t.querySelector("#js-dialog-link-text").value}](${s}) `,
                    i = n.value.slice(0, o),
                    a = n.value.slice(o);
                n.value = i + r + a, n.focus(), n.selectionStart = n.selectionEnd = o + r.length
            })), a("details-menu-select", ".js-saved-reply-menu", (function(e) {
                if (!(e.target instanceof Element)) return;
                const t = e.detail.relatedTarget.querySelector(".js-saved-reply-body");
                if (!t) return;
                const n = (t.textContent || "").trim(),
                    o = e.target.closest(".js-previewable-comment-form").querySelector("textarea.js-comment-field");
                qe(o, n), setTimeout((() => o.focus()), 0)
            }), {
                capture: !0
            }), Me("keydown", ".js-saved-reply-shortcut-comment-field", (function(e) {
                if ("Control+." === T(e)) {
                    e.target.closest(".js-previewable-comment-form").querySelector(".js-saved-reply-container").setAttribute("open", ""), e.preventDefault()
                }
            })), Me("keydown", ".js-saved-reply-filter-input", (function(e) {
                if (/^Control\+[1-9]$/.test(T(e))) {
                    const t = e.target.closest(".js-saved-reply-container").querySelectorAll('[role="menuitem"]')[Number(e.key) - 1];
                    t instanceof HTMLElement && (t.click(), e.preventDefault())
                }
            })), i(".js-highlight-code-snippet-columns", (function(e) {
                const t = function(e) {
                    const t = parseInt(e.getAttribute("data-start-line")),
                        n = parseInt(e.getAttribute("data-end-line")),
                        o = parseInt(e.getAttribute("data-start-column")),
                        s = parseInt(e.getAttribute("data-end-column"));
                    return t !== n || t === n && o === s ? null : {
                        start: {
                            line: t,
                            column: o
                        },
                        end: {
                            line: n,
                            column: 0 !== s ? s : null
                        }
                    }
                }(e);
                null !== t && function(e, t) {
                    const n = ye(e, (e => function(e, t) {
                        return e.querySelector("#LC" + t)
                    }(t, e)));
                    if (n) {
                        const e = document.createElement("span");
                        e.classList.add("bg-yellow-2"), ve(n, e)
                    }
                }(t, e)
            })), a("click", ".js-segmented-nav-button", (function(e) {
                e.preventDefault();
                const t = e.currentTarget,
                    n = t.getAttribute("data-selected-tab"),
                    o = t.closest(".js-segmented-nav"),
                    s = o.parentElement;
                for (const r of o.querySelectorAll(".js-segmented-nav-button")) r.classList.remove("selected");
                t.classList.add("selected");
                for (const r of s.querySelectorAll(".js-selected-nav-tab")) r.parentElement === s && r.classList.remove("active");
                document.querySelector("." + n).classList.add("active")
            })), window.addEventListener("submit", H, {
                capture: !0
            }), window.addEventListener("pageshow", (function() {
                _(Ws())
            })), window.addEventListener("pjax:end", (function() {
                _(Ws())
            })), window.addEventListener("pagehide", (function() {
                P(Ws(), {
                    selector: ".js-session-resumable"
                })
            })), window.addEventListener("pjax:beforeReplace", (function(e) {
                const t = e.detail.previousState,
                    n = t ? t.url : null;
                if (n) P(Ws(new URL(n, window.location.origin)), {
                    selector: ".js-session-resumable"
                });
                else {
                    const e = new Error("pjax:beforeReplace event.detail.previousState.url is undefined");
                    setTimeout((function() {
                        throw e
                    }))
                }
            })), document.addEventListener("pjax:end", (function() {
                const e = document.querySelector('meta[name="selected-link"]'),
                    t = e && e.getAttribute("value");
                if (t)
                    for (const n of document.querySelectorAll(".js-sidenav-container-pjax .js-selected-navigation-item")) {
                        const e = (n.getAttribute("data-selected-links") || "").split(" ").indexOf(t) >= 0;
                        e ? n.setAttribute("aria-current", "page") : n.removeAttribute("aria-current"), n.classList.toggle("selected", e)
                    }
            }));
            const Us = ["notification_referrer_id", "notifications_before", "notifications_after", "notifications_query"],
                zs = "notification_shelf";

            function Xs(e, t = null) {
                return e.has("notification_referrer_id") ? (function(e, t) {
                    const n = Vs(t);
                    if (!n) return;
                    const o = {
                        pathname: n
                    };
                    for (const s of Us) {
                        const t = e.get(s);
                        t && (o[s] = t)
                    }
                    ot(zs, JSON.stringify(o))
                }(e, t), function(e) {
                    for (const t of Us) e.delete(t);
                    return e
                }(e)) : null
            }

            function Vs(e) {
                const t = (e = e || window.location.pathname).match(/^(\/[^/]+\/[^/]+\/pull\/[^/]+)/);
                return t ? t[0] : null
            }
            async function Ks(e) {
                try {
                    await e.text()
                } catch (t) {}
            }

            function Js(e, t) {
                if (function(e) {
                        return !!e.closest(".js-jump-to-field")
                    }(e)) return;
                const n = document.querySelector(".js-site-search-form");
                let o, s;
                document.querySelector(".js-site-search").classList.toggle("scoped-search", t), t ? (o = n.getAttribute("data-scoped-search-url"), s = e.getAttribute("data-scoped-placeholder")) : (o = n.getAttribute("data-unscoped-search-url"), s = e.getAttribute("data-unscoped-placeholder")), n.setAttribute("action", o), e.setAttribute("placeholder", s)
            }!async function() {
                m(".js-notification-shelf .js-notification-action form", (async function(e, t) {
                    if (e.hasAttribute("data-redirect-to-inbox-on-submit")) {
                        await Ks(t);
                        const e = document.querySelector(".js-notifications-back-to-inbox");
                        e && e.click()
                    } else st(e, e), await Ks(t)
                }))
            }(),
            function() {
                const e = function() {
                    const e = Xs(new URLSearchParams(window.location.search));
                    if (e) {
                        const t = new URL(window.location.href, window.location.origin);
                        return t.search = e.toString(), t.toString()
                    }
                }();
                e && re(null, "", e)
            }(), i(".js-notification-shelf-include-fragment", (function(e) {
                if (!(e instanceof l)) return;
                const t = function(e = null) {
                    const t = Vs(e);
                    if (!t) return tt(zs), null;
                    try {
                        const e = nt(zs);
                        if (!e) return null;
                        const n = JSON.parse(e);
                        if (!n || !n.pathname) throw new Error("Must have a pathname");
                        if (n.pathname !== t) throw new Error("Stored pathname does not match current pathname.");
                        const o = {};
                        for (const t of Us) o[t] = n[t];
                        return o
                    } catch (n) {
                        return tt(zs), null
                    }
                }();
                if (!t) return;
                const n = e.getAttribute("data-base-src");
                if (!n) return;
                const o = new URL(n, window.location.origin),
                    s = new URLSearchParams(o.search);
                for (const [r, i] of Object.entries(t)) "string" == typeof i && s.set(r, i);
                o.search = s.toString(), e.setAttribute("src", o.toString())
            })), a("submit", ".js-mark-notification-form", (async function(e) {
                const t = e.currentTarget;
                e.preventDefault();
                try {
                    await fetch(t.action, {
                        method: t.method,
                        body: new FormData(t),
                        headers: {
                            Accept: "application/json",
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    })
                } catch (n) {}
            })), async function() {
                await we;
                const e = document.querySelector(".js-mark-notification-form");
                e instanceof HTMLFormElement && le(e)
            }(), Me("keyup", ".js-site-search-field", (function(e) {
                const t = e.target,
                    n = 0 === t.value.length;
                n && "Backspace" === e.key && t.classList.contains("is-clearable") && Js(t, !1), n && "Escape" === e.key && Js(t, !0), t.classList.toggle("is-clearable", n)
            })), ie(".js-site-search-focus", (function(e) {
                const t = e.closest(".js-chromeless-input-container");
                t.classList.add("focus"), e.addEventListener("blur", (function n() {
                    t.classList.remove("focus"), 0 === e.value.length && e.classList.contains("js-site-search-field") && Js(e, !0), e.removeEventListener("blur", n)
                }))
            })), a("submit", ".js-site-search-form", (function(e) {
                if (!(e.target instanceof Element)) return;
                e.target.querySelector(".js-site-search-type-field").value = new URLSearchParams(window.location.search).get("type") || ""
            })), i("textarea.js-size-to-fit", {
                constructor: HTMLTextAreaElement,
                subscribe: R
            }), a("click", ".js-smoothscroll-anchor", (function(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLAnchorElement)) return;
                const n = rt(document, t.hash);
                n && (n.scrollIntoView({
                    behavior: "smooth"
                }), e.preventDefault())
            }));
            const Gs = document.querySelector("#snippet-clipboard-copy-button");
            i("[data-snippet-clipboard-copy-content]", {
                constructor: HTMLElement,
                add(e) {
                    !async function(e) {
                        const t = e.getAttribute("data-snippet-clipboard-copy-content");
                        if (null === t) return;
                        if (e.removeAttribute("data-snippet-clipboard-copy-content"), !(Gs instanceof HTMLTemplateElement)) return;
                        const n = Gs.content.cloneNode(!0).children[0];
                        if (!(n instanceof HTMLElement)) return;
                        const o = n.children[0];
                        o instanceof HTMLElement && (o.setAttribute("value", t), e.appendChild(n))
                    }(e)
                }
            }), m(".js-social-form", (async function(e, t) {
                let n;
                try {
                    n = await t.json()
                } catch (s) {
                    Y();
                    const t = e.closest(".js-toggler-container");
                    return void(t && t.classList.toggle("on"))
                }
                const o = e.closest(".js-social-container");
                for (const r of o.querySelectorAll(".js-social-count")) r.textContent = n.json.count
            }));
            class SubscriptionSet {
                constructor() {
                    this.subscriptions = new I, this.signatures = new Map
                }
                add(...e) {
                    const t = [];
                    for (const {
                            subscriber: n,
                            topic: o
                        } of e) this.subscriptions.has(o.name) || (t.push(o), this.signatures.set(o.name, o)), this.subscriptions.set(o.name, n);
                    return t
                }
                delete(...e) {
                    const t = [];
                    for (const {
                            subscriber: n,
                            topic: o
                        } of e) {
                        this.subscriptions.delete(o.name, n) && !this.subscriptions.has(o.name) && (t.push(o), this.signatures.delete(o.name))
                    }
                    return t
                }
                drain(...e) {
                    const t = [];
                    for (const n of e)
                        for (const e of this.subscriptions.drain(n)) {
                            const n = this.signatures.get(e);
                            this.signatures.delete(e), t.push(n)
                        }
                    return t
                }
                topics() {
                    return this.signatures.values()
                }
                topic(e) {
                    return this.signatures.get(e) || null
                }
                subscribers(e) {
                    return this.subscriptions.get(e).values()
                }
            }
            class Topic {
                constructor(e, t) {
                    this.name = e, this.signed = t, this.offset = ""
                }
                static parse(e) {
                    const [t, n] = e.split("--");
                    if (!t || !n) return null;
                    const o = JSON.parse(atob(t));
                    return o.c && o.t ? new Topic(o.c, e) : null
                }
            }
            class AliveSession {
                constructor(e, t, n, o) {
                    this.subscriptions = new SubscriptionSet, this.state = "online", this.retrying = null, this.refreshUrl = t, this.notify = o, this.shared = n, this.socket = this.connect(e)
                }
                subscribe(e) {
                    const t = this.subscriptions.add(...e);
                    this.sendSubscribe(t)
                }
                unsubscribe(e) {
                    const t = this.subscriptions.delete(...e);
                    this.sendUnsubscribe(t)
                }
                unsubscribeAll(...e) {
                    const t = this.subscriptions.drain(...e);
                    this.sendUnsubscribe(t)
                }
                online() {
                    var e;
                    this.state = "online", null === (e = this.retrying) || void 0 === e || e.abort(), this.socket.open()
                }
                offline() {
                    var e;
                    this.state = "offline", null === (e = this.retrying) || void 0 === e || e.abort(), this.socket.close()
                }
                shutdown() {
                    this.shared && self.close()
                }
                socketDidOpen() {
                    this.sendSubscribe(this.subscriptions.topics())
                }
                socketDidClose() {}
                socketDidFinish() {
                    "offline" !== this.state && this.reconnect()
                }
                socketDidReceiveMessage(e, t) {
                    const n = JSON.parse(t);
                    switch (n.e) {
                        case "ack":
                            this.handleAck(n);
                            break;
                        case "msg":
                            this.handleMessage(n)
                    }
                }
                handleAck(e) {
                    for (const t of this.subscriptions.topics()) t.offset = e.off
                }
                handleMessage(e) {
                    const t = e.ch,
                        n = this.subscriptions.topic(t);
                    n && (n.offset = e.off, e.data.wait || (e.data.wait = 0), this.notify(this.subscriptions.subscribers(t), t, e.data))
                }
                async reconnect() {
                    if (!this.retrying) try {
                        this.retrying = new AbortController;
                        const e = () => async function(e) {
                                const t = await async function(e) {
                                    const t = await fetch(e, {
                                        headers: {
                                            Accept: "application/json"
                                        }
                                    });
                                    if (t.ok) return t.json();
                                    if (404 === t.status) return null;
                                    throw new Error("fetch error")
                                }(e);
                                return t && t.url && t.token ? async function(e, t) {
                                    const n = await fetch(e, {
                                        method: "POST",
                                        mode: "same-origin",
                                        headers: {
                                            "Scoped-CSRF-Token": t
                                        }
                                    });
                                    if (n.ok) return n.text();
                                    throw new Error("fetch error")
                                }(t.url, t.token) : null
                            }(this.refreshUrl),
                            t = await it(e, 1 / 0, 6e4, this.retrying.signal);
                        t ? this.socket = this.connect(t) : this.shutdown()
                    } catch (e) {
                        if ("AbortError" !== e.name) throw e
                    } finally {
                        this.retrying = null
                    }
                }
                connect(e) {
                    const t = new URL(e, self.location.origin);
                    t.searchParams.set("shared", this.shared.toString());
                    const n = new D(t.toString(), this, {
                        timeout: 4e3,
                        attempts: 7
                    });
                    return n.open(), n
                }
                sendSubscribe(e) {
                    const t = Array.from(e, (e => [e.signed, e.offset]));
                    for (const n of at(t, 25)) this.socket.send(JSON.stringify({
                        subscribe: Object.fromEntries(n)
                    }))
                }
                sendUnsubscribe(e) {
                    const t = Array.from(e, (e => e.signed));
                    for (const n of at(t, 25)) this.socket.send(JSON.stringify({
                        unsubscribe: n
                    }))
                }
            }

            function Qs(e) {
                return (e.getAttribute("data-channel") || "").trim().split(/\s+/).map(Topic.parse).filter(Ys)
            }

            function Ys(e) {
                return null != e
            }

            function Zs(e, t, n) {
                for (const o of e) o.dispatchEvent(new CustomEvent("socket:message", {
                    bubbles: !1,
                    cancelable: !1,
                    detail: {
                        name: t,
                        data: n
                    }
                }))
            }
            class AliveSessionProxy {
                constructor(e, t, n, o, s) {
                    this.subscriptions = new SubscriptionSet, this.notify = s, this.worker = new SharedWorker(e, "github-socket-worker-v2-" + o), this.worker.port.onmessage = ({
                        data: e
                    }) => this.receive(e), this.worker.port.postMessage({
                        connect: {
                            url: t,
                            refreshUrl: n
                        }
                    })
                }
                subscribe(e) {
                    const t = this.subscriptions.add(...e);
                    t.length && this.worker.port.postMessage({
                        subscribe: t
                    })
                }
                unsubscribeAll(...e) {
                    const t = this.subscriptions.drain(...e);
                    t.length && this.worker.port.postMessage({
                        unsubscribe: t
                    })
                }
                online() {
                    this.worker.port.postMessage({
                        online: !0
                    })
                }
                offline() {
                    this.worker.port.postMessage({
                        online: !1
                    })
                }
                hangup() {
                    this.worker.port.postMessage({
                        hangup: !0
                    })
                }
                receive(e) {
                    const {
                        name: t,
                        data: n
                    } = e;
                    this.notify(this.subscriptions.subscribers(t), t, n)
                }
            }

            function er() {
                const e = null !== (n = null === (t = document.head.querySelector("link[rel=shared-web-socket-src]")) || void 0 === t ? void 0 : t.href) && void 0 !== n ? n : null;
                var t, n;
                if (!e) return;
                const o = function() {
                    var e, t;
                    return null !== (t = null === (e = document.head.querySelector("link[rel=shared-web-socket]")) || void 0 === e ? void 0 : e.href) && void 0 !== t ? t : null
                }();
                if (!o) return;
                const s = function() {
                    var e, t;
                    return null !== (t = null === (e = document.head.querySelector("link[rel=shared-web-socket]")) || void 0 === e ? void 0 : e.getAttribute("data-refresh-url")) && void 0 !== t ? t : null
                }();
                if (!s) return;
                const r = function() {
                    var e, t;
                    return null !== (t = null === (e = document.head.querySelector("link[rel=shared-web-socket]")) || void 0 === e ? void 0 : e.getAttribute("data-session-id")) && void 0 !== t ? t : null
                }();
                if (!r) return;
                const a = "SharedWorker" in window ? new AliveSessionProxy(e, o, s, r, Zs) : new AliveSession(o, s, !1, Zs),
                    c = ct((e => a.subscribe(e.flat()))),
                    l = ct((e => a.unsubscribeAll(...e)));
                i(".js-socket-channel[data-channel]", {
                    add: e => c(function(e) {
                        return Qs(e).map((t => ({
                            subscriber: e,
                            topic: t
                        })))
                    }(e)),
                    remove: e => l(e)
                }), window.addEventListener("online", (() => a.online())), window.addEventListener("offline", (() => a.offline())), window.addEventListener("unload", (() => {
                    "hangup" in a && a.hangup()
                }))
            }(async () => {
                await Ke, er()
            })();
            const tr = new Map;

            function nr(e, t) {
                const n = [];
                for (const o of e) {
                    const e = tr.get(o.name);
                    e && e.arrived > t && n.push(e)
                }
                return n
            }

            function or(e) {
                const t = document.querySelector(".js-stale-session-flash"),
                    n = t.querySelector(".js-stale-session-flash-signed-in"),
                    o = t.querySelector(".js-stale-session-flash-signed-out");
                t.hidden = !1, n.hidden = "false" === e, o.hidden = "true" === e, window.addEventListener("popstate", (function(e) {
                    e.state && null != e.state.container && location.reload()
                })), document.addEventListener("submit", (function(e) {
                    e.preventDefault()
                }))
            }
            let sr;
            if (document.addEventListener("socket:message", (function(e) {
                    const {
                        name: t,
                        data: n,
                        cached: o
                    } = e.detail;
                    if (o) return;
                    const s = {
                        name: t,
                        data: Object.assign({}, n),
                        arrived: Date.now()
                    };
                    s.data.wait = 0, tr.set(t, s)
                }), {
                    capture: !0
                }), document.addEventListener("pjax:popstate", (function(e) {
                    const t = e.target,
                        n = e.detail.cachedAt;
                    n && setTimeout((() => function(e, t) {
                        for (const n of e.querySelectorAll(".js-socket-channel[data-channel]"))
                            for (const e of nr(Qs(n), t)) n.dispatchEvent(new CustomEvent("socket:message", {
                                bubbles: !1,
                                cancelable: !1,
                                detail: {
                                    name: e.name,
                                    data: e.data,
                                    cached: !0
                                }
                            }))
                    }(t, n)))
                })), i("form.js-auto-replay-enforced-sso-request", {
                    constructor: HTMLFormElement,
                    initialize(e) {
                        le(e)
                    }
                }), "function" == typeof BroadcastChannel) try {
                sr = new BroadcastChannel("stale-session"), sr.onmessage = e => {
                    "string" == typeof e.data && or(e.data)
                }
            } catch (Ki) {}
            if (!sr) {
                let e = !1;
                sr = {
                    postMessage(t) {
                        e = !0;
                        try {
                            window.localStorage.setItem("logged-in", t)
                        } finally {
                            e = !1
                        }
                    }
                }, window.addEventListener("storage", (function(t) {
                    if (!e && t.storageArea === window.localStorage && "logged-in" === t.key) try {
                        "true" !== t.newValue && "false" !== t.newValue || or(t.newValue)
                    } finally {
                        window.localStorage.removeItem(t.key)
                    }
                }))
            }
            const rr = document.querySelector(".js-stale-session-flash[data-signedin]");
            if (rr) {
                const e = rr.getAttribute("data-signedin") || "";
                sr.postMessage(e)
            }

            function ir(e, t, n) {
                const o = e.getBoundingClientRect().height,
                    s = t.getBoundingClientRect(),
                    r = n.getBoundingClientRect();
                let i = r.top;
                i + s.height + 10 >= o && (i = Math.max(o - s.height - 10, 0));
                let a = r.right;
                null != n.closest(".js-build-status-to-the-left") && (a = Math.max(r.left - s.width - 10, 0)), t.style.top = i + "px", t.style.left = a + "px", t.style.right = "auto"
            }
            async function ar(e) {
                const t = e.querySelector(".js-dropdown-details"),
                    n = e.querySelector(".js-status-dropdown-menu") || e.closest(".js-status-dropdown-menu");
                if (!(n instanceof HTMLElement)) return;
                const o = n.querySelector(".js-status-loader");
                if (!o) return;
                const s = n.querySelector(".js-status-loading"),
                    r = n.querySelector(".js-status-error"),
                    i = o.getAttribute("data-contents-url");
                let a;
                s.classList.remove("d-none"), r.classList.add("d-none");
                try {
                    await Ie(), a = await G(document, i)
                } catch (c) {
                    s.classList.add("d-none"), r.classList.remove("d-none")
                }
                a && (o.replaceWith(a), n.querySelector(".js-details-container").classList.add("open"), t && n.classList.contains("js-append-menu-to-body") && ir(document.body, n, t))
            }

            function cr(e) {
                ar(e.currentTarget)
            }
            async function lr(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLElement)) return;
                e.stopPropagation(), e.preventDefault();
                await lt() && (t.removeAttribute("data-sudo-required"), t instanceof HTMLFormElement ? le(t) : t.click())
            }
            a("toggle", ".js-build-status .js-dropdown-details", (function(e) {
                const t = e.currentTarget,
                    n = t.querySelector(".js-status-dropdown-menu");

                function o() {
                    t.hasAttribute("open") || r()
                }

                function s(e) {
                    n.contains(e.target) || r()
                }

                function r() {
                    t.removeAttribute("open"), n.classList.add("d-none"), t.appendChild(n), t.removeEventListener("toggle", o), window.removeEventListener("scroll", s)
                }
                n && (t.addEventListener("toggle", o), n.classList.contains("js-close-menu-on-scroll") && window.addEventListener("scroll", s, {
                    capture: !0
                }), n.classList.remove("d-none"), n.querySelector(".js-details-container").classList.add("open"), n.classList.contains("js-append-menu-to-body") && (document.body.appendChild(n), ir(document.body, n, t)))
            }), {
                capture: !0
            }), a("click", ".js-status-retry", (({
                currentTarget: e
            }) => {
                ar(e)
            })), i(".js-build-status", {
                add(e) {
                    e.addEventListener("mouseenter", cr, {
                        once: !0
                    })
                },
                remove(e) {
                    e.removeEventListener("mouseenter", cr)
                }
            }), a("click", "button[data-sudo-required], summary[data-sudo-required]", lr), i("form[data-sudo-required]", {
                constructor: HTMLFormElement,
                subscribe: e => ce(e, "submit", lr)
            });
            const ur = {
                "actor:": "ul.js-user-suggestions",
                "user:": "ul.js-user-suggestions",
                "operation:": "ul.js-operation-suggestions",
                "org:": "ul.js-org-suggestions",
                "action:": "ul.js-action-suggestions",
                "repo:": "ul.js-repo-suggestions",
                "country:": "ul.js-country-suggestions"
            };

            function dr(e) {
                const t = e.detail;
                if (!fr(t.key)) return;
                const n = t.item.getAttribute("data-value");
                t.value = `${t.key}${n}`
            }

            function mr(e) {
                const {
                    key: t,
                    provide: n,
                    text: o
                } = e.detail;
                if (!fr(t)) return;
                n(async function(e, t, n) {
                    const o = (await pr(e)).querySelector(function(e) {
                        const t = ur[e];
                        if (!t) throw new Error("Unknown audit log expander key: " + e);
                        return t
                    }(t));
                    if (!o) return {
                        matched: !1
                    };
                    const s = function(e, t) {
                            const n = t.toLowerCase(),
                                o = e => {
                                    const t = e.textContent.toLowerCase().trim(),
                                        o = Fe(t, n);
                                    return o > 0 ? {
                                        score: o,
                                        text: t
                                    } : null
                                };
                            return n ? Pe(e, o, Re) : e
                        }(hr(o), n).slice(0, 5),
                        r = o.cloneNode(!1);
                    r.innerHTML = "";
                    for (const i of s) r.append(i);
                    return {
                        fragment: r,
                        matched: s.length > 0
                    }
                }(e.target.getAttribute("data-audit-url"), t, o))
            }
            i("text-expander[data-audit-url]", {
                subscribe: e => He(ce(e, "text-expander-change", mr), ce(e, "text-expander-value", dr))
            });
            const hr = Ce((e => [...e.children]), {
                hash: e => e.className
            });

            function fr(e) {
                return Object.getOwnPropertyNames(ur).includes(e)
            }
            const pr = Ce((async function(e) {
                const t = await G(document, e),
                    n = document.createElement("div");
                return n.append(t), n
            }));

            function gr(e) {
                const t = e.detail;
                ":" === t.key && (t.value = function(e) {
                    if (e.hasAttribute("data-use-colon-emoji")) return e.getAttribute("data-value");
                    const t = e.firstElementChild;
                    return t && "G-EMOJI" === t.tagName && !t.firstElementChild ? t.textContent : e.getAttribute("data-value")
                }(t.item))
            }

            function br(e) {
                const {
                    key: t,
                    provide: n,
                    text: o
                } = e.detail;
                if (":" !== t) return;
                n(async function(e, t) {
                    const [n, o] = await yr(e), s = function(e, t) {
                        const n = " " + t.toLowerCase().replace(/_/g, " ");
                        return Pe(e, (e => {
                            const t = e.getAttribute("data-emoji-name"),
                                o = function(e, t) {
                                    const n = e.indexOf(t);
                                    return n > -1 ? 1e3 - n : 0
                                }(function(e) {
                                    return " " + e.getAttribute("data-text").trim().toLowerCase().replace(/_/g, " ")
                                }(e), n);
                            return o > 0 ? {
                                score: o,
                                text: t
                            } : null
                        }), Re)
                    }(o, t).slice(0, 5);
                    n.innerHTML = "";
                    for (const r of s) n.append(r);
                    return {
                        fragment: n,
                        matched: s.length > 0
                    }
                }(e.target.getAttribute("data-emoji-url"), o))
            }
            i("text-expander[data-emoji-url]", {
                subscribe: e => He(ce(e, "text-expander-change", br), ce(e, "text-expander-value", gr))
            });
            const yr = Ce((async function(e) {
                const t = (await G(document, e)).firstElementChild;
                return [t, [...t.children]]
            }));

            function vr(e) {
                const t = e.detail;
                if ("#" !== t.key) return;
                const n = t.item.getAttribute("data-value");
                t.value = "#" + n
            }

            function wr(e) {
                const {
                    key: t,
                    provide: n,
                    text: o
                } = e.detail;
                if ("#" !== t) return;
                if ("#" === o) return void jr(e.target);
                n(async function(e, t) {
                    const n = await kr(e),
                        o = document.createElement("div"),
                        s = function(e, t) {
                            if (!t) return e;
                            const n = new RegExp("\\b" + t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")),
                                o = /^\d+$/.test(t) ? e => function(e, t) {
                                    const n = e.search(t);
                                    return n > -1 ? 1e3 - n : 0
                                }(e, n) : e => Fe(e, t);
                            return Pe(e, (e => {
                                const t = function(e) {
                                        return `${e.number} ${e.title.trim().toLowerCase()}`
                                    }(e),
                                    n = o(t);
                                return n > 0 ? {
                                    score: n,
                                    text: t
                                } : null
                            }), Re)
                        }(n.suggestions, t).slice(0, 5);
                    ! function(e, t, n) {
                        const o = e => {
                            const t = e.type in n ? se(document, n[e.type]) : "";
                            return $ `
      <li class="markdown-title" role="option" id="suggester-issue-${e.id}" data-value="${e.number}">
        <span class="d-inline-block mr-1">${t}</span>
        <small>#${e.number}</small> ${N(e.title)}
      </li>
    `
                        };
                        F($ `
    <ul role="listbox" class="suggester-container suggester suggestions list-style-none position-absolute">
      ${e.map(o)}
    </ul>
  `, t)
                    }(s, o, n.icons);
                    return {
                        fragment: o.firstElementChild,
                        matched: s.length > 0
                    }
                }(e.target.getAttribute("data-issue-url"), o))
            }

            function jr(e) {
                if (!e) return;
                const t = e.closest("text-expander");
                t && t.dismiss()
            }

            function Lr(e) {
                jr(e.target)
            }

            function Er(e) {
                const {
                    key: t
                } = e;
                ["ArrowRight", "ArrowLeft"].indexOf(t) < 0 || jr(e.target)
            }
            i("text-expander[data-issue-url]", {
                subscribe: e => {
                    const t = [ce(e, "text-expander-change", wr), ce(e, "text-expander-value", vr), ce(e, "keydown", Er), ce(e, "click", Lr)];
                    return He(...t)
                }
            });
            const kr = Ce((async function(e) {
                const t = await self.fetch(e, {
                    headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        Accept: "application/json"
                    }
                });
                if (!t.ok) {
                    const e = new Error,
                        n = t.statusText ? " " + t.statusText : "";
                    throw e.message = `HTTP ${t.status}${n}`, e
                }
                return t.json()
            }));

            function Sr(e, t) {
                if (!t) return e;
                const n = function(e) {
                    if (!e) return () => 2;
                    const t = e.toLowerCase().split("");
                    return n => {
                        if (!n) return 0;
                        const o = function(e, t) {
                            let n, o, s, r;
                            const i = function(e, t) {
                                let n = 0;
                                const o = [];
                                for (;
                                    (n = e.indexOf(t, n)) > -1;) o.push(n++);
                                return o
                            }(e, t[0]);
                            if (0 === i.length) return null;
                            if (1 === t.length) return [i[0], 1, []];
                            for (r = null, o = 0, s = i.length; o < s; o++) {
                                const s = i[o];
                                if (!(n = Tr(e, t, s + 1))) continue;
                                const a = n[n.length - 1] - s;
                                (!r || a < r[1]) && (r = [s, a, n])
                            }
                            return r
                        }(n, t);
                        if (!o) return 0;
                        return e.length / o[1] / (o[0] / 2 + 1)
                    }
                }(t);
                return Pe(e, (e => {
                    const t = function(e) {
                            return e.description ? `${e.name} ${e.description}`.trim().toLowerCase() : `${e.login} ${e.name}`.trim().toLowerCase()
                        }(e),
                        o = n(t);
                    return o > 0 ? {
                        score: o,
                        text: t
                    } : null
                }), Re)
            }

            function Tr(e, t, n) {
                let o = n;
                const s = [];
                for (let r = 1; r < t.length; r += 1) {
                    if (o = e.indexOf(t[r], o), -1 === o) return;
                    s.push(o++)
                }
                return s
            }

            function Ar(e) {
                const t = e.detail;
                if ("@" !== t.key) return;
                const n = t.item.getAttribute("data-value");
                t.value = "@" + n
            }

            function xr(e) {
                const {
                    key: t,
                    provide: n,
                    text: o
                } = e.detail;
                if ("@" !== t) return;
                if ((null == o ? void 0 : o.split(" ").length) > 1) return;
                n(async function(e, t) {
                    const n = await qr(e),
                        o = document.createElement("div"),
                        s = Sr(n, t).slice(0, 5);
                    ! function(e, t) {
                        const n = e => {
                            const t = "user" === e.type ? e.login : e.name,
                                n = "user" === e.type ? e.name : e.description;
                            return $ `
      <li role="option" id="suggester-${e.id}-${e.type}-${t}" data-value="${t}">
        <span>${t}</span>
        <small>${n}</small>
      </li>
    `
                        };
                        F($ `
    <ul role="listbox" class="suggester-container suggester suggestions list-style-none position-absolute">
      ${e.map(n)}
    </ul>
  `, t)
                    }(s, o);
                    return {
                        fragment: o.firstElementChild,
                        matched: s.length > 0
                    }
                }(e.target.getAttribute("data-mention-url"), o))
            }
            i("text-expander[data-mention-url]", {
                subscribe: e => He(ce(e, "text-expander-change", xr), ce(e, "text-expander-value", Ar))
            });
            const qr = Ce((async function(e) {
                const t = await self.fetch(e, {
                    headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        Accept: "application/json"
                    }
                });
                if (!t.ok) {
                    const e = new Error,
                        n = t.statusText ? " " + t.statusText : "";
                    throw e.message = `HTTP ${t.status}${n}`, e
                }
                return t.json()
            }));
            async function Mr(e) {
                const t = e.detail,
                    {
                        key: n,
                        item: o
                    } = t;
                if ("/" !== n) return;
                const s = o.getAttribute("data-url");
                if (!s) return;
                const r = e.currentTarget,
                    i = o.querySelector(".js-slash-command-suggestion-form");
                if (!i) return;
                const a = i.querySelector(".js-data-url-csrf");
                if (!a) return;
                const c = new FormData(i);
                r.isLoading();
                try {
                    const e = await G(document, s, {
                        method: "PATCH",
                        body: c,
                        headers: {
                            Accept: "text/html",
                            "Scoped-CSRF-Token": a.value
                        }
                    });
                    if (!e) return;
                    Cr(r, e)
                } catch (Ki) {
                    r.showError()
                }
            }

            function Cr(e, t) {
                var n;
                const o = t.firstElementChild;
                if (!o) return;
                t.children.length > 1 && function(e, t) {
                    var n, o;
                    const s = null === (n = t.parentElement) || void 0 === n ? void 0 : n.parentElement;
                    if (!s) return;
                    const r = s.querySelector(".drag-and-drop .default");
                    let i = !1;
                    r && (i = r.hidden, r.hidden = !0);
                    null === (o = null == r ? void 0 : r.parentElement) || void 0 === o || o.prepend(e), setTimeout((() => {
                        r && (r.hidden = i), e.remove()
                    }), 5e3)
                }(t.lastElementChild, e), o.hasAttribute("data-reload-suggestions") && (Nr = Ce($r));
                const s = o.getAttribute("data-component-type");
                "fill" === s ? /<\/?[a-z][\s\S]*>/i.test(o.innerHTML) ? e.setValue(o.innerHTML.trim()) : e.setValue((null === (n = o.textContent) || void 0 === n ? void 0 : n.trim()) || "") : "menu" === s || "error" === s ? e.setMenu(o.querySelector(".js-slash-command-menu")) : "action" === s ? e.closeMenu() : "embedded_form" === s ? function(e, t) {
                    const n = e.closest(".js-slash-command-surface"),
                        o = e.closest("form"),
                        s = n || o;
                    if (!s) return;
                    s.hidden = !0;
                    const r = t.querySelector('[data-component="form"]');
                    s.insertAdjacentElement("afterend", r);
                    const i = document.activeElement;
                    Pr(r);
                    const a = () => {
                        s.hidden = !1, r.remove()
                    };
                    Rr(r, a);
                    Ir(r.getElementsByTagName("form")[0], r, i, a), Dr(r, e, a)
                }(e, o) : "dialog_form" === s ? function(e, t) {
                    const n = t.querySelector(".js-slash-command-menu");
                    e.setMenu(n, !0);
                    const o = n.querySelector("form"),
                        s = document.activeElement;
                    Pr(o);
                    const r = () => {
                        e.closeMenu()
                    };
                    Ir(o, o, s, r), Rr(o, r), Dr(o, e, r)
                }(e, o) : "modal_form" === s && function(e, t) {
                    const n = e.closest("form");
                    if (!n) return;
                    const o = t.querySelector('[data-component="form"]');
                    n.insertAdjacentElement("afterend", o);
                    const s = document.activeElement;
                    Pr(o);
                    const r = () => {
                        n.hidden = !1, o.remove()
                    };
                    Rr(o, r);
                    Ir(o.getElementsByTagName("form")[0], o, s, r), Dr(o, e, r)
                }(e, o), _(Ws())
            }

            function Hr(e) {
                if (!e.metaKey || "Enter" !== e.key) return;
                e.preventDefault(), e.stopPropagation();
                const t = e.target,
                    n = null == t ? void 0 : t.form;
                if (n)
                    if (n.requestSubmit) n.requestSubmit();
                    else {
                        const e = n.querySelector("[type='submit']");
                        null == e || e.click()
                    }
            }

            function _r(e) {
                const t = new FormData(e);
                let n = "";
                for (const o of t) n += o[0], n += o[1].toString();
                return n
            }

            function Pr(e) {
                let t = !1;
                for (const n of e.querySelectorAll("select,input,textarea")) {
                    const e = n;
                    "hidden" !== e.type && (t || (e.focus(), t = !0), e.addEventListener("keydown", Hr))
                }
            }

            function Rr(e, t) {
                const n = e.querySelectorAll("[data-close-dialog]");
                for (const o of n) o.addEventListener("click", (e => {
                    e.preventDefault(), P(Ws(), {
                        selector: ".js-session-resumable"
                    }), t()
                }))
            }

            function Ir(e, t, n, o) {
                const s = _r(e);
                t.addEventListener("keydown", (t => {
                    if ("Escape" === t.key) {
                        const t = "Are you sure you want to dismiss the form?",
                            r = _r(e);
                        (s === r || confirm(t)) && (P(Ws(), {
                            selector: ".js-session-resumable"
                        }), o(), n && n.focus())
                    }
                }))
            }

            function Dr(e, t, n) {
                e.addEventListener("submit", (async e => {
                    e.preventDefault();
                    const o = e.target,
                        s = o.querySelector(".js-data-url-csrf");
                    if (!s) return;
                    const r = o.getAttribute("action");
                    if (!r) return;
                    ! function(e) {
                        const t = e.closest(".js-slash-command-surface"),
                            n = e.closest("form"),
                            o = t || n;
                        if (o)
                            for (const s of o.querySelectorAll("[data-disable-with][disabled]")) s.disabled = !1
                    }(t);
                    const i = new FormData(o),
                        a = await G(document, r, {
                            method: "PATCH",
                            body: i,
                            headers: {
                                Accept: "text/html",
                                "Scoped-CSRF-Token": s.value
                            }
                        });
                    n(), a && Cr(t, a)
                }))
            }
            i("slash-command-expander[data-slash-command-url]", {
                subscribe: e => He(ce(e, "text-expander-change", Fr), ce(e, "text-expander-value", Mr))
            }), a("click", ".js-slash-command-toolbar-button", (async e => {
                if (!(e.target instanceof Element)) return;
                const t = e.target.closest(".js-previewable-comment-form");
                if (!t) return;
                const n = t.querySelector("textarea.js-comment-field");
                if (!n) return;
                const o = n.selectionEnd || 0,
                    s = n.value.substring(0, o),
                    r = n.value.substring(o),
                    i = "" === n.value || s.match(/\s$/) ? "" : " ",
                    a = o + "/".length + 1;
                n.value = s + i + "/" + r, n.selectionStart = a, n.selectionEnd = a, n.focus(), h(n, "input")
            }));

            function Fr(e) {
                const {
                    key: t,
                    provide: n,
                    text: o
                } = e.detail;
                if ("/" !== t) return;
                const s = e.target;
                s.isLoading();
                n(async function(e, t, n) {
                    try {
                        const [n, o] = await Nr(e), s = n.querySelector(".js-slash-command-menu-items"), r = function(e, t) {
                            const n = t.toLowerCase().trim();
                            return n ? Pe(e, (e => {
                                const t = (e.getAttribute("data-text") || "").trim().toLowerCase(),
                                    o = Fe(t, n);
                                return o > 0 ? {
                                    score: o,
                                    text: t
                                } : null
                            }), Re) : e
                        }(o, t);
                        if (s) {
                            s.innerHTML = "";
                            for (const e of o)
                                if (e.classList.contains("js-group-divider")) {
                                    const t = e.getAttribute("data-group-id");
                                    r.filter((e => e.getAttribute("data-group-id") === t)).length > 0 && s.append(e)
                                } else r.includes(e) && s.append(e)
                        }
                        return {
                            fragment: n,
                            matched: r.length > 0
                        }
                    } catch (o) {
                        throw n.showError(), new Error(o)
                    }
                }(s.getAttribute("data-slash-command-url"), o, s))
            }
            async function $r(e) {
                const t = (await G(document, e)).firstElementChild,
                    n = t.querySelectorAll(".js-slash-command-menu-items li");
                return [t, [...n]]
            }
            let Nr = Ce($r);

            function Or(e, t) {
                const n = e.closest(".js-survey-question-form"),
                    o = n.querySelector("input.js-survey-other-text"),
                    s = t && !n.classList.contains("is-other-selected");
                n.classList.toggle("is-other-selected", s), o.hidden = !t, s ? (o.required = !0, o.focus()) : o.required = !1, h(o, "change")
            }
            a("change", "input.js-survey-radio", (function({
                currentTarget: e
            }) {
                Or(e, e.classList.contains("js-survey-radio-other"))
            })), a("change", "input.js-survey-checkbox-other", (function({
                currentTarget: e
            }) {
                Or(e, !0)
            })), a("change", "input.js-survey-checkbox-enable-submit", (function({
                currentTarget: e
            }) {
                var t;
                const n = e.checked;
                (null === (t = e.closest("form")) || void 0 === t ? void 0 : t.querySelector("button[type=submit]")).disabled = !n
            })), a("change", "input.js-survey-contact-checkbox", (function(e) {
                const t = e.currentTarget,
                    n = t.closest(".js-survey-question-form").querySelector(".js-survey-contact-checkbox-hidden");
                t.checked ? n.setAttribute("disabled", "true") : n.removeAttribute("disabled")
            })), a("details-menu-selected", ".js-sync-select-menu-text", (function(e) {
                const t = document.querySelector(".js-sync-select-menu-button"),
                    n = e.detail.relatedTarget.querySelector("span[data-menu-button-text]").textContent;
                t.textContent = n, t.focus()
            }), {
                capture: !0
            }), a("click", 'tab-container [role="tab"]', (function(e) {
                const {
                    currentTarget: t
                } = e, n = t.closest("tab-container").querySelector(".js-filterable-field, [data-filter-placeholder-input]");
                if (n instanceof HTMLInputElement) {
                    const e = t.getAttribute("data-filter-placeholder");
                    e && n.setAttribute("placeholder", e), n.focus()
                }
            })), a("tab-container-changed", "tab-container", (function(e) {
                const t = e.detail.relatedTarget,
                    n = t.getAttribute("data-fragment-url"),
                    o = t.querySelector("include-fragment");
                n && o && !o.hasAttribute("src") && (o.src = n)
            }));
            class TagInput {
                constructor(e) {
                    this.container = e.container, this.selections = e.selections, this.inputWrap = e.inputWrap, this.input = e.input, this.tagTemplate = e.tagTemplate, this.form = this.input.form, this.autoComplete = e.autoComplete
                }
                setup() {
                    this.container.addEventListener("click", (e => {
                        e.target.closest(".js-remove") ? this.removeTag(e) : this.onFocus()
                    })), this.input.addEventListener("focus", this.onFocus.bind(this)), this.input.addEventListener("blur", this.onBlur.bind(this)), this.input.addEventListener("keydown", this.onKeyDown.bind(this)), this.form.addEventListener("submit", this.onSubmit.bind(this)), this.autoComplete.addEventListener("auto-complete-change", (() => {
                        this.selectTag(this.autoComplete.value)
                    }))
                }
                onFocus() {
                    this.inputWrap.classList.add("focus"), this.input !== document.activeElement && this.input.focus()
                }
                onBlur() {
                    this.inputWrap.classList.remove("focus"), this.autoComplete.open || this.onSubmit()
                }
                onSubmit() {
                    this.input.value && (this.selectTag(this.input.value), this.autoComplete.open = !1)
                }
                onKeyDown(e) {
                    switch (T(e)) {
                        case "Backspace":
                            this.onBackspace();
                            break;
                        case "Enter":
                        case "Tab":
                            this.taggifyValueWhenSuggesterHidden(e);
                            break;
                        case ",":
                        case " ":
                            this.taggifyValue(e)
                    }
                }
                taggifyValueWhenSuggesterHidden(e) {
                    !this.autoComplete.open && this.input.value && (e.preventDefault(), this.selectTag(this.input.value))
                }
                taggifyValue(e) {
                    this.input.value && (e.preventDefault(), this.selectTag(this.input.value), this.autoComplete.open = !1)
                }
                selectTag(e) {
                    const t = this.normalizeTag(e),
                        n = this.selectedTags();
                    t && n.indexOf(t) < 0 && (this.selections.appendChild(this.templateTag(t)), this.input.value = "", h(this.form, "tags:changed"))
                }
                removeTag(e) {
                    const t = e.target;
                    e.preventDefault();
                    t.closest(".js-tag-input-tag").remove(), h(this.form, "tags:changed")
                }
                templateTag(e) {
                    const t = this.tagTemplate.cloneNode(!0);
                    t.querySelector("input").value = e;
                    return t.querySelector(".js-placeholder-tag-name").replaceWith(e), t.classList.remove("d-none", "js-template"), t
                }
                normalizeTag(e) {
                    return e.toLowerCase().trim().replace(/[\s,']+/g, "-")
                }
                onBackspace() {
                    if (!this.input.value) {
                        const e = this.selections.querySelector("li:last-child .js-remove");
                        e instanceof HTMLElement && e.click()
                    }
                }
                selectedTags() {
                    const e = this.selections.querySelectorAll("input");
                    return Array.from(e).map((e => e.value)).filter((e => e.length > 0))
                }
            }
            async function Br(e) {
                const t = e.currentTarget;
                if (function(e) {
                        return !!e.getAttribute("data-hovercard-url") && !!e.closest("[data-team-hovercards-enabled]")
                    }(t)) return void t.classList.remove("tooltipped");
                const n = t.getAttribute("data-url");
                if (!n) return;
                const o = await fetch(n, {
                    headers: {
                        Accept: "application/json"
                    }
                });
                if (!o.ok) return;
                const s = await o.json(),
                    r = t.getAttribute("data-id"),
                    i = document.querySelectorAll(`.js-team-mention[data-id='${r}']`);
                for (const c of i) c.removeAttribute("data-url");
                try {
                    0 === s.total ? s.members.push("This team has no members") : s.total > s.members.length && s.members.push(s.total - s.members.length + " more"), Wr(i, function(e) {
                        if ("ListFormat" in Intl) {
                            return (new Intl.ListFormat).format(e)
                        }
                        if (0 === e.length) return "";
                        if (1 === e.length) return e[0];
                        if (2 === e.length) return e.join(" and "); {
                            const t = e[e.length - 1];
                            return e.slice(0, -1).concat("and " + t).join(", ")
                        }
                    }(s.members))
                } catch (a) {
                    const e = a.response ? a.response.status : 500;
                    Wr(i, t.getAttribute(404 === e ? "data-permission-text" : "data-error-text"))
                }
            }

            function Wr(e, t) {
                for (const n of e) n instanceof HTMLElement && (n.setAttribute("aria-label", t), n.classList.add("tooltipped", "tooltipped-s", "tooltipped-multiline"))
            }
            i(".js-tag-input-container", {
                constructor: HTMLElement,
                initialize(e) {
                    new TagInput({
                        container: e,
                        inputWrap: e.querySelector(".js-tag-input-wrapper"),
                        input: e.querySelector('input[type="text"], input:not([type])'),
                        selections: e.querySelector(".js-tag-input-selected-tags"),
                        tagTemplate: e.querySelector(".js-template"),
                        autoComplete: e.querySelector("auto-complete")
                    }).setup()
                }
            }), document.addEventListener("keydown", (e => {
                if ("Escape" !== e.key) return;
                if (e.target !== document.body) return;
                const t = document.querySelector(".js-targetable-element:target");
                t && ut(t, (() => {
                    window.location.hash = "", window.history.replaceState(null, "", window.location.pathname + window.location.search)
                }))
            })), document.addEventListener("click", (e => {
                const t = document.querySelector(".js-targetable-element:target");
                t && (e.target instanceof HTMLAnchorElement || e.target instanceof HTMLElement && (t.contains(e.target) || ut(t, (() => {
                    window.location.hash = "", window.history.replaceState(null, "", window.location.pathname + window.location.search)
                }))))
            })), i(".js-team-mention", (function(e) {
                e.addEventListener("mouseenter", Br)
            }));
            let Ur = class TextSuggesterElement extends HTMLElement {
                acceptSuggestion() {
                    var e;
                    (null === (e = this.suggestion) || void 0 === e ? void 0 : e.textContent) && (this.input.value = this.suggestion.textContent, this.input.dispatchEvent(new Event("input")), this.suggestionContainer && (this.suggestionContainer.hidden = !0), this.input.focus())
                }
            };

            function zr(e) {
                if (function(e) {
                        let t;
                        try {
                            t = new URL(e.url)
                        } catch (n) {
                            return !0
                        }
                        return t.host !== window.location.host
                    }(e) || function(e) {
                        return /[?&]_pjax=/.test(e.url)
                    }(e)) return;
                const t = function() {
                    const e = document.querySelector(".js-timeline-marker");
                    return null != e ? e.getAttribute("data-last-modified") : null
                }();
                t && e.headers.set("X-Timeline-Last-Modified", t)
            }
            n([o], Ur.prototype, "input", void 0), n([o], Ur.prototype, "suggestionContainer", void 0), n([o], Ur.prototype, "suggestion", void 0), Ur = n([r], Ur), m(".js-needs-timeline-marker-header", (function(e, t, n) {
                zr(n)
            })), a("deprecatedAjaxSend", "[data-remote]", (function(e) {
                const {
                    request: t
                } = e.detail;
                zr(t)
            }));
            async function Xr() {
                const e = document.querySelectorAll(".js-comment-body video"),
                    t = Array.from(e).map((e => new Promise((t => {
                        if (e.readyState >= e.HAVE_METADATA) t(e);
                        else {
                            const n = setTimeout((() => t(e)), 5e3),
                                o = () => {
                                    clearTimeout(n), t(e)
                                };
                            e.addEventListener("loadeddata", (() => {
                                e.readyState >= e.HAVE_METADATA && o()
                            })), e.addEventListener("error", (() => o()))
                        }
                    }))));
                return Promise.all(t)
            }
            async function Vr() {
                const e = document.querySelectorAll(".js-comment-body img"),
                    t = Array.from(e).map((e => {
                        new Promise((t => {
                            if (e.complete) t(e);
                            else {
                                const n = setTimeout((() => t(e)), 5e3),
                                    o = () => {
                                        clearTimeout(n), t(e)
                                    };
                                e.addEventListener("load", (() => o())), e.addEventListener("error", (() => o()))
                            }
                        }))
                    }));
                return Promise.all(t)
            }
            async function Kr(e) {
                await async function() {
                    return Promise.all([Xr(), Vr()])
                }(),
                function(e) {
                    const t = e.closest("details, .js-details-container");
                    if (!t) return;
                    "DETAILS" === t.nodeName ? t.setAttribute("open", "open") : dt(t) || mt(t)
                }(e);
                const t = e.querySelector(`[href='#${e.id}']`);
                t && t.click()
            }
            async function Jr(e, t) {
                if (!t) return;
                const n = t.getAttribute("data-timeline-item-src");
                if (!n) return;
                const o = new URL(n, window.location.origin),
                    s = new URLSearchParams(o.search.slice(1));
                let r;
                s.append("anchor", e), o.search = s.toString();
                try {
                    r = await G(document, o.toString())
                } catch (l) {
                    return
                }
                const i = r.querySelector(".js-timeline-item");
                if (!i) return;
                const a = i.getAttribute("data-gid");
                if (!a) return;
                const c = document.querySelector(`.js-timeline-item[data-gid='${a}']`);
                if (c) {
                    c.replaceWith(i);
                    const t = document.getElementById(e);
                    t && await Kr(t)
                } else {
                    const t = document.getElementById("js-progressive-timeline-item-container");
                    t && t.replaceWith(r);
                    const n = document.getElementById(e);
                    n && await Kr(n)
                }
            }

            function Gr() {
                return window.location.hash.slice(1)
            }

            function Qr(e) {
                const {
                    name: t,
                    value: n
                } = e, o = {
                    name: window.location.href
                };
                switch (t) {
                    case "CLS":
                        o.cls = n;
                        break;
                    case "FCP":
                        o.fcp = n;
                        break;
                    case "FID":
                        o.fid = n;
                        break;
                    case "LCP":
                        o.lcp = n;
                        break;
                    case "TTFB":
                        o.ttfb = n
                }
                je({
                    webVitalTimings: [o]
                })
            }
            var Yr;
            fe((function({
                    target: e
                }) {
                    const t = Gr();
                    if (t && !e) {
                        const e = document.querySelector("#js-timeline-progressive-loader");
                        e && Jr(t, e)
                    }
                })), i(".js-timeline-progressive-focus-container", (function(e) {
                    const t = Gr();
                    if (!t) return;
                    const n = document.getElementById(t);
                    n && e.contains(n) && Kr(n)
                })), i("#js-timeline-progressive-loader", {
                    constructor: HTMLElement,
                    add: e => {
                        const t = Gr();
                        if (!t) return;
                        document.getElementById(t) || Jr(t, e)
                    }
                }), i("#js-discussions-timeline-anchor-loader", {
                    constructor: HTMLElement,
                    add: e => {
                        if (document.querySelector("#js-timeline-progressive-loader")) return;
                        const t = Gr();
                        if (!t) return;
                        document.getElementById(t) || Jr(t, e)
                    }
                }), i(".js-discussion", (function() {
                    let e = new WeakSet;

                    function t() {
                        e = new WeakSet(document.querySelectorAll(".js-timeline-item"))
                    }
                    t(), document.addEventListener("pjax:end", t), i(".js-timeline-item", (t => {
                        t instanceof HTMLElement && (e.has(t) || ne(t))
                    }))
                })), async function() {
                    if (!(window.performance && window.performance.timing && window.performance.getEntriesByType)) return;
                    await we, await new Promise((e => setTimeout(e)));
                    const e = window.performance.getEntriesByType("resource");
                    e.length && je({
                        resourceTimings: e
                    });
                    const t = window.performance.getEntriesByType("navigation");
                    t.length && je({
                        navigationTimings: t
                    })
                }(), O(Qr), B(Qr), W(Qr), U(Qr), z(Qr), a("click", ".js-toggler-container .js-toggler-target", (function(e) {
                    if (0 !== e.button) return;
                    const t = e.currentTarget.closest(".js-toggler-container");
                    t && t.classList.toggle("on")
                })), m(".js-toggler-container", (async (e, t) => {
                    e.classList.remove("success", "error"), e.classList.add("loading");
                    try {
                        await t.text(), e.classList.add("success")
                    } catch (n) {
                        e.classList.add("error")
                    } finally {
                        e.classList.remove("loading")
                    }
                })), window.requestIdleCallback((() => {
                    const e = ht();
                    e && ft("tz", encodeURIComponent(e))
                })),
                function(e) {
                    e.Initializing = "initializing", e.Unsupported = "unsupported", e.Ready = "ready", e.Waiting = "waiting", e.Error = "error", e.Submitting = "submitting"
                }(Yr || (Yr = {}));
            let Zr = class WebauthnGetElement extends HTMLElement {
                constructor() {
                    super(...arguments), this.state = Yr.Initializing, this.json = "", this.autofocusWhenReady = !1, this.hasErrored = !1
                }
                connectedCallback() {
                    this.originalButtonText = this.button.textContent, this.setState(pt() ? Yr.Ready : Yr.Unsupported)
                }
                setState(e) {
                    this.button.textContent = this.hasErrored ? this.button.getAttribute("data-retry-message") : this.originalButtonText, this.button.disabled = !1, this.button.hidden = !1;
                    for (const t of this.messages) t.hidden = !0;
                    switch (e) {
                        case Yr.Initializing:
                            this.button.disabled = !0;
                            break;
                        case Yr.Unsupported:
                            this.button.disabled = !0, this.unsupportedMessage.hidden = !1;
                            break;
                        case Yr.Ready:
                            this.autofocusWhenReady && this.button.focus();
                            break;
                        case Yr.Waiting:
                            this.waitingMessage.hidden = !1, this.button.hidden = !0;
                            break;
                        case Yr.Error:
                            this.errorMessage.hidden = !1;
                            break;
                        case Yr.Submitting:
                            this.button.textContent = "Verifying…", this.button.disabled = !0;
                            break;
                        default:
                            throw new Error("invalid state")
                    }
                    this.state = e
                }
                async prompt(e) {
                    e.preventDefault(), this.dispatchEvent(new CustomEvent("webauthn-get-prompt"));
                    try {
                        this.setState(Yr.Waiting);
                        const e = JSON.parse(this.json),
                            t = await gt(e);
                        this.setState(Yr.Submitting);
                        const n = this.closest(".js-webauthn-form");
                        n.querySelector(".js-webauthn-response").value = JSON.stringify(t), le(n)
                    } catch (t) {
                        throw this.hasErrored = !0, this.setState(Yr.Error), t
                    }
                }
            };
            var ei;
            n([o], Zr.prototype, "button", void 0), n([s], Zr.prototype, "messages", void 0), n([o], Zr.prototype, "unsupportedMessage", void 0), n([o], Zr.prototype, "waitingMessage", void 0), n([o], Zr.prototype, "errorMessage", void 0), n([c], Zr.prototype, "json", void 0), n([c], Zr.prototype, "autofocusWhenReady", void 0), Zr = n([r], Zr),
                function(e) {
                    e.Initializing = "initializing", e.ShowingForm = "showing-form", e.ShowingRevealer = "showing-revealer"
                }(ei || (ei = {}));
            let ti = class SudoPasswordElement extends HTMLElement {
                constructor() {
                    super(...arguments), this.state = ei.ShowingForm
                }
                connectedCallback() {
                    this.setState(this.state)
                }
                setState(e) {
                    switch (this.revealer.hidden = !0, this.form.hidden = !1, e) {
                        case ei.Initializing:
                            break;
                        case ei.ShowingForm:
                            this.passwordField.focus(), this.dispatchEvent(new CustomEvent("sudo-password-showing-form"));
                            break;
                        case ei.ShowingRevealer:
                            this.revealer.hidden = !1, this.form.hidden = !0;
                            break;
                        default:
                            throw new Error("invalid state")
                    }
                    this.state = e
                }
                reveal() {
                    this.setState(ei.ShowingForm)
                }
            };
            n([c], ti.prototype, "state", void 0), n([o], ti.prototype, "revealer", void 0), n([o], ti.prototype, "form", void 0), n([o], ti.prototype, "passwordField", void 0), ti = n([r], ti);
            let ni = class SudoAuthElement extends HTMLElement {
                connectedCallback() {
                    var e;
                    null === (e = this.webauthnGet) || void 0 === e || e.addEventListener("webauthn-get-prompt", (() => {
                        this.sudoPassword.setState(ei.ShowingRevealer)
                    })), this.sudoPassword.addEventListener("sudo-password-showing-form", (() => {
                        var e;
                        null === (e = this.webauthnGet) || void 0 === e || e.setState(Yr.Ready)
                    }))
                }
            };
            n([o], ni.prototype, "webauthnGet", void 0), n([o], ni.prototype, "sudoPassword", void 0), ni = n([r], ni);
            let oi = 0;
            const si = "IntersectionObserver" in window ? new IntersectionObserver((function(e) {
                for (const t of e) t.isIntersecting && ri(t.target)
            }), {
                root: null,
                rootMargin: "0px",
                threshold: 1
            }) : null;

            function ri(e) {
                e.classList.remove("js-unread-item", "unread-item")
            }
            i(".js-unread-item", {
                constructor: HTMLElement,
                add(e) {
                    oi++, si && si.observe(e)
                },
                remove(e) {
                    oi--, si && si.unobserve(e), 0 === oi && function() {
                        if (!document.hasFocus()) return;
                        const e = document.querySelector(".js-timeline-marker-form");
                        e && e instanceof HTMLFormElement && le(e)
                    }()
                }
            }), i(".js-discussion[data-channel-target]", {
                subscribe: e => ce(e, "socket:message", (function(e) {
                    const t = e.target,
                        n = e.detail.data;
                    if (t.getAttribute("data-channel-target") === n.gid)
                        for (const o of document.querySelectorAll(".js-unread-item")) ri(o)
                }))
            });
            let ii = 0;
            const ai = /^\(\d+\)\s+/;

            function ci() {
                const e = ii ? `(${ii}) ` : "";
                document.title.match(ai) ? document.title = document.title.replace(ai, e) : document.title = `${e}${document.title}`
            }
            i(".js-unread-item", {
                add() {
                    ii++, ci()
                },
                remove() {
                    ii--, ci()
                }
            }), i(".js-socket-channel.js-updatable-content", {
                subscribe: e => ce(e, "socket:message", (function(e) {
                    const {
                        gid: t,
                        wait: n
                    } = e.detail.data, o = e.target, s = t ? function(e, t) {
                        if (e.getAttribute("data-gid") === t) return e;
                        for (const n of e.querySelectorAll("[data-url][data-gid]"))
                            if (n.getAttribute("data-gid") === t) return n;
                        return null
                    }(o, t) : o;
                    s && setTimeout(bt, n || 0, s)
                }))
            }), window.addEventListener("beforeunload", (function() {
                if (Object.keys(yt).length > 0) {
                    const e = history.state || {};
                    e.staleRecords = yt, re(e, "", location.href)
                }
            }));
            try {
                !async function() {
                    if (history.state && history.state.staleRecords) {
                        await Ke;
                        for (const e in history.state.staleRecords)
                            for (const t of document.querySelectorAll(`.js-updatable-content [data-url='${e}'], .js-updatable-content[data-url='${e}']`)) {
                                const n = history.state.staleRecords[e];
                                t instanceof HTMLElement && Te(t, n, !0)
                            }
                        re(null, "", location.href)
                    }
                }()
            } catch (Ki) {}

            function li() {
                if (document.querySelector(":target")) return;
                const e = vt(location.hash).toLowerCase(),
                    t = wt(document, "user-content-" + e);
                t && jt(t)
            }
            async function ui(e) {
                const n = e.currentTarget,
                    {
                        init: o
                    } = await t.import("./chunk-user-status-submit.js");
                o(n)
            }
            a("upload:setup", ".js-upload-avatar-image", (function(e) {
                const {
                    form: t
                } = e.detail, n = e.currentTarget.getAttribute("data-alambic-organization"), o = e.currentTarget.getAttribute("data-alambic-owner-type"), s = e.currentTarget.getAttribute("data-alambic-owner-id");
                n && t.append("organization_id", n), o && t.append("owner_type", o), s && t.append("owner_id", s)
            })), a("upload:complete", ".js-upload-avatar-image", (function(e) {
                const {
                    attachment: t
                } = e.detail, n = "/settings/avatars/" + t.id;
                _e({
                    content: G(document, n)
                })
            })), window.addEventListener("hashchange", li), document.addEventListener("pjax:success", li), async function() {
                await Ke, li()
            }(), a("click", "a[href]", (function(e) {
                const {
                    currentTarget: t
                } = e;
                t instanceof HTMLAnchorElement && t.href === location.href && location.hash.length > 1 && setTimeout((function() {
                    e.defaultPrevented || li()
                }))
            })), i(".js-user-status-container", {
                subscribe: e => ce(e, "click", ui, {
                    once: !0
                })
            });
            let di = class VisiblePasswordElement extends HTMLElement {
                show() {
                    this.input.type = "text", this.input.focus(), this.showButton.hidden = !0, this.hideButton.hidden = !1
                }
                hide() {
                    this.input.type = "password", this.input.focus(), this.hideButton.hidden = !0, this.showButton.hidden = !1
                }
            };

            function mi(e) {
                const t = e.currentTarget;
                Lt(t) ? function(e) {
                    const t = e.getAttribute("data-warn-unsaved-changes") || "Changes you made may not be saved.";
                    window.onbeforeunload = function(e) {
                        return e.returnValue = t, t
                    }
                }(t) : hi()
            }

            function hi() {
                window.onbeforeunload = null
            }

            function fi({
                currentTarget: e
            }) {
                e.hasAttribute("open") || hi()
            }

            function pi(e) {
                const t = e.currentTarget;
                if (!t.closest("details[open]")) return;
                let n = !0;
                const o = t.querySelectorAll("form[data-warn-unsaved-changes]");
                for (const s of o)
                    if (Lt(s)) {
                        const e = s.getAttribute("data-warn-unsaved-changes");
                        n = confirm(e);
                        break
                    }
                n || e.preventDefault()
            }

            function gi(e) {
                e.target.classList.remove("will-transition-once")
            }
            async function bi(e) {
                const t = e.currentTarget,
                    n = t.getAttribute("data-url");
                if (!n || function(e) {
                        switch (e.getAttribute("data-hovercard-type")) {
                            case "issue":
                            case "pull_request":
                                return !!e.closest("[data-issue-and-pr-hovercards-enabled]");
                            case "discussion":
                                return !!e.closest("[data-discussion-hovercards-enabled]");
                            default:
                                return !1
                        }
                    }(t)) return;
                const o = t.getAttribute("data-id") || "",
                    s = t.textContent,
                    r = document.querySelectorAll(`.js-issue-link[data-id='${o}']`);
                for (const a of r) a.removeAttribute("data-url");
                try {
                    const e = await fetch(n, {
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
                    yi(r, `${s}, ${(await e.json()).title}`)
                } catch (i) {
                    const e = (null != i.response ? i.response.status : void 0) || 500;
                    yi(r, (() => {
                        switch (e) {
                            case 404:
                                return t.getAttribute("data-permission-text");
                            default:
                                return t.getAttribute("data-error-text")
                        }
                    })() || "")
                }
            }

            function yi(e, t) {
                for (const n of e) n instanceof HTMLElement && (n.classList.add("tooltipped", "tooltipped-ne"), n.setAttribute("aria-label", t))
            }
            n([o], di.prototype, "input", void 0), n([o], di.prototype, "showButton", void 0), n([o], di.prototype, "hideButton", void 0), di = n([r], di), i("[data-warn-unsaved-changes]", {
                add(e) {
                    e.addEventListener("input", mi), e.addEventListener("change", mi), e.addEventListener("submit", hi);
                    const t = e.closest("details-dialog");
                    t && (t.closest("details").addEventListener("toggle", fi), t.addEventListener("details-dialog-close", pi))
                },
                remove(e) {
                    e.removeEventListener("input", mi), e.removeEventListener("change", mi), e.removeEventListener("submit", hi);
                    const t = e.closest("details-dialog");
                    t && (t.closest("details").removeEventListener("toggle", fi), t.removeEventListener("details-dialog-close", pi), hi())
                }
            }), i(".will-transition-once", {
                constructor: HTMLElement,
                subscribe: e => ce(e, "transitionend", gi)
            }), a("click", ".js-video-play, .js-video-close", (function(e) {
                const t = e.currentTarget.closest(".js-video-container"),
                    n = t.querySelector(".js-video-iframe");
                "details" === t.tagName.toLowerCase() && t.addEventListener("details-dialog-close", (function() {
                        n.removeAttribute("src"), window.setTimeout((function() {
                            t.classList.remove("is-expanded")
                        }), 10)
                    })), t.classList.contains("is-expanded") ? (n.removeAttribute("src"), t.classList.remove("is-expanded")) : (n.src = n.getAttribute("data-src") || "", t.classList.add("is-expanded")),
                    function(e, t = 0) {
                        const n = e.getBoundingClientRect(),
                            o = n.top - t,
                            s = n.bottom - window.innerHeight + t;
                        o < 0 ? window.scrollBy(0, o) : s > 0 && window.scrollBy(0, s)
                    }(n, 20)
            })), i(".js-issue-link", {
                subscribe: e => ce(e, "mouseenter", bi)
            }), t.exports = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50]
            };
            var vi = X(Object.freeze({
                __proto__: null
            }));
            const wi = {};
            for (const t of Object.keys(vi)) wi[vi[t]] = t;
            const ji = {
                rgb: {
                    channels: 3,
                    labels: "rgb"
                },
                hsl: {
                    channels: 3,
                    labels: "hsl"
                },
                hsv: {
                    channels: 3,
                    labels: "hsv"
                },
                hwb: {
                    channels: 3,
                    labels: "hwb"
                },
                cmyk: {
                    channels: 4,
                    labels: "cmyk"
                },
                xyz: {
                    channels: 3,
                    labels: "xyz"
                },
                lab: {
                    channels: 3,
                    labels: "lab"
                },
                lch: {
                    channels: 3,
                    labels: "lch"
                },
                hex: {
                    channels: 1,
                    labels: ["hex"]
                },
                keyword: {
                    channels: 1,
                    labels: ["keyword"]
                },
                ansi16: {
                    channels: 1,
                    labels: ["ansi16"]
                },
                ansi256: {
                    channels: 1,
                    labels: ["ansi256"]
                },
                hcg: {
                    channels: 3,
                    labels: ["h", "c", "g"]
                },
                apple: {
                    channels: 3,
                    labels: ["r16", "g16", "b16"]
                },
                gray: {
                    channels: 1,
                    labels: ["gray"]
                }
            };
            var Li = ji;
            for (const t of Object.keys(ji)) {
                if (!("channels" in ji[t])) throw new Error("missing channels property: " + t);
                if (!("labels" in ji[t])) throw new Error("missing channel labels property: " + t);
                if (ji[t].labels.length !== ji[t].channels) throw new Error("channel and label counts mismatch: " + t);
                const {
                    channels: e,
                    labels: n
                } = ji[t];
                delete ji[t].channels, delete ji[t].labels, Object.defineProperty(ji[t], "channels", {
                    value: e
                }), Object.defineProperty(ji[t], "labels", {
                    value: n
                })
            }

            function Ei(e, t) {
                return (e[0] - t[0]) ** 2 + (e[1] - t[1]) ** 2 + (e[2] - t[2]) ** 2
            }

            function ki(e) {
                const t = function() {
                        const e = {},
                            t = Object.keys(Li);
                        for (let n = t.length, o = 0; o < n; o++) e[t[o]] = {
                            distance: -1,
                            parent: null
                        };
                        return e
                    }(),
                    n = [e];
                for (t[e].distance = 0; n.length;) {
                    const e = n.pop(),
                        o = Object.keys(Li[e]);
                    for (let s = o.length, r = 0; r < s; r++) {
                        const s = o[r],
                            i = t[s]; - 1 === i.distance && (i.distance = t[e].distance + 1, i.parent = e, n.unshift(s))
                    }
                }
                return t
            }

            function Si(e, t) {
                return function(n) {
                    return t(e(n))
                }
            }

            function Ti(e, t) {
                const n = [t[e].parent, e];
                let o = Li[t[e].parent][e],
                    s = t[e].parent;
                for (; t[s].parent;) n.unshift(t[s].parent), o = Si(Li[t[s].parent][s], o), s = t[s].parent;
                return o.conversion = n, o
            }
            ji.rgb.hsl = function(e) {
                const t = e[0] / 255,
                    n = e[1] / 255,
                    o = e[2] / 255,
                    s = Math.min(t, n, o),
                    r = Math.max(t, n, o),
                    i = r - s;
                let a, c;
                r === s ? a = 0 : t === r ? a = (n - o) / i : n === r ? a = 2 + (o - t) / i : o === r && (a = 4 + (t - n) / i), a = Math.min(60 * a, 360), a < 0 && (a += 360);
                const l = (s + r) / 2;
                return c = r === s ? 0 : l <= .5 ? i / (r + s) : i / (2 - r - s), [a, 100 * c, 100 * l]
            }, ji.rgb.hsv = function(e) {
                let t, n, o, s, r;
                const i = e[0] / 255,
                    a = e[1] / 255,
                    c = e[2] / 255,
                    l = Math.max(i, a, c),
                    u = l - Math.min(i, a, c),
                    d = function(e) {
                        return (l - e) / 6 / u + .5
                    };
                return 0 === u ? (s = 0, r = 0) : (r = u / l, t = d(i), n = d(a), o = d(c), i === l ? s = o - n : a === l ? s = 1 / 3 + t - o : c === l && (s = 2 / 3 + n - t), s < 0 ? s += 1 : s > 1 && (s -= 1)), [360 * s, 100 * r, 100 * l]
            }, ji.rgb.hwb = function(e) {
                const t = e[0],
                    n = e[1];
                let o = e[2];
                const s = ji.rgb.hsl(e)[0],
                    r = 1 / 255 * Math.min(t, Math.min(n, o));
                return o = 1 - 1 / 255 * Math.max(t, Math.max(n, o)), [s, 100 * r, 100 * o]
            }, ji.rgb.cmyk = function(e) {
                const t = e[0] / 255,
                    n = e[1] / 255,
                    o = e[2] / 255,
                    s = Math.min(1 - t, 1 - n, 1 - o);
                return [100 * ((1 - t - s) / (1 - s) || 0), 100 * ((1 - n - s) / (1 - s) || 0), 100 * ((1 - o - s) / (1 - s) || 0), 100 * s]
            }, ji.rgb.keyword = function(e) {
                const t = wi[e];
                if (t) return t;
                let n, o = 1 / 0;
                for (const s of Object.keys(vi)) {
                    const t = Ei(e, vi[s]);
                    t < o && (o = t, n = s)
                }
                return n
            }, ji.keyword.rgb = function(e) {
                return vi[e]
            }, ji.rgb.xyz = function(e) {
                let t = e[0] / 255,
                    n = e[1] / 255,
                    o = e[2] / 255;
                t = t > .04045 ? ((t + .055) / 1.055) ** 2.4 : t / 12.92, n = n > .04045 ? ((n + .055) / 1.055) ** 2.4 : n / 12.92, o = o > .04045 ? ((o + .055) / 1.055) ** 2.4 : o / 12.92;
                return [100 * (.4124 * t + .3576 * n + .1805 * o), 100 * (.2126 * t + .7152 * n + .0722 * o), 100 * (.0193 * t + .1192 * n + .9505 * o)]
            }, ji.rgb.lab = function(e) {
                const t = ji.rgb.xyz(e);
                let n = t[0],
                    o = t[1],
                    s = t[2];
                n /= 95.047, o /= 100, s /= 108.883, n = n > .008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116, o = o > .008856 ? o ** (1 / 3) : 7.787 * o + 16 / 116, s = s > .008856 ? s ** (1 / 3) : 7.787 * s + 16 / 116;
                return [116 * o - 16, 500 * (n - o), 200 * (o - s)]
            }, ji.hsl.rgb = function(e) {
                const t = e[0] / 360,
                    n = e[1] / 100,
                    o = e[2] / 100;
                let s, r, i;
                if (0 === n) return i = 255 * o, [i, i, i];
                s = o < .5 ? o * (1 + n) : o + n - o * n;
                const a = 2 * o - s,
                    c = [0, 0, 0];
                for (let l = 0; l < 3; l++) r = t + 1 / 3 * -(l - 1), r < 0 && r++, r > 1 && r--, i = 6 * r < 1 ? a + 6 * (s - a) * r : 2 * r < 1 ? s : 3 * r < 2 ? a + (s - a) * (2 / 3 - r) * 6 : a, c[l] = 255 * i;
                return c
            }, ji.hsl.hsv = function(e) {
                const t = e[0];
                let n = e[1] / 100,
                    o = e[2] / 100,
                    s = n;
                const r = Math.max(o, .01);
                o *= 2, n *= o <= 1 ? o : 2 - o, s *= r <= 1 ? r : 2 - r;
                return [t, 100 * (0 === o ? 2 * s / (r + s) : 2 * n / (o + n)), 100 * ((o + n) / 2)]
            }, ji.hsv.rgb = function(e) {
                const t = e[0] / 60,
                    n = e[1] / 100;
                let o = e[2] / 100;
                const s = Math.floor(t) % 6,
                    r = t - Math.floor(t),
                    i = 255 * o * (1 - n),
                    a = 255 * o * (1 - n * r),
                    c = 255 * o * (1 - n * (1 - r));
                switch (o *= 255, s) {
                    case 0:
                        return [o, c, i];
                    case 1:
                        return [a, o, i];
                    case 2:
                        return [i, o, c];
                    case 3:
                        return [i, a, o];
                    case 4:
                        return [c, i, o];
                    case 5:
                        return [o, i, a]
                }
            }, ji.hsv.hsl = function(e) {
                const t = e[0],
                    n = e[1] / 100,
                    o = e[2] / 100,
                    s = Math.max(o, .01);
                let r, i;
                i = (2 - n) * o;
                const a = (2 - n) * s;
                return r = n * s, r /= a <= 1 ? a : 2 - a, r = r || 0, i /= 2, [t, 100 * r, 100 * i]
            }, ji.hwb.rgb = function(e) {
                const t = e[0] / 360;
                let n = e[1] / 100,
                    o = e[2] / 100;
                const s = n + o;
                let r;
                s > 1 && (n /= s, o /= s);
                const i = Math.floor(6 * t),
                    a = 1 - o;
                r = 6 * t - i, 0 != (1 & i) && (r = 1 - r);
                const c = n + r * (a - n);
                let l, u, d;
                switch (i) {
                    default:
                        case 6:
                        case 0:
                        l = a,
                    u = c,
                    d = n;
                    break;
                    case 1:
                            l = c,
                        u = a,
                        d = n;
                        break;
                    case 2:
                            l = n,
                        u = a,
                        d = c;
                        break;
                    case 3:
                            l = n,
                        u = c,
                        d = a;
                        break;
                    case 4:
                            l = c,
                        u = n,
                        d = a;
                        break;
                    case 5:
                            l = a,
                        u = n,
                        d = c
                }
                return [255 * l, 255 * u, 255 * d]
            }, ji.cmyk.rgb = function(e) {
                const t = e[0] / 100,
                    n = e[1] / 100,
                    o = e[2] / 100,
                    s = e[3] / 100;
                return [255 * (1 - Math.min(1, t * (1 - s) + s)), 255 * (1 - Math.min(1, n * (1 - s) + s)), 255 * (1 - Math.min(1, o * (1 - s) + s))]
            }, ji.xyz.rgb = function(e) {
                const t = e[0] / 100,
                    n = e[1] / 100,
                    o = e[2] / 100;
                let s, r, i;
                return s = 3.2406 * t + -1.5372 * n + -.4986 * o, r = -.9689 * t + 1.8758 * n + .0415 * o, i = .0557 * t + -.204 * n + 1.057 * o, s = s > .0031308 ? 1.055 * s ** (1 / 2.4) - .055 : 12.92 * s, r = r > .0031308 ? 1.055 * r ** (1 / 2.4) - .055 : 12.92 * r, i = i > .0031308 ? 1.055 * i ** (1 / 2.4) - .055 : 12.92 * i, s = Math.min(Math.max(0, s), 1), r = Math.min(Math.max(0, r), 1), i = Math.min(Math.max(0, i), 1), [255 * s, 255 * r, 255 * i]
            }, ji.xyz.lab = function(e) {
                let t = e[0],
                    n = e[1],
                    o = e[2];
                t /= 95.047, n /= 100, o /= 108.883, t = t > .008856 ? t ** (1 / 3) : 7.787 * t + 16 / 116, n = n > .008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116, o = o > .008856 ? o ** (1 / 3) : 7.787 * o + 16 / 116;
                return [116 * n - 16, 500 * (t - n), 200 * (n - o)]
            }, ji.lab.xyz = function(e) {
                let t, n, o;
                n = (e[0] + 16) / 116, t = e[1] / 500 + n, o = n - e[2] / 200;
                const s = n ** 3,
                    r = t ** 3,
                    i = o ** 3;
                return n = s > .008856 ? s : (n - 16 / 116) / 7.787, t = r > .008856 ? r : (t - 16 / 116) / 7.787, o = i > .008856 ? i : (o - 16 / 116) / 7.787, t *= 95.047, n *= 100, o *= 108.883, [t, n, o]
            }, ji.lab.lch = function(e) {
                const t = e[0],
                    n = e[1],
                    o = e[2];
                let s;
                s = 360 * Math.atan2(o, n) / 2 / Math.PI, s < 0 && (s += 360);
                return [t, Math.sqrt(n * n + o * o), s]
            }, ji.lch.lab = function(e) {
                const t = e[0],
                    n = e[1],
                    o = e[2] / 360 * 2 * Math.PI;
                return [t, n * Math.cos(o), n * Math.sin(o)]
            }, ji.rgb.ansi16 = function(e, t = null) {
                const [n, o, s] = e;
                let r = null === t ? ji.rgb.hsv(e)[2] : t;
                if (r = Math.round(r / 50), 0 === r) return 30;
                let i = 30 + (Math.round(s / 255) << 2 | Math.round(o / 255) << 1 | Math.round(n / 255));
                return 2 === r && (i += 60), i
            }, ji.hsv.ansi16 = function(e) {
                return ji.rgb.ansi16(ji.hsv.rgb(e), e[2])
            }, ji.rgb.ansi256 = function(e) {
                const t = e[0],
                    n = e[1],
                    o = e[2];
                if (t === n && n === o) return t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232;
                return 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(o / 255 * 5)
            }, ji.ansi16.rgb = function(e) {
                let t = e % 10;
                if (0 === t || 7 === t) return e > 50 && (t += 3.5), t = t / 10.5 * 255, [t, t, t];
                const n = .5 * (1 + ~~(e > 50));
                return [(1 & t) * n * 255, (t >> 1 & 1) * n * 255, (t >> 2 & 1) * n * 255]
            }, ji.ansi256.rgb = function(e) {
                if (e >= 232) {
                    const t = 10 * (e - 232) + 8;
                    return [t, t, t]
                }
                let t;
                e -= 16;
                return [Math.floor(e / 36) / 5 * 255, Math.floor((t = e % 36) / 6) / 5 * 255, t % 6 / 5 * 255]
            }, ji.rgb.hex = function(e) {
                const t = (((255 & Math.round(e[0])) << 16) + ((255 & Math.round(e[1])) << 8) + (255 & Math.round(e[2]))).toString(16).toUpperCase();
                return "000000".substring(t.length) + t
            }, ji.hex.rgb = function(e) {
                const t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
                if (!t) return [0, 0, 0];
                let n = t[0];
                3 === t[0].length && (n = n.split("").map((e => e + e)).join(""));
                const o = parseInt(n, 16);
                return [o >> 16 & 255, o >> 8 & 255, 255 & o]
            }, ji.rgb.hcg = function(e) {
                const t = e[0] / 255,
                    n = e[1] / 255,
                    o = e[2] / 255,
                    s = Math.max(Math.max(t, n), o),
                    r = Math.min(Math.min(t, n), o),
                    i = s - r;
                let a, c;
                return a = i < 1 ? r / (1 - i) : 0, c = i <= 0 ? 0 : s === t ? (n - o) / i % 6 : s === n ? 2 + (o - t) / i : 4 + (t - n) / i, c /= 6, c %= 1, [360 * c, 100 * i, 100 * a]
            }, ji.hsl.hcg = function(e) {
                const t = e[1] / 100,
                    n = e[2] / 100,
                    o = n < .5 ? 2 * t * n : 2 * t * (1 - n);
                let s = 0;
                return o < 1 && (s = (n - .5 * o) / (1 - o)), [e[0], 100 * o, 100 * s]
            }, ji.hsv.hcg = function(e) {
                const t = e[1] / 100,
                    n = e[2] / 100,
                    o = t * n;
                let s = 0;
                return o < 1 && (s = (n - o) / (1 - o)), [e[0], 100 * o, 100 * s]
            }, ji.hcg.rgb = function(e) {
                const t = e[0] / 360,
                    n = e[1] / 100,
                    o = e[2] / 100;
                if (0 === n) return [255 * o, 255 * o, 255 * o];
                const s = [0, 0, 0],
                    r = t % 1 * 6,
                    i = r % 1,
                    a = 1 - i;
                let c = 0;
                switch (Math.floor(r)) {
                    case 0:
                        s[0] = 1, s[1] = i, s[2] = 0;
                        break;
                    case 1:
                        s[0] = a, s[1] = 1, s[2] = 0;
                        break;
                    case 2:
                        s[0] = 0, s[1] = 1, s[2] = i;
                        break;
                    case 3:
                        s[0] = 0, s[1] = a, s[2] = 1;
                        break;
                    case 4:
                        s[0] = i, s[1] = 0, s[2] = 1;
                        break;
                    default:
                        s[0] = 1, s[1] = 0, s[2] = a
                }
                return c = (1 - n) * o, [255 * (n * s[0] + c), 255 * (n * s[1] + c), 255 * (n * s[2] + c)]
            }, ji.hcg.hsv = function(e) {
                const t = e[1] / 100,
                    n = t + e[2] / 100 * (1 - t);
                let o = 0;
                return n > 0 && (o = t / n), [e[0], 100 * o, 100 * n]
            }, ji.hcg.hsl = function(e) {
                const t = e[1] / 100,
                    n = e[2] / 100 * (1 - t) + .5 * t;
                let o = 0;
                return n > 0 && n < .5 ? o = t / (2 * n) : n >= .5 && n < 1 && (o = t / (2 * (1 - n))), [e[0], 100 * o, 100 * n]
            }, ji.hcg.hwb = function(e) {
                const t = e[1] / 100,
                    n = t + e[2] / 100 * (1 - t);
                return [e[0], 100 * (n - t), 100 * (1 - n)]
            }, ji.hwb.hcg = function(e) {
                const t = e[1] / 100,
                    n = 1 - e[2] / 100,
                    o = n - t;
                let s = 0;
                return o < 1 && (s = (n - o) / (1 - o)), [e[0], 100 * o, 100 * s]
            }, ji.apple.rgb = function(e) {
                return [e[0] / 65535 * 255, e[1] / 65535 * 255, e[2] / 65535 * 255]
            }, ji.rgb.apple = function(e) {
                return [e[0] / 255 * 65535, e[1] / 255 * 65535, e[2] / 255 * 65535]
            }, ji.gray.rgb = function(e) {
                return [e[0] / 100 * 255, e[0] / 100 * 255, e[0] / 100 * 255]
            }, ji.gray.hsl = function(e) {
                return [0, 0, e[0]]
            }, ji.gray.hsv = ji.gray.hsl, ji.gray.hwb = function(e) {
                return [0, 100, e[0]]
            }, ji.gray.cmyk = function(e) {
                return [0, 0, 0, e[0]]
            }, ji.gray.lab = function(e) {
                return [e[0], 0, 0]
            }, ji.gray.hex = function(e) {
                const t = 255 & Math.round(e[0] / 100 * 255),
                    n = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
                return "000000".substring(n.length) + n
            }, ji.rgb.gray = function(e) {
                return [(e[0] + e[1] + e[2]) / 3 / 255 * 100]
            };
            const Ai = {};
            Object.keys(Li).forEach((e => {
                Ai[e] = {}, Object.defineProperty(Ai[e], "channels", {
                    value: Li[e].channels
                }), Object.defineProperty(Ai[e], "labels", {
                    value: Li[e].labels
                });
                const t = function(e) {
                    const t = ki(e),
                        n = {},
                        o = Object.keys(t);
                    for (let s = o.length, r = 0; r < s; r++) {
                        const e = o[r];
                        null !== t[e].parent && (n[e] = Ti(e, t))
                    }
                    return n
                }(e);
                Object.keys(t).forEach((n => {
                    const o = t[n];
                    Ai[e][n] = function(e) {
                        const t = function(...t) {
                            const n = t[0];
                            if (null == n) return n;
                            n.length > 1 && (t = n);
                            const o = e(t);
                            if ("object" == typeof o)
                                for (let e = o.length, s = 0; s < e; s++) o[s] = Math.round(o[s]);
                            return o
                        };
                        return "conversion" in e && (t.conversion = e.conversion), t
                    }(o), Ai[e][n].raw = function(e) {
                        const t = function(...t) {
                            const n = t[0];
                            return null == n ? n : (n.length > 1 && (t = n), e(t))
                        };
                        return "conversion" in e && (t.conversion = e.conversion), t
                    }(o)
                }))
            }));
            var xi = Ai;

            function qi() {
                return [Math.floor(255 * Math.random() + 0), Math.floor(255 * Math.random() + 0), Math.floor(255 * Math.random() + 0)]
            }

            function Mi(e, t) {
                const n = xi.rgb.hsl(t);
                e.style.setProperty("--label-r", t[0].toString()), e.style.setProperty("--label-g", t[1].toString()), e.style.setProperty("--label-b", t[2].toString()), e.style.setProperty("--label-h", n[0].toString()), e.style.setProperty("--label-s", n[1].toString()), e.style.setProperty("--label-l", n[2].toString())
            }

            function Ci(e, t) {
                e.blur();
                const n = e.closest("form"),
                    o = n.querySelector(".js-new-label-color-input");
                Z(o, "#" + xi.rgb.hex(t));
                Mi(n.querySelector(".js-new-label-color"), t)
            }

            function Hi(e, t, n) {
                const o = t.querySelector(e);
                o && (n ? function(e, t) {
                    e.closest(".js-label-error-container").classList.add("errored"), e.textContent = t, e.hidden = !1
                }(o, n[0]) : function(e) {
                    e.closest(".js-label-error-container").classList.remove("errored"), e.hidden = !0
                }(o))
            }

            function _i(e, t) {
                Hi(".js-label-name-error", e, t.name), Hi(".js-label-description-error", e, t.description), Hi(".js-label-color-error", e, t.color)
            }

            function Pi(e) {
                Hi(".js-label-name-error", e, null), Hi(".js-label-description-error", e, null), Hi(".js-label-color-error", e, null)
            }
            async function Ri(e) {
                const t = e.closest(".js-label-preview-container");
                if (!t) return;
                const n = e.closest(".js-label-form"),
                    o = n.querySelector(".js-new-label-error"),
                    s = n.getAttribute("data-label-id"),
                    r = t.querySelector(".js-label-preview"),
                    i = function(e, t) {
                        let n = e.querySelector(".js-new-label-name-input").value.trim();
                        return n.length < 1 && (n = t.getAttribute("data-default-name")), n
                    }(n, r),
                    a = function(e) {
                        const t = e.querySelector(".js-new-label-color-input");
                        return t.checkValidity() ? t.value.trim().replace(/^#/, "") : "ededed"
                    }(n),
                    c = function(e) {
                        let t = null;
                        const n = e.querySelector(".js-new-label-description-input");
                        return n instanceof HTMLInputElement && n.value.trim().length > 0 && (t = n.value.trim()), t
                    }(n),
                    l = function(e, t, n, o, s) {
                        const r = new URL(`${e}${encodeURIComponent(t)}`, window.location.origin),
                            i = new URLSearchParams(r.search.slice(1));
                        return i.append("color", n), o && i.append("description", o), s && i.append("id", s), r.search = i.toString(), r.toString()
                    }(r.getAttribute("data-url-template"), i, a, c, s);
                if (t.hasAttribute("data-last-preview-url")) {
                    if (l === t.getAttribute("data-last-preview-url")) return
                }
                let u;
                try {
                    u = await G(document, l)
                } catch (d) {
                    const e = await d.response.json();
                    return _i(n, e), void(o && (o.textContent = e.message, o.hidden = !1))
                }
                o && (o.textContent = "", o.hidden = !0), Pi(n), r.innerHTML = "", r.appendChild(u), t.setAttribute("data-last-preview-url", l)
            }

            function Ii(e, t) {
                e.closest(".js-details-container").classList.toggle("is-empty", t)
            }

            function Di(e) {
                const t = document.querySelector(".js-labels-count"),
                    n = Number(t.textContent) + e;
                t.textContent = n.toString();
                const o = document.querySelector(".js-labels-label");
                return o.textContent = o.getAttribute(1 === n ? "data-singular-string" : "data-plural-string"), n
            }
            async function Fi(e) {
                const t = e.querySelector(".js-new-label-name-input");
                if (!t) return;
                const n = e.querySelector(".js-new-label-color-input"),
                    o = qi(),
                    s = "#" + xi.rgb.hex(o);
                n.value = s;
                const r = e.querySelector(".js-new-label-color");
                Mi(r, o);
                const i = document.querySelector(".js-new-label-name").textContent;
                Z(t, i), Et(t), Ri(r)
            }
            he(".js-label-filter-field", (function(e) {
                const t = e.target,
                    n = t.closest("details-menu").querySelector(".js-new-label-name");
                if (!n) return;
                const o = t.value.trim();
                n.textContent = o
            })), a("filterable:change", ".js-filterable-issue-labels", (function(e) {
                const t = e.currentTarget.closest("details-menu"),
                    n = t.querySelector(".js-add-label-button");
                if (!n) return;
                const o = e.detail.inputField.value.trim().toLowerCase();
                let s = !1;
                for (const r of t.querySelectorAll("input[data-label-name]")) {
                    if ((r.getAttribute("data-label-name") || "").toLowerCase() === o) {
                        s = !0;
                        break
                    }
                }
                n.hidden = 0 === o.length || s
            })), ie(".js-new-label-color-input", (function(e) {
                const t = e.closest("form").querySelector(".js-new-label-swatches");
                t.hidden = !1, e.addEventListener("blur", (function() {
                    t.hidden = !0
                }), {
                    once: !0
                })
            })), he(".js-new-label-color-input", (function(e) {
                const t = e.target;
                let n = t.value.trim();
                if (!(n.length < 1))
                    if (0 !== n.indexOf("#") && (n = "#" + n, t.value = n), t.checkValidity()) {
                        t.classList.remove("color-text-danger");
                        Mi(t.closest("form").querySelector(".js-new-label-color"), xi.hex.rgb(n))
                    } else t.classList.add("color-text-danger")
            })), Me("keyup", ".js-new-label-color-input", (function(e) {
                const t = e.target;
                let n = t.value.trim();
                if (0 !== n.indexOf("#") && (n = "#" + n, t.value = n), t.checkValidity()) {
                    Mi(t.closest("form").querySelector(".js-new-label-color"), xi.hex.rgb(n))
                }
                h(t, "change", !1);
                Pi(t.closest("form"))
            })), Me("keyup", ".js-new-label-description-input", (function(e) {
                Pi(e.target.form)
            })), Me("keyup", ".js-new-label-color-input", (function(e) {
                Pi(e.target.form)
            })), a("click", ".js-new-label-color", (async function(e) {
                const t = e.currentTarget;
                Ci(t, qi()), Ri(t)
            })), a("mousedown", ".js-new-label-color-swatch", (function(e) {
                const t = e.currentTarget,
                    n = t.getAttribute("data-color");
                Ci(t, xi.hex.rgb(n)), Ri(t);
                t.closest(".js-new-label-swatches").hidden = !0
            })), a("toggle", ".js-new-label-modal", (function(e) {
                e.target.hasAttribute("open") && Fi(e.target)
            }), {
                capture: !0
            }), m(".js-new-label-modal-form", (async function(e, t) {
                const n = e.querySelector(".js-new-label-error");
                let o;
                try {
                    o = await t.html()
                } catch (a) {
                    const e = a.response.json;
                    n.textContent = e.message, n.hidden = !1
                }
                if (!o) return;
                n.hidden = !0, document.querySelector(".js-new-label-modal").removeAttribute("open");
                const s = document.querySelector(".js-filterable-issue-labels"),
                    r = o.html.querySelector("input");
                s.prepend(o.html), r && r.dispatchEvent(new Event("change", {
                    bubbles: !0
                }));
                const i = document.querySelector(".js-label-filter-field");
                i.value = i.defaultValue, i.focus()
            })), a("click", ".js-edit-label-cancel", (function(e) {
                const t = e.target.closest("form");
                Pi(t), t.reset();
                const n = t.querySelector(".js-new-label-color-input"),
                    o = n.value;
                Mi(t.querySelector(".js-new-label-color"), xi.hex.rgb(o)), kt(t), Ri(n);
                const s = e.currentTarget.closest(".js-labels-list-item");
                if (s) {
                    s.querySelector(".js-update-label").classList.add("d-none");
                    const e = s.querySelector(".js-label-preview");
                    if (e) {
                        e.classList.add("d-none");
                        s.querySelector(".js-label-link").classList.remove("d-none")
                    }
                    const t = s.querySelectorAll(".js-hide-on-label-edit");
                    for (const n of t) n.hidden = !n.hidden
                }
            })), m(".js-update-label", (async function(e, t) {
                let n;
                try {
                    n = await t.html()
                } catch (o) {
                    return void _i(e, o.response.json)
                }
                Pi(e);
                e.closest(".js-labels-list-item").replaceWith(n.html)
            })), m(".js-create-label", (async function(e, t) {
                let n;
                try {
                    n = await t.html()
                } catch (s) {
                    return void _i(e, s.response.json)
                }
                e.reset(), Pi(e), document.querySelector(".js-label-list").prepend(n.html), Di(1), Ii(e, !1);
                Ci(e.querySelector(".js-new-label-color"), qi()), Ri(e.querySelector(".js-new-label-name-input")), kt(e);
                const o = e.closest(".js-details-container");
                o instanceof HTMLElement && mt(o)
            })), a("click", ".js-details-target-new-label", (function() {
                document.querySelector(".js-create-label").querySelector(".js-new-label-name-input").focus()
            })), a("click", ".js-edit-label", (function(e) {
                const t = e.currentTarget.closest(".js-labels-list-item"),
                    n = t.querySelector(".js-update-label");
                n.classList.remove("d-none");
                n.querySelector(".js-new-label-name-input").focus();
                const o = t.querySelector(".js-label-preview");
                if (o) {
                    o.classList.remove("d-none");
                    t.querySelector(".js-label-link").classList.add("d-none")
                }
                const s = t.querySelectorAll(".js-hide-on-label-edit");
                for (const r of s) r.hidden = !r.hidden
            })), m(".js-delete-label", (async function(e, t) {
                const n = e.closest(".js-labels-list-item");
                n.querySelector(".js-label-delete-spinner").hidden = !1, await t.text();
                Ii(e, 0 === Di(-1)), n.remove()
            }));
            const $i = p((function(e) {
                Ri(e.target)
            }), 500);

            function Ni() {
                const e = document.querySelector(".js-reveal-custom-thread-settings").checked,
                    t = !document.querySelector(".js-custom-thread-notification-option:checked"),
                    n = document.querySelector(".js-custom-thread-settings"),
                    o = document.querySelector("[data-custom-option-required-text]"),
                    s = e && t ? o.getAttribute("data-custom-option-required-text") : "";
                o.setCustomValidity(s), n.hidden = !e
            }
            a("suggester:complete", ".js-new-label-name-input", $i), he(".js-new-label-name-input", $i), he(".js-new-label-description-input", $i), he(".js-new-label-color-input", $i), Me("keypress", ".js-new-label-name-input", (function(e) {
                const t = e.target,
                    n = parseInt(t.getAttribute("data-maxlength"));
                St(t.value) >= n && e.preventDefault()
            })), a("click", ".js-issues-label-select-menu-item", (function(e) {
                e.altKey && (e.preventDefault(), e.stopPropagation(), window.location.href = e.currentTarget.getAttribute("data-excluded-url"))
            })), Me("keydown", ".js-issues-label-select-menu-item", (function(e) {
                if ("Enter" !== e.key) return;
                if (!e.altKey) return;
                const t = e.currentTarget;
                e.preventDefault(), e.stopPropagation(), t instanceof HTMLAnchorElement && (window.location.href = t.getAttribute("data-excluded-url"))
            })), a("click", ".js-open-label-creation-modal", (async function(e) {
                e.stopImmediatePropagation();
                Fi(await _e({
                    content: document.querySelector(".js-label-creation-template").content.cloneNode(!0),
                    detailsClass: "js-new-label-modal"
                }))
            }), {
                capture: !0
            }), a("change", ".js-thread-notification-setting", Ni), a("change", ".js-custom-thread-notification-option", Ni), a("reset", ".js-custom-thread-settings-form", Ni);
            let Oi = class CollapsibleSidebarWidgetElement extends HTMLElement {
                get activeClass() {
                    return this.getAttribute("active-class") || "collapsible-sidebar-widget-active"
                }
                get loadingClass() {
                    return this.getAttribute("loading-class") || "collapsible-sidebar-widget-loading"
                }
                get url() {
                    return this.getAttribute("url") || ""
                }
                get isOpen() {
                    return this.hasAttribute("open")
                }
                set isOpen(e) {
                    e ? this.setAttribute("open", "") : this.removeAttribute("open")
                }
                onKeyDown(e) {
                    if ("Enter" === e.code || "Space" === e.code) return e.preventDefault(), this.load()
                }
                onMouseDown(e) {
                    return e.preventDefault(), this.load()
                }
                load() {
                    return this.pendingRequest ? this.pendingRequest.abort() : this.collapsible.hasAttribute("loaded") ? this.isOpen ? this.setClose() : this.setOpen() : (this.setLoading(), this.updateCollapsible())
                }
                setLoading() {
                    this.classList.add(this.loadingClass), this.classList.remove(this.activeClass)
                }
                setOpen() {
                    this.classList.add(this.activeClass), this.classList.remove(this.loadingClass), this.isOpen = !0
                }
                setClose() {
                    this.classList.remove(this.activeClass), this.classList.remove(this.loadingClass), this.isOpen = !1
                }
                handleAbort() {
                    this.pendingRequest = null, this.setClose()
                }
                async updateCollapsible() {
                    var e;
                    try {
                        this.pendingRequest = new AbortController, this.pendingRequest.signal.addEventListener("abort", (() => this.handleAbort()));
                        const t = await fetch(this.url, {
                            signal: null === (e = this.pendingRequest) || void 0 === e ? void 0 : e.signal,
                            headers: {
                                Accept: "text/html",
                                "X-Requested-With": "XMLHttpRequest"
                            }
                        });
                        if (this.pendingRequest = null, !t.ok) return this.setClose();
                        const n = await t.text();
                        this.collapsible.innerHTML = n, this.collapsible.setAttribute("loaded", ""), this.setOpen()
                    } catch (t) {
                        return this.pendingRequest = null, this.setClose()
                    }
                }
            };
            n([o], Oi.prototype, "collapsible", void 0), Oi = n([r], Oi);
            let Bi = class SidebarMemexInputElement extends HTMLElement {
                constructor() {
                    super(...arguments), this.url = "", this.csrf = "", this.instrument = "", this.column = 1
                }
                get isDisabled() {
                    var e;
                    return null === (e = this.read) || void 0 === e ? void 0 : e.hasAttribute("disabled")
                }
                set hasErrored(e) {
                    e ? this.setAttribute("errored", "") : this.removeAttribute("errored")
                }
                set disabled(e) {
                    e ? this.setAttribute("disabled", "") : this.removeAttribute("disabled")
                }
                get hasExpanded() {
                    return "true" === this.read.getAttribute("aria-expanded")
                }
                connectedCallback() {
                    var e, t;
                    this.disabled = null === (t = null === (e = this.read) || void 0 === e ? void 0 : e.disabled) || void 0 === t || t, null !== this.querySelector("details") && this.classList.toggle("no-pointer")
                }
                handleDetailsSelect(e) {
                    var t;
                    const n = e,
                        o = e.target,
                        s = null === (t = n.detail) || void 0 === t ? void 0 : t.relatedTarget,
                        r = o.closest("details"),
                        i = null == r ? void 0 : r.querySelector("[data-menu-button]");
                    if ("true" === s.getAttribute("aria-checked")) {
                        s.setAttribute("aria-checked", "false"), e.preventDefault();
                        for (const e of this.inputs)
                            if (s.contains(e)) {
                                this.updateCell(e.name, ""), (null == i ? void 0 : i.innerHTML) && (i.innerHTML = e.placeholder);
                                break
                            }
                        null == r || r.removeAttribute("open")
                    }
                }
                handleDetailsSelected(e) {
                    var t;
                    const n = null === (t = e.detail) || void 0 === t ? void 0 : t.relatedTarget;
                    for (const o of this.inputs)
                        if (n.contains(o)) {
                            this.updateCell(o.name, o.value);
                            break
                        }
                }
                mouseDownFocus(e) {
                    this.isDisabled && this.onFocus(e)
                }
                keyDownFocus(e) {
                    "Enter" !== e.code && "Space" !== e.code || this.read !== document.activeElement && this.onFocus(e)
                }
                onChange(e) {
                    var t, n;
                    "date" !== e.target.getAttribute("type") && this.updateCell(null === (t = this.read) || void 0 === t ? void 0 : t.name, null === (n = this.read) || void 0 === n ? void 0 : n.value)
                }
                onFocus(e) {
                    e.preventDefault(), this.disabled = !1, this.read.disabled = !1, this.read.focus()
                }
                onBlur(e) {
                    var t, n;
                    if (this.hasExpanded) return void e.preventDefault();
                    "date" === e.target.getAttribute("type") && this.updateCell(null === (t = this.read) || void 0 === t ? void 0 : t.name, null === (n = this.read) || void 0 === n ? void 0 : n.value), this.read.disabled = !0, this.disabled = !0
                }
                onKeyDown(e) {
                    if ("Enter" === e.code || "Tab" === e.code) {
                        if (e.preventDefault(), e.stopPropagation(), this.hasExpanded) return;
                        this.read.blur()
                    }
                }
                async updateCell(e = "", t = "") {
                    const n = new FormData;
                    n.set(e, t), n.set("ui", this.instrument);
                    for (const r of this.parameters) n.set(r.name, r.value);
                    const o = Intl.DateTimeFormat("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                        timeZone: "UTC"
                    });
                    try {
                        if (this.write) {
                            const e = this.read.value,
                                t = "date" === this.read.type && e ? o.format(Date.parse(e)) : e;
                            this.write.innerHTML = e ? t : this.read.placeholder
                        }
                        const e = await fetch(this.url, {
                            method: "PUT",
                            body: n,
                            headers: {
                                Accept: "application/json",
                                "X-Requested-With": "XMLHttpRequest",
                                "Scoped-CSRF-Token": "" + this.csrf
                            }
                        });
                        if (!e.ok) throw new Error("connection error");
                        if (!this.write) return;
                        const s = await e.json(),
                            r = s.memexProjectItem.memexProjectColumnValues.find((e => e.memexProjectColumnId === Number(this.column))).value,
                            i = "date" === this.read.type ? Date.parse(r.value) : r.html,
                            a = "date" === this.read.type && i ? o.format(i) : i;
                        this.write.innerHTML = t ? a : this.read.placeholder
                    } catch (s) {
                        this.hasErrored = !0
                    }
                }
            };

            function Wi(e, t = !1) {
                !t && function(e) {
                    const t = e.getAttribute("data-reviewers-team-size-check-url");
                    if (!t) return !1;
                    const n = [...document.querySelectorAll(".js-reviewer-team")].map((e => e.getAttribute("data-id"))),
                        o = e instanceof HTMLFormElement ? new FormData(e) : Xi(e),
                        s = new URLSearchParams(o).getAll("reviewer_team_ids[]").filter((e => !n.includes(e)));
                    if (0 === s.length) return !1;
                    const r = new URLSearchParams(s.map((e => ["reviewer_team_ids[]", e])));
                    return async function(e, t) {
                        const n = await fetch(t);
                        if (!n.ok) return;
                        const o = await n.text();
                        if (!o.match(/[^\w-]js-large-team[^\w-]/)) return void Wi(e, !0);
                        ! function(e, t) {
                            const n = e.querySelector(".js-large-teams-check-warning-container");
                            for (; n.firstChild;) n.removeChild(n.firstChild);
                            n.appendChild(se(document, t));
                            const o = n.querySelector("details");

                            function s(t) {
                                if (t.target instanceof Element) {
                                    if (o.open = !1, !t.target.classList.contains("js-large-teams-request-button")) {
                                        const t = e.querySelectorAll("input[name='reviewer_team_ids[]']");
                                        for (const e of t) n.querySelector(`.js-large-team[data-id='${e.value}']`) && (e.checked = !1)
                                    }
                                    Wi(e, !0), t.preventDefault()
                                }
                            }
                            n.querySelector(".js-large-teams-request-button").addEventListener("click", s, {
                                once: !0
                            }), n.querySelector(".js-large-teams-do-not-request-button").addEventListener("click", s, {
                                once: !0
                            }), o.addEventListener("details-dialog-close", s, {
                                once: !0
                            }), o.open = !0
                        }(e, o)
                    }(e, `${t}?${r}`), !0
                }(e) || (e instanceof HTMLFormElement ? le(e) : zi(e))
            }

            function Ui(e) {
                const t = e.currentTarget;
                Wi(t.closest(".js-issue-sidebar-form") || t.querySelector(".js-issue-sidebar-form"))
            }
            async function zi(e, t = "post", n) {
                const o = Xi(e);
                n && o.append(n.name, n.value);
                const s = e.getAttribute("data-url");
                if (!s) return;
                const r = e.querySelector(".js-data-url-csrf"),
                    i = await fetch(s, {
                        method: t,
                        body: "delete" === t ? "" : o,
                        mode: "same-origin",
                        headers: {
                            "Scoped-CSRF-Token": r.value,
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    });
                if (!i.ok) return;
                const a = await i.text();
                ! function(e, t) {
                    e.replaceWith(se(document, t))
                }(e.closest(".js-discussion-sidebar-item"), a)
            }

            function Xi(e) {
                const t = e.closest("form"),
                    n = new FormData(t).entries(),
                    o = new FormData;
                for (const [s, r] of n) e.contains(Vi(t, s, r.toString())) && o.append(s, r);
                return o
            }

            function Vi(e, t, n) {
                for (const o of e.elements)
                    if ((o instanceof HTMLInputElement || o instanceof HTMLTextAreaElement || o instanceof HTMLButtonElement) && o.name === t && o.value === n) return o;
                return null
            }
            n([c], Bi.prototype, "url", void 0), n([c], Bi.prototype, "csrf", void 0), n([c], Bi.prototype, "instrument", void 0), n([c], Bi.prototype, "column", void 0), n([s], Bi.prototype, "inputs", void 0), n([o], Bi.prototype, "read", void 0), n([o], Bi.prototype, "write", void 0), n([s], Bi.prototype, "parameters", void 0), Bi = n([r], Bi), a("details-menu-selected", ".js-discussion-sidebar-menu", (function(e) {
                const t = e.detail.relatedTarget,
                    n = e.currentTarget,
                    o = t.closest(".js-issue-sidebar-form"),
                    s = n.hasAttribute("data-multiple");
                if (t.hasAttribute("data-clear-assignees")) {
                    const e = n.querySelectorAll('input[name="issue[user_assignee_ids][]"]:checked');
                    for (const t of e) t.disabled = !1, t.checked = !1;
                    Wi(o)
                } else s ? n.closest("details").addEventListener("toggle", Ui, {
                    once: !0
                }) : Wi(o)
            }), {
                capture: !0
            }), m(".js-issue-sidebar-form", (async function(e, t) {
                const n = await t.html();
                e.closest(".js-discussion-sidebar-item").replaceWith(n.html)
            })), a("click", "div.js-issue-sidebar-form .js-suggested-reviewer", (function(e) {
                const t = e.currentTarget;
                zi(t.closest(".js-issue-sidebar-form"), "post", {
                    name: t.name,
                    value: t.value
                }), e.preventDefault()
            })), a("click", "div.js-issue-sidebar-form .js-issue-assign-self", (function(e) {
                const t = e.currentTarget;
                zi(t.closest(".js-issue-sidebar-form"), "post", {
                    name: t.name,
                    value: t.value
                }), e.preventDefault()
            })), a("click", ".js-issue-unassign-self", (function(e) {
                zi(e.currentTarget.closest(".js-issue-sidebar-form"), "delete"), e.preventDefault()
            })), m(".js-pages-preview-toggle-form", (async function(e, t) {
                const n = await t.json();
                e.querySelector("button.btn").textContent = n.json.new_button_value
            })), a("change", ".js-project-menu-checkbox", (function(e) {
                const t = e.currentTarget,
                    n = t.closest(".js-project-menu-container");
                for (const o of n.querySelectorAll(".js-project-menu-checkbox"))
                    if (o !== t && o.name === t.name) {
                        o.checked = t.checked;
                        const e = o.closest(".js-navigation-item");
                        e && e.classList.toggle("selected", t.checked);
                        const n = o.closest("label[aria-checked]");
                        n && n.setAttribute("aria-checked", t.checked.toString())
                    }
            })), a("click", "div.js-project-column-menu-container .js-project-column-menu-item button", (async function(e) {
                const t = e.currentTarget;
                ! function(e) {
                    const t = e.closest(".js-project-column-menu-dropdown").querySelector(".js-project-column-menu-summary"),
                        n = e.getAttribute("data-column-name");
                    t.textContent = n
                }(t);
                const n = t.getAttribute("data-url"),
                    o = t.parentElement.querySelector(".js-data-url-csrf"),
                    s = t.getAttribute("data-card-id"),
                    r = new FormData;
                r.append("card_id", s), r.append("use_automation_prioritization", "true"), e.preventDefault();
                if (!(await fetch(n, {
                        method: "PUT",
                        mode: "same-origin",
                        body: r,
                        headers: {
                            "Scoped-CSRF-Token": o.value,
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    })).ok) return;
                const i = document.activeElement,
                    a = t.closest(".js-project-column-menu-dropdown");
                if (i && a.contains(i)) try {
                    i.blur()
                } catch (c) {}
            })), a("click", ".js-prompt-dismiss", (function(e) {
                e.currentTarget.closest(".js-prompt").remove()
            })), a("click", ".js-convert-to-draft", (function(e) {
                const t = e.currentTarget.getAttribute("data-url"),
                    n = e.currentTarget.parentElement.querySelector(".js-data-url-csrf");
                fetch(t, {
                    method: "POST",
                    mode: "same-origin",
                    headers: {
                        "Scoped-CSRF-Token": n.value,
                        "X-Requested-With": "XMLHttpRequest"
                    }
                })
            })), V("readme-toc", (() => t.import("./chunk-readme-toc-element.js"))), V("launch-code", (() => t.import("./chunk-launch-code-element.js"))), V("severity-calculator", (() => t.import("./chunk-severity-calculator-element.js"))), V("metric-selection", (() => t.import("./chunk-metric-selection-element.js"))), V("profile-pins", (() => t.import("./chunk-profile-pins-element.js"))), V("insights-graph", (() => t.import("./chunk-insights-graph.js"))), V("emoji-picker", (() => t.import("./chunk-emoji-picker-element.js"))), V("edit-hook-secret", (() => t.import("./chunk-edit-hook-secret-element.js"))), V("insights-query", (() => t.import("./chunk-insights-query.js"))), V("series-table", (() => t.import("./chunk-series-table.js")))
        }
    }
}));
//# sourceMappingURL=behaviors-6297657e.js.map