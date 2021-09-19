// resource history array data manipulation:

import AsyncStorage from '@react-native-async-storage/async-storage';

const getResourceHistory = async () => {
  try {
    const array = await AsyncStorage.getItem('historyArray');
    if (array !== null && JSON.parse(array).length) return JSON.parse(array);
    else return false;
  } catch (e) {
    return false;
  }
};

const updateResourceHistory = (array) => {
  (async () => {
    await AsyncStorage.setItem('historyArray', JSON.stringify(array));
  })();
};

const createNewHistoryElement = (valuesArray) => {
  return valuesArray.map((value) => ({
    name: value.name,
    value: value.value,
  }));
};

const addNewHistoryElement = (valuesArray) => {
  const current = getResourceHistory('historyArray');
  updateResourceHistory([...current, createNewHistoryElement(valuesArray)]);
};

const removeLastHistoryElement = () => {
  const historyArray = getResourceHistory('historyArray');
  historyArray.pop();
  updateResourceHistory(historyArray);
};

const mutateLastHistoryElement = (name, val) => {
  const historyArray = getResourceHistory('historyArray');
  const lastHistoryElement = historyArray.pop();
  for (let i = 0; i < lastHistoryElement.length; i++) {
    if (lastHistoryElement[i].name === name) {
      lastHistoryElement[i].value = val;
    }
  }
  updateResourceHistory([...historyArray, lastHistoryElement]);
};

//get setter by name
const getRelatedSetter = (setterName, currentValuesArray) => {
  for (let i = 0; i < currentValuesArray.length; i++) {
    if (currentValuesArray[i].name === setterName) {
      return currentValuesArray[i].setter;
    }
  }
};

//change specific item value:
// const handleResourceChange = (name, val, currentValuesArray) => {
//   for (let i = 0; i < currentValuesArray.length; i++) {
//     if (currentValuesArray[i].name === name) {
//       // saveResource(name, currentValuesArray[i].value + val);
//       valuesArray[i].setter((prev) => prev + val);
//     }
//   }
// };

const handleResourceChange = (name, val, valuesArray) => {
  for (let i = 0; i < valuesArray.length; i++) {
    if (valuesArray[i].name === name) {
      valuesArray[i].setter((prev) => prev + val);
      //mutate and update historyArray
      mutateLastHistoryElement(name, valuesArray[i].value);
    }
  }
};

const handleReset = (valuesArray) => {
  const fullHistory = getResourceHistory();
  for (let i = 0; i < valuesArray.length; i++) {
    if (valuesArray[i].name === 'TR') {
      valuesArray[i].setter(20);
    } else valuesArray[i].setter(0);
  }
  updateResourceHistory(createNewHistoryElement(valuesArray));
};

//load values if available:
const loadValuesFromHistoryArray = (valuesArray) => {
  const array = getResourceHistory();
  if (array?.length) {
    const resourcesData = array[array.length];
    for (const el of resourcesData) {
      const setter = getRelatedSetter(el.name, valuesArray);
      setter(Number(el.value));
    }
  } else {
    for (const el of valuesArray) {
      const setter = getRelatedSetter(el.name, valuesArray);
      // setter(Number(el.name));
      setter(Number(el.value));
    }
    updateResourceHistory(createNewHistoryElement(valuesArray));
  }
};

export {
  addNewHistoryElement,
  removeLastHistoryElement,
  loadValuesFromHistoryArray,
  getRelatedSetter,
  handleResourceChange,
  handleReset,
};
