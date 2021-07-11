System.register([], (function(t) {
    "use strict";
    return {
        execute: function() {
            function e(t) {
                return window.matchMedia && window.matchMedia(`(prefers-color-scheme: ${t})`).matches
            }
            t({
                a: function(t, e) {
                    const r = document.querySelector("html[data-color-mode]");
                    if (!r) return;
                    r.setAttribute(`data-${e}-theme`, t)
                },
                b: function() {
                    if (e("dark")) return "dark";
                    if (e("light")) return "light";
                    return
                },
                g: function(t) {
                    const e = document.querySelector("html[data-color-mode]");
                    if (!e) return;
                    return e.getAttribute(`data-${t}-theme`)
                },
                s: function(t) {
                    const e = document.querySelector("html[data-color-mode]");
                    if (!e) return;
                    e.setAttribute("data-color-mode", t)
                }
            })
        }
    }
}));
//# sourceMappingURL=chunk-color-modes-f0514571.js.map