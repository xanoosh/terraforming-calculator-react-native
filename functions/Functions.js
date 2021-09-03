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
      saveResource(value.name, 20);
      value.setter(20);
    } else {
      saveResource(value.name, 0);
      value.setter(0);
    }
  });
};

//change specific item value:
const handleResourceChange = (name, val, valuesArray) => {
  for (let i = 0; i < valuesArray.length; i++) {
    if (valuesArray[i].name === name) {
      saveResource(name, valuesArray[i].value + val);
      valuesArray[i].setter((prev) => prev + val);
    }
  }
};

export { saveResource, loadValues, handleReset, handleResourceChange };
