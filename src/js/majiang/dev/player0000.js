"use strict";

const Majiang = {
    Shoupai: require('../shoupai'),
    Game:    require('../game'),
    Util:    require('../util')
};

module.exports = class Player {

constructor(id) { this._id = id }

/**
 * @param {array} msg 信息
 * @param {function} callback 回调函数
 *
 * @return 根据信息内容执行相应函数（结束后执行回调函数）
 */
action(msg, callback) {
  this._callback = callback;

  if (msg.kaiju) this.kaiju(msg.kaiju);
  else if (msg.qipai) this.qipai(msg.qipai);
  else if (msg.zimo) this.zimo(msg.zimo);
  else if (msg.dapai) this.dapai(msg.dapai);
  else if (msg.fulou) this.fulou(msg.fulou);
  else if (msg.gang) this.gang(msg.gang);
  else if (msg.gangzimo) this.zimo(msg.gangzimo, 'gangkai')
  else if (msg.hule) this.hule(msg.hule);
  else if (msg.liuju) this.liuju(msg.liuju);
  else if (msg.jieju) this.jieju(msg.jieju);
}

// 开局（设置玩家名和起家）
kaiju(kaiju) {
  this._model = {
    player:  kaiju.player,
    qijia:   kaiju.qijia,
  };
}

// 起牌（初始化牌谱）
qipai(qipai) {
  let model = this._model;

  model.quanfeng = qipai.quanfeng;
  model.menfeng = qipai.zuoci.indexOf(this._id);
  model.defen = qipai.defen;

  this._shoupai = Majiang.Shoupai.fromString(qipai.shoupai[model.menfeng]);
  this._paishu = 136 - 13 * 4;
}

// 摸牌（牌山减 1 ，相应手牌加 1）
zimo(zimo, option) {
  let model = this._model;

  this._paishu--;

  if (zimo.l != model.menfeng) {
    if (this._callback) this._callback();
  } else {
    this._shoupai.zimo(zimo.p);

    if (this._callback) this.action_zimo(zimo, option);
  }
}

// 打牌
dapai(dapai) {
  let model = this._model;

  this._eval_cache = {};

  if (dapai.l == model.menfeng) {
    this._shoupai.dapai(dapai.p);

    if (this._callback) this._callback();
  } else {
    if (this._callback) this.action_dapai(dapai);
  }
}

// 副露
fulou(fulou) {
  let model = this._model;

  if (fulou.l != model.menfeng) {
    if (this._callback) this._callback();
  } else {
    this._shoupai.fulou(fulou.m);

    if (fulou.m.match(/^[mpsz]\d{4}/)) {
      if (this._callback) this._callback();
    } else {
      if (this._callback) this.action_fulou(fulou);
    }
  }
}

// 杠
gang(gang) {
  let model = this._model;

  if (gang.l == model.menfeng) {
    let p = (gang.m.match(/^[mpsz]\d{4}$/))
          ? gang.m.substr(0, 2) // 暗杠
          : gang.m[0] + gang.m.substr(-1)
    this._shoupai.gang(p);

    if (this._callback) this._callback();
  } else {
    if (!gang.m.match(/^[mpsz]\d{4}/)) {
      if (this._callback) this.action_gang(gang); // 加杠
    } else {
      if (this._callback) this._callback();
    }
  }
}

hule(hule)     { this.wait(); }

liuju(liuju) { this.wait(); }

jieju(jieju)   { this.wait(); }

wait() { this._callback() }

// 摸牌后的动作（自家）。和了、杠、打牌
action_zimo(zimo, option) {
  let mianzi;
  if (this.select_hule(null, option)) this._callback({hule: '-'});
  else if (mianzi = this.select_gang()) this._callback({gang: mianzi});
  else this._callback({dapai: this.select_dapai()});
}

// 打牌后的动作（他家）。和了、副露
action_dapai(dapai) {
  let mianzi;
  if (this.select_hule(dapai)) this._callback({hule: '-'});
  else if (mianzi = this.select_fulou(dapai)) this._callback({fulou: mianzi});
  else this._callback();
}

// 副露后的动作（自家）。打牌
action_fulou(fulou) {
  this._callback({dapai: this.select_dapai()});
}

// 杠后的动作（他家）。抢杠
action_gang(gang) {
  if (this.select_hule(gang, 'qianggang')) this._callback({hule: '-'});
  else this._callback();
}

// 打牌候选
get_dapai() {
  return Majiang.Game.get_dapai(this._shoupai);
}

// 吃牌面子候选，海底牌可以吃
get_chi_mianzi(dapai) {
  let model = this._model;
  let p = dapai.p
      + ['', '+', '=', '-'][(4 + dapai.l - model.menfeng) % 4];
  return Majiang.Game.get_chi_mianzi(this._shoupai, p);
}

// 碰牌面子候选，海底牌可以碰
get_peng_mianzi(dapai) {
  let model = this._model;
  let p = dapai.p
      + ['', '+', '=', '-'][(4 + dapai.l - model.menfeng) % 4];
  return Majiang.Game.get_peng_mianzi(this._shoupai, p);
}

// 杠牌面子候选，海底牌可以杠
get_gang_mianzi(dapai) {
  let model = this._model;
  if (dapai) {
    let p = dapai.p
        + ['', '+', '=', '-'][(4 + dapai.l - model.menfeng) % 4];
    return Majiang.Game.get_gang_mianzi(this._shoupai, p);
  }
  else {
    return Majiang.Game.get_gang_mianzi(this._shoupai, null);
  }
}

// 能否和牌
allow_hule(data, option) {
  let model = this._model;

  // 杠开、抢杠、妙手、海底一定能和
  let fanzhong = option != null
        || this._paishu == 0;
  if (data) {
    // 铳和
    let p = (data.p ? data.p.substring(0, 2)
          : data.m[0] + data.m.substring(data.m.length - 1))
        + ['', '+', '=', '-'][(4 + data.l - model.menfeng) % 4];
    return Majiang.Game.allow_hule(this._shoupai, p,
                    model.quanfeng, model.menfeng,
                    fanzhong);
  } else {
    // 自摸
    return Majiang.Game.allow_hule(this._shoupai, null,
                    model.quanfeng, model.menfeng,
                    fanzhong);
  }
}


select_fulou(dapai) {}

select_gang() {}

select_dapai() {

    // let dapai, max = 0;
    // let n_xiangting = Majiang.Util.xiangting(this._shoupai);
    // for (let p of this.get_dapai()) {
    //     let shoupai = this._shoupai.clone().dapai(p);
    //     if (Majiang.Util.xiangting(shoupai) > n_xiangting) continue;
    //     let n_tingpai = Majiang.Util.tingpai(shoupai).length;
    //     if (n_tingpai >= max) {
    //         max = n_tingpai;
    //         dapai = p;
    //     }
    // }
    // return dapai;
    this.get_dapai().shift();
}

select_hule(data, option) {
    return this.allow_hule(data, option);
}

}
