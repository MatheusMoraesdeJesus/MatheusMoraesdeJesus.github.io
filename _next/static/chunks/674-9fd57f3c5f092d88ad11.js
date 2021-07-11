(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [674], {
        6674: function(e, r, t) {
            "use strict";
            t.d(r, {
                H: function() {
                    return Te
                }
            });
            var n = t(5893),
                s = t(9008),
                a = t(5988),
                i = t(1163),
                l = t(5529),
                c = t(6359),
                o = t(4433),
                u = t(1013),
                d = t(4184),
                h = t.n(d),
                p = t(7294),
                m = t(2880),
                f = function() {
                    var e = (0, i.useRouter)(),
                        r = (0, u.Hv)().currentProductTree;
                    if ((0, p.useEffect)((function() {
                            var e, r = document.querySelector(".sidebar-article.active");
                            null === r || void 0 === r || r.scrollIntoView({
                                block: "center"
                            }), null === (e = window) || void 0 === e || e.scrollTo(0, 0)
                        }), []), !r) return null;
                    var t = r.renderedShortTitle || r.renderedFullTitle,
                        s = "/".concat(e.locale).concat(e.asPath.split("?")[0]),
                        a = r.childPages.find((function(e) {
                            var r = e.href;
                            return s.includes(r)
                        }));
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(m.H, {}), !r.page.hidden && (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)("li", {
                                title: "",
                                className: "sidebar-product mb-2",
                                children: (0, n.jsx)(c.r, {
                                    href: r.href,
                                    className: "pl-4 pr-5 pb-1 f4 color-text-primary no-underline",
                                    children: t
                                })
                            }), (0, n.jsx)("li", {
                                children: (0, n.jsx)("ul", {
                                    className: "sidebar-categories list-style-none",
                                    children: r.childPages.map((function(e, r) {
                                        var t = "article" === e.page.documentType,
                                            i = e.renderedShortTitle || e.renderedFullTitle,
                                            l = s.includes("".concat(e.href, "/")),
                                            o = s === e.href,
                                            u = !!a && (l || o);
                                        return (0, n.jsx)("li", {
                                            className: h()("sidebar-category py-1", l && "active", o && "is-current-page", t && "standalone-category"),
                                            children: t ? (0, n.jsx)(c.r, {
                                                href: e.href,
                                                className: "pl-4 pr-2 py-2 d-block flex-auto mr-3 color-text-primary no-underline text-bold",
                                                children: i
                                            }) : (0, n.jsx)(x, {
                                                defaultOpen: u,
                                                routePath: s,
                                                title: i,
                                                page: e
                                            })
                                        }, e.href + r)
                                    }))
                                })
                            })]
                        })]
                    })
                },
                x = function(e) {
                    var r, t, s = e.routePath,
                        a = e.defaultOpen,
                        i = e.title,
                        o = e.page,
                        u = (0, p.useState)(a),
                        d = u[0],
                        m = u[1];
                    return (0, n.jsxs)("details", {
                        open: a,
                        onToggle: function(e) {
                            return m(e.target.open)
                        },
                        children: [(0, n.jsx)("summary", {
                            children: (0, n.jsxs)("div", {
                                className: "d-flex flex-justify-between",
                                children: [(0, n.jsx)("div", {
                                    className: "pl-4 pr-1 py-2 f6 text-uppercase d-block flex-auto mr-3 color-text-primary no-underline text-bold",
                                    children: i
                                }), (0, n.jsx)("span", {
                                    style: {
                                        marginTop: 7
                                    },
                                    className: "flex-shrink-0 pr-3",
                                    children: (0, n.jsx)(l.v4q, {
                                        className: h()("opacity-60", d && "rotate-180")
                                    })
                                })]
                            })
                        }), (0, n.jsx)(n.Fragment, {
                            children: "mapTopic" === (null === (r = o.childPages[0]) || void 0 === r ? void 0 : r.page.documentType) ? (0, n.jsx)("ul", {
                                className: "sidebar-topics list-style-none position-relative",
                                children: o.childPages.map((function(e, r) {
                                    var t = e.renderedShortTitle || e.renderedFullTitle,
                                        a = s.includes(e.href),
                                        i = s === e.href;
                                    return (0, n.jsx)("li", {
                                        className: h()("sidebar-maptopic", a && "active", i && "is-current-page"),
                                        children: (0, n.jsxs)("details", {
                                            open: a,
                                            onToggle: function(e) {
                                                return e.stopPropagation()
                                            },
                                            children: [(0, n.jsx)("summary", {
                                                children: (0, n.jsx)("div", {
                                                    className: h()("pl-4 pr-5 py-2 no-underline"),
                                                    children: t
                                                })
                                            }), (0, n.jsx)("ul", {
                                                className: "sidebar-articles my-2",
                                                children: e.childPages.map((function(e, r, t) {
                                                    var a = e.renderedShortTitle || e.renderedFullTitle,
                                                        i = r === t.length - 1,
                                                        l = s === e.href;
                                                    return (0, n.jsx)("li", {
                                                        className: h()("sidebar-article", l && "active"),
                                                        children: (0, n.jsx)(c.r, {
                                                            href: e.href,
                                                            className: h()("pl-6 pr-5 py-1 no-underline", i && "pb-2", l && "color-text-link"),
                                                            children: a
                                                        })
                                                    }, e.href + r)
                                                }))
                                            })]
                                        })
                                    }, e.href + r)
                                }))
                            }) : "article" === (null === (t = o.childPages[0]) || void 0 === t ? void 0 : t.page.documentType) ? (0, n.jsx)("ul", {
                                className: "sidebar-articles list-style-none",
                                children: o.childPages.map((function(e, r, t) {
                                    var a = e.renderedShortTitle || e.renderedFullTitle,
                                        i = r === t.length - 1,
                                        l = s.includes(e.href),
                                        o = s === e.href;
                                    return (0, n.jsx)("li", {
                                        className: h()("sidebar-article", l && "active", o && "is-current-page"),
                                        children: (0, n.jsx)(c.r, {
                                            href: e.href,
                                            className: h()("pl-6 pr-5 py-1 no-underline", i && "pb-2", l && "color-text-link"),
                                            children: a
                                        })
                                    }, e.href + r)
                                }))
                            }) : null
                        })]
                    })
                },
                v = t(6613),
                j = function() {
                    var e = (0, i.useRouter)(),
                        r = (0, u.Hv)(),
                        t = r.error,
                        s = r.relativePath,
                        d = r.isFPT,
                        h = (0, o.$)("header").t;
                    return (0, n.jsxs)("div", {
                        className: "jsx-4031964419 d-none d-lg-block color-bg-tertiary position-sticky top-0 overflow-y-auto root",
                        children: [(0, n.jsxs)("div", {
                            style: {
                                zIndex: 3
                            },
                            id: "github-logo",
                            role: "banner",
                            className: "jsx-4031964419 d-flex flex-items-center p-4 position-sticky top-0 color-bg-tertiary",
                            children: [(0, n.jsx)(c.r, {
                                href: "/".concat(e.locale),
                                className: "color-text-primary",
                                "aria-hidden": "true",
                                tabIndex: -1,
                                children: (0, n.jsx)(l.g_Y, {
                                    size: 32
                                })
                            }), (0, n.jsx)(c.r, {
                                href: "/".concat(e.locale),
                                className: "h4-mktg color-text-primary no-underline no-wrap pl-2 flex-auto",
                                children: h("github_docs")
                            })]
                        }), (0, n.jsx)("nav", {
                            className: "jsx-4031964419",
                            children: "404" === t || "index.md" === s ? (0, n.jsxs)("ul", {
                                className: "jsx-4031964419 sidebar-products mt-4",
                                children: [!d && (0, n.jsx)(m.H, {}), (0, n.jsx)(b, {})]
                            }) : (0, n.jsx)("ul", {
                                className: "jsx-4031964419 sidebar-products",
                                children: (0, n.jsx)(f, {})
                            })
                        }), (0, n.jsx)(a.default, {
                            id: "4031964419",
                            children: [".root.jsx-4031964419{width:286px;height:100vh;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;padding-bottom:32px;}"]
                        })]
                    })
                },
                b = function() {
                    var e = (0, i.useRouter)(),
                        r = (0, v.a)().currentVersion,
                        t = (0, u.Hv)(),
                        s = t.activeProducts,
                        a = t.isFPT;
                    return (0, n.jsx)(n.Fragment, {
                        children: s.map((function(t) {
                            var s, i;
                            if (!a && (null === (s = t.versions) || void 0 === s || !s.includes(r)) && !t.external) return null;
                            var c = "".concat(t.external ? "" : "/".concat(e.locale)).concat(null !== (i = t.versions) && void 0 !== i && i.includes(r) && !a ? "/".concat(r, "/").concat(t.id) : t.href);
                            return (0, n.jsx)("li", {
                                title: "".concat(t.name).concat(t.external ? "(External Site)" : ""),
                                className: "sidebar-product",
                                children: (0, n.jsxs)("a", {
                                    href: c,
                                    target: t.external ? "_blank" : void 0,
                                    className: "f4 pl-4 pr-5 py-2 color-text-primary",
                                    children: [t.name, t.external && (0, n.jsx)("span", {
                                        className: "ml-1",
                                        children: (0, n.jsx)(l.Pfi, {
                                            size: "small"
                                        })
                                    })]
                                })
                            }, t.id)
                        }))
                    })
                },
                y = t(3973),
                g = t(6265),
                N = t(9163);

            function w(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r && (n = n.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function k(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? w(Object(t), !0).forEach((function(r) {
                        (0, g.Z)(e, r, t[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : w(Object(t)).forEach((function(r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                    }))
                }
                return e
            }
            var O, S = (0, N.ZP)(y.Lt).withConfig({
                    displayName: "LanguagePicker___StyledDropdown",
                    componentId: "sc-1bg5j11-0"
                })(["ul{width:unset;}"]),
                _ = function(e) {
                    var r = e.variant,
                        t = (0, i.useRouter)(),
                        s = (0, u.Hv)().languages,
                        a = (0, y.st)({}).getDetailsProps,
                        o = t.locale || "en",
                        d = Object.values(s),
                        p = s[o];
                    return "inline" === r ? (0, n.jsxs)(y.PO, k(k({}, a()), {}, {
                        className: "details-reset",
                        children: [(0, n.jsx)("summary", {
                            "aria-label": "Toggle language list",
                            children: (0, n.jsxs)("div", {
                                className: "d-flex flex-items-center flex-justify-between py-2",
                                children: [(0, n.jsx)("span", {
                                    children: p.nativeName || p.name
                                }), (0, n.jsx)(l.v4q, {
                                    size: 24,
                                    className: "arrow ml-md-1"
                                })]
                            })
                        }), (0, n.jsx)("div", {
                            children: d.map((function(e) {
                                return (0, n.jsx)(c.r, {
                                    href: t.asPath,
                                    locale: e.code,
                                    disableClientTransition: !0,
                                    className: h()("d-block py-2", e.code === t.locale ? "color-text-link text-underline active" : "Link--primary no-underline"),
                                    children: e.nativeName ? (0, n.jsxs)(n.Fragment, {
                                        children: [e.nativeName, " (", e.name, ")"]
                                    }) : e.name
                                }, e.code)
                            }))
                        })]
                    })) : (0, n.jsxs)(S, {
                        children: [(0, n.jsxs)("summary", {
                            children: [p.nativeName || p.name, (0, n.jsx)(y.Lt.Caret, {})]
                        }), (0, n.jsx)(y.Lt.Menu, {
                            direction: "sw",
                            children: d.map((function(e) {
                                return (0, n.jsx)(y.Lt.Item, {
                                    children: (0, n.jsx)(c.r, {
                                        href: t.asPath,
                                        locale: e.code,
                                        disableClientTransition: !0,
                                        children: e.nativeName ? (0, n.jsxs)(n.Fragment, {
                                            children: [e.nativeName, " (", e.name, ")"]
                                        }) : e.name
                                    })
                                }, e.code)
                            }))
                        })]
                    })
                };

            function P(e) {
                return null !== e
            }! function(e) {
                e.RELEASE = "RELEASE", e.TRANSLATION = "TRANSLATION", e.EARLY_ACCESS = "EARLY_ACCESS"
            }(O || (O = {}));
            var T = function() {
                var e, r = (0, i.useRouter)(),
                    t = (0, v.a)().currentVersion,
                    s = (0, u.Hv)(),
                    a = s.relativePath,
                    l = s.allVersions,
                    c = s.data,
                    d = s.languages,
                    p = s.currentLanguage,
                    m = s.userLanguage,
                    f = s.currentPathWithoutLanguage,
                    x = (0, o.$)("header").t,
                    j = [];
                "en" !== r.locale ? null !== a && void 0 !== a && a.includes("/site-policy") ? j.push({
                    type: O.TRANSLATION,
                    content: c.reusables.policies.translation
                }) : !0 !== d[p].wip ? j.push({
                    type: O.TRANSLATION,
                    content: x("notices.localization_complete")
                }) : d[p].wip && j.push({
                    type: O.TRANSLATION,
                    content: x("notices.localization_in_progress")
                }) : m && "en" !== m && !1 === (null === (e = d[m]) || void 0 === e ? void 0 : e.wip) && j.push({
                    type: O.TRANSLATION,
                    content: 'This article is also available in your language of choice. Click <a href="/'.concat(m).concat(f, '">here</a>')
                });
                var b = [];
                "github-ae@latest" === t ? b.push({
                    type: O.RELEASE,
                    content: x("notices.ghae_silent_launch")
                }) : t === c.variables.release_candidate.version && b.push({
                    type: O.RELEASE,
                    content: "".concat(l[t].versionTitle).concat(x("notices.release_candidate"))
                });
                var y = [].concat(j, b, [(a || "").includes("early-access/") ? {
                    type: O.EARLY_ACCESS,
                    content: x("notices.early_access")
                } : null]).filter(P);
                return (0, n.jsx)(n.Fragment, {
                    children: y.map((function(e, r) {
                        var t = e.type,
                            s = e.content,
                            a = r === y.length - 1;
                        return (0, n.jsx)("div", {
                            className: h()("header-notifications text-center f5 color-text-primary py-4 px-6", t === O.TRANSLATION && "translation_notice color-bg-info", t === O.RELEASE && "release_notice color-bg-info", t === O.EARLY_ACCESS && "early_access color-bg-danger", !a && "border-bottom color-border-tertiary"),
                            dangerouslySetInnerHTML: {
                                __html: s
                            }
                        }, s)
                    }))
                })
            };

            function E(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r && (n = n.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function L(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? E(Object(t), !0).forEach((function(r) {
                        (0, g.Z)(e, r, t[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach((function(r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                    }))
                }
                return e
            }
            var A = function() {
                var e = (0, i.useRouter)(),
                    r = (0, u.Hv)(),
                    t = r.activeProducts,
                    s = r.currentProduct,
                    a = (0, y.st)({}).getDetailsProps;
                return (0, n.jsxs)(y.PO, L(L({}, a()), {}, {
                    className: "details-reset",
                    children: [(0, n.jsx)("summary", {
                        className: "color-text-link",
                        role: "button",
                        "aria-label": "Toggle products list",
                        children: (0, n.jsxs)("div", {
                            id: "current-product",
                            className: "d-flex flex-items-center flex-justify-between py-2",
                            children: [(0, n.jsx)("span", {
                                children: (null === s || void 0 === s ? void 0 : s.name) || "All Products"
                            }), (0, n.jsx)(l.v4q, {
                                size: 24,
                                className: "arrow ml-md-1"
                            })]
                        })
                    }), (0, n.jsx)("div", {
                        id: "homepages",
                        style: {
                            zIndex: 6
                        },
                        children: t.map((function(r) {
                            return (0, n.jsxs)(c.r, {
                                href: "".concat(r.external ? "" : "/".concat(e.locale)).concat(r.href),
                                className: h()("d-block py-2", r.id === (null === s || void 0 === s ? void 0 : s.id) ? "color-text-link text-underline active" : "Link--primary no-underline"),
                                children: [r.name, r.external && (0, n.jsx)("span", {
                                    className: "ml-1",
                                    children: (0, n.jsx)(l.Pfi, {
                                        size: "small"
                                    })
                                })]
                            }, r.id)
                        }))
                    })]
                }))
            };

            function D(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r && (n = n.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function Z(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? D(Object(t), !0).forEach((function(r) {
                        (0, g.Z)(e, r, t[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : D(Object(t)).forEach((function(r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                    }))
                }
                return e
            }
            var R = (0, N.ZP)(y.Lt).withConfig({
                    displayName: "HomepageVersionPicker___StyledDropdown",
                    componentId: "zwy8n-0"
                })(["ul{width:unset;}"]),
                C = function(e) {
                    var r = e.variant,
                        t = (0, i.useRouter)(),
                        s = (0, v.a)().currentVersion,
                        a = (0, y.st)({}).getDetailsProps,
                        o = (0, u.Hv)(),
                        d = o.allVersions,
                        p = o.page,
                        m = o.enterpriseServerVersions;
                    if (p.permalinks && p.permalinks.length <= 1) return null;
                    var f = d[s].versionTitle;
                    return "inline" === r ? (0, n.jsxs)(y.PO, Z(Z({}, a()), {}, {
                        className: "details-reset",
                        children: [(0, n.jsx)("summary", {
                            "aria-label": "Toggle language list",
                            children: (0, n.jsxs)("div", {
                                className: "d-flex flex-items-center flex-justify-between py-2",
                                children: [(0, n.jsx)("span", {
                                    children: f
                                }), (0, n.jsx)(l.v4q, {
                                    size: 24,
                                    className: "arrow ml-md-1"
                                })]
                            })
                        }), (0, n.jsxs)("div", {
                            children: [(p.permalinks || []).map((function(e) {
                                return (0, n.jsx)(c.r, {
                                    href: e.href,
                                    className: h()("d-block py-2", e.href === t.asPath ? "color-text-link text-underline active" : "Link--primary no-underline"),
                                    children: e.pageVersionTitle
                                }, e.href)
                            })), (0, n.jsx)(c.r, {
                                href: "/".concat(t.locale, "/").concat(m[0], "/admin/all-releases"),
                                className: "f6 no-underline color-text-tertiary no-wrap",
                                children: "See all Enterprise releases"
                            })]
                        })]
                    })) : (0, n.jsxs)(R, {
                        children: [(0, n.jsxs)("summary", {
                            children: [f, (0, n.jsx)(y.Lt.Caret, {})]
                        }), (0, n.jsxs)(y.Lt.Menu, {
                            direction: "sw",
                            children: [(p.permalinks || []).map((function(e) {
                                return (0, n.jsx)(y.Lt.Item, {
                                    children: (0, n.jsx)(c.r, {
                                        href: e.href,
                                        children: e.pageVersionTitle
                                    })
                                }, e.href)
                            })), (0, n.jsx)("div", {
                                className: "pb-1",
                                children: (0, n.jsx)(c.r, {
                                    href: "/".concat(t.locale, "/").concat(m[0], "/admin/all-releases"),
                                    className: "f6 no-underline color-text-tertiary pl-3 pr-2 no-wrap",
                                    children: "See all Enterprise releases"
                                })
                            })]
                        })]
                    })
                },
                H = t(1125),
                I = function() {
                    var e = (0, i.useRouter)(),
                        r = (0, u.Hv)(),
                        t = r.relativePath,
                        s = r.currentLayoutName,
                        a = r.error,
                        d = (0, o.$)(["header", "homepage"]).t,
                        m = (0, p.useState)(!1),
                        f = m[0],
                        x = m[1],
                        v = "index.md" === t || "product-landing" === s || "product-sublanding" === s || "release-notes" === s;
                    return (0, n.jsxs)("div", {
                        className: "border-bottom color-border-secondary no-print",
                        children: ["404" !== a && (0, n.jsx)(T, {}), (0, n.jsxs)("header", {
                            className: "container-xl px-3 px-md-6 pt-3 pb-3 position-relative",
                            style: {
                                zIndex: 2
                            },
                            children: [(0, n.jsxs)("div", {
                                className: "d-none d-lg-flex flex-justify-end",
                                "data-testid": "desktop-header",
                                children: [v && (0, n.jsx)("div", {
                                    className: "py-2 mr-4",
                                    children: (0, n.jsx)(C, {})
                                }), (0, n.jsx)("div", {
                                    className: "py-2",
                                    children: (0, n.jsx)(_, {})
                                }), "index.md" !== t && "404" !== a && (0, n.jsx)("div", {
                                    className: "d-inline-block ml-4",
                                    children: (0, n.jsx)(H.o, {})
                                })]
                            }), (0, n.jsxs)("div", {
                                className: "d-lg-none",
                                "data-testid": "mobile-header",
                                children: [(0, n.jsxs)("div", {
                                    className: "d-flex flex-justify-between",
                                    children: [(0, n.jsxs)("div", {
                                        className: "d-flex flex-items-center",
                                        id: "github-logo-mobile",
                                        role: "banner",
                                        children: [(0, n.jsx)(c.r, {
                                            "aria-hidden": "true",
                                            tabIndex: -1,
                                            href: "/".concat(e.locale),
                                            children: (0, n.jsx)(l.g_Y, {
                                                size: 32,
                                                className: "color-icon-primary"
                                            })
                                        }), (0, n.jsx)(c.r, {
                                            href: "/".concat(e.locale),
                                            className: "h4-mktg color-text-primary no-underline no-wrap pl-2",
                                            children: d("github_docs")
                                        })]
                                    }), (0, n.jsx)("div", {
                                        children: (0, n.jsx)(y.Ig, {
                                            "data-testid": "mobile-menu-button",
                                            css: !0,
                                            onClick: function() {
                                                return x(!f)
                                            },
                                            "aria-label": "Navigation Menu",
                                            children: f ? (0, n.jsx)(l.b0D, {
                                                size: "small"
                                            }) : (0, n.jsx)(l.sOM, {
                                                size: "small"
                                            })
                                        })
                                    })]
                                }), (0, n.jsx)("div", {
                                    className: "relative",
                                    children: (0, n.jsxs)("div", {
                                        className: h()("width-full position-absolute left-0 right-0 color-shadow-large color-bg-primary px-3 px-md-6 pb-3", f ? "d-block" : "d-none"),
                                        children: [(0, n.jsxs)("div", {
                                            className: "mt-3 mb-2",
                                            children: [(0, n.jsx)("h4", {
                                                className: "text-mono f5 text-normal color-text-secondary",
                                                children: d("explore_by_product")
                                            }), (0, n.jsx)(A, {})]
                                        }), v && (0, n.jsx)("div", {
                                            className: "border-top py-2",
                                            children: (0, n.jsx)(C, {
                                                variant: "inline"
                                            })
                                        }), (0, n.jsx)("div", {
                                            className: "border-top py-2",
                                            children: (0, n.jsx)(_, {
                                                variant: "inline"
                                            })
                                        }), "index.md" !== t && "404" !== a && (0, n.jsx)("div", {
                                            className: "pt-3 border-top",
                                            children: (0, n.jsx)(H.o, {})
                                        })]
                                    })
                                })]
                            })]
                        })]
                    })
                },
                F = t(7261);

            function z() {
                var e = (0, F.Z)(["company.links.about"]);
                return z = function() {
                    return e
                }, e
            }

            function V() {
                var e = (0, F.Z)(["support.links.training"]);
                return V = function() {
                    return e
                }, e
            }

            function Y() {
                var e = (0, F.Z)(["platform.links.developer_api"]);
                return Y = function() {
                    return e
                }, e
            }

            function q() {
                var e = (0, F.Z)(["product.links.pricing"]);
                return q = function() {
                    return e
                }, e
            }

            function M() {
                var e = (0, F.Z)(["support.links.contact_github"]);
                return M = function() {
                    return e
                }, e
            }

            function $() {
                var e = (0, F.Z)(["support.links.help"]);
                return $ = function() {
                    return e
                }, e
            }

            function U() {
                var e = (0, F.Z)(["support.links.status"]);
                return U = function() {
                    return e
                }, e
            }

            function B() {
                var e = (0, F.Z)(["product.links.security"]);
                return B = function() {
                    return e
                }, e
            }

            function G() {
                var e = (0, F.Z)(["privacy"]);
                return G = function() {
                    return e
                }, e
            }

            function W() {
                var e = (0, F.Z)(["terms"]);
                return W = function() {
                    return e
                }, e
            }
            var X, J = function() {
                    var e = (0, o.$)("footer").t;
                    return (0, n.jsx)("footer", {
                        className: "py-6 text-small",
                        children: (0, n.jsx)("div", {
                            className: "container-xl d-flex px-3 px-md-6",
                            children: (0, n.jsxs)("ul", {
                                className: "d-flex list-style-none flex-wrap flex-justify-center flex-xl-justify-start",
                                children: [(0, n.jsxs)("li", {
                                    className: "d-flex mr-xl-3 color-text-secondary",
                                    children: [(0, n.jsx)(l.g_Y, {
                                        className: "mr-2 mr-xl-3",
                                        size: 20
                                    }), (0, n.jsxs)("span", {
                                        children: ["\xa9 ", (new Date).getFullYear(), " GitHub, Inc."]
                                    })]
                                }), (0, n.jsx)("li", {
                                    className: "ml-3",
                                    children: (0, n.jsx)("a", {
                                        href: "/github/site-policy/github-terms-of-service",
                                        children: e(W())
                                    })
                                }), (0, n.jsx)("li", {
                                    className: "ml-3",
                                    children: (0, n.jsxs)("a", {
                                        href: "/github/site-policy/github-privacy-statement",
                                        children: [e(G()), " "]
                                    })
                                }), (0, n.jsx)("li", {
                                    className: "ml-3",
                                    children: (0, n.jsx)("a", {
                                        href: "https://github.com/security",
                                        children: e(B())
                                    })
                                }), (0, n.jsx)("li", {
                                    className: "ml-3",
                                    children: (0, n.jsx)("a", {
                                        href: "https://www.githubstatus.com/",
                                        children: e(U())
                                    })
                                }), (0, n.jsx)("li", {
                                    className: "ml-3",
                                    children: (0, n.jsx)("a", {
                                        href: "/",
                                        children: e($())
                                    })
                                }), (0, n.jsx)("li", {
                                    className: "ml-3",
                                    children: (0, n.jsx)("a", {
                                        href: "https://support.github.com",
                                        children: e(M())
                                    })
                                }), (0, n.jsx)("li", {
                                    className: "ml-3",
                                    children: (0, n.jsx)("a", {
                                        href: "https://github.com/pricing",
                                        children: e(q())
                                    })
                                }), (0, n.jsx)("li", {
                                    className: "ml-3",
                                    children: (0, n.jsx)("a", {
                                        href: "/developers",
                                        children: e(Y())
                                    })
                                }), (0, n.jsx)("li", {
                                    className: "ml-3",
                                    children: (0, n.jsx)("a", {
                                        href: "https://services.github.com/",
                                        children: e(V())
                                    })
                                }), (0, n.jsx)("li", {
                                    className: "ml-3",
                                    children: (0, n.jsx)("a", {
                                        href: "https://github.com/about",
                                        children: e(z())
                                    })
                                })]
                            })
                        })
                    })
                },
                K = function() {
                    var e = (0, p.useState)(!1),
                        r = e[0],
                        t = e[1],
                        s = (0, o.$)("scroll_button").t;
                    (0, p.useEffect)((function() {
                        var e = function() {
                            var e = document.documentElement.scrollTop;
                            e < 100 ? t(!1) : e >= 100 && t(!0)
                        };
                        return window.addEventListener("scroll", e),
                            function() {
                                window.removeEventListener("scroll", e)
                            }
                    }), []);
                    return (0, n.jsx)("div", {
                        className: h()("position-fixed bottom-3 right-3 transition-200", r ? "opacity-100" : "opacity-0"),
                        children: (0, n.jsx)("button", {
                            onClick: function() {
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth"
                                })
                            },
                            className: h()("tooltipped tooltipped-n tooltipped-no-delay color-bg-info-inverse color-text-inverse circle border-0"),
                            style: {
                                width: 40,
                                height: 40
                            },
                            "aria-label": s("scroll_to_top"),
                            children: (0, n.jsx)(l.g8U, {})
                        })
                    })
                },
                Q = t(1346);

            function ee() {
                var e = (0, F.Z)(["feedback"]);
                return ee = function() {
                    return e
                }, e
            }

            function re() {
                var e = (0, F.Z)(["send"]);
                return re = function() {
                    return e
                }, e
            }

            function te() {
                var e = (0, F.Z)(["not_support"]);
                return te = function() {
                    return e
                }, e
            }

            function ne() {
                var e = (0, F.Z)(["email_placeholder"]);
                return ne = function() {
                    return e
                }, e
            }

            function se() {
                var e = (0, F.Z)(["optional"]);
                return se = function() {
                    return e
                }, e
            }

            function ae() {
                var e = (0, F.Z)(["email_label"]);
                return ae = function() {
                    return e
                }, e
            }

            function ie() {
                var e = (0, F.Z)(["optional"]);
                return ie = function() {
                    return e
                }, e
            }

            function le() {
                var e = (0, F.Z)(["comment_no_label"]);
                return le = function() {
                    return e
                }, e
            }

            function ce() {
                var e = (0, F.Z)(["comment_yes_label"]);
                return ce = function() {
                    return e
                }, e
            }

            function oe() {
                var e = (0, F.Z)(["no_feedback"]);
                return oe = function() {
                    return e
                }, e
            }

            function ue() {
                var e = (0, F.Z)(["yes_feedback"]);
                return ue = function() {
                    return e
                }, e
            }

            function de() {
                var e = (0, F.Z)(["no"]);
                return de = function() {
                    return e
                }, e
            }

            function he() {
                var e = (0, F.Z)(["yes"]);
                return he = function() {
                    return e
                }, e
            }

            function pe() {
                var e = (0, F.Z)(["privacy_policy"]);
                return pe = function() {
                    return e
                }, e
            }

            function me() {
                var e = (0, F.Z)(["able_to_find"]);
                return me = function() {
                    return e
                }, e
            }! function(e) {
                e.START = "START", e.YES = "YES", e.NO = "NO", e.END = "END"
            }(X || (X = {}));
            var fe = function() {
                var e = (0, o.$)("survey").t,
                    r = (0, p.useState)(X.START),
                    t = r[0],
                    s = r[1],
                    a = (0, p.useRef)(null);

                function i(e) {
                    return function() {
                        xe(u()), s(e)
                    }
                }

                function u() {
                    if (a.current) return new FormData(a.current)
                }
                return (0, n.jsxs)("form", {
                    className: "f5",
                    onSubmit: function(e) {
                        e.preventDefault(), xe(u()), s(X.END)
                    },
                    ref: a,
                    "data-testid": "survey-form",
                    children: [(0, n.jsxs)("h2", {
                        className: "mb-1 f4",
                        children: [e(me()), (0, n.jsx)(c.r, {
                            className: "f6 text-normal ml-3 color-text-link",
                            href: "/github/site-policy/github-privacy-statement",
                            target: "_blank",
                            children: e(pe())
                        })]
                    }), (0, n.jsx)("input", {
                        type: "text",
                        className: "d-none",
                        name: "survey-token",
                        "aria-hidden": "true"
                    }), t !== X.END && (0, n.jsxs)("p", {
                        className: "radio-group",
                        children: [(0, n.jsx)("input", {
                            id: "survey-yes",
                            type: "radio",
                            name: "survey-vote",
                            value: "Y",
                            "aria-label": e(he()),
                            hidden: !0,
                            onChange: i(X.YES),
                            defaultChecked: t === X.YES
                        }), (0, n.jsx)("label", {
                            className: "btn x-radio-label mr-1",
                            htmlFor: "survey-yes",
                            children: (0, n.jsx)(l.EtR, {
                                size: 24,
                                className: "color-text-tertiary"
                            })
                        }), (0, n.jsx)("input", {
                            id: "survey-no",
                            type: "radio",
                            name: "survey-vote",
                            value: "N",
                            "aria-label": e(de()),
                            hidden: !0,
                            onChange: i(X.NO),
                            defaultChecked: t === X.NO
                        }), (0, n.jsx)("label", {
                            className: "btn x-radio-label",
                            htmlFor: "survey-no",
                            children: (0, n.jsx)(l.Dn9, {
                                size: 24,
                                className: "color-text-tertiary"
                            })
                        })]
                    }), [X.YES, X.NO].includes(t) && (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsxs)("p", {
                            className: "color-text-secondary f6",
                            children: [t === X.YES && e(ue()), t === X.NO && e(oe())]
                        }), (0, n.jsxs)("p", {
                            className: "mb-3",
                            children: [(0, n.jsxs)("label", {
                                className: "d-block mb-1 f6",
                                htmlFor: "survey-comment",
                                children: [(0, n.jsxs)("span", {
                                    children: [t === X.YES && e(ce()), t === X.NO && e(le())]
                                }), (0, n.jsx)("span", {
                                    className: "text-normal color-text-tertiary float-right ml-1",
                                    children: e(ie())
                                })]
                            }), (0, n.jsx)("textarea", {
                                className: "form-control input-sm width-full",
                                name: "survey-comment",
                                id: "survey-comment"
                            })]
                        }), (0, n.jsxs)("p", {
                            children: [(0, n.jsxs)("label", {
                                className: "d-block mb-1 f6",
                                htmlFor: "survey-email",
                                children: [e(ae()), (0, n.jsx)("span", {
                                    className: "text-normal color-text-tertiary float-right ml-1",
                                    children: e(se())
                                })]
                            }), (0, n.jsx)("input", {
                                type: "email",
                                className: "form-control input-sm width-full",
                                name: "survey-email",
                                id: "survey-email",
                                placeholder: e(ne())
                            }), (0, n.jsx)("span", {
                                className: "f6 color-text-secondary",
                                children: e(te())
                            })]
                        }), (0, n.jsx)("p", {
                            className: "text-right",
                            children: (0, n.jsx)("button", {
                                type: "submit",
                                className: "btn btn-sm",
                                children: e(re())
                            })
                        })]
                    }), t === X.END && (0, n.jsx)("p", {
                        className: "color-text-secondary f6",
                        "data-testid": "survey-end",
                        children: e(ee())
                    })]
                })
            };

            function xe(e) {
                if (e) return (0, Q.qP)({
                    type: Q.tw.survey,
                    survey_token: e.get("survey-token") || void 0,
                    survey_vote: "Y" === e.get("survey-vote"),
                    survey_comment: e.get("survey-comment") || void 0,
                    survey_email: e.get("survey-email") || void 0
                })
            }

            function ve() {
                var e = (0, F.Z)(["to_guidelines"]);
                return ve = function() {
                    return e
                }, e
            }

            function je() {
                var e = (0, F.Z)(["or"]);
                return je = function() {
                    return e
                }, e
            }

            function be() {
                var e = (0, F.Z)(["button"]);
                return be = function() {
                    return e
                }, e
            }

            function ye() {
                var e = (0, F.Z)(["body"]);
                return ye = function() {
                    return e
                }, e
            }

            function ge() {
                var e = (0, F.Z)(["title"]);
                return ge = function() {
                    return e
                }, e
            }
            var Ne = function() {
                var e = (0, u.Hv)().relativePath,
                    r = (0, o.$)("contribution_cta").t,
                    t = e ? "https://github.com/github/docs/edit/main/content/".concat(e) : "https://github.com/github/docs";
                return (0, n.jsxs)("div", {
                    className: "f5 contribution",
                    children: [(0, n.jsx)("h2", {
                        className: "f4",
                        children: r(ge())
                    }), (0, n.jsx)("p", {
                        className: "color-text-secondary f6",
                        children: r(ye())
                    }), (0, n.jsxs)("a", {
                        className: "btn btn-outline",
                        href: t,
                        children: [(0, n.jsx)(l.UWO, {
                            size: "small",
                            className: "octicon mr-1"
                        }), r(be())]
                    }), (0, n.jsxs)("p", {
                        className: "color-text-secondary f6 mt-2",
                        children: [r(je()), " ", (0, n.jsx)("a", {
                            href: "https://github.com/github/docs/blob/main/CONTRIBUTING.md",
                            target: "_blank",
                            rel: "noopener",
                            children: r(ve())
                        })]
                    })]
                })
            };

            function we() {
                var e = (0, F.Z)(["contact_support"]);
                return we = function() {
                    return e
                }, e
            }

            function ke() {
                var e = (0, F.Z)(["ask_community"]);
                return ke = function() {
                    return e
                }, e
            }

            function Oe() {
                var e = (0, F.Z)(["still_need_help"]);
                return Oe = function() {
                    return e
                }, e
            }
            var Se = function() {
                    var e = (0, v.a)().isEnterprise,
                        r = (0, o.$)("support").t;
                    return (0, n.jsxs)("div", {
                        children: [(0, n.jsx)("h3", {
                            className: "mb-2 f4",
                            children: r(Oe())
                        }), (0, n.jsxs)("a", {
                            id: "ask-community",
                            href: "https://github.community",
                            className: "btn btn-outline mr-4 mt-2",
                            children: [(0, n.jsx)(l.t0Z, {
                                size: "small",
                                className: "octicon mr-1"
                            }), r(ke())]
                        }), (0, n.jsxs)("a", {
                            id: "contact-us",
                            href: e ? "https://enterprise.github.com/support" : "https://support.github.com/contact",
                            className: "btn btn-outline mt-2",
                            children: [(0, n.jsx)(l.DX8, {
                                size: "small",
                                className: "octicon mr-1"
                            }), r(we())]
                        })]
                    })
                },
                _e = function() {
                    var e = (0, v.a)().currentVersion,
                        r = (0, u.Hv)().enterpriseServerReleases,
                        t = r.isOldestReleaseDeprecated && e.includes(r.oldestSupported);
                    return (0, n.jsx)("section", {
                        className: "mt-lg-9 py-7 px-3 px-md-6 no-print color-bg-tertiary",
                        children: (0, n.jsxs)("div", {
                            className: "container-xl gutter-lg-spacious clearfix",
                            children: [(0, n.jsx)("div", {
                                className: "col-12 col-lg-6 col-xl-4 mb-6 mb-xl-0 float-left",
                                children: !t && (0, n.jsx)(fe, {})
                            }), (0, n.jsx)("div", {
                                className: "col-12 col-lg-6 col-xl-4 mb-6 mb-xl-0 float-left",
                                children: !t && (0, n.jsx)(Ne, {})
                            }), (0, n.jsx)("div", {
                                className: "col-12 col-lg-12 col-xl-4 float-left",
                                children: (0, n.jsx)(Se, {})
                            })]
                        })
                    })
                },
                Pe = function() {
                    var e = (0, u.Hv)(),
                        r = e.data,
                        t = e.enterpriseServerReleases;
                    if (!(0, v.a)().currentVersion.includes(t.oldestSupported)) return null;
                    var s = t.isOldestReleaseDeprecated ? r.reusables.enterprise_deprecation.version_was_deprecated : r.reusables.enterprise_deprecation.version_will_be_deprecated;
                    return (0, n.jsx)("div", {
                        className: "deprecation-banner border rounded-1 mb-2 color-bg-warning p-3 color-border-warning f5",
                        children: (0, n.jsxs)("p", {
                            children: [(0, n.jsxs)("b", {
                                children: [(0, n.jsx)("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: s
                                    }
                                }), " ", (0, n.jsx)("span", {
                                    "data-date": t.nextDeprecationDate,
                                    "data-format": "%B %d, %Y",
                                    title: t.nextDeprecationDate,
                                    children: t.nextDeprecationDate
                                }), "."]
                            }), " ", (0, n.jsx)("span", {
                                dangerouslySetInnerHTML: {
                                    __html: r.reusables.enterprise_deprecation.deprecation_details
                                }
                            })]
                        })
                    })
                },
                Te = function(e) {
                    var r = (0, u.Hv)(),
                        t = r.page,
                        a = r.error,
                        i = r.isHomepageVersion,
                        l = (0, o.$)("errors").t;
                    return (0, n.jsxs)("div", {
                        className: "d-lg-flex",
                        children: [(0, n.jsxs)(s.default, {
                            children: ["404" === a ? (0, n.jsx)("title", {
                                children: l("oops")
                            }) : !i && t.fullTitle ? (0, n.jsx)("title", {
                                children: t.fullTitle
                            }) : null, t.introPlainText && (0, n.jsx)("meta", {
                                name: "description",
                                content: t.introPlainText
                            }), t.topics.length > 0 && (0, n.jsx)("meta", {
                                name: "keywords",
                                content: t.topics.join(",")
                            }), t.hidden && (0, n.jsx)("meta", {
                                name: "robots",
                                content: "noindex"
                            }), t.languageVariants.map((function(e) {
                                return (0, n.jsx)("link", {
                                    rel: "alternate",
                                    hrefLang: e.hreflang,
                                    href: "https://docs.github.com".concat(e.href)
                                }, e.href)
                            }))]
                        }), (0, n.jsx)(j, {}), (0, n.jsxs)("main", {
                            className: "flex-1 min-width-0",
                            children: [(0, n.jsx)(I, {}), (0, n.jsx)(Pe, {}), e.children, (0, n.jsx)(_e, {}), (0, n.jsx)(J, {}), (0, n.jsx)(K, {})]
                        })]
                    })
                }
        },
        6359: function(e, r, t) {
            "use strict";
            t.d(r, {
                r: function() {
                    return u
                }
            });
            var n = t(6265),
                s = t(5893),
                a = t(8347),
                i = t(1664),
                l = t(1013);

            function c(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r && (n = n.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function o(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? c(Object(t), !0).forEach((function(r) {
                        (0, n.Z)(e, r, t[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach((function(r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                    }))
                }
                return e
            }

            function u(e) {
                var r = (0, l.Hv)().airGap,
                    t = e.href,
                    n = e.locale,
                    c = e.disableClientTransition,
                    u = void 0 === c || c,
                    d = (0, a.Z)(e, ["href", "locale", "disableClientTransition"]);
                var h = (null === t || void 0 === t ? void 0 : t.startsWith("http")) || (null === t || void 0 === t ? void 0 : t.startsWith("//"));
                return r && h && (d.className ? d.className += " tooltipped" : d.className = "tooltipped", d["aria-label"] = "This link may not work in this environment."), u ? (0, s.jsx)("a", o({
                    href: n ? "/".concat(n).concat(t) : t,
                    rel: h ? "noopener" : ""
                }, d)) : (0, s.jsx)(i.default, {
                    href: t || "",
                    locale: n || !1,
                    children: (0, s.jsx)("a", o({
                        rel: h ? "noopener" : ""
                    }, d))
                })
            }
        },
        1125: function(e, r, t) {
            "use strict";
            t.d(r, {
                o: function() {
                    return b
                }
            });
            var n = t(809),
                s = t.n(n),
                a = t(7261),
                i = t(5893),
                l = t(2447),
                c = t(7294),
                o = t(1163),
                u = t(3279),
                d = t.n(u),
                h = t(4433),
                p = t(1346),
                m = t(1013),
                f = t(6613),
                x = t(4184),
                v = t.n(x);

            function j() {
                var e = (0, a.Z)(["placeholder"]);
                return j = function() {
                    return e
                }, e
            }

            function b(e) {
                var r = e.isStandalone,
                    t = void 0 !== r && r,
                    n = e.updateSearchParams,
                    a = void 0 === n || n,
                    u = e.children,
                    x = (0, o.useRouter)(),
                    b = (0, c.useState)(x.query.query || ""),
                    y = b[0],
                    g = b[1],
                    N = (0, c.useState)([]),
                    w = N[0],
                    k = N[1],
                    O = (0, c.useState)(0),
                    S = O[0],
                    _ = O[1],
                    P = (0, c.useRef)(null),
                    T = (0, h.$)("search").t,
                    E = (0, f.a)().currentVersion,
                    L = (0, m.Hv)(),
                    A = L.languages,
                    D = L.searchVersions,
                    Z = L.nonEnterpriseDefaultVersion,
                    R = D[E] || D[Z],
                    C = Object.keys(A).includes(x.locale || "") && x.locale || "en";

                function H(e) {
                    var r, t, n, s;
                    switch (e.key) {
                        case "/":
                            if (["INPUT", "TEXTAREA", "SEARCH"].includes((null === (r = document) || void 0 === r || null === (t = r.activeElement) || void 0 === t ? void 0 : t.tagName) || "")) break;
                            e.preventDefault(), null === (n = P.current) || void 0 === n || n.focus();
                            break;
                        case "Escape":
                            V();
                            break;
                        case "ArrowDown":
                            if (!w.length) break;
                            if (e.preventDefault(), S >= w.length) break;
                            _(S + 1);
                            break;
                        case "ArrowUp":
                            if (!w.length) break;
                            if (e.preventDefault(), 0 === S) break;
                            _(S - 1);
                            break;
                        case "Enter":
                            if (0 === S || !w.length) break;
                            window.location.href = null === (s = w[S - 1]) || void 0 === s ? void 0 : s.url
                    }
                }

                function I() {
                    return (I = (0, l.Z)(s().mark((function e(r) {
                        var t, n, i, l;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return i = null === (t = r.target) || void 0 === t || null === (n = t.value) || void 0 === n ? void 0 : n.trim(), g(i), a && ((l = new URL(location.toString())).searchParams.set("query", i), history.pushState({}, "", l.toString())), _(0), e.next = 6, F(i);
                                case 6:
                                    return e.abrupt("return", e.sent);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function F(e) {
                    return z.apply(this, arguments)
                }

                function z() {
                    return (z = (0, l.Z)(s().mark((function e(r) {
                        var t, n, a;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!r) {
                                        e.next = 20;
                                        break
                                    }
                                    return (t = new URL(location.origin)).pathname = "/search", n = {
                                        language: C,
                                        version: R,
                                        query: r
                                    }, t.search = new URLSearchParams(n).toString(), e.next = 7, fetch(t.toString(), {
                                        method: "GET",
                                        headers: {
                                            "Content-Type": "application/json"
                                        }
                                    });
                                case 7:
                                    if (a = e.sent, e.t0 = k, !a.ok) {
                                        e.next = 15;
                                        break
                                    }
                                    return e.next = 12, a.json();
                                case 12:
                                    e.t1 = e.sent, e.next = 16;
                                    break;
                                case 15:
                                    e.t1 = [];
                                case 16:
                                    e.t2 = e.t1, (0, e.t0)(e.t2), e.next = 21;
                                    break;
                                case 20:
                                    k([]);
                                case 21:
                                    r && (0, p.qP)({
                                        type: p.tw.search,
                                        search_query: r
                                    });
                                case 22:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function V() {
                    g(""), k([])
                }(0, c.useEffect)((function() {
                    x.query.query && F(x.query.query.trim())
                }), []), (0, c.useEffect)((function() {
                    return document.addEventListener("keydown", H),
                        function() {
                            return document.removeEventListener("keydown", H)
                        }
                }), [w, S]);
                var Y = (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("div", {
                            id: "search-results-container",
                            className: w.length ? "js-open" : "",
                            children: Boolean(w.length) && (0, i.jsx)("div", {
                                className: "ais-Hits d-block",
                                children: (0, i.jsx)("ol", {
                                    className: "ais-Hits-list",
                                    children: w.map((function(e, r) {
                                        var t = e.url,
                                            n = e.breadcrumbs,
                                            s = e.heading,
                                            a = e.title,
                                            l = e.content;
                                        return (0, i.jsx)("li", {
                                            className: "ais-Hits-item" + (r + 1 === S ? " active" : ""),
                                            children: (0, i.jsx)("div", {
                                                className: "search-result border-top color-border-secondary py-3 px-2",
                                                children: (0, i.jsxs)("a", {
                                                    className: "no-underline",
                                                    href: t,
                                                    children: [(0, i.jsx)("div", {
                                                        className: "search-result-breadcrumbs d-block color-text-primary opacity-60 text-small pb-1",
                                                        dangerouslySetInnerHTML: {
                                                            __html: n
                                                        }
                                                    }), (0, i.jsx)("div", {
                                                        className: "search-result-title d-block h4-mktg color-text-primary",
                                                        dangerouslySetInnerHTML: {
                                                            __html: s ? "".concat(a, ": ").concat(s) : a
                                                        }
                                                    }), (0, i.jsx)("div", {
                                                        className: "search-result-content d-block color-text-secondary",
                                                        dangerouslySetInnerHTML: {
                                                            __html: l
                                                        }
                                                    })]
                                                })
                                            })
                                        }, t)
                                    }))
                                })
                            })
                        }), (0, i.jsx)("div", {
                            className: v()("search-overlay-desktop", !t && y ? "js-open" : ""),
                            onClick: V
                        })]
                    }),
                    q = (0, i.jsx)("div", {
                        id: "search-input-container",
                        "aria-hidden": "true",
                        children: (0, i.jsx)("div", {
                            className: "ais-SearchBox",
                            children: (0, i.jsxs)("form", {
                                role: "search",
                                className: "ais-SearchBox-form",
                                noValidate: !0,
                                onSubmit: function(e) {
                                    e.preventDefault()
                                },
                                children: [(0, i.jsx)("input", {
                                    "data-testid": "site-search-input",
                                    ref: P,
                                    className: v()("ais-SearchBox-input", t || y ? "js-open" : ""),
                                    type: "search",
                                    placeholder: T(j()),
                                    autoFocus: t,
                                    autoComplete: "off",
                                    autoCorrect: "off",
                                    autoCapitalize: "off",
                                    spellCheck: "false",
                                    maxLength: 512,
                                    onChange: d()((function(e) {
                                        return I.apply(this, arguments)
                                    }), 200),
                                    defaultValue: y
                                }), (0, i.jsx)("button", {
                                    className: "ais-SearchBox-submit",
                                    type: "submit",
                                    title: "Submit the search query.",
                                    hidden: !0
                                })]
                            })
                        })
                    });
                return (0, i.jsx)(i.Fragment, {
                    children: "function" === typeof u ? u({
                        SearchInput: q,
                        SearchResults: Y
                    }) : (0, i.jsxs)(i.Fragment, {
                        children: [q, Y]
                    })
                })
            }
        },
        1013: function(e, r, t) {
            "use strict";
            t.d(r, {
                Tr: function() {
                    return s
                },
                Hv: function() {
                    return a
                }
            });
            var n = t(7294),
                s = (t(8718), (0, n.createContext)(null)),
                a = function() {
                    var e = (0, n.useContext)(s);
                    if (!e) throw new Error('"useMainContext" may only be used inside "MainContext.Provider"');
                    return e
                }
        },
        4433: function(e, r, t) {
            "use strict";
            t.d(r, {
                $: function() {
                    return o
                }
            });
            var n = t(9227),
                s = t(1013),
                a = t(7361),
                i = t.n(a);

            function l(e, r) {
                var t;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (t = function(e, r) {
                            if (!e) return;
                            if ("string" === typeof e) return c(e, r);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === t && e.constructor && (t = e.constructor.name);
                            if ("Map" === t || "Set" === t) return Array.from(e);
                            if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return c(e, r)
                        }(e)) || r && e && "number" === typeof e.length) {
                        t && (e = t);
                        var n = 0,
                            s = function() {};
                        return {
                            s: s,
                            n: function() {
                                return n >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[n++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: s
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var a, i = !0,
                    l = !1;
                return {
                    s: function() {
                        t = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = t.next();
                        return i = e.done, e
                    },
                    e: function(e) {
                        l = !0, a = e
                    },
                    f: function() {
                        try {
                            i || null == t.return || t.return()
                        } finally {
                            if (l) throw a
                        }
                    }
                }
            }

            function c(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }
            var o = function(e) {
                var r = (0, s.Hv)().data.ui;
                return {
                    t: function(t) {
                        for (var s = arguments.length, a = new Array(s > 1 ? s - 1 : 0), c = 1; c < s; c++) a[c - 1] = arguments[c];
                        var o = "string" === typeof t ? t : String.raw.apply(String, [t].concat(a)),
                            u = o.split(":");
                        if (u.length > 2) throw new Error('Multiple ":" not allowed in translation lookup path');
                        if (2 === u.length) {
                            var d = (0, n.Z)(u, 2),
                                h = d[0],
                                p = d[1];
                            return i()(r[h], p)
                        }
                        var m = (0, n.Z)(u, 1),
                            f = m[0];
                        if (!Array.isArray(e)) return i()(r[e], f);
                        var x, v = l(e);
                        try {
                            for (v.s(); !(x = v.n()).done;) {
                                var j = x.value,
                                    b = i()(r[j], f);
                                if (void 0 !== b) return b
                            }
                        } catch (y) {
                            v.e(y)
                        } finally {
                            v.f()
                        }
                    }
                }
            }
        },
        6613: function(e, r, t) {
            "use strict";
            t.d(r, {
                a: function() {
                    return s
                }
            });
            var n = t(1163),
                s = function() {
                    var e = (0, n.useRouter)().query.versionId || "free-pro-team@latest";
                    return {
                        currentVersion: e,
                        isEnterprise: e.includes("enterprise"),
                        isEnterpriseServer: e.includes("enterprise-server")
                    }
                }
        },
        2880: function(e, r, t) {
            "use strict";
            t.d(r, {
                H: function() {
                    return i
                }
            });
            var n = t(5893),
                s = t(1163),
                a = t(5529),
                i = function() {
                    var e = (0, s.useRouter)();
                    return (0, n.jsx)("li", {
                        title: "Home",
                        children: (0, n.jsxs)("a", {
                            href: "/".concat(e.locale),
                            className: "f6 pl-4 pr-5 ml-n1 pb-1 color-text-primary",
                            children: [(0, n.jsx)(a.Y4O, {
                                size: "small",
                                className: "mr-1"
                            }), "All products"]
                        })
                    })
                }
        }
    }
]);