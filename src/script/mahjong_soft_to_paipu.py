import os
import sys
import time
import json
import numpy as np
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support.select import Select

driver = webdriver.Chrome()
driver.get('https://mahjongsoft.com/sessions.php')
driver.delete_cookie('language')
driver.add_cookie({'name': 'language', 'value': 'cn'})
# link = driver.find_element_by_xpath('//table[@id="table_sessions"]/tbody/tr[1]/td[2]/a').text
# game_nums = driver.find_element_by_xpath('//table[@id="table_sessions"]/tbody/tr[1]/td[5]').text
# paipu_link = f'https://mahjongsoft.com/mcrm_replay.php?session={link}&game=1'
# paipu_link = 'https://mahjongsoft.com/mcrm_replay.php?session=7616&game=15'
paipu_link = 'https://mahjongsoft.com/mcrm_replay.php?session=27543&game=10&table=4'
driver.get(paipu_link)

ms_arr = [
  'em', # 0
  '1b', '2b', '3b', '4b', '5b', '6b', '7b', '8b', '9b', # 1~9
  '1c', '2c', '3c', '4c', '5c', '6c', '7c', '8c', '9c', # 10~18
  '1d', '2d', '3d', '4d', '5d', '6d', '7d', '8d', '9d', # 19~27
  'we', 'ws', 'ww', 'wn', 'dr', 'dg', 'dw', # 28~34
  'f1', 'f2', 'f3', 'f4', 's1', 's2', 's3', 's4' # 35~42
]
ms_to_pai = {
  '1b': 's1',
  '2b': 's2',
  '3b': 's3',
  '4b': 's4',
  '5b': 's5',
  '6b': 's6',
  '7b': 's7',
  '8b': 's8',
  '9b': 's9',
  '1c': 'm1',
  '2c': 'm2',
  '3c': 'm3',
  '4c': 'm4',
  '5c': 'm5',
  '6c': 'm6',
  '7c': 'm7',
  '8c': 'm8',
  '9c': 'm9',
  '1d': 'p1',
  '2d': 'p2',
  '3d': 'p3',
  '4d': 'p4',
  '5d': 'p5',
  '6d': 'p6',
  '7d': 'p7',
  '8d': 'p8',
  '9d': 'p9',
  'we': 'z1',
  'ws': 'z2',
  'ww': 'z3',
  'wn': 'z4',
  'dr': 'z5',
  'dg': 'z6',
  'dw': 'z7',
  'f1': 'h1',
  'f2': 'h2',
  'f3': 'h3',
  'f4': 'h4',
  's1': 'h5',
  's2': 'h6',
  's3': 'h7',
  's4': 'h8',
}
ms_to_chi = {
  '2b': 's123',
  '3b': 's234',
  '4b': 's345',
  '5b': 's456',
  '6b': 's567',
  '7b': 's678',
  '8b': 's789',
  '2c': 'm123',
  '3c': 'm234',
  '4c': 'm345',
  '5c': 'm456',
  '6c': 'm567',
  '7c': 'm678',
  '8c': 'm789',
  '2d': 'p123',
  '3d': 'p234',
  '4d': 'p345',
  '5d': 'p456',
  '6d': 'p567',
  '7d': 'p678',
  '8d': 'p789',
}
ms_to_peng = {
  '1b': 's111',
  '2b': 's222',
  '3b': 's333',
  '4b': 's444',
  '5b': 's555',
  '6b': 's666',
  '7b': 's777',
  '8b': 's888',
  '9b': 's999',
  '1c': 'm111',
  '2c': 'm222',
  '3c': 'm33',
  '4c': 'm444',
  '5c': 'm555',
  '6c': 'm666',
  '7c': 'm777',
  '8c': 'm888',
  '9c': 'm999',
  '1d': 's111',
  '2d': 's222',
  '3d': 's333',
  '4d': 's444',
  '5d': 's555',
  '6d': 's666',
  '7d': 's777',
  '8d': 's888',
  '9d': 's999',
  'we': 'z111',
  'ws': 'z222',
  'ww': 'z333',
  'wn': 'z444',
  'dr': 'z555',
  'dg': 'z666',
  'dw': 'z777',
}
ms_to_gang = {
  '1b': 's1111',
  '2b': 's2222',
  '3b': 's3333',
  '4b': 's4444',
  '5b': 's5555',
  '6b': 's6666',
  '7b': 's7777',
  '8b': 's8888',
  '9b': 's9999',
  '1c': 'm1111',
  '2c': 'm2222',
  '3c': 'm333',
  '4c': 'm4444',
  '5c': 'm5555',
  '6c': 'm6666',
  '7c': 'm7777',
  '8c': 'm8888',
  '9c': 'm9999',
  '1d': 's1111',
  '2d': 's2222',
  '3d': 's3333',
  '4d': 's4444',
  '5d': 's5555',
  '6d': 's6666',
  '7d': 's7777',
  '8d': 's8888',
  '9d': 's9999',
  'we': 'z1111',
  'ws': 'z2222',
  'ww': 'z3333',
  'wn': 'z4444',
  'dr': 'z5555',
  'dg': 'z6666',
  'dw': 'z7777',
}
fulou_dir = ['-', '=', '+']
num_to_fanzhong_name_zh = []
for i in range(82):
  num_to_fanzhong_name_zh.append(driver.execute_script(f'return STR["mcrfan{i+1}"]'))
