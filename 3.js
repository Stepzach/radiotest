(window.webpackJsonp = window.webpackJsonp || []).push([[12], {
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
        var y = {
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
            M = n(17),
            component = Object(M.a)(y, (function() {
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
            y = n(218),
            M = n(106),
            m = n(13),
            I = n(108),
            v = n(152).f,
            C = n(60).f,
            L = n(35).f,
            w = n(348).trim,
            h = o.Number,
            j = h.prototype,
            N = "Number" == f(I(j)),
            x = function(t) {
                var e,
                    n,
                    r,
                    o,
                    l,
                    c,
                    d,
                    code,
                    f = M(t, !1);
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
        if (l("Number", !h(" 0o1") || !h("0b1") || h("+0x1"))) {
            for (var D, E = function(t) {
                    var e = arguments.length < 1 ? 0 : t,
                        n = this;
                    return n instanceof E && (N ? m((function() {
                        j.valueOf.call(n)
                    })) : "Number" != f(n)) ? y(new h(x(e)), n, E) : x(e)
                }, _ = r ? v(h) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","), S = 0; _.length > S; S++)
                d(h, D = _[S]) && !d(E, D) && L(E, D, C(h, D));
            E.prototype = j,
            j.constructor = E,
            c(o, "Number", E)
        }
    },
    361: function(t, e, n) {
        "use strict";
        n(44);
        var r = n(109),
            o = n(81),
            l = n(39);
        function c() {
            var data = Object(o.a)(["\n  query getCollectionCategoriesItems(\n    $group: [String]\n    $offset: Int\n    $limit: Int\n  ) {\n    categories: categories(group: $group, limit: $limit, offset: $offset) {\n      id\n      title\n      uri\n      ... on collectionCategories_Category {\n        description\n        thumbnail {\n          url @transform(width: 1200, height: 1200, immediately: true)\n        }\n      }\n      ... on editorialCategories_Category {\n        description\n        thumbnail {\n          url @transform(width: 1200, height: 1200, immediately: true)\n        }\n      }\n    }\n  }\n"]);
            return c = function() {
                return data
            }, data
        }
        var d = n.n(l)()(c());
        e.a = {
            data: function() {
                return {
                    offset: 0,
                    showMoreEnabled: !0,
                    categories: {}
                }
            },
            apollo: {
                categories: {
                    client: "cached",
                    query: d,
                    variables: function() {
                        return {
                            offset: 0,
                            limit: 12,
                            group: this.section
                        }
                    },
                    update: function(data) {
                        return data.categories
                    },
                    fetchPolicy: "network-only",
                    prefetch: !1
                }
            },
            methods: {
                showMore: function() {
                    var t = this;
                    this.offset = this.offset + 12,
                    this.$apollo.queries.categories.fetchMore({
                        variables: {
                            offset: this.offset,
                            limit: 12
                        },
                        updateQuery: function(e, n) {
                            var o = n.fetchMoreResult;
                            if (!o || 0 === o.categories.length)
                                return t.showMoreEnabled = !1, e;
                            var l = o.categories;
                            return {
                                categories: [].concat(Object(r.a)(e.categories), Object(r.a)(l))
                            }
                        }
                    })
                }
            }
        }
    },
    365: function(t, e, n) {
        var content = n(390);
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
        (0, n(83).default)("14563738", content, !0, {
            sourceMap: !1
        })
    },
    389: function(t, e, n) {
        "use strict";
        n(365)
    },
    390: function(t, e, n) {
        (e = n(82)(!1)).push([t.i, ".container{margin:0 auto;min-height:calc(100vh - 10rem);display:flex;justify-content:center;align-items:center;text-align:center}", ""]),
        t.exports = e
    },
    432: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = {
                mixins: [n(361).a],
                beforeCreate: function() {
                    this.section = "editorialCategories"
                },
                head: function() {
                    return {
                        title: "Editorials | WorldwideFM"
                    }
                }
            },
            o = (n(389), n(17)),
            component = Object(o.a)(r, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("section", {
                    staticClass: "page static-same-style-background"
                }, [n("div", {
                    staticClass: "container-fluid"
                }, [n("div", {
                    class: "post-grid row margin-bottom col-md-12"
                }, [t.categories ? t._l(t.categories, (function(t, e) {
                    return n("article", {
                        key: e,
                        staticClass: "post-grid-item"
                    }, [n("worldwide-card", {
                        key: "collection-" + e,
                        attrs: {
                            id: t.id,
                            description: t.description,
                            title: t.title,
                            uri: t.uri,
                            thumbnail: t.thumbnail,
                            tags: t.genreTags,
                            type: t.__typename,
                            "post-date": t.postDate,
                            collection: [t]
                        }
                    })], 1)
                })) : t._e()], 2)]), t._v(" "), t.showMoreEnabled ? n("div", {
                    staticClass: "row-full-width"
                }, [n("div", {
                    staticClass: "container-fluid"
                }, [n("button", {
                    staticClass: "pagination-button",
                    on: {
                        click: function(e) {
                            return e.stopPropagation(), e.preventDefault(), t.showMore(e)
                        }
                    }
                }, [t._v("\n        Show More\n      ")])])]) : t._e()])
            }), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            WorldwideCard: n(346).default
        })
    }
}]);
