/**
 * Copyright(C) 2017 Satoshi Kobayashi
 * Copyright(C) 2020 Yong Zuo
 * Released under the MIT license
 * https://github.com/SpaceDogSergei/Majiang/blob/master/LICENSE
 */

"use strict";

import { parse } from 'querystring';

$(function() {
  let params = parse(location.search);
  $('.version').text('ver. ' + Majiang.VERSION);
  if (params.hasOwnProperty('paipu')) {
    new Majiang.View.PaipuFile($('#file .file')).load_paipu(params['paipu']);
  } else if (location.hash) {
    let paipuFile = new Majiang.View.PaipuFile($('#file .file'), 'Majiang.paipu');
    paipuFile._paipu.add(JSON.parse(decodeURI(location.hash.replace(/^#/,''))));
    paipuFile.open_player(paipuFile._paipu.length() - 1);
    paipuFile._paipu.del(paipuFile.length - 1);
  }
  else {
    new Majiang.View.PaipuFile($('#file .file'), 'Majiang.paipu');
  }
});
