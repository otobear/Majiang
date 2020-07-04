/**
 * Copyright(C) 2017 Satoshi Kobayashi
 * Copyright(C) 2020 Yong Zuo
 * Released under the MIT license
 * https://github.com/SpaceDogSergei/Majiang/blob/master/LICENSE
 */

"use strict";

$(function(){
  $('.version').text('ver. ' + Majiang.VERSION);
  if (location.search) {
    new Majiang.View.PaipuFile($('#file .file'))
      .load_paipu(location.search.replace(/^\?/,''), location.hash.replace(/^#/,''));
  }
  else {
    new Majiang.View.PaipuFile($('#file .file'), 'Majiang.paipu');
  }
});
