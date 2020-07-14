/**
 * Copyright(C) 2020 Yong Zuo
 * Released under the MIT license
 * https://github.com/SpaceDogSergei/Majiang/blob/master/LICENSE
 */

"use strict";

import { parse } from 'querystring';

$(function() {
  // let paipu_info =
  let params = parseParams(location.search);

  // 去除开始和最后的方括号
  let player = localStorage.getItem('Majiang.paipu_info.player');
  player = s_to_a_s(player);
  for (let k in [...Array(4)]) {
    $('.section').eq(k).find('.info .player').text(player[k]);
  }

  $('#preview').on('click', (e) => {
    let defen = [];
    let fenpei = [];
    for (let k in [...Array(4)]) {
      defen.push($('.section').eq(k).find('input[name="defen"]').val());
      fenpei.push($('.section').eq(k).find('input[name="fenpei"]').val());
    }
    let paipu = generate_single_paipu(params['quanfeng'],
                                      params['jushu'],
                                      a_i_to_s(params['zuoci']),
                                      a_i_to_s(defen),
                                      a_i_to_s(fenpei));
                                      // TODO
                                      // ,fanzhong
    window.open(`paipu.html#${paipu}`, '_blank');
  });

  $('#save').on('click', (e) => {
    let defen = [];
    let fenpei = [];
    for (let k in [...Array(4)]) {
      defen.push(parseInt($('.section').eq(k).find('input[name="defen"]').val()));
      fenpei.push(parseInt($('.section').eq(k).find('input[name="fenpei"]').val()));
    }
    let log = generate_paipu_log(params['quanfeng'],
                                 params['jushu'],
                                 a_i_to_s(params['zuoci']),
                                 a_i_to_s(defen),
                                 a_i_to_s(fenpei));
    localStorage.setItem('Majiang.paipu_log', log);
  });

  $('#load').on('click', (e) => {
    let log = localStorage.getItem('Majiang.paipu_log');
    // TODO:
  });

  let click_pos = 1000;
  move_click_pos(click_pos, click_pos);
  let pai_type = null;
  let say_mode = null;
  let say_text = null;
  $(window).on('keydown', event => {
    if (event.key == 'ArrowUp') {
      let new_click_pos = prev_line(click_pos);
      move_click_pos(click_pos, new_click_pos);
      click_pos = new_click_pos;
    } else if (event.key == 'ArrowDown') {
      let new_click_pos = next_line(click_pos);
      move_click_pos(click_pos, new_click_pos);
      click_pos = new_click_pos;
    } else if (event.key == 'ArrowRight') {
      let new_click_pos = next_pai(click_pos)
      move_click_pos(click_pos, new_click_pos);
      click_pos = new_click_pos;
    } else if (event.key == 'ArrowLeft') {
      let new_click_pos = prev_pai(click_pos);
      move_click_pos(click_pos, new_click_pos);
      click_pos = new_click_pos;
    } else if (event.key == 'f') {
      set_say(click_pos, 'f', '放銃');
    } else if (event.key == 'h') {
      set_say(click_pos, 'h', 'フー');
    } else if (event.key == 'c') {
      say_mode = 'c';
      say_text = 'チー';
    } else if (event.key == 'p') {
      say_mode = 'p';
      say_text = 'ポン';
    } else if (pai_type == null) {
      switch (event.key) {
        case '0':
          pai_type = 'm';
          break;
        case '1':
          pai_type = 'p';
          break;
        case '2':
          pai_type = 's';
          break;
        case '3':
          pai_type = 'z';
          break;
        default:
          break;
      }
    } else {
      if ((['s', 'm', 'p'].includes(pai_type) && event.key > 0 && event.key < 10)
          || (pai_type == 'z' && event.key > 0 && event.key < 8)) {
        let pai = pai_type + event.key;

        if (say_mode != null) {
          let l = Math.floor(click_pos / 1000) - 1;
          let root = $(`#section${l}`);
          set_say(click_pos, say_mode, say_text);
          set_pai(click_pos, pai)
          root.append(display_fulou_panel(pai, say_mode));
        } else {
          set_pai(click_pos, pai);
          let new_click_pos = next_pos(click_pos)
          move_click_pos(click_pos, new_click_pos);
          click_pos = new_click_pos;
        }
      } else if (pai_type == 'z' && event.key == 8) {
        // 空白
        unset_pai(click_pos);
        let new_click_pos = next_pos(click_pos)
        move_click_pos(click_pos, new_click_pos);
        click_pos = new_click_pos;
      } else if (pai_type == 'z' && event.key == 9) {
        // 摸切
        let p = $(`.clickPai[data-pos="x${click_pos - 100}"]`).attr('data-p');
        set_pai_moqie(click_pos, p);
        let new_click_pos = next_pos(click_pos)
        move_click_pos(click_pos, new_click_pos);
        click_pos = new_click_pos;
      }
      pai_type = null;
    }
  });

  $('#fulouPanel0').on('click', (e) => {
    let fulou_l = e.target.getAttribute('data-l');
    let fulou_m = e.target.getAttribute('data-m');
    $(`.clickSay[data-pos="x${click_pos}"]`).attr('data-l', fulou_l);
    if (fulou_m != null) {
      $(`.clickSay[data-pos="x${click_pos}"]`).attr('data-m', fulou_m);
    }
    $('#fulouPanel0').empty();
    say_mode = null;
    say_text = null;
    let new_click_pos = next_pos(click_pos)
    move_click_pos(click_pos, new_click_pos);
    click_pos = new_click_pos;
  });

  $('#fulouPanel1').on('click', (e) => {
    let fulou_l = e.target.getAttribute('data-l');
    let fulou_m = e.target.getAttribute('data-m');
    $(`.clickSay[data-pos="x${click_pos}"]`).attr('data-l', fulou_l);
    if (fulou_m != null) {
      $(`.clickSay[data-pos="x${click_pos}"]`).attr('data-m', fulou_m);
    }
    $('#fulouPanel1').empty();
    let new_click_pos = next_pos(click_pos)
    move_click_pos(click_pos, new_click_pos);
    click_pos = new_click_pos;
  });

  $('#fulouPanel2').on('click', (e) => {
    let fulou_l = e.target.getAttribute('data-l');
    let fulou_m = e.target.getAttribute('data-m');
    $(`.clickSay[data-pos="x${click_pos}"]`).attr('data-l', fulou_l);
    if (fulou_m != null) {
      $(`.clickSay[data-pos="x${click_pos}"]`).attr('data-m', fulou_m);
    }
    $('#fulouPanel2').empty();
    let new_click_pos = next_pos(click_pos)
    move_click_pos(click_pos, new_click_pos);
    click_pos = new_click_pos;
  });

  $('#fulouPanel3').on('click', (e) => {
    let fulou_l = e.target.getAttribute('data-l');
    let fulou_m = e.target.getAttribute('data-m');
    $(`.clickSay[data-pos="x${click_pos}"]`).attr('data-l', fulou_l);
    if (fulou_m != null) {
      $(`.clickSay[data-pos="x${click_pos}"]`).attr('data-m', fulou_m);
    }
    $('#fulouPanel3').empty();
    let new_click_pos = next_pos(click_pos)
    move_click_pos(click_pos, new_click_pos);
    click_pos = new_click_pos;
  });

  function parseParams(params) {
    let _params = parse(decodeURI(params.replace(/^\?/,'')));
    // let title = '';
    // let player = ['', '', '', ''];
    // let qijia = 0;
    let quanfeng = 0;
    let jushu = 0;
    let zuoci = [0, 1, 2, 3];
    // let defen = [0, 0, 0, 0];
    // if (_params.hasOwnProperty('title')) title = _params['title'];
    // if (_params.hasOwnProperty('player')) player = _params['player'];
    // if (_params.hasOwnProperty('qijia')) qijia = _params['qijia'];
    if (_params.hasOwnProperty('quanfeng')) quanfeng = _params['quanfeng'];
    if (_params.hasOwnProperty('jushu')) jushu = _params['jushu'];
    if (_params.hasOwnProperty('zuoci')) zuoci = _params['zuoci'];
    // if (_params.hasOwnProperty('defen')) defen = _params['defen'];
    return { quanfeng: quanfeng, jushu: jushu, zuoci: zuoci }
  }

  function current_section(pos) {
    return Math.floor(click_pos / 1000) - 1;
  }

  function set_pai(pos, p) {
    let clickPai = $(`.clickPai[data-pos="x${pos}"]`);
    clickPai.attr('data-p', p);
    clickPai.attr('src', `img/transparent/${p}.png`);
    clickPai.removeClass('clickPai--blank');
  }

  function set_pai_moqie(pos, p) {
    let clickPai = $(`.clickPai[data-pos="x${pos}"]`);
    clickPai.attr('data-p', p);
    clickPai.attr('src', `img/transparent/k0.png`);
    clickPai.removeClass('clickPai--blank');
  }

  function unset_pai(pos) {
    let clickPai = $(`.clickPai[data-pos="x${pos}"]`);
    clickPai.attr('data-p', 'b0');
    clickPai.attr('src', `img/transparent/b0.png`);
    clickPai.addClass('clickPai--blank');
  }

  function set_say(pos, s, text) {
    let clickSay = $(`.clickSay[data-pos="x${pos}"]`);
    clickSay.attr('data-s', s);
    clickSay.text(text);
  }

  function display_fulou_panel(p, s) {
    let panel = $(`#fulouPanel${current_section(click_pos)}`);
    panel.empty();
    say_mode = null;
    say_text = null;
    switch (s) {
      case 'c':
        let [t, n] = p;
        let p0 = t + (parseInt(n) - 2);
        let p1 = t + (parseInt(n) - 1);
        let p2 = t + (parseInt(n) + 1);
        let p3 = t + (parseInt(n) + 2);
        let chi_mianzi = [];
        switch (n) {
          case '1':
            panel.append('<div class="fulouChoice" data-l="-" data-m="0">'
                         + pai_image_rotate(p, '-', '0')
                         + pai_image(p2, '-', '0')
                         + pai_image(p3, '-', '0') + '</div>');
            break;
          case '2':
            panel.append('<div class="fulouChoice" data-l="-" data-m="0">'
                         + pai_image_rotate(p, '-', '0')
                         + pai_image(p2, '-', '0')
                         + pai_image(p3, '-', '0') + '</div>');
            panel.append('<div class="fulouChoice" data-l="-" data-m="1">'
                         + pai_image_rotate(p, '-', '1')
                         + pai_image(p1, '-', '1')
                         + pai_image(p2, '-', '1') + '</div>');
            break;
          case '3':
          case '4':
          case '5':
          case '6':
          case '7':
            panel.append('<div class="fulouChoice" data-l="-" data-m="0">'
                         + pai_image_rotate(p, '-', '0')
                         + pai_image(p2, '-', '0')
                         + pai_image(p3, '-', '0') + '</div>');
            panel.append('<div class="fulouChoice" data-l="-" data-m="1">'
                         + pai_image_rotate(p, '-', '1')
                         + pai_image(p1, '-', '1')
                         + pai_image(p2, '-', '1') + '</div>');
            panel.append('<div class="fulouChoice" data-l="-" data-m="2">'
                         + pai_image_rotate(p, '-', '2')
                         + pai_image(p0, '-', '2')
                         + pai_image(p1, '-', '2') + '</div>');
            break;
          case '8':
            panel.append('<div class="fulouChoice" data-l="-" data-m="1">'
                         + pai_image_rotate(p, '-', '1')
                         + pai_image(p1, '-', '1')
                         + pai_image(p2, '-', '1') + '</div>');
            panel.append('<div class="fulouChoice" data-l="-" data-m="2">'
                         + pai_image_rotate(p, '-', '2')
                         + pai_image(p0, '-', '2')
                         + pai_image(p1, '-', '2') + '</div>');
            break;
          case '9':
            panel.append('<div class="fulouChoice" data-l="-" data-m="2">'
                         + pai_image_rotate(p, '-', '2')
                         + pai_image(p0, '-', '2')
                         + pai_image(p1, '-', '2') + '</div>');
            break;
        }
        break;
      case 'p':
        panel.append('<div class="fulouChoice" data-l="+">'
                     + pai_image(p, '+')
                     + pai_image(p, '+')
                     + pai_image_rotate(p, '+')
                     + '</div>');
        panel.append('<div class="fulouChoice" data-l="=">'
                     + pai_image(p, '=')
                     + pai_image_rotate(p, '=')
                     + pai_image(p, '=')
                     + '</div>');
        panel.append('<div class="fulouChoice" data-l="-">'
                     + pai_image_rotate(p, '-')
                     + pai_image(p, '-')
                     + pai_image(p, '-')
                     + '</div>');
        break;
      default:

    }
    return panel;
  }

  function pai_image(p, l, m) {
    return `<img data-l="${l}" data-m="${m}" src=img/transparent/${p}.png width="36" height="48"/>`;
  }

  function pai_image_rotate(p, l, m) {
    return `<img data-l="${l}" data-m="${m}" src=img/transparent/${p}.png width="36" height="48" style="transform:rotate(270deg)translate(0, 0)"/>`;
  }

  function next_pos(pos) {
    if (pos != next_pai(pos)) return next_pai(pos);
    if (pos != next_line_first(pos)) return next_line_first(pos);
    return pos;
  }

  function next_pai(pos) {
    let new_pos = pos + 1;
    if ($(`.clickPai[data-pos="x${new_pos}"]`).length) return new_pos;
    return pos;
  }

  function next_line(pos) {
    let new_pos = pos + 100;
    if ($(`.clickPai[data-pos="x${new_pos}"]`).length) return new_pos;
    new_pos = pos + 700;
    if ($(`.clickPai[data-pos="x${new_pos}"]`).length) return new_pos;
    return pos;
  }

  function next_line_first(pos) {
    let new_pos = Math.floor(pos / 100) * 100 + 100;
    if ($(`.clickPai[data-pos="x${new_pos}"]`).length) return new_pos;
    new_pos = Math.floor(pos / 100) * 100 + 700;
    if ($(`.clickPai[data-pos="x${new_pos}"]`).length) return new_pos;
    return pos;
  }

  function prev_pai(pos) {
    let new_pos = pos - 1;
    if ($(`.clickPai[data-pos="x${new_pos}"]`).length) return new_pos;
    return pos;
  }

  function prev_line(pos) {
    let new_pos = pos - 100;
    if ($(`.clickPai[data-pos="x${new_pos}"]`).length) return new_pos;
    new_pos = pos - 700;
    if ($(`.clickPai[data-pos="x${new_pos}"]`).length) return new_pos;
    return pos;
  }

  function move_click_pos(src, dst) {
    $(`.clickPai[data-pos="x${src}"]`).removeClass('selected');
    $(`.clickPai[data-pos="x${dst}"]`).addClass('selected');
  }

  function generate_paipu_log(quanfeng, jushu, zuoci, defen, fenpei) {
    let paipu;
    let log = '[';

    let shoupai_0 = generate_qipai('x10');
    let shoupai_1 = generate_qipai('x20');
    let shoupai_2 = generate_qipai('x30');
    let shoupai_3 = generate_qipai('x40');
    let shoupai = `["${shoupai_0}","${shoupai_1}","${shoupai_2}","${shoupai_3}"]`;
    log += `{"qipai":{"quanfeng":${quanfeng},"jushu":${jushu},"zuoci":${zuoci},"defen":${defen},"shoupai":${shoupai}}}`;

    let jieju = false;
    let _mopai_pos = 100;
    let _dapai_pos = 200;
    while (true) {
      for (let j = 1; j <= 4; j++) {
        let mopai_pos = j.toString() + _mopai_pos;
        let dapai_pos = j.toString() + _dapai_pos;
        let mopai = $(`.clickPai[data-pos="x${mopai_pos}"]`).attr('data-p');
        if (mopai == 'b0') continue;
        let [t, n] = mopai;

        let dapai = $(`.clickPai[data-pos="x${dapai_pos}"]`).attr('data-p');
        let mopai_say = $(`.clickSay[data-pos="x${mopai_pos}"]`).attr('data-s');
        let mopai_say_l = $(`.clickSay[data-pos="x${mopai_pos}"]`).attr('data-l');
        let l = j - 1;
        let m;
        switch (mopai_say) {
          // 吃
          case 'c':
            let mopai_say_m = $(`.clickSay[data-pos="x${mopai_pos}"]`).attr('data-m');
            let p0 = parseInt(n) - 2;
            let p1 = parseInt(n) - 1;
            let p2 = parseInt(n) + 1;
            let p3 = parseInt(n) + 2;
            switch (mopai_say_m) {
              case '0':
                m = mopai + '-' + p2 + p3;
                break;
              case '1':
                m = p1 + mopai + '-' + p2;
                break;
              case '2':
                m = p0 + p1 + mopai + '-';
                break;
            }
            log += `,{"fulou":{"l":${l},"m":"${m}"}}`;
            break;
          // 碰
          case 'p':
            m = mopai + n + n + mopai_say_l;
            log += `,{"fulou":{"l":${l},"m":"${m}"}}`;
            break;
          // 和
          case 'h':
            let hupaixing = generate_qipai(`x${j}3`) + mopai;
            log += `,{"hule":{"chongjia":0,"l":${l},"shoupai":"${hupaixing}","zongfen":0,"fanzhong":[],"fenpei":${fenpei}}}`;
            jieju = true;
            break;
          default:
            log += `,{"zimo":{"l":${l},"p":"${mopai}"}}`;
        }
        if (dapai == 'b0') continue;
        log += `,{"dapai":{"l":${l},"p":"${dapai}"}}`;
      }
      if (jieju) break;
      if (_mopai_pos >= 129) break;
      _mopai_pos++;
      _dapai_pos++;
    }
    log += ']';
    return log;
  }

  function generate_single_paipu(quanfeng, jushu, zuoci, defen, fenpei) {
    let game_info = get_game_info();
    let title = game_info['title'];
    let player = game_info['player'];
    let qijia = game_info['qijia'];
    let log = generate_paipu_log(quanfeng, jushu, zuoci, defen, fenpei);
    let paipu = `{"title":"${title}","player":${player},"qijia":${qijia},"log":[${log}]}`;
    return paipu;
  }

  function generate_qipai(pos_pre) {
    let qipai = [];
    $(`.clickPai[data-pos^="${pos_pre}"]`).each(function(i, e) {
      qipai.push(e.getAttribute('data-p'));
    })
    let shoupai = new Majiang.Shoupai(qipai);
    return shoupai.toString();
  };

  function a_i_to_s(a) {
    return '[' + a.join(',') + ']';
  }

  function a_s_to_s(a) {
    return '["' + a.join('","') + '"]';
  }

  function s_to_a_i(s) {
    return s.substring(1, s.length - 1).split(',');
  }

  function s_to_a_s(s) {
    return s.substring(1, s.length - 1).split(',').map(x => x.substring(1, x.length - 1));
  }

  function get_game_info() {
    let title = localStorage.getItem('Majiang.paipu_info.title')
                ? localStorage.getItem('Majiang.paipu_info.title')
                : '';
    let player = localStorage.getItem('Majiang.paipu_info.player')
                ? localStorage.getItem('Majiang.paipu_info.player')
                : '';
    let qijia = localStorage.getItem('Majiang.paipu_info.qijia')
                ? localStorage.getItem('Majiang.paipu_info.qijia')
                : '';
    let defen = localStorage.getItem('Majiang.paipu_info.defen')
                ? localStorage.getItem('Majiang.paipu_info.defen')
                : '';
    let point = localStorage.getItem('Majiang.paipu_info.point')
                ? localStorage.getItem('Majiang.paipu_info.point')
                : '';
    let rank = localStorage.getItem('Majiang.paipu_info.rank')
                ? localStorage.getItem('Majiang.paipu_info.rank')
                : '';
    return { title: title, player: player, qijia: qijia,
             defen: defen, point: point, rank: rank };
  }
});