fanzhong_value = driver.execute_script('return lb')

def convert_pai_arr_to_str(pai_arr):
  qipais = ''
  m = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  p = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  s = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  z = [0, 0, 0, 0, 0, 0, 0]
  h = 0
  for pai in pai_arr:
    if pai <= 9:
      s[pai - 1] += 1
    elif pai <= 18:
      m[pai - 10] += 1
    elif pai <= 27:
      p[pai - 19] += 1
    elif pai <= 34:
      z[pai - 28] += 1
    else:
      h += 1
  if sum(m):
    qipais += 'm'
    for i in range(9):
      while m[i]:
        qipais += str(i + 1)
        m[i] -= 1
  if sum(p):
    qipais += 'p'
    for i in range(9):
      while p[i]:
        qipais += str(i + 1)
        p[i] -= 1
  if sum(s):
    qipais += 's'
    for i in range(9):
      while s[i]:
        qipais += str(i + 1)
        s[i] -= 1
  if sum(z):
    qipais += 'z'
    for i in range(7):
      while z[i]:
        qipais += str(i + 1)
        z[i] -= 1
  if h:
    qipais += f'h{h}'
  return qipais

actions = ActionChains(driver)
paipu = {}

session = int(driver.execute_script('return new URL(location.href).searchParams.get("session")'))
game = int(driver.execute_script('return new URL(location.href).searchParams.get("game")'))
paipu['title'] = f'mahjongsoft_com_session_{session}_{game}'
player = []
for i in range(4):
  player.append(driver.execute_script(f'return V.b[{i}].name'))
paipu['player'] = player
nation = []
for i in range(4):
  nation.append(driver.execute_script(f'return V.b[{i}].qb'))
paipu['nation'] = nation
paipu['qijia'] = 0

paipu['log'] = []

log = []
qipai = {}
qipai['quanfeng'] = game // 4
qipai['jushu'] = game % 4
qipai['zuoci'] = [0, 1, 2, 3]
defen = []
mopai_first = 0
for i in range(4):
  defen.append(driver.execute_script(f'return V.b[{i}].M'))
qipai['defen'] = defen
shoupai = []
for i in range(4):
  peipai = driver.execute_script(f'return V.l[{i}].j')
  if i == 0:
    # 庄家14->13张
    mopai_first = peipai[-1]
    peipai = peipai[:-1]
  shoupai.append(convert_pai_arr_to_str(sorted(peipai)))
qipai['shoupai'] = shoupai

log.append({'qipai': qipai})
log.append({'zimo': {'l': 0, 'p': ms_to_pai[ms_arr[mopai_first]]}})

