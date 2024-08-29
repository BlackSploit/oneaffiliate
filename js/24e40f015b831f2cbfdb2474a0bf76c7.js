/**handles:jquery-easing,jquery-mousewheel,nectar_priority,nectar-transit,nectar-waypoints,imagesLoaded,hoverintent,fancyBox,anime,nectar-animated-gradient,flickity,superfish,nectar-frontend,touchswipe,wpb_composer_front_js**/
/*
 * jQuery Easing v1.4.1 - http://gsgd.co.uk/sandbox/jquery/easing/
 */
!(function (n) {
  "function" == typeof define && define.amd
    ? define(["jquery"], function (e) {
        return n(e);
      })
    : "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = n(require("jquery")))
    : n(jQuery);
})(function (n) {
  function e(n) {
    var e = 7.5625,
      t = 2.75;
    return n < 1 / t
      ? e * n * n
      : n < 2 / t
      ? e * (n -= 1.5 / t) * n + 0.75
      : n < 2.5 / t
      ? e * (n -= 2.25 / t) * n + 0.9375
      : e * (n -= 2.625 / t) * n + 0.984375;
  }
  void 0 !== n.easing && (n.easing.jswing = n.easing.swing);
  var t = Math.pow,
    u = Math.sqrt,
    r = Math.sin,
    i = Math.cos,
    a = Math.PI,
    o = 1.70158,
    c = 1.525 * o,
    s = (2 * a) / 3,
    f = (2 * a) / 4.5;
  return (
    n.extend(n.easing, {
      def: "easeOutQuad",
      swing: function (e) {
        return n.easing[n.easing.def](e);
      },
      easeInQuad: function (n) {
        return n * n;
      },
      easeOutQuad: function (n) {
        return 1 - (1 - n) * (1 - n);
      },
      easeInOutQuad: function (n) {
        return n < 0.5 ? 2 * n * n : 1 - t(-2 * n + 2, 2) / 2;
      },
      easeInCubic: function (n) {
        return n * n * n;
      },
      easeOutCubic: function (n) {
        return 1 - t(1 - n, 3);
      },
      easeInOutCubic: function (n) {
        return n < 0.5 ? 4 * n * n * n : 1 - t(-2 * n + 2, 3) / 2;
      },
      easeInQuart: function (n) {
        return n * n * n * n;
      },
      easeOutQuart: function (n) {
        return 1 - t(1 - n, 4);
      },
      easeInOutQuart: function (n) {
        return n < 0.5 ? 8 * n * n * n * n : 1 - t(-2 * n + 2, 4) / 2;
      },
      easeInQuint: function (n) {
        return n * n * n * n * n;
      },
      easeOutQuint: function (n) {
        return 1 - t(1 - n, 5);
      },
      easeInOutQuint: function (n) {
        return n < 0.5 ? 16 * n * n * n * n * n : 1 - t(-2 * n + 2, 5) / 2;
      },
      easeInSine: function (n) {
        return 1 - i((n * a) / 2);
      },
      easeOutSine: function (n) {
        return r((n * a) / 2);
      },
      easeInOutSine: function (n) {
        return -(i(a * n) - 1) / 2;
      },
      easeInExpo: function (n) {
        return 0 === n ? 0 : t(2, 10 * n - 10);
      },
      easeOutExpo: function (n) {
        return 1 === n ? 1 : 1 - t(2, -10 * n);
      },
      easeInOutExpo: function (n) {
        return 0 === n
          ? 0
          : 1 === n
          ? 1
          : n < 0.5
          ? t(2, 20 * n - 10) / 2
          : (2 - t(2, -20 * n + 10)) / 2;
      },
      easeInCirc: function (n) {
        return 1 - u(1 - t(n, 2));
      },
      easeOutCirc: function (n) {
        return u(1 - t(n - 1, 2));
      },
      easeInOutCirc: function (n) {
        return n < 0.5
          ? (1 - u(1 - t(2 * n, 2))) / 2
          : (u(1 - t(-2 * n + 2, 2)) + 1) / 2;
      },
      easeInElastic: function (n) {
        return 0 === n
          ? 0
          : 1 === n
          ? 1
          : -t(2, 10 * n - 10) * r((10 * n - 10.75) * s);
      },
      easeOutElastic: function (n) {
        return 0 === n
          ? 0
          : 1 === n
          ? 1
          : t(2, -10 * n) * r((10 * n - 0.75) * s) + 1;
      },
      easeInOutElastic: function (n) {
        return 0 === n
          ? 0
          : 1 === n
          ? 1
          : n < 0.5
          ? (-t(2, 20 * n - 10) * r((20 * n - 11.125) * f)) / 2
          : (t(2, -20 * n + 10) * r((20 * n - 11.125) * f)) / 2 + 1;
      },
      easeInBack: function (n) {
        return 2.70158 * n * n * n - o * n * n;
      },
      easeOutBack: function (n) {
        return 1 + 2.70158 * t(n - 1, 3) + o * t(n - 1, 2);
      },
      easeInOutBack: function (n) {
        return n < 0.5
          ? (t(2 * n, 2) * (7.189819 * n - c)) / 2
          : (t(2 * n - 2, 2) * ((c + 1) * (2 * n - 2) + c) + 2) / 2;
      },
      easeInBounce: function (n) {
        return 1 - e(1 - n);
      },
      easeOutBounce: e,
      easeInOutBounce: function (n) {
        return n < 0.5 ? (1 - e(1 - 2 * n)) / 2 : (1 + e(2 * n - 1)) / 2;
      },
    }),
    n
  );
});
/*!
 * jQuery Mousewheel 3.1.13
 * Copyright OpenJS Foundation and other contributors
 */
!(function (e) {
  "function" == typeof define && define.amd
    ? define(["jquery"], e)
    : "object" == typeof exports
    ? (module.exports = e)
    : e(jQuery);
})(function (u) {
  var f,
    d,
    e = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
    t =
      "onwheel" in window.document || 9 <= window.document.documentMode
        ? ["wheel"]
        : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
    w = Array.prototype.slice;
  if (u.event.fixHooks)
    for (var i = e.length; i; ) u.event.fixHooks[e[--i]] = u.event.mouseHooks;
  var c = (u.event.special.mousewheel = {
    version: "3.1.12",
    setup: function () {
      if (this.addEventListener)
        for (var e = t.length; e; )
          this.addEventListener(t[--e], n, { passive: false });
      else this.onmousewheel = n;
      u.data(this, "mousewheel-line-height", c.getLineHeight(this)),
        u.data(this, "mousewheel-page-height", c.getPageHeight(this));
    },
    teardown: function () {
      if (this.removeEventListener)
        for (var e = t.length; e; ) this.removeEventListener(t[--e], n, !1);
      else this.onmousewheel = null;
      u.removeData(this, "mousewheel-line-height"),
        u.removeData(this, "mousewheel-page-height");
    },
    getLineHeight: function (e) {
      var t = u(e),
        i = t["offsetParent" in u.fn ? "offsetParent" : "parent"]();
      return (
        i.length || (i = u("body")),
        parseInt(i.css("fontSize"), 10) || parseInt(t.css("fontSize"), 10) || 16
      );
    },
    getPageHeight: function (e) {
      return u(e).height();
    },
    settings: { adjustOldDeltas: !0, normalizeOffset: !0 },
  });
  function n(e) {
    var t,
      i = e || window.event,
      n = w.call(arguments, 1),
      o = 0,
      l = 0,
      s = 0;
    if (
      (((e = u.event.fix(i)).type = "mousewheel"),
      "detail" in i && (s = -1 * i.detail),
      "wheelDelta" in i && (s = i.wheelDelta),
      "wheelDeltaY" in i && (s = i.wheelDeltaY),
      "wheelDeltaX" in i && (l = -1 * i.wheelDeltaX),
      "axis" in i && i.axis === i.HORIZONTAL_AXIS && ((l = -1 * s), (s = 0)),
      (o = 0 === s ? l : s),
      "deltaY" in i && (o = s = -1 * i.deltaY),
      "deltaX" in i && ((l = i.deltaX), 0 === s && (o = -1 * l)),
      0 !== s || 0 !== l)
    ) {
      if (1 === i.deltaMode) {
        var a = u.data(this, "mousewheel-line-height");
        (o *= a), (s *= a), (l *= a);
      } else if (2 === i.deltaMode) {
        var h = u.data(this, "mousewheel-page-height");
        (o *= h), (s *= h), (l *= h);
      }
      if (
        ((t = Math.max(Math.abs(s), Math.abs(l))),
        (!d || t < d) && g(i, (d = t)) && (d /= 40),
        g(i, t) && ((o /= 40), (l /= 40), (s /= 40)),
        (o = Math[1 <= o ? "floor" : "ceil"](o / d)),
        (l = Math[1 <= l ? "floor" : "ceil"](l / d)),
        (s = Math[1 <= s ? "floor" : "ceil"](s / d)),
        c.settings.normalizeOffset && this.getBoundingClientRect)
      ) {
        var r = this.getBoundingClientRect();
        (e.offsetX = e.clientX - r.left), (e.offsetY = e.clientY - r.top);
      }
      return (
        (e.deltaX = l),
        (e.deltaY = s),
        (e.deltaFactor = d),
        (e.deltaMode = 0),
        n.unshift(e, o, l, s),
        f && window.clearTimeout(f),
        (f = window.setTimeout(m, 200)),
        (u.event.dispatch || u.event.handle).apply(this, n)
      );
    }
  }
  function m() {
    d = null;
  }
  function g(e, t) {
    return (
      c.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0
    );
  }
  u.fn.extend({
    mousewheel: function (e) {
      return e ? this.on("mousewheel", e) : this.trigger("mousewheel");
    },
    unmousewheel: function (e) {
      return this.off("mousewheel", e);
    },
  });
});

var headerEl = document.getElementById("header-outer"),
  headerSpaceEl = document.getElementById("header-space");
void 0 !== headerEl &&
  null != headerEl &&
  void 0 !== headerSpaceEl &&
  null != headerSpaceEl &&
  headerSpaceEl.hasAttribute("data-secondary-header-display") &&
  (headerSpaceEl.style.height = headerEl.clientHeight + "px"),
  jQuery(function (t) {
    "use strict";
    var a,
      e,
      r,
      n,
      o,
      n,
      o = !1,
      d,
      i;
    function h() {
      var e = a.offset().top;
      t("#page-header-wrap.fullscreen-header").css("height", "auto"),
        a.css("height", parseInt(window.innerHeight) - parseInt(e) + "px");
    }
    (o = navigator.userAgent.match(
      /(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/
    )
      ? !0
      : o) &&
      0 < t("#page-header-bg.fullscreen-header").length &&
      ((a = t("#page-header-bg")),
      h(),
      (d = window.innerWidth),
      (i = window.innerHeight),
      t(window).resize(function () {
        t(window).width() != d &&
          t(window).height != i &&
          (h(), (d = window.innerWidth), (i = window.innerHeight));
      })),
      o &&
        0 < t(".nectar_fullscreen_zoom_recent_projects").length &&
        ((e =
          0 < t(".body-border-top").length && 1e3 < t(window).width()
            ? t(".body-border-top").height()
            : 0),
        t(".nectar_fullscreen_zoom_recent_projects").each(function () {
          0 < t(this).parents(".first-section").length
            ? t(this).css(
                "height",
                t(window).height() - t(this).offset().top - e
              )
            : t(this).css("height", t(window).height());
        })),
      0 < t('#header-outer[data-format="centered-menu-bottom-bar"]').length &&
        ((r = t(
          '#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9'
        )),
        (n = t(
          '#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_3'
        )),
        (o = t("#header-secondary-outer")),
        (n = n.find("#logo").clone()).is('[data-supplied-ml="true"]') &&
          n.find("img:not(.mobile-only-logo)").remove(),
        n.find("img.starting-logo").remove(),
        0 < o.length && o.addClass("centered-menu-bottom-bar"),
        n.removeAttr("id").addClass("logo-clone"),
        0 < t('#header-outer[data-condense="true"]').length &&
          0 == t('#header-outer[data-menu-bottom-bar-align="left"]').length &&
          r.prepend(n)),
      t('#page-header-bg[data-animate-in-effect="zoom-out"]').addClass(
        "loaded"
      );
  });
/*!
 * jQuery Transit - CSS3 transitions and transformations
 * (c) 2011-2012 Rico Sta. Cruz <rico@ricostacruz.com>
 * MIT Licensed.
 */

(function (k) {
  k.transit = {
    version: "0.9.9",
    propertyMap: {
      marginLeft: "margin",
      marginRight: "margin",
      marginBottom: "margin",
      marginTop: "margin",
      paddingLeft: "padding",
      paddingRight: "padding",
      paddingBottom: "padding",
      paddingTop: "padding",
    },
    enabled: true,
    useTransitionEnd: false,
  };
  var d = document.createElement("div");
  var q = {};
  function b(v) {
    if (v in d.style) {
      return v;
    }
    var u = ["Moz", "Webkit", "O", "ms"];
    var r = v.charAt(0).toUpperCase() + v.substr(1);
    if (v in d.style) {
      return v;
    }
    for (var t = 0; t < u.length; ++t) {
      var s = u[t] + r;
      if (s in d.style) {
        return s;
      }
    }
  }
  function e() {
    d.style[q.transform] = "";
    d.style[q.transform] = "rotateY(90deg)";
    return d.style[q.transform] !== "";
  }
  var a = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
  q.transition = b("transition");
  q.transitionDelay = b("transitionDelay");
  q.transform = b("transform");
  q.transformOrigin = b("transformOrigin");
  q.transform3d = e();
  var i = {
    transition: "transitionEnd",
    MozTransition: "transitionend",
    OTransition: "oTransitionEnd",
    WebkitTransition: "webkitTransitionEnd",
    msTransition: "MSTransitionEnd",
  };
  var f = (q.transitionEnd = i[q.transition] || null);
  for (var p in q) {
    if (q.hasOwnProperty(p) && typeof k.support[p] === "undefined") {
      k.support[p] = q[p];
    }
  }
  d = null;
  k.cssEase = {
    _default: "ease",
    in: "ease-in",
    out: "ease-out",
    "in-out": "ease-in-out",
    snap: "cubic-bezier(0,1,.5,1)",
    easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
    easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
    easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
    easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
    easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
    easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
    easeOutExpo: "cubic-bezier(.19,1,.22,1)",
    easeInOutExpo: "cubic-bezier(1,0,0,1)",
    easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
    easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
    easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
    easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
    easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
    easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
    easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
    easeOutQuint: "cubic-bezier(.23,1,.32,1)",
    easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
    easeInSine: "cubic-bezier(.47,0,.745,.715)",
    easeOutSine: "cubic-bezier(.39,.575,.565,1)",
    easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
    easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
    easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
    easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)",
  };
  k.cssHooks["transit:transform"] = {
    get: function (r) {
      return k(r).data("transform") || new j();
    },
    set: function (s, r) {
      var t = r;
      if (!(t instanceof j)) {
        t = new j(t);
      }
      if (q.transform === "WebkitTransform" && !a) {
        s.style[q.transform] = t.toString(true);
      } else {
        s.style[q.transform] = t.toString();
      }
      k(s).data("transform", t);
    },
  };
  k.cssHooks.transform = { set: k.cssHooks["transit:transform"].set };
  if (k.fn.jquery < "1.8") {
    k.cssHooks.transformOrigin = {
      get: function (r) {
        return r.style[q.transformOrigin];
      },
      set: function (r, s) {
        r.style[q.transformOrigin] = s;
      },
    };
    k.cssHooks.transition = {
      get: function (r) {
        return r.style[q.transition];
      },
      set: function (r, s) {
        r.style[q.transition] = s;
      },
    };
  }
  n("scale");
  n("translate");
  n("rotate");
  n("rotateX");
  n("rotateY");
  n("rotate3d");
  n("perspective");
  n("skewX");
  n("skewY");
  n("x", true);
  n("y", true);
  function j(r) {
    if (typeof r === "string") {
      this.parse(r);
    }
    return this;
  }
  j.prototype = {
    setFromString: function (t, s) {
      var r =
        typeof s === "string"
          ? s.split(",")
          : s.constructor === Array
          ? s
          : [s];
      r.unshift(t);
      j.prototype.set.apply(this, r);
    },
    set: function (s) {
      var r = Array.prototype.slice.apply(arguments, [1]);
      if (this.setter[s]) {
        this.setter[s].apply(this, r);
      } else {
        this[s] = r.join(",");
      }
    },
    get: function (r) {
      if (this.getter[r]) {
        return this.getter[r].apply(this);
      } else {
        return this[r] || 0;
      }
    },
    setter: {
      rotate: function (r) {
        this.rotate = o(r, "deg");
      },
      rotateX: function (r) {
        this.rotateX = o(r, "deg");
      },
      rotateY: function (r) {
        this.rotateY = o(r, "deg");
      },
      scale: function (r, s) {
        if (s === undefined) {
          s = r;
        }
        this.scale = r + "," + s;
      },
      skewX: function (r) {
        this.skewX = o(r, "deg");
      },
      skewY: function (r) {
        this.skewY = o(r, "deg");
      },
      perspective: function (r) {
        this.perspective = o(r, "px");
      },
      x: function (r) {
        this.set("translate", r, null);
      },
      y: function (r) {
        this.set("translate", null, r);
      },
      translate: function (r, s) {
        if (this._translateX === undefined) {
          this._translateX = 0;
        }
        if (this._translateY === undefined) {
          this._translateY = 0;
        }
        if (r !== null && r !== undefined) {
          this._translateX = o(r, "px");
        }
        if (s !== null && s !== undefined) {
          this._translateY = o(s, "px");
        }
        this.translate = this._translateX + "," + this._translateY;
      },
    },
    getter: {
      x: function () {
        return this._translateX || 0;
      },
      y: function () {
        return this._translateY || 0;
      },
      scale: function () {
        var r = (this.scale || "1,1").split(",");
        if (r[0]) {
          r[0] = parseFloat(r[0]);
        }
        if (r[1]) {
          r[1] = parseFloat(r[1]);
        }
        return r[0] === r[1] ? r[0] : r;
      },
      rotate3d: function () {
        var t = (this.rotate3d || "0,0,0,0deg").split(",");
        for (var r = 0; r <= 3; ++r) {
          if (t[r]) {
            t[r] = parseFloat(t[r]);
          }
        }
        if (t[3]) {
          t[3] = o(t[3], "deg");
        }
        return t;
      },
    },
    parse: function (s) {
      var r = this;
      s.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function (t, v, u) {
        r.setFromString(v, u);
      });
    },
    toString: function (t) {
      var s = [];
      for (var r in this) {
        if (this.hasOwnProperty(r)) {
          if (
            !q.transform3d &&
            (r === "rotateX" ||
              r === "rotateY" ||
              r === "perspective" ||
              r === "transformOrigin")
          ) {
            continue;
          }
          if (r[0] !== "_") {
            if (t && r === "scale") {
              s.push(r + "3d(" + this[r] + ",1)");
            } else {
              if (t && r === "translate") {
                s.push(r + "3d(" + this[r] + ",0)");
              } else {
                s.push(r + "(" + this[r] + ")");
              }
            }
          }
        }
      }
      return s.join(" ");
    },
  };
  function m(s, r, t) {
    if (r === true) {
      s.queue(t);
    } else {
      if (r) {
        s.queue(r, t);
      } else {
        t();
      }
    }
  }
  function h(s) {
    var r = [];
    k.each(s, function (t) {
      t = k.camelCase(t);
      t = k.transit.propertyMap[t] || k.cssProps[t] || t;
      t = c(t);
      if (k.inArray(t, r) === -1) {
        r.push(t);
      }
    });
    return r;
  }
  function g(s, v, x, r) {
    var t = h(s);
    if (k.cssEase[x]) {
      x = k.cssEase[x];
    }
    var w = "" + l(v) + " " + x;
    if (parseInt(r, 10) > 0) {
      w += " " + l(r);
    }
    var u = [];
    k.each(t, function (z, y) {
      u.push(y + " " + w);
    });
    return u.join(", ");
  }
  k.fn.transition = k.fn.transit = function (z, s, y, C) {
    var D = this;
    var u = 0;
    var w = true;
    if (typeof s === "function") {
      C = s;
      s = undefined;
    }
    if (typeof y === "function") {
      C = y;
      y = undefined;
    }
    if (typeof z.easing !== "undefined") {
      y = z.easing;
      delete z.easing;
    }
    if (typeof z.duration !== "undefined") {
      s = z.duration;
      delete z.duration;
    }
    if (typeof z.complete !== "undefined") {
      C = z.complete;
      delete z.complete;
    }
    if (typeof z.queue !== "undefined") {
      w = z.queue;
      delete z.queue;
    }
    if (typeof z.delay !== "undefined") {
      u = z.delay;
      delete z.delay;
    }
    if (typeof s === "undefined") {
      s = k.fx.speeds._default;
    }
    if (typeof y === "undefined") {
      y = k.cssEase._default;
    }
    s = l(s);
    var E = g(z, s, y, u);
    var B = k.transit.enabled && q.transition;
    var t = B ? parseInt(s, 10) + parseInt(u, 10) : 0;
    if (t === 0) {
      var A = function (F) {
        D.css(z);
        if (C) {
          C.apply(D);
        }
        if (F) {
          F();
        }
      };
      m(D, w, A);
      return D;
    }
    var x = {};
    var r = function (H) {
      var G = false;
      var F = function () {
        if (G) {
          D.unbind(f, F);
        }
        if (t > 0) {
          D.each(function () {
            this.style[q.transition] = x[this] || null;
          });
        }
        if (typeof C === "function") {
          C.apply(D);
        }
        if (typeof H === "function") {
          H();
        }
      };
      if (t > 0 && f && k.transit.useTransitionEnd) {
        G = true;
        D.bind(f, F);
      } else {
        window.setTimeout(F, t);
      }
      D.each(function () {
        if (t > 0) {
          this.style[q.transition] = E;
        }
        k(this).css(z);
      });
    };
    var v = function (F) {
      this.offsetWidth;
      r(F);
    };
    m(D, w, v);
    return this;
  };
  function n(s, r) {
    if (!r) {
      k.cssNumber[s] = true;
    }
    k.transit.propertyMap[s] = q.transform;
    k.cssHooks[s] = {
      get: function (v) {
        var u = k(v).css("transit:transform");
        return u.get(s);
      },
      set: function (v, w) {
        var u = k(v).css("transit:transform");
        u.setFromString(s, w);
        k(v).css({ "transit:transform": u });
      },
    };
  }
  function c(r) {
    return r.replace(/([A-Z])/g, function (s) {
      return "-" + s.toLowerCase();
    });
  }
  function o(s, r) {
    if (typeof s === "string" && !s.match(/^[\-0-9\.]+$/)) {
      return s;
    } else {
      return "" + s + r;
    }
  }
  function l(s) {
    var r = s;
    if (k.fx.speeds[r]) {
      r = k.fx.speeds[r];
    }
    return o(r, "ms");
  }
  k.transit.getTransitionValue = g;
})(jQuery);

!(function () {
  "use strict";
  var e = 0,
    r = {};
  function i(t) {
    if (!t) throw new Error("No options passed to Waypoint constructor");
    if (!t.element)
      throw new Error("No element option passed to Waypoint constructor");
    if (!t.handler)
      throw new Error("No handler option passed to Waypoint constructor");
    (this.key = "waypoint-" + e),
      (this.options = i.Adapter.extend({}, i.defaults, t)),
      (this.element = this.options.element),
      (this.adapter = new i.Adapter(this.element)),
      (this.callback = t.handler),
      (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
      (this.enabled = this.options.enabled),
      (this.triggerPoint = null),
      (this.group = i.Group.findOrCreate({
        name: this.options.group,
        axis: this.axis,
      })),
      (this.context = i.Context.findOrCreateByElement(this.options.context)),
      i.offsetAliases[this.options.offset] &&
        (this.options.offset = i.offsetAliases[this.options.offset]),
      this.group.add(this),
      this.context.add(this),
      (r[this.key] = this),
      (e += 1);
  }
  (i.prototype.queueTrigger = function (t) {
    this.group.queueTrigger(this, t);
  }),
    (i.prototype.trigger = function (t) {
      this.enabled && this.callback && this.callback.apply(this, t);
    }),
    (i.prototype.destroy = function () {
      this.context.remove(this), this.group.remove(this), delete r[this.key];
    }),
    (i.prototype.disable = function () {
      return (this.enabled = !1), this;
    }),
    (i.prototype.enable = function () {
      return this.context.refresh(), (this.enabled = !0), this;
    }),
    (i.prototype.next = function () {
      return this.group.next(this);
    }),
    (i.prototype.previous = function () {
      return this.group.previous(this);
    }),
    (i.invokeAll = function (t) {
      var e = [],
        i;
      for (i in r) e.push(r[i]);
      for (var o = 0, n = e.length; o < n; o++) e[o][t]();
    }),
    (i.destroyAll = function () {
      i.invokeAll("destroy");
    }),
    (i.disableAll = function () {
      i.invokeAll("disable");
    }),
    (i.enableAll = function () {
      for (var t in (i.Context.refreshAll(), r)) r[t].enabled = !0;
      return this;
    }),
    (i.refreshAll = function () {
      i.Context.refreshAll();
    }),
    (i.viewportHeight = function () {
      return window.nectarDOMInfo && window.nectarDOMInfo.winH
        ? window.nectarDOMInfo.winH
        : window.innerHeight || document.documentElement.clientHeight;
    }),
    (i.viewportWidth = function () {
      return window.nectarDOMInfo && window.nectarDOMInfo.winW
        ? window.nectarDOMInfo.winW
        : document.documentElement.clientWidth;
    }),
    (i.adapters = []),
    (i.defaults = {
      context: window,
      continuous: !0,
      enabled: !0,
      group: "default",
      horizontal: !1,
      offset: 0,
    }),
    (i.offsetAliases = {
      "bottom-in-view": function () {
        return this.context.innerHeight() - this.adapter.outerHeight();
      },
      "right-in-view": function () {
        return this.context.innerWidth() - this.adapter.outerWidth();
      },
    }),
    (window.Waypoint = i);
})(),
  (function () {
    "use strict";
    function e(t) {
      window.setTimeout(t, 1e3 / 60);
    }
    var i = 0,
      o = {},
      u = window.Waypoint,
      t = window.onload;
    function n(t) {
      (this.element = t),
        (this.Adapter = u.Adapter),
        (this.adapter = new this.Adapter(t)),
        (this.key = "waypoint-context-" + i),
        (this.didScroll = !1),
        (this.didResize = !1),
        (this.oldScroll = {
          x: this.adapter.scrollLeft(),
          y: this.adapter.scrollTop(),
        }),
        (this.waypoints = { vertical: {}, horizontal: {} }),
        (t.waypointContextKey = this.key),
        (o[t.waypointContextKey] = this),
        (i += 1),
        u.windowContext ||
          ((u.windowContext = !0), (u.windowContext = new n(window))),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler();
    }
    (n.prototype.add = function (t) {
      var e = t.options.horizontal ? "horizontal" : "vertical";
      (this.waypoints[e][t.key] = t), this.refresh();
    }),
      (n.prototype.checkEmpty = function () {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
          e = this.Adapter.isEmptyObject(this.waypoints.vertical),
          i = this.element == this.element.window;
        t && e && !i && (this.adapter.off(".waypoints"), delete o[this.key]);
      }),
      (n.prototype.createThrottledResizeHandler = function () {
        var t = this;
        function e() {
          t.handleResize(), (t.didResize = !1);
        }
        this.adapter.on("resize.waypoints", function () {
          t.didResize || ((t.didResize = !0), u.requestAnimationFrame(e));
        });
      }),
      (n.prototype.createThrottledScrollHandler = function () {
        var t = this;
        function e() {
          t.handleScroll(), (t.didScroll = !1);
        }
        this.adapter.on("scroll.waypoints", function () {
          (t.didScroll && !u.isTouch) ||
            ((t.didScroll = !0), u.requestAnimationFrame(e));
        });
      }),
      (n.prototype.handleResize = function () {
        setTimeout(function () {
          u.Context.refreshAll();
        }, 150);
      }),
      (n.prototype.handleScroll = function () {
        var t = {},
          e = {
            horizontal: {
              newScroll: 0,
              oldScroll: 0,
              forward: "right",
              backward: "left",
            },
            vertical: {
              newScroll: window.nectarDOMInfo
                ? window.nectarDOMInfo.scrollTop
                : 0,
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
            },
          },
          i,
          o;
        for (i in e) {
          var n = e[i],
            r = n.newScroll > n.oldScroll ? n.forward : n.backward,
            s;
          for (s in this.waypoints[i]) {
            var a = this.waypoints[i][s],
              l,
              h;
            null !== a.triggerPoint &&
              ((l = n.oldScroll < a.triggerPoint),
              (h = n.newScroll >= a.triggerPoint),
              ((l && h) || (!l && !h)) &&
                (a.queueTrigger(r), (t[a.group.id] = a.group)));
          }
        }
        for (o in t) t[o].flushTriggers();
        this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll };
      }),
      (n.prototype.innerHeight = function () {
        return this.element == this.element.window
          ? u.viewportHeight()
          : this.adapter.innerHeight();
      }),
      (n.prototype.remove = function (t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty();
      }),
      (n.prototype.innerWidth = function () {
        return this.element == this.element.window
          ? u.viewportWidth()
          : this.adapter.innerWidth();
      }),
      (n.prototype.destroy = function () {
        var t = [],
          e;
        for (e in this.waypoints)
          for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; o < n; o++) t[o].destroy();
      }),
      (n.prototype.refresh = function () {
        var t,
          e = this.element == this.element.window,
          i = e ? void 0 : this.adapter.offset(),
          o = {},
          n;
        for (n in (this.handleScroll(),
        (t = {
          horizontal: {
            contextOffset: e ? 0 : i.left,
            contextScroll: e ? 0 : this.oldScroll.x,
            contextDimension: this.innerWidth(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left",
            offsetProp: "left",
          },
          vertical: {
            contextOffset: e ? 0 : i.top,
            contextScroll: e ? 0 : this.oldScroll.y,
            contextDimension: this.innerHeight(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up",
            offsetProp: "top",
          },
        }))) {
          var r = t[n],
            s;
          for (s in this.waypoints[n]) {
            var a,
              a,
              l,
              h,
              p = this.waypoints[n][s],
              l = p.options.offset,
              h = p.triggerPoint,
              c = 0,
              d = null == h;
            p.element !== p.element.window &&
              (c = p.adapter.offset()[r.offsetProp]),
              "function" == typeof l
                ? (l = l.apply(p))
                : "string" == typeof l &&
                  ((l = parseFloat(l)),
                  -1 < p.options.offset.indexOf("%") &&
                    (l = Math.ceil((r.contextDimension * l) / 100))),
              (a = r.contextScroll - r.contextOffset),
              (p.triggerPoint = Math.floor(c + a - l)),
              (a = h < r.oldScroll),
              (l = p.triggerPoint >= r.oldScroll),
              (h = !a && !l),
              !d && a && l
                ? (p.queueTrigger(r.backward), (o[p.group.id] = p.group))
                : ((!d && h) || (d && r.oldScroll >= p.triggerPoint)) &&
                  (p.queueTrigger(r.forward), (o[p.group.id] = p.group));
          }
        }
        return (
          u.requestAnimationFrame(function () {
            for (var t in o) o[t].flushTriggers();
          }),
          this
        );
      }),
      (n.findOrCreateByElement = function (t) {
        return n.findByElement(t) || new n(t);
      }),
      (n.refreshAll = function () {
        for (var t in o) o[t].refresh();
      }),
      (n.findByElement = function (t) {
        return o[t.waypointContextKey];
      }),
      (window.onload = function () {
        t && t(), n.refreshAll();
      }),
      (u.requestAnimationFrame = function (t) {
        (
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          e
        ).call(window, t);
      }),
      (u.Context = n);
  })(),
  (function () {
    "use strict";
    function s(t, e) {
      return t.triggerPoint - e.triggerPoint;
    }
    function a(t, e) {
      return e.triggerPoint - t.triggerPoint;
    }
    var e = { vertical: {}, horizontal: {} },
      i = window.Waypoint;
    function o(t) {
      (this.name = t.name),
        (this.axis = t.axis),
        (this.id = this.name + "-" + this.axis),
        (this.waypoints = []),
        this.clearTriggerQueues(),
        (e[this.axis][this.name] = this);
    }
    (o.prototype.add = function (t) {
      this.waypoints.push(t);
    }),
      (o.prototype.clearTriggerQueues = function () {
        this.triggerQueues = { up: [], down: [], left: [], right: [] };
      }),
      (o.prototype.flushTriggers = function () {
        for (var t in this.triggerQueues) {
          var e = this.triggerQueues[t],
            i;
          e.sort("up" === t || "left" === t ? a : s);
          for (var o = 0, n = e.length; o < n; o += 1) {
            var r = e[o];
            (!r.options.continuous && o !== e.length - 1) || r.trigger([t]);
          }
        }
        this.clearTriggerQueues();
      }),
      (o.prototype.next = function (t) {
        this.waypoints.sort(s);
        var t = i.Adapter.inArray(t, this.waypoints);
        return t === this.waypoints.length - 1 ? null : this.waypoints[t + 1];
      }),
      (o.prototype.previous = function (t) {
        this.waypoints.sort(s);
        var t = i.Adapter.inArray(t, this.waypoints);
        return t ? this.waypoints[t - 1] : null;
      }),
      (o.prototype.queueTrigger = function (t, e) {
        this.triggerQueues[e].push(t);
      }),
      (o.prototype.remove = function (t) {
        var t = i.Adapter.inArray(t, this.waypoints);
        -1 < t && this.waypoints.splice(t, 1);
      }),
      (o.prototype.first = function () {
        return this.waypoints[0];
      }),
      (o.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1];
      }),
      (o.findOrCreate = function (t) {
        return e[t.axis][t.name] || new o(t);
      }),
      (i.Group = o);
  })(),
  (function () {
    "use strict";
    var i = window.jQuery,
      t = window.Waypoint;
    function o(t) {
      this.$element = i(t);
    }
    i.each(
      [
        "innerHeight",
        "innerWidth",
        "off",
        "offset",
        "on",
        "outerHeight",
        "outerWidth",
        "scrollLeft",
        "scrollTop",
      ],
      function (t, e) {
        o.prototype[e] = function () {
          var t = Array.prototype.slice.call(arguments);
          return this.$element[e].apply(this.$element, t);
        };
      }
    ),
      i.each(["extend", "inArray", "isEmptyObject"], function (t, e) {
        o[e] = i[e];
      }),
      t.adapters.push({ name: "jquery", Adapter: o }),
      (t.Adapter = o);
  })(),
  (function () {
    "use strict";
    var n = window.Waypoint;
    function t(o) {
      return function () {
        var e = [],
          i = arguments[0];
        return (
          o.isFunction(arguments[0]) &&
            ((i = o.extend({}, arguments[1])).handler = arguments[0]),
          this.each(function () {
            var t = o.extend({}, i, { element: this });
            "string" == typeof t.context &&
              (t.context = o(this).closest(t.context)[0]),
              e.push(new n(t));
          }),
          e
        );
      };
    }
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)),
      window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto));
  })();
/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!(function (e, t) {
  "function" == typeof define && define.amd
    ? define("ev-emitter/ev-emitter", t)
    : "object" == typeof module && module.exports
    ? (module.exports = t())
    : (e.EvEmitter = t());
})("undefined" != typeof window ? window : this, function () {
  function e() {}
  var t = e.prototype;
  return (
    (t.on = function (e, t) {
      if (e && t) {
        var i = (this._events = this._events || {}),
          n = (i[e] = i[e] || []);
        return n.indexOf(t) == -1 && n.push(t), this;
      }
    }),
    (t.once = function (e, t) {
      if (e && t) {
        this.on(e, t);
        var i = (this._onceEvents = this._onceEvents || {}),
          n = (i[e] = i[e] || {});
        return (n[t] = !0), this;
      }
    }),
    (t.off = function (e, t) {
      var i = this._events && this._events[e];
      if (i && i.length) {
        var n = i.indexOf(t);
        return n != -1 && i.splice(n, 1), this;
      }
    }),
    (t.emitEvent = function (e, t) {
      var i = this._events && this._events[e];
      if (i && i.length) {
        (i = i.slice(0)), (t = t || []);
        for (
          var n = this._onceEvents && this._onceEvents[e], o = 0;
          o < i.length;
          o++
        ) {
          var r = i[o],
            s = n && n[r];
          s && (this.off(e, r), delete n[r]), r.apply(this, t);
        }
        return this;
      }
    }),
    (t.allOff = function () {
      delete this._events, delete this._onceEvents;
    }),
    e
  );
}),
  (function (e, t) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["ev-emitter/ev-emitter"], function (i) {
          return t(e, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = t(e, require("ev-emitter")))
      : (e.imagesLoaded = t(e, e.EvEmitter));
  })("undefined" != typeof window ? window : this, function (e, t) {
    function i(e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    }
    function n(e) {
      if (Array.isArray(e)) return e;
      var t = "object" == typeof e && "number" == typeof e.length;
      return t ? d.call(e) : [e];
    }
    function o(e, t, r) {
      if (!(this instanceof o)) return new o(e, t, r);
      var s = e;
      return (
        "string" == typeof e && (s = document.querySelectorAll(e)),
        s
          ? ((this.elements = n(s)),
            (this.options = i({}, this.options)),
            "function" == typeof t ? (r = t) : i(this.options, t),
            r && this.on("always", r),
            this.getImages(),
            h && (this.jqDeferred = new h.Deferred()),
            void setTimeout(this.check.bind(this)))
          : void a.error("Bad element for imagesLoaded " + (s || e))
      );
    }
    function r(e) {
      this.img = e;
    }
    function s(e, t) {
      (this.url = e), (this.element = t), (this.img = new Image());
    }
    var h = e.jQuery,
      a = e.console,
      d = Array.prototype.slice;
    (o.prototype = Object.create(t.prototype)),
      (o.prototype.options = {}),
      (o.prototype.getImages = function () {
        (this.images = []), this.elements.forEach(this.addElementImages, this);
      }),
      (o.prototype.addElementImages = function (e) {
        "IMG" == e.nodeName && this.addImage(e),
          this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && u[t]) {
          for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
            var o = i[n];
            this.addImage(o);
          }
          if ("string" == typeof this.options.background) {
            var r = e.querySelectorAll(this.options.background);
            for (n = 0; n < r.length; n++) {
              var s = r[n];
              this.addElementBackgroundImages(s);
            }
          }
        }
      });
    var u = { 1: !0, 9: !0, 11: !0 };
    return (
      (o.prototype.addElementBackgroundImages = function (e) {
        var t = getComputedStyle(e);
        if (t)
          for (
            var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage);
            null !== n;

          ) {
            var o = n && n[2];
            o && this.addBackground(o, e), (n = i.exec(t.backgroundImage));
          }
      }),
      (o.prototype.addImage = function (e) {
        var t = new r(e);
        this.images.push(t);
      }),
      (o.prototype.addBackground = function (e, t) {
        var i = new s(e, t);
        this.images.push(i);
      }),
      (o.prototype.check = function () {
        function e(e, i, n) {
          setTimeout(function () {
            t.progress(e, i, n);
          });
        }
        var t = this;
        return (
          (this.progressedCount = 0),
          (this.hasAnyBroken = !1),
          this.images.length
            ? void this.images.forEach(function (t) {
                t.once("progress", e), t.check();
              })
            : void this.complete()
        );
      }),
      (o.prototype.progress = function (e, t, i) {
        this.progressedCount++,
          (this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded),
          this.emitEvent("progress", [this, e, t]),
          this.jqDeferred &&
            this.jqDeferred.notify &&
            this.jqDeferred.notify(this, e),
          this.progressedCount == this.images.length && this.complete(),
          this.options.debug && a && a.log("progress: " + i, e, t);
      }),
      (o.prototype.complete = function () {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (
          ((this.isComplete = !0),
          this.emitEvent(e, [this]),
          this.emitEvent("always", [this]),
          this.jqDeferred)
        ) {
          var t = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[t](this);
        }
      }),
      (r.prototype = Object.create(t.prototype)),
      (r.prototype.check = function () {
        var e = this.getIsImageComplete();
        return e
          ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
          : ((this.proxyImage = new Image()),
            this.proxyImage.addEventListener("load", this),
            this.proxyImage.addEventListener("error", this),
            this.img.addEventListener("load", this),
            this.img.addEventListener("error", this),
            void (this.proxyImage.src = this.img.src));
      }),
      (r.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth;
      }),
      (r.prototype.confirm = function (e, t) {
        (this.isLoaded = e), this.emitEvent("progress", [this, this.img, t]);
      }),
      (r.prototype.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e);
      }),
      (r.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents();
      }),
      (r.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents();
      }),
      (r.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this),
          this.proxyImage.removeEventListener("error", this),
          this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (s.prototype = Object.create(r.prototype)),
      (s.prototype.check = function () {
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this),
          (this.img.src = this.url);
        var e = this.getIsImageComplete();
        e &&
          (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
          this.unbindEvents());
      }),
      (s.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (s.prototype.confirm = function (e, t) {
        (this.isLoaded = e),
          this.emitEvent("progress", [this, this.element, t]);
      }),
      (o.makeJQueryPlugin = function (t) {
        (t = t || e.jQuery),
          t &&
            ((h = t),
            (h.fn.imagesLoaded = function (e, t) {
              var i = new o(this, e, t);
              return i.jqDeferred.promise(h(this));
            }));
      }),
      o.makeJQueryPlugin(),
      o
    );
  });
/*!
 * hoverIntent v1.9.0 // 2017.09.01 // jQuery v1.7.0+
 * http://briancherne.github.io/jquery-hoverIntent/
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007-2017 Brian Cherne
 */
!(function (factory) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], factory)
    : jQuery && !jQuery.fn.hoverIntent && factory(jQuery);
})(function ($) {
  "use strict";
  var cX,
    cY,
    _cfg = { interval: 100, sensitivity: 6, timeout: 0 },
    INSTANCE_COUNT = 0,
    track = function (ev) {
      (cX = ev.pageX), (cY = ev.pageY);
    },
    compare = function (ev, $el, s, cfg) {
      if (
        Math.sqrt((s.pX - cX) * (s.pX - cX) + (s.pY - cY) * (s.pY - cY)) <
        cfg.sensitivity
      )
        return (
          $el.off(s.event, track),
          delete s.timeoutId,
          (s.isActive = !0),
          (ev.pageX = cX),
          (ev.pageY = cY),
          delete s.pX,
          delete s.pY,
          cfg.over.apply($el[0], [ev])
        );
      (s.pX = cX),
        (s.pY = cY),
        (s.timeoutId = setTimeout(function () {
          compare(ev, $el, s, cfg);
        }, cfg.interval));
    },
    delay = function (ev, $el, s, out) {
      return delete $el.data("hoverIntent")[s.id], out.apply($el[0], [ev]);
    };
  $.fn.hoverIntent = function (handlerIn, handlerOut, selector) {
    var instanceId = INSTANCE_COUNT++,
      cfg = $.extend({}, _cfg);
    $.isPlainObject(handlerIn)
      ? ((cfg = $.extend(cfg, handlerIn)),
        $.isFunction(cfg.out) || (cfg.out = cfg.over))
      : (cfg = $.isFunction(handlerOut)
          ? $.extend(cfg, {
              over: handlerIn,
              out: handlerOut,
              selector: selector,
            })
          : $.extend(cfg, {
              over: handlerIn,
              out: handlerIn,
              selector: handlerOut,
            }));
    var handleHover = function (e) {
      var ev = $.extend({}, e),
        $el = $(this),
        hoverIntentData = $el.data("hoverIntent");
      hoverIntentData || $el.data("hoverIntent", (hoverIntentData = {}));
      var state = hoverIntentData[instanceId];
      state || (hoverIntentData[instanceId] = state = { id: instanceId }),
        state.timeoutId && (state.timeoutId = clearTimeout(state.timeoutId));
      var mousemove = (state.event =
        "mousemove.hoverIntent.hoverIntent" + instanceId);
      if ("mouseenter" === e.type) {
        if (state.isActive) return;
        (state.pX = ev.pageX),
          (state.pY = ev.pageY),
          $el.off(mousemove, track).on(mousemove, track),
          (state.timeoutId = setTimeout(function () {
            compare(ev, $el, state, cfg);
          }, cfg.interval));
      } else {
        if (!state.isActive) return;
        $el.off(mousemove, track),
          (state.timeoutId = setTimeout(function () {
            delay(ev, $el, state, cfg.out);
          }, cfg.timeout));
      }
    };
    return this.on(
      {
        "mouseenter.hoverIntent": handleHover,
        "mouseleave.hoverIntent": handleHover,
      },
      cfg.selector
    );
  };
});

!(function (c, s, f, t) {
  "use strict";
  var e, n, e, i, a, o, h, r, l, u, d, p;
  function g(t, e) {
    var n,
      o,
      i,
      s = [],
      a = 0;
    (t && t.isDefaultPrevented()) ||
      (t.preventDefault(),
      (e = e || {}),
      (n =
        (e = t && t.data ? d(t.data.options, e) : e).$target ||
        f(t.currentTarget).trigger("blur")),
      ((i = f.fancybox.getInstance()) && i.$trigger && i.$trigger.is(n)) ||
        ((s = e.selector
          ? f(e.selector)
          : (o = n.attr("data-fancybox") || "")
          ? (s = t.data ? t.data.items : []).length
            ? s.filter('[data-fancybox="' + o + '"]')
            : f('[data-fancybox="' + o + '"]')
          : [n]),
        (a = f(s).index(n)) < 0 && (a = 0),
        ((i = f.fancybox.open(s, e, a)).$trigger = n)));
  }
  (c.console = c.console || { info: function (t) {} }),
    f &&
      (f.fn.fancybox
        ? console.info("fancyBox already initialized")
        : ((e = {
            closeExisting: !1,
            loop: !1,
            gutter: 50,
            keyboard: !0,
            preventCaptionOverlap: !0,
            arrows: !0,
            infobar: !0,
            smallBtn: "auto",
            toolbar: "auto",
            buttons: ["zoom", "slideShow", "thumbs", "close"],
            idleTime: 3,
            protect: !1,
            modal: !1,
            image: { preload: !1 },
            ajax: { settings: { data: { fancybox: !0 } } },
            iframe: {
              tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
              preload: !0,
              css: {},
              attr: { scrolling: "auto" },
            },
            video: {
              tpl: '<video class="fancybox-video" playsinline controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
              format: "",
              autoStart: !0,
            },
            defaultType: "image",
            animationEffect: "zoom",
            animationDuration: 366,
            zoomOpacity: "auto",
            transitionEffect: "fade",
            transitionDuration: 366,
            slideClass: "",
            baseClass: "",
            baseTpl:
              '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
            spinnerTpl: '<div class="fancybox-loading"></div>',
            errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
            btnTpl: {
              download:
                '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
              zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
              close:
                '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
              arrowLeft:
                '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
              arrowRight:
                '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
              smallBtn:
                '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>',
            },
            parentEl: "body",
            hideScrollbar: !0,
            autoFocus: !0,
            backFocus: !0,
            trapFocus: !0,
            fullScreen: { autoStart: !1 },
            touch: { vertical: !0, momentum: !0 },
            hash: null,
            media: {},
            slideShow: { autoStart: !1, speed: 3e3 },
            thumbs: {
              autoStart: !1,
              hideOnClose: !0,
              parentEl: ".fancybox-container",
              axis: "y",
            },
            wheel: "auto",
            onInit: f.noop,
            beforeLoad: f.noop,
            afterLoad: f.noop,
            beforeShow: f.noop,
            afterShow: f.noop,
            beforeClose: f.noop,
            afterClose: f.noop,
            onActivate: f.noop,
            onDeactivate: f.noop,
            clickContent: function (t, e) {
              return "image" === t.type && "zoom";
            },
            clickSlide: "close",
            clickOutside: "close",
            dblclickContent: !1,
            dblclickSlide: !1,
            dblclickOutside: !1,
            mobile: {
              preventCaptionOverlap: !1,
              idleTime: !1,
              clickContent: function (t, e) {
                return "image" === t.type && "toggleControls";
              },
              clickSlide: function (t, e) {
                return "image" === t.type ? "toggleControls" : "close";
              },
              dblclickContent: function (t, e) {
                return "image" === t.type && "zoom";
              },
              dblclickSlide: function (t, e) {
                return "image" === t.type && "zoom";
              },
            },
            lang: "en",
            i18n: {
              en: {
                CLOSE: "Close",
                NEXT: "Next",
                PREV: "Previous",
                ERROR:
                  "The requested content cannot be loaded. <br/> Please try again later.",
                PLAY_START: "Start slideshow",
                PLAY_STOP: "Pause slideshow",
                FULL_SCREEN: "Full screen",
                THUMBS: "Thumbnails",
                DOWNLOAD: "Download",
                SHARE: "Share",
                ZOOM: "Zoom",
              },
              de: {
                CLOSE: "Schlie&szlig;en",
                NEXT: "Weiter",
                PREV: "Zur&uuml;ck",
                ERROR:
                  "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
                PLAY_START: "Diaschau starten",
                PLAY_STOP: "Diaschau beenden",
                FULL_SCREEN: "Vollbild",
                THUMBS: "Vorschaubilder",
                DOWNLOAD: "Herunterladen",
                SHARE: "Teilen",
                ZOOM: "Vergr&ouml;&szlig;ern",
              },
            },
          }),
          (i = f(c)),
          (a = f(s)),
          (o = 0),
          (h =
            c.requestAnimationFrame ||
            c.webkitRequestAnimationFrame ||
            c.mozRequestAnimationFrame ||
            c.oRequestAnimationFrame ||
            function (t) {
              return c.setTimeout(t, 1e3 / 60);
            }),
          (r =
            c.cancelAnimationFrame ||
            c.webkitCancelAnimationFrame ||
            c.mozCancelAnimationFrame ||
            c.oCancelAnimationFrame ||
            function (t) {
              c.clearTimeout(t);
            }),
          (l = (function () {
            var t,
              e = s.createElement("fakeelement"),
              n = {
                transition: "transitionend",
                OTransition: "oTransitionEnd",
                MozTransition: "transitionend",
                WebkitTransition: "webkitTransitionEnd",
              };
            for (t in n) if (void 0 !== e.style[t]) return n[t];
            return "transitionend";
          })()),
          (u = function (t) {
            return t && t.length && t[0].offsetHeight;
          }),
          (d = function (t, e) {
            var n = f.extend(!0, {}, t, e);
            return (
              f.each(e, function (t, e) {
                f.isArray(e) && (n[t] = e);
              }),
              n
            );
          }),
          (p = function (t, e, n) {
            (this.opts = d({ index: n }, f.fancybox.defaults)),
              f.isPlainObject(e) && (this.opts = d(this.opts, e)),
              f.fancybox.isMobile &&
                (this.opts = d(this.opts, this.opts.mobile)),
              (this.id = this.opts.id || ++o),
              (this.currIndex = parseInt(this.opts.index, 10) || 0),
              (this.prevIndex = null),
              (this.prevPos = null),
              (this.currPos = 0),
              (this.firstRun = !0),
              (this.group = []),
              (this.slides = {}),
              this.addContent(t),
              this.group.length && this.init();
          }),
          f.extend(p.prototype, {
            init: function () {
              var e,
                n,
                o = this,
                i = o.group[o.currIndex].opts;
              i.closeExisting && f.fancybox.close(!0),
                f("body").addClass("fancybox-active"),
                !f.fancybox.getInstance() &&
                  !1 !== i.hideScrollbar &&
                  !f.fancybox.isMobile &&
                  s.body.scrollHeight > c.innerHeight &&
                  (f("head").append(
                    '<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' +
                      (c.innerWidth - s.documentElement.clientWidth) +
                      "px;}</style>"
                  ),
                  f("body").addClass("compensate-for-scrollbar")),
                (n = ""),
                f.each(i.buttons, function (t, e) {
                  n += i.btnTpl[e] || "";
                }),
                (e = f(
                  o.translate(
                    o,
                    i.baseTpl
                      .replace("{{buttons}}", n)
                      .replace(
                        "{{arrows}}",
                        i.btnTpl.arrowLeft + i.btnTpl.arrowRight
                      )
                  )
                )
                  .attr("id", "fancybox-container-" + o.id)
                  .addClass(i.baseClass)
                  .data("FancyBox", o)
                  .appendTo(i.parentEl)),
                (o.$refs = { container: e }),
                [
                  "bg",
                  "inner",
                  "infobar",
                  "toolbar",
                  "stage",
                  "caption",
                  "navigation",
                ].forEach(function (t) {
                  o.$refs[t] = e.find(".fancybox-" + t);
                }),
                o.trigger("onInit"),
                o.activate(),
                o.jumpTo(o.currIndex);
            },
            translate: function (t, e) {
              var n = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
              return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
                return void 0 === n[e] ? t : n[e];
              });
            },
            addContent: function (t) {
              var t,
                r = this,
                t = f.makeArray(t);
              f.each(t, function (t, e) {
                var n,
                  o,
                  i,
                  n,
                  s,
                  a = {},
                  i = {};
                f.isPlainObject(e)
                  ? (i = (a = e).opts || e)
                  : "object" === f.type(e) && f(e).length
                  ? ((i = (n = f(e)).data() || {}),
                    ((i = f.extend(!0, {}, i, i.options)).$orig = n),
                    (a.src = r.opts.src || i.src || n.attr("href")),
                    a.type || a.src || ((a.type = "inline"), (a.src = e)))
                  : (a = { type: "html", src: e + "" }),
                  (a.opts = f.extend(!0, {}, r.opts, i)),
                  f.isArray(i.buttons) && (a.opts.buttons = i.buttons),
                  f.fancybox.isMobile &&
                    a.opts.mobile &&
                    (a.opts = d(a.opts, a.opts.mobile)),
                  (o = a.type || a.opts.type),
                  (n = a.src || ""),
                  !o &&
                    n &&
                    ((i = n.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))
                      ? ((o = "video"),
                        a.opts.video.format ||
                          (a.opts.video.format =
                            "video/" + ("ogv" === i[1] ? "ogg" : i[1])))
                      : n.match(
                          /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i
                        )
                      ? (o = "image")
                      : n.match(/\.(pdf)((\?|#).*)?$/i)
                      ? (a = f.extend(!0, a, {
                          contentType: "pdf",
                          opts: { iframe: { preload: !(o = "iframe") } },
                        }))
                      : "#" === n.charAt(0) && (o = "inline")),
                  o ? (a.type = o) : r.trigger("objectNeedsType", a),
                  a.contentType ||
                    (a.contentType =
                      -1 < f.inArray(a.type, ["html", "inline", "ajax"])
                        ? "html"
                        : a.type),
                  (a.index = r.group.length),
                  "auto" == a.opts.smallBtn &&
                    (a.opts.smallBtn =
                      -1 < f.inArray(a.type, ["html", "inline", "ajax"])),
                  "auto" === a.opts.toolbar &&
                    (a.opts.toolbar = !a.opts.smallBtn),
                  (a.$thumb = a.opts.$thumb || null),
                  a.opts.$trigger &&
                    a.index === r.opts.index &&
                    ((a.$thumb = a.opts.$trigger.find("img:first")),
                    a.$thumb.length && (a.opts.$orig = a.opts.$trigger)),
                  (a.$thumb && a.$thumb.length) ||
                    !a.opts.$orig ||
                    (a.$thumb = a.opts.$orig.find("img:first")),
                  a.$thumb && !a.$thumb.length && (a.$thumb = null),
                  (a.thumb =
                    a.opts.thumb || (a.$thumb ? a.$thumb[0].src : null)),
                  "function" === f.type(a.opts.caption) &&
                    (a.opts.caption = a.opts.caption.apply(e, [r, a])),
                  "function" === f.type(r.opts.caption) &&
                    (a.opts.caption = r.opts.caption.apply(e, [r, a])),
                  a.opts.caption instanceof f ||
                    (a.opts.caption =
                      void 0 === a.opts.caption ? "" : a.opts.caption + ""),
                  "ajax" === a.type &&
                    1 < (s = n.split(/\s+/, 2)).length &&
                    ((a.src = s.shift()), (a.opts.filter = s.shift())),
                  a.opts.modal &&
                    (a.opts = f.extend(!0, a.opts, {
                      trapFocus: !0,
                      infobar: 0,
                      toolbar: 0,
                      smallBtn: 0,
                      keyboard: 0,
                      slideShow: 0,
                      fullScreen: 0,
                      thumbs: 0,
                      touch: 0,
                      clickContent: !1,
                      clickSlide: !1,
                      clickOutside: !1,
                      dblclickContent: !1,
                      dblclickSlide: !1,
                      dblclickOutside: !1,
                    })),
                  r.group.push(a);
              }),
                Object.keys(r.slides).length &&
                  (r.updateControls(),
                  (t = r.Thumbs) && t.isActive && (t.create(), t.focus()));
            },
            addEvents: function () {
              var o = this;
              o.removeEvents(),
                o.$refs.container
                  .on("click.fb-close", "[data-fancybox-close]", function (t) {
                    t.stopPropagation(), t.preventDefault(), o.close(t);
                  })
                  .on(
                    "touchstart.fb-prev click.fb-prev",
                    "[data-fancybox-prev]",
                    function (t) {
                      t.stopPropagation(), t.preventDefault(), o.previous();
                    }
                  )
                  .on(
                    "touchstart.fb-next click.fb-next",
                    "[data-fancybox-next]",
                    function (t) {
                      t.stopPropagation(), t.preventDefault(), o.next();
                    }
                  )
                  .on("click.fb", "[data-fancybox-zoom]", function (t) {
                    o[o.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
                  }),
                i.on("orientationchange.fb resize.fb", function (t) {
                  t && t.originalEvent && "resize" === t.originalEvent.type
                    ? (o.requestId && r(o.requestId),
                      (o.requestId = h(function () {
                        o.update(t);
                      })))
                    : (o.current &&
                        "iframe" === o.current.type &&
                        o.$refs.stage.hide(),
                      setTimeout(
                        function () {
                          o.$refs.stage.show(), o.update(t);
                        },
                        f.fancybox.isMobile ? 600 : 250
                      ));
                }),
                a.on("keydown.fb", function (t) {
                  var e = (f.fancybox ? f.fancybox.getInstance() : null)
                      .current,
                    n = t.keyCode || t.which;
                  if (9 != n) {
                    if (
                      !(
                        !e.opts.keyboard ||
                        t.ctrlKey ||
                        t.altKey ||
                        t.shiftKey ||
                        f(t.target).is("input,textarea,video,audio,select")
                      )
                    )
                      return 8 === n || 27 === n
                        ? (t.preventDefault(), void o.close(t))
                        : 37 === n || 38 === n
                        ? (t.preventDefault(), void o.previous())
                        : 39 === n || 40 === n
                        ? (t.preventDefault(), void o.next())
                        : void o.trigger("afterKeydown", t, n);
                  } else e.opts.trapFocus && o.focus(t);
                }),
                o.group[o.currIndex].opts.idleTime &&
                  ((o.idleSecondsCounter = 0),
                  a.on(
                    "mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",
                    function (t) {
                      (o.idleSecondsCounter = 0),
                        o.isIdle && o.showControls(),
                        (o.isIdle = !1);
                    }
                  ),
                  (o.idleInterval = c.setInterval(function () {
                    o.idleSecondsCounter++,
                      o.idleSecondsCounter >=
                        o.group[o.currIndex].opts.idleTime &&
                        !o.isDragging &&
                        ((o.isIdle = !0),
                        (o.idleSecondsCounter = 0),
                        o.hideControls());
                  }, 1e3)));
            },
            removeEvents: function () {
              i.off("orientationchange.fb resize.fb"),
                a.off("keydown.fb .fb-idle"),
                this.$refs.container.off(".fb-close .fb-prev .fb-next"),
                this.idleInterval &&
                  (c.clearInterval(this.idleInterval),
                  (this.idleInterval = null));
            },
            previous: function (t) {
              return this.jumpTo(this.currPos - 1, t);
            },
            next: function (t) {
              return this.jumpTo(this.currPos + 1, t);
            },
            jumpTo: function (t, o) {
              var e,
                t,
                n,
                i,
                s,
                a,
                r,
                c,
                l,
                h = this,
                d = h.group.length;
              if (
                !(h.isDragging || h.isClosing || (h.isAnimating && h.firstRun))
              )
                return (
                  (t = parseInt(t, 10)),
                  !(!(n = (h.current || h).opts.loop) && (t < 0 || d <= t)) &&
                    ((e = h.firstRun = !Object.keys(h.slides).length),
                    (s = h.current),
                    (h.prevIndex = h.currIndex),
                    (h.prevPos = h.currPos),
                    (i = h.createSlide(t)),
                    1 < d &&
                      ((n || i.index < d - 1) && h.createSlide(t + 1),
                      (n || 0 < i.index) && h.createSlide(t - 1)),
                    (h.current = i),
                    (h.currIndex = i.index),
                    (h.currPos = i.pos),
                    h.trigger("beforeShow", e),
                    h.updateControls(),
                    (i.forcedDuration = void 0),
                    f.isNumeric(o)
                      ? (i.forcedDuration = o)
                      : (o =
                          i.opts[
                            e ? "animationDuration" : "transitionDuration"
                          ]),
                    (o = parseInt(o, 10)),
                    (t = h.isMoved(i)),
                    i.$slide.addClass("fancybox-slide--current"),
                    e
                      ? (i.opts.animationEffect &&
                          o &&
                          h.$refs.container.css(
                            "transition-duration",
                            o + "ms"
                          ),
                        h.$refs.container
                          .addClass("fancybox-is-open")
                          .trigger("focus"),
                        h.loadSlide(i))
                      : ((a = f.fancybox.getTranslate(s.$slide)),
                        (r = f.fancybox.getTranslate(h.$refs.stage)),
                        f.each(h.slides, function (t, e) {
                          f.fancybox.stop(e.$slide, !0);
                        }),
                        s.pos !== i.pos && (s.isComplete = !1),
                        s.$slide.removeClass(
                          "fancybox-slide--complete fancybox-slide--current"
                        ),
                        t
                          ? ((l =
                              a.left -
                              (s.pos * a.width + s.pos * s.opts.gutter)),
                            f.each(h.slides, function (t, e) {
                              e.$slide
                                .removeClass("fancybox-animated")
                                .removeClass(function (t, e) {
                                  return (
                                    e.match(/(^|\s)fancybox-fx-\S+/g) || []
                                  ).join(" ");
                                });
                              var n = e.pos * a.width + e.pos * e.opts.gutter;
                              f.fancybox.setTranslate(e.$slide, {
                                top: 0,
                                left: n - r.left + l,
                              }),
                                e.pos !== i.pos &&
                                  e.$slide.addClass(
                                    "fancybox-slide--" +
                                      (e.pos > i.pos ? "next" : "previous")
                                  ),
                                u(e.$slide),
                                f.fancybox.animate(
                                  e.$slide,
                                  {
                                    top: 0,
                                    left:
                                      (e.pos - i.pos) * a.width +
                                      (e.pos - i.pos) * e.opts.gutter,
                                  },
                                  o,
                                  function () {
                                    e.$slide
                                      .css({ transform: "", opacity: "" })
                                      .removeClass(
                                        "fancybox-slide--next fancybox-slide--previous"
                                      ),
                                      e.pos === h.currPos && h.complete();
                                  }
                                );
                            }))
                          : o &&
                            i.opts.transitionEffect &&
                            ((c =
                              "fancybox-animated fancybox-fx-" +
                              i.opts.transitionEffect),
                            s.$slide.addClass(
                              "fancybox-slide--" +
                                (s.pos > i.pos ? "next" : "previous")
                            ),
                            f.fancybox.animate(
                              s.$slide,
                              c,
                              o,
                              function () {
                                s.$slide
                                  .removeClass(c)
                                  .removeClass(
                                    "fancybox-slide--next fancybox-slide--previous"
                                  );
                              },
                              !1
                            )),
                        i.isLoaded ? h.revealContent(i) : h.loadSlide(i)),
                    void h.preload("image"))
                );
            },
            createSlide: function (t) {
              var e,
                n,
                n = (n = t % this.group.length) < 0 ? this.group.length + n : n;
              return (
                !this.slides[t] &&
                  this.group[n] &&
                  ((e = f('<div class="fancybox-slide"></div>').appendTo(
                    this.$refs.stage
                  )),
                  (this.slides[t] = f.extend(!0, {}, this.group[n], {
                    pos: t,
                    $slide: e,
                    isLoaded: !1,
                  })),
                  this.updateSlide(this.slides[t])),
                this.slides[t]
              );
            },
            scaleToActual: function (t, e, n) {
              var o,
                i,
                s,
                a,
                r,
                c = this,
                s = c.current,
                l = s.$content,
                h = f.fancybox.getTranslate(s.$slide).width,
                d = f.fancybox.getTranslate(s.$slide).height,
                u = s.width,
                p = s.height;
              c.isAnimating ||
                c.isMoved() ||
                !l ||
                "image" != s.type ||
                !s.isLoaded ||
                s.hasError ||
                ((c.isAnimating = !0),
                f.fancybox.stop(l),
                (t = void 0 === t ? 0.5 * h : t),
                (e = void 0 === e ? 0.5 * d : e),
                ((o = f.fancybox.getTranslate(l)).top -=
                  f.fancybox.getTranslate(s.$slide).top),
                (o.left -= f.fancybox.getTranslate(s.$slide).left),
                (a = u / o.width),
                (r = p / o.height),
                (i = 0.5 * h - 0.5 * u),
                (s = 0.5 * d - 0.5 * p),
                h < u &&
                  (i = 0 < (i = o.left * a - (t * a - t)) ? 0 : i) < h - u &&
                  (i = h - u),
                d < p &&
                  (s = 0 < (s = o.top * r - (e * r - e)) ? 0 : s) < d - p &&
                  (s = d - p),
                c.updateCursor(u, p),
                f.fancybox.animate(
                  l,
                  { top: s, left: i, scaleX: a, scaleY: r },
                  n || 366,
                  function () {
                    c.isAnimating = !1;
                  }
                ),
                c.SlideShow && c.SlideShow.isActive && c.SlideShow.stop());
            },
            scaleToFit: function (t) {
              var e,
                n = this,
                e = n.current,
                o = e.$content;
              n.isAnimating ||
                n.isMoved() ||
                !o ||
                "image" != e.type ||
                !e.isLoaded ||
                e.hasError ||
                ((n.isAnimating = !0),
                f.fancybox.stop(o),
                (e = n.getFitPos(e)),
                n.updateCursor(e.width, e.height),
                f.fancybox.animate(
                  o,
                  {
                    top: e.top,
                    left: e.left,
                    scaleX: e.width / o.width(),
                    scaleY: e.height / o.height(),
                  },
                  t || 366,
                  function () {
                    n.isAnimating = !1;
                  }
                ));
            },
            getFitPos: function (t) {
              var e,
                n,
                o,
                t,
                o = t.$content,
                i = t.$slide,
                s = t.width || t.opts.width,
                a = t.height || t.opts.height,
                r = {};
              return (
                !!(t.isLoaded && o && o.length) &&
                ((e = f.fancybox.getTranslate(this.$refs.stage).width),
                (n = f.fancybox.getTranslate(this.$refs.stage).height),
                (e -=
                  parseFloat(i.css("paddingLeft")) +
                  parseFloat(i.css("paddingRight")) +
                  parseFloat(o.css("marginLeft")) +
                  parseFloat(o.css("marginRight"))),
                (n -=
                  parseFloat(i.css("paddingTop")) +
                  parseFloat(i.css("paddingBottom")) +
                  parseFloat(o.css("marginTop")) +
                  parseFloat(o.css("marginBottom"))),
                (s && a) || ((s = e), (a = n)),
                (s *= o = Math.min(1, e / s, n / a)) > e - 0.5 && (s = e),
                (a *= o) > n - 0.5 && (a = n),
                "image" === t.type
                  ? ((r.top =
                      Math.floor(0.5 * (n - a)) +
                      parseFloat(i.css("paddingTop"))),
                    (r.left =
                      Math.floor(0.5 * (e - s)) +
                      parseFloat(i.css("paddingLeft"))))
                  : "video" === t.contentType &&
                    (a >
                    s /
                      (t =
                        t.opts.width && t.opts.height
                          ? s / a
                          : t.opts.ratio || 16 / 9)
                      ? (a = s / t)
                      : a * t < s && (s = a * t)),
                (r.width = s),
                (r.height = a),
                r)
              );
            },
            update: function (n) {
              var o = this;
              f.each(o.slides, function (t, e) {
                o.updateSlide(e, n);
              });
            },
            updateSlide: function (t, e) {
              var n = t && t.$content,
                o = t.width || t.opts.width,
                i = t.height || t.opts.height,
                s = t.$slide;
              this.adjustCaption(t),
                n &&
                  (o || i || "video" === t.contentType) &&
                  !t.hasError &&
                  (f.fancybox.stop(n),
                  f.fancybox.setTranslate(n, this.getFitPos(t)),
                  t.pos === this.currPos &&
                    ((this.isAnimating = !1), this.updateCursor())),
                this.adjustLayout(t),
                s.length &&
                  (s.trigger("refresh"),
                  t.pos === this.currPos &&
                    this.$refs.toolbar
                      .add(
                        this.$refs.navigation.find(
                          ".fancybox-button--arrow_right"
                        )
                      )
                      .toggleClass(
                        "compensate-for-scrollbar",
                        s.get(0).scrollHeight > s.get(0).clientHeight
                      )),
                this.trigger("onUpdate", t, e);
            },
            centerSlide: function (t) {
              var e = this,
                n = e.current,
                o = n.$slide;
              !e.isClosing &&
                n &&
                (o.siblings().css({ transform: "", opacity: "" }),
                o
                  .parent()
                  .children()
                  .removeClass("fancybox-slide--previous fancybox-slide--next"),
                f.fancybox.animate(
                  o,
                  { top: 0, left: 0, opacity: 1 },
                  void 0 === t ? 0 : t,
                  function () {
                    o.css({ transform: "", opacity: "" }),
                      n.isComplete || e.complete();
                  },
                  !1
                ));
            },
            isMoved: function (t) {
              var t,
                e,
                n = t || this.current;
              return (
                !!n &&
                ((e = f.fancybox.getTranslate(this.$refs.stage)),
                (t = f.fancybox.getTranslate(n.$slide)),
                !n.$slide.hasClass("fancybox-animated") &&
                  (0.5 < Math.abs(t.top - e.top) ||
                    0.5 < Math.abs(t.left - e.left)))
              );
            },
            updateCursor: function (t, e) {
              var t,
                e,
                n = this.current,
                o = this.$refs.container;
              n &&
                !this.isClosing &&
                this.Guestures &&
                (o.removeClass(
                  "fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"
                ),
                (e = !!(t = this.canPan(t, e)) || this.isZoomable()),
                o.toggleClass("fancybox-is-zoomable", e),
                f("[data-fancybox-zoom]").prop("disabled", !e),
                t
                  ? o.addClass("fancybox-can-pan")
                  : e &&
                    ("zoom" === n.opts.clickContent ||
                      (f.isFunction(n.opts.clickContent) &&
                        "zoom" == n.opts.clickContent(n)))
                  ? o.addClass("fancybox-can-zoomIn")
                  : n.opts.touch &&
                    (n.opts.touch.vertical || 1 < this.group.length) &&
                    "video" !== n.contentType &&
                    o.addClass("fancybox-can-swipe"));
            },
            isZoomable: function () {
              var t,
                e = this.current;
              if (e && !this.isClosing && "image" === e.type && !e.hasError) {
                if (!e.isLoaded) return !0;
                if (
                  (t = this.getFitPos(e)) &&
                  (e.width > t.width || e.height > t.height)
                )
                  return !0;
              }
              return !1;
            },
            isScaledDown: function (t, e) {
              var n = !1,
                o = this.current,
                i = o.$content;
              return (
                void 0 !== t && void 0 !== e
                  ? (n = t < o.width && e < o.height)
                  : i &&
                    (n =
                      (n = f.fancybox.getTranslate(i)).width < o.width &&
                      n.height < o.height),
                n
              );
            },
            canPan: function (t, e) {
              var n = this.current,
                o = null,
                i = !1;
              return (
                "image" === n.type &&
                  (n.isComplete || (t && e)) &&
                  !n.hasError &&
                  ((i = this.getFitPos(n)),
                  void 0 !== t && void 0 !== e
                    ? (o = { width: t, height: e })
                    : n.isComplete && (o = f.fancybox.getTranslate(n.$content)),
                  o &&
                    i &&
                    (i =
                      1.5 < Math.abs(o.width - i.width) ||
                      1.5 < Math.abs(o.height - i.height))),
                i
              );
            },
            loadSlide: function (n) {
              var t,
                e,
                o,
                i = this;
              if (!n.isLoading && !n.isLoaded) {
                if (!(n.isLoading = !0) === i.trigger("beforeLoad", n))
                  return (n.isLoading = !1);
                switch (
                  ((t = n.type),
                  (e = n.$slide)
                    .off("refresh")
                    .trigger("onReset")
                    .addClass(n.opts.slideClass),
                  t)
                ) {
                  case "image":
                    i.setImage(n);
                    break;
                  case "iframe":
                    i.setIframe(n);
                    break;
                  case "html":
                    i.setContent(n, n.src || n.content);
                    break;
                  case "video":
                    i.setContent(
                      n,
                      n.opts.video.tpl
                        .replace(/\{\{src\}\}/gi, n.src)
                        .replace(
                          "{{format}}",
                          n.opts.videoFormat || n.opts.video.format || ""
                        )
                        .replace("{{poster}}", n.thumb || "")
                    );
                    break;
                  case "inline":
                    f(n.src).length ? i.setContent(n, f(n.src)) : i.setError(n);
                    break;
                  case "ajax":
                    i.showLoading(n),
                      (o = f.ajax(
                        f.extend({}, n.opts.ajax.settings, {
                          url: n.src,
                          success: function (t, e) {
                            "success" === e && i.setContent(n, t);
                          },
                          error: function (t, e) {
                            t && "abort" !== e && i.setError(n);
                          },
                        })
                      )),
                      e.one("onReset", function () {
                        o.abort();
                      });
                    break;
                  default:
                    i.setError(n);
                }
                return !0;
              }
            },
            setImage: function (e) {
              var t,
                n = this;
              setTimeout(function () {
                var t = e.$image;
                n.isClosing ||
                  !e.isLoading ||
                  (t && t.length && t[0].complete) ||
                  e.hasError ||
                  n.showLoading(e);
              }, 50),
                n.checkSrcset(e),
                (e.$content = f('<div class="fancybox-content"></div>')
                  .addClass("fancybox-is-hidden")
                  .appendTo(e.$slide.addClass("fancybox-slide--image"))),
                !1 !== e.opts.preload &&
                  e.opts.width &&
                  e.opts.height &&
                  e.thumb &&
                  ((e.width = e.opts.width),
                  (e.height = e.opts.height),
                  ((t = s.createElement("img")).onerror = function () {
                    f(this).remove(), (e.$ghost = null);
                  }),
                  (t.onload = function () {
                    n.afterLoad(e);
                  }),
                  (e.$ghost = f(t)
                    .addClass("fancybox-image")
                    .appendTo(e.$content)
                    .attr("src", e.thumb))),
                n.setBigImage(e);
            },
            checkSrcset: function (t) {
              var e,
                n,
                o,
                i,
                s = t.opts.srcset || t.opts.image.srcset;
              if (s) {
                (o = c.devicePixelRatio || 1),
                  (i = c.innerWidth * o),
                  (n = s.split(",").map(function (t) {
                    var o = {};
                    return (
                      t
                        .trim()
                        .split(/\s+/)
                        .forEach(function (t, e) {
                          var n = parseInt(t.substring(0, t.length - 1), 10);
                          if (0 === e) return (o.url = t);
                          n && ((o.value = n), (o.postfix = t[t.length - 1]));
                        }),
                      o
                    );
                  })).sort(function (t, e) {
                    return t.value - e.value;
                  });
                for (var a = 0; a < n.length; a++) {
                  var r = n[a];
                  if (
                    ("w" === r.postfix && r.value >= i) ||
                    ("x" === r.postfix && r.value >= o)
                  ) {
                    e = r;
                    break;
                  }
                }
                (e = !e && n.length ? n[n.length - 1] : e) &&
                  ((t.src = e.url),
                  t.width &&
                    t.height &&
                    "w" == e.postfix &&
                    ((t.height = (t.width / t.height) * e.value),
                    (t.width = e.value)),
                  (t.opts.srcset = s));
              }
            },
            setBigImage: function (e) {
              var n = this,
                t = s.createElement("img"),
                o = f(t);
              (e.$image = o
                .one("error", function () {
                  n.setError(e);
                })
                .one("load", function () {
                  var t;
                  e.$ghost ||
                    (n.resolveImageSlideSize(
                      e,
                      this.naturalWidth,
                      this.naturalHeight
                    ),
                    n.afterLoad(e)),
                    n.isClosing ||
                      (e.opts.srcset &&
                        (((t = e.opts.sizes) && "auto" !== t) ||
                          (t =
                            (1 < e.width / e.height &&
                            1 < i.width() / i.height()
                              ? "100"
                              : Math.round((e.width / e.height) * 100)) + "vw"),
                        o.attr("sizes", t).attr("srcset", e.opts.srcset)),
                      e.$ghost &&
                        setTimeout(function () {
                          e.$ghost && !n.isClosing && e.$ghost.hide();
                        }, Math.min(300, Math.max(1e3, e.height / 1600))),
                      n.hideLoading(e));
                })
                .addClass("fancybox-image")
                .attr("src", e.src)
                .appendTo(e.$content)),
                (t.complete || "complete" == t.readyState) &&
                o.naturalWidth &&
                o.naturalHeight
                  ? o.trigger("load")
                  : t.error && o.trigger("error");
            },
            resolveImageSlideSize: function (t, e, n) {
              var o = parseInt(t.opts.width, 10),
                i = parseInt(t.opts.height, 10);
              (t.width = e),
                (t.height = n),
                0 < o && ((t.width = o), (t.height = Math.floor((o * n) / e))),
                0 < i && ((t.width = Math.floor((i * e) / n)), (t.height = i));
            },
            setIframe: function (i) {
              var s,
                e = this,
                a = i.opts.iframe,
                r = i.$slide;
              (i.$content = f(
                '<div class="fancybox-content' +
                  (a.preload ? " fancybox-is-hidden" : "") +
                  '"></div>'
              )
                .css(a.css)
                .appendTo(r)),
                r.addClass("fancybox-slide--" + i.contentType),
                (i.$iframe = s =
                  f(a.tpl.replace(/\{rnd\}/g, new Date().getTime()))
                    .attr(a.attr)
                    .appendTo(i.$content)),
                a.preload
                  ? (e.showLoading(i),
                    s.on("load.fb error.fb", function (t) {
                      (this.isReady = 1),
                        i.$slide.trigger("refresh"),
                        e.afterLoad(i);
                    }),
                    r.on("refresh.fb", function () {
                      var t,
                        e = i.$content,
                        n = a.css.width,
                        o = a.css.height;
                      if (1 === s[0].isReady) {
                        try {
                          t = s.contents().find("body");
                        } catch (t) {}
                        t &&
                          t.length &&
                          t.children().length &&
                          (r.css("overflow", "visible"),
                          e.css({
                            width: "100%",
                            "max-width": "100%",
                            height: "9999px",
                          }),
                          void 0 === n &&
                            (n = Math.ceil(
                              Math.max(t[0].clientWidth, t.outerWidth(!0))
                            )),
                          e.css("width", n || "").css("max-width", ""),
                          void 0 === o &&
                            (o = Math.ceil(
                              Math.max(t[0].clientHeight, t.outerHeight(!0))
                            )),
                          e.css("height", o || ""),
                          r.css("overflow", "auto")),
                          e.removeClass("fancybox-is-hidden");
                      }
                    }))
                  : e.afterLoad(i),
                s.attr("src", i.src),
                r.one("onReset", function () {
                  try {
                    f(this)
                      .find("iframe")
                      .hide()
                      .unbind()
                      .attr("src", "//about:blank");
                  } catch (t) {}
                  f(this).off("refresh.fb").empty(),
                    (i.isLoaded = !1),
                    (i.isRevealed = !1);
                });
            },
            setContent: function (t, e) {
              var n;
              this.isClosing ||
                (this.hideLoading(t),
                t.$content && f.fancybox.stop(t.$content),
                t.$slide.empty(),
                e && e.hasOwnProperty && e instanceof f && e.parent().length
                  ? ((e.hasClass("fancybox-content") ||
                      e.parent().hasClass("fancybox-content")) &&
                      e.parents(".fancybox-slide").trigger("onReset"),
                    (t.$placeholder = f("<div>").hide().insertAfter(e)),
                    e.css("display", "inline-block"))
                  : t.hasError ||
                    ("string" === f.type(e) &&
                      (e = f("<div>").append(f.trim(e)).contents()),
                    t.opts.filter &&
                      (e = f("<div>").html(e).find(t.opts.filter))),
                t.$slide.one("onReset", function () {
                  f(this).find("video,audio").trigger("pause"),
                    t.$placeholder &&
                      (t.$placeholder
                        .after(e.removeClass("fancybox-content").hide())
                        .remove(),
                      (t.$placeholder = null)),
                    t.$smallBtn && (t.$smallBtn.remove(), (t.$smallBtn = null)),
                    t.hasError ||
                      (f(this).empty(), (t.isLoaded = !1), (t.isRevealed = !1));
                }),
                f(e).appendTo(t.$slide),
                f(e).is("video,audio") &&
                  (f(e).addClass("fancybox-video"),
                  f(e).wrap("<div></div>"),
                  (t.contentType = "video"),
                  (t.opts.width = t.opts.width || f(e).attr("width")),
                  (t.opts.height = t.opts.height || f(e).attr("height"))),
                (t.$content = t.$slide
                  .children()
                  .filter("div,form,main,video,audio,article,.fancybox-content")
                  .first()),
                t.$content.siblings().hide(),
                t.$content.length ||
                  (t.$content = t.$slide
                    .wrapInner("<div></div>")
                    .children()
                    .first()),
                t.$content.addClass("fancybox-content"),
                t.$slide.addClass("fancybox-slide--" + t.contentType),
                this.afterLoad(t));
            },
            setError: function (t) {
              (t.hasError = !0),
                t.$slide
                  .trigger("onReset")
                  .removeClass("fancybox-slide--" + t.contentType)
                  .addClass("fancybox-slide--error"),
                (t.contentType = "html"),
                this.setContent(t, this.translate(t, t.opts.errorTpl)),
                t.pos === this.currPos && (this.isAnimating = !1);
            },
            showLoading: function (t) {
              (t = t || this.current) &&
                !t.$spinner &&
                (t.$spinner = f(this.translate(this, this.opts.spinnerTpl))
                  .appendTo(t.$slide)
                  .hide()
                  .fadeIn("fast"));
            },
            hideLoading: function (t) {
              (t = t || this.current) &&
                t.$spinner &&
                (t.$spinner.stop().remove(), delete t.$spinner);
            },
            afterLoad: function (t) {
              this.isClosing ||
                ((t.isLoading = !1),
                (t.isLoaded = !0),
                this.trigger("afterLoad", t),
                this.hideLoading(t),
                !t.opts.smallBtn ||
                  (t.$smallBtn && t.$smallBtn.length) ||
                  (t.$smallBtn = f(
                    this.translate(t, t.opts.btnTpl.smallBtn)
                  ).appendTo(t.$content)),
                t.opts.protect &&
                  t.$content &&
                  !t.hasError &&
                  (t.$content.on("contextmenu.fb", function (t) {
                    return 2 == t.button && t.preventDefault(), !0;
                  }),
                  "image" === t.type &&
                    f('<div class="fancybox-spaceball"></div>').appendTo(
                      t.$content
                    )),
                this.adjustCaption(t),
                this.adjustLayout(t),
                t.pos === this.currPos && this.updateCursor(),
                this.revealContent(t));
            },
            adjustCaption: function (t) {
              var e,
                n = t || this.current,
                o = n.opts.caption,
                i = n.opts.preventCaptionOverlap,
                e = this.$refs.caption,
                t = !1;
              e.toggleClass("fancybox-caption--separate", i),
                i &&
                  o &&
                  o.length &&
                  (n.pos !== this.currPos
                    ? ((e = e.clone().appendTo(e.parent()))
                        .children()
                        .eq(0)
                        .empty()
                        .html(o),
                      (t = e.outerHeight(!0)),
                      e.empty().remove())
                    : this.$caption && (t = this.$caption.outerHeight(!0)),
                  n.$slide.css("padding-bottom", t || ""));
            },
            adjustLayout: function (t) {
              var t,
                e,
                n,
                o,
                i = t || this.current;
              i.isLoaded &&
                !0 !== i.opts.disableLayoutFix &&
                (i.$content.css("margin-bottom", ""),
                i.$content.outerHeight() > i.$slide.height() + 0.5 &&
                  ((n = i.$slide[0].style["padding-bottom"]),
                  (o = i.$slide.css("padding-bottom")),
                  0 < parseFloat(o) &&
                    ((t = i.$slide[0].scrollHeight),
                    i.$slide.css("padding-bottom", 0),
                    Math.abs(t - i.$slide[0].scrollHeight) < 1 && (e = o),
                    i.$slide.css("padding-bottom", n))),
                i.$content.css("margin-bottom", e));
            },
            revealContent: function (t) {
              var e,
                n,
                o,
                i,
                s = this,
                a = t.$slide,
                r = !1,
                c = !1,
                l = s.isMoved(t),
                h = t.isRevealed;
              return (
                (t.isRevealed = !0),
                (e =
                  t.opts[s.firstRun ? "animationEffect" : "transitionEffect"]),
                (o =
                  t.opts[
                    s.firstRun ? "animationDuration" : "transitionDuration"
                  ]),
                (o = parseInt(
                  void 0 === t.forcedDuration ? o : t.forcedDuration,
                  10
                )),
                "zoom" === (e = l || t.pos !== s.currPos || !o ? !1 : e) &&
                  (t.pos === s.currPos &&
                  o &&
                  "image" === t.type &&
                  !t.hasError &&
                  (c = s.getThumbPos(t))
                    ? (r = s.getFitPos(t))
                    : (e = "fade")),
                "zoom" === e
                  ? ((s.isAnimating = !0),
                    (r.scaleX = r.width / c.width),
                    (r.scaleY = r.height / c.height),
                    (i =
                      "auto" == (i = t.opts.zoomOpacity)
                        ? 0.1 <
                          Math.abs(t.width / t.height - c.width / c.height)
                        : i) && ((c.opacity = 0.1), (r.opacity = 1)),
                    f.fancybox.setTranslate(
                      t.$content.removeClass("fancybox-is-hidden"),
                      c
                    ),
                    u(t.$content),
                    void f.fancybox.animate(t.$content, r, o, function () {
                      (s.isAnimating = !1), s.complete();
                    }))
                  : (s.updateSlide(t),
                    e
                      ? (f.fancybox.stop(a),
                        (n =
                          "fancybox-slide--" +
                          (t.pos >= s.prevPos ? "next" : "previous") +
                          " fancybox-animated fancybox-fx-" +
                          e),
                        a.addClass(n).removeClass("fancybox-slide--current"),
                        t.$content.removeClass("fancybox-is-hidden"),
                        u(a),
                        "image" !== t.type && t.$content.hide().show(0),
                        void f.fancybox.animate(
                          a,
                          "fancybox-slide--current",
                          o,
                          function () {
                            a
                              .removeClass(n)
                              .css({ transform: "", opacity: "" }),
                              t.pos === s.currPos && s.complete();
                          },
                          !0
                        ))
                      : (t.$content.removeClass("fancybox-is-hidden"),
                        h ||
                          !l ||
                          "image" !== t.type ||
                          t.hasError ||
                          t.$content.hide().fadeIn("fast"),
                        void (t.pos === s.currPos && s.complete())))
              );
            },
            getThumbPos: function (t) {
              var e,
                n,
                t,
                o,
                e,
                i,
                i = t.$thumb,
                e,
                o;
              return (
                !(
                  !i ||
                  !(e = i[0]) ||
                  e.ownerDocument !== s ||
                  (f(".fancybox-container").css("pointer-events", "none"),
                  (o = {
                    x: e.getBoundingClientRect().left + e.offsetWidth / 2,
                    y: e.getBoundingClientRect().top + e.offsetHeight / 2,
                  }),
                  (e = s.elementFromPoint(o.x, o.y) === e),
                  f(".fancybox-container").css("pointer-events", ""),
                  !e)
                ) &&
                ((n = f.fancybox.getTranslate(i)),
                (t = parseFloat(i.css("border-top-width") || 0)),
                (o = parseFloat(i.css("border-right-width") || 0)),
                (e = parseFloat(i.css("border-bottom-width") || 0)),
                (i = parseFloat(i.css("border-left-width") || 0)),
                (e = {
                  top: n.top + t,
                  left: n.left + i,
                  width: n.width - o - i,
                  height: n.height - t - e,
                  scaleX: 1,
                  scaleY: 1,
                }),
                0 < n.width && 0 < n.height && e)
              );
            },
            complete: function () {
              var t,
                n = this,
                e = n.current,
                o = {};
              !n.isMoved() &&
                e.isLoaded &&
                (e.isComplete ||
                  ((e.isComplete = !0),
                  e.$slide.siblings().trigger("onReset"),
                  n.preload("inline"),
                  u(e.$slide),
                  e.$slide.addClass("fancybox-slide--complete"),
                  f.each(n.slides, function (t, e) {
                    e.pos >= n.currPos - 1 && e.pos <= n.currPos + 1
                      ? (o[e.pos] = e)
                      : e &&
                        (f.fancybox.stop(e.$slide), e.$slide.off().remove());
                  }),
                  (n.slides = o)),
                (n.isAnimating = !1),
                n.updateCursor(),
                n.trigger("afterShow"),
                e.opts.video.autoStart &&
                  e.$slide
                    .find("video,audio")
                    .filter(":visible:first")
                    .trigger("play")
                    .one("ended", function () {
                      Document.exitFullscreen
                        ? Document.exitFullscreen()
                        : this.webkitExitFullscreen &&
                          this.webkitExitFullscreen(),
                        n.next();
                    }),
                e.opts.autoFocus &&
                  "html" === e.contentType &&
                  ((t = e.$content.find(
                    "input[autofocus]:enabled:visible:first"
                  )).length
                    ? t.trigger("focus")
                    : n.focus(null, !0)),
                e.$slide.scrollTop(0).scrollLeft(0));
            },
            preload: function (t) {
              var e, n;
              this.group.length < 2 ||
                ((n = this.slides[this.currPos + 1]),
                (e = this.slides[this.currPos - 1]) &&
                  e.type === t &&
                  this.loadSlide(e),
                n && n.type === t && this.loadSlide(n));
            },
            focus: function (t, e) {
              var e,
                n,
                n = [
                  "a[href]",
                  "area[href]",
                  'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
                  "select:not([disabled]):not([aria-hidden])",
                  "textarea:not([disabled]):not([aria-hidden])",
                  "button:not([disabled]):not([aria-hidden])",
                  "iframe",
                  "object",
                  "embed",
                  "video",
                  "audio",
                  "[contenteditable]",
                  '[tabindex]:not([tabindex^="-"])',
                ].join(",");
              this.isClosing ||
                ((e = (e =
                  !t && this.current && this.current.isComplete
                    ? this.current.$slide.find(
                        "*:visible" + (e ? ":not(.fancybox-close-small)" : "")
                      )
                    : this.$refs.container.find("*:visible"))
                  .filter(n)
                  .filter(function () {
                    return (
                      "hidden" !== f(this).css("visibility") &&
                      !f(this).hasClass("disabled")
                    );
                  })).length
                  ? ((n = e.index(s.activeElement)),
                    t && t.shiftKey
                      ? (n < 0 || 0 == n) &&
                        (t.preventDefault(),
                        e.eq(e.length - 1).trigger("focus"))
                      : (n < 0 || n == e.length - 1) &&
                        (t && t.preventDefault(), e.eq(0).trigger("focus")))
                  : this.$refs.container.trigger("focus"));
            },
            activate: function () {
              var e = this;
              f(".fancybox-container").each(function () {
                var t = f(this).data("FancyBox");
                t &&
                  t.id !== e.id &&
                  !t.isClosing &&
                  (t.trigger("onDeactivate"),
                  t.removeEvents(),
                  (t.isVisible = !1));
              }),
                (e.isVisible = !0),
                (e.current || e.isIdle) && (e.update(), e.updateControls()),
                e.trigger("onActivate"),
                e.addEvents();
            },
            close: function (t, e) {
              var n,
                o,
                i,
                s,
                s,
                e,
                a,
                r = this,
                c = r.current,
                l = function () {
                  r.cleanUp(t);
                };
              return (
                !r.isClosing &&
                (!(r.isClosing = !0) === r.trigger("beforeClose", t)
                  ? ((r.isClosing = !1),
                    h(function () {
                      r.update();
                    }),
                    !1)
                  : (r.removeEvents(),
                    (i = c.$content),
                    (n = c.opts.animationEffect),
                    (o = f.isNumeric(e) ? e : n ? c.opts.animationDuration : 0),
                    c.$slide.removeClass(
                      "fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"
                    ),
                    !0 !== t ? f.fancybox.stop(c.$slide) : (n = !1),
                    c.$slide.siblings().trigger("onReset").remove(),
                    o &&
                      r.$refs.container
                        .removeClass("fancybox-is-open")
                        .addClass("fancybox-is-closing")
                        .css("transition-duration", o + "ms"),
                    r.hideLoading(c),
                    r.hideControls(!0),
                    r.updateCursor(),
                    "zoom" ===
                    (n = !(
                      "zoom" !== n ||
                      (i &&
                        o &&
                        "image" === c.type &&
                        !r.isMoved() &&
                        !c.hasError &&
                        (a = r.getThumbPos(c)))
                    )
                      ? "fade"
                      : n)
                      ? (f.fancybox.stop(i),
                        (e = {
                          top: (s = f.fancybox.getTranslate(i)).top,
                          left: s.left,
                          scaleX: s.width / a.width,
                          scaleY: s.height / a.height,
                          width: a.width,
                          height: a.height,
                        }),
                        (s =
                          "auto" == (s = c.opts.zoomOpacity)
                            ? 0.1 <
                              Math.abs(c.width / c.height - a.width / a.height)
                            : s) && (a.opacity = 0),
                        f.fancybox.setTranslate(i, e),
                        u(i),
                        f.fancybox.animate(i, a, o, l))
                      : n && o
                      ? f.fancybox.animate(
                          c.$slide
                            .addClass("fancybox-slide--previous")
                            .removeClass("fancybox-slide--current"),
                          "fancybox-animated fancybox-fx-" + n,
                          o,
                          l
                        )
                      : !0 === t
                      ? setTimeout(l, o)
                      : l(),
                    !0))
              );
            },
            cleanUp: function (t) {
              var e,
                e,
                n = this.current.opts.$orig;
              this.current.$slide.trigger("onReset"),
                this.$refs.container.empty().remove(),
                this.trigger("afterClose", t),
                !this.current.opts.backFocus ||
                  ((n = !(n && n.length && n.is(":visible"))
                    ? this.$trigger
                    : n) &&
                    n.length &&
                    (c.scrollX,
                    (e = c.scrollY),
                    n.trigger("focus"),
                    f("html, body").scrollTop(e).scrollLeft(0))),
                (this.current = null),
                (e = f.fancybox.getInstance())
                  ? e.activate()
                  : (f("body").removeClass(
                      "fancybox-active compensate-for-scrollbar"
                    ),
                    f("#fancybox-style-noscroll").remove());
            },
            trigger: function (t, e) {
              var n,
                o = Array.prototype.slice.call(arguments, 1),
                e = e && e.opts ? e : this.current;
              if (
                (e ? o.unshift(e) : (e = this),
                o.unshift(this),
                !1 ===
                  (n = f.isFunction(e.opts[t]) ? e.opts[t].apply(e, o) : n))
              )
                return n;
              ("afterClose" !== t && this.$refs
                ? this.$refs.container
                : a
              ).trigger(t + ".fb", o);
            },
            updateControls: function () {
              var t = this.current,
                e = t.index,
                n = this.$refs.container,
                o = this.$refs.caption,
                i = t.opts.caption;
              t.$slide.trigger("refresh"),
                i && i.length
                  ? (this.$caption = o).children().eq(0).html(i)
                  : (this.$caption = null),
                this.hasHiddenControls || this.isIdle || this.showControls(),
                n.find("[data-fancybox-count]").html(this.group.length),
                n.find("[data-fancybox-index]").html(e + 1),
                n
                  .find("[data-fancybox-prev]")
                  .prop("disabled", !t.opts.loop && e <= 0),
                n
                  .find("[data-fancybox-next]")
                  .prop("disabled", !t.opts.loop && e >= this.group.length - 1),
                "image" === t.type
                  ? n
                      .find("[data-fancybox-zoom]")
                      .show()
                      .end()
                      .find("[data-fancybox-download]")
                      .attr("href", t.opts.image.src || t.src)
                      .show()
                  : t.opts.toolbar &&
                    n
                      .find("[data-fancybox-download],[data-fancybox-zoom]")
                      .hide(),
                f(s.activeElement).is(":hidden,[disabled]") &&
                  this.$refs.container.trigger("focus");
            },
            hideControls: function (t) {
              var e = ["infobar", "toolbar", "nav"];
              (!t && this.current.opts.preventCaptionOverlap) ||
                e.push("caption"),
                this.$refs.container.removeClass(
                  e
                    .map(function (t) {
                      return "fancybox-show-" + t;
                    })
                    .join(" ")
                ),
                (this.hasHiddenControls = !0);
            },
            showControls: function () {
              var t = (this.current || this).opts,
                e = this.$refs.container;
              (this.hasHiddenControls = !1),
                (this.idleSecondsCounter = 0),
                e
                  .toggleClass(
                    "fancybox-show-toolbar",
                    !(!t.toolbar || !t.buttons)
                  )
                  .toggleClass(
                    "fancybox-show-infobar",
                    !!(t.infobar && 1 < this.group.length)
                  )
                  .toggleClass("fancybox-show-caption", !!this.$caption)
                  .toggleClass(
                    "fancybox-show-nav",
                    !!(t.arrows && 1 < this.group.length)
                  )
                  .toggleClass("fancybox-is-modal", !!t.modal);
            },
            toggleControls: function () {
              this.hasHiddenControls
                ? this.showControls()
                : this.hideControls();
            },
          }),
          (f.fancybox = {
            version: "3.5.7",
            defaults: e,
            getInstance: function (t) {
              var e = f(
                  '.fancybox-container:not(".fancybox-is-closing"):last'
                ).data("FancyBox"),
                n = Array.prototype.slice.call(arguments, 1);
              return (
                e instanceof p &&
                ("string" === f.type(t)
                  ? e[t].apply(e, n)
                  : "function" === f.type(t) && t.apply(e, n),
                e)
              );
            },
            open: function (t, e, n) {
              return new p(t, e, n);
            },
            close: function (t) {
              var e = this.getInstance();
              e && (e.close(), !0 === t && this.close(t));
            },
            destroy: function () {
              this.close(!0), a.add("body").off("click.fb-start", "**");
            },
            isMobile:
              /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
              ),
            use3d:
              ((e = s.createElement("div")),
              c.getComputedStyle &&
                c.getComputedStyle(e) &&
                c.getComputedStyle(e).getPropertyValue("transform") &&
                !(s.documentMode && s.documentMode < 11)),
            getTranslate: function (t) {
              var e;
              return (
                !(!t || !t.length) && {
                  top: (e = t[0].getBoundingClientRect()).top || 0,
                  left: e.left || 0,
                  width: e.width,
                  height: e.height,
                  opacity: parseFloat(t.css("opacity")),
                }
              );
            },
            setTranslate: function (t, e) {
              var n = "",
                o = {};
              if (t && e)
                return (
                  (void 0 === e.left && void 0 === e.top) ||
                    ((n =
                      (void 0 === e.left ? t.position() : e).left +
                      "px, " +
                      (void 0 === e.top ? t.position() : e).top +
                      "px"),
                    (n = this.use3d
                      ? "translate3d(" + n + ", 0px)"
                      : "translate(" + n + ")")),
                  void 0 !== e.scaleX && void 0 !== e.scaleY
                    ? (n += " scale(" + e.scaleX + ", " + e.scaleY + ")")
                    : void 0 !== e.scaleX && (n += " scaleX(" + e.scaleX + ")"),
                  n.length && (o.transform = n),
                  void 0 !== e.opacity && (o.opacity = e.opacity),
                  void 0 !== e.width && (o.width = e.width),
                  void 0 !== e.height && (o.height = e.height),
                  t.css(o)
                );
            },
            animate: function (e, n, o, i, s) {
              var a,
                r = this;
              f.isFunction(o) && ((i = o), (o = null)),
                r.stop(e),
                (a = r.getTranslate(e)),
                e.on(l, function (t) {
                  (t &&
                    t.originalEvent &&
                    (!e.is(t.originalEvent.target) ||
                      "z-index" == t.originalEvent.propertyName)) ||
                    (r.stop(e),
                    f.isNumeric(o) && e.css("transition-duration", ""),
                    f.isPlainObject(n)
                      ? void 0 !== n.scaleX &&
                        void 0 !== n.scaleY &&
                        r.setTranslate(e, {
                          top: n.top,
                          left: n.left,
                          width: a.width * n.scaleX,
                          height: a.height * n.scaleY,
                          scaleX: 1,
                          scaleY: 1,
                        })
                      : !0 !== s && e.removeClass(n),
                    f.isFunction(i) && i(t));
                }),
                f.isNumeric(o) && e.css("transition-duration", o + "ms"),
                f.isPlainObject(n)
                  ? (void 0 !== n.scaleX &&
                      void 0 !== n.scaleY &&
                      (delete n.width,
                      delete n.height,
                      e.parent().hasClass("fancybox-slide--image") &&
                        e.parent().addClass("fancybox-is-scaling")),
                    f.fancybox.setTranslate(e, n))
                  : e.addClass(n),
                e.data(
                  "timer",
                  setTimeout(function () {
                    e.trigger(l);
                  }, o + 33)
                );
            },
            stop: function (t, e) {
              t &&
                t.length &&
                (clearTimeout(t.data("timer")),
                e && t.trigger(l),
                t.off(l).css("transition-duration", ""),
                t.parent().removeClass("fancybox-is-scaling"));
            },
          }),
          (f.fn.fancybox = function (t) {
            var e;
            return (
              (e = (t = t || {}).selector || !1)
                ? f("body")
                    .off("click.fb-start", e)
                    .on("click.fb-start", e, { options: t }, g)
                : this.off("click.fb-start").on(
                    "click.fb-start",
                    { items: this, options: t },
                    g
                  ),
              this
            );
          }),
          a.on("click.fb-start", "[data-fancybox]", g),
          a.on("click.fb-start", "[data-fancybox-trigger]", function (t) {
            f('[data-fancybox="' + f(this).attr("data-fancybox-trigger") + '"]')
              .eq(f(this).attr("data-fancybox-index") || 0)
              .trigger("click.fb-start", { $trigger: f(this) });
          }),
          (n = null),
          a.on(
            "mousedown mouseup focus blur",
            ".fancybox-button",
            function (t) {
              switch (t.type) {
                case "mousedown":
                  n = f(this);
                  break;
                case "mouseup":
                  n = null;
                  break;
                case "focusin":
                  f(".fancybox-button").removeClass("fancybox-focus"),
                    f(this).is(n) ||
                      f(this).is("[disabled]") ||
                      f(this).addClass("fancybox-focus");
                  break;
                case "focusout":
                  f(".fancybox-button").removeClass("fancybox-focus");
              }
            }
          )));
})(window, document, jQuery),
  (function (b) {
    "use strict";
    var o = {
        youtube: {
          matcher:
            /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|shorts\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
          params: {
            autoplay: 1,
            autohide: 1,
            fs: 1,
            rel: 0,
            hd: 1,
            wmode: "transparent",
            enablejsapi: 1,
            html5: 1,
          },
          paramPlace: 8,
          type: "iframe",
          url: "https://www.youtube-nocookie.com/embed/$4",
          thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg",
        },
        vimeo: {
          matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
          params: {
            autoplay: 1,
            hd: 1,
            show_title: 1,
            show_byline: 1,
            show_portrait: 0,
            fullscreen: 1,
          },
          paramPlace: 3,
          type: "iframe",
          url: "https://player.vimeo.com/video/$2",
        },
        instagram: {
          matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
          type: "image",
          url: "//$1/p/$2/media/?size=l",
        },
        gmap_place: {
          matcher:
            /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
          type: "iframe",
          url: function (t) {
            return (
              "//maps.google." +
              t[2] +
              "/?ll=" +
              (t[9]
                ? t[9] +
                  "&z=" +
                  Math.floor(t[10]) +
                  (t[12] ? t[12].replace(/^\//, "&") : "")
                : t[12] + ""
              ).replace(/\?/, "&") +
              "&output=" +
              (t[12] && 0 < t[12].indexOf("layer=c") ? "svembed" : "embed")
            );
          },
        },
        gmap_search: {
          matcher:
            /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
          type: "iframe",
          url: function (t) {
            return (
              "//maps.google." +
              t[2] +
              "/maps?q=" +
              t[5].replace("query=", "q=").replace("api=1", "") +
              "&output=embed"
            );
          },
        },
      },
      m = function (n, t, e) {
        if (n)
          return (
            "object" === b.type((e = e || "")) && (e = b.param(e, !0)),
            b.each(t, function (t, e) {
              n = n.replace("$" + t, e || "");
            }),
            e.length && (n += (0 < n.indexOf("?") ? "&" : "?") + e),
            n
          );
      };
    b(document).on("objectNeedsType.fb", function (t, e, r) {
      var n,
        c,
        l,
        h,
        d,
        u,
        p,
        f = r.src || "",
        g = !1,
        n = b.extend(!0, {}, o, r.opts.media);
      b.each(n, function (t, e) {
        var n = f.match(
          /^.+vimeo.com\/(?:\/)?([\d]+)((\/|\?h=)([a-z0-9]+))?(.*)?/
        );
        if ("vimeo" === t && n && n[3] && n[4]) {
          var o = void 0 !== n[5] && n[5] ? n[5].replace("?", "&") : "",
            i = b.param(e.params, !0);
          return (
            (f =
              "https://player.vimeo.com/video/" +
              n[1] +
              "?h=" +
              n[4] +
              "&" +
              i +
              o),
            (l = f.match(e.matcher)),
            (g = e.type),
            (p = t),
            (u = {}),
            (h = b.extend(!0, {}, e.params, u)),
            (c =
              "function" === b.type(e.thumb)
                ? e.thumb.call(this, l, h, r)
                : m(e.thumb, l)),
            !1
          );
        }
        if ((l = f.match(e.matcher))) {
          if (
            ((g = e.type), (p = t), (u = {}), e.paramPlace && l[e.paramPlace])
          ) {
            d = (d =
              "?" == (d = l[e.paramPlace])[0] ? d.substring(1) : d).split("&");
            for (var s = 0; s < d.length; ++s) {
              var a = d[s].split("=", 2);
              2 == a.length &&
                (u[a[0]] = decodeURIComponent(a[1].replace(/\+/g, " ")));
            }
          }
          return (
            (h = b.extend(!0, {}, e.params, r.opts[t], u)),
            (f =
              "function" === b.type(e.url)
                ? e.url.call(this, l, h, r)
                : m(e.url, l, h)),
            (c =
              "function" === b.type(e.thumb)
                ? e.thumb.call(this, l, h, r)
                : m(e.thumb, l)),
            "youtube" === t
              ? (f = f.replace(/&t=((\d+)m)?(\d+)s/, function (t, e, n, o) {
                  return (
                    "&start=" +
                    ((n ? 60 * parseInt(n, 10) : 0) + parseInt(o, 10))
                  );
                }))
              : "vimeo" === t && (f = f.replace("&%23", "#")),
            !1
          );
        }
      }),
        g
          ? (r.opts.thumb ||
              (r.opts.$thumb && r.opts.$thumb.length) ||
              (r.opts.thumb = c),
            "iframe" === g &&
              (r.opts = b.extend(!0, r.opts, {
                iframe: { preload: !1, attr: { scrolling: "no" } },
              })),
            b.extend(r, {
              type: g,
              src: f,
              origSrc: r.src,
              contentSource: p,
              contentType:
                "image" === g
                  ? "image"
                  : "gmap_place" == p || "gmap_search" == p
                  ? "map"
                  : "video",
            }))
          : f && (r.type = r.opts.defaultType);
    });
    var i = {
      youtube: {
        src: "https://www.youtube.com/iframe_api",
        class: "YT",
        loading: !1,
        loaded: !1,
      },
      vimeo: {
        src: "https://player.vimeo.com/api/player.js",
        class: "Vimeo",
        loading: !1,
        loaded: !1,
      },
      load: function (t) {
        var e,
          n = this;
        this[t].loaded
          ? setTimeout(function () {
              n.done(t);
            })
          : this[t].loading ||
            ((this[t].loading = !0),
            ((e = document.createElement("script")).type = "text/javascript"),
            (e.src = this[t].src),
            "youtube" === t
              ? (window.onYouTubeIframeAPIReady = function () {
                  (n[t].loaded = !0), n.done(t);
                })
              : (e.onload = function () {
                  (n[t].loaded = !0), n.done(t);
                }),
            document.body.appendChild(e));
      },
      done: function (t) {
        var e, n;
        "youtube" === t && delete window.onYouTubeIframeAPIReady,
          (e = b.fancybox.getInstance()) &&
            ((n = e.current.$content.find("iframe")),
            "youtube" === t && void 0 !== YT && YT
              ? new YT.Player(n.attr("id"), {
                  events: {
                    onStateChange: function (t) {
                      0 == t.data && e.next();
                    },
                  },
                })
              : "vimeo" === t &&
                void 0 !== Vimeo &&
                Vimeo &&
                new Vimeo.Player(n).on("ended", function () {
                  e.next();
                }));
      },
    };
    b(document).on({
      "afterShow.fb": function (t, e, n) {
        1 < e.group.length &&
          ("youtube" === n.contentSource || "vimeo" === n.contentSource) &&
          i.load(n.contentSource);
      },
    });
  })(jQuery),
  (function (h, r, d) {
    "use strict";
    var u =
        h.requestAnimationFrame ||
        h.webkitRequestAnimationFrame ||
        h.mozRequestAnimationFrame ||
        h.oRequestAnimationFrame ||
        function (t) {
          return h.setTimeout(t, 1e3 / 60);
        },
      p =
        h.cancelAnimationFrame ||
        h.webkitCancelAnimationFrame ||
        h.mozCancelAnimationFrame ||
        h.oCancelAnimationFrame ||
        function (t) {
          h.clearTimeout(t);
        },
      f = function (t) {
        var e = [],
          n;
        for (n in (t =
          (t = t.originalEvent || t || h.e).touches && t.touches.length
            ? t.touches
            : t.changedTouches && t.changedTouches.length
            ? t.changedTouches
            : [t]))
          t[n].pageX
            ? e.push({ x: t[n].pageX, y: t[n].pageY })
            : t[n].clientX && e.push({ x: t[n].clientX, y: t[n].clientY });
        return e;
      },
      g = function (t, e, n) {
        return e && t
          ? "x" === n
            ? t.x - e.x
            : "y" === n
            ? t.y - e.y
            : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
          : 0;
      },
      c = function (t) {
        if (
          t.is(
            'a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe'
          ) ||
          d.isFunction(t.get(0).onclick) ||
          t.data("selectable")
        )
          return !0;
        for (var e = 0, n = t[0].attributes, o = n.length; e < o; e++)
          if ("data-fancybox-" === n[e].nodeName.substr(0, 14)) return !0;
        return !1;
      },
      l = function (t) {
        for (
          var e, n, o, i, s, a = !1;
          (e = t.get(0)),
            (s = i = o = n = void 0),
            (n = h.getComputedStyle(e)["overflow-y"]),
            (o = h.getComputedStyle(e)["overflow-x"]),
            (i =
              ("scroll" === n || "auto" === n) &&
              e.scrollHeight > e.clientHeight),
            (s =
              ("scroll" === o || "auto" === o) &&
              e.scrollWidth > e.clientWidth),
            !(a = i || s) &&
              (t = t.parent()).length &&
              !t.hasClass("fancybox-stage") &&
              !t.is("body");

        );
        return a;
      },
      n = function (t) {
        (this.instance = t),
          (this.$bg = t.$refs.bg),
          (this.$stage = t.$refs.stage),
          (this.$container = t.$refs.container),
          this.destroy(),
          this.$container.on(
            "touchstart.fb.touch mousedown.fb.touch",
            d.proxy(this, "ontouchstart")
          );
      };
    (n.prototype.destroy = function () {
      this.$container.off(".fb.touch"),
        d(r).off(".fb.touch"),
        this.requestId && (p(this.requestId), (this.requestId = null)),
        this.tapped && (clearTimeout(this.tapped), (this.tapped = null));
    }),
      (n.prototype.ontouchstart = function (t) {
        var e = d(t.target),
          n = this.instance,
          o = n.current,
          i = o.$slide,
          s = o.$content,
          a = "touchstart" == t.type;
        if (
          (a && this.$container.off("mousedown.fb.touch"),
          (!t.originalEvent || 2 != t.originalEvent.button) &&
            i.length &&
            e.length &&
            !c(e) &&
            !c(e.parent()) &&
            (e.is("img") ||
              !(t.originalEvent.clientX > e[0].clientWidth + e.offset().left)))
        ) {
          if (!o || n.isAnimating || o.$slide.hasClass("fancybox-animated"))
            return t.stopPropagation(), void t.preventDefault();
          (this.realPoints = this.startPoints = f(t)),
            this.startPoints.length &&
              (o.touch && t.stopPropagation(),
              (this.startEvent = t),
              (this.canTap = !0),
              (this.$target = e),
              (this.$content = s),
              (this.opts = o.opts.touch),
              (this.isPanning = !1),
              (this.isSwiping = !1),
              (this.isZooming = !1),
              (this.isScrolling = !1),
              (this.canPan = n.canPan()),
              (this.startTime = new Date().getTime()),
              (this.distanceX = this.distanceY = this.distance = 0),
              (this.canvasWidth = Math.round(i[0].clientWidth)),
              (this.canvasHeight = Math.round(i[0].clientHeight)),
              (this.contentLastPos = null),
              (this.contentStartPos = d.fancybox.getTranslate(
                this.$content
              ) || { top: 0, left: 0 }),
              (this.sliderStartPos = d.fancybox.getTranslate(i)),
              (this.stagePos = d.fancybox.getTranslate(n.$refs.stage)),
              (this.sliderStartPos.top -= this.stagePos.top),
              (this.sliderStartPos.left -= this.stagePos.left),
              (this.contentStartPos.top -= this.stagePos.top),
              (this.contentStartPos.left -= this.stagePos.left),
              d(r)
                .off(".fb.touch")
                .on(
                  a
                    ? "touchend.fb.touch touchcancel.fb.touch"
                    : "mouseup.fb.touch mouseleave.fb.touch",
                  d.proxy(this, "ontouchend")
                )
                .on(
                  a ? "touchmove.fb.touch" : "mousemove.fb.touch",
                  d.proxy(this, "ontouchmove")
                ),
              d.fancybox.isMobile &&
                r.addEventListener("scroll", this.onscroll, !0),
              (((this.opts || this.canPan) &&
                (e.is(this.$stage) || this.$stage.find(e).length)) ||
                (e.is(".fancybox-image") && t.preventDefault(),
                d.fancybox.isMobile &&
                  e.parents(".fancybox-caption").length)) &&
                ((this.isScrollable = l(e) || l(e.parent())),
                (d.fancybox.isMobile && this.isScrollable) ||
                  t.preventDefault(),
                (1 !== this.startPoints.length && !o.hasError) ||
                  (this.canPan
                    ? (d.fancybox.stop(this.$content), (this.isPanning = !0))
                    : (this.isSwiping = !0),
                  this.$container.addClass("fancybox-is-grabbing")),
                2 === this.startPoints.length &&
                  "image" === o.type &&
                  (o.isLoaded || o.$ghost) &&
                  ((this.canTap = !1),
                  (this.isSwiping = !1),
                  (this.isPanning = !1),
                  (this.isZooming = !0),
                  d.fancybox.stop(this.$content),
                  (this.centerPointStartX =
                    0.5 * (this.startPoints[0].x + this.startPoints[1].x) -
                    d(h).scrollLeft()),
                  (this.centerPointStartY =
                    0.5 * (this.startPoints[0].y + this.startPoints[1].y) -
                    d(h).scrollTop()),
                  (this.percentageOfImageAtPinchPointX =
                    (this.centerPointStartX - this.contentStartPos.left) /
                    this.contentStartPos.width),
                  (this.percentageOfImageAtPinchPointY =
                    (this.centerPointStartY - this.contentStartPos.top) /
                    this.contentStartPos.height),
                  (this.startDistanceBetweenFingers = g(
                    this.startPoints[0],
                    this.startPoints[1]
                  )))));
        }
      }),
      (n.prototype.onscroll = function (t) {
        (this.isScrolling = !0),
          r.removeEventListener("scroll", this.onscroll, !0);
      }),
      (n.prototype.ontouchmove = function (t) {
        void 0 === t.originalEvent.buttons || 0 !== t.originalEvent.buttons
          ? this.isScrolling
            ? (this.canTap = !1)
            : ((this.newPoints = f(t)),
              (this.opts || this.canPan) &&
                this.newPoints.length &&
                this.newPoints.length &&
                ((this.isSwiping && !0 === this.isSwiping) ||
                  t.preventDefault(),
                (this.distanceX = g(
                  this.newPoints[0],
                  this.startPoints[0],
                  "x"
                )),
                (this.distanceY = g(
                  this.newPoints[0],
                  this.startPoints[0],
                  "y"
                )),
                (this.distance = g(this.newPoints[0], this.startPoints[0])),
                0 < this.distance &&
                  (this.isSwiping
                    ? this.onSwipe(t)
                    : this.isPanning
                    ? this.onPan()
                    : this.isZooming && this.onZoom())))
          : this.ontouchend(t);
      }),
      (n.prototype.onSwipe = function (t) {
        var e,
          i = this,
          s = i.instance,
          n = i.isSwiping,
          e = i.sliderStartPos.left || 0;
        !0 !== n
          ? ("x" == n &&
              (0 < i.distanceX &&
              (i.instance.group.length < 2 ||
                (0 === i.instance.current.index &&
                  !i.instance.current.opts.loop))
                ? (e += Math.pow(i.distanceX, 0.8))
                : i.distanceX < 0 &&
                  (i.instance.group.length < 2 ||
                    (i.instance.current.index === i.instance.group.length - 1 &&
                      !i.instance.current.opts.loop))
                ? (e -= Math.pow(-i.distanceX, 0.8))
                : (e += i.distanceX)),
            (i.sliderLastPos = {
              top: "x" == n ? 0 : i.sliderStartPos.top + i.distanceY,
              left: e,
            }),
            i.requestId && (p(i.requestId), (i.requestId = null)),
            (i.requestId = u(function () {
              i.sliderLastPos &&
                (d.each(i.instance.slides, function (t, e) {
                  var n = e.pos - i.instance.currPos;
                  d.fancybox.setTranslate(e.$slide, {
                    top: i.sliderLastPos.top,
                    left:
                      i.sliderLastPos.left +
                      n * i.canvasWidth +
                      n * e.opts.gutter,
                  });
                }),
                i.$container.addClass("fancybox-is-sliding"));
            })))
          : 10 < Math.abs(i.distance) &&
            ((i.canTap = !1),
            s.group.length < 2 && i.opts.vertical
              ? (i.isSwiping = "y")
              : s.isDragging ||
                !1 === i.opts.vertical ||
                ("auto" === i.opts.vertical && 800 < d(h).width())
              ? (i.isSwiping = "x")
              : ((e = Math.abs(
                  (180 * Math.atan2(i.distanceY, i.distanceX)) / Math.PI
                )),
                (i.isSwiping = 45 < e && e < 135 ? "y" : "x")),
            "y" === i.isSwiping && d.fancybox.isMobile && i.isScrollable
              ? (i.isScrolling = !0)
              : ((s.isDragging = i.isSwiping),
                (i.startPoints = i.newPoints),
                d.each(s.slides, function (t, e) {
                  var n, o;
                  d.fancybox.stop(e.$slide),
                    (n = d.fancybox.getTranslate(e.$slide)),
                    (o = d.fancybox.getTranslate(s.$refs.stage)),
                    e.$slide
                      .css({
                        transform: "",
                        opacity: "",
                        "transition-duration": "",
                      })
                      .removeClass("fancybox-animated")
                      .removeClass(function (t, e) {
                        return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(
                          " "
                        );
                      }),
                    e.pos === s.current.pos &&
                      ((i.sliderStartPos.top = n.top - o.top),
                      (i.sliderStartPos.left = n.left - o.left)),
                    d.fancybox.setTranslate(e.$slide, {
                      top: n.top - o.top,
                      left: n.left - o.left,
                    });
                }),
                s.SlideShow && s.SlideShow.isActive && s.SlideShow.stop()));
      }),
      (n.prototype.onPan = function () {
        var t = this;
        g(t.newPoints[0], t.realPoints[0]) < (d.fancybox.isMobile ? 10 : 5)
          ? (t.startPoints = t.newPoints)
          : ((t.canTap = !1),
            (t.contentLastPos = t.limitMovement()),
            t.requestId && p(t.requestId),
            (t.requestId = u(function () {
              d.fancybox.setTranslate(t.$content, t.contentLastPos);
            })));
      }),
      (n.prototype.limitMovement = function () {
        var t,
          e,
          n,
          o,
          i,
          s,
          a = this.canvasWidth,
          r = this.canvasHeight,
          c = this.distanceX,
          l = this.distanceY,
          e = this.contentStartPos,
          h = e.left,
          d = e.top,
          n = e.width,
          o = e.height,
          i = a < n ? h + c : h,
          s = d + l,
          t = Math.max(0, 0.5 * a - 0.5 * n),
          e = Math.max(0, 0.5 * r - 0.5 * o),
          n = Math.min(a - n, 0.5 * a - 0.5 * n),
          o = Math.min(r - o, 0.5 * r - 0.5 * o);
        return (
          0 < c && t < i && (i = t - 1 + Math.pow(-t + h + c, 0.8) || 0),
          c < 0 && i < n && (i = n + 1 - Math.pow(n - h - c, 0.8) || 0),
          0 < l && e < s && (s = e - 1 + Math.pow(-e + d + l, 0.8) || 0),
          {
            top: (s =
              l < 0 && s < o ? o + 1 - Math.pow(o - d - l, 0.8) || 0 : s),
            left: i,
          }
        );
      }),
      (n.prototype.limitPosition = function (t, e, n, o) {
        var i = this.canvasWidth,
          s = this.canvasHeight;
        return (
          (t =
            i < n
              ? (t = 0 < t ? 0 : t) < i - n
                ? i - n
                : t
              : Math.max(0, i / 2 - n / 2)),
          {
            top: (e =
              s < o
                ? (e = 0 < e ? 0 : e) < s - o
                  ? s - o
                  : e
                : Math.max(0, s / 2 - o / 2)),
            left: t,
          }
        );
      }),
      (n.prototype.onZoom = function () {
        var t = this,
          e = t.contentStartPos,
          n = e.width,
          o = e.height,
          i = e.left,
          s = e.top,
          a = g(t.newPoints[0], t.newPoints[1]) / t.startDistanceBetweenFingers,
          r = Math.floor(n * a),
          c = Math.floor(o * a),
          l = (n - r) * t.percentageOfImageAtPinchPointX,
          e = (o - c) * t.percentageOfImageAtPinchPointY,
          n = (t.newPoints[0].x + t.newPoints[1].x) / 2 - d(h).scrollLeft(),
          o = (t.newPoints[0].y + t.newPoints[1].y) / 2 - d(h).scrollTop(),
          n = n - t.centerPointStartX,
          a = {
            top: s + (e + (o - t.centerPointStartY)),
            left: i + (l + n),
            scaleX: a,
            scaleY: a,
          };
        (t.canTap = !1),
          (t.newWidth = r),
          (t.newHeight = c),
          (t.contentLastPos = a),
          t.requestId && p(t.requestId),
          (t.requestId = u(function () {
            d.fancybox.setTranslate(t.$content, t.contentLastPos);
          }));
      }),
      (n.prototype.ontouchend = function (t) {
        var e = this.isSwiping,
          n = this.isPanning,
          o = this.isZooming,
          i = this.isScrolling;
        if (
          ((this.endPoints = f(t)),
          (this.dMs = Math.max(new Date().getTime() - this.startTime, 1)),
          this.$container.removeClass("fancybox-is-grabbing"),
          d(r).off(".fb.touch"),
          r.removeEventListener("scroll", this.onscroll, !0),
          this.requestId && (p(this.requestId), (this.requestId = null)),
          (this.isSwiping = !1),
          (this.isPanning = !1),
          (this.isZooming = !1),
          (this.isScrolling = !1),
          (this.instance.isDragging = !1),
          this.canTap)
        )
          return this.onTap(t);
        (this.speed = 100),
          (this.velocityX = (this.distanceX / this.dMs) * 0.5),
          (this.velocityY = (this.distanceY / this.dMs) * 0.5),
          n ? this.endPanning() : o ? this.endZooming() : this.endSwiping(e, i);
      }),
      (n.prototype.endSwiping = function (t, e) {
        var n = !1,
          o = this.instance.group.length,
          i = Math.abs(this.distanceX),
          i = "x" == t && 1 < o && ((130 < this.dMs && 10 < i) || 50 < i);
        (this.sliderLastPos = null),
          "y" == t && !e && 50 < Math.abs(this.distanceY)
            ? (d.fancybox.animate(
                this.instance.current.$slide,
                {
                  top:
                    this.sliderStartPos.top +
                    this.distanceY +
                    150 * this.velocityY,
                  opacity: 0,
                },
                200
              ),
              (n = this.instance.close(!0, 250)))
            : i && 0 < this.distanceX
            ? (n = this.instance.previous(300))
            : i && this.distanceX < 0 && (n = this.instance.next(300)),
          !1 !== n || ("x" != t && "y" != t) || this.instance.centerSlide(200),
          this.$container.removeClass("fancybox-is-sliding");
      }),
      (n.prototype.endPanning = function () {
        var t, e, e;
        this.contentLastPos &&
          ((e =
            !1 === this.opts.momentum || 350 < this.dMs
              ? ((t = this.contentLastPos.left), this.contentLastPos.top)
              : ((t = this.contentLastPos.left + 500 * this.velocityX),
                this.contentLastPos.top + 500 * this.velocityY)),
          ((e = this.limitPosition(
            t,
            e,
            this.contentStartPos.width,
            this.contentStartPos.height
          )).width = this.contentStartPos.width),
          (e.height = this.contentStartPos.height),
          d.fancybox.animate(this.$content, e, 366));
      }),
      (n.prototype.endZooming = function () {
        var t,
          e,
          n,
          o,
          i = this.instance.current,
          s = this.newWidth,
          n = this.newHeight;
        this.contentLastPos &&
          ((t = this.contentLastPos.left),
          (o = {
            top: (e = this.contentLastPos.top),
            left: t,
            width: s,
            height: n,
            scaleX: 1,
            scaleY: 1,
          }),
          d.fancybox.setTranslate(this.$content, o),
          s < this.canvasWidth && n < this.canvasHeight
            ? this.instance.scaleToFit(150)
            : s > i.width || n > i.height
            ? this.instance.scaleToActual(
                this.centerPointStartX,
                this.centerPointStartY,
                150
              )
            : ((n = this.limitPosition(t, e, s, n)),
              d.fancybox.animate(this.$content, n, 150)));
      }),
      (n.prototype.onTap = function (e) {
        var t,
          n = this,
          o = d(e.target),
          i = n.instance,
          s = i.current,
          a = (e && f(e)) || n.startPoints,
          r = a[0] ? a[0].x - d(h).scrollLeft() - n.stagePos.left : 0,
          c = a[0] ? a[0].y - d(h).scrollTop() - n.stagePos.top : 0,
          l = function (t) {
            var t = s.opts[t];
            if ((t = d.isFunction(t) ? t.apply(i, [s, e]) : t))
              switch (t) {
                case "close":
                  i.close(n.startEvent);
                  break;
                case "toggleControls":
                  i.toggleControls();
                  break;
                case "next":
                  i.next();
                  break;
                case "nextOrClose":
                  1 < i.group.length ? i.next() : i.close(n.startEvent);
                  break;
                case "zoom":
                  "image" == s.type &&
                    (s.isLoaded || s.$ghost) &&
                    (i.canPan()
                      ? i.scaleToFit()
                      : i.isScaledDown()
                      ? i.scaleToActual(r, c)
                      : i.group.length < 2 && i.close(n.startEvent));
              }
          };
        if (
          (!e.originalEvent || 2 != e.originalEvent.button) &&
          (o.is("img") || !(r > o[0].clientWidth + o.offset().left))
        ) {
          if (
            o.is(
              ".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"
            )
          )
            t = "Outside";
          else if (o.is(".fancybox-slide")) t = "Slide";
          else {
            if (
              !i.current.$content ||
              !i.current.$content.find(o).addBack().filter(o).length
            )
              return;
            t = "Content";
          }
          if (n.tapped) {
            if (
              (clearTimeout(n.tapped),
              (n.tapped = null),
              50 < Math.abs(r - n.tapX) || 50 < Math.abs(c - n.tapY))
            )
              return this;
            l("dblclick" + t);
          } else
            (n.tapX = r),
              (n.tapY = c),
              s.opts["dblclick" + t] &&
              s.opts["dblclick" + t] !== s.opts["click" + t]
                ? (n.tapped = setTimeout(function () {
                    (n.tapped = null), i.isAnimating || l("click" + t);
                  }, 500))
                : l("click" + t);
          return this;
        }
      }),
      d(r)
        .on("onActivate.fb", function (t, e) {
          e && !e.Guestures && (e.Guestures = new n(e));
        })
        .on("beforeClose.fb", function (t, e) {
          e && e.Guestures && e.Guestures.destroy();
        });
  })(window, document, jQuery),
  (function (s, a) {
    "use strict";
    a.extend(!0, a.fancybox.defaults, {
      btnTpl: {
        slideShow:
          '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>',
      },
      slideShow: { autoStart: !1, speed: 3e3, progress: !0 },
    });
    var n = function (t) {
      (this.instance = t), this.init();
    };
    a.extend(n.prototype, {
      timer: null,
      isActive: !1,
      $button: null,
      init: function () {
        var t = this,
          e = t.instance,
          n = e.group[e.currIndex].opts.slideShow;
        (t.$button = e.$refs.toolbar
          .find("[data-fancybox-play]")
          .on("click", function () {
            t.toggle();
          })),
          e.group.length < 2 || !n
            ? t.$button.hide()
            : n.progress &&
              (t.$progress = a(
                '<div class="fancybox-progress"></div>'
              ).appendTo(e.$refs.inner));
      },
      set: function (t) {
        var e = this.instance,
          n = e.current;
        n && (!0 === t || n.opts.loop || e.currIndex < e.group.length - 1)
          ? this.isActive &&
            "video" !== n.contentType &&
            (this.$progress &&
              a.fancybox.animate(
                this.$progress.show(),
                { scaleX: 1 },
                n.opts.slideShow.speed
              ),
            (this.timer = setTimeout(function () {
              e.current.opts.loop || e.current.index != e.group.length - 1
                ? e.next()
                : e.jumpTo(0);
            }, n.opts.slideShow.speed)))
          : (this.stop(), (e.idleSecondsCounter = 0), e.showControls());
      },
      clear: function () {
        clearTimeout(this.timer),
          (this.timer = null),
          this.$progress && this.$progress.removeAttr("style").hide();
      },
      start: function () {
        var t = this.instance.current;
        t &&
          (this.$button
            .attr(
              "title",
              (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_STOP
            )
            .removeClass("fancybox-button--play")
            .addClass("fancybox-button--pause"),
          (this.isActive = !0),
          t.isComplete && this.set(!0),
          this.instance.trigger("onSlideShowChange", !0));
      },
      stop: function () {
        var t = this.instance.current;
        this.clear(),
          this.$button
            .attr(
              "title",
              (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_START
            )
            .removeClass("fancybox-button--pause")
            .addClass("fancybox-button--play"),
          (this.isActive = !1),
          this.instance.trigger("onSlideShowChange", !1),
          this.$progress && this.$progress.removeAttr("style").hide();
      },
      toggle: function () {
        this.isActive ? this.stop() : this.start();
      },
    }),
      a(s).on({
        "onInit.fb": function (t, e) {
          e && !e.SlideShow && (e.SlideShow = new n(e));
        },
        "beforeShow.fb": function (t, e, n, o) {
          var e = e && e.SlideShow;
          o
            ? e && n.opts.slideShow.autoStart && e.start()
            : e && e.isActive && e.clear();
        },
        "afterShow.fb": function (t, e, n) {
          var e = e && e.SlideShow;
          e && e.isActive && e.set();
        },
        "afterKeydown.fb": function (t, e, n, o, i) {
          var e = e && e.SlideShow;
          !e ||
            !n.opts.slideShow ||
            (80 !== i && 32 !== i) ||
            a(s.activeElement).is("button,a,input") ||
            (o.preventDefault(), e.toggle());
        },
        "beforeClose.fb onDeactivate.fb": function (t, e) {
          var e = e && e.SlideShow;
          e && e.stop();
        },
      }),
      a(s).on("visibilitychange", function () {
        var t = a.fancybox.getInstance(),
          t = t && t.SlideShow;
        t && t.isActive && (s.hidden ? t.clear() : t.set());
      });
  })(document, jQuery),
  (function (s, n) {
    "use strict";
    var o = (function () {
        for (
          var t = [
              [
                "requestFullscreen",
                "exitFullscreen",
                "fullscreenElement",
                "fullscreenEnabled",
                "fullscreenchange",
                "fullscreenerror",
              ],
              [
                "webkitRequestFullscreen",
                "webkitExitFullscreen",
                "webkitFullscreenElement",
                "webkitFullscreenEnabled",
                "webkitfullscreenchange",
                "webkitfullscreenerror",
              ],
              [
                "webkitRequestFullScreen",
                "webkitCancelFullScreen",
                "webkitCurrentFullScreenElement",
                "webkitCancelFullScreen",
                "webkitfullscreenchange",
                "webkitfullscreenerror",
              ],
              [
                "mozRequestFullScreen",
                "mozCancelFullScreen",
                "mozFullScreenElement",
                "mozFullScreenEnabled",
                "mozfullscreenchange",
                "mozfullscreenerror",
              ],
              [
                "msRequestFullscreen",
                "msExitFullscreen",
                "msFullscreenElement",
                "msFullscreenEnabled",
                "MSFullscreenChange",
                "MSFullscreenError",
              ],
            ],
            e = {},
            n = 0;
          n < t.length;
          n++
        ) {
          var o = t[n];
          if (o && o[1] in s) {
            for (var i = 0; i < o.length; i++) e[t[0][i]] = o[i];
            return e;
          }
        }
        return !1;
      })(),
      i;
    o &&
      (n.extend(!0, n.fancybox.defaults, {
        btnTpl: {
          fullScreen:
            '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>',
        },
        fullScreen: {
          autoStart: !(i = {
            request: function (t) {
              (t = t || s.documentElement)[o.requestFullscreen](
                t.ALLOW_KEYBOARD_INPUT
              );
            },
            exit: function () {
              s[o.exitFullscreen]();
            },
            toggle: function (t) {
              (t = t || s.documentElement),
                this.isFullscreen() ? this.exit() : this.request(t);
            },
            isFullscreen: function () {
              return Boolean(s[o.fullscreenElement]);
            },
            enabled: function () {
              return Boolean(s[o.fullscreenEnabled]);
            },
          }),
        },
      }),
      n(s).on(o.fullscreenchange, function () {
        var t = i.isFullscreen(),
          e = n.fancybox.getInstance();
        e &&
          (e.current &&
            "image" === e.current.type &&
            e.isAnimating &&
            ((e.isAnimating = !1),
            e.update(!0, !0, 0),
            e.isComplete || e.complete()),
          e.trigger("onFullscreenChange", t),
          e.$refs.container.toggleClass("fancybox-is-fullscreen", t),
          e.$refs.toolbar
            .find("[data-fancybox-fullscreen]")
            .toggleClass("fancybox-button--fsenter", !t)
            .toggleClass("fancybox-button--fsexit", t));
      })),
      n(s).on({
        "onInit.fb": function (t, e) {
          o
            ? e && e.group[e.currIndex].opts.fullScreen
              ? (e.$refs.container.on(
                  "click.fb-fullscreen",
                  "[data-fancybox-fullscreen]",
                  function (t) {
                    t.stopPropagation(), t.preventDefault(), i.toggle();
                  }
                ),
                e.opts.fullScreen &&
                  !0 === e.opts.fullScreen.autoStart &&
                  i.request(),
                (e.FullScreen = i))
              : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()
            : e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();
        },
        "afterKeydown.fb": function (t, e, n, o, i) {
          e &&
            e.FullScreen &&
            70 === i &&
            (o.preventDefault(), e.FullScreen.toggle());
        },
        "beforeClose.fb": function (t, e) {
          e &&
            e.FullScreen &&
            e.$refs.container.hasClass("fancybox-is-fullscreen") &&
            i.exit();
        },
      });
  })(document, jQuery),
  (function (t, i) {
    "use strict";
    var s = "fancybox-thumbs";
    i.fancybox.defaults = i.extend(
      !0,
      {
        btnTpl: {
          thumbs:
            '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>',
        },
        thumbs: {
          autoStart: !1,
          hideOnClose: !0,
          parentEl: ".fancybox-container",
          axis: "y",
        },
      },
      i.fancybox.defaults
    );
    var o = function (t) {
      this.init(t);
    };
    i.extend(o.prototype, {
      $button: null,
      $grid: null,
      $list: null,
      isVisible: !1,
      isActive: !1,
      init: function (t) {
        var e = this,
          n = t.group,
          o = 0;
        (e.instance = t),
          (e.opts = n[t.currIndex].opts.thumbs),
          ((t.Thumbs = e).$button = t.$refs.toolbar.find(
            "[data-fancybox-thumbs]"
          ));
        for (
          var i = 0, s = n.length;
          i < s && (n[i].thumb && o++, !(1 < o));
          i++
        );
        1 < o && e.opts
          ? (e.$button.removeAttr("style").on("click", function () {
              e.toggle();
            }),
            (e.isActive = !0))
          : e.$button.hide();
      },
      create: function () {
        var n,
          t = this.instance,
          e = this.opts.parentEl,
          o = [];
        this.$grid ||
          ((this.$grid = i(
            '<div class="' + s + " " + s + "-" + this.opts.axis + '"></div>'
          ).appendTo(t.$refs.container.find(e).addBack().filter(e))),
          this.$grid.on("click", "a", function () {
            t.jumpTo(i(this).attr("data-index"));
          })),
          this.$list ||
            (this.$list = i('<div class="' + s + '__list">').appendTo(
              this.$grid
            )),
          i.each(t.group, function (t, e) {
            (n = e.thumb) || "image" !== e.type || (n = e.src),
              o.push(
                '<a href="javascript:;" tabindex="0" data-index="' +
                  t +
                  '"' +
                  (n && n.length
                    ? ' style="background-image:url(' + n + ')"'
                    : 'class="fancybox-thumbs-missing"') +
                  "></a>"
              );
          }),
          (this.$list[0].innerHTML = o.join("")),
          "x" === this.opts.axis &&
            this.$list.width(
              parseInt(this.$grid.css("padding-right"), 10) +
                t.group.length * this.$list.children().eq(0).outerWidth(!0)
            );
      },
      focus: function (t) {
        var e,
          n,
          o = this.$list,
          i = this.$grid;
        this.instance.current &&
          ((n = (e = o
            .children()
            .removeClass("fancybox-thumbs-active")
            .filter('[data-index="' + this.instance.current.index + '"]')
            .addClass("fancybox-thumbs-active")).position()),
          "y" === this.opts.axis &&
          (n.top < 0 || n.top > o.height() - e.outerHeight())
            ? o.stop().animate({ scrollTop: o.scrollTop() + n.top }, t)
            : "x" === this.opts.axis &&
              (n.left < i.scrollLeft() ||
                n.left > i.scrollLeft() + (i.width() - e.outerWidth())) &&
              o.parent().stop().animate({ scrollLeft: n.left }, t));
      },
      update: function () {
        this.instance.$refs.container.toggleClass(
          "fancybox-show-thumbs",
          this.isVisible
        ),
          this.isVisible
            ? (this.$grid || this.create(),
              this.instance.trigger("onThumbsShow"),
              this.focus(0))
            : this.$grid && this.instance.trigger("onThumbsHide"),
          this.instance.update();
      },
      hide: function () {
        (this.isVisible = !1), this.update();
      },
      show: function () {
        (this.isVisible = !0), this.update();
      },
      toggle: function () {
        (this.isVisible = !this.isVisible), this.update();
      },
    }),
      i(t).on({
        "onInit.fb": function (t, e) {
          var n;
          e &&
            !e.Thumbs &&
            (n = new o(e)).isActive &&
            !0 === n.opts.autoStart &&
            n.show();
        },
        "beforeShow.fb": function (t, e, n, o) {
          var e = e && e.Thumbs;
          e && e.isVisible && e.focus(o ? 0 : 250);
        },
        "afterKeydown.fb": function (t, e, n, o, i) {
          var e = e && e.Thumbs;
          e && e.isActive && 71 === i && (o.preventDefault(), e.toggle());
        },
        "beforeClose.fb": function (t, e) {
          var e = e && e.Thumbs;
          e && e.isVisible && !1 !== e.opts.hideOnClose && e.$grid.hide();
        },
      });
  })(document, jQuery),
  (function (t, s) {
    "use strict";
    s.extend(!0, s.fancybox.defaults, {
      btnTpl: {
        share:
          '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>',
      },
      share: {
        url: function (t, e) {
          return (
            (!t.currentHash &&
              "inline" !== e.type &&
              "html" !== e.type &&
              (e.origSrc || e.src)) ||
            window.location
          );
        },
        tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>',
      },
    }),
      s(t).on("click", "[data-fancybox-share]", function () {
        var t,
          t,
          e,
          n,
          o = s.fancybox.getInstance(),
          i = o.current || null;
        i &&
          ("function" === s.type(i.opts.share.url) &&
            (t = i.opts.share.url.apply(i, [o, i])),
          (t = i.opts.share.tpl
            .replace(
              /\{\{media\}\}/g,
              "image" === i.type ? encodeURIComponent(i.src) : ""
            )
            .replace(/\{\{url\}\}/g, encodeURIComponent(t))
            .replace(
              /\{\{url_raw\}\}/g,
              ((n = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;",
                "`": "&#x60;",
                "=": "&#x3D;",
              }),
              String(t).replace(/[&<>"'`=\/]/g, function (t) {
                return n[t];
              }))
            )
            .replace(
              /\{\{descr\}\}/g,
              o.$caption ? encodeURIComponent(o.$caption.text()) : ""
            )),
          s.fancybox.open({
            src: o.translate(o, t),
            type: "html",
            opts: {
              touch: !1,
              animationEffect: !1,
              afterLoad: function (t, e) {
                o.$refs.container.one("beforeClose.fb", function () {
                  t.close(null, 0);
                }),
                  e.$content.find(".fancybox-share__button").click(function () {
                    return (
                      window.open(this.href, "Share", "width=550, height=450"),
                      !1
                    );
                  });
              },
              mobile: { autoFocus: !1 },
            },
          }));
      });
  })(document, jQuery),
  (function (s, a, o) {
    "use strict";
    function i() {
      var t = s.location.hash.substr(1),
        e = t.split("-"),
        n =
          (1 < e.length &&
            /^\+?\d+$/.test(e[e.length - 1]) &&
            parseInt(e.pop(-1), 10)) ||
          1;
      return { hash: t, index: n < 1 ? 1 : n, gallery: e.join("-") };
    }
    function e(t) {
      "" !== t.gallery &&
        o("[data-fancybox='" + o.escapeSelector(t.gallery) + "']")
          .eq(t.index - 1)
          .focus()
          .trigger("click.fb-start");
    }
    function r(t) {
      var e, e;
      return (
        !!t &&
        "" !==
          (e =
            (e = (t.current || t).opts).hash ||
            (e.$orig
              ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger")
              : "")) &&
        e
      );
    }
    o.escapeSelector ||
      (o.escapeSelector = function (t) {
        return (t + "").replace(
          /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
          function (t, e) {
            return e
              ? "\0" === t
                ? "ï¿½"
                : t.slice(0, -1) +
                  "\\" +
                  t.charCodeAt(t.length - 1).toString(16) +
                  " "
              : "\\" + t;
          }
        );
      }),
      o(function () {
        !1 !== o.fancybox.defaults.hash &&
          (o(a).on({
            "onInit.fb": function (t, e) {
              var n, o;
              !1 !== e.group[e.currIndex].opts.hash &&
                ((n = i()),
                (o = r(e)) &&
                  n.gallery &&
                  o == n.gallery &&
                  (e.currIndex = n.index - 1));
            },
            "beforeShow.fb": function (t, e, n, o) {
              var i;
              n &&
                !1 !== n.opts.hash &&
                (i = r(e)) &&
                ((e.currentHash =
                  i + (1 < e.group.length ? "-" + (n.index + 1) : "")),
                s.location.hash !== "#" + e.currentHash &&
                  (o && !e.origHash && (e.origHash = s.location.hash),
                  e.hashTimer && clearTimeout(e.hashTimer),
                  (e.hashTimer = setTimeout(function () {
                    "replaceState" in s.history
                      ? (s.history[o ? "pushState" : "replaceState"](
                          {},
                          a.title,
                          s.location.pathname +
                            s.location.search +
                            "#" +
                            e.currentHash
                        ),
                        o && (e.hasCreatedHistory = !0))
                      : (s.location.hash = e.currentHash),
                      (e.hashTimer = null);
                  }, 300))));
            },
            "beforeClose.fb": function (t, e, n) {
              n &&
                !1 !== n.opts.hash &&
                (clearTimeout(e.hashTimer),
                e.currentHash && e.hasCreatedHistory
                  ? s.history.back()
                  : e.currentHash &&
                    ("replaceState" in s.history
                      ? s.history.replaceState(
                          {},
                          a.title,
                          s.location.pathname +
                            s.location.search +
                            (e.origHash || "")
                        )
                      : (s.location.hash = e.origHash)),
                (e.currentHash = null));
            },
          }),
          o(s).on("hashchange.fb", function () {
            var t = i(),
              n = null;
            o.each(o(".fancybox-container").get().reverse(), function (t, e) {
              var e = o(e).data("FancyBox");
              if (e && e.currentHash) return (n = e), !1;
            }),
              n
                ? n.currentHash === t.gallery + "-" + t.index ||
                  (1 === t.index && n.currentHash == t.gallery) ||
                  ((n.currentHash = null), n.close())
                : "" !== t.gallery && e(t);
          }),
          setTimeout(function () {
            o.fancybox.getInstance() || e(i());
          }, 50));
      });
  })(window, document, jQuery),
  (function (t, e) {
    "use strict";
    var i = new Date().getTime();
    e(t).on({
      "onInit.fb": function (t, o, e) {
        o.$refs.stage.on(
          "mousewheel DOMMouseScroll wheel MozMousePixelScroll",
          function (t) {
            var e = o.current,
              n = new Date().getTime();
            o.group.length < 2 ||
              !1 === e.opts.wheel ||
              ("auto" === e.opts.wheel && "image" !== e.type) ||
              (t.preventDefault(),
              t.stopPropagation(),
              e.$slide.hasClass("fancybox-animated") ||
                ((t = t.originalEvent || t),
                n - i < 250 ||
                  ((i = n),
                  o[
                    (-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0
                      ? "next"
                      : "previous"
                  ]())));
          }
        );
      },
    });
  })(document, jQuery);
/*
 * anime.js v3.2.1
 * (c) 2020 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */

!(function (n, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : (n.anime = e());
})(this, function () {
  "use strict";
  var n = {
      update: null,
      begin: null,
      loopBegin: null,
      changeBegin: null,
      change: null,
      changeComplete: null,
      loopComplete: null,
      complete: null,
      loop: 1,
      direction: "normal",
      autoplay: !0,
      timelineOffset: 0,
    },
    e = {
      duration: 1e3,
      delay: 0,
      endDelay: 0,
      easing: "easeOutElastic(1, .5)",
      round: 0,
    },
    t = [
      "translateX",
      "translateY",
      "translateZ",
      "rotate",
      "rotateX",
      "rotateY",
      "rotateZ",
      "scale",
      "scaleX",
      "scaleY",
      "scaleZ",
      "skew",
      "skewX",
      "skewY",
      "perspective",
      "matrix",
      "matrix3d",
    ],
    r = { CSS: {}, springs: {} };
  function a(n, e, t) {
    return Math.min(Math.max(n, e), t);
  }
  function o(n, e) {
    return n.indexOf(e) > -1;
  }
  function u(n, e) {
    return n.apply(null, e);
  }
  var i = {
    arr: function (n) {
      return Array.isArray(n);
    },
    obj: function (n) {
      return o(Object.prototype.toString.call(n), "Object");
    },
    pth: function (n) {
      return i.obj(n) && n.hasOwnProperty("totalLength");
    },
    svg: function (n) {
      return n instanceof SVGElement;
    },
    inp: function (n) {
      return n instanceof HTMLInputElement;
    },
    dom: function (n) {
      return n.nodeType || i.svg(n);
    },
    str: function (n) {
      return "string" == typeof n;
    },
    fnc: function (n) {
      return "function" == typeof n;
    },
    und: function (n) {
      return void 0 === n;
    },
    nil: function (n) {
      return i.und(n) || null === n;
    },
    hex: function (n) {
      return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n);
    },
    rgb: function (n) {
      return /^rgb/.test(n);
    },
    hsl: function (n) {
      return /^hsl/.test(n);
    },
    col: function (n) {
      return i.hex(n) || i.rgb(n) || i.hsl(n);
    },
    key: function (t) {
      return (
        !n.hasOwnProperty(t) &&
        !e.hasOwnProperty(t) &&
        "targets" !== t &&
        "keyframes" !== t
      );
    },
  };
  function c(n) {
    var e = /\(([^)]+)\)/.exec(n);
    return e
      ? e[1].split(",").map(function (n) {
          return parseFloat(n);
        })
      : [];
  }
  function s(n, e) {
    var t = c(n),
      o = a(i.und(t[0]) ? 1 : t[0], 0.1, 100),
      u = a(i.und(t[1]) ? 100 : t[1], 0.1, 100),
      s = a(i.und(t[2]) ? 10 : t[2], 0.1, 100),
      f = a(i.und(t[3]) ? 0 : t[3], 0.1, 100),
      l = Math.sqrt(u / o),
      d = s / (2 * Math.sqrt(u * o)),
      p = d < 1 ? l * Math.sqrt(1 - d * d) : 0,
      v = 1,
      h = d < 1 ? (d * l - f) / p : -f + l;
    function g(n) {
      var t = e ? (e * n) / 1e3 : n;
      return (
        (t =
          d < 1
            ? Math.exp(-t * d * l) * (v * Math.cos(p * t) + h * Math.sin(p * t))
            : (v + h * t) * Math.exp(-t * l)),
        0 === n || 1 === n ? n : 1 - t
      );
    }
    return e
      ? g
      : function () {
          var e = r.springs[n];
          if (e) return e;
          for (var t = 0, a = 0; ; )
            if (1 === g((t += 1 / 6))) {
              if (++a >= 16) break;
            } else a = 0;
          var o = t * (1 / 6) * 1e3;
          return (r.springs[n] = o), o;
        };
  }
  function f(n) {
    return (
      void 0 === n && (n = 10),
      function (e) {
        return Math.ceil(a(e, 1e-6, 1) * n) * (1 / n);
      }
    );
  }
  var l,
    d,
    p = (function () {
      var n = 11,
        e = 1 / (n - 1);
      function t(n, e) {
        return 1 - 3 * e + 3 * n;
      }
      function r(n, e) {
        return 3 * e - 6 * n;
      }
      function a(n) {
        return 3 * n;
      }
      function o(n, e, o) {
        return ((t(e, o) * n + r(e, o)) * n + a(e)) * n;
      }
      function u(n, e, o) {
        return 3 * t(e, o) * n * n + 2 * r(e, o) * n + a(e);
      }
      return function (t, r, a, i) {
        if (0 <= t && t <= 1 && 0 <= a && a <= 1) {
          var c = new Float32Array(n);
          if (t !== r || a !== i)
            for (var s = 0; s < n; ++s) c[s] = o(s * e, t, a);
          return function (n) {
            return t === r && a === i
              ? n
              : 0 === n || 1 === n
              ? n
              : o(f(n), r, i);
          };
        }
        function f(r) {
          for (var i = 0, s = 1, f = n - 1; s !== f && c[s] <= r; ++s) i += e;
          var l = i + ((r - c[--s]) / (c[s + 1] - c[s])) * e,
            d = u(l, t, a);
          return d >= 0.001
            ? (function (n, e, t, r) {
                for (var a = 0; a < 4; ++a) {
                  var i = u(e, t, r);
                  if (0 === i) return e;
                  e -= (o(e, t, r) - n) / i;
                }
                return e;
              })(r, l, t, a)
            : 0 === d
            ? l
            : (function (n, e, t, r, a) {
                for (
                  var u, i, c = 0;
                  (u = o((i = e + (t - e) / 2), r, a) - n) > 0
                    ? (t = i)
                    : (e = i),
                    Math.abs(u) > 1e-7 && ++c < 10;

                );
                return i;
              })(r, i, i + e, t, a);
        }
      };
    })(),
    v =
      ((l = {
        linear: function () {
          return function (n) {
            return n;
          };
        },
      }),
      (d = {
        Sine: function () {
          return function (n) {
            return 1 - Math.cos((n * Math.PI) / 2);
          };
        },
        Circ: function () {
          return function (n) {
            return 1 - Math.sqrt(1 - n * n);
          };
        },
        Back: function () {
          return function (n) {
            return n * n * (3 * n - 2);
          };
        },
        Bounce: function () {
          return function (n) {
            for (var e, t = 4; n < ((e = Math.pow(2, --t)) - 1) / 11; );
            return (
              1 / Math.pow(4, 3 - t) -
              7.5625 * Math.pow((3 * e - 2) / 22 - n, 2)
            );
          };
        },
        Elastic: function (n, e) {
          void 0 === n && (n = 1), void 0 === e && (e = 0.5);
          var t = a(n, 1, 10),
            r = a(e, 0.1, 2);
          return function (n) {
            return 0 === n || 1 === n
              ? n
              : -t *
                  Math.pow(2, 10 * (n - 1)) *
                  Math.sin(
                    ((n - 1 - (r / (2 * Math.PI)) * Math.asin(1 / t)) *
                      (2 * Math.PI)) /
                      r
                  );
          };
        },
      }),
      ["Quad", "Cubic", "Quart", "Quint", "Expo"].forEach(function (n, e) {
        d[n] = function () {
          return function (n) {
            return Math.pow(n, e + 2);
          };
        };
      }),
      Object.keys(d).forEach(function (n) {
        var e = d[n];
        (l["easeIn" + n] = e),
          (l["easeOut" + n] = function (n, t) {
            return function (r) {
              return 1 - e(n, t)(1 - r);
            };
          }),
          (l["easeInOut" + n] = function (n, t) {
            return function (r) {
              return r < 0.5 ? e(n, t)(2 * r) / 2 : 1 - e(n, t)(-2 * r + 2) / 2;
            };
          }),
          (l["easeOutIn" + n] = function (n, t) {
            return function (r) {
              return r < 0.5
                ? (1 - e(n, t)(1 - 2 * r)) / 2
                : (e(n, t)(2 * r - 1) + 1) / 2;
            };
          });
      }),
      l);
  function h(n, e) {
    if (i.fnc(n)) return n;
    var t = n.split("(")[0],
      r = v[t],
      a = c(n);
    switch (t) {
      case "spring":
        return s(n, e);
      case "cubicBezier":
        return u(p, a);
      case "steps":
        return u(f, a);
      default:
        return u(r, a);
    }
  }
  function g(n) {
    try {
      return document.querySelectorAll(n);
    } catch (n) {
      return;
    }
  }
  function m(n, e) {
    for (
      var t = n.length,
        r = arguments.length >= 2 ? arguments[1] : void 0,
        a = [],
        o = 0;
      o < t;
      o++
    )
      if (o in n) {
        var u = n[o];
        e.call(r, u, o, n) && a.push(u);
      }
    return a;
  }
  function y(n) {
    return n.reduce(function (n, e) {
      return n.concat(i.arr(e) ? y(e) : e);
    }, []);
  }
  function b(n) {
    return i.arr(n)
      ? n
      : (i.str(n) && (n = g(n) || n),
        n instanceof NodeList || n instanceof HTMLCollection
          ? [].slice.call(n)
          : [n]);
  }
  function M(n, e) {
    return n.some(function (n) {
      return n === e;
    });
  }
  function x(n) {
    var e = {};
    for (var t in n) e[t] = n[t];
    return e;
  }
  function w(n, e) {
    var t = x(n);
    for (var r in n) t[r] = e.hasOwnProperty(r) ? e[r] : n[r];
    return t;
  }
  function k(n, e) {
    var t = x(n);
    for (var r in e) t[r] = i.und(n[r]) ? e[r] : n[r];
    return t;
  }
  function O(n) {
    return i.rgb(n)
      ? (t = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec((e = n)))
        ? "rgba(" + t[1] + ",1)"
        : e
      : i.hex(n)
      ? ((r = n.replace(
          /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
          function (n, e, t, r) {
            return e + e + t + t + r + r;
          }
        )),
        (a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r)),
        "rgba(" +
          parseInt(a[1], 16) +
          "," +
          parseInt(a[2], 16) +
          "," +
          parseInt(a[3], 16) +
          ",1)")
      : i.hsl(n)
      ? (function (n) {
          var e,
            t,
            r,
            a =
              /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n) ||
              /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n),
            o = parseInt(a[1], 10) / 360,
            u = parseInt(a[2], 10) / 100,
            i = parseInt(a[3], 10) / 100,
            c = a[4] || 1;
          function s(n, e, t) {
            return (
              t < 0 && (t += 1),
              t > 1 && (t -= 1),
              t < 1 / 6
                ? n + 6 * (e - n) * t
                : t < 0.5
                ? e
                : t < 2 / 3
                ? n + (e - n) * (2 / 3 - t) * 6
                : n
            );
          }
          if (0 == u) e = t = r = i;
          else {
            var f = i < 0.5 ? i * (1 + u) : i + u - i * u,
              l = 2 * i - f;
            (e = s(l, f, o + 1 / 3)),
              (t = s(l, f, o)),
              (r = s(l, f, o - 1 / 3));
          }
          return (
            "rgba(" + 255 * e + "," + 255 * t + "," + 255 * r + "," + c + ")"
          );
        })(n)
      : void 0;
    var e, t, r, a;
  }
  function C(n) {
    var e =
      /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(
        n
      );
    if (e) return e[1];
  }
  function P(n, e) {
    return i.fnc(n) ? n(e.target, e.id, e.total) : n;
  }
  function I(n, e) {
    return n.getAttribute(e);
  }
  function D(n, e, t) {
    if (M([t, "deg", "rad", "turn"], C(e))) return e;
    var a = r.CSS[e + t];
    if (!i.und(a)) return a;
    var o = document.createElement(n.tagName),
      u =
        n.parentNode && n.parentNode !== document
          ? n.parentNode
          : document.body;
    u.appendChild(o),
      (o.style.position = "absolute"),
      (o.style.width = 100 + t);
    var c = 100 / o.offsetWidth;
    u.removeChild(o);
    var s = c * parseFloat(e);
    return (r.CSS[e + t] = s), s;
  }
  function B(n, e, t) {
    if (e in n.style) {
      var r = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
        a = n.style[e] || getComputedStyle(n).getPropertyValue(r) || "0";
      return t ? D(n, a, t) : a;
    }
  }
  function T(n, e) {
    return i.dom(n) && !i.inp(n) && (!i.nil(I(n, e)) || (i.svg(n) && n[e]))
      ? "attribute"
      : i.dom(n) && M(t, e)
      ? "transform"
      : i.dom(n) && "transform" !== e && B(n, e)
      ? "css"
      : null != n[e]
      ? "object"
      : void 0;
  }
  function E(n) {
    if (i.dom(n)) {
      for (
        var e,
          t = n.style.transform || "",
          r = /(\w+)\(([^)]*)\)/g,
          a = new Map();
        (e = r.exec(t));

      )
        a.set(e[1], e[2]);
      return a;
    }
  }
  function F(n, e, t, r) {
    var a,
      u = o(e, "scale")
        ? 1
        : 0 +
          (o((a = e), "translate") || "perspective" === a
            ? "px"
            : o(a, "rotate") || o(a, "skew")
            ? "deg"
            : void 0),
      i = E(n).get(e) || u;
    return (
      t && (t.transforms.list.set(e, i), (t.transforms.last = e)),
      r ? D(n, i, r) : i
    );
  }
  function A(n, e, t, r) {
    switch (T(n, e)) {
      case "transform":
        return F(n, e, r, t);
      case "css":
        return B(n, e, t);
      case "attribute":
        return I(n, e);
      default:
        return n[e] || 0;
    }
  }
  function N(n, e) {
    var t = /^(\*=|\+=|-=)/.exec(n);
    if (!t) return n;
    var r = C(n) || 0,
      a = parseFloat(e),
      o = parseFloat(n.replace(t[0], ""));
    switch (t[0][0]) {
      case "+":
        return a + o + r;
      case "-":
        return a - o + r;
      case "*":
        return a * o + r;
    }
  }
  function S(n, e) {
    if (i.col(n)) return O(n);
    if (/\s/g.test(n)) return n;
    var t = C(n),
      r = t ? n.substr(0, n.length - t.length) : n;
    return e ? r + e : r;
  }
  function L(n, e) {
    return Math.sqrt(Math.pow(e.x - n.x, 2) + Math.pow(e.y - n.y, 2));
  }
  function j(n) {
    for (var e, t = n.points, r = 0, a = 0; a < t.numberOfItems; a++) {
      var o = t.getItem(a);
      a > 0 && (r += L(e, o)), (e = o);
    }
    return r;
  }
  function q(n) {
    if (n.getTotalLength) return n.getTotalLength();
    switch (n.tagName.toLowerCase()) {
      case "circle":
        return (o = n), 2 * Math.PI * I(o, "r");
      case "rect":
        return 2 * I((a = n), "width") + 2 * I(a, "height");
      case "line":
        return L(
          { x: I((r = n), "x1"), y: I(r, "y1") },
          { x: I(r, "x2"), y: I(r, "y2") }
        );
      case "polyline":
        return j(n);
      case "polygon":
        return (
          (t = (e = n).points),
          j(e) + L(t.getItem(t.numberOfItems - 1), t.getItem(0))
        );
    }
    var e, t, r, a, o;
  }
  function H(n, e) {
    var t = e || {},
      r =
        t.el ||
        (function (n) {
          for (var e = n.parentNode; i.svg(e) && i.svg(e.parentNode); )
            e = e.parentNode;
          return e;
        })(n),
      a = r.getBoundingClientRect(),
      o = I(r, "viewBox"),
      u = a.width,
      c = a.height,
      s = t.viewBox || (o ? o.split(" ") : [0, 0, u, c]);
    return {
      el: r,
      viewBox: s,
      x: s[0] / 1,
      y: s[1] / 1,
      w: u,
      h: c,
      vW: s[2],
      vH: s[3],
    };
  }
  function V(n, e, t) {
    function r(t) {
      void 0 === t && (t = 0);
      var r = e + t >= 1 ? e + t : 0;
      return n.el.getPointAtLength(r);
    }
    var a = H(n.el, n.svg),
      o = r(),
      u = r(-1),
      i = r(1),
      c = t ? 1 : a.w / a.vW,
      s = t ? 1 : a.h / a.vH;
    switch (n.property) {
      case "x":
        return (o.x - a.x) * c;
      case "y":
        return (o.y - a.y) * s;
      case "angle":
        return (180 * Math.atan2(i.y - u.y, i.x - u.x)) / Math.PI;
    }
  }
  function $(n, e) {
    var t = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
      r = S(i.pth(n) ? n.totalLength : n, e) + "";
    return {
      original: r,
      numbers: r.match(t) ? r.match(t).map(Number) : [0],
      strings: i.str(n) || e ? r.split(t) : [],
    };
  }
  function W(n) {
    return m(n ? y(i.arr(n) ? n.map(b) : b(n)) : [], function (n, e, t) {
      return t.indexOf(n) === e;
    });
  }
  function X(n) {
    var e = W(n);
    return e.map(function (n, t) {
      return { target: n, id: t, total: e.length, transforms: { list: E(n) } };
    });
  }
  function Y(n, e) {
    var t = x(e);
    if ((/^spring/.test(t.easing) && (t.duration = s(t.easing)), i.arr(n))) {
      var r = n.length;
      2 === r && !i.obj(n[0])
        ? (n = { value: n })
        : i.fnc(e.duration) || (t.duration = e.duration / r);
    }
    var a = i.arr(n) ? n : [n];
    return a
      .map(function (n, t) {
        var r = i.obj(n) && !i.pth(n) ? n : { value: n };
        return (
          i.und(r.delay) && (r.delay = t ? 0 : e.delay),
          i.und(r.endDelay) &&
            (r.endDelay = t === a.length - 1 ? e.endDelay : 0),
          r
        );
      })
      .map(function (n) {
        return k(n, t);
      });
  }
  function Z(n, e) {
    var t = [],
      r = e.keyframes;
    for (var a in (r &&
      (e = k(
        (function (n) {
          for (
            var e = m(
                y(
                  n.map(function (n) {
                    return Object.keys(n);
                  })
                ),
                function (n) {
                  return i.key(n);
                }
              ).reduce(function (n, e) {
                return n.indexOf(e) < 0 && n.push(e), n;
              }, []),
              t = {},
              r = function (r) {
                var a = e[r];
                t[a] = n.map(function (n) {
                  var e = {};
                  for (var t in n)
                    i.key(t) ? t == a && (e.value = n[t]) : (e[t] = n[t]);
                  return e;
                });
              },
              a = 0;
            a < e.length;
            a++
          )
            r(a);
          return t;
        })(r),
        e
      )),
    e))
      i.key(a) && t.push({ name: a, tweens: Y(e[a], n) });
    return t;
  }
  function G(n, e) {
    var t;
    return n.tweens.map(function (r) {
      var a = (function (n, e) {
          var t = {};
          for (var r in n) {
            var a = P(n[r], e);
            i.arr(a) &&
              1 ===
                (a = a.map(function (n) {
                  return P(n, e);
                })).length &&
              (a = a[0]),
              (t[r] = a);
          }
          return (
            (t.duration = parseFloat(t.duration)),
            (t.delay = parseFloat(t.delay)),
            t
          );
        })(r, e),
        o = a.value,
        u = i.arr(o) ? o[1] : o,
        c = C(u),
        s = A(e.target, n.name, c, e),
        f = t ? t.to.original : s,
        l = i.arr(o) ? o[0] : f,
        d = C(l) || C(s),
        p = c || d;
      return (
        i.und(u) && (u = f),
        (a.from = $(l, p)),
        (a.to = $(N(u, l), p)),
        (a.start = t ? t.end : 0),
        (a.end = a.start + a.delay + a.duration + a.endDelay),
        (a.easing = h(a.easing, a.duration)),
        (a.isPath = i.pth(o)),
        (a.isPathTargetInsideSVG = a.isPath && i.svg(e.target)),
        (a.isColor = i.col(a.from.original)),
        a.isColor && (a.round = 1),
        (t = a),
        a
      );
    });
  }
  var Q = {
    css: function (n, e, t) {
      return (n.style[e] = t);
    },
    attribute: function (n, e, t) {
      return n.setAttribute(e, t);
    },
    object: function (n, e, t) {
      return (n[e] = t);
    },
    transform: function (n, e, t, r, a) {
      if ((r.list.set(e, t), e === r.last || a)) {
        var o = "";
        r.list.forEach(function (n, e) {
          o += e + "(" + n + ") ";
        }),
          (n.style.transform = o);
      }
    },
  };
  function z(n, e) {
    X(n).forEach(function (n) {
      for (var t in e) {
        var r = P(e[t], n),
          a = n.target,
          o = C(r),
          u = A(a, t, o, n),
          i = N(S(r, o || C(u)), u),
          c = T(a, t);
        Q[c](a, t, i, n.transforms, !0);
      }
    });
  }
  function _(n, e) {
    return m(
      y(
        n.map(function (n) {
          return e.map(function (e) {
            return (function (n, e) {
              var t = T(n.target, e.name);
              if (t) {
                var r = G(e, n),
                  a = r[r.length - 1];
                return {
                  type: t,
                  property: e.name,
                  animatable: n,
                  tweens: r,
                  duration: a.end,
                  delay: r[0].delay,
                  endDelay: a.endDelay,
                };
              }
            })(n, e);
          });
        })
      ),
      function (n) {
        return !i.und(n);
      }
    );
  }
  function R(n, e) {
    var t = n.length,
      r = function (n) {
        return n.timelineOffset ? n.timelineOffset : 0;
      },
      a = {};
    return (
      (a.duration = t
        ? Math.max.apply(
            Math,
            n.map(function (n) {
              return r(n) + n.duration;
            })
          )
        : e.duration),
      (a.delay = t
        ? Math.min.apply(
            Math,
            n.map(function (n) {
              return r(n) + n.delay;
            })
          )
        : e.delay),
      (a.endDelay = t
        ? a.duration -
          Math.max.apply(
            Math,
            n.map(function (n) {
              return r(n) + n.duration - n.endDelay;
            })
          )
        : e.endDelay),
      a
    );
  }
  var J = 0;
  var K = [],
    U = (function () {
      var n;
      function e(t) {
        for (var r = K.length, a = 0; a < r; ) {
          var o = K[a];
          o.paused ? (K.splice(a, 1), r--) : (o.tick(t), a++);
        }
        n = a > 0 ? requestAnimationFrame(e) : void 0;
      }
      return (
        "undefined" != typeof document &&
          document.addEventListener("visibilitychange", function () {
            en.suspendWhenDocumentHidden &&
              (nn()
                ? (n = cancelAnimationFrame(n))
                : (K.forEach(function (n) {
                    return n._onDocumentVisibility();
                  }),
                  U()));
          }),
        function () {
          n ||
            (nn() && en.suspendWhenDocumentHidden) ||
            !(K.length > 0) ||
            (n = requestAnimationFrame(e));
        }
      );
    })();
  function nn() {
    return !!document && document.hidden;
  }
  function en(t) {
    void 0 === t && (t = {});
    var r,
      o = 0,
      u = 0,
      i = 0,
      c = 0,
      s = null;
    function f(n) {
      var e =
        window.Promise &&
        new Promise(function (n) {
          return (s = n);
        });
      return (n.finished = e), e;
    }
    var l,
      d,
      p,
      v,
      h,
      g,
      y,
      b,
      M =
        ((d = w(n, (l = t))),
        (p = w(e, l)),
        (v = Z(p, l)),
        (h = X(l.targets)),
        (g = _(h, v)),
        (y = R(g, p)),
        (b = J),
        J++,
        k(d, {
          id: b,
          children: [],
          animatables: h,
          animations: g,
          duration: y.duration,
          delay: y.delay,
          endDelay: y.endDelay,
        }));
    f(M);
    function x() {
      var n = M.direction;
      "alternate" !== n &&
        (M.direction = "normal" !== n ? "normal" : "reverse"),
        (M.reversed = !M.reversed),
        r.forEach(function (n) {
          return (n.reversed = M.reversed);
        });
    }
    function O(n) {
      return M.reversed ? M.duration - n : n;
    }
    function C() {
      (o = 0), (u = O(M.currentTime) * (1 / en.speed));
    }
    function P(n, e) {
      e && e.seek(n - e.timelineOffset);
    }
    function I(n) {
      for (var e = 0, t = M.animations, r = t.length; e < r; ) {
        var o = t[e],
          u = o.animatable,
          i = o.tweens,
          c = i.length - 1,
          s = i[c];
        c &&
          (s =
            m(i, function (e) {
              return n < e.end;
            })[0] || s);
        for (
          var f = a(n - s.start - s.delay, 0, s.duration) / s.duration,
            l = isNaN(f) ? 1 : s.easing(f),
            d = s.to.strings,
            p = s.round,
            v = [],
            h = s.to.numbers.length,
            g = void 0,
            y = 0;
          y < h;
          y++
        ) {
          var b = void 0,
            x = s.to.numbers[y],
            w = s.from.numbers[y] || 0;
          (b = s.isPath
            ? V(s.value, l * x, s.isPathTargetInsideSVG)
            : w + l * (x - w)),
            p && ((s.isColor && y > 2) || (b = Math.round(b * p) / p)),
            v.push(b);
        }
        var k = d.length;
        if (k) {
          g = d[0];
          for (var O = 0; O < k; O++) {
            d[O];
            var C = d[O + 1],
              P = v[O];
            isNaN(P) || (g += C ? P + C : P + " ");
          }
        } else g = v[0];
        Q[o.type](u.target, o.property, g, u.transforms),
          (o.currentValue = g),
          e++;
      }
    }
    function D(n) {
      M[n] && !M.passThrough && M[n](M);
    }
    function B(n) {
      var e = M.duration,
        t = M.delay,
        l = e - M.endDelay,
        d = O(n);
      (M.progress = a((d / e) * 100, 0, 100)),
        (M.reversePlayback = d < M.currentTime),
        r &&
          (function (n) {
            if (M.reversePlayback) for (var e = c; e--; ) P(n, r[e]);
            else for (var t = 0; t < c; t++) P(n, r[t]);
          })(d),
        !M.began && M.currentTime > 0 && ((M.began = !0), D("begin")),
        !M.loopBegan &&
          M.currentTime > 0 &&
          ((M.loopBegan = !0), D("loopBegin")),
        d <= t && 0 !== M.currentTime && I(0),
        ((d >= l && M.currentTime !== e) || !e) && I(e),
        d > t && d < l
          ? (M.changeBegan ||
              ((M.changeBegan = !0),
              (M.changeCompleted = !1),
              D("changeBegin")),
            D("change"),
            I(d))
          : M.changeBegan &&
            ((M.changeCompleted = !0),
            (M.changeBegan = !1),
            D("changeComplete")),
        (M.currentTime = a(d, 0, e)),
        M.began && D("update"),
        n >= e &&
          ((u = 0),
          M.remaining && !0 !== M.remaining && M.remaining--,
          M.remaining
            ? ((o = i),
              D("loopComplete"),
              (M.loopBegan = !1),
              "alternate" === M.direction && x())
            : ((M.paused = !0),
              M.completed ||
                ((M.completed = !0),
                D("loopComplete"),
                D("complete"),
                !M.passThrough && "Promise" in window && (s(), f(M)))));
    }
    return (
      (M.reset = function () {
        var n = M.direction;
        (M.passThrough = !1),
          (M.currentTime = 0),
          (M.progress = 0),
          (M.paused = !0),
          (M.began = !1),
          (M.loopBegan = !1),
          (M.changeBegan = !1),
          (M.completed = !1),
          (M.changeCompleted = !1),
          (M.reversePlayback = !1),
          (M.reversed = "reverse" === n),
          (M.remaining = M.loop),
          (r = M.children);
        for (var e = (c = r.length); e--; ) M.children[e].reset();
        ((M.reversed && !0 !== M.loop) ||
          ("alternate" === n && 1 === M.loop)) &&
          M.remaining++,
          I(M.reversed ? M.duration : 0);
      }),
      (M._onDocumentVisibility = C),
      (M.set = function (n, e) {
        return z(n, e), M;
      }),
      (M.tick = function (n) {
        (i = n), o || (o = i), B((i + (u - o)) * en.speed);
      }),
      (M.seek = function (n) {
        B(O(n));
      }),
      (M.pause = function () {
        (M.paused = !0), C();
      }),
      (M.play = function () {
        M.paused &&
          (M.completed && M.reset(), (M.paused = !1), K.push(M), C(), U());
      }),
      (M.reverse = function () {
        x(), (M.completed = !M.reversed), C();
      }),
      (M.restart = function () {
        M.reset(), M.play();
      }),
      (M.remove = function (n) {
        rn(W(n), M);
      }),
      M.reset(),
      M.autoplay && M.play(),
      M
    );
  }
  function tn(n, e) {
    for (var t = e.length; t--; )
      M(n, e[t].animatable.target) && e.splice(t, 1);
  }
  function rn(n, e) {
    var t = e.animations,
      r = e.children;
    tn(n, t);
    for (var a = r.length; a--; ) {
      var o = r[a],
        u = o.animations;
      tn(n, u), u.length || o.children.length || r.splice(a, 1);
    }
    t.length || r.length || e.pause();
  }
  return (
    (en.version = "3.2.1"),
    (en.speed = 1),
    (en.suspendWhenDocumentHidden = !0),
    (en.running = K),
    (en.remove = function (n) {
      for (var e = W(n), t = K.length; t--; ) rn(e, K[t]);
    }),
    (en.get = A),
    (en.set = z),
    (en.convertPx = D),
    (en.path = function (n, e) {
      var t = i.str(n) ? g(n)[0] : n,
        r = e || 100;
      return function (n) {
        return { property: n, el: t, svg: H(t), totalLength: q(t) * (r / 100) };
      };
    }),
    (en.setDashoffset = function (n) {
      var e = q(n);
      return n.setAttribute("stroke-dasharray", e), e;
    }),
    (en.stagger = function (n, e) {
      void 0 === e && (e = {});
      var t = e.direction || "normal",
        r = e.easing ? h(e.easing) : null,
        a = e.grid,
        o = e.axis,
        u = e.from || 0,
        c = "first" === u,
        s = "center" === u,
        f = "last" === u,
        l = i.arr(n),
        d = l ? parseFloat(n[0]) : parseFloat(n),
        p = l ? parseFloat(n[1]) : 0,
        v = C(l ? n[1] : n) || 0,
        g = e.start || 0 + (l ? d : 0),
        m = [],
        y = 0;
      return function (n, e, i) {
        if (
          (c && (u = 0), s && (u = (i - 1) / 2), f && (u = i - 1), !m.length)
        ) {
          for (var h = 0; h < i; h++) {
            if (a) {
              var b = s ? (a[0] - 1) / 2 : u % a[0],
                M = s ? (a[1] - 1) / 2 : Math.floor(u / a[0]),
                x = b - (h % a[0]),
                w = M - Math.floor(h / a[0]),
                k = Math.sqrt(x * x + w * w);
              "x" === o && (k = -x), "y" === o && (k = -w), m.push(k);
            } else m.push(Math.abs(u - h));
            y = Math.max.apply(Math, m);
          }
          r &&
            (m = m.map(function (n) {
              return r(n / y) * y;
            })),
            "reverse" === t &&
              (m = m.map(function (n) {
                return o ? (n < 0 ? -1 * n : -n) : Math.abs(y - n);
              }));
        }
        return g + (l ? (p - d) / y : d) * (Math.round(100 * m[e]) / 100) + v;
      };
    }),
    (en.timeline = function (n) {
      void 0 === n && (n = {});
      var t = en(n);
      return (
        (t.duration = 0),
        (t.add = function (r, a) {
          var o = K.indexOf(t),
            u = t.children;
          function c(n) {
            n.passThrough = !0;
          }
          o > -1 && K.splice(o, 1);
          for (var s = 0; s < u.length; s++) c(u[s]);
          var f = k(r, w(e, n));
          f.targets = f.targets || n.targets;
          var l = t.duration;
          (f.autoplay = !1),
            (f.direction = t.direction),
            (f.timelineOffset = i.und(a) ? l : N(a, l)),
            c(t),
            t.seek(f.timelineOffset);
          var d = en(f);
          c(d), u.push(d);
          var p = R(u, n);
          return (
            (t.delay = p.delay),
            (t.endDelay = p.endDelay),
            (t.duration = p.duration),
            t.seek(0),
            t.reset(),
            t.autoplay && t.play(),
            t
          );
        }),
        t
      );
    }),
    (en.easing = h),
    (en.penner = v),
    (en.random = function (n, e) {
      return Math.floor(Math.random() * (e - n + 1)) + n;
    }),
    en
  );
});
!(function () {
  "use strict";
  Math.sqrt(3), Math.sqrt(3);
  var L = 1 / 6;
  function t(t) {
    var t,
      t =
        "function" == typeof t
          ? t
          : t
          ? (function () {
              for (
                var i = 0,
                  e = 0,
                  s = 0,
                  n = 1,
                  t =
                    ((o = 4022871197),
                    function (t) {
                      t = t.toString();
                      for (var i = 0; i < t.length; i++) {
                        var e = 0.02519603282416938 * (o += t.charCodeAt(i));
                        (e -= o = e >>> 0),
                          (o = (e *= o) >>> 0),
                          (o += 4294967296 * (e -= o));
                      }
                      return 2.3283064365386963e-10 * (o >>> 0);
                    }),
                  o,
                  i = t(" "),
                  e = t(" "),
                  s = t(" "),
                  r = 0;
                r < arguments.length;
                r++
              )
                (i -= t(arguments[r])) < 0 && (i += 1),
                  (e -= t(arguments[r])) < 0 && (e += 1),
                  (s -= t(arguments[r])) < 0 && (s += 1);
              return (
                (t = null),
                function () {
                  var t = 2091639 * i + 2.3283064365386963e-10 * n;
                  return (i = e), (e = s), (s = t - (n = 0 | t));
                }
              );
            })(t)
          : Math.random;
    (this.p = e(t)),
      (this.perm = new Uint8Array(512)),
      (this.permMod12 = new Uint8Array(512));
    for (var i = 0; i < 512; i++)
      (this.perm[i] = this.p[255 & i]), (this.permMod12[i] = this.perm[i] % 12);
  }
  function e(t) {
    for (var i, e = new Uint8Array(256), i = 0; i < 256; i++) e[i] = i;
    for (i = 0; i < 255; i++) {
      var s = i + ~~(t() * (256 - i)),
        n = e[i];
      (e[i] = e[s]), (e[s] = n);
    }
    return e;
  }
  Math.sqrt(5),
    Math.sqrt(5),
    (t.prototype = {
      grad3: new Float32Array([
        1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1,
        0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1,
      ]),
      grad4: new Float32Array([
        0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1,
        1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1,
        1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1,
        1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1,
        0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1,
        0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0,
      ]),
      noise3D: function (t, i, e) {
        var s,
          n,
          o,
          r,
          a,
          h,
          c,
          d,
          l,
          u,
          f = this.permMod12,
          g = this.perm,
          p = this.grad3,
          m = (t + i + e) * (1 / 3),
          v = Math.floor(t + m),
          w = Math.floor(i + m),
          b = Math.floor(e + m),
          x = (v + w + b) * L,
          y = t - (v - x),
          M = i - (w - x),
          _ = e - (b - x),
          u =
            M <= y
              ? _ <= M
                ? ((l = d = a = 1), (c = h = 0))
                : ((l =
                    ((d =
                      ((c = _ <= y ? ((a = 1), (h = 0)) : ((h = a = 0), 1)),
                      1)),
                    0)),
                  1)
              : M < _
              ? ((d = h = a = 0), (l = c = 1))
              : y < _
              ? ((d = c = a = 0), (l = h = 1))
              : ((l = d = h = 1), (c = a = 0)),
          A = y - a + L,
          S = M - h + L,
          I = _ - c + L,
          C = y - d + 2 * L,
          O = M - l + 2 * L,
          k = _ - u + 2 * L,
          q = y - 1 + 0.5,
          z = M - 1 + 0.5,
          m = _ - 1 + 0.5,
          t = 255 & v,
          i = 255 & w,
          e = 255 & b,
          x = 0.6 - y * y - M * M - _ * _,
          x,
          s,
          v = 0.6 - A * A - S * S - I * I,
          c,
          n,
          w = 0.6 - C * C - O * O - k * k,
          u,
          o,
          b = 0.6 - q * q - z * z - m * m,
          e,
          r;
        return (
          32 *
          ((s =
            x < 0
              ? 0
              : (x *= x) *
                x *
                (p[(x = 3 * f[t + g[i + g[e]]])] * y +
                  p[1 + x] * M +
                  p[2 + x] * _)) +
            (n =
              v < 0
                ? 0
                : (v *= v) *
                  v *
                  (p[(c = 3 * f[t + a + g[i + h + g[e + c]]])] * A +
                    p[1 + c] * S +
                    p[2 + c] * I)) +
            (o =
              w < 0
                ? 0
                : (w *= w) *
                  w *
                  (p[(u = 3 * f[t + d + g[i + l + g[e + u]]])] * C +
                    p[1 + u] * O +
                    p[2 + u] * k)) +
            (r =
              b < 0
                ? 0
                : (b *= b) *
                  b *
                  (p[(e = 3 * f[1 + t + g[1 + i + g[1 + e]]])] * q +
                    p[1 + e] * z +
                    p[2 + e] * m)))
        );
      },
    }),
    (t._buildPermutationTable = e),
    "undefined" != typeof define &&
      define.amd &&
      define(function () {
        return t;
      }),
    "undefined" != typeof exports
      ? (exports.SimplexNoise = t)
      : "undefined" != typeof window && (window.SimplexNoise = t),
    "undefined" != typeof module && (module.exports = t);
})(),
  (function (t) {
    "use strict";
    const s = new SimplexNoise();
    function e(t, i) {
      (this.container = t),
        (this.row = i),
        this.setup(),
        this.events(),
        this.rafLoop();
      var e = this;
      setTimeout(function () {
        e.canvas.classList.add("loaded");
      });
    }
    const i = e.prototype;
    function n() {
      document
        .querySelectorAll("[data-nectar-animated-gradient-settings]")
        .forEach(function (t) {
          var i = t.querySelector(".row-bg-wrap");
          i && new e(i, t);
        });
    }
    (i.setup = function () {
      (this.canvas = document.createElement("canvas")),
        this.canvas.classList.add("nectar-animated-gradient"),
        this.container.appendChild(this.canvas),
        (this.ctx = this.canvas.getContext("2d")),
        (this.onMobile = window.innerWidth < 690),
        (this.orientationChanged = !1),
        (this.clock = 0),
        (this.resolution = this.onMobile ? 90 : 110),
        (this.resPercentage = 100 / this.resolution),
        (this.resPercentageNormalized = this.resPercentage / 100),
        this.canvas.setAttribute("height", this.resolution),
        this.canvas.setAttribute("width", this.resolution),
        (this.canvas.style = "width:100%; height: 100%; position: relative;"),
        (this.imgdata = this.ctx.getImageData(
          0,
          0,
          this.canvas.width,
          this.canvas.height
        )),
        (this.cx = this.canvas.width / 2),
        (this.cy = this.canvas.height / 2),
        (this.data = this.imgdata.data),
        (this.settings = {});
      let t = JSON.parse(
        this.row.getAttribute("data-nectar-animated-gradient-settings")
      );
      if (
        (Object.assign(
          this.settings,
          { speed: 1e3, color_1: !1, color_2: !1, blending_mode: "linear" },
          t
        ),
        (this.colorSpeed = 1300 == this.settings.speed ? 0.5 : 0.9),
        (this.colors = []),
        (this.settings.color_1 !== this.settings.color_2 &&
          0 != this.settings.color_2) ||
          (this.singleColor = !0),
        this.settings.color_1)
      ) {
        const t = this.rgbObj(this.settings.color_1);
        this.colors.push({ r: t.r, g: t.g, b: t.b });
      }
      if (this.settings.color_2) {
        const t = this.rgbObj(this.settings.color_2);
        this.colors.push({ r: t.r, g: t.g, b: t.b });
      }
    }),
      (i.events = function () {
        var t = this;
        this.trackInView(),
          window.addEventListener("resize", function () {
            (t.onMobile && !t.orientationChanged) || t.resize();
          }),
          window.addEventListener("orientationchange", function () {
            t.orientationChanged = !0;
          }),
          this.resize();
      }),
      (i.resize = function () {
        (this.containerW = this.container.clientWidth),
          (this.containerH = this.container.clientHeight);
        var t = this.containerH / this.containerW;
        this.aspectMod = t < 1 ? { x: 1.4, y: 1.4 * t } : { x: t / 3, y: 1 };
      }),
      (i.isSafari = function () {
        return (
          -1 != navigator.userAgent.indexOf("Safari") &&
          -1 == navigator.userAgent.indexOf("Chrome")
        );
      }),
      (i.trackInView = function () {
        if ("IntersectionObserver" in window) {
          let i = this;
          new IntersectionObserver(
            function (t) {
              t.forEach(function (t) {
                t.isIntersecting ? (i.inView = !0) : (i.inView = !1);
              });
            },
            { root: this.isSafari() ? null : document, rootMargin: "250px" }
          ).observe(this.container);
        }
      }),
      (i.rgbObj = function (t) {
        var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
        return (
          !!t && {
            r: parseInt(t[1], 16),
            g: parseInt(t[2], 16),
            b: parseInt(t[3], 16),
          }
        );
      }),
      (i.mix = function (t, i, e) {
        return t * (1 - e) + i * e;
      }),
      (i.mixed = function (t, i, e, s) {
        return this.singleColor
          ? this.colors[0][t]
          : "organic" == this.settings.blending_mode
          ? this.mix(
              this.colors[0][t],
              this.colors[1][t],
              (this.rotate(i, e, this.clock * this.colorSpeed) *
                this.resPercentageNormalized *
                3.5 *
                s) /
                2
            )
          : "linear" == this.settings.blending_mode
          ? this.mix(
              this.colors[0][t],
              this.colors[1][t],
              this.rotate(i, e, this.clock * this.colorSpeed) *
                this.resPercentageNormalized *
                2
            )
          : void 0;
      }),
      (i.rotate = function (t, i, e) {
        var s = (Math.PI / 180) * e,
          e = Math.cos(s),
          s = Math.sin(s);
        return e * (t - this.cx) + s * (i - this.cy) + this.cx;
      }),
      (i.rafLoop = function () {
        var t = this;
        if (this.inView) {
          for (var i = 0; i < this.resolution; i++)
            for (var e = 0; e < this.resolution; e++) {
              const t = s.noise3D(
                (i / this.resolution) * this.aspectMod.x,
                (e / this.resolution) * this.aspectMod.y,
                this.clock / this.settings.speed
              );
              (this.data[4 * (i + e * this.resolution) + 0] = this.mixed(
                "r",
                i,
                e,
                t
              )),
                (this.data[4 * (i + e * this.resolution) + 1] = this.mixed(
                  "g",
                  i,
                  e,
                  t
                )),
                (this.data[4 * (i + e * this.resolution) + 2] = this.mixed(
                  "b",
                  i,
                  e,
                  t
                )),
                (this.data[4 * (i + e * this.resolution) + 3] = 265 * t);
            }
          this.clock++, this.ctx.putImageData(this.imgdata, 0, 0);
        }
        requestAnimationFrame(function () {
          t.rafLoop();
        });
      }),
      t(document).ready(function () {
        void 0 !== window.vc_iframe || n(),
          t(window).on("vc_reload", function () {
            n();
          });
      });
  })(jQuery);
!(function (e, i) {
  "function" == typeof define && define.amd
    ? define("jquery-bridget/jquery-bridget", ["jquery"], function (t) {
        return i(e, t);
      })
    : "object" == typeof module && module.exports
    ? (module.exports = i(e, require("jquery")))
    : (e.jQueryBridget = i(e, e.jQuery));
})(window, function (t, e) {
  "use strict";
  var i = Array.prototype.slice,
    n = t.console,
    d =
      void 0 === n
        ? function () {}
        : function (t) {
            n.error(t);
          };
  function s(l, h, c) {
    (c = c || e || t.jQuery) &&
      (h.prototype.option ||
        (h.prototype.option = function (t) {
          c.isPlainObject(t) && (this.options = c.extend(!0, this.options, t));
        }),
      (c.fn[l] = function (t) {
        var n, e, s, o, r, a;
        return "string" == typeof t
          ? ((e = this),
            (s = t),
            (o = i.call(arguments, 1)),
            (a = "$()." + l + '("' + s + '")'),
            e.each(function (t, e) {
              var i = c.data(e, l),
                e,
                i;
              i
                ? (e = i[s]) && "_" != s.charAt(0)
                  ? ((i = e.apply(i, o)), (r = void 0 === r ? i : r))
                  : d(a + " is not a valid method")
                : d(l + " not initialized. Cannot call methods, i.e. " + a);
            }),
            void 0 !== r ? r : e)
          : ((n = t),
            this.each(function (t, e) {
              var i = c.data(e, l);
              i
                ? (i.option(n), i._init())
                : ((i = new h(e, n)), c.data(e, l, i));
            }),
            this);
      }),
      o(c));
  }
  function o(t) {
    !t || (t && t.bridget) || (t.bridget = s);
  }
  return o(e || t.jQuery), s;
}),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.EvEmitter = e());
  })("undefined" != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function (t, e) {
        if (t && e) {
          var i = (this._events = this._events || {}),
            t = (i[t] = i[t] || []);
          return -1 == t.indexOf(e) && t.push(e), this;
        }
      }),
      (e.once = function (t, e) {
        if (t && e) {
          this.on(t, e);
          var i = (this._onceEvents = this._onceEvents || {});
          return ((i[t] = i[t] || {})[e] = !0), this;
        }
      }),
      (e.off = function (t, e) {
        var t = this._events && this._events[t];
        if (t && t.length) {
          var e = t.indexOf(e);
          return -1 != e && t.splice(e, 1), this;
        }
      }),
      (e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          (i = i.slice(0)), (e = e || []);
          for (
            var n = this._onceEvents && this._onceEvents[t], s = 0;
            s < i.length;
            s++
          ) {
            var o = i[s];
            n && n[o] && (this.off(t, o), delete n[o]), o.apply(this, e);
          }
          return this;
        }
      }),
      (e.allOff = function () {
        delete this._events, delete this._onceEvents;
      }),
      t
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("get-size/get-size", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.getSize = e());
  })(window, function () {
    "use strict";
    function p(t) {
      var e = parseFloat(t);
      return -1 == t.indexOf("%") && !isNaN(e) && e;
    }
    var e =
        "undefined" == typeof console
          ? function () {}
          : function (t) {
              console.error(t);
            },
      f = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ],
      g = f.length;
    function m(t) {
      var t = getComputedStyle(t);
      return (
        t ||
          e(
            "Style returned " +
              t +
              ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
          ),
        t
      );
    }
    var v,
      y = !1;
    function b(t) {
      if (
        (y ||
          ((y = !0),
          ((u = document.createElement("div")).style.width = "200px"),
          (u.style.padding = "1px 2px 3px 4px"),
          (u.style.borderStyle = "solid"),
          (u.style.borderWidth = "1px 2px 3px 4px"),
          (u.style.boxSizing = "border-box"),
          (d = document.body || document.documentElement).appendChild(u),
          (c = m(u)),
          (v = 200 == Math.round(p(c.width))),
          (b.isBoxSizeOuter = v),
          d.removeChild(u)),
        (t = "string" == typeof t ? document.querySelector(t) : t) &&
          "object" == typeof t &&
          t.nodeType)
      ) {
        var e = m(t);
        if ("none" == e.display)
          return (function () {
            for (
              var t = {
                  width: 0,
                  height: 0,
                  innerWidth: 0,
                  innerHeight: 0,
                  outerWidth: 0,
                  outerHeight: 0,
                },
                e = 0;
              e < g;
              e++
            )
              t[f[e]] = 0;
            return t;
          })();
        var i = {};
        (i.width = t.offsetWidth), (i.height = t.offsetHeight);
        for (
          var n = (i.isBorderBox = "border-box" == e.boxSizing), s = 0;
          s < g;
          s++
        ) {
          var o = f[s],
            r = e[o],
            r = parseFloat(r);
          i[o] = isNaN(r) ? 0 : r;
        }
        var a = i.paddingLeft + i.paddingRight,
          l = i.paddingTop + i.paddingBottom,
          h = i.marginLeft + i.marginRight,
          c = i.marginTop + i.marginBottom,
          d = i.borderLeftWidth + i.borderRightWidth,
          u = i.borderTopWidth + i.borderBottomWidth,
          t = n && v,
          n = p(e.width);
        !1 !== n && (i.width = n + (t ? 0 : a + d));
        var n = p(e.height);
        return (
          !1 !== n && (i.height = n + (t ? 0 : l + u)),
          (i.innerWidth = i.width - (a + d)),
          (i.innerHeight = i.height - (l + u)),
          (i.outerWidth = i.width + h),
          (i.outerHeight = i.height + c),
          i
        );
      }
      var u, d, c;
    }
    return b;
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("desandro-matches-selector/matches-selector", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.matchesSelector = e());
  })(window, function () {
    "use strict";
    var i = (function () {
      var t = window.Element.prototype;
      if (t.matches) return "matches";
      if (t.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
        var n = e[i] + "MatchesSelector";
        if (t[n]) return n;
      }
    })();
    return function (t, e) {
      return t[i](e);
    };
  }),
  (function (e, i) {
    "function" == typeof define && define.amd
      ? define(
          "fizzy-ui-utils/utils",
          ["desandro-matches-selector/matches-selector"],
          function (t) {
            return i(e, t);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = i(e, require("desandro-matches-selector")))
      : (e.fizzyUIUtils = i(e, e.matchesSelector));
  })(window, function (i, o) {
    var l = {
        extend: function (t, e) {
          for (var i in e) t[i] = e[i];
          return t;
        },
        modulo: function (t, e) {
          return ((t % e) + e) % e;
        },
      },
      e = Array.prototype.slice;
    (l.makeArray = function (t) {
      return Array.isArray(t)
        ? t
        : null == t
        ? []
        : "object" == typeof t && "number" == typeof t.length
        ? e.call(t)
        : [t];
    }),
      (l.removeFrom = function (t, e) {
        var e = t.indexOf(e);
        -1 != e && t.splice(e, 1);
      }),
      (l.getParent = function (t, e) {
        for (; t.parentNode && t != document.body; )
          if (((t = t.parentNode), o(t, e))) return t;
      }),
      (l.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t;
      }),
      (l.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (l.filterFindElements = function (t, n) {
        t = l.makeArray(t);
        var s = [];
        return (
          t.forEach(function (t) {
            if (
              t instanceof HTMLElement ||
              0 != jQuery("body.compose-mode").length
            )
              if (n) {
                o(t, n) && s.push(t);
                for (var e = t.querySelectorAll(n), i = 0; i < e.length; i++)
                  s.push(e[i]);
              } else s.push(t);
          }),
          s
        );
      }),
      (l.debounceMethod = function (t, e, n) {
        n = n || 100;
        var s = t.prototype[e],
          o = e + "Timeout";
        t.prototype[e] = function () {
          var t = this[o];
          clearTimeout(t);
          var e = arguments,
            i = this;
          this[o] = setTimeout(function () {
            s.apply(i, e), delete i[o];
          }, n);
        };
      }),
      (l.docReady = function (t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e
          ? setTimeout(t)
          : document.addEventListener("DOMContentLoaded", t);
      }),
      (l.toDashed = function (t) {
        return t
          .replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i;
          })
          .toLowerCase();
      });
    var h = i.console;
    return (
      (l.htmlInit = function (r, a) {
        l.docReady(function () {
          var t = l.toDashed(a),
            n = "data-" + t,
            e = document.querySelectorAll("[" + n + "]"),
            t = document.querySelectorAll(".js-" + t),
            t = l.makeArray(e).concat(l.makeArray(t)),
            s = n + "-options",
            o = i.jQuery;
          t.forEach(function (e) {
            var t,
              i = e.getAttribute(n) || e.getAttribute(s);
            try {
              t = i && JSON.parse(i);
            } catch (t) {
              return void (
                h &&
                h.error("Error parsing " + n + " on " + e.className + ": " + t)
              );
            }
            var t = new r(e, t);
            o && o.data(e, a, t);
          });
        });
      }),
      l
    );
  }),
  (function (e, i) {
    "function" == typeof define && define.amd
      ? define("flickity/js/cell", ["get-size/get-size"], function (t) {
          return i(e, t);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = i(e, require("get-size")))
      : ((e.Flickity = e.Flickity || {}), (e.Flickity.Cell = i(e, e.getSize)));
  })(window, function (t, e) {
    function i(t, e) {
      (this.element = t), (this.parent = e), this.create();
    }
    var n = i.prototype;
    return (
      (n.create = function () {
        (this.element.style.position = "absolute"),
          this.element.setAttribute("aria-hidden", "true"),
          (this.x = 0),
          (this.shift = 0),
          (this.element.style[this.parent.originSide] = 0);
      }),
      (n.showFocusables = function () {
        var t = this.element.querySelectorAll(
          "a[href], button, input, textarea, select, details,[tabindex]"
        );
        0 < t.length &&
          Array.from(t).forEach(function (t) {
            t.removeAttribute("aria-hidden"), t.setAttribute("tabindex", "0");
          });
      }),
      (n.hideFocusables = function () {
        var t = this.element.querySelectorAll(
          "a[href], button, input, textarea, select, details,[tabindex]"
        );
        0 < t.length &&
          Array.from(t).forEach(function (t) {
            t.setAttribute("aria-hidden", "true"),
              t.setAttribute("tabindex", "-1");
          });
      }),
      (n.destroy = function () {
        this.unselect(), (this.element.style.position = "");
        var t = this.parent.originSide;
        (this.element.style[t] = ""),
          (this.element.style.transform = ""),
          this.element.removeAttribute("aria-hidden");
      }),
      (n.getSize = function () {
        this.size = e(this.element);
      }),
      (n.setPosition = function (t) {
        (this.x = t), this.updateTarget(), this.renderPosition(t);
      }),
      (n.updateTarget = n.setDefaultTarget =
        function () {
          var t =
            "left" == this.parent.originSide ? "marginLeft" : "marginRight";
          this.target =
            this.x + this.size[t] + this.size.width * this.parent.cellAlign;
        }),
      (n.renderPosition = function (t) {
        var e = "left" === this.parent.originSide ? 1 : -1,
          e = this.parent.options.percentPosition
            ? t * e * (this.parent.size.innerWidth / this.size.width)
            : t * e;
        this.element.style.transform =
          "translateX(" + this.parent.getPositionValue(e) + ")";
      }),
      (n.select = function () {
        this.element.classList.add("is-selected"),
          this.showFocusables(),
          this.element.removeAttribute("aria-hidden");
      }),
      (n.unselect = function () {
        this.element.classList.remove("is-selected"),
          this.hideFocusables(),
          this.element.setAttribute("aria-hidden", "true");
      }),
      (n.wrapShift = function (t) {
        (this.shift = t),
          this.renderPosition(this.x + this.parent.slideableWidth * t);
      }),
      (n.remove = function () {
        this.element.parentNode.removeChild(this.element);
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("flickity/js/slide", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : ((t.Flickity = t.Flickity || {}), (t.Flickity.Slide = e()));
  })(window, function () {
    "use strict";
    function t(t) {
      (this.parent = t),
        (this.isOriginLeft = "left" == t.originSide),
        (this.cells = []),
        (this.outerWidth = 0),
        (this.height = 0);
    }
    var e = t.prototype;
    return (
      (e.addCell = function (t) {
        var e;
        this.cells.push(t),
          (this.outerWidth += t.size.outerWidth),
          (this.height = Math.max(t.size.outerHeight, this.height)),
          1 == this.cells.length &&
            ((this.x = t.x),
            (e = this.isOriginLeft ? "marginLeft" : "marginRight"),
            (this.firstMargin = t.size[e]));
      }),
      (e.updateTarget = function () {
        var t = this.isOriginLeft ? "marginRight" : "marginLeft",
          e = this.getLastCell(),
          t = e ? e.size[t] : 0,
          t = this.outerWidth - (this.firstMargin + t);
        this.target = this.x + this.firstMargin + t * this.parent.cellAlign;
      }),
      (e.getLastCell = function () {
        return this.cells[this.cells.length - 1];
      }),
      (e.select = function () {
        this.cells.forEach(function (t) {
          t.select();
        });
      }),
      (e.unselect = function () {
        this.cells.forEach(function (t) {
          t.unselect();
        });
      }),
      (e.getCellElements = function () {
        return this.cells.map(function (t) {
          return t.element;
        });
      }),
      t
    );
  }),
  (function (e, i) {
    "function" == typeof define && define.amd
      ? define("flickity/js/animate", ["fizzy-ui-utils/utils"], function (t) {
          return i(e, t);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = i(e, require("fizzy-ui-utils")))
      : ((e.Flickity = e.Flickity || {}),
        (e.Flickity.animatePrototype = i(e, e.fizzyUIUtils)));
  })(window, function (t, e) {
    var i;
    return {
      startAnimation: function () {
        this.isAnimating ||
          ((this.isAnimating = !0), (this.restingFrames = 0), this.animate());
      },
      animate: function () {
        this.applyDragForce(), this.applySelectedAttraction();
        var t = this.x,
          e;
        this.integratePhysics(),
          this.positionSlider(),
          this.settle(t),
          this.isAnimating &&
            ((e = this),
            requestAnimationFrame(function () {
              e.animate();
            }));
      },
      positionSlider: function () {
        var t = this.x;
        this.options.wrapAround &&
          1 < this.cells.length &&
          ((t = e.modulo(t, this.slideableWidth)),
          (t -= this.slideableWidth),
          this.shiftWrapCells(t)),
          this.setTranslateX(t, this.isAnimating),
          this.dispatchScrollEvent();
      },
      setTranslateX: function (t, e) {
        (t += this.cursorPosition), (t = this.options.rightToLeft ? -t : t);
        var t = this.getPositionValue(t);
        this.slider.style.transform = e
          ? "translate3d(" + t + ",0,0)"
          : "translateX(" + t + ")";
      },
      dispatchScrollEvent: function () {
        var t = this.slides[0],
          e,
          t;
        t &&
          ((t = (e = -this.x - t.target) / this.slidesWidth),
          this.dispatchEvent("scroll", null, [t, e]));
      },
      positionSliderAtSelected: function () {
        this.cells.length &&
          ((this.x = -this.selectedSlide.target),
          (this.velocity = 0),
          this.positionSlider());
      },
      getPositionValue: function (t) {
        return this.options.percentPosition
          ? 0.01 * Math.round((t / this.size.innerWidth) * 1e4) + "%"
          : Math.round(t) + "px";
      },
      settle: function (t) {
        this.isPointerDown ||
          Math.round(100 * this.x) != Math.round(100 * t) ||
          this.restingFrames++,
          2 < this.restingFrames &&
            ((this.isAnimating = !1),
            delete this.isFreeScrolling,
            this.positionSlider(),
            this.dispatchEvent("settle", null, [this.selectedIndex]));
      },
      shiftWrapCells: function (t) {
        var e = this.cursorPosition + t;
        this._shiftCells(this.beforeShiftCells, e, -1);
        var t =
          this.size.innerWidth -
          (t + this.slideableWidth + this.cursorPosition);
        this._shiftCells(this.afterShiftCells, t, 1);
      },
      _shiftCells: function (t, e, i) {
        for (var n = 0; n < t.length; n++) {
          var s = t[n],
            o;
          s.wrapShift(0 < e ? i : 0), (e -= s.size.outerWidth);
        }
      },
      _unshiftCells: function (t) {
        if (t && t.length) for (var e = 0; e < t.length; e++) t[e].wrapShift(0);
      },
      integratePhysics: function () {
        (this.x += this.velocity), (this.velocity *= this.getFrictionFactor());
      },
      applyForce: function (t) {
        this.velocity += t;
      },
      getFrictionFactor: function () {
        return (
          1 -
          this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
        );
      },
      getRestingPosition: function () {
        return this.x + this.velocity / (1 - this.getFrictionFactor());
      },
      applyDragForce: function () {
        var t;
        this.isDraggable &&
          this.isPointerDown &&
          ((t = this.dragX - this.x - this.velocity), this.applyForce(t));
      },
      applySelectedAttraction: function () {
        var t;
        (this.isDraggable && this.isPointerDown) ||
          this.isFreeScrolling ||
          !this.slides.length ||
          ((t =
            (-1 * this.selectedSlide.target - this.x) *
            this.options.selectedAttraction),
          this.applyForce(t));
      },
    };
  }),
  (function (r, a) {
    var t;
    "function" == typeof define && define.amd
      ? define(
          "flickity/js/flickity",
          [
            "ev-emitter/ev-emitter",
            "get-size/get-size",
            "fizzy-ui-utils/utils",
            "./cell",
            "./slide",
            "./animate",
          ],
          function (t, e, i, n, s, o) {
            return a(r, t, e, i, n, s, o);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = a(
          r,
          require("ev-emitter"),
          require("get-size"),
          require("fizzy-ui-utils"),
          require("./cell"),
          require("./slide"),
          require("./animate")
        ))
      : ((t = r.Flickity),
        (r.Flickity = a(
          r,
          r.EvEmitter,
          r.getSize,
          r.fizzyUIUtils,
          t.Cell,
          t.Slide,
          t.animatePrototype
        )));
  })(window, function (s, t, e, r, i, a, n) {
    var o = s.jQuery,
      l = s.getComputedStyle,
      h = s.console;
    function c(t, e) {
      for (t = r.makeArray(t); t.length; ) e.appendChild(t.shift());
    }
    var d = 0,
      u = {};
    function p(t, e) {
      var i = r.getQueryElement(t);
      if (i) {
        if (((this.element = i), this.element.flickityGUID)) {
          var n = u[this.element.flickityGUID];
          return n && n.option(e), n;
        }
        o && (this.$element = o(this.element)),
          (this.options = r.extend({}, this.constructor.defaults)),
          this.option(e),
          this._create();
      } else h && h.error("Bad element for Flickity: " + (i || t));
    }
    (p.defaults = {
      accessibility: !0,
      cellAlign: "center",
      freeScrollFriction: 0.075,
      friction: 0.28,
      namespaceJQueryEvents: !0,
      percentPosition: !0,
      resize: !0,
      selectedAttraction: 0.025,
      setGallerySize: !0,
    }),
      (p.createMethods = []);
    var f = p.prototype;
    r.extend(f, t.prototype),
      (f._create = function () {
        var t = (this.guid = ++d);
        (this.element.flickityGUID = t),
          ((u[t] = this).selectedIndex = 0),
          (this.restingFrames = 0),
          (this.x = 0),
          (this.velocity = 0),
          (this.originSide = this.options.rightToLeft ? "right" : "left"),
          this.$element.hasClass("generate-markup")
            ? (this.viewport = document.createElement("div"))
            : ((this.viewport = this.$element.find(".flickity-viewport")[0]),
              (this.slider = this.$element.find(".flickity-slider")[0])),
          (this.viewport.className = "flickity-viewport"),
          this._createSlider(),
          (this.nectarOnMobile = !!navigator.userAgent.match(
            /(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/
          )),
          (this.nectarOrientationChanged = !1);
        var e = this,
          i;
        for (i in (s.addEventListener("orientationchange", function () {
          e.nectarOrientationChanged = !0;
        }),
        (this.options.resize || this.options.watchCSS) &&
          s.addEventListener("resize", this),
        this.options.on)) {
          var n = this.options.on[i];
          this.on(i, n);
        }
        p.createMethods.forEach(function (t) {
          this[t]();
        }, this),
          this.options.watchCSS ? this.watchCSS() : this.activate();
      }),
      (f.option = function (t) {
        r.extend(this.options, t);
      }),
      (f.activate = function () {
        var t;
        this.isActive ||
          ((this.isActive = !0),
          this.element.classList.add("flickity-enabled"),
          this.options.rightToLeft &&
            this.element.classList.add("flickity-rtl"),
          this.getSize(),
          (t = this._filterFindCellElements(this.element.children)),
          this.$element.hasClass("generate-markup") &&
            (c(t, this.slider),
            this.viewport.appendChild(this.slider),
            this.element.appendChild(this.viewport)),
          this.reloadCells(),
          this.options.accessibility &&
            ((this.element.tabIndex = 0),
            this.element.addEventListener("keydown", this)),
          this.emitEvent("activate"),
          this.selectInitialIndex(),
          (this.isInitActivated = !0),
          this.dispatchEvent("ready"));
      }),
      (f._createSlider = function () {
        var t;
        this.$element.hasClass("generate-markup")
          ? (((t = document.createElement("div")).className =
              "flickity-slider"),
            (t.style[this.originSide] = 0),
            (this.slider = t))
          : (this.slider.style[this.originSide] = 0);
      }),
      (f._filterFindCellElements = function (t) {
        return r.filterFindElements(t, this.options.cellSelector);
      }),
      (f.reloadCells = function () {
        var t;
        0 <
          o(this.slider).parent().parent().find(".flickity-page-dots").length &&
          ((t = this),
          setTimeout(function () {
            t.pageDots.setDots();
          }, 100));
        var e = [];
        o(this.slider)
          .find("> *")
          .each(function (t) {
            e[t] = o(this)[0];
          }),
          (this.cells = this._makeCells(e)),
          this.positionCells(),
          this._getWrapShiftCells(),
          this.setGallerySize();
      }),
      (f._makeCells = function (t) {
        return this._filterFindCellElements(t).map(function (t) {
          return new i(t, this);
        }, this);
      }),
      (f.getLastCell = function () {
        return this.cells[this.cells.length - 1];
      }),
      (f.getLastSlide = function () {
        return this.slides[this.slides.length - 1];
      }),
      (f.positionCells = function () {
        this._sizeCells(this.cells), this._positionCells(0);
      }),
      (f._positionCells = function (t) {
        this.maxCellHeight = ((t = t || 0) && this.maxCellHeight) || 0;
        var e = 0,
          i,
          e;
        0 < t && (e = (i = this.cells[t - 1]).x + i.size.outerWidth);
        for (var n = this.cells.length, s = t; s < n; s++) {
          var o = this.cells[s];
          o.setPosition(e),
            (e += o.size.outerWidth),
            (this.maxCellHeight = Math.max(
              o.size.outerHeight,
              this.maxCellHeight
            ));
        }
        (this.slideableWidth = e),
          this.updateSlides(),
          this._containSlides(),
          (this.slidesWidth = n
            ? this.getLastSlide().target - this.slides[0].target
            : 0);
      }),
      (f._sizeCells = function (t) {
        t.forEach(function (t) {
          t.getSize();
        });
      }),
      (f.updateSlides = function () {
        var n, s, o;
        (this.slides = []),
          this.cells.length &&
            ((n = new a(this)),
            this.slides.push(n),
            (s = "left" == this.originSide ? "marginRight" : "marginLeft"),
            (o = this._getCanCellFit()),
            this.cells.forEach(function (t, e) {
              var i;
              n.cells.length &&
                ((i =
                  n.outerWidth -
                  n.firstMargin +
                  (t.size.outerWidth - t.size[s])),
                o.call(this, e, i) ||
                  (n.updateTarget(), (n = new a(this)), this.slides.push(n))),
                n.addCell(t);
            }, this),
            n.updateTarget(),
            this.updateSelectedSlide());
      }),
      (f._getCanCellFit = function () {
        var t = this.options.groupCells;
        if (!t)
          return function () {
            return !1;
          };
        if ("number" == typeof t) {
          var e = parseInt(t, 10);
          return function (t) {
            return t % e != 0;
          };
        }
        var t = "string" == typeof t && t.match(/^(\d+)%$/),
          i = t ? parseInt(t[1], 10) / 100 : 1;
        return function (t, e) {
          return e <= (this.size.innerWidth + 1) * i;
        };
      }),
      (f._init = f.reposition =
        function () {
          this.positionCells(), this.positionSliderAtSelected();
        }),
      (f.getSize = function () {
        (this.size = e(this.element)),
          this.setCellAlign(),
          (this.cursorPosition = this.size.innerWidth * this.cellAlign);
      });
    var g = {
      center: { left: 0.5, right: 0.5 },
      left: { left: 0, right: 1 },
      right: { right: 0, left: 1 },
    };
    return (
      (f.setCellAlign = function () {
        var t = g[this.options.cellAlign];
        this.cellAlign = t ? t[this.originSide] : this.options.cellAlign;
      }),
      (f.setGallerySize = function () {
        var t;
        this.options.setGallerySize &&
          ((t =
            this.options.adaptiveHeight && this.selectedSlide
              ? this.selectedSlide.height
              : this.maxCellHeight),
          (this.viewport.style.height = t + "px"));
      }),
      (f._getWrapShiftCells = function () {
        var t, e;
        this.options.wrapAround &&
          (this._unshiftCells(this.beforeShiftCells),
          this._unshiftCells(this.afterShiftCells),
          (t = this.cursorPosition),
          (e = this.cells.length - 1),
          (this.beforeShiftCells = this._getGapCells(t, e, -1)),
          (t = this.size.innerWidth - this.cursorPosition),
          (this.afterShiftCells = this._getGapCells(t, 0, 1)));
      }),
      (f._getGapCells = function (t, e, i) {
        for (var n = []; 0 < t; ) {
          var s = this.cells[e];
          if (!s) break;
          n.push(s), (e += i), (t -= s.size.outerWidth);
        }
        return n;
      }),
      (f._containSlides = function () {
        var t, e, t, i, n, s, o;
        this.options.contain &&
          !this.options.wrapAround &&
          this.cells.length &&
          ((e = (t = this.options.rightToLeft) ? "marginRight" : "marginLeft"),
          (t = t ? "marginLeft" : "marginRight"),
          (i = this.slideableWidth - this.getLastCell().size[t]),
          (n = i < this.size.innerWidth),
          (s = this.cursorPosition + this.cells[0].size[e]),
          (o = i - this.size.innerWidth * (1 - this.cellAlign)),
          this.slides.forEach(function (t) {
            n
              ? (t.target = i * this.cellAlign)
              : ((t.target = Math.max(t.target, s)),
                (t.target = Math.min(t.target, o)));
          }, this));
      }),
      (f.dispatchEvent = function (t, e, i) {
        var n = e ? [e].concat(i) : i,
          n,
          e;
        this.emitEvent(t, n),
          o &&
            this.$element &&
            ((n = t += this.options.namespaceJQueryEvents ? ".flickity" : ""),
            e && (((e = new o.Event(e)).type = t), (n = e)),
            this.$element.trigger(n, i));
      }),
      (f.select = function (t, e, i) {
        var e;
        this.isActive &&
          ((t = parseInt(t, 10)),
          this._wrapSelect(t),
          (this.options.wrapAround || e) &&
            (t = r.modulo(t, this.slides.length)),
          this.slides[t]) &&
          ((e = this.selectedIndex),
          (this.selectedIndex = t),
          this.updateSelectedSlide(),
          i ? this.positionSliderAtSelected() : this.startAnimation(),
          this.options.adaptiveHeight && this.setGallerySize(),
          this.dispatchEvent("select", null, [t]),
          t != e && this.dispatchEvent("change", null, [t]),
          this.dispatchEvent("cellSelect"));
      }),
      (f._wrapSelect = function (t) {
        var e = this.slides.length;
        if (!(this.options.wrapAround && 1 < e)) return t;
        var i = r.modulo(t, e),
          n = Math.abs(i - this.selectedIndex),
          s = Math.abs(i + e - this.selectedIndex),
          i = Math.abs(i - e - this.selectedIndex);
        !this.isDragSelect && s < n
          ? (t += e)
          : !this.isDragSelect && i < n && (t -= e),
          t < 0
            ? (this.x -= this.slideableWidth)
            : e <= t && (this.x += this.slideableWidth);
      }),
      (f.previous = function (t, e) {
        this.select(this.selectedIndex - 1, t, e);
      }),
      (f.next = function (t, e) {
        this.select(this.selectedIndex + 1, t, e);
      }),
      (f.updateSelectedSlide = function () {
        var t = this.slides[this.selectedIndex];
        t &&
          (this.unselectSelectedSlide(),
          (this.selectedSlide = t).select(),
          (this.selectedCells = t.cells),
          (this.selectedElements = t.getCellElements()),
          (this.selectedCell = t.cells[0]),
          (this.selectedElement = this.selectedElements[0]));
      }),
      (f.unselectSelectedSlide = function () {
        this.selectedSlide && this.selectedSlide.unselect();
      }),
      (f.selectInitialIndex = function () {
        var t = this.options.initialIndex,
          e;
        this.isInitActivated
          ? this.select(this.selectedIndex, !1, !0)
          : t && "string" == typeof t && this.queryCell(t)
          ? this.selectCell(t, !1, !0)
          : ((e = 0), t && this.slides[t] && (e = t), this.select(e, !1, !0));
      }),
      (f.selectCell = function (t, e, i) {
        var t = this.queryCell(t),
          t;
        t && ((t = this.getCellSlideIndex(t)), this.select(t, e, i));
      }),
      (f.getCellSlideIndex = function (t) {
        for (var e = 0; e < this.slides.length; e++)
          if (-1 != this.slides[e].cells.indexOf(t)) return e;
      }),
      (f.getCell = function (t) {
        for (var e = 0; e < this.cells.length; e++) {
          var i = this.cells[e];
          if (i.element == t) return i;
        }
      }),
      (f.getCells = function (t) {
        t = r.makeArray(t);
        var e = [];
        return (
          t.forEach(function (t) {
            var t = this.getCell(t);
            t && e.push(t);
          }, this),
          e
        );
      }),
      (f.getCellElements = function () {
        return this.cells.map(function (t) {
          return t.element;
        });
      }),
      (f.getParentCell = function (t) {
        var e;
        return (
          this.getCell(t) ||
          ((t = r.getParent(t, ".flickity-slider > *")), this.getCell(t))
        );
      }),
      (f.getAdjacentCellElements = function (t, e) {
        if (!t) return this.selectedSlide.getCellElements();
        e = void 0 === e ? this.selectedIndex : e;
        var i = this.slides.length;
        if (i <= 1 + 2 * t) return this.getCellElements();
        for (var n = [], s = e - t; s <= e + t; s++) {
          var o = this.options.wrapAround ? r.modulo(s, i) : s,
            o = this.slides[o];
          o && (n = n.concat(o.getCellElements()));
        }
        return n;
      }),
      (f.queryCell = function (t) {
        if ("number" == typeof t) return this.cells[t];
        if ("string" == typeof t) {
          if (t.match(/^[#.]?[\d/]/)) return;
          t = this.element.querySelector(t);
        }
        return this.getCell(t);
      }),
      (f.uiChange = function () {
        this.emitEvent("uiChange");
      }),
      (f.childUIPointerDown = function (t) {
        "touchstart" != t.type && t.preventDefault(), this.focus();
      }),
      (f.onresize = function () {
        this.watchCSS(), this.resize();
      }),
      r.debounceMethod(p, "onresize", 150),
      (f.resize = function () {
        var t;
        (this.nectarOnMobile && 0 == this.nectarOrientationChanged) ||
          !this.isActive ||
          this.isAnimating ||
          this.isDragging ||
          (this.getSize(),
          this.options.wrapAround &&
            (this.x = r.modulo(this.x, this.slideableWidth)),
          this.positionCells(),
          this._getWrapShiftCells(),
          this.setGallerySize(),
          this.emitEvent("resize"),
          (t = this.selectedElements && this.selectedElements[0]),
          this.selectCell(t, !1, !0));
      }),
      (f.watchCSS = function () {
        this.options.watchCSS &&
          (-1 != l(this.element, ":after").content.indexOf("flickity")
            ? this.activate()
            : this.deactivate());
      }),
      (f.onkeydown = function (t) {
        var e =
            document.activeElement && document.activeElement != this.element,
          t;
        !this.options.accessibility ||
          e ||
          ((t = p.keyboardHandlers[t.keyCode]) && t.call(this));
      }),
      (p.keyboardHandlers = {
        37: function () {
          var t = this.options.rightToLeft ? "next" : "previous";
          this.uiChange(), this[t]();
        },
        39: function () {
          var t = this.options.rightToLeft ? "previous" : "next";
          this.uiChange(), this[t]();
        },
      }),
      (f.focus = function () {
        var t = s.pageYOffset;
        this.element.focus({ preventScroll: !0 }),
          s.pageYOffset != t && 10 < t && s.scrollTo(s.pageXOffset, t);
      }),
      (f.deactivate = function () {
        this.isActive &&
          (this.element.classList.remove("flickity-enabled"),
          this.element.classList.remove("flickity-rtl"),
          this.unselectSelectedSlide(),
          this.cells.forEach(function (t) {
            t.destroy();
          }),
          this.element.removeChild(this.viewport),
          c(this.slider.children, this.element),
          this.options.accessibility &&
            (this.element.removeAttribute("tabIndex"),
            this.element.removeEventListener("keydown", this)),
          (this.isActive = !1),
          this.emitEvent("deactivate"));
      }),
      (f.destroy = function () {
        this.deactivate(),
          s.removeEventListener("resize", this),
          this.allOff(),
          this.emitEvent("destroy"),
          o && this.$element && o.removeData(this.element, "flickity"),
          delete this.element.flickityGUID,
          delete u[this.guid];
      }),
      r.extend(f, n),
      (p.data = function (t) {
        var t = (t = r.getQueryElement(t)) && t.flickityGUID;
        return t && u[t];
      }),
      r.htmlInit(p, "flickity"),
      o && o.bridget && o.bridget("flickity", p),
      (p.setJQuery = function (t) {
        o = t;
      }),
      (p.Cell = i),
      (p.Slide = a),
      p
    );
  }),
  (function (e, i) {
    "function" == typeof define && define.amd
      ? define(
          "unipointer/unipointer",
          ["ev-emitter/ev-emitter"],
          function (t) {
            return i(e, t);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = i(e, require("ev-emitter")))
      : (e.Unipointer = i(e, e.EvEmitter));
  })(window, function (n, t) {
    function e() {}
    var t = (e.prototype = Object.create(t.prototype));
    (t.bindStartEvent = function (t) {
      this._bindStartEvent(t, !0);
    }),
      (t.unbindStartEvent = function (t) {
        this._bindStartEvent(t, !1);
      }),
      (t._bindStartEvent = function (t, e) {
        var i = (e = void 0 === e || e)
            ? "addEventListener"
            : "removeEventListener",
          e = "mousedown";
        "ontouchstart" in n
          ? (e = "touchstart")
          : n.PointerEvent && (e = "pointerdown"),
          t[i](e, this);
      }),
      (t.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (t.getTouch = function (t) {
        for (var e = 0; e < t.length; e++) {
          var i = t[e];
          if (i.identifier == this.pointerIdentifier) return i;
        }
      }),
      (t.onmousedown = function (t) {
        var e = t.button;
        (e && 0 !== e && 1 !== e) || this._pointerDown(t, t);
      }),
      (t.ontouchstart = function (t) {
        this._pointerDown(t, t.changedTouches[0]);
      }),
      (t.onpointerdown = function (t) {
        this._pointerDown(t, t);
      }),
      (t._pointerDown = function (t, e) {
        t.button ||
          this.isPointerDown ||
          ((this.isPointerDown = !0),
          (this.pointerIdentifier =
            void 0 !== e.pointerId ? e.pointerId : e.identifier),
          this.pointerDown(t, e));
      }),
      (t.pointerDown = function (t, e) {
        this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e]);
      });
    var i = {
      mousedown: ["mousemove", "mouseup"],
      touchstart: ["touchmove", "touchend", "touchcancel"],
      pointerdown: ["pointermove", "pointerup", "pointercancel"],
    };
    return (
      (t._bindPostStartEvents = function (t) {
        var t;
        t &&
          ((t = i[t.type]).forEach(function (t) {
            n.addEventListener(t, this);
          }, this),
          (this._boundPointerEvents = t));
      }),
      (t._unbindPostStartEvents = function () {
        this._boundPointerEvents &&
          (this._boundPointerEvents.forEach(function (t) {
            n.removeEventListener(t, this);
          }, this),
          delete this._boundPointerEvents);
      }),
      (t.onmousemove = function (t) {
        this._pointerMove(t, t);
      }),
      (t.onpointermove = function (t) {
        t.pointerId == this.pointerIdentifier && this._pointerMove(t, t);
      }),
      (t.ontouchmove = function (t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerMove(t, e);
      }),
      (t._pointerMove = function (t, e) {
        this.pointerMove(t, e);
      }),
      (t.pointerMove = function (t, e) {
        this.emitEvent("pointerMove", [t, e]);
      }),
      (t.onmouseup = function (t) {
        this._pointerUp(t, t);
      }),
      (t.onpointerup = function (t) {
        t.pointerId == this.pointerIdentifier && this._pointerUp(t, t);
      }),
      (t.ontouchend = function (t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerUp(t, e);
      }),
      (t._pointerUp = function (t, e) {
        this._pointerDone(), this.pointerUp(t, e);
      }),
      (t.pointerUp = function (t, e) {
        this.emitEvent("pointerUp", [t, e]);
      }),
      (t._pointerDone = function () {
        this._pointerReset(), this._unbindPostStartEvents(), this.pointerDone();
      }),
      (t._pointerReset = function () {
        (this.isPointerDown = !1), delete this.pointerIdentifier;
      }),
      (t.pointerDone = function () {}),
      (t.onpointercancel = function (t) {
        t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t);
      }),
      (t.ontouchcancel = function (t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerCancel(t, e);
      }),
      (t._pointerCancel = function (t, e) {
        this._pointerDone(), this.pointerCancel(t, e);
      }),
      (t.pointerCancel = function (t, e) {
        this.emitEvent("pointerCancel", [t, e]);
      }),
      (e.getPointerPoint = function (t) {
        return { x: t.pageX, y: t.pageY };
      }),
      e
    );
  }),
  (function (e, i) {
    "function" == typeof define && define.amd
      ? define(
          "unidragger/unidragger",
          ["unipointer/unipointer"],
          function (t) {
            return i(e, t);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = i(e, require("unipointer")))
      : (e.Unidragger = i(e, e.Unipointer));
  })(window, function (o, t) {
    function e() {}
    var i = (e.prototype = Object.create(t.prototype));
    (i.bindHandles = function () {
      this._bindHandles(!0);
    }),
      (i.unbindHandles = function () {
        this._bindHandles(!1);
      }),
      (i._bindHandles = function (t) {
        for (
          var e = (t = void 0 === t || t)
              ? "addEventListener"
              : "removeEventListener",
            i = t ? this._touchActionValue : "",
            n = 0;
          n < this.handles.length;
          n++
        ) {
          var s = this.handles[n];
          this._bindStartEvent(s, t),
            s[e]("click", this),
            o.PointerEvent && (s.style.touchAction = i);
        }
      }),
      (i._touchActionValue = "none"),
      (i.pointerDown = function (t, e) {
        this.okayPointerDown(t) &&
          ((this.pointerDownPointer = { pageX: e.pageX, pageY: e.pageY }),
          t.preventDefault(),
          this.pointerDownBlur(),
          this._bindPostStartEvents(t),
          this.emitEvent("pointerDown", [t, e]));
      });
    var n = { TEXTAREA: !0, INPUT: !0, SELECT: !0, OPTION: !0 },
      s = {
        radio: !0,
        checkbox: !0,
        button: !0,
        submit: !0,
        image: !0,
        file: !0,
      };
    return (
      (i.okayPointerDown = function (t) {
        var e = n[t.target.nodeName],
          t = s[t.target.type],
          t = !e || t;
        return t || this._pointerReset(), t;
      }),
      (i.pointerDownBlur = function () {
        var t = document.activeElement;
        t && t.blur && t != document.body && t.blur();
      }),
      (i.pointerMove = function (t, e) {
        var i = this._dragPointerMove(t, e);
        this.emitEvent("pointerMove", [t, e, i]), this._dragMove(t, e, i);
      }),
      (i._dragPointerMove = function (t, e) {
        var i = {
          x: e.pageX - this.pointerDownPointer.pageX,
          y: e.pageY - this.pointerDownPointer.pageY,
        };
        return (
          !this.isDragging && this.hasDragStarted(i) && this._dragStart(t, e), i
        );
      }),
      (i.hasDragStarted = function (t) {
        return 3 < Math.abs(t.x) || 3 < Math.abs(t.y);
      }),
      (i.pointerUp = function (t, e) {
        this.emitEvent("pointerUp", [t, e]), this._dragPointerUp(t, e);
      }),
      (i._dragPointerUp = function (t, e) {
        this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e);
      }),
      (i._dragStart = function (t, e) {
        (this.isDragging = !0),
          (this.isPreventingClicks = !0),
          this.dragStart(t, e);
      }),
      (i.dragStart = function (t, e) {
        this.emitEvent("dragStart", [t, e]);
      }),
      (i._dragMove = function (t, e, i) {
        this.isDragging && this.dragMove(t, e, i);
      }),
      (i.dragMove = function (t, e, i) {
        t.preventDefault(), this.emitEvent("dragMove", [t, e, i]);
      }),
      (i._dragEnd = function (t, e) {
        (this.isDragging = !1),
          setTimeout(
            function () {
              delete this.isPreventingClicks;
            }.bind(this)
          ),
          this.dragEnd(t, e);
      }),
      (i.dragEnd = function (t, e) {
        this.emitEvent("dragEnd", [t, e]);
      }),
      (i.onclick = function (t) {
        this.isPreventingClicks && t.preventDefault();
      }),
      (i._staticClick = function (t, e) {
        (this.isIgnoringMouseUp && "mouseup" == t.type) ||
          (this.staticClick(t, e),
          "mouseup" != t.type &&
            ((this.isIgnoringMouseUp = !0),
            setTimeout(
              function () {
                delete this.isIgnoringMouseUp;
              }.bind(this),
              400
            )));
      }),
      (i.staticClick = function (t, e) {
        this.emitEvent("staticClick", [t, e]);
      }),
      (e.getPointerPoint = t.getPointerPoint),
      e
    );
  }),
  (function (n, s) {
    "function" == typeof define && define.amd
      ? define(
          "flickity/js/drag",
          ["./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"],
          function (t, e, i) {
            return s(n, t, e, i);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = s(
          n,
          require("./flickity"),
          require("unidragger"),
          require("fizzy-ui-utils")
        ))
      : (n.Flickity = s(n, n.Flickity, n.Unidragger, n.fizzyUIUtils));
  })(window, function (i, t, e, o) {
    o.extend(t.defaults, { draggable: ">1", dragThreshold: 3 }),
      t.createMethods.push("_createDrag");
    var n = t.prototype;
    o.extend(n, e.prototype),
      (n._touchActionValue = "pan-y"),
      (n._createDrag = function () {
        this.on("activate", this.onActivateDrag),
          this.on("uiChange", this._uiChangeDrag),
          this.on("deactivate", this.onDeactivateDrag),
          this.on("cellChange", this.updateDraggable);
      }),
      (n.onActivateDrag = function () {
        (this.handles = [this.viewport]),
          this.bindHandles(),
          this.updateDraggable();
      }),
      (n.onDeactivateDrag = function () {
        this.unbindHandles(), this.element.classList.remove("is-draggable");
      }),
      (n.updateDraggable = function () {
        ">1" == this.options.draggable
          ? (this.isDraggable = 1 < this.slides.length)
          : (this.isDraggable = this.options.draggable),
          this.isDraggable
            ? this.element.classList.add("is-draggable")
            : this.element.classList.remove("is-draggable");
      }),
      (n.bindDrag = function () {
        (this.options.draggable = !0), this.updateDraggable();
      }),
      (n.unbindDrag = function () {
        (this.options.draggable = !1), this.updateDraggable();
      }),
      (n._uiChangeDrag = function () {
        delete this.isFreeScrolling;
      }),
      (n.pointerDown = function (t, e) {
        this.isDraggable
          ? this.okayPointerDown(t) &&
            (this._pointerDownPreventDefault(t),
            this.pointerDownFocus(t),
            document.activeElement != this.element && this.pointerDownBlur(),
            (this.dragX = this.x),
            this.viewport.classList.add("is-pointer-down"),
            (this.pointerDownScroll = r()),
            i.addEventListener("scroll", this),
            this._pointerDownDefault(t, e))
          : this._pointerDownDefault(t, e);
      }),
      (n._pointerDownDefault = function (t, e) {
        (this.pointerDownPointer = { pageX: e.pageX, pageY: e.pageY }),
          this._bindPostStartEvents(t),
          this.dispatchEvent("pointerDown", t, [e]);
      });
    var s = { INPUT: !0, TEXTAREA: !0, SELECT: !0 };
    function r() {
      return { x: i.pageXOffset, y: i.pageYOffset };
    }
    return (
      (n.pointerDownFocus = function (t) {
        s[t.target.nodeName] || this.focus();
      }),
      (n._pointerDownPreventDefault = function (t) {
        var e = "touchstart" == t.type,
          i = "touch" == t.pointerType,
          n = s[t.target.nodeName];
        e || i || n || t.preventDefault();
      }),
      (n.hasDragStarted = function (t) {
        return Math.abs(t.x) > this.options.dragThreshold;
      }),
      (n.pointerUp = function (t, e) {
        delete this.isTouchScrolling,
          this.viewport.classList.remove("is-pointer-down"),
          this.dispatchEvent("pointerUp", t, [e]),
          this._dragPointerUp(t, e);
      }),
      (n.pointerDone = function () {
        i.removeEventListener("scroll", this), delete this.pointerDownScroll;
      }),
      (n.dragStart = function (t, e) {
        this.isDraggable &&
          ((this.dragStartPosition = this.x),
          this.startAnimation(),
          i.removeEventListener("scroll", this),
          this.dispatchEvent("dragStart", t, [e]));
      }),
      (n.pointerMove = function (t, e) {
        var i = this._dragPointerMove(t, e);
        this.dispatchEvent("pointerMove", t, [e, i]), this._dragMove(t, e, i);
      }),
      (n.dragMove = function (t, e, i) {
        var n, s, n, s, n;
        this.isDraggable &&
          (t.preventDefault(),
          (this.previousDragX = this.dragX),
          (n = this.options.rightToLeft ? -1 : 1),
          this.options.wrapAround && (i.x %= this.slideableWidth),
          (s = this.dragStartPosition + i.x * n),
          !this.options.wrapAround &&
            this.slides.length &&
            (s =
              (s =
                (n = Math.max(-this.slides[0].target, this.dragStartPosition)) <
                s
                  ? 0.5 * (s + n)
                  : s) <
              (n = Math.min(
                -this.getLastSlide().target,
                this.dragStartPosition
              ))
                ? 0.5 * (s + n)
                : s),
          (this.dragX = s),
          (this.dragMoveTime = new Date()),
          this.dispatchEvent("dragMove", t, [e, i]));
      }),
      (n.dragEnd = function (t, e) {
        var i, n;
        this.isDraggable &&
          (this.options.freeScroll && (this.isFreeScrolling = !0),
          (i = this.dragEndRestingSelect()),
          this.options.freeScroll && !this.options.wrapAround
            ? ((n = this.getRestingPosition()),
              (this.isFreeScrolling =
                -n > this.slides[0].target && -n < this.getLastSlide().target))
            : this.options.freeScroll ||
              i != this.selectedIndex ||
              (i += this.dragEndBoostSelect()),
          delete this.previousDragX,
          (this.isDragSelect = this.options.wrapAround),
          this.select(i),
          delete this.isDragSelect,
          this.dispatchEvent("dragEnd", t, [e]));
      }),
      (n.dragEndRestingSelect = function () {
        var t = this.getRestingPosition(),
          e = Math.abs(this.getSlideDistance(-t, this.selectedIndex)),
          i = this._getClosestResting(t, e, 1),
          e = this._getClosestResting(t, e, -1);
        return (i.distance < e.distance ? i : e).index;
      }),
      (n._getClosestResting = function (t, e, i) {
        for (
          var n = this.selectedIndex,
            s = 1 / 0,
            o =
              this.options.contain && !this.options.wrapAround
                ? function (t, e) {
                    return t <= e;
                  }
                : function (t, e) {
                    return t < e;
                  };
          o(e, s) &&
          ((s = e), null !== (e = this.getSlideDistance(-t, (n += i))));

        )
          e = Math.abs(e);
        return { distance: s, index: n - i };
      }),
      (n.getSlideDistance = function (t, e) {
        var i = this.slides.length,
          n = this.options.wrapAround && 1 < i,
          s = n ? o.modulo(e, i) : e,
          s = this.slides[s];
        if (!s) return null;
        var i = n ? this.slideableWidth * Math.floor(e / i) : 0;
        return t - (s.target + i);
      }),
      (n.dragEndBoostSelect = function () {
        if (
          void 0 === this.previousDragX ||
          !this.dragMoveTime ||
          100 < new Date() - this.dragMoveTime
        )
          return 0;
        var t = this.getSlideDistance(-this.dragX, this.selectedIndex),
          e = this.previousDragX - this.dragX;
        return 0 < t && 0 < e ? 1 : t < 0 && e < 0 ? -1 : 0;
      }),
      (n.staticClick = function (t, e) {
        var i = this.getParentCell(t.target),
          n = i && i.element,
          i = i && this.cells.indexOf(i);
        this.dispatchEvent("staticClick", t, [e, n, i]);
      }),
      (n.onscroll = function () {
        var t = r(),
          e = this.pointerDownScroll.x - t.x,
          t = this.pointerDownScroll.y - t.y;
        (3 < Math.abs(e) || 3 < Math.abs(t)) && this._pointerDone();
      }),
      t
    );
  }),
  (function (n, s) {
    "function" == typeof define && define.amd
      ? define(
          "flickity/js/prev-next-button",
          ["./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils"],
          function (t, e, i) {
            return s(n, t, e, i);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = s(
          n,
          require("./flickity"),
          require("unipointer"),
          require("fizzy-ui-utils")
        ))
      : s(n, n.Flickity, n.Unipointer, n.fizzyUIUtils);
  })(window, function (t, e, i, n) {
    "use strict";
    var s = "http://www.w3.org/2000/svg";
    function o(t, e) {
      (this.direction = t), (this.parent = e), this._create();
    }
    ((o.prototype = Object.create(i.prototype))._create = function () {
      (this.isEnabled = !0), (this.isPrevious = -1 == this.direction);
      var t = this.parent.options.rightToLeft ? 1 : -1;
      this.isLeft = this.direction == t;
      var e = (this.element = document.createElement("button"));
      (e.className = "flickity-button flickity-prev-next-button"),
        (e.className += this.isPrevious ? " previous" : " next"),
        e.setAttribute("type", "button"),
        this.disable(),
        e.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");
      var t = this.createSVG();
      e.appendChild(t),
        this.parent.on("select", this.update.bind(this)),
        this.on(
          "pointerDown",
          this.parent.childUIPointerDown.bind(this.parent)
        );
    }),
      (o.prototype.activate = function () {
        this.bindStartEvent(this.element),
          this.element.addEventListener("click", this),
          this.parent.element.appendChild(this.element);
      }),
      (o.prototype.deactivate = function () {
        this.parent.element.removeChild(this.element),
          this.unbindStartEvent(this.element),
          this.element.removeEventListener("click", this);
      }),
      (o.prototype.createSVG = function () {
        var t = document.createElementNS(s, "svg");
        t.setAttribute("class", "flickity-button-icon"),
          t.setAttribute("viewBox", "0 0 100 100");
        var e = document.createElementNS(s, "path"),
          i =
            "string" == typeof (i = this.parent.options.arrowShape)
              ? i
              : "M " +
                i.x0 +
                ",50 L " +
                i.x1 +
                "," +
                (i.y1 + 50) +
                " L " +
                i.x2 +
                "," +
                (i.y2 + 50) +
                " L " +
                i.x3 +
                ",50  L " +
                i.x2 +
                "," +
                (50 - i.y2) +
                " L " +
                i.x1 +
                "," +
                (50 - i.y1) +
                " Z",
          i;
        return (
          e.setAttribute("d", i),
          e.setAttribute("class", "arrow"),
          this.isLeft ||
            e.setAttribute("transform", "translate(100, 100) rotate(180) "),
          t.appendChild(e),
          t
        );
      }),
      (o.prototype.handleEvent = n.handleEvent),
      (o.prototype.onclick = function () {
        var t;
        this.isEnabled &&
          (this.parent.uiChange(),
          (t = this.isPrevious ? "previous" : "next"),
          this.parent[t]());
      }),
      (o.prototype.enable = function () {
        this.isEnabled || ((this.element.disabled = !1), (this.isEnabled = !0));
      }),
      (o.prototype.disable = function () {
        this.isEnabled && ((this.element.disabled = !0), (this.isEnabled = !1));
      }),
      (o.prototype.update = function () {
        var t = this.parent.slides,
          t,
          t;
        this.parent.options.wrapAround && 1 < t.length
          ? this.enable()
          : ((t = t.length ? t.length - 1 : 0),
            (t = this.isPrevious ? 0 : t),
            this[this.parent.selectedIndex == t ? "disable" : "enable"]());
      }),
      (o.prototype.destroy = function () {
        this.deactivate(), this.allOff();
      }),
      n.extend(e.defaults, {
        prevNextButtons: !0,
        arrowShape: { x0: 10, x1: 60, y1: 50, x2: 70, y2: 40, x3: 30 },
      }),
      e.createMethods.push("_createPrevNextButtons");
    var n = e.prototype;
    return (
      (n._createPrevNextButtons = function () {
        this.options.prevNextButtons &&
          ((this.prevButton = new o(-1, this)),
          (this.nextButton = new o(1, this)),
          this.on("activate", this.activatePrevNextButtons));
      }),
      (n.activatePrevNextButtons = function () {
        this.prevButton.activate(),
          this.nextButton.activate(),
          this.on("deactivate", this.deactivatePrevNextButtons);
      }),
      (n.deactivatePrevNextButtons = function () {
        this.prevButton.deactivate(),
          this.nextButton.deactivate(),
          this.off("deactivate", this.deactivatePrevNextButtons);
      }),
      (e.PrevNextButton = o),
      e
    );
  }),
  (function (n, s) {
    "function" == typeof define && define.amd
      ? define(
          "flickity/js/page-dots",
          ["./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils"],
          function (t, e, i) {
            return s(n, t, e, i);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = s(
          n,
          require("./flickity"),
          require("unipointer"),
          require("fizzy-ui-utils")
        ))
      : s(n, n.Flickity, n.Unipointer, n.fizzyUIUtils);
  })(window, function (t, e, i, n) {
    function s(t) {
      (this.parent = t), this._create();
    }
    ((s.prototype = Object.create(i.prototype))._create = function () {
      (this.holder = document.createElement("ol")),
        (this.holder.className = "flickity-page-dots"),
        (this.dots = []),
        (this.handleClick = this.onClick.bind(this)),
        this.on(
          "pointerDown",
          this.parent.childUIPointerDown.bind(this.parent)
        );
    }),
      (s.prototype.activate = function () {
        this.setDots(),
          this.holder.addEventListener("click", this.handleClick),
          this.bindStartEvent(this.holder),
          this.parent.element.appendChild(this.holder);
      }),
      (s.prototype.deactivate = function () {
        this.holder.removeEventListener("click", this.handleClick),
          this.unbindStartEvent(this.holder),
          this.parent.element.removeChild(this.holder);
      }),
      (s.prototype.setDots = function () {
        var t = this.parent.slides.length - this.dots.length;
        0 < t ? this.addDots(t) : t < 0 && this.removeDots(-t);
      }),
      (s.prototype.addDots = function (t) {
        for (
          var e = document.createDocumentFragment(),
            i = [],
            n = this.dots.length,
            s = n + t,
            o = n;
          o < s;
          o++
        ) {
          var r = document.createElement("li");
          (r.className = "dot"),
            r.setAttribute("aria-label", "Page dot " + (o + 1)),
            e.appendChild(r),
            i.push(r);
        }
        this.holder.appendChild(e), (this.dots = this.dots.concat(i));
      }),
      (s.prototype.removeDots = function (t) {
        this.dots.splice(this.dots.length - t, t).forEach(function (t) {
          this.holder.removeChild(t);
        }, this);
      }),
      (s.prototype.updateSelected = function () {
        this.selectedDot &&
          ((this.selectedDot.className = "dot"),
          this.selectedDot.removeAttribute("aria-current")),
          this.dots.length &&
            ((this.selectedDot = this.dots[this.parent.selectedIndex]),
            (this.selectedDot.className = "dot is-selected"),
            this.selectedDot.setAttribute("aria-current", "step"));
      }),
      (s.prototype.onTap = s.prototype.onClick =
        function (t) {
          var t = t.target,
            t;
          "LI" == t.nodeName &&
            (this.parent.uiChange(),
            (t = this.dots.indexOf(t)),
            this.parent.select(t));
        }),
      (s.prototype.destroy = function () {
        this.deactivate(), this.allOff();
      }),
      (e.PageDots = s),
      n.extend(e.defaults, { pageDots: !0 }),
      e.createMethods.push("_createPageDots");
    var n = e.prototype;
    return (
      (n._createPageDots = function () {
        this.options.pageDots &&
          ((this.pageDots = new s(this)),
          this.on("activate", this.activatePageDots),
          this.on("select", this.updateSelectedPageDots),
          this.on("cellChange", this.updatePageDots),
          this.on("resize", this.updatePageDots),
          this.on("deactivate", this.deactivatePageDots));
      }),
      (n.activatePageDots = function () {
        this.pageDots.activate();
      }),
      (n.updateSelectedPageDots = function () {
        this.pageDots.updateSelected();
      }),
      (n.updatePageDots = function () {
        this.pageDots.setDots();
      }),
      (n.deactivatePageDots = function () {
        this.pageDots.deactivate();
      }),
      (e.PageDots = s),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "flickity/js/player",
          ["ev-emitter/ev-emitter", "fizzy-ui-utils/utils", "./flickity"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          require("ev-emitter"),
          require("fizzy-ui-utils"),
          require("./flickity")
        ))
      : e(t.EvEmitter, t.fizzyUIUtils, t.Flickity);
  })(window, function (t, e, i) {
    function n(t) {
      (this.parent = t),
        (this.state = "stopped"),
        (this.onVisibilityChange = this.visibilityChange.bind(this)),
        (this.onVisibilityPlay = this.visibilityPlay.bind(this));
    }
    ((n.prototype = Object.create(t.prototype)).play = function () {
      "playing" != this.state &&
        (document.hidden
          ? document.addEventListener("visibilitychange", this.onVisibilityPlay)
          : ((this.state = "playing"),
            document.addEventListener(
              "visibilitychange",
              this.onVisibilityChange
            ),
            this.tick()));
    }),
      (n.prototype.tick = function () {
        var t, t, e;
        "playing" == this.state &&
          ((t =
            "number" == typeof (t = this.parent.options.autoPlay) ? t : 3e3),
          (e = this).clear(),
          (this.timeout = setTimeout(function () {
            e.parent.next(!0), e.tick();
          }, t)));
      }),
      (n.prototype.stop = function () {
        (this.state = "stopped"),
          this.clear(),
          document.removeEventListener(
            "visibilitychange",
            this.onVisibilityChange
          );
      }),
      (n.prototype.clear = function () {
        clearTimeout(this.timeout);
      }),
      (n.prototype.pause = function () {
        "playing" == this.state && ((this.state = "paused"), this.clear());
      }),
      (n.prototype.unpause = function () {
        "paused" == this.state && this.play();
      }),
      (n.prototype.visibilityChange = function () {
        this[document.hidden ? "pause" : "unpause"]();
      }),
      (n.prototype.visibilityPlay = function () {
        this.play(),
          document.removeEventListener(
            "visibilitychange",
            this.onVisibilityPlay
          );
      }),
      e.extend(i.defaults, { pauseAutoPlayOnHover: !0 }),
      i.createMethods.push("_createPlayer");
    var e = i.prototype;
    return (
      (e._createPlayer = function () {
        (this.player = new n(this)),
          this.on("activate", this.activatePlayer),
          this.on("uiChange", this.stopPlayer),
          this.on("pointerDown", this.stopPlayer),
          this.on("deactivate", this.deactivatePlayer);
      }),
      (e.activatePlayer = function () {
        this.options.autoPlay &&
          (this.player.play(),
          this.element.addEventListener("mouseenter", this));
      }),
      (e.playPlayer = function () {
        this.player.play();
      }),
      (e.stopPlayer = function () {
        this.player.stop();
      }),
      (e.pausePlayer = function () {
        this.player.pause();
      }),
      (e.unpausePlayer = function () {
        this.player.unpause();
      }),
      (e.deactivatePlayer = function () {
        this.player.stop(),
          this.element.removeEventListener("mouseenter", this);
      }),
      (e.onmouseenter = function () {
        this.options.pauseAutoPlayOnHover &&
          (this.player.pause(),
          this.element.addEventListener("mouseleave", this));
      }),
      (e.onmouseleave = function () {
        this.player.unpause(),
          this.element.removeEventListener("mouseleave", this);
      }),
      (i.Player = n),
      i
    );
  }),
  (function (i, n) {
    "function" == typeof define && define.amd
      ? define(
          "flickity/js/add-remove-cell",
          ["./flickity", "fizzy-ui-utils/utils"],
          function (t, e) {
            return n(i, t, e);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = n(
          i,
          require("./flickity"),
          require("fizzy-ui-utils")
        ))
      : n(i, i.Flickity, i.fizzyUIUtils);
  })(window, function (t, e, n) {
    var i = e.prototype;
    return (
      (i.insert = function (t, e) {
        var i = this._makeCells(t),
          n,
          s,
          t,
          o,
          n,
          o,
          r;
        i &&
          i.length &&
          ((n = this.cells.length),
          (e = void 0 === e ? n : e),
          (o = i),
          (r = document.createDocumentFragment()),
          o.forEach(function (t) {
            r.appendChild(t.element);
          }),
          (s = r),
          (t = e == n)
            ? this.slider.appendChild(s)
            : ((o = this.cells[e].element), this.slider.insertBefore(s, o)),
          0 === e
            ? (this.cells = i.concat(this.cells))
            : t
            ? (this.cells = this.cells.concat(i))
            : ((n = this.cells.splice(e, n - e)),
              (this.cells = this.cells.concat(i).concat(n))),
          this._sizeCells(i),
          this.cellChange(e, !0));
      }),
      (i.append = function (t) {
        this.insert(t, this.cells.length);
      }),
      (i.prepend = function (t) {
        this.insert(t, 0);
      }),
      (i.remove = function (t) {
        var t = this.getCells(t),
          i;
        t &&
          t.length &&
          ((i = this.cells.length - 1),
          t.forEach(function (t) {
            t.remove();
            var e = this.cells.indexOf(t);
            (i = Math.min(e, i)), n.removeFrom(this.cells, t);
          }, this),
          this.cellChange(i, !0));
      }),
      (i.cellSizeChange = function (t) {
        var t = this.getCell(t),
          t;
        t && (t.getSize(), (t = this.cells.indexOf(t)), this.cellChange(t));
      }),
      (i.cellChange = function (t, e) {
        var i = this.selectedElement;
        this._positionCells(t),
          this._getWrapShiftCells(),
          this.setGallerySize();
        var i = this.getCell(i);
        i && (this.selectedIndex = this.getCellSlideIndex(i)),
          (this.selectedIndex = Math.min(
            this.slides.length - 1,
            this.selectedIndex
          )),
          this.emitEvent("cellChange", [t]),
          this.select(this.selectedIndex),
          e && this.positionSliderAtSelected();
      }),
      e
    );
  }),
  (function (i, n) {
    "function" == typeof define && define.amd
      ? define(
          "flickity/js/lazyload",
          ["./flickity", "fizzy-ui-utils/utils"],
          function (t, e) {
            return n(i, t, e);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = n(
          i,
          require("./flickity"),
          require("fizzy-ui-utils")
        ))
      : n(i, i.Flickity, i.fizzyUIUtils);
  })(window, function (t, e, s) {
    "use strict";
    e.createMethods.push("_createLazyload");
    var i = e.prototype;
    function n(t, e) {
      (this.img = t), (this.flickity = e), this.load();
    }
    return (
      (i._createLazyload = function () {
        this.on("select", this.lazyLoad);
      }),
      (i.lazyLoad = function () {
        var t = this.options.lazyLoad,
          e,
          t,
          i;
        t &&
          ((t = this.getAdjacentCellElements("number" == typeof t ? t : 0)),
          (i = []),
          t.forEach(function (t) {
            var t = (function (t) {
              if ("IMG" == t.nodeName) {
                var e = t.getAttribute("data-flickity-lazyload"),
                  i = t.getAttribute("data-flickity-lazyload-src"),
                  n = t.getAttribute("data-flickity-lazyload-srcset");
                if (e || i || n) return [t];
              }
              var t = t.querySelectorAll(
                "img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]"
              );
              return s.makeArray(t);
            })(t);
            i = i.concat(t);
          }),
          i.forEach(function (t) {
            new n(t, this);
          }, this));
      }),
      (n.prototype.handleEvent = s.handleEvent),
      (n.prototype.load = function () {
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this);
        var t =
            this.img.getAttribute("data-flickity-lazyload") ||
            this.img.getAttribute("data-flickity-lazyload-src"),
          e = this.img.getAttribute("data-flickity-lazyload-srcset");
        (this.img.src = t),
          e && this.img.setAttribute("srcset", e),
          this.img.removeAttribute("data-flickity-lazyload"),
          this.img.removeAttribute("data-flickity-lazyload-src"),
          this.img.removeAttribute("data-flickity-lazyload-srcset");
      }),
      (n.prototype.onload = function (t) {
        this.complete(t, "flickity-lazyloaded");
      }),
      (n.prototype.onerror = function (t) {
        this.complete(t, "flickity-lazyerror");
      }),
      (n.prototype.complete = function (t, e) {
        this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
        var i = this.flickity.getParentCell(this.img),
          i = i && i.element;
        this.flickity.cellSizeChange(i),
          this.img.classList.add(e),
          this.flickity.dispatchEvent("lazyLoad", t, i);
      }),
      (e.LazyLoader = n),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "flickity/js/index",
          [
            "./flickity",
            "./drag",
            "./prev-next-button",
            "./page-dots",
            "./player",
            "./add-remove-cell",
            "./lazyload",
          ],
          e
        )
      : "object" == typeof module &&
        module.exports &&
        (module.exports = e(
          require("./flickity"),
          require("./drag"),
          require("./prev-next-button"),
          require("./page-dots"),
          require("./player"),
          require("./add-remove-cell"),
          require("./lazyload")
        ));
  })(window, function (t) {
    return t;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "flickity-as-nav-for/as-nav-for",
          ["flickity/js/index", "fizzy-ui-utils/utils"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("flickity"), require("fizzy-ui-utils")))
      : (t.Flickity = e(t.Flickity, t.fizzyUIUtils));
  })(window, function (i, n) {
    i.createMethods.push("_createAsNavFor");
    var t = i.prototype;
    return (
      (t._createAsNavFor = function () {
        this.on("activate", this.activateAsNavFor),
          this.on("deactivate", this.deactivateAsNavFor),
          this.on("destroy", this.destroyAsNavFor);
        var t = this.options.asNavFor,
          e;
        t &&
          ((e = this),
          setTimeout(function () {
            e.setNavCompanion(t);
          }));
      }),
      (t.setNavCompanion = function (t) {
        t = n.getQueryElement(t);
        var t = i.data(t),
          e;
        t &&
          t != this &&
          ((this.navCompanion = t),
          ((e = this).onNavCompanionSelect = function () {
            e.navCompanionSelect();
          }),
          t.on("select", this.onNavCompanionSelect),
          this.on("staticClick", this.onNavStaticClick),
          this.navCompanionSelect(!0));
      }),
      (t.navCompanionSelect = function (t) {
        var e = this.navCompanion && this.navCompanion.selectedCells,
          i,
          n,
          s,
          o,
          r,
          o,
          e,
          o;
        e &&
          ((o = e[0]),
          (o = (r = this.navCompanion.cells.indexOf(o)) + e.length - 1),
          (e = Math.floor((o - r) * (s = this.navCompanion.cellAlign) + r)),
          this.selectCell(e, !1, t),
          this.removeNavSelectedElements(),
          e >= this.cells.length ||
            ((o = this.cells.slice(r, 1 + o)),
            (this.navSelectedElements = o.map(function (t) {
              return t.element;
            })),
            this.changeNavSelectedClass("add")));
      }),
      (t.changeNavSelectedClass = function (e) {
        this.navSelectedElements.forEach(function (t) {
          t.classList[e]("is-nav-selected");
        });
      }),
      (t.activateAsNavFor = function () {
        this.navCompanionSelect(!0);
      }),
      (t.removeNavSelectedElements = function () {
        this.navSelectedElements &&
          (this.changeNavSelectedClass("remove"),
          delete this.navSelectedElements);
      }),
      (t.onNavStaticClick = function (t, e, i, n) {
        "number" == typeof n && this.navCompanion.selectCell(n);
      }),
      (t.deactivateAsNavFor = function () {
        this.removeNavSelectedElements();
      }),
      (t.destroyAsNavFor = function () {
        this.navCompanion &&
          (this.navCompanion.off("select", this.onNavCompanionSelect),
          this.off("staticClick", this.onNavStaticClick),
          delete this.navCompanion);
      }),
      i
    );
  }),
  (function (e, i) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "imagesloaded/imagesloaded",
          ["ev-emitter/ev-emitter"],
          function (t) {
            return i(e, t);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = i(e, require("ev-emitter")))
      : (e.imagesLoaded = i(e, e.EvEmitter));
  })("undefined" != typeof window ? window : this, function (e, t) {
    var o = e.jQuery,
      r = e.console;
    function a(t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }
    var l = Array.prototype.slice;
    function h(t, e, i) {
      if (!(this instanceof h)) return new h(t, e, i);
      var n,
        s = t;
      (s = "string" == typeof t ? document.querySelectorAll(t) : s)
        ? ((this.elements =
            ((n = s),
            Array.isArray(n)
              ? n
              : "object" == typeof n && "number" == typeof n.length
              ? l.call(n)
              : [n])),
          (this.options = a({}, this.options)),
          "function" == typeof e ? (i = e) : a(this.options, e),
          i && this.on("always", i),
          this.getImages(),
          o && (this.jqDeferred = new o.Deferred()),
          setTimeout(this.check.bind(this)))
        : r.error("Bad element for imagesLoaded " + (s || t));
    }
    ((h.prototype = Object.create(t.prototype)).options = {}),
      (h.prototype.getImages = function () {
        (this.images = []), this.elements.forEach(this.addElementImages, this);
      }),
      (h.prototype.addElementImages = function (t) {
        "IMG" == t.nodeName && this.addImage(t),
          !0 === this.options.background && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && c[e]) {
          for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
            var s = i[n];
            this.addImage(s);
          }
          if ("string" == typeof this.options.background)
            for (
              var o = t.querySelectorAll(this.options.background), n = 0;
              n < o.length;
              n++
            ) {
              var r = o[n];
              this.addElementBackgroundImages(r);
            }
        }
      });
    var c = { 1: !0, 9: !0, 11: !0 };
    function i(t) {
      this.img = t;
    }
    function n(t, e) {
      (this.url = t), (this.element = e), (this.img = new Image());
    }
    return (
      (h.prototype.addElementBackgroundImages = function (t) {
        var e = getComputedStyle(t);
        if (e)
          for (
            var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage);
            null !== n;

          ) {
            var s = n && n[2];
            s && this.addBackground(s, t), (n = i.exec(e.backgroundImage));
          }
      }),
      (h.prototype.addImage = function (t) {
        var t = new i(t);
        this.images.push(t);
      }),
      (h.prototype.addBackground = function (t, e) {
        var e = new n(t, e);
        this.images.push(e);
      }),
      (h.prototype.check = function () {
        var n = this;
        function e(t, e, i) {
          setTimeout(function () {
            n.progress(t, e, i);
          });
        }
        (this.progressedCount = 0),
          (this.hasAnyBroken = !1),
          this.images.length
            ? this.images.forEach(function (t) {
                t.once("progress", e), t.check();
              })
            : this.complete();
      }),
      (h.prototype.progress = function (t, e, i) {
        this.progressedCount++,
          (this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded),
          this.emitEvent("progress", [this, t, e]),
          this.jqDeferred &&
            this.jqDeferred.notify &&
            this.jqDeferred.notify(this, t),
          this.progressedCount == this.images.length && this.complete(),
          this.options.debug && r && r.log("progress: " + i, t, e);
      }),
      (h.prototype.complete = function () {
        var t = this.hasAnyBroken ? "fail" : "done",
          t;
        (this.isComplete = !0),
          this.emitEvent(t, [this]),
          this.emitEvent("always", [this]),
          this.jqDeferred &&
            ((t = this.hasAnyBroken ? "reject" : "resolve"),
            this.jqDeferred[t](this));
      }),
      ((i.prototype = Object.create(t.prototype)).check = function () {
        this.getIsImageComplete()
          ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
          : ((this.proxyImage = new Image()),
            this.proxyImage.addEventListener("load", this),
            this.proxyImage.addEventListener("error", this),
            this.img.addEventListener("load", this),
            this.img.addEventListener("error", this),
            (this.proxyImage.src = this.img.src));
      }),
      (i.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth;
      }),
      (i.prototype.confirm = function (t, e) {
        (this.isLoaded = t), this.emitEvent("progress", [this, this.img, e]);
      }),
      (i.prototype.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (i.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents();
      }),
      (i.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents();
      }),
      (i.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this),
          this.proxyImage.removeEventListener("error", this),
          this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      ((n.prototype = Object.create(i.prototype)).check = function () {
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this),
          (this.img.src = this.url),
          this.getIsImageComplete() &&
            (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
            this.unbindEvents());
      }),
      (n.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (n.prototype.confirm = function (t, e) {
        (this.isLoaded = t),
          this.emitEvent("progress", [this, this.element, e]);
      }),
      (h.makeJQueryPlugin = function (t) {
        (t = t || e.jQuery) &&
          ((o = t).fn.imagesLoaded = function (t, e) {
            return new h(this, t, e).jqDeferred.promise(o(this));
          });
      })(),
      h
    );
  }),
  (function (i, n) {
    "function" == typeof define && define.amd
      ? define(
          ["flickity/js/index", "imagesloaded/imagesloaded"],
          function (t, e) {
            return n(i, t, e);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = n(i, require("flickity"), require("imagesloaded")))
      : (i.Flickity = n(i, i.Flickity, i.imagesLoaded));
  })(window, function (t, e, n) {
    "use strict";
    e.createMethods.push("_createImagesLoaded");
    var i = e.prototype;
    return (
      (i._createImagesLoaded = function () {
        this.on("activate", this.imagesLoaded);
      }),
      (i.imagesLoaded = function () {
        var i;
        this.options.imagesLoaded &&
          n((i = this).slider).on("progress", function (t, e) {
            var e = i.getParentCell(e.img);
            i.cellSizeChange(e && e.element),
              i.options.freeScroll || i.positionSliderAtSelected();
          });
      }),
      e
    );
  });
!(function (r) {
  "use strict";
  r(window).on("resize", function () {
    r(".sf-menu ul.tracked-pos").removeClass("tracked-pos");
  });
  var e,
    i,
    n,
    t,
    a,
    h,
    l,
    d,
    p,
    u,
    f,
    c,
    m,
    s,
    o,
    v,
    g =
      ((i = "sf-breadcrumb"),
      (n = "sf-js-enabled"),
      (t = "sf-with-ul"),
      (a = "sf-arrows"),
      (e = /iPhone|iPad|iPod/i.test(navigator.userAgent)) &&
        r("html").css("cursor", "pointer").on("click", r.noop),
      (h = e),
      (l =
        "behavior" in (e = document.documentElement.style) &&
        "fill" in e &&
        /iemobile/i.test(navigator.userAgent)),
      (d = function (e, t) {
        var s = n;
        t.cssArrows && (s += " " + a), e.toggleClass(s);
      }),
      (p = function (e) {
        e.children("a").toggleClass(t);
      }),
      (u = function (e) {
        var t = e.css("ms-touch-action"),
          t;
        e.css("ms-touch-action", (t = "pan-y" === t ? "auto" : "pan-y"));
      }),
      (f = function (e) {
        var t = r(this),
          s = t.siblings(e.data.popUpSelector);
        0 < s.length &&
          s.is(":hidden") &&
          (t.one("click.superfish", !1),
          "MSPointerDown" === e.type
            ? t.trigger("focus")
            : r.proxy(c, t.parent("li"))());
      }),
      (c = function () {
        var e = r(this),
          t = v(e);
        0 < r(this).parents(".megamenu").length ||
          (clearTimeout(t.sfTimer),
          e.siblings().superfish("hide").end().superfish("show"));
      }),
      (m = function () {
        var e = r(this),
          t = v(e);
        h
          ? r.proxy(s, e, t)()
          : (clearTimeout(t.sfTimer),
            (t.sfTimer = setTimeout(r.proxy(s, e, t), t.delay)));
      }),
      (s = function (e) {
        (e.retainPath = -1 < r.inArray(this[0], e.$path)),
          this.superfish("hide"),
          this.parents("." + e.hoverClass).length ||
            (e.onIdle.call(o(this)), e.$path.length && r.proxy(c, e.$path)());
      }),
      (o = function (e) {
        return e.closest("." + n);
      }),
      (v = function (e) {
        return o(e).data("sf-options");
      }),
      {
        hide: function (e) {
          if (this.length) {
            var t = v((a = this));
            if (!t) return this;
            if (
              r(this).hasClass("menu-item-over") &&
              r(this).hasClass("megamenu")
            )
              return !0;
            var s = !0 === t.retainPath ? t.$path : "",
              n = this.find("li." + t.hoverClass)
                .add(this)
                .not(s)
                .removeClass(t.hoverClass)
                .children(t.popUpSelector),
              s = t.speedOut,
              a;
            if (
              (e && (n.show(), (s = 0)),
              (t.retainPath = !1),
              t.onBeforeHide.call(n),
              "minimal" == t.dropdownStyle
                ? ((a = r(this)), t.onHide.call(a))
                : n.stop(!0, !0).animate(t.animationOut, s, function () {
                    var e = r(this);
                    t.onHide.call(e);
                  }),
              0 < r(this).parents(".megamenu").length)
            )
              return;
            0 < r('#header-outer[data-megamenu-rt="1"]').length &&
              0 < r('#header-outer[data-transparent-header="true"]').length &&
              (0 == r("#header-outer.scrolled-down").length &&
                0 == r("#header-outer.small-nav").length &&
                0 == r("#header-outer.detached").length &&
                0 == r("#header-outer.fixed-menu").length &&
                r("#header-outer").addClass("transparent"),
              0 <
                r(
                  '#header-outer[data-permanent-transparent="1"][data-transparent-header="true"]'
                ).length && r("#header-outer").addClass("transparent"));
          }
          return this;
        },
        show: function () {
          if (!(0 < r(this).parents(".megamenu").length)) {
            var e = v(this);
            if (!e) return this;
            var t = this.addClass(e.hoverClass).children(e.popUpSelector),
              s,
              n;
            return (
              0 < r('#header-outer[data-megamenu-rt="1"]').length &&
                r(this).hasClass("megamenu") &&
                !r(this).hasClass("width-75") &&
                !r(this).hasClass("width-50") &&
                "true" == r("#header-outer").attr("data-transparent-header") &&
                (r("#header-outer").addClass("no-transition"),
                r("#header-outer").removeClass("transparent")),
              e.onBeforeShow.call(t),
              t.hasClass("tracked-pos") ||
                r(t).parents("li").hasClass("megamenu") ||
                r(t).parents("ul").hasClass("sub-menu") ||
                !t.offset() ||
                (t.addClass("temp-hidden-display"),
                (s = r("#top .container").width()),
                (n = t).offset().left -
                  (r(window).width() - s) / 2 +
                  n.width() <=
                r(window).width() - 100
                  ? t.parents("li").removeClass("edge")
                  : t.parents("li").addClass("edge"),
                t.removeClass("temp-hidden-display")),
              "minimal" == e.dropdownStyle
                ? e.onShow.call(t)
                : t.stop(!0, !0).animate(e.animation, e.speed, function () {
                    e.onShow.call(t);
                  }),
              t.hasClass("tracked-pos") ||
                (0 < t.length &&
                  0 < t.parents(".sub-menu").length &&
                  0 < t.parents(".sf-menu").length &&
                  t.offset().left + t.outerWidth() > r(window).width() &&
                  (t.addClass("on-left-side"),
                  t.find("ul").addClass("on-left-side"))),
              t.addClass("tracked-pos"),
              this
            );
          }
        },
        destroy: function () {
          return this.each(function () {
            var e,
              t = r(this),
              s = t.data("sf-options");
            if (!s) return !1;
            (e = t.find(s.popUpSelector).parent("li")),
              clearTimeout(s.sfTimer),
              d(t, s),
              p(e),
              u(t),
              t.off(".superfish").off(".hoverIntent"),
              e.children(s.popUpSelector).attr("style", function (e, t) {
                return t.replace(/display[^;]+;?/g, "");
              }),
              s.$path.removeClass(s.hoverClass + " " + i).addClass(s.pathClass),
              t.find("." + s.hoverClass).removeClass(s.hoverClass),
              s.onDestroy.call(t),
              t.removeData("sf-options");
          });
        },
        init: function (o) {
          return this.each(function () {
            var e = r(this);
            if (e.data("sf-options")) return !1;
            var t = r.extend({}, r.fn.superfish.defaults, o),
              s = e.find(t.popUpSelector).parent("li"),
              n,
              a;
            (t.$path =
              ((a = t),
              e
                .find("li." + a.pathClass)
                .slice(0, a.pathLevels)
                .addClass(a.hoverClass + " " + i)
                .filter(function () {
                  return r(this).children(a.popUpSelector).hide().show().length;
                })
                .removeClass(a.pathClass))),
              e.data("sf-options", t),
              d(e, t),
              p(s),
              u(e),
              (function (e, t) {
                var s = "li:has(" + t.popUpSelector + ")";
                r.fn.hoverIntent && !t.disableHI
                  ? e.hoverIntent(c, m, s)
                  : e
                      .on("mouseenter.superfish", s, c)
                      .on("mouseleave.superfish", s, m);
                var s = "MSPointerDown.superfish";
                h || (s += " touchend.superfish"),
                  l && (s += " mousedown.superfish"),
                  e
                    .on("focusin.superfish", "li", c)
                    .on("focusout.superfish", "li", m)
                    .on(s, "a", t, f);
              })(e, t),
              s.not("." + i).superfish("hide", !0),
              t.onInit.call(this);
          });
        },
      }),
    e;
  (r.fn.superfish = function (e, t) {
    return g[e]
      ? g[e].apply(this, Array.prototype.slice.call(arguments, 1))
      : "object" != typeof e && e
      ? r.error("Method " + e + " does not exist on jQuery.fn.superfish")
      : g.init.apply(this, arguments);
  }),
    (r.fn.superfish.defaults = {
      popUpSelector: "ul,.sf-mega",
      hoverClass: "sfHover",
      pathClass: "overrideThisToUse",
      pathLevels: 1,
      delay: 800,
      animation: { opacity: "show" },
      animationOut: { opacity: "hide" },
      speed: "normal",
      speedOut: "fast",
      cssArrows: !0,
      disableHI: !1,
      onInit: r.noop,
      onBeforeShow: r.noop,
      onShow: r.noop,
      onBeforeHide: r.noop,
      onHide: r.noop,
      onIdle: r.noop,
      onDestroy: r.noop,
      dropdownStyle:
        0 < r('body[data-dropdown-style="minimal"]').length
          ? "minimal"
          : "classic",
    }),
    r.fn.extend({ hideSuperfishUl: g.hide, showSuperfishUl: g.show });
})(jQuery);
!(function ($, T, I) {
  "use strict";
  var e,
    o,
    g = $(T),
    E = $("body"),
    h = $("#slide-out-widget-area"),
    s = $("#slide-out-widget-area-bg"),
    u = $("#header-outer"),
    p = $("#header-secondary-outer"),
    f = $("#header-outer #search-btn a"),
    l = $("#wpadminbar"),
    n = $("#ajax-loading-screen"),
    m = $(".body-border-top"),
    d = $("#page-header-bg"),
    i = $("#footer-outer"),
    c = !(
      !T.nectarOptions ||
      !T.nectarOptions.delay_js ||
      "1" !== T.nectarOptions.delay_js
    ),
    v =
      0 < $(".body-border-right").length ? $(".body-border-right").width() : 0,
    b = u.is("[data-logo-height]") ? parseInt(u.attr("data-logo-height")) : 30,
    w = u.is("[data-padding]") ? parseInt(u.attr("data-padding")) : 28,
    y = u.is("[data-shrink-num]") ? u.attr("data-shrink-num") : 6,
    r = !!u.is('[data-condense="true"]'),
    a = !!u.is('[data-using-logo="1"]'),
    _ = !!u.is('[data-header-resize="1"]'),
    C = !!u.is('[data-transparent-header="true"]'),
    x =
      (u.is('[data-mobile-fixed="1"]'),
      E.is("[data-header-format]") ? E.attr("data-header-format") : "default"),
    k = E.is("[data-hhun]") ? E.attr("data-hhun") : "",
    O = !!E.is('[data-contained-header="true"]'),
    z =
      E.is("[data-cae]") && "swing" !== E.attr("data-cae")
        ? E.attr("data-cae")
        : "easeOutCubic",
    H = E.is("[data-cad]") ? E.attr("data-cad") : "650",
    S = 0 < $('body[data-animated-anchors="true"]').length,
    A = !(
      E.is('[data-m-animate="1"]') ||
      !navigator.userAgent.match(
        /(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/
      )
    ),
    M =
      T.nectarOptions &&
      T.nectarOptions.ocm_btn_position &&
      "left" === T.nectarOptions.ocm_btn_position
        ? "left"
        : "default",
    W = [],
    B = [],
    F = [],
    L = [],
    q = [],
    j = [],
    P = [],
    Y = [],
    R = [],
    V = [],
    X = [],
    N = [],
    D = [],
    Q = [],
    Z = [],
    G = [],
    U = [],
    J = [],
    K = [],
    tt = [],
    et = [],
    at = [],
    nt = [],
    it = [],
    st = [],
    rt = [],
    ot = [],
    lt = "",
    dt = !1,
    ct = !1,
    ht = {},
    ut = { animating: "false", perspect: "not-rolled", inUse: !1 },
    pt = { $usingFullScreenRows: !1 };
  0 < m.length &&
    (("#ffffff" == m.css("background-color") &&
      "light" == E.attr("data-header-color")) ||
      ("rgb(255, 255, 255)" == m.css("background-color") &&
        "light" == E.attr("data-header-color")) ||
      m.css("background-color") == u.attr("data-user-set-bg")) &&
    (ct = !0);
  var gt = {
    usingMobileBrowser: !!navigator.userAgent.match(
      /(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/
    ),
    usingIOS: !!(
      navigator.userAgent.match(/(iPod|iPhone|iPad)/) ||
      (navigator.userAgent.match(/Mac/) &&
        navigator.maxTouchPoints &&
        2 < navigator.maxTouchPoints)
    ),
    usingFrontEndEditor: void 0 !== T.vc_iframe,
    getWindowSize: function () {
      (gt.winH = T.innerHeight),
        (gt.winW = T.innerWidth),
        (gt.adminBarHeight = 0 < l.length ? l.height() : 0),
        (gt.secondaryHeaderHeight =
          0 < p.length && "none" != p.css("display") ? p.outerHeight() : 0),
        (gt.footerOuterHeight = 0 < i.length ? i.outerHeight() : 0);
    },
    scrollTop: 0,
    clientX: 0,
    clientY: 0,
    scrollPosMouse: function () {
      return T.scrollY || g.scrollTop();
    },
    scrollPosRAF: function () {
      (gt.scrollTop = T.scrollY || g.scrollTop()),
        requestAnimationFrame(gt.scrollPosRAF);
    },
    bindEvents: function () {
      gt.usingMobileBrowser ||
        (g.on("scroll", function () {
          gt.scrollTop = gt.scrollPosMouse();
        }),
        I.addEventListener("mousemove", function (t) {
          (gt.clientX = t.clientX), (gt.clientY = t.clientY);
        })),
        g.on("resize", gt.getWindowSize),
        T.addEventListener("orientationchange", gt.getWindowSize);
    },
    init: function () {
      (l = $("#wpadminbar")),
        this.getWindowSize(),
        (this.usingPhoneBrowser = !!(gt.usingMobileBrowser && gt.winW < 690)),
        (this.scrollTop = this.scrollPosMouse()),
        this.bindEvents(),
        (this.usingFrontEndEditor = void 0 !== T.vc_iframe);
    },
  };
  (T.nectarDOMInfo = gt).init();
  var t,
    ft = {
      materialOffCanvasOpen: !1,
      materialSearchOpen: !1,
      permanentTransHeader: !!u.is('[data-permanent-transparent="1"]'),
      animatedScrolling: !1,
      preventScroll: !1,
      ocmOpen: !1,
      ocmAnimating: !1,
      ocmInit: !1,
      mobileHeader: "",
    };
  function mt() {
    Le(),
      gt.usingMobileBrowser || Be(),
      _n(),
      Aa(),
      $("#header-outer .sf-menu > li:not(.megamenu) > ul > li > ul").each(
        function () {
          $(this).removeClass("on-left-side"),
            $(this).offset().left + $(this).outerWidth() > g.width()
              ? ($(this).addClass("on-left-side"),
                $(this).find("ul").addClass("on-left-side"))
              : ($(this).removeClass("on-left-side"),
                $(this).find("ul").removeClass("on-left-side"));
        }
      ),
      Et();
  }
  function vt() {
    setTimeout(function () {
      Be();
    }, 100);
  }
  function bt() {
    Ie(), Le(), zt(), Ca(), gt.usingMobileBrowser || Be();
  }
  function wt() {
    $(".flex-gallery").each(function () {
      var e;
      $().flexslider &&
        ((e = $(this)),
        imagesLoaded($(this), function () {
          var t = !e.find("ul").is('[data-d-autorotate="true"]');
          e.flexslider({
            animation: "fade",
            smoothHeight: !1,
            animationSpeed: 500,
            useCSS: !1,
            touch: !0,
            slideshow: t,
          }),
            $(".flex-gallery .flex-direction-nav li a.flex-next").html(
              '<i class="fa fa-angle-right"></i>'
            ),
            $(".flex-gallery .flex-direction-nav li a.flex-prev").html(
              '<i class="fa fa-angle-left"></i>'
            ),
            $(T).trigger("salient-parallax-bg-recalculate"),
            He();
        }));
    });
  }
  function yt(t, e) {
    (this.lastX = gt.clientX),
      (this.lastY = gt.clientY),
      (this.$el = t),
      (this.iconType = e),
      (this.timeout = !1),
      (this.overEl = !1),
      (this.initialCalc = !1),
      (this.styleType = "default"),
      (this.bgElSelector = ""),
      (this.$dragEl = ""),
      (this.$innerParallaxEl = ""),
      (this.parallaxLastX = 0),
      (this.parallaxLastY = 0),
      (this.$viewEl = ""),
      (this.$closeEl = ""),
      (this.lerpDamp = 0.18),
      (this.parallaxLerp = !0),
      (this.arrowMarkup =
        '<i class="fa fa-angle-left"></i><i class="fa fa-angle-right"></i>'),
      this.createMarkup(),
      this.setup(),
      this.mouseBind();
  }
  function _t() {
    $(
      '.wpb_gallery_slidesflickity_static_height_style .cell[data-lazy="true"]'
    ).each(function () {
      $(this).css({ height: "", width: "" });
      var t = parseInt($(this).find("img").attr("height")),
        e = Rt(
          parseInt($(this).find("img").attr("width")),
          t,
          2e3,
          parseInt($(this).find("img").height())
        ),
        t =
          0 < $(this).find(".item-meta").length
            ? $(this).find(".item-meta").outerHeight()
            : 0;
      $(this).css({ height: e.height + t + "px", width: e.width + "px" });
    });
  }
  function Ct() {
    0 <
      $(
        '.wpb_gallery_slidesflickity_static_height_style .cell[data-lazy="true"]'
      ).length && (_t(), g.on("smartresize", _t));
  }
  function xt() {
    if (0 == $(".nectar-flickity:not(.masonry)").length) return !1;
    (L = []),
      (q = []),
      $(".nectar-flickity:not(.masonry)").each(function (t) {
        L.push(new kt($(this), t));
      }),
      0 < $(".nectar-carousel.nectar-flickity:not(.masonry)").length &&
        (gt.usingMobileBrowser
          ? T.addEventListener("orientationchange", $t)
          : g.on("resize", $t));
  }
  function kt(t, e) {
    (this.$el = t),
      (this.index = e),
      (this.instance = {}),
      (this.$freeScrollBool = !(
        !this.$el.is("[data-free-scroll]") ||
        "true" != this.$el.attr("data-free-scroll")
      )),
      (this.$groupCellsBool = !0),
      (this.$flickContainBool = !0),
      (this.$flcikAttr = 0.025),
      (this.$paginationBool = !1),
      (this.$nextPrevArrowBool = !0),
      (this.$setGallerySizeBool = !0),
      (this.$imagesLoaded = !0),
      (this.$flickCellAlign = "center"),
      (this.fadeBool = !1),
      this.setup();
  }
  function $t() {
    var t = gt.usingMobileBrowser ? 200 : 0;
    setTimeout(function () {
      $(
        '.nectar-carousel.nectar-flickity:not(.masonry):not([data-adaptive-height="true"])'
      ).each(function () {
        Tt($(this));
        var t = Flickity.data($(this)[0]);
        t && t.resize();
      });
    }, t);
  }
  function Tt(t) {
    var e = 0;
    t.find(".flickity-slider > .cell").css("height", "auto"),
      t.find(".flickity-slider > .cell").each(function () {
        $(this).height() > e && (e = $(this).height());
      }),
      e < 10 && (e = "auto"),
      t.find(".flickity-slider > .cell").css("height", e + "px");
  }
  function It() {
    $(".twentytwenty-container").each(function () {
      var t = $(this);
      0 == t.find(".twentytwenty-handle").length &&
        $(this).imagesLoaded(function () {
          t.twentytwenty();
        });
    });
  }
  function Et() {
    $(
      "nav:not(.left-side):not(.right-side) .sf-menu > .nectar-megamenu-menu-item.align-left:not(.width-100)"
    ).each(function () {
      var t = $(this),
        e = $("header#top > .container > .row"),
        a = $(this).find("> ul.sub-menu");
      if (t) {
        if (a.width() + t.offset().left > gt.winW)
          return $(this).addClass("align-middle"), !0;
        $(this)
          .find("> ul.sub-menu")
          .css({
            right:
              e.width() -
              (t.offset().left + t.width() - e.offset().left) -
              $(this).find("> ul.sub-menu").width() +
              t.width(),
            left: "auto",
          }),
          $(this).removeClass("align-middle");
      }
    }),
      $(
        "nav:not(.left-side):not(.right-side) .sf-menu > .nectar-megamenu-menu-item.align-right:not(.width-100)"
      ).each(function () {
        var t = $(this),
          e = $("header#top > .container > .row"),
          a = $(this).find("> ul.sub-menu");
        if (t) {
          if (t.offset().left + t.width() - a.width() < 0)
            return $(this).addClass("align-middle"), !0;
          $(this)
            .find("> ul.sub-menu")
            .css({
              right:
                e.width() - (t.offset().left + t.width() - e.offset().left),
              left: "auto",
            }),
            $(this).removeClass("align-middle");
        }
      }),
      $(
        "nav:not(.left-side):not(.right-side) .sf-menu > .nectar-megamenu-menu-item.align-middle:not(.width-100)"
      ).each(function () {
        var t = $(this),
          e = $("header#top > .container > .row"),
          a = $(this).find("> ul.sub-menu"),
          n,
          i,
          s,
          e,
          t,
          e;
        t &&
          0 < a.length &&
          ((n = e.width()),
          (i = e.offset().left),
          (s = t.offset().left),
          (e = t.width()),
          (t = a.width()),
          a.css({ right: n - (s + e - i) - t / 2 + e / 2, left: "auto" }),
          (e = a.offset()).left < 0
            ? a.css({ right: "auto", left: "0px" })
            : e.left + t > gt.winW && a.css({ right: "0px", left: "auto" }));
      });
  }
  function Ot() {
    var t = g.width(),
      e = $("header#top > .container").width();
    $(
      "header#top nav:not(.left-side):not(.right-side) > ul > li.megamenu:not(.width-50):not(.width-75) > .sub-menu"
    ).css({
      "padding-left": (t - e) / 2 + "px",
      "padding-right": (t + 2 - e) / 2 + "px",
      width: e,
      left: "-" + (t - e) / 2 + "px",
    });
  }
  function zt() {
    gt.winW < 1e3 && "1" == E.attr("data-responsive")
      ? (E.addClass("mobile"), $("header#top nav").css("display", "none"))
      : (E.removeClass("mobile"),
        $("header#top nav").css("display", ""),
        $(
          ".slide-out-widget-area-toggle #toggle-nav .lines-button"
        ).removeClass("close"));
  }
  function Ht() {
    0 != $(".carousel").length &&
      ("undefined" != typeof SalientRecentProjectsCarousel &&
        $("ul.carousel.portfolio-items").each(function (t) {
          nt[t] = new SalientRecentProjectsCarousel($(this));
        }),
      $('ul.carousel:not(".clients"):not(.portfolio-items)').each(function () {
        var t,
          e,
          a = $(this),
          n =
            "true" == $(this).parents(".carousel-wrap").attr("data-full-width")
              ? "auto"
              : 3,
          i =
            "true" == $(this).parents(".carousel-wrap").attr("data-full-width")
              ? "auto"
              : "",
          s =
            "true" == $(this).parents(".carousel-wrap").attr("data-full-width")
              ? 500
              : 453,
          r = "true" == $(this).attr("data-autorotate"),
          o = !0,
          l = !0,
          l =
            ((o =
              !(
                (0 < $("body.ascend").length &&
                  "true" !=
                    $(this)
                      .parents(".carousel-wrap")
                      .attr("data-full-width")) ||
                (0 < $("body.material").length &&
                  "true" !=
                    $(this).parents(".carousel-wrap").attr("data-full-width"))
              ) || $(this).find("li").length % 3 == 0),
            !0),
          t = parseInt($(this).attr("data-scroll-speed"))
            ? parseInt($(this).attr("data-scroll-speed"))
            : 700,
          e = $(this).is("[data-easing]")
            ? $(this).attr("data-easing")
            : "linear",
          d = a;
        0 == a.find("img").length && (d = E),
          imagesLoaded(d, function () {
            a
              .carouFredSel(
                {
                  circular: o,
                  infinite: l,
                  height: "auto",
                  responsive: !0,
                  items: { width: s, visible: { min: 1, max: n } },
                  swipe: {
                    onTouch: !0,
                    onMouse: !0,
                    options: {
                      excludedElements:
                        "button, input, select, textarea, .noSwipe",
                      tap: function (t, e) {
                        !$(e).attr("href") ||
                          $(e).is('[target="_blank"]') ||
                          $(e).is('[rel^="prettyPhoto"]') ||
                          $(e).is(".magnific-popup") ||
                          $(e).is(".magnific") ||
                          T.open($(e).attr("href"), "_self");
                      },
                    },
                    onBefore: function () {
                      a.find(".work-item").trigger("mouseleave"),
                        a.find(".work-item .work-info a").trigger("mouseup");
                    },
                  },
                  scroll: {
                    items: i,
                    easing: e,
                    duration: t,
                    onBefore: function () {
                      ((0 < $("body.ascend").length &&
                        "true" !=
                          a
                            .parents(".carousel-wrap")
                            .attr("data-full-width")) ||
                        (0 < $("body.material").length &&
                          "true" !=
                            a
                              .parents(".carousel-wrap")
                              .attr("data-full-width"))) &&
                        a
                          .parents(".carousel-wrap")
                          .find(".item-count .total")
                          .html(
                            Math.ceil(
                              a.find("> li").length /
                                a.triggerHandler("currentVisible").length
                            )
                          );
                    },
                    onAfter: function () {
                      ((0 < $("body.ascend").length &&
                        "true" !=
                          a
                            .parents(".carousel-wrap")
                            .attr("data-full-width")) ||
                        (0 < $("body.material").length &&
                          "true" !=
                            a
                              .parents(".carousel-wrap")
                              .attr("data-full-width"))) &&
                        (a
                          .parents(".carousel-wrap")
                          .find(".item-count .current")
                          .html(a.triggerHandler("currentPage") + 1),
                        a
                          .parents(".carousel-wrap")
                          .find(".item-count .total")
                          .html(
                            Math.ceil(
                              a.find("> li").length /
                                a.triggerHandler("currentVisible").length
                            )
                          ));
                    },
                  },
                  prev: {
                    button: function () {
                      return a.parents(".carousel-wrap").find(".carousel-prev");
                    },
                  },
                  next: {
                    button: function () {
                      return a.parents(".carousel-wrap").find(".carousel-next");
                    },
                  },
                  auto: { play: r },
                },
                { transition: !0 }
              )
              .animate({ opacity: 1 }, 1300),
              a.parents(".carousel-wrap").wrap('<div class="carousel-outer">'),
              "true" == a.parents(".carousel-wrap").attr("data-full-width") &&
                a.parents(".carousel-outer").css("overflow", "visible"),
              ((0 < $("body.ascend").length &&
                "true" !=
                  a.parents(".carousel-wrap").attr("data-full-width")) ||
                (0 < $("body.material").length &&
                  "true" !=
                    a.parents(".carousel-wrap").attr("data-full-width"))) &&
                $(
                  '<div class="item-count"><span class="current">1</span>/<span class="total">' +
                    a.find("> li").length /
                      a.triggerHandler("currentVisible").length +
                    "</span></div>"
                ).insertAfter(
                  a.parents(".carousel-wrap").find(".carousel-prev")
                ),
              a.addClass("finished-loading"),
              Bt();
          });
      }),
      g.off("smartresize.carouselHeightCalcs"),
      g.on("smartresize.carouselHeightCalcs", Bt));
  }
  function St() {
    0 !== $(".owl-carousel[data-desktop-cols]").length &&
      $(".owl-carousel[data-desktop-cols]").each(function () {
        $(this).addClass("owl-theme");
        var t = $(this),
          e = t.attr("data-autorotate"),
          a = t.attr("data-autorotation-speed"),
          n = !!t.is('[data-loop="true"]'),
          i = !!E.hasClass("rtl");
        $(this).owlCarousel({
          responsive: {
            0: { items: $(this).attr("data-mobile-cols") },
            690: { items: $(this).attr("data-tablet-cols") },
            1e3: { items: $(this).attr("data-desktop-small-cols") },
            1300: { items: $(this).attr("data-desktop-cols") },
          },
          autoplay: e,
          autoplayTimeout: a,
          loop: n,
          rtl: i,
          smartSpeed: 350,
          onTranslate: function () {
            t.addClass("moving");
          },
          onTranslated: function () {
            t.removeClass("moving");
          },
        }),
          $(this).on("changed.owl.carousel", function (t) {
            t.item.count - t.page.size == t.item.index &&
              $(t.target)
                .find(".owl-dots div:last")
                .addClass("active")
                .siblings()
                .removeClass("active");
          });
      });
  }
  function At(t) {
    var e = t.data.wooFlickity.selectedIndex + 1;
    t.data.wooFlickityCount.text(e + "/" + t.data.wooFlickity.slides.length);
  }
  function Mt(t, e, a) {
    (this.$el = t),
      (this.index = a),
      (this.type = e),
      (this.instance = {}),
      this.setup();
  }
  function Wt() {
    (0 === $(".products-carousel").length &&
      0 === $(".nectar-woo-flickity").length) ||
      ($(".products-carousel").each(function (t) {
        new Mt($(this), "legacy", t);
      }),
      (Z = []),
      $(".nectar-woo-flickity").each(function (t) {
        Z.push(new Mt($(this), "flickity", t));
      }));
  }
  function Bt() {
    $(
      '.carousel.finished-loading:not(".portfolio-items, .clients"), .caroufredsel_wrapper .products.finished-loading'
    ).each(function () {
      var t = 0;
      $(this)
        .find("> li")
        .each(function () {
          $(this).height() > t && (t = $(this).height());
        }),
        $(this).css("height", t + 5),
        $(this)
          .parents(".caroufredsel_wrapper")
          .css("height", t + 5),
        ((0 < $("body.ascend").length &&
          "true" !=
            $(this).parents(".carousel-wrap").attr("data-full-width")) ||
          (0 < $("body.material").length &&
            "true" !=
              $(this).parents(".carousel-wrap").attr("data-full-width"))) &&
          ($(this)
            .parents(".carousel-wrap")
            .find(".item-count .current")
            .html(
              Math.ceil(
                ($(this).triggerHandler("currentPosition") + 1) /
                  $(this).triggerHandler("currentVisible").length
              )
            ),
          $(this)
            .parents(".carousel-wrap")
            .find(".item-count .total")
            .html(
              Math.ceil(
                $(this).find("> li").length /
                  $(this).triggerHandler("currentVisible").length
              )
            ));
    });
  }
  function Ft() {
    0 !== $(".carousel.clients").length &&
      ($(".carousel.clients").each(function () {
        var t,
          e = $(this),
          a = !$(this).hasClass("disable-autorotate"),
          t = parseInt($(this).attr("data-max"))
            ? parseInt($(this).attr("data-max"))
            : 5;
        g.width() < 690 &&
          "1" == E.attr("data-responsive") &&
          ((t = 2), $(this).addClass("phone"));
        var n = e;
        0 == e.find("img").length && (n = E),
          imagesLoaded(n, function () {
            e
              .carouFredSel({
                circular: !0,
                responsive: !0,
                items: {
                  height: e.find("> div:first").height(),
                  width: e.find("> div:first").width(),
                  visible: { min: 1, max: t },
                },
                swipe: { onTouch: !0, onMouse: !0 },
                scroll: {
                  items: 1,
                  easing: "easeInOutCubic",
                  duration: "800",
                  pauseOnHover: !0,
                },
                auto: { play: a, timeoutDuration: 2700 },
              })
              .animate({ opacity: 1 }, 1300),
              e.addClass("finished-loading"),
              e.parents(".carousel-wrap").wrap('<div class="carousel-outer">'),
              g.trigger("resize");
          });
      }),
      g.off("smartresize.clientsCarouselHeight", Lt),
      g.on("smartresize.clientsCarouselHeight", Lt));
  }
  function Lt() {
    var t = 0;
    $(".carousel.clients.finished-loading").each(function () {
      $(this)
        .find("> div")
        .each(function () {
          $(this).height() > t && (t = $(this).height());
        }),
        $(this).css("height", t),
        $(this).parent().css("height", t);
    });
  }
  function qt() {
    E.on(
      "mousedown",
      '.caroufredsel_wrapper, .carousel-wrap[data-full-width="true"] .portfolio-items .col .work-info a, .woocommerce .products-carousel ul.products li.product a',
      function () {
        $(this).addClass("active");
      }
    ),
      E.on(
        "mouseup",
        '.caroufredsel_wrapper, .carousel-wrap[data-full-width="true"] .portfolio-items .col .work-info a, .woocommerce .products-carousel ul.products li.product a',
        function () {
          $(this).removeClass("active");
        }
      ),
      $("body.ascend, body.material").on(
        "mouseover",
        ".carousel-next",
        function () {
          $(this)
            .parent()
            .find(".carousel-prev, .item-count")
            .addClass("next-hovered");
        }
      ),
      $("body.ascend, body.material").on(
        "mouseleave",
        ".carousel-next",
        function () {
          $(this)
            .parent()
            .find(".carousel-prev, .item-count")
            .removeClass("next-hovered");
        }
      );
  }
  function jt() {
    return (
      -1 != navigator.userAgent.indexOf("Safari") &&
      -1 == navigator.userAgent.indexOf("Chrome")
    );
  }
  function Pt(t, e, a) {
    return Math.max(Math.min(t, e), a);
  }
  function Yt(t, e, a) {
    return (1 - a) * t + a * e;
  }
  function Rt(t, e, a, n) {
    var n = Math.min(a / t, n / e);
    return { width: t * n, height: e * n };
  }
  function Vt(t) {
    if (t) {
      var t = $(t.bold());
      return t.find("script").remove(), t.html();
    }
    return "";
  }
  function Xt() {
    var t, t, e, e, t;
    return (
      (t =
        (E.is('[data-header-format="left-header"]') && 1e3 <= gt.winW) ||
        E.is('[data-hhun="1"]') ||
        0 < $(".page-template-template-no-header-footer").length ||
        0 < $(".page-template-template-no-header").length
          ? 0
          : !0 === O
          ? $("#header-outer").outerHeight() +
            parseInt($("#header-outer").css("margin-top"))
          : ((t = w - w / 1.8),
            (e = u.outerHeight()),
            ((0 < p.length && E.is(".material")) ||
              (0 < p.length && !E.is(".material") && gt.winW < 1e3)) &&
              (e -= gt.secondaryHeaderHeight),
            u.is('[data-header-resize="1"]') &&
            !u.is(".small-nav") &&
            1e3 <= gt.winW
              ? e - (parseInt(y) + 2 * t)
              : e)),
      1e3 <= gt.winW &&
        0 < $('#header-outer[data-condense="true"]').length &&
        ((e = $(
          '#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9'
        )),
        (t =
          u.height() -
          (parseInt(e.position().top) -
            parseInt(u.find("#logo").css("margin-top"))) -
          parseInt(gt.secondaryHeaderHeight))),
      t
    );
  }
  function Nt(t, e, a) {
    var t = I.querySelector(t);
    t &&
      (t.onload = function () {
        0 < e ? setTimeout(a, e) : a();
      });
  }
  function Dt() {
    gt.usingMobileBrowser ||
      ((this.state = { ocmFocus: !1 }), this.init(), this.events());
  }
  function Qt(t) {
    return ("0" + parseInt(t).toString(16)).slice(-2);
  }
  function Zt() {
    return Math.floor(1e4 * Math.random());
  }
  function Gt(n, t, i) {
    var s = T.scrollY || I.documentElement.scrollTop,
      r = ((n = n || 0), (t = t || 2e3), (i = i || "easeOutSine"), 0),
      o = Math.max(0.1, Math.min(Math.abs(s - n) / t, 0.8)),
      l = {
        easeInOutQuint: function (t) {
          return (t /= 0.5) < 1
            ? 0.5 * Math.pow(t, 5)
            : 0.5 * (Math.pow(t - 2, 5) + 2);
        },
      };
    !(function t() {
      var e = (r += 1 / 60) / o,
        a = l[i](e);
      e < 1
        ? (requestAnimationFrame(t), T.scrollTo(0, s + (n - s) * a))
        : T.scrollTo(0, n);
    })();
  }
  function Ut() {
    var t =
        0 < $("body[data-header-breakpoint]").length &&
        "1000" != E.attr("data-header-breakpoint")
          ? parseInt(E.attr("data-header-breakpoint"))
          : 1e3,
      e = !1;
    return (e = 1e3 != t && 1e3 < gt.winW && gt.winW <= t ? !0 : e);
  }
  function Jt(t) {
    return t.replace(/"/g, "").replace(/url\(|\)$/gi, "");
  }
  (T.nectarState = ft),
    (yt.prototype.setup = function () {
      ("post-grid-images" !== this.iconType &&
        "horizontal-movement" !== this.iconType &&
        "link-indicator" !== this.iconType &&
        "view-indicator" !== this.iconType) ||
        this.viewportTracking();
    }),
    (yt.prototype.viewportTracking = function () {
      var e = this;
      "IntersectionObserver" in T &&
        ((this.observer = new IntersectionObserver(
          function (t) {
            t.forEach(function (t) {
              t.isIntersecting
                ? (e.$el.addClass("active").addClass("el-in-view"),
                  e.$el.find(e.bgElSelector).css("visibility", "visible"),
                  (e.activeViewRAF = !0))
                : (e.$el.find(e.bgElSelector).css("visibility", "hidden"),
                  (e.activeViewRAF = !1),
                  e.$el.removeClass("el-in-view"),
                  0 == $(".el-in-view").length &&
                    (0 < e.$dragEl.length
                      ? e.$dragEl.removeClass("visible")
                      : 0 < e.$viewEl.length &&
                        e.$viewEl.removeClass("visible")));
            });
          },
          { rootMargin: "0px", threshold: 0 }
        )),
        this.observer.observe(this.$el[0]));
    }),
    (yt.prototype.createMarkup = function () {
      var t = this,
        e;
      ("view-indicator" !== this.iconType &&
        "horizontal-movement" !== this.iconType) ||
        (this.$el.is("[data-indicator-bg]") && (this.styleType = "solid"),
        this.$el.is("[data-indicator-style]") &&
          "solid_bg" !== this.$el.attr("data-indicator-style") &&
          (this.styleType = this.$el.attr("data-indicator-style"))),
        ("tooltip_text" === this.styleType ||
          0 < $('[data-indicator-style="tooltip_text"]').length) &&
          ((this.parallaxLerp = !1), (this.lerpDamp = 0.24)),
        "horizontal-movement" === this.iconType &&
          (0 == $(".nectar-drag-indicator").length
            ? ((e = 0 < $("body > #boxed").length ? " in-boxed" : ""),
              $("body").append(
                '<div class="nectar-drag-indicator' +
                  e +
                  '" data-type="' +
                  this.styleType +
                  '"><div class="color-circle"></div><span class="inner-layer">' +
                  this.arrowMarkup +
                  "</span></div>"
              ),
              (this.$dragEl = $(".nectar-drag-indicator")),
              this.dragRAF())
            : (this.$dragEl = $(".nectar-drag-indicator")),
          "default" != this.styleType &&
            (this.$innerParallaxEl = $(".nectar-drag-indicator .inner-layer"))),
        ("view-indicator" !== this.iconType &&
          "link-indicator" !== this.iconType) ||
          ((this.activeViewRAF = !0),
          0 == $(".nectar-view-indicator").length
            ? ((e = 0 < $("body > #boxed").length ? " in-boxed" : ""),
              $("body").append(
                '<div class="nectar-view-indicator' +
                  e +
                  '"><div class="color-circle"></div><span class="inner-layer"></span></div>'
              ),
              "gallery-zoom-indicator" !== this.iconType &&
                $(".nectar-view-indicator span").text(
                  $(".nectar-post-grid[data-indicator-text]").attr(
                    "data-indicator-text"
                  )
                ),
              (this.$viewEl = $(".nectar-view-indicator")),
              setTimeout(function () {
                (t.lastY = gt.clientY), (t.lastX = gt.clientX), t.viewRAF();
              }, 100))
            : (this.$viewEl = $(".nectar-view-indicator")),
          (this.$innerParallaxEl = $(".nectar-view-indicator .inner-layer"))),
        "close-indicator" === this.iconType &&
          (0 == $(".nectar-view-indicator").length
            ? ((e = 0 < $("body > #boxed").length ? " in-boxed" : ""),
              $("body").append(
                '<div class="nectar-close-indicator' +
                  e +
                  '"><div class="inner"><div class="inner-layer"><i class="icon-salient-m-close"></i></div></div></div>'
              ),
              (this.$closeEl = $(".nectar-close-indicator")),
              this.closeRAF())
            : (this.$closeEl = $(".nectar-close-indicator")),
          (this.$innerParallaxEl = $(".nectar-close-indicator .inner-layer"))),
        "post-grid-images" === this.iconType &&
          ((this.activeViewRAF = !0),
          (this.bgElSelector = this.$el.hasClass("nectar-category-grid")
            ? ".nectar-category-grid-item-bg"
            : ".nectar-post-grid-item-bg-wrap"),
          this.$el.hasClass("mouse-move-bound")
            ? (this.$viewEl = this.$el.find(this.bgElSelector))
            : ((this.$viewEl = this.$el.find(this.bgElSelector)),
              this.$el.addClass("mouse-move-bound")),
          this.viewRAF());
    }),
    (yt.prototype.mouseBind = function () {
      var n = this,
        t,
        e,
        a,
        i;
      "horizontal-movement" === this.iconType
        ? (n.$el.is('[data-indicator-blur="true"]') &&
            n.$dragEl.addClass("blurred-bg"),
          n.$el.find(".flickity-viewport").on("mouseenter", function () {
            n.$dragEl.attr("data-type", n.styleType),
              n.$dragEl.addClass("visible"),
              "tooltip_text" === n.styleType &&
              n.$el.is("[data-indicator-text]")
                ? n.$dragEl.find("span").text(n.$el.attr("data-indicator-text"))
                : n.$dragEl.find("span").html(n.arrowMarkup);
            var t = n.$el.is("[data-touch-icon-color]")
                ? "color-" + n.$el.attr("data-touch-icon-color")
                : "",
              e,
              a;
            n.$dragEl
              .removeClass("color-dark")
              .removeClass("color-light")
              .removeClass("color-default"),
              "default" == n.styleType
                ? (n.$dragEl.addClass(t),
                  n.$dragEl.find("> span, i").css("color", ""),
                  n.$dragEl.find(".color-circle").css("background-color", ""))
                : "solid" == n.styleType
                ? ((e = n.$el.attr("data-indicator-bg")),
                  n.$dragEl.find(".color-circle").css("background-color", e),
                  n.$dragEl.find("> span").css("color", e),
                  (a = n.$el.attr("data-indicator-icon")),
                  n.$dragEl.find("i").css("color", a))
                : "tooltip_text" == n.styleType &&
                  ((e = n.$el.attr("data-indicator-bg")),
                  n.$dragEl.find(".color-circle").css("background-color", e),
                  (a = n.$el.attr("data-indicator-icon")),
                  n.$dragEl.find("span").css("color", a));
          }),
          n.$el.find(".flickity-viewport").on("mouseleave", function () {
            n.$dragEl.removeClass("visible");
          }),
          n.$el
            .find(
              ".product-add-to-cart a, .hide-nectar-indicator, .hide-nectar-indicator a"
            )
            .on("mouseenter", function () {
              n.$dragEl.removeClass("visible");
            }),
          n.$el
            .find(
              ".product-add-to-cart a, .hide-nectar-indicator, .hide-nectar-indicator a"
            )
            .on("mouseleave", function () {
              n.$dragEl.addClass("visible");
            }),
          n.$el
            .find(
              ".nectar-post-grid-item .meta-category a, .nectar-post-grid-item .meta-author a"
            )
            .on("mouseenter", function () {
              n.$dragEl.removeClass("visible");
            }),
          n.$el
            .find(
              ".nectar-post-grid-item .meta-category a, .nectar-post-grid-item .meta-author a"
            )
            .on("mouseleave", function () {
              n.$dragEl.addClass("visible");
            }))
        : "close-indicator" === this.iconType
        ? ($("body").on(
            "click",
            '.team-member[data-style*="bio_fullscreen"]',
            function () {
              0 < $(".nectar_team_member_overlay:not(.open)").length ||
                (n.$closeEl.addClass("visible"),
                n.$closeEl.find(".inner").addClass("visible"));
            }
          ),
          $("body").on(
            "click",
            '.nectar_team_member_overlay:not(.animating) a[target="_blank"]',
            function (t) {
              t.stopPropagation();
            }
          ),
          $("body").on(
            "click",
            ".nectar_team_member_overlay:not(.animating)",
            function () {
              n.$closeEl.removeClass("visible"),
                n.$closeEl.find(".inner").removeClass("visible");
            }
          ),
          $("body").on(
            "mouseenter",
            ".nectar_team_member_overlay .bio-inner a",
            function () {
              n.$closeEl.removeClass("visible");
            }
          ),
          $("body").on(
            "mouseleave",
            ".nectar_team_member_overlay .bio-inner a",
            function () {
              n.$closeEl.addClass("visible");
            }
          ))
        : "link-indicator" === this.iconType
        ? (n.$el.off(),
          n.$el.on("mouseenter", function () {
            n.$viewEl.addClass("visible"),
              n.$viewEl.attr("class", function (t, e) {
                return e.replace(/(^|\s)style-\S+/g, "");
              });
            var t = n.$el.attr("data-indicator-bg"),
              e = n.$el.attr("data-indicator-icon");
            n.$viewEl.find(".color-circle").css("background-color", t);
            var e =
              '<div class="nectar-cta loaded" data-style="arrow-animation"><span class="link_wrap" style="color: ' +
              e +
              '"><svg class="next-arrow" width="20px" height="25px" viewBox="0 0 50 80"><polyline stroke-width="9" fill="none" stroke-linecap="round" stroke-linejoin="round" points="0, 0 45, 40 0, 80"></polyline></svg><span class="line" style="background-color: ' +
              e +
              '"></span></span></div>';
            n.$viewEl.find("span").html(e),
              n.$el.is('[data-indicator-blur="true"]') &&
                n.$viewEl.addClass("blurred-bg");
          }),
          n.$el.on("mouseleave", function () {
            n.$viewEl.removeClass("visible").removeClass("blurred-bg");
          }))
        : "view-indicator" === this.iconType
        ? ((t = n.$el.is("[data-indicator-text-color]")
            ? n.$el.attr("data-indicator-text-color")
            : "#fff"),
          (e = n.$el.attr("data-indicator-color")),
          (a = n.$el.attr("data-indicator-style")),
          (i = n.$el.attr("data-indicator-text")),
          n.$el.find(".nectar-post-grid-item").off(),
          n.$el.find(".nectar-post-grid-item").on("mouseenter", function () {
            (n.activeViewRAF = !0),
              n.$viewEl.addClass("visible"),
              n.$viewEl.find("span").text(i),
              n.$viewEl.attr("class", function (t, e) {
                return e.replace(/(^|\s)style-\S+/g, "");
              }),
              n.$viewEl.addClass("style-" + a),
              "see-through" !== a &&
                (n.$viewEl.find(".color-circle").css("background-color", e),
                n.$viewEl.find(".inner-layer").css("color", t)),
              n.$el.is('[data-indicator-blur="true"]') &&
                n.$viewEl.addClass("blurred-bg"),
              clearTimeout(n.timeout);
          }),
          n.$el.find(".nectar-post-grid-item").on("mouseleave", function () {
            n.timeout = setTimeout(function () {
              n.$viewEl.removeClass("visible"),
                n.$viewEl.removeClass("blurred-bg");
            }, 100);
          }),
          n.$el
            .find(
              ".nectar-post-grid-item .meta-category a, .nectar-post-grid-item .meta-author a"
            )
            .on("mouseenter", function () {
              n.$viewEl.removeClass("visible");
            }),
          n.$el
            .find(
              ".nectar-post-grid-item .meta-category a, .nectar-post-grid-item .meta-author a"
            )
            .on("mouseleave", function () {
              n.$viewEl.addClass("visible");
            }))
        : "post-grid-images" === this.iconType &&
          (n.$el.on("mouseenter", function () {
            $(this).addClass("mouse-over"), (n.activeViewRAF = !0);
          }),
          n.$el.on("mouseleave", function () {
            $(this).removeClass("mouse-over");
          }));
    }),
    (yt.prototype.updatePos = function () {
      (this.lastY = Yt(this.lastY, gt.clientY, this.lerpDamp)),
        (this.lastX = Yt(this.lastX, gt.clientX, this.lerpDamp));
    }),
    (yt.prototype.parallaxIcon = function () {
      (this.parallaxLastX =
        Yt(
          this.parallaxLastX,
          parseInt(gt.clientX) - parseInt(this.lastX),
          this.lerpDamp
        ) / 1.65),
        (this.parallaxLastY =
          Yt(
            this.parallaxLastY,
            parseInt(gt.clientY) - parseInt(this.lastY),
            this.lerpDamp
          ) / 1.65),
        0 < this.$innerParallaxEl.length &&
          (this.$innerParallaxEl[0].style.transform =
            "translateX(" +
            Pt(this.parallaxLastX, 12, -12) +
            "px) translateY(" +
            Pt(this.parallaxLastY, 12, -12) +
            "px)");
    }),
    (yt.prototype.dragRAF = function () {
      this.updatePos(),
        (this.$dragEl[0].style.transform =
          "translateX(" + this.lastX + "px) translateY(" + this.lastY + "px)"),
        this.parallaxLerp && this.parallaxIcon(),
        requestAnimationFrame(this.dragRAF.bind(this));
    }),
    (yt.prototype.viewRAF = function () {
      if (
        (this.updatePos(),
        this.activeViewRAF ||
          "view-indicator" === this.iconType ||
          "link-indicator" === this.iconType)
      ) {
        for (var t = 0; t < this.$viewEl.length; t++)
          this.$viewEl[t].style.transform =
            "translateX(" + this.lastX + "px) translateY(" + this.lastY + "px)";
        this.parallaxLerp && this.parallaxIcon();
      }
      requestAnimationFrame(this.viewRAF.bind(this));
    }),
    (yt.prototype.closeRAF = function () {
      this.updatePos(),
        this.$closeEl.css({
          transform:
            "translateX(" + this.lastX + "px) translateY(" + this.lastY + "px)",
        }),
        this.parallaxIcon(),
        requestAnimationFrame(this.closeRAF.bind(this));
    }),
    (kt.prototype.setup = function () {
      this.$el.removeClass(function (t, e) {
        return (e.match(/(^|\s)instance-\S+/g) || []).join(" ");
      }),
        this.$el.addClass("instance-" + this.index);
      var t =
          0 < this.$el.attr("data-controls").length
            ? this.$el.attr("data-controls")
            : "",
        e;
      this.fullWidthOverlow(),
        this.$el.is('[data-format="fixed_text_content_fullwidth"]') &&
          ((this.$flickCellAlign = "left"),
          (this.$groupCellsBool = !1),
          (this.$flickContainBool = !1),
          (this.$flcikAttr = 0.02),
          this.$el.parent().is('[data-alignment="right"]') &&
            (this.$flickCellAlign = "right")),
        1 == this.$freeScrollBool && (this.$groupCellsBool = !1),
        0 < this.$el.find(".nectar-el-parallax-scroll").length &&
          0 <
            this.$el.parents('[class*="wpb_gallery_slidesflickity_"]').length &&
          (this.$groupCellsBool = !1),
        "next_prev_arrows" == t || "next_prev_arrows_overlaid" == t
          ? ((this.$paginationBool = !1), (this.$nextPrevArrowBool = !0))
          : ((this.$paginationBool = !0), (this.$nextPrevArrowBool = !1)),
        "none" == t &&
          ((this.$paginationBool = !1), (this.$nextPrevArrowBool = !1)),
        (this.$wrapAround =
          !this.$el.is("[data-wrap]") ||
          "no-wrap" != this.$el.attr("data-wrap")),
        (this.ticker = !!this.$el.is(".ticker-rotate")),
        (this.tickerPaused = !1),
        this.ticker &&
          ((e = this.$el.is("[data-ticker-speed]")
            ? this.$el.attr("data-ticker-speed")
            : "slow"),
          (this.tickerSpeed = "slow" === e ? 0 : "medium" === e ? 1.2 : 2),
          (this.$wrapAround = !0),
          (this.$paginationBool = !1)),
        (this.$flickity_autoplay = !1),
        (this.$flickity_stored_autoplay = !1),
        (this.inView = !1),
        this.$el.is("[data-autoplay]") &&
          "true" == this.$el.attr("data-autoplay") &&
          !this.ticker &&
          ((this.$flickity_autoplay = !0),
          (this.$flickity_stored_autoplay = 5e3),
          this.$el.is("[data-autoplay-dur]") &&
            0 < this.$el.attr("data-autoplay-dur").length &&
            100 < parseInt(this.$el.attr("data-autoplay-dur")) &&
            parseInt(this.$el.attr("data-autoplay-dur")) < 3e4 &&
            ((this.$flickity_autoplay = parseInt(
              this.$el.attr("data-autoplay-dur")
            )),
            (this.$flickity_stored_autoplay = this.$flickity_autoplay))),
        (this.$frontEndEditorDrag = !(0 < $("body.vc_editor").length)),
        (this.$frontEndEditorPause = 0 < $("body.vc_editor").length),
        (this.$arrowShape = ""),
        this.$el.is('[data-pause-on-hover="true"]') &&
          (this.$frontEndEditorPause = !0),
        this.$el.is('[data-centered-cells="true"]') &&
          (this.$groupCellsBool = !1),
        (this.$flickity_adaptive_height = !1),
        this.$el.is('[data-adaptive-height="true"]') &&
          (this.$flickity_adaptive_height = !0),
        (this.$lazyload =
          0 < this.$el.find("img[data-flickity-lazyload]").length && 1),
        0 < this.$el.find("img[data-flickity-lazyload]").length &&
          this.$el.is('[data-overflow="visible"]') &&
          this.$el.is('[data-wrap="no-wrap"]') &&
          (this.$lazyload = 2),
        (this.$flickity_rtl = !!E.hasClass("rtl")),
        "next_prev_arrows_overlaid" == t ||
        "touch_total" == t ||
        this.$el.hasClass("nectar-simple-slider")
          ? (this.$arrowShape = {
              x0: 10,
              x1: 60,
              y1: 50,
              x2: 70,
              y2: 40,
              x3: 30,
            })
          : (this.$arrowShape = {
              x0: 20,
              x1: 70,
              y1: 30,
              x2: 70,
              y2: 25,
              x3: 70,
            }),
        this.$el.is('[data-format="fixed_text_content_fullwidth"]') &&
          0 < this.$el.parents(".full-width-content.wpb_row").length &&
          this.$el
            .parents(".full-width-content.wpb_row")
            .removeClass("full-width-content")
            .addClass("full-width-section"),
        this.$el.hasClass("nectar-simple-slider") &&
          ((this.$flickity_adaptive_height = !1),
          (this.$paginationBool = !1),
          (this.$nextPrevArrowBool = !1),
          (this.$setGallerySizeBool = !1),
          (this.$wrapAround = !1),
          (this.$imagesLoaded = !1),
          (this.$flcikAttr = 0.022),
          "true" == this.$el.attr("data-pagination") &&
            (this.$paginationBool = !0),
          "true" == this.$el.attr("data-wrap") && (this.$wrapAround = !0),
          this.$el.is('[data-simple-slider-transition="fade"]') &&
            (this.fadeBool = !0));
      var t = 0 < this.$el.parents(".toggle").length;
      !gt.usingFrontEndEditor &&
      -1 == navigator.userAgent.indexOf("Instagram") &&
      "IntersectionObserver" in T &&
      !t &&
      !1 === pt.$usingFullScreenRows
        ? this.lazyInit()
        : this.init();
    }),
    (kt.prototype.lazyInit = function () {
      var e = this;
      (this.observer = new IntersectionObserver(
        function (t) {
          t.forEach(function (t) {
            t.isIntersecting && (e.init(), e.observer.unobserve(t.target));
          });
        },
        {
          root: jt() ? null : I,
          rootMargin: "350px 0px 350px 0px",
          threshold: 0,
        }
      )),
        this.observer.observe(this.$el[0]);
    }),
    (kt.prototype.init = function () {
      (this.instance = new Flickity(".nectar-flickity.instance-" + this.index, {
        setGallerySize: this.$setGallerySizeBool,
        contain: this.$flickContainBool,
        draggable: this.$frontEndEditorDrag,
        lazyLoad: this.$lazyload,
        imagesLoaded: this.$imagesLoaded,
        percentPosition: !0,
        adaptiveHeight: this.$flickity_adaptive_height,
        cellAlign: this.$flickCellAlign,
        groupCells: this.$groupCellsBool,
        prevNextButtons: this.$nextPrevArrowBool,
        freeScroll: this.$freeScrollBool,
        pageDots: this.$paginationBool,
        resize: !0,
        selectedAttraction: this.$flcikAttr,
        autoPlay: this.$flickity_autoplay,
        rightToLeft: this.$flickity_rtl,
        pauseAutoPlayOnHover: this.$frontEndEditorPause,
        wrapAround: this.$wrapAround,
        accessibility: !1,
        fade: this.fadeBool,
        dragThreshold: gt.usingMobileBrowser ? 25 : 3,
        arrowShape: this.$arrowShape,
      })),
        this.events();
    }),
    (kt.prototype.trackView = function () {
      var e = this;
      new IntersectionObserver(
        function (t) {
          t.forEach(function (t) {
            t.isIntersecting ? (e.inView = !0) : (e.inView = !1);
          });
        },
        {
          root: jt() ? null : I,
          rootMargin: "200px 0px 200px 0px",
          threshold: 0,
        }
      ).observe(this.$el[0]);
    }),
    (kt.prototype.fullWidthOverlow = function () {
      this.$el.is('[data-overflow="visible"]') &&
        0 == this.$el.parents(".wpb_column:not(.vc_col-sm-12)").length &&
        (0 <
        this.$el.parents(
          ".wpb_row:not(.nectar-overflow-hidden):not(.full-width-content):not(.inner_row):not(.has-global-section)"
        ).length
          ? this.$el.wrap(
              '<div class="wpb_row vc_row-fluid vc_row full-width-content nectar-overflow-hidden carousel-dynamic-wrapper"><div class="normal-container container"></div></div>'
            )
          : 0 <
              this.$el.parents(
                ".wpb_row.full-width-content:not(.nectar-overflow-hidden)"
              ).length &&
            this.$el
              .parents(
                ".wpb_row.full-width-content:not(.nectar-overflow-hidden)"
              )
              .addClass("nectar-overflow-hidden"));
    }),
    (kt.prototype.events = function () {
      this.$el.hasClass("nectar-simple-slider")
        ? this.simpleSliderStyle()
        : ((this.$el.is('.nectar-carousel[data-wrap="no-wrap"]') &&
            0 <
              this.$el.find('.nectar-fancy-box[data-n-parallax-bg="true"]')
                .length &&
            !0 !== this.$groupCellsBool) ||
            (0 <
              this.$el.parents('[class*="wpb_gallery_slidesflickity_"]')
                .length &&
              0 < this.$el.find(".nectar-el-parallax-scroll").length)) &&
          this.galleryParallax(),
        (this.$el.is('[data-controls="touch_total"]') ||
          this.$el.is('[data-touch-indicator="true"]')) &&
          this.visualizedTotalControls(),
        this.$el.is('[data-format="fixed_text_content_fullwidth"]') &&
          !gt.usingFrontEndEditor &&
          this.fixedContentStyle(),
        0 <
          this.$el.parents(".wpb_gallery_slidesflickity_static_height_style")
            .length &&
          0 < this.$el.find(".item-meta").length &&
          (this.imageCaptionWidth(),
          g.on("resize", this.imageCaptionWidth.bind(this))),
        this.ticker &&
          ("IntersectionObserver" in T && this.trackView(),
          this.tickerRotate(),
          this.instance.on(
            "dragStart",
            function () {
              this.tickerPaused = !0;
            }.bind(this)
          ),
          this.$el[0].addEventListener(
            "mouseleave",
            function () {
              this.tickerPaused = !1;
            }.bind(this)
          ),
          (this.$el.is('[data-pause-on-hover="true"]') ||
            this.$nextPrevArrowBool ||
            gt.usingFrontEndEditor) &&
            this.$el[0].addEventListener(
              "mouseenter",
              function () {
                this.tickerPaused = !0;
              }.bind(this)
            )),
        this.sharedEvents();
    }),
    (kt.prototype.sharedEvents = function () {
      var t,
        e,
        a = this,
        n = this.$el,
        i = this.instance;
      this.instance.on("dragStart", function () {
        clearTimeout(t),
          clearTimeout(e),
          n.addClass("is-dragging"),
          n.addClass("is-moving"),
          n.find(".flickity-prev-next-button").addClass("hidden");
      }),
        this.instance.on("dragEnd", function () {
          n.removeClass("is-dragging"),
            (t = setTimeout(function () {
              n.removeClass("is-moving"),
                n.find(".flickity-prev-next-button").removeClass("hidden");
            }, 600)),
            (e = setTimeout(function () {
              n.removeClass("is-moving");
            }, 300));
        }),
        $(".flickity-prev-next-button").on("click", function () {
          clearTimeout(t),
            $(this)
              .parents(".nectar-flickity")
              .find(".flickity-prev-next-button")
              .addClass("hidden"),
            (t = setTimeout(function () {
              n.find(".flickity-prev-next-button").removeClass("hidden");
            }, 600));
        }),
        this.instance.$element
          .find(".flickity-prev-next-button")
          .on("click", function () {
            var t, e, t;
            !0 !== a.$groupCellsBool &&
              ((t = i.selectedSlide.outerWidth),
              (e = i.size.innerWidth),
              (t = Math.floor(e / t)),
              $(this).hasClass("next") &&
                1 === i.selectedIndex &&
                1 < t &&
                (2 === t || 3 === t ? i.select(2) : 3 < t && i.select(3)));
          }),
        setTimeout(function () {
          $(
            '.nectar-post-grid.nectar-flickity[data-wrap="no-wrap"], .nectar-flickity.nectar-carousel[data-format="default"][data-wrap="no-wrap"]'
          ).addClass("transition-enabled");
        }, 200),
        n.hasClass("nectar-carousel") &&
          !n.is('[data-adaptive-height="true"]') &&
          imagesLoaded(n, function () {
            Tt(n);
          });
    }),
    (kt.prototype.tickerRotate = function () {
      this.tickerPaused ||
        1 != this.inView ||
        (this.instance.slides &&
          ((this.instance.x =
            (this.instance.x - this.tickerSpeed) %
            this.instance.slideableWidth),
          (this.instance.selectedIndex = this.instance.dragEndRestingSelect()),
          this.instance.settle(this.instance.x))),
        T.requestAnimationFrame(this.tickerRotate.bind(this));
    }),
    (kt.prototype.imageCaptionWidth = function () {
      this.$el.find(".item-meta").each(function () {
        $(this).css({ width: $(this).parent().find("img").width() });
      });
    }),
    (kt.prototype.simpleSlideBGConnection = function () {
      var t =
        0 < $("body.vc_editor").length
          ? $that.find(".is-selected > .cell")
          : $that.find(".is-selected");
      this.$rowBG &&
        t &&
        this.$rowBG.css({
          transition: "background-color 0.5s ease-out",
          "background-color": t.is(".has-bg-color")
            ? t.find(".bg-layer-wrap").css("background-color")
            : this.$rowBGStored,
        });
    }),
    (kt.prototype.simpleSliderStyle = function () {
      var e = this.$el,
        r = this,
        t,
        o,
        l;
      "true" == this.$el.attr("data-arrows") &&
        0 == this.$el.find(".flickity-prev-next-button").length &&
        (this.$el.append(
          '<button class="flickity-button flickity-prev-next-button previous" aria-label="' +
            nectar_front_i18n.previous +
            '" type="button"><svg class="flickity-button-icon" viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" class="arrow"></path></svg></button>'
        ),
        this.$el.append(
          '<button class="flickity-button flickity-prev-next-button next" aria-label="' +
            nectar_front_i18n.next +
            '" type="button"><svg class="flickity-button-icon" viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" class="arrow" transform="translate(100, 100) rotate(180) "></path></svg></button>'
        ),
        this.$el
          .find(".flickity-prev-next-button.previous")
          .on("click", function () {
            var t;
            !1 !== r.$wrapAround ||
              0 != r.instance.selectedIndex ||
              (0 != r.instance.isAnimating &&
                void 0 !== r.instance.isAnimating) ||
              ((t = r.instance.x),
              anime({
                targets: r.instance,
                x: t + 100,
                duration: 350,
                easing: "easeOutCubic",
              }),
              r.instance.startAnimation()),
              r.instance.previous();
          }),
        this.$el
          .find(".flickity-prev-next-button.next")
          .on("click", function () {
            var t;
            !1 === r.$wrapAround &&
              r.instance.selectedIndex == r.instance.slides.length - 1 &&
              0 == r.instance.isAnimating &&
              ((t = r.instance.x),
              anime({
                targets: r.instance,
                x: t - 100,
                duration: 350,
                easing: "easeOutCubic",
              }),
              r.instance.startAnimation()),
              r.instance.next();
          })),
        (this.$rowBG = ""),
        (this.$rowBGStored = ""),
        $(this).is('.nectar-simple-slider[data-row-bg-connection="true"]') &&
          ((this.$rowBG = this.$el.parents(".wpb_row")),
          (this.$rowBG = this.$rowBG.find("> .row-bg-wrap .row-bg")),
          (this.$rowBGStored =
            0 < this.$rowBG.length ? this.$rowBG.css("background-color") : ""),
          this.instance.on("change", simpleSlideBGConnection.bind(this)),
          this.simpleSlideBGConnection()),
        0 < this.$el.find(".bg-layer[data-nectar-img-src]").length &&
          (t = new Waypoint({
            element: this.$el[0],
            handler: function () {
              e.find(".bg-layer[data-nectar-img-src]").each(function () {
                var t = $(this)[0],
                  e = t.getAttribute("data-nectar-img-src");
                (t.style.backgroundImage = "url('" + e + "')"),
                  t.classList.add("loaded");
              }),
                t.destroy();
            },
            offset: "95%",
          })),
        this.$el.is('[data-parallax="true"]') &&
          ((o = this.$el.find(".cell")),
          !0 === this.$wrapAround &&
            this.$el
              .find(".flickity-prev-next-button")
              .on("click", function () {
                e.addClass("disabled-nav"),
                  setTimeout(function () {
                    e.removeClass("disabled-nav");
                  }, 500);
              }),
          (l = this.$flickity_rtl ? 1 : -1),
          this.instance.on("scroll", function () {
            $.each(r.instance.slides, function (t, e) {
              var a = o[t].querySelector(".bg-layer"),
                n = o[t].querySelector(".inner"),
                i = r.instance,
                s = 0,
                s =
                  0 === t && 2 < i.slides.length
                    ? Math.abs(i.x) > i.slidesWidth
                      ? i.slidesWidth +
                        i.x +
                        i.slides[i.slides.length - 1].outerWidth +
                        e.target
                      : e.target + i.x
                    : t === i.slides.length - 1 &&
                      Math.abs(i.x) + i.slides[t].outerWidth < i.slidesWidth
                    ? e.target - i.slidesWidth + i.x - i.slides[t].outerWidth
                    : e.target + i.x;
              (a.style.transform = "translate3d(" + s * (l / 2) + "px,0,0)"),
                (n.style.transform = "translate3d(" + s * (l / 4) + "px,0,0)");
            });
          })),
        this.$el.hasClass("nectar-simple-slider") &&
          1 == this.$paginationBool &&
          (this.$el
            .find(".flickity-page-dots li")
            .append(
              '<svg width="65px" height="65px" viewBox="0 0 72 72" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><circle class="time" stroke-width="5" fill="none" stroke-linecap="round" cx="33" cy="33" r="28"></circle></svg>'
            ),
          this.$flickity_stored_autoplay &&
            (this.$el
              .find(".flickity-page-dots li circle.time")
              .css(
                "transition",
                "stroke-dashoffset " +
                  (parseInt(this.$flickity_stored_autoplay) + 100) +
                  "ms linear, stroke 0.2s ease"
              ),
            this.$el.find(".flickity-page-dots li:first").addClass("no-trans"),
            setTimeout(function () {
              e.find(".flickity-page-dots li:first").removeClass("no-trans");
            }, 60),
            this.instance.on("select", function (t) {
              r.instance.playPlayer();
            }),
            this.instance.on("dragEnd", function (t) {
              r.instance.playPlayer(),
                e
                  .find(".flickity-page-dots .is-selected")
                  .removeClass("no-trans");
            }),
            this.instance.on("dragStart", function (t) {
              e.find(".flickity-page-dots .is-selected").addClass("no-trans");
            })));
    }),
    (kt.prototype.galleryParallax = function () {
      var s = this.$el.find(".cell"),
        r = this,
        o =
          0 < this.$el.find(".nectar-fancy-box").length
            ? ".parallax-layer .box-bg"
            : ".nectar-el-parallax-scroll .img-wrap",
        l = !!this.$el.is('[data-wrap="wrap"]'),
        d = this.$flickity_rtl ? 1 : -1;
      this.instance.on("scroll", function () {
        $.each(r.instance.slides, function (t, e) {
          var a = s[t].querySelector(o),
            n = r.instance,
            i = 0,
            i =
              0 === t && l
                ? Math.abs(n.x) > n.slidesWidth
                  ? n.slidesWidth +
                    n.x +
                    n.slides[n.slides.length - 1].outerWidth +
                    e.target
                  : e.target + n.x
                : 1 === t && l
                ? Math.abs(n.x) > n.slidesWidth
                  ? n.slidesWidth +
                    n.x +
                    n.slides[n.slides.length - 2].outerWidth +
                    e.target
                  : e.target + n.x
                : t === n.slides.length - 1 && l
                ? Math.abs(n.x) + n.slides[t].outerWidth < n.slidesWidth
                  ? e.target - n.slidesWidth + n.x - n.slides[t].outerWidth
                  : e.target + n.x
                : t === n.slides.length - 2 &&
                  l &&
                  Math.abs(n.x) +
                    n.slides[t].outerWidth +
                    n.slides[t + 1].outerWidth <
                    n.slidesWidth
                ? e.target - n.slidesWidth + n.x - n.slides[t].outerWidth
                : e.target + n.x;
          a &&
            ((a.style.transform = "translate3d(" + i * (d / 11) + "px,0,0)"),
            (a.style.willChange = "transform"));
        });
      }),
        this.instance.reposition();
    }),
    (kt.prototype.visualizedTotalControls = function () {
      var a = this.$el,
        t = !!(
          this.$el.hasClass("drag-indicator-only") ||
          this.$el.is('[data-r-bottom-total="true"]') ||
          this.ticker
        );
      0 != this.$el.find(".visualized-total").length ||
        t ||
        (0 < this.$el.parents(".full-width-content").length &&
        0 < this.$el.parents(".vc_col-sm-12").length
          ? this.$el.append(
              '<div class="container normal-container"><div class="visualized-total"><span></span></div></div>'
            )
          : this.$el.append(
              '<div class="visualized-total"><span></span></div>'
            )),
        gt.usingMobileBrowser ||
          ((q[this.index] = new yt(this.$el, "horizontal-movement")),
          this.instance.on("dragMove", function (t, e) {
            (gt.clientY = e.clientY), (gt.clientX = e.clientX);
          }),
          this.instance.on("pointerDown", function (t, e) {
            $(".nectar-drag-indicator").addClass("pointer-down");
          }),
          this.instance.on("pointerUp", function (t, e) {
            $(".nectar-drag-indicator").removeClass("pointer-down");
          }));
      var n = this.$el.find(".flickity-page-dots li").length,
        i = this.$el.find(".visualized-total span"),
        s = 1,
        r = this.$el.find(".visualized-total").width();
      t ||
        (g.on("smartresize", function () {
          setTimeout(function () {
            (n = a.find(".flickity-page-dots li").length),
              (r = a.find(".visualized-total").width()),
              (s =
                (r / n) * a.find(".flickity-page-dots .is-selected").index()),
              i.css("width", 100 / n + "%"),
              i.css({ x: s + "px" });
          }, 200);
        }),
        setTimeout(function () {
          (n = a.find(".flickity-page-dots li").length),
            (r = a.find(".visualized-total").width()),
            i.css("width", 100 / n + "%");
        }, 200),
        this.instance.on("change", function (t, e) {
          (s = (r / n) * a.find(".flickity-page-dots .is-selected").index()),
            i.css({ x: s + "px" });
        }));
    }),
    (kt.prototype.fixedContentStyle = function () {
      var e = gt.usingMobileBrowser,
        a = this.$el,
        d = this;
      this.$flickity_stored_autoplay &&
        ($(T).on("nectar-material-ocm-open", function () {
          d.instance.stopPlayer();
        }),
        $(T).on("nectar-material-ocm-close", function () {
          d.instance.playPlayer();
        })),
        this.instance.on("scroll", function () {
          var o, t, l;
          e ||
            (1 != ft.materialOffCanvasOpen
              ? ((o = a.find(".cell").outerWidth() + 25),
                (t =
                  0 < $('body[data-header-format="left-header"]').length &&
                  1e3 < g.width()
                    ? 275
                    : 0),
                (l = (g.width() + t - a.parents(".main-content").width()) / 2),
                (l += parseInt(a.css("margin-left")) + 2),
                d.instance.slides.forEach(function (t, e) {
                  var a = 1,
                    n = 0,
                    i = 0,
                    s = 10,
                    r = 1,
                    t = $(t.cells[0].element).offset().left,
                    e = $(
                      ".nectar-flickity.instance-" +
                        d.index +
                        " .cell:nth-child(" +
                        (e + 1) +
                        ")"
                    ),
                    i =
                      t - l < 0 && -1 * o < t - l
                        ? ((a = 1 + (t - l) / 1500),
                          (r = 1 + (t - l + 70) / 550),
                          (n = -1 * (t - l)),
                          ((t - l) / 25) * -1)
                        : ((r = a = 1), (n = 0)),
                    s;
                  e.css({
                    "z-index": t + 5 - l < 0 && -1 * o < t - l ? 5 : 10,
                  }),
                    e
                      .find(".inner-wrap-outer")
                      .css({
                        transform:
                          "perspective(800px) translateX(" +
                          n +
                          "px) rotateY(" +
                          i +
                          "deg) translateZ(0)",
                        opacity: r,
                      }),
                    e
                      .find(".inner-wrap")
                      .css({ transform: "scale(" + a + ") translateZ(0)" });
                }))
              : d.instance.slides.forEach(function (t, e) {
                  var e = a.find(".cell:nth-child(" + (e + 1) + ")");
                  e
                    .find(".inner-wrap-outer")
                    .css({
                      transform:
                        "perspective(800px) translateX(0) rotateY(0) translateZ(0)",
                      opacity: "1",
                    }),
                    e
                      .find(".inner-wrap")
                      .css({ transform: "scale(1) translateZ(0)" });
                }));
        });
    }),
    (Mt.prototype.setup = function () {
      !gt.usingFrontEndEditor && "IntersectionObserver" in T
        ? this.lazyInit()
        : this.init();
    }),
    (Mt.prototype.init = function () {
      "legacy" === this.type ? this.legacyCarousel() : this.flickityCarousel();
    }),
    (Mt.prototype.lazyInit = function () {
      var e = this;
      (this.observer = new IntersectionObserver(
        function (t) {
          t.forEach(function (t) {
            t.isIntersecting && (e.init(), e.observer.unobserve(t.target));
          });
        },
        {
          root: jt() ? null : I,
          rootMargin: "400px 0px 400px 0px",
          threshold: 0,
        }
      )),
        this.observer.observe(this.$el[0]);
    }),
    (Mt.prototype.legacyCarousel = function () {
      var t = this.$el.find("ul.products"),
        e = 0 < this.$el.parents(".full-width-content ").length ? 400 : 353,
        a = t;
      0 == t.find("img").length && (a = E),
        this.$el.append(
          '<a class="carousel-prev" href="#"><i class="icon-salient-left-arrow"></i></a> <a class="carousel-next" href="#"><i class="icon-salient-right-arrow"></i></a>'
        ),
        imagesLoaded(a, function () {
          t
            .carouFredSel({
              circular: !0,
              responsive: !0,
              items: { width: e, visible: { min: 1, max: "auto" } },
              swipe: {
                onTouch: !0,
                onMouse: !0,
                options: {
                  excludedElements: "button, input, select, textarea, .noSwipe",
                  tap: function (t, e) {
                    !$(e).attr("href") ||
                      $(e).is('[target="_blank"]') ||
                      $(e).hasClass("add_to_wishlist") ||
                      $(e).hasClass("add_to_cart_button") ||
                      $(e).is('[rel^="prettyPhoto"]') ||
                      T.open($(e).attr("href"), "_self"),
                      !$(e).parent().attr("href") ||
                        $(e).parent().is('[target="_blank"]') ||
                        $(e).parent().hasClass("add_to_wishlist") ||
                        $(e).parent().hasClass("add_to_cart_button") ||
                        $(e).parent().is('[rel^="prettyPhoto"]') ||
                        T.open($(e).parent().attr("href"), "_self");
                  },
                },
                onBefore: function () {
                  t.find(".product-wrap").trigger("mouseleave"),
                    t.find(".product a").trigger("mouseup");
                },
              },
              scroll: {
                items: "auto",
                easing: "easeInOutQuart",
                duration: 800,
              },
              prev: {
                button: function () {
                  return t.parents(".carousel-wrap").find(".carousel-prev");
                },
              },
              next: {
                button: function () {
                  return t.parents(".carousel-wrap").find(".carousel-next");
                },
              },
              auto: { play: !1 },
            })
            .animate({ opacity: 1 }, 1300),
            t.parents(".carousel-wrap").wrap('<div class="carousel-outer">'),
            t.addClass("finished-loading"),
            g.trigger("resize");
        });
    }),
    (Mt.prototype.flickityCarousel = function () {
      var a = this.$el;
      this.$el.find(".products > li").each(function () {
        $(this).wrap('<div class="flickity-cell"></div>');
      });
      var t = !!a.is('[data-controls="bottom-pagination"]'),
        e = !a.is('[data-controls="bottom-pagination"]'),
        n = !a.is('[data-wrap="no-wrap"]'),
        i = 1 != n || t,
        s =
          a.is("[data-autorotate-speed]") &&
          800 < parseInt(a.attr("data-autorotate-speed"))
            ? parseInt(a.attr("data-autorotate-speed"))
            : 5e3;
      a.is('[data-autorotate="true"]') || (s = !1),
        this.$el.find("ul.products").addClass("generate-markup"),
        (this.instance = this.$el.find("ul.products")),
        1 == (e = a.is('[data-controls="arrows-overlaid"]') ? !0 : e) &&
          this.instance.on("ready.flickity", function () {
            var t = a.find(".flickity-prev-next-button.previous").detach(),
              e = a.find(".flickity-prev-next-button.next").detach();
            a.find(".nectar-woo-carousel-top").append(t).append(e);
          });
      var r = !1,
        o = "center";
      E.hasClass("rtl") && ((r = !0), (o = "right")),
        a.is('[data-group-columns="no-overflow"]')
          ? ((i = !0), (o = "left"))
          : a.is('[data-group-columns="overflow"]') &&
            ((i = !1), (o = "center"));
      var l = !1,
        e,
        l;
      T.nectarOptions &&
        T.nectarOptions.woo_related_upsell_carousel &&
        "true" == T.nectarOptions.woo_related_upsell_carousel &&
        this.$el.hasClass("related-upsell-carousel") &&
        ((i = !(n = !(l = !0))),
        "center" == o &&
          this.$el.find(".products > div").length < 4 &&
          (o = "left"),
        this.$el.find(".products > div").length < 5 &&
          this.$el.addClass("desktop-controls-hidden")),
        this.instance.flickity({
          draggable: !0,
          contain: !0,
          lazyLoad: !1,
          imagesLoaded: !0,
          cellAlign: o,
          groupCells: i,
          prevNextButtons: e,
          pageDots: t,
          resize: !0,
          adaptiveHeight: !1,
          percentPosition: !0,
          setGallerySize: !0,
          rightToLeft: r,
          wrapAround: n,
          autoPlay: s,
          dragThreshold: gt.usingMobileBrowser ? 25 : 3,
          accessibility: !1,
        }),
        this.$el.is('[data-controls="touch_indicator"]')
          ? gt.usingMobileBrowser ||
            (q.push(new yt(this.$el, "horizontal-movement")),
            this.instance.on("dragMove.flickity", function (t, e) {
              (gt.clientY = e.clientY), (gt.clientX = e.clientX);
            }),
            this.instance.on("pointerDown.flickity", function (t, e) {
              $(".nectar-drag-indicator").addClass("pointer-down");
            }),
            this.instance.on("pointerUp.flickity", function (t, e) {
              $(".nectar-drag-indicator").removeClass("pointer-down");
            }))
          : 1 == e &&
            (a
              .find(".flickity-prev-next-button")
              .append(
                '<svg width="65px" height="65px" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg"><circle stroke-width="3" fill="none" stroke-linecap="round" cx="33" cy="33" r="28"></circle> <circle class="time" stroke-width="3" fill="none" stroke-linecap="round" cx="33" cy="33" r="28"></circle></svg>'
              ),
            (e = $('<div class="woo-flickity-count" />')),
            (1 == l ? a.find("section > h2") : a).append(e),
            At({
              data: {
                wooFlickity: (l = this.instance.data("flickity")),
                wooFlickityCount: e,
              },
            }),
            this.instance.on(
              "select.flickity",
              { wooFlickity: l, wooFlickityCount: e },
              At
            )),
        this.$el.removeClass("animated-in"),
        ua();
    }),
    g.on("orientationchange", function () {
      setTimeout(Lt, 200);
    }),
    (T.requestAnimationFrame =
      T.requestAnimationFrame ||
      T.mozRequestAnimationFrame ||
      T.webkitRequestAnimationFrame ||
      T.msRequestAnimationFrame ||
      function (t) {
        setTimeout(t, 1e3 / 60);
      }),
    $(T).on("resize", function () {
      clearTimeout(t),
        (t = setTimeout(function () {
          $(T).trigger("smartresize");
        }, 125));
    }),
    ($.fn.smartresize = function (t) {
      return t
        ? this.on("smartresize", t)
        : this.trigger("smartresize", ["execAsap"]);
    }),
    (Dt.prototype.init = function () {
      var a,
        t,
        e,
        n,
        i,
        s,
        t = { hidden: !1 },
        e = (a = I).createElement("STYLE"),
        n = "addEventListener" in a,
        i = function (t, e) {
          n ? a.addEventListener(t, e) : a.attachEvent("on" + t, e);
        },
        s = function (t) {
          e.styleSheet ? (e.styleSheet.cssText = t) : (e.innerHTML = t);
        };
      a.getElementsByTagName("HEAD")[0].appendChild(e),
        i("mousedown", function () {
          0 == t.hidden &&
            (s(":focus{outline:0}::-moz-focus-inner{border:0;}"),
            (t.hidden = !0));
        }),
        i("keydown", function () {
          s(""), (t.hidden = !1);
        });
    }),
    (Dt.prototype.events = function () {
      $(T).on("nectar-ocm-open", this.setFocus.bind(this)),
        $(T).on("nectar-ocm-close", this.releaseFocus.bind(this)),
        this.escCloseEvents();
    }),
    (Dt.prototype.setFocus = function () {
      (this.state.ocmFocus = !0),
        $("#slide-out-widget-area").attr("tabindex", "-1").focus();
    }),
    (Dt.prototype.releaseFocus = function () {
      $("#slide-out-widget-area").attr("tabindex", "");
    }),
    (Dt.prototype.escCloseEvents = function () {
      $(I).on("keyup", function (t) {
        27 == t.keyCode &&
          (0 < $(".open-search").length &&
            (closeSearch(), f.removeClass("open-search")),
          0 < $(".ocm-effect-wrap.material-ocm-open").length
            ? $(".slide-out-widget-area-toggle.material-open a").trigger(
                "click"
              )
            : 0 < $("#slide-out-widget-area .slide_out_area_close").length &&
              0 < $("#slide-out-widget-area.open").length &&
              $("#slide-out-widget-area .slide_out_area_close")
                .addClass("non-human-allowed")
                .trigger("click"),
          0 < $(".nectar-slide-in-cart.style_slide_in_click.open").length &&
            rn(),
          0 < $("#review_form_wrapper.open").length &&
            $(".nectar-slide-in-cart-bg").trigger("click"));
      });
    }),
    (jQuery.fn.setCursorPosition = function (t) {
      return 0 == this.length ? this : $(this).setSelection(t, t);
    }),
    (jQuery.fn.setSelection = function (t, e) {
      if (0 == this.length) return this;
      var a = this[0],
        n;
      return (
        a.createTextRange
          ? ((n = a.createTextRange()).collapse(!0),
            n.moveEnd("character", e),
            n.moveStart("character", t),
            n.select())
          : a.setSelectionRange && (a.focus(), a.setSelectionRange(t, e)),
        this
      );
    }),
    $.extend(jQuery.expr.pseudos, {
      transparent: function (t, e, a) {
        return "0" === $(t).css("opacity");
      },
    }),
    ($.cssHooks.color = {
      get: function (t) {
        var e;
        return (
          t.currentStyle
            ? (e = t.currentStyle.color)
            : T.getComputedStyle &&
              (e = I.defaultView
                .getComputedStyle(t, null)
                .getPropertyValue("color")),
          -1 == e.search("rgb")
            ? e
            : (e = e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/))
            ? "#" + Qt(e[1]) + Qt(e[2]) + Qt(e[3])
            : void 0
        );
      },
    }),
    ($.cssHooks.backgroundColor = {
      get: function (t) {
        var e;
        return (
          t.currentStyle
            ? (e = t.currentStyle.backgroundColor)
            : T.getComputedStyle &&
              (e = I.defaultView
                .getComputedStyle(t, null)
                .getPropertyValue("background-color")),
          -1 == e.search("rgb")
            ? e
            : (e = e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/))
            ? "#" + Qt(e[1]) + Qt(e[2]) + Qt(e[3])
            : void 0
        );
      },
    }),
    (function (o) {
      function i(t, e) {
        var a = o.proxy(this.process, this);
        (this.$body = o("body")),
          (this.$scrollElement = o(o(t).is("body") ? T : t)),
          (this.options = o.extend({}, i.DEFAULTS, e)),
          (this.selector = (this.options.target || "") + " ul li > a"),
          (this.offsets = []),
          (this.targets = []),
          (this.activeTarget = null),
          (this.scrollHeight = 0),
          this.$scrollElement.on("scroll.bs.scrollspy", a),
          (this.pageSubmenuHeight = 0),
          this.calcPageSubemnu(),
          this.refresh(),
          this.process(),
          o(T).on("resize", this.calcPageSubemnu.bind(this));
      }
      (i.VERSION = "3.2.0"),
        (i.DEFAULTS = { offset: 10 }),
        (i.prototype.calcPageSubemnu = function () {
          ((0 < o('.page-submenu[data-sticky="true"]').length &&
            0 == o('body[data-hhun="1"]').length) ||
            (0 < o('.page-submenu[data-sticky="true"]').length &&
              0 < o('#header-outer[data-remove-fixed="1"]').length)) &&
            (this.pageSubmenuHeight = o(".page-submenu").height());
        }),
        (i.prototype.getScrollHeight = function () {
          return (
            this.$scrollElement[0].scrollHeight ||
            Math.max(this.$body[0].scrollHeight, I.documentElement.scrollHeight)
          );
        }),
        (i.prototype.refresh = function () {
          var t,
            a = "offset",
            n = 0;
          (null != (t = this.$scrollElement[0]) && t === t.window) ||
            ((a = "position"), (n = this.$scrollElement.scrollTop())),
            (this.offsets = []),
            (this.targets = []),
            (this.scrollHeight = this.getScrollHeight());
          var e = this;
          this.$body
            .find(this.selector)
            .map(function () {
              var t = o(this),
                e = t.data("target") || t.attr("href"),
                t = /^#./.test((e = "#%20" === e ? "" : e)) && o(e);
              return t && t.length && t.is(":visible")
                ? [[t[a]().top + n, e]]
                : null;
            })
            .sort(function (t, e) {
              return t[0] - e[0];
            })
            .each(function () {
              e.offsets.push(this[0]), e.targets.push(this[1]);
            });
        }),
        (i.prototype.process = function () {
          if (ft.preventScroll) return !0;
          var t,
            e = gt.scrollTop + this.options.offset + this.pageSubmenuHeight,
            a = this.getScrollHeight(),
            n =
              this.options.offset +
              a -
              this.$scrollElement.height() -
              this.pageSubmenuHeight,
            i = this.offsets,
            s = this.targets,
            r = this.activeTarget;
          if (this.activeTarget && e < this.offsets[0] && 0 < this.offsets[0])
            return (
              (this.activeTarget = null),
              void o(this.selector)
                .parentsUntil(this.options.target, ".current-menu-item")
                .removeClass("current-menu-item")
                .removeClass("sfHover")
            );
          if ((this.scrollHeight != a && this.refresh(), n <= e))
            return r != (t = s[s.length - 1]) && this.activate(t);
          if (r && e <= i[0]) return r != (t = s[0]) && this.activate(t);
          for (t = i.length; t--; )
            r != s[t] &&
              e >= i[t] &&
              (!i[t + 1] || e <= i[t + 1]) &&
              this.activate(s[t]);
        }),
        (i.prototype.activate = function (t) {
          (this.activeTarget = t),
            o(this.selector)
              .parentsUntil(this.options.target, ".current-menu-item")
              .removeClass("current-menu-item")
              .removeClass("sfHover");
          var t =
              this.selector +
              '[data-target="' +
              t +
              '"],' +
              this.selector +
              '[href="' +
              t +
              '"]',
            t = o(t).parents("li").addClass("current-menu-item");
          (t = t.parent(".dropdown-menu").length
            ? t.closest("li.dropdown").addClass("current-menu-item")
            : t).trigger("activate.bs.scrollspy");
        });
      var t = o.fn.scrollspy;
      (o.fn.scrollspy = function (n) {
        return this.each(function () {
          var t = o(this),
            e = t.data("bs.scrollspy"),
            a;
          e ||
            t.data(
              "bs.scrollspy",
              (e = new i(this, "object" == typeof n && n))
            ),
            "string" == typeof n && e[n]();
        });
      }),
        (o.fn.scrollspy.Constructor = i),
        (o.fn.scrollspy.noConflict = function () {
          return (o.fn.scrollspy = t), this;
        });
    })(jQuery);
  var Kt,
    te,
    ee = (function (t) {
      t = t.split("+").join(" ");
      for (var e, a = {}, n = /[?&]?([^=]+)=([^&]*)/g; (e = n.exec(t)); )
        a[decodeURIComponent(e[1])] = decodeURIComponent(e[2]);
      return a;
    })(I.location.search),
    Kt = jQuery,
    te = Kt(T);
  Kt.fn.visible = function (t, e, a) {
    if (!(this.length < 1)) {
      var n = 1 < this.length ? this.eq(0) : this,
        i = n.get(0),
        s = te.width(),
        r = te.height(),
        e = ((a = a || "both"), !0 !== e || i.offsetWidth * i.offsetHeight);
      if ("function" == typeof i.getBoundingClientRect) {
        var o = i.getBoundingClientRect(),
          l = 0 <= o.top && o.top < r,
          d = 0 < o.bottom && o.bottom <= r,
          c = 0 <= o.left && o.left < s,
          h = 0 < o.right && o.right <= s,
          u = t ? l || d : l && d,
          o = t ? c || h : c && h;
        return "both" === a
          ? e && u && o
          : "vertical" === a
          ? e && u
          : "horizontal" === a
          ? e && o
          : void 0;
      }
      var l = te.scrollTop(),
        d = l + r,
        c = te.scrollLeft(),
        h = c + s,
        u = n.offset(),
        o = u.top,
        r = o + n.height(),
        s = u.left,
        u = s + n.width(),
        n = !0 === t ? r : o,
        o = !0 === t ? o : r,
        r = !0 === t ? u : s,
        u = !0 === t ? s : u;
      return "both" === a
        ? !!e && o <= d && l <= n && u <= h && c <= r
        : "vertical" === a
        ? !!e && o <= d && l <= n
        : "horizontal" === a
        ? !!e && u <= h && c <= r
        : void 0;
    }
  };
  var ae = function (t, e, a, n, i, s) {
      for (
        var r = 0, o = ["webkit", "moz", "ms", "o"], l = 0;
        l < o.length && !T.requestAnimationFrame;
        ++l
      )
        (T.requestAnimationFrame = T[o[l] + "RequestAnimationFrame"]),
          (T.cancelAnimationFrame =
            T[o[l] + "CancelAnimationFrame"] ||
            T[o[l] + "CancelRequestAnimationFrame"]);
      T.requestAnimationFrame ||
        (T.requestAnimationFrame = function (t) {
          var e = new Date().getTime(),
            a = Math.max(0, 16 - (e - r)),
            n = T.setTimeout(function () {
              t(e + a);
            }, a);
          return (r = e + a), n;
        }),
        T.cancelAnimationFrame ||
          (T.cancelAnimationFrame = function (t) {
            clearTimeout(t);
          });
      var d = this,
        c;
      for (c in ((d.options = {
        useEasing: !0,
        useGrouping: !0,
        separator: ",",
        decimal: ".",
        easingFn: null,
        formattingFn: null,
      }),
      s))
        s.hasOwnProperty(c) && (d.options[c] = s[c]);
      "" === d.options.separator && (d.options.useGrouping = !1),
        d.options.prefix || (d.options.prefix = ""),
        d.options.suffix || (d.options.suffix = ""),
        (d.d = "string" == typeof t ? I.getElementById(t) : t),
        (d.startVal = Number(e)),
        (d.endVal = Number(a)),
        (d.countDown = d.startVal > d.endVal),
        (d.frameVal = d.startVal),
        (d.decimals = Math.max(0, n || 0)),
        (d.dec = Math.pow(10, d.decimals)),
        (d.duration = 1e3 * Number(i) || 2e3),
        (d.formatNumber = function (t) {
          var t, e, t, a;
          if (
            ((t = t.toFixed(d.decimals)),
            (e = (t = (t += "").split("."))[0]),
            (t = 1 < t.length ? d.options.decimal + t[1] : ""),
            (a = /(\d+)(\d{3})/),
            d.options.useGrouping)
          )
            for (; a.test(e); )
              e = e.replace(a, "$1" + d.options.separator + "$2");
          return d.options.prefix + e + t + d.options.suffix;
        }),
        (d.easeOutExpo = function (t, e, a, n) {
          return (a * (1 - Math.pow(2, (-10 * t) / n)) * 1024) / 1023 + e;
        }),
        (d.easingFn = d.options.easingFn || d.easeOutExpo),
        (d.formattingFn = d.options.formattingFn || d.formatNumber),
        (d.version = function () {
          return "1.7.1";
        }),
        (d.printValue = function (t) {
          var t = d.formattingFn(t);
          "INPUT" === d.d.tagName
            ? (this.d.value = t)
            : "text" === d.d.tagName || "tspan" === d.d.tagName
            ? (this.d.textContent = t)
            : (this.d.innerHTML = t);
        }),
        (d.count = function (t) {
          d.startTime || (d.startTime = t);
          var t = (d.timestamp = t) - d.startTime;
          (d.remaining = d.duration - t),
            d.options.useEasing
              ? d.countDown
                ? (d.frameVal =
                    d.startVal -
                    d.easingFn(t, 0, d.startVal - d.endVal, d.duration))
                : (d.frameVal = d.easingFn(
                    t,
                    d.startVal,
                    d.endVal - d.startVal,
                    d.duration
                  ))
              : d.countDown
              ? (d.frameVal =
                  d.startVal - (d.startVal - d.endVal) * (t / d.duration))
              : (d.frameVal =
                  d.startVal + (d.endVal - d.startVal) * (t / d.duration)),
            d.countDown
              ? (d.frameVal = d.frameVal < d.endVal ? d.endVal : d.frameVal)
              : (d.frameVal = d.frameVal > d.endVal ? d.endVal : d.frameVal),
            (d.frameVal = Math.round(d.frameVal * d.dec) / d.dec),
            d.printValue(d.frameVal),
            t < d.duration
              ? (d.rAF = requestAnimationFrame(d.count))
              : d.callback && d.callback();
        }),
        (d.start = function (t) {
          return (d.callback = t), (d.rAF = requestAnimationFrame(d.count)), !1;
        }),
        (d.pauseResume = function () {
          d.paused
            ? ((d.paused = !1),
              delete d.startTime,
              (d.duration = d.remaining),
              (d.startVal = d.frameVal),
              requestAnimationFrame(d.count))
            : ((d.paused = !0), cancelAnimationFrame(d.rAF));
        }),
        (d.reset = function () {
          (d.paused = !1),
            delete d.startTime,
            (d.startVal = e),
            cancelAnimationFrame(d.rAF),
            d.printValue(d.startVal);
        }),
        (d.update = function (t) {
          cancelAnimationFrame(d.rAF),
            (d.paused = !1),
            delete d.startTime,
            (d.startVal = d.frameVal),
            (d.endVal = Number(t)),
            (d.countDown = d.startVal > d.endVal),
            (d.rAF = requestAnimationFrame(d.count));
        }),
        d.printValue(d.startVal);
    },
    ne = function (t, e, a, n) {
      return a * ((t = t / n - 1) * t * t + 1) + e;
    };
  function ie(t, e) {
    var a, n;
    0 < t.length &&
      ((a = I.head || I.getElementsByTagName("head")[0]),
      ((n = I.createElement("style")).type = "text/css"),
      n.styleSheet
        ? (n.styleSheet.cssText = t)
        : n.appendChild(I.createTextNode(t)),
      $(n).attr("id", e),
      $("head")
        .find("#" + e)
        .remove(),
      a.appendChild(n));
  }
  function se() {
    setTimeout(function () {
      0 < $('body[data-ls="magnific"]').length ||
      0 < $('body[data-ls="pretty_photo"]').length
        ? ($("a.pp").removeClass("pp").addClass("magnific-popup"),
          $(
            "a[rel^='prettyPhoto']:not([rel*='_gal']):not([rel*='product-gallery']):not([rel*='prettyPhoto['])"
          )
            .removeAttr("rel")
            .addClass("magnific-popup"),
          $(".wpb_gallery .wpb_gallery_slidesnectarslider_style").each(
            function () {
              $(this)
                .find(".swiper-slide a:not(.ext-url-link)")
                .addClass("pretty_photo");
            }
          ),
          $(
            '.wpb_gallery_slides.wpb_flexslider:not([data-onclick="custom_link"])'
          ).each(function () {
            $(this).find(".slides > li > a").addClass("pretty_photo");
          }),
          $(
            ".wpb_gallery_slidesflickity_style, .wpb_gallery_slidesflickity_static_height_style"
          ).each(function () {
            $(this)
              .find(".cell > a:not(.ext-url-link)")
              .addClass("pretty_photo");
          }),
          $(
            ".portfolio-items, .wpb_gallery .swiper-slide, .wpb_gallery_slidesflickity_style .cell, .wpb_gallery_slidesflickity_static_height_style .cell, .wpb_gallery_slides.wpb_flexslider ul > li, .wpb_gallery .parallax-grid-item, .nectar-post-grid-item"
          ).each(function () {
            0 < $(this).find(".pretty_photo").length
              ? $(this)
                  .find(".pretty_photo")
                  .removeClass("pretty_photo")
                  .addClass("gallery")
                  .addClass("magnific")
              : 0 < $(this).find('a[rel*="prettyPhoto["]').length &&
                $(this)
                  .find('a[rel*="prettyPhoto["]')
                  .removeAttr("rel")
                  .addClass("gallery")
                  .addClass("magnific");
          }),
          $("a[data-rel='prettyPhoto[product-gallery]']").each(function () {
            $(this)
              .removeAttr("data-rel")
              .addClass("magnific")
              .addClass("gallery");
          }),
          E.hasClass("nectar-auto-lightbox") &&
            ($(".gallery").each(function () {
              0 == $(this).find('.gallery-icon a[rel^="prettyPhoto"]').length &&
                $(this)
                  .find(
                    '.gallery-item .gallery-icon a[href*=".jpg"], .gallery-item .gallery-icon a[href*=".png"], .gallery-item .gallery-icon a[href*=".gif"], .gallery-item .gallery-icon a[href*=".jpeg"]'
                  )
                  .addClass("magnific")
                  .addClass("gallery")
                  .removeClass("pretty_photo");
            }),
            $(".main-content img").each(function () {
              $(this).parent().is("[href]") &&
                !$(this).parent().is(".magnific-popup") &&
                0 == $(this).parents(".tiled-gallery").length &&
                0 == $(this).parents(".product-image").length &&
                0 == $(this).parents(".iosSlider.product-slider").length &&
                $(this)
                  .parent()
                  .attr("href")
                  .match(/\.(jpg|png|gif)\b/) &&
                $(this)
                  .parent()
                  .addClass("magnific-popup")
                  .addClass("image-link");
            })),
          $(
            "a.magnific-popup:not(.gallery):not(.nectar_video_lightbox):not(.nectar_video_lightbox_trigger)"
          ).magnificPopup({
            type: "image",
            callbacks: {
              imageLoadComplete: function () {
                var t = this;
                setTimeout(function () {
                  t.wrap.addClass("mfp-image-loaded");
                }, 10);
              },
              beforeOpen: function () {
                this.st.image.markup = this.st.image.markup.replace(
                  "mfp-figure",
                  "mfp-figure mfp-with-anim"
                );
              },
              open: function () {
                ($.magnificPopup.instance.next = function () {
                  var t = this;
                  this.wrap.removeClass("mfp-image-loaded"),
                    setTimeout(function () {
                      $.magnificPopup.proto.next.call(t);
                    }, 100);
                }),
                  ($.magnificPopup.instance.prev = function () {
                    var t = this;
                    this.wrap.removeClass("mfp-image-loaded"),
                      setTimeout(function () {
                        $.magnificPopup.proto.prev.call(t);
                      }, 100);
                  });
              },
            },
            fixedContentPos: !1,
            mainClass: "mfp-zoom-in",
            removalDelay: 400,
          }),
          $(
            "a.magnific-popup.nectar_video_lightbox, .nectar_video_lightbox_trigger, .magnific_nectar_video_lightbox a.link_text, .swiper-slide a[href*=youtube], .swiper-slide a[href*=vimeo], .nectar-video-box a.full-link.magnific-popup"
          ).magnificPopup({
            type: "iframe",
            fixedContentPos: !1,
            mainClass: "mfp-zoom-in",
            removalDelay: 400,
          }),
          $("a.magnific.gallery").each(function () {
            var t =
              0 < $(this).closest(".wpb_column").length
                ? $(this).closest(".wpb_column")
                : $(this).parents(".row");
            0 < t.length &&
              !t.hasClass("lightbox-col") &&
              (t.magnificPopup({
                type: "image",
                delegate: "a.magnific",
                mainClass: "mfp-zoom-in",
                fixedContentPos: !1,
                callbacks: {
                  elementParse: function (t) {
                    ($(t.el).is("[href]") &&
                      -1 != $(t.el).attr("href").indexOf("iframe=true")) ||
                    ($(t.el).is("[href]") &&
                      -1 !=
                        $(t.el)
                          .attr("href")
                          .indexOf("https://www.youtube.com/watch"))
                      ? (t.type = "iframe")
                      : $(t.el).is("[href]") &&
                        -1 != $(t.el).attr("href").indexOf("video-popup-")
                      ? (t.type = "inline")
                      : (t.type = "image");
                  },
                  imageLoadComplete: function () {
                    var t = this;
                    setTimeout(function () {
                      t.wrap.addClass("mfp-image-loaded");
                    }, 10);
                  },
                  beforeOpen: function () {
                    this.st.image.markup = this.st.image.markup.replace(
                      "mfp-figure",
                      "mfp-figure mfp-with-anim"
                    );
                  },
                  open: function () {
                    var t;
                    0 < $(this.content).find(".mejs-video video").length &&
                      $().mediaelementplayer &&
                      ($(this.content)
                        .find(".mejs-video video")[0]
                        .player.remove(),
                      (t = this),
                      setTimeout(function () {
                        $(t.content).find("video").mediaelementplayer(),
                          $(t.content)
                            .find(".mejs-video video")[0]
                            .player.play();
                      }, 50)),
                      ($.magnificPopup.instance.next = function () {
                        var t = this;
                        this.wrap.removeClass("mfp-image-loaded"),
                          setTimeout(function () {
                            $.magnificPopup.proto.next.call(t),
                              0 <
                                $(t.content).find(".mejs-video video").length &&
                                $(t.content)
                                  .find(".mejs-video video")[0]
                                  .play();
                          }, 100);
                      }),
                      ($.magnificPopup.instance.prev = function () {
                        var t = this;
                        this.wrap.removeClass("mfp-image-loaded"),
                          setTimeout(function () {
                            $.magnificPopup.proto.prev.call(t),
                              0 <
                                $(t.content).find(".mejs-video video").length &&
                                $(t.content)
                                  .find(".mejs-video video")[0]
                                  .play();
                          }, 100);
                      });
                  },
                  close: function () {
                    0 < $(this.content).find(".mejs-video video").length &&
                      $(this.content).find(".mejs-video video")[0].load();
                  },
                },
                removalDelay: 400,
                gallery: { enabled: !0 },
              }),
              t.addClass("lightbox-col"));
          }))
        : 0 < $('body[data-ls="fancybox"]').length &&
          (function () {
            $("a.pp").removeClass("pp").attr("data-fancybox", ""),
              $(
                "a[rel^='prettyPhoto']:not([rel*='_gal']):not([rel*='product-gallery']):not([rel*='prettyPhoto['])"
              )
                .removeAttr("rel")
                .attr("data-fancybox", "");
            var t = Zt();
            $(".wpb_gallery .wpb_gallery_slidesnectarslider_style").each(
              function () {
                (t = Zt()),
                  $(this)
                    .find(".swiper-slide a:not(.ext-url-link)")
                    .attr("data-fancybox", "group_" + t);
              }
            ),
              $(
                '.wpb_gallery_slides.wpb_flexslider:not([data-onclick="custom_link"])'
              ).each(function () {
                (t = Zt()),
                  $(this)
                    .find(".slides > li > a")
                    .attr("data-fancybox", "group_" + t);
              }),
              $(
                ".wpb_gallery_slidesflickity_style, .wpb_gallery_slidesflickity_static_height_style"
              ).each(function () {
                (t = Zt()),
                  $(this)
                    .find(".cell > a:not(.ext-url-link)")
                    .attr("data-fancybox", "group_" + t);
              }),
              $(
                ".portfolio-items, .wpb_gallery_slidesparallax_image_grid, .nectar-post-grid-item"
              ).each(function () {
                (t = Zt()),
                  0 < $(this).find(".pretty_photo").length
                    ? $(this)
                        .find(".pretty_photo")
                        .removeClass("pretty_photo")
                        .attr("data-fancybox", "group_" + t)
                    : 0 < $(this).find('a[rel*="prettyPhoto["]').length &&
                      $(this)
                        .find('a[rel*="prettyPhoto["]')
                        .removeAttr("rel")
                        .attr("data-fancybox", "group_" + t);
              }),
              E.hasClass("nectar-auto-lightbox") &&
                ($(".gallery").each(function () {
                  var t;
                  0 ==
                    $(this).find('.gallery-icon a[rel^="prettyPhoto"]')
                      .length &&
                    ((t = Zt()),
                    $(this)
                      .find(
                        '.gallery-item .gallery-icon a[href*=".jpg"], .gallery-item .gallery-icon a[href*=".png"], .gallery-item .gallery-icon a[href*=".gif"], .gallery-item .gallery-icon a[href*=".jpeg"]'
                      )
                      .attr("data-fancybox", "group_" + t)
                      .removeClass("pretty_photo"));
                }),
                $(".wp-block-gallery").each(function () {
                  var t = Zt();
                  $(this)
                    .find(
                      '.wp-block-image a[href*=".jpg"], .wp-block-image a[href*=".png"], .wp-block-image a[href*=".gif"], .wp-block-image a[href*=".jpeg"], .wp-block-image a[href*=".webp"]'
                    )
                    .attr("data-fancybox", "group_" + t)
                    .removeClass("pretty_photo");
                }),
                $(".main-content img").each(function () {
                  $(this).parent().is("[href]") &&
                    !$(this).parent().is(".magnific-popup") &&
                    0 == $(this).parents(".tiled-gallery").length &&
                    0 == $(this).parents(".product-image").length &&
                    0 == $(this).parents(".gallery-icon").length &&
                    0 == $(this).parents(".wp-block-gallery").length &&
                    0 ==
                      $(this).parents(".woocommerce-product-gallery").length &&
                    0 ==
                      $(this).parents(".wpb_gallery_slides.wpb_flexslider")
                        .length &&
                    0 == $(this).parents(".iosSlider.product-slider").length &&
                    $(this)
                      .parent()
                      .attr("href")
                      .match(/\.(jpg|png|gif)\b/) &&
                    $(this).parent().attr("data-fancybox", "");
                }));
            var e = ($("body.admin-bar").length, [60, 100]);
            gt.winW < 1e3 && (e = [0, 0]),
              $("[data-fancybox]").fancybox({
                animationEffect: "zoom-in-out",
                animationDuration: 350,
                buttons: ["fullScreen", "zoom", "close"],
                margin: e,
                backFocus: !1,
                loop: !0,
                caption: function () {
                  return $(this).attr("title");
                },
                hash: !1,
                beforeLoad: function (t) {
                  "string" != typeof t.current.src && $.fancybox.close(!0);
                },
                mobile: { margin: 0 },
              });
          })();
    }, 60);
  }
  function re() {
    $(lt + " .wpb_animate_when_almost_visible").each(function () {
      var t = $(this),
        e,
        a = new Waypoint({
          element: t[0],
          handler: function () {
            (0 < t.parents(".wpb_tab").length &&
              "hidden" == t.parents(".wpb_tab").css("visibility")) ||
            t.hasClass("animated")
              ? a.destroy()
              : (t.addClass("animated"),
                t.addClass("wpb_start_animation"),
                a.destroy(),
                t.is(".nectar-button") &&
                  0 < $('body[data-button-style*="rounded_shadow"]').length &&
                  setTimeout(function () {
                    t.removeClass("wpb_start_animation");
                  }, 1100));
          },
          offset: 1 == dt ? "200%" : "90%",
        });
    });
  }
  function oe(t, e) {
    (this.$el = t),
      (this.duration = e),
      (this.interval = ""),
      (this.words = []),
      (this.state = { activeIndex: 0, sequenceStarted: 0, visible: !1 }),
      this.setup();
  }
  function le() {
    $(lt + ".nectar-milestone").each(function () {
      var t = 1 == dt ? "250%" : "98%";
      gt.usingMobileBrowser && "98%" == t && (t = "110%");
      var e = 0;
      $(this).is("[data-animation-delay]") &&
        0 < $(this).attr("data-animation-delay").length &&
        "false" != $(this).attr("data-animation") &&
        (e = $(this).attr("data-animation-delay"));
      var i = $(this),
        s = new Waypoint({
          element: i[0],
          handler: function () {
            var a, n, n, t;
            (0 < i.parents(".wpb_tab").length &&
              "hidden" == i.parents(".wpb_tab").css("visibility")) ||
              i.hasClass("animated-in") ||
              ((a = i
                .find(".number span:not(.symbol)")
                .text()
                .replace(/,/g, "")),
              (n = 0),
              -1 === a.toString().indexOf(".") ||
                ((n = 2) < (t = a.toString().split(".")[1].length) &&
                  t < 5 &&
                  (n = t)),
              (a = parseFloat(a)),
              setTimeout(function () {
                var t, e;
                i.hasClass("motion_blur")
                  ? i.find("span").each(function (t) {
                      var e = $(this);
                      setTimeout(function () {
                        e.addClass("in-sight");
                      }, 200 * t);
                    })
                  : ((t = { easingFn: ne }),
                    (e = i.find(".number span:not(.symbol)")[0]),
                    new ae(e, 0, a, n, 2.2, t).start()),
                  i.addClass("animated-in");
              }, e)),
              s.destroy();
          },
          offset: t,
        });
    });
  }
  function de(t) {
    var e, a, n;
    (e = t.parent()).length
      ? ((a = e.position().left), (n = e.width()))
      : (a = n = 0),
      t
        .parent()
        .parent()
        .find(".magic-line")
        .css("transform", "translateX(" + a + "px) scaleX(" + n + ")");
  }
  function ce() {
    E.on("click", ".tabbed > ul li:not(.cta-button) a", function (t) {
      var e, t;
      return (
        (function (t) {
          var e = t.parents("li").index() + 1,
            a = 0 < $("body.vc_editor").length ? "> .wpb_tab " : "",
            n,
            i,
            n;
          0 < t.closest(".tabbed").length &&
            t.closest(".tabbed").is('[data-style="toggle_button"]') &&
            3 === e &&
            (e = 2),
            t.hasClass("active-tab") ||
              t.hasClass("loading") ||
              (t.parents("ul").find("a").removeClass("active-tab"),
              t.parents("ul").find("li").removeClass("active-tab"),
              t.addClass("active-tab"),
              t.parent().addClass("active-tab"),
              t
                .closest(".tabbed")
                .find("> div:not(.clear)" + a)
                .css({
                  visibility: "hidden",
                  position: "absolute",
                  opacity: "0",
                  left: "-9999px",
                  display: "none",
                })
                .removeClass("visible-tab"),
              (n =
                0 < t.parents('.tabbed[data-animation="none"]').length
                  ? 0
                  : 400),
              0 < $("body.vc_editor").length
                ? ((i = t.parent().is("[data-m-id]")
                    ? t.parent().attr("data-m-id")
                    : ""),
                  0 < t.parents('.tabbed[data-style="toggle_button"]').length &&
                    t.parents("li").index() + 1 === 3 &&
                    0 <
                      t
                        .parents(".wpb_tabs_nav")
                        .find(".toggle-button[data-m-id]").length &&
                    (i = t
                      .parents(".wpb_tabs_nav")
                      .find(".toggle-button")
                      .attr("data-m-id")),
                  t
                    .parents(".tabbed")
                    .find('> div[data-model-id="' + i + '"]' + a)
                    .css({
                      visibility: "visible",
                      position: "relative",
                      left: "0",
                      display: "block",
                    })
                    .stop()
                    .transition({ opacity: 1 }, n)
                    .addClass("visible-tab"),
                  E.is('[data-flex-cols="true"]') || ui())
                : t
                    .closest(".tabbed")
                    .find("> div:nth-of-type(" + e + ")" + a)
                    .css({
                      visibility: "visible",
                      position: "relative",
                      left: "0",
                      display: "block",
                    })
                    .stop()
                    .transition({ opacity: 1 }, n)
                    .addClass("visible-tab"),
              (0 <
                (n = t
                  .closest(".tabbed")
                  .find("> div:nth-of-type(" + e + ")")).find(".iframe-embed")
                  .length ||
                0 < n.find(".portfolio-items").length ||
                0 < n.find(".nectar-video-bg").length) &&
                setTimeout(function () {
                  g.trigger("resize");
                }, 10));
          var a = t.parents(".tabbed").find("> div:nth-of-type(" + e + ")" + a);
          0 < a.find(".nectar-progress-bar").length && De(),
            (0 < a.find('.divider-small-border [data-animate="yes"]').length ||
              0 < a.find('.divider-border [data-animate="yes"]').length) &&
              Ue(),
            (0 < a.find("img.img-with-animation").length ||
              0 < a.find(".col.has-animation").length ||
              0 < a.find(".nectar_cascading_images").length ||
              0 < a.find(".wpb_column.has-animation").length) &&
              (Ye(), Re()),
            (0 < a.find(".parallax-layer").length ||
              0 < a.parents(".nectar-parallax-enabled").length) &&
              Be(),
            He(),
            0 < a.find(".nectar-milestone").length && le(),
            0 <
              a.find('.nectar_image_with_hotspots[data-animation="true"]')
                .length &&
              (ta(),
              setTimeout(function () {
                g.trigger("resize");
              }, 100)),
            0 < a.find(".nectar-fancy-ul").length && xe(),
            0 < a.find(".nectar-split-heading").length && Xe(),
            0 < a.find('.wpb_column[data-border-animation="true"]').length &&
              Qe(),
            0 < a.find(".wpb_animate_when_almost_visible").length && re(),
            0 < a.find(".nectar-animated-title").length && ca(),
            0 < a.find(".nectar-highlighted-text").length && ha(),
            0 < a.find(".nectar_food_menu_item").length && Ge(),
            0 <
              a.find('.nectar-post-grid:not([data-animation="none"])').length &&
              da(),
            0 < a.find(".nectar-waypoint-el").length && Ze(),
            0 < t.parents(".wpb_row").length &&
              ((0 < a.find(".vc_pie_chart").length ||
                0 < a.find(".wp-video-shortcode").length ||
                0 < a.find(".post-area.masonry .posts-container").length ||
                0 < a.find(".twentytwenty-container").length ||
                0 <
                  t.parents(
                    '#nectar_fullscreen_rows[data-content-overflow="scrollbar"]'
                  ).length ||
                0 <
                  t
                    .parents(".tabbed")
                    .find("> div:nth-of-type(" + e + ")")
                    .find(".wpb_gallery").length ||
                0 <
                  t
                    .parents(".tabbed")
                    .find("> div:nth-of-type(" + e + ")")
                    .find(".swiper-container").length ||
                t.parents(".wpb_row").next().hasClass("parallax_section")) &&
                g.trigger("resize"),
              0 < a.find(".nectar-flickity").length &&
                "undefined" != typeof Flickity &&
                t
                  .parents(".tabbed")
                  .find("> div:nth-of-type(" + e + ")")
                  .find(".nectar-flickity")
                  .each(function () {
                    Flickity.data($(this)[0]).resize();
                  }),
              0 < a.find(".nectar-woo-flickity").length &&
                "undefined" != typeof Flickity &&
                setTimeout(function () {
                  Flickity.data(
                    t
                      .parents(".tabbed")
                      .find("> div:nth-of-type(" + e + ")")
                      .find(".nectar-woo-flickity > ul")[0]
                  ).resize(),
                    $(T).trigger("nectar-product-filters-layout");
                }, 100)),
            a.find(".svg-icon-holder").each(function (e) {
              var a = $(this);
              setTimeout(function () {
                var t = 0;
                a.is("[data-animation-delay]") &&
                  0 < a.attr("data-animation-delay").length &&
                  "false" != a.attr("data-animation") &&
                  (t = a.attr("data-animation-delay")),
                  clearTimeout(at[e]),
                  "false" == a.attr("data-animation")
                    ? (a.css("opacity", "1"),
                      B[a.find("svg").attr("id").slice(-1)].finish())
                    : (B[a.find("svg").attr("id").slice(-1)].reset(),
                      (at[e] = setTimeout(function () {
                        B[a.find("svg").attr("id").slice(-1)].play();
                      }, t)));
              }, 150);
            }),
            $(".nectar-cta .link_wrap, .nectar-cta .link_text").removeClass(
              "hover"
            ),
            t
              .parents(".tabbed")
              .find(".wpb_row")
              .each(function () {
                var t;
                void 0 !==
                  $(this).find('[class*="vc_col-"]').first().offset() &&
                  ((t = $(this)
                    .find('[class*="vc_col-"]')
                    .first()
                    .offset().left),
                  $(this)
                    .find('[class*="vc_col-"]')
                    .each(function () {
                      $(this).removeClass("no-left-margin"),
                        $(this).offset().left < t + 15
                          ? $(this).addClass("no-left-margin")
                          : $(this).removeClass("no-left-margin");
                    }));
              }),
            0 < t.parent().parent().find(".magic-line").length && de(t),
            $(T).trigger("nectar-tab-changed");
        })($(this)),
        void 0 !== t.originalEvent &&
          gt.winW < 1e3 &&
          0 == pt.$usingFullScreenRows &&
          !$(this).parents(".disable-mobile-tab-scroll") &&
          350 < (e = $(this).closest(".tabbed").find("> ul")).height() &&
          ((t = e.offset().top + e.height() - gt.adminBarHeight),
          Gt(
            (t =
              0 < $('#header-outer[data-mobile-fixed="1"]').length
                ? e.offset().top +
                  e.height() -
                  u.outerHeight() -
                  gt.adminBarHeight
                : t),
            700,
            "easeInOutQuint"
          )),
        !1
      );
    }),
      $("body").on("click", ".wpb_tabs_nav > .toggle-button", function () {
        $(this)
          .parents(".wpb_tabs_nav")
          .find("> li:not(.active-tab):not(.toggle-button) a")
          .trigger("click");
      }),
      $('a[class*="nectar-tab-trigger"]').on("click", function (t) {
        if (!$(this).is('[href*="#"]') || $(this).attr("href").length < 1)
          return !0;
        var e,
          e = (e = (e = $(this).attr("href")).substr(1))
            .replace(/\s+/g, "-")
            .replace(/</g, "&lt;")
            .replace(/"/g, "&quot;")
            .toLowerCase();
        $(".wpb_tabs_nav").each(function () {
          $(this)
            .find("li")
            .each(function () {
              var t = $(this).find("a").clone();
              t.find("svg").remove(),
                (t =
                  0 <
                    (t = (t = t.text()).replace(/\s+/g, "-").toLowerCase())
                      .length && "-" === t.substring(0, 1)
                    ? t.substring(1)
                    : t) == e && $(this).find("a").trigger("click");
            });
        }),
          t.preventDefault();
      }),
      $(".tabbed").each(function () {
        var t;
        $(this)
          .find(".wpb_tab")
          .each(function (t) {
            var e;
            $(this).is("[data-tab-icon]") &&
              0 < $(this).attr("data-tab-icon").length &&
              0 == $(this).find(".im-icon-wrap.tab-icon").length &&
              ($(this).closest(".tabbed").addClass("using-icons"),
              $(this)
                .closest(".tabbed")
                .find(".wpb_tabs_nav li:nth-child(" + (t + 1) + ") > a")
                .prepend(
                  '<i class="' + $(this).attr("data-tab-icon") + '"></i>'
                ),
              $(this).closest(".tabbed").is('[data-style="toggle_button"]') &&
                1 === t &&
                $(this)
                  .closest(".tabbed")
                  .find(".wpb_tabs_nav li:nth-child(" + (t + 2) + ") > a")
                  .prepend(
                    '<i class="' + $(this).attr("data-tab-icon") + '"></i>'
                  )),
              0 < $(this).find(".im-icon-wrap.tab-icon").length &&
                ((e = $(this).find(".im-icon-wrap.tab-icon").detach()),
                $(this)
                  .closest(".tabbed")
                  .find(".wpb_tabs_nav li:nth-child(" + (t + 1) + ") > a")
                  .prepend(e));
          }),
          (t = $(this)),
          setTimeout(function () {
            t.is('[data-style="minimal_alt"]') &&
              (t.find("> ul").append('<li class="magic-line" />'),
              de(t.find("> ul > li:first-child > a")));
          }, 100);
      }),
      0 < $('.tabbed[data-style="minimal_alt"]').length &&
        g.on("smartresize", function () {
          $('.tabbed[data-style="minimal_alt"]').each(function () {
            0 < $(this).find("a.active-tab").length &&
              de($(this).find("a.active-tab"));
          });
        }),
      void 0 !== ee.tab &&
        $(".wpb_tabs_nav").each(function () {
          $(this)
            .find("li")
            .each(function () {
              var t = $(this).find("a").clone(),
                e = ee.tab,
                a = $(this);
              t.find("svg").remove(),
                (t =
                  0 <
                    (t = (t = t.text()).replace(/\s+/g, "-").toLowerCase())
                      .length && "-" === t.substring(0, 1)
                    ? t.substring(1)
                    : t) ==
                  (e = e
                    .replace(/\s+/g, "-")
                    .replace(/</g, "&lt;")
                    .replace(/"/g, "&quot;")
                    .toLowerCase()) &&
                  ($(this).find("a").trigger("click"),
                  setTimeout(function () {
                    a.find("a").trigger("click");
                  }, 501));
            });
        }),
      $(".nectar-scrolling-tabs").each(function (t) {
        gt.usingFrontEndEditor || (st[t] = new he($(this)));
      });
    var r = !1;
    E.on("click", ".scrolling-tab-nav-current-item", function () {
      $(this).toggleClass("open"),
        $(this).siblings(".wpb_tabs_nav").toggle(),
        He();
    }),
      E.on("click", ".nectar-sticky-tabs .wpb_tabs_nav li", function (t) {
        var e = $(this).parents(".wpb_tabs_nav"),
          a = $(this)
            .parents(".scrolling-tab-nav")
            .find(".scrolling-tab-nav-current-item"),
          n = $(this).find(".tab-nav-heading").clone();
        a.html(n),
          void 0 !== t.originalEvent &&
            ($(this)
              .parents(".scrolling-tab-nav")
              .find(".scrolling-tab-nav-current-item")
              .toggleClass("open"),
            e.toggle());
      }),
      E.on("click", ".nectar-sticky-tabs .wpb_tabs_nav a", function (t) {
        var e = $(this),
          a = e.parents("li").index() + 1,
          n = 0 < $("body.vc_editor").length ? "> .wpb_tab " : "",
          i = e.parents(".nectar-sticky-tabs"),
          s = i.hasClass("content_animation_fade") ? 200 : 600;
        ((e.parents("li").hasClass("active-tab") || r) &&
          i.hasClass("loaded")) ||
          ((r = !0),
          i.find(".wpb_tabs_nav li").removeClass("active-tab"),
          e.parents("li").addClass("active-tab"),
          i
            .find(".scrolling-tab-content  > div")
            .removeClass("previously-active-tab"),
          i
            .find(".scrolling-tab-content > div.active-tab")
            .addClass("previously-active-tab")
            .removeClass("active-tab"),
          i
            .find(".scrolling-tab-content > div:nth-of-type(" + a + ")" + n)
            .addClass("active-tab"),
          $(T).trigger("nectar-tab-changed"),
          setTimeout(function () {
            r = !1;
          }, s)),
          t.preventDefault();
      }),
      $(".tabbed .wpb_tab").first().addClass("visible-tab"),
      $(".nectar-sticky-tabs .wpb_tabs_nav > li:first-child").each(function () {
        $(this).find("a").first().trigger("click");
      }),
      (r = !1),
      $(".nectar-sticky-tabs").addClass("loaded"),
      $(T).on("nectar-tab-changed", ua);
  }
  function he(t) {
    (this.$el = t),
      (this.$tabContent = t.find(".scrolling-tab-content")),
      (this.$lineEl = t.find(".scrolling-tab-nav .line")),
      (this.observer = null),
      (this.linkFunc = this.$el.hasClass("navigation_func_active_link_only")
        ? "single_link"
        : "default"),
      this.domSetup(),
      this.highlightObserve(),
      this.events();
  }
  function ue() {
    void 0 !== ee.toggle &&
      $(".toggles").each(function () {
        $(this)
          .find(".toggle")
          .each(function () {
            var t = $(this).find("h3 a").clone(),
              e = ee.toggle;
            $(t).find("i").remove(),
              (t = (t = t.text()).replace(/\s+/g, "-").toLowerCase()) ==
                (e = e
                  .replace(/\s+/g, "-")
                  .replace(/</g, "&lt;")
                  .replace(/"/g, "&quot;")
                  .toLowerCase()) && $(this).find("h3 a").trigger("click");
          });
      });
  }
  function pe() {
    $(".toggles").each(function () {
      var t = $(this).find(".toggle.open");
      0 < t.length &&
        t.each(function () {
          var t = $(this).find("> div")[0];
          t.style.maxHeight = t.scrollHeight + "px";
        });
    });
  }
  function ge() {
    setTimeout(function () {
      $('.toggles.accordion:not([data-starting="closed"])').each(function () {
        var t;
        0 == $(this).find('.toggle[data-inner-wrap="true"]').length
          ? $(this)
              .find("> .toggle")
              .first()
              .addClass("open")
              .find("> div")
              .show()
          : gt.usingFrontEndEditor ||
            ((t = $(this).find("> .toggle").first()).addClass("open"),
            (t.find("> div")[0].style.maxHeight =
              t.find("> div")[0].scrollHeight + "px")),
          $(this)
            .find("> .toggle")
            .first()
            .find("a:not(.nectar-button) i")
            .attr("class", "fa fa-minus-circle");
      }),
        setTimeout(ue, 300);
    }, 60),
      0 < $('.toggle[data-inner-wrap="true"]').length &&
        g.on("smartresize", pe),
      $(".toggle > h3:not(.toggle-title)").addClass("toggle-title");
  }
  function fe(t) {
    (this.$el = t),
      (this.$innerEl = this.$el.find(" > .n-sticky > .vc_column-inner")),
      0 != this.$innerEl.length && ((this.topOffset = 0), this.lazyInit());
  }
  function me(t, e) {
    (t = String(t).replace(/[^0-9a-f]/gi, "")).length < 6 &&
      (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]),
      (e = e || 0);
    for (var a, n, i = "#", n = 0; n < 3; n++)
      (a = parseInt(t.substr(2 * n, 2), 16)),
        (i += (
          "00" +
          (a = Math.round(Math.min(Math.max(0, a + a * e), 255)).toString(16))
        ).substr(a.length));
    return i;
  }
  function ve() {
    $(".nectar-3d-transparent-button").each(function () {
      var t, e, a, n, a, i, n;
      "visible" == $(this).css("visibility") &&
        ((e = 0),
        (a = 1.7),
        "extra_jumbo" == (t = $(this)).attr("data-size") &&
          ((a =
            gt.winW < 1e3 && 690 < gt.winW
              ? ((e = 64),
                (n = 34),
                t.find(".back-3d rect").attr("stroke-width", "12"),
                1.7)
              : gt.winW <= 690
              ? ((e = 46),
                (n = 16),
                t.find(".back-3d rect").attr("stroke-width", "10"),
                1.7)
              : ((e = 100),
                (n = 64),
                t.find(".back-3d rect").attr("stroke-width", "20"),
                1.6)),
          t.find("svg text").attr("font-size", n),
          (i = $(this)
            .find(".back-3d .button-text")[0]
            .getBoundingClientRect().width),
          t.css({
            width: i + 1.5 * e + "px",
            height: (n = 1.5 * n) + e + "px",
          }),
          t.find("> a").css({ height: n + e + "px" }),
          t
            .find(".back-3d svg, .front-3d svg")
            .css({ width: i + 1.5 * e + "px", height: n + e + "px" })
            .attr("viewBox", "0 0 " + (i + 1.5 * e) + " " + (n + e)),
          t
            .find("svg text")
            .attr(
              "transform",
              "matrix(1 0 0 1 " + (i + 1.6 * e) / 2 + " " + (n + e) / a + ")"
            ),
          t
            .find(".front-3d ")
            .css("transform-origin", "50% 50% -" + (n + e) / 2 + "px"),
          t
            .find(".back-3d")
            .css("transform-origin", "50% 50% -" + (n + e) / 2 + "px")));
    });
  }
  function be() {
    var n, i, o;
    gt.usingMobileBrowser ||
      $(
        '.nectar-cta[data-style="text-reveal-wave"], .menu-item-hover-text-reveal-wave, .nectar-cta[data-style="curved-arrow-animation"]'
      ).each(function () {
        $(this)
          .find(".char")
          .each(function (t) {
            $(this).css("animation-delay", 0.015 * t + "s");
          });
        var t = $(this).is('[data-using-bg="true"]')
            ? ".link_wrap"
            : ".link_text",
          e = !1,
          a;
        $(this).is('[class*="border_thickness_"]') &&
          !$(this).is('[class*="border_thickness_0px"]') &&
          ((t = ".link_wrap"), (e = !0)),
          $(this).is(".menu-item-hover-text-reveal-wave") && (t = "a"),
          $(this).is("[data-triggered-by]")
            ? ((a = $(this).attr("data-triggered-by")),
              $(this)
                .parents(a)
                .on("mouseenter", function () {
                  var t;
                  999 < gt.winW &&
                    ((t = $(this).find(".link_text")).removeClass("hover"),
                    setTimeout(function () {
                      t.addClass("hover");
                    }, 20));
                }))
            : $(this)
                .find(t)
                .on("mouseenter", function () {
                  var t;
                  999 < gt.winW &&
                    ((t = e ? $(this).find(".link_text") : $(this)).removeClass(
                      "hover"
                    ),
                    setTimeout(function () {
                      t.addClass("hover");
                    }, 20));
                });
      }),
      $(".nectar-link-underline-effect a").on("mouseenter", function () {
        $(this).addClass("accessed");
      }),
      $(
        ".nectar-button.see-through[data-color-override], .nectar-button.see-through-2[data-color-override], .nectar-button.see-through-3[data-color-override]"
      ).each(function () {
        var t,
          e,
          a = 0 < $('body.material[data-button-style^="rounded"]').length;
        if (
          ($(this).css("visibility", "visible"),
          $(this).hasClass("see-through-3") &&
            "false" == $(this).attr("data-color-override"))
        )
          return !0;
        (t =
          "false" != $(this).attr("data-color-override")
            ? $(this).attr("data-color-override")
            : 0 < $(this).parents(".dark").length
            ? "#000000"
            : "#ffffff"),
          $(this).hasClass("see-through-3") || $(this).css("color", t),
          $(this).find("i").css("color", t);
        var n = parseInt(t.substring(1), 16),
          i = $(this).has("[data-hover-color-override]")
            ? $(this).attr("data-hover-color-override")
            : "no-override",
          s = $(this).has("[data-hover-text-color-override]")
            ? $(this).attr("data-hover-text-color-override")
            : "#fff",
          r = (16711680 & n) >> 16,
          o = (65280 & n) >> 8,
          l = (255 & n) >> 0,
          d = $(this).hasClass("see-through-3") ? "1" : "0.75";
        $(this).css(
          "border-color",
          "rgba(" + r + "," + o + "," + l + "," + d + ")"
        ),
          a &&
            $(this)
              .find("i")
              .css({
                "background-color": "rgba(" + r + "," + o + "," + l + ",1)",
                "box-shadow":
                  "0px 8px 15px rgba(" + r + "," + o + "," + l + ",0.24)",
              }),
          $(this).hasClass("see-through")
            ? ((e = $(this)),
              $(this).on("mouseenter touchstart", function () {
                e.css("border-color", "rgba(" + r + "," + o + "," + l + ",1)");
              }),
              $(this).on("mouseleave touchtouchend", function () {
                e.css("border-color", "rgba(" + r + "," + o + "," + l + ",1)"),
                  (d = $(this).hasClass("see-through-3") ? "1" : "0.75"),
                  e.css(
                    "border-color",
                    "rgba(" + r + "," + o + "," + l + "," + d + ")"
                  );
              }))
            : ($(this).find("i").css("color", s),
              "no-override" != i
                ? ((e = $(this)),
                  $(this).on("mouseenter touchstart", function () {
                    e.css({
                      "border-color": i,
                      "background-color": i,
                      color: s,
                    }),
                      a &&
                        e
                          .find("i")
                          .css({ "background-color": "", "box-shadow": "" });
                  }),
                  $(this).on("mouseleave touchtouchend", function () {
                    (d = $(this).hasClass("see-through-3") ? "1" : "0.75"),
                      a &&
                        e
                          .find("i")
                          .css({
                            "background-color":
                              "rgba(" + r + "," + o + "," + l + ",1)",
                            "box-shadow":
                              "0px 8px 15px rgba(" +
                              r +
                              "," +
                              o +
                              "," +
                              l +
                              ",0.24)",
                          }),
                      e.hasClass("see-through-3")
                        ? e.css({
                            "border-color":
                              "rgba(" + r + "," + o + "," + l + "," + d + ")",
                            "background-color": "transparent",
                          })
                        : e.css({
                            "border-color":
                              "rgba(" + r + "," + o + "," + l + "," + d + ")",
                            "background-color": "transparent",
                            color: t,
                          });
                  }))
                : ((e = $(this)),
                  $(this).on("mouseenter touchstart", function () {
                    e.css({ "border-color": i, color: s });
                  }),
                  $(this).on("mouseleave touchtouchend", function () {
                    (d = e.hasClass("see-through-3") ? "1" : "0.75"),
                      e.css({
                        "border-color":
                          "rgba(" + r + "," + o + "," + l + "," + d + ")",
                        color: s,
                      });
                  })));
      }),
      $(
        ".nectar-button:not(.see-through):not(.see-through-2):not(.see-through-3)[data-color-override]"
      ).each(function () {
        var t;
        $(this).css("visibility", "visible"),
          "false" != $(this).attr("data-color-override") &&
            ((t = $(this).attr("data-color-override")),
            $(this)
              .removeClass("accent-color")
              .removeClass("extra-color-1")
              .removeClass("extra-color-2")
              .removeClass("extra-color-3")
              .css("background-color", t));
      }),
      (0 < $(".swiper-slide .solid_color_2").length ||
        0 < $(".tilt-button-inner").length) &&
        ((i = ""),
        $(".swiper-slide .solid_color_2 a").each(function (t) {
          $(this).addClass("instance-" + t),
            (n =
              "false" != $(this).attr("data-color-override")
                ? $(this).attr("data-color-override")
                : 0 < $(this).parents(".dark").length
                ? "#000000"
                : "#ffffff"),
            $(this).css("color", n),
            $(this).find("i").css("color", n);
          var e = $(this).css("background-color"),
            a = me(e, 0.13),
            e = me(e, -0.15);
          i +=
            ".swiper-slide .solid_color_2 a.instance-" +
            t +
            ":after { background-color: " +
            a +
            ";  } .swiper-slide .solid_color_2 a.instance-" +
            t +
            ":before { background-color: " +
            e +
            "; } ";
        }),
        $(".tilt-button-wrap a").each(function (t) {
          $(this).addClass("instance-" + t);
          var e,
            a = $(this).css("background-color");
          "false" != $(this).attr("data-color-override") &&
            ((e = $(this).attr("data-color-override")),
            $(this).css("background-color", e),
            (a = e));
          var e = me(a, 0.13),
            a = me(a, -0.15);
          i +=
            ".tilt-button-wrap a.instance-" +
            t +
            ":after { background-color: " +
            e +
            ";  } .tilt-button-wrap a.instance-" +
            t +
            ":before { background-color: " +
            a +
            "; } ";
        }),
        ie(i, "tilt-button")),
      0 < $(".nectar-3d-transparent-button").length &&
        ((o = ""),
        $(".nectar-3d-transparent-button").each(function (t) {
          $(this).on("mouseover", function () {
            $(this).find("*").css("display", "");
            var t = $(this);
            setTimeout(function () {
              t.find("*").css("display", "block");
            }, 60);
          }),
            $(this).on("mouseleave", function () {
              $(this).find("*").css("display", "block");
              var t = $(this);
              setTimeout(function () {
                t.find("*").css("display", "");
              }, 60);
            });
          var e,
            a = $(this),
            n = a.attr("data-size"),
            i = 0,
            s = 1.5,
            r = 1.65;
          "large" == n
            ? ((i = 46), (e = 16), (s = 1.5), (r = 1.7))
            : "medium" == n
            ? ((i = 30), (e = 16))
            : "small" == n
            ? ((i = 20), (e = 12))
            : "jumbo" == n
            ? ((i = 54), (e = 24), (s = 1.5), (r = 1.68))
            : "extra_jumbo" == n && ((i = 100), (e = 64), (r = s = 1.6)),
            a.find("svg text").attr("font-size", e);
          var n = $(this)
              .find(".back-3d .button-text")[0]
              .getBoundingClientRect().width,
            e = 1.5 * e;
          a.css({ width: n + 1.5 * i + "px", height: e + i + "px" }),
            a.find("> a").css({ height: e + i + "px" }),
            a
              .find(".back-3d svg, .front-3d svg")
              .css({ width: n + 1.5 * i + "px", height: e + i + "px" })
              .attr("viewBox", "0 0 " + (n + 1.5 * i) + " " + (e + i)),
            a
              .find("svg text")
              .attr(
                "transform",
                "matrix(1 0 0 1 " + (n + i * s) / 2 + " " + (e + i) / r + ")"
              ),
            a
              .find(".front-3d, .back-3d")
              .css("transform-origin", "50% 50% -" + (e + i) / 2 + "px"),
            $(this)
              .find(".front-3d svg > rect")
              .attr("id", "masked-rect-id-" + t),
            $(this)
              .find(".front-3d defs mask")
              .attr("id", "button-text-mask-" + t),
            a.css("visibility", "visible"),
            (o +=
              "#masked-rect-id-" +
              t +
              " { mask: url(#button-text-mask-" +
              t +
              "); -webkit-mask: url(#button-text-mask-" +
              t +
              ")} ");
        }),
        ve(),
        g.on("smartresize", ve),
        ie(o, "nectar-td-button")),
      setTimeout(function () {
        $('.nectar-button[class*="color-gradient"] .start').removeClass(
          "loading"
        );
      }, 150),
      (-1 < navigator.userAgent.toLowerCase().indexOf("firefox") ||
        -1 < navigator.userAgent.indexOf("MSIE ") ||
        navigator.userAgent.match(/Trident\/7\./)) &&
        $('.nectar-button[class*="color-gradient"] .start').addClass(
          "no-text-grad"
        );
  }
  function we() {
    $(".icon-3x").each(function () {
      $(this)
        .closest(".col")
        .on("mouseenter", function () {
          $(this).find(".icon-3x").addClass("hovered");
        }),
        $(this)
          .closest(".col")
          .on("mouseleave", function () {
            $(this).find(".icon-3x").removeClass("hovered");
          });
    }),
      (-1 < navigator.userAgent.indexOf("MSIE ") ||
        navigator.userAgent.match(/Trident\/7\./)) &&
        $(
          '[class^="icon-"][class*="color-gradient"], .nectar_icon_wrap[data-color*="extra-color-gradient"] .nectar_icon, .nectar-gradient-text'
        ).addClass("no-grad");
  }
  function ye() {
    var t =
      0 < $('body[data-header-format="left-header"]').length && 1e3 < g.width()
        ? 275
        : 0;
    $(".nectar_team_member_overlay").css({ width: g.width() - t, left: t });
  }
  function _e() {
    var n = "";
    $(".wpb_column").each(function (t) {
      $(this).removeClass(function (t, e) {
        return (e.match(/(^|\s)instance-\S+/g) || []).join(" ");
      }),
        ("true" != $(this).attr("data-has-bg-color") &&
          !$(this).is('[data-hover-bg^="#"]')) ||
          $(this).addClass("instance-" + t);
      var e =
          0 <
            $(this).find("> .vc_column-inner > .column-bg-overlay-wrap")
              .length ||
          0 < $(this).find("> .vc_column-inner > .column-bg-overlay").length
            ? " > .vc_column-inner "
            : "",
        a =
          0 < $(this).find(e + " > .column-bg-overlay-wrap").length
            ? "> .column-bg-overlay-wrap "
            : "";
      "true" == $(this).attr("data-has-bg-color") &&
        (n +=
          ".wpb_column.instance-" +
          t +
          e +
          a +
          " > .column-bg-overlay { background-color:" +
          $(this).attr("data-bg-color") +
          ";  opacity: " +
          $(this).attr("data-bg-opacity") +
          "; }"),
        $(this).is('[data-hover-bg^="#"]') &&
          (n +=
            ".wpb_column.instance-" +
            t +
            ":hover " +
            e +
            a +
            " > .column-bg-overlay { background-color: " +
            $(this).attr("data-hover-bg") +
            "!important; opacity: " +
            $(this).attr("data-hover-bg-opacity") +
            "!important; }");
    }),
      ie(n, "column-bg-colors");
  }
  function Ce() {
    var r, o;
    0 < $(".morphing-outline").length &&
      ((r = ""),
      (o = 0 < $("body.vc_editor").length ? "" : ">"),
      $(".morphing-outline").each(function (t) {
        $(this).removeClass(function (t, e) {
          return (e.match(/(^|\s)instance-\S+/g) || []).join(" ");
        }),
          $(this)
            .addClass("instance-" + t)
            .css({ visibility: "visible" });
        var e = $(this).find(".inner").width(),
          a = $(this).find(".inner").height(),
          n = parseInt($(this).attr("data-border-thickness")),
          i =
            0 < $('body[data-button-style*="rounded"]').length ? ":hover" : "",
          s =
            0 < $('body[data-button-style*="rounded"]').length ? "" : ":hover";
        (r +=
          "body .morphing-outline.instance-" +
          t +
          " .inner > * { color: " +
          $(this).attr("data-starting-color") +
          "; } "),
          (r +=
            "body .morphing-outline.instance-" +
            t +
            " .inner:after  { border-width:" +
            $(this).attr("data-border-thickness") +
            "px ; border-color: " +
            $(this).attr("data-starting-color") +
            "; } "),
          (r +=
            "body .wpb_column:hover > .wpb_wrapper " +
            o +
            " .morphing-outline.instance-" +
            t +
            " .inner > *, body .wpb_column:hover > .vc_column-inner > .wpb_wrapper " +
            o +
            " .morphing-outline.instance-" +
            t +
            " .inner > * { color: " +
            $(this).attr("data-hover-color") +
            "; } "),
          (r +=
            "body .wpb_column:hover > .wpb_wrapper " +
            o +
            " .morphing-outline.instance-" +
            t +
            " .inner:after, body .wpb_column:hover > .vc_column-inner > .wpb_wrapper " +
            o +
            " .morphing-outline.instance-" +
            t +
            " .inner:after  { border-color: " +
            $(this).attr("data-hover-color") +
            "; } "),
          (r +=
            "body .wpb_column" +
            s +
            " > .wpb_wrapper " +
            o +
            " .morphing-outline.instance-" +
            t +
            " .inner:after, body .wpb_column" +
            s +
            " > .vc_column-inner > .wpb_wrapper " +
            o +
            " .morphing-outline.instance-" +
            t +
            " .inner:after { padding: " +
            ((e + 100 + 2 * n - a) / 2 - n) +
            "px 50px}"),
          (r +=
            ".morphing-outline.instance-" +
            t +
            " { padding: " +
            (30 + (e + 80 + 2 * n - a) / 2 - n) +
            "px 50px}"),
          (r +=
            "body .wpb_column" +
            s +
            " > .wpb_wrapper " +
            o +
            " .morphing-outline.instance-" +
            t +
            " .inner:after, body .wpb_column" +
            s +
            " > .vc_column-inner > .wpb_wrapper " +
            o +
            " .morphing-outline.instance-" +
            t +
            " .inner:after { top: -" +
            parseInt((e + 100 + 2 * n - a) / 2 - n + n) +
            "px }"),
          (r +=
            "body .wpb_column > .wpb_wrapper " +
            o +
            " .morphing-outline.instance-" +
            t +
            " .inner:after, body .wpb_column > .vc_column-inner > .wpb_wrapper " +
            o +
            " .morphing-outline.instance-" +
            t +
            " .inner:after { left: -" +
            parseInt(50 + n) +
            "px }"),
          (r +=
            "body .wpb_column" +
            i +
            " > .wpb_wrapper " +
            o +
            " .morphing-outline.instance-" +
            t +
            " .inner:after, body .wpb_column" +
            i +
            " > .vc_column-inner > .wpb_wrapper " +
            o +
            " .morphing-outline.instance-" +
            t +
            " .inner:after { padding: 50px 50px}"),
          (r +=
            "body .wpb_column" +
            i +
            " > .wpb_wrapper " +
            o +
            " .morphing-outline.instance-" +
            t +
            " .inner:after, body .wpb_column" +
            i +
            " > .vc_column-inner > .wpb_wrapper " +
            o +
            " .morphing-outline.instance-" +
            t +
            " .inner:after { top: -" +
            parseInt(50 + n) +
            "px }");
      }),
      ie(r, "morphing-outlines"));
  }
  function xe() {
    $(lt + ".nectar-fancy-ul").each(function () {
      var t = $(this).attr("data-animation"),
        e = 0,
        a,
        n;
      $(this).is("[data-animation-delay]") &&
        0 < $(this).attr("data-animation-delay").length &&
        "false" != $(this).attr("data-animation") &&
        (e = $(this).attr("data-animation-delay")),
        "true" == t &&
          ((a = $(this)),
          (n = new Waypoint({
            element: a[0],
            handler: function () {
              (0 < a.parents(".wpb_tab").length &&
                "hidden" == a.parents(".wpb_tab").css("visibility")) ||
                a.hasClass("animated-in") ||
                (setTimeout(function () {
                  a.find("li").each(function (t) {
                    $(this)
                      .delay(220 * t)
                      .transition(
                        { opacity: "1", left: "0" },
                        220,
                        "easeOutCubic"
                      );
                  });
                }, e),
                a.addClass("animated-in")),
                n.destroy();
            },
            offset: "bottom-in-view",
          })));
    });
  }
  function ke() {
    $(
      '.nectar-fancy-ul:not([data-list-icon="dot"]):not([data-list-icon="none"])'
    ).each(function () {
      var t = $(this).attr("data-list-icon"),
        e = $(this).attr("data-color");
      $(this)
        .find("li")
        .each(function () {
          $(this).find("> i").remove(),
            $(this).prepend(
              '<i class="icon-default-style ' + t + " " + e + '"></i> '
            );
        });
    });
  }
  function $e() {
    $(".nectar-flip-box").each(function () {
      var t = parseInt($(this).attr("data-min-height")),
        e = $(this).find(".flip-box-front .inner").height();
      t - 80 <=
      (e =
        $(this).find(".flip-box-back .inner").height() >
        $(this).find(".flip-box-front .inner").height()
          ? $(this).find(".flip-box-back .inner").height()
          : e)
        ? $(this)
            .find("> div")
            .css("height", e + 80)
        : $(this).find("> div").css("height", "auto"),
        $(this).parent().hasClass("wpb_wrapper") &&
          $(this).parent().css("transform", "translateZ(0)");
    });
  }
  function Te() {
    $(
      '.wpb_row .vc_col-sm-12 .nectar-slider-wrap[data-full-width="true"]'
    ).each(function () {
      0 == $(this).parents(".wpb_row.full-width-section").length &&
        0 == $(this).parents(".wpb_row.full-width-content").length &&
        $(this).parents(".wpb_row").addClass("full-width-section");
    }),
      !gt.usingMobileBrowser &&
        0 < $('body[data-boxed-style="1"]').length &&
        0 < $("#boxed").length &&
        0 < $("#boxed").length &&
        $(
          ".full-width-section[data-top-percent], .full-width-section[data-bottom-percent], .full-width-content[data-top-percent], .full-width-content[data-bottom-percent]"
        ).each(function () {
          var t = $(this).attr("data-top-percent")
              ? $(this).attr("data-top-percent")
              : "skip",
            e = $(this).attr("data-bottom-percent")
              ? $(this).attr("data-bottom-percent")
              : "skip";
          "skip" != t && $(this).css("padding-top", t),
            "skip" != e && $(this).css("padding-bottom", e);
        });
  }
  function Ie() {
    var s, r, o, l, t, d, c, h, e, h, u, s, p;
    0 !=
      $(
        '.carousel-wrap[data-full-width="true"], .portfolio-items[data-col-num="elastic"]:not(.fullwidth-constrained), #boxed .full-width-content'
      ).length &&
      ((l = gt.winW),
      (t =
        0 < $(".body-border-right").length && 1e3 < l
          ? 2 * parseInt($(".body-border-right").width())
          : 0),
      (d =
        0 < $(".container-wrap").length
          ? parseInt($(".container-wrap").outerWidth())
          : g.width()),
      (c =
        0 < $("body[data-ext-padding]").length
          ? 2 * parseInt($("body").attr("data-ext-padding"))
          : 180),
      (h =
        -1 < (h = $(".main-content").css("max-width")).indexOf("%")
          ? ((e = T.innerWidth - I.documentElement.clientWidth),
            (parseInt(h) / 100) * (gt.winW - e))
          : parseInt(h)),
      (r =
        1 == $("#boxed").length
          ? (parseInt($(".container-wrap").width()) -
              parseInt($(".main-content").width())) /
              2 +
            4
          : ((u =
              0 < $('body[data-ext-responsive="true"]').length && 1e3 <= l
                ? c
                : 0),
            (s = d - t <= h ? h : d - t),
            (p = h),
            0 < $('body.single-post[data-ext-responsive="true"]').length &&
              0 < $(".container-wrap.no-sidebar").length &&
              ((p = $(".post-area").width()), (u = 0)),
            Math.ceil((s + u - p) / 2))),
      $(".carousel-outer")
        .has('.carousel-wrap[data-full-width="true"]')
        .css("overflow", "visible"),
      $(
        '.carousel-wrap[data-full-width="true"], .portfolio-items[data-col-num="elastic"]:not(.fullwidth-constrained), #boxed .full-width-content'
      ).each(function () {
        var t =
            0 < $('#header-outer[data-format="left-header"]').length && 1e3 <= l
              ? parseInt($('#header-outer[data-format="left-header"]').width())
              : 0,
          e =
            0 < $(".body-border-right").length && 1e3 < l
              ? 2 * parseInt($(".body-border-right").width()) - 2
              : 0,
          a,
          n;
        r =
          1 == $("#boxed").length
            ? ((a = 690 <= l ? parseInt($(".main-content").width()) : h),
              (o =
                0 == $("#nectar_fullscreen_rows").length
                  ? a
                  : parseInt($(this).parents(".container").width())),
              0 < $('body.single-post[data-ext-responsive="true"]').length &&
              0 < $(".container-wrap.no-sidebar").length &&
              0 < $(this).parents(".post-area").length
                ? ((p = $(".post-area").width()),
                  (u = 0),
                  (s = d - e),
                  Math.ceil((s + u - p) / 2))
                : 0 < $(this).parents(".page-submenu").length
                ? (parseInt($(".container-wrap").width()) - o) / 2
                : (parseInt($(".container-wrap").width()) - o) / 2 + 4)
            : (0 < $('body.single-post[data-ext-responsive="true"]').length &&
              0 < $(".container-wrap.no-sidebar").length &&
              0 < $(this).parents(".post-area").length
                ? ((p = $(".post-area").width()), (u = 0), (s = d - e))
                : ((n =
                    0 == $("#nectar_fullscreen_rows").length
                      ? h
                      : parseInt(
                          $(this).parents(".container").css("max-width")
                        )),
                  d - e <= n && (s = n),
                  (p = n),
                  (u =
                    0 < $('body[data-ext-responsive="true"]').length &&
                    1e3 <= gt.winW
                      ? c
                      : 0),
                  0 < t &&
                    (u =
                      0 < $('body[data-ext-responsive="true"]').length &&
                      1e3 <= gt.winW
                        ? 120
                        : 0)),
              Math.ceil((s + u - p) / 2));
        var n = 0;
        $(this).hasClass("carousel-wrap") && (n = 1),
          $(this).hasClass("portfolio-items") && (n = 5);
        var t = 1 == $("#boxed").length ? o + parseInt(2 * r) : d - e + n,
          t,
          i;
        0 == $("#boxed").length &&
          $(this).hasClass("portfolio-items") &&
          $(this).is('[data-gutter*="px"]') &&
          0 < $(this).attr("data-gutter").length &&
          "none" != $(this).attr("data-gutter") &&
          (t = 1e3 < d ? d - e + 3 : d - e),
          $(this).parent().hasClass("default-style")
            ? ((o =
                0 == $("#nectar_fullscreen_rows").length
                  ? parseInt($(".main-content").width())
                  : parseInt($(this).parents(".container").width())),
              0 != $("#boxed").length
                ? (t = 1 == $("#boxed").length ? o + parseInt(2 * r) : d + n)
                : ((t =
                    1 == $("#boxed").length
                      ? o + parseInt(2 * r)
                      : d - e - 0.025 * (d - e) + n),
                  (s = d - e <= o ? o : d - e - 0.025 * (d - e)),
                  (r = Math.ceil((s - o) / 2))))
            : $(this).parent().hasClass("spaced") &&
              ((o =
                0 == $("#nectar_fullscreen_rows").length
                  ? parseInt($(".main-content").width())
                  : parseInt($(this).parents(".container").width())),
              0 != $("#boxed").length
                ? (t =
                    1 == $("#boxed").length
                      ? o + parseInt(2 * r) - 0.02 * d
                      : d + n)
                : ((t =
                    1 == $("#boxed").length
                      ? o + parseInt(2 * r)
                      : d - e - Math.ceil(0.02 * (d - e)) + n),
                  (r = Math.ceil(
                    ((d - e <= o ? o : d - e - 0.02 * (d - e)) - o) / 2 + 2
                  )))),
          0 < !$(this).parents(".span_9").length &&
          !$(this).parent().hasClass("span_3") &&
          "sidebar-inner" != $(this).parent().attr("id") &&
          0 < !$(this).find(".nectar-carousel-flickity-fixed-content").length &&
          "portfolio-extra" != $(this).parent().attr("id")
            ? 0 < $(".single-product").length &&
              0 < $(this).parents("#tab-description").length &&
              0 == $(this).parents(".full-width-tabs").length
              ? $(this).css({ visibility: "visible" })
              : $(this).hasClass("portfolio-items")
              ? 0 == $(this).parents(".full-width-content").length &&
                $(this).css({
                  "margin-left": -r,
                  left: 0,
                  width: t,
                  visibility: "visible",
                })
              : 0 < $("#nectar_fullscreen_rows").length &&
                $(this).hasClass("wpb_row")
              ? $(this).css({
                  "margin-left": -r,
                  width: t,
                  visibility: "visible",
                })
              : 0 == $(this).parents(".full-width-content").length &&
                $(this).css({
                  left: 0,
                  "margin-left": -r,
                  width: t,
                  visibility: "visible",
                })
            : "portfolio-extra" == $(this).parent().attr("id") &&
              0 != $("#full_width_portfolio").length
            ? 0 <
                !$(this).find(".nectar-carousel-flickity-fixed-content")
                  .length &&
              $(this).css({
                left: 0,
                "margin-left": -r,
                width: t,
                visibility: "visible",
              })
            : $(this).css({
                "margin-left": 0,
                width: "auto",
                left: "0",
                visibility: "visible",
              });
      }));
  }
  function Ee() {
    $(".full-width-section.wpb_row, .full-width-content.wpb_row").each(
      function () {
        var t = $(this).parent();
        if (
          !t.hasClass("span_9") &&
          !t.hasClass("span_3") &&
          "sidebar-inner" != t.attr("id")
        ) {
          if (
            0 < $(this).parents("#portfolio-extra").length &&
            0 == $("#full_width_portfolio").length
          )
            return !1;
          "0" == $(this).index() &&
            0 == d.length &&
            0 == $(".page-header-no-bg").length &&
            0 == $(".project-title").length &&
            0 == $("body.single").length &&
            ($(this).addClass("first-section"), $(this).addClass("loaded"));
        }
      }
    );
  }
  function Oe(t) {
    var e;
    (this.$element = t),
      (this.$elementInner = t.find("> .vc_column-inner")),
      (this.inView = !1),
      (this.topLevel = !1),
      (this.bottomLevel = !1),
      (this.lastY = 0),
      (this.lerp = t.data("scroll-animation-lerp")
        ? parseFloat(t.data("scroll-animation-lerp"))
        : 0.28),
      (this.intensity = t.data("scroll-animation-intensity")
        ? Math.max(
            Math.min(parseFloat(t.data("scroll-animation-intensity")), 8),
            -8
          )
        : 3),
      (this.intensity = this.intensity / 10),
      (this.storedWinH = gt.winH),
      this.intensity < -0.29 && (this.lerp = 1),
      (this.type = "translateY"),
      (this.persistOnMobile = !(
        !t.is("[data-scroll-animation-mobile]") ||
        "true" != t.attr("data-scroll-animation-mobile")
      )),
      this.$element.hasClass("wpb_column") ||
        0 != this.$element.parents(".cell").length ||
        ((this.$elementInner = t),
        (this.$element = t.parent()),
        t.is("[data-scroll-animation-movement]") &&
          this.$element.attr(
            "data-scroll-animation-movement",
            t.attr("data-scroll-animation-movement")
          )),
      (gt.usingMobileBrowser && 0 == this.persistOnMobile) ||
        (this.setType(),
        this.calculatePos(),
        this.trackView(),
        this.animate(),
        0 == this.$element.parents(".wpb_column.has-animation").length &&
          setInterval(this.calculatePos.bind(this), 1e3),
        g.on("resize", this.calculatePos.bind(this)),
        (e = this),
        T.addEventListener("orientationchange", function () {
          this.setTimeout(function () {
            e.orientationChange();
          }, 80);
        }));
  }
  function ze(t, e, a, n) {
    (this.$el = t),
      (this.$parallaxEl = this.$el.find(e)),
      (this.firstSection = !1),
      (this.nestedParallax = !1),
      (this.type = n),
      (this.speed = a),
      (this.storedWinH = gt.winH),
      0 < t.parents(".nectar-sticky-tabs").length ||
        0 < t.parents(".nectar-sticky-column-css").length ||
        (this.setup(), this.update());
  }
  function He() {
    for (var t = 0; t < V.length; t++) V[t].resize();
    for (t = 0; t < D.length; t++) D[t].resize();
    for (t = 0; t < N.length; t++) N[t].calculatePos();
    for (t = 0; t < X.length; t++) X[t].calculatePos();
    Waypoint.refreshAll();
  }
  function Se(t) {
    (this.$el = t),
      (this.animations = {}),
      (this.offsets = {}),
      (this.topLevel = !1),
      (this.timelines = {}),
      (this.devices = {
        desktop: { min: 1e3, max: 1e7 },
        tablet: { min: 691, max: 999 },
        phone: { min: 0, max: 690 },
      }),
      (this.needsReset = !0),
      (this.activeDevice = "desktop"),
      (this.storedWinH = gt.winH),
      this.setupProps(),
      this.lazyInit();
  }
  function Ae() {
    (D = []),
      $("[data-nectar-animate-settings]").each(function () {
        D.push(new Se($(this)));
      });
  }
  function Me(t) {
    var e;
    switch (t) {
      case "slow":
        e = 0.6;
        break;
      case "medium":
        e = 0.4;
        break;
      case "medium_fast":
        e = 0.28;
        break;
      case "fast":
        e = 0.2;
        break;
      case "mid_subtle":
        e = 0.15;
        break;
      case "subtle":
        e = 0.13;
        break;
      case "very_subtle":
        e = 0.12;
        break;
      case "minimum":
        e = 0.09;
    }
    return e;
  }
  function We() {
    var t;
    (gt.usingMobileBrowser &&
      0 < $('body[data-remove-m-parallax="1"]').length) ||
      ((N = []),
      $(
        '.wpb_column[data-scroll-animation="true"], .nectar-el-parallax-scroll[data-scroll-animation="true"]'
      ).each(function (t) {
        imagesLoaded($(this), function (t) {
          $(t.elements[0]).is('[data-scroll-animation="true"]') &&
            0 == $("#nectar_fullscreen_rows").length &&
            0 === $(t.elements[0]).parents(".n-sticky").length &&
            N.push(new Oe($(t.elements[0])));
        });
      }),
      Be(),
      (t = 0),
      $(
        '.nectar-recent-posts-single_featured, [data-n-parallax-bg="true"], .wpb_row.parallax_section, #page-header-bg[data-parallax="1"] .page-header-bg-image-wrap, #page-header-bg[data-parallax="1"] .nectar-video-wrap, .parallax_slider_outer .nectar-slider-wrap'
      ).each(function () {
        $(this).is("[data-n-parallax-bg][data-parallax-speed]")
          ? ((V[t] = new ze(
              $(this),
              ".parallax-layer",
              Me($(this).attr("data-parallax-speed")),
              "regular"
            )),
            t++)
          : 0 == $(this).find('[data-parallax-speed="fixed"]').length &&
            ($(this).hasClass("nectar-slider-wrap")
              ? (V[t] = new ze(
                  $(this),
                  ".video-wrap, .image-bg",
                  0.25,
                  "nectar-slider"
                ))
              : $(this).hasClass("page-header-bg-image-wrap")
              ? (V[t] = new ze(
                  $(this),
                  ".page-header-bg-image",
                  0.25,
                  "page-header"
                ))
              : $(this).hasClass("nectar-video-wrap") &&
                0 < $(this).parents("#page-header-bg").length
              ? (V[t] = new ze(
                  $(this),
                  ".nectar-video-bg",
                  0.25,
                  "page-header"
                ))
              : (V[t] = new ze(
                  $(this),
                  ".row-bg.using-image",
                  Me($(this).find(".row-bg").attr("data-parallax-speed")),
                  "regular"
                )),
            t++),
          $(this).addClass("nectar-parallax-enabled");
      }),
      $(".woocommerce-tabs .wc-tabs li").on("click", function () {
        setTimeout(Be, 100);
      }));
  }
  function Be() {
    (gt.usingMobileBrowser &&
      0 < $('body[data-remove-m-parallax="1"]').length) ||
      $(
        '.nectar-recent-posts-single_featured, [data-n-parallax-bg="true"], .wpb_row.parallax_section, #page-header-bg[data-parallax="1"] .page-header-bg-image-wrap, .parallax_slider_outer .nectar-slider-wrap .slide-bg-wrap'
      ).each(function () {
        var t, e, a, n, a, n, e, a;
        return (
          (0 < $(this).parents(".wpb_tab:not(.visible-tab)").length &&
            0 == $(this).parents(".nectar-scrolling-tabs").length) ||
          (0 < $(this).parents(".wc-tab").length &&
            "block" !== $(this).parents(".wc-tab").css("display")) ||
          void (
            (0 == $(this).find(".row-bg").length &&
              0 < $(this).find(".page-header-bg-image").length) ||
            (0 == $(this).find(".row-bg").length &&
            0 < $(this).find(".image-bg").length
              ? ((t = !1),
                0 == $(".wpb_row").length &&
                  0 <
                    $(this).parents(
                      '.nectar-slider-wrap[data-full-width="true"]'
                    ).length &&
                  0 < $(this).parents(".parallax_slider_outer").length &&
                  "1" == $(this).parents(".parallax_slider_outer").index() &&
                  (t = !0),
                0 < $("#portfolio-extra").length &&
                  0 < $(this).parents(".wpb_row").length &&
                  0 < $(this).parents(".parallax_slider_outer").length &&
                  "0" == $(this).parents(".wpb_row").index() &&
                  (t = !0),
                (0 < $(this).parents(".top-level").length &&
                  !gt.usingFrontEndEditor) ||
                (t && !gt.usingFrontEndEditor)
                  ? $(this)
                      .find(".image-bg")
                      .css({
                        height:
                          Math.ceil(0.25 * $(this).parent().offset().top) +
                          $(this).outerHeight(!0),
                      })
                  : $(this)
                      .find(".image-bg")
                      .css({
                        height:
                          Math.ceil(0.25 * g.height()) +
                          $(this).outerHeight(!0),
                      }))
              : 0 == $(this).find(".row-bg").length &&
                0 < $(this).find(".video-wrap").length
              ? ((t = !1),
                0 == $(".wpb_row").length &&
                  0 <
                    $(this).parents(
                      '.nectar-slider-wrap[data-full-width="true"]'
                    ).length &&
                  0 < $(this).parents(".parallax_slider_outer").length &&
                  "1" == $(this).parents(".parallax_slider_outer").index() &&
                  (t = !0),
                0 < $("#portfolio-extra").length &&
                  0 < $(this).parents(".wpb_row").length &&
                  0 < $(this).parents(".parallax_slider_outer").length &&
                  "0" == $(this).parents(".wpb_row").index() &&
                  (t = !0),
                (0 < $(this).parents(".top-level").length &&
                  !gt.usingFrontEndEditor) ||
                (t && !gt.usingFrontEndEditor)
                  ? $(this)
                      .find(".video-wrap")
                      .css({
                        height:
                          Math.ceil(0.25 * $(this).parent().offset().top) +
                          $(this).outerHeight(!0),
                      })
                  : $(this)
                      .find(".video-wrap")
                      .css({
                        height:
                          Math.ceil(0.25 * gt.winH) + $(this).outerHeight(!0),
                      }),
                (a =
                  (e = $(this).find(".video-wrap video")).parent().width() /
                  1280),
                (n = e.parent().height() / 720),
                e.width(1280 * (a = n < a ? a : n)),
                e.height(720 * a))
              : ($(this).is(".nectar-recent-posts-single_featured") &&
                  0 < $(this).parents(".top-level").length &&
                  !gt.usingFrontEndEditor) ||
                ($(this).is(".nectar-simple-slider") &&
                  0 < $(this).parents(".top-level").length &&
                  !gt.usingFrontEndEditor) ||
                ($(this).is(".column-image-bg-wrap") &&
                  0 < $(this).parents(".top-level").length &&
                  $(this)
                    .parent()
                    .parent()
                    .is(".vc_col-sm-12:not(.child_column)")) ||
                ((!$(this).hasClass("top-level") ||
                  gt.usingFrontEndEditor ||
                  0 < $(this).find(".parallax-layer").length) &&
                  ((n = ".row-bg"),
                  (e = $(this).find(".row-bg").attr("data-parallax-speed")),
                  0 < $(this).find(".parallax-layer").length &&
                    !$(this).hasClass("wpb_row") &&
                    ((n = ".parallax-layer"),
                    (e = $(this).attr("data-parallax-speed"))),
                  (a =
                    0 < $(this).find(n + '[data-parallax-speed="fast"]').length
                      ? 60
                      : 0),
                  $(this)
                    .find(n)
                    .css({
                      height:
                        Math.ceil(gt.winH * Me(e)) +
                        $(this).outerHeight(!0) +
                        a,
                    }))))
          )
        );
      });
  }
  function Fe() {
    $('.wpb_wrapper > .nectar-slider-wrap[data-full-width="true"]').each(
      function () {
        $(this).parent().hasClass("span_9") ||
          $(this).parent().hasClass("span_3") ||
          "sidebar-inner" == $(this).parent().attr("id") ||
          ("0" == $(this).parents(".wpb_row").index() &&
            $(this).addClass("first-nectar-slider"));
      }
    );
    var e = (
        0 == $("#portfolio-extra").length
          ? $(".main-content > .row > *")
          : $(".main-content > .row #portfolio-extra > *")
      ).length,
      e = (
        0 == $("#portfolio-extra").length
          ? 0 < $(".main-content > .row > .wpb_row").length
            ? $(".main-content > .row > .wpb_row")
            : $(".main-content > .row > *")
          : $(".main-content > .row #portfolio-extra > *")
      ).length;
    $(
      '.container-wrap .full-width-section, .container-wrap .full-width-content:not(.page-submenu .full-width-content):not(.blog-fullwidth-wrap), .row > .nectar-slider-wrap[data-full-width="true"], .wpb_wrapper > .nectar-slider-wrap[data-full-width="true"], .portfolio-items[data-col-num="elastic"]'
    ).each(function () {
      if (
        0 < $(this).parents(".nectar-global-section.before-footer").length ||
        0 < $(this).parents('[class*="nectar_hook_sidebar"]').length
      )
        return !0;
      if (
        !$(this).parent().hasClass("span_9") &&
        !$(this).parent().hasClass("span_3") &&
        "sidebar-inner" != $(this).parent().attr("id")
      )
        if (0 < $(this).parents(".wpb_row").length) {
          $(this).parent();
          var t = $(this).parents(".wpb_row").index();
          if (
            0 < $(this).parents("#portfolio-extra").length &&
            0 == $("#full_width_portfolio").length
          )
            return !1;
          ("0" == t && 0 != d.length) ||
            ("0" == t &&
              0 == d.length &&
              0 == $(".page-header-no-bg").length &&
              0 == $(".project-title").length &&
              "0" == t &&
              0 == $(".project-title").length &&
              0 == $('body[data-bg-header="true"]').length &&
              (0 == $(".single").length
                ? $(".container-wrap").css("padding-top", "0px")
                : $(this).addClass("first-section"))),
            t == e - 1 &&
              0 == $("#respond").length &&
              "portfolio-filters-inline" != $(this).attr("id") &&
              ($(".container-wrap").css("padding-bottom", "0px"),
              $("#call-to-action .triangle").remove());
        } else {
          if (
            0 < $(this).parents("#portfolio-extra").length &&
            0 == $("#full_width_portfolio").length
          )
            return !1;
          0 == $(this).find(".portfolio-filters-inline").length &&
            "post-area" != $(this).attr("id") &&
            (("0" == $(this).index() && 0 != d.length) ||
              "0" != $(this).index() ||
              0 != d.length ||
              "0" != $(this).index() ||
              0 != $(".page-header-no-bg").length ||
              "0" != $(this).index() ||
              $(this).hasClass("blog_next_prev_buttons") ||
              0 != $(this).parents(".nectar-global-section").length ||
              $(this).hasClass("nectar-shop-outer") ||
              0 != $(this).parents(".pum-container").length ||
              ((1 == $('body[data-header-resize="0"]').length &&
                0 == $(".single").length) ||
              (0 < $("body.material").length && 0 == $(".single").length)
                ? 0 <
                    !$(
                      "body.blog .blog-fullwidth-wrap > .masonry:not(.meta-overlaid)"
                    ).length && $(".container-wrap").css("padding-top", "0px")
                : $(this).addClass("first-section")),
            $(this).index() == e - 1 &&
              0 == $("#respond").length &&
              0 == $("body.woocommerce-checkout").length &&
              ($(".container-wrap").css("padding-bottom", "0px"),
              $(".bottom_controls").css("margin-top", "0px"),
              $("#call-to-action .triangle").remove()));
        }
    }),
      $(
        '#portfolio-extra > .nectar-slider-wrap[data-full-width="true"], .portfolio-wrap'
      ).each(function () {
        $(this).index() == e - 1 &&
          0 == $("#commentform").length &&
          0 == $("#pagination").length &&
          (0 < parseInt($(".container-wrap").css("padding-bottom")) &&
            $(this).css("margin-bottom", "-40px"),
          $("#call-to-action .triangle").remove());
      }),
      $(".portfolio-filters").each(function () {
        ("0" == $(this).index() && 0 != d.length) || "0" == $(this).index()
          ? $(this).addClass("first-section nder-page-header")
          : (("0" == $(this).index() && 0 == d.length) ||
              "0" == $(this).index()) &&
            $(this).css({ "margin-top": "0px" }).addClass("first-section");
      }),
      $(".portfolio-filters-inline").each(function () {
        0 < $(this).parents(".wpb_row").length ||
          (("0" == $(this).index() && 0 != d.length) || "0" == $(this).index()
            ? $(this).addClass("first-section nder-page-header")
            : (("0" == $(this).index() && 0 == d.length) ||
                "0" == $(this).index()) &&
              $(this)
                .css({ "margin-top": "-30px", "padding-top": "50px" })
                .addClass("first-section"));
      });
  }
  function Le() {
    var s = 0 < $("body.vc_editor").length ? ".vc_element > " : "",
      r = E.is('[data-flex-cols="true"]');
    $(
      ".main-content > .row > " +
        s +
        " .full-width-content, #portfolio-extra > " +
        s +
        " .full-width-content, .woocommerce-tabs #tab-description > .full-width-content, .post-area.span_12 article .content-inner > .full-width-content"
    ).each(function () {
      var n, i, e;
      1 < $(this).find("> .span_12 > " + s + " .col").length &&
        ((e = i = 0),
        $(this)
          .find("> .span_12 > " + s + "  .col")
          .each(function () {
            n =
              0 < $(this).find("> .vc_column-inner > .wpb_wrapper").length
                ? ".vc_column-inner"
                : ".column-inner-wrap > .column-inner";
            var t = r
                ? parseInt(
                    $(this).find("> .vc_column-inner").css("padding-top")
                  )
                : parseInt($(this).css("padding-top")),
              e =
                2 < s.length && 0 < $(this).find("> .vc_column-inner").length
                  ? parseInt(
                      $(this).find("> .vc_column-inner").css("padding-top")
                    )
                  : 0,
              a = $(this)
                .find("> " + n + " > .wpb_wrapper")
                .height();
            i < a + 2 * t + e && (i = a + 2 * t + e);
          }),
        $(this)
          .find("> .span_12 > " + s + " .col")
          .each(function () {
            (n =
              0 < $(this).find("> .vc_column-inner > .wpb_wrapper").length
                ? ".vc_column-inner"
                : ".column-inner-wrap > .column-inner"),
              0 < $(this).find("> " + n + " > .wpb_wrapper > *").length
                ? ((s.length < 2 &&
                    !$(this)
                      .parent()
                      .parent()
                      .hasClass("vc_row-o-equal-height")) ||
                    (2 < s.length &&
                      !$(this)
                        .parent()
                        .parent()
                        .parent()
                        .hasClass("vc_row-o-equal-height"))) &&
                  ($(this).css("height", i),
                  r && $(this).find("> .vc_column-inner").css("height", i))
                : $(this).is('[data-using-bg="true"]') &&
                  0 == $(this).parents(".vc_row-o-content-top").length &&
                  ($(this).css("min-height", i),
                  E.is('[data-flex-cols="true"]') &&
                    $(this).find("> .vc_column-inner").css("min-height", i),
                  $(this).is('[data-animation*="reveal"]') &&
                    $(this).find(".column-inner").css("min-height", i));
          }),
        gt.winW < 1e3 &&
          $(this)
            .find("> .span_12 > " + s + " .col .wpb_row .col")
            .css("min-height", "0px"),
        $(this).hasClass("vertically-align-columns") &&
          1e3 < gt.winW &&
          !$(this).hasClass("vc_row-o-equal-height") &&
          $(this)
            .find("> .span_12 > " + s + " .col")
            .each(function () {
              (n =
                0 < $(this).find("> .vc_column-inner > .wpb_wrapper").length
                  ? ".vc_column-inner"
                  : ".column-inner-wrap > .column-inner"),
                (e = $(this)
                  .find("> " + n + " > .wpb_wrapper")
                  .height());
              var t = $(this).height() / 2 - e / 2;
              t <= 0 && (t = 0),
                $(this)
                  .find("> " + n + " > .wpb_wrapper")
                  .css("margin-top", t)
                  .css("margin-bottom", t);
            }));
    }),
      0 == $('body[data-flex-cols="true"]').length &&
        ($(
          ".main-content > .row > .wpb_row:not(.full-width-content).vc_row-o-equal-height"
        ).each(function () {
          var e;
          0 <
            $(this).find(
              ">.span_12 > " + s + ' .wpb_column[data-animation*="reveal"]'
            ).length &&
            ((e = 0),
            $(this)
              .find("> .span_12 > " + s + " .col")
              .each(function () {
                var t = parseInt(
                  $(this)
                    .find("> .column-inner-wrap > .column-inner")
                    .css("padding-top")
                );
                $(this).find("> .column-inner-wrap > .column-inner").height() +
                  2 * t >
                  e &&
                  (e =
                    $(this)
                      .find("> .column-inner-wrap > .column-inner")
                      .height() +
                    2 * t);
              }),
            $(this)
              .find("> .span_12 > " + s + " .col")
              .each(function () {
                0 <
                $(this).find(
                  "> .column-inner-wrap > .column-inner .wpb_wrapper > *"
                ).length
                  ? $(this).find("> .column-inner-wrap").css("height", e)
                  : ($(this).css("min-height", e),
                    $(this).is('[data-animation*="reveal"]') &&
                      $(this).find(".column-inner").css("min-height", e));
              }));
        }),
        $(
          ".wpb_row.vc_row-o-equal-height>.span_12> " +
            s +
            '.wpb_column[class*="padding-"][data-padding-pos="all"]'
        ).each(function () {
          0 == $(this).parents(".tabbed").length &&
            $(this).css({
              "padding-top": $(this).css("padding-left"),
              "padding-bottom": $(this).css("padding-left"),
            });
        }));
  }
  function qe() {
    $(".wpb_row:has(.nectar-parallax-scene)").each(function (t) {
      var e = parseInt(
        $(this).find(".nectar-parallax-scene").attr("data-scene-strength")
      );
      J[t] = $(this)
        .find(".nectar-parallax-scene")
        .parallax({ scalarX: e, scalarY: e });
      var a = $(this).find(".nectar-parallax-scene li");
      $.each(a, function () {
        var t;
        0 < $(this).find("div").length &&
          (t = $(this)
            .find("div")
            .css("background-image")
            .replace(/"/g, "")
            .replace(/url\(|\)$/gi, "")) &&
          "" !== t &&
          "none" !== t &&
          (a = a.add($("<img>").attr("src", t)));
      });
    });
  }
  function je() {
    $("ul.checks li").each(function () {
      0 == $(this).find("i.fa-check-circle").length &&
        $(this).prepend('<i class="fa fa-check-circle"></i>');
    });
  }
  function Pe() {
    $('.nectar-cta[data-style="arrow-animation"]').addClass("loaded");
  }
  function Ye() {
    var e = 1 == dt ? "500%" : "88%",
      n = 1 == dt ? "500%" : "70%",
      s = 1 == dt ? "500%" : "70%";
    $(lt + ".img-with-animation").each(function (t) {
      var n = $(this),
        i = n.is("[data-animation]") ? n.attr("data-animation") : "fade-in";
      (("ro-reveal-from-right" == i && "88%" == e) ||
        ("ro-reveal-from-left" == i && "88%" == e)) &&
        (e = "75%"),
        "slide-up" == i && "88%" == e && (e = "99%");
      var s = z;
      $(this)[0].hasAttribute("data-animation-easing") &&
        (s = $(this).attr("data-animation-easing"));
      var r = parseInt(H);
      (0 < n.parents(".row_position_absolute").length ||
        n.hasClass("position_desktop_absolute")) &&
        (r = 500);
      var o = new Waypoint({
        element: n[0],
        handler: function () {
          var t, e, a;
          (0 < n.parents(".wpb_tab").length &&
            "hidden" == n.parents(".wpb_tab").css("visibility")) ||
            n.hasClass("animated-in") ||
            ((!A || 0 < $('body[data-responsive="0"]').length) &&
              ((t = n.is("[data-delay]") ? n.attr("data-delay") : 0),
              (e =
                0 < n.parents(".hover-wrap").length
                  ? n.parents(".hover-wrap")
                  : n),
              (a = H),
              0 < n.parents(".nectar-disable-mobile-animation").length &&
                gt.winW < 1e3 &&
                (t = r = a = 0),
              "fade-in-from-left" == i || "fade-in-from-right" == i
                ? e.delay(t).transition({ opacity: 1, x: "0px" }, a, s)
                : "fade-in-from-bottom" == i
                ? et.push(
                    anime({
                      targets: e[0],
                      translateY: [100, 0],
                      translateZ: 0,
                      opacity: { value: [0, 1], duration: r },
                      delay: t,
                      easing: s,
                      duration: a,
                    })
                  )
                : "slide-up" == i
                ? et.push(
                    anime({
                      targets: e[0],
                      translateY: [150, 0],
                      translateZ: 0,
                      delay: t,
                      easing: s,
                      duration: a,
                    })
                  )
                : "fade-in" == i
                ? e.delay(t).transition({ opacity: 1 }, a, s)
                : "grow-in" == i
                ? setTimeout(function () {
                    e.transition({ scale: 1, opacity: 1 }, a, s);
                  }, t)
                : "flip-in" == i
                ? setTimeout(function () {
                    e.transition({ rotateY: 0, opacity: 1 }, a, s);
                  }, t)
                : "flip-in-vertical" == i
                ? setTimeout(function () {
                    e.transition({ rotateX: 0, opacity: 1 }, a, s);
                  }, t)
                : ("ro-reveal-from-left" != i &&
                    "ro-reveal-from-right" != i &&
                    "ro-reveal-from-bottom" != i &&
                    "ro-reveal-from-top" != i) ||
                  n.parents(".img-with-aniamtion-wrap").addClass("animated-in"),
              "none" != i && n.addClass("animated-in"))),
            o.destroy();
        },
        offset: e,
      });
    }),
      $(lt + ".nectar_cascading_images").each(function () {
        var t = $(this),
          a = $(this).is("[data-animation-timing]")
            ? $(this).attr("data-animation-timing")
            : 175,
          a = parseInt(a),
          e = new Waypoint({
            element: t[0],
            handler: function () {
              (0 < t.parents(".wpb_tab").length &&
                "hidden" == t.parents(".wpb_tab").css("visibility")) ||
                t.hasClass("animated-in") ||
                ((!A || 0 < $('body[data-responsive="0"]').length) &&
                  (t.find(".cascading-image").each(function (t) {
                    var e = $(this);
                    "flip-in" == e.attr("data-animation") ||
                    "flip-in-vertical" == e.attr("data-animation")
                      ? setTimeout(function () {
                          e.find(".inner-wrap").css({
                            opacity: 1,
                            transform: "rotate(0deg) translateZ(0px)",
                          });
                        }, t * a)
                      : "grow-in-reveal" == e.attr("data-animation")
                      ? setTimeout(function () {
                          e
                            .find(".inner-wrap")
                            .css({
                              opacity: 1,
                              transform:
                                "translateX(0px) translateY(0px) scale(1,1) translateZ(0px)",
                            }),
                            e
                              .find(".inner-wrap img")
                              .css({
                                transform:
                                  "translateX(0px) translateY(0px) scale(1,1) translateZ(0px)",
                              });
                        }, t * a)
                      : setTimeout(function () {
                          e.find(".inner-wrap").css({
                            opacity: 1,
                            transform:
                              "translateX(0px) translateY(0px) scale(1,1) translateZ(0px)",
                          });
                        }, t * a);
                  }),
                  t.addClass("animated-in"))),
                e.destroy();
            },
            offset: n,
          });
      }),
      $(
        lt +
          '.col.has-animation:not([data-animation*="reveal"]), ' +
          lt +
          '.wpb_column.has-animation:not([data-animation*="reveal"]), ' +
          lt +
          ".nectar-fancy-box.has-animation"
      ).each(function (n) {
        if (c && 0 < $(this).parents(".top-level").length) return !0;
        var i = $(this),
          t = e;
        $(this)[0].hasAttribute("data-animation-offset") &&
          (t = parseInt($(this).attr("data-animation-offset")) + "%");
        var s = z;
        $(this)[0].hasAttribute("data-animation-easing") &&
          (s = $(this).attr("data-animation-easing"));
        var r = parseInt(H);
        0 < i.parents(".row_position_absolute").length && (r = 500);
        var o = new Waypoint({
          element: i[0],
          handler: function () {
            var t, e, a;
            (0 < i.parents(".wpb_tab").length &&
              "hidden" == i.parents(".wpb_tab").css("visibility")) ||
              i.hasClass("animated-in") ||
              ((!A || 0 < $('body[data-responsive="0"]').length) &&
                (i.addClass("triggered-animation"),
                $(T).trigger("nectar-column-animation-start"),
                (t = i.attr("data-delay")),
                (e = H),
                i.hasClass("mobile-disable-entrance-animation") &&
                  gt.winW < 1e3 &&
                  (t = r = e = 0),
                "fade-in-from-left" == i.attr("data-animation") ||
                "fade-in-from-right" == i.attr("data-animation")
                  ? (tt[n] = setTimeout(function () {
                      i.transition({ opacity: 1, x: "0px" }, e, s);
                    }, t))
                  : "fade-in-from-bottom" == i.attr("data-animation") ||
                    "slight-fade-in-from-bottom" == i.attr("data-animation")
                  ? ((a =
                      "fade-in-from-bottom" == i.attr("data-animation")
                        ? 100
                        : 50),
                    et.push(
                      anime({
                        targets: i[0],
                        translateY: [a, 0],
                        translateZ: 0,
                        opacity: { value: [0, 1], duration: r },
                        delay: t,
                        easing: s,
                        duration: e,
                      })
                    ))
                  : "fade-in" == i.attr("data-animation")
                  ? (tt[n] = setTimeout(function () {
                      i.transition({ opacity: 1 }, e, s);
                    }, t))
                  : "grow-in" == i.attr("data-animation") ||
                    "zoom-out" == i.attr("data-animation")
                  ? (tt[n] = setTimeout(function () {
                      i.transition({ scale: 1, opacity: 1 }, e, s);
                    }, t))
                  : "flip-in" == i.attr("data-animation")
                  ? (tt[n] = setTimeout(function () {
                      i.transition({ rotateY: "0", opacity: 1 }, e, s);
                    }, t))
                  : "flip-in-vertical" == i.attr("data-animation")
                  ? (tt[n] = setTimeout(function () {
                      i.transition({ rotateX: "0", y: "0", opacity: 1 }, e, s);
                    }, t))
                  : "slight-twist" == i.attr("data-animation") &&
                    (tt[n] = setTimeout(function () {
                      et.push(
                        anime({
                          targets: i[0],
                          rotateY: [20, 0],
                          rotateZ: [-4, 0],
                          opacity: 1,
                          easing: s,
                          duration: e,
                        })
                      );
                    }, t)),
                i.hasClass("boxed") &&
                  (i.addClass("no-pointer-events"),
                  setTimeout(function () {
                    i.removeClass("no-pointer-events");
                  }, parseInt(H) + parseInt(t) + 30)),
                i.find(
                  '.nectar-post-grid-wrap[data-style="mouse_follow_image"]'
                ) &&
                  setTimeout(function () {
                    i[0].style.transform = "none";
                  }, parseInt(H) + parseInt(t) + 30),
                i.addClass("animated-in"))),
              o.destroy();
          },
          offset: t,
        });
      }),
      $(lt + '.wpb_column.has-animation[data-animation*="reveal"]').each(
        function () {
          var a = z;
          $(this)[0].hasAttribute("data-animation-easing") &&
            (a = $(this).attr("data-animation-easing"));
          var t = $(this).is('[data-animation="mask-reveal"]') ? "88%" : s;
          $(this)[0].hasAttribute("data-animation-offset") &&
            (t = parseInt($(this).attr("data-animation-offset")) + "%");
          var n = $(this),
            i = new Waypoint({
              element: n[0],
              handler: function () {
                var t, e;
                (0 < n.parents(".wpb_tab").length &&
                  "hidden" == n.parents(".wpb_tab").css("visibility")) ||
                  n.hasClass("animated-in") ||
                  ((t = n.attr("data-delay")),
                  (!A || 0 < $('body[data-responsive="0"]').length) &&
                    ((e = 0 < n.find("> .vc_column-inner").length),
                    "reveal-from-bottom" == n.attr("data-animation") ||
                    "reveal-from-top" == n.attr("data-animation")
                      ? setTimeout(function () {
                          1 == e
                            ? n
                                .find("> .vc_column-inner")
                                .transition({ y: 0 }, H, a)
                            : n
                                .find(".column-inner-wrap, .column-inner")
                                .transition({ y: 0 }, H, a, function () {
                                  n.find(
                                    ".column-inner-wrap, .column-inner"
                                  ).addClass("no-transform");
                                }),
                            n.addClass("animated-in");
                        }, t)
                      : ("reveal-from-right" != n.attr("data-animation") &&
                          "reveal-from-left" != n.attr("data-animation")) ||
                        setTimeout(function () {
                          1 == e
                            ? n
                                .find("> .vc_column-inner")
                                .transition({ x: 0 }, H, a)
                            : n
                                .find(".column-inner-wrap, .column-inner")
                                .transition({ x: 0 }, H, a, function () {
                                  n.find(
                                    ".column-inner-wrap, .column-inner"
                                  ).addClass("no-transform");
                                }),
                            n.addClass("animated-in");
                        }, t),
                    setTimeout(function () {
                      n.addClass("animated-in");
                    }, t))),
                  i.destroy();
              },
              offset: t,
            });
        }
      );
  }
  function Re() {
    $(".nectar_cascading_images").each(function () {
      var n = !!$(this).hasClass("forced-aspect");
      0 < $(this).parents(".vc_row-o-equal-height").length &&
        0 < $(this).parents(".wpb_column").length &&
        $(this).css("max-width", $(this).parents(".wpb_column").width()),
        $(this)
          .find(".bg-color")
          .each(function () {
            if (1 == n && 0 == $(this).parents(".cascading-image").index())
              return !0;
            var t = 0,
              e = 0,
              a,
              t,
              e;
            (e =
              0 == $(this).parent().find(".img-wrap").length
                ? ((t = (a = $(this)
                    .parents(".cascading-image")
                    .siblings('.cascading-image[data-has-img="true"]')
                    .first())
                    .find(".img-wrap")
                    .height()),
                  a.find(".img-wrap").width())
                : ((t = $(this).parent().find(".img-wrap").height()),
                  $(this).parent().find(".img-wrap").width())),
              $(this).css({ height: t, width: e }).addClass("calculated");
          });
    });
  }
  function Ve(t, e) {
    switch (
      ((this.$element = t),
      (this.inView = !1),
      (this.topLevel = !1),
      (this.lastY = 0),
      (this.layer1Parallax = !!this.$element.is(
        '[data-layer-1-parallax="yes"]'
      )),
      e)
    ) {
      case "subtle":
        this.intensity = 0.09;
        break;
      case "medium":
        this.intensity = 0.15;
        break;
      case "high":
        this.intensity = 0.25;
    }
    this.calculatePos(),
      this.trackView(),
      this.animate(),
      (0 < $(".portfolio-filters").length ||
        0 < $(".portfolio-filters-inline").length) &&
        setInterval(this.calculatePos.bind(this), 700),
      g.on("resize", this.calculatePos.bind(this));
  }
  function Xe() {
    $(lt + ".nectar-split-heading:not(.custom-trigger)").each(function (t) {
      var e = 1 == dt ? "500%" : "bottom-in-view";
      $(this)[0].hasAttribute("data-animation-offset") &&
        1 != dt &&
        0 < $(this).attr("data-animation-offset").length &&
        (e = parseInt($(this).attr("data-animation-offset")) + "%");
      var i = $(this),
        a = i.is("[data-animation-delay]")
          ? parseInt(i.attr("data-animation-delay"))
          : 0,
        s = new Waypoint({
          element: i[0],
          handler: function () {
            var n;
            (0 < i.parents(".wpb_tab").length &&
              "hidden" == i.parents(".wpb_tab").css("visibility")) ||
              i.hasClass("animated-in") ||
              ((!A || 0 < $('body[data-responsive="0"]').length) &&
                setTimeout(function () {
                  var a, a, t, e;
                  i.is(
                    '[data-animation-type="line-reveal-by-space"]:not([data-text-effect*="letter-reveal"])'
                  )
                    ? ((a = 0),
                      i.is('[data-stagger="true"]') &&
                        ((a = 500 / i.find("> * > span").length),
                        (a = Math.min(Math.max(a, 15), 50))),
                      (n = parseInt(H) < 1100 ? H : "1100"),
                      i.is('[data-m-rm-animation="true"]') && gt.winW < 1e3
                        ? i
                            .find("> * > span .inner")
                            .css({ transform: "translateY(0)", opacity: "1" })
                        : i.find("> * > span").each(function (t) {
                            var e;
                            0 == a
                              ? $(this)
                                  .find("> .inner")
                                  .delay(t * a)
                                  .transition({ y: "0px", opacity: "1" }, n, z)
                              : ((e = $(this).find("> .inner")),
                                setTimeout(function () {
                                  (e[0].style.transform = "translateY(0em)"),
                                    (e[0].style.opacity = "1");
                                }, t * a));
                          }))
                    : i.is(
                        '[data-animation-type="line-reveal-by-space"][data-text-effect*="letter-reveal"]'
                      )
                    ? ((n = parseInt(H) < 1e3 ? H : "1000"),
                      (a = 0),
                      (t = i.find("> * > span span")),
                      (e = i.is('[data-text-effect="letter-reveal-top"]')
                        ? ["-1.3em", "0em"]
                        : ["1.3em", "0em"]),
                      (a = 400 / t.length),
                      (a = Math.min(Math.max(a, 20), 35)),
                      0 < t.length &&
                        et.push(
                          anime({
                            targets: i.find("> * > span span").toArray(),
                            translateY: e,
                            delay: anime.stagger(a),
                            duration: 1200,
                            easing: "cubicBezier(0.25,1,0.5,1)",
                          })
                        ))
                    : i.find(".heading-line").each(function (t) {
                        $(this)
                          .find("> div")
                          .delay(70 * t)
                          .transition({ y: "0px" }, H, z);
                      }),
                    i.addClass("animated-in");
                }, a)),
              s.destroy();
          },
          offset: e,
        });
    }),
      $(lt + ".nectar-split-heading.scroll-timeline").each(function (t) {
        var e, a;
        !0 === pt.$usingFullScreenRows
          ? ((e = $(this)),
            (a = new Waypoint({
              element: e[0],
              handler: function () {
                (0 < e.parents(".wpb_tab").length &&
                  "hidden" == e.parents(".wpb_tab").css("visibility")) ||
                e.hasClass("animated-in")
                  ? a.destroy()
                  : (!A || 0 < $('body[data-responsive="0"]').length) &&
                    e.find(".inner").each(function (t) {
                      var e = $(this);
                      setTimeout(function () {
                        e.css({ opacity: "1" });
                      }, 30 * t);
                    });
              },
              offset: "500%",
            })))
          : new Ne($(this));
      });
  }
  function Ne(t) {
    (this.$el = t),
      (this.inView = !1),
      (this.timeline = null),
      (this.duration = 450),
      (this.speed = 1.9),
      (this.wordDelay = 150),
      (this.topLevel = !1),
      (this.topCushion = 0.05 * gt.winH),
      (this.mergedGroup = !1),
      0 < this.$el.parents(".wpb_row.nectar-split-heading-merged").length ||
        (this.mergeNeighbors(),
        this.trackInView(),
        this.createTimeline(),
        this.events(),
        this.raf());
  }
  function De() {
    var s = 1 == dt ? "500%" : "bottom-in-view",
      t =
        0 < $('#nectar_fullscreen_rows[data-mobile-disable="on"]').length &&
        gt.usingMobileBrowser
          ? ".nectar-progress-bar"
          : lt + ".nectar-progress-bar";
    gt.usingMobileBrowser && "bottom-in-view" == s && (s = "70%"),
      $(t).each(function () {
        var n = $(this),
          i = new Waypoint({
            element: n[0],
            handler: function () {
              var t, e, a;
              (0 < n.parents(".wpb_tab").length &&
                "hidden" == n.parents(".wpb_tab").css("visibility")) ||
                n.hasClass("completed") ||
                ("100%" == s && n.find(".bar-wrap").css("opacity", "1"),
                (t = n.find("span").attr("data-width")),
                (e = parseInt(n.find("span strong i").text())),
                n
                  .find("span")
                  .transition(
                    { width: parseInt(t) + "%" },
                    800,
                    "easeInOutCubic"
                  ),
                (a = n.find("span strong i")[0]),
                new ae(a, 0, e, 0, 1, { useEasing: !1 }).start(),
                n
                  .find("span strong")
                  .transition({ opacity: 1 }, 550, "easeInCirc"),
                "100" == t && n.find("span strong").addClass("full"),
                n.addClass("completed")),
                i.destroy();
            },
            offset: s,
          });
      });
  }
  function Qe() {
    var t = 1 == dt ? "500%" : "75%";
    $(lt + '.wpb_column[data-border-animation="true"]').each(function () {
      var e = $(this),
        a = new Waypoint({
          element: e[0],
          handler: function () {
            var t;
            (0 < e.parents(".wpb_tab").length &&
              "hidden" == e.parents(".wpb_tab").css("visibility")) ||
              e.hasClass("completed") ||
              ((t =
                0 < e.attr("data-border-animation-delay").length
                  ? parseInt(e.attr("data-border-animation-delay"))
                  : 0),
              setTimeout(function () {
                e.find(".border-wrap").addClass("animation"),
                  e.find(".border-wrap").addClass("completed");
              }, t)),
              a.destroy();
          },
          offset: t,
        });
    });
  }
  function Ze() {
    $(lt + ".nectar-waypoint-el").each(function () {
      var t =
          !!$(this).is("[data-nectar-waypoint-el-stagger]") &&
          $(this).attr("data-nectar-waypoint-el-stagger"),
        e = $(this).is("[data-nectar-waypoint-el-delay]")
          ? parseInt($(this).attr("data-nectar-waypoint-el-delay"))
          : 0,
        a = $(this).is("[data-nectar-waypoint-el-offset]")
          ? parseInt($(this).attr("data-nectar-waypoint-el-offset")) + "%"
          : "90%";
      1 == dt && (a = "500%");
      var n = $(this),
        i = new Waypoint({
          element: n[0],
          handler: function () {
            (0 < n.parents(".wpb_tab").length &&
              "hidden" == n.parents(".wpb_tab").css("visibility")) ||
              n.hasClass("completed") ||
              setTimeout(function () {
                t
                  ? n.find("." + t).each(function (t) {
                      var e = $(this);
                      setTimeout(function () {
                        e.addClass("animated-in");
                      }, 100 * t);
                    })
                  : n.addClass("animated-in");
              }, e),
              i.destroy();
          },
          offset: a,
        });
    });
  }
  function Ge() {
    var a = 1 == dt ? "500%" : "80%";
    $(lt + ".nectar_food_menu_item")
      .parent()
      .each(function () {
        var t = $(this),
          e = new Waypoint({
            element: t[0],
            handler: function () {
              (0 < t.parents(".wpb_tab").length &&
                "hidden" == t.parents(".wpb_tab").css("visibility")) ||
                t.hasClass("completed") ||
                t.find(".nectar_food_menu_item").each(function (t) {
                  var e = $(this);
                  setTimeout(function () {
                    e.addClass("animated-in");
                  }, 150 * t);
                }),
                e.destroy();
            },
            offset: a,
          });
      });
  }
  function Ue() {
    var n = 1 == dt ? "500%" : "bottom-in-view";
    $(
      lt +
        '.divider-small-border[data-animate="yes"], ' +
        lt +
        '.divider-border[data-animate="yes"]'
    ).each(function () {
      var e = $(this).hasClass("divider-small-border") ? 1300 : 1500,
        t = $(this),
        a = new Waypoint({
          element: t[0],
          handler: function () {
            (0 < t.parents(".wpb_tab").length &&
              "hidden" == t.parents(".wpb_tab").css("visibility")) ||
              t.hasClass("completed") ||
              (t.each(function () {
                $(this).css({ transform: "scale(0,1)", visibility: "visible" });
                var t = $(this);
                t.delay(t.attr("data-animation-delay")).transition(
                  { transform: "scale(1, 1)" },
                  e,
                  "cubic-bezier(.18,0.75,.25,1)"
                );
              }),
              t.addClass("completed")),
              a.destroy();
          },
          offset: n,
        });
    });
  }
  function Je() {
    $(".nectar_image_with_hotspots").each(function () {
      $(this)
        .find(".nectar_hotspot_wrap")
        .each(function () {
          var t;
          690 < gt.winW
            ? (0 <
                $(this).parents(
                  '.nectar_image_with_hotspots[data-tooltip-func="hover"]'
                ).length &&
                ($(this).find(".nectar_hotspot").removeClass("click"),
                $(this).find(".nttip").removeClass("open")),
              $(this).find(".nttip .inner a.tipclose").remove(),
              $(".nttip").css("height", "auto"),
              $(this).css({ width: "auto", height: "auto" }),
              $(this)
                .find(".nttip")
                .removeClass("force-right")
                .removeClass("force-left")
                .removeClass("force-top")
                .css("width", "auto"),
              (t = $(this).find(".nttip").offset()).left >
              $(this).parents(".nectar_image_with_hotspots").width() - 200
                ? $(this).find(".nttip").css("width", "250px")
                : $(this).find(".nttip").css("width", "auto"),
              t.left < 0
                ? $(this).find(".nttip").addClass("force-right")
                : t.left + $(this).find(".nttip").outerWidth(!0) > gt.winW
                ? $(this)
                    .find(".nttip")
                    .addClass("force-left")
                    .css("width", "250px")
                : t.top + $(this).find(".nttip").height() + 35 > g.height() &&
                  0 < $("#nectar_fullscreen_rows").length &&
                  $(this).find(".nttip").addClass("force-top"),
              0 == $(this).find("> .open").length &&
                $(this).css({ width: "30px", height: "30px" }))
            : ($(this)
                .find(".nttip")
                .removeClass("force-left")
                .removeClass("force-right")
                .removeClass("force-top"),
              $(this).find(".nectar_hotspot").addClass("click"),
              0 == $(this).find(".nttip a.tipclose").length &&
                $(this)
                  .find(".nttip .inner")
                  .append(
                    '<a href="#" class="tipclose"><span><i class="screen-reader-text">' +
                      nectar_front_i18n.close +
                      "</i></span></a>"
                  ),
              $(".nttip").css("height", g.height()));
        });
    });
  }
  function Ke() {
    0 != $(".nectar_image_with_hotspots").length &&
      ((function () {
        $('.nectar_image_with_hotspots[data-hotspot-icon="numerical"]').each(
          function () {
            $(this)
              .find(".nectar_hotspot_wrap")
              .each(function (t) {
                var e = $(this);
                setTimeout(function () {
                  e.find(".nectar_hotspot").addClass("pulse");
                }, 300 * t);
              });
          }
        );
        var a = [];
        $(
          '.nectar_image_with_hotspots:not([data-tooltip-func="click"]) .nectar_hotspot'
        ).each(function (e) {
          (a[e] = ""),
            $(this).on("mouseover", function () {
              clearTimeout(a[e]),
                $(this)
                  .parent()
                  .css({ "z-index": "400", height: "auto", width: "auto" });
            }),
            $(this).on("mouseleave", function () {
              var t = $(this);
              t.parent().css({ "z-index": "auto" }),
                (a[e] = setTimeout(function () {
                  t.parent().css({ height: "30px", width: "30px" });
                }, 300));
            });
        });
      })(),
      E.on("click", ".nectar_hotspot.click", function () {
        var t;
        return (
          $(this)
            .parents(".nectar_image_with_hotspots")
            .find(".nttip")
            .removeClass("open"),
          $(this).parent().find(".nttip").addClass("open"),
          $(this)
            .parents(".nectar_image_with_hotspots")
            .find(".nectar_hotspot")
            .removeClass("open"),
          $(this).parent().find(".nectar_hotspot").addClass("open"),
          690 < gt.winW &&
            ($(this)
              .parent()
              .css({ "z-index": "120", height: "auto", width: "auto" }),
            (t = $(this)),
            setTimeout(function () {
              t.parents(".nectar_image_with_hotspots")
                .find(".nectar_hotspot_wrap")
                .each(function () {
                  0 == $(this).find("> .open").length &&
                    $(this).css({
                      height: "30px",
                      width: "30px",
                      "z-index": "auto",
                    });
                });
            }, 300)),
          gt.winW <= 690 &&
            (0 < $("body.nectar_box_roll").length &&
              $(".container-wrap").addClass("hotspot-open"),
            $(".nectar_hotspot.click")
              .parents('.wpb_row, [class*="vc_col-"]')
              .css("z-index", ""),
            $(this)
              .parents('.wpb_row, [class*="vc_col-"]')
              .css("z-index", "200")),
          !1
        );
      }),
      E.on("click", ".nectar_hotspot.open", function () {
        return (
          $(this).parent().find(".nttip").removeClass("open"),
          $(this).parent().find(".nectar_hotspot").removeClass("open"),
          $(this).parents(".wpb_row").css("z-index", "auto"),
          !1
        );
      }),
      E.on("click", ".nttip.open", function (t) {
        if (gt.winW < 690 && (!t.target || !$(t.target).is("a")))
          return (
            0 < $("body.nectar_box_roll").length &&
              $(".container-wrap").removeClass("hotspot-open"),
            $(this)
              .parents(".nectar_image_with_hotspots")
              .find(".nttip")
              .removeClass("open"),
            $(this)
              .parents(".nectar_image_with_hotspots")
              .find(".nectar_hotspot")
              .removeClass("open"),
            $(this).parents(".wpb_row").css("z-index", "auto"),
            !1
          );
      }),
      Je(),
      g.on("resize", Je));
  }
  function ta() {
    var a = 1 == dt ? "500%" : "50%";
    $(lt + '.nectar_image_with_hotspots[data-animation="true"]').each(
      function () {
        var t = $(this),
          e = new Waypoint({
            element: t[0],
            handler: function () {
              (0 < t.parents(".wpb_tab").length &&
                "hidden" == t.parents(".wpb_tab").css("visibility")) ||
                t.hasClass("completed") ||
                (t.addClass("completed"),
                t.find(".nectar_hotspot_wrap").each(function (t) {
                  var e = $(this),
                    a = 0 < e.parents(".col.has-animation").length ? 1 : 0;
                  setTimeout(function () {
                    e.addClass("animated-in");
                  }, 175 * (t + a));
                })),
                e.destroy();
            },
            offset: a,
          });
      }
    );
  }
  function ea() {
    [].slice
      .call(I.querySelectorAll("[data-nectar-img-src]"))
      .forEach(function (t) {
        var e = t.getAttribute("data-nectar-img-src");
        e && aa(t, e, ht);
      });
  }
  function aa(t, e, a) {
    var n;
    t.classList.contains("nectar-lazy")
      ? (t.addEventListener("load", function () {
          t.classList.contains("keep-calculated-size") ||
            ((t.style.height = ""), (t.style.width = "")),
            t.classList.add("loaded"),
            t.removeAttribute("data-nectar-img-src"),
            "undefined" != typeof SalientPortfolio &&
              t.classList.contains("image-gallery-portfolio-item") &&
              $(T).trigger("salient-portfolio-recalculate"),
            gt.usingMobileBrowser || Waypoint.refreshAll(),
            a.unobserve(t);
        }),
        (t.src = e),
        (n = t.getAttribute("data-nectar-img-srcset")) &&
          (t.setAttribute("srcset", n),
          t.removeAttribute("data-nectar-img-srcset")),
        t.parentNode.classList.add("img-loaded"))
      : ((t.style.backgroundImage = "url('" + e + "')"),
        t.classList.add("loaded"),
        t.removeAttribute("data-nectar-img-src"),
        a.unobserve(t));
  }
  function na(t, e) {
    if (t.isIntersecting) {
      if (t.target.classList.contains("loaded"))
        return e.unobserve(t.target), 0;
      for (var a in t.target.children) {
        var a = t.target.children[a];
        "string" == typeof a.tagName &&
          "SOURCE" === a.tagName &&
          (a.src = a.dataset.nectarVideoSrc);
      }
      t.target.load(),
        t.target.classList.remove("lazy"),
        t.target.classList.add("loaded"),
        e.unobserve(t.target);
    }
  }
  function ia() {
    var t = [].slice.call(I.querySelectorAll("[data-nectar-img-src]")),
      e = [].slice.call(I.querySelectorAll(".nectar-lazy-video")),
      a = [].slice.call(I.querySelectorAll("#header-outer .nectar-lazy-video")),
      n,
      i;
    "IntersectionObserver" in T
      ? (g.off("resize.nectarLazySizing", sa),
        g.on("resize.nectarLazySizing", sa),
        (ht = new IntersectionObserver(
          function (t) {
            t.forEach(function (t) {
              var e, t;
              !t.isIntersecting ||
                ((t = (e = t.target).getAttribute("data-nectar-img-src")) &&
                  aa(e, t, ht));
            });
          },
          { rootMargin: "450px" }
        )),
        t.forEach(function (t) {
          ht.observe(t);
        }),
        (n = new IntersectionObserver(
          function (t, e) {
            t.forEach(function (t) {
              na(t, n);
            });
          },
          { root: jt() ? null : I, rootMargin: "125px" }
        )),
        (i = new IntersectionObserver(
          function (t, e) {
            t.forEach(function (t) {
              na(t, i);
            });
          },
          { rootMargin: "125px" }
        )),
        a.forEach(function (t) {
          i.observe(t);
        }),
        e.forEach(function (t) {
          n.observe(t);
        }))
      : (t.forEach(function (t) {
          var e;
          t.classList.contains("nectar-lazy")
            ? (t.classList.contains("keep-calculated-size") ||
                ((t.style.height = ""), (t.style.width = "")),
              (t.src = t.getAttribute("data-nectar-img-src")),
              (e = t.getAttribute("data-nectar-img-srcset")) &&
                (t.setAttribute("srcset", e),
                t.removeAttribute("data-nectar-img-srcset")),
              t.parentNode.classList.add("img-loaded"))
            : (t.style.backgroundImage =
                "url('" + t.getAttribute("data-nectar-img-src") + "')"),
            t.classList.add("loaded"),
            t.removeAttribute("data-nectar-img-src");
        }),
        e.forEach(function (t) {
          for (var e in t.children) {
            var e = t.children[e];
            "string" == typeof e.tagName &&
              "SOURCE" === e.tagName &&
              (e.src = e.dataset.nectarVideoSrc);
          }
          t.load(), t.classList.remove("lazy"), t.classList.add("loaded");
        }));
  }
  function sa() {
    $("img.nectar-lazy:not(.loaded):not(.image-gallery-portfolio-item)").each(
      function () {
        if (
          $(this).hasClass("attachment-shop_thumbnail") ||
          $(this).hasClass("attachment-woocommerce_thumbnail") ||
          0 < $(this).parents(".nectar-post-grid-item").length
        )
          return !0;
        $(this).css({ height: "", width: "" });
        var t = parseInt($(this).attr("height")),
          e = parseInt($(this).attr("width")),
          a = (
            0 < $(this).parents(".nectar_cascading_images").length
              ? $(this).parents(".bg-layer")
              : $(this)
          ).width();
        0 < $(this).parents(".img-with-aniamtion-wrap.custom-size").length &&
          e < a &&
          (a = e),
          0 <
            $(this).parents('.img-with-aniamtion-wrap[data-shadow*="depth"]')
              .length &&
            (a = $(this).parents(".img-with-aniamtion-wrap").width());
        var a = Rt(
          e,
          t,
          (a =
            0 <
              $(this).parents(".nectar-post-grid-item-bg-wrap-inner").length &&
            !$(this).hasClass("nectar-post-grid-item__overlaid-img")
              ? $(this).parents(".nectar-post-grid-item-bg-wrap-inner").width()
              : a),
          2e3
        );
        $(this).css({ height: a.height + "px", width: a.width + "px" });
      }
    );
  }
  function ra() {
    (j = []),
      (R = []),
      gt.usingMobileBrowser ||
        ($('.nectar-post-grid[data-indicator="yes"]').each(function (t) {
          j[t] = new yt($(this), "view-indicator");
        }),
        $(
          '.nectar-post-grid-wrap[data-style="mouse_follow_image"] .nectar-post-grid'
        ).each(function (t) {
          R[t] = new yt($(this), "post-grid-images");
        }),
        $('.nectar-category-grid[data-style="mouse_follow_image"]').each(
          function (t) {
            R[t] = new yt($(this), "post-grid-images");
          }
        ));
  }
  function oa() {
    (it = []),
      ra(),
      $(".nectar-post-grid-wrap").each(function (t) {
        it[t] = new la($(this));
      });
  }
  function la(t) {
    (this.el = t),
      (this.currentPage = 0),
      (this.activeFilter = 1),
      (this.activeCatTotal = 0),
      (this.settingsData = JSON.parse(this.el.attr("data-el-settings"))),
      (this.queryData = JSON.parse(this.el.attr("data-query"))),
      (this.sortable = this.el
        .find(".nectar-post-grid-filters")
        .attr("data-sortable")),
      (this.gridStyle = this.el.attr("data-style")),
      this.initialMarkup(),
      this.clickEvents(),
      this.deepLinking(),
      this.lightboxGroups(),
      this.externalProjectLinks();
  }
  function da() {
    var a = 1 == dt ? "200%" : "75%";
    $(lt + ".nectar-post-grid-wrap").each(function () {
      var t, e;
      (c && $(this).hasClass("delay-js-loaded")) ||
        ((t = $(this)),
        (e = new Waypoint({
          element: t[0],
          handler: function () {
            var a, n;
            (0 < t.parents(".wpb_tab").length &&
              "hidden" == t.parents(".wpb_tab").css("visibility")) ||
              t.hasClass("completed") ||
              ((a = t.find(".nectar-post-grid[data-animation-stagger]")
                ? parseInt(
                    t.find(".nectar-post-grid").attr("data-animation-stagger")
                  )
                : 90),
              (n = t.find(".nectar-post-grid[data-animation]")
                ? t.find(".nectar-post-grid").attr("data-animation")
                : "none"),
              t.attr("data-style"),
              0 < t.find(".nectar-post-grid__reveal-image__inner").length &&
                t
                  .find(".nectar-post-grid__reveal-image__inner")
                  .css({ opacity: 0 }),
              t.find(".nectar-post-grid-filters").addClass("animated-in"),
              t.find(".nectar-post-grid-item").each(function (t) {
                var e = $(this);
                setTimeout(function () {
                  e.addClass("animated-in"),
                    "zoom-out-reveal" === n &&
                      Hn(e, function () {
                        Sn(e);
                      });
                }, t * a);
              }),
              setTimeout(function () {
                t.addClass("finished-animating");
              }, 950)),
              e.destroy();
          },
          offset: a,
        })));
    });
  }
  function ca() {
    var a = 1 == dt ? "500%" : "bottom-in-view";
    $(lt + ".nectar-animated-title").each(function () {
      var t = $(this),
        e = new Waypoint({
          element: t[0],
          handler: function () {
            (0 < t.parents(".wpb_tab").length &&
              "hidden" == t.parents(".wpb_tab").css("visibility")) ||
              t.hasClass("completed") ||
              t.addClass("completed"),
              e.destroy();
          },
          offset: a,
        });
    });
  }
  function ha() {
    var i = 1 == dt ? "500%" : "bottom-in-view";
    gt.usingMobileBrowser && "bottom-in-view" == i && (i = "85%"),
      $(lt + ".nectar-highlighted-text").each(function (t) {
        var e = 0,
          a;
        if (
          ($(this)
            .find("i")
            .each(function () {
              $(this).replaceWith(function () {
                return $("<em />").append($(this).html());
              });
            }),
          $(this).is("[data-id]") &&
            ((a = $(this)),
            $(this)
              .find("em")
              .each(function (t) {
                0 < t
                  ? $(this).attr("id", a.attr("data-id") + "-" + t)
                  : $(this).attr("id", a.attr("data-id"));
              })),
          $(this).is("[data-animation-delay]") &&
            0 < $(this).attr("data-animation-delay").length &&
            "false" != $(this).attr("data-animation") &&
            (e = $(this).attr("data-animation-delay")),
          $(this).find("em:has(a)").addClass("has-link"),
          A && $(this).find("em").addClass("animated"),
          $(this).is('[data-style="none"]'))
        )
          return !0;
        var a = $(this),
          n = new Waypoint({
            element: a[0],
            handler: function () {
              (0 < a.parents(".wpb_tab").length &&
                "hidden" == a.parents(".wpb_tab").css("visibility")) ||
                a.hasClass("animated") ||
                setTimeout(function () {
                  a.find("em").each(function (t) {
                    var e = $(this);
                    setTimeout(function () {
                      e.addClass("animated");
                    }, 300 * t);
                  });
                }, e),
                n.destroy();
            },
            offset: i,
          });
      });
  }
  function ua() {
    var a = 1 == dt ? "500%" : "75%";
    $(lt + '.nectar-woo-flickity[data-animation*="fade-in"]').each(function () {
      var t = $(this),
        e = new Waypoint({
          element: t[0],
          handler: function () {
            (0 < t.parents(".wpb_tab").length &&
              "hidden" == t.parents(".wpb_tab").css("visibility")) ||
              t.hasClass("animated-in") ||
              (t.addClass("animated-in"),
              t.find(".flickity-cell").each(function (t) {
                var e = $(this);
                setTimeout(function () {
                  e.find("> .product").css({
                    transform: "translate3d(0,0,0)",
                    opacity: "1",
                  });
                }, 100 * t);
              })),
              e.destroy();
          },
          offset: a,
        });
    });
  }
  function pa() {
    var t;
    $('.pricing-table[data-style="default"]').each(function () {
      (t = 0),
        $(this)
          .find("> div ul")
          .each(function () {
            $(this).height() > t && (t = $(this).height());
          }),
        0 == t && (t = "auto"),
        $(this).find("> div ul").css("height", t);
    });
  }
  function ga() {
    (U = []),
      "undefined" != typeof NectarTestimonialSlider
        ? $(".testimonial_slider").each(function (t) {
            var e = $(this),
              a = $(this).is("[data-style]")
                ? $(this).attr("data-style")
                : "none";
            (U[t] = new NectarTestimonialSlider(e, a, ka, Le)),
              $(this).is(
                '.disable-height-animation:not([data-style*="multiple_visible"])'
              ) &&
                (U[t].testimonialSliderHeight(),
                setTimeout(U[t].testimonialSliderHeight.bind(U[t]), 700)),
              $(this).is(
                '.testimonial_slider[data-style="multiple_visible_minimal"]'
              ) && U[t].testimonialSliderHeightMinimalMult();
          })
        : Nt("#nectar-testimonial-sliders-js", 0, ga);
  }
  function fa() {
    g.off("smartresize.nectarTestimonials"),
      g.off("resize.nectarTestimonialsMin"),
      0 < U.length && g.on("smartresize.nectarTestimonials", ma),
      0 <
        $('.testimonial_slider[data-style="multiple_visible_minimal"]')
          .length && g.on("resize.nectarTestimonialsMin", va);
  }
  function ma() {
    for (var t = 0; t < U.length; t++)
      U[t].testimonialSliderHeight(), U[t].testimonialHeightResize();
  }
  function va() {
    for (var t = 0; t < U.length; t++)
      U[t].testimonialSliderHeightMinimalMult();
  }
  function ba(t) {
    return 0 < t.parents('.wpb_column[data-bg-color*="#"]').length &&
      0 < t.parents('.wpb_column[data-bg-opacity="1"]').length
      ? t.parents(".wpb_column").attr("data-bg-color")
      : ((0 < t.parents(".wpb_row").length &&
          0 < t.parents(".wpb_row").find(".row-bg.using-bg-color").length) ||
        (0 < t.parents(".wpb_row").length &&
          0 <
            t.parents(".wpb_row").find(".row-bg.using-bg-color-excluded")
              .length)
          ? t.parents(".wpb_row").find(".row-bg")
          : 0 < $("#nectar_fullscreen_rows").length
          ? $("#nectar_fullscreen_rows > .wpb_row .full-page-inner-wrap")
          : $(".container-wrap")
        ).css("background-color");
  }
  function wa() {
    var a = "";
    $(
      '.nectar-icon-list[data-icon-style="border"], .nectar_icon_wrap[data-style="border-animation"][data-color*="extra-color-gradient-"]'
    ).each(function (t) {
      var e = ba($(this));
      $(this).hasClass("nectar-icon-list")
        ? $(this).find(".list-icon-holder").css("background-color", e)
        : ($(this).removeClass(function (t, e) {
            return (e.match(/(^|\s)instance-\S+/g) || []).join(" ");
          }),
          $(this).addClass("instance-" + t),
          (a +=
            ".nectar_icon_wrap.instance-" +
            t +
            " .nectar_icon:before { background-color: " +
            e +
            "!important; }"));
    }),
      $(
        'body.material .nectar-button.see-through[class*="m-extra-color-gradient"]'
      ).each(function (t) {
        var e = ba($(this));
        $(this).removeClass(function (t, e) {
          return (e.match(/(^|\s)instance-\S+/g) || []).join(" ");
        }),
          $(this).addClass("instance-" + t),
          (a +=
            ".nectar-button.see-through.instance-" +
            t +
            ":after { background-color: " +
            e +
            "!important; }");
      }),
      ie(a, "nectaricon-color-match");
  }
  function ya() {
    $(".col.span_3, .vc_span3, .vc_col-sm-3").each(function () {
      var t, e;
      $(this).is('[data-t-w-inherits="small_desktop"]') ||
        ((t = $(this)),
        (((e = $(this).next("div")).hasClass("span_3") &&
          !t.hasClass("one-fourths")) ||
          (e.hasClass("vc_span3") && !t.hasClass("one-fourths")) ||
          (e.hasClass("vc_col-sm-3") && !t.hasClass("one-fourths"))) &&
          (t.addClass("one-fourths clear-both"),
          e.addClass("one-fourths right-edge")));
    }),
      $(".span_12 .col.span_6").each(function () {
        $(this).next("div").hasClass("span_6") &&
          0 == $.trim($(this).next("div").html()).length &&
          $(this).addClass("empty-second");
      });
  }
  function _a() {
    $("iframe").each(function () {
      if (
        void 0 !== $(this).attr("src") &&
        !$(this).hasClass("skip-nectar-video-size") &&
        !$(this).hasClass("iframe-embed") &&
        !$(this).hasClass("elementor-video-iframe") &&
        0 == $(this).parents(".gform_fields").length &&
        0 == $(this).parents(".ult_modal").length &&
        0 == $(this).parents(".ls-slide").length &&
        0 == $(this).parents(".woo-variation-product-gallery").length &&
        0 == $(this).parents(".esg-entry-media").length &&
        0 == $(this).parents(".wpb_video_widget.wpb_content_element").length
      ) {
        if (
          0 < $(this).parents(".woocommerce-product-gallery").length &&
          (!$(this).is('[width="100%"]') || !$(this).is('[height="100%"]'))
        )
          return !0;
        var t = $(this).attr("src").toLowerCase();
        (0 <= t.indexOf("youtube") ||
          0 <= t.indexOf("vimeo") ||
          0 <= t.indexOf("twitch.tv") ||
          0 <= t.indexOf("kickstarter") ||
          0 <= t.indexOf("embed-ssl.ted") ||
          0 <= t.indexOf("dailymotion")) &&
          ($(this).addClass("iframe-embed"),
          ($(this).width() < $(this).parent().width()
            ? $(this).attr(
                "data-aspectRatio",
                $(this).height() / $(this).width()
              )
            : $(this).attr("data-aspectRatio", "0.56")
          )
            .removeAttr("height")
            .removeAttr("width"),
          0 < $(this).parents(".post-area.masonry.classic").length &&
            $(this)
              .attr("data-aspectRatio", "0.56")
              .removeAttr("height")
              .removeAttr("width"));
      }
    });
  }
  function Ca() {
    $("iframe[data-aspectRatio]").each(function () {
      var t = $(this),
        e = t.parent().width();
      (0 < $(this).parents(".swiper-slide").length &&
        !$(this).is(":visible")) ||
        t.width(e).height(e * t.attr("data-aspectRatio"));
    });
  }
  function xa() {
    $(".video-wrap iframe").unwrap(),
      $("#sidebar iframe[src]").unwrap(),
      $("audio")
        .attr("width", "100%")
        .attr("height", "100%")
        .css("visibility", "visible"),
      $("video").css("visibility", "visible"),
      $(".wp-video").each(function () {
        $(this)
          .find("video")
          .get(0)
          .addEventListener(
            "loadeddata",
            function () {
              g.trigger("resize");
            },
            !1
          );
      }),
      $(".main-content iframe[src]").each(function () {
        $(this).css({ opacity: "1", visibility: "visible" });
      });
  }
  function ka() {
    var i = 1200;
    $(".nectar-video-wrap").each(function () {
      if (
        (c && 0 < $(this).parents(".top-level").length) ||
        (c && 0 < $(this).parents(".nectar_hook_404_content").length)
      )
        return !0;
      var t, e, a, t, e, n;
      if (0 != $(this).find("video").length) {
        if (0 < $(this).parents("#page-header-bg").length) {
          if (0 < $(".container-wrap.auto-height").length) return !1;
          (t = $(this).parents("#page-header-bg").outerHeight()),
            (e = $(this).parents("#page-header-bg").outerWidth());
        } else {
          e = $(this).hasClass("column-video")
            ? E.is('[data-flex-cols="true"]')
              ? ((t = (a = $(this).parents(".vc_column-inner")).outerHeight()),
                a.outerWidth())
              : ((t = $(this).parents(".wpb_column").outerHeight()),
                $(this).parents(".wpb_column").outerWidth())
            : ((t = (n = $(this).parents(".wpb_row")).outerHeight()),
              0 < $(this).parents(".full-width-section").length
                ? gt.winW
                : n.outerWidth());
        }
        $(this).width(e),
          0 < $(this).parents("#page-header-bg").length && $(this).height(t);
        var a = e / 1280,
          n = (t - t) / 720,
          n = n < a ? a : n;
        1280 * n < (i = (1280 / 720) * (t + 40)) && (n = i / 1280),
          $(this)
            .find("video, .mejs-overlay, .mejs-poster")
            .width(Math.ceil(1280 * n + 0)),
          $(this)
            .find("video, .mejs-overlay, .mejs-poster")
            .height(Math.ceil(720 * n + 0)),
          $(this).scrollLeft(($(this).find("video").width() - e) / 2),
          $(this).scrollTop(($(this).find("video").height() - t) / 2),
          $(this)
            .find(".mejs-overlay, .mejs-poster")
            .scrollTop(($(this).find("video").height() - t) / 2),
          "center bottom" == $(this).attr("data-bg-alignment") ||
          "bottom" == $(this).attr("data-bg-alignment")
            ? $(this).scrollTop($(this).find("video").height() - (t + 6))
            : ("center top" != $(this).attr("data-bg-alignment") &&
                "top" != $(this).attr("data-bg-alignment")) ||
              $(this).scrollTop(0),
          $(this).addClass("position-loaded");
      }
    });
  }
  function $a() {
    function r(t) {
      var e,
        a,
        n,
        i,
        s = t.innerWidth(),
        r = t.innerHeight();
      s / r < 16 / 9
        ? ((e = r * (16 / 9)),
          (a = r),
          (n = -Math.round((e - s) / 2) + "px"),
          (i = -Math.round((a - r) / 2) + "px"))
        : ((a = (e = s) * (9 / 16)),
          (i = -Math.round((a - r) / 2) + "px"),
          (n = -Math.round((e - s) / 2) + "px")),
        (e += "px"),
        (a += "px"),
        t
          .find(".vc_video-bg iframe")
          .css({
            maxWidth: "1000%",
            marginLeft: n,
            marginTop: i,
            width: e,
            height: a,
          });
    }
    (0 == $(".nectar-video-wrap").length &&
      0 == $(".nectar-youtube-bg").length) ||
      (setTimeout(function () {
        ka(),
          g.on("resize", ka),
          T.addEventListener("orientationchange", function () {
            this.setTimeout(function () {
              ka();
            }, 100);
          }),
          $(".video-color-overlay").each(function () {
            $(this).css("background-color", $(this).attr("data-color"));
          }),
          $(".nectar-video-wrap").each(function () {
            var t, e, a;
            0 != $(this).find("video").length &&
              ((t = 0 < $(this).parents("#page-header-bg").length),
              (e = $(this)),
              0 === $(this).find("video.nectar-lazy-video").length &&
                (a = setInterval(function () {
                  3 < e.find("video").get(0).readyState &&
                    (gt.usingMobileBrowser ||
                      (e.transition({ opacity: "1" }, 400),
                      e.find("video").transition({ opacity: "1" }, 400),
                      e
                        .parent()
                        .find(".video-color-overlay")
                        .transition({ opacity: "0.7" }, 400),
                      1 == t && Za()),
                    n.addClass("loaded"),
                    setTimeout(function () {
                      n.addClass("hidden");
                    }, 1e3),
                    clearInterval(a));
                }, 60)),
              gt.usingMobileBrowser &&
                (0 < e.parents(".full-width-section").length &&
                0 == e.parents("#nectar_fullscreen_rows").length &&
                !e.hasClass("column-video")
                  ? e.css("left", "50%")
                  : e.css("left", "0px"),
                1 == t && Za(),
                (e.find("video")[0].onplay = function () {
                  e.transition({ opacity: "1" }, 400),
                    e.find("video").transition({ opacity: "1" }, 400),
                    e
                      .parent()
                      .find(".video-color-overlay")
                      .transition({ opacity: "0.7" }, 400);
                })));
          });
      }, 300),
      gt.usingMobileBrowser &&
        $(".nectar-video-wrap").each(function () {
          $(this).find("video").is("[muted]") ||
            ($(this).parent().find(".mobile-video-image").show(),
            $(this).remove());
        }),
      $('.wpb_row:has(".nectar-video-wrap"):not(.fp-section)').each(function (
        t
      ) {
        $(this).css("z-index", 100 + t);
      }),
      $(".vc_row").each(function () {
        var t,
          e = jQuery(this);
        0 < e.find(".nectar-youtube-bg").length
          ? (t = (function (t) {
              if (void 0 === t) return !1;
              var t = t.match(
                /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
              );
              return null !== t && t[1];
            })(e.find(".nectar-youtube-bg span").text())) &&
            (e.find(".vc_video-bg").remove(),
            (function t(e, a, n) {
              if ("undefined" == typeof YT || void 0 === YT.Player)
                return 100 < (n = void 0 === n ? 0 : n)
                  ? void console.warn("Too many attempts to load YouTube api")
                  : void setTimeout(function () {
                      t(e, a, n++);
                    }, 100);
              var i = e
                  .prepend(
                    '<div class="vc_video-bg"><div class="inner"></div></div>'
                  )
                  .find(".inner"),
                s,
                s = new YT.Player(i[0], {
                  width: "100%",
                  height: "100%",
                  videoId: a,
                  playerVars: {
                    playlist: a,
                    iv_load_policy: 3,
                    enablejsapi: 1,
                    disablekb: 1,
                    autoplay: 1,
                    controls: 0,
                    showinfo: 0,
                    rel: 0,
                    loop: 1,
                  },
                  events: {
                    onStateChange: function (t) {
                      -1 === t.data && (s.mute(), s.playVideo());
                    },
                    onReady: function (t) {
                      s.mute(), s.playVideo(), r(e);
                    },
                  },
                });
              r(e),
                jQuery(T).on("resize", function () {
                  r(e);
                }),
                setTimeout(function () {
                  r(e);
                }, 100);
            })(e.find(".nectar-youtube-bg"), t))
          : e.find(".nectar-youtube-bg").remove(),
          e.find(".nectar-youtube-bg span").remove(),
          gt.usingMobileBrowser ||
            e
              .find(".nectar-video-wrap, .nectar-youtube-bg")
              .css({ opacity: "1", width: "100%", height: "100%" }),
          e.find(".video-color-overlay").transition({ opacity: "0.7" }, 400);
      }));
  }
  function Ta() {
    var e;
    E.hasClass("single-post") &&
      0 < $(".content-inner[data-has-gallery]").length &&
      (0 < $(".wp-block-gallery").length
        ? $(".content-inner")
            .find(".wp-block-gallery")
            .each(function (t) {
              0 !== t && $(this).css("display", "flex");
            })
        : $(".content-inner")
            .find(".gallery")
            .each(function (t) {
              0 !== t && $(this).css("display", "block");
            })),
      E.hasClass("single-post") &&
        0 < $(".nectar-social.vertical").length &&
        ((e = $(".nectar-social.vertical")),
        new Waypoint({
          element: $(".post-area")[0],
          handler: function (t) {
            ft.materialOffCanvasOpen ||
              ("down" === t ? e.addClass("visible") : e.removeClass("visible"));
          },
          offset: "70%",
        }));
  }
  function Ia() {
    var t, e, a, n, i, s, t;
    0 <
      $(
        'body.material[data-slide-out-widget-area-style="slide-out-from-right"]'
      ).length &&
      (Oa(), 0 < l.length) &&
      ((t = l.detach()), $(".ocm-effect-wrap-inner").append(t)),
      0 < $("body.material").length &&
        0 ==
          $(
            'body[data-slide-out-widget-area-style="slide-out-from-right-hover"]'
          ).length &&
        (0 == $("#mobile-menu").length &&
          ((t = $(
            "header#top ul .slide-out-widget-area-toggle:first a > span > i"
          ).clone()).addClass("hover-effect"),
          $("header#top ul .slide-out-widget-area-toggle a > span").append(t),
          (t = $(
            "header#top .slide-out-widget-area-toggle.mobile-icon a > span > i"
          ).clone()).addClass("hover-effect"),
          $(
            "header#top .slide-out-widget-area-toggle.mobile-icon a > span"
          ).append(t)),
        $(
          'body:not([data-slide-out-widget-area-style="slide-out-from-right"]) header#top .slide-out-widget-area-toggle a > span'
        ).append(
          $(
            '<span class="close-wrap"> <span class="close-line close-line1"></span> <span class="close-line close-line2"></span> </span>'
          )
        ),
        setTimeout(function () {
          $(
            "header#top .slide-out-widget-area-toggle a > span .close-wrap"
          ).addClass("loaded");
        }, 200)),
      0 < $("body.material #boxed").length &&
        0 <
          $(
            'body[data-slide-out-widget-area-style="slide-out-from-right-hover"]'
          ).length &&
        0 < $(".ocm-effect-wrap").length &&
        $(
          "#ajax-content-wrap > .slide-out-widget-area-toggle.slide-out-hover-icon-effect"
        ).insertAfter(".ocm-effect-wrap"),
      0 < $("body.material").length &&
        0 == $('body[data-slide-out-widget-area-style*="fullscreen"]').length &&
        0 < $(".ocm-effect-wrap").length &&
        ($(
          "body.material #slide-out-widget-area.slide-out-from-right .slide_out_area_close"
        ).insertAfter(".ocm-effect-wrap"),
        $("#slide-out-widget-area-bg").insertAfter(".ocm-effect-wrap"),
        h.insertAfter(".ocm-effect-wrap")),
      (0 < $('body.material[data-header-search="true"]').length ||
        0 < $("body.material .ocm-effect-wrap").length) &&
        ((a = !1),
        (n = 0),
        (i = gt.winW),
        (s = gt.winH),
        T.addEventListener("orientationchange", function () {
          n = 1;
        }),
        g.on("resize", function () {
          gt.usingMobileBrowser
            ? ((g.width() != i && g.height != s) || 1 === n) &&
              ((i = gt.winW), (s = gt.winH), (a = !(n = 0)))
            : (a = !0),
            a &&
              (clearTimeout(e),
              $(
                'body[data-slide-out-widget-area-style="slide-out-from-right"] > a.slide_out_area_close, .material #header-outer, .ocm-effect-wrap, .ocm-effect-wrap-shadow'
              ).addClass("no-material-transition"),
              (e = setTimeout(function () {
                $(
                  'body[data-slide-out-widget-area-style="slide-out-from-right"] > a.slide_out_area_close, .material #header-outer, .ocm-effect-wrap, .ocm-effect-wrap-shadow'
                ).removeClass("no-material-transition");
              }, 250)),
              Oa(),
              (a = !1));
        })),
      g.on("resize", za);
  }
  function Ea() {
    var t,
      e = 0;
    $("#slide-out-widget-area > .widget").each(function () {
      e += $(this).height();
    }),
      (t =
        h.height() - 25 - $(".bottom-meta-wrap").outerHeight(!0) - e >
        $(
          "#slide-out-widget-area .off-canvas-menu-container:last-child"
        ).height()
          ? h.height() - 25 - $(".bottom-meta-wrap").outerHeight(!0) - e
          : $(
              "#slide-out-widget-area .off-canvas-menu-container:last-child"
            ).height()),
      $("#slide-out-widget-area .inner").css({
        height: "auto",
        "min-height": t,
      });
  }
  function Oa() {
    $("#slide-out-widget-area.slide-out-from-right").css({
      "padding-top": 0.1 * g.height(),
      "padding-bottom": 0.1 * g.height(),
    }),
      Aa();
  }
  function za() {
    0 < $(".ocm-effect-wrap.material-ocm-open").length &&
      ($(".ocm-effect-wrap").css({ height: g.height() }),
      $(".ocm-effect-wrap-inner").css({ "padding-top": gt.adminBarHeight }));
  }
  function Ha() {
    $(
      '#slide-out-widget-area[class*="slide-out-from-right"] .off-canvas-menu-container li.menu-item-has-children'
    ).each(function () {
      $(this)
        .find(".ocm-dropdown-arrow")
        .css({ top: $(this).find("a").height() / 2 });
    }),
      $(
        "#slide-out-widget-area.fullscreen-split .off-canvas-menu-container li.menu-item-has-children"
      ).each(function () {
        $(this)
          .find(".ocm-dropdown-arrow")
          .css({ top: $(this).find("a").height() / 2 });
      });
  }
  function Sa() {
    T.nectarOptions &&
      T.nectarOptions.ocm_remove_ext_menu_items &&
      "remove_images" == T.nectarOptions.ocm_remove_ext_menu_items &&
      !1 === ft.ocmInit &&
      ($(
        '.off-canvas-menu-container .title[class*="inherit-h"], #mobile-menu .title[class*="inherit-h"]'
      ).removeClass(function (t, e) {
        return (e.match(/(^|\s)inherit-h\S+/g) || []).join(" ");
      }),
      $(
        ".off-canvas-menu-container .nectar-ext-menu-item .image-layer-outer, #mobile-menu .nectar-ext-menu-item .image-layer-outer"
      ).remove(),
      $(".off-canvas-menu-container .nectar-ext-menu-item .menu-item-desc")
        .removeClass("menu-item-desc")
        .addClass("item_desc"),
      $(
        ".off-canvas-menu-container .nectar-ext-menu-item .inner-content > .title"
      ).each(function () {
        0 == $(this).find(".menu-title-text").length &&
          $(this).removeClass("title").addClass("menu-title-text");
      }),
      $(".off-canvas-menu-container .item_desc").each(function () {
        "none" !== $(this).css("display") &&
          $(this)
            .parents(".menu-item")
            .addClass("nectar-extra-menu-item-spacing");
      }),
      Ha(),
      (ft.ocmInit = !0));
  }
  function Aa() {
    gt.winW < 1e3 ||
    0 < $("body > #boxed").length ||
    0 < $(".ocm-effect-wrap-inner > #boxed").length
      ? ($(
          "#slide-out-widget-area.fullscreen .off-canvas-social-links, #slide-out-widget-area.fullscreen-alt .off-canvas-social-links"
        ).appendTo("#slide-out-widget-area .inner"),
        $(
          "#slide-out-widget-area.fullscreen .bottom-text, #slide-out-widget-area.fullscreen-alt .bottom-text"
        ).appendTo("#slide-out-widget-area .inner"))
      : ($(
          "#slide-out-widget-area.fullscreen .off-canvas-social-links,#slide-out-widget-area.fullscreen-alt .off-canvas-social-links"
        ).appendTo("#slide-out-widget-area .inner-wrap"),
        $(
          "#slide-out-widget-area.fullscreen .bottom-text, #slide-out-widget-area.fullscreen-alt .bottom-text"
        ).appendTo("#slide-out-widget-area .inner-wrap")),
      0 <
        $(".slide-out-from-right.open .off-canvas-menu-container.mobile-only")
          .length &&
        0 == $("body.mobile").length &&
        $("#slide-out-widget-area .slide_out_area_close").trigger("click"),
      Ha();
  }
  function Ma() {
    if (
      (Ea(),
      (gt.usingMobileBrowser && 0 < $("#slide-out-widget-area.open").length) ||
        (0 < $(".slide-out-from-right-hover.ios-ocm-style").length &&
          0 < $("#slide-out-widget-area.open").length))
    )
      return Ba(), !1;
    (gt.usingMobileBrowser ||
      0 < $(".slide-out-from-right-hover.ios-ocm-style").length) &&
      ($(".slide-out-widget-area-toggle a").attr("aria-expanded", "true"),
      s.css({ height: "100%", width: "100%" })),
      h.css({ transform: "translate3d(0,0,0)" }).addClass("open"),
      Sa(),
      0 < $(".slide-out-from-right-hover.ios-ocm-style").length &&
        setTimeout(function () {
          $("#slide-out-widget-area .slide_out_area_close").addClass(
            "material-ocm-open"
          ),
            $("#slide-out-widget-area .slide_out_area_close").removeClass(
              "hide_until_rendered"
            );
        }, 350);
    var t = Ut();
    gt.winW < 1e3 && (t = !0);
    var e =
        T.nectarOptions &&
        T.nectarOptions.mobile_header_format &&
        "centered-menu" === T.nectarOptions.mobile_header_format &&
        t
          ? "left"
          : "right",
      a,
      n,
      i,
      t,
      e;
    if (
      (0 <
        $("header#top .container .span_9 > .slide-out-widget-area-toggle")
          .length &&
        ((n = $(".slide-out-hover-icon-effect")),
        (i = gt.secondaryHeaderHeight),
        (t = Ut()),
        0 < $('#header-outer[data-format="centered-menu-bottom-bar"]').length &&
          (t = !1),
        0 < $("body.mobile").length || t || "left" === M
          ? (n.css({
              top:
                $(
                  "header#top .span_9 > .slide-out-widget-area-toggle a"
                ).offset().top - gt.scrollTop,
            }),
            "left" == e || "left" === M
              ? n.css({
                  left:
                    parseInt(
                      $("#header-outer header > .container").css(
                        "padding-right"
                      )
                    ) + 1,
                  right: "",
                })
              : n.css({
                  right:
                    parseInt(
                      $("#header-outer header > .container").css(
                        "padding-right"
                      )
                    ) + 1,
                  left: "",
                }))
          : ct
          ? ((e = 0 < $('#header-outer[data-has-menu="false"]').length ? 2 : 1),
            n.css({
              top:
                gt.adminBarHeight +
                i +
                parseInt(
                  $("header#top nav >ul .slide-out-widget-area-toggle a").css(
                    "padding-top"
                  )
                ),
              right: 29 + e,
            }))
          : 0 <
            $('#header-outer[data-format="centered-menu-bottom-bar"]').length
          ? ((a = (
              "flex" ==
              $("header#top .span_9 > .slide-out-widget-area-toggle").css(
                "display"
              )
                ? $(
                    "header#top .span_9 > .slide-out-widget-area-toggle.mobile-icon a"
                  )
                : $(
                    "header#top .span_3 .right-side .slide-out-widget-area-toggle > div"
                  )
            ).offset()),
            "flex" ==
              $("#top .span_3 .slide-out-widget-area-toggle.mobile-icon").css(
                "display"
              ) &&
              (a = $(
                "#top .span_3 .slide-out-widget-area-toggle.mobile-icon a"
              ).offset()),
            n.css({
              top: parseInt(a.top) - gt.scrollTop,
              right:
                parseInt(
                  $("#header-outer header >.container").css("padding-right")
                ) + 2,
              left: "",
            }))
          : ((a = (
              E.hasClass("ascend")
                ? "block" ==
                  $("header#top .span_9 > .slide-out-widget-area-toggle").css(
                    "display"
                  )
                  ? $(
                      "header#top .span_9 > .slide-out-widget-area-toggle.mobile-icon"
                    )
                  : $(
                      "header#top nav .buttons .slide-out-widget-area-toggle > div a > span:not(.screen-reader-text)"
                    )
                : "block" ==
                  $("header#top .span_9 > .slide-out-widget-area-toggle").css(
                    "display"
                  )
                ? $(
                    "header#top .span_9 > .slide-out-widget-area-toggle.mobile-icon"
                  )
                : $(
                    "header#top nav .buttons .slide-out-widget-area-toggle > div"
                  )
            ).position()),
            0 < $("#header-secondary-outer.hide-up").length && (i = 0),
            n.css({
              top: gt.adminBarHeight + i + parseInt(a.top),
              right:
                parseInt(
                  $("#header-outer header >.container").css("padding-right")
                ) + 2,
              left: "",
            }))),
      $(".slide-out-hover-icon-effect .lines-button")
        .removeClass("no-delay")
        .addClass("unhidden-line"),
      0 == $('#header-outer[data-permanent-transparent="1"]').length &&
        0 == $("#nectar_fullscreen_rows").length &&
        !gt.usingFrontEndEditor &&
        1e3 < gt.winW &&
        ((0 == gt.scrollTop && 0 < $("#header-outer.transparent").length) ||
          (0 == $("body.mobile").length &&
            ct &&
            (u
              .attr("data-transparent", "true")
              .addClass("no-bg-color")
              .addClass("slide-out-hover"),
            $("#header-outer header, #header-outer > .cart-outer").addClass(
              "all-hidden"
            ))),
        0 == $('#header-outer[data-remove-fixed="1"]').length &&
          0 == $("body.mobile").length &&
          ct &&
          (1 == _
            ? (g.off("scroll", fn), g.off("scroll", gn))
            : (g.off("scroll", mn), g.off("scroll", vn)))),
      gt.usingMobileBrowser)
    )
      return !1;
    g.on("mousemove.rightOffsetCheck", Wa);
  }
  function Wa(t) {
    var e = g.width(),
      a = h.outerWidth(),
      n = Ut();
    gt.winW < 1e3 && (n = !0),
      ("left" !=
        (T.nectarOptions &&
        T.nectarOptions.mobile_header_format &&
        "centered-menu" === T.nectarOptions.mobile_header_format &&
        n
          ? "left"
          : "right") && "left" !== M
        ? t.clientX < e - parseInt(a) - v
        : t.clientX > parseInt(a) + v) &&
        h.hasClass("mouse-accessed") &&
        (h.removeClass("mouse-accessed"),
        g.off("mousemove.rightOffsetCheck", Wa),
        h.css({ transform: "" }).removeClass("open"),
        u.removeClass("style-slide-out-from-right"),
        $(".slide-out-hover-icon-effect .lines-button")
          .removeClass("unhidden-line")
          .addClass("no-delay"),
        0 == $('#header-outer[data-permanent-transparent="1"]').length &&
          (0 == $('#header-outer[data-remove-fixed="1"]').length &&
            0 == $("body.mobile").length &&
            ct &&
            0 == $("body.mobile").length &&
            (u.removeClass("no-bg-color"),
            $("#header-outer header, #header-outer > .cart-outer").removeClass(
              "all-hidden"
            )),
          0 == $('#header-outer[data-remove-fixed="1"]').length &&
            0 == $("body.mobile").length &&
            ct &&
            (1 == _
              ? (g.off("scroll.headerResizeEffect"),
                0 == gt.scrollTop
                  ? (g.on("scroll.headerResizeEffect", gn),
                    0 <
                      $(
                        '#header-outer[data-full-width="true"][data-transparent-header="true"]'
                      ).length &&
                      0 < m.length &&
                      1 == ct &&
                      0 < $("#header-outer.pseudo-data-transparent").length &&
                      $(
                        '#header-outer[data-full-width="true"] header > .container'
                      )
                        .stop(!0, !0)
                        .animate(
                          { padding: "0" },
                          { queue: !1, duration: 250, easing: "easeOutCubic" }
                        ))
                  : g.on("scroll.headerResizeEffect", fn))
              : (g.off("scroll.headerResizeEffectOpaque"),
                g.on("scroll.headerResizeEffectOpaque", mn)))));
  }
  function Ba() {
    (gt.usingMobileBrowser ||
      0 < $(".slide-out-from-right-hover.ios-ocm-style").length) &&
      ($(".slide-out-widget-area-toggle a").attr("aria-expanded", "false"),
      s.css({ height: "1px", width: "1px" })),
      0 < $(".slide-out-from-right-hover.ios-ocm-style").length &&
        $("#slide-out-widget-area .slide_out_area_close").removeClass(
          "material-ocm-open"
        ),
      h.css({ transform: "" }).removeClass("open"),
      u.removeClass("style-slide-out-from-right"),
      $(".slide-out-hover-icon-effect .lines-button")
        .removeClass("unhidden-line")
        .addClass("no-delay"),
      0 == $('#header-outer[data-permanent-transparent="1"]').length &&
        (u.removeClass("no-bg-color"),
        $("#header-outer header").removeClass("all-hidden")),
      0 == $('#header-outer[data-remove-fixed="1"]').length &&
        0 == $("body.mobile").length &&
        ct &&
        (1 == _
          ? (g.off("scroll.headerResizeEffect"),
            0 == gt.scrollTop
              ? (g.on("scroll.headerResizeEffect", gn),
                0 <
                  $(
                    '#header-outer[data-full-width="true"][data-transparent-header="true"]'
                  ).length &&
                  0 < m.length &&
                  1 == ct &&
                  0 < $("#header-outer.pseudo-data-transparent").length &&
                  $('#header-outer[data-full-width="true"] header > .container')
                    .stop(!0, !0)
                    .animate(
                      { padding: "0" },
                      { queue: !1, duration: 250, easing: "easeOutCubic" }
                    ))
              : g.on("scroll.headerResizeEffect", fn))
          : (g.off("scroll.headerResizeEffectOpaque"),
            g.on("scroll.headerResizeEffectOpaque", mn)));
  }
  function Fa() {
    0 < $(".slide-out-from-right-hover.open").length &&
      ($(".slide-out-widget-area-toggle:not(.std-menu) a")
        .first()
        .addClass("non-human-allowed")
        .trigger("click"),
      setTimeout(function () {
        $(".slide-out-widget-area-toggle:not(.std-menu) a").removeClass(
          "non-human-allowed"
        );
      }, 100));
  }
  function La(t) {
    $("#mobile-menu").show(),
      $("header#top")
        .find("." + t + ":not(.std-menu) .lines-button")
        .addClass("close"),
      $("#header-outer").addClass("simple-ocm-open"),
      0 < $("body.material").length &&
        $("header#top")
          .find("." + t + " a")
          .addClass("menu-push-out"),
      setTimeout(function () {
        $("header#top")
          .find("." + t + " > div > a")
          .removeClass("animating");
      }, 100);
  }
  function qa(t) {
    $("#mobile-menu").hide(),
      $("body")
        .find("." + t + ":not(.std-menu) .lines-button")
        .removeClass("close"),
      $("#header-outer").removeClass("simple-ocm-open"),
      setTimeout(function () {
        0 < $("body.material").length &&
          $("header#top ." + t + " a").removeClass("menu-push-out"),
          $("body")
            .find("." + t + " a")
            .removeClass("animating");
      }, 350);
  }
  function ja() {
    var t, t;
    E.on(
      "click",
      ".slide-out-widget-area-toggle:not(.std-menu) a.closed.animating",
      function () {
        return !1;
      }
    ),
      E.on(
        "click",
        ".slide-out-widget-area-toggle:not(.std-menu) a.closed:not(.animating), .nectar-ocm-trigger-open",
        function () {
          if (
            ft.ocmAnimating ||
            "true" == ut.animating ||
            0 < $(".slide-out-from-right-hover").length
          )
            return !1;
          var t = 700;
          return (
            (ft.ocmOpen = !0),
            Sa(),
            u.removeClass("no-transition"),
            $(this).hasClass("simple-mobile-menu")
              ? (La("simple-mobile-menu"), $(this).find("a").addClass("open"))
              : (h.hasClass("slide-out-from-right")
                  ? (function () {
                      var t =
                          0 < m.length && 0 == $("body.mobile").length
                            ? m.height()
                            : 0,
                        e = Ut();
                      gt.winW < 1e3 && (e = !0);
                      var a =
                          T.nectarOptions &&
                          T.nectarOptions.mobile_header_format &&
                          "centered-menu" ===
                            T.nectarOptions.mobile_header_format &&
                          e
                            ? "left"
                            : "right",
                        e,
                        t;
                      0 == $("body.material").length
                        ? ($("#slide-out-widget-area .inner").css({
                            height: "auto",
                            "min-height":
                              h.height() - 25 - $(".bottom-meta-wrap").height(),
                          }),
                          0 <
                            $(
                              '#slide-out-widget-area[data-dropdown-func="separate-dropdown-parent-link"] .inner > div:first-of-type > .menu > li:first-child'
                            ).length &&
                            $(
                              "#slide-out-widget-area .inner > div:first-of-type > .menu > li:first-child"
                            ).hasClass("menu-item-has-children") &&
                            $(
                              "#slide-out-widget-area .inner > div:first-of-type"
                            ).css({ "margin-top": "50px" }),
                          0 == $("#boxed").length &&
                            ($(
                              ".container-wrap, .home-wrap, #footer-outer:not(#nectar_fullscreen_rows #footer-outer), .nectar-box-roll, #page-header-wrap .page-header-bg-image, #page-header-wrap .nectar-video-wrap, #page-header-wrap .mobile-video-image, #page-header-wrap #page-header-bg > .container, .page-header-no-bg, div:not(.container) > .project-title"
                            )
                              .stop(!0)
                              .transition(
                                {
                                  x:
                                    "left" == a || "left" === M
                                      ? "300px"
                                      : "-300px",
                                },
                                700,
                                "easeInOutCubic"
                              ),
                            (e = Ut()),
                            0 ==
                              $(
                                '#header-outer[data-format="centered-logo-between-menu"]'
                              ).length || e
                              ? 0 ==
                                  $(
                                    '#header-outer[data-transparency-option="1"]'
                                  ).length ||
                                (0 <
                                  $(
                                    '#header-outer[data-transparency-option="1"]'
                                  ).length &&
                                  0 ==
                                    $('#header-outer[data-full-width="true"]')
                                      .length) ||
                                0 < $("body.mobile").length
                                ? u
                                    .stop(!0)
                                    .css("transform", "translateY(0)")
                                    .transition(
                                      {
                                        x:
                                          "left" == a || "left" === M
                                            ? 300 + t + "px"
                                            : "-" + (300 + t) + "px",
                                      },
                                      700,
                                      "easeInOutCubic"
                                    )
                                : u
                                    .stop(!0)
                                    .css("transform", "translateY(0)")
                                    .transition(
                                      {
                                        x:
                                          "left" == a || "left" === M
                                            ? 300 + t + "px"
                                            : "-" + (300 + t) + "px",
                                        "background-color": "transparent",
                                        "border-bottom":
                                          "1px solid rgba(255,255,255,0.22)",
                                      },
                                      700,
                                      "easeInOutCubic"
                                    )
                              : $(
                                  '#header-outer header#top nav > ul.buttons, body:not(.material) #header-outer:not([data-format="centered-logo-between-menu"]) .cart-outer .cart-menu-wrap'
                                ).transition(
                                  {
                                    x:
                                      "left" == a || "left" === M
                                        ? "300px"
                                        : "-300px",
                                  },
                                  700,
                                  "easeInOutCubic"
                                )),
                          h
                            .stop(!0)
                            .transition(
                              {
                                x:
                                  "left" == a || "left" === M
                                    ? t + "px"
                                    : "-" + t + "px",
                              },
                              700,
                              "easeInOutCubic"
                            )
                            .addClass("open"),
                          0 == $("#boxed").length &&
                            0 <
                              $('#header-outer[data-full-width="true"]')
                                .length &&
                            !E.hasClass("mobile") &&
                            (u.addClass("highzI"),
                            $("#ascrail2000").addClass("z-index-adj"),
                            0 ==
                              $(
                                '#header-outer[data-format="centered-logo-between-menu"]'
                              ).length &&
                              0 == v &&
                              ("left" === M ||
                                $("header#top #logo")
                                  .stop(!0)
                                  .transition(
                                    { x: 300 + t + "px" },
                                    700,
                                    "easeInOutCubic"
                                  )),
                            $(
                              "header#top .slide-out-widget-area-toggle .lines-button:not(.legacy-double)"
                            ).addClass("close"),
                            $("body #header-outer nav > ul > li > a").css({
                              "margin-bottom": "0",
                            })),
                          u.addClass("style-slide-out-from-right"),
                          s
                            .css({ height: "100%", width: "100%" })
                            .stop(!0)
                            .transition(
                              { opacity: 1 },
                              700,
                              "easeInOutCubic",
                              function () {
                                $(
                                  ".slide-out-widget-area-toggle:not(.std-menu) > div > a"
                                ).removeClass("animating");
                              }
                            ),
                          0 ==
                          $(
                            '#header-outer[data-format="centered-logo-between-menu"]'
                          ).length
                            ? ((t = (
                                0 < $("#logo img:visible").length
                                  ? $("#logo img:visible")
                                  : $("#logo")
                              ).width()),
                              $("header#top nav > .sf-menu").offset().left -
                                t -
                                300 <
                                20 && u.addClass("hidden-menu"))
                            : u.addClass("hidden-menu-items"),
                          0 ==
                            $('#header-outer[data-remove-fixed="1"]').length &&
                            1e3 < gt.winW &&
                            (1 == ct &&
                            1 == _ &&
                            "true" == u.attr("data-transparent-header")
                              ? (u
                                  .stop(!0)
                                  .transition({ y: "0" }, 0)
                                  .addClass("transparent")
                                  .css("transition", "transform"),
                                g.off("scroll", fn),
                                g.off("scroll", gn))
                              : 1 == ct &&
                                "true" == u.attr("data-transparent-header") &&
                                (u.addClass("transparent"),
                                g.off("scroll", mn),
                                g.off("scroll", vn))))
                        : 0 < $("body.material").length &&
                          (0 < n.length &&
                            0 <
                              $(".ocm-effect-wrap #ajax-loading-screen")
                                .length &&
                            n.insertBefore(".ocm-effect-wrap"),
                          40 < gt.scrollTop &&
                            $(
                              'body[data-hhun="1"] #header-secondary-outer'
                            ).addClass("hidden"),
                          setTimeout(function () {
                            $(
                              ".slide-out-widget-area-toggle:not(.std-menu) > div > a"
                            ).removeClass("animating");
                          }, 300),
                          $(
                            "#slide-out-widget-area, #slide-out-widget-area-bg, #header-outer .slide-out-widget-area-toggle"
                          ).addClass("material-open"),
                          0 <
                            $(
                              'body:not(.mobile) #header-outer[data-format="centered-menu-bottom-bar"][data-condense="true"]'
                            ).length &&
                            "none" !=
                              $(
                                '#header-outer[data-format="centered-menu-bottom-bar"] .span_9'
                              ).css("display") &&
                            ($("#header-outer:not(.fixed-menu)").css(
                              "top",
                              gt.adminBarHeight - gt.scrollTop + "px"
                            ),
                            0 < p.length &&
                              0 < $("#header-outer.fixed-menu").length &&
                              p.css("visibility", "hidden")),
                          $("#ajax-content-wrap").css({
                            position: "relative",
                            top: "-" + gt.scrollTop + "px",
                          }),
                          $(".ocm-effect-wrap-inner").css({
                            "padding-top": gt.adminBarHeight,
                          }),
                          $("#fp-nav").addClass("material-ocm-open"),
                          (ft.materialOffCanvasOpen = !0),
                          E.addClass("material-ocm-open"),
                          E.addClass("nectar-no-flex-height"),
                          $(".ocm-effect-wrap").css({ height: gt.winH }),
                          setTimeout(function () {
                            $(".ocm-effect-wrap").addClass("material-ocm-open");
                          }, 40),
                          $("body > .slide_out_area_close").addClass(
                            "follow-body"
                          ),
                          $(
                            '#header-outer:not([data-format="left-header"]) header#top .slide-out-widget-area-toggle a'
                          ).addClass("effect-shown"),
                          $(
                            'body[data-hhun="1"]:not(.no-scroll):not(.mobile) #header-outer[data-permanent-transparent="false"]:not(.detached):not(.parallax-contained):not(.at-top-before-box)'
                          ).css({
                            transition: "none",
                            transform:
                              "translateY(" + gt.adminBarHeight + "px)",
                          }),
                          setTimeout(function () {
                            $("body > .slide_out_area_close").addClass(
                              "material-ocm-open"
                            ),
                              $("body > .slide_out_area_close").removeClass(
                                "hide_until_rendered"
                              );
                          }, 350)),
                        $(T).trigger("nectar-material-ocm-open");
                    })()
                  : h.hasClass("fullscreen")
                  ? (function () {
                      0 < $("body.material").length &&
                        $(
                          "header#top .slide-out-widget-area-toggle a"
                        ).addClass("menu-push-out");
                      var t = 0,
                        e = 0;
                      gt.scrollTop + g.height() > $(".blurred-wrap").height() &&
                        0 == $("#nectar_fullscreen_rows").length &&
                        ($("body,html")
                          .stop()
                          .animate(
                            {
                              scrollTop:
                                $(".blurred-wrap").height() - g.height(),
                            },
                            600,
                            "easeInOutCubic"
                          ),
                        (t = 550),
                        (e = 200)),
                        $(
                          "header#top .slide-out-widget-area-toggle:not(.std-menu) .lines-button:not(.legacy-double)"
                        ).addClass("close"),
                        setTimeout(function () {
                          $(".blurred-wrap").addClass("blurred");
                        }, t),
                        $("#slide-out-widget-area.fullscreen")
                          .show()
                          .addClass("open"),
                        0 == $(".nectar-social.fixed").length && Dn(),
                        $(".container-wrap").addClass("no-shadow"),
                        u.stop(!0).css("transform", "translateY(0)"),
                        setTimeout(function () {
                          $(".off-canvas-menu-container .menu > li").each(
                            function (t) {
                              $(this)
                                .delay(50 * t)
                                .transition(
                                  { y: 0, opacity: 1 },
                                  800,
                                  "easeOutExpo"
                                );
                            }
                          ),
                            $("#slide-out-widget-area.fullscreen .widget").each(
                              function (t) {
                                $(this)
                                  .delay(100 * t)
                                  .transition(
                                    { y: 0, opacity: 1 },
                                    800,
                                    "easeOutExpo"
                                  );
                              }
                            );
                        }, 370 + e),
                        setTimeout(function () {
                          $(
                            "#slide-out-widget-area .off-canvas-social-links"
                          ).addClass("line-shown"),
                            $(
                              "#slide-out-widget-area .off-canvas-social-links li"
                            ).each(function (t) {
                              $(this)
                                .delay(50 * t)
                                .transition({ scale: 1 }, 400, "easeOutCubic");
                            }),
                            $("#slide-out-widget-area .bottom-text").transition(
                              { opacity: 0.7 },
                              400,
                              "easeOutCubic"
                            );
                        }, 750 + e),
                        setTimeout(function () {
                          var t =
                            0 < $("body.mobile").length
                              ? "easeOutCubic"
                              : "easeInOutQuint";
                          s.css({ height: "100%", width: "100%" })
                            .show()
                            .stop(!0)
                            .transition({ y: "0%" }, 920, t, function () {
                              $(
                                ".slide-out-widget-area-toggle > div > a"
                              ).removeClass("animating");
                            });
                        }, 50 + e),
                        Aa(),
                        0 <
                          $(
                            '.mobile #header-outer[data-permanent-transparent="false"]'
                          ).length &&
                          $(".container-wrap").hasClass("no-scroll") &&
                          $("#ajax-content-wrap").addClass("at-content");
                      var e =
                        u.offset().top -
                        gt.scrollTop +
                        gt.secondaryHeaderHeight;
                      $("#slide-out-widget-area.fullscreen > .inner-wrap").css(
                        "padding-top",
                        u.outerHeight() + e
                      );
                    })()
                  : h.hasClass("fullscreen-alt") ||
                    h.hasClass("fullscreen-split")
                  ? (function () {
                      var t = ".fullscreen-alt";
                      h.hasClass("fullscreen-split") &&
                        (t = ".fullscreen-split"),
                        0 < $("body.material").length &&
                          $(
                            "header#top .slide-out-widget-area-toggle a"
                          ).addClass("menu-push-out"),
                        $(
                          "header#top .slide-out-widget-area-toggle:not(.std-menu) .lines-button:not(.legacy-double)"
                        ).addClass("close"),
                        ".fullscreen-alt" === t
                          ? $("#slide-out-widget-area" + t)
                              .show()
                              .addClass("open")
                          : $("#slide-out-widget-area" + t)
                              .addClass("open")
                              .removeClass("hidden"),
                        s.addClass("open").removeClass("hidden"),
                        $('body > div[class*="body-border"]').css(
                          "z-index",
                          "9995"
                        ),
                        ".fullscreen-alt" === t &&
                          $(".off-canvas-menu-container .menu").transition(
                            { y: "0px", opacity: 1 },
                            0
                          ),
                        0 == $(".nectar-social.fixed").length && Dn(),
                        0 < $("#header-outer.transparent").length &&
                          0 < m.length &&
                          ($(".admin-bar #slide-out-widget-area-bg" + t).css({
                            "padding-top": m.outerHeight(!0) + 32 + "px",
                          }),
                          $(
                            "body:not(.admin-bar) #slide-out-widget-area-bg" + t
                          ).css({ "padding-top": m.outerHeight(!0) + "px" })),
                        u.stop(!0).css("transform", "translateY(0)"),
                        1e3 < g.width() &&
                          0 ==
                            $(
                              '#header-outer[data-format="centered-menu-bottom-bar"].fixed-menu'
                            ).length &&
                          0 ==
                            $(
                              'body.material #header-outer[data-condense="true"]'
                            ).length &&
                          "true" == u.attr("data-transparent-header") &&
                          !gt.usingFrontEndEditor &&
                          (0 < $("#logo .starting-logo").length ||
                            0 < $("#logo.no-image").length) &&
                          u
                            .stop(!0)
                            .css("transform", "translateY(0)")
                            .addClass("transparent"),
                        $(".off-canvas-menu-container .clip-wrap").css(
                          "transition-duration",
                          "0s"
                        ),
                        ".fullscreen-alt" === t &&
                          (setTimeout(function () {
                            $(".off-canvas-menu-container .menu > li").each(
                              function (t) {
                                $(this)
                                  .delay(50 * t)
                                  .transition(
                                    { y: 0, opacity: 1 },
                                    750,
                                    "easeOutCubic"
                                  )
                                  .addClass("no-pointer-events");
                              }
                            ),
                              setTimeout(function () {
                                $(
                                  ".off-canvas-menu-container .menu > li"
                                ).removeClass("no-pointer-events"),
                                  $(
                                    ".off-canvas-menu-container .clip-wrap"
                                  ).css("transition-duration", ".45s");
                              }, 500),
                              $(
                                "#slide-out-widget-area.fullscreen-alt .widget"
                              ).each(function (t) {
                                $(this)
                                  .delay(100 * t)
                                  .transition(
                                    { y: 0, opacity: 1 },
                                    650,
                                    "easeOutCubic"
                                  );
                              });
                          }, 200),
                          setTimeout(function () {
                            $(
                              "#slide-out-widget-area .off-canvas-social-links"
                            ).addClass("line-shown"),
                              $(
                                "#slide-out-widget-area .off-canvas-social-links li"
                              )
                                .css("opacity", "1")
                                .each(function (t) {
                                  $(this)
                                    .delay(50 * t)
                                    .transition(
                                      { scale: 1 },
                                      400,
                                      "easeOutCubic"
                                    );
                                }),
                              $(
                                "#slide-out-widget-area .bottom-text"
                              ).transition({ opacity: 1 }, 600, "easeOutCubic");
                          }, 200));
                      var e = 0.4;
                      s.hasClass("solid") && (e = 1),
                        s.hasClass("dark") && (e = 0.97),
                        s.hasClass("medium") && (e = 0.6),
                        s.hasClass("light") && (e = 0.4),
                        s.removeClass("no-transition"),
                        ".fullscreen-alt" === t &&
                          (s
                            .addClass("padding-removed")
                            .css({
                              height: "100%",
                              width: "100%",
                              left: "0",
                              opacity: e,
                            }),
                          Aa()),
                        setTimeout(function () {
                          $(
                            ".slide-out-widget-area-toggle > div > a"
                          ).removeClass("animating");
                        }, 600),
                        0 <
                          $(
                            '.mobile #header-outer[data-permanent-transparent="false"]'
                          ).length &&
                          $(".container-wrap").hasClass("no-scroll") &&
                          $("#ajax-content-wrap").addClass("at-content");
                      var a = u.outerHeight(),
                        e;
                      0 < $('body[data-contained-header="true"]').length &&
                        (a = 1.5 * u.outerHeight()),
                        ".fullscreen-alt" === t
                          ? ((e =
                              u.offset().top -
                              gt.scrollTop +
                              gt.secondaryHeaderHeight),
                            $(
                              "#slide-out-widget-area" + t + " > .inner-wrap"
                            ).css("padding-top", u.outerHeight() + e))
                          : $(
                              "#slide-out-widget-area" + t + " > .inner-wrap"
                            ).css("padding-top", a);
                    })()
                  : h.hasClass("fullscreen-inline-images")
                  ? ((function () {
                      var t = gt.winW < gt.winH;
                      0 === $('body[data-contained-header="true"]').length &&
                        u.css({
                          "z-index": "9990",
                          transition: "transform 0.3s ease",
                        }),
                        0 == $(".nectar-social.fixed").length && Dn(),
                        0 < $("body.material").length &&
                          $(
                            "header#top .slide-out-widget-area-toggle a"
                          ).addClass("menu-push-out"),
                        $(
                          "header#top .slide-out-widget-area-toggle:not(.std-menu) .lines-button:not(.legacy-double)"
                        ).addClass("close"),
                        $("#slide-out-widget-area.fullscreen-inline-images")
                          .addClass("open")
                          .removeClass("hidden"),
                        s.addClass("open").removeClass("hidden"),
                        $('body > div[class*="body-border"]').css(
                          "z-index",
                          "9995"
                        ),
                        setTimeout(
                          function () {
                            u
                              .removeClass("side-widget-closed")
                              .addClass("side-widget-open"),
                              C ||
                                (u.attr("data-transparent-header", "true"),
                                0 ===
                                  $("#logo .starting-logo:not(.dark-version)")
                                    .length && u.addClass("lighten-logo")),
                              gt.usingFrontEndEditor ||
                                u
                                  .stop(!0)
                                  .css("transform", "translateY(0)")
                                  .addClass("transparent"),
                              0 <
                                $("#header-outer.dark-slide.transparent")
                                  .length &&
                                0 == $("#boxed").length &&
                                u
                                  .removeClass("dark-slide")
                                  .addClass("temp-removed-dark-slide"),
                              0 ===
                                $('body[data-contained-header="true"]')
                                  .length &&
                                setTimeout(function () {
                                  anime({
                                    targets: "#header-outer #top > .container",
                                    opacity: [0, 1],
                                    duration: 900,
                                    easing: "easeOutQuad",
                                  }),
                                    u.css({ "z-index": "", transition: "" });
                                }, 50);
                          },
                          t ? 350 : 425
                        ),
                        $(".off-canvas-menu-container .clip-wrap").css(
                          "transition-duration",
                          "0s"
                        ),
                        s.removeClass("no-transition"),
                        setTimeout(function () {
                          $(
                            ".slide-out-widget-area-toggle > div > a"
                          ).removeClass("animating");
                        }, 600),
                        0 <
                          $(
                            '.mobile #header-outer[data-permanent-transparent="false"]'
                          ).length &&
                          $(".container-wrap").hasClass("no-scroll") &&
                          $("#ajax-content-wrap").addClass("at-content");
                      var t = u.outerHeight();
                      0 < $('body[data-contained-header="true"]').length &&
                        (t = 2 * u.outerHeight()),
                        $(
                          "#slide-out-widget-area.fullscreen-inline-images > .inner-wrap"
                        ).css("padding-top", t);
                    })(),
                    (t = 1100))
                  : 0 < $("#header-outer #mobile-menu").length &&
                    ((t = 150), La("slide-out-widget-area-toggle")),
                (ft.ocmAnimating = !0),
                setTimeout(function () {
                  ft.ocmAnimating = !1;
                }, t),
                0 != $("#header-outer #mobile-menu").length ||
                  h.hasClass("fullscreen-inline-images") ||
                  (u
                    .removeClass("side-widget-closed")
                    .addClass("side-widget-open"),
                  0 < $('#header-outer[data-transparency-option="1"]').length &&
                    0 == $("#boxed").length &&
                    0 < $('#header-outer[data-full-width="true"]').length &&
                    !gt.usingFrontEndEditor &&
                    0 ==
                      $(
                        'body.material[data-slide-out-widget-area-style="slide-out-from-right"]'
                      ).length &&
                    0 ==
                      $('body.material #header-outer[data-condense="true"]')
                        .length &&
                    u.addClass("transparent"),
                  0 < $("#header-outer.dark-slide.transparent").length &&
                    0 == $("#boxed").length &&
                    0 == $("body.material-ocm-open").length &&
                    u
                      .removeClass("dark-slide")
                      .addClass("temp-removed-dark-slide")),
                $(
                  ".slide-out-widget-area-toggle:not(.simple-mobile-menu) > div > a"
                )
                  .removeClass("closed")
                  .addClass("open")
                  .attr("aria-expanded", "true"),
                $(
                  ".slide-out-widget-area-toggle:not(.simple-mobile-menu) > div > a"
                ).addClass("animating"),
                $(T).trigger("nectar-ocm-open")),
            !1
          );
        }
      ),
      E.on(
        "click",
        ".slide-out-widget-area-toggle:not(.std-menu) a.open.animating",
        function () {
          return !1;
        }
      ),
      E.on(
        "click",
        ".slide-out-widget-area-toggle:not(.std-menu) a.open:not(.animating), .nectar-ocm-trigger-open a.open, #slide-out-widget-area .slide_out_area_close, > .slide_out_area_close, #slide-out-widget-area-bg.slide-out-from-right, .material-ocm-open #ajax-content-wrap",
        function (t) {
          var e, a, t;
          if (
            null != t.originalEvent ||
            0 != $(".slide_out_area_close.non-human-allowed").length ||
            0 !=
              $(".slide-out-widget-area-toggle.mobile-icon a.non-human-allowed")
                .length
          )
            return !(
              ft.ocmAnimating ||
              0 <
                $(".slide-out-widget-area-toggle:not(.std-menu) a.animating")
                  .length ||
              ((ft.ocmOpen = !1),
              u.removeClass("no-transition"),
              0 < $(this).parents(".simple-mobile-menu").length
                ? (qa("simple-mobile-menu"), $(this).removeClass("open"))
                : ($(
                    ".slide-out-widget-area-toggle:not(.std-menu):not(.simple-mobile-menu) a"
                  )
                    .removeClass("open")
                    .addClass("closed")
                    .attr("aria-expanded", "false"),
                  $(
                    ".slide-out-widget-area-toggle:not(.simple-mobile-menu):not(.std-menu) a"
                  ).addClass("animating"),
                  h.hasClass("slide-out-from-right")
                    ? 0 == $("body.material").length
                      ? ((a = Ut()),
                        gt.winW < 1e3 && (a = !0),
                        (t =
                          T.nectarOptions &&
                          T.nectarOptions.mobile_header_format &&
                          "centered-menu" ===
                            T.nectarOptions.mobile_header_format &&
                          a
                            ? "left"
                            : "right"),
                        $(
                          ".container-wrap, .home-wrap, #footer-outer:not(#nectar_fullscreen_rows #footer-outer), .nectar-box-roll, #page-header-wrap .page-header-bg-image,  #page-header-wrap .nectar-video-wrap, #page-header-wrap .mobile-video-image, #page-header-wrap #page-header-bg > .container, .page-header-no-bg, div:not(.container) > .project-title"
                        )
                          .stop(!0)
                          .transition({ x: "0px" }, 700, "easeInOutCubic"),
                        0 <
                          $('#header-outer[data-transparency-option="1"]')
                            .length && 0 == $("#boxed").length
                          ? ((a =
                              0 <
                              $("#header-outer[data-current-row-bg-color]")
                                .length
                                ? u.attr("data-current-row-bg-color")
                                : u.attr("data-user-set-bg")),
                            u
                              .stop(!0)
                              .transition(
                                { x: "0px", "background-color": a },
                                700,
                                "easeInOutCubic"
                              ))
                          : u
                              .stop(!0)
                              .transition({ x: "0px" }, 700, "easeInOutCubic"),
                        h
                          .stop(!0)
                          .transition(
                            {
                              x:
                                "left" == t || "left" === M
                                  ? "-301px"
                                  : "301px",
                            },
                            700,
                            "easeInOutCubic"
                          )
                          .removeClass("open"),
                        0 == $("#boxed").length &&
                          0 <
                            $('#header-outer[data-full-width="true"]').length &&
                          (u.removeClass("highzI"),
                          $("header#top #logo")
                            .stop(!0)
                            .transition({ x: "0px" }, 700, "easeInOutCubic"),
                          $(".lines-button").removeClass("close")),
                        0 <
                          $(
                            '#header-outer[data-format="centered-logo-between-menu"]'
                          ).length &&
                          $(
                            "#header-outer header#top nav > ul.buttons, #header-outer .cart-outer .cart-menu-wrap"
                          )
                            .stop(!0)
                            .transition({ x: "0px" }, 700, "easeInOutCubic"),
                        s
                          .stop(!0)
                          .transition(
                            { opacity: 0 },
                            700,
                            "easeInOutCubic",
                            function () {
                              $(".slide-out-widget-area-toggle a").removeClass(
                                "animating"
                              ),
                                $(this).css({ height: "1px", width: "1px" }),
                                0 ==
                                  $('#header-outer[data-remove-fixed="1"]')
                                    .length &&
                                  (u.hasClass("parallax-contained") &&
                                  0 < gt.scrollTop &&
                                  0 ==
                                    $(
                                      '#header-outer[data-permanent-transparent="1"]'
                                    ).length
                                    ? u
                                        .removeClass("parallax-contained")
                                        .addClass("detached")
                                        .removeClass("transparent")
                                    : ((0 == gt.scrollTop &&
                                        0 < $('body[data-hhun="1"]').length &&
                                        0 <
                                          $(
                                            '#page-header-bg[data-parallax="1"]'
                                          ).length) ||
                                        (0 == gt.scrollTop &&
                                          0 < $('body[data-hhun="1"]').length &&
                                          0 <
                                            $(".parallax_slider_outer")
                                              .length)) &&
                                      0 <
                                        $(
                                          '#header-outer[data-transparency-option="1"]'
                                        ).length &&
                                      u.addClass("transparent")),
                                $(".container-wrap").css("transform", "none");
                            }
                          ),
                        u.removeClass("style-slide-out-from-right"),
                        0 == $('#header-outer[data-remove-fixed="1"]').length &&
                          (1 == ct && 1 == _ && 1e3 < gt.winW
                            ? (g.off("scroll.headerResizeEffect"),
                              0 == gt.scrollTop
                                ? (g.on("scroll.headerResizeEffect", gn),
                                  0 <
                                    $(
                                      '#header-outer[data-full-width="true"][data-transparent-header="true"]'
                                    ).length &&
                                    0 < m.length &&
                                    1 == ct &&
                                    0 <
                                      $("#header-outer.pseudo-data-transparent")
                                        .length &&
                                    $(
                                      '#header-outer[data-full-width="true"] header > .container'
                                    )
                                      .stop(!0, !0)
                                      .animate(
                                        { padding: "0" },
                                        {
                                          queue: !1,
                                          duration: 250,
                                          easing: "easeOutCubic",
                                        }
                                      ))
                                : g.on("scroll.headerResizeEffect", fn),
                              u.hasClass("pseudo-data-transparent") &&
                                u
                                  .attr("data-transparent-header", "false")
                                  .removeClass("pseudo-data-transparent")
                                  .removeClass("transparent"),
                              u.css("transition", "transform"))
                            : 1 == ct &&
                              1e3 < gt.winW &&
                              (g.off("scroll.headerResizeEffectOpaque"),
                              g.on("scroll.headerResizeEffectOpaque", mn),
                              u.css("transition", "transform"),
                              u.hasClass("pseudo-data-transparent") &&
                                u
                                  .attr("data-transparent-header", "false")
                                  .removeClass("pseudo-data-transparent")
                                  .removeClass("transparent"))))
                      : 0 < $("body.material").length &&
                        (h.removeClass("open"),
                        $(
                          "#slide-out-widget-area, #slide-out-widget-area-bg, #header-outer .slide-out-widget-area-toggle"
                        ).removeClass("material-open"),
                        $(
                          ".ocm-effect-wrap, .ocm-effect-wrap-shadow, body > .slide_out_area_close, #fp-nav"
                        ).removeClass("material-ocm-open"),
                        $("body > .slide_out_area_close").removeClass(
                          "follow-body"
                        ),
                        setTimeout(function () {
                          $(".slide-out-widget-area-toggle a").removeClass(
                            "animating"
                          ),
                            E.removeClass("material-ocm-open"),
                            E.removeClass("nectar-no-flex-height"),
                            $(".ocm-effect-wrap").css({ height: "100%" }),
                            $(".ocm-effect-wrap-inner").css({
                              "padding-top": "0",
                            }),
                            g.scrollTop(
                              Math.abs(
                                parseInt($("#ajax-content-wrap").css("top"))
                              )
                            ),
                            $("#ajax-content-wrap").css({
                              position: "",
                              top: "",
                            }),
                            0 <
                              $(
                                '#header-outer[data-format="centered-menu-bottom-bar"]'
                              ).length &&
                              "none" !=
                                $(
                                  '#header-outer[data-format="centered-menu-bottom-bar"] .span_9'
                                ).css("display") &&
                              0 == $("body.mobile").length &&
                              ($("#header-outer:not(.fixed-menu)").css(
                                "top",
                                ""
                              ),
                              p.css("visibility", "")),
                            $(
                              'body[data-hhun="1"]:not(.no-scroll) #header-outer[data-permanent-transparent="false"]:not(.detached):not(.parallax-contained):not(.at-top-before-box)'
                            ).css({ transform: "" }),
                            setTimeout(function () {
                              $(
                                'body[data-hhun="1"]:not(.no-scroll) #header-outer[data-permanent-transparent="false"]:not(.detached):not(.parallax-contained):not(.at-top-before-box)'
                              ).css({ transition: "" });
                            }, 30),
                            $(
                              'body[data-hhun="1"] #header-secondary-outer.hidden'
                            ).removeClass("hidden"),
                            (ft.materialOffCanvasOpen = !1),
                            $(T).trigger("nectar-material-ocm-close");
                        }, 900),
                        setTimeout(function () {
                          $(
                            '#header-outer:not([data-format="left-header"]) header#top .slide-out-widget-area-toggle a'
                          )
                            .addClass("no-trans")
                            .removeClass("effect-shown");
                        }, 200),
                        setTimeout(function () {
                          $(
                            '#header-outer:not([data-format="left-header"]) header#top .slide-out-widget-area-toggle a'
                          ).removeClass("no-trans");
                        }, 500))
                    : h.hasClass("fullscreen")
                    ? (0 < $("body.material").length &&
                        setTimeout(function () {
                          $(
                            "header#top .slide-out-widget-area-toggle a"
                          ).removeClass("menu-push-out");
                        }, 350),
                      $(
                        ".slide-out-widget-area-toggle:not(.std-menu) .lines-button:not(.legacy-double)"
                      ).removeClass("close"),
                      $(".blurred-wrap").removeClass("blurred"),
                      $("#slide-out-widget-area.fullscreen")
                        .transition(
                          { opacity: 0 },
                          700,
                          "easeOutQuad",
                          function () {
                            $("#slide-out-widget-area.fullscreen")
                              .hide()
                              .css("opacity", "1");
                          }
                        )
                        .removeClass("open"),
                      $("#slide-out-widget-area.fullscreen .widget").transition(
                        { opacity: 0 },
                        700,
                        "easeOutQuad",
                        function () {
                          $(this).transition({ y: "110px" }, 0);
                        }
                      ),
                      setTimeout(function () {
                        $(".off-canvas-menu-container .menu > li").transition(
                          { y: "80px", opacity: 0 },
                          0
                        ),
                          $(
                            "#slide-out-widget-area .off-canvas-social-links li"
                          ).transition({ scale: 0 }, 0),
                          $(
                            "#slide-out-widget-area .off-canvas-social-links"
                          ).removeClass("line-shown"),
                          $("#slide-out-widget-area .bottom-text").transition(
                            { opacity: 0 },
                            0
                          ),
                          $(
                            "#slide-out-widget-area .menuwrapper .menu"
                          ).removeClass("subview"),
                          $(
                            "#slide-out-widget-area .menuwrapper .menu li"
                          ).removeClass("subview subviewopen"),
                          $(
                            "#slide-out-widget-area.fullscreen .inner .menu-wrap"
                          ).css("height", "auto");
                      }, 800),
                      setTimeout(function () {
                        0 == $(".nectar-social.fixed").length && Nn(),
                          $(".container-wrap").removeClass("no-shadow");
                      }, 500),
                      s
                        .stop(!0)
                        .transition(
                          { opacity: 0 },
                          900,
                          "easeOutQuad",
                          function () {
                            0 <
                              $(
                                '.mobile #header-outer[data-permanent-transparent="false"]'
                              ).length &&
                              $(".container-wrap").hasClass("no-scroll") &&
                              $("#ajax-content-wrap").removeClass("at-content"),
                              0 ==
                                $(
                                  '.mobile #header-outer[data-permanent-transparent="false"]'
                                ).length &&
                                $(
                                  "#slide-out-widget-area.fullscreen > .inner-wrap"
                                ).css("padding-top", "0"),
                              $(".slide-out-widget-area-toggle a").removeClass(
                                "animating"
                              );
                            var t = 0.4;
                            s.hasClass("solid") && (t = 1),
                              s.hasClass("dark") && (t = 0.93),
                              s.hasClass("medium") && (t = 0.6),
                              s.hasClass("light") && (t = 0.4),
                              $(this)
                                .css({
                                  height: "1px",
                                  width: "1px",
                                  opacity: t,
                                })
                                .transition({ y: "-100%" }, 0);
                          }
                        ))
                    : h.hasClass("fullscreen-alt") ||
                      h.hasClass("fullscreen-split") ||
                      h.hasClass("fullscreen-inline-images")
                    ? ((e = ".fullscreen-alt"),
                      h.hasClass("fullscreen-inline-images")
                        ? ((e = ".fullscreen-inline-images"),
                          u.css({
                            "z-index": "9990",
                            transition: "transform 0.3s ease",
                          }),
                          setTimeout(function () {
                            u.css({ "z-index": "", transition: "" });
                          }, 450),
                          C ||
                            (u.removeClass("lighten-logo"),
                            u
                              .attr("data-transparent-header", "")
                              .removeClass("transparent")),
                          setTimeout(function () {
                            $(
                              "#slide-out-widget-area .menuwrapper .menu"
                            ).removeClass("subview"),
                              $(
                                "#slide-out-widget-area .menuwrapper .menu li"
                              ).removeClass("subview subviewopen"),
                              $(
                                "#slide-out-widget-area.fullscreen-alt .inner .menu-wrap"
                              ).css("height", "auto");
                          }, 550))
                        : h.hasClass("fullscreen-split") &&
                          (e = ".fullscreen-split"),
                      0 < $("body.material").length &&
                        setTimeout(function () {
                          $(
                            "header#top .slide-out-widget-area-toggle a"
                          ).removeClass("menu-push-out");
                        }, 350),
                      $(
                        ".slide-out-widget-area-toggle:not(.std-menu) .lines-button:not(.legacy-double)"
                      ).removeClass("close"),
                      s.removeClass("open"),
                      (".fullscreen-split" !== e &&
                        ".fullscreen-inline-images" !== e) ||
                        setTimeout(function () {
                          s.addClass("hidden"),
                            $("#slide-out-widget-area" + e).addClass("hidden");
                        }, 550),
                      ".fullscreen-alt" === e &&
                        ($(".blurred-wrap").removeClass("blurred"),
                        $(
                          "#slide-out-widget-area.fullscreen-alt .widget"
                        ).transition(
                          { opacity: 0 },
                          500,
                          "easeOutQuad",
                          function () {
                            $(this).transition({ y: "40px" }, 0);
                          }
                        ),
                        $(
                          "#slide-out-widget-area .bottom-text, #slide-out-widget-area .off-canvas-social-links li"
                        ).transition({ opacity: 0 }, 250, "easeOutQuad"),
                        $(
                          "#slide-out-widget-area .off-canvas-social-links"
                        ).removeClass("line-shown"),
                        $(".off-canvas-menu-container .menu").transition(
                          { y: "-13px", opacity: 0 },
                          400
                        )),
                      setTimeout(function () {
                        ".fullscreen-alt" === e &&
                          ($(".off-canvas-menu-container .menu > li")
                            .stop(!0, !0)
                            .transition({ y: "40px", opacity: 0 }, 0),
                          $(
                            "#slide-out-widget-area .off-canvas-social-links li"
                          ).transition({ scale: 0 }, 0),
                          $(
                            "#slide-out-widget-area .off-canvas-social-links"
                          ).removeClass("line-shown"),
                          $(
                            "#slide-out-widget-area .menuwrapper .menu"
                          ).removeClass("subview"),
                          $(
                            "#slide-out-widget-area .menuwrapper .menu li"
                          ).removeClass("subview subviewopen"),
                          $(
                            "#slide-out-widget-area.fullscreen-alt .inner .menu-wrap"
                          ).css("height", "auto"),
                          s.css({
                            height: "1px",
                            width: "1px",
                            left: "-100%",
                          })),
                          0 <
                            $(
                              '.mobile #header-outer[data-permanent-transparent="false"]'
                            ).length &&
                            $(".container-wrap").hasClass("no-scroll") &&
                            $("#ajax-content-wrap").removeClass("at-content"),
                          0 ==
                            $(
                              '.mobile #header-outer[data-permanent-transparent="false"]'
                            ).length &&
                            $(
                              "#slide-out-widget-area" + e + " .inner-wrap"
                            ).css("padding-top", "0"),
                          $(".slide-out-widget-area-toggle a").removeClass(
                            "animating"
                          ),
                          ".fullscreen-alt" === e &&
                            $("#slide-out-widget-area" + e)
                              .hide()
                              .removeClass("open");
                      }, 550),
                      (".fullscreen-split" !== e &&
                        ".fullscreen-inline-images" !== e) ||
                        $("#slide-out-widget-area" + e).removeClass("open"),
                      setTimeout(function () {
                        0 == $(".nectar-social.fixed").length && Nn();
                      }, 600),
                      setTimeout(function () {
                        s.removeClass("padding-removed");
                      }, 50),
                      setTimeout(
                        function () {
                          ".fullscreen-alt" === e &&
                            s.stop(!0).css({ opacity: 0 }),
                            0 <
                              $('#header-outer[data-transparent-header="true"]')
                                .length &&
                              $('body > div[class*="body-border"]').css(
                                "z-index",
                                "10000"
                              );
                        },
                        1 == ct ? 150 : 50
                      ),
                      setTimeout(
                        function () {
                          $(
                            '#header-outer:not([data-permanent-transparent="1"]).transparent.small-nav, body[data-hhun="1"] #header-outer:not([data-permanent-transparent="1"]).transparent.scrolling, #header-outer:not([data-permanent-transparent="1"]).transparent.scrolled-down'
                          ).removeClass("transparent"),
                            u.hasClass("pseudo-data-transparent") &&
                              u
                                .attr("data-transparent-header", "false")
                                .removeClass("pseudo-data-transparent")
                                .removeClass("transparent");
                        },
                        ".fullscreen-inline-images" == e ? 0 : 100
                      ))
                    : 0 < $("#header-outer #mobile-menu").length &&
                      qa("slide-out-widget-area-toggle"),
                  0 == $("#header-outer #mobile-menu").length &&
                    (0 <
                      $("#header-outer.temp-removed-dark-slide.transparent")
                        .length &&
                      0 == $("#boxed").length &&
                      u
                        .removeClass("temp-removed-dark-slide")
                        .addClass("dark-slide"),
                    0 ==
                      $('#header-outer[data-permanent-transparent="1"]')
                        .length &&
                      0 == $("#slide-out-widget-area.fullscreen-alt").length &&
                      (0 == $(".nectar-box-roll").length
                        ? (0 < $("#header-outer.small-nav").length ||
                            0 < $("#header-outer.scrolled-down").length) &&
                          u.removeClass("transparent")
                        : (0 < $("#header-outer.small-nav").length ||
                            0 < $("#header-outer.scrolled-down").length ||
                            0 < $(".container-wrap.auto-height").length) &&
                          u.removeClass("transparent")),
                    u.removeClass("hidden-menu"),
                    u
                      .removeClass("side-widget-open")
                      .addClass("side-widget-closed")),
                  $(T).trigger("nectar-ocm-close")),
              1)
            );
        }
      ),
      h.hasClass("fullscreen-inline-images") &&
        ((t = ""),
        (t = Pa(
          (t =
            0 <
            $(
              '#slide-out-widget-area .off-canvas-menu-container .menu > li[class*="current"]'
            ).length
              ? $(
                  '#slide-out-widget-area .off-canvas-menu-container .menu > li[class*="current"]'
                ).attr("class")
              : t)
        )),
        0 < $(".nectar-ocm-image." + t).length &&
          ($(".nectar-ocm-image.default").remove(),
          $(".nectar-ocm-image." + t).addClass("current")),
        $(".off-canvas-menu-container .menu > .menu-item-has-children > a").on(
          "click",
          function (t) {
            var e = Pa($(this).parent().attr("class"));
            0 < $(".nectar-ocm-image." + e).length &&
              ($(".nectar-ocm-image." + e).addClass("active-hold"),
              $(".nectar-ocm-image.current:not(.active-hold)").addClass(
                "hidden"
              ));
          }
        ),
        $("body").on(
          "mousedown",
          ".off-canvas-menu-container .menu > .menu-item-has-children > ul > .back",
          function (t) {
            setTimeout(function () {
              $(".nectar-ocm-image").removeClass("active-hold");
            }, 400);
          }
        ),
        $("#slide-out-widget-area .off-canvas-menu-container li[class]").on(
          "mouseenter",
          function () {
            var t = Pa($(this).attr("class"));
            0 === $(".nectar-ocm-image.active-hold").length &&
              ($(".nectar-ocm-image." + t).addClass("active"),
              0 < $(".nectar-ocm-image." + t).length &&
                $(".nectar-ocm-image.current:not(.active)").addClass("hidden"));
          }
        ),
        $("#slide-out-widget-area .off-canvas-menu-container li").on(
          "mouseleave",
          function () {
            0 === $(".nectar-ocm-image.active-hold").length &&
              ($(".nectar-ocm-image.active").removeClass("active"),
              $(".nectar-ocm-image.current").removeClass("hidden"));
          }
        ));
  }
  function Pa(t) {
    var t = t.split(" ").filter(function (t) {
      return !(!/[0-9]+$/.test(t) || -1 === t.indexOf("menu-item"));
    });
    return 1 !== t.length ? "not-found" : t.join("");
  }
  function Ya() {
    var e, t;
    T.nectarOptions &&
      "1" === T.nectarOptions.simplify_ocm_mobile &&
      gt.usingMobileBrowser &&
      h.hasClass("slide-out-from-right") &&
      0 < $("body.material").length &&
      ($("body").attr(
        "data-slide-out-widget-area-style",
        "slide-out-from-right-hover"
      ),
      h.removeClass("slide-out-from-right"),
      h.addClass("slide-out-from-right-hover").addClass("ios-ocm-style"),
      $("#slide-out-widget-area .inner > .widget").wrapAll(
        '<div class="bottom-meta-wrap"></div>'
      )),
      0 < $("#slide-out-widget-area.slide-out-from-right-hover").length
        ? ((e = !0),
          0 == $("#ajax-content-wrap > .slide-out-widget-area-toggle").length &&
            ((t =
              0 <
              $('.slide-out-widget-area-toggle[data-custom-color="true"]')
                .length
                ? "#slide-out-widget-area > div"
                : "#slide-out-widget-area"),
            0 === $(".ios-ocm-style").length &&
              $(
                '<div class="slide-out-widget-area-toggle slide-out-hover-icon-effect" data-icon-animation="simple-transform"><div> <a href="#sidewidgetarea" role="button" class="closed"> <span> <span class="screen-reader-text">' +
                  nectar_front_i18n.menu +
                  '</span> <i class="lines-button x2" role="none"> <i class="lines"></i> </i> </span> </a> </div> </div>'
              ).insertAfter(t),
            (0 < $('#header-outer[data-has-menu="true"]').length ||
              0 < $('body[data-header-search="true"]').length ||
              0 < $(".slide-out-widget-area-toggle a.using-label").length ||
              0 <
                $('.slide-out-widget-area-toggle[data-custom-color="true"]')
                  .length) &&
              $(".slide-out-widget-area-toggle").addClass("small")),
          gt.usingMobileBrowser || 0 != $(".ios-ocm-style").length
            ? (E.on(
                "click",
                ".slide-out-widget-area-toggle:not(.std-menu) a",
                function (t) {
                  e &&
                    (Ma(),
                    (e = !1),
                    setTimeout(function () {
                      e = !0;
                    }, 350)),
                    t.preventDefault();
                }
              ),
              E.on("click", "#slide-out-widget-area-bg", Fa),
              E.on(
                "click",
                ".ios-ocm-style .slide_out_area_close",
                function (t) {
                  Fa(), t.preventDefault();
                }
              ))
            : (E.on(
                "mouseenter",
                "#header-outer .slide-out-widget-area-toggle:not(.std-menu) a",
                Ma
              ),
              h.on("mouseenter", function () {
                $(this).addClass("mouse-accessed");
              })),
          g.on("smartresize", Ea))
        : (ja(),
          0 != $("#header-outer #mobile-menu").length &&
            ($("#header-outer #mobile-menu li.megamenu").removeClass(
              "megamenu"
            ),
            $("#header-outer #mobile-menu ul li a").each(function () {
              $(this).hasClass("nectar-widget-link") ||
                0 != $(this).find(".nectar-ext-menu-item").length ||
                $(this).wrapInner("<span></span>");
            }),
            $("#header-outer #mobile-menu ul li").each(function () {
              0 < $(this).find("> ul").length &&
                $(this)
                  .find("> a")
                  .append(
                    '<span class="sf-sub-indicator"><i class="fa fa-angle-down"></i></span>'
                  );
            }),
            $("#header-outer #mobile-menu").on(
              "click",
              ".sf-sub-indicator",
              function () {
                var t = $(this).parent().parent();
                return (
                  t.toggleClass("current-open-item"),
                  t.hasClass("current-open-item")
                    ? (t.find("> ul").show(),
                      setTimeout(function () {
                        t.addClass("visible");
                      }, 30))
                    : (t.find("ul").hide(),
                      t
                        .find("li")
                        .removeClass("visible")
                        .removeClass("current-open-item"),
                      t.removeClass("visible")),
                  !1
                );
              }
            ),
            g.on("smartresize", function () {
              ((1e3 < gt.winW &&
                0 <
                  $(".slide-out-widget-area-toggle.mobile-icon a.open")
                    .length) ||
                (1e3 < gt.winW &&
                  0 <
                    $(".nectar-ocm-trigger-open.simple-mobile-menu a.open")
                      .length)) &&
                ($(
                  ".slide-out-widget-area-toggle.mobile-icon a, .nectar-ocm-trigger-open.simple-mobile-menu a"
                ).addClass("non-human-allowed"),
                $(
                  ".slide-out-widget-area-toggle.mobile-icon a.open, .nectar-ocm-trigger-open.simple-mobile-menu a.open"
                ).trigger("click"),
                setTimeout(function () {
                  $(
                    ".slide-out-widget-area-toggle.mobile-icon a, .nectar-ocm-trigger-open.simple-mobile-menu a"
                  ).removeClass("non-human-allowed");
                }, 100));
            }))),
      $("#slide-out-widget-area").hasClass("fullscreen-inline-images") &&
        0 == $(".off-canvas-menu-container .menu > li > a span.wrap").length &&
        $(".off-canvas-menu-container .menu > li a").wrapInner(
          '<span class="wrap"></span>'
        ),
      0 == $("#slide-out-widget-area.fullscreen-split").length &&
      0 ==
        $(
          'body.material[data-slide-out-widget-area-style*="slide-out-from-right"]'
        ).length &&
      0 ==
        $(
          '#slide-out-widget-area[data-dropdown-func="separate-dropdown-parent-link"]'
        ).length
        ? (function () {
            $("#slide-out-widget-area .off-canvas-menu-container .menu").wrap(
              '<div class="menu-wrap menuwrapper" />'
            ),
              $(
                "#slide-out-widget-area .off-canvas-menu-container .menu"
              ).addClass("menuopen");
            var t =
              0 < $("#slide-out-widget-area.fullscreen-alt").length ||
              0 < $("#slide-out-widget-area.fullscreen-inline-images").length
                ? "4"
                : "5";
            $(
              "#slide-out-widget-area .off-canvas-menu-container .menu-wrap"
            ).dlmenu({
              animationClasses: {
                classin: "dl-animate-in-" + t,
                classout: "dl-animate-out-" + t,
              },
            });
          })()
        : 0 <
            $(
              'body.using-mobile-browser[data-slide-out-widget-area-style="slide-out-from-right-hover"]'
            ).length &&
          $(
            'body #slide-out-widget-area .inner .off-canvas-menu-container li a[href*="#"]'
          ).on("click", function () {
            "#" != $(this).attr("href") && Ra($(this).parent());
          }),
      0 < $("#nectar_fullscreen_rows").length &&
        (0 < $('body[data-slide-out-widget-area-style*="fullscreen"]').length ||
          0 <
            $(
              'body[data-slide-out-widget-area-style="slide-out-from-right"]:not(.material)'
            ).length) &&
        $(
          "body #slide-out-widget-area .inner .off-canvas-menu-container li a[href]"
        ).on("click", function () {
          var t = $(this).is('[href*="#"]') ? $(this).attr("href") : "";
          "#" != t &&
            0 <
              $(
                'div[data-fullscreen-anchor-id="' +
                  t.substr(t.indexOf("#") + 1) +
                  '"]'
              ).length &&
            (setTimeout(function () {
              $("#slide-out-widget-area .slide_out_area_close")
                .addClass("non-human-allowed")
                .trigger("click");
            }, 100),
            setTimeout(function () {
              $("#slide-out-widget-area .slide_out_area_close").removeClass(
                "non-human-allowed"
              );
            }, 150));
        }),
      E.on(
        "mouseover",
        "#slide-out-widget-area .off-canvas-menu-container .menuwrapper > .sub-menu li > a",
        function () {
          var t = $(this).text();
          $(".off-canvas-menu-container .menuwrapper .menu li > a").removeClass(
            "hovered"
          ),
            $(
              ".off-canvas-menu-container .menuwrapper .menu li > a:contains(" +
                t +
                ")"
            ).addClass("hovered");
        }
      ),
      E.on(
        "mouseover",
        ".off-canvas-menu-container .menuwrapper .menu li > a",
        function () {
          $(".off-canvas-menu-container .menuwrapper .menu li > a").removeClass(
            "hovered"
          );
        }
      );
  }
  function Ra(t) {
    0 < $("#slide-out-widget-area.open").length &&
      (T.location.href.split("#")[0] ==
        t.find("> a").attr("href").split("#")[0] ||
        0 < t.find('a[href^="#"]').length) &&
      (0 < t.parents(".slide-out-from-right-hover").length
        ? $(
            ".slide-out-widget-area-toggle.slide-out-hover-icon-effect a"
          ).trigger("click")
        : ($(".slide-out-widget-area-toggle a")
            .addClass("non-human-allowed")
            .trigger("click"),
          setTimeout(function () {
            $(".slide-out-widget-area-toggle a").removeClass(
              "non-human-allowed"
            );
          }, 100)));
  }
  (oe.prototype.setup = function () {
    var e = this;
    this.$el.find(".dynamic-words > span").each(function (t) {
      e.words[t] = $(this);
    }),
      this.viewportTracking(),
      this.$el.hasClass("element_stagger_words") &&
      !this.$el.hasClass("delay-js-loaded")
        ? (this.staggerWaypoint(),
          $(T).on(
            "nectar-waypoints-reinit nectar-tab-changed",
            this.staggerWaypoint.bind(this)
          ))
        : (clearInterval(this.interval),
          (this.interval = setInterval(
            this.sequence.bind(this),
            this.duration
          ))),
      gt.usingMobileBrowser
        ? T.addEventListener("orientationchange", this.calcWidth.bind(this))
        : $(T).on("resize", this.calcWidth.bind(this));
  }),
    (oe.prototype.viewportTracking = function () {
      var e = this;
      "IntersectionObserver" in T
        ? ((this.observer = new IntersectionObserver(
            function (t) {
              t.forEach(function (t) {
                t.isIntersecting
                  ? (e.state.visible = !0)
                  : (e.state.visible = !1);
              });
            },
            { rootMargin: "0px", threshold: 0 }
          )),
          this.observer.observe(this.$el[0]))
        : (this.state.visible = !0);
    }),
    (oe.prototype.calcWidth = function () {
      var t = this,
        e = this.$el.find(".dynamic-words").width();
      this.$el.find(".dynamic-words").css({ width: "" });
      var a = this.words[this.state.activeIndex].find("span").width();
      this.$el.find(".dynamic-words").css({ width: e }),
        setTimeout(function () {
          t.$el.find(".dynamic-words").css({ width: a });
        }, 30);
    }),
    (oe.prototype.sequence = function () {
      if (
        this.$el.find(".dynamic-words > span").length < 2 ||
        0 == this.state.visible
      )
        return !0;
      var t, e;
      (this.state.activeIndex =
        ((t = this.words.length),
        0 <= (e = this.state.activeIndex + 1) ? e % t : ((e % t) + t) % t)),
        this.calcWidth(),
        this.$el.find(".dynamic-words > span").removeClass("active"),
        this.words[this.state.activeIndex].addClass("active");
    }),
    (oe.prototype.staggerWaypoint = function () {
      var t = this;
      if (1 == dt && 0 == this.$el.parents(".active").length) return !0;
      var a = $(this).hasClass("animated-in") ? " animated" : "";
      this.$el.find(".beginning-text, .ending-text").each(function () {
        var t,
          t = (t = (t = $(this).text()).trim()).split(" ");
        $(this)[0].innerHTML = "";
        for (var e = 0; e < t.length; e++)
          $(this)[0].innerHTML +=
            '<span class="text-wrap"><span class="inner' +
            a +
            '">' +
            t[e] +
            "</span></span> ";
      }),
        this.$el.hasClass("animated-in") &&
          this.$el
            .find(".beginning-text .inner, .ending-text .inner")
            .css({ transform: "translateY(0)" }),
        this.$el.addClass("markup-generated");
      var e = 1 == dt ? "500%" : "bottom-in-view",
        n = this.$el,
        i = n.is("[data-delay]") ? parseInt(n.attr("data-delay")) : 0,
        s = new Waypoint({
          element: n[0],
          handler: function () {
            (0 < n.parents(".wpb_tab").length &&
              "hidden" == n.parents(".wpb_tab").css("visibility")) ||
              n.hasClass("animated-in") ||
              ((!A || 0 < $('body[data-responsive="0"]').length) &&
                setTimeout(function () {
                  var e = 0,
                    e = 500 / n.find(".text-wrap").length;
                  (e = Math.min(Math.max(e, 15), 50)), parseInt(H);
                  var a = 0;
                  n.find(".text-wrap").each(function () {
                    var t = $(this);
                    if (
                      0 < $(this).parents(".dynamic-words").length &&
                      !$(this).hasClass("active")
                    )
                      return (
                        t
                          .find("> span")
                          .css({ transform: "translate3d(0,0,0)" }),
                        !0
                      );
                    setTimeout(function () {
                      t.find("> span").css({ transform: "translate3d(0,0,0)" });
                    }, a * e),
                      a++;
                  }),
                    n.addClass("animated-in");
                }, i),
              1 != t.state.sequenceStarted &&
                (clearInterval(t.interval),
                (t.interval = setInterval(t.sequence.bind(t), t.duration))),
              (t.state.sequenceStarted = !0)),
              s.destroy();
          },
          offset: e,
        });
    }),
    (he.prototype.events = function () {
      var a = this;
      "single_link" == this.linkFunc &&
        ($(T).on("resize", this.setVertCenter.bind(this)),
        this.setVertCenter(),
        this.$el.find(".wpb_tabs_nav li").on("click", function (t) {
          var e;
          gt.winW < 1e3 &&
            ((e = a.$el.find(".wpb_tabs_nav")),
            void 0 !== t.originalEvent &&
              (a.$el
                .find(".scrolling-tab-nav .scrolling-tab-nav-current-item")
                .toggleClass("open"),
              e.toggle(),
              He()),
            a.$el.find(".scrolling-tab-nav li").removeClass("active"),
            $(this).addClass("active"),
            a.updateActiveTitle());
        }));
    }),
    (he.prototype.setVertCenter = function () {
      var t = (gt.winH - this.$el.find(".scrolling-tab-nav").height()) / 2;
      I.documentElement.style.setProperty(
        "--nectar-sticky-tabs-vert-y",
        t + "px"
      );
    }),
    (he.prototype.updateActiveTitle = function () {
      var t = this.$el.find(
          ".scrolling-tab-nav .scrolling-tab-nav-current-item"
        ),
        e = this.$el
          .find(".scrolling-tab-nav .menu-item.active .tab-nav-heading")
          .clone(),
        a = this.$el.find(".scrolling-tab-nav .menu-item.active").index();
      this.$el.find(".scrolling-tab-content > div").removeClass("active"),
        this.$el
          .find(".scrolling-tab-content > div:eq(" + a + ")")
          .addClass("active"),
        this.$el
          .find(".scrolling-tab-nav .scrolling-tab-nav-total .inner")
          .css("transform", "translateY(-" + 100 * a + "%)"),
        t.html(e);
    }),
    (he.prototype.domSetup = function () {
      var a = this,
        n = "";
      this.$el.find(".wpb_tab").each(function (t) {
        var e;
        $(this).is("[data-tab-icon]") &&
          0 < $(this).attr("data-tab-icon").length &&
          0 === $(this).find(".im-icon-wrap.tab-icon").length &&
          (a.$el.addClass("using-icons"),
          (n = a.$el
            .find(".wpb_tabs_nav li:nth-child(" + (t + 1) + ") a")
            .attr("href")),
          a.$el
            .find(".wpb_tabs_nav li:nth-child(" + (t + 1) + ")")
            .addClass("has-icon")
            .prepend(
              '<a class="skip-hash" role="button" href="' +
                n +
                '"><i class="' +
                $(this).attr("data-tab-icon") +
                '"></i></a>'
            )),
          0 < $(this).find(".im-icon-wrap.tab-icon").length &&
            ((n = a.$el
              .find(".wpb_tabs_nav li:nth-child(" + (t + 1) + ") a")
              .attr("href")),
            (e = $(this).find(".im-icon-wrap.tab-icon").detach()),
            a.$el
              .find(".wpb_tabs_nav li:nth-child(" + (t + 1) + ")")
              .addClass("has-icon")
              .prepend(
                '<a class="skip-hash svg-icon-link" role="button" href="' +
                  n +
                  '"></a>'
              ),
            a.$el
              .find(
                ".wpb_tabs_nav li:nth-child(" + (t + 1) + ") .svg-icon-link"
              )
              .append(e));
      }),
        this.$el.find(".scrolling-tab-nav .menu-item:first").addClass("active"),
        this.lineAnimation(),
        "single_link" == a.linkFunc && this.updateActiveTitle(),
        1 == this.$el.find(".scrolling-tab-nav .menu-item").length &&
          this.$el.find(".scrolling-tab-nav").addClass("single-tab");
      var i = this.$el.find(".scrolling-tab-content");
      this.$el.find(".scrolling-tab-nav .menu-item").each(function (t) {
        var e = i.find("> div:nth-child(" + (t += 1) + ")"),
          t,
          t,
          t;
        "default" == a.linkFunc &&
          ((t = $(this).html()),
          e.prepend(
            '<div class="scrolling-tab-mobile-title"><div class="inner">' +
              Vt(t) +
              "</div></div>"
          ),
          e.find(".scrolling-tab-mobile-title a").contents().unwrap(),
          e &&
            ((t = (t = $(this).find("a").attr("href")).substr(1)),
            e.find("> .scrolling-tab-mobile-title").attr("id", t),
            e.removeAttr("id")));
      }),
        this.$el.addClass("initalized");
    }),
    (he.prototype.highlightObserve = function () {
      var a = this,
        t,
        t;
      !(gt.usingMobileBrowser && gt.winW < 1e3) &&
        "IntersectionObserver" in T &&
        ((t = u.is('[data-remove-fixed="1"]')
          ? "100px 0px 0px 0px"
          : "5px 0px 0px 0px"),
        (t = { root: jt() ? null : I, rootMargin: t, threshold: 1 }),
        (this.observer = new IntersectionObserver(function (t) {
          t.forEach(function (t) {
            var e = "#" + $(t.target).attr("id"),
              e = a.$el.find('.scrolling-tab-nav a[href="' + e + '"]');
            t.isIntersecting && 1 <= t.intersectionRatio
              ? e.parents(".menu-item").addClass("visible")
              : e.parents(".menu-item").removeClass("visible");
            var e = a.$el.find(".scrolling-tab-nav .menu-item.visible:first");
            0 < e.length &&
              (a.$el
                .find(".scrolling-tab-nav .menu-item")
                .removeClass("active"),
              e.addClass("active"),
              a.lineAnimation());
          });
        }, t)),
        this.$tabContent
          .find("> div > .scrolling-tab-mobile-title[id]")
          .each(function () {
            a.observer.observe($(this)[0]);
          }),
        (this.tabs = Array.from(this.$tabContent.find("> div"))),
        (this.scrollDir = "up"),
        (this.prevScroll = 0),
        (this.prevIndex = 0),
        (this.observer = new IntersectionObserver(
          function (t) {
            t.forEach(function (t) {
              var e, e;
              gt.winW < 1e3 ||
                (gt.scrollTop > a.prevScroll
                  ? (a.scrollDir = "down")
                  : (a.scrollDir = "up"),
                (e = "down" === a.scrollDir ? a.getTargetSection(t) : t.target),
                a.shouldUpdate(t) &&
                  ((e = $(e).index()) < a.prevIndex
                    ? a.$el.addClass("scrolling-up")
                    : a.$el.removeClass("scrolling-up"),
                  a.$el
                    .find(".scrolling-tab-nav .ui-tabs-nav > .menu-item")
                    .removeClass("prev-active"),
                  a.$el
                    .find(".scrolling-tab-nav .ui-tabs-nav > .menu-item.active")
                    .addClass("prev-active"),
                  a.$el
                    .find(".scrolling-tab-nav .ui-tabs-nav > .menu-item")
                    .removeClass("active"),
                  a.$el
                    .find(
                      ".scrolling-tab-nav .ui-tabs-nav > .menu-item:eq(" +
                        e +
                        ")"
                    )
                    .addClass("active"),
                  a.updateActiveTitle(),
                  (a.prevIndex = e)),
                (a.prevScroll = gt.scrollTop));
            });
          },
          { root: jt() ? null : I, rootMargin: "-40% 0% -40% 0%", threshold: 0 }
        )),
        this.$tabContent.find("> div").each(function () {
          a.observer.observe($(this)[0]);
        }));
    }),
    (he.prototype.getTargetSection = function (e) {
      var t = this.tabs.findIndex(function (t) {
        return t == e.target;
      });
      return t >= this.tabs.length - 1 ? e.target : this.tabs[t + 1];
    }),
    (he.prototype.shouldUpdate = function (t) {
      return (
        ("down" === this.scrollDir &&
          !t.isIntersecting &&
          0 != this.prevScroll) ||
        !("up" !== this.scrollDir || !t.isIntersecting || 0 == this.prevScroll)
      );
    }),
    (he.prototype.lineAnimation = function () {
      var t = this.$el.find(".scrolling-tab-nav .active"),
        e,
        t;
      0 != t.length &&
        ((e = parseInt(t.position().top)),
        (t = parseInt(t.height())),
        this.$lineEl.css({
          "max-height": t + "px",
          transform: "translate3d(0px, " + e + "px, 0px)",
        }));
    }),
    (fe.prototype.init = function () {
      this.resizeEvent(), g.on("resize", this.resizeEvent.bind(this));
    }),
    (fe.prototype.lazyInit = function () {
      var e = this,
        e,
        a;
      !gt.usingFrontEndEditor && "IntersectionObserver" in T
        ? ((e = this),
          (a = new IntersectionObserver(
            function (t) {
              t.forEach(function (t) {
                t.isIntersecting && (e.init(), a.unobserve(t.target));
              });
            },
            {
              root: jt() ? null : I,
              rootMargin: "400px 0px 400px 0px",
              threshold: 0,
            }
          )).observe(this.$el[0]))
        : this.init();
    }),
    (fe.prototype.calcTopOffset = function () {
      this.topOffset = (gt.winH - this.$innerEl.height()) / 2;
    }),
    (fe.prototype.resizeEvent = function () {
      1e3 < gt.winW
        ? (this.calcTopOffset(), this.$innerEl.css({ top: this.topOffset }))
        : this.$innerEl.css({ top: "" });
    }),
    (Oe.prototype.setType = function () {
      this.$element.is("[data-scroll-animation-movement]") &&
        "transform_x" == this.$element.attr("data-scroll-animation-movement") &&
        (this.type = "translateX");
    }),
    (Oe.prototype.calculatePos = function () {
      1 != ft.materialOffCanvasOpen &&
        1 != ft.ocmAnimating &&
        ((this.offsetTop = this.$element.offset().top),
        (this.height = this.$element.outerHeight()),
        (this.vertCenter = this.storedWinH / 2 - this.height / 2)),
        gt.usingMobileBrowser || (this.storedWinH = gt.winH);
    }),
    (Oe.prototype.orientationChange = function () {
      gt.usingMobileBrowser &&
        ((this.offsetTop = this.$element.offset().top),
        (this.height = this.$element.outerHeight()),
        (this.storedWinH = gt.winH));
    }),
    (Oe.prototype.trackView = function () {
      var e = this,
        t;
      0 < this.$element.parents(".top-level").length &&
        ((this.topLevel = !0),
        this.offsetTop > gt.winH && (this.topLevel = !1)),
        this.$element.is(".nectar_hook_global_section_parallax_footer") &&
          (this.bottomLevel = !0),
        "IntersectionObserver" in T &&
          ((t = { root: jt() ? null : I, rootMargin: "250px" }),
          new IntersectionObserver(function (t) {
            t.forEach(function (t) {
              var t = t.isIntersecting;
              e.inView = !!t;
            });
          }, t).observe(this.$element[0]));
    }),
    (Oe.prototype.animate = function () {
      var t;
      1 != ft.materialOffCanvasOpen &&
        (1 == this.lerp
          ? (this.lastY = gt.scrollTop)
          : (this.lastY = parseInt(Yt(this.lastY, gt.scrollTop, this.lerp))),
        1 == ft.animatedScrolling && (this.inView = !0),
        this.inView &&
          ((t = this.intensity),
          gt.winW < 1025 && (t /= 1.2),
          gt.winW < 690 && (t /= 1.35),
          (!0 === this.topLevel && 1e3 < gt.winW) ||
          (!0 === this.topLevel && this.persistOnMobile)
            ? (this.$elementInner[0].style.transform =
                this.type + "(" + -this.lastY * t + "px) translateZ(0)")
            : (!0 === this.bottomLevel && 1e3 < gt.winW) ||
              (!0 === this.bottomLevel && this.persistOnMobile)
            ? (this.$elementInner[0].style.transform =
                this.type +
                "(" +
                -(this.lastY - (this.offsetTop + this.height) + gt.winH) * t +
                "px) translateZ(0)")
            : 1e3 < gt.winW || this.persistOnMobile
            ? (this.$elementInner[0].style.transform =
                this.type +
                "(" +
                -(this.lastY - this.offsetTop + this.vertCenter) * t +
                "px) translateZ(0)")
            : (this.$elementInner[0].style.transform =
                this.type + "(0px) translateZ(0)"))),
        T.requestAnimationFrame(this.animate.bind(this));
    }),
    (ze.prototype.setup = function () {
      var t = this;
      (0 < this.$el.parents("#page-header-bg").length ||
        0 < this.$el.parents(".featured-media-under-header").length) &&
        (this.type = "page-header"),
        ((0 < this.$el.parents(".top-level").length &&
          0 < this.$el.parents(".parallax_slider_outer").length) ||
          (0 < this.$el.parents(".top-level").length &&
            this.$el.hasClass("nectar-simple-slider")) ||
          (0 < this.$el.parents(".top-level").length &&
            this.$el.hasClass("nectar-recent-posts-single_featured")) ||
          (0 < this.$el.parents(".top-level").length &&
            this.$el.hasClass("column-image-bg-wrap") &&
            this.$el
              .parent()
              .parent()
              .is(".vc_col-sm-12:not(.child_column)")) ||
          this.$el.is(".wpb_row.top-level") ||
          "page-header" == this.type ||
          (0 == $(".wpb_row").length &&
            !this.$el.is(".blog_next_prev_buttons") &&
            !this.$el.is("#portfolio-nav"))) &&
          (this.firstSection = !0),
        ((0 == $(".wpb_row").length &&
          0 < this.$el.parents(".parallax_slider_outer").length &&
          this.$el.is('[data-full-width="true"]')) ||
          (0 < $("#portfolio-extra").length &&
            0 < this.$el.parents(".parallax_slider_outer").length &&
            0 < this.$el.parents(".wpb_row").length &&
            "0" == this.$el.parents(".wpb_row").index())) &&
          (this.firstSection = !0),
        gt.usingFrontEndEditor &&
          "page-header" != this.type &&
          (this.firstSection = !1),
        this.$parallaxEl.addClass("translate"),
        (this.nestedParallax =
          0 <
          this.$parallaxEl.parents('[data-scroll-animation="true"]').length),
        this.nestedParallax ||
          setInterval(function () {
            1 != ft.materialOffCanvasOpen &&
              1 != ft.ocmAnimating &&
              ((t.offsetTop = t.$el.offset().top),
              (t.height = t.$el.outerHeight(!0)));
          }, 800),
        $(T).on(
          "nectar-column-animation-start",
          this.checkColumnAnimation.bind(this)
        ),
        $(T).on("resize load", this.resize.bind(this)),
        T.addEventListener("orientationchange", function () {
          this.setTimeout(function () {
            t.orientationChange();
          }, 110);
        }),
        (this.offsetTop = this.$el.offset().top),
        (this.height = this.$el.outerHeight(!0));
    }),
    (ze.prototype.checkColumnAnimation = function () {
      0 <
        this.$parallaxEl.parents(
          ".col.has-animation.triggered-animation:not(.animated-in)"
        ).length && this.realtimeOffsetUpdate();
    }),
    (ze.prototype.realtimeOffsetUpdate = function () {
      var t = this,
        e = setInterval(function () {
          1 != ft.materialOffCanvasOpen &&
            ((t.offsetTop = t.$el.offset().top),
            (t.height = t.$el.outerHeight(!0)));
        }, 30);
      setTimeout(function () {
        clearInterval(e);
      }, 2e3);
    }),
    (ze.prototype.resize = function () {
      gt.usingMobileBrowser
        ? this.nestedParallax ||
          ((this.offsetTop = this.$el.offset().top),
          (this.height = this.$el.outerHeight(!0)))
        : ((this.storedWinH = gt.winH),
          (this.offsetTop = this.$el.offset().top),
          (this.height = this.$el.outerHeight(!0)));
    }),
    (ze.prototype.orientationChange = function () {
      gt.usingMobileBrowser &&
        ((this.offsetTop = this.$el.offset().top),
        (this.height = this.$el.outerHeight(!0)),
        (this.storedWinH = gt.winH));
    }),
    (ze.prototype.update = function () {
      if (
        this.offsetTop + 150 + this.height < gt.scrollTop ||
        this.offsetTop - 150 > gt.scrollTop + this.storedWinH ||
        1 == ft.materialOffCanvasOpen
      ) {
        for (var t = 0; t < this.$parallaxEl.length; t++)
          this.$parallaxEl[t].style.willChange = "auto";
        requestAnimationFrame(this.update.bind(this));
      } else {
        for (t = 0; t < this.$parallaxEl.length; t++)
          !0 === this.firstSection
            ? (this.$parallaxEl[t].style.transform =
                "translate3d(0, " + gt.scrollTop * this.speed + "px, 0)")
            : (this.$parallaxEl[t].style.transform =
                "translate3d(0, " +
                (this.storedWinH + gt.scrollTop - this.offsetTop) * this.speed +
                "px, 0) scale(1.005)"),
            (this.$parallaxEl[t].style.willChange = "transform");
        requestAnimationFrame(this.update.bind(this));
      }
    }),
    $(T).on("salient-parallax-el-recalculate", He),
    (Se.prototype.setupProps = function () {
      var t = JSON.parse(
        this.$el[0].getAttribute("data-nectar-animate-settings")
      );
      "function" == typeof Object.assign &&
        (Object.assign(this.animations, t.animations),
        Object.assign(this.offsets, t.offsets),
        Object.assign(this, t.config)),
        (this.$el.is(".top-level") ||
          0 < this.$el.parents(".top-level").length ||
          (gt.usingFrontEndEditor &&
            1 === this.$el.parents(".vc_element").last().index())) &&
          (this.topLevel = !0),
        E.hasClass("single-portfolio") &&
          0 < this.$el.parents("#portfolio-extra").length &&
          0 < this.$el.parents(".first-section").length &&
          (this.topLevel = !0);
    }),
    (Se.prototype.lazyInit = function () {
      var e = this,
        e,
        a;
      !gt.usingFrontEndEditor &&
      "IntersectionObserver" in T &&
      !this.$el.hasClass("skip-lazy-init")
        ? ((e = this),
          (a = new IntersectionObserver(
            function (t) {
              t.forEach(function (t) {
                t.isIntersecting && (e.init(), a.unobserve(t.target));
              });
            },
            {
              root: jt() ? null : I,
              rootMargin: "400px 0px 400px 0px",
              threshold: 0,
            }
          )).observe(this.$el[0]))
        : this.init();
    }),
    (Se.prototype.init = function () {
      this.createTimeline(), this.events(), this.update();
    }),
    (Se.prototype.events = function () {
      var t = this;
      $(T).on("resize load", this.resize.bind(this)),
        T.addEventListener("orientationchange", function () {
          this.setTimeout(function () {
            t.orientationChange();
          }, 110);
        }),
        this.resize();
    }),
    (Se.prototype.resize = function () {
      gt.usingMobileBrowser || (this.storedWinH = gt.winH);
      var t = this.$el[0].getBoundingClientRect();
      (this.offsetTop = t.top + gt.scrollTop),
        (this.elHeight = this.$el[0].offsetHeight),
        this.setActiveDevice();
    }),
    (Se.prototype.orientationChange = function () {
      var t;
      gt.usingMobileBrowser &&
        ((t = this.$el[0].getBoundingClientRect()),
        (this.offsetTop = t.top + gt.scrollTop),
        (this.elHeight = this.$el[0].offsetHeight),
        (this.storedWinH = gt.winH));
    }),
    (Se.prototype.setActiveDevice = function () {
      var e = this;
      Object.keys(this.devices).forEach(function (t) {
        gt.winW >= e.devices[t].min &&
          gt.winW <= e.devices[t].max &&
          ((e.activeDevice = t),
          void 0 !== e.timelines[t] && e.timelines[t].reset());
      });
    }),
    (Se.prototype.createTimeline = function () {
      var i = this;
      Object.keys(this.devices).forEach(function (e) {
        var a, n, t;
        void 0 !== i.animations[e] &&
          ((i.timelines[e] = anime.timeline({ autoplay: !1 })),
          (a = {}),
          (n = {}),
          Object.keys(i.animations[e]).forEach(function (t) {
            (n[t] = i.animations[e][t].start),
              (a[t] = [i.animations[e][t].start, i.animations[e][t].end]);
          }),
          i.setActiveDevice(),
          (t = {
            targets:
              void 0 !== i.inner_selector
                ? i.$el[0].querySelectorAll(i.inner_selector)
                : i.$el[0],
            duration: 1e3,
            easing: "linear",
          }),
          Object.assign(t, a),
          i.timelines[e].add(t, 0));
      });
    }),
    (Se.prototype.progressValues = function () {
      var t, e, a, n, i, t, e, i, s;
      void 0 !== this.timelines[this.activeDevice] &&
        ((t = gt.scrollTop),
        (n =
          (e = this.storedWinH) - (a = parseInt(this.offsets.start) / 100) * e),
        "bottom" === this.offsets.origin && (n -= this.elHeight),
        (i = (t - (this.offsetTop - n)) / e),
        "0" === this.offsets.start &&
          "100" === this.offsets.end &&
          (i = (t - (this.offsetTop - n)) / (e + this.elHeight)),
        this.topLevel && ((n = 0), (i = t / e)),
        (t = Math.max(Math.min(i, 1), 0)),
        1 < (i = 2 + -1 * (e = parseInt(this.offsets.end) / 100)) &&
          (i *= 1 / Math.min(2 * (e - a - 0.01), 0.9)),
        0 < t
          ? ((this.needsReset = !0),
            this.timelines[this.activeDevice].seek(
              this.timelines[this.activeDevice].duration * t * i
            ))
          : this.needsReset &&
            (this.timelines[this.activeDevice].reset(),
            (this.needsReset = !1)));
    }),
    (Se.prototype.update = function () {
      1 != ft.materialOffCanvasOpen &&
        1 != ft.ocmAnimating &&
        this.progressValues(),
        requestAnimationFrame(this.update.bind(this));
    }),
    $(T).on("salient-parallax-bg-recalculate", Be),
    (Ve.prototype.calculatePos = function () {
      1 != ft.materialOffCanvasOpen &&
        1 != ft.ocmAnimating &&
        ((this.offsetTop = this.$element.offset().top),
        (this.height = this.$element.outerHeight()),
        (this.vertCenter = gt.winH / 2 - this.height / 2));
    }),
    (Ve.prototype.trackView = function () {
      var e = this,
        t;
      0 < this.$element.parents(".top-level").length && (this.topLevel = !0),
        "IntersectionObserver" in T &&
          ((t = { root: jt() ? null : I, rootMargin: "250px" }),
          new IntersectionObserver(function (t) {
            t.forEach(function (t) {
              var t = t.isIntersecting;
              e.inView = !!t;
            });
          }, t).observe(this.$element[0]));
    }),
    (Ve.prototype.animate = function () {
      var a;
      1 != ft.materialOffCanvasOpen &&
        (1 == ft.animatedScrolling && (this.inView = !0),
        (this.lastY = Yt(this.lastY, gt.scrollTop, 0.2)),
        this.inView &&
          (a = this).$element.find(".bg-layer").each(function (t) {
            var e = $(this).data("scale");
            a.layer1Parallax && (t = t / 1.5 + 1),
              !0 === a.topLevel && 1e3 < gt.winW
                ? ($(this)[0].style.transform =
                    "translateY(" +
                    -a.lastY * a.intensity * t +
                    "px) translateZ(0) scale(" +
                    e +
                    ")")
                : ($(this)[0].style.transform =
                    "translateY(" +
                    -(a.lastY - a.offsetTop + a.vertCenter) * a.intensity * t +
                    "px) translateZ(0) scale(" +
                    e +
                    ")");
          })),
        T.requestAnimationFrame(this.animate.bind(this));
    }),
    (Ne.prototype.mergeNeighbors = function () {
      var t = this.$el.parents(".wpb_row");
      0 < t.length &&
        0 <
          t.find(
            '.nectar-split-heading[data-text-effect="scroll-opacity-reveal"]'
          ).length &&
        ((this.$el = t),
        (this.mergedGroup = !0),
        t.addClass("nectar-split-heading-merged"));
    }),
    (Ne.prototype.trackInView = function () {
      var e = this;
      new IntersectionObserver(
        function (t) {
          t.forEach(function (t) {
            t.isIntersecting
              ? ((e.inView = !0),
                (e.elHeight = e.$el.outerHeight()),
                (e.offsetTop = e.$el.offset().top))
              : (e.inView = !1);
          });
        },
        {
          root: jt() ? null : I,
          rootMargin: "100px 0px 100px 0px",
          threshold: 0,
        }
      ).observe(this.$el[0]);
      var t = this.$el[0].getBoundingClientRect();
      t.top + gt.scrollTop + t.height < gt.winH && (this.topLevel = !0);
    }),
    (Ne.prototype.events = function () {
      gt.usingMobileBrowser
        ? T.addEventListener("orientationchange", this.calc.bind(this))
        : T.addEventListener("resize", this.calc.bind(this)),
        this.calc();
    }),
    (Ne.prototype.calc = function () {
      (this.offsetTop = this.$el.offset().top),
        (this.elHeight = this.$el.outerHeight()),
        (this.wordCount = (
          this.mergedGroup
            ? this.$el.find(".nectar-split-heading .inner")
            : this.$el.find(".inner")
        ).length),
        this.elHeight / gt.winH < 0.25 && this.wordCount < 40
          ? (this.speed = 2.5)
          : ((this.speed = Math.max(
              2 - Math.min(this.elHeight / gt.winH, 1.45),
              0.66
            )),
            (this.speed < 1.2 || (this.wordCount < 30 && this.speed < 1.5)) &&
              ((this.topCushion = 0.25 * gt.winH), (this.wordDelay = 250)));
    }),
    (Ne.prototype.createTimeline = function () {
      var a = this;
      this.timeline = anime.timeline({ autoplay: !1 });
      var t = {
        targets: this.mergedGroup
          ? this.$el[0].querySelectorAll(".nectar-split-heading .inner")
          : this.$el[0].querySelectorAll(".inner"),
        duration: this.duration,
        easing: "linear",
        opacity: [0.2, 1],
        delay: function (t, e) {
          return e * a.wordDelay;
        },
      };
      this.timeline.add(t, 0);
    }),
    (Ne.prototype.raf = function () {
      var t;
      this.inView &&
        1 != ft.materialOffCanvasOpen &&
        ((t = this.topLevel
          ? (gt.scrollTop / gt.winH) * 1.5
          : 1 + (gt.scrollTop - (this.offsetTop + this.topCushion)) / gt.winH),
        this.timeline.seek(t * this.timeline.duration * this.speed)),
        requestAnimationFrame(this.raf.bind(this));
    }),
    $(T).on("salient-lazyloading-image-reinit", ia),
    $(T).on("salient-lazyloading-image-reinit", sa),
    (la.prototype.initialMarkup = function () {
      0 == this.el.find(".nectar-post-grid-filters a.active").length &&
        this.el
          .find(".nectar-post-grid-filters a:first-child")
          .addClass("active"),
        "load-more" === this.settingsData.pagination &&
          0 == this.el.find(".load-more-wrap").length &&
          (0 < this.el.find(".active.all-filter").length &&
            (this.activeFilter =
              this.el.find(".active.all-filter").index() + 1),
          (this.activeCatTotal = parseInt(
            this.el
              .find(
                ".nectar-post-grid-filters a:nth-child(" +
                  this.activeFilter +
                  ")"
              )
              .attr("data-total-count")
          )),
          this.el.find(".nectar-post-grid-item").length >= this.activeCatTotal
            ? (this.el.addClass("all-loaded"),
              this.el.append(
                '<div class="load-more-wrap inactive"><a href="#" role="button" class="load-more">' +
                  this.el.attr("data-load-more-text") +
                  "</a></div>"
              ))
            : (this.el.removeClass("all-loaded"),
              this.el.append(
                '<div class="load-more-wrap"><a href="#" role="button" class="load-more">' +
                  this.el.attr("data-load-more-text") +
                  "</a></div>"
              )));
    }),
    (la.prototype.lightboxGroups = function () {
      var t = Zt(),
        e = 0 < this.el.find(".nectar-post-grid-link.pretty_photo").length;
      0 < $('body[data-ls="magnific"]').length
        ? this.el
            .find(".nectar-post-grid-link.pretty_photo")
            .addClass("magnific")
            .addClass("gallery")
            .removeClass("pretty_photo")
        : 0 < $('body[data-ls="fancybox"]').length &&
          (this.el
            .find(".nectar-post-grid-link.pretty_photo")
            .attr("data-fancybox", "group_" + t)
            .removeClass("pretty_photo"),
          this.el
            .find(".nectar-post-grid-link[data-fancybox]")
            .attr("data-fancybox", "group_" + t)),
        e && se();
    }),
    (la.prototype.externalProjectLinks = function () {
      this.el.hasClass("target-blank-external-urls") &&
        (this.el
          .find(
            ".nectar-post-grid-item a[href*='http://']:not([href*='" +
              T.location.hostname +
              "'])"
          )
          .attr("target", "_blank"),
        this.el
          .find(
            ".nectar-post-grid-item a[href*='https://']:not([href*='" +
              T.location.hostname +
              "'])"
          )
          .attr("target", "_blank"));
    }),
    (la.prototype.clickEvents = function () {
      this.el.find(".nectar-post-grid-filters h4").on("click", function () {
        $(this).parent().find("div").toggleClass("visible"),
          $(this).toggleClass("visible");
      }),
        "content_under_image" == this.gridStyle &&
          0 < this.el.find(".nectar-post-grid-link.pretty_photo").length &&
          this.el.on("click", ".bg-wrap-link", function () {
            if (
              0 <
              $(this)
                .parents(".nectar-post-grid-item")
                .find(".nectar-post-grid-link").length
            )
              return (
                $(this)
                  .parents(".nectar-post-grid-item")
                  .find(".nectar-post-grid-link")[0]
                  .click(),
                !1
              );
          });
      var d = this.settingsData,
        c = this.queryData,
        h = this;
      this.el
        .find(".nectar-post-grid-filters a, .load-more-wrap .load-more")
        .on("click", function (t) {
          var a = $(this);
          if (
            0 < a.parents(".nectar-post-grid-wrap.loading").length ||
            $(this).hasClass("active") ||
            $(this).hasClass("inactive")
          )
            return !1;
          0 < $(this).parents(".nectar-post-grid-filters").length
            ? (a.parent().find("a").removeClass("active"),
              a.addClass("active"),
              (h.currentPage = 0),
              (h.activeFilter = a.index() + 1))
            : h.currentPage++;
          var n = a.parents(".nectar-post-grid-wrap").find(".nectar-post-grid"),
            i = d.pagination,
            s =
              a.hasClass("load-more") && "load-more" === i
                ? "load-more"
                : "filter",
            e = "",
            r = "",
            o,
            r =
              "yes" === h.sortable
                ? ((e = a
                    .parents(".nectar-post-grid-wrap")
                    .find(".nectar-post-grid-filters a.active")
                    .attr("data-filter")),
                  a
                    .parents(".nectar-post-grid-wrap")
                    .find(".nectar-post-grid-filters a.active")
                    .attr("data-filter"))
                : ((o =
                    1 <
                    a
                      .parents(".nectar-post-grid-wrap")
                      .find(".nectar-post-grid-filters a").length
                      ? ":not(.all-filter)"
                      : ""),
                  a
                    .parents(".nectar-post-grid-wrap")
                    .find(".nectar-post-grid-filters a" + o)
                    .each(function () {
                      (e += $(this).attr("data-filter") + ", "),
                        (r += $(this).attr("data-filter") + ", ");
                    }),
                  (e = e.substring(0, e.length - 2)),
                  r.substring(0, r.length - 2)),
            l = {
              action: "nectar_get_post_grid_segment",
              post_type: c.post_type,
              cpt_name: c.cpt_name,
              custom_query_tax: r,
              category: e,
              posts_per_page: c.posts_per_page,
              current_page: h.currentPage,
              offset: c.offset,
              order: c.order,
              orderby: c.orderby,
              load_action: s,
              ignore_sticky_posts: c.ignore_sticky_posts,
              settings: {
                pagination: i,
                animation: d.animation,
                post_type: d.post_type,
                image_size: d.image_size,
                parallax_scrolling: d.parallax_scrolling,
                aspect_ratio_image_size: d.aspect_ratio_image_size,
                card_bg_color: d.card_bg_color,
                category_position: d.category_position,
                category_display: d.category_display,
                display_categories: d.display_categories,
                display_estimated_reading_time:
                  d.display_estimated_reading_time,
                display_excerpt: d.display_excerpt,
                excerpt_length: d.excerpt_length,
                display_date: d.display_date,
                display_author: d.display_author,
                author_functionality: d.author_functionality,
                author_position: d.author_position,
                color_overlay: d.color_overlay,
                color_overlay_opacity: d.color_overlay_opacity,
                color_overlay_hover_opacity: d.color_overlay_hover_opacity,
                grid_style: d.grid_style,
                hover_effect: d.hover_effect,
                heading_tag: d.heading_tag,
                post_title_overlay: d.post_title_overlay,
                category_style: d.category_style,
                enable_gallery_lightbox: d.enable_gallery_lightbox,
                overlay_secondary_project_image:
                  d.overlay_secondary_project_image,
                vertical_list_hover_effect: d.vertical_list_hover_effect,
                vertical_list_read_more: d.vertical_list_read_more,
                read_more_button: d.read_more_button,
              },
            };
          "rand" == c.orderby &&
            "load-more" == s &&
            ((l.posts_shown = ""),
            n.find(".nectar-post-grid-item[data-post-id]").each(function () {
              l.posts_shown += $(this).attr("data-post-id") + ", ";
            }),
            (l.posts_shown = l.posts_shown.substring(
              0,
              l.posts_shown.length - 2
            ))),
            a.parents(".nectar-post-grid-wrap").addClass("loading"),
            $.post(T.nectarLove.ajaxurl, l, function (t) {
              var e, t;
              "load-more" == s
                ? n.append(t)
                : (n.html(t),
                  (n
                    .parent()
                    .hasClass("nectar-post-grid-wrap--fl-sidebar_left") ||
                    n
                      .parent()
                      .hasClass("nectar-post-grid-wrap--fl-sidebar_right")) &&
                    ((e = n.parent().offset().top),
                    (t = 0) ==
                      $(".page-template-template-no-header-footer").length &&
                      0 == $(".page-template-template-no-header").length &&
                      0 == $('body[data-header-format="left-header"]').length &&
                      (t = $("#header-outer").height()),
                    999 < gt.winW &&
                      gt.scrollTop > e + 200 &&
                      T.scrollTo(0, e - t))),
                be(),
                n.is("[data-animation]") &&
                  !n.is('[data-animation="none"]') &&
                  (a
                    .parents(".nectar-post-grid-wrap")
                    .removeClass("finished-animating"),
                  n
                    .find(".nectar-post-grid-item:not(.animated-in)")
                    .each(function (t) {
                      0 < $(this).find(".nectar-split-heading").length &&
                        An($(this).find(".nectar-split-heading"));
                      var e = $(this);
                      setTimeout(function () {
                        e.addClass("animated-in"),
                          "zoom-out-reveal" === d.animation &&
                            Hn(e, function () {
                              Sn(e);
                            });
                      }, 90 * t);
                    }),
                  setTimeout(function () {
                    a.parents(".nectar-post-grid-wrap").addClass(
                      "finished-animating"
                    );
                  }, 950)),
                "load-more" === i &&
                  ((h.activeCatTotal = parseInt(
                    h.el
                      .find(
                        ".nectar-post-grid-filters a:nth-child(" +
                          h.activeFilter +
                          ")"
                      )
                      .attr("data-total-count")
                  )),
                  n.find(".nectar-post-grid-item").length >= h.activeCatTotal
                    ? (h.el.find(".load-more-wrap").addClass("inactive"),
                      h.el.addClass("all-loaded"))
                    : (h.el.find(".load-more-wrap").removeClass("inactive"),
                      h.el.removeClass("all-loaded"))),
                h.lightboxGroups(),
                h.externalProjectLinks(),
                a.parents(".nectar-post-grid-wrap").removeClass("loading"),
                g.trigger("resize"),
                $(T).trigger("nectar-post-grid-updated"),
                ra();
            }),
            t.preventDefault();
        });
    }),
    (la.prototype.deepLinking = function () {
      void 0 !== ee["grid-filter"] &&
        this.el.find(".nectar-post-grid-filters a").each(function () {
          var t = $(this).clone(),
            e = ee["grid-filter"];
          $(this),
            (t =
              0 <
                (t = (t = t.text()).replace(/\s+/g, "-").toLowerCase())
                  .length && "-" === t.substring(0, 1)
                ? t.substring(1)
                : t) ==
              (e = e
                .replace(/\s+/g, "-")
                .replace(/</g, "&lt;")
                .replace(/"/g, "&quot;")
                .toLowerCase()) && $(this).trigger("click");
        });
    }),
    ($.DLMenu = function (t, e) {
      (this.$el = $(e)), this._init(t);
    }),
    ($.DLMenu.defaults = {
      animationClasses: {
        classin: "dl-animate-in-1",
        classout: "dl-animate-out-1",
      },
      onLevelClick: function () {
        return !1;
      },
      onLinkClick: function () {
        return !1;
      },
    }),
    ($.DLMenu.prototype = {
      _init: function (t) {
        (this.options = $.extend(!0, {}, $.DLMenu.defaults, t)),
          this._config(),
          (this.animEndEventName = "animationend.menu"),
          (this.transEndEventName = "transitionend.menu"),
          (this.supportAnimations = !0),
          (this.supportTransitions = !0),
          this._initEvents();
      },
      _config: function () {
        (this.open = !1),
          (this.$trigger = this.$el.children(".trigger")),
          (this.$menu = this.$el.children("ul.menu")),
          (this.$menuitems = this.$menu.find("li:not(.back) > a")),
          this.$el
            .find("ul.sub-menu")
            .prepend(
              '<li class="back"><a href="#"> ' +
                h.attr("data-back-txt") +
                " </a></li>"
            ),
          (this.$back = this.$menu.find("li.back"));
      },
      _initEvents: function () {
        var s = this;
        this.$trigger.on("click.menu", function () {
          return s.open ? s._closeMenu() : s._openMenu(), !1;
        }),
          this.$menuitems.on("click.menu", function (t) {
            var e = $(this).parent("li"),
              a = e.children("ul.sub-menu");
            if (
              ($(
                ".fullscreen-alt .off-canvas-menu-container .clip-wrap, .fullscreen-alt .off-canvas-menu-container .clip-wrap span"
              ).css("transition-duration", "0s"),
              0 < a.length)
            ) {
              var n = a.clone().css("opacity", 0).insertAfter(s.$menu),
                i = function () {
                  s.$menu
                    .off(s.animEndEventName)
                    .removeClass(s.options.animationClasses.classout)
                    .addClass("subview"),
                    e
                      .addClass("subviewopen")
                      .parents(".subviewopen:first")
                      .removeClass("subviewopen")
                      .addClass("subview"),
                    n.remove(),
                    setTimeout(function () {
                      $(".off-canvas-menu-container .menu > li").removeClass(
                        "no-pointer-events"
                      ),
                        $(
                          ".off-canvas-menu-container .clip-wrap, .off-canvas-menu-container .clip-wrap span"
                        ).css("transition-duration", ".45s");
                    }, 300);
                };
              return (
                setTimeout(function () {
                  n.addClass(s.options.animationClasses.classin),
                    s.$menu.addClass(s.options.animationClasses.classout),
                    s.supportAnimations
                      ? s.$menu.on(s.animEndEventName, i)
                      : i.call(),
                    s.options.onLevelClick(e, e.children("a:first").text());
                }),
                e
                  .parents(".menu-wrap")
                  .css(
                    "height",
                    e
                      .parents(".off-canvas-menu-container")
                      .find(".menuwrapper .menu")
                      .height()
                  )
                  .transition({ height: n.height() }, 500, "easeInOutQuad"),
                setTimeout(Aa, 600),
                !1
              );
            }
            s.options.onLinkClick(e.find("> a"), t), Ra(e);
          }),
          this.$back.on("click.menu", function () {
            var e = $(this),
              t = e.parents("ul.sub-menu:first"),
              a = t.parent(),
              n = t.clone().insertAfter(s.$menu),
              i = function () {
                s.$menu
                  .off(s.animEndEventName)
                  .removeClass(s.options.animationClasses.classin),
                  n.remove();
              };
            return (
              setTimeout(function () {
                n.addClass(s.options.animationClasses.classout),
                  s.$menu.addClass(s.options.animationClasses.classin),
                  s.supportAnimations
                    ? s.$menu.on(s.animEndEventName, i)
                    : i.call(),
                  a.removeClass("subviewopen");
                var t = e.parents(".subview:first");
                t.is("li") && t.addClass("subviewopen"),
                  t.removeClass("subview");
              }),
              setTimeout(function () {
                a
                  .parents(".menu-wrap")
                  .transition(
                    { height: a.parent().height() },
                    500,
                    "easeInOutQuad"
                  ),
                  setTimeout(Aa, 600);
              }, 50),
              !1
            );
          });
      },
      closeMenu: function () {
        this.open && this._closeMenu();
      },
      _closeMenu: function () {
        var t = this,
          e = function () {
            t.$menu.off(t.transEndEventName), t._resetMenu();
          };
        this.$menu.removeClass("menuopen"),
          this.$menu.addClass("menu-toggle"),
          this.$trigger.removeClass("active"),
          this.supportTransitions
            ? this.$menu.on(this.transEndEventName, e)
            : e.call(),
          (this.open = !1);
      },
      openMenu: function () {
        this.open || this._openMenu();
      },
      _openMenu: function () {
        var t = this;
        E.off("click").on("click.menu", function () {
          t._closeMenu();
        }),
          this.$menu
            .addClass("menuopen menu-toggle")
            .on(this.transEndEventName, function () {
              $(this).removeClass("menu-toggle");
            }),
          this.$trigger.addClass("active"),
          (this.open = !0);
      },
      _resetMenu: function () {
        this.$menu.removeClass("subview"),
          this.$menuitems.removeClass("subview subviewopen");
      },
    });
  var Va,
    Xa = function (t) {
      T.console && T.console.error(t);
    };
  function Na() {
    var t = parseInt(d.outerHeight());
    $(
      'body[data-aie="slide-down"] #page-header-wrap:not(.fullscreen-header):not([data-responsive="true"])'
    ).css("height", t + "px");
  }
  function Da() {
    0 != $("#ajax-content-wrap").length && E.hasClass("ajax-loaded")
      ? 1 == $("#ajax-content-wrap").length &&
        $('#page-header-bg[data-parallax="1"]').css({ opacity: 1 })
      : $('#page-header-bg[data-parallax="1"]').animate(
          { opacity: 1 },
          350,
          "easeInCubic"
        ),
      $('#page-header-bg[data-parallax="1"] .nectar-particles').append(
        '<div class="fade-out" />'
      );
  }
  function Qa() {
    var t = { inView: !0 },
      e = $("#page-header-bg .span_6 .inner-wrap"),
      a = $("#page-header-bg #canvas"),
      n,
      i,
      s,
      r,
      o;
    0 < $('#page-header-bg[data-parallax="1"]').length &&
      ((n = new Image()),
      (i = parseInt(d.height())),
      (s = $("#header-space").height()),
      (r =
        0 < $(".nectar-global-section.after-nav").length
          ? $(".nectar-global-section.after-nav").height()
          : 0),
      (o = Jt(
        $('#page-header-bg[data-parallax="1"]').css("background-image")
      )) && -1 !== o.indexOf(".")
        ? ((n.onload = function () {
            Da();
          }),
          (n.src = Jt(
            $('#page-header-bg[data-parallax="1"]').css("background-image")
          )))
        : Da(),
      1e3 < gt.winW && l(),
      T.addEventListener(
        "scroll",
        function () {
          1e3 < gt.winW && T.requestAnimationFrame(l);
        },
        !1
      ));
    var n =
        0 < $('body[data-ajax-transitions="true"]').length &&
        0 < $('#page-header-bg[data-animate-in-effect="slide-down"]').length
          ? 350
          : 0,
      n;
    function l() {
      1e3 <= gt.winW &&
        null == navigator.userAgent.match(/iPad/i) &&
        1 != ft.materialOffCanvasOpen &&
        (1 == t.inView &&
          (e.css({
            transform: "translateY(" + 0.15 * gt.scrollTop + "px)",
            opacity: 1 - gt.scrollTop / (0.7 * (r + i)),
          }),
          a &&
            a.css({
              transform: "translateY(" + 0.15 * gt.scrollTop * 2 + "px)",
            })),
        1 < gt.scrollTop / (i + s + gt.adminBarHeight)
          ? ((t.inView = !1),
            $(".nectar-particles, #page-header-bg .fade-out")
              .css("visibility", "hidden")
              .addClass("out-of-sight"),
            $("#page-header-bg").addClass("out-of-sight"))
          : ((t.inView = !0),
            $("#page-header-bg, .nectar-particles, #page-header-bg .fade-out")
              .css("visibility", "visible")
              .removeClass("out-of-sight")));
    }
    0 < d.length &&
      (setTimeout(function () {
        Na();
      }, n),
      $('#page-header-bg[data-animate-in-effect="fade-in"]').addClass("loaded"),
      (n = Jt(d.css("background-image"))) &&
        -1 !== n.indexOf(".") &&
        d.addClass("has-bg"),
      g.on("smartresize", Na)),
      0 < d.length &&
        (((-1 != navigator.userAgent.indexOf("Safari") &&
          -1 == navigator.userAgent.indexOf("Chrome")) ||
          navigator.userAgent.match(/(iPod|iPhone|iPad)/)) &&
          (T.onunload = function () {
            Qa(),
              $('#page-header-bg[data-parallax="1"] .span_6').css({
                opacity: 1,
              });
          }),
        0 == $(".nectar-box-roll").length && Ga());
  }
  function Za() {
    var t;
    ((0 == $("#page-header-bg .nectar-particles").length &&
      0 == $('#page-header-bg[data-text-effect="none"]').length) ||
      (0 < $(".nectar-box-roll").length &&
        0 == $("#page-header-bg .nectar-particles").length)) &&
      ((t =
        0 == $(".nectar-box-roll").length
          ? "#page-header-bg .span_6"
          : ".nectar-box-roll .overlaid-content .span_6"),
      $(t)
        .find(".wraped")
        .each(function (t) {
          $(this)
            .find("span")
            .delay(370 * t)
            .transition({ rotateX: "0", opacity: 1, y: 0 }, 400, "easeOutQuad");
        }),
      setTimeout(function () {
        $(t)
          .find(".inner-wrap > *:not(.top-heading)")
          .each(function (t) {
            $(this)
              .delay(370 * t)
              .transition(
                { rotateX: "0", opacity: 1, y: 0 },
                650,
                "easeOutQuad"
              );
          }),
          $(
            ".scroll-down-wrap, .scroll-down-wrap .section-down-arrow"
          ).removeClass("hidden");
      }, 370 * $(t).find(".wraped").length));
  }
  function Ga() {
    d.each(function () {
      var t, e;
      "rotate_in" != $(this).attr("data-text-effect") ||
        ((t = "none") !=
          (t = 0 < $(this).find(".span_6 h1").length ? "h1" : t) &&
          ((e =
            0 < $(this).find(".nectar-particles").length
              ? ".inner-wrap.shape-1"
              : ".span_6"),
          $(this)
            .find(e)
            .find(t)
            .addClass("top-heading")
            .contents()
            .filter(function () {
              return (
                3 === this.nodeType &&
                void 0 !== this.data &&
                this.data.replace(/\s+/, "")
              );
            })
            .wrap('<span class="wraped"></span>'),
          $(this)
            .find(e)
            .find(".wraped")
            .each(function () {
              var t = $(this),
                e = t.text().split(" "),
                a = "";
              $.each(e, function (t, e) {
                e.replace(/\s+/, "") &&
                  (a += '<span class="wraped"><span>' + e + "</span></span> ");
              }),
                t.replaceWith($(a));
            })));
    });
    var t = 0 < n.length ? 800 : 0;
    0 == $("#page-header-bg .nectar-video-wrap video").length &&
      setTimeout(Za, t);
  }
  function Ua() {
    var n;
    0 < $('#header-outer[data-permanent-transparent="1"]').length &&
      0 < $('body[data-bg-header="true"]').length &&
      (0 == $(".container-wrap div[data-midnight]").length &&
        $(".container-wrap").attr("data-midnight", "dark"),
      (n = []),
      $("div[data-midnight]:not(.has-global-section)").each(function () {
        (("light" == $(this).attr("data-midnight") &&
          0 == $(this).parents(".pum-content").length) ||
          ("dark" == $(this).attr("data-midnight") &&
            0 == $(this).parents(".pum-content").length)) &&
          (($(this).is("#page-header-bg") &&
            0 < $(this).parents("#page-header-wrap[data-midnight]").length) ||
            n.push($(this)));
      }),
      0 < n.length &&
        $.each(n, function (e, t) {
          var a;
          ("light" != t.attr("data-midnight") &&
            "dark" != t.attr("data-midnight")) ||
            ((a = t),
            new Waypoint({
              element: a[0],
              handler: function (t) {
                var t;
                0 < $("body.material-ocm-open").length ||
                  0 < $("#slide-out-widget-area.open").length ||
                  "none" == a.css("display") ||
                  ((t =
                    "down" == t
                      ? "light" == a.attr("data-midnight")
                        ? ""
                        : "dark-slide"
                      : "light" ==
                        n[0 <= e - 1 ? e - 1 : e].attr("data-midnight")
                      ? ""
                      : "dark-slide"),
                  u.removeClass("dark-slide").addClass(t));
              },
              offset: u.height(),
            }));
        }));
  }
  function Ja() {
    0 < $(".nectar-box-roll").length &&
      "undefined" != typeof NectarBoxRoll &&
      (Ga(),
      $(T).on("nectar-box-roll-scroll-disabled", function () {
        ft.preventScroll = !0;
      }),
      $(T).on("nectar-box-roll-scroll-enabled", function () {
        ft.preventScroll = !1;
      }),
      ((ut = new NectarBoxRoll(gt, Ka, Ua, Gn, ka)).inUse = !0));
  }
  function Ka() {
    var i,
      s,
      r,
      n,
      o,
      l,
      a,
      d,
      c,
      t,
      h,
      s = 1 == dt ? "500%" : "93%",
      r = 1 == dt ? "500%" : "95%";
    $(
      lt +
        '.row-bg-wrap[data-bg-animation]:not([data-bg-animation="none"]) .row-bg'
    ).each(function () {
      var t = $(this).parents(".row-bg-wrap").attr("data-bg-animation"),
        e =
          0 < $(this).parents(".row-bg-wrap[data-bg-animation-delay]").length
            ? $(this).parents(".row-bg-wrap").attr("data-bg-animation-delay")
            : 0;
      i = "zoom-out-reveal" != t && -1 == t.indexOf("reveal-from-") ? s : r;
      var a = $(this),
        n = new Waypoint({
          element: a.parents(".row-bg-wrap")[0],
          handler: function () {
            (0 < a.parents(".wpb_tab").length &&
              "hidden" == a.parents(".wpb_tab").css("visibility")) ||
              a.hasClass("animated-in") ||
              setTimeout(function () {
                a.parents(".inner-wrap").addClass("animated-in"),
                  ("zoom-out-reveal" == t ||
                    -1 < t.indexOf("reveal-from-") ||
                    0 < a.parents(".nectar-scrolling-text").length) &&
                    a.parents(".row-bg-wrap").addClass("animated-in"),
                  "clip-path" == t &&
                    a.parents(".wpb_row ").addClass("animated-in");
              }, e),
              n.destroy();
          },
          offset: i,
        });
    }),
      (o = 1 == dt ? "500%" : "93%"),
      (l = 1 == dt ? "500%" : "80%"),
      $(
        lt +
          '.column-image-bg-wrap[data-bg-animation]:not([data-bg-animation="none"]) .column-image-bg'
      ).each(function () {
        var t = $(this)
          .parents(".column-image-bg-wrap")
          .attr("data-bg-animation");
        n =
          "zoom-out-reveal" != t && -1 == t.indexOf("reveal-from-")
            ? o
            : "ro-reveal-from-bottom" == t && 0 == dt
            ? "95%"
            : "ro-reveal-from-top" == t && 0 == dt
            ? "65%"
            : l;
        var e = $(this),
          a = new Waypoint({
            element: e.parents(".column-image-bg-wrap")[0],
            handler: function () {
              (0 < e.parents(".wpb_tab").length &&
                "hidden" == e.parents(".wpb_tab").css("visibility")) ||
                e.hasClass("animated-in") ||
                (e.parents(".inner-wrap").addClass("animated-in"),
                ("zoom-out-reveal" == t || -1 < t.indexOf("reveal-from-")) &&
                  (e.parents(".column-image-bg-wrap").addClass("animated-in"),
                  e
                    .parents(".column-image-bg-wrap")
                    .siblings(".column-bg-overlay-wrap")
                    .addClass("animated-in"),
                  e.parents(".vc_column-inner").addClass("revealed-bg")),
                "mask-reveal" == t &&
                  e
                    .parents(".vc_column-inner")
                    .find(".column-bg-layer")
                    .addClass("animated-in")),
                a.destroy();
            },
            offset: n,
          });
      }),
      $(lt + ".column-bg-overlay-wrap[data-bg-animation]").each(function () {
        n = l;
        var t = $(this),
          e = $(this).attr("data-bg-animation"),
          a;
        ("zoom-out-reveal" == e ||
          "mask-reveal" == e ||
          0 < e.indexOf("reveal-from-")) &&
          0 == t.parent().find(".column-image-bg-wrap").length &&
          (a = new Waypoint({
            element: t[0],
            handler: function () {
              t.hasClass("animated-in") ||
                (t.addClass("animated-in"),
                t.parents(".vc_column-inner").addClass("revealed-bg")),
                a.destroy();
            },
            offset: n,
          }));
      }),
      Ye(),
      De(),
      Ue(),
      (a = 1 == dt ? "250%" : "75%"),
      $(lt + '.nectar-icon-list[data-animate="true"]').each(function () {
        var t = $(this),
          e = new Waypoint({
            element: t[0],
            handler: function () {
              (0 < t.parents(".wpb_tab").length &&
                "hidden" == t.parents(".wpb_tab").css("visibility")) ||
                t.hasClass("completed") ||
                (t.each(function () {
                  var a = t.is('[data-direction="horizontal"]') ? 100 : 300;
                  $(this)
                    .find(".nectar-icon-list-item")
                    .each(function (t) {
                      var e = $(this);
                      setTimeout(function () {
                        e.addClass("animated");
                      }, t * a);
                    });
                }),
                t.addClass("completed")),
                e.destroy();
            },
            offset: a,
          });
      }),
      ca(),
      ha(),
      ta(),
      (d = 1 == dt ? "200%" : "95%"),
      $(lt + ".clients.fade-in-animation").each(function () {
        var t = $(this),
          e = new Waypoint({
            element: t[0],
            handler: function () {
              (0 < t.parents(".wpb_tab").length &&
                "hidden" == t.parents(".wpb_tab").css("visibility")) ||
                t.hasClass("animated-in") ||
                (t.find("> div").each(function (t) {
                  $(this)
                    .delay(80 * t)
                    .transition({ opacity: "1" }, 450);
                }),
                setTimeout(function () {
                  t.addClass("completed");
                }, 80 * t.find("> div").length + 450),
                t.addClass("animated-in")),
                e.destroy();
            },
            offset: d,
          });
      }),
      Xe(),
      (c = 1 == dt ? "500%" : "bottom-in-view"),
      0 == B.length ||
      (gt.usingFrontEndEditor && 0 < $("#nectar_fullscreen_rows").length)
        ? ($(".svg-icon-holder:not(.animated-in)")
            .has("svg")
            .each(function (t) {
              var a = $(this);
              A && a.attr("data-animation", "false"),
                a
                  .find("svg")
                  .css({
                    height: parseInt(a.attr("data-size")) + "px",
                    width: parseInt(a.attr("data-size")) + "px",
                  }),
                $(this)
                  .find("svg")
                  .attr("id", "nectar-svg-animation-instance-" + t);
              var e =
                  a.is("[data-animation-speed]") &&
                  0 < a.attr("data-animation-speed").length
                    ? a.attr("data-animation-speed")
                    : 200,
                n;
              function i() {
                var t = 0;
                a.is("[data-animation-delay]") &&
                  0 < a.attr("data-animation-delay").length &&
                  "false" != a.attr("data-animation") &&
                  (t = a.attr("data-animation-delay"));
                var e = a
                  .find("svg")
                  .attr("id")
                  .replace(/[^0-9]/g, "");
                1 == B[e].isReady
                  ? setTimeout(function () {
                      a.css("opacity", "1"), B[e].reset().play();
                    }, t)
                  : setTimeout(i, 50);
              }
              "false" == a.attr("data-animation") &&
                ((e = 1), a.css("opacity", "1")),
                a.hasClass("bound") ||
                  (B[t] = new Vivus(a.find("svg").attr("id"), {
                    type: "delayed",
                    pathTimingFunction: Vivus.EASE_OUT,
                    animTimingFunction: Vivus.LINEAR,
                    duration: e,
                    onReady: function () {
                      a.css({
                        height: parseInt(a.attr("data-size")) + "px",
                        width: parseInt(a.attr("data-size")) + "px",
                      });
                    },
                  })),
                1 !== e
                  ? (n = new Waypoint({
                      element: a[0],
                      handler: function () {
                        a.hasClass("animated-in") ||
                          (i(), a.addClass("animated-in")),
                          n.destroy();
                      },
                      offset: c,
                    }))
                  : i(),
                a.addClass("bound");
            }),
          0 <
            $('.vc_row-o-equal-height .svg-icon-holder[data-animation="true"]')
              .length &&
            0 == $("#nectar_fullscreen_rows").length &&
            g.on("smartresize", function () {
              clearTimeout(e),
                (e = setTimeout(function () {
                  0 < B.length &&
                    $(".svg-icon-holder.animated-in").each(function () {
                      var t;
                      $(this).css("opacity", "1"),
                        $(this).is("[id]") &&
                          ((t = $(this)
                            .attr("id")
                            .replace(/[^0-9]/g, "")),
                          B[t].finish());
                    });
                }, 300));
            }))
        : $(".svg-icon-holder").addClass("animated-in").css("opacity", "1"),
      $("#nectar_fullscreen_rows .svg-icon-holder.animated-in")
        .has("svg")
        .each(function (t) {
          var e = 0;
          $(this).is("[data-animation-delay]") &&
            0 < $(this).attr("data-animation-delay").length &&
            "false" != $(this).attr("data-animation") &&
            (e = $(this).attr("data-animation-delay"));
          var a = $(this),
            n = a
              .find("svg")
              .attr("id")
              .replace(/[^0-9]/g, "");
          clearTimeout(at[t]),
            "false" == a.attr("data-animation")
              ? (a.css("opacity", "1"), B[n].finish())
              : 0 < $(this).parents(".active").length ||
                0 < $(this).parents("#footer-outer").length ||
                0 < $("body.mobile").length
              ? (B[n].reset(),
                (at[t] = setTimeout(function () {
                  B[n].play();
                }, e)))
              : B[n].reset().stop();
        }),
      $(".nectar-milestone").each(function () {
        var t;
        $(this).is("[data-symbol]") &&
          (0 == $(this).find(".symbol-wrap").length &&
            ("before" == $(this).attr("data-symbol-pos")
              ? $(this)
                  .find(".number")
                  .prepend(
                    '<div class="symbol-wrap"><span class="symbol">' +
                      Vt($(this).attr("data-symbol")) +
                      "</span></div>"
                  )
              : $(this)
                  .find(".number")
                  .append(
                    '<div class="symbol-wrap"><span class="symbol">' +
                      Vt($(this).attr("data-symbol")) +
                      "</span></div>"
                  )),
          (t =
            $(this).attr("data-symbol-size") ==
              $(this).find(".number").attr("data-number-size") &&
            "superscript" == $(this).attr("data-symbol-alignment")
              ? 32
              : parseInt($(this).attr("data-symbol-size"))),
          $(this)
            .find(".symbol-wrap")
            .css({ "font-size": t + "px", "line-height": t + "px" })),
          $(this)
            .find(".number")
            .css({
              "font-size":
                $(this).find(".number").attr("data-number-size") + "px",
              "line-height":
                $(this).find(".number").attr("data-number-size") + "px",
            });
      }),
      ((!A && 0 < $(".nectar-milestone").length) ||
        (E.hasClass("rtl") && 0 < $(".nectar-milestone").length)) &&
        ((h = ""),
        $(lt + ".nectar-milestone.motion_blur").each(function (t) {
          $(this).removeClass(function (t, e) {
            return (e.match(/(^|\s)instance-\S+/g) || []).join(" ");
          }),
            $(this).addClass("instance-" + t);
          var e = $(this).find(".number").css("color"),
            a = parseInt(e.substring(1), 16),
            n = (16711680 & a) >> 16,
            i = (65280 & a) >> 8,
            e = (255 & a) >> 0,
            a = "rgba(" + n + "," + i + "," + e + ",0.2)",
            i = "rgba(" + n + "," + i + "," + e + ",1)",
            e = parseInt($(this).find(".number").attr("data-number-size")),
            i,
            t,
            s;
          (h +=
            "@keyframes motion-blur-number-" +
            t +
            " {  0% { opacity: 0;color: " +
            a +
            "; text-shadow: 0 " +
            e / 20 +
            "px 0 " +
            a +
            ", 0 " +
            e / 10 +
            "px 0 " +
            a +
            ", 0 " +
            e / 6 +
            "px 0 " +
            a +
            ", 0 " +
            e / 5 +
            "px 0 " +
            a +
            ", 0 " +
            e / 4 +
            "px 0 " +
            a +
            ", 0 -" +
            e / 20 +
            "px 0 " +
            a +
            ", 0 -" +
            e / 10 +
            "px 0 " +
            a +
            ", 0 -" +
            e / 6 +
            "px 0 " +
            a +
            ", 0 -" +
            e / 5 +
            "px 0 " +
            a +
            ", 0 -" +
            e / 4 +
            "px 0 " +
            a +
            "; transform: translateZ(0px) translateY(-100%); -webkit-transform: translateZ(0px) translateY(-100%); } 33% { opacity: 1 }100% { color: " +
            i +
            "; text-shadow: none; transform: translateZ(0px) translateY(0px); -webkit-transform: translateZ(0px) translateY(0px); } } @-webkit-keyframes motion-blur-number-" +
            t +
            " {  0% { opacity: 0;color: " +
            a +
            "; text-shadow: 0 " +
            e / 20 +
            "px 0 " +
            a +
            ", 0 " +
            e / 10 +
            "px 0 " +
            a +
            ", 0 " +
            e / 6 +
            "px 0 " +
            a +
            ", 0 " +
            e / 5 +
            "px 0 " +
            a +
            ", 0 " +
            e / 4 +
            "px 0 " +
            a +
            ", 0 -" +
            e / 20 +
            "px 0 " +
            a +
            ", 0 -" +
            e / 10 +
            "px 0 " +
            a +
            ", 0 -" +
            e / 6 +
            "px 0 " +
            a +
            ", 0 -" +
            e / 5 +
            "px 0 " +
            a +
            ", 0 -" +
            e / 4 +
            "px 0 " +
            a +
            "; transform: translateZ(0px) translateY(-100%); -webkit-transform: translateZ(0px) translateY(-100%); } 33% { opacity: 1 }100% { color: " +
            i +
            "; text-shadow: none; transform: translateZ(0px) translateY(0px); -webkit-transform: translateZ(0px) translateY(0px); } } .nectar-milestone.motion_blur.instance-" +
            t +
            " .number span.in-sight { animation: 0.65s cubic-bezier(0, 0, 0.17, 1) 0s normal backwards 1 motion-blur-number-" +
            t +
            "; -webkit-animation: 0.65s cubic-bezier(0, 0, 0.17, 1) 0s normal backwards 1 motion-blur-number-" +
            t +
            "; } "),
            (0 == pt.$usingFullScreenRows &&
              0 != $(this).find(".number > span").length) ||
              ((i = $(this).find(".symbol-wrap").clone()),
              $(this).find(".symbol-wrap").remove(),
              (t = $(this).find(".number").text().split("")),
              (s = $(this).find(".number")).empty(),
              $.each(t, function (t, e) {
                s.append("<span>" + e + "</span");
              }),
              $(this).has("[data-symbol]") &&
                ("after" == $(this).attr("data-symbol-pos")
                  ? s.append(i)
                  : s.prepend(i)));
        }),
        ie(h, "milestone-blur"),
        le()),
      xe(),
      $(lt + '.owl-carousel[data-enable-animation="true"]').each(function () {
        var t = 1 == dt ? "200%" : "bottom-in-view",
          e = 0;
        $(this).is("[data-animation-delay]") &&
          0 < $(this).attr("data-animation-delay").length &&
          "false" != $(this).attr("data-animation") &&
          (e = $(this).attr("data-animation-delay"));
        var a = $(this),
          n = new Waypoint({
            element: a[0],
            handler: function () {
              (0 < a.parents(".wpb_tab").length &&
                "hidden" == a.parents(".wpb_tab").css("visibility")) ||
                a.hasClass("animated-in") ||
                setTimeout(function () {
                  a.find(".owl-stage > .owl-item").each(function (t) {
                    $(this)
                      .delay(200 * t)
                      .transition(
                        { opacity: "1", y: "0" },
                        600,
                        "easeOutQuart"
                      );
                  }),
                    a.addClass("animated-in");
                }, e),
                n.destroy();
            },
            offset: t,
          });
      }),
      0 < $('body[data-header-inherit-rc="true"]').length &&
        0 == $(".mobile").length &&
        0 < $('#header-outer[data-transparent-header="true"]').length &&
        ((t = b / 2 + w + gt.adminBarHeight),
        0 == $('#header-outer[data-permanent-transparent="1"]').length &&
          (t = b - y + Math.ceil((2 * w) / 1.8) + gt.adminBarHeight),
        $(".main-content > .row > .wpb_row").each(function () {
          var e,
            a = $(this);
          new Waypoint({
            element: a[0],
            handler: function (t) {
              "down" == t
                ? 0 < a.find(".row-bg.using-bg-color").length
                  ? ((e =
                      0 < a.find("> .col.span_12.light").length
                        ? "light-text"
                        : "dark-text"),
                    u
                      .css(
                        "background-color",
                        a.find(".row-bg").css("background-color")
                      )
                      .removeClass("light-text")
                      .removeClass("dark-text")
                      .addClass(e),
                    u.attr(
                      "data-current-row-bg-color",
                      a.find(".row-bg").css("background-color")
                    ),
                    $("body.material #header-outer .bg-color-stripe").css(
                      "background-color",
                      a.find(".row-bg").css("background-color")
                    ))
                  : (u
                      .css("background-color", u.attr("data-user-set-bg"))
                      .removeClass("light-text")
                      .removeClass("dark-text"),
                    u.attr(
                      "data-current-row-bg-color",
                      u.attr("data-user-set-bg")
                    ),
                    $("body.material #header-outer .bg-color-stripe").css(
                      "background-color",
                      ""
                    ))
                : 0 <
                  a.prev("div.wpb_row").find(".row-bg.using-bg-color").length
                ? ((e =
                    0 <
                    a.prev("div.wpb_row").find("> .col.span_12.light").length
                      ? "light-text"
                      : "dark-text"),
                  u
                    .css(
                      "background-color",
                      a
                        .prev("div.wpb_row")
                        .find(".row-bg")
                        .css("background-color")
                    )
                    .removeClass("light-text")
                    .removeClass("dark-text")
                    .addClass(e),
                  u.attr(
                    "data-current-row-bg-color",
                    a
                      .prev("div.wpb_row")
                      .find(".row-bg")
                      .css("background-color")
                  ),
                  $("body.material #header-outer .bg-color-stripe").css(
                    "background-color",
                    a
                      .prev("div.wpb_row")
                      .find(".row-bg")
                      .css("background-color")
                  ))
                : (u
                    .css("background-color", u.attr("data-user-set-bg"))
                    .removeClass("light-text")
                    .removeClass("dark-text"),
                  u.attr(
                    "data-current-row-bg-color",
                    u.attr("data-user-set-bg")
                  ),
                  $("body.material #header-outer .bg-color-stripe").css(
                    "background-color",
                    ""
                  ));
            },
            offset: t,
          });
        })),
      Ce(),
      Qe(),
      Ge(),
      re(),
      da(),
      (function () {
        if (0 < rt.length)
          for (var t = 0; t < rt.length; t++) clearInterval(rt[t].interval);
        (rt = []),
          $(".nectar-rotating-words-title").each(function (t) {
            var e = parseInt($(this).attr("data-rotation"));
            rt[t] = new oe($(this), e);
          });
      })(),
      Ze();
  }
  function tn() {
    var t, e, a, r, n, o;
    function i() {
      $('.blog-recent[data-style="title_only"]').each(function () {
        if (1 < $(this).find("> .col").length) return !1;
        var t = $(this).parent().parent().parent(),
          e;
        (t.hasClass("vc_col-sm-3") ||
          t.hasClass("vc_col-sm-4") ||
          t.hasClass("vc_col-sm-6") ||
          t.hasClass("vc_col-sm-8") ||
          t.hasClass("vc_col-sm-9")) &&
          (0 == $("body.mobile").length && 0 == $(this).next("div").length
            ? ((e = 0),
              $(this).find("> .col").css("padding", "50px 20px"),
              $(this)
                .parents(".span_12")
                .find(" > .wpb_column")
                .each(function () {
                  Math.floor($(this).height()) > e &&
                    (e = Math.floor($(this).height()));
                }),
              Math.floor($(this).find("> .col").outerHeight(!0)) <
                Math.floor($(this).parents(".wpb_row").height()) - 1 &&
                ($(this)
                  .find("> .col")
                  .css(
                    "padding-top",
                    (e - $(this).find("> .col").height()) / 2 + "px"
                  ),
                $(this)
                  .find("> .col")
                  .css(
                    "padding-bottom",
                    (e - $(this).find("> .col").height()) / 2 + "px"
                  )))
            : $(this).find("> .col").css("padding", "50px 20px"));
      });
    }
    function s(t) {
      (this.options = r.extend({}, n.defaults, s.defaults, t)),
        (this.element = this.options.element),
        (this.$element = r(this.element)),
        this.createWrapper(),
        (this.topLevel = 0 < r(this.element).parents(".top-level").length),
        this.createWaypoint();
    }
    wt(),
      Ct(),
      setTimeout(xt, 100),
      It(),
      Ht(),
      Wt(),
      Ft(),
      qt(),
      ge(),
      E.on("click", ".toggle > h3 a, .toggle > .toggle-title a", function () {
        if (!$(this).parents(".toggles").hasClass("accordion")) {
          var t;
          if (
            (0 == $(this).parents('.toggle[data-inner-wrap="true"]').length
              ? $(this).parents(".toggle").find("> div").slideToggle(300)
              : (t = $(this).parents(".toggle").find("> div")[0]).style
                  .maxHeight
              ? (t.style.maxHeight = null)
              : (t.style.maxHeight = t.scrollHeight + "px"),
            $(this).parents(".toggle").toggleClass("open"),
            $(this).parents(".toggle").hasClass("open")
              ? $(this).find("i").attr("class", "fa fa-minus-circle")
              : $(this).find("i").attr("class", "fa fa-plus-circle"),
            0 < $(this).parents(".toggle").find("> div .iframe-embed").length &&
              "0" ==
                $(this)
                  .parents(".toggle")
                  .find("> div iframe.iframe-embed")
                  .height() &&
              Ca(),
            0 < $(this).parents(".toggle").find("> div img").length &&
              $(this).parents(".toggle").is('[data-inner-wrap="true"]'))
          )
            for (var e = 1; e < 10; e++) setTimeout(pe, 100 * e);
          return (
            setTimeout(function () {
              $(T).trigger("salient-parallax-el-recalculate");
            }, 500),
            0 < $(this).parents(".full-width-content").length &&
              setTimeout(function () {
                Le();
              }, 300),
            0 < $("#nectar_fullscreen_rows").length &&
              setTimeout(function () {
                g.trigger("smartresize");
              }, 300),
            !1
          );
        }
      }),
      E.on(
        "click",
        ".toggles.accordion .toggle > h3 a, .toggles.accordion .toggle > .toggle-title a",
        function (t) {
          var e,
            a = $(this).parents(".toggles"),
            n = $(this).parents(".toggle"),
            t;
          return (
            setTimeout(function () {
              $(T).trigger("salient-parallax-el-recalculate");
            }, 500),
            $(this).parents(".toggle").hasClass("open")
              ? (a.find(".toggle > div").each(function () {
                  $(this)[0].style.maxHeight = null;
                }),
                a.find(".toggle h3 a i").attr("class", "fa fa-plus-circle"),
                a.find(".toggle").removeClass("open"))
              : (0 == $(this).parents('.toggle[data-inner-wrap="true"]').length
                  ? (a.find(".toggle > div").slideUp(300),
                    a.find(".toggle h3 a i").attr("class", "fa fa-plus-circle"),
                    a.find(".toggle").removeClass("open"),
                    n.find("> div").slideDown(300))
                  : (void 0 !== t.originalEvent &&
                      gt.winW < 1e3 &&
                      0 < a.find(".toggle.open").length &&
                      0 == pt.$usingFullScreenRows &&
                      (a.find(".toggle.open"),
                      setTimeout(function () {
                        var t = n.offset().top - gt.adminBarHeight;
                        Gt(
                          (t =
                            0 < $('#header-outer[data-mobile-fixed="1"]').length
                              ? n.offset().top -
                                u.outerHeight() -
                                gt.adminBarHeight
                              : t),
                          500,
                          "easeInOutQuint"
                        );
                      }, 50)),
                    (t = n.find("> div")[0]),
                    a.find(".toggle > div").each(function () {
                      $(this)[0].style.maxHeight = null;
                    }),
                    a.find(".toggle h3 a i").attr("class", "fa fa-plus-circle"),
                    a.find(".toggle").removeClass("open"),
                    (t.style.maxHeight = t.scrollHeight + "px")),
                n.addClass("open"),
                n.hasClass("open")
                  ? $(this).find("i").attr("class", "fa fa-minus-circle")
                  : $(this).find("i").attr("class", "fa fa-plus-circle"),
                0 < $(this).parents(".full-width-content").length &&
                  (clearTimeout(e),
                  (e = setTimeout(function () {
                    Le();
                  }, 400))),
                0 < $("#nectar_fullscreen_rows").length &&
                  (clearTimeout(e),
                  (e = setTimeout(function () {
                    g.trigger("smartresize");
                  }, 400)))),
            !1
          );
        }
      ),
      we(),
      wa(),
      be(),
      E.on(
        "click",
        '.nectar-cta:not([data-style="material"]) .link_wrap',
        function (t) {
          (0 < $(this).parents('[data-using-bg="true"]').length ||
            0 < $(this).parents('[class*="border_thickness"]').length) &&
            ($(t.target).is("a") ||
              0 != $(t.target).parents("a").length ||
              $(this).find("a.link_text")[0].click());
        }
      ),
      0 !== $(".team-member").length &&
        (E.on(
          "click",
          '.team-member[data-style="bio_fullscreen"], .team-member[data-style="bio_fullscreen_alt"]',
          function () {
            var t, e, a, n, i, s, e, s, n;
            0 < $(".nectar_team_member_overlay").length ||
              ((t = 0 < $("body > #boxed").length ? "in-boxed" : ""),
              (e = $(this).find(".nectar_team_bio").html()),
              (a = (
                $(this).is('[data-style="bio_fullscreen_alt"]')
                  ? $(this).find(".team-meta h5")
                  : $(this).find(".team-meta p")
              ).html()),
              (n =
                0 < $(this).find(".nectar_team_bio_img[data-img-src]").length
                  ? $(this).find(".nectar_team_bio_img").attr("data-img-src")
                  : ""),
              (i = $(this).is('[data-style="bio_fullscreen_alt"]')
                ? "bio-fullscreen-alt"
                : "bio-fullscreen"),
              (s = ""),
              (s = $(this).is('[data-style="bio_fullscreen_alt"]')
                ? '<div class="title">' +
                  Vt(a) +
                  "</div><h2>" +
                  $(this).find(".team-meta h3").text() +
                  "</h2>"
                : "<h2>" +
                  $(this).find(".team-meta h3").text() +
                  '</h2><div class="title">' +
                  Vt(a) +
                  "</div>"),
              E.append(
                '<div class="nectar_team_member_overlay ' +
                  t +
                  '" data-style="' +
                  i +
                  '"><div class="inner-wrap"><div class="team_member_details"><div class="bio-inner"><span class="mobile-close"></span>' +
                  s +
                  '<div class="team-desc">' +
                  Vt(e) +
                  '</div></div></div><div class="team_member_picture"><div class="team_member_image_bg_cover"></div><div class="team_member_picture_wrap"><div class="team_member_image"></div></div></div></div></div>'
              ),
              0 < n.length &&
                (((e = new Image()).src = n),
                (e.onload = function () {
                  $(".nectar_team_member_overlay .team_member_image").css(
                    "opacity",
                    "1"
                  );
                }),
                $(".nectar_team_member_overlay .team_member_image").css({
                  "background-image": 'url("' + n + '")',
                })),
              (n =
                0 < $('body[data-header-format="left-header"]').length &&
                1e3 < g.width()
                  ? 0
                  : u.height()),
              $(".nectar_team_member_overlay .inner-wrap").css({
                "padding-top": n,
              }),
              0 < $(".using-mobile-browser").length &&
                $("body,html").addClass("nectar-no-scrolling"),
              ye(),
              $(".nectar_team_member_overlay")
                .addClass("open")
                .addClass("animating"),
              setTimeout(function () {
                $(".nectar_team_member_close").addClass("visible"),
                  $(".nectar_team_member_overlay").removeClass("animating");
              }, 500),
              0 < $('.team-member[data-style="bio_fullscreen"]').length &&
                gt.usingMobileBrowser &&
                $(".nectar_team_member_overlay").addClass("on-mobile"),
              Ca(),
              $(T).trigger("nectar-team-member-opened"));
          }
        ),
        E.on("click", ".nectar_team_member_overlay", function (t) {
          return (
            !!(
              $(t.target).is("a") ||
              0 < $(t.target).parents("a").length ||
              $(t.target).is(".skip-team-member-close") ||
              0 < $(t.target).parents(".skip-team-member-close").length
            ) ||
            void (
              $(this).hasClass("animating") ||
              ($(".nectar_team_member_overlay").removeClass("open"),
              $(".nectar_team_member_close").removeClass("visible"),
              0 < $(".using-mobile-browser").length &&
                $("body,html").removeClass("nectar-no-scrolling"),
              setTimeout(function () {
                $(
                  ".nectar_team_member_overlay, .nectar_team_member_close"
                ).remove();
              }, 820))
            )
          );
        }),
        (0 < $('.team-member[data-style="bio_fullscreen"]').length ||
          0 < $('.team-member[data-style="bio_fullscreen_alt"]').length) &&
          (g.on("resize", ye), !gt.usingMobileBrowser)) &&
        new yt("", "close-indicator"),
      0 < $(".nectar-flip-box").length &&
        (gt.usingMobileBrowser &&
          E.on("click", ".nectar-flip-box", function () {
            $(this).toggleClass("flipped");
          }),
        $e(),
        g.on("smartresize", $e)),
      St(),
      qe(),
      je(),
      ke(),
      jn(),
      Yn(),
      Pe(),
      0 < $(".morphing-outline").length &&
        (setTimeout(Ce, 100), setTimeout(Le, 125), g.on("smartresize", Ce)),
      (P = []),
      gt.usingMobileBrowser ||
        $("[data-nectar-link-indicator]").each(function (t) {
          P[t] = new yt($(this), "link-indicator");
        }),
      oa(),
      0 < $(".nectar_cascading_images").length &&
        ((X = []),
        $(".nectar_cascading_images").each(function (e) {
          imagesLoaded($(this), function (t) {
            Re(),
              $(t.elements[0]).is('[data-parallax="yes"]') &&
                !gt.usingMobileBrowser &&
                0 == $("#nectar_fullscreen_rows").length &&
                (X[e] = new Ve(
                  $(t.elements[0]),
                  $(t.elements[0]).attr("data-parallax-intensity")
                ));
          });
        }),
        g.on("resize", Re)),
      Ke(),
      pa(),
      0 < $('.page-submenu[data-sticky="true"]').length &&
        0 == $("#nectar_fullscreen_rows").length &&
        ((r = T.jQuery),
        (n = T.Waypoint),
        (o = Xt()),
        Xt(),
        g.on("smartresize", function () {
          var t;
          (o = Xt()),
            0 < l.length && "fixed" == l.css("position") && (o += l.height()),
            0 < m.length &&
              1e3 < g.width() &&
              0 < r('body[data-hhun="1"]').length &&
              (o += m.height()),
            0 < r(".page-submenu.stuck").length
              ? (r(".page-submenu.stuck")
                  .addClass("no-trans")
                  .css("top", o)
                  .css("transform", "translateY(0)")
                  .addClass("stuck"),
                setTimeout(function () {
                  r(".page-submenu.stuck").removeClass("no-trans");
                }, 50),
                r(".page-submenu.stuck")
                  .parents(".wpb_row")
                  .css("z-index", 1e4),
                0 < r("#boxed").length &&
                  ((t =
                    1e3 < g.width() ? 0.04 * r(".container-wrap").width() : 39),
                  r(".page-submenu.stuck").css({
                    "margin-left": "-" + t + "px",
                    width: r(".container-wrap").width(),
                  })))
              : (r(".page-submenu.stuck").css("top", "0").removeClass("stuck"),
                r(".page-submenu.stuck")
                  .parents(".wpb_row")
                  .css("z-index", "auto"),
                0 < r("#boxed").length &&
                  r(".page-submenu.stuck").css({
                    "margin-left": "0px",
                    width: "100%",
                  }));
        }),
        (s.prototype.createWaypoint = function () {
          var s = this.options.handler;
          (o = Xt()),
            this.topLevel &&
              0 <
                r('body[data-hhun="1"] #header-outer.detached:not(.invisible)')
                  .length &&
              ((o += 1), this.$element.css({ "margin-top": "-1px" })),
            0 < l.length && "fixed" == l.css("position") && (o += l.height()),
            0 < m.length &&
              1e3 < g.width() &&
              0 < r('body[data-hhun="1"]').length &&
              (o += m.height()),
            (this.waypoint = new n(
              r.extend({}, this.options, {
                element: this.wrapper,
                handler: r.proxy(function (t) {
                  var e = -1 < this.options.direction.indexOf(t),
                    a = e ? this.$element.outerHeight(!0) : "",
                    n,
                    a,
                    e,
                    i,
                    n;
                  this.$wrapper.height(a),
                    e
                      ? ((n = 0),
                        this.topLevel &&
                          0 <
                            r(
                              'body[data-hhun="1"] #header-outer.detached:not(.invisible)'
                            ).length &&
                          ((a = u.outerHeight()),
                          (e = 0) < p.length && (a -= gt.secondaryHeaderHeight),
                          (n =
                            a -
                            (e =
                              0 < m.length && 0 == r("body.mobile").length
                                ? ct
                                  ? m.height()
                                  : 0
                                : e))),
                        this.$element
                          .addClass("no-trans")
                          .css("top", o)
                          .css("transform", "translateY(" + n + "px)")
                          .addClass("stuck"),
                        (i = this),
                        setTimeout(function () {
                          i.$element.removeClass("no-trans");
                        }, 50),
                        this.$element.parents(".wpb_row").css("z-index", 1e4),
                        0 < r("#boxed").length &&
                          ((n =
                            1e3 < g.width()
                              ? 0.04 * r(".container-wrap").width()
                              : 39),
                          this.$element.css({
                            "margin-left": "-" + n + "px",
                            width: r(".container-wrap").width(),
                          })))
                      : (this.$element.css("top", "0").removeClass("stuck"),
                        0 < r("#boxed").length &&
                          this.$element.css({
                            "margin-left": "0px",
                            width: "100%",
                          })),
                    s && s.call(this, t);
                }, this),
                offset: o,
              })
            ));
          var e = this;
          setInterval(function () {
            var t;
            0 <
            r('body[data-hhun="1"] #header-outer.detached:not(.invisible)')
              .length
              ? ((t = u.outerHeight()),
                0 < p.length && (t -= gt.secondaryHeaderHeight),
                (e.waypoint.options.offset = o + t))
              : (e.waypoint.options.offset = o),
              n.refreshAll();
          }, 100);
        }),
        (s.prototype.createWrapper = function () {
          this.options.wrapper && this.$element.wrap(this.options.wrapper),
            (this.$wrapper = this.$element.parent()),
            (this.wrapper = this.$wrapper[0]);
        }),
        (s.prototype.destroy = function () {
          this.$element.parent()[0] === this.wrapper &&
            (this.waypoint.destroy(),
            this.$element.removeClass(this.options.stuckClass),
            this.options.wrapper && this.$element.unwrap());
        }),
        (s.defaults = {
          wrapper: '<div class="sticky-wrapper" />',
          stuckClass: "stuck",
          direction: "down right",
        }),
        (n.Sticky = s),
        $('.page-submenu[data-sticky="true"]').each(function () {
          var t = $(this)[0],
            e,
            a;
          1 < $(this).parents(".span_12").find("> .wpb_column").length &&
            ((e = $(this).clone()),
            (a = $(this).parents(".wpb_row")),
            0 < $(this).parents(".wpb_row.has-global-section").length &&
              (a = $(this).parents(".wpb_row.has-global-section")),
            $(this).remove(),
            a.before(e),
            (t = e[0])),
            new Waypoint.Sticky({ element: t });
        })),
      0 == $("#nectar_fullscreen_rows").length &&
        $(".page-submenu").parents(".wpb_row").css("z-index", 1e4),
      $(".page-submenu .mobile-menu-link").on("click", function () {
        return (
          $(this).parents(".page-submenu").find("ul").stop(!0).slideToggle(350),
          !1
        );
      }),
      $(".page-submenu ul li a").on("click", function () {
        0 < $("body.mobile").length &&
          $(this).parents(".page-submenu").find("ul").stop(!0).slideToggle(350);
      }),
      (G = []),
      "undefined" == typeof NectarLiquid ||
        gt.usingFrontEndEditor ||
        $(
          '.row-bg-wrap[data-bg-animation*="displace-filter"] .row-bg.using-image, .column-image-bg-wrap[data-bg-animation*="displace-filter"] .column-image-bg'
        ).each(function (t) {
          var e,
            a,
            n = $(this);
          $(this).is(".row-bg")
            ? ((e = $(this).parents(".row-bg-wrap").attr("data-bg-animation")),
              (a = "row"))
            : $(this).is(".column-image-bg") &&
              ((e = $(this)
                .parents(".column-image-bg-wrap")
                .attr("data-bg-animation")),
              (a = "col")),
            (G[t] = new NectarLiquid(n, e, a));
        }),
      ga(),
      0 < $('.blog-recent[data-style="title_only"]').length &&
        (i(), g.on("smartresize", i)),
      Ln(),
      qn(),
      Vn(),
      E.on(
        "mouseover",
        '.post-area.featured_img_left .grav-wrap .text a, .masonry.material .masonry-blog-item .grav-wrap .text a, .blog-recent[data-style="material"] .grav-wrap .text a',
        function () {
          $(this).parents(".grav-wrap").find("img").addClass("hovered");
        }
      ),
      E.on(
        "mouseleave",
        '.post-area.featured_img_left .grav-wrap .text a, .masonry.material .masonry-blog-item .grav-wrap .text a, .blog-recent[data-style="material"] .grav-wrap .text a',
        function () {
          $(this).parents(".grav-wrap").find("img").removeClass("hovered");
        }
      ),
      E.on(
        "mouseleave",
        '.container-wrap[data-nav-pos="after_project_2"] #portfolio-nav ul li, .blog_next_prev_buttons[data-style="fullwidth_next_prev"] ul li',
        function () {
          $(this).addClass("mouse-leaving");
        }
      ),
      Un(),
      ei(),
      0 != $(".portfolio-items .col").length &&
        (0 < $(".portfolio-items .col .style-3-alt").length ||
          0 < $(".portfolio-items .col .style-3").length ||
          0 < $(".portfolio-items .col .style-2").length ||
          0 < $(".portfolio-items .col .style-5").length) &&
        ((a = ""),
        $(".portfolio-items .col").each(function () {
          var t = $(this).attr("data-title-color"),
            e = $(this).attr("data-subtitle-color");
          0 < t.length &&
            ((a +=
              '.col[data-title-color="' +
              t +
              '"] .vert-center h3, .portfolio-items[data-ps="6"] .col[data-title-color="' +
              t +
              '"] .work-meta h4 { color: ' +
              t +
              "!important; } "),
            (a +=
              ' .portfolio-items[data-ps="8"] .col[data-title-color="' +
              t +
              '"] .line { background-color: ' +
              t +
              "; }"),
            (a +=
              '.portfolio-items[data-ps="8"] .col[data-title-color="' +
              t +
              '"] .next-arrow line { stroke: ' +
              t +
              "; } ")),
            0 < e.length &&
              (a +=
                '.col[data-subtitle-color="' +
                e +
                '"] .vert-center p, .portfolio-items[data-ps="6"] .col[data-title-color="' +
                t +
                '"] .work-meta p { color: ' +
                e +
                "!important; } ");
        }),
        ie(a, "nectar-portfolio-colors")),
      0 < $("body.search-results").length &&
        0 < $("#search-results article").length &&
        0 == $('#search-results[data-layout="list-no-sidebar"]').length &&
        0 == $('#search-results[data-layout="list-with-sidebar"]').length &&
        ((t = $("#search-results")).is('[data-layout="masonry-no-sidebar"]'),
        t.imagesLoaded(function () {
          t.isotope({
            itemSelector: ".result",
            layoutMode: "packery",
            packery: { gutter: 0 },
          }),
            t.find("article").css("opacity", "1");
        }),
        g.on("resize", function () {
          t.isotope({ layoutMode: "packery", packery: { gutter: 0 } });
        })),
      $(".single-portfolio #sidebar").attr("data-follow-on-scroll"),
      0 != $("body.single-portfolio").length &&
        0 != $("#sidebar[data-follow-on-scroll]").length &&
        1 == $(".single-portfolio #sidebar").attr("data-follow-on-scroll") &&
        !E.hasClass("mobile") &&
        parseInt($("#sidebar").height()) + 50 <=
          parseInt($(".post-area").height()) &&
        ((e = ai()),
        $(".single-portfolio #sidebar").theiaStickySidebar({
          additionalMarginTop: e,
          updateSidebarHeight: !1,
        })),
      Mn(),
      $(".nectar-scrolling-text").each(function () {
        var t;
        $(this).offset().top > gt.winH &&
          ($(this).addClass("prevent-animation"),
          (t = $(this)),
          setTimeout(function () {
            t.removeClass("prevent-animation");
          }, 100));
      }),
      ce();
  }
  function en() {
    (this.$toggleBtn = $(".nectar-shop-filters .nectar-shop-filter-trigger")),
      (this.$sidebar = $("#sidebar")),
      (this.sidebarPos = this.$sidebar.hasClass("col_last") ? "right" : "left"),
      (this.state = { open: this.getLS() ? this.getLS() : "true" }),
      this.setup(),
      this.events();
  }
  function an() {
    (this.$qty = ""),
      (this.step = 1),
      (this.ajaxTimeout = ""),
      (this.ajaxTimeoutDur = 500),
      (this.state = {
        max: 1e5,
        min: 0,
        currentVal: 1,
        key: 0,
        removeFlag: !1,
      }),
      this.events();
  }
  function nn() {
    (this.state = { processing: !1, productID: !1, type: "regular" }),
      this.events();
  }
  function sn() {
    var a, t, e, n, i;
    function s() {
      !$(
        ".widget_shopping_cart .widget_shopping_cart_content .cart_list .empty"
      ).length &&
        0 <
          $(".widget_shopping_cart .widget_shopping_cart_content .cart_list")
            .length &&
        ($(".cart-menu-wrap").addClass("has_products"),
        $(
          "header#top nav > ul, #search-outer #search #close a, header#top .span_9 >.slide-out-widget-area-toggle"
        ).addClass("product_added"),
        $(".cart-menu-wrap").hasClass("static") ||
          $(".cart-menu-wrap, #mobile-cart-link").addClass("first-load"));
    }
    function r() {
      $("#header-outer .cart-notification").stop(!0, !0).fadeOut();
    }
    function o(t) {
      var e = g.width();
      t.clientX < e - 370 - v &&
        $(".nectar-slide-in-cart").hasClass("mouse-accessed") &&
        (g.off("mousemove.rightCartOffsetCheck", o),
        $(".nectar-slide-in-cart")
          .removeClass("open")
          .removeClass("mouse-accessed"));
    }
    E.on("click", ".product .add_to_cart_button", function () {
      var t = 0 < $(this).parents("li").find("h2").length ? "h2" : "h3",
        t = $(this).parents("li").find(t).text();
      $("#header-outer .cart-notification span.item-name").html(t);
    }),
      E.on("mouseenter", "#header-outer .cart-notification", function () {
        $(this).hide(),
          $("#header-outer .widget_shopping_cart")
            .addClass("open")
            .stop(!0, !0)
            .show(),
          $("#header-outer .cart_list").stop(!0, !0).show(),
          clearTimeout(a);
      }),
      0 < $("#header-outer .nectar-woo-cart").length &&
        $("#header-outer .nectar-woo-cart").hoverIntent(function () {
          $("#header-outer .widget_shopping_cart")
            .addClass("open")
            .stop(!0, !0)
            .show(),
            $("#header-outer .cart_list").stop(!0, !0).show(),
            clearTimeout(a),
            $("#header-outer .cart-notification").hide();
        }),
      E.on("mouseleave", "#header-outer .nectar-woo-cart", function () {
        var t = $(this);
        setTimeout(function () {
          t.is(":hover") ||
            ($("#header-outer .widget_shopping_cart")
              .removeClass("open")
              .stop(!0, !0)
              .fadeOut(300),
            $("#header-outer .cart_list").stop(!0, !0).fadeOut(300));
        }, 200);
      }),
      0 == $('#header-outer[data-cart="false"]').length &&
        E.on("added_to_cart", function (e) {
          setTimeout(function () {
            var t;
            (t = e),
              clearTimeout(a),
              !$(
                ".widget_shopping_cart .widget_shopping_cart_content .cart_list .empty"
              ).length &&
                0 <
                  $(
                    ".widget_shopping_cart .widget_shopping_cart_content .cart_list"
                  ).length &&
                void 0 !== t.type &&
                ((0 < $("#header-outer .cart-notification .item-name").length &&
                  0 ==
                    $("#header-outer .cart-notification .item-name").text()
                      .length) ||
                  ($("#header-outer .cart-menu-wrap").hasClass("has_products")
                    ? $("#header-outer .cart-notification").is(":visible")
                      ? $("#header-outer .cart-notification").show()
                      : $("#header-outer .cart-notification").fadeIn(400)
                    : setTimeout(function () {
                        $("#header-outer .cart-notification").fadeIn(400);
                      }, 400),
                  $(
                    'body #header-outer [data-cart-style="slide_in_click"] .cart-menu-wrap'
                  ).trigger("click"),
                  (a = setTimeout(r, 2700)))),
              s();
          }, 150);
        }),
      0 == $('#header-outer[data-cart="false"]').length &&
        ((t = setInterval(s, 250)),
        setTimeout(function () {
          clearInterval(t);
        }, 4500)),
      0 != $("body.woocommerce-account #customer_login").length &&
        (0 === $("#customer_login .nectar-form-controls").length &&
          ($(".woocommerce-account .woocommerce > #customer_login").prepend(
            '<div class="nectar-form-controls" />'
          ),
          $(
            ".woocommerce-account .woocommerce > #customer_login > div:not(.nectar-form-controls)"
          ).each(function () {
            var t = $(this).find("> h2").text();
            $("#customer_login .nectar-form-controls").append(
              '<div class="control">' + t + "</div>"
            );
          })),
        $(
          ".woocommerce-account .woocommerce > #customer_login .nectar-form-controls .control"
        ).on("click", function () {
          $(
            ".woocommerce-account .woocommerce > #customer_login .nectar-form-controls .control"
          ).removeClass("active"),
            $(this).addClass("active");
          var t = $(this).index() + 1;
          $('#customer_login div[class*="u-column"]').hide(),
            $('#customer_login div[class*="u-column"].col-' + t).show(),
            setTimeout(function () {
              $('#customer_login div[class*="u-column"]').removeClass(
                "visible"
              ),
                $('#customer_login div[class*="u-column"].col-' + t).addClass(
                  "visible"
                );
            }, 30);
        }),
        (n = "1"),
        void 0 !== ee.tab &&
          "2" === ee.tab &&
          ((n = "2"),
          T.history && T.history.replaceState && "function" == typeof URL) &&
          ((i = new URL(location)).searchParams.delete("tab"),
          history.replaceState(null, null, i)),
        $(
          ".woocommerce-account .woocommerce > #customer_login .nectar-form-controls .control:nth-child(" +
            n +
            ")"
        ).trigger("click")),
      (0 < $('.products[data-rm-m-hover="1"]').length &&
        gt.usingMobileBrowser) ||
        (E.on(
          "mouseover",
          ".text_on_hover .product-wrap, .text_on_hover > a:first-child",
          function () {
            $(this).parent().addClass("hovered");
          }
        ),
        E.on(
          "mouseout",
          ".text_on_hover .product-wrap, .text_on_hover > a:first-child",
          function () {
            $(this).parent().removeClass("hovered");
          }
        )),
      (0 < $(".material.product").length ||
        0 < $(".minimal.product").length ||
        0 < $('.nectar-fancy-box[data-style="parallax_hover"]').length ||
        0 < $('.nectar-category-grid[data-shadow-hover="yes"]').length ||
        0 < $('.nectar-post-grid[data-shadow-hover="yes"]').length) &&
        ((e = 101),
        E.on(
          "mouseenter",
          '.material.product, .nectar-fancy-box[data-style="parallax_hover"], .nectar-post-grid[data-shadow-hover="yes"] .nectar-post-grid-item, .nectar-category-grid[data-shadow-hover="yes"] .nectar-category-grid-item',
          function () {
            e++, $(this).css("z-index", e + 1);
          }
        ),
        E.on(
          "mouseleave",
          '.material.product, .nectar-fancy-box[data-style="parallax_hover"], .nectar-post-grid[data-shadow-hover="yes"] .nectar-post-grid-item, .nectar-category-grid[data-shadow-hover="yes"] .nectar-category-grid-item',
          function () {
            var t = $(this);
            setTimeout(function () {
              t.is(":hover") || t.css("z-index", 100);
            }, 350);
          }
        ),
        T.nectarOptions &&
          T.nectarOptions.woo_minimal_product_effect &&
          "default" === T.nectarOptions.woo_minimal_product_effect &&
          (E.on("mouseenter", ".minimal.product", function () {
            e++, $(this).css("z-index", e + 1);
          }),
          E.on("mouseleave", ".minimal.product", function () {
            var t = $(this);
            setTimeout(function () {
              t.is(":hover") || t.css("z-index", 100);
            }, 350);
          })),
        setInterval(function () {
          0 <
            $('.nectar-fancy-box[data-style="parallax_hover"]:hover').length ||
            0 < $(".minimal.product:hover").length ||
            ($(
              '.material.product:not(:hover), .minimal.product:not(:hover), .nectar-fancy-box[data-style="parallax_hover"]:not(:hover), .nectar-post-grid[data-shadow-hover="yes"] .nectar-post-grid-item:not(:hover), .nectar-category-grid[data-shadow-hover="yes"] .nectar-category-grid-item:not(:hover)'
            ).css("z-index", 100),
            (e = 101));
        }, 1e4)),
      $(".products .classic .product-wrap .add_to_cart_button").wrapInner(
        "<span />"
      ),
      $(".products .classic .product-wrap .add_to_cart_button").prepend(
        '<i class="normal icon-salient-cart"></i>'
      ),
      (0 < $('.products[data-rm-m-hover="1"]').length &&
        gt.usingMobileBrowser) ||
        !T.nectarOptions ||
        !T.nectarOptions.woo_minimal_product_effect ||
        "default" !== T.nectarOptions.woo_minimal_product_effect ||
        (E.on("mouseover", ".products .minimal.product", function () {
          var t,
            e,
            a,
            n,
            a,
            n,
            t,
            a = (e = $(this)).width(),
            n = e.height(),
            a = (parseInt(a) + 40) / parseInt(a),
            n = (parseInt(n) + 40) / parseInt(n);
          e.addClass("hover-bound"),
            e
              .find(".background-color-expand")
              .css({
                transform:
                  "scale(" + a + "," + n + ") translateY(0px) translateZ(0px)",
              });
        }),
        E.on("mouseleave", ".products .minimal.product", function () {
          $(this)
            .find(".background-color-expand")
            .css({ transform: "scale(1, 1) translateY(0) translateZ(0px)" });
        })),
      $(".products .minimal.product").each(function () {
        $(this).is(":hover") && $(this).trigger("mouseover");
      }),
      $(".woocommerce #sidebar .widget.woocommerce").each(function () {
        0 == $(this).find("> h4").length && $(this).addClass("no-widget-title");
      }),
      E.on(
        "click",
        "#sidebar .widget.woocommerce:not(.widget_price_filter) h4",
        function () {
          T.nectarOptions &&
            "false" !== T.nectarOptions.woo_sidebar_toggles &&
            g.width() < 1e3 &&
            ($(this).parent().is(".widget_product_tag_cloud") &&
              $(this).parent().find("> div").slideToggle(),
            $(this).parent().is(".woocommerce-widget-layered-nav") &&
              0 <
                $(this)
                  .parent()
                  .find("> .woocommerce-widget-layered-nav-dropdown").length &&
              $(this)
                .parent()
                .find("> .woocommerce-widget-layered-nav-dropdown")
                .slideToggle(),
            $(this).parent().find("> ul").slideToggle(),
            $(this).parent().toggleClass("open-filter"));
        }
      ),
      E.on(
        "mouseenter",
        '#header-outer [data-cart-style="slide_in"] .cart-menu-wrap',
        function () {
          0 < $(".nectar-slide-in-cart ul.cart_list li:not(.empty)").length &&
            ($(".nectar-slide-in-cart").addClass("open"),
            g.on("mousemove.rightCartOffsetCheck", o));
        }
      ),
      E.on("mouseenter", ".nectar-slide-in-cart", function () {
        $(this).addClass("mouse-accessed");
      }),
      E.on(
        "click",
        '#header-outer [data-cart-style="slide_in_click"] .cart-menu-wrap, #mobile-cart-link[data-cart-style="slide_in_click"]',
        function () {
          return (
            !(!E.is(".woocommerce-checkout") && !E.is(".woocommerce-cart")) ||
            ($(".nectar-slide-in-cart, .nectar-slide-in-cart-bg").addClass(
              "open"
            ),
            $(".nectar-slide-in-cart-bg").addClass("revealed"),
            clearTimeout(Va),
            $(".style_slide_in_click div.quantity").each(function () {
              1 < $(this).find(".minus").length &&
                $(this).find(".minus").first().remove(),
                1 < $(this).find(".plus").length &&
                  $(this).find(".plus").first().remove();
            }),
            !1)
          );
        }
      ),
      E.on(
        "click",
        ".nectar-slide-in-cart.style_slide_in_click .close-cart, .nectar-slide-in-cart-bg",
        rn
      ),
      new an(),
      T.nectarOptions && "1" === T.nectarOptions.ajax_add_to_cart && new nn(),
      T.nectarOptions &&
        "1" === T.nectarOptions.woo_product_filter_toggle &&
        E.is(".archive.woocommerce") &&
        new en(),
      $(I).on("yith-wcan-ajax-filtered", ia);
  }
  function rn() {
    return (
      $(".nectar-slide-in-cart, .nectar-slide-in-cart-bg").removeClass("open"),
      (Va = setTimeout(function () {
        $(".nectar-slide-in-cart-bg").removeClass("revealed");
      }, 400)),
      !1
    );
  }
  function on() {
    (this.$el = $("#search-outer #search .container #s")),
      (this.$container = ""),
      (this.$parent = ""),
      (this.$searchEl = $("#search-outer")),
      (this.request = ""),
      (this.timeout = ""),
      this.setup(),
      this.events(),
      (this.state = { requesting: !1, open: !1, prevResults: "" }),
      (this.minChars = 2);
  }
  function ln() {
    function t() {
      Ut()
        ? u.addClass("within-custom-breakpoint")
        : u.removeClass("within-custom-breakpoint");
    }
    function e() {
      var t, e, a, t;
      gt.winW < 1e3 ||
        0 < $("body.page-template-template-no-header").length ||
        0 < $("body.page-template-template-no-header-footer").length ||
        0 < $("body.material-ocm-open").length ||
        "none" ==
          $(
            '#header-outer[data-has-menu="true"][data-format="centered-menu-bottom-bar"] .span_9'
          ).css("display") ||
        "none" ==
          $(
            '#header-outer[data-has-menu="true"][data-format="centered-menu-bottom-bar"] .span_9 > nav'
          ).css("display") ||
        ((m = 0 < m.length && 0 < gt.secondaryHeaderHeight ? m.height() : 0),
        n.hasClass("force-condense") ||
        (!n.hasClass("fixed-menu") && gt.scrollTop >= d)
          ? ((t =
              parseInt(i.position().top) -
              o -
              parseInt(gt.adminBarHeight) +
              parseInt(gt.secondaryHeaderHeight) -
              m),
            0 < $('#header-outer[data-megamenu-rt="1"]').length &&
              0 < $("#header-outer .megamenu").length &&
              0 < $('#header-outer[data-transparent-header="true"]').length &&
              u.removeClass("no-transition"),
            n
              .addClass("fixed-menu")
              .removeClass("transparent")
              .css({ top: "-" + t + "px", position: "fixed" }),
            n.is('[data-menu-bottom-bar-align="left"]') ||
              ((e =
                0 < $("header#top .span_9 nav > ul .menu-title-text").length
                  ? $("header#top .span_9 nav > ul .menu-title-text").offset()
                      .top
                  : 0),
              (a =
                0 < r.find("li:first-child > *").length
                  ? r.find("li:first-child > *").offset().top
                  : 0),
              (t =
                0 < i.find("nav .sf-menu > li > a .menu-title-text").length
                  ? (20 -
                      parseInt(
                        i
                          .find("nav .sf-menu > li > a .menu-title-text")
                          .height()
                      )) /
                    2
                  : 2),
              r.css(
                "transform",
                "translateY(" + Math.ceil(parseInt(e) - parseInt(a) - t) + "px)"
              ),
              r.find(".nectar-woo-cart").css({ height: "auto" })))
          : (n.hasClass("force-condense-remove") ||
              (n.hasClass("fixed-menu") && gt.scrollTop < d)) &&
            (n
              .removeClass("fixed-menu")
              .css({ top: "0", position: "absolute" }),
            r.css("transform", "translateY(0px)"),
            r
              .find(".nectar-woo-cart")
              .css({ height: "", position: "relative" }),
            0 == $("#header-outer.transparent").length &&
              (0 < $('#header-outer[data-megamenu-rt="1"]').length &&
                0 < $("#header-outer .megamenu").length &&
                u.removeClass("no-transition"),
              0 < $('#header-outer[data-megamenu-rt="1"]').length &&
              0 < $('#header-outer[data-transparent-header="true"]').length &&
              0 < $("#header-outer .megamenu").length
                ? "true" == u.attr("data-transparent-header") &&
                  0 == $(".nectar-box-roll").length &&
                  0 ==
                    $(".megamenu.sfHover:not(.width-75):not(.width-50)").length
                  ? (u.addClass("transparent"), u.removeClass("no-transition"))
                  : "true" == u.attr("data-transparent-header") &&
                    0 == $(".nectar-box-roll").length &&
                    0 < $(".megamenu.sfHover").length &&
                    u.addClass("no-transition")
                : "true" == u.attr("data-transparent-header") &&
                  0 == $(".nectar-box-roll").length &&
                  u.addClass("transparent"))));
    }
    var n, i, a, s, r, o, l, d;
    0 < $('#header-outer[data-format="centered-menu-bottom-bar"]').length &&
      ((n = u),
      (i = $(
        '#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9'
      )),
      (a = $(
        '#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_3'
      )),
      (s = p),
      (r = a.find("nav >ul.buttons")),
      (o = parseInt($("body.material #header-outer").attr("data-padding"))),
      (l = parseInt($("body.material #header-outer").attr("data-logo-height"))),
      (a = parseInt(a.css("margin-bottom"))),
      (d = o + a + l + parseInt(gt.secondaryHeaderHeight)),
      0 < s.length &&
        0 == $('#header-outer[data-remove-fixed="1"]').length &&
        0 < $('#header-outer[data-condense="true"]').length &&
        setTimeout(function () {
          "none" != p.css("display") &&
            (gt.secondaryHeaderHeight = p.outerHeight());
        }, 50),
      0 < $('#header-outer[data-condense="true"]').length &&
        (g.on("scroll.centeredNavCondense", e),
        g.trigger("scroll"),
        g.on("resize", function () {
          (gt.winW < 1e3 || Ut()) &&
            (n.addClass("force-condense-remove"),
            g.off("scroll.centeredNavCondense"));
        }),
        g.on("smartresize", function () {
          t(),
            1e3 <= gt.winW &&
              0 == Ut() &&
              n.hasClass("force-condense-remove") &&
              (e(),
              n.removeClass("force-condense-remove"),
              setTimeout(function () {
                gt.scrollTop >= d &&
                  (n.addClass("force-condense"),
                  e(),
                  n.removeClass("force-condense")),
                  g.on("scroll.centeredNavCondense", e);
              }, 200));
        }),
        t()));
  }
  function dn() {
    var t, e, a, n, i, e;
    1e3 < gt.winW
      ? ((a = $(
          '#header-outer[data-format="centered-logo-between-menu"] #top nav > .sf-menu:not(.buttons) > li'
        ).length),
        0 < $("#header-outer #social-in-menu").length && a--,
        (t =
          0 == $("#header-outer #top .row .col.span_3 #logo img:visible").length
            ? parseInt($("#header-outer #top .row .col.span_3").width())
            : parseInt(
                $("#header-outer #top .row .col.span_3 img:visible").width()
              )),
        (e =
          0 < $('#header-outer[data-lhe="animated_underline"]').length
            ? parseInt(
                $("header#top nav > ul > li:first-child > a").css(
                  "margin-right"
                )
              )
            : parseInt(
                $("header#top nav > ul > li:first-child > a").css(
                  "padding-right"
                )
              )),
        (e += 30 < e ? 45 : 20 < e ? 40 : 30),
        (E.hasClass("rtl")
          ? $(
              '#header-outer[data-format="centered-logo-between-menu"] #top nav > .sf-menu:not(.buttons) > li:nth-child(' +
                Math.floor(a / 2) +
                ")"
            ).css({ "margin-left": t + e + "px" })
          : $(
              '#header-outer[data-format="centered-logo-between-menu"] #top nav > .sf-menu:not(.buttons) > li:nth-child(' +
                Math.floor(a / 2) +
                ")"
            ).css({ "margin-right": t + e + "px" })
        ).addClass("menu-item-with-margin"),
        (i = n = 0),
        $(
          '#header-outer[data-format="centered-logo-between-menu"] #top nav > .sf-menu:not(.buttons) > li:not(#social-in-menu)'
        ).each(function (t) {
          t + 1 <= Math.floor(a / 2)
            ? (n += $(this).width())
            : (i += $(this).width());
        }),
        (e = Math.abs(i - n)),
        i < n || (E.hasClass("rtl") && n < i)
          ? $("#header-outer #top .row > .col.span_9").css("padding-right", e)
          : $("#header-outer #top .row > .col.span_9").css("padding-left", e),
        $('#header-outer[data-format="centered-logo-between-menu"] nav').css(
          "visibility",
          "visible"
        ))
      : 0 <
          $('#header-outer[data-format="centered-logo-between-menu"]').length &&
        gt.winW < 1e3 &&
        $("#header-outer .row > .col.span_9").css({
          "padding-right": "0",
          "padding-left": "0",
        });
  }
  function cn() {
    var t;
    0 < $('#header-outer[data-format="centered-logo-between-menu"]').length &&
      (a
        ? a &&
          0 <
            $('#header-outer[data-format="centered-logo-between-menu"]')
              .length &&
          0 < $("header#top #logo img:first[src]").length &&
          (((t = new Image()).src = $("header#top #logo img:first").attr(
            "src"
          )),
          (t.onload = function () {
            dn();
          }))
        : dn(),
      g.on("smartresize", dn));
  }
  function hn() {
    0 < $("#nectar_fullscreen_rows").length &&
      1 == dt &&
      u.attr("data-permanent-transparent", "false"),
      gt.usingMobileBrowser &&
        0 < $('#header-outer[data-mobile-fixed="1"]').length &&
        0 == $('#header-outer[data-transparent-header="true"]').length &&
        $("#header-space")
          .css("height", u.outerHeight())
          .addClass("calculated"),
      T.nectarOptions &&
        T.nectarOptions.header_entrance &&
        "true" == T.nectarOptions.header_entrance &&
        (0 == gt.scrollTop
          ? $("#header-outer").addClass("entrance-animation")
          : $("#header-outer").css("opacity", "1")),
      ((0 == $("#nectar_fullscreen_rows").length &&
        0 == $(".nectar-box-roll").length) ||
        (0 < $("#nectar_fullscreen_rows").length && 0 == dt)) &&
        Ua();
  }
  ($.fn.dlmenu = function (e) {
    var a;
    return (
      "string" == typeof e
        ? ((a = Array.prototype.slice.call(arguments, 1)),
          this.each(function () {
            var t = $.data(this, "menu");
            t
              ? $.isFunction(t[e]) && "_" !== e.charAt(0)
                ? t[e].apply(t, a)
                : Xa("no such method '" + e + "' for menu instance")
              : Xa(
                  "cannot call methods on menu prior to initialization; attempted to call method '" +
                    e +
                    "'"
                );
          }))
        : this.each(function () {
            var t = $.data(this, "menu");
            t ? t._init() : (t = $.data(this, "menu", new $.DLMenu(e, this)));
          }),
      this
    );
  }),
    (en.prototype.events = function () {
      this.$toggleBtn.on("click", this.toggle.bind(this)),
        this.$sidebar
          .find(".nectar-close-btn-wrap")
          .on("click", this.mobileToggle.bind(this)),
        $(T).on("smartresize", this.mobileToggleResize.bind(this));
    }),
    (en.prototype.mobileToggleResize = function () {
      this.$sidebar.hasClass("open") &&
        999 < gt.winW &&
        (this.$sidebar.removeClass("open"),
        this.$sidebar.find(".nectar-close-btn-wrap").removeClass("open"),
        $(".container-wrap").css("z-index", "11"));
    }),
    (en.prototype.mobileToggle = function () {
      return (
        this.$sidebar.hasClass("open")
          ? (this.$sidebar.removeClass("open"),
            this.$sidebar.find(".nectar-close-btn-wrap").removeClass("open"),
            $(".container-wrap").css("z-index", "11"))
          : ($(".container-wrap").css("z-index", "10000"),
            this.$sidebar.addClass("open"),
            this.$sidebar.find(".nectar-close-btn-wrap").addClass("open")),
        !1
      );
    }),
    (en.prototype.toggle = function () {
      if (gt.winW < 1e3) return this.mobileToggle(), !1;
      var t = "";
      return (
        "true" == this.state.open
          ? ((t = this.state.open = "false"),
            this.$toggleBtn.find(".hide").hide(),
            this.$toggleBtn.find(".show").show(),
            this.$toggleBtn
              .find(".top-line, .bottom-line")
              .css({ transform: "translateX(0)" }),
            "left" == this.sidebarPos
              ? this.$sidebar.css({ "margin-right": "-25%", opacity: "0" })
              : this.$sidebar.css({ "margin-left": "-25%", opacity: "0" }),
            this.$sidebar
              .find("> .inner")
              .css({
                transform:
                  "left" == this.sidebarPos
                    ? "translateX(-100%)"
                    : "translateX(100%)",
              }))
          : ((t = this.state.open = "true"),
            this.$toggleBtn.find(".show").hide(),
            this.$toggleBtn.find(".hide").show(),
            this.$toggleBtn
              .find(".top-line")
              .css({ transform: "translateX(10px)" }),
            this.$toggleBtn
              .find(".bottom-line")
              .css({ transform: "translateX(-10px)" }),
            "left" == this.sidebarPos
              ? this.$sidebar.css({ "margin-right": "0", opacity: "1" })
              : this.$sidebar.css({ "margin-left": "0", opacity: "1" }),
            this.$sidebar.find("> .inner").css({ transform: "translateX(0)" })),
        setTimeout(function () {
          $(T).trigger("nectar-product-filters-layout");
        }, 425),
        "undefined" != typeof Storage &&
          localStorage.setItem("nectar_product_filters_vis", t),
        !1
      );
    }),
    (en.prototype.setup = function () {
      var t;
      this.$sidebar
        .find(".widget.woocommerce")
        .addClass("open-filter")
        .find("ul")
        .css({ display: "block" }),
        this.$sidebar
          .find(".widget.woocommerce.widget_product_tag_cloud")
          .find("div.tagcloud")
          .css({ display: "block" }),
        0 <
          this.$sidebar.find(
            ".widget.woocommerce.widget_layered_nav > .woocommerce-widget-layered-nav-dropdown"
          ).length &&
          this.$sidebar
            .find(
              ".widget.woocommerce.widget_layered_nav > .woocommerce-widget-layered-nav-dropdown"
            )
            .css({ display: "block" }),
        0 < $(".nectar-active-product-filters").length &&
          ((t = $(".nectar-active-product-filters").clone()),
          this.$sidebar.find("> .inner").prepend(t));
    }),
    (en.prototype.getLS = function () {
      return "undefined" != typeof Storage
        ? localStorage.getItem("nectar_product_filters_vis")
        : null;
    }),
    (an.prototype.updateState = function (t) {
      var e = 0;
      !0 === this.checkMiniCart(this.$qty) &&
        (e = this.$qty.attr("name").match(/cart\[(\w+)\]/)[1]);
      var a = parseFloat(this.$qty.val());
      (a && "" !== a && "NaN" !== a) || (a = 0);
      var n = parseFloat(this.$qty.attr("max")),
        i = parseFloat(this.$qty.attr("min"));
      ("" !== n && "NaN" !== n && !isNaN(n)) || (n = ""),
        ("" !== i && "NaN" !== i && !isNaN(i)) || (i = 0),
        (this.state = { currentVal: a, max: n, min: i, key: e });
    }),
    (an.prototype.events = function () {
      var e = this;
      $("body").on("click", ".quantity .plus", function () {
        0 == $(this).parents(".auction_form").length &&
          ((e.$qty = $(this).closest(".quantity").find(".qty")),
          e.setStep(),
          e.updateState(),
          e.increment($(this)));
      }),
        $("body").on("click", ".quantity .minus", function () {
          0 == $(this).parents(".auction_form").length &&
            ((e.$qty = $(this).closest(".quantity").find(".qty")),
            e.setStep(),
            e.updateState(),
            e.decrement($(this)));
        }),
        $("body").on(
          "keyup",
          ".woocommerce-mini-cart .quantity .qty",
          function (t) {
            (e.$qty = $(this)),
              e.updateState(),
              e.state.max &&
                e.$qty.val() > e.state.max &&
                e.$qty.val(e.state.max),
              e.state.min &&
                (e.state.min == e.state.currentVal ||
                  e.state.currentVal < e.state.min) &&
                (e.state.removeFlag = !0),
              $(this).trigger("change");
          }
        ),
        $("body").on(
          "change",
          ".woocommerce-mini-cart .quantity .qty",
          function (t) {
            t.originalEvent ||
              !0 !== e.checkMiniCart(e.$qty) ||
              e.updateCart(e.$qty.val());
          }
        );
    }),
    (an.prototype.setStep = function () {
      var t;
      this.$qty.is("[step]") &&
        ((t = parseInt(this.$qty.attr("step"))),
        isNaN(t) || "" == t || 0 == t || (this.step = t));
    }),
    (an.prototype.increment = function () {
      this.state.max &&
      (this.state.max == this.state.currentVal ||
        this.state.currentVal > this.state.max)
        ? this.$qty.val(this.state.max)
        : this.$qty.val(this.state.currentVal + parseFloat(this.step)),
        this.$qty.trigger("change");
    }),
    (an.prototype.decrement = function () {
      this.state.min &&
      (this.state.min == this.state.currentVal ||
        this.state.currentVal < this.state.min)
        ? (this.$qty.val(this.state.min), (this.state.removeFlag = !0))
        : 0 < this.state.currentVal &&
          this.$qty.val(this.state.currentVal - parseFloat(this.step)),
        this.$qty.trigger("change");
    }),
    (an.prototype.checkMiniCart = function (t) {
      return 0 < t.parents(".woocommerce-mini-cart").length;
    }),
    (an.prototype.updateQuantityCallback = function (t, e) {
      $(T).trigger("nectar_woo_mini_cart_updated"),
        e.$qty.closest(".widget_shopping_cart_content").removeClass("loading"),
        e.$qty
          .closest(".woocommerce-mini-cart-item")
          .removeClass("blockUI")
          .removeClass("blockOverlay");
      var a = e.$qty
          .closest(".widget_shopping_cart_content")
          .find(".woocommerce-mini-cart__total"),
        n,
        a;
      a.find(".woocommerce-Price-amount, .tax_label").remove(),
        a.append(t.subtotal),
        T.nectarOptions &&
          T.nectarOptions.woo_using_cart_addons &&
          "true" === T.nectarOptions.woo_using_cart_addons &&
          t.item_price &&
          0 < t.item_price.length &&
          ((n = $(t.item_price)),
          (a = e.$qty
            .closest(".woocommerce-mini-cart-item")
            .find(".product-price")),
          n.text() !== a.find(".woocommerce-Price-amossunt").text() &&
            (a.find(".woocommerce-Price-amount, > del, > ins").remove(),
            a.prepend(t.item_price))),
        !0 === e.state.removeFlag &&
          (e.$qty.closest(".woocommerce-mini-cart-item").remove(),
          (e.state.removeFlag = !1),
          $(I.body).trigger("updated_wc_div")),
        0 < $("#header-outer a.cart-contents .cart-wrap span").length &&
          $("#header-outer a.cart-contents .cart-wrap span").text(t.item_count),
        0 < $("#header-outer #mobile-cart-link .cart-wrap span").length &&
          $("#header-outer #mobile-cart-link .cart-wrap span").text(
            t.item_count
          );
    }),
    (an.prototype.updateCart = function (e) {
      var a = this;
      clearTimeout(this.ajaxTimeout),
        (this.ajaxTimeout = setTimeout(function () {
          a.$qty.closest(".widget_shopping_cart_content").addClass("loading"),
            a.$qty
              .closest(".woocommerce-mini-cart-item")
              .addClass("blockUI")
              .addClass("blockOverlay");
          var t = {
            type: "POST",
            url: T.nectarLove.ajaxurl,
            data: {
              action: "nectar_minicart_update_quantity",
              quantity: e,
              item_key: a.state.key,
            },
            cache: !1,
            success: function (t) {
              t && a.updateQuantityCallback(t, a);
            },
          };
          $.ajax(t),
            T.nectarOptions &&
              T.nectarOptions.woo_using_cart_addons &&
              "true" === T.nectarOptions.woo_using_cart_addons &&
              setTimeout(function () {
                $.ajax(t);
              }, 1e3);
        }, this.ajaxTimeoutDur));
    }),
    (nn.prototype.events = function () {
      $("body").on(
        "click",
        "form.cart .single_add_to_cart_button",
        this.addToCartAJAX.bind(this)
      );
    }),
    (nn.prototype.addNotices = function (t) {
      var a = $(
        ".nectar-slide-in-cart.style_slide_in_click .widget_shopping_cart_content"
      );
      $.each(t, function (t, e) {
        a.prepend('<div class="nectar-notice">' + e.notice + "</div>");
      }),
        setTimeout(function () {
          a.find(".nectar-notice").slideUp(function () {
            $(this).remove();
          });
        }, 6e3);
    }),
    (nn.prototype.addToCartAJAX = function (t) {
      var e = this,
        a = $(t.currentTarget).parents("form.cart"),
        n,
        i,
        t,
        a;
      a.closest(".product").hasClass("product-type-external") ||
        (wc_add_to_cart_params &&
          "yes" === wc_add_to_cart_params.cart_redirect_after_add) ||
        (t.preventDefault(), 1 == e.state.processing) ||
        ((e.state.processing = !0),
        (e.state.productID = !1),
        (e.state.type = "regular"),
        0 < a.parents(".nectar-quick-view-box").length &&
          (e.state.type = "quickview"),
        (n = a.closest(".product")),
        (i = a.find("button.single_add_to_cart_button")),
        (t = a.serializeArray()),
        (a = 0),
        n.is('[id*="product-"]') &&
          (a = n.attr("id").match(/\d+/)) &&
          a[0] &&
          (e.state.productID = a[0]),
        !1 === e.state.productID &&
          0 < i.length &&
          (a = i.val().match(/\d+/)) &&
          a[0] &&
          (e.state.productID = a[0]),
        !1 !== e.state.productID
          ? ((i =
              "quickview" === e.state.type
                ? $(
                    ".single_add_to_cart_button_wrap .single_add_to_cart_button"
                  )
                : i).prepend(
              '<div class="loading-wrap"><div class="loading" /></div></div>'
            ),
            setTimeout(function () {
              i.addClass("processing");
            }, 50),
            t.push(
              { name: "action", value: "nectar_ajax_add_to_cart" },
              { name: "add-to-cart", value: e.state.productID }
            ),
            $.ajax({
              type: "POST",
              url: T.nectarLove.ajaxurl,
              data: t,
              cache: !1,
              success: function (t) {
                setTimeout(function () {
                  (e.state.processing = !1),
                    i.removeClass("processing"),
                    i.find(".loading-wrap").remove();
                }, 300),
                  t &&
                    t.fragments &&
                    ($("body").trigger("added_to_cart", [
                      t.fragments,
                      t.cart_hash,
                    ]),
                    t.notices &&
                      0 < t.notices.length &&
                      setTimeout(function () {
                        e.addNotices(t.notices);
                      }, 100),
                    "quickview" === e.state.type &&
                      $(".nectar-quick-view-box .close").trigger("click"));
              },
            }))
          : console.log("Error: no product ID found."));
    }),
    (on.prototype.setup = function () {
      (this.$container = $('<div class="inner"></div>')),
        $("#search-outer").append(
          $(
            '<div class="nectar-ajax-search-results"><div class="container"></div></div>'
          )
        ),
        (this.$parent = $("#search-outer .nectar-ajax-search-results")),
        $("#search-outer .nectar-ajax-search-results .container").append(
          this.$container
        );
    }),
    (on.prototype.events = function () {
      var t,
        e,
        a,
        n = this;
      (this.throttled =
        ((t = this.getResults.bind(this)),
        (a = !(e = 350)),
        function () {
          a ||
            (t.call(),
            (a = !0),
            setTimeout(function () {
              a = !1;
            }, e));
        })),
        this.$el.on("keyup", this.keyHandle.bind(this)),
        $(T).on("resize", this.resize.bind(this)),
        $(T).on("nectar-search-close", function () {
          n.resetHeight(), n.requestCheck();
        });
    }),
    (on.prototype.keyHandle = function (t) {
      -1 == [16, 91, 32, 37, 39, 17].indexOf(t.keyCode) &&
        (this.throttled(), this.debouncedSearch());
    }),
    (on.prototype.debouncedSearch = function () {
      var t = this;
      clearTimeout(this.timeout),
        (this.timeout = setTimeout(function () {
          t.state.requesting || t.getResults();
        }, 400));
    }),
    (on.prototype.resize = function () {
      this.$parent.css({ "max-height": "" }),
        !0 === this.state.open &&
          this.$parent.css({
            "max-height": parseInt(this.$container.outerHeight()) + "px",
          });
    }),
    (on.prototype.resetHeight = function () {
      this.$parent.css({ "max-height": "" }),
        setTimeout(function () {
          u.removeClass("results-shown");
        }, 400),
        (this.state.prevResults = ""),
        (this.state.open = !1);
    }),
    (on.prototype.requestCheck = function () {
      !0 === this.state.requesting &&
        (this.request.abort(), (this.state.requesting = !1));
    });
  var un = {
    timeoutQueued: !(on.prototype.getResults = function () {
      var e = this,
        t = this.$el.val();
      if (0 == t.length || t.length < this.minChars)
        return (
          u.removeClass("results-shown"),
          this.requestCheck(),
          void this.resetHeight()
        );
      (this.request = $.ajax({
        type: "POST",
        url: T.nectarLove.ajaxurl,
        data: { action: "nectar_ajax_ext_search_results", search: t },
        cache: !1,
        success: function (t) {
          (e.state.requesting = !1),
            t || e.resetHeight(),
            t &&
              t.content &&
              t.content !== e.state.prevResults &&
              e.$searchEl.hasClass("material-open") &&
              (e.$container.html(t.content),
              e.$parent.css({
                "max-height": parseInt(e.$container.outerHeight()) + "px",
              }),
              setTimeout(function () {
                u.addClass("results-shown");
              }, 200),
              1e3 <= gt.winW &&
                !u.hasClass("results-shown") &&
                (e.$container
                  .find(".product, .search-post-item")
                  .css({
                    opacity: "0",
                    transform: "translateY(25px)",
                    transition: "none",
                  }),
                setTimeout(function () {
                  e.$container
                    .find(".product, .search-post-item")
                    .css({
                      transition:
                        "box-shadow 0.25s ease, opacity 0.55s cubic-bezier(0.2, 0.6, 0.4, 1), transform 0.55s cubic-bezier(0.2, 0.6, 0.4, 1)",
                    });
                }, 50),
                e.$container
                  .find(".product, .search-post-item")
                  .each(function (t) {
                    var e = $(this);
                    setTimeout(function () {
                      e.css({ opacity: "1", transform: "translateY(0)" });
                    }, 50 + 60 * t);
                  })),
              (e.state.open = !0),
              (e.state.prevResults = t.content));
        },
      })),
        (this.state.requesting = !0);
    }),
    visible: !0,
    init: !1,
    raf: "",
    bodyOffsetHeight: 1e4,
  };
  function pn() {
    var i = 0,
      s =
        0 == C && 0 < $('#page-header-bg[data-parallax="1"]').length ? 200 : 60,
      t = 2,
      r = 0 < $('.page-submenu[data-sticky="true"]').length;
    (un.bodyOffsetHeight = I.body.offsetHeight),
      0 == un.init &&
        setInterval(function () {
          1 != ft.materialOffCanvasOpen &&
            (un.bodyOffsetHeight = I.body.offsetHeight);
        }, 1500),
      (un.raf = requestAnimationFrame(function t() {
        u[0].classList.add("detached");
        var e = gt.scrollTop,
          a = Math.abs(e - i),
          n,
          a;
        return (
          1 == ft.animatedScrolling || 1 == ft.preventScroll || 1 == ft.ocmOpen
            ? s < e &&
              (1 == ft.animatedScrolling &&
                1 == C &&
                0 == ft.permanentTransHeader &&
                u.removeClass("transparent").addClass("scrolling"),
              (i = gt.scrollTop),
              (e = gt.scrollTop))
            : 1 == ft.materialOffCanvasOpen || 1 == ft.materialSearchOpen
            ? 1 == ft.materialSearchOpen &&
              1 == C &&
              (0 == ft.permanentTransHeader && s < e
                ? u.removeClass("transparent").addClass("scrolling")
                : u.addClass("transparent").removeClass("scrolling"))
            : (u.hasClass("side-widget-open") ||
                $("#header-outer .slide-out-widget-area-toggle a").hasClass(
                  "animating"
                ) ||
                (0 < p.length &&
                  (s < e
                    ? (p.addClass("hide-up"),
                      u.css(
                        "transform",
                        "translateY(-" + gt.secondaryHeaderHeight + "px)"
                      ))
                    : (p.removeClass("hide-up"), u.css("transform", "0px)"))),
                s < e
                  ? (0 == ft.permanentTransHeader &&
                      (0 == un.timeoutQueued &&
                        setTimeout(function () {
                          0 == ft.ocmOpen &&
                            (u.removeClass("transparent"),
                            u.addClass("scrolling")),
                            (un.timeoutQueued = !1);
                        }, 400),
                      (un.timeoutQueued = !0)),
                    u.removeClass("no-transition"),
                    2 <= a &&
                      (i < e
                        ? (u.hasClass("invisible") ||
                            (u.addClass("invisible").removeClass("at-top"),
                            1e3 < gt.winW &&
                              0 < $(".sf-menu").length &&
                              $().superfish &&
                              ($(".sf-menu").superfish("hide"),
                              $(
                                "header#top nav > ul.sf-menu > li.menu-item-over"
                              ).removeClass("menu-item-over"))),
                          1 == r &&
                            $(".page-submenu.stuck")
                              .css("transform", "translateY(0px)")
                              .addClass("header-not-visible"))
                        : (u.hasClass("invisible") &&
                            u.removeClass("invisible"),
                          1 == r &&
                            ((n = u.outerHeight()),
                            0 < p.length && (n -= gt.secondaryHeaderHeight),
                            0 < m.length && 999 < gt.winW
                              ? ((o = ct ? m.height() : 0),
                                $(".page-submenu.stuck")
                                  .css(
                                    "transform",
                                    "translateY(" + (n - o) + "px)"
                                  )
                                  .removeClass("header-not-visible"))
                              : $(".page-submenu.stuck")
                                  .css("transform", "translateY(" + n + "px)")
                                  .removeClass("header-not-visible")))))
                  : ((a = 0 < p.length ? 32 : 0),
                    e <=
                      (a =
                        0 < m.length
                          ? 0 < p.length
                            ? 32 + m.height()
                            : m.height()
                          : a) &&
                      (u
                        .addClass("at-top")
                        .removeClass("invisible")
                        .removeClass("scrolling"),
                      999 < gt.winW &&
                      0 < $('#header-outer[data-megamenu-rt="1"]').length &&
                      1 == C &&
                      0 < $("#header-outer .megamenu").length
                        ? 0 == $(".nectar-box-roll").length &&
                          0 ==
                            $(".megamenu.sfHover:not(.width-75):not(.width-50)")
                              .length
                          ? u
                              .addClass("transparent")
                              .css("transform", "translateY(0)")
                              .removeClass("no-transition")
                          : 0 < $(".nectar-box-roll").length &&
                            u
                              .css("transform", "translateY(0)")
                              .addClass("at-top-before-box")
                        : 1 == C && 0 == ut.inUse
                        ? u
                            .addClass("transparent")
                            .css("transform", "translateY(0)")
                        : 1 == ut.inUse &&
                          u
                            .css("transform", "translateY(0)")
                            .addClass("at-top-before-box"))),
                gt.winH + gt.scrollTop + 30 >= un.bodyOffsetHeight &&
                  (u.removeClass("invisible"),
                  1 == r &&
                    ((n = u.outerHeight()),
                    0 < p.length && (n -= gt.secondaryHeaderHeight),
                    0 < m.length && 999 < gt.winW
                      ? ((o = ct ? m.height() : 0),
                        $(".page-submenu.stuck")
                          .css("transform", "translateY(" + (n - o) + "px)")
                          .removeClass("header-not-visible"))
                      : $(".page-submenu.stuck")
                          .css("transform", "translateY(" + n + "px)")
                          .removeClass("header-not-visible")))),
              (i = e)),
          void (un.raf = requestAnimationFrame(t))
        );
      })),
      0 == un.init && (un.init = !0);
  }
  function gn() {
    var t = gt.scrollTop,
      e = gt.winW,
      a = 30;
    (a = 1 == C && !gt.usingMobileBrowser ? 0 : a) < t &&
      1e3 <= e &&
      0 == $("body.material-ocm-open").length &&
      (E.is(".material") &&
        (0 == $("#search-outer.material-open").length &&
          $(
            '#header-outer[data-transparent-header="true"] .bg-color-stripe'
          ).css("transition", "none"),
        0 < p.length &&
          (p.addClass("hide-up"),
          u.css(
            "transform",
            "translateY(-" + gt.secondaryHeaderHeight + "px)"
          ))),
      0 < $('#header-outer[data-megamenu-rt="1"]').length &&
      0 < $('#header-outer[data-transparent-header="true"]').length &&
      0 < $("#header-outer .megamenu").length
        ? "true" == u.attr("data-transparent-header") &&
          0 == $("#header-outer.side-widget-open").length &&
          0 == $('#header-outer[data-permanent-transparent="1"]').length &&
          0 == $(".megamenu.sfHover:not(.width-75):not(.width-50)").length &&
          (u.removeClass("transparent"), u.removeClass("no-transition"))
        : "true" == u.attr("data-transparent-header") &&
          0 == $("#header-outer.side-widget-open").length &&
          0 == $('#header-outer[data-permanent-transparent="1"]').length &&
          u.removeClass("transparent"),
      $(
        "#header-outer:not(.small-nav) header#top nav > ul > li.menu-item-with-margin"
      )
        .stop(!0, !0)
        .animate(
          {
            "margin-right":
              parseInt(
                $("header#top nav > ul > li.menu-item-with-margin").css(
                  "margin-right"
                )
              ) -
              3 * parseInt(y) +
              "px",
          },
          { queue: !1, duration: 250, easing: "easeOutCubic" }
        ),
      $("#header-outer, #search-outer").addClass("small-nav"),
      0 <
        $(
          '#header-outer[data-full-width="true"][data-transparent-header="true"]'
        ).length &&
        0 < m.length &&
        1 == ct &&
        $('#header-outer[data-full-width="true"] header > .container')
          .stop(!0, !0)
          .animate(
            { padding: "0" },
            { queue: !1, duration: 250, easing: "easeOutCubic" }
          ),
      0 < $(".nectar-box-roll").length &&
        0 == $('#header-outer[data-permanent-transparent="1"]').length &&
        $("#ajax-content-wrap").animate(
          {
            "margin-top": Math.floor(
              b -
                y +
                (2 * w) / 1.8 +
                gt.adminBarHeight +
                gt.secondaryHeaderHeight
            ),
          },
          { queue: !1, duration: 250, easing: "easeOutCubic" }
        ),
      g.off("scroll.headerResizeEffect", gn),
      g.on("scroll.headerResizeEffect", fn),
      $('#header-outer[data-transparent-header="true"]').css(
        "transition",
        "transform 0.3s ease, background-color 0.30s ease, opacity 0.3s ease, box-shadow 0.30s ease, margin 0.25s ease-out, backdrop-filter 0.25s ease"
      ),
      $('#header-outer[data-transparent-header="true"] .cart-menu').css(
        "transition",
        "none"
      ),
      setTimeout(function () {
        $('#header-outer[data-transparent-header="true"]').css(
          "transition",
          "transform 0.3s ease, background-color 0.30s ease, opacity 0.3s ease, box-shadow 0.30s ease, border-color 0.30s ease, margin 0.25s ease-out, backdrop-filter 0.25s ease"
        ),
          $('#header-outer[data-transparent-header="true"] .cart-menu').css(
            "transition",
            "border-color 0.30s ease"
          );
      }, 300));
  }
  function fn() {
    var t = gt.scrollTop,
      e = gt.winW,
      a = 30;
    if (E.is(".material-ocm-open")) return !1;
    ((t <= (a = 1 == C && !gt.usingMobileBrowser ? 0 : a) && 1e3 <= e) ||
      (0 < $(".small-nav").length &&
        0 < $("#ajax-content-wrap.no-scroll").length)) &&
      ($("#header-outer, #search-outer").removeClass("small-nav"),
      0 < $('#header-outer[data-megamenu-rt="1"]').length &&
      0 < $('#header-outer[data-transparent-header="true"]').length &&
      0 < $("#header-outer .megamenu").length
        ? "true" == u.attr("data-transparent-header") &&
          0 == $(".nectar-box-roll").length &&
          0 == $(".megamenu.sfHover:not(.width-75):not(.width-50)").length &&
          (u.addClass("transparent"), u.removeClass("no-transition"))
        : "true" == u.attr("data-transparent-header") &&
          0 == $(".nectar-box-roll").length &&
          u.addClass("transparent"),
      0 <
        $(
          '#header-outer[data-full-width="true"][data-transparent-header="true"]'
        ).length &&
        0 < m.length &&
        1 == ct &&
        $('#header-outer[data-full-width="true"] header > .container')
          .stop(!0, !0)
          .animate(
            { padding: "0 28px" },
            { queue: !1, duration: 250, easing: "easeOutCubic" }
          ),
      $("header#top nav > ul > li.menu-item-with-margin")
        .stop(!0, !0)
        .animate(
          {
            "margin-right":
              parseInt(
                $("header#top nav > ul > li.menu-item-with-margin").css(
                  "margin-right"
                )
              ) +
              3 * parseInt(y) +
              "px",
          },
          { queue: !1, duration: 150, easing: "easeOutCubic" }
        ),
      0 < p.length &&
        (p.removeClass("hide-up"),
        u.removeClass("hide-up").css("transform", "translateY(0%)")),
      0 < $(".nectar-box-roll").length &&
        0 == $('#header-outer[data-permanent-transparent="1"]').length &&
        $("#ajax-content-wrap").animate(
          {
            "margin-top": Math.floor(
              b + 2 * w + gt.adminBarHeight + gt.secondaryHeaderHeight
            ),
          },
          { queue: !1, duration: 250, easing: "easeOutCubic" }
        ),
      g.off("scroll.headerResizeEffect", fn),
      g.on("scroll.headerResizeEffect", gn),
      $('#header-outer[data-transparent-header="true"]').css(
        "transition",
        "transform 0.3s ease, background-color 0.30s ease, opacity 0.3s ease, box-shadow 0.30s ease, margin 0.25s ease-out, backdrop-filter 0.25s ease"
      ),
      $('#header-outer[data-transparent-header="true"] .cart-menu').css(
        "transition",
        "none"
      ),
      setTimeout(function () {
        $('#header-outer[data-transparent-header="true"]').css(
          "transition",
          "transform 0.3s ease, background-color 0.30s ease, opacity 0.3s ease, box-shadow 0.30s ease, border-color 0.30s ease, margin 0.25s ease-out, backdrop-filter 0.25s ease"
        ),
          $('#header-outer[data-transparent-header="true"] .cart-menu').css(
            "transition",
            "border-color 0.30s ease"
          );
      }, 300));
  }
  function mn() {
    (0 <
      $(
        '#header-outer[data-format="centered-menu-bottom-bar"][data-condense="true"]'
      ).length &&
      !u.hasClass("within-custom-breakpoint")) ||
      (0 < gt.scrollTop &&
        (0 < $("body.material").length &&
          (u.addClass("scrolled-down"),
          0 < p.length &&
            1e3 < gt.winW &&
            (p.addClass("hide-up"),
            u.css(
              "transform",
              "translateY(-" + gt.secondaryHeaderHeight + "px)"
            ))),
        "true" == u.attr("data-transparent-header") &&
          0 == $('#header-outer[data-permanent-transparent="1"]').length &&
          u.removeClass("transparent").addClass("scrolled-down"),
        g.off("scroll.headerResizeEffectOpaque", mn),
        g.on("scroll.headerResizeEffectOpaque", vn)));
  }
  function vn() {
    (0 <
      $(
        '#header-outer[data-format="centered-menu-bottom-bar"][data-condense="true"]'
      ).length &&
      !u.hasClass("within-custom-breakpoint")) ||
      (0 == gt.scrollTop &&
        0 == $("body.material-ocm-open").length &&
        (0 < $('#header-outer[data-megamenu-rt="1"]').length &&
        0 < $('#header-outer[data-transparent-header="true"]').length &&
        0 < $("#header-outer .megamenu").length
          ? "true" == u.attr("data-transparent-header") &&
            0 == $(".megamenu.sfHover:not(.width-75):not(.width-50)").length
            ? (u.addClass("transparent").removeClass("scrolled-down"),
              u.removeClass("no-transition"))
            : "true" == u.attr("data-transparent-header") &&
              u.removeClass("scrolled-down")
          : "true" == u.attr("data-transparent-header") &&
            u.addClass("transparent").removeClass("scrolled-down"),
        0 < $("body.material").length &&
          (u.removeClass("scrolled-down"),
          0 < p.length &&
            1e3 < gt.winW &&
            (p.removeClass("hide-up"),
            u.removeClass("hide-up").css("transform", "translateY(0%)"))),
        g.off("scroll.headerResizeEffectOpaque", vn),
        g.on("scroll.headerResizeEffectOpaque", mn)));
  }
  function bn() {
    1 != ft.materialOffCanvasOpen
      ? (5 < gt.scrollTop
          ? "scrolled" != ft.mobileHeader &&
            (0 == ft.permanentTransHeader && u.removeClass("transparent"),
            0 < gt.secondaryHeaderHeight
              ? (p.addClass("hide-up"),
                u
                  .css(
                    "transform",
                    "translateY(-" + gt.secondaryHeaderHeight + "px)"
                  )
                  .addClass("hidden-secondary"))
              : u.removeClass("hidden-secondary"),
            u.addClass("scrolled-down"),
            (ft.mobileHeader = "scrolled"))
          : "at-top" != ft.mobileHeader &&
            ("true" == u.attr("data-transparent-header") &&
              u.addClass("transparent"),
            0 < gt.secondaryHeaderHeight &&
              (p.removeClass("hide-up"), u.css("transform", "translateY(0px)")),
            u.removeClass("hidden-secondary").removeClass("scrolled-down"),
            (ft.mobileHeader = "at-top")),
        gt.winW < 1e3 && requestAnimationFrame(bn))
      : requestAnimationFrame(bn);
  }
  function wn() {
    999 < gt.winW ||
      ((ft.mobileHeader = ""),
      g.off("scroll.headerResizeEffect"),
      g.off("scroll.headerResizeEffectOpaque"),
      "1" == k && 0 == $('#header-outer[data-remove-fixed="1"]').length
        ? 0 < $('#header-outer[data-mobile-fixed="1"]').length
          ? (0 < $(".nectar-box-roll").length &&
              u.addClass("at-top-before-box"),
            cancelAnimationFrame(un.raf),
            pn())
          : (cancelAnimationFrame(un.raf),
            u
              .removeClass("scrolled-down")
              .removeClass("detached")
              .removeClass("invisible")
              .removeClass("at-top")
              .css("transform", "none"))
        : 0 < $('#header-outer[data-mobile-fixed="1"]').length
        ? requestAnimationFrame(bn)
        : "true" == u.attr("data-transparent-header") &&
          u.addClass("transparent"),
      g.off("smartresize.nectarNavScrollEffects"),
      g.on("smartresize.nectarNavScrollEffects", yn));
  }
  function yn() {
    gt.winW < 1e3 ||
      (1 == _ && "1" != k
        ? (g.off("scroll.headerResizeEffect"),
          (0 == $("#nectar_fullscreen_rows").length ||
            (0 <
              $('#nectar_fullscreen_rows[data-mobile-disable="on"]').length &&
              gt.usingMobileBrowser)) &&
            g.on("scroll.headerResizeEffect", gn))
        : "1" != k
        ? (g.off("scroll.headerResizeEffectOpaque"),
          g.on("scroll.headerResizeEffectOpaque", mn))
        : "1" == k &&
          (0 < $(".nectar-box-roll").length && u.addClass("at-top-before-box"),
          0 == $('#header-outer[data-remove-fixed="1"]').length &&
            (cancelAnimationFrame(un.raf), pn())),
      0 <
        $(
          '#header-outer[data-format="centered-menu-bottom-bar"][data-condense="true"]'
        ).length &&
        (0 < p.length && u.css("transform", ""),
        200 < gt.scrollTop &&
          !u.hasClass("fixed-menu") &&
          u.addClass("fixed-menu")),
      g.off("smartresize.nectarNavScrollEffects"),
      g.on("smartresize.nectarNavScrollEffects", wn));
  }
  function _n() {
    var t, t;
    0 < $(".mobile").length
      ? (gt.winH < gt.winW &&
          1e3 < gt.winW &&
          0 != $("#header-outer.small-nav").length) ||
        $("#header-space").css("height", u.outerHeight()).addClass("calculated")
      : 0 == $(".nectar-parallax-scene.first-section").length &&
        ((t = w - w / 1.8),
        (t =
          0 < $('#header-outer[data-header-resize="1"]').length &&
          0 < $(".small-nav").length
            ? u.outerHeight() + (parseInt(y) + 2 * t)
            : u.outerHeight()),
        7 < Math.abs(t - $("#header-space").height()) &&
          $("#header-space").css("height", t).addClass("calculated"));
  }
  function Cn() {
    var t = -1,
      a = gt.scrollTop;
    function e() {
      if (!E.hasClass("compose-mode")) {
        if (((a = gt.scrollTop), t == a)) return requestAnimationFrame(e), !1;
        (t = a), n(), requestAnimationFrame(e);
      }
    }
    function n() {
      var t = 0,
        t,
        e;
      gt.winW < 1e3 ||
      (1 == r && "none" == $("#header-outer .span_9").css("display")) ||
      (1 == r && "none" == $("#header-outer .span_9 > nav").css("display"))
        ? ((t = 0),
          (e = "fixed" == l.css("position") ? l.height() : 0),
          (t += gt.adminBarHeight) - a > e
            ? u.css("top", t - a + "px")
            : u.css("top", e))
        : 0 == r &&
          ((t = 0),
          u.is('[data-remove-fixed="1"]') || (t += gt.adminBarHeight),
          u.css("top", t + "px"));
    }
    0 < $('#header-outer[data-mobile-fixed="1"]').length &&
      0 < l.length &&
      ((0 == $("#nectar_fullscreen_rows").length ||
        (0 < $("#nectar_fullscreen_rows").length && gt.usingMobileBrowser)) &&
        requestAnimationFrame(e),
      g.on("smartresize", n));
  }
  function xn() {
    var t = 0,
      e = 0,
      a;
    u.is("[data-logo-height]") && u.is("[data-padding]")
      ? u.hasClass("transparent") ||
        (t =
          "centered-menu-bottom-bar" == u.attr("data-format") && 1e3 < gt.winW
            ? u.outerHeight()
            : 0 < u.find("#logo.no-image").length
            ? "left-header" == x && 1e3 < gt.winW
              ? 0
              : parseInt(u.find("#logo.no-image").height()) +
                parseInt(2 * u.attr("data-padding"))
            : "left-header" == x && 1e3 < gt.winW
            ? 0
            : parseInt(u.attr("data-logo-height")) +
              parseInt(2 * u.attr("data-padding")))
      : (t = "left-header" == x && 1e3 < gt.winW ? 0 : u.outerHeight()),
      0 < d.length && (e += d.height()),
      0 < $(".page-header-no-bg").length &&
        (e += $(".page-header-no-bg").height()),
      0 < gt.winH - gt.adminBarHeight - t - gt.footerOuterHeight - 1 - e
        ? ((a =
            0 <
            $('body:not(.material) #header-outer[data-header-resize="1"]')
              .length
              ? 55
              : 0),
          $(
            'body[data-footer-reveal="1"]:not(.nectar_using_pfsr) .container-wrap'
          ).css({ "margin-bottom": gt.footerOuterHeight }),
          $(".container-wrap").css({
            "min-height":
              gt.winH - gt.adminBarHeight - t - gt.footerOuterHeight - e + a,
          }))
        : $(
            'body[data-footer-reveal="1"]:not(.nectar_using_pfsr) .container-wrap'
          ).css({ "margin-bottom": gt.footerOuterHeight }),
      gt.winW < 1e3
        ? i.attr("data-midnight", "light")
        : i.removeAttr("data-midnight");
  }
  function kn() {
    (0 < $('body[data-footer-reveal="1"]').length ||
      0 <
        $(
          'body.material[data-slide-out-widget-area-style="slide-out-from-right"]'
        ).length) &&
      (setTimeout(xn, 60),
      xn(),
      g.on("resize", xn),
      0 <
        $('body[data-footer-reveal="1"][data-footer-reveal-shadow="large_2"]')
          .length &&
        $(".container-wrap").css({
          boxShadow: "0 70px 110px -30px " + i.css("backgroundColor"),
        }));
  }
  function $n(t) {
    (this.$el = t),
      (this.offsetTop = 0),
      (this.fullHeight = 100),
      (this.storedWinH = gt.winH),
      this.events(),
      this.calculate();
  }
  function Tn() {
    (ot = []),
      $(".vc_row-o-full-height").each(function (t) {
        ot[t] = new $n($(this));
      });
  }
  function In() {
    var t = T.navigator.userAgent.indexOf("MSIE ");
    (0 < t || navigator.userAgent.match(/Trident.*rv\:11\./)) &&
      $(".vc_row-o-full-height").each(function () {
        "flex" === $(this).find("> .span_12").css("display") &&
          $(this).wrap('<div class="vc_ie-flexbox-fixer"></div>');
      }),
      (0 < t || navigator.userAgent.match(/Trident.*rv\:11\./)) &&
        (En(), $(T).on("resize", En));
  }
  function En() {
    $(".img-with-aniamtion-wrap img.img-with-animation").each(function () {
      var t, e;
      0 == $(this).parents(".tabbed").length &&
        0 == $(this).parents(".toggle").length &&
        ((t = $(this).parents(".img-with-aniamtion-wrap")).css({ height: "" }),
        (e = $(this).height()),
        t.css({ height: e }));
    });
  }
  function On() {
    $(".nectar-recent-posts-slider").each(function () {
      var t = parseInt($(this).attr("data-height")),
        e =
          0 < $('body[data-ext-responsive="true"]').length
            ? g.width() / 1400
            : g.width() / 1100,
        a = $(this).find(".nectar-recent-post-slide, .flickity-viewport"),
        n,
        e,
        t,
        e;
      1e3 < gt.winW && 0 == $("#boxed").length
        ? 0 == $(this).parents(".full-width-content").length &&
          ((0 < $('body[data-ext-responsive="true"]').length &&
            1400 <= gt.winW) ||
            (0 == $('body[data-ext-responsive="true"]').length &&
              1100 <= gt.winW))
          ? a.css("height", Math.ceil(t))
          : a.css("height", Math.ceil(t * e))
        : (n =
            0 ==
            (n =
              0 < $(this).parents(".wpb_column").length
                ? $(this).parents(".wpb_column")
                : $(this).parents(".col")).length
              ? $(".main-content")
              : n).hasClass("vc_span12") ||
          n.hasClass("main-content") ||
          n.hasClass("span_12") ||
          n.hasClass("vc_col-sm-12")
        ? t * e <= 250
          ? a.css("height", 250)
          : a.css("height", Math.ceil(t * e))
        : (e =
            t /
            ((e = 1100),
            "2" ==
            (t = $((t = n))
              .attr("class")
              .match(/\d+/))
              ? (e = 170)
              : "3" == t
              ? (e = 260)
              : "4" == t
              ? (e = 340)
              : "6" == t
              ? (e = 530)
              : "8" == t
              ? (e = 700)
              : "9" == t
              ? (e = 805)
              : "10" == t
              ? (e = 916.3)
              : "12" == t && (e = 1100),
            e)) *
            n.width() <=
          250
        ? a.css("height", 250)
        : a.css("height", e * n.width());
    });
  }
  function zn() {
    $(".nectar-recent-posts-single_featured.multiple_featured").each(
      function () {
        var t =
            0 < $(this).find(".project-slides").length
              ? ".project-slide"
              : ".nectar-recent-post-slide",
          e =
            0 < $(this).find(".project-slides").length
              ? ".project-info h1"
              : ".inner-wrap .large-featured-post-title a";
        $(this)
          .find(t)
          .each(function () {
            $(this)
              .find(e)
              .each(function () {
                var t,
                  t = (t = (t = $(this).text()).trim()).split(" ");
                $(this)[0].innerHTML = "";
                for (var e = 0; e < t.length; e++)
                  $(this)[0].innerHTML += "<span>" + t[e] + "</span> ";
              }),
              $(this)
                .find(e + " > span")
                .wrapInner('<span class="inner" />');
          });
      }
    );
  }
  function Hn(t, e) {
    t.find(".nectar-split-heading > * > span").each(function (t) {
      var e = $(this).find("> .inner");
      setTimeout(function () {
        (e[0].style.transform = "translateY(0em)"), (e[0].style.opacity = "1");
      }, 40 * t);
    });
    var t = 40 * t.find(".nectar-split-heading > * > span").length;
    setTimeout(function () {
      e();
    }, 1400 + t);
  }
  function Sn(t) {
    t.find(".nectar-split-heading").each(function (t) {
      var e = $(this).text();
      $(this).addClass("effect-removed"), ($(this)[0].innerHTML = e);
    });
  }
  function An(t) {
    var a = t.hasClass("animated-in") ? " animated" : "";
    t.find("> *").each(function () {
      var t,
        t = (t = (t = $(this).text()).trim()).split(" ");
      $(this)[0].innerHTML = "";
      for (var e = 0; e < t.length; e++)
        $(this)[0].innerHTML +=
          '<span><span class="inner' + a + '">' + t[e] + "</span></span> ";
    }),
      t.addClass("markup-generated");
  }
  function Mn() {
    (0 <
      $('.nectar-split-heading[data-animation-type="line-reveal-by-space"]')
        .length ||
      0 <
        $('.nectar-split-heading[data-animation-type="letter-fade-reveal"]')
          .length) &&
      ($(
        '.nectar-split-heading[data-animation-type="line-reveal-by-space"]:not([data-text-effect="none"])'
      ).each(function () {
        An($(this));
      }),
      $(
        '.nectar-split-heading[data-animation-type="line-reveal-by-space"][data-text-effect*="letter-reveal"]'
      ).each(function () {
        if ($(this).is('[data-m-rm-animation="true"]') && gt.winW < 1e3)
          return !0;
        var n = $(this).hasClass("animated-in")
          ? ' style="transform: none;"'
          : "";
        $(this)
          .find("> *")
          .each(function () {
            var t,
              t = (t = (t = $(this).text()).trim()).split(" ");
            $(this)[0].innerHTML = "";
            for (var e = 0; e < t.length; e++)
              $(this)[0].innerHTML += "<span>" + t[e] + "</span> ";
          }),
          $(this)
            .find("span")
            .each(function () {
              var a = $(this),
                t = $(this).text().split("");
              a.empty(),
                $.each(t, function (t, e) {
                  a.append('<span class="inner"' + n + ">" + e + "</span>");
                });
            }),
          $(this).addClass("markup-generated");
      }));
  }
  function Wn() {
    var t, t, e;
    0 < $(".nectar-recent-posts-slider-inner").length &&
      ((t =
        0 < $(".nectar-recent-posts-slider_multiple_visible").length && "90%"),
      (t = $(".nectar-recent-posts-slider-inner").flickity({
        contain: !0,
        groupCells: t,
        draggable: !0,
        lazyLoad: !1,
        imagesLoaded: !0,
        percentPosition: !0,
        prevNextButtons: !1,
        pageDots: !0,
        resize: !0,
        setGallerySize: !0,
        wrapAround: !0,
        dragThreshold: gt.usingMobileBrowser ? 25 : 3,
        accessibility: !1,
      })),
      setTimeout(function () {
        $(".nectar-recent-posts-slider-inner").addClass("loaded");
      }, 1150),
      t.data("flickity"),
      t.on("dragStart.flickity", function () {
        $(".flickity-viewport").addClass("is-moving");
      }),
      t.on("dragEnd.flickity", function () {
        $(".flickity-viewport").removeClass("is-moving");
      }),
      t.on("select.flickity", function () {
        $(".flickity-viewport").addClass("no-hover"),
          clearTimeout(e),
          (e = setTimeout(function () {
            $(".flickity-viewport").removeClass("no-hover");
          }, 400));
      }),
      On(),
      g.on("resize", On),
      gt.usingMobileBrowser || gt.usingFrontEndEditor || g.on("resize", Fn)),
      $(".nectar-recent-posts-single_featured.multiple_featured").each(
        function (s) {
          0 < $(this).find("> .normal-container").length &&
            $(this).find("> .normal-container").remove(),
            $(this).append(
              '<div class="normal-container container"> <ul class="controls" data-color="' +
                $(this).attr("data-button-color") +
                '" data-num="' +
                $(this).find(".nectar-recent-post-slide").length +
                '"></ul> </div>'
            );
          var r,
            e = $(this),
            a = 0;
          (F[s] = { autorotate: "" }),
            $(this)
              .find(".nectar-recent-post-slide")
              .each(function (t) {
                $(this).find(".recent-post-container").height() > a &&
                  ($(this).siblings().removeClass("tallest"),
                  $(this).addClass("tallest"),
                  (a = $(this).find(".recent-post-container").height()));
                var t =
                  0 == t &&
                  0 <
                    $(this).parents(
                      '.nectar-recent-posts-single_featured.multiple_featured[data-autorotate="none"]'
                    ).length
                    ? 'class="active"'
                    : "";
                e.find(".controls").append(
                  "<li " +
                    t +
                    '><span class="title">' +
                    $(this).find(".large-featured-post-title").text() +
                    "</span></li>"
                );
              }),
            $(this).addClass("js-loaded"),
            $(this)
              .find(".controls li")
              .on("click", function (t) {
                var e, a, n, i, t, a;
                $(this).hasClass("active") ||
                  (void 0 !== t.originalEvent &&
                    $(this).parent().find(".active").addClass("trans-out"),
                  (e = $(this).index()),
                  (a = $(this).parent().find(".active").index()),
                  (n = $(this)),
                  clearTimeout(r),
                  $(this).siblings().removeClass("active"),
                  $(this).addClass("active"),
                  (r = setTimeout(function () {
                    n
                      .parents(".multiple_featured")
                      .find(".nectar-recent-post-slide:not(:eq(" + e + "))")
                      .css("opacity", "0")
                      .removeClass("active"),
                      n.parent().find(".trans-out").removeClass("trans-out");
                  }, 300)),
                  n
                    .parents(".multiple_featured")
                    .find(".nectar-recent-post-slide:not(:eq(" + e + "))")
                    .css("z-index", "10"),
                  n
                    .parents(".multiple_featured")
                    .find(".nectar-recent-post-slide:eq(" + a + ")")
                    .css("z-index", "15"),
                  $(this)
                    .parents(".multiple_featured")
                    .find(".nectar-recent-post-slide")
                    .eq(e)
                    .css({ opacity: "1", "z-index": "20" })
                    .addClass("active"),
                  "none" !=
                    $(this)
                      .parents(".multiple_featured")
                      .attr("data-autorotate") &&
                    ((i = n.parents(
                      ".nectar-recent-posts-single_featured.multiple_featured"
                    )),
                    (t = s),
                    clearInterval(F[t].autorotate),
                    0 < i.attr("data-autorotate").length &&
                      ((a =
                        parseInt(i.attr("data-autorotate")) < 100
                          ? 4e3
                          : parseInt(i.attr("data-autorotate"))),
                      (F[t].autorotate = setInterval(function () {
                        Rn(i);
                      }, a)))));
              }),
            (e = $(this)),
            0 < $(this).attr("data-autorotate").length &&
              "none" != $(this).attr("data-autorotate") &&
              0 == $("body.vc_editor").length &&
              setTimeout(function () {
                var t =
                  parseInt(e.attr("data-autorotate")) < 100
                    ? 4e3
                    : parseInt(e.attr("data-autorotate"));
                (F[s].autorotate = setInterval(function () {
                  Rn(e);
                }, t)),
                  e.find(".controls > li:first-child").addClass("active");
              }, 30);
        }
      ),
      zn(),
      g.on("resize", zn);
  }
  function Bn() {
    $(".nectar-recent-posts-slider").each(function () {
      var t = parseInt($(this).find(".flickity-slider").position().left),
        e = $(this).find(".nectar-recent-post-slide"),
        a = e.length,
        n = e.width(),
        i = $(this).find(".nectar-recent-post-slide:last-child").index(),
        s = $(this).find(
          ".nectar-recent-post-slide:first-child .nectar-recent-post-bg"
        ),
        e = $(this).find(
          ".nectar-recent-post-slide:last-child .nectar-recent-post-bg"
        );
      -3 <= t
        ? e.css("margin-left", parseInt(Math.ceil(n / 3.5)) + "px")
        : e.css("margin-left", "-" + parseInt(Math.ceil((n / 3.5) * i)) + "px"),
        Math.abs(t) >= (a - 1) * n
          ? s.css(
              "margin-left",
              "-" + parseInt(Math.ceil((n / 3.5) * a)) + "px"
            )
          : s.css("margin-left", "0px"),
        $(this)
          .find(".nectar-recent-post-bg")
          .css(
            "transform",
            "translateX(" +
              Math.ceil(
                $(this).find(".flickity-slider").position().left / -3.5
              ) +
              "px)"
          );
    }),
      requestAnimationFrame(Bn);
  }
  function Fn() {
    $(".nectar-recent-posts-slider").each(function () {
      var e = $(this).find(".nectar-recent-post-slide").width();
      $(this)
        .find(".nectar-recent-post-slide")
        .each(function (t) {
          $(this)
            .find(".nectar-recent-post-bg")
            .css("margin-left", "-" + parseInt(Math.ceil(e / 3.5) * t) + "px");
        });
    });
  }
  function Ln() {
    $().flickity
      ? Wn()
      : setTimeout(function () {
          Wn();
        }, 200),
      $('.blog-recent[data-style="classic_enhanced_alt"] .inner-wrap').each(
        function () {
          $(this)
            .find(".post-featured-img")
            .each(function () {
              var t = $(this).find("img").attr("src");
              $(this).css("background-image", "url(" + t + ")");
            });
        }
      ),
      $('.blog-recent[data-style="classic_enhanced"]').each(function () {
        0 == $(this).find(".inner-wrap.has-post-thumbnail").length &&
          $(this).addClass("no-thumbs");
      }),
      gt.usingMobileBrowser ||
        (0 < $(".nectar-recent-posts-slider").length &&
          !gt.usingFrontEndEditor &&
          T.requestAnimationFrame(Bn)),
      gt.usingMobileBrowser || gt.usingFrontEndEditor || Fn();
  }
  function qn() {
    $(".style-5").each(function () {
      $(this).find(".sizer").insertBefore($(this).find(".parallaxImg"));
    }),
      $(".style-5").parents(".wpb_row").css("z-index", "100");
    var t = I,
      e = (t.getElementsByTagName("body")[0], T),
      a = t.querySelectorAll(".parallaxImg"),
      n = a.length,
      i = "ontouchstart" in e || navigator.msMaxTouchPoints,
      s = !1;
    if (!(n <= 0)) {
      for (var r = 0; r < n; r++) {
        var c = a[r],
          o = c.querySelectorAll(".parallaxImg-layer"),
          l = o.length;
        if (!(l <= 0)) {
          for (; c.firstChild; ) c.removeChild(c.firstChild);
          var h = 0,
            u = 80;
          -1 < navigator.userAgent.indexOf("Chrome") &&
          navigator.userAgent.indexOf("Edge/") < 1
            ? ((u = 1), $("html").addClass("cssreflections"))
            : E.addClass("cssreflections");
          var d = t.createElement("div"),
            p = t.createElement("div"),
            g = t.createElement("div"),
            f = t.createElement("div"),
            m = [];
          (c.id = "parallaxImg__" + r),
            (d.className = "parallaxImg-container"),
            (g.className = "parallaxImg-shadow"),
            (f.className = "parallaxImg-layers");
          for (var v = 0; v < l; v++) {
            var b = t.createElement("div"),
              w = t.createElement("div"),
              y = o[v].getAttribute("data-img");
            $(b).html($(o[v]).html()),
              (b.className = "parallaxImg-rendered-layer"),
              b.setAttribute("data-layer", v),
              0 == v &&
                0 == $(c).parents(".wpb_gallery").length &&
                ((w.className = "bg-img"),
                0 < $(c).parents(".nectar-fancy-box").length
                  ? (w.setAttribute("data-nectar-img-src", y), (s = !0))
                  : (w.style.backgroundImage = "url(" + y + ")"),
                b.appendChild(w)),
              f.appendChild(b),
              m.push(b);
          }
          d.appendChild(f),
            c.appendChild(d),
            $(c).wrap('<div class="parallaxImg-wrap" />'),
            (-1 != navigator.userAgent.indexOf("Safari") &&
              -1 == navigator.userAgent.indexOf("Chrome")) ||
              $(c).parent().append(g),
            (i && 0 < $("body.using-mobile-browser").length) ||
              (function (r, o, l, d) {
                $(c)
                  .parents(".style-5")
                  .on("mousemove", function (t) {
                    var e = $(this),
                      a = e.find(".parallaxImg-container"),
                      n = e.find(".parallaxImg-shadow"),
                      i = Date.now(),
                      s = 0 < $(r).parents(".wpb_gallery").length;
                    h + u < i &&
                      ((h = i),
                      T.requestAnimationFrame(function () {
                        _(t, !1, r, o, l, d, e, a, n, s);
                      }));
                  }),
                  $(c)
                    .parents(".style-5")
                    .on("mouseenter", function (t) {
                      C(t, r);
                    }),
                  $(c)
                    .parents(".style-5")
                    .on("mouseleave", function (t) {
                      x(t, r);
                    });
              })(c, m, l, p),
            (function (t, e, a, n) {
              k(!1, t, e, a),
                T.addEventListener("resize", function () {
                  k(!1, t, e, a);
                });
            })(c, m, l);
        }
      }
      s && ia();
    }
    function _(t, e, a, n, i, s, r, o, l, d) {
      if (!$(a.firstChild).hasClass("over")) return x(t, a), 0;
      var c = 0.03,
        h = 0.063,
        u = "1.03",
        p = "-10",
        g = !1;
      0 < $(a).parents(".col.wide").length
        ? ((c = 0.03), (h = 0.063), (g = !0))
        : 0 < $(a).parents(".col.regular").length ||
          0 < $(a).parents(".wpb_gallery").length
        ? (h = c = 0.045)
        : 0 < $(a).parents(".col.tall").length
        ? ((c = 0.05), (h = 0.015), (g = !0))
        : 0 < $(a).parents(".col.wide_tall").length
        ? ((h = c = 0.04), (g = !0))
        : r.hasClass("nectar-fancy-box")
        ? ((c = 0.045), (h = 0.022), (u = "1.06"), (p = "-2"))
        : ((c = 0.045), (h = 0.075));
      var t,
        f = gt.scrollTop,
        m = (e ? t.touches[0] : t).pageX,
        v = (e ? t.touches[0] : t).pageY,
        b = a.getBoundingClientRect(),
        w = a.clientWidth || a.offsetWidth || a.scrollWidth,
        r = a.clientHeight || a.offsetHeight || a.scrollHeight,
        e = 320 / w,
        t = 0.52 - (m - b.left) / w,
        a = 0.52 - (v - b.top - f) / r,
        r = v - b.top - f - r / 2,
        b = c * e * (t - (m - b.left - w / 2)),
        r = h * e * (r - a),
        t =
          1 == d
            ? " perspective(" +
              3 * w +
              "px) rotateX(" +
              1.9 * -r +
              "deg) rotateY(" +
              1.3 * -b +
              "deg)"
            : 0 == g
            ? " perspective(" +
              3 * w +
              "px) rotateX(" +
              r +
              "deg) rotateY(" +
              b +
              "deg)  translateY(" +
              a * p +
              "px) translateX(" +
              t * p +
              "px) scale(" +
              u +
              ")"
            : " perspective(" +
              3 * w +
              "px) rotateX(" +
              r +
              "deg) rotateY(" +
              b +
              "deg)  translateY(" +
              -10 * a +
              "px) translateX(" +
              -10 * t +
              "px) scale(1.013)";
      o.css("transform", t),
        (-1 != navigator.userAgent.indexOf("Safari") &&
          -1 == navigator.userAgent.indexOf("Chrome")) ||
          l.css("transform", t);
    }
    function C(t, e) {
      (e.firstChild.className += " over"),
        (e.className += " over"),
        $(e).addClass("transition"),
        0 < $(e).parents(".wpb_gallery").length
          ? setTimeout(function () {
              $(e).removeClass("transition");
            }, 450)
          : setTimeout(function () {
              $(e).removeClass("transition");
            }, 200);
    }
    function x(t, e) {
      var a = e.clientWidth || e.offsetWidth || e.scrollWidth,
        n = e.firstChild;
      (n.className = n.className.replace(" over", "")),
        (e.className = e.className.replace(" over", "")),
        $(n).css(
          "transform",
          "perspective(" +
            3 * a +
            "px) rotateX(0deg) rotateY(0deg) translateZ(0)"
        ),
        $(e)
          .parents(".parallaxImg-wrap")
          .find(".parallaxImg-shadow")
          .css(
            "transform",
            "perspective(" +
              3 * a +
              "px) rotateX(0deg) rotateY(0deg) translateZ(0)"
          ),
        $(e).addClass("transition"),
        setTimeout(function () {
          $(e).removeClass("transition");
        }, 200);
    }
    function k(t, e, a, n) {
      for (
        var i = e.clientWidth || e.offsetWidth || e.scrollWidth,
          e = e.firstChild,
          s = 0;
        s < n;
        s++
      )
        0 == s
          ? $(a[s]).css("transform", "translateZ(0px)")
          : $(a[s]).css(
              "transform",
              "translateZ(" + ((3 * i) / 27) * (1.1 * s) + "px) "
            );
      (n += 3), $(e).css("transform", "perspective(" + 3 * i + "px)");
    }
  }
  function jn() {
    var t;
    0 != $('.nectar-fancy-box[data-style="hover_desc"]').length &&
      ((t = 0),
      $("body").on(
        "mouseenter touchstart",
        '.nectar-fancy-box[data-style="hover_desc"]',
        function () {
          (t = parseInt($(this).find(".hover-content").outerHeight(!0))),
            $(this).addClass("hovered"),
            $(this)
              .find(".heading-wrap")
              .css("transform", "translateY(-" + t + "px)");
        }
      ),
      $("body").on(
        "mouseleave touchend",
        '.nectar-fancy-box[data-style="hover_desc"]',
        function () {
          $(this).removeClass("hovered"),
            $(this).find(".heading-wrap").css("transform", "translateY(0)");
        }
      ));
  }
  function Pn(t, e) {
    (this.$el = t),
      (this.$iconEl = this.$el.find(e)),
      (this.$innerIconEl = this.$el.find(".inner")),
      (this.initialX = this.$el.width() / 2),
      (this.initialY = this.$el.height() / 2),
      (this.elX = 0),
      (this.elY = 0),
      (this.lastScroll = 0),
      (this.scrollAdjust = 0),
      (this.lastX = this.initialX),
      (this.lastY = this.initialY),
      (this.lastY2 = this.initialY),
      (this.innerLastX = 0),
      (this.innerLastY = 0),
      (this.activeFollow = !1),
      (this.hoverOnly = !1),
      (this.percentage = 0.03),
      this.percentageInterval,
      this.exitTimeout,
      this.$iconEl.css({ top: "0", left: "0" }),
      g.on("resize", this.resizeEvent.bind(this)),
      this.mouseEvents(),
      this.rafLoop();
  }
  function Yn() {
    var n;
    (Y = []),
      E.on(
        "mouseenter",
        '.nectar_video_lightbox[data-parent-hover="1"]',
        function () {
          var t = $(this).parents(".wpb_row");
          t
            .find(
              "> .row-bg-wrap .row-bg, > .nectar-video-wrap .nectar-video-inner"
            )
            .addClass("transition"),
            t
              .find(
                "> .row-bg-wrap .row-bg, > .nectar-video-wrap .nectar-video-inner"
              )
              .css({ transform: "scale(1.08)" });
        }
      ),
      E.on(
        "mouseleave",
        '.nectar_video_lightbox[data-parent-hover="1"]',
        function () {
          $(this)
            .parents(".wpb_row")
            .find(
              "> .row-bg-wrap .row-bg, > .nectar-video-wrap .nectar-video-inner"
            )
            .css({ transform: "scale(1)" });
        }
      ),
      $(".nectar_video_player_self_hosted").each(function (t) {
        !gt.usingMobileBrowser &&
          0 < $(this).find(".play_button.follow_mouse").length &&
          (Y[t] = new Pn($(this), ".play_button.follow_mouse .play"));
      }),
      "IntersectionObserver" in T &&
        ((n = new IntersectionObserver(
          function (t) {
            t.forEach(function (t) {
              var e, a;
              t.isIntersecting &&
                ((a = 200),
                1 < (e = t.target).readyState && (a = 20),
                setTimeout(function () {
                  e.pause(), (e.currentTime = 0), e.play();
                }, a),
                n.unobserve(t.target));
            });
          },
          { root: jt() ? null : I, rootMargin: "-10% 0% -10% 0%", threshold: 0 }
        )),
        $("video.scroll-triggered-play").each(function () {
          n.observe($(this)[0]);
        })),
      $(".nectar-video-box").each(function (e) {
        var a;
        0 < $(this).find(".play_button_mouse_follow").length &&
          ((a = $(this)),
          $(this).imagesLoaded(function () {
            gt.usingMobileBrowser ||
              (Y[e] = new Pn(a, ".play_button_mouse_follow"));
            var t =
              a.is("[data-mouse-icon-color]") &&
              0 < a.attr("data-mouse-icon-color").length
                ? a.attr("data-mouse-icon-color")
                : "#000";
            a.is('[data-mouse-style="solid_color"]') &&
              a
                .find(".play_button_mouse_follow")
                .css({ "background-color": t }),
              a.find(".play_button_mouse_follow").addClass("visible");
          }));
      });
  }
  function Rn(t) {
    var e, a, n;
    0 < $("body.vc_editor").length ||
      ((e =
        0 < t.find(".project-slides").length
          ? ".dot-nav > span"
          : ".controls > li"),
      (a = 0 < t.find(".project-slides").length ? "span" : " li"),
      (n = t.find(e).length),
      (t.find(e + ".active").index() + 1 == n
        ? t.find(e + ":first-child")
        : t.find(e + ".active").next(a)
      ).trigger("click"));
  }
  function Vn() {
    (Q = []),
      "undefined" != typeof SalientRecentProjectsFullScreen &&
        $(".nectar_fullscreen_zoom_recent_projects").each(function (t) {
          Q[t] = new SalientRecentProjectsFullScreen($(this));
        });
  }
  function Xn() {
    0 < $(".infinite_scroll").length &&
      ($(".portfolio-items.infinite_scroll").infinitescroll(
        {
          navSelector: "#pagination",
          nextSelector: "#pagination a:first",
          itemSelector: ".portfolio-items.infinite_scroll .element",
          finishedMsg:
            "<em>Congratulations, you've reached the end of the internet.</em>",
          msgText: " ",
        },
        function (a) {
          var n = $(".portfolio-items.infinite_scroll:not(.carousel)");
          $(a)
            .css("opacity", 0)
            .imagesLoaded(function () {
              var t;
              $(a).css("opacity", 1),
                n.isotope("appended", $(a)),
                $(a).find(".work-item").addClass("ajax-loaded"),
                $(a).addClass("ajax-loaded"),
                $(a).find(".work-meta, .nectar-love-wrap").css({ opacity: 1 }),
                (0 < $(".portfolio-filters-inline").length ||
                  0 < $(".portfolio-filters").length) &&
                  ((t = (
                    0 < $(".portfolio-filters-inline").length
                      ? $(".portfolio-filters-inline a.active")
                      : $(".portfolio-filters a.active")
                  ).attr("data-filter")),
                  $(".portfolio-filters-inline a.active").attr("data-filter"),
                  n.isotope({ filter: t }));
              for (var e = 0; e < W.length; e++) W[e].reLayout();
              if (
                (0 < $(a).find(".work-item.style-5").length && qn(),
                "none" == $(a).find(".inner-wrap").attr("data-animation"))
              )
                $(".portfolio-items .col .inner-wrap").removeClass("animated");
              else {
                for (e = 0; e < W.length; e++)
                  W[e].masonryZindex(), W[e].portfolioAccentColor();
                $(a).each(function () {
                  var t =
                      0 < $("#nectar_fullscreen_rows").length ? "200%" : "90%",
                    e = $(this),
                    a = new Waypoint({
                      element: e[0],
                      handler: function () {
                        var t = e.is(
                          '[data-masonry-type="photography"].masonry-items'
                        )
                          ? 85
                          : 115;
                        setTimeout(function () {
                          e.addClass("animated-in");
                        }, t * e.attr("data-delay-amount")),
                          a.destroy();
                      },
                      offset: t,
                    });
                });
              }
              $(".portfolio-items").each(function () {
                var t = Zt();
                $(this)
                  .find('a[rel^="prettyPhoto"], a.pretty_photo')
                  .attr("rel", "prettyPhoto[" + t + "_gal]")
                  .removeClass("pretty_photo");
              }),
                $(".portfolio-items").each(function () {
                  var t = Zt();
                  $(this)
                    .find('a[data-fancybox^="group_"]')
                    .attr("data-fancybox", "group_" + t);
                }),
                se(),
                setTimeout(function () {
                  for (var t = 0; t < W.length; t++)
                    W[t].masonryZindex(),
                      W[t].reLayout(),
                      W[t].isotopeCatSelection();
                  $(a).removeClass("ajax-loaded");
                }, 700),
                Be();
            });
        }
      ),
      $(".post-area.infinite_scroll .posts-container").infinitescroll(
        {
          navSelector: "#pagination",
          nextSelector: "#pagination a:first",
          itemSelector: ".post-area.infinite_scroll .posts-container .post",
          finishedMsg:
            "<em>Congratulations, you've reached the end of the internet.</em>",
          msgText: " ",
        },
        function (e) {
          0 < $(e).find("[data-nectar-img-src]").length && ia(),
            (0 < $(".masonry.classic").length ||
              0 <
                $(".post-area:not(.masonry):not(.featured_img_left)").length ||
              0 < $(".post-area.standard-minimal").length) &&
              (wt(),
              $().mediaelementplayer &&
                $(e)
                  .find(".wp-audio-shortcode, .wp-video-shortcode")
                  .mediaelementplayer(),
              se(),
              0 < $(".carousel").length && (Ht(), Ft()),
              Ka(),
              $(".testimonial_slider").animate({ opacity: "1" }, 800),
              ga(),
              fa(),
              setTimeout(function () {
                _a(), Ca(), g.trigger("resize");
              }, 500)),
            Be(),
            g.trigger("resize");
          var a = $(".infinite_scroll .posts-container");
          a.parent().hasClass("masonry") && $(e).addClass("masonry-blog-item");
          var t = $(e);
          0 == t.find("img").length
            ? (t = $("body"))
            : jt() &&
              Array.from(t.find("img[srcset]")).forEach(function (t) {
                var e = t.getAttribute("srcset");
                t.setAttribute("srcset", ""), t.setAttribute("srcset", e);
              }),
            t.imagesLoaded(function () {
              a.parent().hasClass("masonry") &&
                !a.parent().hasClass("auto_meta_overlaid_spaced") &&
                a.isotope("appended", $(e));
              for (var t = 0; t < K.length; t++) K[t].flickityBlogInit();
              if (
                ($(e).addClass("ajax-loaded"),
                a.parent().hasClass("classic_enhanced") &&
                  (a
                    .find(
                      ".large_featured.has-post-thumbnail.ajax-loaded .post-featured-img, .wide_tall.has-post-thumbnail.ajax-loaded .post-featured-img"
                    )
                    .each(function () {
                      var t = $(this).find("img").attr("src");
                      $(this).css("background-image", "url(" + t + ")");
                    }),
                  a
                    .find(
                      ".large_featured.ajax-loaded .nectar-flickity, .wide_tall.ajax-loaded .nectar-flickity"
                    )
                    .each(function () {
                      $(this)
                        .find(".cell")
                        .each(function () {
                          var t = $(this).find("img").attr("src");
                          $(this).css("background-image", "url(" + t + ")");
                        });
                    })),
                "none" ==
                  $(e).parents(".posts-container").attr("data-animation"))
              )
                $(e).find(".inner-wrap").removeClass("animated");
              else {
                for (t = 0; t < K.length; t++) K[t].blogMasonryZindex();
                $(e).each(function () {
                  var t = $(this),
                    e = new Waypoint({
                      element: t[0],
                      handler: function () {
                        setTimeout(function () {
                          t.addClass("animated-in");
                        }, 80 * t.attr("data-delay-amount")),
                          e.destroy();
                      },
                      offset: "90%",
                    });
                });
              }
              setTimeout(function () {
                $(e).removeClass("ajax-loaded");
              }, 700);
            });
        }
      ));
  }
  function Nn() {
    350 < gt.scrollTop &&
      !h.is(".fullscreen.open") &&
      ($("#to-top")
        .stop()
        .transition({ transform: "translateY(-50%)" }, 350, "easeInOutCubic"),
      g.off("scroll", Nn),
      g.on("scroll", Dn));
  }
  function Dn() {
    var t;
    (gt.scrollTop < 350 || h.is(".fullscreen.open")) &&
      ((t =
        0 < $("#slide-out-widget-area.fullscreen.open").length ? 1150 : 350),
      $("#to-top")
        .stop()
        .transition({ transform: "translateY(105%)" }, t, "easeInOutQuint"),
      g.off("scroll", Dn),
      g.on("scroll", Nn));
  }
  function Qn() {
    var t;
    0 == $(".nectar-social.fixed").length &&
      ((0 < $("#to-top").length && 1020 < gt.winW) ||
        (0 < $("#to-top").length && 0 < $("#to-top.mobile-enabled").length)) &&
      (350 < gt.scrollTop ? g.on("scroll", Dn) : g.on("scroll", Nn)),
      0 < $('body[data-button-style*="rounded"]').length &&
        ((t = $("#to-top .fa-angle-up").clone()).addClass("top-icon"),
        $("#to-top").prepend(t)),
      E.on("click", '#to-top, a[href="#top"]', function () {
        return (
          $("body,html")
            .stop()
            .animate({ scrollTop: 0 }, 800, "easeOutQuad", function () {
              0 < $(".nectar-box-roll").length &&
                E.trigger("mousewheel", [1, 0, 0]);
            }),
          !1
        );
      });
  }
  function Zn() {
    var a =
      0 < $('body[data-header-format="left-header"]').length && 1e3 < g.width()
        ? 0
        : u.outerHeight();
    (0 < $(".page-template-template-no-header-footer").length ||
      0 < $(".page-template-template-no-header").length) &&
      (a = 0);
    var e = !1;
    $('header#top .sf-menu li a[href="#"]').on("click", function (t) {
      t.preventDefault();
    }),
      0 == $("#nectar_fullscreen_rows").length || 0 == pt.$usingFullScreenRows
        ? $("a.nectar-next-section").each(function () {
            var t, t;
            0 < $(this).parents(".wpb_row:not(.inner_row)").length &&
              0 <
                (t = $(this).parents(".wpb_row:not(.inner_row)")).next(
                  ".wpb_row[id]:not(.inner_row)"
                ).length &&
              ((t = t.next(".wpb_row[id]:not(.inner_row)").attr("id")),
              $(this).attr("href", "#" + t),
              (e = !0));
          })
        : $().fullpage &&
          $("a.nectar-next-section").on("click", function () {
            return $.fn.fullpage.moveSectionDown(), !1;
          }),
      0 < $("#slide-out-widget-area .off-canvas-menu-container").length &&
        $("#slide-out-widget-area .off-canvas-menu-container")
          .find("a[href*='" + location.pathname + "']")
          .each(function () {
            var t = $(this).attr("href");
            "#" != t &&
              -1 != t.indexOf("#") &&
              "#" !== t.substr(t.indexOf("#")) &&
              0 < $("div" + t.substr(t.indexOf("#"))).length &&
              ($(this).attr("href", t.substr(t.indexOf("#"))),
              $(this)
                .parent()
                .removeClass("current_page_item")
                .removeClass("current-menu-item")),
              0 <
                $(
                  'div[data-fullscreen-anchor-id="' +
                    t.substr(t.indexOf("#") + 1) +
                    '"]'
                ).length &&
                $(this)
                  .parent()
                  .removeClass("current_page_item")
                  .removeClass("current-menu-item");
          }),
      $("#header-outer")
        .find("a[href*='" + location.pathname + "']")
        .each(function () {
          var t = $(this).attr("href");
          -1 != t.indexOf("#") &&
            "#" !== t.substr(t.indexOf("#")) &&
            0 < $("div" + t.substr(t.indexOf("#"))).length &&
            ($(this).attr("href", t.substr(t.indexOf("#"))),
            $(this)
              .parent()
              .removeClass("current_page_item")
              .removeClass("current-menu-item")),
            0 <
              $(
                'div[data-fullscreen-anchor-id="' +
                  t.substr(t.indexOf("#") + 1) +
                  '"]'
              ).length &&
              $(this)
                .parent()
                .removeClass("current_page_item")
                .removeClass("current-menu-item");
        }),
      0 < $("#header-outer").length &&
        $("#header-outer")
          .find("a[href*='#']:not([href='#'])")
          .each(function () {
            "#" !== $(this).attr("href") &&
              "#searchbox" !== $(this).attr("href") &&
              "#sidewidgetarea" !== $(this).attr("href") &&
              (e = !0);
          }),
      0 < $("#slide-out-widget-area .off-canvas-menu-container").length &&
        $("#slide-out-widget-area .off-canvas-menu-container")
          .find("a[href*='#']:not([href='#'])")
          .each(function () {
            "#" !== $(this).attr("href") && (e = !0);
          });
    var t = [];
    1 == e && t.push("#header-outer nav"),
      0 < $('.page-submenu[data-sticky="true"] a[href*="#"]').length &&
        t.push('.page-submenu[data-sticky="true"]'),
      0 < t.length &&
        t.forEach(function (t, e) {
          (0 == e ? E : $(T)).scrollspy({
            target: t,
            offset: a + gt.adminBarHeight + 40,
          });
        });
  }
  function Gn() {
    var a = T.location.hash,
      t =
        (a = a && 0 < a.length ? a.replace(/<|>/g, "") : a) && 0 < a.length
          ? a.substring(1, a.length)
          : 0,
      n = w - w / 1.8,
      e = 0,
      i,
      s,
      t;
    t && (e = (e = t.split("/")).length),
      t && 1 < e && ((t = t.replace(/\//g, "")), (a = a.replace(/\//g, ""))),
      ((a && 0 < $(".main-content").find(a).length) ||
        (a &&
          0 <
            $(".main-content").find('[data-fullscreen-anchor-id="' + t + '"]')
              .length)) &&
        ((i =
          0 < $(".main-content").find(a).length
            ? $(".main-content").find(a)
            : $(".main-content").find(
                '[data-fullscreen-anchor-id="' + t + '"]'
              )),
        (s =
          0 < $('body[data-header-format="left-header"]').length &&
          1e3 < g.width()
            ? 0
            : $("#header-space").outerHeight()),
        (0 < $(".page-template-template-no-header-footer").length ||
          0 < $(".page-template-template-no-header").length) &&
          (s = 0),
        (t = 100),
        0 < $(".nectar-box-roll").length &&
          0 < $(".container-wrap.bottomBoxOut").length &&
          (ut.boxRoll(null, -1), (t = 2050)),
        0 < $("img[data-nectar-img-src]").length && (ea(), (t = 200)),
        setTimeout(function () {
          var t, e, t, e, e, e;
          !0 === O
            ? ((e =
                $("#header-outer").outerHeight() +
                2 * parseInt($("#header-outer").css("margin-top"))),
              (t = $(a).offset().top - e - gt.adminBarHeight))
            : 0 == $('body[data-permanent-transparent="1"]').length
            ? E.hasClass("mobile")
              ? (t =
                  0 < $('#header-outer[data-mobile-fixed="1"]').length
                    ? i.offset().top + 2 - s + gt.adminBarHeight
                    : i.offset().top - gt.adminBarHeight + 1)
              : ((e =
                  0 < $('#header-outer[data-header-resize="0"]').length
                    ? 0
                    : parseInt(y) + 2 * n),
                0 < $('#header-outer[data-remove-fixed="1"]').length && (s = 0),
                (t = i.offset().top - parseInt(s) + e + 3 - gt.adminBarHeight),
                0 == $("body.mobile").length &&
                  0 < $('#header-outer[data-condense="true"]').length &&
                  0 === $("body.page-template-template-no-header").length &&
                  0 ===
                    $("body.page-template-template-no-header-footer").length &&
                  ((e = $(
                    '#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9'
                  )),
                  (e =
                    u.height() -
                    (parseInt(e.height()) +
                      parseInt($("#header-outer #logo").css("margin-top")))),
                  (t = i.offset().top - parseInt(s) + e - gt.adminBarHeight)))
            : (t = i.offset().top - gt.adminBarHeight + 1),
            0 < $('body[data-hhun="1"]').length &&
              0 == $('#header-outer[data-remove-fixed="1"]').length &&
              0 == $("#header-outer.detached").length &&
              (t += s),
            Gt(
              t -
                (0 < $('.page-submenu[data-sticky="true"]').length
                  ? $(".page-submenu").height()
                  : 0) +
                (0 < $("body.material").length &&
                0 < p.length &&
                0 == $('body[data-hhun="1"]').length &&
                0 == $('#header-outer[data-remove-fixed="1"]').length &&
                !E.hasClass("mobile")
                  ? p.height()
                  : 0),
              700,
              "easeInOutQuint"
            ),
            (ft.animatedScrolling = !0),
            setTimeout(function () {
              ft.animatedScrolling = !1;
            }, 1100);
        }, t));
  }
  function Un() {
    W = [];
    var a = 0;
    $(".portfolio-items:not(.carousel)").each(function (t) {
      var e;
      $(this).attr("instance", t),
        $(this)
          .parent()
          .parent()
          .find("div[class^=portfolio-filters]")
          .attr("instance", t),
        "undefined" != typeof SalientPortfolio
          ? ((W[a] = new SalientPortfolio($(this), Le, lt, Ie)), a++)
          : ((e = $(this)),
            Nt("#salient-portfolio-js-js", 100, function () {
              (W[a] = new SalientPortfolio(e, Le, lt, Ie)), a++;
            }));
    });
  }
  function Jn() {
    690 < gt.winW &&
      $('.posts-container[data-load-animation="perspective"]').css(
        "perspective-origin",
        "50% " + (gt.scrollTop + gt.winH) + "px"
      ),
      requestAnimationFrame(Jn);
  }
  function Kn() {
    0 < $('.posts-container[data-load-animation="perspective"]').length &&
      requestAnimationFrame(Jn);
  }
  function ti(t) {
    "none" == t.attr("data-load-animation")
      ? t.find(".inner-wrap").removeClass("animated")
      : t.find("article").each(function (t) {
          var e, a;
          $(this).visible(!0)
            ? $(this)
                .delay(110 * t)
                .queue(function (t) {
                  $(this).addClass("animated-in"), t();
                })
            : ((e = $(this)),
              (a = new Waypoint({
                element: e[0],
                handler: function () {
                  setTimeout(function () {
                    e.addClass("animated-in");
                  }, 80 * e.attr("data-delay-amount")),
                    a.destroy();
                },
                offset: "90%",
              })));
        });
  }
  function ei() {
    (K = []),
      $(".posts-container").each(function (t) {
        var e;
        $(this).parent().hasClass("masonry") &&
        !$(this).parent().hasClass("auto_meta_overlaid_spaced")
          ? "undefined" != typeof NectarMasonryBlog
            ? (K[t] = new NectarMasonryBlog($(this), Ie, ti))
            : ((e = $(this)),
              Nt("#nectar-masonry-blog-js", 0, function () {
                K[t] = new NectarMasonryBlog(e, Ie, ti);
              }))
          : ti($(this));
      });
  }
  function ai() {
    var t = 50,
      e,
      e,
      t;
    return (
      0 < $('#header-outer[data-remove-fixed="0"]').length &&
        0 == $('#header-outer[data-format="left-header"]').length &&
        ((t += u.outerHeight()),
        0 < $('body[data-contained-header="true"]').length &&
          (t += parseInt(u.css("margin-top"))),
        0 <
          $('#header-outer[data-shrink-num][data-header-resize="1"]').length &&
          ((e =
            parseInt(u.attr("data-padding")) -
            parseInt(u.attr("data-padding")) / 1.8),
          (t -= y),
          (t -= 2 * e)),
        0 == $("body.mobile").length &&
          0 < $('#header-outer[data-condense="true"]').length &&
          ((e = $(
            '#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9'
          )),
          (t = 50),
          (t +=
            u.height() -
            (parseInt(e.position().top) -
              parseInt($("#header-outer #logo").css("margin-top"))) -
            parseInt(gt.secondaryHeaderHeight)))),
      0 < l.length && (t += l.outerHeight()),
      t
    );
  }
  function ni() {
    var e = ai(),
      t;
    if (!(gt.winW < 690 && gt.usingMobileBrowser)) {
      const $ = I.querySelector(".container.main-content");
      $ && $.style.setProperty("--nectar-sticky-top-distance", e + "px");
    }
    $(".nectar-sticky-column-css").each(function () {
      $(this).hasClass("n-sticky-initialized") ||
        (0 == $(this).find(".n-sticky").length &&
          $(this).wrapInner('<div class="n-sticky" />'),
        $(this).addClass("n-sticky-initialized"),
        $(this).hasClass("nectar-sticky-column-css--middle") &&
          new fe($(this)));
    }),
      !$().theiaStickySidebar ||
        (gt.usingMobileBrowser && gt.winW < 1e3) ||
        (0 != pt.$usingFullScreenRows && 1e3 < gt.winW) ||
        ((t =
          '#sidebar[data-nectar-ss="true"], #sidebar[data-nectar-ss="1"], .nectar-scrolling-tabs:not(.navigation_func_active_link_only) .scrolling-tab-nav, .nectar-sticky-column'),
        T.nectarOptions &&
          T.nectarOptions.woo_sticky_sidebar &&
          "1" === T.nectarOptions.woo_sticky_sidebar &&
          (t += ", .woocommerce.archive #sidebar"),
        $(t).each(function () {
          var t = e;
          0 < $(this).parents(".wpb_widgetised_column").length
            ? 0 < $("body.vc_editor").length ||
              $(this)
                .parents(".wpb_column")
                .theiaStickySidebar({
                  additionalMarginTop: t,
                  updateSidebarHeight: !1,
                })
            : $(this).theiaStickySidebar({
                additionalMarginTop: t,
                updateSidebarHeight: !1,
              });
        }));
  }
  function ii() {
    $(".nectar-liquid-bg").removeClass("animated-in");
    for (var t = 0; t < G.length; t++)
      "displace-filter-fade" == G[t].animationType &&
        0 < $(G[t].canvasContainer).parents(".fp-section.active").length &&
        (0 == $(G[t].canvasContainer).find(".image-added-to-stage").length &&
          G[t].imgContainer.addChild(G[t].bg),
        $(G[t].canvasContainer)
          .find(".nectar-liquid-bg")
          .addClass("image-added-to-stage"),
        G[t].animateProps(G[t]));
  }
  function si() {
    var t;
    0 < $("#nectar_fullscreen_rows").length && $().fullpage
      ? ((lt = T.vc_iframe
          ? ".vc_element.vc_vc_row.active "
          : ".wpb_row.active "),
        (t =
          0 < $("#nectar_fullscreen_rows[data-mobile-disable]").length
            ? $("#nectar_fullscreen_rows").attr("data-mobile-disable")
            : "off"),
        "on" != (t = !gt.usingMobileBrowser ? "off" : t)
          ? (dt = !0)
          : (lt = ""),
        "undefined" != typeof NectarFullScreenRows &&
          (pt = new NectarFullScreenRows(Ka, J, ii, gt, Je, tt, B, et)))
      : Nt("#nectar-fullpage-js", 100, si);
  }
  function ri() {
    $(".wpb_column").each(function () {
      var t, e;
      $(this).hasClass("backdrop_filter_blur") &&
        ((t = $(this).closest(".wpb_row")).addClass("row-col-gap"),
        "default" !=
          (e =
            0 < $(this).closest(".wpb_row[data-column-margin]").length
              ? $(this)
                  .closest(".wpb_row[data-column-margin]")
                  .attr("data-column-margin")
              : "default") &&
          t.find(".span_12").first().css({ "column-gap": e }));
    }),
      gt.usingMobileBrowser && E.addClass("using-mobile-browser"),
      0 < T.navigator.userAgent.indexOf("Edge/") && E.addClass("msie"),
      0 == $("html.js").length && $("html").removeClass("no-js").addClass("js"),
      $("code").find("br").remove(),
      $(".wpcf7-form p:has(input[type=submit])").css("padding-bottom", "0px"),
      $(".full-width-content .wpcf7-submit").on("click", function () {
        setTimeout(function () {
          Le();
        }, 1e3),
          setTimeout(function () {
            Le();
          }, 2e3);
      }),
      $(".gform_body").on("click", function () {
        setTimeout(function () {
          Le();
        }, 200);
      }),
      $(
        ".pum.pum-theme-salient-page-builder-optimized button.pum-close"
      ).wrapInner("<span />"),
      $(T).on("pumBeforeOpen", function () {
        T.dispatchEvent(new Event("resize"));
      }),
      0 < $("#nectar_fullscreen_rows").length &&
        0 <
          $(
            ".pum-container .pum-content > .wpb_row .full-page-inner > .container > .span_12"
          ).length &&
        $(
          ".pum-container .pum-content > .wpb_row .full-page-inner > .container > .span_12"
        ).unwrap(),
      0 < $(".single .blog_next_prev_buttons").length &&
        $(".container-wrap").css("padding-bottom", 0),
      $(".full-width-section").each(function () {
        $(this)
          .find("> .span_12 > div.col_last")
          .last()
          .css("margin-bottom", "0");
      }),
      $(".full-width-content .col.boxed").removeClass("boxed"),
      $(".wpb_column.neg-marg")
        .parents(".wpb_row:not(.inner_row):not(.zindex-set)")
        .css("z-index", "110"),
      $(".wpb_row.legacy").each(function () {
        0 < $(this).find(".wpb_column").length && $(this).removeClass("legacy");
      });
  }
  function oi() {
    $(".wpb_row").each(function () {
      void 0 !== $(this).find(".span_12").offset() &&
        $(this)
          .find('[class*="vc_col-"]')
          .each(function () {
            var t = $(this).parents(".span_12").offset().left;
            $(this).removeClass("no-left-margin"),
              $(this).offset().left < t + 27
                ? $(this).addClass("no-left-margin")
                : $(this).removeClass("no-left-margin");
          });
    });
  }
  function li() {
    var t = gt.winW,
      e = gt.winH,
      a = 0;
    E.is('[data-flex-cols="true"]') ||
      (0 <
        $('[class*="vc_col-xs-"], [class*="vc_col-md-"], [class*="vc_col-lg-"]')
          .length &&
        (oi(),
        gt.usingMobileBrowser
          ? (T.addEventListener("orientationchange", function () {
              a = 1;
            }),
            g.on("resize", function () {
              ((g.width() != t && g.height != e) || 1 === a) &&
                (oi(), (t = gt.winW), (e = gt.winH), (a = 0));
            }))
          : g.on("resize", oi)));
  }
  function di() {
    0 < $('body[data-fancy-form-rcs="1"]').length &&
      0 == $("#wcfm-main-content").length &&
      ($("select:not(.comment-form-rating #rating)").each(function () {
        var t;
        0 < $(this).parents(".wpcf7-form-control-wrap").length
          ? 1 ==
            (t =
              0 <
              $(this)
                .parents(".wpcf7-form-control-wrap")
                .find(".select2-container").length
                ? $($(this).prev(".select2-container"))
                : $(this))
              .parents(".wpcf7-form-control-wrap")
              .parent()
              .find("label").length
            ? t
                .parents(".wpcf7-form-control-wrap")
                .parent()
                .wrapInner('<div class="fancy-select-wrap" />')
            : t.wrap('<div class="fancy-select-wrap" />')
          : ((t =
              0 < $(this).prev(".select2-container").length
                ? $(this).prev(".select2-container")
                : $(this)),
            0 == $(this).parents("#buddypress").length &&
              0 == $(this).parents(".widget_categories").length &&
              (1 == t.prev("label").length
                ? t
                    .prev("label")
                    .addBack()
                    .wrapAll('<div class="fancy-select-wrap" />')
                : 1 == t.next("label").length
                ? t
                    .next("label")
                    .addBack()
                    .wrapAll('<div class="fancy-select-wrap" />')
                : t.wrap('<div class="fancy-select-wrap" />')));
      }),
      $(
        "select:not(.state_select):not(.country_select):not(.comment-form-rating #rating):not(#tribe-bar-form select):not(.woocommerce-currency-switcher):not(.nectar-custom-product-attr select):not(.flatpickr-calendar select)"
      ).each(function () {
        var t = 690 < gt.winW ? 7 : 200,
          e;
        ($(this).hasClass("skip-select2-search") ||
          0 < $(this).parents(".skip-select2-search").length) &&
          (t = 1e3),
          0 == $(this).parents("#buddypress").length &&
            ((e = { minimumResultsForSearch: t, width: "100%" }),
            ("underline" ==
              (T.nectarOptions && T.nectarOptions.woo_product_variable_select
                ? T.nectarOptions.woo_product_variable_select
                : "default") ||
              0 < $(this).parents(".woocommerce-ordering").length) &&
              (e = {
                minimumResultsForSearch: t,
                dropdownParent: $(this).parent(),
                dropdownAutoWidth: !0,
              }),
            void 0 !== $().select2 && $(this).select2(e));
      }));
  }
  function ci() {
    ((-1 != navigator.userAgent.indexOf("Safari") &&
      -1 == navigator.userAgent.indexOf("Chrome")) ||
      navigator.userAgent.match(/(iPod|iPhone|iPad)/)) &&
      (T.onpageshow = function (t) {
        t.persisted &&
          ($(
            ".nectar-video-wrap, .nectar-slider-wrap .swiper-slide .video-wrap"
          ).each(function () {
            0 < $(this).find("video").length && $(this).find("video")[0].play();
          }),
          0 < $("body.material-ocm-open").length
            ? ($("body > .slide_out_area_close")
                .addClass("non-human-allowed")
                .trigger("click"),
              setTimeout(function () {
                $("body > .slide_out_area_close").removeClass(
                  "non-human-allowed"
                );
              }, 100))
            : 0 <
                $("#slide-out-widget-area.slide-out-from-right-hover.open")
                  .length && navigator.userAgent.match(/(iPod|iPhone|iPad)/)
            ? Ba()
            : (0 < $("#slide-out-widget-area.fullscreen.open").length ||
                0 < $("#slide-out-widget-area.fullscreen-alt.open").length ||
                0 <
                  $("#slide-out-widget-area.slide-out-from-right.open")
                    .length) &&
              ($("#slide-out-widget-area .slide_out_area_close").addClass(
                "non-human-allowed"
              ),
              $(".slide-out-widget-area-toggle:not(.std-menu) a.open")
                .addClass("non-human-allowed")
                .trigger("click"),
              setTimeout(function () {
                $("#slide-out-widget-area .slide_out_area_close").removeClass(
                  "non-human-allowed"
                );
              }, 100)));
      });
  }
  function hi() {
    $(".wpb_row").removeClass("only-ns"),
      $(
        '.nectar-slider-wrap[data-full-width="true"], .page-submenu, .portfolio-items[data-col-num="elastic"]:not(.fullwidth-constrained), .blog-fullwidth-wrap'
      )
        .parents(".wpb_row")
        .addClass("only-ns"),
      $(
        "body.vc_editor.compose-mode .wpb_row .vc_vc_column > .wpb_column > .vc_column-inner"
      ).each(function () {
        var t, e;
        0 < $(this).find("> .vc_element-container > div").length &&
          ((e = (t = $(this).find("> .vc_element-container")).find(
            "> div:first-child"
          )).is(".vc_vc_row_inner")
            ? e.addClass("first-inner-row-el")
            : t.find("> div").removeClass("first-inner-row-el"));
      }),
      $("body.vc_editor.compose-mode .vc_row.inner_row").each(function () {
        $(this).hasClass("row_position_absolute")
          ? $(this).parent().css({ position: "static", "min-height": "0" })
          : $(this).parent().css({ position: "", "min-height": "" });
      }),
      $(
        ".img-with-aniamtion-wrap, .nectar_icon_wrap, .nectar-lottie-wrap, .nectar-cta"
      ).each(function () {
        ($(this).hasClass("position_desktop_absolute") ||
          $(this).hasClass("position_tablet_absolute") ||
          $(this).hasClass("position_phone_absolute")) &&
          $(this).parent().addClass("absolute-parent");
      });
  }
  function ui() {
    $('.vc_element > .wpb_column[class*="padding-"][class*="-percent"]').each(
      function () {
        var t = 4,
          e = this.className.match(/padding-\d+/),
          e;
        (t = e ? ((t = e[0].match(/\d+/)) ? t[0] / 100 : 0) : t) &&
          ((e = $(this).parents(".span_12").width()),
          $(this).is('[data-padding-pos="all"]')
            ? $(this).css("padding", e * t)
            : $(this).is('[data-padding-pos="top"]')
            ? $(this).css("padding-top", e * t)
            : $(this).is('[data-padding-pos="bottom"]')
            ? $(this).css("padding-bottom", e * t)
            : $(this).is('[data-padding-pos="left"]')
            ? $(this).css("padding-left", e * t)
            : $(this).is('[data-padding-pos="right"]')
            ? $(this).css("padding-right", e * t)
            : $(this).is('[data-padding-pos="top-bottom"]')
            ? $(this).css({ "padding-top": e * t, "padding-bottom": e * t })
            : $(this).is('[data-padding-pos="top-right"]')
            ? $(this).css({ "padding-top": e * t, "padding-right": e * t })
            : $(this).is('[data-padding-pos="bottom-right"]')
            ? $(this).css({ "padding-right": e * t, "padding-bottom": e * t })
            : $(this).is('[data-padding-pos="bottom-left"]')
            ? $(this).css({ "padding-left": e * t, "padding-bottom": e * t })
            : $(this).is('[data-padding-pos="left-right"]') &&
              $(this).css({ "padding-left": e * t, "padding-right": e * t }));
      }
    ),
      $('.wpb_row[class*="vc_custom_"]').each(function () {
        $(this).parent().addClass("no-bottom-margin");
      });
  }
  function pi() {
    setTimeout(function () {
      0 < $("body.compose-mode").length &&
        $(".container-wrap").addClass("visible-editor-controls"),
        gt.usingFrontEndEditor &&
          (hi(),
          E.is('[data-flex-cols="true"]') || (ui(), g.on("smartresize", ui)));
    }, 200),
      g.on("vc_reload", function () {
        if (
          (hi(),
          _e(),
          be(),
          It(),
          Be(),
          wt(),
          ge(),
          je(),
          ke(),
          jn(),
          ya(),
          qt(),
          oa(),
          Mn(),
          Yn(),
          Pe(),
          ia(),
          0 < $(".carousel").length && (Ht(), Ft(), Bt()),
          0 < $(".owl-carousel").length &&
            ($(".owl-carousel").each(function () {
              $(this).trigger("destroy.owl.carousel").removeClass("owl-loaded"),
                $(this).find(".owl-stage-outer .owl-stage > *").unwrap(),
                $(this).find(".owl-stage-outer > *").unwrap(),
                $(this).find(".owl-item > *").unwrap(),
                $(this).find(".owl-dots").remove(),
                $(this).find(".owl-nav").remove();
            }),
            St()),
          0 < $(".nectar_cascading_images").length &&
            imagesLoaded($(".nectar_cascading_images"), function () {
              Re();
            }),
          Ie(),
          Fe(),
          Ln(),
          0 < $(".wpb_row.nectar-split-heading-merged").length &&
            $(".wpb_row.nectar-split-heading-merged").removeClass(
              "nectar-split-heading-merged"
            ),
          0 < L.length)
        )
          for (var t = 0; t < L.length; t++)
            L[t].instance.reloadCells(),
              L[t].instance.off("scroll.flickity"),
              L[t].instance.off("dragStart.flickity"),
              L[t].instance.off("dragEnd.flickity");
        if (
          (Ct(),
          setTimeout(function () {
            if ((xt(), 0 < L.length))
              for (var t = 0; t < L.length; t++)
                L[t].instance.reloadCells(), L[t].instance.resize();
          }, 100),
          0 < Z.length)
        )
          for (t = 0; t < Z.length; t++)
            Z[t].instance.flickity("reloadCells"),
              Z[t].instance.off("scroll.flickity"),
              Z[t].instance.off("dragStart.flickity"),
              Z[t].instance.off("dragEnd.flickity");
        for (
          setTimeout(function () {
            if ((0 < $(".nectar-woo-flickity").length && Wt(), 0 < Z.length))
              for (var t = 0; t < Z.length; t++)
                Z[t].instance.flickity("reloadCells"),
                  Z[t].instance.flickity("resize");
          }, 100),
            ga(),
            t = 0;
          t < U.length;
          t++
        )
          ("multiple_visible" != U[t].type &&
            "multiple_visible_minimal" != U[t].type) ||
            (U[t].flickityEl.flickity("reloadCells"),
            U[t].flickityEl.off("select.flickity"),
            ga(),
            U[t].flickityEl.resize()),
            U[t].testimonialSliderHeight();
        if (
          (fa(),
          pa(),
          wa(),
          se(),
          Ke(),
          we(),
          Ua(),
          _a(),
          Ca(),
          Le(),
          setTimeout(Le, 1e3),
          $a(),
          Tn(),
          g.off("scroll.parallaxSections").off("resize.parallaxSections"),
          We(),
          Ae(),
          ei(),
          Un(),
          0 < W.length)
        )
          for (t = 0; t < W.length; t++) W[t].portfolioAccentColor();
        var e, a;
        qn(),
          Vn(),
          setTimeout(function () {
            if (
              0 < $(".nectar_fullscreen_zoom_recent_projects").length &&
              0 < Q.length
            )
              for (var t = 0; t < Q.length; t++) Q[t].sliderCalcs();
          }, 300),
          g.unbind(".infscr"),
          Xn(),
          qe(),
          $(".nectar-video-wrap").each(function () {
            0 < $(this).find("video").length &&
              $(this).find("video").css("visibility", "visible");
          }),
          $(".wpb_column[data-t-w-inherits]").each(function () {
            $(this).is('[data-t-w-inherits="small_desktop"]')
              ? $(this).parent().addClass("inherits-s-desktop-col")
              : $(this).parent().removeClass("inherits-s-desktop-col");
          }),
          0 < $("#nectar_fullscreen_rows").length
            ? (0 == $("#nectar_fullscreen_rows > .vc_element").length &&
                $("#nectar_fullscreen_rows").prepend(
                  '<div class="vc_element empty_placeholder" />'
                ),
              0 <
                $(
                  "#nectar_fullscreen_rows > .vc_element:not(.empty_placeholder)"
                ).length &&
                $(
                  "#nectar_fullscreen_rows >.vc_element.empty_placeholder"
                ).remove(),
              (e = $(
                "#nectar_fullscreen_rows > div.vc_element.active"
              ).index()),
              $.fn.fullpage.destroy("all"),
              si(),
              (a = [{ el: "", offset: 0 }]),
              $("#nectar_fullscreen_rows > div.vc_element").each(function (t) {
                a[t] = { el: $(this), offset: $(this).offset().top };
              }),
              -1 < e && $.fn.fullpage.silentMoveTo(e + 1, 0),
              1 === $("#nectar_fullscreen_rows > div.vc_element").length &&
                $("#nectar_fullscreen_rows").css({
                  transform: "translate3d(0,0,0)",
                }),
              E.scrollTo(0, 0))
            : 0 <
                $(
                  'body .main-content > .row > .vc_element:first > .wpb_row[class*="full-width-"]'
                ).length ||
              0 <
                $(
                  'body .main-content > .row > .vc_element:first .nectar-slider-wrap[data-full-width="true"]'
                ).length
            ? $(".container-wrap").css({
                "padding-top": "0",
                "margin-top": "0",
              })
            : $(".container-wrap").css({ "padding-top": "40px" }),
          (B = []),
          $(".svg-icon-holder").removeClass("animated-in").removeClass("bound"),
          0 < $(".vc_nectar_gmap").length &&
            setTimeout(function () {
              "object" == typeof google && "object" == typeof google.maps
                ? T.mapAPI_Loaded()
                : 0 < T.nectarLove.mapApiKey.length &&
                  $.getScript(
                    "https://maps.google.com/maps/api/js?sensor=false&key=" +
                      T.nectarLove.mapApiKey +
                      "&callback=mapAPI_Loaded"
                  );
            }, 100),
          ni(),
          void 0 !== T.Waypoint && (Waypoint.destroyAll(), Ka());
      });
  }
  function gi() {
    var t = !1,
      e;
    0 < $('body[data-ajax-transitions="true"]').length &&
      0 < $('#ajax-loading-screen[data-disable-mobile="1"]').length &&
      gt.winW < 1e3 &&
      (t = !0),
      0 < $('body[data-ajax-transitions="true"]').length &&
      0 < $('#ajax-loading-screen[data-method="standard"]').length &&
      0 == t
        ? ($("html").addClass("page-trans-loaded"),
          0 < $('#ajax-loading-screen[data-effect="standard"]').length
            ? (0 == $(".nectar-particles").length &&
                (n.transition({ opacity: 0 }, 500, function () {
                  $(this).css({ display: "none" });
                }),
                $("#ajax-loading-screen .loading-icon").transition(
                  { opacity: 0 },
                  500
                )),
              0 == $(".nectar-box-roll").length &&
                setTimeout(function () {
                  Ka();
                }, 550))
            : (0 <
                $('#ajax-loading-screen[data-effect*="horizontal_swipe"]')
                  .length &&
                setTimeout(function () {
                  n.addClass("loaded");
                }, 60),
              0 ==
                $(
                  '#page-header-wrap #page-header-bg[data-animate-in-effect="zoom-out"] .nectar-video-wrap'
                ).length &&
                setTimeout(function () {
                  $("#ajax-loading-screen:not(.loaded)").addClass("loaded"),
                    setTimeout(function () {
                      n.addClass("hidden");
                    }, 1e3);
                }, 150),
              0 == $(".nectar-box-roll").length &&
              0 <
                $('#ajax-loading-screen[data-effect*="horizontal_swipe"]')
                  .length
                ? setTimeout(function () {
                    Ka();
                  }, 750)
                : 0 == $(".nectar-box-roll").length &&
                  setTimeout(function () {
                    Ka();
                  }, 350)),
          (T.onpageshow = function (t) {
            t.persisted &&
              ($("#ajax-loading-screen")
                .stop()
                .transition({ opacity: 0 }, 200, function () {
                  $(this).css({ display: "none" });
                }),
              $("#ajax-loading-screen .loading-icon").transition(
                { opacity: 0 },
                100
              ));
          }),
          $(
            ".portfolio-loading, .nectar-slider-loading .loading-icon"
          ).remove(),
          0 ==
            $('#ajax-loading-screen[data-disable-fade-on-click="1"]').length &&
            0 ==
              $(
                'body.using-mobile-browser #ajax-loading-screen[data-method="standard"][data-disable-mobile="1"]'
              ).length &&
            ((e = !1),
            $(
              'a[href^="mailto"], a[href^="tel"], .woocommerce-order-downloads a[class*="downloads-file"], .wpdm-cta.download-link a[data-downloadurl], .nectar-ignore-beforeunload a'
            ).on("click", function () {
              e = !0;
            }),
            T.addEventListener("beforeunload", function () {
              e ||
                (n.addClass("set-to-fade"),
                0 <
                $('#ajax-loading-screen[data-effect*="horizontal_swipe"]')
                  .length
                  ? (n.removeClass("loaded"),
                    n.addClass("in-from-right"),
                    setTimeout(function () {
                      n.addClass("loaded");
                    }, 30))
                  : (0 <
                    $('#ajax-loading-screen[data-effect="center_mask_reveal"]')
                      .length
                      ? n.css("opacity", "0").css("display", "block")
                      : n.show()
                    ).transition({ opacity: "1" }, 450)),
                (e = !1);
            })))
        : (1 == t &&
            n
              .css({ opacity: "0", display: "none" })
              .addClass("loaded")
              .addClass("hidden"),
          0 != $(".nectar-box-roll").length || gt.usingFrontEndEditor || Ka());
  }
  function fi(t) {
    var e, a, n, i, l, d, c, i, e, s, r, e, o;
    gt.usingMobileBrowser && gt.scrollPosRAF(),
      sa(),
      zt(),
      0 != $('body[data-header-format="left-header"]').length ||
        gt.usingPhoneBrowser ||
        ((e = !(
          0 < $('#header-outer[data-megamenu-rt="1"]').length &&
          0 < $('#header-outer[data-transparent-header="true"]').length
        )),
        $(".sf-menu:not(.buttons)").superfish({
          delay: 500,
          speed: "fast",
          disableHI: e,
          speedOut: "fast",
          animation: { opacity: "show" },
        }),
        $("#header-outer .sf-menu.buttons li.menu-item").on(
          "mouseover",
          function () {
            $(this).addClass("sfHover"),
              0 < $('#header-outer[data-megamenu-rt="1"]').length &&
                $(this).hasClass("megamenu") &&
                !$(this).hasClass("width-75") &&
                !$(this).hasClass("width-50") &&
                "true" == $("#header-outer").attr("data-transparent-header") &&
                ($("#header-outer").addClass("no-transition"),
                $("#header-outer").removeClass("transparent"));
          }
        ),
        $(
          "#header-outer .sf-menu.buttons > li.menu-item.menu-item-has-children:not(.megamenu):not(.nectar-megamenu-menu-item)"
        ).on("mouseenter", function () {
          var t = $("#top .container").width(),
            e = $(this).children("ul");
          e.offset().left - ($(T).width() - t) / 2 + e.width() <=
          $(T).width() - 100
            ? $(this).removeClass("edge")
            : $(this).addClass("edge");
        }),
        $("#header-outer .sf-menu.buttons li.menu-item").on(
          "mouseleave",
          function () {
            var t = $(this);
            t.is(".menu-item-has-children")
              ? setTimeout(function () {
                  t.is(":hover") ||
                    (t.removeClass("sfHover"),
                    0 < $('#header-outer[data-megamenu-rt="1"]').length &&
                      0 <
                        $('#header-outer[data-transparent-header="true"]')
                          .length &&
                      (0 == $("#header-outer.scrolled-down").length &&
                        0 == $("#header-outer.small-nav").length &&
                        0 == $("#header-outer.detached").length &&
                        0 == $("#header-outer.fixed-menu").length &&
                        $("#header-outer").addClass("transparent"),
                      0 <
                        $(
                          '#header-outer[data-permanent-transparent="1"][data-transparent-header="true"]'
                        ).length &&
                        $("#header-outer").addClass("transparent")));
                }, 200)
              : t.removeClass("sfHover");
          }
        ),
        $(
          '#header-secondary-outer li.megamenu:not(.nectar-megamenu-menu-item), #header-outer:not([data-format="menu-left-aligned"]):not([data-format="centered-logo-between-menu-alt"]) .sf-menu.buttons li.megamenu'
        )
          .removeClass("nectar-megamenu-menu-item")
          .removeClass("megamenu"),
        $(
          '#header-outer[data-format="centered-menu-bottom-bar"] .right-side .sf-menu li.nectar-megamenu-menu-item'
        )
          .removeClass("align-left")
          .removeClass("align-middle")
          .addClass("align-right"),
        $(
          '#header-outer[data-format="centered-menu-bottom-bar"] .left-side .sf-menu li.nectar-megamenu-menu-item'
        )
          .removeClass("align-right")
          .removeClass("align-middle")
          .addClass("align-left"),
        $("#header-outer .sf-menu > li:not(.megamenu) > ul > li > ul").each(
          function () {
            $(this).offset().left + $(this).outerWidth() > g.width() &&
              ($(this).addClass("on-left-side"),
              $(this).find("ul").addClass("on-left-side"));
          }
        ),
        $(
          'body:not([data-header-format="left-header"]) header#top nav > ul > li.megamenu > ul > li > ul > li'
        ).each(function () {
          0 < $(this).find("> ul").length && $(this).addClass("has-ul");
        }),
        0 < $('body[data-megamenu-width="full-width"]').length &&
          0 < $("ul.sub-menu").length &&
          (Ot(),
          g.on("smartresize", Ot),
          $("header#top nav > ul > li.megamenu > .sub-menu").css(
            "box-sizing",
            "content-box"
          )),
        $("header#top nav > ul.sf-menu > li.menu-item").on(
          "mouseenter",
          function () {
            $(this).addClass("menu-item-over");
          }
        ),
        $("header#top nav > ul.sf-menu > li.menu-item").on(
          "mouseleave",
          function () {
            $(this).removeClass("menu-item-over");
          }
        ),
        $(
          "#header-outer nav .megamenu .sub-menu a.sf-with-ul .sf-sub-indicator, #header-outer .megamenu .sub-menu a .sf-sub-indicator"
        ).remove(),
        $(
          ".sf-menu > .nectar-megamenu-menu-item > a .menu-title-text .megamenu-bg-lazy[data-bg-src]"
        ).each(function () {
          var t = $(this).parents(".nectar-megamenu-menu-item"),
            e = $(this).attr("data-bg-src"),
            a = $(this).attr("data-align").replace("_", " ");
          t
            .find("> ul")
            .css({
              "background-position": a,
              "background-image": 'url("' + e + '")',
            }),
            $(this).remove();
        }),
        $(
          ".sf-menu > .nectar-megamenu-menu-item > ul > li > a .menu-title-text .megamenu-col-bg-lazy[data-bg-src]"
        ).each(function () {
          var t = $(this).closest(".menu-item"),
            e = $(this).attr("data-bg-src"),
            a = $(this).attr("data-align").replace("_", " ");
          t.css({
            "background-position": a,
            "background-image": 'url("' + e + '")',
          }),
            $(this).remove();
        }),
        $("#header-outer nav > ul > li.megamenu > ul.sub-menu > li > a").each(
          function () {
            ("-" != $(this).text() &&
              "â€“" != $(this).text() &&
              !$(this).parent().hasClass("hide-title")) ||
              $(this).remove();
          }
        )),
      "IntersectionObserver" in T
        ? ((o = new IntersectionObserver(
            function (t) {
              t.forEach(function (t) {
                var e, t;
                t.isIntersecting &&
                  ((e = t.target).classList.add("loaded"),
                  (t = e.getAttribute("data-menu-img-src")) &&
                    (e.setAttribute("src", t),
                    e.removeAttribute("data-menu-img-src")),
                  o.unobserve(e));
              });
            },
            { rootMargin: "0px", threshold: 0 }
          )),
          [].slice
            .call(
              I.querySelectorAll(
                ".nectar-menu-icon-img[data-menu-img-src], #header-outer .nectar-ext-menu-item .image-layer"
              )
            )
            .forEach(function (t) {
              o.observe(t);
            }))
        : ($(".sf-menu .nectar-menu-icon-img[data-menu-img-src]").each(
            function () {
              $(this).attr("src", $(this).attr("data-menu-img-src")),
                $(this).removeAttr("data-menu-img-src");
            }
          ),
          $(".nectar-ext-menu-item .image-layer").addClass("loaded")),
      $(
        ".sub-menu .nectar-menu-icon, .sub-menu .nectar-menu-icon-img, .off-canvas-menu-container > ul > li > a .nectar-menu-icon, .off-canvas-menu-container > ul > li > a .nectar-menu-icon-img"
      ).each(function () {
        var t = $(this).parent(),
          e = $(this).detach();
        0 == t.parents(".nectar-ext-menu-item").length &&
          (t.wrapInner('<span class="nectar-menu-icon-text" />'),
          t.addClass("nectar-menu-item-with-icon")),
          t.prepend(e);
      }),
      $("#slide-out-widget-area:not(.fullscreen) .nectar-menu-label").each(
        function () {
          0 == $(this).parents(".nectar-ext-menu-item").length &&
            $(this).closest("a").addClass("nectar-menu-item-with-icon");
        }
      ),
      $(
        ".off-canvas-menu-container .nectar-menu-icon, .off-canvas-menu-container .nectar-menu-icon-img"
      ).each(function () {
        var t = $(this).parent();
        (0 < t.find(".item_desc").length || 0 < t.find(".nav_desc").length) &&
          t.addClass("nectar-menu-item-with-desc");
      }),
      Et(),
      (function () {
        T.nectarOptions &&
          T.nectarOptions.quick_search &&
          "true" === T.nectarOptions.quick_search &&
          new on();
        var t =
          0 <
          $("#search-outer #search input[type=text][data-placeholder]").length
            ? $("#search-outer #search input[type=text]").attr(
                "data-placeholder"
              )
            : "";
        function e() {
          var t;
          E.hasClass("ascend") ||
          (0 < $('body[data-header-format="left-header"]').length &&
            0 == $("body.material").length)
            ? ($("#search-outer")
                .stop()
                .transition(
                  { opacity: 0 },
                  300,
                  "cubic-bezier(0.2, 1, 0.3, 1)"
                ),
              f.addClass("inactive"),
              setTimeout(function () {
                $("#search-outer").hide(), f.removeClass("inactive");
              }, 300))
            : 0 == $("body.material").length &&
              $("#search-outer").stop(!0).fadeOut(450, "easeOutExpo"),
            E.hasClass("material") &&
              ($(T).trigger("nectar-search-close"),
              (t = u.hasClass("results-shown") ? 800 : 400),
              setTimeout(function () {
                $("#search-outer #s").val("");
              }, t),
              $("#ajax-content-wrap").removeClass("material-open"),
              (ft.materialSearchOpen = !1),
              u.removeClass("material-search-open"),
              $("#search-outer").removeClass("material-open"),
              $("#fp-nav").removeClass("material-ocm-open"));
        }
        E.hasClass("material") &&
          0 == $("#header-outer .bg-color-stripe").length &&
          u.append('<div class="bg-color-stripe" />'),
          E.on("click", "#search-btn a", function () {
            return !1;
          }),
          E.on(
            "click",
            "#search-btn a:not(.inactive), #header-outer .mobile-search, .nectar-search-open-trigger",
            function () {
              return (
                !$(this).hasClass("open-search") &&
                (E.hasClass("original") &&
                  0 <
                    $(".slide-out-widget-area-toggle.mobile-icon a.open")
                      .length &&
                  ($(".slide-out-widget-area-toggle.mobile-icon a")
                    .addClass("non-human-allowed")
                    .trigger("click"),
                  setTimeout(function () {
                    $(
                      ".slide-out-widget-area-toggle.mobile-icon a"
                    ).removeClass("non-human-allowed");
                  }, 100)),
                E.hasClass("ascend") ||
                (0 < $('body[data-header-format="left-header"]').length &&
                  0 == $("body.material").length)
                  ? ($(
                      "#search-outer > #search form, #search-outer #search .span_12 span, #search-outer #search #close"
                    ).css("opacity", 0),
                    $("#search-outer > #search form").css(
                      "transform",
                      "translateY(-30px)"
                    ),
                    $("#search-outer #search .span_12 span").css(
                      "transform",
                      "translateY(20px)"
                    ),
                    $("#search-outer").show(),
                    $("#search-outer")
                      .stop()
                      .transition({ scale: "1,0", opacity: 1 }, 0)
                      .transition(
                        { scale: "1,1" },
                        700,
                        "cubic-bezier(0.2, 1, 0.3, 1)"
                      ),
                    $("#search-outer > #search form")
                      .delay(350)
                      .transition(
                        { opacity: 1, transform: "translateY(0)" },
                        700,
                        "cubic-bezier(0.2, 1, 0.3, 1)"
                      ),
                    $("#search-outer #search #close")
                      .delay(500)
                      .transition(
                        { opacity: 1 },
                        700,
                        "cubic-bezier(0.2, 1, 0.3, 1)"
                      ),
                    $("#search-outer #search .span_12 span")
                      .delay(450)
                      .transition(
                        { opacity: 1, transform: "translateY(0)" },
                        700,
                        "cubic-bezier(0.2, 1, 0.3, 1)"
                      ))
                  : E.hasClass("material")
                  ? ($(
                      '#header-outer[data-transparent-header="true"] .bg-color-stripe'
                    ).css("transition", ""),
                    $("#search-outer, #ajax-content-wrap").addClass(
                      "material-open"
                    ),
                    (ft.materialSearchOpen = !0),
                    u.addClass("material-search-open"),
                    $("#fp-nav").addClass("material-ocm-open"),
                    $(T).trigger("nectar-search-open"))
                  : $("#search-outer").stop(!0).fadeIn(600, "easeOutExpo"),
                setTimeout(function () {
                  $("#search input[type=text]").trigger("focus"),
                    $("#search input[type=text]").val() == t &&
                      $("#search input[type=text]").setCursorPosition(0);
                }, 300),
                $(this).hasClass("nectar-search-open-trigger") ||
                  $(this).toggleClass("open-search"),
                $(
                  ".slide-out-widget-area-toggle a:not(#toggle-nav).open:not(.animating)"
                ).trigger("click"),
                !1)
              );
            }
          ),
          $("body:not(.material)").on(
            "keydown",
            "#search input[type=text]",
            function () {
              $(this).val() == t && $(this).val("");
            }
          ),
          $("body:not(.material)").on(
            "keyup",
            "#search input[type=text]",
            function () {
              0 == $(this).val().length &&
                ($(this).val(t), $(this).setCursorPosition(0));
            }
          ),
          E.on("click", "#close", function () {
            return (
              e(),
              f.removeClass("open-search"),
              $("#header-outer .mobile-search").removeClass("open-search"),
              !1
            );
          }),
          $("body:not(.material)").on(
            "blur",
            "#search-box input[type=text]",
            function () {
              e(),
                f.removeClass("open-search"),
                $("#header-outer .mobile-search").removeClass("open-search");
            }
          ),
          $("body.material").on("click", "#ajax-content-wrap", function (t) {
            void 0 !== t.originalEvent &&
              (e(),
              f.removeClass("open-search"),
              $("#header-outer .mobile-search").removeClass("open-search"));
          }),
          0 < $("body.material").length &&
            $(I).on("keyup", function (t) {
              27 == t.keyCode &&
                (e(),
                f.removeClass("open-search"),
                0 < $(".ocm-effect-wrap.material-ocm-open").length &&
                  $(".slide-out-widget-area-toggle.material-open a").trigger(
                    "click"
                  ));
            });
      })(),
      0 == $('#header-outer[data-remove-fixed="1"]').length &&
        1e3 < gt.winW &&
        0 != $(T).scrollTop() &&
        1 ==
          $('#header-outer.transparent[data-permanent-transparent="false"]')
            .length &&
        u.removeClass("transparent"),
      gt.winW < 1e3
        ? (0 == $(".nectar-box-roll").length ||
            ("1" == k &&
              0 == $('#header-outer[data-remove-fixed="1"]').length)) &&
          (wn(), g.on("smartresize.nectarNavScrollEffects", wn))
        : (yn(), g.on("smartresize.nectarNavScrollEffects", yn)),
      ni(),
      fa(),
      _e(),
      (e =
        0 < $("#top #mobile-menu").length
          ? "#top #mobile-menu "
          : ".off-canvas-menu-container.mobile-only "),
      $(e + ".menu-item > ul > li > a").each(function () {
        var t;
        ("-" == $(this).text() ||
          "â€“" == $(this).text() ||
          $(this).parent().hasClass("hide-title") ||
          0 < $(this).find("> .remove-menu-item-title").length) &&
          ((t = $(this).parent().find("> ul > li:not(.back)").clone()),
          0 < $(this).parent().find("> .widget-area-active").length
            ? $(this).parent().find("> a").remove()
            : ($(this).parent().find("ul").remove(),
              $(this).parent().parent().append(t),
              $(this).parent().remove()));
      }),
      Ya(),
      Ia(),
      "separate-dropdown-parent-link" ==
        (0 < $("#slide-out-widget-area[data-dropdown-func]").length
          ? h.attr("data-dropdown-func")
          : "default") &&
        $(
          "#slide-out-widget-area .off-canvas-menu-container li.menu-item-has-children"
        ).append(
          '<span class="ocm-dropdown-arrow"><i class="fa fa-angle-down"></i></span>'
        ),
      (0 < !$('#header-outer[data-format="left-header"]').length &&
        0 <
          !$(
            'body.material[data-slide-out-widget-area-style*="slide-out-from-right"]'
          ).length &&
        0 < !$("#slide-out-widget-area.fullscreen-split").length &&
        0 <
          !$(
            '#slide-out-widget-area[data-dropdown-func="separate-dropdown-parent-link"]'
          ).length) ||
        ($('#header-outer[data-format="left-header"] nav li.megamenu')
          .removeClass("nectar-megamenu-menu-item")
          .removeClass("megamenu"),
        (i =
          0 <
          $(
            '#slide-out-widget-area[data-dropdown-func="separate-dropdown-parent-link"]'
          ).length
            ? "#slide-out-widget-area .off-canvas-menu-container li.menu-item-has-children > .ocm-dropdown-arrow"
            : 'body.material #slide-out-widget-area[class*="slide-out-from-right"] .off-canvas-menu-container li.menu-item-has-children > a, #slide-out-widget-area.fullscreen-split .off-canvas-menu-container li.menu-item-has-children > a'),
        (e =
          '#header-outer[data-format="left-header"] nav li.menu-item-has-children > a'),
        (s =
          T.nectarOptions && T.nectarOptions.left_header_dropdown_func
            ? T.nectarOptions.left_header_dropdown_func
            : "default"),
        $(
          (e =
            "separate-dropdown-parent-link" === s
              ? '#header-outer[data-format="left-header"] nav li.menu-item-has-children > a .sf-sub-indicator'
              : e) +
            ", " +
            i
        ).on("click", function () {
          var t = $(this).parent(),
            e,
            a;
          return (
            (t =
              "separate-dropdown-parent-link" === s
                ? $(this).closest(".menu-item")
                : t).hasClass("open-submenu")
              ? (t.find(".sub-menu").css({ "max-height": "0" }),
                t.removeClass("open-submenu"))
              : ((a = $(this)),
                t.find("> .sub-menu").addClass("no-trans"),
                setTimeout(function () {
                  t
                    .find("> .sub-menu")
                    .css({
                      "max-height": "none",
                      position: "absolute",
                      visibility: "hidden",
                    }),
                    (e = t.find("> .sub-menu").height()),
                    t.find("> .sub-menu").removeClass("no-trans"),
                    t
                      .find("> .sub-menu")
                      .css({
                        "max-height": "0",
                        position: "relative",
                        visibility: "visible",
                      });
                }, 25),
                setTimeout(function () {
                  a
                    .closest("ul")
                    .find("li.menu-item-has-children")
                    .removeClass("open-submenu"),
                    a
                      .closest("ul")
                      .find("li.menu-item-has-children > .sub-menu")
                      .css({ "max-height": "0" }),
                    t.addClass("open-submenu"),
                    t.find("> .sub-menu").css("max-height", e),
                    0 < a.parents("ul").length &&
                      a.parents("ul:not(.sf-menu)").each(function () {
                        $(this).css("max-height"),
                          $(this).css(
                            "max-height",
                            parseInt(
                              $(this).height() +
                                2 * parseInt($(this).css("padding-top")) +
                                e
                            ) + "px"
                          );
                      });
                }, 50)),
            !1
          );
        }),
        0 <
          (r = $(
            '#header-outer[data-format="left-header"] nav .sf-menu > .current-menu-ancestor.menu-item-has-children'
          )).length &&
          0 < r.find(".current-menu-item").length &&
          (r.find("ul").css("transition", "none"),
          (i = r
            .find(".current-menu-item")
            .parents(".current-menu-ancestor.menu-item-has-children")),
          (i = Array.from(i)),
          "separate-dropdown-parent-link" === s
            ? i.reverse().forEach(function (t) {
                $(t).find("> a .sf-sub-indicator").trigger("click");
              })
            : i.reverse().forEach(function (t) {
                $(t).find("> a").trigger("click");
              }),
          setTimeout(function () {
            r.find("ul").css("transition", "");
          }, 100))),
      (n = a = 0),
      $(
        (i =
          ".carousel-wrap .portfolio-items .col .work-info a, .woocommerce .products-carousel ul.products li.product a")
      ).on("mousedown", function (t) {
        a = t.clientX;
      }),
      $(i).on("mouseup", function (t) {
        n = t.clientX;
      }),
      $(i).on("click", function () {
        if (10 < Math.abs(a - n)) return !1;
      }),
      Ae(),
      se(),
      Xn(),
      Qn(),
      (l = w - w / 1.8),
      E.on(
        "click",
        ".section-down-arrow, .scroll-down-wrap > .minimal-arrow",
        function () {
          if (0 < $(this).parents(".nectar-box-roll").length) return !1;
          var t = $(this).parents("#page-header-bg"),
            e = t.height(),
            a =
              0 == t.parents(".first-section").length ||
              0 < $('body[data-transparent-header="false"]').length
                ? t.offset().top
                : 0,
            n = 0 < m.length && 1e3 < g.width() ? m.height() : 0,
            i =
              0 < $('body[data-header-format="left-header"]').length
                ? 0
                : $("#header-space").height(),
            s = 0,
            r,
            o,
            i;
          return (
            0 < $("body.material").length && 0 < p.length && (s = p.height()),
            0 == $('body[data-permanent-transparent="1"]').length
              ? E.hasClass("mobile")
                ? Gt(
                    (0 < $('#header-outer[data-mobile-fixed="1"]').length
                      ? parseInt(e) - i + parseInt(t.offset().top) + 2
                      : parseInt(e) + parseInt(t.offset().top) + 2) -
                      2 * n,
                    700,
                    "easeInOutQuint"
                  )
                : 0 < $('body[data-hhun="1"]').length &&
                  0 == $('#header-outer[data-remove-fixed="1"]').length
                ? Gt(parseInt(e) + a + 2 - 2 * n, 700, "easeInOutQuint")
                : ((r =
                    0 < $('#header-outer[data-header-resize="0"]').length
                      ? 0
                      : parseInt(y) + 2 * l),
                  0 < $('#header-outer[data-remove-fixed="1"]').length &&
                    (a = i = 0),
                  0 == $("body.mobile").length &&
                    0 < $('#header-outer[data-condense="true"]').length &&
                    ((o = $(
                      '#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9'
                    )),
                    (i =
                      u.height() -
                      (parseInt(o.position().top) -
                        parseInt($("#header-outer #logo").css("margin-top"))) -
                      parseInt(gt.secondaryHeaderHeight))),
                  Gt(parseInt(e - i) + r + 3 + a + s, 700, "easeInOutQuint"))
              : Gt(
                  parseInt(e) + parseInt(t.offset().top) + 2 - 2 * n,
                  700,
                  "easeInOutQuint"
                ),
            !1
          );
        }
      ),
      S &&
        E.on(
          "click",
          '#header-outer nav .sf-menu li:not(.slide-out-widget-area-toggle) a[href*="#"]',
          function () {
            ft.ocmOpen && "#" != $(this).attr("href") && Ra($(this).parent());
          }
        ),
      (0 < $('body[data-animated-anchors="true"]').length ||
        0 <
          $('.single-product [data-gallery-style="left_thumb_sticky"]')
            .length) &&
        ((c = w - w / 1.8),
        setTimeout(Zn, 100),
        E.on(
          "click",
          "#header-outer nav .sf-menu a, #header-outer .mobile-header .sf-menu a, #footer-outer .nectar-button, #footer-outer .widget_nav_menu a, #footer-widgets .textwidget a, #mobile-menu li a, .nectar-scrolling-tabs:not(.navigation_func_active_link_only) .scrolling-tab-nav a, .container-wrap a:not(.wpb_tabs_nav a):not(.navigation_func_active_link_only .scrolling-tab-nav a):not(.comment-wrap .navigation a):not(.woocommerce-checkout a):not(.um-woo-view-order):not(.magnific):not([data-fancybox]):not(.woocommerce-tabs .tabs a):not(.slider-prev):not(.slider-next):not(.testimonial-next-prev a):not(.page-numbers), .swiper-slide .button a, #slide-out-widget-area a, #slide-out-widget-area .inner div a",
          function (t) {
            var i = !0,
              s = $(this).prop("hash");
            s &&
              !$(this).hasClass("nectar-next-section") &&
              0 == $(this).parents(".slide-out-widget-area-toggle").length &&
              (E.addClass("animated-scrolling"), (ft.animatedScrolling = !0)),
              clearTimeout(d),
              (d = setTimeout(function () {
                E.removeClass("animated-scrolling"),
                  (ft.animatedScrolling = !1);
              }, 1100));
            var r =
                0 < $('body[data-header-format="left-header"]').length &&
                1e3 < g.width()
                  ? 0
                  : $("#header-space").outerHeight(),
              e,
              i,
              a,
              o;
            (0 < $(".page-template-template-no-header-footer").length ||
              0 < $(".page-template-template-no-header").length ||
              0 == $("#header-space").length) &&
              (r = 0),
              0 != pt.$usingFullScreenRows &&
                0 < $('#nectar_fullscreen_rows[data-anchors="on"]').length &&
                s &&
                "" != s &&
                "#top" != s &&
                0 <
                  $(
                    'body.material[data-slide-out-widget-area-style="slide-out-from-right"].material-ocm-open'
                  ).length &&
                (t.preventDefault(),
                $(this).hasClass("skip-hash") ||
                  (history.pushState
                    ? history.pushState(null, null, s)
                    : (location.hash = s)),
                setTimeout(function () {
                  $(T).trigger("hashchange");
                }, 800)),
              ((s &&
                0 < E.find(s).length &&
                "#top" != s &&
                "" != s &&
                -1 !==
                  $(this)
                    .attr("href")
                    .indexOf(T.location.href.split("#")[0])) ||
                ($(this).is('[href^="#"]') &&
                  "" != s &&
                  0 < E.find(s).length &&
                  "#top" != s)) &&
                ($(this).hasClass("skip-hash") ||
                  (history.pushState
                    ? history.pushState(null, null, s)
                    : (location.hash = s)),
                0 < $(this).parents("ul").length &&
                  $(this)
                    .parents("ul")
                    .find("li")
                    .removeClass("current-menu-item"),
                0 < $(this).parents("#slide-out-widget-area").length &&
                  (0 <
                  $(
                    'body.material[data-slide-out-widget-area-style="slide-out-from-right"].material-ocm-open'
                  ).length
                    ? ($("body > .slide_out_area_close")
                        .addClass("non-human-allowed")
                        .trigger("click"),
                      (e = $(this)),
                      (i = !1),
                      setTimeout(function () {
                        e.trigger("click");
                      }, 1e3))
                    : $("#slide-out-widget-area .slide_out_area_close")
                        .addClass("non-human-allowed")
                        .trigger("click"),
                  setTimeout(function () {
                    (0 <
                    $(
                      'body.material[data-slide-out-widget-area-style="slide-out-from-right"]'
                    ).length
                      ? $("body > .slide_out_area_close")
                      : $("#slide-out-widget-area .slide_out_area_close")
                    ).removeClass("non-human-allowed");
                  }, 100)),
                0 < $(this).parents("#mobile-menu").length &&
                  ($(".slide-out-widget-area-toggle.mobile-icon a")
                    .addClass("non-human-allowed")
                    .trigger("click"),
                  setTimeout(function () {
                    $(
                      ".slide-out-widget-area-toggle.mobile-icon a"
                    ).removeClass("non-human-allowed");
                  }, 100)),
                (a = 1),
                (o = $(this)),
                0 < $(".nectar-box-roll").length &&
                  0 < $(".container-wrap.bottomBoxOut").length &&
                  (ut.boxRoll(null, -1), (a = 2050)),
                0 < $("img[data-nectar-img-src]").length && (ea(), (a = 200)),
                setTimeout(function () {
                  var t, e, t, e, a, n;
                  !0 === O
                    ? ((e =
                        $("#header-outer").outerHeight() +
                        2 * parseInt($("#header-outer").css("margin-top"))),
                      (t = $(s).offset().top - e - gt.adminBarHeight))
                    : 0 == $('body[data-permanent-transparent="1"]').length
                    ? E.hasClass("mobile")
                      ? (t =
                          0 < $('#header-outer[data-mobile-fixed="1"]').length
                            ? $(s).offset().top + 2 - r + gt.adminBarHeight
                            : $(s).offset().top - gt.adminBarHeight + 1)
                      : ((e =
                          0 < $('#header-outer[data-header-resize="0"]').length
                            ? 0
                            : parseInt(y) + 2 * c),
                        0 < $('#header-outer[data-remove-fixed="1"]').length &&
                          (r = 0),
                        (t =
                          $(s).offset().top -
                          parseInt(r) +
                          e +
                          3 -
                          gt.adminBarHeight),
                        0 == $("body.mobile").length &&
                          0 ===
                            $("body.page-template-template-no-header").length &&
                          0 ===
                            $("body.page-template-template-no-header-footer")
                              .length &&
                          0 < $('#header-outer[data-condense="true"]').length &&
                          ((a = $(
                            '#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9'
                          )),
                          (n =
                            u.height() -
                            (parseInt(a.height()) +
                              parseInt(
                                $("#header-outer #logo").css("margin-top")
                              ))),
                          (t =
                            $(s).offset().top -
                            parseInt(r) +
                            n -
                            gt.adminBarHeight)))
                    : (t = $(s).offset().top - gt.adminBarHeight + 1),
                    0 < $('body[data-hhun="1"]').length &&
                      0 == $('#header-outer[data-remove-fixed="1"]').length &&
                      ((0 == $("#header-outer.detached").length ||
                        0 <
                          o.parents('.page-submenu[data-sticky="true"]')
                            .length) &&
                        (t += r),
                      0 <
                        o.parents('.page-submenu[data-sticky="true"]').length &&
                        ($("#header-outer.detached").addClass("invisible"),
                        $(".page-submenu")
                          .addClass("header-not-visible")
                          .css("transform", "translateY(0px)")));
                  var n,
                    a =
                      0 < o.parents('.page-submenu[data-sticky="true"]').length
                        ? o.parents(".page-submenu").height()
                        : 0,
                    n =
                      (0 < $("body.material").length &&
                        0 < p.length &&
                        0 == $('body[data-hhun="1"]').length &&
                        0 == $('#header-outer[data-remove-fixed="1"]').length &&
                        !E.hasClass("mobile")) ||
                      (0 < $('body[data-hhun="1"]').length &&
                        0 < p.length &&
                        !E.hasClass("mobile") &&
                        0 == $('#header-outer[data-remove-fixed="1"]').length)
                        ? p.height()
                        : 0;
                  i && Gt(t - a + n, 700, "easeInOutQuint");
                }, a),
                t.preventDefault()),
              "#top" == s &&
                0 < $(this).parents("#slide-out-widget-area").length &&
                $("#slide-out-widget-area .slide_out_area_close").trigger(
                  "click"
                );
          }
        ));
  }
  function mi() {
    0 == $(T).scrollTop() && _n(),
      $("video").css("visibility", "visible"),
      0 < $('body[data-animated-anchors="true"]').length &&
        (0 == $(".nectar-box-roll").length &&
          0 == $("#nectar_fullscreen_rows").length &&
          (void 0 !== ee.tab
            ? setTimeout(function () {
                Gn();
              }, 800)
            : Gn()),
        0 < $('#nectar_fullscreen_rows[data-mobile-disable="on"]').length &&
          0 == $(".nectar-box-roll").length &&
          gt.usingMobileBrowser &&
          Gn()),
      Le(),
      gt.usingMobileBrowser || Be(),
      ka();
  }
  ($n.prototype.events = function () {
    var t = this;
    $(T).on("smartresize", this.resize.bind(this)),
      T.addEventListener("orientationchange", function () {
        this.setTimeout(function () {
          t.orientationChange();
        }, 100);
      });
  }),
    ($n.prototype.resize = function () {
      gt.usingMobileBrowser || ((this.storedWinH = gt.winH), this.calculate());
    }),
    ($n.prototype.calculate = function () {
      if (1 == ft.materialOffCanvasOpen) return !0;
      (this.offsetTop = this.$el.offset().top),
        (this.offsetTop < this.storedWinH &&
          this.$el.hasClass("top-level") &&
          !gt.usingFrontEndEditor) ||
          (this.$el.css("min-height", this.storedWinH),
          this.$el.find("> .col.span_12").css("min-height", this.storedWinH));
    }),
    ($n.prototype.orientationChange = function () {
      gt.usingMobileBrowser && ((this.storedWinH = gt.winH), this.calculate());
    }),
    (Pn.prototype.resizeEvent = function () {
      (this.initialX = this.$el.width() / 2),
        (this.initialY = this.$el.height() / 2);
    }),
    (Pn.prototype.mouseEvents = function () {
      var e = this;
      e.$el.hasClass("play_button_hover") && (e.hoverOnly = !0),
        e.$el.on("mouseenter", function (t) {
          (e.activeFollow = !0),
            (e.elX = t.offsetX),
            (e.elY = t.offsetY),
            (e.lastScroll = 0),
            e.hoverOnly
              ? ((e.percentage = 1),
                clearTimeout(e.exitTimeout),
                setTimeout(function () {
                  e.percentage = 0.16;
                }, 60))
              : (clearInterval(e.percentageInterval),
                (e.percentageInterval = setInterval(function () {
                  e.percentage < 0.16
                    ? (e.percentage += 0.008)
                    : clearInterval(e.percentageInterval);
                }, 30)));
        }),
        e.$el.on("mouseleave", function () {
          e.hoverOnly
            ? (e.exitTimeout = setTimeout(function () {
                (e.activeFollow = !1),
                  (e.lastScroll = 0),
                  clearInterval(e.percentageInterval),
                  (e.percentage = 0.03);
              }, 400))
            : ((e.activeFollow = !1),
              (e.lastScroll = 0),
              clearInterval(e.percentageInterval),
              (e.percentage = 0.03));
        }),
        e.$el.on("mousemove", function (t) {
          (e.elX = t.offsetX), (e.elY = t.offsetY), (e.lastScroll = 0);
        }),
        $(T).on("scroll", function () {
          1 == e.activeFollow &&
            0 == e.lastScroll &&
            (e.lastScroll = gt.scrollTop);
        });
    }),
    (Pn.prototype.rafLoop = function () {
      1 == this.activeFollow
        ? ((this.scrollAdjust = 0),
          (this.alteredY = this.elY),
          0 < this.lastScroll &&
            ((this.scrollAdjust = gt.scrollTop - this.lastScroll),
            (this.alteredY += this.scrollAdjust)),
          (this.lastY = Yt(this.lastY, this.alteredY, this.percentage)),
          (this.lastX = Yt(this.lastX, this.elX, this.percentage)),
          (this.lastY2 = Yt(this.lastY2, this.alteredY, this.percentage)),
          (this.innerLastX =
            Yt(
              this.innerLastX,
              parseInt(this.elX) - parseInt(this.lastX),
              this.percentage
            ) / 1.7),
          (this.innerLastY =
            Yt(
              this.innerLastY,
              parseInt(this.alteredY) - parseInt(this.lastY2),
              this.percentage
            ) / 1.7))
        : ((this.lastY = Yt(this.lastY, this.initialY, 0.055)),
          (this.lastX = Yt(this.lastX, this.initialX, 0.055)),
          (this.innerLastX = 0),
          (this.innerLastY = 0)),
        (this.$iconEl[0].style.transform =
          "translateX(" + this.lastX + "px) translateY(" + this.lastY + "px)"),
        0 < this.$innerIconEl.length &&
          (this.$innerIconEl[0].style.transform =
            "translateX(" +
            Pt(this.innerLastX, 14, -14) +
            "px) translateY(" +
            Pt(this.innerLastY, 14, -14) +
            "px)"),
        requestAnimationFrame(this.rafLoop.bind(this));
    }),
    jQuery(I).ready(function (t) {
      (gt.usingFrontEndEditor = void 0 !== T.vc_iframe),
        Ja(),
        si(),
        ia(),
        ln(),
        cn(),
        hn(),
        Cn(),
        tn(),
        li(),
        Ie(),
        Fe(),
        Te(),
        Ee(),
        Le(),
        ya(),
        In(),
        Tn(),
        We(),
        Be(),
        xa(),
        _a(),
        Ca(),
        $a(),
        Ta(),
        Qa(),
        kn(),
        sn(),
        di(),
        Kn(),
        fi(),
        new Dt(),
        ri(),
        ci(),
        pi(),
        gi(),
        g.off("smartresize.srInit"),
        g.on("smartresize.srInit", mt),
        g.off("resize.srInit"),
        g.on("resize.srInit", bt),
        T.addEventListener("orientationchange", vt),
        "complete" === I.readyState && mi(),
        g.on("load", mi);
    });
})(window.jQuery, window, document);
/* Touch swipe */
(function (d) {
  var m = "left",
    l = "right",
    c = "up",
    s = "down",
    b = "in",
    t = "out",
    j = "none",
    o = "auto",
    i = "swipe",
    p = "pinch",
    u = "tap",
    x = "horizontal",
    q = "vertical",
    g = "all",
    e = "start",
    h = "move",
    f = "end",
    n = "cancel",
    a = "ontouchstart" in window,
    v = "TouchSwipe";
  var k = {
    fingers: 1,
    threshold: 75,
    cancelThreshold: 25,
    pinchThreshold: 20,
    maxTimeThreshold: null,
    fingerReleaseThreshold: 250,
    swipe: null,
    swipeLeft: null,
    swipeRight: null,
    swipeUp: null,
    swipeDown: null,
    swipeStatus: null,
    pinchIn: null,
    pinchOut: null,
    pinchStatus: null,
    click: null,
    tap: null,
    triggerOnTouchEnd: true,
    triggerOnTouchLeave: false,
    allowPageScroll: "auto",
    fallbackToMouseEvents: true,
    excludedElements: "button, input, select, textarea, a, .noSwipe",
  };
  d.fn.swipe = function (A) {
    var z = d(this),
      y = z.data(v);
    if (y && typeof A === "string") {
      if (y[A]) {
        return y[A].apply(this, Array.prototype.slice.call(arguments, 1));
      } else {
        d.error("Method " + A + " does not exist on jQuery.swipe");
      }
    } else {
      if (!y && (typeof A === "object" || !A)) {
        return r.apply(this, arguments);
      }
    }
    return z;
  };
  d.fn.swipe.defaults = k;
  d.fn.swipe.phases = {
    PHASE_START: e,
    PHASE_MOVE: h,
    PHASE_END: f,
    PHASE_CANCEL: n,
  };
  d.fn.swipe.directions = { LEFT: m, RIGHT: l, UP: c, DOWN: s, IN: b, OUT: t };
  d.fn.swipe.pageScroll = { NONE: j, HORIZONTAL: x, VERTICAL: q, AUTO: o };
  d.fn.swipe.fingers = { ONE: 1, TWO: 2, THREE: 3, ALL: g };
  function r(y) {
    if (
      y &&
      y.allowPageScroll === undefined &&
      (y.swipe !== undefined || y.swipeStatus !== undefined)
    ) {
      y.allowPageScroll = j;
    }
    if (y.click !== undefined && y.tap === undefined) {
      y.tap = y.click;
    }
    if (!y) {
      y = {};
    }
    y = d.extend({}, d.fn.swipe.defaults, y);
    return this.each(function () {
      var A = d(this);
      var z = A.data(v);
      if (!z) {
        z = new w(this, y);
        A.data(v, z);
      }
    });
  }
  function w(S, ag) {
    var aJ = a || !ag.fallbackToMouseEvents,
      az = aJ ? "touchstart" : "mousedown",
      U = aJ ? "touchmove" : "mousemove",
      av = aJ ? "touchend" : "mouseup",
      D = aJ ? null : "mouseleave",
      R = "touchcancel";
    var ad = 0,
      N = null,
      ah = 0,
      aF = 0,
      A = 0,
      aj = 1,
      aA = 0,
      aN = 0,
      Z = null;
    var H = d(S);
    var O = "start";
    var aI = 0;
    var ai = null;
    var I = 0,
      Y = 0,
      aD = 0,
      aP = 0;
    try {
      H.bind(az, at);
      H.bind(R, L);
    } catch (aG) {
      d.error("events not supported " + az + "," + R + " on jQuery.swipe");
    }
    this.enable = function () {
      H.bind(az, at);
      H.bind(R, L);
      return H;
    };
    this.disable = function () {
      Q();
      return H;
    };
    this.destroy = function () {
      Q();
      H.data(v, null);
      return H;
    };
    this.option = function (aR, aQ) {
      if (ag[aR] !== undefined) {
        if (aQ === undefined) {
          return ag[aR];
        } else {
          ag[aR] = aQ;
        }
      } else {
        d.error("Option " + aR + " does not exist on jQuery.swipe.options");
      }
    };
    function at(aS) {
      if (X()) {
        return;
      }
      if (d(aS.target).closest(ag.excludedElements, H).length > 0) {
        return;
      }
      var aT = aS.originalEvent ? aS.originalEvent : aS;
      var aR,
        aQ = a ? aT.touches[0] : aT;
      O = e;
      if (a) {
        aI = aT.touches.length;
      } else {
        aS.preventDefault();
      }
      ad = 0;
      N = null;
      aN = null;
      ah = 0;
      aF = 0;
      A = 0;
      aj = 1;
      aA = 0;
      ai = T();
      Z = aE();
      z();
      if (!a || aI === ag.fingers || ag.fingers === g || ap()) {
        aO(0, aQ);
        I = B();
        if (aI == 2) {
          aO(1, aT.touches[1]);
          aF = A = aa(ai[0].start, ai[1].start);
        }
        if (ag.swipeStatus || ag.pinchStatus) {
          aR = aH(aT, O);
        }
      } else {
        aR = false;
      }
      if (aR === false) {
        O = n;
        aH(aT, O);
        return aR;
      } else {
        ak(true);
      }
    }
    function P(aT) {
      var aW = aT.originalEvent ? aT.originalEvent : aT;
      if (O === f || O === n || af()) {
        return;
      }
      var aS,
        aR = a ? aW.touches[0] : aW;
      var aU = V(aR);
      Y = B();
      if (a) {
        aI = aW.touches.length;
      }
      O = h;
      if (aI == 2) {
        if (aF == 0) {
          aO(1, aW.touches[1]);
          aF = A = aa(ai[0].start, ai[1].start);
        } else {
          V(aW.touches[1]);
          A = aa(ai[0].end, ai[1].end);
          aN = ao(ai[0].end, ai[1].end);
        }
        aj = y(aF, A);
        aA = Math.abs(aF - A);
      }
      if (aI === ag.fingers || ag.fingers === g || !a || ap()) {
        N = ar(aU.start, aU.end);
        C(aT, N);
        ad = G(aU.start, aU.end);
        ah = K();
        aK(N, ad);
        if (ag.swipeStatus || ag.pinchStatus) {
          aS = aH(aW, O);
        }
        if (!ag.triggerOnTouchEnd || ag.triggerOnTouchLeave) {
          var aQ = true;
          if (ag.triggerOnTouchLeave) {
            var aV = au(this);
            aQ = aC(aU.end, aV);
          }
          if (!ag.triggerOnTouchEnd && aQ) {
            O = aM(h);
          } else {
            if (ag.triggerOnTouchLeave && !aQ) {
              O = aM(f);
            }
          }
          if (O == n || O == f) {
            aH(aW, O);
          }
        }
      } else {
        O = n;
        aH(aW, O);
      }
      if (aS === false) {
        O = n;
        aH(aW, O);
      }
    }
    function ab(aS) {
      var aU = aS.originalEvent;
      if (a) {
        if (aU.touches.length > 0) {
          aw();
          return true;
        }
      }
      if (af()) {
        aI = aP;
      }
      aS.preventDefault();
      Y = B();
      if (ag.triggerOnTouchEnd || (ag.triggerOnTouchEnd == false && O === h)) {
        O = f;
        var aR = aI === ag.fingers || ag.fingers === g || !a;
        var aQ = ai[0].end.x !== 0;
        var aT = aR && aQ && (an() || aB());
        if (aT) {
          aH(aU, O);
        } else {
          O = n;
          aH(aU, O);
        }
      } else {
        if (!ag.triggerOnTouchEnd && ay()) {
          O = f;
          am(aU, O, u);
        } else {
          if (O === h) {
            O = n;
            aH(aU, O);
          }
        }
      }
      ak(false);
    }
    function L() {
      aI = 0;
      Y = 0;
      I = 0;
      aF = 0;
      A = 0;
      aj = 1;
      z();
      ak(false);
    }
    function W(aQ) {
      var aR = aQ.originalEvent;
      if (ag.triggerOnTouchLeave) {
        O = aM(f);
        aH(aR, O);
      }
    }
    function Q() {
      H.unbind(az, at);
      H.unbind(R, L);
      H.unbind(U, P);
      H.unbind(av, ab);
      if (D) {
        H.unbind(D, W);
      }
      ak(false);
    }
    function aM(aT) {
      var aS = aT;
      var aR = aq();
      var aQ = ae();
      if (!aR) {
        aS = n;
      } else {
        if (
          aQ &&
          aT == h &&
          (!ag.triggerOnTouchEnd || ag.triggerOnTouchLeave)
        ) {
          aS = f;
        } else {
          if (!aQ && aT == f && ag.triggerOnTouchLeave) {
            aS = n;
          }
        }
      }
      return aS;
    }
    function aH(aS, aQ) {
      var aR = undefined;
      if (ac()) {
        aR = am(aS, aQ, i);
      }
      if (ap() && aR !== false) {
        aR = am(aS, aQ, p);
      }
      if (ay() && aR !== false) {
        aR = am(aS, aQ, u);
      }
      if (aQ === n) {
        L(aS);
      }
      if (aQ === f) {
        if (a) {
          if (aS.touches.length == 0) {
            L(aS);
          }
        } else {
          L(aS);
        }
      }
      return aR;
    }
    function am(aT, aQ, aS) {
      var aR = undefined;
      if (aS == i) {
        H.trigger("swipeStatus", [aQ, N || null, ad || 0, ah || 0, aI]);
        if (ag.swipeStatus) {
          aR = ag.swipeStatus.call(H, aT, aQ, N || null, ad || 0, ah || 0, aI);
          if (aR === false) {
            return false;
          }
        }
        if (aQ == f && aB()) {
          H.trigger("swipe", [N, ad, ah, aI]);
          if (ag.swipe) {
            aR = ag.swipe.call(H, aT, N, ad, ah, aI);
            if (aR === false) {
              return false;
            }
          }
          switch (N) {
            case m:
              H.trigger("swipeLeft", [N, ad, ah, aI]);
              if (ag.swipeLeft) {
                aR = ag.swipeLeft.call(H, aT, N, ad, ah, aI);
              }
              break;
            case l:
              H.trigger("swipeRight", [N, ad, ah, aI]);
              if (ag.swipeRight) {
                aR = ag.swipeRight.call(H, aT, N, ad, ah, aI);
              }
              break;
            case c:
              H.trigger("swipeUp", [N, ad, ah, aI]);
              if (ag.swipeUp) {
                aR = ag.swipeUp.call(H, aT, N, ad, ah, aI);
              }
              break;
            case s:
              H.trigger("swipeDown", [N, ad, ah, aI]);
              if (ag.swipeDown) {
                aR = ag.swipeDown.call(H, aT, N, ad, ah, aI);
              }
              break;
          }
        }
      }
      if (aS == p) {
        H.trigger("pinchStatus", [aQ, aN || null, aA || 0, ah || 0, aI, aj]);
        if (ag.pinchStatus) {
          aR = ag.pinchStatus.call(
            H,
            aT,
            aQ,
            aN || null,
            aA || 0,
            ah || 0,
            aI,
            aj
          );
          if (aR === false) {
            return false;
          }
        }
        if (aQ == f && an()) {
          switch (aN) {
            case b:
              H.trigger("pinchIn", [aN || null, aA || 0, ah || 0, aI, aj]);
              if (ag.pinchIn) {
                aR = ag.pinchIn.call(
                  H,
                  aT,
                  aN || null,
                  aA || 0,
                  ah || 0,
                  aI,
                  aj
                );
              }
              break;
            case t:
              H.trigger("pinchOut", [aN || null, aA || 0, ah || 0, aI, aj]);
              if (ag.pinchOut) {
                aR = ag.pinchOut.call(
                  H,
                  aT,
                  aN || null,
                  aA || 0,
                  ah || 0,
                  aI,
                  aj
                );
              }
              break;
          }
        }
      }
      if (aS == u) {
        if (aQ === n || aQ === f) {
          if ((aI === 1 || !a) && (isNaN(ad) || ad === 0)) {
            H.trigger("tap", [aT.target]);
            if (ag.tap) {
              aR = ag.tap.call(H, aT, aT.target);
            }
          }
        }
      }
      return aR;
    }
    function ae() {
      var aQ = true;
      if (ag.threshold !== null) {
        aQ = ad >= ag.threshold;
      }
      if (aQ && ag.cancelThreshold !== null) {
        aQ = M(N) - ad < ag.cancelThreshold;
      }
      return aQ;
    }
    function al() {
      if (ag.pinchThreshold !== null) {
        return aA >= ag.pinchThreshold;
      }
      return true;
    }
    function aq() {
      var aQ;
      if (ag.maxTimeThreshold) {
        if (ah >= ag.maxTimeThreshold) {
          aQ = false;
        } else {
          aQ = true;
        }
      } else {
        aQ = true;
      }
      return aQ;
    }
    function C(aQ, aR) {
      if (ag.allowPageScroll === j || ap()) {
        aQ.preventDefault();
      } else {
        var aS = ag.allowPageScroll === o;
        switch (aR) {
          case m:
            if ((ag.swipeLeft && aS) || (!aS && ag.allowPageScroll != x)) {
              aQ.preventDefault();
            }
            break;
          case l:
            if ((ag.swipeRight && aS) || (!aS && ag.allowPageScroll != x)) {
              aQ.preventDefault();
            }
            break;
          case c:
            if ((ag.swipeUp && aS) || (!aS && ag.allowPageScroll != q)) {
              aQ.preventDefault();
            }
            break;
          case s:
            if ((ag.swipeDown && aS) || (!aS && ag.allowPageScroll != q)) {
              aQ.preventDefault();
            }
            break;
        }
      }
    }
    function an() {
      return al();
    }
    function ap() {
      return !!(ag.pinchStatus || ag.pinchIn || ag.pinchOut);
    }
    function ax() {
      return !!(an() && ap());
    }
    function aB() {
      var aQ = aq();
      var aS = ae();
      var aR = aS && aQ;
      return aR;
    }
    function ac() {
      return !!(
        ag.swipe ||
        ag.swipeStatus ||
        ag.swipeLeft ||
        ag.swipeRight ||
        ag.swipeUp ||
        ag.swipeDown
      );
    }
    function E() {
      return !!(aB() && ac());
    }
    function ay() {
      return !!ag.tap;
    }
    function aw() {
      aD = B();
      aP = event.touches.length + 1;
    }
    function z() {
      aD = 0;
      aP = 0;
    }
    function af() {
      var aQ = false;
      if (aD) {
        var aR = B() - aD;
        if (aR <= ag.fingerReleaseThreshold) {
          aQ = true;
        }
      }
      return aQ;
    }
    function X() {
      return !!(H.data(v + "_intouch") === true);
    }
    function ak(aQ) {
      if (aQ === true) {
        H.bind(U, P);
        H.bind(av, ab);
        if (D) {
          H.bind(D, W);
        }
      } else {
        H.unbind(U, P, false);
        H.unbind(av, ab, false);
        if (D) {
          H.unbind(D, W, false);
        }
      }
      H.data(v + "_intouch", aQ === true);
    }
    function aO(aR, aQ) {
      var aS = aQ.identifier !== undefined ? aQ.identifier : 0;
      ai[aR].identifier = aS;
      ai[aR].start.x = ai[aR].end.x = aQ.pageX || aQ.clientX;
      ai[aR].start.y = ai[aR].end.y = aQ.pageY || aQ.clientY;
      return ai[aR];
    }
    function V(aQ) {
      var aS = aQ.identifier !== undefined ? aQ.identifier : 0;
      var aR = J(aS);
      aR.end.x = aQ.pageX || aQ.clientX;
      aR.end.y = aQ.pageY || aQ.clientY;
      return aR;
    }
    function J(aR) {
      for (var aQ = 0; aQ < ai.length; aQ++) {
        if (ai[aQ].identifier == aR) {
          return ai[aQ];
        }
      }
    }
    function T() {
      var aQ = [];
      for (var aR = 0; aR <= 5; aR++) {
        aQ.push({ start: { x: 0, y: 0 }, end: { x: 0, y: 0 }, identifier: 0 });
      }
      return aQ;
    }
    function aK(aQ, aR) {
      aR = Math.max(aR, M(aQ));
      Z[aQ].distance = aR;
    }
    function M(aQ) {
      return Z[aQ].distance;
    }
    function aE() {
      var aQ = {};
      aQ[m] = aL(m);
      aQ[l] = aL(l);
      aQ[c] = aL(c);
      aQ[s] = aL(s);
      return aQ;
    }
    function aL(aQ) {
      return { direction: aQ, distance: 0 };
    }
    function K() {
      return Y - I;
    }
    function aa(aT, aS) {
      var aR = Math.abs(aT.x - aS.x);
      var aQ = Math.abs(aT.y - aS.y);
      return Math.round(Math.sqrt(aR * aR + aQ * aQ));
    }
    function y(aQ, aR) {
      var aS = (aR / aQ) * 1;
      return aS.toFixed(2);
    }
    function ao() {
      if (aj < 1) {
        return t;
      } else {
        return b;
      }
    }
    function G(aR, aQ) {
      return Math.round(
        Math.sqrt(Math.pow(aQ.x - aR.x, 2) + Math.pow(aQ.y - aR.y, 2))
      );
    }
    function F(aT, aR) {
      var aQ = aT.x - aR.x;
      var aV = aR.y - aT.y;
      var aS = Math.atan2(aV, aQ);
      var aU = Math.round((aS * 180) / Math.PI);
      if (aU < 0) {
        aU = 360 - Math.abs(aU);
      }
      return aU;
    }
    function ar(aR, aQ) {
      var aS = F(aR, aQ);
      if (aS <= 45 && aS >= 0) {
        return m;
      } else {
        if (aS <= 360 && aS >= 315) {
          return m;
        } else {
          if (aS >= 135 && aS <= 225) {
            return l;
          } else {
            if (aS > 45 && aS < 135) {
              return s;
            } else {
              return c;
            }
          }
        }
      }
    }
    function B() {
      var aQ = new Date();
      return aQ.getTime();
    }
    function au(aQ) {
      aQ = d(aQ);
      var aS = aQ.offset();
      var aR = {
        left: aS.left,
        right: aS.left + aQ.outerWidth(),
        top: aS.top,
        bottom: aS.top + aQ.outerHeight(),
      };
      return aR;
    }
    function aC(aQ, aR) {
      return (
        aQ.x > aR.left && aQ.x < aR.right && aQ.y > aR.top && aQ.y < aR.bottom
      );
    }
  }
})(jQuery);
/*!
 * WPBakery Page Builder v6.0.0 (https://wpbakery.com)
 * Copyright 2011-2021 Michael M, WPBakery
 * License: Commercial. More details: http://go.wpbakery.com/licensing
 */

// jscs:disable
// jshint ignore: start

(function ($) {
  "function" != typeof window.vc_js &&
    (window.vc_js = function () {
      /* nectar addition */
      vc_rowBehaviour();
    }),
    "function" != typeof window.vc_plugin_flexslider &&
      (window.vc_plugin_flexslider = function ($parent) {
        ($parent
          ? $parent.find(".wpb_flexslider")
          : jQuery(".wpb_flexslider")
        ).each(function () {
          var this_element = jQuery(this),
            sliderTimeout =
              1e3 * parseInt(this_element.attr("data-interval"), 10),
            sliderFx = this_element.attr("data-flex_fx"),
            slideshow = 0 == sliderTimeout ? !1 : !0;
          this_element.is(":visible") &&
            this_element.flexslider({
              animation: sliderFx,
              slideshow: slideshow,
              slideshowSpeed: sliderTimeout,
              sliderSpeed: 800,
              smoothHeight: !0,
            });
        });
      }),
    "function" != typeof window.vc_googleplus &&
      (window.vc_googleplus = function () {
        0 < jQuery(".wpb_googleplus").length &&
          (function () {
            var po = document.createElement("script");
            (po.type = "text/javascript"),
              (po.async = !0),
              (po.src = "https://apis.google.com/js/plusone.js");
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(po, s);
          })();
      }),
    "function" != typeof window.vc_pinterest &&
      (window.vc_pinterest = function () {
        0 < jQuery(".wpb_pinterest").length &&
          (function () {
            var po = document.createElement("script");
            (po.type = "text/javascript"),
              (po.async = !0),
              (po.src = "https://assets.pinterest.com/js/pinit.js");
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(po, s);
          })();
      }),
    "function" != typeof window.vc_progress_bar &&
      (window.vc_progress_bar = function () {
        void 0 !== jQuery.fn.vcwaypoint &&
          jQuery(".vc_progress_bar").each(function () {
            var $el = jQuery(this);
            $el.vcwaypoint(
              function () {
                $el.find(".vc_single_bar").each(function (index) {
                  var bar = jQuery(this).find(".vc_bar"),
                    val = bar.data("percentage-value");
                  setTimeout(function () {
                    bar.css({
                      width: val + "%",
                    });
                  }, 200 * index);
                });
              },
              {
                offset: "85%",
              }
            );
          });
      }),
    "function" != typeof window.vc_waypoints &&
      (window.vc_waypoints = function () {
        void 0 !== jQuery.fn.vcwaypoint &&
          jQuery(
            ".wpb_animate_when_almost_visible:not(.wpb_start_animation)"
          ).each(function () {
            var $el = jQuery(this);
            $el.vcwaypoint(
              function () {
                $el.addClass("wpb_start_animation animated");
              },
              {
                offset: "85%",
              }
            );
          });
      }),
    "function" != typeof window.vc_toggleBehaviour &&
      (window.vc_toggleBehaviour = function ($el) {
        function event(content) {
          content && content.preventDefault && content.preventDefault();
          var element = jQuery(this).closest(".vc_toggle"),
            content = element.find(".vc_toggle_content");
          element.hasClass("vc_toggle_active")
            ? content.slideUp({
                duration: 300,
                complete: function () {
                  element.removeClass("vc_toggle_active");
                },
              })
            : content.slideDown({
                duration: 300,
                complete: function () {
                  element.addClass("vc_toggle_active");
                },
              });
        }
        ($el
          ? $el.hasClass("vc_toggle_title")
            ? $el.unbind("click")
            : $el.find(".vc_toggle_title").off("click")
          : jQuery(".vc_toggle_title").off("click")
        ).on("click", event);
      }),
    "function" != typeof window.vc_tabsBehaviour &&
      (window.vc_tabsBehaviour = function (ver) {
        var $call, old_version;
        jQuery.ui &&
          (($call = ver || jQuery(".wpb_tabs, .wpb_tour")),
          (ver =
            jQuery.ui && jQuery.ui.version
              ? jQuery.ui.version.split(".")
              : "1.10"),
          (old_version =
            1 === parseInt(ver[0], 10) && parseInt(ver[1], 10) < 9),
          $call.each(function (index) {
            var interval = jQuery(this).attr("data-interval"),
              tabs_array = [],
              $tabs = jQuery(this)
                .find(".wpb_tour_tabs_wrapper")
                .tabs({
                  show: function (event, ui) {
                    wpb_prepare_tab_content(event, ui);
                  },
                  activate: function (event, ui) {
                    wpb_prepare_tab_content(event, ui);
                  },
                });
            if (interval && 0 < interval)
              try {
                $tabs.tabs("rotate", 1e3 * interval);
              } catch (err) {
                window.console &&
                  window.console.warn &&
                  console.warn("tabs behaviours error", err);
              }
            jQuery(this)
              .find(".wpb_tab")
              .each(function () {
                tabs_array.push(this.id);
              }),
              jQuery(this)
                .find(".wpb_tabs_nav li")
                .on("click", function (e) {
                  return (
                    e && e.preventDefault && e.preventDefault(),
                    old_version
                      ? $tabs.tabs("select", jQuery("a", this).attr("href"))
                      : $tabs.tabs("option", "active", jQuery(this).index()),
                    !1
                  );
                }),
              jQuery(this)
                .find(".wpb_prev_slide a, .wpb_next_slide a")
                .on("click", function (length) {
                  var index;
                  length && length.preventDefault && length.preventDefault(),
                    old_version
                      ? ((index = $tabs.tabs("option", "selected")),
                        jQuery(this).parent().hasClass("wpb_next_slide")
                          ? index++
                          : index--,
                        index < 0
                          ? (index = $tabs.tabs("length") - 1)
                          : index >= $tabs.tabs("length") && (index = 0),
                        $tabs.tabs("select", index))
                      : ((index = $tabs.tabs("option", "active")),
                        (length = $tabs.find(".wpb_tab").length),
                        (index = jQuery(this)
                          .parent()
                          .hasClass("wpb_next_slide")
                          ? length <= index + 1
                            ? 0
                            : index + 1
                          : index - 1 < 0
                          ? length - 1
                          : index - 1),
                        $tabs.tabs("option", "active", index));
                });
          }));
      }),
    "function" != typeof window.vc_accordionBehaviour &&
      (window.vc_accordionBehaviour = function () {
        jQuery(".wpb_accordion").each(function (index) {
          var $this = jQuery(this),
            active_tab =
              ($this.attr("data-interval"),
              !isNaN(jQuery(this).data("active-tab")) &&
                0 < parseInt($this.data("active-tab"), 10) &&
                parseInt($this.data("active-tab"), 10) - 1),
            $tabs = !1 === active_tab || "yes" === $this.data("collapsible"),
            $tabs = $this.find(".wpb_accordion_wrapper").accordion({
              header: "> div > h3",
              autoHeight: !1,
              heightStyle: "content",
              active: active_tab,
              collapsible: $tabs,
              navigation: !0,
              activate: vc_accordionActivate,
              change: function (event, ui) {
                void 0 !== jQuery.fn.isotope &&
                  ui.newContent.find(".isotope").isotope("layout"),
                  vc_carouselBehaviour(ui.newPanel);
              },
            });
          !0 === $this.data("vcDisableKeydown") &&
            ($tabs.data("uiAccordion")._keydown = function () {});
        });
      }),
    "function" != typeof window.vc_teaserGrid &&
      (window.vc_teaserGrid = function () {
        var layout_modes = {
          fitrows: "fitRows",
          masonry: "masonry",
        };
        jQuery(
          ".wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)"
        ).each(function () {
          var $container = jQuery(this),
            $thumbs = $container.find(".wpb_thumbnails"),
            layout_mode = $thumbs.attr("data-layout-mode");
          $thumbs.isotope({
            itemSelector: ".isotope-item",
            layoutMode:
              void 0 === layout_modes[layout_mode]
                ? "fitRows"
                : layout_modes[layout_mode],
          }),
            $container
              .find(".categories_filter a")
              .data("isotope", $thumbs)
              .on("click", function ($thumbs) {
                $thumbs && $thumbs.preventDefault && $thumbs.preventDefault();
                $thumbs = jQuery(this).data("isotope");
                jQuery(this)
                  .parent()
                  .parent()
                  .find(".active")
                  .removeClass("active"),
                  jQuery(this).parent().addClass("active"),
                  $thumbs.isotope({
                    filter: jQuery(this).attr("data-filter"),
                  });
              }),
            jQuery(window).on("load resize", function () {
              $thumbs.isotope("layout");
            });
        });
      }),
    "function" != typeof window.vc_carouselBehaviour &&
      (window.vc_carouselBehaviour = function ($parent) {
        ($parent
          ? $parent.find(".wpb_carousel")
          : jQuery(".wpb_carousel")
        ).each(function () {
          var fluid_ul = jQuery(this);
          !0 !== fluid_ul.data("carousel_enabled") &&
            fluid_ul.is(":visible") &&
            (fluid_ul.data("carousel_enabled", !0),
            getColumnsCount(jQuery(this)),
            jQuery(this).hasClass("columns_count_1"),
            (fluid_ul = jQuery(this).find(".wpb_thumbnails-fluid li")).css({
              "margin-right": fluid_ul.css("margin-left"),
              "margin-left": 0,
            }),
            (fluid_ul = jQuery(this).find("ul.wpb_thumbnails-fluid")).width(
              fluid_ul.width() + 300
            ),
            jQuery(window).on("resize", function () {
              screen_size != (screen_size = getSizeName()) &&
                window.setTimeout(function () {
                  location.reload();
                }, 20);
            }));
        });
      }),
    "function" != typeof window.vc_slidersBehaviour &&
      (window.vc_slidersBehaviour = function () {
        jQuery(".wpb_gallery_slides").each(function (index) {
          var $imagesGrid,
            sliderTimeout,
            this_element = jQuery(this);
          this_element.hasClass("wpb_slider_nivo")
            ? (0 ===
                (sliderTimeout = 1e3 * this_element.attr("data-interval")) &&
                (sliderTimeout = 9999999999),
              this_element.find(".nivoSlider").nivoSlider({
                effect: "boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse",
                slices: 15,
                boxCols: 8,
                boxRows: 4,
                animSpeed: 800,
                pauseTime: sliderTimeout,
                startSlide: 0,
                directionNav: !0,
                directionNavHide: !0,
                controlNav: !0,
                keyboardNav: !1,
                pauseOnHover: !0,
                manualAdvance: !1,
                prevText: "Prev",
                nextText: "Next",
              }))
            : this_element.hasClass("wpb_image_grid") &&
              (jQuery.fn.imagesLoaded
                ? ($imagesGrid = this_element
                    .find(".wpb_image_grid_ul")
                    .imagesLoaded(function () {
                      $imagesGrid.isotope({
                        itemSelector: ".isotope-item",
                        layoutMode: "fitRows",
                      });
                    }))
                : this_element.find(".wpb_image_grid_ul").isotope({
                    itemSelector: ".isotope-item",
                    layoutMode: "fitRows",
                  }));
        });
      }),
    "function" != typeof window.vc_prettyPhoto &&
      (window.vc_prettyPhoto = function () {
        try {
          jQuery &&
            jQuery.fn &&
            jQuery.fn.prettyPhoto &&
            jQuery('a.prettyphoto, .gallery-icon a[href*=".jpg"]').prettyPhoto({
              animationSpeed: "normal",
              hook: "data-rel",
              padding: 15,
              opacity: 0.7,
              showTitle: !0,
              allowresize: !0,
              counter_separator_label: "/",
              hideflash: !1,
              deeplinking: !1,
              modal: !1,
              callback: function () {
                -1 < location.href.indexOf("#!prettyPhoto") &&
                  (location.hash = "");
              },
              social_tools: "",
            });
        } catch (err) {
          window.console &&
            window.console.warn &&
            window.console.warn("vc_prettyPhoto initialize error", err);
        }
      }),
    "function" != typeof window.vc_google_fonts &&
      (window.vc_google_fonts = function () {
        return (
          window.console &&
            window.console.warn &&
            window.console.warn(
              "function vc_google_fonts is deprecated, no need to use it"
            ),
          !1
        );
      }),
    (window.vcParallaxSkroll = !1),
    "function" != typeof window.vc_rowBehaviour &&
      (window.vc_rowBehaviour = function () {
        var vcSkrollrOptions,
          callSkrollInit,
          $ = window.jQuery;

        function fullWidthRow() {
          var $elements = $('[data-vc-full-width="true"]');
          $.each($elements, function (key, item) {
            var $el = $(this);
            $el.addClass("vc_hidden");
            var el_margin_left,
              el_margin_right,
              offset,
              width,
              padding,
              paddingRight,
              $el_full = $el.next(".vc_row-full-width");
            ($el_full = !$el_full.length
              ? $el.parent().next(".vc_row-full-width")
              : $el_full).length &&
              ((el_margin_left = parseInt($el.css("margin-left"), 10)),
              (el_margin_right = parseInt($el.css("margin-right"), 10)),
              (offset = 0 - $el_full.offset().left - el_margin_left),
              (width = $(window).width()),
              "rtl" === $el.css("direction") &&
                ((offset -= $el_full.width()),
                (offset += width),
                (offset += el_margin_left),
                (offset += el_margin_right)),
              $el.css({
                position: "relative",
                left: offset,
                "box-sizing": "border-box",
                width: width,
              }),
              $el.data("vcStretchContent") ||
                ("rtl" === $el.css("direction")
                  ? ((padding = offset) < 0 && (padding = 0),
                    (paddingRight = offset) < 0 && (paddingRight = 0))
                  : (paddingRight =
                      width -
                      (padding = (padding = -1 * offset) < 0 ? 0 : padding) -
                      $el_full.width() +
                      el_margin_left +
                      el_margin_right) < 0 && (paddingRight = 0),
                $el.css({
                  "padding-left": padding + "px",
                  "padding-right": paddingRight + "px",
                })),
              $el.attr("data-vc-full-width-init", "true"),
              $el.removeClass("vc_hidden"),
              $(document).trigger("vc-full-width-row-single", {
                el: $el,
                offset: offset,
                marginLeft: el_margin_left,
                marginRight: el_margin_right,
                elFull: $el_full,
                width: width,
              }));
          });
          // nectar addition
          //$(document).trigger("vc-full-width-row", $elements)
        }

        function fullHeightRow() {
          // nectar addition
          //var fullHeight, offsetTop, $element = $(".vc_row-o-full-height:first");
          //$element.length && (fullHeight = $(window).height(), (offsetTop = $element.offset().top) < fullHeight && (fullHeight = 100 - offsetTop / (fullHeight / 100), $element.css("min-height", fullHeight + "vh"))), $(document).trigger("vc-full-height-row", $element)
        }
        $(window)
          .off("resize.vcRowBehaviour")
          .on("resize.vcRowBehaviour", fullWidthRow)
          .on("resize.vcRowBehaviour", fullHeightRow),
          fullWidthRow(),
          fullHeightRow(),
          (0 < window.navigator.userAgent.indexOf("MSIE ") ||
            navigator.userAgent.match(/Trident.*rv\:11\./)) &&
            $(".vc_row-o-full-height").each(function () {
              "flex" === $(this).css("display") &&
                $(this).wrap('<div class="vc_ie-flexbox-fixer"></div>');
            }),
          vc_initVideoBackgrounds(),
          (callSkrollInit = !1),
          window.vcParallaxSkroll && window.vcParallaxSkroll.destroy(),
          $(".vc_parallax-inner").remove(),
          $("[data-5p-top-bottom]").removeAttr(
            "data-5p-top-bottom data-30p-top-bottom"
          ),
          $("[data-vc-parallax]").each(function () {
            var skrollrStart, $parallaxElement, parallaxImage, youtubeId;
            (callSkrollInit = !0),
              "on" === $(this).data("vcParallaxOFade") &&
                $(this)
                  .children()
                  .attr("data-5p-top-bottom", "opacity:0;")
                  .attr("data-30p-top-bottom", "opacity:1;"),
              (skrollrStart = 100 * $(this).data("vcParallax")),
              ($parallaxElement = $("<div />")
                .addClass("vc_parallax-inner")
                .appendTo($(this))).height(skrollrStart + "%"),
              (parallaxImage = $(this).data("vcParallaxImage")),
              (youtubeId = vcExtractYoutubeId(parallaxImage))
                ? insertYoutubeVideoAsBackground($parallaxElement, youtubeId)
                : void 0 !== parallaxImage &&
                  $parallaxElement.css(
                    "background-image",
                    "url(" + parallaxImage + ")"
                  ),
              (skrollrStart = -(skrollrStart - 100)),
              $parallaxElement
                .attr("data-bottom-top", "top: " + skrollrStart + "%;")
                .attr("data-top-bottom", "top: 0%;");
          }),
          callSkrollInit &&
            window.skrollr &&
            ((vcSkrollrOptions = {
              forceHeight: !1,
              smoothScrolling: !1,
              mobileCheck: function () {
                return !1;
              },
            }),
            (window.vcParallaxSkroll = skrollr.init(vcSkrollrOptions)),
            window.vcParallaxSkroll);
      }),
    "function" != typeof window.vc_gridBehaviour &&
      (window.vc_gridBehaviour = function () {
        jQuery.fn.vcGrid && jQuery("[data-vc-grid]").vcGrid();
      }),
    "function" != typeof window.getColumnsCount &&
      (window.getColumnsCount = function (el) {
        for (var find = !1, i = 1; !1 === find; ) {
          if (el.hasClass("columns_count_" + i)) return (find = !0), i;
          i++;
        }
      });
  var screen_size = getSizeName();

  function getSizeName() {
    var screen_w = jQuery(window).width();
    return 1170 < screen_w
      ? "desktop_wide"
      : 960 < screen_w && screen_w < 1169
      ? "desktop"
      : 768 < screen_w && screen_w < 959
      ? "tablet"
      : 300 < screen_w && screen_w < 767
      ? "mobile"
      : screen_w < 300
      ? "mobile_portrait"
      : "";
  }
  "function" != typeof window.wpb_prepare_tab_content &&
    (window.wpb_prepare_tab_content = function (event, ui) {
      var panel = ui.panel || ui.newPanel,
        $pie_charts = panel.find(".vc_pie_chart:not(.vc_ready)"),
        $round_charts = panel.find(".vc_round-chart"),
        $frame = panel.find(".vc_line-chart"),
        $google_maps = panel.find('[data-ride="vc_carousel"]');
      vc_carouselBehaviour(),
        vc_plugin_flexslider(panel),
        ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length &&
          ui.newPanel
            .find(".vc_masonry_media_grid, .vc_masonry_grid")
            .each(function () {
              var grid = jQuery(this).data("vcGrid");
              grid &&
                grid.gridBuilder &&
                grid.gridBuilder.setMasonry &&
                grid.gridBuilder.setMasonry();
            }),
        panel.find(".vc_masonry_media_grid, .vc_masonry_grid").length &&
          panel
            .find(".vc_masonry_media_grid, .vc_masonry_grid")
            .each(function () {
              var grid = jQuery(this).data("vcGrid");
              grid &&
                grid.gridBuilder &&
                grid.gridBuilder.setMasonry &&
                grid.gridBuilder.setMasonry();
            }),
        $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(),
        $round_charts.length &&
          jQuery.fn.vcRoundChart &&
          $round_charts.vcRoundChart({
            reload: !1,
          }),
        $frame.length &&
          jQuery.fn.vcLineChart &&
          $frame.vcLineChart({
            reload: !1,
          }),
        $google_maps.length &&
          jQuery.fn.carousel &&
          $google_maps.carousel("resizeAction"),
        ($frame = panel.find(".isotope, .wpb_image_grid_ul")),
        ($google_maps = panel.find(".wpb_gmaps_widget")),
        0 < $frame.length && $frame.isotope("layout"),
        $google_maps.length &&
          !$google_maps.is(".map_ready") &&
          (($frame = $google_maps.find("iframe")).attr(
            "src",
            $frame.attr("src")
          ),
          $google_maps.addClass("map_ready")),
        panel.parents(".isotope").length &&
          panel.parents(".isotope").each(function () {
            jQuery(this).isotope("layout");
          }),
        $(document).trigger("wpb_prepare_tab_content", panel);
    }),
    "function" != typeof window.vc_ttaActivation &&
      (window.vc_ttaActivation = function () {
        jQuery("[data-vc-accordion]").on("show.vc.accordion", function (e) {
          var $ = window.jQuery,
            ui = {};
          (ui.newPanel = $(this).data("vc.accordion").getTarget()),
            window.wpb_prepare_tab_content(e, ui);
        });
      }),
    "function" != typeof window.vc_accordionActivate &&
      (window.vc_accordionActivate = function (event, ui) {
        var $pie_charts, $round_charts, $line_charts, $carousel;
        ui.newPanel.length &&
          ui.newHeader.length &&
          (($pie_charts = ui.newPanel.find(".vc_pie_chart:not(.vc_ready)")),
          ($round_charts = ui.newPanel.find(".vc_round-chart")),
          ($line_charts = ui.newPanel.find(".vc_line-chart")),
          ($carousel = ui.newPanel.find('[data-ride="vc_carousel"]')),
          void 0 !== jQuery.fn.isotope &&
            ui.newPanel.find(".isotope, .wpb_image_grid_ul").isotope("layout"),
          ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length &&
            ui.newPanel
              .find(".vc_masonry_media_grid, .vc_masonry_grid")
              .each(function () {
                var grid = jQuery(this).data("vcGrid");
                grid &&
                  grid.gridBuilder &&
                  grid.gridBuilder.setMasonry &&
                  grid.gridBuilder.setMasonry();
              }),
          vc_carouselBehaviour(ui.newPanel),
          vc_plugin_flexslider(ui.newPanel),
          $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(),
          $round_charts.length &&
            jQuery.fn.vcRoundChart &&
            $round_charts.vcRoundChart({
              reload: !1,
            }),
          $line_charts.length &&
            jQuery.fn.vcLineChart &&
            $line_charts.vcLineChart({
              reload: !1,
            }),
          $carousel.length &&
            jQuery.fn.carousel &&
            $carousel.carousel("resizeAction"),
          ui.newPanel.parents(".isotope").length &&
            ui.newPanel.parents(".isotope").each(function () {
              jQuery(this).isotope("layout");
            }));
      }),
    "function" != typeof window.initVideoBackgrounds &&
      (window.initVideoBackgrounds = function () {
        return (
          window.console &&
            window.console.warn &&
            window.console.warn(
              "this function is deprecated use vc_initVideoBackgrounds"
            ),
          vc_initVideoBackgrounds()
        );
      }),
    "function" != typeof window.vc_initVideoBackgrounds &&
      (window.vc_initVideoBackgrounds = function () {
        jQuery("[data-vc-video-bg]").each(function () {
          var youtubeId,
            $element = jQuery(this);
          $element.data("vcVideoBg")
            ? ((youtubeId = $element.data("vcVideoBg")),
              (youtubeId = vcExtractYoutubeId(youtubeId)) &&
                ($element.find(".vc_video-bg").remove(),
                insertYoutubeVideoAsBackground($element, youtubeId)),
              jQuery(window).on("grid:items:added", function (event, $grid) {
                $element.has($grid).length && vcResizeVideoBackground($element);
              }))
            : $element.find(".vc_video-bg").remove();
        });
      }),
    "function" != typeof window.insertYoutubeVideoAsBackground &&
      (window.insertYoutubeVideoAsBackground = function (
        $element,
        youtubeId,
        counter
      ) {
        if ("undefined" == typeof YT || void 0 === YT.Player)
          return 100 < (counter = void 0 === counter ? 0 : counter)
            ? void console.warn("Too many attempts to load YouTube api")
            : void setTimeout(function () {
                insertYoutubeVideoAsBackground($element, youtubeId, counter++);
              }, 100);
        var $container = $element
          .prepend(
            '<div class="vc_video-bg vc_hidden-xs"><div class="inner"></div></div>'
          )
          .find(".inner");
        new YT.Player($container[0], {
          width: "100%",
          height: "100%",
          videoId: youtubeId,
          playerVars: {
            playlist: youtubeId,
            iv_load_policy: 3,
            enablejsapi: 1,
            disablekb: 1,
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            rel: 0,
            loop: 1,
            wmode: "transparent",
          },
          events: {
            onReady: function (event) {
              event.target.mute().setLoop(!0);
            },
          },
        }),
          vcResizeVideoBackground($element),
          jQuery(window).on("resize", function () {
            vcResizeVideoBackground($element);
          });
      }),
    "function" != typeof window.vcResizeVideoBackground &&
      (window.vcResizeVideoBackground = function ($element) {
        var iframeW,
          iframeH,
          marginLeft,
          marginTop,
          containerW = $element.innerWidth(),
          containerH = $element.innerHeight();
        containerW / containerH < 16 / 9
          ? ((iframeW = containerH * (16 / 9)),
            (iframeH = containerH),
            (marginLeft = -Math.round((iframeW - containerW) / 2) + "px"),
            (marginTop = -Math.round((iframeH - containerH) / 2) + "px"))
          : ((iframeH = (iframeW = containerW) * (9 / 16)),
            (marginTop = -Math.round((iframeH - containerH) / 2) + "px"),
            (marginLeft = -Math.round((iframeW - containerW) / 2) + "px")),
          (iframeW += "px"),
          (iframeH += "px"),
          $element.find(".vc_video-bg iframe").css({
            maxWidth: "1000%",
            marginLeft: marginLeft,
            marginTop: marginTop,
            width: iframeW,
            height: iframeH,
          });
      }),
    "function" != typeof window.vcExtractYoutubeId &&
      (window.vcExtractYoutubeId = function (id) {
        if (void 0 === id) return !1;
        id = id.match(
          /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
        );
        return null !== id && id[1];
      }),
    "function" != typeof window.vc_googleMapsPointer &&
      (window.vc_googleMapsPointer = function () {
        var $ = window.jQuery,
          $wpbGmapsWidget = $(".wpb_gmaps_widget");
        $wpbGmapsWidget.on("click", function () {
          $("iframe", this).css("pointer-events", "auto");
        }),
          $wpbGmapsWidget.on("mouseleave", function () {
            $("iframe", this).css("pointer-events", "none");
          }),
          $(".wpb_gmaps_widget iframe").css("pointer-events", "none");
      }),
    "function" != typeof window.vc_setHoverBoxPerspective &&
      (window.vc_setHoverBoxPerspective = function (hoverBox) {
        hoverBox.each(function () {
          var $this = jQuery(this),
            perspective = 4 * $this.width() + "px";
          $this.css("perspective", perspective);
        });
      }),
    "function" != typeof window.vc_setHoverBoxHeight &&
      (window.vc_setHoverBoxHeight = function (hoverBox) {
        hoverBox.each(function () {
          var hoverBoxHeight = jQuery(this),
            hoverBoxInner = hoverBoxHeight.find(".vc-hoverbox-inner");
          hoverBoxInner.css("min-height", 0);
          var frontHeight = hoverBoxHeight
              .find(".vc-hoverbox-front-inner")
              .outerHeight(),
            hoverBoxHeight = hoverBoxHeight
              .find(".vc-hoverbox-back-inner")
              .outerHeight(),
            hoverBoxHeight =
              hoverBoxHeight < frontHeight ? frontHeight : hoverBoxHeight;
          hoverBoxHeight < 250 && (hoverBoxHeight = 250),
            hoverBoxInner.css("min-height", hoverBoxHeight + "px");
        });
      }),
    "function" != typeof window.vc_prepareHoverBox &&
      (window.vc_prepareHoverBox = function () {
        var hoverBox = jQuery(".vc-hoverbox");
        vc_setHoverBoxHeight(hoverBox), vc_setHoverBoxPerspective(hoverBox);
      }),
    jQuery(document).ready(window.vc_prepareHoverBox),
    jQuery(window).on("resize", window.vc_prepareHoverBox),
    jQuery(document).ready(function ($) {
      window.vc_js();
    });
})(window.jQuery);
