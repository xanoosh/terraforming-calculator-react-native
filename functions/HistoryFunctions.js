// resource history array data manipulation:

const getResourceHistory = async () => {
  try {
    const array = await AsyncStorage.getItem('historyArray');
    if (array !== null && Json.parse(array).length) return Json.parse(array);
    else return false;
  } catch (e) {
    return false;
  }
};

const updateResourceHistory = (array) => {
  (async () => {
    await AsyncStorage.setItem('historyArray', Json.stringify(array));
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

//get setter by name
const getRelatedSetter = (setterName, currentValuesArray) => {
  for (let i = 0; i < currentValuesArray.length; i++) {
    if (currentValuesArray[i].name === setterName) {
      return currentValuesArray[i].setter;
    }
  }
};

//load values if available:
const loadValuesFromHistoryArray = (array, currentValuesArray) => {
  const resourcesEl = array[array.length - 1];
  for (const el of resourcesEl) {
    const setter = getRelatedSetter(el.name, currentValuesArray);
    setter(Number(el.name));
  }
};

export {
  addNewHistoryElement,
  removeLastHistoryElement,
  loadValuesFromHistoryArray,
};