shan = driver.execute_script('return V.V')
history = driver.execute_script('return V.history')

def hule_json(l, chongjia):
  fanzhong = []
  zongfen = 0
  fanzhong_num = driver.execute_script(f'return V.b[{l}].l.Ba.Da[0]')
  if driver.execute_script(f'return V.b[{l}].l.Ba.hb') < 8:
    fanzhong_num = fanzhong_num[:-2] + fanzhong_num[-1:]
  for idx, f_num in enumerate(fanzhong_num):
    if f_num > 0:
      fanzhong.append({'name_zh': num_to_fanzhong_name_zh[idx], 'fenshu': fanzhong_value[idx] * f_num})
      zongfen += fanzhong_value[idx] * f_num

  shoupai = convert_pai_arr_to_str(driver.execute_script(f'return V.l[{l}].j')) + ms_to_pai[ms_arr[driver.execute_script(f'return V.b[{l}].l.h')]]
  fulou_types = driver.execute_script(f'return V.l[{l}].g')
  fulou_pais = driver.execute_script(f'return V.l[{l}].a')
  fulou_idx = driver.execute_script(f'return V.l[{l}].Db')
  for t, p, i in zip(fulou_types, fulou_pais, fulou_idx):
    if t == 1:
      # 吃
      fulou_str = ms_to_chi[ms_arr[p]]
      fulou_ = fulou_str[:i + 2] + '-' + fulou_str[i + 2:]
      shoupai += f',{fulou_}'
    elif t == 3:
      # 碰
      fulou_str = ms_to_peng[ms_arr[p]]
      fulou_ = fulou_str + fulou_dir[i]
      shoupai += f',{fulou_}'
    elif t == 6:
      # 加杠
      fulou_str = ms_to_gang[ms_arr[p]]
      fulou_ = fulou_str[:4] + fulou_dir[i] + fulou_str[4:]
      shoupai += f',{fulou_}'
    elif t == 7:
      # 暗杠
      fulou_= ms_to_gang[ms_arr[p]]
      shoupai += f',{fulou_}'
    else:
      shoupai += ','

  defen = driver.execute_script('return V.b')
  hulefen = [d['O'] for d in defen]
  fafen = [d['Ka'] for d in defen]
  fenpei = [d['O'] + d['Ka'] for d in defen]
  result = {'chongjia': chongjia, 'l': l, 'shoupai': shoupai, 'zongfen': zongfen, 'fanzhong': fanzhong, 'fenpei': fenpei}
  return result

