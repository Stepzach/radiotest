(window.webpackJsonp = window.webpackJsonp || []).push([[23], {
    346: function(t, e, n) {
        "use strict";
        n.r(e);
        n(84),
        n(352),
        n(105);
        var r = n(6),
            o = n(9),
            l = n.n(o),
            c = n(12);
        function d(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))),
                e.push.apply(e, n)
            }
            return e
        }
        function f(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? d(Object(source), !0).forEach((function(e) {
                    Object(r.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : d(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        var m = {
                mixins: [n(349).a],
                props: {
                    postDate: {
                        type: String,
                        required: !1,
                        default: ""
                    },
                    content: {
                        type: Object,
                        default: function() {}
                    },
                    type: {
                        type: String,
                        required: !0
                    },
                    id: {
                        type: [Number, String],
                        required: !0
                    },
                    thumbnail: {
                        type: Array,
                        required: !1,
                        default: function() {
                            return []
                        }
                    },
                    title: {
                        type: String,
                        required: !0
                    },
                    description: {
                        type: String,
                        required: !1,
                        default: ""
                    },
                    uri: {
                        type: String,
                        required: !0
                    },
                    tags: {
                        type: Array,
                        required: !1,
                        default: function() {
                            return []
                        }
                    },
                    collection: {
                        type: Array,
                        required: !1,
                        default: function() {
                            return []
                        }
                    }
                },
                computed: f(f(f({}, Object(c.c)({
                    isLoggedIn: "account/isLoggedIn"
                })), Object(c.d)({
                    favourites: function(t) {
                        return t.favourites.favouriteEntryIds
                    },
                    favouritesLoaded: function(t) {
                        return t.favourites.favouritesLoaded
                    }
                })), {}, {
                    isFavourite: function() {
                        return l.a.includes(this.favourites, parseInt(this.id))
                    },
                    thumbnailURL: function() {
                        return this.thumbnail[0] ? this.thumbnail[0].url : "/default-thumb.png"
                    }
                }),
                methods: f(f({}, Object(c.b)({
                    addToFavourites: "favourites/addToFavourites",
                    removeFromFavourites: "favourites/removeFromFavourites"
                })), {}, {
                    onFavouriteClicked: function() {
                        var t = parseInt(this.id);
                        this.isFavourite ? this.removeFromFavourites(t) : this.addToFavourites(t)
                    }
                })
            },
            y = n(17),
            component = Object(y.a)(m, (function() {
                var t = this,
                    e = t.$createElement,
                    r = t._self._c || e;
                return r("div", {
                    staticClass: "entry-card-wrapper"
                }, [r("div", {
                    staticClass: "entry-card"
                }, [r("div", {
                    staticClass: "thumbnail"
                }, [r("nuxt-link", {
                    attrs: {
                        to: "/" + t.uri
                    }
                }, [r("img", {
                    staticClass: "thumbnail-img",
                    attrs: {
                        src: t.fallbackUrl || t.thumbnailURL
                    },
                    on: {
                        error: t.onThumbnailMissing
                    }
                })])], 1), t._v(" "), r("div", {
                    staticClass: "text"
                }, [r("header", [r("div", {
                    staticClass: "entry-info"
                }, [r("div", {
                    staticClass: "entry-type-cat"
                }, ["episode_episode_Entry" === t.type ? [r("div", {
                    staticClass: "entry-type link-pill filled not-link-pill"
                }, [t._v("\n                Episode\n              ")]), t._v(" "), t.collection && t.collection[0] ? r("div", {
                    staticClass: "entry-type link-pill"
                }, [r("nuxt-link", {
                    staticClass: "tag-inner",
                    attrs: {
                        to: "/" + t.collection[0].uri
                    }
                }, [t._v("\n                  " + t._s(t.collection[0].title) + "\n                ")])], 1) : t._e()] : t._e(), t._v(" "), "collectionCategories_Category" === t.type ? r("div", {
                    staticClass: "entry-type link-pill filled not-link-pill"
                }, [t._v("\n              Collection\n            ")]) : t._e(), t._v(" "), "editorial_editorial_Entry" === t.type ? r("div", {
                    staticClass: "entry-type link-pill filled not-link-pill"
                }, [t._v("\n              Editorial\n            ")]) : t._e(), t._v(" "), "premiumContent_premiumContent_Entry" === t.type ? r("div", {
                    staticClass: "entry-type link-pill filled premium"
                }, [r("nuxt-link", {
                    attrs: {
                        to: "/member-content"
                    }
                }, [t._v("Family")])], 1) : t._e()], 2), t._v(" "), r("p", [t._v(t._s(t.postDate))])]), t._v(" "), r("nuxt-link", {
                    attrs: {
                        to: "/" + t.uri
                    }
                }, [r("div", {
                    staticClass: "entry-title uppercase"
                }, [t._v("\n            " + t._s(t.title) + "\n          ")]), t._v(" "), r("div", {
                    staticClass: "entry-description"
                }, [t._v("\n            " + t._s(t.description) + "\n          ")])])], 1), t._v(" "), r("footer", [null !== t.tags ? r("div", {
                    staticClass: "entry-tags uppercase"
                }, t._l(t.tags, (function(e) {
                    return r("div", {
                        key: e.id,
                        staticClass: "entry-tag link-pill uppercase"
                    }, [r("nuxt-link", {
                        staticClass: "tag-inner",
                        attrs: {
                            to: "/tags/" + e.slug
                        }
                    }, [t._v("\n              " + t._s(e.title) + "\n            ")])], 1)
                })), 0) : t._e(), t._v(" "), t.isLoggedIn ? [t.favouritesLoaded ? [r("div", {
                    staticClass: "saved-content",
                    on: {
                        click: function(e) {
                            return e.stopPropagation(), e.preventDefault(), t.onFavouriteClicked(e)
                        }
                    }
                }, [t.isFavourite ? r("img", {
                    staticClass: "icon",
                    attrs: {
                        title: "Remove from favourites",
                        src: n(350)
                    }
                }) : r("img", {
                    staticClass: "icon",
                    attrs: {
                        title: "Add to favourites",
                        src: n(351)
                    }
                })])] : [t._v("...")]] : t._e()], 2)])])])
            }), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            Header: n(86).default,
            Footer: n(87).default
        })
    },
    347: function(t, e) {
        t.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
    },
    348: function(t, e, n) {
        var r = n(27),
            o = "[" + n(347) + "]",
            l = RegExp("^" + o + o + "*"),
            c = RegExp(o + o + "*$"),
            d = function(t) {
                return function(e) {
                    var n = String(r(e));
                    return 1 & t && (n = n.replace(l, "")), 2 & t && (n = n.replace(c, "")), n
                }
            };
        t.exports = {
            start: d(1),
            end: d(2),
            trim: d(3)
        }
    },
    349: function(t, e, n) {
        "use strict";
        e.a = {
            data: function() {
                return {
                    fallbackUrl: null
                }
            },
            methods: {
                onThumbnailMissing: function() {
                    "/default-thumb.png" !== this.fallbackUrl && (this.fallbackUrl = "/default-thumb.png")
                }
            }
        }
    },
    350: function(t, e) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyNC4xIDIyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNC4xIDIyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTEyLDIxYy0wLjIsMC0wLjMsMC0wLjUtMC4xTDExLDIwLjZDMTAuNywyMC4zLDEsMTMuOSwxLDcuOUMxLDMuNCw0LjIsMSw3LjQsMWMxLjcsMCwzLjMsMC43LDQuNiwxLjkKCUMxMy4zLDEuNywxNC45LDEsMTYuNiwxQzE5LjgsMSwyMywzLjQsMjMsNy45YzAsNi4xLTkuNywxMi40LTEwLjEsMTIuN2wtMC41LDAuM0MxMi40LDIwLjksMTIuMiwyMSwxMiwyMSIvPgo8L3N2Zz4K"
    },
    351: function(t, e) {
        t.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyMi4xIDIwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMi4xIDIwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAxMDIwMjt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMSwyMGMtMC4yLDAtMC4zLTAuMS0wLjUtMC4xbC0wLjUtMC4zQzkuNywxOS4zLDAsMTIuOSwwLDYuOUMwLDIuNCwzLjIsMCw2LjQsMEM4LjEsMCw5LjgsMC43LDExLDEuOQoJQzEyLjMsMC43LDEzLjksMCwxNS42LDBjMy4yLDAsNi40LDIuNCw2LjQsNi45YzAsNi4xLTkuNywxMi40LTEwLjEsMTIuN2wtMC41LDAuM0MxMS40LDE5LjksMTEuMiwyMCwxMSwyMCBNNi40LDEuNwoJYy0yLjMsMC00LjcsMS42LTQuNyw1LjJDMS43LDEyLDEwLjksMTgsMTEsMTguMWwwLDBjMC4xLTAuMSw5LjMtNi4xLDkuMy0xMS4yYzAtMy40LTIuNC01LjItNC43LTUuMmMtMS41LDAtMi45LDAuNy0zLjksMS45CgljLTAuMywwLjQtMSwwLjQtMS4zLDBDOS40LDIuNCw3LjksMS43LDYuNCwxLjciLz4KPC9zdmc+Cg=="
    },
    352: function(t, e, n) {
        "use strict";
        var r = n(28),
            o = n(11),
            l = n(107),
            c = n(33),
            d = n(29),
            f = n(48),
            m = n(218),
            y = n(106),
            v = n(13),
            h = n(108),
            M = n(152).f,
            I = n(60).f,
            C = n(35).f,
            w = n(348).trim,
            L = o.Number,
            D = L.prototype,
            _ = "Number" == f(h(D)),
            E = function(t) {
                var e,
                    n,
                    r,
                    o,
                    l,
                    c,
                    d,
                    code,
                    f = y(t, !1);
                if ("string" == typeof f && f.length > 2)
                    if (43 === (e = (f = w(f)).charCodeAt(0)) || 45 === e) {
                        if (88 === (n = f.charCodeAt(2)) || 120 === n)
                            return NaN
                    } else if (48 === e) {
                        switch (f.charCodeAt(1)) {
                        case 66:
                        case 98:
                            r = 2,
                            o = 49;
                            break;
                        case 79:
                        case 111:
                            r = 8,
                            o = 55;
                            break;
                        default:
                            return +f
                        }
                        for (c = (l = f.slice(2)).length, d = 0; d < c; d++)
                            if ((code = l.charCodeAt(d)) < 48 || code > o)
                                return NaN;
                        return parseInt(l, r)
                    }
                return +f
            };
        if (l("Number", !L(" 0o1") || !L("0b1") || L("+0x1"))) {
            for (var j, N = function(t) {
                    var e = arguments.length < 1 ? 0 : t,
                        n = this;
                    return n instanceof N && (_ ? v((function() {
                        D.valueOf.call(n)
                    })) : "Number" != f(n)) ? m(new L(E(e)), n, N) : E(e)
                }, S = r ? M(L) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","), x = 0; S.length > x; x++)
                d(L, j = S[x]) && !d(N, j) && C(N, j, I(L, j));
            N.prototype = D,
            D.constructor = N,
            c(o, "Number", N)
        }
    },
    355: function(t, e, n) {
        "use strict";
        n.d(e, "d", (function() {
            return h
        })),
        n.d(e, "b", (function() {
            return M
        })),
        n.d(e, "c", (function() {
            return I
        })),
        n.d(e, "a", (function() {
            return C
        }));
        var r = n(81),
            o = n(39),
            l = n.n(o);
        function c() {
            var data = Object(r.a)(['\n  query getEntries(\n    $section: [String]\n    $offset: Int\n    $limit: Int\n    $player: [QueryArgument]\n  ) {\n    entries(\n      section: $section\n      limit: $limit\n      offset: $offset\n      player: $player\n      orderBy: "broadcastDate DESC, postDate DESC"\n    ) {\n      id\n      uri\n      title\n      postDate @formatDateTime(format: "d.m.y")\n      ...ScheduleDay\n      ...Offers\n      ...Editorial\n      ...Episode\n    }\n  }\n  ', "\n  ", "\n  ", "\n  ", "\n"]);
            return c = function() {
                return data
            }, data
        }
        function d() {
            var data = Object(r.a)(['\n  fragment Episode on episode_episode_Entry {\n    id\n    title\n    description\n    thumbnail {\n      url @transform(width: 1200, height: 1200, immediately: true)\n    }\n    genreTags {\n      title\n      slug\n    }\n    broadcastDate @formatDateTime(format: "d.m.y")\n    episodeCollection {\n      id\n      title\n      uri\n    }\n  }\n']);
            return d = function() {
                return data
            }, data
        }
        function f() {
            var data = Object(r.a)(['\n  fragment Editorial on editorial_editorial_Entry {\n    id\n    title\n    description\n    thumbnail {\n      url @transform(width: 1200, height: 1200, immediately: true)\n    }\n    postDate @formatDateTime(format: "d.m.y")\n  }\n']);
            return f = function() {
                return data
            }, data
        }
        function m() {
            var data = Object(r.a)(['\n  fragment Offers on offers_offers_Entry {\n    offerCode\n    offerDate\n    offerLink\n    offerState\n    offerText\n    offerType\n    postDate @formatDateTime(format: "d.m.y")\n  }\n']);
            return m = function() {
                return data
            }, data
        }
        function y() {
            var data = Object(r.a)(['\n  fragment ScheduleDay on scheduleDay_scheduleDay_Entry {\n    scheduleDate @formatDateTime(format: "yy-m-d", timezone: "Europe/London")\n    scheduleContent {\n      id\n      __typename\n      ... on scheduleContent_scheduleDayItems_BlockType {\n        startTime @formatDateTime(format: "GG:i", timezone: "Europe/London")\n        endTime @formatDateTime(format: "GG:i", timezone: "Europe/London")\n        altTitle\n        episode {\n          title\n          uri\n        }\n      }\n    }\n  }\n']);
            return y = function() {
                return data
            }, data
        }
        var v = l()(y()),
            h = l()(m()),
            M = l()(f()),
            I = l()(d()),
            C = l()(c(), v, h, M, I)
    },
    356: function(t, e, n) {
        "use strict";
        var r = n(7),
            o = n(348).trim;
        r({
            target: "String",
            proto: !0,
            forced: n(360)("trim")
        }, {
            trim: function() {
                return o(this)
            }
        })
    },
    360: function(t, e, n) {
        var r = n(13),
            o = n(347);
        t.exports = function(t) {
            return r((function() {
                return !!o[t]() || "​᠎" != "​᠎"[t]() || o[t].name !== t
            }))
        }
    },
    423: function(t, e, n) {
        "use strict";
        n.r(e);
        n(356);
        var r = n(9),
            o = n.n(r),
            l = n(88),
            c = n.n(l),
            d = (n(44), n(32), n(85), n(109)),
            f = n(81),
            m = n(39),
            y = n.n(m),
            v = n(355);
        function h() {
            var data = Object(f.a)(['\n  query getSearchItems(\n    $query: String\n    $section: [String]\n    $offset: Int\n    $limit: Int\n  ) {\n    entries: entries(\n      search: $query\n      section: $section\n      limit: $limit\n      offset: $offset\n      orderBy: "broadcastDate DESC, postDate DESC"\n    ) {\n      title\n      uri\n      uid\n      id\n      postDate @formatDateTime(format: "d.m.y")\n      ...Offers\n      ...Editorial\n      ...Episode\n    }\n  }\n  ', "\n  ", "\n  ", "\n"]);
            return h = function() {
                return data
            }, data
        }
        var M = y()(h(), v.d, v.b, v.c),
            I = {
                data: function() {
                    return {
                        query: "",
                        page: 0,
                        showMoreEnabled: !0,
                        entries: {}
                    }
                },
                apollo: {
                    entries: {
                        query: function() {
                            return M
                        },
                        variables: function() {
                            return {
                                query: this.query,
                                offset: 0,
                                limit: 12,
                                section: this.section
                            }
                        },
                        update: function(data) {
                            return data.entries
                        },
                        fetchPolicy: "network-only",
                        prefetch: !1,
                        skip: function() {
                            return "" === this.query
                        }
                    }
                },
                methods: {
                    showMore: function() {
                        this.offset = this.entries.length,
                        this.$apollo.queries.entries.fetchMore({
                            variables: {
                                offset: this.offset,
                                limit: 12
                            },
                            updateQuery: function(t, e) {
                                var n = e.fetchMoreResult;
                                if (!n)
                                    return t;
                                var r = n.entries;
                                return {
                                    entries: [].concat(Object(d.a)(t.entries), Object(d.a)(r))
                                }
                            }
                        })
                    }
                }
            },
            C = {
                name: "Search",
                components: {
                    DynamicMarquee: c.a
                },
                mixins: [I],
                data: function() {
                    var t = o.a.get(this.$route.query, "q", "");
                    return {
                        query: t,
                        queryInPrompt: t,
                        section: ["collection", "editorial", "episode", "premiumContent"]
                    }
                },
                computed: {
                    hasSearch: function() {
                        return !o.a.isEmpty(o.a.trim(this.query))
                    }
                },
                watch: {
                    $route: function(t) {
                        var e = o.a.get(t.query, "q", "");
                        this.queryInPrompt = e,
                        this.query = e
                    }
                },
                methods: {
                    search: function() {
                        this.$router.push({
                            query: {
                                q: this.queryInPrompt
                            }
                        })
                    }
                },
                head: function() {
                    return {
                        title: "Search | WorldwideFM"
                    }
                }
            },
            w = n(17),
            component = Object(w.a)(C, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("section", {
                    staticClass: "page search static-same-style-background"
                }, [t._m(0), t._v(" "), n("div", {
                    staticClass: "container-fluid"
                }, [n("div", {
                    staticClass: "row center-xs"
                }, [n("form", {
                    attrs: {
                        classs: "search-form"
                    },
                    on: {
                        submit: function(e) {
                            return e.preventDefault(), t.search(e)
                        }
                    }
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.queryInPrompt,
                        expression: "queryInPrompt"
                    }],
                    attrs: {
                        type: "text",
                        name: "search",
                        placeholder: "Type Here to Search"
                    },
                    domProps: {
                        value: t.queryInPrompt
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.queryInPrompt = e.target.value)
                        }
                    }
                }), t._v(" "), n("button", {
                    attrs: {
                        type: "submit"
                    }
                }, [t._v("Search")])])])]), t._v(" "), n("div", {
                    staticClass: "search-result-wrapper",
                    class: {
                        visible: t.hasSearch && t.entries && t.entries.length > 0 && !t.$apollo.queries.entries.loading
                    }
                }, [n("div", {
                    staticClass: "full-width-ticker marquee sticky-heading"
                }, [n("dynamic-marquee", {
                    attrs: {
                        direction: "row",
                        reverse: ""
                    }
                }, [n("h2", [t._v(t._s(t.query))])])], 1), t._v(" "), n("div", {
                    staticClass: "container-fluid search-result-items"
                }, [t.entries ? n("div", {
                    staticClass: "post-grid row margin-bottom"
                }, t._l(t.entries, (function(t) {
                    return n("article", {
                        key: t.uid,
                        staticClass: "post-grid-item col-sm-3 col-xs-12"
                    }, [n("worldwide-card", {
                        attrs: {
                            id: t.id,
                            type: t.__typename,
                            description: t.description,
                            title: t.title,
                            uri: t.uri,
                            tags: t.genreTags,
                            thumbnail: t.thumbnail,
                            "post-date": t.broadcastDate || t.postDate
                        }
                    })], 1)
                })), 0) : t._e(), t._v(" "), t.$apollo.queries.entries.loading ? n("div", {
                    staticClass: "row-full-width"
                }, [t._m(1)]) : t._e()])]), t._v(" "), n("div", {
                    staticClass: "row-full-width"
                }, [n("div", {
                    staticClass: "container-fluid"
                }, ["" === t.query || t.$apollo.queries.entries.loading ? t._e() : n("button", {
                    staticClass: "pagination-button",
                    on: {
                        click: function(e) {
                            return e.stopPropagation(), e.preventDefault(), t.showMore(e)
                        }
                    }
                }, [t._v("\n        Show More\n      ")])])])])
            }), [function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "container-fluid"
                }, [e("div", {
                    staticClass: "row center-xs"
                }, [e("div", {
                    staticClass: "search-message"
                }, [e("h2", [this._v("\n          Oops, we Couldn’t find what you were looking for. Please try again.\n        ")])])])])
            }, function() {
                var t = this.$createElement,
                    e = this._self._c || t;
                return e("div", {
                    staticClass: "container-fluid"
                }, [e("div", {
                    staticClass: "loading"
                }, [this._v("LOADING")])])
            }], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            WorldwideCard: n(346).default
        })
    }
}]);
