// Copyrights C-EGG inc.
(function () {
  var l = document,
    p = l.body;

  function q(d) {
    return l.getElementById(d)
  }

  function u(d) {
    return l.getElementsByClassName(d)
  }

  function v(d, f) {
    for (var c = d.length - 1; 0 <= c; --c) d[c].classList.add(f)
  }

  function w(d, f) {
    for (var c = d.length - 1; 0 <= c; --c) d[c].classList.remove(f)
  }

  function aa() {
    return l.body.scrollTop || l.documentElement.scrollTop
  }

  function x() {
    window.event && window.event.preventDefault && window.event.preventDefault()
  }
  var ba = {
      left: 1,
      top: 1,
      width: 1,
      height: 1,
      fontSize: 1
    },
    y = "ontouchstart" in l.documentElement;
  navigator.userAgent.match(/ OS [432]_/);
  var ca = window.devicePixelRatio || 1;
  window.location.search.match(/[\?&]pixelRatio=(\d)/) && (ca = RegExp.$1 >> 0);

  function da(d) {
    for (var f = 1; f < arguments.length; ++f) arguments[f].style.display = d
  }

  function A(d, f, c, e) {
    d = l.createElement(d);
    if (c && c)
      for (var a in c) d[a] = c[a];
    if (e) {
      c = d.style;
      for (var b in e) c[b] = e[b] + (ba[b] ? "px" : "")
    }
    return f ? f.insertBefore(d, null) : d
  }
  var ea = function () {
    var d = 0,
      f = void 0;
    setInterval(function () {
      f && 4 < ++d && f()
    }, 150);
    return {
      set: function (c) {
        f = c;
        d = 0
      }
    }
  }();

  function fa(d) {
    return "譚ｱ蜊苓･ｿ蛹�" [d]
  }
  var ga = [
      [
        [0, 1, 2, 4],
        [2, 0, 1, 4],
        [1, 2, 0, 4],
        [4, 4, 4, 4]
      ],
      [
        [0, 1, 2, 3],
        [3, 0, 1, 2],
        [2, 3, 0, 1],
        [1, 2, 3, 0]
      ]
    ],
    B = function () {
      var d = "---";
      return {
        F: {},
        J: {},
        o: function (f, c, e) {
          debugger;
          var a = f + "" + c + "" + e;
          if (a != d) {
            d = a;
            console.log("furo.init aka=", f, c, e);
            for (var b = a = "", g = "     ".split(" "), m = "", h = ["", "", "", "", ""], k = 0; 4 > k; ++k) b += "p0A0B0C0#000#00=p1A0B0C p0A0B0C0#000#00=0Bp1A0C p0A0B0C0#000#00=0B0Cp3A m0A0B0C0D0#00=m1A0B0C0D m0A0B0C0D0#00=0Bm1A0C0D m0A0B0C0D0#00=0B0C0Dm3A k0A0A0#000#000#00=k5A1B0C0D k0A0A0#000#000#00=0Ck5A1B0D k0A0A0#000#000#00=0C0Dk7A3B a0D0A0B0C0D=0A0B0Ca0D ".replace(/[ABCD]/g, "#X" + (k + 1));
            for (k = 5; 7 > k; ++k) b += "p0A0B0C0#000#00=p1A0B0C p0A0B0C0#000#00=0Bp1A0C p0A0B0C0#000#00=0B0Cp3A m0A0B0C0D0#00=m1A0B0C0D m0A0B0C0D0#00=0Bm1A0C0D m0A0B0C0D0#00=0B0C0Dm3A k0A0A0#000#000#00=k5A1B0C0D k0A0A0#000#000#00=0Ck5A1B0D k0A0A0#000#000#00=0C0Dk7A3B a0D0A0B0C0D=0A0B0Ca0D ".replace(/[ABCD]/g, "#X" + (k + 1));
            for (k = 7; 9 > k; ++k) m += "p0A0B0C0#000#00=p1A0B0C p0A0B0C0#000#00=0Bp1A0C p0A0B0C0#000#00=0B0Cp3A m0A0B0C0D0#00=m1A0B0C0D m0A0B0C0D0#00=0Bm1A0C0D m0A0B0C0D0#00=0B0C0Dm3A k0A0A0#000#000#00=k5A1B0C0D k0A0A0#000#000#00=0Ck5A1B0D k0A0A0#000#000#00=0C0Dk7A3B a0D0A0B0C0D=0A0B0Ca0D ".replace(/[ABCD]/g, "#X" + (k + 1));
            g[1] += "p0A0B0C0#000#00=p1A0B0C p0A0B0C0#000#00=0Bp1A0C p0A0B0C0#000#00=0B0Cp3A ".replace(/[ABC]/g, "#X5");
            g[2] += "p0A0B0C0#000#00=p1A0B0C p0A0B0C0#000#00=0Bp1A0C p0A0B0C0#000#00=0B0Cp3A ".replace(/[C]/g, "#5X").replace(/[AB]/g, "#X5");
            g[3] += "p0A0B0C0#000#00=p1A0B0C p0A0B0C0#000#00=0Bp1A0C p0A0B0C0#000#00=0B0Cp3A ".replace(/[CB]/g, "#5X").replace(/[A]/g, "#X5");
            g[2] += "p0A0B0C0#000#00=p1A0B0C p0A0B0C0#000#00=0Bp1A0C p0A0B0C0#000#00=0B0Cp3A ".replace(/[A]/g, "#5X").replace(/[BC]/g, "#X5");
            g[3] += "p0A0B0C0#000#00=p1A0B0C p0A0B0C0#000#00=0Bp1A0C p0A0B0C0#000#00=0B0Cp3A ".replace(/[AC]/g, "#5X").replace(/[B]/g, "#X5");
            g[4] += "p0A0B0C0#000#00=p1A0B0C p0A0B0C0#000#00=0Bp1A0C p0A0B0C0#000#00=0B0Cp3A ".replace(/[ABC]/g, "#5X");
            h[0] += "m0A0B0C0D0#00=m1A0B0C0D m0A0B0C0D0#00=0Bm1A0C0D m0A0B0C0D0#00=0B0C0Dm3A k0A0A0#000#000#00=k5A1B0C0D k0A0A0#000#000#00=0Ck5A1B0D k0A0A0#000#000#00=0C0Dk7A3B a0D0A0B0C0D=0A0B0Ca0D ".replace(/[ABCD]/g, "#X5");
            h[1] += "m0A0B0C0D0#00=m1A0B0C0D m0A0B0C0D0#00=0Bm1A0C0D m0A0B0C0D0#00=0B0C0Dm3A k0A0A0#000#000#00=k5A1B0C0D k0A0A0#000#000#00=0Ck5A1B0D k0A0A0#000#000#00=0C0Dk7A3B a0D0A0B0C0D=0A0B0Ca0D ".replace(/[D]/g, "#5X").replace(/[ABC]/g, "#X5");
            h[2] += "m0A0B0C0D0#00=m1A0B0C0D m0A0B0C0D0#00=0Bm1A0C0D m0A0B0C0D0#00=0B0C0Dm3A k0A0A0#000#000#00=k5A1B0C0D k0A0A0#000#000#00=0Ck5A1B0D k0A0A0#000#000#00=0C0Dk7A3B a0D0A0B0C0D=0A0B0Ca0D ".replace(/[DC]/g, "#5X").replace(/[AB]/g, "#X5");
            h[3] += "m0A0B0C0D0#00=m1A0B0C0D m0A0B0C0D0#00=0Bm1A0C0D m0A0B0C0D0#00=0B0C0Dm3A k0A0A0#000#000#00=k5A1B0C0D k0A0A0#000#000#00=0Ck5A1B0D k0A0A0#000#000#00=0C0Dk7A3B a0D0A0B0C0D=0A0B0Ca0D ".replace(/[DCB]/g, "#5X").replace(/[A]/g, "#X5");
            h[1] += "m0A0B0C0D0#00=m1A0B0C0D m0A0B0C0D0#00=0Bm1A0C0D m0A0B0C0D0#00=0B0C0Dm3A k0A0A0#000#000#00=k5A1B0C0D k0A0A0#000#000#00=0Ck5A1B0D k0A0A0#000#000#00=0C0Dk7A3B ".replace(/[A]/g, "#5X").replace(/[BCD]/g, "#X5");
            h[2] += "m0A0B0C0D0#00=m1A0B0C0D m0A0B0C0D0#00=0Bm1A0C0D m0A0B0C0D0#00=0B0C0Dm3A k0A0A0#000#000#00=k5A1B0C0D k0A0A0#000#000#00=0Ck5A1B0D k0A0A0#000#000#00=0C0Dk7A3B ".replace(/[AD]/g, "#5X").replace(/[BC]/g, "#X5");
            h[3] += "m0A0B0C0D0#00=m1A0B0C0D m0A0B0C0D0#00=0Bm1A0C0D m0A0B0C0D0#00=0B0C0Dm3A k0A0A0#000#000#00=k5A1B0C0D k0A0A0#000#000#00=0Ck5A1B0D k0A0A0#000#000#00=0C0Dk7A3B ".replace(/[ADC]/g, "#5X").replace(/[B]/g, "#X5");
            h[4] += "m0A0B0C0D0#00=m1A0B0C0D m0A0B0C0D0#00=0Bm1A0C0D m0A0B0C0D0#00=0B0C0Dm3A k0A0A0#000#000#00=k5A1B0C0D k0A0A0#000#000#00=0Ck5A1B0D k0A0A0#000#000#00=0C0Dk7A3B a0D0A0B0C0D=0A0B0Ca0D ".replace(/[ADCB]/g, "#5X");
            h[1] += "k0A0A0#000#000#00=k5A1B0C0D k0A0A0#000#000#00=0Ck5A1B0D k0A0A0#000#000#00=0C0Dk7A3B ".replace(/[B]/g, "#5X").replace(/[DCA]/g, "#X5");
            h[2] += "k0A0A0#000#000#00=k5A1B0C0D k0A0A0#000#000#00=0Ck5A1B0D k0A0A0#000#000#00=0C0Dk7A3B ".replace(/[BA]/g, "#5X").replace(/[DC]/g, "#X5");
            h[2] += "k0A0A0#000#000#00=k5A1B0C0D k0A0A0#000#000#00=0Ck5A1B0D k0A0A0#000#000#00=0C0Dk7A3B ".replace(/[BD]/g, "#5X").replace(/[CA]/g, "#X5");
            h[3] += "k0A0A0#000#000#00=k5A1B0C0D k0A0A0#000#000#00=0Ck5A1B0D k0A0A0#000#000#00=0C0Dk7A3B ".replace(/[BAD]/g, "#5X").replace(/[C]/g, "#X5");
            for (var n = "", I = "", t = "", k = 0; 7 > k; ++k)
              if (2 > k || 4 < k) n += "c0A0B0C0#000#00=c1A0B0C c0B0A0C0#000#00=c1B0A0C c0C0A0B0#000#00=c1C0A0B ".replace(/A/g, "#X" + (k + 1)).replace(/B/g, "#X" + (k + 2)).replace(/C/g, "#X" + (k + 3));
            I += "c0A0B0C0#000#00=c1A0B0C c0B0A0C0#000#00=c1B0A0C c0C0A0B0#000#00=c1C0A0B ".replace(/A/g, "#X3").replace(/B/g, "#X4").replace(/C/g, "#X5");
            I += "c0A0B0C0#000#00=c1A0B0C c0B0A0C0#000#00=c1B0A0C c0C0A0B0#000#00=c1C0A0B ".replace(/A/g, "#X4").replace(/B/g, "#X5").replace(/C/g, "#X6");
            I += "c0A0B0C0#000#00=c1A0B0C c0B0A0C0#000#00=c1B0A0C c0C0A0B0#000#00=c1C0A0B ".replace(/A/g, "#X5").replace(/B/g, "#X6").replace(/C/g, "#X7");
            t += "c0A0B0C0#000#00=c1A0B0C c0B0A0C0#000#00=c1B0A0C c0C0A0B0#000#00=c1C0A0B ".replace(/A/g, "#X3").replace(/B/g, "#X4").replace(/C/g, "#5X");
            t += "c0A0B0C0#000#00=c1A0B0C c0B0A0C0#000#00=c1B0A0C c0C0A0B0#000#00=c1C0A0B ".replace(/A/g, "#X4").replace(/B/g, "#5X").replace(/C/g, "#X6");
            t += "c0A0B0C0#000#00=c1A0B0C c0B0A0C0#000#00=c1B0A0C c0C0A0B0#000#00=c1C0A0B ".replace(/A/g, "#5X").replace(/B/g, "#X6").replace(/C/g, "#X7");
            f = f || 0;
            a += (b + g[f + 0] + g[f + 1] + m + h[f] + n + (4 != f ? I : "") + (0 != f ? t : "")).replace(/X/g, "1");
            f = c || 0;
            a += (b + g[f + 0] + g[f + 1] + m + h[f] + n + (4 != f ? I : "") + (0 != f ? t : "")).replace(/X/g, "2");
            f = e || 0;
            a += (b + g[f + 0] + g[f + 1] + m + h[f] + n + (4 != f ? I : "") + (0 != f ? t : "")).replace(/X/g, "3");
            a += (b + g[1] + h[0]).replace(/X/g, "4");
            a = a.split(" ");
            a.pop();
            c = {};
            e = {};
            for (k = 0; k < a.length; ++k) b = a[k].replace(/\d#(\d\d)/g, "$1"), f = b.substr(0, 3), b = b.substr(12), c[f] ? c[f].push(b) : c[f] = [b], e[b] = a[k];
            B.F = c;
            B.J = e
          }
        }
      }
    }(),
    ha = [-2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, 0, 1, 2, 3, 4, 5, 6, 7, 8, -2, 9, 10, 11, 12, 13, 14, 15, 16, 17, -2, 18, 19, 20, 21, 22, 23, 24, 25, 26, -2, 27, 28, 29, 30, 31, 32, 33, -2, -2, -2, 4, 13, 22, -2, -2, -2, -2, -2, -2, -1, -1, -1, -1, -1, -1, -1, -1, -2, -1, -1, -1, -1, -1, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -1, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2],
    C = function () {
      function d(a, b) {
        return '<img src="img/blank.png" width=' + a + " height=" + b + "/>"
      }

      function f(a, b, g) {
        if (0 === b) return "img/blank.png";
        0 == g && 2 < b.length && (b = b.match(/[pmkacrf](\d\d)/)[1] >> 0);
        console.log(b);
        let n = Math.floor(b / 10), m = b % 10;
        let np = n == 1 ? 'm' : n == 2 ? 'p' : n == 3 ? 's' : n == 4 ? 'z' : 'b';
        return "img/pai/" + g + "/" + n + m + ".png";
      }
      var c = /img([^ ]+)/,
        e = !1;
      return {
        W: function (a) {
          return a.sort(function (b, a) {
            return 100 * ha[b] + b - (100 * ha[a] + a)
          })
        },
        P: function (a) {
          a = c.exec(a)[1];
          return 2 == a.length ? a >> 0 : a
        },
        set: function (a, b, g) {
          a.src = f(b, g, 0);
          a.className = a.className.replace(c, "img" + g)
        },
        T: function (a) {
          return null != c.exec(a.className)
        },
        tag: function (a, b, g, c) {
          var h = g >> 2,
            k = a,
            m = ~~(k * (2 == h ? 1 : 4) / 3);
          if (g & 1) var d = k,
            k = m,
            m = d;
          0 === b && 2 != h && (b = 69);
          d = "<img";
          e || (d += ' class="img' + b + (c ? " " + c : "") + '"');
          d += ' src="' + f(a, b, g % 4) + '"';
          d = d + (" width=" + k) + (" height=" + m);
          1 == h && (d += ' style="position:absolute;"');
          return d + "/>"
        },
        X: function (a, b) {
          return void 0 === b.length ? C.tag(a, b, 0) : 3 === b.length ? C.tag(a, b.substr(1) >> 0, 0) : d(3, 2 * a) + B.J[b].substr(22).replace(/[pmkac]?(\d)#(\d\d)/g, function (b, c, h) {
            return C.tag(a, h, c)
          }) + d(3, 2 * a)
        },
        G: function (a, b, g) {
          e = !0;
          var c = "",
            h = b.length;
          2 == h % 3 && --h;
          for (var k = 0; k < h; ++k) c += C.tag(a, b[k], 0);
          k < b.length && (c += d(1, 2 * a) + C.tag(a, b[k], 0));
          c += d(5, 2 * a);
          for (k = g.length - 1; 0 <= k; --k) c += C.X(a, g[k]);
          e = !1;
          return c
        }
      }
    }(),
    D = function () {
      function d(a, b) {
        for (var g = "<option></option>", c = [18, 8, 20][b], h = 1; h <= c; ++h) g += "<option>" + a + "(" + h + "鬟�)</option>";
        if (b)
          for (h = 1; h <= c; ++h) g += "<option>" + a + "(" + h + "鬟�" + h + "譫�)</option>";
        if (b)
          for (h = 1; h <= c; ++h) g += "<option>" + a + "(" + h + "譫�)</option>";
        return g
      }

      function f(a) {
        for (var b = 0, g = ""; b < arguments.length; ++b) g += "<option>" + arguments[b] + "</option>";
        return g
      }
      var c = [""];
      for (var i = 1; 16 >= i; ++i) c.push(i + "譫壺�");
      var c = f.apply(c, c),
        e = [""];
      for (var i = 1; 16 >= i; ++i) e.push(i + "譫�");
      e = f.apply(e, e);
      return {
        ba: function () {
          return f("", "20隨ｦ2鬟�400-700轤ｹ", "20隨ｦ3鬟�700-1300轤ｹ", "20隨ｦ4鬟�1300-2600轤ｹ", "25隨ｦ2鬟�400-800轤ｹ", "25隨ｦ3鬟�800-1600轤ｹ", "25隨ｦ4鬟�1600-3200轤ｹ", "30隨ｦ1鬟�300-500轤ｹ", "30隨ｦ2鬟�500-1000轤ｹ", "30隨ｦ3鬟�1000-2000轤ｹ", "30隨ｦ4鬟�2000-3900轤ｹ", "40隨ｦ1鬟�400-700轤ｹ", "40隨ｦ2鬟�700-1300轤ｹ", "40隨ｦ3鬟�1300-2600轤ｹ", "貅雋ｫ2000-4000轤ｹ", "霍ｳ貅3000-6000轤ｹ", "蛟肴ｺ4000-8000轤ｹ", "50隨ｦ1鬟�400-800轤ｹ", "50隨ｦ2鬟�800-1600轤ｹ", "50隨ｦ3鬟�1600-3200轤ｹ", "60隨ｦ1鬟�500-1000轤ｹ", "60隨ｦ2鬟�1000-2000轤ｹ", "60隨ｦ3鬟�2000-3900轤ｹ", "70隨ｦ1鬟�600-1200轤ｹ", "70隨ｦ2鬟�1200-2300轤ｹ", "80隨ｦ1鬟�700-1300轤ｹ", "80隨ｦ2鬟�1300-2600轤ｹ", "90隨ｦ1鬟�800-1500轤ｹ", "90隨ｦ2鬟�1500-2900轤ｹ", "100隨ｦ1鬟�800-1600轤ｹ", "100隨ｦ2鬟�1600-3200轤ｹ", "110隨ｦ1鬟�900-1800轤ｹ", "110隨ｦ2鬟�1800-3600轤ｹ", "荳牙肴ｺ6000-12000轤ｹ", "蠖ｹ貅8000-16000轤ｹ", "蠖ｹ貅16000-32000轤ｹ", "蠖ｹ貅24000-48000轤ｹ", "蝗帛肴ｺ8000-16000轤ｹ", "莠泌肴ｺ10000-20000轤ｹ")
        },
        ca: function () {
          return f("", "20隨ｦ2鬟�700轤ｹ竏", "20隨ｦ3鬟�1300轤ｹ竏", "20隨ｦ4鬟�2600轤ｹ竏", "25隨ｦ2鬟�800轤ｹ竏", "25隨ｦ3鬟�1600轤ｹ竏", "25隨ｦ4鬟�3200轤ｹ竏", "30隨ｦ1鬟�500轤ｹ竏", "30隨ｦ2鬟�1000轤ｹ竏", "30隨ｦ3鬟�2000轤ｹ竏", "30隨ｦ4鬟�3900轤ｹ竏", "40隨ｦ1鬟�700轤ｹ竏", "40隨ｦ2鬟�1300轤ｹ竏", "40隨ｦ3鬟�2600轤ｹ竏", "貅雋ｫ4000轤ｹ竏", "霍ｳ貅6000轤ｹ竏", "蛟肴ｺ8000轤ｹ竏", "50隨ｦ1鬟�800轤ｹ竏", "50隨ｦ2鬟�1600轤ｹ竏", "50隨ｦ3鬟�3200轤ｹ竏", "60隨ｦ1鬟�1000轤ｹ竏", "60隨ｦ2鬟�2000轤ｹ竏", "60隨ｦ3鬟�3900轤ｹ竏", "70隨ｦ1鬟�1200轤ｹ竏", "70隨ｦ2鬟�2300轤ｹ竏", "80隨ｦ1鬟�1300轤ｹ竏", "80隨ｦ2鬟�2600轤ｹ竏", "90隨ｦ1鬟�1500轤ｹ竏", "90隨ｦ2鬟�2900轤ｹ竏", "100隨ｦ1鬟�1600轤ｹ竏", "100隨ｦ2鬟�3200轤ｹ竏", "110隨ｦ1鬟�1800轤ｹ竏", "110隨ｦ2鬟�3600轤ｹ竏", "荳牙肴ｺ12000轤ｹ竏", "蠖ｹ貅16000轤ｹ竏", "蠖ｹ貅32000轤ｹ竏", "蠖ｹ貅48000轤ｹ竏", "蝗帛肴ｺ16000轤ｹ竏", "莠泌肴ｺ20000轤ｹ竏")
        },
        Z: function () {
          return f("", "25隨ｦ2鬟�1600轤ｹ", "25隨ｦ3鬟�3200轤ｹ", "25隨ｦ4鬟�6400轤ｹ", "30隨ｦ1鬟�1000轤ｹ", "30隨ｦ2鬟�2000轤ｹ", "30隨ｦ3鬟�3900轤ｹ", "30隨ｦ4鬟�7700轤ｹ", "40隨ｦ1鬟�1300轤ｹ", "40隨ｦ2鬟�2600轤ｹ", "40隨ｦ3鬟�5200轤ｹ", "貅雋ｫ8000轤ｹ", "霍ｳ貅12000轤ｹ", "蛟肴ｺ16000轤ｹ", "50隨ｦ1鬟�1600轤ｹ", "50隨ｦ2鬟�3200轤ｹ", "50隨ｦ3鬟�6400轤ｹ", "60隨ｦ1鬟�2000轤ｹ", "60隨ｦ2鬟�3900轤ｹ", "60隨ｦ3鬟�7700轤ｹ", "70隨ｦ1鬟�2300轤ｹ", "70隨ｦ2鬟�4500轤ｹ", "80隨ｦ1鬟�2600轤ｹ", "80隨ｦ2鬟�5200轤ｹ", "90隨ｦ1鬟�2900轤ｹ", "90隨ｦ1鬟�5800轤ｹ", "100隨ｦ1鬟�3200轤ｹ", "100隨ｦ2鬟�6400轤ｹ", "110隨ｦ1鬟�3600轤ｹ", "110隨ｦ2鬟�7100轤ｹ", "荳牙肴ｺ24000轤ｹ", "蠖ｹ貅32000轤ｹ", "蠖ｹ貅64000轤ｹ", "蠖ｹ貅96000轤ｹ", "蝗帛肴ｺ32000轤ｹ", "莠泌肴ｺ40000轤ｹ")
        },
        $: function () {
          return f("", "25隨ｦ2鬟�2400轤ｹ", "25隨ｦ3鬟�4800轤ｹ", "25隨ｦ4鬟�9600轤ｹ", "30隨ｦ1鬟�1500轤ｹ", "30隨ｦ2鬟�2900轤ｹ", "30隨ｦ3鬟�5800轤ｹ", "30隨ｦ4鬟�11600轤ｹ", "40隨ｦ1鬟�2000轤ｹ", "40隨ｦ2鬟�3900轤ｹ", "40隨ｦ3鬟�7700轤ｹ", "貅雋ｫ12000轤ｹ", "霍ｳ貅18000轤ｹ", "蛟肴ｺ24000轤ｹ", "50隨ｦ1鬟�2400轤ｹ", "50隨ｦ2鬟�4800轤ｹ", "50隨ｦ3鬟�9600轤ｹ", "60隨ｦ1鬟�2900轤ｹ", "60隨ｦ2鬟�5800轤ｹ", "60隨ｦ3鬟�11600轤ｹ", "70隨ｦ1鬟�3400轤ｹ", "70隨ｦ2鬟�6800轤ｹ", "80隨ｦ1鬟�3900轤ｹ", "80隨ｦ2鬟�7700轤ｹ", "90隨ｦ1鬟�4400轤ｹ", "90隨ｦ2鬟�8700轤ｹ", "100隨ｦ1鬟�4800轤ｹ", "100隨ｦ2鬟�9600轤ｹ", "110隨ｦ1鬟�5300轤ｹ", "110隨ｦ2鬟�10600轤ｹ", "荳牙肴ｺ36000轤ｹ", "蠖ｹ貅48000轤ｹ", "蠖ｹ貅96000轤ｹ", "蠖ｹ貅144000轤ｹ", "蝗帛肴ｺ48000轤ｹ", "莠泌肴ｺ60000轤ｹ")
        },
        da: c,
        aa: e,
        i: function () {
          return f("", "髢蜑肴ｸ��鞫ｸ蜥�(1鬟�)", "遶狗峩(1鬟�)", "荳逋ｺ(1鬟�)", "荳逋ｺ(1鬟�1譫�)", "荳逋ｺ(1譫�)", "讒肴ｧ�(1鬟�)", "蠍ｺ荳企幕闃ｱ(1鬟�)", "豬ｷ蠎墓尊譛�(1鬟�)", "豐ｳ蠎墓宙鬲�(1鬟�)", "蟷ｳ蜥�(1鬟�)", "譁ｭ蟷ｺ荵�(1鬟�)", "荳逶�哨(1鬟�)", "閾ｪ鬚ｨ 譚ｱ(1鬟�)", "閾ｪ鬚ｨ 蜊�(1鬟�)", "閾ｪ鬚ｨ 隘ｿ(1鬟�)", "閾ｪ鬚ｨ 蛹�(1鬟�)", "蝣ｴ鬚ｨ 譚ｱ(1鬟�)", "蝣ｴ鬚ｨ 蜊�(1鬟�)", "蝣ｴ鬚ｨ 隘ｿ(1鬟�)", "蝣ｴ鬚ｨ 蛹�(1鬟�)", "蠖ｹ迚� 逋ｽ(1鬟�)", "蠖ｹ迚� 逋ｼ(1鬟�)", "蠖ｹ迚� 荳ｭ(1鬟�)", "荳｡遶狗峩(2鬟�)", "荳�ｯｾ蟄�(1鬟�)", "荳�ｯｾ蟄�(2鬟�)", "豺ｷ蜈ｨ蟶ｯ蟷ｺ荵�(1鬟�)", "豺ｷ蜈ｨ蟶ｯ蟷ｺ荵�(2鬟�)", "荳豌鈴夊ｲｫ(1鬟�)", "荳豌鈴夊ｲｫ(2鬟�)", "荳芽牡蜷碁��(1鬟�)", "荳芽牡蜷碁��(2鬟�)", "荳芽牡蜷悟綾(2鬟�)", "荳画ｧ灘ｭ�(2鬟�)", "蟇ｾ縲�柱(2鬟�)", "荳画囓蛻ｻ(2鬟�)", "蟆丈ｸ牙�(2鬟�)", "豺ｷ閠��ｭ(2鬟�)", "莠檎寃蜿｣(3鬟�)", "邏泌�蟶ｯ蟷ｺ荵�(2鬟�)", "邏泌�蟶ｯ蟷ｺ荵�(3鬟�)", "豺ｷ荳濶ｲ(2鬟�)", "豺ｷ荳濶ｲ(3鬟�)", "貂�ｸ濶ｲ(5鬟�)", "貂�ｸ濶ｲ(6鬟�)", "螟ｩ蜥�(蠖ｹ貅)", "蝨ｰ蜥�(蠖ｹ貅)", "螟ｧ荳牙�(蠖ｹ貅)", "蝗帶囓蛻ｻ(蠖ｹ貅)", "蝗帶囓蛻ｻ蜊倬ｨ�(蠖ｹ貅)", "蟄嶺ｸ濶ｲ(蠖ｹ貅)", "邱台ｸ濶ｲ(蠖ｹ貅)", "貂���ｭ(蠖ｹ貅)", "荵晁動螳晉㊧(蠖ｹ貅)", "邏疲ｭ｣荵晁動螳晉㊧(蠖ｹ貅)", "蝗ｽ螢ｫ辟｡蜿�(蠖ｹ貅)", "蝗ｽ螢ｫ辟｡蜿鯉ｼ托ｼ馴擇(蠖ｹ貅)", "螟ｧ蝗帛万(蠖ｹ貅)", "蟆丞屁蝟�(蠖ｹ貅)", "蝗帶ｧ灘ｭ�(蠖ｹ貅)", "螟ｩ蜥�(蠖ｹ貅5譫�)", "蝨ｰ蜥�(蠖ｹ貅5譫�)", "螟ｧ荳牙�(蠖ｹ貅5譫�)", "蝗帶囓蛻ｻ(蠖ｹ貅5譫�)", "蝗帶囓蛻ｻ蜊倬ｨ�(蠖ｹ貅5譫�)", "蟄嶺ｸ濶ｲ(蠖ｹ貅5譫�)", "邱台ｸ濶ｲ(蠖ｹ貅5譫�)", "貂���ｭ(蠖ｹ貅5譫�)", "荵晁動螳晉㊧(蠖ｹ貅5譫�)", "邏疲ｭ｣荵晁動螳晉㊧(蠖ｹ貅5譫�)", "蝗ｽ螢ｫ辟｡蜿�(蠖ｹ貅5譫�)", "蝗ｽ螢ｫ辟｡蜿鯉ｼ托ｼ馴擇(蠖ｹ貅5譫�)", "螟ｧ蝗帛万(蠖ｹ貅5譫�)", "蟆丞屁蝟�(蠖ｹ貅5譫�)", "蝗帶ｧ灘ｭ�(蠖ｹ貅5譫�)", "螟ｩ蜥�(蠖ｹ貅10譫�)", "蝨ｰ蜥�(蠖ｹ貅10譫�)", "螟ｧ荳牙�(蠖ｹ貅10譫�)", "蝗帶囓蛻ｻ(蠖ｹ貅10譫�)", "蝗帶囓蛻ｻ蜊倬ｨ�(蠖ｹ貅10譫�)", "蟄嶺ｸ濶ｲ(蠖ｹ貅10譫�)", "邱台ｸ濶ｲ(蠖ｹ貅10譫�)", "貂���ｭ(蠖ｹ貅10譫�)", "荵晁動螳晉㊧(蠖ｹ貅10譫�)", "邏疲ｭ｣荵晁動螳晉㊧(蠖ｹ貅10譫�)", "蝗ｽ螢ｫ辟｡蜿�(蠖ｹ貅10譫�)", "蝗ｽ螢ｫ辟｡蜿鯉ｼ托ｼ馴擇(蠖ｹ貅10譫�)", "螟ｧ蝗帛万(蠖ｹ貅10譫�)", "蟆丞屁蝟�(蠖ｹ貅10譫�)", "蝗帶ｧ灘ｭ�(蠖ｹ貅10譫�)")
        },
        ea: d("繝峨Λ", 0),
        fa: d("襍､繝峨Λ", 1),
        ga: d("陬上ラ繝ｩ", 2)
      }
    }();

  function ia(d, f) {
    for (var c in f) d[c] = f[c]
  }
  var F = !1,
    H = function func0 () {
      var d = "";
      window.location.hash && (d += "&" + window.location.hash.substr(1));
      window.location.search && (d += "&" + window.location.search.substr(1));
      for (var f = {}, d = d.match(/&([^=]+)=([^&]*)/g) || [], c = 0; c < d.length; ++c) {
        var e = d[c].indexOf("=");
        f[d[c].substr(1, e - 1)] = d[c].substr(e + 1)
      }
      f.o = func0;
      return H = f
    }(),
    L = function () {
      function d() {
        c = void 0;
        for (var e in f) f[e](), delete f[e]
      }
      var f = {},
        c = void 0;
      return {
        call: function (e, a, b) {
          b ? (delete f[e], a()) : f[e] = a;
          void 0 === c && (c = setTimeout(d, 1))
        }
      }
    }();

  function M(d) {
    var f = document.createElement("style");
    f.innerHTML = d;
    p.appendChild(f)
  }

  function ka(d, f) {
    var c = l.createElement("DIV");
    ia(c, d);
    ia(c.style, f);
    p && p.insertBefore(c, null)
  }
  M("A:link{color:blue;}A:visited{color:blue;}A:hover{color:red;}BODY{margin:0px;background-color:#CCC;-webkit-text-size-adjust:none;}FORM{margin:0px;padding:0px;}HR{border:1px solid #CCC;border-bottom:0px none #CCC;}INPUT,SELECT,BUTTON{font-size:100%;}INPUT,SELECT,TEXTAREA{background-color:#F5F5F5;border:0px none #000;resize:none;}INPUT,SELECT{margin:1px 0px;padding-left:0px;padding-right:0px;}TEXTAREA,BUTTON{margin:0px;}TEXTAREA{word-break:break-all;}SELECT{border-radius:4px;border:1px solid #000;}BUTTON{-webkit-appearance:none;border-radius:4px;border:1px solid #888;background:-moz-linear-gradient(top,#FFF 0%,#DDD);background:-webkit-gradient(linear, left top, left bottom, from(#FFF), to(#DDD));}BUTTON:active{background:-moz-linear-gradient(top,#DDD 0%,#FFF);background:-webkit-gradient(linear, left top, left bottom, from(#DDD), to(#FFF));}BUTTON[disabled]{-webkit-appearance:none;border-radius:4px;border:1px solid #888;background:#CCC;}.f100{font-size:36px;}.f075{font-size:27px;}BODY,.f050{font-size:18px;}.nowrap,.cells,cellc{white-space:nowrap;}.kaze{padding-right:8px;border-right:8px solid #CCC;}.oya1.kaze{border-right-color:#F00;}.forescapeios6inputbug{overflow:hidden;}");
  M(".img69{background-color:#F5F5F5;}.err,.err4,.err5,.err6,.errf,.errc{background-color:#FCC;}.clickready{}.disabled{}.editing{z-index:2;position:relative;background-color:#FFF;}.displaynone{display:none;}.w100{width:100%;}");
  ka({
    id: "main"
  }, {});
  ka({
    innerHTML: "<small>TENHOU LOG EDITOR / &copy; C-EGG</small>"
  }, {
    textAlign: "center",
    margin: "40px 0px 200px; 0px"
  });
  var N = function () {
      function d(c, e) {
        c = c.getElementsByTagName("IMG");
        for (var a = 0; a < c.length; ++a) this[a] = c[a], 13 < a && (this[a].style.display = "none");
        this.length = c.length;
        this.raw = [];
        this.Y = e;
        this.l = {}
      }
      var f = {
        p: 70,
        m: 71,
        k: 71,
        a: 71,
        c: 72,
        r: 73,
        f: 74
      };
      d.prototype.set = function (c, e) {
        for (var a = this.raw; a.length <= c;) a.push(0);
        var b = a[c] !== e;
        a[c] = e;
        C.set(this[c], 36, 0 === e ? 69 : e);
        for (this.Y && C.set(this.Y[c], 36, 2 < e.length ? f[e.match(/[pmkacfr]/)[0]] : 0); a.length && 0 === a[a.length - 1];) a.pop();
        return b
      };
      d.prototype.s = function (c) {
        for (var e = c.length < this.length ? c.length : this.length, a = !1, b = 0; b < e; ++b) this.raw[b] !== c[b] && (a |= this.set(b, c[b]));
        for (; b < this.raw.length; ++b) 0 !== this.raw[b] && (a |= this.set(b, 0));
        return a
      };
      d.prototype.ka = function (c) {
        var e = "";
        this[c].classList.contains("err4") && (e += "窶ｻ譛螟ｧ譫壽焚(�疲椢)繧定ｶ�∴縺ｦ縺�∪縺�<br>");
        this[c].classList.contains("err5") && (e += "窶ｻ襍､迚後�菴ｿ逕ｨ蜿ｯ閭ｽ譫壽焚繧定ｶ�∴縺ｦ縺�∪縺�<br>");
        this[c].classList.contains("err6") && (e += "窶ｻ髱櫁ｵ､迚後�菴ｿ逕ｨ蜿ｯ閭ｽ譫壽焚繧定ｶ�∴縺ｦ縺�∪縺�<br>");
        this[c].classList.contains("errf") && (e += "窶ｻ蜑ｯ髴ｲ迚�(譁ｹ蜷�)縺檎峩蜑阪�謇鍋煙(螳ｶ)縺ｨ荳閾ｴ縺励∪縺帙ｓ<br>");
        this[c].classList.contains("errc") && (e += "窶ｻ騾ｲ陦後′莉門ｮｶ縺ｨ荳閾ｴ縺励∪縺帙ｓ<br>");
        this.l[c] && (e += this.l[c]);
        return e
      };
      return {
        U: 0,
        h: [!1, !1, !1, !1],
        result: ["荳肴�"],
        o: function (c) {
          for (var e = 0; e < c.length; ++e)
            if (5 != (e - 2) % 6) {
              for (var a = 2 > e ? 0 : (e - 2) % 6, b = 2 > e ? 5 : a ? 28 : 13, g = "", f = 0; f < b; ++f) g += C.tag(36, 0, a & 1 ? 8 : 0, "yx" + (10 > e ? "0" : "") + e + (10 > f ? "0" : "") + f + (a & 1 ? "" : " clickready"));
              c[e].innerHTML = g;
              N[e] = new d(c[e], 2 == a || 4 == a ? N[e - 1] : void 0)
            }
          N.length = c.length
        },
        ja: function (c, f) {
          var a = Math.floor((f - 2) / 6);
          0 > a || c < N[6 * a + 3].length - 1 && c < N[6 * a + 4].length - 1 && c < N[6 * a + 5].length - 1 && c < N[6 * a + 6].length - 1 && da("", N[6 * a + 3][c + 1], N[6 * a + 4][c + 1], N[6 * a + 5][c + 1], N[6 * a + 6][c + 1])
        },
        S: function (c) {
          if (!(0 > c)) {
            var f = N[6 * c + 3],
              a = N[6 * c + 4],
              b = N[6 * c + 5];
            c = N[6 * c + 6];
            for (var g = Math.max(13, f.raw.length, a.raw.length, b.raw.length, c.raw.length) + 1, d = 0; d < g; ++d) da("", f[d], a[d], b[d], c[d]);
            for (; d < f.length; ++d) da("none", f[d], a[d], b[d], c[d])
          }
        }
      }
    }(),
    O = function () {
      function d(b, a, g, c) {
        g = N[6 * g + 4].raw[c].match(/[pmc]\d\d/)[0].substr(1);
        c = N[6 * b + 6].raw[a];
        if (60 == c || "r60" == c) c = N[6 * b + 4].raw[a];
        return c == g || c == "r" + g
      }

      function f(b, a) {
        c(N[6 * a + 3][b[a]]);
        c(N[6 * a + 4][b[a]]);
        c(N[6 * a + 5][b[a]]);
        c(N[6 * a + 6][b[a]])
      }

      function c(b) {
        b = b.classList;
        for (var a = 12; 0 <= a; --a)
          if (!(0 < a) || b.contains("skip" + a)) {
            debugger;
            b.remove("skip" + a);
            b.add("skip" + (a + 1));
            break
          }
      }

      function e(b, g) {
        if (void 0 === g.length) return a(b, g);
        if (3 == g.length) return a(b, g.substr(1) >> 0);
        var c = B.J[g];
        if (c) {
          var c = [c.substr(7, 2) >> 0, c.substr(11, 2) >> 0, c.substr(15, 2) >> 0, c.substr(19, 2) >> 0],
            k = !0;
          c[0] && (k &= a(b, c[0]));
          c[1] && (k &= a(b, c[1]));
          c[2] && (k &= a(b, c[2]));
          c[3] && (k &= a(b, c[3]));
          return k
        }
      }

      function a(b, a, c) {
        a = b.indexOf(a);
        if (-1 == a) return !1;
        c ? b.splice(a, 1, c) : b.splice(a, 1);
        return !0
      }
      for (var b = "", g = 0; 12 >= g; ++g) b += ".skip" + g + "{margin-left:" + 36 * g + "px;}";
      M(b + ".collapse .fin,.editing .fin{z-index:0;position:absolute;left:0px;top:0px;visibility:hidden;}.collapse .fin.fshow,.editing .fin.fshow{visibility:visible;}");
      var m = [
        [],
        [],
        [],
        []
      ];
      return {
        o: function (b) {
          for (var a = 0; 4 > a; ++a) O[a] = b[6 * a + 7], O[a].innerHTML = C.G(36, [], []), O[a].height = 72, O[a].style.position = "relative", O[a].classList.add("collapse"), O[a].previousSibling.style.width = "27px"
        },
        O: function (b) {
          var c = N[6 * b + 2],
            g = N[6 * b + 4],
            f = N[6 * b + 6];
          m[b] = [];
          w(c[0].parentNode.getElementsByClassName("err"), "err");
          c.l = {};
          w(g[0].parentNode.getElementsByClassName("err"), "err");
          g.l = {};
          w(f[0].parentNode.getElementsByClassName("err"), "err");
          f.l = {};
          for (var d = 0; d < c.length; ++d) 0 === c.raw[d] && (c[d].classList.add("err"), c.l[d] = "窶ｻ遨ｺ谺��菴ｿ逕ｨ縺ｧ縺阪∪縺帙ｓ");
          var c = c.raw.concat(),
            h = !1,
            c = C.W(c),
            K = [],
            ja = !0,
            ra = Math.max(0, g.raw.length, f.raw.length),
            X = [];
          X.push('<div class="fin fin_">' + C.G(36, c, K) + "</div>");
          for (d = 0; d < ra; ++d) {
              var G = g.raw[d] || 0
                , E = f.raw[d] || 0
                , J = 2 < G.length ? G.match(/[pmc]/)[0] : 0
                , R = 2 < E.length ? E.match(/[karf]/)[0] : 0;
              "r" == R && (E = E.substr(1) >> 0);
              var z = [];
              0 === G && 0 === E ? z.push("※空列は使用できません") : 0 === G && 0 !== E ? z.push("※入力が正しくありません") : m[b][d] & 4 && J ? z.push("※取牌(嶺上)を指定してください") : "p" == J || "m" == J || "c" == J ? (h && z.push("※リーチ後に明副露は行えません"),
              e(c, G) || z.push("※明副露牌が手牌に存在しません"),
              K.push(G),
              ja = !1) : 0 !== G && (c.push(G),
              2 != c.length % 3 && z.push("※手牌枚数が不正です"));
              z.length && (g[d].classList.add("err"),
              g.l[d] = z.join("<br>"));
              X.push('<div class="fin fin' + d + '">' + C.G(36, c, K) + "</div>");
              z = [];
              if (0 === G && 0 === E)
                  z.push("※空列は使用できません");
              else if ("m" == J)
                  0 !== E && z.push("※明槓後は空欄にしてください");
              else if ("a" == R || "f" == R)
                  "p" != J && "c" != J || z.push("※明副露直後に暗副露は行えません"),
                  e(c, E) || z.push("※暗副露牌が手牌に存在しません"),
                  K.push(E);
              else if ("k" == R) {
                  var sa = E.replace(/k\d\d/, "p");
                  e(c, E) ? a(K, sa, E) || z.push("※加槓する明刻子が存在しません") : z.push("※加槓する牌が存在しません")
              } else
                  0 !== E && (h && 60 != E && z.push("※リーチ後はツモ切りを指定してください"),
                  a(c, 60 == E ? G : E) || z.push("※打牌が手牌に存在しません"),
                  1 != c.length % 3 && z.push("※手牌枚数が不正です"));
              "r" == R && (ja ? h ? z.push("※リーチ後にリーチ宣言は行えません") : h = !0 : z.push("※明副露後にリーチ宣言は行えません"));
              2 != c.length % 3 && C.W(c);
              z.length && (f[d].classList.add("err"),
              f.l[d] = z.join("<br>"));
              X.push('<div class="fin fin' + d + '_">' + C.G(36, c, K) + "</div>");
              m[b][d] |= 0;
              switch (J || R) {
              case "m":
              case "c":
              case "p":
                  G = G.indexOf(J) / 2 + 1;
                  "m" == J && 3 <= G && --G;
                  m[b][d] |= G;
                  break;
              case "r":
                  m[b][d] |= 8
              }
              switch (J || R) {
              case "m":
              case "k":
              case "a":
              case "f":
                  m[b][d + 1] |= 4
              }
          }
          O[b].innerHTML = X.join("");
          O[b].lastChild.classList.add("fshow")
        },
        C: function () {
          w(u("err4"), "err4");
          for (var b = [], a = 0; 60 > a; ++a) b[a] = 0;
          for (var c = 0; c < N.length; ++c)
            if (a = (c - 2) % 6, !(1 == a || 2 < a))
              for (var g = N[c].raw, a = 0; a < g.length; ++a) {
                var e = g[a];
                e && void 0 === e.length && b[e]++
              }
          for (a = 10; 60 > a; ++a) 4 < b[a] && v(u("img" + a), "err4");
          w(u("err5"), "err5");
          b[51] > q("aka51").selectedIndex && v(u("img51"), "err5");
          b[52] > q("aka52").selectedIndex && v(u("img52"), "err5");
          b[53] > q("aka53").selectedIndex && v(u("img53"), "err5");
          w(u("err6"), "err6");
          b[15] > 4 - q("aka51").selectedIndex && v(u("img15"), "err6");
          b[25] > 4 - q("aka52").selectedIndex && v(u("img25"), "err6");
          b[35] > 4 - q("aka53").selectedIndex && v(u("img35"), "err6");
          w(u("errf"), "errf");
          for (a = 0; 8 > a; ++a) w(u("skip" + a), "skip" + a);
          b = [!1, !1, !1, !1];
          c = -1;
          a = [0, 0, 0, 0];
          g = [0, 0, 0, 0];
          debugger;
          for (e = q("kyoku").selectedIndex % 4;;)
            if (-1 != c && (b[c] = !0, c = -1), m[e][a[e]] & 8 && (c = e), ++a[e], ++g[e], m[e][a[e]] & 4) g[(e + 1) % 4] < g[e] + ((e + 1) % 4 < e) && (f(a, (e + 1) % 4), ++g[(e + 1) % 4]), g[(e + 2) % 4] < g[e] + ((e + 2) % 4 < e) && (f(a, (e + 2) % 4), ++g[(e + 2) % 4]), g[(e + 3) % 4] < g[e] + ((e + 3) % 4 < e) && (f(a, (e + 3) % 4), ++g[(e + 3) % 4]);
            else {
              var r;
              if ((r = (e + 1) % 4, 0 == (m[r][a[r]] & 7)) && (r = (e + 3) % 4, 2 === m[r][a[r]] && d((e + 1) % 4, a[(e + 1) % 4], r, a[r]))) e = (e + 1) % 4;
              else if ((r = (e + 3) % 4, 3 === m[r][a[r]] && d(e, a[e] - 1, r, a[r])) || (r = (e + 2) % 4, 2 === m[r][a[r]] && d(e, a[e] - 1, r, a[r])) || (r = (e + 1) % 4, 1 === m[r][a[r]] && d(e, a[e] - 1, r, a[r]))) 2 <= m[r][a[r]] && (f(a, (e + 1) % 4), ++g[(e + 1) % 4]), 3 <= m[r][a[r]] && (f(a, (e + 2) % 4), ++g[(e + 2) % 4]), e = r;
              else if (r = (e + 1) % (F ? 3 : 4), void 0 !== m[r][a[r]] && 0 === (m[r][a[r]] & 3)) e = r;
              else break
            }
          N.h[0] === b[0] && N.h[1] === b[1] && N.h[2] === b[2] && N.h[3] === b[3] || L.call("CompileResult", P);
          N.h = b;
          N.U = e;
          w(u("errc"), "errc");
          if (m[0].length && m[1].length && m[2].length && (F || m[3].length))
            for (r = 0; 4 > r; ++r)
              for (; a[r] < m[r].length; ++a[r]) N[6 * r + 4][a[r]].classList.add("errc"), N[6 * r + 6][a[r]].classList.add("errc")
        },
        j: function (b, a) {
          var c = Math.floor((a - 2) / 6);
          if (!(0 > c)) {
            w(u("fshow"), "fshow");
            a = 2 > a ? 0 : (a - 2) % 6;
            var g = "fin";
            0 == a ? g += "_" : 2 == a ? g += b : 4 == a && (g += b + "_");
            // debugger;
            console.log(O);
            console.log(O[c]);
            g = O[c].getElementsByClassName(g);
            (g.length ? g[0] : O[c].lastChild).classList.add("fshow")
          }
        },
        ia: function () {
          w(u("fshow"), "fshow");
          for (var b = 0; 4 > b; ++b) O[b].lastChild.classList.add("fshow")
        }
      }
    }(),
    T = function () {
      function d(b, a) {
        for (var c = 0, g = b; g.previousSibling; g = g.previousSibling) ++c;
        b = b.parentNode.parentNode;
        if (0 < a)
          for (; b && a; --a) b = b.nextSibling;
        if (0 > a)
          for (; b && a; ++a) b = b.previousSibling;
        if (b)
          for (b = b.firstChild.nextSibling.firstChild; c && b.nextSibling; --c) b = b.nextSibling;
        c && (b = void 0);
        return b
      }

      function f(b) {
        c && (c.style.backgroundColor = b ? "#CCC" : "")
      }
      var c = void 0,
        e = 0,
        a = 0;
      setInterval(function () {
        c && f("" == c.style.backgroundColor)
      }, 500);
      return {
        A: void 0,
        I: function () {
          return 2 > a ? 0 : (a - 2) % 6
        },
        w: function (b) {
          var g;
          g = b && b.className ? (g = b.className.match(/yx(\d\d\d\d)/)) && g.length ? g[1] : -1 : -1;
          if (b && (-1 == g || !b.classList.contains("clickready"))) return !1;
          b || (Q.L(), N.S(Math.floor((a - 2) / 6)));
          b && c && Q.ha(b);
          e = g % 100;
          a = ~~(g / 100);
          f(!1);
          c = b;
          f(!0);
          Q.la(-1 == g ? "" : N[a].ka(e));
          b && Q.j(0);
          b && O.j(e, a);
          return !0
        },
        B: function (b) {
          if (!c) return !1;
          S.b({
            path: "/log/0/" + (4 + (2 > a ? a - 2 : 3 * Math.floor((a - 2) / 6) + Math.floor((a - 2) % 6 / 2))) + "/" + e,
            val: b
          });
          debugger;
          N.ja(e, a);
          T.K(1);
          return !0
        },
        K: function (b) {
          if (!c) return !1;
          if (2 == T.A.selectedIndex && 2 < a) {
            var g = a;
            2 == T.I() && 0 > b && (a = (a + 18 + 2 - 2) % 24 + 2, e -= g < a ? 1 : 0);
            4 == T.I() && 0 < b && (a = (a + 4 - 2) % 24 + 2, e = N[a].raw.length);
            0 == N[2 + 6 * ~~((a - 2) / 6)].raw.length && (a = 2 + 6 * ~~((a - 2) / 6), e = 0);
            if (a != g) return T.w(N[a][e])
          }
          if (0 == T.A.selectedIndex || 2 == T.A.selectedIndex) {
            g = 2 > a ? 0 : (a - 2) % 6;
            if (2 == g && 0 < b) return T.g(40);
            if (4 == g && 0 < b && c.nextSibling) return T.g(39) && T.g(38);
            if (4 == g && 0 > b) return T.g(38);
            if (2 == g && 0 > b && c.previousSibling) return T.g(37) && T.g(40)
          }
          return T.g(0 < b ? 39 : 37)
        },
        g: function (b) {
          if (!c) return !1;
          var a = void 0;
          if (38 == b) a = d(c, -2);
          else if (40 == b) a = d(c, 2);
          else if (37 == b) {
            if (a = c.previousSibling, !a && (a = d(c, -2)))
              for (; a && a.nextSibling && !a.nextSibling.style.display;) a = a.nextSibling
          } else 39 == b && (a = c.nextSibling, a && !a.style.display || !(a = d(c, 2)) || (a = a.parentNode.firstChild));
          return a && !a.style.display && a != c ? (T.w(a), !0) : !1
        }
      }
    }(),
    Q = function () {
      function d() {
        for (var a = b.getElementsByClassName("pushed"), c = a.length ? C.P(a[0].className) : 0, e = a.length - 1; 0 <= e; --e) a[e].classList.remove("pushed");
        return c
      }

      function f(b, a) {
        y && (a = a.replace(/,?\d:/g, ""));
        return '<table cellpadding=0 cellspacing=0 class="displaynone tp' + b + '"><tr>' + a.replace(/(\d):/g, "<td class=btn$1>$1:</td>").replace(/#(\d\d)\-([^#,<]+)/g, '<td class="tbtn img$1 clickready">$2</td>').replace(/#[\d#]+/g, '<td style="font-size:0px;">$&</td>').replace(/#([12345]\d|60)/g, function (b, a) {
          return C.tag(c, a, 0, "clickready")
        }).replace(/,/g, "<td width=6></td>") + "</tr></table>"
      }
      var c = y ? 48 : 18,
        e = y ? 32 : 18;
      M("#overlay{z-index:1;position:fixed;top:0px;left:0px;width:100%;height:100%;background-color:#000;opacity:0.75;pointer-events:none;}#overlay{padding:8px;color:#F00;font-weight:bold;}#panel{z-index:2;position:absolute;font-size:" + ~~(c / 2) + "px;background-color:#FFF;padding:2px;border:4px solid #444;color:#888;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;}.tbtn{border:1px solid #CCC;height:" + ~~(4 * c / 3 - 2) + "px;padding:0px " + ~~(c / 6) + "px 0px " + ~~(c / 6) + "px;}.tbtn.pushed{background-color:#000;color:#FFF;}" + "#0#2#4#10#20#30#40#52#54#99".replace(/#(\d+)/g, ".sw$1 .tp$1,") + ".sw2 .tp0,.sw4 .tp0{display:table;}");
      var a = A("div", void 0, {
          id: "overlay"
        }),
        b = A("div", void 0, {
          id: "panel",
          innerHTML: "<div class=furo></div>" + f(0, "1:#11#12#13#14#15#16#17#18#19#51,<td><table cellpadding=0 cellspacing=0><tr>7:#07-&nbsp;&larr;&nbsp;,8:#08-&nbsp;&rarr;&nbsp;,9:#00-遨ｺ逋ｽ,<td><select><option>竊凪�</option><option>竊停�</option><option selected>竊凪�</option></select></td></tr></table></td></tr><tr>2:#21#22#23#24#25#26#27#28#29#52,</tr><tr>3:#31#32#33#34#35#36#37#38#39#53,<td><table cellpadding=0 cellspacing=0><tr>4:#41#42#43#44#45#46#47</tr></table></td>") + f(10, "1:#11,2:#12,3:#13,4:#14,5:#15,6:#16,7:#17,8:#18,9:#19,0:#51") + f(20, "1:#21,2:#22,3:#23,4:#24,5:#25,6:#26,7:#27,8:#28,9:#29,0:#52") + f(30, "1:#31,2:#32,3:#33,4:#34,5:#35,6:#36,7:#37,8:#38,9:#39,0:#53") + f(40, "1:#41,2:#42,3:#43,4:#44,5:#45,6:#46,7:#47") + f(52, "1:#70-繝昴Φ,2:#71-繧ｫ繝ｳ,3:#72-繝√�") + f(54, "1:#71-繧ｫ繝ｳ,2:#73-繝ｪ繝ｼ繝�")
        });
      b.getElementsByClassName("tp0")[0].firstChild.rows[1].insertCell(-1).innerHTML = f(2, "5:#70-繝昴Φ#71-繧ｫ繝ｳ#72-繝√�") + f(4, "5:#71-繧ｫ繝ｳ#73-繝ｪ繝ｼ繝�,0:#60");
      T.A = b.getElementsByTagName("SELECT")[0];
      la(b, function (b) {
        b = b.target;
        if (!b.classList.contains("clickready") && (b = b.parentNode, !b.classList.contains("clickready"))) return;
        Q.v(b)
      }, function (b) {
        "SELECT" != b.target.tagName && b.preventDefault()
      });
      return {
        M: function (c) {
          c.classList.add("editing");
          c.parentNode.insertBefore(a, c);
          c.parentNode.insertBefore(b, c);
          Q.j(0);
          Q.V();
          var e = aa();
          c.offsetTop < e && window.scrollTo(0, c.offsetTop);
          e = b.offsetTop + b.offsetHeight - (window.innerHeight || l.documentElement.clientHeight || l.body.clientHeight);
          aa() < e && window.scrollTo(0, e)
        },
        ha: function (a) {
          if (b.nextSibling) {
            for (;
              "TABLE" != a.tagName; a = a.parentNode);
            if (!a.classList.contains("editing") && a != b.nextSibling) {
              var c = b.nextSibling.offsetTop,
                e = a.offsetTop;
              Q.L();
              window.scrollBy(0, e - c);
              Q.M(a)
            }
          }
        },
        L: function () {
          var c = b.nextSibling;
          c && (a.parentNode.removeChild(a), b.parentNode.removeChild(b), c.classList.remove("editing"), O.ia())
        },
        j: function (a) {
          0 == a && d();
          if (0 == a || 50 == a) a += T.I();
          50 != a && (b.className = "sw" + a, Q.V())
        },
        la: function (b) {
          a.innerHTML = b
        },
        V: function () {
          b.style.left = "0px";
          b.style.top = "0px";
          var a = b.nextSibling,
            c;
          c = a;
          for (var e = 0, f = 0; c; c = c.offsetParent) f += c.offsetTop || 0, e += c.offsetLeft || 0;
          c = [e, f];
          c[0] += ~~((a.offsetWidth - b.offsetWidth) / 2);
          c[0] = Math.min(c[0], l.body.offsetWidth - 1 - b.offsetWidth);
          b.style.left = (0 < c[0] ? c[0] : 0) + "px";
          b.style.top = c[1] + a.offsetHeight + "px"
        },
        H: function (a, c) {
          var d = B.F[a + c];
          if (d) {
            if ("k" == a) {
              var g = B.F["a" + c];
              g && (d = d.concat(g), g = void 0);
              5 == c % 10 && (g = B.F["a5" + ~~(c / 10)]);
              g && (d = d.concat(g))
            }
            for (var g = "", m = 0; m < d.length; ++m) m && (g += 4 < d.length && 3 == m ? "</tr><tr>" : "<td width=20></td>"), g += m + 1 + ':<td class="img' + d[m] + ' clickready">' + C.X(e, d[m]) + "</td>";
            b.getElementsByClassName("furo")[0].innerHTML = f(99, g);
            Q.j(99)
          }
        },
        g: function (a) {
          if (!b.parentNode) return !1;
          if (8 == a || 144 == a) return !0;
          96 <= a && 105 >= a && (a = a - 96 + 48);
          var c = b.className.substr(2);
          if (1 == c.length) switch (a) {
          case 49:
          case 50:
          case 51:
          case 52:
          case 53:
            return Q.j(10 * (a - 48)), !0;
          case 55:
            return T.K(-1);
          case 56:
            return T.K(1);
          case 57:
            return T.B(0);
          case 48:
            if (4 == c) return Q.v(b.getElementsByClassName("img60")[0])
          } else if (48 <= a && 58 > a && ((c = b.getElementsByClassName("tp" + c)[0]) && (c = c.getElementsByClassName("btn" + (a - 48))[0]), c)) {
            c = c.nextSibling;
            if (C.T(c)) return Q.v(c);
            c = c.firstChild;
            if (C.T(c)) return Q.v(c)
          }
          console.log("key=" + a);
          Q.j(0);
          return !1
        },
        v: function (a) {
          if (y) {
            var c = a.getBoundingClientRect(),
              e = b.getBoundingClientRect(),
              f = A("div", b, {}, {
                zIndex: 3,
                position: "absolute",
                backgroundColor: "#000",
                opacity: .5,
                pointerEvents: "none",
                left: c.left - e.left - 4,
                top: c.top - e.top - 4,
                width: c.width,
                height: c.height
              });
            setTimeout(function () {
              f.parentNode.removeChild(f)
            }, 500)
          }
          var c = d(),
            g = C.P(a.className);
          7 === g || 8 === g || 0 === g ? (x(), Q.g(48 + (g ? g : 9)), ea.set(function () {
            Q.g(48 + g % 10)
          })) : 70 === g || 71 === g || 72 === g || 73 === g || 74 === g ? (Q.j(0), g != c && v(b.getElementsByClassName("img" + g), "pushed")) : 70 == c ? Q.H("p", g) : 71 == c ? Q.H("sw2" == b.className ? "m" : "k", g) : 72 == c ? Q.H("c", g) : 73 == c ? T.B("r" + g) : 74 == c ? T.B("f" + g) : T.B(g)
        }
      }
    }(),
    P = function () {
      function d(c, a) {
        return "<span class=" + (0 > c ? "numm" : 0 < c ? "nump" : "numz") + ">" + (0 > c ? "" : "+") + c + "</span>" + (a ? "<span class=sub>/" + a + "</span>" : "")
      }

      function f(c) {
        return 1 === c ? 0 : 2 === c ? 1 : 4 === c ? 2 : 8 === c ? 3 : -1
      }
      M(".sub{font-size:50%;}.nump{color:#00F;font-weight:bold;}.numz{color:#000;font-weight:bold;}.numm{color:#F00;font-weight:bold;}");
      var c = -1;
      return function () {
        var e = q("kyoku").selectedIndex % 4;
        if (e != c) {
          c = e;
          w(u("oya0"), "oya0");
          w(u("oya1"), "oya1");
          for (var a = ga[F ? 0 : 1][e], e = u("kaze"), b = 0; 4 > b; ++b) {
            var g = e[b];
            g.innerHTML = fa(a[b]) + "螳ｶ";
            g = g.parentNode;
            g.classList.add("oya" + (a[b] ? 0 : 1));
            g = g.nextSibling;
            g.classList.add("oya" + (a[b] ? 0 : 1))
          }
        }
        for (var m = u("restype"), b = 0; 4 > b; ++b) g = m[b], a = g.parentNode.parentNode.parentNode.parentNode.classList, a.remove("sel1"), a.remove("sel2"), 1 == g.selectedIndex && a.add("sel1"), 2 == g.selectedIndex && a.add("sel2");
        for (var e = m[0].options, m = [m[0].value, m[1].value, m[2].value, m[3].value], b = {}, h = 0; h < e.length; ++h) {
          var a = e[h].value,
            k = 0;
          m[0] == a && (k |= 1);
          m[1] == a && (k |= 2);
          m[2] == a && (k |= 4);
          m[3] == a && (k |= 8);
          k && (b[a] = k)
        }
        var e = q("kyoku").selectedIndex % 4,
          n = ["荳肴�"],
          g = [0, 0, 0, 0],
          I = [0, 0,
            0, 0
          ];
        debugger;
        if (-1 != f(b["繝�Δ"]) && 15 == (b[""] ^ b["繝�Δ"])) {
          if (b = f(b["繝�Δ"]), a = u("tsumo" + (b == e ? 1 : 0))[b].value) {
            n = ["蜥御ｺ�", [0, 0, 0, 0],
              [b, b, b, a]
            ];
            a = a.match(/(\d+00)(\-\d+00|)轤ｹ/);
            n[1][0] = n[1][1] = n[1][2] = n[1][3] = -(a[1] >> 0);
            b != e && (n[1][e] = a[2] >> 0);
            n[1][b] = -(n[1][(b + 1) % 4] + n[1][(b + 2) % 4] + n[1][(b + 3) % 4]);
            var t = u("tsumoc")[b];
            t.selectedIndex && (n[2][3] += t.value, t = t.selectedIndex, n[1].push(0, 0, 0, 0), n[1][(b + 0) % 4 + 4] = 3 * t, n[1][(b + 1) % 4 + 4] = -t, n[1][(b + 2) % 4 + 4] = -t, n[1][(b + 3) % 4 + 4] = -t)
          }
        } else if (-1 != f(b["謾ｾ驫�"]) && b["繝ｭ繝ｳ"] && 15 == (b[""] ^ b["繝ｭ繝ｳ"] ^ b["謾ｾ驫�"]))
          for (var r = f(b["謾ｾ驫�"]), k = b["繝ｭ繝ｳ"], K = 1; 4 > K; ++K)(b = (r + K) % 4, ~k & 1 << b || !(a = u("ron" + (b == e ? 1 : 0))[b].value)) || (n[0] = "蜥御ｺ�", h = [0, 0, 0, 0], h[b] = a.match(/(\d+00)轤ｹ/)[1] >> 0, h[r] = -h[b], t = u("ronc")[b], t.selectedIndex && (a += t.value, t = t.selectedIndex, h.push(0, 0, 0, 0), h[b + 4] = t, h[r + 4] = -t), n.push(h, [b, r, b, a]));
        else if (15 == b["閨ｴ迚�"]) n[0] = "蜈ｨ蜩｡閨ｴ迚�";
        else if (15 == b["荳崎�"]) n[0] = "蜈ｨ蜩｡荳崎�";
        else if (15 == (b["閨ｴ迚�"] ^ b["荳崎�"])) k = b["閨ｴ迚�"], n = 0, k & 1 && ++n, k & 2 && ++n, k & 4 && ++n, k & 8 && ++n, b = n, n = +(1 == b ? 3E3 : 2 == b ? 1500 : 3 == b ? 1E3 : 0), b = -(1 == b ? 1E3 : 2 == b ? 1500 : 3 == b ? 3E3 : 0), n = ["豬∝ｱ", [k & 1 ? n : b, k & 2 ? n : b, k & 4 ? n : b, k & 8 ? n : b]];
        else if (b["豬√＠貅雋ｫ"] && 15 == (b[""] ^ b["豬√＠貅雋ｫ"]))
          for (n = ["豬√＠貅雋ｫ", [0, 0, 0, 0]], k = b["豬√＠貅雋ｫ"], b = 0; 4 > b; ++b) ~k & 1 << b || (a = b == e ? 4E3 : 2E3, h = [-a, -a, -a, -a], b != e && (h[e] = 2 * -a), h[b] = -(h[(b + 1) % 4] + h[(b + 2) % 4] + h[(b + 3) % 4]), n[1][0] += h[0], n[1][1] += h[1], n[1][2] += h[2], n[1][3] += h[3]);
        else -1 != f(b["荵晉ｨｮ荵晉煙"]) && 15 == (b[""] ^ b["荵晉ｨｮ荵晉煙"]) ? n[0] = "荵晉ｨｮ荵晉煙" : -1 != f(b["荳牙ｮｶ蜥御ｺ�"]) && 15 == (b[""] ^ b["荳牙ｮｶ蜥御ｺ�"]) ? n[0] = "荳牙ｮｶ蜥御ｺ�" : -1 != f(b["蝗幃｢ｨ騾｣謇�"]) && 15 == (b[""] ^ b["蝗幃｢ｨ騾｣謇�"]) ? n[0] = "蝗幃｢ｨ騾｣謇�" : -1 != f(b["蝗帛ｮｶ遶狗峩"]) && 15 == (b[""] ^ b["蝗帛ｮｶ遶狗峩"]) ? n[0] = "蝗帛ｮｶ遶狗峩" : -1 != f(b["蝗帶ｧ捺淵莠�"]) && 15 == (b[""] ^ b["蝗帶ｧ捺淵莠�"]) && (n[0] = "蝗帶ｧ捺淵莠�");
        "蜥御ｺ�" == n[0] && (b = n[2][0], I[b] = 1E3 * q("kyoutaku").selectedIndex + (N.h[0] ? 1E3 : 0) + (N.h[1] ? 1E3 : 0) + (N.h[2] ? 1E3 : 0) + (N.h[3] ? 1E3 : 0), k = q("honba").selectedIndex, g[b] = 300 * k, r = n[2][1], b != r ? g[r] = 300 * -k : (g[(b + 1) % 4] = 100 * -k, g[(b + 2) % 4] = 100 * -k, g[(b + 3) % 4] = 100 * -k));
        if ("蜥御ｺ�" == n[0])
          for (h = 2; h < n.length; h += 2) {
            b = n[h][0];
            b = u("agari")[b];
            k = b.getElementsByClassName("yaku");
            e = b.getElementsByClassName("dora");
            for (b = 0; b < k.length; ++b) k[b].value && n[h].push(k[b].value);
            for (b = 0; b < e.length; ++b) e[b].value && n[h].push(e[b].value)
          }
        e = u("result");
        for (b = 0; 4 > b; ++b) t = h = 0, 1 < n.length && (h += n[1][b], t += 8 == n[1].length ? n[1][b + 4] : 0), 3 < n.length && (h += n[3][b], t += 8 == n[3].length ? n[3][b + 4] : 0), 5 < n.length && (h += n[5][b], t += 8 == n[5].length ? n[5][b + 4] : 0), 1 < n.length && (n[1][b] += g[b] + I[b]), k = [d(h, m[b] ? m[b] : 0 > h ? "謾ｯ謇�" : "縺ｪ縺�"), d(g[b], "遨肴｣�"), d(I[b], "萓幄ｨ�"), d(N.h[b] ? -1E3 : 0, "遶狗峩")],
          t && k.push("|", d(t, "譫�")), e[b].innerHTML = k.join("&nbsp;&nbsp;"), a = q("ten" + b).value, k = u("ten" + b), k[0].innerHTML = k[2].innerHTML = k[4].innerHTML = k[6].innerHTML = a, a = 100 * a + h + g[b] + I[b], N.h[b] && (a -= 1E3), k[1].innerHTML = k[3].innerHTML = k[5].innerHTML = k[7].innerHTML = a / 100;
        N.result = n;
        console.log("CompileResult", JSON.stringify(n))
      }
    }();

  function U(d, f) {
    if (l.activeElement === d) return !1;
    var c, e = d.options,
      a;
    if ("number" == typeof f) a = f;
    else {
      for (a = 0; a < e.length && e[a].value != f; ++a);
      if (a == e.length) return console.log("selOPT failed", d, f), !1
    }
    c = !0 !== e[a].selected;
    e[a].selected = !0;
    return c
  }
  var W = function () {
    function d(d, c) {
      if (l.activeElement === d || d.value == c) return !1;
      d.value = c;
      return !1
    }
    return function (f, c, e) {
      if (!f) return window.confirm("INVALID EMPTY JSON");
      try {
        f = JSON.parse(f)
      } catch (I) {
        return alert(I)
      }
      V && V();
      var a = f.title;
      a && (d(q("title0"), a[0]), d(q("title1"), a[1]));
      if ((a = f.name) && 4 == a.length) {
        if (H.log) {
          var b = H.tw || -1,
            g;
          (g = a[0]) && "笂�" != g[0] && "笂�" != g[0] && (a[0] = 0 == b ? "遘�" : "A縺輔ｓ");
          (g = a[1]) && "笂�" != g[0] && "笂�" != g[0] && (a[1] = 1 == b ? "遘�" : "B縺輔ｓ");
          (g = a[2]) && "笂�" != g[0] && "笂�" != g[0] && (a[2] = 2 == b ? "遘�" : "C縺輔ｓ");
          (g = a[3]) && "笂�" != g[0] && "笂�" != g[0] && (a[3] = 3 == b ? "遘�" : "D縺輔ｓ")
        }
        d(q("un0"), a[0]);
        d(q("un1"), a[1]);
        d(q("un2"), a[2]);
        d(q("un3"), a[3])
      }
      a = !1;
      if (b = f.rule) {
        b.disp && d(q("disp"), b.disp);
        g = ~~b.aka51;
        var m = ~~b.aka52,
          h = ~~b.aka53;
        void 0 !== b.aka && (g = m = h = ~~b.aka);
        g = q("aka51").options[g];
        m = q("aka52").options[m];
        h = q("aka53").options[h];
        g.selected || (a = !0, g.selected = !0);
        m.selected || (a = !0, m.selected = !0);
        h.selected || (a = !0, h.selected = !0)
      }
      B.o(q("aka51").selectedIndex, q("aka52").selectedIndex, q("aka53").selectedIndex);
      if ((f = f.log) && f[c || 0]) {
        f = f[c || 0];
        var m = q("kyoku").options[f[0][0]],
          h = q("honba").options[f[0][1]],
          k = q("kyoutaku").options[f[0][2]],
          b = !m.selected || !h.selected || !k.selected;
        g = !1;
        for (c = 0; 4 > c; ++c) g |= d(q("ten" + c), f[1][c] / 100);
        m.selected || (a = !0);
        m.selected = !0;
        h.selected = !0;
        k.selected = !0;
        if (17 == f.length) {
          if (!e || f[2].length) a |= N[0].s(f[2]);
          if (!e || f[3].length) a |= N[1].s(f[3]);
          for (c = 0; 4 > c; ++c) {
            m = !1;
            if (!e || f[3 * c + 4].length) m |= N[6 * c + 2].s(f[3 * c + 4]);
            if (!e || f[3 * c + 5].length) m |= N[6 * c + 4].s(f[3 * c + 5]);
            if (!e || f[3 * c + 6].length) m |= N[6 * c + 6].s(f[3 * c + 6]);
            m && (O.O(c), N.S(c));
            a |= m
          }
          a && O.C();
          a = b | g;
          e = f[16];
          f = f[0][0] % 4;
          b = u("restype");
          switch (e[0]) {
          case "蜥御ｺ�":
            for (g = 2; g < e.length; g += 2) {
              m = e[g];
              c = m[0];
              h = m[1];
              a |= U(b[c], c == h ? "繝�Δ" : "繝ｭ繝ｳ");
              c != h && (a |= U(b[h], "謾ｾ驫�"));
              h = c == h ? "tsumo" : "ron";
              m[3].match(/\d+譫壺�?$/) ? (k = RegExp.lastMatch, a |= U(u(h + (c == f ? 1 : 0))[c], RegExp.leftContext), a |= U(u(h + "c")[c], k)) : (a |= U(u(h + (c == f ? 1 : 0))[c], m[3]), a |= U(u(h + "c")[c], ""));
              c = u("agari")[c];
              for (var h = c.getElementsByClassName("yaku"), k = 0, n = []; k < h.length; ++k) n.push(h[k]);
              h = n;
              c = c.getElementsByClassName("dora");
              for (k = 4; k < m.length; ++k) a = "繝峨Λ" == m[k].substr(0, 2) ? a | U(c[0], m[k]) : "襍､繝峨Λ" == m[k].substr(0, 3) ? a | U(c[1], m[k]) : "陬上ラ繝ｩ" == m[k].substr(0, 3) ? a | U(c[2], m[k]) : a | U(h.shift(), m[k]);
              for (; h.length;) h.pop().options[0].selected = !0
            }
            break;
          case "豬∝ｱ":
            console.log(e);
            a |= U(b[0], 0 < e[1][0] ? "閨ｴ迚�" : "荳崎�");
            a |= U(b[1], 0 < e[1][1] ? "閨ｴ迚�" : "荳崎�");
            a |= U(b[2], 0 < e[1][2] ? "閨ｴ迚�" : "荳崎�");
            a |= U(b[3], 0 < e[1][3] ? "閨ｴ迚�" : "荳崎�");
            break;
          case "蜈ｨ蜩｡閨ｴ迚�":
            a |= U(b[0], "閨ｴ迚�");
            a |= U(b[1], "閨ｴ迚�");
            a |= U(b[2], "閨ｴ迚�");
            a |= U(b[3], "閨ｴ迚�");
            break;
          case "蜈ｨ蜩｡荳崎�":
            a |= U(b[0], "荳崎�");
            a |= U(b[1], "荳崎�");
            a |= U(b[2], "荳崎�");
            a |= U(b[3], "荳崎�");
            break;
          case "豬√＠貅雋ｫ":
            0 < e[1][0] && (a |= U(b[0], "豬√＠貅雋ｫ"));
            0 < e[1][1] && (a |= U(b[1], "豬√＠貅雋ｫ"));
            0 < e[1][2] && (a |= U(b[2], "豬√＠貅雋ｫ"));
            0 < e[1][3] && (a |= U(b[3], "豬√＠貅雋ｫ"));
            break;
          case "荵晉ｨｮ荵晉煙":
          case "荳牙ｮｶ蜥御ｺ�":
          case "蝗幃｢ｨ騾｣謇�":
          case "蝗帛ｮｶ遶狗峩":
          case "蝗帶ｧ捺淵莠�":
            a |= U(b[N.U], e[0]);
            break;
          case "raw":
            for (g = 0; 80 > g; ++g) c = Math.floor(g / 20), k = e[1 + c][g % 20] || 0, a |= U(q("sel" + (g + 6)), k)
          }
          a && L.call("CompileResult", P)
        }
      }
    }
  }();

  function Y(d) {
    var f = {
        title: [q("title0").value, q("title1").value],
        name: [q("un0").value, q("un1").value, q("un2").value, q("un3").value],
        rule: {
          disp: q("disp").value,
          aka51: q("aka51").selectedIndex,
          aka52: q("aka52").selectedIndex,
          aka53: q("aka53").selectedIndex
        },
        log: [
          [
            [q("kyoku").selectedIndex, q("honba").selectedIndex, q("kyoutaku").selectedIndex],
            [100 * q("ten0").value, 100 * q("ten1").value, 100 * q("ten2").value, 100 * q("ten3").value], 0, 1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, N.result
          ]
        ]
      },
      c = f.rule;
    c.disp || delete c.disp;
    c.aka51 === c.aka52 && c.aka52 === c.aka53 && (c.aka = c.aka51, delete c.aka51, delete c.aka52, delete c.aka53);
    for (c = 2; 16 > c; ++c) f.log[0][c] = N[f.log[0][c]].raw;
    f = JSON.stringify(f);
    d && (f = S.encode(f));
    return f
  }
  var S = function () {
      var d = [],
        f = [],
        c = !1;
      return {
        D: function () {
          q("autosave").checked && window.location.replace("#json=" + Y(!0) + "&ts=0")
        },
        u: function (c, a, b) {
          var e = "/6/mjlog_storage.cgi";
          c && (e += "?" + c);
          c.match(/^load=(\d{8,10}gm\-[0-9a-f]{4}\-\d{4,5}\-x?[0-9a-f]{8,16})$/) && (e = "/5/mjlog2json.cgi?" + RegExp.$1);
          var d = new XMLHttpRequest;
          d.onreadystatechange = function () {
            4 == d.readyState && 200 == d.status && b && b(d.responseText)
          };
          d.open(void 0 === a ? "GET" : "POST", e, !0);
          d.send(a)
        },
        N: function () {
          setTimeout(function () {
            var e = JSON.stringify(d);
            d.splice(0, d.length);
            c = !0;
            S.u("", "file=" + H.sync + "&json=" + encodeURIComponent(e), function (a) {
              W(a, 0, !1);
              S.N();
              c = !1;
              L.call("storage.execPacket", S.R)
            })
          }, 3E3)
        },
        encode: function (c) {
          return encodeURIComponent(c).replace(/%2C/gi, ",")
        },
        R: function () {
          if (!c)
            for (; f.length;) {
              var e = f.shift(),
                a = ma[e.path],
                b = e.val;
              if (a) {
                var d = q(a);
                if ("ten0" == a || "ten1" == a || "ten2" == a || "ten3" == a) b /= 100;
                "INPUT" == d.tagName ? d.value != b && (d.value = b, d.onchange.apply(d)) : "SELECT" == d.tagName && d.selectedIndex != b && (d.options[b].selected = !0, d.onchange.apply(d))
              }
              a = e.path.split("/");
              if ("log" == a[1] && 0 == a[2] && 2 <= a[3] && 16 > a[3]) {
                var e = ~~a[3],
                  a = ~~a[4],
                  m = b,
                  b = !1;
                4 > e ? b |= N[e - 2].set(a, m) : (d = Math.floor((e - 4) / 3), (e = 0 | N[2 + 6 * d + (e - 4) % 3 * 2].set(a, m)) && O.O(d), b |= e);
                b && O.C()
              }
            }
        },
        b: function (c) {
          H.sync && d.push(c);
          f.push(c);
          L.call("storage.execPacket", S.R);
          H.sync || L.call("storage.autoSave", S.D)
        }
      }
    }(),
    Z = {
      title0: "/title/0",
      title1: "/title/1",
      disp: "/rule/disp",
      aka51: "/rule/aka51",
      aka52: "/rule/aka52",
      aka53: "/rule/aka53",
      un0: "/name/0",
      un1: "/name/1",
      un2: "/name/2",
      un3: "/name/3",
      kyoku: "/log/0/0/0",
      honba: "/log/0/0/1",
      kyoutaku: "/log/0/0/2",
      ten0: "/log/0/1/0",
      ten1: "/log/0/1/1",
      ten2: "/log/0/1/2",
      ten3: "/log/0/1/3"
    },
    ma, na = {},
    oa;
  for (oa in Z) na[Z[oa]] = oa;
  ma = na;
  var V;
  M("#main{display:table;margin:0px auto 0px auto;}.caption{background-color:#000;color:#FFF;margin-top:20px;min-width:600px;}.section{background-color:#FFF;border:1px solid #000;padding:4px;}.section.collapse{display:none;}.caption,.section{box-shadow:4px 4px 8px rgba(0,0,0,0.4);}.footnote{font-size:50%;color:#666;}.cells{font-size:0px;}.cellc{text-align:center;padding:0px 4px;font-weight:bold;color:#444;}.un{background-color:#000;color:#FFF;}.caption .toggle{padding:0px 12px;margin:2px 8px;}.cellc .toggle{height:100%;padding:0px 2px;margin:0px;}.editing .toggle{display:none;}.notoggle{display:none;}.editing .notoggle{display:inline;}");
  M(".tsumo0,.ron0,.tsumo1,.ron1,.tsumoc,.ronc,.detail,.agari{display:none;}.oya0 .sel1 .tsumo0,.oya1 .sel1 .tsumo1,.oya0 .sel2 .ron0,.oya1 .sel2 .ron1,.sel1 .tsumoc,.sel2 .ronc,.sel1 .detail,.sel2 .detail{display:inline;}.showdetail .detail{background:#000;color:#FFF;}.sel1.showdetail .agari,.sel2.showdetail .agari{display:table-row;}");
  M(".sync1 .ifsync0{display:none;}.sync0 .ifsync1{display:none;}");
  V = function () {
    function d() {
      "kyoku" == this.id ? (O.C(), L.call("CompileResult", P)) : "aka51" == this.id || "aka52" == this.id || "aka53" == this.id ? (B.o(q("aka51").selectedIndex, q("aka52").selectedIndex, q("aka53").selectedIndex), O.C()) : L.call("CompileResult", P);
      S.b({
        path: Z[this.id],
        val: this.selectedIndex
      })
    }

    function f() {
      S.b({
        path: Z[this.id],
        val: this.value
      })
    }

    function c(a, c, e) {
      for (var b = "", d = 0; d < c; ++d) b += "<option>" + e(d) + "</option>";
      return "<select id=" + a + ">" + b + "</select>"
    }
    V = void 0;
    var e;
    e = '<div class="caption f100"><button class=toggle>+</button>LOAD/SAVE</div><div class="section collapse f075"><center><table cellpadding=0 cellspacing=0 class=w100><tr class=ifsync0><td><button class=w100 id=editastext>EDIT AS TEXT</button></td></tr><tr class=ifsync0><td><button class=w100 id=loadfromurl>LOAD FROM URL</button></td></tr><tr><td><button class=w100 id=saveasviewer>SAVE AS VIEWER URL</button></td></tr><tr class=ifsync0><td><button class=w100 id=opennextblank>OPEN NEXT BLANK</button></td></tr><tr class=ifsync1><td><button class=w100 id=clearfornext>CLEAR FOR NEXT</button></td></tr></table><div class=footnote>Max URL Length(IE=2083, Apache=8177, HTML=1024-65536, BLOG=256-65536)</div><div class=ifsync0><br><input type=checkbox checked id=autosave style="width:27px;height:27px;vertical-align:middle;"/>閾ｪ蜍穂ｿ晏ｭ�<br><div class=footnote>窶ｻ邱ｨ髮�☆繧九→URL HASH縺梧峩譁ｰ縺輔ｌ縺ｾ縺�</div><br></div></center></div><div class="caption f100"><button class=toggle>+</button>繝ｫ繝ｼ繝ｫ</div>' + ('<div class="section collapse rule" style="vertical-align:middle;">陦ｨ險伜錐 = <input id=disp /><br>襍､莠碑成 = ' + c("aka51", 5, function (a) {
      return a + "譫�"
    }) + "<br>襍､莠皮ｭ� = " + c("aka52", 5, function (a) {
      return a + "譫�"
    }) + "<br>襍､莠皮ｴ｢ = " + c("aka53", 5, function (a) {
      return a + "譫�"
    }) + "<br>蟇ｾ謌ｦ莠ｺ謨ｰ = 4莠ｺ<br>逾晏о = 荳肴�<br>萓幄ｨ� = 荳雁ｮｶ蜿悶ｊ<br>遨肴｣� = 蛹�ｲｬ閠��荳雁ｮｶ蜿悶ｊ<br>騾｣闕� = 荳榊ｮ�<br></div>");
    e = e + '<div class="caption f100"><button class=toggle>-</button>蟇ｾ謌ｦ諠��ｱ</div>' + ('<div class=section><div class="forescapeios6inputbug f100"><input id=title0 class="w100 f100"/><br><input id=title1 class="w100 f100"/><br>' + c("kyoku", 16, function (a) {
      return fa(~~(a / 4)) + (a % 4 + 1) + "螻"
    }) + c("honba", 15, function (a) {
      return a + "譛ｬ蝣ｴ"
    }) + c("kyoutaku", 15, function (a) {
      return "萓幄ｨ�" + 1E3 * a + "轤ｹ"
    }) + "</div></div>");
    var a;
    a = '<div class="caption f100"><button class=toggle>-</button><span class=kaze></span> <input id=un$ class=un /></div>' + ('<div class=section><table cellpadding=0 cellspacing=0 class=w100><tr><td class=cellc>驟�<br>迚�</td><td class=cells></td></tr><tr><td></td><td class=cells></td></tr><tr><td class=cellc>蜿�</td><td class=cells></td></tr><tr><td></td><td class=cells></td></tr><tr><td class=cellc>蜃ｺ</td><td class=cells></td></tr><tr><td class=cellc><button class=toggle>+<br>譛<br>邨�</button><span class=notoggle>譛<br>邨�</span></td><td class=cells></td></tr></table><table cellpadding=0 cellspacing=0 style="width:100%;margin-top:10px;"><tr><td class=ten style="border:1px solid #CCC;"></td><td class=sel0 style="width:100%;padding:0px 4px;"><select class=restype><option></option><option>繝�Δ</option><option>繝ｭ繝ｳ</option><option>謾ｾ驫�</option><option>閨ｴ迚�</option><option>荳崎�</option><option>豬√＠貅雋ｫ</option><option>荵晉ｨｮ荵晉煙</option><option>荳牙ｮｶ蜥御ｺ�</option><option>蝗幃｢ｨ騾｣謇�</option><option>蝗帛ｮｶ遶狗峩</option><option>蝗帶ｧ捺淵莠�</option></select><select class=tsumo0>' + D.ba() + "</select><select class=tsumo1>" + D.ca() + "</select><select class=tsumoc>" + D.da + "</select><select class=ron0>" + D.Z() + "</select><select class=ron1>" + D.$() + "</select><select class=ronc>" + D.aa + '</select><button class=detail>隧ｳ邏ｰ</button><br><span class=result></span></td><td class=ten style="border:1px solid #CCC;"></td></tr><tr class=agari><td colspan=3><table cellpadding=0 cellspacing=0><tr><td><select class=yaku>' + D.i() + "</select></td><td><select class=yaku>" + D.i() + "</select></td><td><select class=yaku>" + D.i() + "</select></td></tr><tr><td><select class=yaku>" + D.i() + "</select></td><td><select class=yaku>" + D.i() + "</select></td><td><select class=yaku>" + D.i() + "</select></td></tr><tr><td><select class=yaku>" + D.i() + "</select></td><td><select class=yaku>" + D.i() + "</select></td><td><select class=yaku>" + D.i() + "</select></td></tr><tr><td colspan=3><select class=yaku>" + D.i() + "</select><select class=dora>" + D.ea + "</select><select class=dora>" + D.fa + "</select><select class=dora>" + D.ga + "</select></td></tr></table></td></tr></table></div>");
    e = e + '<div class="caption f100"><button class=toggle>-</button>繝峨Λ</div><div class=section><table cellpadding=0 cellspacing=0><tr><td><table cellpadding=0 cellspacing=0><tr><td class=cellc>陦ｨ繝峨Λ<br>陦ｨ遉ｺ</td><td class=cells></td></tr></table></td><td width=20></td><td><table cellpadding=0 cellspacing=0><tr><td class=cellc>陬上ラ繝ｩ<br>陦ｨ遉ｺ</td><td class=cells></td></tr></table></td></tr></table></div>' + a.replace(/\$/g, "0");
    e += a.replace(/\$/g, "1");
    e += a.replace(/\$/g, "2");
    e += a.replace(/\$/g, "3");
    q("main").innerHTML = e;
    l.body.classList.add("sync" + (H.sync ? 1 : 0));
    H.sync && (l.title = "螟ｩ魑ｳ謗｡隴�" + H.sync);
    F && (u("caption")[6].style.display = u("section")[6].style.display = "none");
    q("aka51").options[1].selected = !0;
    q("aka52").options[1].selected = !0;
    q("aka53").options[1].selected = !0;
    e = u("cells");
    N.o(e);
    // debugger;
    O.o(e);
    e = u("ten");
    for (a = 0; 4 > a; ++a) e[2 * a + 0].innerHTML = '<table style="text-align:center;"><tr><td class=ten' + (a + 3) % 4 + " rowspan=2>250</td><td class=ten" + (a + 2) % 4 + ">250</td><td class=ten" + (a + 1) % 4 + " rowspan=2>250</td></tr><tr><td><input type=text id=ten" + (a + 0) % 4 + " class=ten" + (a + 0) % 4 + ' value=250 size=4 style="width:' + 36 * 1.3 + 'px;text-align:center;"/></td></tr></table>', e[2 * a + 1].innerHTML = '<table style="text-align:right;"><tr><td class=ten' + (a + 3) % 4 + " rowspan=2>250</td><td class=ten" + (a + 2) % 4 + ">250</td><td class=ten" + (a + 1) % 4 + " rowspan=2>250</td></tr><tr><td class=ten" + (a + 0) % 4 + ">250</td></tr></table>";
    e = l.getElementsByTagName("INPUT");
    for (a = 0; a < e.length; ++a) "autosave" != e[a].id && (e[a].classList.add("clickready"), e[a].onchange = f);
    q("ten0").onchange = q("ten1").onchange = q("ten2").onchange = q("ten3").onchange = function () {
      L.call("CompileResult", P);
      S.b({
        path: Z[this.id],
        val: 100 * this.value
      })
    };
    q("autosave").onchange = function () {
      L.call("storage.autoSave", S.D)
    };
    e = l.getElementsByTagName("SELECT");
    for (a = 0; a < e.length; ++a) e[a].classList.add("clickready"), e[a].onchange = d, e[a].id || (e[a].id = "sel" + a, Z[e[a].id] = "/log/0/16/" + Math.floor((a - 6) / 20 + 1) + "/" + (a - 6) % 20);
    e = u("detail");
    e[0].onclick = e[1].onclick = e[2].onclick = e[3].onclick = function () {
      x();
      this.parentNode.parentNode.parentNode.parentNode.classList.toggle("showdetail")
    };
    q("editastext").onclick = function () {
      x();
      var a = window.prompt(this.innerText, Y());
      null !== a && W(a, 0, !1);
      L.call("storage.autoSave", S.D)
    };
    q("loadfromurl").onclick = function () {
      x();
      var a = window.prompt(this.innerText + "\n遨ｺ縺ｮ驟咲煙/蜿也煙/謇鍋煙縺ｯ迴ｾ蝨ｨ縺ｮ蜀�ｮｹ繧剃ｿ晄戟縺励∪縺�", "");
      if (null === a || null === a.match(/[#\?]json=([^"&]+)/)) return !1;
      a = RegExp.$1;
      a = decodeURIComponent(a);
      W(a, 0, !0);
      L.call("storage.autoSave", S.D)
    };
    q("saveasviewer").onclick = function () {
      x();
      window.open("//tenhou.net/5/#json=" + Y(!0), "_blank")
    };
    q("opennextblank").onclick = function () {
      x();
      var a = Y(),
        a = JSON.parse(a);
      a.log = [
        [
          [q("kyoku").selectedIndex, q("honba").selectedIndex, q("kyoutaku").selectedIndex],
          [100 * ~~u("ten0")[1].innerText, 100 * ~~u("ten1")[1].innerText, 100 * ~~u("ten2")[1].innerText, 100 * ~~u("ten3")[1].innerText]
        ]
      ];
      a.log[0][0][2] += ~~((~~q("ten0").value + ~~q("ten1").value + ~~q("ten2").value + ~~q("ten3").value - (~~u("ten0")[1].innerText + ~~u("ten1")[1].innerText + ~~u("ten2")[1].innerText + ~~u("ten3")[1].innerText)) / 10);
      a = JSON.stringify(a);
      console.log(a);
      window.open("#json=" + S.encode(a), "_blank")
    };
    q("clearfornext").onclick = function () {
      if (window.confirm("谺｡螻蜈･蜉帷畑縺ｫ繝ｫ繝ｼ繝ｫ/繧ｿ繧､繝医Ν莉･螟悶�諠��ｱ繧偵け繝ｪ繧｢縺励∪縺吶�\n窶ｻ迴ｾ蝨ｨ縺ｮ迚瑚ｭ懊�縲郡AVE AS VIEWER URL縲阪〒菫晏ｭ倥＠縺ｦ縺上□縺輔＞")) {
        var a = {
          title: [q("title0").value, q("title1").value],
          name: [q("un0").value, q("un1").value, q("un2").value, q("un3").value],
          rule: {
            disp: q("disp").value,
            aka51: q("aka51").selectedIndex,
            aka52: q("aka52").selectedIndex,
            aka53: q("aka53").selectedIndex
          },
          log: [
            [
              [q("kyoku").selectedIndex, q("honba").selectedIndex, q("kyoutaku").selectedIndex],
              [100 * ~~u("ten0")[1].innerText, 100 * ~~u("ten1")[1].innerText, 100 * ~~u("ten2")[1].innerText, 100 * ~~u("ten3")[1].innerText]
            ]
          ]
        };
        S.u("", "file=" + H.sync + "&json=");
        var c = [
          [q("kyoku").selectedIndex,
            q("honba").selectedIndex, q("kyoutaku").selectedIndex
          ],
          [100 * ~~u("ten0")[1].innerText, 100 * ~~u("ten1")[1].innerText, 100 * ~~u("ten2")[1].innerText, 100 * ~~u("ten3")[1].innerText]
        ];
        a.log[0][2] += ~~((~~q("ten0").value + ~~q("ten1").value + ~~q("ten2").value + ~~q("ten3").value - (~~u("ten0")[1].innerText + ~~u("ten1")[1].innerText + ~~u("ten2")[1].innerText + ~~u("ten3")[1].innerText)) / 10);
        S.b({
          path: "/title",
          val: a.title
        });
        S.b({
          path: "/name",
          val: a.name
        });
        S.b({
          path: Z.disp,
          val: a.rule.disp
        });
        S.b({
          path: Z.aka51,
          val: a.rule.aka51
        });
        S.b({
          path: Z.aka52,
          val: a.rule.aka52
        });
        S.b({
          path: Z.aka53,
          val: a.rule.aka53
        });
        S.b({
          path: "/log/0/0",
          val: c[0]
        });
        S.b({
          path: "/log/0/1",
          val: c[1]
        })
      }
    };
    H.log && H.log.match(/^\d{8,10}gm\-([0-9a-f]{4})\-\d{4,5}\-x?[0-9a-f]{8,16}$/) && parseInt(RegExp.$1, 16) & 16 && (F = !0)
  };
  if (!y) {
    var pa = A("DIV", l.body, {}, {
      zIndex: 3,
      position: "absolute",
      visibility: "hidden",
      outline: "2px solid #F93",
      pointerEvents: "none"
    });
    l.body.onmouseover = function (d) {
      d = d.target;
      if (d.classList.contains("disabled")) return !1;
      if (!d.classList.contains("clickready") && (d = d.parentNode, !d || !d.classList.contains("clickready"))) return;
      d = d.getBoundingClientRect();
      var f = pa.style;
      f.visibility = "";
      f.left = (l.body.scrollLeft || l.documentElement.scrollLeft) + d.left + "px";
      f.top = aa() + d.top + "px";
      f.width = d.width + "px";
      f.height = d.height + "px"
    };
    l.body.onmouseout = function () {
      pa.style.visibility = "hidden"
    }
  }

  function la(d, f, c) {
    d.ma = f;
    d.na = c;
    y && (d.ontouchstart = f, d.ontouchcancel = d.ontouchend = c);
    d.onmousedown = f;
    d.onmouseup = c
  }

  function qa(d) {
    var f = u("editing");
    if (!f.length) return null;
    for (f = f[0]; d; d = d.parentNode) {
      if ("panel" == d.id) return "panel";
      if (d == f) return "cells"
    }
    return null
  }
  la(l.body, function (d) {
    qa(d.target) && d.target.classList.contains("clickready") && x();
    var f = qa(d.target);
    "panel" != f && T.w(f ? d.target : void 0)
  }, function () {
    ea.set()
  });
  l.body.onclick = function (d) {
    d = d.target;
    if ("BUTTON" == d.tagName) {
      if (d.classList.contains("toggle")) {
        x();
        var f = d.parentNode.nextSibling;
        d.innerHTML = (f.classList.contains("collapse") ? "-" : "+") + d.innerHTML.substr(1);
        f.classList.toggle("collapse")
      }
      return !1
    }
    if ("IMG" != d.tagName || d.classList.contains("disabled") || !d.classList.contains("clickready") || !d.parentNode.classList.contains("cells")) return !0;
    for (f = d;
      "TABLE" != f.tagName; f = f.parentNode);
    if (f.classList.contains("editing")) return !1;
    Q.M(f);
    T.w(d)
  };
  window.onkeydown = function (d) {
    var f = d.keyCode;
    (37 <= f && 40 >= f ? T : Q).g(f, d) && x()
  };
  void 0 === l.body.classList ? q("main").innerHTML += "<br>縺薙�繝悶Λ繧ｦ繧ｶ縺ｧ縺ｯ蠢�ｦ√↑讖溯�縺ｮ荳驛ｨ縺悟茜逕ｨ縺ｧ縺阪∪縺帙ｓ<br><br>classList=" + l.body.classList + "<br>" : H.sync ? S.u("file=" + H.sync, void 0, function (d) {
    L.call("CompileResult", P);
    W(d, 0, !1);
    S.N()
  }) : H.json ? (L.call("CompileResult", P), W(decodeURIComponent(H.json), H.ts, !1), q("main").style.display = "") : H.log ? S.u("load=" + H.log, void 0, function (d) {
    if (void 0 === H.ts) a: {
      var f = d;
      try {
        f = JSON.parse(f)
      } catch (e) {
        alert(e);
        break a
      }
      d = f.title;
      var f = f.log,
        c;c = '<div class="caption f100"><button class=toggle>-</button>螻荳隕ｧ</div><div class="section f075" style="padding:20px;">';d && 2 == d.length && (c += d[0] + " " + d[1] + "<br>", c += "<br>");
      for (ts = 0; ts < f.length; ++ts) d = f[ts][0],
      ts && (c += "<br>"),
      c += '<a href="' + location.href + "&ts=" + ts + '" target=_blank>' + fa(~~(d[0] / 4)) + (d[0] % 4 + 1) + "螻" + d[1] + "譛ｬ蝣ｴ 萓幄ｨ�" + 1E3 * d[2] + "轤ｹ</a><br>";q("main").innerHTML = c + "</div>"
    }
    else W(d, H.ts, !1),
      L.call("CompileResult", P, !0), location.replace(location.protocol + "//" + location.hostname + location.pathname + "#json=" + Y(!0) + "&ts=0")
  }) : (L.call("CompileResult", P), W("{}", 0, !1), q("main").style.display = "");
})();
//
