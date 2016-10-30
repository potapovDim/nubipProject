//величина резервного запасу
export const sternNeed = (k = 1.05, D = 255, a, m) => {
  //к - коефіцієнт == 1.05
  //D - кількість днів , на який період буде зберігатися корм
  //а - добова норма для тварини
  //m - кількість тварин в групі
  return (k * D * a * m).toFixed(2)
}

//sternStocks - об'єм корму в метрах кубічних
export const sternStore = (G, p) => {
  //G - необхідна кількість корму в кг - sternStocks
  //р - об'ємна маса корму
  return G / p
}
export const quantityStores = (sternQuantity, storeVolume) => {
  //sternQuantity - кількість корму в метрах кубічних
  //storeVolume - об'єм одного сховища
}
