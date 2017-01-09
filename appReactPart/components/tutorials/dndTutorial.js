import React from 'react'
import {Popover} from 'react-bootstrap'

export const BuildingsTutorial = () =>
  <Popover id="popover-positioned-left" title="Підказки для користування розміщення плана поля">
    <div><strong>Розмістіть блоки корівників так, як ви вважаєте за потрібне</strong>
      Написніть на кожному блоці розрахувати відстань , для розрахунку відстані до попереднього корівника
    </div>
    <div><strong>Перевірте відстані</strong> Після розрахунку відстаней , підтвердіть відстані для подальшого розрахунку
    </div>
  </Popover>
