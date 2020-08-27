/**
 * Copyright(C) 2020 Yong Zuo
 * Released under the MIT license
 * https://github.com/SpaceDogSergei/Majiang/blob/master/LICENSE
 */

"use strict";

$(function() {
  $('#saveInfo').on('click', (e) => {
    let title = $('input[name="title"]').val();
    localStorage.setItem('Majiang.paipu_info.title', title);
    let player = [];
    player.push($('input[name="player0"]').val());
    player.push($('input[name="player1"]').val());
    player.push($('input[name="player2"]').val());
    player.push($('input[name="player3"]').val());
    player = JSON.stringify(player);
    localStorage.setItem('Majiang.paipu_info.player', player);
    let qijia = 0;
    localStorage.setItem('Majiang.paipu_info.qijia', qijia);
    let fenpei = [];
    let defen = [];
    defen.push([0, 0, 0, 0]);
    for (let k in [...Array(16)]) {
      let _fenpei = [];
      for (let l in [...Array(4)]) {
        _fenpei.push(parseInt($(`tr[data-ju="${k}"]`, '.paipuInfo').find(`input[name="fenpei${l}"]`).val()));
      }
      fenpei.push(_fenpei);
      if (k != 15) {
        // 最后一行为总得分
        let _defen = [];
        for (let l in [...Array(4)]) {
          _defen.push(parseInt($(`tr[data-ju="${k}"]`, '.paipuInfo').find(`input[name="defen${l}"]`).val()));
        }
        defen.push(_defen);
      }
    }
    localStorage.setItem('Majiang.paipu_info.fenpei', JSON.stringify(fenpei));
    localStorage.setItem('Majiang.paipu_info.defen', JSON.stringify(defen));
    let zongdefen = [];
    zongdefen.push(parseInt($('input[name="zongdefen0"]').val()));
    zongdefen.push(parseInt($('input[name="zongdefen1"]').val()));
    zongdefen.push(parseInt($('input[name="zongdefen2"]').val()));
    zongdefen.push(parseInt($('input[name="zongdefen3"]').val()));
    // zongdefen = '[' + zongdefen.join(',') + ']';
    zongdefen = JSON.stringify(zongdefen);
    localStorage.setItem('Majiang.paipu_info.zongdefen', zongdefen);
    let point = [];
    point.push(parseInt($('input[name="point0"]').val()));
    point.push(parseInt($('input[name="point1"]').val()));
    point.push(parseInt($('input[name="point2"]').val()));
    point.push(parseInt($('input[name="point3"]').val()));
    // point = '[' + point.join(',') + ']';
    point = JSON.stringify(point);
    localStorage.setItem('Majiang.paipu_info.point', point);
    let rank = [];
    rank.push(parseInt($('input[name="rank0"]').val()));
    rank.push(parseInt($('input[name="rank1"]').val()));
    rank.push(parseInt($('input[name="rank2"]').val()));
    rank.push(parseInt($('input[name="rank3"]').val()));
    // rank = '[' + rank.join(',') + ']';
    rank = JSON.stringify(rank);
    localStorage.setItem('Majiang.paipu_info.rank', rank);
    debugger;
  });

  $('.loadButtonSingle').on('click', (e) => {
    let ju = e.target.parentElement.parentElement.getAttribute('data-ju');
    let log_single = localStorage.getItem('Majiang.paipu_log');
    let log_obj = JSON.parse(log_single);
    log_obj[0]['qipai']['quanfeng'] = Math.floor(ju / 4);
    log_obj[0]['qipai']['jushu'] = ju % 4;
    log_single = JSON.stringify(log_obj);
    // preview link
    e.target.parentElement
            .previousElementSibling
            .firstElementChild
            .setAttribute(
      'href', `paipu.html#${generate_single_paipu_from_log(log_single)}`
    );
    // edit link
    e.target.parentElement
            .previousElementSibling
            .previousElementSibling
            .firstElementChild
            .setAttribute(
      'data-log', log_single
    );
    // $('.paipuSingle').attr('data-log', log);
    // $('.paipuSinglePreview')[0].href = `paipu.html#${generate_single_paipu_from_log(log)}`;
  });

  // 整体预览
  $('#preview').on('click', (e) => {
    let log = '[';
    for (let j in [...Array(16)]) {
      log += $(`.paipuLog__ju[data-ju="${j}"] .paipuSingle`).attr('data-log') + ',';
    }
    // 去除最后的逗号
    log = log.substring(0, log.length - 1);
    log += ']';
    let paipu_full = generate_paipu_full(log);
    window.open(`paipu.html#${paipu_full}`);
  });

  function generate_paipu_full(log) {
    let game_info = get_game_info();
    let title = game_info['title'];
    let player = game_info['player'];
    let qijia = game_info['qijia'];
    let defen = game_info['defen'];
    let point = game_info['point'];
    let rank = game_info['rank'];
    let paipu = `{"title":"${title}","player":${player},"qijia":${qijia},"log":${log},"defen":${defen},"point":${point},"rank":${rank}}`;
    return paipu;
  }

  function generate_single_paipu_from_log(log_single) {
    let game_info = get_game_info();
    let title = game_info['title'];
    let player = game_info['player'];
    let qijia = game_info['qijia'];
    let paipu = `{"title":"${title}","player":${player},"qijia":${qijia},"log":[${log_single}]}`;
    return paipu;
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
    let defen = localStorage.getItem('Majiang.paipu_info.zongdefen')
                ? localStorage.getItem('Majiang.paipu_info.zongdefen')
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
