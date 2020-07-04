"use strict";

const Majiang = {
  Shan: require('./shan'),
};

module.exports = class SuanPai {

constructor() {
  // 视角的可见牌数
  this._paishu = {
    m: [0, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    p: [0, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    s: [0, 4, 4, 4, 4, 4, 4, 4, 4, 4],
    z: [0, 4, 4, 4, 4, 4, 4, 4]
  };
  // 视角的门风
  this._menfeng = 0;
}

// 可见牌数减 1
diaopai(p) {
  this._paishu[p[0]][p[1]]--;
}

// 可见牌数
paishu(p) {
  return this._paishu[p[0]][p[1]];
}

// 所有可见牌数
paishu_all() {
  let paishu = {};
  for (let s of ['m', 'p', 's', 'z']) {
    for (let n of (s == 'z' ? [1, 2, 3, 4, 5, 6, 7] : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])) {
      paishu[s + n] = this.paishu(s + n);
    }
  }
  return paishu;
}

// TODO: qipai -> shoupai, mengfeng -> unneed
// 从可见牌数里减去起牌
qipai(qipai, menfeng) {
  this._menfeng = menfeng;

  let paistr = qipai.shoupai[menfeng];
  for (let suitstr of paistr.match(/[mpsz]\d[\d\+\=\-]*/g)) {
    let s = suitstr[0];
    for (let n of suitstr.match(/\d/g)) {
      this.diaopai(s + n);
    }
  }
}

// 从可见牌数里减去视角自摸牌
zimo(zimo) {
  if (zimo.l == this._menfeng) this.diaopai(zimo.p);
}

// 从可见牌数里减去他人打牌
dapai(dapai) {
  if (dapai.l != this._menfeng) this.diaopai(dapai.p);
}

// 从可见牌数里减去他人副露
fulou(fulou) {
  if (fulou.l != this._menfeng) {
    let s = fulou.m[0];
    for (let n of fulou.m.match(/\d(?![\+\=\-])/g)) {
      this.diaopai(s + n);
    }
  }
}

// 从可见牌数里减去他人杠
gang(gang) {
  if (gang.l != this._menfeng) {
    if (gang.m.match(/^[mpsz]\d{4}$/)) {
      let s = gang.m[0];
      for (let n of gang.m.match(/\d/g)) {
        this.diaopai(s + n);
      }
    } else {
      let s = gang.m[0], n = gang.m.substr(-1);
      this.diaopai(s + n);
    }
  }
}

// TODO: suan_weixian(p, l)

}