count = 0
history_idx = 0
l = 0
gzimo = False
while history_idx < len(history):
  if driver.find_elements_by_xpath('//button[@id="nextaction_button"]'):
    driver.execute_script('document.getElementById("nextaction_button").click()')
  if history[history_idx:].startswith('RP'):
    # 途中补花
    buhua = {'l': l, 'p': ms_to_pai[history[history_idx + 2:history_idx + 4]]}
    log_ = {'buhua': buhua}
    log.append(log_)

    zimo = {'l': l, 'p': ms_to_pai[ms_arr[driver.execute_script('return V.V[0][V.V[0].length - 1]')]]}
    log_ = {'zimo': zimo}
    log.append(log_)
    history_idx += 4
  elif history[history_idx:].startswith('DR'):
    # 打牌
    dapai = {'l': l, 'p': ms_to_pai[history[history_idx + 2:history_idx + 4]]}
    log_ = {'dapai': dapai}
    log.append(log_)
    history_idx += 4
    l = (l + 1) % 4
  elif history[history_idx:].startswith('CK'):
    # 暗杠
    fuloupai = history[history_idx + 2:history_idx + 4]
    fulou_ = ms_to_gang[fuloupai]
    gang = {'l': l, 'm': fulou_}
    log_ = {'gang': gang}
    log.append(log_)
    history_idx += 4
    zimo = {'l': l, 'p': ms_to_pai[ms_arr[driver.execute_script('return V.Na')]]}
    log_ = {'gangzimo': zimo}
    log.append(log_)
  elif history[history_idx:].startswith('MK'):
    # 加杠
    fuloupai = history[history_idx + 2:history_idx + 4]
    fulou_ = ms_to_gang[fuloupai]
    gang = {'l': l, 'm': fulou_}
    log_ = {'gang': gang}
    log.append(log_)
    history_idx += 4
    gzimo = True
  elif history[history_idx:].startswith('MA'):
    # 自摸和
    log_ = {'hule': hule_json(l, None)}
    log.append(log_)
    history_idx += 2
  elif history[history_idx:].startswith('FM'):
    # 错和
    log_ = {'cuohu': hule_json(l, None)}
    log.append(log_)
    history_idx += 2
  elif history[history_idx:].startswith('PA'):
    # 摸牌
    zimo = {'l': l, 'p': ms_to_pai[ms_arr[driver.execute_script('return V.Na')]]}
    if gzimo:
      log_ = {'gangzimo': zimo}
      gzimo = False
    else:
      log_ = {'zimo': zimo}
    log.append(log_)
    history_idx += 2
  elif history[history_idx:].startswith('R'):
    # 开局补花
    buhua = {'l': history[history_idx + 1], 'p': ms_to_pai[history[history_idx + 2:history_idx + 4]]}
    log_ = {'buhua': buhua}
    log.append(log_)

    zimo = {'l': history[history_idx + 1], 'p': ms_to_pai[ms_arr[driver.execute_script('return V.V[0][V.V[0].length - 1]')]]}
    log_ = {'zimo': zimo}
    log.append(log_)
    history_idx += 4
  elif history[history_idx:].startswith('M'):
    # 点和
    log_ = {'hule': hule_json(int(history[history_idx + 1]), l - 1)}
    log.append(log_)
    history_idx += 2
  elif history[history_idx:].startswith('F'):
    print(f'UNKNOWN F!!! {history[history_idx:history_idx + 6]}')
  elif history[history_idx:].startswith('C'):
    # 吃
    fuloupai = ms_to_pai[history[history_idx - 2:history_idx]]
    fulou_ = ms_to_chi[history[history_idx + 2:history_idx + 4]]
    fulou_idx = fulou_[1:].find(fuloupai[1:])
    fulou = {'l': history[history_idx + 1], 'm': fulou_[:fulou_idx + 2] + '-' + fulou_[fulou_idx + 2:]}
    log_ = {'fulou': fulou}
    log.append(log_)
    history_idx += 4
  elif history[history_idx:].startswith('P'):
    # 碰
    fuloupai = history[history_idx - 2:history_idx]
    fulou_ = ms_to_peng[fuloupai]
    fulou_l = int(history[history_idx + 1])
    fulou = {'l': fulou_l, 'm': fulou_ + fulou_dir[(fulou_l  + 4 - l) % 4]}
    log_ = {'fulou': fulou}
    log.append(log_)
    history_idx += 2
    l = fulou_l
  elif history[history_idx:].startswith('K'):
    # 直杠
    fuloupai = history[history_idx - 2:history_idx]
    fulou_ = ms_to_gang[fuloupai]
    fulou_l = int(history[history_idx + 1])
    fulou = {'l': fulou_l, 'm': fulou_ + fulou_dir[(fulou_l  + 4 - l) % 4]}
    log_ = {'fulou': fulou}
    log.append(log_)
    history_idx += 2
    l = fulou_l
    zimo = {'l': l, 'p': ms_to_pai[ms_arr[driver.execute_script('return V.Na')]]}
    log_ = {'gangzimo': zimo}
    log.append(log_)
  else:
    print(f'UNKNOWN ACTION!!! {history[history_idx:history_idx + 6]}')
  count += 1

paipu['log'].append(log)
# TODO:
paipu['defen'] = defen
paipu['point'] = defen
paipu['rank'] = [1, 2, 3, 4]
print(json.dumps(paipu, ensure_ascii=False, separators=(',', ':')).encode('utf8').decode())
