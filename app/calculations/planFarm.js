const sternStocks = (k, D, a, m) => {
  //к - коефіцієнт == 1.05
  //D - кількість днів , на який період буде зберігатися корм
  //а - добова норма для тварини
  //m - кількість тварин в групі
  return k * D * a * m
}
const sternStore = (G, p) => {
  //G - необхідна кількість корму в кг
  //р - об'ємна маса корму
  return G / p
}
const quantityStors = (sternType,sternQuantity,storeVolume) => {
  switch (sternType){

  }
}