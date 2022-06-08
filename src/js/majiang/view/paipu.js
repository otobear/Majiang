"use strict";

const $ = require('jquery');

const View = require('./game');

const view_class = ['main', 'xiajia', 'duimian', 'shangjia'];

class Shan {
  constructor(p) {
    this._paishu = 144 - 13 * 4;
  }
  paishu() { return this._paishu }
  zimo(p) { this._paishu--; return p }
  gangzimo(p) { this._paishu--; return p }
  kaigang(p) { return this }
}

module.exports = class Paipu {

constructor(root, paipu) {
  this._root = root;

  this._paipu = paipu;
  this._model = {
    title: paipu.title,
    player: paipu.player,
    qijia: paipu.qijia,
    defen: [0, 0, 0, 0],
    shan: null,
    shoupai: [],
    he: [],
    player_id: [],
  };
  this._view = new View(root, this._model);

  this._log_idx = 0;
  this._idx = 0;
  this._log;
  this._redo = false;

  this._autoplay = false;
  this._speed = 3;
  this._timer_id;

  this._repeat_timer;
  this._repeat = false;;

  this._summary = false;
  this._deny_repeat = false;

  this._callback;
}

set_handler() {
  this.clear_handler();

  this.update_controler();

  const controler = $('.controler', this._root);

  this._root.on('mouseup mousemove touchend', event => {
    this._repeat_timer = clearInterval(this._repeat_timer);
    if (this._repeat) {
      this._repeat = false;
      this.set_fragment();
    }
  });
  this._root.on('mousedown', () => this.next());
  $('.next', controler).on('mousedown touchstart', event => {
    if (event.button) return false;
    if (this._repeat_timer) return false;
    this.next();
    this._repeat_timer = setTimeout(() => {
      this._repeat = true;
      this._repeat_timer = setInterval(() => {
        if (!this._deny_repeat) this.next();
      }, 80);
    }, 200);
    return false;
  });
  $('.prev', controler).on('mousedown touchstart', event =>{
    if (event.button) return false;
    if (this._repeat_timer) return false;
    this.prev();
    this._repeat_timer = setTimeout(() => {
      this._repeat = true;
      this._repeat_timer = setInterval(() => this.prev(), 80);
    }, 200);
    return false;
  });
  $('.exit', controler).on('mousedown', () => this.exit());
  $('.summary', controler).on('mousedown', () => this.summary());
  $('.sound', controler).on('mousedown', () => this.sound());
  $('.first', controler).on('mousedown', () => this.top(this._log_idx - 1));
  $('.autoplay', controler).on('mousedown', () => this.autoplay());
  $('.last', controler).on('mousedown', () => this.top(this._log_idx + 1));
  $('.speed', controler).on('mousedown', () => false);
  $('.plus', controler).on('mousedown', () => this.speed(this._speed + 1));
  $('.minus', controler).on('mousedown', () => this.speed(this._speed - 1));
  $('> .shoupai', this._root).on('mousedown', '.pai', () => this.shoupai());
  $('.he', this._root).on('mousedown', '.pai', () => this.he()   );
  for (let i = 0; i < 4; i++) {
    $(`.player.${view_class[i]}`, this._root)
               .on('mousedown', () => this.viewpoint(i));
  }

  $(window).on('keyup', event => {

    if (this._repeat) {
      this._repeat = false;
      this.set_fragment();
    }

    if (event.key == ' ') this.autoplay();
    else if (event.key == '+') this.speed(this._speed + 1);
    else if (event.key == '-') this.speed(this._speed - 1);
    else if (event.key == 'ArrowUp' && event.shiftKey)
                  this.top(this._log_idx);
    else if (event.key == 'ArrowDown' && event.shiftKey)
                  this.last();
    else if (event.key == 'ArrowRight')
                  this.top(this._log_idx + 1);
    else if (event.key == 'ArrowLeft')
                  this.top(this._log_idx - 1);
    else if (event.key == 'v') this.viewpoint(1);
    else if (event.key == 'a') this.sound();
    else if (event.key == 's') this.shoupai();
    else if (event.key == 'h') this.he();
    else if (event.key == '?') this.summary();
    else if (event.key == 'q' || event.key == 'Escape')
                  this.exit();
  });
  $(window).on('keydown', event => {
    if (this._deny_repeat && event.originalEvent.repeat) return;

    if (!this._repeat && event.originalEvent.repeat) this._repeat = true;

    if (event.key == 'ArrowDown' && !event.shiftKey || event.key == 'Enter') this.next();
    else if (event.key == 'ArrowUp' && !event.shiftKey) this.prev();
  });

  $('.summary', this._root).addClass('paipu');
}

clear_handler() {
  this._repeat_timer = clearInterval(this._repeat_timer);
  const controler = $('.controler', this._root);
  $('.exit', controler).off('mousedown');
  $('.summary', controler).off('mousedown');
  $('.sound', controler).off('mousedown');
  $('.first', controler).off('mousedown');
  $('.prev', controler).off('mousedown touchstart');
  $('.autoplay', controler).off('mousedown');
  $('.next', controler).off('mousedown touchstart');
  $('.last', controler).off('mousedown');
  $('.plus', controler).off('mousedown');
  $('.minus', controler).off('mousedown');
  this._root.off('mousedown mouseup mousemove touchstart touchend touchmove');
  $('.shoupai', this._root).off('mousedown', '.pai');
  $('.he', this._root).off('mousedown', '.pai');
  $('.player', this._root).off('mousedown');
  $('.kaiju .player *', this._root).off('mousedown');
  $(window).off('keydown keyup');
  $('.summary', this._root).removeClass('paipu');
}

update_controler() {
  const controler = $('.controler', this._root);
  $('*', controler).removeClass('hide');

  if (this._view.sound_on) {
    $('.sound.off', controler).addClass('hide');
    $('.sound.on', controler).removeClass('hide');
  } else {
    $('.sound.on', controler).addClass('hide');
    $('.sound.off', controler).removeClass('hide');
  }

  if (this._autoplay) {
    $('.autoplay.on', controler).addClass('hide');
    $('.autoplay.off', controler).removeClass('hide');
    $('.speed', controler).removeClass('hide');
  } else {
    $('.autoplay.off', controler).addClass('hide');
    $('.autoplay.on', controler).removeClass('hide');
    $('.speed', controler).addClass('hide');
  }

  $('.speed span', controler).each((i, n) => {
    $(n).css('visibility', i + 1 > this._speed ? 'hidden' : 'visible');
  });
}

start(viewpoint, log_idx = 0, idx = 0) {
  this.set_handler();

  if (viewpoint != null) {
    this.seek(log_idx, idx);
    this.viewpoint(viewpoint);
  } else this.next();
}

kaiju() {
  this._view.kaiju();
  for (let id = 0; id < 4; id++) {
    $(`.kaiju .player .${view_class[id]}`, this._root)
      .on('mousedown', () => {
        this._view.viewpoint = id;
      });
  }
  this._root.on('mousedown', () => this.start());
}

next() {
  this._timer_id = clearTimeout(this._timer_id);

  if (this._log_idx >= this._paipu.log.length) {
    this._deny_repeat = false;
    if (!this._jieju) this.jieju();
    else this.exit();
    return;
  }
  if (this._summary) {
    this.summary();
    return;
  }
  if (this._idx >= this._paipu.log[this._log_idx].length) {
    this._log_idx++;
    this._idx = 0;
    this.next();
    return;
  }

  let data = this._paipu.log[this._log_idx][this._idx];

  if (data.qipai) this.qipai (data.qipai);
  else if (data.zimo) this.zimo (data.zimo);
  else if (data.dapai) this.dapai (data.dapai);
  else if (data.buhua) this.buhua (data.buhua);
  else if (data.fulou) this.fulou (data.fulou);
  else if (data.gang) this.gang (data.gang);
  else if (data.gangzimo) this.gangzimo(data.gangzimo);
  else if (data.kaigang) this.kaigang (data.kaigang);
  else if (data.hule) this.hule (data.hule);
  else if (data.liuju) this.liuju (data.liuju);

  // TODO: remove?
  if (!this._redo) {
    if (this._log && this._log.dapai
      && this._log.dapai.p.substr(-1) == '*') this._view.update();
    this._idx++;
    this._log = data;
  }

  if (this._idx < this._paipu.log[this._log_idx].length
    && this._paipu.log[this._log_idx][this._idx].kaigang) this.next();

  if ((data.hule || data.liuju
      || this._idx == this._paipu.log[this._log_idx].length)
    && !this._redo)
  {
    this._deny_repeat = true;
  }

  if (this._autoplay && !this._deny_repeat) {
    let delay = (6 - this._speed) * 200;
    if (this._redo && this._speed > 0) delay = Math.max(delay, 500);
    this._timer_id = setTimeout(() => this.next(), delay);
  }

  this.set_fragment();
}

exit() {
  this._timer_id = clearTimeout(this._timer_id);
  this.clear_handler();
  if (this._callback) this._callback();
}

_qipai(qipai) {
  this._model.quanfeng = qipai.quanfeng;
  this._model.jushu = qipai.jushu;

  this._model.shan = new Shan();

  this._model.player_id = qipai.zuoci;

  for (let l = 0; l < 4; l++) {
    // this._model.player_id[l] = player_id[(l + this._model.jushu) % 4];
    this._model.defen[this._model.player_id[l]] = qipai.defen[l];
    this._model.shoupai[l] = Majiang.Shoupai.fromString(qipai.shoupai[l]);
    this._model.he[l] = new Majiang.He();
  }

  this._model.lunban = -1;
}
qipai(qipai) {
  this._qipai(qipai);
  this._view.redraw();
  this._deny_repeat = false;
}

_zimo(zimo) {
  let p = this._model.shan.zimo(zimo.p);
  this._model.shoupai[zimo.l].zimo(p);
  this._model.lunban = zimo.l;
}
zimo(zimo) {
  this._zimo(zimo);
  this._view.update({zimo:zimo});
}

_buhua(buhua) {
  this._model.shoupai[buhua.l].buhua(buhua.p);
  this._model.he[buhua.l].buhua(buhua.p);
}
buhua(buhua) {
  this._view.say('buhua', buhua.l);
  this._buhua(buhua);
  this._view.update({buhua:buhua});
}

_dapai(dapai) {
  this._model.shoupai[dapai.l].dapai(dapai.p);
  this._model.he[dapai.l].dapai(dapai.p);
}
dapai(dapai) {
  if (dapai.p.substr(-1) == '*' && !this._redo) {
    this._redo = true;
    return;
  }
  this._redo = false;

  this._dapai(dapai);
  this._view.update({dapai:dapai});
}

_fulou(fulou) {
  let d = fulou.m.match(/[\+\=\-]/)[0];
  this._model.he[this._model.lunban].fulou(d);
  this._model.shoupai[fulou.l].fulou(fulou.m);
  this._model.lunban = fulou.l;
}
fulou(fulou) {
  if (!this._redo) {
    let m = fulou.m.replace(/0/,'5');
    if (m.match(/^[mpsz](\d)\1\1\1/)) this._view.say('gang', fulou.l);
    else if (m.match(/^[mpsz](\d)\1\1/)) this._view.say('peng', fulou.l);
    else this._view.say('chi',  fulou.l);
    this._redo = true;
    return;
  }
  this._redo = false;

  this._fulou(fulou);
  this._view.update({fulou:fulou});
}

_gang(gang) {
  let p = gang.m.match(/^[mpsz]\d{4}$/)
          ? gang.m.replace(/0/,'5').substr(0,2)
          : gang.m[0] + gang.m.substr(-1);
  this._model.shoupai[gang.l].gang(p) ;
}
gang(gang) {
  if (!this._redo) {
    this._view.say('gang', gang.l);
    this._redo = true;
    return;
  }
  this._redo = false;

  this._gang(gang);
  this._view.update({gang:gang});
}

_gangzimo(gangzimo) {
  let p = this._model.shan.gangzimo(gangzimo.p);
  this._model.shoupai[gangzimo.l].zimo(p);
}
gangzimo(gangzimo) {
  this._gangzimo(gangzimo);
  this._view.update({gangzimo:gangzimo});
}

_kaigang(kaigang) {
  this._model.shan.kaigang();
}
kaigang(kaigang) {
  this._kaigang(kaigang);
  this._view.update({kaigang:kaigang});
}

_hule(hule) {
}
hule(hule) {
  if (!this._redo && !this._log.hule) {
    this._view.say('hu', hule.l);
    let i = 0;
    while (this._idx + ++i < this._paipu.log[this._log_idx].length) {
      let hule = this._paipu.log[this._log_idx][this._idx + i].hule;
      this._view.say('hu', hule.l);
    }
    this._redo = true;
    return;
  }
  this._redo = false;

  if (this._log.hule) {
    for (let l = 0; l < 4; l++) {
      this._model.defen[this._model.player_id[l]]
                        += this._log.hule.fenpei[l];
    }
  }

  this._hule(hule);
  this._view.update({hule:hule});
}

_liuju(liuju) {}
liuju(liuju) {
  this._redo = false;

  this._liuju(liuju);
  this._view.update({liuju: liuju});
}

jieju() {
  for (let id = 0; id < 4; id++) {
    this._model.defen[id] = this._paipu.defen[id];
  }
  this._model.lunban = -1;
  this._view.update();
  this.summary();
  this._jieju = true;
}

autoplay() {
  if (this._summary) return true;
  this._timer_id = clearTimeout(this._timer_id);
  this._autoplay = !this._autoplay;
  if (this._autoplay && !this._deny_repeat) this.next();
  this.update_controler();
  return false;
}

speed(speed) {
  this._speed = speed;
  if (this._speed < 1) this._speed = 1;
  if (this._speed > 5) this._speed = 5;
  this.update_controler();
  return false;
}

sound() {
  this._view.sound_on = !this._view.sound_on;
  this.update_controler();
  return false;
}

viewpoint(d) {
  // 视点距离 -> 物理距离（id 差值）

  if (this._summary) return true;
  if (this._autoplay) this.autoplay();
  this._view.viewpoint = this._model.player_id[(this._model.player_id.indexOf(this._view.viewpoint) + d) % 4];
  this._view.redraw();
  let data = this._paipu.log[this._log_idx][this._idx - 1];
  if (data.hule || data.liuju) this._view.update(data);
  this.set_fragment();
  return false;
}

shoupai() {
  if (this._summary) return true;
  this._view.open_shoupai = !this._view.open_shoupai;
  this._view.redraw();
  let data = this._paipu.log[this._log_idx][this._idx - 1];
  if (data.hule || data.liuju) this._view.update(data);
  this.set_fragment();
  return false;
}

he() {
  if (this._summary) return true;
  this._view.open_he = !this._view.open_he;
  this._view.redraw();
  let data = this._paipu.log[this._log_idx][this._idx - 1];
  if (data.hule || data.liuju) this._view.update(data);
  this.set_fragment();
  return false;
}

summary() {
  if (this._jieju) return true;
  if (this._deny_repeat) return true;
  this._timer_id = clearTimeout(this._timer_id);
  if (this._summary) {
    this._view.summary();
    $('.controler', this._root).removeClass('hide');
  } else {
    $('.controler', this._root).addClass('hide');
    this._view.summary(this._paipu);
    $('.summary tbody tr').each((i, tr) => {
      $(tr).on('mousedown', () => {
        if (this._autoplay) this._autoplay = false;
        if (this._jieju) this._jieju = false;
        if (this._summary) this.summary();
        return this.top(i);
      });
    });
  }
  this._summary = !this._summary;
  if (!this._summary && this._autoplay) this.next();
  return false;
}

prev() {
  if (this._summary) return true;
  if (this._autoplay) this.autoplay();
  let idx = (this._idx > 1) ? this._idx - 2 : 0;
  let data = this._paipu.log[this._log_idx][idx];
  while (idx > 0 && !(data.zimo || data.gangzimo
            || data.fulou && !data.fulou.m.match(/\d{4}/)))
  {
    data = this._paipu.log[this._log_idx][--idx];
  }
  this.seek(this._log_idx, idx);
  this.update_controler();
  return false;
}

top(log_idx) {
  if (this._summary) return true;
  if (this._autoplay) this.autoplay();
  if (log_idx < 0 || this._paipu.log.length <= log_idx) return false;
  this._jieju = false;
  this.seek(log_idx, 0);
  this.update_controler();
  return false;
}

last() {
  if (this._summary) return true;
  if (this._autoplay) this.autoplay();
  let idx = this._paipu.log[this._log_idx].length - 1;
  let data = this._paipu.log[this._log_idx][idx];
  while (idx > 0 && (data.hule || data.liuju)) {
    data = this._paipu.log[this._log_idx][--idx];
  }
  if (this._paipu.log[this._log_idx][idx+1].liuju
    && this._paipu.log[this._log_idx][idx + 1].liuju.name.match(/^三家和/))
  {
    this.seek(this._log_idx, idx - 1);
    this._view.update(data);
    this._idx++;
  } else {
    this.seek(this._log_idx, idx);
  }
  data = this._paipu.log[this._log_idx][this._idx];
  if (data.hule || data.liuju) {
    this.next();
    if (this._redo) setTimeout(() => this.next(), 500);
  }
  this.update_controler();
  return false;
}

seek(log_idx, idx) {

  this._deny_repeat = false;

  log_idx = log_idx < 0 ? 0
      : this._paipu.log.length - 1 < log_idx
              ? this._paipu.log.length - 1
      : log_idx;
  idx = idx < 0 ? 0
      : this._paipu.log[log_idx].length -1 < idx
              ? this._paipu.log[log_idx].length -1
      : idx;

  this._log_idx = log_idx;
  this._idx = 0;
  this._log = null;
  this._redo = false;

  while (this._idx <= idx) {
    let data = this._paipu.log[this._log_idx][this._idx];

    if (data.qipai) this._qipai   (data.qipai);
    else if (data.zimo) this._zimo  (data.zimo);
    else if (data.dapai) this._dapai   (data.dapai);
    else if (data.fulou) this._fulou   (data.fulou);
    else if (data.gang) this._gang  (data.gang);
    else if (data.gangzimo) this._gangzimo(data.gangzimo);
    else if (data.kaigang) this._kaigang (data.kaigang);
    else if (data.hule) this._hule  (data.hule);
    else if (data.liuju) this._liuju  (data.liuju);

    this._idx++;
    this._log = data;
  }

  this.set_fragment();

  this._view.redraw();
}

set_fragment() {
  if (!this._fragment) return;
  if (this._repeat) return;

  let fragment = this._fragment + [
            this._view.viewpoint,
            this._log_idx,
            this._idx -1,
           ].join('/');

  let opt = (this._view.open_shoupai ? ''  : 's')
      + (this._view.open_he    ? ''  : 'h');
  if (opt) fragment += `:${opt}`;

  history.replaceState('', '', fragment);
}

}
