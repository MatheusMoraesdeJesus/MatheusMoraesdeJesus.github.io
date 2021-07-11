System.register(["./chunk-vendor.js"], (function() {
    "use strict";
    var e, t;
    return {
        setters: [function(n) {
            e = n.o, t = n.a
        }],
        execute: function() {
            function n(e) {
                e.removeEventListener("wheel", r, !1), "ontouchstart" in window && e.removeEventListener("scroll", r, !1)
            }

            function r(e) {
                const t = e.currentTarget,
                    r = document.querySelector(".js-horizontal-scroll-to-end");
                n(t), null == r || r.remove()
            }
            e(".js-features-nav-container", (() => {
                document.querySelector(".js-features-nav-container").addEventListener("wheel", r, {
                    capture: !1,
                    passive: !0
                }), "ontouchstart" in window && document.querySelector(".js-features-nav-container").addEventListener("scroll", r, {
                    capture: !1
                })
            })), t("click", ".js-horizontal-scroll-to-end", (function(e) {
                const t = e.currentTarget,
                    r = document.querySelector(".js-features-nav-container"),
                    o = r.querySelector("nav").lastElementChild,
                    s = o.offsetLeft + o.clientWidth - r.clientWidth;
                n(r), null == t || t.remove(), r.scrollTo({
                    top: 0,
                    left: s,
                    behavior: "smooth"
                })
            })), t("click", ".js-features-category-items-unveil", (function(e) {
                e.preventDefault();
                const t = e.currentTarget,
                    n = t.closest(".js-features-category-items");
                if (!n) return;
                t.remove();
                const r = n.querySelectorAll(".features-category-item");
                for (const o of r) o.classList.add("js-features-category-item-visible");
                if (r.length > 3) {
                    const e = r[3].querySelector("[tabindex], a");
                    null == e || e.focus()
                }
            })), t("click", ".js-features-page-nav .js-scrollnav-item", (function(e) {
                e.currentTarget.closest(".js-features-page-nav").classList.remove("on")
            }))
        }
    }
}));
//# sourceMappingURL=marketing-features-6a59c6fc.js.map