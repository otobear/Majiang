"use strict";

const $ = require('jquery');

const Game = require('./game');

module.exports = class GameCtl {

constructor(root, game) {
  this._root = root;
  this._game = game;

  game._view = new Game(root, game._model);
  game._view.open_shoupai = false;
  game._view.open_he = false;

  this.set_handler();
}

set_handler() {
  this.clear_handler();
  this.update_controller();

  const controller = $('.controller', this._root);
  const game = this._game;
  $('.sound', controller).on('mousedown', () => this.sound());
  $('.plus',  controller).on('mousedown', () => this.speed(game._speed + 1));
  $('.minus', controller).on('mousedown', () => this.speed(game._speed - 1));

  $(window).on('keyup', event => {
    if (event.key == '+')  this.speed(game._speed + 1);
    else if (event.key == '-')  this.speed(game._speed - 1);
    else if (event.key == 'a')  this.sound();
  });
}

clear_handler() {}

update_controller() {
  const game = this._game;
  const controller = $('.controller', this._root);
  controller.removeClass('hide');

  $('.exit', controller).addClass('hide');
  $('.summary', controller).addClass('hide');
  $('.first', controller).addClass('hide');
  $('.prev', controller).addClass('hide');
  $('.autoplay', controller).addClass('hide');
  $('.next', controller).addClass('hide');
  $('.last', controller).addClass('hide');

  if (game._view.sound_on) {
    $('.sound.off', controller).addClass('hide');
    $('.sound.on',  controller).removeClass('hide');
  }
  else {
    $('.sound.on',  controller).addClass('hide');
    $('.sound.off', controller).removeClass('hide');
  }

  if (game._speed) {
    $('.speed', controller).removeClass('hide');
    $('.speed span', controller).each((i, n) => {
      $(n).css('visibility', i + 1 > game._speed ? 'hidden' : 'visible');
    });
  }
  else {
    $('.sound', controller).addClass('hide');
    $('.speed', controller).addClass('hide');
  }
}

speed(speed) {
  const game = this._game;
  game._speed = speed;
  if (game._speed < 1) game._speed = 1;
  if (game._speed > 5) game._speed = 5;
  this.update_controller();
  return false;
}

sound() {
  const game = this._game;
  game._view.sound_on = !game._view.sound_on;
  this.update_controller();
  return false;
}

shoupai() {
  const game = this._game;
  if (game._status == 'hule') return true;
  if (game._status == 'liuju') return true;
  if (game._status == 'jieju')  return true;
  game._view.open_shoupai = !game._view.open_shoupai;
  game._view.redraw();
  return false;
}

he() {
  const game = this._game;
  if (game._status == 'hule')   return true;
  if (game._status == 'liuju') return true;
  if (game._status == 'jieju')  return true;
  game._view.open_he = !game._view.open_he;
  game._view.redraw();
  return false;
}

start() {
  const game = this._game;
  $('.download a', this._root).addClass('hide');
  game.start();
}

stop() {
  const game = this._game;
  game.stop();

  let ua = navigator.userAgent;
  if (ua.match(/\bMobile\b/) ||
    ua.match(/\bMSIE\b/) || ua.match(/\bTrident\b/)) return;

  let blob = new Blob([ JSON.stringify(game._paipu) ],
            { type: 'application/json' });
  $('.download a', this._root)
    .attr('href', URL.createObjectURL(blob))
    .attr('download', '牌譜.json')
    .removeClass('hide');
}

}
