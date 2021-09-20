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

const updateResourceHistory = async (array) => {
  try {
    AsyncStorage.setItem('historyArray', JSON.stringify(array));
  } catch (e) {
    return false;
  }
};

const createNewHistoryElement = (valuesArray) => {
  return valuesArray.map((value) => ({
    name: value.name,
    value: value.value,
  }));
};

const addNewHistoryElement = async (valuesArray, setGeneration) => {
  const current = await getResourceHistory('historyArray');
  if (current) {
    const newArray = [...current, createNewHistoryElement(valuesArray)];
    updateResourceHistory(newArray);
    setGeneration(newArray.length);
  }
};

const setValuesFromHistory = async (array, valuesArray) => {
  for (const el of array) {
    const setter = getRelatedSetter(el.name, valuesArray);
    setter(Number(el.value));
  }
};

const removeLastHistoryElement = async (valuesArray, setGeneration) => {
  const historyArray = await getResourceHistory('historyArray');
  if (historyArray && historyArray.length > 1) {
    historyArray.pop();
    updateResourceHistory(historyArray);
    setValuesFromHistory(historyArray[historyArray.length - 1], valuesArray);
    setGeneration(historyArray.length);
  }
};

//mutate lasthistory array element with current valuesArray
const mutateLastHistoryElement = async (valuesArray) => {
  const historyArray = await getResourceHistory('historyArray');
  historyArray.pop();
  const newElement = createNewHistoryElement(valuesArray);
  updateResourceHistory([...historyArray, newElement]);
};

//get setter by name
const getRelatedSetter = (setterName, currentValuesArray) => {
  for (let i = 0; i < currentValuesArray.length; i++) {
    if (currentValuesArray[i].name === setterName) {
      return currentValuesArray[i].setter;
    }
  }
};

const handleResourceChange = (name, val, valuesArray) => {
  for (let i = 0; i < valuesArray.length; i++) {
    if (valuesArray[i].name === name) {
      valuesArray[i].setter((prev) => prev + val);
      mutateLastHistoryElement(valuesArray);
    }
  }
};

const handleReset = async (valuesArray, setGeneration) => {
  for (let i = 0; i < valuesArray.length; i++) {
    if (valuesArray[i].name === 'TR') {
      valuesArray[i].setter(20);
    } else valuesArray[i].setter(0);
  }
  const firstElement = createNewHistoryElement(valuesArray);
  updateResourceHistory([firstElement]);
  setGeneration([firstElement].length);
};

//load values if available on load:
const loadValuesFromHistoryArray = async (valuesArray, setGeneration) => {
  const array = await getResourceHistory();
  if (array) {
    setValuesFromHistory(array[array.length - 1], valuesArray);
    setGeneration(array.length);
  } else {
    for (const el of valuesArray) {
      const setter = getRelatedSetter(el.name, valuesArray);
      setter(Number(el.value));
    }
    const startingArray = [createNewHistoryElement(valuesArray)];
    updateResourceHistory(startingArray);
    setGeneration(startingArray);
  }
};

export {
  addNewHistoryElement,
  removeLastHistoryElement,
  loadValuesFromHistoryArray,
  getRelatedSetter,
  handleResourceChange,
  handleReset,
  mutateLastHistoryElement,
};
