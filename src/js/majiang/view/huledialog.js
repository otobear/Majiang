"use strict";

const $ = require('jquery');

const Majiang = {
  View: {
    pai: require('./pai'),
    Shoupai: require('./shoupai'),
    Shan: require('./shan')
  }
};

let _fanzhong;
let _zongfen;

class Shan {
  constructor() {
  }
  paishu()   { return 0; }
}

module.exports = class HuleDialog {

constructor(root, chang, viewpoint = 0) {

  this._node = {
    root: root,
    hule: $('.hule', root),
    liuju: $('.liuju', root),
    fenpei: $('.fenpei', root),
  };
  this._chang = chang;
  this._viewpoint = viewpoint;

  this.hide();
}

hule(info) {
  new Majiang.View.Shan(
    $('.shan', this._node.hule),
    new Shan()
  ).redraw();

  new Majiang.View.Shoupai(
    $('.shoupai', this._node.hule), info.shoupai, true).redraw();

  let fanzhong = $('.fanzhong', this._node.hule);
  fanzhong.empty();
  if (!info.hule || !info.hule.fanzhong) {
    let r_zongfen = _zongfen.clone();
    $('.zongfen', r_zongfen).text('役なし');
    fanzhong.append(r_zongfen);
    this._node.fenpei.addClass('hide');
  } else {
    for (let h of info.hule.fanzhong) {
      let r_fanzhong = _fanzhong.clone();
      $('.name_zh', r_fanzhong).text(h.name_zh);
      $('.fenshu', r_fanzhong).text(h.fenshu + '点');
      fanzhong.append(r_fanzhong);
    }
    let text = info.hule.zongfen + '点';
    let r_zongfen = _zongfen.clone();
    $('.zongfen', r_zongfen).text(text);
    fanzhong.append(r_zongfen);

    this.fenpei(info.hule.fenpei);
  }

  this._node.hule.removeClass('hide');
  this._node.liuju.addClass('hide');

  this.show();

  return this;
}

liuju(info) {
  this._node.liuju.text('流局');

  this.fenpei(info.liuju.fenpei);

  this._node.liuju.removeClass('hide');
  this._node.hule.addClass('hide');

  this.show();

  return this;
}

fenpei(fenpei) {
  const feng_hanzi = ['東', '南', '西', '北'];
  const view_class = ['main', 'xiajia', 'duimian', 'shangjia'];

  this._node.fenpei.removeClass('hide');

  $('.diff', this._node.fenpei).removeClass('plus')
                 .removeClass('muinus');

  for (let l = 0; l < 4; l++) {
    let id = this._chang.player_id[l];
    let c = view_class[(l + 4 - this._chang.player_id.indexOf(0)) % 4];
    let node = $(`.${c}`, this._node.fenpei);

    $('.feng', node).text(feng_hanzi[l]);

    $('.player', node).text(this._chang.player[id]);

    let defen = ('' + this._chang.defen[id]).replace(/(\d)(\d{3})$/,'$1,$2');
    $('.defen', node).text(defen);

    let diff = fenpei[l];
    if (diff > 0) $('.diff', node).addClass('plus');
    else if (diff < 0) $('.diff', node).addClass('muinus');
    diff = (diff > 0) ? '+' + diff
       : (diff < 0) ? ''  + diff
       : '';
    diff = diff.replace(/(\d)(\d{3})$/, '$1,$2');
    $('.diff', node).text(diff);
  }
}

show() {
  this._node.root.removeClass('hide').scrollTop(0);
  setTimeout(() => this._node.root.removeClass('fadeout'), 10);
  return this;
}

hide() {
  this._node.root.addClass('hide').addClass('fadeout');
  return this;
}

}

$(function(){
  _fanzhong = $('.huledialog .hule .fanzhong .r_fanzhong');
  _zongfen = $('.huledialog .hule .fanzhong .r_zongfen');
});
