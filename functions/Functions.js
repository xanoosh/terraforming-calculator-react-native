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
    try {
      const resource = await getData(value.name);
      value.setter(Number(resource));
    } catch (e) {
      //do nothing
    }
  }
};

//reset resoucers data:
const handleReset = (valuesArray) => {
  valuesArray.forEach((value) => {
    if (value.name === 'TR') {
      saveResource(value.name, 0);
      value.setter(0);
    } else {
      saveResource(value.name, 20);
      value.setter(20);
    }
  });
};

//change specific item value:
const handleResourceChange = (name, val, valuesArray) => {
  for (let i = 0; i < valuesArray.length; i++) {
    if ((valuesArray[i].name = name)) {
      saveResource(name, valuesArray[i].value + val);
      valuesArray[i].setter((prev) => prev + val);
    }
  }
};

// const handleChange = (name, val, valuesArray) => {
//   if (name === 'Money') {
//     saveResource(name, money + val);
//     setMoney((prev) => prev + val);
//   }
//   if (name === 'MoneyProd') {
//     saveResource(name, moneyProd + val);
//     setMoneyProd((prev) => prev + val);
//   }
//   if (name === 'Steel') {
//     saveResource(name, steel + val);
//     setSteel((prev) => prev + val);
//   }
//   if (name === 'SteelProd') {
//     saveResource(name, steelProd + val);
//     setSteelProd((prev) => prev + val);
//   }
//   if (name === 'Titanium') {
//     saveResource(name, titanium + val);
//     setTitanium((prev) => prev + val);
//   }
//   if (name === 'TitaniumProd') {
//     saveResource(name, titaniumProd + val);
//     setTitaniumProd((prev) => prev + val);
//   }
//   if (name === 'Plant') {
//     saveResource(name, plant + val);
//     setPlant((prev) => prev + val);
//   }
//   if (name === 'PlantProd') {
//     saveResource(name, plantProd + val);
//     setPlantProd((prev) => prev + val);
//   }
//   if (name === 'Energy') {
//     saveResource(name, energy + val);
//     setEnergy((prev) => prev + val);
//   }
//   if (name === 'EnergyProd') {
//     saveResource(name, energyProd + val);
//     setEnergyProd((prev) => prev + val);
//   }
//   if (name === 'Heat') {
//     saveResource(name, heat + val);
//     setHeat((prev) => prev + val);
//   }
//   if (name === 'HeatProd') {
//     saveResource(name, heatProd + val);
//     setHeatProd((prev) => prev + val);
//   }
//   if (name === 'TR') {
//     saveResource(name, TR + val);
//     setTR((prev) => prev + val);
//   }
// };

export { saveResource, loadValues, handleReset, handleResourceChange };
