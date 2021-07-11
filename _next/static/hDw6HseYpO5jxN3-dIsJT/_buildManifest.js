self.__BUILD_MANIFEST = function(e, t, a, n, s) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [{
                source: "/:nextInternalLocale(en|cn|ja|es|pt|de)/get-started/:path*",
                destination: "/:nextInternalLocale/free-pro-team@latest/get-started/:path*"
            }, {
                source: "/:nextInternalLocale(en|cn|ja|es|pt|de)/github/:path*",
                destination: "/:nextInternalLocale/free-pro-team@latest/github/:path*"
            }, {
                source: "/:nextInternalLocale(en|cn|ja|es|pt|de)/admin/:path*",
                destination: "/:nextInternalLocale/free-pro-team@latest/admin/:path*"
            }, {
                source: "/:nextInternalLocale(en|cn|ja|es|pt|de)/billing/:path*",
                destination: "/:nextInternalLocale/free-pro-team@latest/billing/:path*"
            }, {
                source: "/:nextInternalLocale(en|cn|ja|es|pt|de)/organizations/:path*",
                destination: "/:nextInternalLocale/free-pro-team@latest/organizations/:path*"
            }, {
                source: "/:nextInternalLocale(en|cn|ja|es|pt|de)/code-security/:path*",
                destination: "/:nextInternalLocale/free-pro-team@latest/code-security/:path*"
            }, {
                source: "/:nextInternalLocale(en|cn|ja|es|pt|de)/issues/:path*",
                destination: "/:nextInternalLocale/free-pro-team@latest/issues/:path*"
            }, {
                source: "/:nextInternalLocale(en|cn|ja|es|pt|de)/actions/:path*",
                destination: "/:nextInternalLocale/free-pro-team@latest/actions/:path*"
            }, {
                source: "/:nextInternalLocale(en|cn|ja|es|pt|de)/packages/:path*",
                destination: "/:nextInternalLocale/free-pro-team@latest/packages/:path*"
            }, {
                source: "/:nextInternalLocale(en|cn|ja|es|pt|de)/developers/:path*",
                destination: "/:nextInternalLocale/free-pro-team@latest/developers/:path*"
            }, {
                source: "/:nextInternalLocale(en|cn|ja|es|pt|de)/rest/:path*",
                destination: "/:nextInternalLocale/free-pro-team@latest/rest/:path*"
            }, {
                source: "/:nextInternalLocale(en|cn|ja|es|pt|de)/graphql/:path*",
                destination: "/:nextInternalLocale/free-pro-team@latest/graphql/:path*"
            }, {
                source: "/:nextInternalLocale(en|cn|ja|es|pt|de)/insights/:path*",
                destination: "/:nextInternalLocale/free-pro-team@latest/insights/:path*"
            }, {
                source: "/:nextInternalLocale(en|cn|ja|es|pt|de)/discussions/:path*",
                destination: "/:nextInternalLocale/free-pro-team@latest/discussions/:path*"
            }, {
                source: "/:nextInternalLocale(en|cn|ja|es|pt|de)/codespaces/:path*",
                destination: "/:nextInternalLocale/free-pro-team@latest/codespaces/:path*"
            }, {
                source: "/:nextInternalLocale(en|cn|ja|es|pt|de)/sponsors/:path*",
                destination: "/:nextInternalLocale/free-pro-team@latest/sponsors/:path*"
            }, {
                source: "/:nextInternalLocale(en|cn|ja|es|pt|de)/communities/:path*",
                destination: "/:nextInternalLocale/free-pro-team@latest/communities/:path*"
            }, {
                source: "/:nextInternalLocale(en|cn|ja|es|pt|de)/pages/:path*",
                destination: "/:nextInternalLocale/free-pro-team@latest/pages/:path*"
            }, {
                source: "/:nextInternalLocale(en|cn|ja|es|pt|de)/education/:path*",
                destination: "/:nextInternalLocale/free-pro-team@latest/education/:path*"
            }, {
                source: "/:nextInternalLocale(en|cn|ja|es|pt|de)/desktop/:path*",
                destination: "/:nextInternalLocale/free-pro-team@latest/desktop/:path*"
            }, {
                source: "/:nextInternalLocale(en|cn|ja|es|pt|de)/early-access/:path*",
                destination: "/:nextInternalLocale/free-pro-team@latest/early-access/:path*"
            }],
            fallback: []
        },
        "/": [e, t, a, n, "static/chunks/pages/index-f6a7e79d49dee98b2144.js"],
        "/404": [e, "static/chunks/pages/404-b9d432cf2f153485880b.js"],
        "/500": [e, "static/chunks/pages/500-3d0bd4b684bed4992716.js"],
        "/_error": ["static/chunks/pages/_error-82a806cd39f8ab3dc3ac.js"],
        "/[versionId]": [e, t, a, n, "static/chunks/pages/[versionId]-3d5245312ce5daeb0db5.js"],
        "/[versionId]/admin/release-notes": [e, t, a, "static/chunks/pages/[versionId]/admin/release-notes-00e1147b17492b618d2e.js"],
        "/[versionId]/graphql/overview/explorer": [e, t, a, "static/chunks/pages/[versionId]/graphql/overview/explorer-ae4464deaa3a990b35d6.js"],
        "/[versionId]/[productId]": [e, t, a, s, "static/chunks/pages/[versionId]/[productId]-1a196752000b6f64b5e3.js"],
        "/[versionId]/[productId]/[...restPage]": [e, t, a, s, "static/chunks/pages/[versionId]/[productId]/[...restPage]-d9baea89006b74a02761.js"],
        sortedPages: ["/", "/404", "/500", "/_app", "/_error", "/[versionId]", "/[versionId]/admin/release-notes", "/[versionId]/graphql/overview/explorer", "/[versionId]/[productId]", "/[versionId]/[productId]/[...restPage]"]
    }
}("static/chunks/0e226fb0-03c39198cea09d2044eb.js", "static/chunks/931-343c5f4de33335080430.js", "static/chunks/674-9fd57f3c5f092d88ad11.js", "static/chunks/227-b2f60211d9f415858289.js", "static/chunks/776-1f65d9a18ccf92f75897.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();