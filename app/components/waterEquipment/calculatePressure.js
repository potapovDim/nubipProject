export const calculateLostPressure = (d, l) => {
  return 0.21 * ((1 * l) / (2 * 9.81 * d))
}

export const placeResistans = (resistans) => {
  let lostPressure = 0
  for (let i = 0; i < resistans.length; i++) {
    lostPressure += (1 / (2 * 9.81)) * resistans[i]
  }
  return lostPressure
}
