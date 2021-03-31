/**
 * Copyright(C) 2021 Yong Zuo
 * Released under the MIT license
 * https://github.com/SpaceDogSergei/Majiang/blob/master/LICENSE
 */

"use strict";

$(function() {
  $('.version').text('ver. ' + Majiang.VERSION);
  document.getElementById('basicData').onclick = function () {
    for (let i = 11; i <= 58; i++) {
      $('#dataTable tr:eq(' + i + ')').css('display', 'none');
    }
    $('#dataTable th:eq(0)').html('局数');
    $('#dataTable th:eq(1)').html('サンプル数');
    $('#dataTable th:eq(2)').html('局収支');
    $('#dataTable th:eq(3)').html('和了巡');
    $('#dataTable th:eq(4)').html('和了番');
    $('#dataTable th:eq(5)').html('和了点');
    $('#dataTable th:eq(6)').html('和了率');
    $('#dataTable th:eq(7)').html('ツモ率');
    $('#dataTable th:eq(8)').html('放銃率');
    $('#dataTable th:eq(9)').html('流局率');
    $('#dataTable td:eq(1)').html('全体');
    $('#dataTable td:eq(2)').html('中国');
    $('#dataTable td:eq(3)').html('日本');
    $('#dataTable td:eq(4)').html('スウェーデン');
    $('#dataTable td:eq(5)').html('カナダ');
    $('#dataTable td:eq(6)').html('イタリア');
    $('#dataTable td:eq(7)').html('スイス');
    $('#dataTable td:eq(8)').html('ロシア');
    $('#dataTable td:eq(9)').html('フランス');
    $('#dataTable td:eq(10)').html('オランダ');
    $('#dataTable td:eq(11)').html('39723');
    $('#dataTable td:eq(21)').html('158892');
    $('#dataTable td:eq(31)').html('0');
    $('#dataTable td:eq(41)').html('13.93');
    $('#dataTable td:eq(51)').html('13.92');
    $('#dataTable td:eq(61)').html('45.67');
    $('#dataTable td:eq(71)').html('24.19%');
    $('#dataTable td:eq(81)').html('25.81%');
    $('#dataTable td:eq(91)').html('18.55%');
    $('#dataTable td:eq(101)').html('3.24%');
    $('#dataTable td:eq(12)').html('1976');
    $('#dataTable td:eq(22)').html('2080');
    $('#dataTable td:eq(32)').html('2.284');
    $('#dataTable td:eq(42)').html('13.87');
    $('#dataTable td:eq(52)').html('14.04');
    $('#dataTable td:eq(62)').html('46.02');
    $('#dataTable td:eq(72)').html('27.02%');
    $('#dataTable td:eq(82)').html('25.80%');
    $('#dataTable td:eq(92)').html('16.39%');
    $('#dataTable td:eq(102)').html('');
    $('#dataTable td:eq(13)').html('10701');
    $('#dataTable td:eq(23)').html('16652');
    $('#dataTable td:eq(33)').html('1.837');
    $('#dataTable td:eq(43)').html('13.53');
    $('#dataTable td:eq(53)').html('13.30');
    $('#dataTable td:eq(63)').html('44.67');
    $('#dataTable td:eq(73)').html('27.07%');
    $('#dataTable td:eq(83)').html('26.07%');
    $('#dataTable td:eq(93)').html('16.96%');
    $('#dataTable td:eq(103)').html('');
    $('#dataTable td:eq(14)').html('1529');
    $('#dataTable td:eq(24)').html('1588');
    $('#dataTable td:eq(34)').html('1.630');
    $('#dataTable td:eq(44)').html('14.06');
    $('#dataTable td:eq(54)').html('13.07');
    $('#dataTable td:eq(64)').html('44.33');
    $('#dataTable td:eq(74)').html('27.02%');
    $('#dataTable td:eq(84)').html('25.41%');
    $('#dataTable td:eq(94)').html('17.82%');
    $('#dataTable td:eq(104)').html('');
    $('#dataTable td:eq(15)').html('12899');
    $('#dataTable td:eq(25)').html('23535');
    $('#dataTable td:eq(35)').html('1.485');
    $('#dataTable td:eq(45)').html('13.79');
    $('#dataTable td:eq(55)').html('13.24');
    $('#dataTable td:eq(65)').html('45.00');
    $('#dataTable td:eq(75)').html('26.96%');
    $('#dataTable td:eq(85)').html('27.09%');
    $('#dataTable td:eq(95)').html('16.66%');
    $('#dataTable td:eq(105)').html('');
    $('#dataTable td:eq(16)').html('10683');
    $('#dataTable td:eq(26)').html('12301');
    $('#dataTable td:eq(36)').html('0.7413');
    $('#dataTable td:eq(46)').html('13.88');
    $('#dataTable td:eq(56)').html('13.88');
    $('#dataTable td:eq(66)').html('45.31');
    $('#dataTable td:eq(76)').html('25.17%');
    $('#dataTable td:eq(86)').html('24.10%');
    $('#dataTable td:eq(96)').html('17.34%');
    $('#dataTable td:eq(106)').html('');
    $('#dataTable td:eq(17)').html('1303');
    $('#dataTable td:eq(27)').html('1312');
    $('#dataTable td:eq(37)').html('0.5000');
    $('#dataTable td:eq(47)').html('14.40');
    $('#dataTable td:eq(57)').html('13.90');
    $('#dataTable td:eq(67)').html('45.81');
    $('#dataTable td:eq(77)').html('24.85%');
    $('#dataTable td:eq(87)').html('26.69%');
    $('#dataTable td:eq(97)').html('17.76%');
    $('#dataTable td:eq(107)').html('');
    $('#dataTable td:eq(18)').html('20812');
    $('#dataTable td:eq(28)').html('31956');
    $('#dataTable td:eq(38)').html('0.3113');
    $('#dataTable td:eq(48)').html('13.95');
    $('#dataTable td:eq(58)').html('14.16');
    $('#dataTable td:eq(68)').html('45.95');
    $('#dataTable td:eq(78)').html('24.57%');
    $('#dataTable td:eq(88)').html('25.61%');
    $('#dataTable td:eq(98)').html('18.26%');
    $('#dataTable td:eq(108)').html('');
    $('#dataTable td:eq(19)').html('18709');
    $('#dataTable td:eq(29)').html('4896');
    $('#dataTable td:eq(39)').html('-0.6276');
    $('#dataTable td:eq(49)').html('13.96');
    $('#dataTable td:eq(59)').html('14.07');
    $('#dataTable td:eq(69)').html('45.98');
    $('#dataTable td:eq(79)').html('23.33%');
    $('#dataTable td:eq(89)').html('25.64%');
    $('#dataTable td:eq(99)').html('17.81%');
    $('#dataTable td:eq(109)').html('');
    $('#dataTable td:eq(20)').html('21673');
    $('#dataTable td:eq(30)').html('30038');
    $('#dataTable td:eq(40)').html('-2.433');
    $('#dataTable td:eq(50)').html('14.38');
    $('#dataTable td:eq(60)').html('14.78');
    $('#dataTable td:eq(70)').html('46.83');
    $('#dataTable td:eq(80)').html('20.48%');
    $('#dataTable td:eq(90)').html('25.29%');
    $('#dataTable td:eq(100)').html('19.45%');
    $('#dataTable td:eq(110)').html('');
  }
  document.getElementById('fanzhongData').onclick = function () {
    for (let i = 11; i <= 58; i++) {
      $('#dataTable tr:eq(' + i + ')').css('display', 'table-row');
    }
    $('#dataTable th:eq(0)').html('三色三步高');
    $('#dataTable th:eq(1)').html('五门齐');
    $('#dataTable th:eq(2)').html('混一色');
    $('#dataTable th:eq(3)').html('三色三同顺');
    $('#dataTable th:eq(4)').html('花龙');
    $('#dataTable th:eq(5)').html('碰碰和');
    $('#dataTable th:eq(6)').html('清龙');
    $('#dataTable th:eq(7)').html('不求人');
    $('#dataTable th:eq(8)').html('和绝张');
    $('#dataTable th:eq(9)').html('一色三步高');
    $('#dataTable th:eq(10)').html('全带幺');
    $('#dataTable th:eq(11)').html('七对');
    $('#dataTable th:eq(12)').html('清一色');
    $('#dataTable th:eq(13)').html('全求人');
    $('#dataTable th:eq(14)').html('小于五');
    $('#dataTable th:eq(15)').html('全不靠');
    $('#dataTable th:eq(16)').html('大于五');
    $('#dataTable th:eq(17)').html('无番和');
    $('#dataTable th:eq(18)').html('组合龙');
    $('#dataTable th:eq(19)').html('七星不靠');
    $('#dataTable th:eq(20)').html('双箭刻');
    $('#dataTable th:eq(21)').html('三暗刻');
    $('#dataTable th:eq(22)').html('推不倒');
    $('#dataTable th:eq(23)').html('杠上开花');
    $('#dataTable th:eq(24)').html('双明杠');
    $('#dataTable th:eq(25)').html('三色三节高');
    $('#dataTable th:eq(26)').html('一色三节高');
    $('#dataTable th:eq(27)').html('抢杠和');
    $('#dataTable th:eq(28)').html('小三元');
    $('#dataTable th:eq(29)').html('全大');
    $('#dataTable th:eq(30)').html('一明一暗杠');
    $('#dataTable th:eq(31)').html('海底捞月');
    $('#dataTable th:eq(32)').html('全带五');
    $('#dataTable th:eq(33)').html('全小');
    $('#dataTable th:eq(34)').html('三风刻');
    $('#dataTable th:eq(35)').html('混幺九');
    $('#dataTable th:eq(36)').html('三同刻');
    $('#dataTable th:eq(37)').html('全中');
    $('#dataTable th:eq(38)').html('妙手回春');
    $('#dataTable th:eq(39)').html('全双刻');
    $('#dataTable th:eq(40)').html('一色四步高');
    $('#dataTable th:eq(41)').html('一色三同顺');
    $('#dataTable th:eq(42)').html('四暗刻');
    $('#dataTable th:eq(43)').html('双暗杠');
    $('#dataTable th:eq(44)').html('十三幺');
    $('#dataTable th:eq(45)').html('三杠');
    $('#dataTable th:eq(46)').html('大三元');
    $('#dataTable th:eq(47)').html('小四喜');
    $('#dataTable th:eq(48)').html('一色四节高');
    $('#dataTable th:eq(49)').html('三色双龙会');
    $('#dataTable th:eq(50)').html('字一色');
    $('#dataTable th:eq(51)').html('一色双龙会');
    $('#dataTable th:eq(52)').html('大四喜');
    $('#dataTable th:eq(53)').html('绿一色');
    $('#dataTable th:eq(54)').html('九莲宝灯');
    $('#dataTable th:eq(55)').html('四杠');
    $('#dataTable th:eq(56)').html('连七对');
    $('#dataTable th:eq(57)').html('清幺九');
    $('#dataTable th:eq(58)').html('一色四同顺');
    $('#dataTable td:eq(11)').html('20.30%');
    $('#dataTable td:eq(21)').html('12.58%');
    $('#dataTable td:eq(31)').html('10.58%');
    $('#dataTable td:eq(41)').html('9.96%');
    $('#dataTable td:eq(51)').html('9.08%');
    $('#dataTable td:eq(61)').html('8.05%');
    $('#dataTable td:eq(71)').html('8.04%');
    $('#dataTable td:eq(81)').html('5.70%');
    $('#dataTable td:eq(91)').html('4.88%');
    $('#dataTable td:eq(101)').html('4.21%');
    $('#dataTable td:eq(111)').html('3.83%');
    $('#dataTable td:eq(121)').html('2.39%');
    $('#dataTable td:eq(131)').html('1.92%');
    $('#dataTable td:eq(141)').html('1.87%');
    $('#dataTable td:eq(151)').html('1.86%');
    $('#dataTable td:eq(161)').html('1.76%');
    $('#dataTable td:eq(171)').html('1.70%');
    $('#dataTable td:eq(181)').html('1.23%');
    $('#dataTable td:eq(191)').html('1.06%');
    $('#dataTable td:eq(201)').html('0.88%');
    $('#dataTable td:eq(211)').html('0.74%');
    $('#dataTable td:eq(221)').html('0.67%');
    $('#dataTable td:eq(231)').html('0.66%');
    $('#dataTable td:eq(241)').html('0.48%');
    $('#dataTable td:eq(251)').html('0.44%');
    $('#dataTable td:eq(261)').html('0.41%');
    $('#dataTable td:eq(271)').html('0.31%');
    $('#dataTable td:eq(281)').html('0.29%');
    $('#dataTable td:eq(291)').html('0.26%');
    $('#dataTable td:eq(301)').html('0.18%');
    $('#dataTable td:eq(311)').html('0.18%');
    $('#dataTable td:eq(321)').html('0.18%');
    $('#dataTable td:eq(331)').html('0.15%');
    $('#dataTable td:eq(341)').html('0.14%');
    $('#dataTable td:eq(351)').html('0.14%');
    $('#dataTable td:eq(361)').html('0.13%');
    $('#dataTable td:eq(371)').html('0.12%');
    $('#dataTable td:eq(381)').html('0.12%');
    $('#dataTable td:eq(391)').html('0.09%');
    $('#dataTable td:eq(401)').html('0.08%');
    $('#dataTable td:eq(411)').html('0.07%');
    $('#dataTable td:eq(421)').html('0.06%');
    $('#dataTable td:eq(431)').html('0.05%');
    $('#dataTable td:eq(441)').html('0.05%');
    $('#dataTable td:eq(451)').html('0.03%');
    $('#dataTable td:eq(461)').html('0.03%');
    $('#dataTable td:eq(471)').html('0.02%');
    $('#dataTable td:eq(481)').html('0.02%');
    $('#dataTable td:eq(491)').html('0.02%');
    $('#dataTable td:eq(501)').html('0.02%');
    $('#dataTable td:eq(511)').html('0.01%');
    $('#dataTable td:eq(521)').html('0.00%');
    $('#dataTable td:eq(531)').html('0.00%');
    $('#dataTable td:eq(541)').html('0.00%');
    $('#dataTable td:eq(551)').html('0.00%');
    $('#dataTable td:eq(561)').html('0.00%');
    $('#dataTable td:eq(571)').html('0.00%');
    $('#dataTable td:eq(581)').html('0.00%');
    $('#dataTable td:eq(591)').html('0.00%');
    $('#dataTable td:eq(12)').html('24.38%');
    $('#dataTable td:eq(22)').html('10.14%');
    $('#dataTable td:eq(32)').html('7.83%');
    $('#dataTable td:eq(42)').html('8.36%');
    $('#dataTable td:eq(52)').html('6.76%');
    $('#dataTable td:eq(62)').html('3.91%');
    $('#dataTable td:eq(72)').html('9.61%');
    $('#dataTable td:eq(82)').html('8.72%');
    $('#dataTable td:eq(92)').html('6.58%');
    $('#dataTable td:eq(102)').html('4.09%');
    $('#dataTable td:eq(112)').html('3.91%');
    $('#dataTable td:eq(122)').html('4.45%');
    $('#dataTable td:eq(132)').html('1.60%');
    $('#dataTable td:eq(142)').html('1.42%');
    $('#dataTable td:eq(152)').html('1.25%');
    $('#dataTable td:eq(162)').html('2.14%');
    $('#dataTable td:eq(172)').html('0.36%');
    $('#dataTable td:eq(182)').html('1.60%');
    $('#dataTable td:eq(192)').html('2.14%');
    $('#dataTable td:eq(202)').html('1.07%');
    $('#dataTable td:eq(212)').html('0.36%');
    $('#dataTable td:eq(222)').html('0.89%');
    $('#dataTable td:eq(232)').html('0.71%');
    $('#dataTable td:eq(242)').html('0.53%');
    $('#dataTable td:eq(252)').html('0.00%');
    $('#dataTable td:eq(262)').html('0.53%');
    $('#dataTable td:eq(272)').html('0.18%');
    $('#dataTable td:eq(282)').html('0.18%');
    $('#dataTable td:eq(292)').html('0.36%');
    $('#dataTable td:eq(302)').html('0.00%');
    $('#dataTable td:eq(312)').html('0.00%');
    $('#dataTable td:eq(322)').html('0.36%');
    $('#dataTable td:eq(332)').html('0.36%');
    $('#dataTable td:eq(342)').html('0.18%');
    $('#dataTable td:eq(352)').html('0.36%');
    $('#dataTable td:eq(362)').html('0.00%');
    $('#dataTable td:eq(372)').html('0.00%');
    $('#dataTable td:eq(382)').html('0.00%');
    $('#dataTable td:eq(392)').html('0.00%');
    $('#dataTable td:eq(402)').html('0.18%');
    $('#dataTable td:eq(412)').html('0.00%');
    $('#dataTable td:eq(422)').html('0.18%');
    $('#dataTable td:eq(432)').html('0.18%');
    $('#dataTable td:eq(442)').html('0.00%');
    $('#dataTable td:eq(452)').html('0.00%');
    $('#dataTable td:eq(462)').html('0.00%');
    $('#dataTable td:eq(472)').html('0.00%');
    $('#dataTable td:eq(482)').html('0.00%');
    $('#dataTable td:eq(492)').html('0.00%');
    $('#dataTable td:eq(502)').html('0.00%');
    $('#dataTable td:eq(512)').html('0.00%');
    $('#dataTable td:eq(522)').html('0.00%');
    $('#dataTable td:eq(532)').html('0.00%');
    $('#dataTable td:eq(542)').html('0.00%');
    $('#dataTable td:eq(552)').html('0.00%');
    $('#dataTable td:eq(562)').html('0.00%');
    $('#dataTable td:eq(572)').html('0.00%');
    $('#dataTable td:eq(582)').html('0.00%');
    $('#dataTable td:eq(592)').html('0.00%');
    $('#dataTable td:eq(13)').html('24.92%');
    $('#dataTable td:eq(23)').html('9.92%');
    $('#dataTable td:eq(33)').html('7.26%');
    $('#dataTable td:eq(43)').html('10.38%');
    $('#dataTable td:eq(53)').html('9.19%');
    $('#dataTable td:eq(63)').html('4.46%');
    $('#dataTable td:eq(73)').html('7.12%');
    $('#dataTable td:eq(83)').html('7.39%');
    $('#dataTable td:eq(93)').html('5.66%');
    $('#dataTable td:eq(103)').html('4.99%');
    $('#dataTable td:eq(113)').html('3.68%');
    $('#dataTable td:eq(123)').html('2.40%');
    $('#dataTable td:eq(133)').html('1.22%');
    $('#dataTable td:eq(143)').html('0.91%');
    $('#dataTable td:eq(153)').html('1.22%');
    $('#dataTable td:eq(163)').html('1.24%');
    $('#dataTable td:eq(173)').html('1.66%');
    $('#dataTable td:eq(183)').html('1.40%');
    $('#dataTable td:eq(193)').html('1.15%');
    $('#dataTable td:eq(203)').html('0.51%');
    $('#dataTable td:eq(213)').html('0.62%');
    $('#dataTable td:eq(223)').html('0.69%');
    $('#dataTable td:eq(233)').html('0.55%');
    $('#dataTable td:eq(243)').html('0.47%');
    $('#dataTable td:eq(253)').html('0.31%');
    $('#dataTable td:eq(263)').html('0.29%');
    $('#dataTable td:eq(273)').html('0.24%');
    $('#dataTable td:eq(283)').html('0.24%');
    $('#dataTable td:eq(293)').html('0.33%');
    $('#dataTable td:eq(303)').html('0.13%');
    $('#dataTable td:eq(313)').html('0.11%');
    $('#dataTable td:eq(323)').html('0.20%');
    $('#dataTable td:eq(333)').html('0.04%');
    $('#dataTable td:eq(343)').html('0.07%');
    $('#dataTable td:eq(353)').html('0.04%');
    $('#dataTable td:eq(363)').html('0.09%');
    $('#dataTable td:eq(373)').html('0.09%');
    $('#dataTable td:eq(383)').html('0.02%');
    $('#dataTable td:eq(393)').html('0.11%');
    $('#dataTable td:eq(403)').html('0.09%');
    $('#dataTable td:eq(413)').html('0.13%');
    $('#dataTable td:eq(423)').html('0.04%');
    $('#dataTable td:eq(433)').html('0.02%');
    $('#dataTable td:eq(443)').html('0.04%');
    $('#dataTable td:eq(453)').html('0.02%');
    $('#dataTable td:eq(463)').html('0.02%');
    $('#dataTable td:eq(473)').html('0.02%');
    $('#dataTable td:eq(483)').html('0.00%');
    $('#dataTable td:eq(493)').html('0.00%');
    $('#dataTable td:eq(503)').html('0.02%');
    $('#dataTable td:eq(513)').html('0.00%');
    $('#dataTable td:eq(523)').html('0.00%');
    $('#dataTable td:eq(533)').html('0.00%');
    $('#dataTable td:eq(543)').html('0.00%');
    $('#dataTable td:eq(553)').html('0.00%');
    $('#dataTable td:eq(563)').html('0.00%');
    $('#dataTable td:eq(573)').html('0.00%');
    $('#dataTable td:eq(583)').html('0.00%');
    $('#dataTable td:eq(593)').html('0.00%');
    $('#dataTable td:eq(14)').html('24.48%');
    $('#dataTable td:eq(24)').html('6.29%');
    $('#dataTable td:eq(34)').html('6.06%');
    $('#dataTable td:eq(44)').html('12.82%');
    $('#dataTable td:eq(54)').html('10.26%');
    $('#dataTable td:eq(64)').html('7.46%');
    $('#dataTable td:eq(74)').html('10.96%');
    $('#dataTable td:eq(84)').html('7.23%');
    $('#dataTable td:eq(94)').html('5.36%');
    $('#dataTable td:eq(104)').html('3.26%');
    $('#dataTable td:eq(114)').html('3.26%');
    $('#dataTable td:eq(124)').html('2.33%');
    $('#dataTable td:eq(134)').html('1.63%');
    $('#dataTable td:eq(144)').html('2.10%');
    $('#dataTable td:eq(154)').html('1.17%');
    $('#dataTable td:eq(164)').html('0.47%');
    $('#dataTable td:eq(174)').html('0.47%');
    $('#dataTable td:eq(184)').html('2.80%');
    $('#dataTable td:eq(194)').html('0.70%');
    $('#dataTable td:eq(204)').html('0.47%');
    $('#dataTable td:eq(214)').html('0.70%');
    $('#dataTable td:eq(224)').html('0.47%');
    $('#dataTable td:eq(234)').html('0.70%');
    $('#dataTable td:eq(244)').html('0.47%');
    $('#dataTable td:eq(254)').html('0.70%');
    $('#dataTable td:eq(264)').html('0.47%');
    $('#dataTable td:eq(274)').html('0.00%');
    $('#dataTable td:eq(284)').html('0.00%');
    $('#dataTable td:eq(294)').html('0.23%');
    $('#dataTable td:eq(304)').html('0.00%');
    $('#dataTable td:eq(314)').html('0.23%');
    $('#dataTable td:eq(324)').html('0.00%');
    $('#dataTable td:eq(334)').html('0.00%');
    $('#dataTable td:eq(344)').html('0.00%');
    $('#dataTable td:eq(354)').html('0.00%');
    $('#dataTable td:eq(364)').html('0.00%');
    $('#dataTable td:eq(374)').html('0.00%');
    $('#dataTable td:eq(384)').html('0.00%');
    $('#dataTable td:eq(394)').html('0.00%');
    $('#dataTable td:eq(404)').html('0.00%');
    $('#dataTable td:eq(414)').html('0.00%');
    $('#dataTable td:eq(424)').html('0.00%');
    $('#dataTable td:eq(434)').html('0.00%');
    $('#dataTable td:eq(444)').html('0.00%');
    $('#dataTable td:eq(454)').html('0.00%');
    $('#dataTable td:eq(464)').html('0.00%');
    $('#dataTable td:eq(474)').html('0.00%');
    $('#dataTable td:eq(484)').html('0.00%');
    $('#dataTable td:eq(494)').html('0.00%');
    $('#dataTable td:eq(504)').html('0.00%');
    $('#dataTable td:eq(514)').html('0.00%');
    $('#dataTable td:eq(524)').html('0.00%');
    $('#dataTable td:eq(534)').html('0.00%');
    $('#dataTable td:eq(544)').html('0.00%');
    $('#dataTable td:eq(554)').html('0.00%');
    $('#dataTable td:eq(564)').html('0.00%');
    $('#dataTable td:eq(574)').html('0.00%');
    $('#dataTable td:eq(584)').html('0.00%');
    $('#dataTable td:eq(594)').html('0.00%');
    $('#dataTable td:eq(15)').html('23.47%');
    $('#dataTable td:eq(25)').html('11.26%');
    $('#dataTable td:eq(35)').html('9.16%');
    $('#dataTable td:eq(45)').html('9.70%');
    $('#dataTable td:eq(55)').html('9.74%');
    $('#dataTable td:eq(65)').html('6.65%');
    $('#dataTable td:eq(75)').html('8.02%');
    $('#dataTable td:eq(85)').html('6.74%');
    $('#dataTable td:eq(95)').html('5.93%');
    $('#dataTable td:eq(105)').html('4.75%');
    $('#dataTable td:eq(115)').html('2.71%');
    $('#dataTable td:eq(125)').html('2.13%');
    $('#dataTable td:eq(135)').html('1.28%');
    $('#dataTable td:eq(145)').html('0.90%');
    $('#dataTable td:eq(155)').html('1.41%');
    $('#dataTable td:eq(165)').html('1.34%');
    $('#dataTable td:eq(175)').html('1.30%');
    $('#dataTable td:eq(185)').html('1.77%');
    $('#dataTable td:eq(195)').html('1.07%');
    $('#dataTable td:eq(205)').html('0.43%');
    $('#dataTable td:eq(215)').html('0.72%');
    $('#dataTable td:eq(225)').html('0.45%');
    $('#dataTable td:eq(235)').html('0.56%');
    $('#dataTable td:eq(245)').html('0.45%');
    $('#dataTable td:eq(255)').html('0.20%');
    $('#dataTable td:eq(265)').html('0.31%');
    $('#dataTable td:eq(275)').html('0.18%');
    $('#dataTable td:eq(285)').html('0.20%');
    $('#dataTable td:eq(295)').html('0.27%');
    $('#dataTable td:eq(305)').html('0.11%');
    $('#dataTable td:eq(315)').html('0.16%');
    $('#dataTable td:eq(325)').html('0.13%');
    $('#dataTable td:eq(335)').html('0.13%');
    $('#dataTable td:eq(345)').html('0.04%');
    $('#dataTable td:eq(355)').html('0.11%');
    $('#dataTable td:eq(365)').html('0.04%');
    $('#dataTable td:eq(375)').html('0.09%');
    $('#dataTable td:eq(385)').html('0.02%');
    $('#dataTable td:eq(395)').html('0.04%');
    $('#dataTable td:eq(405)').html('0.02%');
    $('#dataTable td:eq(415)').html('0.07%');
    $('#dataTable td:eq(425)').html('0.09%');
    $('#dataTable td:eq(435)').html('0.04%');
    $('#dataTable td:eq(445)').html('0.02%');
    $('#dataTable td:eq(455)').html('0.00%');
    $('#dataTable td:eq(465)').html('0.00%');
    $('#dataTable td:eq(475)').html('0.00%');
    $('#dataTable td:eq(485)').html('0.02%');
    $('#dataTable td:eq(495)').html('0.00%');
    $('#dataTable td:eq(505)').html('0.00%');
    $('#dataTable td:eq(515)').html('0.00%');
    $('#dataTable td:eq(525)').html('0.00%');
    $('#dataTable td:eq(535)').html('0.00%');
    $('#dataTable td:eq(545)').html('0.00%');
    $('#dataTable td:eq(555)').html('0.00%');
    $('#dataTable td:eq(565)').html('0.00%');
    $('#dataTable td:eq(575)').html('0.00%');
    $('#dataTable td:eq(585)').html('0.00%');
    $('#dataTable td:eq(595)').html('0.00%');
    $('#dataTable td:eq(16)').html('20.83%');
    $('#dataTable td:eq(26)').html('12.95%');
    $('#dataTable td:eq(36)').html('12.82%');
    $('#dataTable td:eq(46)').html('7.82%');
    $('#dataTable td:eq(56)').html('8.37%');
    $('#dataTable td:eq(66)').html('8.30%');
    $('#dataTable td:eq(76)').html('7.72%');
    $('#dataTable td:eq(86)').html('4.81%');
    $('#dataTable td:eq(96)').html('4.39%');
    $('#dataTable td:eq(106)').html('4.07%');
    $('#dataTable td:eq(116)').html('4.01%');
    $('#dataTable td:eq(126)').html('2.20%');
    $('#dataTable td:eq(136)').html('1.42%');
    $('#dataTable td:eq(146)').html('2.07%');
    $('#dataTable td:eq(156)').html('1.55%');
    $('#dataTable td:eq(166)').html('2.68%');
    $('#dataTable td:eq(176)').html('1.68%');
    $('#dataTable td:eq(186)').html('1.23%');
    $('#dataTable td:eq(196)').html('1.65%');
    $('#dataTable td:eq(206)').html('1.10%');
    $('#dataTable td:eq(216)').html('0.81%');
    $('#dataTable td:eq(226)').html('0.45%');
    $('#dataTable td:eq(236)').html('0.39%');
    $('#dataTable td:eq(246)').html('0.55%');
    $('#dataTable td:eq(256)').html('0.74%');
    $('#dataTable td:eq(266)').html('0.29%');
    $('#dataTable td:eq(276)').html('0.16%');
    $('#dataTable td:eq(286)').html('0.55%');
    $('#dataTable td:eq(296)').html('0.42%');
    $('#dataTable td:eq(306)').html('0.23%');
    $('#dataTable td:eq(316)').html('0.26%');
    $('#dataTable td:eq(326)').html('0.26%');
    $('#dataTable td:eq(336)').html('0.23%');
    $('#dataTable td:eq(346)').html('0.03%');
    $('#dataTable td:eq(356)').html('0.06%');
    $('#dataTable td:eq(366)').html('0.16%');
    $('#dataTable td:eq(376)').html('0.13%');
    $('#dataTable td:eq(386)').html('0.16%');
    $('#dataTable td:eq(396)').html('0.00%');
    $('#dataTable td:eq(406)').html('0.10%');
    $('#dataTable td:eq(416)').html('0.13%');
    $('#dataTable td:eq(426)').html('0.10%');
    $('#dataTable td:eq(436)').html('0.10%');
    $('#dataTable td:eq(446)').html('0.03%');
    $('#dataTable td:eq(456)').html('0.00%');
    $('#dataTable td:eq(466)').html('0.00%');
    $('#dataTable td:eq(476)').html('0.10%');
    $('#dataTable td:eq(486)').html('0.00%');
    $('#dataTable td:eq(496)').html('0.06%');
    $('#dataTable td:eq(506)').html('0.00%');
    $('#dataTable td:eq(516)').html('0.00%');
    $('#dataTable td:eq(526)').html('0.00%');
    $('#dataTable td:eq(536)').html('0.00%');
    $('#dataTable td:eq(546)').html('0.00%');
    $('#dataTable td:eq(556)').html('0.00%');
    $('#dataTable td:eq(566)').html('0.00%');
    $('#dataTable td:eq(576)').html('0.00%');
    $('#dataTable td:eq(586)').html('0.00%');
    $('#dataTable td:eq(596)').html('0.00%');
    $('#dataTable td:eq(17)').html('18.40%');
    $('#dataTable td:eq(27)').html('13.50%');
    $('#dataTable td:eq(37)').html('10.12%');
    $('#dataTable td:eq(47)').html('10.43%');
    $('#dataTable td:eq(57)').html('7.67%');
    $('#dataTable td:eq(67)').html('10.12%');
    $('#dataTable td:eq(77)').html('10.12%');
    $('#dataTable td:eq(87)').html('5.83%');
    $('#dataTable td:eq(97)').html('7.06%');
    $('#dataTable td:eq(107)').html('2.76%');
    $('#dataTable td:eq(117)').html('3.99%');
    $('#dataTable td:eq(127)').html('1.23%');
    $('#dataTable td:eq(137)').html('1.84%');
    $('#dataTable td:eq(147)').html('3.07%');
    $('#dataTable td:eq(157)').html('1.53%');
    $('#dataTable td:eq(167)').html('2.76%');
    $('#dataTable td:eq(177)').html('1.84%');
    $('#dataTable td:eq(187)').html('1.23%');
    $('#dataTable td:eq(197)').html('1.23%');
    $('#dataTable td:eq(207)').html('1.23%');
    $('#dataTable td:eq(217)').html('0.92%');
    $('#dataTable td:eq(227)').html('0.92%');
    $('#dataTable td:eq(237)').html('0.31%');
    $('#dataTable td:eq(247)').html('0.00%');
    $('#dataTable td:eq(257)').html('0.61%');
    $('#dataTable td:eq(267)').html('0.00%');
    $('#dataTable td:eq(277)').html('0.31%');
    $('#dataTable td:eq(287)').html('0.31%');
    $('#dataTable td:eq(297)').html('0.31%');
    $('#dataTable td:eq(307)').html('0.00%');
    $('#dataTable td:eq(317)').html('0.31%');
    $('#dataTable td:eq(327)').html('0.00%');
    $('#dataTable td:eq(337)').html('0.31%');
    $('#dataTable td:eq(347)').html('0.00%');
    $('#dataTable td:eq(357)').html('0.00%');
    $('#dataTable td:eq(367)').html('0.00%');
    $('#dataTable td:eq(377)').html('0.00%');
    $('#dataTable td:eq(387)').html('0.31%');
    $('#dataTable td:eq(397)').html('0.00%');
    $('#dataTable td:eq(407)').html('0.00%');
    $('#dataTable td:eq(417)').html('0.00%');
    $('#dataTable td:eq(427)').html('0.00%');
    $('#dataTable td:eq(437)').html('0.00%');
    $('#dataTable td:eq(447)').html('0.00%');
    $('#dataTable td:eq(457)').html('0.00%');
    $('#dataTable td:eq(467)').html('0.00%');
    $('#dataTable td:eq(477)').html('0.00%');
    $('#dataTable td:eq(487)').html('0.00%');
    $('#dataTable td:eq(497)').html('0.00%');
    $('#dataTable td:eq(507)').html('0.00%');
    $('#dataTable td:eq(517)').html('0.00%');
    $('#dataTable td:eq(527)').html('0.00%');
    $('#dataTable td:eq(537)').html('0.00%');
    $('#dataTable td:eq(547)').html('0.00%');
    $('#dataTable td:eq(557)').html('0.00%');
    $('#dataTable td:eq(567)').html('0.00%');
    $('#dataTable td:eq(577)').html('0.00%');
    $('#dataTable td:eq(587)').html('0.00%');
    $('#dataTable td:eq(597)').html('0.00%');
    $('#dataTable td:eq(18)').html('19.47%');
    $('#dataTable td:eq(28)').html('13.75%');
    $('#dataTable td:eq(38)').html('11.69%');
    $('#dataTable td:eq(48)').html('10.01%');
    $('#dataTable td:eq(58)').html('9.11%');
    $('#dataTable td:eq(68)').html('7.95%');
    $('#dataTable td:eq(78)').html('8.15%');
    $('#dataTable td:eq(88)').html('5.23%');
    $('#dataTable td:eq(98)').html('4.60%');
    $('#dataTable td:eq(108)').html('4.52%');
    $('#dataTable td:eq(118)').html('4.09%');
    $('#dataTable td:eq(128)').html('2.69%');
    $('#dataTable td:eq(138)').html('2.24%');
    $('#dataTable td:eq(148)').html('1.81%');
    $('#dataTable td:eq(158)').html('2.02%');
    $('#dataTable td:eq(168)').html('1.53%');
    $('#dataTable td:eq(178)').html('1.73%');
    $('#dataTable td:eq(188)').html('0.88%');
    $('#dataTable td:eq(198)').html('0.96%');
    $('#dataTable td:eq(208)').html('0.90%');
    $('#dataTable td:eq(218)').html('0.80%');
    $('#dataTable td:eq(228)').html('0.56%');
    $('#dataTable td:eq(238)').html('0.64%');
    $('#dataTable td:eq(248)').html('0.41%');
    $('#dataTable td:eq(258)').html('0.52%');
    $('#dataTable td:eq(268)').html('0.37%');
    $('#dataTable td:eq(278)').html('0.33%');
    $('#dataTable td:eq(288)').html('0.29%');
    $('#dataTable td:eq(298)').html('0.25%');
    $('#dataTable td:eq(308)').html('0.15%');
    $('#dataTable td:eq(318)').html('0.20%');
    $('#dataTable td:eq(328)').html('0.15%');
    $('#dataTable td:eq(338)').html('0.18%');
    $('#dataTable td:eq(348)').html('0.18%');
    $('#dataTable td:eq(358)').html('0.15%');
    $('#dataTable td:eq(368)').html('0.17%');
    $('#dataTable td:eq(378)').html('0.09%');
    $('#dataTable td:eq(388)').html('0.10%');
    $('#dataTable td:eq(398)').html('0.11%');
    $('#dataTable td:eq(408)').html('0.06%');
    $('#dataTable td:eq(418)').html('0.03%');
    $('#dataTable td:eq(428)').html('0.08%');
    $('#dataTable td:eq(438)').html('0.04%');
    $('#dataTable td:eq(448)').html('0.08%');
    $('#dataTable td:eq(458)').html('0.05%');
    $('#dataTable td:eq(468)').html('0.01%');
    $('#dataTable td:eq(478)').html('0.00%');
    $('#dataTable td:eq(488)').html('0.04%');
    $('#dataTable td:eq(498)').html('0.03%');
    $('#dataTable td:eq(508)').html('0.04%');
    $('#dataTable td:eq(518)').html('0.01%');
    $('#dataTable td:eq(528)').html('0.00%');
    $('#dataTable td:eq(538)').html('0.00%');
    $('#dataTable td:eq(548)').html('0.00%');
    $('#dataTable td:eq(558)').html('0.00%');
    $('#dataTable td:eq(568)').html('0.00%');
    $('#dataTable td:eq(578)').html('0.00%');
    $('#dataTable td:eq(588)').html('0.00%');
    $('#dataTable td:eq(598)').html('0.00%');
    $('#dataTable td:eq(19)').html('20.44%');
    $('#dataTable td:eq(29)').html('12.44%');
    $('#dataTable td:eq(39)').html('9.95%');
    $('#dataTable td:eq(49)').html('10.75%');
    $('#dataTable td:eq(59)').html('9.49%');
    $('#dataTable td:eq(69)').html('7.89%');
    $('#dataTable td:eq(79)').html('8.51%');
    $('#dataTable td:eq(89)').html('5.79%');
    $('#dataTable td:eq(99)').html('4.83%');
    $('#dataTable td:eq(109)').html('4.28%');
    $('#dataTable td:eq(119)').html('4.44%');
    $('#dataTable td:eq(129)').html('2.35%');
    $('#dataTable td:eq(139)').html('1.86%');
    $('#dataTable td:eq(149)').html('1.55%');
    $('#dataTable td:eq(159)').html('1.69%');
    $('#dataTable td:eq(169)').html('2.00%');
    $('#dataTable td:eq(179)').html('1.73%');
    $('#dataTable td:eq(189)').html('1.46%');
    $('#dataTable td:eq(199)').html('1.02%');
    $('#dataTable td:eq(209)').html('0.86%');
    $('#dataTable td:eq(219)').html('0.80%');
    $('#dataTable td:eq(229)').html('0.84%');
    $('#dataTable td:eq(239)').html('0.98%');
    $('#dataTable td:eq(249)').html('0.51%');
    $('#dataTable td:eq(259)').html('0.36%');
    $('#dataTable td:eq(269)').html('0.35%');
    $('#dataTable td:eq(279)').html('0.18%');
    $('#dataTable td:eq(289)').html('0.22%');
    $('#dataTable td:eq(299)').html('0.18%');
    $('#dataTable td:eq(309)').html('0.27%');
    $('#dataTable td:eq(319)').html('0.16%');
    $('#dataTable td:eq(329)').html('0.18%');
    $('#dataTable td:eq(339)').html('0.15%');
    $('#dataTable td:eq(349)').html('0.11%');
    $('#dataTable td:eq(359)').html('0.11%');
    $('#dataTable td:eq(369)').html('0.16%');
    $('#dataTable td:eq(379)').html('0.20%');
    $('#dataTable td:eq(389)').html('0.09%');
    $('#dataTable td:eq(399)').html('0.15%');
    $('#dataTable td:eq(409)').html('0.09%');
    $('#dataTable td:eq(419)').html('0.05%');
    $('#dataTable td:eq(429)').html('0.05%');
    $('#dataTable td:eq(439)').html('0.07%');
    $('#dataTable td:eq(449)').html('0.04%');
    $('#dataTable td:eq(459)').html('0.04%');
    $('#dataTable td:eq(469)').html('0.00%');
    $('#dataTable td:eq(479)').html('0.02%');
    $('#dataTable td:eq(489)').html('0.05%');
    $('#dataTable td:eq(499)').html('0.02%');
    $('#dataTable td:eq(509)').html('0.00%');
    $('#dataTable td:eq(519)').html('0.00%');
    $('#dataTable td:eq(529)').html('0.00%');
    $('#dataTable td:eq(539)').html('0.00%');
    $('#dataTable td:eq(549)').html('0.00%');
    $('#dataTable td:eq(559)').html('0.00%');
    $('#dataTable td:eq(569)').html('0.00%');
    $('#dataTable td:eq(579)').html('0.00%');
    $('#dataTable td:eq(589)').html('0.00%');
    $('#dataTable td:eq(599)').html('0.00%');
    $('#dataTable td:eq(20)').html('13.23%');
    $('#dataTable td:eq(30)').html('15.94%');
    $('#dataTable td:eq(40)').html('12.99%');
    $('#dataTable td:eq(50)').html('10.40%');
    $('#dataTable td:eq(60)').html('9.05%');
    $('#dataTable td:eq(70)').html('12.40%');
    $('#dataTable td:eq(80)').html('8.26%');
    $('#dataTable td:eq(90)').html('3.77%');
    $('#dataTable td:eq(100)').html('3.67%');
    $('#dataTable td:eq(110)').html('2.91%');
    $('#dataTable td:eq(120)').html('4.21%');
    $('#dataTable td:eq(130)').html('2.08%');
    $('#dataTable td:eq(140)').html('3.28%');
    $('#dataTable td:eq(150)').html('2.78%');
    $('#dataTable td:eq(160)').html('3.14%');
    $('#dataTable td:eq(170)').html('2.15%');
    $('#dataTable td:eq(180)').html('2.50%');
    $('#dataTable td:eq(190)').html('0.70%');
    $('#dataTable td:eq(200)').html('0.73%');
    $('#dataTable td:eq(210)').html('1.22%');
    $('#dataTable td:eq(220)').html('0.93%');
    $('#dataTable td:eq(230)').html('0.80%');
    $('#dataTable td:eq(240)').html('0.68%');
    $('#dataTable td:eq(250)').html('0.50%');
    $('#dataTable td:eq(260)').html('0.60%');
    $('#dataTable td:eq(270)').html('0.62%');
    $('#dataTable td:eq(280)').html('0.63%');
    $('#dataTable td:eq(290)').html('0.34%');
    $('#dataTable td:eq(300)').html('0.20%');
    $('#dataTable td:eq(310)').html('0.31%');
    $('#dataTable td:eq(320)').html('0.24%');
    $('#dataTable td:eq(330)').html('0.23%');
    $('#dataTable td:eq(340)').html('0.13%');
    $('#dataTable td:eq(350)').html('0.29%');
    $('#dataTable td:eq(360)').html('0.26%');
    $('#dataTable td:eq(370)').html('0.20%');
    $('#dataTable td:eq(380)').html('0.23%');
    $('#dataTable td:eq(390)').html('0.29%');
    $('#dataTable td:eq(400)').html('0.08%');
    $('#dataTable td:eq(410)').html('0.11%');
    $('#dataTable td:eq(420)').html('0.08%');
    $('#dataTable td:eq(430)').html('0.07%');
    $('#dataTable td:eq(440)').html('0.03%');
    $('#dataTable td:eq(450)').html('0.08%');
    $('#dataTable td:eq(460)').html('0.03%');
    $('#dataTable td:eq(470)').html('0.08%');
    $('#dataTable td:eq(480)').html('0.03%');
    $('#dataTable td:eq(490)').html('0.02%');
    $('#dataTable td:eq(500)').html('0.02%');
    $('#dataTable td:eq(510)').html('0.02%');
    $('#dataTable td:eq(520)').html('0.02%');
    $('#dataTable td:eq(530)').html('0.02%');
    $('#dataTable td:eq(540)').html('0.00%');
    $('#dataTable td:eq(550)').html('0.00%');
    $('#dataTable td:eq(560)').html('0.00%');
    $('#dataTable td:eq(570)').html('0.00%');
    $('#dataTable td:eq(580)').html('0.00%');
    $('#dataTable td:eq(590)').html('0.00%');
    $('#dataTable td:eq(600)').html('0.00%');
  }
});
