import React from 'react'
import {Popover} from 'react-bootstrap'

export const SternTutorial = () =>
  <Popover id="popover-positioned-left" title="Підказка для введення поля">
    <div><strong>Середньорічний надій</strong> Кількість кілограмів молока , що дає одна корова протягом року
      (4000,5000,або 6000 ) кг
    </div>
    <div><strong>Вибір відгодівлі молодняку</strong> Інтенсивний чи багатокомпонентний , на вибір
    </div>
    <div>
      <strong>Проведення розрахунку</strong>
      Для проведення розрахунку потрібно вибрати середньорічний надій , вид відгодівлі молодняку , та натиснути "Розрахунок загальної потреби"
    </div>
  </Popover>