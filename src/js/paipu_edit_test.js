// Copyrights C-EGG inc.
(function() {
    $('#setFanzhong').on('click', (e) => {
      e.preventDefault();
      $('.modalBackground').fadeIn();
    });

    $('.escape', '.modalBackground').on('click', (e) => {
      e.preventDefault();
      $('.modalBackground').fadeOut();
    });

    let zongfen = 0;
    $('li a', '.fanzhongList__row').on('click', (e) => {
      let fanzhong = e.target.getAttribute('data-fanzhong_zh');
      let fenshu = parseInt(e.target.parentElement.parentElement.getAttribute('data-fenshu'));
      $('.fanzhongDisplay__rows').append(`<div class="fanzhongDisplay__row" data-fenshu="${fenshu}"><span class="minus icon">-</span> <span class="fanzhongDisplay__name">${fanzhong}</span> <span class="fanzhongDisplay__unit">点</span><span class="fanzhongDisplay__fenshu">${fenshu}</span></div>`);
      zongfen += fenshu;
      document.getElementsByClassName('fanzhongDisplay__zongfen')[0].textContent = `${zongfen}点`;

      $('.minus.icon').on('click', (e) => {
        e.target.parentElement.remove();
        let _fenshu = Array.from(document.getElementsByClassName('fanzhongDisplay__row')).map(x => parseInt(x.getAttribute('data-fenshu')));
        if (_fenshu.length) {
          zongfen = _fenshu.reduce((l, r) => l + r);
          document.getElementsByClassName('fanzhongDisplay__zongfen')[0].textContent = `${zongfen}点`;
        } else {
          zongfen = 0;
          document.getElementsByClassName('fanzhongDisplay__zongfen')[0].textContent = '';
        }
      });
    });

    var l = document
      , p = l.body;
    function gebi(d) {
      return document.getElementById(d);
    }
    function gebc(c) {
      return document.getElementsByClassName(c);
    }
    function isClickReady(node) {
      return node.classList.contains('clickready');
    }
    function q(d) {
        return l.getElementById(d)
    }
    function u(d) {
        return l.getElementsByClassName(d)
    }
    // 批量指定 class
    function batchSetClass(nodes, cls) {
      for (let i = nodes.length - 1; i >= 0; --i) nodes[i].classList.add(cls);
    }
    // 批量移除 node 内的 class
    function batchRemoveClass(node, cls) {
      let targetNodes = node.getElementsByClassName(cls);
      for (var i = targetNodes.length - 1; i >= 0; --i)
        targetNodes[i].classList.remove(cls);
    }
    function scrollTop() {
      return l.body.scrollTop || l.documentElement.scrollTop
    }
    function pd() {
      window.event && window.event.preventDefault && window.event.preventDefault();
    }
    function paiNumToString(paiNum) {
      let [type, num] = paiNum.toString();
      let typeChar;
      switch (type) {
        case '1':
          typeChar = 'm';
          break;
        case '2':
          typeChar = 'p';
          break;
        case '3':
          typeChar = 's';
          break;
        case '4':
          typeChar = 'z';
          break;
        default:
          typeChar = 'x';
      }
      return typeChar + num;
    }
    function fulouToFulouString(fulou) {
      let [_, fulouCode, fulouPai] = fulou.match(/([pmc])(\d\d)/);
      let fulouCharPos;
      let fulouFrom = fulou.indexOf(fulouCode) / 2;
      let fulouChar = ['-', '=', '+'][fulouFrom];
      let pais = [...fulou.matchAll(/\d\d/g)].map(x => x[0]).sort();
      if (fulouCode == 'c') {
        fulouCharPos = pais.indexOf(fulouPai);
      } else {
        fulouCharPos = 2;
      }
      let fulouString = paiNumToString(pais[0])
                        + paiNumToString(pais[1]).substring(1)
                        + paiNumToString(pais[2]).substring(1);
      fulouString = fulouString.substring(0, fulouCharPos + 2)
                    + fulouChar
                    + fulouString.substring(fulouCharPos + 2);
      return fulouString;
    }
    function rawToShoupai(raw) {
      let shoupai = '';
      raw.sort((a, b) => a - b);
      let wanzi = raw.filter(pai => pai < 20)
                         .reduce((acc, cur) => acc + (cur - 10).toString(), '');
      let bingzi = raw.filter(pai => pai >= 21 && pai < 30)
                         .reduce((acc, cur) => acc + (cur - 20).toString(), '');
      let suozi = raw.filter(pai => pai >= 31 && pai < 40)
                         .reduce((acc, cur) => acc + (cur - 30).toString(), '');
      let zipai = raw.filter(pai => pai >= 41 && pai <= 47)
                         .reduce((acc, cur) => acc + (cur - 40).toString(), '');
      if (wanzi.length) shoupai += 'm' + wanzi;
      if (bingzi.length) shoupai += 'p' + bingzi;
      if (suozi.length) shoupai += 's' + suozi;
      if (zipai.length) shoupai += 'z' + zipai;
      return shoupai;
    }
    function rawToPaipu(logs) {
      let returnLog = [];
      let moRaws = [[], [], [], []];
      let daRaws = [[], [], [], []];
      let moRawTran = [[], [], [], []];
      let daRawTran = [[], [], [], []];
      for (let i = 0; i < 4; ++i) {
        moRaws[i] = logs[2 * i];
        daRaws[i] = logs[2 * i + 1];
      }
      let seat = 0;
      let lunshu = 0;
      let moPaipus = [[], [], [], []];
      let daPaipus = [[], [], [], []];

      // let fulouCharPos;
      let mopai;
      let dapai;
      while (lunshu <= 31) {
        if (moRaws[seat].length) {
          mopai = moRaws[seat].shift();
          if (mopai.length == void 0) {
            moRawTran[seat].push({"zimo": {"l": seat, "p": paiNumToString(mopai)}});
          } else {
            // let [_, fulouCode, fulouPai] = mopai.match(/([pmc])(\d\d)/);
            // let fulouFrom = mopai.indexOf(fulouCode) / 2;
            // let fulouChar = ['-', '=', '+'][fulouFrom];
            // let pais = [...mopai.matchAll(/\d\d/g)].map(x => x[0]).sort();
            // if (fulouCode == 'c') {
            //   fulouCharPos = pais.indexOf(fulouPai);
            // } else {
            //   fulouCharPos = 2;
            // }
            // let fulouString = paiNumToString(pais[0])
            //                   + paiNumToString(pais[1]).substring(1)
            //                   + paiNumToString(pais[2]).substring(1);
            // fulouString = fulouString.substring(0, fulouCharPos + 2)
            //               + fulouChar
            //               + fulouString.substring(fulouCharPos + 2);
            // moRawTran[seat].push({"fulou": {"l": seat, "m": fulouString}});
            moRawTran[seat].push({"fulou": {"l": seat, "m": fulouToFulouString(mopai)}});
          }
        }

        if (daRaws[seat].length) {
          dapai = daRaws[seat].shift();
          if (dapai.length == void 0) {
            if (dapai == 60) {
              dapai = paiNumToString(mopai) + '_';
            } else {
              dapai = paiNumToString(dapai);
            }
            daRawTran[seat].push({"dapai": {"l": seat, "p": dapai}});
          } else {
            // TODO:
          }
        }

        seat = (seat + 1) % 4;
        if (seat == 0) ++lunshu;
      }

      seat = 0;
      lunshu = 0;
      while (lunshu <= 31) {
        if (moRawTran[seat].length) {
          let moLog = moRawTran[seat].shift();
          let daLog = daRawTran[seat].shift();
          moPaipus[seat].push(moLog);
          daPaipus[seat].push(daLog);
          if (moLog['fulou']) {
            if (moLog['fulou']['m'].match('[=]')) {
              let shangjia = (seat + 3) % 4;
              moRawTran[shangjia].unshift(moPaipus[shangjia].pop());
              daRawTran[shangjia].unshift(daPaipus[shangjia].pop());
              moPaipus[shangjia].push({});
              daPaipus[shangjia].push({});
            } else if (moLog['fulou']['m'].match('[+]')) {
              let shangjia = (seat + 3) % 4;
              moRawTran[shangjia].unshift(moPaipus[shangjia].pop());
              daRawTran[shangjia].unshift(daPaipus[shangjia].pop());
              moPaipus[shangjia].push({});
              daPaipus[shangjia].push({});
              let duijia = (seat + 2) % 4;
              moRawTran[duijia].unshift(moPaipus[duijia].pop());
              daRawTran[duijia].unshift(daPaipus[duijia].pop());
              moPaipus[duijia].push({});
              daPaipus[duijia].push({});
            }
          }
        }

        seat = (seat + 1) % 4;
        if (seat == 0) ++lunshu;
      }

      seat = 0;
      lunshu = 0;
      while (lunshu <= 31) {
        if (moPaipus[seat].length) {
          let moPaipu = moPaipus[seat].shift();
          let daPaipu = daPaipus[seat].shift();
          if (Object.keys(moPaipu).length) {
            if (moPaipu) returnLog.push(moPaipu);
            if (daPaipu) returnLog.push(daPaipu);
          }
        }
        seat = (seat + 1) % 4;
        if (seat == 0) ++lunshu;
      }

      return returnLog;
      //
      // {"zimo": {"l":0,"p":"s2"}},
      // {"gang":{"l":0,"m":"m5555"}},
      // {"gangzimo":{"l":0,"p":"z4"}},
      // {"dapai":{"l":0,"p":"z4_"}},
      //
      //
      // {"fulou":{"l":2,"m":"z2222-"}},
      // {"zimo": {"l":2,"p":"m1"}},
      // {"dapai":{"l":2,"p":"s9"}},
    }
    var y = "ontouchstart" in l.documentElement;
    // TODO: remove
    // navigator.userAgent.match(/ OS [432]_/);
    var ca = window.devicePixelRatio || 1;
    // window.location.search.match(/[\?&]pixelRatio=(\d)/) && (ca = RegExp.$1 >> 0);
    // 批量指定 display
    // TODO:
    function setDisplay(d) {
      // TODO: ES6 rest parameters
      for (var f = 1; f < arguments.length; ++f)
        arguments[f].style.display = d
    }
    // 创建 tagName, attributes, style 的 element ，并插入到 root 末尾
    function createElement(tagName, root, attributes, styl) {
      // style 需要 px 结尾的属性
      let lenAttributes = {
        left: 1,
        top: 1,
        width: 1,
        height: 1,
        fontSize: 1
      };
      let element = l.createElement(tagName);
      if (attributes) {
        for (var a in attributes)
          element[a] = attributes[a];
      }
      if (styl) {
        attributes = element.style;
        for (var s in styl)
          attributes[s] = styl[s] + (lenAttributes[s] ? 'px' : '');
      }
      if (root) {
        return root.insertBefore(element, null);
      } else {
        return element;
      }
    }
    var ea = function() {
        var d = 0
          , f = void 0;
        setInterval(function() {
            f && 4 < ++d && f()
        }, 150);
        return {
            set: function(c) {
                f = c;
                d = 0
            }
        }
    }();
    // legal
    function fa(d) {
      return "東南西北"[d]
    }
    var finalStrings = [[], [], [], []];
    var ga = [[[0, 1, 2, 4], [2, 0, 1, 4], [1, 2, 0, 4], [4, 4, 4, 4]], [[0, 1, 2, 3], [3, 0, 1, 2], [2, 3, 0, 1], [1, 2, 3, 0]]]
      , B = function() {
        var d = "---";
        return {
            F: {},
            J: {},
            // f, c, e: 赤牌数量
            // return: 副露种类
            // c: 吃，p: 碰，a: 暗杠，k: 加杠，m: 大明杠
            // c11: ['c111213'], c12: ['c121113', 'c121314'], c13: ['131112', 'c131214', 'c131415'], ...
            // p11: ['p111111', '11p1111', '1111p11'], ...
            // a11: ['111111a11'], ...
            // k11: ['k11111111', '11k111111', '1111k1111'], ...
            // m11: ['m11111111', '11m111111', '111111m11'], ...
            o: function(f, c, e) {
                var a = f + "" + c + "" + e;
                if (a != d) {
                    d = a;
                    for (var b = a = "", g = "     ".split(" "), m = "", h = ["", "", "", "", ""], k = 0; 4 > k; ++k)
                        b += "p0A0B0C0#000#00=p1A0B0C p0A0B0C0#000#00=0Bp1A0C p0A0B0C0#000#00=0B0Cp3A m0A0B0C0D0#00=m1A0B0C0D m0A0B0C0D0#00=0Bm1A0C0D m0A0B0C0D0#00=0B0C0Dm3A k0A0A0#000#000#00=k5A1B0C0D k0A0A0#000#000#00=0Ck5A1B0D k0A0A0#000#000#00=0C0Dk7A3B a0D0A0B0C0D=0A0B0Ca0D ".replace(/[ABCD]/g, "#X" + (k + 1));
                    for (k = 5; 7 > k; ++k)
                        b += "p0A0B0C0#000#00=p1A0B0C p0A0B0C0#000#00=0Bp1A0C p0A0B0C0#000#00=0B0Cp3A m0A0B0C0D0#00=m1A0B0C0D m0A0B0C0D0#00=0Bm1A0C0D m0A0B0C0D0#00=0B0C0Dm3A k0A0A0#000#000#00=k5A1B0C0D k0A0A0#000#000#00=0Ck5A1B0D k0A0A0#000#000#00=0C0Dk7A3B a0D0A0B0C0D=0A0B0Ca0D ".replace(/[ABCD]/g, "#X" + (k + 1));
                    for (k = 7; 9 > k; ++k)
                        m += "p0A0B0C0#000#00=p1A0B0C p0A0B0C0#000#00=0Bp1A0C p0A0B0C0#000#00=0B0Cp3A m0A0B0C0D0#00=m1A0B0C0D m0A0B0C0D0#00=0Bm1A0C0D m0A0B0C0D0#00=0B0C0Dm3A k0A0A0#000#000#00=k5A1B0C0D k0A0A0#000#000#00=0Ck5A1B0D k0A0A0#000#000#00=0C0Dk7A3B a0D0A0B0C0D=0A0B0Ca0D ".replace(/[ABCD]/g, "#X" + (k + 1));
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
                        if (2 > k || 4 < k)
                            n += "c0A0B0C0#000#00=c1A0B0C c0B0A0C0#000#00=c1B0A0C c0C0A0B0#000#00=c1C0A0B ".replace(/A/g, "#X" + (k + 1)).replace(/B/g, "#X" + (k + 2)).replace(/C/g, "#X" + (k + 3));
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
                    for (k = 0; k < a.length; ++k)
                        b = a[k].replace(/\d#(\d\d)/g, "$1"),
                        f = b.substr(0, 3),
                        b = b.substr(12),
                        c[f] ? c[f].push(b) : c[f] = [b],
                        e[b] = a[k];
                    B.F = c;
                    B.J = e
                }
            }
        }
    }() // TODO: remove
      , ha = [
          -2, -2, -2, -2, -2, -2, -2, -2, -2, -2,
          -2, 0, 1, 2, 3, 4, 5, 6, 7, 8,
          -2, 9, 10, 11, 12, 13, 14, 15, 16, 17,
          -2, 18, 19, 20, 21, 22, 23, 24, 25, 26,
          -2, 27, 28, 29, 30, 31, 32, 33, -2, -2,
          -2, 4, 13, 22, -2, -2, -2, -2, -2, -2,
          -1, -1, -1, -1, -1, -1, -1, -1, -2, -1,
          -1, -1, -1, -1, -2, -2, -2, -2, -2, -2,
          -2, -2, -2, -2, -2, -2, -2, -2, -2, -1,
          -2, -2, -2, -2, -2, -2, -2, -2, -2, -2
        ]
      // 牌画 html 相关
      , C = function() {
        function blankImgHtml(width, height) {
          return '<img src="img/blank.png" width="' + width + '" height="' + height + '"/>';
        }
        /**
         * pai: 牌
         * direction: 牌方向（自家0，下家1，对面2，上家3，加杠5，副露文字8）
         * cls: 图像 class
         * return: img html
         */
        function paiSrc(pai, direction) {
          if (pai === 0) return 'img/blank.png';

          // 自家牌要除去副露信息
          if (direction == 0 && pai.length > 2)
            pai = pai.match(/[pmkacrf](\d\d)/)[1] >> 0;
          direction %= 4;
          return `img/pai/${direction}/${pai}.png`;
        }
        var paiClassRegExp = /img([^ ]+)/
          , isFinal = false; // img 不加 class 的 flag（即最终形。为 1 不加）
        return {
          sortPais: function(a) {
            return a.sort(function(b, a) {
              return 100 * ha[b] + b - (100 * ha[a] + a)
            })
          },
          /**
           * cls: class(img..)
           * return: 数字
           */
          getPaiNumFromClass: function(cls) {
            let pai = paiClassRegExp.exec(cls)[1];
            if (pai.length == 2) {
              return pai >> 0;
            } else {
              return pai;
            }
          },
          setCellHtml: function(cell, pai) {
            cell.src = paiSrc(pai, 0);
            cell.className = cell.className.replace(paiClassRegExp, 'img' + pai);
          },
          isPaiCell: function(cell) {
            return paiClassRegExp.exec(cell.className) != null;
          },
          /**
           * width: 牌图像 width
           * pai: 牌
           * direction: 牌方向（自家0，下家1，对面2，上家3，岭上牌4，加杠5，副露文字8）
           * cls: 图像 class
           * return: img html
           */
          paiHtml: function(width, pai, direction, cls) {
            let type = direction >> 2;
            let height;
            if (type == 2) {
              height = ~~(width / 3);
            } else {
              height = ~~((width * 4) / 3);
            }
            // 下家和上家为横置牌
            if (direction & 1) {
              let tmp = width;
              width = height;
              height = tmp;
            }
            // 空白
            if (pai === 0 && type != 2) { pai = 69; }
            let returnHtml = '<img';
            if (!isFinal) {
              if (cls) {
                cls = ' ' + cls;
              } else {
                cls = '';
              }
              returnHtml += ' class="img' + pai + cls + '"';
            }
            returnHtml += ' src="' + paiSrc(pai, direction % 4) + '"';
            returnHtml = returnHtml + (' width="' + width) + ('" height="' + height + '"');
            if (type == 1)
              returnHtml += ' style="position:absolute;"'
            returnHtml += "/>";
            return returnHtml;
          },
          /**
           * width: 牌图像 width
           * pais: 牌组（可能为单个、带副露字符、或一组副露）
           * return: img html
           */
          paiGroupHtml: function(width, pais) {
            // 单个，如 46
            if (pais.length === void 0) {
              return C.paiHtml(width, pais, 0);
            }
            // 带副露字符，如 p46
            if (pais.length === 3) {
              return C.paiHtml(width, pais.supaisstr(1) >> 0, 0);
            }
            // TODO: B.J
            // 一组副露，如 46p4646
            return blankImgHtml(3, 2 * width) + B.J[pais].substr(22).replace(/[pmkac]?(\d)#(\d\d)/g, function(b, c, h) {
              return C.paiHtml(width, h, c);
            }) + blankImgHtml(3, 2 * width);
          },
          // return: 最终形（一行）
          finalHtml: function(width, pais, fulous) {
            isFinal = true;
            let returnHtml = '';
            let len = pais.length;
            for (let i = 0; i < len - 1; ++i)
              returnHtml += C.paiHtml(width, pais[i], 0);
            if (len > 0) {
              // 摸牌分开表示
              if (len % 3 == 2) returnHtml += blankImgHtml(1, 2 * width);
              returnHtml += C.paiHtml(width, pais[len - 1], 0);
            }
            returnHtml += blankImgHtml(5, 2 * width); // 副露间的空白
            for (let i = fulous.length - 1; i >= 0; --i)
              returnHtml += C.paiGroupHtml(width, fulous[i]);
            isFinal = false;
            return returnHtml;
          }
        }
    }()
      ;
    // 将 src 的属性复制到 dst
    function copyAttributes(src, dst) {
      for (let c in dst) {
        src[c] = dst[c];
      }
    }
    var F = false
      // TODO: ??? remove
      , H = function func0 () {
        // debugger;
        var d = "";
        window.location.hash && (d += "&" + window.location.hash.substr(1));
        window.location.search && (d += "&" + window.location.search.substr(1));
        for (var f = {}, d = d.match(/&([^=]+)=([^&]*)/g) || [], c = 0; c < d.length; ++c) {
            var e = d[c].indexOf("=");
            f[d[c].substr(1, e - 1)] = d[c].substr(e + 1)
        }
        f.o = func0;
        return H = f
    }()
    // setTimeout 相关
      , L = function () {
      function exec() {
        timeoutID = void 0;
        for (let f in functionSet) {
          functionSet[f]();
          delete functionSet[f];
        }
      }
      var functionSet = {},
        timeoutID = void 0;
      return {
        // 函数 a 入队并 setTimeout（若没有）
        appendFunction: function (name, func, doRightNow) {
          if (doRightNow) {
            delete functionSet[name];
            func();
          } else {
            functionSet[name] = func;
          }
          if (timeoutID !== void 0) return;

          timeoutID = setTimeout(exec, 1);
        }
      }
    }();
    // TODO: naming(N, Y, l)
    // raw cell 相关
    var N = function() {
      // e: 摸牌和打牌 cells 对应的副露 cells
      function rowCells(cells, fulouCells) {
        let imgCells = cells.getElementsByTagName("IMG");
        for (let i = 0; i < imgCells.length; ++i) {
          this[i] = imgCells[i];
          // TODO: 全部显示
          // 默认只显示 14 个
          if (i > 13) this[i].style.display = "none";
        }
        this.length = imgCells.length;
        this.raw = [];
        this.Y = fulouCells;
        this.l = {}
      }
      // return: changed
      rowCells.prototype.set = function(col, pai) {
        let fulouCode = { p: 70, m: 71, k: 71, a: 71, c: 72 };
        while (this.raw.length <= col)
          this.raw.push(0);
        let changed = (this.raw[col] !== pai);
        this.raw[col] = pai;
        if (pai === 0) pai = 69; // 空白
        C.setCellHtml(this[col], pai);
        // TODO:
        if (this.Y) {
          let fulou = 0;
          if (pai.length > 2) fulou = fulouCode[pai.match(/[pmkacfr]/)[0]];
          C.setCellHtml(this.Y[col], fulou);
        }
        while (this.raw.length && this.raw[this.raw.length - 1] === 0)
          this.raw.pop();
        return changed;
      };
      // TODO:
      rowCells.prototype.s = function(c) {
          for (var e = c.length < this.length ? c.length : this.length, a = !1, b = 0; b < e; ++b)
              this.raw[b] !== c[b] && (a |= this.set(b, c[b]));
          for (; b < this.raw.length; ++b)
              0 !== this.raw[b] && (a |= this.set(b, 0));
          return a
      };
      rowCells.prototype.errorTextFromCls = function(col) {
        var error = '';
        if (this[col].classList.contains('err4')) error += '※最大枚数(４枚)を超えています<br>';
        if (this[col].classList.contains('errf')) error += '※副露牌(方向)が直前の打牌(家)と一致しません<br>';
        if (this[col].classList.contains('errc')) error += '※進行が他家と一致しません<br>';
        if (this.l[col]) error += this.l[col];
        return error;
      };
      return {
        // TODO:
        h: [false, false, false, false],
        // 初始化 cells
        initialCells: function(cellRows) {
          for (let i = 0; i < cellRows.length; ++i) {
            // 忽视 5（最终形）
            if (i % 6 == 5) continue;

            let row = i % 6;
            let cellNum = row ? 28 : 13; // dora -> 5，立牌 -> 13，摸牌、打牌 -> 28
            let paiHtmls = '';
            for (let j = 0; j < cellNum; ++j) {
              let xPos = i < 10 ? '0' : '';
              xPos += i;
              let yPos = j < 10 ? '0' : '';
              yPos += j;
              let cls = 'yx' + xPos + yPos;
              let direction = 8;
              // 非副露
              if ((row & 1) === 0) {
                direction = 0;
                cls += ' clickready';
              }
              paiHtmls += C.paiHtml(36, 0, direction, cls);
            }
            cellRows[i].innerHTML = paiHtmls;
            let fulouCells = void 0;
            if (row == 2 || row == 4) fulouCells = N[i - 1];
            N[i] = new rowCells(cellRows[i], fulouCells);
          }
          N.length = cellRows.length;
        },
        // 显示右侧的 cell
        displayRightColumn: function(row, col) {
          let section = Math.floor(row / 6);
          if (col < N[6 * section + 1].length - 1
            && col < N[6 * section + 2].length - 1
            && col < N[6 * section + 3].length - 1
            && col < N[6 * section + 4].length - 1)
              setDisplay('', N[6 * section + 1][col + 1], N[6 * section + 2][col + 1], N[6 * section + 3][col + 1], N[6 * section + 4][col + 1]);
        },
        // 显示 13 格以后已输入的（未输入的依然隐藏）
        displayHiddenCells: function(section) {
          let mo_ = N[6 * section + 1];
          let mo = N[6 * section + 2];
          let da_ = N[6 * section + 3];
          let da = N[6 * section + 4];
          let longestDisplay = Math.max(13, mo_.raw.length, mo.raw.length, da_.raw.length, da.raw.length) + 1;
          let i = 0;
          // 显示 13 格以后已输入的
          while (i < longestDisplay) {
            setDisplay('', mo_[i], mo[i], da_[i], da[i]);
            ++i;
          }
          // 隐藏 13 格以后未输入的
          while (i < mo_.length) {
            setDisplay('none', mo_[i], mo[i], da_[i], da[i])
            ++i;
          }
        }
      }
    }()
      // final 相关
      , O = function() {
        // return: 副露是否合法（进行顺序）
        function canFulouFrom(dapaiSeat, dapaiLun, fulouSeat, fulouLun) {
          fulouSeat = N[6 * fulouSeat + 2].raw[fulouLun].match(/[pmc]\d\d/)[0].substr(1);
          fulouLun = N[6 * dapaiSeat + 4].raw[dapaiLun];
          if (60 == fulouLun) {
            fulouLun = N[6 * dapaiSeat + 2].raw[dapaiLun];
          }
          return fulouLun == fulouSeat;
        }
        // 设置 skip 值
        function setSkipNum(section, col) {
          proceedSkipNum(N[6 * section + 1][col]);
          proceedSkipNum(N[6 * section + 2][col]);
          proceedSkipNum(N[6 * section + 3][col]);
          proceedSkipNum(N[6 * section + 4][col]);
        }
        // skip 加 1
        function proceedSkipNum(cell) {
          cell = cell.classList;
          for (let i = 12; i > 0; --i) {
            if (cell.contains("skip" + i)) {
              cell.remove("skip" + i);
              cell.add("skip" + (i + 1));
              return;
            }
          }
          cell.add('skip1');
        }
        // TODO: B.J
        // return: 副露是否合法（手牌数）
        function canFulou(pais, dapai) {
          if (dapai.length === void 0) { return canDapai(pais, dapai); }
          if (dapai.length == 3) { return canDapai(pais, dapai.substr(1) >> 0); }
          let c = B.J[dapai];
          let returnBool = false;
          if (c) {
            // 副露需要的牌
            let fulouPais = [c.substr(7, 2) >> 0, c.substr(11, 2) >> 0, c.substr(15, 2) >> 0, c.substr(19, 2) >> 0];
            returnBool = true;
            for (let i = 0; i < 4; ++i) {
              if (fulouPais[i]) returnBool &= canDapai(pais, fulouPais[i]);
            }
          }
          // TODO:
          return returnBool;
        }
        // return: 打牌是否合法（手牌数）。如果合法用 replaceDapai 代替 pais 内的 dapai
        function canDapai(pais, dapai, replaceDapai) {
          let dapaiIndex = pais.indexOf(dapai);
          if (dapaiIndex == -1) { return false; }
          if (replaceDapai) {
            pais.splice(dapaiIndex, 1, replaceDapai)
          } else {
            pais.splice(dapaiIndex, 1);
          }
          return true;
        }
        var directions = [[], [], [], []];
        // var finalStrings = [[], [], [], []];
        return {
          initialFinalCells: function(cellRows) {
            for (let i = 0; i < 4; ++i) {
              O[i] = cellRows[6 * i + 5];
              O[i].innerHTML = C.finalHtml(36, [], []);
              O[i].height = 72;
              O[i].style.position = "relative";
              O[i].classList.add("collapse");
              O[i].previousElementSibling.style.width = "27px";
            }
          },
          // 计算最终形并存放在 O 里（顺带计算 directions ）
          buildFinalsAndDirections: function(section) {
            let peipais = N[6 * section];  // 配
            let mopais = N[6 * section + 2];  // 摸
            let dapais = N[6 * section + 4]; // 打
            directions[section] = [];
            batchRemoveClass(peipais[0].parentNode, 'err');
            peipais.l = {};
            batchRemoveClass(mopais[0].parentNode, 'err');
            mopais.l = {};
            batchRemoveClass(dapais[0].parentNode, 'err');
            dapais.l = {};
            for (let d = 0; d < peipais.length; ++d) {
              if (peipais.raw[d] !== 0) continue;

              peipais[d].classList.add('err');
              peipais.l[d] = '※空欄は使用できません';
            }
            peipais = C.sortPais(peipais.raw.concat());
            let fulous = [];
            let len = Math.max(0, mopais.raw.length, dapais.raw.length);
            let finals = [];
            finals.push('<div class="fin fin_">' + C.finalHtml(36, peipais, fulous) + '</div>');
            for (let d = 0; d < len; ++d) {
              let mopai = mopais.raw[d] || 0;
              let dapai = dapais.raw[d] || 0;
              let mopaiFulou = 0;
              if (mopai.length > 2) mopaiFulou = mopai.match(/[pmc]/)[0];
              let dapaiFulou = 0;
              if (dapai.length > 2) dapaiFulou = dapai.match(/[karf]/)[0];
              let mopaiErrors = [];
              if (mopai === 0 && dapai === 0) {
                mopaiErrors.push('※空列は使用できません');
              } else if (mopai === 0 && dapai !== 0) {
                mopaiErrors.push('※入力が正しくありません');
              } else if (directions[section][d] & 4 && mopaiFulou) {
                mopaiErrors.push('※取牌(嶺上)を指定してください');
              } else if (['p', 'm', 'c'].includes(mopaiFulou)) {
                if (!canFulou(peipais, mopai)) mopaiErrors.push('※明副露牌が手牌に存在しません');
                fulous.push(mopai);
              } else {
                if (mopai !== 0) {
                  peipais.push(mopai);
                  if (peipais.length % 3 != 2) mopaiErrors.push('※手牌枚数が不正です');
                }
              }
              if (mopaiErrors.length) {
                mopais[d].classList.add('err');
                mopais.l[d] = mopaiErrors.join('<br>');
              };
              finals.push('<div class="fin fin' + d + '">' + C.finalHtml(36, peipais, fulous) + '</div>');

              let dapaiErrors = [];
              if (mopai === 0 && dapai === 0) {
                dapaiErrors.push('※空列は使用できません');
              } else if (mopaiFulou === 'm' && dapai !== 0) {
                dapaiErrors.push('※明槓後は空欄にしてください');
              } else if (['a', 'f'].includes(dapaiFulou)) {
                if (['p', 'c'].includes(mopaiFulou)) dapaiErrors.push('※明副露直後に暗副露は行えません');
                if (!canFulou(peipais, dapai)) dapaiErrors.push('※暗副露牌が手牌に存在しません');
                fulous.push(dapai);
              } else if (dapaiFulou == 'k') {
                let kangKezi = dapai.replace(/k\d\d/, 'p');
                if (canFulou(peipais, dapai)) {
                  if (!canDapai(fulous, kangKezi, dapai)) dapaiErrors.push('※加槓する明刻子が存在しません');
                } else {
                  dapaiErrors.push('※加槓する牌が存在しません');
                }
              } else {
                if (dapai !== 0) {
                  if (dapai == 60) dapai = mopai;
                  if (!canDapai(peipais, dapai)) dapaiErrors.push('※打牌が手牌に存在しません');
                  if (peipais.length % 3 != 1) dapaiErrors.push('※手牌枚数が不正です');
                }
              }
              if (peipais.length % 3 != 2) C.sortPais(peipais);
              if (dapaiErrors.length) {
                dapais[d].classList.add('err');
                dapais.l[d] = dapaiErrors.join('<br>');
              }
              finals.push('<div class="fin fin' + d + '_">' + C.finalHtml(36, peipais, fulous) + '</div>');
              // TODO: experiment
              let lipai = peipais;
              let zimopai;
              if (peipais.length % 3 == 2) zimopai = peipais.pop();
              finalStrings[section] = rawToShoupai(lipai);
              // 自摸牌分开放
              if (zimopai) finalStrings[section] += paiNumToString(zimopai);
              if (fulous.length) {
                debugger;
                finalStrings[section] += fulous.reduce((l, r) => l + ',' + fulouToFulouString(r));
              }

              directions[section][d] |= 0;
              switch (mopaiFulou || dapaiFulou) {
                case 'm':
                case 'c':
                case 'p':
                  mopai = mopai.indexOf(mopaiFulou) / 2 + 1;
                  // 副露对面的大明杠固定在第二张牌
                  'm' == mopaiFulou && 3 <= mopai && --mopai;
                  directions[section][d] |= mopai;
                  break;
              }
              switch (mopaiFulou || dapaiFulou) {
                case 'm':
                case 'k':
                case 'a':
                case 'f':
                  directions[section][d + 1] |= 4;
                  break;
              }
            }
            // debugger;
            O[section].innerHTML = finals.join('');
            O[section].lastChild.classList.add('fshow');
          },
          buildErrorsAndSkips: function() {
            batchRemoveClass(document, 'err4');
            // errors: begin
            // 牌数超过 4 张
            let paiNums = [];
            for (let i = 0; i < 60; ++i) paiNums[i] = 0;
            for (let i = 0; i < N.length; ++i) {
              let row = i % 6;
              if (row != 0 && row != 2) continue;

              let cellRaws = N[i].raw;
              for (let row = 0; row < cellRaws.length; ++row) {
                let pai = cellRaws[row];
                if (pai && pai.length === void 0) {
                  paiNums[pai]++;
                }
              }
            }
            for (let i = 10; i < 60; ++i) {
              if (paiNums[i] <= 4) continue;

              batchSetClass(gebc('img' + i), 'err4');
            }
            // 副露方向
            batchRemoveClass(document, 'errf');
            for (let i = 0; i < 8; ++i) {
              batchRemoveClass(document, 'skip' + i);
            }
            // TODO: remove
            let b = [!1, !1, !1, !1];
            let c = -1;
            let colNums = [0, 0, 0, 0]; // 已处理张数(col)
            let lunNums = [0, 0, 0, 0]; // 已处理轮数
            // for (let i = q("kyoku").selectedIndex % 4; ; ) {
            for (let i = 0; ; ) {
              // TODO: remove
              if (c != -1) {
                debugger;
                alert('lizhi');
                b[c] = true;
                c = 1;
              }
              if (directions[i][colNums[i]] & 8) {
                debugger;
                alert('lizhi2');
                c = i;
              }
              ++colNums[i];
              ++lunNums[i];
              // 不是从牌山摸牌
              if (directions[i][colNums[i]] & 4) {
                // 为了牌画方向的方便，故意交换了 1 和 3 的定义
                let shangjia = (i + 1) % 4;
                if (lunNums[shangjia] < lunNums[i] + (shangjia < i)) {
                  setSkipNum(shangjia, colNums[shangjia]);
                  ++lunNums[shangjia];
                };
                let duijia = (i + 2) % 4;
                if (lunNums[duijia] < lunNums[i] + (duijia < i)) {
                  setSkipNum(duijia, colNums[duijia]);
                  ++lunNums[duijia];
                };
                let xiajia = (i + 3) % 4;
                if (lunNums[xiajia] < lunNums[i] + (xiajia < i)) {
                  setSkipNum(xiajia, colNums[xiajia]);
                  ++lunNums[xiajia];
                }
              } else {
                let nextI = (i + 1) % 4;
                // TODO: ???
                if (directions[nextI][colNums[nextI]] & 7 == 0) {
                  nextI = (i + 3) % 4;
                  if (directions[nextI][colNums[nextI]] === 2 && canFulouFrom((i + 1) % 4, colNums[(i + 1) % 4], nextI, colNums[nextI])) {
                    i = (i + 1) % 4;
                  }
                // 存在副露
                } else if ((nextI = (i + 3) % 4,
                    directions[nextI][colNums[nextI]] === 3 && canFulouFrom(i, colNums[i] - 1, nextI, colNums[nextI])) || (nextI = (i + 2) % 4,
                    directions[nextI][colNums[nextI]] === 2 && canFulouFrom(i, colNums[i] - 1, nextI, colNums[nextI])) || (nextI = (i + 1) % 4,
                    directions[nextI][colNums[nextI]] === 1 && canFulouFrom(i, colNums[i] - 1, nextI, colNums[nextI]))) {
                  // 为了牌画方向的方便，故意交换了 1 和 3 的定义
                  if (directions[nextI][colNums[nextI]] >= 2) {
                    let shangjia = (i + 1) % 4;
                    setSkipNum(shangjia, colNums[shangjia]);
                    ++lunNums[shangjia];
                  }
                  if (directions[nextI][colNums[nextI]] >= 3) {
                    let duijia = (i + 2) % 4;
                    setSkipNum(duijia, colNums[duijia]);
                    ++lunNums[duijia];
                  }
                  i = nextI;
                } else if ((directions[nextI][colNums[nextI]] !== void 0) && ((directions[nextI][colNums[nextI]] & 3) === 0)) {
                  i = nextI;
                } else {
                  break;
                }
              }
            }
            // TODO: remove
            // N.h[0] === b[0] && N.h[1] === b[1] && N.h[2] === b[2] && N.h[3] === b[3] || L.appendFunction("CompileResult", P);
            // N.h = b;
            batchRemoveClass(document, 'errc');
            if (directions[0].length && directions[1].length && directions[2].length && (F || directions[3].length)) {
              for (let i = 0; i < 4; ++i) {
                while (colNums[i] < directions[i].length) {
                  N[6 * i + 2][colNums[i]].classList.add('errc');
                  N[6 * i + 4][colNums[i]].classList.add('errc');
                  ++colNums[i];
                }
              }
            }
          },
          // 更新 panel 下部显示的 final fshow
          setPanelFshow: function(row, col) {
            batchRemoveClass(document, 'fshow');
            let section = Math.floor(row / 6);
            row = row % 6;
            let cls = 'fin';
            switch (row) {
              case 0:
                cls += '_';
                break;
              case 2:
                cls += col;
                break;
              case 4:
                cls += col + '_';
                break;
            }
            let finalNode = O[section].getElementsByClassName(cls);
            if (finalNode.length) {
              finalNode = finalNode[0];
            } else {
              finalNode = O[section].lastChild;
            }
            finalNode.classList.add('fshow');
          },
          setFinalFshow: function() {
            batchRemoveClass(document, 'fshow');
            for (let i = 0; i < 4; ++i) O[i].lastChild.classList.add("fshow")
          }
        }
    }()
      // editingCell 操作相关
      , T = function() {
        // return: cell 竖直向下移动 dis 行后的 cell
        function getMoveTarget(cell, dis) {
          let cellCol = 0; // col 位置
          let nd = cell;
          while (nd.previousElementSibling) {
            nd = nd.previousElementSibling;
            ++cellCol;
          }
          cell = cell.parentNode.parentNode; // tr
          if (dis > 0) {
            while (cell && dis) {
              cell = cell.nextElementSibling;
              --dis;
            }
          } else if (dis < 0) {
            while (cell && dis) {
              cell = cell.previousElementSibling;
              ++dis;
            }
          }
          if (cell) {
            cell = cell.firstElementChild.nextElementSibling.firstElementChild; // td 内第一个 cell
            while (cellCol && cell.nextElementSibling) {
              cell = cell.nextElementSibling;
              --cellCol;
            }
          }
          if (cellCol) {
            cell = void 0;
          }
          return cell;
        }
        // isOn: boolean
        // 改变 editingCell 的背景色。true: #ccc, false: 消除背景色
        function changeEditingCellBgColor(isOn) {
          if (!editingCell) { return; }
          if (isOn) {
            editingCell.style.backgroundColor = '#ccc';
          } else {
            editingCell.style.backgroundColor = '';
          }
        }
        var editingCell = void 0
          , editingRow = 0
          , editingCol = 0;
        setInterval(function() {
          editingCell && changeEditingCellBgColor(editingCell.style.backgroundColor == '')
        }, 500);
        return {
          directionSelect: void 0,
          editingCellRow: function() {
            return editingRow % 6;
          },
          // panel 显示状态下的 click 事件（或 keydown 以及其他强制操作等）
          clickNode: function(clickedNode) {
            // 被 click 的 cell 的坐标。-1 表示不是 cell
            let pos = -1;
            if (clickedNode && clickedNode.className) {
              let regMatch = clickedNode.className.match(/yx(\d\d\d\d)/);
              if (regMatch && regMatch.length) pos = regMatch[1];
            }
            // 被 click 的 element 没有 .clickready 或没有预设坐标
            if (clickedNode && (!isClickReady(clickedNode) || pos == -1)) return false;

            // 被 click 的 element 为 editingTable 以外
            if (!clickedNode) {
              Q.closePanel();
              N.displayHiddenCells(Math.floor(editingRow / 6))
            } else if (editingCell) {
              Q.adjustPanelOffset(clickedNode);
            }
            editingCol = pos % 100;  // 列
            editingRow = ~~(pos / 100);  // 行
            changeEditingCellBgColor(false); // 解除原来编辑中要素的背景色
            editingCell = clickedNode; // 更改编辑中要素
            changeEditingCellBgColor(true); // 设置现在编辑中要素的背景色
            Q.setOverlayInnerHTML(pos == -1 ? '' : N[editingRow].errorTextFromCls(editingCol));
            if (clickedNode) {
              Q.setPanelClass(0);
              O.setPanelFshow(editingRow, editingCol);
            }
            return true;
          },
          // 将 pai 写入 editingCell 并更新 view
          addPai: function(pai) {
            if (!editingCell) return false;

            // TODO:
            S.appendOperationLog({
              // 实际行数 + 2
              // 0: 局数信息
              // 1: 分数信息
              // 实际行 -> log 行
              path: "/log/0/" + (2 + (3 * Math.floor(editingRow / 6) + Math.floor(editingRow % 6 / 2))) + "/" + editingCol,
              // 牌
              val: pai
            });
            N.displayRightColumn(editingRow, editingCol);
            T.moveEditingCellByDirectionSelect(1);
            return true;
          },
          /**
           * isProceed: 是否向后
           * 根据 DirectionSelect 的 selectedIndex 移动 editingCell
           * return: editingCell 是否改变
           */
          moveEditingCellByDirectionSelect: function(isProceed) {
            if (!editingCell) { return false; }

            // 0: ↓→
            // 1: →→
            // 2: ↓↓
            if (T.directionSelect.selectedIndex == 2) {
              let originRow = editingRow;
              // 摸向右 -> 上一个 section 的打
              if (T.editingCellRow() == 2 && isProceed < 0) {
                editingRow = (editingRow + 18) % 24 + 2;
                if (editingRow > originRow) --editingCol;
              }
              // 打向左 -> 下一个 section 的摸的最后
              if (T.editingCellRow() == 4 && isProceed > 0) {
                editingRow = (editingRow + 2) % 24 + 2;
                editingCol = N[editingRow].raw.length;
              }
              // 行空白时跳到最前
              if (N[6 * ~~(editingRow / 6)].raw.length == 0) {
                editingRow = 6 * ~~(editingRow / 6);
                editingCol = 0;
              }
              // 横跨 section 的操作直接进行
              if (editingRow != originRow) { return T.clickNode(N[editingRow][editingCol]); }
            }
            if (T.directionSelect.selectedIndex == 0 || T.directionSelect.selectedIndex == 2) {
              let editingRow = T.editingCellRow();
              if (editingRow == 2 && isProceed < 0 && editingCell.previousSibling)
                return T.moveEditingCellByKeycode(37) && T.moveEditingCellByKeycode(40);
              if (editingRow == 4 && isProceed < 0)
                return T.moveEditingCellByKeycode(38);
              if (editingRow == 4 && isProceed > 0 && editingCell.nextSibling)
                return T.moveEditingCellByKeycode(39) && T.moveEditingCellByKeycode(38);
              if (editingRow == 2 && isProceed > 0)
                return T.moveEditingCellByKeycode(40);
            }
            return T.moveEditingCellByKeycode(isProceed > 0 ? 39 : 37);
          },
          /**
           * keyCode: 37 ~ 40
           * 移动 editingCell
           * return: editingCell 是否改变
           */
          moveEditingCellByKeycode: function(keyCode) {
            if (!editingCell) return false;

            let targetCell = void 0;
            // ←
            if (keyCode == 37) {
              targetCell = editingCell.previousSibling;
              if (!targetCell) {
                targetCell = getMoveTarget(editingCell, -2);
                while (targetCell && targetCell.nextSibling && !targetCell.nextSibling.style.display) {
                  targetCell = targetCell.nextSibling;
                }
              }
            }
            // ↑
            if (keyCode == 38) targetCell = getMoveTarget(editingCell, -2);
            // →
            if (keyCode == 39) {
              targetCell = editingCell.nextSibling;
              if (!targetCell || targetCell.style.display) {
                targetCell = getMoveTarget(editingCell, 2);
                if (targetCell) {
                  targetCell = targetCell.parentNode.firstChild;
                }
              }
            }
            // ↓
            if (keyCode == 40) targetCell = getMoveTarget(editingCell, 2);

            if (targetCell && !targetCell.style.display && targetCell != editingCell) {
              T.clickNode(targetCell);
              return true;
            } else {
              return false;
            }
          }
        }
    }()
      // TODO: (la)
      // view 相关
      , Q = function() {
        // 删除所有 .pushed
        // return: 原本含 .pushed class 的牌字符串
        function removePushedCells() {
          let pushedCells = panel.getElementsByClassName('pushed');
          let pushedClass = 0;
          if (pushedCells.length) pushedClass = C.getPaiNumFromClass(pushedCells[0].className);
          for (let i = pushedCells.length - 1; i >= 0; --i) pushedCells[i].classList.remove('pushed');
          return pushedClass;
        }
        // var c = y ? 48 : 18;
        var fulouPaiWidth = y ? 32 : 18;
        var overlay = createElement('div', void 0, {
          id: 'overlay',
        })
          , panel = createElement('div', void 0, {
            id: 'panel',
            innerHTML: '\
              <div class="furo"></div>\
              <table cellpadding="0" cellspacing="0" class="displaynone tp0">\
                  <tbody>\
                      <tr>\
                          <td class="btn1">1:</td>\
                          <td style="font-size:0px;">\
                              <img class="img11 clickready" src="img/pai/0/11.png" width="18" height="24"/>\
                              <img class="img12 clickready" src="img/pai/0/12.png" width="18" height="24"/>\
                              <img class="img13 clickready" src="img/pai/0/13.png" width="18" height="24"/>\
                              <img class="img14 clickready" src="img/pai/0/14.png" width="18" height="24"/>\
                              <img class="img15 clickready" src="img/pai/0/15.png" width="18" height="24"/>\
                              <img class="img16 clickready" src="img/pai/0/16.png" width="18" height="24"/>\
                              <img class="img17 clickready" src="img/pai/0/17.png" width="18" height="24"/>\
                              <img class="img18 clickready" src="img/pai/0/18.png" width="18" height="24"/>\
                              <img class="img19 clickready" src="img/pai/0/19.png" width="18" height="24"/>\
                          </td>\
                          <td width="6"></td>\
                          <td>\
                              <table cellpadding="0" cellspacing="0">\
                                  <tbody>\
                                      <tr>\
                                          <td class="btn7">7:</td>\
                                          <td class="tbtn img07 clickready">&nbsp;←&nbsp;</td>\
                                          <td width="6"></td>\
                                          <td class="btn8">8:</td>\
                                          <td class="tbtn img08 clickready">&nbsp;→&nbsp;</td>\
                                          <td width="6"></td>\
                                          <td class="btn9">9:</td>\
                                          <td class="tbtn img00 clickready">空白</td>\
                                          <td width="6"></td>\
                                          <td><select><option>↓→</option><option>→→</option><option selected="">↓↓</option></select></td>\
                                      </tr>\
                                  </tbody>\
                              </table>\
                          </td>\
                      </tr>\
                      <tr>\
                          <td class="btn2">2:</td>\
                          <td style="font-size:0px;">\
                              <img class="img21 clickready" src="img/pai/0/21.png" width="18" height="24"/>\
                              <img class="img22 clickready" src="img/pai/0/22.png" width="18" height="24"/>\
                              <img class="img23 clickready" src="img/pai/0/23.png" width="18" height="24"/>\
                              <img class="img24 clickready" src="img/pai/0/24.png" width="18" height="24"/>\
                              <img class="img25 clickready" src="img/pai/0/25.png" width="18" height="24"/>\
                              <img class="img26 clickready" src="img/pai/0/26.png" width="18" height="24"/>\
                              <img class="img27 clickready" src="img/pai/0/27.png" width="18" height="24"/>\
                              <img class="img28 clickready" src="img/pai/0/28.png" width="18" height="24"/>\
                              <img class="img29 clickready" src="img/pai/0/29.png" width="18" height="24"/>\
                          </td>\
                          <td width="6"></td>\
                          <td>\
                              <table cellpadding="0" cellspacing="0" class="displaynone tp2">\
                                  <tbody>\
                                      <tr>\
                                          <td class="btn5">5:</td>\
                                          <td class="tbtn img70 clickready">ポン</td>\
                                          <td class="tbtn img71 clickready">カン</td>\
                                          <td class="tbtn img72 clickready">チー</td>\
                                      </tr>\
                                  </tbody>\
                              </table>\
                              <table cellpadding="0" cellspacing="0" class="displaynone tp4">\
                                  <tbody>\
                                      <tr>\
                                          <td class="btn5">5:</td>\
                                          <td class="tbtn img71 clickready">カン</td>\
                                          <td width="6"></td>\
                                          <td class="btn0">0:</td>\
                                          <td style="font-size:0px;"><img class="img60 clickready" src="img/pai/0/60.png" width="18" height="24/"></td>\
                                      </tr>\
                                  </tbody>\
                              </table>\
                          </td>\
                      </tr>\
                      <tr>\
                          <td class="btn3">3:</td>\
                          <td style="font-size:0px;">\
                              <img class="img31 clickready" src="img/pai/0/31.png" width="18" height="24"/>\
                              <img class="img32 clickready" src="img/pai/0/32.png" width="18" height="24"/>\
                              <img class="img33 clickready" src="img/pai/0/33.png" width="18" height="24"/>\
                              <img class="img34 clickready" src="img/pai/0/34.png" width="18" height="24"/>\
                              <img class="img35 clickready" src="img/pai/0/35.png" width="18" height="24"/>\
                              <img class="img36 clickready" src="img/pai/0/36.png" width="18" height="24"/>\
                              <img class="img37 clickready" src="img/pai/0/37.png" width="18" height="24"/>\
                              <img class="img38 clickready" src="img/pai/0/38.png" width="18" height="24"/>\
                              <img class="img39 clickready" src="img/pai/0/39.png" width="18" height="24"/>\
                          </td>\
                          <td width="6"></td>\
                          <td>\
                              <table cellpadding="0" cellspacing="0">\
                                  <tbody>\
                                      <tr>\
                                          <td class="btn4">4:</td>\
                                              <td style="font-size:0px;">\
                                                  <img class="img41 clickready" src="img/pai/0/41.png" width="18" height="24"/>\
                                                  <img class="img42 clickready" src="img/pai/0/42.png" width="18" height="24"/>\
                                                  <img class="img43 clickready" src="img/pai/0/43.png" width="18" height="24"/>\
                                                  <img class="img44 clickready" src="img/pai/0/44.png" width="18" height="24"/>\
                                                  <img class="img45 clickready" src="img/pai/0/45.png" width="18" height="24"/>\
                                                  <img class="img46 clickready" src="img/pai/0/46.png" width="18" height="24"/>\
                                                  <img class="img47 clickready" src="img/pai/0/47.png" width="18" height="24"/>\
                                            </td>\
                                      </tr>\
                                  </tbody>\
                              </table>\
                          </td>\
                      </tr>\
                  </tbody>\
              </table>\
              <table cellpadding="0" cellspacing="0" class="displaynone tp10">\
                  <tbody>\
                      <tr>\
                          <td class="btn1">1:</td>\
                          <td style="font-size:0px;"><img class="img11 clickready" src="img/pai/0/11.png" width="18" height="24/"></td>\
                          <td width="6"></td>\
                          <td class="btn2">2:</td>\
                          <td style="font-size:0px;"><img class="img12 clickready" src="img/pai/0/12.png" width="18" height="24/"></td>\
                          <td width="6"></td>\
                          <td class="btn3">3:</td>\
                          <td style="font-size:0px;"><img class="img13 clickready" src="img/pai/0/13.png" width="18" height="24/"></td>\
                          <td width="6"></td>\
                          <td class="btn4">4:</td>\
                          <td style="font-size:0px;"><img class="img14 clickready" src="img/pai/0/14.png" width="18" height="24/"></td>\
                          <td width="6"></td>\
                          <td class="btn5">5:</td>\
                          <td style="font-size:0px;"><img class="img15 clickready" src="img/pai/0/15.png" width="18" height="24/"></td>\
                          <td width="6"></td>\
                          <td class="btn6">6:</td>\
                          <td style="font-size:0px;"><img class="img16 clickready" src="img/pai/0/16.png" width="18" height="24/"></td>\
                          <td width="6"></td>\
                          <td class="btn7">7:</td>\
                          <td style="font-size:0px;"><img class="img17 clickready" src="img/pai/0/17.png" width="18" height="24/"></td>\
                          <td width="6"></td>\
                          <td class="btn8">8:</td>\
                          <td style="font-size:0px;"><img class="img18 clickready" src="img/pai/0/18.png" width="18" height="24/"></td>\
                          <td width="6"></td>\
                          <td class="btn9">9:</td>\
                          <td style="font-size:0px;"><img class="img19 clickready" src="img/pai/0/19.png" width="18" height="24/"></td>\
                          <td width="6"></td>\
                      </tr>\
                  </tbody>\
              </table>\
              <table cellpadding="0" cellspacing="0" class="displaynone tp20">\
                  <tbody>\
                      <tr>\
                          <td class="btn1">1:</td>\
                          <td style="font-size:0px;"><img class="img21 clickready" src="img/pai/0/21.png" width="18" height="24/"></td>\
                          <td width="6"></td>\
                          <td class="btn2">2:</td>\
                          <td style="font-size:0px;"><img class="img22 clickready" src="img/pai/0/22.png" width="18" height="24/"></td>\
                          <td width="6"></td>\
                          <td class="btn3">3:</td>\
                          <td style="font-size:0px;"><img class="img23 clickready" src="img/pai/0/23.png" width="18" height="24/"></td>\
                          <td width="6"></td>\
                          <td class="btn4">4:</td>\
                          <td style="font-size:0px;"><img class="img24 clickready" src="img/pai/0/24.png" width="18" height="24/"></td>\
                          <td width="6"></td>\
                          <td class="btn5">5:</td>\
                          <td style="font-size:0px;"><img class="img25 clickready" src="img/pai/0/25.png" width="18" height="24/"></td>\
                          <td width="6"></td>\
                          <td class="btn6">6:</td>\
                          <td style="font-size:0px;"><img class="img26 clickready" src="img/pai/0/26.png" width="18" height="24/"></td>\
                          <td width="6"></td>\
                          <td class="btn7">7:</td>\
                          <td style="font-size:0px;"><img class="img27 clickready" src="img/pai/0/27.png" width="18" height="24/"></td>\
                          <td width="6"></td>\
                          <td class="btn8">8:</td>\
                          <td style="font-size:0px;"><img class="img28 clickready" src="img/pai/0/28.png" width="18" height="24/"></td>\
                          <td width="6"></td>\
                          <td class="btn9">9:</td>\
                          <td style="font-size:0px;"><img class="img29 clickready" src="img/pai/0/29.png" width="18" height="24/"></td>\
                          <td width="6"></td>\
                      </tr>\
                  </tbody>\
              </table>\
              <table cellpadding="0" cellspacing="0" class="displaynone tp30">\
                  <tbody>\
                      <tr>\
                          <td class="btn1">1:</td>\
                          <td style="font-size:0px;"><img class="img31 clickready" src="img/pai/0/31.png" width="18" height="24/"></td>\
                          <td width="6"></td>\
                          <td class="btn2">2:</td>\
                          <td style="font-size:0px;"><img class="img32 clickready" src="img/pai/0/32.png" width="18" height="24/"></td>\
                          <td width="6"></td>\
                          <td class="btn3">3:</td>\
                          <td style="font-size:0px;"><img class="img33 clickready" src="img/pai/0/33.png" width="18" height="24/"></td>\
                          <td width="6"></td>\
                          <td class="btn4">4:</td>\
                          <td style="font-size:0px;"><img class="img34 clickready" src="img/pai/0/34.png" width="18" height="24/"></td>\
                          <td width="6"></td>\
                          <td class="btn5">5:</td>\
                          <td style="font-size:0px;"><img class="img35 clickready" src="img/pai/0/35.png" width="18" height="24/"></td>\
                          <td width="6"></td>\
                          <td class="btn6">6:</td>\
                          <td style="font-size:0px;"><img class="img36 clickready" src="img/pai/0/36.png" width="18" height="24/"></td>\
                          <td width="6"></td>\
                          <td class="btn7">7:</td>\
                          <td style="font-size:0px;"><img class="img37 clickready" src="img/pai/0/37.png" width="18" height="24/"></td>\
                          <td width="6"></td>\
                          <td class="btn8">8:</td>\
                          <td style="font-size:0px;"><img class="img38 clickready" src="img/pai/0/38.png" width="18" height="24/"></td>\
                          <td width="6"></td>\
                          <td class="btn9">9:</td>\
                          <td style="font-size:0px;"><img class="img39 clickready" src="img/pai/0/39.png" width="18" height="24/"></td>\
                          <td width="6"></td>\
                      </tr>\
                  </tbody>\
              </table>\
              <table cellpadding="0" cellspacing="0" class="displaynone tp40">\
                  <tbody>\
                      <tr>\
                          <td class="btn1">1:</td>\
                          <td style="font-size:0px;"><img class="img41 clickready" src="img/pai/0/41.png" width="18" height="24/"></td>\
                          <td width="6"></td>\
                          <td class="btn2">2:</td>\
                          <td style="font-size:0px;"><img class="img42 clickready" src="img/pai/0/42.png" width="18" height="24/"></td>\
                          <td width="6"></td>\
                          <td class="btn3">3:</td>\
                          <td style="font-size:0px;"><img class="img43 clickready" src="img/pai/0/43.png" width="18" height="24/"></td>\
                          <td width="6"></td>\
                          <td class="btn4">4:</td>\
                          <td style="font-size:0px;"><img class="img44 clickready" src="img/pai/0/44.png" width="18" height="24/"></td>\
                          <td width="6"></td>\
                          <td class="btn5">5:</td>\
                          <td style="font-size:0px;"><img class="img45 clickready" src="img/pai/0/45.png" width="18" height="24/"></td>\
                          <td width="6"></td>\
                          <td class="btn6">6:</td>\
                          <td style="font-size:0px;"><img class="img46 clickready" src="img/pai/0/46.png" width="18" height="24/"></td>\
                          <td width="6"></td>\
                          <td class="btn7">7:</td>\
                          <td style="font-size:0px;"><img class="img47 clickready" src="img/pai/0/47.png" width="18" height="24/"></td>\
                      </tr>\
                  </tbody>\
              </table>\
              <table cellpadding="0" cellspacing="0" class="displaynone tp52">\
                  <tbody>\
                      <tr>\
                          <td class="btn1">1:</td>\
                          <td class="tbtn img70 clickready">ポン</td>\
                          <td width="6"></td>\
                          <td class="btn2">2:</td>\
                          <td class="tbtn img71 clickready">カン</td>\
                          <td width="6"></td>\
                          <td class="btn3">3:</td>\
                          <td class="tbtn img72 clickready">チー</td>\
                      </tr>\
                  </tbody>\
              </table>\
              <table cellpadding="0" cellspacing="0" class="displaynone tp54">\
                  <tbody>\
                      <tr>\
                          <td class="btn1">1:</td>\
                          <td class="tbtn img71 clickready">カン</td>\
                      </tr>\
                  </tbody>\
              </table>\
              '
        });
        T.directionSelect = panel.getElementsByTagName("SELECT")[0];
        // TODO:
        la(panel, function(b) {
            b = b.target;
            if (!b.classList.contains("clickready") && !b.parentNode.classList.contains("clickready")) {
              return;
            }
            Q.updatePaiView(b);
        }, function(b) {
            "SELECT" != b.target.tagName && b.preventDefault()
        });
        return {
          // 描绘 panel 等 view
          drawPanel: function(table) {
            table.classList.add("editing");
            table.parentNode.insertBefore(overlay, table);
            table.parentNode.insertBefore(panel, table);
            Q.setPanelClass(0);
            Q.setPanelPos();
            let st = scrollTop();
            if (table.offsetTop < st) window.scrollTo(0, table.offsetTop);
            st = panel.offsetTop + panel.offsetHeight - (window.innerHeight || l.documentElement.clientHeight || l.body.clientHeight);
            if (scrollTop() < st) window.scrollTo(0, st);
          },
          // 根据 editing table 调整 panel 的位置
          adjustPanelOffset: function(clickedNode) {
            if (!panel.nextSibling) return;

            let sectionTable = clickedNode;
            while (sectionTable.tagName != 'TABLE') sectionTable = sectionTable.offsetParent;
            if (sectionTable.classList.contains("editing") || sectionTable == panel.nextSibling) return;

            window.scrollBy(0, sectionTable.offsetTop - panel.nextSibling.offsetTop);
            Q.closePanel();
            Q.drawPanel(sectionTable);
          },
          // 消去 panel
          closePanel: function() {
            let editingTable = panel.nextSibling;
            if (editingTable) {
              overlay.parentNode.removeChild(overlay);
              panel.parentNode.removeChild(panel);
              editingTable.classList.remove("editing");
              O.setFinalFshow();
            }
          },
          /**
           * a 的取值
           * 0: 立牌, 2: 摸牌, 4: 打牌
           * 10: m, 20: p, 30: s, 40: z
           * 50: 不合法, 52: 吃碰杠, 54: 杠
           * 50（副露） -> 变成 52（摸牌 按下 5） 或 54（打牌按下 5）
           *
           * 设置 panel 的 sw class 值和位置
           */
          setPanelClass: function(panelCode) {
            // 0（立牌） -> 删除 .pushed（立牌不能副露） -> 变成 2 或 4
            if (panelCode == 0) removePushedCells();
            // 50 -> 变成 52 或 54
            if (panelCode == 0 || panelCode == 50) { panelCode += T.editingCellRow(); }
            if (panelCode != 50) {
              panel.className = 'sw' + panelCode;
              Q.setPanelPos();
            }
          },
          setOverlayInnerHTML: function(html) {
            overlay.innerHTML = html;
          },
          setPanelPos: function() {
            panel.style.left = '0px';
            panel.style.top = '0px';
            var table = panel.nextSibling;
            let top = 0;
            let left = 0;
            let nd = table;
            while (nd) {
              top += nd.offsetTop || 0,
              left += nd.offsetLeft || 0;
              nd = nd.offsetParent;
            }
            left += ~~((table.offsetWidth - panel.offsetWidth) / 2);
            left = Math.min(left, l.body.offsetWidth - 1 - panel.offsetWidth);
            panel.style.left = Math.max(left, 0) + 'px';
            panel.style.top = top + table.offsetHeight + 'px'
          },
          /**
           * fulouCode: p, m, k, c
           * return fulou panel html
           */
          setFulouPanelHtml: function(fulouCode, pai) {
            // TODO: B.F
            let fulous = B.F[fulouCode + pai];
            if (!fulous) return;

            // 加杠和暗杠在同一个小 panel
            if (fulouCode == 'k') {
              let anGang = B.F['a' + pai];
              if (anGang) fulous = fulous.concat(anGang);
            }
            let fulouHtml = '<table cellpadding=0 cellspacing=0 class="displaynone tp99"><tr>';
            for (let i = 0; i < fulous.length; ++i) {
              if (i) fulouHtml += '<td width=20></td>';
              fulouHtml += `<td class=btn${i + 1}>${i + 1}:</td><td class="img${fulous[i]} clickready">${C.paiGroupHtml(fulouPaiWidth, fulous[i])}</td>`;
            }
            fulouHtml += '</tr></table>'
            panel.getElementsByClassName("furo")[0].innerHTML = fulouHtml;
            Q.setPanelClass(99);
          },
          // key event 的入口
          processKeyEvent: function(keyCode) {
            if (!panel.parentNode) return false;

            // 8: backspace, 144: numlock
            if (keyCode == 8 || keyCode == 144) return true;

            // 10 key
            if (keyCode >= 96 && keyCode < 106) keyCode = keyCode - 48;

            let panelClass = panel.className.substr(2);
            let panelTable, panelLabel, panelBtn, panelImg;
            // 没有小 panel ，即首次 keydown
            if (panelClass.length == 1) {
              switch (keyCode) {
                // 1 ~ 5(牌、副露的第一次 keydown)
                case 49:
                case 50:
                case 51:
                case 52:
                case 53:
                  Q.setPanelClass(10 * (keyCode - 48));
                  return true;
                // 7(←)
                case 55:
                  return T.moveEditingCellByDirectionSelect(-1);
                // 8(→)
                case 56:
                  return T.moveEditingCellByDirectionSelect(1);
                // 9(空白)
                case 57:
                  return T.addPai(0);
                // 0(摸切)
                case 48:
                  if (panelClass == 4) return Q.updatePaiView(panel.getElementsByClassName('img60')[0]);
              }
            // 第二次 keydown
            } else {
              // 10 key
              if (keyCode >= 48 && keyCode < 58) {
                panelTable = panel.getElementsByClassName('tp' + panelClass)[0];
                if (panelTable) panelLabel = panelTable.getElementsByClassName('btn' + (keyCode - 48))[0];
              }
              if (panelLabel) {
                // td(fulou)
                panelBtn = panelLabel.nextElementSibling;
                if (C.isPaiCell(panelBtn)) return Q.updatePaiView(panelBtn);

                // img(pai)
                panelImg = panelBtn.firstChild;
                if (C.isPaiCell(panelImg)) return Q.updatePaiView(panelImg);
              }
            }
            Q.setPanelClass(0);
            return false;
          },
          // paiCell: 牌、一组副露
          updatePaiView: function(paiCell) {
            var pushedCode = removePushedCells();
            let pai = C.getPaiNumFromClass(paiCell.className); // 牌字符串
            // 07: ←, 08: →, 0: 空白
            if (pai === 7 || pai === 8 || pai === 0) {
              // TODO: remove
              debugger;
              pd();
              Q.processKeyEvent(48 + (pai ? pai : 9));
              // TODO: ???
              ea.set(function() {
                Q.processKeyEvent(48 + pai % 10);
              })
            // 70: peng, 71: gang, 72: chi
            } else if (pai === 70 || pai === 71 || pai === 72) {
              Q.setPanelClass(0);
              if (pai != pushedCode) batchSetClass(panel.getElementsByClassName('img' + pai), 'pushed');
            } else if (pushedCode == 70) {
              Q.setFulouPanelHtml('p', pai);
            } else if (pushedCode == 71) {
              // k 包括加杠和暗杠
              T.editingCellRow() == 2
              let fulouCode = T.editingCellRow() == 2 ? 'm' : 'k';
              Q.setFulouPanelHtml(fulouCode, pai);
            } else if (pushedCode == 72) {
              Q.setFulouPanelHtml('c', pai);
            } else {
              T.addPai(pai);
            }
          }
        }
    }(),
    // TODO:
    // 分数以及结果相关
    P = function () {
      return function() {
        let fenpei = [
          ~~(q('ten01').value) + ~~(q('ten02').value),
          ~~(q('ten11').value) + ~~(q('ten12').value),
          ~~(q('ten21').value) + ~~(q('ten22').value),
          ~~(q('ten31').value) + ~~(q('ten32').value)
        ];
        q('ten03').innerHTML = ~~(q('ten00').value) + fenpei[0];
        q('ten13').innerHTML = ~~(q('ten10').value) + fenpei[1];
        q('ten23').innerHTML = ~~(q('ten20').value) + fenpei[2];
        q('ten33').innerHTML = ~~(q('ten30').value) + fenpei[3];
        let result;

        // let zongfenStr = document.getElementsByClassName('fanzhongDisplay__zongfen')[0].innerHTML;

        let zongfen = 0;
        let fanzhong = [];
        $('.fanzhongDisplay__row').each(function(i, e) {
          let name = e.getElementsByClassName('fanzhongDisplay__name')[0].textContent;
          let fenshu = parseInt(e.getElementsByClassName('fanzhongDisplay__fenshu')[0].textContent);
          zongfen += fenshu;
          fanzhong.push({ 'name_zh': name, 'fenshu': fenshu });
        });

        if (gebi('hulejia').selectedIndex < 4) {
          result =
            {
              'hule': {
                'chongjia': gebi('chongjia').selectedIndex < 4 ? gebi('chongjia').selectedIndex : null,
                'l': gebi('hulejia').selectedIndex,
                // TODO:
                'shoupai': finalStrings[gebi('hulejia').selectedIndex],
                'zongfen': zongfen,
                'fanzhong': fanzhong,
                'fenpei': fenpei
              }
            };
        } else {
          result =
            {
              'liuju': {
                'shoupai': ['', '', '', ''],
                'fenpei': fenpei
              }
            };
        }
        N.result = result;
      }
    }();
    // TODO: unknown
    function U(d, f) {
      debugger;
        if (l.activeElement === d)
            return !1;
        var c, e = d.options, a;
        if ("number" == typeof f)
            a = f;
        else {
            for (a = 0; a < e.length && e[a].value != f; ++a)
                ;
            if (a == e.length)
                return console.log("selOPT failed", d, f),
                !1
        }
        c = !0 !== e[a].selected;
        e[a].selected = !0;
        return c
    }
    // URL 的牌谱 json 反映到 view
    var W = function() {
        function setUnactiveElementValue(element, value) {
          if (document.activeElement === element || element.value == value) return;

          element.value = value;
        }
        return function(paipuJson, c, e) {
            // debugger;
            if (!paipuJson) return window.confirm('INVALID EMPTY JSON');

            let paipu;
            try {
              paipu = JSON.parse(paipuJson);
            } catch (I) {
              return alert(I);
            }
            // debugger;
            V && V();
            let title = paipu.title;
            if (title) setUnactiveElementValue(gebi('paipuTitle'), title);
            let player = paipu.player;
            if (player && player.length == 4) {
              setUnactiveElementValue(gebi('un0'), player[0]);
              setUnactiveElementValue(gebi('un1'), player[1]);
              setUnactiveElementValue(gebi('un2'), player[2]);
              setUnactiveElementValue(gebi('un3'), player[3]);
            }
            var a = !1;
            // TODO: aka. remove
            B.o(0, 0, 0);
            let log = paipu.log;
            if (e) {
              debugger;
            }
            if (log && log[c || 0]) {
              // TODO: c
              // debugger;
                log = log[c || 0];
                let jushuOption = gebi('kyoku').options[4 * log[0]['qipai']['quanfeng'] + log[0]['qipai']['jushu']];
                let b = !jushuOption.selected;
                let fenpei;
                if (log[log.length - 1]['hule']) {
                  fenpei = log[log.length - 1]['hule']['fenpei'];
                  let chongjia = log[log.length - 1]['hule']['chongjia'];
                  if (chongjia == null) chongjia = 4; // 自摸
                  gebi('chongjia').options[chongjia].selected = true;
                  let l = log[log.length - 1]['hule']['l'];
                  if (l) {
                    gebi('hulejia').options[l].selected = true;
                  } else {
                    gebi('hulejia').options[gebi('hulejia').options.length - 1].selected = true;
                  }
                } else {
                  fenpei = log[log.length - 1]['liuju']['fenpei'];
                  gebi('chongjia').options[gebi('hulejia').options.length - 1].selected = true;
                  gebi('hulejia').options[gebi('hulejia').options.length - 1].selected = true;
                }
                let g = false;
                for (let i = 0; i < 4; ++i) {
                  setUnactiveElementValue(gebi('ten' + i + '0'), log[0]['qipai']['defen'][i]);
                  setUnactiveElementValue(gebi('ten' + i + '1'), fenpei[i]);
                }
                if (!jushuOption.selected) a = 1;
                jushuOption.selected = true;
                // h.selected = !0;
                // k.selected = !0;
                if (17 == log.length) {
                    // if (!e || log[2].length)
                    //     a |= N[0].s(log[2]);
                    // if (!e || log[3].length)
                    //     a |= N[1].s(log[3]);
                    for (let c = 0; c < 4; ++c) {
                        let m = false;
                        // TODO:
                        if (!e || log[3 * c + 4].length)
                            m |= N[6 * c].s(log[3 * c + 4]);
                        if (!e || log[3 * c + 5].length)
                            m |= N[6 * c + 2].s(log[3 * c + 5]);
                        if (!e || log[3 * c + 6].length)
                            m |= N[6 * c + 4].s(log[3 * c + 6]);
                        if (m) {
                          O.buildFinalsAndDirections(c);
                          N.displayHiddenCells(c);
                        }
                        a |= m;
                    }
                    a && O.buildErrorsAndSkips();
                    a = b | g;
                    e = log[16];
                    log = log[0][0] % 4;
                    // b = u("restype");
                    // switch (e[0]) {
                    // case "和了":
                    //     for (g = 2; g < e.length; g += 2) {
                    //         m = e[g];
                    //         c = m[0];
                    //         h = m[1];
                    //         a |= U(b[c], c == h ? "ツモ" : "ロン");
                    //         c != h && (a |= U(b[h], "放銃"));
                    //         h = c == h ? "tsumo" : "ron";
                    //         m[3].match(/\d+枚∀?$/) ? (k = RegExp.lastMatch,
                    //         a |= U(u(h + (c == f ? 1 : 0))[c], RegExp.leftContext),
                    //         a |= U(u(h + "c")[c], k)) : (a |= U(u(h + (c == f ? 1 : 0))[c], m[3]),
                    //         a |= U(u(h + "c")[c], ""));
                    //         c = u("agari")[c];
                    //         for (var h = c.getElementsByClassName("yaku"), k = 0, n = []; k < h.length; ++k)
                    //             n.push(h[k]);
                    //         h = n;
                    //         c = c.getElementsByClassName("dora");
                    //         for (k = 4; k < m.length; ++k)
                    //             a = "ドラ" == m[k].substr(0, 2) ? a | U(c[0], m[k]) : "赤ドラ" == m[k].substr(0, 3) ? a | U(c[1], m[k]) : "裏ドラ" == m[k].substr(0, 3) ? a | U(c[2], m[k]) : a | U(h.shift(), m[k]);
                    //         for (; h.length; )
                    //             h.pop().options[0].selected = !0
                    //     }
                    //     break;
                    // case "流局":
                    //     console.log(e);
                    //     a |= U(b[0], 0 < e[1][0] ? "聴牌" : "不聴");
                    //     a |= U(b[1], 0 < e[1][1] ? "聴牌" : "不聴");
                    //     a |= U(b[2], 0 < e[1][2] ? "聴牌" : "不聴");
                    //     a |= U(b[3], 0 < e[1][3] ? "聴牌" : "不聴");
                    //     break;
                    // case "全員聴牌":
                    //     a |= U(b[0], "聴牌");
                    //     a |= U(b[1], "聴牌");
                    //     a |= U(b[2], "聴牌");
                    //     a |= U(b[3], "聴牌");
                    //     break;
                    // case "全員不聴":
                    //     a |= U(b[0], "不聴");
                    //     a |= U(b[1], "不聴");
                    //     a |= U(b[2], "不聴");
                    //     a |= U(b[3], "不聴");
                    //     break;
                    // case "流し満貫":
                    //     0 < e[1][0] && (a |= U(b[0], "流し満貫"));
                    //     0 < e[1][1] && (a |= U(b[1], "流し満貫"));
                    //©     0 < e[1][2] && (a |= U(b[2], "流し満貫"));
                    //     0 < e[1][3] && (a |= U(b[3], "流し満貫"));
                    //     break;
                    // case "九種九牌":
                    // case "三家和了":
                    // case "四風連打":
                    // case "四家立直":
                    // case "四槓散了":
                    //     a |= U(b[N.U], e[0]);
                    //     break;
                    // case "raw":
                    //     for (g = 0; 80 > g; ++g)
                    //         c = Math.floor(g / 20),
                    //         k = e[1 + c][g % 20] || 0,
                    //         a |= U(q("sel" + (g + 6)), k)
                    // }
                    a && L.appendFunction("CompileResult", P)
                }
            }
        }
    }();
    // TODO:
    function generatePaipu(encode) {
      // let zuoci = [
      //   [0, 1, 2, 3], [1, 2, 3, 0], [2, 3, 0, 1], [3, 0, 1, 2],
      //   [1, 0, 3, 2], [0, 3, 2, 1], [3, 2, 1, 0], [2, 1, 0, 3],
      //   [2, 3, 1, 0], [3, 1, 0, 2], [1, 0, 2, 3], [0, 2, 3, 1],
      //   [3, 2, 0, 1], [2, 0, 1, 3], [0, 1, 3, 2], [1, 3, 2, 0]
      // ];
      let zuoci = [
        [0, 1, 2, 3], [1, 2, 3, 0], [2, 3, 0, 1], [3, 0, 1, 2],
        [0, 1, 2, 3], [1, 2, 3, 0], [2, 3, 0, 1], [3, 0, 1, 2],
        [1, 0, 3, 2], [0, 3, 2, 1], [3, 2, 1, 0], [2, 1, 0, 3],
        [1, 0, 3, 2], [0, 3, 2, 1], [3, 2, 1, 0], [2, 1, 0, 3],
      ];
      let qipai =
        {
          'qipai': {
            // TODO:
            'quanfeng': ~~(gebi('kyoku').selectedIndex / 4),
            'jushu': gebi('kyoku').selectedIndex % 4,
            // TODO:
            'zuoci': zuoci[gebi('kyoku').selectedIndex],
            'defen': [~~(gebi('ten00').value), ~~(gebi('ten10').value), ~~(gebi('ten20').value), ~~(gebi('ten30').value)],
            'shoupai': [rawToShoupai(N[0].raw.slice()), rawToShoupai(N[6].raw.slice()), rawToShoupai(N[12].raw.slice()), rawToShoupai(N[18].raw.slice())],
          }
        };
      let log = [qipai];
      let _log = rawToPaipu(
        [N[2].raw.slice(), N[4].raw.slice(), N[8].raw.slice(), N[10].raw.slice(), N[14].raw.slice(), N[16].raw.slice(), N[20].raw.slice(), N[22].raw.slice()],
      );
      if (_log) log = log.concat(_log);
      // 点和的和牌形
      log.push(JSON.parse(JSON.stringify(N.result)));
      if (N.result && N.result['hule'] && _log.length && _log[_log.length - 1]['dapai']) {
        log[log.length - 1]['hule']['shoupai'] += _log[_log.length - 1]['dapai']['p'];
      }
      let paipu = {
        title: gebi('paipuTitle').value,
        player: [q('un0').value, q('un1').value, q('un2').value, q('un3').value],
        qijia: 0,
        log: [log]
      };
      paipu = JSON.stringify(paipu);
      if (encode) paipu = S.encode(paipu);
      return paipu;
    }
    // TODO: unknown
    // url 相关（自动保存等）
    var S = function() {
      // var d = []
      var operationLogs = [];
        // , c = !1;
      return {
        // TODO: remove ts
        updateURL: function() {
          if (gebi('autosave').checked) window.location.replace('#json=' + generatePaipu(true));
        },
        // TODO: unknown
        u: function(c, a, b) {
          debugger;
            var e = "/6/mjlog_storage.cgi";
            c && (e += "?" + c);
            c.match(/^load=(\d{8,10}gm\-[0-9a-f]{4}\-\d{4,5}\-x?[0-9a-f]{8,16})$/) && (e = "/5/mjlog2json.cgi?" + RegExp.$1);
            var d = new XMLHttpRequest;
            d.onreadystatechange = function() {
                4 == d.readyState && 200 == d.status && b && b(d.responseText)
            }
            ;
            d.open(void 0 === a ? "GET" : "POST", e, !0);
            d.send(a)
        },
        // TODO: remove
        N: function() {
          debugger;
            setTimeout(function() {
                var e = JSON.stringify(d);
                d.splice(0, d.length);
                c = !0;
                S.u("", "file=" + H.sync + "&json=" + encodeURIComponent(e), function(a) {
                    W(a, 0, !1);
                    S.N();
                    c = !1;
                    L.appendFunction("storage.execPacket", S.updateView)
                })
            }, 3E3)
        },
        encode: function(uri) {
          return encodeURIComponent(uri).replace(/%3D/gi, '=').replace(/%2B/gi, '+').replace(/%2C/gi, ',').replace(/%3A/gi, ':');
        },
        updateView: function() {
          while (operationLogs.length) {
            let operationLog = operationLogs.shift(); // log pos(starts from 2)
            let pathName = ma[operationLog.path];
            let val = operationLog.val; // pai string
            if (pathName) {
              let logNode = gebi(pathName);
              if (logNode.tagName == 'INPUT') {
                if (logNode.value != val) {
                  logNode.value = val;
                  logNode.onchange.apply(logNode);
                }
              } else if (logNode.tagName == 'SELECT') {
                if (logNode.tagName && logNode.selectedIndex != val) {
                  logNode.options[val].selected = true;
                  logNode.onchange.apply(logNode);
                }
              }
            }
            let path = operationLog.path.split('/');
            if (path[1] == 'log' && path[2] == 0 && path[3] >= 2 && path[3] < 14) {
              let row = (~~path[3]) - 2;
              let col = ~~path[4];
              // TODO: split log
              let section = Math.floor(row / 3); // section
              // log pos -> view pos
              if (N[6 * section + row % 3 * 2].set(col, val)) {
                O.buildFinalsAndDirections(section);
                O.buildErrorsAndSkips();
              }
            }
          }
        },
        appendOperationLog: function(operationLog) {
          operationLogs.push(operationLog);
          L.appendFunction('storage.execPacket', S.updateView);
          L.appendFunction('storage.autoSave', S.updateURL)
        }
      }
    }(),
    // TODO: rewrite
    Z = {
        paipuTitle: '/title',
        disp: '/rule/disp',
        un0: '/player/0',
        un1: '/player/1',
        un2: '/player/2',
        un3: '/player/3',
        kyoku: '/log/0/0/0',
        hulejia: '/log/0/0/1',
        chongjia: '/log/0/0/2',
        ten00: '/log/0/1/0',
        ten01: '/log/0/1/1',
        ten02: '/log/0/1/2',
        ten10: '/log/0/1/3',
        ten11: '/log/0/1/4',
        ten12: '/log/0/1/5',
        ten20: '/log/0/1/6',
        ten21: '/log/0/1/7',
        ten22: '/log/0/1/8',
        ten30: '/log/0/1/9',
        ten31: '/log/0/1/10',
        ten32: '/log/0/1/11',
    }, ma, na = {}, oa;
    for (oa in Z)
        na[Z[oa]] = oa;
    ma = na;
    var V;
    V = function() {
        function d() {
            "kyoku" == this.id ? (O.buildErrorsAndSkips(),
            L.appendFunction("CompileResult", P)) : "aka51" == this.id || "aka52" == this.id || "aka53" == this.id ? (B.o(0, 0, 0),
            O.buildErrorsAndSkips()) : L.appendFunction("CompileResult", P);
            S.appendOperationLog({
                path: Z[this.id],
                val: this.selectedIndex
            })
        }
        function inputOnchange() {
          S.appendOperationLog({
            path: Z[this.id],
            val: this.value
          })
        }
        V = void 0;
        var e;
        var a;
        e = u("cells");
        N.initialCells(e);
        O.initialFinalCells(e);
        e = u("ten");
        // TODO: remove
        // for (let i = 0; i < 4; ++i) {
        //   e[2 * i + 0].innerHTML =
        //     `<table style="text-align:center;"><tr><td class=ten${(i + 3) % 4} rowspan=2>0</td><td class=ten${(i + 2) % 4}>0</td><td class=ten${(i + 1) % 4} rowspan=2>0</td></tr><tr><td><input type=text id=ten${(i + 0) % 4} class=ten${(i + 0) % 4} value=0 size=4 style="width:${36 * 1.3}px;text-align:center;"/></td></tr></table>`;
        //   e[2 * i + 1].innerHTML = `<table style="text-align:right;"><tr><td class=ten${(i + 3) % 4} rowspan=2>0</td><td class=ten${(i + 2) % 4}>0</td><td class=ten${(i + 1) % 4} rowspan=2>0</td></tr><tr><td class=ten${(i + 0) % 4}>0</td></tr></table>`;
        // }
        let inputNodes = l.getElementsByTagName('INPUT');
        for (let i = 0; i < inputNodes.length; ++i) {
          if (inputNodes[i].id == 'autosave') continue;

          inputNodes[i].classList.add('clickready');
          inputNodes[i].onchange = inputOnchange;
        }
        gebi('ten00').onchange = gebi('ten01').onchange = gebi('ten02').onchange
        = gebi('ten10').onchange = gebi('ten11').onchange = gebi('ten12').onchange
        = gebi('ten20').onchange = gebi('ten21').onchange = gebi('ten22').onchange
        = gebi('ten30').onchange = gebi('ten31').onchange = gebi('ten32').onchange
        = function() {
          L.appendFunction('CompileResult', P);
          S.appendOperationLog({
            path: Z[this.id],
            val: this.value
          })
        };
        gebi('kyoku').onchange = gebi('hulejia').onchange = gebi('chongjia').onchange = function() {
          L.appendFunction('CompileResult', P);
          L.appendFunction('storage.autoSave', S.updateURL);
        }
        gebi('saveFanzhong').onclick = function() {
          L.appendFunction('CompileResult', P);
          L.appendFunction('storage.autoSave', S.updateURL)
        }
        gebi('autosave').onchange = function() {
          L.appendFunction('storage.autoSave', S.updateURL)
        };
        // e = l.getElementsByTagName("SELECT");
        // for (a = 0; a < e.length; ++a)
        //     e[a].classList.add("clickready"),
        //     e[a].onchange = d,
        //     e[a].id || (e[a].id = "sel" + a,
        //     Z[e[a].id] = "/log/0/16/" + Math.floor((a - 6) / 20 + 1) + "/" + (a - 6) % 20);
        // TODO: end
        e = u("detail"); // 番种详细
        // e[0].onclick = e[1].onclick = e[2].onclick = e[3].onclick = function() {
        //     x();
        //     this.parentNode.parentNode.parentNode.parentNode.classList.toggle("showdetail"); // 和了栏
        // }
        // ;
        q('editastext').onclick = function() {
            pd();
            var a = window.prompt(this.innerText, JSON.stringify(JSON.parse(generatePaipu())['log'][0]));
            null !== a && W(a, 0, !1);
            L.appendFunction('storage.autoSave', S.updateURL)
        };
        q("loadfromurl").onclick = function() {
            pd();
            var a = window.prompt(this.innerText + "\n空の配牌/取牌/打牌は現在の内容を保持します", "");
            if (null === a || null === a.match(/[#\?]json=([^"&]+)/))
                return !1;
            a = RegExp.$1;
            a = decodeURIComponent(a);
            W(a, 0, !0);
            L.appendFunction("storage.autoSave", S.updateURL)
        }
        ;
        q("saveasviewer").onclick = function() {
            pd();
            window.open("paipu.html#" + generatePaipu(true), "_blank")
        };
        // TODO: remove
        q("clearfornext").onclick = function() {
            if (window.confirm("次局入力用にルール/タイトル以外の情報をクリアします。\n※現在の牌譜は「SAVE AS VIEWER URL」で保存してください")) {
                var a = {
                    title: [gebi('paipuTitle').value],
                    player: [q("un0").value, q("un1").value, q("un2").value, q("un3").value],
                    rule: {
                        disp: q("disp").value,
                        aka51: q("aka51").selectedIndex,
                        aka52: q("aka52").selectedIndex,
                        aka53: q("aka53").selectedIndex
                    },
                    // log: [[[q("kyoku").selectedIndex, q("honba").selectedIndex, q("kyoutaku").selectedIndex], [100 * ~~u("ten0")[1].innerText, 100 * ~~u("ten1")[1].innerText, 100 * ~~u("ten2")[1].innerText, 100 * ~~u("ten3")[1].innerText]]]
                    log: [[[q("kyoku").selectedIndex], [100 * ~~u("ten0")[1].innerText, 100 * ~~u("ten1")[1].innerText, 100 * ~~u("ten2")[1].innerText, 100 * ~~u("ten3")[1].innerText]]]
                };
                S.u("", "file=" + H.sync + "&json=");
                // var c = [[q("kyoku").selectedIndex, q("honba").selectedIndex, q("kyoutaku").selectedIndex], [100 * ~~u("ten0")[1].innerText, 100 * ~~u("ten1")[1].innerText, 100 * ~~u("ten2")[1].innerText, 100 * ~~u("ten3")[1].innerText]];
                var c = [[q("kyoku").selectedIndex], [100 * ~~u("ten0")[1].innerText, 100 * ~~u("ten1")[1].innerText, 100 * ~~u("ten2")[1].innerText, 100 * ~~u("ten3")[1].innerText]];
                a.log[0][2] += ~~((~~q("ten0").value + ~~q("ten1").value + ~~q("ten2").value + ~~q("ten3").value - (~~u("ten0")[1].innerText + ~~u("ten1")[1].innerText + ~~u("ten2")[1].innerText + ~~u("ten3")[1].innerText)) / 10);
                S.appendOperationLog({
                    path: "/title",
                    val: a.title
                });
                S.appendOperationLog({
                    path: "/player",
                    val: a.player
                });
                // S.appendOperationLog({
                //     path: Z.disp,
                //     val: a.rule.disp
                // });
                S.appendOperationLog({
                    path: "/log/0/0",
                    val: c[0]
                });
                S.appendOperationLog({
                    path: "/log/0/1",
                    val: c[1]
                })
            }
        }
        ;
        H.log && H.log.match(/^\d{8,10}gm\-([0-9a-f]{4})\-\d{4,5}\-x?[0-9a-f]{8,16}$/) && parseInt(RegExp.$1, 16) & 16 && (F = !0)
        // TODO: end
    };
    // 设置鼠标在 clickready 上悬浮时的 outline
    document.body.onmouseover = function(e) {
      let target = e.target;
      if (target.classList.contains('disabled')) return false;
      if (!isClickReady(target)) {
        target = target.parentNode;
        if (!target || !isClickReady(target)) return;
      }
      let rect = target.getBoundingClientRect();
      let outline = gebi('outline');
      outline.style.visibility = '';
      outline.style.top = (document.body.scrollTop || document.documentElement.scrollTop) + rect.top + 'px';
      outline.style.left = (document.body.scrollLeft || document.documentElement.scrollLeft) + rect.left + 'px';
      outline.style.width = rect.width + 'px';
      outline.style.height = rect.height + 'px';
    };
    document.body.onmouseout = function() {
      let outline = gebi('outline');
      outline.style.visibility = 'hidden';
    }
    // d: element
    // f, c: function(event)
    // d.onmousedown = f, d.onmouseup = c
    function la(d, f, c) {
        d.ma = f;
        d.na = c;
        y && (d.ontouchstart = f,
        d.ontouchcancel = d.ontouchend = c);
        d.onmousedown = f;
        d.onmouseup = c
    }
    // d: element
    // return: .editing 中的是 panel 还是 cells，或 null
    function editingType(node) {
      let editings = gebc('editing');
      if (!editings.length) { return null; }
      for (let editing = editings[0]; node; node = node.parentNode) {
        if (node.id == 'panel') { return 'panel'; }
        if (node == editing) { return 'cells'; }
      }
      return null;
    }
    la(document.body, function(e) {
      let target = e.target;
      let f = editingType(target);
      if (f && isClickReady(target)) {
        pd();
      }
      if (f != 'panel') {
        // 消去 panel
        // TODO:
        T.clickNode(f ? e.target : void 0)
      }

      let outline = gebi('outline');
      outline.style.visibility = 'hidden';
    }, function() {
      ea.set();
    });

    document.body.onclick = function(e) {
      let target = e.target;
      if (target.tagName == 'BUTTON') {
        // 可开闭
        if (target.classList.contains('toggle')) {
          pd(); // preventDefault
          let toggleNode = target.parentNode.nextElementSibling; // toggle 对象
          target.innerHTML = (toggleNode.classList.contains('collapse') ? '-' : '+') + target.innerHTML.substring(1);
          toggleNode.classList.toggle('collapse');
        }
        return false;
      }
      if (target.tagName != 'IMG' || !isClickReady(target) || target.classList.contains('disabled') || !target.parentNode.classList.contains("cells"))
        return true;
      // 分割编辑对象
      let nd = target;
      while (nd.tagName != 'TABLE') { nd = nd.parentNode; }
      if (nd.classList.contains("editing")) { return false; }
      Q.drawPanel(nd);
      T.clickNode(target);
    };
    window.onkeydown = function(e) {
      let keyCode = e.keyCode;
      let hasEvent;
      if (keyCode >= 37 && keyCode <= 40) {
        // 跳过 processKeyEvent 入口直接移动 T.editingCell
        hasEvent = T.moveEditingCellByKeycode(keyCode);
      } else {
        hasEvent = Q.processKeyEvent(keyCode);
      }
      if (hasEvent) pd();
    };
    if (l.body.classList === void 0) {
      q("main").innerHTML += "<br>このブラウザでは必要な機能の一部が利用できません<br><br>classList=" + l.body.classList + "<br>"
    } else if (H.json) {
      L.appendFunction("CompileResult", P);
      W(decodeURIComponent(H.json), H.ts, !1);
      q("main").style.display = "";
    } else if (H.log) {
      S.u("load=" + H.log, void 0, function(d) {
        if (void 0 === H.ts)
            a: {
                var f = d;
                try {
                    f = JSON.parse(f)
                } catch (e) {
                    alert(e);
                    break a
                }
                d = f.title;
                var f = f.log, c;
                c = '<div class="caption f100"><button class=toggle>-</button>局一覧</div><div class="section f075" style="padding:20px;">';
                d && 2 == d.length && (c += d[0] + " " + d[1] + "<br>",
                c += "<br>");
                for (ts = 0; ts < f.length; ++ts)
                    d = f[ts][0],
                    ts && (c += "<br>"),
                    c += '<a href="' + location.href + "&ts=" + ts + '" target=_blank>' + fa(~~(d[0] / 4)) + (d[0] % 4 + 1) + "局" + d[1] + "本場 供託" + 1E3 * d[2] + "点</a><br>";
                q("main").innerHTML = c + "</div>"
            }
        else
            W(d, H.ts, !1),
            L.appendFunction("CompileResult", P, !0),
            location.replace(location.protocol + "//" + location.hostname + location.pathname + "#json=" + generatePaipu(!0))
      })
    } else {
      L.appendFunction("CompileResult", P);
      W("{}", 0, !1);
      q("main").style.display = "";
    }
}
)();
//
