import React from 'react'
import _ from 'lodash'
const productivityEveryLine = (mass , time = 2) => mass / time  //продуктивність кожної технологічної лінії , ділення маси на час

const SternCookBuild = ({allStern}) => {
    const oneCycleStern = _.mapValues(allStern , (value) => value/ season_stall / 3)
}