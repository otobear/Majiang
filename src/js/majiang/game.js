"use strict";

const Majiang = {
  Shan: require('./shan'),
  Shoupai: require('./shoupai'),
  He: require('./he'),
  Util: require('./util')
};

/*
 * 各个动作的流程（以 zimo() 为例）
 * 1. 改变 shan, shoupai 等 model
 * 2. 将动作加入 paipu
 * 3. 通过 call_players 执行各个 player 的相应方法（这里为 zimo）
 * 4.1. 动作当事者（这里为摸牌的 player）改变 _shoupai 等 model，
 * 并通过相应方法进行回复（这里为 action_zimo）至 _reply
 * 4.2 其他玩家回复空消息至 _reply
 * 5. 所有人回复后，通过 next() 方法进入下一个动作（这里为 reply_zimo）
 */
module.exports = class Game {

constructor() {
  this._model = {
    title: new Date().toLocaleString(),
    // TODO: i18n
    player: ['私', 'Aさん', 'Bさん', 'Cさん'],
    // TODO: random
    // qijia: Math.floor(Math.random() * 4),
    qijia: 0,
    quanfeng: 0,
    jushu: 0,
    defen: [0, 0, 0, 0],
    shan: null,
    shoupai: [],
    he: [],
    // 风位 => 玩家
    player_id: [0, 1, 2, 3],
  };

  switch (this._model.qijia) {
    case 1:
      this._model.player_id = [1, 2, 3, 0];
      break;
    case 2:
      this._model.player_id = [2, 3, 0, 1];
      break;
    case 3:
      this._model.player_id = [3, 0, 1, 2];
      break;
  }

  this._player = [];

  // TODO: 顺位点
  // this._ranking_point = [90, 10, -30, -70];

  this._reply = [];

  this._speed = 3;
  this._stop = false;
  this._delay = 0;
}

// 停止
stop() {
  this._stop = true;
  this._timeout_id = clearTimeout(this._timeout_id);
}

// 开始（根据 _status 决定下一个动作）
start() {
  this._stop = false;
  if (!this._timeout_id) this._timeout_id = setTimeout(() => this.next(), 0);
}

// 延迟执行函数，时间由 _speed 和参数 timeout 决定
delay(callback, timeout) {
  // timeout 赋值的优先顺序
  // 1. this._speed == 0 -> 0
  // 2. timeout != null -> timeout
  // 3. max(500, this._speed * 200)
  timeout = this._speed == 0 ? 0
      : timeout == null ? Math.max(500, this._speed * 200)
      : timeout
  setTimeout(callback, timeout);
}

// TODO: type -> delete
// 令所有玩家立即执行无回调的 action
notify_players(type, msg) {
  for (let l = 0; l < 4; l++) {
    setTimeout(() => {
      this._player[this._model.player_id[l]].action(msg[l]);
    }, 0);
  }
}

// 清空回复，令所有玩家执行 action 并延时进入下一个动作
call_players(type, msg, timeout) {
  // timeout 赋值的优先顺序
  // 1. this._speed == 0 -> 0
  // 2. timeout != null -> timeout
  // 3. this._speed * 200
  timeout = (!this._speed || timeout == null) ? this._speed * 200 : timeout;

  this._status = type;
  this._reply = [];
  for (let l = 0; l < 4; l++) {
    let id = this._model.player_id[l];
    setTimeout(() => {
      this._player[id].action(
        msg[l],
        reply => this.reply(id, reply),
      );
    }, 0);
  }
  this._timeout_id = setTimeout(() => this.next(), timeout);
}

// 接收 action 的回复，所有玩家收到后立即进入下一个动作
reply(id, reply = {}) {
  this._reply[id] = reply;
  if (this._reply.filter(x => x).length < 4) return;
  if (!this._timeout_id) this._timeout_id = setTimeout(() => this.next(), 0);
}

// 将事件加入本局牌谱
add_paipu(paipu) {
  this._paipu.log[this._paipu.log.length - 1].push(paipu);
}

// 开局（设置玩家名和起家，结束后自动进入起牌）
kaiju() {
  if (this._view) this._view.kaiju();

  this._paipu = {
    title: this._model.title,
    player: this._model.player.concat(),
    qijia: this._model.qijia,
    log: [],
    defen: this._model.defen.concat(),
    point: [0, 0, 0, 0],
    rank: [1, 2, 3, 4],
  };

  this._status = null;

  let msg = [];
  for (let id = 0; id < 4; id++) {
    // TODO: msg[l] = kaiju: { ... }
    msg[id] = JSON.parse(JSON.stringify({
      kaiju: {
        player: this._paipu.player,
        qijia: this._paipu.qijia,
      }
    }));
  }
  this.notify_players('kaiju', msg);

  if (!this._stop) this.qipai();
}

// 起牌（初始化，结束后自动进入摸牌）
qipai(shan) {
  let model = this._model;

  model.shan = shan || new Majiang.Shan();
  let qipai = [ [], [], [], [] ];
  for (let l = 0; l < 4; l++) {
    for (let i = 0; i < 13; i++) {
      qipai[l].push(model.shan.zimo());
    }
    model.shoupai[l] = new Majiang.Shoupai(qipai[l]);
    model.he[l] = new Majiang.He();
  }
  model.lunban = -1;

  this._dapai = null;
  this._gang = null;

  this._hule = null;

  this._paipu.defen = model.defen.concat();
  this._paipu.log.push([]);
  let paipu = {
    qipai: {
      quanfeng: model.quanfeng,
      jushu: model.jushu,
      zuoci: model.player_id.map(s => s),
      defen: model.player_id.map(id => model.defen[id]),
      shoupai: model.shoupai.map(s => s.toString()),
    }
  };
  this.add_paipu(paipu);

  let msg = [];
  for (let l = 0; l < 4; l++) {
    msg[l] = JSON.parse(JSON.stringify(paipu));
    for (let i = 0; i < 4; i++) {
      if (i != l) msg[l].qipai.shoupai[i] = '';
    }
  }
  this.notify_players('qipai', msg);

  if (this._view) this._view.redraw();

  if (!this._stop) this.zimo();
}

// TODO: zimo -> mopai
// 摸牌（牌山减 1 ，相应手牌加 1）
zimo() {
  let model = this._model;

  if (model.shan.paishu() == 0) {
    this.delay(() => this.liuju(), 0);
    return;
  }

  model.lunban = (model.lunban + 1) % 4;

  let zimo = model.shan.zimo();
  model.shoupai[model.lunban].zimo(zimo);

  let paipu = { zimo: { l: model.lunban, p: zimo } };
  this.add_paipu(paipu);

  let msg = [];
  for (let l = 0; l < 4; l++) {
    msg[l] = JSON.parse(JSON.stringify(paipu));
    if (l != model.lunban) msg[l].zimo.p = '';
  }
  this.call_players('zimo', msg);

  if (this._view) this._view.update(paipu);
}

// 打牌（相应牌河加 1）
dapai(dapai) {
  let model = this._model;

  model.shoupai[model.lunban].dapai(dapai);
  model.he[model.lunban].dapai(dapai);

  this._dapai = dapai;

  let paipu = { dapai: { l: model.lunban, p: dapai } };
  this.add_paipu(paipu);

  // TODO: ???
  if (this._gang) this.kaigang();

  let msg = [];
  for (let l = 0; l < 4; l++) {
    msg[l] = JSON.parse(JSON.stringify(paipu));
  }
  this.call_players('dapai', msg);

  if (this._view) this._view.update(paipu);
}

// 副露（设置打牌者的河以及鸣牌者的手牌）
fulou(fulou) {
  let model = this._model;

  let d = fulou.match(/[\-\=\+]/)[0];
  model.he[model.lunban].fulou(d);

  model.lunban = (model.lunban + { '-': 1, '=': 2, '+': 3 }[d]) % 4;
  model.shoupai[model.lunban].fulou(fulou);

  if (fulou.match(/^[mpsz]\d{4}/)) {
    this._gang = fulou; // 大明杠
  }

  let paipu = { fulou: { l: model.lunban, m: fulou } };
  this.add_paipu(paipu);

  let msg = [];
  for (let l = 0; l < 4; l++) {
    msg[l] = JSON.parse(JSON.stringify(paipu));
  }
  this.call_players('fulou', msg);

  if (this._view) this._view.update(paipu);
}

// 杠（只表示行为，可能被抢杠）
gang(gang) {
  let model = this._model;

  let p = (gang.match(/^[mpsz]\d{4}$/))
        ? gang.substr(0, 2) // 暗杠
        : gang[0] + gang.substr(-1) // 加杠
  model.shoupai[model.lunban].gang(p);

  let paipu = { gang: { l: model.lunban, m: gang } };
  this.add_paipu(paipu);

  if (this._gang) this.kaigang();

  this._gang = gang;

  let msg = [];
  for (let l = 0; l < 4; l++) {
    msg[l] = JSON.parse(JSON.stringify(paipu));
  }
  this.call_players('gang', msg);

  if (this._view) this._view.update(paipu);
}

// 杠之后的摸牌
gangzimo() {
  let model = this._model;

  let zimo = model.shan.gangzimo();
  model.shoupai[model.lunban].zimo(zimo);

  let paipu = { gangzimo: { l: model.lunban, p: zimo } };
  this.add_paipu(paipu);

  if (this._gang.match(/^[mpsz]\d{4}$/)) this.kaigang();

  let msg = [];
  for (let l = 0; l < 4; l++) {
    msg[l] = JSON.parse(JSON.stringify(paipu));
    if (l != model.lunban) msg[l].gangzimo.p = '';
  }
  this.call_players('gangzimo', msg);

  if (this._view) this._view.update(paipu);
}

// 杠（结果，不能被抢杠的状态）
kaigang() {
  let model = this._model;

  this._gang = null;

  // TODO: delete
  model.shan.kaigang();

  // let msg = [];
  // for (let l = 0; l < 4; l++) {
  //   msg[l] = JSON.parse(JSON.stringify(paipu));
  // }
  // this.notify_players('kaigang', msg);
  //
  // if (this._view) this._view.update(paipu);
}

// 和了（计算得分及点数分配）
hule() {
  let model = this._model;

  if (this._status != 'hule') {
    this._hule_option = this._status == 'gang' ? 'qianggang'
              : this._status == 'gangzimo' ? 'gangkai'
              : null;
  }

  let menfeng = this._hule != null ? this._hule : model.lunban;
  let chongpai;
  if (menfeng != model.lunban) {
    chongpai = (this._hule_option == 'qianggang'
            ? this._gang[0] + this._gang.substr(-1)
            : this._dapai.substr(0, 2)         )
        + ['', '+', '=', '-'][(4 + model.lunban - menfeng) % 4];
  }
  let shoupai = model.shoupai[menfeng].clone();
  if (chongpai) shoupai.zimo(chongpai);

  let param = {
    quanfeng: model.quanfeng,
    menfeng: menfeng,
    fanzhong: {
      qianggang: this._hule_option == 'qianggang',
      gangkai: this._hule_option == 'gangkai',
      haidi: model.shan.paishu() > 0 ? 0
             : !chongpai ? 1 // 妙手回春
             : 2, // 海底捞月
    },
  };
  let hule = Majiang.Util.hule(shoupai, chongpai, param);

  this._fenpei = hule.fenpei;

  let paipu = {
    hule: {
      chongjia: chongpai ? model.lunban : null,
      l: menfeng,
      shoupai: shoupai.toString(),
      zongfen: hule.zongfen,
      fanzhong: hule.fanzhong,
      fenpei: hule.fenpei,
    }
  };
  this.add_paipu(paipu);

  let msg = [];
  for (let l = 0; l < 4; l++) {
    msg[l] = JSON.parse(JSON.stringify(paipu));
  }
  this.call_players('hule', msg, this._delay);

  if (this._view) this._view.update(paipu);
}

// 流局
liuju() {
  let model = this._model;

  // TODO: ???
  let shoupai = ['', '', '', ''];
  let fenpei = [0, 0, 0, 0];

  this._fenpei = fenpei;

  let paipu = { liuju: { shoupai: shoupai, fenpei: fenpei } };

  this.add_paipu(paipu);

  let msg = [];
  for (let l = 0; l < 4; l++) {
    msg[l] = JSON.parse(JSON.stringify(paipu));
  }
  this.call_players('liuju', msg, this._delay);

  if (this._view) this._view.update(paipu);
}

// 一局结束时的处理（改变圈风和局数，判断是否结束）
last() {
  let model = this._model;

  if (model.jushu != 3) {
    model.player_id.push(model.player_id.shift());
  } else {
    // 换位
    switch (model.quanfeng) {
      case 0:
        model.player_id = [model.player_id[2],
                           model.player_id[1],
                           model.player_id[0],
                           model.player_id[3]];
        break;
      // TODO: 半庄
      case 1:
        model.player_id = [model.player_id[0],
                           model.player_id[3],
                           model.player_id[1],
                           model.player_id[2]];
        break;
      case 2:
        model.player_id = [model.player_id[2],
                           model.player_id[1],
                           model.player_id[0],
                           model.player_id[3]];
        break;
    }
  }

  model.lunban = -1;
  if (this._view) this._view.update();

  model.jushu++;
  model.quanfeng += Math.floor(model.jushu / 4);
  model.jushu = model.jushu % 4;

  // TODO: 半庄 quanfeng == 2
  if (model.quanfeng == 2) this.delay(() => this.jieju(), 0);
  else this.delay(() => this.qipai(), 0);
}

// 游戏结束时的处理（计算名次和得分）
jieju() {
  let model = this._model;

  let paiming = [];
  const defen = model.defen;
  for (let i = 0; i < 4; i++) {
    // TODO:
    let id = (model.qijia + i) % 4;
    for (let j = 0; j < 4; j++) {
      if (j == paiming.length || defen[id] > defen[paiming[j]]) {
        paiming.splice(j, 0, id);
        break;
      }
    }
  }

  let rank = [0, 0, 0, 0];
  for (let i = 0; i < 4; i++) {
    rank[paiming[i]] = i + 1;
  }

  // TODO: 顺位点
  // let point = [0, 0, 0, 0];
  // for (let i = 0; i < 4; i++) {
  //   let id = paiming[i];
  //   point[id] = defen[id];
  //   // point[id] = defen[id] + this._ranking_point[i];
  // }

  let point = [0, 0, 0, 0];
  // TODO: 9, 1, -3, -7
  let point_fenpei = [4, 2, 1, 0];
  for (let i = 0; i < 4; i++) {
    point[paiming[i]] = point_fenpei[i];
  }

  this._paipu.defen = defen.concat();
  this._paipu.rank = rank.concat();
  this._paipu.point = point.concat();

  let paipu = { jieju: { defen: defen, rank: rank, point: point } };
  let msg = [];
  for (let l = 0; l < 4; l++) {
    msg[l] = JSON.parse(JSON.stringify(paipu));
  }
  this.call_players('jieju', msg, this._delay);

  if (this._view) this._view.summary(this._paipu);

  if (this._jieju_handler) this._jieju_handler();
}

// 去除定时并进入下一个动作（需要所有玩家收到回复）
next(force) {
  this._timeout_id = clearTimeout(this._timeout_id);
  if (this._reply.filter(x => x).length < 4) return;
  if (!force && this._stop) return;

  if (this._status == 'zimo') this.reply_zimo();
  else if (this._status == 'dapai') this.reply_dapai();
  else if (this._status == 'fulou') this.reply_fulou();
  else if (this._status == 'gang') this.reply_gang();
  else if (this._status == 'gangzimo') this.reply_zimo();
  else if (this._status == 'hule') this.reply_hule();
  else if (this._status == 'liuju') this.reply_liuju();
  else if (this._status == 'jieju') this.reply_jieju();
}

// 收到摸牌回复后的动作。和了、杠、打牌
reply_zimo() {
  let model = this._model;

  let reply = this._reply[model.player_id[model.lunban]];
  if (reply.hule) {
    if (this.allow_hule()) {
      if (this._view) this._view.say('hu', model.lunban);
      this.delay(() => this.hule());
      return;
    }
  } else if (reply.gang) {
    if (this.get_gang_mianzi().find(m => m == reply.gang)) {
      if (this._view) this._view.say('gang', model.lunban);
      this.delay(() => this.gang(reply.gang));
      return;
    }
  } else if (reply.dapai) {
    if (this.get_dapai().find(p => p == reply.dapai)) {
      this.delay(() => this.dapai(reply.dapai), 0);
      return;
    }
  }

  // 摸切
  let p = this.get_dapai().pop();
  this.delay(() => this.dapai(p), 0);
}

// 收到打牌回复后的动作。包括和了、副露、下一玩家摸牌
reply_dapai() {
  let model = this._model;

  for (let i = 1; i < 4; i++) {
    let l = (model.lunban + i) % 4;
    let reply = this._reply[model.player_id[l]];
    if (reply.hule && this.allow_hule(l)) {
      if (this._view) this._view.say('hu', l);
      this._hule = l;
      this.delay(() => this.hule());
      return;
    }
  }

  for (let i = 1; i < 4; i++) {
    let l = (model.lunban + i) % 4;
    let reply = this._reply[model.player_id[l]];
    if (reply.fulou) {
      let m = reply.fulou;
      if (m.match(/^[mpsz](\d)\1\1\1/)) {
        if (this.get_gang_mianzi(l).find(m => reply.fulou)) {
          if (this._view) this._view.say('gang', l);
          this.delay(() => this.fulou(reply.fulou));
          return;
        }
      } else if (m.match(/^[mpsz](\d)\1\1/)) {
        if (this.get_peng_mianzi(l).find(m => reply.fulou)) {
          if (this._view) this._view.say('peng', l);
          this.delay(() => this.fulou(reply.fulou));
          return;
        }
      }
    }
  }
  let l = (model.lunban + 1) % 4;
  let reply = this._reply[model.player_id[l]];
  if (reply.fulou) {
    if (this.get_chi_mianzi(l).find(m => reply.fulou)) {
      if (this._view) this._view.say('chi', l);
      this.delay(() => this.fulou(reply.fulou));
      return;
    }
  }

  this.delay(() => this.zimo(), 0);
}

// 收到副露（包括大明杠）回复后的动作。包括摸牌（仅限大明杠）、打牌
reply_fulou() {
  let model = this._model;

  if (this._gang) {
    this.delay(() => this.gangzimo(), 0);
    return;
  }

  let reply = this._reply[model.player_id[model.lunban]];
  if (reply.dapai) {
    if (this.get_dapai().find(p => p == reply.dapai)) {
      this.delay(() => this.dapai(reply.dapai), 0);
      return;
    }
  }

  // 摸切
  let p = this.get_dapai().pop();
  this.delay(() => this.dapai(p), 0);
}

// 收到杠（暗杠、加杠）回复后的动作。包括摸牌、和了（仅限加杠）
reply_gang() {
  let model = this._model;

  // 暗杠只能摸牌
  if (this._gang.match(/^[mpsz]\d{4}$/)) {
    this.delay(() => this.gangzimo(), 0);
    return;
  }

  // 加杠可以被抢杠
  for (let i = 1; i < 4; i++) {
    let l = (model.lunban + i) % 4;
    let reply = this._reply[model.player_id[l]];
    if (reply.hule && this.allow_hule(l)) {
      if (this._view) this._view.say('hu', l);
      this._hule = l;
      this.delay(() => this.hule());
      return;
    }
  }

  // 加杠摸牌
  this.delay(() => this.gangzimo(), 0);
}

// 收到和了回复后的动作。包括和了、一局结束处理
reply_hule() {
  let model = this._model;

  for (let l = 0; l < 4; l++) {
    model.defen[model.player_id[l]] += this._fenpei[l];
  }

  this.delay(() => this.last(), 0);
}

// 收到流局回复后的动作。直接进入一局结束处理
reply_liuju() {
  this.delay(() => this.last(), 0);
}

// 收到游戏结束时的处理。直接执行回调函数
reply_jieju() {
  if (this._callback) this._callback();
}

// 当前玩家的打牌候选
get_dapai() {
  let model = this._model;
  return Game.get_dapai(model.shoupai[model.lunban]);
}

// 吃牌面子候选，海底牌可以吃
get_chi_mianzi(l) {
  let model = this._model;
  let p = this._dapai.substr(0, 2)
      + ['', '+', '=', '-'][(4 + model.lunban - l) % 4];
  return Game.get_chi_mianzi(model.shoupai[l], p);
}

// 碰牌面子候选，海底牌可以碰
get_peng_mianzi(l) {
  let model = this._model;
  let p = this._dapai.substr(0, 2)
      + ['', '+', '=', '-'][(4 + model.lunban - l) % 4];
  return Game.get_peng_mianzi(model.shoupai[l], p);
}

// 杠牌面子候选，海底牌可以杠
get_gang_mianzi(l) {
  let model = this._model;
  if (l != null) {
    let p = this._dapai.substr(0, 2)
        + ['', '+', '=', '-'][(4 + model.lunban - l) % 4];
    return Game.get_gang_mianzi(model.shoupai[l], p);
  } else {
    return Game.get_gang_mianzi(model.shoupai[model.lunban], null,
                  model.shan.paishu());
  }
}

/**
 * @param {number} l 点炮者（null 为自摸）
 *
 * @return {boolean} 能否和牌
 */
allow_hule(l) {
  let model = this._model;
  if (l != null) {
    let p = (this._status == 'gang' ? this._gang[0] + this._gang.substr(-1)
                    : this._dapai.substr(0, 2))
        + ['', '+', '=', '-'][(4 + model.lunban - l) % 4];
    // 抢杠和海底一定能和
    let fanzhong = this._status == 'gang'
          || model.shan.paishu() == 0;
    return Game.allow_hule(model.shoupai[l], p, model.quanfeng, l,
                 fanzhong);
  } else {
    // 抢杠和妙手一定能和
    let fanzhong = this._status == 'gangzimo'
          || model.shan.paishu() == 0;
    return Game.allow_hule(model.shoupai[model.lunban], null,
                 model.quanfeng, model.lunban, fanzhong);
  }
}

// 将打牌候选的自摸牌标记为 '_'
static get_dapai(shoupai) {
  if (!shoupai._zimo) return [];

  let dapai = shoupai.get_dapai();
  if (shoupai._zimo.length > 2) return dapai;

  let [s, n] = shoupai._zimo;
  if (shoupai._shouli[s][n] == 1)
    dapai.splice(dapai.indexOf(shoupai._zimo), 1);
  return dapai.concat(shoupai._zimo + '_');
}

/**
 * @param {string} shoupai 手牌
 * @param {string} p 打牌
 *
 * @return {array} 吃牌面子候选（海底牌可以吃）

 * @example get_chi_mianzi(new Shoupai().fromString('m123456789p33s23'), 'm5-') -> ["m345-", "m45-6", "m5-67"]
 */
static get_chi_mianzi(shoupai, p) {
  if (shoupai._zimo) return [];

  return shoupai.get_chi_mianzi(p);
}

/**
 * @param {string} shoupai 手牌
 * @param {string} p 打牌
 *
 * @return {array} 碰牌面子候选（海底牌可以碰）

 * @example get_peng_mianzi(new Shoupai().fromString('m123456789p33s23'), 'p3=') -> ["p333="]
 */
static get_peng_mianzi(shoupai, p) {
  if (shoupai._zimo) return [];

  return shoupai.get_peng_mianzi(p);
}

/**
 * @param {string} shoupai 手牌
 * @param {string} p 打牌（null 为暗杠和加杠）
 *
 * @return {array} 杠牌面子候选（海底牌可以杠）

 * @example get_gang_mianzi(new Shoupai().fromString('m123456789p333s3'), 'p3=') -> ["p3333="]
 * @example get_gang_mianzi(new Shoupai().fromString('m123459999p3s3,p333=')) -> ["m9999", "p333=3"]
 */
static get_gang_mianzi(shoupai, p) {
  if (p) {
    // 大明杠
    if (shoupai._zimo) return [];
    return shoupai.get_gang_mianzi(p);
  } else {
    // 暗杠和加杠
    if (!shoupai._zimo) return [];
    if (shoupai._zimo.length > 2) return [];

    return shoupai.get_gang_mianzi();
  }
}

/**
 * @param {string} shoupai 手牌
 * @param {string} p 铳牌（自摸时为 null）
 * @param {number} quanfeng 圈风
 * @param {number} menfeng 门风
 * @param {array} fanzhong 番种
 *
 * @return {boolean} 是否能和牌
 */
static allow_hule(shoupai, p, quanfeng, menfeng, fanzhong) {
  let new_shoupai = shoupai.clone();
  if (p) new_shoupai.zimo(p);
  if (Majiang.Util.xiangting(new_shoupai) != -1) return false;

  if (fanzhong) return true;

  let param = {
    quanfeng: quanfeng,
    menfeng: menfeng,
    fanzhong: {},
  };
  let hule = Majiang.Util.hule(new_shoupai, p, param);

  // TODO: 诈和
  return hule.zongfen >= 8;
}

}
