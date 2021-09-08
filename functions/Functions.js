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

//Resource array history data start
const getResourceHistory = async (arrayName) => {
  try {
    const array = await AsyncStorage.getItem(arrayName);
    if (array !== null && Json.parse(array).length) return Json.parse(array);
    else return false;
  } catch (e) {
    return false;
  }
};

//cases:
// 1.resource history set on load/reset
// need some constant array for that.
// 2. resource history on advGeneration (add new value to array)
// 3. goback in history (remove las element and load again)
// 4.any change in current array (resourceArr) changes last element of historyArray

const updateResourceHistory = (arrName, historyArr) => {
  (async () => {
    await AsyncStorage.setItem(arrName, Json.stringify(historyArr));
  })();
};

const createNewHistoryElement = (valuesArray) => {
  return valuesArray.map((value) => ({
    name: value.name,
    value: value.value,
  }));
};

const addNewHistoryElement = (historyArrName, valuesArray) => {
  const current = getResourceHistory(historyArrName);
  updateResourceHistory(historyArrName, [
    ...current,
    createNewHistoryElement(valuesArray),
  ]);
};
const removeLastHistoryElement = (historyArrName) => {
  const current = getResourceHistory(historyArrName);
  updateResourceHistory(historyArrName, [
    ...current.slice(0, current.length - 1),
  ]);
};

//Resource array history data end

//load values if available:
const loadValues = async (currentValuesArray) => {
  for (const value of currentValuesArray) {
    try {
      const resource = await getData(value.name);
      value.setter(Number(resource));
    } catch (e) {
      return false;
    }
  }
};

//reset resoucers data:
const handleReset = (currentValuesArray) => {
  currentValuesArray.forEach((value) => {
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
const handleResourceChange = (name, val, currentValuesArray) => {
  for (let i = 0; i < currentValuesArray.length; i++) {
    if (currentValuesArray[i].name === name) {
      // saveResource(name, currentValuesArray[i].value + val);
      valuesArray[i].setter((prev) => prev + val);
    }
  }
};

export { saveResource, loadValues, handleReset, handleResourceChange };
