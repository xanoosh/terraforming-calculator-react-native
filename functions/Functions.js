import AsyncStorage from '@react-native-async-storage/async-storage';

//get AsyncStorage data or return false
const getData = async (name) => {
  try {
    const value = await AsyncStorage.getItem(name);
    if (value !== null) return value;
    else return false;
  } catch (e) {
    return false;
  }
};

//save resource changes in asyncstorage
const saveResource = (name, val) => {
  (async () => {
    await AsyncStorage.setItem(name, val + '');
  })();
};

//load values if available:
const loadValues = async (valuesArray) => {
  for (const value of valuesArray) {
    const resource = await getData(value.name);
    try {
      value.setter(Number(resource));
    } catch (e) {
      if (resource === 'TR') value.setter(20);
      else value.setter(0);
    }
    // const resource = await getData(value.name);
    // const setter = value.setter;
    // if (resource) setter(Number(resource));
  }
};
// (async () => {
//   const moneyValue = await getData('Money');
//   if (moneyValue) setMoney(Number(moneyValue));
//   const moneyProd = await getData('MoneyProd');
//   if (moneyProd) setMoneyProd(Number(moneyProd));
//   const steelValue = await getData('Steel');
//   if (steelValue) setSteel(Number(steelValue));
//   const steelProd = await getData('SteelProd');
//   if (steelProd) setSteelProd(Number(steelProd));
//   const titaniumValue = await getData('Titanium');
//   if (titaniumValue) setTitanium(Number(titaniumValue));
//   const titaniumProd = await getData('TitaniumProd');
//   if (titaniumProd) setTitaniumProd(Number(titaniumProd));
//   const plantValue = await getData('Plant');
//   if (plantValue) setPlant(Number(plantValue));
//   const plantProd = await getData('PlantProd');
//   if (plantProd) setPlantProd(Number(plantProd));
//   const energyValue = await getData('Energy');
//   if (energyValue) setEnergy(Number(energyValue));
//   const energyProd = await getData('EnergyProd');
//   if (energyProd) setEnergyProd(Number(energyProd));
//   const heatValue = await getData('Heat');
//   if (heatValue) setHeat(Number(heatValue));
//   const heatProd = await getData('HeatProd');
//   if (heatProd) setHeatProd(Number(heatProd));
//   const TR = await getData('TR');
//   if (TR) setTR(Number(TR));
// })();

export { getData, saveResource, loadValues };
